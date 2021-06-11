let username = "ronsh11111111"
let fullname = "m"
let miniumLength = 9

console.log(username.length);

let message

if (username.length < miniumLength) {
    message = ("That username is too short!")
}else if(fullname === "") {
        message = ("Please give a name")
}else { message = ("Username accepted")}

alert(message)