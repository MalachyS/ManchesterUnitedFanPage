
var loginStatus = document.getElementById('login');
loginStatus.addEventListener("submit", login);

event.preventDefault();

function login() 
{
    var email = document.getElementById('emailAddressID').value;
    var password= document.getElementById('passwordID').value;
    if (email=="JDoe@gmail.com" && password=="P@ssword132")  {   
        localStorage.setItem('loggedIn',1);    
        window.location.href = "shop.html"; 
    }
    else {
        localStorage.setItem('loggedIn',0);
        var element = document.getElementById("loginerror");
        element.classList.remove("d-none");
    }
    event.preventDefault();
}

    // if user is logged in them log them out and redirect to home page
    var loggedin=localStorage.getItem('loggedIn'); 
    if (loggedin==1) {
        localStorage.setItem('loggedIn',0);
        window.location.href = "index.html";
    } else {
        window.location.href = "login.html";
    }

// check if user is logged in or logged out..
checkLoginStatus()

function checkLoginStatus() {
    
    var loggedin=localStorage.getItem('loggedIn'); 
    var element = document.getElementById("userdetails");
    if (loggedin==1) {
        // change the text from Login to Logout
        document.querySelector('#loginlogout').innerHTML="Logout";
        element.classList.remove("d-none");        
        element.classList.add("d-show");      
    } else{
        // use add to hide the display of User Details
        element.classList.add("d-none");        
        element.classList.remove("d-show");
        document.querySelector('#loginlogout').innerHTML="Login"; 
        element = document.getElementById("loginlogout");
        element.setAttribute("href", "login.html");
    } 

}