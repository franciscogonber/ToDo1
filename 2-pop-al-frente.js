function removeFirst(arr) {
  const removed = arr.pop();
  if (arr.length > 0) {
    const firstItem = removeFirst(arr);
    arr.push(removed);
    return firstItem;
  } else {
    return removed;
  }
}
const myArr = [1, 2, 3, 4, 5];
const removedItem = removeFirst(myArr);

console.log(removedItem); // 1
console.log(myArr); // [2, 3, 4, 5]
