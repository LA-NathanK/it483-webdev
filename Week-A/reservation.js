function natesFunction() {
	var text;
	
	// Set check
	// This is to show all invalid submissions for reutrn false;
	var mainCheck = 0;

	// Set validation variables
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	var name = document.getElementById("name").value.trim();
	var date = document.getElementById("arrival_date").value.trim();
	var email = document.getElementById("email").value.trim();
	var nights = document.getElementById("nights").value.trim();
	var phone = document.getElementById("phone").value.trim();
	var datePattern = /\b[0-9/]{10}\b/;
	var nightsPattern = /\b[0-9/]{1,10}\b/;
	var phonePattern = /\b[0-9-]{12}\b/;
  
	// Pass Requirements

	// Date Check
	if (date == "" ) {
		text = "Please enter a Date";
		document.getElementById("datecheck").innerHTML = text;
		var mainCheck = 1;
	}
	if ( !datePattern.test(date) ) {
		text = "Please enter a valid Date";
		document.getElementById("datecheck").innerHTML = text;
		var mainCheck = 1;
	}

	// Night Check
	if ( !nightsPattern.test(nights) ) {
		text = "Please enter a numerical value";
		document.getElementById("nightscheck").innerHTML = text;
		var mainCheck = 1;
	}

	//

	// Name Check
	if (name == "" ) {
	  text = "Please enter a Name";
	  document.getElementById("namecheck").innerHTML = text;
	  var mainCheck = 1;
	} 
	// Email Check
	if (email == "") {
		text = "Please enter an Email";
		document.getElementById("emailcheck").innerHTML = text;
		var mainCheck = 1;
	}
	if ( !emailPattern.test(email) ) {
		text = "This is not a valid Email Address"
		document.getElementById("emailcheck").innerHTML = text;
		var mainCheck = 1;
	}

	// Phone Number Check
	if ( !phonePattern.test(phone) ) {
		text = "This is not a valid Phone Number"
		document.getElementById("phonecheck").innerHTML = text;
		var mainCheck = 1;
	}

	if (mainCheck != 0) {
		return false;
	}
	
  }
