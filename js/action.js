
// HOME PAGE //

function plusProductQuantity() {
	var quantity = document.getElementById("quantity").value;
	quantity++;
	document.getElementById("quantity").setAttribute('value', quantity);
}

function minusProductQuantity() {
	var quantity = document.getElementById("quantity").value;
	quantity--;
	if (quantity > 0) {
		document.getElementById("quantity").setAttribute('value', quantity);
	}
}

// LOGIN PAGE //

function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username == "Administrator" || username == "administrator" && password == "@abcd1234@") {
		alert("Sign in successful. You can shopping online now!");
		window.location = "./product.html";
	} else {
		document.getElementById("errorMessage").innerHTML = "Username or password are incorrect!"
	}
}

// SIGN UP Page //

function checkUsername() {
	var username = document.getElementById("username").value;
	if (username === "admin" || username === "Admin" || username === "administrator" || username === "Administrator") {
		document.getElementById("errorMessage").innerHTML = "Username already exists!";
	} else {
		document.getElementById("errorMessage").innerHTML = " " ;
	}
}

function checkEmail() {
	var email = document.getElementById("email").value;
	if (!email.includes("@")) {
		document.getElementById("errorMessage").innerHTML = "Email have to contain '@' character!";
	} else if (!email.includes(".") || email.lastIndexOf(".") <= (email.lastIndexOf("@") + 1)) {
		document.getElementById("errorMessage").innerHTML = "Email have to contain '.' after '@' !";
	} else if (email.lastIndexOf(".") == email.length) {
		document.getElementById("errorMessage").innerHTML = "Character '.' cannot at the last email!" ;
	} else {
		document.getElementById("errorMessage").innerHTML = " " ;
	}
}

function checkPassword() {
	var password = document.getElementById("password").value;
	if (password.length <= 8) {
		document.getElementById("errorMessage").innerHTML = "Password have to more than or equal 8 character!";
	} else {
		document.getElementById("errorMessage").innerHTML = " " ;
	}
}

function checkRePassword() {
	var password = document.getElementById("password").value;
	var repassword = document.getElementById("re-password").value;
	if (password !== repassword) {
		document.getElementById("errorMessage").innerHTML = "Re-password are incorrect!";
	} else {
		document.getElementById("errorMessage").innerHTML = " " ;
	}
}

function signup() {
	alert("Sign up successful. You can shopping online now!");
	window.location = "product.html";
}


// PAGE PRODUCTS //
var n = 0;

function onpenCart() {
	if (n == 0) {
		document.getElementById("modalCart").style.display = "block";
		n++;
	} else {
		document.getElementById("modalCart").style.display = "none";
		n--;
	}
}