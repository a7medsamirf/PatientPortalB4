/*************************************

Template Name: E-Commerce | Personal Portfolio HTML5 Template
Author: Ahmed Samir
Author URI: https://www.facebook.com/a7med.samir.f
Description: Meruem | Personal Portfolio HTML5 Template
Version: 1.0

NOTE: This is active js file of the template.

****************************************/
/* 
document.body.style.webkitTransform =         // Chrome, Opera, Safari
  document.body.style.msTransform =           // IE 9
  document.body.style.transform = 'scale(0.85)'; */
  
/*global $ , alert, console*/
$('#white-theme').on('click', function () {
  $('footer').removeClass('unique-color-dark').addClass('white-color');
  $('.navbar').removeClass('unique-color-dark').addClass('white-color');
  $('.card-header').removeClass('unique-color-dark').addClass('white-color');
  $('.show').removeClass('unique-color-dark').addClass('white-color');
  $('.card').removeClass('unique-color-dark').addClass('white-color');
  $('.card').removeClass('unique-color-dark').addClass('white-color');
  $('.fixed-menu').removeClass('unique-color-dark').addClass('white-color');
  $('.sidebar-footer').removeClass('grey darken-3').addClass('white-color');
  $('.sidebar-content').removeClass('unique-color-dark').addClass('white-color');
  $('.list-group-item').removeClass('unique-color-dark').addClass('white-color');
  $('body').removeClass('grey darken-3').removeClass('white-text');
});

$('#dark-theme').on('click', function () {
  $('footer').removeClass('white-color').addClass('unique-color-dark');
  $('.navbar').removeClass('white-color').addClass('unique-color-dark');
  $('.card-header').removeClass('white-color').addClass('unique-color-dark');
  $('.show').removeClass('white-color').addClass('unique-color-dark');
  $('.card').removeClass('white-color').addClass('unique-color-dark');
  $('.fixed-menu').removeClass('white-color').addClass('unique-color-dark');
  $('.sidebar-footer').removeClass('white-color').addClass('grey darken-3');
  $('.sidebar-content').removeClass('white-color').addClass('unique-color-dark');
  $('.list-group-item').removeClass('white-color').addClass('unique-color-dark');
  $('.breadcrumb').addClass('white-color');
  $('body').addClass('white-text').addClass('grey darken-3');
});

// collapse button in panel
$(document).on('click', '.card .tools .t-collapse', function () {
  var el = $(this).parents(".card").children(".card-body");
  if ($(this).hasClass("fa-chevron-down")) {
    $(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
    el.slideUp(200);
  } else {
    $(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
    el.slideDown(200);
  }
});

//close button in panel 
$(document).on('click', '.card .tools .t-close', function () {
  $(this).parents(".card").parent().remove();
});

//file-upload
$(document).ready(function () {
$('.file-upload').file_upload();
});

// refresh button in panel
$('.box-refresh').on('click', function (br) {
  br.preventDefault();
  $("<div class='refresh-block'><span class='refresh-loader'><i class='fa fa-spinner fa-spin'></i></span></div>").appendTo($(this).parents('.tools').parents('.card-head').parents('.card'));
  setTimeout(function () {
    $('.refresh-block').remove();
  }, 1000);
});

// Material Select Initialization
$(document).ready(function () {
  $('.mdb-select').materialSelect();
});

// Data Picker Initialization
$(document).ready(function () {
$('.datepicker').pickadate();
});

jQuery(function ($) {

  // Dropdown menu
  $(".sidebar-dropdown > a").click(function () {
    $(".sidebar-submenu").slideUp(200);
    if ($(this).parent().hasClass("active")) {
      $(".sidebar-dropdown").removeClass("active");
      $(this).parent().removeClass("active");
    } else {
      $(".sidebar-dropdown").removeClass("active");
      $(this).next(".sidebar-submenu").slideDown(200);
      $(this).parent().addClass("active");
    }

  });

  //toggle sidebar
  $(document).ready(function () {
  $("#toggle-sidebar").click(function () {
    $(".page-wrapper").toggleClass("toggled");
  });
});

  //toggle sidebar overlay
  $("#overlay").click(function () {
    $(".page-wrapper").toggleClass("toggled");
  });

  //switch between themes 
  var themes = "dark-theme legacy-theme chiller-theme ice-theme cool-theme light-theme";
  $('[data-theme]').click(function () {
    $('[data-theme]').removeClass("selected");
    $(this).addClass("selected");
    $('.page-wrapper').removeClass(themes);
    $('.page-wrapper').addClass($(this).attr('data-theme'));
  });

  // switch between background images
  var bgs = "bg1 bg2 bg3 bg4 bg5";
  $('[data-bg]').click(function () {
    $('[data-bg]').removeClass("selected");
    $(this).addClass("selected");
    $('.page-wrapper').removeClass(bgs);
    $('.page-wrapper').addClass($(this).attr('data-bg'));
  });

  // toggle background image
  $("#toggle-bg").change(function (e) {
    e.preventDefault();
    $('.page-wrapper').toggleClass("sidebar-bg");
  });

  // toggle border radius
  $("#toggle-border-radius").change(function (e) {
    e.preventDefault();
    $('.page-wrapper').toggleClass("boder-radius-on");
  });

  //custom scroll bar is only used on desktop
  /*   if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      $(".sidebar-content").mCustomScrollbar({
        axis: "y",
        autoHideScrollbar: true,
        scrollInertia: 300
      });
      $(".sidebar-content").addClass("desktop");

    } */

});


var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function () {
  wrapperMenu.classList.toggle('open');
})


/* ==================================
      start loading 
===================================== */

$('.fixed-menu .show').on('click', function () {

  $(this).parent('.fixed-menu').toggleClass('is-visible');

  if ($(this).parent('.fixed-menu').hasClass('is-visible')) {

    $(this).parent('.fixed-menu').animate({

      right: 0

    }, 500);

    $('body').animate({

      paddingright: '280px'

    }, 50);
  } else {

    $(this).parent('.fixed-menu').animate({

      right: '-280px'

    }, 700);

    $('body').animate({

      paddingright: 0

    }, 500);

  }
});
/////// Change Colors
$('.switch-colors li').on('click', function () {
  $(':root').css('--maincolor', $(this).data('color'));
  $(':root').css('--mainbackground', $(this).data('background'));
});


$('[data-toggle="fullscreen"]').fullscreen();





// Material Design example
$(document).ready(function () {
  $('#dtBasicExample').DataTable();
  $('.dataTables_length').addClass('bs-select');
});


