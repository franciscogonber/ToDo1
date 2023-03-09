function agregarAlPrincipio(matriz, valor) {
  var nuevaMatriz = new Array(matriz.length + 1);
  nuevaMatriz[0] = valor;

  for (var i = 0; i < matriz.length; i++) {
    nuevaMatriz[i + 1] = matriz[i];
  }

  return nuevaMatriz;
}
 var miMatriz = [2, 3, 4, 5];
 var valorNuevo = 1;
 
 miMatriz = agregarAlPrincipio(miMatriz, valorNuevo);
 
 console.log(miMatriz); // Salida: [1, 2, 3, 4, 5]
 
