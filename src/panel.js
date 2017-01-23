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
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.context = null;
        this.subPanels = [];
        this.selected = null;
    }

    /**
     * Set the context for drawing.
     */
    setContext(context)
    {
        if (context != null) {
            this.context = context;
            for (var subPanel of this.subPanels) {
                if (subPanel != null) {
                    subPanel.setContext(context);
                }
            }
        }
    }

    /**
     * Set the size of the panel.
     */
    resize(x, y, width, height)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.paint();
    }

    /**
     * Add new subpanel to the current panel.
     */
    addSubPanel(panel)
    {
        this.subPanels.push(panel);
    }

    /**
     * Check that the panel contains the given point or not.
     */
    contains(x, y)
    {
        if (x >= this.x && y >= this.y
            && x < this.x + this.width && y < this.y + this.height) {
            return true;
        }
        return false;
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
     * Update the focus of the panel.
     */
    updateFocus(panel)
    {
        if (panel != null && panel != this.selected) {
            if (this.selected != null) {
                this.selected.lostFocus();
            }
            panel.gotFocus();
            this.selected = panel;
        }
    }

    /**
     * The panel got the focus.
     */
    gotFocus()
    {
    }

    /**
     * The panel lost the focus.
     */
    lostFocus()
    {
    }

    /**
     * Paint the content of the panel.
     */
    paint()
    {
        // TODO: Try to enforce clipping area!
        this.context.clearRect(this.x, this.y, this.width, this.height);
        for (var subPanel of this.subPanels) {
            if (subPanel != null) {
                subPanel.paint();
            }
        }
    }

    /**
     * Handle keydown event.
     */
    keyDown(key)
    {
        if (this.selected != null) {
            this.selected.keyDown(key);
        }
    }

    /**
     * Handle keyup event.
     */
    keyUp(key)
    {
        if (this.selected != null) {
            this.selected.keyUp(key);
        }
    }

    /**
     * Handle mousedown event.
     *
     * Forward the event to the child elements in the rectangular area.
     */
    mouseDown(x, y)
    {
        var subPanel = this.findSubPanel(x, y);
        if (subPanel != null) {
            this.updateFocus(subPanel);
            subPanel.mouseDown(x, y);
        }
    }

    /**
     * Handle mouseup event.
     */
    mouseUp(x, y)
    {
        var subPanel = this.findSubPanel(x, y);
        if (subPanel != null) {
            this.updateFocus(subPanel);
            subPanel.mouseUp(x, y);
        }
    }

    /**
     * Handle mousemove event.
     */
    mouseMove(x, y)
    {
        var subPanel = this.findSubPanel(x, y);
        if (subPanel != null) {
            this.updateFocus(subPanel);
            subPanel.mouseMove(x, y);
        }
    }

    /**
     * Handle mousewheel scrolling up event.
     */
    wheelUp(x, y)
    {
        var subPanel = this.findSubPanel(x, y);
        if (subPanel != null) {
            this.updateFocus(subPanel);
            subPanel.wheelUp(x, y);
        }
    }

    /**
     * Handle mousewheel scrolling down event.
     */
    wheelDown(x, y)
    {
        var subPanel = this.findSubPanel(x, y);
        if (subPanel != null) {
            this.updateFocus(subPanel);
            subPanel.wheelDown(x, y);
        }
    }
}

