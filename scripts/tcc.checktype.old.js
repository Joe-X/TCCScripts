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
    
    MODULE.misc.checktype = MODULE.misc.checktype || {};
    
    function isValueOfType(testValue, testType) {
        // Calls <tt>Object.prototype.toString.call</tt> which returns a
        // string representation of the type of the object like "[object
        // ObjectType]" and then calls String's slice method to keep only
        // the "ObjectType" string, removing the redundant "[object " and "]".
        return Object.prototype.toString.call(testValue).slice(8, -1) ==
            testType;
    }
    
    isValueOfType = isValueOfType;
    
    isArray = function (testValue) {
        return isValueOfType(testValue, "Array");
    };
    
    isBoolean = function (testValue) {
        return isValueOfType(testValue, "Boolean");
    };
    
    isDate = function (testValue) {
        return isValueOfType(testValue, "Date");
    };
    
    isFunction = function (testValue) {
        return isValueOfType(testValue, "Function");
    };
    
    isMap = function (testValue) {
        return isValueOfType(testValue, "Map");
    };
    
    isNumber = function (testValue) {
        return isValueOfType(testValue, "Number");
    };
    
    isNull = function (testValue) {
        return isValueOfType(testValue, "Null");
    };
    
    isObject = function (testValue) {
        return isValueOfType(testValue, "Object");
    };
    
    isRegExp = function (testValue) {
        return isValueOfType(testValue, "RegExp");
    };
    
    isString = function (testValue) {
        return isValueOfType(testValue, "String");
    };
    
    isUndefined = function (testValue) {
        return isValueOfType(testValue, "Undefined");
    };
    
    return MODULE;
})(tcc || {});