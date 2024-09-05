let one=[1,3,4,5,2];
let two=[2,4,3,1,7,5,15];
let len=0;
let c=0;
if(one.length<two.length){
    len=one.length;
}
else{
    len=two.length
}
console.log(len);
for(i of one){
    
    if(two.includes(i)){
        c++;
    }
}
console.log(c)
if(len==c){
    console.log("arr1[] is subset of arr2[]")
}
else{
    console.log("arr1[] is not subset of arr2[]")
}
