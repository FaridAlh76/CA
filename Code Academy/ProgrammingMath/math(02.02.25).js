//                   TASK1

// const numbers = [12, 45, 22, 31, 8, 17, 29, 40, 55, 90];

// let evenSum = 0;
// let oddSum = 0;

// numbers.forEach(num => {
//     if (num % 2 === 0) {
//         evenSum += num;
//     } else {
//         oddSum += num;
//     }
// });

// const result = evenSum * oddSum;

// console.log("Cüt ədədlərin cəmi:", evenSum);
// console.log("Tək ədədlərin cəmi:", oddSum);
// console.log("Cəmlərin hasili:", result);

















//                 TASK2    

// const numbers = [45, 3, 12, 78, 4, 90, 23]

// const maxNumber = Math.max(...numbers);
// const minNumber = Math.min(...numbers);

// console.log("Ən böyük element", maxNumber);
// console.log("Ən kiçik element", minNumber);

















//                 TASK3    
// for (let i = 1; i <= 10; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }


















//                 TASK4
// const price = 150;
// const customerStatus = "VIP";

// let finalPrice = price;

// if (customerStatus === "VIP") {
//     finalPrice = price * 0.8;
// }

// console.log("Müştəri qeydi:", customerStatus)
// console.log("Son Qiymət:", finalPrice)






















//                 TASK6
// const num1 = 10;
// const num2 = 5;
// const operator = "*"; // * / + -

// let result;

// if (operator === "+") {
//     result = num1 + num2;
// } else if (operator === "-") {
//     result = num1 - num2;
// } else if (operator === "*") {
//     result = num1 * num2;
// } else if (operator === "/") {
//     if (num2 !== 0) {
//         result = num1 / num2;
//     } else {
//         result = "Sıfıra bölmək mümkün deyil!";
//     }
// } else {
//     result = "Yanlış operator daxil edilib!";
// }

// console.log(`Nəticə: ${result}`);




















//                 TASK7
// const rightUname = "Farid";
// const rightPasswd = "Salam123";

// const inputUname = "Farid";
// const inputPasswd = "Salam123";

// if (inputUname !== rightUname) {
//     console.log("Yanlış istifadəçi");
// } else if (inputPasswd !== rightPasswd) {
//     console.log("Yanlış şifrə")
// } else {
//     console.log("Giriş uğurlu");
// }




















//                 TASK8
// const a = 15;
// const b = 25;
// const c = 35;

// let maxEded;

// if (a > b && a > c) {
//     maxEded = a;
// } else if (b > a && b > c) {
//     maxEded = b;
// } else {
//     maxEded = c
// }

// console.log("Ən böyük ədəd:", maxNumber);



















//                 TASK9
// function calcSalary(name, position, salary, experience) {
//     let cash = 0;

//     if (experience > 5) {
//         cash = salary * 0.25;
//     } else if (experience >= 3 && experience <= 5) {
//         cash = salary * 0.15;
//     }

//     const totalSalary = salary + cash;
//     console.log(`${name}, ümumi maaşınız ${totalSalary} AZN-dir.`);
// }

// // Test
// calcSalary('Farid Alh', 'Developer', 2550, 3);


















//                 // TASK10
// function reverseArray(arr) {
//     let reversedArr = [];
    
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversedArr.push(arr[i]);
//     }
    
//     return reversedArr;
// }

// // Test
// console.log(reverseArray([1, 2, 4]));
