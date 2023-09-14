//ARRAY UNSHIFTING//

var array1 = ["orange", "mango", "apple", "guava"];


function unshifting(arr, ele) {
    for (var i = arr.length; i >= 0; i--) {
        arr[i] = arr[i - 1];
        if (i == 0) {
            arr[i] = ele;
        }
    }
}
console.log("before unshifting:...", array1);
unshifting(array1, "kiwi");
console.log(`\n \n`);
console.log("After unshifting:...", array1);

//FOREACH METHOD USING ARRAY//

var fruits = ["pineapple", "mango", "papaya", "grapes", "kiwi"];


function foreach(arrays,callback) {
    for (var i = 0; i < arrays.length; i++)
     {
        callback(arrays[i], i, arrays);
    }
}

foreach(fruits, (item, index) => {
    console.log(`${item + 1}, ${index}`);
});