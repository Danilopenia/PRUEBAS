const datos = {
  nombre: "danilo",
  apellido: "peña",
  //edad: "21",
};

const datosExtras = {
  ciudad: "bsas",
  nacimiento: 2002,
};

const objetosUnidos = { ...datos, ...datosExtras };
//console.log(objetosUnidos);

const arrayUno = [1, 2, 3];
const arrayDos = [10, 20, 30];
const arraysUnidos = [...arrayUno, ...arrayDos];
//console.log(arraysUnidos);

//DESESTRUCTURACION
//const nombre = objetosUnidos.nombre
//const nacimiento = objetosUnidos.nacimiento
//const ciudad = objetosUnidos.ciudad
const { nombre, nacimiento, ciudad, ...rest } = objetosUnidos;
//console.log(nombre);
//console.log(rest);

//ESTRUCTURACION
const poder = "inteligencia";
const pseudonimo = "ironman";
const equipo = "vengadores";
const heroe = { poder, pseudonimo, equipo };
//console.log(heroe);
