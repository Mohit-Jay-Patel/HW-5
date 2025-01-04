var name_input = prompt("Enter Username here : ");
var pass_input = prompt("Enter Password here : ");

var username = "Mohit";
var password = "1234";

if(name_input === username){
    if(pass_input === password){
        document.getElementById("output").innerHTML = "Authentication successful";
    }
    else{
        document.getElementById("output").innerHTML = "Invalid Password";
    }    
}
else{
    document.getElementById("output").innerHTML = "Invalid Username";
}