const userEmail = []


if (userEmail){
    console.log("Got User Email");
}else{
    console.log("Don't have user email");
}

/* Falsy Values
false, 0, -0, BigInt on, "", null, undefined, NaN
*/

// Truthy Values
 /*
"0", 'false' , " ", [], {}, function(){}

 */

// if (userEmail.length === 0){
//     console.log("Array is Empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length ===0){
    console.log("Empty Object");
}