// domain.com/characters

import { useEffect, useState } from 'react';
import { CharacterList } from '../../components/Characters/CharacterList';
import { MainFooter } from '../../components/layout/MainFooter';
import { Spinner } from '../../components/ui/Spinner';
import { fetchingCharacters } from '../../helper/fetchingCharacters';

let characters: any[] = [];

const Characters = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetchingCharacters().then((data) => {
      setIsLoading(false);
      characters = data;
      console.log(characters);
    });
  }, []); // no dependencies so it loads directly at start and never again

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && <CharacterList characters={characters}></CharacterList>}
      {!isLoading && <MainFooter />}
    </>
  );
};

export default Characters;
