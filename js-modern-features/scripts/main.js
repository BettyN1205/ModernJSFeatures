import RecipeAPI from "./RecipeAPI.js";
import getRandomFromArray, { cat, objectMod } from "./utils.js";

console.log("Hello, Modern World 👋 🌎");
console.log(cat);
console.log(objectMod);

const recipeAPI = new RecipeAPI("123");

console.log(recipeAPI);
console.log(recipeAPI.getAllRecipes());

/*
 * Destructuring
 */
const character = {
  name: "Phil Dunphy",
  catchphrase:
    "Never Be Afraid To Reach For The Stars Because Even If You Fall, You'll Always Be Wearing A Parent-Chute.",
  role: "real estate mogul",
  familyIsModern: true,
};

// let charName = character.name;
// let charCatchPhrase = character.catchphrase;

let { name: charName, catchphrase, familyIsModern } = character;

// console.log(charName);
// console.log(catchphrase);
// console.log(familyIsModern);
// console.log(character);

let products = [
  "hover board",
  "e-scooter",
  "short pants",
  "hot pants",
  "fidget spinner",
];

// let prod1 = products[0];
let [prod1, , , , prod2] = products;

// console.log(prod1);
// console.log(prod2);

let idealEducator = {
  brainCells: 10000,
  niceBeard: true,
  legs: "non-stubby and stubby hybrid",
  pulse: true,
  enjoyMakingOthersSufferLikeTheyOnceDid: true,
};

const { brainCells, pulse, ...restOfProperties } = idealEducator;
// console.log(brainCells);
// console.log(pulse);
// console.log(restOfProperties);

/*
 * ...rest operator
 */
const animals = [
  "cat",
  "fat",
  "skinny",
  "dogctopus",
  "rock",
  "porpoise",
  "orcbcat",
];

console.log(getRandomFromArray(animals));

const [firstAnimal, ...restOfAnimals] = animals;
// console.log(firstAnimal);
// console.log(restOfAnimals);

/*
 * Spread Operator, not destructuring
 */
const obj1 = {
  shape: "octagon",
  color: "blurple",
  price: "priceless",
};
// console.log("obj1: ", obj1);

const obj2 = { ...obj1, size: "big" };
// console.log("obj2: ", obj2);

const obj3 = { ...obj1, color: "orangatang" };
// console.log("obj3: ", obj3);

const ingredients = ["truffles", "shallots", "beef stock", "ton of butter"];

const shoppingList = [...ingredients, "taco shells", "green onions"];
// console.log(shoppingList);
