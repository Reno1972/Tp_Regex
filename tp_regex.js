// **** Regex Password ****
let number = /[0-9]/
let normChar = /[A-Za-z]/
let speChar = /[#?!@$%^&*-]/
let miniMaxi = /.{6,}/


// **** Regex Login ****
let mailLogin = /[a-z0-9.-]+@[a-z0-9.-]+.[a-z]{2,6}/;


// **** Lien HTML ****
let loginTest = document.querySelector(".login");
let buttonLog = document.querySelector(".buttonLog");
let erreurLog = document.querySelector(".erreurLogin")
let passwordTest = document.querySelector(".password");
let buttonPass = document.querySelector(".buttonPass");
let erreurTest = document.querySelector(".erreurPass");
let erreurNumber = document.querySelector(".errNumber");
let erreurSpec = document.querySelector(".errSpec");
let erreurMinMax = document.querySelector(".errMinMax");

// **** Test login ****
function testLogin(varToTest){
    if(mailLogin.test(varToTest)){
        return "Login valide";
    } else {
        return "Login non valide";
    }
  }
buttonLog.addEventListener("click", function(){
    let text = loginTest.value;
    erreurLog.textContent = testLogin(text);
})

// **** Test Password ****
function testPass(varForTest){
    if(number.test(varForTest)){
        erreurNumber.textContent = ""
    }if(speChar.test(varForTest)){
        erreurSpec.textContent = ""
    }if(miniMaxi.test(varForTest)){
        erreurMinMax.textContent = ""
    }
}
buttonPass.addEventListener("click", function(){
    let text = passwordTest.value;
    erreurTest.textContent = testPass(text);;
})



