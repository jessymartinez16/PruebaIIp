const imageCard = document.getElementById('imageCard');
const cartButton = document.getElementById('cartButton');
const form = document.querySelector('.form-card');
const colorInput = document.getElementById('colorInput');


// 🚗 Mercedes rojo y gris
const redMercedes = "img/rojo.jfif";
const grayMercedes = "img/gris.jfif";


// imagen inicial
imageCard.style.backgroundImage = `url(${redMercedes})`;
colorInput.value = "rojo";


// 🔴 ROJO
document.querySelector('.black-btn').addEventListener('click', () => {
    colorInput.value = "rojo";
    imageCard.style.backgroundImage = `url(${redMercedes})`;
});


// ⚪ GRIS
document.querySelector('.white-btn').addEventListener('click', () => {
    colorInput.value = "gris";
    imageCard.style.backgroundImage = `url(${grayMercedes})`;
});


// 🛒 CARRITO
cartButton.addEventListener('click', () => {
    cartButton.textContent = "✔ Agregado";
    cartButton.style.background = "green";

    setTimeout(() => {
        cartButton.textContent = "Agregar al carrito";
        cartButton.style.background = "#333";
    }, 2000);
});


// 📌 VALIDACIÓN
form.addEventListener('submit', (e) => {
    const nombre = form.querySelector('input[name="nombre"]').value.trim();
    const edad = form.querySelector('input[name="edad"]').value;

    if (nombre === "" || edad === "") {
        e.preventDefault();
        alert("Completa todos los campos");
    }

    if (edad <= 0) {
        e.preventDefault();
        alert("Edad inválida");
    }
});