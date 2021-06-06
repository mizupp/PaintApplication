# MMDRAW - Drawing application

## PLAN

Final project plan:

- Basic Shapes: line, rect, ellipse and triangle
- Another side bar which will contain extra tools
- Change the spray can: different size and thickness which will show up on sidebar 2
- Stamp tool: different images
- Different brushes: calligraphy brushes, crayon texture brushes, painting brushes etc.
- Kaleidoscope/Mirror: 4 mirrors feature to mirror draw tool and extra fun kaleidoscope tool add on feature
- Eraser: with different sizes and adjust it depending on the background colour
- Text tool: change fonts, size and style; be able to place the input text anywhere on the canvas
- Colour Picker: using HEX and RGB, colour wheel paint sai on mac/ photoshop standard swatch style on windows
- Flood fill tool: adding a gradient tool to make the background gradient
- Free tranform tool/moving tool

We might do a free transform tool that allows you to move objects in the canvas along with capability of resizing object. We are currently still working on the free transform tool; we have managed to implement a code capable of moving objects across the screen however we are unable to apply this onto objects which are "drawn" onto the canvas. We have decided to not attach the js file containing the code for this feature onto this temporary submission folder.


## INFORMATION REGARDING TOOLS
### BASIC SHAPES
- js files can be found in the "shapes" folder
- Currently: "rect", "line" and "ellipse" are working; triangle works but is awkward to draw so we are currently working on that

#### RECT shape
- Js file can be found in the shapes folder
- The rect tool is available as the custom demo tool for this submission
- To draw you press down and "drag" on the screen until you get the rect shape you want

#### ELLIPSE shape
- Js file can be found in the shapes folder
- The ellipse tool is available as the custom demo tool for this submission
- To draw you press down and "drag" on the screen until you get the ellipse shape you want

- For this demo, we have added the ellipse tool in the options part of the extra side bar; when you click on the rect tool, ellipse tool should appear on the right side bar as an "option". 
- To access manually; you need to go to sketch.js and then uncomment the  "//    toolbox.addTool(new ellipseDraw());" 


#### LINE 
- code was provided orginally (template code)

#### TRIANGLE shape
- This tool is currently incomplete since it is not making a perfect triangle.
- Js file can be found in the shapes folder
- The ellipse tool is available as the custom demo tool for this submission
- To draw you press down and "drag" on the screen until you get the ellipse shape you want
- To access manually; you need to go to sketch.js and then uncomment the  "//    toolbox.addTool(new triangleDraw());" 


### APPEARANCE AND SIDE BAR
#### APPEARANCE 
- cleaned up to beautify the drawing app
- changed positioning of elements on the page

#### EXTRA SIDE BAR
- instead of having options at the bottom, we wanted them on the side like most standard drawing applications.
- the extra side bar is able to take up options
- we are improving it so that we will be able to add more than one option in the future rather than rely on toggle feature.

- extra side bar has bugs and needs debugging since after using options on the this extra side bar, the drawing app is likely to crash. If this happens, you need to refresh the page completely

### SPRAYCAN WITH SLIDER
- js file can be found in the main file; it is called "sprayCanTool.js"
- Fixed the spray can tool and added the slider feature to it; you can adjust the thickness and size of the spraycan.

### STAMP TOOL
- js file can be found in the main file; it is called "stampTool.js"
- Using game project methods, we have made a simple stamp tool
- The tool is still in the making
- You can draw ellipses for now but in the future you will be able to draw other shapes as well such as stars/smileys/images etc
- Fix this stamp tool so that you can stamp in different colours rather than just one colour (maybe we can utlise this feature for the flood fill tool)

### DIFFERENT BRUSHES
#### FREEHAND
- js file can be found in the "brushes" folder
- template code; provided orignally

#### PAINTBRUSH WITH SLIDER
- js file can be found in the "brushes" folder
- made changes to the template code provided in freehand, you can adjust the size of the paintbrush using the slider function.

#### HIGHLIGHTER BRUSH
- js file can be found in the "brushes" folder
- made changes to the template code provided in freehand,  we applied alpha feature to the highlighter brush; this gives a transparency effect.
- highlighter brush should come up in the options part on the extra side bar however due to bugs, it can disappear if you click on freehand tool twice. Need to fix this bug.
- you can manually access the highlighter brush by uncommenting it out (//" toolbox.addTool(new HighlighterBrush());") on the sketch.js file

#### CRAYON BRUSH
- js file can be found in the "brushes" folder
- this is currently under construction since the code uses image and tint effect to create a textured brush. We are looking for a library that can change colours of image to make this brush sucessful.

### KALEIDOSCOPE TOOL/ MIRROR TOOL
- js file can be found in the main file; it is called "mirrorDrawTool.js"
- we are currently working on a 4 mirror feature
- we are currently working on a fun extra feature that uses simple rotate pi functions - somewhat fun and interesting drawing technique

### ERASER TOOL WITH SLIDER
- js file can be found in the main file; it is called "eraser.js"
- tool uses slider (which is setup in sketch.js)
- you can change the size of the eraser using slider

### TEXT TOOL
- js file can be found in the main file; it is called "textTool.js".
- we are able to input and get text from the tool
- we are able to use only manually written text around
- this file is under construction

### COLOUR PICKER TOOL
- this feature is applied on different files since we are required to use the "currentcolour" as our fill.
- the setup for this tool is in sketch.js
- the tool is created using p5 gui library
- originally we used bootstrap but using a p5 orientated library on a p5 heavy project leads to less bugs.

### FLOOD FILL TOOL
- js file can be found in the main file; it is called "paintBucket.js".
- Tool is currently able to fill the rect canvas in whatever colour the user picks.
- we might add feature that flood fills certain objects on the screen.

### FREE TRANSFORM TOOL
- js file not submitted
- file used complex loops and code which we are currently still working on
- code is able to move object across screen however it can't move drawn objects.
- we are using similar code in the textTool.js file

## SHARED WEB APP
### NODE.JS, SOCKETS.IO AND EXPRESS
- Shared drawing feature that will allow multiple users to draw at the same time on a seperate server
- code for this is in the "sharedcode" file. It will not run properly unless if you follow instructions provided.
- you will need to follow the instructions on the powerpoint presentation if you want to try this in progress feature for yourself.
- powerpoint shows how this works; demo
- this is a work in progress feature hence why we have removed it from this drawing application folder


## DEVELOPMENT
### PROGRESS
- Completed basic shapes; still need to work on triangle
- Completed extra side bar; still need to fix options bug
- Completed spraycan
- Started on creating stamp tool
- Completed different brushes: 
		- Hightlighter (need to add a change alpha and thickness feature)
		- Paintbrush (you can adjust the thickness for this one)
		- Crayon (this is a textured brush, you can change the size of the brush and it works perfectly with a gradient tint effect however since we are using an image, we are in search of a library capable of changing colours of images)
		- Other brushes in progress
- Started Kaleidoscope tool; made the fun tool however 4 mirrors feature in progress
- Completed Eraser tool (you can change the thickness using slider)
- Started on text tool; trying to configure how to move around input text, have got something to work on
- Completed colour picker tool
- Completed flood fill tool; might add feature where it "flood fills" objects drawn as well
- Started on free transform tool/moving tool

### LIBRARIES USED
- P5 used heavily for most code; creating brushes, shapes; used p5 functions
- P5 GUI (quick setting), used for colour picker; will be using more in future
- P5 DOM for sliders and creating buttons/divs
- Jquery for closing side bars, toolbox, helperfunctions, general
- Might use RiTA for textTool
- Might use Scribble for scribbley effect
- Bootstrap used but removed, will be using again since it is compatible with jquery.
- will consider other libraries if deemed useful
- looking for library that can change colour of images

### TESTING AND DEBUGGGING
- Need to fix triangle
- Fix side bar options bugs; when you are switching from the side bar tool and extra side bar options tools
- Eraser and spraycan bug (when you switch between them)
- test for crashes

### FUTURE PLANS
- Real processing web socket shared app; add more to this and make sure it works
To finish this, we need to complete the deployment; make sure that server to client is working.

- Free transform tool; that is able to move objects around screen
To finish this we will use using simple mouseDragged and mousePressed functions, dist etc

- Finish stamp tool
To finish this we need to add more arrays and push different sizes onto the arrays; we can then use images. Use the slider and slider.value to change size of the stamps.
Fix this stamp tool so that you can stamp in different colours rather than just one colour (maybe we can utlise this feature for the flood fill tool)

- Finish Kaleidoscope fun feature
To finish this we need to use a simple loop that is able to rotate and translate the drawn shapes. The shapes will be quite simple (rect and ellipse)

-Add to flood fill tool
Use the accident from stamp tool so that we can change colours of all objects on the screen

- Add 4 mirror draw effect
To finish this we will preview the mirrorDraw template code and make adjustments to it to accomodate for 4 mirror effect.

- Finish text tool
To finish this we might use another library such as RiTA or another text libarty to make it easier

- Find library that changes image colour
This will allow us to use images; user might even be able to load their own image etc We will need to find a library that actually changes the colours rather than filters the image.

- Get rid of all bugs
This will be done by going through each individual file and seeing how compatible it is with other files

- Make sure app doesn't crash
This will be done by checking how different tools work one after each other, this will allow us to pick up bugs and remove them to prevent crashing.


### IF PROBLEMS ARISE AND WE CAN'T GET WHAT WE WANT

- We have sufficient code already so it is quite easy to just scrap some stuff out and focus on improving the current code.
- We can use libraries to make long lengthy codes work in our favour with only a few lines (the power of libaries)
- Instead of trying to complicate the code; for example, if we can't make the text tool input the text and allow user to move this text around, then we can use submission input forms to input text. It is deemed less "standard" however it will still work.

# NOTE
## PLEASE MARK FAIRLY

Sincerly,
Some ANONS