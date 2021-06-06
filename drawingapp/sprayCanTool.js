//Spraycan as constructor function. This tool uses the slider therefore you can change the size of the spraycan tool using the slider at the top of the page.
function sprayCan(slider){
    this.name = "sprayCanTool";
    this.icon = "assets/spraycan.png";
    this.draw = function(){
        //if the mouse is pressed paint on the canvas
        //spread describes how far to spread the paint from the mouse pointer
        //points holds how many pixels of paint for each mouse press.
        var points = (10+slider.value())*1.5;
        var spread = 13+slider.value();
        if(mouseIsPressed){
            strokeWeight(1);
            stroke(currentColour)
            for(var i = 0; i < points; i++){
                point(random(mouseX-spread, mouseX + spread), 
                    random(mouseY-spread, mouseY+spread));
            }
        }
		
    }
//When we unselect the tool, the slider value returns to 1; this is to reduce bugs on other tools.  
    this.unselectTool = function() {
        slider.value(1);
    }

}