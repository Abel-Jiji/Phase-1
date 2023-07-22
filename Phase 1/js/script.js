let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    if (email === '') {
       alert('Email address cannot be empty.');
       return false;
    }

    const atposition = email.indexOf("@");
    const dotposition = email.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
       alert("Please enter a valid e-mail address \nInclude an '@' and a .(domain) in the email address");
       return false;
    }
 }

 function validatePassword() {
    const pass = document.getElementById('pass').value;
    const cpass = document.getElementById('cpass').value;
    if (pass !== cpass) {
        alert('Password does not match!!!');
    }
}

function validatePhoneNumber() {
    const phoneInput = document.getElementById('phone');
    const phoneNumber = phoneInput.value.trim();
    const phoneRegex = /^\d{10}$/; // Regular expression to match exactly 10 digits

    if (!phoneRegex.test(phoneNumber)) {
        phoneInput.setCustomValidity('Phone number must be 10 digits.');
    } else {
        phoneInput.setCustomValidity(''); // Reset the custom validation message if valid
    }
}