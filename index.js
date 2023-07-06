// >,<,>=

// const value1 = 10;

// // console.log(value1 > 12);
// // console.log(value1 < 12);

// // console.log(value1 <= 12);
// // console.log(value1 >= 10);

// const value2 = 'text';
// console.log(value2 > 'text')
// console.log(value2 > 'qwerty')

// console.log ('100' > '12');

// ==, ===

// const value1 = 10;

// console.log (value1 == 10);
// console.log (value1 === 10);

// console.log (value1 == '10');
// console.log (value1 === '10');

// !==, !=

// const value1 = 10;

// console.log (value1 != 10);
// console.log (value1 !== 10);

// console.log (value1 != '10');
// console.log (value1 !== '10');

// !

// console.log(!5); //false
// console.log(!(5-5)); //true

// console.log(!!5); //true
// console.log(!!""); //false

// console.log(Boolean(5)); //true
// console.log(Boolean('')); //false

// logical AND (&&) умножение
// console.log(true && true); //true
// console.log(true && false); //false
// console.log(false && true); //false
// console.log(false && false); //false

// // logical AND (||) прибавление
// console.log(true || true); //true
// console.log(true || false); //true
// console.log(false || true); //true
// console.log(false || false); //false

// // AND возвращает или последнюю правду или первую неправду

// const condition1 = 10 && null && 'qwe';
// console.log(condition1);

// //OR возвращает или первая правду или последняя неправду
// const condition2 = 10 || null || '';
// console.log(condition2);

// console.log(10 > 2 || 'a' === 'b'); //true

// const value = 5;
// console.log(2<value && value<7);
// console.log(2<value || value<7);

// const condition = '' && (10 || 'qwe');
// console.log(condition);

// Nullish coalescing operator (??)
// let avatar;
// const condition2 = avatar ?? 'anon.png';
// console.log(condition2);


//if
// const condition = true;
// // if (condition) {
// //     console.log('true')
// // } 

// if (condition ===false) {
//     console.log('true')
// } else {
//     console.log('false')
// }

// const number = 0;
// if (number === 0) {
//         console.log('ok')
//     } else {
//         console.log('no')
//      }
        
//  const number2 = 2;
//  if (number2 >= 0) {
//     console.log('ok')
//  } else {
//     console.log('no')
//  }

const number2 = 4;
if (number2 % 2){
    console.log('odd')
} else {
    console.log('even')
}

//или

const number3 = 5;
if (number3%2 === 0){
    console.log('even')
} else {
    console.log('odd')
}

// если число добавляемое - +
// если отнимаемое - -
// остальное - 0
const number = -4;
if (number>0){
    console.log('+')
} else if(number<0){
    console.log('-')
} else {
    console.log('0')
}

//если число добавляемое + и меньше 5 то + если нет то -
// const number4 = 3;
// if(number4>0 && number4<5){
//     console.log('+')
// } else {
//     console.log('-')
// }

const number4 = 2;
if(number4<=0 || number4>=5){
    console.log('no')
} else {
    console.log('ok')
}

let number10 = 0;
const minValue = 0;
const maxValue = 5;
if (number10 > minValue && number10 < maxValue) {
    console.log('ok')
} else {
    console.log('no')
}