//USES ALPHA AND MIX OF TEMPLATE CODE
function HighlighterBrush(){
	//set an icon and a name for the object
	this.icon = "assets/highlighterBrush.png";
	this.name = "HighlighterBrush";

	var previousMouseX = -1;
	var previousMouseY = -1;

	this.draw = function(){

//THIS WILL PICK UP ON THE CURRENT COLOUR THAT THE USER HAS PICKED SINCE WE ARE UISNG THE P5 GUI LIBRARY AND THEN APPLY AN ALPHA FEATURE TO IT. THIS GIVES TRANSPARENCY TO THE TOOL.
		var c = color(currentColour);
        c.setAlpha(144);
		//if the mouse is pressed
		if(mouseIsPressed){
			cursor(ARROW);
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
            noStroke()
            fill(c);
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
				
				
//WE ARE USING THE RECT FUNCTION FOR THE HIGHLIGHTER TOOL SINCE IT SEEMED MOST APPROPRIATE FOR THE "HIGHLIGHTER" EFFECT. IT IS USING A SIMILAR TECHNIQUE AS APPLIED FOR THE RECT SHAPE TOOL.
				rect(previousMouseX, previousMouseY, mouseX-previousMouseX, 15);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		//try and comment out these lines and see what happens!
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};
}