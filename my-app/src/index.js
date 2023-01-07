import foods from './foods';
import {choice, remove} from './helpers';

console.log(foods);
let chosen = choice(foods);

console.log("I would like one " + chosen + " please.");
console.log("Here you go: " + chosen);
remove(foods,chosen);
console.log(foods);
console.log("Delicious! May I have another?");
console.log("I'm sorry, we're all out! We have " + foods + " left.");
