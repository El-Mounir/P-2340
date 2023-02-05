//list of available features
let f1 = document.getElementById("s2ctn2cf1");
let f2 = document.getElementById("s2ctn2cf2");
let f3 = document.getElementById("s2ctn2cf3");
//set first and second features on display as default
const statis=()=>{
    for (let f=0;f < 3 ;f++ ){
        if(f > 1 ) {
            f3.style.display="none";
            document.getElementById("slide2").style.backgroundColor="rgb(255, 255, 255)";
        } else {
            f2.style.display="flex";
            f1.style.display="flex";
            document.getElementById("slide1").style.backgroundColor="rgb(30, 30, 167)";
        }
    }
};
//will slide the features boxes and displays 2 features each time
const switching =(event) =>{
    if(event.target == document.getElementById("sec2rtar")|| (event.target == document.getElementById("slide2"))) {
      for (let f=0;f < 3;f++ ) {
          if (f3.style.display="none" && f < 2) {
              f1.style.display="none";
              f3.style.display="flex";
              document.getElementById("slide2").style.backgroundColor="rgb(30, 30, 167)";
              document.getElementById("slide1").style.backgroundColor="rgb(255, 255, 255)";
            }
        }
    };
    if(event.target == document.getElementById("sec2lfar")||(event.target == document.getElementById("slide1"))) {
        for (let f=0;f < 3 ;f++ ) {
          if (f1.style.display="none" && f > 0) {
              f3.style.display="none";
              f1.style.display="flex";
              document.getElementById("slide1").style.backgroundColor="rgb(30, 30, 167)";
              document.getElementById("slide2").style.backgroundColor="rgb(255, 255, 255)";
          }
        }
    }
};


statis();
document.getElementById("sec2rtar").onclick=switching;
document.getElementById("sec2lfar").onclick=switching;
document.getElementById("slide1").onclick=switching;
document.getElementById("slide2").onclick=switching;

