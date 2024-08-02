function validate() {
   var unp =  /^[A-Za-z]+$/

   var un =document.getElementById("uname").value
   var php=/^[6-9]{1}[0-9]{9}$/
   var ph=document.getElementById("phone").value

   if(un =="") {
    document.getElementById("msg").innerHTML="username cannot be empty"
    return false
   }
   if(un.match(unp)) 
     true
   else
   {
    document.getElementById("msg").innerHTML="username should contain only alphabets"
    return false
   }
   if(un.length<3) {
    document.getElementById("msg").innerHTML="username should contain atleast 3 characters"
    return false
   }
   if(un.length>8) {
    document.getElementById("msg").innerHTML="username should contain atmost 8 characters"
    return false
   }

   if(ph=="") {
    document.getElementById("msg1").innerHTML="phone number cannot be empty"
    return false
}

if(!ph.match(php)) {
    document.getElementById("msg1").innerHTML="invalid phone number"
    return false

}
}