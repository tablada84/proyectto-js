const marketContent = document.getElementById("marketContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
//const pintarCarrito = document.getElementById("pintarCarrito");
const cantidadCarrito = document.getElementById("cantidadCarrito");

const productos = [
  {
    id: 1,
    nombre: "almendras",
    precio: 200,
    img: "../img/almendra 3.jpg",
    cantidad: 1,
  },

  {
    id: 2,
    nombre: "nueces",
    precio: 500,
    img: "../img/nueces 3.jpg",
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "pasas de uva",
    precio: 200,
    img: "../img/pasas negras.jpg",
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "mixfrutal",
    precio: 300,
    img: "../img/mixfrutal3.jpg",
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "mani",
    precio: 200,
    img: "../img/mani 3.jpg",
    cantidad: 1,
  },
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((produc) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
    <img src="${produc.img}"
    <h4>${produc.nombre}</h4>
    <a class="precio">${produc.precio}</a>
    `;
  marketContent.append(content);

  let comprar = document.createElement("button");
  comprar.innerText = "comprar";
  comprar.className = "comprar";

  content.append(comprar);

  comprar.addEventListener("click", () => {
    const repeat = carrito.some((repeatProduc) => repeatProduc === produc.id);

    if (repeat) {
      carrito.map((prod) => {
        if (prod.id === produc.id) {
          prod.cantidad++;
        }
      });
    } else {
      carrito.push({
        id: produc.id,
        img: produc.img,
        nombre: produc.nombre,
        precio: produc.precio,
        cantidad: produc.cantidad,
      });

      console.log(carrito);
      carritoCounter();
      saveLocal();
    }
  });
});

const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

JSON.parse(localStorage.getItem("carrito"));

verCarrito.addEventListener("click", () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `<h1 class="modal-header-title"> Carrito.</h1 > `;

  modalContainer.append(modalHeader);

  const modalbutton = document.createElement("h1");
  modalbutton.innerText = "x";
  modalbutton.className = "modal-header-button";
  modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });
  modalHeader.append(modalbutton);

  carrito.forEach((produc) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
    <img src="${produc.img}">
    <h3>${produc.nombre}</h3>
    <a>${produc.precio}$</a>
    <span class="restar">-</span>
    <span class="sumar">+</span>
    <p>cantidad:${produc.cantidad}</p>
    <p>Total:${produc.cantidad * produc.precio}</p>
    `;

    modalContainer.append(carritoContent);

    let restar = carritoContent.querySelector(".restar");
    restar.addEventListener("click", () => {
      if (produc.cantidad > 0) {
        produc.cantidad--;
      }
      saveLocal();
      pintarCarrito();
    });

    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", () => {
      produc.cantidad++;
      saveLocal();
      pintarCarrito();
    });

    let eliminar = document.createElement("span");
    eliminar.innerText = "❌";
    eliminar.className = "delete-produc";
    carritoContent.append(eliminar);

    eliminar.addEventListener("click", eliminarProductos);
  });

  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
  const totalBuying = document.createElement("div");
  totalBuying.className = "total-content";
  totalBuying.innerHTML = `total a pagar: ${total} $`;
  modalContainer.append(totalBuying);
});

verCarrito.addEventListener("click", pintarCarrito(carrito)); // ver para que sirve

const eliminarProductos = () => {
  const foundId = carrito.find((element) => element.id);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });

  saveLocal();
  carritoCounter();
};

const carritoCounter = () => {
  cantidadCarrito.style.display = "block";

  const carritoLength = carrito.length;
  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();

function pintarCarrito(carrito) {}
