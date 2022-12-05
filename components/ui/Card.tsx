import { PropsWithChildren } from 'react';
import styles from './Card.module.css'

export const Card = (props: PropsWithChildren) => {
  return <div className={styles.card}>{props.children}</div>;
};
