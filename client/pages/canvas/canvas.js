var getColorString = function(r,g,b) {
    return "#"+(r).toString(16)+(g).toString(16)+(b).toString(16);
}

var getMousePos = function(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

var drawRandomCircle = function(event) {
    var canvas = document.getElementById("canvasArea");
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var radius = Math.floor((Math.random() * 50) + 1);
        var mp = getMousePos(canvas, event);
        var posx = mp.x;
        var posy = mp.y;

        var rf = Math.floor((Math.random() * 255) + 1);
        var gf = Math.floor((Math.random() * 255) + 1);
        var bf = Math.floor((Math.random() * 255) + 1);
    
        var rb = Math.floor((Math.random() * 255) + 1);
        var gb = Math.floor((Math.random() * 255) + 1);
        var bb = Math.floor((Math.random() * 255) + 1);
    
        ctx.beginPath();
        ctx.arc(posx, posy, radius, 0, 2 * Math.PI);
        ctx.fillStyle = getColorString(rf, gf, bf);
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = getColorString(rb, gb, bb);
        ctx.stroke();
    }
}

var canvas = document.getElementById("canvasArea");
var ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

document.getElementById("canvasArea").addEventListener(
    'click', 
    function(event) { 
        drawRandomCircle(event);
    }, 
    false
);

document.getElementById("canvasArea").addEventListener(
    'mousemove',
    function(event) {
        var mp = getMousePos(canvas, event);
        var m = "Maus Position. x: "+mp.x+" y: "+mp.y;
        document.getElementById("mousePosText").textContent = m;
    },
    false
);
