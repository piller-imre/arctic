/**
 * Red panel
 */
class RedPanel extends Panel
{
    paint()
    {
        this.context.beginPath();
        this.context.moveTo(0, 0);
        this.context.lineTo(this.width, this.height);
        this.context.stroke();
    }

    mouseDown(x, y)
    {
        console.log("red (" + x + ", " + y + ")");
    }

    keyDown(key)
    {
        console.log("red key " + key);
    }

    gotFocus()
    {
        console.log("red got the focus!");
    }

    lostFocus()
    {
        console.log("red lost the focus!");
    }
}

/**
 * Green panel
 */
class GreenPanel extends Panel
{
    paint()
    {
        this.context.beginPath();
        this.context.moveTo(0, 0);
        this.context.lineTo(this.width, this.height);
        this.context.stroke();
    }

    mouseDown(x, y)
    {
        console.log("green (" + x + ", " + y + ")");
    }

    keyDown(key)
    {
        console.log("green key " + key);
    }

    gotFocus()
    {
        console.log("green got the focus!");
    }

    lostFocus()
    {
        console.log("green lost the focus!");
    }
}

