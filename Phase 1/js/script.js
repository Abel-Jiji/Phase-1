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

// City data for each state
const cityData = {
    delhi: [
        { name: '--Choose an option--', value: '' },
        { name: 'Agra', value: 'agra' },
        { name: 'Jaipur', value: 'jaipur' },
        // Add other city options for Delhi
    ],
    rajasthan: [
        { name: '--Choose an option--', value: '' },
        { name: 'Udaipur', value: 'udaipur' },
        { name: 'Jodhpur', value: 'jodhpur' },
        // Add other city options for Rajasthan
    ],
    goa: [
        { name: '--Choose an option--', value: '' },
        { name: 'Panaji', value: 'panaji' },
        { name: 'Margao', value: 'margao' },
        // Add other city options for Goa
    ],
    karnataka: [
        { name: '--Choose an option--', value: '' },
        { name: 'Bangaluru', value: 'bangaluru' },
        { name: 'Mysuru', value: 'mysuru' },
        // Add other city options for Karnataka
    ],
    tamilnadu: [
        { name: '--Choose an option--', value: '' },
        { name: 'Coimbatore', value: 'coimbatore' },
        { name: 'Madurai', value: 'madurai' },
        // Add other city options for Tamil Nadu
    ],
    kerala: [
        { name: '--Choose an option--', value: '' },
        { name: 'Kochi', value: 'kochi' },
        { name: 'Thiruvanathapuram', value: 'thiruvanathapuram' },
        // Add other city options for Kerala
    ],
};

function updateCities() {
    const stateInput = document.getElementById('state');
    const cityInput = document.getElementById('city');
    const selectedState = stateInput.value;

    // Clear the current options in the City dropdown
    cityInput.innerHTML = '';

    // Create new options based on the selected State
    if (selectedState !== 'opt' && cityData[selectedState]) {
        cityData[selectedState].forEach(city => {
            const option = new Option(city.name, city.value);
            cityInput.appendChild(option);
        });
    } else {
        // If no state is selected or if the selected state has no cities yet
        const defaultOption = new Option('--Choose a state first--', 'opt');
        cityInput.appendChild(defaultOption);
    }
}
