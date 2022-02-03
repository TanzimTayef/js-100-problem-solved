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




// 15. Find the cheapest phone from an array of phone objects
const phones = [
    { name: "sumsung j7", prize: 14500, camera: 8, storage: 16 },
    { name: "shoumi", prize: 12000, camera: 10, storage: 32 },
    { name: "oppo", prize: 11900, camera: 11, storage: 16 },
    { name: "vivo pro", prize: 15000, camera: 12, storage: 32 },
    { name: "lenovo", prize: 9999, camera: 8, storage: 8 },
    { name: "redmi", prize: 18000, camera: 13, storage: 64 },
    { name: "ipone", prize: 45000, camera: 19, storage: 128 },
]

function ceapeastPhone(phones) {
    let lowPrizePhone = phones[0];
    for (const phone of phones) {
        if (lowPrizePhone.prize < phone.prize) {
            lowPrizePhone = phone;
       }
    }
    return lowPrizePhone;
}

const ceapeastPhoneRe = ceapeastPhone(phones);
console.log(ceapeastPhoneRe);


// 17 shopping cart product sum

const cart = [
    { phone: "sumsung", price: 17500 },
    { watch: "cacio", price: 2300 },
    {leptop: "asus", price: 45000}
]

function shoppingCart(cart) {
    let totalPrize = 0;
    for (const product of cart) {
        totalPrize += product.price;
    }
    return totalPrize;
}

const totalAmount = shoppingCart(cart);
console.log(totalAmount);