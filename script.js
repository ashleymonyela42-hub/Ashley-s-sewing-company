document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;

        if (answer) {
            answer.style.display =
                answer.style.display === "block" ? "none" : "block";
        }
    });
});


// Search sewing services
const serviceSearch = document.getElementById("serviceSearch");

if (serviceSearch) {
    serviceSearch.addEventListener("input", function () {
        const searchText = this.value.toLowerCase();

        document.querySelectorAll(".service-card").forEach(card => {
            card.style.display =
                card.textContent.toLowerCase().includes(searchText)
                ? "block" : "none";
        });
    });
}


// Enquiry price calculator
const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const service = document.getElementById("service").value;
        const quantity = Number(
            document.getElementById("quantity").value
        );

        const prices = {
            dressmaking: 350,
            alterations: 100,
            custom: 450
        };

        if (!prices[service] || !Number.isInteger(quantity) ||
            quantity < 1 || quantity > 100) {
            document.getElementById("priceResult").textContent =
                "Please select a service and enter a valid quantity.";
            return;
        }

        const total = prices[service] * quantity;

        document.getElementById("priceResult").textContent =
            "Estimated price: R" + total +
            ". Final price will be confirmed after consultation.";
    });
}


// Contact form validation and email preparation
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const messageType = document.getElementById("messageType").value;
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("formMessage");

        if (!name || !email || !phone || !messageType || !message) {
            formMessage.textContent = "Please complete all fields.";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formMessage.textContent =
                "Please enter a valid email address.";
            return;
        }

        if (!/^[0-9+()\s-]{7,20}$/.test(phone)) {
            formMessage.textContent =
                "Please enter a valid phone number.";
            return;
        }

        const subject = encodeURIComponent(
            "Website message: " + messageType
        );

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\nPhone: " + phone +
            "\nMessage type: " + messageType +
            "\nMessage: " + message
        );

        const businessEmail = "ashleysewing@gmail.com";

        formMessage.textContent =
            "Your email application will open so you can send your message.";

        window.location.href =
            "mailto:" + businessEmail +
            "?subject=" + subject + "&body=" + body;
    });
}

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(image => {
    image.addEventListener("click", () => {
        const lightbox = document.getElementById("lightbox");
        const enlargedImage = document.getElementById("enlargedImage");

        if (lightbox && enlargedImage) {
            enlargedImage.src = image.src;
            enlargedImage.alt = image.alt;
            lightbox.style.display = "flex";
        }
    });
});

const closeLightbox = document.getElementById("closeLightbox");

if (closeLightbox) {
    closeLightbox.addEventListener("click", () => {
        document.getElementById("lightbox").style.display = "none";
    });
}


document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll(".content");

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    sections.forEach(function (section) {
        observer.observe(section);
    });

});




document.querySelectorAll(".faq-question").forEach(function (button) {

    button.addEventListener("click", function () {

        const answer = button.nextElementSibling;

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            answer.style.padding = "0";
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            answer.style.padding = "15px";
        }

    });

});
