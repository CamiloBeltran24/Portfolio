let menu = document.getElementById("menu");
let menu_list = document.querySelector("#menu-list");
let burguer_menu = document.getElementById("burguerMenu_icon");
let closer = document.getElementById("close_button");
let menu_buttons = document.querySelectorAll(".menu_buttons");

// Funciones
function muestra_menu(e) {
  console.log("Click");
  menu.classList.remove("hidde");
  menu.classList.add("active");
}
function oculta_menu(e) {
  console.log("click en: ", e.target);
  menu.classList.remove("active");
  menu.classList.add("hidde");
}
// FIN Funciones

burguer_menu.addEventListener("click", muestra_menu);
closer.addEventListener("click", oculta_menu);

menu_list.addEventListener("click", desplazar_menu);
