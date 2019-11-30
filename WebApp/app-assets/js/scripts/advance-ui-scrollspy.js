/*
 * Advance Ui Scrollspy 
 */

if ($("nav").length) {
    $(".toc-wrapper").pushpin({
        top: $("nav").height()
    });
} else if ($("#index-banner").length) {
    $(".toc-wrapper").pushpin({
        top: $("#index-banner").height()
    });
} else {
    $(".toc-wrapper").pushpin({
        top: 0
    });
}