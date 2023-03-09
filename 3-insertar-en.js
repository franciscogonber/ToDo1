function insertar(arr, index, value) {
  for (let i = arr.length - 1; i >= index; i--) {
    arr[i + 1] = arr[i];
  }
  arr[index] = value;
  return arr;
}
let myArray = [1, 2, 3, 4, 5];
insertar(myArray, 2, 'new value');
console.log(myArray); // output: [1, 2, "new value", 3, 4, 5]
