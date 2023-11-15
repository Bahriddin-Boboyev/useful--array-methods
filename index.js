const arr = [1, 2, 3, 4, 5, 10, 2];

/* 1 AT methods */
// console.log(arr.at(-1));
// console.log(arr);

/* 2 CONCAT methods */
// const arr2 = [6, 7, 8, 9];
// console.log(arr.concat(arr2));

/* 3 copyWithin methods */
// console.log(arr.copyWithin(3, 0));

/* 4 every methods 
info: every condationdagi barcha holatlar true qayta unda true agar birortasi false qaytarsa unda false qiymat qaytaradi
*/
// console.log(arr.every((item) => item > 2));

/* 5 fill methods  */
// console.log(arr.fill("hello", 2, 4));
// console.log(new Array(4).fill(0));

/* 6 findIndex methods */
// console.log(arr.findIndex((item) => item == 10));

/* 7 flat methods */
// const arr1 = [0, 1, 2, [3, 4]];
// const arr2 = [0, 1, [2, [3, [4, 5, [[6, [7, [8, [9], [10]]]]]]]]];
// // console.log(arr1.flat());
// console.log(arr2.flat(Infinity));

/* 8 flatMap methods */
// const resultingArray = arr.flatMap((x) => [x ** 2]);
// console.log(resultingArray); // [1, 4, 9, 16, 25]

/* 9 forEach methods */
// console.log(arr.forEach((item) => item.toString()));
// console.log(arr);

/* 10 includes methods */
// console.log(arr.includes(6));

/* 11 indexOf methods  */
// console.log(arr.indexOf(10));

/* 12 join methods */
// console.log(arr.join("-"));

/* 13 entries methods */
// const f = arr.entries();
// for (let x of f) {
//   console.log(x.values());
// }

/* 14 keys methods */
// const f = arr.keys();
// for (let x of f) {
//   console.log(x);
// }

/* 15 values methods */
// const f = arr.values();
// for (let x of f) {
//   console.log(x);
// }

/* 16 lastIndexOf methods */
// console.log(arr.lastIndexOf(2));

/* 17 pop methods */
// console.log(arr.pop());

/* 18 shift method */
// console.log(arr.shift());

/* 19 unshift methods */
// console.log(arr.unshift(0));
// console.log(arr);

/* 20 reverse methods */
// console.log(arr.reverse());

/* 21 slice methods */
/* console.log(arr.slice(0, 2));
console.log(arr); */

/* 22 splice method */
// console.log(arr.splice(0, 3, "99", "100"));
// console.log(arr);

/* 23 reduce methods */
// const sum = arr.reduce((total, current, index, array) => {
//   console.log(total, index, array);
//   return total + current;
// }, 0);

// 24 const sum = arr.reduceRight((prev, current, index, array) => {
//   console.log(prev, current, index, array);
//   return prev + current;
// }, 0);

/* 25 some method */
// console.log(arr.some((item) => item > 5));
// console.log(arr.every((item) => item > 0));

/* 26 sort increment methods */
// console.log(arr.sort((a, b) => a - b));
// .
