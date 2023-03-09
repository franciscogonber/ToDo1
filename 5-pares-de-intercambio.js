function swapPairs(arr) {
  var lastIndex = arr.length % 2 === 0 ? arr.length : arr.length - 1; // si la longitud es impar, se toma hasta el penúltimo elemento
  for (var i = 0; i < lastIndex - 1; i += 2) { // se recorre el array de a dos elementos, intercambiando sus posiciones
    var temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}


console.log(swapPairs([1, 2, 3, 4])); // [2, 1, 4, 3]
console.log(swapPairs(["Brendan", true, 42])); // [true, "Brendan", 42]
console.log(swapPairs([1, 2, 3, 4, 5])); // [2, 1, 4, 3, 5]

