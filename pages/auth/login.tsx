import { FormEvent, useRef } from 'react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import Link from 'next/link';

import styles from './login.module.css';

const Login = () => {

    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredUsername =  usernameRef.current!.value
    const enteredPassword = passwordRef.current!.value

    console.log(enteredUsername, enteredPassword);
  };

  return (
    <Card>
      <form className={styles.authWrapper} >
        <h1>Login</h1>
        <div className={styles.username}>
          <label htmlFor="username">Username:</label>
          <input ref={usernameRef} type="text" id="username" />
        </div>
        <div className={styles.password}>
          <label htmlFor="password">Password:</label>
          <input ref={passwordRef} type="password" id="password" />
        </div>
        <Link href='/'>Cancel</Link>        
        <Button onClick={submitHandler}>Login</Button>
      </form>
    </Card>
  );
};

export default Login;
