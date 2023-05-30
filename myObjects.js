"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'eamonn',
    email: 'e@e.com',
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
//this won't work, b/c email is not included in the function
// createUser({name: 'eamonn', isPaid: false, email: 'e@e.com'})
//this will
var newUser = { name: 'eamonn', isPaid: false, email: 'e@e.com' };
createUser(newUser);
//here we'll write a function to return an object
function createCourse() {
    return { name: 'reactjs', price: 399 };
}
//here we're gonna specify our own type that we created - provide it with parameters that matchthe user elements and return the User type
function createUser2(user) {
    return { name: user.name, email: user.email, isActive: user.isActive };
}
console.log(createUser2({ name: 'ek', email: 'ek@ek.com', isActive: true }));
//notice subtle difference that tells you type is not just an object: no commas b/t key value pairs
//type aliases don't show up in your js b/c those are TS
var myUser = {
    _id: '1234',
    name: 'e',
    email: 'e@e.com',
    isActive: false
    //it's fine to not have cred card b/c it's optional. without the question mark, you'll get linting here for an incomplete type of user. 
};
myUser.email = 'emk@e.com';
//this is how you get it to the js file
