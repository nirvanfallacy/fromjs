(function(){function A(a,c,b){if(a.length==c)return b;a=a.substr(c);return/^[0-9]+$/.exec(a)?b+"["+a+"]":b+"."+a}function u(a,c,b){var d,e=K.exec(a);e?(d=[e[1]],a=e[2],c=Array(1)):(e=L.exec(a))?(d=e[1].split(/\s*,\s*/),a=e[2],c=Array(d.length)):c=Array(c);for(var e=0,g=c.length;e<g;++e)c[e]=0;var g=0,h="";if(d)for(;e=F.exec(a);)for(var p=e[0],k=0,m=d.length;k<m;++k){if(p==d[k]){++c[k];b&&(b.push(a.substring(g,e.index)),b.push(k),g=e.index+p.length);break}}else for(d="";e=F.exec(a);){p=e[0];m=p.charAt(0);
k=null;if("$"==m)if(m=p.length,2<=m&&"$"==p[1])++c[1],b&&(k=1,d=A(p,2,""));else{if(1==m||!(p in global))++c[0],b&&(k=0,d=A(p,1,""))}else"@"==m?(m=c.length-1,++c[m],b&&(k=m,d=A(p,1,""))):"#"==m&&(m=parseInt(p.substr(1)),++c[m],b&&(k=m,d=""));b&&null!==k&&(b.push(h+a.substring(g,e.index)),b.push(k),g=e.index+p.length,h=d,d="")}b&&b.push(h+a.substring(g,a.length));return c}function l(a,c,b){var d,e=K.exec(a);if(e)d=[e[1]],a=e[2];else if(e=L.exec(a))d=e[1].split(/\s*,\s*/),a=e[2];var g=arguments,h=0<
g.length?g[g.length-1]:"";return d?a.replace(F,function(a){for(var b=0,c=d.length;b<c;++b)if(a==d[b])return g[b+1];return a}):a.replace(F,function(a){var d=a.charAt(0);if("$"==d){d=a.length;if(2<=d&&"$"==a[1])return A(a,2,b);if(1==d||!(a in global))return A(a,1,c)}else{if("@"==d)return A(a,1,h);if("#"==d)return g[parseInt(a.substr(1))+1]}return a})}function t(a,c,b){for(var d=1,e=a.length;d<e;d+=2){var g=a[d];"number"==typeof g&&(a[d]=arguments[g+1])}return a.join("")}function G(a,c){if(!a)return null;
if("function"==typeof a)return a;var b,d=/^\s*(\w+)\s*=>(.+)$/.exec(a);if(d)b=[d[1]],a=d[2];else if(d=/^\s*\(\s*([\w\s,]*)\s*\)\s*=>(.+)$/.exec(a))b=d[1].split(/\s*,\s*/),a=d[2];if(!b){b=[];for(d=0;d<c;++d)b.push("$"+d);d=[a].concat(b);a=l.apply(null,d)}b.push("return "+a+";");return Function.apply(global,b)}function w(a){var c=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,b={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",
'"':'\\"',"\\":"\\\\"};return c.test(a)?'"'+a.replace(c,function(a){var c=b[a];return c?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function B(a,c){var b=function(){};b.prototype=a.prototype;c.prototype=new b;c.prototype.constructor=c}function M(a,c){var b=a?a+"=":"";if("boolean"==typeof c)return b+(c?"1":"0");if("string"==typeof c)return b+encodeURIComponent(c);if("number"==typeof c)return b+c.toString();if("object"==typeof c){var d=[];s(c).each(function(b,c){c=encodeURIComponent(c);
d.push(M(a?a+"["+c+"]":c,b))});return d.join("&")}return""}function N(a,c,b){var d,e;!a||a instanceof Array?(d=H,a=O):a instanceof f?(d=H,a=P):"string"==typeof a&&(a=l(a,"$","$$","@.a"));!c||c instanceof Array?(e=H,c=O):c instanceof f?(e=H,c=P):"string"==typeof c&&(c=l(c,"$","$$","@.a"));return{left:a,leftArg:{t:d,a:b},right:c,rightArg:{t:e,a:b}}}function C(a,c,b,d){for(var e={},g=[],h=0,f=a.length;h<f;++h){var k=2*h+1;if(c=arguments[k])if(b=arguments[k+1],b instanceof Array){if(0==a[h])for(var k=
0,m=b.length;k<m;++k)b[k]="";e[c]=b}else 1>=a[h]?e[c]=b:(g.push("var "+c+"="+b+";"),e[c]=c)}e.decl=g.join("");return e}function D(a,c){this.$o=s(this.o=[]);this.c=a;this.a=c}function I(){}function f(a){this.each=a}function q(a){this.data=a;this.rev=!1}function z(a){q.call(this,a)}function x(a){q.call(this,a)}function v(a){this.data=a}function J(a){this.data=a}function y(a){this.Iterable=a}function s(a){return a?a instanceof f?a:a.$each?new f(function(c,b){this.broken=!1===a.$each(c,b);return this}):
"string"==typeof a?new z(a):a instanceof Array?new x(a):new v(a):new f(function(){return this})}var E="from",H=[void 0,null,!1,0," ","\n","\t"],O="@t.indexOf($)>=0",P="@t.contains($)",K=/^\s*(\w+)\s*=>(.+)$/,L=/^\s*\(\s*([\w\s,]*)\s*\)\s*=>(.+)$/,F=/"(?:[^"]|\\")*"|'(?:[^']|\\')*'|[\$@\w_#]+/g;D.prototype._getPrimitiveList=function(a,c){var b=this[a];b||(this[a]=b={});c=c.toString();var d=b[c];d||(b[c]=d=[],this.o.push({k:c,l:d}));return d};D.prototype._getList=function(a){var c=this.c,b;if(c)b="string"==
typeof c?l(c,"$k","@k","@a"):"@c($k,@k,@a)";else{switch(typeof a){case "string":return this._getPrimitiveList("s",a);case "number":return this._getPrimitiveList("n",a);case "boolean":return this._getPrimitiveList("b",a)}b="$k==@k"}if(c=this.$o.first(b,{k:a,c:c,a:this.a}))return c.l;c=[];this.o.push({k:a,l:c});return c};D.prototype.add=function(a,c){this._getList(a).push(c)};D.prototype.$each=function(a,c){this.broken=!this.$o.selectPair("from($l)","$k").each(a,c).broken;return this};I.prototype.getBucket=
function(a){var c=this.cache;if(!c){this.cache=c={};var b=this;setTimeout(function(){b.cache=null},0)}var d=c[a];d||(c[a]=d={});return d};I.prototype.get=function(a,c){return this.getBucket(a)[c]};I.prototype.set=function(a,c,b){this.getBucket(a)[c]=b};var n=new I;f.prototype.broken=!1;f.prototype.where=function(a,c){var b;"string"==typeof a?(b=n.get("($_$$_a0)",a),b||(b="("+l(a,"$","$$","@a0")+")",n.set("($_$$_a0)",a,b))):b="@pr($,$$,@a0)";var d=this;return new f(function(e,g){var h;"string"==typeof e?
(h=n.get("($_$$_a)",e),h||(h="("+l(e,"$","$$","@a")+")",n.set("($_$$_a)",e,h))):h="@p($,$$,@a)";this.broken=d.each(b+"?"+h+":0",{p:e,pr:a,a0:c,a:g}).broken;return this})};f.prototype.aggregate=function(a,c,b){var d;"string"==typeof c?(d=n.get("(c_$_$$_a)",c),d||(d="("+l(c,"@c","$","$$","@a")+")",n.set("(c_$_$$_a)",c,d))):d="@p(@c,$,$$,@a)";null===a?(a={p:c,f:!0,a:b},this.each("@f?(@f=false,@c=$,0):(@c="+d+",0)",a)):(a={c:a,a:b,p:c},this.each("(@c="+d+"),0",a));return a.c};f.prototype.all=function(a,
c){var b;"string"==typeof a?(b=n.get("($_$$_a)",a),b||(b="("+l(a,"$","$$","@a")+")",n.set("($_$$_a)",a,b))):b="@p($,$$,@a)";return!this.each("!"+b+"?false:0",{a:c,p:a}).broken};f.prototype.any=function(a,c){var b;a?"string"==typeof a?(b=n.get("($_$$_a)",a),b||(b="("+l(a,"$","$$","@a")+")",n.set("($_$$_a)",a,b))):b="@p($,$$,@a)":b="true";return this.each(b+"?false:0",{a:c,p:a}).broken};f.prototype.at=function(a){return this.skip(a).first()};f.prototype.atOrDefault=function(a,c){var b=this.at(a);return void 0===
b?c:b};f.prototype.average=function(){var a={f:!0};this.each("@f?(@f=false,@s=$,@c=1,0):(@s+=$,++@c)",a);return a.s/a.c};f.prototype.concat=function(a){var c=this;return new f(function(b,d){this.broken=!1;if(c.each(b,d).broken||a.each(b,d).broken)return this.broken=!0,this})};f.prototype.contains=function(a,c,b){var d;c?"string"==typeof c?(d=n.get("(v_$_a)",c),d||(d="("+l(c,"@v","$","@a")+")",n.set("(v_$_a)",c,d))):d="@c(@v,$,@a)":d="$==@v";a={v:a,a:b,c:c,r:!1};this.each(d+"?((@r=true),false):0",
a);return a.r};f.prototype.count=function(a,c){var b;a?"string"==typeof a?(b=n.get("($_$$_a)",a),b||(b="("+l(a,"$","$$","@a")+")",n.set("($_$$_a)",a,b))):b="@p($,$$,@a)":b="true";var d={a:c,p:a,c:0};this.each(b+"?++@c:0",d);return d.c};f.prototype.defaultIfEmpty=function(a){var c=this;return new f(function(b,d){c.each("false").broken?this.broken=c.each(b,d).broken:("string"==typeof b&&(b=G(b,3)),this.broken=!1===b(a,0,d));return this})};f.prototype.distinct=function(a,c){var b=a?",@c,@a":"",d=[],
e=this;return new f(function(c,h){var f;"string"==typeof c?(f=n.get("($_$$_a0)",c),f||(f="("+l(c,"$","$$","@a0")+")",n.set("($_$$_a0)",c,f))):f="@p($,$$,@a0)";this.broken=e.each("!from(@l).contains($"+b+")?(@l.push($),"+f+"):0",{c:a,l:d,p:c,a0:h}).broken;return this})};f.prototype.except=function(a,c,b){var d;d=c?",@c,@a0":"";var e=this;return new f(function(g,h){this.broken="string"==typeof g?e.each("@s.contains($"+d+")?0:("+l(g,"$","$$","@a")+")",{c:c,a0:b,s:s(a),a:h}).broken:e.each("@s.contains($"+
d+")?0:@p($,$$,@a)",{c:c,a0:b,p:g,s:s(a),a:h}).broken;return this})};f.prototype.first=function(a,c){if(a)"string"==typeof a?(b={a:c},this.each("("+l(a,"$","$$","@a")+")?(@r=$,false):0",b)):(b={a:c,p:a},this.each("@p($,$$,@a)?(@r=$,false):0",b));else{var b={};this.each("(@r=$),false",b)}return b.r};f.prototype.firstOrDefault=function(a,c,b){if(1>=arguments.length){var d=this.first();return void 0===d?a:d}d=this.first(a,b);return void 0===d?c:d};f.prototype.groupBy=function(a,c,b){var d,e,g;a&&(d=
a.value,e=a.key,g=a.result);d=d||"$";e=e||"$$";return g?(a="string"==typeof g?l(g,"$","$$","@a"):"@rs($,$$,@a)",this._getGroupIterable(d,e,c,b).selectPair(a,"$$",{rs:g,a:b})):this._getGroupIterable(d,e,c,b)};f.prototype._getGroupIterable=function(a,c,b,d){b=new D(b,d);var e=s(b),g;g="string"==typeof c?"("+l(c,"$","$$","@a")+")":"@ks($,$$,@a)";var h;h="string"==typeof a?"("+l(a,"$","$$","@a")+")":"@vs($,$$,@a)";this.each("(@k="+g+"),(@v="+h+"),@g.add(@k,@v),0",{ks:c,vs:a,g:b,a:d});return e};f.prototype.groupJoin=
function(a,c,b,d,e,g){a=s(a);c="string"==typeof c?"("+l(c,"$","$$","@a")+")":"@oks($,$$,@a)";b="string"==typeof b?"("+l(b,"$","$$","@a")+")":"@iks($,$$,@a)";b=e?"string"==typeof e?l(e,"@ok",b):"@c(@ok,"+b+")":"@ok=="+b;b=w(b);c="@i.where("+b+",{a:@a,ok:"+c+",c:@c})";if("string"==typeof d)switch(b=[],u(d,3,b)[1]){case 0:case 1:c=t(b,"$",c,"@a");break;default:c="(@w="+c+"),("+t(b,"$","@w","@a")+")"}else c="@rs($,"+c+",@a)";return this.select(c,{rs:d,i:a,a:g,c:e})};f.prototype.intersect=function(a,c,
b){var d;d=c?"string"==typeof c?w(c):"@c":"null";return this.where("@t.contains($,"+d+",@a)",{t:s(a),a:b,c:c})};f.prototype.join=function(a,c,b,d,e,g){a=s(a);var h;h="string"==typeof c?"("+l(c,"$","$$","@a")+")":"@oks($,$$,@a)";var p;p="string"==typeof b?"("+l(b,"$","$$","@a")+")":"@iks($,$$,@a)";var k;k=e?"string"==typeof e?l(e,"@ok",p):"@c(@ok,"+p+")":"@ok=="+p;k=w(k);var m;m="string"==typeof d?"("+l(d,"@ov","$","@a")+")":"@rs(@ov,$,@a)";var n=this;return new f(function(e,f){var p;if("string"==
typeof e){p=[];var l=u(e,3,p),s=[],q;switch(l[0]){case 0:case 1:q=m;break;default:s.push("(@RS="+m+")"),q="@RS"}switch(l[1]){case 0:case 1:l="(@c++)";break;default:s.push("(@cc=@c++)"),l="@cc"}s.push("("+t(p,q,l,"@a0")+")");p=s.join(",")}else p="@p("+m+",@c++,@a0)";this.broken=n.each("(@ok="+h+"),(@ov=$),@i.where("+k+",@).each("+w(p)+",@)",{i:a,oks:c,iks:b,rs:d,p:e,a:g,a0:f,c:0}).broken;return this})};f.prototype.last=function(a,c){if(a)"string"==typeof a?(b={a:c},this.each("("+l(a,"$","$$","@a")+
")?@r=$:0",b)):(b={a:c,p:a},this.each("@p($,$$,@a)?@r=$:0",b));else{var b={};this.each("@r=$",b)}return b.r};f.prototype.lastOrDefault=function(a,c,b){if(1>=arguments.length){var d=this.last();return void 0===d?a:d}d=this.last(a,b);return void 0===d?c:d};f.prototype.max=function(a,c){if(!a)return this.aggregate(null,"#0>#1?#0:#1");var b;b="string"==typeof a?"("+l(a,"$","$$","@a")+")":"@s($,$$,@a)";var d={f:!0,s:a,a:c};this.each("@f?((@f=false),(@r=$),(@m="+b+"),0):((@v="+b+"),(@v>@m?((@m=@v),(@r=$)):0),0)",
d);return d.r};f.prototype.min=function(a,c){if(!a)return this.aggregate(null,"#0<#1?#0:#1");var b;b="string"==typeof a?"("+l(a,"$","$$","@a")+")":"@s($,$$,@a)";var d={f:!0,s:a,a:c};this.each("@f?((@f=false),(@r=$),(@m="+b+"),0):((@v="+b+"),(@v<@m?((@m=@v),(@r=$)):0),0)",d);return d.r};f.prototype.orderBy=function(a,c,b){return(new y(this))._addContext(a||"$",c,!1,b)};f.prototype.orderByDesc=function(a,c,b){return(new y(this))._addContext(a||"$",c,!0,b)};f.prototype.reverse=function(){var a=this;
return new f(function(c,b){var d=[];a.each("@push($$),@push($),0",d);if("string"==typeof c){var e=[],g=u(c,3,e),h,f,k;switch(g[0]){case 0:case 1:h="";f="l[(i-1)*2+1]";break;default:h="var v=l[(i-1)*2+1];",f="v"}switch(g[1]){case 0:case 1:g="";k="l[(i-1)*2]";break;default:g="var k=l[(i-1)*2];",k="k"}this.broken=(new Function("l","a","for(var i=l.length/2;i>0;--i){"+g+h+"if(("+t(e,f,k,"a")+")===false){return true;}}return false;"))(d,b)}else{this.broken=!1;for(e=d.length/2;0<e;--e)if(!1===c(d[2*(e-
1)+1],d[2*(e-1)],b)){this.broken=!0;break}}return this})};f.prototype.select=function(a,c){var b=this,d;"string"==typeof a?(d=n.get("($_$$_a0)",a),d||(d="("+l(a,"$","$$","@a0")+")",n.set("($_$$_a0)",a,d))):d="@s($,$$,@a0)";return new f(function(e,g){if("string"==typeof e){var h=[],f=u(e,3,h),k=[],m;switch(f[0]){case 0:m="";break;case 1:m=d;break;default:k.push("(@v="+d+")"),m="@v"}switch(f[1]){case 0:f="";break;case 1:f="(@i++)";break;default:k.push("(@j=@i++)"),f="@j"}k.push(t(h,m,f,"@a"));this.broken=
b.each(k.join(","),{s:a,a0:c,a:g,i:0}).broken}else this.broken=b.each("@p("+d+",@i++,@a)",{s:a,a0:c,a:g,i:0,p:e}).broken;return this})};f.prototype.selectMany=function(a,c){var b;b="string"==typeof a?l(a,"$","$$","@a"):"@s($,$$,@a)";var d=this;return new f(function(e,g){var h;if("string"==typeof e)switch(h=[],u(e,3,h)[1]){case 0:case 1:h=t(h,"$","(@i++)","@a0");break;default:h="(@j=@i++),("+t(h,"$","@j","@a0")+")"}else h="@p($,@i++,@a0)";this.broken=d.each("from("+b+").each("+w(h)+",@)",{s:a,a:c,
a0:g,i:0,p:e});return this})};f.prototype.selectPair=function(a,c,b){var d=this,e,g;"string"==typeof a?(e=n.get("($_$$_a0)",a),e||(e="("+l(a,"$","$$","@a0")+")",n.set("($_$$_a0)",a,e))):e="@vs($,$$,@a0)";"string"==typeof c?(g=n.get("($_$$_a0)",c),g||(g="("+l(c,"$","$$","@a0")+")",n.set("($_$$_a0)",c,g))):g="@ks($,$$,@a0)";return new f(function(h,f){var k;if("string"==typeof h){k=[];var m=u(h,3,k),l,r=[];switch(m[0]){case 0:case 1:l=e;break;default:r.push("(@VS="+e+")"),l="@VS"}switch(m[1]){case 0:case 1:m=
g;break;default:r.push("(@KS="+g+")"),m="@KS"}r.push(t(k,l,m,"@a"));k=r.join(",")}else k="@p("+e+","+g+",@a)";this.broken=d.each(k,{a0:b,a:f,p:h,vs:a,ks:c}).broken;return this})};f.prototype.sequenceEqual=function(a,c,b){var d;d=c?"string"==typeof c?l(c,"#0","#1","@a"):"@c(#0,#1,@a)":"#0==#1";return this.zip(a,d,{a:b,c:c}).all("$==true")};f.prototype.single=function(a,c){var b=!a?this.take(2):this.where(a).take(2);if(1==b.count())return b.first()};f.prototype.singleOrDefault=function(a,c,b){var d;
1>=arguments.length?(d=this.take(2),c=a):d=this.where(a).take(2);var e=d.count();if(0==e)return c;if(1==e)return d.first();throw Error("The sequence has more than one element satisfying the condition.");};f.prototype.skip=function(a){if(0>=a)return this;var c=this;return new f(function(b,d){var e;"string"==typeof b?(e=n.get("($_$$_a)",b),e||(e="("+l(b,"$","$$","@a")+")",n.set("($_$$_a)",b,e))):e="@p($,$$,@a)";this.broken=c.each("@c==0?"+e+":--@c",{p:b,a:d,c:a}).broken;return this})};f.prototype.skipWhile=
function(a,c){var b;"string"==typeof a?(b=n.get("($_$$_a)",a),b||(b="("+l(a,"$","$$","@a")+")",n.set("($_$$_a)",a,b))):b="@pr($,$$,@a)";var d=this;return new f(function(e,g){var h;"string"==typeof e?(h=n.get("($_$$_a0)",e),h||(h="("+l(e,"$","$$","@a0")+")",n.set("($_$$_a0)",e,h))):h="@p($,$$,@a0)";this.broken=d.each("@f||(@f=!"+b+")?"+h+":0",{pr:a,f:!1,a:c,a0:g}).broken;return this})};f.prototype.sum=function(){return this.aggregate(null,"#0+#1")};f.prototype.take=function(a){if(0==a)return s();if(0>
a)return this.reverse().take(-a).reverse();var c=this;return new f(function(b,d){var e;"string"==typeof b?(e=n.get("($_$$_a)",b),e||(e="("+l(b,"$","$$","@a")+")",n.set("($_$$_a)",b,e))):e="@p($,$$,@a)";var g={i:0,p:b,a:d,b:!1};this.broken=c.each("(@i++<"+a+")?"+e+":(@b=true,false)",g).broken&&!g.b;return this})};f.prototype.takeWhile=function(a,c){var b;"string"==typeof a?(b=n.get("($_$$_a)",a),b||(b="("+l(a,"$","$$","@a")+")",n.set("($_$$_a)",a,b))):b="@pr($,$$,@a)";var d=this;return new f(function(e,
g){var h;"string"==typeof e?(h=n.get("($_$$_a0)",e),h||(h="("+l(e,"$","$$","@a0")+")",n.set("($_$$_a0)",e,h))):h="@p($,$$,@a0)";var f={p:e,pr:a,a:c,a0:g,b:!1};this.broken=d.each(b+"?"+h+":(@b=true,false)",f).broken&&!f.b;return this})};f.prototype.toArray=function(){var a=[];this.each("@push($)",a);return a};f.prototype.toDictionary=function(){var a={};this.each("@[$$]=$",a);return a};f.prototype.toJSON=function(a){function c(d){var e=typeof d;return"string"==e?w(d):"number"==e||"boolean"==e?d.toString():
"function"==e?c(d()):b.contains(d)||(d instanceof x||d instanceof v)&&b.contains(d.data)?"null":s(d).toJSON(a)}a||(a=[]);var b=s(a),d="number"==typeof this.select("$$").first();a.push(this);if(d){var e=[];this.each(function(a){e.push(c(a))});d="["+e.join(", ")+"]"}else e=[],this.each(function(a,b){e.push(w(b.toString())+": "+c(a))}),d="{"+e.join(", ")+"}";a.pop(this);return d};f.prototype.toString=function(a){return this.toArray().join(a||"")};f.prototype.toURLEncoded=function(){return M(null,this)};
f.prototype.trim=function(a,c,b){a=N(a,c,b);return this.skipWhile(a.left,a.leftArg).reverse().skipWhile(a.right,a.rightArg).reverse()};f.prototype.union=function(a,c,b){var d=[],e=this;return new f(function(g,h){var f;if("string"==typeof g)switch(f=[],u(g,3,f)[1]){case 0:case 1:f=t(f,"$","(@b.length-1)","@a0");break;default:f="(@bb=@b.length-1),("+t(f,"$","@bb","@a0")+")"}else f="@p($,@b.length-1,@a0)";f="from(@b).contains($,@c,@a)?0:(@b.push($),"+f+",0)";var k={c:c,b:d,p:g,a0:h,a:b};if(e.each(f,
k).broken)return this.broken=!0,this;s(a).each(f,k).broken&&(this.broken=!0);return this})};f.prototype.zip=function(a,c,b){var d;if("string"==typeof c){var e=[],g=u(c,5,e),h,l=[];switch(g[0]){case 0:case 1:h="@d[@i*2+1]";break;default:l.push("(@V=@d[@i*2+1])"),h="@V"}switch(g[2]){case 0:case 1:g="@d[@i*2]";break;default:l.push("(@K=@d[@i*2])"),g="@K"}l.push(t(e,h,"$",g,"$$","@a"));d="("+l.join(",")+")"}else d="@rs(@d[@i*2+1],$,@d[@i*2],$$,@a)";var k=this;return new f(function(e,g){var f=[];k.each("@push($$),@push($),0",
f);var h;if("string"==typeof e){h=[];var l=u(e,3,h),n,p=[];switch(l[0]){case 0:case 1:n=d;break;default:p.push("(@RS="+d+")"),n="@RS"}switch(l[1]){case 0:case 1:l="(@k++)";break;default:p.push("(@kk=@k++)"),l="@kk"}p.push(t(h,n,l,"@a0"));h="("+p.join(",")+")"}else h="@p("+d+",@k++,@a0)";this.broken=s(a).each("@i>="+f.length/2+"?false:@r="+h+",++@i,@r",{a:b,a0:g,k:0,i:0,d:f,p:e,rs:c}).broken;return this})};B(f,q);q.prototype.initRegion=function(){var a=this.region;a||(this.region=a={queries:null,measured:!1,
start:null,end:null,take:null,takeArg:null});return a};q.prototype.addRegionQuery=function(a,c,b){var d=this.initRegion(),e=d.queries;e||(d.queries=e=[]);e.push(a);e.push(c);e.push(b);d.start=d.end=null;d.measured=!1;return this};q.prototype.clone=function(){var a=new this.constructor(this.data),c=this.region;if(c){var b=a.region={measured:c.measured,start:c.start,end:c.end,take:c.take,takeArg:c.takeArg};if(c=c.queries)b.queries=s(c).toArray()}return a};q.prototype.reverseRegion=function(){var a=
this.initRegion();a&&(a.take&&(a.measured=!1),a.take=a.takeArg=null);this.rev=!this.rev;return this};q.prototype.measureRegion=function(){var a=this.initRegion();if(!a.measured){var c=this.data,b=a.start,d=a.end;null==b&&(b=0);null===d&&(d=c.length);a.takeLeft=a.takeLeftArg=null;var e=a.queries;if(e){for(var g=[],f=0,l=e.length;f<l;f+=3){var k=e[f],m=e[f+1],n=e[f+2];if("skipLeft"==k)if("number"==typeof m)g.push("s=Math.min(e,s+"+m+");");else if("string"==typeof m){var k=[],r=u(m,3,k),r=C(r,"v",this.lambdaGetItem("d",
"s"),null,null,"a","q["+(f+2)+"]");g.push("for(;s<e;++s){",r.decl,"if(!(",t(k,r.v,"s",r.a),")){break;}}")}else g.push("for(;s<e&&q[",f+1,"](",this.lambdaGetItem("d","s"),",s,q[",f+2,"]);++s);");else"skipRight"==k?"number"==typeof m?g.push("e=Math.max(s,e-",m,");"):"string"==typeof m?(k=[],r=u(m,3,k),0==r[1]?(m="",n="e-1"):(m="var _i=e-1;",n="_i"),r=C(r,"v",this.lambdaGetItem("d",n),null,null,"a","q["+(f+2)+"]"),g.push("for(;s<e;--e){",m,r.decl,"if(!(",t(k,r.v,n,r.a),")){break;}}")):g.push("for(;s<e;--e){var _i=e-1;",
"if(!q[",f+1,"](",this.lambdaGetItem("d","_i"),",_i,q[",f+2,"])){break;}}"):"takeLeft"==k?"number"==typeof m?g.push("e=Math.min(e,s+",m,");"):f==l-3&&!this.rev?(a.take=m,a.takeArg=n):"string"==typeof m?(k=[],r=u(m,3,k),r=C(r,"_v",this.lambdaGetItem("d","e"),null,null,"_a","q["+(f+2)+"]"),g.push("for(var _e2=e,e=s;e<_e2;++e){",r.decl,"if(!(",t(k,r._v,"e",r._a),")){break;}}")):g.push("for(var _e2=e,e=s;e<_e2;++e){","if(!q[",f+1,"](",this.lambdaGetItem("d","e"),",e,q[",f+2,"])){break;}}"):"takeRight"==
k&&("number"==typeof m?g.push("s=Math.max(s,e-",m,");"):f==l-3&&this.rev?(a.take=m,a.takeArg=n):"string"==typeof m?(k=[],r=u(m,3,k),0==r[1]?(m="",n="s-1"):(m="var _i=s-1;",n="_i"),r=C(r,"_v",this.lambdaGetItem("d",n),null,null,"_a","q["+(f+2)+"]"),g.push("for(var _s2=s,s=e;s>_s2;--s){",m,r.decl,"if(!(",t(k,r._v,n,r._a),")){break;}}")):g.push("for(var _s2=s,s=e;s>_s2;--s){var _i=s-1;","if(!q[",f+1,"](",this.labmdaGetItem("d","_i"),",_i,q[",f+2,"])){break;}}"))}g.push("r.start=s;r.end=e;");(new Function("d",
"r","q","s","e",g.join("")))(c,a,e,b,d)}else a.start=b,a.end=d;a.measured=!0}return a};q.prototype.each=function(a,c){var b=this.data,d=this.measureRegion(),e=d.take,f=d.takeArg,h;"function"==typeof a&&(h=a,a="_p($,$$,@)");e&&(a="string"==typeof e?"!("+l(e,"$","$$","_tla")+")?_b=false:"+a:"!_tl($,$$,_tla)?_b=false:"+a);var p=this.dataType+(this.rev?"_reversed":""),k=n.get("each_"+p,a);if(!k){var k=[],m=u(a,3,k),q,r;this.rev?0==m[1]?(q="",r="_e-1"):(q="var _i=_e-1;",r="_i"):(q="",r="_s");var v;v=this.rev?
"--_e":"++_s";m=C(m,"_v",this.lambdaGetItem("s",r,"_l"));k=new Function(E,"s","_l","_s","_e","a","_tl","_tla","_p",["var _b=true;for(;_s<_e;",v,"){",q,m.decl,"if((",t(k,m._v,r,"a"),")===false){return _b;}}return false;"].join(""));n.set("each_"+p,a,k)}this.broken=k(s,b,b.length,d.start,d.end,c,e,f,h);return this};q.prototype.at=function(a){var c=this.measureRegion();return this.rev?this.getItem(this.data,c.end-a):this.getItem(this.data,c.start+a)};q.prototype.count=function(a,c){if(!a){var b=this.measureRegion();
if(!b.take)return b.end-b.start}return f.prototype.count.call(this,a,c)};q.prototype.any=function(a,c){if(!a){var b=this.measureRegion();if(!b.take)return b.start<b.end}return f.prototype.any.call(this,a,c)};q.prototype.first=function(a,c){if(!a){var b=this.measureRegion();if(!b.take){var d=b.start,b=b.end;if(d<b)return this.rev?this.getItem(this.data,b-1):this.getItem(this.data,d);return}}return f.prototype.first.call(this,a,c)};q.prototype.last=function(a,c){if(!a){var b=this.measureRegion();if(!b.take){var d=
b.start,b=b.end;if(d<b)return this.rev?this.getItem(this.data,d):this.getItem(this.data,b-1);return}}return f.prototype.last.call(this,a,c)};q.prototype.reverse=function(){return this.clone().reverseRegion()};q.prototype.skip=function(a){return this.clone().addRegionQuery(!this.rev?"skipLeft":"skipRight",a,null)};q.prototype.skipWhile=function(a,c){return this.clone().addRegionQuery(!this.rev?"skipLeft":"skipRight",a,c)};q.prototype.take=function(a){return 0>a?this.clone().addRegionQuery(!this.rev?
"takeRight":"takeLeft",-a,null):this.clone().addRegionQuery(!this.rev?"takeLeft":"takeRight",a,null)};q.prototype.takeWhile=function(a,c){return this.clone().addRegionQuery(!this.rev?"takeLeft":"takeRight",a,c)};q.prototype.toArray=function(){var a=this.measureRegion();if(!a.take){var c=this.getItem,b=this.data,d=a.start,a=a.end,e=Array(a-d);if(this.rev)for(g=a;g>d;--g)e[a-g]=c(b,g-1);else for(var g=d;g<a;++g)e[g-d]=c(b,g);return e}return f.prototype.toArray.call(this)};q.prototype.trim=function(a,
c,b){a=N(a,c,b);c=this.clone();c.addRegionQuery(!this.rev?"skipLeft":"skipRight",a.left,a.leftArg);c.addRegionQuery(!this.rev?"skipRight":"skipLeft",a.right,a.rightArg);return c};q.prototype.zip=function(a,c,b){var d=this.rev,e,g=!d?"@i":"@l-@i-1";if("string"==typeof c){var h=[],l=u(c,5,h),k=[];d&&0<l[1]&&(k.push("(@.ii="+g+")"),g="@.ii");var m=this.lambdaGetItem("@d",g);1<l[0]&&(k.push("(@V="+m+")"),m="@V");k.push("("+t(h,m,"$",g,"$$","@a")+")");e="("+k.join(",")+")"}else e="@rs("+m+",$,"+g+",$$,@a)";
var n=this;return new f(function(d,f){var g=n.data,h=g.length,k;if("string"==typeof d){k=[];var m=u(d,3,k),l,p=[];switch(m[0]){case 0:case 1:l=e;break;default:p.push("(@RS="+e+")"),l="@RS"}switch(m[1]){case 0:case 1:m="(@k++)";break;default:p.push("(@kk=@k++)"),m="@kk"}p.push(t(k,l,m,"@a0"));k="("+p.join(",")+")"}else k="@p("+e+",@k++,@a0)";g={a:b,a0:f,k:0,i:0,d:g,l:h,p:d,rs:c,b:!0};this.broken=s(a).each("@.i>=@.l?@.b=false:@.r="+k+",++@.i,@.r",g).broken&&!g.nb;return this})};B(q,z);z.prototype.dataType=
"string";z.prototype.lambdaGetItem=function(a,c){return a+".charAt("+c+")"};z.prototype.getItem=function(a,c){return a.charAt(c)};z.prototype.toString=function(a){if(!a&&!this.rev){var c=this.data,b=this.measureRegion();if(!b.take)return a=b.start,b=b.end,0==a&&b==c.length?c:c.substring(a,b)}return f.prototype.toString.call(this,a)};z.prototype.toJSON=function(){return w(this.data)};B(q,x);x.prototype.dataType="array";x.prototype.lambdaGetItem=function(a,c){return a+"["+c+"]"};x.prototype.getItem=
function(a,c){return a[c]};x.prototype.toJSON=function(a){a?a.push(this.data):a=[this.data];var c=f.prototype.toJSON.call(this,a);a.pop();return c};B(f,v);v.prototype.each=function(a,c){var b=this.data;if("function"==typeof a){this.broken=!1;for(var d in b)if(!1===a(b[d],d,c)){this.broken=!0;break}}else{d=n.get("each_o",a);if(!d){d=[];var e,f;switch(u(a,3,d)[0]){case 0:case 1:e="";f="d[k]";break;default:e="var v=d[k];",f="v"}d=new Function(E,"d","a","for(var k in d){"+e+"if(("+t(d,f,"k","a")+")===false){return true;}}return false;");
n.set("each_o",a,d)}this.broken=d(s,b,c)}return this};v.prototype.at=function(a){return this.skip(a).first()};v.prototype.reverse=function(){return new J(this.data)};v.prototype.toJSON=x.prototype.toJSON;B(v,J);J.prototype.each=function(a,c){var b=this.data,d=[],e;for(e in b)d.push(e),d.push(b[e]);if("string"==typeof a){b=n.get("each_or",a);if(!b){var b=[],f=u(a,3,b),h,l;switch(f[0]){case 0:case 1:e="";h="r[ii+1]";break;default:e="var v=r[ii+1];",h="v"}switch(f[1]){case 0:case 1:f="";l="r[ii]";break;
default:f="var k=r[ii];",l="k"}b=new Function(E,"r","a","for(var i=r.length/2;i>0;--i){var ii=(i-1)*2;"+e+f+"if(("+t(b,h,l,"a")+")===false){return true;}}return false;");n.set("each_or",a,b)}this.broken=b(s,d,c)}else{this.broken=!1;for(b=d.length/2;0<b;--b)if(e=2*(b-1),!1===a(d[e+1],d[e],c)){this.broken=!0;break}}return this};J.prototype.reverse=function(){return new v(this.data)};B(v,y);y.prototype.clone=function(){var a=new this.constructor(this.Iterable),c=this.context;c&&(a.context=from(c).toArray());
return a};y.prototype._addContext=function(a,c,b,d){var e=this.context;e||(this.context=e=[]);e.push({keySelector:G(a,3),comparer:G(c,3),desc:b,arg:d});return this};y.prototype.each=function(a,c){function b(a,b){if(f)for(var c=0,e=f.length;c<e;++c){var h=f[c],k=h.keySelector(d[2*a+1],d[2*a],h.arg),l=h.keySelector(d[2*b+1],d[2*b],h.arg),k=h.comparer?h.comparer(k,l,h.arg):k==l?0:k<l?-1:1;if(0!=k)return(h.desc?-1:1)*k}return a==b?0:a<b?-1:1}var d=[];this.Iterable.each("@push($$),@push($),0",d);var e=
s.range(d.length/2).toArray(),f=this.context;e.sort(b);if("string"==typeof a){b=n.get("each_ord",a);if(!b){var h=[],l=u(a,3,h),k,m,q;switch(l[0]){case 0:case 1:k="";m="r[n+1]";break;default:k="var v=r[n+1];",m="v"}switch(l[1]){case 0:case 1:l="";q="r[n]";break;default:l="var k=r[n];",q="k"}b=new Function(E,"l","r","a","for(var i=0,c=l.length;i<c;++i){var n=l[i]*2;"+k+l+"if(("+t(h,m,q,"a")+")===false)return true;}return false;");n.set("each_ord",a,b)}this.broken=b(s,e,d,c)}else{this.broken=!1;h=0;
for(k=e.length;h<k;++h)if(m=2*e[h],!1===a(d[m+1],d[m],c)){this.broken=!0;break}}return this};y.prototype.thenBy=function(a,c,b){return this.clone()._addContext(a,c,!1,b)};y.prototype.thenByDesc=function(a,c,b){return this.clone()._addContext(a,c,!0,b)};s.range=function(a,c,b){switch(arguments.length){case 1:c=a;a=0;b=1;break;case 2:b=c>a?1:-1}return new f(function(d,e){if("string"==typeof d){var f=0<b?"each_ru":"each_rd",h=n.get(f,d);h||(h=new Function("s","e","st","a","for(var i=s;i"+(0<b?"<":">")+
"e;i+=st){if(("+l(d,"i","i","a")+")===false)return true;}return false;"),n.set(f,d,h));this.broken=h(a,c,b,e)}else if(this.broken=!1,0<b)for(f=a;f<c;f+=b){if(!1===d(f,f,e)){this.broken=!0;break}}else for(f=a;f>c;f+=b)if(!1===d(f,f,e)){this.broken=!0;break}return this})};s.repeat=function(a,c){return new f(function(b,d){if("string"==typeof b){var e=n.get("each_rpt",b);e||(e=new Function("c","e","a","for(var i=0;i<c;++i){if(("+l(b,"e","i","a")+")===false)return true;}return false;"),n.set("each_rpt",
b,e));this.broken=e(c,a,d)}else{this.broken=!1;for(e=0;e<c;++e)if(!1===b(a,e,d)){this.broken=!0;break}}return this})};s.setAlias=function(a){E=a};s.lambda={replace:l,parse:G,getHint:u,join:t};module.exports=s})();
