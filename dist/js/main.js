"use strict";

$(document).ready(function () {
  // Menu Scroll
  var nav = $('.header-wrapp');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      nav.addClass("sticky"); //$('.header-wrapp').removeClass('header-fixed');
    } else {
      nav.removeClass("sticky"); //$('.header-wrapp').addClass('header-fixed');
    }
  }); // SHOW MAIN MENU

  $('.button-menu').click(function (e) {
    $(this).toggleClass('active');
    $('.box-main-menu').toggleClass('open');
    e.stopPropagation();
    e.preventDefault();
  });
  $('.close-menu, .box-main-menu, body').click(function () {
    $('.button-menu').removeClass('active');
    $('.box-main-menu').removeClass('open');
    return false;
  });
  $('.main-menu > li').click(function (e) {
    e.stopPropagation();
  }); // show block search

  $('.button-search').on('click', function (e) {
    $('.header-search').addClass('active');
  });
  $('.form-search .form-search__cancel').click(function () {
    $('.header-search').removeClass('active');
    return false;
  }); // slider product

  $('.slider-product').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    rows: 0,
    arrows: false,
    dots: true,
    asNavFor: '.product-nav'
  });
  $('.product-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    //vertical: true,
    //verticalSwiping: true,
    asNavFor: '.slider-product',
    rows: 0,
    centerMode: true,
    focusOnSelect: true
  }); // tabs product

  $(".tabs li").click(function () {
    $(".tabs li").removeClass("active");
    $(this).addClass("active");
    $(".tab-content").removeClass('open');
    var activeTab = $(this).find("a").attr("href");
    $(activeTab).addClass('open');
    return false;
  }); // slider history

  $('.history-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 0,
    //dots: true,
    asNavFor: '.history-sliderNav',
    responsive: [{
      breakpoint: 460,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $('.history-sliderNav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.history-slider',
    rows: 0,
    focusOnSelect: true
  }); // news slider

  $('.news-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 0
  });
});