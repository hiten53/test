import { add } from './calc';

const num1 = 2;
const num2 = 3;

const body = document.getElementsByTagName('body')[0];
const h1 = document.createElement('h1');
h1.textContent = add(num1, num2).toString();
body.appendChild(h1);

console.log(add(num1, num2));