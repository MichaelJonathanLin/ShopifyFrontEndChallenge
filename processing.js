function getFormData(){
  $("#form").submit(function(event) {
      // Stop the browser from submitting the form.
      event.preventDefault();
  });


  var email = document.getElementById("inputEmail").value;
  var interest = document.getElementById("inputInterest").value;
if (email=="" || interest =="Interested in..."){
    document.getElementById("errormsg").innerHTML ="Please enter or pick a value before submitting.";
}
else{
  document.getElementById("sub").innerHTML = "Submitting";
  setTimeout(function(){
    document.getElementById("form-success").innerHTML ="";
    document.getElementById("thanks").innerHTML ="Thanks for subscribing";
    document.getElementById("thanksmsg").innerHTML ="You'll start receiving free tips and resources soon.";
    console.log (email);
    console.log (interest);

  },2000);
}





}
