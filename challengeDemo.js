// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution1(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let updatedArray = sortArray(A);
  const max = 100000;
  for (let i = 1; i < max; i++) {
    if (!updatedArray.includes(i)) {
      console.log("Min found ", i);
      return i;
    }
  }
}

function sortArray(array) {
  const len = array.length;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (array[j - 1] > array[j]) {
        let temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array.reduce(
    (array, el) => (array.includes(el) ? array : [...array, el]),
    []
  );
}

console.time('solution1');
solution1([1, 3, 6, 4, 1, 2,1, 3, 6, 4, 1, 2]);
solution1([1, 2, 3, 3, 6, 4, 1, 2,1, 3, 6, 4]);
solution1([1, 2, 3]);
solution1([-1, -3]);
console.timeEnd('solution1');


function solution2(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const filteredSet = new Set(A);
  const updatedArray = sortArray2([...filteredSet]);

//   const filteredSet = A.reduce(
//     (array, el) => (array.includes(el) ? array : [...array, el]),
//     []
//   );
// const updatedArray = sortArray2(filteredSet);

  const max = 100000;
  for (let i = 1; i < max; i++) {
    if (!updatedArray.includes(i)) {
      console.log("Min found ", i);
      return i;
    }
  }
}

function sortArray2(array) {
  let sorted;
  let temp = null
  while(!sorted){
    sorted= true;
    array.forEach((el,index) =>{
      temp = el;
      if(array[index + 1] < el){
        el = array[index + 1];
        array[index + 1] = temp;
        sorted = false;
      }
    })
  }
  return array;


  // const len = array.length;
  // for (let i = len - 1; i >= 0; i--) {
  //   for (let j = 1; j <= i; j++) {
  //     if (array[j - 1] > array[j]) {
  //       let temp = array[j - 1];
  //       array[j - 1] = array[j];
  //       array[j] = temp;
  //     }
  //   }
  //   console.log(array)
  // }
  // return array;
}


console.time('solution2');
solution2([1, 3, 6, 4, 1, 2,1, 3, 6, 4, 1, 2]);
solution2([1, 2, 3, 3, 6, 4, 1, 2,1, 3, 6, 4]);
solution2([1, 2, 3]);
solution2([-1, -3]);
console.timeEnd('solution2');

