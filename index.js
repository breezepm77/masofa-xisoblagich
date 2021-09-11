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
const minut = 60;

elForm.addEventListener('submit',function (e) {
    e.preventDefault()

    if(elInput.value){
        let result = Math.floor(elInput.value / samolyot) + ' soat ' + ((elInput.value) / samolyot * minut).toFixed
        (0) +'minut';
        elSamolyot.textContent = result;
        let config = Math.floor(elInput.value / piyoda) + ' soat ' + ((elInput.value) / piyoda * minut).toFixed
        (0) +' minut ';
        elPiyoda.textContent = config;
        let confirm = Math.floor(elInput.value / moshina) + ' soat ' + ((elInput.value) / moshina * minut).toFixed
        (0) +' minut ';
        elMoshina.textContent = confirm;
        let kontrakt = Math.floor(elInput.value / velosiped) + ' soat ' + ((elInput.value) / velosiped * minut).toFixed(0) +' minut ';
        elVelosiped.textContent = kontrakt;
    }
})