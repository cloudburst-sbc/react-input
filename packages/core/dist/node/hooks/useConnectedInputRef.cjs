"use strict";var e=require("react");module.exports=function(t,r){return e.useCallback((function(e){t.current=e,"function"==typeof r?r(e):"object"==typeof r&&null!==r&&(r.current=e)}),[t,r])};
