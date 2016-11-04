!function(t){"use strict";function e(t,e){return e={exports:{}},t(e,e.exports),e.exports}function s(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function r(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function n(t,e,s){if(t&&v.isObject(t)&&t instanceof r)return t;var n=new r;return n.parse(t,e,s),n}function o(t){return v.isString(t)&&(t=n(t)),t instanceof r?t.format():r.prototype.format.call(t)}function h(t,e){return n(t,!1,!0).resolve(e)}function a(t,e){return t?n(t,!1,!0).resolveObject(e):e}var i=e(function(t,e){!function(s){function r(t){throw RangeError(k[t])}function n(t,e){for(var s=t.length,r=[];s--;)r[s]=e(t[s]);return r}function o(t,e){var s=t.split("@"),r="";s.length>1&&(r=s[0]+"@",t=s[1]),t=t.replace(S,".");var o=t.split("."),h=n(o,e).join(".");return r+h}function h(t){for(var e,s,r=[],n=0,o=t.length;n<o;)e=t.charCodeAt(n++),e>=55296&&e<=56319&&n<o?(s=t.charCodeAt(n++),56320==(64512&s)?r.push(((1023&e)<<10)+(1023&s)+65536):(r.push(e),n--)):r.push(e);return r}function a(t){return n(t,function(t){var e="";return t>65535&&(t-=65536,e+=$(t>>>10&1023|55296),t=56320|1023&t),e+=$(t)}).join("")}function i(t){return t-48<10?t-22:t-65<26?t-65:t-97<26?t-97:O}function l(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function u(t,e,s){var r=0;for(t=s?F(t/A):t>>1,t+=F(t/e);t>E*C>>1;r+=O)t=F(t/E);return F(r+(E+1)*t/(t+w))}function c(t){var e,s,n,o,h,l,c,f,p,m,v=[],d=t.length,g=0,y=I,b=q;for(s=t.lastIndexOf(U),s<0&&(s=0),n=0;n<s;++n)t.charCodeAt(n)>=128&&r("not-basic"),v.push(t.charCodeAt(n));for(o=s>0?s+1:0;o<d;){for(h=g,l=1,c=O;o>=d&&r("invalid-input"),f=i(t.charCodeAt(o++)),(f>=O||f>F((j-g)/l))&&r("overflow"),g+=f*l,p=c<=b?x:c>=b+C?C:c-b,!(f<p);c+=O)m=O-p,l>F(j/m)&&r("overflow"),l*=m;e=v.length+1,b=u(g-h,e,0==h),F(g/e)>j-y&&r("overflow"),y+=F(g/e),g%=e,v.splice(g++,0,y)}return a(v)}function f(t){var e,s,n,o,a,i,c,f,p,m,v,d,g,y,b,w=[];for(t=h(t),d=t.length,e=I,s=0,a=q,i=0;i<d;++i)v=t[i],v<128&&w.push($(v));for(n=o=w.length,o&&w.push(U);n<d;){for(c=j,i=0;i<d;++i)v=t[i],v>=e&&v<c&&(c=v);for(g=n+1,c-e>F((j-s)/g)&&r("overflow"),s+=(c-e)*g,e=c,i=0;i<d;++i)if(v=t[i],v<e&&++s>j&&r("overflow"),v==e){for(f=s,p=O;m=p<=a?x:p>=a+C?C:p-a,!(f<m);p+=O)b=f-m,y=O-m,w.push($(l(m+b%y,0))),f=F(b/y);w.push($(l(f,0))),a=u(s,g,n==o),s=0,++n}++s,++e}return w.join("")}function p(t){return o(t,function(t){return R.test(t)?c(t.slice(4).toLowerCase()):t})}function m(t){return o(t,function(t){return N.test(t)?"xn--"+f(t):t})}var v="object"==typeof e&&e&&!e.nodeType&&e,d="object"==typeof t&&t&&!t.nodeType&&t,g="object"==typeof global&&global;g.global!==g&&g.window!==g&&g.self!==g||(s=g);var y,b,j=2147483647,O=36,x=1,C=26,w=38,A=700,q=72,I=128,U="-",R=/^xn--/,N=/[^\x20-\x7E]/,S=/[\x2E\u3002\uFF0E\uFF61]/g,k={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},E=O-x,F=Math.floor,$=String.fromCharCode;if(y={version:"1.3.2",ucs2:{decode:h,encode:a},decode:c,encode:f,toASCII:m,toUnicode:p},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return y});else if(v&&d)if(t.exports==v)d.exports=y;else for(b in y)y.hasOwnProperty(b)&&(v[b]=y[b]);else s.punycode=y}(this)}),l={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}},u=function(t,e,r,n){e=e||"&",r=r||"=";var o={};if("string"!=typeof t||0===t.length)return o;var h=/\+/g;t=t.split(e);var a=1e3;n&&"number"==typeof n.maxKeys&&(a=n.maxKeys);var i=t.length;a>0&&i>a&&(i=a);for(var l=0;l<i;++l){var u,c,f,p,m=t[l].replace(h,"%20"),v=m.indexOf(r);v>=0?(u=m.substr(0,v),c=m.substr(v+1)):(u=m,c=""),f=decodeURIComponent(u),p=decodeURIComponent(c),s(o,f)?Array.isArray(o[f])?o[f].push(p):o[f]=[o[f],p]:o[f]=p}return o},c=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}},f=function(t,e,s,r){return e=e||"&",s=s||"=",null===t&&(t=void 0),"object"==typeof t?Object.keys(t).map(function(r){var n=encodeURIComponent(c(r))+s;return Array.isArray(t[r])?t[r].map(function(t){return n+encodeURIComponent(c(t))}).join(e):n+encodeURIComponent(c(t[r]))}).join(e):r?encodeURIComponent(c(r))+s+encodeURIComponent(c(t)):""},p=e(function(t,e){e.decode=e.parse=u,e.encode=e.stringify=f}),m=i,v=l,d=n,g=h,y=a,b=o,j=r,O=/^([a-z0-9.+-]+:)/i,x=/:[0-9]*$/,C=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,w=["<",">",'"',"`"," ","\r","\n","\t"],A=["{","}","|","\\","^","`"].concat(w),q=["'"].concat(A),I=["%","/","?",";","#"].concat(q),U=["/","?","#"],R=255,N=/^[+a-z0-9A-Z_-]{0,63}$/,S=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,k={javascript:!0,"javascript:":!0},E={javascript:!0,"javascript:":!0},F={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},$=p;r.prototype.parse=function(t,e,s){if(!v.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var r=t.indexOf("?"),n=r!==-1&&r<t.indexOf("#")?"?":"#",o=t.split(n),h=/\\/g;o[0]=o[0].replace(h,"/"),t=o.join(n);var a=t;if(a=a.trim(),!s&&1===t.split("#").length){var i=C.exec(a);if(i)return this.path=a,this.href=a,this.pathname=i[1],i[2]?(this.search=i[2],e?this.query=$.parse(this.search.substr(1)):this.query=this.search.substr(1)):e&&(this.search="",this.query={}),this}var l=O.exec(a);if(l){l=l[0];var u=l.toLowerCase();this.protocol=u,a=a.substr(l.length)}if(s||l||a.match(/^\/\/[^@\/]+@[^@\/]+/)){var c="//"===a.substr(0,2);!c||l&&E[l]||(a=a.substr(2),this.slashes=!0)}if(!E[l]&&(c||l&&!F[l])){for(var f=-1,p=0;p<U.length;p++){var d=a.indexOf(U[p]);d!==-1&&(f===-1||d<f)&&(f=d)}var g,y;y=f===-1?a.lastIndexOf("@"):a.lastIndexOf("@",f),y!==-1&&(g=a.slice(0,y),a=a.slice(y+1),this.auth=decodeURIComponent(g)),f=-1;for(var p=0;p<I.length;p++){var d=a.indexOf(I[p]);d!==-1&&(f===-1||d<f)&&(f=d)}f===-1&&(f=a.length),this.host=a.slice(0,f),a=a.slice(f),this.parseHost(),this.hostname=this.hostname||"";var b="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!b)for(var j=this.hostname.split(/\./),p=0,x=j.length;p<x;p++){var w=j[p];if(w&&!w.match(N)){for(var A="",z=0,L=w.length;z<L;z++)A+=w.charCodeAt(z)>127?"x":w[z];if(!A.match(N)){var P=j.slice(0,p),T=j.slice(p+1),H=w.match(S);H&&(P.push(H[1]),T.unshift(H[2])),T.length&&(a="/"+T.join(".")+a),this.hostname=P.join(".");break}}}this.hostname.length>R?this.hostname="":this.hostname=this.hostname.toLowerCase(),b||(this.hostname=m.toASCII(this.hostname));var K=this.port?":"+this.port:"",Z=this.hostname||"";this.host=Z+K,this.href+=this.host,b&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==a[0]&&(a="/"+a))}if(!k[u])for(var p=0,x=q.length;p<x;p++){var _=q[p];if(a.indexOf(_)!==-1){var M=encodeURIComponent(_);M===_&&(M=escape(_)),a=a.split(_).join(M)}}var B=a.indexOf("#");B!==-1&&(this.hash=a.substr(B),a=a.slice(0,B));var D=a.indexOf("?");if(D!==-1?(this.search=a.substr(D),this.query=a.substr(D+1),e&&(this.query=$.parse(this.query)),a=a.slice(0,D)):e&&(this.search="",this.query={}),a&&(this.pathname=a),F[u]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var K=this.pathname||"",G=this.search||"";this.path=K+G}return this.href=this.format(),this},r.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var e=this.protocol||"",s=this.pathname||"",r=this.hash||"",n=!1,o="";this.host?n=t+this.host:this.hostname&&(n=t+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(n+=":"+this.port)),this.query&&v.isObject(this.query)&&Object.keys(this.query).length&&(o=$.stringify(this.query));var h=this.search||o&&"?"+o||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||F[e])&&n!==!1?(n="//"+(n||""),s&&"/"!==s.charAt(0)&&(s="/"+s)):n||(n=""),r&&"#"!==r.charAt(0)&&(r="#"+r),h&&"?"!==h.charAt(0)&&(h="?"+h),s=s.replace(/[?#]/g,function(t){return encodeURIComponent(t)}),h=h.replace("#","%23"),e+n+s+h+r},r.prototype.resolve=function(t){return this.resolveObject(n(t,!1,!0)).format()},r.prototype.resolveObject=function(t){if(v.isString(t)){var e=new r;e.parse(t,!1,!0),t=e}for(var s=new r,n=Object.keys(this),o=0;o<n.length;o++){var h=n[o];s[h]=this[h]}if(s.hash=t.hash,""===t.href)return s.href=s.format(),s;if(t.slashes&&!t.protocol){for(var a=Object.keys(t),i=0;i<a.length;i++){var l=a[i];"protocol"!==l&&(s[l]=t[l])}return F[s.protocol]&&s.hostname&&!s.pathname&&(s.path=s.pathname="/"),s.href=s.format(),s}if(t.protocol&&t.protocol!==s.protocol){if(!F[t.protocol]){for(var u=Object.keys(t),c=0;c<u.length;c++){var f=u[c];s[f]=t[f]}return s.href=s.format(),s}if(s.protocol=t.protocol,t.host||E[t.protocol])s.pathname=t.pathname;else{for(var p=(t.pathname||"").split("/");p.length&&!(t.host=p.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==p[0]&&p.unshift(""),p.length<2&&p.unshift(""),s.pathname=p.join("/")}if(s.search=t.search,s.query=t.query,s.host=t.host||"",s.auth=t.auth,s.hostname=t.hostname||t.host,s.port=t.port,s.pathname||s.search){var m=s.pathname||"",d=s.search||"";s.path=m+d}return s.slashes=s.slashes||t.slashes,s.href=s.format(),s}var g=s.pathname&&"/"===s.pathname.charAt(0),y=t.host||t.pathname&&"/"===t.pathname.charAt(0),b=y||g||s.host&&t.pathname,j=b,O=s.pathname&&s.pathname.split("/")||[],p=t.pathname&&t.pathname.split("/")||[],x=s.protocol&&!F[s.protocol];if(x&&(s.hostname="",s.port=null,s.host&&(""===O[0]?O[0]=s.host:O.unshift(s.host)),s.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===p[0]?p[0]=t.host:p.unshift(t.host)),t.host=null),b=b&&(""===p[0]||""===O[0])),y)s.host=t.host||""===t.host?t.host:s.host,s.hostname=t.hostname||""===t.hostname?t.hostname:s.hostname,s.search=t.search,s.query=t.query,O=p;else if(p.length)O||(O=[]),O.pop(),O=O.concat(p),s.search=t.search,s.query=t.query;else if(!v.isNullOrUndefined(t.search)){if(x){s.hostname=s.host=O.shift();var C=!!(s.host&&s.host.indexOf("@")>0)&&s.host.split("@");C&&(s.auth=C.shift(),s.host=s.hostname=C.shift())}return s.search=t.search,s.query=t.query,v.isNull(s.pathname)&&v.isNull(s.search)||(s.path=(s.pathname?s.pathname:"")+(s.search?s.search:"")),s.href=s.format(),s}if(!O.length)return s.pathname=null,s.search?s.path="/"+s.search:s.path=null,s.href=s.format(),s;for(var w=O.slice(-1)[0],A=(s.host||t.host||O.length>1)&&("."===w||".."===w)||""===w,q=0,I=O.length;I>=0;I--)w=O[I],"."===w?O.splice(I,1):".."===w?(O.splice(I,1),q++):q&&(O.splice(I,1),q--);if(!b&&!j)for(;q--;q)O.unshift("..");!b||""===O[0]||O[0]&&"/"===O[0].charAt(0)||O.unshift(""),A&&"/"!==O.join("/").substr(-1)&&O.push("");var U=""===O[0]||O[0]&&"/"===O[0].charAt(0);if(x){s.hostname=s.host=U?"":O.length?O.shift():"";var C=!!(s.host&&s.host.indexOf("@")>0)&&s.host.split("@");C&&(s.auth=C.shift(),s.host=s.hostname=C.shift())}return b=b||s.host&&O.length,b&&!U&&O.unshift(""),O.length?s.pathname=O.join("/"):(s.pathname=null,s.path=null),v.isNull(s.pathname)&&v.isNull(s.search)||(s.path=(s.pathname?s.pathname:"")+(s.search?s.search:"")),s.auth=t.auth||s.auth,s.slashes=s.slashes||t.slashes,s.href=s.format(),s},r.prototype.parseHost=function(){var t=this.host,e=x.exec(t);e&&(e=e[0],":"!==e&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)};var z={parse:d,resolve:g,resolveObject:y,format:b,Url:j};t.default=z,t.parse=d,t.resolve=g,t.resolveObject=y,t.format=b,t.Url=j}(this.url=this.url||{});
//# sourceMappingURL=url.web.js.map
