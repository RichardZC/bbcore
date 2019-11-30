/*
 * DataTables - Tables
 */

$(document).ready(function() {
   "use strict";

   $(".modal").modal();
   $(".datepicker").datepicker();
   $("ul.todo-collection").sortable({
      group: "no-drop",
      handle: "i.icon-move"
   });

   $(".todo-sidenav li").click(function() {
      $("li").removeClass("active");
      $(this).addClass("active");
   });
   if ($(window).width() > 900) {
      $("#todo-sidenav").removeClass("sidenav");
   }
   $('.app-todo i[type="button"]').click(function(e) {
      $(this)
         .closest("tr")
         .remove();
   });

   $(".app-todo .favorite i").on("click", function() {
      $(this).toggleClass("amber-text");
   });

   $(".app-todo .delete-tasks").on("click", function() {
      $(".collection-item")
         .find("input:checked")
         .closest("li")
         .remove();
   });

   $(".app-todo .delete-task").on("click", function() {
      $(this)
         .closest("li")
         .remove();
   });
   $(".sidenav-trigger").on("click", function() {
      if ($(window).width() < 960) {
         $(".sidenav").sidenav("close");
         $(".app-sidebar").sidenav("close");
      }
   });
   $("#todo-sidenav").sidenav({
      onOpenStart: function() {
         $("#sidebar-list").addClass("sidebar-show");
      },
      onCloseStart: function() {
         $("#sidebar-list").removeClass("sidebar-show");
      }
   });
   if ($("#sidebar-list").length > 0) {
      var ps_sidebar_list = new PerfectScrollbar("#sidebar-list", {
         theme: "dark"
      });
   }
   if ($(".app-todo .collection").length > 0) {
      var ps_todo_collection = new PerfectScrollbar(".app-todo .collection", {
         theme: "dark"
      });
  }
  if ($(window).width() < 900) {
    $(".sidebar-left.sidebar-fixed").removeClass("animate fadeLeft");
    $(".sidebar-left.sidebar-fixed .sidebar").removeClass("animate fadeLeft");
  }

  $('.todo-collection input[name="foo"]').on('click', function(){
    var parentCls = $(this).closest('.collection-item');
    if($(this).is(':checked')){
      $(parentCls).find('.list-content .list-title').css('textDecoration', 'line-through');
      $(parentCls).find('.list-content .list-desc').css('textDecoration', 'line-through');
    }
    else{
      $(parentCls).find('.list-content .list-title').css('textDecoration', 'none');
      $(parentCls).find('.list-content .list-desc').css('textDecoration', 'none');
    }
  });
  
});
function toggle(source) {
   checkboxes = document.getElementsByName("foo");
   for (var i = 0, n = checkboxes.length; i < n; i++) {
      checkboxes[i].checked = source.checked;
      var parentCls = $(checkboxes[i]).closest(".collection-item");
      if (checkboxes[i].checked) {
         $(parentCls)
            .find(".list-content .list-title")
            .css("textDecoration", "line-through");
         $(parentCls)
            .find(".list-content .list-desc")
            .css("textDecoration", "line-through");
      } else {
         $(parentCls)
            .find(".list-content .list-title")
            .css("textDecoration", "none");
         $(parentCls)
            .find(".list-content .list-desc")
            .css("textDecoration", "none");
      }
   }
}

$(window).on('resize', function() {
  resizetable();

   if ($(window).width() > 899) {
      $("#todo-sidenav").removeClass("sidenav");
   }

   if ($(window).width() < 900) {
      $("#todo-sidenav").addClass("sidenav");
   }
});
function resizetable() {
   $(".app-todo .collection").css({
      maxHeight: $(window).height() - 380 + "px"
   });
}
resizetable();
