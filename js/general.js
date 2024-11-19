
/*

	This page contains generic JavaScript functions and variables used on mutiple pages

*/

// Display the cookie settings bar
function showCookieSettings(){
	document.getElementById("cookieBar").style.display = "flex";
}

// Close the cookie settings bar
function closeBar() {
	document.getElementById("cookieBar").style.display = "none";
}

// Enable cookies. As the cookies in this page will not be implemented in this class, this function simply closes the bar
function enableCookies() {
	closeBar();
}

// Disable cookies. As the cookies in this page will not be implemented in this class, this function simply closes the bar
function disableCookies() {
	closeBar();
}

