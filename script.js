document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Validation
    if(name === "" || email === "" || message === ""){
        alert("All fields are required!");
        return;
    }

    // Get existing data from LocalStorage
    let submissions = JSON.parse(localStorage.getItem("contacts")) || [];

    // Add new submission
    submissions.push({
        name: name,
        email: email,
        message: message
    });

    // Save back to LocalStorage
    localStorage.setItem("contacts", JSON.stringify(submissions));

    alert("Form submitted successfully!");

    // Clear form
    document.getElementById("contactForm").reset();

});