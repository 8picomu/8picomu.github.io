function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    a = createVector(70, 0);
    a.rotate(radians(0));
    b = createVector(70, 0);
    b.rotate(radians(120));
    c = createVector(70, 0);
    c.rotate(radians(240));
}

function draw() {
    background(0);

    var p = createVector(mouseX, mouseY);

    var trian = createVector(width / 2, height / 2);

    var diffRadi = atan2(p.y - trian.y, p.x - trian.x);
    push();
    translate(width/2, height/2);
    rotate(diffRadi);

    triangle(a.x, a.y, b.x, b.y, c.x, c.y);
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}