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
// ^ - negation [^abc] - everything except abc
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
