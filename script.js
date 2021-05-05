cavas=new fabric.Canvas('Mycanvas');
width_of_block=30;
height_of_block=30;
PlayerX=500;
PlayerY=500;
playerimage="";
block_image="";
function player_update()
{
    fabric.Image.fromURL("player.png", function (Img) {
		playerimage = Img;

		playerimage.scaleToWidth(150);
		playerimage.scaleToHeight(140);
		playerimage.set({
			top: PlayerY,
			left: PlayerX
		});
		canvas.add(playerimage);

	});
}

function new_image(get_image) {
	fabric.Image.fromURL(get_image, function (Img) {
		block_image = Img;

		block_image.scaleToWidth(width_of_block);
		block_image.scaleToHeight(height_of_block);
		block_image.set({
			top: PlayerY,
			left: PlayerX
		});
		canvas.add(block_image);

	});

}