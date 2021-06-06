//UNDER CONSTRUCTION
//UNDER CONSTRUCTION
//UNDER CONSTRUCTION
//UNDER CONSTRUCTION
//UNDER CONSTRUCTION
//UNDER CONSTRUCTION
//UNDER CONSTRUCTION

//move tool under construction; this will be a free transform tool capable of moving objects around screen.

//For now, we have kept it simple with just a cursor feature; this is to make it easier to use sliders and drag colour picker without drawing on the screen itself.
function moveTool(){
	
    this.icon = "assets/move.png";
	this.name = "move";

    this.draw = function(){
     cursor(MOVE);
		
    }
	

}

