import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import * as fromAuthenticated from '../../../ducks/authenticated';
import styles from './index.css';

function Authentication({
  handleSubmit,
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
          name="username"
          type="text"
        />
        <Field
          component="input"
          name="password"
          type="password"
        />
        <button
          disabled={!valid || submitting}
        >Login
        </button>
      </form>
    </div>
  );
}
Authentication.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
};
const AuthenticationForm = reduxForm({
  form: 'AUTHENTICATION_FORM',
  validate: ({ password, username }) => {
    const errors = {};
    if (username === undefined) errors.username = '400';
    if (password === undefined) errors.password = '400';
    return errors;
  },
})(Authentication);
class AuthenticationSubmit extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit({ username, password }) {
    const { login } = this.props;
    return login(username, password)
      .then(
        () => {},
        () => {
          throw new SubmissionError({});
        },
      );
  }
  render() {
    const { handleSubmit } = this;
    return (
      <AuthenticationForm
        onSubmit={handleSubmit}
      />
    );
  }
}
AuthenticationSubmit.propTypes = {
  login: PropTypes.func.isRequired,
};
export default connect(
  null,
  {
    login: fromAuthenticated.login,
  },
)(AuthenticationSubmit);
