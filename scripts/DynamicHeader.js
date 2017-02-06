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

/*
 * DynamicHeader.js -> Binds resize function to DIV element.
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD support. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node.js support. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals support (root is window).
        // Note: The module can be used via a script tag in a web page:
        //      <script src="path/to/script.js">
        //          var module_name = window.module_name;
        //      </script>
        // In this fashion, there can be an "alias" to the module in the
        // global scope.
        root.DynamicHeader = factory();
    }
}(this, (function () {
    "use strict";
    
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
    }
    
    return resizeFunc;
})));