// our-domain.com/character/[name]
// via useCallback
import { ftruncate } from 'fs';
import { useRouter } from 'next/router';
import {useCallback, useEffect, useState} from 'react';
import { CharacterCard } from '../ui/CharacterCard';

import { PRIVATE_API_KEY, PUBLIC_API_KEY } from '../../private/keys';

import md5 from 'md5';

type SingleCharacter = {
  id: number;
  name: string;
  description: string;
  thumbnail: { path: string; extension: string };
};

const timestamp = new Date().getTime();
const newhash = md5(timestamp + PRIVATE_API_KEY + PUBLIC_API_KEY);

let charData: SingleCharacter;

const Character = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [characterData, setCharacterData] = useState<SingleCharacter>(undefined);

  const router = useRouter();
  const name = router.query.name;

  let marvelUrl = `https://gateway.marvel.com/v1/public/characters?name=${name}&ts=${timestamp}&apikey=${PUBLIC_API_KEY}&hash=${newhash}`;

  const wrapperAsyncFunction = useCallback(
    async () => {
      setIsLoading(true);
      const response = await fetch(marvelUrl);
      const { data } = await response.json();
      charData = data.results[0];
      setCharacterData(charData)
      setIsLoading(false);
    },
    [name],
  );


  useEffect(() => {
    if (name) {
      wrapperAsyncFunction().catch(console.error);
    }
  }, [name]);

  console.log('Character Data: ', characterData);
  return (
    <CharacterCard>
      {/* <h2>{name}</h2> */}
      {!isLoading && characterData && <h1>{characterData.name}</h1>}
      {!isLoading && characterData && <h2>{characterData.description}</h2>}
      {!isLoading && characterData && (
        <img src={characterData.thumbnail.path+'.jpg'} alt={characterData.name} />
      )}
    </CharacterCard>
  );
};

export default Character;

// doesn't load on page load as useEffect should work, but when u change something and don't reload