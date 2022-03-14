function validate(){
    const name = document.getElementById('fullname').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    if(name == "" || email == "" || password == ""){
        alert('Please insert your details!')
    }
    if (name.length == 0){
        alert('Please insert your name')
    }
    if (email.length <= 3){
        alert('Please insert a valid email address')
    }
    if (password.length <= 3 ){
        alert('Please pick a stronger password (more than 3 characters)')
    }

    if(name.length > 0 || email.length > 3 || password.length > 3){
        alert('You have successfully registered to codePro beta test!')
    }
}

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }