"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = 'Hi eamonn';
//wont' compile into js if there are type errors
greetings = greetings.toLowerCase();
console.log(greetings);
//number
var userId = 334455;
//unclear if you have to do it here. behavior looks the same
//it won't compile code that would work in js, even without declaring the type. i.e. inferred type number, can't reassign as string, even tho you could in js. since you could in js, it won't compile it. it stops you. so why do we need that syntax? apparently it's not best practice "too obvious...?" you can avoid declaring a type in some cases. in fact, it can infer number, boolean, and maybe all primitives? TS will know it's type and not compile if you try to change type
console.log(userId);
//boolean
var isLoggedIn = false;
//how to use and not use any
var hero;
//this will have type any
function getHero(hero) {
    return 'thor';
    //type any will allow anything here, which may mess things up. you will not get an error. i turned on noImplicitAny but it doesn't show any linting here, even tho hero is implicitly any.
}
getHero(hero);
//so any basically just means "don't use type checking"
//you can use a compiler flag "noImplicityAny"
console.log(getHero(hero));
