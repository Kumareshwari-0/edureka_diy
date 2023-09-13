//Fibonnaci series implementation//

function fibboseries(num){
    if(num<2){
        return num;
    }
    else{
        return fibboseries(num-1)+fibboseries(num-2);
    }
}

let n=Number(prompt('Enter positive number:'));
if(n==1){
    console.log(1,2);
}
else{
    for(let i=0;i<n;i++){
        console.log(`${fibboseries(i)}`);
    }
}

//Palindrome //

var string="level";
var reverse=string.split(" ").reverse().join(" ");

if(string==reverse){
    console.log(`The word ${string}, is a palindrome.`);
}
else {console.log (`${string} and its reversed form are not equal.`);}