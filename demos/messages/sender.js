/**
 * Component for sending a message.
 */
class Sender extends Component
{
    constructor()
    {
        super();
        messenger.register("sender", this);
    }

    onPaint(context)
    {
        context.beginPath();
        context.strokeStyle = "red";
        context.rect(0, 0, this.width - 3, this.height - 3);
        context.stroke();
    }

    onMouseDown(x, y)
    {
        var message = "(" + x + ", " + y + ")";
        messenger.send("receiver", message);
    }
}

