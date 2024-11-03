import { useState } from 'react';
import '../styles/pages/Login.scss';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="login__right__wrapper__form">
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
      <Link to="/users">
        <button className="login__right__wrapper__form__button">Log In</button>
      </Link>
    </form>
  );
};

export default LoginForm;
