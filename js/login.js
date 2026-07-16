const loginForm=document.getElementById("loginForm");

loginForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const email=document.getElementById("loginEmail").value;

    const password=document.getElementById("loginPassword").value;

    const user=JSON.parse(localStorage.getItem("user"));

    if(user && email===user.email && password===user.password){

        alert("Login Successful!");

        window.location.href="index.html";

    }else{

        alert("Invalid Email or Password");

    }

});