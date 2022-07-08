
// haciendo que se muestre en la seccion ".section-offers__ctn-cardsImage" el nombre de la oferta clickeada en las cardImgs o en hover
/* constante tripTo: Seleccionar todos los elementos con la clase `tripTo` y almacenarlos en un array para luego obtener el texto que se quiere mostrar al pasar mouse por encima de las cards .
* constante father_chosen_destination: elemento donde se va a insertar el texto tripTo .
* constante anterElem: en scope interno para unicamente eliminar si ya existe en cada ciclo de evento a las cards y que se note el efecto de entrada hecho con css.
* constante innerNewChoosDestination: nuevo elemento creado y que contendra el texto almacenado en la constante tipo array tripTo en la posicion del index.
* constante cardImage: Un bucle forEach que añade un receptor de eventos mouseenter a cada elemento del array.
*/
const tripTo = document.querySelectorAll(".tripTo");
const father_chosen_destination = document.querySelector(".section-offers__chosen-destination");

/* A forEach loop that is adding a mouseenter event listener to each element in the array. */
const cardImage = document.querySelectorAll(".ctn-cardsImage__cardImage").forEach((elem, i) => {
    elem.addEventListener("mouseenter", () => {
        const anterElem = document.querySelector(".innerChoosDestination");
        if (anterElem) anterElem.remove();

        const innerNewChoosDestination = document.createElement("p");
        innerNewChoosDestination.innerText = tripTo[i].innerText;
        innerNewChoosDestination.classList.add('innerChoosDestination');
        father_chosen_destination.appendChild(innerNewChoosDestination);
    });
});

/* añadiendo marcador de pagina a item en menu a la pagina activa */
/**para este caso que es solo una pagina es factible, pero a medida que hay mas paginas no sirve esta misma porcion de codigo.
 * usar un script insertado internamente en los html con el className del item
 */
window.addEventListener("load", () => {
    const item = document.querySelector(".item-home");
    item.classList.add("pageActive");
})

/**MENU HAMBURGUESA */

const buttonHambur = document.querySelector('.button-hamburg');
const header_ctn_items = document.querySelector(".header__ctn-uls");
// const header_offerLeft = document.querySelector(".header__offerLeft");
const ingredients = document.querySelectorAll(".button-hamburg span")

buttonHambur.addEventListener("click", () => {
    header_ctn_items.classList.toggle('active');
    // header_offerLeft.classList.toggle("active");
    ingredients.forEach(ingred => ingred.classList.toggle("animation"))
})