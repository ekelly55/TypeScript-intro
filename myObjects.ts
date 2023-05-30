const User = {
    name: 'eamonn',
    email: 'e@e.com',
    isActive: true
}

function createUser({name: string, isPaid: boolean}){

}
//this won't work, b/c email is not included in the function
// createUser({name: 'eamonn', isPaid: false, email: 'e@e.com'})

//this will
let newUser = {name: 'eamonn', isPaid: false, email: 'e@e.com'}

createUser(newUser)

//here we'll write a function to return an object
function createCourse():{name: string, price: number}{
    return {name: 'reactjs', price: 399}
}
//using type aliases
type User = {
    name: string;
    email: string;
    isActive: boolean;

}
//here we're gonna specify our own type that we created - provide it with parameters that matchthe user elements and return the User type
function createUser2(user: User): User{
    return {name: user.name, email: user.email, isActive: user.isActive}
}

console.log(createUser2({name: 'ek', email: 'ek@ek.com', isActive: true}))


type User2 = {
    readonly _id: string
    //this means no one can alter the id (for example stored in mongodb)
    name: string
    email: string
    isActive: boolean
    credCardDetails?: number
    //the question mark means it's optional
}
//notice subtle difference that tells you type is not just an object: no commas b/t key value pairs

let myUser: User2 = {
    _id: '1234',
    name: 'e',
    email: 'e@e.com',
    isActive: false
    //it's fine to not have cred card b/c it's optional. without the question mark, you'll get linting here for an incomplete type of user. 
}
//we can mix and match types into larger types. this example is not a good ex of how to do this, but it is an example to understand how to combine types

type cardNumber = {
    cardNum: string
}

type cardDate =  {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
    //don't actually do this. this is like hacking an addition to someone else's code
}

myUser.email = 'emk@e.com'
// myUser._id = '23442'
//this tells us that it's read only and you can't do that
export {}
//this is how you get it to the js file