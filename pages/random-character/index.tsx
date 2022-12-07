import { useEffect, useState } from 'react';
import { CharacterCard } from '../../components/ui/CharacterCard';
import { Spinner } from '../../components/ui/Spinner';
import { fetchRandomCharacter } from '../../helper/fetchRandomCharacter';

type Character = {
  name: string;
  description: string;
  imageUrl: string;
}

const RandomCharacter = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  const [character, setCharacter] = useState<Character | null>(null);

  const getRandomCharacterButtonHandler = async () => {
    setIsLoading(true)
    const fetchedCharacter = await fetchRandomCharacter();
    setCharacter(fetchedCharacter);
    if (!buttonPressed) {
      setButtonPressed(true);
    }
    setIsLoading(false)
  };

  return (
    <>
      <div>
        <h2>Hello mysterious wanderer!</h2>
        <p>Are you interested in getting some secrets?</p>
        <button onClick={getRandomCharacterButtonHandler}>
          Get a random character
        </button>
      </div>
      {isLoading && <Spinner />}
      {buttonPressed && !isLoading && (
        <CharacterCard>
          <h1>{character?.name}</h1>
          <img src={character?.imageUrl} alt={character?.name} />
          <p>{character?.description}</p>
        </CharacterCard>
      )}
    </>
  );
};

export default RandomCharacter;
