function preload(){
}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
image(video, 0, 0, 640, 480);
let c = color('black');
fill(c);
noStroke();
rect(0, 25, 20, 550);
c = color('black');
fill(c);
noStroke();
rect(620, 25, 20, 550);
c = color('black');
fill(c);
noStroke();
rect(15, 0, 575, 20);
c = color('black');
fill(c);
noStroke();
rect(20, 461, 575, 20);
c = color(255, 32, 82);
fill(c);
noStroke();
ellipse(25, 25, 80, 80);
c = color(153, 102, 254);
fill(c);
ellipse(620, 25, 80, 80);
c = color(0, 127, 255);
fill(c);
ellipse(620, 460, 80, 80);
c = color(255, 167, 0);
fill(c);
ellipse(25, 460, 80, 80);
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint(){
    tint_color=document.getElementById("color_name").value;
    
}

function take_snapshot(){
    save("student_name.png");
}