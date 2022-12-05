export const getTotalNumOfCharacters = async (
  ts: number,
  PUBLIC_API_KEY: string,
  newhash: string
) => {
  let numOfCharacters = 0;
  const testUrl = `https://gateway.marvel.com/v1/public/characters?offset=0&limit=1&ts=${ts}&apikey=${PUBLIC_API_KEY}&hash=${newhash}`;
  await fetch(testUrl)
    .then((response) => response.json())
    .then((data) => {
      return (numOfCharacters = data.data.total);
    });
  return numOfCharacters;
};
