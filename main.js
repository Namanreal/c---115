function preload(){

}
function setup(){
   canvas = createCanvas(300,300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300 , 300);
   video.hide();

   poseNet = ml5.poseNet(video , modelLoaded);
   poseNet.on('pose' , gotPosses);
}

function draw(){

    Image(video , 0 , 0 , 300 , 300);
}

function modelLoaded(){
    console.log("PoseNet is Initialized")
}

function take_snapshot(){
    save('myFilterImage.jpg');
}