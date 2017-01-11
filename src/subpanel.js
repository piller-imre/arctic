/**
 * Subpanel data for embedded panels.
 */
class SubPanel
{
    /**
     * Set the position and the contained panel.
     *
     * The width and the height are available from the panel itself.
     */
    constructor(panel, x, y)
    {
        this.panel = panel;
        this.x = x;
        this.y = y;
    }

    /**
     * Check that the subpanel contains the given point or not.
     */
    contains(x, y)
    {
        if (x >= this.x && x < this.x + this.panel.width
            && y >= this.y && y < this.y + this.panel.height) {
            return true;
        }
        return false;
    }
}

