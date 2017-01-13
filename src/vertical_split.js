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
     * Resize the split.
     */
    resize(width, height)
    {
        this.width = width;
        this.height = height;

        if (this.leftPanel != null) {
            this.leftPanel.x = 0;
            this.leftPanel.y = 0;
            this.leftPanel.panel.width = this.position;
            this.leftPanel.panel.height = height;
        }

        if (this.rightPanel != null) {
            this.rightPanel.x = this.position;
            this.rightPanel.y = 0;
            this.rightPanel.panel.width = width - this.position;
            this.rightPanel.panel.height = height;
        }

        this.paint();
    }
}

