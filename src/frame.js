/**
 * HTML canvas element.
 */
var canvas;

/**
 * Get the mouse position from the mouse event.
 */
function getMousePosition(event)
{
    var mouseX, mouseY;
    if (event.pageX != undefined && event.pageY != undefined) {
        mouseX = event.pageX;
        mouseY = event.pageY;
    }
    else {
        mouseX = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        mouseY = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    mouseX -= canvas.offsetLeft;
    mouseY -= canvas.offsetTop;
    return {
        x: mouseX,
        y: mouseY
    };
}

/**
 * Handle the keydown event.
 */
function onKeyDown(event)
{
    app.keyDown(event);
}

/**
 * Handle the keyup event.
 */
function onKeyUp(event)
{
    app.keyUp(event);
}

/**
 * Handle mousedown event.
 */
function onMouseDown(event)
{
    var mousePosition = getMousePosition(event);
    app.mouseDown(mousePosition.x, mousePosition.y);
}

/**
 * Handle mouseup event.
 */
function onMouseUp(event)
{
    var mousePosition = getMousePosition(event);
    app.mouseUp(mousePosition.x, mousePosition.y);
}

/**
 * Handle mousemove event.
 */
function onMouseMove(event)
{
    var mousePosition = getMousePosition(event);
    app.mouseMove(mousePosition.x, mousePosition.y);
}

/**
 * Handle wheel event.
 */
function onWheel(event)
{
    var mousePosition = getMousePosition(event);
    if (event.deltaY < 0) {
        app.wheelUp(mousePosition.x, mousePosition.y);
    }
    else {
        app.wheelDown(mousePosition.x, mousePosition.y);
    }
}

/**
 * Initialize a new frame for the canvas.
 */
function onLoad()
{
    canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    app.setContext(context);

    window.addEventListener('keydown', onKeyDown, false);
    window.addEventListener('keyup', onKeyUp, false);
    canvas.addEventListener('mousedown', onMouseDown, false);
    canvas.addEventListener('mouseup', onMouseUp, false);
    canvas.addEventListener('mousemove', onMouseMove, false);
    canvas.addEventListener('wheel', onWheel, false);

    onResize();
}

/**
 * Handle the resize event of the canvas.
 */
function onResize()
{
    canvas.width = window.innerWidth - 20;
    canvas.height = window.innerHeight - 20;
    app.resize(canvas.width, canvas.height);
}

