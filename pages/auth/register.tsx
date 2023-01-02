import { FormEvent, useState } from 'react';
import { Card } from '../../components/ui/Card';
import Link from 'next/link';

import styles from './login.module.css';
import { Button } from '../../components/ui/Button';

import { FormattedMessage } from 'react-intl';

const Register = () => {
  const [enteredUsername, setEnteredUsername] = useState<string>('');
  const [enteredPassword, setEnteredPassword] = useState<string>('');
  const [enteredRepeatPassword, setEnteredRepeatPassword] =
    useState<string>('');

  const [usernameTouched, setUsernameTouched] = useState<boolean>(false);
  const [passwordTouched, setPasswordTouched] = useState<boolean>(false);
  const [repeatPasswordTouched, setRepeatPasswordTouched] =
    useState<boolean>(false);

  let usernameIsValid = enteredUsername.trim() !== '';
  <div>
    <p className="error-text">Please enter a valid username and password</p>
  </div>;
  const usernameIsInvalid = !usernameIsValid && usernameTouched;

  let passwordIsValid =
    enteredPassword.trim() !== '' && enteredPassword.length > 5;
  const passwordIsInvalid = !passwordIsValid && passwordTouched;

  let repeatPasswordIsValid =
    enteredRepeatPassword.trim() !== '' && enteredRepeatPassword.length > 5;
  const repeatPasswordIsInvalid =
    !repeatPasswordIsValid && repeatPasswordTouched;


  console.log('password: ', enteredPassword, passwordIsValid, passwordIsInvalid);

  console.log('repeatPassword: ', enteredRepeatPassword, repeatPasswordIsValid, repeatPasswordIsInvalid);
  
  const passwordsAreInvalid = passwordIsValid !== repeatPasswordIsValid && (passwordTouched && repeatPasswordTouched)

  let formIsValid = false;

  if (usernameIsValid && passwordsAreInvalid) {
    formIsValid = true;
  }

  const usernameChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    setEnteredUsername(event.currentTarget?.value);
  };

  const passwordChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    setEnteredPassword(event.currentTarget?.value);
  };

  const repeatPasswordChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    setEnteredRepeatPassword(event.currentTarget?.value);
  };

  const onBlurUsernameHandler = () => {
    setUsernameTouched(true);
  };

  const onBlurPasswordHandler = () => {
    setPasswordTouched(true);
  };

  const onBlurRepeatPasswordHandler = () => {
    setRepeatPasswordTouched(true);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    setUsernameTouched(true);
    setPasswordTouched(true);
    setRepeatPasswordTouched(true);

    if (!usernameIsValid || !passwordIsValid || !repeatPasswordIsValid) {
      return;
    }
    console.log('HAPPY HANUKA');

    setEnteredUsername('');
    setEnteredPassword('');
    setEnteredRepeatPassword('');
    setUsernameTouched(false);
    setPasswordTouched(false);
    setRepeatPasswordTouched(false);
  };
  const usernameClasses = usernameIsInvalid ? 'username invalid' : 'username';

  const passwordClasses = passwordIsInvalid ? 'password invalid' : 'password';

  const repeatPasswordClasses = repeatPasswordIsInvalid
    ? 'password invalid'
    : 'password';

  return (
    <Card>
      <form className={styles.authWrapper}>
        <h1>Login</h1>
        <div className={usernameClasses}>
          <label htmlFor="username"><FormattedMessage id='username'/>:</label>
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
            <p className={styles.errorText}><FormattedMessage id='valid-username'/></p>
          </div>
        )}
        <div className={passwordClasses}>
          <label htmlFor="password"><FormattedMessage id='password'/>:</label>
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
            <p className={styles.errorText}><FormattedMessage id='valid-password'/></p>
          </div>
        )}
        <div className={repeatPasswordClasses}>
          <label htmlFor="repeatPassword"><FormattedMessage id='repeat-password'/>:</label>
          <input
            type="password"
            id="repeatPassword"
            onBlur={onBlurRepeatPasswordHandler}
            onChange={repeatPasswordChangeHandler}
            value={enteredRepeatPassword}
          />
        </div>
        {repeatPasswordIsInvalid && (
          <div>
            <p className={styles.errorText}><FormattedMessage id='repeated-error'/></p>
          </div>
        )}
        {passwordsAreInvalid && (
          <div>
            <p className={styles.errorText}><FormattedMessage id='repeat-error'/></p>
          </div>
        )}
        <Link href="/"><FormattedMessage id='cancel-login'/></Link>
        <Button onClick={submitHandler}>Login</Button>
      </form>
    </Card>
  );
};

export default Register;
