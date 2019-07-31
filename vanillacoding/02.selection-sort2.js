function selectionSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    var min = i;

    for (var j = i + 1; j < arr.length; j++) {
      if(arr[i] > arr[j]) min = j;
    }

    if(min !== i) {
      var minValue = arr[min];
      arr[min] = arr[i];
      arr[i] = minValue;
    }
  }
  return arr;
}

console.log(selectionSort([1,5,3,1,5,6,7,1]));