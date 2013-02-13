# Google Analytics jQuery Plugin

**Google Analytics jQuery Plugin is a jQuery Plugin!**

When used in conjunction with the famous [jQuery framework][1], this plugin allows easy integration of [Google Analytics][2] on any webpage.

Google Analytics is an enterprise-class web analytics solution that gives you rich insights into your website traffic and marketing effectiveness. You know it already!

# What's on plate?

* Extremely simple to use. Copy-paste (almost) anywhere within your page. It just works!

* Familiar usage syntax for jQuery fanatics. (I see you) Drop those underscores!

* No need to write messy JavaScript codes within HTML body. Makes it easier to maintain pages, besides making the HTML codes sexier.

* Does not use the infamous document.write method to insert JavaScript. (Apparently Google does.)

* Increases the performance of your web-pages by loading Google Analytics codes after the current page is fully loaded in an async manner. (Yes, this was supported even before Google planned it. :p)

* Does not stop page loading while Google Analytics ga.js file is loading. In effect, prevents the annoying delay of loading pages due to slow response from Google Analytics servers.

* Extremely lightweight. The minified version of this plugin is as small as 688 bytes!

* Dynamically binds to the Google Analytics pageTracker and allows easier access to Google Analytics API. (As I said… with no underscores!)

# Usage Instructions

Using this plugin is as simple as including this plugin JavaScript file along with other JavaScript files of your pages HTML section and then replacing `xxxxxx-x` in that code with your Analytics account number.

## Installing this plugin and the Google Analytics codes

After, extracting the downloaded package to the desired folder on your server, you would need to include the code snippet given below, within the section of all your pages where you want this plugin to work.

```html
<script src="jquery.ga/jquery.ga.js" type="text/javascript"></script>
<script type="text/javascript">
$(document).ready( function() { $.ga.load("UA-xxxxxx-x"); } );
</script>
```

You might also need to change the path to the plugin file by providing the correct path in `src="jquery.ga/jquery.ga.js"` attribute.

## Using Google Analytics Tracking API with this plugin

This plugin dynamically maps all Google Analytics tracking methods to `$.ga` for easy access. What this means is that, whatever public API Google Analytics pageTracker uses, the same is applicable to this plugin.

For example, to invoke the `pageTracker._trackEvent(category, action, opt_label, opt_value)` method, you simply need to call `$.ga.trackEvent(category, action, opt_label, opt_value)`. In other words, the plugin binds on to all functions that begin with an underscore “_”.

## Executing a callback function:

You can execute a callback function upon load of Google Analytics Code. This can be done by passing a function to the 2nd parameter of the `load(uid, callback)` method.

```html
<script type="text/javascript">
$(document).ready( function() {
   $.ga.load("UA-xxxxxx-x", <strong>function(pageTracker) {
      // an example of a line of what your code can be…
      pageTracker._setDomainName(".example.com");
   }</strong>);
});
</script>
```

The first parameter sent to the callback method is the pageTracker object of Google Analytics.

# How this plugin works
This plugin uses the robust and reliable `jQuery.ajax` API to fetch the Google Analytics core JavaScript file (ga.js) after the document load is completed. It does not use the `jQuery.getScript` API as it prevents the loaded script from being cached.

After loading Google Analytics, it dynamically maps all tracker API to itself. This also implies that should, Google Analytics change its API, this plugin should automatically adapt to the changes.

# License
Copyright (c) 2012 Shamasis Bhattacharya <http://www.shamasis.net/projects/ga/>

Complies and conforms to all jQuery licensing schemes. <http://docs.jquery.com/License>

[1]: http://jquery.com/
[2]: http://www.google.com/analytics/