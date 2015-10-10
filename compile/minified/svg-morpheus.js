/*! SVG Morpheus v0.1.8 License: MIT */var SVGMorpheus=function(){"use strict";function t(t,e,r){var a,s={};for(a in t)switch(a){case"fill":case"stroke":s[a]=n(t[a]),s[a].r=t[a].r+(e[a].r-t[a].r)*r,s[a].g=t[a].g+(e[a].g-t[a].g)*r,s[a].b=t[a].b+(e[a].b-t[a].b)*r,s[a].opacity=t[a].opacity+(e[a].opacity-t[a].opacity)*r;break;case"opacity":case"fill-opacity":case"stroke-opacity":case"stroke-width":s[a]=t[a]+(e[a]-t[a])*r}return s}function e(t){var e,r={};for(e in t)switch(e){case"fill":case"stroke":r[e]=F(t[e]);break;case"opacity":case"fill-opacity":case"stroke-opacity":case"stroke-width":r[e]=t[e]}return r}function r(t,e){var r,a=[{},{}];for(r in t)switch(r){case"fill":case"stroke":a[0][r]=L(t[r]),void 0===e[r]&&(a[1][r]=L(t[r]),a[1][r].opacity=0);break;case"opacity":case"fill-opacity":case"stroke-opacity":case"stroke-width":a[0][r]=t[r],void 0===e[r]&&(a[1][r]=1)}for(r in e)switch(r){case"fill":case"stroke":a[1][r]=L(e[r]),void 0===t[r]&&(a[0][r]=L(e[r]),a[0][r].opacity=0);break;case"opacity":case"fill-opacity":case"stroke-opacity":case"stroke-width":a[1][r]=e[r],void 0===t[r]&&(a[0][r]=1)}return a}function a(t,e,r){var a={};for(var s in t)switch(s){case"rotate":a[s]=[0,0,0];for(var o=0;3>o;o++)a[s][o]=t[s][o]+(e[s][o]-t[s][o])*r}return a}function s(t){var e="";return t.rotate&&(e+="rotate("+t.rotate.join(" ")+")"),e}function o(t,e,r){for(var a=[],s=0,o=t.length;o>s;s++){a.push([t[s][0]]);for(var n=1,i=t[s].length;i>n;n++)a[s].push(t[s][n]+(e[s][n]-t[s][n])*r)}return a}function n(t){var e;if(t instanceof Array){e=[];for(var r=0,a=t.length;a>r;r++)e[r]=n(t[r]);return e}if(t instanceof Object){e={};for(var s in t)t.hasOwnProperty(s)&&(e[s]=n(t[s]));return e}return t}function i(t,e,r){if(!t)throw new Error('SVGMorpheus > "element" is required');if("string"==typeof t&&(t=document.querySelector(t),!t))throw new Error('SVGMorpheus > "element" query is not related to an existing DOM node');if(e&&typeof e!=typeof{})throw new Error('SVGMorpheus > "options" parameter must be an object');if(e=e||{},r&&"function"!=typeof r)throw new Error('SVGMorpheus > "callback" parameter must be a function');var a=this;this._icons={},this._curIconId=e.iconId||"",this._toIconId="",this._curIconItems=[],this._fromIconItems=[],this._toIconItems=[],this._morphNodes=[],this._morphG,this._startTime,this._defDuration=e.duration||750,this._defEasing=e.easing||"quad-in-out",this._defRotation=e.rotation||"clock",this._defCallback=r||function(){},this._duration=this._defDuration,this._easing=this._defEasing,this._rotation=this._defRotation,this._callback=this._defCallback,this._rafid,this._fnTick=function(t){a._startTime||(a._startTime=t);var e=Math.min((t-a._startTime)/a._duration,1);a._updateAnimationProgress(e),1>e?a._rafid=h(a._fnTick):a._animationEnd()},this._svgDoc="SVG"===t.nodeName.toUpperCase()?t:t.getSVGDocument(),this._svgDoc?a._init():t.addEventListener("load",function(){a._svgDoc=t.getSVGDocument(),a._init()},!1)}var c={};c["circ-in"]=function(t){return-1*(Math.sqrt(1-t*t)-1)},c["circ-out"]=function(t){return Math.sqrt(1-(t-=1)*t)},c["circ-in-out"]=function(t){return(t/=.5)<1?-0.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},c["cubic-in"]=function(t){return t*t*t},c["cubic-out"]=function(t){return--t*t*t+1},c["cubic-in-out"]=function(t){return.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},c["elastic-in"]=function(t){var e=1.70158,r=0,a=1;if(0==t)return 0;if(1==t)return 1;if(r||(r=.3),a<Math.abs(1)){a=1;var e=r/4}else var e=r/(2*Math.PI)*Math.asin(1/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin(2*(t-e)*Math.PI/r))},c["elastic-out"]=function(t){var e=1.70158,r=0,a=1;if(0==t)return 0;if(1==t)return 1;if(r||(r=.3),a<Math.abs(1)){a=1;var e=r/4}else var e=r/(2*Math.PI)*Math.asin(1/a);return a*Math.pow(2,-10*t)*Math.sin(2*(t-e)*Math.PI/r)+1},c["elastic-in-out"]=function(t){var e=1.70158,r=0,a=1;if(0==t)return 0;if(2==(t/=.5))return 1;if(r||(r=.3*1.5),a<Math.abs(1)){a=1;var e=r/4}else var e=r/(2*Math.PI)*Math.asin(1/a);return 1>t?-.5*a*Math.pow(2,10*(t-=1))*Math.sin(2*(t-e)*Math.PI/r):a*Math.pow(2,-10*(t-=1))*Math.sin(2*(t-e)*Math.PI/r)*.5+1},c["expo-in"]=function(t){return 0==t?0:Math.pow(2,10*(t-1))},c["expo-out"]=function(t){return 1==t?1:1-Math.pow(2,-10*t)},c["expo-in-out"]=function(t){return 0==t?0:1==t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},c.linear=function(t){return t},c["quad-in"]=function(t){return t*t},c["quad-out"]=function(t){return t*(2-t)},c["quad-in-out"]=function(t){return.5>t?2*t*t:-1+(4-2*t)*t},c["quart-in"]=function(t){return t*t*t*t},c["quart-out"]=function(t){return 1- --t*t*t*t},c["quart-in-out"]=function(t){return.5>t?8*t*t*t*t:1-8*--t*t*t*t},c["quint-in"]=function(t){return t*t*t*t*t},c["quint-out"]=function(t){return 1+--t*t*t*t*t},c["quint-in-out"]=function(t){return.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t},c["sine-in"]=function(t){return 1-Math.cos(t*(Math.PI/2))},c["sine-out"]=function(t){return Math.sin(t*(Math.PI/2))},c["sine-in-out"]=function(t){return.5*(1-Math.cos(Math.PI*t))};var h=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame,u=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.oCancelAnimationFrame,l="	\n\f\r   ᠎             　\u2028\u2029",p=new RegExp("([a-z])["+l+",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?["+l+"]*,?["+l+"]*)+)","ig"),f=new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)["+l+"]*,?["+l+"]*","ig"),m=function(t){if(!t)return null;if(typeof t==typeof[])return t;var e={a:7,c:6,o:2,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,u:3,z:0},r=[];return String(t).replace(p,function(t,a,s){var o=[],n=a.toLowerCase();if(s.replace(f,function(t,e){e&&o.push(+e)}),"m"==n&&o.length>2&&(r.push([a].concat(o.splice(0,2))),n="l",a="m"==a?"l":"L"),"o"==n&&1==o.length&&r.push([a,o[0]]),"r"==n)r.push([a].concat(o));else for(;o.length>=e[n]&&(r.push([a].concat(o.splice(0,e[n]))),e[n]););}),r},y=function(t,e){for(var r=[],a=0,s=t.length;s-2*!e>a;a+=2){var o=[{x:+t[a-2],y:+t[a-1]},{x:+t[a],y:+t[a+1]},{x:+t[a+2],y:+t[a+3]},{x:+t[a+4],y:+t[a+5]}];e?a?s-4==a?o[3]={x:+t[0],y:+t[1]}:s-2==a&&(o[2]={x:+t[0],y:+t[1]},o[3]={x:+t[2],y:+t[3]}):o[0]={x:+t[s-2],y:+t[s-1]}:s-4==a?o[3]=o[2]:a||(o[0]={x:+t[a],y:+t[a+1]}),r.push(["C",(-o[0].x+6*o[1].x+o[2].x)/6,(-o[0].y+6*o[1].y+o[2].y)/6,(o[1].x+6*o[2].x-o[3].x)/6,(o[1].y+6*o[2].y-o[3].y)/6,o[2].x,o[2].y])}return r},d=function(t,e,r,a,s){if(null==s&&null==a&&(a=r),t=+t,e=+e,r=+r,a=+a,null!=s)var o=Math.PI/180,n=t+r*Math.cos(-a*o),i=t+r*Math.cos(-s*o),c=e+r*Math.sin(-a*o),h=e+r*Math.sin(-s*o),u=[["M",n,c],["A",r,r,0,+(s-a>180),0,i,h]];else u=[["M",t,e],["m",0,-a],["a",r,a,0,1,1,0,2*a],["a",r,a,0,1,1,0,-2*a],["z"]];return u},I=function(t){if(t=m(t),!t||!t.length)return[["M",0,0]];var e,r=[],a=0,s=0,o=0,n=0,i=0;"M"==t[0][0]&&(a=+t[0][1],s=+t[0][2],o=a,n=s,i++,r[0]=["M",a,s]);for(var c,h,u=3==t.length&&"M"==t[0][0]&&"R"==t[1][0].toUpperCase()&&"Z"==t[2][0].toUpperCase(),l=i,p=t.length;p>l;l++){if(r.push(c=[]),h=t[l],e=h[0],e!=e.toUpperCase())switch(c[0]=e.toUpperCase(),c[0]){case"A":c[1]=h[1],c[2]=h[2],c[3]=h[3],c[4]=h[4],c[5]=h[5],c[6]=+h[6]+a,c[7]=+h[7]+s;break;case"V":c[1]=+h[1]+s;break;case"H":c[1]=+h[1]+a;break;case"R":for(var f=[a,s].concat(h.slice(1)),I=2,_=f.length;_>I;I++)f[I]=+f[I]+a,f[++I]=+f[I]+s;r.pop(),r=r.concat(y(f,u));break;case"O":r.pop(),f=d(a,s,h[1],h[2]),f.push(f[0]),r=r.concat(f);break;case"U":r.pop(),r=r.concat(d(a,s,h[1],h[2],h[3])),c=["U"].concat(r[r.length-1].slice(-2));break;case"M":o=+h[1]+a,n=+h[2]+s;default:for(I=1,_=h.length;_>I;I++)c[I]=+h[I]+(I%2?a:s)}else if("R"==e)f=[a,s].concat(h.slice(1)),r.pop(),r=r.concat(y(f,u)),c=["R"].concat(h.slice(-2));else if("O"==e)r.pop(),f=d(a,s,h[1],h[2]),f.push(f[0]),r=r.concat(f);else if("U"==e)r.pop(),r=r.concat(d(a,s,h[1],h[2],h[3])),c=["U"].concat(r[r.length-1].slice(-2));else for(var g=0,M=h.length;M>g;g++)c[g]=h[g];if(e=e.toUpperCase(),"O"!=e)switch(c[0]){case"Z":a=+o,s=+n;break;case"H":a=c[1];break;case"V":s=c[1];break;case"M":o=c[c.length-2],n=c[c.length-1];default:a=c[c.length-2],s=c[c.length-1]}}return r},_=function(t,e,r,a){return[t,e,r,a,r,a]},g=function(t,e,r,a,s,o){var n=1/3,i=2/3;return[n*t+i*r,n*e+i*a,n*s+i*r,n*o+i*a,s,o]},M=function(t,e,r,a,s,o,n,i,c,h){var u,l=120*Math.PI/180,p=Math.PI/180*(+s||0),f=[],m=function(t,e,r){var a=t*Math.cos(r)-e*Math.sin(r),s=t*Math.sin(r)+e*Math.cos(r);return{x:a,y:s}};if(h)w=h[0],k=h[1],v=h[2],x=h[3];else{u=m(t,e,-p),t=u.x,e=u.y,u=m(i,c,-p),i=u.x,c=u.y;var y=(Math.cos(Math.PI/180*s),Math.sin(Math.PI/180*s),(t-i)/2),d=(e-c)/2,I=y*y/(r*r)+d*d/(a*a);I>1&&(I=Math.sqrt(I),r=I*r,a=I*a);var _=r*r,g=a*a,b=(o==n?-1:1)*Math.sqrt(Math.abs((_*g-_*d*d-g*y*y)/(_*d*d+g*y*y))),v=b*r*d/a+(t+i)/2,x=b*-a*y/r+(e+c)/2,w=Math.asin(((e-x)/a).toFixed(9)),k=Math.asin(((c-x)/a).toFixed(9));w=v>t?Math.PI-w:w,k=v>i?Math.PI-k:k,0>w&&(w=2*Math.PI+w),0>k&&(k=2*Math.PI+k),n&&w>k&&(w-=2*Math.PI),!n&&k>w&&(k-=2*Math.PI)}var A=k-w;if(Math.abs(A)>l){var C=k,N=i,q=c;k=w+l*(n&&k>w?1:-1),i=v+r*Math.cos(k),c=x+a*Math.sin(k),f=M(i,c,r,a,s,0,n,N,q,[k,C,v,x])}A=k-w;var P=Math.cos(w),F=Math.sin(w),E=Math.cos(k),S=Math.sin(k),G=Math.tan(A/4),D=4/3*r*G,L=4/3*a*G,T=[t,e],V=[t+D*F,e-L*P],R=[i+D*S,c-L*E],U=[i,c];if(V[0]=2*T[0]-V[0],V[1]=2*T[1]-V[1],h)return[V,R,U].concat(f);f=[V,R,U].concat(f).join().split(",");for(var z=[],O=0,j=f.length;j>O;O++)z[O]=O%2?m(f[O-1],f[O],p).y:m(f[O],f[O+1],p).x;return z},b=function(t,e){for(var r=I(t),a=e&&I(e),s={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},n=(function(t,e,r){var a,s;if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in{T:1,Q:1})&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"].concat(M.apply(0,[e.x,e.y].concat(t.slice(1))));break;case"S":"C"==r||"S"==r?(a=2*e.x-e.bx,s=2*e.y-e.by):(a=e.x,s=e.y),t=["C",a,s].concat(t.slice(1));break;case"T":"Q"==r||"T"==r?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=["C"].concat(g(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"].concat(g(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"].concat(_(e.x,e.y,t[1],t[2]));break;case"H":t=["C"].concat(_(e.x,e.y,t[1],e.y));break;case"V":t=["C"].concat(_(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"].concat(_(e.x,e.y,e.X,e.Y))}return t}),i=function(t,e){if(t[e].length>7){t[e].shift();for(var s=t[e];s.length;)h[e]="A",a&&(u[e]="A"),t.splice(e++,0,["C"].concat(s.splice(0,6)));t.splice(e,1),m=Math.max(r.length,a&&a.length||0)}},c=function(t,e,s,o,n){t&&e&&"M"==t[n][0]&&"M"!=e[n][0]&&(e.splice(n,0,["M",o.x,o.y]),s.bx=0,s.by=0,s.x=t[n][1],s.y=t[n][2],m=Math.max(r.length,a&&a.length||0))},h=[],u=[],l="",p="",f=0,m=Math.max(r.length,a&&a.length||0);m>f;f++){r[f]&&(l=r[f][0]),"C"!=l&&(h[f]=l,f&&(p=h[f-1])),r[f]=n(r[f],s,p),"A"!=h[f]&&"C"==l&&(h[f]="C"),i(r,f),a&&(a[f]&&(l=a[f][0]),"C"!=l&&(u[f]=l,f&&(p=u[f-1])),a[f]=n(a[f],o,p),"A"!=u[f]&&"C"==l&&(u[f]="C"),i(a,f)),c(r,a,s,o,f),c(a,r,o,s,f);var y=r[f],d=a&&a[f],b=y.length,v=a&&d.length;s.x=y[b-2],s.y=y[b-1],s.bx=parseFloat(y[b-4])||s.x,s.by=parseFloat(y[b-3])||s.y,o.bx=a&&(parseFloat(d[v-4])||o.x),o.by=a&&(parseFloat(d[v-3])||o.y),o.x=a&&d[v-2],o.y=a&&d[v-1]}return a?[r,a]:r},v=function(t,e,r,a){return null==t&&(t=e=r=a=0),null==e&&(e=t.y,r=t.width,a=t.height,t=t.x),{x:t,y:e,w:r,h:a,cx:t+r/2,cy:e+a/2}},x=function(t,e,r,a,s,o,n,i){for(var c,h,u,l,p,f,m,y,d=[],I=[[],[]],_=0;2>_;++_)if(0==_?(h=6*t-12*r+6*s,c=-3*t+9*r-9*s+3*n,u=3*r-3*t):(h=6*e-12*a+6*o,c=-3*e+9*a-9*o+3*i,u=3*a-3*e),Math.abs(c)<1e-12){if(Math.abs(h)<1e-12)continue;l=-u/h,l>0&&1>l&&d.push(l)}else m=h*h-4*u*c,y=Math.sqrt(m),0>m||(p=(-h+y)/(2*c),p>0&&1>p&&d.push(p),f=(-h-y)/(2*c),f>0&&1>f&&d.push(f));for(var g,M=d.length,b=M;M--;)l=d[M],g=1-l,I[0][M]=g*g*g*t+3*g*g*l*r+3*g*l*l*s+l*l*l*n,I[1][M]=g*g*g*e+3*g*g*l*a+3*g*l*l*o+l*l*l*i;return I[0][b]=t,I[1][b]=e,I[0][b+1]=n,I[1][b+1]=i,I[0].length=I[1].length=b+2,{min:{x:Math.min.apply(0,I[0]),y:Math.min.apply(0,I[1])},max:{x:Math.max.apply(0,I[0]),y:Math.max.apply(0,I[1])}}},w=function(t){for(var e,r=0,a=0,s=[],o=[],n=0,i=t.length;i>n;n++)if(e=t[n],"M"==e[0])r=e[1],a=e[2],s.push(r),o.push(a);else{var c=x(r,a,e[1],e[2],e[3],e[4],e[5],e[6]);s=s.concat(c.min.x,c.max.x),o=o.concat(c.min.y,c.max.y),r=e[5],a=e[6]}var h=Math.min.apply(0,s),u=Math.min.apply(0,o),l=Math.max.apply(0,s),p=Math.max.apply(0,o),f=v(h,u,l-h,p-u);return f},k=/,?([a-z]),?/gi,A=function(t){return t.join(",").replace(k,"$1")},C={hs:1,rg:1},N="hasOwnProperty",q=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,P=new RegExp("["+l+"]*,["+l+"]*"),F=function(t){var e=Math.round;return"rgba("+[e(t.r),e(t.g),e(t.b),+t.opacity.toFixed(2)]+")"},E=function(t){var e=window.document.getElementsByTagName("head")[0]||window.document.getElementsByTagName("svg")[0],r="rgb(255, 0, 0)";return E=function(t){if("red"==t.toLowerCase())return r;e.style.color=r,e.style.color=t;var a=window.document.defaultView.getComputedStyle(e,"").getPropertyValue("color");return a==r?null:a},E(t)},S=function(t,e,r,a){t=Math.round(255*t),e=Math.round(255*e),r=Math.round(255*r);var s={r:t,g:e,b:r,opacity:isFinite(a)?a:1};return s},G=function(t,e,r,a){typeof t==typeof{}&&"h"in t&&"s"in t&&"b"in t&&(r=t.b,e=t.s,t=t.h,a=t.o),t*=360;var s,o,n,i,c;return t=t%360/60,c=r*e,i=c*(1-Math.abs(t%2-1)),s=o=n=r-c,t=~~t,s+=[c,i,0,0,i,c][t],o+=[i,c,c,i,0,0][t],n+=[0,0,i,c,c,i][t],S(s,o,n,a)},D=function(t,e,r,a){typeof t==typeof{}&&"h"in t&&"s"in t&&"l"in t&&(r=t.l,e=t.s,t=t.h),(t>1||e>1||r>1)&&(t/=360,e/=100,r/=100),t*=360;var s,o,n,i,c;return t=t%360/60,c=2*e*(.5>r?r:1-r),i=c*(1-Math.abs(t%2-1)),s=o=n=r-c/2,t=~~t,s+=[c,i,0,0,i,c][t],o+=[i,c,c,i,0,0][t],n+=[0,0,i,c,c,i][t],S(s,o,n,a)},L=function(t){if(!t||(t=String(t)).indexOf("-")+1)return{r:-1,g:-1,b:-1,opacity:-1,error:1};if("none"==t)return{r:-1,g:-1,b:-1,opacity:-1};if(!(C[N](t.toLowerCase().substring(0,2))||"#"==t.charAt())&&(t=E(t)),!t)return{r:-1,g:-1,b:-1,opacity:-1,error:1};var e,r,a,s,o,n,i=t.match(q);return i?(i[2]&&(a=parseInt(i[2].substring(5),16),r=parseInt(i[2].substring(3,5),16),e=parseInt(i[2].substring(1,3),16)),i[3]&&(a=parseInt((o=i[3].charAt(3))+o,16),r=parseInt((o=i[3].charAt(2))+o,16),e=parseInt((o=i[3].charAt(1))+o,16)),i[4]&&(n=i[4].split(P),e=parseFloat(n[0]),"%"==n[0].slice(-1)&&(e*=2.55),r=parseFloat(n[1]),"%"==n[1].slice(-1)&&(r*=2.55),a=parseFloat(n[2]),"%"==n[2].slice(-1)&&(a*=2.55),"rgba"==i[1].toLowerCase().slice(0,4)&&(s=parseFloat(n[3])),n[3]&&"%"==n[3].slice(-1)&&(s/=100)),i[5]?(n=i[5].split(P),e=parseFloat(n[0]),"%"==n[0].slice(-1)&&(e/=100),r=parseFloat(n[1]),"%"==n[1].slice(-1)&&(r/=100),a=parseFloat(n[2]),"%"==n[2].slice(-1)&&(a/=100),("deg"==n[0].slice(-3)||"°"==n[0].slice(-1))&&(e/=360),"hsba"==i[1].toLowerCase().slice(0,4)&&(s=parseFloat(n[3])),n[3]&&"%"==n[3].slice(-1)&&(s/=100),G(e,r,a,s)):i[6]?(n=i[6].split(P),e=parseFloat(n[0]),"%"==n[0].slice(-1)&&(e/=100),r=parseFloat(n[1]),"%"==n[1].slice(-1)&&(r/=100),a=parseFloat(n[2]),"%"==n[2].slice(-1)&&(a/=100),("deg"==n[0].slice(-3)||"°"==n[0].slice(-1))&&(e/=360),"hsla"==i[1].toLowerCase().slice(0,4)&&(s=parseFloat(n[3])),n[3]&&"%"==n[3].slice(-1)&&(s/=100),D(e,r,a,s)):(e=Math.min(Math.round(e),255),r=Math.min(Math.round(r),255),a=Math.min(Math.round(a),255),s=Math.min(Math.max(s,0),1),i={r:e,g:r,b:a},i.opacity=isFinite(s)?s:1,i)):{r:-1,g:-1,b:-1,opacity:-1,error:1}};return module.exports=i,i.prototype._init=function(){if("SVG"!==this._svgDoc.nodeName.toUpperCase()&&(this._svgDoc=this._svgDoc.getElementsByTagName("svg")[0]),this._svgDoc){var t,e,r,a,s,o,n,i,c="";for(t=this._svgDoc.childNodes.length-1;t>=0;t--){var h=this._svgDoc.childNodes[t];if("G"===h.nodeName.toUpperCase()&&(r=h.getAttribute("id"))){for(a=[],o=0,n=h.childNodes.length;n>o;o++){var u=h.childNodes[o];switch(s={path:"",attrs:{},style:{}},u.nodeName.toUpperCase()){case"PATH":s.path=u.getAttribute("d");break;case"CIRCLE":var l=1*u.getAttribute("cx"),p=1*u.getAttribute("cy"),f=1*u.getAttribute("r");s.path="M"+(l-f)+","+p+"a"+f+","+f+" 0 1,0 "+2*f+",0a"+f+","+f+" 0 1,0 -"+2*f+",0z";break;case"ELLIPSE":var l=1*u.getAttribute("cx"),p=1*u.getAttribute("cy"),m=1*u.getAttribute("rx"),y=1*u.getAttribute("ry");s.path="M"+(l-m)+","+p+"a"+m+","+y+" 0 1,0 "+2*m+",0a"+m+","+y+" 0 1,0 -"+2*m+",0z";break;case"RECT":var d=1*u.getAttribute("x"),I=1*u.getAttribute("y"),_=1*u.getAttribute("width"),g=1*u.getAttribute("height"),m=1*u.getAttribute("rx"),y=1*u.getAttribute("ry");s.path=m||y?"M"+(d+m)+","+I+"l"+(_-2*m)+",0a"+m+","+y+" 0 0,1 "+m+","+y+"l0,"+(g-2*y)+"a"+m+","+y+" 0 0,1 -"+m+","+y+"l"+(2*m-_)+",0a"+m+","+y+" 0 0,1 -"+m+",-"+y+"l0,"+(2*y-g)+"a"+m+","+y+" 0 0,1 "+m+",-"+y+"z":"M"+d+","+I+"l"+_+",0l0,"+g+"l-"+_+",0z";break;case"POLYGON":for(var M=u.getAttribute("points"),b=M.split(/\s+/),v="",x=0,e=b.length;e>x;x++)v+=(x&&"L"||"M")+b[x];s.path=v+"z";break;case"LINE":var w=1*u.getAttribute("x1"),k=1*u.getAttribute("y1"),A=1*u.getAttribute("x2"),C=1*u.getAttribute("y2");s.path="M"+w+","+k+"L"+A+","+C+"z"}if(""!=s.path){for(var x=0,N=u.attributes.length;N>x;x++){var q=u.attributes[x];if(q.specified){var P=q.name.toLowerCase();switch(P){case"fill":case"fill-opacity":case"opacity":case"stroke":case"stroke-opacity":case"stroke-width":s.attrs[P]=q.value}}}for(var F=0,E=u.style.length;E>F;F++){var S=u.style[F];switch(S){case"fill":case"fill-opacity":case"opacity":case"stroke":case"stroke-opacity":case"stroke-width":s.style[S]=u.style[S]}}a.push(s)}}a.length>0&&(i={id:r,items:a},this._icons[r]=i),this._morphG?this._svgDoc.removeChild(h):(c=r,this._morphG=document.createElementNS("http://www.w3.org/2000/svg","g"),this._svgDoc.replaceChild(this._morphG,h))}}""!==c&&(this._setupAnimation(c),this._updateAnimationProgress(1),this._animationEnd())}},i.prototype._setupAnimation=function(t){if(t&&this._icons[t]){this._toIconId=t,this._startTime=void 0;var a,s;for(this._fromIconItems=n(this._curIconItems),this._toIconItems=n(this._icons[t].items),a=0,s=this._morphNodes.length;s>a;a++){var o=this._morphNodes[a];o.fromIconItemIdx=a,o.toIconItemIdx=a}var i,c=Math.max(this._fromIconItems.length,this._toIconItems.length);for(a=0;c>a;a++)if(this._fromIconItems[a]||(this._toIconItems[a]?(i=w(b(this._toIconItems[a].path)),this._fromIconItems.push({path:"M"+i.cx+","+i.cy+"l0,0",attrs:{},style:{},trans:{rotate:[0,i.cx,i.cy]}})):this._fromIconItems.push({path:"M0,0l0,0",attrs:{},style:{},trans:{rotate:[0,0,0]}})),this._toIconItems[a]||(this._fromIconItems[a]?(i=w(b(this._fromIconItems[a].path)),this._toIconItems.push({path:"M"+i.cx+","+i.cy+"l0,0",attrs:{},style:{},trans:{rotate:[0,i.cx,i.cy]}})):this._toIconItems.push({path:"M0,0l0,0",attrs:{},style:{},trans:{rotate:[0,0,0]}})),!this._morphNodes[a]){var h=document.createElementNS("http://www.w3.org/2000/svg","path");this._morphG.appendChild(h),this._morphNodes.push({node:h,fromIconItemIdx:a,toIconItemIdx:a})}for(a=0;c>a;a++){var u=this._fromIconItems[a],l=this._toIconItems[a],p=b(this._fromIconItems[a].path,this._toIconItems[a].path);u.curve=p[0],l.curve=p[1];var f=r(this._fromIconItems[a].attrs,this._toIconItems[a].attrs);u.attrsNorm=f[0],l.attrsNorm=f[1],u.attrs=e(u.attrsNorm),l.attrs=e(l.attrsNorm);var m=r(this._fromIconItems[a].style,this._toIconItems[a].style);u.styleNorm=m[0],l.styleNorm=m[1],u.style=e(u.styleNorm),l.style=e(l.styleNorm),i=w(l.curve),l.trans={rotate:[0,i.cx,i.cy]};var y,d=this._rotation;switch("random"===d&&(d=Math.random()<.5?"counterclock":"clock"),d){case"none":u.trans.rotate&&(l.trans.rotate[0]=u.trans.rotate[0]);break;case"counterclock":u.trans.rotate?(l.trans.rotate[0]=u.trans.rotate[0]-360,y=-u.trans.rotate[0]%360,l.trans.rotate[0]+=180>y?y:y-360):l.trans.rotate[0]=-360;break;default:u.trans.rotate?(l.trans.rotate[0]=u.trans.rotate[0]+360,y=u.trans.rotate[0]%360,l.trans.rotate[0]+=180>y?-y:360-y):l.trans.rotate[0]=360}}this._curIconItems=n(this._fromIconItems)}},i.prototype._updateAnimationProgress=function(r){r=c[this._easing](r);var n,i,h,u;for(n=0,u=this._curIconItems.length;u>n;n++)this._curIconItems[n].curve=o(this._fromIconItems[n].curve,this._toIconItems[n].curve,r),this._curIconItems[n].path=A(this._curIconItems[n].curve),this._curIconItems[n].attrsNorm=t(this._fromIconItems[n].attrsNorm,this._toIconItems[n].attrsNorm,r),this._curIconItems[n].attrs=e(this._curIconItems[n].attrsNorm),this._curIconItems[n].styleNorm=t(this._fromIconItems[n].styleNorm,this._toIconItems[n].styleNorm,r),this._curIconItems[n].style=e(this._curIconItems[n].styleNorm),this._curIconItems[n].trans=a(this._fromIconItems[n].trans,this._toIconItems[n].trans,r),this._curIconItems[n].transStr=s(this._curIconItems[n].trans);for(n=0,u=this._morphNodes.length;u>n;n++){var l=this._morphNodes[n];l.node.setAttribute("d",this._curIconItems[n].path);var p=this._curIconItems[n].attrs;for(i in p)l.node.setAttribute(i,p[i]);var f=this._curIconItems[n].style;for(h in f)l.node.style[h]=f[h];l.node.setAttribute("transform",this._curIconItems[n].transStr)}},i.prototype._animationEnd=function(){for(var t=this._morphNodes.length-1;t>=0;t--){var e=this._morphNodes[t];this._icons[this._toIconId].items[t]?e.node.setAttribute("d",this._icons[this._toIconId].items[t].path):(e.node.parentNode.removeChild(e.node),this._morphNodes.splice(t,1))}this._curIconId=this._toIconId,this._toIconId="",this._callback()},i.prototype.to=function(t,e,r){if(t!==this._toIconId){if(e&&typeof e!=typeof{})throw new Error('SVGMorpheus.to() > "options" parameter must be an object');if(e=e||{},r&&"function"!=typeof r)throw new Error('SVGMorpheus.to() > "callback" parameter must be a function');u(this._rafid),this._duration=e.duration||this._defDuration,this._easing=e.easing||this._defEasing,this._rotation=e.rotation||this._defRotation,this._callback=r||this._defCallback,this._setupAnimation(t),this._rafid=h(this._fnTick)}},i}();