let extracontent =document.getElementById("extracontent");
let extracontent12 =document.getElementById("extracontent12");
let extracontent13 =document.getElementById("extracontent13");
let extracontent14 =document.getElementById("extracontent14");

let readmorelink1 =document.getElementById("readmorelink1");
let readmorelink2 =document.getElementById("readmorelink2");
let readmorelink3 =document.getElementById("readmorelink3");
let readmorelink4 =document.getElementById("readmorelink4");

readmorelink1.onclick=()=>{
    if(extracontent.style.display==="none"){
        extracontent.style.display="inline";
        readmorelink1.textContent="ReadLess";
    }else{
       extracontent.style.display="none";
       readmorelink1.textContent="ReadMore";
    }
}

readmorelink2.onclick=()=>{
    if(extracontent12.style.display==="none"){
        extracontent12.style.display="inline";
        readmorelink2.textContent="ReadLess";
    }else{
       extracontent12.style.display="none";
       readmorelink2.textContent="ReadMore";
    }
}

readmorelink3.onclick=()=>{
    if(extracontent13.style.display==="none"){
        extracontent13.style.display="inline";
        readmorelink3.textContent="ReadLess";
    }else{
       extracontent13.style.display="none";
       readmorelink3.textContent="ReadMore";
    }
}

readmorelink4.onclick=()=>{
    if(extracontent14.style.display==="none"){
        extracontent14.style.display="inline";
        readmorelink4.textContent="ReadLess";
    }else{
       extracontent14.style.display="none";
       readmorelink4.textContent="ReadMore";
    }
}

