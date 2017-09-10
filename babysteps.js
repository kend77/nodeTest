//takes the process.argv array and sums all arguments passed into console.
//All arguments with index 2 or higher
function sum(arr) {
  var sum = 0;
  arr.forEach(function(elem, index) {
    if(index > 1) {
      sum += Number(elem);
    }
  });
  return sum;
}

console.log(sum(process.argv));
