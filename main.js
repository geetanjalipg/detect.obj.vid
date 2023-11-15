video="";
status="";
objects=[];

function preload(){
    video = createVideo('video.mp4');
     video.hide();
}

function setup(){
    canvas= createCanvas(480,380);
    canvas.center();
}
function draw(){
    image(video, 0 , 0, 480,380);
    if(status !="")
    {
objectDetector.detect(video, gotResult);
for(i=0; i<objects.length; i++){

    document.getElementById("status").innerHTML= "status : Objects Detected"
    document.getElementById("number_of_obejcts").innerHTML = " Number of obejcts detected are " +  obejcts.length;
    fill ("white");
    percent = floor(obejcts[i].confidence* 100);
    text(obejcts[i].label + " ")+ percent + "%" , obejcts [i].x + 15 , obejcts[i].y + 15;
    noFill();
    stroke("white");
    rect(obejcts[i].x,objects[i].width,obejcts[i].height);

}

    }


}
function start(){
objectDetector = ml5.objectDetector('cocossd ', modelLoaded);
document.getElementById("status").innerHTML = " Status : Detect Objects";

}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true ;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotResult(error, results){
    if(error){
        console.log(error);

    }
    console.log(results);
    objects=results;
}