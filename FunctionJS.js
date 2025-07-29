let a = ['a','b','c']
if(a === undefined) a = [];
//IS EQUALS TO
a = a || [];
//We can defined default value - ES6
const defaultValue = (obj, a = []) =>
{
  a.push(obj);
  return a;
}
console.log(defaultValue(5, a));
console.log(defaultValue(5)); // We can omit second parameter
//When we omit parameter it will get default value, most of the time - undefined

//We can put any number of arguments
//rest parametr - during declaring the function - to concatenate the separate velue into array
const anyAmountOfParameters = (...arr) =>
{
    for(let i of arr)
    {
      console.log(i);
    }
}
anyAmountOfParameters(1,2,3,4,5,6,7,9,'a','b',[]); //vararg function ES6
anyAmountOfParameters(...a); //spread operator - during calling the function - to seprarate the table into
//separated value

//NEVER USE CODE BELOW! 
//table ARGUMENTS that contains list of arguments
//Only in old version of functions
function anyAmountOfParameters2(x)
{
  for(let i = 0; i < arguments.length; i++)
  {
      console.log(arguments[i]);
  }
}
anyAmountOfParameters2(1,2,3,4,5,6,7,9,'a','b',[]); //vararg function - Arguments - pre ES6
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
(function (){console.log("instantly")}()); // I call the function instantly

//closure - the function is called in the scope where it was defined!
let scope = "global";
function checkScope()
{
    let scope = "local";
    function fun() 
    {
        return scope;
    }
    return fun; //We NOT call the function yet!
}
console.log(checkScope()()); //We call the function right now! Remember - the scope = where it was defined

console.log("The amount of arguments = "+anyAmountOfParameters.length);
console.log("The name of the function = "+anyAmountOfParameters.name);
console.log("The body of the function (usually) = "+anyAmountOfParameters.toString);

//We can call the function in context of Object
//Because of that it change this 
//It works as the function is was a method
const obj =
{
     name : "OBJ"
}
function fun()
{
  console.log("Hello world = "+this.name);
}
fun();
fun.call(obj); //We can put the arguments as a single values - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
fun.apply(obj); //We can put the arguments as an array - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

//We can also bind the function - We bind this!
//Arrow function do not operate on bind!
function xyz(y) { return this.x + y};
const obj2 = { x : 1};
let callFunction = xyz.bind(obj2); //We bind the function to the Object
console.log(callFunction(5));
let newObj  = 
{
  x : 45,
  callFunction
};
console.log(newObj.callFunction(5)); //The method is still bind to the different method

//anonymous function
//Created each time it was called
//Always global scope
const fun2 = new Function("x", "y", "return x + y;"); //We create the function via constructor
console.log(fun2(15,30));
