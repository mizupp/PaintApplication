//UNDER CONSTRUCTION
//UNDER CONSTRUCTION
//UNDER CONSTRUCTION
//UNDER CONSTRUCTION
//UNDER CONSTRUCTION
//UNDER CONSTRUCTION
//UNDER CONSTRUCTION
//UNDER CONSTRUCTION
//UNDER CONSTRUCTION
//UNDER CONSTRUCTION
//UNDER CONSTRUCTION
//UNDER CONSTRUCTION
//UNDER CONSTRUCTION
//UNDER CONSTRUCTION
//UNDER CONSTRUCTION
//UNDER CONSTRUCTION
//UNDER CONSTRUCTION
//UNDER CONSTRUCTION

//Currently using: https://p5js.org/examples/dom-input-and-button.html for the text tool. 
//Trying to add feature that allows the text which is "inputted" to move around
//For now we can only move random input text around. 
function textTool(){
	this.icon = "assets/text.png";
	this.name = "textstuff";

	var radius = 200;
	var textspace = [
		{ x: 50, y: 50, color:' #fff', active: false },
	]

	var input;
	var button;
	var greeting;
	var newtext;


// Draw on the canvas.
  this.draw = function() {
	  
//background must stay white so that you can move the text around without drawing the text across canvas.
	background('#fff');
	if (textspace.length > 0) {
		for (var i = 0; i < textspace.length; i++) {
			var texttext = textspace[i];
//			noStroke();
			strokeWeight(2);
			fill(currentColour);
			  textAlign(CENTER);
	  		textSize(32);
			text("can move around demo", texttext.x, texttext.y, radius, radius);
		}
	}
//Using P5 dom to create input and position it	  
	  input = createInput();
	  input.position(360,65);
	  
	  newtext = input.value();
	  input.value('');
//Using p5 dom to create button and position button; this is to input the text
	  button = createButton('Enter');
	  button.position(input.x + input.width, 65);
//	  button.mousePressed();

//	  greeting = createElement('h2', ' ');
//	  greeting.position(250, 65);


//Calling the functions
	  
//    this.greet();
	this.mousePressed();
	this.mouseDragged();	
}

  
// Run when the mouse/touch is down.
this.mousePressed = function() {
	if (textspace.length > 0) {

		for (var i = 0; i < textspace.length; i++) {
			var texttext = textspace[i],
					distance = dist(mouseX, mouseY, texttext.x, texttext.y);
			if (distance < radius) {
				texttext.active = true;
//				texttext.color = '#f00';
			} else {
				texttext.active = false;
//				texttext.color = '#000';
				cursor(TEXT);
			}
		}
	}
  // Prevent default functionality.
  return false;
}

// Run when the mouse/touch is dragging.
this.mouseDragged = function() {
	if(mouseIsPressed){
	if (textspace.length > 0) {
		for (var i = 0; i < textspace.length; i++) {
			var texttext = textspace[i];
			if (texttext.active) {
				texttext.x = mouseX;
				texttext.y = mouseY;
				cursor(HAND);
				break;
			}
		}
	}
	}
  // Prevent default functionality.
  return false;
}


//Function which draws text across the screen randomly. We don't need this for now but will consider for future design.
//this.greet = function() {
//	  var newtext = input.value();
////	  greeting.html(name);
//	  input.value('');
//
//	  for (var i=0; i<200; i++) {
//		push();
////		translate(random(width), random(height));
////		rotate(random(2*PI));
//		text(newtext, 360, 90);
//		pop();
//	  }
//	}
}
