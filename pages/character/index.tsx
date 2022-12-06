// our-domain.com/character

import Router, { useRouter } from 'next/router';
import { FormEvent, useRef, useState, useTransition } from 'react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import styles from './Character.module.css';

const Character = () => {
  const router = useRouter()
  const nameRef = useRef<HTMLInputElement>(null);

  const searchButtonClickHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredName = nameRef.current!.value;
    console.log(enteredName);

    router.push(`/character/${enteredName}`)
  };

  return (
    <Card>
      <form className={styles.characterForm}>
        <h1>Search for a specific character of your choice!</h1>
        <label htmlFor="Character-Name">Character-Name: </label>
        <input
          ref={nameRef}
          type="text"
          name="Character-Name"
          id="Character-Name"
        />
        <br />
        <Button onClick={searchButtonClickHandler}>Search</Button>
      </form>
    </Card>
  );
};

export default Character;
