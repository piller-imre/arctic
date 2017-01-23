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
        this.addSubPanel(panel);
        this.leftPanel = panel;
        // TODO: Resize the panel!
        // TODO: Check that the left panel did not set before!
    }

    /**
     * Set the right panel.
     */
    setRightPanel(panel)
    {
        this.addSubPanel(panel);
        this.rightPanel = panel;
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
            this.leftPanel.resize(this.x, this.y, this.position, this.height);
        }

        if (this.rightPanel != null) {
            this.rightPanel.resize(this.x + this.position, this.y, this.width - this.position, this.height);
        }

        this.paint();
    }

    /**
     * Resize the split.
     */
    resize(x, y, width, height)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.updateSubPanelWidth();
    }

    /**
     * Check mouse click on the splitter.
     */
    mouseDown(x, y)
    {
        let splitterX = this.x + this.position;
        if (x >= splitterX - 5 && x <= splitterX + 5) {
            this.isDragged = true;
        }
        else if (x < splitterX) {
            this.updateFocus(this.leftPanel);
            this.leftPanel.mouseDown(x, y);
        }
        else {
            this.updateFocus(this.rightPanel);
            this.rightPanel.mouseDown(x, y);
        }
    }

    /**
     * Change the position when the splitter has dragged.
     */
    mouseMove(x, y)
    {
        let splitterX = this.x + this.position;
        if (this.isDragged == true) {
            if (x != splitterX) {
                this.position = x - this.x;
                this.updateSubPanelWidth();
            }
        }
        else {
            if (x < splitterX) {
                this.updateFocus(this.leftPanel);
                this.leftPanel.mouseMove(x, y);
            }
            else {
                this.updateFocus(this.rightPanel);
                this.rightPanel.mouseMove(x, y);
            }
        }
    }

    /**
     * Release the splitter when dragged.
     */
    mouseUp(x, y)
    {
        this.isDragged = false;
        let splitterX = this.x + this.position;
        if (x < splitterX) {
            this.leftPanel.mouseUp(x, y);
        }
        else {
            this.rightPanel.mouseUp(x, y);
        }
    }
}

