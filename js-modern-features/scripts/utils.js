function getRandomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export const cat = "Thin Kitty";

export const objectMod = {
  cat: cat,
  getRandomFromArray: getRandomFromArray,
};

export default getRandomFromArray;
