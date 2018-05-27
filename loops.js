// Use a for loop when you know how many times you want the loop to run (for example, when you have an array of known size).

var array = [];

function forLoop(arr) {
  //add string to array 25 times
  for(let i = 0; i < 25; i++) {
    //if i value is 1, add 'I am 1 strange loop'
    if(i === 1){
      arr.push(`I am 1 strange loop.`);
    } 
    //otherwise, add 'I am ${i} strange loops'
    else {
      arr.push(`I am ${i} strange loops.`);
    }
  }
  //return array
  return arr;
}