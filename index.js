
console.log("Hey! Yo")

// Variable
let num = 12
console.log("My var is :" + num)
console.log("Type of my var is :" + typeof num)

// Constant
const name = "Maradona"
console.log("My name is "+name)

// Object
const user = {
    name : "Maradona",
    age : 25
}
console.log(user)
console.log(user["age"])
console.log(user.name)

// Array
const colors = ["Blue", "Red", "Yellow"]
console.log(colors)
console.log(colors[0])





// Condition
// Implicite
if(user.name)
    console.log("Name exist")


// Explicite
// if(user.age < 18){}



// if(){}
// else{}


// if(){}
// else if{}
// else{}



// Function
function orange(){
    console.log("Suis un orange !")
}
orange()


function OrangParam(name){
    console.log('-------------')
    console.log('Suis '+name)
}
OrangParam("Maradona")



function add(a,b){
    return a + b
}
let result = add(5,2)
console.log(result)

