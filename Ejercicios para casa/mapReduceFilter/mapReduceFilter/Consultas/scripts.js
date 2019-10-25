window.addEventListener('load', Inicializar);
let divDatos;
function Inicializar() {
    divDatos = document.getElementById('divDatos');
    //Usuarios mayores al numero del parametro
    //CrearPresentacion(soluciones.usuariosMayores(data, 40));
    //Usuario mayor
    //CrearPresentacion(soluciones.usuarioMasGrande(data));
    //promedio de edades
    CrearPresentacion([soluciones.promedio(data)]);
}
//console.log(data);
/*
realizar las operaciones usando los metodos map,  reduce y filter y combinaciones entre ellos
*/
var soluciones = {};
//************************************************************************************************
// Retornar un array con los nombres de los usuarios femeninos
soluciones.usuariosFemeninos = usuarios => usuarios.filter(usuario => usuario.genero === 'Female')
                                .map(usuarios=> [usuarios.nombre]);
console.log('Usuarios Femeninos : ' +soluciones.usuariosFemeninos(data));
//************************************************************************************************
// Retornar un array de strings (el email de los usuarios de sexo masculino)
soluciones.mailsVarones = usuarios => usuarios.filter(usuarios => usuarios.genero === 'Male')
    .map(masculinos => masculinos.email);
//console.log(soluciones.mailsVarones(data));
//************************************************************************************************
// Retornar un array de objetos que solo contengan las claves nombre, email y edad, de todos los usuarios mayores que 'edad'
soluciones.usuariosMayores = (usuarios, edad) => usuarios.filter(usuarios => usuarios.edad > edad)
    .map(mayores => [mayores.nombre, mayores.email, mayores.edad]);
//console.log(soluciones.usuariosMayores(data, 40));
//************************************************************************************************
// Retornar un objeto que contenga solo el nombre y la edad del usuario mas grande.
soluciones.usuarioMasGrande = (usuarios) => {
    let masGrande = [usuarios.reduce((Ausuario,usuario) => {
        if (Ausuario.edad > usuario.edad)
            return Ausuario;
        else
            return usuario;
    },{'edad':0})];
    return masGrande.map(Element => [Element.nombre,Element.edad]);
}
//console.log(soluciones.usuarioMasGrande(data));
//************************************************************************************************
// Retornar el promedio de edad de los usuarios (number)
soluciones.promedio = usuarios => usuarios.reduce((acum,usuario,index,array)=>acum + (usuario.edad / array.length) ,0);
//console.log("Promedio edad usuarios " + soluciones.promedio(data));
//************************************************************************************************
// Retornar el promedio de edad de los usuarios hombres (number)
soluciones.promedioVarones =usuarios=> usuarios.filter(usuario=> usuario.genero ==="Male")
.reduce((acum,usuario,index,array)=>acum + (usuario.edad / array.length) ,0);
console.log("Promedio edad Varones " + soluciones.promedioVarones(data));
//************************************************************************************************
// Retornar el promedio de edad de los usuarios mujeres (number)
soluciones.promedioMujeres = usuarios=> usuarios.filter(usuario=> usuario.genero ==="Female")
.reduce((acum,usuario,index,array)=>acum + (usuario.edad / array.length) ,0);
console.log("Promedio edad Mujeres " + soluciones.promedioMujeres(data));
//************************************************************************************************
//Funcion para mostrar arrays XD
function CrearPresentacion(dato) {
    divDatos.innerHTML = '';
    for (Element in dato) {
        let li = document.createElement('li');
        li.textContent = dato[Element];
        divDatos.appendChild(li);
    }
}