/*! Custom - Theia Sticky Sidebar | v1.7.0 - https://github.com/WeCodePixels/theia-sticky-sidebar */
!function(i){i.fn.theiaStickySidebar=function(t){function e(t,e){return!0===t.initialized||!(i("body").width()<t.minWidth)&&(function(t,e){t.initialized=!0,0===i("#theia-sticky-sidebar-stylesheet-"+t.namespace).length&&i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-'+t.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'));e.each(function(){var e={};if(e.sidebar=i(this),e.options=t||{},e.container=i(e.options.containerSelector),0==e.container.length&&(e.container=e.sidebar.parent()),e.sidebar.parents().css("-webkit-transform","none"),e.sidebar.css({position:e.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),e.stickySidebar=e.sidebar.find(".theiaStickySidebar"),0==e.stickySidebar.length){var a=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;e.sidebar.find("script").filter(function(i,t){return 0===t.type.length||t.type.match(a)}).remove(),e.stickySidebar=i("<div>").addClass("theiaStickySidebar").append(e.sidebar.children()),e.sidebar.append(e.stickySidebar)}e.marginBottom=parseInt(e.sidebar.css("margin-bottom")),e.paddingTop=parseInt(e.sidebar.css("padding-top")),e.paddingBottom=parseInt(e.sidebar.css("padding-bottom"));var n=e.stickySidebar.offset().top,s=e.stickySidebar.outerHeight();function d(){e.fixedScrollTop=0,e.sidebar.css({"min-height":"1px"}),e.stickySidebar.css({position:"static",width:"",transform:"none"})}e.stickySidebar.css("padding-top",1),e.stickySidebar.css("padding-bottom",1),n-=e.stickySidebar.offset().top,s=e.stickySidebar.outerHeight()-s-n,0==n?(e.stickySidebar.css("padding-top",0),e.stickySidebarPaddingTop=0):e.stickySidebarPaddingTop=1,0==s?(e.stickySidebar.css("padding-bottom",0),e.stickySidebarPaddingBottom=0):e.stickySidebarPaddingBottom=1,e.previousScrollTop=null,e.fixedScrollTop=0,d(),e.onScroll=function(e){if(e.stickySidebar.is(":visible"))if(i("body").width()<e.options.minWidth)d();else{if(e.options.disableOnResponsiveLayouts){var a=e.sidebar.outerWidth("none"==e.sidebar.css("float"));if(a+50>e.container.width())return void d()}var n,s,r=i(document).scrollTop(),c="static";if(r>=e.sidebar.offset().top+(e.paddingTop-e.options.additionalMarginTop)){var p,b=e.paddingTop+t.additionalMarginTop,l=e.paddingBottom+e.marginBottom+t.additionalMarginBottom,f=e.sidebar.offset().top,h=e.sidebar.offset().top+(n=e.container,s=n.height(),n.children().each(function(){s=Math.max(s,i(this).height())}),s),g=0+t.additionalMarginTop,S=e.stickySidebar.outerHeight()+b+l<i(window).height();p=S?g+e.stickySidebar.outerHeight():i(window).height()-e.marginBottom-e.paddingBottom-t.additionalMarginBottom;var u=f-r+e.paddingTop,m=h-r-e.paddingBottom-e.marginBottom,y=e.stickySidebar.offset().top-r,k=e.previousScrollTop-r;"fixed"==e.stickySidebar.css("position")&&"modern"==e.options.sidebarBehavior&&(y+=k),"stick-to-top"==e.options.sidebarBehavior&&(y=t.additionalMarginTop),"stick-to-bottom"==e.options.sidebarBehavior&&(y=p-e.stickySidebar.outerHeight()),y=k>0?Math.min(y,g):Math.max(y,p-e.stickySidebar.outerHeight()),y=Math.max(y,u),y=Math.min(y,m-e.stickySidebar.outerHeight());var v=e.container.height()==e.stickySidebar.outerHeight();c=(v||y!=g)&&(v||y!=p-e.stickySidebar.outerHeight())?r+y-e.sidebar.offset().top-e.paddingTop<=t.additionalMarginTop?"static":"absolute":"fixed"}if("fixed"==c){var x=i(document).scrollLeft();e.stickySidebar.css({position:"fixed",width:o(e.stickySidebar)+"px",transform:"translateY("+y+"px)",left:e.sidebar.offset().left+parseInt(e.sidebar.css("padding-left"))-x+"px",top:"0px"})}else if("absolute"==c){var T={};"absolute"!=e.stickySidebar.css("position")&&(T.position="absolute",T.transform="translateY("+(r+y-e.sidebar.offset().top-e.stickySidebarPaddingTop-e.stickySidebarPaddingBottom)+"px)",T.top="0px"),T.width=o(e.stickySidebar)+"px",T.left="",e.stickySidebar.css(T)}else"static"==c&&d();"static"!=c&&1==e.options.updateSidebarHeight&&e.sidebar.css({"min-height":e.stickySidebar.outerHeight()+e.stickySidebar.offset().top-e.sidebar.offset().top+e.paddingBottom}),e.previousScrollTop=r}},e.onScroll(e),i(document).on("scroll."+e.options.namespace,function(i){return function(){i.onScroll(i)}}(e)),i(window).on("resize."+e.options.namespace,function(i){return function(){i.stickySidebar.css({position:"static"}),i.onScroll(i)}}(e)),"undefined"!=typeof ResizeSensor&&new ResizeSensor(e.stickySidebar[0],function(i){return function(){i.onScroll(i)}}(e))})}(t,e),!0)}function o(i){var t;try{t=i[0].getBoundingClientRect().width}catch(i){}return void 0===t&&(t=i.width()),t}return(t=i.extend({containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"},t)).additionalMarginTop=parseInt(t.additionalMarginTop)||0,t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,function(t,o){e(t,o)||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),i(document).on("scroll."+t.namespace,function(t,o){return function(a){var n=e(t,o);n&&i(this).unbind(a)}}(t,o)),i(window).on("resize."+t.namespace,function(t,o){return function(a){var n=e(t,o);n&&i(this).unbind(a)}}(t,o)))}(t,this),this}}(jQuery);

/*! MenuIfy by Templateify | v1.0.0 - https://www.vietrick.com */
!function(a){a.fn.menuify=function(){return this.each(function(){var $t=a(this),b=$t.find('.LinkList ul > li').children('a'),c=b.length;for(var i=0;i<c;i++){var d=b.eq(i),h=d.text();if(h.charAt(0)!=='_'){var e=b.eq(i+1),j=e.text();if(j.charAt(0)==='_'){var m=d.parent();m.append('<ul class="sub-menu m-sub"/>');}}if(h.charAt(0)==='_'){d.text(h.replace('_',''));d.parent().appendTo(m.children('.sub-menu'));}}for(var i=0;i<c;i++){var f=b.eq(i),k=f.text();if(k.charAt(0)!=='_'){var g=b.eq(i+1),l=g.text();if(l.charAt(0)==='_'){var n=f.parent();n.append('<ul class="sub-menu2 m-sub"/>');}}if(k.charAt(0)==='_'){f.text(k.replace('_',''));f.parent().appendTo(n.children('.sub-menu2'));}}$t.find('.LinkList ul li ul').parent('li').addClass('has-sub');});}}(jQuery);

/*! Retina LazyIfy on Scroll modified by Vietrick | v1.6.1 - https://www.templateify.com */
!function(e){e.fn.lazyify=function(){return this.each(function(){var t,o,n=e(this),a=e(window),r=n.attr("data-image"),s="w"+n.width()+"-h"+n.height()+"-p-k-no-nu",c="w"+Math.round(2*n.width())+"-h"+Math.round(2*n.height())+"-p-k-no-nu";noThumbnail="undefined"!=typeof noThumbnail?noThumbnail:"//4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png",r.match("resources.blogblog.com")&&(r=noThumbnail),t=r.match("/s72-c")?r.replace("/s72-c","/"+s):r.match("/w72-h")?r.replace("/w72-h72-p-k-no-nu","/"+s):r.match("/s600/")?r.replace("/s600","/"+s):r.match("=s360-rw")?r.replace("=s360-rw","="+s):r.match("=w72-h")?r.replace("=w72-h72-p-k-no-nu","="+s):r,o=t.match(s)?t.replace(s,c):t,n.is(":hidden")||a.on("load resize scroll",function e(){if(a.scrollTop()+a.height()>=n.offset().top){a.off("load resize scroll",e);var r=new Image;r.onload=function(){n.attr("style","background-image:url("+this.src+");background-image:-webkit-image-set(url("+this.src+") 1x, url("+this.srcset+") 2x);background-image:image-set(url("+this.src+") 1x, url("+this.srcset+") 2x);").addClass("lazy-ify")},r.src=t,r.srcset=o}}).trigger("scroll")})}}(jQuery);

/*! Retina Resify by Vietrick | v1.0.0 - https://www.vietrick.com */
!function(e){e.fn.resify=function(){return this.each(function(){var t,a=$(this),r=a.parent().width(),e=a.parent().height(),h="w"+r+"-h"+e+"-p-k-no-nu",c="w"+2*r+"-h"+2*e+"-p-k-no-nu",n="w"+3*r+"-h"+3*e+"-p-k-no-nu";if(t=a.hasClass("lazyload")?"data-":"",a.attr(t+"src")){var s=a.attr(t+"src"),p=s.match("/s72-c")?s.replace("/s72-c","/"+h):s.match("/w72-h")?s.replace("/w72-h72-p-k-no-nu","/"+h):s.match("/s600/")?s.replace("/s600","/"+h):s.match("=s360-rw")?s.replace("=s360-rw","="+h):s.match("=w72-h")?s.replace("=w72-h72-p-k-no-nu","="+h):s,w=p.replace(h,c),i=p.replace(h,n);a.attr("width",r),a.attr("height",e),a.attr(t+"src",p),a.attr(t+"srcset",p+" 1x,"+w+" 2x,"+i+" 3x")}})}}(jQuery);

/*! jQuery replaceText | v1.1.0 - http://benalman.com/projects/jquery-replacetext-plugin/ */
!function(e){e.fn.replaceText=function(n,t,i){return this.each(function(){var o,r,l=this.firstChild,u=[];if(l)do{3===l.nodeType&&(r=(o=l.nodeValue).replace(n,t))!==o&&(!i&&/</.test(r)?(e(l).before(r),u.push(l)):l.nodeValue=r)}while(l=l.nextSibling);u.length&&e(u).remove()})}}(jQuery);

/*! Table of Contents | v0.4.0 - https://github.com/ndabas/toc */
!function(t){"use strict";var n=function(n){return this.each(function(){var e,i,a=t(this),o=a.data(),c=[a],r=this.tagName,d=0;e=t.extend({content:"body",headings:"h1,h2,h3"},{content:o.toc||void 0,headings:o.tocHeadings||void 0},n),i=e.headings.split(","),t(e.content).find(e.headings).attr("id",function(n,e){return e||function(t){0===t.length&&(t="?");for(var n=t.replace(/\s+/g,"_"),e="",i=1;null!==document.getElementById(n+e);)e="_"+i++;return n+e}(t(this).text())}).each(function(){var n=t(this),e=t.map(i,function(t,e){return n.is(t)?e:void 0})[0];if(e>d){var a=c[0].children("li:last")[0];a&&c.unshift(t("<"+r+"/>").appendTo(a))}else c.splice(0,Math.min(d-e,Math.max(c.length-1,0)));t("<li/>").appendTo(c[0]).append(t("<a/>").text(n.text()).attr("href","#"+n.attr("id"))),d=e})})},e=t.fn.toc;t.fn.toc=n,t.fn.toc.noConflict=function(){return t.fn.toc=e,this},t(function(){n.call(t("[data-toc]"))})}(window.jQuery);

/*! Javascript Cookie | v1.5.1 - https://github.com/js-cookie/js-cookie */
!function(e){var n;if("function"==typeof define&&define.amd)define(["jquery"],e);else if("object"==typeof exports){try{n=require("jquery")}catch(e){}module.exports=e(n)}else{var o=window.Cookies,r=window.Cookies=e(window.jQuery);r.noConflict=function(){return window.Cookies=o,r}}}(function(e){var n=/\+/g;function o(e){return u.raw?e:encodeURIComponent(e)}function r(e){return o(u.json?JSON.stringify(e):String(e))}function t(e,o){var r=u.raw?e:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(n," ")),u.json?JSON.parse(e):e}catch(e){}}(e);return c(o)?o(r):r}function i(){for(var e,n,o=0,r={};o<arguments.length;o++)for(e in n=arguments[o])r[e]=n[e];return r}function c(e){return"[object Function]"===Object.prototype.toString.call(e)}var u=function(e,n,f){if(arguments.length>1&&!c(n)){if("number"==typeof(f=i(u.defaults,f)).expires){var s=f.expires,a=f.expires=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*s)}return document.cookie=[o(e),"=",r(n),f.expires?"; expires="+f.expires.toUTCString():"",f.path?"; path="+f.path:"",f.domain?"; domain="+f.domain:"",f.secure?"; secure":""].join("")}for(var d,p=e?void 0:{},l=document.cookie?document.cookie.split("; "):[],m=0,v=l.length;m<v;m++){var g=l[m].split("="),w=(d=g.shift(),u.raw?d:decodeURIComponent(d)),j=g.join("=");if(e===w){p=t(j,n);break}e||void 0===(j=t(j))||(p[w]=j)}return p};return u.get=u.set=u,u.defaults={},u.remove=function(e,n){return u(e,"",i(n,{expires:-1})),!u(e)},e&&(e.cookie=u,e.removeCookie=u.remove),u});

// 
function shortCodeIfy(r,n,t){for(var o=r.split("$"),s=/[^{\}]+(?=})/g,e=0;e<o.length;e++){var i=o[e].split("=");if(i[0].trim()==n)return null!=(t=i[1]).match(s)&&String(t.match(s)).trim()}return!1}
function msgError(){return'<span class="error-msg"><b>Error:</b>&nbsp;No Results Found</span>'}
function beforeLoader(){return'<div class="loader"></div>'}
function getFeedUrl(e,t,s,a){switch(s){case"recent":a="/feeds/posts/default?alt=json&max-results="+t;break;case"comments":a="list1"==e?"/feeds/comments/default?alt=json&max-results="+t:"/feeds/posts/default/-/"+s+"?alt=json&max-results="+t;break;default:a="/feeds/posts/default/-/"+s+"?alt=json&max-results="+t}return a}
function getPostLink(e,t){for(var s=0;s<e[t].link.length;s++)if("alternate"==e[t].link[s].rel){var a=e[t].link[s].href;break}return a}
function getPostTitle(t,e,s){return t[e].title.$t?t[e].title.$t:exportify.noTitle}
function getPostTag(t,e,s){return t[e].category&&1==exportify.postLabels?'<span class="entry-tag">'+t[e].category[0].term+"</span>":""}
function getPostDate(t,e,s,a,n){var r=t[e].published.$t,i=r.substring(0,4),o=r.substring(5,7),p=r.substring(8,10);const l=dateFormat.replace("{m}",monthNames[parseInt(o,10)-1]).replace("{d}",p).replace("{y}",i);return n=""!=s&&1==exportify.postLabels?'<span class="on sp">-</span>':"",1==exportify.postDate?'<span class="entry-time">'+n+'<time class="published" datetime="'+r+'">'+l+"</time></span>":""}
function getPostMeta(t,e,s){return 1==exportify.postLabels||1==exportify.postDate?'<div class="entry-meta mi">'+e+t+"</div>":""}
function getFirstImage(t,n){var s=$("<img>").html($(t).text()).find("img:first").attr("src");k=null!=s?s:$("<div>").html(t).find("img:first").attr("src");var r=k.lastIndexOf("/")||0,g=k.lastIndexOf("/",r-1)||0,i=k.substring(0,g),a=k.substring(g,r),e=k.substring(r);return-1!=k.indexOf("play-lh.googleusercontent.com")?(e.match(/=s[0-9]+/g),i+a+e.replace(/=s[0-9]+/g,"=w72-h72-p-k-no-nu")):(a.match(/\/s[0-9]+/g)||a.match(/\/w[0-9]+/g)||"/d"==a&&(a="/w72-h72-p-k-no-nu"),i+a+e)}
function getPostImage(e,t,i,a){var o=e[t].content.$t;return i=e[t].media$thumbnail?e[t].media$thumbnail.url:"https://resources.blogblog.com/img/blank.gif",o.indexOf(o.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g))>-1?o.indexOf("<img")>-1?o.indexOf(o.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g))<o.indexOf("<img")?i.replace("img.youtube.com","i.ytimg.com").replace("/default.","/maxresdefault."):getFirstImage(o):i.replace("img.youtube.com","i.ytimg.com").replace("/default.","/maxresdefault."):o.indexOf("<img")>-1?getFirstImage(o):"https://resources.blogblog.com/img/blank.gif"}
function getPostImageType(e,t){return e.match("i.ytimg.com")?"is-video":"is-image"}
function getPostComments(t,e,a,i){var m=t[e].author[0].name.$t,c=t[e].author[0].gd$image.src.replace("/s113","/s72-c").replace("/s220","/s72-c"),r=t[e].title.$t;return(c.match("//img1.blogblog.com/img/blank.gif")||c.match("//img1.blogblog.com/img/b16-rounded.gif"))&&(c="//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w72-h72-p-k-no-nu/avatar.jpg"),'<div class="cmm1-item item-'+e+'"><a class="entry-inner wrap-all-link" href="'+a+'" title="'+m+'"><span class="entry-image-wrap cmm-avatar"><span class="entry-thumb" data-image="'+c+'"></span></span><div class="entry-header"><h2 class="entry-title cmm-title">'+m+'</h2><p class="cmm-snippet excerpt">'+r+"</p></div></a></div>"}
function getAppMeta(e,t){var a={author:"",rate:"5",rc:"",version:"Full",headline:"",content:"",bg:"https://1.bp.blogspot.com/-Lei-1o5B9gc/YBubPnHEbVI/AAAAAAAAEDY/cmXCZkSyMv4u-P6uicb2ofrrVBRQ6aAzACNcBGAsYHQ/s450/vzYVGZP-min.jpg",dl:"",cate:""},r=e[t].link,o=e[t].content.$t;a.headline=e[t].category[0].term,a.content=o.replace(/<\/?[^>]+(>|$)/g,"").substring(0,180);for(var p=0,c=r;p<c.length;p++)c[p].href.toLowerCase().match("au.app")&&(a.author=c[p].type),c[p].href.toLowerCase().match("ra.app")&&(a.rate=c[p].type),c[p].href.toLowerCase().match("rc.app")&&(a.rc=c[p].type),c[p].href.toLowerCase().match("v.app")&&(a.version=c[p].type),c[p].href.toLowerCase().match("hl.app")&&(a.headline=c[p].type),c[p].type.toLowerCase().match("bg")&&(a.bg=c[p].href),c[p].type.toLowerCase().match("dl")&&(a.dl=c[p].href);return a}
function getAjax(e,a,s,t){switch(a){case"msimple":case"trending":case"list1":case"block1":case"list":case"related":0==t&&(t="geterror404");var i=getFeedUrl(a,s,t);$.ajax({url:i,type:"GET",dataType:"json",cache:!0,beforeSend:function(s){switch(a){case"trending":case"list1":case"block1":case"list":e.html(beforeLoader());break;case"related":e.html(beforeLoader()).parent().addClass("show-ify")}},success:function(s){var i="";switch(a){case"msimple":i='<div class="ul mega-items">';break;case"trending":i='<div class="trending-items">';break;case"block1":i='<div class="app-items">';break;case"list":i='<div class="list-items">';break;case"list1":i="comments"!=t?'<div class="list1-items sidebar-posts">':'<div class="cmm1-items">';break;case"related":i='<div class="related-posts">'}var l=s.feed.entry;if(null!=l)for(var r=0,c=l;r<c.length;r++){var n=getPostLink(c,r),d=getPostTitle(c,r),p=getPostTag(c,r),m=getPostDate(c,r,p),h=getPostImage(c,r),v=getPostImageType(h),g=getPostMeta(m,p),o=getAppMeta(c,r),f="";switch(a){case"msimple":f+='<div class="mega-item post"><div class="mega-content"><a title="'+d+'" class="entry-image-wrap '+v+'" href="'+n+'"><span class="entry-thumb" data-image="'+h+'"></span></a><h2 class="entry-title"><a href="'+n+'" title="'+d+'">'+d+"</a></h2></div></div>";break;case"trending":switch(r){case 0:f+='<div class="trending-left"><div class="trending-item item-'+r+'"><a title="'+d+'" class="entry-image-wrap '+v+'" href="'+n+'"><span class="entry-thumb" data-image="'+h+'"></span></a><div class="entry-header">'+g+'<h2 class="entry-title"><a title="'+d+'" href="'+n+'">'+d+'</a></h2></div></div></div><div class="trending-right">';break;default:f+='<div class="trending-item item-'+r+'"><div class="entry-header">'+g+'<h2 class="entry-title"><a title="'+d+'" href="'+n+'">'+d+"</a></h2></div></div>"}break;case"block1":f+='<div class="appspot-item item-'+r+'"><div class="app-info"><a title="'+d+'" class="entry-image-wrap '+v+'" href="'+n+'"><img alt="'+d+'" class="entry-img lazyload" data-src="'+h+'"/></a><div class="entry-header"><h2 class="entry-title"><a title="'+d+'" href="'+n+'">'+d+'</a></h2><span class="entry-tag headline">'+o.headline+'</span></div><span class="app-link-holder"><a class="app-link" href="'+n+'" title="'+d+'">GET</a></span></div><a title="'+d+'" class="appspot-image-wrap '+v+'" href="'+n+'"><span class="entry-thumb" data-image="'+o.bg+'"></span></a><div class="app-content">'+o.content+"</div> </div>";break;case"list":f+='<div class="appspot-item item-'+r+'"><div class="app-info"><a title="'+d+'" class="entry-image-wrap '+v+'" href="'+n+'"><span class="entry-thumb" data-image="'+h+'"></span></a><div class="entry-header"><h2 class="entry-title"><a title="'+d+'" href="'+n+'">'+d+'</a></h2><span class="entry-tag headline">'+o.headline+'</span></div><span class="app-link-holder"><a class="app-link" href="'+n+'" title="'+d+'">GET</a></span></div>  </div>';break;case"list1":switch(t){case"comments":f+=getPostComments(c,r,n);break;default:switch(r){case 0:f+='<div class="list1-item post item-'+r+'"><a title="'+d+'" class="entry-image-wrap '+v+'" href="'+n+'"><span class="entry-thumb" data-image="'+h+'"/></a><div class="entry-header">'+g+'<h2 class="entry-title"><a href="'+n+'" title="'+d+'">'+d+"</a></h2></div></div>";break;default:f+='<div class="list1-item post item-'+r+'"><a title="'+d+'" class="entry-image-wrap '+v+'" href="'+n+'"><span class="entry-thumb" data-image="'+h+'"/></a><div class="entry-header"><h2 class="entry-title"><a href="'+n+'" title="'+d+'">'+d+"</a></h2></div></div>"}}break;case"related":f+='<div class="related-item post item-'+r+'"><a title="'+d+'" class="entry-image-wrap '+v+'" href="'+n+'"><span class="entry-thumb" data-image="'+h+'"></span></a><div class="entry-header"><h2 class="entry-title"><a href="'+n+'" title="'+d+'">'+d+'</a></h2><span class="entry-tag headline">'+o.headline+'</span></div><span class="app-link-holder"><a href="'+n+'" title="'+d+'" class="app-link">GET<a/></span></div>'}i+=f}else switch(a){case"msimple":i='<div class="ul mega-items no-items">'+msgError()+"</div>";break;default:i=msgError()}switch(a){case"msimple":i+="</div>",e.append(i).addClass("msimple"),e.find("a:first").attr("href",function(e,a){switch(t){case"recent":a=a.replace(a,"/search");break;default:a=a.replace(a,"/search/label/"+t)}return a});break;default:i+="</div>",e.html(i)}e.find("span.entry-thumb").lazyify(),e.find("img.entry-img").resify()},error:function(){switch(a){case"msimple":e.append('<div class="ul mega-items no-items">'+msgError()+"</div>");break;default:e.html(msgError())}}})}}
function ajaxMega(e,a,t,i,n){if(n.match("getmega")){if("msimple"==a)return getAjax(e,a,t,i);e.append('<div class="ul mega-items no-items">'+msgError()+"</div>")}}
function ajaxTrending(e,a,t,i,n){if(n.match("gettrending")){if("trending"==a)return getAjax(e,a,t,i);e.html(msgError()).parent().addClass("show-ify")}}
function ajaxWidget(t,e,a,r,i){if(i.match("getwidget")){if("list1"==e)return getAjax(t,e,a,r);t.html(msgError())}}
function ajaxBlock(t,e,a,r,i){if(i.match("getblock")){if("block1"==e||"list"==e)return getAjax(t,e,a,r);t.html(msgError())}}
function ajaxRelated(t,e,a,r,i){if(i.match("getrelated"))return getAjax(t,e,a,r)}
function disqusComments(e){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="//"+e+".disqus.com/blogger_item.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(t)}
function beautiAvatar(e){$(e).attr("src",function(e,t){return(t=(t=t.replace("//resources.blogblog.com/img/blank.gif","//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s39/avatar.jpg")).replace("//lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=s35","//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s39/avatar.jpg")).replace("/s35","/s39")})}

$(".report-this-post").on("click",function(){$(".report-this-post").hasClass("expand")?$(".report-this-post").removeClass("expand"):$(".report-this-post").addClass("expand"),$(".entry-content-wrap .post-report .contact-form").slideToggle("slow")});

	$("#colorify-free-main-nav").menuify(), $("#colorify-free-main-nav .widget").addClass("show-menu"), $(".show-search").on("click",function(){$("body").addClass("search-active"),$("#main-search-wrap").fadeIn(170).find("input").focus()}), $(".hide-search").on("click",function(){$("body").removeClass("search-active"),$("#main-search-wrap").fadeOut(170).find("input").val("").blur()}),
	$(".sidebar .social-icons li a").each(function(){var a=$(this),t=a.attr("href").trim().split("#");null!=t[1]&&a.append('<span class="text">'+t[1]+"</span>"),a.attr("href",t[0])}), $(".FollowByEmail .widget-content").each(function(t,e){var o=$(this),l=o.data("shortcode");null!=l&&(t=shortCodeIfy(l,"title"),e=shortCodeIfy(l,"text"),0!=t&&o.find(".follow-by-email-title").text(t),0!=e&&o.find(".follow-by-email-text").text(e))}), $(".post-body a").each(function(){var t=$(this),o=t.html(),a=o.toLowerCase(),s=shortCodeIfy(o,"text"),d=shortCodeIfy(o,"icon"),e=shortCodeIfy(o,"color");a.match("getbutton")&&0!=s&&(t.addClass("button btn").text(s),0!=d&&t.addClass(d),0!=e&&t.addClass("colored-button").attr("style","background-color:"+e+";"))}), $(".post-body b").each(function(){var t=$(this),e=t.text(),i=e.toLowerCase().trim();i.match(/(?:\$ads\=\{1\})/g)&&t.replaceWith('<div id="colorify-free-new-before-ad"/>'),i.match(/(?:\$ads\=\{2\})/g)&&t.replaceWith('<div id="colorify-free-new-after-ad"/>'),i.match("{tocify}")&&(e=0!=shortCodeIfy(e,"title")?shortCodeIfy(e,"title"):"Table of Contents",t.replaceWith('<div class="tocify-wrap"><div class="tocify-inner"><a href="javascript:;" class="tocify-title" role="button" title="'+e+'"><span class="tocify-title-text">'+e+'</span></a><ol id="tocify"></ol></div></div>'),$(".tocify-title").each(function(t){(t=$(this)).on("click",function(){t.toggleClass("is-expanded"),$("#tocify").slideToggle(170)})}),$("#tocify").toc({content:"#post-body",headings:"h2,h3,h4"}),$("#tocify li a").each(function(t){(t=$(this)).click(function(){return $("html,body").animate({scrollTop:$(t.attr("href")).offset().top-20},500),!1})})),i.match("{contactform}")&&(t.replaceWith('<div class="contact-form"/>'),$(".contact-form").append($("#ContactForm1"))),i.match("{leftsidebar}")&&t.replaceWith("<style>.is-single #content-wrapper > .container{flex-direction:row-reverse}.rtl .is-single #content-wrapper > .container{flex-direction:row}</style>"),i.match("{rightsidebar}")&&t.replaceWith("<style>.is-single #content-wrapper > .container{flex-direction:row}.rtl .is-single #content-wrapper > .container{flex-direction:row-reverse}</style>"),i.match("{fullwidth}")&&t.replaceWith("<style>.is-single #main-wrapper{width:100%}.is-single #sidebar-wrapper{display:none}</style>")}), $(".post-body blockquote").each(function(){var e=$(this),a=e.text().toLowerCase().trim(),r=e.html();if(a.match("{alertsuccess}")){const a=r.replace("{alertSuccess}","");e.replaceWith('<div class="alert-message alert-success">'+a+"</div>")}if(a.match("{alertinfo}")){const a=r.replace("{alertInfo}","");e.replaceWith('<div class="alert-message alert-info">'+a+"</div>")}if(a.match("{alertwarning}")){const a=r.replace("{alertWarning}","");e.replaceWith('<div class="alert-message alert-warning">'+a+"</div>")}if(a.match("{alerterror}")){const a=r.replace("{alertError}","");e.replaceWith('<div class="alert-message alert-error">'+a+"</div>")}if(a.match("{codebox}")){const a=r.replace("{codeBox}","");e.replaceWith('<pre class="code-box">'+a+"</pre>")}}),
	$(".entry-share-links .window-ify,.colorify-free-share-links .window-ify").on("click",function(){var i=$(this),o=i.data("url"),e=i.data("width"),n=i.data("height"),t=window.screen.width,a=window.screen.height,r=Math.round(t/2-e/2),h=Math.round(a/2-n/2);window.open(o,"_blank","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width="+e+",height="+n+",left="+r+",top="+h).focus()}), $(".colorify-free-share-links").each(function(){var i=$(this);i.find(".show-hid a").on("click",function(){i.toggleClass("show-hidden")})}),
	$(".about-author .author-text").each(function(){var t=$(this),a=t.find("a");a.each(function(){var t=$(this),a=t.text().trim(),e=t.attr("href");t.replaceWith('<li class="'+a+'"><a href="'+e+'" title="'+a+'" rel="noopener noreferrer" target="_blank"/></li>')}),a.length&&t.parent().append('<ul class="author-links social social-color"></ul>'),t.find("li").appendTo(".author-links")}), $(".HTML .widget-container").each(function(o,t,e){var l=$(this),r=$(window),s=l.data("shortcode"),c=shortCodeIfy(s,"type");null!=s&&(o=s.toLowerCase(),t=shortCodeIfy(s,"results"),e=shortCodeIfy(s,"label"),r.on("scroll",function s(){r.scrollTop()+r.height()>=l.offset().top&&(r.off("scroll",s),ajaxBlock(l,c,t,e,o))}).trigger("scroll"))}), $("#colorify-free-related-posts .HTML").each(function(t,e){var l=$(this).data("shortcode");if(null!=l){function o(){return t=shortCodeIfy(l,"title"),e=shortCodeIfy(l,"results"),[t,e]}$("#related-wrap").each(function(t,e){var l=$(this),r=$(window),a=l.find(".colorify-free-related-content"),f=o();t=0!=f[1]?f[1]:4,0!=f[0]&&l.find(".related-title .title").text(f[0]),e=l.find(".related-tag").data("label"),r.on("scroll",function l(){r.scrollTop()+r.height()>=a.offset().top&&(r.off("scroll",l),ajaxRelated(a,"related",t,e,"getrelated"))}).trigger("scroll")})}}), $(".colorify-free-blog-post-comments").each(function(){var e=$(this),t=shortCodeIfy(e.data("shortcode"),"type"),o="comments-system-"+shortCodeIfy(t,"type"),s=e.find("#top-continue .comment-reply");switch(t){case"blogger":case"disqus":case"facebook":e.addClass(o).find("#comments").html('<div class="fb-comments" data-width="100%" data-href="'+disqus_blogger_current_url+'" order_by="time" data-colorscheme="'+fbCommentsTheme+'" data-numposts="5" data-lazy="true"></div>'),e.show();break;case"hide":e.hide();break;default:e.addClass("comments-system-blogger").show(),$(".entry-meta .entry-comments-link").addClass("show"),s.addClass("btn"),beautiAvatar(".avatar-image-container img")}var a=e.find(".comments .comment-reply"),n=e.find(".comments #top-continue"),c=e.find("#top-ce.comment-replybox-thread");a.on("click",function(){n.show(),c.hide()}),n.on("click",function(){n.hide(),c.show()})}), $(function () {
	$(".entry-image-wrap .entry-thumb,.author-avatar-wrap .author-avatar,#footer-fbm .Image").lazyify(),$(".entry-image-wrap .entry-img").resify(),
	$("#colorify-free-mobile-menu").each(function(){var e=$(this),o=$("#colorify-free-main-nav-menu").clone();o.attr("id","main-mobile-nav"),o.find(".mega-items").remove(),o.find(".mega-menu > a").each(function(e,o){var l=$(this),n=l.data("shortcode");null!=n&&(o="recent"==(e=shortCodeIfy(n.trim(),"label"))?"/search":"/search/label/"+e,l.attr("href",o))}),o.appendTo(e),$(".mobile-menu-toggle, .hide-colorify-free-mobile-menu, .overlay").on("click",function(){$("body").toggleClass("nav-active")}),$(".colorify-free-mobile-menu .has-sub").append('<div class="submenu-toggle"/>'),$(".colorify-free-mobile-menu .mega-menu").find(".submenu-toggle").remove(),$(".colorify-free-mobile-menu ul li .submenu-toggle").on("click",function(e){$(this).parent().hasClass("has-sub")&&(e.preventDefault(),$(this).parent().hasClass("show")?$(this).parent().removeClass("show").find("> .m-sub").slideToggle(170):$(this).parent().addClass("show").children(".m-sub").slideToggle(170))})}),
	$(".mm-footer .mm-social").each(function(){var o=$(this),e=$("#colorify-free-about-section ul.social").clone();e.removeClass("social-bg-hover"),e.appendTo(o)}),
	$(".mm-footer .mm-menu").each(function(){var e=$(this);$("#footer-menu ul.link-list").clone().appendTo(e)}),
	$(".header-inner").each(function(){var e=$(this);if(1==fixedMenu&&e.length>0){var s=$(document).scrollTop(),o=e.offset().top,i=e.height(),a=o+i+i;$(window).scroll(function(){var i=$(document).scrollTop();i>a?e.addClass("is-fixed"):(i<o||i<=1)&&e.removeClass("is-fixed"),i>s?e.removeClass("show"):e.addClass("show"),s=i})}}),
	$(".is-single #main-wrapper, .is-single #sidebar-wrapper").each(function(i){1==fixedSidebar&&(i=1==fixedSidebar?20:40,$(this).theiaStickySidebar({containerSelector:"#content-wrapper > .container",additionalMarginTop:i,additionalMarginBottom:40}))}),
	$("#post-body iframe").each(function(){var a=$(this);a.attr("src").match("www.youtube.com")&&a.wrap('<div class="responsive-video-wrap"/>')}),
	$("p.comment-content").each(function(){var e=$(this);e.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g,'<img src="$1"/>'),e.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g,'<div class="responsive-video-wrap"><iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')}),
	$("#colorify-free-load-more-link").each(function(){var o=$(this).data("load");o&&$("#colorify-free-load-more-link").show(),$("#colorify-free-load-more-link").on("click",function(e){$("#colorify-free-load-more-link").hide(),$.ajax({url:o,success:function(e){var l=$(e).find(".blog-posts");l.find(".index-post").addClass("post-animated post-fadeInUp"),$(".blog-posts").append(l.html()),(o=$(e).find("#colorify-free-load-more-link").data("load"))?$("#colorify-free-load-more-link").show():($("#colorify-free-load-more-link").hide(),$("#blog-pager .no-more").addClass("show"))},beforeSend:function(){$("#blog-pager .loading").show()},complete:function(){$("#blog-pager .loading").hide(),$(".index-post .entry-image-wrap .entry-thumb").lazyify()}}),e.preventDefault()})}),
	$("#colorify-free-cookie-ify").each(function(){var o=$(this),e=o.find(".widget.Text").data("shortcode");null!=e&&(ok=shortCodeIfy(e,"ok"),days=shortCodeIfy(e,"days"),0!=ok&&o.find("#colorify-free-cookie-ify-accept").text(ok),0!=days?days=Number(days):days=7),o.length>0&&("1"!==$.cookie("colorify_free_cookie_ify_consent")&&(o.css("display","block"),setTimeout(function(){o.addClass("is-visible")},10)),$("#colorify-free-cookie-ify-accept").off("click").on("click",function(e){e.preventDefault(),e.stopPropagation(),$.cookie("colorify_free_cookie_ify_consent","1",{expires:days,path:"/"}),o.removeClass("is-visible"),setTimeout(function(){o.css("display","none")},500)}),cookieChoices={})}),
	$("#app-modal").each(function(){var o=$(this),s=$(".app-bar").offset().top+46,a=$("#related-wrap").offset().top,t=$(".app-logo").offset().top-20;$(window).on("scroll",function(){$(this).scrollTop()>=s&&$(this).scrollTop()<a?(o.show(),o.hasClass("is-show")||(o.addClass("is-show"),o.animate({bottom:"+=120px"},250),o.animate({bottom:"-=10px"},500))):o.hasClass("is-show")&&(o.removeClass("is-show"),o.animate({bottom:"-=110px"},300))}),$("#app-modal").on("click",function(){$("html, body").animate({scrollTop:t},500)})})
})
