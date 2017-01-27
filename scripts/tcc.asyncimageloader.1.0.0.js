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
 * Asynchronous Image Loading
 *
 * @fileOverview This script loads images on a web page asynchronously such
 * that the images do not appear gradually in stripes. Instead, an image is
 * displayed fully when the image is downloaded completely.
 * @requires jQuery
 * @requires tcc.map
 * @version 1.0.0
 * @author Joe (jieyouxu123@live.com)
 * @namespace tcc
 * @see {@link
    *     http://blog.teamtreehouse.com/learn-asynchronous-image-loading-javascript}
    *     The blog from which this script is adapted from.
 */
var tcc = (function (MODULE) {
    "use strict";
    
    /**
     * Resources sub-namespace.
     *
     * This sub-module contains methods and fields for operations to
     * resources on a web page.
     *
     * @type {Object}
     * @namespace tcc.resources
     * @memberOf tcc
     */
    MODULE.resources = MODULE.resources || {};
    
    /**
     * Contains information about the resources sub-module.
     *
     * @type {Object}
     * @memberOf tcc.resources
     */
    MODULE.resources.ABOUT = MODULE.resources.ABOUT || {
            "NAME":    "resources",
            "VERSION": "1.0.0",
            "AUTHOR":  "jieyouxu123@live.com"
        };
    
    /**
     * Custom Exception to be thrown when a dependency is not found.
     *
     * @param message
     * @constructor
     */
    MODULE.resources.DependencyException =
        function DependencyException(message) {
            this.message = message;
            // Use V8's native method if available, otherwise fallback
            if ("captureStackTrace" in Error) {
                Error.captureStackTrace(this,
                    MODULE.resources.DependencyException);
            } else {
                this.stack = (new Error()).stack;
            }
        };
    
    MODULE.resources.DependencyException.prototype             =
        Object.create(Error.prototype);
    MODULE.resources.DependencyException.prototype.name        =
        "DependencyException";
    MODULE.resources.DependencyException.prototype.constructor =
        MODULE.resources.DependencyException;
    
    /////// Determines whether or not tcc.map is present. ///////
    if (!tcc.misc.Map) {
        throw new MODULE.resources.DependencyException("This module needs" +
            " tcc.map as a dependency.");
    }
    
    // Debug purposes.
    MODULE.debug = MODULE.debug || function () {
        };
    
    /**
     * Asynchronous Image Loader.
     *
     * @memberOf tcc.resources
     */
    MODULE.resources.asyncImageLoader = MODULE.resources.asyncImageLoader || {};
    
    // TODO Implement Async Image Loading
    
    
    return MODULE;
})(tcc || {});