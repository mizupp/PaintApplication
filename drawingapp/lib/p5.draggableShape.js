function draggableCircle(x_,y_,w_,stroke_,fill_) {
  this.position = createVector(x_,y_);
  this.width = w_;
  this.strokeColor = stroke_;
  this.fillColor = fill_;
  this.active = 0;
  var offsetx = 0;
  var offsety = 0;
  var startOfClick = 1;
  
  
  this.update = function() {
    if(mouseIsPressed && this.active === 0 && startOfClick === 1) {
      startOfClick = 0;
      hit = collidePointCircle(mouseX, mouseY, this.position.x, this.position.y, this.width)
      if (hit) {
        this.active = 1;
        offsetx = mouseX - this.position.x;
        offsety = mouseY - this.position.y;
      }
    } else if(mouseIsPressed && this.active == 1) {
      this.position.x = mouseX - offsetx;
      this.position.y = mouseY - offsety;
    } else if(mouseIsPressed) {
      startOfClick = 0;
    } else {
      this.active = 0;
      startOfClick = 1
    } 
  }
  

  this.display = function() {
    this.update();
    stroke(this.strokeColor);
    fill(this.fillColor);
    ellipse(this.position.x,this.position.y,this.width,this.width); 
  } 
}


function draggableRect(x_,y_,w_,h_,stroke_,fill_) {
  rectMode(CORNER);
  this.position = createVector(x_,y_);
  this.width = w_;
  this.height = h_;
  this.strokeColor = stroke_;
  this.fillColor = fill_;
  this.active = 0;
  this.rounding = 0
  var offsetx = 0;
  var offsety = 0;
  var startOfClick = 1;
  
  
  this.update = function() {
    if(mouseIsPressed && this.active === 0 && startOfClick == 1) {
      startOfClick = 0;
      hit = collidePointRect(mouseX, mouseY, this.position.x, this.position.y, this.width,this.height)
      if (hit) {
        this.active = 1;
        offsetx = mouseX - this.position.x;
        offsety = mouseY - this.position.y;
      }
    } else if(mouseIsPressed && this.active == 1) {
      this.position.x = mouseX - offsetx;
      this.position.y = mouseY - offsety;
    } else if(mouseIsPressed) {
      startOfClick = 0;
    } else {
      this.active = 0;
      startOfClick = 1
    } 
  }
  

  this.display = function() {
    this.update();
    
    stroke(this.strokeColor);
    fill(this.fillColor);
    rect(this.position.x,this.position.y,this.width,this.height); 
  } 
}

function draggableTriangle(x_,y_,w_,stroke_,fill_) {
  this.position = createVector(x_,y_);
  this.width = w_;
  this.edgeOffset = this.width/2;
  this.strokeColor = stroke_;
  this.fillColor = fill_;
  this.active = 0;
  var offsetx = 0;
  var offsety = 0;
  var startOfClick = 1;
  
  
  this.update = function() {
    if(mouseIsPressed && this.active === 0 && startOfClick == 1) {
      startOfClick = 0;
      hit = collidePointTriangle(mouseX,mouseY,this.position.x-this.edgeOffset,this.position.y+this.edgeOffset,this.position.x,this.position.y-this.edgeOffset,this.position.x+this.edgeOffset, this.position.y+this.edgeOffset);
      if (hit) {
        this.active = 1;
        offsetx = mouseX - this.position.x;
        offsety = mouseY - this.position.y;
      }
    } else if(mouseIsPressed && this.active == 1) {
      this.position.x = mouseX - offsetx;
      this.position.y = mouseY - offsety;
    } else if(mouseIsPressed) {
      startOfClick = 0;
    } else {
      this.active = 0;
      startOfClick = 1
    }  
  }
  

  this.display = function() {
    this.update();
    stroke(this.strokeColor);
    fill(this.fillColor);
    triangle(this.position.x-this.edgeOffset,this.position.y+this.edgeOffset,this.position.x,this.position.y-this.edgeOffset,this.position.x+this.edgeOffset, this.position.y+this.edgeOffset)
  } 
}