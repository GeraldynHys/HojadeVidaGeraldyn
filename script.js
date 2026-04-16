document.getElementById('contactForm').addEventListener('submit', function(event) {
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;

    if (nombre.length < 3) {
        alert("Por favor, ingresa un nombre válido.");
        event.preventDefault(); // No deja enviar si hay error
    } else {
        alert("¡Hola Geraldyn! El formulario se validó correctamente.");
    }
});