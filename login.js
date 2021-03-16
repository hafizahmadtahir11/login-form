$(function()
{

    $("#login").click(handleFormSubmit);
});

function handleFormSubmit()
{
	var name=$("#name").val();
	var Password=$("#password").val();
	var ConfirmPass=$("#confirm_password").val();
	if(name.length<5){
		

     alert(" Name must be atleat 5 characters ");
   
         $("#name").addClass("error");
  }
      if(Password.length<=8)

    {
    	
        alert("Password Length must be atleat 8 characters");
         $("#password").addClass("error");
    }
   
       if(Password!=ConfirmPass){
	 
       alert("Password does not match with confirm Passowrd Plese try again!!")
       $("#confirm_password").addClass("error");
    }

       if (name.length>=5 && Password.length>=8&& Password==ConfirmPass) {

	alert("Form is being submitted");

  e.preventDefault();
}
}