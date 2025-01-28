//power up works from the right to the left side!
//that's the only expcetion in digits operators!
//ES2016
//Math.pow()
var a = 2 ** 3 ** 4;
var b = (2 ** (3 ** 4));
var isAEqualB = a === b;
console.log(isAEqualB);
var c = 7/0; //INFINITY
var d = -7/0; //-INFINITY
var e = 0/0; //NaN
console.log(c+" "+d+" "+e);
//Adding numbers
console.log(1+"2"); //12
console.log(true+true); //2! we convert true to 1
console.log(2+null); //2, null = 0
console.log(2+undefined); //NaN 
//?? - give me first correct value - not undefined or null - ES2020
var x = null;
var y;
var z = 15;
var result = x??y??z;
console.log(result);
console.log(typeof null); //OBJECT!!!
const funABC = () => {return "abc";};
console.log(typeof funABC); //function
let tab = [1,2,3,4,5];
console.log(typeof tab); //OBJECT
delete tab[3]; // if it deleted the element it return true
for(var i = 0; i < 5; i++)
{
	console.log("i = "+tab[i]);
}
