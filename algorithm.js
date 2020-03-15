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
  
  let startIndex = 0; 
  let endIndex = array.length-1;
  let halfIndex = Math.floor((endIndex - startIndex) / 2);
  let flag = true;
  let indexOfTarget = '';
  
  while(flag) {

    if(target < array[halfIndex] && endIndex - startIndex > 1){
      endIndex = halfIndex;
      halfIndex = Math.floor((endIndex - startIndex) / 2) ;
    }
    else if(target > array[halfIndex] &&  endIndex - startIndex > 1){
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
console.log(binarySearch(arr123,22));
console.log(binarySearch(arr123,-55)); 
console.log(binarySearch(arr123,10000));

console.log('========');

function recursiveBinarySearch(array,target,startIndex,endIndex){
  startIndex = (startIndex === undefined) ? 0 : startIndex;
  endIndex = (endIndex === undefined) ? array.length-1 : endIndex;

  let halfIndex = Math.floor((startIndex+endIndex) / 2);

  if( target > array[halfIndex] && endIndex - startIndex > 0){
    return recursiveBinarySearch(array,target,halfIndex+1,endIndex);
  }else if( target < array[halfIndex]  && endIndex - startIndex > 0){
    return recursiveBinarySearch(array,target,startIndex,halfIndex - 1);
  }else if( target === array[halfIndex]){
    return indexOfTarget = halfIndex;
  }else {
    return -1;
  }
}
console.log(recursiveBinarySearch(arr123,1,2,arr123.length));
console.log(recursiveBinarySearch(arr123,20,3,arr123.length));
console.log(recursiveBinarySearch(arr123,66));
console.log(recursiveBinarySearch(arr123,198));
console.log(recursiveBinarySearch(arr123,517));
console.log(recursiveBinarySearch(arr123,948));
console.log(recursiveBinarySearch(arr123,1000));
console.log(recursiveBinarySearch(arr123,5023,1,3));
console.log(recursiveBinarySearch(arr123,5000));
console.log(recursiveBinarySearch(arr123,999));
console.log(recursiveBinarySearch(arr123,1004));
console.log(recursiveBinarySearch(arr123,22));
console.log(recursiveBinarySearch(arr123,-1));
console.log('========');

function bubbleSort(array){
  let compareCount = array.length;
  let temp = '';

  for(let i = 0; i < array.length; i ++){
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