/*globals define*/
define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var Modifier = require('famous/core/Modifier');
    var Engine = require('famous/core/Engine');

    /*
     * @name admin
     * @constructor
     * @description
     */

    function admin() {
        View.apply(this, arguments);
    }

    admin.prototype = Object.create(View.prototype);
    admin.prototype.constructor = admin;

    admin.DEFAULT_OPTIONS = {
    };

    module.exports = admin;
});
