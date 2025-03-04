document.querySelector("form").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = {
        name: document.querySelector("input[name='name']").value,
        email: document.querySelector("input[name='email']").value,
        description: document.querySelector("textarea[name='description']").value
    };

    const response = await fetch(this.action, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData) // Convert form data to JSON
    });

    if (response.ok) {
        alert("Message sent successfully!");
        this.reset(); // Clear form after submission
    } else {
        alert("Error sending message. Please try again.");
    }
});



async function submitForm(event) {
    event.preventDefault(); // Prevent page refresh

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const description = document.getElementById("description").value;

    // WhatsApp Integration
    const phoneNumber = "9632214132"; // Replace with your WhatsApp number
    const whatsappText = `Hello, I am ${name}.%0AEmail: ${email}%0A${description}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappText}`;
    window.open(whatsappURL, "_blank"); // Opens WhatsApp chat

    // Email Integration with Formspree
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        });

        if (response.ok) {
            alert("Message sent successfully via Email & WhatsApp!");
            form.reset(); // Clear form after submission
        } else {
            alert("Error sending email. Please try again.");
        }
    } catch (error) {
        alert("Error submitting form.");
        console.error(error);
    }
}