//This is how iterator works inside (more or less)
let arr = [1,2,3,4,5];
let iterator = arr[Symbol.iterator](); //we call the iterator via Symbol.iterator - build inside iterable3 type
//We have to call method next() until the method returns object with done atttribute equals true
for(let result = iterator.next(); !result.done; result = iterator.next())
{
    console.log(result.value);
}
class MyIterableClass
{
    constructor(from, to)
    {
        this.from = from;
        this.to = to;
    }
    [Symbol.iterator]()
    {
        let next = this.from;
        let last = this.to;
        return {
          [Symbol.iterator]() {return this;},
          next()
          {
            return (next <= last) ? {value: next++} : {done: true};
          }            
        };        
    }
}
let obj = new MyIterableClass(0,10);
for(let it of obj)
{
    console.log(it);
}
function* myGenerator(from, to)
{
  for(let i = from; i < to; i++)
  {
    yield i; //return
  }
}
console.log("My generator = "+[...myGenerator(0,10)]);

class MyClassWithGenerator
{
  constructor(from, to)
  {
    this.from = from;
    this.to = to;
  }
  *generator() //star is enough ;p
  {
    for(let i = this.from; i < this.to; i++)
    {
      yield i;
    }
  }
}
let myGeneratorObj = new MyClassWithGenerator(0,10);
console.log("My generator object = "+[...myGeneratorObj.generator()]);

class MyClassWithGeneratorAndSymbol
{
  constructor(from, to)
  {
    this.from = from;
    this.to = to;
  }
  *[Symbol.iterator]()
  {
    for(let i = this.from; i < this.to; i++)
    {
      yield i;
    }
  }
}
let myGeneratorObjAndSymbol = new MyClassWithGeneratorAndSymbol(0,10);
console.log("My generator object = "+[...myGeneratorObjAndSymbol]);

function* generatorWithYieldStar(obj)
{
  yield* obj; //it iteratr though object and return all values
}
console.log("Yield with star = "+[...generatorWithYieldStar(arr)]);

