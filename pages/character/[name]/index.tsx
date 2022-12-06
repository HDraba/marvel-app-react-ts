// our-domain.com/character/[name]

import { ftruncate } from 'fs';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CharacterCard } from '../../../components/ui/CharacterCard';

import { PRIVATE_API_KEY, PUBLIC_API_KEY } from '../../../private/keys';

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

let characterData: SingleCharacter;

const Character = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  const name = router.query.name;

  let marvelUrl = `https://gateway.marvel.com/v1/public/characters?name=${name}&ts=${timestamp}&apikey=${PUBLIC_API_KEY}&hash=${newhash}`;

  useEffect(() => {
    setIsLoading(true);
    const wrapperAsyncFunction = async () => {
      const getCharByName = async (url: string): Promise<SingleCharacter> => {
        const response = await fetch(url);
        const { data } = await response.json();
        charData = data.results[0];
        return charData;
      };
      characterData = await getCharByName(marvelUrl);
      setIsLoading(false);
    };
    wrapperAsyncFunction();
  }, [router]);

  console.log('Character Data: ', characterData);
  return (
    <CharacterCard>
      {/* <h2>{name}</h2> */}
      {!isLoading && characterData && <h1>{characterData.name}</h1>}
      {!isLoading && characterData && <h2>{characterData.description}</h2>}
      {!isLoading && characterData && (
        <img src={characterData.thumbnail.path} alt={characterData.name} />
      )}
    </CharacterCard>
  );
};

export default Character;

// doesn't load on page load as useEffect should work, but when u change something and don't reload
