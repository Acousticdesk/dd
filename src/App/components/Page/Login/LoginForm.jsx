import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import logo from '../../../../../static/assets/logo/@1x.png';

import PasswordInput from '../../Form/PasswordInput';
import Checkbox from '../../Form/Checkbox/index';
import Input from '../../Form/Input/index';

import validate from '../../../validations/login';

const LoginForm = ({
  onRememberMeChange,
  isRememberMe,
  handleSubmit,
  loader,
}) => (
  <form className="login-form" onSubmit={handleSubmit}>
    <div className="login-form__logo-container text-center">
      <img src={logo} alt="Logo" />
    </div>
    <h4 className="heading developers-platform-heading heading--large text-center">Developers Platform</h4>
    <div className="form">
      <div className="login-form__field-container">
        <Field
          name="email"
          type="text"
          placeholder="Your Email goes here"
          component={Input}
        />
      </div>
      <div className="login-form__field-container--offset-small">
        <Field name="password" component={PasswordInput} />
      </div>
      <div className="login-form__fields-footer">
        <div className="login-optionals">
          <div className="login-optionals__item-col--pull-left">
            <Checkbox label="Remember Me" onChange={onRememberMeChange} checked={isRememberMe} />
          </div>
          <div className="login-optionals__item-col">
            <button type="button" className="color--grey isCursorPointer isHoverUnderline">Forgot Password</button>
          </div>
        </div>
      </div>
      <div className="login-form__cta-container text-center">
        <button disabled={loader} type="submit" className="btn login-btn">Log In</button>
      </div>
      <div className="color--grey text-center">
        To register
        <a href="http://example.com" className="text-underline isCursorPointer">click here</a>
      </div>
    </div>
  </form>
);

LoginForm.defaultProps = {
  onRememberMeChange: null,
  isRememberMe: null,
  loader: null,
  handleSubmit: null,
};

LoginForm.propTypes = {
  onRememberMeChange: PropTypes.func,
  isRememberMe: PropTypes.bool,
  loader: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'login',
  validate,
})(LoginForm);
