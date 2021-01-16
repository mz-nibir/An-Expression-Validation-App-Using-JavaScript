//define UI
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let postal = document.querySelector("#postal");

//define EventListener
email.addEventListener("click",(e) => {
    let email_re = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/ ;
    choice = prompt("Enter Your Email: ");


let post = choice.match(email_re);

    var text;
if(post){
    text = "Email is Valid!";
    
}else{
    text = "Email is not Valid!";
    
}

alert(text);

    e.preventDefault();


});

phone.addEventListener("click",(e) => {
    console.log("phone click");


});


postal.addEventListener("click",(e) => {
    console.log("postal click");


});


