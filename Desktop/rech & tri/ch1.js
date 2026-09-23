const arr = [13,8,102020,20]; 
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0;j< arr.length -i ;j++) {
      if (arr[j] > arr[j + 1]) {
        let x = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = x;
      }
    }
  }
console.log(arr); 