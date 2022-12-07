import { PropsWithChildren } from "react";
import styles from './CharacterCard.module.css'

export const CharacterCard = (props: PropsWithChildren) => {
    return (
        <div className={styles.charCard}>{props.children}</div>
    )
}