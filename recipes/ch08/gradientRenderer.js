/**
 * Class: OpenLayers.Renderer.Gradient 
 * Improved canvas based rendered to draw points using gradient.
 * 
 * Inherits:
 *  - <OpenLayers.Renderer.Canvas>
 */
OpenLayers.Renderer.Gradient = OpenLayers.Class(OpenLayers.Renderer.Canvas, {
    
    /**
     * Constructor: OpenLayers.Renderer.Gradient
     *
     * Parameters:
     * containerID - {<String>}
     * options - {Object} Optional properties to be set on the renderer.
     */
    initialize: function(containerID, options) {
        OpenLayers.Renderer.Canvas.prototype.initialize.apply(this, arguments);
    },
    
    /**
     * Method: drawPoint
     * This method is only called by the renderer itself.
     * 
     * Parameters: 
     * geometry - {<OpenLayers.Geometry>}
     * style    - {Object}
     * featureId - {String}
     */ 
    drawPoint: function(geometry, style, featureId) {
        var pt = this.getLocalXY(geometry);
        var p0 = pt[0];
        var p1 = pt[1];
        
        if(!isNaN(p0) && !isNaN(p1)) {  
            if(style.fill !== false) {
                this.setCanvasStyle("fill", style);
                
                // Create color from fillColor and fillOpacity properties.
                var color = style.fillColor;
                color += "ff";
                color = color.replace("#", "0x");
            
                var colorRGBA = 'rgba(' +
                ((color >> 24) & 0xFF) + ',' +
                ((color >> 16) & 0xFF) + ',' +
                ((color >>  8) & 0xFF) + ',' +
                style.fillOpacity + ')';
            
                var gradient = this.canvas.createRadialGradient(p0, p1, 0, p0, p1, style.pointRadius);
                gradient.addColorStop(0, '#FFFFFF');
                gradient.addColorStop(0.9, colorRGBA);
                gradient.addColorStop(1, 'rgba(1,255,0,0)');
            
                this.canvas.fillStyle = gradient;            
                this.canvas.fillRect(0, 0, this.root.width, this.root.height);

                this.canvas.fill();
            }
        }
    },
    
    CLASS_NAME: "OpenLayers.Renderer.Gradient"
});
