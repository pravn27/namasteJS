// What happens when run below code, how JS code executed behind the scene  ?
// Execution Contexts, Call Stack

var n = 2;

function square(num) {
  var ans = num * num;
  return ans;
}

var square2 = square(n);
var square4 = square(4);

console.log("square2", square2);
console.log("square4", square4);
