// 'use strict'

// console.log("Hello world");
// var name = "Bhavye";
// name = "Jain"
// console.log(name)

// a = 45;  -> a not defined error

// let should be used
// let myName = "Bhavye Jain"
// myName = "Pandas"
// let myName = "Hello" -> error
// console.log(myName)

const PI = 3.14; // const for declaring constants

let myGender = "Male"
// console.log(myGender[0])
// console.log(myGender.length)
// console.log(myGender)
// myGender = myGender.trim()
// console.log(myGender.trim())
// console.log(myGender.toUpperCase())
// console.log(myGender.slice(1,3)) -> string slicing
// console.log(typeof(myGender))

let roll = 105;
// console.log(typeof roll)
// console.log(roll.toString()[0])

let myRoll = "34"
// console.log(Number(myRoll)%10)

// console.log(myGender.concat(myRoll))
// console.log(myGender+myRoll)

// console.log(`I am ${myGender} and my roll number is ${roll}`)

// console.log(typeof String) -> function

// let a = null
// console.log(typeof a) -> bug object returns, expected null

// console.log(Number.MAX_VALUE, Number.MAX_SAFE_INTEGER)

// let a = 45
// let b = "45"
// console.log(a===b) // also takes into type of variable -> false
// console.log(a==b) // true -> irrespective of type



// if (roll == 102){
//     console.log("Roll is equal to 102")
// }
// else if (roll > 102){
//     console.log("Roll greater than 102 boi")
// }
// else{
//     console.log("Not greater")
// }

// let drink = roll > 102 ? "Milk" : "Coffee"
// console.log(drink)



// if (roll>102 && myGender==="Male"){
//     console.log("You are eligible")
// }

// && -> and, || -> or

// while (roll>0){
//     console.log(roll)
//     --roll
// }

// for(let i=0; i<20; i+=2){
//     console.log(i)
// }
// break, continue


// Number, String, null, undefined, BigInt -> primtive types
//Arrays -> refernce type
// All reference type are objects

let planets = ["Mars", "Jupiter", "Earth", "Uranus", "Venus", "Saturn"]
let mix = [null, undefined, "Hello", 2]
// console.log(planets)
// console.log(planets[0][0]) -> M
// console.log(mix)
planets[0] = "Alpha Centurary"
// console.log(planets)
// console.log(Array.isArray(planets))

// console.log(planets)
// planets.pop()
// planets.push("Tarus")
// console.log(planets)

// planets.shift() // -> removes first element from start
// console.log(planets)
// planets.unshift("Highway")
// console.log(planets) // -> Adds in starting


// let planets2 = [].concat(planets)
// planets.push("Hey")
// console.log(planets2)

// let planets2 = [...planets] // spread operator
// console.log(planets2)


// for (let i=0; i<planets.length; i++){
//     console.log(planets[i])
// }
//use const for creating array


// for (const p of planets) {
//     console.log(p)
// }

// for (let index in planets){
//     console.log(planets[index])
// }

//Array destructuring
const arr = [10, 20, 30, 40]
const [a, b] = arr // extarct first two elements only
// console.log(a,b)
// const [p,,q] = arr

// const [p,q,...ans] = arr
// console.log(p,q,ans)

//object -> refernce type => key value pairs like dict in python

const employees = {
    "Bhavye": 150000,
    "Sam": 120000
}
// console.log(employees)
// console.log(employees["Bhavye"])
// console.log(employees[0]) -> undefined

employees["Sid"] = 110000
// console.log(employees)

// for (let key in employees){
//     console.log(employees[key])
// }

// console.log(Object.keys(employees)) -> returns array of keys of employees



// const k1 = "obj1"
// const k2 = "obj2"

// const val1 = "val1"
// const val2 = "val2"

// obj = {}
// obj[k1] = val1
// obj[k2] = val2

//OR

// obj = {
//     [k1] : val1,
//     [k2] : val2
// }

// console.log(obj)


//Object destructuring
// console.log(employees)

// const {Bhavye, Sam} = employees;
// console.log(Bhavye)


//functions

// function declaration
function getSum(a, b) {
    console.log(a + b)
    // return 1
}

function isEven(a) {
    return a % 2 == 0
}

//function expression
// const doWork = function(a){
//     console.log(`Hey I am : ${a}`)
// }


//arrow functions
const getName = () => {
    console.log("Hello I am Neo")
}

// doWork("Bhavye Jain")
// getSum(2,3)


const app = () => {
    console.log("Inside app function")
    function hey() {
        console.log("I am inside function")
    }
    hey()
}
// app()

const me = (name = "Bhavye") => {
    console.log(`You are : ${name}`)
}

const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        sum += Number(arr[i])
    }
    return sum;
}

let boysMarks = [10, 20, 30, 40, 50, 10, 20]
// console.log(typeof boysMarks[0])
const ans = sumArray(boysMarks)
// console.log(sumArray(boysMarks))

// callback func -> function inside function


const call = (callback) => {
    console.log("In call func")
    callback()
}
const myNew = () => {
    console.log("This is myNew funtion")
}
// call(myNew)


// boysMarks.forEach((element)=>{
//     console.log(element)
// })

// console.log(boysMarks.map((element) => {
//     return element * 2
// }))

// console.log(boysMarks.filter((Element)=>{
//     return Element>20
// }))

// const ans1 = boysMarks.reduce((acc, curValue) => {
//     return acc + curValue
// }, -10)
// console.log(ans1)


//iterables = on which "for of" loop works like arra, string, map
//array like objects -> having length property like string, array


// set
const num = new Set(boysMarks)
// console.log(num)

//Map -> key, value  => the typeof key can be anything in map but only string and symbol in object literal
const boysMarksMap = new Map()
boysMarksMap.set("Bhavye", 1000)
// console.log(boysMarksMap, boysMarksMap.get("Bhavye"))


//Object clonning
const emp = Object.assign({}, employees)
// console.log(emp)

// console.log(employees?.Neo?.age) -> ?. => if undefined stops there


//Method -> function inside object

function doWork() {
    console.log(`I am ${this.firstname} and I am ${this.age} years old`)
}


const person1 = {
    firstname: "Bhavye",
    age: 20,
    doing: doWork
}

const person2 = {
    firstname: "Sam",
    age: 19,
    doing: doWork
}

const person3 = {
    firstname: "Panda",
    age: 12
}

// this -> that object which is calling it in the function. gets it's function at runtime.

// this -> it's a window object

// console.log(person)
// person.doWork()
// console.log(person.firstname)

// person2.doing()


// call, apply bind
// person1.doing.call(person3) -> doing method binds to which object with call method.
// doWork.call(person3)


// arrow function takes 'this'

function about(){
    console.log(`I am ${this.name} and my age is : ${this.age}`)
}

function createUser(name, email, age){
    obj = {
        name : name,
        email : email,
        age : age,
        about : about
    }
    return obj
}
const u1 = createUser("Bhavye","bjain@gmail",20)
// u1.about()
const u2 = createUser("wilson","bjain@gmail",10)
// u2.about()



// const obj2 = Object.create(obj1) -> all methods/properties of obj1 are inherited in obj2 already.

const obj2 = Object.create(obj) // creates an empty object with obj properties and methods in [[PROTOPTYPE]]
// console.log(obj2)

// console.log(obj2.__proto__)

// JS functions -> function + object
// function gives empty object known as prototype
about.func = "This function prints about message about any object passed."
// console.log(about.prototype)
about.prototype.me = "Hey this is my function"


// new keyword
// creates empty Object, this = {}
// adds key value pair in empty object (this)
// return this

// function createEmployee(name, age){
//     this.firstname = name
//     this.age = age
// }

// const emp1 = new createEmployee("Bhavye",21)
// console.log(emp1)


//class
class createEmployee {
    constructor(firstname, email, age){
        this.firstname = firstname
        this.email = email
        this.age = age
    }
    about(){
        console.log(`My name is : ${this.firstname}`)
    }
}
// const emp1 = new createEmployee("Sam wilson","bhavye2003developer@gmail.com",12)


class Animal{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    eat(){
        console.log(`${this.name} is eating...`)
    }
}


class Dog extends Animal{
    //animal class constructor called if not present in dog.   
    constructor(name, age){
        super()
    }   
    me(){
        console.log("I am dog")
    }
    static yourName(){
        console.log("I am a Dog")
    }
    static gender = "male"
}