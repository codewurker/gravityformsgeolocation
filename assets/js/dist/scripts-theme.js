!function(){"use strict";var e,n={2891:function(e,n,o){var t=gform.utils,r=google,a=o.n(r);function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var o=0,t=new Array(n);o<n;o++)t[o]=e[o];return t}var l=function(e,n){if(null!=e&&e.options.length){var o=2===e.options[1].value.length?n.short_name:n.long_name;Array.from(e.options).some((function(e){return e.value===o}))?e.value=o:e.value=""}},u=function(){var e=(0,t.getNodes)('.gfield[data-js="geolocation-enabled"]',!1,document,!0);e.length&&e.forEach((function(e){var n=(0,t.getNodes)(".address_line_1 input",!1,e,!0)[0];if(n){var o=new(a().maps.places.Autocomplete)(n,{fields:["address_components","geometry"],types:["address"]});o.addListener("place_changed",function(e,n){return function(){var o=e.getPlace();if(Array.isArray(o.address_components)){var r,a={},u=function(e,n){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,n){if(e){if("string"==typeof e)return i(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?i(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){o&&(e=o);var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,u=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return l=e.done,e},e:function(e){u=!0,a=e},f:function(){try{l||null==o.return||o.return()}finally{if(u)throw a}}}}(o.address_components);try{for(u.s();!(r=u.n()).done;){var s=r.value;a[s.types[0]]=s}}catch(e){u.e(e)}finally{u.f()}(function(e,n){var o=(0,t.getNodes)(".address_line_1 input",!1,e,!0)[0],r=[];o&&(null!=n&&n.street_number&&r.push(n.street_number.long_name),null!=n&&n.route&&r.push(n.route.long_name),o.value=r.join(" "))})(n,a),function(e,n){var o=(0,t.getNodes)(".address_city input",!1,e,!0)[0];o&&(null!=n&&n.postal_town?o.value=n.postal_town.long_name:null!=n&&n.locality&&(o.value=n.locality.long_name))}(n,a),function(e,n){var o,r=(0,t.getNodes)(".address_state input",!1,e,!0)[0],a=(0,t.getNodes)(".address_state select",!1,e,!0)[0];(r||a)&&(null!=n&&n.administrative_area_level_2&&["GB"].includes(null==n||null===(o=n.country)||void 0===o?void 0:o.short_name)?r?r.value=n.administrative_area_level_2.long_name:l(a,n.administrative_area_level_2):null!=n&&n.administrative_area_level_1&&(r?r.value=n.administrative_area_level_1.long_name:l(a,n.administrative_area_level_1)))}(n,a),function(e,n){var o=(0,t.getNodes)(".address_zip input",!1,e,!0)[0],r=[];o&&(null!=n&&n.postal_code_prefix&&r.push(n.postal_code_prefix.long_name),null!=n&&n.postal_code&&r.push(n.postal_code.long_name),null!=n&&n.postal_code_suffix&&r.push(n.postal_code_suffix.long_name),o.value=r.join(" "))}(n,a),function(e,n){var o=(0,t.getNodes)('input[name$=".6"]',!1,e,!0)[0],r=(0,t.getNodes)(".address_country select",!1,e,!0)[0];(o||r)&&null!=n&&n.country&&(o?o.value=n.country.long_name:l(r,n.country))}(n,a),function(e,n){var o,r,a,i,l=(0,t.getNodes)('input[name$="geolocation_latitude"]',!1,e,!0)[0],u=(0,t.getNodes)('input[name$="geolocation_longitude"]',!1,e,!0)[0];l&&null!=n&&null!==(o=n.geometry)&&void 0!==o&&null!==(r=o.location)&&void 0!==r&&r.lat&&"function"==typeof n.geometry.location.lat&&(l.value=n.geometry.location.lat()),u&&null!=n&&null!==(a=n.geometry)&&void 0!==a&&null!==(i=a.location)&&void 0!==i&&i.lng&&"function"==typeof n.geometry.location.lng&&(u.value=n.geometry.location.lng())}(n,o)}}}(o,e))}}))},s={inputs:(0,t.getNodes)("geolocation_submitter_location",!0)},c=function(e){s.inputs.forEach((function(n){n.value=JSON.stringify({lat:e.coords.latitude,lng:e.coords.longitude})})),(0,t.consoleInfo)("Gravity Forms Geolocation JS: Geolocation successfully fetched.")},f=function(e){var n;n={message:e.message},s.inputs.forEach((function(e){e.value=JSON.stringify(n)})),(0,t.consoleInfo)("Gravity Forms Geolocation JS: Geolocation could not be fetched. Saved error message: "+n.message),(0,t.consoleInfo)("Gravity Forms Geolocation JS: Geolocation not available, aborting.")},d=function(){u(),document.addEventListener("gform/postRender",u),(0,t.consoleInfo)("Gravity Forms Google Places: Initialized."),s.inputs.length&&(navigator.geolocation?navigator.geolocation.getCurrentPosition(c,f,{timeout:1e3}):f({message:"Browser does not support geolocation."}),(0,t.consoleInfo)("Gravity Forms Geolocation JS: Initialized user location script.")),(0,t.consoleInfo)("Gravity Forms Geolcation JS: Initialized..")},v=function(){console.log("Binding theme events"),d(),console.info("Gravity Forms Geolocation Theme: Initialized all javascript that targeted document ready.")};(0,t.ready)(v)}},o={};function t(e){var r=o[e];if(void 0!==r)return r.exports;var a=o[e]={exports:{}};return n[e](a,a.exports,t),a.exports}t.m=n,e=[],t.O=function(n,o,r,a){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],a=e[c][2];for(var l=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var s=r();void 0!==s&&(n=s)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,r,a]},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={415:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],l=o[1],u=o[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(r in l)t.o(l,r)&&(t.m[r]=l[r]);if(u)var c=u(t)}for(n&&n(o);s<i.length;s++)a=i[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(c)},o=self.webpackChunkgravityformsgeolocation=self.webpackChunkgravityformsgeolocation||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}(),t.O(void 0,[499],(function(){return t(9553)}));var r=t.O(void 0,[499],(function(){return t(2891)}));r=t.O(r)}();
//# sourceMappingURL=scripts-theme.js.map