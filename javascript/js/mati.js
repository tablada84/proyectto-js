let mandarBtn = document.getElementById("mandar");
let resetBtn = document.getElementById("reset");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

resetBtn.addEventListener("click", (e) => {
  let nombre = document.getElementById("Nombre");
  let apellido = document.getElementById("Apellido");
  let email = document.getElementById("Email");

  nombre.value = "";
  apellido.value = "";
  email.value = "";
});

mandarBtn.addEventListener("click", (e) => {
  let nombre = document.getElementById("Nombre");
  let apellido = document.getElementById("Apellido");
  let email = document.getElementById("Email");
  nombre = nombre.value;
  localStorage.setItem("nombre", nombre);

  apellido = apellido.value;
  localStorage.setItem("apellido", apellido);

  email = email.value;
  localStorage.setItem("email", email);
});
