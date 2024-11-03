import '../styles/pages/Login.scss';
import loginImage from '../assets/images/login-image.webp';
import logo from '../assets/icons/logo-large.svg';
import LoginForm from '../components/LoginForm';

const Login = () => {
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
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
