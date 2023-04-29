if(localStorage.getItem("details")){
    let name = JSON.parse(localStorage.getItem("detail")).fullname;
    alert(`${name} you are already signed in`);
    window.location.href  ="profile.html";
  }
  


let signupBtn = document.getElementById("sign-up");
let nameInp = document.getElementById("fname");
let emailInp = document.getElementById("email");
let passInp = document.getElementById("pass");
let cpInp = document.getElementById("c-pass");
let statusMsg = document.getElementById("message");


document.querySelector("form").addEventListener("submit", (event) =>{
    event.preventDefault();


    // if any field is empty then show the error mass
    if(nameInp.value == "" || emailInp.value == "" || passInp.value == "" || cpInp.value == ""){
        statusMsg.innerText = "Error : All the fields are mandatory";
        statusMsg.style.color = "#b90202";
        statusMsg.style.display = "block";
        return;
      }


    //   if pass are not same then show the error mass
    if(passInp.value != cpInp.value){
        statusMsg.innerText  = "Password not matching";
        statusMsg.style.color = "#b90202";
        statusMsg.style.display = "block";
        return;
       }

       let details = {
        fullname: nameInp.value,
        email: emailInp.value,
        password: passInp.value,
        token: generatetoken()
       }
    

       statusMsg.innerText  = "Successfully Signed Up!";
       statusMsg.style.color = "#036e03";
       statusMsg.style.display = "block";
       localStorage.setItem("details", JSON.stringify(details));
    
       setTimeout(()=>{
        window.location.href  ="profile.html";
       },1000);
});

function generatetoken(){
    let str = "";
    for(let i=0; i<16; i++){
        str +=   String.fromCharCode  (Math.floor(Math.random() * 89) + 33); 
    }
  
    return str;
}


