function removeAtIndex(arr, index) {
  // Verificamos si el índice está dentro del rango válido de la matriz
  if (index < 0 || index >= arr.length) {
    return undefined; // Devuelve `undefined` si el índice está fuera de rango
  }
  
  let value = arr[index]; // Guarde el valor de la matriz en el índice especificado
  
  // Recorre la matriz a partir del índice dado y mueve cada elemento una posición hacia abajo 
  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  
  arr.pop(); // Remueve el último elemento duplicado después del reordenamiento
  
  return value; // Devuelve el valor eliminado de la matriz
}
let myArray = [1, 5, 8, 9, 15];

let removedValue = removeAtIndex(myArray, 1); // eliminar el elemento en el índice 1

console.log("Valor eliminado:", removedValue); // mostrar el valor eliminado en la consola
console.log("Nueva matriz:", myArray); // mostrar la nueva matriz en la consola