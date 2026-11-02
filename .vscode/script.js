document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.content');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.querySelectorAll(".faq-question").forEach(function(button) {
    button.addEventListener("click", function() {
        const faqAnswer = this.nextElementSibling;
        faqAnswer.classList.toggle("visible");
    });
    if(answer.style.maxHeight) {
        answer.style.maxHeight = null;
    }else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.padding = "10px";
    }
});
