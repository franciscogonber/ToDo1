let input = ['A', 'A', 'B', 'C', 'D', 'D', 'D', 'E'];
let output = [];
let previousItem;

for (let i = 0; i < input.length; i++) {
  let currentItem = input[i];
  if (currentItem !== previousItem) {
    output[output.length] = currentItem;
    previousItem = currentItem;
  }
}
console.log(output);
