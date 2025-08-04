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
//+The program does not treat them as array!
//+The size of the array cannot be changed - it has to be given during initialization!
//+The array is initialized with zeros
