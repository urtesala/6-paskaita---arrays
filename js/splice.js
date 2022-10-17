"use strict";
console.log("splice.js");

// i             0       1       2
let spalvos = ["red", "green", "blue"];

// ^ Array.prototyle.splice (<nuo kur pradedam (index>, <kiek istrinti>, <naujas elementas>, <naujas elementas>, etc))

spalvos.splice(1, 0, "violet");

console.log("spalvos ===", spalvos);

// Array.prototype.slice(<start>, <end>)
// <start> - skaicius nuo kur pradedam
// <<end>> - skaicius iki kur paimti, neimtinai

console.log("spalvos.slice(1, 3) ===", spalvos.slice(1, 3));
let spalvuAtkarposCopija = spalvos.slice(1, 3);

console.log("spalvuAtkarposCopija ===", spalvuAtkarposCopija);
console.log("spalvos ===", spalvos);

let paskDuEl = spalvos.slice(-2);
console.log("paskDuEl ===", paskDuEl);

let visiSpalvosElNuoVieneto = spalvos.slice(1);
console.log("visiSpalvosElNuoVieneto ===", visiSpalvosElNuoVieneto);
