!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,(function(){return function(){"use strict";var e={d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var t={};e.r(t),e.d(t,{RM:function(){return Re}});var n=0,r={token:"empty token",errorCount:0,tjsToken:"8de4c78a3ec64020ab2ad15dea1ae9ff",tjsApp:"rmagent",tjsVersion:"3.6.0",getErrorUrl:function(){return"https://capture.trackjs.com/capture?token="+r.tjsToken+"&v="+r.tjsVersion+"&source=rm"},error:function(e,t){if(void 0===t&&(t=null),!(n>=2)){var i=e||{},o=i.message||"empty",a=i.stack||(new Error).stack;r.errorCount++;var s=(self.location||"").toString(),u={agentPlatform:"browser",console:[{message:JSON.stringify(e),severity:"log",timestamp:(new Date).toISOString()}],customer:{token:r.tjsToken,application:r.tjsApp,userId:r.token,version:"2.2.0"},entry:"catch",environment:{originalUrl:s,userAgent:navigator.userAgent},message:o,url:s,stack:a,timestamp:(new Date).toISOString(),version:r.tjsVersion};null!=t&&u.console.push({message:t,severity:"log",timestamp:(new Date).toISOString()});var c=new XMLHttpRequest;c.open("POST",r.getErrorUrl()),c.send(JSON.stringify(u)),n++}}};function i(){return"undefined"==typeof document}function o(e){return(e=e||"").indexOf("?")>=0&&(e=e.split("?")[0]),e.length>=1e3&&(e=e.substr(0,1e3)),e}function a(e,t){if((e=""+e).length<=t)return e;var n=e.length-t;return e.substr(0,t)+"...{"+n+"}"}function s(e,t){return void 0===t&&(t=0),parseFloat(e.toFixed(t))}function u(e,t,n){var r=e[t]||c;e[t]=n(r)}function c(){}function l(){return Math.floor(1e3*(Date.now()+Math.random()))}function d(e,t){try{for(var n=t.split("."),r=e,i=0;i<n.length;i++){if(!r[n[i]])return!1;r=r[n[i]]}return!0}catch(e){return!1}}function f(e){return e=e||{},Object.keys(e).forEach((function(t,n){n>25?delete e[t]:e[t]=a(e[t],100)})),e}function p(e){return Object.prototype.toString.call(e)}function m(e){return g(e)&&1===e.nodeType}function h(e){return"number"==typeof e||g(e)&&"[object Number]"===p(e)}function g(e){return!(!e||"object"!=typeof e)}function v(e){return"string"==typeof e||!y(e)&&g(e)&&"[object String]"===p(e)}function y(e){return"[object Array]"===p(e)}function S(e){if(!g(e))return!1;var t=p(e);return"[object Error]"===t||"[object DOMException]"===t||v(e.name)&&v(e.message)}function T(e){function t(e){for(var t="<"+e.tagName.toLowerCase(),n=e.attributes||[],r=0;r<n.length;r++)t+=" "+n[r].name+'="'+n[r].value+'"';return t+">"}var n,r="undefined";if(""===e)return"Empty String";if(void 0===e)return r;if(v(e)||h(e)||function(e){return"boolean"==typeof e||g(e)&&"[object Boolean]"===p(e)}(e)||function(e){return!(!e||"function"!=typeof e)}(e))return""+e;if(m(e))return t(e);if("symbol"==typeof e)return Symbol.prototype.toString.call(e);try{n=JSON.stringify(e,(function(e,n){return void 0===n?r:h(n)&&isNaN(n)?"NaN":S(n)?{name:n.name,message:n.message,stack:n.stack}:m(n)?t(n):n}))}catch(t){var i="";for(var o in e)if(e.hasOwnProperty(o))try{i+=',"'+o+'":"'+e[o]+'"'}catch(e){}n=i?"{"+i.replace(",","")+"}":"Unserializable Object"}return n.replace(/"undefined"/g,r).replace(/"NaN"/g,"NaN")}function E(e){if(!e)return"";if((e=e.toString()).startsWith("http")||i())return e;try{return new URL(e,document.baseURI).toString()}catch(t){return e}}var b=new(function(){function t(){var e=this;this.apiEntries=[],this.addEntry=function(t){t.url&&0===t.url.indexOf("http")&&(e.options.monitorSelfCalls||0!==t.url.indexOf(e.options.ingestUrl))&&e.apiEntries.push(t)}}return t.prototype.install=function(e){this.options=e,this.wrapFetch(),this.wrapXhr()},t.prototype.getApis=function(e){if(void 0===e&&(e=!1),e||this.apiEntries.length>=10){var t=this.apiEntries;return this.apiEntries=[],t}return[]},t.prototype.wrapFetch=function(){var t=this;u(e.g,"fetch",(function(n){return function(r,a){var u=r instanceof Request?r.url:r,c=r instanceof Request?r.method:(a||{}).method||"GET",l=n.apply(e.g,arguments);return l.__rm_state__={source:i()?"worker":"fetch",startedOn:s(performance.now()),method:c,requestUrl:E(u),pageUrl:o(self.location.toString())},l.then((function(e){var n=l.__rm_state__;if(n){var r=performance.now(),i={source:n.source,method:n.method,startedOn:n.startedOn,pageUrl:n.pageUrl,duration:s(r)-n.startedOn,statusCode:e.status,contentLength:e.headers.get("content-length"),contentType:e.headers.get("content-type"),url:e.url||n.requestUrl};t.addEntry(i)}return e})).catch((function(e){var n=l.__rm_state__;if(n){var r=performance.now(),i={source:n.source,method:n.method,startedOn:n.startedOn,pageUrl:n.pageUrl,duration:s(r)-n.startedOn,statusCode:0,contentLength:null,contentType:null,url:n.requestUrl};t.addEntry(i)}throw e}))}}))},t.prototype.wrapXhr=function(){if(!i()){var e=this;u(XMLHttpRequest.prototype,"open",(function(e){return function(t,n){var r=this;return r.__rm_state__={source:"xhr",method:t,requestUrl:E((n||"").toString())},e.apply(r,arguments)}})),u(XMLHttpRequest.prototype,"send",(function(t){return function(){var n=this,r=n.__rm_state__;return r?(n.__rm_state__=Object.assign(r,{startedOn:s(performance.now()),pageUrl:o(self.location.toString())}),n.addEventListener("readystatechange",(function(){if(4===n.readyState){var t=n.__rm_state__,r=performance.now(),i={source:t.source,method:t.method,startedOn:t.startedOn,pageUrl:t.pageUrl,duration:s(r)-t.startedOn,statusCode:n.status,url:n.responseURL||t.requestUrl,contentLength:n.getResponseHeader("content-length"),contentType:n.getResponseHeader("content-type")};e.addEntry(i)}}),!0),t.apply(n,arguments)):t.apply(n,arguments)}}))}},t}()),w=new(function(){function e(){this.errorEntries=[]}return e.prototype.install=function(e){this.options=e,this.watchGlobal(),this.watchPromise(),this.wrapConsole()},e.prototype.getErrors=function(e){if(void 0===e&&(e=!1),e||this.errorEntries.length>=1){var t=this.errorEntries;return this.errorEntries=[],t}return[]},e.prototype.addError=function(e){null!=e.message&&0!==e.message.toString().indexOf("Script error")&&this.errorEntries.push(e)},e.prototype.watchGlobal=function(){self.addEventListener("error",(function(e){try{if(!e||!e.error)return;w.addError({name:e.error.name,message:e.error.message,stack:e.error.stack,cause:e.error.cause?T(e.error.cause):void 0,time:s(performance.now()),entry:"global",pageUrl:self.location.toString()})}catch(e){r.error(e,"global error handler")}}))},e.prototype.watchPromise=function(){self.addEventListener("unhandledrejection",(function(e){try{if(!e)return;var t=e.reason;if(null==t)return;S(t)||(t=new Error(T(t))),w.addError({name:t.name,message:t.message,stack:t.stack,cause:t.cause?T(t.cause):void 0,time:s(performance.now()),entry:"promise",pageUrl:self.location.toString()})}catch(e){r.error(e,"promise error handler")}}))},e.prototype.wrapConsole=function(){u(self.console,"error",(function(e){return function(){try{var t,n=Array.prototype.slice.call(arguments);t=1===n.length&&S(n[0])?n[0]:new Error(1===n.length?T(n[0]):T(n)),w.addError({name:t.name,message:t.message,stack:t.stack,cause:t.cause?T(t.cause):void 0,time:s(performance.now()),entry:"console",pageUrl:self.location.toString()})}catch(e){r.error(e,"console error handler")}return e.apply(this,arguments)}}))},e}()),_="__rm_sid__",L="__rm_sid_ts__",k=!0;try{k=!localStorage.getItem(_)}catch(R){}var R,I,C,M,O,A={_sessionId:0,_storageDisabled:!1,isFirstVisit:k,getSessionId:function(){if(!self.performance)return 0;var e=Date.now(),t=0;if(this._storageDisabled&&this._sessionId)return this._sessionId;try{this._sessionId=parseInt(localStorage.getItem(_),10),t=parseInt(localStorage.getItem(L),10)}catch(e){this._storageDisabled=!0}if(!this._sessionId||this.isSessionExpired(e,t)){this._sessionId=l(),P.addEvent({name:"session_start",time:s(performance.now()),pageUrl:self.location.toString(),referrer:i()?"":document.referrer});try{localStorage.setItem(_,this._sessionId.toString()),this.refreshSession()}catch(e){this._storageDisabled=!0}}return this._sessionId},refreshSession:function(){try{localStorage.setItem(L,Date.now().toString())}catch(e){}},isSessionExpired:function(e,t){return!t||t+18e5<e}},P=new(function(){function e(){var e=this;this.eventEntries=[],this.onDocumentClicked=function(t){try{var n=e.getElementFromEvent(t);if(!n||!n.tagName)return;var i=e.getDescribedElement(n,"a")||e.getDescribedElement(n,"button")||e.getDescribedElement(n,"input",["button","submit"]),o=e.getDescribedElement(n,"input",["checkbox","radio"]);i?e.writeActivityEvent(i,"click"):o&&e.writeActivityEvent(o,"input",o.value,o.checked)}catch(e){r.error(e,"On Document Clicked Error")}},this.onInputChanged=function(t){try{var n=e.getElementFromEvent(t);if(!n||!n.tagName)return;var i=e.getDescribedElement(n,"textarea"),o=e.getDescribedElement(n,"select"),a=e.getDescribedElement(n,"input"),s=e.getDescribedElement(n,"input",["button","submit","hidden","checkbox","radio"]);i?e.writeActivityEvent(i,"input",i.value):o&&o.options&&o.options.length?e.onSelectInputChanged(o):a&&!s&&e.writeActivityEvent(a,"input",a.value)}catch(e){r.error(e,"On Input Changed Error")}},this.onFirstScroll=function(){document.removeEventListener("scroll",e.onFirstScroll),e.addEvent({name:"first_scroll",time:s(performance.now()),pageUrl:self.location.toString()})}}return e.prototype.install=function(e){this.options=e,this.wrapHistory(),this.wrapActivity(),this.addEvent({name:i()?"worker_init":"page_view",time:s(performance.now()),pageUrl:self.location.toString()})},e.prototype.getEvents=function(e){if(void 0===e&&(e=!1),e||this.eventEntries.length>=1){var t=this.eventEntries;return this.eventEntries=[],t}return[]},e.prototype.addEvent=function(e){A.refreshSession(),this.eventEntries.push(e)},e.prototype.wrapActivity=function(){i()||(document.addEventListener("click",this.onDocumentClicked,!0),document.addEventListener("blur",this.onInputChanged,!0),document.addEventListener("scroll",this.onFirstScroll,{once:!0,capture:!0,passive:!0}))},e.prototype.wrapHistory=function(){var e=this;if(this.isCompatible()){var t=this;self.addEventListener("popstate",(function(){e.addEvent({name:"popstate",time:s(performance.now()),pageUrl:self.location.toString()})}),!0),u(history,"pushState",(function(e){return function(){var n=e.apply(this,arguments);return t.addEvent({name:"pushState",time:s(performance.now()),pageUrl:self.location.toString()}),n}}))}},e.prototype.isCompatible=function(){return!i()&&!d(self,"chrome.app.runtime")&&d(self,"addEventListener")&&d(self,"history.pushState")},e.prototype.onSelectInputChanged=function(e){if(e.multiple)for(var t=0;t<e.options.length;t++)e.options[t].selected&&this.writeActivityEvent(e,"input",e.options[t].value);else e.selectedIndex>=0&&e.options[e.selectedIndex]&&this.writeActivityEvent(e,"input",e.options[e.selectedIndex].value)},e.prototype.writeActivityEvent=function(e,t,n,r){"password"===this.getElementType(e)&&(n=void 0),this.addEvent({name:t,time:s(performance.now()),pageUrl:self.location.toString(),element:{tag:e.tagName.toLowerCase(),attributes:this.getElementAttributes(e),value:this.getMetaValue(n,r),text:e.innerText?a(e.innerText,100):""}})},e.prototype.getElementFromEvent=function(e){return e.target||document.elementFromPoint(e.clientX,e.clientY)},e.prototype.getDescribedElement=function(e,t,n){if(e.closest){if(!(e=e.closest(t)))return null}else if(e.tagName.toLowerCase()!==t.toLowerCase())return null;if(!n)return e;for(var r=this.getElementType(e),i=0;i<n.length;i++)if(n[i]===r)return e;return null},e.prototype.getElementType=function(e){return(e.getAttribute("type")||"").toLowerCase()},e.prototype.getElementAttributes=function(e){for(var t={},n=Math.min(e.attributes.length,10),r=0;r<n;r++){var i=e.attributes[r],o=i.name;"data-value"!=o.toLowerCase()&&"value"!=o.toLowerCase()&&(t[i.name]=a(i.value,50))}return t},e.prototype.getMetaValue=function(e,t){return void 0===e?void 0:{length:e.length,pattern:this.matchInputPattern(e),checked:t}},e.prototype.matchInputPattern=function(e){return""===e?"empty":/^[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(e)?"email":/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(e)||/^(\d{4}[\/\-](0?[1-9]|1[012])[\/\-]0?[1-9]|[12][0-9]|3[01])$/.test(e)?"date":/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(e)?"usphone":/^\s*$/.test(e)?"whitespace":/^\d*$/.test(e)?"numeric":/^[a-zA-Z]*$/.test(e)?"alpha":/^[a-zA-Z0-9]*$/.test(e)?"alphanumeric":"characters"},e}()),U=function(){function e(){this.hasSentPage=!1}return e.prototype.getPageEntry=function(){if(i())return null;if(this.hasSentPage)return null;var e=performance.getEntriesByType("navigation")[0],t=null;if(e)t={url:o(e.name&&0===e.name.indexOf("http")?e.name:self.location.toString()),tempFullUrl:0===e.name.indexOf("http")?e.name:self.location.toString(),referrer:i()?"":document.referrer,start:s(e.startTime),unloadTime:s(e.unloadEventEnd-e.unloadEventStart),redirectTime:s(e.redirectEnd-e.redirectStart),workerTime:0===e.workerStart?0:s(e.domainLookupStart-e.workerStart),dnsTime:s(e.domainLookupEnd-e.domainLookupStart),sslTime:s(e.connectEnd-e.connectStart),serverTime:s(e.responseEnd-e.requestStart),firstByteTime:s(e.responseStart),blockingAssetLoadTime:h(e.domInteractive)?s(e.domInteractive-e.responseEnd):0,domInteractive:h(e.domInteractive)?s(e.domInteractive):0,duration:s(e.duration),pageSize:e.transferSize,statusCode:e.responseStatus,proto:e.nextHopProtocol,type:e.type,decodedBodySize:e.decodedBodySize,encodedBodySize:e.encodedBodySize,deliveryType:e.deliveryType};else{var n=performance.timing;t={url:o(self.location.toString()),tempFullUrl:self.location.toString(),referrer:i()?"":document.referrer,start:0,unloadTime:s(n.unloadEventEnd-n.unloadEventStart),redirectTime:s(n.redirectEnd-n.redirectStart),workerTime:0,dnsTime:s(n.domainLookupEnd-n.domainLookupStart),sslTime:s(n.connectEnd-n.connectStart),serverTime:s(n.responseEnd-n.requestStart),firstByteTime:s(n.responseStart-n.navigationStart),blockingAssetLoadTime:s(n.domInteractive-n.responseEnd),domInteractive:s(n.domInteractive-n.navigationStart),duration:s(n.domComplete-n.navigationStart)}}return t},e.prototype.sentPage=function(){this.hasSentPage=!0},e}(),x=["safeframe.googlesyndication.com","chrome-extension:","moz-extension:"],D=function(){function e(){this.hasSent=!1}return e.prototype.cacheResources=function(){this.hasSent||(e.cachedResourceTimings=e.getAllResources())},e.getAllResources=function(){var t=(e.cachedResourceTimings||[]).concat(performance.getEntriesByType("resource")),n={};return t.filter((function(t){if(!t||e.shouldIgnore(t))return!1;var r=t.name+t.startTime;return!n[r]&&(n[r]=!0,!0)}))},e.prototype.getPageResources=function(){var t=this;if(this.hasSent)return[];var n=performance.getEntriesByType("navigation")[0];if(!n)return[];var r=n.domInteractive,i=n.duration;return e.getAllResources().map((function(e){var n=t.getResourceType(e);if("xhr"===n)return null;if(e.startTime>=i+5e3)return null;var o="postload";return e.startTime<=r?o="blocking":e.startTime<=i&&(o="client"),{url:e.name,type:n,stage:o,renderBlockingStatus:e.renderBlockingStatus,proto:e.nextHopProtocol,start:h(e.startTime)?s(e.startTime):null,duration:h(e.duration)?s(e.duration):null,responseStatus:e.responseStatus,transferSize:e.transferSize,decodedBodySize:e.decodedBodySize,encodedBodySize:e.encodedBodySize,deliveryType:e.deliveryType}})).filter((function(e){return null!==e}))},e.shouldIgnore=function(e){return x.some((function(t){return e.name.toLowerCase().indexOf(t)>=0}))},e.prototype.getResourceType=function(e){return this.isCss(e)?"css":this.isImage(e)?"img":this.isFont(e)?"font":this.isScript(e)?"script":this.isVideo(e)?"video":this.isXhr(e)?"xhr":this.isIFrame(e)?"iframe":"other"},e.prototype.isImage=function(e){if("img"===e.initiatorType)return!0;try{if("css"===e.initiatorType||"link"===e.initiatorType){var t=new URL(e.name).pathname.toLowerCase();return[".jpg",".jpeg",".png",".gif",".svg",".raw",".webp",".heif",".avif"].some((function(e){return t.endsWith(e)}))}}catch(e){}return!1},e.prototype.isScript=function(e){if("script"===e.initiatorType)return!0;try{if("link"===e.initiatorType||"other"===e.initiatorType)return new URL(e.name).pathname.toLowerCase().endsWith(".js")}catch(e){}return!1},e.prototype.isVideo=function(e){return"video"===e.initiatorType},e.prototype.isXhr=function(e){return"fetch"===e.initiatorType||"xmlhttprequest"===e.initiatorType},e.prototype.isIFrame=function(e){return"iframe"===e.initiatorType},e.prototype.isCss=function(e){if("link"!==e.initiatorType&&"css"!==e.initiatorType)return!1;try{return new URL(e.name).pathname.toLowerCase().indexOf("css")>=0}catch(e){}return!1},e.prototype.isFont=function(e){if("link"!==e.initiatorType&&"css"!==e.initiatorType&&"other"!==e.initiatorType)return!1;try{var t=new URL(e.name).pathname.toLowerCase();return[".woff",".woff2",".ttf",".eot",".otf"].some((function(e){return t.endsWith(e)}))}catch(e){}return!1},e.prototype.isThirdParty=function(e){try{return new URL(e).origin!==self.location.origin}catch(e){}return!1},e.prototype.sentPageResources=function(){this.hasSent=!0,e.cachedResourceTimings=null},e.cachedResourceTimings=null,e}(),B=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},F=function(e){if("loading"===document.readyState)return"loading";var t=B();if(t){if(e<t.domInteractive)return"loading";if(0===t.domContentLoadedEventStart||e<t.domContentLoadedEventStart)return"dom-interactive";if(0===t.domComplete||e<t.domComplete)return"dom-content-loaded"}return"complete"},j=function(e){var t=e.nodeName;return 1===e.nodeType?t.toLowerCase():t.toUpperCase().replace(/^#/,"")},q=function(e,t){var n="";try{for(;e&&9!==e.nodeType;){var r=e,i=r.id?"#"+r.id:j(r)+(r.className&&r.className.length?"."+r.className.replace(/\s+/g,"."):"");if(n.length+i.length>(t||100)-1)return n||i;if(n=n?i+">"+n:i,r.id)break;e=r.parentNode}}catch(e){}return n},N=-1,z=function(){return N},V=function(e){addEventListener("pageshow",(function(t){t.persisted&&(N=t.timeStamp,e(t))}),!0)},Q=function(){var e=B();return e&&e.activationStart||0},H=function(e,t){var n=B(),r="navigate";return z()>=0?r="back-forward-cache":n&&(r=document.prerendering||Q()>0?"prerender":n.type.replace(/_/g,"-")),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},G=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){t(e.getEntries())}));return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},$=function(e,t){var n=function n(r){"pagehide"!==r.type&&"hidden"!==document.visibilityState||(e(r),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},X=function(e,t,n,r){var i,o;return function(a){t.value>=0&&(a||r)&&((o=t.value-(i||0))||void 0===i)&&(i=t.value,t.delta=o,t.rating=function(e,t){return e>t[1]?"poor":e>t[0]?"needs-improvement":"good"}(t.value,n),e(t))}},J=-1,Y=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},W=function(){$((function(e){var t=e.timeStamp;J=t}),!0)},Z=function(){return J<0&&(J=Y(),W(),V((function(){setTimeout((function(){J=Y(),W()}),0)}))),{get firstHiddenTime(){return J}}},K=function(e,t){t=t||{};var n,r=[1800,3e3],i=Z(),o=H("FCP"),a=function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(u&&u.disconnect(),e.startTime<i.firstHiddenTime&&(o.value=Math.max(e.startTime-Q(),0),o.entries.push(e),n(!0)))}))},s=window.performance&&window.performance.getEntriesByName&&window.performance.getEntriesByName("first-contentful-paint")[0],u=s?null:G("paint",a);(s||u)&&(n=X(e,o,r,t.reportAllChanges),s&&a([s]),V((function(i){o=H("FCP"),n=X(e,o,r,t.reportAllChanges),requestAnimationFrame((function(){requestAnimationFrame((function(){o.value=performance.now()-i.timeStamp,n(!0)}))}))})))},ee=!1,te=-1,ne={passive:!0,capture:!0},re=new Date,ie=function(e,t){R||(R=t,I=e,C=new Date,se(removeEventListener),oe())},oe=function(){if(I>=0&&I<C-re){var e={entryType:"first-input",name:R.type,target:R.target,cancelable:R.cancelable,startTime:R.timeStamp,processingStart:R.timeStamp+I};M.forEach((function(t){t(e)})),M=[]}},ae=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){ie(e,t),i()},r=function(){i()},i=function(){removeEventListener("pointerup",n,ne),removeEventListener("pointercancel",r,ne)};addEventListener("pointerup",n,ne),addEventListener("pointercancel",r,ne)}(t,e):ie(t,e)}},se=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,ae,ne)}))},ue=function(e,t){t=t||{};var n,r=[100,300],i=Z(),o=H("FID"),a=function(e){e.startTime<i.firstHiddenTime&&(o.value=e.processingStart-e.startTime,o.entries.push(e),n(!0))},s=function(e){e.forEach(a)},u=G("first-input",s);n=X(e,o,r,t.reportAllChanges),u&&$((function(){s(u.takeRecords()),u.disconnect()}),!0),u&&V((function(){var i;o=H("FID"),n=X(e,o,r,t.reportAllChanges),M=[],I=-1,R=null,se(addEventListener),i=a,M.push(i),oe()}))},ce=0,le=1/0,de=0,fe=function(e){e.forEach((function(e){e.interactionId&&(le=Math.min(le,e.interactionId),de=Math.max(de,e.interactionId),ce=de?(de-le)/7+1:0)}))},pe=function(){return O?ce:performance.interactionCount||0},me=function(){"interactionCount"in performance||O||(O=G("event",fe,{type:"event",buffered:!0,durationThreshold:0}))},he=0,ge=function(){return pe()-he},ve=[],ye={},Se=function(e){var t=ve[ve.length-1],n=ye[e.interactionId];if(n||ve.length<10||e.duration>t.latency){if(n)n.entries.push(e),n.latency=Math.max(n.latency,e.duration);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};ye[r.id]=r,ve.push(r)}ve.sort((function(e,t){return t.latency-e.latency})),ve.splice(10).forEach((function(e){delete ye[e.id]}))}},Te={},Ee=function e(t){document.prerendering?addEventListener("prerenderingchange",(function(){return e(t)}),!0):"complete"!==document.readyState?addEventListener("load",(function(){return e(t)}),!0):setTimeout(t,0)},be=function(e,t){t=t||{};var n=[800,1800],r=H("TTFB"),i=X(e,r,n,t.reportAllChanges);Ee((function(){var o=B();if(o){if(r.value=Math.max(o.responseStart-Q(),0),r.value<0||r.value>performance.now())return;r.entries=[o],i(!0),V((function(){r=H("TTFB",0),(i=X(e,r,n,t.reportAllChanges))(!0)}))}}))},we=function(){function e(){var e=this;if(this.vitalsSent=!1,this.metricQueue={},this.addToQueue=function(t){e.metricQueue[t.name]=t},!i())try{!function(e,t){!function(e,t){t=t||{};var n=[.1,.25];ee||(K((function(e){te=e.value})),ee=!0);var r,i=function(t){te>-1&&e(t)},o=H("CLS",0),a=0,s=[],u=function(e){e.forEach((function(e){if(!e.hadRecentInput){var t=s[0],n=s[s.length-1];a&&e.startTime-n.startTime<1e3&&e.startTime-t.startTime<5e3?(a+=e.value,s.push(e)):(a=e.value,s=[e]),a>o.value&&(o.value=a,o.entries=s,r())}}))},c=G("layout-shift",u);c&&(r=X(i,o,n,t.reportAllChanges),$((function(){u(c.takeRecords()),r(!0)})),V((function(){a=0,te=-1,o=H("CLS",0),r=X(i,o,n,t.reportAllChanges)})))}((function(t){!function(e){if(e.entries.length){var t=e.entries.reduce((function(e,t){return e&&e.value>t.value?e:t}));if(t&&t.sources&&t.sources.length){var n=(r=t.sources).find((function(e){return e.node&&1===e.node.nodeType}))||r[0];if(n)return void(e.attribution={largestShiftTarget:q(n.node),largestShiftTime:t.startTime,largestShiftValue:t.value,largestShiftSource:n,largestShiftEntry:t,loadState:F(t.startTime)})}}var r;e.attribution={}}(t),e(t)}),{reportAllChanges:!0})}(this.addToQueue),function(e,t){ue((function(t){!function(e){var t=e.entries[0];e.attribution={eventTarget:q(t.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:F(t.startTime)}}(t),e(t)}),{reportAllChanges:!0})}(this.addToQueue),function(e,t){K((function(t){!function(e){if(e.entries.length){var t=B(),n=e.entries[e.entries.length-1];if(t){var r=t.activationStart||0,i=Math.max(0,t.responseStart-r);return void(e.attribution={timeToFirstByte:i,firstByteToFCP:e.value-i,loadState:F(e.entries[0].startTime),navigationEntry:t,fcpEntry:n})}}e.attribution={timeToFirstByte:0,firstByteToFCP:e.value,loadState:F(z())}}(t),e(t)}),{reportAllChanges:!0})}(this.addToQueue),function(e,t){!function(e,t){t=t||{};var n,r=[2500,4e3],i=Z(),o=H("LCP"),a=function(e){var t=e[e.length-1];if(t){var r=Math.max(t.startTime-Q(),0);r<i.firstHiddenTime&&(o.value=r,o.entries=[t],n())}},s=G("largest-contentful-paint",a);if(s){n=X(e,o,r,t.reportAllChanges);var u=function(){Te[o.id]||(a(s.takeRecords()),s.disconnect(),Te[o.id]=!0,n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,u,{once:!0,capture:!0})})),$(u,!0),V((function(i){o=H("LCP"),n=X(e,o,r,t.reportAllChanges),requestAnimationFrame((function(){requestAnimationFrame((function(){o.value=performance.now()-i.timeStamp,Te[o.id]=!0,n(!0)}))}))}))}}((function(t){!function(e){if(e.entries.length){var t=B();if(t){var n=t.activationStart||0,r=e.entries[e.entries.length-1],i=r.url&&performance.getEntriesByType("resource").filter((function(e){return e.name===r.url}))[0],o=Math.max(0,t.responseStart-n),a=Math.max(o,i?(i.requestStart||i.startTime)-n:0),s=Math.max(a,i?i.responseEnd-n:0),u=Math.max(s,r?r.startTime-n:0),c={element:q(r.element),timeToFirstByte:o,resourceLoadDelay:a-o,resourceLoadTime:s-a,elementRenderDelay:u-s,navigationEntry:t,lcpEntry:r};return r.url&&(c.url=r.url),i&&(c.lcpResourceEntry=i),void(e.attribution=c)}}e.attribution={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadTime:0,elementRenderDelay:e.value}}(t),e(t)}),{reportAllChanges:!0})}(this.addToQueue),function(e,t){!function(e,t){t=t||{};var n=[200,500];me();var r,i=H("INP"),o=function(e){e.forEach((function(e){e.interactionId&&Se(e),"first-input"===e.entryType&&!ve.some((function(t){return t.entries.some((function(t){return e.duration===t.duration&&e.startTime===t.startTime}))}))&&Se(e)}));var t,n=(t=Math.min(ve.length-1,Math.floor(ge()/50)),ve[t]);n&&n.latency!==i.value&&(i.value=n.latency,i.entries=n.entries,r())},a=G("event",o,{durationThreshold:t.durationThreshold||40});r=X(e,i,n,t.reportAllChanges),a&&(a.observe({type:"first-input",buffered:!0}),$((function(){o(a.takeRecords()),i.value<0&&ge()>0&&(i.value=0,i.entries=[]),r(!0)})),V((function(){ve=[],he=pe(),i=H("INP"),r=X(e,i,n,t.reportAllChanges)})))}((function(t){!function(e){if(e.entries.length){var t=e.entries.sort((function(e,t){return t.duration-e.duration||t.processingEnd-t.processingStart-(e.processingEnd-e.processingStart)}))[0];e.attribution={eventTarget:q(t.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:F(t.startTime)}}else e.attribution={}}(t),e(t)}),t)}(this.addToQueue,{reportAllChanges:!0}),function(e,t){be((function(t){!function(e){if(e.entries.length){var t=e.entries[0],n=t.activationStart||0,r=Math.max(t.domainLookupStart-n,0),i=Math.max(t.connectStart-n,0),o=Math.max(t.requestStart-n,0);e.attribution={waitingTime:r,dnsTime:i-r,connectionTime:o-i,requestTime:e.value-o,navigationEntry:t}}else e.attribution={waitingTime:0,dnsTime:0,connectionTime:0,requestTime:0}}(t),e(t)}),{reportAllChanges:!0})}(this.addToQueue)}catch(e){}}return e.prototype.getVitals=function(){var e;if(this.vitalsSent)return null;if(0===Object.keys(this.metricQueue).length)return null;var t={};if(this.metricQueue.FCP){var n=this.metricQueue.FCP;t.fcp=s(n.value),t.fcpLoadState=null===(e=n.attribution)||void 0===e?void 0:e.loadState}if(this.metricQueue.LCP){var r=this.metricQueue.LCP;t.lcp=s(r.value),r.attribution&&(t.lcpElement=r.attribution.element,t.lcpUrl=r.attribution.url,t.lcpElementRenderDelay=h(r.attribution.elementRenderDelay)?s(r.attribution.elementRenderDelay):null,t.lcpResourceLoadDelay=h(r.attribution.resourceLoadDelay)?s(r.attribution.resourceLoadDelay):null,t.lcpResourceLoadTime=h(r.attribution.resourceLoadTime)?s(r.attribution.resourceLoadTime):null)}if(this.metricQueue.CLS){var i=this.metricQueue.CLS;t.cls=s(i.value,5),i.attribution&&(t.clsLargestShiftTarget=i.attribution.largestShiftTarget,t.clsLargestShiftTime=h(i.attribution.largestShiftTime)?s(i.attribution.largestShiftTime):null,t.clsLargestShiftValue=h(i.attribution.largestShiftValue)?s(i.attribution.largestShiftValue,5):null,t.clsLargestShiftLoadState=i.attribution.loadState)}if(this.metricQueue.FID){var o=this.metricQueue.FID;t.fid=s(o.value),o.attribution&&(t.fidEventTarget=o.attribution.eventTarget,t.fidEventTime=h(o.attribution.eventTime)?s(o.attribution.eventTime):null,t.fidEventType=o.attribution.eventType,t.fidLoadState=o.attribution.loadState)}if(this.metricQueue.INP){var a=this.metricQueue.INP;t.inp=s(a.value),a.attribution&&(t.inpEventTarget=a.attribution.eventTarget,t.inpEventTime=h(a.attribution.eventTime)?s(a.attribution.eventTime):null,t.inpEventType=a.attribution.eventType,t.inpLoadState=a.attribution.loadState)}return this.metricQueue.TTFB&&(t.ttfb=s(this.metricQueue.TTFB.value)),t.lcp&&!t.cls&&(t.cls=0),t},e.prototype.sentVitals=function(){this.vitalsSent=!0},e}(),_e=function(){return(_e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},Le=function(){function e(t){var n=this;if(this.timeOrigin=null,this.pageService=new U,this.resourceService=new D,this.shutdownSend=!1,this.sendCount=0,this.pageViewId=l(),this.sessionId=A.getSessionId(),this.user=null,this.metadata={},this.getIngestUrl=function(){return"".concat(n.options.ingestUrl,"?token=").concat(n.options.token,"&v=").concat("2.2.0")},this.hasSentMeasures=!1,this.sendBeacon=function(){try{var e=n.getPayload(!0);if(e.source="beacon",e.page&&0==e.page.duration)return;if(navigator.sendBeacon&&n.payloadHasData(e)){n.clearPayloadAfterSend(e);var t=n.getIngestUrl(),i=JSON.stringify(e);i.length>6e4&&(e=function(e,t){var n=t-6e4;if(t<=6e4)return e;try{for(var i=0,o=e.pageResources.length-1;o>0&&!(i>=n);o--)i+=e.pageResources[o].url.length+220;return e.pageResources=e.pageResources.slice(0,o),e}catch(t){return r.error(t,"trimPayload failed"),e}}(e,i.length),i=JSON.stringify(e));try{navigator.sendBeacon(t,i)}catch(e){}}}catch(e){r.error(e)}},self.performance&&self.performance.getEntriesByType&&self.URL&&self.URL.prototype&&"hostname"in self.URL.prototype){var o,a=performance.getEntriesByType("navigation")||[];(i()||a.length||performance.timing)&&(this.options=Object.keys(e.defaults).reduce((function(n,r){return n[r]=t[r]||e.defaults[r],n}),{}),this.timeOrigin=performance.timeOrigin||(performance.timing||{}).navigationStart||(new Date).getTime(),this.urlGroup=this.options.urlGroup,b.install(this.options),P.install(this.options),w.install(this.options),this.manageResourceBuffer(),o=function(){try{n.webVitalsObserver=new we,A.refreshSession(),setTimeout((function(){return n.checkAndSend()}),2e4),setInterval((function(){return n.checkAndSend()}),6e4),self.addEventListener("pagehide",(function(){P.addEvent({name:"page_leave",time:s(performance.now()),pageUrl:self.location.toString()}),n.sendBeacon()})),self.addEventListener("visibilitychange",(function(){i()||"hidden"!==document.visibilityState?i()||"visible"!==document.visibilityState||(n.sessionId=A.getSessionId()):n.sendBeacon()}))}catch(e){r.error(e)}},i()||"complete"===document.readyState?o():document.addEventListener("readystatechange",(function(e){"complete"===document.readyState&&o()})))}}return e.prototype.identify=function(e,t){e=null==e?void 0:e.toString(),t=f(t),this.user=_e({userId:e},t)},e.prototype.sendEvent=function(e,t,n){void 0===n&&(n=null),t=f(t),P.addEvent({name:"custom",customName:e,time:s(n||performance.now()),pageUrl:self.location.toString(),metadata:t})},e.prototype.setUrlGroup=function(e){!this.urlGroup&&this.pageService.hasSentPage&&console.warn("Request Metrics has already sent performance data for this page load."),e=""+e,this.urlGroup=e},e.prototype.track=function(e,t,n){void 0===n&&(n=null),t=f(t),w.addError({name:e.name,message:e.message,stack:e.stack,cause:e.cause?T(e.cause):void 0,time:s(n||performance.now()),entry:"direct",pageUrl:self.location.toString(),metadata:t})},e.prototype.addMetadata=function(e){this.metadata=Object.assign(this.metadata,e),this.metadata=f(this.metadata)},e.prototype.getDevice=function(){try{if(/Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))return"mobile"}catch(e){}return"desktop"},e.prototype.getNetworkType=function(){try{var e=null===navigator||void 0===navigator?void 0:navigator.connection;return e?"".concat(e.effectiveType,":").concat(e.downlink,":").concat(e.rtt):null}catch(e){return null}},e.prototype.getMeasures=function(){if(this.hasSentMeasures)return[];this.hasSentMeasures=!0;try{return performance.getEntriesByType("measure").map((function(e){return{name:e.name,startTime:s(e.startTime),duration:s(e.duration)}}))}catch(e){return r.error(e,"Failed to get measures"),[]}},e.prototype.getPayload=function(e){var t;return void 0===e&&(e=!1),{token:this.options.token,timeOrigin:new Date(this.timeOrigin).toISOString(),timeSent:(new Date).toISOString(),device:this.getDevice(),pageViewId:this.pageViewId,sessionId:this.sessionId,isFirstVisit:A.isFirstVisit,page:this.pageService.getPageEntry(),pageResources:this.resourceService.getPageResources(),vitals:null===(t=this.webVitalsObserver)||void 0===t?void 0:t.getVitals(),measures:this.getMeasures(),metadata:this.metadata,networkType:this.getNetworkType(),api:b.getApis(e),events:P.getEvents(e),errors:w.getErrors(e),env:{lang:navigator.language,width:i()?null:null===screen||void 0===screen?void 0:screen.width,height:i()?null:null===screen||void 0===screen?void 0:screen.height,dpr:i()?null:null===window||void 0===window?void 0:window.devicePixelRatio,memory:navigator.deviceMemory},urlGroup:this.urlGroup,user:this.user}},e.prototype.payloadHasData=function(e){return!(this.shutdownSend||this.sendCount>=60||!e||!(e.page||e.pageResources.length||e.vitals||e.api.length||e.events.length||e.errors.length))},e.prototype.shouldSendInterval=function(e){return!!this.payloadHasData(e)&&!!(e.page||e.pageResources.length||e.vitals||i()||e.api.length>0||e.events.length>0||e.errors.length>0)},e.prototype.checkAndSend=function(){var e=this;try{var t=this.getPayload();if(t.source="polling",!this.shouldSendInterval(t))return;this.clearPayloadAfterSend(t);var n=new XMLHttpRequest;n.open("POST",this.getIngestUrl()),n.setRequestHeader("Content-Type","application/json"),n.addEventListener("load",(function(){n.status>=400&&(e.shutdownSend=!0)})),n.send(JSON.stringify(t))}catch(e){r.error(e)}},e.prototype.clearPayloadAfterSend=function(e){var t;this.sendCount++,e.page&&this.pageService.sentPage(),e.vitals&&(null===(t=this.webVitalsObserver)||void 0===t||t.sentVitals()),e.pageResources.length>0&&this.resourceService.sentPageResources()},e.prototype.manageResourceBuffer=function(){var e=this;performance.setResourceTimingBufferSize&&performance.setResourceTimingBufferSize(1e3);var t=function(t){e.resourceService.cacheResources(),performance.clearResourceTimings()};if(performance.addEventListener)try{performance.addEventListener("resourcetimingbufferfull",t)}catch(e){}else performance.onresourcetimingbufferfull=t},e.defaults={token:null,ingestUrl:"https://in.requestmetrics.com/v1",monitorSelfCalls:!1,urlGroup:void 0},e}(),ke={__agent:null,version:"2.2.0",install:function(e){try{if(ke.__agent)return void console.warn("Request Metrics is already installed.");if("undefined"==typeof self)return void console.warn("Request Metrics does not operate in this environment.");if(!e||!e.token)return void console.error("You must provide a token to install Request Metrics.");r.token=e.token,ke.__agent=new Le(e)}catch(e){r.error(e)}},identify:function(e,t){try{return ke.__agent?e?ke.__agent.identify(e,t):void console.warn("You must provide a userId."):void console.warn("Request Metrics isn't installed.")}catch(e){r.error(e)}},sendEvent:function(e,t,n){void 0===n&&(n=null);try{return ke.__agent?e?(!t||g(t)&&!y(t)||(console.warn("Metadata must be an object"),t=null),ke.__agent.sendEvent(e,t,n)):void console.warn("You must provide an event name."):void console.warn("Request Metrics isn't installed.")}catch(e){r.error(e)}},setUrlGroup:function(e){try{return ke.__agent?e?ke.__agent.setUrlGroup(e):void console.warn("You must provide a url group."):void console.warn("Request Metrics isn't installed.")}catch(e){r.error(e)}},track:function(e,t,n){void 0===n&&(n=null);try{return ke.__agent?S(e)?ke.__agent.track(e,t,n):void console.warn("You must provide an instance of Error"):void console.warn("Request Metrics isn't installed.")}catch(e){r.error(e)}},addMetadata:function(e){try{if(!ke.__agent)return void console.warn("Request Metrics isn't installed.");if(!e)return;return ke.__agent.addMetadata(e)}catch(e){r.error(e)}}},Re=ke;return function(){try{if(i())return;if(!document.querySelector)return;if(self.RM&&self.RM._options)return ke.install(self.RM._options),self.RM._userId&&ke.identify(self.RM._userId,self.RM._identifyOptions),self.RM._events&&self.RM._events.forEach((function(e){ke.sendEvent(e.eventName,e.metadata,e.time)})),self.RM._urlGroup&&ke.setUrlGroup(self.RM._urlGroup),self.RM._errors&&self.RM._errors.forEach((function(e){ke.track(e.error,e.metadata,e.time)})),void(self.RM._metadata&&ke.addMetadata(self.RM._metadata));var e=document.querySelector("[data-rm-token]");if(!e)return;var t=e.getAttribute("data-rm-token");if(!t)return;r.token=t,ke.install({token:t,ingestUrl:e.getAttribute("data-rm-ingest"),monitorSelfCalls:!!e.getAttribute("data-rm-monitor-self"),urlGroup:e.getAttribute("data-rm-url-group")});var n=e.getAttribute("data-rm-userId");n&&ke.identify(n)}catch(e){r.error(e)}}(),t}()}));
//# sourceMappingURL=rm.js.map