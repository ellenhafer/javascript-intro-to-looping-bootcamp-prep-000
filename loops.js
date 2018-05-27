// for ([initialization]; [condition]; [iteration]) {
//   [loopBody]
// }

// Use a for loop when you know how many times you want the loop to run (for example, when you have an array of known size).

var array = [];

function forLoop(arr) {
  for(let i = 0; i < 25; i++) {
    if(i === 1){
      arr.push(`I am ${i} strange loop.`);
    } else {
      arr.push(`I am ${i} strange loops.`);
    }
    return arr;
  }
}