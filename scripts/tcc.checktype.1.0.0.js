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
 * TypeChecking utility.
 *
 * @fileOverview This script allows type-checking more reliable than the
 * <tt>typeof</tt> operator. Adapted from the answer from the StackOverFlow
 * question.
 * @version 1.0.0
 * @author Joe (jieyouxu123@live.com)
 * @namespace tcc
 * @see {@link
    *     http://stackoverflow.com/questions/7893776/the-most-accurate-way-to-check-js-object-type}
    *     The original question on StackOverFlow where the source of this
    *     script comes from.
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
     * Provides methods for checking the type of any object.
     *
     * @type {Object}
     * @namespace tcc.misc.checktype
     * @memberOf tcc.misc
     */
    MODULE.misc.checktype = MODULE.misc.checktype || {};
    
    /**
     * Checks if the value is of the supplied type.
     *
     * @param {*} testValue - The value of have its type tested for.
     * @param {!String} testType - The string representation of the type to
     * check the value for.
     * @returns {boolean} Returns <tt>true</tt> if is type of the value
     * equals to the supplied type. Else, returns false.
     * @private
     */
    function isValueOfType(testValue, testType) {
        // Calls <tt>Object.prototype.toString.call</tt> which returns a
        // string representation of the type of the object like "[object
        // ObjectType]" and then calls String's slice method to keep only
        // the "ObjectType" string, removing the redundant "[object " and "]".
        return Object.prototype.toString.call(testValue).slice(8, -1) ==
            testType;
    }
    
    /**
     * Checks if the value is of the supplied type.
     *
     * @param {*} testValue - The value of have its type tested for.
     * @param {!String} testType - The string representation of the type to
     * check the value for.
     * @returns {boolean} returns true if is type of the value
     * equals to the supplied type. Else, returns false.
     */
    // Exposes local isValueOfType function to the tcc.misc.checktype
    // namespace.
    MODULE.misc.checktype.isValueOfType = isValueOfType;
    
    /**
     * Checks if the value is an Array.
     *
     * @param {*} testValue
     * @returns {boolean} returns true if the value is an Array. Else, return
     * false.
     */
    MODULE.misc.checktype.isArray = function (testValue) {
        return isValueOfType(testValue, "Array");
    };
    
    /**
     * Checks if the value is an Boolean.
     *
     * @param {*} testValue
     * @returns {boolean} returns true if the value is a Boolean. Else, return
     * false.
     */
    MODULE.misc.checktype.isBoolean = function (testValue) {
        return isValueOfType(testValue, "Boolean");
    };
    
    /**
     * Checks if the value is a Date.
     *
     * @param {*} testValue
     * @returns {boolean} returns true if the value is a Date. Else, return
     * false.
     */
    MODULE.misc.checktype.isDate = function (testValue) {
        return isValueOfType(testValue, "Date");
    };
    
    /**
     * Checks if the value is a Function.
     *
     * @param {*} testValue
     * @returns {boolean} returns true if the value is a Function. Else, return
     * false.
     */
    MODULE.misc.checktype.isFunction = function (testValue) {
        return isValueOfType(testValue, "Function");
    };
    
    /**
     * Checks if the value is a Map.
     *
     * @param {*} testValue
     * @returns {boolean} returns true if the value is a Map. Else, return
     * false.
     */
    MODULE.misc.checktype.isMap = function (testValue) {
        return isValueOfType(testValue, "Map");
    };
    
    /**
     * Checks if the value is a Number.
     *
     * @param {*} testValue
     * @returns {boolean} returns true if the value is a Number. Else, return
     * false.
     */
    MODULE.misc.checktype.isNumber = function (testValue) {
        return isValueOfType(testValue, "Number");
    };
    
    /**
     * Checks if an Value is Null.
     *
     * @param {*} testValue
     * @returns {boolean} returns true if the value is Null. Else, return
     * false.
     */
    MODULE.misc.checktype.isNull = function (testValue) {
        return isValueOfType(testValue, "Null");
    };
    
    /**
     * Checks if the value is an Object.
     *
     * @param {*} testValue
     * @returns {boolean} returns true if the value is an Object. Else, return
     * false.
     */
    MODULE.misc.checktype.isObject = function (testValue) {
        return isValueOfType(testValue, "Object");
    };
    
    /**
     * Checks if the value is a regular expression.
     *
     * @param {*} testValue
     * @returns {boolean} returns true if the value is a regular expression.
     * Else, return false.
     */
    MODULE.misc.checktype.isRegExp = function (testValue) {
        return isValueOfType(testValue, "RegExp");
    };
    
    /**
     * Checks if the value is a String.
     *
     * @param {*} testValue
     * @returns {boolean} returns true if the value is a String. Else,
     * return false.
     */
    MODULE.misc.checktype.isString = function (testValue) {
        return isValueOfType(testValue, "String");
    };
    
    /**
     * Checks if the value is Undefined.
     *
     * @param {*} testValue
     * @returns {boolean} returns true if the value is Undefined. Else,
     * return false.
     */
    MODULE.misc.checktype.isUndefined = function (testValue) {
        return isValueOfType(testValue, "Undefined");
    };
    
    return MODULE;
})(tcc || {});