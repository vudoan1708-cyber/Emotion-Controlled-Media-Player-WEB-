class StarDots {
  constructor(i, j, size) {
    this.i = i;
    this.j = j;
    this.x = width / 5 + i * 15.4;
    this.y = height / 5 + j * 15.4;
    this.size = size;

    this.subt = 0.01;
    this.acc = 0.000125;
  }

  update() {
    this.subt += this.acc;
    this.acc += 0.0000000000001;
  }

  show() {
    ellipse(this.x, this.y, 20);
  }

  showZoneofTheAccepted() {

    // for animation
    if (this.subt <= 1) this.update();
    
    // 4 marks on 4 corners relative to the clicked point
    const marks = [this.i - this.subt, this.i + this.subt, this.j - this.subt, this.j + this.subt];

    // create new properties from those marks, relatively to the map
    const newPos = {
      x1: width / 5 + marks[0] * 15.4,
      x2: width / 5 + marks[1] * 15.4,
      y1: height / 5 + marks[2] * 15.4,
      y2: height / 5 + marks[3] * 15.4,
    } 

    // create a white rect from those points
    push();
      noFill();
      strokeWeight(2.5);
      stroke(0, 180, 0, 100);
      beginShape();
        vertex(newPos.x1, newPos.y1);
        vertex(newPos.x2, newPos.y1);
        vertex(newPos.x2, newPos.y2);
        vertex(newPos.x1, newPos.y2);
      endShape(CLOSE);
    pop();
  }

  onHover() {
    if (!isClicked) {
      if (mouseX > this.x - this.size / 2 && mouseX < this.x + this.size / 2) {
        if (mouseY > this.y - this.size / 2 && mouseY < this.y + this.size / 2) {
          return true;
        }
      } else return false;
    }
  }
}