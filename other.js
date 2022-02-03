// 1. Convert foot to inch;
function convertInch(foot) {
    const totalInch = foot * 12;
    return totalInch;
}
const InchResult = convertInch(1);
console.log(InchResult);


// 2. Convert inch to foot;
function convertFoot(inch) {
    const  totalFoot = inch * 0.0833333;
    return totalFoot;
}
const footResult = convertFoot(14);
console.log(footResult);


//3. Conver Milt to kilomitars 
function convertKilo(mile) {
    if (typeof mile != "number") {
        return "Plese enter a number";
    } else {
        const totalMile = mile * 1.609;
        return totalMile;
    }
}
const kiloResult = convertKilo(8);
console.log(kiloResult);

//4. found even number form a number
function evenNumber(num) {
    if (num % 2 === 0) {
        return `${num} is even Number`;
    } else {
       return `${num} is odd Number`;
    }
}
const evenOddResult = evenNumber(1);
console.log(evenOddResult);


// 5. found the leap year;
function leapYear(year) {
    if (typeof year != "number") {
        return "Plese enter a year";
    } else {
        if (year % 4 === 0) {
            return `${year} is leap year`;
        } else {
            return `${year} not leap year`
        }
    }
}
const leapYearRe = leapYear(2023);
console.log(leapYearRe);


// 6. calculate factorial numbers
function calculateFactorials(num) {
    if (typeof num != "number") {
        return "Please enter a number";
    } else {
        let fact = 1;
        for (let i = num; i > 0; i--){
            fact = fact * i;
        }
        return fact;
     }
}

const factorialsRe = calculateFactorials(8);
console.log(factorialsRe);


// 7.get random number
function randomNumber(min, max) {
    if (typeof min != "number" || typeof max != "number") {
        return "Enter both value as a number";
    } else {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
}

const randomRe = randomNumber(1, 6);
console.log(randomRe);


// 8. get learg number form two number
function lergerNumber(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number") {
        return "Enter both as a number";
    } else {
        if (num1 < num2) {
            return num2;
        } else {
            return num1;
        }
    }
}

const leargNumberRe = lergerNumber(34, 14);
console.log(leargNumberRe);


 // 8.1 get small number form two number
 function smallNumber(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number") {
        return "Enter both as a number";
    } else {
        if (num1 > num2) {
            return num2;
        } else {
            return num1;
        }
    }
}
const smallNumberRe = smallNumber(34, 14);
console.log(smallNumberRe);

// 9. learger number form three input numbers
function lergerFromThree(num1, num2, num3) {
    if (typeof num1 != "number" || typeof num2 != "number" || typeof num3 != "number") {
        return "Enter all as a number";
    } else {
        if (num1 > num2 && num1 > num3) {
            return num1;
        } else if(num2 > num1 && num2 > num3){
            return num2;
        } else {
            return num3;
        }
    }
}

const lergerFormThreeRe = lergerFromThree(34, 68,90);
console.log(lergerFormThreeRe);


// 9.1 learger number form three input numbers
function smallFromThree(num1, num2, num3) {
    if (typeof num1 != "number" || typeof num2 != "number" || typeof num3 != "number") {
        return "Enter all as a number";
    } else {
        if (num1 < num2 && num1 < num3) {
            return num1;
        } else if(num2 < num1 && num2 < num3){
            return num2;
        } else {
            return num3;
        }
    }
}

const smallFormThreeRe = smallFromThree(34, 9,7);
console.log(smallFormThreeRe);

// 10. fibonacci sequance
function fibonacci(num) {
    if (typeof num != "number") {
        return "Please enter a number";
    } else {
        let fibo = [0,1];
        for (let i = 2; i <= num; i++){
           fibo[i] = fibo[i - 1] + fibo[i - 2];
        }
        return fibo;
     }
}

const fibonacciRe = fibonacci(20);
console.log(fibonacciRe);


// 12 multiplication to calculate wood requarmnet;
function calculateWood(char, table, bed) {
    const charCft = 3;
    const  tableCft = 10;
    const bedCft = 50;

    const charWood = charCft * char;
    const tableWood = tableCft * table;
    const bedWood = bedCft * bed;

    const totalWood = charWood + tableWood + bedWood;
    return totalWood;

}
const totalWoodRe = calculateWood(1, 1, 1);
console.log(totalWoodRe);

//13. Write foo, bar, foobar if divisible by 3 or 5 or both

    for (i = 1; i <= 60; i++){
        if (i % 5 == 0 && i % 3 == 0) {
             console.log("foobar");
        } else if (i % 5 == 0) {
           console.log("foo");
        } else if (i % 3 == 0) {
        console.log("bar");
        } else {
            console.log(i);
        }
    }

// 14 cross in forest deep and count animals
function countAnimals(miles) {
    const firstCross = 10;
    const secendCorss = 50;
    const thridCross = 100;
    
    if (miles <= 10) {
        const firstAniCount = miles * firstCross;
        return firstAniCount;
        
    } else if (miles <= 20) {
        const addFirst = 10 * firstCross;
        const secendAni = (miles - 10) * secendCorss;
        const secendAniCount = addFirst + secendAni;
        return secendAniCount;
    } else {
        const addFirst = 10 * firstCross;
        const secendAni = 10 * secendCorss;
        const thirdAni = (miles - 20) * thridCross;
        const totalAnimals = addFirst + secendAni + thirdAni;
        return totalAnimals;
    }
}

const countAnimalsRe = countAnimals(21);
console.log(countAnimalsRe);



// 18 Traboling in jongle and count total animals you show

function animalsCount(miles) {
    const afterTenMiles = 10;
    const afterTwontyMiles = 50;
    const lastEveryMiles = 100;

    if (miles <= 10) {
        return afterTenMiles * miles;
    } else if (miles <= 20) {
        const addFrist = afterTenMiles * 10;
        const secendMile = miles - 10;
        const secendAni = secendMile * afterTwontyMiles;
        return addFrist + secendAni;

    } else {
        const addFrist = afterTenMiles * 10;
        const addSecend = afterTwontyMiles * 10;
        const lastMile = miles - 20;
        const lastAni = lastMile * lastEveryMiles;
        return addFrist + addSecend + lastAni;
    }
}

const animalsResult = animalsCount(225);
console.log(animalsResult);
