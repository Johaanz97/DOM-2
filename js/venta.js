function calcular() {
    const cantidad = Number(document.getElementById("cantidad").value);
    const precio = Number(document.getElementById("precio").value);
    const producto = document.getElementById("producto").value.trim();

    const subtotalInput = document.getElementById("subtotal");
    const ivaInput = document.getElementById("iva");
    const descuentoInput = document.getElementById("descuento");
    const totalInput = document.getElementById("total");

    if (!producto || Number.isNaN(cantidad) || Number.isNaN(precio) || cantidad <= 0 || precio <= 0) {
        subtotalInput.value = "Datos inválidos";
        ivaInput.value = "";
        descuentoInput.value = "";
        totalInput.value = "";
        return;
    }

    let subtotal = cantidad * precio;
    let iva = subtotal * 0.19;
    let descuento = 0;

    if (cantidad > 10) {
        descuento = subtotal * 0.05;
    }

    const total = subtotal + iva - descuento;

    subtotalInput.value = `$${subtotal.toLocaleString("es-CO")}`;
    ivaInput.value = `$${iva.toLocaleString("es-CO")}`;
    descuentoInput.value = `$${descuento.toLocaleString("es-CO")}`;
    totalInput.value = `$${total.toLocaleString("es-CO")}`;
}