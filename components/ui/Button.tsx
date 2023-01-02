import { FormEvent, PropsWithChildren } from 'react';
import styles from './Button.module.css';

type ButtonProps = PropsWithChildren<{
  onClick: (e: FormEvent) => void;
}>;

export const Button = (props: ButtonProps) => {
  return (
    <>
      <button className={styles.button} onClick={props.onClick}>
        {props.children}
      </button>
    </>
  );
};
