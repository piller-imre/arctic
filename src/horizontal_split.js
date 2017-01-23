/**
 * Represents a horizontal split.
 */
class HorizontalSplit extends Panel
{
    /**
     * Set the position of the splitter line.
     */
    constructor(position)
    {
        super();
        this.position = position;
        this.topPanel = null;
        this.bottomPanel = null;
        this.isDragged = false;
    }

    /**
     * Set the top panel.
     */
    setTopPanel(panel)
    {
        this.addSubPanel(panel);
        this.topPanel = panel;
        // TODO: Resize the panel!
        // TODO: Check that the top panel did not set before!
    }

    /**
     * Set the bottom panel.
     */
    setBottomPanel(panel)
    {
        this.addSubPanel(panel);
        this.bottomPanel = panel;
        // TODO: Resize the panel!
        // TODO: Check that the bottom panel did not set before!
    }

    /**
     * Set the position of the splitter line.
     */
    setPosition(position)
    {
        this.position = position;
    }

    /**
     * Update the height of the subpanels.
     */
    updateSubPanelHeight()
    {
        if (this.topPanel != null) {
            this.topPanel.resize(this.x, this.y, this.width, this.position);
        }

        if (this.bottomPanel != null) {
            this.bottomPanel.resize(this.x, this.y + this.position, this.width, this.height - this.position);
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
        this.updateSubPanelHeight();
    }

    /**
     * Check mouse click on the splitter.
     */
    mouseDown(x, y)
    {
        let splitterY = this.y + this.position;
        if (y >= splitterY - 5 && y <= splitterY + 5) {
            this.isDragged = true;
        }
        else if (y < splitterY) {
            this.updateFocus(this.topPanel);
            this.topPanel.mouseDown(x, y);
        }
        else {
            this.updateFocus(this.bottomPanel);
            this.bottomPanel.mouseDown(x, y);
        }
    }

    /**
     * Change the position when the splitter has dragged.
     */
    mouseMove(x, y)
    {
        let splitterY = this.y + this.position;
        if (this.isDragged == true) {
            if (y != splitterY) {
                this.position = y - this.y;
                this.updateSubPanelHeight();
            }
        }
        else {
            if (y < splitterY) {
                this.updateFocus(this.topPanel);
                this.topPanel.mouseMove(x, y);
            }
            else {
                this.updateFocus(this.bottomPanel);
                this.bottomPanel.mouseMove(x, y);
            }
        }
    }

    /**
     * Release the splitter when dragged.
     */
    mouseUp(x, y)
    {
        this.isDragged = false;
        let splitterY = this.y + this.position;
        if (y < splitterY) {
            this.topPanel.mouseUp(x, y);
        }
        else {
            this.bottomPanel.mouseUp(x, y);
        }
    }
}

