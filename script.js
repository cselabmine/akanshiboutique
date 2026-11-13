

// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function() {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.innerHTML = "✕";
    } else {
        menuBtn.innerHTML = "☰";
    }
});

// CLOSE MENU AFTER CLICKING LINK

document.querySelectorAll("#navbar a").forEach(function(link) {
    link.addEventListener("click", function() {
        navbar.classList.remove("active");
        menuBtn.innerHTML = "☰";
    });
});

// CONTACT FORM

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    // Replace with your boutique WhatsApp number.
    let whatsappNumber = "91XXXXXXXXXX";

    let text = "Hello Akanshi Boutique!%0A" +
               "Name: " + encodeURIComponent(name) + "%0A" +
               "Phone: " + encodeURIComponent(phone) + "%0A" +
               "Message: " + encodeURIComponent(message);

    if (whatsappNumber === "91XXXXXXXXXX") {
        alert("Please add your WhatsApp number in script.js.");
        return;
    }

    window.open(
        "https://wa.me/" + whatsappNumber + "?text=" + text,
        "_blank"
    );
});
