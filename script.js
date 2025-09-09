let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form")
form.addEventListener("submit",function(dets){
dets.preventDefault();

document.querySelector("email-error").textContent = "";
document.querySelector("password-error").textContent = "";

const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let emailans = emailregex.test(email.value);
let passwordans = passwordregex.test(password.value);


if(!emailans){
    document.querySelector(".email-error").textContent = "email is in corret";
    document.querySelector(".email-error").style.display = "initial" ;
}
if(!passwordans){
    document.querySelector(".password-error").textContent = "password is in correct";
    document.querySelector(".password-error").style.display = "initial" ;
}


})
