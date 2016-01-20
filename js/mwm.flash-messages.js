var mwm=window.mwm||{};mwm.alerts=function(t,e,a){var o=t.alerts||{},i={alerts:{success:"alert-success",error:"alert-error",hide:"hide",hideForm:"hide",animation:"subtle-bounce",animated:"animated",invisible:"invisible",position:"center"},notify:{timeout:3,position:"top"},vex:{className:"vex-theme-default",focusFirstInput:!1},top:{prependTo:"body",bar:'<div id="FlashNotifications" class="notifications-flash"></div>',message:'<div class="notifications-flash--item notifications-flash--item_{{ level }}" data-content="{{ content }}" data-id="{{ id }}"><div class="notifications-flash--item-content">{{ content }}</div></div>',dismissable:'<span class="close notifications-flash--item-close" data-dismiss="notifications-flash--item" aria-label="Close"><span aria-hidden="true">&times;</span></span>',initCheck:function(){return o.top.$bar.length||e("#FlashNotifications").length},classes:{animated:"notifications-flash_in"}}},n=function(){return e&&"function"==typeof e().modal},r=function(t,e){"top"==e?t.css({top:0,bottom:"auto"}).addClass("notification-top"):"bottom"==e?t.css({top:"auto",bottom:0}).addClass("notification-bottom"):"left"==e?t.css({left:0,right:"auto"}).addClass("notification-left"):"right"==e?t.css({left:"auto",right:0}).addClass("notification-right"):t.removeClass("notification-top notification-bottom notification-left notification-right")},s=function(){i.top.initCheck()||(o.top.$bar=e(i.top.bar),e(i.top.prependTo).prepend(o.top.$bar))};return o.configure=function(t){i=e.extend(!0,{},i,t)},o.message=function(t,s){var l,m=t.Content?t.Content:t.message;if(t.redirect&&(e("body").addClass("loading-redirect"),window.location=t.redirect),m&&!t.hideMessage)if(t.$form&&t.$form.data("onMessageClass")&&t.$form.addClass(t.$form.data("onMessageClass")),n()&&!t.hideModal&&t.$modal&&!e(".modal-backdrop").length)t.Title&&t.$modal.find('[role="title"]').html(t.Title),m&&t.$modal.find('[role="content"]').html(m),t.$modal.modal(),t.$modal.off("hidden.bs.modal.forms.mwm").on("hidden.bs.modal.forms.mwm",function(){var e=t.$form?t.$form.find(".form-group.error"):t.$modal.parents("form").find(".form-group.error");e.length&&e.first().find(":input:not(:hidden)").first().focus(),s&&s(),t.$modal.trigger("mwm::alert",["modal",t]),t.$form&&t.$form.trigger("mwm::alert",[type,t])}),o.clear(t);else if(!t.hideAlert&&t.$alert&&t.$alert.length)t.hideForm&&(t.$form?t.$form.addClass(i.alerts.hideForm):t.$alert.parents("form:first").addClass(i.alerts.hideForm)),t.success&&t.success!==!1?t.$alert.removeClass(i.alerts.error).addClass(i.alerts.success).html(m):t.$alert.removeClass(i.alerts.success).addClass(i.alerts.error).html(m),l=t.$alert.data("animate"),l||(l=i.alerts.animation),t.$alert.hasClass(i.alerts.invisible)?t.$alert.removeClass(i.alerts.invisible+" "+i.alerts.hide).addClass(i.alerts.animated+" "+l):t.$alert.hasClass(i.alerts.animated)?(t.$alert.removeClass(i.alerts.animated+" "+l).addClass(i.alerts.invisible),setTimeout(function(){t.$alert.removeClass(i.alerts.invisible+" "+i.alerts.hide).addClass(i.alerts.animated+" "+l)},50)):t.$alert.removeClass(i.alerts.hide),t.$alert.trigger("mwm::alert",["html",t]),t.$form&&t.$form.trigger("mwm::alert",[type,t]);else if(a){type="vex";var d=t.positionAlert?t.positionAlert:i.alerts.position,f=a.dialog.alert(e.extend({},i.vex,{message:m})).bind("vexOpen.mwm",function(e,a){r(a.$vex,d),t.closeAfter||(s&&s(),t.$form&&t.$form.trigger("mwm::alert",[type,t]))});t.closeAfter&&setTimeout(function(){a.close(f.data().vex.id),s&&s(),t.$form&&t.$form.trigger("mwm::alert",[type,t])},1e3*t.closeAfter)}else alert(m),s&&s(),t.$form&&t.$form.trigger("mwm::alert",[type,t])},o.notify=function(t,o){var n=t.Content?t.Content:t.message;if(n&&!t.hideMessage){var s=t.Timeout?t.Timeout:i.notify.timeout;if(s*=1e3,a){var l=e.extend({},i.vex,{message:n}),m=t.position?t.position:i.notify.position,d=a.dialog.alert(l).bind("vexOpen.mwm",function(a,i){r(i.$vex,m),s&&(o&&o(),t.$form&&t.$form.trigger("mwm::notification",[t]),e.event.trigger("mwm::notification",[t]))});s&&setTimeout(function(){d.data()&&d.data().vex&&d.data().vex.id&&a.close(d.data().vex.id),o&&o(),t.$form&&t.$form.trigger("mwm::notification",[t]),e.event.trigger("mwm::notification",[t])},s)}}},o.button=function(o,n,r){var s=!0;if(o&&o.length&&(o.data("alertContent")||o.data("alertTarget"))){var l=o.data("alertTarget"),m=o.data("alertType")?o.data("alertType"):"alert",d=o.data("alertIf"),f=e({},i.vex,{message:o.data("alertContent"),buttons:o.data("alertButtons")?o.data("alertButtons"):{}}),c=function(o,i){if(o&&(f.message="string"==typeof o?o:e(o).text()),i&&(f.className=f.className?f.className+" "+i:i),buttons&&buttons.cancel&&(buttons.cancel.click=function(t){return t.data().vex.value=!1,a.close(t.data().vex.id)}),d&&!e(d).length)return s;if("alert"===m)a?a.dialog.alert(f):alert(f.message);else if("confirm"===m){t&&t.forms&&t.forms.submit&&(t.forms.submit.submitting=!0),s=!1;var l=!1;a?(f.callback=function(e){t&&t.forms&&t.forms.submit&&(t.forms.submit.submitting=!0),n&&e?n():r&&!e&&r()},a.dialog.confirm(f)):(l=confirm(f.message),n&&l?n():r&&!l&&r())}return null};if(l)if(0===l.indexOf("#")&&e(l).length){var u=e(l),p="";if(u.data("modal")){var g=u.find(".modal-content").find("[role=title]");g.length&&(p+=g[0].outerHTML),p+=u.find(".modal-content").find("[role=content]").html(),c(p,"button-alert-from-modal")}else p=u.html(),c(p,"button-alert-from-html")}else e.get(l,function(t){c(t,"button-alert-from-url")});else c(null,"button-alert-from-attribute")}return s},o.clear=function(t){t.$alert&&t.$alert.length&&t.$alert.addClass(i.alerts.hide)},o.top=o.top||{},o.top.$bar=o.top.$bar||[],o.top.message=function(t){s();var a=t.Content?t.Content:t.message?t.message:t.content,n=t.id?t.id:a;if(a&&!o.top.$bar.find('[data-id="'+n+'"]').length){var r=e(i.top.message.replace(new RegExp("{{ level }}","g"),t.level||"info").replace(new RegExp("{{ content }}","g"),a).replace(new RegExp("{{ id }}","g"),n));if(t.dismissable){var l=e(i.top.dismissable);r.prepend(l),l.one("click",function(){o.top.clear(r)})}o.top.$bar.append(r).addClass(i.top.classes.animated).parent().addClass(i.top.classes.animated),setTimeout(function(){r.addClass(i.top.classes.animated),t.timeout&&setTimeout(function(){r.removeClass(i.top.classes.animated)},1e3*t.timeout),o.top.$bar.trigger("mwm::top:alert",[r,t])},500)}},o.top.clear=function(t){s();var a=null;t?(a=t instanceof e?t:o.top.$bar.children().filter(function(){return e(this).data("id")==t}),a.removeClass(i.top.classes.animated),a.one("webkitTransitionEnd mozTransitionEnd MSTransitionEnd otransitionend transitionend",function(){e(this).remove()})):(o.top.$bar.removeClass(i.top.classes.animated),o.top.$bar.one("webkitTransitionEnd mozTransitionEnd MSTransitionEnd otransitionend transitionend",function(){o.top.$bar.text("").parent().removeClass(i.top.classes.animated)})),o.top.$bar.trigger("mwm::top:cleared",[a,t])},o.flash=function(t,e){for(var a=[],i=0;i<t.length;i++)t[i].type||(t[i].type="top"),e&&-1===a.indexOf(t[i].type)&&(a=a.push(t[i].type),"top"==t[i].type?o.top.clear():o.clear()),o.top.message(t[i])},o}(window.mwm||{},window.jQuery||window.Zepto||window.Sprint,window.vex||null),window.flash_message=function(t,e){if(t.hasOwnProperty("alerts")){var a=window.flash_message||{},o=function(e){e=e.sort(function(t,e){return t.priority<e.priority?-1:t.priority>e.priority?1:0}),t.alerts.flash(e)};return a.ajax=function(t,i,n){e.isArray(i)||(i=i?i.split(","):[]);var r=[],s=function(){e.get(t).done(function(t){if(t!==!1&&(t&&e.isArray(t)&&(r=r.concat(t)),o(r),n)){var s=n.hasOwnProperty("link")?n.link:n,l=n.hasOwnProperty("timeout")?n.timeout:5e3,m=n.hasOwnProperty("before")?n.before:i;setTimeout(function(){a.ajax(s,m,n)},l)}})};if(i.length)for(var l=0,m=0;m<i.length;m++)e.get(i[m]).done(function(t){t&&e.isArray(t)&&(r=r.concat(t))}).always(function(){l++,l===i.length&&s()});else s()},a}}(window.mwm||{},window.jQuery||window.Zepto||window.Sprint||(window.mwm&&mwm.jquery?mwm.jquery:null));