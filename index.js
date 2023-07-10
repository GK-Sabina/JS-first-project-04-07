



//Homework - function - Sabina

// function getSomethingFromTheUser(){
    
//  const userInput = prompt('Enter something', 'OK');
    
//  if (userInput === '' || userInput === null){
//     return 'Try again';
//     } 
//     return userInput;
// }

// console.log(getSomethingFromTheUser());


//периметр квадрата

// const sideSquare = 3;

// /**
//  * @param {number} side
//  * @returns {number | NaN}
//  */
  
// //  delete sideSquare;

// // const getPerimetrSquare = function (){
// //     const perimetr = 4 * sideSquare;
// //     return perimetr;
// // }

// const getPerimetrSquare = function(side=1){ //let side =1;
//     if(side<=0){
//        return NaN; //null
//     }
//     return 4 * side;
// };

// const value = -3;
// const result = getPerimetrSquare(value); // NaN

// if(Number.isNaN(getPerimetrSquare(-3))){
//     console.log('wrong argument');
// }else{
//     console.log('result = ', result);
// };

// console.log(getPerimetrSquare(8)); //sideSquare = 8
// console.log(getPerimetrSquare(sideSquare)); //sideSquare = sideSquare
// console.log(getPerimetrSquare()); //по умолчанию (1 тк function(side=1))
// console.log(getPerimetrSquare('one')); //NaN tk text


//User age

const userAge = 19;

/**
 * @param {number} userAge - integer positive
 * @param {number} ageAdult default 18 - integer positive
 * @returns {boolean}
 */
const isUserAdult = function (userAge = 18, ageAdult = 18){
    return userAge >= ageAdult;
}
console.log(isUserAdult()); //true
console.log(isUserAdult(undefined, 21)); //false
console.log(isUserAdult(userAge)); //true
console.log(isUserAdult(userAge, 21)); //false

// // check multiplicity

// const number1 = 8;
// const number2 = 4;

// /**
//  * @param {number} number1
//  * @param {number} number2
//  * @returns {boolean}
//  */

// const checkMultiplicity = function (number1, number2){
//     return number1 % number2 === 0;
// }

//triangle

const side1 = 8;
const side2 = 4;
const side3 = 6;

/**
 * @param {number} side1
 * @param {number} side2
 * @param {number} side3
 * @returns {boolean}
 */

const checkTriangle = function (side1, side2, side3){
    return side1 + side2 > side3 && 
    side1 + side3 > side2 && 
    side2 + side3 > side1 &&
    side1 > 0 && side2 > 0 && side3 >0;
}


//practice написати функцію calcResult, яка приймає два цілі числа
// і повертає:
// - якщо обидва парні - суму чисел
// - якщо обидва непарні - множення чисел
// - якщо різні - повертає непарне число

const number1 = 8;
const number2 = 4;

/**
 * @param {number} number1
 * @param {number} number2
 * @returns {number}
 */

const calcResult = function (number1, number2){
    if (number1 % 2 === 0 && number2 % 2 === 0){
        return number1 + number2;
    } 
    if (number1 % 2 === 1 && number2 % 2 === 1){
        return number1 * number2;
    } 
    if (number1 % 2 === 0 && number2 % 2 === 1){
        return number2;
    }
    if (number1 % 2 === 1 && number2 % 2 === 0) {
        return number1;
    }
}