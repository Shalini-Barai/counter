let cnt=document.getElementById("cnt");
let inc=document.getElementById("inc");
let dct=document.getElementById("dct");
let clr=document.getElementById("clr");
let sec=document.getElementById("second");
var c=0;
inc.addEventListener("click",()=>{
      c++;
      console.log(c);
      cnt.textContent=c;
})
dct.addEventListener("click",()=>{
      if(c>=1){
      c--;
      }
      else{
        sec.innerText="Error : Cannot go below 0";
      }
      console.log(c);
      cnt.textContent=c;
})
clr.addEventListener("click",()=>{
      cnt.textContent="";
      c=0;
      cnt.textContent="0";
      sec.innerText="";
})