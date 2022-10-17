"use strict";
console.log("music.js");

// 1. Pabandykime atlikti 5 masyvo (Array) operacijas.

// 2. Sukurkite masyvą (Array) styles su elementais „Jazz“ ir „Blues“.
let music = ["Jazz", "Blues"];
console.log("music ===", music);

// 3. Masyvo (Array) pabaigoje pridėkite „Rock-n-Roll“.
music.push("Rock-n-Roll");
console.log("music ===", music);

// 4. Viduryje esančią reikšmę pakeiskite „Classics“.
music[1] = "Classics";
console.log("music ===", music);

// 5. Panaikinkite pirmą masyvo (Array) elementą ir parodykite jį.
let istrintasPirmas = music.shift();
console.log("istrintasPirmas ===", istrintasPirmas);
console.log("music ===", music);
// alert(istrintasPirmas);
// ^document.getElementById('title').textContent = istrintasPirmas;

// 6. Pridėkite į masyvo pradžią „Rap“ ir „Reggae“ į masyvą.
music.unshift("Rap", "Reggae");
// music.splice(0, 0, 'Rap', 'Reggae'); // same effect
console.log("music ===", music);

// ==========================================
console.log("===================================");
// ? 2. let randomArr = [11, 'cat', true, 4, 'mouse' 5, 9, 5, 76, false]

//? 2.1. atspausdinti kiekvieno masyvo tipa consoleje
// ? 2.2. atspausdinti kiekvieno masyvo tipa naujame masyve

let randomArr = [11, "cat", true, 4, "mouse", 5, 9, 5, 76, false];
let randomArrTypes = [];
for (let randomEl of randomArr) {
  //   console.log(typeof randomEl);
  //   console.log(Array.isArray(randomEl));
  randomArrTypes.push(typeof randomEl);
}
// console.log("randomArrTypes ===", randomArrTypes);

// ? SPLICE (kiekvienas pokytis su nepakeistu masyvu) let sent1 = [ 'Sveiki', 'mano', 'vardas', 'James' ]

// let sent1 = ["Sveiki", "mano", "vardas", "James"];

//? 3.1. istrinti 'mano'

// sent1.splice(1, 1);

//? 3.2. vietoj 'Sveiki' iterpti "Laba diena"

// sent1.splice(0, 1, "Laba diena");

//? 3.3 tarp 'vardas' ir 'James' iterpti 'yra'

// sent1.splice(3, 0, "yra");

let sent1 = ["Sveiki", "mano", "vardas", "James"];
let sent2 = [". ", "is", "Londono"];

//?  sujujngti masyvus i viena
let sent3 = sent1.concat(sent2);

console.log("sent3 ===", sent3);

// ? suskaicuoti kiek kieviename masyve yra elementu
console.log(sent1.length);
console.log(sent2.length);

//? is sujungto masyvo grazinti atskirame masyve ['vardas', 'James', '. ', 'is' ]

const riekele = sent3.slice(2, 6);
//^ const riekele = sent3.slice(2, -1);
//^ same

console.log("riekele ===", riekele);
