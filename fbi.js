statius="";
function preload(){
    img=loadImage("Fruit.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    od=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";
}
function modelloaded(){
    statius=true;
    console.log="model is loaded";
    od.detect(img,gotResult);
}
function gotResult(error,results){
     if(error){
        console.error(error);
     }
     console.log(results);
}