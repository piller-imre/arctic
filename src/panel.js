/**
 * Represents a rectangular area which can handle events.
 */
class Panel
{
    /**
     * Construct a new panel.
     */
    constructor()
    {
        this.width = 0;
        this.height = 0;
        this.context = null;
        this.subPanels = [];
    }

    /**
     * Set the context for drawing.
     */
    setContext(context)
    {
        this.context = context;
        for (var subPanel of this.subPanels) {
            if (subPanel.panel != null) {
                subPanel.panel.setContext(context);
            }
        }
    }

    /**
     * Set the size of the panel.
     */
    resize(width, height)
    {
        this.width = width;
        this.height = height;
        this.paint();
    }

    /**
     * Add new subpanel to the panel.
     */
    addSubPanel(panel)
    {
        var subPanel = new SubPanel(panel, 0, 0);
        this.subPanels.push(subPanel);
        return subPanel;
    }

    /**
     * Find subpanel under the cursor.
     */
    findSubPanel(x, y)
    {
        for (var subPanel of this.subPanels) {
            if (subPanel.contains(x, y)) {
                return subPanel;
            }
        }
        return null;
    }

    /**
     * Paint the content of the panel.
     */
    paint()
    {
        // TODO: Try to enforce clipping area!
        for (var subPanel of this.subPanels) {
            if (subPanel.panel != null) {
                this.context.save();
                this.context.translate(subPanel.x, subPanel.y);
                subPanel.panel.paint();
                this.context.restore();
            }
        }
    }

    /**
     * Handle keydown event.
     */
    keyDown(key)
    {
    }

    /**
     * Handle keyup event.
     */
    keyUp(key)
    {
    }

    /**
     * Handle mousedown event.
     */
    mouseDown(x, y)
    {
        var subPanel = this.findSubPanel(x, y);
        if (subPanel != null) {
            subPanel.panel.mouseDown(x - subPanel.x, y - subPanel.y);
        }
    }

    /**
     * Handle mouseup event.
     */
    mouseUp(x, y)
    {
        var subPanel = this.findSubPanel(x, y);
        if (subPanel != null) {
            subPanel.panel.mouseUp(x - subPanel.x, y - subPanel.y);
        }
    }

    /**
     * Handle mousemove event.
     */
    mouseMove(x, y)
    {
        var subPanel = this.findSubPanel(x, y);
        if (subPanel != null) {
            subPanel.panel.mouseMove(x - subPanel.x, y - subPanel.y);
        }
    }

    /**
     * Handle mousewheel scrolling up event.
     */
    wheelUp(x, y)
    {
        var subPanel = this.findSubPanel(x, y);
        if (subPanel != null) {
            subPanel.panel.wheelUp(x - subPanel.x, y - subPanel.y);
        }
    }

    /**
     * Handle mousewheel scrolling down event.
     */
    wheelDown(x, y)
    {
        var subPanel = this.findSubPanel(x, y);
        if (subPanel != null) {
            subPanel.panel.wheelDown(x - subPanel.x, y - subPanel.y);
        }
    }
}

