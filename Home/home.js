const menu = document.getElementById("menu"); //Pegando o elemento pelo ID
const navMenu = document.querySelector(".navigation");

menu.addEventListener("click", function() {

    if(navMenu.className == "navigation") {
        navMenu.className = "navigation.active";
    }
    else {
        navMenu.className = "navigation";
    }
}) 