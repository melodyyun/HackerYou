

//array of all the circles being created on key down
var circles =[];

//----------------
//Key Press event
//----------------
//when a key is pressed generate a circle
function onKeyDown(event) {
    if(keyData[event.key]){
        //define the max point of the page
        var maxPoint = new Point(view.size.width, view.size.height);
        //create a random point
        var randomPoint = Point.random();
        //max * random (same logic as Math.random)
        var point = maxPoint * randomPoint;
        //create new circle at a random point when key is pressed
        var newCircle = new Path.Circle(point, 200);
        newCircle.fillColor = keyData[event.key].color;
        keyData[event.key].sound.play();
        //pushes new circle to the circles array
        circles.push(newCircle);
    }
}
//----------
//animation
//----------

function onFrame(event) {
    for(var i = 0; i<circles.length; i++){
        circles[i].fillColor.hue += 1;
        circles[i].scale(0.9);
    }
}

//----------
//sounds
//----------
var sound = new Howl({
    src: ['sounds/bubbles.mp3']
});




