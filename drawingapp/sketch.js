//global variables that will store the toolboxm colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;
var currentColour = '#000000';
var gui;
//var moving;


function setup() {

    //create a canvas to fill the content div from index.html
    canvasContainer = $('#content');
    var c = createCanvas(canvasContainer.innerWidth(), canvasContainer.innerHeight());
    c.parent("content");

   //create helper functions and the colour palette
    helpers = new HelperFunctions();
    //colourP = new ColourPalette();
    gui = createGui('Colour picker',350,55);
    gui.addGlobals('currentColour');
    
	var slider = createSlider(0,50,1);
    slider.position(100,60);
	
    //create a toolbox for storing the tools
    toolbox = new Toolbox();
    
    //add the tools to the toolbox. 
	toolbox.addTool(new moveTool());
    toolbox.addTool(new FreehandTool());
    toolbox.addTool(new LineToTool());
    toolbox.addTool(new sprayCan(slider));
    toolbox.addTool(new mirrorDrawTool());


    toolbox.addTool(new rectDraw());
//	  toolbox.addTool(new triangleDraw());
//    toolbox.addTool(new ellipseDraw());
//    
    toolbox.addTool(new eraser(slider));
    toolbox.addTool(new PaintBrush(slider));
//    toolbox.addTool(new HighlighterBrush());

	
    toolbox.addTool(new paintBucket());
	toolbox.addTool(new stampTool());

	
	
	//UNDER CONSTRUCTION and work
//    toolbox.addTool(new crayonBrush());

	//UNDER CONSTRUCTION 
//    toolbox.addTool(new blurTool());
//	  toolbox.addTool(new textTool());

	
	
}

function draw() {
    //call the draw function from the selected tool.
    //hasOwnProperty is a javascript function that tests
    //if an object contains a particular method or property
    //if there isn't a draw method the app will alert the user
	if(toolbox.selectedTool.hasOwnProperty("draw")){
    	toolbox.selectedTool.draw();
	}
	else{
		alert("it doesn't look like your tool has a draw method!");
	}
}


