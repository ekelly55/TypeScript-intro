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