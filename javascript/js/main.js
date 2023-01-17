/* function Persona(nombreApellido, direccion, telefono, email) {
  this.nombreApellido = nombreApellido;
  this.direccion = direccion;
  this.telefono = telefono;
  this.email = email;
  this.saludar = () => {
    console.log("Bienvenido/a " + this.nombreApellido);
  };

  this.imprimir = () => {
    console.log(
      `Nombre: ${this.nombreApellido}, Direccion: ${this.direccion}, Telefono: ${this.telefono}, Email: ${this.email}`
    );
  };
}

function validarVacio(valor) {
  if (valor == null || valor.length == 0) {
    return false;
  } else {
    return true;
  }
}

alert("ingresar sus datos");

let validar = false;
let nombreApellido;
let direccion;
let telefono;
let email;

while (validar == false) {
  nombreApellido = prompt("Ingresar su nombre y apellido");
  validar = validarVacio(nombreApellido);
}
validar = false;

while (validar == false) {
  direccion = prompt("Ingresar  direccion");
  validar = validarVacio(direccion);
}
validar = false;

while (validar == false) {
  telefono = prompt("Ingresar telefono");
  validar = validarVacio(telefono);
}
validar = false;

while (validar == false) {
  email = prompt("Ingresar su correo de mail");
  validar = validarVacio(email);
}
validar = false;

const Cliente = new Persona(nombreApellido, direccion, telefono, email);

Cliente.saludar();
Cliente.imprimir();
console.log(Cliente);

const numeros = [1, 2, 3, 4, 5];
const productos = [
  { id: 1, nombre: "nueces", precio: 500 },
  { id: 2, nombre: "almendras", precio: 100 },
  { id: 3, nombre: "pasas de uva", precio: 200 },
  { id: 4, nombre: "mixfrutal", precio: 400 },
  { id: 5, nombre: "mani", precio: 200 },
  { id: 6, nombre: "higos", precio: 600 },
  { id: 7, nombre: "castana", precio: 450 },
  { id: 8, nombre: "mixtropical", precio: 550 },
];

let carrito = [];

let seleccion = prompt("hola desea comprar algun productos si o no");

while (seleccion != "si" && seleccion != "no") {
  alert("por favor ingrese si o no");
  seleccion = prompt("hola desea comprar algo si o no");
}

if (seleccion == "si") {
  alert("a continuacion nuestra lista de productos");
  let todoslosProductos = productos.map(
    (producto) => producto.nombre + " " + producto.precio + "$"
  );
  alert(todoslosProductos.join(" - "));
} else if (seleccion == "no") {
  alert("gracias por venir, hasta pronto!!");
}

while (seleccion != "no") {
  let producto = prompt("agregar un producto a tu carrito");
  let precio = 0;
  let optenerPrecio;

  switch (producto) {
    case "nueces":
      optenerPrecio = productos.find((el) => el.nombre === producto);
      precio = optenerPrecio.precio;
      break;
    case "almendras":
      optenerPrecio = productos.find((el) => el.nombre === producto);
      precio = optenerPrecio.precio;
      break;
    case "pasas de uva":
      optenerPrecio = productos.find((el) => el.nombre === producto);
      precio = optenerPrecio.precio;
      break;
    case "mixfrutal":
      optenerPrecio = productos.find((el) => el.nombre === producto);
      precio = optenerPrecio.precio;
      break;
    case "mani":
      optenerPrecio = productos.find((el) => el.nombre === producto);
      precio = optenerPrecio.precio;
      break;
    default:
      alert("no tenemos ese producto");
      break;
  }

  let unidades = parseInt(prompt("cuantas unidades va a llevar"));

  carrito.push({ producto, unidades, precio });
  console.log(carrito);

  seleccion = prompt("desea seguir comprando?");

  while (seleccion === "no") {
    alert("gracias por la compra!!");
    carrito.forEach((carritoFinal) => {
      console.log(
        "producto: ",
        carritoFinal.producto,
        "unidades: ",
        carritoFinal.unidades,
        "total a pagar por producto $",
        carritoFinal.unidades * carritoFinal.precio
      );
    });
    break;
  }
}
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
alert(`el total a pagar por su compra es: ${total}`);
console.log(`el total a pagar por su compra es: ${total}`);

const mayorCosto = carrito.filter((el) => el.precio > 400);
console.log(
  `El valor mayor de precios de producto comprado es: ${mayorCosto[0].precio} `
);

//Ejemplo de filtrado

function filtrarPorProductos(arr, filtro) {
  return arr.filter((productos) => {
    return productos.nombre.includes(filtro);
  });
}
let buscar = prompt("ingresar el nombre del producto");
const filtrado = filtrarPorProductos(productos, buscar);
let sumarFilt = 0; // opcional

filtrado.forEach((prod) => {
  alert(prod.nombre);
  sumarFilt += prod.precio; // opcional
});

alert(sumarFilt); //opcional */
