var circles = [];

function setup() {
    createCanvas(640, 360);

    var overlapping = false;

    var protection = 0;

    while (circles.length < 25) {
        var circle = {
            x: random(width),
            y: random(height),
            r: random(12, 36)
        }

        var overlapping = false;

        for (var j = 0; j < circles.length; j++) {
            var other = circles[j];
            var d = dist(circle.x, circle.y, other.x, other.y);
            if (d < circle.r + other.r) {
                overlapping = true;
            }
        }

        if(!overlapping) {
            circles.push(circle);
        }

        protection++;
        if(protection > 10000) {
            break;
        }
    } 

    for (var i = 0; i < circles.length; i++) {
        fill(255, 0, 175, 100);
        noStroke();
        ellipse(circles[i].x, circles[i].y, circles[i].r*2, circles[i].r*2);
    }

    background(190, 11);
    fill(190);
    stroke(255, 0, 175);
    strokeWeight(11);
    rect(50, 10, 10, 100);
    line(60, 10, 150, 10); 
    line(150, 10, 150, 50); 
    line(150, 50, 60, 50);
    rect(190, 10, 100, 10);
    rect(190, 12, 10, 40);
    line(190, 55, 270, 55); 
    line(270, 55, 270, 109); 
    line(270, 109, 190, 109);

    ellipseMode(CENTER);
    rectMode(CENTER);
    fill(255, 150, 150);
    noStroke();
    rect(540, 165, 20, 50);

    fill(90, 50, 255);
    ellipse(540, 105, 70, 70);

    fill(20, 255, 20);
    noStroke();
    ellipse(523, 105, 10, 12);
    ellipse(549, 105, 10, 12);

    stroke(255, 0, 175);
    strokeWeight(3);
    line(540, 190, 540, 200);
    line(548, 190, 550, 200);
}

// function draw() {
//     stroke(190);
//     strokeWeight(4);
//     rect(50, 10, 10, 50);
//     arc(70, 10, 10); //line(60, 10, 70, 10); line(70, 10, 70, 20); line(70, 20, 60, 10);
//     rect(110, 10, 50, 12);
//     rect(110, 10, 10, 20);
//     arc(110, 20, 27, 25);
// }