import { PropsWithChildren } from "react";
import styles from './CharacterCard.module.css'

// type CharacterCardProps = PropsWithChildren<{
    // characters: object[]
// }>


export const CharacterCard = (props: PropsWithChildren) => {
    return (
        <div className={styles.charCard}>{props.children}</div>
    )
}