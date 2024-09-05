function checkEvenOrOdd(){
const input=parseInt(document.getElementById("NumInp").value);
const result=document.getElementById("result");

if(isNaN(input)){
    result.textContent="Enter a valid number";
}
else if(input%2==0){
    result.textContent=`${input} is an Even number`;
}
else{
    result.textContent=`${input} is an Odd Number`;
}
}
