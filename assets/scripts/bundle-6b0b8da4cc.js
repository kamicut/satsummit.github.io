!function(){function e(a,t,r){function o(n,u){if(!t[n]){if(!a[n]){var l="function"==typeof require&&require;if(!u&&l)return l(n,!0);if(i)return i(n,!0);var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}var f=t[n]={exports:{}};a[n][0].call(f.exports,function(e){var t=a[n][1][e];return o(t||e)},f,f.exports,e,a,t,r)}return t[n].exports}for(var i="function"==typeof require&&require,n=0;n<r.length;n++)o(r[n]);return o}return e}()({"/home/circleci/satsummit/source/assets/scripts/main.js":[function(e,a,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=e("jquery"),i=r(o),n=e("mapbox-gl"),u=r(n),l=(0,i.default)('[data-hook="global-menu:wrapper"]');(0,i.default)('[data-hook="global-menu:trigger"]').on("click",function(e){e.preventDefault(),l.toggleClass("menu-wrapper--open")}),(0,i.default)("#global-menu a").on("click",function(e){l.removeClass("menu-wrapper--open");var a=(0,i.default)(this).attr("href").match(/(#.+)/);a=a[1]||"",(0,i.default)("html, body").stop().animate({scrollTop:(0,i.default)(a).offset().top},750),e.preventDefault()}),(0,i.default)(window).scroll(function(){if((0,i.default)('[data-hook="nav-offset"]').length){var e=(0,i.default)('[data-hook="page-header"]');e.offset().top>(0,i.default)('[data-hook="nav-offset"]').offset().top-e.outerHeight()?(e.addClass("page__header--light"),e.removeClass("page__header--dark")):(e.addClass("page__header--dark"),e.removeClass("page__header--light"))}}),u.default.accessToken="pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q";var s=document.querySelector("#map");if(s){new u.default.Map({container:s,style:"mapbox://styles/devseed/cjjrefy0x1f712ss5spif25ve",center:[-77.025961,38.8918],zoom:14.3}).scrollZoom.disable()}var f=function(){var e=(0,i.default)(".inpage__body"),a=e.outerHeight(),t=(0,i.default)(".page__footer").outerHeight(),r=(0,i.default)(".inpage__header").outerHeight(),o=(0,i.default)(window).height();e.data("originalSize")||e.data("originalSize",a);var n=o-r-t;n=Math.max(n,e.data("originalSize")),e.css("min-height",n)};(0,i.default)(window).resize(f),f()},{jquery:"jquery","mapbox-gl":"mapbox-gl"}]},{},["/home/circleci/satsummit/source/assets/scripts/main.js"]);