let arr = ['I', 'study', 'Javscript'];

// Remove 3 first elements and replace them with another.
let removed = arr.splice(0, 3, 'Let\'s', 'Dance!')

console.log(arr);

// splice() returns the removed items as an array.
console.log(removed);

arr.splice(2, 0, 'complex', 'language');
console.log(arr);

let arr2 = ['t', 'e', 's', 't'];
console.log(arr2.slice(2,3));
console.log(arr2.slice(-2));

let arr3 = [1, 2];
let arr4 = [3, 4, 5, 6];
let arrConcat = arr3.concat(arr4);
console.log(arrConcat);

let arrayLike = {
  0: 'something',
  1: 'else',
  2: 'new words',
};

let arrLikeConcat = arrConcat.concat(arrayLike);
console.log(arrLikeConcat);

arrLikeConcat.forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in array ${array}`);
});

const body = document.querySelector('body');
let arrLikeConcatDiv = document.createElement('div');
arrLikeConcatDiv.style.cssText = 'font-size: 20px; font-weight: bold; font-variant: small-caps; text-align: center; margin: 3vh; display: flex; justify-content: center;'
arrLikeConcatDiv.textContent = `${arrLikeConcat}`;
body.appendChild(arrLikeConcatDiv);

let flexCenter = {
  display: 'flex',
  'justify-content': 'center',
  margin: '3vh',
}

let flexTest = document.createElement('div');
flexTest.style.cssText = `display: ${flexCenter.display}; justify-content: ${flexCenter['justify-content']}; margin: ${flexCenter.margin};`;
flexTest.textContent = 'Aligned with flexbox designated with template literals in javascript!';
body.appendChild(flexTest);

let arrIndexOf = [1, 0, false];

console.log(`0 is at index ${arrIndexOf.indexOf(0)}.`);
console.log(`'false' is at index ${arrIndexOf.indexOf(false)}.`);
console.log(arrIndexOf.indexOf(null));
console.log(`the list includes '1': ${arrIndexOf.includes(1)}.`);

let arrLastIndexOf = ['apple', 'orange', 'apple'];

console.log(`the last index of 'apple' is ${arrLastIndexOf.lastIndexOf('apple')}.`);

let users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Pete'},
  {id: 3, name: 'Mary'}
];

let user = users.find(item => item.id == 1);
console.log(user.name);

let users2 = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Pete'},
  {id: 3, name: 'Mary'},
  {id: 4, name: 'John'},
];

let user2 = users2.findLastIndex(item => item.name == 'John');
console.log(user2);

let mapArray = ['Bilbo', 'Gandalf', 'Nazgul'];
let lengths = mapArray.map(item => item.length);
console.log(lengths);

let compareArray = [1, 2, 15];
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

compareArray.sort(compareNumeric);
console.log(compareArray);

let names = 'Bilbo, Gandalf, Nazgul';
let splitArray = names.split(', ');
for (let name of splitArray) {
  console.log(`a message to ${name}`);
}

let gluedNames = splitArray.join(', ');
console.log(gluedNames);

let reduceArray = [1, 2, 3, 4, 5];
let result = reduceArray.reduce((accumulator, item) => accumulator + item, 0);
console.log(result);

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age <= this.maxAge;
  }
};

let users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

let soldiers = users.filter(user => army.canJoin(user));

