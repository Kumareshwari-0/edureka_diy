var arr = [256, 32, 187, 56, 4, 99];

function linearsearching(array, target) {
  for (var i = 0; i < array.length; i++)
  {
    if (array[i] == target) {
      return i;
    }
  }
  return -1;
}
var result = linearsearching(arr, 99);

if (result != -1) {
  console.log("Element found in arr", result);
} else {
  console.log("Element is not found");
}


var n=[4,32,56,99,187,256];

function binaryseraching(array,target){
  let front=0;
  let rear=array.length-1;

  while(front<=rear)
  {
    let centre=Math.floor((front+rear)/2);

    if(arr[centre]==target){
      return centre;
    }
    else if(target<array[centre]){
      rear=centre-1;
    }
    else{
      front=centre+1;
    }
  }
  return -1;
}

var results=binaryseraching(n,32);

if(results != -1)
{
  console.log("Element found in n",results);
}
else{
  console.log("not found");
}
