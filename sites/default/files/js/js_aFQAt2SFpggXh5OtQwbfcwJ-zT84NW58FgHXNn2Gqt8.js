/*
Jssor Slider (MIT license)
*/
/* eslint-disable */
!function(i,h,m,e,d,k,f){new(function(){});var c={u:m.PI,l:m.max,j:m.min,H:m.ceil,G:m.floor,P:m.abs,gb:m.sin,Cb:m.cos,Oe:m.tan,Xf:m.atan,Yf:m.atan2,xb:m.sqrt,B:m.pow,dd:m.random,$Round:m.round,Y:function(d,b){var a=c.B(10,b||0);return c.$Round(d*a)/a}};function r(a){return function(b){return c.$Round(b*a)/a}}var g=i.$Jease$={$Swing:function(a){return-c.Cb(a*c.u)/2+.5},$Linear:function(a){return a},$InQuad:function(a){return a*a},$OutQuad:function(a){return-a*(a-2)},$InOutQuad:function(a){return(a*=2)<1?1/2*a*a:-1/2*(--a*(a-2)-1)},$InCubic:function(a){return a*a*a},$OutCubic:function(a){return(a-=1)*a*a+1},$InOutCubic:function(a){return(a*=2)<1?1/2*a*a*a:1/2*((a-=2)*a*a+2)},$InQuart:function(a){return a*a*a*a},$OutQuart:function(a){return-((a-=1)*a*a*a-1)},$InOutQuart:function(a){return(a*=2)<1?1/2*a*a*a*a:-1/2*((a-=2)*a*a*a-2)},$InQuint:function(a){return a*a*a*a*a},$OutQuint:function(a){return(a-=1)*a*a*a*a+1},$InOutQuint:function(a){return(a*=2)<1?1/2*a*a*a*a*a:1/2*((a-=2)*a*a*a*a+2)},$InSine:function(a){return 1-c.Cb(c.u/2*a)},$OutSine:function(a){return c.gb(c.u/2*a)},$InOutSine:function(a){return-1/2*(c.Cb(c.u*a)-1)},$InExpo:function(a){return a==0?0:c.B(2,10*(a-1))},$OutExpo:function(a){return a==1?1:-c.B(2,-10*a)+1},$InOutExpo:function(a){return a==0||a==1?a:(a*=2)<1?1/2*c.B(2,10*(a-1)):1/2*(-c.B(2,-10*--a)+2)},$InCirc:function(a){return-(c.xb(1-a*a)-1)},$OutCirc:function(a){return c.xb(1-(a-=1)*a)},$InOutCirc:function(a){return(a*=2)<1?-1/2*(c.xb(1-a*a)-1):1/2*(c.xb(1-(a-=2)*a)+1)},$InElastic:function(a){if(!a||a==1)return a;var b=.3,d=.075;return-(c.B(2,10*(a-=1))*c.gb((a-d)*2*c.u/b))},$OutElastic:function(a){if(!a||a==1)return a;var b=.3,d=.075;return c.B(2,-10*a)*c.gb((a-d)*2*c.u/b)+1},$InOutElastic:function(a){if(!a||a==1)return a;var b=.45,d=.1125;return(a*=2)<1?-.5*c.B(2,10*(a-=1))*c.gb((a-d)*2*c.u/b):c.B(2,-10*(a-=1))*c.gb((a-d)*2*c.u/b)*.5+1},$InBack:function(a){var b=1.70158;return a*a*((b+1)*a-b)},$OutBack:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},$InOutBack:function(a){var b=1.70158;return(a*=2)<1?1/2*a*a*(((b*=1.525)+1)*a-b):1/2*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},$InBounce:function(a){return 1-g.$OutBounce(1-a)},$OutBounce:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},$InOutBounce:function(a){return a<1/2?g.$InBounce(a*2)*.5:g.$OutBounce(a*2-1)*.5+.5},$GoBack:function(a){return 1-c.P(2-1)},$InWave:function(a){return 1-c.Cb(a*c.u*2)},$OutWave:function(a){return c.gb(a*c.u*2)},$OutJump:function(a){return 1-((a*=2)<1?(a=1-a)*a*a:(a-=1)*a*a)},$InJump:function(a){return(a*=2)<1?a*a*a:(a=2-a)*a*a},$Early:c.H,$Late:c.G,$Mid:c.$Round,$Mid2:r(2),$Mid3:r(3),$Mid4:r(4),$Mid5:r(5),$Mid6:r(6)};function v(k,l,p){var d=this,f=[1,0,0,0,0,1,0,0,0,0,1,0,k||0,l||0,p||0,1],j=c.gb,i=c.Cb,n=c.Oe;function h(a){return a*c.u/180}function o(b,c,f,g,i,l,n,o,q,t,u,w,y,A,C,F,a,d,e,h,j,k,m,p,r,s,v,x,z,B,D,E){return[b*a+c*j+f*r+g*z,b*d+c*k+f*s+g*B,b*e+c*m+f*v+g*D,b*h+c*p+f*x+g*E,i*a+l*j+n*r+o*z,i*d+l*k+n*s+o*B,i*e+l*m+n*v+o*D,i*h+l*p+n*x+o*E,q*a+t*j+u*r+w*z,q*d+t*k+u*s+w*B,q*e+t*m+u*v+w*D,q*h+t*p+u*x+w*E,y*a+A*j+C*r+F*z,y*d+A*k+C*s+F*B,y*e+A*m+C*v+F*D,y*h+A*p+C*x+F*E]}function g(b,a){return o.apply(e,(a||f).concat(b))}d.$Scale=function(a,b,c){if(a!=1||b!=1||c!=1)f=g([a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1])};d.$Move=function(a,b,c){f[12]+=a||0;f[13]+=b||0;f[14]+=c||0};d.$RotateX=function(b){if(b){a=h(b);var c=i(a),d=j(a);f=g([1,0,0,0,0,c,d,0,0,-d,c,0,0,0,0,1])}};d.$RotateY=function(b){if(b){a=h(b);var c=i(a),d=j(a);f=g([c,0,-d,0,0,1,0,0,d,0,c,0,0,0,0,1])}};d.Cg=function(a){d.Vg(h(a))};d.Vg=function(a){if(a){var b=i(a),c=j(a);f=g([b,c,0,0,-c,b,0,0,0,0,1,0,0,0,0,1])}};d.Ug=function(a,b){if(a||b){k=h(a);l=h(b);f=g([1,n(l),0,0,n(k),1,0,0,0,0,1,0,0,0,0,1])}};d.Sg=function(){return"matrix3d("+f.join(",")+")"};d.Og=function(){return"matrix("+[f[0],f[1],f[4],f[5],f[12],f[13]].join(",")+")"}}var b=i.$Jssor$=new function(){var a=this,Eb=/\S+/g,R=1,mb=2,qb=3,pb=4,tb=5,T,t=0,n=0,I=0,M=navigator,Ab=M.appName,o=M.userAgent,r=parseFloat;function w(c,a,b){return c.indexOf(a,b)}function Qb(){if(!T){T={td:"ontouchstart"in i||"createTouch"in h};var a;if(M.pointerEnabled||(a=M.msPointerEnabled))T.re=a?"msTouchAction":"touchAction"}return T}function y(g){if(!t){t=-1;if(Ab=="Microsoft Internet Explorer"&&!!i.attachEvent&&!!i.ActiveXObject){var e=w(o,"MSIE");t=R;n=r(o.substring(e+5,w(o,";",e)))}else if(Ab=="Netscape"&&!!i.addEventListener){var d=w(o,"Firefox"),b=w(o,"Safari"),f=w(o,"Chrome"),c=w(o,"AppleWebKit");if(d>=0){t=mb;n=r(o.substring(d+8))}else if(b>=0){var h=o.substring(0,b).lastIndexOf("/");t=f>=0?pb:qb;n=r(o.substring(h+1,b))}else{var a=/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);if(a){t=R;n=r(a[1])}}if(c>=0)I=r(o.substring(c+12))}else{var a=/(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o);if(a){t=tb;n=r(a[2])}}}return g==t}function F(){return y(R)}function ob(){return y(qb)}function sb(){return y(tb)}function B(){y();return I>537||n>42||t==R&&n>=11}function U(a){var b;return function(d){if(!b){var c=a.substr(0,1).toUpperCase()+a.substr(1);b=j(["","WebKit","ms","Moz","O","webkit"],function(b){var e=b+(b?c:a);return d.style[e]!=f&&e})||a}return b}}var O=l("transform",8);function J(a){return a}function P(a){return i.SVGElement&&a instanceof i.SVGElement}function Ob(a){return{}.toString.call(a)}var S=Array.isArray||function(a){return N(a)=="array"},wb={};j(["Boolean","Number","String","Function","Array","Date","RegExp","Object"],function(a){wb["[object "+a+"]"]=a.toLowerCase()});function j(b,d){var a,c;if(S(b)){for(a=0;a<m(b);a++)if(c=d(b[a],a,b))return c}else for(a in b)if(c=d(b[a],a,b))return c}function N(a){return a==e?String(a):wb[Ob(a)]||"object"}function Z(a){for(var b in a)return d}function D(a){try{return N(a)=="object"&&!a.nodeType&&a!=a.window&&(!a.constructor||{}.hasOwnProperty.call(a.constructor.prototype,"isPrototypeOf"))}catch(b){}}function Db(a,b){return{x:a,y:b}}function Rb(b,a){setTimeout(b,a||0)}function q(a,b){return a===f?b:a}a.ud=Qb;a.ue=F;a.He=ob;a.gg=B;a.Cd=function(){return n};a.$Delay=Rb;a.wc=q;a.W=function(a,b){b.call(a);return x({},a)};function bb(a){a.constructor===bb.caller&&a.F&&a.F.apply(a,bb.caller.arguments)}a.F=bb;a.$GetElement=function(b){if(a.ag(b))b=h.getElementById(b);return b};a.xc=function(c){var b=[];j(c,function(d){var c=a.$GetElement(d);c&&b.push(c)});return b};function u(a){return a||i.event}a.Zf=u;a.$EvtSrc=function(c){c=u(c);var b=c.target||c.srcElement||h;if(b.nodeType==3)b=a.Lb(b);return b};a.Fe=function(a){a=u(a);return a.relatedTarget||a.toElement};a.Je=function(a){a=u(a);return a.which||([0,1,3,0,2])[a.button]||a.charCode||a.keyCode};a.Tc=function(a){a=u(a);return{x:a.clientX||0,y:a.clientY||0}};a.Ue=function(a,b){return Db(a.x-b.x,a.y-b.y)};a.eg=function(a,b){return a.x>=b.x&&a.x<=b.t&&a.y>=b.y&&a.y<=b.m};a.Ie=function(d,f){var c=b.dg(f),e=b.Tc(d);return a.eg(e,c)};a.Ib=function(b){return P(a.Lb(b))};function A(c,d,a){if(a!==f)c.style[d]=a==f?"":a;else{var b=c.currentStyle||c.style;a=b[d];if(a==""&&i.getComputedStyle){b=c.ownerDocument.defaultView.getComputedStyle(c,e);b&&(a=b.getPropertyValue(d)||b[d])}return a}}function fb(b,c,a,d){if(a===f){a=r(A(b,c));isNaN(a)&&(a=e);return a}d&&a!=e&&(a+=d);A(b,c,a)}function l(g,a,b,d){var c;if(a&2)c="px";if(a&4)c="%";if(a&16)c="em";var f=a&8&&U(g);a&=-9;d=d||(a?fb:A);return function(i,h){b&&h&&(h*=b);var a=d(i,f?f(i):g,h,c);return b&&a!=e?a/b:a}}function C(a){return function(c,b){s(c,a,b)}}var hb={r:["rotate"],sX:["scaleX",2],sY:["scaleY",2],tX:["translateX",1],tY:["translateY",1],kX:["skewX"],kY:["skewY"]};function jb(a){var b="";if(a){j(a,function(d,c){var a=hb[c];if(a){var e=a[1]||0;if(ib[c]!=d)b+=" "+a[0]+"("+d+(["deg","px",""])[e]+")"}});if(B())if(a.tX||a.tY||a.tZ!=f)b+=" translate3d("+(a.tX||0)+"px,"+(a.tY||0)+"px,"+(a.tZ||0)+"px)"}return b}function nb(a){return"rect("+a.y+"px "+a.t+"px "+a.m+"px "+a.x+"px)"}a.ug=l("transformOrigin",8);a.tg=l("backfaceVisibility",8);a.Jc=l("transformStyle",8);a.yg=l("perspective",10);a.xg=l("perspectiveOrigin",8);a.we=function(b,a){O(b,a==1?"":"scale("+a+")")};a.$AddEvent=function(b,c,d,e){b=a.$GetElement(b);b.addEventListener(c,d,e)};a.$RemoveEvent=function(b,c,d,e){b=a.$GetElement(b);b.removeEventListener(c,d,e)};a.$CancelEvent=function(a){a=u(a);a.preventDefault&&a.preventDefault();a.cancel=d;a.returnValue=k};a.$StopEvent=function(a){a=u(a);a.stopPropagation&&a.stopPropagation();a.cancelBubble=d};a.Z=function(d,c){var a=[].slice.call(arguments,2),b=function(){var b=a.concat([].slice.call(arguments,0));return c.apply(d,b)};return b};a.bd=function(b,c){if(c==f)return b.textContent||b.innerText;var d=h.createTextNode(c);a.Rb(b);b.appendChild(d)};a.ng=function(a,b){if(b==f)return a.innerHTML;a.innerHTML=b};a.dg=function(b){var a=b.getBoundingClientRect();return{x:a.left,y:a.top,w:a.right-a.left,h:a.bottom-a.top,t:a.right,m:a.bottom}};a.jb=function(d,c){for(var b=[],a=d.firstChild;a;a=a.nextSibling)(c||a.nodeType==1)&&b.push(a);return b};function zb(a,c,f,b){b=b||"u";for(a=a?a.firstChild:e;a;a=a.nextSibling)if(a.nodeType==1){if(K(a,b)==c)return a;if(!f){var d=zb(a,c,f,b);if(d)return d}}}a.$FindChild=zb;function Y(a,d,g,b){b=b||"u";var c=[];for(a=a?a.firstChild:e;a;a=a.nextSibling)if(a.nodeType==1){K(a,b)==d&&c.push(a);if(!g){var f=Y(a,d,g,b);if(m(f))c=c.concat(f)}}return c}a.rg=function(b,a){return b.getElementsByTagName(a)};a.kb=function(a,f,d,g){d=d||"u";var e;do{if(a.nodeType==1){var c;d&&(c=K(a,d));if(c&&c==q(f,c)||g==a.tagName){e=a;break}}a=b.Lb(a)}while(a&&a!=h.body);return e};a.qe=function(a){return db(["INPUT","TEXTAREA","SELECT"])[a.tagName]};function x(){for(var d=arguments,h=1&d[0],e=1+h,g=d[e-1]||{},c,b,a;e<m(d);e++)if(c=d[e])for(b in c){a=c[b];if(a!==f){a=c[b];var i=g[b];g[b]=h&&(D(i)||D(a))?x(h,{},i,a):a}}return g}a.v=x;function cb(f,g){var d={},c,a,b;for(c in f){a=f[c];b=g[c];if(a!==b){var e=k;if(D(a)&&D(b)){a=cb(a,b);e=!Z(a)}!e&&(d[c]=a)}}return d}a.Zg=cb;a.Pd=function(a,c){if(a){var b;j(c,function(c){if(a[c]!=f)(b=b||{})[c]=a[c];delete a[c]});return b}};a.Ph=function(a){return N(a)=="function"};a.Md=S;a.ag=function(a){return N(a)=="string"};a.Nd=function(a){return!S(a)&&!isNaN(r(a))&&isFinite(a)};a.f=j;a.Th=Z;a.Sh=D;function W(a){return h.createElement(a)}a.bc=function(){return W("DIV")};a.Rd=function(){return W("SPAN")};a.Kc=function(){};function s(b,c,a,d){if(a===f)return b.getAttribute(c);a=a==e?"":d?a+d:a;b.setAttribute(c,a)}function K(a,b){return s(a,b)||s(a,"data-"+b)}a.g=s;a.hb=K;a.q=function(e,c,d){var b=a.od(K(e,c));if(isNaN(b))b=d;return b};a.Hc=function(b,c,a){return eb(s(b,c),a)};function G(b,a){return s(b,"class",a)||""}function db(b){var a={};j(b,function(b){if(b!=f)a[b]=b});return a}function eb(a,b){return a&&a.match(b||Eb)||e}function V(b,a){return db(eb(b||"",a))}a.Fd=db;a.Ud=eb;a.mg=function(a){a&&(a=a.toLowerCase());return a};function gb(b,c){var a="";j(c,function(c){a&&(a+=b);a+=c});return a}function Q(a,c,b){G(a,gb(" ",x(cb(V(G(a)),V(c)),V(b))))}a.je=gb;a.Lb=function(a){return a.parentNode};a.Fc=function(b){a.nb(b,"none")};a.mb=function(b,c){a.nb(b,q(c,d)?"":"none")};a.Oh=function(b,a){b.removeAttribute(a)};a.kh=function(b,a){b.style.clip=nb(a)};a.Tb=function(){return+new Date};a.O=function(b,a){b.appendChild(a)};a.ph=function(c,b){j(b,function(b){a.O(c,b)})};a.pb=function(b,a,c){(c||a.parentNode).insertBefore(b,a)};a.oh=function(b,a,c){b.insertAdjacentHTML(a,c)};a.ib=function(b,a){a=a||b.parentNode;a&&a.removeChild(b)};a.ch=function(b,c){j(b,function(b){a.ib(b,c)})};a.Rb=function(b){a.ch(a.jb(b,d),b)};function Bb(){j([].slice.call(arguments,0),function(b){if(a.Md(b))Bb.apply(e,b);else b&&b.$Destroy&&b.$Destroy()})}a.$Destroy=Bb;a.Uc=function(b,c){var d=a.Lb(b);if(c&1){a.U(b,(a.K(d)-a.K(b))/2);a.Vd(b,e)}if(c&2){a.V(b,(a.J(d)-a.J(b))/2);a.be(b,e)}};var X={$Top:e,$Right:e,$Bottom:e,$Left:e,Eb:e,Gb:e};a.Ch=function(b){var c=a.bc();L(c,{Me:"block",Pb:a.db(b),$Top:0,$Left:0,Eb:0,Gb:0});var e=a.ve(b,X);a.pb(c,b);a.O(c,b);var f=a.ve(b,X),d={};j(e,function(b,a){if(b==f[a])d[a]=b});L(c,X);L(c,d);L(b,{$Top:0,$Left:0});return d};a.Fh=function(b,a){return parseInt(b,a||10)};a.od=r;a.Ae=function(b,a){var c=h.body;while(a&&b!==a&&c!==a)a=a.parentNode;return b===a};function ab(e,d,c){var b=e.cloneNode(!d);!c&&a.Oh(b,"id");return b}a.ab=ab;a.Vb=function(f,g){var b=new Image;function c(f,d){a.$RemoveEvent(b,"load",c);a.$RemoveEvent(b,"abort",e);a.$RemoveEvent(b,"error",e);g&&g(b,d)}function e(a){c(a,d)}if(sb()&&n<11.6||!f)c(!f);else{a.$AddEvent(b,"load",c);a.$AddEvent(b,"abort",e);a.$AddEvent(b,"error",e);b.src=f}};a.Eh=function(g,c,f){var d=1;function e(a){d--;if(c&&a&&a.src==c.src)c=a;!d&&f&&f(c)}j(g,function(f){var c=b.hb(f,"src");if(c){d++;a.Vb(c,e)}});e()};a.Ce=function(a,g,i,h){if(h)a=ab(a);var c=Y(a,g);if(!m(c))c=b.rg(a,g);for(var f=m(c)-1;f>-1;f--){var d=c[f],e=ab(i);G(e,G(d));b.th(e,d.style.cssText);b.pb(e,d);b.ib(d)}return a};function Lb(){var c=this;b.W(c,p);var e,q="",t=["av","pv","ds","dn"],g=[],r,n=0,l=0,k=0;function m(){Q(e,r,(g[k||l&2||l]||"")+" "+(g[n]||""));a.lc(e,k?"none":"")}function d(){n=0;c.T(i,"mouseup",d);c.T(h,"mouseup",d);c.T(h,"touchend",d);c.T(h,"touchcancel",d);c.T(i,"blur",d);m()}function o(){n=4;m();c.a(i,"mouseup",d);c.a(h,"mouseup",d);c.a(h,"touchend",d);c.a(h,"touchcancel",d);c.a(i,"blur",d)}c.Ye=function(a){if(a===f)return l;l=a&2||a&1;m()};c.$Enable=function(a){if(a===f)return!k;k=a?0:3;m()};c.F=function(f){c.$Elmt=e=a.$GetElement(f);s(e,"data-jssor-button","1");var d=b.Ud(G(e));if(d)q=d.shift();j(t,function(a){g.push(q+a)});r=gb(" ",g);g.unshift("");c.a(e,"mousedown",o);c.a(e,"touchstart",o)};b.F(c)}a.Lc=function(a){return new Lb(a)};a.xh=function(a,b){return c.xb(a*a+b*b)};a.R=A;l("backgroundColor");a.Fb=l("overflow");a.lc=l("pointerEvents");a.V=l("top",2);a.U=l("left",2);a.cb=l("opacity",1);a.N=l("zIndex",1);function yb(m,n,a,k,b,g,f){if(b){var h=b[0],d=b[1];if(f){var e=c.l(d*2,1),l=e*(f-1)+1;a=(a*l-h)/e;if(a>0){d/=e;h=0;var j=c.H(a)-1;a=a-j;if(a>d&&j<f-1)a=1-a}}a=(a-h)/d;a=c.j(c.l(a,0),1)}if(g){a=a*g;var i=c.G(a);a-i&&(a-=i);a=c.j(c.l(a,0),1)}if(b||g)a=c.Y(a,3);return m+n*k(a)}function kb(d,e,h,i){d=d||{};var g={},b={};function n(a){b[a]=d[a]}function l(){b.cc=d.x;h&&!e&&(b.cc-=h)}function m(){b.Wb=d.y;i&&!e&&(b.Wb-=i)}var k={cc:0,Wb:0,sX:1,sY:1,r:0,rX:0,rY:0,tX:0,tY:0,tZ:0,kX:0,kY:0},c={};if(!B()||e){c.tZ=a.Kc;c.tX=a.Kc;c.tY=a.Kc}if(B()||e){c.x=l;c.y=m}j(d,function(b,a){(c[a]||n)(a)});j(b,function(c,a){if(k[a]!=f){g[a]=c;delete b[a]}});Z(g)&&(b.Kd=g);return b}function vb(f,e){var b=[],h=e&1;e&2&&(h=!h);for(var k=c.H(f/2),a=0;a<f;a++){var d=a;if(e&4){var g=c.G(c.dd()*f);d=q(b[a],a);b[a]=q(b[g],g);b[g]=d}else{if(e&2){d=a<k?a*2:(f-a-1)*2+1;b[d]=a}if(e&32)d=c.G(a/2)+(a%2?c.H(k):0);b[d]=a}}h&&b.reverse();var i=[];j(b,function(b,a){i[b]=a});return i}function xb(b,h,e,d){for(var g=[],i=e?c.H((b+d)/2):b,f=1/(h*(i-1)+1),a=0;a<b;a++){var j=e?c.G((a+d)/2):a;g[a]=[j*h*f,f]}return g}function Jb(h,u,e){h=h||{d:e.$Elmt?s(e.$Elmt,"d"):""};var E=e.$Easing,k=e.Bd||{},g=k.r,z=g==0,F=k.dl||0;function x(c,a){var d=c[0],o=c[1],e=c[2],p=c[3],g=c[4],q=c[5],h=c[6],r=c[7];if(a===f)a=.5;var b=1-a,i=b*d+a*e,s=b*o+a*p,j=b*e+a*g,t=b*p+a*q,k=b*g+a*h,u=b*q+a*r,l=b*i+a*j,v=b*s+a*t,m=b*j+a*k,w=b*t+a*u,n=b*l+a*m,x=b*v+a*w;return[[d,o,i,s,l,v,n,x],[n,x,m,w,k,u,h,r]]}function w(c,g){for(var d=0,e=0,a=0,b=g?6:0;b<m(c);b+=6){d+=c[b];e+=c[b+1];a++}return{x:a?d/a:f,y:a?e/a:f}}function b(b){var l=m(b),j=b[0]==b[l-2]&&b[1]==b[l-1],g=w(b,j),k=[],h=[];function e(a){return{x:b[a],y:b[a+1]}}function f(j,f,b){var d=a.Ue(j,f);h[b]=a.xh(d.x,d.y);if(!h[b]&&b%6){var g=b%6<3?2:-2;d=a.Ue(e(b+g),f)}var i=c.Yf(d.y,d.x);k[b]=i}for(var d=0;d<m(b);d+=6){var i=e(d);f(i,g,d);f(e(d-2),i,d-2);f(e(d+2),i,d+2)}return{lb:b,qb:(m(b)-2)/6,kc:g.x,ic:g.y,Nc:k,Vc:h,vc:j}}function n(o){function i(a){return a.replace(/[\^\s]*([mhvlzcsqta]|\-?\d*\.?\d+)[,\$\s]*/gi," $1").replace(/([mhvlzcsqta])/gi," $1").trim().split("  ").map(l)}function l(a){return a.split(" ").map(k)}function k(a,b){return b===0?a:+a}var h=[],a,n=i(o||""),d,e,f,g;function c(b){f=b[m(b)-2];g=b[m(b)-1];a=a.concat(b)}j(n,function(i){var j=i.shift();switch(j){case"M":a&&h.push(b(a));a=[];d=i[0];e=i[1];c(i);break;case"L":c([f,g,i[0],i[1],i[0],i[1]]);break;case"C":c(i);break;case"Z":case"z":(f!=d||g!=e)&&c([f,g,d,e,d,e])}});a&&h.push(b(a));return h}function d(a,b){return c.Y(a,2)+","+c.Y(b,2)}function A(a){for(var c="M"+d(a[0],a[1]),b=2;b<m(a)-2;b+=6){c+="C";c+=d(a[b],a[b+1])+" ";c+=d(a[b+2],a[b+3])+" ";c+=d(a[b+4],a[b+5])}return c}function y(b){var a="";j(b,function(b){a+=A(b)});return a}function D(d){for(var c=[],a=0;a<m(d)-2;a+=6)c.push(b(d.slice(a,a+8)));return c}function B(c){var a=[];j(c,function(c,d){var b=c.lb;!d&&a.push(b[0],b[1]);a=a.concat(b.slice(2))});return b(a)}function l(d,a){var p=a.gf=[],q=a.bf=[],e=a.qb+(!d.vc||!d.vc);function n(b){return a.Nc[b]-d.Nc[b]}function h(b,a){a=a||0;return c.Y((b-a+c.u*101)%(c.u*2)-c.u+a,8)}function i(b,f){var e=d.Vc[b],g=a.Vc[b],i=g-e,c=n(b);c=h(c,f);p[b]=i;q[b]=c;return c}for(var l=0,b=0;b<e;b++)l+=h(n(b*6));var f=h(l/e);if(g){var j=g>0?1:-1;f=(f+c.u*2*j)%(c.u*2)||c.u*2*j;f+=c.u*2*(g-j)}for(var b=0;b<m(d.lb);b+=6){var o=i(b,f);i(b-2,o);i(b+2,o)}var s=xb(e,F),r=vb(e,k.o);a.ad=function(b,c){if(b>=0&&b<=a.qb)return yb(0,1,c,E,s[r[b%e]])}}function t(d,a,s,n,i){function q(d){for(var a=[0,.2,0,.09,.09,0,.2,0,.31,0,.4,.09,.4,.2,.4,.31,.31,.4,.2,.4,.09,.4,0,.31,0,.2],c=0;c<m(a);c+=2){a[c]+=d.kc-.2;a[c+1]+=d.ic-.2}var e=b(a);e.vc=d.vc;return e}d=s[i]=d||q(a);a=n[i]=a||q(d);var h=d.qb,g=a&&a.qb;if(h<g)return t(a,d,n,s,i);if(g<h){for(var r=D(a.lb),u=h/g,o=h-g,f=0,p=0;p<10&&f<o;p++){var v=u+u*p/10,e=0;j(r,function(d,g){e+=d.qb;var b=c.$Round((g+1)*v);if(e<b){var a=c.j(b-e,o-f);d.qb+=a;f+=a;e+=a}return o<f})}var k=[];j(r,function(d){var a=d.qb,c=d.lb;while(a-1){var e=x(c,1/a);k.push(b(e[0]));c=e[1];a--}k.push(b(c))});a=n[i]=B(k)}l(d,a);l(a,d)}function r(b,a){if(m(b)<m(a))return r(a,b);j(b,function(d,c){t(d,a[c],b,a,c)})}var o=n(h.d),p=n(u.d);r(o,p);function i(b,h,i,e,a,l){var d=b.lb;if(a>=0&&a<m(b.lb)){var k=h.lb,f,g;if(z){f=d[a]+(k[a]-d[a])*e;g=d[a+1]+(k[a+1]-d[a+1])*e}else{var o=b.Vc[a],p=h.gf[a],q=b.Nc[a],r=h.bf[a],j=o+p*e,n=q+r*e;f=j*c.Cb(n)+i.x;g=j*c.gb(n)+i.y}l[a]=f;l[a+1]=g;return{x:f,y:g}}}var v={E:function(a){if(!a)return h;if(a==1)return u;var b=[];j(o,function(c,n){for(var g=[],d=p[n],e=0;e<m(c.lb);e+=6){var f=d.ad(e/6,a),l=q(d.ad(e/6-1,a),f),k=q(d.ad(e/6+1,a),f),j={x:c.kc+(d.kc-c.kc)*f,y:c.ic+(d.ic-c.ic)*f},h=i(c,d,j,f,e,g);i(c,d,h,(f+l)/2,e-2,g);i(c,d,h,(f+k)/2,e+2,g)}b.push(g)});return{d:y(b)}},X:function(a){return a&&a.d||""},sb:C("d")};return v}function Hb(b){return x({wc:a.Ph(b)?b:g.$Linear},b)}function z(i,u,h,M,o){i=i||{};h=x({},h);var ab=h.$Elmt,p={},W={},w,y,r=h.le,P=h.Ib,F=k(Hb(h.$Easing)),V=k(h.Bd),X=k(h.$During),Z=k(h.$Round),Y=k(h.Pc,E),G=S(u);i=k(i,f,d);u=k(u,f,d);var U=B(),K=o?{c:R,Kd:L,pt:Jb,bl:Q,da:H,fc:n(C("fill"),[0,0,0,1]),sc:n(C("stroke")),cl:n(l("color"),[0,0,0,1]),bgc:n(l("backgroundColor")),bdc:n(l("borderColor")),rp:N}:{},s=h.Yc||o&&{o:4,so:4,Kd:4,ls:4,lh:4,sX:4,sY:4};function T(c){var d=V[c]||{};return b.v({},h,{$Easing:F[c]||F.wc||e,Pc:Y[c]||e,Bd:d,$During:X[c]||e,$Round:Z[c]||e,Mf:d.rd,Yc:a.Nd(s)?s:s&&s[c],le:0})}function t(a){return m(a)%2?a.concat(a):a}function k(a,c,b){a=M?kb(a,P,b&&h.Lf,b&&h.Of):a||{};return o?x({},c,a):a}function n(f,d){function c(a){return a=="transparent"?e:a||d}function a(a,b){a=c(a);b=c(b);if(!a&&b){a=b.slice(0);a[3]=0}return a||[0,0,0,0]}return function(c,d,g){d=a(d,c);c=a(c,d);var e=z(c,d,b.v({Yc:[0,0,0,4]},g));return{E:function(a){return e.E(a)},X:function(a){return"rgba("+a.join(",")+")"},sb:f}}}function I(b,k,a){b=b||0;var f=a.$Easing||g.$Linear,e=a.$During,i=a.$Round,h=a.Mf,j=k-b,d=q(a.Yc,2);return{E:function(a){return c.Y(yb(b,j,a,f,e,i,h),d)},X:J,sb:a.Pc}}function A(c,d,a,b){return{E:z(c,d,a).E,X:function(a){return a.join(",")},sb:b}}function Q(b,c,a){return A(t(b||[0]),t(c),a,C("stdDeviation"))}function H(a,c,h){var e=m(c);c=t(c);if(!a){a=c.slice(0);j(a,function(c,b){b%2&&(a[b]=0)})}a=t(a);for(var d=m(a),f,b=1;b<=d&&b<=e;b++)if(!(d%b)&&!(e%b))f=b;function g(b){var a=b;while(m(a)<d*e/f)a=a.concat(b);return a}return A(g(a),g(c),h,C("stroke-dasharray"))}function R(b,c,a){return{E:z(b,c,a).E,X:function(b){return(b.y||b.x||b.m-a.$OriginalHeight||b.t-a.$OriginalWidth)&&nb(b)||""},sb:l("clip")}}function L(e,f,c){var a=c.Nf,b;function d(b){var d=(b.rX||0)%360,e=(b.rY||0)%360,f=(b.r||0)%360,g=q(b.sX,1),h=q(b.sY,1),i=q(b.sZ,1),c=new v(b.tX,b.tY,b.tZ||0);a&&c.$Move(-a.x,-a.y);c.$Scale(g,h,i);c.Ug(b.kX,b.kY);c.$RotateX(d);c.$RotateY(e);c.Cg(f);a&&c.$Move(a.x,a.y);c.$Move(b.cc,b.Wb);return c}if(c.Ib){y=C("transform");b=function(a){return d(a).Og()}}else{y=O;if(U)b=function(a){return d(a).Sg()};else b=jb}return{E:z(e,f,c).E,sb:y,X:b||J}}function N(){var b=1e-5;return{E:J,X:J,sb:function(d){b*=-1;a.cb(d,c.Y(a.cb(d),4)+b)}}}j(u,function(b,a){var c=i&&i[a]||0;if(G||b!==c){var d=o&&K[a]||(D(b)?z:I);p[a]=d(c,b,T(a))}});w=function(b){var a;j(p,function(c,e){var d=c.E(b);c.sb(c.$Elmt||ab,c.X(d));e=="o"&&(a=d)});return a};r&&b.f(p,function(a,e){for(var d=[],b=0;b<r+1;b++)d[b]=a.X(a.E(b/r));W[e]=d;a.E=function(a){return d[c.$Round(a*r)]};a.X=J});w.E=function(c){var a=x(d,G?[]:{},i);b.f(p,function(b,d){a[d]=b.E(c)});return a};return w}a.Kf=z;a.Zd=vb;a.K=l("width",2);a.J=l("height",2);a.Vd=l("right",2);a.be=l("bottom",2);l("marginLeft",2);l("marginTop",2);a.db=l("position");a.nb=l("display");a.th=function(a,b){if(b!=f)a.style.cssText=b;else return a.style.cssText};a.Jf=function(b,a){if(a===f){a=A(b,"backgroundImage")||"";var c=/\burl\s*\(\s*["']?([^"'\r\n,]+)["']?\s*\)/gi.exec(a)||[];return c[1]}A(b,"backgroundImage",a?"url('"+a+"')":"")};var E;a.If=E={$Opacity:a.cb,$Top:a.V,$Right:a.Vd,$Bottom:a.be,$Left:a.U,Eb:a.K,Gb:a.J,Pb:a.db,Me:a.nb,$ZIndex:a.N,o:a.cb,x:a.U,y:a.V,i:a.N,dO:l("stroke-dashoffset",1),ls:l("letterSpacing",16),lh:l("lineHeight",1),so:l("startOffset",4,100,s)};a.ve=function(c,b){var a={};j(b,function(d,b){if(E[b])a[b]=E[b](c)});return a};function L(b,a){j(a,function(c,a){E[a]&&E[a](b,c)})}a.rb=L;var ib={cc:0,Wb:0,sX:1,sY:1,r:0,rX:0,rY:0,tX:0,tY:0,tZ:0,kX:0,kY:0},Pb=[g.$Linear,g.$Swing,g.$InQuad,g.$OutQuad,g.$InOutQuad,g.$InCubic,g.$OutCubic,g.$InOutCubic,g.$InQuart,g.$OutQuart,g.$InOutQuart,g.$InQuint,g.$OutQuint,g.$InOutQuint,g.$InSine,g.$OutSine,g.$InOutSine,g.$InExpo,g.$OutExpo,g.$InOutExpo,g.$InCirc,g.$OutCirc,g.$InOutCirc,g.$InElastic,g.$OutElastic,g.$InOutElastic,g.$InBack,g.$OutBack,g.$InOutBack,g.$InBounce,g.$OutBounce,g.$InOutBounce,g.$Early,g.$Late,g.$Mid,g.$Mid2,g.$Mid3,g.$Mid4,g.$Mid5,g.$Mid6];function ub(a){var c;if(b.Nd(a))c=Pb[a];else if(b.Sh(a)){c={};j(a,function(a,b){c[b]=ub(a)})}return c||a}a.Ld=ub;function m(a){return a.length}a.A=m;a.Qd=w;a.Vf=function(k,j,n,o){b.cb(k,1);var m={o:{j:0,l:1}},e={x:0,y:0,o:1,r:0,rX:0,rY:0,sX:1,sY:1,tZ:0,kX:0,kY:0};function h(e){var a=[],c=b.jb(e,d);b.f(c,function(d){if(d.nodeType==3){for(var f=b.bd(d),e=0;e<b.A(f);e++){var g=f[e],c=b.Rd();b.nb(c,"inline-block");b.db(c,"relative");g==" "?b.ng(c,"&nbsp;"):b.bd(c,g);b.pb(c,d);a.push(c);b.cb(c,j)}b.ib(d)}else a=a.concat(h(d))});return a}function l(n){var j=this,h=b.Zd(a,4),e=b.Pd(n,["b","d","e","p","dr"])||{},g={};function i(d,g,f){var b=f?a:g,e=0;if(d.Sd&2){b=c.H(b/2);if(!d.$Reverse){e=(b+1)%2*d.ed;b+=e}}return b}function d(d){var g=d&1,i=d&2||1,e=0;if(d&2)e=a%2;var f=d==68?h:b.Zd(a,d);return{Sd:d,ed:e,$Reverse:g,Od:f,Le:function(a){return c.G((f[a]+e*!g)/i)}}}function l(a,b,f,d){var e=i(a,b,f),c=1/(d*(e-1)+1);return{nc:function(e){return a.Od[e]<b&&[a.Le(e)*d*c,c]}}}function m(a){return{Pe:function(b){return a.Od[b]%2?1:-1}}}function k(b,g,k,h,j){var d=i(b,g,k),e=0;function f(a){return c.B(1-a/d,h)}if(b.Sd&2){d=c.H(a/2)-b.ed;e=f(d-1)/2*!b.ed}return{Se:function(a){a=b.Le(a);j&&(a=d-a-1);return f(a)-e}}}j.Uf=e;j.Rf=function(o){var i=g[o];if(!i){var h=e.p&&e.p[o]||{},y=b.wc(h.dl,.5),x=h.o||0,z=h.r||1,p=h.c,r=h.d,n=b.wc(h.dO,8),q=c.$Round(a*z),j=d(x),w=l(j,q,h.dlc,y),t=p&8?j:d(p),v=m(t),s=n&8?j:d(n),u=k(s,q,h.dc,r,n==9);i=g[o]={nc:w.nc,Qf:function(a){return(p!=f?v.Pe(a):1)*(r?u.Se(a):1)}}}return i}}var i=h(k),a=b.A(i),g=[];b.f(i,function(i,h){var a=[],d=b.v({},e),f=b.v({},e,{o:j});b.f(n,function(j,n){var i={},o={},k=g[n]=g[n]||new l(j);b.f(j,function(l,b){var n=k.Rf(b),p=n.nc(h);if(p){var a,g=c.Y(l-d[b],8);if(g){g=c.Y(l-e[b],8);g*=n.Qf(h);a=c.Y(g+e[b],4);var j=m[b];if(j){a=c.l(a,j.j);a=c.j(a,j.l)}}else a=l;if(a-f[b]){i[b]=a;o[b]=p}}});b.v(d,j);b.v(f,i);if(b.Th(i)){b.v(i,k.Uf);i.dr=o;a.push(i)}});b.A(a)&&o(i,a)})}};function p(){var a=this,f,e=[],c=[];function k(a,b){e.push({ec:a,gc:b})}function j(a,c){b.f(e,function(b,d){b.ec==a&&b.gc===c&&e.splice(d,1)})}function h(){e=[]}function g(){b.f(c,function(a){b.$RemoveEvent(a.Ne,a.ec,a.gc,a.Xe)});c=[]}a.Oc=function(){return f};a.a=function(f,d,e,a){b.$AddEvent(f,d,e,a);c.push({Ne:f,ec:d,gc:e,Xe:a})};a.T=function(f,d,e,a){b.f(c,function(g,h){if(g.Ne===f&&g.ec==d&&g.gc===e&&g.Xe==a){b.$RemoveEvent(f,d,e,a);c.splice(h,1)}})};a.Ve=g;a.$On=a.addEventListener=k;a.$Off=a.removeEventListener=j;a.k=function(a){var c=[].slice.call(arguments,1);b.f(e,function(b){b.ec==a&&b.gc.apply(i,c)})};a.$Destroy=function(){if(!f){f=d;g();h()}}}var l=function(C,F,l,m,L,M){C=C||0;var a=this,t,p,n,o,v,D=0,O=1,E,B=0,h=0,r=0,A,j,e,g,u,z,s=[],I=k,J,H=k;function R(a){e+=a;g+=a;j+=a;h+=a;r+=a;B+=a}function y(C){var k=C;if(u)if(!z&&(k>=g||k<e)||z&&k>=e)k=((k-e)%u+u)%u+e;if(!A||v||h!=k){var i=c.j(k,g);i=c.l(i,e);if(l.$Reverse)i=g-i+e;if(!A||v||i!=r){if(t){var y=(i-j)/(F||1),x=t(y),n;if(J){var o=i>e&&i<g;if(o!=H)n=H=o}if(!n&&x!=f){var p=!x;if(p!=I)n=I=p}if(n!=f){n&&b.lc(m,"none");!n&&b.lc(m,b.g(m,"data-events"))}}var w=r,q=r=i;b.f(s,function(c,d){var a=!A&&z||k<=h?s[b.A(s)-d-1]:c;a.L(i-B)});h=k;A=d;a.kd(w-j,q-j);a.zc(w,q)}}}function G(a,b,d){b&&a.$Shift(g);if(!d){e=c.j(e,a.yc()+B);g=c.l(g,a.vb()+B)}s.push(a)}var w=i.requestAnimationFrame||i.webkitRequestAnimationFrame||i.mozRequestAnimationFrame||i.msRequestAnimationFrame;if(b.He()&&b.Cd()<7||!w)w=function(a){b.$Delay(a,l.$Interval)};function N(){if(p){var c=b.Tb(),d=c-D;D=c;var a=h+d*o*O;if(a*o>=n*o)a=n;y(a);if(!v&&a*o>=n*o)P(E);else w(N)}}function x(f,i,j){if(!p){p=d;v=j;E=i;f=c.l(f,e);f=c.j(f,g);n=f;o=n<h?-1:1;a.Qc();D=b.Tb();w(N)}}function P(b){if(p){v=p=E=k;a.Rc();b&&b()}}a.$Play=function(a,b,c){x(a?h+a:g,b,c)};a.tc=x;a.Ff=function(a,b){x(g,a,b)};a.S=P;a.Be=function(){return h};a.Ee=function(){return n};a.z=function(){return r};a.L=y;a.uf=function(){y(g,d)};a.$IsPlaying=function(){return p};a.De=function(a){O=a};a.$Shift=R;a.je=G;a.M=function(a,b){G(a,0,b)};a.zd=function(a){G(a,1)};a.qd=function(a){g+=a};a.yc=function(){return e};a.vb=function(){return g};a.zc=a.Qc=a.Rc=a.kd=b.Kc;b.Tb();a.nf=function(){return t&&t.E(1)};l=b.v({$Interval:16},l);m&&(J=b.g(m,"data-inactive"));u=l.hc;z=l.pf;e=j=C;g=C+F;l.$Elmt=m;m&&(t=b.Kf(L,M,l,d,d))};var u=i.$JssorSlideshowFormations$=new function(){var i=this,e=0,a=1,g=2,f=3,t=1,s=2,u=4,r=8,x=256,y=512,w=1024,v=2048,k=v+t,j=v+s,p=y+t,n=y+s,o=x+u,l=x+r,m=w+u,q=w+r;function z(a){return(a&s)==s}function A(a){return(a&u)==u}function h(b,a,c){c.push(a);b[a]=b[a]||[];b[a].push(c)}i.$FormationStraight=function(f){for(var d=f.$Cols,e=f.$Rows,s=f.$Assembly,t=f.mc,r=[],a=0,b=0,i=d-1,q=e-1,g=t-1,c,b=0;b<e;b++)for(a=0;a<d;a++){switch(s){case k:c=g-(a*e+(q-b));break;case m:c=g-(b*d+(i-a));break;case p:c=g-(a*e+b);case o:c=g-(b*d+a);break;case j:c=a*e+b;break;case l:c=b*d+(i-a);break;case n:c=a*e+(q-b);break;default:c=b*d+a}h(r,c,[b,a])}return r};i.$FormationSwirl=function(r){var y=r.$Cols,z=r.$Rows,C=r.$Assembly,x=r.mc,B=[],A=[],v=0,c=0,i=0,s=y-1,t=z-1,u,q,w=0;switch(C){case k:c=s;i=0;q=[g,a,f,e];break;case m:c=0;i=t;q=[e,f,a,g];break;case p:c=s;i=t;q=[f,a,g,e];break;case o:c=s;i=t;q=[a,f,e,g];break;case j:c=0;i=0;q=[g,e,f,a];break;case l:c=s;i=0;q=[a,g,e,f];break;case n:c=0;i=t;q=[f,e,g,a];break;default:c=0;i=0;q=[e,g,a,f]}v=0;while(v<x){u=i+","+c;if(c>=0&&c<y&&i>=0&&i<z&&!A[u]){A[u]=d;h(B,v++,[i,c])}else switch(q[w++%b.A(q)]){case e:c--;break;case g:i--;break;case a:c++;break;case f:i++}switch(q[w%b.A(q)]){case e:c++;break;case g:i++;break;case a:c--;break;case f:i--}}return B};i.$FormationZigZag=function(q){var x=q.$Cols,y=q.$Rows,A=q.$Assembly,w=q.mc,u=[],v=0,c=0,d=0,r=x-1,s=y-1,z,i,t=0;switch(A){case k:c=r;d=0;i=[g,a,f,a];break;case m:c=0;d=s;i=[e,f,a,f];break;case p:c=r;d=s;i=[f,a,g,a];break;case o:c=r;d=s;i=[a,f,e,f];break;case j:c=0;d=0;i=[g,e,f,e];break;case l:c=r;d=0;i=[a,g,e,g];break;case n:c=0;d=s;i=[f,e,g,e];break;default:c=0;d=0;i=[e,g,a,g]}v=0;while(v<w){z=d+","+c;if(c>=0&&c<x&&d>=0&&d<y&&typeof u[z]=="undefined"){h(u,v++,[d,c]);switch(i[t%b.A(i)]){case e:c++;break;case g:d++;break;case a:c--;break;case f:d--}}else{switch(i[t++%b.A(i)]){case e:c--;break;case g:d--;break;case a:c++;break;case f:d++}switch(i[t++%b.A(i)]){case e:c++;break;case g:d++;break;case a:c--;break;case f:d--}}}return u};i.$FormationStraightStairs=function(i){var u=i.$Cols,v=i.$Rows,e=i.$Assembly,t=i.mc,r=[],s=0,c=0,d=0,f=u-1,g=v-1,x=t-1;switch(e){case k:case n:case p:case j:var a=0,b=0;break;case l:case m:case o:case q:var a=f,b=0;break;default:e=q;var a=f,b=0}c=a;d=b;while(s<t){if(A(e)||z(e))h(r,x-s++,[d,c]);else h(r,s++,[d,c]);switch(e){case k:case n:c--;d++;break;case p:case j:c++;d--;break;case l:case m:c--;d--;break;case q:case o:default:c++;d++}if(c<0||d<0||c>f||d>g){switch(e){case k:case n:a++;break;case l:case m:case p:case j:b++;break;case q:case o:default:a--}if(a<0||b<0||a>f||b>g){switch(e){case k:case n:a=f;b++;break;case p:case j:b=g;a++;break;case l:case m:b=g;a--;break;case q:case o:default:a=0;b++}if(b>g)b=g;else if(b<0)b=0;else if(a>f)a=f;else if(a<0)a=0}d=b;c=a}}return r};i.$FormationRectangle=function(f){var d=f.$Cols||1,e=f.$Rows||1,g=[],a,b,i;i=c.$Round(c.j(d/2,e/2))+1;for(a=0;a<d;a++)for(b=0;b<e;b++)h(g,i-c.j(a+1,b+1,d-a,e-b),[b,a]);return g};i.$FormationRandom=function(d){for(var e=[],a,b=0;b<d.$Rows;b++)for(a=0;a<d.$Cols;a++)h(e,c.H(1e5*c.dd())%13,[b,a]);return e};i.$FormationCircle=function(d){for(var e=d.$Cols||1,f=d.$Rows||1,g=[],a,i=e/2-.5,j=f/2-.5,b=0;b<e;b++)for(a=0;a<f;a++)h(g,c.$Round(c.xb(c.B(b-i,2)+c.B(a-j,2))),[a,b]);return g};i.$FormationCross=function(d){for(var e=d.$Cols||1,f=d.$Rows||1,g=[],a,i=e/2-.5,j=f/2-.5,b=0;b<e;b++)for(a=0;a<f;a++)h(g,c.$Round(c.j(c.P(b-i),c.P(a-j))),[a,b]);return g};i.$FormationRectangleCross=function(f){for(var g=f.$Cols||1,i=f.$Rows||1,j=[],a,d=g/2-.5,e=i/2-.5,k=c.l(d,e)+1,b=0;b<g;b++)for(a=0;a<i;a++)h(j,c.$Round(k-c.l(d-c.P(b-d),e-c.P(a-e)))-1,[a,b]);return j}};i.$JssorSlideshowRunner$=function(n,q,o,r,w,v){var a=this,f,m,i,t=0,s=r.$TransitionsOrder;function h(a){var c={$Left:"x",$Top:"y",$Bottom:"m",$Right:"t",$Rotate:"r",$ScaleX:"sX",$ScaleY:"sY",$TranslateX:"tX",$TranslateY:"tY",$SkewX:"kX",$SkewY:"kY",$Opacity:"o",$ZIndex:"i",$Clip:"c"};b.f(a,function(e,d){var b=c[d];if(b){a[b]=e;delete a[d];b=="c"&&h(e)}});if(a.$Zoom)a.sX=a.sY=a.$Zoom}function j(f,e){var a={$Duration:1,$Delay:0,$Cols:1,$Rows:1,$Opacity:0,$Zoom:0,$Clip:0,$Move:k,$SlideOut:k,$Reverse:k,$Formation:u.$FormationRandom,$Assembly:1032,$ChessMode:{$Column:0,$Row:0},$Easing:g.$Linear,$Round:{},Ic:[],$During:{}};b.v(a,f);if(a.$Rows==0)a.$Rows=c.$Round(a.$Cols*e);a.$Easing=b.Ld(a.$Easing);h(a);h(a.$Easing);h(a.$During);h(a.$Round);a.mc=a.$Cols*a.$Rows;a.Af=function(c,b){c/=a.$Cols;b/=a.$Rows;var f=c+"x"+b;if(!a.Ic[f]){a.Ic[f]={w:c,h:b};for(var d=0;d<a.$Cols;d++)for(var e=0;e<a.$Rows;e++)a.Ic[f][e+","+d]={y:e*b,t:d*c+c,m:e*b+b,x:d*c}}return a.Ic[f]};if(a.$Brother){a.$Brother=j(a.$Brother,e);a.$SlideOut=d}return a}function p(s,g,a,t,o,n){var h,e,j=a.$ChessMode.$Column||0,m=a.$ChessMode.$Row||0,i=a.Af(o,n),p=a.$Formation(a),r=a.$SlideOut;g=b.ab(g);b.N(g,1);b.Fb(g,"hidden");b.db(g,"absolute");v(g,0,0);!a.$Reverse&&p.reverse();var f={x:a.c&1,t:a.c&2,y:a.c&4,m:a.c&8},q=new l(0,0);b.f(p,function(w,v){if(r)v=b.A(p)-v-1;var x=a.$Delay*v;b.f(w,function(G){var J=G[0],I=G[1],O=J+","+I,v=k,w=k,z=k;if(j&&I%2){if(j&3)v=!v;if(j&12)w=!w;if(j&16)z=!z}if(m&&J%2){if(m&3)v=!v;if(m&12)w=!w;if(m&16)z=!z}var E=w?f.m:f.y,B=w?f.y:f.m,D=v?f.t:f.x,C=v?f.x:f.t,H=E||B||D||C,A=b.ab(g);e={x:0,y:0,o:1};h=b.v({},e);if(a.o)e.o=2-a.o;var N=a.$Cols*a.$Rows>1||H;if(a.sX||a.r){var M=d;if(M){e.sX=e.sY=a.sX?a.sX-1:1;h.sX=h.sY=1;var T=a.r||0;e.r=T*360*(z?-1:1);h.r=0}}if(N){var F=i[O];if(H){var p={},y=a.$ScaleClip||1;if(E&&B){p.y=i.h/2*y;p.m=-p.y}else if(E)p.m=-i.h*y;else if(B)p.y=i.h*y;if(D&&C){p.x=i.w/2*y;p.t=-p.x}else if(D)p.t=-i.w*y;else if(C)p.x=i.w*y;if(a.$Move){var R=(p.x||0)+(p.t||0),S=(p.y||0)+(p.m||0);e.x+=R;e.y+=S}h.c=F;b.f(p,function(b,a){p[a]=F[a]+b});e.c=p}else b.kh(A,F)}var P=v?1:-1,Q=w?1:-1;if(a.x)e.x+=o*a.x*P;if(a.y)e.y+=n*a.y*Q;var K={$Elmt:A,$Easing:a.$Easing,$During:a.$During,$Round:a.$Round,$Move:a.$Move,Eb:o,Gb:n,le:c.$Round(a.$Duration/4),$Reverse:!r};e=b.Zg(e,h);var L=new l(t+x,a.$Duration,K,A,h,e);q.M(L);s.Ef(A)})});q.L(-1);return q}a.Bf=function(){var a=0,d=r.$Transitions,e=b.A(d);if(s)a=t++%e;else a=c.G(c.dd()*e);d[a]&&(d[a].Qb=a);return d[a]};a.Ob=function(){n.Ob();m=e;i=e};a.Cf=function(v,y,w,x,s,k){f=j(s,k);var h=x.Re,d=w.Re,e=h,g=d,r=f,b=f.$Brother||j({},k);if(!f.$SlideOut){e=d;g=h}var l=b.$Shift||0,u=c.l(l,0),t=c.l(-l,0);m=p(n,g,b,u,q,o);i=p(n,e,r,t,q,o);a.Qb=v};a.of=function(){var a=e;if(i){a=new l(0,0);a.M(i);a.M(m);a.ye=f}return a}};var o={qf:"data-scale",yb:"data-autocenter",Dd:"data-nofreeze",ze:"data-nodrag"},q=new function(){var a=this;a.Ac=function(c,a,e,d){(d||!b.g(c,a))&&b.g(c,a,e)};a.Cc=function(a){var c=b.q(a,o.yb);b.Uc(a,c)}},s={uc:1};i.$JssorBulletNavigator$=function(){var a=this,E=b.W(a,p),h,v,C,B,m,l=0,g,r,n,z,A,i,k,u,t,x,j;function y(a){j[a]&&j[a].Ye(a==l)}function w(b){a.k(s.uc,b*r)}a.Sc=function(a){if(a!=m){var d=l,b=c.G(a/r);l=b;m=a;y(d);y(b)}};a.id=function(a){b.mb(h,!a)};a.nd=function(J){b.$Destroy(j);m=f;a.Ve();x=[];j=[];b.Rb(h);v=c.H(J/r);l=0;var F=u+z,G=t+A,s=c.H(v/n)-1;C=u+F*(!i?s:n-1);B=t+G*(i?s:n-1);b.K(h,C);b.J(h,B);for(var o=0;o<v;o++){var H=b.Rd();b.bd(H,o+1);var p=b.Ce(k,"numbertemplate",H,d);b.db(p,"absolute");var E=o%(s+1),I=c.G(o/(s+1)),y=g.Yb&&!i?s-E:E;b.U(p,(!i?y:I)*F);b.V(p,(i?y:I)*G);b.O(h,p);x[o]=p;g.$ActionMode&1&&a.a(p,"click",b.Z(e,w,o));g.$ActionMode&2&&a.a(p,"mouseenter",b.Z(e,w,o));j[o]=b.Lc(p)}q.Cc(h)};a.F=function(d,c){a.$Elmt=h=b.$GetElement(d);a.gd=g=b.v({$SpacingX:10,$SpacingY:10,$ActionMode:1},c);k=b.$FindChild(h,"prototype");u=b.K(k);t=b.J(k);b.ib(k,h);r=g.$Steps||1;n=g.$Rows||1;z=g.$SpacingX;A=g.$SpacingY;i=g.$Orientation&2;g.$AutoCenter&&q.Ac(h,o.yb,g.$AutoCenter)};a.$Destroy=function(){b.$Destroy(j,E)};b.F(a)};i.$JssorArrowNavigator$=function(){var a=this,v=b.W(a,p),f,c,g,l,r,k,h,m,j,i;function n(b){a.k(s.uc,b,d)}function u(a){b.mb(f,!a);b.mb(c,!a)}function t(){j.$Enable((g.$Loop||!l.lf(h))&&k>1);i.$Enable((g.$Loop||!l.ef(h))&&k>1)}a.Sc=function(c,a,b){h=a;!b&&t()};a.id=u;a.nd=function(g){k=g;h=0;if(!r){a.a(f,"click",b.Z(e,n,-m));a.a(c,"click",b.Z(e,n,m));j=b.Lc(f);i=b.Lc(c);b.g(f,o.Dd,1);b.g(c,o.Dd,1);r=d}};a.F=function(e,d,h,i){a.gd=g=b.v({$Steps:1},h);f=e;c=d;if(g.Yb){f=d;c=e}m=g.$Steps;l=i;if(g.$AutoCenter){q.Ac(f,o.yb,g.$AutoCenter);q.Ac(c,o.yb,g.$AutoCenter)}q.Cc(f);q.Cc(c)};a.$Destroy=function(){b.$Destroy(j,i,v)};b.F(a)};i.$JssorThumbnailNavigator$=function(){var i=this,E=b.W(i,p),h,B,a,y,C,m,l=[],A,z,g,n,r,w,v,x,t,u;function D(){var c=this;b.W(c,p);var h,f,n,l;function o(){n.Ye(m==h)}function j(e){if(e||!t.$LastDragSucceeded()){var c=g-h%g,a=t.Id((h+c)/g-1),b=a*g+g-c;if(a<0)b+=y%g;if(a>=C)b-=y%g;i.k(s.uc,b,k,d)}}c.Hd=o;c.F=function(g,i){c.Qb=h=i;l=g.nh||g.ih||b.bc();c.Wc=f=b.Ce(u,"thumbnailtemplate",l,d);n=b.Lc(f);a.$ActionMode&1&&c.a(f,"click",b.Z(e,j,0));a.$ActionMode&2&&c.a(f,"mouseenter",b.Z(e,j,1))};b.F(c)}i.Sc=function(a,e,d){if(a!=m){var b=m;m=a;b!=-1&&l[b].Hd();l[a]&&l[a].Hd()}!d&&t.$PlayTo(t.Id(c.G(a/g)))};i.id=function(a){b.mb(h,!a)};i.nd=function(I,J){b.$Destroy(t,l);m=f;l=[];var K=b.ab(B);b.Rb(h);a.Yb&&b.g(h,"dir","rtl");b.ph(h,b.jb(K));var i=b.$FindChild(h,"slides",d);y=I;C=c.H(y/g);m=-1;var e=a.$Orientation&1,s=w+(w+n)*(g-1)*(1-e),p=v+(v+r)*(g-1)*e,E=(e?c.l:c.j)(A,s),u=(e?c.j:c.l)(z,p);x=c.H((A-n)/(w+n)*e+(z-r)/(v+r)*(1-e));var G=s+(s+n)*(x-1)*e,F=p+(p+r)*(x-1)*(1-e);E=c.j(E,G);u=c.j(u,F);b.K(i,E);b.J(i,u);b.Uc(i,3);var o=[];b.f(J,function(k,f){var h=new D(k,f),d=h.Wc,a=c.G(f/g),j=f%g;b.U(d,(w+n)*j*(1-e));b.V(d,(v+r)*j*e);if(!o[a]){o[a]=b.bc();b.O(i,o[a])}b.O(o[a],d);l.push(h)});var H=b.v({$AutoPlay:0,$NaviQuitDrag:k,$SlideWidth:s,$SlideHeight:p,$SlideSpacing:n*e+r*(1-e),$MinDragOffsetToSlide:12,$SlideDuration:200,$PauseOnHover:1,$Cols:x,$PlayOrientation:a.$Orientation,$DragOrientation:a.$NoDrag||a.$DisableDrag?0:a.$Orientation},a);t=new j(h,H);q.Cc(h)};i.F=function(j,f,e){h=j;i.gd=a=b.v({$SpacingX:0,$SpacingY:0,$Orientation:1,$ActionMode:1},f);A=b.K(h);z=b.J(h);var c=b.$FindChild(h,"slides",d);u=b.$FindChild(c,"prototype");e=b.ab(e);b.pb(e,c);w=b.K(u);v=b.J(u);b.ib(u,c);b.db(c,"absolute");b.Fb(c,"hidden");g=a.$Rows||1;n=a.$SpacingX;r=a.$SpacingY;a.$AutoCenter&=a.$Orientation;a.$AutoCenter&&q.Ac(h,o.yb,a.$AutoCenter);B=b.ab(h)};i.$Destroy=function(){b.$Destroy(t,l,E)};b.F(i)};function n(e,d,c){var a=this;b.W(a,p);l.call(a,0,c.$Idle);a.qc=0;a.fd=c.$Idle}n.pc=21;n.Zb=24;var t=i.$JssorCaptionSlideo$=function(){var a=this,db=b.W(a,p);l.call(a,0,0);var f,j,B,C,w=new l(0,0),L=[],u=[],F,q=0;function H(c,f){var a=L[c];if(a==e){a=L[c]={ob:c,Zc:[],Te:[]};var d=0;!b.f(u,function(a,b){d=b;return a.ob>c})&&d++;u.splice(d,0,a)}return a}function Q(f,v){var s=b.K(f),r=b.J(f),m=b.Ib(f),j={x:m?0:b.U(f),y:m?0:b.V(f),cc:0,Wb:0,o:b.cb(f),i:b.N(f)||0,r:0,rX:0,rY:0,sX:1,sY:1,tX:0,tY:0,tZ:0,kX:0,kY:0,ls:0,lh:1,so:0,c:{y:0,t:s,m:r,x:0}},a,g;if(C){var o=C[b.q(f,"c")];if(o){a=H(o.r,0);a.sg=o.e||0}}var h=b.g(f,"data-to");if(h&&m){h=b.Ud(h);h={x:b.od(h[0]),y:b.od(h[1])}}var u={$Elmt:f,$OriginalWidth:s,$OriginalHeight:r,Nf:h,Lf:j.x,Of:j.y,Ib:m};b.f(v,function(e){var m=b.v({$Easing:b.Ld(e.e),$During:e.dr,Bd:e.p},u),i=b.v(d,{},e);b.Pd(i,["b","d","e","p","dr"]);var h=new l(e.b,e.d,m,f,j,i);q=c.l(q,e.b+e.d);if(a){if(!g)g=new l(e.b,0);g.M(h)}else{var k=H(e.b,e.b+e.d);k.Zc.push(h)}j=h.nf()});if(a&&g){g.uf();var i=g,n,k=g.yc(),p=g.vb(),t=c.l(p,a.sg);if(a.ob<p){if(a.ob>k){i=new l(k,a.ob-k);i.M(g,d)}else i=e;n=new l(a.ob,t-k,{hc:t-a.ob,pf:d});n.M(g,d)}i&&a.Zc.push(i);n&&a.Te.push(n)}return j}function N(d,c){b.f(d,function(d){var f=b.q(d,"play");if(c&&f){var e=new t(d,j,{xe:f});E.push(e);a.a(e,n.pc,I);a.a(e,n.Zb,G)}else{N(b.jb(d).concat(b.xc(b.Hc(d,"data-tchd"))),c+1);var g=b.xc(b.Hc(d,"data-tsep"));g.push(d);b.f(g,function(c){var a=B[b.q(c,"t")];a&&Q(c,a)})}})}function cb(f,e,g){var c=f.b-e;if(c){var b=new l(e,c);b.M(w,d);b.$Shift(g);a.M(b)}a.qd(f.d);return c}function bb(e){var c=w.yc(),d=0;b.f(e,function(e,f){e=b.v({d:3e3},e);cb(e,c,d);c=e.b;d+=e.d;if(!f||e.t==2){a.qc=c;a.fd=c+e.d}})}function A(i,d,e){var f=b.A(d);if(f>4)for(var j=c.H(f/4),a=0;a<j;a++){var g=d.slice(a*4,c.j(a*4+4,f)),h=new l(g[0].ob,0);A(h,g,e);i.M(h)}else b.f(d,function(a){b.f(e?a.Te:a.Zc,function(a){e&&a.qd(q-a.vb());i.M(a)})})}var i,M,y=0,g,x,S,R,z,E=[],O=[],r,D,m;function v(a){return a&2||a&4&&b.ud().td}function Z(){if(!z){g&8&&a.a(h,"keydown",J);if(g&32){a.a(h,"mousedown",s);a.a(h,"touchstart",s)}z=d}}function Y(){a.T(h,"keydown",J);a.T(h,"mousedown",s);a.T(h,"touchstart",s);z=k}function T(b){if(!r||b){r=d;a.S();b&&y&&a.L(0);a.De(1);a.Ff();Z();a.k(n.pc,a)}}function o(){if(!D&&(r||a.z())){D=d;a.S();a.Be()>a.qc&&a.L(a.qc);a.De(S||1);a.tc(0)}}function V(){!m&&o()}function U(c){var b=c;if(c<0&&a.z())b=1;if(b!=y){y=b;M&&a.k(n.Zb,a,y)}}function J(a){g&8&&b.Je(a)==27&&o()}function X(a){if(m&&b.Fe(a)!==e){m=k;g&16&&b.$Delay(V,160)}}function s(a){g&32&&!b.Ae(f,b.$EvtSrc(a))&&o()}function W(a){if(!m){m=d;if(i&1)b.Ie(a,f)&&T()}}function ab(j){var h=b.$EvtSrc(j),a=b.kb(h,e,e,"A"),c=a&&(b.qe(a)||a===f||b.Ae(f,a));if(r&&v(g))!c&&o();else if(v(i))!c&&T(d)}function I(b){var c=b.wg(),a=O[c];a!==b&&a&&a.vg();O[c]=b}function G(b,c){a.k(n.Zb,b,c)}a.wg=function(){return R||""};a.vg=o;a.Qc=function(){U(1)};a.Rc=function(){r=k;D=k;U(-1);!a.z()&&Y()};a.zc=function(){!m&&x&&a.Be()>a.fd&&o()};a.F=function(m,k,e){f=m;j=k;i=e.xe;F=e.cg;B=j.$Transitions;C=j.$Controls;N([f],0);A(w,u);if(i){a.M(w);F=d;x=b.q(f,"idle");g=b.q(f,"rollback");S=b.q(f,"speed",1);R=b.hb(f,"group");(v(i)||v(g))&&a.a(f,"click",ab);if((i&1||x)&&!b.ud().td){a.a(f,"mouseenter",W);a.a(f,"mouseleave",X)}M=b.q(f,"pause")}var l=j.$Breaks||[],c=l[b.q(f,"b")]||[],h={b:q,d:b.A(c)?0:e.$Idle||x||0};c=c.concat([h]);bb(c);a.vb();F&&a.qd(1e8);q=a.vb();A(a,u,d);a.L(-1);a.L(b.q(f,"initial")||0)};a.$Destroy=function(){b.$Destroy(db,E);a.S();a.L(-1)};b.F(a)},j=i.$JssorSlider$=(i.module||{}).exports=function(){var a=this,Gc=b.W(a,p),Ob="data-jssor-slider",ic="data-jssor-thumb",u,m,S,Cb,kb,jb,X,J,O,M,Zb,Cc,Hc=1,Bc=1,kc=1,sc=1,nc={},w,R,Mb,bc,Yb,wb,zb,yb,ab,H=[],Rb,r=-1,tc,q,I,G,P,ob,pb,E,N,lb,T,z,W,nb,Z=[],vc,xc,oc,t,vb,Hb,qb,eb,Y,Kb,Gb,Qb,Sb,F,Lb=0,cb=0,Q=Number.MAX_VALUE,K=Number.MIN_VALUE,C,mb,db,U=1,Xb=0,fb,y,Fb,Eb,L,Ab,Db,B,V,rb,A,Bb,cc=b.ud(),Vb=cc.td,x=[],D,hb,bb,Nb,hc,mc,ib;function Jb(){return!U&&Y&12}function Ic(){return Xb||!U&&Y&3}function Ib(){return!y&&!Jb()&&!A.$IsPlaying()}function Wc(){return!Ic()&&Ib()}function jc(){return z||S}function Pc(){return jc()&2?pb:ob}function lc(a,c,d){b.U(a,c);b.V(a,d)}function Fc(c,b){var a=jc(),d=(ob*b+Lb)*(a&1),e=(pb*b+Lb)*(a&2)/2;lc(c,d,e)}function dc(b,f){if(y&&!(C&1)){var e=b,d;if(b<K){e=K;d=-1}if(b>Q){e=Q;d=1}if(d){var a=b-e;if(f){a=c.Xf(a)*2/c.u;a=c.B(a*d,1.6)}else{a=c.B(a*d,.625);a=c.Oe(a*c.u/2)}b=e+a*d}}return b}function qc(a){return dc(a,d)}function Nc(a){return dc(a)}function xb(a,b){if(!(C&1)){var c=a-Q+(b||0),d=K-a+(b||0);if(c>0&&c>d)a=Q;else if(d>0)a=K}return a}function yc(a){return!(C&1)&&a-K<.0001}function wc(a){return!(C&1)&&Q-a<.0001}function sb(a){return!(C&1)&&(a-K<.0001||Q-a<.0001)}function Tb(c,a,d){!ib&&b.f(Z,function(b){b.Sc(c,a,d)})}function ec(b){var a=b,d=sb(b);if(d)a=xb(a);else{b=v(b);a=b}a=c.G(a);a=c.l(a,0);return a}function fd(a){x[r];Rb=r;r=a;tc=x[r]}function zc(){z=0;var b=B.z(),d=ec(b);Tb(d,b);if(sb(b)||b==c.G(b)){if(t&2&&(eb>0&&d==q-1||eb<0&&!d))t=0;fd(d);a.k(j.$EVT_PARK,r,Rb)}}function pc(a,b){if(q&&(!b||!A.$IsPlaying())){A.S();realPosition=qc(a);V.L(realPosition);zc()}}function ub(a){if(q){a=xb(a);a=v(a);fb=k;_IsStandBy=k;y=k;pc(a)}else Tb(0,0)}function Zc(){var b=j.Ke||0,a=mb;j.Ke|=a;return W=a&~b}function Uc(){if(W){j.Ke&=~mb;W=0}}function Dc(c){var a=b.bc();b.rb(a,ab);c&&b.Fb(a,"hidden");return a}function v(b,a){a=a||q||1;return(b%a+a)%a}function fc(c,a,b){t&8&&(t=0);tb(c,Gb,a,b)}function Ub(){b.f(Z,function(a){a.id(a.gd.$ChanceToShow<=U)})}function Mc(c){if(!U&&(b.Fe(c)||!b.Ie(c,u))){U=1;Ub();if(!y){Y&12&&Jc();x[r]&&x[r].Bc()}a.k(j.$EVT_MOUSE_LEAVE)}}function Lc(){if(U){U=0;Ub();y||!(Y&12)||Kc()}a.k(j.$EVT_MOUSE_ENTER)}function Wb(b,a){tb(b,a,d)}function tb(g,h,l,p){if(q&&(!y||m.$NaviQuitDrag)&&!Jb()&&!isNaN(g)){var e=B.z(),a=g;if(l){a=e+g;if(C&2){if(yc(e)&&g<0)a=Q;if(wc(e)&&g>0)a=K}}if(!(C&1))if(p)a=v(a);else a=xb(a,.5);if(l&&!sb(a))a=c.$Round(a);var i=(a-e)%q;a=e+i;if(h==f)h=Gb;var b=c.P(i),j=0;if(b){if(b<1)b=c.B(b,.5);if(b>1){var o=Pc(),n=(S&1?zb:yb)/o;b=c.j(b,n*1.5)}j=h*b}ib=d;A.S();ib=k;A.se(e,a,j)}}function Rc(e,h,n){var l=this,i={$Top:2,$Right:1,$Bottom:2,$Left:1},m={$Top:"top",$Right:"right",$Bottom:"bottom",$Left:"left"},g,a,f,j,k={};l.$Elmt=e;l.$ScaleSize=function(q,p,t){var l,s=q,r=p;if(!f){f=b.Ch(e);g=e.parentNode;j={$Scale:b.q(e,o.qf,1),$AutoCenter:b.q(e,o.yb)};b.f(m,function(c,a){k[a]=b.q(e,"data-scale-"+c,1)});a=e;if(h){a=b.ab(g,d);b.rb(a,{$Top:0,$Left:0});b.O(a,e);b.O(g,a)}}if(n){l=c.l(q,p);if(h)if(t>=0&&t<1){var v=c.j(q,p);l=c.j(l/v,1/(1-t))*v}}else s=r=l=c.B(O<M?p:q,j.$Scale);l*=h&&(l!=1||b.He())?1.001:1;h&&(sc=l);b.we(a,l);b.K(g,f.Eb*s);b.J(g,f.Gb*r);var u=b.ue()&&b.Cd()<9?l:1,w=(s-u)*f.Eb/2,x=(r-u)*f.Gb/2;b.U(a,w);b.V(a,x);b.f(f,function(d,a){if(i[a]&&d){var e=(i[a]&1)*c.B(q,k[a])*d+(i[a]&2)*c.B(p,k[a])*d/2;b.If[a](g,e)}});b.Uc(g,j.$AutoCenter)}}function dd(){var a=this;l.call(a,0,0,{hc:q});b.f(x,function(b){a.zd(b);b.$Shift(F/E)})}function cd(){var a=this,b=Bb.$Elmt;l.call(a,-1,2,{$Easing:g.$Linear,Pc:{Pb:Fc},hc:q,$Reverse:Hb},b,{Pb:1},{Pb:-1});a.Wc=b}function ed(){var b=this;l.call(b,-1e8,2e8);b.zc=function(e,b){if(c.P(b-e)>1e-5){var g=b,f=b;if(c.G(b)!=b&&b>e&&(C&1||b>cb))f++;var h=ec(f);Tb(h,g,d);a.k(j.$EVT_POSITION_CHANGE,v(g),v(e),b,e)}}}function Tc(o,n){var b=this,g,i,f,c,h;l.call(b,-1e8,2e8,{});b.Qc=function(){fb=d;a.k(j.$EVT_SWIPE_START,v(B.z()),V.z())};b.Rc=function(){fb=k;c=k;a.k(j.$EVT_SWIPE_END,v(B.z()),V.z());!y&&zc()};b.zc=function(e,b){var a=b;if(c)a=h;else if(f){var d=b/f;a=m.$SlideEasing(d)*(i-g)+g}a=qc(a);V.L(a)};b.se=function(a,c,h,e){y=k;f=h||1;g=a;i=c;ib=d;V.L(a);ib=k;b.L(0);b.tc(f,e)};b.Ng=function(){c=d;c&&b.$Play(e,e,d)};b.Wg=function(a){h=a};V=new ed;V.M(o);Sb&&V.M(n)}function Qc(){var c=this,a=Dc();b.N(a,0);c.$Elmt=a;c.Ef=function(c){b.O(a,c);b.mb(a)};c.Ob=function(){b.Fc(a);b.Rb(a)}}function bd(w,h){var g=this,hb=b.W(g,p),z,H=0,V,y,u,F,K,o,E=[],U,M,J,i,s,A,S;l.call(g,-N,N+1,{hc:C&1?q:f,$Reverse:Hb});function Q(){z&&z.$Destroy();Xb-=H;H=0;z=new kb.$Class(y,kb,{$Idle:b.q(y,"idle",Kb),cg:!t});z.$On(n.Zb,X)}function X(b,a){H+=a;Xb+=a;if(h==r)!H&&g.Bc()}function P(p,s,n){if(!M){M=d;if(o&&n){var q=b.q(o,"data-expand",0)*2,f=n.width,e=n.height,l=f,i=e;if(f&&e){if(F){if(F&3&&(!(F&4)||f>I||e>G)){var m=k,r=I/G*e/f;if(F&1)m=r>1;else if(F&2)m=r<1;l=m?f*G/e:I;i=m?G:e*I/f}b.K(o,l);b.J(o,i);b.V(o,(G-i)/2);b.U(o,(I-l)/2)}b.we(o,c.l((l+q)/l,(i+q)/i))}b.db(o,"absolute")}a.k(j.$EVT_LOAD_END,h)}s.Qe(k);p&&p(g)}function W(f,b,c,e){if(e==A&&r==h&&t&&Ib()&&!g.Oc()){var a=v(f);D.Cf(a,h,b,g,c,G/I);rb.$Shift(a-rb.yc()-1);rb.L(a);b.Tg();pc(a,d)}}function Z(b){if(b==A&&r==h&&Ib()&&!g.Oc()){if(!i){var a=e;if(D)if(D.Qb==h)a=D.of();else D.Ob();i=new ad(w,h,a,z);i.zg(s)}!i.$IsPlaying()&&i.sd()}}function L(a,d,k){if(a==h){if(a!=d)x[d]&&x[d].Jd();else!k&&i&&i.Ag();s&&s.$Enable();A=b.Tb();g.Vb(b.Z(e,Z,A))}else{var j=c.j(h,a),f=c.l(h,a),n=c.j(f-j,j+q-f),l=N+m.$LazyLoading-1;(!J||n<=l)&&g.Vb()}}function bb(){if(r==h&&i){i.S();s&&s.$Quit();s&&s.$Disable();i.he()}}function fb(){r==h&&i&&i.S()}function Y(b){!db&&a.k(j.$EVT_CLICK,h,b)}g.Qe=function(a){if(S!=a){S=a;a&&b.O(w,K);!a&&b.ib(K)}};g.Vb=function(f,c){c=c||g;if(b.A(E)&&!M){c.Qe(d);if(!U){U=d;a.k(j.$EVT_LOAD_START,h);b.f(E,function(a){var c=b.g(a,"data-load")||"src",d=!b.Qd(c,"data-")?c.substring(5):c;if(!b.g(a,d)){var e=b.hb(a,d)||b.hb(a,"src2");if(e){b.g(a,d,e);b.nb(a,b.g(a,"data-display"))}}})}b.Eh(E,o,b.Z(e,P,f,c))}else P(f,c)};g.Gg=function(){if(Wc())if(q==1){g.Jd();L(h,h)}else{var a;if(D)a=D.Bf(q);if(a){A=b.Tb();var c=h+eb,d=x[v(c)];return d.Vb(b.Z(e,W,c,d,a,A),g)}else(C||!sb(B.z())||!sb(B.z()+eb))&&Wb(eb)}};g.Bc=function(){L(h,h,d)};g.Jd=function(){s&&s.$Quit();s&&s.$Disable();g.Wd();i&&i.Hg();i=e;Q()};g.Tg=function(){b.Fc(w)};g.Wd=function(){b.mb(w)};function T(a,c){if(!c){u=b.$FindChild(a,"bg");y=u&&b.Lb(u)}if(!b.g(a,Ob)&&(c||!u)){var l=b.q(a,"data-arr");if(l!=f){function k(d,c){b.g(d,c,b.g(a,c))}var j=kb&&kb.$Transitions||{};b.Vf(a,b.cb(a),j[l],function(a,c){b.g(a,"data-t",b.A(j));j.push(c);k(a,"data-to");k(a,"data-bf");k(a,"data-c")});b.g(a,"data-arr","")}var g=b.jb(a);if(!u){y=a;u=Dc(d);b.g(u,"data-u","bg");var h="background";b.R(u,h+"Color",b.R(y,h+"Color"));b.R(u,h+"Image",b.R(y,h+"Image"));b.R(y,h,e);b.A(g)?b.pb(u,g[0]):b.O(y,u)}g=g.concat(b.xc(b.Hc(a,"data-tchd")));b.f(g,function(d){if(c<3&&!o)if(b.hb(d,"u")=="image"){o=d;o.border=0;b.rb(o,ab);b.rb(a,ab);b.R(o,"maxWidth","10000px");b.O(u,o)}T(d,c+1)});if(c){b.g(a,"data-events",b.lc(a));b.g(a,"data-display",b.nb(a));!b.Ib(a)&&b.ug(a,b.g(a,"data-to"));b.tg(a,b.g(a,"data-bf"));if(a.tagName=="IMG"){E.push(a);if(!b.g(a,"src")){J=d;b.Fc(a)}}var i=b.g(a,"data-load");i&&E.push(a)&&(J=J||!b.Qd(i,"data-"));var m=i&&b.g(a,i)||b.Jf(a);if(m){var n=new Image;b.g(n,"data-src",m);E.push(n)}c&&b.N(a,(b.N(a)||0)+1)}b.yg(a,b.q(a,"data-p"));b.xg(a,b.hb(a,"po"));b.Jc(a,b.g(a,"data-ts"))}}g.kd=function(c,b){var a=N-b;Fc(V,a)};g.Qb=h;T(w,0);b.rb(w,ab);b.Fb(w,"hidden");b.Jc(w,"flat");F=b.q(y,"data-fillmode",m.$FillMode);var O=b.$FindChild(y,"thumb",d);if(O){g.nh=b.ab(O);b.Fc(O)}b.mb(w);K=b.ab(R);b.N(K,1e3);g.a(w,"click",Y);Q();g.ih=o;g.Re=w;g.Wc=V=w;g.a(a,203,L);g.a(a,28,fb);g.a(a,24,bb);g.$Destroy=function(){b.$Destroy(hb,z,i)}}function ad(F,h,q,s){var c=this,E=b.W(c,p),i=0,u=0,g,m,f,e,o,w,v,z=x[h];l.call(c,0,0);function B(){c.sd()}function C(a){v=a;c.S();c.sd()}function A(){}c.sd=function(){if(!y&&!fb&&!v&&r==h&&!c.Oc()){var k=c.z();if(!k)if(g&&!o){o=d;c.he(d);a.k(j.$EVT_SLIDESHOW_START,h,u,i,u,g,e)}a.k(j.$EVT_STATE_CHANGE,h,k,i,m,f,e);if(!Jb()){var l;if(k==e)t&&b.$Delay(z.Gg,20);else{if(k==f)l=e;else if(!k)l=f;else l=c.Ee();(k!=f||!Ic())&&c.tc(l,B)}}}};c.Ag=function(){f==e&&f==c.z()&&c.L(m)};c.Hg=function(){D&&D.Qb==h&&D.Ob();var b=c.z();b<e&&a.k(j.$EVT_STATE_CHANGE,h,-b-1,i,m,f,e)};c.he=function(a){q&&b.Fb(T,a&&q.ye.$Outside?"":"hidden")};c.kd=function(c,b){if(o&&b>=g){o=k;z.Wd();D.Ob();a.k(j.$EVT_SLIDESHOW_END,h,g,i,u,g,e)}a.k(j.$EVT_PROGRESS_CHANGE,h,b,i,m,f,e)};c.zg=function(a){if(a&&!w){w=a;a.$On($JssorPlayer$.vf,C)}};c.a(s,n.pc,A);q&&c.zd(q);g=c.vb();c.zd(s);m=g+s.qc;e=c.vb();f=t?g+s.fd:e;c.$Destroy=function(){E.$Destroy();c.S()}}function rc(){Nb=fb;hc=A.Ee();bb=B.z();hb=Nc(bb)}function Kc(){rc();if(y||Jb()){A.S();a.k(j.kg)}}function Jc(f){if(Ib()){var b=B.z(),a=hb,e=0;if(f&&c.P(L)>=m.$MinDragOffsetToSlide){a=b;e=Db}a=c.H(a);a=xb(a+e,.5);var d=c.P(a-b);if(d<1&&m.$SlideEasing!=g.$Linear)d=c.B(d,.5);if((!db||!f)&&Nb)A.tc(hc);else if(b==a)tc.Bc();else A.se(b,a,d*Gb)}}function gc(a){!b.kb(b.$EvtSrc(a),f,o.ze)&&b.$CancelEvent(a)}function Ac(b){Fb=k;y=d;Kc();if(!Nb)z=0;a.k(j.$EVT_DRAG_START,v(bb),bb,b)}function Yc(a){Ec(a,1)}function Ec(c,d){L=0;Ab=0;Db=0;kc=sc;if(d){var i=c.touches[0];Eb={x:i.clientX,y:i.clientY}}else Eb=b.Tc(c);var e=b.$EvtSrc(c),g=b.kb(e,"1",ic);if((!g||g===u)&&!W&&(!d||b.A(c.touches)==1)){nb=b.kb(e,f,o.ze)||!mb||!Zc();a.a(h,d?"touchmove":"mousemove",ac);Fb=!nb&&b.kb(e,f,o.Dd);!Fb&&!nb&&Ac(c,d)}}function ac(a){var e,f;a=b.Zf(a);if(a.type!="mousemove")if(b.A(a.touches)==1){f=a.touches[0];e={x:f.clientX,y:f.clientY}}else gb();else e=b.Tc(a);if(e){var i=e.x-Eb.x,j=e.y-Eb.y,g=c.P(i),h=c.P(j);if(z||g>1.5||h>1.5)if(Fb)Ac(a,f);else{if(c.G(hb)!=hb)z=z||S&W;if((i||j)&&!z){if(W==3)if(h>g)z=2;else z=1;else z=W;if(Vb&&z==1&&h>g*2.4)nb=d}var l=i,k=ob;if(z==2){l=j;k=pb}(L-Ab)*qb<-1.5&&(Db=0);(L-Ab)*qb>1.5&&(Db=-1);Ab=L;L=l;mc=hb-L*qb/k/kc*m.$DragRatio;if(L&&z&&!nb){b.$CancelEvent(a);A.Ng(d);A.Wg(mc)}}}}function gb(){Uc();a.T(h,"mousemove",ac);a.T(h,"touchmove",ac);db=L;if(y){db&&t&8&&(t=0);A.S();y=k;var b=B.z();a.k(j.$EVT_DRAG_END,v(b),b,v(bb),bb);Y&12&&rc();Jc(d)}}function Oc(c){var e=b.$EvtSrc(c),a=b.kb(e,"1",Ob);if(u===a)if(db){b.$StopEvent(c);a=b.kb(e,f,"data-jssor-button","A");a&&b.$CancelEvent(c)}else{t&4&&(t=0);a=b.kb(e,f,"data-jssor-click");if(a){b.$CancelEvent(c);hitValues=(b.g(a,"data-jssor-click")||"").split(":");var g=b.Fh(hitValues[1]);hitValues[0]=="to"&&tb(g-1);hitValues[0]=="next"&&tb(g,f,d)}}}a.$SlidesCount=function(){return q};a.$CurrentIndex=function(){return r};a.$CurrentPosition=function(){return B.z()};a.$Idle=function(a){if(a==f)return Kb;Kb=a};a.$AutoPlay=function(a){if(a==f)return t;if(a!=t){t=a;t&&x[r]&&x[r].Bc()}};a.$IsDragging=function(){return y};a.$IsSliding=function(){return fb};a.$IsMouseOver=function(){return!U};a.$LastDragSucceeded=function(){return db};a.$OriginalWidth=function(){return O};a.$OriginalHeight=function(){return M};a.$ScaleHeight=function(b){if(b==f)return Cc||M;a.$ScaleSize(b/M*O,b)};a.$ScaleWidth=function(b){if(b==f)return Zb||O;a.$ScaleSize(b,b/O*M)};a.$ScaleSize=function(c,a,d){b.K(u,c);b.J(u,a);Hc=c/O;Bc=a/M;b.f(nc,function(a){a.$ScaleSize(Hc,Bc,d)});if(!Zb){b.pb(T,w);b.V(T,0);b.U(T,0)}Zb=c;Cc=a};a.lf=yc;a.ef=wc;a.$PlayTo=tb;a.$GoTo=ub;a.$Next=function(){Wb(1)};a.$Prev=function(){Wb(-1)};a.$Pause=function(){t=0};a.$Play=function(){a.$AutoPlay(t||1)};a.$SetSlideshowTransitions=function(a){m.$SlideshowOptions.$Transitions=a};a.Id=function(a){a=v(a);if(C&1){var d=F/E,b=v(B.z()),e=v(a-b+d),f=v(c.P(a-b));if(e>=N){if(f>q/2)if(a>b)a-=q;else a+=q}else if(a>b&&e<d)a-=q;else if(a<b&&e>d)a+=q}return a};function Xc(){cc.re&&b.R(w,cc.re,([e,"pan-y","pan-x","auto"])[mb]||"");a.a(u,"click",Oc,d);a.a(u,"mouseleave",Mc);a.a(u,"mouseenter",Lc);a.a(u,"mousedown",Ec);a.a(u,"touchstart",Yc);a.a(u,"dragstart",gc);a.a(u,"selectstart",gc);a.a(i,"mouseup",gb);a.a(h,"mouseup",gb);a.a(h,"touchend",gb);a.a(h,"touchcancel",gb);a.a(i,"blur",gb);m.$ArrowKeyNavigation&&a.a(h,"keydown",function(c){if(!b.qe(b.$EvtSrc(c))){var a=b.Je(c);if(a==37||a==39){t&8&&(t=0);fc(m.$ArrowKeyNavigation*(a-38)*qb,d)}}})}function uc(d){Gc.Ve();H=[];x=[];var e=b.jb(w),g=b.Fd(["DIV","A","LI"]);b.f(e,function(a){var c=a;if(g[a.tagName.toUpperCase()]&&!b.hb(a,"u")&&b.nb(a)!="none"){b.Jc(a,"flat");b.rb(a,ab);H.push(a)}b.N(c,(b.N(c)||0)+1)});q=b.A(H);if(q){var a=S&1?zb:yb;b.rb(R,ab);F=m.$Align;if(F==f)F=(a-E+P)/2;lb=a/E;N=c.j(q,m.$Cols||q,c.H(lb));C=N<q?m.$Loop:0;if(q*E-P<=a){lb=q-P/E;F=(a-E+P)/2;Lb=(a-E*q+P)/2}if(Cb){Qb=Cb.$Class;Sb=!F&&N==1&&q>1&&Qb&&(!b.ue()||b.Cd()>=9)}if(!(C&1)){cb=F/E;if(cb>q-1){cb=q-1;F=cb*E}K=cb;Q=K+q-lb-P/E}mb=(N>1||F?S:-1)&m.$DragOrientation;if(Sb)D=new Qb(Bb,I,G,Cb,Vb,lc);b.f(H,function(a,b){x.push(new bd(a,b))});rb=new cd;B=new dd;A=new Tc(B,rb);Xc()}b.f(Z,function(a){a.nd(q,x);d&&a.$On(s.uc,fc)})}function Pb(a,d,g){b.Md(a)&&(a=b.je("",a));var c,e;if(q){if(d==f)d=q;e="beforebegin";c=H[d];if(!c){e="afterend";c=H[q-1]}}b.$Destroy(x);a&&b.oh(c||w,e||"afterbegin",a);b.f(g,function(a){b.ib(a)});uc()}a.$AppendSlides=function(e,a){if(a==f)a=r+1;var d=H[r];Pb(e,a);var c=0;b.f(H,function(a,b){a==d&&(c=b)});ub(c)};a.$ReloadSlides=function(a){Pb(a,e,H);ub(0)};a.$RemoveSlides=function(f){var a=r,d=[];b.f(f,function(b){if(b<q&&b>=0){d.push(H[b]);b<r&&a--}});Pb(e,e,d);a=c.j(a,q-1);ub(a)};a.F=function(i,e){a.$Elmt=u=b.$GetElement(i);O=b.K(u);M=b.J(u);m=b.v({$FillMode:0,$LazyLoading:1,$ArrowKeyNavigation:1,$StartIndex:0,$AutoPlay:0,$Loop:1,$HWA:d,$NaviQuitDrag:d,$AutoPlaySteps:1,$Idle:3e3,$PauseOnHover:1,$SlideDuration:500,$SlideEasing:g.$OutQuad,$MinDragOffsetToSlide:20,$DragRatio:1,$SlideSpacing:0,$UISearchMode:1,$PlayOrientation:1,$DragOrientation:1},e);m.$HWA=m.$HWA&&b.gg();if(m.$DisplayPieces!=f)m.$Cols=m.$DisplayPieces;if(m.$ParkingPosition!=f)m.$Align=m.$ParkingPosition;t=m.$AutoPlay&63;!m.$UISearchMode;eb=m.$AutoPlaySteps;Y=m.$PauseOnHover;Y&=Vb?10:5;Kb=m.$Idle;Gb=m.$SlideDuration;S=m.$PlayOrientation&3;vb=b.mg(b.g(u,"dir"))=="rtl";Hb=vb&&(S==1||m.$DragOrientation&1);qb=Hb?-1:1;Cb=m.$SlideshowOptions;kb=b.v({$Class:n},m.$CaptionSliderOptions);jb=m.$BulletNavigatorOptions;X=m.$ArrowNavigatorOptions;J=m.$ThumbnailNavigatorOptions;var c=b.jb(u);b.f(c,function(a,d){var c=b.hb(a,"u");if(c=="loading")R=a;else{if(c=="slides"){w=a;b.R(w,"margin",0);b.R(w,"padding",0);b.Jc(w,"flat")}if(c=="navigator")Mb=a;if(c=="arrowleft")bc=a;if(c=="arrowright")Yb=a;if(c=="thumbnavigator")wb=a;if(a.tagName!="STYLE"&&a.tagName!="SCRIPT")nc[c||d]=new Rc(a,c=="slides",b.Fd(["slides","thumbnavigator"])[c])}});R&&b.ib(R);R=R||b.bc(h);zb=b.K(w);yb=b.J(w);I=m.$SlideWidth||zb;G=m.$SlideHeight||yb;ab={Eb:I,Gb:G,$Top:0,$Left:0,Me:"block",Pb:"absolute"};P=m.$SlideSpacing;ob=I+P;pb=G+P;E=S&1?ob:pb;Bb=new Qc;b.g(u,Ob,"1");b.N(w,b.N(w)||0);b.db(w,"absolute");T=b.ab(w,d);b.R(T,"pointerEvents","none");b.pb(T,w);b.O(T,Bb.$Elmt);b.Fb(w,"hidden");if(Mb&&jb){jb.Yb=vb;vc=new jb.$Class(Mb,jb,O,M);Z.push(vc)}if(X&&bc&&Yb){X.Yb=vb;X.$Loop=m.$Loop;xc=new X.$Class(bc,Yb,X,a);Z.push(xc)}if(wb&&J){J.$StartIndex=m.$StartIndex;J.$ArrowKeyNavigation=J.$ArrowKeyNavigation||0;J.Yb=vb;oc=new J.$Class(wb,J,R);!J.$NoDrag&&b.g(wb,ic,"1");Z.push(oc)}uc(d);a.$ScaleSize(O,M);Ub();ub(m.$StartIndex);b.R(u,"visibility","visible")};a.$Destroy=function(){t=0;b.$Destroy(x,Z,Gc);b.Rb(u)};b.F(a)};j.$EVT_CLICK=21;j.$EVT_DRAG_START=22;j.$EVT_DRAG_END=23;j.$EVT_SWIPE_START=24;j.$EVT_SWIPE_END=25;j.$EVT_LOAD_START=26;j.$EVT_LOAD_END=27;j.kg=28;j.$EVT_MOUSE_ENTER=31;j.$EVT_MOUSE_LEAVE=32;j.$EVT_POSITION_CHANGE=202;j.$EVT_PARK=203;j.$EVT_SLIDESHOW_START=206;j.$EVT_SLIDESHOW_END=207;j.$EVT_PROGRESS_CHANGE=208;j.$EVT_STATE_CHANGE=209}(window,document,Math,null,true,false);
/**
 * @file
 * JavaScript behaviors for the front-end display of slider.
 */

(function ($) {

  jssor_1_slider_init = function () {
    var jssor_1_SlideoTransitions = [
      [{b: 500, d: 1000, x: 0, e: {x: 6}}],
      [{b: -1, d: 1, x: 100, p: {x: {d: 1, dO: 9}}}, {b: 0, d: 2000, x: 0, e: {x: 6}, p: {x: {dl: 0.1}}}],
      [{b: -1, d: 1, x: 200, p: {x: {d: 1, dO: 9}}}, {b: 0, d: 2000, x: 0, e: {x: 6}, p: {x: {dl: 0.1}}}],
      [{b: -1, d: 1, rX: 20, rY: 90}, {b: 0, d: 4000, rX: 0, e: {rX: 1}}],
      [{b: -1, d: 1, rY: -20}, {b: 0, d: 4000, rY: -90, e: {rY: 7}}],
      [{b: -1, d: 1, sX: 2, sY: 2}, {b: 1000, d: 3000, sX: 1, sY: 1, e: {sX: 1, sY: 1}}],
      [{b: -1, d: 1, sX: 2, sY: 2}, {b: 1000, d: 5000, sX: 1, sY: 1, e: {sX: 3, sY: 3}}],
      [{b: -1, d: 1, tZ: 300}, {b: 0, d: 2000, o: 1}, {b: 3500, d: 3500, tZ: 0, e: {tZ: 1}}],
      [{b: -1, d: 1, x: 20, p: {x: {o: 33, r: 0.5}}}, {b: 0, d: 1000, x: 0, o: 0.5, e: {x: 3, o: 1}, p: {x: {dl: 0.05, o: 33}, o: {dl: 0.02, o: 68, rd: 2}}}, {b: 1000, d: 1000, o: 1, e: {o: 1}, p: {o: {dl: 0.05, o: 68, rd: 2}}}],
      [{b: -1, d: 1, da: [0, 700]}, {b: 0, d: 600, da: [700, 700], e: {da: 1}}],
      [{b: 600, d: 1000, o: 0.4}],
      [{b: -1, d: 1, da: [0, 400]}, {b: 200, d: 600, da: [400, 400], e: {da: 1}}],
      [{b: 800, d: 1000, o: 0.4}],
      [{b: -1, d: 1, sX: 1.1, sY: 1.1}, {b: 0, d: 1600, o: 1}, {b: 1600, d: 5000, sX: 0.9, sY: 0.9, e: {sX: 1, sY: 1}}],
      [{b: 0, d: 1000, o: 1, p: {o: {o: 4}}}],
      [{b: 1000, d: 1000, o: 1, p: {o: {o: 4}}}]
    ];

    var jssor_1_options = {
      $AutoPlay: 1,
      $CaptionSliderOptions: {
        $Class: $JssorCaptionSlideo$,
        $Transitions: jssor_1_SlideoTransitions
      },
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$,
        $SpacingX: 16,
        $SpacingY: 16
      }
    };

    var jssor_1_slider = new $JssorSlider$('jssor_1', jssor_1_options);
    var MAX_WIDTH = 980;

    function ScaleSlider() {
      var containerElement = jssor_1_slider.$Elmt.parentNode;
      var containerWidth = containerElement.clientWidth;

      if (containerWidth) {

        var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

        jssor_1_slider.$ScaleWidth(expectedWidth);
      } else {
        window.setTimeout(ScaleSlider, 30);
      }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, 'load', ScaleSlider);
    $Jssor$.$AddEvent(window, 'resize', ScaleSlider);
    $Jssor$.$AddEvent(window, 'orientationchange', ScaleSlider);

  };

  // Image slider.
  jssor_2_slider_init = function () {

    var jssor_2_SlideshowTransitions = [
      {$Duration: 800, x: 0.3, $During: {$Left: [0.3, 0.7]}, $Easing: {$Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2},
      {$Duration: 800, x: -0.3, $SlideOut: true, $Easing: {$Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2},
      {$Duration: 800, x: -0.3, $During: {$Left: [0.3, 0.7]}, $Easing: {$Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2},
      {$Duration: 800, x: 0.3, $SlideOut: true, $Easing: {$Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2},
      {$Duration: 800, y: 0.3, $During: {$Top: [0.3, 0.7]}, $Easing: {$Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2},
      {$Duration: 800, y: -0.3, $SlideOut: true, $Easing: {$Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2},
      {$Duration: 800, y: -0.3, $During: {$Top: [0.3, 0.7]}, $Easing: {$Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2},
      {$Duration: 800, y: 0.3, $SlideOut: true, $Easing: {$Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2},
      {$Duration: 800, x: 0.3, $Cols: 2, $During: {$Left: [0.3, 0.7]}, $ChessMode: {$Column: 3}, $Easing: {$Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2},
      {$Duration: 800, x: 0.3, $Cols: 2, $SlideOut: true, $ChessMode: {$Column: 3}, $Easing: {$Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2},
      {$Duration: 800, y: 0.3, $Rows: 2, $During: {$Top: [0.3, 0.7]}, $ChessMode: {$Row: 12}, $Easing: {$Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2},
      {$Duration: 800, y: 0.3, $Rows: 2, $SlideOut: true, $ChessMode: {$Row: 12}, $Easing: {$Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2},
      {$Duration: 800, y: 0.3, $Cols: 2, $During: {$Top: [0.3, 0.7]}, $ChessMode: {$Column: 12}, $Easing: {$Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2},
      {$Duration: 800, y: -0.3, $Cols: 2, $SlideOut: true, $ChessMode: {$Column: 12}, $Easing: {$Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2},
      {$Duration: 800, x: 0.3, $Rows: 2, $During: {$Left: [0.3, 0.7]}, $ChessMode: {$Row: 3}, $Easing: {$Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2},
      {$Duration: 800, x: -0.3, $Rows: 2, $SlideOut: true, $ChessMode: {$Row: 3}, $Easing: {$Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2},
      {$Duration: 800, x: 0.3, y: 0.3, $Cols: 2, $Rows: 2, $During: {$Left: [0.3, 0.7], $Top: [0.3, 0.7]}, $ChessMode: {$Column: 3, $Row: 12}, $Easing: {$Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2},
      {$Duration: 800, x: 0.3, y: 0.3, $Cols: 2, $Rows: 2, $During: {$Left: [0.3, 0.7], $Top: [0.3, 0.7]}, $SlideOut: true, $ChessMode: {$Column: 3, $Row: 12}, $Easing: {$Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2},
      {$Duration: 800, $Delay: 20, $Clip: 3, $Assembly: 260, $Easing: {$Clip: $Jease$.$InCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2},
      {$Duration: 800, $Delay: 20, $Clip: 3, $SlideOut: true, $Assembly: 260, $Easing: {$Clip: $Jease$.$OutCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2},
      {$Duration: 800, $Delay: 20, $Clip: 12, $Assembly: 260, $Easing: {$Clip: $Jease$.$InCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2},
      {$Duration: 800, $Delay: 20, $Clip: 12, $SlideOut: true, $Assembly: 260, $Easing: {$Clip: $Jease$.$OutCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2}
    ];

    var jssor_2_options = {
      $AutoPlay: 1,
      $SlideshowOptions: {
        $Class: $JssorSlideshowRunner$,
        $Transitions: jssor_2_SlideshowTransitions,
        $TransitionsOrder: 1
      },
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $ThumbnailNavigatorOptions: {
        $Class: $JssorThumbnailNavigator$,
        $SpacingX: 5,
        $SpacingY: 5
      }
    };

    var jssor_2_slider = new $JssorSlider$('jssor_2', jssor_2_options);
    var MAX_WIDTH = 980;

    function ScaleSlider() {
      var containerElement = jssor_2_slider.$Elmt.parentNode;
      var containerWidth = containerElement.clientWidth;

      if (containerWidth) {

        var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

        jssor_2_slider.$ScaleWidth(expectedWidth);
      } else {
        window.setTimeout(ScaleSlider, 30);
      }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, 'load', ScaleSlider);
    $Jssor$.$AddEvent(window, 'resize', ScaleSlider);
    $Jssor$.$AddEvent(window, 'orientationchange', ScaleSlider);

  };

  jssor_3_slider_init = function () {

    var jssor_3_SlideshowTransitions = [
      {$Duration: 500, $Delay: 12, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 2049, $Easing: $Jease$.$OutQuad},
      {$Duration: 500, $Delay: 40, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $SlideOut: true, $Easing: $Jease$.$OutQuad},
      {$Duration: 1000, x: -0.2, $Delay: 20, $Cols: 16, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Assembly: 260, $Easing: {$Left: $Jease$.$InOutExpo, $Opacity: $Jease$.$InOutQuad}, $Opacity: 2, $Outside: true, $Round: {$Top: 0.5}},
      {$Duration: 1600, y: -1, $Delay: 40, $Cols: 24, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Easing: $Jease$.$OutJump, $Round: {$Top: 1.5}},
      {$Duration: 1200, x: 0.2, y: -0.1, $Delay: 16, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: {$Left: [0.3, 0.7], $Top: [0.3, 0.7]}, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 260, $Easing: {$Left: $Jease$.$InWave, $Top: $Jease$.$InWave, $Clip: $Jease$.$OutQuad}, $Round: {$Left: 1.3, $Top: 2.5}},
      {$Duration: 1500, x: 0.3, y: -0.3, $Delay: 20, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: {$Left: [0.2, 0.8], $Top: [0.2, 0.8]}, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 260, $Easing: {$Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$OutQuad}, $Round: {$Left: 0.8, $Top: 2.5}},
      {$Duration: 1500, x: 0.3, y: -0.3, $Delay: 20, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: {$Left: [0.1, 0.9], $Top: [0.1, 0.9]}, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 260, $Easing: {$Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$OutQuad}, $Round: {$Left: 0.8, $Top: 2.5}}
    ];

    var jssor_3_options = {
      $AutoPlay: 1,
      $SlideshowOptions: {
        $Class: $JssorSlideshowRunner$,
        $Transitions: jssor_3_SlideshowTransitions,
        $TransitionsOrder: 1
      },
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$,
        $SpacingX: 16,
        $SpacingY: 16
      }
    };

    var jssor_3_slider = new $JssorSlider$('jssor_3', jssor_3_options);
    var MAX_WIDTH = 980;

    function ScaleSlider() {
      var containerElement = jssor_3_slider.$Elmt.parentNode;
      var containerWidth = containerElement.clientWidth;

      if (containerWidth) {

        var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

        jssor_3_slider.$ScaleWidth(expectedWidth);
      } else {
        window.setTimeout(ScaleSlider, 30);
      }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, 'load', ScaleSlider);
    $Jssor$.$AddEvent(window, 'resize', ScaleSlider);
    $Jssor$.$AddEvent(window, 'orientationchange', ScaleSlider);

  };

  // Banner slider.
  jssor_4_slider_init = function () {

    var jssor_4_SlideshowTransitions = [
      {$Duration: 800, x: -0.3, $During: {$Left: [0.3, 0.7]}, $Easing: {$Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2},
      {$Duration: 800, x: 0.3, $SlideOut: true, $Easing: {$Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2}
    ];

    var jssor_4_options = {
      $AutoPlay: 1,
      $SlideshowOptions: {
        $Class: $JssorSlideshowRunner$,
        $Transitions: jssor_4_SlideshowTransitions,
        $TransitionsOrder: 1
      },
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $ThumbnailNavigatorOptions: {
        $Class: $JssorThumbnailNavigator$,
        $Orientation: 2,
        $NoDrag: true
      }
    };

    var jssor_4_slider = new $JssorSlider$('jssor_4', jssor_4_options);
    var MAX_WIDTH = 980;

    function ScaleSlider() {
      var containerElement = jssor_4_slider.$Elmt.parentNode;
      var containerWidth = containerElement.clientWidth;

      if (containerWidth) {

        var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

        jssor_4_slider.$ScaleWidth(expectedWidth);
      } else {
        window.setTimeout(ScaleSlider, 30);
      }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, 'load', ScaleSlider);
    $Jssor$.$AddEvent(window, 'resize', ScaleSlider);
    $Jssor$.$AddEvent(window, 'orientationchange', ScaleSlider);

  };

  // Carousel.
  jssor_5_slider_init = function () {

    var jssor_5_options = {
      $AutoPlay: 1,
      $AutoPlaySteps: 5,
      $SlideDuration: 160,
      $SlideWidth: 200,
      $SlideSpacing: 3,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$,
        $Steps: 5
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$,
        $SpacingX: 16,
        $SpacingY: 16
      }
    };

    var jssor_5_slider = new $JssorSlider$('jssor_5', jssor_5_options);
    var MAX_WIDTH = 980;

    function ScaleSlider() {
      var containerElement = jssor_5_slider.$Elmt.parentNode;
      var containerWidth = containerElement.clientWidth;

      if (containerWidth) {

        var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

        jssor_5_slider.$ScaleWidth(expectedWidth);
      } else {
        window.setTimeout(ScaleSlider, 30);
      }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, 'load', ScaleSlider);
    $Jssor$.$AddEvent(window, 'resize', ScaleSlider);
    $Jssor$.$AddEvent(window, 'orientationchange', ScaleSlider);

  };

  // Partial slider.
  jssor_6_slider_init = function () {

    var jssor_6_options = {
      $AutoPlay: 1,
      $SlideWidth: 720,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$,
        $SpacingX: 16,
        $SpacingY: 16
      }
    };

    var jssor_6_slider = new $JssorSlider$('jssor_6', jssor_6_options);
    var MAX_WIDTH = 980;

    function ScaleSlider() {
      var containerElement = jssor_6_slider.$Elmt.parentNode;
      var containerWidth = containerElement.clientWidth;

      if (containerWidth) {

        var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

        jssor_6_slider.$ScaleWidth(expectedWidth);
      } else {
        window.setTimeout(ScaleSlider, 30);
      }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, 'load', ScaleSlider);
    $Jssor$.$AddEvent(window, 'resize', ScaleSlider);
    $Jssor$.$AddEvent(window, 'orientationchange', ScaleSlider);

  };

  // Verical slider with thumb.
  jssor_7_slider_init = function () {

    var jssor_7_SlideshowTransitions = [
      {$Duration: 1200, $Zoom: 1, $Easing: {$Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad}, $Opacity: 2},
      {$Duration: 1000, $Zoom: 11, $SlideOut: true, $Easing: {$Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear}, $Opacity: 2},
      {$Duration: 1200, $Zoom: 1, $Rotate: 1, $During: {$Zoom: [0.2, 0.8], $Rotate: [0.2, 0.8]}, $Easing: {$Zoom: $Jease$.$Swing, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$Swing}, $Opacity: 2, $Round: {$Rotate: 0.5}},
      {$Duration: 1000, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Easing: {$Zoom: $Jease$.$InQuint, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuint}, $Opacity: 2, $Round: {$Rotate: 0.8}},
      {$Duration: 1200, x: 0.5, $Cols: 2, $Zoom: 1, $Assembly: 2049, $ChessMode: {$Column: 15}, $Easing: {$Left: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2},
      {$Duration: 1200, x: 4, $Cols: 2, $Zoom: 11, $SlideOut: true, $Assembly: 2049, $ChessMode: {$Column: 15}, $Easing: {$Left: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear}, $Opacity: 2},
      {$Duration: 1200, x: 0.6, $Zoom: 1, $Rotate: 1, $During: {$Left: [0.2, 0.8], $Zoom: [0.2, 0.8], $Rotate: [0.2, 0.8]}, $Opacity: 2, $Round: {$Rotate: 0.5}},
      {$Duration: 1000, x: -4, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Easing: {$Left: $Jease$.$InQuint, $Zoom: $Jease$.$InQuart, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuint}, $Opacity: 2, $Round: {$Rotate: 0.8}},
      {$Duration: 1200, x: -0.6, $Zoom: 1, $Rotate: 1, $During: {$Left: [0.2, 0.8], $Zoom: [0.2, 0.8], $Rotate: [0.2, 0.8]}, $Opacity: 2, $Round: {$Rotate: 0.5}},
      {$Duration: 1000, x: 4, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Easing: {$Left: $Jease$.$InQuint, $Zoom: $Jease$.$InQuart, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuint}, $Opacity: 2, $Round: {$Rotate: 0.8}},
      {$Duration: 1200, x: 0.5, y: 0.3, $Cols: 2, $Zoom: 1, $Rotate: 1, $Assembly: 2049, $ChessMode: {$Column: 15}, $Easing: {$Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad, $Rotate: $Jease$.$InCubic}, $Opacity: 2, $Round: {$Rotate: 0.7}},
      {$Duration: 1000, x: 0.5, y: 0.3, $Cols: 2, $Zoom: 1, $Rotate: 1, $SlideOut: true, $Assembly: 2049, $ChessMode: {$Column: 15}, $Easing: {$Left: $Jease$.$InExpo, $Top: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InExpo}, $Opacity: 2, $Round: {$Rotate: 0.7}},
      {$Duration: 1200, x: -4, y: 2, $Rows: 2, $Zoom: 11, $Rotate: 1, $Assembly: 2049, $ChessMode: {$Row: 28}, $Easing: {$Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad, $Rotate: $Jease$.$InCubic}, $Opacity: 2, $Round: {$Rotate: 0.7}},
      {$Duration: 1200, x: 1, y: 2, $Cols: 2, $Zoom: 11, $Rotate: 1, $Assembly: 2049, $ChessMode: {$Column: 19}, $Easing: {$Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad, $Rotate: $Jease$.$InCubic}, $Opacity: 2, $Round: {$Rotate: 0.8}}
    ];

    var jssor_7_options = {
      $AutoPlay: 1,
      $SlideshowOptions: {
        $Class: $JssorSlideshowRunner$,
        $Transitions: jssor_7_SlideshowTransitions,
        $TransitionsOrder: 1
      },
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $ThumbnailNavigatorOptions: {
        $Class: $JssorThumbnailNavigator$,
        $Rows: 2,
        $SpacingX: 14,
        $SpacingY: 12,
        $Orientation: 2,
        $Align: 156
      }
    };

    var jssor_7_slider = new $JssorSlider$('jssor_7', jssor_7_options);
    var MAX_WIDTH = 960;

    function ScaleSlider() {
      var containerElement = jssor_7_slider.$Elmt.parentNode;
      var containerWidth = containerElement.clientWidth;

      if (containerWidth) {

        var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

        jssor_7_slider.$ScaleWidth(expectedWidth);
      } else {
        window.setTimeout(ScaleSlider, 30);
      }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, 'load', ScaleSlider);
    $Jssor$.$AddEvent(window, 'resize', ScaleSlider);
    $Jssor$.$AddEvent(window, 'orientationchange', ScaleSlider);

  };

  // Scrolling logo thumbnail slider.
  jssor_8_slider_init = function () {

    var jssor_8_options = {
      $AutoPlay: 1,
      $Idle: 0,
      $SlideDuration: 5000,
      $SlideEasing: $Jease$.$Linear,
      $PauseOnHover: 4,
      $SlideWidth: 140,
      $Align: 0
    };

    var jssor_8_slider = new $JssorSlider$('jssor_8', jssor_8_options);
    var MAX_WIDTH = 980;

    function ScaleSlider() {
      var containerElement = jssor_8_slider.$Elmt.parentNode;
      var containerWidth = containerElement.clientWidth;

      if (containerWidth) {

        var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

        jssor_8_slider.$ScaleWidth(expectedWidth);
      } else {
        window.setTimeout(ScaleSlider, 30);
      }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, 'load', ScaleSlider);
    $Jssor$.$AddEvent(window, 'resize', ScaleSlider);
    $Jssor$.$AddEvent(window, 'orientationchange', ScaleSlider);

  };

  // Full width slider.
  jssor_9_slider_init = function () {

    var jssor_9_SlideoTransitions = [
      [{b: -1, d: 1, ls: 0.5}, {b: 0, d: 1000, y: 5, e: {y: 6}}],
      [{b: -1, d: 1, ls: 0.5}, {b: 200, d: 1000, y: 25, e: {y: 6}}],
      [{b: -1, d: 1, ls: 0.5}, {b: 400, d: 1000, y: 45, e: {y: 6}}],
      [{b: -1, d: 1, ls: 0.5}, {b: 600, d: 1000, y: 65, e: {y: 6}}],
      [{b: -1, d: 1, ls: 0.5}, {b: 800, d: 1000, y: 85, e: {y: 6}}],
      [{b: -1, d: 1, ls: 0.5}, {b: 500, d: 1000, y: 195, e: {y: 6}}],
      [{b: 0, d: 2000, y: 30, e: {y: 3}}],
      [{b: -1, d: 1, rY: -15, tZ: 100}, {b: 0, d: 1500, y: 30, o: 1, e: {y: 3}}],
      [{b: -1, d: 1, rY: -15, tZ: -100}, {b: 0, d: 1500, y: 100, o: 0.8, e: {y: 3}}],
      [{b: 500, d: 1500, o: 1}],
      [{b: 0, d: 1000, y: 380, e: {y: 6}}],
      [{b: 300, d: 1000, x: 80, e: {x: 6}}],
      [{b: 300, d: 1000, x: 330, e: {x: 6}}],
      [{b: -1, d: 1, r: -110, sX: 5, sY: 5}, {b: 0, d: 2000, o: 1, r: -20, sX: 1, sY: 1, e: {o: 6, r: 6, sX: 6, sY: 6}}],
      [{b: 0, d: 600, x: 150, o: 0.5, e: {x: 6}}],
      [{b: 0, d: 600, x: 1140, o: 0.6, e: {x: 6}}],
      [{b: -1, d: 1, sX: 5, sY: 5}, {b: 600, d: 600, o: 1, sX: 1, sY: 1, e: {sX: 3, sY: 3}}]
    ];

    var jssor_9_options = {
      $AutoPlay: 1,
      $LazyLoading: 1,
      $CaptionSliderOptions: {
        $Class: $JssorCaptionSlideo$,
        $Transitions: jssor_9_SlideoTransitions
      },
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$,
        $SpacingX: 20,
        $SpacingY: 20
      }
    };

    var jssor_9_slider = new $JssorSlider$('jssor_9', jssor_9_options);
    var MAX_WIDTH = 1600;

    function ScaleSlider() {
      var containerElement = jssor_9_slider.$Elmt.parentNode;
      var containerWidth = containerElement.clientWidth;

      if (containerWidth) {

        var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

        jssor_9_slider.$ScaleWidth(expectedWidth);
      } else {
        window.setTimeout(ScaleSlider, 30);
      }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, 'load', ScaleSlider);
    $Jssor$.$AddEvent(window, 'resize', ScaleSlider);
    $Jssor$.$AddEvent(window, 'orientationchange', ScaleSlider);


  };

  jssor_10_slider_init = function () {

    var jssor_10_SlideshowTransitions = [
      {$Duration: 800, x: 0.25, $Zoom: 1.5, $Easing: {$Left: $Jease$.$InWave, $Zoom: $Jease$.$InCubic}, $Opacity: 2, $ZIndex: -10, $Brother: {$Duration: 800, x: -0.25, $Zoom: 1.5, $Easing: {$Left: $Jease$.$InWave, $Zoom: $Jease$.$InCubic}, $Opacity: 2, $ZIndex: -10}},
      {$Duration: 1200, x: 0.5, $Cols: 2, $ChessMode: {$Column: 3}, $Easing: {$Left: $Jease$.$InOutCubic}, $Opacity: 2, $Brother: {$Duration: 1200, $Opacity: 2}},
      {$Duration: 600, x: 0.3, $During: {$Left: [0.6, 0.4]}, $Easing: {$Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2, $Brother: {$Duration: 600, x: -0.3, $Easing: {$Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear}, $Opacity: 2}},
      {$Duration: 800, x: 0.25, y: 0.5, $Rotate: -0.1, $Easing: {$Left: $Jease$.$InQuad, $Top: $Jease$.$InQuad, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuad}, $Opacity: 2, $Brother: {$Duration: 800, x: -0.1, y: -0.7, $Rotate: 0.1, $Easing: {$Left: $Jease$.$InQuad, $Top: $Jease$.$InQuad, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuad}, $Opacity: 2}},
      {$Duration: 1000, x: 1, $Rows: 2, $ChessMode: {$Row: 3}, $Easing: {$Left: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear}, $Opacity: 2, $Brother: {$Duration: 1000, x: -1, $Rows: 2, $ChessMode: {$Row: 3}, $Easing: {$Left: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear}, $Opacity: 2}},
      {$Duration: 1000, y: -1, $Cols: 2, $ChessMode: {$Column: 12}, $Easing: {$Top: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear}, $Opacity: 2, $Brother: {$Duration: 1000, y: 1, $Cols: 2, $ChessMode: {$Column: 12}, $Easing: {$Top: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear}, $Opacity: 2}},
      {$Duration: 800, y: 1, $Easing: {$Top: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear}, $Opacity: 2, $Brother: {$Duration: 800, y: -1, $Easing: {$Top: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear}, $Opacity: 2}},
      {$Duration: 1000, x: -0.1, y: -0.7, $Rotate: 0.1, $During: {$Left: [0.6, 0.4], $Top: [0.6, 0.4], $Rotate: [0.6, 0.4]}, $Easing: {$Left: $Jease$.$InQuad, $Top: $Jease$.$InQuad, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuad}, $Opacity: 2, $Brother: {$Duration: 1000, x: 0.2, y: 0.5, $Rotate: -0.1, $Easing: {$Left: $Jease$.$InQuad, $Top: $Jease$.$InQuad, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuad}, $Opacity: 2}},
      {$Duration: 800, x: -0.2, $Delay: 40, $Cols: 12, $During: {$Left: [0.4, 0.6]}, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Assembly: 260, $Easing: {$Left: $Jease$.$InOutExpo, $Opacity: $Jease$.$InOutQuad}, $Opacity: 2, $Outside: true, $Round: {$Top: 0.5}, $Brother: {$Duration: 800, x: 0.2, $Delay: 40, $Cols: 12, $Formation: $JssorSlideshowFormations$.$FormationStraight, $Assembly: 1028, $Easing: {$Left: $Jease$.$InOutExpo, $Opacity: $Jease$.$InOutQuad}, $Opacity: 2, $Round: {$Top: 0.5}, $Shift: -200}},
      {$Duration: 700, $Opacity: 2, $Brother: {$Duration: 700, $Opacity: 2}},
      {$Duration: 800, x: 1, $Easing: {$Left: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear}, $Opacity: 2, $Brother: {$Duration: 800, x: -1, $Easing: {$Left: $Jease$.$InOutQuart, $Opacity: $Jease$.$Linear}, $Opacity: 2}}
    ];

    var jssor_10_options = {
      $AutoPlay: 1,
      $FillMode: 5,
      $SlideshowOptions: {
        $Class: $JssorSlideshowRunner$,
        $Transitions: jssor_10_SlideshowTransitions,
        $TransitionsOrder: 1
      },
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$,
        $SpacingX: 16,
        $SpacingY: 16
      }
    };

    var jssor_10_slider = new $JssorSlider$('jssor_10', jssor_10_options);
    var MAX_WIDTH = 600;

    function ScaleSlider() {
      var containerElement = jssor_10_slider.$Elmt.parentNode;
      var containerWidth = containerElement.clientWidth;

      if (containerWidth) {

        var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

        jssor_10_slider.$ScaleWidth(expectedWidth);
      } else {
        window.setTimeout(ScaleSlider, 30);
      }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, 'load', ScaleSlider);
    $Jssor$.$AddEvent(window, 'resize', ScaleSlider);
    $Jssor$.$AddEvent(window, 'orientationchange', ScaleSlider);

  };

  jssor_11_slider_init = function () {

    var jssor_11_options = {
      $Idle: 2000,
      $SlideEasing: $Jease$.$InOutSine,
      $DragOrientation: 3,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$,
        $SpacingX: 16,
        $SpacingY: 16
      }
    };

    var jssor_11_slider = new $JssorSlider$('jssor_11', jssor_11_options);

    // make sure to clear margin of the slider container element.
    jssor_11_slider.$Elmt.style.margin = '';


    var MAX_WIDTH = 3000;
    var MAX_HEIGHT = 3000;
    var MAX_BLEEDING = 1;

    function ScaleSlider() {
      var containerElement = jssor_11_slider.$Elmt.parentNode;
      var containerWidth = containerElement.clientWidth;

      if (containerWidth) {
        var originalWidth = jssor_11_slider.$OriginalWidth();
        var originalHeight = jssor_11_slider.$OriginalHeight();

        var containerHeight = containerElement.clientHeight || originalHeight;

        var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
        var expectedHeight = Math.min(MAX_HEIGHT || containerHeight, containerHeight);

        // scale the slider to expected size.
        jssor_11_slider.$ScaleSize(expectedWidth, expectedHeight, MAX_BLEEDING);

        // position slider at center in vertical orientation.
        jssor_11_slider.$Elmt.style.top = ((containerHeight - expectedHeight) / 2) + "px";

        // position slider at center in horizontal orientation.
        jssor_11_slider.$Elmt.style.left = ((containerWidth - expectedWidth) / 2) + "px";
      } else {
        window.setTimeout(ScaleSlider, 30);
      }
    }

    function OnOrientationChange() {
      ScaleSlider();
      window.setTimeout(ScaleSlider, 800);
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, 'load', ScaleSlider);
    $Jssor$.$AddEvent(window, 'resize', ScaleSlider);
    $Jssor$.$AddEvent(window, 'orientationchange', OnOrientationChange);

  };
})(jQuery);

jQuery(document).ready(function () {
  slider_tyle = drupalSettings.image_slider.slider_tyle;
  if (slider_tyle === 'image-gallery') {
    jssor_2_slider_init();
  }
  else if (slider_tyle === 'image-slider') {
    jssor_1_slider_init();
  }
  else if (slider_tyle === 'banner-rotator') {
    jssor_3_slider_init();
  }
  else if (slider_tyle === 'banner-slider') {
    jssor_4_slider_init();
  }
  else if (slider_tyle === 'carousel-slider') {
    jssor_5_slider_init();
  }
  else if (slider_tyle === 'nearby-image-partial-visible-slider') {
    jssor_6_slider_init();
  }
  else if (slider_tyle === 'image-gallery-with-vertical-thumbnail') {
    jssor_7_slider_init();
  }
  else if (slider_tyle === 'scrolling-logo-thumbnail-slider') {
    jssor_8_slider_init();
  }
  else if (slider_tyle === 'full-width-slider') {
    jssor_9_slider_init();
  }
  else if (slider_tyle === 'different-size-photo-slider') {
    jssor_10_slider_init();
  }
  else if (slider_tyle === 'full-window-for-pc') {
    jssor_11_slider_init();
  }
});
;
jQuery(document).ready(function($) {
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $(".to-top").addClass("show");
    } else {
      $(".to-top").removeClass("show");
    }
  });

  $(".to-top").click(function() {
    $("body,html").animate({scrollTop:0},800);
  });
});
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, debounce) {
  var liveElement;
  var announcements = [];
  Drupal.behaviors.drupalAnnounce = {
    attach: function attach(context) {
      if (!liveElement) {
        liveElement = document.createElement('div');
        liveElement.id = 'drupal-live-announce';
        liveElement.className = 'visually-hidden';
        liveElement.setAttribute('aria-live', 'polite');
        liveElement.setAttribute('aria-busy', 'false');
        document.body.appendChild(liveElement);
      }
    }
  };

  function announce() {
    var text = [];
    var priority = 'polite';
    var announcement;
    var il = announcements.length;

    for (var i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);

      if (announcement.priority === 'assertive') {
        priority = 'assertive';
      }
    }

    if (text.length) {
      liveElement.innerHTML = '';
      liveElement.setAttribute('aria-busy', 'true');
      liveElement.setAttribute('aria-live', priority);
      liveElement.innerHTML = text.join('\n');
      liveElement.setAttribute('aria-busy', 'false');
    }
  }

  Drupal.announce = function (text, priority) {
    announcements.push({
      text: text,
      priority: priority
    });
    return debounce(announce, 200)();
  };
})(Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  var offsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  function getRawOffset(el, edge) {
    var $el = $(el);
    var documentElement = document.documentElement;
    var displacement = 0;
    var horizontal = edge === 'left' || edge === 'right';
    var placement = $el.offset()[horizontal ? 'left' : 'top'];
    placement -= window["scroll".concat(horizontal ? 'X' : 'Y')] || document.documentElement["scroll".concat(horizontal ? 'Left' : 'Top')] || 0;

    switch (edge) {
      case 'top':
        displacement = placement + $el.outerHeight();
        break;

      case 'left':
        displacement = placement + $el.outerWidth();
        break;

      case 'bottom':
        displacement = documentElement.clientHeight - placement;
        break;

      case 'right':
        displacement = documentElement.clientWidth - placement;
        break;

      default:
        displacement = 0;
    }

    return displacement;
  }

  function calculateOffset(edge) {
    var edgeOffset = 0;
    var displacingElements = document.querySelectorAll("[data-offset-".concat(edge, "]"));
    var n = displacingElements.length;

    for (var i = 0; i < n; i++) {
      var el = displacingElements[i];

      if (el.style.display === 'none') {
        continue;
      }

      var displacement = parseInt(el.getAttribute("data-offset-".concat(edge)), 10);

      if (isNaN(displacement)) {
        displacement = getRawOffset(el, edge);
      }

      edgeOffset = Math.max(edgeOffset, displacement);
    }

    return edgeOffset;
  }

  function calculateOffsets() {
    return {
      top: calculateOffset('top'),
      right: calculateOffset('right'),
      bottom: calculateOffset('bottom'),
      left: calculateOffset('left')
    };
  }

  function displace(broadcast) {
    offsets = calculateOffsets();
    Drupal.displace.offsets = offsets;

    if (typeof broadcast === 'undefined' || broadcast) {
      $(document).trigger('drupalViewportOffsetChange', offsets);
    }

    return offsets;
  }

  Drupal.behaviors.drupalDisplace = {
    attach: function attach() {
      if (this.displaceProcessed) {
        return;
      }

      this.displaceProcessed = true;
      $(window).on('resize.drupalDisplace', debounce(displace, 200));
    }
  };
  Drupal.displace = displace;
  $.extend(Drupal.displace, {
    offsets: offsets,
    calculateOffset: calculateOffset
  });
})(jQuery, Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var activeItem = Drupal.url(drupalSettings.path.currentPath);

  $.fn.drupalToolbarMenu = function () {
    var ui = {
      handleOpen: Drupal.t('Extend'),
      handleClose: Drupal.t('Collapse')
    };

    function toggleList($item, switcher) {
      var $toggle = $item.children('.toolbar-box').children('.toolbar-handle');
      switcher = typeof switcher !== 'undefined' ? switcher : !$item.hasClass('open');
      $item.toggleClass('open', switcher);
      $toggle.toggleClass('open', switcher);
      $toggle.find('.action').text(switcher ? ui.handleClose : ui.handleOpen);
    }

    function toggleClickHandler(event) {
      var $toggle = $(event.target);
      var $item = $toggle.closest('li');
      toggleList($item);
      var $openItems = $item.siblings().filter('.open');
      toggleList($openItems, false);
    }

    function linkClickHandler(event) {
      if (!Drupal.toolbar.models.toolbarModel.get('isFixed')) {
        Drupal.toolbar.models.toolbarModel.set('activeTab', null);
      }

      event.stopPropagation();
    }

    function initItems($menu) {
      var options = {
        class: 'toolbar-icon toolbar-handle',
        action: ui.handleOpen,
        text: ''
      };
      $menu.find('li > a').wrap('<div class="toolbar-box">');
      $menu.find('li').each(function (index, element) {
        var $item = $(element);

        if ($item.children('ul.toolbar-menu').length) {
          var $box = $item.children('.toolbar-box');
          options.text = Drupal.t('@label', {
            '@label': $box.find('a').text()
          });
          $item.children('.toolbar-box').append(Drupal.theme('toolbarMenuItemToggle', options));
        }
      });
    }

    function markListLevels($lists, level) {
      level = !level ? 1 : level;
      var $lis = $lists.children('li').addClass("level-".concat(level));
      $lists = $lis.children('ul');

      if ($lists.length) {
        markListLevels($lists, level + 1);
      }
    }

    function openActiveItem($menu) {
      var pathItem = $menu.find("a[href=\"".concat(window.location.pathname, "\"]"));

      if (pathItem.length && !activeItem) {
        activeItem = window.location.pathname;
      }

      if (activeItem) {
        var $activeItem = $menu.find("a[href=\"".concat(activeItem, "\"]")).addClass('menu-item--active');
        var $activeTrail = $activeItem.parentsUntil('.root', 'li').addClass('menu-item--active-trail');
        toggleList($activeTrail, true);
      }
    }

    return this.each(function (selector) {
      var menu = once('toolbar-menu', this);

      if (menu.length) {
        var $menu = $(menu);
        $menu.on('click.toolbar', '.toolbar-box', toggleClickHandler).on('click.toolbar', '.toolbar-box a', linkClickHandler);
        $menu.addClass('root');
        initItems($menu);
        markListLevels($menu);
        openActiveItem($menu);
      }
    });
  };

  Drupal.theme.toolbarMenuItemToggle = function (options) {
    return "<button class=\"".concat(options.class, "\"><span class=\"action\">").concat(options.action, "</span> <span class=\"label\">").concat(options.text, "</span></button>");
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var options = $.extend({
    breakpoints: {
      'toolbar.narrow': '',
      'toolbar.standard': '',
      'toolbar.wide': ''
    }
  }, drupalSettings.toolbar, {
    strings: {
      horizontal: Drupal.t('Horizontal orientation'),
      vertical: Drupal.t('Vertical orientation')
    }
  });
  Drupal.behaviors.toolbar = {
    attach: function attach(context) {
      if (!window.matchMedia('only screen').matches) {
        return;
      }

      once('toolbar', '#toolbar-administration', context).forEach(function (toolbar) {
        var model = new Drupal.toolbar.ToolbarModel({
          locked: JSON.parse(localStorage.getItem('Drupal.toolbar.trayVerticalLocked')),
          activeTab: document.getElementById(JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID'))),
          height: $('#toolbar-administration').outerHeight()
        });
        Drupal.toolbar.models.toolbarModel = model;
        Object.keys(options.breakpoints).forEach(function (label) {
          var mq = options.breakpoints[label];
          var mql = window.matchMedia(mq);
          Drupal.toolbar.mql[label] = mql;
          mql.addListener(Drupal.toolbar.mediaQueryChangeHandler.bind(null, model, label));
          Drupal.toolbar.mediaQueryChangeHandler.call(null, model, label, mql);
        });
        Drupal.toolbar.views.toolbarVisualView = new Drupal.toolbar.ToolbarVisualView({
          el: toolbar,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.toolbarAuralView = new Drupal.toolbar.ToolbarAuralView({
          el: toolbar,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.bodyVisualView = new Drupal.toolbar.BodyVisualView({
          el: toolbar,
          model: model
        });
        model.trigger('change:isFixed', model, model.get('isFixed'));
        model.trigger('change:activeTray', model, model.get('activeTray'));
        var menuModel = new Drupal.toolbar.MenuModel();
        Drupal.toolbar.models.menuModel = menuModel;
        Drupal.toolbar.views.menuVisualView = new Drupal.toolbar.MenuVisualView({
          el: $(toolbar).find('.toolbar-menu-administration').get(0),
          model: menuModel,
          strings: options.strings
        });
        Drupal.toolbar.setSubtrees.done(function (subtrees) {
          menuModel.set('subtrees', subtrees);
          var theme = drupalSettings.ajaxPageState.theme;
          localStorage.setItem("Drupal.toolbar.subtrees.".concat(theme), JSON.stringify(subtrees));
          model.set('areSubtreesLoaded', true);
        });
        Drupal.toolbar.views.toolbarVisualView.loadSubtrees();
        $(document).on('drupalViewportOffsetChange.toolbar', function (event, offsets) {
          model.set('offsets', offsets);
        });
        model.on('change:orientation', function (model, orientation) {
          $(document).trigger('drupalToolbarOrientationChange', orientation);
        }).on('change:activeTab', function (model, tab) {
          $(document).trigger('drupalToolbarTabChange', tab);
        }).on('change:activeTray', function (model, tray) {
          $(document).trigger('drupalToolbarTrayChange', tray);
        });

        if (Drupal.toolbar.models.toolbarModel.get('orientation') === 'horizontal' && Drupal.toolbar.models.toolbarModel.get('activeTab') === null) {
          Drupal.toolbar.models.toolbarModel.set({
            activeTab: $('.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a').get(0)
          });
        }

        $(window).on({
          'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
            var $toolbar = $('#toolbar-bar');
            $toolbar.css('margin-top', '0');

            if (settings.drupalOffCanvasPosition === 'top') {
              var height = Drupal.offCanvas.getContainer($element).outerHeight();
              $toolbar.css('margin-top', "".concat(height, "px"));
              $element.on('dialogContentResize.off-canvas', function () {
                var newHeight = Drupal.offCanvas.getContainer($element).outerHeight();
                $toolbar.css('margin-top', "".concat(newHeight, "px"));
              });
            }
          },
          'dialog:beforeclose': function dialogBeforeclose() {
            $('#toolbar-bar').css('margin-top', '0');
          }
        });
      });
    }
  };
  Drupal.toolbar = {
    views: {},
    models: {},
    mql: {},
    setSubtrees: new $.Deferred(),
    mediaQueryChangeHandler: function mediaQueryChangeHandler(model, label, mql) {
      switch (label) {
        case 'toolbar.narrow':
          model.set({
            isOriented: mql.matches,
            isTrayToggleVisible: false
          });

          if (!mql.matches || !model.get('orientation')) {
            model.set({
              orientation: 'vertical'
            }, {
              validate: true
            });
          }

          break;

        case 'toolbar.standard':
          model.set({
            isFixed: mql.matches
          });
          break;

        case 'toolbar.wide':
          model.set({
            orientation: mql.matches && !model.get('locked') ? 'horizontal' : 'vertical'
          }, {
            validate: true
          });
          model.set({
            isTrayToggleVisible: mql.matches
          });
          break;

        default:
          break;
      }
    }
  };

  Drupal.theme.toolbarOrientationToggle = function () {
    return '<div class="toolbar-toggle-orientation"><div class="toolbar-lining">' + '<button class="toolbar-icon" type="button"></button>' + '</div></div>';
  };

  Drupal.AjaxCommands.prototype.setToolbarSubtrees = function (ajax, response, status) {
    Drupal.toolbar.setSubtrees.resolve(response.subtrees);
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.MenuModel = Backbone.Model.extend({
    defaults: {
      subtrees: {}
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarModel = Backbone.Model.extend({
    defaults: {
      activeTab: null,
      activeTray: null,
      isOriented: false,
      isFixed: false,
      areSubtreesLoaded: false,
      isViewportOverflowConstrained: false,
      orientation: 'horizontal',
      locked: false,
      isTrayToggleVisible: true,
      height: null,
      offsets: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    validate: function validate(attributes, options) {
      if (attributes.orientation === 'horizontal' && this.get('locked') && !options.override) {
        return Drupal.t('The toolbar cannot be set to a horizontal orientation when it is locked.');
      }
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone) {
  Drupal.toolbar.BodyVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:activeTray ', this.render);
      this.listenTo(this.model, 'change:isFixed change:isViewportOverflowConstrained', this.isToolbarFixed);
    },
    isToolbarFixed: function isToolbarFixed() {
      var isViewportOverflowConstrained = this.model.get('isViewportOverflowConstrained');
      $('body').toggleClass('toolbar-fixed', isViewportOverflowConstrained || this.model.get('isFixed'));
    },
    render: function render() {
      $('body').toggleClass('toolbar-tray-open', !!this.model.get('activeTray'));
    }
  });
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.toolbar.MenuVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:subtrees', this.render);
    },
    render: function render() {
      var _this = this;

      var subtrees = this.model.get('subtrees');
      Object.keys(subtrees || {}).forEach(function (id) {
        $(once('toolbar-subtrees', _this.$el.find("#toolbar-link-".concat(id)))).after(subtrees[id]);
      });

      if ('drupalToolbarMenu' in $.fn) {
        this.$el.children('.toolbar-menu').drupalToolbarMenu();
      }
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarAuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.strings = options.strings;
      this.listenTo(this.model, 'change:orientation', this.onOrientationChange);
      this.listenTo(this.model, 'change:activeTray', this.onActiveTrayChange);
    },
    onOrientationChange: function onOrientationChange(model, orientation) {
      Drupal.announce(Drupal.t('Tray orientation changed to @orientation.', {
        '@orientation': orientation
      }));
    },
    onActiveTrayChange: function onActiveTrayChange(model, tray) {
      var relevantTray = tray === null ? model.previous('activeTray') : tray;

      if (!relevantTray) {
        return;
      }

      var action = tray === null ? Drupal.t('closed') : Drupal.t('opened');
      var trayNameElement = relevantTray.querySelector('.toolbar-tray-name');
      var text;

      if (trayNameElement !== null) {
        text = Drupal.t('Tray "@tray" @action.', {
          '@tray': trayNameElement.textContent,
          '@action': action
        });
      } else {
        text = Drupal.t('Tray @action.', {
          '@action': action
        });
      }

      Drupal.announce(text);
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, Backbone) {
  Drupal.toolbar.ToolbarVisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        'click .toolbar-bar .toolbar-tab .trigger': 'onTabClick',
        'click .toolbar-toggle-orientation button': 'onOrientationToggleClick',
        'touchend .toolbar-bar .toolbar-tab .trigger': touchEndToClick,
        'touchend .toolbar-toggle-orientation button': touchEndToClick
      };
    },
    initialize: function initialize(options) {
      this.strings = options.strings;
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible', this.render);
      this.listenTo(this.model, 'change:mqMatches', this.onMediaQueryChange);
      this.listenTo(this.model, 'change:offsets', this.adjustPlacement);
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented', this.updateToolbarHeight);
      this.$el.find('.toolbar-tray .toolbar-lining').append(Drupal.theme('toolbarOrientationToggle'));
      this.model.trigger('change:activeTab');
    },
    updateToolbarHeight: function updateToolbarHeight() {
      var toolbarTabOuterHeight = $('#toolbar-bar').find('.toolbar-tab').outerHeight() || 0;
      var toolbarTrayHorizontalOuterHeight = $('.is-active.toolbar-tray-horizontal').outerHeight() || 0;
      this.model.set('height', toolbarTabOuterHeight + toolbarTrayHorizontalOuterHeight);
      $('body').css({
        'padding-top': this.model.get('height')
      });
      $('html').css({
        'scroll-padding-top': this.model.get('height')
      });
      this.triggerDisplace();
    },
    triggerDisplace: function triggerDisplace() {
      _.defer(function () {
        Drupal.displace(true);
      });
    },
    render: function render() {
      this.updateTabs();
      this.updateTrayOrientation();
      this.updateBarAttributes();
      $('body').removeClass('toolbar-loading');

      if (this.model.changed.orientation === 'vertical' || this.model.changed.activeTab) {
        this.loadSubtrees();
      }

      return this;
    },
    onTabClick: function onTabClick(event) {
      if (event.currentTarget.hasAttribute('data-toolbar-tray')) {
        var activeTab = this.model.get('activeTab');
        var clickedTab = event.currentTarget;
        this.model.set('activeTab', !activeTab || clickedTab !== activeTab ? clickedTab : null);
        event.preventDefault();
        event.stopPropagation();
      }
    },
    onOrientationToggleClick: function onOrientationToggleClick(event) {
      var orientation = this.model.get('orientation');
      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      var locked = antiOrientation === 'vertical';

      if (locked) {
        localStorage.setItem('Drupal.toolbar.trayVerticalLocked', 'true');
      } else {
        localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');
      }

      this.model.set({
        locked: locked,
        orientation: antiOrientation
      }, {
        validate: true,
        override: true
      });
      event.preventDefault();
      event.stopPropagation();
    },
    updateTabs: function updateTabs() {
      var $tab = $(this.model.get('activeTab'));
      $(this.model.previous('activeTab')).removeClass('is-active').prop('aria-pressed', false);
      $(this.model.previous('activeTray')).removeClass('is-active');

      if ($tab.length > 0) {
        $tab.addClass('is-active').prop('aria-pressed', true);
        var name = $tab.attr('data-toolbar-tray');
        var id = $tab.get(0).id;

        if (id) {
          localStorage.setItem('Drupal.toolbar.activeTabID', JSON.stringify(id));
        }

        var $tray = this.$el.find("[data-toolbar-tray=\"".concat(name, "\"].toolbar-tray"));

        if ($tray.length) {
          $tray.addClass('is-active');
          this.model.set('activeTray', $tray.get(0));
        } else {
          this.model.set('activeTray', null);
        }
      } else {
        this.model.set('activeTray', null);
        localStorage.removeItem('Drupal.toolbar.activeTabID');
      }
    },
    updateBarAttributes: function updateBarAttributes() {
      var isOriented = this.model.get('isOriented');

      if (isOriented) {
        this.$el.find('.toolbar-bar').attr('data-offset-top', '');
      } else {
        this.$el.find('.toolbar-bar').removeAttr('data-offset-top');
      }

      this.$el.toggleClass('toolbar-oriented', isOriented);
    },
    updateTrayOrientation: function updateTrayOrientation() {
      var orientation = this.model.get('orientation');
      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      $('body').toggleClass('toolbar-vertical', orientation === 'vertical').toggleClass('toolbar-horizontal', orientation === 'horizontal');
      var removeClass = antiOrientation === 'horizontal' ? 'toolbar-tray-horizontal' : 'toolbar-tray-vertical';
      var $trays = this.$el.find('.toolbar-tray').removeClass(removeClass).addClass("toolbar-tray-".concat(orientation));
      var iconClass = "toolbar-icon-toggle-".concat(orientation);
      var iconAntiClass = "toolbar-icon-toggle-".concat(antiOrientation);
      var $orientationToggle = this.$el.find('.toolbar-toggle-orientation').toggle(this.model.get('isTrayToggleVisible'));
      $orientationToggle.find('button').val(antiOrientation).attr('title', this.strings[antiOrientation]).text(this.strings[antiOrientation]).removeClass(iconClass).addClass(iconAntiClass);
      var dir = document.documentElement.dir;
      var edge = dir === 'rtl' ? 'right' : 'left';
      $trays.removeAttr('data-offset-left data-offset-right data-offset-top');
      $trays.filter('.toolbar-tray-vertical.is-active').attr("data-offset-".concat(edge), '');
      $trays.filter('.toolbar-tray-horizontal.is-active').attr('data-offset-top', '');
    },
    adjustPlacement: function adjustPlacement() {
      var $trays = this.$el.find('.toolbar-tray');

      if (!this.model.get('isOriented')) {
        $trays.removeClass('toolbar-tray-horizontal').addClass('toolbar-tray-vertical');
      }
    },
    loadSubtrees: function loadSubtrees() {
      var $activeTab = $(this.model.get('activeTab'));
      var orientation = this.model.get('orientation');

      if (!this.model.get('areSubtreesLoaded') && typeof $activeTab.data('drupal-subtrees') !== 'undefined' && orientation === 'vertical') {
        var subtreesHash = drupalSettings.toolbar.subtreesHash;
        var theme = drupalSettings.ajaxPageState.theme;
        var endpoint = Drupal.url("toolbar/subtrees/".concat(subtreesHash));
        var cachedSubtreesHash = localStorage.getItem("Drupal.toolbar.subtreesHash.".concat(theme));
        var cachedSubtrees = JSON.parse(localStorage.getItem("Drupal.toolbar.subtrees.".concat(theme)));
        var isVertical = this.model.get('orientation') === 'vertical';

        if (isVertical && subtreesHash === cachedSubtreesHash && cachedSubtrees) {
          Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);
        } else if (isVertical) {
          localStorage.removeItem("Drupal.toolbar.subtreesHash.".concat(theme));
          localStorage.removeItem("Drupal.toolbar.subtrees.".concat(theme));
          Drupal.ajax({
            url: endpoint
          }).execute();
          localStorage.setItem("Drupal.toolbar.subtreesHash.".concat(theme), subtreesHash);
        }
      }
    }
  });
})(jQuery, Drupal, drupalSettings, Backbone);;
/*! shepherd.js 8.3.1 */

'use strict';(function(G,ca){"object"===typeof exports&&"undefined"!==typeof module?module.exports=ca():"function"===typeof define&&define.amd?define(ca):(G="undefined"!==typeof globalThis?globalThis:G||self,G.Shepherd=ca())})(this,function(){function G(a,b){return!1!==b.clone&&b.isMergeableObject(a)?V(Array.isArray(a)?[]:{},a,b):a}function ca(a,b,c){return a.concat(b).map(function(a){return G(a,c)})}function tb(a){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(a).filter(function(b){return a.propertyIsEnumerable(b)}):
[]}function Ia(a){return Object.keys(a).concat(tb(a))}function Ja(a,b){try{return b in a}catch(c){return!1}}function ub(a,b,c){var d={};c.isMergeableObject(a)&&Ia(a).forEach(function(b){d[b]=G(a[b],c)});Ia(b).forEach(function(e){if(!Ja(a,e)||Object.hasOwnProperty.call(a,e)&&Object.propertyIsEnumerable.call(a,e))if(Ja(a,e)&&c.isMergeableObject(b[e])){if(c.customMerge){var f=c.customMerge(e);f="function"===typeof f?f:V}else f=V;d[e]=f(a[e],b[e],c)}else d[e]=G(b[e],c)});return d}function V(a,b,c){c=
c||{};c.arrayMerge=c.arrayMerge||ca;c.isMergeableObject=c.isMergeableObject||vb;c.cloneUnlessOtherwiseSpecified=G;var d=Array.isArray(b),e=Array.isArray(a);return d!==e?G(b,c):d?c.arrayMerge(a,b,c):ub(a,b,c)}function W(a){return"function"===typeof a}function da(a){return"string"===typeof a}function Ka(a){let b=Object.getOwnPropertyNames(a.constructor.prototype);for(let c=0;c<b.length;c++){let d=b[c],e=a[d];"constructor"!==d&&"function"===typeof e&&(a[d]=e.bind(a))}return a}function wb(a,b){return c=>
{if(b.isOpen()){let d=b.el&&c.currentTarget===b.el;(void 0!==a&&c.currentTarget.matches(a)||d)&&b.tour.next()}}}function xb(a){let {event:b,selector:c}=a.options.advanceOn||{};if(b){let d=wb(c,a),e;try{e=document.querySelector(c)}catch(f){}if(void 0===c||e)e?(e.addEventListener(b,d),a.on("destroy",()=>e.removeEventListener(b,d))):(document.body.addEventListener(b,d,!0),a.on("destroy",()=>document.body.removeEventListener(b,d,!0)));else return console.error(`No element was found for the selector supplied to advanceOn: ${c}`)}else return console.error("advanceOn was defined, but no event name was passed.")}
function B(a){return a?(a.nodeName||"").toLowerCase():null}function z(a){return null==a?window:"[object Window]"!==a.toString()?(a=a.ownerDocument)?a.defaultView||window:window:a}function ea(a){var b=z(a).Element;return a instanceof b||a instanceof Element}function y(a){var b=z(a).HTMLElement;return a instanceof b||a instanceof HTMLElement}function La(a){if("undefined"===typeof ShadowRoot)return!1;var b=z(a).ShadowRoot;return a instanceof b||a instanceof ShadowRoot}function F(a){return a.split("-")[0]}
function X(a){a=a.getBoundingClientRect();return{width:a.width,height:a.height,top:a.top,right:a.right,bottom:a.bottom,left:a.left,x:a.left,y:a.top}}function ta(a){var b=X(a),c=a.offsetWidth,d=a.offsetHeight;1>=Math.abs(b.width-c)&&(c=b.width);1>=Math.abs(b.height-d)&&(d=b.height);return{x:a.offsetLeft,y:a.offsetTop,width:c,height:d}}function Ma(a,b){var c=b.getRootNode&&b.getRootNode();if(a.contains(b))return!0;if(c&&La(c)){do{if(b&&a.isSameNode(b))return!0;b=b.parentNode||b.host}while(b)}return!1}
function H(a){return z(a).getComputedStyle(a)}function L(a){return((ea(a)?a.ownerDocument:a.document)||window.document).documentElement}function la(a){return"html"===B(a)?a:a.assignedSlot||a.parentNode||(La(a)?a.host:null)||L(a)}function Na(a){return y(a)&&"fixed"!==H(a).position?a.offsetParent:null}function fa(a){for(var b=z(a),c=Na(a);c&&0<=["table","td","th"].indexOf(B(c))&&"static"===H(c).position;)c=Na(c);if(c&&("html"===B(c)||"body"===B(c)&&"static"===H(c).position))return b;if(!c)a:{c=-1!==
navigator.userAgent.toLowerCase().indexOf("firefox");if(-1===navigator.userAgent.indexOf("Trident")||!y(a)||"fixed"!==H(a).position)for(a=la(a);y(a)&&0>["html","body"].indexOf(B(a));){var d=H(a);if("none"!==d.transform||"none"!==d.perspective||"paint"===d.contain||-1!==["transform","perspective"].indexOf(d.willChange)||c&&"filter"===d.willChange||c&&d.filter&&"none"!==d.filter){c=a;break a}else a=a.parentNode}c=null}return c||b}function ua(a){return 0<=["top","bottom"].indexOf(a)?"x":"y"}function Oa(a){return Object.assign({},
{top:0,right:0,bottom:0,left:0},a)}function Pa(a,b){return b.reduce(function(b,d){b[d]=a;return b},{})}function Qa(a){var b,c=a.popper,d=a.popperRect,e=a.placement,f=a.offsets,h=a.position,k=a.gpuAcceleration,m=a.adaptive;a=a.roundOffsets;if(!0===a){a=f.y;var g=window.devicePixelRatio||1;a={x:ma(ma(f.x*g)/g)||0,y:ma(ma(a*g)/g)||0}}else a="function"===typeof a?a(f):f;g=a;a=g.x;a=void 0===a?0:a;g=g.y;g=void 0===g?0:g;var l=f.hasOwnProperty("x");f=f.hasOwnProperty("y");var p="left",t="top",A=window;
if(m){var C=fa(c),u="clientHeight",D="clientWidth";C===z(c)&&(C=L(c),"static"!==H(C).position&&(u="scrollHeight",D="scrollWidth"));"top"===e&&(t="bottom",g-=C[u]-d.height,g*=k?1:-1);"left"===e&&(p="right",a-=C[D]-d.width,a*=k?1:-1)}c=Object.assign({position:h},m&&yb);if(k){var v;return Object.assign({},c,(v={},v[t]=f?"0":"",v[p]=l?"0":"",v.transform=2>(A.devicePixelRatio||1)?"translate("+a+"px, "+g+"px)":"translate3d("+a+"px, "+g+"px, 0)",v))}return Object.assign({},c,(b={},b[t]=f?g+"px":"",b[p]=
l?a+"px":"",b.transform="",b))}function na(a){return a.replace(/left|right|bottom|top/g,function(a){return zb[a]})}function Ra(a){return a.replace(/start|end/g,function(a){return Ab[a]})}function va(a){a=z(a);return{scrollLeft:a.pageXOffset,scrollTop:a.pageYOffset}}function wa(a){return X(L(a)).left+va(a).scrollLeft}function xa(a){a=H(a);return/auto|scroll|overlay|hidden/.test(a.overflow+a.overflowY+a.overflowX)}function Sa(a){return 0<=["html","body","#document"].indexOf(B(a))?a.ownerDocument.body:
y(a)&&xa(a)?a:Sa(la(a))}function ha(a,b){var c;void 0===b&&(b=[]);var d=Sa(a);a=d===(null==(c=a.ownerDocument)?void 0:c.body);c=z(d);d=a?[c].concat(c.visualViewport||[],xa(d)?d:[]):d;b=b.concat(d);return a?b:b.concat(ha(la(d)))}function ya(a){return Object.assign({},a,{left:a.x,top:a.y,right:a.x+a.width,bottom:a.y+a.height})}function Ta(a,b){if("viewport"===b){b=z(a);var c=L(a);b=b.visualViewport;var d=c.clientWidth;c=c.clientHeight;var e=0,f=0;b&&(d=b.width,c=b.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||
(e=b.offsetLeft,f=b.offsetTop));a={width:d,height:c,x:e+wa(a),y:f};a=ya(a)}else y(b)?(a=X(b),a.top+=b.clientTop,a.left+=b.clientLeft,a.bottom=a.top+b.clientHeight,a.right=a.left+b.clientWidth,a.width=b.clientWidth,a.height=b.clientHeight,a.x=a.left,a.y=a.top):(f=L(a),a=L(f),d=va(f),b=null==(c=f.ownerDocument)?void 0:c.body,c=E(a.scrollWidth,a.clientWidth,b?b.scrollWidth:0,b?b.clientWidth:0),e=E(a.scrollHeight,a.clientHeight,b?b.scrollHeight:0,b?b.clientHeight:0),f=-d.scrollLeft+wa(f),d=-d.scrollTop,
"rtl"===H(b||a).direction&&(f+=E(a.clientWidth,b?b.clientWidth:0)-c),a=ya({width:c,height:e,x:f,y:d}));return a}function Bb(a){var b=ha(la(a)),c=0<=["absolute","fixed"].indexOf(H(a).position)&&y(a)?fa(a):a;return ea(c)?b.filter(function(a){return ea(a)&&Ma(a,c)&&"body"!==B(a)}):[]}function Cb(a,b,c){b="clippingParents"===b?Bb(a):[].concat(b);c=[].concat(b,[c]);c=c.reduce(function(b,c){c=Ta(a,c);b.top=E(c.top,b.top);b.right=M(c.right,b.right);b.bottom=M(c.bottom,b.bottom);b.left=E(c.left,b.left);return b},
Ta(a,c[0]));c.width=c.right-c.left;c.height=c.bottom-c.top;c.x=c.left;c.y=c.top;return c}function Ua(a){var b=a.reference,c=a.element,d=(a=a.placement)?F(a):null;a=a?a.split("-")[1]:null;var e=b.x+b.width/2-c.width/2,f=b.y+b.height/2-c.height/2;switch(d){case "top":e={x:e,y:b.y-c.height};break;case "bottom":e={x:e,y:b.y+b.height};break;case "right":e={x:b.x+b.width,y:f};break;case "left":e={x:b.x-c.width,y:f};break;default:e={x:b.x,y:b.y}}d=d?ua(d):null;if(null!=d)switch(f="y"===d?"height":"width",
a){case "start":e[d]-=b[f]/2-c[f]/2;break;case "end":e[d]+=b[f]/2-c[f]/2}return e}function ia(a,b){void 0===b&&(b={});var c=b;b=c.placement;b=void 0===b?a.placement:b;var d=c.boundary,e=void 0===d?"clippingParents":d;d=c.rootBoundary;var f=void 0===d?"viewport":d;d=c.elementContext;d=void 0===d?"popper":d;var h=c.altBoundary,k=void 0===h?!1:h;c=c.padding;c=void 0===c?0:c;c=Oa("number"!==typeof c?c:Pa(c,ja));var m=a.elements.reference;h=a.rects.popper;k=a.elements[k?"popper"===d?"reference":"popper":
d];e=Cb(ea(k)?k:k.contextElement||L(a.elements.popper),e,f);f=X(m);k=Ua({reference:f,element:h,strategy:"absolute",placement:b});h=ya(Object.assign({},h,k));f="popper"===d?h:f;var g={top:e.top-f.top+c.top,bottom:f.bottom-e.bottom+c.bottom,left:e.left-f.left+c.left,right:f.right-e.right+c.right};a=a.modifiersData.offset;if("popper"===d&&a){var l=a[b];Object.keys(g).forEach(function(a){var b=0<=["right","bottom"].indexOf(a)?1:-1,c=0<=["top","bottom"].indexOf(a)?"y":"x";g[a]+=l[c]*b})}return g}function Db(a,
b){void 0===b&&(b={});var c=b.boundary,d=b.rootBoundary,e=b.padding,f=b.flipVariations,h=b.allowedAutoPlacements,k=void 0===h?Va:h,m=b.placement.split("-")[1];b=m?f?Wa:Wa.filter(function(a){return a.split("-")[1]===m}):ja;f=b.filter(function(a){return 0<=k.indexOf(a)});0===f.length&&(f=b);var g=f.reduce(function(b,f){b[f]=ia(a,{placement:f,boundary:c,rootBoundary:d,padding:e})[F(f)];return b},{});return Object.keys(g).sort(function(a,b){return g[a]-g[b]})}function Eb(a){if("auto"===F(a))return[];
var b=na(a);return[Ra(a),b,Ra(b)]}function Xa(a,b,c){void 0===c&&(c={x:0,y:0});return{top:a.top-b.height-c.y,right:a.right-b.width+c.x,bottom:a.bottom-b.height+c.y,left:a.left-b.width-c.x}}function Ya(a){return["top","right","bottom","left"].some(function(b){return 0<=a[b]})}function Fb(a,b,c){void 0===c&&(c=!1);var d=L(b);a=X(a);var e=y(b),f={scrollLeft:0,scrollTop:0},h={x:0,y:0};if(e||!e&&!c){if("body"!==B(b)||xa(d))f=b!==z(b)&&y(b)?{scrollLeft:b.scrollLeft,scrollTop:b.scrollTop}:va(b);y(b)?(h=
X(b),h.x+=b.clientLeft,h.y+=b.clientTop):d&&(h.x=wa(d))}return{x:a.left+f.scrollLeft-h.x,y:a.top+f.scrollTop-h.y,width:a.width,height:a.height}}function Gb(a){function b(a){d.add(a.name);[].concat(a.requires||[],a.requiresIfExists||[]).forEach(function(a){d.has(a)||(a=c.get(a))&&b(a)});e.push(a)}var c=new Map,d=new Set,e=[];a.forEach(function(a){c.set(a.name,a)});a.forEach(function(a){d.has(a.name)||b(a)});return e}function Hb(a){var b=Gb(a);return Ib.reduce(function(a,d){return a.concat(b.filter(function(a){return a.phase===
d}))},[])}function Jb(a){var b;return function(){b||(b=new Promise(function(c){Promise.resolve().then(function(){b=void 0;c(a())})}));return b}}function Kb(a){var b=a.reduce(function(a,b){var c=a[b.name];a[b.name]=c?Object.assign({},c,b,{options:Object.assign({},c.options,b.options),data:Object.assign({},c.data,b.data)}):b;return a},{});return Object.keys(b).map(function(a){return b[a]})}function Za(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return!b.some(function(a){return!(a&&
"function"===typeof a.getBoundingClientRect)})}function za(){za=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a};return za.apply(this,arguments)}function Lb(){return[{name:"applyStyles",fn({state:a}){Object.keys(a.elements).forEach(b=>{if("popper"===b){var c=a.attributes[b]||{},d=a.elements[b];Object.assign(d.style,{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)"});
Object.keys(c).forEach(a=>{let b=c[a];!1===b?d.removeAttribute(a):d.setAttribute(a,!0===b?"":b)})}})}},{name:"computeStyles",options:{adaptive:!1}}]}function Mb(a){let b=Lb(),c={placement:"top",strategy:"fixed",modifiers:[{name:"focusAfterRender",enabled:!0,phase:"afterWrite",fn(){setTimeout(()=>{a.el&&a.el.focus()},300)}}]};return c=za({},c,{modifiers:Array.from(new Set([...c.modifiers,...b]))})}function $a(a){return da(a)&&""!==a?"-"!==a.charAt(a.length-1)?`${a}-`:a:""}function Aa(a){a=a.options.attachTo||
{};let b=Object.assign({},a);if(da(a.element)){try{b.element=document.querySelector(a.element)}catch(c){}b.element||console.error(`The element for this Shepherd step was not found ${a.element}`)}return b}function Ba(){let a=Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,b=>{let c=(a+16*Math.random())%16|0;a=Math.floor(a/16);return("x"==b?c:c&3|8).toString(16)})}function Nb(a,b){let c={modifiers:[{name:"preventOverflow",options:{altAxis:!0,tether:!1}},{name:"focusAfterRender",
enabled:!0,phase:"afterWrite",fn(){setTimeout(()=>{b.el&&b.el.focus()},300)}}],strategy:"absolute"};b.isCentered()?c=Mb(b):c.placement=a.on;(a=b.tour&&b.tour.options&&b.tour.options.defaultStepOptions)&&(c=ab(a,c));return c=ab(b.options,c)}function ab(a,b){if(a.popperOptions){let c=Object.assign({},b,a.popperOptions);if(a.popperOptions.modifiers&&0<a.popperOptions.modifiers.length){let d=a.popperOptions.modifiers.map(a=>a.name);b=b.modifiers.filter(a=>!d.includes(a.name));c.modifiers=Array.from(new Set([...b,
...a.popperOptions.modifiers]))}return c}return b}function x(){}function Ob(a,b){for(let c in b)a[c]=b[c];return a}function Y(a){return a()}function bb(a){return"function"===typeof a}function I(a,b){return a!=a?b==b:a!==b||a&&"object"===typeof a||"function"===typeof a}function w(a){a.parentNode.removeChild(a)}function cb(a){return document.createElementNS("http://www.w3.org/2000/svg",a)}function oa(a,b,c,d){a.addEventListener(b,c,d);return()=>a.removeEventListener(b,c,d)}function q(a,b,c){null==c?
a.removeAttribute(b):a.getAttribute(b)!==c&&a.setAttribute(b,c)}function db(a,b){let c=Object.getOwnPropertyDescriptors(a.__proto__);for(let d in b)null==b[d]?a.removeAttribute(d):"style"===d?a.style.cssText=b[d]:"__value"===d?a.value=a[d]=b[d]:c[d]&&c[d].set?a[d]=b[d]:q(a,d,b[d])}function Z(a,b,c){a.classList[c?"add":"remove"](b)}function pa(){if(!P)throw Error("Function called outside component initialization");return P}function Ca(a){qa.push(a)}function eb(){if(!Da){Da=!0;do{for(var a=0;a<ka.length;a+=
1){var b=ka[a];P=b;b=b.$$;if(null!==b.fragment){b.update();b.before_update.forEach(Y);let a=b.dirty;b.dirty=[-1];b.fragment&&b.fragment.p(b.ctx,a);b.after_update.forEach(Ca)}}P=null;for(ka.length=0;aa.length;)aa.pop()();for(a=0;a<qa.length;a+=1)b=qa[a],Ea.has(b)||(Ea.add(b),b());qa.length=0}while(ka.length);for(;fb.length;)fb.pop()();Da=Fa=!1;Ea.clear()}}function Q(){R={r:0,c:[],p:R}}function S(){R.r||R.c.forEach(Y);R=R.p}function n(a,b){a&&a.i&&(ra.delete(a),a.i(b))}function r(a,b,c,d){a&&a.o&&!ra.has(a)&&
(ra.add(a),R.c.push(()=>{ra.delete(a);d&&(c&&a.d(1),d())}),a.o(b))}function T(a){a&&a.c()}function N(a,b,c,d){let {fragment:e,on_mount:f,on_destroy:h,after_update:k}=a.$$;e&&e.m(b,c);d||Ca(()=>{let b=f.map(Y).filter(bb);h?h.push(...b):b.forEach(Y);a.$$.on_mount=[]});k.forEach(Ca)}function O(a,b){a=a.$$;null!==a.fragment&&(a.on_destroy.forEach(Y),a.fragment&&a.fragment.d(b),a.on_destroy=a.fragment=null,a.ctx=[])}function J(a,b,c,d,e,f,h=[-1]){let k=P;P=a;let m=a.$$={fragment:null,ctx:null,props:f,
update:x,not_equal:e,bound:Object.create(null),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(k?k.$$.context:b.context||[]),callbacks:Object.create(null),dirty:h,skip_bound:!1},g=!1;m.ctx=c?c(a,b.props||{},(b,c,...d)=>{d=d.length?d[0]:c;if(m.ctx&&e(m.ctx[b],m.ctx[b]=d)){if(!m.skip_bound&&m.bound[b])m.bound[b](d);g&&(-1===a.$$.dirty[0]&&(ka.push(a),Fa||(Fa=!0,Pb.then(eb)),a.$$.dirty.fill(0)),a.$$.dirty[b/31|0]|=1<<b%31)}return c}):[];m.update();g=!0;m.before_update.forEach(Y);
m.fragment=d?d(m.ctx):!1;b.target&&(b.hydrate?(c=Array.from(b.target.childNodes),m.fragment&&m.fragment.l(c),c.forEach(w)):m.fragment&&m.fragment.c(),b.intro&&n(a.$$.fragment),N(a,b.target,b.anchor,b.customElement),eb());P=k}function Qb(a){let b,c,d,e,f;return{c(){b=document.createElement("button");q(b,"aria-label",c=a[3]?a[3]:null);q(b,"class",d=`${a[1]||""} shepherd-button ${a[4]?"shepherd-button-secondary":""}`);b.disabled=a[2];q(b,"tabindex","0")},m(c,d){c.insertBefore(b,d||null);b.innerHTML=
a[5];e||(f=oa(b,"click",function(){bb(a[0])&&a[0].apply(this,arguments)}),e=!0)},p(e,[f]){a=e;f&32&&(b.innerHTML=a[5]);f&8&&c!==(c=a[3]?a[3]:null)&&q(b,"aria-label",c);f&18&&d!==(d=`${a[1]||""} shepherd-button ${a[4]?"shepherd-button-secondary":""}`)&&q(b,"class",d);f&4&&(b.disabled=a[2])},i:x,o:x,d(a){a&&w(b);e=!1;f()}}}function Rb(a,b,c){let {config:d}=b,{step:e}=b,f,h,k,m,g,l;a.$$set=a=>{"config"in a&&c(6,d=a.config);"step"in a&&c(7,e=a.step)};a.$$.update=()=>{if(a.$$.dirty&192){c(0,f=d.action?
d.action.bind(e.tour):null);c(1,h=d.classes);if(d.disabled){var b=d.disabled;b=W(b)?b.call(e):b}else b=!1;c(2,k=b);c(3,m=d.label);c(4,g=d.secondary);c(5,l=d.text)}};return[f,h,k,m,g,l,d,e]}function gb(a,b,c){a=a.slice();a[2]=b[c];return a}function hb(a){let b,c,d=a[1],e=[];for(let b=0;b<d.length;b+=1)e[b]=ib(gb(a,d,b));let f=a=>r(e[a],1,1,()=>{e[a]=null});return{c(){for(let a=0;a<e.length;a+=1)e[a].c();b=document.createTextNode("")},m(a,d){for(let b=0;b<e.length;b+=1)e[b].m(a,d);a.insertBefore(b,
d||null);c=!0},p(a,c){if(c&3){d=a[1];let h;for(h=0;h<d.length;h+=1){let f=gb(a,d,h);e[h]?(e[h].p(f,c),n(e[h],1)):(e[h]=ib(f),e[h].c(),n(e[h],1),e[h].m(b.parentNode,b))}Q();for(h=d.length;h<e.length;h+=1)f(h);S()}},i(a){if(!c){for(a=0;a<d.length;a+=1)n(e[a]);c=!0}},o(a){e=e.filter(Boolean);for(a=0;a<e.length;a+=1)r(e[a]);c=!1},d(a){var c=e;for(let b=0;b<c.length;b+=1)c[b]&&c[b].d(a);a&&w(b)}}}function ib(a){let b,c;b=new Sb({props:{config:a[2],step:a[0]}});return{c(){T(b.$$.fragment)},m(a,e){N(b,a,
e);c=!0},p(a,c){let d={};c&2&&(d.config=a[2]);c&1&&(d.step=a[0]);b.$set(d)},i(a){c||(n(b.$$.fragment,a),c=!0)},o(a){r(b.$$.fragment,a);c=!1},d(a){O(b,a)}}}function Tb(a){let b,c,d=a[1]&&hb(a);return{c(){b=document.createElement("footer");d&&d.c();q(b,"class","shepherd-footer")},m(a,f){a.insertBefore(b,f||null);d&&d.m(b,null);c=!0},p(a,[c]){a[1]?d?(d.p(a,c),c&2&&n(d,1)):(d=hb(a),d.c(),n(d,1),d.m(b,null)):d&&(Q(),r(d,1,1,()=>{d=null}),S())},i(a){c||(n(d),c=!0)},o(a){r(d);c=!1},d(a){a&&w(b);d&&d.d()}}}
function Ub(a,b,c){let d,{step:e}=b;a.$$set=a=>{"step"in a&&c(0,e=a.step)};a.$$.update=()=>{a.$$.dirty&1&&c(1,d=e.options.buttons)};return[e,d]}function Vb(a){let b,c,d,e,f;return{c(){b=document.createElement("button");c=document.createElement("span");c.textContent="\u00d7";q(c,"aria-hidden","true");q(b,"aria-label",d=a[0].label?a[0].label:"Close Tour");q(b,"class","shepherd-cancel-icon");q(b,"type","button")},m(d,k){d.insertBefore(b,k||null);b.appendChild(c);e||(f=oa(b,"click",a[1]),e=!0)},p(a,[c]){c&
1&&d!==(d=a[0].label?a[0].label:"Close Tour")&&q(b,"aria-label",d)},i:x,o:x,d(a){a&&w(b);e=!1;f()}}}function Wb(a,b,c){let {cancelIcon:d}=b,{step:e}=b;a.$$set=a=>{"cancelIcon"in a&&c(0,d=a.cancelIcon);"step"in a&&c(2,e=a.step)};return[d,a=>{a.preventDefault();e.cancel()},e]}function Xb(a){let b;return{c(){b=document.createElement("h3");q(b,"id",a[1]);q(b,"class","shepherd-title")},m(c,d){c.insertBefore(b,d||null);a[3](b)},p(a,[d]){d&2&&q(b,"id",a[1])},i:x,o:x,d(c){c&&w(b);a[3](null)}}}function Yb(a,
b,c){let {labelId:d}=b,{element:e}=b,{title:f}=b;pa().$$.after_update.push(()=>{W(f)&&c(2,f=f());c(0,e.innerHTML=f,e)});a.$$set=a=>{"labelId"in a&&c(1,d=a.labelId);"element"in a&&c(0,e=a.element);"title"in a&&c(2,f=a.title)};return[e,d,f,function(a){aa[a?"unshift":"push"](()=>{e=a;c(0,e)})}]}function jb(a){let b,c;b=new Zb({props:{labelId:a[0],title:a[2]}});return{c(){T(b.$$.fragment)},m(a,e){N(b,a,e);c=!0},p(a,c){let d={};c&1&&(d.labelId=a[0]);c&4&&(d.title=a[2]);b.$set(d)},i(a){c||(n(b.$$.fragment,
a),c=!0)},o(a){r(b.$$.fragment,a);c=!1},d(a){O(b,a)}}}function kb(a){let b,c;b=new $b({props:{cancelIcon:a[3],step:a[1]}});return{c(){T(b.$$.fragment)},m(a,e){N(b,a,e);c=!0},p(a,c){let d={};c&8&&(d.cancelIcon=a[3]);c&2&&(d.step=a[1]);b.$set(d)},i(a){c||(n(b.$$.fragment,a),c=!0)},o(a){r(b.$$.fragment,a);c=!1},d(a){O(b,a)}}}function ac(a){let b,c,d,e=a[2]&&jb(a),f=a[3]&&a[3].enabled&&kb(a);return{c(){b=document.createElement("header");e&&e.c();c=document.createTextNode(" ");f&&f.c();q(b,"class","shepherd-header")},
m(a,k){a.insertBefore(b,k||null);e&&e.m(b,null);b.appendChild(c);f&&f.m(b,null);d=!0},p(a,[d]){a[2]?e?(e.p(a,d),d&4&&n(e,1)):(e=jb(a),e.c(),n(e,1),e.m(b,c)):e&&(Q(),r(e,1,1,()=>{e=null}),S());a[3]&&a[3].enabled?f?(f.p(a,d),d&8&&n(f,1)):(f=kb(a),f.c(),n(f,1),f.m(b,null)):f&&(Q(),r(f,1,1,()=>{f=null}),S())},i(a){d||(n(e),n(f),d=!0)},o(a){r(e);r(f);d=!1},d(a){a&&w(b);e&&e.d();f&&f.d()}}}function bc(a,b,c){let {labelId:d}=b,{step:e}=b,f,h;a.$$set=a=>{"labelId"in a&&c(0,d=a.labelId);"step"in a&&c(1,e=
a.step)};a.$$.update=()=>{a.$$.dirty&2&&(c(2,f=e.options.title),c(3,h=e.options.cancelIcon))};return[d,e,f,h]}function cc(a){let b;return{c(){b=document.createElement("div");q(b,"class","shepherd-text");q(b,"id",a[1])},m(c,d){c.insertBefore(b,d||null);a[3](b)},p(a,[d]){d&2&&q(b,"id",a[1])},i:x,o:x,d(c){c&&w(b);a[3](null)}}}function dc(a,b,c){let {descriptionId:d}=b,{element:e}=b,{step:f}=b;pa().$$.after_update.push(()=>{let {text:a}=f.options;W(a)&&(a=a.call(f));a instanceof HTMLElement?e.appendChild(a):
c(0,e.innerHTML=a,e)});a.$$set=a=>{"descriptionId"in a&&c(1,d=a.descriptionId);"element"in a&&c(0,e=a.element);"step"in a&&c(2,f=a.step)};return[e,d,f,function(a){aa[a?"unshift":"push"](()=>{e=a;c(0,e)})}]}function lb(a){let b,c;b=new ec({props:{labelId:a[1],step:a[2]}});return{c(){T(b.$$.fragment)},m(a,e){N(b,a,e);c=!0},p(a,c){let d={};c&2&&(d.labelId=a[1]);c&4&&(d.step=a[2]);b.$set(d)},i(a){c||(n(b.$$.fragment,a),c=!0)},o(a){r(b.$$.fragment,a);c=!1},d(a){O(b,a)}}}function mb(a){let b,c;b=new fc({props:{descriptionId:a[0],
step:a[2]}});return{c(){T(b.$$.fragment)},m(a,e){N(b,a,e);c=!0},p(a,c){let d={};c&1&&(d.descriptionId=a[0]);c&4&&(d.step=a[2]);b.$set(d)},i(a){c||(n(b.$$.fragment,a),c=!0)},o(a){r(b.$$.fragment,a);c=!1},d(a){O(b,a)}}}function nb(a){let b,c;b=new gc({props:{step:a[2]}});return{c(){T(b.$$.fragment)},m(a,e){N(b,a,e);c=!0},p(a,c){let d={};c&4&&(d.step=a[2]);b.$set(d)},i(a){c||(n(b.$$.fragment,a),c=!0)},o(a){r(b.$$.fragment,a);c=!1},d(a){O(b,a)}}}function hc(a){let b,c=void 0!==a[2].options.title||a[2].options.cancelIcon&&
a[2].options.cancelIcon.enabled,d,e=void 0!==a[2].options.text,f,h=Array.isArray(a[2].options.buttons)&&a[2].options.buttons.length,k,m=c&&lb(a),g=e&&mb(a),l=h&&nb(a);return{c(){b=document.createElement("div");m&&m.c();d=document.createTextNode(" ");g&&g.c();f=document.createTextNode(" ");l&&l.c();q(b,"class","shepherd-content")},m(a,c){a.insertBefore(b,c||null);m&&m.m(b,null);b.appendChild(d);g&&g.m(b,null);b.appendChild(f);l&&l.m(b,null);k=!0},p(a,[k]){k&4&&(c=void 0!==a[2].options.title||a[2].options.cancelIcon&&
a[2].options.cancelIcon.enabled);c?m?(m.p(a,k),k&4&&n(m,1)):(m=lb(a),m.c(),n(m,1),m.m(b,d)):m&&(Q(),r(m,1,1,()=>{m=null}),S());k&4&&(e=void 0!==a[2].options.text);e?g?(g.p(a,k),k&4&&n(g,1)):(g=mb(a),g.c(),n(g,1),g.m(b,f)):g&&(Q(),r(g,1,1,()=>{g=null}),S());k&4&&(h=Array.isArray(a[2].options.buttons)&&a[2].options.buttons.length);h?l?(l.p(a,k),k&4&&n(l,1)):(l=nb(a),l.c(),n(l,1),l.m(b,null)):l&&(Q(),r(l,1,1,()=>{l=null}),S())},i(a){k||(n(m),n(g),n(l),k=!0)},o(a){r(m);r(g);r(l);k=!1},d(a){a&&w(b);m&&
m.d();g&&g.d();l&&l.d()}}}function ic(a,b,c){let {descriptionId:d}=b,{labelId:e}=b,{step:f}=b;a.$$set=a=>{"descriptionId"in a&&c(0,d=a.descriptionId);"labelId"in a&&c(1,e=a.labelId);"step"in a&&c(2,f=a.step)};return[d,e,f]}function ob(a){let b;return{c(){b=document.createElement("div");q(b,"class","shepherd-arrow");q(b,"data-popper-arrow","")},m(a,d){a.insertBefore(b,d||null)},d(a){a&&w(b)}}}function jc(a){let b,c,d,e,f,h,k,m,g=a[4].options.arrow&&a[4].options.attachTo&&a[4].options.attachTo.element&&
a[4].options.attachTo.on&&ob();d=new kc({props:{descriptionId:a[2],labelId:a[3],step:a[4]}});let l=[{"aria-describedby":e=void 0!==a[4].options.text?a[2]:null},{"aria-labelledby":f=a[4].options.title?a[3]:null},a[1],{role:"dialog"},{tabindex:"0"}],p={};for(let a=0;a<l.length;a+=1)p=Ob(p,l[a]);return{c(){b=document.createElement("div");g&&g.c();c=document.createTextNode(" ");T(d.$$.fragment);db(b,p);Z(b,"shepherd-has-cancel-icon",a[5]);Z(b,"shepherd-has-title",a[6]);Z(b,"shepherd-element",!0)},m(e,
f){e.insertBefore(b,f||null);g&&g.m(b,null);b.appendChild(c);N(d,b,null);a[13](b);h=!0;k||(m=oa(b,"keydown",a[7]),k=!0)},p(a,[k]){a[4].options.arrow&&a[4].options.attachTo&&a[4].options.attachTo.element&&a[4].options.attachTo.on?g||(g=ob(),g.c(),g.m(b,c)):g&&(g.d(1),g=null);var m={};k&4&&(m.descriptionId=a[2]);k&8&&(m.labelId=a[3]);k&16&&(m.step=a[4]);d.$set(m);m=b;{k=[(!h||k&20&&e!==(e=void 0!==a[4].options.text?a[2]:null))&&{"aria-describedby":e},(!h||k&24&&f!==(f=a[4].options.title?a[3]:null))&&
{"aria-labelledby":f},k&2&&a[1],{role:"dialog"},{tabindex:"0"}];let b={},c={},d={$$scope:1},g=l.length;for(;g--;){let a=l[g],e=k[g];if(e){for(u in a)u in e||(c[u]=1);for(let a in e)d[a]||(b[a]=e[a],d[a]=1);l[g]=e}else for(let b in a)d[b]=1}for(let a in c)a in b||(b[a]=void 0);var u=b}db(m,p=u);Z(b,"shepherd-has-cancel-icon",a[5]);Z(b,"shepherd-has-title",a[6]);Z(b,"shepherd-element",!0)},i(a){h||(n(d.$$.fragment,a),h=!0)},o(a){r(d.$$.fragment,a);h=!1},d(c){c&&w(b);g&&g.d();O(d);a[13](null);k=!1;m()}}}
function pb(a){return a.split(" ").filter(a=>!!a.length)}function lc(a,b,c){let {classPrefix:d}=b,{element:e}=b,{descriptionId:f}=b,{firstFocusableElement:h}=b,{focusableElements:k}=b,{labelId:m}=b,{lastFocusableElement:g}=b,{step:l}=b,{dataStepId:p}=b,t,A,C;pa().$$.on_mount.push(()=>{c(1,p={[`data-${d}shepherd-step-id`]:l.id});c(9,k=e.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'));c(8,h=k[0]);
c(10,g=k[k.length-1])});pa().$$.after_update.push(()=>{if(C!==l.options.classes){var a=C;da(a)&&(a=pb(a),a.length&&e.classList.remove(...a));a=C=l.options.classes;da(a)&&(a=pb(a),a.length&&e.classList.add(...a))}});a.$$set=a=>{"classPrefix"in a&&c(11,d=a.classPrefix);"element"in a&&c(0,e=a.element);"descriptionId"in a&&c(2,f=a.descriptionId);"firstFocusableElement"in a&&c(8,h=a.firstFocusableElement);"focusableElements"in a&&c(9,k=a.focusableElements);"labelId"in a&&c(3,m=a.labelId);"lastFocusableElement"in
a&&c(10,g=a.lastFocusableElement);"step"in a&&c(4,l=a.step);"dataStepId"in a&&c(1,p=a.dataStepId)};a.$$.update=()=>{a.$$.dirty&16&&(c(5,t=l.options&&l.options.cancelIcon&&l.options.cancelIcon.enabled),c(6,A=l.options&&l.options.title))};return[e,p,f,m,l,t,A,a=>{const {tour:b}=l;switch(a.keyCode){case 9:if(0===k.length){a.preventDefault();break}if(a.shiftKey){if(document.activeElement===h||document.activeElement.classList.contains("shepherd-element"))a.preventDefault(),g.focus()}else document.activeElement===
g&&(a.preventDefault(),h.focus());break;case 27:b.options.exitOnEsc&&l.cancel();break;case 37:b.options.keyboardNavigation&&b.back();break;case 39:b.options.keyboardNavigation&&b.next()}},h,k,g,d,()=>e,function(a){aa[a?"unshift":"push"](()=>{e=a;c(0,e)})}]}function mc(a){a&&({steps:a}=a,a.forEach(a=>{a.options&&!1===a.options.canClickTarget&&a.options.attachTo&&a.target instanceof HTMLElement&&a.target.classList.remove("shepherd-target-click-disabled")}))}function nc({width:a,height:b,x:c=0,y:d=0,
r:e=0}){let {innerWidth:f,innerHeight:h}=window;return`M${f},${h}\
H0\
V0\
H${f}\
V${h}\
Z\
M${c+e},${d}\
a${e},${e},0,0,0-${e},${e}\
V${b+d-e}\
a${e},${e},0,0,0,${e},${e}\
H${a+c-e}\
a${e},${e},0,0,0,${e}-${e}\
V${d+e}\
a${e},${e},0,0,0-${e}-${e}\
Z`}function oc(a){let b,c,d,e,f;return{c(){b=cb("svg");c=cb("path");q(c,"d",a[2]);q(b,"class",d=`${a[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)},m(d,k){d.insertBefore(b,k||null);b.appendChild(c);a[11](b);e||(f=oa(b,"touchmove",a[3]),e=!0)},p(a,[e]){e&4&&q(c,"d",a[2]);e&2&&d!==(d=`${a[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)&&q(b,"class",d)},i:x,o:x,d(c){c&&w(b);a[11](null);e=!1;f()}}}function qb(a){if(!a)return null;let b=a instanceof HTMLElement&&
window.getComputedStyle(a).overflowY;return"hidden"!==b&&"visible"!==b&&a.scrollHeight>=a.clientHeight?a:qb(a.parentElement)}function pc(a,b,c){function d(){c(4,l={width:0,height:0,x:0,y:0,r:0})}function e(){c(1,p=!1);k()}function f(a=0,b=0,e,f){if(f){var g=f.getBoundingClientRect();var u=g.y||g.top;g=g.bottom||u+g.height;if(e){var h=e.getBoundingClientRect();e=h.y||h.top;h=h.bottom||e+h.height;u=Math.max(u,e);g=Math.min(g,h)}u={y:u,height:Math.max(g-u,0)};let {y:d,height:k}=u,{x:m,width:p,left:A}=
f.getBoundingClientRect();c(4,l={width:p+2*a,height:k+2*a,x:(m||A)-a,y:d-a,r:b})}else d()}function h(){c(1,p=!0)}function k(){t&&(cancelAnimationFrame(t),t=void 0);window.removeEventListener("touchmove",C,{passive:!1})}function m(a){let {modalOverlayOpeningPadding:b,modalOverlayOpeningRadius:c}=a.options,d=qb(a.target),e=()=>{t=void 0;f(b,c,d,a.target);t=requestAnimationFrame(e)};e();window.addEventListener("touchmove",C,{passive:!1})}let {element:g}=b,{openingProperties:l}=b;Ba();let p=!1,t=void 0,
A;d();let C=a=>{a.preventDefault()};a.$$set=a=>{"element"in a&&c(0,g=a.element);"openingProperties"in a&&c(4,l=a.openingProperties)};a.$$.update=()=>{a.$$.dirty&16&&c(2,A=nc(l))};return[g,p,A,a=>{a.stopPropagation()},l,()=>g,d,e,f,function(a){k();a.tour.options.useModalOverlay?(m(a),h()):e()},h,function(a){aa[a?"unshift":"push"](()=>{g=a;c(0,g)})}]}var vb=function(a){var b;if(b=!!a&&"object"===typeof a)b=Object.prototype.toString.call(a),b=!("[object RegExp]"===b||"[object Date]"===b||a.$$typeof===
qc);return b},qc="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;V.all=function(a,b){if(!Array.isArray(a))throw Error("first argument should be an array");return a.reduce(function(a,d){return V(a,d,b)},{})};var rc=V;class Ga{on(a,b,c,d=!1){void 0===this.bindings&&(this.bindings={});void 0===this.bindings[a]&&(this.bindings[a]=[]);this.bindings[a].push({handler:b,ctx:c,once:d});return this}once(a,b,c){return this.on(a,b,c,!0)}off(a,b){if(void 0===this.bindings||void 0===this.bindings[a])return this;
void 0===b?delete this.bindings[a]:this.bindings[a].forEach((c,d)=>{c.handler===b&&this.bindings[a].splice(d,1)});return this}trigger(a,...b){void 0!==this.bindings&&this.bindings[a]&&this.bindings[a].forEach((c,d)=>{let {ctx:e,handler:f,once:h}=c;f.apply(e||this,b);h&&this.bindings[a].splice(d,1)});return this}}var ja=["top","bottom","right","left"],Wa=ja.reduce(function(a,b){return a.concat([b+"-start",b+"-end"])},[]),Va=[].concat(ja,["auto"]).reduce(function(a,b){return a.concat([b,b+"-start",
b+"-end"])},[]),Ib="beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),E=Math.max,M=Math.min,ma=Math.round,yb={top:"auto",right:"auto",bottom:"auto",left:"auto"},sa={passive:!0},zb={left:"right",right:"left",bottom:"top",top:"bottom"},Ab={start:"end",end:"start"},rb={placement:"bottom",modifiers:[],strategy:"absolute"},sc=function(a){void 0===a&&(a={});var b=a.defaultModifiers,c=void 0===b?[]:b;a=a.defaultOptions;var d=void 0===a?rb:a;return function(a,b,
h){function e(){g.orderedModifiers.forEach(function(a){var b=a.name,c=a.options;c=void 0===c?{}:c;a=a.effect;"function"===typeof a&&(b=a({state:g,name:b,instance:t,options:c}),l.push(b||function(){}))})}function f(){l.forEach(function(a){return a()});l=[]}void 0===h&&(h=d);var g={placement:"bottom",orderedModifiers:[],options:Object.assign({},rb,d),modifiersData:{},elements:{reference:a,popper:b},attributes:{},styles:{}},l=[],p=!1,t={state:g,setOptions:function(h){f();g.options=Object.assign({},d,
g.options,h);g.scrollParents={reference:ea(a)?ha(a):a.contextElement?ha(a.contextElement):[],popper:ha(b)};h=Hb(Kb([].concat(c,g.options.modifiers)));g.orderedModifiers=h.filter(function(a){return a.enabled});e();return t.update()},forceUpdate:function(){if(!p){var a=g.elements,b=a.reference;a=a.popper;if(Za(b,a))for(g.rects={reference:Fb(b,fa(a),"fixed"===g.options.strategy),popper:ta(a)},g.reset=!1,g.placement=g.options.placement,g.orderedModifiers.forEach(function(a){return g.modifiersData[a.name]=
Object.assign({},a.data)}),b=0;b<g.orderedModifiers.length;b++)if(!0===g.reset)g.reset=!1,b=-1;else{var c=g.orderedModifiers[b];a=c.fn;var d=c.options;d=void 0===d?{}:d;c=c.name;"function"===typeof a&&(g=a({state:g,options:d,name:c,instance:t})||g)}}},update:Jb(function(){return new Promise(function(a){t.forceUpdate();a(g)})}),destroy:function(){f();p=!0}};if(!Za(a,b))return t;t.setOptions(h).then(function(a){if(!p&&h.onFirstUpdate)h.onFirstUpdate(a)});return t}}({defaultModifiers:[{name:"eventListeners",
enabled:!0,phase:"write",fn:function(){},effect:function(a){var b=a.state,c=a.instance;a=a.options;var d=a.scroll,e=void 0===d?!0:d;a=a.resize;var f=void 0===a?!0:a,h=z(b.elements.popper),k=[].concat(b.scrollParents.reference,b.scrollParents.popper);e&&k.forEach(function(a){a.addEventListener("scroll",c.update,sa)});f&&h.addEventListener("resize",c.update,sa);return function(){e&&k.forEach(function(a){a.removeEventListener("scroll",c.update,sa)});f&&h.removeEventListener("resize",c.update,sa)}},data:{}},
{name:"popperOffsets",enabled:!0,phase:"read",fn:function(a){var b=a.state;b.modifiersData[a.name]=Ua({reference:b.rects.reference,element:b.rects.popper,strategy:"absolute",placement:b.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(a){var b=a.state,c=a.options;a=c.gpuAcceleration;a=void 0===a?!0:a;var d=c.adaptive;d=void 0===d?!0:d;c=c.roundOffsets;c=void 0===c?!0:c;a={placement:F(b.placement),popper:b.elements.popper,popperRect:b.rects.popper,gpuAcceleration:a};
null!=b.modifiersData.popperOffsets&&(b.styles.popper=Object.assign({},b.styles.popper,Qa(Object.assign({},a,{offsets:b.modifiersData.popperOffsets,position:b.options.strategy,adaptive:d,roundOffsets:c}))));null!=b.modifiersData.arrow&&(b.styles.arrow=Object.assign({},b.styles.arrow,Qa(Object.assign({},a,{offsets:b.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c}))));b.attributes.popper=Object.assign({},b.attributes.popper,{"data-popper-placement":b.placement})},data:{}},{name:"applyStyles",
enabled:!0,phase:"write",fn:function(a){var b=a.state;Object.keys(b.elements).forEach(function(a){var c=b.styles[a]||{},e=b.attributes[a]||{},f=b.elements[a];y(f)&&B(f)&&(Object.assign(f.style,c),Object.keys(e).forEach(function(a){var b=e[a];!1===b?f.removeAttribute(a):f.setAttribute(a,!0===b?"":b)}))})},effect:function(a){var b=a.state,c={popper:{position:b.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(b.elements.popper.style,c.popper);b.styles=
c;b.elements.arrow&&Object.assign(b.elements.arrow.style,c.arrow);return function(){Object.keys(b.elements).forEach(function(a){var d=b.elements[a],f=b.attributes[a]||{};a=Object.keys(b.styles.hasOwnProperty(a)?b.styles[a]:c[a]).reduce(function(a,b){a[b]="";return a},{});y(d)&&B(d)&&(Object.assign(d.style,a),Object.keys(f).forEach(function(a){d.removeAttribute(a)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(a){var b=a.state,c=a.name;
a=a.options.offset;var d=void 0===a?[0,0]:a;a=Va.reduce(function(a,c){var e=b.rects;var f=F(c);var h=0<=["left","top"].indexOf(f)?-1:1,k="function"===typeof d?d(Object.assign({},e,{placement:c})):d;e=k[0];k=k[1];e=e||0;k=(k||0)*h;f=0<=["left","right"].indexOf(f)?{x:k,y:e}:{x:e,y:k};a[c]=f;return a},{});var e=a[b.placement],f=e.x;e=e.y;null!=b.modifiersData.popperOffsets&&(b.modifiersData.popperOffsets.x+=f,b.modifiersData.popperOffsets.y+=e);b.modifiersData[c]=a}},{name:"flip",enabled:!0,phase:"main",
fn:function(a){var b=a.state,c=a.options;a=a.name;if(!b.modifiersData[a]._skip){var d=c.mainAxis;d=void 0===d?!0:d;var e=c.altAxis;e=void 0===e?!0:e;var f=c.fallbackPlacements,h=c.padding,k=c.boundary,m=c.rootBoundary,g=c.altBoundary,l=c.flipVariations,p=void 0===l?!0:l,t=c.allowedAutoPlacements;c=b.options.placement;l=F(c);f=f||(l!==c&&p?Eb(c):[na(c)]);var A=[c].concat(f).reduce(function(a,c){return a.concat("auto"===F(c)?Db(b,{placement:c,boundary:k,rootBoundary:m,padding:h,flipVariations:p,allowedAutoPlacements:t}):
c)},[]);c=b.rects.reference;f=b.rects.popper;var n=new Map;l=!0;for(var u=A[0],D=0;D<A.length;D++){var v=A[D],q=F(v),r="start"===v.split("-")[1],U=0<=["top","bottom"].indexOf(q),x=U?"width":"height",w=ia(b,{placement:v,boundary:k,rootBoundary:m,altBoundary:g,padding:h});r=U?r?"right":"left":r?"bottom":"top";c[x]>f[x]&&(r=na(r));x=na(r);U=[];d&&U.push(0>=w[q]);e&&U.push(0>=w[r],0>=w[x]);if(U.every(function(a){return a})){u=v;l=!1;break}n.set(v,U)}if(l)for(d=function(a){var b=A.find(function(b){if(b=
n.get(b))return b.slice(0,a).every(function(a){return a})});if(b)return u=b,"break"},e=p?3:1;0<e&&"break"!==d(e);e--);b.placement!==u&&(b.modifiersData[a]._skip=!0,b.placement=u,b.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(a){var b=a.state,c=a.options;a=a.name;var d=c.mainAxis,e=void 0===d?!0:d;d=c.altAxis;var f=void 0===d?!1:d;d=c.tether;d=void 0===d?!0:d;var h=c.tetherOffset,k=void 0===h?0:h,m=ia(b,{boundary:c.boundary,rootBoundary:c.rootBoundary,
padding:c.padding,altBoundary:c.altBoundary});c=F(b.placement);var g=b.placement.split("-")[1],l=!g,p=ua(c);c="x"===p?"y":"x";h=b.modifiersData.popperOffsets;var t=b.rects.reference,n=b.rects.popper,q="function"===typeof k?k(Object.assign({},b.rects,{placement:b.placement})):k;k={x:0,y:0};if(h){if(e||f){var u="y"===p?"top":"left",D="y"===p?"bottom":"right",v="y"===p?"height":"width",r=h[p],x=h[p]+m[u],w=h[p]-m[D],z=d?-n[v]/2:0,y="start"===g?t[v]:n[v];g="start"===g?-n[v]:-t[v];n=b.elements.arrow;n=
d&&n?ta(n):{width:0,height:0};var B=b.modifiersData["arrow#persistent"]?b.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0};u=B[u];D=B[D];n=E(0,M(t[v],n[v]));y=l?t[v]/2-z-n-u-q:y-n-u-q;t=l?-t[v]/2+z+n+D+q:g+n+D+q;l=b.elements.arrow&&fa(b.elements.arrow);q=b.modifiersData.offset?b.modifiersData.offset[b.placement][p]:0;l=h[p]+y-q-(l?"y"===p?l.clientTop||0:l.clientLeft||0:0);t=h[p]+t-q;e&&(e=d?M(x,l):x,w=d?E(w,t):w,e=E(e,M(r,w)),h[p]=e,k[p]=e-r);f&&(f=h[c],e=f+m["x"===p?"top":
"left"],m=f-m["x"===p?"bottom":"right"],e=d?M(e,l):e,d=d?E(m,t):m,d=E(e,M(f,d)),h[c]=d,k[c]=d-f)}b.modifiersData[a]=k}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(a){var b,c=a.state,d=a.name,e=a.options,f=c.elements.arrow,h=c.modifiersData.popperOffsets,k=F(c.placement);a=ua(k);k=0<=["left","right"].indexOf(k)?"height":"width";if(f&&h){e=e.padding;e="function"===typeof e?e(Object.assign({},c.rects,{placement:c.placement})):e;e=Oa("number"!==typeof e?e:Pa(e,ja));
var m=ta(f),g="y"===a?"top":"left",l="y"===a?"bottom":"right",p=c.rects.reference[k]+c.rects.reference[a]-h[a]-c.rects.popper[k];h=h[a]-c.rects.reference[a];f=(f=fa(f))?"y"===a?f.clientHeight||0:f.clientWidth||0:0;h=f/2-m[k]/2+(p/2-h/2);k=E(e[g],M(h,f-m[k]-e[l]));c.modifiersData[d]=(b={},b[a]=k,b.centerOffset=k-h,b)}},effect:function(a){var b=a.state;a=a.options.element;a=void 0===a?"[data-popper-arrow]":a;if(null!=a){if("string"===typeof a&&(a=b.elements.popper.querySelector(a),!a))return;Ma(b.elements.popper,
a)&&(b.elements.arrow=a)}},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(a){var b=a.state;a=a.name;var c=b.rects.reference,d=b.rects.popper,e=b.modifiersData.preventOverflow,f=ia(b,{elementContext:"reference"}),h=ia(b,{altBoundary:!0});c=Xa(f,c);d=Xa(h,d,e);e=Ya(c);h=Ya(d);b.modifiersData[a]={referenceClippingOffsets:c,popperEscapeOffsets:d,isReferenceHidden:e,hasPopperEscaped:h};b.attributes.popper=
Object.assign({},b.attributes.popper,{"data-popper-reference-hidden":e,"data-popper-escaped":h})}}]});let P,ka=[],aa=[],qa=[],fb=[],Pb=Promise.resolve(),Fa=!1,Da=!1,Ea=new Set,ra=new Set,R;class K{$destroy(){O(this,1);this.$destroy=x}$on(a,b){let c=this.$$.callbacks[a]||(this.$$.callbacks[a]=[]);c.push(b);return()=>{let a=c.indexOf(b);-1!==a&&c.splice(a,1)}}$set(a){this.$$set&&0!==Object.keys(a).length&&(this.$$.skip_bound=!0,this.$$set(a),this.$$.skip_bound=!1)}}class Sb extends K{constructor(a){super();
J(this,a,Rb,Qb,I,{config:6,step:7})}}class gc extends K{constructor(a){super();J(this,a,Ub,Tb,I,{step:0})}}class $b extends K{constructor(a){super();J(this,a,Wb,Vb,I,{cancelIcon:0,step:2})}}class Zb extends K{constructor(a){super();J(this,a,Yb,Xb,I,{labelId:1,element:0,title:2})}}class ec extends K{constructor(a){super();J(this,a,bc,ac,I,{labelId:0,step:1})}}class fc extends K{constructor(a){super();J(this,a,dc,cc,I,{descriptionId:1,element:0,step:2})}}class kc extends K{constructor(a){super();J(this,
a,ic,hc,I,{descriptionId:0,labelId:1,step:2})}}class tc extends K{constructor(a){super();J(this,a,lc,jc,I,{classPrefix:11,element:0,descriptionId:2,firstFocusableElement:8,focusableElements:9,labelId:3,lastFocusableElement:10,step:4,dataStepId:1,getElement:12})}get getElement(){return this.$$.ctx[12]}}var sb=function(a,b){return b={exports:{}},a(b,b.exports),b.exports}(function(a,b){(function(){a.exports={polyfill:function(){function a(a,b){this.scrollLeft=a;this.scrollTop=b}function b(a){if(null===
a||"object"!==typeof a||void 0===a.behavior||"auto"===a.behavior||"instant"===a.behavior)return!0;if("object"===typeof a&&"smooth"===a.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+a.behavior+" is not a valid value for enumeration ScrollBehavior.");}function e(a,b){if("Y"===b)return a.clientHeight+r<a.scrollHeight;if("X"===b)return a.clientWidth+r<a.scrollWidth}function f(a,b){a=g.getComputedStyle(a,null)["overflow"+b];return"auto"===a||"scroll"===a}function h(a){var b=
e(a,"Y")&&f(a,"Y");a=e(a,"X")&&f(a,"X");return b||a}function k(a){var b=(q()-a.startTime)/468;var c=.5*(1-Math.cos(Math.PI*(1<b?1:b)));b=a.startX+(a.x-a.startX)*c;c=a.startY+(a.y-a.startY)*c;a.method.call(a.scrollable,b,c);b===a.x&&c===a.y||g.requestAnimationFrame(k.bind(g,a))}function m(b,c,d){var e=q();if(b===l.body){var f=g;var h=g.scrollX||g.pageXOffset;b=g.scrollY||g.pageYOffset;var u=n.scroll}else f=b,h=b.scrollLeft,b=b.scrollTop,u=a;k({scrollable:f,method:u,startTime:e,startX:h,startY:b,x:c,
y:d})}var g=window,l=document;if(!("scrollBehavior"in l.documentElement.style&&!0!==g.__forceSmoothScrollPolyfill__)){var p=g.HTMLElement||g.Element,n={scroll:g.scroll||g.scrollTo,scrollBy:g.scrollBy,elementScroll:p.prototype.scroll||a,scrollIntoView:p.prototype.scrollIntoView},q=g.performance&&g.performance.now?g.performance.now.bind(g.performance):Date.now,r=/MSIE |Trident\/|Edge\//.test(g.navigator.userAgent)?1:0;g.scroll=g.scrollTo=function(a,c){void 0!==a&&(!0===b(a)?n.scroll.call(g,void 0!==
a.left?a.left:"object"!==typeof a?a:g.scrollX||g.pageXOffset,void 0!==a.top?a.top:void 0!==c?c:g.scrollY||g.pageYOffset):m.call(g,l.body,void 0!==a.left?~~a.left:g.scrollX||g.pageXOffset,void 0!==a.top?~~a.top:g.scrollY||g.pageYOffset))};g.scrollBy=function(a,c){void 0!==a&&(b(a)?n.scrollBy.call(g,void 0!==a.left?a.left:"object"!==typeof a?a:0,void 0!==a.top?a.top:void 0!==c?c:0):m.call(g,l.body,~~a.left+(g.scrollX||g.pageXOffset),~~a.top+(g.scrollY||g.pageYOffset)))};p.prototype.scroll=p.prototype.scrollTo=
function(a,c){if(void 0!==a)if(!0===b(a)){if("number"===typeof a&&void 0===c)throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==a.left?~~a.left:"object"!==typeof a?~~a:this.scrollLeft,void 0!==a.top?~~a.top:void 0!==c?~~c:this.scrollTop)}else c=a.left,a=a.top,m.call(this,this,"undefined"===typeof c?this.scrollLeft:~~c,"undefined"===typeof a?this.scrollTop:~~a)};p.prototype.scrollBy=function(a,c){void 0!==a&&(!0===b(a)?n.elementScroll.call(this,void 0!==a.left?
~~a.left+this.scrollLeft:~~a+this.scrollLeft,void 0!==a.top?~~a.top+this.scrollTop:~~c+this.scrollTop):this.scroll({left:~~a.left+this.scrollLeft,top:~~a.top+this.scrollTop,behavior:a.behavior}))};p.prototype.scrollIntoView=function(a){if(!0===b(a))n.scrollIntoView.call(this,void 0===a?!0:a);else{for(a=this;a!==l.body&&!1===h(a);)a=a.parentNode||a.host;var c=a.getBoundingClientRect(),d=this.getBoundingClientRect();a!==l.body?(m.call(this,a,a.scrollLeft+d.left-c.left,a.scrollTop+d.top-c.top),"fixed"!==
g.getComputedStyle(a).position&&g.scrollBy({left:c.left,top:c.top,behavior:"smooth"})):g.scrollBy({left:d.left,top:d.top,behavior:"smooth"})}}}}}})()});sb.polyfill;sb.polyfill();class Ha extends Ga{constructor(a,b={}){super(a,b);this.tour=a;this.classPrefix=this.tour.options?$a(this.tour.options.classPrefix):"";this.styles=a.styles;Ka(this);this._setOptions(b);return this}cancel(){this.tour.cancel();this.trigger("cancel")}complete(){this.tour.complete();this.trigger("complete")}destroy(){this.tooltip&&
(this.tooltip.destroy(),this.tooltip=null);this.el instanceof HTMLElement&&this.el.parentNode&&(this.el.parentNode.removeChild(this.el),this.el=null);this._updateStepTargetOnHide();this.trigger("destroy")}getTour(){return this.tour}hide(){this.tour.modal.hide();this.trigger("before-hide");this.el&&(this.el.hidden=!0);this._updateStepTargetOnHide();this.trigger("hide")}isCentered(){let a=Aa(this);return!a.element||!a.on}isOpen(){return!(!this.el||this.el.hidden)}show(){if(W(this.options.beforeShowPromise)){let a=
this.options.beforeShowPromise();if(void 0!==a)return a.then(()=>this._show())}this._show()}updateStepOptions(a){Object.assign(this.options,a);this.shepherdElementComponent&&this.shepherdElementComponent.$set({step:this})}getElement(){return this.el}getTarget(){return this.target}_createTooltipContent(){this.shepherdElementComponent=new tc({target:this.tour.options.stepsContainer||document.body,props:{classPrefix:this.classPrefix,descriptionId:`${this.id}-description`,labelId:`${this.id}-label`,step:this,
styles:this.styles}});return this.shepherdElementComponent.getElement()}_scrollTo(a){let {element:b}=Aa(this);W(this.options.scrollToHandler)?this.options.scrollToHandler(b):b instanceof Element&&"function"===typeof b.scrollIntoView&&b.scrollIntoView(a)}_getClassOptions(a){var b=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions;b=b&&b.classes?b.classes:"";a=[...(a.classes?a.classes:"").split(" "),...b.split(" ")];a=new Set(a);return Array.from(a).join(" ").trim()}_setOptions(a={}){let b=
this.tour&&this.tour.options&&this.tour.options.defaultStepOptions;b=rc({},b||{});this.options=Object.assign({arrow:!0},b,a);let {when:c}=this.options;this.options.classes=this._getClassOptions(a);this.destroy();this.id=this.options.id||`step-${Ba()}`;c&&Object.keys(c).forEach(a=>{this.on(a,c[a],this)})}_setupElements(){void 0!==this.el&&this.destroy();this.el=this._createTooltipContent();this.options.advanceOn&&xb(this);{this.tooltip&&this.tooltip.destroy();let a=Aa(this),b=a.element,c=Nb(a,this);
this.isCentered()&&(b=document.body,this.shepherdElementComponent.getElement().classList.add("shepherd-centered"));this.tooltip=sc(b,this.el,c);this.target=a.element}}_show(){this.trigger("before-show");this._setupElements();this.tour.modal||this.tour._setupModal();this.tour.modal.setupForStep(this);this._styleTargetElementForStep(this);this.el.hidden=!1;this.options.scrollTo&&setTimeout(()=>{this._scrollTo(this.options.scrollTo)});this.el.hidden=!1;let a=this.shepherdElementComponent.getElement(),
b=this.target||document.body;b.classList.add(`${this.classPrefix}shepherd-enabled`);b.classList.add(`${this.classPrefix}shepherd-target`);a.classList.add("shepherd-enabled");this.trigger("show")}_styleTargetElementForStep(a){let b=a.target;b&&(a.options.highlightClass&&b.classList.add(a.options.highlightClass),!1===a.options.canClickTarget&&b.classList.add("shepherd-target-click-disabled"))}_updateStepTargetOnHide(){let a=this.target||document.body;this.options.highlightClass&&a.classList.remove(this.options.highlightClass);
a.classList.remove("shepherd-target-click-disabled",`${this.classPrefix}shepherd-enabled`,`${this.classPrefix}shepherd-target`)}}class uc extends K{constructor(a){super();J(this,a,pc,oc,I,{element:0,openingProperties:4,getElement:5,closeModalOpening:6,hide:7,positionModal:8,setupForStep:9,show:10})}get getElement(){return this.$$.ctx[5]}get closeModalOpening(){return this.$$.ctx[6]}get hide(){return this.$$.ctx[7]}get positionModal(){return this.$$.ctx[8]}get setupForStep(){return this.$$.ctx[9]}get show(){return this.$$.ctx[10]}}
let ba=new Ga;class vc extends Ga{constructor(a={}){super(a);Ka(this);this.options=Object.assign({},{exitOnEsc:!0,keyboardNavigation:!0},a);this.classPrefix=$a(this.options.classPrefix);this.steps=[];this.addSteps(this.options.steps);"active cancel complete inactive show start".split(" ").map(a=>{(a=>{this.on(a,b=>{b=b||{};b.tour=this;ba.trigger(a,b)})})(a)});this._setTourID();return this}addStep(a,b){a instanceof Ha?a.tour=this:a=new Ha(this,a);void 0!==b?this.steps.splice(b,0,a):this.steps.push(a);
return a}addSteps(a){Array.isArray(a)&&a.forEach(a=>{this.addStep(a)});return this}back(){let a=this.steps.indexOf(this.currentStep);this.show(a-1,!1)}cancel(){this.options.confirmCancel?window.confirm(this.options.confirmCancelMessage||"Are you sure you want to stop the tour?")&&this._done("cancel"):this._done("cancel")}complete(){this._done("complete")}getById(a){return this.steps.find(b=>b.id===a)}getCurrentStep(){return this.currentStep}hide(){let a=this.getCurrentStep();if(a)return a.hide()}isActive(){return ba.activeTour===
this}next(){let a=this.steps.indexOf(this.currentStep);a===this.steps.length-1?this.complete():this.show(a+1,!0)}removeStep(a){let b=this.getCurrentStep();this.steps.some((b,d)=>{if(b.id===a)return b.isOpen()&&b.hide(),b.destroy(),this.steps.splice(d,1),!0});b&&b.id===a&&(this.currentStep=void 0,this.steps.length?this.show(0):this.cancel())}show(a=0,b=!0){if(a=da(a)?this.getById(a):this.steps[a])this._updateStateBeforeShow(),W(a.options.showOn)&&!a.options.showOn()?this._skipStep(a,b):(this.trigger("show",
{step:a,previous:this.currentStep}),this.currentStep=a,a.show())}start(){this.trigger("start");this.focusedElBeforeOpen=document.activeElement;this.currentStep=null;this._setupModal();this._setupActiveTour();this.next()}_done(a){let b=this.steps.indexOf(this.currentStep);Array.isArray(this.steps)&&this.steps.forEach(a=>a.destroy());mc(this);this.trigger(a,{index:b});ba.activeTour=null;this.trigger("inactive",{tour:this});this.modal&&this.modal.hide();"cancel"!==a&&"complete"!==a||!this.modal||(a=
document.querySelector(".shepherd-modal-overlay-container"))&&a.remove();this.focusedElBeforeOpen instanceof HTMLElement&&this.focusedElBeforeOpen.focus()}_setupActiveTour(){this.trigger("active",{tour:this});ba.activeTour=this}_setupModal(){this.modal=new uc({target:this.options.modalContainer||document.body,props:{classPrefix:this.classPrefix,styles:this.styles}})}_skipStep(a,b){a=this.steps.indexOf(a);this.show(b?a+1:a-1,b)}_updateStateBeforeShow(){this.currentStep&&this.currentStep.hide();this.isActive()||
this._setupActiveTour()}_setTourID(){this.id=`${this.options.tourName||"tour"}--${Ba()}`}}Object.assign(ba,{Tour:vc,Step:Ha});return ba})

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal, settings, document, Shepherd) {
  var queryString = decodeURI(window.location.search);
  Drupal.behaviors.tour = {
    attach: function attach(context) {
      once('tour', 'body').forEach(function () {
        var model = new Drupal.tour.models.StateModel();
        new Drupal.tour.views.ToggleTourView({
          el: $(context).find('#toolbar-tab-tour'),
          model: model
        });
        model.on('change:isActive', function (tourModel, isActive) {
          $(document).trigger(isActive ? 'drupalTourStarted' : 'drupalTourStopped');
        });

        if (settings._tour_internal) {
          model.set('tour', settings._tour_internal);
        }

        if (/tour=?/i.test(queryString)) {
          model.set('isActive', true);
        }
      });
    }
  };
  Drupal.tour = Drupal.tour || {
    models: {},
    views: {}
  };
  Drupal.tour.models.StateModel = Backbone.Model.extend({
    defaults: {
      tour: [],
      isActive: false,
      activeTour: []
    }
  });
  Drupal.tour.views.ToggleTourView = Backbone.View.extend({
    events: {
      click: 'onClick'
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change:tour change:isActive', this.render);
      this.listenTo(this.model, 'change:isActive', this.toggleTour);
    },
    render: function render() {
      this.$el.toggleClass('hidden', this._getTour().length === 0);
      var isActive = this.model.get('isActive');
      this.$el.find('button').toggleClass('is-active', isActive).attr('aria-pressed', isActive);
      return this;
    },
    toggleTour: function toggleTour() {
      if (this.model.get('isActive')) {
        this._removeIrrelevantTourItems(this._getTour());

        var tourItems = this.model.get('tour');
        var that = this;

        if (tourItems.length) {
          settings.tourShepherdConfig.defaultStepOptions.popperOptions.modifiers.push({
            name: 'moveArrowJoyridePosition',
            enabled: true,
            phase: 'write',
            fn: function fn(_ref) {
              var state = _ref.state;
              var arrow = state.elements.arrow;
              var placement = state.placement;

              if (arrow && /^top|bottom/.test(placement) && /-start|-end$/.test(placement)) {
                var horizontalPosition = placement.split('-')[1];
                var offset = horizontalPosition === 'start' ? 28 : state.elements.popper.clientWidth - 56;
                arrow.style.transform = "translate3d(".concat(offset, "px, 0px, 0px)");
              }
            }
          });
          var shepherdTour = new Shepherd.Tour(settings.tourShepherdConfig);
          shepherdTour.on('cancel', function () {
            that.model.set('isActive', false);
          });
          shepherdTour.on('complete', function () {
            that.model.set('isActive', false);
          });
          tourItems.forEach(function (tourStepConfig, index) {
            var tourItemOptions = {
              title: tourStepConfig.title ? Drupal.checkPlain(tourStepConfig.title) : null,
              text: function text() {
                return Drupal.theme('tourItemContent', tourStepConfig);
              },
              attachTo: tourStepConfig.attachTo,
              buttons: [Drupal.tour.nextButton(shepherdTour, tourStepConfig)],
              classes: tourStepConfig.classes,
              index: index
            };
            tourItemOptions.when = {
              show: function show() {
                var nextButton = shepherdTour.currentStep.el.querySelector('footer button');
                nextButton.focus();

                if (Drupal.tour.hasOwnProperty('convertToJoyrideMarkup')) {
                  Drupal.tour.convertToJoyrideMarkup(shepherdTour);
                }
              }
            };
            shepherdTour.addStep(tourItemOptions);
          });
          shepherdTour.start();
          this.model.set({
            isActive: true,
            activeTour: shepherdTour
          });
        }
      } else {
        this.model.get('activeTour').cancel();
        this.model.set({
          isActive: false,
          activeTour: []
        });
      }
    },
    onClick: function onClick(event) {
      this.model.set('isActive', !this.model.get('isActive'));
      event.preventDefault();
      event.stopPropagation();
    },
    _getTour: function _getTour() {
      return this.model.get('tour');
    },
    _removeIrrelevantTourItems: function _removeIrrelevantTourItems(tourItems) {
      var tips = /tips=([^&]+)/.exec(queryString);
      var filteredTour = tourItems.filter(function (tourItem) {
        if (tips && tourItem.hasOwnProperty('classes') && tourItem.classes.indexOf(tips[1]) === -1) {
          return false;
        }

        return !(tourItem.selector && !document.querySelector(tourItem.selector));
      });

      if (tourItems.length !== filteredTour.length) {
        filteredTour.forEach(function (filteredTourItem, filteredTourItemId) {
          filteredTour[filteredTourItemId].counter = Drupal.t('!tour_item of !total', {
            '!tour_item': filteredTourItemId + 1,
            '!total': filteredTour.length
          });

          if (filteredTourItemId === filteredTour.length - 1) {
            filteredTour[filteredTourItemId].cancelText = Drupal.t('End tour');
          }
        });
        this.model.set('tour', filteredTour);
      }
    }
  });

  Drupal.tour.nextButton = function (shepherdTour, tourStepConfig) {
    return {
      classes: 'button button--primary',
      text: tourStepConfig.cancelText ? tourStepConfig.cancelText : Drupal.t('Next'),
      action: tourStepConfig.cancelText ? shepherdTour.cancel : shepherdTour.next
    };
  };

  Drupal.theme.tourItemContent = function (tourStepConfig) {
    return "".concat(tourStepConfig.body, "<div class=\"tour-progress\">").concat(tourStepConfig.counter, "</div>");
  };
})(jQuery, Backbone, Drupal, drupalSettings, document, window.Shepherd);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (Drupal) {
  Drupal.tour.convertToJoyrideMarkup = function (shepherdTour) {
    var changeTag = function changeTag(element, tag) {
      if (element) {
        var newTagElement = document.createElement(tag);

        _toConsumableArray(element.attributes).forEach(function (attr) {
          newTagElement.setAttribute(attr.name, attr.value);
        });

        newTagElement.innerHTML = element.innerHTML;
        element.parentNode.replaceChild(newTagElement, element);
      }
    };

    var shepherdElement = shepherdTour.currentStep.el;
    var shepherdContent = shepherdElement.querySelector('.shepherd-content');
    var shepherdCancel = shepherdElement.querySelector('.shepherd-cancel-icon');
    var shepherdTitle = shepherdElement.querySelector('.shepherd-title');
    var shepherdText = shepherdElement.querySelector('.shepherd-text');
    var shepherdNext = shepherdElement.querySelector('footer .button');
    var tourProgress = shepherdElement.querySelector('.tour-progress');
    shepherdElement.classList.add('joyride-tip-guide');
    shepherdContent.classList.add('joyride-content-wrapper');
    shepherdNext.classList.add('joyride-next-tip');
    shepherdNext.setAttribute('href', '#');
    shepherdNext.setAttribute('role', 'button');
    shepherdNext.removeAttribute('type');
    shepherdCancel.classList.add('joyride-close-tip');
    shepherdCancel.removeAttribute('type');
    shepherdCancel.setAttribute('href', '#');
    shepherdCancel.setAttribute('role', 'button');
    shepherdElement.setAttribute('data-index', shepherdTour.currentStep.options.index);
    shepherdElement.querySelector('footer').remove();

    if (shepherdElement.classList.contains('tip-uses-get-output')) {
      shepherdText.appendChild(shepherdNext);
      shepherdText.appendChild(shepherdCancel);
      shepherdContent.querySelector('.shepherd-header').remove();
      Array.from(shepherdText.children).forEach(function (node) {
        if (node.tagName === 'P' && node.textContent === '' && node.classList.length === 0) {
          node.remove();
        }
      });
      shepherdContent.innerHTML = shepherdText.innerHTML;
    } else {
      shepherdContent.insertBefore(shepherdTitle, shepherdContent.firstChild);
      shepherdContent.insertBefore(tourProgress, shepherdText.nextSibling);
      shepherdContent.appendChild(shepherdCancel);
      shepherdContent.querySelector('.shepherd-header').remove();
      shepherdContent.insertBefore(shepherdNext, tourProgress.nextSibling);
      shepherdCancel.innerHTML = '<span aria-hidden="true">×</span>';
      shepherdTitle.classList.add('tour-tip-label');
      changeTag(shepherdTitle, 'h2');
      shepherdText.outerHTML = shepherdText.innerHTML;
    }

    changeTag(shepherdElement.querySelector('.joyride-close-tip'), 'a');
    changeTag(shepherdElement.querySelector('.joyride-next-tip'), 'a');
    var shepherdArrow = shepherdElement.querySelector('.shepherd-arrow');

    if (shepherdArrow) {
      shepherdArrow.classList.add('joyride-nub');

      if (shepherdTour.currentStep.options.attachTo.on) {
        var stepToTipPosition = {
          bottom: 'top',
          top: 'bottom',
          left: 'right',
          right: 'left'
        };
        shepherdArrow.classList.add(stepToTipPosition[shepherdTour.currentStep.options.attachTo.on.split('-')[0]]);
      }

      changeTag(shepherdArrow, 'span');
    } else {
      var nub = document.createElement('span');
      nub.classList.add('joyride-nub');
      nub.setAttribute('style', 'display: none;');
      shepherdElement.insertBefore(nub, shepherdElement.firstChild);
    }

    shepherdElement.querySelector('.joyride-next-tip').addEventListener('click', function (e) {
      e.preventDefault();
      shepherdTour.next();
    });
    shepherdElement.querySelector('.joyride-close-tip').addEventListener('click', function (e) {
      e.preventDefault();
      shepherdTour.cancel();
    });
    shepherdElement.querySelector('.joyride-next-tip').focus();
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function ($, Drupal, _ref) {
  var tabbable = _ref.tabbable,
      isTabbable = _ref.isTabbable;

  function TabbingManager() {
    this.stack = [];
  }

  function TabbingContext(options) {
    $.extend(this, {
      level: null,
      $tabbableElements: $(),
      $disabledElements: $(),
      released: false,
      active: false,
      trapFocus: false
    }, options);
  }

  $.extend(TabbingManager.prototype, {
    constrain: function constrain(elements) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$trapFocus = _ref2.trapFocus,
          trapFocus = _ref2$trapFocus === void 0 ? false : _ref2$trapFocus;

      var il = this.stack.length;

      for (var i = 0; i < il; i++) {
        this.stack[i].deactivate();
      }

      var tabbableElements = [];
      $(elements).each(function (index, rootElement) {
        tabbableElements = [].concat(_toConsumableArray(tabbableElements), _toConsumableArray(tabbable(rootElement)));

        if (isTabbable(rootElement)) {
          tabbableElements = [].concat(_toConsumableArray(tabbableElements), [rootElement]);
        }
      });
      var tabbingContext = new TabbingContext({
        level: this.stack.length,
        $tabbableElements: $(tabbableElements),
        trapFocus: trapFocus
      });
      this.stack.push(tabbingContext);
      tabbingContext.activate();
      $(document).trigger('drupalTabbingConstrained', tabbingContext);
      return tabbingContext;
    },
    release: function release() {
      var toActivate = this.stack.length - 1;

      while (toActivate >= 0 && this.stack[toActivate].released) {
        toActivate--;
      }

      this.stack.splice(toActivate + 1);

      if (toActivate >= 0) {
        this.stack[toActivate].activate();
      }
    },
    activate: function activate(tabbingContext) {
      var $set = tabbingContext.$tabbableElements;
      var level = tabbingContext.level;
      var $disabledSet = $(tabbable(document.body)).not($set);
      tabbingContext.$disabledElements = $disabledSet;
      var il = $disabledSet.length;

      for (var i = 0; i < il; i++) {
        this.recordTabindex($disabledSet.eq(i), level);
      }

      $disabledSet.prop('tabindex', -1).prop('autofocus', false);
      var $hasFocus = $set.filter('[autofocus]').eq(-1);

      if ($hasFocus.length === 0) {
        $hasFocus = $set.eq(0);
      }

      $hasFocus.trigger('focus');

      if ($set.length && tabbingContext.trapFocus) {
        $set.last().on('keydown.focus-trap', function (event) {
          if (event.key === 'Tab' && !event.shiftKey) {
            event.preventDefault();
            $set.first().focus();
          }
        });
        $set.first().on('keydown.focus-trap', function (event) {
          if (event.key === 'Tab' && event.shiftKey) {
            event.preventDefault();
            $set.last().focus();
          }
        });
      }
    },
    deactivate: function deactivate(tabbingContext) {
      var $set = tabbingContext.$disabledElements;
      var level = tabbingContext.level;
      var il = $set.length;
      tabbingContext.$tabbableElements.first().off('keydown.focus-trap');
      tabbingContext.$tabbableElements.last().off('keydown.focus-trap');

      for (var i = 0; i < il; i++) {
        this.restoreTabindex($set.eq(i), level);
      }
    },
    recordTabindex: function recordTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices') || {};
      tabInfo[level] = {
        tabindex: $el[0].getAttribute('tabindex'),
        autofocus: $el[0].hasAttribute('autofocus')
      };
      $el.data('drupalOriginalTabIndices', tabInfo);
    },
    restoreTabindex: function restoreTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices');

      if (tabInfo && tabInfo[level]) {
        var data = tabInfo[level];

        if (data.tabindex) {
          $el[0].setAttribute('tabindex', data.tabindex);
        } else {
          $el[0].removeAttribute('tabindex');
        }

        if (data.autofocus) {
          $el[0].setAttribute('autofocus', 'autofocus');
        }

        if (level === 0) {
          $el.removeData('drupalOriginalTabIndices');
        } else {
          var levelToDelete = level;

          while (tabInfo.hasOwnProperty(levelToDelete)) {
            delete tabInfo[levelToDelete];
            levelToDelete++;
          }

          $el.data('drupalOriginalTabIndices', tabInfo);
        }
      }
    }
  });
  $.extend(TabbingContext.prototype, {
    release: function release() {
      if (!this.released) {
        this.deactivate();
        this.released = true;
        Drupal.tabbingManager.release(this);
        $(document).trigger('drupalTabbingContextReleased', this);
      }
    },
    activate: function activate() {
      if (!this.active && !this.released) {
        this.active = true;
        Drupal.tabbingManager.activate(this);
        $(document).trigger('drupalTabbingContextActivated', this);
      }
    },
    deactivate: function deactivate() {
      if (this.active) {
        this.active = false;
        Drupal.tabbingManager.deactivate(this);
        $(document).trigger('drupalTabbingContextDeactivated', this);
      }
    }
  });

  if (Drupal.tabbingManager) {
    return;
  }

  Drupal.tabbingManager = new TabbingManager();
})(jQuery, Drupal, window.tabbable);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone) {
  var strings = {
    tabbingReleased: Drupal.t('Tabbing is no longer constrained by the Contextual module.'),
    tabbingConstrained: Drupal.t('Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.'),
    pressEsc: Drupal.t('Press the esc key to exit.')
  };

  function initContextualToolbar(context) {
    if (!Drupal.contextual || !Drupal.contextual.collection) {
      return;
    }

    var contextualToolbar = Drupal.contextualToolbar;
    contextualToolbar.model = new contextualToolbar.StateModel({
      isViewing: localStorage.getItem('Drupal.contextualToolbar.isViewing') !== 'false'
    }, {
      contextualCollection: Drupal.contextual.collection
    });
    var viewOptions = {
      el: $('.toolbar .toolbar-bar .contextual-toolbar-tab'),
      model: contextualToolbar.model,
      strings: strings
    };
    new contextualToolbar.VisualView(viewOptions);
    new contextualToolbar.AuralView(viewOptions);
  }

  Drupal.behaviors.contextualToolbar = {
    attach: function attach(context) {
      if (once('contextualToolbar-init', 'body').length) {
        initContextualToolbar(context);
      }
    }
  };
  Drupal.contextualToolbar = {
    model: null
  };
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextualToolbar.StateModel = Backbone.Model.extend({
    defaults: {
      isViewing: true,
      isVisible: false,
      contextualCount: 0,
      tabbingContext: null
    },
    initialize: function initialize(attrs, options) {
      this.listenTo(options.contextualCollection, 'reset remove add', this.countContextualLinks);
      this.listenTo(options.contextualCollection, 'add', this.lockNewContextualLinks);
      this.listenTo(this, 'change:contextualCount', this.updateVisibility);
      this.listenTo(this, 'change:isViewing', function (model, isViewing) {
        options.contextualCollection.each(function (contextualModel) {
          contextualModel.set('isLocked', !isViewing);
        });
      });
    },
    countContextualLinks: function countContextualLinks(contextualModel, contextualCollection) {
      this.set('contextualCount', contextualCollection.length);
    },
    lockNewContextualLinks: function lockNewContextualLinks(contextualModel, contextualCollection) {
      if (!this.get('isViewing')) {
        contextualModel.set('isLocked', true);
      }
    },
    updateVisibility: function updateVisibility() {
      this.set('isVisible', this.get('contextualCount') > 0);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone, _) {
  Drupal.contextualToolbar.AuralView = Backbone.View.extend({
    announcedOnce: false,
    initialize: function initialize(options) {
      this.options = options;
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.manageTabbing);
      $(document).on('keyup', _.bind(this.onKeypress, this));
      this.manageTabbing();
    },
    render: function render() {
      this.$el.find('button').attr('aria-pressed', !this.model.get('isViewing'));
      return this;
    },
    manageTabbing: function manageTabbing() {
      var tabbingContext = this.model.get('tabbingContext');

      if (tabbingContext) {
        if (tabbingContext.active) {
          Drupal.announce(this.options.strings.tabbingReleased);
        }

        tabbingContext.release();
      }

      if (!this.model.get('isViewing')) {
        tabbingContext = Drupal.tabbingManager.constrain($('.contextual-toolbar-tab, .contextual'));
        this.model.set('tabbingContext', tabbingContext);
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }
    },
    announceTabbingConstraint: function announceTabbingConstraint() {
      var strings = this.options.strings;
      Drupal.announce(Drupal.formatString(strings.tabbingConstrained, {
        '@contextualsCount': Drupal.formatPlural(Drupal.contextual.collection.length, '@count contextual link', '@count contextual links')
      }));
      Drupal.announce(strings.pressEsc);
    },
    onKeypress: function onKeypress(event) {
      if (!this.announcedOnce && event.keyCode === 9 && !this.model.get('isViewing')) {
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }

      if (event.keyCode === 27) {
        this.model.set('isViewing', true);
      }
    }
  });
})(jQuery, Drupal, Backbone, _);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextualToolbar.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        click: function click() {
          this.model.set('isViewing', !this.model.get('isViewing'));
        },
        touchend: touchEndToClick
      };
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.persist);
    },
    render: function render() {
      this.$el.toggleClass('hidden', !this.model.get('isVisible'));
      this.$el.find('button').toggleClass('is-active', !this.model.get('isViewing'));
      return this;
    },
    persist: function persist(model, isViewing) {
      if (!isViewing) {
        localStorage.setItem('Drupal.contextualToolbar.isViewing', 'false');
      } else {
        localStorage.removeItem('Drupal.contextualToolbar.isViewing');
      }
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var pathInfo = drupalSettings.path;
  var escapeAdminPath = sessionStorage.getItem('escapeAdminPath');
  var windowLocation = window.location;

  if (!pathInfo.currentPathIsAdmin && !/destination=/.test(windowLocation.search)) {
    sessionStorage.setItem('escapeAdminPath', windowLocation);
  }

  Drupal.behaviors.escapeAdmin = {
    attach: function attach() {
      var toolbarEscape = once('escapeAdmin', '[data-toolbar-escape-admin]');

      if (toolbarEscape.length && pathInfo.currentPathIsAdmin) {
        var $toolbarEscape = $(toolbarEscape);

        if (escapeAdminPath !== null) {
          $toolbarEscape.attr('href', escapeAdminPath);
        } else {
          $toolbarEscape.text(Drupal.t('Home'));
        }
      }
    }
  };
})(jQuery, Drupal, drupalSettings);;
