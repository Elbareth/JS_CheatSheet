//object literal
let book = {
	"title": "JS book",
  "":"something empty",
  author:{
  	firstname: "ABC",
    "surname": "XYZ"
  }
};
for(let [key, value] of Object.entries(book))
{
	console.log(key + " = " + value);
}
//keyword new
let obj = new Object();
let arr = new Array();
//Object.prototype; Array.prototype
//Object.create()
let obj1 = Object.create({x:5,y:10,z:15}); //obj1 inherit the argument prototype
let obj2 = Object.create(null); //in that case - this method inherit nothing! Even toString() method!
let obj3 = Object.create(Object.prototype); //just standard object like new Object();
