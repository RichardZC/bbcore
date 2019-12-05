$(function() {
   "use strict";

   $(".collapsible").collapsible({
      accordion: true,
      onOpenStart: function() {
         $(".collapsible > li.open").removeClass("open");
         setTimeout(function() {
            $("#slide-out > li.active > a")
               .parent()
               .addClass("open");
         }, 10);
      }
   });

   $("#slide-out > li.active > a")
      .parent()
      .addClass("open");

   if ($("li.active .collapsible-sub .collapsible").find("a.active").length > 0) {
      $("li.active .collapsible-sub .collapsible")
         .find("a.active")
         .closest("div.collapsible-body")
         .show();
      $("li.active .collapsible-sub .collapsible")
         .find("a.active")
         .closest("div.collapsible-body")
         .closest("li")
         .addClass("active");
   }

   var position;
   if (
      $(".sidenav-main li a.active")
         .parent("li.active")
         .parent("ul.collapsible-sub").length > 0
   ) {
      position = $(".sidenav-main li a.active")
         .parent("li.active")
         .parent("ul.collapsible-sub")
         .position();
   } else {
      position = $(".sidenav-main li a.active")
         .parent("li.active")
         .position();
   }
   setTimeout(function() {
      if (position !== undefined) {
         $(".sidenav-main ul")
            .stop()
            .animate({ scrollTop: position.top - 300 }, 300);
      }
   }, 300);

   $(".nav-collapsible .navbar-toggler").click(function() {
      if ($(".sidenav-main").hasClass("nav-expanded") && !$(".sidenav-main").hasClass("nav-lock")) {
         $(".sidenav-main").toggleClass("nav-expanded");
         $("#main").toggleClass("main-full");
      } else {
         $("#main").toggleClass("main-full");
      }
      if (
         $(this)
            .children()
            .text() == "radio_button_unchecked"
      ) {
         $(this)
            .children()
            .text("radio_button_checked");
         $(".sidenav-main").addClass("nav-lock");
         $(".navbar .nav-collapsible").addClass("sideNav-lock");
      } else {
         $(this)
            .children()
            .text("radio_button_unchecked");
         $(".sidenav-main").removeClass("nav-lock");
         $(".navbar .nav-collapsible").removeClass("sideNav-lock");
      }
   });

   $(".sidenav-main.nav-collapsible, .navbar .brand-sidebar").mouseenter(function() {
      if (!$(".sidenav-main.nav-collapsible").hasClass("nav-lock")) {
         $(".sidenav-main.nav-collapsible, .navbar .nav-collapsible")
            .addClass("nav-expanded")
            .removeClass("nav-collapsed");
         $("#slide-out > li.close > a")
            .parent()
            .addClass("open")
            .removeClass("close");

         setTimeout(function() {
            if ($(".collapsible .open").children().length > 1) {
               $(".collapsible").collapsible("open", $(".collapsible .open").index());
            }
         }, 100);
      }
   });

   $(".sidenav-main.nav-collapsible, .navbar .brand-sidebar").mouseleave(function() {
      if (!$(".sidenav-main.nav-collapsible").hasClass("nav-lock")) {
         var openLength = $(".collapsible .open").children().length;
         $(".sidenav-main.nav-collapsible, .navbar .nav-collapsible")
            .addClass("nav-collapsed")
            .removeClass("nav-expanded");
         $("#slide-out > li.open > a")
            .parent()
            .addClass("close")
            .removeClass("open");
         setTimeout(function() {
            if (openLength > 1) {
               $(".collapsible").collapsible("close", $(".collapsible .close").index());
            }
         }, 100);
      }
   });

   $(".header-search-input")
      .focus(function() {
         $(this)
            .parent("div")
            .addClass("header-search-wrapper-focus");
      })
      .blur(function() {
         $(this)
            .parent("div")
            .removeClass("header-search-wrapper-focus");
      });

   $(".search-button").click(function(e) {
      if ($(".search-sm").is(":hidden")) {
         $(".search-sm").show();
         $(".search-box-sm").focus();
      } else {
         $(".search-sm").hide();
         $(".search-box-sm").val("");
      }
   });
   $(".search-sm-close").click(function(e) {
      $(".search-sm").hide();
      $(".search-box-sm").val("");
   });

   if ($("#breadcrumbs-wrapper").attr("data-image")) {
      var imageUrl = $("#breadcrumbs-wrapper").attr("data-image");
      $("#breadcrumbs-wrapper").addClass("breadcrumbs-bg-image");
      $("#breadcrumbs-wrapper").css("background-image", "url(" + imageUrl + ")");
   }

   $("#task-card input:checkbox").each(function() {
      checkbox_check(this);
   });

   $("#task-card input:checkbox").change(function() {
      checkbox_check(this);
   });

   function checkbox_check(el) {
      if (!$(el).is(":checked")) {
         $(el)
            .next()
            .css("text-decoration", "none");
      } else {
         $(el)
            .next()
            .css("text-decoration", "line-through");
      }
   }

   $(".tabs").tabs();

   if ($("#tabs-swipe-demo").length) {
      $("#tabs-swipe-demo").tabs({
         swipeable: true
      });
   }

   $("select").formSelect();
   var indeterminateCheckbox = document.getElementById("indeterminate-checkbox");
   if (indeterminateCheckbox !== null) indeterminateCheckbox.indeterminate = true;

   $(".slider").slider({
      full_width: true
   });

   $(".dropdown-trigger").dropdown();

   $(".dropdown-button").dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false,
      hover: true,
      gutter: 0,
      coverTrigger: true,
      alignment: "left"    
   });

   $(".notification-button, .profile-button, .translation-button, .dropdown-settings, .dropdown-menu").dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false,
      hover: false,
      gutter: 0,
      coverTrigger: false,
      alignment: "right"
   });

   $(".fixed-action-btn").floatingActionButton();
   $(".fixed-action-btn.horizontal").floatingActionButton({
      direction: "left"
   });
   $(".fixed-action-btn.click-to-toggle").floatingActionButton({
      direction: "left",
      hoverEnabled: false
   });
   $(".fixed-action-btn.toolbar").floatingActionButton({
      toolbarEnabled: true
   });

   $(".tab-demo")
      .show()
      .tabs();
   $(".tab-demo-active")
      .show()
      .tabs();

   $(".scrollspy").scrollSpy();

   $(".tooltipped").tooltip({
      delay: 50
   });

   $(".sidenav").sidenav({
      edge: "left"
   });

   $(".slide-out-right-sidenav").sidenav({
      edge: "right"
   });

   $(".slide-out-right-sidenav-chat").sidenav({
      edge: "right"
   });

   $("select")
      .not(".disabled")
      .select();
   var leftnav = $(".page-topbar").height();
   var leftnavHeight = window.innerHeight - leftnav;
   var righttnav = $("#slide-out-right").height();

   if ($("#slide-out.leftside-navigation").length > 0) {
      if (!$("#slide-out.leftside-navigation").hasClass("native-scroll")) {
         var ps_leftside_nav = new PerfectScrollbar(".leftside-navigation", {
            wheelSpeed: 2,
            wheelPropagation: false,
            minScrollbarLength: 20
         });
      }
   }
   if ($(".slide-out-right-body").length > 0) {
      var ps_slideout_right = new PerfectScrollbar(".slide-out-right-body, .chat-body .collection", {
         suppressScrollX: true
      });
   }
   if ($(".chat-body .collection").length > 0) {
      var ps_slideout_chat = new PerfectScrollbar(".chat-body .collection", {
         suppressScrollX: true
      });
   }

   var chatScrollAuto = $("#right-sidebar-nav #slide-out-chat .chat-body .collection");
   if (chatScrollAuto.length > 0){
      chatScrollAuto[0].scrollTop = chatScrollAuto[0].scrollHeight;
   }

   function toggleFullScreen() {
      if (
         (document.fullScreenElement && document.fullScreenElement !== null) ||
         (!document.mozFullScreen && !document.webkitIsFullScreen)
      ) {
         if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
         } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
         } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
         }else if (document.documentElement.msRequestFullscreen) {
            if (document.msFullscreenElement) {
               document.msExitFullscreen();
            } else {
             document.documentElement.msRequestFullscreen(); 
            }
         }
      } else {
         if (document.cancelFullScreen) {
            document.cancelFullScreen();
         } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
         } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
         }
      }
   }

   $(".toggle-fullscreen").click(function() {
      toggleFullScreen();
   });

   function is_touch_device() {
      try {
         document.createEvent("TouchEvent");
         return true;
      } catch (e) {
         return false;
      }
   }
   if (is_touch_device()) {
      $("#nav-mobile").css({
         overflow: "auto"
      });
   }

resizetable();


});

$(window).on("resize", function() {
   resizetable();
});

function resizetable() {
   //if($(window).width() < 976){
   //   if($('.vertical-layout.vertical-gradient-menu .sidenav-dark .brand-logo').length > 0){
   //      $('.vertical-layout.vertical-gradient-menu .sidenav-dark .brand-logo img').attr('src','/app-assets/images/logo/materialize-logo-color.png');
   //   }
   //   if($('.vertical-layout.vertical-dark-menu .sidenav-dark .brand-logo').length > 0){
   //      $('.vertical-layout.vertical-dark-menu .sidenav-dark .brand-logo img').attr('src','/app-assets/images/logo/materialize-logo-color.png');
   //   }
   //   if($('.vertical-layout.vertical-modern-menu .sidenav-light .brand-logo').length > 0){
   //      $('.vertical-layout.vertical-modern-menu .sidenav-light .brand-logo img').attr('src','/app-assets/images/logo/materialize-logo.png');
   //   }
   //}
   //else{
   //   if($('.vertical-layout.vertical-gradient-menu .sidenav-dark .brand-logo').length > 0){
   //      $('.vertical-layout.vertical-gradient-menu .sidenav-dark .brand-logo img').attr('src','/app-assets/images/logo/materialize-logo.png');
   //   }
   //   if($('.vertical-layout.vertical-dark-menu .sidenav-dark .brand-logo').length > 0){
   //      $('.vertical-layout.vertical-dark-menu .sidenav-dark .brand-logo img').attr('src','/app-assets/images/logo/materialize-logo.png');
   //   }
   //   if($('.vertical-layout.vertical-modern-menu .sidenav-light .brand-logo').length > 0){
   //      $('.vertical-layout.vertical-modern-menu .sidenav-light .brand-logo img').attr('src','/app-assets/images/logo/materialize-logo-color.png');
   //   }
   //}
}
resizetable();

function slide_out_chat() {
   var message = $(".search").val();
   if (message != "") {
      var html =
         '<li class="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat"><div class="user-content speech-bubble-right">' +
         '<p class="medium-small">' +
         message +
         "</p>" +
         "</div></li>";
      $("#right-sidebar-nav #slide-out-chat .chat-body .collection").append(html);
      $(".search").val("");
      var charScroll = $("#right-sidebar-nav #slide-out-chat .chat-body .collection");
      if (charScroll.length > 0){
         charScroll[0].scrollTop = charScroll[0].scrollHeight;
      }
   }
}
