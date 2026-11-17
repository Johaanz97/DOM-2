function calcular() {
    const horas = Number(document.getElementById("horas").value);
    const valor = Number(document.getElementById("valor").value);
    const campoResultado = document.getElementById("resultado");

    if (Number.isNaN(horas) || Number.isNaN(valor) || horas < 0 || valor < 0) {
        campoResultado.value = "Valores inválidos";
        campoResultado.style.background = "rgba(127, 29, 29, 0.7)";
        campoResultado.style.color = "#fee2e2";
        return;
    }

    let salario = horas * valor;

    if (horas > 8) {
        salario += (horas - 8) * valor * 0.5;
    }

    campoResultado.value = `$${salario.toLocaleString("es-CO")}`;
    campoResultado.style.background = "rgba(31, 41, 55, 0.95)";
    campoResultado.style.color = "#f1d7a3";
}