"use strict";
console.log("matrix.js");

let matrix = [
  // 0  1  2
  [1, 2, 3], //0
  [4, 5, 6], //1
  [7, 8, 9], //2
  { username: "Mike" },
];

//? gauti reiksme 3

// matrix [0]
console.log("matrix [0] ===", matrix[0]);
console.log("matrix[0][2] ===", matrix[0][2]);

// gauti septyneta
console.log("matrix[2][0] ===", matrix[2][0]);

// gauti varda mike

console.log("matrix[3]; ===", matrix[3]);

// & dazniau naudojamas apacioje
console.log(matrix[3].username);
