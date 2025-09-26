(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function wx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ih={exports:{}},No={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function Cx(){if(bg)return No;bg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return No.Fragment=t,No.jsx=i,No.jsxs=i,No}var Ag;function Dx(){return Ag||(Ag=1,ih.exports=Cx()),ih.exports}var Yn=Dx(),ah={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function Ux(){if(Rg)return ce;Rg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function M(L,J,yt){this.props=L,this.context=J,this.refs=A,this.updater=yt||S}M.prototype.isReactComponent={},M.prototype.setState=function(L,J){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,J,"setState")},M.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=M.prototype;function O(L,J,yt){this.props=L,this.context=J,this.refs=A,this.updater=yt||S}var U=O.prototype=new _;U.constructor=O,T(U,M.prototype),U.isPureReactComponent=!0;var w=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function H(L,J,yt,St,Rt,nt){return yt=nt.ref,{$$typeof:o,type:L,key:J,ref:yt!==void 0?yt:null,props:nt}}function V(L,J){return H(L.type,J,void 0,void 0,void 0,L.props)}function D(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function C(L){var J={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(yt){return J[yt]})}var B=/\/+/g;function et(L,J){return typeof L=="object"&&L!==null&&L.key!=null?C(""+L.key):J.toString(36)}function ot(){}function lt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(ot,ot):(L.status="pending",L.then(function(J){L.status==="pending"&&(L.status="fulfilled",L.value=J)},function(J){L.status==="pending"&&(L.status="rejected",L.reason=J)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ft(L,J,yt,St,Rt){var nt=typeof L;(nt==="undefined"||nt==="boolean")&&(L=null);var pt=!1;if(L===null)pt=!0;else switch(nt){case"bigint":case"string":case"number":pt=!0;break;case"object":switch(L.$$typeof){case o:case t:pt=!0;break;case g:return pt=L._init,ft(pt(L._payload),J,yt,St,Rt)}}if(pt)return Rt=Rt(L),pt=St===""?"."+et(L,0):St,w(Rt)?(yt="",pt!=null&&(yt=pt.replace(B,"$&/")+"/"),ft(Rt,J,yt,"",function(Xt){return Xt})):Rt!=null&&(D(Rt)&&(Rt=V(Rt,yt+(Rt.key==null||L&&L.key===Rt.key?"":(""+Rt.key).replace(B,"$&/")+"/")+pt)),J.push(Rt)),1;pt=0;var Mt=St===""?".":St+":";if(w(L))for(var Ut=0;Ut<L.length;Ut++)St=L[Ut],nt=Mt+et(St,Ut),pt+=ft(St,J,yt,nt,Rt);else if(Ut=y(L),typeof Ut=="function")for(L=Ut.call(L),Ut=0;!(St=L.next()).done;)St=St.value,nt=Mt+et(St,Ut++),pt+=ft(St,J,yt,nt,Rt);else if(nt==="object"){if(typeof L.then=="function")return ft(lt(L),J,yt,St,Rt);throw J=String(L),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return pt}function z(L,J,yt){if(L==null)return L;var St=[],Rt=0;return ft(L,St,"","",function(nt){return J.call(yt,nt,Rt++)}),St}function K(L){if(L._status===-1){var J=L._result;J=J(),J.then(function(yt){(L._status===0||L._status===-1)&&(L._status=1,L._result=yt)},function(yt){(L._status===0||L._status===-1)&&(L._status=2,L._result=yt)}),L._status===-1&&(L._status=0,L._result=J)}if(L._status===1)return L._result.default;throw L._result}var Y=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function xt(){}return ce.Children={map:z,forEach:function(L,J,yt){z(L,function(){J.apply(this,arguments)},yt)},count:function(L){var J=0;return z(L,function(){J++}),J},toArray:function(L){return z(L,function(J){return J})||[]},only:function(L){if(!D(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},ce.Component=M,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=O,ce.StrictMode=s,ce.Suspense=m,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ce.__COMPILER_RUNTIME={__proto__:null,c:function(L){return P.H.useMemoCache(L)}},ce.cache=function(L){return function(){return L.apply(null,arguments)}},ce.cloneElement=function(L,J,yt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var St=T({},L.props),Rt=L.key,nt=void 0;if(J!=null)for(pt in J.ref!==void 0&&(nt=void 0),J.key!==void 0&&(Rt=""+J.key),J)!F.call(J,pt)||pt==="key"||pt==="__self"||pt==="__source"||pt==="ref"&&J.ref===void 0||(St[pt]=J[pt]);var pt=arguments.length-2;if(pt===1)St.children=yt;else if(1<pt){for(var Mt=Array(pt),Ut=0;Ut<pt;Ut++)Mt[Ut]=arguments[Ut+2];St.children=Mt}return H(L.type,Rt,void 0,void 0,nt,St)},ce.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},ce.createElement=function(L,J,yt){var St,Rt={},nt=null;if(J!=null)for(St in J.key!==void 0&&(nt=""+J.key),J)F.call(J,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(Rt[St]=J[St]);var pt=arguments.length-2;if(pt===1)Rt.children=yt;else if(1<pt){for(var Mt=Array(pt),Ut=0;Ut<pt;Ut++)Mt[Ut]=arguments[Ut+2];Rt.children=Mt}if(L&&L.defaultProps)for(St in pt=L.defaultProps,pt)Rt[St]===void 0&&(Rt[St]=pt[St]);return H(L,nt,void 0,void 0,null,Rt)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(L){return{$$typeof:d,render:L}},ce.isValidElement=D,ce.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:K}},ce.memo=function(L,J){return{$$typeof:p,type:L,compare:J===void 0?null:J}},ce.startTransition=function(L){var J=P.T,yt={};P.T=yt;try{var St=L(),Rt=P.S;Rt!==null&&Rt(yt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(xt,Y)}catch(nt){Y(nt)}finally{P.T=J}},ce.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ce.use=function(L){return P.H.use(L)},ce.useActionState=function(L,J,yt){return P.H.useActionState(L,J,yt)},ce.useCallback=function(L,J){return P.H.useCallback(L,J)},ce.useContext=function(L){return P.H.useContext(L)},ce.useDebugValue=function(){},ce.useDeferredValue=function(L,J){return P.H.useDeferredValue(L,J)},ce.useEffect=function(L,J,yt){var St=P.H;if(typeof yt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(L,J)},ce.useId=function(){return P.H.useId()},ce.useImperativeHandle=function(L,J,yt){return P.H.useImperativeHandle(L,J,yt)},ce.useInsertionEffect=function(L,J){return P.H.useInsertionEffect(L,J)},ce.useLayoutEffect=function(L,J){return P.H.useLayoutEffect(L,J)},ce.useMemo=function(L,J){return P.H.useMemo(L,J)},ce.useOptimistic=function(L,J){return P.H.useOptimistic(L,J)},ce.useReducer=function(L,J,yt){return P.H.useReducer(L,J,yt)},ce.useRef=function(L){return P.H.useRef(L)},ce.useState=function(L){return P.H.useState(L)},ce.useSyncExternalStore=function(L,J,yt){return P.H.useSyncExternalStore(L,J,yt)},ce.useTransition=function(){return P.H.useTransition()},ce.version="19.1.1",ce}var wg;function Pd(){return wg||(wg=1,ah.exports=Ux()),ah.exports}var Fn=Pd(),sh={exports:{}},Oo={},rh={exports:{}},oh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg;function Lx(){return Cg||(Cg=1,(function(o){function t(z,K){var Y=z.length;z.push(K);t:for(;0<Y;){var xt=Y-1>>>1,L=z[xt];if(0<l(L,K))z[xt]=K,z[Y]=L,Y=xt;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var K=z[0],Y=z.pop();if(Y!==K){z[0]=Y;t:for(var xt=0,L=z.length,J=L>>>1;xt<J;){var yt=2*(xt+1)-1,St=z[yt],Rt=yt+1,nt=z[Rt];if(0>l(St,Y))Rt<L&&0>l(nt,St)?(z[xt]=nt,z[Rt]=Y,xt=Rt):(z[xt]=St,z[yt]=Y,xt=yt);else if(Rt<L&&0>l(nt,Y))z[xt]=nt,z[Rt]=Y,xt=Rt;else break t}}return K}function l(z,K){var Y=z.sortIndex-K.sortIndex;return Y!==0?Y:z.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,y=3,S=!1,T=!1,A=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function w(z){for(var K=i(p);K!==null;){if(K.callback===null)s(p);else if(K.startTime<=z)s(p),K.sortIndex=K.expirationTime,t(m,K);else break;K=i(p)}}function P(z){if(A=!1,w(z),!T)if(i(m)!==null)T=!0,F||(F=!0,et());else{var K=i(p);K!==null&&ft(P,K.startTime-z)}}var F=!1,H=-1,V=5,D=-1;function C(){return M?!0:!(o.unstable_now()-D<V)}function B(){if(M=!1,F){var z=o.unstable_now();D=z;var K=!0;try{t:{T=!1,A&&(A=!1,O(H),H=-1),S=!0;var Y=y;try{e:{for(w(z),v=i(m);v!==null&&!(v.expirationTime>z&&C());){var xt=v.callback;if(typeof xt=="function"){v.callback=null,y=v.priorityLevel;var L=xt(v.expirationTime<=z);if(z=o.unstable_now(),typeof L=="function"){v.callback=L,w(z),K=!0;break e}v===i(m)&&s(m),w(z)}else s(m);v=i(m)}if(v!==null)K=!0;else{var J=i(p);J!==null&&ft(P,J.startTime-z),K=!1}}break t}finally{v=null,y=Y,S=!1}K=void 0}}finally{K?et():F=!1}}}var et;if(typeof U=="function")et=function(){U(B)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,lt=ot.port2;ot.port1.onmessage=B,et=function(){lt.postMessage(null)}}else et=function(){_(B,0)};function ft(z,K){H=_(function(){z(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(z){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var Y=y;y=K;try{return z()}finally{y=Y}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=y;y=z;try{return K()}finally{y=Y}},o.unstable_scheduleCallback=function(z,K,Y){var xt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?xt+Y:xt):Y=xt,z){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Y+L,z={id:g++,callback:K,priorityLevel:z,startTime:Y,expirationTime:L,sortIndex:-1},Y>xt?(z.sortIndex=Y,t(p,z),i(m)===null&&z===i(p)&&(A?(O(H),H=-1):A=!0,ft(P,Y-xt))):(z.sortIndex=L,t(m,z),T||S||(T=!0,F||(F=!0,et()))),z},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(z){var K=y;return function(){var Y=y;y=K;try{return z.apply(this,arguments)}finally{y=Y}}}})(oh)),oh}var Dg;function Nx(){return Dg||(Dg=1,rh.exports=Lx()),rh.exports}var lh={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function Ox(){if(Ug)return Dn;Ug=1;var o=Pd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Dn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:S}):g==="script"&&s.d.X(m,{crossOrigin:v,integrity:y,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Dn.requestFormReset=function(m){s.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Dn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Dn.version="19.1.1",Dn}var Lg;function Px(){if(Lg)return lh.exports;Lg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),lh.exports=Ox(),lh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function zx(){if(Ng)return Oo;Ng=1;var o=Nx(),t=Pd(),i=Px();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),e;if(f===r)return d(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var x=!1,b=u.child;b;){if(b===a){x=!0,a=u,r=f;break}if(b===r){x=!0,r=u,a=f;break}b=b.sibling}if(!x){for(b=f.child;b;){if(b===a){x=!0,a=f,r=u;break}if(b===r){x=!0,r=f,a=u;break}b=b.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),U=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function et(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case M:return"Profiler";case A:return"StrictMode";case P:return"Suspense";case F:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case U:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return n=e.displayName||null,n!==null?n:lt(e.type)||"Memo";case V:n=e._payload,e=e._init;try{return lt(e(n))}catch{}}return null}var ft=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},xt=[],L=-1;function J(e){return{current:e}}function yt(e){0>L||(e.current=xt[L],xt[L]=null,L--)}function St(e,n){L++,xt[L]=e.current,e.current=n}var Rt=J(null),nt=J(null),pt=J(null),Mt=J(null);function Ut(e,n){switch(St(pt,n),St(nt,e),St(Rt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?$_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=$_(n),e=tg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}yt(Rt),St(Rt,e)}function Xt(){yt(Rt),yt(nt),yt(pt)}function ae(e){e.memoizedState!==null&&St(Mt,e);var n=Rt.current,a=tg(n,e.type);n!==a&&(St(nt,e),St(Rt,a))}function Ce(e){nt.current===e&&(yt(Rt),yt(nt)),Mt.current===e&&(yt(Mt),wo._currentValue=Y)}var fe=Object.prototype.hasOwnProperty,G=o.unstable_scheduleCallback,Ee=o.unstable_cancelCallback,Kt=o.unstable_shouldYield,ge=o.unstable_requestPaint,zt=o.unstable_now,Le=o.unstable_getCurrentPriorityLevel,ut=o.unstable_ImmediatePriority,Bt=o.unstable_UserBlockingPriority,le=o.unstable_NormalPriority,te=o.unstable_LowPriority,N=o.unstable_IdlePriority,E=o.log,tt=o.unstable_setDisableYieldValue,ht=null,vt=null;function ct(e){if(typeof E=="function"&&tt(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(ht,e)}catch{}}var It=Math.clz32?Math.clz32:Yt,wt=Math.log,Wt=Math.LN2;function Yt(e){return e>>>=0,e===0?32:31-(wt(e)/Wt|0)|0}var Et=256,Nt=4194304;function Zt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function kt(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~f,r!==0?u=Zt(r):(x&=b,x!==0?u=Zt(x):a||(a=b&~e,a!==0&&(u=Zt(a))))):(b=r&~f,b!==0?u=Zt(b):x!==0?u=Zt(x):a||(a=r&~e,a!==0&&(u=Zt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Dt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function oe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=Et;return Et<<=1,(Et&4194048)===0&&(Et=256),e}function At(){var e=Nt;return Nt<<=1,(Nt&62914560)===0&&(Nt=4194304),e}function Ct(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ft(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Tt(e,n,a,r,u,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,I=e.expirationTimes,$=e.hiddenUpdates;for(a=x&~a;0<a;){var dt=31-It(a),_t=1<<dt;b[dt]=0,I[dt]=-1;var it=$[dt];if(it!==null)for($[dt]=null,dt=0;dt<it.length;dt++){var at=it[dt];at!==null&&(at.lane&=-536870913)}a&=~_t}r!==0&&gt(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function gt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-It(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&4194090}function Vt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-It(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function re(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ue(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function be(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:yg(e.type))}function _i(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var ln=Math.random().toString(36).slice(2),cn="__reactFiber$"+ln,Qe="__reactProps$"+ln,Ai="__reactContainer$"+ln,Rs="__reactEvents$"+ln,el="__reactListeners$"+ln,ws="__reactHandles$"+ln,Fr="__reactResources$"+ln,Ri="__reactMarker$"+ln;function Cs(e){delete e[cn],delete e[Qe],delete e[Rs],delete e[el],delete e[ws]}function Fi(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ai]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=ag(e);e!==null;){if(a=e[cn])return a;e=ag(e)}return n}e=a,a=e.parentNode}return null}function fa(e){if(e=e[cn]||e[Ai]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Ya(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ha(e){var n=e[Fr];return n||(n=e[Fr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function an(e){e[Ri]=!0}var nl=new Set,il={};function R(e,n){q(e,n),q(e+"Capture",n)}function q(e,n){for(il[e]=n,e=0;e<n.length;e++)nl.add(n[e])}var st=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},Z={};function bt(e){return fe.call(Z,e)?!0:fe.call(rt,e)?!1:st.test(e)?Z[e]=!0:(rt[e]=!0,!1)}function Lt(e,n,a){if(bt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ht(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ot(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}var $t,ne;function qt(e){if($t===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$t=n&&n[1]||"",ne=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$t+e+ne}var he=!1;function Ae(e,n){if(!e||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(at){var it=at}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(at){it=at}e.call(_t.prototype)}}else{try{throw Error()}catch(at){it=at}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(at){if(at&&it&&typeof at.stack=="string")return[at.stack,it.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),x=f[0],b=f[1];if(x&&b){var I=x.split(`
`),$=b.split(`
`);for(u=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(r===I.length||u===$.length)for(r=I.length-1,u=$.length-1;1<=r&&0<=u&&I[r]!==$[u];)u--;for(;1<=r&&0<=u;r--,u--)if(I[r]!==$[u]){if(r!==1||u!==1)do if(r--,u--,0>u||I[r]!==$[u]){var dt=`
`+I[r].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=r&&0<=u);break}}}finally{he=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?qt(a):""}function je(e){switch(e.tag){case 26:case 27:case 5:return qt(e.type);case 16:return qt("Lazy");case 13:return qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return Ae(e.type,!1);case 11:return Ae(e.type.render,!1);case 1:return Ae(e.type,!0);case 31:return qt("Activity");default:return""}}function Pe(e){try{var n="";do n+=je(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function de(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(e){var n=Jt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){r=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(x){r=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ve(e){e._valueTracker||(e._valueTracker=Ye(e))}function Rn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Jt(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var On=/[\n"\\]/g;function _n(e){return e.replace(On,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ke(e,n,a,r,u,f,x,b){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+de(n)):e.value!==""+de(n)&&(e.value=""+de(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?wn(e,x,de(n)):a!=null?wn(e,x,de(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+de(b):e.removeAttribute("name")}function Pn(e,n,a,r,u,f,x,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+de(a):"",n=n!=null?""+de(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x)}function wn(e,n,a){n==="number"&&gi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Je(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+de(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Sn(e,n,a){if(n!=null&&(n=""+de(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+de(a):""}function Ds(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ft(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=de(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r)}function Gn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var bv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $d(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||bv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function tp(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&$d(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&$d(e,f,n[f])}function eu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Av=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Rv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function al(e){return Rv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var nu=null;function iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Us=null,Ls=null;function ep(e){var n=fa(e);if(n&&(e=n.stateNode)){var a=e[Qe]||null;t:switch(e=n.stateNode,n.type){case"input":if(ke(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_n(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[Qe]||null;if(!u)throw Error(s(90));ke(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Rn(r)}break t;case"textarea":Sn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Je(e,!!a.multiple,n,!1)}}}var au=!1;function np(e,n,a){if(au)return e(n,a);au=!0;try{var r=e(n);return r}finally{if(au=!1,(Us!==null||Ls!==null)&&(kl(),Us&&(n=Us,e=Ls,Ls=Us=null,ep(n),e)))for(n=0;n<e.length;n++)ep(e[n])}}function Hr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[Qe]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),su=!1;if(Hi)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){su=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{su=!1}var da=null,ru=null,sl=null;function ip(){if(sl)return sl;var e,n=ru,a=n.length,r,u="value"in da?da.value:da.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(r=1;r<=x&&n[a-r]===u[f-r];r++);return sl=u.slice(e,1<r?1-r:void 0)}function rl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ol(){return!0}function ap(){return!1}function Vn(e){function n(a,r,u,f,x){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ol:ap,this.isPropagationStopped=ap,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),n}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=Vn(ja),Vr=g({},ja,{view:0,detail:0}),wv=Vn(Vr),ou,lu,kr,cl=g({},Vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(ou=e.screenX-kr.screenX,lu=e.screenY-kr.screenY):lu=ou=0,kr=e),ou)},movementY:function(e){return"movementY"in e?e.movementY:lu}}),sp=Vn(cl),Cv=g({},cl,{dataTransfer:0}),Dv=Vn(Cv),Uv=g({},Vr,{relatedTarget:0}),cu=Vn(Uv),Lv=g({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Nv=Vn(Lv),Ov=g({},ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pv=Vn(Ov),zv=g({},ja,{data:0}),rp=Vn(zv),Bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Fv[e])?!!n[e]:!1}function uu(){return Hv}var Gv=g({},Vr,{key:function(e){if(e.key){var n=Bv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=rl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Iv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(e){return e.type==="keypress"?rl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vv=Vn(Gv),kv=g({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),op=Vn(kv),Xv=g({},Vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),Wv=Vn(Xv),qv=g({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yv=Vn(qv),jv=g({},cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zv=Vn(jv),Kv=g({},ja,{newState:0,oldState:0}),Qv=Vn(Kv),Jv=[9,13,27,32],fu=Hi&&"CompositionEvent"in window,Xr=null;Hi&&"documentMode"in document&&(Xr=document.documentMode);var $v=Hi&&"TextEvent"in window&&!Xr,lp=Hi&&(!fu||Xr&&8<Xr&&11>=Xr),cp=" ",up=!1;function fp(e,n){switch(e){case"keyup":return Jv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ns=!1;function ty(e,n){switch(e){case"compositionend":return hp(n);case"keypress":return n.which!==32?null:(up=!0,cp);case"textInput":return e=n.data,e===cp&&up?null:e;default:return null}}function ey(e,n){if(Ns)return e==="compositionend"||!fu&&fp(e,n)?(e=ip(),sl=ru=da=null,Ns=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return lp&&n.locale!=="ko"?null:n.data;default:return null}}var ny={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ny[e.type]:n==="textarea"}function pp(e,n,a,r){Us?Ls?Ls.push(r):Ls=[r]:Us=r,n=Zl(n,"onChange"),0<n.length&&(a=new ll("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Wr=null,qr=null;function iy(e){j_(e,0)}function ul(e){var n=Ya(e);if(Rn(n))return e}function mp(e,n){if(e==="change")return n}var _p=!1;if(Hi){var hu;if(Hi){var du="oninput"in document;if(!du){var gp=document.createElement("div");gp.setAttribute("oninput","return;"),du=typeof gp.oninput=="function"}hu=du}else hu=!1;_p=hu&&(!document.documentMode||9<document.documentMode)}function vp(){Wr&&(Wr.detachEvent("onpropertychange",yp),qr=Wr=null)}function yp(e){if(e.propertyName==="value"&&ul(qr)){var n=[];pp(n,qr,e,iu(e)),np(iy,n)}}function ay(e,n,a){e==="focusin"?(vp(),Wr=n,qr=a,Wr.attachEvent("onpropertychange",yp)):e==="focusout"&&vp()}function sy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul(qr)}function ry(e,n){if(e==="click")return ul(n)}function oy(e,n){if(e==="input"||e==="change")return ul(n)}function ly(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Zn=typeof Object.is=="function"?Object.is:ly;function Yr(e,n){if(Zn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!fe.call(n,u)||!Zn(e[u],n[u]))return!1}return!0}function xp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sp(e,n){var a=xp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=xp(a)}}function Mp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Mp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ep(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=gi(e.document)}return n}function pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var cy=Hi&&"documentMode"in document&&11>=document.documentMode,Os=null,mu=null,jr=null,_u=!1;function Tp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_u||Os==null||Os!==gi(r)||(r=Os,"selectionStart"in r&&pu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&Yr(jr,r)||(jr=r,r=Zl(mu,"onSelect"),0<r.length&&(n=new ll("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Os)))}function Za(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ps={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionrun:Za("Transition","TransitionRun"),transitionstart:Za("Transition","TransitionStart"),transitioncancel:Za("Transition","TransitionCancel"),transitionend:Za("Transition","TransitionEnd")},gu={},bp={};Hi&&(bp=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Ka(e){if(gu[e])return gu[e];if(!Ps[e])return e;var n=Ps[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in bp)return gu[e]=n[a];return e}var Ap=Ka("animationend"),Rp=Ka("animationiteration"),wp=Ka("animationstart"),uy=Ka("transitionrun"),fy=Ka("transitionstart"),hy=Ka("transitioncancel"),Cp=Ka("transitionend"),Dp=new Map,vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vu.push("scrollEnd");function vi(e,n){Dp.set(e,n),R(n,[e])}var Up=new WeakMap;function ri(e,n){if(typeof e=="object"&&e!==null){var a=Up.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Pe(n)},Up.set(e,n),n)}return{value:e,source:n,stack:Pe(n)}}var oi=[],zs=0,yu=0;function fl(){for(var e=zs,n=yu=zs=0;n<e;){var a=oi[n];oi[n++]=null;var r=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,r!==null&&u!==null){var x=r.pending;x===null?u.next=u:(u.next=x.next,x.next=u),r.pending=u}f!==0&&Lp(a,u,f)}}function hl(e,n,a,r){oi[zs++]=e,oi[zs++]=n,oi[zs++]=a,oi[zs++]=r,yu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function xu(e,n,a,r){return hl(e,n,a,r),dl(e)}function Bs(e,n){return hl(e,null,null,n),dl(e)}function Lp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-It(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function dl(e){if(50<xo)throw xo=0,Rf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Is={};function dy(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,n,a,r){return new dy(e,n,a,r)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gi(e,n){var a=e.alternate;return a===null?(a=Kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Np(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function pl(e,n,a,r,u,f){var x=0;if(r=e,typeof e=="function")Su(e)&&(x=1);else if(typeof e=="string")x=mx(e,a,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Kn(31,a,n,u),e.elementType=D,e.lanes=f,e;case T:return Qa(a.children,u,f,n);case A:x=8,u|=24;break;case M:return e=Kn(12,a,n,u|2),e.elementType=M,e.lanes=f,e;case P:return e=Kn(13,a,n,u),e.elementType=P,e.lanes=f,e;case F:return e=Kn(19,a,n,u),e.elementType=F,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case U:x=10;break t;case O:x=9;break t;case w:x=11;break t;case H:x=14;break t;case V:x=16,r=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Kn(x,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function Qa(e,n,a,r){return e=Kn(7,e,r,n),e.lanes=a,e}function Mu(e,n,a){return e=Kn(6,e,null,n),e.lanes=a,e}function Eu(e,n,a){return n=Kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Fs=[],Hs=0,ml=null,_l=0,li=[],ci=0,Ja=null,Vi=1,ki="";function $a(e,n){Fs[Hs++]=_l,Fs[Hs++]=ml,ml=e,_l=n}function Op(e,n,a){li[ci++]=Vi,li[ci++]=ki,li[ci++]=Ja,Ja=e;var r=Vi;e=ki;var u=32-It(r)-1;r&=~(1<<u),a+=1;var f=32-It(n)+u;if(30<f){var x=u-u%5;f=(r&(1<<x)-1).toString(32),r>>=x,u-=x,Vi=1<<32-It(n)+u|a<<u|r,ki=f+e}else Vi=1<<f|a<<u|r,ki=e}function Tu(e){e.return!==null&&($a(e,1),Op(e,1,0))}function bu(e){for(;e===ml;)ml=Fs[--Hs],Fs[Hs]=null,_l=Fs[--Hs],Fs[Hs]=null;for(;e===Ja;)Ja=li[--ci],li[ci]=null,ki=li[--ci],li[ci]=null,Vi=li[--ci],li[ci]=null}var zn=null,$e=null,De=!1,ts=null,wi=!1,Au=Error(s(519));function es(e){var n=Error(s(418,""));throw Qr(ri(n,e)),Au}function Pp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[cn]=e,n[Qe]=r,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<Mo.length;a++)xe(Mo[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Pn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),ve(n);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),Ds(n,r.value,r.defaultValue,r.children),ve(n)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||J_(n.textContent,a)?(r.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),r.onScroll!=null&&xe("scroll",n),r.onScrollEnd!=null&&xe("scrollend",n),r.onClick!=null&&(n.onclick=Kl),n=!0):n=!1,n||es(e)}function zp(e){for(zn=e.return;zn;)switch(zn.tag){case 5:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:zn=zn.return}}function Zr(e){if(e!==zn)return!1;if(!De)return zp(e),De=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||kf(e.type,e.memoizedProps)),a=!a),a&&$e&&es(e),zp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){$e=xi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}$e=null}}else n===27?(n=$e,Ca(e.type)?(e=Yf,Yf=null,$e=e):$e=n):$e=zn?xi(e.stateNode.nextSibling):null;return!0}function Kr(){$e=zn=null,De=!1}function Bp(){var e=ts;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),ts=null),e}function Qr(e){ts===null?ts=[e]:ts.push(e)}var Ru=J(null),ns=null,Xi=null;function pa(e,n,a){St(Ru,n._currentValue),n._currentValue=a}function Wi(e){e._currentValue=Ru.current,yt(Ru)}function wu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Cu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=u;for(var I=0;I<n.length;I++)if(b.context===n[I]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),wu(f.return,a,e),r||(x=null);break t}f=b.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),wu(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Jr(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var b=u.type;Zn(u.pendingProps.value,x.value)||(e!==null?e.push(b):e=[b])}}else if(u===Mt.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(wo):e=[wo])}u=u.return}e!==null&&Cu(n,e,a,r),n.flags|=262144}function gl(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function is(e){ns=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return Ip(ns,e)}function vl(e,n){return ns===null&&is(e),Ip(e,n)}function Ip(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Xi===null){if(e===null)throw Error(s(308));Xi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Xi=Xi.next=n;return a}var py=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},my=o.unstable_scheduleCallback,_y=o.unstable_NormalPriority,un={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Du(){return{controller:new py,data:new Map,refCount:0}}function $r(e){e.refCount--,e.refCount===0&&my(_y,function(){e.controller.abort()})}var to=null,Uu=0,Gs=0,Vs=null;function gy(e,n){if(to===null){var a=to=[];Uu=0,Gs=Of(),Vs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Uu++,n.then(Fp,Fp),n}function Fp(){if(--Uu===0&&to!==null){Vs!==null&&(Vs.status="fulfilled");var e=to;to=null,Gs=0,Vs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function vy(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Hp=z.S;z.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&gy(e,n),Hp!==null&&Hp(e,n)};var as=J(null);function Lu(){var e=as.current;return e!==null?e:We.pooledCache}function yl(e,n){n===null?St(as,as.current):St(as,n.pool)}function Gp(){var e=Lu();return e===null?null:{parent:un._currentValue,pool:e}}var eo=Error(s(460)),Vp=Error(s(474)),xl=Error(s(542)),Nu={then:function(){}};function kp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Sl(){}function Xp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Sl,Sl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,qp(e),e;default:if(typeof n.status=="string")n.then(Sl,Sl);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,qp(e),e}throw no=n,eo}}var no=null;function Wp(){if(no===null)throw Error(s(459));var e=no;return no=null,e}function qp(e){if(e===eo||e===xl)throw Error(s(483))}var ma=!1;function Ou(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ga(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ne&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=dl(e),Lp(e,null,a),n}return hl(e,r,n,a),dl(e)}function io(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Vt(e,a)}}function zu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Bu=!1;function ao(){if(Bu){var e=Vs;if(e!==null)throw e}}function so(e,n,a,r){Bu=!1;var u=e.updateQueue;ma=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var I=b,$=I.next;I.next=null,x===null?f=$:x.next=$,x=I;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,b=dt.lastBaseUpdate,b!==x&&(b===null?dt.firstBaseUpdate=$:b.next=$,dt.lastBaseUpdate=I))}if(f!==null){var _t=u.baseState;x=0,dt=$=I=null,b=f;do{var it=b.lane&-536870913,at=it!==b.lane;if(at?(Te&it)===it:(r&it)===it){it!==0&&it===Gs&&(Bu=!0),dt!==null&&(dt=dt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var se=e,ee=b;it=n;var Ie=a;switch(ee.tag){case 1:if(se=ee.payload,typeof se=="function"){_t=se.call(Ie,_t,it);break t}_t=se;break t;case 3:se.flags=se.flags&-65537|128;case 0:if(se=ee.payload,it=typeof se=="function"?se.call(Ie,_t,it):se,it==null)break t;_t=g({},_t,it);break t;case 2:ma=!0}}it=b.callback,it!==null&&(e.flags|=64,at&&(e.flags|=8192),at=u.callbacks,at===null?u.callbacks=[it]:at.push(it))}else at={lane:it,tag:b.tag,payload:b.payload,callback:b.callback,next:null},dt===null?($=dt=at,I=_t):dt=dt.next=at,x|=it;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;at=b,b=at.next,at.next=null,u.lastBaseUpdate=at,u.shared.pending=null}}while(!0);dt===null&&(I=_t),u.baseState=I,u.firstBaseUpdate=$,u.lastBaseUpdate=dt,f===null&&(u.shared.lanes=0),ba|=x,e.lanes=x,e.memoizedState=_t}}function Yp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function jp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Yp(a[e],n)}var ks=J(null),Ml=J(0);function Zp(e,n){e=Ji,St(Ml,e),St(ks,n),Ji=e|n.baseLanes}function Iu(){St(Ml,Ji),St(ks,ks.current)}function Fu(){Ji=Ml.current,yt(ks),yt(Ml)}var va=0,me=null,ze=null,sn=null,El=!1,Xs=!1,ss=!1,Tl=0,ro=0,Ws=null,yy=0;function en(){throw Error(s(321))}function Hu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Zn(e[a],n[a]))return!1;return!0}function Gu(e,n,a,r,u,f){return va=f,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?Lm:Nm,ss=!1,f=a(r,u),ss=!1,Xs&&(f=Qp(n,a,r,u)),Kp(e),f}function Kp(e){z.H=Dl;var n=ze!==null&&ze.next!==null;if(va=0,sn=ze=me=null,El=!1,ro=0,Ws=null,n)throw Error(s(300));e===null||gn||(e=e.dependencies,e!==null&&gl(e)&&(gn=!0))}function Qp(e,n,a,r){me=e;var u=0;do{if(Xs&&(Ws=null),ro=0,Xs=!1,25<=u)throw Error(s(301));if(u+=1,sn=ze=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=Ay,f=n(a,r)}while(Xs);return f}function xy(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?oo(n):n,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(me.flags|=1024),n}function Vu(){var e=Tl!==0;return Tl=0,e}function ku(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Xu(e){if(El){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}El=!1}va=0,sn=ze=me=null,Xs=!1,ro=Tl=0,Ws=null}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?me.memoizedState=sn=e:sn=sn.next=e,sn}function rn(){if(ze===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=sn===null?me.memoizedState:sn.next;if(n!==null)sn=n,ze=e;else{if(e===null)throw me.alternate===null?Error(s(467)):Error(s(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},sn===null?me.memoizedState=sn=e:sn=sn.next=e}return sn}function Wu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(e){var n=ro;return ro+=1,Ws===null&&(Ws=[]),e=Xp(Ws,e,n),n=me,(sn===null?n.memoizedState:sn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Lm:Nm),e}function bl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return oo(e);if(e.$$typeof===U)return Cn(e)}throw Error(s(438,String(e)))}function qu(e){var n=null,a=me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=me.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Wu(),me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=C;return n.index++,a}function qi(e,n){return typeof n=="function"?n(e):n}function Al(e){var n=rn();return Yu(n,ze,e)}function Yu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var b=x=null,I=null,$=n,dt=!1;do{var _t=$.lane&-536870913;if(_t!==$.lane?(Te&_t)===_t:(va&_t)===_t){var it=$.revertLane;if(it===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),_t===Gs&&(dt=!0);else if((va&it)===it){$=$.next,it===Gs&&(dt=!0);continue}else _t={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(b=I=_t,x=f):I=I.next=_t,me.lanes|=it,ba|=it;_t=$.action,ss&&a(f,_t),f=$.hasEagerState?$.eagerState:a(f,_t)}else it={lane:_t,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(b=I=it,x=f):I=I.next=it,me.lanes|=_t,ba|=_t;$=$.next}while($!==null&&$!==n);if(I===null?x=f:I.next=b,!Zn(f,e.memoizedState)&&(gn=!0,dt&&(a=Vs,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=I,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ju(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=e(f,x.action),x=x.next;while(x!==u);Zn(f,n.memoizedState)||(gn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Jp(e,n,a){var r=me,u=rn(),f=De;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Zn((ze||u).memoizedState,a);x&&(u.memoizedState=a,gn=!0),u=u.queue;var b=em.bind(null,r,u,e);if(lo(2048,8,b,[e]),u.getSnapshot!==n||x||sn!==null&&sn.memoizedState.tag&1){if(r.flags|=2048,qs(9,Rl(),tm.bind(null,r,u,a,n),null),We===null)throw Error(s(349));f||(va&124)!==0||$p(r,n,a)}return a}function $p(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=me.updateQueue,n===null?(n=Wu(),me.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function tm(e,n,a,r){n.value=a,n.getSnapshot=r,nm(n)&&im(e)}function em(e,n,a){return a(function(){nm(n)&&im(e)})}function nm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Zn(e,a)}catch{return!0}}function im(e){var n=Bs(e,2);n!==null&&ei(n,e,2)}function Zu(e){var n=kn();if(typeof e=="function"){var a=e;if(e=a(),ss){ct(!0);try{a()}finally{ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},n}function am(e,n,a,r){return e.baseState=a,Yu(e,ze,typeof r=="function"?r:qi)}function Sy(e,n,a,r,u){if(Cl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};z.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,sm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function sm(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=z.T,x={};z.T=x;try{var b=a(u,r),I=z.S;I!==null&&I(x,b),rm(e,n,b)}catch($){Ku(e,n,$)}finally{z.T=f}}else try{f=a(u,r),rm(e,n,f)}catch($){Ku(e,n,$)}}function rm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){om(e,n,r)},function(r){return Ku(e,n,r)}):om(e,n,a)}function om(e,n,a){n.status="fulfilled",n.value=a,lm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,sm(e,a)))}function Ku(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,lm(n),n=n.next;while(n!==r)}e.action=null}function lm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function cm(e,n){return n}function um(e,n){if(De){var a=We.formState;if(a!==null){t:{var r=me;if(De){if($e){e:{for(var u=$e,f=wi;u.nodeType!==8;){if(!f){u=null;break e}if(u=xi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){$e=xi(u.nextSibling),r=u.data==="F!";break t}}es(r)}r=!1}r&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cm,lastRenderedState:n},a.queue=r,a=Cm.bind(null,me,r),r.dispatch=a,r=Zu(!1),f=ef.bind(null,me,!1,r.queue),r=kn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=Sy.bind(null,me,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function fm(e){var n=rn();return hm(n,ze,e)}function hm(e,n,a){if(n=Yu(e,n,cm)[0],e=Al(qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=oo(n)}catch(x){throw x===eo?xl:x}else r=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(me.flags|=2048,qs(9,Rl(),My.bind(null,u,a),null)),[r,f,e]}function My(e,n){e.action=n}function dm(e){var n=rn(),a=ze;if(a!==null)return hm(n,a,e);rn(),n=n.memoizedState,a=rn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function qs(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=me.updateQueue,n===null&&(n=Wu(),me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Rl(){return{destroy:void 0,resource:void 0}}function pm(){return rn().memoizedState}function wl(e,n,a,r){var u=kn();r=r===void 0?null:r,me.flags|=e,u.memoizedState=qs(1|n,Rl(),a,r)}function lo(e,n,a,r){var u=rn();r=r===void 0?null:r;var f=u.memoizedState.inst;ze!==null&&r!==null&&Hu(r,ze.memoizedState.deps)?u.memoizedState=qs(n,f,a,r):(me.flags|=e,u.memoizedState=qs(1|n,f,a,r))}function mm(e,n){wl(8390656,8,e,n)}function _m(e,n){lo(2048,8,e,n)}function gm(e,n){return lo(4,2,e,n)}function vm(e,n){return lo(4,4,e,n)}function ym(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function xm(e,n,a){a=a!=null?a.concat([e]):null,lo(4,4,ym.bind(null,n,e),a)}function Qu(){}function Sm(e,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Hu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Mm(e,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Hu(n,r[1]))return r[0];if(r=e(),ss){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[r,n],r}function Ju(e,n,a){return a===void 0||(va&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=b_(),me.lanes|=e,ba|=e,a)}function Em(e,n,a,r){return Zn(a,n)?a:ks.current!==null?(e=Ju(e,a,r),Zn(e,n)||(gn=!0),e):(va&42)===0?(gn=!0,e.memoizedState=a):(e=b_(),me.lanes|=e,ba|=e,n)}function Tm(e,n,a,r,u){var f=K.p;K.p=f!==0&&8>f?f:8;var x=z.T,b={};z.T=b,ef(e,!1,n,a);try{var I=u(),$=z.S;if($!==null&&$(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var dt=vy(I,r);co(e,n,dt,ti(e))}else co(e,n,r,ti(e))}catch(_t){co(e,n,{then:function(){},status:"rejected",reason:_t},ti())}finally{K.p=f,z.T=x}}function Ey(){}function $u(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=bm(e).queue;Tm(e,u,n,Y,a===null?Ey:function(){return Am(e),a(r)})}function bm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Am(e){var n=bm(e).next.queue;co(e,n,{},ti())}function tf(){return Cn(wo)}function Rm(){return rn().memoizedState}function wm(){return rn().memoizedState}function Ty(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();e=_a(a);var r=ga(n,e,a);r!==null&&(ei(r,n,a),io(r,n,a)),n={cache:Du()},e.payload=n;return}n=n.return}}function by(e,n,a){var r=ti();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Cl(e)?Dm(n,a):(a=xu(e,n,a,r),a!==null&&(ei(a,e,r),Um(a,n,r)))}function Cm(e,n,a){var r=ti();co(e,n,a,r)}function co(e,n,a,r){var u={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cl(e))Dm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,b=f(x,a);if(u.hasEagerState=!0,u.eagerState=b,Zn(b,x))return hl(e,n,u,0),We===null&&fl(),!1}catch{}finally{}if(a=xu(e,n,u,r),a!==null)return ei(a,e,r),Um(a,n,r),!0}return!1}function ef(e,n,a,r){if(r={lane:2,revertLane:Of(),action:r,hasEagerState:!1,eagerState:null,next:null},Cl(e)){if(n)throw Error(s(479))}else n=xu(e,a,r,2),n!==null&&ei(n,e,2)}function Cl(e){var n=e.alternate;return e===me||n!==null&&n===me}function Dm(e,n){Xs=El=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Um(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Vt(e,a)}}var Dl={readContext:Cn,use:bl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en},Lm={readContext:Cn,use:bl,useCallback:function(e,n){return kn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:mm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,wl(4194308,4,ym.bind(null,n,e),a)},useLayoutEffect:function(e,n){return wl(4194308,4,e,n)},useInsertionEffect:function(e,n){wl(4,2,e,n)},useMemo:function(e,n){var a=kn();n=n===void 0?null:n;var r=e();if(ss){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=kn();if(a!==void 0){var u=a(n);if(ss){ct(!0);try{a(n)}finally{ct(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=by.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var n=kn();return e={current:e},n.memoizedState=e},useState:function(e){e=Zu(e);var n=e.queue,a=Cm.bind(null,me,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Qu,useDeferredValue:function(e,n){var a=kn();return Ju(a,e,n)},useTransition:function(){var e=Zu(!1);return e=Tm.bind(null,me,e.queue,!0,!1),kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=me,u=kn();if(De){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),We===null)throw Error(s(349));(Te&124)!==0||$p(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,mm(em.bind(null,r,f,e),[e]),r.flags|=2048,qs(9,Rl(),tm.bind(null,r,f,a,n),null),a},useId:function(){var e=kn(),n=We.identifierPrefix;if(De){var a=ki,r=Vi;a=(r&~(1<<32-It(r)-1)).toString(32)+a,n="«"+n+"R"+a,a=Tl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=yy++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:tf,useFormState:um,useActionState:um,useOptimistic:function(e){var n=kn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ef.bind(null,me,!0,a),a.dispatch=n,[e,n]},useMemoCache:qu,useCacheRefresh:function(){return kn().memoizedState=Ty.bind(null,me)}},Nm={readContext:Cn,use:bl,useCallback:Sm,useContext:Cn,useEffect:_m,useImperativeHandle:xm,useInsertionEffect:gm,useLayoutEffect:vm,useMemo:Mm,useReducer:Al,useRef:pm,useState:function(){return Al(qi)},useDebugValue:Qu,useDeferredValue:function(e,n){var a=rn();return Em(a,ze.memoizedState,e,n)},useTransition:function(){var e=Al(qi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:Jp,useId:Rm,useHostTransitionStatus:tf,useFormState:fm,useActionState:fm,useOptimistic:function(e,n){var a=rn();return am(a,ze,e,n)},useMemoCache:qu,useCacheRefresh:wm},Ay={readContext:Cn,use:bl,useCallback:Sm,useContext:Cn,useEffect:_m,useImperativeHandle:xm,useInsertionEffect:gm,useLayoutEffect:vm,useMemo:Mm,useReducer:ju,useRef:pm,useState:function(){return ju(qi)},useDebugValue:Qu,useDeferredValue:function(e,n){var a=rn();return ze===null?Ju(a,e,n):Em(a,ze.memoizedState,e,n)},useTransition:function(){var e=ju(qi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:Jp,useId:Rm,useHostTransitionStatus:tf,useFormState:dm,useActionState:dm,useOptimistic:function(e,n){var a=rn();return ze!==null?am(a,ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:qu,useCacheRefresh:wm},Ys=null,uo=0;function Ul(e){var n=uo;return uo+=1,Ys===null&&(Ys=[]),Xp(Ys,e,n)}function fo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ll(e,n){throw n.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Om(e){var n=e._init;return n(e._payload)}function Pm(e){function n(j,k){if(e){var Q=j.deletions;Q===null?(j.deletions=[k],j.flags|=16):Q.push(k)}}function a(j,k){if(!e)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function r(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function u(j,k){return j=Gi(j,k),j.index=0,j.sibling=null,j}function f(j,k,Q){return j.index=Q,e?(Q=j.alternate,Q!==null?(Q=Q.index,Q<k?(j.flags|=67108866,k):Q):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function x(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function b(j,k,Q,mt){return k===null||k.tag!==6?(k=Mu(Q,j.mode,mt),k.return=j,k):(k=u(k,Q),k.return=j,k)}function I(j,k,Q,mt){var Gt=Q.type;return Gt===T?dt(j,k,Q.props.children,mt,Q.key):k!==null&&(k.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===V&&Om(Gt)===k.type)?(k=u(k,Q.props),fo(k,Q),k.return=j,k):(k=pl(Q.type,Q.key,Q.props,null,j.mode,mt),fo(k,Q),k.return=j,k)}function $(j,k,Q,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==Q.containerInfo||k.stateNode.implementation!==Q.implementation?(k=Eu(Q,j.mode,mt),k.return=j,k):(k=u(k,Q.children||[]),k.return=j,k)}function dt(j,k,Q,mt,Gt){return k===null||k.tag!==7?(k=Qa(Q,j.mode,mt,Gt),k.return=j,k):(k=u(k,Q),k.return=j,k)}function _t(j,k,Q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Mu(""+k,j.mode,Q),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return Q=pl(k.type,k.key,k.props,null,j.mode,Q),fo(Q,k),Q.return=j,Q;case S:return k=Eu(k,j.mode,Q),k.return=j,k;case V:var mt=k._init;return k=mt(k._payload),_t(j,k,Q)}if(ft(k)||et(k))return k=Qa(k,j.mode,Q,null),k.return=j,k;if(typeof k.then=="function")return _t(j,Ul(k),Q);if(k.$$typeof===U)return _t(j,vl(j,k),Q);Ll(j,k)}return null}function it(j,k,Q,mt){var Gt=k!==null?k.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Gt!==null?null:b(j,k,""+Q,mt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return Q.key===Gt?I(j,k,Q,mt):null;case S:return Q.key===Gt?$(j,k,Q,mt):null;case V:return Gt=Q._init,Q=Gt(Q._payload),it(j,k,Q,mt)}if(ft(Q)||et(Q))return Gt!==null?null:dt(j,k,Q,mt,null);if(typeof Q.then=="function")return it(j,k,Ul(Q),mt);if(Q.$$typeof===U)return it(j,k,vl(j,Q),mt);Ll(j,Q)}return null}function at(j,k,Q,mt,Gt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return j=j.get(Q)||null,b(k,j,""+mt,Gt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case y:return j=j.get(mt.key===null?Q:mt.key)||null,I(k,j,mt,Gt);case S:return j=j.get(mt.key===null?Q:mt.key)||null,$(k,j,mt,Gt);case V:var _e=mt._init;return mt=_e(mt._payload),at(j,k,Q,mt,Gt)}if(ft(mt)||et(mt))return j=j.get(Q)||null,dt(k,j,mt,Gt,null);if(typeof mt.then=="function")return at(j,k,Q,Ul(mt),Gt);if(mt.$$typeof===U)return at(j,k,Q,vl(k,mt),Gt);Ll(k,mt)}return null}function se(j,k,Q,mt){for(var Gt=null,_e=null,jt=k,ie=k=0,yn=null;jt!==null&&ie<Q.length;ie++){jt.index>ie?(yn=jt,jt=null):yn=jt.sibling;var Re=it(j,jt,Q[ie],mt);if(Re===null){jt===null&&(jt=yn);break}e&&jt&&Re.alternate===null&&n(j,jt),k=f(Re,k,ie),_e===null?Gt=Re:_e.sibling=Re,_e=Re,jt=yn}if(ie===Q.length)return a(j,jt),De&&$a(j,ie),Gt;if(jt===null){for(;ie<Q.length;ie++)jt=_t(j,Q[ie],mt),jt!==null&&(k=f(jt,k,ie),_e===null?Gt=jt:_e.sibling=jt,_e=jt);return De&&$a(j,ie),Gt}for(jt=r(jt);ie<Q.length;ie++)yn=at(jt,j,ie,Q[ie],mt),yn!==null&&(e&&yn.alternate!==null&&jt.delete(yn.key===null?ie:yn.key),k=f(yn,k,ie),_e===null?Gt=yn:_e.sibling=yn,_e=yn);return e&&jt.forEach(function(Oa){return n(j,Oa)}),De&&$a(j,ie),Gt}function ee(j,k,Q,mt){if(Q==null)throw Error(s(151));for(var Gt=null,_e=null,jt=k,ie=k=0,yn=null,Re=Q.next();jt!==null&&!Re.done;ie++,Re=Q.next()){jt.index>ie?(yn=jt,jt=null):yn=jt.sibling;var Oa=it(j,jt,Re.value,mt);if(Oa===null){jt===null&&(jt=yn);break}e&&jt&&Oa.alternate===null&&n(j,jt),k=f(Oa,k,ie),_e===null?Gt=Oa:_e.sibling=Oa,_e=Oa,jt=yn}if(Re.done)return a(j,jt),De&&$a(j,ie),Gt;if(jt===null){for(;!Re.done;ie++,Re=Q.next())Re=_t(j,Re.value,mt),Re!==null&&(k=f(Re,k,ie),_e===null?Gt=Re:_e.sibling=Re,_e=Re);return De&&$a(j,ie),Gt}for(jt=r(jt);!Re.done;ie++,Re=Q.next())Re=at(jt,j,ie,Re.value,mt),Re!==null&&(e&&Re.alternate!==null&&jt.delete(Re.key===null?ie:Re.key),k=f(Re,k,ie),_e===null?Gt=Re:_e.sibling=Re,_e=Re);return e&&jt.forEach(function(Rx){return n(j,Rx)}),De&&$a(j,ie),Gt}function Ie(j,k,Q,mt){if(typeof Q=="object"&&Q!==null&&Q.type===T&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:t:{for(var Gt=Q.key;k!==null;){if(k.key===Gt){if(Gt=Q.type,Gt===T){if(k.tag===7){a(j,k.sibling),mt=u(k,Q.props.children),mt.return=j,j=mt;break t}}else if(k.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===V&&Om(Gt)===k.type){a(j,k.sibling),mt=u(k,Q.props),fo(mt,Q),mt.return=j,j=mt;break t}a(j,k);break}else n(j,k);k=k.sibling}Q.type===T?(mt=Qa(Q.props.children,j.mode,mt,Q.key),mt.return=j,j=mt):(mt=pl(Q.type,Q.key,Q.props,null,j.mode,mt),fo(mt,Q),mt.return=j,j=mt)}return x(j);case S:t:{for(Gt=Q.key;k!==null;){if(k.key===Gt)if(k.tag===4&&k.stateNode.containerInfo===Q.containerInfo&&k.stateNode.implementation===Q.implementation){a(j,k.sibling),mt=u(k,Q.children||[]),mt.return=j,j=mt;break t}else{a(j,k);break}else n(j,k);k=k.sibling}mt=Eu(Q,j.mode,mt),mt.return=j,j=mt}return x(j);case V:return Gt=Q._init,Q=Gt(Q._payload),Ie(j,k,Q,mt)}if(ft(Q))return se(j,k,Q,mt);if(et(Q)){if(Gt=et(Q),typeof Gt!="function")throw Error(s(150));return Q=Gt.call(Q),ee(j,k,Q,mt)}if(typeof Q.then=="function")return Ie(j,k,Ul(Q),mt);if(Q.$$typeof===U)return Ie(j,k,vl(j,Q),mt);Ll(j,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,k!==null&&k.tag===6?(a(j,k.sibling),mt=u(k,Q),mt.return=j,j=mt):(a(j,k),mt=Mu(Q,j.mode,mt),mt.return=j,j=mt),x(j)):a(j,k)}return function(j,k,Q,mt){try{uo=0;var Gt=Ie(j,k,Q,mt);return Ys=null,Gt}catch(jt){if(jt===eo||jt===xl)throw jt;var _e=Kn(29,jt,null,j.mode);return _e.lanes=mt,_e.return=j,_e}finally{}}}var js=Pm(!0),zm=Pm(!1),ui=J(null),Ci=null;function ya(e){var n=e.alternate;St(fn,fn.current&1),St(ui,e),Ci===null&&(n===null||ks.current!==null||n.memoizedState!==null)&&(Ci=e)}function Bm(e){if(e.tag===22){if(St(fn,fn.current),St(ui,e),Ci===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ci=e)}}else xa()}function xa(){St(fn,fn.current),St(ui,ui.current)}function Yi(e){yt(ui),Ci===e&&(Ci=null),yt(fn)}var fn=J(0);function Nl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||qf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function nf(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var af={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ti(),u=_a(r);u.payload=n,a!=null&&(u.callback=a),n=ga(e,u,r),n!==null&&(ei(n,e,r),io(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ti(),u=_a(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ga(e,u,r),n!==null&&(ei(n,e,r),io(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ti(),r=_a(a);r.tag=2,n!=null&&(r.callback=n),n=ga(e,r,a),n!==null&&(ei(n,e,a),io(n,e,a))}};function Im(e,n,a,r,u,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,x):n.prototype&&n.prototype.isPureReactComponent?!Yr(a,r)||!Yr(u,f):!0}function Fm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&af.enqueueReplaceState(n,n.state,null)}function rs(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Ol=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Hm(e){Ol(e)}function Gm(e){console.error(e)}function Vm(e){Ol(e)}function Pl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function km(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function sf(e,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){Pl(e,n)},a}function Xm(e){return e=_a(e),e.tag=3,e}function Wm(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){km(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){km(n,a,r),typeof u!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function Ry(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Jr(n,a,u,!0),a=ui.current,a!==null){switch(a.tag){case 13:return Ci===null?Cf():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===Nu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Uf(e,r,u)),!1;case 22:return a.flags|=65536,r===Nu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Uf(e,r,u)),!1}throw Error(s(435,a.tag))}return Uf(e,r,u),Cf(),!1}if(De)return n=ui.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Au&&(e=Error(s(422),{cause:r}),Qr(ri(e,a)))):(r!==Au&&(n=Error(s(423),{cause:r}),Qr(ri(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=ri(r,a),u=sf(e.stateNode,r,u),zu(e,u),tn!==4&&(tn=2)),!1;var f=Error(s(520),{cause:r});if(f=ri(f,a),yo===null?yo=[f]:yo.push(f),tn!==4&&(tn=2),n===null)return!0;r=ri(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=sf(a.stateNode,r,e),zu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Aa===null||!Aa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Xm(u),Wm(u,e,a,r),zu(a,u),!1}a=a.return}while(a!==null);return!1}var qm=Error(s(461)),gn=!1;function Mn(e,n,a,r){n.child=e===null?zm(n,null,a,r):js(n,e.child,a,r)}function Ym(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var x={};for(var b in r)b!=="ref"&&(x[b]=r[b])}else x=r;return is(n),r=Gu(e,n,a,x,f,u),b=Vu(),e!==null&&!gn?(ku(e,n,u),ji(e,n,u)):(De&&b&&Tu(n),n.flags|=1,Mn(e,n,r,u),n.child)}function jm(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!Su(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Zm(e,n,f,r,u)):(e=pl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!df(e,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Yr,a(x,r)&&e.ref===n.ref)return ji(e,n,u)}return n.flags|=1,e=Gi(f,r),e.ref=n.ref,e.return=n,n.child=e}function Zm(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(Yr(f,r)&&e.ref===n.ref)if(gn=!1,n.pendingProps=r=f,df(e,u))(e.flags&131072)!==0&&(gn=!0);else return n.lanes=e.lanes,ji(e,n,u)}return rf(e,n,a,r,u)}function Km(e,n,a){var r=n.pendingProps,u=r.children,f=e!==null?e.memoizedState:null;if(r.mode==="hidden"){if((n.flags&128)!==0){if(r=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~r}else n.childLanes=0,n.child=null;return Qm(e,n,r,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&yl(n,f!==null?f.cachePool:null),f!==null?Zp(n,f):Iu(),Bm(n);else return n.lanes=n.childLanes=536870912,Qm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(yl(n,f.cachePool),Zp(n,f),xa(),n.memoizedState=null):(e!==null&&yl(n,null),Iu(),xa());return Mn(e,n,u,a),n.child}function Qm(e,n,a,r){var u=Lu();return u=u===null?null:{parent:un._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&yl(n,null),Iu(),Bm(n),e!==null&&Jr(e,n,r,!0),null}function zl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function rf(e,n,a,r,u){return is(n),a=Gu(e,n,a,r,void 0,u),r=Vu(),e!==null&&!gn?(ku(e,n,u),ji(e,n,u)):(De&&r&&Tu(n),n.flags|=1,Mn(e,n,a,u),n.child)}function Jm(e,n,a,r,u,f){return is(n),n.updateQueue=null,a=Qp(n,r,a,u),Kp(e),r=Vu(),e!==null&&!gn?(ku(e,n,f),ji(e,n,f)):(De&&r&&Tu(n),n.flags|=1,Mn(e,n,a,f),n.child)}function $m(e,n,a,r,u){if(is(n),n.stateNode===null){var f=Is,x=a.contextType;typeof x=="object"&&x!==null&&(f=Cn(x)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=af,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Ou(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Cn(x):Is,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(nf(n,a,x,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&af.enqueueReplaceState(f,f.state,null),so(n,r,f,u),ao(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,I=rs(a,b);f.props=I;var $=f.context,dt=a.contextType;x=Is,typeof dt=="object"&&dt!==null&&(x=Cn(dt));var _t=a.getDerivedStateFromProps;dt=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||$!==x)&&Fm(n,f,r,x),ma=!1;var it=n.memoizedState;f.state=it,so(n,r,f,u),ao(),$=n.memoizedState,b||it!==$||ma?(typeof _t=="function"&&(nf(n,a,_t,r),$=n.memoizedState),(I=ma||Im(n,a,I,r,it,$,x))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=$),f.props=r,f.state=$,f.context=x,r=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Pu(e,n),x=n.memoizedProps,dt=rs(a,x),f.props=dt,_t=n.pendingProps,it=f.context,$=a.contextType,I=Is,typeof $=="object"&&$!==null&&(I=Cn($)),b=a.getDerivedStateFromProps,($=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==_t||it!==I)&&Fm(n,f,r,I),ma=!1,it=n.memoizedState,f.state=it,so(n,r,f,u),ao();var at=n.memoizedState;x!==_t||it!==at||ma||e!==null&&e.dependencies!==null&&gl(e.dependencies)?(typeof b=="function"&&(nf(n,a,b,r),at=n.memoizedState),(dt=ma||Im(n,a,dt,r,it,at,I)||e!==null&&e.dependencies!==null&&gl(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,at,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,at,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=at),f.props=r,f.state=at,f.context=I,r=dt):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,zl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=js(n,e.child,null,u),n.child=js(n,null,a,u)):Mn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ji(e,n,u),e}function t_(e,n,a,r){return Kr(),n.flags|=256,Mn(e,n,a,r),n.child}var of={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lf(e){return{baseLanes:e,cachePool:Gp()}}function cf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=fi),e}function e_(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(De){if(u?ya(n):xa(),De){var b=$e,I;if(I=b){t:{for(I=b,b=wi;I.nodeType!==8;){if(!b){b=null;break t}if(I=xi(I.nextSibling),I===null){b=null;break t}}b=I}b!==null?(n.memoizedState={dehydrated:b,treeContext:Ja!==null?{id:Vi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},I=Kn(18,null,null,0),I.stateNode=b,I.return=n,n.child=I,zn=n,$e=null,I=!0):I=!1}I||es(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return qf(b)?n.lanes=32:n.lanes=536870912,null;Yi(n)}return b=r.children,r=r.fallback,u?(xa(),u=n.mode,b=Bl({mode:"hidden",children:b},u),r=Qa(r,u,a,null),b.return=n,r.return=n,b.sibling=r,n.child=b,u=n.child,u.memoizedState=lf(a),u.childLanes=cf(e,x,a),n.memoizedState=of,r):(ya(n),uf(n,b))}if(I=e.memoizedState,I!==null&&(b=I.dehydrated,b!==null)){if(f)n.flags&256?(ya(n),n.flags&=-257,n=ff(e,n,a)):n.memoizedState!==null?(xa(),n.child=e.child,n.flags|=128,n=null):(xa(),u=r.fallback,b=n.mode,r=Bl({mode:"visible",children:r.children},b),u=Qa(u,b,a,null),u.flags|=2,r.return=n,u.return=n,r.sibling=u,n.child=r,js(n,e.child,null,a),r=n.child,r.memoizedState=lf(a),r.childLanes=cf(e,x,a),n.memoizedState=of,n=u);else if(ya(n),qf(b)){if(x=b.nextSibling&&b.nextSibling.dataset,x)var $=x.dgst;x=$,r=Error(s(419)),r.stack="",r.digest=x,Qr({value:r,source:null,stack:null}),n=ff(e,n,a)}else if(gn||Jr(e,n,a,!1),x=(a&e.childLanes)!==0,gn||x){if(x=We,x!==null&&(r=a&-a,r=(r&42)!==0?1:re(r),r=(r&(x.suspendedLanes|a))!==0?0:r,r!==0&&r!==I.retryLane))throw I.retryLane=r,Bs(e,r),ei(x,e,r),qm;b.data==="$?"||Cf(),n=ff(e,n,a)}else b.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,$e=xi(b.nextSibling),zn=n,De=!0,ts=null,wi=!1,e!==null&&(li[ci++]=Vi,li[ci++]=ki,li[ci++]=Ja,Vi=e.id,ki=e.overflow,Ja=n),n=uf(n,r.children),n.flags|=4096);return n}return u?(xa(),u=r.fallback,b=n.mode,I=e.child,$=I.sibling,r=Gi(I,{mode:"hidden",children:r.children}),r.subtreeFlags=I.subtreeFlags&65011712,$!==null?u=Gi($,u):(u=Qa(u,b,a,null),u.flags|=2),u.return=n,r.return=n,r.sibling=u,n.child=r,r=u,u=n.child,b=e.child.memoizedState,b===null?b=lf(a):(I=b.cachePool,I!==null?($=un._currentValue,I=I.parent!==$?{parent:$,pool:$}:I):I=Gp(),b={baseLanes:b.baseLanes|a,cachePool:I}),u.memoizedState=b,u.childLanes=cf(e,x,a),n.memoizedState=of,r):(ya(n),a=e.child,e=a.sibling,a=Gi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function uf(e,n){return n=Bl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Bl(e,n){return e=Kn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ff(e,n,a){return js(n,e.child,null,a),e=uf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function n_(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),wu(e.return,n,a)}function hf(e,n,a,r,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=r,f.tail=a,f.tailMode=u)}function i_(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;if(Mn(e,n,r.children,a),r=fn.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&n_(e,a,n);else if(e.tag===19)n_(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(St(fn,r),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Nl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),hf(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Nl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}hf(n,!0,a,null,f);break;case"together":hf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ji(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Jr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Gi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Gi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function df(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&gl(e)))}function wy(e,n,a){switch(n.tag){case 3:Ut(n,n.stateNode.containerInfo),pa(n,un,e.memoizedState.cache),Kr();break;case 27:case 5:ae(n);break;case 4:Ut(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(ya(n),n.flags|=128,null):(a&n.child.childLanes)!==0?e_(e,n,a):(ya(n),e=ji(e,n,a),e!==null?e.sibling:null);ya(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Jr(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return i_(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(fn,fn.current),r)break;return null;case 22:case 23:return n.lanes=0,Km(e,n,a);case 24:pa(n,un,e.memoizedState.cache)}return ji(e,n,a)}function a_(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)gn=!0;else{if(!df(e,a)&&(n.flags&128)===0)return gn=!1,wy(e,n,a);gn=(e.flags&131072)!==0}else gn=!1,De&&(n.flags&1048576)!==0&&Op(n,_l,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var r=n.elementType,u=r._init;if(r=u(r._payload),n.type=r,typeof r=="function")Su(r)?(e=rs(r,e),n.tag=1,n=$m(null,n,r,e,a)):(n.tag=0,n=rf(null,n,r,e,a));else{if(r!=null){if(u=r.$$typeof,u===w){n.tag=11,n=Ym(null,n,r,e,a);break t}else if(u===H){n.tag=14,n=jm(null,n,r,e,a);break t}}throw n=lt(r)||r,Error(s(306,n,""))}}return n;case 0:return rf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=rs(r,n.pendingProps),$m(e,n,r,u,a);case 3:t:{if(Ut(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Pu(e,n),so(n,r,null,a);var x=n.memoizedState;if(r=x.cache,pa(n,un,r),r!==f.cache&&Cu(n,[un],a,!0),ao(),r=x.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=t_(e,n,r,a);break t}else if(r!==u){u=ri(Error(s(424)),n),Qr(u),n=t_(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=xi(e.firstChild),zn=n,De=!0,ts=null,wi=!0,a=zm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Kr(),r===u){n=ji(e,n,a);break t}Mn(e,n,r,a)}n=n.child}return n;case 26:return zl(e,n),e===null?(a=lg(n.type,null,n.pendingProps,null))?n.memoizedState=a:De||(a=n.type,e=n.pendingProps,r=Ql(pt.current).createElement(a),r[cn]=n,r[Qe]=e,Tn(r,a,e),an(r),n.stateNode=r):n.memoizedState=lg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ae(n),e===null&&De&&(r=n.stateNode=sg(n.type,n.pendingProps,pt.current),zn=n,wi=!0,u=$e,Ca(n.type)?(Yf=u,$e=xi(r.firstChild)):$e=u),Mn(e,n,n.pendingProps.children,a),zl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&De&&((u=r=$e)&&(r=nx(r,n.type,n.pendingProps,wi),r!==null?(n.stateNode=r,zn=n,$e=xi(r.firstChild),wi=!1,u=!0):u=!1),u||es(n)),ae(n),u=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,r=f.children,kf(u,f)?r=null:x!==null&&kf(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Gu(e,n,xy,null,null,a),wo._currentValue=u),zl(e,n),Mn(e,n,r,a),n.child;case 6:return e===null&&De&&((e=a=$e)&&(a=ix(a,n.pendingProps,wi),a!==null?(n.stateNode=a,zn=n,$e=null,e=!0):e=!1),e||es(n)),null;case 13:return e_(e,n,a);case 4:return Ut(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=js(n,null,r,a):Mn(e,n,r,a),n.child;case 11:return Ym(e,n,n.type,n.pendingProps,a);case 7:return Mn(e,n,n.pendingProps,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,pa(n,n.type,r.value),Mn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,is(n),u=Cn(u),r=r(u),n.flags|=1,Mn(e,n,r,a),n.child;case 14:return jm(e,n,n.type,n.pendingProps,a);case 15:return Zm(e,n,n.type,n.pendingProps,a);case 19:return i_(e,n,a);case 31:return r=n.pendingProps,a=n.mode,r={mode:r.mode,children:r.children},e===null?(a=Bl(r,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Gi(e.child,r),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Km(e,n,a);case 24:return is(n),r=Cn(un),e===null?(u=Lu(),u===null&&(u=We,f=Du(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Ou(n),pa(n,un,u)):((e.lanes&a)!==0&&(Pu(e,n),so(n,null,null,a),ao()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),pa(n,un,r)):(r=f.cache,pa(n,un,r),r!==u.cache&&Cu(n,[un],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Zi(e){e.flags|=4}function s_(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!dg(n)){if(n=ui.current,n!==null&&((Te&4194048)===Te?Ci!==null:(Te&62914560)!==Te&&(Te&536870912)===0||n!==Ci))throw no=Nu,Vp;e.flags|=8192}}function Il(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?At():536870912,e.lanes|=n,Js|=n)}function ho(e,n){if(!De)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Cy(e,n,a){var r=n.pendingProps;switch(bu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Wi(un),Xt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zr(n)?Zi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Bp())),Ke(n),null;case 26:return a=n.memoizedState,e===null?(Zi(n),a!==null?(Ke(n),s_(n,a)):(Ke(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Zi(n),Ke(n),s_(n,a)):(Ke(n),n.flags&=-16777217):(e.memoizedProps!==r&&Zi(n),Ke(n),n.flags&=-16777217),null;case 27:Ce(n),a=pt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Zi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}e=Rt.current,Zr(n)?Pp(n):(e=sg(u,r,a),n.stateNode=e,Zi(n))}return Ke(n),null;case 5:if(Ce(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Zi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(e=Rt.current,Zr(n))Pp(n);else{switch(u=Ql(pt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?u.createElement("select",{is:r.is}):u.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?u.createElement(a,{is:r.is}):u.createElement(a)}}e[cn]=n,e[Qe]=r;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Tn(e,a,r),a){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Zi(n)}}return Ke(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Zi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=pt.current,Zr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=zn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||J_(e.nodeValue,a)),e||es(n)}else e=Ql(e).createTextNode(r),e[cn]=n,n.stateNode=e}return Ke(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Zr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else Kr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=Bp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Yi(n),n):(Yi(n),null)}if(Yi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=r!==null,e=e!==null&&e.memoizedState!==null,a){r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool);var f=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Il(n,n.updateQueue),Ke(n),null;case 4:return Xt(),e===null&&If(n.stateNode.containerInfo),Ke(n),null;case 10:return Wi(n.type),Ke(n),null;case 19:if(yt(fn),u=n.memoizedState,u===null)return Ke(n),null;if(r=(n.flags&128)!==0,f=u.rendering,f===null)if(r)ho(u,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Nl(e),f!==null){for(n.flags|=128,ho(u,!1),e=f.updateQueue,n.updateQueue=e,Il(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Np(a,e),a=a.sibling;return St(fn,fn.current&1|2),n.child}e=e.sibling}u.tail!==null&&zt()>Gl&&(n.flags|=128,r=!0,ho(u,!1),n.lanes=4194304)}else{if(!r)if(e=Nl(f),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,Il(n,e),ho(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!De)return Ke(n),null}else 2*zt()-u.renderingStartTime>Gl&&a!==536870912&&(n.flags|=128,r=!0,ho(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=zt(),n.sibling=null,e=fn.current,St(fn,r?e&1|2:e&1),n):(Ke(n),null);case 22:case 23:return Yi(n),Fu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Il(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&yt(as),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wi(un),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Dy(e,n){switch(bu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Wi(un),Xt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ce(n),null;case 13:if(Yi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Kr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return yt(fn),null;case 4:return Xt(),null;case 10:return Wi(n.type),null;case 22:case 23:return Yi(n),Fu(),e!==null&&yt(as),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Wi(un),null;case 25:return null;default:return null}}function r_(e,n){switch(bu(n),n.tag){case 3:Wi(un),Xt();break;case 26:case 27:case 5:Ce(n);break;case 4:Xt();break;case 13:Yi(n);break;case 19:yt(fn);break;case 10:Wi(n.type);break;case 22:case 23:Yi(n),Fu(),e!==null&&yt(as);break;case 24:Wi(un)}}function po(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,x=a.inst;r=f(),x.destroy=r}a=a.next}while(a!==u)}}catch(b){Xe(n,n.return,b)}}function Sa(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var x=r.inst,b=x.destroy;if(b!==void 0){x.destroy=void 0,u=n;var I=a,$=b;try{$()}catch(dt){Xe(u,I,dt)}}}r=r.next}while(r!==f)}}catch(dt){Xe(n,n.return,dt)}}function o_(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{jp(n,a)}catch(r){Xe(e,e.return,r)}}}function l_(e,n,a){a.props=rs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Xe(e,n,r)}}function mo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Xe(e,n,u)}}function Di(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Xe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Xe(e,n,u)}else a.current=null}function c_(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Xe(e,e.return,u)}}function pf(e,n,a){try{var r=e.stateNode;Qy(r,e.type,a,n),r[Qe]=n}catch(u){Xe(e,e.return,u)}}function u_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ca(e.type)||e.tag===4}function mf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||u_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _f(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Kl));else if(r!==4&&(r===27&&Ca(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(_f(e,n,a),e=e.sibling;e!==null;)_f(e,n,a),e=e.sibling}function Fl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Ca(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Fl(e,n,a),e=e.sibling;e!==null;)Fl(e,n,a),e=e.sibling}function f_(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Tn(n,r,a),n[cn]=e,n[Qe]=a}catch(f){Xe(e,e.return,f)}}var Ki=!1,nn=!1,gf=!1,h_=typeof WeakSet=="function"?WeakSet:Set,vn=null;function Uy(e,n){if(e=e.containerInfo,Gf=ic,e=Ep(e),pu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,b=-1,I=-1,$=0,dt=0,_t=e,it=null;e:for(;;){for(var at;_t!==a||u!==0&&_t.nodeType!==3||(b=x+u),_t!==f||r!==0&&_t.nodeType!==3||(I=x+r),_t.nodeType===3&&(x+=_t.nodeValue.length),(at=_t.firstChild)!==null;)it=_t,_t=at;for(;;){if(_t===e)break e;if(it===a&&++$===u&&(b=x),it===f&&++dt===r&&(I=x),(at=_t.nextSibling)!==null)break;_t=it,it=_t.parentNode}_t=at}a=b===-1||I===-1?null:{start:b,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vf={focusedElem:e,selectionRange:a},ic=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var se=rs(a.type,u,a.elementType===a.type);e=r.getSnapshotBeforeUpdate(se,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Xe(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Wf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Wf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function d_(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ma(e,a),r&4&&po(5,a);break;case 1:if(Ma(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Xe(a,a.return,x)}else{var u=rs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Xe(a,a.return,x)}}r&64&&o_(a),r&512&&mo(a,a.return);break;case 3:if(Ma(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{jp(e,n)}catch(x){Xe(a,a.return,x)}}break;case 27:n===null&&r&4&&f_(a);case 26:case 5:Ma(e,a),n===null&&r&4&&c_(a),r&512&&mo(a,a.return);break;case 12:Ma(e,a);break;case 13:Ma(e,a),r&4&&__(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Hy.bind(null,a),ax(e,a))));break;case 22:if(r=a.memoizedState!==null||Ki,!r){n=n!==null&&n.memoizedState!==null||nn,u=Ki;var f=nn;Ki=r,(nn=n)&&!f?Ea(e,a,(a.subtreeFlags&8772)!==0):Ma(e,a),Ki=u,nn=f}break;case 30:break;default:Ma(e,a)}}function p_(e){var n=e.alternate;n!==null&&(e.alternate=null,p_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Cs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,Xn=!1;function Qi(e,n,a){for(a=a.child;a!==null;)m_(e,n,a),a=a.sibling}function m_(e,n,a){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(ht,a)}catch{}switch(a.tag){case 26:nn||Di(a,n),Qi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:nn||Di(a,n);var r=Ze,u=Xn;Ca(a.type)&&(Ze=a.stateNode,Xn=!1),Qi(e,n,a),To(a.stateNode),Ze=r,Xn=u;break;case 5:nn||Di(a,n);case 6:if(r=Ze,u=Xn,Ze=null,Qi(e,n,a),Ze=r,Xn=u,Ze!==null)if(Xn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(f){Xe(a,n,f)}else try{Ze.removeChild(a.stateNode)}catch(f){Xe(a,n,f)}break;case 18:Ze!==null&&(Xn?(e=Ze,ig(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Lo(e)):ig(Ze,a.stateNode));break;case 4:r=Ze,u=Xn,Ze=a.stateNode.containerInfo,Xn=!0,Qi(e,n,a),Ze=r,Xn=u;break;case 0:case 11:case 14:case 15:nn||Sa(2,a,n),nn||Sa(4,a,n),Qi(e,n,a);break;case 1:nn||(Di(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&l_(a,n,r)),Qi(e,n,a);break;case 21:Qi(e,n,a);break;case 22:nn=(r=nn)||a.memoizedState!==null,Qi(e,n,a),nn=r;break;default:Qi(e,n,a)}}function __(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Lo(e)}catch(a){Xe(n,n.return,a)}}function Ly(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new h_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new h_),n;default:throw Error(s(435,e.tag))}}function vf(e,n){var a=Ly(e);n.forEach(function(r){var u=Gy.bind(null,e,r);a.has(r)||(a.add(r),r.then(u,u))})}function Qn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,x=n,b=x;t:for(;b!==null;){switch(b.tag){case 27:if(Ca(b.type)){Ze=b.stateNode,Xn=!1;break t}break;case 5:Ze=b.stateNode,Xn=!1;break t;case 3:case 4:Ze=b.stateNode.containerInfo,Xn=!0;break t}b=b.return}if(Ze===null)throw Error(s(160));m_(f,x,u),Ze=null,Xn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)g_(n,e),n=n.sibling}var yi=null;function g_(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qn(n,e),Jn(e),r&4&&(Sa(3,e,e.return),po(3,e),Sa(5,e,e.return));break;case 1:Qn(n,e),Jn(e),r&512&&(nn||a===null||Di(a,a.return)),r&64&&Ki&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=yi;if(Qn(n,e),Jn(e),r&512&&(nn||a===null||Di(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ri]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Tn(f,r,a),f[cn]=e,an(f),r=f;break t;case"link":var x=fg("link","href",u).get(r+(a.href||""));if(x){for(var b=0;b<x.length;b++)if(f=x[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(b,1);break e}}f=u.createElement(r),Tn(f,r,a),u.head.appendChild(f);break;case"meta":if(x=fg("meta","content",u).get(r+(a.content||""))){for(b=0;b<x.length;b++)if(f=x[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(b,1);break e}}f=u.createElement(r),Tn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[cn]=e,an(f),r=f}e.stateNode=r}else hg(u,e.type,e.stateNode);else e.stateNode=ug(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?hg(u,e.type,e.stateNode):ug(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&pf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Qn(n,e),Jn(e),r&512&&(nn||a===null||Di(a,a.return)),a!==null&&r&4&&pf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Qn(n,e),Jn(e),r&512&&(nn||a===null||Di(a,a.return)),e.flags&32){u=e.stateNode;try{Gn(u,"")}catch(at){Xe(e,e.return,at)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,pf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(gf=!0);break;case 6:if(Qn(n,e),Jn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(at){Xe(e,e.return,at)}}break;case 3:if(tc=null,u=yi,yi=Jl(n.containerInfo),Qn(n,e),yi=u,Jn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Lo(n.containerInfo)}catch(at){Xe(e,e.return,at)}gf&&(gf=!1,v_(e));break;case 4:r=yi,yi=Jl(e.stateNode.containerInfo),Qn(n,e),Jn(e),yi=r;break;case 12:Qn(n,e),Jn(e);break;case 13:Qn(n,e),Jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Tf=zt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,vf(e,r)));break;case 22:u=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,$=Ki,dt=nn;if(Ki=$||u,nn=dt||I,Qn(n,e),nn=dt,Ki=$,Jn(e),r&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||Ki||nn||os(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{b=I.stateNode;var _t=I.memoizedProps.style,it=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;b.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(at){Xe(I,I.return,at)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(at){Xe(I,I.return,at)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,vf(e,a))));break;case 19:Qn(n,e),Jn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,vf(e,r)));break;case 30:break;case 21:break;default:Qn(n,e),Jn(e)}}function Jn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(u_(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=mf(e);Fl(e,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(Gn(x,""),a.flags&=-33);var b=mf(e);Fl(e,b,x);break;case 3:case 4:var I=a.stateNode.containerInfo,$=mf(e);_f(e,$,I);break;default:throw Error(s(161))}}catch(dt){Xe(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function v_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;v_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ma(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)d_(e,n.alternate,n),n=n.sibling}function os(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),os(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&l_(n,n.return,a),os(n);break;case 27:To(n.stateNode);case 26:case 5:Di(n,n.return),os(n);break;case 22:n.memoizedState===null&&os(n);break;case 30:os(n);break;default:os(n)}e=e.sibling}}function Ea(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:Ea(u,f,a),po(4,f);break;case 1:if(Ea(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Xe(r,r.return,$)}if(r=f,u=r.updateQueue,u!==null){var b=r.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)Yp(I[u],b)}catch($){Xe(r,r.return,$)}}a&&x&64&&o_(f),mo(f,f.return);break;case 27:f_(f);case 26:case 5:Ea(u,f,a),a&&r===null&&x&4&&c_(f),mo(f,f.return);break;case 12:Ea(u,f,a);break;case 13:Ea(u,f,a),a&&x&4&&__(u,f);break;case 22:f.memoizedState===null&&Ea(u,f,a),mo(f,f.return);break;case 30:break;default:Ea(u,f,a)}n=n.sibling}}function yf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$r(a))}function xf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$r(e))}function Ui(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)y_(e,n,a,r),n=n.sibling}function y_(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ui(e,n,a,r),u&2048&&po(9,n);break;case 1:Ui(e,n,a,r);break;case 3:Ui(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$r(e)));break;case 12:if(u&2048){Ui(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,b=f.onPostCommit;typeof b=="function"&&b(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Xe(n,n.return,I)}}else Ui(e,n,a,r);break;case 13:Ui(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Ui(e,n,a,r):_o(e,n):f._visibility&2?Ui(e,n,a,r):(f._visibility|=2,Zs(e,n,a,r,(n.subtreeFlags&10256)!==0)),u&2048&&yf(x,n);break;case 24:Ui(e,n,a,r),u&2048&&xf(n.alternate,n);break;default:Ui(e,n,a,r)}}function Zs(e,n,a,r,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,x=n,b=a,I=r,$=x.flags;switch(x.tag){case 0:case 11:case 15:Zs(f,x,b,I,u),po(8,x);break;case 23:break;case 22:var dt=x.stateNode;x.memoizedState!==null?dt._visibility&2?Zs(f,x,b,I,u):_o(f,x):(dt._visibility|=2,Zs(f,x,b,I,u)),u&&$&2048&&yf(x.alternate,x);break;case 24:Zs(f,x,b,I,u),u&&$&2048&&xf(x.alternate,x);break;default:Zs(f,x,b,I,u)}n=n.sibling}}function _o(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:_o(a,r),u&2048&&yf(r.alternate,r);break;case 24:_o(a,r),u&2048&&xf(r.alternate,r);break;default:_o(a,r)}n=n.sibling}}var go=8192;function Ks(e){if(e.subtreeFlags&go)for(e=e.child;e!==null;)x_(e),e=e.sibling}function x_(e){switch(e.tag){case 26:Ks(e),e.flags&go&&e.memoizedState!==null&&gx(yi,e.memoizedState,e.memoizedProps);break;case 5:Ks(e);break;case 3:case 4:var n=yi;yi=Jl(e.stateNode.containerInfo),Ks(e),yi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=go,go=16777216,Ks(e),go=n):Ks(e));break;default:Ks(e)}}function S_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function vo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,E_(r,e)}S_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)M_(e),e=e.sibling}function M_(e){switch(e.tag){case 0:case 11:case 15:vo(e),e.flags&2048&&Sa(9,e,e.return);break;case 3:vo(e);break;case 12:vo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Hl(e)):vo(e);break;default:vo(e)}}function Hl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,E_(r,e)}S_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),Hl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Hl(n));break;default:Hl(n)}e=e.sibling}}function E_(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:$r(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,vn=r;else t:for(a=e;vn!==null;){r=vn;var u=r.sibling,f=r.return;if(p_(r),r===a){vn=null;break t}if(u!==null){u.return=f,vn=u;break t}vn=f}}}var Ny={getCacheForType:function(e){var n=Cn(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Oy=typeof WeakMap=="function"?WeakMap:Map,Ne=0,We=null,ye=null,Te=0,Oe=0,$n=null,Ta=!1,Qs=!1,Sf=!1,Ji=0,tn=0,ba=0,ls=0,Mf=0,fi=0,Js=0,yo=null,Wn=null,Ef=!1,Tf=0,Gl=1/0,Vl=null,Aa=null,En=0,Ra=null,$s=null,tr=0,bf=0,Af=null,T_=null,xo=0,Rf=null;function ti(){if((Ne&2)!==0&&Te!==0)return Te&-Te;if(z.T!==null){var e=Gs;return e!==0?e:Of()}return be()}function b_(){fi===0&&(fi=(Te&536870912)===0||De?X():536870912);var e=ui.current;return e!==null&&(e.flags|=32),fi}function ei(e,n,a){(e===We&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(er(e,0),wa(e,Te,fi,!1)),Ft(e,a),((Ne&2)===0||e!==We)&&(e===We&&((Ne&2)===0&&(ls|=a),tn===4&&wa(e,Te,fi,!1)),Li(e))}function A_(e,n,a){if((Ne&6)!==0)throw Error(s(327));var r=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Dt(e,n),u=r?By(e,n):Df(e,n,!0),f=r;do{if(u===0){Qs&&!r&&wa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Py(a)){u=Df(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var b=e;u=yo;var I=b.current.memoizedState.isDehydrated;if(I&&(er(b,x).flags|=256),x=Df(b,x,!1),x!==2){if(Sf&&!I){b.errorRecoveryDisabledLanes|=f,ls|=f,u=4;break t}f=Wn,Wn=u,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){er(e,0),wa(e,n,0,!0);break}t:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:wa(r,n,fi,!Ta);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Tf+300-zt(),10<u)){if(wa(r,n,fi,!Ta),kt(r,0,!0)!==0)break t;r.timeoutHandle=eg(R_.bind(null,r,a,Wn,Vl,Ef,n,fi,ls,Js,Ta,f,2,-0,0),u);break t}R_(r,a,Wn,Vl,Ef,n,fi,ls,Js,Ta,f,0,-0,0)}}break}while(!0);Li(e)}function R_(e,n,a,r,u,f,x,b,I,$,dt,_t,it,at){if(e.timeoutHandle=-1,_t=n.subtreeFlags,(_t&8192||(_t&16785408)===16785408)&&(Ro={stylesheets:null,count:0,unsuspend:_x},x_(n),_t=vx(),_t!==null)){e.cancelPendingCommit=_t(O_.bind(null,e,n,f,a,r,u,x,b,I,dt,1,it,at)),wa(e,f,x,!$);return}O_(e,n,f,a,r,u,x,b,I)}function Py(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Zn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wa(e,n,a,r){n&=~Mf,n&=~ls,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-It(u),x=1<<f;r[f]=-1,u&=~x}a!==0&&gt(e,a,n)}function kl(){return(Ne&6)===0?(So(0),!1):!0}function wf(){if(ye!==null){if(Oe===0)var e=ye.return;else e=ye,Xi=ns=null,Xu(e),Ys=null,uo=0,e=ye;for(;e!==null;)r_(e.alternate,e),e=e.return;ye=null}}function er(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,$y(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),wf(),We=e,ye=a=Gi(e.current,null),Te=n,Oe=0,$n=null,Ta=!1,Qs=Dt(e,n),Sf=!1,Js=fi=Mf=ls=ba=tn=0,Wn=yo=null,Ef=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-It(r),f=1<<u;n|=e[u],r&=~f}return Ji=n,fl(),a}function w_(e,n){me=null,z.H=Dl,n===eo||n===xl?(n=Wp(),Oe=3):n===Vp?(n=Wp(),Oe=4):Oe=n===qm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,ye===null&&(tn=1,Pl(e,ri(n,e.current)))}function C_(){var e=z.H;return z.H=Dl,e===null?Dl:e}function D_(){var e=z.A;return z.A=Ny,e}function Cf(){tn=4,Ta||(Te&4194048)!==Te&&ui.current!==null||(Qs=!0),(ba&134217727)===0&&(ls&134217727)===0||We===null||wa(We,Te,fi,!1)}function Df(e,n,a){var r=Ne;Ne|=2;var u=C_(),f=D_();(We!==e||Te!==n)&&(Vl=null,er(e,n)),n=!1;var x=tn;t:do try{if(Oe!==0&&ye!==null){var b=ye,I=$n;switch(Oe){case 8:wf(),x=6;break t;case 3:case 2:case 9:case 6:ui.current===null&&(n=!0);var $=Oe;if(Oe=0,$n=null,nr(e,b,I,$),a&&Qs){x=0;break t}break;default:$=Oe,Oe=0,$n=null,nr(e,b,I,$)}}zy(),x=tn;break}catch(dt){w_(e,dt)}while(!0);return n&&e.shellSuspendCounter++,Xi=ns=null,Ne=r,z.H=u,z.A=f,ye===null&&(We=null,Te=0,fl()),x}function zy(){for(;ye!==null;)U_(ye)}function By(e,n){var a=Ne;Ne|=2;var r=C_(),u=D_();We!==e||Te!==n?(Vl=null,Gl=zt()+500,er(e,n)):Qs=Dt(e,n);t:do try{if(Oe!==0&&ye!==null){n=ye;var f=$n;e:switch(Oe){case 1:Oe=0,$n=null,nr(e,n,f,1);break;case 2:case 9:if(kp(f)){Oe=0,$n=null,L_(n);break}n=function(){Oe!==2&&Oe!==9||We!==e||(Oe=7),Li(e)},f.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:kp(f)?(Oe=0,$n=null,L_(n)):(Oe=0,$n=null,nr(e,n,f,7));break;case 5:var x=null;switch(ye.tag){case 26:x=ye.memoizedState;case 5:case 27:var b=ye;if(!x||dg(x)){Oe=0,$n=null;var I=b.sibling;if(I!==null)ye=I;else{var $=b.return;$!==null?(ye=$,Xl($)):ye=null}break e}}Oe=0,$n=null,nr(e,n,f,5);break;case 6:Oe=0,$n=null,nr(e,n,f,6);break;case 8:wf(),tn=6;break t;default:throw Error(s(462))}}Iy();break}catch(dt){w_(e,dt)}while(!0);return Xi=ns=null,z.H=r,z.A=u,Ne=a,ye!==null?0:(We=null,Te=0,fl(),tn)}function Iy(){for(;ye!==null&&!Kt();)U_(ye)}function U_(e){var n=a_(e.alternate,e,Ji);e.memoizedProps=e.pendingProps,n===null?Xl(e):ye=n}function L_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Jm(a,n,n.pendingProps,n.type,void 0,Te);break;case 11:n=Jm(a,n,n.pendingProps,n.type.render,n.ref,Te);break;case 5:Xu(n);default:r_(a,n),n=ye=Np(n,Ji),n=a_(a,n,Ji)}e.memoizedProps=e.pendingProps,n===null?Xl(e):ye=n}function nr(e,n,a,r){Xi=ns=null,Xu(n),Ys=null,uo=0;var u=n.return;try{if(Ry(e,u,n,a,Te)){tn=1,Pl(e,ri(a,e.current)),ye=null;return}}catch(f){if(u!==null)throw ye=u,f;tn=1,Pl(e,ri(a,e.current)),ye=null;return}n.flags&32768?(De||r===1?e=!0:Qs||(Te&536870912)!==0?e=!1:(Ta=e=!0,(r===2||r===9||r===3||r===6)&&(r=ui.current,r!==null&&r.tag===13&&(r.flags|=16384))),N_(n,e)):Xl(n)}function Xl(e){var n=e;do{if((n.flags&32768)!==0){N_(n,Ta);return}e=n.return;var a=Cy(n.alternate,n,Ji);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);tn===0&&(tn=5)}function N_(e,n){do{var a=Dy(e.alternate,e);if(a!==null){a.flags&=32767,ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ye=e;return}ye=e=a}while(e!==null);tn=6,ye=null}function O_(e,n,a,r,u,f,x,b,I){e.cancelPendingCommit=null;do Wl();while(En!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=yu,Tt(e,a,f,x,b,I),e===We&&(ye=We=null,Te=0),$s=n,Ra=e,tr=a,bf=f,Af=u,T_=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Vy(le,function(){return F_(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,u=K.p,K.p=2,x=Ne,Ne|=4;try{Uy(e,n,a)}finally{Ne=x,K.p=u,z.T=r}}En=1,P_(),z_(),B_()}}function P_(){if(En===1){En=0;var e=Ra,n=$s,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var r=K.p;K.p=2;var u=Ne;Ne|=4;try{g_(n,e);var f=Vf,x=Ep(e.containerInfo),b=f.focusedElem,I=f.selectionRange;if(x!==b&&b&&b.ownerDocument&&Mp(b.ownerDocument.documentElement,b)){if(I!==null&&pu(b)){var $=I.start,dt=I.end;if(dt===void 0&&(dt=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(dt,b.value.length);else{var _t=b.ownerDocument||document,it=_t&&_t.defaultView||window;if(it.getSelection){var at=it.getSelection(),se=b.textContent.length,ee=Math.min(I.start,se),Ie=I.end===void 0?ee:Math.min(I.end,se);!at.extend&&ee>Ie&&(x=Ie,Ie=ee,ee=x);var j=Sp(b,ee),k=Sp(b,Ie);if(j&&k&&(at.rangeCount!==1||at.anchorNode!==j.node||at.anchorOffset!==j.offset||at.focusNode!==k.node||at.focusOffset!==k.offset)){var Q=_t.createRange();Q.setStart(j.node,j.offset),at.removeAllRanges(),ee>Ie?(at.addRange(Q),at.extend(k.node,k.offset)):(Q.setEnd(k.node,k.offset),at.addRange(Q))}}}}for(_t=[],at=b;at=at.parentNode;)at.nodeType===1&&_t.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<_t.length;b++){var mt=_t[b];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}ic=!!Gf,Vf=Gf=null}finally{Ne=u,K.p=r,z.T=a}}e.current=n,En=2}}function z_(){if(En===2){En=0;var e=Ra,n=$s,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var r=K.p;K.p=2;var u=Ne;Ne|=4;try{d_(e,n.alternate,n)}finally{Ne=u,K.p=r,z.T=a}}En=3}}function B_(){if(En===4||En===3){En=0,ge();var e=Ra,n=$s,a=tr,r=T_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,$s=Ra=null,I_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Aa=null),Ue(a),n=n.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(ht,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=z.T,u=K.p,K.p=2,z.T=null;try{for(var f=e.onRecoverableError,x=0;x<r.length;x++){var b=r[x];f(b.value,{componentStack:b.stack})}}finally{z.T=n,K.p=u}}(tr&3)!==0&&Wl(),Li(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Rf?xo++:(xo=0,Rf=e):xo=0,So(0)}}function I_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,$r(n)))}function Wl(e){return P_(),z_(),B_(),F_()}function F_(){if(En!==5)return!1;var e=Ra,n=bf;bf=0;var a=Ue(tr),r=z.T,u=K.p;try{K.p=32>a?32:a,z.T=null,a=Af,Af=null;var f=Ra,x=tr;if(En=0,$s=Ra=null,tr=0,(Ne&6)!==0)throw Error(s(331));var b=Ne;if(Ne|=4,M_(f.current),y_(f,f.current,x,a),Ne=b,So(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(ht,f)}catch{}return!0}finally{K.p=u,z.T=r,I_(e,n)}}function H_(e,n,a){n=ri(a,n),n=sf(e.stateNode,n,2),e=ga(e,n,2),e!==null&&(Ft(e,2),Li(e))}function Xe(e,n,a){if(e.tag===3)H_(e,e,a);else for(;n!==null;){if(n.tag===3){H_(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Aa===null||!Aa.has(r))){e=ri(a,e),a=Xm(2),r=ga(n,a,2),r!==null&&(Wm(a,r,n,e),Ft(r,2),Li(r));break}}n=n.return}}function Uf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Oy;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Sf=!0,u.add(a),e=Fy.bind(null,e,n,a),n.then(e,e))}function Fy(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(Te&a)===a&&(tn===4||tn===3&&(Te&62914560)===Te&&300>zt()-Tf?(Ne&2)===0&&er(e,0):Mf|=a,Js===Te&&(Js=0)),Li(e)}function G_(e,n){n===0&&(n=At()),e=Bs(e,n),e!==null&&(Ft(e,n),Li(e))}function Hy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),G_(e,a)}function Gy(e,n){var a=0;switch(e.tag){case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),G_(e,a)}function Vy(e,n){return G(e,n)}var ql=null,ir=null,Lf=!1,Yl=!1,Nf=!1,cs=0;function Li(e){e!==ir&&e.next===null&&(ir===null?ql=ir=e:ir=ir.next=e),Yl=!0,Lf||(Lf=!0,Xy())}function So(e,n){if(!Nf&&Yl){Nf=!0;do for(var a=!1,r=ql;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var x=r.suspendedLanes,b=r.pingedLanes;f=(1<<31-It(42|e)+1)-1,f&=u&~(x&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,W_(r,f))}else f=Te,f=kt(r,r===We?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Dt(r,f)||(a=!0,W_(r,f));r=r.next}while(a);Nf=!1}}function ky(){V_()}function V_(){Yl=Lf=!1;var e=0;cs!==0&&(Jy()&&(e=cs),cs=0);for(var n=zt(),a=null,r=ql;r!==null;){var u=r.next,f=k_(r,n);f===0?(r.next=null,a===null?ql=u:a.next=u,u===null&&(ir=a)):(a=r,(e!==0||(f&3)!==0)&&(Yl=!0)),r=u}So(e)}function k_(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-It(f),b=1<<x,I=u[x];I===-1?((b&a)===0||(b&r)!==0)&&(u[x]=oe(b,n)):I<=n&&(e.expiredLanes|=b),f&=~b}if(n=We,a=Te,a=kt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ee(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Ee(r),Ue(a)){case 2:case 8:a=Bt;break;case 32:a=le;break;case 268435456:a=N;break;default:a=le}return r=X_.bind(null,e),a=G(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Ee(r),e.callbackPriority=2,e.callbackNode=null,2}function X_(e,n){if(En!==0&&En!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Wl()&&e.callbackNode!==a)return null;var r=Te;return r=kt(e,e===We?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(A_(e,r,n),k_(e,zt()),e.callbackNode!=null&&e.callbackNode===a?X_.bind(null,e):null)}function W_(e,n){if(Wl())return null;A_(e,n,!0)}function Xy(){tx(function(){(Ne&6)!==0?G(ut,ky):V_()})}function Of(){return cs===0&&(cs=X()),cs}function q_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:al(""+e)}function Y_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Wy(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=q_((u[Qe]||null).action),x=r.submitter;x&&(n=(n=x[Qe]||null)?q_(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var b=new ll("action","action",null,r,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(cs!==0){var I=x?Y_(u,x):new FormData(u);$u(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(b.preventDefault(),I=x?Y_(u,x):new FormData(u),$u(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var Pf=0;Pf<vu.length;Pf++){var zf=vu[Pf],qy=zf.toLowerCase(),Yy=zf[0].toUpperCase()+zf.slice(1);vi(qy,"on"+Yy)}vi(Ap,"onAnimationEnd"),vi(Rp,"onAnimationIteration"),vi(wp,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(uy,"onTransitionRun"),vi(fy,"onTransitionStart"),vi(hy,"onTransitionCancel"),vi(Cp,"onTransitionEnd"),q("onMouseEnter",["mouseout","mouseover"]),q("onMouseLeave",["mouseout","mouseover"]),q("onPointerEnter",["pointerout","pointerover"]),q("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function j_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var x=r.length-1;0<=x;x--){var b=r[x],I=b.instance,$=b.currentTarget;if(b=b.listener,I!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=$;try{f(u)}catch(dt){Ol(dt)}u.currentTarget=null,f=I}else for(x=0;x<r.length;x++){if(b=r[x],I=b.instance,$=b.currentTarget,b=b.listener,I!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=$;try{f(u)}catch(dt){Ol(dt)}u.currentTarget=null,f=I}}}}function xe(e,n){var a=n[Rs];a===void 0&&(a=n[Rs]=new Set);var r=e+"__bubble";a.has(r)||(Z_(n,e,2,!1),a.add(r))}function Bf(e,n,a){var r=0;n&&(r|=4),Z_(a,e,r,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function If(e){if(!e[jl]){e[jl]=!0,nl.forEach(function(a){a!=="selectionchange"&&(jy.has(a)||Bf(a,!1,e),Bf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[jl]||(n[jl]=!0,Bf("selectionchange",!1,n))}}function Z_(e,n,a,r){switch(yg(n)){case 2:var u=Sx;break;case 8:u=Mx;break;default:u=Jf}a=u.bind(null,n,a,e),u=void 0,!su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Ff(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var b=r.stateNode.containerInfo;if(b===u)break;if(x===4)for(x=r.return;x!==null;){var I=x.tag;if((I===3||I===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;b!==null;){if(x=Fi(b),x===null)return;if(I=x.tag,I===5||I===6||I===26||I===27){r=f=x;continue t}b=b.parentNode}}r=r.return}np(function(){var $=f,dt=iu(a),_t=[];t:{var it=Dp.get(e);if(it!==void 0){var at=ll,se=e;switch(e){case"keypress":if(rl(a)===0)break t;case"keydown":case"keyup":at=Vv;break;case"focusin":se="focus",at=cu;break;case"focusout":se="blur",at=cu;break;case"beforeblur":case"afterblur":at=cu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=Dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=Wv;break;case Ap:case Rp:case wp:at=Nv;break;case Cp:at=Yv;break;case"scroll":case"scrollend":at=wv;break;case"wheel":at=Zv;break;case"copy":case"cut":case"paste":at=Pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=op;break;case"toggle":case"beforetoggle":at=Qv}var ee=(n&4)!==0,Ie=!ee&&(e==="scroll"||e==="scrollend"),j=ee?it!==null?it+"Capture":null:it;ee=[];for(var k=$,Q;k!==null;){var mt=k;if(Q=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||Q===null||j===null||(mt=Hr(k,j),mt!=null&&ee.push(Eo(k,mt,Q))),Ie)break;k=k.return}0<ee.length&&(it=new at(it,se,null,a,dt),_t.push({event:it,listeners:ee}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",at=e==="mouseout"||e==="pointerout",it&&a!==nu&&(se=a.relatedTarget||a.fromElement)&&(Fi(se)||se[Ai]))break t;if((at||it)&&(it=dt.window===dt?dt:(it=dt.ownerDocument)?it.defaultView||it.parentWindow:window,at?(se=a.relatedTarget||a.toElement,at=$,se=se?Fi(se):null,se!==null&&(Ie=c(se),ee=se.tag,se!==Ie||ee!==5&&ee!==27&&ee!==6)&&(se=null)):(at=null,se=$),at!==se)){if(ee=sp,mt="onMouseLeave",j="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ee=op,mt="onPointerLeave",j="onPointerEnter",k="pointer"),Ie=at==null?it:Ya(at),Q=se==null?it:Ya(se),it=new ee(mt,k+"leave",at,a,dt),it.target=Ie,it.relatedTarget=Q,mt=null,Fi(dt)===$&&(ee=new ee(j,k+"enter",se,a,dt),ee.target=Q,ee.relatedTarget=Ie,mt=ee),Ie=mt,at&&se)e:{for(ee=at,j=se,k=0,Q=ee;Q;Q=ar(Q))k++;for(Q=0,mt=j;mt;mt=ar(mt))Q++;for(;0<k-Q;)ee=ar(ee),k--;for(;0<Q-k;)j=ar(j),Q--;for(;k--;){if(ee===j||j!==null&&ee===j.alternate)break e;ee=ar(ee),j=ar(j)}ee=null}else ee=null;at!==null&&K_(_t,it,at,ee,!1),se!==null&&Ie!==null&&K_(_t,Ie,se,ee,!0)}}t:{if(it=$?Ya($):window,at=it.nodeName&&it.nodeName.toLowerCase(),at==="select"||at==="input"&&it.type==="file")var Gt=mp;else if(dp(it))if(_p)Gt=oy;else{Gt=sy;var _e=ay}else at=it.nodeName,!at||at.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?$&&eu($.elementType)&&(Gt=mp):Gt=ry;if(Gt&&(Gt=Gt(e,$))){pp(_t,Gt,a,dt);break t}_e&&_e(e,it,$),e==="focusout"&&$&&it.type==="number"&&$.memoizedProps.value!=null&&wn(it,"number",it.value)}switch(_e=$?Ya($):window,e){case"focusin":(dp(_e)||_e.contentEditable==="true")&&(Os=_e,mu=$,jr=null);break;case"focusout":jr=mu=Os=null;break;case"mousedown":_u=!0;break;case"contextmenu":case"mouseup":case"dragend":_u=!1,Tp(_t,a,dt);break;case"selectionchange":if(cy)break;case"keydown":case"keyup":Tp(_t,a,dt)}var jt;if(fu)t:{switch(e){case"compositionstart":var ie="onCompositionStart";break t;case"compositionend":ie="onCompositionEnd";break t;case"compositionupdate":ie="onCompositionUpdate";break t}ie=void 0}else Ns?fp(e,a)&&(ie="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ie="onCompositionStart");ie&&(lp&&a.locale!=="ko"&&(Ns||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&Ns&&(jt=ip()):(da=dt,ru="value"in da?da.value:da.textContent,Ns=!0)),_e=Zl($,ie),0<_e.length&&(ie=new rp(ie,e,null,a,dt),_t.push({event:ie,listeners:_e}),jt?ie.data=jt:(jt=hp(a),jt!==null&&(ie.data=jt)))),(jt=$v?ty(e,a):ey(e,a))&&(ie=Zl($,"onBeforeInput"),0<ie.length&&(_e=new rp("onBeforeInput","beforeinput",null,a,dt),_t.push({event:_e,listeners:ie}),_e.data=jt)),Wy(_t,e,$,a,dt)}j_(_t,n)})}function Eo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Zl(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Hr(e,a),u!=null&&r.unshift(Eo(e,u,f)),u=Hr(e,n),u!=null&&r.push(Eo(e,u,f))),e.tag===3)return r;e=e.return}return[]}function ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function K_(e,n,a,r,u){for(var f=n._reactName,x=[];a!==null&&a!==r;){var b=a,I=b.alternate,$=b.stateNode;if(b=b.tag,I!==null&&I===r)break;b!==5&&b!==26&&b!==27||$===null||(I=$,u?($=Hr(a,f),$!=null&&x.unshift(Eo(a,$,I))):u||($=Hr(a,f),$!=null&&x.push(Eo(a,$,I)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var Zy=/\r\n?/g,Ky=/\u0000|\uFFFD/g;function Q_(e){return(typeof e=="string"?e:""+e).replace(Zy,`
`).replace(Ky,"")}function J_(e,n){return n=Q_(n),Q_(e)===n}function Kl(){}function Be(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Gn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Gn(e,""+r);break;case"className":Ht(e,"class",r);break;case"tabIndex":Ht(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ht(e,a,r);break;case"style":tp(e,r,f);break;case"data":if(n!=="object"){Ht(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=al(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Be(e,n,"name",u.name,u,null),Be(e,n,"formEncType",u.formEncType,u,null),Be(e,n,"formMethod",u.formMethod,u,null),Be(e,n,"formTarget",u.formTarget,u,null)):(Be(e,n,"encType",u.encType,u,null),Be(e,n,"method",u.method,u,null),Be(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=al(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Kl);break;case"onScroll":r!=null&&xe("scroll",e);break;case"onScrollEnd":r!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=al(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Lt(e,"popover",r);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Lt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Av.get(a)||a,Lt(e,a,r))}}function Hf(e,n,a,r,u,f){switch(a){case"style":tp(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Gn(e,r):(typeof r=="number"||typeof r=="bigint")&&Gn(e,""+r);break;case"onScroll":r!=null&&xe("scroll",e);break;case"onScrollEnd":r!=null&&xe("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Kl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!il.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Qe]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Lt(e,a,r)}}}function Tn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(e,n,f,x,a,null)}}u&&Be(e,n,"srcSet",a.srcSet,a,null),r&&Be(e,n,"src",a.src,a,null);return;case"input":xe("invalid",e);var b=f=x=u=null,I=null,$=null;for(r in a)if(a.hasOwnProperty(r)){var dt=a[r];if(dt!=null)switch(r){case"name":u=dt;break;case"type":x=dt;break;case"checked":I=dt;break;case"defaultChecked":$=dt;break;case"value":f=dt;break;case"defaultValue":b=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:Be(e,n,r,dt,a,null)}}Pn(e,f,b,I,$,x,u,!1),ve(e);return;case"select":xe("invalid",e),r=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":x=b;break;case"multiple":r=b;default:Be(e,n,u,b,a,null)}n=f,a=x,e.multiple=!!r,n!=null?Je(e,!!r,n,!1):a!=null&&Je(e,!!r,a,!0);return;case"textarea":xe("invalid",e),f=u=r=null;for(x in a)if(a.hasOwnProperty(x)&&(b=a[x],b!=null))switch(x){case"value":r=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Be(e,n,x,b,a,null)}Ds(e,r,u,f),ve(e);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(r=a[I],r!=null))switch(I){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Be(e,n,I,r,a,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(r=0;r<Mo.length;r++)xe(Mo[r],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(r=a[$],r!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(e,n,$,r,a,null)}return;default:if(eu(n)){for(dt in a)a.hasOwnProperty(dt)&&(r=a[dt],r!==void 0&&Hf(e,n,dt,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Be(e,n,b,r,a,null))}function Qy(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,b=null,I=null,$=null,dt=null;for(at in a){var _t=a[at];if(a.hasOwnProperty(at)&&_t!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":I=_t;default:r.hasOwnProperty(at)||Be(e,n,at,null,r,_t)}}for(var it in r){var at=r[it];if(_t=a[it],r.hasOwnProperty(it)&&(at!=null||_t!=null))switch(it){case"type":f=at;break;case"name":u=at;break;case"checked":$=at;break;case"defaultChecked":dt=at;break;case"value":x=at;break;case"defaultValue":b=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:at!==_t&&Be(e,n,it,at,r,_t)}}ke(e,x,b,I,$,dt,f,u);return;case"select":at=x=b=it=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":at=I;default:r.hasOwnProperty(f)||Be(e,n,f,null,r,I)}for(u in r)if(f=r[u],I=a[u],r.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":it=f;break;case"defaultValue":b=f;break;case"multiple":x=f;default:f!==I&&Be(e,n,u,f,r,I)}n=b,a=x,r=at,it!=null?Je(e,!!a,it,!1):!!r!=!!a&&(n!=null?Je(e,!!a,n,!0):Je(e,!!a,a?[]:"",!1));return;case"textarea":at=it=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Be(e,n,b,null,r,u)}for(x in r)if(u=r[x],f=a[x],r.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":it=u;break;case"defaultValue":at=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Be(e,n,x,u,r,f)}Sn(e,it,at);return;case"option":for(var se in a)if(it=a[se],a.hasOwnProperty(se)&&it!=null&&!r.hasOwnProperty(se))switch(se){case"selected":e.selected=!1;break;default:Be(e,n,se,null,r,it)}for(I in r)if(it=r[I],at=a[I],r.hasOwnProperty(I)&&it!==at&&(it!=null||at!=null))switch(I){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Be(e,n,I,it,r,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)it=a[ee],a.hasOwnProperty(ee)&&it!=null&&!r.hasOwnProperty(ee)&&Be(e,n,ee,null,r,it);for($ in r)if(it=r[$],at=a[$],r.hasOwnProperty($)&&it!==at&&(it!=null||at!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:Be(e,n,$,it,r,at)}return;default:if(eu(n)){for(var Ie in a)it=a[Ie],a.hasOwnProperty(Ie)&&it!==void 0&&!r.hasOwnProperty(Ie)&&Hf(e,n,Ie,void 0,r,it);for(dt in r)it=r[dt],at=a[dt],!r.hasOwnProperty(dt)||it===at||it===void 0&&at===void 0||Hf(e,n,dt,it,r,at);return}}for(var j in a)it=a[j],a.hasOwnProperty(j)&&it!=null&&!r.hasOwnProperty(j)&&Be(e,n,j,null,r,it);for(_t in r)it=r[_t],at=a[_t],!r.hasOwnProperty(_t)||it===at||it==null&&at==null||Be(e,n,_t,it,r,at)}var Gf=null,Vf=null;function Ql(e){return e.nodeType===9?e:e.ownerDocument}function $_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function kf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Xf=null;function Jy(){var e=window.event;return e&&e.type==="popstate"?e===Xf?!1:(Xf=e,!0):(Xf=null,!1)}var eg=typeof setTimeout=="function"?setTimeout:void 0,$y=typeof clearTimeout=="function"?clearTimeout:void 0,ng=typeof Promise=="function"?Promise:void 0,tx=typeof queueMicrotask=="function"?queueMicrotask:typeof ng<"u"?function(e){return ng.resolve(null).then(e).catch(ex)}:eg;function ex(e){setTimeout(function(){throw e})}function Ca(e){return e==="head"}function ig(e,n){var a=n,r=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<r&&8>r){a=r;var x=e.ownerDocument;if(a&1&&To(x.documentElement),a&2&&To(x.body),a&4)for(a=x.head,To(a),x=a.firstChild;x;){var b=x.nextSibling,I=x.nodeName;x[Ri]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&x.rel.toLowerCase()==="stylesheet"||a.removeChild(x),x=b}}if(u===0){e.removeChild(f),Lo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:r=a.charCodeAt(0)-48;else r=0;a=f}while(a);Lo(n)}function Wf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Wf(a),Cs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function nx(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ri])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function ix(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=xi(e.nextSibling),e===null))return null;return e}function qf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function ax(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function xi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Yf=null;function ag(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function sg(e,n,a){switch(n=Ql(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function To(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Cs(e)}var hi=new Map,rg=new Set;function Jl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $i=K.d;K.d={f:sx,r:rx,D:ox,C:lx,L:cx,m:ux,X:hx,S:fx,M:dx};function sx(){var e=$i.f(),n=kl();return e||n}function rx(e){var n=fa(e);n!==null&&n.tag===5&&n.type==="form"?Am(n):$i.r(e)}var sr=typeof document>"u"?null:document;function og(e,n,a){var r=sr;if(r&&typeof n=="string"&&n){var u=_n(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),rg.has(u)||(rg.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Tn(n,"link",e),an(n),r.head.appendChild(n)))}}function ox(e){$i.D(e),og("dns-prefetch",e,null)}function lx(e,n){$i.C(e,n),og("preconnect",e,n)}function cx(e,n,a){$i.L(e,n,a);var r=sr;if(r&&e&&n){var u='link[rel="preload"][as="'+_n(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+_n(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+_n(a.imageSizes)+'"]')):u+='[href="'+_n(e)+'"]';var f=u;switch(n){case"style":f=rr(e);break;case"script":f=or(e)}hi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),hi.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(bo(f))||n==="script"&&r.querySelector(Ao(f))||(n=r.createElement("link"),Tn(n,"link",e),an(n),r.head.appendChild(n)))}}function ux(e,n){$i.m(e,n);var a=sr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+_n(r)+'"][href="'+_n(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=or(e)}if(!hi.has(f)&&(e=g({rel:"modulepreload",href:e},n),hi.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ao(f)))return}r=a.createElement("link"),Tn(r,"link",e),an(r),a.head.appendChild(r)}}}function fx(e,n,a){$i.S(e,n,a);var r=sr;if(r&&e){var u=ha(r).hoistableStyles,f=rr(e);n=n||"default";var x=u.get(f);if(!x){var b={loading:0,preload:null};if(x=r.querySelector(bo(f)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=hi.get(f))&&jf(e,a);var I=x=r.createElement("link");an(I),Tn(I,"link",e),I._p=new Promise(function($,dt){I.onload=$,I.onerror=dt}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,$l(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:b},u.set(f,x)}}}function hx(e,n){$i.X(e,n);var a=sr;if(a&&e){var r=ha(a).hoistableScripts,u=or(e),f=r.get(u);f||(f=a.querySelector(Ao(u)),f||(e=g({src:e,async:!0},n),(n=hi.get(u))&&Zf(e,n),f=a.createElement("script"),an(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function dx(e,n){$i.M(e,n);var a=sr;if(a&&e){var r=ha(a).hoistableScripts,u=or(e),f=r.get(u);f||(f=a.querySelector(Ao(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=hi.get(u))&&Zf(e,n),f=a.createElement("script"),an(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function lg(e,n,a,r){var u=(u=pt.current)?Jl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=rr(a.href),a=ha(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=rr(a.href);var f=ha(u).hoistableStyles,x=f.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=u.querySelector(bo(e)))&&!f._p&&(x.instance=f,x.state.loading=5),hi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(e,a),f||px(u,e,a,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=or(a),a=ha(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function rr(e){return'href="'+_n(e)+'"'}function bo(e){return'link[rel="stylesheet"]['+e+"]"}function cg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function px(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Tn(n,"link",a),an(n),e.head.appendChild(n))}function or(e){return'[src="'+_n(e)+'"]'}function Ao(e){return"script[async]"+e}function ug(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+_n(a.href)+'"]');if(r)return n.instance=r,an(r),r;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),an(r),Tn(r,"style",u),$l(r,a.precedence,e),n.instance=r;case"stylesheet":u=rr(a.href);var f=e.querySelector(bo(u));if(f)return n.state.loading|=4,n.instance=f,an(f),f;r=cg(a),(u=hi.get(u))&&jf(r,u),f=(e.ownerDocument||e).createElement("link"),an(f);var x=f;return x._p=new Promise(function(b,I){x.onload=b,x.onerror=I}),Tn(f,"link",r),n.state.loading|=4,$l(f,a.precedence,e),n.instance=f;case"script":return f=or(a.src),(u=e.querySelector(Ao(f)))?(n.instance=u,an(u),u):(r=a,(u=hi.get(f))&&(r=g({},a),Zf(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),an(u),Tn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,$l(r,a.precedence,e));return n.instance}function $l(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,x=0;x<r.length;x++){var b=r[x];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function jf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Zf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var tc=null;function fg(e,n,a){if(tc===null){var r=new Map,u=tc=new Map;u.set(a,r)}else u=tc,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ri]||f[cn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var b=r.get(x);b?b.push(f):r.set(x,[f])}}return r}function hg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function mx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function dg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ro=null;function _x(){}function gx(e,n,a){if(Ro===null)throw Error(s(475));var r=Ro;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=rr(a.href),f=e.querySelector(bo(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=ec.bind(r),e.then(r,r)),n.state.loading|=4,n.instance=f,an(f);return}f=e.ownerDocument||e,a=cg(a),(u=hi.get(u))&&jf(a,u),f=f.createElement("link"),an(f);var x=f;x._p=new Promise(function(b,I){x.onload=b,x.onerror=I}),Tn(f,"link",a),n.instance=f}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(r.count++,n=ec.bind(r),e.addEventListener("load",n),e.addEventListener("error",n))}}function vx(){if(Ro===null)throw Error(s(475));var e=Ro;return e.stylesheets&&e.count===0&&Kf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Kf(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function ec(){if(this.count--,this.count===0){if(this.stylesheets)Kf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var nc=null;function Kf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,nc=new Map,n.forEach(yx,e),nc=null,ec.call(e))}function yx(e,n){if(!(n.state.loading&4)){var a=nc.get(e);if(a)var r=a.get(null);else{a=new Map,nc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||r,f===r&&a.set(null,u),a.set(x,u),this.count++,r=ec.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var wo={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function xx(e,n,a,r,u,f,x,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function pg(e,n,a,r,u,f,x,b,I,$,dt,_t){return e=new xx(e,n,a,x,b,I,$,_t),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),e.current=f,f.stateNode=e,n=Du(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Ou(f),e}function mg(e){return e?(e=Is,e):Is}function _g(e,n,a,r,u,f){u=mg(u),r.context===null?r.context=u:r.pendingContext=u,r=_a(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ga(e,r,n),a!==null&&(ei(a,e,n),io(a,e,n))}function gg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Qf(e,n){gg(e,n),(e=e.alternate)&&gg(e,n)}function vg(e){if(e.tag===13){var n=Bs(e,67108864);n!==null&&ei(n,e,67108864),Qf(e,67108864)}}var ic=!0;function Sx(e,n,a,r){var u=z.T;z.T=null;var f=K.p;try{K.p=2,Jf(e,n,a,r)}finally{K.p=f,z.T=u}}function Mx(e,n,a,r){var u=z.T;z.T=null;var f=K.p;try{K.p=8,Jf(e,n,a,r)}finally{K.p=f,z.T=u}}function Jf(e,n,a,r){if(ic){var u=$f(r);if(u===null)Ff(e,n,r,ac,a),xg(e,r);else if(Tx(u,e,n,a,r))r.stopPropagation();else if(xg(e,r),n&4&&-1<Ex.indexOf(e)){for(;u!==null;){var f=fa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Zt(f.pendingLanes);if(x!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;x;){var I=1<<31-It(x);b.entanglements[1]|=I,x&=~I}Li(f),(Ne&6)===0&&(Gl=zt()+500,So(0))}}break;case 13:b=Bs(f,2),b!==null&&ei(b,f,2),kl(),Qf(f,2)}if(f=$f(r),f===null&&Ff(e,n,r,ac,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Ff(e,n,r,null,a)}}function $f(e){return e=iu(e),th(e)}var ac=null;function th(e){if(ac=null,e=Fi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ac=e,null}function yg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Le()){case ut:return 2;case Bt:return 8;case le:case te:return 32;case N:return 268435456;default:return 32}default:return 32}}var eh=!1,Da=null,Ua=null,La=null,Co=new Map,Do=new Map,Na=[],Ex="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xg(e,n){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=fa(n),n!==null&&vg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Tx(e,n,a,r,u){switch(n){case"focusin":return Da=Uo(Da,e,n,a,r,u),!0;case"dragenter":return Ua=Uo(Ua,e,n,a,r,u),!0;case"mouseover":return La=Uo(La,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Co.set(f,Uo(Co.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Do.set(f,Uo(Do.get(f)||null,e,n,a,r,u)),!0}return!1}function Sg(e){var n=Fi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,_i(e.priority,function(){if(a.tag===13){var r=ti();r=re(r);var u=Bs(a,r);u!==null&&ei(u,a,r),Qf(a,r)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=$f(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);nu=r,a.target.dispatchEvent(r),nu=null}else return n=fa(a),n!==null&&vg(n),e.blockedOn=a,!1;n.shift()}return!0}function Mg(e,n,a){sc(e)&&a.delete(n)}function bx(){eh=!1,Da!==null&&sc(Da)&&(Da=null),Ua!==null&&sc(Ua)&&(Ua=null),La!==null&&sc(La)&&(La=null),Co.forEach(Mg),Do.forEach(Mg)}function rc(e,n){e.blockedOn===n&&(e.blockedOn=null,eh||(eh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,bx)))}var oc=null;function Eg(e){oc!==e&&(oc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){oc===e&&(oc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(th(r||a)===null)continue;break}var f=fa(a);f!==null&&(e.splice(n,3),n-=3,$u(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function Lo(e){function n(I){return rc(I,e)}Da!==null&&rc(Da,e),Ua!==null&&rc(Ua,e),La!==null&&rc(La,e),Co.forEach(n),Do.forEach(n);for(var a=0;a<Na.length;a++){var r=Na[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)Sg(a),a.blockedOn===null&&Na.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],x=u[Qe]||null;if(typeof f=="function")x||Eg(a);else if(x){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[Qe]||null)b=x.formAction;else if(th(u)!==null)continue}else b=x.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),Eg(a)}}}function nh(e){this._internalRoot=e}lc.prototype.render=nh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ti();_g(a,r,e,n,null,null)},lc.prototype.unmount=nh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;_g(e.current,2,null,e,null,null),kl(),n[Ai]=null}};function lc(e){this._internalRoot=e}lc.prototype.unstable_scheduleHydration=function(e){if(e){var n=be();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Na.length&&n!==0&&n<Na[a].priority;a++);Na.splice(a,0,e),a===0&&Sg(e)}};var Tg=t.version;if(Tg!=="19.1.1")throw Error(s(527,Tg,"19.1.1"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Ax={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{ht=cc.inject(Ax),vt=cc}catch{}}return Oo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=Hm,f=Gm,x=Vm,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=pg(e,1,!1,null,null,a,r,u,f,x,b,null),e[Ai]=n.current,If(e),new nh(n)},Oo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=Hm,x=Gm,b=Vm,I=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=pg(e,1,!0,n,a??null,r,u,f,x,b,I,$),n.context=mg(null),a=n.current,r=ti(),r=re(r),u=_a(r),u.callback=null,ga(a,u,r),a=r,n.current.lanes=a,Ft(n,a),Li(n),e[Ai]=n.current,If(e),new lc(n)},Oo.version="19.1.1",Oo}var Og;function Bx(){if(Og)return sh.exports;Og=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),sh.exports=zx(),sh.exports}var Ix=Bx();const Fx=wx(Ix);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zd="179",Cr={ROTATE:0,DOLLY:1,PAN:2},Rr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hx=0,Pg=1,Gx=2,W0=1,Vx=2,sa=3,ca=0,jn=1,ra=2,ka=0,Dr=1,zg=2,Bg=3,Ig=4,kx=5,gs=100,Xx=101,Wx=102,qx=103,Yx=104,jx=200,Zx=201,Kx=202,Qx=203,Xh=204,Wh=205,Jx=206,$x=207,tS=208,eS=209,nS=210,iS=211,aS=212,sS=213,rS=214,qh=0,Yh=1,jh=2,Nr=3,Zh=4,Kh=5,Qh=6,Jh=7,q0=0,oS=1,lS=2,Xa=0,cS=1,uS=2,fS=3,hS=4,dS=5,pS=6,mS=7,Y0=300,Or=301,Pr=302,$h=303,td=304,$c=306,ed=1e3,xs=1001,nd=1002,bi=1003,_S=1004,uc=1005,Pi=1006,ch=1007,Ss=1008,Bi=1009,j0=1010,Z0=1011,Wo=1012,Bd=1013,Es=1014,oa=1015,Zo=1016,Id=1017,Fd=1018,qo=1020,K0=35902,Q0=1021,J0=1022,Ti=1023,Yo=1026,jo=1027,$0=1028,Hd=1029,tv=1030,Gd=1031,Vd=1033,Hc=33776,Gc=33777,Vc=33778,kc=33779,id=35840,ad=35841,sd=35842,rd=35843,od=36196,ld=37492,cd=37496,ud=37808,fd=37809,hd=37810,dd=37811,pd=37812,md=37813,_d=37814,gd=37815,vd=37816,yd=37817,xd=37818,Sd=37819,Md=37820,Ed=37821,Xc=36492,Td=36494,bd=36495,ev=36283,Ad=36284,Rd=36285,wd=36286,gS=3200,vS=3201,nv=0,yS=1,Va="",pi="srgb",zr="srgb-linear",Yc="linear",Fe="srgb",lr=7680,Fg=519,xS=512,SS=513,MS=514,iv=515,ES=516,TS=517,bS=518,AS=519,Cd=35044,Hg="300 es",zi=2e3,jc=2001;class As{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wc=Math.PI/180,Dd=180/Math.PI;function Wa(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]).toLowerCase()}function Se(o,t,i){return Math.max(t,Math.min(i,o))}function RS(o,t){return(o%t+t)%t}function uh(o,t,i){return(1-i)*o+i*t}function Oi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function He(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const wS={DEG2RAD:Wc};class Qt{constructor(t=0,i=0){Qt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ts{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],v=s[l+3];const y=c[h+0],S=c[h+1],T=c[h+2],A=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(d===1){t[i+0]=y,t[i+1]=S,t[i+2]=T,t[i+3]=A;return}if(v!==A||m!==y||p!==S||g!==T){let M=1-d;const _=m*y+p*S+g*T+v*A,O=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const P=Math.sqrt(U),F=Math.atan2(P,_*O);M=Math.sin(M*F)/P,d=Math.sin(d*F)/P}const w=d*O;if(m=m*M+y*w,p=p*M+S*w,g=g*M+T*w,v=v*M+A*w,M===1-d){const P=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=P,p*=P,g*=P,v*=P}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],v=c[h],y=c[h+1],S=c[h+2],T=c[h+3];return t[i]=d*T+g*v+m*S-p*y,t[i+1]=m*T+g*y+p*v-d*S,t[i+2]=p*T+g*S+d*y-m*v,t[i+3]=g*T-d*v-m*y-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),v=d(c/2),y=m(s/2),S=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=y*g*v+p*S*T,this._y=p*S*v-y*g*T,this._z=p*g*T+y*S*v,this._w=p*g*v-y*S*T;break;case"YXZ":this._x=y*g*v+p*S*T,this._y=p*S*v-y*g*T,this._z=p*g*T-y*S*v,this._w=p*g*v+y*S*T;break;case"ZXY":this._x=y*g*v-p*S*T,this._y=p*S*v+y*g*T,this._z=p*g*T+y*S*v,this._w=p*g*v-y*S*T;break;case"ZYX":this._x=y*g*v-p*S*T,this._y=p*S*v+y*g*T,this._z=p*g*T-y*S*v,this._w=p*g*v+y*S*T;break;case"YZX":this._x=y*g*v+p*S*T,this._y=p*S*v+y*g*T,this._z=p*g*T-y*S*v,this._w=p*g*v-y*S*T;break;case"XZY":this._x=y*g*v-p*S*T,this._y=p*S*v-y*g*T,this._z=p*g*T+y*S*v,this._w=p*g*v+y*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],y=s+d+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(s>d&&s>v){const S=2*Math.sqrt(1+s-d-v);this._w=(g-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>v){const S=2*Math.sqrt(1+d-s-v);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+v-s-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-s*p,this._z=c*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,y=Math.sin(i*g)/p;return this._w=h*v+this._w*y,this._x=s*v+this._x*y,this._y=l*v+this._y*y,this._z=c*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,i=0,s=0){W.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Gg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Gg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-c*l),v=2*(c*s-h*i);return this.x=i+m*p+h*v-d*g,this.y=s+m*g+d*p-c*v,this.z=l+m*v+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return fh.copy(this).projectOnVector(t),this.sub(fh)}reflect(t){return this.sub(fh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fh=new W,Gg=new Ts;class ue{constructor(t,i,s,l,c,h,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],v=s[7],y=s[2],S=s[5],T=s[8],A=l[0],M=l[3],_=l[6],O=l[1],U=l[4],w=l[7],P=l[2],F=l[5],H=l[8];return c[0]=h*A+d*O+m*P,c[3]=h*M+d*U+m*F,c[6]=h*_+d*w+m*H,c[1]=p*A+g*O+v*P,c[4]=p*M+g*U+v*F,c[7]=p*_+g*w+v*H,c[2]=y*A+S*O+T*P,c[5]=y*M+S*U+T*F,c[8]=y*_+S*w+T*H,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*c*g+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=g*h-d*p,y=d*m-g*c,S=p*c-h*m,T=i*v+s*y+l*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=v*A,t[1]=(l*p-g*s)*A,t[2]=(d*s-l*h)*A,t[3]=y*A,t[4]=(g*i-l*m)*A,t[5]=(l*c-d*i)*A,t[6]=S*A,t[7]=(s*m-p*i)*A,t[8]=(h*i-s*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(hh.makeScale(t,i)),this}rotate(t){return this.premultiply(hh.makeRotation(-t)),this}translate(t,i){return this.premultiply(hh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hh=new ue;function av(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Zc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function CS(){const o=Zc("canvas");return o.style.display="block",o}const Vg={};function Ur(o){o in Vg||(Vg[o]=!0,console.warn(o))}function DS(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const kg=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xg=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function US(){const o={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Fe&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Fe&&(l.r=Lr(l.r),l.g=Lr(l.g),l.b=Lr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Va?Yc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ur("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ur("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[zr]:{primaries:t,whitePoint:s,transfer:Yc,toXYZ:kg,fromXYZ:Xg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:s,transfer:Fe,toXYZ:kg,fromXYZ:Xg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),o}const we=US();function la(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Lr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let cr;class LS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{cr===void 0&&(cr=Zc("canvas")),cr.width=t.width,cr.height=t.height;const l=cr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=cr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Zc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=la(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(la(i[s]/255)*255):i[s]=la(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let NS=0;class kd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=Wa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(dh(l[h].image)):c.push(dh(l[h]))}else c=dh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function dh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?LS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let OS=0;const ph=new W;class Hn extends As{constructor(t=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=xs,l=xs,c=Pi,h=Ss,d=Ti,m=Bi,p=Hn.DEFAULT_ANISOTROPY,g=Va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=Wa(),this.name="",this.source=new kd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ph).x}get height(){return this.source.getSize(ph).y}get depth(){return this.source.getSize(ph).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Y0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ed:t.x=t.x-Math.floor(t.x);break;case xs:t.x=t.x<0?0:1;break;case nd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ed:t.y=t.y-Math.floor(t.y);break;case xs:t.y=t.y<0?0:1;break;case nd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=Y0;Hn.DEFAULT_ANISOTROPY=1;class Ve{constructor(t=0,i=0,s=0,l=1){Ve.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],v=m[8],y=m[1],S=m[5],T=m[9],A=m[2],M=m[6],_=m[10];if(Math.abs(g-y)<.01&&Math.abs(v-A)<.01&&Math.abs(T-M)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+A)<.1&&Math.abs(T+M)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,w=(S+1)/2,P=(_+1)/2,F=(g+y)/4,H=(v+A)/4,V=(T+M)/4;return U>w&&U>P?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=F/s,c=H/s):w>P?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=F/l,c=V/l):P<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),s=H/c,l=V/c),this.set(s,l,c,i),this}let O=Math.sqrt((M-T)*(M-T)+(v-A)*(v-A)+(y-g)*(y-g));return Math.abs(O)<.001&&(O=1),this.x=(M-T)/O,this.y=(v-A)/O,this.z=(y-g)/O,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this.w=Se(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this.w=Se(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PS extends As{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Ve(0,0,t,i),this.scissorTest=!1,this.viewport=new Ve(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Hn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Pi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new kd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends PS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class sv extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zS extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(t=new W(1/0,1/0,1/0),i=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Si.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Si.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Si.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Si):Si.fromBufferAttribute(c,h),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),fc.copy(s.boundingBox)),fc.applyMatrix4(t.matrixWorld),this.union(fc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),hc.subVectors(this.max,Po),ur.subVectors(t.a,Po),fr.subVectors(t.b,Po),hr.subVectors(t.c,Po),Pa.subVectors(fr,ur),za.subVectors(hr,fr),us.subVectors(ur,hr);let i=[0,-Pa.z,Pa.y,0,-za.z,za.y,0,-us.z,us.y,Pa.z,0,-Pa.x,za.z,0,-za.x,us.z,0,-us.x,-Pa.y,Pa.x,0,-za.y,za.x,0,-us.y,us.x,0];return!mh(i,ur,fr,hr,hc)||(i=[1,0,0,0,1,0,0,0,1],!mh(i,ur,fr,hr,hc))?!1:(dc.crossVectors(Pa,za),i=[dc.x,dc.y,dc.z],mh(i,ur,fr,hr,hc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ta=[new W,new W,new W,new W,new W,new W,new W,new W],Si=new W,fc=new Ko,ur=new W,fr=new W,hr=new W,Pa=new W,za=new W,us=new W,Po=new W,hc=new W,dc=new W,fs=new W;function mh(o,t,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){fs.fromArray(o,c);const d=l.x*Math.abs(fs.x)+l.y*Math.abs(fs.y)+l.z*Math.abs(fs.z),m=t.dot(fs),p=i.dot(fs),g=s.dot(fs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const BS=new Ko,zo=new W,_h=new W;class Qo{constructor(t=new W,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):BS.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zo.subVectors(t,this.center);const i=zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(zo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_h.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zo.copy(t.center).add(_h)),this.expandByPoint(zo.copy(t.center).sub(_h))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ea=new W,gh=new W,pc=new W,Ba=new W,vh=new W,mc=new W,yh=new W;class Jo{constructor(t=new W,i=new W(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ea)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ea.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){gh.copy(t).add(i).multiplyScalar(.5),pc.copy(i).sub(t).normalize(),Ba.copy(this.origin).sub(gh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(pc),d=Ba.dot(this.direction),m=-Ba.dot(pc),p=Ba.lengthSq(),g=Math.abs(1-h*h);let v,y,S,T;if(g>0)if(v=h*m-d,y=h*d-m,T=c*g,v>=0)if(y>=-T)if(y<=T){const A=1/g;v*=A,y*=A,S=v*(v+h*y+2*d)+y*(h*v+y+2*m)+p}else y=c,v=Math.max(0,-(h*y+d)),S=-v*v+y*(y+2*m)+p;else y=-c,v=Math.max(0,-(h*y+d)),S=-v*v+y*(y+2*m)+p;else y<=-T?(v=Math.max(0,-(-h*c+d)),y=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+y*(y+2*m)+p):y<=T?(v=0,y=Math.min(Math.max(-c,-m),c),S=y*(y+2*m)+p):(v=Math.max(0,-(h*c+d)),y=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+y*(y+2*m)+p);else y=h>0?-c:c,v=Math.max(0,-(h*y+d)),S=-v*v+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(gh).addScaledVector(pc,y),S}intersectSphere(t,i){ea.subVectors(t.center,this.origin);const s=ea.dot(this.direction),l=ea.dot(ea)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(s=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(s=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),g>=0?(c=(t.min.y-y.y)*g,h=(t.max.y-y.y)*g):(c=(t.max.y-y.y)*g,h=(t.min.y-y.y)*g),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-y.z)*v,m=(t.max.z-y.z)*v):(d=(t.max.z-y.z)*v,m=(t.min.z-y.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ea)!==null}intersectTriangle(t,i,s,l,c){vh.subVectors(i,t),mc.subVectors(s,t),yh.crossVectors(vh,mc);let h=this.direction.dot(yh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ba.subVectors(this.origin,t);const m=d*this.direction.dot(mc.crossVectors(Ba,mc));if(m<0)return null;const p=d*this.direction.dot(vh.cross(Ba));if(p<0||m+p>h)return null;const g=-d*Ba.dot(yh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(t,i,s,l,c,h,d,m,p,g,v,y,S,T,A,M){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,g,v,y,S,T,A,M)}set(t,i,s,l,c,h,d,m,p,g,v,y,S,T,A,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=y,_[3]=S,_[7]=T,_[11]=A,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/dr.setFromMatrixColumn(t,0).length(),c=1/dr.setFromMatrixColumn(t,1).length(),h=1/dr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const y=h*g,S=h*v,T=d*g,A=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=S+T*p,i[5]=y-A*p,i[9]=-d*m,i[2]=A-y*p,i[6]=T+S*p,i[10]=h*m}else if(t.order==="YXZ"){const y=m*g,S=m*v,T=p*g,A=p*v;i[0]=y+A*d,i[4]=T*d-S,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=S*d-T,i[6]=A+y*d,i[10]=h*m}else if(t.order==="ZXY"){const y=m*g,S=m*v,T=p*g,A=p*v;i[0]=y-A*d,i[4]=-h*v,i[8]=T+S*d,i[1]=S+T*d,i[5]=h*g,i[9]=A-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const y=h*g,S=h*v,T=d*g,A=d*v;i[0]=m*g,i[4]=T*p-S,i[8]=y*p+A,i[1]=m*v,i[5]=A*p+y,i[9]=S*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const y=h*m,S=h*p,T=d*m,A=d*p;i[0]=m*g,i[4]=A-y*v,i[8]=T*v+S,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=S*v+T,i[10]=y-A*v}else if(t.order==="XZY"){const y=h*m,S=h*p,T=d*m,A=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=y*v+A,i[5]=h*g,i[9]=S*v-T,i[2]=T*v-S,i[6]=d*g,i[10]=A*v+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(IS,t,FS)}lookAt(t,i,s){const l=this.elements;return ni.subVectors(t,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Ia.crossVectors(s,ni),Ia.lengthSq()===0&&(Math.abs(s.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Ia.crossVectors(s,ni)),Ia.normalize(),_c.crossVectors(ni,Ia),l[0]=Ia.x,l[4]=_c.x,l[8]=ni.x,l[1]=Ia.y,l[5]=_c.y,l[9]=ni.y,l[2]=Ia.z,l[6]=_c.z,l[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],v=s[5],y=s[9],S=s[13],T=s[2],A=s[6],M=s[10],_=s[14],O=s[3],U=s[7],w=s[11],P=s[15],F=l[0],H=l[4],V=l[8],D=l[12],C=l[1],B=l[5],et=l[9],ot=l[13],lt=l[2],ft=l[6],z=l[10],K=l[14],Y=l[3],xt=l[7],L=l[11],J=l[15];return c[0]=h*F+d*C+m*lt+p*Y,c[4]=h*H+d*B+m*ft+p*xt,c[8]=h*V+d*et+m*z+p*L,c[12]=h*D+d*ot+m*K+p*J,c[1]=g*F+v*C+y*lt+S*Y,c[5]=g*H+v*B+y*ft+S*xt,c[9]=g*V+v*et+y*z+S*L,c[13]=g*D+v*ot+y*K+S*J,c[2]=T*F+A*C+M*lt+_*Y,c[6]=T*H+A*B+M*ft+_*xt,c[10]=T*V+A*et+M*z+_*L,c[14]=T*D+A*ot+M*K+_*J,c[3]=O*F+U*C+w*lt+P*Y,c[7]=O*H+U*B+w*ft+P*xt,c[11]=O*V+U*et+w*z+P*L,c[15]=O*D+U*ot+w*K+P*J,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],v=t[6],y=t[10],S=t[14],T=t[3],A=t[7],M=t[11],_=t[15];return T*(+c*m*v-l*p*v-c*d*y+s*p*y+l*d*S-s*m*S)+A*(+i*m*S-i*p*y+c*h*y-l*h*S+l*p*g-c*m*g)+M*(+i*p*v-i*d*S-c*h*v+s*h*S+c*d*g-s*p*g)+_*(-l*d*g-i*m*v+i*d*y+l*h*v-s*h*y+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=t[9],y=t[10],S=t[11],T=t[12],A=t[13],M=t[14],_=t[15],O=v*M*p-A*y*p+A*m*S-d*M*S-v*m*_+d*y*_,U=T*y*p-g*M*p-T*m*S+h*M*S+g*m*_-h*y*_,w=g*A*p-T*v*p+T*d*S-h*A*S-g*d*_+h*v*_,P=T*v*m-g*A*m-T*d*y+h*A*y+g*d*M-h*v*M,F=i*O+s*U+l*w+c*P;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/F;return t[0]=O*H,t[1]=(A*y*c-v*M*c-A*l*S+s*M*S+v*l*_-s*y*_)*H,t[2]=(d*M*c-A*m*c+A*l*p-s*M*p-d*l*_+s*m*_)*H,t[3]=(v*m*c-d*y*c-v*l*p+s*y*p+d*l*S-s*m*S)*H,t[4]=U*H,t[5]=(g*M*c-T*y*c+T*l*S-i*M*S-g*l*_+i*y*_)*H,t[6]=(T*m*c-h*M*c-T*l*p+i*M*p+h*l*_-i*m*_)*H,t[7]=(h*y*c-g*m*c+g*l*p-i*y*p-h*l*S+i*m*S)*H,t[8]=w*H,t[9]=(T*v*c-g*A*c-T*s*S+i*A*S+g*s*_-i*v*_)*H,t[10]=(h*A*c-T*d*c+T*s*p-i*A*p-h*s*_+i*d*_)*H,t[11]=(g*d*c-h*v*c-g*s*p+i*v*p+h*s*S-i*d*S)*H,t[12]=P*H,t[13]=(g*A*l-T*v*l+T*s*y-i*A*y-g*s*M+i*v*M)*H,t[14]=(T*d*l-h*A*l-T*s*m+i*A*m+h*s*M-i*d*M)*H,t[15]=(h*v*l-g*d*l+g*s*m-i*v*m-h*s*y+i*d*y)*H,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,v=d+d,y=c*p,S=c*g,T=c*v,A=h*g,M=h*v,_=d*v,O=m*p,U=m*g,w=m*v,P=s.x,F=s.y,H=s.z;return l[0]=(1-(A+_))*P,l[1]=(S+w)*P,l[2]=(T-U)*P,l[3]=0,l[4]=(S-w)*F,l[5]=(1-(y+_))*F,l[6]=(M+O)*F,l[7]=0,l[8]=(T+U)*H,l[9]=(M-O)*H,l[10]=(1-(y+A))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=dr.set(l[0],l[1],l[2]).length();const h=dr.set(l[4],l[5],l[6]).length(),d=dr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Mi.copy(this);const p=1/c,g=1/h,v=1/d;return Mi.elements[0]*=p,Mi.elements[1]*=p,Mi.elements[2]*=p,Mi.elements[4]*=g,Mi.elements[5]*=g,Mi.elements[6]*=g,Mi.elements[8]*=v,Mi.elements[9]*=v,Mi.elements[10]*=v,i.setFromRotationMatrix(Mi),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=zi,m=!1){const p=this.elements,g=2*c/(i-t),v=2*c/(s-l),y=(i+t)/(i-t),S=(s+l)/(s-l);let T,A;if(m)T=c/(h-c),A=h*c/(h-c);else if(d===zi)T=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(d===jc)T=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=zi,m=!1){const p=this.elements,g=2/(i-t),v=2/(s-l),y=-(i+t)/(i-t),S=-(s+l)/(s-l);let T,A;if(m)T=1/(h-c),A=h/(h-c);else if(d===zi)T=-2/(h-c),A=-(h+c)/(h-c);else if(d===jc)T=-1/(h-c),A=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const dr=new W,Mi=new qe,IS=new W(0,0,0),FS=new W(1,1,1),Ia=new W,_c=new W,ni=new W,Wg=new qe,qg=new Ts;class Ii{constructor(t=0,i=0,s=0,l=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Wg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return qg.setFromEuler(this),this.setFromQuaternion(qg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class Xd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let HS=0;const Yg=new W,pr=new Ts,na=new qe,gc=new W,Bo=new W,GS=new W,VS=new Ts,jg=new W(1,0,0),Zg=new W(0,1,0),Kg=new W(0,0,1),Qg={type:"added"},kS={type:"removed"},mr={type:"childadded",child:null},xh={type:"childremoved",child:null};class dn extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=Wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const t=new W,i=new Ii,s=new Ts,l=new W(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new qe},normalMatrix:{value:new ue}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return pr.setFromAxisAngle(t,i),this.quaternion.multiply(pr),this}rotateOnWorldAxis(t,i){return pr.setFromAxisAngle(t,i),this.quaternion.premultiply(pr),this}rotateX(t){return this.rotateOnAxis(jg,t)}rotateY(t){return this.rotateOnAxis(Zg,t)}rotateZ(t){return this.rotateOnAxis(Kg,t)}translateOnAxis(t,i){return Yg.copy(t).applyQuaternion(this.quaternion),this.position.add(Yg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(jg,t)}translateY(t){return this.translateOnAxis(Zg,t)}translateZ(t){return this.translateOnAxis(Kg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?gc.copy(t):gc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Bo,gc,this.up):na.lookAt(gc,Bo,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),pr.setFromRotationMatrix(na),this.quaternion.premultiply(pr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qg),mr.child=t,this.dispatchEvent(mr),mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(kS),xh.child=t,this.dispatchEvent(xh),xh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),na.multiply(t.parent.matrixWorld)),t.applyMatrix4(na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qg),mr.child=t,this.dispatchEvent(mr),mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,t,GS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,VS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),v=h(t.shapes),y=h(t.skeletons),S=h(t.animations),T=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),y.length>0&&(s.skeletons=y),S.length>0&&(s.animations=S),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}dn.DEFAULT_UP=new W(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new W,ia=new W,Sh=new W,aa=new W,_r=new W,gr=new W,Jg=new W,Mh=new W,Eh=new W,Th=new W,bh=new Ve,Ah=new Ve,Rh=new Ve;class mi{constructor(t=new W,i=new W,s=new W){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ei.subVectors(t,i),l.cross(Ei);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ei.subVectors(l,i),ia.subVectors(s,i),Sh.subVectors(t,i);const h=Ei.dot(Ei),d=Ei.dot(ia),m=Ei.dot(Sh),p=ia.dot(ia),g=ia.dot(Sh),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const y=1/v,S=(p*m-d*g)*y,T=(h*g-d*m)*y;return c.set(1-S-T,T,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,aa.x),m.addScaledVector(h,aa.y),m.addScaledVector(d,aa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return bh.setScalar(0),Ah.setScalar(0),Rh.setScalar(0),bh.fromBufferAttribute(t,i),Ah.fromBufferAttribute(t,s),Rh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(bh,c.x),h.addScaledVector(Ah,c.y),h.addScaledVector(Rh,c.z),h}static isFrontFacing(t,i,s,l){return Ei.subVectors(s,i),ia.subVectors(t,i),Ei.cross(ia).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),Ei.cross(ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return mi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return mi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;_r.subVectors(l,s),gr.subVectors(c,s),Mh.subVectors(t,s);const m=_r.dot(Mh),p=gr.dot(Mh);if(m<=0&&p<=0)return i.copy(s);Eh.subVectors(t,l);const g=_r.dot(Eh),v=gr.dot(Eh);if(g>=0&&v<=g)return i.copy(l);const y=m*v-g*p;if(y<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(_r,h);Th.subVectors(t,c);const S=_r.dot(Th),T=gr.dot(Th);if(T>=0&&S<=T)return i.copy(c);const A=S*p-m*T;if(A<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(gr,d);const M=g*T-S*v;if(M<=0&&v-g>=0&&S-T>=0)return Jg.subVectors(c,l),d=(v-g)/(v-g+(S-T)),i.copy(l).addScaledVector(Jg,d);const _=1/(M+A+y);return h=A*_,d=y*_,i.copy(s).addScaledVector(_r,h).addScaledVector(gr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},vc={h:0,s:0,l:0};function wh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Me{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=we.workingColorSpace){return this.r=t,this.g=i,this.b=s,we.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=we.workingColorSpace){if(t=RS(t,1),i=Se(i,0,1),s=Se(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=wh(h,c,t+1/3),this.g=wh(h,c,t),this.b=wh(h,c,t-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(t,i=pi){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=pi){const s=rv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}copyLinearToSRGB(t){return this.r=Lr(t.r),this.g=Lr(t.g),this.b=Lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return we.workingToColorSpace(Ln.copy(this),t),Math.round(Se(Ln.r*255,0,255))*65536+Math.round(Se(Ln.g*255,0,255))*256+Math.round(Se(Ln.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=we.workingColorSpace){we.workingToColorSpace(Ln.copy(this),i);const s=Ln.r,l=Ln.g,c=Ln.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=we.workingColorSpace){return we.workingToColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=pi){we.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,s=Ln.g,l=Ln.b;return t!==pi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Fa),this.setHSL(Fa.h+t,Fa.s+i,Fa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Fa),t.getHSL(vc);const s=uh(Fa.h,vc.h,i),l=uh(Fa.s,vc.s,i),c=uh(Fa.l,vc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Me;Me.NAMES=rv;let XS=0;class qa extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=Wa(),this.name="",this.type="Material",this.blending=Dr,this.side=ca,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xh,this.blendDst=Wh,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lr,this.stencilZFail=lr,this.stencilZPass=lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(s.blending=this.blending),this.side!==ca&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Xh&&(s.blendSrc=this.blendSrc),this.blendDst!==Wh&&(s.blendDst=this.blendDst),this.blendEquation!==gs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==lr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==lr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Wd extends qa{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=q0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const on=new W,yc=new Qt;let WS=0;class si{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Cd,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)yc.fromBufferAttribute(this,i),yc.applyMatrix3(t),this.setXY(i,yc.x,yc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyMatrix3(t),this.setXYZ(i,on.x,on.y,on.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyMatrix4(t),this.setXYZ(i,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyNormalMatrix(t),this.setXYZ(i,on.x,on.y,on.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.transformDirection(t),this.setXYZ(i,on.x,on.y,on.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Oi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=He(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Oi(i,this.array)),i}setX(t,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Oi(i,this.array)),i}setY(t,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Oi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Oi(i,this.array)),i}setW(t,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=He(i,this.array),s=He(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=He(i,this.array),s=He(s,this.array),l=He(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=He(i,this.array),s=He(s,this.array),l=He(l,this.array),c=He(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cd&&(t.usage=this.usage),t}}class ov extends si{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class lv extends si{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class An extends si{constructor(t,i,s){super(new Float32Array(t),i,s)}}let qS=0;const di=new qe,Ch=new dn,vr=new W,ii=new Ko,Io=new Ko,xn=new W;class Nn extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=Wa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(av(t)?lv:ov)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ue().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,s){return di.makeTranslation(t,i,s),this.applyMatrix4(di),this}scale(t,i,s){return di.makeScale(t,i,s),this.applyMatrix4(di),this}lookAt(t){return Ch.lookAt(t),Ch.updateMatrix(),this.applyMatrix4(Ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new An(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const s=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Io.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(ii.min,Io.min),ii.expandByPoint(xn),xn.addVectors(ii.max,Io.max),ii.expandByPoint(xn)):(ii.expandByPoint(Io.min),ii.expandByPoint(Io.max))}ii.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)xn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(xn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)xn.fromBufferAttribute(d,p),m&&(vr.fromBufferAttribute(t,p),xn.add(vr)),l=Math.max(l,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let V=0;V<s.count;V++)d[V]=new W,m[V]=new W;const p=new W,g=new W,v=new W,y=new Qt,S=new Qt,T=new Qt,A=new W,M=new W;function _(V,D,C){p.fromBufferAttribute(s,V),g.fromBufferAttribute(s,D),v.fromBufferAttribute(s,C),y.fromBufferAttribute(c,V),S.fromBufferAttribute(c,D),T.fromBufferAttribute(c,C),g.sub(p),v.sub(p),S.sub(y),T.sub(y);const B=1/(S.x*T.y-T.x*S.y);isFinite(B)&&(A.copy(g).multiplyScalar(T.y).addScaledVector(v,-S.y).multiplyScalar(B),M.copy(v).multiplyScalar(S.x).addScaledVector(g,-T.x).multiplyScalar(B),d[V].add(A),d[D].add(A),d[C].add(A),m[V].add(M),m[D].add(M),m[C].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let V=0,D=O.length;V<D;++V){const C=O[V],B=C.start,et=C.count;for(let ot=B,lt=B+et;ot<lt;ot+=3)_(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const U=new W,w=new W,P=new W,F=new W;function H(V){P.fromBufferAttribute(l,V),F.copy(P);const D=d[V];U.copy(D),U.sub(P.multiplyScalar(P.dot(D))).normalize(),w.crossVectors(F,D);const B=w.dot(m[V])<0?-1:1;h.setXYZW(V,U.x,U.y,U.z,B)}for(let V=0,D=O.length;V<D;++V){const C=O[V],B=C.start,et=C.count;for(let ot=B,lt=B+et;ot<lt;ot+=3)H(t.getX(ot+0)),H(t.getX(ot+1)),H(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new si(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,S=s.count;y<S;y++)s.setXYZ(y,0,0,0);const l=new W,c=new W,h=new W,d=new W,m=new W,p=new W,g=new W,v=new W;if(t)for(let y=0,S=t.count;y<S;y+=3){const T=t.getX(y+0),A=t.getX(y+1),M=t.getX(y+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,M),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,M),d.add(g),m.add(g),p.add(g),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),s.setXYZ(y+0,g.x,g.y,g.z),s.setXYZ(y+1,g.x,g.y,g.z),s.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,v=d.normalized,y=new p.constructor(m.length*g);let S=0,T=0;for(let A=0,M=m.length;A<M;A++){d.isInterleavedBufferAttribute?S=m[A]*d.data.stride+d.offset:S=m[A]*g;for(let _=0;_<g;_++)y[T++]=p[S++]}return new si(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Nn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,v=p.length;g<v;g++){const y=p[g],S=t(y,s);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,y=p.length;v<y;v++){const S=p[v];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let y=0,S=v.length;y<S;y++)g.push(v[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $g=new qe,hs=new Jo,xc=new Qo,t0=new W,Sc=new W,Mc=new W,Ec=new W,Dh=new W,Tc=new W,e0=new W,bc=new W;class bn extends dn{constructor(t=new Nn,i=new Wd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Tc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],v=c[m];g!==0&&(Dh.fromBufferAttribute(v,t),h?Tc.addScaledVector(Dh,g):Tc.addScaledVector(Dh.sub(i),g))}i.add(Tc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),xc.copy(s.boundingSphere),xc.applyMatrix4(c),hs.copy(t.ray).recast(t.near),!(xc.containsPoint(hs.origin)===!1&&(hs.intersectSphere(xc,t0)===null||hs.origin.distanceToSquared(t0)>(t.far-t.near)**2))&&($g.copy(c).invert(),hs.copy(t.ray).applyMatrix4($g),!(s.boundingBox!==null&&hs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,hs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,A=y.length;T<A;T++){const M=y[T],_=h[M.materialIndex],O=Math.max(M.start,S.start),U=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let w=O,P=U;w<P;w+=3){const F=d.getX(w),H=d.getX(w+1),V=d.getX(w+2);l=Ac(this,_,t,s,p,g,v,F,H,V),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let M=T,_=A;M<_;M+=3){const O=d.getX(M),U=d.getX(M+1),w=d.getX(M+2);l=Ac(this,h,t,s,p,g,v,O,U,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,A=y.length;T<A;T++){const M=y[T],_=h[M.materialIndex],O=Math.max(M.start,S.start),U=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let w=O,P=U;w<P;w+=3){const F=w,H=w+1,V=w+2;l=Ac(this,_,t,s,p,g,v,F,H,V),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),A=Math.min(m.count,S.start+S.count);for(let M=T,_=A;M<_;M+=3){const O=M,U=M+1,w=M+2;l=Ac(this,h,t,s,p,g,v,O,U,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function YS(o,t,i,s,l,c,h,d){let m;if(t.side===jn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===ca,d),m===null)return null;bc.copy(d),bc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(bc);return p<i.near||p>i.far?null:{distance:p,point:bc.clone(),object:o}}function Ac(o,t,i,s,l,c,h,d,m,p){o.getVertexPosition(d,Sc),o.getVertexPosition(m,Mc),o.getVertexPosition(p,Ec);const g=YS(o,t,i,s,Sc,Mc,Ec,e0);if(g){const v=new W;mi.getBarycoord(e0,Sc,Mc,Ec,v),l&&(g.uv=mi.getInterpolatedAttribute(l,d,m,p,v,new Qt)),c&&(g.uv1=mi.getInterpolatedAttribute(c,d,m,p,v,new Qt)),h&&(g.normal=mi.getInterpolatedAttribute(h,d,m,p,v,new W),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new W,materialIndex:0};mi.getNormal(Sc,Mc,Ec,y.normal),g.face=y,g.barycoord=v}return g}class $o extends Nn{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],v=[];let y=0,S=0;T("z","y","x",-1,-1,s,i,t,h,c,0),T("z","y","x",1,-1,s,i,-t,h,c,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new An(p,3)),this.setAttribute("normal",new An(g,3)),this.setAttribute("uv",new An(v,2));function T(A,M,_,O,U,w,P,F,H,V,D){const C=w/H,B=P/V,et=w/2,ot=P/2,lt=F/2,ft=H+1,z=V+1;let K=0,Y=0;const xt=new W;for(let L=0;L<z;L++){const J=L*B-ot;for(let yt=0;yt<ft;yt++){const St=yt*C-et;xt[A]=St*O,xt[M]=J*U,xt[_]=lt,p.push(xt.x,xt.y,xt.z),xt[A]=0,xt[M]=0,xt[_]=F>0?1:-1,g.push(xt.x,xt.y,xt.z),v.push(yt/H),v.push(1-L/V),K+=1}}for(let L=0;L<V;L++)for(let J=0;J<H;J++){const yt=y+J+ft*L,St=y+J+ft*(L+1),Rt=y+(J+1)+ft*(L+1),nt=y+(J+1)+ft*L;m.push(yt,St,nt),m.push(St,Rt,nt),Y+=6}d.addGroup(S,Y,D),S+=Y,y+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Br(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function In(o){const t={};for(let i=0;i<o.length;i++){const s=Br(o[i]);for(const l in s)t[l]=s[l]}return t}function jS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function cv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const ZS={clone:Br,merge:In};var KS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ua extends qa{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KS,this.fragmentShader=QS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=jS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class uv extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ha=new W,n0=new Qt,i0=new Qt;class ai extends uv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Dd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dd*2*Math.atan(Math.tan(Wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z)}getViewSize(t,i){return this.getViewBounds(t,n0,i0),i.subVectors(i0,n0)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Wc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const yr=-90,xr=1;class JS extends dn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ai(yr,xr,t,i);l.layers=this.layers,this.add(l);const c=new ai(yr,xr,t,i);c.layers=this.layers,this.add(c);const h=new ai(yr,xr,t,i);h.layers=this.layers,this.add(h);const d=new ai(yr,xr,t,i);d.layers=this.layers,this.add(d);const m=new ai(yr,xr,t,i);m.layers=this.layers,this.add(m);const p=new ai(yr,xr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===zi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===jc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,v=t.getRenderTarget(),y=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(v,y,S),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class fv extends Hn{constructor(t=[],i=Or,s,l,c,h,d,m,p,g){super(t,i,s,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $S extends bs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new fv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new $o(5,5,5),c=new ua({name:"CubemapFromEquirect",uniforms:Br(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:ka});c.uniforms.tEquirect.value=i;const h=new bn(l,c),d=i.minFilter;return i.minFilter===Ss&&(i.minFilter=Pi),new JS(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class Ms extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tM={type:"move"};class Uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const A of t.hand.values()){const M=i.getJointPose(A,s),_=this._getHandJoint(p,A);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=g.position.distanceTo(v.position),S=.02,T=.005;p.inputState.pinching&&y>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(tM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ms;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class eM extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class nM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Cd,this.updateRanges=[],this.version=0,this.uuid=Wa()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new W;class Kc{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Bn.fromBufferAttribute(this,i),Bn.applyMatrix4(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Bn.fromBufferAttribute(this,i),Bn.applyNormalMatrix(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Bn.fromBufferAttribute(this,i),Bn.transformDirection(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Oi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=He(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=He(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=He(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=He(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=He(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Oi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Oi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Oi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Oi(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=He(i,this.array),s=He(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=He(i,this.array),s=He(s,this.array),l=He(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=He(i,this.array),s=He(s,this.array),l=He(l,this.array),c=He(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new si(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Kc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hv extends qa{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Sr;const Fo=new W,Mr=new W,Er=new W,Tr=new Qt,Ho=new Qt,dv=new qe,Rc=new W,Go=new W,wc=new W,a0=new Qt,Lh=new Qt,s0=new Qt;class iM extends dn{constructor(t=new hv){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new Nn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new nM(i,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new Kc(s,3,0,!1)),Sr.setAttribute("uv",new Kc(s,2,3,!1))}this.geometry=Sr,this.material=t,this.center=new Qt(.5,.5),this.count=1}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mr.setFromMatrixScale(this.matrixWorld),dv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Er.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mr.multiplyScalar(-Er.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const h=this.center;Cc(Rc.set(-.5,-.5,0),Er,h,Mr,l,c),Cc(Go.set(.5,-.5,0),Er,h,Mr,l,c),Cc(wc.set(.5,.5,0),Er,h,Mr,l,c),a0.set(0,0),Lh.set(1,0),s0.set(1,1);let d=t.ray.intersectTriangle(Rc,Go,wc,!1,Fo);if(d===null&&(Cc(Go.set(-.5,.5,0),Er,h,Mr,l,c),Lh.set(0,1),d=t.ray.intersectTriangle(Rc,wc,Go,!1,Fo),d===null))return;const m=t.ray.origin.distanceTo(Fo);m<t.near||m>t.far||i.push({distance:m,point:Fo.clone(),uv:mi.getInterpolation(Fo,Rc,Go,wc,a0,Lh,s0,new Qt),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Cc(o,t,i,s,l,c){Tr.subVectors(o,i).addScalar(.5).multiply(s),l!==void 0?(Ho.x=c*Tr.x-l*Tr.y,Ho.y=l*Tr.x+c*Tr.y):Ho.copy(Tr),o.copy(t),o.x+=Ho.x,o.y+=Ho.y,o.applyMatrix4(dv)}const Nh=new W,aM=new W,sM=new ue;class Ga{constructor(t=new W(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Nh.subVectors(s,i).cross(aM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Nh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||sM.getNormalMatrix(t),l=this.coplanarPoint(Nh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new Qo,rM=new Qt(.5,.5),Dc=new W;class qd{constructor(t=new Ga,i=new Ga,s=new Ga,l=new Ga,c=new Ga,h=new Ga){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=zi,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],g=c[4],v=c[5],y=c[6],S=c[7],T=c[8],A=c[9],M=c[10],_=c[11],O=c[12],U=c[13],w=c[14],P=c[15];if(l[0].setComponents(p-h,S-g,_-T,P-O).normalize(),l[1].setComponents(p+h,S+g,_+T,P+O).normalize(),l[2].setComponents(p+d,S+v,_+A,P+U).normalize(),l[3].setComponents(p-d,S-v,_-A,P-U).normalize(),s)l[4].setComponents(m,y,M,w).normalize(),l[5].setComponents(p-m,S-y,_-M,P-w).normalize();else if(l[4].setComponents(p-m,S-y,_-M,P-w).normalize(),i===zi)l[5].setComponents(p+m,S+y,_+M,P+w).normalize();else if(i===jc)l[5].setComponents(m,y,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ds.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(t){ds.center.set(0,0,0);const i=rM.distanceTo(t.center);return ds.radius=.7071067811865476+i,ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Dc.x=l.normal.x>0?t.max.x:t.min.x,Dc.y=l.normal.y>0?t.max.y:t.min.y,Dc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pv extends qa{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Qc=new W,Jc=new W,r0=new qe,Vo=new Jo,Uc=new Qo,Oh=new W,o0=new W;class oM extends dn{constructor(t=new Nn,i=new pv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Qc.fromBufferAttribute(i,l-1),Jc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Qc.distanceTo(Jc);t.setAttribute("lineDistance",new An(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Uc.copy(s.boundingSphere),Uc.applyMatrix4(l),Uc.radius+=c,t.ray.intersectsSphere(Uc)===!1)return;r0.copy(l).invert(),Vo.copy(t.ray).applyMatrix4(r0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,y=s.attributes.position;if(g!==null){const S=Math.max(0,h.start),T=Math.min(g.count,h.start+h.count);for(let A=S,M=T-1;A<M;A+=p){const _=g.getX(A),O=g.getX(A+1),U=Lc(this,t,Vo,m,_,O,A);U&&i.push(U)}if(this.isLineLoop){const A=g.getX(T-1),M=g.getX(S),_=Lc(this,t,Vo,m,A,M,T-1);_&&i.push(_)}}else{const S=Math.max(0,h.start),T=Math.min(y.count,h.start+h.count);for(let A=S,M=T-1;A<M;A+=p){const _=Lc(this,t,Vo,m,A,A+1,A);_&&i.push(_)}if(this.isLineLoop){const A=Lc(this,t,Vo,m,T-1,S,T-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Lc(o,t,i,s,l,c,h){const d=o.geometry.attributes.position;if(Qc.fromBufferAttribute(d,l),Jc.fromBufferAttribute(d,c),i.distanceSqToSegment(Qc,Jc,Oh,o0)>s)return;Oh.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Oh);if(!(p<t.near||p>t.far))return{distance:p,point:o0.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}class Ud extends qa{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const l0=new qe,Ld=new Jo,Nc=new Qo,Oc=new W;class c0 extends dn{constructor(t=new Nn,i=new Ud){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Nc.copy(s.boundingSphere),Nc.applyMatrix4(l),Nc.radius+=c,t.ray.intersectsSphere(Nc)===!1)return;l0.copy(l).invert(),Ld.copy(t.ray).applyMatrix4(l0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,v=s.attributes.position;if(p!==null){const y=Math.max(0,h.start),S=Math.min(p.count,h.start+h.count);for(let T=y,A=S;T<A;T++){const M=p.getX(T);Oc.fromBufferAttribute(v,M),u0(Oc,M,m,l,t,i,this)}}else{const y=Math.max(0,h.start),S=Math.min(v.count,h.start+h.count);for(let T=y,A=S;T<A;T++)Oc.fromBufferAttribute(v,T),u0(Oc,T,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function u0(o,t,i,s,l,c,h){const d=Ld.distanceSqToPoint(o);if(d<i){const m=new W;Ld.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class lM extends Hn{constructor(t,i,s,l,c,h,d,m,p){super(t,i,s,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mv extends Hn{constructor(t,i,s=Es,l,c,h,d=bi,m=bi,p,g=Yo,v=1){if(g!==Yo&&g!==jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:v};super(y,l,c,h,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new kd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Yd extends Nn{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],v=[],y=[],S=[];let T=0;const A=[],M=s/2;let _=0;O(),h===!1&&(t>0&&U(!0),i>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new An(v,3)),this.setAttribute("normal",new An(y,3)),this.setAttribute("uv",new An(S,2));function O(){const w=new W,P=new W;let F=0;const H=(i-t)/s;for(let V=0;V<=c;V++){const D=[],C=V/c,B=C*(i-t)+t;for(let et=0;et<=l;et++){const ot=et/l,lt=ot*m+d,ft=Math.sin(lt),z=Math.cos(lt);P.x=B*ft,P.y=-C*s+M,P.z=B*z,v.push(P.x,P.y,P.z),w.set(ft,H,z).normalize(),y.push(w.x,w.y,w.z),S.push(ot,1-C),D.push(T++)}A.push(D)}for(let V=0;V<l;V++)for(let D=0;D<c;D++){const C=A[D][V],B=A[D+1][V],et=A[D+1][V+1],ot=A[D][V+1];(t>0||D!==0)&&(g.push(C,B,ot),F+=3),(i>0||D!==c-1)&&(g.push(B,et,ot),F+=3)}p.addGroup(_,F,0),_+=F}function U(w){const P=T,F=new Qt,H=new W;let V=0;const D=w===!0?t:i,C=w===!0?1:-1;for(let et=1;et<=l;et++)v.push(0,M*C,0),y.push(0,C,0),S.push(.5,.5),T++;const B=T;for(let et=0;et<=l;et++){const lt=et/l*m+d,ft=Math.cos(lt),z=Math.sin(lt);H.x=D*z,H.y=M*C,H.z=D*ft,v.push(H.x,H.y,H.z),y.push(0,C,0),F.x=ft*.5+.5,F.y=z*.5*C+.5,S.push(F.x,F.y),T++}for(let et=0;et<l;et++){const ot=P+et,lt=B+et;w===!0?g.push(lt,lt+1,ot):g.push(lt+1,lt,ot),V+=3}p.addGroup(_,V,w===!0?1:2),_+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yd(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jd extends Nn{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],h=[];d(l),p(s),g(),this.setAttribute("position",new An(c,3)),this.setAttribute("normal",new An(c.slice(),3)),this.setAttribute("uv",new An(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(O){const U=new W,w=new W,P=new W;for(let F=0;F<i.length;F+=3)S(i[F+0],U),S(i[F+1],w),S(i[F+2],P),m(U,w,P,O)}function m(O,U,w,P){const F=P+1,H=[];for(let V=0;V<=F;V++){H[V]=[];const D=O.clone().lerp(w,V/F),C=U.clone().lerp(w,V/F),B=F-V;for(let et=0;et<=B;et++)et===0&&V===F?H[V][et]=D:H[V][et]=D.clone().lerp(C,et/B)}for(let V=0;V<F;V++)for(let D=0;D<2*(F-V)-1;D++){const C=Math.floor(D/2);D%2===0?(y(H[V][C+1]),y(H[V+1][C]),y(H[V][C])):(y(H[V][C+1]),y(H[V+1][C+1]),y(H[V+1][C]))}}function p(O){const U=new W;for(let w=0;w<c.length;w+=3)U.x=c[w+0],U.y=c[w+1],U.z=c[w+2],U.normalize().multiplyScalar(O),c[w+0]=U.x,c[w+1]=U.y,c[w+2]=U.z}function g(){const O=new W;for(let U=0;U<c.length;U+=3){O.x=c[U+0],O.y=c[U+1],O.z=c[U+2];const w=M(O)/2/Math.PI+.5,P=_(O)/Math.PI+.5;h.push(w,1-P)}T(),v()}function v(){for(let O=0;O<h.length;O+=6){const U=h[O+0],w=h[O+2],P=h[O+4],F=Math.max(U,w,P),H=Math.min(U,w,P);F>.9&&H<.1&&(U<.2&&(h[O+0]+=1),w<.2&&(h[O+2]+=1),P<.2&&(h[O+4]+=1))}}function y(O){c.push(O.x,O.y,O.z)}function S(O,U){const w=O*3;U.x=t[w+0],U.y=t[w+1],U.z=t[w+2]}function T(){const O=new W,U=new W,w=new W,P=new W,F=new Qt,H=new Qt,V=new Qt;for(let D=0,C=0;D<c.length;D+=9,C+=6){O.set(c[D+0],c[D+1],c[D+2]),U.set(c[D+3],c[D+4],c[D+5]),w.set(c[D+6],c[D+7],c[D+8]),F.set(h[C+0],h[C+1]),H.set(h[C+2],h[C+3]),V.set(h[C+4],h[C+5]),P.copy(O).add(U).add(w).divideScalar(3);const B=M(P);A(F,C+0,O,B),A(H,C+2,U,B),A(V,C+4,w,B)}}function A(O,U,w,P){P<0&&O.x===1&&(h[U]=O.x-1),w.x===0&&w.z===0&&(h[U]=P/2/Math.PI+.5)}function M(O){return Math.atan2(O.z,-O.x)}function _(O){return Math.atan2(-O.y,Math.sqrt(O.x*O.x+O.z*O.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jd(t.vertices,t.indices,t.radius,t.details)}}class Zd extends jd{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Zd(t.radius,t.detail)}}class tl extends Nn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,v=t/d,y=i/m,S=[],T=[],A=[],M=[];for(let _=0;_<g;_++){const O=_*y-h;for(let U=0;U<p;U++){const w=U*v-c;T.push(w,-O,0),A.push(0,0,1),M.push(U/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let O=0;O<d;O++){const U=O+p*_,w=O+p*(_+1),P=O+1+p*(_+1),F=O+1+p*_;S.push(U,w,F),S.push(w,P,F)}this.setIndex(S),this.setAttribute("position",new An(T,3)),this.setAttribute("normal",new An(A,3)),this.setAttribute("uv",new An(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.width,t.height,t.widthSegments,t.heightSegments)}}class vs extends Nn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const g=[],v=new W,y=new W,S=[],T=[],A=[],M=[];for(let _=0;_<=s;_++){const O=[],U=_/s;let w=0;_===0&&h===0?w=.5/i:_===s&&m===Math.PI&&(w=-.5/i);for(let P=0;P<=i;P++){const F=P/i;v.x=-t*Math.cos(l+F*c)*Math.sin(h+U*d),v.y=t*Math.cos(h+U*d),v.z=t*Math.sin(l+F*c)*Math.sin(h+U*d),T.push(v.x,v.y,v.z),y.copy(v).normalize(),A.push(y.x,y.y,y.z),M.push(F+w,1-U),O.push(p++)}g.push(O)}for(let _=0;_<s;_++)for(let O=0;O<i;O++){const U=g[_][O+1],w=g[_][O],P=g[_+1][O],F=g[_+1][O+1];(_!==0||h>0)&&S.push(U,w,F),(_!==s-1||m<Math.PI)&&S.push(w,P,F)}this.setIndex(S),this.setAttribute("position",new An(T,3)),this.setAttribute("normal",new An(A,3)),this.setAttribute("uv",new An(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class br extends qa{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nv,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class cM extends qa{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class uM extends qa{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Kd extends dn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Ph=new qe,f0=new W,h0=new W;class _v{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qt(512,512),this.mapType=Bi,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qd,this._frameExtents=new Qt(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;f0.setFromMatrixPosition(t.matrixWorld),i.position.copy(f0),h0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(h0),i.updateMatrixWorld(),Ph.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ph,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Ph)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const d0=new qe,ko=new W,zh=new W;class fM extends _v{constructor(){super(new ai(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qt(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(t,i=0){const s=this.camera,l=this.matrix,c=t.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),ko.setFromMatrixPosition(t.matrixWorld),s.position.copy(ko),zh.copy(s.position),zh.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(zh),s.updateMatrixWorld(),l.makeTranslation(-ko.x,-ko.y,-ko.z),d0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(d0,s.coordinateSystem,s.reversedDepth)}}class hM extends Kd{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new fM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class gv extends uv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class dM extends _v{constructor(){super(new gv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pM extends Kd{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new dM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class mM extends Kd{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class _M extends ai{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const p0=new qe;class gM{constructor(t,i,s=0,l=1/0){this.ray=new Jo(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Xd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return p0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(p0),this}intersectObject(t,i=!0,s=[]){return Nd(t,this,s,i),s.sort(m0),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Nd(t[l],this,s,i);return s.sort(m0),s}}function m0(o,t){return o.distance-t.distance}function Nd(o,t,i,s){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=o.children;for(let h=0,d=c.length;h<d;h++)Nd(c[h],t,i,!0)}}class _0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Se(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Se(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class vM extends As{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function g0(o,t,i,s){const l=yM(s);switch(i){case Q0:return o*t;case $0:return o*t/l.components*l.byteLength;case Hd:return o*t/l.components*l.byteLength;case tv:return o*t*2/l.components*l.byteLength;case Gd:return o*t*2/l.components*l.byteLength;case J0:return o*t*3/l.components*l.byteLength;case Ti:return o*t*4/l.components*l.byteLength;case Vd:return o*t*4/l.components*l.byteLength;case Hc:case Gc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Vc:case kc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ad:case rd:return Math.max(o,16)*Math.max(t,8)/4;case id:case sd:return Math.max(o,8)*Math.max(t,8)/2;case od:case ld:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case cd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ud:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case fd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case hd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case dd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case pd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case md:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case _d:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case gd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case vd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case yd:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case xd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Sd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Md:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Ed:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Xc:case Td:case bd:return Math.ceil(o/4)*Math.ceil(t/4)*16;case ev:case Ad:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Rd:case wd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function yM(o){switch(o){case Bi:case j0:return{byteLength:1,components:1};case Wo:case Z0:case Zo:return{byteLength:2,components:1};case Id:case Fd:return{byteLength:2,components:4};case Es:case Bd:case oa:return{byteLength:4,components:1};case K0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vv(){let o=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function xM(o){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,g),d.onUploadCallback();let S;if(p instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=o.SHORT;else if(p instanceof Uint32Array)S=o.UNSIGNED_INT;else if(p instanceof Int32Array)S=o.INT;else if(p instanceof Int8Array)S=o.BYTE;else if(p instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const g=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,g);else{v.sort((S,T)=>S.start-T.start);let y=0;for(let S=1;S<v.length;S++){const T=v[y],A=v[S];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++y,v[y]=A)}v.length=y+1;for(let S=0,T=v.length;S<T;S++){const A=v[S];o.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var SM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,EM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,DM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,OM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,PM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,XM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,WM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,YM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QM="gl_FragColor = linearToOutputTexel( gl_FragColor );",JM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$M=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,aE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_E=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ME=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,DE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,BE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,FE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,XE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,KE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,iT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ST=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ET=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,DT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,PT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,FT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,WT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ZT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,JT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$T=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pe={alphahash_fragment:SM,alphahash_pars_fragment:MM,alphamap_fragment:EM,alphamap_pars_fragment:TM,alphatest_fragment:bM,alphatest_pars_fragment:AM,aomap_fragment:RM,aomap_pars_fragment:wM,batching_pars_vertex:CM,batching_vertex:DM,begin_vertex:UM,beginnormal_vertex:LM,bsdfs:NM,iridescence_fragment:OM,bumpmap_pars_fragment:PM,clipping_planes_fragment:zM,clipping_planes_pars_fragment:BM,clipping_planes_pars_vertex:IM,clipping_planes_vertex:FM,color_fragment:HM,color_pars_fragment:GM,color_pars_vertex:VM,color_vertex:kM,common:XM,cube_uv_reflection_fragment:WM,defaultnormal_vertex:qM,displacementmap_pars_vertex:YM,displacementmap_vertex:jM,emissivemap_fragment:ZM,emissivemap_pars_fragment:KM,colorspace_fragment:QM,colorspace_pars_fragment:JM,envmap_fragment:$M,envmap_common_pars_fragment:tE,envmap_pars_fragment:eE,envmap_pars_vertex:nE,envmap_physical_pars_fragment:dE,envmap_vertex:iE,fog_vertex:aE,fog_pars_vertex:sE,fog_fragment:rE,fog_pars_fragment:oE,gradientmap_pars_fragment:lE,lightmap_pars_fragment:cE,lights_lambert_fragment:uE,lights_lambert_pars_fragment:fE,lights_pars_begin:hE,lights_toon_fragment:pE,lights_toon_pars_fragment:mE,lights_phong_fragment:_E,lights_phong_pars_fragment:gE,lights_physical_fragment:vE,lights_physical_pars_fragment:yE,lights_fragment_begin:xE,lights_fragment_maps:SE,lights_fragment_end:ME,logdepthbuf_fragment:EE,logdepthbuf_pars_fragment:TE,logdepthbuf_pars_vertex:bE,logdepthbuf_vertex:AE,map_fragment:RE,map_pars_fragment:wE,map_particle_fragment:CE,map_particle_pars_fragment:DE,metalnessmap_fragment:UE,metalnessmap_pars_fragment:LE,morphinstance_vertex:NE,morphcolor_vertex:OE,morphnormal_vertex:PE,morphtarget_pars_vertex:zE,morphtarget_vertex:BE,normal_fragment_begin:IE,normal_fragment_maps:FE,normal_pars_fragment:HE,normal_pars_vertex:GE,normal_vertex:VE,normalmap_pars_fragment:kE,clearcoat_normal_fragment_begin:XE,clearcoat_normal_fragment_maps:WE,clearcoat_pars_fragment:qE,iridescence_pars_fragment:YE,opaque_fragment:jE,packing:ZE,premultiplied_alpha_fragment:KE,project_vertex:QE,dithering_fragment:JE,dithering_pars_fragment:$E,roughnessmap_fragment:tT,roughnessmap_pars_fragment:eT,shadowmap_pars_fragment:nT,shadowmap_pars_vertex:iT,shadowmap_vertex:aT,shadowmask_pars_fragment:sT,skinbase_vertex:rT,skinning_pars_vertex:oT,skinning_vertex:lT,skinnormal_vertex:cT,specularmap_fragment:uT,specularmap_pars_fragment:fT,tonemapping_fragment:hT,tonemapping_pars_fragment:dT,transmission_fragment:pT,transmission_pars_fragment:mT,uv_pars_fragment:_T,uv_pars_vertex:gT,uv_vertex:vT,worldpos_vertex:yT,background_vert:xT,background_frag:ST,backgroundCube_vert:MT,backgroundCube_frag:ET,cube_vert:TT,cube_frag:bT,depth_vert:AT,depth_frag:RT,distanceRGBA_vert:wT,distanceRGBA_frag:CT,equirect_vert:DT,equirect_frag:UT,linedashed_vert:LT,linedashed_frag:NT,meshbasic_vert:OT,meshbasic_frag:PT,meshlambert_vert:zT,meshlambert_frag:BT,meshmatcap_vert:IT,meshmatcap_frag:FT,meshnormal_vert:HT,meshnormal_frag:GT,meshphong_vert:VT,meshphong_frag:kT,meshphysical_vert:XT,meshphysical_frag:WT,meshtoon_vert:qT,meshtoon_frag:YT,points_vert:jT,points_frag:ZT,shadow_vert:KT,shadow_frag:QT,sprite_vert:JT,sprite_frag:$T},Pt={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Ni={basic:{uniforms:In([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:In([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Me(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:In([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:In([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:In([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Me(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:In([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:In([Pt.points,Pt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:In([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:In([Pt.common,Pt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:In([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:In([Pt.sprite,Pt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:In([Pt.common,Pt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:In([Pt.lights,Pt.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Ni.physical={uniforms:In([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Pc={r:0,b:0,g:0},ps=new Ii,tb=new qe;function eb(o,t,i,s,l,c,h){const d=new Me(0);let m=c===!0?0:1,p,g,v=null,y=0,S=null;function T(U){let w=U.isScene===!0?U.background:null;return w&&w.isTexture&&(w=(U.backgroundBlurriness>0?i:t).get(w)),w}function A(U){let w=!1;const P=T(U);P===null?_(d,m):P&&P.isColor&&(_(P,1),w=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||w)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(U,w){const P=T(w);P&&(P.isCubeTexture||P.mapping===$c)?(g===void 0&&(g=new bn(new $o(1,1,1),new ua({name:"BackgroundCubeMaterial",uniforms:Br(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,H,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ps.copy(w.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(tb.makeRotationFromEuler(ps)),g.material.toneMapped=we.getTransfer(P.colorSpace)!==Fe,(v!==P||y!==P.version||S!==o.toneMapping)&&(g.material.needsUpdate=!0,v=P,y=P.version,S=o.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new bn(new tl(2,2),new ua({name:"BackgroundMaterial",uniforms:Br(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:ca,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=we.getTransfer(P.colorSpace)!==Fe,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||y!==P.version||S!==o.toneMapping)&&(p.material.needsUpdate=!0,v=P,y=P.version,S=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,w){U.getRGB(Pc,cv(o)),s.buffers.color.setClear(Pc.r,Pc.g,Pc.b,w,h)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,w=1){d.set(U),m=w,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(d,m)},render:A,addToRenderList:M,dispose:O}}function nb(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,h=!1;function d(C,B,et,ot,lt){let ft=!1;const z=v(ot,et,B);c!==z&&(c=z,p(c.object)),ft=S(C,ot,et,lt),ft&&T(C,ot,et,lt),lt!==null&&t.update(lt,o.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,w(C,B,et,ot),lt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(lt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function g(C){return o.deleteVertexArray(C)}function v(C,B,et){const ot=et.wireframe===!0;let lt=s[C.id];lt===void 0&&(lt={},s[C.id]=lt);let ft=lt[B.id];ft===void 0&&(ft={},lt[B.id]=ft);let z=ft[ot];return z===void 0&&(z=y(m()),ft[ot]=z),z}function y(C){const B=[],et=[],ot=[];for(let lt=0;lt<i;lt++)B[lt]=0,et[lt]=0,ot[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:et,attributeDivisors:ot,object:C,attributes:{},index:null}}function S(C,B,et,ot){const lt=c.attributes,ft=B.attributes;let z=0;const K=et.getAttributes();for(const Y in K)if(K[Y].location>=0){const L=lt[Y];let J=ft[Y];if(J===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(J=C.instanceColor)),L===void 0||L.attribute!==J||J&&L.data!==J.data)return!0;z++}return c.attributesNum!==z||c.index!==ot}function T(C,B,et,ot){const lt={},ft=B.attributes;let z=0;const K=et.getAttributes();for(const Y in K)if(K[Y].location>=0){let L=ft[Y];L===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(L=C.instanceColor));const J={};J.attribute=L,L&&L.data&&(J.data=L.data),lt[Y]=J,z++}c.attributes=lt,c.attributesNum=z,c.index=ot}function A(){const C=c.newAttributes;for(let B=0,et=C.length;B<et;B++)C[B]=0}function M(C){_(C,0)}function _(C,B){const et=c.newAttributes,ot=c.enabledAttributes,lt=c.attributeDivisors;et[C]=1,ot[C]===0&&(o.enableVertexAttribArray(C),ot[C]=1),lt[C]!==B&&(o.vertexAttribDivisor(C,B),lt[C]=B)}function O(){const C=c.newAttributes,B=c.enabledAttributes;for(let et=0,ot=B.length;et<ot;et++)B[et]!==C[et]&&(o.disableVertexAttribArray(et),B[et]=0)}function U(C,B,et,ot,lt,ft,z){z===!0?o.vertexAttribIPointer(C,B,et,lt,ft):o.vertexAttribPointer(C,B,et,ot,lt,ft)}function w(C,B,et,ot){A();const lt=ot.attributes,ft=et.getAttributes(),z=B.defaultAttributeValues;for(const K in ft){const Y=ft[K];if(Y.location>=0){let xt=lt[K];if(xt===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor)),xt!==void 0){const L=xt.normalized,J=xt.itemSize,yt=t.get(xt);if(yt===void 0)continue;const St=yt.buffer,Rt=yt.type,nt=yt.bytesPerElement,pt=Rt===o.INT||Rt===o.UNSIGNED_INT||xt.gpuType===Bd;if(xt.isInterleavedBufferAttribute){const Mt=xt.data,Ut=Mt.stride,Xt=xt.offset;if(Mt.isInstancedInterleavedBuffer){for(let ae=0;ae<Y.locationSize;ae++)_(Y.location+ae,Mt.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ae=0;ae<Y.locationSize;ae++)M(Y.location+ae);o.bindBuffer(o.ARRAY_BUFFER,St);for(let ae=0;ae<Y.locationSize;ae++)U(Y.location+ae,J/Y.locationSize,Rt,L,Ut*nt,(Xt+J/Y.locationSize*ae)*nt,pt)}else{if(xt.isInstancedBufferAttribute){for(let Mt=0;Mt<Y.locationSize;Mt++)_(Y.location+Mt,xt.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Mt=0;Mt<Y.locationSize;Mt++)M(Y.location+Mt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Mt=0;Mt<Y.locationSize;Mt++)U(Y.location+Mt,J/Y.locationSize,Rt,L,J*nt,J/Y.locationSize*Mt*nt,pt)}}else if(z!==void 0){const L=z[K];if(L!==void 0)switch(L.length){case 2:o.vertexAttrib2fv(Y.location,L);break;case 3:o.vertexAttrib3fv(Y.location,L);break;case 4:o.vertexAttrib4fv(Y.location,L);break;default:o.vertexAttrib1fv(Y.location,L)}}}}O()}function P(){V();for(const C in s){const B=s[C];for(const et in B){const ot=B[et];for(const lt in ot)g(ot[lt].object),delete ot[lt];delete B[et]}delete s[C]}}function F(C){if(s[C.id]===void 0)return;const B=s[C.id];for(const et in B){const ot=B[et];for(const lt in ot)g(ot[lt].object),delete ot[lt];delete B[et]}delete s[C.id]}function H(C){for(const B in s){const et=s[B];if(et[C.id]===void 0)continue;const ot=et[C.id];for(const lt in ot)g(ot[lt].object),delete ot[lt];delete et[C.id]}}function V(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:D,dispose:P,releaseStatesOfGeometry:F,releaseStatesOfProgram:H,initAttributes:A,enableAttribute:M,disableUnusedAttributes:O}}function ib(o,t,i){let s;function l(p){s=p}function c(p,g){o.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,v){v!==0&&(o.drawArraysInstanced(s,p,g,v),i.update(g,s,v))}function d(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,v);let S=0;for(let T=0;T<v;T++)S+=g[T];i.update(S,s,1)}function m(p,g,v,y){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<p.length;T++)h(p[T],g[T],y[T]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,g,0,y,0,v);let T=0;for(let A=0;A<v;A++)T+=g[A]*y[A];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function ab(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(H){return!(H!==Ti&&s.convert(H)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(H){const V=H===Zo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==Bi&&s.convert(H)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==oa&&!V)}function m(H){if(H==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=T>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:w,vertexTextures:P,maxSamples:F}}function sb(o){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Ga,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||s!==0||l;return l=y,s=v.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,y){i=g(v,y,0)},this.setState=function(v,y,S){const T=v.clippingPlanes,A=v.clipIntersection,M=v.clipShadows,_=o.get(v);if(!l||T===null||T.length===0||c&&!M)c?g(null):p();else{const O=c?0:s,U=O*4;let w=_.clippingState||null;m.value=w,w=g(T,y,U,S);for(let P=0;P!==U;++P)w[P]=i[P];_.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,y,S,T){const A=v!==null?v.length:0;let M=null;if(A!==0){if(M=m.value,T!==!0||M===null){const _=S+A*4,O=y.matrixWorldInverse;d.getNormalMatrix(O),(M===null||M.length<_)&&(M=new Float32Array(_));for(let U=0,w=S;U!==A;++U,w+=4)h.copy(v[U]).applyMatrix4(O,d),h.normal.toArray(M,w),M[w+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}function rb(o){let t=new WeakMap;function i(h,d){return d===$h?h.mapping=Or:d===td&&(h.mapping=Pr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===$h||d===td)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new $S(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const wr=4,v0=[.125,.215,.35,.446,.526,.582],ys=20,Bh=new gv,y0=new Me;let Ih=null,Fh=0,Hh=0,Gh=!1;const _s=(1+Math.sqrt(5))/2,Ar=1/_s,x0=[new W(-_s,Ar,0),new W(_s,Ar,0),new W(-Ar,0,_s),new W(Ar,0,_s),new W(0,_s,-Ar),new W(0,_s,Ar),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],ob=new W;class S0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=ob}=c;Ih=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=E0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ih,Fh,Hh),this._renderer.xr.enabled=Gh,t.scissorTest=!1,zc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Or||t.mapping===Pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ih=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Pi,minFilter:Pi,generateMipmaps:!1,type:Zo,format:Ti,colorSpace:zr,depthBuffer:!1},l=M0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=M0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lb(c)),this._blurMaterial=cb(c,t,i)}return l}_compileMaterial(t){const i=new bn(this._lodPlanes[0],t);this._renderer.compile(i,Bh)}_sceneToCubeUV(t,i,s,l,c){const m=new ai(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,S=v.toneMapping;v.getClearColor(y0),v.toneMapping=Xa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const A=new Wd({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),M=new bn(new $o,A);let _=!1;const O=t.background;O?O.isColor&&(A.color.copy(O),t.background=null,_=!0):(A.color.copy(y0),_=!0);for(let U=0;U<6;U++){const w=U%3;w===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):w===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const P=this._cubeSize;zc(l,w*P,U>2?P:0,P,P),v.setRenderTarget(l),_&&v.render(M,m),v.render(t,m)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=S,v.autoClear=y,t.background=O}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Or||t.mapping===Pr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=T0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=E0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new bn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;zc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Bh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=x0[(l-c-1)%x0.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new bn(this._lodPlanes[l],p),y=p.uniforms,S=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*ys-1),A=c/T,M=isFinite(c)?1+Math.floor(g*A):ys;M>ys&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ys}`);const _=[];let O=0;for(let H=0;H<ys;++H){const V=H/A,D=Math.exp(-V*V/2);_.push(D),H===0?O+=D:H<M&&(O+=2*D)}for(let H=0;H<_.length;H++)_[H]=_[H]/O;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=_,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:U}=this;y.dTheta.value=T,y.mipInt.value=U-s;const w=this._sizeLods[l],P=3*w*(l>U-wr?l-U+wr:0),F=4*(this._cubeSize-w);zc(i,P,F,3*w,2*w),m.setRenderTarget(i),m.render(v,Bh)}}function lb(o){const t=[],i=[],s=[];let l=o;const c=o-wr+1+v0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-wr?m=v0[h-o+wr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,v=1+p,y=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,T=6,A=3,M=2,_=1,O=new Float32Array(A*T*S),U=new Float32Array(M*T*S),w=new Float32Array(_*T*S);for(let F=0;F<S;F++){const H=F%3*2/3-1,V=F>2?0:-1,D=[H,V,0,H+2/3,V,0,H+2/3,V+1,0,H,V,0,H+2/3,V+1,0,H,V+1,0];O.set(D,A*T*F),U.set(y,M*T*F);const C=[F,F,F,F,F,F];w.set(C,_*T*F)}const P=new Nn;P.setAttribute("position",new si(O,A)),P.setAttribute("uv",new si(U,M)),P.setAttribute("faceIndex",new si(w,_)),t.push(P),l>wr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function M0(o,t,i){const s=new bs(o,t,i);return s.texture.mapping=$c,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function zc(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function cb(o,t,i){const s=new Float32Array(ys),l=new W(0,1,0);return new ua({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function E0(){return new ua({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function T0(){return new ua({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Qd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ub(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===$h||m===td,g=m===Or||m===Pr;if(p||g){let v=t.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new S0(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new S0(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function fb(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Ur("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function hb(o,t,i,s){const l={},c=new WeakMap;function h(v){const y=v.target;y.index!==null&&t.remove(y.index);for(const T in y.attributes)t.remove(y.attributes[T]);y.removeEventListener("dispose",h),delete l[y.id];const S=c.get(y);S&&(t.remove(S),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(v,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(v){const y=v.attributes;for(const S in y)t.update(y[S],o.ARRAY_BUFFER)}function p(v){const y=[],S=v.index,T=v.attributes.position;let A=0;if(S!==null){const O=S.array;A=S.version;for(let U=0,w=O.length;U<w;U+=3){const P=O[U+0],F=O[U+1],H=O[U+2];y.push(P,F,F,H,H,P)}}else if(T!==void 0){const O=T.array;A=T.version;for(let U=0,w=O.length/3-1;U<w;U+=3){const P=U+0,F=U+1,H=U+2;y.push(P,F,F,H,H,P)}}else return;const M=new(av(y)?lv:ov)(y,1);M.version=A;const _=c.get(v);_&&t.remove(_),c.set(v,M)}function g(v){const y=c.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function db(o,t,i){let s;function l(y){s=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function m(y,S){o.drawElements(s,S,c,y*h),i.update(S,s,1)}function p(y,S,T){T!==0&&(o.drawElementsInstanced(s,S,c,y*h,T),i.update(S,s,T))}function g(y,S,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,y,0,T);let M=0;for(let _=0;_<T;_++)M+=S[_];i.update(M,s,1)}function v(y,S,T,A){if(T===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<y.length;_++)p(y[_]/h,S[_],A[_]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,c,y,0,A,0,T);let _=0;for(let O=0;O<T;O++)_+=S[O]*A[O];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function pb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function mb(o,t,i){const s=new WeakMap,l=new Ve;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let y=s.get(d);if(y===void 0||y.count!==v){let C=function(){V.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var S=C;y!==void 0&&y.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let w=0;T===!0&&(w=1),A===!0&&(w=2),M===!0&&(w=3);let P=d.attributes.position.count*w,F=1;P>t.maxTextureSize&&(F=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const H=new Float32Array(P*F*4*v),V=new sv(H,P,F,v);V.type=oa,V.needsUpdate=!0;const D=w*4;for(let B=0;B<v;B++){const et=_[B],ot=O[B],lt=U[B],ft=P*F*4*B;for(let z=0;z<et.count;z++){const K=z*D;T===!0&&(l.fromBufferAttribute(et,z),H[ft+K+0]=l.x,H[ft+K+1]=l.y,H[ft+K+2]=l.z,H[ft+K+3]=0),A===!0&&(l.fromBufferAttribute(ot,z),H[ft+K+4]=l.x,H[ft+K+5]=l.y,H[ft+K+6]=l.z,H[ft+K+7]=0),M===!0&&(l.fromBufferAttribute(lt,z),H[ft+K+8]=l.x,H[ft+K+9]=l.y,H[ft+K+10]=l.z,H[ft+K+11]=lt.itemSize===4?l.w:1)}}y={count:v,texture:V,size:new Qt(P,F)},s.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<p.length;M++)T+=p[M];const A=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:c}}function _b(o,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const yv=new Hn,b0=new mv(1,1),xv=new sv,Sv=new zS,Mv=new fv,A0=[],R0=[],w0=new Float32Array(16),C0=new Float32Array(9),D0=new Float32Array(4);function Ir(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=A0[l];if(c===void 0&&(c=new Float32Array(l),A0[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function pn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function mn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function tu(o,t){let i=R0[t];i===void 0&&(i=new Int32Array(t),R0[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function gb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function vb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2fv(this.addr,t),mn(i,t)}}function yb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(pn(i,t))return;o.uniform3fv(this.addr,t),mn(i,t)}}function xb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4fv(this.addr,t),mn(i,t)}}function Sb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,s))return;D0.set(s),o.uniformMatrix2fv(this.addr,!1,D0),mn(i,s)}}function Mb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,s))return;C0.set(s),o.uniformMatrix3fv(this.addr,!1,C0),mn(i,s)}}function Eb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,s))return;w0.set(s),o.uniformMatrix4fv(this.addr,!1,w0),mn(i,s)}}function Tb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function bb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2iv(this.addr,t),mn(i,t)}}function Ab(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;o.uniform3iv(this.addr,t),mn(i,t)}}function Rb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4iv(this.addr,t),mn(i,t)}}function wb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function Cb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2uiv(this.addr,t),mn(i,t)}}function Db(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;o.uniform3uiv(this.addr,t),mn(i,t)}}function Ub(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4uiv(this.addr,t),mn(i,t)}}function Lb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(b0.compareFunction=iv,c=b0):c=yv,i.setTexture2D(t||c,l)}function Nb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Sv,l)}function Ob(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Mv,l)}function Pb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||xv,l)}function zb(o){switch(o){case 5126:return gb;case 35664:return vb;case 35665:return yb;case 35666:return xb;case 35674:return Sb;case 35675:return Mb;case 35676:return Eb;case 5124:case 35670:return Tb;case 35667:case 35671:return bb;case 35668:case 35672:return Ab;case 35669:case 35673:return Rb;case 5125:return wb;case 36294:return Cb;case 36295:return Db;case 36296:return Ub;case 35678:case 36198:case 36298:case 36306:case 35682:return Lb;case 35679:case 36299:case 36307:return Nb;case 35680:case 36300:case 36308:case 36293:return Ob;case 36289:case 36303:case 36311:case 36292:return Pb}}function Bb(o,t){o.uniform1fv(this.addr,t)}function Ib(o,t){const i=Ir(t,this.size,2);o.uniform2fv(this.addr,i)}function Fb(o,t){const i=Ir(t,this.size,3);o.uniform3fv(this.addr,i)}function Hb(o,t){const i=Ir(t,this.size,4);o.uniform4fv(this.addr,i)}function Gb(o,t){const i=Ir(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Vb(o,t){const i=Ir(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function kb(o,t){const i=Ir(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Xb(o,t){o.uniform1iv(this.addr,t)}function Wb(o,t){o.uniform2iv(this.addr,t)}function qb(o,t){o.uniform3iv(this.addr,t)}function Yb(o,t){o.uniform4iv(this.addr,t)}function jb(o,t){o.uniform1uiv(this.addr,t)}function Zb(o,t){o.uniform2uiv(this.addr,t)}function Kb(o,t){o.uniform3uiv(this.addr,t)}function Qb(o,t){o.uniform4uiv(this.addr,t)}function Jb(o,t,i){const s=this.cache,l=t.length,c=tu(i,l);pn(s,c)||(o.uniform1iv(this.addr,c),mn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||yv,c[h])}function $b(o,t,i){const s=this.cache,l=t.length,c=tu(i,l);pn(s,c)||(o.uniform1iv(this.addr,c),mn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Sv,c[h])}function tA(o,t,i){const s=this.cache,l=t.length,c=tu(i,l);pn(s,c)||(o.uniform1iv(this.addr,c),mn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Mv,c[h])}function eA(o,t,i){const s=this.cache,l=t.length,c=tu(i,l);pn(s,c)||(o.uniform1iv(this.addr,c),mn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||xv,c[h])}function nA(o){switch(o){case 5126:return Bb;case 35664:return Ib;case 35665:return Fb;case 35666:return Hb;case 35674:return Gb;case 35675:return Vb;case 35676:return kb;case 5124:case 35670:return Xb;case 35667:case 35671:return Wb;case 35668:case 35672:return qb;case 35669:case 35673:return Yb;case 5125:return jb;case 36294:return Zb;case 36295:return Kb;case 36296:return Qb;case 35678:case 36198:case 36298:case 36306:case 35682:return Jb;case 35679:case 36299:case 36307:return $b;case 35680:case 36300:case 36308:case 36293:return tA;case 36289:case 36303:case 36311:case 36292:return eA}}class iA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=zb(i.type)}}class aA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=nA(i.type)}}class sA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Vh=/(\w+)(\])?(\[|\.)?/g;function U0(o,t){o.seq.push(t),o.map[t.id]=t}function rA(o,t,i){const s=o.name,l=s.length;for(Vh.lastIndex=0;;){const c=Vh.exec(s),h=Vh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){U0(i,p===void 0?new iA(d,o,t):new aA(d,o,t));break}else{let v=i.map[d];v===void 0&&(v=new sA(d),U0(i,v)),i=v}}}class qc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);rA(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function L0(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const oA=37297;let lA=0;function cA(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const N0=new ue;function uA(o){we._getMatrix(N0,we.workingColorSpace,o);const t=`mat3( ${N0.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(o)){case Yc:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function O0(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+cA(o.getShaderSource(t),d)}else return c}function fA(o,t){const i=uA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function hA(o,t){let i;switch(t){case cS:i="Linear";break;case uS:i="Reinhard";break;case fS:i="Cineon";break;case hS:i="ACESFilmic";break;case pS:i="AgX";break;case mS:i="Neutral";break;case dS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Bc=new W;function dA(){we.getLuminanceCoefficients(Bc);const o=Bc.x.toFixed(4),t=Bc.y.toFixed(4),i=Bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function mA(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function _A(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Xo(o){return o!==""}function P0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function z0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Od(o){return o.replace(gA,yA)}const vA=new Map;function yA(o,t){let i=pe[t];if(i===void 0){const s=vA.get(t);if(s!==void 0)i=pe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Od(i)}const xA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function B0(o){return o.replace(xA,SA)}function SA(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function I0(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function MA(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===W0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Vx?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===sa&&(t="SHADOWMAP_TYPE_VSM"),t}function EA(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Or:case Pr:t="ENVMAP_TYPE_CUBE";break;case $c:t="ENVMAP_TYPE_CUBE_UV";break}return t}function TA(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Pr:t="ENVMAP_MODE_REFRACTION";break}return t}function bA(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case q0:t="ENVMAP_BLENDING_MULTIPLY";break;case oS:t="ENVMAP_BLENDING_MIX";break;case lS:t="ENVMAP_BLENDING_ADD";break}return t}function AA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function RA(o,t,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=MA(i),p=EA(i),g=TA(i),v=bA(i),y=AA(i),S=pA(i),T=mA(c),A=l.createProgram();let M,_,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Xo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Xo).join(`
`),_.length>0&&(_+=`
`)):(M=[I0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),_=[I0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xa?"#define TONE_MAPPING":"",i.toneMapping!==Xa?pe.tonemapping_pars_fragment:"",i.toneMapping!==Xa?hA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,fA("linearToOutputTexel",i.outputColorSpace),dA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Xo).join(`
`)),h=Od(h),h=P0(h,i),h=z0(h,i),d=Od(d),d=P0(d,i),d=z0(d,i),h=B0(h),d=B0(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===Hg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Hg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=O+M+h,w=O+_+d,P=L0(l,l.VERTEX_SHADER,U),F=L0(l,l.FRAGMENT_SHADER,w);l.attachShader(A,P),l.attachShader(A,F),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function H(B){if(o.debug.checkShaderErrors){const et=l.getProgramInfoLog(A)||"",ot=l.getShaderInfoLog(P)||"",lt=l.getShaderInfoLog(F)||"",ft=et.trim(),z=ot.trim(),K=lt.trim();let Y=!0,xt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,P,F);else{const L=O0(l,P,"vertex"),J=O0(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ft+`
`+L+`
`+J)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(z===""||K==="")&&(xt=!1);xt&&(B.diagnostics={runnable:Y,programLog:ft,vertexShader:{log:z,prefix:M},fragmentShader:{log:K,prefix:_}})}l.deleteShader(P),l.deleteShader(F),V=new qc(l,A),D=_A(l,A)}let V;this.getUniforms=function(){return V===void 0&&H(this),V};let D;this.getAttributes=function(){return D===void 0&&H(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,oA)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=lA++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=P,this.fragmentShader=F,this}let wA=0;class CA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new DA(t),i.set(t,s)),s}}class DA{constructor(t){this.id=wA++,this.code=t,this.usedTimes=0}}function UA(o,t,i,s,l,c,h){const d=new Xd,m=new CA,p=new Set,g=[],v=l.logarithmicDepthBuffer,y=l.vertexTextures;let S=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,C,B,et,ot){const lt=et.fog,ft=ot.geometry,z=D.isMeshStandardMaterial?et.environment:null,K=(D.isMeshStandardMaterial?i:t).get(D.envMap||z),Y=K&&K.mapping===$c?K.image.height:null,xt=T[D.type];D.precision!==null&&(S=l.getMaxPrecision(D.precision),S!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const L=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,J=L!==void 0?L.length:0;let yt=0;ft.morphAttributes.position!==void 0&&(yt=1),ft.morphAttributes.normal!==void 0&&(yt=2),ft.morphAttributes.color!==void 0&&(yt=3);let St,Rt,nt,pt;if(xt){const be=Ni[xt];St=be.vertexShader,Rt=be.fragmentShader}else St=D.vertexShader,Rt=D.fragmentShader,m.update(D),nt=m.getVertexShaderID(D),pt=m.getFragmentShaderID(D);const Mt=o.getRenderTarget(),Ut=o.state.buffers.depth.getReversed(),Xt=ot.isInstancedMesh===!0,ae=ot.isBatchedMesh===!0,Ce=!!D.map,fe=!!D.matcap,G=!!K,Ee=!!D.aoMap,Kt=!!D.lightMap,ge=!!D.bumpMap,zt=!!D.normalMap,Le=!!D.displacementMap,ut=!!D.emissiveMap,Bt=!!D.metalnessMap,le=!!D.roughnessMap,te=D.anisotropy>0,N=D.clearcoat>0,E=D.dispersion>0,tt=D.iridescence>0,ht=D.sheen>0,vt=D.transmission>0,ct=te&&!!D.anisotropyMap,It=N&&!!D.clearcoatMap,wt=N&&!!D.clearcoatNormalMap,Wt=N&&!!D.clearcoatRoughnessMap,Yt=tt&&!!D.iridescenceMap,Et=tt&&!!D.iridescenceThicknessMap,Nt=ht&&!!D.sheenColorMap,Zt=ht&&!!D.sheenRoughnessMap,kt=!!D.specularMap,Dt=!!D.specularColorMap,oe=!!D.specularIntensityMap,X=vt&&!!D.transmissionMap,At=vt&&!!D.thicknessMap,Ct=!!D.gradientMap,Ft=!!D.alphaMap,Tt=D.alphaTest>0,gt=!!D.alphaHash,Vt=!!D.extensions;let re=Xa;D.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(re=o.toneMapping);const Ue={shaderID:xt,shaderType:D.type,shaderName:D.name,vertexShader:St,fragmentShader:Rt,defines:D.defines,customVertexShaderID:nt,customFragmentShaderID:pt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:ae,batchingColor:ae&&ot._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&ot.instanceColor!==null,instancingMorph:Xt&&ot.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Mt===null?o.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:zr,alphaToCoverage:!!D.alphaToCoverage,map:Ce,matcap:fe,envMap:G,envMapMode:G&&K.mapping,envMapCubeUVHeight:Y,aoMap:Ee,lightMap:Kt,bumpMap:ge,normalMap:zt,displacementMap:y&&Le,emissiveMap:ut,normalMapObjectSpace:zt&&D.normalMapType===yS,normalMapTangentSpace:zt&&D.normalMapType===nv,metalnessMap:Bt,roughnessMap:le,anisotropy:te,anisotropyMap:ct,clearcoat:N,clearcoatMap:It,clearcoatNormalMap:wt,clearcoatRoughnessMap:Wt,dispersion:E,iridescence:tt,iridescenceMap:Yt,iridescenceThicknessMap:Et,sheen:ht,sheenColorMap:Nt,sheenRoughnessMap:Zt,specularMap:kt,specularColorMap:Dt,specularIntensityMap:oe,transmission:vt,transmissionMap:X,thicknessMap:At,gradientMap:Ct,opaque:D.transparent===!1&&D.blending===Dr&&D.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Tt,alphaHash:gt,combine:D.combine,mapUv:Ce&&A(D.map.channel),aoMapUv:Ee&&A(D.aoMap.channel),lightMapUv:Kt&&A(D.lightMap.channel),bumpMapUv:ge&&A(D.bumpMap.channel),normalMapUv:zt&&A(D.normalMap.channel),displacementMapUv:Le&&A(D.displacementMap.channel),emissiveMapUv:ut&&A(D.emissiveMap.channel),metalnessMapUv:Bt&&A(D.metalnessMap.channel),roughnessMapUv:le&&A(D.roughnessMap.channel),anisotropyMapUv:ct&&A(D.anisotropyMap.channel),clearcoatMapUv:It&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:wt&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&A(D.sheenRoughnessMap.channel),specularMapUv:kt&&A(D.specularMap.channel),specularColorMapUv:Dt&&A(D.specularColorMap.channel),specularIntensityMapUv:oe&&A(D.specularIntensityMap.channel),transmissionMapUv:X&&A(D.transmissionMap.channel),thicknessMapUv:At&&A(D.thicknessMap.channel),alphaMapUv:Ft&&A(D.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(zt||te),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!ft.attributes.uv&&(Ce||Ft),fog:!!lt,useFog:D.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ut,skinning:ot.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:yt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:re,decodeVideoTexture:Ce&&D.map.isVideoTexture===!0&&we.getTransfer(D.map.colorSpace)===Fe,decodeVideoTextureEmissive:ut&&D.emissiveMap.isVideoTexture===!0&&we.getTransfer(D.emissiveMap.colorSpace)===Fe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ra,flipSided:D.side===jn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Vt&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&D.extensions.multiDraw===!0||ae)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ue.vertexUv1s=p.has(1),Ue.vertexUv2s=p.has(2),Ue.vertexUv3s=p.has(3),p.clear(),Ue}function _(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const B in D.defines)C.push(B),C.push(D.defines[B]);return D.isRawShaderMaterial===!1&&(O(C,D),U(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function O(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function U(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const C=T[D.type];let B;if(C){const et=Ni[C];B=ZS.clone(et.uniforms)}else B=D.uniforms;return B}function P(D,C){let B;for(let et=0,ot=g.length;et<ot;et++){const lt=g[et];if(lt.cacheKey===C){B=lt,++B.usedTimes;break}}return B===void 0&&(B=new RA(o,C,D,c),g.push(B)),B}function F(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function H(D){m.remove(D)}function V(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:w,acquireProgram:P,releaseProgram:F,releaseShaderCache:H,programs:g,dispose:V}}function LA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function NA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function F0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function H0(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(v,y,S,T,A,M){let _=o[t];return _===void 0?(_={id:v.id,object:v,geometry:y,material:S,groupOrder:T,renderOrder:v.renderOrder,z:A,group:M},o[t]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=S,_.groupOrder=T,_.renderOrder=v.renderOrder,_.z=A,_.group=M),t++,_}function d(v,y,S,T,A,M){const _=h(v,y,S,T,A,M);S.transmission>0?s.push(_):S.transparent===!0?l.push(_):i.push(_)}function m(v,y,S,T,A,M){const _=h(v,y,S,T,A,M);S.transmission>0?s.unshift(_):S.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,y){i.length>1&&i.sort(v||NA),s.length>1&&s.sort(y||F0),l.length>1&&l.sort(y||F0)}function g(){for(let v=t,y=o.length;v<y;v++){const S=o[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function OA(){let o=new WeakMap;function t(s,l){const c=o.get(s);let h;return c===void 0?(h=new H0,o.set(s,[h])):l>=c.length?(h=new H0,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function PA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new W,color:new Me};break;case"SpotLight":i={position:new W,direction:new W,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new W,color:new Me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new W,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":i={color:new Me,position:new W,halfWidth:new W,halfHeight:new W};break}return o[t.id]=i,i}}}function zA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let BA=0;function IA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function FA(o){const t=new PA,i=zA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new W);const l=new W,c=new qe,h=new qe;function d(p){let g=0,v=0,y=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let S=0,T=0,A=0,M=0,_=0,O=0,U=0,w=0,P=0,F=0,H=0;p.sort(IA);for(let D=0,C=p.length;D<C;D++){const B=p[D],et=B.color,ot=B.intensity,lt=B.distance,ft=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=et.r*ot,v+=et.g*ot,y+=et.b*ot;else if(B.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(B.sh.coefficients[z],ot);H++}else if(B.isDirectionalLight){const z=t.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const K=B.shadow,Y=i.get(B);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,s.directionalShadow[S]=Y,s.directionalShadowMap[S]=ft,s.directionalShadowMatrix[S]=B.shadow.matrix,O++}s.directional[S]=z,S++}else if(B.isSpotLight){const z=t.get(B);z.position.setFromMatrixPosition(B.matrixWorld),z.color.copy(et).multiplyScalar(ot),z.distance=lt,z.coneCos=Math.cos(B.angle),z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),z.decay=B.decay,s.spot[A]=z;const K=B.shadow;if(B.map&&(s.spotLightMap[P]=B.map,P++,K.updateMatrices(B),B.castShadow&&F++),s.spotLightMatrix[A]=K.matrix,B.castShadow){const Y=i.get(B);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,s.spotShadow[A]=Y,s.spotShadowMap[A]=ft,w++}A++}else if(B.isRectAreaLight){const z=t.get(B);z.color.copy(et).multiplyScalar(ot),z.halfWidth.set(B.width*.5,0,0),z.halfHeight.set(0,B.height*.5,0),s.rectArea[M]=z,M++}else if(B.isPointLight){const z=t.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),z.distance=B.distance,z.decay=B.decay,B.castShadow){const K=B.shadow,Y=i.get(B);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,s.pointShadow[T]=Y,s.pointShadowMap[T]=ft,s.pointShadowMatrix[T]=B.shadow.matrix,U++}s.point[T]=z,T++}else if(B.isHemisphereLight){const z=t.get(B);z.skyColor.copy(B.color).multiplyScalar(ot),z.groundColor.copy(B.groundColor).multiplyScalar(ot),s.hemi[_]=z,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pt.LTC_FLOAT_1,s.rectAreaLTC2=Pt.LTC_FLOAT_2):(s.rectAreaLTC1=Pt.LTC_HALF_1,s.rectAreaLTC2=Pt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=y;const V=s.hash;(V.directionalLength!==S||V.pointLength!==T||V.spotLength!==A||V.rectAreaLength!==M||V.hemiLength!==_||V.numDirectionalShadows!==O||V.numPointShadows!==U||V.numSpotShadows!==w||V.numSpotMaps!==P||V.numLightProbes!==H)&&(s.directional.length=S,s.spot.length=A,s.rectArea.length=M,s.point.length=T,s.hemi.length=_,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=w+P-F,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=H,V.directionalLength=S,V.pointLength=T,V.spotLength=A,V.rectAreaLength=M,V.hemiLength=_,V.numDirectionalShadows=O,V.numPointShadows=U,V.numSpotShadows=w,V.numSpotMaps=P,V.numLightProbes=H,s.version=BA++)}function m(p,g){let v=0,y=0,S=0,T=0,A=0;const M=g.matrixWorldInverse;for(let _=0,O=p.length;_<O;_++){const U=p[_];if(U.isDirectionalLight){const w=s.directional[v];w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),v++}else if(U.isSpotLight){const w=s.spot[S];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const w=s.rectArea[T];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(M),h.identity(),c.copy(U.matrixWorld),c.premultiply(M),h.extractRotation(c),w.halfWidth.set(U.width*.5,0,0),w.halfHeight.set(0,U.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),T++}else if(U.isPointLight){const w=s.point[y];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(M),y++}else if(U.isHemisphereLight){const w=s.hemi[A];w.direction.setFromMatrixPosition(U.matrixWorld),w.direction.transformDirection(M),A++}}}return{setup:d,setupView:m,state:s}}function G0(o){const t=new FA(o),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function HA(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new G0(o),t.set(l,[d])):c>=h.length?(d=new G0(o),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const GA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kA(o,t,i){let s=new qd;const l=new Qt,c=new Qt,h=new Ve,d=new cM({depthPacking:vS}),m=new uM,p={},g=i.maxTextureSize,v={[ca]:jn,[jn]:ca,[ra]:ra},y=new ua({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:GA,fragmentShader:VA}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const T=new Nn;T.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new bn(T,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=W0;let _=this.type;this.render=function(F,H,V){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),et=o.state;et.setBlending(ka),et.buffers.depth.getReversed()?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const ot=_!==sa&&this.type===sa,lt=_===sa&&this.type!==sa;for(let ft=0,z=F.length;ft<z;ft++){const K=F[ft],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const xt=Y.getFrameExtents();if(l.multiply(xt),c.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/xt.x),l.x=c.x*xt.x,Y.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/xt.y),l.y=c.y*xt.y,Y.mapSize.y=c.y)),Y.map===null||ot===!0||lt===!0){const J=this.type!==sa?{minFilter:bi,magFilter:bi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new bs(l.x,l.y,J),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const L=Y.getViewportCount();for(let J=0;J<L;J++){const yt=Y.getViewport(J);h.set(c.x*yt.x,c.y*yt.y,c.x*yt.z,c.y*yt.w),et.viewport(h),Y.updateMatrices(K,J),s=Y.getFrustum(),w(H,V,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===sa&&O(Y,V),Y.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(D,C,B)};function O(F,H){const V=t.update(A);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new bs(l.x,l.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(H,null,V,y,A,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(H,null,V,S,A,null)}function U(F,H,V,D){let C=null;const B=V.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(B!==void 0)C=B;else if(C=V.isPointLight===!0?m:d,o.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const et=C.uuid,ot=H.uuid;let lt=p[et];lt===void 0&&(lt={},p[et]=lt);let ft=lt[ot];ft===void 0&&(ft=C.clone(),lt[ot]=ft,H.addEventListener("dispose",P)),C=ft}if(C.visible=H.visible,C.wireframe=H.wireframe,D===sa?C.side=H.shadowSide!==null?H.shadowSide:H.side:C.side=H.shadowSide!==null?H.shadowSide:v[H.side],C.alphaMap=H.alphaMap,C.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,C.map=H.map,C.clipShadows=H.clipShadows,C.clippingPlanes=H.clippingPlanes,C.clipIntersection=H.clipIntersection,C.displacementMap=H.displacementMap,C.displacementScale=H.displacementScale,C.displacementBias=H.displacementBias,C.wireframeLinewidth=H.wireframeLinewidth,C.linewidth=H.linewidth,V.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const et=o.properties.get(C);et.light=V}return C}function w(F,H,V,D,C){if(F.visible===!1)return;if(F.layers.test(H.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===sa)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,F.matrixWorld);const ot=t.update(F),lt=F.material;if(Array.isArray(lt)){const ft=ot.groups;for(let z=0,K=ft.length;z<K;z++){const Y=ft[z],xt=lt[Y.materialIndex];if(xt&&xt.visible){const L=U(F,xt,D,C);F.onBeforeShadow(o,F,H,V,ot,L,Y),o.renderBufferDirect(V,null,ot,L,F,Y),F.onAfterShadow(o,F,H,V,ot,L,Y)}}}else if(lt.visible){const ft=U(F,lt,D,C);F.onBeforeShadow(o,F,H,V,ot,ft,null),o.renderBufferDirect(V,null,ot,ft,F,null),F.onAfterShadow(o,F,H,V,ot,ft,null)}}const et=F.children;for(let ot=0,lt=et.length;ot<lt;ot++)w(et[ot],H,V,D,C)}function P(F){F.target.removeEventListener("dispose",P);for(const V in p){const D=p[V],C=F.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const XA={[qh]:Yh,[jh]:Qh,[Zh]:Jh,[Nr]:Kh,[Yh]:qh,[Qh]:jh,[Jh]:Zh,[Kh]:Nr};function WA(o,t){function i(){let X=!1;const At=new Ve;let Ct=null;const Ft=new Ve(0,0,0,0);return{setMask:function(Tt){Ct!==Tt&&!X&&(o.colorMask(Tt,Tt,Tt,Tt),Ct=Tt)},setLocked:function(Tt){X=Tt},setClear:function(Tt,gt,Vt,re,Ue){Ue===!0&&(Tt*=re,gt*=re,Vt*=re),At.set(Tt,gt,Vt,re),Ft.equals(At)===!1&&(o.clearColor(Tt,gt,Vt,re),Ft.copy(At))},reset:function(){X=!1,Ct=null,Ft.set(-1,0,0,0)}}}function s(){let X=!1,At=!1,Ct=null,Ft=null,Tt=null;return{setReversed:function(gt){if(At!==gt){const Vt=t.get("EXT_clip_control");gt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),At=gt;const re=Tt;Tt=null,this.setClear(re)}},getReversed:function(){return At},setTest:function(gt){gt?Mt(o.DEPTH_TEST):Ut(o.DEPTH_TEST)},setMask:function(gt){Ct!==gt&&!X&&(o.depthMask(gt),Ct=gt)},setFunc:function(gt){if(At&&(gt=XA[gt]),Ft!==gt){switch(gt){case qh:o.depthFunc(o.NEVER);break;case Yh:o.depthFunc(o.ALWAYS);break;case jh:o.depthFunc(o.LESS);break;case Nr:o.depthFunc(o.LEQUAL);break;case Zh:o.depthFunc(o.EQUAL);break;case Kh:o.depthFunc(o.GEQUAL);break;case Qh:o.depthFunc(o.GREATER);break;case Jh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ft=gt}},setLocked:function(gt){X=gt},setClear:function(gt){Tt!==gt&&(At&&(gt=1-gt),o.clearDepth(gt),Tt=gt)},reset:function(){X=!1,Ct=null,Ft=null,Tt=null,At=!1}}}function l(){let X=!1,At=null,Ct=null,Ft=null,Tt=null,gt=null,Vt=null,re=null,Ue=null;return{setTest:function(be){X||(be?Mt(o.STENCIL_TEST):Ut(o.STENCIL_TEST))},setMask:function(be){At!==be&&!X&&(o.stencilMask(be),At=be)},setFunc:function(be,_i,ln){(Ct!==be||Ft!==_i||Tt!==ln)&&(o.stencilFunc(be,_i,ln),Ct=be,Ft=_i,Tt=ln)},setOp:function(be,_i,ln){(gt!==be||Vt!==_i||re!==ln)&&(o.stencilOp(be,_i,ln),gt=be,Vt=_i,re=ln)},setLocked:function(be){X=be},setClear:function(be){Ue!==be&&(o.clearStencil(be),Ue=be)},reset:function(){X=!1,At=null,Ct=null,Ft=null,Tt=null,gt=null,Vt=null,re=null,Ue=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},y=new WeakMap,S=[],T=null,A=!1,M=null,_=null,O=null,U=null,w=null,P=null,F=null,H=new Me(0,0,0),V=0,D=!1,C=null,B=null,et=null,ot=null,lt=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=K>=2);let xt=null,L={};const J=o.getParameter(o.SCISSOR_BOX),yt=o.getParameter(o.VIEWPORT),St=new Ve().fromArray(J),Rt=new Ve().fromArray(yt);function nt(X,At,Ct,Ft){const Tt=new Uint8Array(4),gt=o.createTexture();o.bindTexture(X,gt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Vt=0;Vt<Ct;Vt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(At,0,o.RGBA,1,1,Ft,0,o.RGBA,o.UNSIGNED_BYTE,Tt):o.texImage2D(At+Vt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Tt);return gt}const pt={};pt[o.TEXTURE_2D]=nt(o.TEXTURE_2D,o.TEXTURE_2D,1),pt[o.TEXTURE_CUBE_MAP]=nt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[o.TEXTURE_2D_ARRAY]=nt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),pt[o.TEXTURE_3D]=nt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Mt(o.DEPTH_TEST),h.setFunc(Nr),ge(!1),zt(Pg),Mt(o.CULL_FACE),Ee(ka);function Mt(X){g[X]!==!0&&(o.enable(X),g[X]=!0)}function Ut(X){g[X]!==!1&&(o.disable(X),g[X]=!1)}function Xt(X,At){return v[X]!==At?(o.bindFramebuffer(X,At),v[X]=At,X===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=At),X===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=At),!0):!1}function ae(X,At){let Ct=S,Ft=!1;if(X){Ct=y.get(At),Ct===void 0&&(Ct=[],y.set(At,Ct));const Tt=X.textures;if(Ct.length!==Tt.length||Ct[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,Vt=Tt.length;gt<Vt;gt++)Ct[gt]=o.COLOR_ATTACHMENT0+gt;Ct.length=Tt.length,Ft=!0}}else Ct[0]!==o.BACK&&(Ct[0]=o.BACK,Ft=!0);Ft&&o.drawBuffers(Ct)}function Ce(X){return T!==X?(o.useProgram(X),T=X,!0):!1}const fe={[gs]:o.FUNC_ADD,[Xx]:o.FUNC_SUBTRACT,[Wx]:o.FUNC_REVERSE_SUBTRACT};fe[qx]=o.MIN,fe[Yx]=o.MAX;const G={[jx]:o.ZERO,[Zx]:o.ONE,[Kx]:o.SRC_COLOR,[Xh]:o.SRC_ALPHA,[nS]:o.SRC_ALPHA_SATURATE,[tS]:o.DST_COLOR,[Jx]:o.DST_ALPHA,[Qx]:o.ONE_MINUS_SRC_COLOR,[Wh]:o.ONE_MINUS_SRC_ALPHA,[eS]:o.ONE_MINUS_DST_COLOR,[$x]:o.ONE_MINUS_DST_ALPHA,[iS]:o.CONSTANT_COLOR,[aS]:o.ONE_MINUS_CONSTANT_COLOR,[sS]:o.CONSTANT_ALPHA,[rS]:o.ONE_MINUS_CONSTANT_ALPHA};function Ee(X,At,Ct,Ft,Tt,gt,Vt,re,Ue,be){if(X===ka){A===!0&&(Ut(o.BLEND),A=!1);return}if(A===!1&&(Mt(o.BLEND),A=!0),X!==kx){if(X!==M||be!==D){if((_!==gs||w!==gs)&&(o.blendEquation(o.FUNC_ADD),_=gs,w=gs),be)switch(X){case Dr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case zg:o.blendFunc(o.ONE,o.ONE);break;case Bg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ig:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Dr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case zg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Bg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ig:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}O=null,U=null,P=null,F=null,H.set(0,0,0),V=0,M=X,D=be}return}Tt=Tt||At,gt=gt||Ct,Vt=Vt||Ft,(At!==_||Tt!==w)&&(o.blendEquationSeparate(fe[At],fe[Tt]),_=At,w=Tt),(Ct!==O||Ft!==U||gt!==P||Vt!==F)&&(o.blendFuncSeparate(G[Ct],G[Ft],G[gt],G[Vt]),O=Ct,U=Ft,P=gt,F=Vt),(re.equals(H)===!1||Ue!==V)&&(o.blendColor(re.r,re.g,re.b,Ue),H.copy(re),V=Ue),M=X,D=!1}function Kt(X,At){X.side===ra?Ut(o.CULL_FACE):Mt(o.CULL_FACE);let Ct=X.side===jn;At&&(Ct=!Ct),ge(Ct),X.blending===Dr&&X.transparent===!1?Ee(ka):Ee(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ft=X.stencilWrite;d.setTest(Ft),Ft&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ut(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Mt(o.SAMPLE_ALPHA_TO_COVERAGE):Ut(o.SAMPLE_ALPHA_TO_COVERAGE)}function ge(X){C!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),C=X)}function zt(X){X!==Hx?(Mt(o.CULL_FACE),X!==B&&(X===Pg?o.cullFace(o.BACK):X===Gx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ut(o.CULL_FACE),B=X}function Le(X){X!==et&&(z&&o.lineWidth(X),et=X)}function ut(X,At,Ct){X?(Mt(o.POLYGON_OFFSET_FILL),(ot!==At||lt!==Ct)&&(o.polygonOffset(At,Ct),ot=At,lt=Ct)):Ut(o.POLYGON_OFFSET_FILL)}function Bt(X){X?Mt(o.SCISSOR_TEST):Ut(o.SCISSOR_TEST)}function le(X){X===void 0&&(X=o.TEXTURE0+ft-1),xt!==X&&(o.activeTexture(X),xt=X)}function te(X,At,Ct){Ct===void 0&&(xt===null?Ct=o.TEXTURE0+ft-1:Ct=xt);let Ft=L[Ct];Ft===void 0&&(Ft={type:void 0,texture:void 0},L[Ct]=Ft),(Ft.type!==X||Ft.texture!==At)&&(xt!==Ct&&(o.activeTexture(Ct),xt=Ct),o.bindTexture(X,At||pt[X]),Ft.type=X,Ft.texture=At)}function N(){const X=L[xt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ht(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function vt(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function It(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Wt(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Yt(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Nt(X){St.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),St.copy(X))}function Zt(X){Rt.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Rt.copy(X))}function kt(X,At){let Ct=p.get(At);Ct===void 0&&(Ct=new WeakMap,p.set(At,Ct));let Ft=Ct.get(X);Ft===void 0&&(Ft=o.getUniformBlockIndex(At,X.name),Ct.set(X,Ft))}function Dt(X,At){const Ft=p.get(At).get(X);m.get(At)!==Ft&&(o.uniformBlockBinding(At,Ft,X.__bindingPointIndex),m.set(At,Ft))}function oe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},xt=null,L={},v={},y=new WeakMap,S=[],T=null,A=!1,M=null,_=null,O=null,U=null,w=null,P=null,F=null,H=new Me(0,0,0),V=0,D=!1,C=null,B=null,et=null,ot=null,lt=null,St.set(0,0,o.canvas.width,o.canvas.height),Rt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:Mt,disable:Ut,bindFramebuffer:Xt,drawBuffers:ae,useProgram:Ce,setBlending:Ee,setMaterial:Kt,setFlipSided:ge,setCullFace:zt,setLineWidth:Le,setPolygonOffset:ut,setScissorTest:Bt,activeTexture:le,bindTexture:te,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:tt,texImage2D:Yt,texImage3D:Et,updateUBOMapping:kt,uniformBlockBinding:Dt,texStorage2D:wt,texStorage3D:Wt,texSubImage2D:ht,texSubImage3D:vt,compressedTexSubImage2D:ct,compressedTexSubImage3D:It,scissor:Nt,viewport:Zt,reset:oe}}function qA(o,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Qt,g=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(N,E){return S?new OffscreenCanvas(N,E):Zc("canvas")}function A(N,E,tt){let ht=1;const vt=te(N);if((vt.width>tt||vt.height>tt)&&(ht=tt/Math.max(vt.width,vt.height)),ht<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ct=Math.floor(ht*vt.width),It=Math.floor(ht*vt.height);v===void 0&&(v=T(ct,It));const wt=E?T(ct,It):v;return wt.width=ct,wt.height=It,wt.getContext("2d").drawImage(N,0,0,ct,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ct+"x"+It+")."),wt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),N;return N}function M(N){return N.generateMipmaps}function _(N){o.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(N,E,tt,ht,vt=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ct=E;if(E===o.RED&&(tt===o.FLOAT&&(ct=o.R32F),tt===o.HALF_FLOAT&&(ct=o.R16F),tt===o.UNSIGNED_BYTE&&(ct=o.R8)),E===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.R8UI),tt===o.UNSIGNED_SHORT&&(ct=o.R16UI),tt===o.UNSIGNED_INT&&(ct=o.R32UI),tt===o.BYTE&&(ct=o.R8I),tt===o.SHORT&&(ct=o.R16I),tt===o.INT&&(ct=o.R32I)),E===o.RG&&(tt===o.FLOAT&&(ct=o.RG32F),tt===o.HALF_FLOAT&&(ct=o.RG16F),tt===o.UNSIGNED_BYTE&&(ct=o.RG8)),E===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.RG8UI),tt===o.UNSIGNED_SHORT&&(ct=o.RG16UI),tt===o.UNSIGNED_INT&&(ct=o.RG32UI),tt===o.BYTE&&(ct=o.RG8I),tt===o.SHORT&&(ct=o.RG16I),tt===o.INT&&(ct=o.RG32I)),E===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),tt===o.UNSIGNED_INT&&(ct=o.RGB32UI),tt===o.BYTE&&(ct=o.RGB8I),tt===o.SHORT&&(ct=o.RGB16I),tt===o.INT&&(ct=o.RGB32I)),E===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),tt===o.UNSIGNED_INT&&(ct=o.RGBA32UI),tt===o.BYTE&&(ct=o.RGBA8I),tt===o.SHORT&&(ct=o.RGBA16I),tt===o.INT&&(ct=o.RGBA32I)),E===o.RGB&&tt===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),E===o.RGBA){const It=vt?Yc:we.getTransfer(ht);tt===o.FLOAT&&(ct=o.RGBA32F),tt===o.HALF_FLOAT&&(ct=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(ct=It===Fe?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function w(N,E){let tt;return N?E===null||E===Es||E===qo?tt=o.DEPTH24_STENCIL8:E===oa?tt=o.DEPTH32F_STENCIL8:E===Wo&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Es||E===qo?tt=o.DEPTH_COMPONENT24:E===oa?tt=o.DEPTH_COMPONENT32F:E===Wo&&(tt=o.DEPTH_COMPONENT16),tt}function P(N,E){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==bi&&N.minFilter!==Pi?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function F(N){const E=N.target;E.removeEventListener("dispose",F),V(E),E.isVideoTexture&&g.delete(E)}function H(N){const E=N.target;E.removeEventListener("dispose",H),C(E)}function V(N){const E=s.get(N);if(E.__webglInit===void 0)return;const tt=N.source,ht=y.get(tt);if(ht){const vt=ht[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&D(N),Object.keys(ht).length===0&&y.delete(tt)}s.remove(N)}function D(N){const E=s.get(N);o.deleteTexture(E.__webglTexture);const tt=N.source,ht=y.get(tt);delete ht[E.__cacheKey],h.memory.textures--}function C(N){const E=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let vt=0;vt<E.__webglFramebuffer[ht].length;vt++)o.deleteFramebuffer(E.__webglFramebuffer[ht][vt]);else o.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)o.deleteFramebuffer(E.__webglFramebuffer[ht]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const tt=N.textures;for(let ht=0,vt=tt.length;ht<vt;ht++){const ct=s.get(tt[ht]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),h.memory.textures--),s.remove(tt[ht])}s.remove(N)}let B=0;function et(){B=0}function ot(){const N=B;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),B+=1,N}function lt(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function ft(N,E){const tt=s.get(N);if(N.isVideoTexture&&Bt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&tt.__version!==N.version){const ht=N.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(tt,N,E);return}}else N.isExternalTexture&&(tt.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+E)}function z(N,E){const tt=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){pt(tt,N,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+E)}function K(N,E){const tt=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){pt(tt,N,E);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+E)}function Y(N,E){const tt=s.get(N);if(N.version>0&&tt.__version!==N.version){Mt(tt,N,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+E)}const xt={[ed]:o.REPEAT,[xs]:o.CLAMP_TO_EDGE,[nd]:o.MIRRORED_REPEAT},L={[bi]:o.NEAREST,[_S]:o.NEAREST_MIPMAP_NEAREST,[uc]:o.NEAREST_MIPMAP_LINEAR,[Pi]:o.LINEAR,[ch]:o.LINEAR_MIPMAP_NEAREST,[Ss]:o.LINEAR_MIPMAP_LINEAR},J={[xS]:o.NEVER,[AS]:o.ALWAYS,[SS]:o.LESS,[iv]:o.LEQUAL,[MS]:o.EQUAL,[bS]:o.GEQUAL,[ES]:o.GREATER,[TS]:o.NOTEQUAL};function yt(N,E){if(E.type===oa&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Pi||E.magFilter===ch||E.magFilter===uc||E.magFilter===Ss||E.minFilter===Pi||E.minFilter===ch||E.minFilter===uc||E.minFilter===Ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,xt[E.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,xt[E.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,xt[E.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,L[E.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,L[E.minFilter]),E.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,J[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===bi||E.minFilter!==uc&&E.minFilter!==Ss||E.type===oa&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(N,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function St(N,E){let tt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",F));const ht=E.source;let vt=y.get(ht);vt===void 0&&(vt={},y.set(ht,vt));const ct=lt(E);if(ct!==N.__cacheKey){vt[ct]===void 0&&(vt[ct]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),vt[ct].usedTimes++;const It=vt[N.__cacheKey];It!==void 0&&(vt[N.__cacheKey].usedTimes--,It.usedTimes===0&&D(E)),N.__cacheKey=ct,N.__webglTexture=vt[ct].texture}return tt}function Rt(N,E,tt){return Math.floor(Math.floor(N/tt)/E)}function nt(N,E,tt,ht){const ct=N.updateRanges;if(ct.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,tt,ht,E.data);else{ct.sort((Et,Nt)=>Et.start-Nt.start);let It=0;for(let Et=1;Et<ct.length;Et++){const Nt=ct[It],Zt=ct[Et],kt=Nt.start+Nt.count,Dt=Rt(Zt.start,E.width,4),oe=Rt(Nt.start,E.width,4);Zt.start<=kt+1&&Dt===oe&&Rt(Zt.start+Zt.count-1,E.width,4)===Dt?Nt.count=Math.max(Nt.count,Zt.start+Zt.count-Nt.start):(++It,ct[It]=Zt)}ct.length=It+1;const wt=o.getParameter(o.UNPACK_ROW_LENGTH),Wt=o.getParameter(o.UNPACK_SKIP_PIXELS),Yt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Et=0,Nt=ct.length;Et<Nt;Et++){const Zt=ct[Et],kt=Math.floor(Zt.start/4),Dt=Math.ceil(Zt.count/4),oe=kt%E.width,X=Math.floor(kt/E.width),At=Dt,Ct=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,oe),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,oe,X,At,Ct,tt,ht,E.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,wt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Wt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Yt)}}function pt(N,E,tt){let ht=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=o.TEXTURE_3D);const vt=St(N,E),ct=E.source;i.bindTexture(ht,N.__webglTexture,o.TEXTURE0+tt);const It=s.get(ct);if(ct.version!==It.__version||vt===!0){i.activeTexture(o.TEXTURE0+tt);const wt=we.getPrimaries(we.workingColorSpace),Wt=E.colorSpace===Va?null:we.getPrimaries(E.colorSpace),Yt=E.colorSpace===Va||wt===Wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let Et=A(E.image,!1,l.maxTextureSize);Et=le(E,Et);const Nt=c.convert(E.format,E.colorSpace),Zt=c.convert(E.type);let kt=U(E.internalFormat,Nt,Zt,E.colorSpace,E.isVideoTexture);yt(ht,E);let Dt;const oe=E.mipmaps,X=E.isVideoTexture!==!0,At=It.__version===void 0||vt===!0,Ct=ct.dataReady,Ft=P(E,Et);if(E.isDepthTexture)kt=w(E.format===jo,E.type),At&&(X?i.texStorage2D(o.TEXTURE_2D,1,kt,Et.width,Et.height):i.texImage2D(o.TEXTURE_2D,0,kt,Et.width,Et.height,0,Nt,Zt,null));else if(E.isDataTexture)if(oe.length>0){X&&At&&i.texStorage2D(o.TEXTURE_2D,Ft,kt,oe[0].width,oe[0].height);for(let Tt=0,gt=oe.length;Tt<gt;Tt++)Dt=oe[Tt],X?Ct&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Dt.width,Dt.height,Nt,Zt,Dt.data):i.texImage2D(o.TEXTURE_2D,Tt,kt,Dt.width,Dt.height,0,Nt,Zt,Dt.data);E.generateMipmaps=!1}else X?(At&&i.texStorage2D(o.TEXTURE_2D,Ft,kt,Et.width,Et.height),Ct&&nt(E,Et,Nt,Zt)):i.texImage2D(o.TEXTURE_2D,0,kt,Et.width,Et.height,0,Nt,Zt,Et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,kt,oe[0].width,oe[0].height,Et.depth);for(let Tt=0,gt=oe.length;Tt<gt;Tt++)if(Dt=oe[Tt],E.format!==Ti)if(Nt!==null)if(X){if(Ct)if(E.layerUpdates.size>0){const Vt=g0(Dt.width,Dt.height,E.format,E.type);for(const re of E.layerUpdates){const Ue=Dt.data.subarray(re*Vt/Dt.data.BYTES_PER_ELEMENT,(re+1)*Vt/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,re,Dt.width,Dt.height,1,Nt,Ue)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Dt.width,Dt.height,Et.depth,Nt,Dt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Tt,kt,Dt.width,Dt.height,Et.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ct&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Dt.width,Dt.height,Et.depth,Nt,Zt,Dt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Tt,kt,Dt.width,Dt.height,Et.depth,0,Nt,Zt,Dt.data)}else{X&&At&&i.texStorage2D(o.TEXTURE_2D,Ft,kt,oe[0].width,oe[0].height);for(let Tt=0,gt=oe.length;Tt<gt;Tt++)Dt=oe[Tt],E.format!==Ti?Nt!==null?X?Ct&&i.compressedTexSubImage2D(o.TEXTURE_2D,Tt,0,0,Dt.width,Dt.height,Nt,Dt.data):i.compressedTexImage2D(o.TEXTURE_2D,Tt,kt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ct&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Dt.width,Dt.height,Nt,Zt,Dt.data):i.texImage2D(o.TEXTURE_2D,Tt,kt,Dt.width,Dt.height,0,Nt,Zt,Dt.data)}else if(E.isDataArrayTexture)if(X){if(At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,kt,Et.width,Et.height,Et.depth),Ct)if(E.layerUpdates.size>0){const Tt=g0(Et.width,Et.height,E.format,E.type);for(const gt of E.layerUpdates){const Vt=Et.data.subarray(gt*Tt/Et.data.BYTES_PER_ELEMENT,(gt+1)*Tt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,Et.width,Et.height,1,Nt,Zt,Vt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Nt,Zt,Et.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,kt,Et.width,Et.height,Et.depth,0,Nt,Zt,Et.data);else if(E.isData3DTexture)X?(At&&i.texStorage3D(o.TEXTURE_3D,Ft,kt,Et.width,Et.height,Et.depth),Ct&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Nt,Zt,Et.data)):i.texImage3D(o.TEXTURE_3D,0,kt,Et.width,Et.height,Et.depth,0,Nt,Zt,Et.data);else if(E.isFramebufferTexture){if(At)if(X)i.texStorage2D(o.TEXTURE_2D,Ft,kt,Et.width,Et.height);else{let Tt=Et.width,gt=Et.height;for(let Vt=0;Vt<Ft;Vt++)i.texImage2D(o.TEXTURE_2D,Vt,kt,Tt,gt,0,Nt,Zt,null),Tt>>=1,gt>>=1}}else if(oe.length>0){if(X&&At){const Tt=te(oe[0]);i.texStorage2D(o.TEXTURE_2D,Ft,kt,Tt.width,Tt.height)}for(let Tt=0,gt=oe.length;Tt<gt;Tt++)Dt=oe[Tt],X?Ct&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Nt,Zt,Dt):i.texImage2D(o.TEXTURE_2D,Tt,kt,Nt,Zt,Dt);E.generateMipmaps=!1}else if(X){if(At){const Tt=te(Et);i.texStorage2D(o.TEXTURE_2D,Ft,kt,Tt.width,Tt.height)}Ct&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Nt,Zt,Et)}else i.texImage2D(o.TEXTURE_2D,0,kt,Nt,Zt,Et);M(E)&&_(ht),It.__version=ct.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Mt(N,E,tt){if(E.image.length!==6)return;const ht=St(N,E),vt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+tt);const ct=s.get(vt);if(vt.version!==ct.__version||ht===!0){i.activeTexture(o.TEXTURE0+tt);const It=we.getPrimaries(we.workingColorSpace),wt=E.colorSpace===Va?null:we.getPrimaries(E.colorSpace),Wt=E.colorSpace===Va||It===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const Yt=E.isCompressedTexture||E.image[0].isCompressedTexture,Et=E.image[0]&&E.image[0].isDataTexture,Nt=[];for(let gt=0;gt<6;gt++)!Yt&&!Et?Nt[gt]=A(E.image[gt],!0,l.maxCubemapSize):Nt[gt]=Et?E.image[gt].image:E.image[gt],Nt[gt]=le(E,Nt[gt]);const Zt=Nt[0],kt=c.convert(E.format,E.colorSpace),Dt=c.convert(E.type),oe=U(E.internalFormat,kt,Dt,E.colorSpace),X=E.isVideoTexture!==!0,At=ct.__version===void 0||ht===!0,Ct=vt.dataReady;let Ft=P(E,Zt);yt(o.TEXTURE_CUBE_MAP,E);let Tt;if(Yt){X&&At&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,oe,Zt.width,Zt.height);for(let gt=0;gt<6;gt++){Tt=Nt[gt].mipmaps;for(let Vt=0;Vt<Tt.length;Vt++){const re=Tt[Vt];E.format!==Ti?kt!==null?X?Ct&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,0,0,re.width,re.height,kt,re.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,oe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,0,0,re.width,re.height,kt,Dt,re.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,oe,re.width,re.height,0,kt,Dt,re.data)}}}else{if(Tt=E.mipmaps,X&&At){Tt.length>0&&Ft++;const gt=te(Nt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,oe,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Et){X?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Nt[gt].width,Nt[gt].height,kt,Dt,Nt[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,oe,Nt[gt].width,Nt[gt].height,0,kt,Dt,Nt[gt].data);for(let Vt=0;Vt<Tt.length;Vt++){const Ue=Tt[Vt].image[gt].image;X?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,0,0,Ue.width,Ue.height,kt,Dt,Ue.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,oe,Ue.width,Ue.height,0,kt,Dt,Ue.data)}}else{X?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,kt,Dt,Nt[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,oe,kt,Dt,Nt[gt]);for(let Vt=0;Vt<Tt.length;Vt++){const re=Tt[Vt];X?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,0,0,kt,Dt,re.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,oe,kt,Dt,re.image[gt])}}}M(E)&&_(o.TEXTURE_CUBE_MAP),ct.__version=vt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Ut(N,E,tt,ht,vt,ct){const It=c.convert(tt.format,tt.colorSpace),wt=c.convert(tt.type),Wt=U(tt.internalFormat,It,wt,tt.colorSpace),Yt=s.get(E),Et=s.get(tt);if(Et.__renderTarget=E,!Yt.__hasExternalTextures){const Nt=Math.max(1,E.width>>ct),Zt=Math.max(1,E.height>>ct);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,ct,Wt,Nt,Zt,E.depth,0,It,wt,null):i.texImage2D(vt,ct,Wt,Nt,Zt,0,It,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),ut(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,vt,Et.__webglTexture,0,Le(E)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,vt,Et.__webglTexture,ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Xt(N,E,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,N),E.depthBuffer){const ht=E.depthTexture,vt=ht&&ht.isDepthTexture?ht.type:null,ct=w(E.stencilBuffer,vt),It=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=Le(E);ut(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,ct,E.width,E.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,ct,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ct,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,It,o.RENDERBUFFER,N)}else{const ht=E.textures;for(let vt=0;vt<ht.length;vt++){const ct=ht[vt],It=c.convert(ct.format,ct.colorSpace),wt=c.convert(ct.type),Wt=U(ct.internalFormat,It,wt,ct.colorSpace),Yt=Le(E);tt&&ut(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,Wt,E.width,E.height):ut(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Yt,Wt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Wt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ae(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=s.get(E.depthTexture);ht.__renderTarget=E,(!ht.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ft(E.depthTexture,0);const vt=ht.__webglTexture,ct=Le(E);if(E.depthTexture.format===Yo)ut(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0);else if(E.depthTexture.format===jo)ut(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Ce(N){const E=s.get(N),tt=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ht=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const vt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",vt)};ht.addEventListener("dispose",vt),E.__depthDisposeCallback=vt}E.__boundDepthTexture=ht}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const ht=N.texture.mipmaps;ht&&ht.length>0?ae(E.__webglFramebuffer[0],N):ae(E.__webglFramebuffer,N)}else if(tt){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=o.createRenderbuffer(),Xt(E.__webglDepthbuffer[ht],N,!1);else{const vt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ct)}}else{const ht=N.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Xt(E.__webglDepthbuffer,N,!1);else{const vt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ct)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function fe(N,E,tt){const ht=s.get(N);E!==void 0&&Ut(ht.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&Ce(N)}function G(N){const E=N.texture,tt=s.get(N),ht=s.get(E);N.addEventListener("dispose",H);const vt=N.textures,ct=N.isWebGLCubeRenderTarget===!0,It=vt.length>1;if(It||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=E.version,h.memory.textures++),ct){tt.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer[wt]=[];for(let Wt=0;Wt<E.mipmaps.length;Wt++)tt.__webglFramebuffer[wt][Wt]=o.createFramebuffer()}else tt.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer=[];for(let wt=0;wt<E.mipmaps.length;wt++)tt.__webglFramebuffer[wt]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(It)for(let wt=0,Wt=vt.length;wt<Wt;wt++){const Yt=s.get(vt[wt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&ut(N)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let wt=0;wt<vt.length;wt++){const Wt=vt[wt];tt.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[wt]);const Yt=c.convert(Wt.format,Wt.colorSpace),Et=c.convert(Wt.type),Nt=U(Wt.internalFormat,Yt,Et,Wt.colorSpace,N.isXRRenderTarget===!0),Zt=Le(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Nt,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,tt.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),Xt(tt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),yt(o.TEXTURE_CUBE_MAP,E);for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Wt=0;Wt<E.mipmaps.length;Wt++)Ut(tt.__webglFramebuffer[wt][Wt],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Wt);else Ut(tt.__webglFramebuffer[wt],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(It){for(let wt=0,Wt=vt.length;wt<Wt;wt++){const Yt=vt[wt],Et=s.get(Yt);let Nt=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Nt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Nt,Et.__webglTexture),yt(Nt,Yt),Ut(tt.__webglFramebuffer,N,Yt,o.COLOR_ATTACHMENT0+wt,Nt,0),M(Yt)&&_(Nt)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(wt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,ht.__webglTexture),yt(wt,E),E.mipmaps&&E.mipmaps.length>0)for(let Wt=0;Wt<E.mipmaps.length;Wt++)Ut(tt.__webglFramebuffer[Wt],N,E,o.COLOR_ATTACHMENT0,wt,Wt);else Ut(tt.__webglFramebuffer,N,E,o.COLOR_ATTACHMENT0,wt,0);M(E)&&_(wt),i.unbindTexture()}N.depthBuffer&&Ce(N)}function Ee(N){const E=N.textures;for(let tt=0,ht=E.length;tt<ht;tt++){const vt=E[tt];if(M(vt)){const ct=O(N),It=s.get(vt).__webglTexture;i.bindTexture(ct,It),_(ct),i.unbindTexture()}}}const Kt=[],ge=[];function zt(N){if(N.samples>0){if(ut(N)===!1){const E=N.textures,tt=N.width,ht=N.height;let vt=o.COLOR_BUFFER_BIT;const ct=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,It=s.get(N),wt=E.length>1;if(wt)for(let Yt=0;Yt<E.length;Yt++)i.bindFramebuffer(o.FRAMEBUFFER,It.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,It.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const Wt=N.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Yt=0;Yt<E.length;Yt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,It.__webglColorRenderbuffer[Yt]);const Et=s.get(E[Yt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Et,0)}o.blitFramebuffer(0,0,tt,ht,0,0,tt,ht,vt,o.NEAREST),m===!0&&(Kt.length=0,ge.length=0,Kt.push(o.COLOR_ATTACHMENT0+Yt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Kt.push(ct),ge.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ge)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Kt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let Yt=0;Yt<E.length;Yt++){i.bindFramebuffer(o.FRAMEBUFFER,It.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,It.__webglColorRenderbuffer[Yt]);const Et=s.get(E[Yt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,It.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,Et,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Le(N){return Math.min(l.maxSamples,N.samples)}function ut(N){const E=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Bt(N){const E=h.render.frame;g.get(N)!==E&&(g.set(N,E),N.update())}function le(N,E){const tt=N.colorSpace,ht=N.format,vt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||tt!==zr&&tt!==Va&&(we.getTransfer(tt)===Fe?(ht!==Ti||vt!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),E}function te(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=et,this.setTexture2D=ft,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=fe,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=ut}function YA(o,t){function i(s,l=Va){let c;const h=we.getTransfer(l);if(s===Bi)return o.UNSIGNED_BYTE;if(s===Id)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Fd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===K0)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===j0)return o.BYTE;if(s===Z0)return o.SHORT;if(s===Wo)return o.UNSIGNED_SHORT;if(s===Bd)return o.INT;if(s===Es)return o.UNSIGNED_INT;if(s===oa)return o.FLOAT;if(s===Zo)return o.HALF_FLOAT;if(s===Q0)return o.ALPHA;if(s===J0)return o.RGB;if(s===Ti)return o.RGBA;if(s===Yo)return o.DEPTH_COMPONENT;if(s===jo)return o.DEPTH_STENCIL;if(s===$0)return o.RED;if(s===Hd)return o.RED_INTEGER;if(s===tv)return o.RG;if(s===Gd)return o.RG_INTEGER;if(s===Vd)return o.RGBA_INTEGER;if(s===Hc||s===Gc||s===Vc||s===kc)if(h===Fe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Hc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Hc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===id||s===ad||s===sd||s===rd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===id)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ad)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===rd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===od||s===ld||s===cd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===od||s===ld)return h===Fe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===cd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===_d||s===gd||s===vd||s===yd||s===xd||s===Sd||s===Md||s===Ed)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===ud)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===pd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===md)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_d)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Md)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ed)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xc||s===Td||s===bd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Xc)return h===Fe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Td)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===bd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ev||s===Ad||s===Rd||s===wd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Xc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Ad)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Rd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===qo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}class Ev extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const jA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class KA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Ev(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ua({vertexShader:jA,fragmentShader:ZA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new bn(new tl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QA extends As{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,y=null,S=null,T=null;const A=new KA,M={},_=i.getContextAttributes();let O=null,U=null;const w=[],P=[],F=new Qt;let H=null;const V=new ai;V.viewport=new Ve;const D=new ai;D.viewport=new Ve;const C=[V,D],B=new _M;let et=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let pt=w[nt];return pt===void 0&&(pt=new Uh,w[nt]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(nt){let pt=w[nt];return pt===void 0&&(pt=new Uh,w[nt]=pt),pt.getGripSpace()},this.getHand=function(nt){let pt=w[nt];return pt===void 0&&(pt=new Uh,w[nt]=pt),pt.getHandSpace()};function lt(nt){const pt=P.indexOf(nt.inputSource);if(pt===-1)return;const Mt=w[pt];Mt!==void 0&&(Mt.update(nt.inputSource,nt.frame,p||h),Mt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function ft(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",ft),l.removeEventListener("inputsourceschange",z);for(let nt=0;nt<w.length;nt++){const pt=P[nt];pt!==null&&(P[nt]=null,w[nt].disconnect(pt))}et=null,ot=null,A.reset();for(const nt in M)delete M[nt];t.setRenderTarget(O),S=null,y=null,v=null,l=null,U=null,Rt.stop(),s.isPresenting=!1,t.setPixelRatio(H),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){d=nt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",ft),l.addEventListener("inputsourceschange",z),_.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&(v=new XRWebGLBinding(l,i)),v!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Ut=null,Xt=null;_.depth&&(Xt=_.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=_.stencil?jo:Yo,Ut=_.stencil?qo:Es);const ae={colorFormat:i.RGBA8,depthFormat:Xt,scaleFactor:c};y=v.createProjectionLayer(ae),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),U=new bs(y.textureWidth,y.textureHeight,{format:Ti,type:Bi,depthTexture:new mv(y.textureWidth,y.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Mt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new bs(S.framebufferWidth,S.framebufferHeight,{format:Ti,type:Bi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Rt.setContext(l),Rt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function z(nt){for(let pt=0;pt<nt.removed.length;pt++){const Mt=nt.removed[pt],Ut=P.indexOf(Mt);Ut>=0&&(P[Ut]=null,w[Ut].disconnect(Mt))}for(let pt=0;pt<nt.added.length;pt++){const Mt=nt.added[pt];let Ut=P.indexOf(Mt);if(Ut===-1){for(let ae=0;ae<w.length;ae++)if(ae>=P.length){P.push(Mt),Ut=ae;break}else if(P[ae]===null){P[ae]=Mt,Ut=ae;break}if(Ut===-1)break}const Xt=w[Ut];Xt&&Xt.connect(Mt)}}const K=new W,Y=new W;function xt(nt,pt,Mt){K.setFromMatrixPosition(pt.matrixWorld),Y.setFromMatrixPosition(Mt.matrixWorld);const Ut=K.distanceTo(Y),Xt=pt.projectionMatrix.elements,ae=Mt.projectionMatrix.elements,Ce=Xt[14]/(Xt[10]-1),fe=Xt[14]/(Xt[10]+1),G=(Xt[9]+1)/Xt[5],Ee=(Xt[9]-1)/Xt[5],Kt=(Xt[8]-1)/Xt[0],ge=(ae[8]+1)/ae[0],zt=Ce*Kt,Le=Ce*ge,ut=Ut/(-Kt+ge),Bt=ut*-Kt;if(pt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Bt),nt.translateZ(ut),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Xt[10]===-1)nt.projectionMatrix.copy(pt.projectionMatrix),nt.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const le=Ce+ut,te=fe+ut,N=zt-Bt,E=Le+(Ut-Bt),tt=G*fe/te*le,ht=Ee*fe/te*le;nt.projectionMatrix.makePerspective(N,E,tt,ht,le,te),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function L(nt,pt){pt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(pt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let pt=nt.near,Mt=nt.far;A.texture!==null&&(A.depthNear>0&&(pt=A.depthNear),A.depthFar>0&&(Mt=A.depthFar)),B.near=D.near=V.near=pt,B.far=D.far=V.far=Mt,(et!==B.near||ot!==B.far)&&(l.updateRenderState({depthNear:B.near,depthFar:B.far}),et=B.near,ot=B.far),B.layers.mask=nt.layers.mask|6,V.layers.mask=B.layers.mask&3,D.layers.mask=B.layers.mask&5;const Ut=nt.parent,Xt=B.cameras;L(B,Ut);for(let ae=0;ae<Xt.length;ae++)L(Xt[ae],Ut);Xt.length===2?xt(B,V,D):B.projectionMatrix.copy(V.projectionMatrix),J(nt,B,Ut)};function J(nt,pt,Mt){Mt===null?nt.matrix.copy(pt.matrixWorld):(nt.matrix.copy(Mt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(pt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(pt.projectionMatrix),nt.projectionMatrixInverse.copy(pt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Dd*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function(nt){m=nt,y!==null&&(y.fixedFoveation=nt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=nt)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(B)},this.getCameraTexture=function(nt){return M[nt]};let yt=null;function St(nt,pt){if(g=pt.getViewerPose(p||h),T=pt,g!==null){const Mt=g.views;S!==null&&(t.setRenderTargetFramebuffer(U,S.framebuffer),t.setRenderTarget(U));let Ut=!1;Mt.length!==B.cameras.length&&(B.cameras.length=0,Ut=!0);for(let fe=0;fe<Mt.length;fe++){const G=Mt[fe];let Ee=null;if(S!==null)Ee=S.getViewport(G);else{const ge=v.getViewSubImage(y,G);Ee=ge.viewport,fe===0&&(t.setRenderTargetTextures(U,ge.colorTexture,ge.depthStencilTexture),t.setRenderTarget(U))}let Kt=C[fe];Kt===void 0&&(Kt=new ai,Kt.layers.enable(fe),Kt.viewport=new Ve,C[fe]=Kt),Kt.matrix.fromArray(G.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(G.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),fe===0&&(B.matrix.copy(Kt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ut===!0&&B.cameras.push(Kt)}const Xt=l.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const fe=v.getDepthInformation(Mt[0]);fe&&fe.isValid&&fe.texture&&A.init(fe,l.renderState)}if(Xt&&Xt.includes("camera-access")&&(t.state.unbindTexture(),v))for(let fe=0;fe<Mt.length;fe++){const G=Mt[fe].camera;if(G){let Ee=M[G];Ee||(Ee=new Ev,M[G]=Ee);const Kt=v.getCameraImage(G);Ee.sourceTexture=Kt}}}for(let Mt=0;Mt<w.length;Mt++){const Ut=P[Mt],Xt=w[Mt];Ut!==null&&Xt!==void 0&&Xt.update(Ut,pt,p||h)}yt&&yt(nt,pt),pt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:pt}),T=null}const Rt=new vv;Rt.setAnimationLoop(St),this.setAnimationLoop=function(nt){yt=nt},this.dispose=function(){}}}const ms=new Ii,JA=new qe;function $A(o,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function s(M,_){_.color.getRGB(M.fogColor.value,cv(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,O,U,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),v(M,_)):_.isMeshPhongMaterial?(c(M,_),g(M,_)):_.isMeshStandardMaterial?(c(M,_),y(M,_),_.isMeshPhysicalMaterial&&S(M,_,w)):_.isMeshMatcapMaterial?(c(M,_),T(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),A(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,O,U):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===jn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===jn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const O=t.get(_),U=O.envMap,w=O.envMapRotation;U&&(M.envMap.value=U,ms.copy(w),ms.x*=-1,ms.y*=-1,ms.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),M.envMapRotation.value.setFromMatrix4(JA.makeRotationFromEuler(ms)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,O,U){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*O,M.scale.value=U*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function y(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function S(M,_,O){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===jn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,_){_.matcap&&(M.matcap.value=_.matcap)}function A(M,_){const O=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function t1(o,t,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,U){const w=U.program;s.uniformBlockBinding(O,w)}function p(O,U){let w=l[O.id];w===void 0&&(T(O),w=g(O),l[O.id]=w,O.addEventListener("dispose",M));const P=U.program;s.updateUBOMapping(O,P);const F=t.render.frame;c[O.id]!==F&&(y(O),c[O.id]=F)}function g(O){const U=v();O.__bindingPointIndex=U;const w=o.createBuffer(),P=O.__size,F=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,P,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,w),w}function v(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(O){const U=l[O.id],w=O.uniforms,P=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let F=0,H=w.length;F<H;F++){const V=Array.isArray(w[F])?w[F]:[w[F]];for(let D=0,C=V.length;D<C;D++){const B=V[D];if(S(B,F,D,P)===!0){const et=B.__offset,ot=Array.isArray(B.value)?B.value:[B.value];let lt=0;for(let ft=0;ft<ot.length;ft++){const z=ot[ft],K=A(z);typeof z=="number"||typeof z=="boolean"?(B.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,et+lt,B.__data)):z.isMatrix3?(B.__data[0]=z.elements[0],B.__data[1]=z.elements[1],B.__data[2]=z.elements[2],B.__data[3]=0,B.__data[4]=z.elements[3],B.__data[5]=z.elements[4],B.__data[6]=z.elements[5],B.__data[7]=0,B.__data[8]=z.elements[6],B.__data[9]=z.elements[7],B.__data[10]=z.elements[8],B.__data[11]=0):(z.toArray(B.__data,lt),lt+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,et,B.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(O,U,w,P){const F=O.value,H=U+"_"+w;if(P[H]===void 0)return typeof F=="number"||typeof F=="boolean"?P[H]=F:P[H]=F.clone(),!0;{const V=P[H];if(typeof F=="number"||typeof F=="boolean"){if(V!==F)return P[H]=F,!0}else if(V.equals(F)===!1)return V.copy(F),!0}return!1}function T(O){const U=O.uniforms;let w=0;const P=16;for(let H=0,V=U.length;H<V;H++){const D=Array.isArray(U[H])?U[H]:[U[H]];for(let C=0,B=D.length;C<B;C++){const et=D[C],ot=Array.isArray(et.value)?et.value:[et.value];for(let lt=0,ft=ot.length;lt<ft;lt++){const z=ot[lt],K=A(z),Y=w%P,xt=Y%K.boundary,L=Y+xt;w+=xt,L!==0&&P-L<K.storage&&(w+=P-L),et.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=w,w+=K.storage}}}const F=w%P;return F>0&&(w+=P-F),O.__size=w,O.__cache={},this}function A(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),U}function M(O){const U=O.target;U.removeEventListener("dispose",M);const w=h.indexOf(U.__bindingPointIndex);h.splice(w,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function _(){for(const O in l)o.deleteBuffer(l[O]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class e1{constructor(t={}){const{canvas:i=CS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=h;const T=new Uint32Array(4),A=new Int32Array(4);let M=null,_=null;const O=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let P=!1;this._outputColorSpace=pi;let F=0,H=0,V=null,D=-1,C=null;const B=new Ve,et=new Ve;let ot=null;const lt=new Me(0);let ft=0,z=i.width,K=i.height,Y=1,xt=null,L=null;const J=new Ve(0,0,z,K),yt=new Ve(0,0,z,K);let St=!1;const Rt=new qd;let nt=!1,pt=!1;const Mt=new qe,Ut=new W,Xt=new Ve,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function fe(){return V===null?Y:1}let G=s;function Ee(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${zd}`),i.addEventListener("webglcontextlost",Ct,!1),i.addEventListener("webglcontextrestored",Ft,!1),i.addEventListener("webglcontextcreationerror",Tt,!1),G===null){const q="webgl2";if(G=Ee(q,R),G===null)throw Ee(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Kt,ge,zt,Le,ut,Bt,le,te,N,E,tt,ht,vt,ct,It,wt,Wt,Yt,Et,Nt,Zt,kt,Dt,oe;function X(){Kt=new fb(G),Kt.init(),kt=new YA(G,Kt),ge=new ab(G,Kt,t,kt),zt=new WA(G,Kt),ge.reversedDepthBuffer&&y&&zt.buffers.depth.setReversed(!0),Le=new pb(G),ut=new LA,Bt=new qA(G,Kt,zt,ut,ge,kt,Le),le=new rb(w),te=new ub(w),N=new xM(G),Dt=new nb(G,N),E=new hb(G,N,Le,Dt),tt=new _b(G,E,N,Le),Et=new mb(G,ge,Bt),wt=new sb(ut),ht=new UA(w,le,te,Kt,ge,Dt,wt),vt=new $A(w,ut),ct=new OA,It=new HA(Kt),Yt=new eb(w,le,te,zt,tt,S,m),Wt=new kA(w,tt,ge),oe=new t1(G,Le,ge,zt),Nt=new ib(G,Kt,Le),Zt=new db(G,Kt,Le),Le.programs=ht.programs,w.capabilities=ge,w.extensions=Kt,w.properties=ut,w.renderLists=ct,w.shadowMap=Wt,w.state=zt,w.info=Le}X();const At=new QA(w,G);this.xr=At,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=Kt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Kt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(z,K,!1))},this.getSize=function(R){return R.set(z,K)},this.setSize=function(R,q,st=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,K=q,i.width=Math.floor(R*Y),i.height=Math.floor(q*Y),st===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(z*Y,K*Y).floor()},this.setDrawingBufferSize=function(R,q,st){z=R,K=q,Y=st,i.width=Math.floor(R*st),i.height=Math.floor(q*st),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(J)},this.setViewport=function(R,q,st,rt){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,q,st,rt),zt.viewport(B.copy(J).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(yt)},this.setScissor=function(R,q,st,rt){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,q,st,rt),zt.scissor(et.copy(yt).multiplyScalar(Y).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(R){zt.setScissorTest(St=R)},this.setOpaqueSort=function(R){xt=R},this.setTransparentSort=function(R){L=R},this.getClearColor=function(R){return R.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,st=!0){let rt=0;if(R){let Z=!1;if(V!==null){const bt=V.texture.format;Z=bt===Vd||bt===Gd||bt===Hd}if(Z){const bt=V.texture.type,Lt=bt===Bi||bt===Es||bt===Wo||bt===qo||bt===Id||bt===Fd,Ht=Yt.getClearColor(),Ot=Yt.getClearAlpha(),$t=Ht.r,ne=Ht.g,qt=Ht.b;Lt?(T[0]=$t,T[1]=ne,T[2]=qt,T[3]=Ot,G.clearBufferuiv(G.COLOR,0,T)):(A[0]=$t,A[1]=ne,A[2]=qt,A[3]=Ot,G.clearBufferiv(G.COLOR,0,A))}else rt|=G.COLOR_BUFFER_BIT}q&&(rt|=G.DEPTH_BUFFER_BIT),st&&(rt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",Ft,!1),i.removeEventListener("webglcontextcreationerror",Tt,!1),Yt.dispose(),ct.dispose(),It.dispose(),ut.dispose(),le.dispose(),te.dispose(),tt.dispose(),Dt.dispose(),oe.dispose(),ht.dispose(),At.dispose(),At.removeEventListener("sessionstart",ln),At.removeEventListener("sessionend",cn),Qe.stop()};function Ct(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const R=Le.autoReset,q=Wt.enabled,st=Wt.autoUpdate,rt=Wt.needsUpdate,Z=Wt.type;X(),Le.autoReset=R,Wt.enabled=q,Wt.autoUpdate=st,Wt.needsUpdate=rt,Wt.type=Z}function Tt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function gt(R){const q=R.target;q.removeEventListener("dispose",gt),Vt(q)}function Vt(R){re(R),ut.remove(R)}function re(R){const q=ut.get(R).programs;q!==void 0&&(q.forEach(function(st){ht.releaseProgram(st)}),R.isShaderMaterial&&ht.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,st,rt,Z,bt){q===null&&(q=ae);const Lt=Z.isMesh&&Z.matrixWorld.determinant()<0,Ht=fa(R,q,st,rt,Z);zt.setMaterial(rt,Lt);let Ot=st.index,$t=1;if(rt.wireframe===!0){if(Ot=E.getWireframeAttribute(st),Ot===void 0)return;$t=2}const ne=st.drawRange,qt=st.attributes.position;let he=ne.start*$t,Ae=(ne.start+ne.count)*$t;bt!==null&&(he=Math.max(he,bt.start*$t),Ae=Math.min(Ae,(bt.start+bt.count)*$t)),Ot!==null?(he=Math.max(he,0),Ae=Math.min(Ae,Ot.count)):qt!=null&&(he=Math.max(he,0),Ae=Math.min(Ae,qt.count));const je=Ae-he;if(je<0||je===1/0)return;Dt.setup(Z,rt,Ht,st,Ot);let Pe,de=Nt;if(Ot!==null&&(Pe=N.get(Ot),de=Zt,de.setIndex(Pe)),Z.isMesh)rt.wireframe===!0?(zt.setLineWidth(rt.wireframeLinewidth*fe()),de.setMode(G.LINES)):de.setMode(G.TRIANGLES);else if(Z.isLine){let Jt=rt.linewidth;Jt===void 0&&(Jt=1),zt.setLineWidth(Jt*fe()),Z.isLineSegments?de.setMode(G.LINES):Z.isLineLoop?de.setMode(G.LINE_LOOP):de.setMode(G.LINE_STRIP)}else Z.isPoints?de.setMode(G.POINTS):Z.isSprite&&de.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Ur("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))de.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Jt=Z._multiDrawStarts,Ye=Z._multiDrawCounts,ve=Z._multiDrawCount,Rn=Ot?N.get(Ot).bytesPerElement:1,gi=ut.get(rt).currentProgram.getUniforms();for(let On=0;On<ve;On++)gi.setValue(G,"_gl_DrawID",On),de.render(Jt[On]/Rn,Ye[On])}else if(Z.isInstancedMesh)de.renderInstances(he,je,Z.count);else if(st.isInstancedBufferGeometry){const Jt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Ye=Math.min(st.instanceCount,Jt);de.renderInstances(he,je,Ye)}else de.render(he,je)};function Ue(R,q,st){R.transparent===!0&&R.side===ra&&R.forceSinglePass===!1?(R.side=jn,R.needsUpdate=!0,Ri(R,q,st),R.side=ca,R.needsUpdate=!0,Ri(R,q,st),R.side=ra):Ri(R,q,st)}this.compile=function(R,q,st=null){st===null&&(st=R),_=It.get(st),_.init(q),U.push(_),st.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),R!==st&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const rt=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const bt=Z.material;if(bt)if(Array.isArray(bt))for(let Lt=0;Lt<bt.length;Lt++){const Ht=bt[Lt];Ue(Ht,st,Z),rt.add(Ht)}else Ue(bt,st,Z),rt.add(bt)}),_=U.pop(),rt},this.compileAsync=function(R,q,st=null){const rt=this.compile(R,q,st);return new Promise(Z=>{function bt(){if(rt.forEach(function(Lt){ut.get(Lt).currentProgram.isReady()&&rt.delete(Lt)}),rt.size===0){Z(R);return}setTimeout(bt,10)}Kt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let be=null;function _i(R){be&&be(R)}function ln(){Qe.stop()}function cn(){Qe.start()}const Qe=new vv;Qe.setAnimationLoop(_i),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(R){be=R,At.setAnimationLoop(R),R===null?Qe.stop():Qe.start()},At.addEventListener("sessionstart",ln),At.addEventListener("sessionend",cn),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(q),q=At.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,q,V),_=It.get(R,U.length),_.init(q),U.push(_),Mt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Rt.setFromProjectionMatrix(Mt,zi,q.reversedDepth),pt=this.localClippingEnabled,nt=wt.init(this.clippingPlanes,pt),M=ct.get(R,O.length),M.init(),O.push(M),At.enabled===!0&&At.isPresenting===!0){const bt=w.xr.getDepthSensingMesh();bt!==null&&Ai(bt,q,-1/0,w.sortObjects)}Ai(R,q,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(xt,L),Ce=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Ce&&Yt.addToRenderList(M,R),this.info.render.frame++,nt===!0&&wt.beginShadows();const st=_.state.shadowsArray;Wt.render(st,R,q),nt===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=M.opaque,Z=M.transmissive;if(_.setupLights(),q.isArrayCamera){const bt=q.cameras;if(Z.length>0)for(let Lt=0,Ht=bt.length;Lt<Ht;Lt++){const Ot=bt[Lt];el(rt,Z,R,Ot)}Ce&&Yt.render(R);for(let Lt=0,Ht=bt.length;Lt<Ht;Lt++){const Ot=bt[Lt];Rs(M,R,Ot,Ot.viewport)}}else Z.length>0&&el(rt,Z,R,q),Ce&&Yt.render(R),Rs(M,R,q);V!==null&&H===0&&(Bt.updateMultisampleRenderTarget(V),Bt.updateRenderTargetMipmap(V)),R.isScene===!0&&R.onAfterRender(w,R,q),Dt.resetDefaultState(),D=-1,C=null,U.pop(),U.length>0?(_=U[U.length-1],nt===!0&&wt.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,O.pop(),O.length>0?M=O[O.length-1]:M=null};function Ai(R,q,st,rt){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Rt.intersectsSprite(R)){rt&&Xt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Mt);const Lt=tt.update(R),Ht=R.material;Ht.visible&&M.push(R,Lt,Ht,st,Xt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Rt.intersectsObject(R))){const Lt=tt.update(R),Ht=R.material;if(rt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Xt.copy(R.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Xt.copy(Lt.boundingSphere.center)),Xt.applyMatrix4(R.matrixWorld).applyMatrix4(Mt)),Array.isArray(Ht)){const Ot=Lt.groups;for(let $t=0,ne=Ot.length;$t<ne;$t++){const qt=Ot[$t],he=Ht[qt.materialIndex];he&&he.visible&&M.push(R,Lt,he,st,Xt.z,qt)}}else Ht.visible&&M.push(R,Lt,Ht,st,Xt.z,null)}}const bt=R.children;for(let Lt=0,Ht=bt.length;Lt<Ht;Lt++)Ai(bt[Lt],q,st,rt)}function Rs(R,q,st,rt){const Z=R.opaque,bt=R.transmissive,Lt=R.transparent;_.setupLightsView(st),nt===!0&&wt.setGlobalState(w.clippingPlanes,st),rt&&zt.viewport(B.copy(rt)),Z.length>0&&ws(Z,q,st),bt.length>0&&ws(bt,q,st),Lt.length>0&&ws(Lt,q,st),zt.buffers.depth.setTest(!0),zt.buffers.depth.setMask(!0),zt.buffers.color.setMask(!0),zt.setPolygonOffset(!1)}function el(R,q,st,rt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[rt.id]===void 0&&(_.state.transmissionRenderTarget[rt.id]=new bs(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?Zo:Bi,minFilter:Ss,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const bt=_.state.transmissionRenderTarget[rt.id],Lt=rt.viewport||B;bt.setSize(Lt.z*w.transmissionResolutionScale,Lt.w*w.transmissionResolutionScale);const Ht=w.getRenderTarget(),Ot=w.getActiveCubeFace(),$t=w.getActiveMipmapLevel();w.setRenderTarget(bt),w.getClearColor(lt),ft=w.getClearAlpha(),ft<1&&w.setClearColor(16777215,.5),w.clear(),Ce&&Yt.render(st);const ne=w.toneMapping;w.toneMapping=Xa;const qt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),_.setupLightsView(rt),nt===!0&&wt.setGlobalState(w.clippingPlanes,rt),ws(R,st,rt),Bt.updateMultisampleRenderTarget(bt),Bt.updateRenderTargetMipmap(bt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let Ae=0,je=q.length;Ae<je;Ae++){const Pe=q[Ae],de=Pe.object,Jt=Pe.geometry,Ye=Pe.material,ve=Pe.group;if(Ye.side===ra&&de.layers.test(rt.layers)){const Rn=Ye.side;Ye.side=jn,Ye.needsUpdate=!0,Fr(de,st,rt,Jt,Ye,ve),Ye.side=Rn,Ye.needsUpdate=!0,he=!0}}he===!0&&(Bt.updateMultisampleRenderTarget(bt),Bt.updateRenderTargetMipmap(bt))}w.setRenderTarget(Ht,Ot,$t),w.setClearColor(lt,ft),qt!==void 0&&(rt.viewport=qt),w.toneMapping=ne}function ws(R,q,st){const rt=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,bt=R.length;Z<bt;Z++){const Lt=R[Z],Ht=Lt.object,Ot=Lt.geometry,$t=Lt.group;let ne=Lt.material;ne.allowOverride===!0&&rt!==null&&(ne=rt),Ht.layers.test(st.layers)&&Fr(Ht,q,st,Ot,ne,$t)}}function Fr(R,q,st,rt,Z,bt){R.onBeforeRender(w,q,st,rt,Z,bt),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(w,q,st,rt,R,bt),Z.transparent===!0&&Z.side===ra&&Z.forceSinglePass===!1?(Z.side=jn,Z.needsUpdate=!0,w.renderBufferDirect(st,q,rt,Z,R,bt),Z.side=ca,Z.needsUpdate=!0,w.renderBufferDirect(st,q,rt,Z,R,bt),Z.side=ra):w.renderBufferDirect(st,q,rt,Z,R,bt),R.onAfterRender(w,q,st,rt,Z,bt)}function Ri(R,q,st){q.isScene!==!0&&(q=ae);const rt=ut.get(R),Z=_.state.lights,bt=_.state.shadowsArray,Lt=Z.state.version,Ht=ht.getParameters(R,Z.state,bt,q,st),Ot=ht.getProgramCacheKey(Ht);let $t=rt.programs;rt.environment=R.isMeshStandardMaterial?q.environment:null,rt.fog=q.fog,rt.envMap=(R.isMeshStandardMaterial?te:le).get(R.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",gt),$t=new Map,rt.programs=$t);let ne=$t.get(Ot);if(ne!==void 0){if(rt.currentProgram===ne&&rt.lightsStateVersion===Lt)return Fi(R,Ht),ne}else Ht.uniforms=ht.getUniforms(R),R.onBeforeCompile(Ht,w),ne=ht.acquireProgram(Ht,Ot),$t.set(Ot,ne),rt.uniforms=Ht.uniforms;const qt=rt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qt.clippingPlanes=wt.uniform),Fi(R,Ht),rt.needsLights=ha(R),rt.lightsStateVersion=Lt,rt.needsLights&&(qt.ambientLightColor.value=Z.state.ambient,qt.lightProbe.value=Z.state.probe,qt.directionalLights.value=Z.state.directional,qt.directionalLightShadows.value=Z.state.directionalShadow,qt.spotLights.value=Z.state.spot,qt.spotLightShadows.value=Z.state.spotShadow,qt.rectAreaLights.value=Z.state.rectArea,qt.ltc_1.value=Z.state.rectAreaLTC1,qt.ltc_2.value=Z.state.rectAreaLTC2,qt.pointLights.value=Z.state.point,qt.pointLightShadows.value=Z.state.pointShadow,qt.hemisphereLights.value=Z.state.hemi,qt.directionalShadowMap.value=Z.state.directionalShadowMap,qt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qt.spotShadowMap.value=Z.state.spotShadowMap,qt.spotLightMatrix.value=Z.state.spotLightMatrix,qt.spotLightMap.value=Z.state.spotLightMap,qt.pointShadowMap.value=Z.state.pointShadowMap,qt.pointShadowMatrix.value=Z.state.pointShadowMatrix),rt.currentProgram=ne,rt.uniformsList=null,ne}function Cs(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=qc.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Fi(R,q){const st=ut.get(R);st.outputColorSpace=q.outputColorSpace,st.batching=q.batching,st.batchingColor=q.batchingColor,st.instancing=q.instancing,st.instancingColor=q.instancingColor,st.instancingMorph=q.instancingMorph,st.skinning=q.skinning,st.morphTargets=q.morphTargets,st.morphNormals=q.morphNormals,st.morphColors=q.morphColors,st.morphTargetsCount=q.morphTargetsCount,st.numClippingPlanes=q.numClippingPlanes,st.numIntersection=q.numClipIntersection,st.vertexAlphas=q.vertexAlphas,st.vertexTangents=q.vertexTangents,st.toneMapping=q.toneMapping}function fa(R,q,st,rt,Z){q.isScene!==!0&&(q=ae),Bt.resetTextureUnits();const bt=q.fog,Lt=rt.isMeshStandardMaterial?q.environment:null,Ht=V===null?w.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:zr,Ot=(rt.isMeshStandardMaterial?te:le).get(rt.envMap||Lt),$t=rt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ne=!!st.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),qt=!!st.morphAttributes.position,he=!!st.morphAttributes.normal,Ae=!!st.morphAttributes.color;let je=Xa;rt.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(je=w.toneMapping);const Pe=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,de=Pe!==void 0?Pe.length:0,Jt=ut.get(rt),Ye=_.state.lights;if(nt===!0&&(pt===!0||R!==C)){const Je=R===C&&rt.id===D;wt.setState(rt,R,Je)}let ve=!1;rt.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Ye.state.version||Jt.outputColorSpace!==Ht||Z.isBatchedMesh&&Jt.batching===!1||!Z.isBatchedMesh&&Jt.batching===!0||Z.isBatchedMesh&&Jt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Jt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Jt.instancing===!1||!Z.isInstancedMesh&&Jt.instancing===!0||Z.isSkinnedMesh&&Jt.skinning===!1||!Z.isSkinnedMesh&&Jt.skinning===!0||Z.isInstancedMesh&&Jt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Jt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Jt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Jt.instancingMorph===!1&&Z.morphTexture!==null||Jt.envMap!==Ot||rt.fog===!0&&Jt.fog!==bt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==wt.numPlanes||Jt.numIntersection!==wt.numIntersection)||Jt.vertexAlphas!==$t||Jt.vertexTangents!==ne||Jt.morphTargets!==qt||Jt.morphNormals!==he||Jt.morphColors!==Ae||Jt.toneMapping!==je||Jt.morphTargetsCount!==de)&&(ve=!0):(ve=!0,Jt.__version=rt.version);let Rn=Jt.currentProgram;ve===!0&&(Rn=Ri(rt,q,Z));let gi=!1,On=!1,_n=!1;const ke=Rn.getUniforms(),Pn=Jt.uniforms;if(zt.useProgram(Rn.program)&&(gi=!0,On=!0,_n=!0),rt.id!==D&&(D=rt.id,On=!0),gi||C!==R){zt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ke.setValue(G,"projectionMatrix",R.projectionMatrix),ke.setValue(G,"viewMatrix",R.matrixWorldInverse);const Sn=ke.map.cameraPosition;Sn!==void 0&&Sn.setValue(G,Ut.setFromMatrixPosition(R.matrixWorld)),ge.logarithmicDepthBuffer&&ke.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&ke.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,On=!0,_n=!0)}if(Z.isSkinnedMesh){ke.setOptional(G,Z,"bindMatrix"),ke.setOptional(G,Z,"bindMatrixInverse");const Je=Z.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),ke.setValue(G,"boneTexture",Je.boneTexture,Bt))}Z.isBatchedMesh&&(ke.setOptional(G,Z,"batchingTexture"),ke.setValue(G,"batchingTexture",Z._matricesTexture,Bt),ke.setOptional(G,Z,"batchingIdTexture"),ke.setValue(G,"batchingIdTexture",Z._indirectTexture,Bt),ke.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ke.setValue(G,"batchingColorTexture",Z._colorsTexture,Bt));const wn=st.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Et.update(Z,st,Rn),(On||Jt.receiveShadow!==Z.receiveShadow)&&(Jt.receiveShadow=Z.receiveShadow,ke.setValue(G,"receiveShadow",Z.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Pn.envMap.value=Ot,Pn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&q.environment!==null&&(Pn.envMapIntensity.value=q.environmentIntensity),On&&(ke.setValue(G,"toneMappingExposure",w.toneMappingExposure),Jt.needsLights&&Ya(Pn,_n),bt&&rt.fog===!0&&vt.refreshFogUniforms(Pn,bt),vt.refreshMaterialUniforms(Pn,rt,Y,K,_.state.transmissionRenderTarget[R.id]),qc.upload(G,Cs(Jt),Pn,Bt)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(qc.upload(G,Cs(Jt),Pn,Bt),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&ke.setValue(G,"center",Z.center),ke.setValue(G,"modelViewMatrix",Z.modelViewMatrix),ke.setValue(G,"normalMatrix",Z.normalMatrix),ke.setValue(G,"modelMatrix",Z.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Je=rt.uniformsGroups;for(let Sn=0,Ds=Je.length;Sn<Ds;Sn++){const Gn=Je[Sn];oe.update(Gn,Rn),oe.bind(Gn,Rn)}}return Rn}function Ya(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function ha(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(R,q,st){const rt=ut.get(R);rt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),ut.get(R.texture).__webglTexture=q,ut.get(R.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:st,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const st=ut.get(R);st.__webglFramebuffer=q,st.__useDefaultFramebuffer=q===void 0};const an=G.createFramebuffer();this.setRenderTarget=function(R,q=0,st=0){V=R,F=q,H=st;let rt=!0,Z=null,bt=!1,Lt=!1;if(R){const Ot=ut.get(R);if(Ot.__useDefaultFramebuffer!==void 0)zt.bindFramebuffer(G.FRAMEBUFFER,null),rt=!1;else if(Ot.__webglFramebuffer===void 0)Bt.setupRenderTarget(R);else if(Ot.__hasExternalTextures)Bt.rebindTextures(R,ut.get(R.texture).__webglTexture,ut.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const qt=R.depthTexture;if(Ot.__boundDepthTexture!==qt){if(qt!==null&&ut.has(qt)&&(R.width!==qt.image.width||R.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(R)}}const $t=R.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Lt=!0);const ne=ut.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ne[q])?Z=ne[q][st]:Z=ne[q],bt=!0):R.samples>0&&Bt.useMultisampledRTT(R)===!1?Z=ut.get(R).__webglMultisampledFramebuffer:Array.isArray(ne)?Z=ne[st]:Z=ne,B.copy(R.viewport),et.copy(R.scissor),ot=R.scissorTest}else B.copy(J).multiplyScalar(Y).floor(),et.copy(yt).multiplyScalar(Y).floor(),ot=St;if(st!==0&&(Z=an),zt.bindFramebuffer(G.FRAMEBUFFER,Z)&&rt&&zt.drawBuffers(R,Z),zt.viewport(B),zt.scissor(et),zt.setScissorTest(ot),bt){const Ot=ut.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ot.__webglTexture,st)}else if(Lt){const Ot=q;for(let $t=0;$t<R.textures.length;$t++){const ne=ut.get(R.textures[$t]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+$t,ne.__webglTexture,st,Ot)}}else if(R!==null&&st!==0){const Ot=ut.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ot.__webglTexture,st)}D=-1},this.readRenderTargetPixels=function(R,q,st,rt,Z,bt,Lt,Ht=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=ut.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){zt.bindFramebuffer(G.FRAMEBUFFER,Ot);try{const $t=R.textures[Ht],ne=$t.format,qt=$t.type;if(!ge.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-rt&&st>=0&&st<=R.height-Z&&(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ht),G.readPixels(q,st,rt,Z,kt.convert(ne),kt.convert(qt),bt))}finally{const $t=V!==null?ut.get(V).__webglFramebuffer:null;zt.bindFramebuffer(G.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(R,q,st,rt,Z,bt,Lt,Ht=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=ut.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot)if(q>=0&&q<=R.width-rt&&st>=0&&st<=R.height-Z){zt.bindFramebuffer(G.FRAMEBUFFER,Ot);const $t=R.textures[Ht],ne=$t.format,qt=$t.type;if(!ge.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,he),G.bufferData(G.PIXEL_PACK_BUFFER,bt.byteLength,G.STREAM_READ),R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ht),G.readPixels(q,st,rt,Z,kt.convert(ne),kt.convert(qt),0);const Ae=V!==null?ut.get(V).__webglFramebuffer:null;zt.bindFramebuffer(G.FRAMEBUFFER,Ae);const je=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await DS(G,je,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,he),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,bt),G.deleteBuffer(he),G.deleteSync(je),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,st=0){const rt=Math.pow(2,-st),Z=Math.floor(R.image.width*rt),bt=Math.floor(R.image.height*rt),Lt=q!==null?q.x:0,Ht=q!==null?q.y:0;Bt.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,st,0,0,Lt,Ht,Z,bt),zt.unbindTexture()};const nl=G.createFramebuffer(),il=G.createFramebuffer();this.copyTextureToTexture=function(R,q,st=null,rt=null,Z=0,bt=null){bt===null&&(Z!==0?(Ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=Z,Z=0):bt=0);let Lt,Ht,Ot,$t,ne,qt,he,Ae,je;const Pe=R.isCompressedTexture?R.mipmaps[bt]:R.image;if(st!==null)Lt=st.max.x-st.min.x,Ht=st.max.y-st.min.y,Ot=st.isBox3?st.max.z-st.min.z:1,$t=st.min.x,ne=st.min.y,qt=st.isBox3?st.min.z:0;else{const wn=Math.pow(2,-Z);Lt=Math.floor(Pe.width*wn),Ht=Math.floor(Pe.height*wn),R.isDataArrayTexture?Ot=Pe.depth:R.isData3DTexture?Ot=Math.floor(Pe.depth*wn):Ot=1,$t=0,ne=0,qt=0}rt!==null?(he=rt.x,Ae=rt.y,je=rt.z):(he=0,Ae=0,je=0);const de=kt.convert(q.format),Jt=kt.convert(q.type);let Ye;q.isData3DTexture?(Bt.setTexture3D(q,0),Ye=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Bt.setTexture2DArray(q,0),Ye=G.TEXTURE_2D_ARRAY):(Bt.setTexture2D(q,0),Ye=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const ve=G.getParameter(G.UNPACK_ROW_LENGTH),Rn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),gi=G.getParameter(G.UNPACK_SKIP_PIXELS),On=G.getParameter(G.UNPACK_SKIP_ROWS),_n=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Pe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Pe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,$t),G.pixelStorei(G.UNPACK_SKIP_ROWS,ne),G.pixelStorei(G.UNPACK_SKIP_IMAGES,qt);const ke=R.isDataArrayTexture||R.isData3DTexture,Pn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const wn=ut.get(R),Je=ut.get(q),Sn=ut.get(wn.__renderTarget),Ds=ut.get(Je.__renderTarget);zt.bindFramebuffer(G.READ_FRAMEBUFFER,Sn.__webglFramebuffer),zt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ds.__webglFramebuffer);for(let Gn=0;Gn<Ot;Gn++)ke&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ut.get(R).__webglTexture,Z,qt+Gn),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ut.get(q).__webglTexture,bt,je+Gn)),G.blitFramebuffer($t,ne,Lt,Ht,he,Ae,Lt,Ht,G.DEPTH_BUFFER_BIT,G.NEAREST);zt.bindFramebuffer(G.READ_FRAMEBUFFER,null),zt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||ut.has(R)){const wn=ut.get(R),Je=ut.get(q);zt.bindFramebuffer(G.READ_FRAMEBUFFER,nl),zt.bindFramebuffer(G.DRAW_FRAMEBUFFER,il);for(let Sn=0;Sn<Ot;Sn++)ke?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,wn.__webglTexture,Z,qt+Sn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,wn.__webglTexture,Z),Pn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Je.__webglTexture,bt,je+Sn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Je.__webglTexture,bt),Z!==0?G.blitFramebuffer($t,ne,Lt,Ht,he,Ae,Lt,Ht,G.COLOR_BUFFER_BIT,G.NEAREST):Pn?G.copyTexSubImage3D(Ye,bt,he,Ae,je+Sn,$t,ne,Lt,Ht):G.copyTexSubImage2D(Ye,bt,he,Ae,$t,ne,Lt,Ht);zt.bindFramebuffer(G.READ_FRAMEBUFFER,null),zt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Pn?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Ye,bt,he,Ae,je,Lt,Ht,Ot,de,Jt,Pe.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(Ye,bt,he,Ae,je,Lt,Ht,Ot,de,Pe.data):G.texSubImage3D(Ye,bt,he,Ae,je,Lt,Ht,Ot,de,Jt,Pe):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,bt,he,Ae,Lt,Ht,de,Jt,Pe.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,bt,he,Ae,Pe.width,Pe.height,de,Pe.data):G.texSubImage2D(G.TEXTURE_2D,bt,he,Ae,Lt,Ht,de,Jt,Pe);G.pixelStorei(G.UNPACK_ROW_LENGTH,ve),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Rn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,gi),G.pixelStorei(G.UNPACK_SKIP_ROWS,On),G.pixelStorei(G.UNPACK_SKIP_IMAGES,_n),bt===0&&q.generateMipmaps&&G.generateMipmap(Ye),zt.unbindTexture()},this.copyTextureToTexture3D=function(R,q,st=null,rt=null,Z=0){return Ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,st,rt,Z)},this.initRenderTarget=function(R){ut.get(R).__webglFramebuffer===void 0&&Bt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Bt.setTextureCube(R,0):R.isData3DTexture?Bt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Bt.setTexture2DArray(R,0):Bt.setTexture2D(R,0),zt.unbindTexture()},this.resetState=function(){F=0,H=0,V=null,zt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),i.unpackColorSpace=we._getUnpackColorSpace()}}const V0={type:"change"},Jd={type:"start"},Tv={type:"end"},Ic=new Jo,k0=new Ga,n1=Math.cos(70*wS.DEG2RAD),hn=new W,qn=2*Math.PI,Ge={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},kh=1e-6;class i1 extends vM{constructor(t,i=null){super(t,i),this.state=Ge.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Cr.ROTATE,MIDDLE:Cr.DOLLY,RIGHT:Cr.PAN},this.touches={ONE:Rr.ROTATE,TWO:Rr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new Ts,this._lastTargetPosition=new W,this._quat=new Ts().setFromUnitVectors(t.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _0,this._sphericalDelta=new _0,this._scale=1,this._panOffset=new W,this._rotateStart=new Qt,this._rotateEnd=new Qt,this._rotateDelta=new Qt,this._panStart=new Qt,this._panEnd=new Qt,this._panDelta=new Qt,this._dollyStart=new Qt,this._dollyEnd=new Qt,this._dollyDelta=new Qt,this._dollyDirection=new W,this._mouse=new Qt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=s1.bind(this),this._onPointerDown=a1.bind(this),this._onPointerUp=r1.bind(this),this._onContextMenu=d1.bind(this),this._onMouseWheel=c1.bind(this),this._onKeyDown=u1.bind(this),this._onTouchStart=f1.bind(this),this._onTouchMove=h1.bind(this),this._onMouseDown=o1.bind(this),this._onMouseMove=l1.bind(this),this._interceptControlDown=p1.bind(this),this._interceptControlUp=m1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(V0),this.update(),this.state=Ge.NONE}update(t=null){const i=this.object.position;hn.copy(i).sub(this.target),hn.applyQuaternion(this._quat),this._spherical.setFromVector3(hn),this.autoRotate&&this.state===Ge.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=qn:s>Math.PI&&(s-=qn),l<-Math.PI?l+=qn:l>Math.PI&&(l-=qn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(hn.setFromSpherical(this._spherical),hn.applyQuaternion(this._quatInverse),i.copy(this.target).add(hn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=hn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new W(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new W(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=hn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Ic.origin.copy(this.object.position),Ic.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ic.direction))<n1?this.object.lookAt(this.target):(k0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ic.intersectPlane(k0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>kh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>kh||this._lastTargetPosition.distanceToSquared(this.target)>kh?(this.dispatchEvent(V0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qn/60*this.autoRotateSpeed*t:qn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){hn.setFromMatrixColumn(i,0),hn.multiplyScalar(-t),this._panOffset.add(hn)}_panUp(t,i){this.screenSpacePanning===!0?hn.setFromMatrixColumn(i,1):(hn.setFromMatrixColumn(i,0),hn.crossVectors(this.object.up,hn)),hn.multiplyScalar(t),this._panOffset.add(hn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;hn.copy(l).sub(this.target);let c=hn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new Qt,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function a1(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function s1(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function r1(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tv),this.state=Ge.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function o1(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Cr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Ge.DOLLY;break;case Cr.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ge.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ge.ROTATE}break;case Cr.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ge.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ge.PAN}break;default:this.state=Ge.NONE}this.state!==Ge.NONE&&this.dispatchEvent(Jd)}function l1(o){switch(this.state){case Ge.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Ge.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Ge.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function c1(o){this.enabled===!1||this.enableZoom===!1||this.state!==Ge.NONE||(o.preventDefault(),this.dispatchEvent(Jd),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Tv))}function u1(o){this.enabled!==!1&&this._handleKeyDown(o)}function f1(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Rr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Ge.TOUCH_ROTATE;break;case Rr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Ge.TOUCH_PAN;break;default:this.state=Ge.NONE}break;case 2:switch(this.touches.TWO){case Rr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Ge.TOUCH_DOLLY_PAN;break;case Rr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Ge.TOUCH_DOLLY_ROTATE;break;default:this.state=Ge.NONE}break;default:this.state=Ge.NONE}this.state!==Ge.NONE&&this.dispatchEvent(Jd)}function h1(o){switch(this._trackPointer(o),this.state){case Ge.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Ge.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Ge.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Ge.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Ge.NONE}}function d1(o){this.enabled!==!1&&o.preventDefault()}function p1(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function m1(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const _1=[{id:"p1",name:"Cyphernest",summary:"Client-side steganography tool using AES-256 encryption(PWA supported)",tags:["encryption","pwa","steganography","crypto.js"],link:"https://cyphernest.vercel.app/",position:[4,0,-6]},{id:"p2",name:"QSL-Simulator",summary:"Quantum Signal Loss(QSL) Simulator.",tags:["astrophysics","deep space","qsl"],link:"https://qsl-simulator.vercel.app/",position:[-6,0,-2]},{id:"p3",name:"Portfolio Website",summary:"Portfolio Website",tags:["poject","resume","skill"],link:"https://portfolio-website-murex-six.vercel.app/",position:[0,0,7]},{id:"p4",name:"AR Product Try-on",summary:"WebXR preview flow with parametric materials.",tags:["webxr","three","ux"],link:"https://example.com/ar",position:[8,0,3]}],X0={nodes:[{id:"js",label:"JavaScript",link:"https://devdocs.io/javascript/",pos:[0,3,0]},{id:"react",label:"React",pos:[-3,4,-1]},{id:"three",label:"Three.js",pos:[3,4.5,1]},{id:"node",label:"Node.js",pos:[1,5.2,-2]},{id:"tailwind",label:"Tailwind",pos:[-2,3.8,2]},{id:"mongodb",label:"MongoDB",pos:[2.5,3.4,-3]}],edges:[["js","react"],["react","node"],["js","three"],["three","mongodb"],["react","tailwind"]]};function Fc(o,t={}){const{font:i="500 35px Arial",fillStyle:s="#f5f8fc",padding:l=16,bg:c="rgba(0,0,0,1)"}=t,h=document.createElement("canvas"),d=h.getContext("2d");d.font=i;const m=Math.ceil(d.measureText(o).width)+l*2,p=36+l*2;h.width=m*2,h.height=p*2;const g=h.getContext("2d");g.scale(2,2),g.font=i,g.fillStyle=c,g.fillRect(0,0,m,p),g.fillStyle=s,g.textBaseline="middle",g.fillText(o,l,p/2);const v=new lM(h),y=new hv({map:v,transparent:!0}),S=new iM(y);return S.scale.set(m/200,p/200,1),S}function g1({filter:o,onPick:t}){const i=Fn.useRef(null),s=Fn.useRef(null),l=Fn.useRef(null),c=Fn.useRef(null),h=Fn.useRef(null),d=Fn.useMemo(()=>new gM,[]),m=Fn.useMemo(()=>new Qt,[]),p=Fn.useRef([]),g=Fn.useRef(null),v=Fn.useRef(null);return Fn.useEffect(()=>{const y=i.current,S=new eM;S.background=new Me(395020);const T=new ai(60,1,.1,1e3);T.position.set(10,8,12);const A=new e1({antialias:!1});A.setSize(y.clientWidth,y.clientHeight),A.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),y.appendChild(A.domElement);const M=new i1(T,A.domElement);M.enableDamping=!0,M.dampingFactor=.05,M.target.set(0,1.2,0),S.add(new mM(16777215,.9));const _=new pM(16777215,1);_.position.set(10,10,7),S.add(_);const O=new Yd(2,2.5,.6,42);_1.forEach(ut=>{const Bt=!o||ut.tags.includes(o),le=new br({color:Bt?3066993:3815994,roughness:.7,metalness:.1}),te=new bn(O,le);te.position.set(...ut.position),te.userData={type:"project",payload:ut},te.castShadow=!0,te.receiveShadow=!0,S.add(te),p.current.push(te);const N=Fc(ut.name);N.position.set(ut.position[0],ut.position[1]+1.2,ut.position[2]),S.add(N)});const U=new Ms,w=new vs(.15,12,12),P=new br({color:10338559}),F=new Map;X0.nodes.forEach(ut=>{const Bt=new bn(w,P.clone());Bt.position.set(...ut.pos),Bt.userData={type:"skill",payload:ut},Bt.material.emissive=new Me(6989567),U.add(Bt),F.set(ut.id,Bt);const le=Fc(ut.label,{fillStyle:"#f5f8fc",bg:"rgba(0,0,0,0.3)"});le.position.set(...ut.pos.map((te,N)=>te+(N===1?.25:0))),S.add(le),p.current.push(Bt)});const H=new pv({color:6989567,transparent:!0,opacity:.6});X0.edges.forEach(([ut,Bt])=>{const le=F.get(ut),te=F.get(Bt);if(!le||!te)return;const N=new Nn().setFromPoints([le.position,te.position]),E=new oM(N,H);U.add(E)}),S.add(U);const V=new Nn,D=800,C=new Float32Array(D*3);for(let ut=0;ut<D;ut++)C[ut*3+0]=(Math.random()-.5)*220,C[ut*3+1]=Math.random()*40+5,C[ut*3+2]=(Math.random()-.5)*220;V.setAttribute("position",new si(C,3));const B=new c0(V,new Ud({size:.1,color:6989567}));S.add(B);const et=Fc("I am Vivek Mishra",{fillStyle:"#ffd700",bg:"rgba(0,0,0,0.5)",font:"Bold 60px Arial"});et.position.set(0,8,0),S.add(et);const ot=Fc("Interstellar Propulsion Theorist",{fillStyle:"#ffdead",bg:"rgba(0,0,0,0.5)",font:"Bold 50px Arial"});ot.position.set(0,7,0),S.add(ot),s.current=S,l.current=T,c.current=A,h.current=M;const lt=ut=>{const Bt=y.getBoundingClientRect();m.x=(ut.clientX-Bt.left)/Bt.width*2-1,m.y=-((ut.clientY-Bt.top)/Bt.height)*2+1,d.setFromCamera(m,T);const te=d.intersectObjects(p.current,!1).find(N=>N.object.userData?.type==="skill");te?(g.current=te.object.userData.payload,v.current||(v.current=document.createElement("div"),v.current.className="pointer-events-none fixed z-50 text-xs px-2 py-1 rounded bg-black/80 text-white border border-white/10",document.body.appendChild(v.current)),v.current.textContent=g.current.label,v.current.style.left=`${ut.clientX+10}px`,v.current.style.top=`${ut.clientY+10}px`):(g.current=null,v.current?.parentNode&&(v.current.parentNode.removeChild(v.current),v.current=null))};y.addEventListener("pointermove",lt);const ft=15,z=new Ms;for(let ut=0;ut<ft;ut++){const Bt=new vs(.15,8,8),le=new br({color:16755251,emissive:16742144,emissiveIntensity:.8}),te=new bn(Bt,le);te.position.set((Math.random()-.5)*150,Math.random()*50+5,(Math.random()-.5)*150),te.userData={speed:Math.random()*.2+.05},z.add(te)}S.add(z),z.children.forEach(ut=>{ut.position.x+=ut.userData.speed,ut.position.x>75&&(ut.position.x=-75)});const K=10,Y=new Ms;for(let ut=0;ut<K;ut++){const Bt=new Zd(Math.random()*.5+.2,0),le=new br({color:5592405,roughness:.8,metalness:.1}),te=new bn(Bt,le);te.position.set((Math.random()-.5)*120,Math.random()*30+5,(Math.random()-.5)*120),te.userData={speed:Math.random()*.02+.01},Y.add(te)}S.add(Y),z.children.forEach(ut=>{ut.position.x+=ut.userData.speed,ut.position.x>75&&(ut.position.x=-75)});const xt=new tl(100,100),L=new br({color:1982310,roughness:.4,metalness:.3,transparent:!0,opacity:.8}),J=new bn(xt,L);J.rotation.x=-Math.PI/2,J.position.y=-.01,S.add(J);const yt=new vs(5,32,32),St=new ua({uniforms:{time:{value:0}},vertexShader:`
    varying vec3 vNormal;
    void main() {
      vNormal = normalize(normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `,fragmentShader:`
    uniform float time;
    varying vec3 vNormal;

    // Simple noise function (placeholder)
    float noise(vec3 p) {
      return fract(sin(dot(p, vec3(12.9898,78.233,128.852))) * 43758.5453);
    }

    void main() {
      float n = noise(vNormal * 10.0 + time * 0.5);
      vec3 color = mix(vec3(1.0, 0.5, 0.0), vec3(1.0,0.9,0.3), n); // orange to yellow
      gl_FragColor = vec4(color, 1.0);
    }
  `,side:ca}),Rt=new bn(yt,St);Rt.position.set(-10,35,50),S.add(Rt);const nt=new hM(16627731,10,1e3);nt.position.copy(Rt.position),S.add(nt);const pt=new vs(6,32,32),Mt=new Wd({color:4473924,wireframe:!0,transparent:!0,opacity:.5}),Ut=new bn(pt,Mt);Ut.position.copy(Rt.position),S.add(Ut);const Xt=new vs(.08,8,8),ae=new br({color:16755200,emissive:16737792,metalness:.8,roughness:.3}),Ce=pt.attributes.position;for(let ut=0;ut<Ce.count;ut++){const Bt=Ce.getX(ut),le=Ce.getY(ut),te=Ce.getZ(ut),N=new bn(Xt,ae);N.position.set(Bt,le,te).add(Rt.position),S.add(N)}const fe=new Nn,G=1100,Ee=new Float32Array(G*2);for(let ut=0;ut<G;ut++){const Bt=12+Math.random()*.5,le=Math.random()*Math.PI*2,te=Math.acos(2*Math.random()-1);Ee[ut*3]=Bt*Math.sin(te)*Math.cos(le),Ee[ut*3+1]=Bt*Math.sin(te)*Math.sin(le),Ee[ut*3+2]=Bt*Math.cos(te)}fe.setAttribute("position",new si(Ee,3));const Kt=new Ud({color:65535,size:.05,transparent:!0,opacity:.8}),ge=new c0(fe,Kt);ge.position.copy(Rt.position),S.add(ge);function zt(){requestAnimationFrame(zt),Rt.material.uniforms.time.value+=.05,Ut.rotation.y+=.001,ge.rotation.y+=.002,A.render(S,T)}zt();const Le=()=>{M.update(),A.render(S,T),requestAnimationFrame(Le)};return Le(),()=>{y.removeEventListener("pointermove",lt),v.current?.parentNode&&(v.current.parentNode.removeChild(v.current),v.current=null),M.dispose(),A.dispose(),y.removeChild(A.domElement),S.traverse(ut=>{ut.geometry&&ut.geometry.dispose?.(),ut.material&&(Array.isArray(ut.material)?ut.material.forEach(Bt=>Bt.dispose?.()):ut.material.dispose?.())})}},[o,m,d]),Fn.useEffect(()=>{const y=i.current;if(!y)return;let S=null;const T=M=>{let O=0;const U=l.current.position.clone(),w=new W(M[0],M[1]+4,M[2]+6),P=()=>{O++,l.current.position.lerpVectors(U,w,O/60),h.current.target.lerpVectors(h.current.target,new W(...M),O/60),O<60&&(S=requestAnimationFrame(P))};P()},A=M=>{const _=y.getBoundingClientRect();m.x=(M.clientX-_.left)/_.width*2-1,m.y=-((M.clientY-_.top)/_.height)*2+1,d.setFromCamera(m,l.current);const O=d.intersectObjects(p.current,!1);O.length&&(t?.(O[0].object.userData.payload),O[0].object.userData.type==="project"&&T(O[0].object.position.toArray()))};return y.addEventListener("click",A),()=>{y.removeEventListener("click",A),S&&cancelAnimationFrame(S)}},[m,t,d]),Yn.jsx("div",{ref:i,style:{width:"100%",height:"100%"}})}const v1=["vision","pwa","maps","astrophysics","deep space","qsl","audio","nlp","ui","webxr","three","ux"];function y1(){const[o,t]=Fn.useState(""),[i,s]=Fn.useState(null),l=Fn.useMemo(()=>v1.sort(),[]);return Yn.jsxs("div",{style:{height:"100vh",width:"100%",background:"#05060a",color:"white"},children:[Yn.jsxs("div",{style:{padding:"10px",display:"flex",gap:"10px"},children:[Yn.jsx("input",{placeholder:"Search / Filter",value:o,onChange:c=>t(c.target.value),style:{padding:"5px",borderRadius:"5px"}}),Yn.jsxs("select",{value:o,onChange:c=>t(c.target.value),children:[Yn.jsx("option",{value:"",children:"All"}),l.map(c=>Yn.jsx("option",{value:c,children:c},c))]})]}),Yn.jsx(g1,{filter:o,onPick:s}),i&&Yn.jsxs("div",{style:{position:"absolute",right:10,top:10,background:"#000a",padding:"10px",borderRadius:"10px"},children:[Yn.jsx("div",{children:i.name}),Yn.jsx("div",{children:i.summary}),Yn.jsx("div",{children:i.tags.join(", ")}),Yn.jsx("a",{href:i.link,target:"_blank",children:"Open Project ↗"})]})]})}Fx.createRoot(document.getElementById("root")).render(Yn.jsx(y1,{}));
