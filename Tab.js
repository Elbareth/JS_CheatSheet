// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
//***********************TIME TO CREATE A TABLE********************
let tab1 = [1,2,3,4,'abc'];
console.log("First tab");
for(let i = 0; i < tab1.length; i++)
{
    console.log(tab1[i]);
}
let tab2 = [1,,,4,'abc',,'xyz'];
console.log("Second tab");
for(let i = 0; i < tab2.length; i++)
{
    console.log(tab2[i]);
}
let tab3 = [2,3];
let tab4 = [1, ...tab3, 4];
console.log("Forth tab");
for(let i = 0; i < tab4.length; i++)
{
    console.log(tab4[i]);
}
let tab5 = [...'abcdefghijklmnoprstuwxyz'];
console.log("Fifth tab");
for(let i = 0; i < tab5.length; i++)
{
    console.log(tab5[i]);
}
let tab6 = new Array(6);
console.log("Size of the sixth array = "+tab6.length);
let tab7 = new Array(1,2,3,4,5,6);
console.log("Seventh tab");
for(let i = 0; i < tab7.length; i++)
{
    console.log(tab7[i]);
}
let tab8 = Array.of(15); //we create the table with the elements
console.log("Eighth tab");
for(let i = 0; i < tab8.length; i++)
{
    console.log(tab8[i]);
}
let tab9 = Array.from(tab8); //we create the new table from the old one
console.log("Nineth tab");
for(let i = 0; i < tab9.length; i++)
{
    console.log(tab9[i]);
}
//*************LENGTH - we can add/delete elements!******************
//LENGTH is NOT read only!!!
let tab10 =[1,2,3,4,5];
tab10.length = 3; //we delete the rest of the elements from the table!
console.log("Tenth tab");
for(let i = 0; i < tab10.length; i++)
{
    console.log(tab10[i]);
}
//***************ADD AND REMOVE ELEMENTS*****************
tab10.push('xyz'); //we add element at the end of the array
console.log("Tenth tab - added element at the end");
for(let i = 0; i < tab10.length; i++)
{
    console.log(tab10[i]);
}
tab10.unshift('abc'); //we add element at the beginning of the array
console.log("Tenth tab - added element at the beginning");
for(let i = 0; i < tab10.length; i++)
{
    console.log(tab10[i]);
}
tab10.pop(); //we remove the last element of the array
console.log("Tenth tab - removed from the end");
for(let i = 0; i < tab10.length; i++)
{
    console.log(tab10[i]);
}
tab10.shift(); //we remove the first element of the array
console.log("Tenth tab - removed from the beginning");
for(let i = 0; i < tab10.length; i++)
{
    console.log(tab10[i]);
}
delete tab10[1];
console.log("Tenth tab - removed via delete");
for(let i = 0; i < tab10.length; i++)
{
    console.log(tab10[i]);
}
//*************HOW TO ITERATE***********************
console.log("We iterate tab5 for/of")
for(let elem of tab5)
{
	console.log(elem);
}
console.log("We return entries with index of it")
for(let [index, elem] of tab5.entries()) //entries method return index from table
{
	console.log(index + " = " + elem);
}
//ATTENTION! forEach will ommit undefined element of the array!
console.log("forEach");
tab5.forEach((index, it) => console.log(index + " = " + it));
//MAP - we call the method for each element and return it
//We return the NEW array. We don't modidy the old one!
console.log("map");
tab5.map(it => it+"-"+it).forEach(it => console.log(it));
//Filter - it filter the value via function
console.log("Filter");
tab5.filter(it => [...'heloworld'].includes(it)).forEach(it => console.log(it));
//We want to find specific element
console.log("We found letter = " + tab5.find(it => it > 'w'));
console.log("We found the index of that letter = " + tab5.findIndex(it => it > 'w'));
console.log("We found nothing (undefined) = " + tab5.find(it => it < 'a'));
console.log("We found nothing (-1) = " + tab5.findIndex(it => it < 'a'));
console.log("We check if every element of the array is string = " +tab5.every(it => typeof it === "string"));
console.log("We check if any (at least one) element of the array isNaN = " +tab5.some(it => it.isNaN));
console.log("We reduce the array to one value = " + tab5.reduce((x,y) => x+y, "")); //the second parameter is initial value. If initial value is empty, the first element of the array will be initial value
console.log("We reduce the array to one value = " + tab5.reduceRight((x,y) => x+y)); //desc order
console.log("We flat the array one level = "+[1,[2,[3]]].flat());
console.log("We flat the array few levels = "+[1,[2,[3]]].flat(2));
console.log("We flat the array one level = "+[1,[2,[3]]].flatMap(it => it*it)); //it means tab.map().flat() but it is more sufficient
//concat - we create a copy of the array - NEW array!
console.log("We connect the array with new values = " + [1,2,3].concat(4,5));
//It will flat our table
console.log("We connect the array with new values = " + [1,2,3].concat([4,5]));
//It won't flat our table
let tab11 = [1,2,3];
tab11.push([[4,5]]);
console.log("We push the array with new values = " + tab11);
console.log("Slice = "+[1,2,3,4,5].slice(0,3)); //part of the table - from the beginning until the end
//splice will delete and (optionaly) add elements
let indexSplice = 2;
let amountOfElementsWeWantToDelete = 3;
let elementWeWantToAdd = [1,2,3];
let tab12 = [1,2,3,4,5,6,7,8,9];
tab12.splice(indexSplice, amountOfElementsWeWantToDelete);
console.log("We remove the elements = " +tab12);
tab12.splice(indexSplice, amountOfElementsWeWantToDelete, elementWeWantToAdd);
console.log("We remove and then add new elements = "+tab12);
let tab13 = new Array(10);
//fill will fill our table automacicaly
let elementWeWantToAddFill = 7;
let beginningImdex = 2;
let endIndex = 5;
console.log("Whole table of 7s " + tab13.fill(elementWeWantToAddFill));
elementWeWantToAddFill = 8;
console.log("We change the table to have 8s "+tab13.fill(elementWeWantToAddFill, beginningImdex));
elementWeWantToAddFill = 9;
console.log("We add the new element once more "+tab13.fill(elementWeWantToAddFill, beginningImdex, endIndex));
let startIndexToCopy = 2;
let startIndexOfCopy = 4;
let endIndexOfCopy = 5;
let tab14 = [1,2,3,4,5,6,7,8,9];
console.log("Copy within = "+tab14.copyWithin(startIndexToCopy, startIndexOfCopy, endIndexOfCopy));

console.log("We find element under index " + [1,2,3,5].indexOf(5));
console.log("We don't find element under index " + [1,2,3,5].indexOf(4)); //Will return -1
console.log("We find element under index (we look from the end)" + [5,1,2,3,5].lastIndexOf(5));
console.log("We don't find element under index (we look from the end)" + [5,1,2,3,5].lastIndexOf(4)); //Will return -1
console.log("The starting point in both method can be different!" + [5,1,2,3,5].lastIndexOf(5, -2));
console.log("The starting point in both method can be different!" + [5,1,2,3,5].indexOf(5, 2));

console.log("My element exist in table "+[1,2,3,NaN].includes(3));
console.log("My element does not exist in table "+[1,2,3,NaN].includes(4));
console.log("In my table NaN element exist "+[1,2,3,NaN].includes(NaN));
console.log("But my NaN element is not find by this method "+[1,2,3,NaN].indexOf(NaN));

console.log("Sort my table "+[1,10,2,20,3,30].sort());
console.log("This time sort correctly "+[1,10,2,20,3,30].sort((a,b) => a-b));
console.log("Reverse the order "+[1,10,2,20,3,30].sort((a,b) => a-b).reverse());

console.log("Create pretty string from the table "+[1,2,3,4,5,6].join("; "))
