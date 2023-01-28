//hides all features descriptions and displays the first image.
const statis=()=>{
    if ((document.getElementById("slide1")!="rgb(30, 30, 167)") && ((document.getElementById("slide2")!="rgb(30, 30, 167)")) && (document.getElementById("slide3")!="rgb(30, 30, 167)")) { 
        document.getElementById("description1").style.display="none";
        document.getElementById("description2").style.display="none";
        document.getElementById("description3").style.display="none";
        document.getElementById("feature2").hidden = true;
        document.getElementById("feature3").hidden = true;
    }
}
//will switch the colors of the selected buttons and hide the image and its description
const switching =(event) =>{
    if (event.target == document.getElementById("slide1") || (event.target == document.getElementById("feature1"))) {
        document.getElementById("slide1").style.backgroundColor="rgb(30, 30, 167)";
        document.getElementById("feature1").hidden= false;
        document.getElementById("feature2").hidden = true;
        document.getElementById("feature3").hidden = true;
        document.getElementById("slide2").style.backgroundColor="rgb(240, 240, 227)";
        document.getElementById("slide3").style.backgroundColor="rgb(240, 240, 227)";
        document.getElementById("description1").style.display="inline-flex";
        document.getElementById("description2").style.display="none";
        document.getElementById("description3").style.display="none";
        location.href="#slide1";
    } else if (event.target == document.getElementById("slide2")||(event.target == document.getElementById("feature2"))) {
        document.getElementById("slide2").style.backgroundColor="rgb(30, 30, 167)";
        document.getElementById("feature2").hidden= false;
        document.getElementById("feature1").hidden = true;
        document.getElementById("feature3").hidden = true;
        document.getElementById("slide1").style.backgroundColor="rgb(240, 240, 227)";
        document.getElementById("slide3").style.backgroundColor="rgb(240, 240, 227)";
        document.getElementById("description2").style.display="inline-flex";
        document.getElementById("description1").style.display="none";
        document.getElementById("description3").style.display="none";
        location.href="#slide1";
    } else if (event.target == document.getElementById("slide3")||(event.target == document.getElementById("feature3"))) {
        document.getElementById("slide3").style.backgroundColor="rgb(30, 30, 167)";
        document.getElementById("feature3").hidden= false;
        document.getElementById("feature1").hidden = true;
        document.getElementById("feature2").hidden = true;
        document.getElementById("slide1").style.backgroundColor="rgb(240, 240, 227)";
        document.getElementById("slide2").style.backgroundColor="rgb(240, 240, 227)";
        document.getElementById("description3").style.display="inline-flex";
        document.getElementById("description1").style.display="none";
        document.getElementById("description2").style.display="none";
        location.href="#slide1";
    }
}
if(window.innerWidth > 568){
   statis();
   document.getElementById("slide1").onclick=switching;
   document.getElementById("slide2").onclick=switching;
   document.getElementById("slide3").onclick=switching;
   document.getElementById("feature1").onclick=switching;
   document.getElementById("feature2").onclick=switching;
   document.getElementById("feature3").onclick=switching;
};
