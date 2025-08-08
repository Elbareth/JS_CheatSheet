//*************************SET - no duplication!**************************/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
let mySet = new Set(); //I create the Set
let initSet = new Set("We initialize the set with the iterable value");
mySet.add(1); //add element
mySet.delete(1); //we remove the element
mySet.add([1,2,3]); //We add array as a whole!
mySet.clear(); //We clear the set (remove all elements)
console.log("Size = " + mySet.size); //size of the set
console.log("Is set contains elements = " + initSet.has("t")); //We compare it strictly ===
for(let it of initSet) //We can iterate through Set
{
  console.log(it);
}
initSet.forEach(it => console.log(it));
let arrayFromSet = [...initSet]; //We convert set into array
console.log(arrayFromSet);
console.log(arrayFromSet instanceof Array);
//+no duplication
//+compare the elements in a strict way ===
//+don't have indexes
//+remember the order of adding the elements!

//***************************MAP ***********************************************/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
let myMap = new Map(); //I create the Map
myMap.set("one", 1);
myMap.set("two", 2);
myMap.set("three", 3);
myMap.set("four", 4);
myMap.set("five", 5);
console.log("Give me element five = "+myMap.get("five"));
myMap.set("five", NaN); //ATTENTION! We can override the value!
console.log("Give me element five = "+myMap.get("five"));
console.log("Is map still contains element five = "+myMap.has("five"));
myMap.delete("five"); //We remove element five
//myMap.clear() -- we can remove all values from the map
console.log("Size = " + myMap.size);
for(let [key, value] of myMap)
{
  console.log("["+key+"] = "+value);
}
myMap.forEach((value, key) => console.log("["+key+"] = "+value)); //ATTENTION! order of the value and key!
let arrayKeys = [...myMap.keys()]; //We create array with all keys
console.log("All keys = "+arrayKeys);
let arrayValues = [...myMap.values()]; //We create the array with all values
console.log("All values = "+arrayValues);
let arrayEntries = [...myMap.entries()] //the same as [...myMap] -- we create array with all entries
console.log("All entries = "+arrayEntries);
//+compare the elements in a strict way ===
//+remember the order of adding the elements!

//*******************************TYPED ARRAY *********************************/
//When we convert one table into another the elements of the table can be cut off!
//And NO Exception will be thrown!
let sizeOfArray = 5;
let int8Arr = new Int8Array(sizeOfArray); //byte with sign
let uini8Arr = new Uint8Array(sizeOfArray); //byte without the sign
let uClampedInt8Arr = new Uint8ClampedArray(sizeOfArray); //byte without the sign - overload of the byte is not possible 
let int16Arr = new Int16Array(sizeOfArray); //16 digits with sign
let uini16Arr = new Uint16Array(sizeOfArray); //16 digits without the sign
let int32Arr = new Int32Array(sizeOfArray); //32 digits with sign
let uini32Arr = new Uint32Array(sizeOfArray); //32 digits without the sign
let int64Arr = new BigInt64Array(sizeOfArray); //64 digits with sign
let uini64Arr = new BigUint64Array(sizeOfArray); //64 digits without the sign
let float32Arr = new Float32Array(sizeOfArray); //float 32 with sign
let float64Arr = new Float64Array(sizeOfArray); //float 64 with sign
console.log("Is array = " +Array.isArray(int8Arr));
let int16ArrSeparateValue = Int16Array.of(1,2,3,4,5); //We can initialize the array at the very beginning
let int16ArrBaseOnTab = Int16Array.from([1,2,3,4,5]); //We can also initialize based on array
//+The program does not treat them as array!
//+The size of the array cannot be changed - it has to be given during initialization!
//+The array is initialized with zeros
let buffer = new ArrayBuffer(1024); //It allocate the specific amout of bytes
//We cannot read and/or wite thouse part of memory
let offset = 8;
let numberOfElements = 10;
let bufferedInt16Arr = new Int16Array(buffer, offset, numberOfElements); //We create the array that will
//occupited the mentioned space. We set (optionaly) the offset and number of elements
int16Arr.set([1,2]); //We put the values into table
int16Arr.set([4,5],3); //We can also set position where we want to set the values
int16Arr.forEach(it => console.log(it));
let subArr = int16Arr.subarray(3,sizeOfArray); //We can cut the part of the array - new view of the same array
console.log("Subarray");
subArr.forEach(it => console.log(it));
let sliceArr = int16Arr.slice(3,sizeOfArray); //We can cut the part of the array - a copy of the array
console.log("Slice");
subArr.forEach(it => console.log(it));
console.log("buffer = " +int16Arr.buffer); //We can detect the buffer that was used to create the array
console.log("offset = "+int16Arr.byteOffset);
console.log("amount of bytes = "+int16Arr.byteLength); // the size of the array in bytes
console.log("the size of buffer = "+int16Arr.buffer.byteLength);
//We have number in binary format 0000 0001
//The side from which we are reading the number matters!
//We can have little-ending -> 1000 0000
//Or big-ending -> 0000 0001
//Most processors nowadays use little-ending
//But we can't be sure about network resources/different format!
//We have to use DataView -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView
let dataView = new DataView(buffer, offset, numberOfElements);
let numberWeWantToSave = 8;
let offsetOfDataView = 2;
let isLittleEnding = true;
dataView.setInt16(offsetOfDataView, numberWeWantToSave, isLittleEnding); //we set the number in format we want
console.log("little ending = " + dataView.getInt16(offsetOfDataView, isLittleEnding));
console.log("big ending = " + dataView.getInt16(offsetOfDataView, !isLittleEnding));
//*******************************************REGEX******************************* */
// ^ - negation [^abc] - everything except abc OR BEGINNING!
// \s - white signs - space, table
// \S - everything except white signs
// \d - digits
// \D - NOT digits
// \p{...} - some Unicode REGEX - ES2018
// \P{...} - this regex not using Unicode - ES2018
// {min, max} - [abc]{min, max} -> we want to have abc multiply <min,max>
// ? - zero or one
// \x for example \1 - n'th sub regex used - ([abc])[^abc]\1 - in that case \1 is [abc]
// If we don't want to create a group to call it later, we have to use ([abc])(?:[^abc])+ \1 means [abc] the second part is only to separate logicaly not to create a group -> (?:)
//From version ES2018 we can create the group names!
//(?<name>[a-z]*) -> then we can call it by name (?<...>)
//To call the named group we have to call \k<name>
// \b where the word ends - \bMyWord\b
// (?=x) - the word has to end with x regex -> (?!x) is a negation for it
// (?<=x) - the word has to begin with x regex -> (?<!x) is a negation for it - ES2018
//***FLAGS**/
// \g -- global - search everywhere
// \I -- do not care about upper case and lower case
// \m -- we search in multiline text
// \s -- . (every character) also means \n - ES2018
// \u -- unicode - ES6
// \y -- sticky - search that matches only from the lastIndex - https://www.w3schools.com/jsref/jsref_regexp_y.asp
console.log("Do we found regex = " + "Mmm555aaA".search(/^[m]+[0-9]+.*$/ui)); // return position
console.log("Do we found regex = " + "Mmm555aaA".search(/^[g]+[0-9]+.*$/ui)); //or -1 if it not found
let text1 = "AbCdEfGhIjKl";
text1 = text1.replace(/([A-Z])/g, (foundMatched, arg1) => arg1.toLowerCase()); // \g global - all findings! $1 we call our group
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_function_as_the_replacement
console.log(text1);
//NOT IN FIREFOX :(
let text2 = "AbCdEfGhIjKl";
text2 = text2.replace(/($<named_group>[A-Z])/g, " UpperCase $<named_group> "); // \g global - all findings! We can also call named group
console.log(text2);
let textWithDigits = "1a2b3c4d5e6f";
let found = textWithDigits.match(/\d/g);
console.log("There are matched values = " +found); //It it found nothing -> returns null
console.log("The first element of array is first element found, the rest are our groups = "+textWithDigits.match(/(\d)+/)); //works only without flag \g
let myStickyRegex = /(\d)+/y;
myStickyRegex.lastIndex = 3; //We will start search from this index
console.log("Sticky search = "+textWithDigits.match(myStickyRegex));
//after the operation, lastIndex move to the beginning -> lastIndex = 0
console.log("Sticky search = "+textWithDigits.match(myStickyRegex));
//ES2020 - try to match within whole text
for(let it of textWithDigits.matchAll(/(\d)/g))
{
  console.log("The whole text = " + it.input +" at the position "+it.index+" and there is also a group " +it[0]);
}
let initRegex = new RegExp("(\\d+)", "g"); //We put the regex and the flag -- remember to add here double \
console.log("My regex = " + initRegex.source);
console.log("Flag used for the regex = "+initRegex.flags);
console.log("Do we use global flag? "+initRegex.global);
console.log("Do we ignore the case? "+initRegex.ignoreCase);
console.log("Do we use multiline flag? "+initRegex.multiline);
console.log("Do dot also means end of the line? "+initRegex.dotAll);
console.log("Do we use unicode? "+initRegex.unicode);
console.log("Do we use sticky? "+initRegex.sticky);
console.log("Where we start searching? "+initRegex.lastIndex);
console.log("Do regex match "+initRegex.test(textWithDigits));
initRegex.lastIndex = 0; // exec has to start from the beginning!
//ATTENTION! This method ca cause a lot of problems. Use -> matchAll 
while ((it = initRegex.exec(textWithDigits)) !== null) //never use regex directly here
//it could cause endless loop!
//If we use regex direclty on each run we set lastIndex to 0!
//Always use variable here, so the program can move lastIndex
{
  console.log("The whole text = " + it.input +" at the position "+it.index+" and there is also a group " +it[0]);
}
//******************DATA AND TIME**************************************/

