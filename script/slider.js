// Importo el padre de todos los sliders
const slider = document.getElementById("slider");
// Importo todos los sliders
let sliderDiv = document.querySelectorAll(".sliderDiv");
// Doy un id al ultimo slider
let sliderDivLast = sliderDiv[sliderDiv.length -1];

const BTNIZQ = document.getElementById("BTNizq");
const BTNDER = document.getElementById("BTNder");

// Al padre.Inserto un elemento("despues de que comience", ultimo elemento);
slider.insertAdjacentElement("afterbegin", sliderDivLast);


BTNIZQ.addEventListener("click", () => {
    let sliderDivFirst = document.querySelectorAll(".sliderDiv")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 500ms ease-in-out";
    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderDivFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
    // Limpio intervalo y lo reseteo
    clearInterval(sliderTimer);
    sliderTimer = setInterval(automaticNext,6000);
});

BTNDER.addEventListener("click", () => {
    let sliderDiv = document.querySelectorAll(".sliderDiv");
    let sliderDivLast = sliderDiv[sliderDiv.length -1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 500ms ease-in-out";
    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderDivLast);
        slider.style.marginLeft = "-100%";
    }, 500);
    // Limpio intervalo y lo reseteo
    clearInterval(sliderTimer);
    sliderTimer = setInterval(automaticNext,6000);
});

// Bucle automatico
function automaticNext(){
    let sliderDivFirst = document.querySelectorAll(".sliderDiv")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 500ms ease-in-out";
    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderDivFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}
var sliderTimer = setInterval(automaticNext,6000);