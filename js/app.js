// CONSTRUCTOR  
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
};

function UI() {

};

// Llena las opciones de los años
UI.prototype.llenarOpciones = () {
    const max = new Date().getFullYear;
    const min = max - 20;

    const selectYear = documentent.querySelector('#year');

    for(let i = max; i > min ; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

document.addEventListener('DOMContentLoaded', () => {

});