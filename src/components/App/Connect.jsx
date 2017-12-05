import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { MATRIX, DIMENSIONS } from '../../config';
import { grid } from '../../util/grid';
import * as fromConnected from '../../ducks/connected';
import * as fromChannel from '../../ducks/channel';

class Connect extends Component {
  componentDidMount() {
    const {
      channel,
      disconnect,
      thr0wConnect,
      setChannel,
    } = this.props;
    let connecting = true;
    function repeat() {
      if (!connecting) return;
      thr0wConnect()
        .then(
          () => {
            connecting = false;
            const frameEl = document.getElementById('frame');
            const frameContentEl = document.getElementById('frame__content');
            grid(channel, frameEl, frameContentEl, MATRIX, DIMENSIONS);
          },
          () => window.setTimeout(repeat, 5000),
        );
    }
    function checkEsc(e) {
      if (e.keyCode !== 27) return;
      const frameEl = document.getElementById('frame');
      const frameContentEl = document.getElementById('frame__content');
      frameContentEl.style.width = '100%';
      frameContentEl.style.height = '100%';
      frameContentEl.style.left = '0px';
      frameContentEl.style.top = '0px';
      frameEl.style.width = '100%';
      frameEl.style.height = '100%';
      frameEl.style.transform = '';
      document.removeEventListener('keydown', checkEsc);
      connecting = false;
      setChannel(null);
      disconnect();
    }
    document.addEventListener('keydown', checkEsc);
    repeat();
  }
  render() {
    return (
      null
    );
  }
}
Connect.propTypes = {
  channel: PropTypes.number.isRequired,
  disconnect: PropTypes.func.isRequired,
  setChannel: PropTypes.func.isRequired,
  thr0wConnect: PropTypes.func.isRequired,
};
export default connect(
  state => ({
    channel: fromChannel.getChannel(state),
  }),
  {
    disconnect: fromConnected.disconnect,
    setChannel: fromChannel.setChannel,
    thr0wConnect: fromConnected.connect,
  },
)(Connect);
