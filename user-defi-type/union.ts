let userId : number | string

userId = 123
userId = "123"

function userInformation(userId: number | string) {
    console.log(userId)
}

userInformation('user')
userInformation(1234)

console.log(userId)