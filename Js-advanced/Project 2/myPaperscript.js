
//array of all the circles being created on key down
var circles = [];

//---------------------
// Circles on Key Press
//---------------------
//when a key is pressed generate a circle
function onKeyDown(event) {
    if (keyData[event.key]) {
        //define the max point of the page
        var maxPoint = new Point(view.size.width, view.size.height);
        //create a random point
        var randomPoint = Point.random();
        //max * random (same logic as Math.random)
        var point = maxPoint * randomPoint;
        //create new circle at a random point when key is pressed
        var newCircle = new Path.Circle(point, 150);
        newCircle.fillColor = keyData[event.key].color;
        keyData[event.key].sound.play();
        //pushes new circle to the circles array
        circles.push(newCircle);
    }
}

//--------
// Snow
//--------

// The amount of symbol we want to place;
var count = 150;

// Creating a circle to be replicated later:
var path = new Path.Circle({
    center: new Point(0, 0),
    radius: 5,
    fillColor: 'rgba(241, 239, 239, 0.74)',
    strokeColor: 'rgba(233, 231, 231, 0.4)'
});

var symbol = new SymbolDefinition(path);

// Place the copy of circle
for (var i = 0; i < count; i++) {
    // The center position is a random point in the view:
    var center = Point.random() * view.size;
    var placed = symbol.place(center);
    var scale = (i + 1) / count;
    placed.scale(scale);
    placed.data.vector = new Point({
        angle: Math.random() * 360,
        length: scale * Math.random() / 5
    });
}

var vector = new Point({
    angle: 45,
    length: 0
});

var mouseVector = vector.clone();

function onMouseMove(event) {
    mouseVector = (view.center - event.point) / 30;
}

// The onFrame function for animation
function onFrame(event) {
    vector = vector + (mouseVector - vector) / 30;

    // the position of the placed symbols:
    for (var i = 0; i < count; i++) {
        var item = project.activeLayer.children[i];
        var size = item.bounds.size;
        var length = vector.length / 10 * size.width / 10;
        item.position += vector.normalize(length) + item.data.vector;
        keepInView(item);
    }
}

//keeps snow within view
function keepInView(item) {
    var position = item.position;
    var itemBounds = item.bounds;
    var bounds = view.bounds;
    if (itemBounds.left > bounds.width) {
        position.x = -item.bounds.width;
    }

    if (position.x < -itemBounds.width) {
        position.x = bounds.width + itemBounds.width;
    }

    if (itemBounds.top > view.size.height) {
        position.y = -itemBounds.height;
    }

    if (position.y < -itemBounds.height) {
        position.y = bounds.height + itemBounds.height / 2;
    }
}