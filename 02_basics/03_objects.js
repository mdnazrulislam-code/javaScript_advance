// singleton
// Object.create


// objects literals


const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Md nazrul Islam",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "nazrul@openai.com"
// Object.freeze(JsUser)
JsUser.email = "nazrul@muicro.com"

// console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello JS User");
}

JsUser.greetingstwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}


console.log(JsUser.greetings());
console.log(JsUser.greetingstwo());