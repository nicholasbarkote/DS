var array = [1,2,4,7];
// using array methods
var result = array.reduce((prev,current)=>  prev + current , 0);

//using loops
function addUsingLoops(array){
    var sum = 0;
    array.forEach(element => {
        sum += element
    });
    return sum;
}

console.log(addUsingLoops(array));
console.log(result);