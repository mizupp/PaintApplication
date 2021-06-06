// This is a function called rectDraw: it draws a rectangle
function rectDraw(){
	this.icon = "assets/rectimg.png";
	this.name = "rectimg";
//We are declaring the variables "StartMouseX" and "StartMouseY". Variable drawing is set to false (Boolean).
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

//if the mouse is pressed paint on the canvas and if the startMouseX is equal to -1 then we allow the function to run.
// if both the conditions are true, we set the cursor as a cross and StartMouseX as mouseX -20, and StartMouseY as mouseY - 20; to ensure the rectangle is being drawn as smoothly as possible close to the cursor and doesn't look awkward.
	this.draw = function(){
 
		if(mouseIsPressed){
			if(startMouseX == -1){
				cursor(CROSS);
				startMouseX = mouseX -20;
				startMouseY = mouseY -20;
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
//We draw a rectangle using "rect"
				rect(startMouseX, startMouseY, mouseX - startMouseX, mouseY - startMouseY);
			}

		}
//for drawing, it saves the progress of the rectangle so that we aren't drawing a different rectangle each time on a blank canvas. It does this by turning the drawing to false and setting startMouseX and startMouseY back to -1 instead of mouseX and mouseY.
		else if(drawing){
			var rectangle = rect(startMouseX, startMouseY, mouseX - startMouseX, mouseY - startMouseY);
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};

//When you unselect from this tool, it should clear the options area.
	this.unselectTool = function(){
	//clear options
	$(".options").html("");
};
	
	//adds an image and click handler to the options area under choice div.
	//this is calling the ellipse shape tool therefore when you click on the ellipse image on the extra side bar, you should be able to draw ellipses.
	this.populateOptions = function(){
		$(".choice").html("<img id='differentBrush' class = 'extrasidebaricons' src='assets/ellipseimg.png'></img>");
		//click handler
		$("#differentBrush").on("click", function(){
			ellipseDraw();
		});
	};
}