function calcular() {
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);

    const promedioFinal = (nota1 + nota2 + nota3) / 3;
    const campoResultado = document.getElementById("promedio");

    if ([nota1, nota2, nota3].some(nota => Number.isNaN(nota))) {
        campoResultado.value = "Ingrese notas válidas";
        campoResultado.style.background = "rgba(127, 29, 29, 0.7)";
        campoResultado.style.color = "#fee2e2";
        return;
    }

    campoResultado.value = promedioFinal.toFixed(2);
    campoResultado.style.background = "rgba(31, 41, 55, 0.95)";
    campoResultado.style.color = "#f1d7a3";
}