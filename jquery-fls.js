/*!
 * jQuery Fast live search
 * http://jquery.com/
 *
 * Copyright 2015 Júlio César <talk@juliocesar.me>
 * Released under the MIT license
 * http://jquery.org/license
 *
 *
 */
(function ( $ ) {
    // Define Initial vars
    var flsClean = 0;
    var flsEffects = 'show/hide';
    var effects = [];
    
    // Define Filter all
    var flsFilterAll = function (container) {
        // Clean timeout
        clearTimeout(flsClean);
        
        // Get effects from data
        flsEffects = container.data('fls-effects') ? container.data('fls-effects') : flsEffects;
        
        // Run after 
        flsClean = setTimeout(function () {     
            // Split effects
            var effects = flsEffects.split('/');
            
            // Loop by each sub element
            $('.fls', container).each(function (i, e) {                      
                // Check for filter data
                if(($(e).data('category') == container.data('fls-category-text') || container.data('fls-category-text') == 'all') && ($(e).data('title').toLowerCase().match(container.data('fls-search-text')) || container.data('fls-search-text').trim() == '')) {
                    // Run the effect
                    $(e)[effects[0]]();
                } else {
                    // Run effect
                    $(e)[effects[1]]();
                }
            });
        }, 0);        
    };
    
    // Init Plugin Statement
    $.fn.fls = function() {        
        // Loop by each element
        this.each(function () {
            // Define container
            var container = $(this);
            
            // Check if container have data fls
            if(container.data('fls')) {                
                // Get category element
                var categoryE = $(container.data('fls-category-ipt'));
                
                // Get search element
                var searchE = $(container.data('fls-search-ipt'));
                
                // Define initial info
                container.data('fls-search-text', '');
                container.data('fls-category-text', 'all');
                
                // On category change
                categoryE.change(function () {
                    // Save data
                    container.data('fls-category-text', $(this).val().toLowerCase().trim());
                    
                    // Trigger filter
                    flsFilterAll(container);                    
                });
                
                // On search press
                searchE.keyup(function () {
                    // Save data
                    container.data('fls-search-text', $(this).val().toLowerCase().trim());
                    
                    // Trigger filter
                    flsFilterAll(container);
                });             
            }
        });
        return this;
    }; 

    // Apply FLS to all elements with fls data
    $(document).ready(function () {
        // Run the plugin
        $('[data-fls!=""]').fls();
    });
}( jQuery ));