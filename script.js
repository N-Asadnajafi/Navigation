const menuBars = document.querySelector("#menu-bars");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const overlay = document.querySelector("#overlay");
const nav = document.querySelector("nav");
const ul = document.querySelector("ul");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Functions (Define functions before calling them)

// Change opacity
function changeOpacity(param1, param2) {
    param1.style.opacity = param2;
}

// Manu open/close + menu icon change
function toggleMenu() {
    if (menuBars.classList.contains("change")) {
        menuBars.classList.remove("change");
        overlay.style.display = "none";
    } else {
        menuBars.classList.add("change");
        overlay.style.display = "block";
        changeOpacity(nav, 1);
        changeOpacity(ul, 1);
    }
}

// Manage click on menu items
function menuItemClickHandler(nav) {
    nav.addEventListener("click", toggleMenu)
}

// Event Listeners
menuBars.addEventListener("click", toggleMenu);
navItems.forEach(menuItemClickHandler)