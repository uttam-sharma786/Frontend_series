function accessMessage(user){
    return user.isAdmin ? "Welcome Admin" :"Weclome user"
}


const user1 = {isAdmin:false}
const user2 = {isAdmin:false}

console.log(accessMessage(user1))
console.log(accessMessage(user2))

