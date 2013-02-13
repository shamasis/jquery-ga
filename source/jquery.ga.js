/*jslint browser: true, sloppy: true, windows: true, forin: true, nomen: true, maxerr: 50, indent: 4 */
/*global jQuery */

// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS
// ==/ClosureCompiler==

/**!
 * @license jQuery Google Analytics Plugin
 * <http://www.shamasis.net/projects/ga/>
 * @version 2.0.1.103
 */
/**
 * jquery.ga.js
 * Copyright (c) 2012 Shamasis Bhattacharya
 * Complies and conforms to all jQuery licensing schemes.
 * <http://docs.jquery.com/License>
 *
 * Date: 2012-01-09
 */
(function ($) {

    var
        /**
         * Constants
         */
        win = window,
        UNDERSCORE = '_',
        SCRIPT = 'script',
        GET = 'get',
        HTTPS = 'https:',

        NO_TRACKER_MESSAGE = 'Tracker has not been defined',

        /**
         * The pageTracker variable, holding the pageTracker retrieved from _gat
         * @access: private
         */
        t,

        /**
         * Return functions that are executed within the scope of tracker.
         */
        close = function (fn, args) {
            return function () {
                fn.apply(t, args);
            };
        },

        /**
         *  Maps all user API of pageTracker to $.ga.* after dropping the
         *  underscore.
         *  @access: private
         */
        bind = function () {

            var $1;

            // check whether tracker exists
            if (!t) {
                throw NO_TRACKER_MESSAGE;
            }

            // for each function of tracker that starts with underscore, 
            // map it to $.ga.* after dropping the underscore.
            for ($1 in t) {
                if (($1.charAt(0) === UNDERSCORE) && $.isFunction(t[$1])) {
                    // Wrap it within a function to ensure correct scope.
                    $.ga[$1.substr(1)] = close(t[$1], arguments);
                }
            }
        };

    /**
     * Contains the various Google Analytics routines.
     *
     * @code
     * $(document).ready(function () {
     *    $.ga.load('UA-0000000-0');
     * });
     *
     *
     * @id jQuery.ga
     * @return Nothing
     * @type undefined
     * @since 1.0
     * @compat=IE6|IE7|IE8|FF1|FF2|FF3|OPERA|SAFARI2|SAFARI3|KONQ
     */
    $.ga = { };

    /**
     * Loads the Google Analytics core tracking scripts (ga.js) and other
     * routines.
     *
     * @code
     * $(document).ready(function () {
     *    $.ga.load('UA-0000000-0');
     * });
     *
     *
     * @param {String} uid Google Anayltics account id that will be used to
     * report analysis. The account it somewhat looks like "UA-0000000-0".
     * 
     * @param {Function} callback
     *
     * @id jQuery.ga.load
     * @return Nothing
     * @type undefined
     * @since 1.0
     * @compat=IE6|IE7|IE8|FF1|FF2|FF3|OPERA|SAFARI2|SAFARI3|KONQ
     */
    $.ga.load = function (uid, callback) {

        $.ajax({
            type: GET,
            url: (document.location.protocol === HTTPS ?
                    "https://ssl" : "http://www") +
                    '.google-analytics.com/ga.js',
            cache: true,
            success: function () {

                // check whether _gat is undefined
                if (!(win._gat && win._gat._getTracker)) {
                    throw NO_TRACKER_MESSAGE;
                }

                // create a new tracker
                t = win._gat._getTracker(uid);

                // map all underscore functions of tracker to $.ga
                bind();

                // call the callback function for user to do whatever
                // required.
                if ($.isFunction(callback)) {
                    callback(t);
                }

                // initialize GATC
                t._trackPageview();
            },
            dataType: SCRIPT,
            data: null
        });
    };

}(jQuery));