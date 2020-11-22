
/**
 * Added form style doubleRectangle, using mxDoubleEllipse as a guide
 *
 **/
function mxDoubleRectangle(bounds, fill, stroke, strokewidth){
	mxRectangleShape.call(this)
		// mxShape.call(this);
		// this.bounds = bounds;
		//     this.fill = fill;
		//     this.stroke = stroke;
		//     this.strokewidth = (strokewidth != null) ? strokewidth: 1;

}
mxUtils.extend(mxDoubleRectangle, mxRectangleShape);

//mxDoubleRectangle.prototype.vmlScale = 10;

// mxDoubleRectangle.prototype.paintBackground = function(c, x, y, w, h)
// {
// 	c.ellipse(x, y, w, h);
// 	c.fillAndStroke();
// };

mxDoubleRectangle.prototype.paintForeground = function(c, x, y, w, h)
{
	if (!this.outline)
	{
		var margin = mxUtils.getValue(this.style, mxConstants.STYLE_MARGIN, Math.min(3 + this.strokewidth, Math.min(w / 5, h / 5)));
		x += margin;
		y += margin;
		w -= 2 * margin;
		h -= 2 * margin;
		
		if (w > 0 && h > 0)
		{
			c.rect(x, y, w, h);
			// this.paintGlassEffect(c, x, y, w, h, this.getArcSize(w + this.strokewidth, h + this.strokewidth));
		}
		c.stroke();
	}
};
//
// mxDoubleRectangle.prototype.getLabelBounds = function(rect)
// {
// 	var margin = (mxUtils.getValue(this.style, mxConstants.STYLE_MARGIN, Math.min(3 + this.strokewidth,
// 			Math.min(rect.width / 5 / this.scale, rect.height / 5 / this.scale)))) * this.scale;
//
// 	return new mxRectangle(rect.x + margin, rect.y + margin, rect.width - 2 * margin, rect.height - 2 * margin);
// };


mxCellRenderer.registerShape('doubleRectangle', mxDoubleRectangle);