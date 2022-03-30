const btnMenu = document.getElementById("btn-menu");

function toggleMenu(event){
    if(event.type === "touchstart")event.preventDefaut();
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}

btnMenu.addEventListener("click", toggleMenu);
btnMenu.addEventListener("touchstart", toggleMenu);