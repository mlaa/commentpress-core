var cpajax_nonce,cpajax_post_url,cpajax_post_title,cpajax_infinite_posts,cpajax_infinite_comments,cpajax_comment_form;if("undefined"!==typeof CommentpressAjaxInfiniteSettings){cpajax_nonce=CommentpressAjaxInfiniteSettings.nonce}cpajax_infinite_posts=new Array;cpajax_infinite_comments="";cpajax_comment_form=0;cpajax_post_url=document.location.href;cpajax_post_title=document.title;(function(g){g(document).ready(function(n){d();k();h()});function h(){jQuery(".previous_page, .next_page").unbind("click");if(window.history.length>0){g(".previous_page").click(function(n){alert("back");if(event.preventDefault){event.preventDefault()}window.history.back();return false})}g(".next_page").click(function(n){alert("forward");if(event.preventDefault){event.preventDefault()}b("link");return false})}function d(){addComment.disableForm();cpajax_comment_form=g("#respond_wrapper").clone();g("form",cpajax_comment_form).attr("id","commentform-disabled")}function l(){var n;n=g("#wrapper .post").prop("id").split("-")[1];cpajax_infinite_comments[n]=g("#comments_sidebar .comments_container")}function f(n){g("#toc_list .menu-item").removeClass("current_page_item");g("#menu-item-"+n).addClass("current_page_item");g("#toc_list .menu-item").removeClass("current_page_ancestor");g("#menu-item-"+n).parents("li").addClass("current_page_ancestor")}function m(n){g("#toc_list .page_item").removeClass("current_page_item");g(".page-item-"+n).addClass("current_page_item");g("#toc_list .page_item").removeClass("current_page_ancestor");g(".page-item-"+n).parents("li").addClass("current_page_ancestor")}function c(){commentpress_setup_comment_headers();commentpress_setup_comment_headers();commentpress_enable_comment_permalink_clicks();commentpress_setup_para_permalink_icons();commentpress_setup_page_click_actions();commentpress_setup_para_links();cp_enable_context_clicks();commentpress_setup_context_headers();commentpress_setup_footnotes_compatibility();cpajax_reassign_comments();cpajax_initialise();cpajax_initialise_form();h();if(g.is_function_defined("bpgsites_init_elements")){bpgsites_init_elements()}}function k(){g("#wrapper").waypoint(function(n){if(n==="down"){b("waypoint")}else{}},{offset:"bottom-in-view"})}function b(o){var n;n=g("#main_wrapper .post:last-child").prop("id").split("-")[1];if(g.in_array(n,cpajax_infinite_posts)){return}g("#main_wrapper").after('<div class="cp_next_page_loading_wrapper" style="text-align: center"><img src="'+cpajax_spinner_url+'" id="cp_next_page_loading" alt="'+cpajax_lang[0]+'" /></div>');g.ajax({url:cpajax_ajax_url,type:"POST",dataType:"json",data:{action:"cpajax_load_next_page",current_post_id:n,nonce:cpajax_nonce},success:function(p){e(p,o);g(".cp_next_page_loading_wrapper").remove()}})}function e(r,t){var w,q,s,o,n,v,u,p;p=g("#main_wrapper .post:last-child").prop("id").split("-")[1];cpajax_post_url=r.url;cpajax_post_title=r.title;o=g("#main_wrapper .post:last-child").prop("class");w=g(".post",g(r.content));g("#main_wrapper").append(w.parents(".page_wrapper"));q=w.prop("id");if(typeof q!=="undefined"){cpajax_infinite_posts.push(p);s=q.split("-")[1];v=g(".comments_container",g(r.comments));u=cpajax_comment_form.clone();g("form",u).attr("id","commentform");g("#comment_post_ID",u).val(s);cpajax_infinite_comments=v.append(u);if(o!="post"){n=o.split("-")[1];if(o.match("wpcustom_menuid-")){f(n)}else{m(n)}}j(s);c()}g.waypoints("refresh");if(t=="link"){commentpress_scroll_page(w)}}function j(n){g("#post-"+n+".post").parent().parent().waypoint(function(o){if(o==="down"){i(g(this))}},{triggerOnce:true,offset:function(){var o;o=g("#header").height();if(cp_wp_adminbar=="y"){o+=cp_wp_adminbar_height}return o}})}function i(q){var s,p,n,r;s=g(".post",q);p=s.prop("id").split("-")[1];n=s.prop("class");if(n!="post"){menu_item_id=n.split("-")[1];if(n.match("wpcustom_menuid-")){f(menu_item_id)}else{m(menu_item_id)}g("#wrapper").waypoint("disable");var o=g("#main_wrapper");var t=q.prev();t.waypoint("destroy");q.waypoint("destroy");o.css("position","fixed");t.remove();document.title=cpajax_post_title;if(window.history){window.history.pushState({html:q.html(),page_title:cpajax_post_title,post_id:p},"",cpajax_post_url)}g(document).scrollTop(0);o.css("position","relative");g("#wrapper").waypoint("enable");comments=cpajax_infinite_comments;addComment.disableForm();g("#comments_sidebar .comments_container").replaceWith(comments);addComment.enableForm();c();g.waypoints("refresh")}}function a(){}window.onpopstate=function(n){if(n.state){console.log(n);document.title=n.state.page_title;g("#main_wrapper").prepend('<div class="page_wrapper cp_page_wrapper">'+n.state.html+"</div>")}}})(jQuery);