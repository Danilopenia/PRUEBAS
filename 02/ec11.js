//TERNARIO
const edad = 21;
//(condicion) ? (que pasa si es verdadero) : (que pasa si es falso)
edad > 18 ? console.log("sos mayor") : console.log("sos menor");

//&& (retorna siempre el segundo elemento)
//(condicion) && (se ejecuta solo si la condicion es verdadera)
edad > 18 && console.log("se imprime este");

const nula = null;
nula ?? console.log("la variable es nula o undefined");
const undefine = undefined;
undefine ?? console.log("la variable es nula o undefined");
