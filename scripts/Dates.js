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
 * Dates.js -> Custom Date utils.
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
        root.dates = factory();
    }
}(this, function () {
    
    var daysOfWeekStrings = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];
    
    var monthsOfYearStrings = ["Janurary", "February", "March", "April", "May",
        "June", "July", "August", "September", "October", "November",
        "December"];
    
    function dayOfWeek() {
        return (new Date()).getDay();
    }
    
    function dayOfWeekAsString() {
        return daysOfWeekStrings[dayOfWeek()];
    }
    
    function monthOfYear() {
        return (new Date()).getMonth();
    }
    
    function monthOfYearAsString() {
        return monthsOfYearStrings[monthOfYear()];
    }
    
    function dayOfMonth() {
        return (new Date()).getDate();
    }
    
    function year() {
        return (new Date()).getFullYear();
    }
    
    return {
        dayOfWeek:           dayOfWeek,
        dayOfWeekAsString:   dayOfWeekAsString,
        monthOfYear:         monthOfYear,
        monthOfYearAsString: monthOfYearAsString,
        dayOfMonth:          dayOfMonth,
        year:                year
    };
}));