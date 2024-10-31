import '../styles/pages/Login.scss';
import loginImage from '../assets/images/login-image.webp';
import logo from '../assets/icons/logo-large.svg';
import { useState } from 'react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login">
      <div className="login__left">
        <img src={logo} className="login__left__logo" alt="Lendsqr logo" />
        <img
          src={loginImage}
          className="login__left__image"
          alt="login image"
        />
      </div>
      <div className="login__right">
        <div className="login__right__wrapper">
          <div className="login__right__wrapper__info">
            <p className="login__right__wrapper__info__topText">Welcome!</p>
            <p className="login__right__wrapper__info__bottomText">
              Enter details to login.
            </p>
          </div>
          <div className="login__right__wrapper__form">
            <input
              placeholder="Email"
              className="login__right__wrapper__form__input"
            />
            <div className="login__right__wrapper__form__inputWrapper">
              <input
                placeholder="Password"
                className="login__right__wrapper__form__input"
                type={showPassword ? 'text' : 'password'}
              />
              <p
                className="login__right__wrapper__form__inputWrapper__text"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 'Hide' : 'Show'}
              </p>
            </div>
            <p className="login__right__wrapper__form__forgotPassword">
              Forgot Password
            </p>
            <button className="login__right__wrapper__form__button">
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
