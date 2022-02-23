const login = document.querySelector("#login");
const password = document.querySelector("#password");
const resultatPassword = document.querySelector("#resultatPassword");

login.addEventListener("keyup", (e)=>{
    var regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/i
    console.log(e)
    if(!regex.test(login.value)){
        login.className="red";
    }
    else{
        login.className="green";
    }
});

password.addEventListener("blur",()=>{
    var carChiffre = /\d/;
    var caracSpeciaux = /[$&@!]/;
    var error = "";
    if(password.value.length < 6){
        error += "<li>trop court</li>";
    }
    
    if(!password.value.match(carChiffre)){
        console.log(password.value.match(carChiffre))
        error += "<li> doit contenir un chiffre</li>";
    }
    if(!password.value.match(caracSpeciaux)){
        error+="<li> doit contenir un caractère spécial $,&,@ ou ! </li>"
    }

    if(error !==""){
        resultatPassword.innerHTML = "Le password est : <ul>"+error+"</ul>";
        resultatPassword.style.border = "2px solid red";
    }
    else{
        resultatPassword.innerHTML = "Le pasword est valide";
        resultatPassword.style.border = "2px solid green"
    }
});