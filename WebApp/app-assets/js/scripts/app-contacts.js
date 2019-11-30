$(document).ready(function() {
   "use strict";   
   var calcDataTableHeight = function() {
      return $(window).height() - 425 + "px";
   };

   var table = $("#data-table-contact").DataTable({
      sScrollY: calcDataTableHeight(),
      scrollCollapse: true,
      paging: true,
      responsive: true,
      lengthMenu: [10],
      aoColumns: [
         {
            bSortable: false
         },
         {
            bSortable: false
         },
         null,
         null,
          {
              bSortable: false
          },
         {
            bSortable: false
         },
         {
            bSortable: false
         }
      ]
   });

   function filterGlobal() {
      table.search($("#global_filter").val(), $("#global_regex").prop("checked"), $("#global_smart").prop("checked")).draw();
   }

   function filterColumn(i) {
      table
         .column(i)
         .search(
            $("#col" + i + "_filter").val(),
            $("#col" + i + "_regex").prop("checked"),
            $("#col" + i + "_smart").prop("checked")
         )
         .draw();
   }

   $("input#global_filter").on("keyup click", function() {
      filterGlobal();
   });

   $("input.column_filter").on("keyup click", function() {
      filterColumn(
         $(this)
            .parents("tr")
            .attr("data-column")
      );
   });

   if ($("#sidebar-list").length > 0) {
      var ps_sidebar_list = new PerfectScrollbar("#sidebar-list", {
         theme: "dark"
      });
   }
   if ($(".app-page .dataTables_scrollBody").length > 0) {
      var ps_datatable_body = new PerfectScrollbar(".app-page .dataTables_scrollBody", {
         theme: "dark"
      });
   }

   $(".app-page .favorite i").on("click", function(e) {
      e.preventDefault();
      $(this).toggleClass("amber-text");
   });

   $("#contact-sidenav").sidenav({
      onOpenStart: function() {
         $("#sidebar-list").addClass("sidebar-show");
      },
      onCloseEnd: function() {
         $("#sidebar-list").removeClass("sidebar-show");
      }
   });

   $(document).on("click", ".app-page i.delete", function() {
      var $tr = $(this).closest("tr");
      if ($tr.prev().hasClass("parent")) {
         $tr.prev().remove();
      }
      $tr.remove();
   });

   $(".contact-sidenav li").on("click", function() {
      $("li").removeClass("active");
      $(this).addClass("active");
   });

   $(".modal").modal();

   if ($(window).width() > 900) {
      $("#contact-sidenav").removeClass("sidenav");
   }
});

$(".sidenav-trigger").on("click", function() {
   if ($(window).width() < 960) {
      $(".sidenav").sidenav("close");
      $(".app-sidebar").sidenav("close");
   }
});

function toggle(source) {
   checkboxes = document.getElementsByName("foo");
   for (var i = 0, n = checkboxes.length; i < n; i++) {
      checkboxes[i].checked = source.checked;
   }
}

$(window).on("resize", function() {
   resizetable();
   if ($(window).width() > 899) {
      $("#contact-sidenav").removeClass("sidenav");
   }

   if ($(window).width() < 900) {
      $("#contact-sidenav").addClass("sidenav");
   }
});

function resizetable() {
   $(".app-page .dataTables_scrollBody").css({
      maxHeight: $(window).height() - 420 + "px"
   });
}
resizetable();

if ($(window).width() < 900) {
   $(".sidebar-left.sidebar-fixed").removeClass("animate fadeUp animation-fast");
   $(".sidebar-left.sidebar-fixed .sidebar").removeClass("animate fadeUp");
}
