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
  const router = useRouter();
  const name = router.query.name;

  let marvelUrl = `https://gateway.marvel.com/v1/public/characters?name=${name}&ts=${timestamp}&apikey=${PUBLIC_API_KEY}&hash=${newhash}`;

  useEffect(() => {
    const getCharByName = async (url: string) => {
      const response = await fetch(url);
      const { data } = await response.json();
      charData = data.results[0];
      console.log(charData);
      return charData;
    };
    characterData = getCharByName(marvelUrl);
  }, [router]);

  return (
    <CharacterCard>
      <h1>{name}</h1>
      <h2>{characterData.name}</h2>
      <img src={characterData.thumbnail.path} alt={characterData.name} />
    </CharacterCard>
  );
};

export default Character;

// doesn't load on page load as useEffect should work, but when u change something and don't reload
