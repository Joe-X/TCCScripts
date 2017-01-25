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
 * Current datetime methods.
 *
 * @fileOverview This script calls the Datetime API of the user to return
 * the system date and time.
 * @requires jQuery
 * @version 1.0.0
 * @author Joe (jieyouxu123@live.com)
 * @namespace tcc
 * @see {@link
    *     http://www.htmlgoodies.com/beyond/javascript/article.php/3887346} For
 *     where the script was adapted from.
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
     * Contains the name of the days in a week.
     *
     * @type {String[]}
     * @memberOf tcc.misc
     */
    MODULE.misc.DAYS =
        ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
            "Saturday"];
    
    /**
     * Contains the name of the months in a year.
     *
     * @type {String[]}
     * @memberOf tcc.misc
     */
    MODULE.misc.MONTHS =
        ["Janurary", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];
    
    /**
     * Caches the <code>Date</code> object.
     *
     * @type {Date}
     * @memberOf tcc.misc
     * @private
     */
    MODULE.misc.__DATE__ = null;
    
    /**
     * Returns the <code>Date</code> object; creates new <code>Date</code>
     * object if one does not exist already.
     *
     * @returns {Date} <code>Date</code> object
     *
     * @constructor
     * @memberOf tcc.misc
     */
    MODULE.misc.DATE = function () {
        if (MODULE.misc.__DATE__ === null) {
            MODULE.misc.__DATE__ = new Date();
            return MODULE.misc.__DATE__
        }
        return MODULE.misc.__DATE__;
    };
    
    return MODULE;
})(tcc || {});