
function sayMyName(){
    console.log("Nazrul");
}



// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}




const result = addTwoNumbers(3 , 5)

// console.log("Result: ", result);

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please Enter a User Name");
        return
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage("Nazrul"));

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,600,800,100));

const user = {
    username : "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     price:399
// })


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));