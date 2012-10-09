/**
 * Class: OpenLayers.Control.Cross
 * The Cross control renders a cross in the middle of the map.
 *
 * Inherits from:
 *  - <OpenLayers.Control>
 */
OpenLayers.Control.Cross = OpenLayers.Class(OpenLayers.Control, {
    
    /**
     * crossClick event is triggered when the cross is clicked by the mouse.
     */
    EVENT_TYPES: ["crossClick"],
    
    /**
     * Parameter: size
     * {OpenLayers.Size} with the desired dimension for the image
     */
    size: null,
    
    /**
     * Parameter: element
     * {DOMElement} for the image shown by the control
     */
    element: null,
    
    /**
     * Constructor: OpenLayers.Control.Cross 
     * Draw a cross in the middle of the map.
     *
     * Parameters:
     * options - {Object} An optional object whose properties will be used
     *     to extend the control.
     */
    initialize: function(options) {
        // Concatenate events specific to measure with those from the base
        this.EVENT_TYPES =
        OpenLayers.Control.Cross.prototype.EVENT_TYPES.concat(
            OpenLayers.Control.prototype.EVENT_TYPES);
            
        if(!options) {
            options = {};
        }        
        if(!options.size) {
            options.size = new OpenLayers.Size(48, 48);
        }
        OpenLayers.Control.prototype.initialize.apply(this, [options]);
    },
    
    /**
     * Method: draw
     * 
     * Returns:
     * {DOMElement}
     */    
    draw: function() {
        
        // Compute center position
        var position = new OpenLayers.Pixel(
            (this.map.div.offsetWidth - this.size.w) / 2, 
            (this.map.div.offsetHeight - this.size.h) / 2
            );
        
        OpenLayers.Control.prototype.draw.apply(this, [position]);

        // Create location label element
        this.element = OpenLayers.Util.createDiv(null);
        OpenLayers.Element.addClass(this.element, "olControlCrossText");
        
        var lonlat = this.computeLonLat();
        this.element.innerHTML = lonlat.lon + " / " + lonlat.lat;
        
        this.div.appendChild(this.element);

        // Listen for event in the control's div
        OpenLayers.Event.observe(this.div, 'click', OpenLayers.Function.bind(this.onClick, this));
        // Register event for map's move event.
        this.map.events.register("move", this, this.onMove);

        return this.div;
    },
    
    /**
     * Updates the location text.
     */
    onMove: function (event) {
        var lonlat = this.computeLonLat();
        this.element.innerHTML = lonlat.lon + " / " + lonlat.lat;
    },  
    
    /**
     * Fires a crossClick event.
     */
    onClick: function (event) {
        var lonlat = this.computeLonLat();
        this.events.triggerEvent("crossClick", {
            lonlat: lonlat
        });
    },
    
    /**
     * Computes the control location.
     * 
     * Returns:
     * {<OpenLayers.LonLat>}
     */
    computeLonLat: function() {
        var pixel = this.position.clone();
        pixel.x += this.size.w/2;
        pixel.y += this.size.h/2;
        return this.map.getLonLatFromPixel(pixel);
    },
    
    CLASS_NAME: "OpenLayers.Control.Cross"
});
