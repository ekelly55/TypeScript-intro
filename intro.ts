const user = {name: 'eamonn', age: 39}

console.log('Eamonn')
console.log(user.name)

//ts is a superset of js. it can do all of js, but more.

// doesn't add more features...just allows you to write js in na more precise way so you have fewer errors

// ts is compiled into js

// strange issue RE linting? 

// TS provides type safety: wont allow loosely typed?

// i.e. 2 + '2' = 22

// null + 2= 2

// undef. + 2 = NaN

// static checking - that's the only job ts does. a lot of langs have this, but not js. your IDE won't tell you when something's wrong (but whta about linting?)

// ts analyzes code as we type

// ts you write a lot more compared w/ js...but less error prone

// write all code in TS - transpiled into js (don't worry about specs of what transpiled is)

// ts is a dev tool. project still runs in JS\

// TS gives you additional linting than otherwise. i.e. "cannot read property of undefined" etc. is avoided by linting.

// but it still seems to allow for mixed typing? i.e. 2 + '2' = 22

//types: number, string, bool, null, undef, void, object, arr, tuples

//there is any, never, unknown...but special circumstances

//when is TS best to use - a function accepts 2 nums. you want to ensure that they are actually numbers, a function returns a string

//syntax:  let varName: type = value

//primitives: number is just number, no distinction in js b/t int or float, so no distinction in ts either

//exaample of inferred value...?