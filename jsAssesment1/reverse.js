// loops
function reverse(string) {

    var result = '';

    while(string.length != ""){

        result += string.split('').slice(0,4).reverse().join('');
        string = string.slice(4);
    }

    return result;
    
}
// recursion
function reverseRecursion(str){

    return (str.length =="")? "" :str.split('').splice(0,4).reverse().join('') + reverseRecursion(str.slice(4));

}

var result = reverseRecursion("Lorem at");

console.log(result);