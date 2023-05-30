// a union of two or more types of data into one. this is where you actually use any?

// let score =  33
//what if you're not sure if thi should ever change? do this

let score: number | string = 33
//use this sparingly and carefully

score = 344

score = '34'

//lets say you have an app w/ hierarchy of typoe of usesrs

type User2 = {
    name: string
    id: number
}


type Admin = {
    username: string
    id: number
}

//here wer're defining a user in two ways: a user and an admin, even tho we're not assigning an Admin username (unclear which id it is. That is gonna be messy)
let eamonn: User2 | Admin = {name: "eamonn", id: 334}
//here we're editing that user to give it an admin username. still unclear what the id is.
eamonn = {username: 'emk', id: 335}

//let's print it to find oout

//we see above that in giving eamonn a username, we changed his type to admin

eamonn = {name: 'eamonn', username: 'emk', id: 344}
console.log(eamonn)
// console.log(eamonn.name)
// console.log(eamonn.username)
console.log(eamonn.id)
console.log(typeof(eamonn))
//here, both name and username seem inaccessible to TS even tho we're getting n o linting on defining eamonn. let's print and see. cant print because of the type error

function getDbId(id: number | string){

    //make some api calls
    // id.toLowerCase()
    //this doesn't work, b/c it won't work with both. doesn't consider type to be number OR string, but rather a unique type that is both (explains problem above w/ eamonn.name and eamonn.username)
    console.log(`DB id is ${id}`)
    if(typeof id === 'string'){
        id.toLowerCase()
    } else {
        id + 2
    }
    //above, a conditional sets the type. TS knows that in line 50 id is a string and in line 52 it's a number
}

getDbId(3)
getDbId('3')

const data: number[] = [1, 2, 3]
const data2: string[] = ['1', '2', '3']
const data3: string | number[] = [0, '1', '2', '3']
//this is still not allowed. have to make it
const data4: string [] | number[] = ['1', '2', '3']
//this means it can be either an arrayh of all strings or all numbs. not mixed
const data5: (string | number)[] = [0, '1', '2', '3']
//this allows for mixed types

//you can allow very strict types
let pi: 3.14 = 3.14
//not useful illustration of designating a variable only as a specific value

//another example

let seatAllotment: 'aisle' | 'middle' | 'window'

seatAllotment = 'galley'
//here you can't asign a crew seat in the galley. you can assign it to any of the specific values above. 

export {}