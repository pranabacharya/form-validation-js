document.querySelector("#button").addEventListener('click', (e) => {
    const nameElem = document.querySelector("#name");
    const emailElem = document.querySelector("#email");
    const numberElem = document.querySelector("#number");
    const genderElem = document.querySelector('input[name="gender"]:checked');
    const favColorElem = document.querySelector("#favColor");
    const outputElem = document.querySelector("#output");

    const nameErr = document.querySelector("#nameErr");
    const emailErr = document.querySelector("#emailErr");
    const numberErr = document.querySelector("#numberErr");
    const genderErr = document.querySelector("#genderErr");
    const favColorErr = document.querySelector("#favColorErr");
    let name, email, number, gender, favColor;
    const nameRegEx = /^[A-Za-z ]+$/;
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const numberRegEx = /^\d{10}$/;

    //Name validation
    if (nameElem.value === '') {
        printToPage(nameErr, " *Name is required!!");
    } else if (!nameElem.value.match(nameRegEx)) {
        printToPage(nameErr, " *Only letters are allowed");
    } else {
        name = nameElem.value;
        printToPage(nameErr, "");
    }
    //Email validation
    if (emailElem.value === '') {
        printToPage(emailErr, " *Email is required!!");
    } else if (!emailElem.value.match(emailRegEx)) {
        printToPage(emailErr, " *Wrong email format!! Ex-<i>yourname@email.com</i>");
    } else {
        email = emailElem.value;
        printToPage(emailErr, "");
    }
    //Number Validation
    if (numberElem.value === '') {
        printToPage(numberErr, " *Mobile number is required!!");
    } else if (!numberElem.value.match(numberRegEx)) {
        printToPage(numberErr, " *Enter 10 digit mobile number");
    } else {
        number = numberElem.value;
        printToPage(numberErr, "");
    }
    //Gender Validation 
    if (genderElem != null) {
        gender = genderElem.value;
        printToPage(genderErr, "");
    } else {
        printToPage(genderErr, " *Gender selection is required!!");
    }
    //Favourite Color Validation
    if (favColorElem.value === '') {
        printToPage(favColorErr, " *Favourite color is required!!")
    } else if (!favColorElem.value.match(nameRegEx)) {
        printToPage(favColorErr, " *Only letters are allowed");
    } else {
        favColor = favColorElem.value;
        printToPage(favColorErr, "");
    }

    //Checking if the values are set or not
    if (name !== undefined && email !== undefined && number !== undefined && gender !== undefined && favColor !== undefined) {
        outputElem.style.display = 'block';
        outputElem.value = "Name: " + name + ", Email: " + email + ", Mobile Number: " + number
            + ", Gender: " + gender + ", Favourite Color: " + favColor;
        showAlert('msg-area-show', "Your data saved sucessfully", "green");
    } else {
        showAlert('msg-area-show', "Please provide appropriate input values", "red");
    }
})
//Helper function for printing err msg
const printToPage = (elem, msg) => {
    elem.innerHTML = msg;
}
//Alert window generate
const showAlert = (classNameForShowing, msg, color) => {
    removeAlert();
    let alertDiv = document.createElement('div');
    alertDiv.style.backgroundColor = color;
    alertDiv.className = "alert "+classNameForShowing;
    alertDiv.innerText = msg;
    document.querySelector("fieldset").insertAdjacentElement("afterbegin", alertDiv);
    setTimeout(removeAlert, 4000);
}
const removeAlert = () => {
    if(document.querySelector(".alert")){
        document.querySelector(".alert").remove();
    }
}