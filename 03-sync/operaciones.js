//dividir con promesa = mezcla de dividir y funcionDeError
async function dividirConPromesa(n1, n2, funcionDeError) {
  return new Promise(async (promesaResuelta, promesaError) => {
    if (n1 && n2 !== 0) {
      await promesaResuelta("el resultado de la operacion es: " + n1 / n2);
    } else {
      await promesaError("ocurrio el error: no existe n1 o n2 es 0");
    }
  });
}

/*function dividir (n1, n2, funcionDeError){
    if (n1 && n2 !== 0){
        funcionDeError(null, n1/n2)
    }else{
        funcionDeError("n1 no existe o n2 es 0")
    }
}*/

function elevadoa(num1, num2, funcionDeError) {
  if ((num1 || num1 === 0) && (num2 || num2 === 0)) {
    return funcionDeError(null, num1 ** num2);
  } else {
    return funcionDeError("faltan parametros");
  }
}

/*function funcionDeError (error, exito){
    if (error){
        console.log("ocurrio el error", error);
    }else{
        console.log("el resultado de la operacion es:", exito);
    }
}
*/
/*
async function calcular(num1,num2,operacion){
    try
    {console.log(await operacion(num1,num2));
    }catch (error){
        console.log(error);
    }
}*/

function calcular(num1, num2, operacion) {
  operacion(num1, num2)
    .then((respuesta) => {
      console.log(respuesta);
      return "primer then";
    })
    .then((res) => {
      console.log(res);
      return "segundo then";
    })
    .then((respuesta) => console.log(respuesta))
    .catch((error) => console.log(error));
}

//calcular(10,"a", dividir)
//calcular(2,5,elevadoa)
//calcular (10,0,dividir)
//calcular(2,null,elevadoa)

calcular(10, 5, dividirConPromesa);
calcular(10, 0, dividirConPromesa);
