let obj = {"x":5, "y":10, "z":15};
for(let it of Object.keys(obj))
{
	console.log(it);
}
//means the same as 
for(let it in obj) //but it's older version and could faild!
{
	console.log(it);
}
for(let it of Object.keys(obj))
{
	console.log(it + " = " + obj[it]);
}
//it can get me value of the object 
for(let it of Object.values(obj))
{
	console.log(it);
}
//or value and the key from the object
for(let [key, value] of Object.entries(obj))
{
	console.log(key + " = " + value);
}
//if can even iterate through the letters
for(let it of "abcdefghijklmnoprstuwxyz")
{
	console.log(it);
}
