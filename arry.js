// 11 remove duplicate number form arry;
const numbers = [1, 2, 3, 3, 4, 6, 7, 8, 8, 67, 6, 5, 4, 43, 76, 76];
function removeDupliNumber(numbers) {
        let checkNumber = [];
        for (const num of numbers) {
            if (checkNumber.indexOf(num) == -1) {
             checkNumber.push(num);
            }
    }
    return checkNumber;
}
const dupNumRe = removeDupliNumber(numbers);
console.log(dupNumRe);

// 11.1 remove duplicates names form arry;
const names = ["jaha", "amin", "kalil", "amin", "jaha", "emon", "yahia", "emon"];
function removeDupName(names) {
    let unique = [];
    for (const nam of names) {
        if (unique.indexOf(nam) == -1) {
            unique.push(nam);
        }
    }
    return unique;
}
const removeDupNameRe = removeDupName(names);
console.log(removeDupNameRe);
