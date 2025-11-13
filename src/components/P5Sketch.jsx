import {useRef, useEffect} from 'react';
import p5 from 'p5';

export const P5Sketch = () => {
    // div that holds p5 sketch
    const sketchRef = useRef(null);

    useEffect(() => {
        const sketch = (p) => {
            let stars = [];
            p.setup = () => {
                p.createCanvas(p.windowWidth, p.windowHeight);
                // star = new Star(width / 2, 0, 30, 15, 5, 0);
            };

            p.draw = () => {
                p.colorMode(p.HSL)
                p.noStroke();
                p.clear();



                if (p.frameCount % 5 == 0 && (p.mouseX != p.pmouseX || p.mouseY != p.pmouseY)) {
                    let star = new Star(p.mouseX, p.mouseY, 30,15,5,0)
                    stars.push(star)
                }
                for (let star of stars) {
                    star.drawStar();
                }

                // p.textAlign(p.CENTER)
                // p.textSize(100)
                // console.log(p.windowWidth)
                // if (p.windowWidth < 650) {
                //     p.text("Hi, I'm Milena", p.windowWidth/2, p.windowHeight/3, 0)
                // }
                // else {
                    
                //     p.text("Hi, I'm Milena", p.windowWidth/2, p.windowHeight * 0.5)
                // }
                // p.textSize(30)
                
           
            }

            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight);
            }

            class Star {
                constructor(x, y, radius1, radius2, npoints, rot) {
                    this.x = x;
                    this.y = y;
                    this.radius1 = radius1;
                    this.radius2 = radius2;
                    this.npoints = npoints;
                    this.rot = rot
                    this.color = p.color(p.random(360), 100, 90);
                    this.noiseOffset = p.random(100);
                }

                drawStar() {
                    let angle = p.TWO_PI / this.npoints;
                    let halfAngle = angle / 2.0;

                    p.push();
                    p.translate(this.x, this.y);
                    p.rotate(this.rot);
                    p.fill(this.color);
                    p.beginShape();
                    for (let a = 0; a < p.TWO_PI; a += angle) {
                        let sx = 0 + p.cos(a) * this.radius1;
                        let sy = 0 + p.sin(a) * this.radius1;
                        p.vertex(sx, sy);
                        sx = 0 + p.cos(a + halfAngle) * this.radius2;
                        sy = 0 + p.sin(a + halfAngle) * this.radius2;
                        p.vertex(sx, sy);
                    }
                    p.endShape(p.CLOSE);
                    p.pop();
                    this.rot += 0.01;
                    this.y += 1;
                    this.x += p.map(p.noise(this.noiseOffset), 0, 1, -1.5, 1.5);
                    this.noiseOffset += 0.01;
                    this.light += 0.01;
                }
            }

        }

        let myp5 = new p5(sketch, sketchRef.current);

        return () => {
            myp5.remove();
        }
    }, []);

    return <div ref={sketchRef}></div>;
}