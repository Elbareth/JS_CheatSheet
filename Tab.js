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
