let input="30 50 30 50 20 50 50 20 50 50 50";
console.log(input)
let inn=input.split(" ").map(Number);
let pairVal=0;
let emp=[];
// console.log(inn);
for(i of inn){
  if(!emp.includes(i)){
    emp.push(i)
  }
}
for(j of emp){
  let c=0;
  for(k of inn){
    if(j==k){
      c++
    }
  }
  pairVal=pairVal+Math.floor(c/2);
}
console.log(pairVal);