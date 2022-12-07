import { FormEvent, useRef, useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import Link from 'next/link';

import styles from './login.module.css';

const Login = () => {
  const [usernameIsValid, setUsernameIsValid] = useState<boolean>(true);
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(true);
  const [usernameTouched, setUsernameTouched] = useState<boolean>(false)
  const [passwordTouched, setPasswordTouched] = useState<boolean>(false)

  // const [formIsValid, setFormIsValid] = useState<boolean>(false)

  // just validate if true and not empty

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onBlurUsernameHandler = () => {
    setUsernameTouched(true)
    const enteredUsername = usernameRef.current?.value;
    if (enteredUsername) {
      if (enteredUsername !== '' && enteredUsername.length > 5) {
        setUsernameIsValid(true);
      }
    }
  };

  const onBlurPasswordHandler = () => {
    setPasswordTouched(true)
    const enteredPassword = passwordRef.current?.value;
    if (enteredPassword) {
      if (enteredPassword !== '' && enteredPassword.length > 5) {
        setUsernameIsValid(true);
      }
    }
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
  
    if (usernameIsValid && passwordIsValid) {
      // send data
    }
  };

  return (
    <Card>
      <form className={styles.authWrapper}>
        <h1>Login</h1>
        <div className={styles.username}>
          <label htmlFor="username">Username:</label>
          <input
            ref={usernameRef}
            type="text"
            id="username"
            onBlur={onBlurUsernameHandler}
          />
        </div>
        <div className={styles.password}>
          <label htmlFor="password">Password:</label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            onBlur={onBlurPasswordHandler}
          />
        </div>
        <Link href="/">Cancel</Link>
        <Button onClick={submitHandler}>Login</Button>
      </form>
    </Card>
  );
};

export default Login;
