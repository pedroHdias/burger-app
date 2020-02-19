// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
console.time('solution1');
function solution1(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const charArray = S.split("");
  let counter = 0;
  let temp = charArray[0];
  for (let i = 1; i < charArray.length; i++) {
    if (temp === charArray[i]) {
      counter++;
      if (counter >= 2) {
        charArray.splice(i, 1);
        i--;
      }
    } else {
      counter = 0;
    }
    temp = charArray[i];
  }
  console.log(charArray.join(""));
}

solution1("eedaaad");
solution1("xxxtxxx");
solution1("uuuuxaaaaxuuu");
solution1("uuuuuuuuuuuuuuxxxxxxxxxxxaaaaaaaaaaaaxxxxxxxxxxxxxuuuuuuuuuuuuu");
console.timeEnd('solution1');




console.time('solution2');
function solution2(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const filteredString = S.replace(/(.)\1{2,}/g, '$1$1');
  console.log(filteredString)
}

solution2("eedaaad");
solution2("xxxtxxx");
solution2("uuuuxaaaaxuuu");
solution2("uuuuuuuuuuuuuuxxxxxxxxxxxaaaaaaaaaaaaxxxxxxxxxxxxxuuuuuuuuuuuuu");
console.timeEnd('solution2');
// The RegExp /(.)\1{2,}/ matches any single character followed by the same character two or more times.