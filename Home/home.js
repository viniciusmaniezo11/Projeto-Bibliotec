const menu = document.getElementById("menu"); //Pegando o elemento pelo ID
const navMenu = document.querySelector(".navigation");

menu.addEventListener("click", function() {

    if(navMenu.className == "navigation") {
        navMenu.classList.toggle("active");
    }
    else {
        navMenu.className = "navigation";
    }
}) 

// Opção com arrow function, ou função lambda
// menu.addEventListener("click", () => {})
// })
