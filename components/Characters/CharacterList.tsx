import { CharacterInstance, CharacterInstanceProps } from './CharacterInstance';
import styles from './CharacterList.module.css'

type CharacterInstance = {
  id: number
  name: string;
  thumbnail: { path: string };
  description: string;
};

type CharacterListProps = {
  characters: CharacterInstance[];
};

export const CharacterList = (props: CharacterListProps) => {
  return (
    <>
      <ul className={styles.list}>
        {props.characters.map((character) => {
          return (
            <li>
              <CharacterInstance
                key={character.id}
                name={character.name}
                image={`${character.thumbnail.path}.jpg`}
                description={character.description}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};
