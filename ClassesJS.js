/**************************************OLD WAY TO DEFINE CLASSES************************/
function factoryFunction(x, y)
{
    let obj = Object.create(factoryFunction.methods); //We define what we want to inherit - in this case
    //We will inherit all methods
    obj.x = x;
    obj.y = y;
    return obj;
}
//We define the methods that will be inherited
factoryFunction.methods =
{
    substract() {return this.x - this.y;},
    add() {return this.x + this.y;},
    multiply() {return this.x * this.y;},
    divide() {return this.x / this.y;},
    modulo() {return this.x % this.y;},
    toString() {return "x = " + this.x + " y = " + this.y;}
}
//We create the Object
let myNewObj = factoryFunction(2,3);
//We inhertied the methods! Now we can call them
console.log(myNewObj.substract());
console.log(myNewObj.add());
console.log(myNewObj.multiply());
console.log(myNewObj.divide());
console.log(myNewObj.modulo());
console.log(myNewObj.toString());
/*********************************OLD WAY TO DEFINE CLASSES USING CONSTRUCTOR************************/
function ConstructorMethod(x, y) //We defined contructor
{
    this.x = x;
    this.y = y;
    //If new.target contains some value, it means that the method was called as a contructor. 
    //Otherwise, it will conains undefined
    this.target = new.target;
}
//We inherited those method by prototype
ConstructorMethod.prototype = 
{
    substract() {return this.x - this.y;},
    add() {return this.x + this.y;},
    multiply() {return this.x * this.y;},
    divide() {return this.x / this.y;},
    modulo() {return this.x % this.y;},
    getTarget(){return this.target;},
    toString() {return "x = " + this.x + " y = " + this.y;}
}
//We create the Object with constuctor
let myNewObjConstructor = new ConstructorMethod(2,3);
//We inhertied the methods! Now we can call them
console.log(myNewObjConstructor.substract());
console.log(myNewObjConstructor.add());
console.log(myNewObjConstructor.multiply());
console.log(myNewObjConstructor.divide());
console.log(myNewObjConstructor.modulo());
console.log(myNewObjConstructor.getTarget());
console.log(myNewObjConstructor.toString());

console.log("Is my object a member of that class ? ");
//It will return true even if the prototype is grandparent of the object
console.log(myNewObjConstructor instanceof ConstructorMethod);
//We can also inherit the class via prototype
function PrototypeInherit(x,y,z)
{
    this.x = x;
    this.y = y;
    this.z = z;
}
PrototypeInherit.prototype = Object.create(ConstructorMethod.prototype); //We create the object that will inherit after class
PrototypeInherit.prototype.constructor = PrototypeInherit; //We want to have own constructor - not inherited from parent
let prototypeInheritObj = new PrototypeInherit(1,2,3);
console.log("prototype = " + prototypeInheritObj.substract()); //We can also override this method if we want
/*********************************THE NEWEST WAY TO DEFINE CLASSES - CLASS************************/
//It always works as 'use strict'
class ClassMethod //We define the class, it contains methods and fields (attributes)
{
    //JS can create default, empty constructor
    constructor(x, y) //optional
    {
        this.x = x;
        this.y = y;
    }
    substract() {return this.x - this.y;}
    add() {return this.x + this.y;}
    multiply() {return this.x * this.y;}
    divide() {return this.x / this.y;}
    modulo() {return this.x % this.y;}
    toString() {return "x = " + this.x + " y = " + this.y;}
}
let objectClass = new ClassMethod(2,3);
console.log(objectClass.substract());
console.log(objectClass.add());
console.log(objectClass.multiply());
console.log(objectClass.divide());
console.log(objectClass.modulo());
console.log(objectClass.toString());
//The classes can inherit - extends
class AnotherClass extends ClassMethod
{
    #iAmPrivateField = 15; //This code is reallllllly fresh - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements
    constructor(x,y,z)
    {
      super(x,y);
      this.z = z;
    }
    metodka()
    {
        console.log(this.x + " " + this.y + " " + this.z);
    }
    static staticMethod()
    {
        console.log("I am the static method. You can call me only via constructor. I will throw the error if you call me via object!");
    }
    printPrivateField()
    {
        console.log(this.#iAmPrivateField);
    }
}
let inheritedObj = new AnotherClass(1,2,3);
inheritedObj.metodka();
console.log(inheritedObj.add());
AnotherClass.staticMethod();
//inheritedObj.staticMethod(); -- NOT ALLOWED!
inheritedObj.printPrivateField();
//The classes might not have a name!
let ObjWithoutName = class{constructor(x){this.x = x;}}
console.log(new ObjWithoutName(15).x);
