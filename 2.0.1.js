!function(u){"module"in this?module.exports=u():unicodeString=u()}(function(){var u=/([\uD800-\uDBFF])([\uDC00-\uDFFF])([\uD800-\uDBFF])?([\uDC00-\uDFFF])?|([0-9])?([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F\uFE0F]+)/g,F=function(u){for(var F,n=0;u.indexOf(F=String.fromCharCode(n++))>=0;);return F},n=function(n,e,t,i,r){if(null==e)return[n];for(t=n.replace(u,F(n)).split(e||""),i=0;r=u.exec(n);)r.index-=i,i+=r[0].length-1,t.splice(r.index,1,r[0]);return t};return{split:n,substring:function(u,F,e,t){return t=n(u,""),F=F||0,e=Math.max(0,void 0===e?t.length:e),t.slice(Math.min(F,e),Math.max(F,e)).join("")},substr:function(u,F,e,t,i){return t=n(u,""),F=F||0,e=void 0===e?t.length:e,i=F<0?void 0:F+e,e<0?"":t.slice(F,i).join("")},length:function(n){return n.replace(u,F(n)).length}}});
