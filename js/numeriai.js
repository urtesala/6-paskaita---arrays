"use strict";
console.log("numeriai.js");

//?Susikurkite skaičių masyva 'numbersArray' su siais nariais : 2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20

let numbersArr = [2, 12, 33.3, -7, 28, 49, -17, 19, 42, -14, -10, 20];

//?Sekančias užduotis atlikti su naujais masyvais(kopijomis)

//? Padauginti masyvo narius iš 2
//^ kur issaugosim dvigubas reiksmes
// const doubleArr = [];
// for (let i = 0; i < numbersArr.length; i++) {
//   //^ sukuriam kintamaji kiekvienan el is masyvo
//   let nr = numbersArr[i];
//   //^ padvigubinam reiksme ir issaugom double kint
//   let double = nr * 2;
//^ console.log(double);
//   doubleArr.push(double);
// }
// console.log("doubleArr ===", doubleArr);

//? Pakelti masyvo narius kvadratu
// const sqrNumberArr = [];
// for (let i = 0; i < numbersArr.length; i++) {
//   let numbers = numbersArr[i];
//   let sqrNumber = numbers ** 2;
//   //^   console.log("sqrNumber ===", sqrNumber);
//   sqrNumberArr.push(sqrNumber);
// }
// console.log("sqrNumberArr ===", sqrNumberArr);

//? Padauginti masyvo narius iš jų index'0 (vietos masyve)

//?!

//? Atrinkti tiktai teigimų elementų masyvą

// const teigiamiSkArr = [];

// for (let i = 0; i < numbersArr.length; i++) {
//   let sk = numbersArr[i];
//   if (sk > 0) {
// console.log(sk);
//     teigiamiSkArr.unshift(sk);
//   }
// }
// console.log("teigiamiSkArr ===", teigiamiSkArr);

//? Atrinkti tiktai neigiamų elementų masyvą

// const neigiamiSkArr = [];

// for (let i = 0; i < numbersArr.length; i++) {
//   let sk = numbersArr[i];
//   if (sk < 0) {
//     neigiamiSkArr.unshift(sk);
//   }
// }
// console.log("neigiamiSkArr ===", neigiamiSkArr);

//? Atrinkti tiktai lyginių skaičių masyvą

// const lyginiaiSkArr = [];

// for (let i = 0; i < numbersArr.length; i++) {
//   let sk = numbersArr[i];
//   if (sk % 2 === 0) {
//     lyginiaiSkArr.push(sk);
//   }
// }
// console.log("lyginiaiSkArr ===", lyginiaiSkArr);

//?Atrinkti tiktai nelyginių skaičių masyvą

// const nelyginiaiSkArr = [];

// for (let i = 0; i < numbersArr.length; i++) {
//   let sk = numbersArr[i];
//   if (sk % 2 != 0) {
//     nelyginiaiSkArr.push(sk);
//   }
// }
// console.log("nelyginiaiSkArr ===", nelyginiaiSkArr);

//?Visas neigiamas vertes masyve padaryti teigiamomis

// const teigiamuSkArr = [];

// for (let i = 0; i < numbersArr.length; i++) {
//   let sk = numbersArr[i];
//   if (sk < 0) {
//     let teigiamas = sk ** 0;
//     teigiamuSkArr.push(teigiamas);
//   }
// }
// console.log("teigiamuSkArr ===", teigiamuSkArr);

//?Pakelti visas masyvo reikšmes laipsniu 'index'

//?!

//? Atrinkti tik natūralių skaičių masyvą

// const naturalSkArr = [];

// for (let i = 0; i < numbersArr.length; i++) {
//   let sk = numbersArr[i];
//   if (sk > 0) {
//     naturalSkArr.push(sk);
//   }
// }
// console.log("naturalSkArr ===", naturalSkArr);

//? Suapvalinti visas masyvo reikšmes iki sveikų skaičių

//?!

//? Atrinkti kas antrą elementą

// const secondNrArray = [];

// for (let i = 0; i < numbersArr.length; i++) {
//   i = i + 1;
//   let sk = numbersArr[i];
//   secondNrArray.push(sk);
// }
// console.log("secondNrArray ===", secondNrArray);

//? Atrinkti kas penktą elementą

// const fiveNrArray = [];
// for (let i = 0; i < numbersArr.length; i++) {
//   i = i + 5;
//   let sk = numbersArr[i];
//   fiveNrArray.push(sk);
// }
// console.log("fiveNrArray ===", fiveNrArray);

//?Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 2. (nieko negrąžina)

//? Sukurti funkciją, kuri ima masyvą ir grąžina visų jo elementų sumą

// let total = 0;
// //^ ciklas paimantis kiekviena reiksme masyve
// for (let i = 0; i < numbersArr.length; i++) {
//   let skaicius = numbersArr[i];
//   //^ console.log('skaicius ===', skaicius);
//   total = total + skaicius;
//   //^ total += skaicius
// }
// console.log("total ===", total);

//? Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį

// let total = 0;
// const avg = total / numbersArr.length;
// console.log("avg ===", +avg.toFixed(2));

//? Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.

//? Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.

//? Sukurti funkciją, kuri ima masyvą ir išrikiuja jo elementus nuo mažiausio iki didžiausio ir grąžina tą masyvą.
