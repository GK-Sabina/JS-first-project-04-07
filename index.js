// ternary operator/ (condition)?true:false;

const logParity = function(number){
    // if(number % 2 === 0){
    //     return 'even';
    // }
    //     return 'odd'; //это можно заметинить тернарным оператором/ниже 
    return (number % 2 === 0) ? 'even' : 'odd';
};

const isEven = function(number){
    return number % 2 === 0;
};

const isAdult = function(age, AGE_ADULT = 18){
    return age>=AGE_ADULT;
};

const logAdult = function(age, AGE_ADULT = 18){
    return(age>=AGE_ADULT) ? 'adult' : 'notAdult';
}

const promoCode = 'qwerty';
const sale = promoCode ? 10 : 0;


//функция если пользователь что то вводит то thank you если отмена или ничего то error возвращаем с помощью тернарного оператора 
// const userInput = prompt('Enter something', 5);
// const checkInput = function(userInput){
// return (userInput==='' || userInput===null) ? 'error' : 'thank you';
// }

//Никогда не делай так!
const logSignNumber = function(number=0){
    return number>0 ? '+' : number<0 ? '-' : '0'
};
//debugger
// console.log(logSignNumber(12));


//switch
//функция ввыводит прветствие на языке который выберает пользователь
const userInputLang = prompt('Choose lang:\n1-uk\n2-en\n3-it\n4-de');
// if(
//     userInputLang==='1';
        
// )
// if(userInputLang === '1' || userInputLang === 'uk'){
//     console.log('привіт');
// } else if(userInputLang === '2' || userInputLang === 'en'){
//     console.log('hi');
// } else if(userInputLang === '3' || userInputLang === 'it'){
//     console.log('ciao');
// }else if(userInputLang === '4' || userInputLang === 'de'){
//     console.log('hallo');
// } else{
//     console.log('try again');

//  } //этот код можно заменить switch/ниже
// switch(userInputLang){
//     case '1':
//     case 'uk':
//     case 'UK':
//     case 'Ukraine':
//         console.log('привіт');
//     break;
//     case '2':
//         console.log('hi');
//     break;
//     case '3':
//         console.log('ciao');
//     break;
//     case '4':
//         console.log('hallo');
//     break;
//     default:
//     console.log('try again');
//     break;
// }


// не нужно так делать/лучше через тернарный оператор
// switch(10>5){
//     case true:
//         console.log('ok');
//         break;
//      case false:
//         console.log('wrong');
//         break; 
//     default:
//         break;
//}
 
//так делать не правильно
// const key = 50;
// switch(key){
//     case key>0 && key<10:
//         console.log('ok');
//         break;
//      case key>10:
//         console.log('wrong');
//         break; 
//     default:
//         console.log('error');
//         break;
// }


// const userInputDay = prompt('Enter the day of the week :\n1-Monday\n2-Tuesday\n3-Wednesday\n4-Thursday\n5-Friday\n6-Saturday\n7-Sunday');
// switch(userInputDay){
//     case '1':
//     case '2':
//     case '3':
//     case '4':
//     case '5':
//         console.log('working day');
//     break;
//     case '6':
//     case '7':
//         console.log('weekend');
//     break;
//     default:
//         console.log('try again')
//     break;
// }

const userInputMonth = prompt('Enter month:n1 - January\n2 - February\n3 - March\n4 - April\n5 - May\n6 - June\n7 - July\n8 - August\n9 - September\n10 - October\n11 - November\n12 - December');
switch(userInputMonth){
    case '1':
    case '2':
    case '12':
        console.log('winter');
    break;
    case '3':
    case '4':
    case '5':
        console.log('spring');
    break;
    case '6':
    case '7':
    case '8':
        console.log('summer');
    break;
    case '9':
    case '10':
    case '11':
        console.log('autumn');
    break;
    default:
         console.log('try again')
     break;
}

const userInputDay = prompt('Enter the day of the week :\n1-Monday\n2-Tuesday\n3-Wednesday\n4-Thursday\n5-Friday\n6-Saturday\n7-Sunday');
const userInputToNumber = Number(userInputDay);

if(userInputDay==='' || userInputDay===null || Number.isNaN(userInputToNumber) || userInputToNumber < 1 || userInputToNumber > 7 || Number.isInteger(userInputToNumber)){
    console.log('error')
}else if(userInputToNumber >= 1 && userInputToNumber <= 5){
    console.log('working day')
}else{
    console.log('weekend')
}