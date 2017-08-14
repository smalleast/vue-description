!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueDescription=t():e.VueDescription=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var i={};return t.m=e,t.c=i,t.p="/",t(0)}([function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=i(4),o=n(r);e.exports=o.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{remarkClass:"",hasMore:!1,lotDesc:""}},props:{className:{type:String},line:{type:String,default:3}},methods:{toggleMore:function(){this.hasMore=!1}},watch:{lotDesc:function(e){(e.length>28*parseInt(this.line)||e.split("\n")>parseInt(this.line))&&(this.hasMore=!0),this.hasMore?this.remarkClass="lc-"+this.line:""},hasMore:function(e){this.hasMore?this.remarkClass="lc-"+this.line:this.remarkClass=""},remarkClass:function(e){this.remarkClass+=" "+this.className}},mounted:function(){console.log(this),this.lotDesc=this.$slots.default[0].text,console.log("00:",this.lotDesc)}}},function(e,t,i){t=e.exports=i(3)(),t.push([e.id,'.vue-description-remark{word-break:break-all;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;font-size:.28rem;line-height:.42rem;color:#333}.vue-description-more{height:.6rem;text-align:center;line-height:.6rem}.vue-description-more:after{content:"";width:.22rem;height:.22rem;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQwNjUzNzFDNzEwNTExRTdBRTE4QkMwRTMzN0I2MTExIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQwNjUzNzFENzEwNTExRTdBRTE4QkMwRTMzN0I2MTExIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDA2NTM3MUE3MTA1MTFFN0FFMThCQzBFMzM3QjYxMTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDA2NTM3MUI3MTA1MTFFN0FFMThCQzBFMzM3QjYxMTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz59zfaFAAAC1UlEQVR42sSWV08UYRSGZ4fF+g/2H3hhvNiEW7ErFrBgRYM1GkNIDMYLL4x3RmNiYiBYwN4bGhsaFUVQAVsMINHYUOwEVLCivid5N5kMOztndgb4kmeZ7Hx8+3ztnBOKRqPrDMNYb/RdW5ASiUQq8JAKrvaBQA7YZeKjBawFG3pZYC7YDTpFIh00gzVgUy8JzAZ7wXeQIRJPKPISFIAtINSDAjPBfvBDBMBNky+eUeQFyAdbe0gkGxwEPylQKV+alg4iMJxCK0FRwCIzbAI3Yi9MW8dXFJEtWg62x+mTTJtOgV9gErhufRnvB15za5rAElACUnwITKPAbzAFXLN3cJplC0UaQa7c5SRFssAh8IfPV+J1SrTU7yhSD+aDfR5FZNZHQBeYCi47dXTb7w9gBHgI5nBWqQoB2fdj4C8FLiXqrDl0H8EocJ9XTET6JegvJ/8E+EeBcrcf0J78z2A0uMuTftRBZAI4xWcRuKgZXCQ2KkVaKVIDMsFJ0N/yfrxN4IJy3KUisRpsVgamNjAWVIOJoAwMAOMoEOJKndcKgG1hRspVPHD53MtErZ3Lfo6zl8AzlKsqZ+asUmCxCMh4sSz6HOSBQuWKfKGIhN40Xt1Z4IxSYBHYwXHGmMyeEqqfghWgWCnyjSLlvL5lSoGFVgFQF+aLZq6IRLRlIMy/XS4DdnJLtC2XAl95jmrtV/QNA9NjLlepz5zRrZYEOy0reMcpTrzlijTwn/YEJJLDSXUwmN1yC1bvKfIIzAMHuD2+a0kKVGsjpoTqkeABT71bqFbVkqDKa9j+xJxxj1XRYY8i3WrJZHNHK0XqGIqPK0Xi1pJ+Elgbc8ZtMNkSqj3Xkn6zaDvvdRWvl4gM9FpL+pWwhupKCkmIHuSllgxCwmCkE5EKbpEkscHaWtKpJXP/O5jGT1NEtmiIppYMaiWsOSOTyWuYtpYMWiImksVDqqolndp/AQYA/26+9/6uikwAAAAASUVORK5CYII=");background-repeat:no-repeat;background-size:contain;display:inline-block}.lc-1{-webkit-line-clamp:1}.lc-2{-webkit-line-clamp:2}.lc-3{-webkit-line-clamp:3}.lc-4{-webkit-line-clamp:4}.lc-5{-webkit-line-clamp:5}.lc-6{-webkit-line-clamp:6}',"",{version:3,sources:["/./src/components/description.vue"],names:[],mappings:"AACA,wBAAwB,qBAAqB,gBAAgB,uBAAuB,oBAAoB,iBAAiB,mBAAmB,UAAU,CACrJ,AACD,sBAAsB,aAAa,kBAAkB,iBAAiB,CACrE,AACD,4BAA4B,WAAW,aAAa,cAAc,urEAAurE,4BAA4B,wBAAwB,oBAAoB,CACh0E,AACD,MAAM,oBAAoB,CACzB,AACD,MAAM,oBAAoB,CACzB,AACD,MAAM,oBAAoB,CACzB,AACD,MAAM,oBAAoB,CACzB,AACD,MAAM,oBAAoB,CACzB,AACD,MAAM,oBAAoB,CACzB",file:"description.vue",sourcesContent:["\n.vue-description-remark{word-break:break-all;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;font-size:.28rem;line-height:.42rem;color:#333\n}\n.vue-description-more{height:.6rem;text-align:center;line-height:.6rem\n}\n.vue-description-more:after{content:'';width:.22rem;height:.22rem;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQwNjUzNzFDNzEwNTExRTdBRTE4QkMwRTMzN0I2MTExIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQwNjUzNzFENzEwNTExRTdBRTE4QkMwRTMzN0I2MTExIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDA2NTM3MUE3MTA1MTFFN0FFMThCQzBFMzM3QjYxMTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDA2NTM3MUI3MTA1MTFFN0FFMThCQzBFMzM3QjYxMTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz59zfaFAAAC1UlEQVR42sSWV08UYRSGZ4fF+g/2H3hhvNiEW7ErFrBgRYM1GkNIDMYLL4x3RmNiYiBYwN4bGhsaFUVQAVsMINHYUOwEVLCivid5N5kMOztndgb4kmeZ7Hx8+3ztnBOKRqPrDMNYb/RdW5ASiUQq8JAKrvaBQA7YZeKjBawFG3pZYC7YDTpFIh00gzVgUy8JzAZ7wXeQIRJPKPISFIAtINSDAjPBfvBDBMBNky+eUeQFyAdbe0gkGxwEPylQKV+alg4iMJxCK0FRwCIzbAI3Yi9MW8dXFJEtWg62x+mTTJtOgV9gErhufRnvB15za5rAElACUnwITKPAbzAFXLN3cJplC0UaQa7c5SRFssAh8IfPV+J1SrTU7yhSD+aDfR5FZNZHQBeYCi47dXTb7w9gBHgI5nBWqQoB2fdj4C8FLiXqrDl0H8EocJ9XTET6JegvJ/8E+EeBcrcf0J78z2A0uMuTftRBZAI4xWcRuKgZXCQ2KkVaKVIDMsFJ0N/yfrxN4IJy3KUisRpsVgamNjAWVIOJoAwMAOMoEOJKndcKgG1hRspVPHD53MtErZ3Lfo6zl8AzlKsqZ+asUmCxCMh4sSz6HOSBQuWKfKGIhN40Xt1Z4IxSYBHYwXHGmMyeEqqfghWgWCnyjSLlvL5lSoGFVgFQF+aLZq6IRLRlIMy/XS4DdnJLtC2XAl95jmrtV/QNA9NjLlepz5zRrZYEOy0reMcpTrzlijTwn/YEJJLDSXUwmN1yC1bvKfIIzAMHuD2+a0kKVGsjpoTqkeABT71bqFbVkqDKa9j+xJxxj1XRYY8i3WrJZHNHK0XqGIqPK0Xi1pJ+Elgbc8ZtMNkSqj3Xkn6zaDvvdRWvl4gM9FpL+pWwhupKCkmIHuSllgxCwmCkE5EKbpEkscHaWtKpJXP/O5jGT1NEtmiIppYMaiWsOSOTyWuYtpYMWiImksVDqqolndp/AQYA/26+9/6uikwAAAAASUVORK5CYII=\");background-repeat:no-repeat;background-size:contain;display:inline-block\n}\n.lc-1{-webkit-line-clamp:1\n}\n.lc-2{-webkit-line-clamp:2\n}\n.lc-3{-webkit-line-clamp:3\n}\n.lc-4{-webkit-line-clamp:4\n}\n.lc-5{-webkit-line-clamp:5\n}\n.lc-6{-webkit-line-clamp:6\n}\n"],sourceRoot:"webpack://"}])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var i=this[t];i[2]?e.push("@media "+i[2]+"{"+i[1]+"}"):e.push(i[1])}return e.join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(n[o]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),e.push(s))}},e}},function(e,t,i){var n,r;i(7),n=i(1);var o=i(5);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=n},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vue-description"},[i("p",{staticClass:"vue-description-remark",class:e.remarkClass},[e._t("default")],2),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.hasMore,expression:"hasMore"}],staticClass:"vue-description-more ",on:{click:function(t){e.toggleMore()}}})])},staticRenderFns:[]}},function(e,t,i){function n(e,t){for(var i=0;i<e.length;i++){var n=e[i],r=p[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(a(n.parts[o],t))}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(a(n.parts[o],t));p[n.id]={id:n.id,refs:1,parts:s}}}}function r(e){for(var t=[],i={},n=0;n<e.length;n++){var r=e[n],o=r[0],s=r[1],l=r[2],a=r[3],A={css:s,media:l,sourceMap:a};i[o]?i[o].parts.push(A):t.push(i[o]={id:o,parts:[A]})}return t}function o(e,t){var i=h(),n=f[f.length-1];if("top"===e.insertAt)n?n.nextSibling?i.insertBefore(t,n.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),f.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function l(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function a(e,t){var i,n,r;if(t.singleton){var o=m++;i=M||(M=l(t)),n=A.bind(null,i,o,!1),r=A.bind(null,i,o,!0)}else i=l(t),n=c.bind(null,i),r=function(){s(i)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}function A(e,t,i,n){var r=i?"":n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function c(e,t){var i=t.css,n=t.media,r=t.sourceMap;if(n&&e.setAttribute("media",n),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var p={},u=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},d=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=u(function(){return document.head||document.getElementsByTagName("head")[0]}),M=null,m=0,f=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=d()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var i=r(e);return n(i,t),function(e){for(var o=[],s=0;s<i.length;s++){var l=i[s],a=p[l.id];a.refs--,o.push(a)}if(e){var A=r(e);n(A,t)}for(var s=0;s<o.length;s++){var a=o[s];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete p[a.id]}}}};var g=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},function(e,t,i){var n=i(2);"string"==typeof n&&(n=[[e.id,n,""]]);i(6)(n,{});n.locals&&(e.exports=n.locals)}])});
//# sourceMappingURL=vue-description.js.map