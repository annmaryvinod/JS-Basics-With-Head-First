// Consider case 1:

let num = '456';

console.log(num+1);  // Gives 4561 (concatenation)

//type conversion

let score = Number(num);
console.log(score+1);  //Gives 457



let result = 'hello';
console.log(Number(result));  // Gives NaN


let dig = 90;
console.log(typeof(dig));  //number

let kim = String(dig);
console.log(typeof(kim)); //string




let bool = Boolean(90);
console.log(bool);   // true since positive
console.log(Boolean(0)); //false since 0
console.log(Boolean(-90)); // true since negative

console.log(Boolean('0')); //true since string
console.log(Boolean('')); // false since empty string





// Note 

// Strings of all length has truth value but empty string is false
// All numbers except 0 has true value