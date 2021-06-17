let menu = document.getElementById("menu");
let menu_list = document.querySelector("#menu-list");
let burguer_menu = document.getElementById("burguerMenu_icon");
let closer = document.getElementById("close_button");
let menu_buttons = document.querySelectorAll(".menu_buttons");

// Funciones
function desplazar_menu() {
  console.log("Click");
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    menu.classList.add("hidde");
  } else {
    menu.classList.remove("hidde");
    menu.classList.add("active");
  }
}
// FIN Funciones

burguer_menu.addEventListener("click", desplazar_menu);
closer.addEventListener("click", desplazar_menu);

menu_list.addEventListener("click", desplazar_menu);