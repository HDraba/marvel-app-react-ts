import { PropsWithChildren } from 'react';

export const Card = (props: PropsWithChildren) => {
  return <div>{props.children}</div>;
};
