/* Alert message if you input incorrect in each box */

function validate()
{
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var errormsg = document.getElementById("errormsg");
  
 errormsg.style.padding = "10px";
  
  var text;


  if(name.length < 5)
  {
    text = "Please Enter valid Name";
    errormsg.innerHTML = text;
    return false;
  }

  if(subject.length < 10)
  {
    text = "Please Enter Correct Subject";
    errormsg.innerHTML = text;
    return false;
  }

  /* isNaN means It is Not a Number */

  if(isNaN(phone) || phone.length != 10)
  {
    text = "Please Enter valid Phone Number";
    errormsg.innerHTML = text;
    return false;
  }

  if(email.indexOf("@") == -1 || email.length < 6)
  {
    text = "Please Enter valid Email";
    errormsg.innerHTML = text;
    return false;
  }

  if(message.length <= 140)
  {
    text = "Please Enter More Than 140 Characters";
    errormsg.innerHTML = text;
    return false;
  }
  
  alert("Form Submitted Successfully!");
  return true;
}