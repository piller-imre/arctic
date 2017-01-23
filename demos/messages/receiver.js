/**
 * Component for receiving a message.
 */
class Receiver extends Component
{
    constructor()
    {
        super();
        messenger.register("receiver", this);
    }

    onPaint(context)
    {
        context.beginPath();
        context.strokeStyle = "blue";
        context.rect(0, 0, this.width - 3, this.height - 3);
        context.stroke();
    }

    onMessage(message)
    {
        console.log("The message '" + message + "' has received!");
    }
}

