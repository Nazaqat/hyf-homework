const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

const removed = names.splice(1,1);//The first argument specifies the location at which to begin adding or removing elements. 
//The second argument specifies the number of elements to remove.

console.log(names);

// // names.length = 2; //to show array restricted to second value
// // names.pop(); // to delete value from last of array
// // names.shift(); // delete value from begning

