
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');
//Set initial positions for ball and hole images.
ball_y = 0
ball_x=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
fabric.Image.fromURL("golf-h.png", function(Img) {
	hole_obj = Img;
	hole_obj.scaleToWidth(50);
	hole_obj.scaleToHeight(50);
	hole_obj.set({
			top:hole_y,
			left:hole_x
	});
	canvas.add(hole_obj);
});
	// write code to Upload golf image on the canvas
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
				top:ball_y,
				left:ball_x
		});
		canvas.add(ball_obj);
	});
	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==ball_x)&&(ball_y==ball_y)){
		canvas.remove(ball_obj);
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	document.getElementById("hd3").innerHTML ="You Have hit the goal";
	document.getElementById("myCanvas").style.borderColor="red";

	function down(){
		if(ball_y >=450){
		   ball_y = ball_y - block_height;
		   console.log("block height = " + block_height);
		   console.log("When Up Arrow key is pressed, X = " + ball_x + " , Y = " + ball_y);
		canvas.remove(ball_object);
		player_update();
	   }
   }
   
   if(ball_y >=450){
	ball_y = ball_y + block_height;
	console.log("block height = " + block_height);
	console.log("When Up Arrow key is pressed, X = " + ball_x + " , Y = " + ball_y);
 canvas.remove(ball_object);
 player_update();
}
}
   
   function left(){
	   if(ball_x >=0){
		  ball_x = ball_x - block_width;
		  console.log("block width = " + block_width);
		  console.log("When Up Left key is pressed, X = " + ball_x + " , Y = " + ball_y);
	   canvas.remove(ball_object);
	   player_update();
	  }
   }
   
   function right(){
	if(ball_x >=0){
		ball_x = ball_x - block_width;
		console.log("block width = " + block_width);
		console.log("When Up Left key is pressed, X = " + ball_x + " , Y = " + ball_y);
	 canvas.remove(ball_object);
	 player_update();
	}
   }