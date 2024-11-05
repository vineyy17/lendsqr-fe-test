import { useEffect, useState } from 'react';
import '../styles/pages/Login.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { formSchema, FormType } from '../utils/formSchema';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { SyncLoader } from 'react-spinners';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { userData } from '../data/userData';
import toast from 'react-hot-toast';

const override = {
  display: 'block',
  margin: '0 auto',
};

const LoginForm = () => {
  const { login, isAuthenticated } = useAuth();

  // custom hook to manage local storage
  const [_, setUserData] = useLocalStorage('user', userData);

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { register, handleSubmit, formState } = useForm<FormType>({
    resolver: zodResolver(formSchema, {}, { raw: true }),
    mode: 'onBlur',
  });

  const { errors } = formState;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: FormType) => {
    setLoading(true);

    // Simulate loading for 2.5 seconds before calling login
    setTimeout(() => {
      login(data.email, data.password);
      setLoading(false);
    }, 2500);
  };

  useEffect(() => {
    if (isAuthenticated) {
      setUserData(userData);
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <form
      className="login__right__wrapper__form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="login__right__wrapper__form__inputWrapper">
        <input
          placeholder="Email"
          className="login__right__wrapper__form__input"
          type="email"
          id="email"
          {...register('email', { required: true })}
          disabled={loading}
        />
        {errors?.email?.message && typeof errors.email.message === 'string' && (
          <span className="login__right__wrapper__form__error">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="login__right__wrapper__form__inputWrapper">
        <input
          placeholder="Password"
          className="login__right__wrapper__form__input"
          type={showPassword ? 'text' : 'password'}
          id="password"
          {...register('password', { required: true })}
          disabled={loading}
        />

        {errors?.password?.message &&
          typeof errors.password.message === 'string' && (
            <span className="login__right__wrapper__form__error">
              {errors.password.message}
            </span>
          )}

        <p
          className="login__right__wrapper__form__inputWrapper__text"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? 'Hide' : 'Show'}
        </p>
      </div>

      <p
        className="login__right__wrapper__form__forgotPassword"
        onClick={() =>
          toast.success(
            'A reset password link has been successfully sent to your provided email address',
          )
        }
      >
        Forgot Password
      </p>

      <button
        type="submit"
        className="login__right__wrapper__form__button"
        disabled={loading}
      >
        {loading ? (
          <SyncLoader
            color="var(--color-white)"
            cssOverride={override}
            size="0.7rem"
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          'Log In'
        )}
      </button>
    </form>
  );
};

export default LoginForm;
