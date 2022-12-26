let users : object[]

users = [
    {
        userName : 'Omar',
        age : 21,
        cell : "01970299035"
    },
    {
        userName : 'Mamun',
        age : 22,
        cell : "01970299035"
    },
    {
        userName : 'Tanveer',
        age : 23,
        cell : "01970299035"
    },
]

let userOne : {userName : string; age : number; cell : string; phone?: boolean}
userOne = {userName : "Shawn", age : 23, cell : "01970299035"}

users.push(userOne)

console.log(users)