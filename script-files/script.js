const firstName = document.getElementById('fname');
const middleName = document.getElementById('mname');
const lastName = document.getElementById('lname');
const displayName = document.getElementById('displayname');
const gender = document.getElementById('gender');
const dateOfBirth = document.getElementById('dob');
const martialStatus = document.getElementById('martial-status');
const bloodGroup = document.getElementById('blood-group');
const detailsButton = document.getElementById('detailsButton');
const profileForm = document.getElementById('profileform');


let ValidateFirstName = () => {
    if (!firstName.value) {
        firstName.style.borderBlockColor = 'red';
        displayName.value = "";
        return false;
    }
    else {
        firstName.style.borderBlockColor = 'black';
        return true;
    }
};

let ValidateLastName = () => {
    if (!lastName.value) {
        lastName.style.borderBlockColor = 'red';
        displayName.value = "";   
        return false;
    }
    else {
        lastName.style.borderBlockColor = 'black'; 
        if (middleName.value) {
            displayName.value = firstName.value + " " + middleName.value + " " + lastName.value;             
        }
        else {
            displayName.value = firstName.value + " " + lastName.value;
        }
        return true;
    }
};

let ValidateGender = () => {
    if (!gender.value) {
        gender.style.borderBlockColor = 'red';
        return false;
    }
    else {
        gender.style.borderBlockColor = 'black';
        return true;
    }
};

let ValidateDateOfBirth = () => {
    if (!dateOfBirth.value) {
        dateOfBirth.style.borderBlockColor = 'red';
        return false;
    }
    else {
        dateOfBirth.style.borderBlockColor = 'black';
        return true;
    }
};

firstName.addEventListener('blur', () => {
    ValidateFirstName();
});

lastName.addEventListener('blur', () => {
    ValidateLastName();
});

gender.addEventListener('blur', () => {
    ValidateGender();
});

dateOfBirth.addEventListener('blur', () => {
    ValidateDateOfBirth();
});

profileForm.addEventListener('submit', () => {
    if (ValidateFirstName() && ValidateLastName() && ValidateGender() && ValidateDateOfBirth()) {
        window.open("../html-files/index-two.html");
    }
    else {
        // alert("Please Enter All The Details");
        // window.location.reload();
        window.open("../html-files/index-two.html");
    }
});







