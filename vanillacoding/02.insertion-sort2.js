function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var value = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > value; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = value;
  }
  return arr;
}

console.log(insertionSort([5,4,2,1,45,5]));