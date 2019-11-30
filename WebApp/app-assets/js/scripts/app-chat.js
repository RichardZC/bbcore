$(document).ready(function() {
   "use strict";

   if ($(window).width() > 900) {
      $("#chat-sidenav").removeClass("sidenav");
   }

   if ($(".sidebar-chat").length > 0) {
      var ps_sidebar_chat = new PerfectScrollbar(".sidebar-chat", {
         theme: "dark"
      });
   }

   if ($(".chat-area").length > 0) {
      var ps_chat_area = new PerfectScrollbar(".chat-area", {
         theme: "dark"
      });
   }

   $(".sidenav-trigger").on("click", function() {
      if ($(window).width() < 960) {
         $(".sidenav").sidenav("close");
         $(".app-sidebar").sidenav("close");
      }
   });

   $("#chat-sidenav").sidenav({
      onOpenStart: function() {
         $("#sidebar-list").addClass("sidebar-show");
      },
      onCloseEnd: function() {
         $("#sidebar-list").removeClass("sidebar-show");
      }
   });

   $(".favorite i").on("click", function() {
      $(this).toggleClass("amber-text");
   });

  if ($(window).width() < 900) {
    $(".app-chat .sidebar-left.sidebar-fixed").removeClass("animate fadeUp animation-fast");
    $(".app-chat .sidebar-left.sidebar-fixed .sidebar").removeClass("animate fadeUp");
  }
  
  $(".chat-area").scrollTop($(".chat-area > .chats").height());

});

function enter_chat(source) {
   var message = $(".message").val();
   if(message != ""){
    var html = '<div class="chat-text">' + "<p>" + message + "</p>" + "</div>";
    $(".chat:last-child .chat-body").append(html);
    $(".message").val("");
    $(".chat-area").scrollTop($(".chat-area > .chats").height());
   }
}

$(window).on("resize", function() {
   if ($(window).width() > 899) {
      $("#chat-sidenav").removeClass("sidenav");
   }

  if ($(window).width() < 900) {
    $("#chat-sidenav").addClass("sidenav");
  }
});
