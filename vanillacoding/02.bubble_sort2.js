function bubbleSort(arr){
  for(var i = 0; i < arr.length; i++) {
    var isSwap = false;

    for(var j = 1; j < arr.length; j++) {
      if(arr[j - 1] > arr[j]) {
        var savedJ = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = savedJ;
        isSwap = true;
      }
    }
    if(!isSwap) return arr;
  }
  return arr;
}

console.log(bubbleSort([5,3,2,1,4,5,6]));