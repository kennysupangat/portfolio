// Header Animation On Load
$(document).ready(function() {
    $(".header_wrap").addClass("header_active");
    $(".menu_box").addClass("menu_line_active");
  });
  

// Menu Animation
$(document).ready(function(){
    $('.menu_box').on('click', function(){
      $(".menu_display").toggleClass("menu_active");
      $("html, body").toggleClass("no_scroll");
      $(".menu_line").toggleClass("line_active");
    });
    $('.sp_menu_click').on('click', function(){
      $(".menu_display").toggleClass("menu_active");
      $("html, body").toggleClass("no_scroll");
      $(".menu_line").toggleClass("line_active");
    });
});
