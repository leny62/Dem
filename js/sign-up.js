function signUpUser(){

    console.log('========');
    
    var nameDocument = document.getElementById(`name`);
    var emailDocument = document.getElementById(`email`);
    var passwordDocument = document.getElementById(`password`);
    var secondPassword = document.getElementById(`password2`);
    var button = document.getElementById(`button`);
    var reqEx = /\S+@\S+\.\S+/;

    if(nameDocument.value !== "" && reqEx.test(emailDocument.value)  && passwordDocument.value == secondPassword.value && passwordDocument.value !== ""){
        button.disabled = false;
    }
   

}