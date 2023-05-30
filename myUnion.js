// a union of two or more types of data into one. this is where you actually use any?
// let score =  33
//what if you're not sure if thi should ever change? do this
var score = 33;
//use this sparingly and carefully
score = 344;
score = '34';
//here wer're defining a user in two ways: a user and an admin, even tho we're not assigning an Admin username (unclear which id it is. That is gonna be messy)
var eamonn = { name: "eamonn", id: 334 };
//here we're editing that user to give it an admin username. still unclear what the id is.
eamonn = { username: 'emk', id: 335 };
//let's print it to find oout
//we see above that in giving eamonn a username, we changed his type to admin
eamonn = { name: 'eamonn', username: 'emk', id: 344 };
console.log(eamonn);
// console.log(eamonn.name)
// console.log(eamonn.username)
console.log(eamonn.id);
console.log(typeof (eamonn));
//here, both name and username seem inaccessible to TS even tho we're getting n o linting on defining eamonn. let's print and see. cant print because of the type error
