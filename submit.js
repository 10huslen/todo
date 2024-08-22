const email = document.getElementById("email");
email.className = "email";
const PhoneNumber = document.getElementById("PhoneNumber");
PhoneNumber.className = "PhoneNumber";
const Password = document.getElementById("Password");
Password.className = "Password";
const submit = document.getElementById("submit");
const body = document.getElementsByTagName("body")[0];
let ko = 0;
submit.addEventListener('click', function() {
    if(email.value, PhoneNumber.value, Password.value === "") {
        alert("doorh husnegtiig boglono uu!")
    } else {
 const emailValue = email.value; 
  if(emailValue.includes('@') === false) {
 alert("@ bhgu bna");
   } else {
  alert("good");
  ko += 1;
  console.log(ko);
  };

for(let i = 0; i < PhoneNumber.value.length; i++) {
if(PhoneNumber.value.length === 8) {
    alert("good");
    ko += 1;
    console.log(ko);
    break;
} else {
    alert("utasnii dugaar 8 orontoi bh ystoi.");
    break;
}
};
 
    for(let j = 0; j < Password.value.length; j++) {
        if(Password.value.length === 8) {
            alert("good");
            ko += 1;
            console.log(ko);
            break;
        } else {
            alert("nuuts ug 8 orontoi bh ystoi");
            break;
        };
    }
    if(ko == 3){
    window.location.href = "todo.html";
    }
}
})
