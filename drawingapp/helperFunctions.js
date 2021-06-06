function HelperFunctions(){
	
	//Jquery click events. Notice that there is no this. at the
	//start we don't need to do that here because the event will
	//be added to the button and doesn't 'belong' to the object

	//event handler for the clear button event. Clears the screen
	$("#clearButton").on("click", function(){
		background(255, 255, 255);

		//call loadPixels to update the drawing state
		//this is needed for the mirror tool
		loadPixels();
	});

	//event handler for the save image button. saves the canvas to the
	//local file system. 
	$("#saveImageButton").on("click", function(){
		saveCanvas('drawAppCS', 'jpg');
	});
	
	//To close the sidebar extra bar on the right side
	$(".alert-close").on("click", function(){
	var first = document.getElementById('mydiv');
	first.setAttribute('class', 'hidden');
	});
}
						   
						   