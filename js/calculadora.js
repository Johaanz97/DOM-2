const resultado = document.getElementById("resultado1");

function obtenerNumero(id) {
    const valor = document.getElementById(id).value.trim();
    const numero = Number(valor);
    return Number.isNaN(numero) ? null : numero;
}

function mostrarResultado(valor, error = false) {
    resultado.value = valor;
    resultado.style.background = error ? "rgba(127, 29, 29, 0.7)" : "rgba(31, 41, 55, 0.95)";
    resultado.style.color = error ? "#fee2e2" : "#f1d7a3";
    resultado.style.borderColor = error ? "#fca5a5" : "rgba(212, 175, 117, 0.6)";
}

function sumar() {
    const n1 = obtenerNumero("num1");
    const n2 = obtenerNumero("num2");

    if (n1 === null || n2 === null) {
        mostrarResultado("Ingresa números válidos", true);
        return;
    }

    mostrarResultado(`${n1 + n2}`);
}

function restar() {
    const n1 = obtenerNumero("num1");
    const n2 = obtenerNumero("num2");

    if (n1 === null || n2 === null) {
        mostrarResultado("Ingresa números válidos", true);
        return;
    }

    mostrarResultado(`${n1 - n2}`);
}

function multi() {
    const n1 = obtenerNumero("num1");
    const n2 = obtenerNumero("num2");

    if (n1 === null || n2 === null) {
        mostrarResultado("Ingresa números válidos", true);
        return;
    }

    mostrarResultado(`${n1 * n2}`);
}

function divi() {
    const n1 = obtenerNumero("num1");
    const n2 = obtenerNumero("num2");

    if (n1 === null || n2 === null) {
        mostrarResultado("Ingresa números válidos", true);
        return;
    }

    if (n2 === 0) {
        mostrarResultado("No se puede dividir entre 0", true);
        return;
    }

    mostrarResultado(`${n1 / n2}`);
}