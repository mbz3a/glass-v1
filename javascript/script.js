let btn_menu = document.getElementById('btn-menu');
let nav = document.getElementById('nav');
let menu_items = document.getElementById('menu-items');
let MenuState = 1;

btn_menu.addEventListener('click', () => {
    if (MenuState == 1) {
        nav.classList.add('auto-height');
        menu_items.classList.add('display-block');
        MenuState = 2;
    } else {
        nav.classList.remove('auto-height');
        menu_items.classList.remove('display-block');
        MenuState = 1;
    }
});
