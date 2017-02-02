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
        root.typechecker = factory();
    }
}(this, function () {
    "use strict";
    
    function getTypeAsString(testValue) {
        // Calls <tt>Object.prototype.toString.call</tt> which returns a
        // string representation of the type of the object like "[object
        // ObjectType]" and then calls String's slice method to keep only
        // the "ObjectType" string, removing the redundant "[object " and "]".
        return Object.prototype.toString.call(testValue).slice(8, -1);
    }
    
    function isValueOfBasicType(testValue, testType) {
        return getTypeAsString(testValue) === testType;
    }
    
    function isArray(testValue) {
        return isValueOfBasicType(testValue, "Array");
    }
    
    function isBoolean(testValue) {
        return isValueOfBasicType(testValue, "Boolean");
    }
    
    function isDate(testValue) {
        return isValueOfBasicType(testValue, "Date");
    }
    
    function isFunction(testValue) {
        return isValueOfBasicType(testValue, "Function");
    }
    
    function isMap(testValue) {
        if (!Map) {
            return;
        }
        
        if (testValue instanceof Map) {
            return true;
        }
    }
    
    function isNumber(testValue) {
        return isValueOfBasicType(testValue, "Number");
    }
    
    function isNull(testValue) {
        return isValueOfBasicType(testValue, "Null");
    }
    
    function isObject(testValue) {
        return isValueOfBasicType(testValue, "Object");
    }
    
    function isRegExp(testValue) {
        return isValueOfBasicType(testValue, "RegExp");
    }
    
    function isString(testValue) {
        return isValueOfBasicType(testValue, "String");
    }
    
    function isUndefined(testValue) {
        return isValueOfBasicType(testValue, "Undefined");
    }
    
    function areBothSameType(testValue1, testValue2) {
        return getTypeAsString(testValue1) === getTypeAsString(testValue2);
    }
    
    return {
        _getTypeAsString:    getTypeAsString,
        _isValueOfBasicType: isValueOfBasicType,
        isArray:             isArray,
        isBoolean:           isBoolean,
        isDate:              isDate,
        isFunction:          isFunction,
        isMap:               isMap,
        isNumber:            isNumber,
        isNull:              isNull,
        isObject:            isObject,
        isRegExp:            isRegExp,
        isString:            isString,
        isUndefined:         isUndefined,
        areBothSameType:     areBothSameType
    }
}));