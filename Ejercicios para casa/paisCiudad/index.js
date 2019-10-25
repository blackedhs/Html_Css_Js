window.addEventListener('load', Inicializar, true);
let selectPais;
let selectCiudad;


function Inicializar() {
    selectCiudad = document.getElementById('Ciudad');
    selectPais = document.getElementById('Pais');
    let paises= data.map(paises => paises.pais);
    let paisesSinRepetir= [...new Set(paises)];
    paisesSinRepetir.forEach(pais => {
        let option = document.createElement('option');
        option.textContent=pais;
        option.value = pais;
        selectPais.appendChild(option);
    })
    CargarCiudades(data,selectPais.value);
    selectPais.addEventListener('change', () => {
        let paisSelect = selectPais.value;
        for(i in selectCiudad)
            selectCiudad.remove(i);
        CargarCiudades(data,paisSelect);
        CambiarFondo(paisSelect);
    });
    selectCiudad.addEventListener('change',() => CargarMapa(selectPais.value,selectCiudad.value));
    
}
function CargarCiudades ( paises , paisSelect ){
    let ciudades = paises.filter(pais=> pais.pais=== paisSelect)
    CargarOpciones(ciudades);
    CargarMapa(paisSelect,selectCiudad.value);
}

function CargarOpciones(array) {
    array.forEach(element =>  {
        let option = document.createElement('option');
        option.value = element.ciudad;
        option.textContent=element.ciudad;
        selectCiudad.add(option);
    });
}
function CargarMapa(pais,ciudad) {
    let map='https://maps.gosur.com/satellite/'+pais+'_'+ciudad;
    console.log(map);
    document.getElementById('Mapas').src= 'https://maps.gosur.com/satellite/'+pais;
}
function CambiarFondo(pais) {
    let body = document.getElementById('body');
    let img = './img/'+pais+'.png'; 
    body.background = img; 
}
