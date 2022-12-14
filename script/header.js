// importar el elemento a vigijar
const contSlider = document.getElementById("contSlider");

// variables a utilizar en la transicion
var header = document.getElementById("header");
var contHeader = document.getElementById("contHeader");
var navLink = document.querySelectorAll(".navLink");
var logo = document.getElementById("logo");

// Funcion para reestilar HEADER
// 2 parametros: 1: Entrada (objeto a interactuar) 2: Observador
const reestilado = (entrada, observador) => {
    entrada.forEach(entrada => {
        if(entrada.isIntersecting === false){
            header.classList.add(`headerDark`);
            contHeader.classList.add(`contHeaderDark`);
            navLink.forEach(link => {
                link.classList.add(`colorDark`);
            });
            logo.innerHTML = ``;
            logo.innerHTML = `<img id="logoColor" src="./src/logos/ColoredLogo.png" alt="Logo TMIC">`;
        } else if(entrada.isIntersecting){
            header.classList.remove(`headerDark`);
            contHeader.classList.remove(`contHeaderDark`);
            navLink.forEach(link => {
                link.classList.remove(`colorDark`);
            });
            logo.innerHTML = ``;
            logo.innerHTML = `<img id="logoBW" src="./src/logos/BWLogo.png" alt="Logo TMIC">`;
        }
    });
};

// Declarar el observador
const observador = new IntersectionObserver(reestilado, {
    root: null,         //Hace referencia al elemento, en este caso el viewport
    rootMargin: `0px`,  //Margen del VP para que se ejecute el codigo
    threshold: 0.15     //Cantidad del elemento que debe entrar para que se ejecute el codigo. 100% = 1
});

// Llamo el observador y le digo que observar
observador.observe(contSlider);