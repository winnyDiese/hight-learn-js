console.log('Hello world')

// var
let num = 12
console.log(num)

const name = "Erick Mandala"
console.log(name)

// Object
const user = {
    name : "Maradona",
    age : "25"
}
console.log(user.name)

// Array
const colors = ["Blue", "Black"]
console.log(colors[1])



// condition
if(user.name == "Maradona") console.log('Hello MAster')


// Function
function Hello(name){
    if(name == "Maradona") console.log('Hello Dev')
    else if(name == "Suarez") console.log('What do you do here ?')
    else console.log("I don't now you !")

}

Hello('Kimbuta')

// Boucle
// For
for(let pas = 0; pas < 3; pas++){
    console.log(pas)
}

console.log('----------')
// Parcourir un objet
for(let i in user) console.log(user[i])