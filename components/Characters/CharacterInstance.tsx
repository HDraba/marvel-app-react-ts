import Character from '../../pages/character';
import { CharacterCard } from '../ui/CharacterCard';

export type CharacterInstanceProps = {
  // id: number;
  name: string;
  image: string;
  description: string;
};

export const CharacterInstance = (props: CharacterInstanceProps) => {
    try {
        props.image
    } catch (error) {
        props.image = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
    }
  return (
    <CharacterCard>
      <div>
        <h1>{props.name}</h1>
      </div>
      {props.image && <img src={props.image} alt={props.name} />}
      <div>
        {props.description && <p id="desc">Description: {props.description}</p>}
      </div>
    </CharacterCard>
  );
};
