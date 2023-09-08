"use strict";var e=require("react"),r=require("@react-input/core"),t=require("./useMask.cjs"),n=function(){return n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},n.apply(this,arguments)};var o,a={exports:{}},i={};var c,s={};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */"production"===process.env.NODE_ENV?a.exports=function(){if(o)return i;o=1;var r=e,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,n){var o,i={},u=null,l=null;for(o in void 0!==n&&(u=""+n),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,o)&&!s.hasOwnProperty(o)&&(i[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===i[o]&&(i[o]=r[o]);return{$$typeof:t,type:e,key:u,ref:l,props:i,_owner:c.current}}return i.Fragment=n,i.jsx=u,i.jsxs=u,i}():a.exports=(c||(c=1,"production"!==process.env.NODE_ENV&&function(){var r=e,t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),v=Symbol.for("react.offscreen"),m=Symbol.iterator,b="@@iterator",g=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function h(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];!function(e,r,t){var n=g.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(r+="%s",t=t.concat([n]));var o=t.map((function(e){return String(e)}));o.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,o)}("error",e,t)}var _,k=!1,O=!1,w=!1,j=!1,S=!1;function R(e){return e.displayName||"Context"}function E(e){if(null==e)return null;if("number"==typeof e.tag&&h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case o:return"Fragment";case n:return"Portal";case i:return"Profiler";case a:return"StrictMode";case f:return"Suspense";case p:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case u:return R(e)+".Consumer";case c:return R(e._context)+".Provider";case l:return function(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return""!==o?t+"("+o+")":t}(e,e.render,"ForwardRef");case y:var r=e.displayName||null;return null!==r?r:E(e.type)||"Memo";case d:var t=e,s=t._payload,v=t._init;try{return E(v(s))}catch(e){return null}}return null}_=Symbol.for("react.module.reference");var P,x,T,$,C,N,D,F=Object.assign,I=0;function M(){}M.__reactDisabledLog=!0;var L,W=g.ReactCurrentDispatcher;function U(e,r,t){if(void 0===L)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);L=n&&n[1]||""}return"\n"+L+e}var A,z=!1,Y="function"==typeof WeakMap?WeakMap:Map;function q(e,r){if(!e||z)return"";var t,n=A.get(e);if(void 0!==n)return n;z=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=W.current,W.current=null,function(){if(0===I){P=console.log,x=console.info,T=console.warn,$=console.error,C=console.group,N=console.groupCollapsed,D=console.groupEnd;var e={configurable:!0,enumerable:!0,value:M,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}I++}();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(e){t=e}Reflect.construct(e,[],i)}else{try{i.call()}catch(e){t=e}e.call(i.prototype)}}else{try{throw Error()}catch(e){t=e}e()}}catch(r){if(r&&t&&"string"==typeof r.stack){for(var c=r.stack.split("\n"),s=t.stack.split("\n"),u=c.length-1,l=s.length-1;u>=1&&l>=0&&c[u]!==s[l];)l--;for(;u>=1&&l>=0;u--,l--)if(c[u]!==s[l]){if(1!==u||1!==l)do{if(u--,--l<0||c[u]!==s[l]){var f="\n"+c[u].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&A.set(e,f),f}}while(u>=1&&l>=0);break}}}finally{z=!1,W.current=o,function(){if(0==--I){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:F({},e,{value:P}),info:F({},e,{value:x}),warn:F({},e,{value:T}),error:F({},e,{value:$}),group:F({},e,{value:C}),groupCollapsed:F({},e,{value:N}),groupEnd:F({},e,{value:D})})}I<0&&h("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",y=p?U(p):"";return"function"==typeof e&&A.set(e,y),y}function B(e,r,t){if(null==e)return"";if("function"==typeof e)return q(e,!(!(n=e.prototype)||!n.isReactComponent));var n;if("string"==typeof e)return U(e);switch(e){case f:return U("Suspense");case p:return U("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case l:return q(e.render,!1);case y:return B(e.type,r,t);case d:var o=e,a=o._payload,i=o._init;try{return B(i(a),r,t)}catch(e){}}return""}A=new Y;var V=Object.prototype.hasOwnProperty,H={},J=g.ReactDebugCurrentFrame;function X(e){if(e){var r=e._owner,t=B(e.type,e._source,r?r.type:null);J.setExtraStackFrame(t)}else J.setExtraStackFrame(null)}var G=Array.isArray;function K(e){return G(e)}function Q(e){return""+e}function Z(e){if(function(e){try{return Q(e),!1}catch(e){return!0}}(e))return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),Q(e)}var ee,re,te,ne=g.ReactCurrentOwner,oe={key:!0,ref:!0,__self:!0,__source:!0};te={};var ae=function(e,r,n,o,a,i,c){var s={$$typeof:t,type:e,key:r,ref:n,props:c,_owner:i,_store:{}};return Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s};function ie(e,r,t,n,o){var a,i={},c=null,s=null;for(a in void 0!==t&&(Z(t),c=""+t),function(e){if(V.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return void 0!==e.key}(r)&&(Z(r.key),c=""+r.key),function(e){if(V.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return void 0!==e.ref}(r)&&(s=r.ref,function(e,r){if("string"==typeof e.ref&&ne.current&&r&&ne.current.stateNode!==r){var t=E(ne.current.type);te[t]||(h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',E(ne.current.type),e.ref),te[t]=!0)}}(r,o)),r)V.call(r,a)&&!oe.hasOwnProperty(a)&&(i[a]=r[a]);if(e&&e.defaultProps){var u=e.defaultProps;for(a in u)void 0===i[a]&&(i[a]=u[a])}if(c||s){var l="function"==typeof e?e.displayName||e.name||"Unknown":e;c&&function(e,r){var t=function(){ee||(ee=!0,h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}(i,l),s&&function(e,r){var t=function(){re||(re=!0,h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}(i,l)}return ae(e,c,s,o,n,ne.current,i)}var ce,se=g.ReactCurrentOwner,ue=g.ReactDebugCurrentFrame;function le(e){if(e){var r=e._owner,t=B(e.type,e._source,r?r.type:null);ue.setExtraStackFrame(t)}else ue.setExtraStackFrame(null)}function fe(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}function pe(){if(se.current){var e=E(se.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}ce=!1;var ye={};function de(e,r){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var t=function(e){var r=pe();if(!r){var t="string"==typeof e?e:e.displayName||e.name;t&&(r="\n\nCheck the top-level render call using <"+t+">.")}return r}(r);if(!ye[t]){ye[t]=!0;var n="";e&&e._owner&&e._owner!==se.current&&(n=" It was passed a child from "+E(e._owner.type)+"."),le(e),h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),le(null)}}}function ve(e,r){if("object"==typeof e)if(K(e))for(var t=0;t<e.length;t++){var n=e[t];fe(n)&&de(n,r)}else if(fe(e))e._store&&(e._store.validated=!0);else if(e){var o=function(e){if(null===e||"object"!=typeof e)return null;var r=m&&e[m]||e[b];return"function"==typeof r?r:null}(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)fe(a.value)&&de(a.value,r)}}function me(e){var r,t=e.type;if(null!=t&&"string"!=typeof t){if("function"==typeof t)r=t.propTypes;else{if("object"!=typeof t||t.$$typeof!==l&&t.$$typeof!==y)return;r=t.propTypes}if(r){var n=E(t);!function(e,r,t,n,o){var a=Function.call.bind(V);for(var i in e)if(a(e,i)){var c=void 0;try{if("function"!=typeof e[i]){var s=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw s.name="Invariant Violation",s}c=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){c=e}!c||c instanceof Error||(X(o),h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof c),X(null)),c instanceof Error&&!(c.message in H)&&(H[c.message]=!0,X(o),h("Failed %s type: %s",t,c.message),X(null))}}(r,e.props,"prop",n,e)}else void 0===t.PropTypes||ce||(ce=!0,h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",E(t)||"Unknown"));"function"!=typeof t.getDefaultProps||t.getDefaultProps.isReactClassApproved||h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function be(e,r,n,s,m,b){var g=function(e){return"string"==typeof e||"function"==typeof e||!!(e===o||e===i||S||e===a||e===f||e===p||j||e===v||k||O||w)||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===y||e.$$typeof===c||e.$$typeof===u||e.$$typeof===l||e.$$typeof===_||void 0!==e.getModuleId)}(e);if(!g){var R="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(R+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var P,x=function(e){return void 0!==e?"\n\nCheck your code at "+e.fileName.replace(/^.*[\\\/]/,"")+":"+e.lineNumber+".":""}(m);R+=x||pe(),null===e?P="null":K(e)?P="array":void 0!==e&&e.$$typeof===t?(P="<"+(E(e.type)||"Unknown")+" />",R=" Did you accidentally export a JSX literal instead of a component?"):P=typeof e,h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",P,R)}var T=ie(e,r,n,m,b);if(null==T)return T;if(g){var $=r.children;if(void 0!==$)if(s)if(K($)){for(var C=0;C<$.length;C++)ve($[C],e);Object.freeze&&Object.freeze($)}else h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ve($,e)}return e===o?function(e){for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if("children"!==n&&"key"!==n){le(e),h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),le(null);break}}null!==e.ref&&(le(e),h("Invalid attribute `ref` supplied to `React.Fragment`."),le(null))}(T):me(T),T}var ge=function(e,r,t){return be(e,r,t,!1)},he=function(e,r,t){return be(e,r,t,!0)};s.Fragment=o,s.jsx=ge,s.jsxs=he}()),s);var u=a.exports;var l=e.forwardRef((function(e,o){var a=e.component,i=e.mask,c=e.replacement,s=e.showMask,l=e.separate,f=e.modify,p=e.onMask,y=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}(e,["component","mask","replacement","showMask","separate","modify","onMask"]),d=t({mask:i,replacement:c,showMask:s,separate:l,modify:f,onMask:p}),v=r.useConnectedInputRef(d,o);return a?u.jsx(a,n({ref:v},y)):u.jsx("input",n({ref:v},y))}));module.exports=l;