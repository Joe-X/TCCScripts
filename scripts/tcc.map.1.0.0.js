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
 * <code>Map</code> implementation in javascript. Not designed to be used on
 * large scale.
 *
 * @fileOverview This script implements <code>Map</code>, similar to that of
 * Java's Collections framework.
 * @version 1.0.0
 * @author Joe (jieyouxu123@live.com)
 * @namespace tcc
 * @see {@link https://docs.oracle.com/javase/7/docs/api/java/util/Map.html}
 * The original Java Map.
 * @see {@link http://www.oschina.net/code/snippet_87799_566} The website of
 * which this script is adapted from.
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
     * Constructs a new Map instance.
     *
     * @type {Map}
     * @memberOf tcc.misc
     * @constructor
     * @see {@link http://www.oschina.net/code/snippet_87799_566}
     */
    MODULE.misc.Map = function () {
        /**
         * Contains the elements of the <code>Map</code>.
         *
         * @type {Array}
         */
        this.elements = [];
        
        /**
         * Returns the size of the <code>Map</code>.
         *
         * @returns {Number} the size of the <code>Map</code>
         */
        this.size = function () {
            return this.elements.length;
        };
    
        /**
         * Returns whether the <code>Map</code> is empty or not.
         *
         * @returns {boolean} <tt>true</tt> if the <code>Map</code> does not
         *     contain any elements, <tt>false</tt> if the
         *     <code>Map</code> contains elements.
         */
        this.isEmpty = function () {
            return (this.elements.length < 0);
        };
        
        /**
         * Deletes all elements of the <code>Map</code>.
         */
        this.clear = function () {
            this.elements = [];
        };
        
        /**
         * Puts a new element into the <code>Map</code>.
         *
         * @param key
         * @param value
         *
         * @returns {boolean} true if an entry is successfully added to the
         * <code>Map</code>.
         */
        this.put = function (key, value) {
            //this.elements.push({
            //    key:   key,
            //    value: value
            //});
            
            try {
                for (var i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].key == key) {
                        this.elements[i].value = value;
                        return true;
                    }
                }
                
                this.elements.push({
                    key:   key,
                    value: value
                });
                
                return true;
            } catch (e) {
                return false;
            }
        };
        
        /**
         * Removes specified entry from the <code>Map</code>.
         *
         * @param key
         * @returns {boolean} true if remove operation was successful and no
         * exception was thrown.
         */
        this.remove = function (key) {
            try {
                for (var i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].key == key) {
                        this.elements.splice(i, 1);
                        return true;
                    }
                }
                return false;
            } catch (e) {
                return false;
            }
        };
        
        /**
         * Returns value associated with the specified key.
         *
         * @param key
         * @returns {Object} the value corresponding to the key. Returns
         * <tt>null</tt> if key or value does not exist.
         */
        this.get = function (key) {
            try {
                for (var i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].key == key) {
                        return this.elements[i].value;
                    }
                }
                return null;
            } catch (e) {
                return null;
            }
        };
        
        /**
         * Returns key-value pair of specified index.
         *
         * @param index
         * @return {key, value} key-value pair at given index.
         */
        this.element = function (index) {
            if (index < 0 || index >= this.elements.length) {
                return null;
            }
            return this.elements[index];
        };
        
        /**
         * Determines whether or not the <code>Map</code> contains a specified
         * key.
         *
         * @param key
         * @return {boolean} true if the <code>Map</code> contains a key
         * equivalent to that of the specified key.
         */
        this.containsKey = function (key) {
            try {
                for (var i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].key == key) {
                        return true;
                    }
                }
                return false;
            } catch (e) {
                return false;
            }
        };
        
        /**
         * Determines whether or not the <code>Map</code> contains a specified
         * value.
         *
         * @param value
         * @return {boolean} true if the <code>Map</code> contains a value
         * equivalent to that of the specified value.
         */
        this.containsValue = function (value) {
            try {
                for (var i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].value == value) {
                        return true;
                    }
                }
                return false;
            } catch (e) {
                return false;
            }
        };
        
        /**
         * Returns an array containing the keys of the <code>Map</code>.
         *
         * @return {Array} array containing keys of the <code>Map</code>.
         */
        this.keys = function () {
            var keysArray = [];
            for (var i = 0; i < this.elements.length; i++) {
                keysArray.push(this.elements[i].key);
            }
            return keysArray;
        };
        
        /**
         * Returns an array containing the values of the <code>Map</code>.
         *
         * @return {Array} array containing values of the <code>Map</code>.
         */
        this.values = function () {
            var valuesArray = [];
            for (var i = 0; i < this.elements.length; i++) {
                valuesArray.push(this.elements[i].value);
            }
            return valuesArray;
        };
    };
    
    return MODULE;
})(tcc || {});