// function addTwo(num) {
//     return num + 2
// }
// addTwo(5)
//written as above, it will run, but you get linting b/c of implicit any
//but written like this is correct:
function addTwo(num) {
  return num + 2;
}
addTwo(5);
//this saves us from having to write ternaries to catch incorrect arguments
function getUpper(val) {
  return val.toUpperCase();
}
getUpper("hi");
// function signUpUser(name, email, isPaid){
//     //oops, all implicit any!
// }
function signUpUser(name, email, isPaid) {}
//heres another method
var loginUser = function (name, email, isPaid) {
  if (isPaid === void 0) {
    isPaid = false;
  }
  //here we get a conditional generated based on our TS. not sure what void 0 is
};
signUpUser("eamonn", "emk@emk.com", true);
loginUser("eamonn", "emk@emk.com"); //oops, missing an argument! but it's ok b/c we specified a default value of false for isPaid
