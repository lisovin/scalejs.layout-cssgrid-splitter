/*global define*/
define([
    './scalejs.layout-cssgrid-splitter/splitter',
    'knockout'
], function (
    splitter,
    ko
) {
    'use strict';

    ko.bindingHandlers.splitter = splitter;
});

