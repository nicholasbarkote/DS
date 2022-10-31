// loops
function reverse(string) {

    var result = '';

    for (let index = 0; index < string.length; index++) {

        result += string.split('').slice(0,4).reverse().join('');
        string = string.slice(4);
    }

    return result;
    
}
// recursion
function reverseRecursion(str){

    if(str.length ==""){
        return ""
    } 
    return str.split('').splice(0,4).reverse().join('') + reverseRecursion(str.slice(3));


}

var result = reverseRecursion("Lorem at");

console.log(result);