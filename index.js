const elInput = document.getElementById('input')
const elSamolyot = document.getElementById('samolyot')
const elButton = document.getElementById('button')
const elForm = document.getElementById('form')
const elMoshina = document.getElementById('moshina')
const elVelosiped = document.getElementById('velosiped')
const elPiyoda = document.getElementById('piyoda')

const samolyot = 800;
const moshina = 70;
const velosiped = 20.1;
const piyoda = 3.6;

elForm.addEventListener('submit',function (e) {
    e.preventDefault()

    if(elInput.value){
        let result = Number(elInput.value) / Number(samolyot);
        elSamolyot.textContent = result.toFixed(2) + 'soat';
        let confirm = Number(elInput.value) / Number(moshina);
        elMoshina.textContent = confirm.toFixed(2) + 'soat';
        let yusi = Number(elInput.value) / Number(velosiped);
        elVelosiped.textContent = yusi.toFixed(2) + 'soat';
        let reser = Number(elInput.value) / Number(piyoda);
        elPiyoda.textContent = reser.toFixed(2) + 'soat';
    }
})