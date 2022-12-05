// domain.com/characters

import { useEffect, useState } from 'react';
import { CharacterCard } from '../../components/ui/CharacterCard';
import { fetchingCharacters } from '../../helper/fetchingCharacters';

let characters: object[] = [];

const Characters = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetchingCharacters().then((data) => {
      setIsLoading(false);
      characters = data;
    });
  }, []); // no depencies so it loads directly at start and never again
  
  return (
    <h1>Here should be a list of 10 characters </h1>;
    {}
    <CharacterCard characters={characters}></CharacterCard>;
  )
  
};

export default Characters;

// loading states, some other card for a character and a single character
// login validation
