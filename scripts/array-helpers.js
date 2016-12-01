function findAndRemoveFromArray(arr, predicate) {
  const index = arr.findIndex(predicate);
  if (index === -1) {
    return null;
  }
  const element = arr[index];
  arr.splice(index, 1);
  return element;
}