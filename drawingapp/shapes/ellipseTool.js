//Template code and mix of new code
//This is a function called "ellipseDraw". It contains the ellipse icon - it fetching the image from the assests folder.
function ellipseDraw(){
	this.icon = "assets/ellipseimg.png";
	this.name = "ellipseimg";
//We are declaring the variables "StartMouseX" and "StartMouseY". Variable drawing is set to false (Boolean).
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;


//if both of the above conditions are true then we set StartMouseX equal to mouseX (which is a p5 command that uses where the mouse is on the screen along the x axis). StartMouseY is equal to mouseY (which is where the mouse is on the screen along the y axis).
//When the mouseIsPressed, we set the drawing to true whilst before it was false.
	this.draw = function(){

		if(mouseIsPressed){
			if(startMouseX == -1){
				cursor(CROSS);
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				
//We are calling loadPixels; this allows the loading of pixel data that will be displayed on the window. This will be called before reading (as images are declared at the top). 
				loadPixels();
			}
//updatePixels updates the display window with the data in the pixels array; we use this with the "loadPixels()". This is required so that the changes are actually applied. 
			else{
				
//THIS IS WHERE MOST OF THE CHANGES HAVE BEEN MADE
//THIS IS WHERE MOST OF THE CHANGES HAVE BEEN MADE
//THIS IS WHERE MOST OF THE CHANGES HAVE BEEN MADE
//We are using the gui colour picker there it is important that the fill of ellipse is the same as the "current colour" chosen by user.
                noStroke();
				updatePixels();
                fill(currentColour);
//We can draw an ellipse using startMouseX, startMouseY, mouseX and mouseY; this enables us to draw an ellipse sized to our choice; from the point that we "press" to the point on the screen that the mouse goes to.
				ellipse(startMouseX, startMouseY, mouseX -startMouseX, mouseY - startMouseY,5,5);
			}

		}
//for drawing, it saves the progress of the line so that we aren't drawing a different line each time. It does this by turning the drawing to false and setting startMouseX and startMouseY back to -1 instead of mouseX and mouseY.
		else if(drawing){
				ellipse(startMouseX, startMouseY, mouseX -startMouseX, mouseY - startMouseY,5,5);
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}