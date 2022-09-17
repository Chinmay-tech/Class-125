noseX=0;
noseY=0;
leftWrist=0;
rightWrist=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550, 550);
    canvas=createCanvas(550, 450 );
    canvas.position(590,100);
    pose_net=ml5.poseNet(video, modelLoaded);
    pose_net.on('pose',gotPoses);
}


function modelLoaded(){
    console.log('model is loaded');
}

function gotPoses(results,error){
    if(results.length > 0){
        console.log(results);

        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftWrist=results[0].pose.leftWrist.x;
        rightWrist=results[0].pose.rightWrist.x;
        difference=floor(leftWrist-rightWrist );
    }
}

function draw(){
    background('grey');
    document.getElementById("square_side").innerHTML="width and height of the square will be:  "+difference+" px";
    fill('#ff9900') ;
    stroke('#ff9900');
    square(noseX,noseY,difference);
}
