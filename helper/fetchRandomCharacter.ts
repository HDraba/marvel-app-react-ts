import md5 from 'md5';

import { getTotalNumOfCharacters } from './getTotalNumberOfCharacters';
import { PUBLIC_API_KEY, PRIVATE_API_KEY } from '.././private/keys';

type Character = {
  name: string;
  description: string;
  image: { thumbnail: { path: string; extension: string } };
};

let offset = 0;

const idArray: string[] = [];
// getRandomId
const getRandomID = async () => {
  const ts = new Date().getTime();
  const newhash = md5(ts + PRIVATE_API_KEY + PUBLIC_API_KEY);
  const totalNumOfCharacters = await getTotalNumOfCharacters(
    ts,
    PUBLIC_API_KEY,
    newhash
  );

  while (idArray.length < totalNumOfCharacters) {
    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters?offset=${offset}&limit=100&ts=${ts}&apikey=${PUBLIC_API_KEY}&hash=${newhash}`
    );
    const { data } = await response.json();
    const characters = data.results;
    for (let character of characters) {
      idArray.push(character.id);
    }
    offset += 100;
  }
  const randomId =
    idArray[Math.floor(Math.random() * totalNumOfCharacters - 1)];
  return randomId;
};

export const fetchRandomCharacter = async () => {
  const ts = new Date().getTime();
  const newhash = md5(ts + PRIVATE_API_KEY + PUBLIC_API_KEY);
  const id = await getRandomID();

  const response = await fetch(
    // `https://gateway.marvel.com3/v1/public/characters/1010699?apikey=42f31ac4860e88d9e4a388b9af843f02`
    `https://gateway.marvel.com/v1/public/characters/${id}?apikey=${PUBLIC_API_KEY}`
  );
  const { data } = await response.json();
  console.log(data);
  const character = data.results[0];
  console.log(character);

  return {
    name: character.name,
    description: character.description,
    imageUrl: `${character.thumbnail.path}.${character.thumbnail.extension}`,
  };
};
