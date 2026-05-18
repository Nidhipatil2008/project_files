
function login() {
    alert("submit successful")

    //variables
    let firstName = "";
    let lastName = "";
    let userName = "";
    let email = "";
    let payment = "";
    let isCredit = false;
    let isDebit = false;
    let ispaypal = false;

    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    userName = document.getElementById("username").value;
    email = document.getElementById("email").Value;

    isCredit = document.getElementById("credit").checked;
    isDebit = document.getElementById("debit").checked;
    ispaypal = document.getElementById("paypal").checked;

    if (isCredit) {
        payment = "Credit card";
    }
    else if (isDebit) {
        payment = "Debit card";
    }
    else {
        payment = "paypal";
    }

    //output
    document.getElementById("d-first-name").innerHTML += firstName;
    alert(payment)
}