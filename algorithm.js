const arr123 = [1,20,66,198,517,948,1000,5023];

function linearSearch(array, target){
  for(let i = 0; i < array.length; i++){
    if(target === array[i]) return i;
  }
  return -1;
}
console.log(linearSearch(arr123,5023));
console.log(linearSearch(arr123,1));
console.log(linearSearch(arr123,7));

console.log('========');

function binarySearch(array,target){
  
  startIndex = 0; 
  endIndex = array.length-1;
  halfIndex = Math.floor((endIndex - startIndex) / 2);
  flag = true;
  indexOfTarget = '';
  
  while(flag) {

    if(target < array[halfIndex] && target >= array[startIndex]){
      endIndex = halfIndex;
      halfIndex = Math.floor((endIndex - startIndex) / 2) ;
    }
    else if(target > array[halfIndex] && target <= array[endIndex]){
      startIndex = halfIndex;
      halfIndex = (endIndex-startIndex === 1) ? startIndex + 1 : startIndex + Math.floor((endIndex - startIndex) / 2);
    }
    else if(target === array[halfIndex]){
      indexOfTarget = halfIndex;
      flag = false;
    }
    else{ 
      indexOfTarget = -1;
      flag = false;
    }
  }

  return indexOfTarget;
}
console.log(binarySearch(arr123,1));
console.log(binarySearch(arr123,20));
console.log(binarySearch(arr123,66));
console.log(binarySearch(arr123,198));
console.log(binarySearch(arr123,517));
console.log(binarySearch(arr123,948));
console.log(binarySearch(arr123,1000));
console.log(binarySearch(arr123,5023)); 
console.log(binarySearch(arr123,-1)); 
console.log(binarySearch(arr123,10000));

console.log('========');

function bubbleSort(array){
  let compareCount = array.length;
  let temp = '';

  for(i = 0; i < array.length; i ++){
    for(let j = 0; j < compareCount; j++){
      if(array[j] > array[j+1]){
        temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
    compareCount = compareCount - 1;
  }
  return array;
}
console.log(bubbleSort([3, 1, 0, -1, 4, 2]));
console.log(bubbleSort([5, 2, 1, 3, 4, 6]));
console.log(bubbleSort([2, 4, 5, 1, 3]));