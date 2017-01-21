/**
 * Placeholder application class definition for demonstration purposes.
 */
class App extends Panel
{
    /**
     * Resize the application.
     */
    resize(x, y, width, height)
    {
        super.resize(x, y, width, height);

        this.context.beginPath();
        this.context.moveTo(0, 0);
        this.context.lineTo(this.width, this.height);
        this.context.stroke();
    }

    /**
     * Handle keydown event.
     */
    keyDown(key)
    {
        console.log("down: " + key);
    }

    /**
     * Handle keyup event.
     */
    keyUp(key)
    {
        console.log("up: " + key);
    }

    /**
     * Handle mousedown event.
     */
    mouseDown(x, y)
    {
        console.log("down: " + x + ", " + y);
    }

    /**
     * Handle mouseup event.
     */
    mouseUp(x, y)
    {
        console.log("up: " + x + ", " + y);
    }

    /**
     * Handle mousemove event.
     */
    mouseMove(x, y)
    {
        console.log("move: " + x + ", " + y);
    }

    /**
     * Handle mousewheel scrolling up event.
     */
    wheelUp(x, y)
    {
        console.log("wheel up: " + x + ", " + y);
    }

    /**
     * Handle mousewheel scrolling down event.
     */
    wheelDown(x, y)
    {
        console.log("wheel down: " + x + ", " + y);
    }
}

