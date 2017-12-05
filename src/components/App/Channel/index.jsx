import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as fromAuthenticated from '../../../ducks/authenticated';
import * as fromChannel from '../../../ducks/channel';
import styles from './index.css';

function Channel({
  handleSubmit,
  logout,
  submitting,
  valid,
}) {
  return (
    <div
      id={styles.root}
    >
      <form onSubmit={handleSubmit}>
        <Field
          component="input"
          name="channel"
        />
        <button
          disabled={!valid || submitting}
        >Connect
        </button>
      </form>
      <button
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
Channel.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
};
const ChannelForm = reduxForm({
  form: 'CHANNEL_FORM',
  validate: ({ channel }) => {
    const errors = {};
    if (channel === undefined) errors.channel = '400';
    return errors;
  },
})(Channel);
class ChannelSubmit extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit({ channel }) {
    const { setChannel } = this.props;
    setChannel(parseInt(channel, 10));
    return Promise.resolve();
  }
  render() {
    const { logout } = this.props;
    const { handleSubmit } = this;
    return (
      <ChannelForm
        logout={logout}
        onSubmit={handleSubmit}
      />
    );
  }
}
ChannelSubmit.propTypes = {
  logout: PropTypes.func.isRequired,
  setChannel: PropTypes.func.isRequired,
};
export default connect(
  null,
  {
    logout: fromAuthenticated.logout,
    setChannel: fromChannel.setChannel,
  },
)(ChannelSubmit);
