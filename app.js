var array = [1,5,10,-2];
var last = array.length-1;
[array[0],array[last]]=[array[last],array[0]];
console.log (array);