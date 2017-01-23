/**
 * Red panel
 */
class RedPanel extends Panel
{
    paint()
    {
        this.context.save();
        this.context.translate(this.x, this.y);

        this.context.beginPath();
        this.context.strokeStyle = "red";
        this.context.moveTo(0, 0);
        this.context.lineTo(this.width, this.height);
        this.context.stroke();

        this.context.restore();
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
        this.context.save();
        this.context.translate(this.x, this.y);

        this.context.beginPath();
        this.context.strokeStyle = "green";
        this.context.moveTo(0, 0);
        this.context.lineTo(this.width, this.height);
        this.context.stroke();

        this.context.restore();
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

/**
 * Blue panel
 */
class BluePanel extends Panel
{
    paint()
    {
        this.context.save();
        this.context.translate(this.x, this.y);

        this.context.beginPath();
        this.context.strokeStyle = "blue";
        this.context.moveTo(0, 0);
        this.context.lineTo(this.width, this.height);
        this.context.stroke();

        this.context.restore();
    }

    mouseDown(x, y)
    {
        console.log("blue (" + x + ", " + y + ")");
    }

    keyDown(key)
    {
        console.log("blue key " + key);
    }

    gotFocus()
    {
        console.log("blue got the focus!");
    }

    lostFocus()
    {
        console.log("blue lost the focus!");
    }
}

