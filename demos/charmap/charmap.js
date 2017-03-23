var canvas = null;
var context = null;

/**
 * Draw the character map.
 */
function drawCharmap(charmap, colormap)
{
    var height = 18;
    context.font = '' + height + 'px Monospace';
    context.textBaseline = 'top';

    var metrics = context.measureText("a");
    var width = metrics.width;

    // Draw background
    context.fillStyle = "#222";
    context.fillRect(0, 0, 800, 600);

    var nRows = charmap.length;
    var nColumns = charmap[0].length;

    for (var i = 0; i < nRows; ++i) {
        for (var j = 0; j < nColumns; ++j) {
            context.fillStyle = colormap[i][j];
            context.fillText(charmap[i][j], j * width, i * height);
        }
    }
}

window.onload = function()
{
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    var charmap = [
        ['T', 'h', 'i', 's'],
        [' ', 'i', 's', '!'],
        [' ', 'o', 'k', ' ']
    ];

    var colormap = [
        ['#FFF', '#FFF', '#FFF', '#FFF'],
        ['#FFF', '#FFF', '#FFF', '#F00'],
        ['#FFF', '#0F0', '#0F0', '#FFF']
    ];

    drawCharmap(charmap, colormap);
}

