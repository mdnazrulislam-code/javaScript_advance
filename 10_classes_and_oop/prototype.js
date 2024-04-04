// let myName = "hitesh     "
// let myChannel = "chai       "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower ={
    thor: "hammar",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.trueLength = function(data){
    return data.trim().length
}

Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// Inheritance
const User ={
    name: "Chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport ={
    isAvailable : false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode            "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()

"hitesh".trueLength()
"iceTea".trueLength()