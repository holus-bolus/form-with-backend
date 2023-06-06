document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById("myForm");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission

            // Collect form data
            let formData = new FormData(this);
            let formObject = {};
            formData.forEach(function(value, key) {
                formObject[key] = value;
            });

            // Send form data to the server
            fetch("http://localhost:3000/submit-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formObject)
            })
                .then(function(response) {
                    if (response.ok) {
                        // Form submission successful
                        alert("Form submitted successfully!");
                        // You can perform any additional actions here, such as redirecting to another page
                    } else {
                        // Form submission failed
                        alert("Form submission failed. Please try again.");
                    }
                })
                .catch(function(error) {
                    console.error("Error:", error);
                    alert("An error occurred. Please try again later.");
                });
        });
    }
});
