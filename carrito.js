function mostrarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const contenedor = document.getElementById("lista-carrito");
  const total = document.getElementById("total");
  contenedor.innerHTML = "";
  let suma = 0;

  carrito.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "col-md-4";
    div.innerHTML = `
      <div class="card h-100">
        <img src="${item.imagen}" class="card-img-top">
        <div class="card-body">
          <h5>${item.nombre}</h5>
          <p>Precio: $${item.precio}</p>
          <p>Cantidad: ${item.cantidad}</p>
          <button class="btn btn-danger btn-sm" onclick="eliminar(${i})">Eliminar</button>
        </div>
      </div>
    `;
    contenedor.appendChild(div);
    suma += item.precio * item.cantidad;
  });

  total.innerText = suma.toFixed(2);
}

function eliminar(indice) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.splice(indice, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function vaciarCarrito() {
  localStorage.removeItem("carrito");
  mostrarCarrito();
}

window.onload = mostrarCarrito;




