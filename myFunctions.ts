// function addTwo(num) {
//     return num + 2
// }

// addTwo(5)

//written as above, it will run, but you get linting b/c of implicit any

//but written like this is correct: 

function addTwo(num: number){
    return num + 2
}

addTwo(5)

//this will work, but not logical

function addOne(num: number){
    return "hello"
}

//so do this to make that impossible:
function addThree(num: number): number{
    return "hello"
}
//this means input a number, return a number

//this saves us from having to write ternaries to catch incorrect arguments

function getUpper(val: string){
    return val.toUpperCase()
}

getUpper("hi")

// function signUpUser(name, email, isPaid){
//     //oops, all implicit any!
// }

function signUpUser(name: string, email: string, isPaid: boolean){

}

//heres another method

let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}


signUpUser('eamonn', 'emk@emk.com', true)

loginUser('eamonn', 'emk@emk.com') //oops, missing an argument! but it's ok b/c we specified a default value of false for isPaid

function getValue(myVal: number){
    if (myVal > 5) {
        return true
    }
    return "200 OK"
}
//what if you have to specify different outputs depending on input?

//here it is w/ arrow function

const getHello = (s: string):string =>{
    return ""
}

const heros = ['thor', 'spiderman', 'wolverine', 'cable']
// const heros = [1, 2, 2, 2] it will know in the function what type "hero" is. but it's better to be explicit

heros.map((hero):string => {
    return  `hero is ${hero}`
})

// function consoleError(errmsg: string) {
//     console.log(errmsg);
// }
// the problem here is that it doesn't return anything and doesnt specifiy. so do it this way. 

function consoleError(errmsg: string): void {
    console.log(errmsg);
}
//this specifies it returns nothing

//another example, from documentation, in which we NEVER return (it's different, it causes a crash) it's more recoemmnded than void:

function handleError(msg: string): never {
    throw new Error(msg)
}


export {}

