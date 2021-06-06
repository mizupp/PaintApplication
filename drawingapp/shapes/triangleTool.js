//UNDER CONSTRUCTION
//UNDER CONSTRUCTION

//This is a function is to drawn the triangle tool. It contains the triangle icon - it fetching the image from the assests folder.
function triangleDraw(){
	this.icon = "assets/triangleimg.png";
	this.name = "triangleimg";
//We are declaring the variables "StartMouseX" and "StartMouseY". Variable drawing is set to false (Boolean).
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

//if the mouse is pressed then user will be able to paint on the canvas. This tool is similar to the other basic tool shapes. When mouse is pressed then the startMouseX changes to mouseX and startMouseY changes to mouseY. We had startMouseX and startMouseY as -1 before because we did not want to draw on the screen until mouse is pressed.
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
//We can draw the triangle; at the moment it is a very awkward triangle and we will be fixing that.
				triangle(startMouseX, startMouseY,  startMouseX + mouseX /2, startMouseY + mouseY/2, mouseX - startMouseX /2, mouseY -startMouseY /2);
			}

		}
//for drawing, it saves the progress of the triangle so that we aren't drawing a different triangle each time on a blank canvas. It does this by turning the drawing to false and setting startMouseX and startMouseY back to -1 instead of mouseX and mouseY.
		else if(drawing){
			triangle(startMouseX, startMouseY,  startMouseX + mouseX /2, startMouseY + mouseY/2, mouseX - startMouseX /2, mouseY -startMouseY /2);
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};

}