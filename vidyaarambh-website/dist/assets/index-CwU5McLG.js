(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();var uu={exports:{}},To={},du={exports:{}},ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bh;function zv(){if(Bh)return ct;Bh=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,T={};function x(O,ie,Le){this.props=O,this.context=ie,this.refs=T,this.updater=Le||S}x.prototype.isReactComponent={},x.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _(){}_.prototype=x.prototype;function N(O,ie,Le){this.props=O,this.context=ie,this.refs=T,this.updater=Le||S}var E=N.prototype=new _;E.constructor=N,A(E,x.prototype),E.isPureReactComponent=!0;var P=Array.isArray,V=Object.prototype.hasOwnProperty,I={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function W(O,ie,Le){var K,ue={},Se=null,ge=null;if(ie!=null)for(K in ie.ref!==void 0&&(ge=ie.ref),ie.key!==void 0&&(Se=""+ie.key),ie)V.call(ie,K)&&!U.hasOwnProperty(K)&&(ue[K]=ie[K]);var Ue=arguments.length-2;if(Ue===1)ue.children=Le;else if(1<Ue){for(var ze=Array(Ue),X=0;X<Ue;X++)ze[X]=arguments[X+2];ue.children=ze}if(O&&O.defaultProps)for(K in Ue=O.defaultProps,Ue)ue[K]===void 0&&(ue[K]=Ue[K]);return{$$typeof:s,type:O,key:Se,ref:ge,props:ue,_owner:I.current}}function L(O,ie){return{$$typeof:s,type:O.type,key:ie,ref:O.ref,props:O.props,_owner:O._owner}}function w(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function $(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Le){return ie[Le]})}var oe=/\/+/g;function H(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?$(""+O.key):ie.toString(36)}function le(O,ie,Le,K,ue){var Se=typeof O;(Se==="undefined"||Se==="boolean")&&(O=null);var ge=!1;if(O===null)ge=!0;else switch(Se){case"string":case"number":ge=!0;break;case"object":switch(O.$$typeof){case s:case e:ge=!0}}if(ge)return ge=O,ue=ue(ge),O=K===""?"."+H(ge,0):K,P(ue)?(Le="",O!=null&&(Le=O.replace(oe,"$&/")+"/"),le(ue,ie,Le,"",function(X){return X})):ue!=null&&(w(ue)&&(ue=L(ue,Le+(!ue.key||ge&&ge.key===ue.key?"":(""+ue.key).replace(oe,"$&/")+"/")+O)),ie.push(ue)),1;if(ge=0,K=K===""?".":K+":",P(O))for(var Ue=0;Ue<O.length;Ue++){Se=O[Ue];var ze=K+H(Se,Ue);ge+=le(Se,ie,Le,ze,ue)}else if(ze=v(O),typeof ze=="function")for(O=ze.call(O),Ue=0;!(Se=O.next()).done;)Se=Se.value,ze=K+H(Se,Ue++),ge+=le(Se,ie,Le,ze,ue);else if(Se==="object")throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return ge}function ae(O,ie,Le){if(O==null)return O;var K=[],ue=0;return le(O,K,"","",function(Se){return ie.call(Le,Se,ue++)}),K}function ve(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(Le){(O._status===0||O._status===-1)&&(O._status=1,O._result=Le)},function(Le){(O._status===0||O._status===-1)&&(O._status=2,O._result=Le)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var fe={current:null},z={transition:null},se={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:z,ReactCurrentOwner:I};function Z(){throw Error("act(...) is not supported in production builds of React.")}return ct.Children={map:ae,forEach:function(O,ie,Le){ae(O,function(){ie.apply(this,arguments)},Le)},count:function(O){var ie=0;return ae(O,function(){ie++}),ie},toArray:function(O){return ae(O,function(ie){return ie})||[]},only:function(O){if(!w(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ct.Component=x,ct.Fragment=n,ct.Profiler=a,ct.PureComponent=N,ct.StrictMode=r,ct.Suspense=h,ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,ct.act=Z,ct.cloneElement=function(O,ie,Le){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var K=A({},O.props),ue=O.key,Se=O.ref,ge=O._owner;if(ie!=null){if(ie.ref!==void 0&&(Se=ie.ref,ge=I.current),ie.key!==void 0&&(ue=""+ie.key),O.type&&O.type.defaultProps)var Ue=O.type.defaultProps;for(ze in ie)V.call(ie,ze)&&!U.hasOwnProperty(ze)&&(K[ze]=ie[ze]===void 0&&Ue!==void 0?Ue[ze]:ie[ze])}var ze=arguments.length-2;if(ze===1)K.children=Le;else if(1<ze){Ue=Array(ze);for(var X=0;X<ze;X++)Ue[X]=arguments[X+2];K.children=Ue}return{$$typeof:s,type:O.type,key:ue,ref:Se,props:K,_owner:ge}},ct.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:c,_context:O},O.Consumer=O},ct.createElement=W,ct.createFactory=function(O){var ie=W.bind(null,O);return ie.type=O,ie},ct.createRef=function(){return{current:null}},ct.forwardRef=function(O){return{$$typeof:f,render:O}},ct.isValidElement=w,ct.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:ve}},ct.memo=function(O,ie){return{$$typeof:m,type:O,compare:ie===void 0?null:ie}},ct.startTransition=function(O){var ie=z.transition;z.transition={};try{O()}finally{z.transition=ie}},ct.unstable_act=Z,ct.useCallback=function(O,ie){return fe.current.useCallback(O,ie)},ct.useContext=function(O){return fe.current.useContext(O)},ct.useDebugValue=function(){},ct.useDeferredValue=function(O){return fe.current.useDeferredValue(O)},ct.useEffect=function(O,ie){return fe.current.useEffect(O,ie)},ct.useId=function(){return fe.current.useId()},ct.useImperativeHandle=function(O,ie,Le){return fe.current.useImperativeHandle(O,ie,Le)},ct.useInsertionEffect=function(O,ie){return fe.current.useInsertionEffect(O,ie)},ct.useLayoutEffect=function(O,ie){return fe.current.useLayoutEffect(O,ie)},ct.useMemo=function(O,ie){return fe.current.useMemo(O,ie)},ct.useReducer=function(O,ie,Le){return fe.current.useReducer(O,ie,Le)},ct.useRef=function(O){return fe.current.useRef(O)},ct.useState=function(O){return fe.current.useState(O)},ct.useSyncExternalStore=function(O,ie,Le){return fe.current.useSyncExternalStore(O,ie,Le)},ct.useTransition=function(){return fe.current.useTransition()},ct.version="18.3.1",ct}var Hh;function od(){return Hh||(Hh=1,du.exports=zv()),du.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vh;function Bv(){if(Vh)return To;Vh=1;var s=od(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,m){var g,y={},v=null,S=null;m!==void 0&&(v=""+m),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!c.hasOwnProperty(g)&&(y[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)y[g]===void 0&&(y[g]=h[g]);return{$$typeof:e,type:f,key:v,ref:S,props:y,_owner:a.current}}return To.Fragment=n,To.jsx=u,To.jsxs=u,To}var Gh;function Hv(){return Gh||(Gh=1,uu.exports=Bv()),uu.exports}var R=Hv(),ft=od(),Ha={},fu={exports:{}},Tn={},hu={exports:{}},pu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh;function Vv(){return Wh||(Wh=1,(function(s){function e(z,se){var Z=z.length;z.push(se);e:for(;0<Z;){var O=Z-1>>>1,ie=z[O];if(0<a(ie,se))z[O]=se,z[Z]=ie,Z=O;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var se=z[0],Z=z.pop();if(Z!==se){z[0]=Z;e:for(var O=0,ie=z.length,Le=ie>>>1;O<Le;){var K=2*(O+1)-1,ue=z[K],Se=K+1,ge=z[Se];if(0>a(ue,Z))Se<ie&&0>a(ge,ue)?(z[O]=ge,z[Se]=Z,O=Se):(z[O]=ue,z[K]=Z,O=K);else if(Se<ie&&0>a(ge,Z))z[O]=ge,z[Se]=Z,O=Se;else break e}}return se}function a(z,se){var Z=z.sortIndex-se.sortIndex;return Z!==0?Z:z.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],m=[],g=1,y=null,v=3,S=!1,A=!1,T=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(z){for(var se=n(m);se!==null;){if(se.callback===null)r(m);else if(se.startTime<=z)r(m),se.sortIndex=se.expirationTime,e(h,se);else break;se=n(m)}}function P(z){if(T=!1,E(z),!A)if(n(h)!==null)A=!0,ve(V);else{var se=n(m);se!==null&&fe(P,se.startTime-z)}}function V(z,se){A=!1,T&&(T=!1,_(W),W=-1),S=!0;var Z=v;try{for(E(se),y=n(h);y!==null&&(!(y.expirationTime>se)||z&&!$());){var O=y.callback;if(typeof O=="function"){y.callback=null,v=y.priorityLevel;var ie=O(y.expirationTime<=se);se=s.unstable_now(),typeof ie=="function"?y.callback=ie:y===n(h)&&r(h),E(se)}else r(h);y=n(h)}if(y!==null)var Le=!0;else{var K=n(m);K!==null&&fe(P,K.startTime-se),Le=!1}return Le}finally{y=null,v=Z,S=!1}}var I=!1,U=null,W=-1,L=5,w=-1;function $(){return!(s.unstable_now()-w<L)}function oe(){if(U!==null){var z=s.unstable_now();w=z;var se=!0;try{se=U(!0,z)}finally{se?H():(I=!1,U=null)}}else I=!1}var H;if(typeof N=="function")H=function(){N(oe)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ae=le.port2;le.port1.onmessage=oe,H=function(){ae.postMessage(null)}}else H=function(){x(oe,0)};function ve(z){U=z,I||(I=!0,H())}function fe(z,se){W=x(function(){z(s.unstable_now())},se)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_continueExecution=function(){A||S||(A=!0,ve(V))},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(z){switch(v){case 1:case 2:case 3:var se=3;break;default:se=v}var Z=v;v=se;try{return z()}finally{v=Z}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(z,se){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=v;v=z;try{return se()}finally{v=Z}},s.unstable_scheduleCallback=function(z,se,Z){var O=s.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?O+Z:O):Z=O,z){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=Z+ie,z={id:g++,callback:se,priorityLevel:z,startTime:Z,expirationTime:ie,sortIndex:-1},Z>O?(z.sortIndex=Z,e(m,z),n(h)===null&&z===n(m)&&(T?(_(W),W=-1):T=!0,fe(P,Z-O))):(z.sortIndex=ie,e(h,z),A||S||(A=!0,ve(V))),z},s.unstable_shouldYield=$,s.unstable_wrapCallback=function(z){var se=v;return function(){var Z=v;v=se;try{return z.apply(this,arguments)}finally{v=Z}}}})(pu)),pu}var jh;function Gv(){return jh||(jh=1,hu.exports=Vv()),hu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh;function Wv(){if(Xh)return Tn;Xh=1;var s=od(),e=Gv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function v(t){return h.call(y,t)?!0:h.call(g,t)?!1:m.test(t)?y[t]=!0:(g[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,o,l,d,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];x[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,N);x[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,N);x[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,N);x[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function E(t,i,o,l){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,o,d,l)&&(o=null),l||d===null?v(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,l=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),I=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),$=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),ve=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),z=Symbol.iterator;function se(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var Z=Object.assign,O;function ie(t){if(O===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+t}var Le=!1;function K(t,i){if(!t||Le)return"";Le=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var l=te}Reflect.construct(t,[],i)}else{try{i.call()}catch(te){l=te}t.call(i.prototype)}else{try{throw Error()}catch(te){l=te}t()}}catch(te){if(te&&l&&typeof te.stack=="string"){for(var d=te.stack.split(`
`),p=l.stack.split(`
`),M=d.length-1,D=p.length-1;1<=M&&0<=D&&d[M]!==p[D];)D--;for(;1<=M&&0<=D;M--,D--)if(d[M]!==p[D]){if(M!==1||D!==1)do if(M--,D--,0>D||d[M]!==p[D]){var k=`
`+d[M].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=M&&0<=D);break}}}finally{Le=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ie(t):""}function ue(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=K(t.type,!1),t;case 11:return t=K(t.type.render,!1),t;case 1:return t=K(t.type,!0),t;default:return""}}function Se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case I:return"Portal";case L:return"Profiler";case W:return"StrictMode";case H:return"Suspense";case le:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $:return(t.displayName||"Context")+".Consumer";case w:return(t._context.displayName||"Context")+".Provider";case oe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ae:return i=t.displayName||null,i!==null?i:Se(t.type)||"Memo";case ve:i=t._payload,t=t._init;try{return Se(t(i))}catch{}}return null}function ge(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ue(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ze(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function X(t){var i=ze(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){l=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function yt(t){t._valueTracker||(t._valueTracker=X(t))}function Xe(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=ze(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function xt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qe(t,i){var o=i.checked;return Z({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function ut(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Ue(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function it(t,i){i=i.checked,i!=null&&E(t,"checked",i,!1)}function lt(t,i){it(t,i);var o=Ue(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?F(t,i.type,o):i.hasOwnProperty("defaultValue")&&F(t,i.type,Ue(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function At(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function F(t,i,o){(i!=="number"||xt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var C=Array.isArray;function re(t,i,o,l){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Ue(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function de(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return Z({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _e(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(C(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Ue(o)}}function ye(t,i){var o=Ue(i.value),l=Ue(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function Ge(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Re(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Te(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Re(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Je,Ee=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Je=Je||document.createElement("div"),Je.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Je.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ve(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var at={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ye=["Webkit","ms","Moz","O"];Object.keys(at).forEach(function(t){Ye.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),at[i]=at[t]})});function Ne(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||at.hasOwnProperty(t)&&at[t]?(""+i).trim():i+"px"}function nt(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,d=Ne(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,d):t[o]=d}}var dt=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ct(t,i){if(i){if(dt[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function tt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var G=null;function he(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ce=null,we=null,be=null;function pt(t){if(t=co(t)){if(typeof ce!="function")throw Error(n(280));var i=t.stateNode;i&&(i=na(i),ce(t.stateNode,t.type,i))}}function Mt(t){we?be?be.push(t):be=[t]:we=t}function Rt(){if(we){var t=we,i=be;if(be=we=null,pt(t),i)for(t=0;t<i.length;t++)pt(i[t])}}function Gt(t,i){return t(i)}function vt(){}var xn=!1;function Kt(t,i,o){if(xn)return t(i,o);xn=!0;try{return Gt(t,i,o)}finally{xn=!1,(we!==null||be!==null)&&(vt(),Rt())}}function Fi(t,i){var o=t.stateNode;if(o===null)return null;var l=na(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Gr=!1;if(f)try{var Oi={};Object.defineProperty(Oi,"passive",{get:function(){Gr=!0}}),window.addEventListener("test",Oi,Oi),window.removeEventListener("test",Oi,Oi)}catch{Gr=!1}function Wr(t,i,o,l,d,p,M,D,k){var te=Array.prototype.slice.call(arguments,3);try{i.apply(o,te)}catch(me){this.onError(me)}}var ki=!1,vi=null,vr=!1,jr=null,Rl={onError:function(t){ki=!0,vi=t}};function bl(t,i,o,l,d,p,M,D,k){ki=!1,vi=null,Wr.apply(Rl,arguments)}function Pl(t,i,o,l,d,p,M,D,k){if(bl.apply(this,arguments),ki){if(ki){var te=vi;ki=!1,vi=null}else throw Error(n(198));vr||(vr=!0,jr=te)}}function b(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function j(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ne(t){if(b(t)!==t)throw Error(n(188))}function ee(t){var i=t.alternate;if(!i){if(i=b(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(l=d.return,l!==null){o=l;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return ne(d),t;if(p===l)return ne(d),i;p=p.sibling}throw Error(n(188))}if(o.return!==l.return)o=d,l=p;else{for(var M=!1,D=d.child;D;){if(D===o){M=!0,o=d,l=p;break}if(D===l){M=!0,l=d,o=p;break}D=D.sibling}if(!M){for(D=p.child;D;){if(D===o){M=!0,o=p,l=d;break}if(D===l){M=!0,l=p,o=d;break}D=D.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function J(t){return t=ee(t),t!==null?Ae(t):null}function Ae(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Ae(t);if(i!==null)return i;t=t.sibling}return null}var ke=e.unstable_scheduleCallback,He=e.unstable_cancelCallback,$e=e.unstable_shouldYield,et=e.unstable_requestPaint,Fe=e.unstable_now,rt=e.unstable_getCurrentPriorityLevel,Nt=e.unstable_ImmediatePriority,Wt=e.unstable_UserBlockingPriority,Qt=e.unstable_NormalPriority,$n=e.unstable_LowPriority,mt=e.unstable_IdlePriority,Qe=null,ln=null;function wt(t){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(Qe,t,void 0,(t.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:Ws,Bo=Math.log,_r=Math.LN2;function Ws(t){return t>>>=0,t===0?32:31-(Bo(t)/_r|0)|0}var kt=64,Ln=4194304;function _i(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function rn(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,d=t.suspendedLanes,p=t.pingedLanes,M=o&268435455;if(M!==0){var D=M&~d;D!==0?l=_i(D):(p&=M,p!==0&&(l=_i(p)))}else M=o&~d,M!==0?l=_i(M):p!==0&&(l=_i(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&d)===0&&(d=l&-l,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-jt(i),d=1<<o,l|=t[o],i&=~d;return l}function js(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ll(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-jt(p),D=1<<M,k=d[M];k===-1?((D&o)===0||(D&l)!==0)&&(d[M]=js(D,i)):k<=i&&(t.expiredLanes|=D),p&=~D}}function Xr(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gd(){var t=kt;return kt<<=1,(kt&4194240)===0&&(kt=64),t}function Nl(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Xs(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-jt(i),t[i]=o}function og(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-jt(o),p=1<<d;i[d]=0,l[d]=-1,t[d]=-1,o&=~p}}function Dl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-jt(o),d=1<<l;d&i|t[l]&i&&(t[l]|=i),o&=~d}}var St=0;function vd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var _d,Ul,xd,yd,Sd,Il=!1,Ho=[],zi=null,Bi=null,Hi=null,qs=new Map,Ys=new Map,Vi=[],ag="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Md(t,i){switch(t){case"focusin":case"focusout":zi=null;break;case"dragenter":case"dragleave":Bi=null;break;case"mouseover":case"mouseout":Hi=null;break;case"pointerover":case"pointerout":qs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ys.delete(i.pointerId)}}function $s(t,i,o,l,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:p,targetContainers:[d]},i!==null&&(i=co(i),i!==null&&Ul(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function lg(t,i,o,l,d){switch(i){case"focusin":return zi=$s(zi,t,i,o,l,d),!0;case"dragenter":return Bi=$s(Bi,t,i,o,l,d),!0;case"mouseover":return Hi=$s(Hi,t,i,o,l,d),!0;case"pointerover":var p=d.pointerId;return qs.set(p,$s(qs.get(p)||null,t,i,o,l,d)),!0;case"gotpointercapture":return p=d.pointerId,Ys.set(p,$s(Ys.get(p)||null,t,i,o,l,d)),!0}return!1}function Ed(t){var i=xr(t.target);if(i!==null){var o=b(i);if(o!==null){if(i=o.tag,i===13){if(i=j(o),i!==null){t.blockedOn=i,Sd(t.priority,function(){xd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Ol(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);G=l,o.target.dispatchEvent(l),G=null}else return i=co(o),i!==null&&Ul(i),t.blockedOn=o,!1;i.shift()}return!0}function wd(t,i,o){Vo(t)&&o.delete(i)}function cg(){Il=!1,zi!==null&&Vo(zi)&&(zi=null),Bi!==null&&Vo(Bi)&&(Bi=null),Hi!==null&&Vo(Hi)&&(Hi=null),qs.forEach(wd),Ys.forEach(wd)}function Ks(t,i){t.blockedOn===i&&(t.blockedOn=null,Il||(Il=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,cg)))}function Qs(t){function i(d){return Ks(d,t)}if(0<Ho.length){Ks(Ho[0],t);for(var o=1;o<Ho.length;o++){var l=Ho[o];l.blockedOn===t&&(l.blockedOn=null)}}for(zi!==null&&Ks(zi,t),Bi!==null&&Ks(Bi,t),Hi!==null&&Ks(Hi,t),qs.forEach(i),Ys.forEach(i),o=0;o<Vi.length;o++)l=Vi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Vi.length&&(o=Vi[0],o.blockedOn===null);)Ed(o),o.blockedOn===null&&Vi.shift()}var qr=P.ReactCurrentBatchConfig,Go=!0;function ug(t,i,o,l){var d=St,p=qr.transition;qr.transition=null;try{St=1,Fl(t,i,o,l)}finally{St=d,qr.transition=p}}function dg(t,i,o,l){var d=St,p=qr.transition;qr.transition=null;try{St=4,Fl(t,i,o,l)}finally{St=d,qr.transition=p}}function Fl(t,i,o,l){if(Go){var d=Ol(t,i,o,l);if(d===null)ec(t,i,l,Wo,o),Md(t,l);else if(lg(d,t,i,o,l))l.stopPropagation();else if(Md(t,l),i&4&&-1<ag.indexOf(t)){for(;d!==null;){var p=co(d);if(p!==null&&_d(p),p=Ol(t,i,o,l),p===null&&ec(t,i,l,Wo,o),p===d)break;d=p}d!==null&&l.stopPropagation()}else ec(t,i,l,null,o)}}var Wo=null;function Ol(t,i,o,l){if(Wo=null,t=he(l),t=xr(t),t!==null)if(i=b(t),i===null)t=null;else if(o=i.tag,o===13){if(t=j(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Wo=t,null}function Td(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rt()){case Nt:return 1;case Wt:return 4;case Qt:case $n:return 16;case mt:return 536870912;default:return 16}default:return 16}}var Gi=null,kl=null,jo=null;function Ad(){if(jo)return jo;var t,i=kl,o=i.length,l,d="value"in Gi?Gi.value:Gi.textContent,p=d.length;for(t=0;t<o&&i[t]===d[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===d[p-l];l++);return jo=d.slice(t,1<l?1-l:void 0)}function Xo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function qo(){return!0}function Cd(){return!1}function Nn(t){function i(o,l,d,p,M){this._reactName=o,this._targetInst=d,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(o=t[D],this[D]=o?o(p):p[D]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?qo:Cd,this.isPropagationStopped=Cd,this}return Z(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),i}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=Nn(Yr),Zs=Z({},Yr,{view:0,detail:0}),fg=Nn(Zs),Bl,Hl,Js,Yo=Z({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(Bl=t.screenX-Js.screenX,Hl=t.screenY-Js.screenY):Hl=Bl=0,Js=t),Bl)},movementY:function(t){return"movementY"in t?t.movementY:Hl}}),Rd=Nn(Yo),hg=Z({},Yo,{dataTransfer:0}),pg=Nn(hg),mg=Z({},Zs,{relatedTarget:0}),Vl=Nn(mg),gg=Z({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),vg=Nn(gg),_g=Z({},Yr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xg=Nn(_g),yg=Z({},Yr,{data:0}),bd=Nn(yg),Sg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Eg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Eg[t])?!!i[t]:!1}function Gl(){return wg}var Tg=Z({},Zs,{key:function(t){if(t.key){var i=Sg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Xo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gl,charCode:function(t){return t.type==="keypress"?Xo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ag=Nn(Tg),Cg=Z({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pd=Nn(Cg),Rg=Z({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gl}),bg=Nn(Rg),Pg=Z({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lg=Nn(Pg),Ng=Z({},Yo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dg=Nn(Ng),Ug=[9,13,27,32],Wl=f&&"CompositionEvent"in window,eo=null;f&&"documentMode"in document&&(eo=document.documentMode);var Ig=f&&"TextEvent"in window&&!eo,Ld=f&&(!Wl||eo&&8<eo&&11>=eo),Nd=" ",Dd=!1;function Ud(t,i){switch(t){case"keyup":return Ug.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Id(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function Fg(t,i){switch(t){case"compositionend":return Id(i);case"keypress":return i.which!==32?null:(Dd=!0,Nd);case"textInput":return t=i.data,t===Nd&&Dd?null:t;default:return null}}function Og(t,i){if($r)return t==="compositionend"||!Wl&&Ud(t,i)?(t=Ad(),jo=kl=Gi=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ld&&i.locale!=="ko"?null:i.data;default:return null}}var kg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!kg[t.type]:i==="textarea"}function Od(t,i,o,l){Mt(l),i=Jo(i,"onChange"),0<i.length&&(o=new zl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var to=null,no=null;function zg(t){tf(t,0)}function $o(t){var i=es(t);if(Xe(i))return t}function Bg(t,i){if(t==="change")return i}var kd=!1;if(f){var jl;if(f){var Xl="oninput"in document;if(!Xl){var zd=document.createElement("div");zd.setAttribute("oninput","return;"),Xl=typeof zd.oninput=="function"}jl=Xl}else jl=!1;kd=jl&&(!document.documentMode||9<document.documentMode)}function Bd(){to&&(to.detachEvent("onpropertychange",Hd),no=to=null)}function Hd(t){if(t.propertyName==="value"&&$o(no)){var i=[];Od(i,no,t,he(t)),Kt(zg,i)}}function Hg(t,i,o){t==="focusin"?(Bd(),to=i,no=o,to.attachEvent("onpropertychange",Hd)):t==="focusout"&&Bd()}function Vg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $o(no)}function Gg(t,i){if(t==="click")return $o(i)}function Wg(t,i){if(t==="input"||t==="change")return $o(i)}function jg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Kn=typeof Object.is=="function"?Object.is:jg;function io(t,i){if(Kn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var d=o[l];if(!h.call(i,d)||!Kn(t[d],i[d]))return!1}return!0}function Vd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gd(t,i){var o=Vd(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Vd(o)}}function Wd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Wd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function jd(){for(var t=window,i=xt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=xt(t.document)}return i}function ql(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Xg(t){var i=jd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Wd(o.ownerDocument.documentElement,o)){if(l!==null&&ql(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,p=Math.min(l.start,d);l=l.end===void 0?p:Math.min(l.end,d),!t.extend&&p>l&&(d=l,l=p,p=d),d=Gd(o,p);var M=Gd(o,l);d&&M&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qg=f&&"documentMode"in document&&11>=document.documentMode,Kr=null,Yl=null,ro=null,$l=!1;function Xd(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;$l||Kr==null||Kr!==xt(l)||(l=Kr,"selectionStart"in l&&ql(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ro&&io(ro,l)||(ro=l,l=Jo(Yl,"onSelect"),0<l.length&&(i=new zl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=Kr)))}function Ko(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Qr={animationend:Ko("Animation","AnimationEnd"),animationiteration:Ko("Animation","AnimationIteration"),animationstart:Ko("Animation","AnimationStart"),transitionend:Ko("Transition","TransitionEnd")},Kl={},qd={};f&&(qd=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function Qo(t){if(Kl[t])return Kl[t];if(!Qr[t])return t;var i=Qr[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in qd)return Kl[t]=i[o];return t}var Yd=Qo("animationend"),$d=Qo("animationiteration"),Kd=Qo("animationstart"),Qd=Qo("transitionend"),Zd=new Map,Jd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wi(t,i){Zd.set(t,i),c(i,[t])}for(var Ql=0;Ql<Jd.length;Ql++){var Zl=Jd[Ql],Yg=Zl.toLowerCase(),$g=Zl[0].toUpperCase()+Zl.slice(1);Wi(Yg,"on"+$g)}Wi(Yd,"onAnimationEnd"),Wi($d,"onAnimationIteration"),Wi(Kd,"onAnimationStart"),Wi("dblclick","onDoubleClick"),Wi("focusin","onFocus"),Wi("focusout","onBlur"),Wi(Qd,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kg=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function ef(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Pl(l,i,void 0,t),t.currentTarget=null}function tf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],d=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var M=l.length-1;0<=M;M--){var D=l[M],k=D.instance,te=D.currentTarget;if(D=D.listener,k!==p&&d.isPropagationStopped())break e;ef(d,D,te),p=k}else for(M=0;M<l.length;M++){if(D=l[M],k=D.instance,te=D.currentTarget,D=D.listener,k!==p&&d.isPropagationStopped())break e;ef(d,D,te),p=k}}}if(vr)throw t=jr,vr=!1,jr=null,t}function bt(t,i){var o=i[oc];o===void 0&&(o=i[oc]=new Set);var l=t+"__bubble";o.has(l)||(nf(i,t,2,!1),o.add(l))}function Jl(t,i,o){var l=0;i&&(l|=4),nf(o,t,l,i)}var Zo="_reactListening"+Math.random().toString(36).slice(2);function oo(t){if(!t[Zo]){t[Zo]=!0,r.forEach(function(o){o!=="selectionchange"&&(Kg.has(o)||Jl(o,!1,t),Jl(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Zo]||(i[Zo]=!0,Jl("selectionchange",!1,i))}}function nf(t,i,o,l){switch(Td(i)){case 1:var d=ug;break;case 4:d=dg;break;default:d=Fl}o=d.bind(null,i,o,t),d=void 0,!Gr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function ec(t,i,o,l,d){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var D=l.stateNode.containerInfo;if(D===d||D.nodeType===8&&D.parentNode===d)break;if(M===4)for(M=l.return;M!==null;){var k=M.tag;if((k===3||k===4)&&(k=M.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;M=M.return}for(;D!==null;){if(M=xr(D),M===null)return;if(k=M.tag,k===5||k===6){l=p=M;continue e}D=D.parentNode}}l=l.return}Kt(function(){var te=p,me=he(o),xe=[];e:{var pe=Zd.get(t);if(pe!==void 0){var Pe=zl,Ie=t;switch(t){case"keypress":if(Xo(o)===0)break e;case"keydown":case"keyup":Pe=Ag;break;case"focusin":Ie="focus",Pe=Vl;break;case"focusout":Ie="blur",Pe=Vl;break;case"beforeblur":case"afterblur":Pe=Vl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Pe=Rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Pe=pg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Pe=bg;break;case Yd:case $d:case Kd:Pe=vg;break;case Qd:Pe=Lg;break;case"scroll":Pe=fg;break;case"wheel":Pe=Dg;break;case"copy":case"cut":case"paste":Pe=xg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Pe=Pd}var Oe=(i&4)!==0,zt=!Oe&&t==="scroll",q=Oe?pe!==null?pe+"Capture":null:pe;Oe=[];for(var B=te,Q;B!==null;){Q=B;var Me=Q.stateNode;if(Q.tag===5&&Me!==null&&(Q=Me,q!==null&&(Me=Fi(B,q),Me!=null&&Oe.push(ao(B,Me,Q)))),zt)break;B=B.return}0<Oe.length&&(pe=new Pe(pe,Ie,null,o,me),xe.push({event:pe,listeners:Oe}))}}if((i&7)===0){e:{if(pe=t==="mouseover"||t==="pointerover",Pe=t==="mouseout"||t==="pointerout",pe&&o!==G&&(Ie=o.relatedTarget||o.fromElement)&&(xr(Ie)||Ie[xi]))break e;if((Pe||pe)&&(pe=me.window===me?me:(pe=me.ownerDocument)?pe.defaultView||pe.parentWindow:window,Pe?(Ie=o.relatedTarget||o.toElement,Pe=te,Ie=Ie?xr(Ie):null,Ie!==null&&(zt=b(Ie),Ie!==zt||Ie.tag!==5&&Ie.tag!==6)&&(Ie=null)):(Pe=null,Ie=te),Pe!==Ie)){if(Oe=Rd,Me="onMouseLeave",q="onMouseEnter",B="mouse",(t==="pointerout"||t==="pointerover")&&(Oe=Pd,Me="onPointerLeave",q="onPointerEnter",B="pointer"),zt=Pe==null?pe:es(Pe),Q=Ie==null?pe:es(Ie),pe=new Oe(Me,B+"leave",Pe,o,me),pe.target=zt,pe.relatedTarget=Q,Me=null,xr(me)===te&&(Oe=new Oe(q,B+"enter",Ie,o,me),Oe.target=Q,Oe.relatedTarget=zt,Me=Oe),zt=Me,Pe&&Ie)t:{for(Oe=Pe,q=Ie,B=0,Q=Oe;Q;Q=Zr(Q))B++;for(Q=0,Me=q;Me;Me=Zr(Me))Q++;for(;0<B-Q;)Oe=Zr(Oe),B--;for(;0<Q-B;)q=Zr(q),Q--;for(;B--;){if(Oe===q||q!==null&&Oe===q.alternate)break t;Oe=Zr(Oe),q=Zr(q)}Oe=null}else Oe=null;Pe!==null&&rf(xe,pe,Pe,Oe,!1),Ie!==null&&zt!==null&&rf(xe,zt,Ie,Oe,!0)}}e:{if(pe=te?es(te):window,Pe=pe.nodeName&&pe.nodeName.toLowerCase(),Pe==="select"||Pe==="input"&&pe.type==="file")var Be=Bg;else if(Fd(pe))if(kd)Be=Wg;else{Be=Vg;var We=Hg}else(Pe=pe.nodeName)&&Pe.toLowerCase()==="input"&&(pe.type==="checkbox"||pe.type==="radio")&&(Be=Gg);if(Be&&(Be=Be(t,te))){Od(xe,Be,o,me);break e}We&&We(t,pe,te),t==="focusout"&&(We=pe._wrapperState)&&We.controlled&&pe.type==="number"&&F(pe,"number",pe.value)}switch(We=te?es(te):window,t){case"focusin":(Fd(We)||We.contentEditable==="true")&&(Kr=We,Yl=te,ro=null);break;case"focusout":ro=Yl=Kr=null;break;case"mousedown":$l=!0;break;case"contextmenu":case"mouseup":case"dragend":$l=!1,Xd(xe,o,me);break;case"selectionchange":if(qg)break;case"keydown":case"keyup":Xd(xe,o,me)}var je;if(Wl)e:{switch(t){case"compositionstart":var Ze="onCompositionStart";break e;case"compositionend":Ze="onCompositionEnd";break e;case"compositionupdate":Ze="onCompositionUpdate";break e}Ze=void 0}else $r?Ud(t,o)&&(Ze="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Ze="onCompositionStart");Ze&&(Ld&&o.locale!=="ko"&&($r||Ze!=="onCompositionStart"?Ze==="onCompositionEnd"&&$r&&(je=Ad()):(Gi=me,kl="value"in Gi?Gi.value:Gi.textContent,$r=!0)),We=Jo(te,Ze),0<We.length&&(Ze=new bd(Ze,t,null,o,me),xe.push({event:Ze,listeners:We}),je?Ze.data=je:(je=Id(o),je!==null&&(Ze.data=je)))),(je=Ig?Fg(t,o):Og(t,o))&&(te=Jo(te,"onBeforeInput"),0<te.length&&(me=new bd("onBeforeInput","beforeinput",null,o,me),xe.push({event:me,listeners:te}),me.data=je))}tf(xe,i)})}function ao(t,i,o){return{instance:t,listener:i,currentTarget:o}}function Jo(t,i){for(var o=i+"Capture",l=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Fi(t,o),p!=null&&l.unshift(ao(t,p,d)),p=Fi(t,i),p!=null&&l.push(ao(t,p,d))),t=t.return}return l}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rf(t,i,o,l,d){for(var p=i._reactName,M=[];o!==null&&o!==l;){var D=o,k=D.alternate,te=D.stateNode;if(k!==null&&k===l)break;D.tag===5&&te!==null&&(D=te,d?(k=Fi(o,p),k!=null&&M.unshift(ao(o,k,D))):d||(k=Fi(o,p),k!=null&&M.push(ao(o,k,D)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var Qg=/\r\n?/g,Zg=/\u0000|\uFFFD/g;function sf(t){return(typeof t=="string"?t:""+t).replace(Qg,`
`).replace(Zg,"")}function ea(t,i,o){if(i=sf(i),sf(t)!==i&&o)throw Error(n(425))}function ta(){}var tc=null,nc=null;function ic(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var rc=typeof setTimeout=="function"?setTimeout:void 0,Jg=typeof clearTimeout=="function"?clearTimeout:void 0,of=typeof Promise=="function"?Promise:void 0,ev=typeof queueMicrotask=="function"?queueMicrotask:typeof of<"u"?function(t){return of.resolve(null).then(t).catch(tv)}:rc;function tv(t){setTimeout(function(){throw t})}function sc(t,i){var o=i,l=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(l===0){t.removeChild(d),Qs(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=d}while(o);Qs(i)}function ji(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function af(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Jr=Math.random().toString(36).slice(2),ai="__reactFiber$"+Jr,lo="__reactProps$"+Jr,xi="__reactContainer$"+Jr,oc="__reactEvents$"+Jr,nv="__reactListeners$"+Jr,iv="__reactHandles$"+Jr;function xr(t){var i=t[ai];if(i)return i;for(var o=t.parentNode;o;){if(i=o[xi]||o[ai]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=af(t);t!==null;){if(o=t[ai])return o;t=af(t)}return i}t=o,o=t.parentNode}return null}function co(t){return t=t[ai]||t[xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function na(t){return t[lo]||null}var ac=[],ts=-1;function Xi(t){return{current:t}}function Pt(t){0>ts||(t.current=ac[ts],ac[ts]=null,ts--)}function Tt(t,i){ts++,ac[ts]=t.current,t.current=i}var qi={},cn=Xi(qi),yn=Xi(!1),yr=qi;function ns(t,i){var o=t.type.contextTypes;if(!o)return qi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Sn(t){return t=t.childContextTypes,t!=null}function ia(){Pt(yn),Pt(cn)}function lf(t,i,o){if(cn.current!==qi)throw Error(n(168));Tt(cn,i),Tt(yn,o)}function cf(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var d in l)if(!(d in i))throw Error(n(108,ge(t)||"Unknown",d));return Z({},o,l)}function ra(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qi,yr=cn.current,Tt(cn,t),Tt(yn,yn.current),!0}function uf(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=cf(t,i,yr),l.__reactInternalMemoizedMergedChildContext=t,Pt(yn),Pt(cn),Tt(cn,t)):Pt(yn),Tt(yn,o)}var yi=null,sa=!1,lc=!1;function df(t){yi===null?yi=[t]:yi.push(t)}function rv(t){sa=!0,df(t)}function Yi(){if(!lc&&yi!==null){lc=!0;var t=0,i=St;try{var o=yi;for(St=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}yi=null,sa=!1}catch(d){throw yi!==null&&(yi=yi.slice(t+1)),ke(Nt,Yi),d}finally{St=i,lc=!1}}return null}var is=[],rs=0,oa=null,aa=0,kn=[],zn=0,Sr=null,Si=1,Mi="";function Mr(t,i){is[rs++]=aa,is[rs++]=oa,oa=t,aa=i}function ff(t,i,o){kn[zn++]=Si,kn[zn++]=Mi,kn[zn++]=Sr,Sr=t;var l=Si;t=Mi;var d=32-jt(l)-1;l&=~(1<<d),o+=1;var p=32-jt(i)+d;if(30<p){var M=d-d%5;p=(l&(1<<M)-1).toString(32),l>>=M,d-=M,Si=1<<32-jt(i)+d|o<<d|l,Mi=p+t}else Si=1<<p|o<<d|l,Mi=t}function cc(t){t.return!==null&&(Mr(t,1),ff(t,1,0))}function uc(t){for(;t===oa;)oa=is[--rs],is[rs]=null,aa=is[--rs],is[rs]=null;for(;t===Sr;)Sr=kn[--zn],kn[zn]=null,Mi=kn[--zn],kn[zn]=null,Si=kn[--zn],kn[zn]=null}var Dn=null,Un=null,Dt=!1,Qn=null;function hf(t,i){var o=Gn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function pf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Dn=t,Un=ji(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Dn=t,Un=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Sr!==null?{id:Si,overflow:Mi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Gn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Dn=t,Un=null,!0):!1;default:return!1}}function dc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fc(t){if(Dt){var i=Un;if(i){var o=i;if(!pf(t,i)){if(dc(t))throw Error(n(418));i=ji(o.nextSibling);var l=Dn;i&&pf(t,i)?hf(l,o):(t.flags=t.flags&-4097|2,Dt=!1,Dn=t)}}else{if(dc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Dt=!1,Dn=t}}}function mf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function la(t){if(t!==Dn)return!1;if(!Dt)return mf(t),Dt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!ic(t.type,t.memoizedProps)),i&&(i=Un)){if(dc(t))throw gf(),Error(n(418));for(;i;)hf(t,i),i=ji(i.nextSibling)}if(mf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Un=ji(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Un=null}}else Un=Dn?ji(t.stateNode.nextSibling):null;return!0}function gf(){for(var t=Un;t;)t=ji(t.nextSibling)}function ss(){Un=Dn=null,Dt=!1}function hc(t){Qn===null?Qn=[t]:Qn.push(t)}var sv=P.ReactCurrentBatchConfig;function uo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var d=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var D=d.refs;M===null?delete D[p]:D[p]=M},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ca(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function vf(t){var i=t._init;return i(t._payload)}function _f(t){function i(q,B){if(t){var Q=q.deletions;Q===null?(q.deletions=[B],q.flags|=16):Q.push(B)}}function o(q,B){if(!t)return null;for(;B!==null;)i(q,B),B=B.sibling;return null}function l(q,B){for(q=new Map;B!==null;)B.key!==null?q.set(B.key,B):q.set(B.index,B),B=B.sibling;return q}function d(q,B){return q=nr(q,B),q.index=0,q.sibling=null,q}function p(q,B,Q){return q.index=Q,t?(Q=q.alternate,Q!==null?(Q=Q.index,Q<B?(q.flags|=2,B):Q):(q.flags|=2,B)):(q.flags|=1048576,B)}function M(q){return t&&q.alternate===null&&(q.flags|=2),q}function D(q,B,Q,Me){return B===null||B.tag!==6?(B=ru(Q,q.mode,Me),B.return=q,B):(B=d(B,Q),B.return=q,B)}function k(q,B,Q,Me){var Be=Q.type;return Be===U?me(q,B,Q.props.children,Me,Q.key):B!==null&&(B.elementType===Be||typeof Be=="object"&&Be!==null&&Be.$$typeof===ve&&vf(Be)===B.type)?(Me=d(B,Q.props),Me.ref=uo(q,B,Q),Me.return=q,Me):(Me=Da(Q.type,Q.key,Q.props,null,q.mode,Me),Me.ref=uo(q,B,Q),Me.return=q,Me)}function te(q,B,Q,Me){return B===null||B.tag!==4||B.stateNode.containerInfo!==Q.containerInfo||B.stateNode.implementation!==Q.implementation?(B=su(Q,q.mode,Me),B.return=q,B):(B=d(B,Q.children||[]),B.return=q,B)}function me(q,B,Q,Me,Be){return B===null||B.tag!==7?(B=Pr(Q,q.mode,Me,Be),B.return=q,B):(B=d(B,Q),B.return=q,B)}function xe(q,B,Q){if(typeof B=="string"&&B!==""||typeof B=="number")return B=ru(""+B,q.mode,Q),B.return=q,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case V:return Q=Da(B.type,B.key,B.props,null,q.mode,Q),Q.ref=uo(q,null,B),Q.return=q,Q;case I:return B=su(B,q.mode,Q),B.return=q,B;case ve:var Me=B._init;return xe(q,Me(B._payload),Q)}if(C(B)||se(B))return B=Pr(B,q.mode,Q,null),B.return=q,B;ca(q,B)}return null}function pe(q,B,Q,Me){var Be=B!==null?B.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Be!==null?null:D(q,B,""+Q,Me);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case V:return Q.key===Be?k(q,B,Q,Me):null;case I:return Q.key===Be?te(q,B,Q,Me):null;case ve:return Be=Q._init,pe(q,B,Be(Q._payload),Me)}if(C(Q)||se(Q))return Be!==null?null:me(q,B,Q,Me,null);ca(q,Q)}return null}function Pe(q,B,Q,Me,Be){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return q=q.get(Q)||null,D(B,q,""+Me,Be);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case V:return q=q.get(Me.key===null?Q:Me.key)||null,k(B,q,Me,Be);case I:return q=q.get(Me.key===null?Q:Me.key)||null,te(B,q,Me,Be);case ve:var We=Me._init;return Pe(q,B,Q,We(Me._payload),Be)}if(C(Me)||se(Me))return q=q.get(Q)||null,me(B,q,Me,Be,null);ca(B,Me)}return null}function Ie(q,B,Q,Me){for(var Be=null,We=null,je=B,Ze=B=0,en=null;je!==null&&Ze<Q.length;Ze++){je.index>Ze?(en=je,je=null):en=je.sibling;var _t=pe(q,je,Q[Ze],Me);if(_t===null){je===null&&(je=en);break}t&&je&&_t.alternate===null&&i(q,je),B=p(_t,B,Ze),We===null?Be=_t:We.sibling=_t,We=_t,je=en}if(Ze===Q.length)return o(q,je),Dt&&Mr(q,Ze),Be;if(je===null){for(;Ze<Q.length;Ze++)je=xe(q,Q[Ze],Me),je!==null&&(B=p(je,B,Ze),We===null?Be=je:We.sibling=je,We=je);return Dt&&Mr(q,Ze),Be}for(je=l(q,je);Ze<Q.length;Ze++)en=Pe(je,q,Ze,Q[Ze],Me),en!==null&&(t&&en.alternate!==null&&je.delete(en.key===null?Ze:en.key),B=p(en,B,Ze),We===null?Be=en:We.sibling=en,We=en);return t&&je.forEach(function(ir){return i(q,ir)}),Dt&&Mr(q,Ze),Be}function Oe(q,B,Q,Me){var Be=se(Q);if(typeof Be!="function")throw Error(n(150));if(Q=Be.call(Q),Q==null)throw Error(n(151));for(var We=Be=null,je=B,Ze=B=0,en=null,_t=Q.next();je!==null&&!_t.done;Ze++,_t=Q.next()){je.index>Ze?(en=je,je=null):en=je.sibling;var ir=pe(q,je,_t.value,Me);if(ir===null){je===null&&(je=en);break}t&&je&&ir.alternate===null&&i(q,je),B=p(ir,B,Ze),We===null?Be=ir:We.sibling=ir,We=ir,je=en}if(_t.done)return o(q,je),Dt&&Mr(q,Ze),Be;if(je===null){for(;!_t.done;Ze++,_t=Q.next())_t=xe(q,_t.value,Me),_t!==null&&(B=p(_t,B,Ze),We===null?Be=_t:We.sibling=_t,We=_t);return Dt&&Mr(q,Ze),Be}for(je=l(q,je);!_t.done;Ze++,_t=Q.next())_t=Pe(je,q,Ze,_t.value,Me),_t!==null&&(t&&_t.alternate!==null&&je.delete(_t.key===null?Ze:_t.key),B=p(_t,B,Ze),We===null?Be=_t:We.sibling=_t,We=_t);return t&&je.forEach(function(kv){return i(q,kv)}),Dt&&Mr(q,Ze),Be}function zt(q,B,Q,Me){if(typeof Q=="object"&&Q!==null&&Q.type===U&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case V:e:{for(var Be=Q.key,We=B;We!==null;){if(We.key===Be){if(Be=Q.type,Be===U){if(We.tag===7){o(q,We.sibling),B=d(We,Q.props.children),B.return=q,q=B;break e}}else if(We.elementType===Be||typeof Be=="object"&&Be!==null&&Be.$$typeof===ve&&vf(Be)===We.type){o(q,We.sibling),B=d(We,Q.props),B.ref=uo(q,We,Q),B.return=q,q=B;break e}o(q,We);break}else i(q,We);We=We.sibling}Q.type===U?(B=Pr(Q.props.children,q.mode,Me,Q.key),B.return=q,q=B):(Me=Da(Q.type,Q.key,Q.props,null,q.mode,Me),Me.ref=uo(q,B,Q),Me.return=q,q=Me)}return M(q);case I:e:{for(We=Q.key;B!==null;){if(B.key===We)if(B.tag===4&&B.stateNode.containerInfo===Q.containerInfo&&B.stateNode.implementation===Q.implementation){o(q,B.sibling),B=d(B,Q.children||[]),B.return=q,q=B;break e}else{o(q,B);break}else i(q,B);B=B.sibling}B=su(Q,q.mode,Me),B.return=q,q=B}return M(q);case ve:return We=Q._init,zt(q,B,We(Q._payload),Me)}if(C(Q))return Ie(q,B,Q,Me);if(se(Q))return Oe(q,B,Q,Me);ca(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,B!==null&&B.tag===6?(o(q,B.sibling),B=d(B,Q),B.return=q,q=B):(o(q,B),B=ru(Q,q.mode,Me),B.return=q,q=B),M(q)):o(q,B)}return zt}var os=_f(!0),xf=_f(!1),ua=Xi(null),da=null,as=null,pc=null;function mc(){pc=as=da=null}function gc(t){var i=ua.current;Pt(ua),t._currentValue=i}function vc(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ls(t,i){da=t,pc=as=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Mn=!0),t.firstContext=null)}function Bn(t){var i=t._currentValue;if(pc!==t)if(t={context:t,memoizedValue:i,next:null},as===null){if(da===null)throw Error(n(308));as=t,da.dependencies={lanes:0,firstContext:t}}else as=as.next=t;return i}var Er=null;function _c(t){Er===null?Er=[t]:Er.push(t)}function yf(t,i,o,l){var d=i.interleaved;return d===null?(o.next=o,_c(i)):(o.next=d.next,d.next=o),i.interleaved=o,Ei(t,l)}function Ei(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var $i=!1;function xc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Ki(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(gt&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,Ei(t,o)}return d=l.interleaved,d===null?(i.next=i,_c(l)):(i.next=d.next,d.next=i),l.interleaved=i,Ei(t,o)}function fa(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Dl(t,o)}}function Mf(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=M:p=p.next=M,o=o.next}while(o!==null);p===null?d=p=i:p=p.next=i}else d=p=i;o={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function ha(t,i,o,l){var d=t.updateQueue;$i=!1;var p=d.firstBaseUpdate,M=d.lastBaseUpdate,D=d.shared.pending;if(D!==null){d.shared.pending=null;var k=D,te=k.next;k.next=null,M===null?p=te:M.next=te,M=k;var me=t.alternate;me!==null&&(me=me.updateQueue,D=me.lastBaseUpdate,D!==M&&(D===null?me.firstBaseUpdate=te:D.next=te,me.lastBaseUpdate=k))}if(p!==null){var xe=d.baseState;M=0,me=te=k=null,D=p;do{var pe=D.lane,Pe=D.eventTime;if((l&pe)===pe){me!==null&&(me=me.next={eventTime:Pe,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Ie=t,Oe=D;switch(pe=i,Pe=o,Oe.tag){case 1:if(Ie=Oe.payload,typeof Ie=="function"){xe=Ie.call(Pe,xe,pe);break e}xe=Ie;break e;case 3:Ie.flags=Ie.flags&-65537|128;case 0:if(Ie=Oe.payload,pe=typeof Ie=="function"?Ie.call(Pe,xe,pe):Ie,pe==null)break e;xe=Z({},xe,pe);break e;case 2:$i=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,pe=d.effects,pe===null?d.effects=[D]:pe.push(D))}else Pe={eventTime:Pe,lane:pe,tag:D.tag,payload:D.payload,callback:D.callback,next:null},me===null?(te=me=Pe,k=xe):me=me.next=Pe,M|=pe;if(D=D.next,D===null){if(D=d.shared.pending,D===null)break;pe=D,D=pe.next,pe.next=null,d.lastBaseUpdate=pe,d.shared.pending=null}}while(!0);if(me===null&&(k=xe),d.baseState=k,d.firstBaseUpdate=te,d.lastBaseUpdate=me,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Ar|=M,t.lanes=M,t.memoizedState=xe}}function Ef(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],d=l.callback;if(d!==null){if(l.callback=null,l=o,typeof d!="function")throw Error(n(191,d));d.call(l)}}}var fo={},li=Xi(fo),ho=Xi(fo),po=Xi(fo);function wr(t){if(t===fo)throw Error(n(174));return t}function yc(t,i){switch(Tt(po,i),Tt(ho,t),Tt(li,fo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Te(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Te(i,t)}Pt(li),Tt(li,i)}function cs(){Pt(li),Pt(ho),Pt(po)}function wf(t){wr(po.current);var i=wr(li.current),o=Te(i,t.type);i!==o&&(Tt(ho,t),Tt(li,o))}function Sc(t){ho.current===t&&(Pt(li),Pt(ho))}var Ut=Xi(0);function pa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Mc=[];function Ec(){for(var t=0;t<Mc.length;t++)Mc[t]._workInProgressVersionPrimary=null;Mc.length=0}var ma=P.ReactCurrentDispatcher,wc=P.ReactCurrentBatchConfig,Tr=0,It=null,Xt=null,Zt=null,ga=!1,mo=!1,go=0,ov=0;function un(){throw Error(n(321))}function Tc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Kn(t[o],i[o]))return!1;return!0}function Ac(t,i,o,l,d,p){if(Tr=p,It=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ma.current=t===null||t.memoizedState===null?uv:dv,t=o(l,d),mo){p=0;do{if(mo=!1,go=0,25<=p)throw Error(n(301));p+=1,Zt=Xt=null,i.updateQueue=null,ma.current=fv,t=o(l,d)}while(mo)}if(ma.current=xa,i=Xt!==null&&Xt.next!==null,Tr=0,Zt=Xt=It=null,ga=!1,i)throw Error(n(300));return t}function Cc(){var t=go!==0;return go=0,t}function ci(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?It.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function Hn(){if(Xt===null){var t=It.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var i=Zt===null?It.memoizedState:Zt.next;if(i!==null)Zt=i,Xt=t;else{if(t===null)throw Error(n(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},Zt===null?It.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function vo(t,i){return typeof i=="function"?i(t):i}function Rc(t){var i=Hn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Xt,d=l.baseQueue,p=o.pending;if(p!==null){if(d!==null){var M=d.next;d.next=p.next,p.next=M}l.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,l=l.baseState;var D=M=null,k=null,te=p;do{var me=te.lane;if((Tr&me)===me)k!==null&&(k=k.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),l=te.hasEagerState?te.eagerState:t(l,te.action);else{var xe={lane:me,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};k===null?(D=k=xe,M=l):k=k.next=xe,It.lanes|=me,Ar|=me}te=te.next}while(te!==null&&te!==p);k===null?M=l:k.next=D,Kn(l,i.memoizedState)||(Mn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=k,o.lastRenderedState=l}if(t=o.interleaved,t!==null){d=t;do p=d.lane,It.lanes|=p,Ar|=p,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function bc(t){var i=Hn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,d=o.pending,p=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do p=t(p,M.action),M=M.next;while(M!==d);Kn(p,i.memoizedState)||(Mn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,l]}function Tf(){}function Af(t,i){var o=It,l=Hn(),d=i(),p=!Kn(l.memoizedState,d);if(p&&(l.memoizedState=d,Mn=!0),l=l.queue,Pc(bf.bind(null,o,l,t),[t]),l.getSnapshot!==i||p||Zt!==null&&Zt.memoizedState.tag&1){if(o.flags|=2048,_o(9,Rf.bind(null,o,l,d,i),void 0,null),Jt===null)throw Error(n(349));(Tr&30)!==0||Cf(o,i,d)}return d}function Cf(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=It.updateQueue,i===null?(i={lastEffect:null,stores:null},It.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Rf(t,i,o,l){i.value=o,i.getSnapshot=l,Pf(i)&&Lf(t)}function bf(t,i,o){return o(function(){Pf(i)&&Lf(t)})}function Pf(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Kn(t,o)}catch{return!0}}function Lf(t){var i=Ei(t,1);i!==null&&ti(i,t,1,-1)}function Nf(t){var i=ci();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:t},i.queue=t,t=t.dispatch=cv.bind(null,It,t),[i.memoizedState,t]}function _o(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=It.updateQueue,i===null?(i={lastEffect:null,stores:null},It.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function Df(){return Hn().memoizedState}function va(t,i,o,l){var d=ci();It.flags|=t,d.memoizedState=_o(1|i,o,void 0,l===void 0?null:l)}function _a(t,i,o,l){var d=Hn();l=l===void 0?null:l;var p=void 0;if(Xt!==null){var M=Xt.memoizedState;if(p=M.destroy,l!==null&&Tc(l,M.deps)){d.memoizedState=_o(i,o,p,l);return}}It.flags|=t,d.memoizedState=_o(1|i,o,p,l)}function Uf(t,i){return va(8390656,8,t,i)}function Pc(t,i){return _a(2048,8,t,i)}function If(t,i){return _a(4,2,t,i)}function Ff(t,i){return _a(4,4,t,i)}function Of(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function kf(t,i,o){return o=o!=null?o.concat([t]):null,_a(4,4,Of.bind(null,i,t),o)}function Lc(){}function zf(t,i){var o=Hn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Tc(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Bf(t,i){var o=Hn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Tc(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Hf(t,i,o){return(Tr&21)===0?(t.baseState&&(t.baseState=!1,Mn=!0),t.memoizedState=o):(Kn(o,i)||(o=gd(),It.lanes|=o,Ar|=o,t.baseState=!0),i)}function av(t,i){var o=St;St=o!==0&&4>o?o:4,t(!0);var l=wc.transition;wc.transition={};try{t(!1),i()}finally{St=o,wc.transition=l}}function Vf(){return Hn().memoizedState}function lv(t,i,o){var l=er(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Gf(t))Wf(i,o);else if(o=yf(t,i,o,l),o!==null){var d=vn();ti(o,t,l,d),jf(o,i,l)}}function cv(t,i,o){var l=er(t),d={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Gf(t))Wf(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,D=p(M,o);if(d.hasEagerState=!0,d.eagerState=D,Kn(D,M)){var k=i.interleaved;k===null?(d.next=d,_c(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}o=yf(t,i,d,l),o!==null&&(d=vn(),ti(o,t,l,d),jf(o,i,l))}}function Gf(t){var i=t.alternate;return t===It||i!==null&&i===It}function Wf(t,i){mo=ga=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function jf(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Dl(t,o)}}var xa={readContext:Bn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},uv={readContext:Bn,useCallback:function(t,i){return ci().memoizedState=[t,i===void 0?null:i],t},useContext:Bn,useEffect:Uf,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,va(4194308,4,Of.bind(null,i,t),o)},useLayoutEffect:function(t,i){return va(4194308,4,t,i)},useInsertionEffect:function(t,i){return va(4,2,t,i)},useMemo:function(t,i){var o=ci();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=ci();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=lv.bind(null,It,t),[l.memoizedState,t]},useRef:function(t){var i=ci();return t={current:t},i.memoizedState=t},useState:Nf,useDebugValue:Lc,useDeferredValue:function(t){return ci().memoizedState=t},useTransition:function(){var t=Nf(!1),i=t[0];return t=av.bind(null,t[1]),ci().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=It,d=ci();if(Dt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Jt===null)throw Error(n(349));(Tr&30)!==0||Cf(l,i,o)}d.memoizedState=o;var p={value:o,getSnapshot:i};return d.queue=p,Uf(bf.bind(null,l,p,t),[t]),l.flags|=2048,_o(9,Rf.bind(null,l,p,o,i),void 0,null),o},useId:function(){var t=ci(),i=Jt.identifierPrefix;if(Dt){var o=Mi,l=Si;o=(l&~(1<<32-jt(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=go++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=ov++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},dv={readContext:Bn,useCallback:zf,useContext:Bn,useEffect:Pc,useImperativeHandle:kf,useInsertionEffect:If,useLayoutEffect:Ff,useMemo:Bf,useReducer:Rc,useRef:Df,useState:function(){return Rc(vo)},useDebugValue:Lc,useDeferredValue:function(t){var i=Hn();return Hf(i,Xt.memoizedState,t)},useTransition:function(){var t=Rc(vo)[0],i=Hn().memoizedState;return[t,i]},useMutableSource:Tf,useSyncExternalStore:Af,useId:Vf,unstable_isNewReconciler:!1},fv={readContext:Bn,useCallback:zf,useContext:Bn,useEffect:Pc,useImperativeHandle:kf,useInsertionEffect:If,useLayoutEffect:Ff,useMemo:Bf,useReducer:bc,useRef:Df,useState:function(){return bc(vo)},useDebugValue:Lc,useDeferredValue:function(t){var i=Hn();return Xt===null?i.memoizedState=t:Hf(i,Xt.memoizedState,t)},useTransition:function(){var t=bc(vo)[0],i=Hn().memoizedState;return[t,i]},useMutableSource:Tf,useSyncExternalStore:Af,useId:Vf,unstable_isNewReconciler:!1};function Zn(t,i){if(t&&t.defaultProps){i=Z({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Nc(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:Z({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var ya={isMounted:function(t){return(t=t._reactInternals)?b(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=vn(),d=er(t),p=wi(l,d);p.payload=i,o!=null&&(p.callback=o),i=Ki(t,p,d),i!==null&&(ti(i,t,d,l),fa(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=vn(),d=er(t),p=wi(l,d);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=Ki(t,p,d),i!==null&&(ti(i,t,d,l),fa(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=vn(),l=er(t),d=wi(o,l);d.tag=2,i!=null&&(d.callback=i),i=Ki(t,d,l),i!==null&&(ti(i,t,l,o),fa(i,t,l))}};function Xf(t,i,o,l,d,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):i.prototype&&i.prototype.isPureReactComponent?!io(o,l)||!io(d,p):!0}function qf(t,i,o){var l=!1,d=qi,p=i.contextType;return typeof p=="object"&&p!==null?p=Bn(p):(d=Sn(i)?yr:cn.current,l=i.contextTypes,p=(l=l!=null)?ns(t,d):qi),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ya,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),i}function Yf(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&ya.enqueueReplaceState(i,i.state,null)}function Dc(t,i,o,l){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},xc(t);var p=i.contextType;typeof p=="object"&&p!==null?d.context=Bn(p):(p=Sn(i)?yr:cn.current,d.context=ns(t,p)),d.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Nc(t,i,p,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ya.enqueueReplaceState(d,d.state,null),ha(t,o,d,l),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function us(t,i){try{var o="",l=i;do o+=ue(l),l=l.return;while(l);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:d,digest:null}}function Uc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Ic(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var hv=typeof WeakMap=="function"?WeakMap:Map;function $f(t,i,o){o=wi(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Ca||(Ca=!0,Kc=l),Ic(t,i)},o}function Kf(t,i,o){o=wi(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=i.value;o.payload=function(){return l(d)},o.callback=function(){Ic(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Ic(t,i),typeof l!="function"&&(Zi===null?Zi=new Set([this]):Zi.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Qf(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new hv;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(o)||(d.add(o),t=Cv.bind(null,t,i,o),i.then(t,t))}function Zf(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Jf(t,i,o,l,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=wi(-1,1),i.tag=2,Ki(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var pv=P.ReactCurrentOwner,Mn=!1;function gn(t,i,o,l){i.child=t===null?xf(i,null,o,l):os(i,t.child,o,l)}function eh(t,i,o,l,d){o=o.render;var p=i.ref;return ls(i,d),l=Ac(t,i,o,l,p,d),o=Cc(),t!==null&&!Mn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ti(t,i,d)):(Dt&&o&&cc(i),i.flags|=1,gn(t,i,l,d),i.child)}function th(t,i,o,l,d){if(t===null){var p=o.type;return typeof p=="function"&&!iu(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,nh(t,i,p,l,d)):(t=Da(o.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&d)===0){var M=p.memoizedProps;if(o=o.compare,o=o!==null?o:io,o(M,l)&&t.ref===i.ref)return Ti(t,i,d)}return i.flags|=1,t=nr(p,l),t.ref=i.ref,t.return=i,i.child=t}function nh(t,i,o,l,d){if(t!==null){var p=t.memoizedProps;if(io(p,l)&&t.ref===i.ref)if(Mn=!1,i.pendingProps=l=p,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Mn=!0);else return i.lanes=t.lanes,Ti(t,i,d)}return Fc(t,i,o,l,d)}function ih(t,i,o){var l=i.pendingProps,d=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Tt(fs,In),In|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Tt(fs,In),In|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:o,Tt(fs,In),In|=l}else p!==null?(l=p.baseLanes|o,i.memoizedState=null):l=o,Tt(fs,In),In|=l;return gn(t,i,d,o),i.child}function rh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Fc(t,i,o,l,d){var p=Sn(o)?yr:cn.current;return p=ns(i,p),ls(i,d),o=Ac(t,i,o,l,p,d),l=Cc(),t!==null&&!Mn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ti(t,i,d)):(Dt&&l&&cc(i),i.flags|=1,gn(t,i,o,d),i.child)}function sh(t,i,o,l,d){if(Sn(o)){var p=!0;ra(i)}else p=!1;if(ls(i,d),i.stateNode===null)Ma(t,i),qf(i,o,l),Dc(i,o,l,d),l=!0;else if(t===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var k=M.context,te=o.contextType;typeof te=="object"&&te!==null?te=Bn(te):(te=Sn(o)?yr:cn.current,te=ns(i,te));var me=o.getDerivedStateFromProps,xe=typeof me=="function"||typeof M.getSnapshotBeforeUpdate=="function";xe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==l||k!==te)&&Yf(i,M,l,te),$i=!1;var pe=i.memoizedState;M.state=pe,ha(i,l,M,d),k=i.memoizedState,D!==l||pe!==k||yn.current||$i?(typeof me=="function"&&(Nc(i,o,me,l),k=i.memoizedState),(D=$i||Xf(i,o,D,l,pe,k,te))?(xe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=k),M.props=l,M.state=k,M.context=te,l=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,Sf(t,i),D=i.memoizedProps,te=i.type===i.elementType?D:Zn(i.type,D),M.props=te,xe=i.pendingProps,pe=M.context,k=o.contextType,typeof k=="object"&&k!==null?k=Bn(k):(k=Sn(o)?yr:cn.current,k=ns(i,k));var Pe=o.getDerivedStateFromProps;(me=typeof Pe=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==xe||pe!==k)&&Yf(i,M,l,k),$i=!1,pe=i.memoizedState,M.state=pe,ha(i,l,M,d);var Ie=i.memoizedState;D!==xe||pe!==Ie||yn.current||$i?(typeof Pe=="function"&&(Nc(i,o,Pe,l),Ie=i.memoizedState),(te=$i||Xf(i,o,te,l,pe,Ie,k)||!1)?(me||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Ie,k),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Ie,k)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ie),M.props=l,M.state=Ie,M.context=k,l=te):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),l=!1)}return Oc(t,i,o,l,p,d)}function Oc(t,i,o,l,d,p){rh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return d&&uf(i,o,!1),Ti(t,i,p);l=i.stateNode,pv.current=i;var D=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=os(i,t.child,null,p),i.child=os(i,null,D,p)):gn(t,i,D,p),i.memoizedState=l.state,d&&uf(i,o,!0),i.child}function oh(t){var i=t.stateNode;i.pendingContext?lf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&lf(t,i.context,!1),yc(t,i.containerInfo)}function ah(t,i,o,l,d){return ss(),hc(d),i.flags|=256,gn(t,i,o,l),i.child}var kc={dehydrated:null,treeContext:null,retryLane:0};function zc(t){return{baseLanes:t,cachePool:null,transitions:null}}function lh(t,i,o){var l=i.pendingProps,d=Ut.current,p=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=t!==null&&t.memoizedState===null?!1:(d&2)!==0),D?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Tt(Ut,d&1),t===null)return fc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,p?(l=i.mode,p=i.child,M={mode:"hidden",children:M},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=Ua(M,l,0,null),t=Pr(t,l,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=zc(o),i.memoizedState=kc,t):Bc(i,M));if(d=t.memoizedState,d!==null&&(D=d.dehydrated,D!==null))return mv(t,i,M,l,D,d,o);if(p){p=l.fallback,M=i.mode,d=t.child,D=d.sibling;var k={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==d?(l=i.child,l.childLanes=0,l.pendingProps=k,i.deletions=null):(l=nr(d,k),l.subtreeFlags=d.subtreeFlags&14680064),D!==null?p=nr(D,p):(p=Pr(p,M,o,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,M=t.child.memoizedState,M=M===null?zc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~o,i.memoizedState=kc,l}return p=t.child,t=p.sibling,l=nr(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Bc(t,i){return i=Ua({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Sa(t,i,o,l){return l!==null&&hc(l),os(i,t.child,null,o),t=Bc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function mv(t,i,o,l,d,p,M){if(o)return i.flags&256?(i.flags&=-257,l=Uc(Error(n(422))),Sa(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,d=i.mode,l=Ua({mode:"visible",children:l.children},d,0,null),p=Pr(p,d,M,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&os(i,t.child,null,M),i.child.memoizedState=zc(M),i.memoizedState=kc,p);if((i.mode&1)===0)return Sa(t,i,M,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var D=l.dgst;return l=D,p=Error(n(419)),l=Uc(p,l,void 0),Sa(t,i,M,l)}if(D=(M&t.childLanes)!==0,Mn||D){if(l=Jt,l!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|M))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Ei(t,d),ti(l,t,d,-1))}return nu(),l=Uc(Error(n(421))),Sa(t,i,M,l)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=Rv.bind(null,t),d._reactRetry=i,null):(t=p.treeContext,Un=ji(d.nextSibling),Dn=i,Dt=!0,Qn=null,t!==null&&(kn[zn++]=Si,kn[zn++]=Mi,kn[zn++]=Sr,Si=t.id,Mi=t.overflow,Sr=i),i=Bc(i,l.children),i.flags|=4096,i)}function ch(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),vc(t.return,i,o)}function Hc(t,i,o,l,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=o,p.tailMode=d)}function uh(t,i,o){var l=i.pendingProps,d=l.revealOrder,p=l.tail;if(gn(t,i,l.children,o),l=Ut.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ch(t,o,i);else if(t.tag===19)ch(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Tt(Ut,l),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&pa(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Hc(i,!1,d,o,p);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&pa(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}Hc(i,!0,o,null,p);break;case"together":Hc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ma(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ti(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Ar|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=nr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=nr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function gv(t,i,o){switch(i.tag){case 3:oh(i),ss();break;case 5:wf(i);break;case 1:Sn(i.type)&&ra(i);break;case 4:yc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,d=i.memoizedProps.value;Tt(ua,l._currentValue),l._currentValue=d;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Tt(Ut,Ut.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?lh(t,i,o):(Tt(Ut,Ut.current&1),t=Ti(t,i,o),t!==null?t.sibling:null);Tt(Ut,Ut.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return uh(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Tt(Ut,Ut.current),l)break;return null;case 22:case 23:return i.lanes=0,ih(t,i,o)}return Ti(t,i,o)}var dh,Vc,fh,hh;dh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Vc=function(){},fh=function(t,i,o,l){var d=t.memoizedProps;if(d!==l){t=i.stateNode,wr(li.current);var p=null;switch(o){case"input":d=qe(t,d),l=qe(t,l),p=[];break;case"select":d=Z({},d,{value:void 0}),l=Z({},l,{value:void 0}),p=[];break;case"textarea":d=de(t,d),l=de(t,l),p=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ta)}Ct(o,l);var M;o=null;for(te in d)if(!l.hasOwnProperty(te)&&d.hasOwnProperty(te)&&d[te]!=null)if(te==="style"){var D=d[te];for(M in D)D.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?p||(p=[]):(p=p||[]).push(te,null));for(te in l){var k=l[te];if(D=d?.[te],l.hasOwnProperty(te)&&k!==D&&(k!=null||D!=null))if(te==="style")if(D){for(M in D)!D.hasOwnProperty(M)||k&&k.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in k)k.hasOwnProperty(M)&&D[M]!==k[M]&&(o||(o={}),o[M]=k[M])}else o||(p||(p=[]),p.push(te,o)),o=k;else te==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,D=D?D.__html:void 0,k!=null&&D!==k&&(p=p||[]).push(te,k)):te==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(te,""+k):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(k!=null&&te==="onScroll"&&bt("scroll",t),p||D===k||(p=[])):(p=p||[]).push(te,k))}o&&(p=p||[]).push("style",o);var te=p;(i.updateQueue=te)&&(i.flags|=4)}},hh=function(t,i,o,l){o!==l&&(i.flags|=4)};function xo(t,i){if(!Dt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function vv(t,i,o){var l=i.pendingProps;switch(uc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return Sn(i.type)&&ia(),dn(i),null;case 3:return l=i.stateNode,cs(),Pt(yn),Pt(cn),Ec(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(la(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Qn!==null&&(Jc(Qn),Qn=null))),Vc(t,i),dn(i),null;case 5:Sc(i);var d=wr(po.current);if(o=i.type,t!==null&&i.stateNode!=null)fh(t,i,o,l,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return dn(i),null}if(t=wr(li.current),la(i)){l=i.stateNode,o=i.type;var p=i.memoizedProps;switch(l[ai]=i,l[lo]=p,t=(i.mode&1)!==0,o){case"dialog":bt("cancel",l),bt("close",l);break;case"iframe":case"object":case"embed":bt("load",l);break;case"video":case"audio":for(d=0;d<so.length;d++)bt(so[d],l);break;case"source":bt("error",l);break;case"img":case"image":case"link":bt("error",l),bt("load",l);break;case"details":bt("toggle",l);break;case"input":ut(l,p),bt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},bt("invalid",l);break;case"textarea":_e(l,p),bt("invalid",l)}Ct(o,p),d=null;for(var M in p)if(p.hasOwnProperty(M)){var D=p[M];M==="children"?typeof D=="string"?l.textContent!==D&&(p.suppressHydrationWarning!==!0&&ea(l.textContent,D,t),d=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(p.suppressHydrationWarning!==!0&&ea(l.textContent,D,t),d=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&bt("scroll",l)}switch(o){case"input":yt(l),At(l,p,!0);break;case"textarea":yt(l),Ge(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=ta)}l=d,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Re(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[ai]=i,t[lo]=l,dh(t,i,!1,!1),i.stateNode=t;e:{switch(M=tt(o,l),o){case"dialog":bt("cancel",t),bt("close",t),d=l;break;case"iframe":case"object":case"embed":bt("load",t),d=l;break;case"video":case"audio":for(d=0;d<so.length;d++)bt(so[d],t);d=l;break;case"source":bt("error",t),d=l;break;case"img":case"image":case"link":bt("error",t),bt("load",t),d=l;break;case"details":bt("toggle",t),d=l;break;case"input":ut(t,l),d=qe(t,l),bt("invalid",t);break;case"option":d=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},d=Z({},l,{value:void 0}),bt("invalid",t);break;case"textarea":_e(t,l),d=de(t,l),bt("invalid",t);break;default:d=l}Ct(o,d),D=d;for(p in D)if(D.hasOwnProperty(p)){var k=D[p];p==="style"?nt(t,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Ee(t,k)):p==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&Ve(t,k):typeof k=="number"&&Ve(t,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?k!=null&&p==="onScroll"&&bt("scroll",t):k!=null&&E(t,p,k,M))}switch(o){case"input":yt(t),At(t,l,!1);break;case"textarea":yt(t),Ge(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ue(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?re(t,!!l.multiple,p,!1):l.defaultValue!=null&&re(t,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=ta)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(t&&i.stateNode!=null)hh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=wr(po.current),wr(li.current),la(i)){if(l=i.stateNode,o=i.memoizedProps,l[ai]=i,(p=l.nodeValue!==o)&&(t=Dn,t!==null))switch(t.tag){case 3:ea(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ea(l.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[ai]=i,i.stateNode=l}return dn(i),null;case 13:if(Pt(Ut),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Dt&&Un!==null&&(i.mode&1)!==0&&(i.flags&128)===0)gf(),ss(),i.flags|=98560,p=!1;else if(p=la(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[ai]=i}else ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),p=!1}else Qn!==null&&(Jc(Qn),Qn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ut.current&1)!==0?qt===0&&(qt=3):nu())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return cs(),Vc(t,i),t===null&&oo(i.stateNode.containerInfo),dn(i),null;case 10:return gc(i.type._context),dn(i),null;case 17:return Sn(i.type)&&ia(),dn(i),null;case 19:if(Pt(Ut),p=i.memoizedState,p===null)return dn(i),null;if(l=(i.flags&128)!==0,M=p.rendering,M===null)if(l)xo(p,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=pa(t),M!==null){for(i.flags|=128,xo(p,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)p=o,t=l,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Tt(Ut,Ut.current&1|2),i.child}t=t.sibling}p.tail!==null&&Fe()>hs&&(i.flags|=128,l=!0,xo(p,!1),i.lanes=4194304)}else{if(!l)if(t=pa(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),xo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Dt)return dn(i),null}else 2*Fe()-p.renderingStartTime>hs&&o!==1073741824&&(i.flags|=128,l=!0,xo(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(o=p.last,o!==null?o.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Fe(),i.sibling=null,o=Ut.current,Tt(Ut,l?o&1|2:o&1),i):(dn(i),null);case 22:case 23:return tu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(In&1073741824)!==0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function _v(t,i){switch(uc(i),i.tag){case 1:return Sn(i.type)&&ia(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return cs(),Pt(yn),Pt(cn),Ec(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Sc(i),null;case 13:if(Pt(Ut),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ss()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Pt(Ut),null;case 4:return cs(),null;case 10:return gc(i.type._context),null;case 22:case 23:return tu(),null;case 24:return null;default:return null}}var Ea=!1,fn=!1,xv=typeof WeakSet=="function"?WeakSet:Set,De=null;function ds(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Ft(t,i,l)}else o.current=null}function Gc(t,i,o){try{o()}catch(l){Ft(t,i,l)}}var ph=!1;function yv(t,i){if(tc=Go,t=jd(),ql(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var d=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var M=0,D=-1,k=-1,te=0,me=0,xe=t,pe=null;t:for(;;){for(var Pe;xe!==o||d!==0&&xe.nodeType!==3||(D=M+d),xe!==p||l!==0&&xe.nodeType!==3||(k=M+l),xe.nodeType===3&&(M+=xe.nodeValue.length),(Pe=xe.firstChild)!==null;)pe=xe,xe=Pe;for(;;){if(xe===t)break t;if(pe===o&&++te===d&&(D=M),pe===p&&++me===l&&(k=M),(Pe=xe.nextSibling)!==null)break;xe=pe,pe=xe.parentNode}xe=Pe}o=D===-1||k===-1?null:{start:D,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(nc={focusedElem:t,selectionRange:o},Go=!1,De=i;De!==null;)if(i=De,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,De=t;else for(;De!==null;){i=De;try{var Ie=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ie!==null){var Oe=Ie.memoizedProps,zt=Ie.memoizedState,q=i.stateNode,B=q.getSnapshotBeforeUpdate(i.elementType===i.type?Oe:Zn(i.type,Oe),zt);q.__reactInternalSnapshotBeforeUpdate=B}break;case 3:var Q=i.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Me){Ft(i,i.return,Me)}if(t=i.sibling,t!==null){t.return=i.return,De=t;break}De=i.return}return Ie=ph,ph=!1,Ie}function yo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&Gc(i,o,p)}d=d.next}while(d!==l)}}function wa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Wc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function mh(t){var i=t.alternate;i!==null&&(t.alternate=null,mh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ai],delete i[lo],delete i[oc],delete i[nv],delete i[iv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gh(t){return t.tag===5||t.tag===3||t.tag===4}function vh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ta));else if(l!==4&&(t=t.child,t!==null))for(jc(t,i,o),t=t.sibling;t!==null;)jc(t,i,o),t=t.sibling}function Xc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Xc(t,i,o),t=t.sibling;t!==null;)Xc(t,i,o),t=t.sibling}var sn=null,Jn=!1;function Qi(t,i,o){for(o=o.child;o!==null;)_h(t,i,o),o=o.sibling}function _h(t,i,o){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(Qe,o)}catch{}switch(o.tag){case 5:fn||ds(o,i);case 6:var l=sn,d=Jn;sn=null,Qi(t,i,o),sn=l,Jn=d,sn!==null&&(Jn?(t=sn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):sn.removeChild(o.stateNode));break;case 18:sn!==null&&(Jn?(t=sn,o=o.stateNode,t.nodeType===8?sc(t.parentNode,o):t.nodeType===1&&sc(t,o),Qs(t)):sc(sn,o.stateNode));break;case 4:l=sn,d=Jn,sn=o.stateNode.containerInfo,Jn=!0,Qi(t,i,o),sn=l,Jn=d;break;case 0:case 11:case 14:case 15:if(!fn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var p=d,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&Gc(o,i,M),d=d.next}while(d!==l)}Qi(t,i,o);break;case 1:if(!fn&&(ds(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(D){Ft(o,i,D)}Qi(t,i,o);break;case 21:Qi(t,i,o);break;case 22:o.mode&1?(fn=(l=fn)||o.memoizedState!==null,Qi(t,i,o),fn=l):Qi(t,i,o);break;default:Qi(t,i,o)}}function xh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new xv),i.forEach(function(l){var d=bv.bind(null,t,l);o.has(l)||(o.add(l),l.then(d,d))})}}function ei(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var d=o[l];try{var p=t,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:sn=D.stateNode,Jn=!1;break e;case 3:sn=D.stateNode.containerInfo,Jn=!0;break e;case 4:sn=D.stateNode.containerInfo,Jn=!0;break e}D=D.return}if(sn===null)throw Error(n(160));_h(p,M,d),sn=null,Jn=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(te){Ft(d,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)yh(i,t),i=i.sibling}function yh(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ei(i,t),ui(t),l&4){try{yo(3,t,t.return),wa(3,t)}catch(Oe){Ft(t,t.return,Oe)}try{yo(5,t,t.return)}catch(Oe){Ft(t,t.return,Oe)}}break;case 1:ei(i,t),ui(t),l&512&&o!==null&&ds(o,o.return);break;case 5:if(ei(i,t),ui(t),l&512&&o!==null&&ds(o,o.return),t.flags&32){var d=t.stateNode;try{Ve(d,"")}catch(Oe){Ft(t,t.return,Oe)}}if(l&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,M=o!==null?o.memoizedProps:p,D=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{D==="input"&&p.type==="radio"&&p.name!=null&&it(d,p),tt(D,M);var te=tt(D,p);for(M=0;M<k.length;M+=2){var me=k[M],xe=k[M+1];me==="style"?nt(d,xe):me==="dangerouslySetInnerHTML"?Ee(d,xe):me==="children"?Ve(d,xe):E(d,me,xe,te)}switch(D){case"input":lt(d,p);break;case"textarea":ye(d,p);break;case"select":var pe=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Pe=p.value;Pe!=null?re(d,!!p.multiple,Pe,!1):pe!==!!p.multiple&&(p.defaultValue!=null?re(d,!!p.multiple,p.defaultValue,!0):re(d,!!p.multiple,p.multiple?[]:"",!1))}d[lo]=p}catch(Oe){Ft(t,t.return,Oe)}}break;case 6:if(ei(i,t),ui(t),l&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(Oe){Ft(t,t.return,Oe)}}break;case 3:if(ei(i,t),ui(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Qs(i.containerInfo)}catch(Oe){Ft(t,t.return,Oe)}break;case 4:ei(i,t),ui(t);break;case 13:ei(i,t),ui(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||($c=Fe())),l&4&&xh(t);break;case 22:if(me=o!==null&&o.memoizedState!==null,t.mode&1?(fn=(te=fn)||me,ei(i,t),fn=te):ei(i,t),ui(t),l&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!me&&(t.mode&1)!==0)for(De=t,me=t.child;me!==null;){for(xe=De=me;De!==null;){switch(pe=De,Pe=pe.child,pe.tag){case 0:case 11:case 14:case 15:yo(4,pe,pe.return);break;case 1:ds(pe,pe.return);var Ie=pe.stateNode;if(typeof Ie.componentWillUnmount=="function"){l=pe,o=pe.return;try{i=l,Ie.props=i.memoizedProps,Ie.state=i.memoizedState,Ie.componentWillUnmount()}catch(Oe){Ft(l,o,Oe)}}break;case 5:ds(pe,pe.return);break;case 22:if(pe.memoizedState!==null){Eh(xe);continue}}Pe!==null?(Pe.return=pe,De=Pe):Eh(xe)}me=me.sibling}e:for(me=null,xe=t;;){if(xe.tag===5){if(me===null){me=xe;try{d=xe.stateNode,te?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(D=xe.stateNode,k=xe.memoizedProps.style,M=k!=null&&k.hasOwnProperty("display")?k.display:null,D.style.display=Ne("display",M))}catch(Oe){Ft(t,t.return,Oe)}}}else if(xe.tag===6){if(me===null)try{xe.stateNode.nodeValue=te?"":xe.memoizedProps}catch(Oe){Ft(t,t.return,Oe)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;me===xe&&(me=null),xe=xe.return}me===xe&&(me=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ei(i,t),ui(t),l&4&&xh(t);break;case 21:break;default:ei(i,t),ui(t)}}function ui(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(gh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(Ve(d,""),l.flags&=-33);var p=vh(t);Xc(t,p,d);break;case 3:case 4:var M=l.stateNode.containerInfo,D=vh(t);jc(t,D,M);break;default:throw Error(n(161))}}catch(k){Ft(t,t.return,k)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Sv(t,i,o){De=t,Sh(t)}function Sh(t,i,o){for(var l=(t.mode&1)!==0;De!==null;){var d=De,p=d.child;if(d.tag===22&&l){var M=d.memoizedState!==null||Ea;if(!M){var D=d.alternate,k=D!==null&&D.memoizedState!==null||fn;D=Ea;var te=fn;if(Ea=M,(fn=k)&&!te)for(De=d;De!==null;)M=De,k=M.child,M.tag===22&&M.memoizedState!==null?wh(d):k!==null?(k.return=M,De=k):wh(d);for(;p!==null;)De=p,Sh(p),p=p.sibling;De=d,Ea=D,fn=te}Mh(t)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,De=p):Mh(t)}}function Mh(t){for(;De!==null;){var i=De;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:fn||wa(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!fn)if(o===null)l.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:Zn(i.type,o.memoizedProps);l.componentDidUpdate(d,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Ef(i,p,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Ef(i,M,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var me=te.memoizedState;if(me!==null){var xe=me.dehydrated;xe!==null&&Qs(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}fn||i.flags&512&&Wc(i)}catch(pe){Ft(i,i.return,pe)}}if(i===t){De=null;break}if(o=i.sibling,o!==null){o.return=i.return,De=o;break}De=i.return}}function Eh(t){for(;De!==null;){var i=De;if(i===t){De=null;break}var o=i.sibling;if(o!==null){o.return=i.return,De=o;break}De=i.return}}function wh(t){for(;De!==null;){var i=De;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{wa(4,i)}catch(k){Ft(i,o,k)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var d=i.return;try{l.componentDidMount()}catch(k){Ft(i,d,k)}}var p=i.return;try{Wc(i)}catch(k){Ft(i,p,k)}break;case 5:var M=i.return;try{Wc(i)}catch(k){Ft(i,M,k)}}}catch(k){Ft(i,i.return,k)}if(i===t){De=null;break}var D=i.sibling;if(D!==null){D.return=i.return,De=D;break}De=i.return}}var Mv=Math.ceil,Ta=P.ReactCurrentDispatcher,qc=P.ReactCurrentOwner,Vn=P.ReactCurrentBatchConfig,gt=0,Jt=null,Bt=null,on=0,In=0,fs=Xi(0),qt=0,So=null,Ar=0,Aa=0,Yc=0,Mo=null,En=null,$c=0,hs=1/0,Ai=null,Ca=!1,Kc=null,Zi=null,Ra=!1,Ji=null,ba=0,Eo=0,Qc=null,Pa=-1,La=0;function vn(){return(gt&6)!==0?Fe():Pa!==-1?Pa:Pa=Fe()}function er(t){return(t.mode&1)===0?1:(gt&2)!==0&&on!==0?on&-on:sv.transition!==null?(La===0&&(La=gd()),La):(t=St,t!==0||(t=window.event,t=t===void 0?16:Td(t.type)),t)}function ti(t,i,o,l){if(50<Eo)throw Eo=0,Qc=null,Error(n(185));Xs(t,o,l),((gt&2)===0||t!==Jt)&&(t===Jt&&((gt&2)===0&&(Aa|=o),qt===4&&tr(t,on)),wn(t,l),o===1&&gt===0&&(i.mode&1)===0&&(hs=Fe()+500,sa&&Yi()))}function wn(t,i){var o=t.callbackNode;Ll(t,i);var l=rn(t,t===Jt?on:0);if(l===0)o!==null&&He(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&He(o),i===1)t.tag===0?rv(Ah.bind(null,t)):df(Ah.bind(null,t)),ev(function(){(gt&6)===0&&Yi()}),o=null;else{switch(vd(l)){case 1:o=Nt;break;case 4:o=Wt;break;case 16:o=Qt;break;case 536870912:o=mt;break;default:o=Qt}o=Uh(o,Th.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Th(t,i){if(Pa=-1,La=0,(gt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(ps()&&t.callbackNode!==o)return null;var l=rn(t,t===Jt?on:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Na(t,l);else{i=l;var d=gt;gt|=2;var p=Rh();(Jt!==t||on!==i)&&(Ai=null,hs=Fe()+500,Rr(t,i));do try{Tv();break}catch(D){Ch(t,D)}while(!0);mc(),Ta.current=p,gt=d,Bt!==null?i=0:(Jt=null,on=0,i=qt)}if(i!==0){if(i===2&&(d=Xr(t),d!==0&&(l=d,i=Zc(t,d))),i===1)throw o=So,Rr(t,0),tr(t,l),wn(t,Fe()),o;if(i===6)tr(t,l);else{if(d=t.current.alternate,(l&30)===0&&!Ev(d)&&(i=Na(t,l),i===2&&(p=Xr(t),p!==0&&(l=p,i=Zc(t,p))),i===1))throw o=So,Rr(t,0),tr(t,l),wn(t,Fe()),o;switch(t.finishedWork=d,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:br(t,En,Ai);break;case 3:if(tr(t,l),(l&130023424)===l&&(i=$c+500-Fe(),10<i)){if(rn(t,0)!==0)break;if(d=t.suspendedLanes,(d&l)!==l){vn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=rc(br.bind(null,t,En,Ai),i);break}br(t,En,Ai);break;case 4:if(tr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,d=-1;0<l;){var M=31-jt(l);p=1<<M,M=i[M],M>d&&(d=M),l&=~p}if(l=d,l=Fe()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Mv(l/1960))-l,10<l){t.timeoutHandle=rc(br.bind(null,t,En,Ai),l);break}br(t,En,Ai);break;case 5:br(t,En,Ai);break;default:throw Error(n(329))}}}return wn(t,Fe()),t.callbackNode===o?Th.bind(null,t):null}function Zc(t,i){var o=Mo;return t.current.memoizedState.isDehydrated&&(Rr(t,i).flags|=256),t=Na(t,i),t!==2&&(i=En,En=o,i!==null&&Jc(i)),t}function Jc(t){En===null?En=t:En.push.apply(En,t)}function Ev(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var d=o[l],p=d.getSnapshot;d=d.value;try{if(!Kn(p(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function tr(t,i){for(i&=~Yc,i&=~Aa,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-jt(i),l=1<<o;t[o]=-1,i&=~l}}function Ah(t){if((gt&6)!==0)throw Error(n(327));ps();var i=rn(t,0);if((i&1)===0)return wn(t,Fe()),null;var o=Na(t,i);if(t.tag!==0&&o===2){var l=Xr(t);l!==0&&(i=l,o=Zc(t,l))}if(o===1)throw o=So,Rr(t,0),tr(t,i),wn(t,Fe()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,br(t,En,Ai),wn(t,Fe()),null}function eu(t,i){var o=gt;gt|=1;try{return t(i)}finally{gt=o,gt===0&&(hs=Fe()+500,sa&&Yi())}}function Cr(t){Ji!==null&&Ji.tag===0&&(gt&6)===0&&ps();var i=gt;gt|=1;var o=Vn.transition,l=St;try{if(Vn.transition=null,St=1,t)return t()}finally{St=l,Vn.transition=o,gt=i,(gt&6)===0&&Yi()}}function tu(){In=fs.current,Pt(fs)}function Rr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Jg(o)),Bt!==null)for(o=Bt.return;o!==null;){var l=o;switch(uc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ia();break;case 3:cs(),Pt(yn),Pt(cn),Ec();break;case 5:Sc(l);break;case 4:cs();break;case 13:Pt(Ut);break;case 19:Pt(Ut);break;case 10:gc(l.type._context);break;case 22:case 23:tu()}o=o.return}if(Jt=t,Bt=t=nr(t.current,null),on=In=i,qt=0,So=null,Yc=Aa=Ar=0,En=Mo=null,Er!==null){for(i=0;i<Er.length;i++)if(o=Er[i],l=o.interleaved,l!==null){o.interleaved=null;var d=l.next,p=o.pending;if(p!==null){var M=p.next;p.next=d,l.next=M}o.pending=l}Er=null}return t}function Ch(t,i){do{var o=Bt;try{if(mc(),ma.current=xa,ga){for(var l=It.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}ga=!1}if(Tr=0,Zt=Xt=It=null,mo=!1,go=0,qc.current=null,o===null||o.return===null){qt=1,So=i,Bt=null;break}e:{var p=t,M=o.return,D=o,k=i;if(i=on,D.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var te=k,me=D,xe=me.tag;if((me.mode&1)===0&&(xe===0||xe===11||xe===15)){var pe=me.alternate;pe?(me.updateQueue=pe.updateQueue,me.memoizedState=pe.memoizedState,me.lanes=pe.lanes):(me.updateQueue=null,me.memoizedState=null)}var Pe=Zf(M);if(Pe!==null){Pe.flags&=-257,Jf(Pe,M,D,p,i),Pe.mode&1&&Qf(p,te,i),i=Pe,k=te;var Ie=i.updateQueue;if(Ie===null){var Oe=new Set;Oe.add(k),i.updateQueue=Oe}else Ie.add(k);break e}else{if((i&1)===0){Qf(p,te,i),nu();break e}k=Error(n(426))}}else if(Dt&&D.mode&1){var zt=Zf(M);if(zt!==null){(zt.flags&65536)===0&&(zt.flags|=256),Jf(zt,M,D,p,i),hc(us(k,D));break e}}p=k=us(k,D),qt!==4&&(qt=2),Mo===null?Mo=[p]:Mo.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var q=$f(p,k,i);Mf(p,q);break e;case 1:D=k;var B=p.type,Q=p.stateNode;if((p.flags&128)===0&&(typeof B.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(Zi===null||!Zi.has(Q)))){p.flags|=65536,i&=-i,p.lanes|=i;var Me=Kf(p,D,i);Mf(p,Me);break e}}p=p.return}while(p!==null)}Ph(o)}catch(Be){i=Be,Bt===o&&o!==null&&(Bt=o=o.return);continue}break}while(!0)}function Rh(){var t=Ta.current;return Ta.current=xa,t===null?xa:t}function nu(){(qt===0||qt===3||qt===2)&&(qt=4),Jt===null||(Ar&268435455)===0&&(Aa&268435455)===0||tr(Jt,on)}function Na(t,i){var o=gt;gt|=2;var l=Rh();(Jt!==t||on!==i)&&(Ai=null,Rr(t,i));do try{wv();break}catch(d){Ch(t,d)}while(!0);if(mc(),gt=o,Ta.current=l,Bt!==null)throw Error(n(261));return Jt=null,on=0,qt}function wv(){for(;Bt!==null;)bh(Bt)}function Tv(){for(;Bt!==null&&!$e();)bh(Bt)}function bh(t){var i=Dh(t.alternate,t,In);t.memoizedProps=t.pendingProps,i===null?Ph(t):Bt=i,qc.current=null}function Ph(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=vv(o,i,In),o!==null){Bt=o;return}}else{if(o=_v(o,i),o!==null){o.flags&=32767,Bt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qt=6,Bt=null;return}}if(i=i.sibling,i!==null){Bt=i;return}Bt=i=t}while(i!==null);qt===0&&(qt=5)}function br(t,i,o){var l=St,d=Vn.transition;try{Vn.transition=null,St=1,Av(t,i,o,l)}finally{Vn.transition=d,St=l}return null}function Av(t,i,o,l){do ps();while(Ji!==null);if((gt&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(og(t,p),t===Jt&&(Bt=Jt=null,on=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ra||(Ra=!0,Uh(Qt,function(){return ps(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=Vn.transition,Vn.transition=null;var M=St;St=1;var D=gt;gt|=4,qc.current=null,yv(t,o),yh(o,t),Xg(nc),Go=!!tc,nc=tc=null,t.current=o,Sv(o),et(),gt=D,St=M,Vn.transition=p}else t.current=o;if(Ra&&(Ra=!1,Ji=t,ba=d),p=t.pendingLanes,p===0&&(Zi=null),wt(o.stateNode),wn(t,Fe()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],l(d.value,{componentStack:d.stack,digest:d.digest});if(Ca)throw Ca=!1,t=Kc,Kc=null,t;return(ba&1)!==0&&t.tag!==0&&ps(),p=t.pendingLanes,(p&1)!==0?t===Qc?Eo++:(Eo=0,Qc=t):Eo=0,Yi(),null}function ps(){if(Ji!==null){var t=vd(ba),i=Vn.transition,o=St;try{if(Vn.transition=null,St=16>t?16:t,Ji===null)var l=!1;else{if(t=Ji,Ji=null,ba=0,(gt&6)!==0)throw Error(n(331));var d=gt;for(gt|=4,De=t.current;De!==null;){var p=De,M=p.child;if((De.flags&16)!==0){var D=p.deletions;if(D!==null){for(var k=0;k<D.length;k++){var te=D[k];for(De=te;De!==null;){var me=De;switch(me.tag){case 0:case 11:case 15:yo(8,me,p)}var xe=me.child;if(xe!==null)xe.return=me,De=xe;else for(;De!==null;){me=De;var pe=me.sibling,Pe=me.return;if(mh(me),me===te){De=null;break}if(pe!==null){pe.return=Pe,De=pe;break}De=Pe}}}var Ie=p.alternate;if(Ie!==null){var Oe=Ie.child;if(Oe!==null){Ie.child=null;do{var zt=Oe.sibling;Oe.sibling=null,Oe=zt}while(Oe!==null)}}De=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,De=M;else e:for(;De!==null;){if(p=De,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:yo(9,p,p.return)}var q=p.sibling;if(q!==null){q.return=p.return,De=q;break e}De=p.return}}var B=t.current;for(De=B;De!==null;){M=De;var Q=M.child;if((M.subtreeFlags&2064)!==0&&Q!==null)Q.return=M,De=Q;else e:for(M=B;De!==null;){if(D=De,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:wa(9,D)}}catch(Be){Ft(D,D.return,Be)}if(D===M){De=null;break e}var Me=D.sibling;if(Me!==null){Me.return=D.return,De=Me;break e}De=D.return}}if(gt=d,Yi(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(Qe,t)}catch{}l=!0}return l}finally{St=o,Vn.transition=i}}return!1}function Lh(t,i,o){i=us(o,i),i=$f(t,i,1),t=Ki(t,i,1),i=vn(),t!==null&&(Xs(t,1,i),wn(t,i))}function Ft(t,i,o){if(t.tag===3)Lh(t,t,o);else for(;i!==null;){if(i.tag===3){Lh(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Zi===null||!Zi.has(l))){t=us(o,t),t=Kf(i,t,1),i=Ki(i,t,1),t=vn(),i!==null&&(Xs(i,1,t),wn(i,t));break}}i=i.return}}function Cv(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=vn(),t.pingedLanes|=t.suspendedLanes&o,Jt===t&&(on&o)===o&&(qt===4||qt===3&&(on&130023424)===on&&500>Fe()-$c?Rr(t,0):Yc|=o),wn(t,i)}function Nh(t,i){i===0&&((t.mode&1)===0?i=1:(i=Ln,Ln<<=1,(Ln&130023424)===0&&(Ln=4194304)));var o=vn();t=Ei(t,i),t!==null&&(Xs(t,i,o),wn(t,o))}function Rv(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Nh(t,o)}function bv(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Nh(t,o)}var Dh;Dh=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||yn.current)Mn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Mn=!1,gv(t,i,o);Mn=(t.flags&131072)!==0}else Mn=!1,Dt&&(i.flags&1048576)!==0&&ff(i,aa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ma(t,i),t=i.pendingProps;var d=ns(i,cn.current);ls(i,o),d=Ac(null,i,l,t,d,o);var p=Cc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Sn(l)?(p=!0,ra(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,xc(i),d.updater=ya,i.stateNode=d,d._reactInternals=i,Dc(i,l,t,o),i=Oc(null,i,l,!0,p,o)):(i.tag=0,Dt&&p&&cc(i),gn(null,i,d,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Ma(t,i),t=i.pendingProps,d=l._init,l=d(l._payload),i.type=l,d=i.tag=Lv(l),t=Zn(l,t),d){case 0:i=Fc(null,i,l,t,o);break e;case 1:i=sh(null,i,l,t,o);break e;case 11:i=eh(null,i,l,t,o);break e;case 14:i=th(null,i,l,Zn(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:Zn(l,d),Fc(t,i,l,d,o);case 1:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:Zn(l,d),sh(t,i,l,d,o);case 3:e:{if(oh(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,d=p.element,Sf(t,i),ha(i,l,null,o);var M=i.memoizedState;if(l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=us(Error(n(423)),i),i=ah(t,i,l,o,d);break e}else if(l!==d){d=us(Error(n(424)),i),i=ah(t,i,l,o,d);break e}else for(Un=ji(i.stateNode.containerInfo.firstChild),Dn=i,Dt=!0,Qn=null,o=xf(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ss(),l===d){i=Ti(t,i,o);break e}gn(t,i,l,o)}i=i.child}return i;case 5:return wf(i),t===null&&fc(i),l=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,M=d.children,ic(l,d)?M=null:p!==null&&ic(l,p)&&(i.flags|=32),rh(t,i),gn(t,i,M,o),i.child;case 6:return t===null&&fc(i),null;case 13:return lh(t,i,o);case 4:return yc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=os(i,null,l,o):gn(t,i,l,o),i.child;case 11:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:Zn(l,d),eh(t,i,l,d,o);case 7:return gn(t,i,i.pendingProps,o),i.child;case 8:return gn(t,i,i.pendingProps.children,o),i.child;case 12:return gn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,d=i.pendingProps,p=i.memoizedProps,M=d.value,Tt(ua,l._currentValue),l._currentValue=M,p!==null)if(Kn(p.value,M)){if(p.children===d.children&&!yn.current){i=Ti(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var D=p.dependencies;if(D!==null){M=p.child;for(var k=D.firstContext;k!==null;){if(k.context===l){if(p.tag===1){k=wi(-1,o&-o),k.tag=2;var te=p.updateQueue;if(te!==null){te=te.shared;var me=te.pending;me===null?k.next=k:(k.next=me.next,me.next=k),te.pending=k}}p.lanes|=o,k=p.alternate,k!==null&&(k.lanes|=o),vc(p.return,o,i),D.lanes|=o;break}k=k.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(n(341));M.lanes|=o,D=M.alternate,D!==null&&(D.lanes|=o),vc(M,o,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}gn(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,l=i.pendingProps.children,ls(i,o),d=Bn(d),l=l(d),i.flags|=1,gn(t,i,l,o),i.child;case 14:return l=i.type,d=Zn(l,i.pendingProps),d=Zn(l.type,d),th(t,i,l,d,o);case 15:return nh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:Zn(l,d),Ma(t,i),i.tag=1,Sn(l)?(t=!0,ra(i)):t=!1,ls(i,o),qf(i,l,d),Dc(i,l,d,o),Oc(null,i,l,!0,t,o);case 19:return uh(t,i,o);case 22:return ih(t,i,o)}throw Error(n(156,i.tag))};function Uh(t,i){return ke(t,i)}function Pv(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,i,o,l){return new Pv(t,i,o,l)}function iu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Lv(t){if(typeof t=="function")return iu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oe)return 11;if(t===ae)return 14}return 2}function nr(t,i){var o=t.alternate;return o===null?(o=Gn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Da(t,i,o,l,d,p){var M=2;if(l=t,typeof t=="function")iu(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case U:return Pr(o.children,d,p,i);case W:M=8,d|=8;break;case L:return t=Gn(12,o,i,d|2),t.elementType=L,t.lanes=p,t;case H:return t=Gn(13,o,i,d),t.elementType=H,t.lanes=p,t;case le:return t=Gn(19,o,i,d),t.elementType=le,t.lanes=p,t;case fe:return Ua(o,d,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:M=10;break e;case $:M=9;break e;case oe:M=11;break e;case ae:M=14;break e;case ve:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Gn(M,o,i,d),i.elementType=t,i.type=l,i.lanes=p,i}function Pr(t,i,o,l){return t=Gn(7,t,l,i),t.lanes=o,t}function Ua(t,i,o,l){return t=Gn(22,t,l,i),t.elementType=fe,t.lanes=o,t.stateNode={isHidden:!1},t}function ru(t,i,o){return t=Gn(6,t,null,i),t.lanes=o,t}function su(t,i,o){return i=Gn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Nv(t,i,o,l,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nl(0),this.expirationTimes=Nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nl(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ou(t,i,o,l,d,p,M,D,k){return t=new Nv(t,i,o,D,k),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Gn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},xc(p),t}function Dv(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function Ih(t){if(!t)return qi;t=t._reactInternals;e:{if(b(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Sn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Sn(o))return cf(t,o,i)}return i}function Fh(t,i,o,l,d,p,M,D,k){return t=ou(o,l,!0,t,d,p,M,D,k),t.context=Ih(null),o=t.current,l=vn(),d=er(o),p=wi(l,d),p.callback=i??null,Ki(o,p,d),t.current.lanes=d,Xs(t,d,l),wn(t,l),t}function Ia(t,i,o,l){var d=i.current,p=vn(),M=er(d);return o=Ih(o),i.context===null?i.context=o:i.pendingContext=o,i=wi(p,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=Ki(d,i,M),t!==null&&(ti(t,d,M,p),fa(t,d,M)),M}function Fa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Oh(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function au(t,i){Oh(t,i),(t=t.alternate)&&Oh(t,i)}function Uv(){return null}var kh=typeof reportError=="function"?reportError:function(t){console.error(t)};function lu(t){this._internalRoot=t}Oa.prototype.render=lu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ia(t,i,null,null)},Oa.prototype.unmount=lu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Cr(function(){Ia(null,t,null,null)}),i[xi]=null}};function Oa(t){this._internalRoot=t}Oa.prototype.unstable_scheduleHydration=function(t){if(t){var i=yd();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Vi.length&&i!==0&&i<Vi[o].priority;o++);Vi.splice(o,0,t),o===0&&Ed(t)}};function cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ka(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zh(){}function Iv(t,i,o,l,d){if(d){if(typeof l=="function"){var p=l;l=function(){var te=Fa(M);p.call(te)}}var M=Fh(i,l,t,0,null,!1,!1,"",zh);return t._reactRootContainer=M,t[xi]=M.current,oo(t.nodeType===8?t.parentNode:t),Cr(),M}for(;d=t.lastChild;)t.removeChild(d);if(typeof l=="function"){var D=l;l=function(){var te=Fa(k);D.call(te)}}var k=ou(t,0,!1,null,null,!1,!1,"",zh);return t._reactRootContainer=k,t[xi]=k.current,oo(t.nodeType===8?t.parentNode:t),Cr(function(){Ia(i,k,o,l)}),k}function za(t,i,o,l,d){var p=o._reactRootContainer;if(p){var M=p;if(typeof d=="function"){var D=d;d=function(){var k=Fa(M);D.call(k)}}Ia(i,M,t,d)}else M=Iv(o,i,t,d,l);return Fa(M)}_d=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=_i(i.pendingLanes);o!==0&&(Dl(i,o|1),wn(i,Fe()),(gt&6)===0&&(hs=Fe()+500,Yi()))}break;case 13:Cr(function(){var l=Ei(t,1);if(l!==null){var d=vn();ti(l,t,1,d)}}),au(t,1)}},Ul=function(t){if(t.tag===13){var i=Ei(t,134217728);if(i!==null){var o=vn();ti(i,t,134217728,o)}au(t,134217728)}},xd=function(t){if(t.tag===13){var i=er(t),o=Ei(t,i);if(o!==null){var l=vn();ti(o,t,i,l)}au(t,i)}},yd=function(){return St},Sd=function(t,i){var o=St;try{return St=t,i()}finally{St=o}},ce=function(t,i,o){switch(i){case"input":if(lt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var d=na(l);if(!d)throw Error(n(90));Xe(l),lt(l,d)}}}break;case"textarea":ye(t,o);break;case"select":i=o.value,i!=null&&re(t,!!o.multiple,i,!1)}},Gt=eu,vt=Cr;var Fv={usingClientEntryPoint:!1,Events:[co,es,na,Mt,Rt,eu]},wo={findFiberByHostInstance:xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ov={bundleType:wo.bundleType,version:wo.version,rendererPackageName:wo.rendererPackageName,rendererConfig:wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=J(t),t===null?null:t.stateNode},findFiberByHostInstance:wo.findFiberByHostInstance||Uv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ba.isDisabled&&Ba.supportsFiber)try{Qe=Ba.inject(Ov),ln=Ba}catch{}}return Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fv,Tn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cu(i))throw Error(n(200));return Dv(t,i,null,o)},Tn.createRoot=function(t,i){if(!cu(t))throw Error(n(299));var o=!1,l="",d=kh;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=ou(t,1,!1,null,null,o,!1,l,d),t[xi]=i.current,oo(t.nodeType===8?t.parentNode:t),new lu(i)},Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=J(i),t=t===null?null:t.stateNode,t},Tn.flushSync=function(t){return Cr(t)},Tn.hydrate=function(t,i,o){if(!ka(i))throw Error(n(200));return za(null,t,i,!0,o)},Tn.hydrateRoot=function(t,i,o){if(!cu(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,d=!1,p="",M=kh;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Fh(i,null,t,1,o??null,d,!1,p,M),t[xi]=i.current,oo(t),l)for(t=0;t<l.length;t++)o=l[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new Oa(i)},Tn.render=function(t,i,o){if(!ka(i))throw Error(n(200));return za(null,t,i,!1,o)},Tn.unmountComponentAtNode=function(t){if(!ka(t))throw Error(n(40));return t._reactRootContainer?(Cr(function(){za(null,null,t,!1,function(){t._reactRootContainer=null,t[xi]=null})}),!0):!1},Tn.unstable_batchedUpdates=eu,Tn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!ka(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return za(t,i,o,!1,l)},Tn.version="18.3.1-next-f1338f8080-20240426",Tn}var qh;function jv(){if(qh)return fu.exports;qh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),fu.exports=Wv(),fu.exports}var Yh;function Xv(){if(Yh)return Ha;Yh=1;var s=jv();return Ha.createRoot=s.createRoot,Ha.hydrateRoot=s.hydrateRoot,Ha}var qv=Xv();/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),wm=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $v={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=ft.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:c,iconNode:u,...f},h)=>ft.createElement("svg",{ref:h,...$v,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:wm("lucide",a),...f},[...u.map(([m,g])=>ft.createElement(m,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=(s,e)=>{const n=ft.forwardRef(({className:r,...a},c)=>ft.createElement(Kv,{ref:c,iconNode:e,className:wm(`lucide-${Yv(s)}`,r),...a}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13",key:"c6fn6x"}]],Zv=Vt("BatteryFull",Qv);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]],e0=Vt("Brain",Jv);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],n0=Vt("Calendar",t0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],r0=Vt("ChevronDown",i0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],o0=Vt("ChevronUp",s0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],l0=Vt("Clock",a0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],u0=Vt("Cloud",c0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],f0=Vt("CodeXml",d0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],$h=Vt("Code",h0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Va=Vt("ExternalLink",p0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],g0=Vt("Instagram",m0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]],_0=Vt("Laptop",v0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Tm=Vt("Linkedin",x0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],S0=Vt("Mail",y0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],E0=Vt("MapPin",M0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],T0=Vt("Menu",w0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],$u=Vt("Phone",A0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],R0=Vt("Rocket",C0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],pl=Vt("Users",b0);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],L0=Vt("X",P0);function Ga(...s){return s.filter(Boolean).join(" ")}function N0(){const[s,e]=ft.useState(!1),[n,r]=ft.useState(!1),[a,c]=ft.useState("#top"),u=[{label:"About",href:"#about"},{label:"Sessions",href:"#sessions"},{label:"Mentors",href:"#mentors"},{label:"Register",href:"#register"},{label:"Contact",href:"#contact"}];ft.useEffect(()=>{const h=()=>r(window.scrollY>8);return h(),window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[]),ft.useEffect(()=>{const h=()=>c(window.location.hash||"#top");return h(),window.addEventListener("hashchange",h),()=>window.removeEventListener("hashchange",h)},[]);const f=(h,m)=>{h.preventDefault(),e(!1),history.replaceState(null,"",m),document.querySelector(m)?.scrollIntoView({behavior:"smooth",block:"start"}),c(m)};return R.jsxs(R.Fragment,{children:[R.jsx("header",{className:Ga("fixed inset-x-0 top-0 z-50 transition",n?"bg-slate-900/70 backdrop-blur-md":"backdrop-blur supports-[backdrop-filter]:bg-slate-900/20"),children:R.jsx("div",{className:"mx-auto max-w-7xl px-6",children:R.jsxs("div",{className:"flex h-16 items-center justify-between",children:[R.jsx("a",{href:"#top",className:"text-white font-extrabold tracking-tight text-xl",children:"Vidyaarambh"}),R.jsx("nav",{className:"hidden md:flex items-center gap-6",children:u.map(h=>R.jsx("a",{href:h.href,onClick:m=>f(m,h.href),className:Ga("transition",a===h.href?"text-violet-400":"text-slate-300 hover:text-white"),children:h.label},h.href))}),R.jsx("a",{href:"#register",onClick:h=>f(h,"#register"),className:"hidden md:inline-flex items-center rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-white shadow hover:brightness-110",children:"Register"}),R.jsx("button",{className:"md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-200 hover:bg-slate-800/60","aria-label":"Open menu",onClick:()=>e(h=>!h),children:s?R.jsx(L0,{size:22}):R.jsx(T0,{size:22})})]})})}),R.jsx("div",{className:Ga("md:hidden fixed inset-x-0 top-16 z-40 origin-top transform transition",s?"scale-y-100 opacity-100":"scale-y-0 opacity-0 pointer-events-none"),style:{transformOrigin:"top"},children:R.jsx("div",{className:"mx-auto max-w-7xl px-6",children:R.jsx("div",{className:"rounded-2xl border border-slate-800 bg-slate-900/95 shadow-xl",children:R.jsxs("nav",{className:"flex flex-col divide-y divide-slate-800",children:[u.map(h=>R.jsx("a",{href:h.href,onClick:m=>f(m,h.href),className:Ga("px-4 py-3 transition",a===h.href?"text-violet-400":"text-slate-200 hover:bg-slate-800/60"),children:h.label},h.href)),R.jsx("a",{href:"#register",onClick:h=>f(h,"#register"),className:"m-3 inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110",children:"Register"})]})})})})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ad="164",D0=0,Kh=1,U0=2,Am=1,I0=2,Ni=3,pr=0,bn=1,Di=2,Ii=0,Ds=1,Ku=2,Qh=3,Zh=4,F0=5,zr=100,O0=101,k0=102,z0=103,B0=104,H0=200,V0=201,G0=202,W0=203,Qu=204,Zu=205,j0=206,X0=207,q0=208,Y0=209,$0=210,K0=211,Q0=212,Z0=213,J0=214,e_=0,t_=1,n_=2,gl=3,i_=4,r_=5,s_=6,o_=7,Cm=0,a_=1,l_=2,fr=0,c_=1,u_=2,d_=3,f_=4,h_=5,p_=6,m_=7,Rm=300,Fs=301,Os=302,Ju=303,ed=304,El=306,td=1e3,Hr=1001,nd=1002,Xn=1003,g_=1004,Wa=1005,si=1006,mu=1007,Vr=1008,mr=1009,v_=1010,__=1011,bm=1012,Pm=1013,ks=1014,dr=1015,hr=1016,Lm=1017,Nm=1018,Uo=1020,x_=35902,y_=1021,S_=1022,pi=1023,M_=1024,E_=1025,Us=1026,Do=1027,w_=1028,Dm=1029,T_=1030,Um=1031,Im=1033,gu=33776,vu=33777,_u=33778,xu=33779,Jh=35840,ep=35841,tp=35842,np=35843,ip=36196,rp=37492,sp=37496,op=37808,ap=37809,lp=37810,cp=37811,up=37812,dp=37813,fp=37814,hp=37815,pp=37816,mp=37817,gp=37818,vp=37819,_p=37820,xp=37821,yu=36492,yp=36494,Sp=36495,A_=36283,Mp=36284,Ep=36285,wp=36286,C_=3200,R_=3201,Fm=0,b_=1,ur="",di="srgb",gr="srgb-linear",ld="display-p3",wl="display-p3-linear",vl="linear",Lt="srgb",_l="rec709",xl="p3",ms=7680,Tp=519,P_=512,L_=513,N_=514,Om=515,D_=516,U_=517,I_=518,F_=519,Ap=35044,Cp="300 es",Ui=2e3,yl=2001;class Hs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,u=a.length;c<u;c++)a[c].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Su=Math.PI/180,id=180/Math.PI;function Io(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]).toLowerCase()}function Cn(s,e,n){return Math.max(e,Math.min(n,s))}function O_(s,e){return(s%e+e)%e}function Mu(s,e,n){return(1-n)*s+n*e}function Ao(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function An(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,n=0){Ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Cn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*a+e.x,this.y=c*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,a,c,u,f,h,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,u,f,h,m)}set(e,n,r,a,c,u,f,h,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=n,g[4]=c,g[5]=h,g[6]=r,g[7]=u,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,u=r[0],f=r[3],h=r[6],m=r[1],g=r[4],y=r[7],v=r[2],S=r[5],A=r[8],T=a[0],x=a[3],_=a[6],N=a[1],E=a[4],P=a[7],V=a[2],I=a[5],U=a[8];return c[0]=u*T+f*N+h*V,c[3]=u*x+f*E+h*I,c[6]=u*_+f*P+h*U,c[1]=m*T+g*N+y*V,c[4]=m*x+g*E+y*I,c[7]=m*_+g*P+y*U,c[2]=v*T+S*N+A*V,c[5]=v*x+S*E+A*I,c[8]=v*_+S*P+A*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],f=e[5],h=e[6],m=e[7],g=e[8];return n*u*g-n*f*m-r*c*g+r*f*h+a*c*m-a*u*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],f=e[5],h=e[6],m=e[7],g=e[8],y=g*u-f*m,v=f*h-g*c,S=m*c-u*h,A=n*y+r*v+a*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=y*T,e[1]=(a*m-g*r)*T,e[2]=(f*r-a*u)*T,e[3]=v*T,e[4]=(g*n-a*h)*T,e[5]=(a*c-f*n)*T,e[6]=S*T,e[7]=(r*h-m*n)*T,e[8]=(u*n-r*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,u,f){const h=Math.cos(c),m=Math.sin(c);return this.set(r*h,r*m,-r*(h*u+m*f)+u+e,-a*m,a*h,-a*(-m*u+h*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Eu.makeScale(e,n)),this}rotate(e){return this.premultiply(Eu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Eu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Eu=new ot;function km(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Sl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function k_(){const s=Sl("canvas");return s.style.display="block",s}const Rp={};function z_(s){s in Rp||(Rp[s]=!0,console.warn(s))}const bp=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pp=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ja={[gr]:{transfer:vl,primaries:_l,toReference:s=>s,fromReference:s=>s},[di]:{transfer:Lt,primaries:_l,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[wl]:{transfer:vl,primaries:xl,toReference:s=>s.applyMatrix3(Pp),fromReference:s=>s.applyMatrix3(bp)},[ld]:{transfer:Lt,primaries:xl,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Pp),fromReference:s=>s.applyMatrix3(bp).convertLinearToSRGB()}},B_=new Set([gr,wl]),Et={enabled:!0,_workingColorSpace:gr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!B_.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const r=ja[e].toReference,a=ja[n].fromReference;return a(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ja[s].primaries},getTransfer:function(s){return s===ur?vl:ja[s].transfer}};function Is(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function wu(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let gs;class H_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=Sl("canvas")),gs.width=e.width,gs.height=e.height;const r=gs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=gs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Sl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let u=0;u<c.length;u++)c[u]=Is(c[u]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Is(n[r]/255)*255):n[r]=Is(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let V_=0;class zm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=Io(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?c.push(Tu(a[u].image)):c.push(Tu(a[u]))}else c=Tu(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function Tu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?H_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let G_=0;class Pn extends Hs{constructor(e=Pn.DEFAULT_IMAGE,n=Pn.DEFAULT_MAPPING,r=Hr,a=Hr,c=si,u=Vr,f=pi,h=mr,m=Pn.DEFAULT_ANISOTROPY,g=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=Io(),this.name="",this.source=new zm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case td:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case td:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Rm;Pn.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,n=0,r=0,a=1){nn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*a+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*a+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*a+u[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const h=e.elements,m=h[0],g=h[4],y=h[8],v=h[1],S=h[5],A=h[9],T=h[2],x=h[6],_=h[10];if(Math.abs(g-v)<.01&&Math.abs(y-T)<.01&&Math.abs(A-x)<.01){if(Math.abs(g+v)<.1&&Math.abs(y+T)<.1&&Math.abs(A+x)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(m+1)/2,P=(S+1)/2,V=(_+1)/2,I=(g+v)/4,U=(y+T)/4,W=(A+x)/4;return E>P&&E>V?E<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(E),a=I/r,c=U/r):P>V?P<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(P),r=I/a,c=W/a):V<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt(V),r=U/c,a=W/c),this.set(r,a,c,n),this}let N=Math.sqrt((x-A)*(x-A)+(y-T)*(y-T)+(v-g)*(v-g));return Math.abs(N)<.001&&(N=1),this.x=(x-A)/N,this.y=(y-T)/N,this.z=(v-g)/N,this.w=Math.acos((m+S+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class W_ extends Hs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new nn(0,0,e,n),this.scissorTest=!1,this.viewport=new nn(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Pn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new zm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends W_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Bm extends Pn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class j_ extends Pn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,u,f){let h=r[a+0],m=r[a+1],g=r[a+2],y=r[a+3];const v=c[u+0],S=c[u+1],A=c[u+2],T=c[u+3];if(f===0){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=y;return}if(f===1){e[n+0]=v,e[n+1]=S,e[n+2]=A,e[n+3]=T;return}if(y!==T||h!==v||m!==S||g!==A){let x=1-f;const _=h*v+m*S+g*A+y*T,N=_>=0?1:-1,E=1-_*_;if(E>Number.EPSILON){const V=Math.sqrt(E),I=Math.atan2(V,_*N);x=Math.sin(x*I)/V,f=Math.sin(f*I)/V}const P=f*N;if(h=h*x+v*P,m=m*x+S*P,g=g*x+A*P,y=y*x+T*P,x===1-f){const V=1/Math.sqrt(h*h+m*m+g*g+y*y);h*=V,m*=V,g*=V,y*=V}}e[n]=h,e[n+1]=m,e[n+2]=g,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,a,c,u){const f=r[a],h=r[a+1],m=r[a+2],g=r[a+3],y=c[u],v=c[u+1],S=c[u+2],A=c[u+3];return e[n]=f*A+g*y+h*S-m*v,e[n+1]=h*A+g*v+m*y-f*S,e[n+2]=m*A+g*S+f*v-h*y,e[n+3]=g*A-f*y-h*v-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,u=e._order,f=Math.cos,h=Math.sin,m=f(r/2),g=f(a/2),y=f(c/2),v=h(r/2),S=h(a/2),A=h(c/2);switch(u){case"XYZ":this._x=v*g*y+m*S*A,this._y=m*S*y-v*g*A,this._z=m*g*A+v*S*y,this._w=m*g*y-v*S*A;break;case"YXZ":this._x=v*g*y+m*S*A,this._y=m*S*y-v*g*A,this._z=m*g*A-v*S*y,this._w=m*g*y+v*S*A;break;case"ZXY":this._x=v*g*y-m*S*A,this._y=m*S*y+v*g*A,this._z=m*g*A+v*S*y,this._w=m*g*y-v*S*A;break;case"ZYX":this._x=v*g*y-m*S*A,this._y=m*S*y+v*g*A,this._z=m*g*A-v*S*y,this._w=m*g*y+v*S*A;break;case"YZX":this._x=v*g*y+m*S*A,this._y=m*S*y+v*g*A,this._z=m*g*A-v*S*y,this._w=m*g*y-v*S*A;break;case"XZY":this._x=v*g*y-m*S*A,this._y=m*S*y-v*g*A,this._z=m*g*A+v*S*y,this._w=m*g*y+v*S*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],u=n[1],f=n[5],h=n[9],m=n[2],g=n[6],y=n[10],v=r+f+y;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-h)*S,this._y=(c-m)*S,this._z=(u-a)*S}else if(r>f&&r>y){const S=2*Math.sqrt(1+r-f-y);this._w=(g-h)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(c+m)/S}else if(f>y){const S=2*Math.sqrt(1+f-r-y);this._w=(c-m)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+y-r-f);this._w=(u-a)/S,this._x=(c+m)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Cn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,u=e._w,f=n._x,h=n._y,m=n._z,g=n._w;return this._x=r*g+u*f+a*m-c*h,this._y=a*g+u*h+c*f-r*m,this._z=c*g+u*m+r*h-a*f,this._w=u*g-r*f-a*h-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,u=this._w;let f=u*e._w+r*e._x+a*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=a,this._z=c,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-n;return this._w=S*u+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,f),y=Math.sin((1-n)*g)/m,v=Math.sin(n*g)/m;return this._w=u*y+this._w*v,this._x=r*y+this._x*v,this._y=a*y+this._y*v,this._z=c*y+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,r=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Lp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Lp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,u=e.y,f=e.z,h=e.w,m=2*(u*a-f*r),g=2*(f*n-c*a),y=2*(c*r-u*n);return this.x=n+h*m+u*y-f*g,this.y=r+h*g+f*m-c*y,this.z=a+h*y+c*g-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,u=n.x,f=n.y,h=n.z;return this.x=a*h-c*f,this.y=c*u-r*h,this.z=r*f-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Au.copy(this).projectOnVector(e),this.sub(Au)}reflect(e){return this.sub(Au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Cn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Au=new Y,Lp=new Fo;class Oo{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ni.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ni.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ni.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,ni):ni.fromBufferAttribute(c,u),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Xa.copy(r.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}const a=e.children;for(let c=0,u=a.length;c<u;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),qa.subVectors(this.max,Co),vs.subVectors(e.a,Co),_s.subVectors(e.b,Co),xs.subVectors(e.c,Co),rr.subVectors(_s,vs),sr.subVectors(xs,_s),Lr.subVectors(vs,xs);let n=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-Lr.z,Lr.y,rr.z,0,-rr.x,sr.z,0,-sr.x,Lr.z,0,-Lr.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-Lr.y,Lr.x,0];return!Cu(n,vs,_s,xs,qa)||(n=[1,0,0,0,1,0,0,0,1],!Cu(n,vs,_s,xs,qa))?!1:(Ya.crossVectors(rr,sr),n=[Ya.x,Ya.y,Ya.z],Cu(n,vs,_s,xs,qa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ci=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ni=new Y,Xa=new Oo,vs=new Y,_s=new Y,xs=new Y,rr=new Y,sr=new Y,Lr=new Y,Co=new Y,qa=new Y,Ya=new Y,Nr=new Y;function Cu(s,e,n,r,a){for(let c=0,u=s.length-3;c<=u;c+=3){Nr.fromArray(s,c);const f=a.x*Math.abs(Nr.x)+a.y*Math.abs(Nr.y)+a.z*Math.abs(Nr.z),h=e.dot(Nr),m=n.dot(Nr),g=r.dot(Nr);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>f)return!1}return!0}const X_=new Oo,Ro=new Y,Ru=new Y;class Tl{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):X_.setFromPoints(e).getCenter(r);let a=0;for(let c=0,u=e.length;c<u;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const n=Ro.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Ro,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(Ru)),this.expandByPoint(Ro.copy(e.center).sub(Ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ri=new Y,bu=new Y,$a=new Y,or=new Y,Pu=new Y,Ka=new Y,Lu=new Y;class Hm{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,n),Ri.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){bu.copy(e).add(n).multiplyScalar(.5),$a.copy(n).sub(e).normalize(),or.copy(this.origin).sub(bu);const c=e.distanceTo(n)*.5,u=-this.direction.dot($a),f=or.dot(this.direction),h=-or.dot($a),m=or.lengthSq(),g=Math.abs(1-u*u);let y,v,S,A;if(g>0)if(y=u*h-f,v=u*f-h,A=c*g,y>=0)if(v>=-A)if(v<=A){const T=1/g;y*=T,v*=T,S=y*(y+u*v+2*f)+v*(u*y+v+2*h)+m}else v=c,y=Math.max(0,-(u*v+f)),S=-y*y+v*(v+2*h)+m;else v=-c,y=Math.max(0,-(u*v+f)),S=-y*y+v*(v+2*h)+m;else v<=-A?(y=Math.max(0,-(-u*c+f)),v=y>0?-c:Math.min(Math.max(-c,-h),c),S=-y*y+v*(v+2*h)+m):v<=A?(y=0,v=Math.min(Math.max(-c,-h),c),S=v*(v+2*h)+m):(y=Math.max(0,-(u*c+f)),v=y>0?c:Math.min(Math.max(-c,-h),c),S=-y*y+v*(v+2*h)+m);else v=u>0?-c:c,y=Math.max(0,-(u*v+f)),S=-y*y+v*(v+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(bu).addScaledVector($a,v),S}intersectSphere(e,n){Ri.subVectors(e.center,this.origin);const r=Ri.dot(this.direction),a=Ri.dot(Ri)-r*r,c=e.radius*e.radius;if(a>c)return null;const u=Math.sqrt(c-a),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,u,f,h;const m=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,a=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,a=(e.min.x-v.x)*m),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||c>a||((c>r||isNaN(r))&&(r=c),(u<a||isNaN(a))&&(a=u),y>=0?(f=(e.min.z-v.z)*y,h=(e.max.z-v.z)*y):(f=(e.max.z-v.z)*y,h=(e.min.z-v.z)*y),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,n,r,a,c){Pu.subVectors(n,e),Ka.subVectors(r,e),Lu.crossVectors(Pu,Ka);let u=this.direction.dot(Lu),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;or.subVectors(this.origin,e);const h=f*this.direction.dot(Ka.crossVectors(or,Ka));if(h<0)return null;const m=f*this.direction.dot(Pu.cross(or));if(m<0||h+m>u)return null;const g=-f*or.dot(Lu);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,n,r,a,c,u,f,h,m,g,y,v,S,A,T,x){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,u,f,h,m,g,y,v,S,A,T,x)}set(e,n,r,a,c,u,f,h,m,g,y,v,S,A,T,x){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=c,_[5]=u,_[9]=f,_[13]=h,_[2]=m,_[6]=g,_[10]=y,_[14]=v,_[3]=S,_[7]=A,_[11]=T,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/ys.setFromMatrixColumn(e,0).length(),c=1/ys.setFromMatrixColumn(e,1).length(),u=1/ys.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(a),m=Math.sin(a),g=Math.cos(c),y=Math.sin(c);if(e.order==="XYZ"){const v=u*g,S=u*y,A=f*g,T=f*y;n[0]=h*g,n[4]=-h*y,n[8]=m,n[1]=S+A*m,n[5]=v-T*m,n[9]=-f*h,n[2]=T-v*m,n[6]=A+S*m,n[10]=u*h}else if(e.order==="YXZ"){const v=h*g,S=h*y,A=m*g,T=m*y;n[0]=v+T*f,n[4]=A*f-S,n[8]=u*m,n[1]=u*y,n[5]=u*g,n[9]=-f,n[2]=S*f-A,n[6]=T+v*f,n[10]=u*h}else if(e.order==="ZXY"){const v=h*g,S=h*y,A=m*g,T=m*y;n[0]=v-T*f,n[4]=-u*y,n[8]=A+S*f,n[1]=S+A*f,n[5]=u*g,n[9]=T-v*f,n[2]=-u*m,n[6]=f,n[10]=u*h}else if(e.order==="ZYX"){const v=u*g,S=u*y,A=f*g,T=f*y;n[0]=h*g,n[4]=A*m-S,n[8]=v*m+T,n[1]=h*y,n[5]=T*m+v,n[9]=S*m-A,n[2]=-m,n[6]=f*h,n[10]=u*h}else if(e.order==="YZX"){const v=u*h,S=u*m,A=f*h,T=f*m;n[0]=h*g,n[4]=T-v*y,n[8]=A*y+S,n[1]=y,n[5]=u*g,n[9]=-f*g,n[2]=-m*g,n[6]=S*y+A,n[10]=v-T*y}else if(e.order==="XZY"){const v=u*h,S=u*m,A=f*h,T=f*m;n[0]=h*g,n[4]=-y,n[8]=m*g,n[1]=v*y+T,n[5]=u*g,n[9]=S*y-A,n[2]=A*y-S,n[6]=f*g,n[10]=T*y+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(q_,e,Y_)}lookAt(e,n,r){const a=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),ar.crossVectors(r,Fn),ar.lengthSq()===0&&(Math.abs(r.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),ar.crossVectors(r,Fn)),ar.normalize(),Qa.crossVectors(Fn,ar),a[0]=ar.x,a[4]=Qa.x,a[8]=Fn.x,a[1]=ar.y,a[5]=Qa.y,a[9]=Fn.y,a[2]=ar.z,a[6]=Qa.z,a[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,u=r[0],f=r[4],h=r[8],m=r[12],g=r[1],y=r[5],v=r[9],S=r[13],A=r[2],T=r[6],x=r[10],_=r[14],N=r[3],E=r[7],P=r[11],V=r[15],I=a[0],U=a[4],W=a[8],L=a[12],w=a[1],$=a[5],oe=a[9],H=a[13],le=a[2],ae=a[6],ve=a[10],fe=a[14],z=a[3],se=a[7],Z=a[11],O=a[15];return c[0]=u*I+f*w+h*le+m*z,c[4]=u*U+f*$+h*ae+m*se,c[8]=u*W+f*oe+h*ve+m*Z,c[12]=u*L+f*H+h*fe+m*O,c[1]=g*I+y*w+v*le+S*z,c[5]=g*U+y*$+v*ae+S*se,c[9]=g*W+y*oe+v*ve+S*Z,c[13]=g*L+y*H+v*fe+S*O,c[2]=A*I+T*w+x*le+_*z,c[6]=A*U+T*$+x*ae+_*se,c[10]=A*W+T*oe+x*ve+_*Z,c[14]=A*L+T*H+x*fe+_*O,c[3]=N*I+E*w+P*le+V*z,c[7]=N*U+E*$+P*ae+V*se,c[11]=N*W+E*oe+P*ve+V*Z,c[15]=N*L+E*H+P*fe+V*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],u=e[1],f=e[5],h=e[9],m=e[13],g=e[2],y=e[6],v=e[10],S=e[14],A=e[3],T=e[7],x=e[11],_=e[15];return A*(+c*h*y-a*m*y-c*f*v+r*m*v+a*f*S-r*h*S)+T*(+n*h*S-n*m*v+c*u*v-a*u*S+a*m*g-c*h*g)+x*(+n*m*y-n*f*S-c*u*y+r*u*S+c*f*g-r*m*g)+_*(-a*f*g-n*h*y+n*f*v+a*u*y-r*u*v+r*h*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],f=e[5],h=e[6],m=e[7],g=e[8],y=e[9],v=e[10],S=e[11],A=e[12],T=e[13],x=e[14],_=e[15],N=y*x*m-T*v*m+T*h*S-f*x*S-y*h*_+f*v*_,E=A*v*m-g*x*m-A*h*S+u*x*S+g*h*_-u*v*_,P=g*T*m-A*y*m+A*f*S-u*T*S-g*f*_+u*y*_,V=A*y*h-g*T*h-A*f*v+u*T*v+g*f*x-u*y*x,I=n*N+r*E+a*P+c*V;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/I;return e[0]=N*U,e[1]=(T*v*c-y*x*c-T*a*S+r*x*S+y*a*_-r*v*_)*U,e[2]=(f*x*c-T*h*c+T*a*m-r*x*m-f*a*_+r*h*_)*U,e[3]=(y*h*c-f*v*c-y*a*m+r*v*m+f*a*S-r*h*S)*U,e[4]=E*U,e[5]=(g*x*c-A*v*c+A*a*S-n*x*S-g*a*_+n*v*_)*U,e[6]=(A*h*c-u*x*c-A*a*m+n*x*m+u*a*_-n*h*_)*U,e[7]=(u*v*c-g*h*c+g*a*m-n*v*m-u*a*S+n*h*S)*U,e[8]=P*U,e[9]=(A*y*c-g*T*c-A*r*S+n*T*S+g*r*_-n*y*_)*U,e[10]=(u*T*c-A*f*c+A*r*m-n*T*m-u*r*_+n*f*_)*U,e[11]=(g*f*c-u*y*c-g*r*m+n*y*m+u*r*S-n*f*S)*U,e[12]=V*U,e[13]=(g*T*a-A*y*a+A*r*v-n*T*v-g*r*x+n*y*x)*U,e[14]=(A*f*a-u*T*a-A*r*h+n*T*h+u*r*x-n*f*x)*U,e[15]=(u*y*a-g*f*a+g*r*h-n*y*h-u*r*v+n*f*v)*U,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,u=e.x,f=e.y,h=e.z,m=c*u,g=c*f;return this.set(m*u+r,m*f-a*h,m*h+a*f,0,m*f+a*h,g*f+r,g*h-a*u,0,m*h-a*f,g*h+a*u,c*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,u){return this.set(1,r,c,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,u=n._y,f=n._z,h=n._w,m=c+c,g=u+u,y=f+f,v=c*m,S=c*g,A=c*y,T=u*g,x=u*y,_=f*y,N=h*m,E=h*g,P=h*y,V=r.x,I=r.y,U=r.z;return a[0]=(1-(T+_))*V,a[1]=(S+P)*V,a[2]=(A-E)*V,a[3]=0,a[4]=(S-P)*I,a[5]=(1-(v+_))*I,a[6]=(x+N)*I,a[7]=0,a[8]=(A+E)*U,a[9]=(x-N)*U,a[10]=(1-(v+T))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=ys.set(a[0],a[1],a[2]).length();const u=ys.set(a[4],a[5],a[6]).length(),f=ys.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],ii.copy(this);const m=1/c,g=1/u,y=1/f;return ii.elements[0]*=m,ii.elements[1]*=m,ii.elements[2]*=m,ii.elements[4]*=g,ii.elements[5]*=g,ii.elements[6]*=g,ii.elements[8]*=y,ii.elements[9]*=y,ii.elements[10]*=y,n.setFromRotationMatrix(ii),r.x=c,r.y=u,r.z=f,this}makePerspective(e,n,r,a,c,u,f=Ui){const h=this.elements,m=2*c/(n-e),g=2*c/(r-a),y=(n+e)/(n-e),v=(r+a)/(r-a);let S,A;if(f===Ui)S=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(f===yl)S=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=y,h[12]=0,h[1]=0,h[5]=g,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,c,u,f=Ui){const h=this.elements,m=1/(n-e),g=1/(r-a),y=1/(u-c),v=(n+e)*m,S=(r+a)*g;let A,T;if(f===Ui)A=(u+c)*y,T=-2*y;else if(f===yl)A=c*y,T=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=T,h[14]=-A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const ys=new Y,ii=new Ot,q_=new Y(0,0,0),Y_=new Y(1,1,1),ar=new Y,Qa=new Y,Fn=new Y,Np=new Ot,Dp=new Fo;class gi{constructor(e=0,n=0,r=0,a=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],u=a[4],f=a[8],h=a[1],m=a[5],g=a[9],y=a[2],v=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(Cn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Cn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(Cn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-Cn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Cn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Cn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Np.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Np,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Dp.setFromEuler(this),this.setFromQuaternion(Dp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class Vm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $_=0;const Up=new Y,Ss=new Fo,bi=new Ot,Za=new Y,bo=new Y,K_=new Y,Q_=new Fo,Ip=new Y(1,0,0),Fp=new Y(0,1,0),Op=new Y(0,0,1),kp={type:"added"},Z_={type:"removed"},Ms={type:"childadded",child:null},Nu={type:"childremoved",child:null};class an extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new Y,n=new gi,r=new Fo,a=new Y(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ot},normalMatrix:{value:new ot}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(Ip,e)}rotateY(e){return this.rotateOnAxis(Fp,e)}rotateZ(e){return this.rotateOnAxis(Op,e)}translateOnAxis(e,n){return Up.copy(e).applyQuaternion(this.quaternion),this.position.add(Up.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ip,e)}translateY(e){return this.translateOnAxis(Fp,e)}translateZ(e){return this.translateOnAxis(Op,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Za.copy(e):Za.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(bo,Za,this.up):bi.lookAt(Za,bo,this.up),this.quaternion.setFromRotationMatrix(bi),a&&(bi.extractRotation(a.matrixWorld),Ss.setFromRotationMatrix(bi),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kp),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Z_),Nu.child=e,this.dispatchEvent(Nu),Nu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kp),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,K_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,Q_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++){const c=n[r];(c.matrixWorldAutoUpdate===!0||e===!0)&&c.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++){const f=a[c];f.matrixWorldAutoUpdate===!0&&f.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const y=h[m];c(e.shapes,y)}else c(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(c(e.materials,this.material[h]));a.material=f}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(c(e.animations,h))}}if(n){const f=u(e.geometries),h=u(e.materials),m=u(e.textures),g=u(e.images),y=u(e.shapes),v=u(e.skeletons),S=u(e.animations),A=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),y.length>0&&(r.shapes=y),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),A.length>0&&(r.nodes=A)}return r.object=a,r;function u(f){const h=[];for(const m in f){const g=f[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}an.DEFAULT_UP=new Y(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new Y,Pi=new Y,Du=new Y,Li=new Y,Es=new Y,ws=new Y,zp=new Y,Uu=new Y,Iu=new Y,Fu=new Y;class hi{constructor(e=new Y,n=new Y,r=new Y){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ri.subVectors(e,n),a.cross(ri);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){ri.subVectors(a,n),Pi.subVectors(r,n),Du.subVectors(e,n);const u=ri.dot(ri),f=ri.dot(Pi),h=ri.dot(Du),m=Pi.dot(Pi),g=Pi.dot(Du),y=u*m-f*f;if(y===0)return c.set(0,0,0),null;const v=1/y,S=(m*h-f*g)*v,A=(u*g-f*h)*v;return c.set(1-S-A,A,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,n,r,a,c,u,f,h){return this.getBarycoord(e,n,r,a,Li)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,Li.x),h.addScaledVector(u,Li.y),h.addScaledVector(f,Li.z),h)}static isFrontFacing(e,n,r,a){return ri.subVectors(r,n),Pi.subVectors(e,n),ri.cross(Pi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ri.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return hi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return hi.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let u,f;Es.subVectors(a,r),ws.subVectors(c,r),Uu.subVectors(e,r);const h=Es.dot(Uu),m=ws.dot(Uu);if(h<=0&&m<=0)return n.copy(r);Iu.subVectors(e,a);const g=Es.dot(Iu),y=ws.dot(Iu);if(g>=0&&y<=g)return n.copy(a);const v=h*y-g*m;if(v<=0&&h>=0&&g<=0)return u=h/(h-g),n.copy(r).addScaledVector(Es,u);Fu.subVectors(e,c);const S=Es.dot(Fu),A=ws.dot(Fu);if(A>=0&&S<=A)return n.copy(c);const T=S*m-h*A;if(T<=0&&m>=0&&A<=0)return f=m/(m-A),n.copy(r).addScaledVector(ws,f);const x=g*A-S*y;if(x<=0&&y-g>=0&&S-A>=0)return zp.subVectors(c,a),f=(y-g)/(y-g+(S-A)),n.copy(a).addScaledVector(zp,f);const _=1/(x+T+v);return u=T*_,f=v*_,n.copy(r).addScaledVector(Es,u).addScaledVector(ws,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function Ou(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class ht{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Et.workingColorSpace){return this.r=e,this.g=n,this.b=r,Et.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Et.workingColorSpace){if(e=O_(e,1),n=Cn(n,0,1),r=Cn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=Ou(u,c,e+1/3),this.g=Ou(u,c,e),this.b=Ou(u,c,e-1/3)}return Et.toWorkingColorSpace(this,a),this}setStyle(e,n=di){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=di){const r=Gm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=wu(e.r),this.g=wu(e.g),this.b=wu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Et.fromWorkingColorSpace(pn.copy(this),e),Math.round(Cn(pn.r*255,0,255))*65536+Math.round(Cn(pn.g*255,0,255))*256+Math.round(Cn(pn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.fromWorkingColorSpace(pn.copy(this),n);const r=pn.r,a=pn.g,c=pn.b,u=Math.max(r,a,c),f=Math.min(r,a,c);let h,m;const g=(f+u)/2;if(f===u)h=0,m=0;else{const y=u-f;switch(m=g<=.5?y/(u+f):y/(2-u-f),u){case r:h=(a-c)/y+(a<c?6:0);break;case a:h=(c-r)/y+2;break;case c:h=(r-a)/y+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,n=Et.workingColorSpace){return Et.fromWorkingColorSpace(pn.copy(this),n),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=di){Et.fromWorkingColorSpace(pn.copy(this),e);const n=pn.r,r=pn.g,a=pn.b;return e!==di?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+n,lr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(lr),e.getHSL(Ja);const r=Mu(lr.h,Ja.h,n),a=Mu(lr.s,Ja.s,n),c=Mu(lr.l,Ja.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new ht;ht.NAMES=Gm;let J_=0;class Vs extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Io(),this.name="",this.type="Material",this.blending=Ds,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qu,this.blendDst=Zu,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=gl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(r.blending=this.blending),this.side!==pr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Qu&&(r.blendSrc=this.blendSrc),this.blendDst!==Zu&&(r.blendDst=this.blendDst),this.blendEquation!==zr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==gl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const u=[];for(const f in c){const h=c[f];delete h.metadata,u.push(h)}return u}if(n){const c=a(e.textures),u=a(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cd extends Vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Cm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new Y,el=new Ke;class mi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Ap,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=dr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return z_("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)el.fromBufferAttribute(this,n),el.applyMatrix3(e),this.setXY(n,el.x,el.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix3(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix4(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Ht.fromBufferAttribute(this,n),Ht.applyNormalMatrix(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Ht.fromBufferAttribute(this,n),Ht.transformDirection(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ao(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=An(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ao(n,this.array)),n}setX(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ao(n,this.array)),n}setY(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ao(n,this.array)),n}setZ(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ao(n,this.array)),n}setW(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array),a=An(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array),a=An(a,this.array),c=An(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ap&&(e.usage=this.usage),e}}class Wm extends mi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class jm extends mi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class mn extends mi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let ex=0;const Wn=new Ot,ku=new an,Ts=new Y,On=new Oo,Po=new Oo,tn=new Y;class Yn extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(km(e)?jm:Wm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ot().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,n,r){return Wn.makeTranslation(e,n,r),this.applyMatrix4(Wn),this}scale(e,n,r){return Wn.makeScale(e,n,r),this.applyMatrix4(Wn),this}lookAt(e){return ku.lookAt(e),ku.updateMatrix(),this.applyMatrix4(ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const c=e[r];n.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new mn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];On.setFromBufferAttribute(c),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const r=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];Po.setFromBufferAttribute(f),this.morphTargetsRelative?(tn.addVectors(On.min,Po.min),On.expandByPoint(tn),tn.addVectors(On.max,Po.max),On.expandByPoint(tn)):(On.expandByPoint(Po.min),On.expandByPoint(Po.max))}On.getCenter(r);let a=0;for(let c=0,u=e.count;c<u;c++)tn.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(tn));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],h=this.morphTargetsRelative;for(let m=0,g=f.count;m<g;m++)tn.fromBufferAttribute(f,m),h&&(Ts.fromBufferAttribute(e,m),tn.add(Ts)),a=Math.max(a,r.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let W=0;W<r.count;W++)f[W]=new Y,h[W]=new Y;const m=new Y,g=new Y,y=new Y,v=new Ke,S=new Ke,A=new Ke,T=new Y,x=new Y;function _(W,L,w){m.fromBufferAttribute(r,W),g.fromBufferAttribute(r,L),y.fromBufferAttribute(r,w),v.fromBufferAttribute(c,W),S.fromBufferAttribute(c,L),A.fromBufferAttribute(c,w),g.sub(m),y.sub(m),S.sub(v),A.sub(v);const $=1/(S.x*A.y-A.x*S.y);isFinite($)&&(T.copy(g).multiplyScalar(A.y).addScaledVector(y,-S.y).multiplyScalar($),x.copy(y).multiplyScalar(S.x).addScaledVector(g,-A.x).multiplyScalar($),f[W].add(T),f[L].add(T),f[w].add(T),h[W].add(x),h[L].add(x),h[w].add(x))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let W=0,L=N.length;W<L;++W){const w=N[W],$=w.start,oe=w.count;for(let H=$,le=$+oe;H<le;H+=3)_(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const E=new Y,P=new Y,V=new Y,I=new Y;function U(W){V.fromBufferAttribute(a,W),I.copy(V);const L=f[W];E.copy(L),E.sub(V.multiplyScalar(V.dot(L))).normalize(),P.crossVectors(I,L);const $=P.dot(h[W])<0?-1:1;u.setXYZW(W,E.x,E.y,E.z,$)}for(let W=0,L=N.length;W<L;++W){const w=N[W],$=w.start,oe=w.count;for(let H=$,le=$+oe;H<le;H+=3)U(e.getX(H+0)),U(e.getX(H+1)),U(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new mi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const a=new Y,c=new Y,u=new Y,f=new Y,h=new Y,m=new Y,g=new Y,y=new Y;if(e)for(let v=0,S=e.count;v<S;v+=3){const A=e.getX(v+0),T=e.getX(v+1),x=e.getX(v+2);a.fromBufferAttribute(n,A),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,x),g.subVectors(u,c),y.subVectors(a,c),g.cross(y),f.fromBufferAttribute(r,A),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,x),f.add(g),h.add(g),m.add(g),r.setXYZ(A,f.x,f.y,f.z),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let v=0,S=n.count;v<S;v+=3)a.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),y.subVectors(a,c),g.cross(y),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)tn.fromBufferAttribute(e,n),tn.normalize(),e.setXYZ(n,tn.x,tn.y,tn.z)}toNonIndexed(){function e(f,h){const m=f.array,g=f.itemSize,y=f.normalized,v=new m.constructor(h.length*g);let S=0,A=0;for(let T=0,x=h.length;T<x;T++){f.isInterleavedBufferAttribute?S=h[T]*f.data.stride+f.offset:S=h[T]*g;for(let _=0;_<g;_++)v[A++]=m[S++]}return new mi(v,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yn,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],m=e(h,r);n.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const h=[],m=c[f];for(let g=0,y=m.length;g<y;g++){const v=m[g],S=e(v,r);h.push(S)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let c=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let y=0,v=m.length;y<v;y++){const S=m[y];g.push(S.toJSON(e.data))}g.length>0&&(a[h]=g,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(n))}const c=e.morphAttributes;for(const m in c){const g=[],y=c[m];for(let v=0,S=y.length;v<S;v++)g.push(y[v].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,g=u.length;m<g;m++){const y=u[m];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bp=new Ot,Dr=new Hm,tl=new Tl,Hp=new Y,As=new Y,Cs=new Y,Rs=new Y,zu=new Y,nl=new Y,il=new Ke,rl=new Ke,sl=new Ke,Vp=new Y,Gp=new Y,Wp=new Y,ol=new Y,al=new Y;class qn extends an{constructor(e=new Yn,n=new cd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const f=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(c&&f){nl.set(0,0,0);for(let h=0,m=c.length;h<m;h++){const g=f[h],y=c[h];g!==0&&(zu.fromBufferAttribute(y,e),u?nl.addScaledVector(zu,g):nl.addScaledVector(zu.sub(n),g))}n.add(nl)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),tl.copy(r.boundingSphere),tl.applyMatrix4(c),Dr.copy(e.ray).recast(e.near),!(tl.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(tl,Hp)===null||Dr.origin.distanceToSquared(Hp)>(e.far-e.near)**2))&&(Bp.copy(c).invert(),Dr.copy(e.ray).applyMatrix4(Bp),!(r.boundingBox!==null&&Dr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Dr)))}_computeIntersections(e,n,r){let a;const c=this.geometry,u=this.material,f=c.index,h=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,y=c.attributes.normal,v=c.groups,S=c.drawRange;if(f!==null)if(Array.isArray(u))for(let A=0,T=v.length;A<T;A++){const x=v[A],_=u[x.materialIndex],N=Math.max(x.start,S.start),E=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let P=N,V=E;P<V;P+=3){const I=f.getX(P),U=f.getX(P+1),W=f.getX(P+2);a=ll(this,_,e,r,m,g,y,I,U,W),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const A=Math.max(0,S.start),T=Math.min(f.count,S.start+S.count);for(let x=A,_=T;x<_;x+=3){const N=f.getX(x),E=f.getX(x+1),P=f.getX(x+2);a=ll(this,u,e,r,m,g,y,N,E,P),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let A=0,T=v.length;A<T;A++){const x=v[A],_=u[x.materialIndex],N=Math.max(x.start,S.start),E=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let P=N,V=E;P<V;P+=3){const I=P,U=P+1,W=P+2;a=ll(this,_,e,r,m,g,y,I,U,W),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const A=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let x=A,_=T;x<_;x+=3){const N=x,E=x+1,P=x+2;a=ll(this,u,e,r,m,g,y,N,E,P),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}}}function tx(s,e,n,r,a,c,u,f){let h;if(e.side===bn?h=r.intersectTriangle(u,c,a,!0,f):h=r.intersectTriangle(a,c,u,e.side===pr,f),h===null)return null;al.copy(f),al.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(al);return m<n.near||m>n.far?null:{distance:m,point:al.clone(),object:s}}function ll(s,e,n,r,a,c,u,f,h,m){s.getVertexPosition(f,As),s.getVertexPosition(h,Cs),s.getVertexPosition(m,Rs);const g=tx(s,e,n,r,As,Cs,Rs,ol);if(g){a&&(il.fromBufferAttribute(a,f),rl.fromBufferAttribute(a,h),sl.fromBufferAttribute(a,m),g.uv=hi.getInterpolation(ol,As,Cs,Rs,il,rl,sl,new Ke)),c&&(il.fromBufferAttribute(c,f),rl.fromBufferAttribute(c,h),sl.fromBufferAttribute(c,m),g.uv1=hi.getInterpolation(ol,As,Cs,Rs,il,rl,sl,new Ke)),u&&(Vp.fromBufferAttribute(u,f),Gp.fromBufferAttribute(u,h),Wp.fromBufferAttribute(u,m),g.normal=hi.getInterpolation(ol,As,Cs,Rs,Vp,Gp,Wp,new Y),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:f,b:h,c:m,normal:new Y,materialIndex:0};hi.getNormal(As,Cs,Rs,y.normal),g.face=y}return g}class ko extends Yn{constructor(e=1,n=1,r=1,a=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:u};const f=this;a=Math.floor(a),c=Math.floor(c),u=Math.floor(u);const h=[],m=[],g=[],y=[];let v=0,S=0;A("z","y","x",-1,-1,r,n,e,u,c,0),A("z","y","x",1,-1,r,n,-e,u,c,1),A("x","z","y",1,1,e,r,n,a,u,2),A("x","z","y",1,-1,e,r,-n,a,u,3),A("x","y","z",1,-1,e,n,r,a,c,4),A("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(h),this.setAttribute("position",new mn(m,3)),this.setAttribute("normal",new mn(g,3)),this.setAttribute("uv",new mn(y,2));function A(T,x,_,N,E,P,V,I,U,W,L){const w=P/U,$=V/W,oe=P/2,H=V/2,le=I/2,ae=U+1,ve=W+1;let fe=0,z=0;const se=new Y;for(let Z=0;Z<ve;Z++){const O=Z*$-H;for(let ie=0;ie<ae;ie++){const Le=ie*w-oe;se[T]=Le*N,se[x]=O*E,se[_]=le,m.push(se.x,se.y,se.z),se[T]=0,se[x]=0,se[_]=I>0?1:-1,g.push(se.x,se.y,se.z),y.push(ie/U),y.push(1-Z/W),fe+=1}}for(let Z=0;Z<W;Z++)for(let O=0;O<U;O++){const ie=v+O+ae*Z,Le=v+O+ae*(Z+1),K=v+(O+1)+ae*(Z+1),ue=v+(O+1)+ae*Z;h.push(ie,Le,ue),h.push(Le,K,ue),z+=6}f.addGroup(S,z,L),S+=z,v+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function _n(s){const e={};for(let n=0;n<s.length;n++){const r=zs(s[n]);for(const a in r)e[a]=r[a]}return e}function nx(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Xm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const Ml={clone:zs,merge:_n};var ix=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ix,this.fragmentShader=rx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=nx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class qm extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cr=new Y,jp=new Ke,Xp=new Ke;class jn extends qm{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=id*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Su*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return id*2*Math.atan(Math.tan(Su*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,n){return this.getViewBounds(e,jp,Xp),n.subVectors(Xp,jp)}setViewOffset(e,n,r,a,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Su*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;c+=u.offsetX*a/h,n-=u.offsetY*r/m,a*=u.width/h,r*=u.height/m}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const bs=-90,Ps=1;class sx extends an{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new jn(bs,Ps,e,n);a.layers=this.layers,this.add(a);const c=new jn(bs,Ps,e,n);c.layers=this.layers,this.add(c);const u=new jn(bs,Ps,e,n);u.layers=this.layers,this.add(u);const f=new jn(bs,Ps,e,n);f.layers=this.layers,this.add(f);const h=new jn(bs,Ps,e,n);h.layers=this.layers,this.add(h);const m=new jn(bs,Ps,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,u,f,h]=n;for(const m of n)this.remove(m);if(e===Ui)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===yl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,h,m,g]=this.children,y=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,u),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(n,g),e.setRenderTarget(y,v,S),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Ym extends Pn{constructor(e,n,r,a,c,u,f,h,m,g){e=e!==void 0?e:[],n=n!==void 0?n:Fs,super(e,n,r,a,c,u,f,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ox extends oi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Ym(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:si}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ko(5,5,5),c=new Rn({name:"CubemapFromEquirect",uniforms:zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:bn,blending:Ii});c.uniforms.tEquirect.value=n;const u=new qn(a,c),f=n.minFilter;return n.minFilter===Vr&&(n.minFilter=si),new sx(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,a){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,a);e.setRenderTarget(c)}}const Bu=new Y,ax=new Y,lx=new ot;class Or{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Bu.subVectors(r,n).cross(ax.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Bu),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||lx.getNormalMatrix(e),a=this.coplanarPoint(Bu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new Tl,cl=new Y;class ud{constructor(e=new Or,n=new Or,r=new Or,a=new Or,c=new Or,u=new Or){this.planes=[e,n,r,a,c,u]}set(e,n,r,a,c,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(c),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ui){const r=this.planes,a=e.elements,c=a[0],u=a[1],f=a[2],h=a[3],m=a[4],g=a[5],y=a[6],v=a[7],S=a[8],A=a[9],T=a[10],x=a[11],_=a[12],N=a[13],E=a[14],P=a[15];if(r[0].setComponents(h-c,v-m,x-S,P-_).normalize(),r[1].setComponents(h+c,v+m,x+S,P+_).normalize(),r[2].setComponents(h+u,v+g,x+A,P+N).normalize(),r[3].setComponents(h-u,v-g,x-A,P-N).normalize(),r[4].setComponents(h-f,v-y,x-T,P-E).normalize(),n===Ui)r[5].setComponents(h+f,v+y,x+T,P+E).normalize();else if(n===yl)r[5].setComponents(f,y,T,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(cl.x=a.normal.x>0?e.max.x:e.min.x,cl.y=a.normal.y>0?e.max.y:e.min.y,cl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $m(){let s=null,e=!1,n=null,r=null;function a(c,u){n(c,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function cx(s){const e=new WeakMap;function n(f,h){const m=f.array,g=f.usage,y=m.byteLength,v=s.createBuffer();s.bindBuffer(h,v),s.bufferData(h,m,g),f.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:y}}function r(f,h,m){const g=h.array,y=h._updateRange,v=h.updateRanges;if(s.bindBuffer(m,f),y.count===-1&&v.length===0&&s.bufferSubData(m,0,g),v.length!==0){for(let S=0,A=v.length;S<A;S++){const T=v[S];s.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}h.clearUpdateRanges()}y.count!==-1&&(s.bufferSubData(m,y.offset*g.BYTES_PER_ELEMENT,g,y.offset,y.count),y.count=-1),h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);if(m===void 0)e.set(f,n(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,h),m.version=f.version}}return{get:a,remove:c,update:u}}class Al extends Yn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,u=n/2,f=Math.floor(r),h=Math.floor(a),m=f+1,g=h+1,y=e/f,v=n/h,S=[],A=[],T=[],x=[];for(let _=0;_<g;_++){const N=_*v-u;for(let E=0;E<m;E++){const P=E*y-c;A.push(P,-N,0),T.push(0,0,1),x.push(E/f),x.push(1-_/h)}}for(let _=0;_<h;_++)for(let N=0;N<f;N++){const E=N+m*_,P=N+m*(_+1),V=N+1+m*(_+1),I=N+1+m*_;S.push(E,P,I),S.push(P,V,I)}this.setIndex(S),this.setAttribute("position",new mn(A,3)),this.setAttribute("normal",new mn(T,3)),this.setAttribute("uv",new mn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.width,e.height,e.widthSegments,e.heightSegments)}}var ux=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dx=`#ifdef USE_ALPHAHASH
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
#endif`,fx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,px=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gx=`#ifdef USE_AOMAP
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
#endif`,vx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_x=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,xx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,yx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ex=`#ifdef USE_IRIDESCENCE
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
#endif`,wx=`#ifdef USE_BUMPMAP
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
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Dx=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Ux=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ix=`vec3 transformedNormal = objectNormal;
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
#endif`,Fx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ox=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,jx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xx=`#ifdef USE_ENVMAP
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
#endif`,qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$x=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qx=`#ifdef USE_GRADIENTMAP
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
}`,Zx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ty=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,ny=`#ifdef USE_ENVMAP
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
#endif`,iy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ay=`PhysicalMaterial material;
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
#endif`,ly=`struct PhysicalMaterial {
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
}`,cy=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,uy=`#if defined( RE_IndirectDiffuse )
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
#endif`,dy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,py=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,my=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_y=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xy=`#if defined( USE_POINTS_UV )
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
#endif`,yy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,My=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ey=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ty=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ay=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Cy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ry=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ly=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ny=`#ifdef USE_NORMALMAP
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
#endif`,Dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Oy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ky=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,zy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,By=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return shadow;
	}
#endif`,Xy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$y=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ky=`#ifdef USE_SKINNING
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
#endif`,Qy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zy=`#ifdef USE_SKINNING
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
#endif`,Jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nS=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iS=`#ifdef USE_TRANSMISSION
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
#endif`,rS=`#ifdef USE_TRANSMISSION
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
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uS=`uniform sampler2D t2D;
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
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mS=`#include <common>
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
}`,gS=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vS=`#define DISTANCE
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
}`,_S=`#define DISTANCE
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
}`,xS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SS=`uniform float scale;
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
}`,MS=`uniform vec3 diffuse;
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
}`,ES=`#include <common>
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
}`,wS=`uniform vec3 diffuse;
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
}`,TS=`#define LAMBERT
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
}`,AS=`#define LAMBERT
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
}`,CS=`#define MATCAP
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
}`,RS=`#define MATCAP
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
}`,bS=`#define NORMAL
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
}`,PS=`#define NORMAL
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
}`,LS=`#define PHONG
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
}`,NS=`#define PHONG
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
}`,DS=`#define STANDARD
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
}`,US=`#define STANDARD
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
}`,IS=`#define TOON
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
}`,FS=`#define TOON
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
}`,OS=`uniform float size;
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
}`,kS=`uniform vec3 diffuse;
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
}`,zS=`#include <common>
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
}`,BS=`uniform vec3 color;
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
}`,HS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,VS=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:ux,alphahash_pars_fragment:dx,alphamap_fragment:fx,alphamap_pars_fragment:hx,alphatest_fragment:px,alphatest_pars_fragment:mx,aomap_fragment:gx,aomap_pars_fragment:vx,batching_pars_vertex:_x,batching_vertex:xx,begin_vertex:yx,beginnormal_vertex:Sx,bsdfs:Mx,iridescence_fragment:Ex,bumpmap_pars_fragment:wx,clipping_planes_fragment:Tx,clipping_planes_pars_fragment:Ax,clipping_planes_pars_vertex:Cx,clipping_planes_vertex:Rx,color_fragment:bx,color_pars_fragment:Px,color_pars_vertex:Lx,color_vertex:Nx,common:Dx,cube_uv_reflection_fragment:Ux,defaultnormal_vertex:Ix,displacementmap_pars_vertex:Fx,displacementmap_vertex:Ox,emissivemap_fragment:kx,emissivemap_pars_fragment:zx,colorspace_fragment:Bx,colorspace_pars_fragment:Hx,envmap_fragment:Vx,envmap_common_pars_fragment:Gx,envmap_pars_fragment:Wx,envmap_pars_vertex:jx,envmap_physical_pars_fragment:ny,envmap_vertex:Xx,fog_vertex:qx,fog_pars_vertex:Yx,fog_fragment:$x,fog_pars_fragment:Kx,gradientmap_pars_fragment:Qx,lightmap_pars_fragment:Zx,lights_lambert_fragment:Jx,lights_lambert_pars_fragment:ey,lights_pars_begin:ty,lights_toon_fragment:iy,lights_toon_pars_fragment:ry,lights_phong_fragment:sy,lights_phong_pars_fragment:oy,lights_physical_fragment:ay,lights_physical_pars_fragment:ly,lights_fragment_begin:cy,lights_fragment_maps:uy,lights_fragment_end:dy,logdepthbuf_fragment:fy,logdepthbuf_pars_fragment:hy,logdepthbuf_pars_vertex:py,logdepthbuf_vertex:my,map_fragment:gy,map_pars_fragment:vy,map_particle_fragment:_y,map_particle_pars_fragment:xy,metalnessmap_fragment:yy,metalnessmap_pars_fragment:Sy,morphinstance_vertex:My,morphcolor_vertex:Ey,morphnormal_vertex:wy,morphtarget_pars_vertex:Ty,morphtarget_vertex:Ay,normal_fragment_begin:Cy,normal_fragment_maps:Ry,normal_pars_fragment:by,normal_pars_vertex:Py,normal_vertex:Ly,normalmap_pars_fragment:Ny,clearcoat_normal_fragment_begin:Dy,clearcoat_normal_fragment_maps:Uy,clearcoat_pars_fragment:Iy,iridescence_pars_fragment:Fy,opaque_fragment:Oy,packing:ky,premultiplied_alpha_fragment:zy,project_vertex:By,dithering_fragment:Hy,dithering_pars_fragment:Vy,roughnessmap_fragment:Gy,roughnessmap_pars_fragment:Wy,shadowmap_pars_fragment:jy,shadowmap_pars_vertex:Xy,shadowmap_vertex:qy,shadowmask_pars_fragment:Yy,skinbase_vertex:$y,skinning_pars_vertex:Ky,skinning_vertex:Qy,skinnormal_vertex:Zy,specularmap_fragment:Jy,specularmap_pars_fragment:eS,tonemapping_fragment:tS,tonemapping_pars_fragment:nS,transmission_fragment:iS,transmission_pars_fragment:rS,uv_pars_fragment:sS,uv_pars_vertex:oS,uv_vertex:aS,worldpos_vertex:lS,background_vert:cS,background_frag:uS,backgroundCube_vert:dS,backgroundCube_frag:fS,cube_vert:hS,cube_frag:pS,depth_vert:mS,depth_frag:gS,distanceRGBA_vert:vS,distanceRGBA_frag:_S,equirect_vert:xS,equirect_frag:yS,linedashed_vert:SS,linedashed_frag:MS,meshbasic_vert:ES,meshbasic_frag:wS,meshlambert_vert:TS,meshlambert_frag:AS,meshmatcap_vert:CS,meshmatcap_frag:RS,meshnormal_vert:bS,meshnormal_frag:PS,meshphong_vert:LS,meshphong_frag:NS,meshphysical_vert:DS,meshphysical_frag:US,meshtoon_vert:IS,meshtoon_frag:FS,points_vert:OS,points_frag:kS,shadow_vert:zS,shadow_frag:BS,sprite_vert:HS,sprite_frag:VS},Ce={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},fi={basic:{uniforms:_n([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:_n([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ht(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:_n([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:_n([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:_n([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new ht(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:_n([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:_n([Ce.points,Ce.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:_n([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:_n([Ce.common,Ce.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:_n([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:_n([Ce.sprite,Ce.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:_n([Ce.common,Ce.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:_n([Ce.lights,Ce.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};fi.physical={uniforms:_n([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const ul={r:0,b:0,g:0},Ir=new gi,GS=new Ot;function WS(s,e,n,r,a,c,u){const f=new ht(0);let h=c===!0?0:1,m,g,y=null,v=0,S=null;function A(N){let E=N.isScene===!0?N.background:null;return E&&E.isTexture&&(E=(N.backgroundBlurriness>0?n:e).get(E)),E}function T(N){let E=!1;const P=A(N);P===null?_(f,h):P&&P.isColor&&(_(P,1),E=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,u):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||E)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil)}function x(N,E){const P=A(E);P&&(P.isCubeTexture||P.mapping===El)?(g===void 0&&(g=new qn(new ko(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:zs(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(V,I,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Ir.copy(E.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(GS.makeRotationFromEuler(Ir)),g.material.toneMapped=Et.getTransfer(P.colorSpace)!==Lt,(y!==P||v!==P.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,y=P,v=P.version,S=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(m===void 0&&(m=new qn(new Al(2,2),new Rn({name:"BackgroundMaterial",uniforms:zs(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=P,m.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,m.material.toneMapped=Et.getTransfer(P.colorSpace)!==Lt,P.matrixAutoUpdate===!0&&P.updateMatrix(),m.material.uniforms.uvTransform.value.copy(P.matrix),(y!==P||v!==P.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,y=P,v=P.version,S=s.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function _(N,E){N.getRGB(ul,Xm(s)),r.buffers.color.setClear(ul.r,ul.g,ul.b,E,u)}return{getClearColor:function(){return f},setClearColor:function(N,E=1){f.set(N),h=E,_(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(N){h=N,_(f,h)},render:T,addToRenderList:x}}function jS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=v(null);let c=a,u=!1;function f(w,$,oe,H,le){let ae=!1;const ve=y(H,oe,$);c!==ve&&(c=ve,m(c.object)),ae=S(w,H,oe,le),ae&&A(w,H,oe,le),le!==null&&e.update(le,s.ELEMENT_ARRAY_BUFFER),(ae||u)&&(u=!1,P(w,$,oe,H),le!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function h(){return s.createVertexArray()}function m(w){return s.bindVertexArray(w)}function g(w){return s.deleteVertexArray(w)}function y(w,$,oe){const H=oe.wireframe===!0;let le=r[w.id];le===void 0&&(le={},r[w.id]=le);let ae=le[$.id];ae===void 0&&(ae={},le[$.id]=ae);let ve=ae[H];return ve===void 0&&(ve=v(h()),ae[H]=ve),ve}function v(w){const $=[],oe=[],H=[];for(let le=0;le<n;le++)$[le]=0,oe[le]=0,H[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:oe,attributeDivisors:H,object:w,attributes:{},index:null}}function S(w,$,oe,H){const le=c.attributes,ae=$.attributes;let ve=0;const fe=oe.getAttributes();for(const z in fe)if(fe[z].location>=0){const Z=le[z];let O=ae[z];if(O===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&(O=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&(O=w.instanceColor)),Z===void 0||Z.attribute!==O||O&&Z.data!==O.data)return!0;ve++}return c.attributesNum!==ve||c.index!==H}function A(w,$,oe,H){const le={},ae=$.attributes;let ve=0;const fe=oe.getAttributes();for(const z in fe)if(fe[z].location>=0){let Z=ae[z];Z===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&(Z=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&(Z=w.instanceColor));const O={};O.attribute=Z,Z&&Z.data&&(O.data=Z.data),le[z]=O,ve++}c.attributes=le,c.attributesNum=ve,c.index=H}function T(){const w=c.newAttributes;for(let $=0,oe=w.length;$<oe;$++)w[$]=0}function x(w){_(w,0)}function _(w,$){const oe=c.newAttributes,H=c.enabledAttributes,le=c.attributeDivisors;oe[w]=1,H[w]===0&&(s.enableVertexAttribArray(w),H[w]=1),le[w]!==$&&(s.vertexAttribDivisor(w,$),le[w]=$)}function N(){const w=c.newAttributes,$=c.enabledAttributes;for(let oe=0,H=$.length;oe<H;oe++)$[oe]!==w[oe]&&(s.disableVertexAttribArray(oe),$[oe]=0)}function E(w,$,oe,H,le,ae,ve){ve===!0?s.vertexAttribIPointer(w,$,oe,le,ae):s.vertexAttribPointer(w,$,oe,H,le,ae)}function P(w,$,oe,H){T();const le=H.attributes,ae=oe.getAttributes(),ve=$.defaultAttributeValues;for(const fe in ae){const z=ae[fe];if(z.location>=0){let se=le[fe];if(se===void 0&&(fe==="instanceMatrix"&&w.instanceMatrix&&(se=w.instanceMatrix),fe==="instanceColor"&&w.instanceColor&&(se=w.instanceColor)),se!==void 0){const Z=se.normalized,O=se.itemSize,ie=e.get(se);if(ie===void 0)continue;const Le=ie.buffer,K=ie.type,ue=ie.bytesPerElement,Se=K===s.INT||K===s.UNSIGNED_INT||se.gpuType===Pm;if(se.isInterleavedBufferAttribute){const ge=se.data,Ue=ge.stride,ze=se.offset;if(ge.isInstancedInterleavedBuffer){for(let X=0;X<z.locationSize;X++)_(z.location+X,ge.meshPerAttribute);w.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let X=0;X<z.locationSize;X++)x(z.location+X);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let X=0;X<z.locationSize;X++)E(z.location+X,O/z.locationSize,K,Z,Ue*ue,(ze+O/z.locationSize*X)*ue,Se)}else{if(se.isInstancedBufferAttribute){for(let ge=0;ge<z.locationSize;ge++)_(z.location+ge,se.meshPerAttribute);w.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ge=0;ge<z.locationSize;ge++)x(z.location+ge);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let ge=0;ge<z.locationSize;ge++)E(z.location+ge,O/z.locationSize,K,Z,O*ue,O/z.locationSize*ge*ue,Se)}}else if(ve!==void 0){const Z=ve[fe];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(z.location,Z);break;case 3:s.vertexAttrib3fv(z.location,Z);break;case 4:s.vertexAttrib4fv(z.location,Z);break;default:s.vertexAttrib1fv(z.location,Z)}}}}N()}function V(){W();for(const w in r){const $=r[w];for(const oe in $){const H=$[oe];for(const le in H)g(H[le].object),delete H[le];delete $[oe]}delete r[w]}}function I(w){if(r[w.id]===void 0)return;const $=r[w.id];for(const oe in $){const H=$[oe];for(const le in H)g(H[le].object),delete H[le];delete $[oe]}delete r[w.id]}function U(w){for(const $ in r){const oe=r[$];if(oe[w.id]===void 0)continue;const H=oe[w.id];for(const le in H)g(H[le].object),delete H[le];delete oe[w.id]}}function W(){L(),u=!0,c!==a&&(c=a,m(c.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:W,resetDefaultState:L,dispose:V,releaseStatesOfGeometry:I,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:x,disableUnusedAttributes:N}}function XS(s,e,n){let r;function a(m){r=m}function c(m,g){s.drawArrays(r,m,g),n.update(g,r,1)}function u(m,g,y){y!==0&&(s.drawArraysInstanced(r,m,g,y),n.update(g,r,y))}function f(m,g,y){if(y===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<y;S++)this.render(m[S],g[S]);else{v.multiDrawArraysWEBGL(r,m,0,g,0,y);let S=0;for(let A=0;A<y;A++)S+=g[A];n.update(S,r,1)}}function h(m,g,y,v){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let A=0;A<m.length;A++)u(m[A],g[A],v[A]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,g,0,v,0,y);let A=0;for(let T=0;T<y;T++)A+=g[T];for(let T=0;T<v.length;T++)n.update(A,r,v[T])}}this.setMode=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function qS(s,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(I){return!(I!==pi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const U=I===hr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==mr&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==dr&&!U)}function h(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=h(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const y=n.logarithmicDepthBuffer===!0,v=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),T=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=S>0,V=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:y,maxTextures:v,maxVertexTextures:S,maxTextureSize:A,maxCubemapSize:T,maxAttributes:x,maxVertexUniforms:_,maxVaryings:N,maxFragmentUniforms:E,vertexTextures:P,maxSamples:V}}function YS(s){const e=this;let n=null,r=0,a=!1,c=!1;const u=new Or,f=new ot,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(y,v){const S=y.length!==0||v||r!==0||a;return a=v,r=y.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,v){n=g(y,v,0)},this.setState=function(y,v,S){const A=y.clippingPlanes,T=y.clipIntersection,x=y.clipShadows,_=s.get(y);if(!a||A===null||A.length===0||c&&!x)c?g(null):m();else{const N=c?0:r,E=N*4;let P=_.clippingState||null;h.value=P,P=g(A,v,E,S);for(let V=0;V!==E;++V)P[V]=n[V];_.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=N}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(y,v,S,A){const T=y!==null?y.length:0;let x=null;if(T!==0){if(x=h.value,A!==!0||x===null){const _=S+T*4,N=v.matrixWorldInverse;f.getNormalMatrix(N),(x===null||x.length<_)&&(x=new Float32Array(_));for(let E=0,P=S;E!==T;++E,P+=4)u.copy(y[E]).applyMatrix4(N,f),u.normal.toArray(x,P),x[P+3]=u.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}function $S(s){let e=new WeakMap;function n(u,f){return f===Ju?u.mapping=Fs:f===ed&&(u.mapping=Os),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Ju||f===ed)if(e.has(u)){const h=e.get(u).texture;return n(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const m=new ox(h.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",a),n(m.texture,u.mapping)}else return null}}return u}function a(u){const f=u.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class dd extends qm{constructor(e=-1,n=1,r=1,a=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,u=r+e,f=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ns=4,qp=[.125,.215,.35,.446,.526,.582],Br=20,Hu=new dd,Yp=new ht;let Vu=null,Gu=0,Wu=0,ju=!1;const kr=(1+Math.sqrt(5))/2,Ls=1/kr,$p=[new Y(-kr,Ls,0),new Y(kr,Ls,0),new Y(-Ls,0,kr),new Y(Ls,0,kr),new Y(0,kr,-Ls),new Y(0,kr,Ls),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class Kp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Vu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),Wu=this._renderer.getActiveMipmapLevel(),ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vu,Gu,Wu),this._renderer.xr.enabled=ju,e.scissorTest=!1,dl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Fs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),Wu=this._renderer.getActiveMipmapLevel(),ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:si,minFilter:si,generateMipmaps:!1,type:hr,format:pi,colorSpace:gr,depthBuffer:!1},a=Qp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qp(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=KS(c)),this._blurMaterial=QS(c,e,n)}return a}_compileMaterial(e){const n=new qn(this._lodPlanes[0],e);this._renderer.compile(n,Hu)}_sceneToCubeUV(e,n,r,a){const f=new jn(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,v=g.toneMapping;g.getClearColor(Yp),g.toneMapping=fr,g.autoClear=!1;const S=new cd({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),A=new qn(new ko,S);let T=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,T=!0):(S.color.copy(Yp),T=!0);for(let _=0;_<6;_++){const N=_%3;N===0?(f.up.set(0,h[_],0),f.lookAt(m[_],0,0)):N===1?(f.up.set(0,0,h[_]),f.lookAt(0,m[_],0)):(f.up.set(0,h[_],0),f.lookAt(0,0,m[_]));const E=this._cubeSize;dl(a,N*E,_>2?E:0,E,E),g.setRenderTarget(a),T&&g.render(A,f),g.render(e,f)}A.geometry.dispose(),A.material.dispose(),g.toneMapping=v,g.autoClear=y,e.background=x}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Fs||e.mapping===Os;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zp());const c=a?this._cubemapMaterial:this._equirectMaterial,u=new qn(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const h=this._cubeSize;dl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(u,Hu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=$p[(a-c-1)%$p.length];this._blur(e,c-1,c,u,f)}n.autoClear=r}_blur(e,n,r,a,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,a,"latitudinal",c),this._halfBlur(u,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,u,f){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new qn(this._lodPlanes[a],m),v=m.uniforms,S=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Br-1),T=c/A,x=isFinite(c)?1+Math.floor(g*T):Br;x>Br&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Br}`);const _=[];let N=0;for(let U=0;U<Br;++U){const W=U/T,L=Math.exp(-W*W/2);_.push(L),U===0?N+=L:U<x&&(N+=2*L)}for(let U=0;U<_.length;U++)_[U]=_[U]/N;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=_,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:E}=this;v.dTheta.value=A,v.mipInt.value=E-r;const P=this._sizeLods[a],V=3*P*(a>E-Ns?a-E+Ns:0),I=4*(this._cubeSize-P);dl(n,V,I,3*P,2*P),h.setRenderTarget(n),h.render(y,Hu)}}function KS(s){const e=[],n=[],r=[];let a=s;const c=s-Ns+1+qp.length;for(let u=0;u<c;u++){const f=Math.pow(2,a);n.push(f);let h=1/f;u>s-Ns?h=qp[u-s+Ns-1]:u===0&&(h=0),r.push(h);const m=1/(f-2),g=-m,y=1+m,v=[g,g,y,g,y,y,g,g,y,y,g,y],S=6,A=6,T=3,x=2,_=1,N=new Float32Array(T*A*S),E=new Float32Array(x*A*S),P=new Float32Array(_*A*S);for(let I=0;I<S;I++){const U=I%3*2/3-1,W=I>2?0:-1,L=[U,W,0,U+2/3,W,0,U+2/3,W+1,0,U,W,0,U+2/3,W+1,0,U,W+1,0];N.set(L,T*A*I),E.set(v,x*A*I);const w=[I,I,I,I,I,I];P.set(w,_*A*I)}const V=new Yn;V.setAttribute("position",new mi(N,T)),V.setAttribute("uv",new mi(E,x)),V.setAttribute("faceIndex",new mi(P,_)),e.push(V),a>Ns&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Qp(s,e,n){const r=new oi(s,e,n);return r.texture.mapping=El,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function dl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function QS(s,e,n){const r=new Float32Array(Br),a=new Y(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:fd(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Zp(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fd(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Jp(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function fd(){return`

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
	`}function ZS(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const h=f.mapping,m=h===Ju||h===ed,g=h===Fs||h===Os;if(m||g){let y=e.get(f);const v=y!==void 0?y.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new Kp(s)),y=m?n.fromEquirectangular(f,y):n.fromCubemap(f,y),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),y.texture;if(y!==void 0)return y.texture;{const S=f.image;return m&&S&&S.height>0||g&&S&&a(S)?(n===null&&(n=new Kp(s)),y=m?n.fromEquirectangular(f):n.fromCubemap(f),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),f.addEventListener("dispose",c),y.texture):null}}}return f}function a(f){let h=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&h++;return h===m}function c(f){const h=f.target;h.removeEventListener("dispose",c);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function JS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function eM(s,e,n,r){const a={},c=new WeakMap;function u(y){const v=y.target;v.index!==null&&e.remove(v.index);for(const A in v.attributes)e.remove(v.attributes[A]);for(const A in v.morphAttributes){const T=v.morphAttributes[A];for(let x=0,_=T.length;x<_;x++)e.remove(T[x])}v.removeEventListener("dispose",u),delete a[v.id];const S=c.get(v);S&&(e.remove(S),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(y,v){return a[v.id]===!0||(v.addEventListener("dispose",u),a[v.id]=!0,n.memory.geometries++),v}function h(y){const v=y.attributes;for(const A in v)e.update(v[A],s.ARRAY_BUFFER);const S=y.morphAttributes;for(const A in S){const T=S[A];for(let x=0,_=T.length;x<_;x++)e.update(T[x],s.ARRAY_BUFFER)}}function m(y){const v=[],S=y.index,A=y.attributes.position;let T=0;if(S!==null){const N=S.array;T=S.version;for(let E=0,P=N.length;E<P;E+=3){const V=N[E+0],I=N[E+1],U=N[E+2];v.push(V,I,I,U,U,V)}}else if(A!==void 0){const N=A.array;T=A.version;for(let E=0,P=N.length/3-1;E<P;E+=3){const V=E+0,I=E+1,U=E+2;v.push(V,I,I,U,U,V)}}else return;const x=new(km(v)?jm:Wm)(v,1);x.version=T;const _=c.get(y);_&&e.remove(_),c.set(y,x)}function g(y){const v=c.get(y);if(v){const S=y.index;S!==null&&v.version<S.version&&m(y)}else m(y);return c.get(y)}return{get:f,update:h,getWireframeAttribute:g}}function tM(s,e,n){let r;function a(v){r=v}let c,u;function f(v){c=v.type,u=v.bytesPerElement}function h(v,S){s.drawElements(r,S,c,v*u),n.update(S,r,1)}function m(v,S,A){A!==0&&(s.drawElementsInstanced(r,S,c,v*u,A),n.update(S,r,A))}function g(v,S,A){if(A===0)return;const T=e.get("WEBGL_multi_draw");if(T===null)for(let x=0;x<A;x++)this.render(v[x]/u,S[x]);else{T.multiDrawElementsWEBGL(r,S,0,c,v,0,A);let x=0;for(let _=0;_<A;_++)x+=S[_];n.update(x,r,1)}}function y(v,S,A,T){if(A===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<v.length;_++)m(v[_]/u,S[_],T[_]);else{x.multiDrawElementsInstancedWEBGL(r,S,0,c,v,0,T,0,A);let _=0;for(let N=0;N<A;N++)_+=S[N];for(let N=0;N<T.length;N++)n.update(_,r,T[N])}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=y}function nM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function iM(s,e,n){const r=new WeakMap,a=new nn;function c(u,f,h){const m=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=g!==void 0?g.length:0;let v=r.get(f);if(v===void 0||v.count!==y){let w=function(){W.dispose(),r.delete(f),f.removeEventListener("dispose",w)};var S=w;v!==void 0&&v.texture.dispose();const A=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],E=f.morphAttributes.color||[];let P=0;A===!0&&(P=1),T===!0&&(P=2),x===!0&&(P=3);let V=f.attributes.position.count*P,I=1;V>e.maxTextureSize&&(I=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const U=new Float32Array(V*I*4*y),W=new Bm(U,V,I,y);W.type=dr,W.needsUpdate=!0;const L=P*4;for(let $=0;$<y;$++){const oe=_[$],H=N[$],le=E[$],ae=V*I*4*$;for(let ve=0;ve<oe.count;ve++){const fe=ve*L;A===!0&&(a.fromBufferAttribute(oe,ve),U[ae+fe+0]=a.x,U[ae+fe+1]=a.y,U[ae+fe+2]=a.z,U[ae+fe+3]=0),T===!0&&(a.fromBufferAttribute(H,ve),U[ae+fe+4]=a.x,U[ae+fe+5]=a.y,U[ae+fe+6]=a.z,U[ae+fe+7]=0),x===!0&&(a.fromBufferAttribute(le,ve),U[ae+fe+8]=a.x,U[ae+fe+9]=a.y,U[ae+fe+10]=a.z,U[ae+fe+11]=le.itemSize===4?a.w:1)}}v={count:y,texture:W,size:new Ke(V,I)},r.set(f,v),f.addEventListener("dispose",w)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let A=0;for(let x=0;x<m.length;x++)A+=m[x];const T=f.morphTargetsRelative?1:1-A;h.getUniforms().setValue(s,"morphTargetBaseInfluence",T),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function rM(s,e,n,r){let a=new WeakMap;function c(h){const m=r.render.frame,g=h.geometry,y=e.get(h,g);if(a.get(y)!==m&&(e.update(y),a.set(y,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const v=h.skeleton;a.get(v)!==m&&(v.update(),a.set(v,m))}return y}function u(){a=new WeakMap}function f(h){const m=h.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}class Km extends Pn{constructor(e,n,r,a,c,u,f,h,m,g){if(g=g!==void 0?g:Us,g!==Us&&g!==Do)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Us&&(r=ks),r===void 0&&g===Do&&(r=Uo),super(null,a,c,u,f,h,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:Xn,this.minFilter=h!==void 0?h:Xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Qm=new Pn,Zm=new Km(1,1);Zm.compareFunction=Om;const Jm=new Bm,eg=new j_,tg=new Ym,em=[],tm=[],nm=new Float32Array(16),im=new Float32Array(9),rm=new Float32Array(4);function Gs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let c=em[a];if(c===void 0&&(c=new Float32Array(a),em[a]=c),e!==0){r.toArray(c,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(c,f)}return c}function Yt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function $t(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Cl(s,e){let n=tm[e];n===void 0&&(n=new Int32Array(e),tm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function sM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function oM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;s.uniform2fv(this.addr,e),$t(n,e)}}function aM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Yt(n,e))return;s.uniform3fv(this.addr,e),$t(n,e)}}function lM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;s.uniform4fv(this.addr,e),$t(n,e)}}function cM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Yt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),$t(n,e)}else{if(Yt(n,r))return;rm.set(r),s.uniformMatrix2fv(this.addr,!1,rm),$t(n,r)}}function uM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Yt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),$t(n,e)}else{if(Yt(n,r))return;im.set(r),s.uniformMatrix3fv(this.addr,!1,im),$t(n,r)}}function dM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Yt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),$t(n,e)}else{if(Yt(n,r))return;nm.set(r),s.uniformMatrix4fv(this.addr,!1,nm),$t(n,r)}}function fM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function hM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;s.uniform2iv(this.addr,e),$t(n,e)}}function pM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;s.uniform3iv(this.addr,e),$t(n,e)}}function mM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;s.uniform4iv(this.addr,e),$t(n,e)}}function gM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function vM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;s.uniform2uiv(this.addr,e),$t(n,e)}}function _M(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;s.uniform3uiv(this.addr,e),$t(n,e)}}function xM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;s.uniform4uiv(this.addr,e),$t(n,e)}}function yM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);const c=this.type===s.SAMPLER_2D_SHADOW?Zm:Qm;n.setTexture2D(e||c,a)}function SM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||eg,a)}function MM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||tg,a)}function EM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Jm,a)}function wM(s){switch(s){case 5126:return sM;case 35664:return oM;case 35665:return aM;case 35666:return lM;case 35674:return cM;case 35675:return uM;case 35676:return dM;case 5124:case 35670:return fM;case 35667:case 35671:return hM;case 35668:case 35672:return pM;case 35669:case 35673:return mM;case 5125:return gM;case 36294:return vM;case 36295:return _M;case 36296:return xM;case 35678:case 36198:case 36298:case 36306:case 35682:return yM;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return MM;case 36289:case 36303:case 36311:case 36292:return EM}}function TM(s,e){s.uniform1fv(this.addr,e)}function AM(s,e){const n=Gs(e,this.size,2);s.uniform2fv(this.addr,n)}function CM(s,e){const n=Gs(e,this.size,3);s.uniform3fv(this.addr,n)}function RM(s,e){const n=Gs(e,this.size,4);s.uniform4fv(this.addr,n)}function bM(s,e){const n=Gs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function PM(s,e){const n=Gs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function LM(s,e){const n=Gs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function NM(s,e){s.uniform1iv(this.addr,e)}function DM(s,e){s.uniform2iv(this.addr,e)}function UM(s,e){s.uniform3iv(this.addr,e)}function IM(s,e){s.uniform4iv(this.addr,e)}function FM(s,e){s.uniform1uiv(this.addr,e)}function OM(s,e){s.uniform2uiv(this.addr,e)}function kM(s,e){s.uniform3uiv(this.addr,e)}function zM(s,e){s.uniform4uiv(this.addr,e)}function BM(s,e,n){const r=this.cache,a=e.length,c=Cl(n,a);Yt(r,c)||(s.uniform1iv(this.addr,c),$t(r,c));for(let u=0;u!==a;++u)n.setTexture2D(e[u]||Qm,c[u])}function HM(s,e,n){const r=this.cache,a=e.length,c=Cl(n,a);Yt(r,c)||(s.uniform1iv(this.addr,c),$t(r,c));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||eg,c[u])}function VM(s,e,n){const r=this.cache,a=e.length,c=Cl(n,a);Yt(r,c)||(s.uniform1iv(this.addr,c),$t(r,c));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||tg,c[u])}function GM(s,e,n){const r=this.cache,a=e.length,c=Cl(n,a);Yt(r,c)||(s.uniform1iv(this.addr,c),$t(r,c));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||Jm,c[u])}function WM(s){switch(s){case 5126:return TM;case 35664:return AM;case 35665:return CM;case 35666:return RM;case 35674:return bM;case 35675:return PM;case 35676:return LM;case 5124:case 35670:return NM;case 35667:case 35671:return DM;case 35668:case 35672:return UM;case 35669:case 35673:return IM;case 5125:return FM;case 36294:return OM;case 36295:return kM;case 36296:return zM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return HM;case 35680:case 36300:case 36308:case 36293:return VM;case 36289:case 36303:case 36311:case 36292:return GM}}class jM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=wM(n.type)}}class XM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=WM(n.type)}}class qM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,u=a.length;c!==u;++c){const f=a[c];f.setValue(e,n[f.id],r)}}}const Xu=/(\w+)(\])?(\[|\.)?/g;function sm(s,e){s.seq.push(e),s.map[e.id]=e}function YM(s,e,n){const r=s.name,a=r.length;for(Xu.lastIndex=0;;){const c=Xu.exec(r),u=Xu.lastIndex;let f=c[1];const h=c[2]==="]",m=c[3];if(h&&(f=f|0),m===void 0||m==="["&&u+2===a){sm(n,m===void 0?new jM(f,s,e):new XM(f,s,e));break}else{let y=n.map[f];y===void 0&&(y=new qM(f),sm(n,y)),n=y}}}class ml{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),u=e.getUniformLocation(n,c.name);YM(c,u,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,u=n.length;c!==u;++c){const f=n[c],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const u=e[a];u.id in n&&r.push(u)}return r}}function om(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const $M=37297;let KM=0;function QM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=a;u<c;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}function ZM(s){const e=Et.getPrimaries(Et.workingColorSpace),n=Et.getPrimaries(s);let r;switch(e===n?r="":e===xl&&n===_l?r="LinearDisplayP3ToLinearSRGB":e===_l&&n===xl&&(r="LinearSRGBToLinearDisplayP3"),s){case gr:case wl:return[r,"LinearTransferOETF"];case di:case ld:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function am(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+QM(s.getShaderSource(e),u)}else return a}function JM(s,e){const n=ZM(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function eE(s,e){let n;switch(e){case c_:n="Linear";break;case u_:n="Reinhard";break;case d_:n="OptimizedCineon";break;case f_:n="ACESFilmic";break;case p_:n="AgX";break;case m_:n="Neutral";break;case h_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function tE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function nE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function iE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=s.getActiveAttrib(e,a),u=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function Lo(s){return s!==""}function lm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rE=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(s){return s.replace(rE,oE)}const sE=new Map;function oE(s,e){let n=st[e];if(n===void 0){const r=sE.get(e);if(r!==void 0)n=st[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return rd(n)}const aE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function um(s){return s.replace(aE,lE)}function lE(s,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function dm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Am?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===I0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function uE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Fs:case Os:e="ENVMAP_TYPE_CUBE";break;case El:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function fE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Cm:e="ENVMAP_BLENDING_MULTIPLY";break;case a_:e="ENVMAP_BLENDING_MIX";break;case l_:e="ENVMAP_BLENDING_ADD";break}return e}function hE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function pE(s,e,n,r){const a=s.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const h=cE(n),m=uE(n),g=dE(n),y=fE(n),v=hE(n),S=tE(n),A=nE(c),T=a.createProgram();let x,_,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(Lo).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(Lo).join(`
`),_.length>0&&(_+=`
`)):(x=[dm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),_=[dm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+y:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fr?"#define TONE_MAPPING":"",n.toneMapping!==fr?st.tonemapping_pars_fragment:"",n.toneMapping!==fr?eE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,JM("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Lo).join(`
`)),u=rd(u),u=lm(u,n),u=cm(u,n),f=rd(f),f=lm(f,n),f=cm(f,n),u=um(u),f=um(f),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",n.glslVersion===Cp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=N+x+u,P=N+_+f,V=om(a,a.VERTEX_SHADER,E),I=om(a,a.FRAGMENT_SHADER,P);a.attachShader(T,V),a.attachShader(T,I),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function U($){if(s.debug.checkShaderErrors){const oe=a.getProgramInfoLog(T).trim(),H=a.getShaderInfoLog(V).trim(),le=a.getShaderInfoLog(I).trim();let ae=!0,ve=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(ae=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,V,I);else{const fe=am(a,V,"vertex"),z=am(a,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+oe+`
`+fe+`
`+z)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(H===""||le==="")&&(ve=!1);ve&&($.diagnostics={runnable:ae,programLog:oe,vertexShader:{log:H,prefix:x},fragmentShader:{log:le,prefix:_}})}a.deleteShader(V),a.deleteShader(I),W=new ml(a,T),L=iE(a,T)}let W;this.getUniforms=function(){return W===void 0&&U(this),W};let L;this.getAttributes=function(){return L===void 0&&U(this),L};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=a.getProgramParameter(T,$M)),w},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=KM++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=V,this.fragmentShader=I,this}let mE=0;class gE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new vE(e),n.set(e,r)),r}}class vE{constructor(e){this.id=mE++,this.code=e,this.usedTimes=0}}function _E(s,e,n,r,a,c,u){const f=new Vm,h=new gE,m=new Set,g=[],y=a.logarithmicDepthBuffer,v=a.vertexTextures;let S=a.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(L){return m.add(L),L===0?"uv":`uv${L}`}function x(L,w,$,oe,H){const le=oe.fog,ae=H.geometry,ve=L.isMeshStandardMaterial?oe.environment:null,fe=(L.isMeshStandardMaterial?n:e).get(L.envMap||ve),z=fe&&fe.mapping===El?fe.image.height:null,se=A[L.type];L.precision!==null&&(S=a.getMaxPrecision(L.precision),S!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",S,"instead."));const Z=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,O=Z!==void 0?Z.length:0;let ie=0;ae.morphAttributes.position!==void 0&&(ie=1),ae.morphAttributes.normal!==void 0&&(ie=2),ae.morphAttributes.color!==void 0&&(ie=3);let Le,K,ue,Se;if(se){const vt=fi[se];Le=vt.vertexShader,K=vt.fragmentShader}else Le=L.vertexShader,K=L.fragmentShader,h.update(L),ue=h.getVertexShaderID(L),Se=h.getFragmentShaderID(L);const ge=s.getRenderTarget(),Ue=H.isInstancedMesh===!0,ze=H.isBatchedMesh===!0,X=!!L.map,yt=!!L.matcap,Xe=!!fe,xt=!!L.aoMap,qe=!!L.lightMap,ut=!!L.bumpMap,it=!!L.normalMap,lt=!!L.displacementMap,At=!!L.emissiveMap,F=!!L.metalnessMap,C=!!L.roughnessMap,re=L.anisotropy>0,de=L.clearcoat>0,_e=L.dispersion>0,ye=L.iridescence>0,Ge=L.sheen>0,Re=L.transmission>0,Te=re&&!!L.anisotropyMap,Je=de&&!!L.clearcoatMap,Ee=de&&!!L.clearcoatNormalMap,Ve=de&&!!L.clearcoatRoughnessMap,at=ye&&!!L.iridescenceMap,Ye=ye&&!!L.iridescenceThicknessMap,Ne=Ge&&!!L.sheenColorMap,nt=Ge&&!!L.sheenRoughnessMap,dt=!!L.specularMap,Ct=!!L.specularColorMap,tt=!!L.specularIntensityMap,G=Re&&!!L.transmissionMap,he=Re&&!!L.thicknessMap,ce=!!L.gradientMap,we=!!L.alphaMap,be=L.alphaTest>0,pt=!!L.alphaHash,Mt=!!L.extensions;let Rt=fr;L.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Rt=s.toneMapping);const Gt={shaderID:se,shaderType:L.type,shaderName:L.name,vertexShader:Le,fragmentShader:K,defines:L.defines,customVertexShaderID:ue,customFragmentShaderID:Se,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:S,batching:ze,instancing:Ue,instancingColor:Ue&&H.instanceColor!==null,instancingMorph:Ue&&H.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:gr,alphaToCoverage:!!L.alphaToCoverage,map:X,matcap:yt,envMap:Xe,envMapMode:Xe&&fe.mapping,envMapCubeUVHeight:z,aoMap:xt,lightMap:qe,bumpMap:ut,normalMap:it,displacementMap:v&&lt,emissiveMap:At,normalMapObjectSpace:it&&L.normalMapType===b_,normalMapTangentSpace:it&&L.normalMapType===Fm,metalnessMap:F,roughnessMap:C,anisotropy:re,anisotropyMap:Te,clearcoat:de,clearcoatMap:Je,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Ve,dispersion:_e,iridescence:ye,iridescenceMap:at,iridescenceThicknessMap:Ye,sheen:Ge,sheenColorMap:Ne,sheenRoughnessMap:nt,specularMap:dt,specularColorMap:Ct,specularIntensityMap:tt,transmission:Re,transmissionMap:G,thicknessMap:he,gradientMap:ce,opaque:L.transparent===!1&&L.blending===Ds&&L.alphaToCoverage===!1,alphaMap:we,alphaTest:be,alphaHash:pt,combine:L.combine,mapUv:X&&T(L.map.channel),aoMapUv:xt&&T(L.aoMap.channel),lightMapUv:qe&&T(L.lightMap.channel),bumpMapUv:ut&&T(L.bumpMap.channel),normalMapUv:it&&T(L.normalMap.channel),displacementMapUv:lt&&T(L.displacementMap.channel),emissiveMapUv:At&&T(L.emissiveMap.channel),metalnessMapUv:F&&T(L.metalnessMap.channel),roughnessMapUv:C&&T(L.roughnessMap.channel),anisotropyMapUv:Te&&T(L.anisotropyMap.channel),clearcoatMapUv:Je&&T(L.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&T(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&T(L.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&T(L.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&T(L.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&T(L.sheenColorMap.channel),sheenRoughnessMapUv:nt&&T(L.sheenRoughnessMap.channel),specularMapUv:dt&&T(L.specularMap.channel),specularColorMapUv:Ct&&T(L.specularColorMap.channel),specularIntensityMapUv:tt&&T(L.specularIntensityMap.channel),transmissionMapUv:G&&T(L.transmissionMap.channel),thicknessMapUv:he&&T(L.thicknessMap.channel),alphaMapUv:we&&T(L.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(it||re),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ae.attributes.uv&&(X||we),fog:!!le,useFog:L.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:H.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:L.dithering,shadowMapEnabled:s.shadowMap.enabled&&$.length>0,shadowMapType:s.shadowMap.type,toneMapping:Rt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:X&&L.map.isVideoTexture===!0&&Et.getTransfer(L.map.colorSpace)===Lt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Di,flipSided:L.side===bn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:Mt&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Mt&&L.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Gt.vertexUv1s=m.has(1),Gt.vertexUv2s=m.has(2),Gt.vertexUv3s=m.has(3),m.clear(),Gt}function _(L){const w=[];if(L.shaderID?w.push(L.shaderID):(w.push(L.customVertexShaderID),w.push(L.customFragmentShaderID)),L.defines!==void 0)for(const $ in L.defines)w.push($),w.push(L.defines[$]);return L.isRawShaderMaterial===!1&&(N(w,L),E(w,L),w.push(s.outputColorSpace)),w.push(L.customProgramCacheKey),w.join()}function N(L,w){L.push(w.precision),L.push(w.outputColorSpace),L.push(w.envMapMode),L.push(w.envMapCubeUVHeight),L.push(w.mapUv),L.push(w.alphaMapUv),L.push(w.lightMapUv),L.push(w.aoMapUv),L.push(w.bumpMapUv),L.push(w.normalMapUv),L.push(w.displacementMapUv),L.push(w.emissiveMapUv),L.push(w.metalnessMapUv),L.push(w.roughnessMapUv),L.push(w.anisotropyMapUv),L.push(w.clearcoatMapUv),L.push(w.clearcoatNormalMapUv),L.push(w.clearcoatRoughnessMapUv),L.push(w.iridescenceMapUv),L.push(w.iridescenceThicknessMapUv),L.push(w.sheenColorMapUv),L.push(w.sheenRoughnessMapUv),L.push(w.specularMapUv),L.push(w.specularColorMapUv),L.push(w.specularIntensityMapUv),L.push(w.transmissionMapUv),L.push(w.thicknessMapUv),L.push(w.combine),L.push(w.fogExp2),L.push(w.sizeAttenuation),L.push(w.morphTargetsCount),L.push(w.morphAttributeCount),L.push(w.numDirLights),L.push(w.numPointLights),L.push(w.numSpotLights),L.push(w.numSpotLightMaps),L.push(w.numHemiLights),L.push(w.numRectAreaLights),L.push(w.numDirLightShadows),L.push(w.numPointLightShadows),L.push(w.numSpotLightShadows),L.push(w.numSpotLightShadowsWithMaps),L.push(w.numLightProbes),L.push(w.shadowMapType),L.push(w.toneMapping),L.push(w.numClippingPlanes),L.push(w.numClipIntersection),L.push(w.depthPacking)}function E(L,w){f.disableAll(),w.supportsVertexTextures&&f.enable(0),w.instancing&&f.enable(1),w.instancingColor&&f.enable(2),w.instancingMorph&&f.enable(3),w.matcap&&f.enable(4),w.envMap&&f.enable(5),w.normalMapObjectSpace&&f.enable(6),w.normalMapTangentSpace&&f.enable(7),w.clearcoat&&f.enable(8),w.iridescence&&f.enable(9),w.alphaTest&&f.enable(10),w.vertexColors&&f.enable(11),w.vertexAlphas&&f.enable(12),w.vertexUv1s&&f.enable(13),w.vertexUv2s&&f.enable(14),w.vertexUv3s&&f.enable(15),w.vertexTangents&&f.enable(16),w.anisotropy&&f.enable(17),w.alphaHash&&f.enable(18),w.batching&&f.enable(19),w.dispersion&&f.enable(20),L.push(f.mask),f.disableAll(),w.fog&&f.enable(0),w.useFog&&f.enable(1),w.flatShading&&f.enable(2),w.logarithmicDepthBuffer&&f.enable(3),w.skinning&&f.enable(4),w.morphTargets&&f.enable(5),w.morphNormals&&f.enable(6),w.morphColors&&f.enable(7),w.premultipliedAlpha&&f.enable(8),w.shadowMapEnabled&&f.enable(9),w.useLegacyLights&&f.enable(10),w.doubleSided&&f.enable(11),w.flipSided&&f.enable(12),w.useDepthPacking&&f.enable(13),w.dithering&&f.enable(14),w.transmission&&f.enable(15),w.sheen&&f.enable(16),w.opaque&&f.enable(17),w.pointsUvs&&f.enable(18),w.decodeVideoTexture&&f.enable(19),w.alphaToCoverage&&f.enable(20),L.push(f.mask)}function P(L){const w=A[L.type];let $;if(w){const oe=fi[w];$=Ml.clone(oe.uniforms)}else $=L.uniforms;return $}function V(L,w){let $;for(let oe=0,H=g.length;oe<H;oe++){const le=g[oe];if(le.cacheKey===w){$=le,++$.usedTimes;break}}return $===void 0&&($=new pE(s,w,L,c),g.push($)),$}function I(L){if(--L.usedTimes===0){const w=g.indexOf(L);g[w]=g[g.length-1],g.pop(),L.destroy()}}function U(L){h.remove(L)}function W(){h.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:P,acquireProgram:V,releaseProgram:I,releaseShaderCache:U,programs:g,dispose:W}}function xE(){let s=new WeakMap;function e(c){let u=s.get(c);return u===void 0&&(u={},s.set(c,u)),u}function n(c){s.delete(c)}function r(c,u,f){s.get(c)[u]=f}function a(){s=new WeakMap}return{get:e,remove:n,update:r,dispose:a}}function yE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function fm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function hm(){const s=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function u(y,v,S,A,T,x){let _=s[e];return _===void 0?(_={id:y.id,object:y,geometry:v,material:S,groupOrder:A,renderOrder:y.renderOrder,z:T,group:x},s[e]=_):(_.id=y.id,_.object=y,_.geometry=v,_.material=S,_.groupOrder=A,_.renderOrder=y.renderOrder,_.z=T,_.group=x),e++,_}function f(y,v,S,A,T,x){const _=u(y,v,S,A,T,x);S.transmission>0?r.push(_):S.transparent===!0?a.push(_):n.push(_)}function h(y,v,S,A,T,x){const _=u(y,v,S,A,T,x);S.transmission>0?r.unshift(_):S.transparent===!0?a.unshift(_):n.unshift(_)}function m(y,v){n.length>1&&n.sort(y||yE),r.length>1&&r.sort(v||fm),a.length>1&&a.sort(v||fm)}function g(){for(let y=e,v=s.length;y<v;y++){const S=s[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:f,unshift:h,finish:g,sort:m}}function SE(){let s=new WeakMap;function e(r,a){const c=s.get(r);let u;return c===void 0?(u=new hm,s.set(r,[u])):a>=c.length?(u=new hm,c.push(u)):u=c[a],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function ME(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new ht};break;case"SpotLight":n={position:new Y,direction:new Y,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new ht,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":n={color:new ht,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=n,n}}}function EE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let wE=0;function TE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function AE(s){const e=new ME,n=EE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Y);const a=new Y,c=new Ot,u=new Ot;function f(m,g){let y=0,v=0,S=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let A=0,T=0,x=0,_=0,N=0,E=0,P=0,V=0,I=0,U=0,W=0;m.sort(TE);const L=g===!0?Math.PI:1;for(let $=0,oe=m.length;$<oe;$++){const H=m[$],le=H.color,ae=H.intensity,ve=H.distance,fe=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)y+=le.r*ae*L,v+=le.g*ae*L,S+=le.b*ae*L;else if(H.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(H.sh.coefficients[z],ae);W++}else if(H.isDirectionalLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity*L),H.castShadow){const se=H.shadow,Z=n.get(H);Z.shadowBias=se.bias,Z.shadowNormalBias=se.normalBias,Z.shadowRadius=se.radius,Z.shadowMapSize=se.mapSize,r.directionalShadow[A]=Z,r.directionalShadowMap[A]=fe,r.directionalShadowMatrix[A]=H.shadow.matrix,E++}r.directional[A]=z,A++}else if(H.isSpotLight){const z=e.get(H);z.position.setFromMatrixPosition(H.matrixWorld),z.color.copy(le).multiplyScalar(ae*L),z.distance=ve,z.coneCos=Math.cos(H.angle),z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),z.decay=H.decay,r.spot[x]=z;const se=H.shadow;if(H.map&&(r.spotLightMap[I]=H.map,I++,se.updateMatrices(H),H.castShadow&&U++),r.spotLightMatrix[x]=se.matrix,H.castShadow){const Z=n.get(H);Z.shadowBias=se.bias,Z.shadowNormalBias=se.normalBias,Z.shadowRadius=se.radius,Z.shadowMapSize=se.mapSize,r.spotShadow[x]=Z,r.spotShadowMap[x]=fe,V++}x++}else if(H.isRectAreaLight){const z=e.get(H);z.color.copy(le).multiplyScalar(ae),z.halfWidth.set(H.width*.5,0,0),z.halfHeight.set(0,H.height*.5,0),r.rectArea[_]=z,_++}else if(H.isPointLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity*L),z.distance=H.distance,z.decay=H.decay,H.castShadow){const se=H.shadow,Z=n.get(H);Z.shadowBias=se.bias,Z.shadowNormalBias=se.normalBias,Z.shadowRadius=se.radius,Z.shadowMapSize=se.mapSize,Z.shadowCameraNear=se.camera.near,Z.shadowCameraFar=se.camera.far,r.pointShadow[T]=Z,r.pointShadowMap[T]=fe,r.pointShadowMatrix[T]=H.shadow.matrix,P++}r.point[T]=z,T++}else if(H.isHemisphereLight){const z=e.get(H);z.skyColor.copy(H.color).multiplyScalar(ae*L),z.groundColor.copy(H.groundColor).multiplyScalar(ae*L),r.hemi[N]=z,N++}}_>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2)),r.ambient[0]=y,r.ambient[1]=v,r.ambient[2]=S;const w=r.hash;(w.directionalLength!==A||w.pointLength!==T||w.spotLength!==x||w.rectAreaLength!==_||w.hemiLength!==N||w.numDirectionalShadows!==E||w.numPointShadows!==P||w.numSpotShadows!==V||w.numSpotMaps!==I||w.numLightProbes!==W)&&(r.directional.length=A,r.spot.length=x,r.rectArea.length=_,r.point.length=T,r.hemi.length=N,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=V,r.spotShadowMap.length=V,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=V+I-U,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=W,w.directionalLength=A,w.pointLength=T,w.spotLength=x,w.rectAreaLength=_,w.hemiLength=N,w.numDirectionalShadows=E,w.numPointShadows=P,w.numSpotShadows=V,w.numSpotMaps=I,w.numLightProbes=W,r.version=wE++)}function h(m,g){let y=0,v=0,S=0,A=0,T=0;const x=g.matrixWorldInverse;for(let _=0,N=m.length;_<N;_++){const E=m[_];if(E.isDirectionalLight){const P=r.directional[y];P.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(x),y++}else if(E.isSpotLight){const P=r.spot[S];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(x),S++}else if(E.isRectAreaLight){const P=r.rectArea[A];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(x),u.identity(),c.copy(E.matrixWorld),c.premultiply(x),u.extractRotation(c),P.halfWidth.set(E.width*.5,0,0),P.halfHeight.set(0,E.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),A++}else if(E.isPointLight){const P=r.point[v];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(x),v++}else if(E.isHemisphereLight){const P=r.hemi[T];P.direction.setFromMatrixPosition(E.matrixWorld),P.direction.transformDirection(x),T++}}}return{setup:f,setupView:h,state:r}}function pm(s){const e=new AE(s),n=[],r=[];function a(g){m.camera=g,n.length=0,r.length=0}function c(g){n.push(g)}function u(g){r.push(g)}function f(g){e.setup(n,g)}function h(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:h,pushLight:c,pushShadow:u}}function CE(s){let e=new WeakMap;function n(a,c=0){const u=e.get(a);let f;return u===void 0?(f=new pm(s),e.set(a,[f])):c>=u.length?(f=new pm(s),u.push(f)):f=u[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class RE extends Vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=C_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bE extends Vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const PE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LE=`uniform sampler2D shadow_pass;
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
}`;function NE(s,e,n){let r=new ud;const a=new Ke,c=new Ke,u=new nn,f=new RE({depthPacking:R_}),h=new bE,m={},g=n.maxTextureSize,y={[pr]:bn,[bn]:pr,[Di]:Di},v=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:PE,fragmentShader:LE}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const A=new Yn;A.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new qn(A,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Am;let _=this.type;this.render=function(I,U,W){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const L=s.getRenderTarget(),w=s.getActiveCubeFace(),$=s.getActiveMipmapLevel(),oe=s.state;oe.setBlending(Ii),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const H=_!==Ni&&this.type===Ni,le=_===Ni&&this.type!==Ni;for(let ae=0,ve=I.length;ae<ve;ae++){const fe=I[ae],z=fe.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const se=z.getFrameExtents();if(a.multiply(se),c.copy(z.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(c.x=Math.floor(g/se.x),a.x=c.x*se.x,z.mapSize.x=c.x),a.y>g&&(c.y=Math.floor(g/se.y),a.y=c.y*se.y,z.mapSize.y=c.y)),z.map===null||H===!0||le===!0){const O=this.type!==Ni?{minFilter:Xn,magFilter:Xn}:{};z.map!==null&&z.map.dispose(),z.map=new oi(a.x,a.y,O),z.map.texture.name=fe.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const Z=z.getViewportCount();for(let O=0;O<Z;O++){const ie=z.getViewport(O);u.set(c.x*ie.x,c.y*ie.y,c.x*ie.z,c.y*ie.w),oe.viewport(u),z.updateMatrices(fe,O),r=z.getFrustum(),P(U,W,z.camera,fe,this.type)}z.isPointLightShadow!==!0&&this.type===Ni&&N(z,W),z.needsUpdate=!1}_=this.type,x.needsUpdate=!1,s.setRenderTarget(L,w,$)};function N(I,U){const W=e.update(T);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new oi(a.x,a.y)),v.uniforms.shadow_pass.value=I.map.texture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(U,null,W,v,T,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(U,null,W,S,T,null)}function E(I,U,W,L){let w=null;const $=W.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if($!==void 0)w=$;else if(w=W.isPointLight===!0?h:f,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const oe=w.uuid,H=U.uuid;let le=m[oe];le===void 0&&(le={},m[oe]=le);let ae=le[H];ae===void 0&&(ae=w.clone(),le[H]=ae,U.addEventListener("dispose",V)),w=ae}if(w.visible=U.visible,w.wireframe=U.wireframe,L===Ni?w.side=U.shadowSide!==null?U.shadowSide:U.side:w.side=U.shadowSide!==null?U.shadowSide:y[U.side],w.alphaMap=U.alphaMap,w.alphaTest=U.alphaTest,w.map=U.map,w.clipShadows=U.clipShadows,w.clippingPlanes=U.clippingPlanes,w.clipIntersection=U.clipIntersection,w.displacementMap=U.displacementMap,w.displacementScale=U.displacementScale,w.displacementBias=U.displacementBias,w.wireframeLinewidth=U.wireframeLinewidth,w.linewidth=U.linewidth,W.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const oe=s.properties.get(w);oe.light=W}return w}function P(I,U,W,L,w){if(I.visible===!1)return;if(I.layers.test(U.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===Ni)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,I.matrixWorld);const H=e.update(I),le=I.material;if(Array.isArray(le)){const ae=H.groups;for(let ve=0,fe=ae.length;ve<fe;ve++){const z=ae[ve],se=le[z.materialIndex];if(se&&se.visible){const Z=E(I,se,L,w);I.onBeforeShadow(s,I,U,W,H,Z,z),s.renderBufferDirect(W,null,H,Z,I,z),I.onAfterShadow(s,I,U,W,H,Z,z)}}}else if(le.visible){const ae=E(I,le,L,w);I.onBeforeShadow(s,I,U,W,H,ae,null),s.renderBufferDirect(W,null,H,ae,I,null),I.onAfterShadow(s,I,U,W,H,ae,null)}}const oe=I.children;for(let H=0,le=oe.length;H<le;H++)P(oe[H],U,W,L,w)}function V(I){I.target.removeEventListener("dispose",V);for(const W in m){const L=m[W],w=I.target.uuid;w in L&&(L[w].dispose(),delete L[w])}}}function DE(s){function e(){let G=!1;const he=new nn;let ce=null;const we=new nn(0,0,0,0);return{setMask:function(be){ce!==be&&!G&&(s.colorMask(be,be,be,be),ce=be)},setLocked:function(be){G=be},setClear:function(be,pt,Mt,Rt,Gt){Gt===!0&&(be*=Rt,pt*=Rt,Mt*=Rt),he.set(be,pt,Mt,Rt),we.equals(he)===!1&&(s.clearColor(be,pt,Mt,Rt),we.copy(he))},reset:function(){G=!1,ce=null,we.set(-1,0,0,0)}}}function n(){let G=!1,he=null,ce=null,we=null;return{setTest:function(be){be?Se(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(be){he!==be&&!G&&(s.depthMask(be),he=be)},setFunc:function(be){if(ce!==be){switch(be){case e_:s.depthFunc(s.NEVER);break;case t_:s.depthFunc(s.ALWAYS);break;case n_:s.depthFunc(s.LESS);break;case gl:s.depthFunc(s.LEQUAL);break;case i_:s.depthFunc(s.EQUAL);break;case r_:s.depthFunc(s.GEQUAL);break;case s_:s.depthFunc(s.GREATER);break;case o_:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=be}},setLocked:function(be){G=be},setClear:function(be){we!==be&&(s.clearDepth(be),we=be)},reset:function(){G=!1,he=null,ce=null,we=null}}}function r(){let G=!1,he=null,ce=null,we=null,be=null,pt=null,Mt=null,Rt=null,Gt=null;return{setTest:function(vt){G||(vt?Se(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(vt){he!==vt&&!G&&(s.stencilMask(vt),he=vt)},setFunc:function(vt,xn,Kt){(ce!==vt||we!==xn||be!==Kt)&&(s.stencilFunc(vt,xn,Kt),ce=vt,we=xn,be=Kt)},setOp:function(vt,xn,Kt){(pt!==vt||Mt!==xn||Rt!==Kt)&&(s.stencilOp(vt,xn,Kt),pt=vt,Mt=xn,Rt=Kt)},setLocked:function(vt){G=vt},setClear:function(vt){Gt!==vt&&(s.clearStencil(vt),Gt=vt)},reset:function(){G=!1,he=null,ce=null,we=null,be=null,pt=null,Mt=null,Rt=null,Gt=null}}}const a=new e,c=new n,u=new r,f=new WeakMap,h=new WeakMap;let m={},g={},y=new WeakMap,v=[],S=null,A=!1,T=null,x=null,_=null,N=null,E=null,P=null,V=null,I=new ht(0,0,0),U=0,W=!1,L=null,w=null,$=null,oe=null,H=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ve=0;const fe=s.getParameter(s.VERSION);fe.indexOf("WebGL")!==-1?(ve=parseFloat(/^WebGL (\d)/.exec(fe)[1]),ae=ve>=1):fe.indexOf("OpenGL ES")!==-1&&(ve=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),ae=ve>=2);let z=null,se={};const Z=s.getParameter(s.SCISSOR_BOX),O=s.getParameter(s.VIEWPORT),ie=new nn().fromArray(Z),Le=new nn().fromArray(O);function K(G,he,ce,we){const be=new Uint8Array(4),pt=s.createTexture();s.bindTexture(G,pt),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Mt=0;Mt<ce;Mt++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(he,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(he+Mt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return pt}const ue={};ue[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),ue[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ue[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Se(s.DEPTH_TEST),c.setFunc(gl),ut(!1),it(Kh),Se(s.CULL_FACE),xt(Ii);function Se(G){m[G]!==!0&&(s.enable(G),m[G]=!0)}function ge(G){m[G]!==!1&&(s.disable(G),m[G]=!1)}function Ue(G,he){return g[G]!==he?(s.bindFramebuffer(G,he),g[G]=he,G===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=he),G===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=he),!0):!1}function ze(G,he){let ce=v,we=!1;if(G){ce=y.get(he),ce===void 0&&(ce=[],y.set(he,ce));const be=G.textures;if(ce.length!==be.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,Mt=be.length;pt<Mt;pt++)ce[pt]=s.COLOR_ATTACHMENT0+pt;ce.length=be.length,we=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,we=!0);we&&s.drawBuffers(ce)}function X(G){return S!==G?(s.useProgram(G),S=G,!0):!1}const yt={[zr]:s.FUNC_ADD,[O0]:s.FUNC_SUBTRACT,[k0]:s.FUNC_REVERSE_SUBTRACT};yt[z0]=s.MIN,yt[B0]=s.MAX;const Xe={[H0]:s.ZERO,[V0]:s.ONE,[G0]:s.SRC_COLOR,[Qu]:s.SRC_ALPHA,[$0]:s.SRC_ALPHA_SATURATE,[q0]:s.DST_COLOR,[j0]:s.DST_ALPHA,[W0]:s.ONE_MINUS_SRC_COLOR,[Zu]:s.ONE_MINUS_SRC_ALPHA,[Y0]:s.ONE_MINUS_DST_COLOR,[X0]:s.ONE_MINUS_DST_ALPHA,[K0]:s.CONSTANT_COLOR,[Q0]:s.ONE_MINUS_CONSTANT_COLOR,[Z0]:s.CONSTANT_ALPHA,[J0]:s.ONE_MINUS_CONSTANT_ALPHA};function xt(G,he,ce,we,be,pt,Mt,Rt,Gt,vt){if(G===Ii){A===!0&&(ge(s.BLEND),A=!1);return}if(A===!1&&(Se(s.BLEND),A=!0),G!==F0){if(G!==T||vt!==W){if((x!==zr||E!==zr)&&(s.blendEquation(s.FUNC_ADD),x=zr,E=zr),vt)switch(G){case Ds:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ku:s.blendFunc(s.ONE,s.ONE);break;case Qh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ds:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ku:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Qh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}_=null,N=null,P=null,V=null,I.set(0,0,0),U=0,T=G,W=vt}return}be=be||he,pt=pt||ce,Mt=Mt||we,(he!==x||be!==E)&&(s.blendEquationSeparate(yt[he],yt[be]),x=he,E=be),(ce!==_||we!==N||pt!==P||Mt!==V)&&(s.blendFuncSeparate(Xe[ce],Xe[we],Xe[pt],Xe[Mt]),_=ce,N=we,P=pt,V=Mt),(Rt.equals(I)===!1||Gt!==U)&&(s.blendColor(Rt.r,Rt.g,Rt.b,Gt),I.copy(Rt),U=Gt),T=G,W=!1}function qe(G,he){G.side===Di?ge(s.CULL_FACE):Se(s.CULL_FACE);let ce=G.side===bn;he&&(ce=!ce),ut(ce),G.blending===Ds&&G.transparent===!1?xt(Ii):xt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);const we=G.stencilWrite;u.setTest(we),we&&(u.setMask(G.stencilWriteMask),u.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),u.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),At(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(G){L!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),L=G)}function it(G){G!==D0?(Se(s.CULL_FACE),G!==w&&(G===Kh?s.cullFace(s.BACK):G===U0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),w=G}function lt(G){G!==$&&(ae&&s.lineWidth(G),$=G)}function At(G,he,ce){G?(Se(s.POLYGON_OFFSET_FILL),(oe!==he||H!==ce)&&(s.polygonOffset(he,ce),oe=he,H=ce)):ge(s.POLYGON_OFFSET_FILL)}function F(G){G?Se(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function C(G){G===void 0&&(G=s.TEXTURE0+le-1),z!==G&&(s.activeTexture(G),z=G)}function re(G,he,ce){ce===void 0&&(z===null?ce=s.TEXTURE0+le-1:ce=z);let we=se[ce];we===void 0&&(we={type:void 0,texture:void 0},se[ce]=we),(we.type!==G||we.texture!==he)&&(z!==ce&&(s.activeTexture(ce),z=ce),s.bindTexture(G,he||ue[G]),we.type=G,we.texture=he)}function de(){const G=se[z];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function _e(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function at(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ye(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(G){ie.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),ie.copy(G))}function nt(G){Le.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Le.copy(G))}function dt(G,he){let ce=h.get(he);ce===void 0&&(ce=new WeakMap,h.set(he,ce));let we=ce.get(G);we===void 0&&(we=s.getUniformBlockIndex(he,G.name),ce.set(G,we))}function Ct(G,he){const we=h.get(he).get(G);f.get(he)!==we&&(s.uniformBlockBinding(he,we,G.__bindingPointIndex),f.set(he,we))}function tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},z=null,se={},g={},y=new WeakMap,v=[],S=null,A=!1,T=null,x=null,_=null,N=null,E=null,P=null,V=null,I=new ht(0,0,0),U=0,W=!1,L=null,w=null,$=null,oe=null,H=null,ie.set(0,0,s.canvas.width,s.canvas.height),Le.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:Se,disable:ge,bindFramebuffer:Ue,drawBuffers:ze,useProgram:X,setBlending:xt,setMaterial:qe,setFlipSided:ut,setCullFace:it,setLineWidth:lt,setPolygonOffset:At,setScissorTest:F,activeTexture:C,bindTexture:re,unbindTexture:de,compressedTexImage2D:_e,compressedTexImage3D:ye,texImage2D:at,texImage3D:Ye,updateUBOMapping:dt,uniformBlockBinding:Ct,texStorage2D:Ee,texStorage3D:Ve,texSubImage2D:Ge,texSubImage3D:Re,compressedTexSubImage2D:Te,compressedTexSubImage3D:Je,scissor:Ne,viewport:nt,reset:tt}}function UE(s,e,n,r,a,c,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ke,g=new WeakMap;let y;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(F,C){return S?new OffscreenCanvas(F,C):Sl("canvas")}function T(F,C,re){let de=1;const _e=At(F);if((_e.width>re||_e.height>re)&&(de=re/Math.max(_e.width,_e.height)),de<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ye=Math.floor(de*_e.width),Ge=Math.floor(de*_e.height);y===void 0&&(y=A(ye,Ge));const Re=C?A(ye,Ge):y;return Re.width=ye,Re.height=Ge,Re.getContext("2d").drawImage(F,0,0,ye,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+ye+"x"+Ge+")."),Re}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),F;return F}function x(F){return F.generateMipmaps&&F.minFilter!==Xn&&F.minFilter!==si}function _(F){s.generateMipmap(F)}function N(F,C,re,de,_e=!1){if(F!==null){if(s[F]!==void 0)return s[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ye=C;if(C===s.RED&&(re===s.FLOAT&&(ye=s.R32F),re===s.HALF_FLOAT&&(ye=s.R16F),re===s.UNSIGNED_BYTE&&(ye=s.R8)),C===s.RED_INTEGER&&(re===s.UNSIGNED_BYTE&&(ye=s.R8UI),re===s.UNSIGNED_SHORT&&(ye=s.R16UI),re===s.UNSIGNED_INT&&(ye=s.R32UI),re===s.BYTE&&(ye=s.R8I),re===s.SHORT&&(ye=s.R16I),re===s.INT&&(ye=s.R32I)),C===s.RG&&(re===s.FLOAT&&(ye=s.RG32F),re===s.HALF_FLOAT&&(ye=s.RG16F),re===s.UNSIGNED_BYTE&&(ye=s.RG8)),C===s.RG_INTEGER&&(re===s.UNSIGNED_BYTE&&(ye=s.RG8UI),re===s.UNSIGNED_SHORT&&(ye=s.RG16UI),re===s.UNSIGNED_INT&&(ye=s.RG32UI),re===s.BYTE&&(ye=s.RG8I),re===s.SHORT&&(ye=s.RG16I),re===s.INT&&(ye=s.RG32I)),C===s.RGB&&re===s.UNSIGNED_INT_5_9_9_9_REV&&(ye=s.RGB9_E5),C===s.RGBA){const Ge=_e?vl:Et.getTransfer(de);re===s.FLOAT&&(ye=s.RGBA32F),re===s.HALF_FLOAT&&(ye=s.RGBA16F),re===s.UNSIGNED_BYTE&&(ye=Ge===Lt?s.SRGB8_ALPHA8:s.RGBA8),re===s.UNSIGNED_SHORT_4_4_4_4&&(ye=s.RGBA4),re===s.UNSIGNED_SHORT_5_5_5_1&&(ye=s.RGB5_A1)}return(ye===s.R16F||ye===s.R32F||ye===s.RG16F||ye===s.RG32F||ye===s.RGBA16F||ye===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function E(F,C){return x(F)===!0||F.isFramebufferTexture&&F.minFilter!==Xn&&F.minFilter!==si?Math.log2(Math.max(C.width,C.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?C.mipmaps.length:1}function P(F){const C=F.target;C.removeEventListener("dispose",P),I(C),C.isVideoTexture&&g.delete(C)}function V(F){const C=F.target;C.removeEventListener("dispose",V),W(C)}function I(F){const C=r.get(F);if(C.__webglInit===void 0)return;const re=F.source,de=v.get(re);if(de){const _e=de[C.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&U(F),Object.keys(de).length===0&&v.delete(re)}r.remove(F)}function U(F){const C=r.get(F);s.deleteTexture(C.__webglTexture);const re=F.source,de=v.get(re);delete de[C.__cacheKey],u.memory.textures--}function W(F){const C=r.get(F);if(F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(C.__webglFramebuffer[de]))for(let _e=0;_e<C.__webglFramebuffer[de].length;_e++)s.deleteFramebuffer(C.__webglFramebuffer[de][_e]);else s.deleteFramebuffer(C.__webglFramebuffer[de]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[de])}else{if(Array.isArray(C.__webglFramebuffer))for(let de=0;de<C.__webglFramebuffer.length;de++)s.deleteFramebuffer(C.__webglFramebuffer[de]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let de=0;de<C.__webglColorRenderbuffer.length;de++)C.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[de]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const re=F.textures;for(let de=0,_e=re.length;de<_e;de++){const ye=r.get(re[de]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),u.memory.textures--),r.remove(re[de])}r.remove(F)}let L=0;function w(){L=0}function $(){const F=L;return F>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+a.maxTextures),L+=1,F}function oe(F){const C=[];return C.push(F.wrapS),C.push(F.wrapT),C.push(F.wrapR||0),C.push(F.magFilter),C.push(F.minFilter),C.push(F.anisotropy),C.push(F.internalFormat),C.push(F.format),C.push(F.type),C.push(F.generateMipmaps),C.push(F.premultiplyAlpha),C.push(F.flipY),C.push(F.unpackAlignment),C.push(F.colorSpace),C.join()}function H(F,C){const re=r.get(F);if(F.isVideoTexture&&it(F),F.isRenderTargetTexture===!1&&F.version>0&&re.__version!==F.version){const de=F.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(re,F,C);return}}n.bindTexture(s.TEXTURE_2D,re.__webglTexture,s.TEXTURE0+C)}function le(F,C){const re=r.get(F);if(F.version>0&&re.__version!==F.version){ie(re,F,C);return}n.bindTexture(s.TEXTURE_2D_ARRAY,re.__webglTexture,s.TEXTURE0+C)}function ae(F,C){const re=r.get(F);if(F.version>0&&re.__version!==F.version){ie(re,F,C);return}n.bindTexture(s.TEXTURE_3D,re.__webglTexture,s.TEXTURE0+C)}function ve(F,C){const re=r.get(F);if(F.version>0&&re.__version!==F.version){Le(re,F,C);return}n.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture,s.TEXTURE0+C)}const fe={[td]:s.REPEAT,[Hr]:s.CLAMP_TO_EDGE,[nd]:s.MIRRORED_REPEAT},z={[Xn]:s.NEAREST,[g_]:s.NEAREST_MIPMAP_NEAREST,[Wa]:s.NEAREST_MIPMAP_LINEAR,[si]:s.LINEAR,[mu]:s.LINEAR_MIPMAP_NEAREST,[Vr]:s.LINEAR_MIPMAP_LINEAR},se={[P_]:s.NEVER,[F_]:s.ALWAYS,[L_]:s.LESS,[Om]:s.LEQUAL,[N_]:s.EQUAL,[I_]:s.GEQUAL,[D_]:s.GREATER,[U_]:s.NOTEQUAL};function Z(F,C){if(C.type===dr&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===si||C.magFilter===mu||C.magFilter===Wa||C.magFilter===Vr||C.minFilter===si||C.minFilter===mu||C.minFilter===Wa||C.minFilter===Vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,fe[C.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,fe[C.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,fe[C.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,z[C.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,z[C.minFilter]),C.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,se[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Xn||C.minFilter!==Wa&&C.minFilter!==Vr||C.type===dr&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||r.get(C).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");s.texParameterf(F,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,a.getMaxAnisotropy())),r.get(C).__currentAnisotropy=C.anisotropy}}}function O(F,C){let re=!1;F.__webglInit===void 0&&(F.__webglInit=!0,C.addEventListener("dispose",P));const de=C.source;let _e=v.get(de);_e===void 0&&(_e={},v.set(de,_e));const ye=oe(C);if(ye!==F.__cacheKey){_e[ye]===void 0&&(_e[ye]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,re=!0),_e[ye].usedTimes++;const Ge=_e[F.__cacheKey];Ge!==void 0&&(_e[F.__cacheKey].usedTimes--,Ge.usedTimes===0&&U(C)),F.__cacheKey=ye,F.__webglTexture=_e[ye].texture}return re}function ie(F,C,re){let de=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(de=s.TEXTURE_3D);const _e=O(F,C),ye=C.source;n.bindTexture(de,F.__webglTexture,s.TEXTURE0+re);const Ge=r.get(ye);if(ye.version!==Ge.__version||_e===!0){n.activeTexture(s.TEXTURE0+re);const Re=Et.getPrimaries(Et.workingColorSpace),Te=C.colorSpace===ur?null:Et.getPrimaries(C.colorSpace),Je=C.colorSpace===ur||Re===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let Ee=T(C.image,!1,a.maxTextureSize);Ee=lt(C,Ee);const Ve=c.convert(C.format,C.colorSpace),at=c.convert(C.type);let Ye=N(C.internalFormat,Ve,at,C.colorSpace,C.isVideoTexture);Z(de,C);let Ne;const nt=C.mipmaps,dt=C.isVideoTexture!==!0,Ct=Ge.__version===void 0||_e===!0,tt=ye.dataReady,G=E(C,Ee);if(C.isDepthTexture)Ye=s.DEPTH_COMPONENT16,C.type===dr?Ye=s.DEPTH_COMPONENT32F:C.type===ks?Ye=s.DEPTH_COMPONENT24:C.type===Uo&&(Ye=s.DEPTH24_STENCIL8),Ct&&(dt?n.texStorage2D(s.TEXTURE_2D,1,Ye,Ee.width,Ee.height):n.texImage2D(s.TEXTURE_2D,0,Ye,Ee.width,Ee.height,0,Ve,at,null));else if(C.isDataTexture)if(nt.length>0){dt&&Ct&&n.texStorage2D(s.TEXTURE_2D,G,Ye,nt[0].width,nt[0].height);for(let he=0,ce=nt.length;he<ce;he++)Ne=nt[he],dt?tt&&n.texSubImage2D(s.TEXTURE_2D,he,0,0,Ne.width,Ne.height,Ve,at,Ne.data):n.texImage2D(s.TEXTURE_2D,he,Ye,Ne.width,Ne.height,0,Ve,at,Ne.data);C.generateMipmaps=!1}else dt?(Ct&&n.texStorage2D(s.TEXTURE_2D,G,Ye,Ee.width,Ee.height),tt&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Ve,at,Ee.data)):n.texImage2D(s.TEXTURE_2D,0,Ye,Ee.width,Ee.height,0,Ve,at,Ee.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){dt&&Ct&&n.texStorage3D(s.TEXTURE_2D_ARRAY,G,Ye,nt[0].width,nt[0].height,Ee.depth);for(let he=0,ce=nt.length;he<ce;he++)Ne=nt[he],C.format!==pi?Ve!==null?dt?tt&&n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Ne.width,Ne.height,Ee.depth,Ve,Ne.data,0,0):n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,Ye,Ne.width,Ne.height,Ee.depth,0,Ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?tt&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Ne.width,Ne.height,Ee.depth,Ve,at,Ne.data):n.texImage3D(s.TEXTURE_2D_ARRAY,he,Ye,Ne.width,Ne.height,Ee.depth,0,Ve,at,Ne.data)}else{dt&&Ct&&n.texStorage2D(s.TEXTURE_2D,G,Ye,nt[0].width,nt[0].height);for(let he=0,ce=nt.length;he<ce;he++)Ne=nt[he],C.format!==pi?Ve!==null?dt?tt&&n.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,Ne.width,Ne.height,Ve,Ne.data):n.compressedTexImage2D(s.TEXTURE_2D,he,Ye,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?tt&&n.texSubImage2D(s.TEXTURE_2D,he,0,0,Ne.width,Ne.height,Ve,at,Ne.data):n.texImage2D(s.TEXTURE_2D,he,Ye,Ne.width,Ne.height,0,Ve,at,Ne.data)}else if(C.isDataArrayTexture)dt?(Ct&&n.texStorage3D(s.TEXTURE_2D_ARRAY,G,Ye,Ee.width,Ee.height,Ee.depth),tt&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ve,at,Ee.data)):n.texImage3D(s.TEXTURE_2D_ARRAY,0,Ye,Ee.width,Ee.height,Ee.depth,0,Ve,at,Ee.data);else if(C.isData3DTexture)dt?(Ct&&n.texStorage3D(s.TEXTURE_3D,G,Ye,Ee.width,Ee.height,Ee.depth),tt&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ve,at,Ee.data)):n.texImage3D(s.TEXTURE_3D,0,Ye,Ee.width,Ee.height,Ee.depth,0,Ve,at,Ee.data);else if(C.isFramebufferTexture){if(Ct)if(dt)n.texStorage2D(s.TEXTURE_2D,G,Ye,Ee.width,Ee.height);else{let he=Ee.width,ce=Ee.height;for(let we=0;we<G;we++)n.texImage2D(s.TEXTURE_2D,we,Ye,he,ce,0,Ve,at,null),he>>=1,ce>>=1}}else if(nt.length>0){if(dt&&Ct){const he=At(nt[0]);n.texStorage2D(s.TEXTURE_2D,G,Ye,he.width,he.height)}for(let he=0,ce=nt.length;he<ce;he++)Ne=nt[he],dt?tt&&n.texSubImage2D(s.TEXTURE_2D,he,0,0,Ve,at,Ne):n.texImage2D(s.TEXTURE_2D,he,Ye,Ve,at,Ne);C.generateMipmaps=!1}else if(dt){if(Ct){const he=At(Ee);n.texStorage2D(s.TEXTURE_2D,G,Ye,he.width,he.height)}tt&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ve,at,Ee)}else n.texImage2D(s.TEXTURE_2D,0,Ye,Ve,at,Ee);x(C)&&_(de),Ge.__version=ye.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function Le(F,C,re){if(C.image.length!==6)return;const de=O(F,C),_e=C.source;n.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+re);const ye=r.get(_e);if(_e.version!==ye.__version||de===!0){n.activeTexture(s.TEXTURE0+re);const Ge=Et.getPrimaries(Et.workingColorSpace),Re=C.colorSpace===ur?null:Et.getPrimaries(C.colorSpace),Te=C.colorSpace===ur||Ge===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Je=C.isCompressedTexture||C.image[0].isCompressedTexture,Ee=C.image[0]&&C.image[0].isDataTexture,Ve=[];for(let ce=0;ce<6;ce++)!Je&&!Ee?Ve[ce]=T(C.image[ce],!0,a.maxCubemapSize):Ve[ce]=Ee?C.image[ce].image:C.image[ce],Ve[ce]=lt(C,Ve[ce]);const at=Ve[0],Ye=c.convert(C.format,C.colorSpace),Ne=c.convert(C.type),nt=N(C.internalFormat,Ye,Ne,C.colorSpace),dt=C.isVideoTexture!==!0,Ct=ye.__version===void 0||de===!0,tt=_e.dataReady;let G=E(C,at);Z(s.TEXTURE_CUBE_MAP,C);let he;if(Je){dt&&Ct&&n.texStorage2D(s.TEXTURE_CUBE_MAP,G,nt,at.width,at.height);for(let ce=0;ce<6;ce++){he=Ve[ce].mipmaps;for(let we=0;we<he.length;we++){const be=he[we];C.format!==pi?Ye!==null?dt?tt&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we,0,0,be.width,be.height,Ye,be.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we,nt,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):dt?tt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we,0,0,be.width,be.height,Ye,Ne,be.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we,nt,be.width,be.height,0,Ye,Ne,be.data)}}}else{if(he=C.mipmaps,dt&&Ct){he.length>0&&G++;const ce=At(Ve[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,G,nt,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(Ee){dt?tt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ve[ce].width,Ve[ce].height,Ye,Ne,Ve[ce].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,nt,Ve[ce].width,Ve[ce].height,0,Ye,Ne,Ve[ce].data);for(let we=0;we<he.length;we++){const pt=he[we].image[ce].image;dt?tt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we+1,0,0,pt.width,pt.height,Ye,Ne,pt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we+1,nt,pt.width,pt.height,0,Ye,Ne,pt.data)}}else{dt?tt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ye,Ne,Ve[ce]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,nt,Ye,Ne,Ve[ce]);for(let we=0;we<he.length;we++){const be=he[we];dt?tt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we+1,0,0,Ye,Ne,be.image[ce]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we+1,nt,Ye,Ne,be.image[ce])}}}x(C)&&_(s.TEXTURE_CUBE_MAP),ye.__version=_e.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function K(F,C,re,de,_e,ye){const Ge=c.convert(re.format,re.colorSpace),Re=c.convert(re.type),Te=N(re.internalFormat,Ge,Re,re.colorSpace);if(!r.get(C).__hasExternalTextures){const Ee=Math.max(1,C.width>>ye),Ve=Math.max(1,C.height>>ye);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?n.texImage3D(_e,ye,Te,Ee,Ve,C.depth,0,Ge,Re,null):n.texImage2D(_e,ye,Te,Ee,Ve,0,Ge,Re,null)}n.bindFramebuffer(s.FRAMEBUFFER,F),ut(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,_e,r.get(re).__webglTexture,0,qe(C)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,_e,r.get(re).__webglTexture,ye),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ue(F,C,re){if(s.bindRenderbuffer(s.RENDERBUFFER,F),C.depthBuffer&&!C.stencilBuffer){let de=s.DEPTH_COMPONENT24;if(re||ut(C)){const _e=C.depthTexture;_e&&_e.isDepthTexture&&(_e.type===dr?de=s.DEPTH_COMPONENT32F:_e.type===ks&&(de=s.DEPTH_COMPONENT24));const ye=qe(C);ut(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,de,C.width,C.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,de,C.width,C.height)}else s.renderbufferStorage(s.RENDERBUFFER,de,C.width,C.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,F)}else if(C.depthBuffer&&C.stencilBuffer){const de=qe(C);re&&ut(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,de,s.DEPTH24_STENCIL8,C.width,C.height):ut(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de,s.DEPTH24_STENCIL8,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,F)}else{const de=C.textures;for(let _e=0;_e<de.length;_e++){const ye=de[_e],Ge=c.convert(ye.format,ye.colorSpace),Re=c.convert(ye.type),Te=N(ye.internalFormat,Ge,Re,ye.colorSpace),Je=qe(C);re&&ut(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,Te,C.width,C.height):ut(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Je,Te,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Te,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Se(F,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,F),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),H(C.depthTexture,0);const de=r.get(C.depthTexture).__webglTexture,_e=qe(C);if(C.depthTexture.format===Us)ut(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0);else if(C.depthTexture.format===Do)ut(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function ge(F){const C=r.get(F),re=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!C.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");Se(C.__webglFramebuffer,F)}else if(re){C.__webglDepthbuffer=[];for(let de=0;de<6;de++)n.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[de]),C.__webglDepthbuffer[de]=s.createRenderbuffer(),ue(C.__webglDepthbuffer[de],F,!1)}else n.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=s.createRenderbuffer(),ue(C.__webglDepthbuffer,F,!1);n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(F,C,re){const de=r.get(F);C!==void 0&&K(de.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),re!==void 0&&ge(F)}function ze(F){const C=F.texture,re=r.get(F),de=r.get(C);F.addEventListener("dispose",V);const _e=F.textures,ye=F.isWebGLCubeRenderTarget===!0,Ge=_e.length>1;if(Ge||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=C.version,u.memory.textures++),ye){re.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(C.mipmaps&&C.mipmaps.length>0){re.__webglFramebuffer[Re]=[];for(let Te=0;Te<C.mipmaps.length;Te++)re.__webglFramebuffer[Re][Te]=s.createFramebuffer()}else re.__webglFramebuffer[Re]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){re.__webglFramebuffer=[];for(let Re=0;Re<C.mipmaps.length;Re++)re.__webglFramebuffer[Re]=s.createFramebuffer()}else re.__webglFramebuffer=s.createFramebuffer();if(Ge)for(let Re=0,Te=_e.length;Re<Te;Re++){const Je=r.get(_e[Re]);Je.__webglTexture===void 0&&(Je.__webglTexture=s.createTexture(),u.memory.textures++)}if(F.samples>0&&ut(F)===!1){re.__webglMultisampledFramebuffer=s.createFramebuffer(),re.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let Re=0;Re<_e.length;Re++){const Te=_e[Re];re.__webglColorRenderbuffer[Re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,re.__webglColorRenderbuffer[Re]);const Je=c.convert(Te.format,Te.colorSpace),Ee=c.convert(Te.type),Ve=N(Te.internalFormat,Je,Ee,Te.colorSpace,F.isXRRenderTarget===!0),at=qe(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,at,Ve,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,re.__webglColorRenderbuffer[Re])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(re.__webglDepthRenderbuffer=s.createRenderbuffer(),ue(re.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ye){n.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),Z(s.TEXTURE_CUBE_MAP,C);for(let Re=0;Re<6;Re++)if(C.mipmaps&&C.mipmaps.length>0)for(let Te=0;Te<C.mipmaps.length;Te++)K(re.__webglFramebuffer[Re][Te],F,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Te);else K(re.__webglFramebuffer[Re],F,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);x(C)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ge){for(let Re=0,Te=_e.length;Re<Te;Re++){const Je=_e[Re],Ee=r.get(Je);n.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),Z(s.TEXTURE_2D,Je),K(re.__webglFramebuffer,F,Je,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,0),x(Je)&&_(s.TEXTURE_2D)}n.unbindTexture()}else{let Re=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Re=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Re,de.__webglTexture),Z(Re,C),C.mipmaps&&C.mipmaps.length>0)for(let Te=0;Te<C.mipmaps.length;Te++)K(re.__webglFramebuffer[Te],F,C,s.COLOR_ATTACHMENT0,Re,Te);else K(re.__webglFramebuffer,F,C,s.COLOR_ATTACHMENT0,Re,0);x(C)&&_(Re),n.unbindTexture()}F.depthBuffer&&ge(F)}function X(F){const C=F.textures;for(let re=0,de=C.length;re<de;re++){const _e=C[re];if(x(_e)){const ye=F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ge=r.get(_e).__webglTexture;n.bindTexture(ye,Ge),_(ye),n.unbindTexture()}}}const yt=[],Xe=[];function xt(F){if(F.samples>0){if(ut(F)===!1){const C=F.textures,re=F.width,de=F.height;let _e=s.COLOR_BUFFER_BIT;const ye=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ge=r.get(F),Re=C.length>1;if(Re)for(let Te=0;Te<C.length;Te++)n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Te=0;Te<C.length;Te++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Te]);const Je=r.get(C[Te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Je,0)}s.blitFramebuffer(0,0,re,de,0,0,re,de,_e,s.NEAREST),h===!0&&(yt.length=0,Xe.length=0,yt.push(s.COLOR_ATTACHMENT0+Te),F.depthBuffer&&F.resolveDepthBuffer===!1&&(yt.push(ye),Xe.push(ye),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Xe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,yt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Re)for(let Te=0;Te<C.length;Te++){n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Te]);const Je=r.get(C[Te]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,Je,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&h){const C=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function qe(F){return Math.min(a.maxSamples,F.samples)}function ut(F){const C=r.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function it(F){const C=u.render.frame;g.get(F)!==C&&(g.set(F,C),F.update())}function lt(F,C){const re=F.colorSpace,de=F.format,_e=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||re!==gr&&re!==ur&&(Et.getTransfer(re)===Lt?(de!==pi||_e!==mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),C}function At(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(m.width=F.naturalWidth||F.width,m.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(m.width=F.displayWidth,m.height=F.displayHeight):(m.width=F.width,m.height=F.height),m}this.allocateTextureUnit=$,this.resetTextureUnits=w,this.setTexture2D=H,this.setTexture2DArray=le,this.setTexture3D=ae,this.setTextureCube=ve,this.rebindTextures=Ue,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=K,this.useMultisampledRTT=ut}function IE(s,e){function n(r,a=ur){let c;const u=Et.getTransfer(a);if(r===mr)return s.UNSIGNED_BYTE;if(r===Lm)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Nm)return s.UNSIGNED_SHORT_5_5_5_1;if(r===x_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===v_)return s.BYTE;if(r===__)return s.SHORT;if(r===bm)return s.UNSIGNED_SHORT;if(r===Pm)return s.INT;if(r===ks)return s.UNSIGNED_INT;if(r===dr)return s.FLOAT;if(r===hr)return s.HALF_FLOAT;if(r===y_)return s.ALPHA;if(r===S_)return s.RGB;if(r===pi)return s.RGBA;if(r===M_)return s.LUMINANCE;if(r===E_)return s.LUMINANCE_ALPHA;if(r===Us)return s.DEPTH_COMPONENT;if(r===Do)return s.DEPTH_STENCIL;if(r===w_)return s.RED;if(r===Dm)return s.RED_INTEGER;if(r===T_)return s.RG;if(r===Um)return s.RG_INTEGER;if(r===Im)return s.RGBA_INTEGER;if(r===gu||r===vu||r===_u||r===xu)if(u===Lt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===gu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===gu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===vu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_u)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jh||r===ep||r===tp||r===np)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Jh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ep)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===tp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===np)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ip||r===rp||r===sp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===ip||r===rp)return u===Lt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===sp)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===op||r===ap||r===lp||r===cp||r===up||r===dp||r===fp||r===hp||r===pp||r===mp||r===gp||r===vp||r===_p||r===xp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===op)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ap)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lp)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===cp)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===up)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===dp)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fp)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hp)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===pp)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mp)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gp)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===vp)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_p)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xp)return u===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yu||r===yp||r===Sp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===yu)return u===Lt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===yp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Sp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===A_||r===Mp||r===Ep||r===wp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===yu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Mp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ep)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Uo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class FE extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class No extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OE={type:"move"};class qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new No,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new No,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new No,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,u=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const T of e.hand.values()){const x=n.getJointPose(T,r),_=this._getHandJoint(m,T);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const g=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],v=g.position.distanceTo(y.position),S=.02,A=.005;m.inputState.pinching&&v>S+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=S-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(OE)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new No;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const kE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zE=`
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

}`;class BE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Pn,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}render(e,n){if(this.texture!==null){if(this.mesh===null){const r=n.cameras[0].viewport,a=new Rn({vertexShader:kE,fragmentShader:zE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new qn(new Al(20,20),a)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class HE extends Hs{constructor(e,n){super();const r=this;let a=null,c=1,u=null,f="local-floor",h=1,m=null,g=null,y=null,v=null,S=null,A=null;const T=new BE,x=n.getContextAttributes();let _=null,N=null;const E=[],P=[],V=new Ke;let I=null;const U=new jn;U.layers.enable(1),U.viewport=new nn;const W=new jn;W.layers.enable(2),W.viewport=new nn;const L=[U,W],w=new FE;w.layers.enable(1),w.layers.enable(2);let $=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ue=E[K];return ue===void 0&&(ue=new qu,E[K]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(K){let ue=E[K];return ue===void 0&&(ue=new qu,E[K]=ue),ue.getGripSpace()},this.getHand=function(K){let ue=E[K];return ue===void 0&&(ue=new qu,E[K]=ue),ue.getHandSpace()};function H(K){const ue=P.indexOf(K.inputSource);if(ue===-1)return;const Se=E[ue];Se!==void 0&&(Se.update(K.inputSource,K.frame,m||u),Se.dispatchEvent({type:K.type,data:K.inputSource}))}function le(){a.removeEventListener("select",H),a.removeEventListener("selectstart",H),a.removeEventListener("selectend",H),a.removeEventListener("squeeze",H),a.removeEventListener("squeezestart",H),a.removeEventListener("squeezeend",H),a.removeEventListener("end",le),a.removeEventListener("inputsourceschange",ae);for(let K=0;K<E.length;K++){const ue=P[K];ue!==null&&(P[K]=null,E[K].disconnect(ue))}$=null,oe=null,T.reset(),e.setRenderTarget(_),S=null,v=null,y=null,a=null,N=null,Le.stop(),r.isPresenting=!1,e.setPixelRatio(I),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){c=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){f=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return y},this.getFrame=function(){return A},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",H),a.addEventListener("selectstart",H),a.addEventListener("selectend",H),a.addEventListener("squeeze",H),a.addEventListener("squeezestart",H),a.addEventListener("squeezeend",H),a.addEventListener("end",le),a.addEventListener("inputsourceschange",ae),x.xrCompatible!==!0&&await n.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(V),a.renderState.layers===void 0){const ue={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(a,n,ue),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new oi(S.framebufferWidth,S.framebufferHeight,{format:pi,type:mr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ue=null,Se=null,ge=null;x.depth&&(ge=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=x.stencil?Do:Us,Se=x.stencil?Uo:ks);const Ue={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:c};y=new XRWebGLBinding(a,n),v=y.createProjectionLayer(Ue),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),N=new oi(v.textureWidth,v.textureHeight,{format:pi,type:mr,depthTexture:new Km(v.textureWidth,v.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await a.requestReferenceSpace(f),Le.setContext(a),Le.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function ae(K){for(let ue=0;ue<K.removed.length;ue++){const Se=K.removed[ue],ge=P.indexOf(Se);ge>=0&&(P[ge]=null,E[ge].disconnect(Se))}for(let ue=0;ue<K.added.length;ue++){const Se=K.added[ue];let ge=P.indexOf(Se);if(ge===-1){for(let ze=0;ze<E.length;ze++)if(ze>=P.length){P.push(Se),ge=ze;break}else if(P[ze]===null){P[ze]=Se,ge=ze;break}if(ge===-1)break}const Ue=E[ge];Ue&&Ue.connect(Se)}}const ve=new Y,fe=new Y;function z(K,ue,Se){ve.setFromMatrixPosition(ue.matrixWorld),fe.setFromMatrixPosition(Se.matrixWorld);const ge=ve.distanceTo(fe),Ue=ue.projectionMatrix.elements,ze=Se.projectionMatrix.elements,X=Ue[14]/(Ue[10]-1),yt=Ue[14]/(Ue[10]+1),Xe=(Ue[9]+1)/Ue[5],xt=(Ue[9]-1)/Ue[5],qe=(Ue[8]-1)/Ue[0],ut=(ze[8]+1)/ze[0],it=X*qe,lt=X*ut,At=ge/(-qe+ut),F=At*-qe;ue.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(F),K.translateZ(At),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const C=X+At,re=yt+At,de=it-F,_e=lt+(ge-F),ye=Xe*yt/re*C,Ge=xt*yt/re*C;K.projectionMatrix.makePerspective(de,_e,ye,Ge,C,re),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function se(K,ue){ue===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ue.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;T.texture!==null&&(K.near=T.depthNear,K.far=T.depthFar),w.near=W.near=U.near=K.near,w.far=W.far=U.far=K.far,($!==w.near||oe!==w.far)&&(a.updateRenderState({depthNear:w.near,depthFar:w.far}),$=w.near,oe=w.far,U.near=$,U.far=oe,W.near=$,W.far=oe,U.updateProjectionMatrix(),W.updateProjectionMatrix(),K.updateProjectionMatrix());const ue=K.parent,Se=w.cameras;se(w,ue);for(let ge=0;ge<Se.length;ge++)se(Se[ge],ue);Se.length===2?z(w,U,W):w.projectionMatrix.copy(U.projectionMatrix),Z(K,w,ue)};function Z(K,ue,Se){Se===null?K.matrix.copy(ue.matrixWorld):(K.matrix.copy(Se.matrixWorld),K.matrix.invert(),K.matrix.multiply(ue.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=id*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(v===null&&S===null))return h},this.setFoveation=function(K){h=K,v!==null&&(v.fixedFoveation=K),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=K)},this.hasDepthSensing=function(){return T.texture!==null};let O=null;function ie(K,ue){if(g=ue.getViewerPose(m||u),A=ue,g!==null){const Se=g.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let ge=!1;Se.length!==w.cameras.length&&(w.cameras.length=0,ge=!0);for(let ze=0;ze<Se.length;ze++){const X=Se[ze];let yt=null;if(S!==null)yt=S.getViewport(X);else{const xt=y.getViewSubImage(v,X);yt=xt.viewport,ze===0&&(e.setRenderTargetTextures(N,xt.colorTexture,v.ignoreDepthValues?void 0:xt.depthStencilTexture),e.setRenderTarget(N))}let Xe=L[ze];Xe===void 0&&(Xe=new jn,Xe.layers.enable(ze),Xe.viewport=new nn,L[ze]=Xe),Xe.matrix.fromArray(X.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(X.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(yt.x,yt.y,yt.width,yt.height),ze===0&&(w.matrix.copy(Xe.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ge===!0&&w.cameras.push(Xe)}const Ue=a.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const ze=y.getDepthInformation(Se[0]);ze&&ze.isValid&&ze.texture&&T.init(e,ze,a.renderState)}}for(let Se=0;Se<E.length;Se++){const ge=P[Se],Ue=E[Se];ge!==null&&Ue!==void 0&&Ue.update(ge,ue,m||u)}T.render(e,w),O&&O(K,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),A=null}const Le=new $m;Le.setAnimationLoop(ie),this.setAnimationLoop=function(K){O=K},this.dispose=function(){}}}const Fr=new gi,VE=new Ot;function GE(s,e){function n(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function r(x,_){_.color.getRGB(x.fogColor.value,Xm(s)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function a(x,_,N,E,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(x,_):_.isMeshToonMaterial?(c(x,_),y(x,_)):_.isMeshPhongMaterial?(c(x,_),g(x,_)):_.isMeshStandardMaterial?(c(x,_),v(x,_),_.isMeshPhysicalMaterial&&S(x,_,P)):_.isMeshMatcapMaterial?(c(x,_),A(x,_)):_.isMeshDepthMaterial?c(x,_):_.isMeshDistanceMaterial?(c(x,_),T(x,_)):_.isMeshNormalMaterial?c(x,_):_.isLineBasicMaterial?(u(x,_),_.isLineDashedMaterial&&f(x,_)):_.isPointsMaterial?h(x,_,N,E):_.isSpriteMaterial?m(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,n(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,n(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,n(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===bn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,n(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===bn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,n(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,n(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const N=e.get(_),E=N.envMap,P=N.envMapRotation;if(E&&(x.envMap.value=E,Fr.copy(P),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),x.envMapRotation.value.setFromMatrix4(VE.makeRotationFromEuler(Fr)),x.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap){x.lightMap.value=_.lightMap;const V=s._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=_.lightMapIntensity*V,n(_.lightMap,x.lightMapTransform)}_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,x.aoMapTransform))}function u(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,n(_.map,x.mapTransform))}function f(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function h(x,_,N,E){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*N,x.scale.value=E*.5,_.map&&(x.map.value=_.map,n(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,n(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function m(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,n(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,n(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function g(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function y(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function v(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function S(x,_,N){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===bn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=N.texture,x.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,x.specularIntensityMapTransform))}function A(x,_){_.matcap&&(x.matcap.value=_.matcap)}function T(x,_){const N=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(N.matrixWorld),x.nearDistance.value=N.shadow.camera.near,x.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function WE(s,e,n,r){let a={},c={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(N,E){const P=E.program;r.uniformBlockBinding(N,P)}function m(N,E){let P=a[N.id];P===void 0&&(A(N),P=g(N),a[N.id]=P,N.addEventListener("dispose",x));const V=E.program;r.updateUBOMapping(N,V);const I=e.render.frame;c[N.id]!==I&&(v(N),c[N.id]=I)}function g(N){const E=y();N.__bindingPointIndex=E;const P=s.createBuffer(),V=N.__size,I=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,V,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,P),P}function y(){for(let N=0;N<f;N++)if(u.indexOf(N)===-1)return u.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const E=a[N.id],P=N.uniforms,V=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let I=0,U=P.length;I<U;I++){const W=Array.isArray(P[I])?P[I]:[P[I]];for(let L=0,w=W.length;L<w;L++){const $=W[L];if(S($,I,L,V)===!0){const oe=$.__offset,H=Array.isArray($.value)?$.value:[$.value];let le=0;for(let ae=0;ae<H.length;ae++){const ve=H[ae],fe=T(ve);typeof ve=="number"||typeof ve=="boolean"?($.__data[0]=ve,s.bufferSubData(s.UNIFORM_BUFFER,oe+le,$.__data)):ve.isMatrix3?($.__data[0]=ve.elements[0],$.__data[1]=ve.elements[1],$.__data[2]=ve.elements[2],$.__data[3]=0,$.__data[4]=ve.elements[3],$.__data[5]=ve.elements[4],$.__data[6]=ve.elements[5],$.__data[7]=0,$.__data[8]=ve.elements[6],$.__data[9]=ve.elements[7],$.__data[10]=ve.elements[8],$.__data[11]=0):(ve.toArray($.__data,le),le+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,oe,$.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(N,E,P,V){const I=N.value,U=E+"_"+P;if(V[U]===void 0)return typeof I=="number"||typeof I=="boolean"?V[U]=I:V[U]=I.clone(),!0;{const W=V[U];if(typeof I=="number"||typeof I=="boolean"){if(W!==I)return V[U]=I,!0}else if(W.equals(I)===!1)return W.copy(I),!0}return!1}function A(N){const E=N.uniforms;let P=0;const V=16;for(let U=0,W=E.length;U<W;U++){const L=Array.isArray(E[U])?E[U]:[E[U]];for(let w=0,$=L.length;w<$;w++){const oe=L[w],H=Array.isArray(oe.value)?oe.value:[oe.value];for(let le=0,ae=H.length;le<ae;le++){const ve=H[le],fe=T(ve),z=P%V;z!==0&&V-z<fe.boundary&&(P+=V-z),oe.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=P,P+=fe.storage}}}const I=P%V;return I>0&&(P+=V-I),N.__size=P,N.__cache={},this}function T(N){const E={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(E.boundary=4,E.storage=4):N.isVector2?(E.boundary=8,E.storage=8):N.isVector3||N.isColor?(E.boundary=16,E.storage=12):N.isVector4?(E.boundary=16,E.storage=16):N.isMatrix3?(E.boundary=48,E.storage=48):N.isMatrix4?(E.boundary=64,E.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),E}function x(N){const E=N.target;E.removeEventListener("dispose",x);const P=u.indexOf(E.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(a[E.id]),delete a[E.id],delete c[E.id]}function _(){for(const N in a)s.deleteBuffer(a[N]);u=[],a={},c={}}return{bind:h,update:m,dispose:_}}class jE{constructor(e={}){const{canvas:n=k_(),context:r=null,depth:a=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let v;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=r.getContextAttributes().alpha}else v=u;const S=new Uint32Array(4),A=new Int32Array(4);let T=null,x=null;const _=[],N=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=di,this._useLegacyLights=!1,this.toneMapping=fr,this.toneMappingExposure=1;const E=this;let P=!1,V=0,I=0,U=null,W=-1,L=null;const w=new nn,$=new nn;let oe=null;const H=new ht(0);let le=0,ae=n.width,ve=n.height,fe=1,z=null,se=null;const Z=new nn(0,0,ae,ve),O=new nn(0,0,ae,ve);let ie=!1;const Le=new ud;let K=!1,ue=!1;const Se=new Ot,ge=new Y,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return U===null?fe:1}let X=r;function yt(b,j){return n.getContext(b,j)}try{const b={alpha:!0,depth:a,stencil:c,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ad}`),n.addEventListener("webglcontextlost",G,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",ce,!1),X===null){const j="webgl2";if(X=yt(j,b),X===null)throw yt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Xe,xt,qe,ut,it,lt,At,F,C,re,de,_e,ye,Ge,Re,Te,Je,Ee,Ve,at,Ye,Ne,nt,dt;function Ct(){Xe=new JS(X),Xe.init(),Ne=new IE(X,Xe),xt=new qS(X,Xe,e,Ne),qe=new DE(X),ut=new nM(X),it=new xE,lt=new UE(X,Xe,qe,it,xt,Ne,ut),At=new $S(E),F=new ZS(E),C=new cx(X),nt=new jS(X,C),re=new eM(X,C,ut,nt),de=new rM(X,re,C,ut),Ve=new iM(X,xt,lt),Te=new YS(it),_e=new _E(E,At,F,Xe,xt,nt,Te),ye=new GE(E,it),Ge=new SE,Re=new CE(Xe),Ee=new WS(E,At,F,qe,de,v,h),Je=new NE(E,de,xt),dt=new WE(X,ut,xt,qe),at=new XS(X,Xe,ut),Ye=new tM(X,Xe,ut),ut.programs=_e.programs,E.capabilities=xt,E.extensions=Xe,E.properties=it,E.renderLists=Ge,E.shadowMap=Je,E.state=qe,E.info=ut}Ct();const tt=new HE(E,X);this.xr=tt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const b=Xe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Xe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(b){b!==void 0&&(fe=b,this.setSize(ae,ve,!1))},this.getSize=function(b){return b.set(ae,ve)},this.setSize=function(b,j,ne=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=b,ve=j,n.width=Math.floor(b*fe),n.height=Math.floor(j*fe),ne===!0&&(n.style.width=b+"px",n.style.height=j+"px"),this.setViewport(0,0,b,j)},this.getDrawingBufferSize=function(b){return b.set(ae*fe,ve*fe).floor()},this.setDrawingBufferSize=function(b,j,ne){ae=b,ve=j,fe=ne,n.width=Math.floor(b*ne),n.height=Math.floor(j*ne),this.setViewport(0,0,b,j)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(Z)},this.setViewport=function(b,j,ne,ee){b.isVector4?Z.set(b.x,b.y,b.z,b.w):Z.set(b,j,ne,ee),qe.viewport(w.copy(Z).multiplyScalar(fe).round())},this.getScissor=function(b){return b.copy(O)},this.setScissor=function(b,j,ne,ee){b.isVector4?O.set(b.x,b.y,b.z,b.w):O.set(b,j,ne,ee),qe.scissor($.copy(O).multiplyScalar(fe).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(b){qe.setScissorTest(ie=b)},this.setOpaqueSort=function(b){z=b},this.setTransparentSort=function(b){se=b},this.getClearColor=function(b){return b.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(b=!0,j=!0,ne=!0){let ee=0;if(b){let J=!1;if(U!==null){const Ae=U.texture.format;J=Ae===Im||Ae===Um||Ae===Dm}if(J){const Ae=U.texture.type,ke=Ae===mr||Ae===ks||Ae===bm||Ae===Uo||Ae===Lm||Ae===Nm,He=Ee.getClearColor(),$e=Ee.getClearAlpha(),et=He.r,Fe=He.g,rt=He.b;ke?(S[0]=et,S[1]=Fe,S[2]=rt,S[3]=$e,X.clearBufferuiv(X.COLOR,0,S)):(A[0]=et,A[1]=Fe,A[2]=rt,A[3]=$e,X.clearBufferiv(X.COLOR,0,A))}else ee|=X.COLOR_BUFFER_BIT}j&&(ee|=X.DEPTH_BUFFER_BIT),ne&&(ee|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",G,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),Ge.dispose(),Re.dispose(),it.dispose(),At.dispose(),F.dispose(),de.dispose(),nt.dispose(),dt.dispose(),_e.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",vt),tt.removeEventListener("sessionend",xn),Kt.stop()};function G(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const b=ut.autoReset,j=Je.enabled,ne=Je.autoUpdate,ee=Je.needsUpdate,J=Je.type;Ct(),ut.autoReset=b,Je.enabled=j,Je.autoUpdate=ne,Je.needsUpdate=ee,Je.type=J}function ce(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function we(b){const j=b.target;j.removeEventListener("dispose",we),be(j)}function be(b){pt(b),it.remove(b)}function pt(b){const j=it.get(b).programs;j!==void 0&&(j.forEach(function(ne){_e.releaseProgram(ne)}),b.isShaderMaterial&&_e.releaseShaderCache(b))}this.renderBufferDirect=function(b,j,ne,ee,J,Ae){j===null&&(j=Ue);const ke=J.isMesh&&J.matrixWorld.determinant()<0,He=Rl(b,j,ne,ee,J);qe.setMaterial(ee,ke);let $e=ne.index,et=1;if(ee.wireframe===!0){if($e=re.getWireframeAttribute(ne),$e===void 0)return;et=2}const Fe=ne.drawRange,rt=ne.attributes.position;let Nt=Fe.start*et,Wt=(Fe.start+Fe.count)*et;Ae!==null&&(Nt=Math.max(Nt,Ae.start*et),Wt=Math.min(Wt,(Ae.start+Ae.count)*et)),$e!==null?(Nt=Math.max(Nt,0),Wt=Math.min(Wt,$e.count)):rt!=null&&(Nt=Math.max(Nt,0),Wt=Math.min(Wt,rt.count));const Qt=Wt-Nt;if(Qt<0||Qt===1/0)return;nt.setup(J,ee,He,ne,$e);let $n,mt=at;if($e!==null&&($n=C.get($e),mt=Ye,mt.setIndex($n)),J.isMesh)ee.wireframe===!0?(qe.setLineWidth(ee.wireframeLinewidth*ze()),mt.setMode(X.LINES)):mt.setMode(X.TRIANGLES);else if(J.isLine){let Qe=ee.linewidth;Qe===void 0&&(Qe=1),qe.setLineWidth(Qe*ze()),J.isLineSegments?mt.setMode(X.LINES):J.isLineLoop?mt.setMode(X.LINE_LOOP):mt.setMode(X.LINE_STRIP)}else J.isPoints?mt.setMode(X.POINTS):J.isSprite&&mt.setMode(X.TRIANGLES);if(J.isBatchedMesh)J._multiDrawInstances!==null?mt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances):mt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)mt.renderInstances(Nt,Qt,J.count);else if(ne.isInstancedBufferGeometry){const Qe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,ln=Math.min(ne.instanceCount,Qe);mt.renderInstances(Nt,Qt,ln)}else mt.render(Nt,Qt)};function Mt(b,j,ne){b.transparent===!0&&b.side===Di&&b.forceSinglePass===!1?(b.side=bn,b.needsUpdate=!0,vi(b,j,ne),b.side=pr,b.needsUpdate=!0,vi(b,j,ne),b.side=Di):vi(b,j,ne)}this.compile=function(b,j,ne=null){ne===null&&(ne=b),x=Re.get(ne),x.init(j),N.push(x),ne.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),b!==ne&&b.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),x.setupLights(E._useLegacyLights);const ee=new Set;return b.traverse(function(J){const Ae=J.material;if(Ae)if(Array.isArray(Ae))for(let ke=0;ke<Ae.length;ke++){const He=Ae[ke];Mt(He,ne,J),ee.add(He)}else Mt(Ae,ne,J),ee.add(Ae)}),N.pop(),x=null,ee},this.compileAsync=function(b,j,ne=null){const ee=this.compile(b,j,ne);return new Promise(J=>{function Ae(){if(ee.forEach(function(ke){it.get(ke).currentProgram.isReady()&&ee.delete(ke)}),ee.size===0){J(b);return}setTimeout(Ae,10)}Xe.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Rt=null;function Gt(b){Rt&&Rt(b)}function vt(){Kt.stop()}function xn(){Kt.start()}const Kt=new $m;Kt.setAnimationLoop(Gt),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(b){Rt=b,tt.setAnimationLoop(b),b===null?Kt.stop():Kt.start()},tt.addEventListener("sessionstart",vt),tt.addEventListener("sessionend",xn),this.render=function(b,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(j),j=tt.getCamera()),b.isScene===!0&&b.onBeforeRender(E,b,j,U),x=Re.get(b,N.length),x.init(j),N.push(x),Se.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Le.setFromProjectionMatrix(Se),ue=this.localClippingEnabled,K=Te.init(this.clippingPlanes,ue),T=Ge.get(b,_.length),T.init(),_.push(T),Fi(b,j,0,E.sortObjects),T.finish(),E.sortObjects===!0&&T.sort(z,se);const ne=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1;ne&&Ee.addToRenderList(T,b),this.info.render.frame++,K===!0&&Te.beginShadows();const ee=x.state.shadowsArray;Je.render(ee,b,j),K===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=T.opaque,Ae=T.transmissive;if(x.setupLights(E._useLegacyLights),j.isArrayCamera){const ke=j.cameras;if(Ae.length>0)for(let He=0,$e=ke.length;He<$e;He++){const et=ke[He];Oi(J,Ae,b,et)}ne&&Ee.render(b);for(let He=0,$e=ke.length;He<$e;He++){const et=ke[He];Gr(T,b,et,et.viewport)}}else Ae.length>0&&Oi(J,Ae,b,j),ne&&Ee.render(b),Gr(T,b,j);U!==null&&(lt.updateMultisampleRenderTarget(U),lt.updateRenderTargetMipmap(U)),b.isScene===!0&&b.onAfterRender(E,b,j),nt.resetDefaultState(),W=-1,L=null,N.pop(),N.length>0?(x=N[N.length-1],K===!0&&Te.setGlobalState(E.clippingPlanes,x.state.camera)):x=null,_.pop(),_.length>0?T=_[_.length-1]:T=null};function Fi(b,j,ne,ee){if(b.visible===!1)return;if(b.layers.test(j.layers)){if(b.isGroup)ne=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(j);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Le.intersectsSprite(b)){ee&&ge.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Se);const ke=de.update(b),He=b.material;He.visible&&T.push(b,ke,He,ne,ge.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Le.intersectsObject(b))){const ke=de.update(b),He=b.material;if(ee&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ge.copy(b.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),ge.copy(ke.boundingSphere.center)),ge.applyMatrix4(b.matrixWorld).applyMatrix4(Se)),Array.isArray(He)){const $e=ke.groups;for(let et=0,Fe=$e.length;et<Fe;et++){const rt=$e[et],Nt=He[rt.materialIndex];Nt&&Nt.visible&&T.push(b,ke,Nt,ne,ge.z,rt)}}else He.visible&&T.push(b,ke,He,ne,ge.z,null)}}const Ae=b.children;for(let ke=0,He=Ae.length;ke<He;ke++)Fi(Ae[ke],j,ne,ee)}function Gr(b,j,ne,ee){const J=b.opaque,Ae=b.transmissive,ke=b.transparent;x.setupLightsView(ne),K===!0&&Te.setGlobalState(E.clippingPlanes,ne),ee&&qe.viewport(w.copy(ee)),J.length>0&&Wr(J,j,ne),Ae.length>0&&Wr(Ae,j,ne),ke.length>0&&Wr(ke,j,ne),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Oi(b,j,ne,ee){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ee.id]===void 0&&(x.state.transmissionRenderTarget[ee.id]=new oi(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?hr:mr,minFilter:Vr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const Ae=x.state.transmissionRenderTarget[ee.id],ke=ee.viewport||w;Ae.setSize(ke.z,ke.w);const He=E.getRenderTarget();E.setRenderTarget(Ae),E.getClearColor(H),le=E.getClearAlpha(),le<1&&E.setClearColor(16777215,.5),E.clear();const $e=E.toneMapping;E.toneMapping=fr;const et=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),x.setupLightsView(ee),K===!0&&Te.setGlobalState(E.clippingPlanes,ee),Wr(b,ne,ee),lt.updateMultisampleRenderTarget(Ae),lt.updateRenderTargetMipmap(Ae),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let rt=0,Nt=j.length;rt<Nt;rt++){const Wt=j[rt],Qt=Wt.object,$n=Wt.geometry,mt=Wt.material,Qe=Wt.group;if(mt.side===Di&&Qt.layers.test(ee.layers)){const ln=mt.side;mt.side=bn,mt.needsUpdate=!0,ki(Qt,ne,ee,$n,mt,Qe),mt.side=ln,mt.needsUpdate=!0,Fe=!0}}Fe===!0&&(lt.updateMultisampleRenderTarget(Ae),lt.updateRenderTargetMipmap(Ae))}E.setRenderTarget(He),E.setClearColor(H,le),et!==void 0&&(ee.viewport=et),E.toneMapping=$e}function Wr(b,j,ne){const ee=j.isScene===!0?j.overrideMaterial:null;for(let J=0,Ae=b.length;J<Ae;J++){const ke=b[J],He=ke.object,$e=ke.geometry,et=ee===null?ke.material:ee,Fe=ke.group;He.layers.test(ne.layers)&&ki(He,j,ne,$e,et,Fe)}}function ki(b,j,ne,ee,J,Ae){b.onBeforeRender(E,j,ne,ee,J,Ae),b.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),J.onBeforeRender(E,j,ne,ee,b,Ae),J.transparent===!0&&J.side===Di&&J.forceSinglePass===!1?(J.side=bn,J.needsUpdate=!0,E.renderBufferDirect(ne,j,ee,J,b,Ae),J.side=pr,J.needsUpdate=!0,E.renderBufferDirect(ne,j,ee,J,b,Ae),J.side=Di):E.renderBufferDirect(ne,j,ee,J,b,Ae),b.onAfterRender(E,j,ne,ee,J,Ae)}function vi(b,j,ne){j.isScene!==!0&&(j=Ue);const ee=it.get(b),J=x.state.lights,Ae=x.state.shadowsArray,ke=J.state.version,He=_e.getParameters(b,J.state,Ae,j,ne),$e=_e.getProgramCacheKey(He);let et=ee.programs;ee.environment=b.isMeshStandardMaterial?j.environment:null,ee.fog=j.fog,ee.envMap=(b.isMeshStandardMaterial?F:At).get(b.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&b.envMap===null?j.environmentRotation:b.envMapRotation,et===void 0&&(b.addEventListener("dispose",we),et=new Map,ee.programs=et);let Fe=et.get($e);if(Fe!==void 0){if(ee.currentProgram===Fe&&ee.lightsStateVersion===ke)return jr(b,He),Fe}else He.uniforms=_e.getUniforms(b),b.onBuild(ne,He,E),b.onBeforeCompile(He,E),Fe=_e.acquireProgram(He,$e),et.set($e,Fe),ee.uniforms=He.uniforms;const rt=ee.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(rt.clippingPlanes=Te.uniform),jr(b,He),ee.needsLights=Pl(b),ee.lightsStateVersion=ke,ee.needsLights&&(rt.ambientLightColor.value=J.state.ambient,rt.lightProbe.value=J.state.probe,rt.directionalLights.value=J.state.directional,rt.directionalLightShadows.value=J.state.directionalShadow,rt.spotLights.value=J.state.spot,rt.spotLightShadows.value=J.state.spotShadow,rt.rectAreaLights.value=J.state.rectArea,rt.ltc_1.value=J.state.rectAreaLTC1,rt.ltc_2.value=J.state.rectAreaLTC2,rt.pointLights.value=J.state.point,rt.pointLightShadows.value=J.state.pointShadow,rt.hemisphereLights.value=J.state.hemi,rt.directionalShadowMap.value=J.state.directionalShadowMap,rt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,rt.spotShadowMap.value=J.state.spotShadowMap,rt.spotLightMatrix.value=J.state.spotLightMatrix,rt.spotLightMap.value=J.state.spotLightMap,rt.pointShadowMap.value=J.state.pointShadowMap,rt.pointShadowMatrix.value=J.state.pointShadowMatrix),ee.currentProgram=Fe,ee.uniformsList=null,Fe}function vr(b){if(b.uniformsList===null){const j=b.currentProgram.getUniforms();b.uniformsList=ml.seqWithValue(j.seq,b.uniforms)}return b.uniformsList}function jr(b,j){const ne=it.get(b);ne.outputColorSpace=j.outputColorSpace,ne.batching=j.batching,ne.instancing=j.instancing,ne.instancingColor=j.instancingColor,ne.instancingMorph=j.instancingMorph,ne.skinning=j.skinning,ne.morphTargets=j.morphTargets,ne.morphNormals=j.morphNormals,ne.morphColors=j.morphColors,ne.morphTargetsCount=j.morphTargetsCount,ne.numClippingPlanes=j.numClippingPlanes,ne.numIntersection=j.numClipIntersection,ne.vertexAlphas=j.vertexAlphas,ne.vertexTangents=j.vertexTangents,ne.toneMapping=j.toneMapping}function Rl(b,j,ne,ee,J){j.isScene!==!0&&(j=Ue),lt.resetTextureUnits();const Ae=j.fog,ke=ee.isMeshStandardMaterial?j.environment:null,He=U===null?E.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:gr,$e=(ee.isMeshStandardMaterial?F:At).get(ee.envMap||ke),et=ee.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Fe=!!ne.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),rt=!!ne.morphAttributes.position,Nt=!!ne.morphAttributes.normal,Wt=!!ne.morphAttributes.color;let Qt=fr;ee.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Qt=E.toneMapping);const $n=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,mt=$n!==void 0?$n.length:0,Qe=it.get(ee),ln=x.state.lights;if(K===!0&&(ue===!0||b!==L)){const rn=b===L&&ee.id===W;Te.setState(ee,b,rn)}let wt=!1;ee.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==ln.state.version||Qe.outputColorSpace!==He||J.isBatchedMesh&&Qe.batching===!1||!J.isBatchedMesh&&Qe.batching===!0||J.isInstancedMesh&&Qe.instancing===!1||!J.isInstancedMesh&&Qe.instancing===!0||J.isSkinnedMesh&&Qe.skinning===!1||!J.isSkinnedMesh&&Qe.skinning===!0||J.isInstancedMesh&&Qe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Qe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Qe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Qe.instancingMorph===!1&&J.morphTexture!==null||Qe.envMap!==$e||ee.fog===!0&&Qe.fog!==Ae||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Te.numPlanes||Qe.numIntersection!==Te.numIntersection)||Qe.vertexAlphas!==et||Qe.vertexTangents!==Fe||Qe.morphTargets!==rt||Qe.morphNormals!==Nt||Qe.morphColors!==Wt||Qe.toneMapping!==Qt||Qe.morphTargetsCount!==mt)&&(wt=!0):(wt=!0,Qe.__version=ee.version);let jt=Qe.currentProgram;wt===!0&&(jt=vi(ee,j,J));let Bo=!1,_r=!1,Ws=!1;const kt=jt.getUniforms(),Ln=Qe.uniforms;if(qe.useProgram(jt.program)&&(Bo=!0,_r=!0,Ws=!0),ee.id!==W&&(W=ee.id,_r=!0),Bo||L!==b){kt.setValue(X,"projectionMatrix",b.projectionMatrix),kt.setValue(X,"viewMatrix",b.matrixWorldInverse);const rn=kt.map.cameraPosition;rn!==void 0&&rn.setValue(X,ge.setFromMatrixPosition(b.matrixWorld)),xt.logarithmicDepthBuffer&&kt.setValue(X,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&kt.setValue(X,"isOrthographic",b.isOrthographicCamera===!0),L!==b&&(L=b,_r=!0,Ws=!0)}if(J.isSkinnedMesh){kt.setOptional(X,J,"bindMatrix"),kt.setOptional(X,J,"bindMatrixInverse");const rn=J.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),kt.setValue(X,"boneTexture",rn.boneTexture,lt))}J.isBatchedMesh&&(kt.setOptional(X,J,"batchingTexture"),kt.setValue(X,"batchingTexture",J._matricesTexture,lt));const _i=ne.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&Ve.update(J,ne,jt),(_r||Qe.receiveShadow!==J.receiveShadow)&&(Qe.receiveShadow=J.receiveShadow,kt.setValue(X,"receiveShadow",J.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Ln.envMap.value=$e,Ln.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&j.environment!==null&&(Ln.envMapIntensity.value=j.environmentIntensity),_r&&(kt.setValue(X,"toneMappingExposure",E.toneMappingExposure),Qe.needsLights&&bl(Ln,Ws),Ae&&ee.fog===!0&&ye.refreshFogUniforms(Ln,Ae),ye.refreshMaterialUniforms(Ln,ee,fe,ve,x.state.transmissionRenderTarget[b.id]),ml.upload(X,vr(Qe),Ln,lt)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(ml.upload(X,vr(Qe),Ln,lt),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&kt.setValue(X,"center",J.center),kt.setValue(X,"modelViewMatrix",J.modelViewMatrix),kt.setValue(X,"normalMatrix",J.normalMatrix),kt.setValue(X,"modelMatrix",J.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const rn=ee.uniformsGroups;for(let js=0,Ll=rn.length;js<Ll;js++){const Xr=rn[js];dt.update(Xr,jt),dt.bind(Xr,jt)}}return jt}function bl(b,j){b.ambientLightColor.needsUpdate=j,b.lightProbe.needsUpdate=j,b.directionalLights.needsUpdate=j,b.directionalLightShadows.needsUpdate=j,b.pointLights.needsUpdate=j,b.pointLightShadows.needsUpdate=j,b.spotLights.needsUpdate=j,b.spotLightShadows.needsUpdate=j,b.rectAreaLights.needsUpdate=j,b.hemisphereLights.needsUpdate=j}function Pl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,j,ne){it.get(b.texture).__webglTexture=j,it.get(b.depthTexture).__webglTexture=ne;const ee=it.get(b);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=ne===void 0,ee.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,j){const ne=it.get(b);ne.__webglFramebuffer=j,ne.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(b,j=0,ne=0){U=b,V=j,I=ne;let ee=!0,J=null,Ae=!1,ke=!1;if(b){const $e=it.get(b);$e.__useDefaultFramebuffer!==void 0?(qe.bindFramebuffer(X.FRAMEBUFFER,null),ee=!1):$e.__webglFramebuffer===void 0?lt.setupRenderTarget(b):$e.__hasExternalTextures&&lt.rebindTextures(b,it.get(b.texture).__webglTexture,it.get(b.depthTexture).__webglTexture);const et=b.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(ke=!0);const Fe=it.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Fe[j])?J=Fe[j][ne]:J=Fe[j],Ae=!0):b.samples>0&&lt.useMultisampledRTT(b)===!1?J=it.get(b).__webglMultisampledFramebuffer:Array.isArray(Fe)?J=Fe[ne]:J=Fe,w.copy(b.viewport),$.copy(b.scissor),oe=b.scissorTest}else w.copy(Z).multiplyScalar(fe).floor(),$.copy(O).multiplyScalar(fe).floor(),oe=ie;if(qe.bindFramebuffer(X.FRAMEBUFFER,J)&&ee&&qe.drawBuffers(b,J),qe.viewport(w),qe.scissor($),qe.setScissorTest(oe),Ae){const $e=it.get(b.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+j,$e.__webglTexture,ne)}else if(ke){const $e=it.get(b.texture),et=j||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,$e.__webglTexture,ne||0,et)}W=-1},this.readRenderTargetPixels=function(b,j,ne,ee,J,Ae,ke){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=it.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ke!==void 0&&(He=He[ke]),He){qe.bindFramebuffer(X.FRAMEBUFFER,He);try{const $e=b.texture,et=$e.format,Fe=$e.type;if(!xt.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=b.width-ee&&ne>=0&&ne<=b.height-J&&X.readPixels(j,ne,ee,J,Ne.convert(et),Ne.convert(Fe),Ae)}finally{const $e=U!==null?it.get(U).__webglFramebuffer:null;qe.bindFramebuffer(X.FRAMEBUFFER,$e)}}},this.copyFramebufferToTexture=function(b,j,ne=0){const ee=Math.pow(2,-ne),J=Math.floor(j.image.width*ee),Ae=Math.floor(j.image.height*ee);lt.setTexture2D(j,0),X.copyTexSubImage2D(X.TEXTURE_2D,ne,0,0,b.x,b.y,J,Ae),qe.unbindTexture()},this.copyTextureToTexture=function(b,j,ne,ee=0){const J=j.image.width,Ae=j.image.height,ke=Ne.convert(ne.format),He=Ne.convert(ne.type);lt.setTexture2D(ne,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,ne.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,ne.unpackAlignment),j.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,ee,b.x,b.y,J,Ae,ke,He,j.image.data):j.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,ee,b.x,b.y,j.mipmaps[0].width,j.mipmaps[0].height,ke,j.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,ee,b.x,b.y,ke,He,j.image),ee===0&&ne.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),qe.unbindTexture()},this.copyTextureToTexture3D=function(b,j,ne,ee,J=0){const Ae=b.max.x-b.min.x,ke=b.max.y-b.min.y,He=b.max.z-b.min.z,$e=Ne.convert(ee.format),et=Ne.convert(ee.type);let Fe;if(ee.isData3DTexture)lt.setTexture3D(ee,0),Fe=X.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)lt.setTexture2DArray(ee,0),Fe=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,ee.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,ee.unpackAlignment);const rt=X.getParameter(X.UNPACK_ROW_LENGTH),Nt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Wt=X.getParameter(X.UNPACK_SKIP_PIXELS),Qt=X.getParameter(X.UNPACK_SKIP_ROWS),$n=X.getParameter(X.UNPACK_SKIP_IMAGES),mt=ne.isCompressedTexture?ne.mipmaps[J]:ne.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,mt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,mt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,b.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,b.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,b.min.z),ne.isDataTexture||ne.isData3DTexture?X.texSubImage3D(Fe,J,j.x,j.y,j.z,Ae,ke,He,$e,et,mt.data):ee.isCompressedArrayTexture?X.compressedTexSubImage3D(Fe,J,j.x,j.y,j.z,Ae,ke,He,$e,mt.data):X.texSubImage3D(Fe,J,j.x,j.y,j.z,Ae,ke,He,$e,et,mt),X.pixelStorei(X.UNPACK_ROW_LENGTH,rt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Nt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Wt),X.pixelStorei(X.UNPACK_SKIP_ROWS,Qt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,$n),J===0&&ee.generateMipmaps&&X.generateMipmap(Fe),qe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?lt.setTextureCube(b,0):b.isData3DTexture?lt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?lt.setTexture2DArray(b,0):lt.setTexture2D(b,0),qe.unbindTexture()},this.resetState=function(){V=0,I=0,U=null,qe.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ld?"display-p3":"srgb",n.unpackColorSpace=Et.workingColorSpace===wl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class XE extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ng extends Vs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mm=new Ot,sd=new Hm,fl=new Tl,hl=new Y;class qE extends an{constructor(e=new Yn,n=new ng){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fl.copy(r.boundingSphere),fl.applyMatrix4(a),fl.radius+=c,e.ray.intersectsSphere(fl)===!1)return;mm.copy(a).invert(),sd.copy(e.ray).applyMatrix4(mm);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,m=r.index,y=r.attributes.position;if(m!==null){const v=Math.max(0,u.start),S=Math.min(m.count,u.start+u.count);for(let A=v,T=S;A<T;A++){const x=m.getX(A);hl.fromBufferAttribute(y,x),gm(hl,x,h,a,e,n,this)}}else{const v=Math.max(0,u.start),S=Math.min(y.count,u.start+u.count);for(let A=v,T=S;A<T;A++)hl.fromBufferAttribute(y,A),gm(hl,A,h,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const f=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function gm(s,e,n,r,a,c,u){const f=sd.distanceSqToPoint(s);if(f<n){const h=new Y;sd.closestPointToPoint(s,h),h.applyMatrix4(r);const m=a.ray.origin.distanceTo(h);if(m<a.near||m>a.far)return;c.push({distance:m,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,object:u})}}class hd extends Yn{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const c=[],u=[];f(a),m(r),g(),this.setAttribute("position",new mn(c,3)),this.setAttribute("normal",new mn(c.slice(),3)),this.setAttribute("uv",new mn(u,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function f(N){const E=new Y,P=new Y,V=new Y;for(let I=0;I<n.length;I+=3)S(n[I+0],E),S(n[I+1],P),S(n[I+2],V),h(E,P,V,N)}function h(N,E,P,V){const I=V+1,U=[];for(let W=0;W<=I;W++){U[W]=[];const L=N.clone().lerp(P,W/I),w=E.clone().lerp(P,W/I),$=I-W;for(let oe=0;oe<=$;oe++)oe===0&&W===I?U[W][oe]=L:U[W][oe]=L.clone().lerp(w,oe/$)}for(let W=0;W<I;W++)for(let L=0;L<2*(I-W)-1;L++){const w=Math.floor(L/2);L%2===0?(v(U[W][w+1]),v(U[W+1][w]),v(U[W][w])):(v(U[W][w+1]),v(U[W+1][w+1]),v(U[W+1][w]))}}function m(N){const E=new Y;for(let P=0;P<c.length;P+=3)E.x=c[P+0],E.y=c[P+1],E.z=c[P+2],E.normalize().multiplyScalar(N),c[P+0]=E.x,c[P+1]=E.y,c[P+2]=E.z}function g(){const N=new Y;for(let E=0;E<c.length;E+=3){N.x=c[E+0],N.y=c[E+1],N.z=c[E+2];const P=x(N)/2/Math.PI+.5,V=_(N)/Math.PI+.5;u.push(P,1-V)}A(),y()}function y(){for(let N=0;N<u.length;N+=6){const E=u[N+0],P=u[N+2],V=u[N+4],I=Math.max(E,P,V),U=Math.min(E,P,V);I>.9&&U<.1&&(E<.2&&(u[N+0]+=1),P<.2&&(u[N+2]+=1),V<.2&&(u[N+4]+=1))}}function v(N){c.push(N.x,N.y,N.z)}function S(N,E){const P=N*3;E.x=e[P+0],E.y=e[P+1],E.z=e[P+2]}function A(){const N=new Y,E=new Y,P=new Y,V=new Y,I=new Ke,U=new Ke,W=new Ke;for(let L=0,w=0;L<c.length;L+=9,w+=6){N.set(c[L+0],c[L+1],c[L+2]),E.set(c[L+3],c[L+4],c[L+5]),P.set(c[L+6],c[L+7],c[L+8]),I.set(u[w+0],u[w+1]),U.set(u[w+2],u[w+3]),W.set(u[w+4],u[w+5]),V.copy(N).add(E).add(P).divideScalar(3);const $=x(V);T(I,w+0,N,$),T(U,w+2,E,$),T(W,w+4,P,$)}}function T(N,E,P,V){V<0&&N.x===1&&(u[E]=N.x-1),P.x===0&&P.z===0&&(u[E]=V/2/Math.PI+.5)}function x(N){return Math.atan2(N.z,-N.x)}function _(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hd(e.vertices,e.indices,e.radius,e.details)}}class pd extends hd{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,c,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new pd(e.radius,e.detail)}}class md extends Yn{constructor(e=1,n=.4,r=64,a=8,c=2,u=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:r,radialSegments:a,p:c,q:u},r=Math.floor(r),a=Math.floor(a);const f=[],h=[],m=[],g=[],y=new Y,v=new Y,S=new Y,A=new Y,T=new Y,x=new Y,_=new Y;for(let E=0;E<=r;++E){const P=E/r*c*Math.PI*2;N(P,c,u,e,S),N(P+.01,c,u,e,A),x.subVectors(A,S),_.addVectors(A,S),T.crossVectors(x,_),_.crossVectors(T,x),T.normalize(),_.normalize();for(let V=0;V<=a;++V){const I=V/a*Math.PI*2,U=-n*Math.cos(I),W=n*Math.sin(I);y.x=S.x+(U*_.x+W*T.x),y.y=S.y+(U*_.y+W*T.y),y.z=S.z+(U*_.z+W*T.z),h.push(y.x,y.y,y.z),v.subVectors(y,S).normalize(),m.push(v.x,v.y,v.z),g.push(E/r),g.push(V/a)}}for(let E=1;E<=r;E++)for(let P=1;P<=a;P++){const V=(a+1)*(E-1)+(P-1),I=(a+1)*E+(P-1),U=(a+1)*E+P,W=(a+1)*(E-1)+P;f.push(V,I,W),f.push(I,U,W)}this.setIndex(f),this.setAttribute("position",new mn(h,3)),this.setAttribute("normal",new mn(m,3)),this.setAttribute("uv",new mn(g,2));function N(E,P,V,I,U){const W=Math.cos(E),L=Math.sin(E),w=V/P*E,$=Math.cos(w);U.x=I*(2+$)*.5*W,U.y=I*(2+$)*L*.5,U.z=I*Math.sin(w)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new md(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class vm extends Vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fm,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ig extends an{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Yu=new Ot,_m=new Y,xm=new Y;class YE{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ud,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;_m.setFromMatrixPosition(e.matrixWorld),n.position.copy(_m),xm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(xm),n.updateMatrixWorld(),Yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yu),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Yu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $E extends YE{constructor(){super(new dd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class KE extends ig{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new $E}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class QE extends ig{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class ZE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ym(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=ym();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function ym(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ad}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ad);const rg={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class zo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const JE=new dd(-1,1,1,-1,0,1);class e1 extends Yn{constructor(){super(),this.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new mn([0,2,0,0,2,0],2))}}const t1=new e1;class sg{constructor(e){this._mesh=new qn(t1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,JE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class n1 extends zo{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Rn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ml.clone(e.uniforms),this.material=new Rn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new sg(this.material)}render(e,n,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Sm extends zo{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,r){const a=e.getContext(),c=e.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let u,f;this.inverse?(u=0,f=1):(u=1,f=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),c.buffers.stencil.setFunc(a.ALWAYS,u,4294967295),c.buffers.stencil.setClear(f),c.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(a.EQUAL,1,4294967295),c.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),c.buffers.stencil.setLocked(!0)}}class i1 extends zo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class r1{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const r=e.getSize(new Ke);this._width=r.width,this._height=r.height,n=new oi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hr}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new n1(rg),this.copyPass.material.blending=Ii,this.clock=new ZE}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let r=!1;for(let a=0,c=this.passes.length;a<c;a++){const u=this.passes[a];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),u.needsSwap){if(r){const f=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(f.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(f.EQUAL,1,4294967295)}this.swapBuffers()}Sm!==void 0&&(u instanceof Sm?r=!0:u instanceof i1&&(r=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const r=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(r,a),this.renderTarget2.setSize(r,a);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(r,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class s1 extends zo{constructor(e,n,r=null,a=null,c=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=r,this.clearColor=a,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ht}render(e,n,r){const a=e.autoClear;e.autoClear=!1;let c,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(c=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),e.autoClear=a}}const o1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ht(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Bs extends zo{constructor(e,n,r,a){super(),this.strength=n!==void 0?n:1,this.radius=r,this.threshold=a,this.resolution=e!==void 0?new Ke(e.x,e.y):new Ke(256,256),this.clearColor=new ht(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new oi(c,u,{type:hr}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let y=0;y<this.nMips;y++){const v=new oi(c,u,{type:hr});v.texture.name="UnrealBloomPass.h"+y,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const S=new oi(c,u,{type:hr});S.texture.name="UnrealBloomPass.v"+y,S.texture.generateMipmaps=!1,this.renderTargetsVertical.push(S),c=Math.round(c/2),u=Math.round(u/2)}const f=o1;this.highPassUniforms=Ml.clone(f.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Rn({uniforms:this.highPassUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader}),this.separableBlurMaterials=[];const h=[3,5,7,9,11];c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let y=0;y<this.nMips;y++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(h[y])),this.separableBlurMaterials[y].uniforms.invSize.value=new Ke(1/c,1/u),c=Math.round(c/2),u=Math.round(u/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const m=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=m,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const g=rg;this.copyUniforms=Ml.clone(g.uniforms),this.blendMaterial=new Rn({uniforms:this.copyUniforms,vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,blending:Ku,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ht,this.oldClearAlpha=1,this.basic=new cd,this.fsQuad=new sg(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let r=Math.round(e/2),a=Math.round(n/2);this.renderTargetBright.setSize(r,a);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(r,a),this.renderTargetsVertical[c].setSize(r,a),this.separableBlurMaterials[c].uniforms.invSize.value=new Ke(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2)}render(e,n,r,a,c){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const u=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),c&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let f=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this.fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=f.texture,this.separableBlurMaterials[h].uniforms.direction.value=Bs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=Bs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this.fsQuad.render(e),f=this.renderTargetsVertical[h];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=u}getSeperableBlurMaterial(e){const n=[];for(let r=0;r<e;r++)n.push(.39894*Math.exp(-.5*r*r/(e*e))/e);return new Rn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ke(.5,.5)},direction:{value:new Ke(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Rn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Bs.BlurDirectionX=new Ke(1,0);Bs.BlurDirectionY=new Ke(0,1);function a1(s,e){let n;return function(){const r=arguments,a=this;n||(s.apply(a,r),n=!0,setTimeout(()=>n=!1,e))}}function l1(){const s=ft.useRef(null);return ft.useEffect(()=>{if(!s.current)return;const e={backgroundColor:657946,particleColor:9133302,objectColor1:9133302,objectColor2:1357990},n=300,r=.05;let a,c,u,f,h,m,g;const y=new Ke(0,0);let v;const S=()=>{const E=s.current;u=new jE({antialias:!0,alpha:!0}),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.setClearColor(e.backgroundColor,1),E.appendChild(u.domElement),a=new XE,c=new jn(60,E.clientWidth/E.clientHeight,.1,100),c.position.set(0,0,7),a.add(new QE(16777215,.5));const P=new KE(e.particleColor,.7);P.position.set(5,5,5),a.add(P),A();const V=new s1(a,c);h=new Bs(new Ke(E.clientWidth,E.clientHeight),1.2,.4,.75),f=new r1(u),f.addPass(V),f.addPass(h),window.addEventListener("resize",T),E.addEventListener("mousemove",_),T(),N()},A=()=>{const E=new Float32Array(n*3);for(let W=0;W<n;W++)E[W*3+0]=(Math.random()-.5)*20,E[W*3+1]=(Math.random()-.5)*12,E[W*3+2]=(Math.random()-.5)*10;const P=new Yn;P.setAttribute("position",new mn(E,3));const V=new ng({color:e.particleColor,size:.03,transparent:!0,opacity:.8});g=new qE(P,V),a.add(g),m=new No;const I=new qn(new pd(1.4,1),new vm({color:e.objectColor1,wireframe:!0,transparent:!0,opacity:.2})),U=new qn(new md(.8,.26,120,16),new vm({color:e.objectColor2,wireframe:!0,transparent:!0,opacity:.15}));U.position.set(.5,.2,.8),m.add(I),m.add(U),a.add(m)},T=()=>{const E=s.current;if(!E)return;const P=E.clientWidth,V=E.clientHeight;c.aspect=P/V,c.updateProjectionMatrix(),u.setSize(P,V),f.setSize(P,V)},_=a1(E=>{const P=s.current;if(!P)return;const V=P.getBoundingClientRect();y.x=(E.clientX-V.left)/P.clientWidth*2-1,y.y=-((E.clientY-V.top)/P.clientHeight*2-1)},16),N=E=>{g.rotation.y=E*1e-4,m.rotation.y+=(y.x*r-m.rotation.y)*.05,m.rotation.x+=(y.y*r-m.rotation.x)*.05,m.children[0].rotation.x+=.001,m.children[0].rotation.y-=5e-4,m.children[1].rotation.x-=5e-4,m.children[1].rotation.z+=.001,f.render(),v=requestAnimationFrame(N)};return S(),()=>{cancelAnimationFrame(v),window.removeEventListener("resize",T),s.current&&(s.current.removeEventListener("mousemove",_),u.domElement&&s.current.removeChild(u.domElement)),a.traverse(E=>{(E.isMesh||E.isPoints)&&(E.geometry&&E.geometry.dispose(),E.material&&(Array.isArray(E.material)?E.material.forEach(P=>P.dispose()):E.material.dispose()))}),u.dispose()}},[]),R.jsx("div",{ref:s,className:"absolute inset-0 -z-10 w-full h-full"})}function c1({className:s="",children:e}){return R.jsx("div",{className:["mx-auto w-full max-w-5xl px-6",s].join(" "),children:e})}function u1(){const s=y=>{y.preventDefault(),document.querySelector("#register")?.scrollIntoView({behavior:"smooth"})},e="Vidyaarambh",n="From Code to Cloud: Build and Deploy Your First Machine Learning App.",[r,a]=ft.useState(""),[c,u]=ft.useState(""),[f,h]=ft.useState(!0),[m,g]=ft.useState(!1);return ft.useEffect(()=>{let y=0;const v=80,S=()=>{y<=e.length?(a(e.slice(0,y)),y+=1,A=setTimeout(S,v)):(h(!1),g(!0),x())};let A,T;const x=()=>{let _=0;const N=22,E=()=>{_<=n.length?(u(n.slice(0,_)),_+=1,T=setTimeout(E,N)):g(!1)};T=setTimeout(E,250)};return S(),()=>{clearTimeout(A),clearTimeout(T)}},[]),R.jsxs("section",{id:"top",className:"relative h-[92vh] flex items-center justify-center pt-20 overflow-hidden text-center",children:[R.jsx("div",{className:"absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"}),R.jsx(l1,{}),R.jsx(c1,{children:R.jsxs("div",{className:"max-w-3xl mx-auto","data-reveal":!0,children:[R.jsxs("h1",{className:"text-5xl md:text-7xl font-extrabold tracking-tight text-white",children:[R.jsx("span",{children:r}),f&&r.length<e.length?R.jsx("span",{className:"caret"}):null]}),R.jsxs("p",{className:"mt-4 text-xl md:text-2xl text-slate-300",children:[R.jsx("span",{children:c}),m&&c.length<n.length?R.jsx("span",{className:"caret"}):null]}),R.jsxs("div",{className:"mt-6 flex flex-wrap items-center justify-center gap-3 text-slate-300",children:[R.jsx("span",{className:"inline-block rounded-full bg-slate-800/70 px-3 py-1",children:"🗓️ Date: Sept 15, 2025"}),R.jsx("span",{className:"inline-block rounded-full bg-slate-800/70 px-3 py-1",children:"⏰ 2:15 PM - 5:00 PM"}),R.jsx("span",{className:"inline-block rounded-full bg-slate-800/70 px-3 py-1",children:"📍 Einstein Hall"})]}),R.jsxs("div",{className:"mt-10 flex items-center justify-center gap-4",children:[R.jsx("a",{href:"#register",onClick:s,className:"pulse-cta inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold shadow-lg bg-accent hover:brightness-110 text-white",children:"Register Now"}),R.jsx("a",{href:"#about",onClick:y=>{y.preventDefault(),document.querySelector("#about")?.scrollIntoView({behavior:"smooth"})},className:"text-slate-300 hover:text-white font-medium",children:"Learn more"})]}),R.jsxs("div",{className:"mt-10 flex items-center justify-center gap-2 text-slate-400 text-sm",children:[R.jsx(r0,{size:16})," Scroll for details"]})]})})]})}function d1({id:s,className:e="",children:n}){return R.jsx("section",{id:s,className:["relative py-16 md:py-24",e].join(" "),"data-reveal":!0,children:n})}function f1({className:s="",children:e}){return R.jsx("div",{className:["mx-auto w-full max-w-7xl px-6",s].join(" "),children:e})}function h1({title:s,subtitle:e}){return R.jsxs("div",{className:"mb-10 md:mb-12 text-center",children:[R.jsx("h2",{className:"text-3xl md:text-4xl font-extrabold tracking-tight text-white",children:s}),e?R.jsx("p",{className:"mt-3 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto",children:e}):null]})}function p1(){return R.jsxs(d1,{id:"about",className:"scroll-mt-24",children:[R.jsx("div",{className:"absolute inset-0 -z-10 opacity-[0.15] pointer-events-none",children:R.jsx("div",{className:"mx-auto max-w-7xl h-full px-6",children:R.jsx("div",{className:"h-full rounded-3xl bg-gradient-to-br from-violet-900/30 via-slate-900/20 to-transparent"})})}),R.jsx(f1,{children:R.jsxs("div",{className:"grid md:grid-cols-2 gap-8 items-start","data-stagger":!0,children:[R.jsxs("div",{className:"space-y-4",style:{"--delay-index":0},children:[R.jsx(h1,{title:"Stop Just Learning. Start Building."}),R.jsx("p",{className:"text-slate-300 text-lg leading-relaxed",children:"Theory teaches you the 'what,' but industry demands the 'how.' Vidyaarambh is a hands-on workshop designed exclusively for 1st to 3rd-year students to bridge the critical gap between classroom concepts and real-world application. Guided by senior students, you will walk step-by-step through the complete developer workflow: from setting up your environment to building an ML program and—most importantly—deploying it live for the world to see."})]}),R.jsx("div",{className:"relative",style:{"--delay-index":1},children:R.jsxs("div",{className:"aspect-video w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl shimmer",children:[R.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-teal-500/10 to-fuchsia-500/10"}),R.jsx("div",{className:"absolute inset-0 grid place-items-center text-slate-400",children:R.jsx("span",{className:"text-sm",children:"Event teaser coming soon"})})]})})]})})]})}function m1({id:s,className:e="",children:n}){return R.jsx("section",{id:s,className:["relative py-16 md:py-24",e].join(" "),"data-reveal":!0,children:n})}function g1({className:s="",children:e}){return R.jsx("div",{className:["mx-auto w-full max-w-7xl px-6",s].join(" "),children:e})}function v1({title:s,subtitle:e}){return R.jsxs("div",{className:"mb-10 md:mb-12 text-center",children:[R.jsx("h2",{className:"text-3xl md:text-4xl font-extrabold tracking-tight text-white",children:s}),e?R.jsx("p",{className:"mt-3 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto",children:e}):null]})}function _1(){const s=[{title:"Session 1: The Foundation (Git, GitHub & VS Code)",description:"Master the tools professionals use every day. Learn how to manage your code with Git, collaborate using GitHub, and configure VS Code to build projects efficiently.",Icon:f0},{title:"Session 2: The AI Toolkit (Colab & Hugging Face)",description:"Dive into the cloud with Google Colab. Learn how to leverage the power of Hugging Face to access and implement powerful, pre-trained AI models without building them from scratch.",Icon:e0},{title:"Session 3: The Launch (Deployment & Tools)",description:"A program on your laptop is just a file. A deployed app is a product. This session covers the essentials of deployment, teaching you how to take your ML program and make it accessible live on the internet.",Icon:R0}];return R.jsx(m1,{id:"sessions",className:"scroll-mt-24",children:R.jsxs(g1,{children:[R.jsx(v1,{title:"The Complete Developer Pipeline"}),R.jsx("div",{className:"grid md:grid-cols-3 gap-6","data-stagger":!0,children:s.map(({title:e,description:n,Icon:r},a)=>R.jsxs("div",{className:"group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl card-hover tilt shimmer zoom-img",style:{"--delay-index":a},children:[R.jsx("div",{className:"absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition border-glow"}),R.jsxs("div",{className:"flex items-center gap-3",children:[R.jsx("div",{className:"rounded-xl bg-slate-800 p-3",style:{color:"var(--accent)"},children:R.jsx(r,{size:24})}),R.jsx("h3",{className:"text-white font-semibold text-lg",children:e})]}),R.jsx("p",{className:"mt-3 text-slate-300 leading-relaxed",children:n})]},a))})]})})}function x1({id:s,className:e="",children:n}){return R.jsx("section",{id:s,className:["relative py-16 md:py-24",e].join(" "),"data-reveal":!0,children:n})}function y1({className:s="",children:e}){return R.jsx("div",{className:["mx-auto w-full max-w-7xl px-6",s].join(" "),children:e})}function S1({title:s}){return R.jsx("div",{className:"mb-10 md:mb-12 text-center",children:R.jsx("h2",{className:"text-3xl md:text-4xl font-extrabold tracking-tight text-white",children:s})})}const M1=[{name:"Parth Jamkhedkar",role:"Final Year, CSE | Session: VS Code, Git & GitHub",file:"parth.jpg",fallback:"Parth Jamkhedkar",linkedin:"https://www.linkedin.com/in/parth-jamkhedkar"},{name:"Bhavesh Salunke",role:"TY, AIDS | Session: Colab & Hugging Face",file:"bhavesh.jpg",fallback:"Bhavesh Salunke",linkedin:"https://www.linkedin.com/in/bhavesh-salunke-7a4163283"},{name:"Akash Chaudhari",role:"TY, AIDS | Session: Deployment & Common Tools",file:"akash.jpg",fallback:"Akash Chaudhari",linkedin:"https://www.linkedin.com/in/akash-ch"}];function E1(){return R.jsx(x1,{id:"mentors",className:"scroll-mt-24",children:R.jsxs(y1,{children:[R.jsx(S1,{title:"Guided by Seniors"}),R.jsx("div",{className:"grid md:grid-cols-3 gap-6","data-stagger":!0,children:M1.map((s,e)=>{const n=`/src/assets/${s.file}`,r=`https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(s.fallback)}`;return R.jsxs("div",{className:"group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-8 shadow-xl card-hover text-center flex flex-col items-center tilt shimmer",style:{"--delay-index":e},children:[R.jsx("div",{className:"absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition border-glow"}),R.jsx("img",{alt:s.name,className:"h-24 w-24 rounded-full border border-slate-700 ring-2",style:{ringColor:"var(--accent)"},src:n,onError:a=>{a.currentTarget.src=r}}),R.jsx("h3",{className:"mt-5 text-white font-bold text-xl",children:s.name}),R.jsx("p",{className:"mt-2 text-slate-400 text-sm max-w-xs",children:s.role}),R.jsxs("a",{href:s.linkedin,target:"_blank",rel:"noreferrer",className:"mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-slate-100 hover:brightness-110 hover:border-violet-500 transition","aria-label":`View ${s.name}'s LinkedIn profile`,children:[R.jsx(Tm,{size:18})," View LinkedIn Profile"]})]},e)})})]})})}function w1({id:s,className:e="",children:n}){return R.jsx("section",{id:s,className:["relative py-16 md:py-24",e].join(" "),"data-reveal":!0,children:n})}function T1({className:s="",children:e}){return R.jsx("div",{className:["mx-auto w-full max-w-7xl px-6",s].join(" "),children:e})}function A1({title:s,subtitle:e}){return R.jsxs("div",{className:"mb-10 md:mb-12 text-center",children:[R.jsx("h2",{className:"text-3xl md:text-4xl font-extrabold tracking-tight text-white",children:s}),e?R.jsx("p",{className:"mt-3 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto",children:e}):null]})}function C1(){const s=[{text:"🏆 Two (2) Prizes for First-Year Students",img:"/images/prize-placeholder-1.png"},{text:"🏆 One (1) Prize for Second-Year Students",img:"/images/prize-placeholder-1.png"},{text:"🏆 One (1) Prize for Third-Year Students",img:"/images/prize-placeholder-1.png"}];return R.jsx(w1,{id:"prizes",className:"scroll-mt-24",children:R.jsxs(T1,{children:[R.jsx(A1,{title:"Put Your Skills to the Test",subtitle:"After the sessions, you'll compete in a timed challenge. Tasks will be judged by the organizers and will require you to successfully upload your code to GitHub using the Git CLI and deploy the provided ML program live."}),R.jsx("div",{className:"grid md:grid-cols-3 gap-6","data-stagger":!0,children:s.map((e,n)=>R.jsxs("div",{className:"group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl card-hover tilt shimmer zoom-img",style:{"--delay-index":n},children:[R.jsx("div",{className:"absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition border-glow"}),R.jsx("img",{src:e.img,alt:"Prize",className:"aspect-video w-full object-cover overflow-hidden rounded-xl border border-slate-800 bg-slate-800/40"}),R.jsx("p",{className:"mt-4 text-slate-300",children:e.text}),R.jsx("p",{className:"text-slate-400 text-sm",children:"We have approximately ₹4,000 in exciting prizes to be won!"})]},n))})]})})}function R1({id:s,className:e="",children:n}){return R.jsx("section",{id:s,className:["relative py-16 md:py-24",e].join(" "),"data-reveal":!0,children:n})}function b1({className:s="",children:e}){return R.jsx("div",{className:["mx-auto w-full max-w-7xl px-6",s].join(" "),children:e})}function P1(){return R.jsx(R1,{id:"perks",className:"scroll-mt-24",children:R.jsx(b1,{children:R.jsxs("div",{className:"relative overflow-hidden rounded-2xl border border-slate-800 animated-gradient gradient-animate p-10 shadow-2xl text-center","data-reveal":!0,children:[R.jsx("h3",{className:"text-2xl md:text-3xl font-extrabold text-white",children:"Everyone Who Attends Gets a Major Upgrade"}),R.jsx("p",{className:"mt-3 text-slate-200 text-lg",children:"Just for participating (attendance will be marked!), every attendee will receive a Google Gemini Pro subscription with sharing enabled for up to 5 users."}),R.jsx("p",{className:"mt-2 text-slate-300",children:"Walk away with a deployed ML app, hands-on skills, and a premium AI toolkit."})]})})})}function L1(s){return ft.useMemo(()=>s<50?{link:"#google-form-100",text:"Register Now (₹100)",disabled:!1}:s>=50&&s<80?{link:"#google-form-150",text:"Register Now (₹150)",disabled:!1}:s>=80&&s<100?{link:"#google-form-200",text:"Register Now (₹200)",disabled:!1}:{link:null,text:"Event Sold Out!",disabled:!0},[s])}function N1({id:s,className:e="",children:n}){return R.jsx("section",{id:s,className:["relative py-16 md:py-24",e].join(" "),"data-reveal":!0,children:n})}function D1({className:s="",children:e}){return R.jsx("div",{className:["mx-auto w-full max-w-7xl px-6",s].join(" "),children:e})}function U1(){const[s,e]=ft.useState(0),{link:n,text:r,disabled:a}=L1(s),c=[{name:"Early Bird",price:"₹100",availability:"First 50 Members",featured:!0},{name:"Late Bird",price:"₹150",availability:"Next 30 Members"},{name:"Final Call",price:"₹200",availability:"Final 20 Members"}];return R.jsx(N1,{id:"register",className:"scroll-mt-24",children:R.jsxs(D1,{children:[R.jsxs("div",{className:"mb-10 md:mb-12 text-center",children:[R.jsx("h2",{className:"text-3xl md:text-4xl font-extrabold tracking-tight text-white",children:"Secure Your Seat"}),R.jsx("p",{className:"mt-3 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto",children:"Seats are limited to 100 participants. Registration is first-come, first-served."})]}),R.jsx("div",{className:"grid md:grid-cols-3 gap-6","data-stagger":!0,children:c.map((u,f)=>R.jsxs("div",{className:`group relative rounded-2xl border ${u.featured?"border-violet-500 border-glow-strong":"border-slate-800"} bg-slate-900/60 p-6 shadow-xl card-hover tilt shimmer`,style:{"--delay-index":f},children:[u.featured&&R.jsx("div",{className:"absolute -top-3 right-3 rounded-md bg-accent px-2 py-1 text-xs font-semibold text-white shadow",children:"Most Popular"}),R.jsxs("div",{className:"flex items-baseline justify-between",children:[R.jsx("h3",{className:"text-white font-semibold text-lg",children:u.name}),R.jsx("span",{className:"font-bold",style:{color:"var(--accent)"},children:u.price})]}),R.jsx("p",{className:"mt-2 text-slate-400",children:u.availability})]},f))}),R.jsxs("div",{className:"mt-8 flex flex-col items-center gap-4","data-reveal":!0,children:[n?R.jsx("a",{href:n,className:"pulse-cta inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold shadow-lg bg-accent hover:brightness-110 text-white transition",children:r}):R.jsx("button",{disabled:!0,className:"inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold shadow-lg bg-slate-600 text-white opacity-70 cursor-not-allowed transition",children:r}),R.jsxs("div",{className:"w-full max-w-xl rounded-xl border border-slate-800 bg-slate-900/60 p-4",children:[R.jsxs("div",{className:"flex items-center justify-between text-slate-300",children:[R.jsx("span",{className:"text-sm",children:"Simulate current registrations"}),R.jsxs("span",{className:"text-sm font-semibold",children:[s," / 100"]})]}),R.jsx("input",{type:"range",min:"0",max:"120",value:s,onChange:u=>e(Number(u.target.value)),className:"mt-3 w-full accent-violet-500"}),s>=100?R.jsx("p",{className:"mt-2 text-sm text-rose-400",children:"Capacity reached. Registration closed."}):null]})]})]})})}function I1({id:s,className:e="",children:n}){return R.jsx("section",{id:s,className:["relative py-16 md:py-24",e].join(" "),"data-reveal":!0,children:n})}function F1({className:s="",children:e}){return R.jsx("div",{className:["mx-auto w-full max-w-7xl px-6",s].join(" "),children:e})}function O1({title:s}){return R.jsx("div",{className:"mb-10 md:mb-12 text-center",children:R.jsx("h2",{className:"text-3xl md:text-4xl font-extrabold tracking-tight text-white",children:s})})}function k1(){const s=[{Icon:_0,text:"Bring Your Laptop (Mandatory). This is a hands-on workshop."},{Icon:Zv,text:"Arrive Fully Charged. Charging facilities are extremely limited."},{Icon:l0,text:"Be Present. Attendance will be marked at the door."}];return R.jsx(I1,{id:"prerequisites",className:"scroll-mt-24",children:R.jsxs(F1,{children:[R.jsx(O1,{title:"Attendee Requirements"}),R.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:s.map((e,n)=>R.jsx("div",{className:"rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl","data-reveal":!0,children:R.jsxs("div",{className:"flex items-start gap-4",children:[R.jsx("div",{className:"rounded-xl bg-slate-800 p-3",style:{color:"var(--accent)"},children:R.jsx(e.Icon,{size:24,className:"bounce-in"})}),R.jsx("p",{className:"text-slate-300",children:e.text})]})},n))})]})})}function z1({id:s,className:e="",children:n}){return R.jsx("section",{id:s,className:["relative py-16 md:py-24",e].join(" "),"data-reveal":!0,children:n})}function B1({className:s="",children:e}){return R.jsx("div",{className:["mx-auto w-full max-w-7xl px-6",s].join(" "),children:e})}function Mm({name:s,role:e,phone:n,image:r,linkedin:a,instagram:c,badge:u}){const f=`https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(s)}`;return R.jsxs("div",{className:"group relative w-72 shrink-0 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl card-hover mx-3",children:[u?R.jsx("span",{className:"absolute -top-3 left-4 rounded-md bg-accent/90 px-2 py-1 text-xs font-semibold text-white shadow",children:u}):null,R.jsxs("div",{className:"flex items-center gap-4",children:[R.jsx("img",{alt:s,src:r||f,className:"h-14 w-14 rounded-full object-cover border border-slate-700 ring-2",style:{ringColor:"var(--accent)"},onError:h=>{h.currentTarget.src=f}}),R.jsxs("div",{className:"min-w-0",children:[R.jsx("h4",{className:"truncate text-white font-bold",children:s}),e?R.jsx("p",{className:"truncate text-slate-400 text-sm",children:e}):null]})]}),R.jsxs("div",{className:"mt-4 flex items-center justify-between text-sm",children:[n?R.jsxs("a",{href:`tel:${n.replace(/\s|\+/g,"")}`,className:"inline-flex items-center gap-2 text-slate-300 hover:text-white transition",children:[R.jsx($u,{size:16})," ",n]}):R.jsx("span",{}),R.jsxs("div",{className:"flex items-center gap-2 text-slate-300",children:[a?R.jsx("a",{href:a,target:"_blank",rel:"noreferrer",className:"rounded-md border border-slate-700 p-1 hover:border-violet-500",children:R.jsx(Tm,{size:16})}):null,c?R.jsx("a",{href:c,target:"_blank",rel:"noreferrer",className:"rounded-md border border-slate-700 p-1 hover:border-violet-500",children:R.jsx(g0,{size:16})}):null]})]})]})}function H1(){const s=ft.useMemo(()=>[{name:"Aruna Phatale",role:"Faculty Coordinator"},{name:"Mrudula Mulay",role:"Faculty Coordinator"},{name:"V.A. Kulkarni",role:"Faculty Coordinator"}],[]),e=ft.useMemo(()=>({name:"Satvik Kandarkar",role:"Student Coordinator",phone:"+91 89993 08824",image:"/images/lead-contact.png",linkedin:"https://www.linkedin.com",instagram:"https://www.instagram.com",badge:"Lead Contact"}),[]),n=ft.useMemo(()=>["Akash Chaudhari","Kanishka Arya","Nandini Patil","Sneha Jadhav"].map(v=>({name:v,role:"Core Team"})),[]),r=ft.useMemo(()=>{const v=s.map(T=>({...T,badge:"Faculty"})),S=[e],A=n.map(T=>({...T}));return[...v,...S,...A]},[s,e,n]),a=ft.useRef(null),c=ft.useRef(null),[u,f]=ft.useState(!1),[h,m]=ft.useState(!1),[g,y]=ft.useState(0);return ft.useEffect(()=>{const v=()=>{const T=a.current,x=c.current;if(!T||!x)return;let _=0;for(let N=0;N<Math.min(r.length,x.children.length);N++)_+=x.children[N].getBoundingClientRect().width;y(_),m(_>T.clientWidth+16),T.scrollLeft=0},S=new ResizeObserver(v);a.current&&S.observe(a.current);const A=requestAnimationFrame(v);return()=>{S.disconnect(),cancelAnimationFrame(A)}},[r.length]),ft.useEffect(()=>{if(!h||g===0)return;const v=a.current;if(!v)return;let S;const A=.6,T=()=>{u||(v.scrollLeft+=A,v.scrollLeft>=g&&(v.scrollLeft=v.scrollLeft-g)),S=requestAnimationFrame(T)};return S=requestAnimationFrame(T),()=>cancelAnimationFrame(S)},[u,h,g]),R.jsx(z1,{id:"contact",className:"scroll-mt-24",children:R.jsxs(B1,{children:[R.jsxs("div",{className:"mb-8 md:mb-10 text-center",children:[R.jsxs("div",{className:"mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-slate-300",children:[R.jsx(pl,{size:16,className:"accent"})," Organizers & Contacts"]}),R.jsx("h2",{className:"text-3xl md:text-4xl font-extrabold tracking-tight text-white",children:"Meet the Team"}),R.jsx("p",{className:"mt-2 text-slate-400",children:"Faculty, Lead Contact, and Core Team — auto-scrolling"})]}),R.jsx("div",{ref:a,onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),className:"relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40",children:R.jsxs("div",{ref:c,className:"flex w-max py-6",children:[r.map((v,S)=>R.jsx(Mm,{...v},`set1-${v.name}-${S}`)),h&&r.map((v,S)=>R.jsx(Mm,{...v},`set2-${v.name}-${S}`))]})})]})})}function Em({className:s="",children:e}){return R.jsx("div",{className:["mx-auto w-full max-w-7xl px-6",s].join(" "),children:e})}function V1(){const[s,e]=ft.useState(!1),[n,r]=ft.useState(new Date);ft.useEffect(()=>{const m=setInterval(()=>r(new Date),6e4);return()=>clearInterval(m)},[]),ft.useEffect(()=>{const m=()=>{window.pageYOffset>300?e(!0):e(!1)};return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]);const a=[{label:"About",href:"#about",icon:pl},{label:"Sessions",href:"#sessions",icon:n0},{label:"Mentors",href:"#mentors",icon:pl},{label:"Register",href:"#register",icon:Va}],c=(m,g)=>{m.preventDefault();const y=document.querySelector(g);if(y){const v=y.offsetTop-80;window.scrollTo({top:v,behavior:"smooth"}),history.replaceState(null,"",g)}},u=()=>{window.scrollTo({top:0,behavior:"smooth"})},f=m=>m.toLocaleTimeString("en-IN",{timeZone:"Asia/Kolkata",hour12:!0,hour:"2-digit",minute:"2-digit"}),h=m=>m.toLocaleDateString("en-IN",{timeZone:"Asia/Kolkata",weekday:"long",year:"numeric",month:"long",day:"numeric"});return R.jsxs(R.Fragment,{children:[R.jsxs("footer",{className:"relative border-t border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden",children:[R.jsx("div",{className:"absolute inset-0 opacity-5",children:R.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_rgb(148,163,184)_1px,_transparent_0)] bg-[length:40px_40px]"})}),R.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-violet-950/20 via-transparent to-transparent"}),R.jsxs(Em,{className:"relative py-16",children:[R.jsxs("div",{className:"text-center mb-12",children:[R.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[R.jsx($h,{className:"w-8 h-8 text-violet-400 animate-pulse"}),R.jsx("h3",{className:"text-white font-bold text-3xl bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent",children:"Vidyaarambh"}),R.jsx(u0,{className:"w-8 h-8 text-violet-400 animate-pulse"})]}),R.jsx("p",{className:"text-lg italic text-transparent bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text font-medium",children:"From Code to Cloud"}),R.jsx("div",{className:"mt-4 text-slate-400 text-sm",children:R.jsxs("p",{children:[h(n)," • ",f(n)," IST"]})})]}),R.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-12 text-sm",children:[R.jsxs("div",{className:"space-y-6",children:[R.jsxs("h4",{className:"text-white font-bold text-lg flex items-center gap-2",children:[R.jsx(Va,{className:"w-5 h-5 text-violet-400"}),"Quick Links"]}),R.jsx("nav",{className:"space-y-3",children:a.map(m=>{const g=m.icon;return R.jsx("div",{children:R.jsxs("a",{href:m.href,onClick:y=>c(y,m.href),className:"group flex items-center gap-3 text-slate-400 hover:text-violet-400 transition-all duration-300 hover:translate-x-2",children:[R.jsx(g,{className:"w-4 h-4 group-hover:scale-110 transition-transform duration-300"}),m.label]})},m.href)})})]}),R.jsxs("div",{className:"space-y-6",children:[R.jsxs("h4",{className:"text-white font-bold text-lg flex items-center gap-2",children:[R.jsx($u,{className:"w-5 h-5 text-violet-400"}),"Get in Touch"]}),R.jsxs("div",{className:"relative p-6 bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-violet-950/20 rounded-xl border border-slate-700/30 hover:border-violet-500/40 transition-all duration-300 group hover:shadow-lg hover:shadow-violet-500/10",children:[R.jsx("div",{className:"absolute inset-0 opacity-5 rounded-xl",children:R.jsx("div",{className:"w-full h-full bg-[radial-gradient(circle_at_20%_80%,_rgb(120,119,198)_3px,_transparent_4px)] bg-[length:15px_15px]"})}),R.jsxs("div",{className:"relative flex items-center gap-4 mb-6",children:[R.jsxs("div",{className:"relative",children:[R.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 p-0.5",children:R.jsx("div",{className:"w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden",children:R.jsx("div",{className:"w-full h-full bg-gradient-to-br from-violet-300 to-purple-400 rounded-full flex items-center justify-center text-slate-800 font-bold text-lg",children:"SK"})})}),R.jsx("div",{className:"absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-slate-800 flex items-center justify-center",children:R.jsx("div",{className:"w-2 h-2 bg-white rounded-full animate-pulse"})})]}),R.jsxs("div",{className:"flex-1",children:[R.jsx("h5",{className:"text-white font-bold text-lg group-hover:text-violet-300 transition-colors duration-300",children:"Satvik Kandarkar"}),R.jsx("p",{className:"text-violet-400 text-sm font-medium",children:"Student Coordinator"}),R.jsx("p",{className:"text-slate-500 text-xs mt-1",children:"Available for queries"})]})]}),R.jsxs("div",{className:"relative space-y-3",children:[R.jsxs("a",{href:"tel:+918999308824",className:"flex items-center gap-3 p-3 bg-slate-700/20 rounded-lg hover:bg-slate-700/40 transition-all duration-300 group/contact hover:translate-x-1",children:[R.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center group-hover/contact:bg-green-500/30 transition-colors duration-300",children:R.jsx($u,{className:"w-4 h-4 text-green-400 group-hover/contact:scale-110 transition-transform duration-300"})}),R.jsxs("div",{className:"flex-1",children:[R.jsx("p",{className:"text-slate-300 font-medium text-sm",children:"Phone"}),R.jsx("p",{className:"text-slate-400 text-xs",children:"+91 8999308824"})]}),R.jsx(Va,{className:"w-4 h-4 text-slate-500 group-hover/contact:text-violet-400 transition-colors duration-300"})]}),R.jsxs("a",{href:"mailto:satvik@vidyaarambh.com",className:"flex items-center gap-3 p-3 bg-slate-700/20 rounded-lg hover:bg-slate-700/40 transition-all duration-300 group/contact hover:translate-x-1",children:[R.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover/contact:bg-blue-500/30 transition-colors duration-300",children:R.jsx(S0,{className:"w-4 h-4 text-blue-400 group-hover/contact:scale-110 transition-transform duration-300"})}),R.jsxs("div",{className:"flex-1",children:[R.jsx("p",{className:"text-slate-300 font-medium text-sm",children:"Email"}),R.jsx("p",{className:"text-slate-400 text-xs",children:"Quick Response"})]}),R.jsx(Va,{className:"w-4 h-4 text-slate-500 group-hover/contact:text-violet-400 transition-colors duration-300"})]})]}),R.jsxs("div",{className:"relative mt-4 flex items-center justify-between",children:[R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),R.jsx("span",{className:"text-xs text-slate-400",children:"Usually responds within 2 hours"})]}),R.jsx("div",{className:"text-xs text-violet-400 font-medium",children:"Available 9 AM - 8 PM"})]})]}),R.jsx("div",{className:"p-4 bg-violet-950/20 rounded-lg border border-violet-500/20",children:R.jsxs("div",{className:"flex items-start gap-3",children:[R.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-violet-500/20 rounded-full flex items-center justify-center mt-1",children:R.jsx(pl,{className:"w-4 h-4 text-violet-400"})}),R.jsxs("div",{children:[R.jsx("p",{className:"text-slate-200 font-medium text-sm mb-1",children:"Need Immediate Help?"}),R.jsx("p",{className:"text-slate-400 text-xs leading-relaxed",children:"For urgent queries about the workshop, registration issues, or technical problems, feel free to call directly. For general information, email works best!"})]})]})})]}),R.jsxs("div",{className:"space-y-6",children:[R.jsx("h4",{className:"text-white font-bold text-lg",children:"Quick FAQs"}),R.jsxs("div",{className:"space-y-4",children:[R.jsxs("div",{className:"p-4 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:border-violet-500/30 transition-colors duration-300",children:[R.jsx("p",{className:"text-slate-200 font-semibold mb-2",children:"Who can attend?"}),R.jsx("p",{className:"text-slate-400 text-xs",children:"1st, 2nd, and 3rd-year JNEC students only"})]}),R.jsxs("div",{className:"p-4 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:border-violet-500/30 transition-colors duration-300",children:[R.jsx("p",{className:"text-slate-200 font-semibold mb-2",children:"Experience needed?"}),R.jsx("p",{className:"text-slate-400 text-xs",children:"No prior coding experience required!"})]}),R.jsxs("div",{className:"p-4 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:border-violet-500/30 transition-colors duration-300",children:[R.jsx("p",{className:"text-slate-200 font-semibold mb-2",children:"What to bring?"}),R.jsx("p",{className:"text-slate-400 text-xs",children:"Fully charged laptop (mandatory)"})]})]})]}),R.jsxs("div",{className:"space-y-6",children:[R.jsxs("h4",{className:"text-white font-bold text-lg flex items-center gap-2",children:[R.jsx(E0,{className:"w-5 h-5 text-violet-400"}),"Event Location"]}),R.jsxs("div",{className:"space-y-4",children:[R.jsx("div",{className:"p-4 bg-gradient-to-br from-violet-950/30 to-slate-800/30 rounded-lg border border-violet-500/20",children:R.jsxs("div",{className:"space-y-2 text-slate-300",children:[R.jsx("p",{className:"text-white font-semibold",children:"Einstein Hall"}),R.jsx("p",{className:"text-sm",children:"Jawaharlal Nehru Engineering College"}),R.jsx("p",{className:"text-sm",children:"MGM University"}),R.jsx("p",{className:"text-sm text-violet-400",children:"Ch. Sambhajinagar, Maharashtra"})]})}),R.jsxs("div",{className:"grid grid-cols-2 gap-3 mt-4",children:[R.jsxs("div",{className:"text-center p-3 bg-slate-800/40 rounded-lg",children:[R.jsx("p",{className:"text-violet-400 font-bold text-lg",children:"Workshop Date"}),R.jsx("p",{className:"text-slate-400 text-xs",children:"15th September 2025"})]}),R.jsx("div",{className:"text-center p-3 bg-slate-800/40 rounded-lg",children:R.jsxs("p",{className:"text-violet-400 font-bold text-lg",children:["Register ",R.jsx("br",{}),"Now"]})})]})]})]})]}),R.jsx("div",{className:"my-12",children:R.jsxs("div",{className:"flex items-center justify-center",children:[R.jsx("div",{className:"h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full max-w-md"}),R.jsx("div",{className:"mx-4 p-2 bg-violet-500/10 rounded-full border border-violet-500/20",children:R.jsx($h,{className:"w-4 h-4 text-violet-400"})}),R.jsx("div",{className:"h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full max-w-md"})]})})]}),R.jsx("div",{className:"border-t border-slate-800 bg-slate-950/80 backdrop-blur-sm",children:R.jsx(Em,{className:"py-6",children:R.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[R.jsx("p",{className:"text-xs text-slate-500",children:"© 2025 Vidyaarambh Team. All Rights Reserved."}),R.jsxs("div",{className:"flex items-center gap-6 text-xs text-slate-500",children:[R.jsx("span",{children:"Made with 💜 for JNEC Students"}),R.jsx("span",{className:"hidden md:inline",children:"•"}),R.jsx("span",{className:"hidden md:inline",children:"Empowering Future Developers"})]})]})})})]}),s&&R.jsx("button",{onClick:u,className:"fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group","aria-label":"Scroll to top",children:R.jsx(o0,{className:"w-5 h-5 group-hover:animate-bounce"})})]})}function G1(s="[data-reveal]"){ft.useEffect(()=>{const e=Array.from(document.querySelectorAll(s)),n=new IntersectionObserver(r=>{r.forEach(a=>{a.isIntersecting&&(a.target.classList.add("reveal-in"),n.unobserve(a.target))})},{rootMargin:"0px 0px -10% 0px",threshold:.1});return e.forEach(r=>n.observe(r)),()=>n.disconnect()},[s])}function W1(){return G1(),ft.useEffect(()=>(document.documentElement.style.scrollBehavior="smooth",()=>{document.documentElement.style.scrollBehavior=""}),[]),R.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-600 selection:text-white",children:[R.jsx(N0,{}),R.jsxs("main",{children:[R.jsx(u1,{}),R.jsx(p1,{}),R.jsx(_1,{}),R.jsx(E1,{}),R.jsx(C1,{}),R.jsx(P1,{}),R.jsx(U1,{}),R.jsx(k1,{}),R.jsx(H1,{})]}),R.jsx(V1,{}),R.jsx("style",{children:`
        [data-reveal] { opacity: 0; transform: translateY(16px); transition: opacity 700ms ease, transform 700ms ease; }
        [data-reveal].reveal-in { opacity: 1; transform: translateY(0); }
      `})]})}const j1=qv.createRoot(document.getElementById("root"));j1.render(R.jsx(W1,{}));
