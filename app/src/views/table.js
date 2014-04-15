/*globals define*/
define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var Modifier = require('famous/core/Modifier');
    var Engine = require('famous/core/Engine');

    /*
     * @name table
     * @constructor
     * @description
     */

    function table() {
        View.apply(this, arguments);
    }

    table.prototype = Object.create(View.prototype);
    table.prototype.constructor = table;

    table.DEFAULT_OPTIONS = {
    };

    module.exports = table;
});
