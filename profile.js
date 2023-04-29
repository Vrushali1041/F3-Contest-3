// profile
if(localStorage.getItem("details") == null){
    alert(`you are not signed in. Please sign up to see the profile details`);
    window.location.href  = "index.html";
}

let fName = document.getElementById("fname-p");
let email = document.getElementById("email-p");
let password = document.getElementById("pass-p");
let logoutBtn  = document.getElementById("logout");


if(localStorage.getItem("details")){
   fName.innerText = "Full Name: " +  JSON.parse (localStorage.getItem("details")).fullname;
   email.innerText = "Email: " + JSON.parse (localStorage.getItem("details")).email;
   password.innerText = "Password: " + JSON.parse (localStorage.getItem("details")).password;

   logoutBtn.style.display = "block";

}



logoutBtn.addEventListener("click", ()=>{

   localStorage.removeItem("details");
    window.location.href  = "index.html";

});
