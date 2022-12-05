import { PropsWithChildren } from "react";

type CharacterCardProps = PropsWithChildren<{
    characters: object[]
}>


export const CharacterCard = (props: CharacterCardProps) => {
    return (
        <div>{props.children}</div>
    )
}