/**
 * Components with relative coordinates and messaging.
 */
class Component extends Panel
{
    /**
     * Forward event to the onPaint method.
     */
    paint()
    {
        this.context.save();
        this.context.translate(this.x, this.y);
        this.onPaint(this.context);
        this.context.restore();
    }

    /**
     * Paint to the local coordinate system.
     */
    onPaint(context)
    {
    }

    /**
     * Forward mouse down event to the component.
     */
    mouseDown(x, y)
    {
        this.onMouseDown(x - this.x, y - this.y);
    }

    /**
     * Mouse down event with local coordinates.
     */
    onMouseDown(x, y)
    {
    }

    /**
     * Forward mouse move event to the component.
     */
    mouseMove(x, y)
    {
        this.onMouseMove(x - this.x, y - this.y);
    }

    /**
     * Mouse move event with local coordinates.
     */
    onMouseMove(x, y)
    {
    }

    /**
     * Forward mouse up event to the component.
     */
    mouseUp(x, y)
    {
        this.onMouseUp(x - this.x, y - this.y);
    }

    /**
     * Mouse up event with local coordinates.
     */
    onMouseUp(x, y)
    {
    }
}

