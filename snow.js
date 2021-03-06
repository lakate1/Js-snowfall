window.onload = function() {
    // Get the canvas and context and store
    var canvas = document.getElementById("sky");
    var ctx = canvas.getContext("2d");

    // Set canvas dimentions to window height and width
    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    // Generate the snowflakes and apply attributes 
    var mf = 100; // max number of flaxes
    var flakes = [];

    // Loop through the empty flakes and apply attributes 
    for (var i = 0; i < mf; i++) {
        flakes.push({
            x: Math.random()*W,
            y: Math.random()*H,
            r: Math.random()*5+2,
            d: Math.random() +1
        })
    }

    // Draw flakes onto canvas

    function drawFlakes() {
        ctx.clearRect(0,0,W,H);
        ctx.fillStyle = "white";
        ctx.beginPath();
        for(var i = 0; i < mf; i++) {
            var f = flakes[i];
            ctx.moveTo(f.x, f.y);
            ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
        }
        ctx.fill();
        moveFlakes();
    }

    // Animate the flakes
    var angle = 0;

    function moveFlakes() {
        angle += 0.01;
        for(var i = 0; i < mf; i++) {
            // Store the current flake 
            var f = flakes[i];
            // Update x and y of each snowflake
            f.y += Math.pow(f.d, 2) + 1;
            f.x += Math.sin(angle) * 2;

            // If the snowflake reaches the bottom, send a new on to the top
            if(f.y > H) {
                flakes[i] = {x:Math.random() * W, y: 0, r: f.r, d: f.d};
            }
        }
    }

    setInterval(drawFlakes, 25);


}