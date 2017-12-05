import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as fromConnected from '../../ducks/connected';
import * as fromChannel from '../../ducks/channel';

class Connect extends Component {
  componentDidMount() {
    const { disconnect, thr0wConnect, setChannel } = this.props;
    let connecting = true;
    function repeat() {
      if (!connecting) return;
      thr0wConnect()
        .then(
          () => { connecting = false; },
          () => window.setTimeout(repeat, 5000),
        );
    }
    function checkEsc(e) {
      if (e.keyCode !== 27) return;
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
  disconnect: PropTypes.func.isRequired,
  setChannel: PropTypes.func.isRequired,
  thr0wConnect: PropTypes.func.isRequired,
};
export default connect(
  null,
  {
    disconnect: fromConnected.disconnect,
    setChannel: fromChannel.setChannel,
    thr0wConnect: fromConnected.connect,
  },
)(Connect);
