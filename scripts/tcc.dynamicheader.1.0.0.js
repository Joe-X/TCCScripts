/*
 * Copyright (c) 2016 Joe [jieyouxu123@live.com]. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 *   - Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *
 *   - Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 *
 *   - Neither the name of Joe or the names of his
 *     contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
 * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Dynamic Header Bar
 *
 * @fileOverview This script binds a function to resize a DIV element when the
 *     user scrolls down a web page.
 * @requires jQuery
 * @version 1.0.0
 * @author Joe (jieyouxu123@live.com)
 * @namespace tcc
 */
var tcc = (function (MODULE) {
    "use strict";
    
    /**
     * Misc sub-namespace.
     *
     * This sub-module contains miscellaneous methods and fields that can be
     * used by other sub-modules.
     *
     * @type {Object}
     * @namespace tcc.misc
     * @memberOf tcc
     */
    MODULE.misc = MODULE.misc || {};
    
    /**
     * Contains information about the misc sub-module.
     *
     * @type {Object}
     * @memberOf tcc.misc
     */
    MODULE.misc.ABOUT = MODULE.misc.ABOUT || {
            "NAME":    "misc",
            "VERSION": "1.0.0",
            "AUTHOR":  "jieyouxu123@live.com"
        };
    
    /**
     * Binds resize function to specified DIV element. This variation of the
     * method takes an DOM object of the DIV_ELEMENT.
     *
     * @param {!Object} DIV_ELEM_OBJECT - an DOM object of the DIV_ELEMENT
     * @param {!Number} MAX_HEIGHT - initial height of the DIV element
     * @param {!Number} MIN_HEIGHT - reduced height of the DIV element
     * @param {!Number} SMOOTH_TIME - number of milliseconds to smooth the
     * transition between the two heights when scrolling down.
     *
     * @see {@link
        *     http://stackoverflow.com/questions/16442016/jquery-sticky-header-that-shrinks-when-scrolling-down}
        *     Answer by jezzipin, May 8 2013 at 13:50
     *
     * @memberOf tcc.misc
     *
     * @public
     */
    MODULE.misc.bindResizeFunctionToDiv =
        function resizeFunc(DIV_ELEM_OBJECT, MAX_HEIGHT, MIN_HEIGHT,
            SMOOTH_TIME) {
            // Return to caller if the parameters are invalid.
            // Requires all all parameter to be non-null, and the type of
            // DIV_ELEM to be of string; MAX_HEIGHT, MIN_HEIGHT and
            // SMOOTH_TIME needs to be numbers.
            if (!(DIV_ELEM_OBJECT && MAX_HEIGHT && MIN_HEIGHT && SMOOTH_TIME &&
                typeof DIV_ELEM_OBJECT === "object" &&
                typeof MAX_HEIGHT === "number" &&
                typeof MIN_HEIGHT === "number" &&
                typeof SMOOTH_TIME === "number")) {
                alert("INCORRECT PARAM!");
                return;
            }
            
            DIV_ELEM_OBJECT.data("resize_height", "normal");
            
            // Binds function to scroll event.
            $(window).scroll(function () {
                if ($(document).scrollTop() > 0) {
                    if (DIV_ELEM_OBJECT.data("resize_height") == "normal") {
                        DIV_ELEM_OBJECT.data("resize_height", "reduced");
                        DIV_ELEM_OBJECT.stop().animate({
                            height: MIN_HEIGHT
                        }, 600);
                    }
                } else {
                    if (DIV_ELEM_OBJECT.data("resize_height") == "reduced") {
                        DIV_ELEM_OBJECT.data("resize_height", "normal");
                        DIV_ELEM_OBJECT.stop().animate({
                            height: MAX_HEIGHT
                        }, 600);
                    }
                }
            });
        };
    
    /**
     * Binds resize function to specified DIV element. This variation of the
     * method takes an ID string of the DIV element.
     *
     * @param {!String} DIV_ELEM - string of the id of the DIV element to resize
     * when scrolling down.
     * @param {!Number} MAX_HEIGHT - initial height of the DIV element
     * @param {!Number} MIN_HEIGHT - reduced height of the DIV element
     * @param {!Number} SMOOTH_TIME - number of milliseconds to smooth the
     * transition between the two heights when scrolling down.
     *
     * @memberOf tcc.misc
     *
     * @public
     */
    MODULE.misc.bindResizeFunctionToDiv1 =
        function resizeFunc(DIV_ELEM, MAX_HEIGHT, MIN_HEIGHT, SMOOTH_TIME) {
            // Return to caller if the parameters are invalid.
            // Requires all all parameter to be non-null, and the type of
            // DIV_ELEM to be of string; MAX_HEIGHT, MIN_HEIGHT and
            // SMOOTH_TIME needs to be numbers.
            if (!(DIV_ELEM && MAX_HEIGHT && MIN_HEIGHT && SMOOTH_TIME &&
                typeof DIV_ELEM === "string" &&
                typeof MAX_HEIGHT === "number" &&
                typeof MIN_HEIGHT === "number" &&
                typeof SMOOTH_TIME === "number")) {
                return;
            }
            
            // Cache DIV_ELEM DOM Object such that jQuery does not need to
            // iterate through the DOM tree every time we try to modify the
            // "resize_height" property on DIV_ELEM.
            var $DIV_ELEMENT = $(DIV_ELEM);
            
            // Call base method.
            MODULE.misc.bindResizeFunctionToDiv($DIV_ELEMENT, MAX_HEIGHT,
                MIN_HEIGHT,
                SMOOTH_TIME);
        };
    
    return MODULE;
})(tcc || {});
