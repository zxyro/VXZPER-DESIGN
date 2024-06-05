document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const whatsappMessage = `Haloo, nama aku ${name}.
    Email ${email}.
    Saya mau order ini kak: ${message}`;

    const whatsappUrl = `https://wa.me/6285173305799?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
});