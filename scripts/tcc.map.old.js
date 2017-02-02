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

var tcc = (function (MODULE) {
    "use strict";
    
    MODULE.misc = MODULE.misc || {};
    
    MODULE.misc.ABOUT = MODULE.misc.ABOUT || {
            "NAME":    "misc",
            "VERSION": "1.0.0",
            "AUTHOR":  "jieyouxu123@live.com"
        };
    
    MODULE.misc.Map = function () {
        this.elements = [];
        
        this.size = function () {
            return this.elements.length;
        };
    
        this.isEmpty = function () {
            return (this.elements.length < 0);
        };
        
        this.clear = function () {
            this.elements = [];
        };
        
        this.put = function (key, value) {
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

        this.element = function (index) {
            if (index < 0 || index >= this.elements.length) {
                return null;
            }
            return this.elements[index];
        };
        
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

        this.keys = function () {
            var keysArray = [];
            for (var i = 0; i < this.elements.length; i++) {
                keysArray.push(this.elements[i].key);
            }
            return keysArray;
        };

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