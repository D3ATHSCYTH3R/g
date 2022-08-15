function preload(){

}
function setup(){
    video=createCapture(VIDEO);
    video.size(570,515);
    video.position(1250,175);

    canvas=createCanvas(570,515);
    canvas.position(200, 175);
    
    posenet=ml5.poseNet(video, ln);
    posenet.on('pose',nl);
}
function draw(){
    background('azure');
}
function ln(){
    console.log('◊');
}
function nl(results){
    if(results.length>0){
    console.log('◊ 2.0');
    console.log(results);
    }

}