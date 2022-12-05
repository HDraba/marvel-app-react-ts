import { getTotalNumOfCharacters } from './getTotalNumberOfCharacters';
import { PRIVATE_API_KEY, PUBLIC_API_KEY } from '../private/keys';

const md5 = require('md5');

// for URL
let offset = 0;
const ts = new Date().getTime();
const newhash = md5(ts + PRIVATE_API_KEY + PUBLIC_API_KEY);

let characters: object[] = [];

export const fetchingCharacters = async () => {
  const totalAmount = await getTotalNumOfCharacters(
    ts,
    PUBLIC_API_KEY,
    newhash
  );

  console.log('fetching...');
  while (characters.length < totalAmount) {
    const marvelURL = `https://gateway.marvel.com/v1/public/characters?offset=${offset}&limit=100&ts=${ts}&apikey=${PUBLIC_API_KEY}&hash=${newhash}`;
    const response = await fetch(marvelURL);
    const { data } = await response.json();
    const characterData = data.results;
    if (characterData === 100) {
      characters.push(characterData);
    } else {
      for (let character of characterData) {
        characters.push(character);
      }
    }
    offset += 100;
  }
  console.log(characters);
  
  return characters;
};
