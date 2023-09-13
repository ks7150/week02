function setup() {
    createCanvas (600,600)
    background (200,234,240)
}

function draw() {
    fill("white")
    strokeWeight(5)
    arc(250, 250, 80, 80, 0, PI+QUARTER_PI, [PIE])
    arc(200, 200, 80, 80, 0, PI+QUARTER_PI, [PIE])
    noFill();
    arc(200, 255, 60, 60, HALF_PI, PI);
    fill("black")
    ellipse (250,250,20,20)
ellipse(200,200,20,20)
}
