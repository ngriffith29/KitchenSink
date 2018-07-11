let name = prompt("What is your name")
const states = 50
let nine = 5 + 4
//This if statement determines the charcode in the string at the
//index of 0. If the code at that index matches the number 
//of the letter we are looking for it then will run the first code block
//if it doesnt it will run the second code block
if (name.charCodeAt(0) === 108 || name.charCodeAt(0) === 76) {
    alert('sorry back of the line')
} else { alert('Next') }
function sayHello() {
    alert("Hello World")
}
sayHello()
function checkAge(name, age) {
    if (age < 21) {
        console.log(`Sorry ${name} you aren't old enough to view this page!`)
    }
}
checkAge("Charles", 21)
checkAge("Abby", 27)
checkAge("James", 18)
checkAge("John", 17)
let veggies = ['Onion', 'Tomato', 'Lettuce', 'Raddish', 'Broccali']
for (let index = 0; index < veggies.length; index++) {
    console.log(veggies[index])
}
let ao = [{
    name: "Jenna",
    age: 22
}, {
    name: "Nathan",
    age: 23
}, {
    name: "Ethan",
    age: 20
}, {
    name: 'Morgan',
    age: 19
}, {
    name: 'Katlyn',
    age: 18
}]
ao.forEach(function (ao) {
    checkAge(ao.name, ao.age)
});
let getLength = function (string) {
    return string.length
}
let hello = getLength('hello World')

if (hello % 2 === 0) {
    console.log('The world is nice and even')
} else {
    console.log('The world is an odd place')
}