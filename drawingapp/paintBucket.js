//This is the paintbucket flood fill tool. This tool is capable of filling the whole canvas with the colour selected by the user; using the colour picker.
function paintBucket() {
    this.name = "PaintBucket";
    this.icon = "assets/paintBucket.png";
    this.draw = function() {
        if (mouseIsPressed) {
            noStroke();
            fill(currentColour);
            rect(0,0,width,height);
        }
    }
}
//If we have time, we might code it so that it is able to fill basic shapes with colours selected.