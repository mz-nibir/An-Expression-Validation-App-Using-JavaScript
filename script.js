//define UI
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let postal = document.querySelector("#postal");

//define EventListener
email.addEventListener("click",(e) => {
    let email_re = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/ ;
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
    let phone_re = /^([01]|\+88)?\d{11}/;
    choice = prompt("Enter Your Phone Number: ");


let post = choice.match(phone_re);

    var text;
if(post){
    text = "Phone Number is Valid!";
    
}else{
    text = "Phone Number is not Valid!";
    
}

alert(text);

    e.preventDefault();


});


postal.addEventListener("click",(e) => {
    let post_re = /^[0-9]{4}$/;
    choice = prompt("Enter Your PostCode: ");


let post = choice.match(post_re);

    var text;
if(post){
    text = "Post Code is Valid!";
    
}else{
    text = "Post Code is not Valid!";
    
}

alert(text);

    e.preventDefault();


});


