(function(){
    var overLay = function(){
        this.container = $('<div class="map-info-window"></div>');
        this.layer = null;
        this.marker = null;
        this.position = null;
    };
    /**
     * Inherit from OverlayView
     * @type {google.maps.OverlayView}
     */
    overLay.prototype = new google.maps.OverlayView();
    /**
     * Called when this overlay is set to a map via this.setMap. Get the appropriate map pane
     * to add the window to, append the container, bind to close element.
     * @see overLay.open
     */
    overLay.prototype.onAdd = function(){
        this.layer = $(this.getPanes().floatPane);
        this.layer.append(this.container);
        this.container.find('.map-info-close').on('click', _.bind(function(){
            // Close info window on click
            this.close();
        }, this));
    };
    /**
     * Called after onAdd, and every time the map is moved, zoomed, or anything else that
     * would effect positions, to redraw this overlay.
     */
    overLay.prototype.draw = function(){
        var markerIcon = this.marker.getIcon(),
            cHeight = this.container.outerHeight() + markerIcon.scaledSize.height + 10,
            cWidth = this.container.width() / 2 + markerIcon.scaledSize.width / 2;
        this.position = this.getProjection().fromLatLngToDivPixel(this.marker.getPosition());
        this.container.css({
            'top':this.position.y - cHeight,
            'left':this.position.x - cWidth
        });
    };
    /**
     * Called when this overlay has its map set to null.
     * @see overLay.close
     */
    overLay.prototype.onRemove = function(){
        this.container.remove();
    };
    /**
     * Sets the contents of this overlay.
     * @param {string} html
     */
    overLay.prototype.setContent = function(html){
        this.container.html(html);
    };
    /**
     * Sets the map and relevant marker for this overlay.
     * @param {google.maps.Map} map
     * @param {google.maps.Marker} marker
     */
    overLay.prototype.open = function(map, marker){
        this.marker = marker;
        this.setMap(map);
    };
    /**
     * Close this overlay by setting its map to null.
     */
    overLay.prototype.close = function(){
        this.setMap(null);
    };
    return overLay;
});
