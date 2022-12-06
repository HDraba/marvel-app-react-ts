// our-domain.com/character/[name]

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CharacterCard } from '../../../components/ui/CharacterCard';

import { PRIVATE_API_KEY, PUBLIC_API_KEY } from '../../../private/keys';

import md5 from 'md5';
import { GetServerSideProps } from 'next';

type SingleCharacter = {
  id: number;
  name: string;
  description: string;
  thumbnail: { path: string; extension: string };
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const name = context.params?.name

  const timestamp = new Date().getTime();
  const newhash = md5(timestamp + PRIVATE_API_KEY + PUBLIC_API_KEY);
  const marvelUrl = `https://gateway.marvel.com/v1/public/characters?name=${name}&ts=${timestamp}&apikey=${PUBLIC_API_KEY}&hash=${newhash}`;
  
  const response = await fetch(marvelUrl);
  const { data } = await response.json();
  const newCharacterData = data.results[0];

  return {props: {character: newCharacterData }}
};

type CharacterProps = {
  character?: SingleCharacter
}

const Character = ({character}: CharacterProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [characterData, setCharacterData] = useState<SingleCharacter | undefined>(
    character
  );

  const router = useRouter();
  const name = router.query.name;

  // not serverside executed - so you have to hand over the missing parts via serversideprops
  useEffect(() => {
    setIsLoading(true);
    const wrapperAsyncFunction = async () => {
        const timestamp = new Date().getTime();
        const newhash = md5(timestamp + PRIVATE_API_KEY + PUBLIC_API_KEY);
        const marvelUrl = `https://gateway.marvel.com/v1/public/characters?name=${name}&ts=${timestamp}&apikey=${PUBLIC_API_KEY}&hash=${newhash}`;
        
        const response = await fetch(marvelUrl);
        const { data } = await response.json();
        const newCharacterData = data.results[0];
        setCharacterData(newCharacterData);

      setIsLoading(false);
    };
    wrapperAsyncFunction();
  }, [name]);

  console.log('Character Data: ', characterData);
  return (
    <CharacterCard>
      {/* <h2>{name}</h2> */}
      {!isLoading && characterData && <h1>{characterData.name}</h1>}
      {!isLoading && characterData && (
        <img
          src={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`}
          alt={characterData.name}
        />
      )}
      {!isLoading && characterData && <h2>{characterData.description}</h2>}
    </CharacterCard>
  );
};

export default Character;

// doesn't load on page load as useEffect should work, but when u change something and don't reload
