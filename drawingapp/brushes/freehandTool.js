//TEMPLATE CODE - IT WAS ORGINALLY PROVIDED
function FreehandTool(){
	//set an icon and a name for the object
	this.icon = "assets/freehand.png";
	this.name = "freehand";

	//to smoothly draw we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven't started drawing yet.
	var previousMouseX = -1;
	var previousMouseY = -1;

	this.draw = function(){
		//if the mouse is pressed
		if(mouseIsPressed){
			cursor(ARROW);
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
                strokeWeight(1);
                stroke(currentColour);
				line(previousMouseX, previousMouseY, mouseX, mouseY);
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
	
	
	this.unselectTool = function(){
	//clear options
	$(".options").html("");
};
	
//	<img id='differentBrush2' class = 'extrasidebaricons' src='assets/rectimg.jpg''></img>
	//adds a button and click handler to the options area. When clicked 
	//toggle the line of symmetry between horizonatl to vertical 
	this.populateOptions = function(){
		$(".choice").html("<img id='differentBrush' class = 'extrasidebaricons' src='assets/highlighterBrush.png'></img>");
		//click handler
		$("#differentBrush").on("click", function(){
			HighlighterBrush()
		});
	};
	
}