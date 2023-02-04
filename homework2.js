//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favoriteFood(data){
    let keys = Object.keys(data)
    
    for(let i=0; i < keys.length; i += 1){
        console.log(keys[i], data[keys[i]])
    }
    
}
favoriteFood(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
/*
// Version 1: Error, says person is not a constructor
const Person = {
    name: "default", 
    age: 0,
    constructor: (name, age)=>{
        this.name=name;
        this.age=age;
    },
    printInfo: ()=>{
        console.log('name:', this.name, "age:", this.age )
    },
    incrementAge: (amt)=>{
        this.age +=amt;
    }

}

let sam = new Person('Sam', 30);
let dan = new Person('Dan', 31);
*/

/*
// Version 2: any "this" variables are all undefined in the arrow methods
// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Use an arrow to create the printInfo method
Person.prototype.printInfo = ()=>{
    console.log('name:', this.name, "age:", this.age)
}

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
Person.prototype.addAge = (amt)=>{
    this.age +=amt;
}

// create 2 people, print info, then add 3 to age
let sam = new Person('Sam', 30);
let dan = new Person('Dan', 31);

sam.printInfo()
dan.printInfo()
*/

// Version 3: using a class, might not follow directions closely enough
class Person { 
    constructor(name, age) { 
        this.name = name;
        this.age = age;
    } 
    
    addAge = (amt) => {
        this.age += amt
    } 
    
    printInfo = () => {
        console.log("Name:", this.name, "Age:", this.age);
    }
}

let tom = new Person("Tom", 25);
let mary = new Person("Mary", 22)

tom.printInfo()
mary.printInfo()

tom.addAge(3)
tom.printInfo();
// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const checkString = (string)=>{

    return new Promise((resolve, reject)=>{
        if (string.length>10){
            resolve("Big word")
        }
        else{

            resolve("Small Number")

        }
    }) 
}

checkString("abc")
    .then((result)=>{
        console.log(result)
    })

checkString("abcdefghijklmnopqrstuvwxyz")
    .then((result)=>{
        console.log(result)
    })
//  from Codewar:

var countSheep = function (num){
    let string = ``
    for (let y = 1; y <= num; y = y +1){
      string = string + y + ` sheep...`
    }
    return string 
  }


  function divisibleBy(numbers, divisor){
    let arr = []
     for (let i = 0; i < numbers.length; i +=1){
       if (numbers[i] % divisor == 0){
         arr.push(numbers[i])
       }
     }
     return arr
   }

//    Write a function to split a string and convert it into an array of words.
   function stringToArray(string){

	return string.split(" ")

}
