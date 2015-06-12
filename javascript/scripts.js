

	function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    
     }   
    }


function myFunction() {
    var Blah = document.getElementById("Zipcode");
    if (Blah.checkValidity() == false) {
        document.getElementById("Zip").innerHTML = Blah.validationMessage;
    } else {
        document.getElementById("Zip").innerHTML = "Input OK";
    } 
} 