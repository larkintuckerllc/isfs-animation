import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import * as fromAuthenticated from '../../../ducks/authenticated';
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
        <button
          disabled={!valid || submitting}
        >Channel
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
  validate: () => {
    const errors = {};
    // if (values.username === undefined) errors.username = '400';
    // if (values.password === undefined) errors.password = '400';
    return errors;
  },
})(Channel);
class ChannelSubmit extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    window.console.log(this);
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
};
export default connect(
  null,
  {
    logout: fromAuthenticated.logout,
  },
)(ChannelSubmit);
