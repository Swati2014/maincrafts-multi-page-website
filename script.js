function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Name and Email must be filled out!");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}