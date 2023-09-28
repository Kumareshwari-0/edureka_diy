// the bubble sort
var arr=[26,42,78,18,3]
n=arr.length;
function bubblesort(arr,n){
    for (let i=0;i<n-1;i++)
      for (let j=0;j<n-1;j++){
        if(arr[j]>arr[j+1]){
            var temp=arr[j]
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
      }
}
console.log('before sorting:'+arr)
bubblesort(arr,n)
console.log('after sorting:'+arr)

// the merge sort
var arr1=[26,42,78,18,3]
nu=arr1.length;
function merge(arr1,l,m,r){
    var n1=m-l+1;
    var n2=r-m;
    var L=new Array(n1);
    var R=new Array(n2);
    for (var i=0;i<n1;i++){
        L[i]=arr1[l+i];
    }
    for (var j=0;j<n2;j++){
        R[j]=arr1[m+1+j];
    }
    var j=0;
    var k=l;
    for (var i=0;i<n1 && j<n2;){
        if (L[i]<=R[j]){
            arr1[k]=L[i];
            i++
        }else{
            arr1[k]=R[j];
            j++
        }
        k++
    }
    while(i<n1){
        arr1[k]=L[i];
        i++;
        k++;
    }
    while(j<n2){
        arr1[k]=R[j];
        j++;
        k++;
    }
}
function mergesort(arr1,l,r){
    if(l>=r){
        return;
    }
    var m=l+parseInt((r-l)/2);
    mergesort(arr1,l,m);
    mergesort(arr1,m+1,r);
    merge(arr1,l,m,r);
}
console.log('before sorting:'+arr1);
mergesort(arr1,0,n-1);
console.log('after sorting:'+arr1);
