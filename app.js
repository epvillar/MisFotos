// este file es para explicar los pasos que se siguieron para armar script.js

const sectionCenter = document.querySelector(".section-center")
//console.log(sectionCenter)
// me trae todo el div class section-center

window.addEventListener("DOMContentLoaded", function() {
    let displayObras = obras.map(function(item) {
        //console.log(item) // me trae individualmente todas las obras
        //return `<h1>${item.title}`  // me trae un array con todos los títulos 
        //de las obras
        
        // usa return para traer el article completo
        // usa las variables para reemplazar el contenido
        return `<article class="obras-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="pintor">${item.pintor}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
          
          <button class="btn modal-btn">
            <a href="./img/albers1.jpg">
              queres ver más pinturas de ${item.pintor}
            <a/>
          </button>

        </div>
      </article>`;

    })
//console.log(displayObras) // me da las obras individualmente, el siguiente paso 
//es unirlas en un string usando la propiedad join
// se le agrega join('') para quen entre un item y el siguiente no haya una coma
// con comas


displayObras = displayObras.join("")
//console.log(displayObras) // un gran string con todas las obras

// es paso siguiente es add ese string a our data usando la propiedad innerHTML
sectionCenter.innerHTML = displayObras
})





