/**
 * Represents a vertical split.
 */
class VerticalSplit extends Panel
{
    /**
     * Set the position of the splitter line.
     */
    constructor(position)
    {
        super();
        this.position = position;
        this.leftPanel = null;
        this.rightPanel = null;
        this.isDragged = false;
    }

    /**
     * Set the left panel.
     */
    setLeftPanel(panel)
    {
        this.leftPanel = this.addSubPanel(panel);
        // TODO: Resize the panel!
        // TODO: Check that the left panel did not set before!
    }

    /**
     * Set the right panel.
     */
    setRightPanel(panel)
    {
        this.rightPanel = this.addSubPanel(panel);
        // TODO: Resize the panel!
        // TODO: Check that the right panel did not set before!
    }

    /**
     * Set the position of the splitter line.
     */
    setPosition(position)
    {
        this.position = position;
    }

    /**
     * Update the width of the subpanels.
     */
    updateSubPanelWidth()
    {
        if (this.leftPanel != null) {
            this.leftPanel.x = 0;
            this.leftPanel.y = 0;
            this.leftPanel.panel.width = this.position - 3;
            this.leftPanel.panel.height = this.height;
        }

        if (this.rightPanel != null) {
            this.rightPanel.x = this.position + 3;
            this.rightPanel.y = 0;
            this.rightPanel.panel.width = this.width - this.position - 3;
            this.rightPanel.panel.height = this.height;
        }
    }

    /**
     * Resize the split.
     */
    resize(width, height)
    {
        this.width = width;
        this.height = height;
        this.updateSubPanelWidth();
        this.paint();
    }

    /**
     * Check mouse click on the splitter.
     */
    mouseDown(x, y)
    {
        if (x >= this.position - 3 && x <= this.position + 3) {
            this.isDragged = true;
        }
        else {
            Panel.prototype.mouseDown.call(this, x, y);
        }
    }

    /**
     * Change the position when the splitter has dragged.
     */
    mouseMove(x, y)
    {
        if (this.isDragged == true) {
            if (x != this.position) {
                this.position = x;
                this.updateSubPanelWidth();
                this.paint();
            }
        }
        else {
            Panel.prototype.mouseDown.call(this, x, y);
        }
    }

    /**
     * Release the splitter when dragged.
     */
    mouseUp(x, y)
    {
        if (this.isDragged == true) {
            this.isDragged = false;
        }
        else {
            Panel.prototype.mouseDown.call(this, x, y);
        }
    }
}

