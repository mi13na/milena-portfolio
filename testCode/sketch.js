stars = [];
projects = ["Chef's Plaza", "Restaurant Battle", "FridgeBuddy"]
let s = 50
let offset = 20
function setup() {
    colorMode(HSL)
    noStroke();
    createCanvas(windowWidth, windowHeight);
    background(220);
    star = new Star(200, height/2, 100, 50, 5, 0);
    arrow = new Arrow (star.x + star.radius1 + offset,star.y, 50,0,200);
    arrow1 = new Arrow(star.x - 50 - star.radius1 - offset,star.y,50,1,200);
}

function draw() {
    arrow1.fill = 200;
    arrow.fill = 200;
    
    colorMode(RGB)
    background(255);
    // draw  right arrow

    // if(arrow1.isMouseInArrow()){
    //     console.log("in arrow")
    //     arrow1.fill = 128
    // } else if (arrow.isMouseInArrow()) {
    //     console.log("in right")
    //     arrow.fill = 128
    // } else {
    //     arrow1.fill = 200;
    //     arrow.fill = 200
    // }

    star.drawStaticStar()
    arrow.drawArrow();
    arrow1.drawArrow()
}

function mouseClicked() {
    if (arrow1.mouseInArrow()) {
        star.project -= 1;
        if(star.project < 0){
            star.project = projects.length -1
        }
        colorMode(HSL)
        star.color = color(random(360), 100, 90);
    }
    else if (arrow.mouseInArrow()) {
        star.project = (star.project + 1) % 3
        colorMode(HSL)
        star.color = color(random(360), 100, 90);
    }
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

class Arrow {
    constructor(x, y, size, dir, fill) {
        this.x = x
        this.y = y
        this.size = size
        this.dir = dir
        this.fill = fill
    }

    drawArrow() {
        // draws from top left corner
        this.mouseInArrow();
        fill(this.fill)
        if (this.dir == 0) {
            beginShape();
            vertex(this.x, this.y)
            vertex(this.x+this.size*Math.sqrt(3)/2,this.y+this.size*1/2)
            vertex(this.x, this.y+this.size)
            endShape(CLOSE);
        }
        else if (this.dir == 1) {
            beginShape();
            vertex(this.x+this.size*Math.sqrt(3)/2, this.y)
            vertex(this.x,this.y+this.size*1/2)
            vertex(this.x+this.size*Math.sqrt(3)/2, this.y+this.size)
            endShape(CLOSE);
        }
    }

    mouseInArrow() {
        //center
        let x=this.x + this.size/2
        let y = this.y +this.size/2
        if(dist(mouseX,mouseY,x,y) <this.size/2.5) {
            this.fill = 128;
            return true
        }
        return false
    }
}

class Star {
    constructor(x, y, radius1, radius2, npoints, rot) {
        this.x = x;
        this.y = y;
        this.radius1 = radius1;
        this.radius2 = radius2;
        this.npoints = npoints;
        this.rot = rot
        this.color = color(random(360), 100, 90);
        this.noiseOffset = random(100);
        this.project = 0;
    }

    drawStaticStar() {

        let angle = TWO_PI / this.npoints;
        let halfAngle = angle / 2.0;

        fill(this.color);
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
            let sx = this.x + cos(a - HALF_PI) * this.radius1;
            let sy = this.y + sin(a - HALF_PI) * this.radius1;
            vertex(sx, sy);
            sx = this.x + cos(a + halfAngle - HALF_PI) * this.radius2;
            sy = this.y + sin(a + halfAngle - HALF_PI) * this.radius2;
            vertex(sx, sy);
        }
        endShape(CLOSE);
        fill(0)
        textAlign(CENTER)
        text(projects[this.project], this.x, this.y)
    }

    drawStar() {
        let angle = TWO_PI / this.npoints;
        let halfAngle = angle / 2.0;

        push();
        translate(this.x, this.y);
        rotate(this.rot);
        fill(this.color);
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
            let sx = 0 + cos(a) * this.radius1;
            let sy = 0 + sin(a) * this.radius1;
            vertex(sx, sy);
            sx = 0 + cos(a + halfAngle) * this.radius2;
            sy = 0 + sin(a + halfAngle) * this.radius2;
            vertex(sx, sy);
        }
        endShape(CLOSE);
        pop();
        this.rot += 0.01;
        this.y += 1;
        this.x += map(noise(this.noiseOffset), 0, 1, -1.5, 1.5);
        this.noiseOffset += 0.01;
        this.light += 0.01;
    }
}
