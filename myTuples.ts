//no tuples in js

// const user: (string | number)[] = [1, 'ek']
//notice that you can put them in any order, regardless of how you typed user. but beolow is the right way to do it using an tuple
let user: [string, number, boolean] 

user = [131, 'ek', true]
//this won't work, because we set user as a tuple. order matters
user = ['emk', 3, true]

//a good use case is rgb numbers:

let rgb: [number, number, number] = [255, 231, 112]
//can't do something like leave out a value or add in opacity

type User = [number, string]
//each needs id and email

const newUser: User = [43, 'ek@ek.com']

newUser[1] = 'emkem.com'
//makes individual elements mutable but not the overall format of types

//even tho it's a tuple, can use it as an array, but that ruins the purpose of a tuple, which is that it has a defined length and types in specific positions. but it looks like m ine is correctly not allowing that. 

newUser.push(true)

export = {}