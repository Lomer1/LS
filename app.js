/*const menu = document.querySelectorAll('.nav__inner[data-goto]');

if (menu.length > 0) {
    menu.forEach(menulink => {
        menulink.addEventListener("click", onMenuclick) ;
    });

    function onMenuclick(e) {
        const menulink = e.target;
        if (menulink.dataset.goto && document.querySelector(menulink.dataset.goto)) {
            const gotoBlock = document.querySelector(menulink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundClientRect().top+ pageYOffset
        
            window.scrollTo ({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}*/
const scroll = window.pageYOffset;
const item = document.querySelector('.nav__inner')
console.log ()

function aboutUs() {
    window.scrollTo(0, 1700);
    const scroll = window.pageYOffset;
    console.log(scroll);
}