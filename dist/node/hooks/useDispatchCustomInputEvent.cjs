"use strict";var e=require("react"),t=require("react-dom"),n=require("../utils/setInputAttributes.cjs");module.exports=function(r,u,l){var c=e.useRef(!0),a=e.useCallback((function(e){if(null!==r.current&&u&&l){var a=r.current,s=a.value,i=a.selectionStart,o=a.selectionEnd;c.current=!1,setTimeout((function(){if(null!==r.current){n(r.current,{value:s,selectionStart:null!=i?i:s.length,selectionEnd:null!=o?o:s.length});var a=new CustomEvent(u,{bubbles:!0,cancelable:!1,composed:!0,detail:e});r.current.dispatchEvent(a),t.unstable_batchedUpdates?t.unstable_batchedUpdates(l,a):l(a),c.current=!0}}))}}),[r,u,l]);return[c,a]};
