import { FormEvent, useRef, useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import Link from 'next/link';

import styles from './login.module.css';

const Login = () => {
  const [enteredUsername, setEnteredUsername] = useState<string>('');
  const [enteredPassword, setEnteredPassword] = useState<string>('');

  const [usernameTouched, setUsernameTouched] = useState<boolean>(false);
  const [passwordTouched, setPasswordTouched] = useState<boolean>(false);

  let usernameIsValid = enteredUsername.trim() !== '';
        <div><p className='error-text'>Please enter a valid username and password</p></div>
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
        <div className={usernameClasses}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            onBlur={onBlurUsernameHandler}
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
        </div>
        {usernameIsInvalid && (
          <div>
            <p className=
            {styles.errorText}>
              Please enter a valid username and password
            </p>
          </div>
        )}
        <div className={passwordClasses}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onBlur={onBlurPasswordHandler}
            onChange={passwordChangeHandler}
            value={enteredPassword}
          />
        </div>
        {passwordIsInvalid && (
          <div>
            <p className={styles.errorText}>
              Please enter a valid username and password
            </p>
          </div>
        )}
        <Link href="/">Cancel</Link>
        <Button onClick={submitHandler}>Login</Button>
      </form>
    </Card>
  );
};

export default Login;
