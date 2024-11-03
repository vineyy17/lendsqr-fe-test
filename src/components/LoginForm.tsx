import { useState } from 'react';
import '../styles/pages/Login.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { formSchema, FormType } from '../utils/formSchema';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState } = useForm<FormType>({
    resolver: zodResolver(formSchema, {}, { raw: true }),
    mode: 'onBlur',
  });

  const { errors } = formState;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: FormType) => {
    const formData = {
      ...data,
    };

    console.log('formData', formData);
  };

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
          //   disabled={}
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
          //   disabled={}
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

      <p className="login__right__wrapper__form__forgotPassword">
        Forgot Password
      </p>

      <button type="submit" className="login__right__wrapper__form__button">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
