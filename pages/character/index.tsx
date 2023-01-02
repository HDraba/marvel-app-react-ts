// our-domain.com/character

import Router, { useRouter } from 'next/router';
import { FormEvent, useRef, useState, useTransition } from 'react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import styles from './SearchCharacter.module.css';

import { FormattedMessage } from 'react-intl';

const SearchCharacter = () => {
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
        <h1><FormattedMessage id='char-search-hint'/></h1>
        <label htmlFor="Character-Name"><FormattedMessage id='char-name'/>: </label>
        <input
          ref={nameRef}
          type="text"
          name="Character-Name"
          id="Character-Name"
        />
        <br />
        <Button onClick={searchButtonClickHandler}><FormattedMessage id='search'/></Button>
      </form>
    </Card>
  );
};

export default SearchCharacter;
