/*global define, console*/
define([
    'hammer'
    //'scalejs!core'
], function (
    hammer
    //core
) {
    'use strict';

    /*jslint unparam:true*/
    function init(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        hammer(element).on('dargstart drag dragend', function (e) {
            console.log(e);
        });
    }
    /*jslint unparam:false*/

    return {
        init: init
    };
});

