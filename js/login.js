function validate(){
  var username=document.getElementById("username").value;
  var password=document.getElementById("password").value;
  if(username=="admin" && password=="user")
  {
    alert("login succesfully");
    window.open("smarthome.html")
    return false;
  }
  else{
    alert("Login failed");
  }
}
