function GetOTP(){
   const input=parseInt(document.getElementById("inpp"));
   const ress=document.getElementById("ress");
   const red=Math.floor(Math.random()*256);
   const green=Math.floor(Math.random()*256);
   const blue=Math.floor(Math.random()*256);
   document.body.style.background="rgb("+red+","+green+","+blue+")"

   
   let valueIs=Math.floor(Math.random()*99999);
   // let typoo=console.log(typeof valueIs);
   
   ress.textContent=valueIs;
   // ress.textContent=typoo;
}