<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = htmlspecialchars($_POST['nombre'] ?? '');
    $edad = (int)($_POST['edad'] ?? 0);

    if (!empty($nombre) && $edad > 0) {
        echo "<div class='card'>";
        echo "<h2>Hola $nombre 👋</h2>";
        echo "<p>Tienes $edad años</p>";
        echo "</div>";
    } else {
        echo "Datos inválidos";
    }
}
?>