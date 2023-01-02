import { FormEvent, useRef, useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import Link from 'next/link';

import styles from './login.module.css';

import { FormattedDate, FormattedMessage } from 'react-intl';

const Login = () => {
  const [enteredUsername, setEnteredUsername] = useState<string>('');
  const [enteredPassword, setEnteredPassword] = useState<string>('');

  const [usernameTouched, setUsernameTouched] = useState<boolean>(false);
  const [passwordTouched, setPasswordTouched] = useState<boolean>(false);

  let usernameIsValid = enteredUsername.trim() !== '';
  <div>
    <p className="error-text">Please enter a valid username and password</p>
  </div>;
  const usernameIsInvalid = !usernameIsValid && usernameTouched;

  let passwordIsValid =
    enteredPassword.trim() !== '' && enteredPassword.length > 5;
  const passwordIsInvalid = !passwordIsValid && passwordTouched;

  let formIsValid = false;

  if (usernameIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const usernameChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    setEnteredUsername(event.currentTarget?.value);
  };

  const passwordChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    setEnteredPassword(event.currentTarget?.value);
  };

  const onBlurUsernameHandler = () => {
    setUsernameTouched(true);
  };

  const onBlurPasswordHandler = () => {
    setPasswordTouched(true);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    setUsernameTouched(true);
    setPasswordTouched(true);

    if (!usernameIsValid || !passwordIsValid) {
      return;
    }
    setEnteredUsername('');
    setEnteredPassword('');
    setUsernameTouched(false);
    setPasswordTouched(false);
  };
  const usernameClasses = usernameIsInvalid ? 'username invalid' : 'username';

  const passwordClasses = passwordIsInvalid ? 'password invalid' : 'password';

  return (
    <Card>
      <form className={styles.authWrapper}>
        <h1>Login</h1>
        <div data-testid="usernameInputDiv" className={usernameClasses}>
          <label htmlFor="username"><FormattedMessage id='username'/>:</label>
          <input {...(usernameIsInvalid ? {"aria-invalid": 'true', "aria-describedby": 'usernameInput-error'} : {})}
            data-testid="usernameInput"
            type="text"
            id="username"
            onBlur={onBlurUsernameHandler}
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          {usernameIsInvalid && (
            <div id='usernameInput-error'>
              <p className={styles.errorText}>
                <FormattedMessage id='valid-username' />
              </p>
            </div>
          )}
        </div>
        <div data-testid="passwordInputDiv" className={passwordClasses}>
          <label htmlFor="password"><FormattedMessage id='password'/>:</label>
          <input {...(passwordIsInvalid ? {"aria-invalid": 'true', "aria-describedby": 'passwordInput-error'} : {})}
            data-testid="passwordInput"
            type="password"
            id="password"
            onBlur={onBlurPasswordHandler}
            onChange={passwordChangeHandler}
            value={enteredPassword}
          />
          {passwordIsInvalid && (
            <div id='passwordInput-error'>
              <p className={styles.errorText}>
                <FormattedMessage id='valid-password'/>
              </p>
            </div>
          )}
        </div>
        <Link href="/"><FormattedMessage id='cancel-login'/></Link>
        <Button onClick={submitHandler}>Login</Button>
      </form>
    </Card>
  );
};

export default Login;
