statius="";
objects=[];
function preload(){
    img=loadImage("bottle.jpg");
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
     objects=results;
}
function draw(){
    image(img,0,0,640,420);
    if(statius != ""){
        for(i=0; i<objects.length; i++){
            fill("red");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("red");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}