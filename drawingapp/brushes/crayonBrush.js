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
//CRAYON TEXTURE BRUSH EXPERIMENT AND KALEIDOSCOPE EXTRA TOOL

function crayonBrush(){
	//set an icon and a name for the object
	this.icon = "assets/crayon.png";
	this.name = "crayon";
	//we are loading image from the brushes folder which is in the assets folder, this is going to be used as the textured brush
	var slider;
	var img;
	img = loadImage("assets/brushes/texture1.png");
	slider = createSlider(20, 360, 50, 5);
	slider.position(360, 65);
	slider.style('width', '80px');
    
	//to smoothly draw we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven't started drawing yet.
	var previousMouseX = -1;
	var previousMouseY = -1;

	this.draw = function(){
    var val = slider.value();
		//if the mouse is pressed
		if(mouseIsPressed){
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
				
		//textured brush//comment this code before trying to uncomment others
				//tint is to give the brush gradient
				tint(0, 153, 204, 126);
			    image(img, mouseX, mouseY, val, val);
		
				
		//blurred textured brush
//				//tint is to give the brush gradient
//				tint(0, 153, 204, 126);
//				//img.filter = brush will draw blurred img//p5 filter
//				img.filter("blur", 2);
//			    image(img, mouseX, mouseY, val, val);
//				
				
		//fun tool
				//translates what we are drawing
//				translate(20, 80);
//				  noStroke();
//				//loops the rect and ellipse drawing and then rotates this
//				  for (var i = 0; i < 10; i ++) {
//					rect(previousMouseX, previousMouseY, mouseX - previousMouseX, mouseY - previousMouseY);
//					  
//					ellipse(previousMouseX, previousMouseY, mouseX - previousMouseX, mouseY - previousMouseY,5,5);
//					  
//					rotate(PI/5);
//					
//				  }
				
				

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