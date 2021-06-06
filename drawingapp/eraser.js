//This is the eraser tool; it uses the slider feature therefore you can change the size of the eraser.
function eraser(slider) {
    this.name = "EraserTool";
    this.icon = "assets/eraser.png";
    this.strokeColor = "white";
 
//The strokeweight is determined by slider value; the slider setup can be found in the sketch.js file.
//The stroke colour will be white because the original canvas is white.
//We are drawing a simple line when the mouse is pressed using previous mouse x/previous mouse y and mouse x/mouse y. This will act as the eraser.
    this.draw = function() {
        strokeWeight(slider.value());
        stroke(this.strokeColor);
        if (mouseIsPressed) {
            line(pmouseX, pmouseY, mouseX, mouseY);
        }
    
    }
	
 //When we unselect the tool, the slider value returns to 1; this is to reduce bugs on other tools.   
     this.unselectTool = function() {
        slider.value(1);
    }
}