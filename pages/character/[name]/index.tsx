// our-domain.com/character/[name]

import { ftruncate } from 'fs';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CharacterCard } from '../../../components/ui/CharacterCard';

import { PRIVATE_API_KEY, PUBLIC_API_KEY } from '../../../private/keys';

import md5 from 'md5';

const ts = new Date().getTime();
const newhash = md5(ts + PRIVATE_API_KEY + PUBLIC_API_KEY);
let charData: any;

let offset = 0;
//   let marvelUrl = `https://gateway.marvel.com:443/v1/public/characters?name=hulk&apikey=${PUBLIC_API_KEY}`;
// const marvelURL = `https://gateway.marvel.com/v1/public/characters?offset=${offset}&limit=100&ts=${ts}&apikey=${PUBLIC_API_KEY}&hash=${newhash}`;

const getCharByName = async (url: string) => {
  const response = await fetch(url);
  const { data } = await response.json();
  charData = data.results[0];
  console.log(data);
};

const Character = () => {
  const router = useRouter();
  const name = router.query.name;

  let marvelUrl = `https://gateway.marvel.com/v1/public/characters?name=${name}&ts=${ts}&apikey=${PUBLIC_API_KEY}&hash=${newhash}`;

  useEffect(() => {
    getCharByName(marvelUrl).then(() => {
      console.log(charData);
    });
  }, []);

  return (
    <CharacterCard>
      <h1>{name}</h1>
      {/* <h2>{charData.name}</h2> */}
      {/* <img src={} alt={} /> */}
    </CharacterCard>
  );
};

export default Character;

// doesn't load on page load as useEffect should work, but when u change something and don't reload 