let userName: string
let fullName: string
let firstName: string
let lastName: string
let age: number
let meal: boolean
// let  void
firstName = "Omar"
lastName = "Faruk"
fullName = "Omar Faruk" 

age = 21
meal = true
userName = firstName.concat(' ').concat(lastName)

let l = fullName.split(' ')
let output = {userName, age, meal, l}

console.log(output)
         