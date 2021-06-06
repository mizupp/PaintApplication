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

//This is the blur tool, it will be able to blur the image with use of brush. We are making use of P5 filters for this; some of the filter methods are not available in the reference.
function blurTool() {
    this.name = "blurDraw";
    this.icon = "assets/paintBucket.jpg";
    this.draw = function() {
        if (mouseIsPressed) {
            noStroke();
			filter("blur", 50);
            rect(mouseX,mouseY,100,100);
        }
    }
}
