let number = 15;
let binary = "Ob"+number.toString(2);
let octal = "Oo"+number.toString(8);
let hex = "Ox"+number.toString(16);
console.log("Number in binary = "+binary+"\n numer in octal = "+octal+"\n numerin decimal = "+number+"\n number in hex = "+hex);
let pi = 3.14159;
console.log(pi.toFixed(2));//cut the rest of the decimals
console.log(pi.toExponential(1)); //we use e notation there "3.1e+0"
console.log(pi.toPrecision(20));
let a = parseInt("0xFF"); //we can parse the hex numbers!
let b = parseInt("11", 2); // we can also choose which system we want
console.log(a);
console.log(b);
