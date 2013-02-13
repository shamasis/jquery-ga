/*
 jQuery Google Analytics Plugin
 <http://www.shamasis.net/projects/ga/>
 @version 2.0.1.103
*/
(function(b){var d=window,c,f=function(a,b){return function(){a.apply(c,b)}},g=function(){var a;if(!c)throw"Tracker has not been defined";for(a in c)"_"===a.charAt(0)&&b.isFunction(c[a])&&(b.ga[a.substr(1)]=f(c[a],arguments))};b.ga={};b.ga.load=function(a,e){b.ajax({type:"get",url:("https:"===document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js",cache:!0,success:function(){if(!d._gat||!d._gat._getTracker)throw"Tracker has not been defined";c=d._gat._getTracker(a);g();
b.isFunction(e)&&e(c);c._trackPageview()},dataType:"script",data:null})}})(jQuery);