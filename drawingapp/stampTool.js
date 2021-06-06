//UNDER CONSTRUCTION but works
//Fix this stamp tool so that you can stamp in different colours rather than just one colour

//This is the stamp tool; for now we have only made the template code which is able to "stamp" an ellipse shape. We will add a greater range which will allow user to able to stamp variety of shapes and images in different sizes.
function stampTool(){
	this.icon = "assets/stampimg.png";
	this.name = "stampimg";
//We are declaring the variables "startPositionX" and "startPositionY". Variable drawing is set to false (Boolean).
	var startPositionX = -1;
	var startPositionY = -1;
	var drawing = false;
	var active = false;
	var stampy = [];
		
//When mouseIs pressed, the user can draw.
	this.draw = function(){
		if(mouseIsPressed){
			if(startPositionX == -1){
				fill(currentColour);
				cursor(CROSS);
				startPositionX = mouseX;
				startPositionY = mouseY;
				drawing = true;
 //We are pushing the startPositionX  as our x position, the startPositionY as our y position (which would be our mouseX and mouseY) and height/width of the shape onto an empty array called "stampy".
				for(var i = 0; i < 10; i++)
				{
				var cc = {x_pos: startPositionX, y_pos: startPositionY, width:50, height: 50, active: false};
				stampy.push(cc);
				}
			    console.log(cc)
				
//We are calling loadPixels; this allows the loading of pixel data that will be displayed on the window.
				loadPixels();
			}
//updatePixels updates the display window with the data in the pixels array; we use this with the "loadPixels()". This is required so that the changes are actually applied. 
			else{
				updatePixels();
//This is the code for the actual ellipse that will be drawn; the data is being taken from the empty array which has the pushed elements. 
			var drawncircle;
				
			for(var i = 0; i < stampy.length; i++) {
				ellipse(stampy[i].x_pos,stampy[i].y_pos,stampy[i].width, stampy[i].height);
			}
			}

		}
//We can save the progress of the stamp tool with this code; it will stamp for the entire length of stampy array and will show the "stamps" even after changing pages. I had declared the variable "drawncircle" earlier to lessen the amount of code written as you can see below.
		else if(drawing){
			for (var i = 0; i < stampy.length; i++) {
				drawncircle = stampy[i];
			}
			drawing = false;
			startPositionX = -1;
			startPositionY = -1;
		}
	};

}