//Destructuring
let [x,y] = [3,5];
console.log("x = "+x+" y = "+y);
//we can use nice functions
const sqrt = (a,b) =>
{
	 return [a*a, b*b];
};
console.log(sqrt(2,3));
//we can use it as a loop
let o = {name : 'nazwa', value : 15};
for(const [name, value] of Object.entries(o))
{
	console.log(name, value);
}
//we can save first value to separate variable and rest for the rest variable
let [first,...rest] = [1,1,2,3,4,5,6,7,8,9];
console.log("first = "+first+" rest = "+rest);
//we can even use object for it
let myObject = {a1:5, b1:"nazwa", c1:true}; // I create some object
let {a1,b1,c1} = myObject; // We get the object fields
console.log("a1 = "+a1+" b1 = "+b1+" c1 = "+c1); // now I can operate on values
//we can even chenge the names
let {a1:difA,b1:difB,c1:difC} = myObject; // We get the object fields
console.log("a1 = "+difA+" b1 = "+difB+" c1 = "+difC);
//sth extra
let points = [{x : 1, y : 2}, {x : 3, y : 4}];
let [{x : eleX1, y : eleY1}, {x : eleX2, y : eleY2}] = points;
//******************************************
let points2 = {p1 : [1, 2], p2 : [3,4]};
let {p1 : [eleX3, eleY3], p2 : [eleX4, eleY4]} = points2;
