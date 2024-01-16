const ValidationForm = document.getElementById("Validation");
const errorDiv = document.getElementById("error");

ValidationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;

    if (!name || !email || !age || !gender ) {
        errorDiv.textContent = "All fields are required!";
    } else {
        errorDiv.textContent = ""; 
        alert(`Name: ${name}\nEmail: ${email}\nAge: ${age}\nGender: ${gender}`);
        ValidationForm.reset();
    }
});