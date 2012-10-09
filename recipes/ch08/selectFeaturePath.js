/**
 * Class: OpenLayers.Control.SelectFeaturePath
 * The SelectFeaturePath control selects vector features from a given layer 
 * that intersects with a path.
 *
 * Inherits from:
 *  - <OpenLayers.Control.SelectFeature>
 */
OpenLayers.Control.SelectFeaturePath = OpenLayers.Class(OpenLayers.Control.SelectFeature, {
                
    /**
     * Constructor: OpenLayers.Control.SelectFeaturePath
     * Create a new control for selecting features using 
     * an OpenLayers.Handler.Path handler.
     *
     * Parameters:
     * layers - {<OpenLayers.Layer.Vector>}, or an array of vector layers. The
     *     layer(s) this control will select features from.
     * options - {Object} 
     */
    initialize: function(layers, options) {
        OpenLayers.Control.SelectFeature.prototype.initialize.apply(this, arguments);
                    
        this.box = true;                    
        this.handlers.box = new OpenLayers.Handler.Path(this, {
            done: this.selectPath
        });
    },
                
    /**
     * Method: selectPath
     * Callback from the handlers.box set up when <path> selection is done.
     * Select those features that intersects with the path.
     *
     * Parameters:
     * path - {<OpenLayers.Geometry.LineString>}  
     */
    selectPath: function(path) {
        // If multiple is false, first deselect currently selected features
        if (!this.multipleSelect()) {
            this.unselectAll();
        }
            
        // Consider we want multiple selection
        var prevMultiple = this.multiple;
        this.multiple = true;
        var layers = this.layers || [this.layer];
        var layer;
        for(var l=0; l<layers.length; ++l) {
            layer = layers[l];
            for(var i=0, len = layer.features.length; i<len; ++i) {
                var feature = layer.features[i];
                // Check if the feature is displayed
                if (!feature.getVisibility()) {
                    continue;
                }

                if (this.geometryTypes == null || OpenLayers.Util.indexOf(
                    this.geometryTypes, feature.geometry.CLASS_NAME) > -1) {
                    if (path.intersects(feature.geometry)) {
                        if (OpenLayers.Util.indexOf(layer.selectedFeatures, feature) == -1) {
                            this.select(feature);
                        }
                    }
                }
            }
        }
        this.multiple = prevMultiple;        
    },
                
    CLASS_NAME: "OpenLayers.Control.SelectFeaturePath"
});
            