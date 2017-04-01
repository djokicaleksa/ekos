/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(9);
	__webpack_require__(12);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(8);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	window.initMap = function () {
	
	  var arena = { lat: 44.8141372, lng: 20.4192089 };
	  var pionir = { lat: 44.8147693, lng: 20.4832631 };
	  var center = { lat: 44.8089145, lng: 20.4720783 };
	
	  var map;
	
	  map = new google.maps.Map(document.getElementById('map'), {
	    center: center,
	    zoom: 13,
	    scrollwheel: false,
	    styles: styles,
	    disableDefaultUI: true
	  });
	
	  var image = 'assets/logos/pin.png';
	
	  var marker1 = new google.maps.Marker({
	    position: arena,
	    map: map,
	    icon: image,
	    title: 'Beogradska Kombank Arena'
	  });
	
	  var marker2 = new google.maps.Marker({
	    position: pionir,
	    map: map,
	    icon: image,
	    title: 'Hala Pionir'
	  });
	
	  var content = '<div id="map-info-box"><p>Hala</br>Pionir</p></div>';
	
	  var infowindow = new google.maps.InfoWindow({
	    content: content
	  });
	
	  google.maps.event.addListener(marker1, 'mouseover', function () {
	    infowindow.open(map, marker1);
	  });
	
	  google.maps.event.addListener(marker1, 'mouseout', function () {
	    infowindow.close(map, marker1);
	  });
	
	  google.maps.event.addListener(marker2, 'mouseover', function () {
	    infowindow.open(map, marker2);
	  });
	
	  google.maps.event.addListener(marker2, 'mouseout', function () {
	    infowindow.close(map, marker2);
	  });
	
	  google.maps.event.addListener(infowindow, 'domready', function () {
	
	    // Reference to the DIV which receives the contents of the infowindow using jQuery
	    var iwOuter = $('.gm-style-iw');
	
	    var iwCloseBtn = iwOuter.next();
	
	    // Apply the desired effect to the close button
	    iwCloseBtn.css({
	      display: 'none'
	    });
	  });
	};
	
	var styles = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Loader
	 * -----
	 * Adds 'data-ready' attribute to body
	 */
	
	var body = document.querySelector('body');
	
	setTimeout(function () {
	  body.setAttribute('data-ready', true);
	}, 100);

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Copyright Year
	 */
	
	var element = document.querySelector('.year'),
	    year = new Date().getFullYear();
	
	element.innerHTML = ' ' + year + ' ';

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Parallax Scroll
	 */
	
	var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame;
	
	function parallaxScroll() {
	
	  var windowOffset = document.body.scrollTop;
	
	  var lastPosition = -1;
	  if (lastPosition == windowOffset) {
	
	    requestAnimationFrame(parallaxScroll);
	    return false;
	  } else lastPosition = windowOffset;
	
	  var parallaxElements = document.querySelectorAll('[data-parallax]');
	
	  var i;
	  for (i = 0; i < parallaxElements.length; i++) {
	
	    var el = parallaxElements[i];
	    var parent = el.parentNode;
	
	    var parentHeight = parent.getBoundingClientRect().height;
	    var parentOffset = parent.getBoundingClientRect().top + parentHeight / 2;
	    var finalOffset = window.innerHeight / 2 - parentOffset;
	    var translate = finalOffset * el.getAttribute('data-parallax');
	
	    el.style.transform = 'translate3d(0,' + translate.toFixed(1) + 'px,0)';
	  }
	
	  requestAnimationFrame(parallaxScroll);
	}
	
	parallaxScroll();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(6);
	
	$('.slideshow').slick();
	
	$('.multipleItems').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  dots: true,
	  arrows: false,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  fade: false,
	  cssEase: 'linear',
	  responsive: [{
	    breakpoint: 768,
	    settings: {
	      slidesToShow: 2,
	      slidesToScroll: 2
	    }
	  }, {
	    breakpoint: 480,
	    settings: {
	      slidesToShow: 1,
	      slidesToScroll: 1
	    }
	  }]
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	     _ _      _       _
	 ___| (_) ___| | __  (_)___
	/ __| | |/ __| |/ /  | / __|
	\__ \ | | (__|   < _ | \__ \
	|___/_|_|\___|_|\_(_)/ |___/
	                   |__/
	
	 Version: 1.6.0
	  Author: Ken Wheeler
	 Website: http://kenwheeler.github.io
	    Docs: http://kenwheeler.github.io/slick
	    Repo: http://github.com/kenwheeler/slick
	  Issues: http://github.com/kenwheeler/slick/issues
	
	 */
	/* global window, document, define, jQuery, setInterval, clearInterval */
	(function(factory) {
	    'use strict';
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== 'undefined') {
	        module.exports = factory(require('jquery'));
	    } else {
	        factory(jQuery);
	    }
	
	}(function($) {
	    'use strict';
	    var Slick = window.Slick || {};
	
	    Slick = (function() {
	
	        var instanceUid = 0;
	
	        function Slick(element, settings) {
	
	            var _ = this, dataSettings;
	
	            _.defaults = {
	                accessibility: true,
	                adaptiveHeight: false,
	                appendArrows: $(element),
	                appendDots: $(element),
	                arrows: true,
	                asNavFor: null,
	                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
	                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
	                autoplay: false,
	                autoplaySpeed: 3000,
	                centerMode: false,
	                centerPadding: '50px',
	                cssEase: 'ease',
	                customPaging: function(slider, i) {
	                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
	                },
	                dots: false,
	                dotsClass: 'slick-dots',
	                draggable: true,
	                easing: 'linear',
	                edgeFriction: 0.35,
	                fade: false,
	                focusOnSelect: false,
	                infinite: true,
	                initialSlide: 0,
	                lazyLoad: 'ondemand',
	                mobileFirst: false,
	                pauseOnHover: true,
	                pauseOnFocus: true,
	                pauseOnDotsHover: false,
	                respondTo: 'window',
	                responsive: null,
	                rows: 1,
	                rtl: false,
	                slide: '',
	                slidesPerRow: 1,
	                slidesToShow: 1,
	                slidesToScroll: 1,
	                speed: 500,
	                swipe: true,
	                swipeToSlide: false,
	                touchMove: true,
	                touchThreshold: 5,
	                useCSS: true,
	                useTransform: true,
	                variableWidth: false,
	                vertical: false,
	                verticalSwiping: false,
	                waitForAnimate: true,
	                zIndex: 1000
	            };
	
	            _.initials = {
	                animating: false,
	                dragging: false,
	                autoPlayTimer: null,
	                currentDirection: 0,
	                currentLeft: null,
	                currentSlide: 0,
	                direction: 1,
	                $dots: null,
	                listWidth: null,
	                listHeight: null,
	                loadIndex: 0,
	                $nextArrow: null,
	                $prevArrow: null,
	                slideCount: null,
	                slideWidth: null,
	                $slideTrack: null,
	                $slides: null,
	                sliding: false,
	                slideOffset: 0,
	                swipeLeft: null,
	                $list: null,
	                touchObject: {},
	                transformsEnabled: false,
	                unslicked: false
	            };
	
	            $.extend(_, _.initials);
	
	            _.activeBreakpoint = null;
	            _.animType = null;
	            _.animProp = null;
	            _.breakpoints = [];
	            _.breakpointSettings = [];
	            _.cssTransitions = false;
	            _.focussed = false;
	            _.interrupted = false;
	            _.hidden = 'hidden';
	            _.paused = true;
	            _.positionProp = null;
	            _.respondTo = null;
	            _.rowCount = 1;
	            _.shouldClick = true;
	            _.$slider = $(element);
	            _.$slidesCache = null;
	            _.transformType = null;
	            _.transitionType = null;
	            _.visibilityChange = 'visibilitychange';
	            _.windowWidth = 0;
	            _.windowTimer = null;
	
	            dataSettings = $(element).data('slick') || {};
	
	            _.options = $.extend({}, _.defaults, settings, dataSettings);
	
	            _.currentSlide = _.options.initialSlide;
	
	            _.originalSettings = _.options;
	
	            if (typeof document.mozHidden !== 'undefined') {
	                _.hidden = 'mozHidden';
	                _.visibilityChange = 'mozvisibilitychange';
	            } else if (typeof document.webkitHidden !== 'undefined') {
	                _.hidden = 'webkitHidden';
	                _.visibilityChange = 'webkitvisibilitychange';
	            }
	
	            _.autoPlay = $.proxy(_.autoPlay, _);
	            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
	            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
	            _.changeSlide = $.proxy(_.changeSlide, _);
	            _.clickHandler = $.proxy(_.clickHandler, _);
	            _.selectHandler = $.proxy(_.selectHandler, _);
	            _.setPosition = $.proxy(_.setPosition, _);
	            _.swipeHandler = $.proxy(_.swipeHandler, _);
	            _.dragHandler = $.proxy(_.dragHandler, _);
	            _.keyHandler = $.proxy(_.keyHandler, _);
	
	            _.instanceUid = instanceUid++;
	
	            // A simple way to check for HTML strings
	            // Strict HTML recognition (must start with <)
	            // Extracted from jQuery v1.11 source
	            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
	
	
	            _.registerBreakpoints();
	            _.init(true);
	
	        }
	
	        return Slick;
	
	    }());
	
	    Slick.prototype.activateADA = function() {
	        var _ = this;
	
	        _.$slideTrack.find('.slick-active').attr({
	            'aria-hidden': 'false'
	        }).find('a, input, button, select').attr({
	            'tabindex': '0'
	        });
	
	    };
	
	    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {
	
	        var _ = this;
	
	        if (typeof(index) === 'boolean') {
	            addBefore = index;
	            index = null;
	        } else if (index < 0 || (index >= _.slideCount)) {
	            return false;
	        }
	
	        _.unload();
	
	        if (typeof(index) === 'number') {
	            if (index === 0 && _.$slides.length === 0) {
	                $(markup).appendTo(_.$slideTrack);
	            } else if (addBefore) {
	                $(markup).insertBefore(_.$slides.eq(index));
	            } else {
	                $(markup).insertAfter(_.$slides.eq(index));
	            }
	        } else {
	            if (addBefore === true) {
	                $(markup).prependTo(_.$slideTrack);
	            } else {
	                $(markup).appendTo(_.$slideTrack);
	            }
	        }
	
	        _.$slides = _.$slideTrack.children(this.options.slide);
	
	        _.$slideTrack.children(this.options.slide).detach();
	
	        _.$slideTrack.append(_.$slides);
	
	        _.$slides.each(function(index, element) {
	            $(element).attr('data-slick-index', index);
	        });
	
	        _.$slidesCache = _.$slides;
	
	        _.reinit();
	
	    };
	
	    Slick.prototype.animateHeight = function() {
	        var _ = this;
	        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
	            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
	            _.$list.animate({
	                height: targetHeight
	            }, _.options.speed);
	        }
	    };
	
	    Slick.prototype.animateSlide = function(targetLeft, callback) {
	
	        var animProps = {},
	            _ = this;
	
	        _.animateHeight();
	
	        if (_.options.rtl === true && _.options.vertical === false) {
	            targetLeft = -targetLeft;
	        }
	        if (_.transformsEnabled === false) {
	            if (_.options.vertical === false) {
	                _.$slideTrack.animate({
	                    left: targetLeft
	                }, _.options.speed, _.options.easing, callback);
	            } else {
	                _.$slideTrack.animate({
	                    top: targetLeft
	                }, _.options.speed, _.options.easing, callback);
	            }
	
	        } else {
	
	            if (_.cssTransitions === false) {
	                if (_.options.rtl === true) {
	                    _.currentLeft = -(_.currentLeft);
	                }
	                $({
	                    animStart: _.currentLeft
	                }).animate({
	                    animStart: targetLeft
	                }, {
	                    duration: _.options.speed,
	                    easing: _.options.easing,
	                    step: function(now) {
	                        now = Math.ceil(now);
	                        if (_.options.vertical === false) {
	                            animProps[_.animType] = 'translate(' +
	                                now + 'px, 0px)';
	                            _.$slideTrack.css(animProps);
	                        } else {
	                            animProps[_.animType] = 'translate(0px,' +
	                                now + 'px)';
	                            _.$slideTrack.css(animProps);
	                        }
	                    },
	                    complete: function() {
	                        if (callback) {
	                            callback.call();
	                        }
	                    }
	                });
	
	            } else {
	
	                _.applyTransition();
	                targetLeft = Math.ceil(targetLeft);
	
	                if (_.options.vertical === false) {
	                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
	                } else {
	                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
	                }
	                _.$slideTrack.css(animProps);
	
	                if (callback) {
	                    setTimeout(function() {
	
	                        _.disableTransition();
	
	                        callback.call();
	                    }, _.options.speed);
	                }
	
	            }
	
	        }
	
	    };
	
	    Slick.prototype.getNavTarget = function() {
	
	        var _ = this,
	            asNavFor = _.options.asNavFor;
	
	        if ( asNavFor && asNavFor !== null ) {
	            asNavFor = $(asNavFor).not(_.$slider);
	        }
	
	        return asNavFor;
	
	    };
	
	    Slick.prototype.asNavFor = function(index) {
	
	        var _ = this,
	            asNavFor = _.getNavTarget();
	
	        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
	            asNavFor.each(function() {
	                var target = $(this).slick('getSlick');
	                if(!target.unslicked) {
	                    target.slideHandler(index, true);
	                }
	            });
	        }
	
	    };
	
	    Slick.prototype.applyTransition = function(slide) {
	
	        var _ = this,
	            transition = {};
	
	        if (_.options.fade === false) {
	            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
	        } else {
	            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
	        }
	
	        if (_.options.fade === false) {
	            _.$slideTrack.css(transition);
	        } else {
	            _.$slides.eq(slide).css(transition);
	        }
	
	    };
	
	    Slick.prototype.autoPlay = function() {
	
	        var _ = this;
	
	        _.autoPlayClear();
	
	        if ( _.slideCount > _.options.slidesToShow ) {
	            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
	        }
	
	    };
	
	    Slick.prototype.autoPlayClear = function() {
	
	        var _ = this;
	
	        if (_.autoPlayTimer) {
	            clearInterval(_.autoPlayTimer);
	        }
	
	    };
	
	    Slick.prototype.autoPlayIterator = function() {
	
	        var _ = this,
	            slideTo = _.currentSlide + _.options.slidesToScroll;
	
	        if ( !_.paused && !_.interrupted && !_.focussed ) {
	
	            if ( _.options.infinite === false ) {
	
	                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
	                    _.direction = 0;
	                }
	
	                else if ( _.direction === 0 ) {
	
	                    slideTo = _.currentSlide - _.options.slidesToScroll;
	
	                    if ( _.currentSlide - 1 === 0 ) {
	                        _.direction = 1;
	                    }
	
	                }
	
	            }
	
	            _.slideHandler( slideTo );
	
	        }
	
	    };
	
	    Slick.prototype.buildArrows = function() {
	
	        var _ = this;
	
	        if (_.options.arrows === true ) {
	
	            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
	            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');
	
	            if( _.slideCount > _.options.slidesToShow ) {
	
	                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
	                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
	
	                if (_.htmlExpr.test(_.options.prevArrow)) {
	                    _.$prevArrow.prependTo(_.options.appendArrows);
	                }
	
	                if (_.htmlExpr.test(_.options.nextArrow)) {
	                    _.$nextArrow.appendTo(_.options.appendArrows);
	                }
	
	                if (_.options.infinite !== true) {
	                    _.$prevArrow
	                        .addClass('slick-disabled')
	                        .attr('aria-disabled', 'true');
	                }
	
	            } else {
	
	                _.$prevArrow.add( _.$nextArrow )
	
	                    .addClass('slick-hidden')
	                    .attr({
	                        'aria-disabled': 'true',
	                        'tabindex': '-1'
	                    });
	
	            }
	
	        }
	
	    };
	
	    Slick.prototype.buildDots = function() {
	
	        var _ = this,
	            i, dot;
	
	        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
	
	            _.$slider.addClass('slick-dotted');
	
	            dot = $('<ul />').addClass(_.options.dotsClass);
	
	            for (i = 0; i <= _.getDotCount(); i += 1) {
	                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
	            }
	
	            _.$dots = dot.appendTo(_.options.appendDots);
	
	            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');
	
	        }
	
	    };
	
	    Slick.prototype.buildOut = function() {
	
	        var _ = this;
	
	        _.$slides =
	            _.$slider
	                .children( _.options.slide + ':not(.slick-cloned)')
	                .addClass('slick-slide');
	
	        _.slideCount = _.$slides.length;
	
	        _.$slides.each(function(index, element) {
	            $(element)
	                .attr('data-slick-index', index)
	                .data('originalStyling', $(element).attr('style') || '');
	        });
	
	        _.$slider.addClass('slick-slider');
	
	        _.$slideTrack = (_.slideCount === 0) ?
	            $('<div class="slick-track"/>').appendTo(_.$slider) :
	            _.$slides.wrapAll('<div class="slick-track"/>').parent();
	
	        _.$list = _.$slideTrack.wrap(
	            '<div aria-live="polite" class="slick-list"/>').parent();
	        _.$slideTrack.css('opacity', 0);
	
	        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
	            _.options.slidesToScroll = 1;
	        }
	
	        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');
	
	        _.setupInfinite();
	
	        _.buildArrows();
	
	        _.buildDots();
	
	        _.updateDots();
	
	
	        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
	
	        if (_.options.draggable === true) {
	            _.$list.addClass('draggable');
	        }
	
	    };
	
	    Slick.prototype.buildRows = function() {
	
	        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;
	
	        newSlides = document.createDocumentFragment();
	        originalSlides = _.$slider.children();
	
	        if(_.options.rows > 1) {
	
	            slidesPerSection = _.options.slidesPerRow * _.options.rows;
	            numOfSlides = Math.ceil(
	                originalSlides.length / slidesPerSection
	            );
	
	            for(a = 0; a < numOfSlides; a++){
	                var slide = document.createElement('div');
	                for(b = 0; b < _.options.rows; b++) {
	                    var row = document.createElement('div');
	                    for(c = 0; c < _.options.slidesPerRow; c++) {
	                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
	                        if (originalSlides.get(target)) {
	                            row.appendChild(originalSlides.get(target));
	                        }
	                    }
	                    slide.appendChild(row);
	                }
	                newSlides.appendChild(slide);
	            }
	
	            _.$slider.empty().append(newSlides);
	            _.$slider.children().children().children()
	                .css({
	                    'width':(100 / _.options.slidesPerRow) + '%',
	                    'display': 'inline-block'
	                });
	
	        }
	
	    };
	
	    Slick.prototype.checkResponsive = function(initial, forceUpdate) {
	
	        var _ = this,
	            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
	        var sliderWidth = _.$slider.width();
	        var windowWidth = window.innerWidth || $(window).width();
	
	        if (_.respondTo === 'window') {
	            respondToWidth = windowWidth;
	        } else if (_.respondTo === 'slider') {
	            respondToWidth = sliderWidth;
	        } else if (_.respondTo === 'min') {
	            respondToWidth = Math.min(windowWidth, sliderWidth);
	        }
	
	        if ( _.options.responsive &&
	            _.options.responsive.length &&
	            _.options.responsive !== null) {
	
	            targetBreakpoint = null;
	
	            for (breakpoint in _.breakpoints) {
	                if (_.breakpoints.hasOwnProperty(breakpoint)) {
	                    if (_.originalSettings.mobileFirst === false) {
	                        if (respondToWidth < _.breakpoints[breakpoint]) {
	                            targetBreakpoint = _.breakpoints[breakpoint];
	                        }
	                    } else {
	                        if (respondToWidth > _.breakpoints[breakpoint]) {
	                            targetBreakpoint = _.breakpoints[breakpoint];
	                        }
	                    }
	                }
	            }
	
	            if (targetBreakpoint !== null) {
	                if (_.activeBreakpoint !== null) {
	                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
	                        _.activeBreakpoint =
	                            targetBreakpoint;
	                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
	                            _.unslick(targetBreakpoint);
	                        } else {
	                            _.options = $.extend({}, _.originalSettings,
	                                _.breakpointSettings[
	                                    targetBreakpoint]);
	                            if (initial === true) {
	                                _.currentSlide = _.options.initialSlide;
	                            }
	                            _.refresh(initial);
	                        }
	                        triggerBreakpoint = targetBreakpoint;
	                    }
	                } else {
	                    _.activeBreakpoint = targetBreakpoint;
	                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
	                        _.unslick(targetBreakpoint);
	                    } else {
	                        _.options = $.extend({}, _.originalSettings,
	                            _.breakpointSettings[
	                                targetBreakpoint]);
	                        if (initial === true) {
	                            _.currentSlide = _.options.initialSlide;
	                        }
	                        _.refresh(initial);
	                    }
	                    triggerBreakpoint = targetBreakpoint;
	                }
	            } else {
	                if (_.activeBreakpoint !== null) {
	                    _.activeBreakpoint = null;
	                    _.options = _.originalSettings;
	                    if (initial === true) {
	                        _.currentSlide = _.options.initialSlide;
	                    }
	                    _.refresh(initial);
	                    triggerBreakpoint = targetBreakpoint;
	                }
	            }
	
	            // only trigger breakpoints during an actual break. not on initialize.
	            if( !initial && triggerBreakpoint !== false ) {
	                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
	            }
	        }
	
	    };
	
	    Slick.prototype.changeSlide = function(event, dontAnimate) {
	
	        var _ = this,
	            $target = $(event.currentTarget),
	            indexOffset, slideOffset, unevenOffset;
	
	        // If target is a link, prevent default action.
	        if($target.is('a')) {
	            event.preventDefault();
	        }
	
	        // If target is not the <li> element (ie: a child), find the <li>.
	        if(!$target.is('li')) {
	            $target = $target.closest('li');
	        }
	
	        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
	        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
	
	        switch (event.data.message) {
	
	            case 'previous':
	                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
	                if (_.slideCount > _.options.slidesToShow) {
	                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
	                }
	                break;
	
	            case 'next':
	                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
	                if (_.slideCount > _.options.slidesToShow) {
	                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
	                }
	                break;
	
	            case 'index':
	                var index = event.data.index === 0 ? 0 :
	                    event.data.index || $target.index() * _.options.slidesToScroll;
	
	                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
	                $target.children().trigger('focus');
	                break;
	
	            default:
	                return;
	        }
	
	    };
	
	    Slick.prototype.checkNavigable = function(index) {
	
	        var _ = this,
	            navigables, prevNavigable;
	
	        navigables = _.getNavigableIndexes();
	        prevNavigable = 0;
	        if (index > navigables[navigables.length - 1]) {
	            index = navigables[navigables.length - 1];
	        } else {
	            for (var n in navigables) {
	                if (index < navigables[n]) {
	                    index = prevNavigable;
	                    break;
	                }
	                prevNavigable = navigables[n];
	            }
	        }
	
	        return index;
	    };
	
	    Slick.prototype.cleanUpEvents = function() {
	
	        var _ = this;
	
	        if (_.options.dots && _.$dots !== null) {
	
	            $('li', _.$dots)
	                .off('click.slick', _.changeSlide)
	                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
	                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));
	
	        }
	
	        _.$slider.off('focus.slick blur.slick');
	
	        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
	            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
	            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
	        }
	
	        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
	        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
	        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
	        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);
	
	        _.$list.off('click.slick', _.clickHandler);
	
	        $(document).off(_.visibilityChange, _.visibility);
	
	        _.cleanUpSlideEvents();
	
	        if (_.options.accessibility === true) {
	            _.$list.off('keydown.slick', _.keyHandler);
	        }
	
	        if (_.options.focusOnSelect === true) {
	            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
	        }
	
	        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
	
	        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
	
	        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
	
	        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
	        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
	
	    };
	
	    Slick.prototype.cleanUpSlideEvents = function() {
	
	        var _ = this;
	
	        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
	        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
	
	    };
	
	    Slick.prototype.cleanUpRows = function() {
	
	        var _ = this, originalSlides;
	
	        if(_.options.rows > 1) {
	            originalSlides = _.$slides.children().children();
	            originalSlides.removeAttr('style');
	            _.$slider.empty().append(originalSlides);
	        }
	
	    };
	
	    Slick.prototype.clickHandler = function(event) {
	
	        var _ = this;
	
	        if (_.shouldClick === false) {
	            event.stopImmediatePropagation();
	            event.stopPropagation();
	            event.preventDefault();
	        }
	
	    };
	
	    Slick.prototype.destroy = function(refresh) {
	
	        var _ = this;
	
	        _.autoPlayClear();
	
	        _.touchObject = {};
	
	        _.cleanUpEvents();
	
	        $('.slick-cloned', _.$slider).detach();
	
	        if (_.$dots) {
	            _.$dots.remove();
	        }
	
	
	        if ( _.$prevArrow && _.$prevArrow.length ) {
	
	            _.$prevArrow
	                .removeClass('slick-disabled slick-arrow slick-hidden')
	                .removeAttr('aria-hidden aria-disabled tabindex')
	                .css('display','');
	
	            if ( _.htmlExpr.test( _.options.prevArrow )) {
	                _.$prevArrow.remove();
	            }
	        }
	
	        if ( _.$nextArrow && _.$nextArrow.length ) {
	
	            _.$nextArrow
	                .removeClass('slick-disabled slick-arrow slick-hidden')
	                .removeAttr('aria-hidden aria-disabled tabindex')
	                .css('display','');
	
	            if ( _.htmlExpr.test( _.options.nextArrow )) {
	                _.$nextArrow.remove();
	            }
	
	        }
	
	
	        if (_.$slides) {
	
	            _.$slides
	                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
	                .removeAttr('aria-hidden')
	                .removeAttr('data-slick-index')
	                .each(function(){
	                    $(this).attr('style', $(this).data('originalStyling'));
	                });
	
	            _.$slideTrack.children(this.options.slide).detach();
	
	            _.$slideTrack.detach();
	
	            _.$list.detach();
	
	            _.$slider.append(_.$slides);
	        }
	
	        _.cleanUpRows();
	
	        _.$slider.removeClass('slick-slider');
	        _.$slider.removeClass('slick-initialized');
	        _.$slider.removeClass('slick-dotted');
	
	        _.unslicked = true;
	
	        if(!refresh) {
	            _.$slider.trigger('destroy', [_]);
	        }
	
	    };
	
	    Slick.prototype.disableTransition = function(slide) {
	
	        var _ = this,
	            transition = {};
	
	        transition[_.transitionType] = '';
	
	        if (_.options.fade === false) {
	            _.$slideTrack.css(transition);
	        } else {
	            _.$slides.eq(slide).css(transition);
	        }
	
	    };
	
	    Slick.prototype.fadeSlide = function(slideIndex, callback) {
	
	        var _ = this;
	
	        if (_.cssTransitions === false) {
	
	            _.$slides.eq(slideIndex).css({
	                zIndex: _.options.zIndex
	            });
	
	            _.$slides.eq(slideIndex).animate({
	                opacity: 1
	            }, _.options.speed, _.options.easing, callback);
	
	        } else {
	
	            _.applyTransition(slideIndex);
	
	            _.$slides.eq(slideIndex).css({
	                opacity: 1,
	                zIndex: _.options.zIndex
	            });
	
	            if (callback) {
	                setTimeout(function() {
	
	                    _.disableTransition(slideIndex);
	
	                    callback.call();
	                }, _.options.speed);
	            }
	
	        }
	
	    };
	
	    Slick.prototype.fadeSlideOut = function(slideIndex) {
	
	        var _ = this;
	
	        if (_.cssTransitions === false) {
	
	            _.$slides.eq(slideIndex).animate({
	                opacity: 0,
	                zIndex: _.options.zIndex - 2
	            }, _.options.speed, _.options.easing);
	
	        } else {
	
	            _.applyTransition(slideIndex);
	
	            _.$slides.eq(slideIndex).css({
	                opacity: 0,
	                zIndex: _.options.zIndex - 2
	            });
	
	        }
	
	    };
	
	    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {
	
	        var _ = this;
	
	        if (filter !== null) {
	
	            _.$slidesCache = _.$slides;
	
	            _.unload();
	
	            _.$slideTrack.children(this.options.slide).detach();
	
	            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
	
	            _.reinit();
	
	        }
	
	    };
	
	    Slick.prototype.focusHandler = function() {
	
	        var _ = this;
	
	        _.$slider
	            .off('focus.slick blur.slick')
	            .on('focus.slick blur.slick',
	                '*:not(.slick-arrow)', function(event) {
	
	            event.stopImmediatePropagation();
	            var $sf = $(this);
	
	            setTimeout(function() {
	
	                if( _.options.pauseOnFocus ) {
	                    _.focussed = $sf.is(':focus');
	                    _.autoPlay();
	                }
	
	            }, 0);
	
	        });
	    };
	
	    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {
	
	        var _ = this;
	        return _.currentSlide;
	
	    };
	
	    Slick.prototype.getDotCount = function() {
	
	        var _ = this;
	
	        var breakPoint = 0;
	        var counter = 0;
	        var pagerQty = 0;
	
	        if (_.options.infinite === true) {
	            while (breakPoint < _.slideCount) {
	                ++pagerQty;
	                breakPoint = counter + _.options.slidesToScroll;
	                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
	            }
	        } else if (_.options.centerMode === true) {
	            pagerQty = _.slideCount;
	        } else if(!_.options.asNavFor) {
	            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
	        }else {
	            while (breakPoint < _.slideCount) {
	                ++pagerQty;
	                breakPoint = counter + _.options.slidesToScroll;
	                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
	            }
	        }
	
	        return pagerQty - 1;
	
	    };
	
	    Slick.prototype.getLeft = function(slideIndex) {
	
	        var _ = this,
	            targetLeft,
	            verticalHeight,
	            verticalOffset = 0,
	            targetSlide;
	
	        _.slideOffset = 0;
	        verticalHeight = _.$slides.first().outerHeight(true);
	
	        if (_.options.infinite === true) {
	            if (_.slideCount > _.options.slidesToShow) {
	                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
	                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
	            }
	            if (_.slideCount % _.options.slidesToScroll !== 0) {
	                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
	                    if (slideIndex > _.slideCount) {
	                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
	                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
	                    } else {
	                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
	                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
	                    }
	                }
	            }
	        } else {
	            if (slideIndex + _.options.slidesToShow > _.slideCount) {
	                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
	                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
	            }
	        }
	
	        if (_.slideCount <= _.options.slidesToShow) {
	            _.slideOffset = 0;
	            verticalOffset = 0;
	        }
	
	        if (_.options.centerMode === true && _.options.infinite === true) {
	            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
	        } else if (_.options.centerMode === true) {
	            _.slideOffset = 0;
	            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
	        }
	
	        if (_.options.vertical === false) {
	            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
	        } else {
	            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
	        }
	
	        if (_.options.variableWidth === true) {
	
	            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
	                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
	            } else {
	                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
	            }
	
	            if (_.options.rtl === true) {
	                if (targetSlide[0]) {
	                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
	                } else {
	                    targetLeft =  0;
	                }
	            } else {
	                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
	            }
	
	            if (_.options.centerMode === true) {
	                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
	                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
	                } else {
	                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
	                }
	
	                if (_.options.rtl === true) {
	                    if (targetSlide[0]) {
	                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
	                    } else {
	                        targetLeft =  0;
	                    }
	                } else {
	                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
	                }
	
	                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
	            }
	        }
	
	        return targetLeft;
	
	    };
	
	    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {
	
	        var _ = this;
	
	        return _.options[option];
	
	    };
	
	    Slick.prototype.getNavigableIndexes = function() {
	
	        var _ = this,
	            breakPoint = 0,
	            counter = 0,
	            indexes = [],
	            max;
	
	        if (_.options.infinite === false) {
	            max = _.slideCount;
	        } else {
	            breakPoint = _.options.slidesToScroll * -1;
	            counter = _.options.slidesToScroll * -1;
	            max = _.slideCount * 2;
	        }
	
	        while (breakPoint < max) {
	            indexes.push(breakPoint);
	            breakPoint = counter + _.options.slidesToScroll;
	            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
	        }
	
	        return indexes;
	
	    };
	
	    Slick.prototype.getSlick = function() {
	
	        return this;
	
	    };
	
	    Slick.prototype.getSlideCount = function() {
	
	        var _ = this,
	            slidesTraversed, swipedSlide, centerOffset;
	
	        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;
	
	        if (_.options.swipeToSlide === true) {
	            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
	                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
	                    swipedSlide = slide;
	                    return false;
	                }
	            });
	
	            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
	
	            return slidesTraversed;
	
	        } else {
	            return _.options.slidesToScroll;
	        }
	
	    };
	
	    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {
	
	        var _ = this;
	
	        _.changeSlide({
	            data: {
	                message: 'index',
	                index: parseInt(slide)
	            }
	        }, dontAnimate);
	
	    };
	
	    Slick.prototype.init = function(creation) {
	
	        var _ = this;
	
	        if (!$(_.$slider).hasClass('slick-initialized')) {
	
	            $(_.$slider).addClass('slick-initialized');
	
	            _.buildRows();
	            _.buildOut();
	            _.setProps();
	            _.startLoad();
	            _.loadSlider();
	            _.initializeEvents();
	            _.updateArrows();
	            _.updateDots();
	            _.checkResponsive(true);
	            _.focusHandler();
	
	        }
	
	        if (creation) {
	            _.$slider.trigger('init', [_]);
	        }
	
	        if (_.options.accessibility === true) {
	            _.initADA();
	        }
	
	        if ( _.options.autoplay ) {
	
	            _.paused = false;
	            _.autoPlay();
	
	        }
	
	    };
	
	    Slick.prototype.initADA = function() {
	        var _ = this;
	        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
	            'aria-hidden': 'true',
	            'tabindex': '-1'
	        }).find('a, input, button, select').attr({
	            'tabindex': '-1'
	        });
	
	        _.$slideTrack.attr('role', 'listbox');
	
	        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
	            $(this).attr({
	                'role': 'option',
	                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
	            });
	        });
	
	        if (_.$dots !== null) {
	            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
	                $(this).attr({
	                    'role': 'presentation',
	                    'aria-selected': 'false',
	                    'aria-controls': 'navigation' + _.instanceUid + i + '',
	                    'id': 'slick-slide' + _.instanceUid + i + ''
	                });
	            })
	                .first().attr('aria-selected', 'true').end()
	                .find('button').attr('role', 'button').end()
	                .closest('div').attr('role', 'toolbar');
	        }
	        _.activateADA();
	
	    };
	
	    Slick.prototype.initArrowEvents = function() {
	
	        var _ = this;
	
	        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
	            _.$prevArrow
	               .off('click.slick')
	               .on('click.slick', {
	                    message: 'previous'
	               }, _.changeSlide);
	            _.$nextArrow
	               .off('click.slick')
	               .on('click.slick', {
	                    message: 'next'
	               }, _.changeSlide);
	        }
	
	    };
	
	    Slick.prototype.initDotEvents = function() {
	
	        var _ = this;
	
	        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
	            $('li', _.$dots).on('click.slick', {
	                message: 'index'
	            }, _.changeSlide);
	        }
	
	        if ( _.options.dots === true && _.options.pauseOnDotsHover === true ) {
	
	            $('li', _.$dots)
	                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
	                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));
	
	        }
	
	    };
	
	    Slick.prototype.initSlideEvents = function() {
	
	        var _ = this;
	
	        if ( _.options.pauseOnHover ) {
	
	            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
	            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
	
	        }
	
	    };
	
	    Slick.prototype.initializeEvents = function() {
	
	        var _ = this;
	
	        _.initArrowEvents();
	
	        _.initDotEvents();
	        _.initSlideEvents();
	
	        _.$list.on('touchstart.slick mousedown.slick', {
	            action: 'start'
	        }, _.swipeHandler);
	        _.$list.on('touchmove.slick mousemove.slick', {
	            action: 'move'
	        }, _.swipeHandler);
	        _.$list.on('touchend.slick mouseup.slick', {
	            action: 'end'
	        }, _.swipeHandler);
	        _.$list.on('touchcancel.slick mouseleave.slick', {
	            action: 'end'
	        }, _.swipeHandler);
	
	        _.$list.on('click.slick', _.clickHandler);
	
	        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
	
	        if (_.options.accessibility === true) {
	            _.$list.on('keydown.slick', _.keyHandler);
	        }
	
	        if (_.options.focusOnSelect === true) {
	            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
	        }
	
	        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
	
	        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
	
	        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
	
	        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
	        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);
	
	    };
	
	    Slick.prototype.initUI = function() {
	
	        var _ = this;
	
	        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
	
	            _.$prevArrow.show();
	            _.$nextArrow.show();
	
	        }
	
	        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
	
	            _.$dots.show();
	
	        }
	
	    };
	
	    Slick.prototype.keyHandler = function(event) {
	
	        var _ = this;
	         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
	        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
	            if (event.keyCode === 37 && _.options.accessibility === true) {
	                _.changeSlide({
	                    data: {
	                        message: _.options.rtl === true ? 'next' :  'previous'
	                    }
	                });
	            } else if (event.keyCode === 39 && _.options.accessibility === true) {
	                _.changeSlide({
	                    data: {
	                        message: _.options.rtl === true ? 'previous' : 'next'
	                    }
	                });
	            }
	        }
	
	    };
	
	    Slick.prototype.lazyLoad = function() {
	
	        var _ = this,
	            loadRange, cloneRange, rangeStart, rangeEnd;
	
	        function loadImages(imagesScope) {
	
	            $('img[data-lazy]', imagesScope).each(function() {
	
	                var image = $(this),
	                    imageSource = $(this).attr('data-lazy'),
	                    imageToLoad = document.createElement('img');
	
	                imageToLoad.onload = function() {
	
	                    image
	                        .animate({ opacity: 0 }, 100, function() {
	                            image
	                                .attr('src', imageSource)
	                                .animate({ opacity: 1 }, 200, function() {
	                                    image
	                                        .removeAttr('data-lazy')
	                                        .removeClass('slick-loading');
	                                });
	                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
	                        });
	
	                };
	
	                imageToLoad.onerror = function() {
	
	                    image
	                        .removeAttr( 'data-lazy' )
	                        .removeClass( 'slick-loading' )
	                        .addClass( 'slick-lazyload-error' );
	
	                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);
	
	                };
	
	                imageToLoad.src = imageSource;
	
	            });
	
	        }
	
	        if (_.options.centerMode === true) {
	            if (_.options.infinite === true) {
	                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
	                rangeEnd = rangeStart + _.options.slidesToShow + 2;
	            } else {
	                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
	                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
	            }
	        } else {
	            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
	            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
	            if (_.options.fade === true) {
	                if (rangeStart > 0) rangeStart--;
	                if (rangeEnd <= _.slideCount) rangeEnd++;
	            }
	        }
	
	        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
	        loadImages(loadRange);
	
	        if (_.slideCount <= _.options.slidesToShow) {
	            cloneRange = _.$slider.find('.slick-slide');
	            loadImages(cloneRange);
	        } else
	        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
	            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
	            loadImages(cloneRange);
	        } else if (_.currentSlide === 0) {
	            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
	            loadImages(cloneRange);
	        }
	
	    };
	
	    Slick.prototype.loadSlider = function() {
	
	        var _ = this;
	
	        _.setPosition();
	
	        _.$slideTrack.css({
	            opacity: 1
	        });
	
	        _.$slider.removeClass('slick-loading');
	
	        _.initUI();
	
	        if (_.options.lazyLoad === 'progressive') {
	            _.progressiveLazyLoad();
	        }
	
	    };
	
	    Slick.prototype.next = Slick.prototype.slickNext = function() {
	
	        var _ = this;
	
	        _.changeSlide({
	            data: {
	                message: 'next'
	            }
	        });
	
	    };
	
	    Slick.prototype.orientationChange = function() {
	
	        var _ = this;
	
	        _.checkResponsive();
	        _.setPosition();
	
	    };
	
	    Slick.prototype.pause = Slick.prototype.slickPause = function() {
	
	        var _ = this;
	
	        _.autoPlayClear();
	        _.paused = true;
	
	    };
	
	    Slick.prototype.play = Slick.prototype.slickPlay = function() {
	
	        var _ = this;
	
	        _.autoPlay();
	        _.options.autoplay = true;
	        _.paused = false;
	        _.focussed = false;
	        _.interrupted = false;
	
	    };
	
	    Slick.prototype.postSlide = function(index) {
	
	        var _ = this;
	
	        if( !_.unslicked ) {
	
	            _.$slider.trigger('afterChange', [_, index]);
	
	            _.animating = false;
	
	            _.setPosition();
	
	            _.swipeLeft = null;
	
	            if ( _.options.autoplay ) {
	                _.autoPlay();
	            }
	
	            if (_.options.accessibility === true) {
	                _.initADA();
	            }
	
	        }
	
	    };
	
	    Slick.prototype.prev = Slick.prototype.slickPrev = function() {
	
	        var _ = this;
	
	        _.changeSlide({
	            data: {
	                message: 'previous'
	            }
	        });
	
	    };
	
	    Slick.prototype.preventDefault = function(event) {
	
	        event.preventDefault();
	
	    };
	
	    Slick.prototype.progressiveLazyLoad = function( tryCount ) {
	
	        tryCount = tryCount || 1;
	
	        var _ = this,
	            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
	            image,
	            imageSource,
	            imageToLoad;
	
	        if ( $imgsToLoad.length ) {
	
	            image = $imgsToLoad.first();
	            imageSource = image.attr('data-lazy');
	            imageToLoad = document.createElement('img');
	
	            imageToLoad.onload = function() {
	
	                image
	                    .attr( 'src', imageSource )
	                    .removeAttr('data-lazy')
	                    .removeClass('slick-loading');
	
	                if ( _.options.adaptiveHeight === true ) {
	                    _.setPosition();
	                }
	
	                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
	                _.progressiveLazyLoad();
	
	            };
	
	            imageToLoad.onerror = function() {
	
	                if ( tryCount < 3 ) {
	
	                    /**
	                     * try to load the image 3 times,
	                     * leave a slight delay so we don't get
	                     * servers blocking the request.
	                     */
	                    setTimeout( function() {
	                        _.progressiveLazyLoad( tryCount + 1 );
	                    }, 500 );
	
	                } else {
	
	                    image
	                        .removeAttr( 'data-lazy' )
	                        .removeClass( 'slick-loading' )
	                        .addClass( 'slick-lazyload-error' );
	
	                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);
	
	                    _.progressiveLazyLoad();
	
	                }
	
	            };
	
	            imageToLoad.src = imageSource;
	
	        } else {
	
	            _.$slider.trigger('allImagesLoaded', [ _ ]);
	
	        }
	
	    };
	
	    Slick.prototype.refresh = function( initializing ) {
	
	        var _ = this, currentSlide, lastVisibleIndex;
	
	        lastVisibleIndex = _.slideCount - _.options.slidesToShow;
	
	        // in non-infinite sliders, we don't want to go past the
	        // last visible index.
	        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
	            _.currentSlide = lastVisibleIndex;
	        }
	
	        // if less slides than to show, go to start.
	        if ( _.slideCount <= _.options.slidesToShow ) {
	            _.currentSlide = 0;
	
	        }
	
	        currentSlide = _.currentSlide;
	
	        _.destroy(true);
	
	        $.extend(_, _.initials, { currentSlide: currentSlide });
	
	        _.init();
	
	        if( !initializing ) {
	
	            _.changeSlide({
	                data: {
	                    message: 'index',
	                    index: currentSlide
	                }
	            }, false);
	
	        }
	
	    };
	
	    Slick.prototype.registerBreakpoints = function() {
	
	        var _ = this, breakpoint, currentBreakpoint, l,
	            responsiveSettings = _.options.responsive || null;
	
	        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {
	
	            _.respondTo = _.options.respondTo || 'window';
	
	            for ( breakpoint in responsiveSettings ) {
	
	                l = _.breakpoints.length-1;
	                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
	
	                if (responsiveSettings.hasOwnProperty(breakpoint)) {
	
	                    // loop through the breakpoints and cut out any existing
	                    // ones with the same breakpoint number, we don't want dupes.
	                    while( l >= 0 ) {
	                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
	                            _.breakpoints.splice(l,1);
	                        }
	                        l--;
	                    }
	
	                    _.breakpoints.push(currentBreakpoint);
	                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
	
	                }
	
	            }
	
	            _.breakpoints.sort(function(a, b) {
	                return ( _.options.mobileFirst ) ? a-b : b-a;
	            });
	
	        }
	
	    };
	
	    Slick.prototype.reinit = function() {
	
	        var _ = this;
	
	        _.$slides =
	            _.$slideTrack
	                .children(_.options.slide)
	                .addClass('slick-slide');
	
	        _.slideCount = _.$slides.length;
	
	        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
	            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
	        }
	
	        if (_.slideCount <= _.options.slidesToShow) {
	            _.currentSlide = 0;
	        }
	
	        _.registerBreakpoints();
	
	        _.setProps();
	        _.setupInfinite();
	        _.buildArrows();
	        _.updateArrows();
	        _.initArrowEvents();
	        _.buildDots();
	        _.updateDots();
	        _.initDotEvents();
	        _.cleanUpSlideEvents();
	        _.initSlideEvents();
	
	        _.checkResponsive(false, true);
	
	        if (_.options.focusOnSelect === true) {
	            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
	        }
	
	        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
	
	        _.setPosition();
	        _.focusHandler();
	
	        _.paused = !_.options.autoplay;
	        _.autoPlay();
	
	        _.$slider.trigger('reInit', [_]);
	
	    };
	
	    Slick.prototype.resize = function() {
	
	        var _ = this;
	
	        if ($(window).width() !== _.windowWidth) {
	            clearTimeout(_.windowDelay);
	            _.windowDelay = window.setTimeout(function() {
	                _.windowWidth = $(window).width();
	                _.checkResponsive();
	                if( !_.unslicked ) { _.setPosition(); }
	            }, 50);
	        }
	    };
	
	    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {
	
	        var _ = this;
	
	        if (typeof(index) === 'boolean') {
	            removeBefore = index;
	            index = removeBefore === true ? 0 : _.slideCount - 1;
	        } else {
	            index = removeBefore === true ? --index : index;
	        }
	
	        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
	            return false;
	        }
	
	        _.unload();
	
	        if (removeAll === true) {
	            _.$slideTrack.children().remove();
	        } else {
	            _.$slideTrack.children(this.options.slide).eq(index).remove();
	        }
	
	        _.$slides = _.$slideTrack.children(this.options.slide);
	
	        _.$slideTrack.children(this.options.slide).detach();
	
	        _.$slideTrack.append(_.$slides);
	
	        _.$slidesCache = _.$slides;
	
	        _.reinit();
	
	    };
	
	    Slick.prototype.setCSS = function(position) {
	
	        var _ = this,
	            positionProps = {},
	            x, y;
	
	        if (_.options.rtl === true) {
	            position = -position;
	        }
	        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
	        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
	
	        positionProps[_.positionProp] = position;
	
	        if (_.transformsEnabled === false) {
	            _.$slideTrack.css(positionProps);
	        } else {
	            positionProps = {};
	            if (_.cssTransitions === false) {
	                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
	                _.$slideTrack.css(positionProps);
	            } else {
	                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
	                _.$slideTrack.css(positionProps);
	            }
	        }
	
	    };
	
	    Slick.prototype.setDimensions = function() {
	
	        var _ = this;
	
	        if (_.options.vertical === false) {
	            if (_.options.centerMode === true) {
	                _.$list.css({
	                    padding: ('0px ' + _.options.centerPadding)
	                });
	            }
	        } else {
	            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
	            if (_.options.centerMode === true) {
	                _.$list.css({
	                    padding: (_.options.centerPadding + ' 0px')
	                });
	            }
	        }
	
	        _.listWidth = _.$list.width();
	        _.listHeight = _.$list.height();
	
	
	        if (_.options.vertical === false && _.options.variableWidth === false) {
	            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
	            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));
	
	        } else if (_.options.variableWidth === true) {
	            _.$slideTrack.width(5000 * _.slideCount);
	        } else {
	            _.slideWidth = Math.ceil(_.listWidth);
	            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
	        }
	
	        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
	        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
	
	    };
	
	    Slick.prototype.setFade = function() {
	
	        var _ = this,
	            targetLeft;
	
	        _.$slides.each(function(index, element) {
	            targetLeft = (_.slideWidth * index) * -1;
	            if (_.options.rtl === true) {
	                $(element).css({
	                    position: 'relative',
	                    right: targetLeft,
	                    top: 0,
	                    zIndex: _.options.zIndex - 2,
	                    opacity: 0
	                });
	            } else {
	                $(element).css({
	                    position: 'relative',
	                    left: targetLeft,
	                    top: 0,
	                    zIndex: _.options.zIndex - 2,
	                    opacity: 0
	                });
	            }
	        });
	
	        _.$slides.eq(_.currentSlide).css({
	            zIndex: _.options.zIndex - 1,
	            opacity: 1
	        });
	
	    };
	
	    Slick.prototype.setHeight = function() {
	
	        var _ = this;
	
	        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
	            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
	            _.$list.css('height', targetHeight);
	        }
	
	    };
	
	    Slick.prototype.setOption =
	    Slick.prototype.slickSetOption = function() {
	
	        /**
	         * accepts arguments in format of:
	         *
	         *  - for changing a single option's value:
	         *     .slick("setOption", option, value, refresh )
	         *
	         *  - for changing a set of responsive options:
	         *     .slick("setOption", 'responsive', [{}, ...], refresh )
	         *
	         *  - for updating multiple values at once (not responsive)
	         *     .slick("setOption", { 'option': value, ... }, refresh )
	         */
	
	        var _ = this, l, item, option, value, refresh = false, type;
	
	        if( $.type( arguments[0] ) === 'object' ) {
	
	            option =  arguments[0];
	            refresh = arguments[1];
	            type = 'multiple';
	
	        } else if ( $.type( arguments[0] ) === 'string' ) {
	
	            option =  arguments[0];
	            value = arguments[1];
	            refresh = arguments[2];
	
	            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {
	
	                type = 'responsive';
	
	            } else if ( typeof arguments[1] !== 'undefined' ) {
	
	                type = 'single';
	
	            }
	
	        }
	
	        if ( type === 'single' ) {
	
	            _.options[option] = value;
	
	
	        } else if ( type === 'multiple' ) {
	
	            $.each( option , function( opt, val ) {
	
	                _.options[opt] = val;
	
	            });
	
	
	        } else if ( type === 'responsive' ) {
	
	            for ( item in value ) {
	
	                if( $.type( _.options.responsive ) !== 'array' ) {
	
	                    _.options.responsive = [ value[item] ];
	
	                } else {
	
	                    l = _.options.responsive.length-1;
	
	                    // loop through the responsive object and splice out duplicates.
	                    while( l >= 0 ) {
	
	                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {
	
	                            _.options.responsive.splice(l,1);
	
	                        }
	
	                        l--;
	
	                    }
	
	                    _.options.responsive.push( value[item] );
	
	                }
	
	            }
	
	        }
	
	        if ( refresh ) {
	
	            _.unload();
	            _.reinit();
	
	        }
	
	    };
	
	    Slick.prototype.setPosition = function() {
	
	        var _ = this;
	
	        _.setDimensions();
	
	        _.setHeight();
	
	        if (_.options.fade === false) {
	            _.setCSS(_.getLeft(_.currentSlide));
	        } else {
	            _.setFade();
	        }
	
	        _.$slider.trigger('setPosition', [_]);
	
	    };
	
	    Slick.prototype.setProps = function() {
	
	        var _ = this,
	            bodyStyle = document.body.style;
	
	        _.positionProp = _.options.vertical === true ? 'top' : 'left';
	
	        if (_.positionProp === 'top') {
	            _.$slider.addClass('slick-vertical');
	        } else {
	            _.$slider.removeClass('slick-vertical');
	        }
	
	        if (bodyStyle.WebkitTransition !== undefined ||
	            bodyStyle.MozTransition !== undefined ||
	            bodyStyle.msTransition !== undefined) {
	            if (_.options.useCSS === true) {
	                _.cssTransitions = true;
	            }
	        }
	
	        if ( _.options.fade ) {
	            if ( typeof _.options.zIndex === 'number' ) {
	                if( _.options.zIndex < 3 ) {
	                    _.options.zIndex = 3;
	                }
	            } else {
	                _.options.zIndex = _.defaults.zIndex;
	            }
	        }
	
	        if (bodyStyle.OTransform !== undefined) {
	            _.animType = 'OTransform';
	            _.transformType = '-o-transform';
	            _.transitionType = 'OTransition';
	            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
	        }
	        if (bodyStyle.MozTransform !== undefined) {
	            _.animType = 'MozTransform';
	            _.transformType = '-moz-transform';
	            _.transitionType = 'MozTransition';
	            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
	        }
	        if (bodyStyle.webkitTransform !== undefined) {
	            _.animType = 'webkitTransform';
	            _.transformType = '-webkit-transform';
	            _.transitionType = 'webkitTransition';
	            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
	        }
	        if (bodyStyle.msTransform !== undefined) {
	            _.animType = 'msTransform';
	            _.transformType = '-ms-transform';
	            _.transitionType = 'msTransition';
	            if (bodyStyle.msTransform === undefined) _.animType = false;
	        }
	        if (bodyStyle.transform !== undefined && _.animType !== false) {
	            _.animType = 'transform';
	            _.transformType = 'transform';
	            _.transitionType = 'transition';
	        }
	        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
	    };
	
	
	    Slick.prototype.setSlideClasses = function(index) {
	
	        var _ = this,
	            centerOffset, allSlides, indexOffset, remainder;
	
	        allSlides = _.$slider
	            .find('.slick-slide')
	            .removeClass('slick-active slick-center slick-current')
	            .attr('aria-hidden', 'true');
	
	        _.$slides
	            .eq(index)
	            .addClass('slick-current');
	
	        if (_.options.centerMode === true) {
	
	            centerOffset = Math.floor(_.options.slidesToShow / 2);
	
	            if (_.options.infinite === true) {
	
	                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
	
	                    _.$slides
	                        .slice(index - centerOffset, index + centerOffset + 1)
	                        .addClass('slick-active')
	                        .attr('aria-hidden', 'false');
	
	                } else {
	
	                    indexOffset = _.options.slidesToShow + index;
	                    allSlides
	                        .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
	                        .addClass('slick-active')
	                        .attr('aria-hidden', 'false');
	
	                }
	
	                if (index === 0) {
	
	                    allSlides
	                        .eq(allSlides.length - 1 - _.options.slidesToShow)
	                        .addClass('slick-center');
	
	                } else if (index === _.slideCount - 1) {
	
	                    allSlides
	                        .eq(_.options.slidesToShow)
	                        .addClass('slick-center');
	
	                }
	
	            }
	
	            _.$slides
	                .eq(index)
	                .addClass('slick-center');
	
	        } else {
	
	            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {
	
	                _.$slides
	                    .slice(index, index + _.options.slidesToShow)
	                    .addClass('slick-active')
	                    .attr('aria-hidden', 'false');
	
	            } else if (allSlides.length <= _.options.slidesToShow) {
	
	                allSlides
	                    .addClass('slick-active')
	                    .attr('aria-hidden', 'false');
	
	            } else {
	
	                remainder = _.slideCount % _.options.slidesToShow;
	                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
	
	                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {
	
	                    allSlides
	                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
	                        .addClass('slick-active')
	                        .attr('aria-hidden', 'false');
	
	                } else {
	
	                    allSlides
	                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
	                        .addClass('slick-active')
	                        .attr('aria-hidden', 'false');
	
	                }
	
	            }
	
	        }
	
	        if (_.options.lazyLoad === 'ondemand') {
	            _.lazyLoad();
	        }
	
	    };
	
	    Slick.prototype.setupInfinite = function() {
	
	        var _ = this,
	            i, slideIndex, infiniteCount;
	
	        if (_.options.fade === true) {
	            _.options.centerMode = false;
	        }
	
	        if (_.options.infinite === true && _.options.fade === false) {
	
	            slideIndex = null;
	
	            if (_.slideCount > _.options.slidesToShow) {
	
	                if (_.options.centerMode === true) {
	                    infiniteCount = _.options.slidesToShow + 1;
	                } else {
	                    infiniteCount = _.options.slidesToShow;
	                }
	
	                for (i = _.slideCount; i > (_.slideCount -
	                        infiniteCount); i -= 1) {
	                    slideIndex = i - 1;
	                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
	                        .attr('data-slick-index', slideIndex - _.slideCount)
	                        .prependTo(_.$slideTrack).addClass('slick-cloned');
	                }
	                for (i = 0; i < infiniteCount; i += 1) {
	                    slideIndex = i;
	                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
	                        .attr('data-slick-index', slideIndex + _.slideCount)
	                        .appendTo(_.$slideTrack).addClass('slick-cloned');
	                }
	                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
	                    $(this).attr('id', '');
	                });
	
	            }
	
	        }
	
	    };
	
	    Slick.prototype.interrupt = function( toggle ) {
	
	        var _ = this;
	
	        if( !toggle ) {
	            _.autoPlay();
	        }
	        _.interrupted = toggle;
	
	    };
	
	    Slick.prototype.selectHandler = function(event) {
	
	        var _ = this;
	
	        var targetElement =
	            $(event.target).is('.slick-slide') ?
	                $(event.target) :
	                $(event.target).parents('.slick-slide');
	
	        var index = parseInt(targetElement.attr('data-slick-index'));
	
	        if (!index) index = 0;
	
	        if (_.slideCount <= _.options.slidesToShow) {
	
	            _.setSlideClasses(index);
	            _.asNavFor(index);
	            return;
	
	        }
	
	        _.slideHandler(index);
	
	    };
	
	    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {
	
	        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
	            _ = this, navTarget;
	
	        sync = sync || false;
	
	        if (_.animating === true && _.options.waitForAnimate === true) {
	            return;
	        }
	
	        if (_.options.fade === true && _.currentSlide === index) {
	            return;
	        }
	
	        if (_.slideCount <= _.options.slidesToShow) {
	            return;
	        }
	
	        if (sync === false) {
	            _.asNavFor(index);
	        }
	
	        targetSlide = index;
	        targetLeft = _.getLeft(targetSlide);
	        slideLeft = _.getLeft(_.currentSlide);
	
	        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
	
	        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
	            if (_.options.fade === false) {
	                targetSlide = _.currentSlide;
	                if (dontAnimate !== true) {
	                    _.animateSlide(slideLeft, function() {
	                        _.postSlide(targetSlide);
	                    });
	                } else {
	                    _.postSlide(targetSlide);
	                }
	            }
	            return;
	        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
	            if (_.options.fade === false) {
	                targetSlide = _.currentSlide;
	                if (dontAnimate !== true) {
	                    _.animateSlide(slideLeft, function() {
	                        _.postSlide(targetSlide);
	                    });
	                } else {
	                    _.postSlide(targetSlide);
	                }
	            }
	            return;
	        }
	
	        if ( _.options.autoplay ) {
	            clearInterval(_.autoPlayTimer);
	        }
	
	        if (targetSlide < 0) {
	            if (_.slideCount % _.options.slidesToScroll !== 0) {
	                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
	            } else {
	                animSlide = _.slideCount + targetSlide;
	            }
	        } else if (targetSlide >= _.slideCount) {
	            if (_.slideCount % _.options.slidesToScroll !== 0) {
	                animSlide = 0;
	            } else {
	                animSlide = targetSlide - _.slideCount;
	            }
	        } else {
	            animSlide = targetSlide;
	        }
	
	        _.animating = true;
	
	        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);
	
	        oldSlide = _.currentSlide;
	        _.currentSlide = animSlide;
	
	        _.setSlideClasses(_.currentSlide);
	
	        if ( _.options.asNavFor ) {
	
	            navTarget = _.getNavTarget();
	            navTarget = navTarget.slick('getSlick');
	
	            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
	                navTarget.setSlideClasses(_.currentSlide);
	            }
	
	        }
	
	        _.updateDots();
	        _.updateArrows();
	
	        if (_.options.fade === true) {
	            if (dontAnimate !== true) {
	
	                _.fadeSlideOut(oldSlide);
	
	                _.fadeSlide(animSlide, function() {
	                    _.postSlide(animSlide);
	                });
	
	            } else {
	                _.postSlide(animSlide);
	            }
	            _.animateHeight();
	            return;
	        }
	
	        if (dontAnimate !== true) {
	            _.animateSlide(targetLeft, function() {
	                _.postSlide(animSlide);
	            });
	        } else {
	            _.postSlide(animSlide);
	        }
	
	    };
	
	    Slick.prototype.startLoad = function() {
	
	        var _ = this;
	
	        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
	
	            _.$prevArrow.hide();
	            _.$nextArrow.hide();
	
	        }
	
	        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
	
	            _.$dots.hide();
	
	        }
	
	        _.$slider.addClass('slick-loading');
	
	    };
	
	    Slick.prototype.swipeDirection = function() {
	
	        var xDist, yDist, r, swipeAngle, _ = this;
	
	        xDist = _.touchObject.startX - _.touchObject.curX;
	        yDist = _.touchObject.startY - _.touchObject.curY;
	        r = Math.atan2(yDist, xDist);
	
	        swipeAngle = Math.round(r * 180 / Math.PI);
	        if (swipeAngle < 0) {
	            swipeAngle = 360 - Math.abs(swipeAngle);
	        }
	
	        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
	            return (_.options.rtl === false ? 'left' : 'right');
	        }
	        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
	            return (_.options.rtl === false ? 'left' : 'right');
	        }
	        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
	            return (_.options.rtl === false ? 'right' : 'left');
	        }
	        if (_.options.verticalSwiping === true) {
	            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
	                return 'down';
	            } else {
	                return 'up';
	            }
	        }
	
	        return 'vertical';
	
	    };
	
	    Slick.prototype.swipeEnd = function(event) {
	
	        var _ = this,
	            slideCount,
	            direction;
	
	        _.dragging = false;
	        _.interrupted = false;
	        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;
	
	        if ( _.touchObject.curX === undefined ) {
	            return false;
	        }
	
	        if ( _.touchObject.edgeHit === true ) {
	            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
	        }
	
	        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {
	
	            direction = _.swipeDirection();
	
	            switch ( direction ) {
	
	                case 'left':
	                case 'down':
	
	                    slideCount =
	                        _.options.swipeToSlide ?
	                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
	                            _.currentSlide + _.getSlideCount();
	
	                    _.currentDirection = 0;
	
	                    break;
	
	                case 'right':
	                case 'up':
	
	                    slideCount =
	                        _.options.swipeToSlide ?
	                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
	                            _.currentSlide - _.getSlideCount();
	
	                    _.currentDirection = 1;
	
	                    break;
	
	                default:
	
	
	            }
	
	            if( direction != 'vertical' ) {
	
	                _.slideHandler( slideCount );
	                _.touchObject = {};
	                _.$slider.trigger('swipe', [_, direction ]);
	
	            }
	
	        } else {
	
	            if ( _.touchObject.startX !== _.touchObject.curX ) {
	
	                _.slideHandler( _.currentSlide );
	                _.touchObject = {};
	
	            }
	
	        }
	
	    };
	
	    Slick.prototype.swipeHandler = function(event) {
	
	        var _ = this;
	
	        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
	            return;
	        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
	            return;
	        }
	
	        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
	            event.originalEvent.touches.length : 1;
	
	        _.touchObject.minSwipe = _.listWidth / _.options
	            .touchThreshold;
	
	        if (_.options.verticalSwiping === true) {
	            _.touchObject.minSwipe = _.listHeight / _.options
	                .touchThreshold;
	        }
	
	        switch (event.data.action) {
	
	            case 'start':
	                _.swipeStart(event);
	                break;
	
	            case 'move':
	                _.swipeMove(event);
	                break;
	
	            case 'end':
	                _.swipeEnd(event);
	                break;
	
	        }
	
	    };
	
	    Slick.prototype.swipeMove = function(event) {
	
	        var _ = this,
	            edgeWasHit = false,
	            curLeft, swipeDirection, swipeLength, positionOffset, touches;
	
	        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;
	
	        if (!_.dragging || touches && touches.length !== 1) {
	            return false;
	        }
	
	        curLeft = _.getLeft(_.currentSlide);
	
	        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
	        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
	
	        _.touchObject.swipeLength = Math.round(Math.sqrt(
	            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
	
	        if (_.options.verticalSwiping === true) {
	            _.touchObject.swipeLength = Math.round(Math.sqrt(
	                Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
	        }
	
	        swipeDirection = _.swipeDirection();
	
	        if (swipeDirection === 'vertical') {
	            return;
	        }
	
	        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
	            event.preventDefault();
	        }
	
	        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
	        if (_.options.verticalSwiping === true) {
	            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
	        }
	
	
	        swipeLength = _.touchObject.swipeLength;
	
	        _.touchObject.edgeHit = false;
	
	        if (_.options.infinite === false) {
	            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
	                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
	                _.touchObject.edgeHit = true;
	            }
	        }
	
	        if (_.options.vertical === false) {
	            _.swipeLeft = curLeft + swipeLength * positionOffset;
	        } else {
	            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
	        }
	        if (_.options.verticalSwiping === true) {
	            _.swipeLeft = curLeft + swipeLength * positionOffset;
	        }
	
	        if (_.options.fade === true || _.options.touchMove === false) {
	            return false;
	        }
	
	        if (_.animating === true) {
	            _.swipeLeft = null;
	            return false;
	        }
	
	        _.setCSS(_.swipeLeft);
	
	    };
	
	    Slick.prototype.swipeStart = function(event) {
	
	        var _ = this,
	            touches;
	
	        _.interrupted = true;
	
	        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
	            _.touchObject = {};
	            return false;
	        }
	
	        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
	            touches = event.originalEvent.touches[0];
	        }
	
	        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
	        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
	
	        _.dragging = true;
	
	    };
	
	    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {
	
	        var _ = this;
	
	        if (_.$slidesCache !== null) {
	
	            _.unload();
	
	            _.$slideTrack.children(this.options.slide).detach();
	
	            _.$slidesCache.appendTo(_.$slideTrack);
	
	            _.reinit();
	
	        }
	
	    };
	
	    Slick.prototype.unload = function() {
	
	        var _ = this;
	
	        $('.slick-cloned', _.$slider).remove();
	
	        if (_.$dots) {
	            _.$dots.remove();
	        }
	
	        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
	            _.$prevArrow.remove();
	        }
	
	        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
	            _.$nextArrow.remove();
	        }
	
	        _.$slides
	            .removeClass('slick-slide slick-active slick-visible slick-current')
	            .attr('aria-hidden', 'true')
	            .css('width', '');
	
	    };
	
	    Slick.prototype.unslick = function(fromBreakpoint) {
	
	        var _ = this;
	        _.$slider.trigger('unslick', [_, fromBreakpoint]);
	        _.destroy();
	
	    };
	
	    Slick.prototype.updateArrows = function() {
	
	        var _ = this,
	            centerOffset;
	
	        centerOffset = Math.floor(_.options.slidesToShow / 2);
	
	        if ( _.options.arrows === true &&
	            _.slideCount > _.options.slidesToShow &&
	            !_.options.infinite ) {
	
	            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
	            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
	
	            if (_.currentSlide === 0) {
	
	                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
	                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
	
	            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
	
	                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
	                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
	
	            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
	
	                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
	                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
	
	            }
	
	        }
	
	    };
	
	    Slick.prototype.updateDots = function() {
	
	        var _ = this;
	
	        if (_.$dots !== null) {
	
	            _.$dots
	                .find('li')
	                .removeClass('slick-active')
	                .attr('aria-hidden', 'true');
	
	            _.$dots
	                .find('li')
	                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
	                .addClass('slick-active')
	                .attr('aria-hidden', 'false');
	
	        }
	
	    };
	
	    Slick.prototype.visibility = function() {
	
	        var _ = this;
	
	        if ( _.options.autoplay ) {
	
	            if ( document[_.hidden] ) {
	
	                _.interrupted = true;
	
	            } else {
	
	                _.interrupted = false;
	
	            }
	
	        }
	
	    };
	
	    $.fn.slick = function() {
	        var _ = this,
	            opt = arguments[0],
	            args = Array.prototype.slice.call(arguments, 1),
	            l = _.length,
	            i,
	            ret;
	        for (i = 0; i < l; i++) {
	            if (typeof opt == 'object' || typeof opt == 'undefined')
	                _[i].slick = new Slick(_[i], opt);
	            else
	                ret = _[i].slick[opt].apply(_[i].slick, args);
	            if (typeof ret != 'undefined') return ret;
	        }
	        return _;
	    };
	
	}));


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	$(function () {
	
	  $('form .input-wrap input').focusout(function () {
	
	    var text_val = $(this).val();
	
	    if (text_val === "") {
	      $(this).removeClass('has-value');
	    } else {
	      $(this).addClass('has-value');
	    }
	  });
	
	  $('form .input-wrap textarea').focusout(function () {
	
	    var text_val = $(this).val();
	
	    if (text_val === "") {
	      $(this).removeClass('has-value');
	    } else {
	      $(this).addClass('has-value');
	    }
	  });
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**!
	 * easy-pie-chart
	 * Lightweight plugin to render simple, animated and retina optimized pie charts
	 *
	 * @license
	 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
	 * @version 2.1.7
	 **/
	!function (a, b) {
	   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (a) {
	    return b(a);
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = b(require("jquery")) : b(jQuery);
	}(undefined, function (a) {
	  var b = function b(a, _b) {
	    var c,
	        d = document.createElement("canvas");a.appendChild(d), "object" == (typeof G_vmlCanvasManager === "undefined" ? "undefined" : _typeof(G_vmlCanvasManager)) && G_vmlCanvasManager.initElement(d);var e = d.getContext("2d");d.width = d.height = _b.size;var f = 1;window.devicePixelRatio > 1 && (f = window.devicePixelRatio, d.style.width = d.style.height = [_b.size, "px"].join(""), d.width = d.height = _b.size * f, e.scale(f, f)), e.translate(_b.size / 2, _b.size / 2), e.rotate((-0.5 + _b.rotate / 180) * Math.PI);var g = (_b.size - _b.lineWidth) / 2;_b.scaleColor && _b.scaleLength && (g -= _b.scaleLength + 2), Date.now = Date.now || function () {
	      return +new Date();
	    };var h = function h(a, b, c) {
	      c = Math.min(Math.max(-1, c || 0), 1);var d = 0 >= c ? !0 : !1;e.beginPath(), e.arc(0, 0, g, 0, 2 * Math.PI * c, d), e.strokeStyle = a, e.lineWidth = b, e.stroke();
	    },
	        i = function i() {
	      var a, c;e.lineWidth = 1, e.fillStyle = _b.scaleColor, e.save();for (var d = 24; d > 0; --d) {
	        d % 6 === 0 ? (c = _b.scaleLength, a = 0) : (c = .6 * _b.scaleLength, a = _b.scaleLength - c), e.fillRect(-_b.size / 2 + a, 0, c, 1), e.rotate(Math.PI / 12);
	      }e.restore();
	    },
	        j = function () {
	      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {
	        window.setTimeout(a, 1e3 / 60);
	      };
	    }(),
	        k = function k() {
	      _b.scaleColor && i(), _b.trackColor && h(_b.trackColor, _b.trackWidth || _b.lineWidth, 1);
	    };this.getCanvas = function () {
	      return d;
	    }, this.getCtx = function () {
	      return e;
	    }, this.clear = function () {
	      e.clearRect(_b.size / -2, _b.size / -2, _b.size, _b.size);
	    }, this.draw = function (a) {
	      _b.scaleColor || _b.trackColor ? e.getImageData && e.putImageData ? c ? e.putImageData(c, 0, 0) : (k(), c = e.getImageData(0, 0, _b.size * f, _b.size * f)) : (this.clear(), k()) : this.clear(), e.lineCap = _b.lineCap;var d;d = "function" == typeof _b.barColor ? _b.barColor(a) : _b.barColor, h(d, _b.lineWidth, a / 100);
	    }.bind(this), this.animate = function (a, c) {
	      var d = Date.now();_b.onStart(a, c);var e = function () {
	        var f = Math.min(Date.now() - d, _b.animate.duration),
	            g = _b.easing(this, f, a, c - a, _b.animate.duration);this.draw(g), _b.onStep(a, c, g), f >= _b.animate.duration ? _b.onStop(a, c) : j(e);
	      }.bind(this);j(e);
	    }.bind(this);
	  },
	      c = function c(a, _c) {
	    var d = { barColor: "#ef1e25", trackColor: "#f9f9f9", scaleColor: "#dfe0e0", scaleLength: 5, lineCap: "round", lineWidth: 3, trackWidth: void 0, size: 110, rotate: 0, animate: { duration: 1e3, enabled: !0 }, easing: function easing(a, b, c, d, e) {
	        return b /= e / 2, 1 > b ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c;
	      }, onStart: function onStart(a, b) {}, onStep: function onStep(a, b, c) {}, onStop: function onStop(a, b) {} };if ("undefined" != typeof b) d.renderer = b;else {
	      if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");d.renderer = SVGRenderer;
	    }var e = {},
	        f = 0,
	        g = function () {
	      this.el = a, this.options = e;for (var b in d) {
	        d.hasOwnProperty(b) && (e[b] = _c && "undefined" != typeof _c[b] ? _c[b] : d[b], "function" == typeof e[b] && (e[b] = e[b].bind(this)));
	      }"string" == typeof e.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing]) ? e.easing = jQuery.easing[e.easing] : e.easing = d.easing, "number" == typeof e.animate && (e.animate = { duration: e.animate, enabled: !0 }), "boolean" != typeof e.animate || e.animate || (e.animate = { duration: 1e3, enabled: e.animate }), this.renderer = new e.renderer(a, e), this.renderer.draw(f), a.dataset && a.dataset.percent ? this.update(parseFloat(a.dataset.percent)) : a.getAttribute && a.getAttribute("data-percent") && this.update(parseFloat(a.getAttribute("data-percent")));
	    }.bind(this);this.update = function (a) {
	      return a = parseFloat(a), e.animate.enabled ? this.renderer.animate(f, a) : this.renderer.draw(a), f = a, this;
	    }.bind(this), this.disableAnimation = function () {
	      return e.animate.enabled = !1, this;
	    }, this.enableAnimation = function () {
	      return e.animate.enabled = !0, this;
	    }, g();
	  };a.fn.easyPieChart = function (b) {
	    return this.each(function () {
	      var d;a.data(this, "easyPieChart") || (d = a.extend({}, b, a(this).data()), a.data(this, "easyPieChart", new c(this, d)));
	    });
	  };
	});

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	$(function () {
	
	  $('.chart').easyPieChart({
	    animate: 2000,
	    easing: 'easeOutBounce',
	    scaleColor: false,
	    trackColor: '#eeeeee',
	    barColor: '#39b54a',
	    lineWidth: 15,
	    lineCap: 'square',
	    size: 140,
	    onStep: function onStep(from, to, percent) {
	      $(this.el).find('.percent').text(Math.round(percent));
	    }
	  });
	});

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	$(function () {
	
	  $("#table-standings").tablesorter({
	    sortList: [[0, 0]]
	  });
	});

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	(function ($) {
	  $.extend({ tablesorter: new function () {
	      var parsers = [],
	          widgets = [];this.defaults = { cssHeader: "header", cssAsc: "headerSortUp", cssDesc: "headerSortDown", cssChildRow: "expand-child", sortInitialOrder: "asc", sortMultiSortKey: "shiftKey", sortForce: null, sortAppend: null, sortLocaleCompare: true, textExtraction: "simple", parsers: {}, widgets: [], widgetZebra: { css: ["even", "odd"] }, headers: {}, widthFixed: false, cancelSelection: true, sortList: [], headerList: [], dateFormat: "us", decimal: '/\.|\,/g', onRenderHeader: null, selectorHeaders: 'thead th', debug: false };function benchmark(s, d) {
	        log(s + "," + (new Date().getTime() - d.getTime()) + "ms");
	      }this.benchmark = benchmark;function log(s) {
	        if (typeof console != "undefined" && typeof console.debug != "undefined") {
	          console.log(s);
	        } else {
	          alert(s);
	        }
	      }function buildParserCache(table, $headers) {
	        if (table.config.debug) {
	          var parsersDebug = "";
	        }if (table.tBodies.length == 0) return;var rows = table.tBodies[0].rows;if (rows[0]) {
	          var list = [],
	              cells = rows[0].cells,
	              l = cells.length;for (var i = 0; i < l; i++) {
	            var p = false;if ($.metadata && $($headers[i]).metadata() && $($headers[i]).metadata().sorter) {
	              p = getParserById($($headers[i]).metadata().sorter);
	            } else if (table.config.headers[i] && table.config.headers[i].sorter) {
	              p = getParserById(table.config.headers[i].sorter);
	            }if (!p) {
	              p = detectParserForColumn(table, rows, -1, i);
	            }if (table.config.debug) {
	              parsersDebug += "column:" + i + " parser:" + p.id + "\n";
	            }list.push(p);
	          }
	        }if (table.config.debug) {
	          log(parsersDebug);
	        }return list;
	      };function detectParserForColumn(table, rows, rowIndex, cellIndex) {
	        var l = parsers.length,
	            node = false,
	            nodeValue = false,
	            keepLooking = true;while (nodeValue == '' && keepLooking) {
	          rowIndex++;if (rows[rowIndex]) {
	            node = getNodeFromRowAndCellIndex(rows, rowIndex, cellIndex);nodeValue = trimAndGetNodeText(table.config, node);if (table.config.debug) {
	              log('Checking if value was empty on row:' + rowIndex);
	            }
	          } else {
	            keepLooking = false;
	          }
	        }for (var i = 1; i < l; i++) {
	          if (parsers[i].is(nodeValue, table, node)) {
	            return parsers[i];
	          }
	        }return parsers[0];
	      }function getNodeFromRowAndCellIndex(rows, rowIndex, cellIndex) {
	        return rows[rowIndex].cells[cellIndex];
	      }function trimAndGetNodeText(config, node) {
	        return $.trim(getElementText(config, node));
	      }function getParserById(name) {
	        var l = parsers.length;for (var i = 0; i < l; i++) {
	          if (parsers[i].id.toLowerCase() == name.toLowerCase()) {
	            return parsers[i];
	          }
	        }return false;
	      }function buildCache(table) {
	        if (table.config.debug) {
	          var cacheTime = new Date();
	        }var totalRows = table.tBodies[0] && table.tBodies[0].rows.length || 0,
	            totalCells = table.tBodies[0].rows[0] && table.tBodies[0].rows[0].cells.length || 0,
	            parsers = table.config.parsers,
	            cache = { row: [], normalized: [] };for (var i = 0; i < totalRows; ++i) {
	          var c = $(table.tBodies[0].rows[i]),
	              cols = [];if (c.hasClass(table.config.cssChildRow)) {
	            cache.row[cache.row.length - 1] = cache.row[cache.row.length - 1].add(c);continue;
	          }cache.row.push(c);for (var j = 0; j < totalCells; ++j) {
	            cols.push(parsers[j].format(getElementText(table.config, c[0].cells[j]), table, c[0].cells[j]));
	          }cols.push(cache.normalized.length);cache.normalized.push(cols);cols = null;
	        };if (table.config.debug) {
	          benchmark("Building cache for " + totalRows + " rows:", cacheTime);
	        }return cache;
	      };function getElementText(config, node) {
	        var text = "";if (!node) return "";if (!config.supportsTextContent) config.supportsTextContent = node.textContent || false;if (config.textExtraction == "simple") {
	          if (config.supportsTextContent) {
	            text = node.textContent;
	          } else {
	            if (node.childNodes[0] && node.childNodes[0].hasChildNodes()) {
	              text = node.childNodes[0].innerHTML;
	            } else {
	              text = node.innerHTML;
	            }
	          }
	        } else {
	          if (typeof config.textExtraction == "function") {
	            text = config.textExtraction(node);
	          } else {
	            text = $(node).text();
	          }
	        }return text;
	      }function appendToTable(table, cache) {
	        if (table.config.debug) {
	          var appendTime = new Date();
	        }var c = cache,
	            r = c.row,
	            n = c.normalized,
	            totalRows = n.length,
	            checkCell = n[0].length - 1,
	            tableBody = $(table.tBodies[0]),
	            rows = [];for (var i = 0; i < totalRows; i++) {
	          var pos = n[i][checkCell];rows.push(r[pos]);if (!table.config.appender) {
	            var l = r[pos].length;for (var j = 0; j < l; j++) {
	              tableBody[0].appendChild(r[pos][j]);
	            }
	          }
	        }if (table.config.appender) {
	          table.config.appender(table, rows);
	        }rows = null;if (table.config.debug) {
	          benchmark("Rebuilt table:", appendTime);
	        }applyWidget(table);setTimeout(function () {
	          $(table).trigger("sortEnd");
	        }, 0);
	      };function buildHeaders(table) {
	        if (table.config.debug) {
	          var time = new Date();
	        }var meta = $.metadata ? true : false;var header_index = computeTableHeaderCellIndexes(table);$tableHeaders = $(table.config.selectorHeaders, table).each(function (index) {
	          this.column = header_index[this.parentNode.rowIndex + "-" + this.cellIndex];this.order = formatSortingOrder(table.config.sortInitialOrder);this.count = this.order;if (checkHeaderMetadata(this) || checkHeaderOptions(table, index)) this.sortDisabled = true;if (checkHeaderOptionsSortingLocked(table, index)) this.order = this.lockedOrder = checkHeaderOptionsSortingLocked(table, index);if (!this.sortDisabled) {
	            var $th = $(this).addClass(table.config.cssHeader);if (table.config.onRenderHeader) table.config.onRenderHeader.apply($th);
	          }table.config.headerList[index] = this;
	        });if (table.config.debug) {
	          benchmark("Built headers:", time);log($tableHeaders);
	        }return $tableHeaders;
	      };function computeTableHeaderCellIndexes(t) {
	        var matrix = [];var lookup = {};var thead = t.getElementsByTagName('THEAD')[0];var trs = thead.getElementsByTagName('TR');for (var i = 0; i < trs.length; i++) {
	          var cells = trs[i].cells;for (var j = 0; j < cells.length; j++) {
	            var c = cells[j];var rowIndex = c.parentNode.rowIndex;var cellId = rowIndex + "-" + c.cellIndex;var rowSpan = c.rowSpan || 1;var colSpan = c.colSpan || 1;
	            var firstAvailCol;if (typeof matrix[rowIndex] == "undefined") {
	              matrix[rowIndex] = [];
	            }for (var k = 0; k < matrix[rowIndex].length + 1; k++) {
	              if (typeof matrix[rowIndex][k] == "undefined") {
	                firstAvailCol = k;break;
	              }
	            }lookup[cellId] = firstAvailCol;for (var k = rowIndex; k < rowIndex + rowSpan; k++) {
	              if (typeof matrix[k] == "undefined") {
	                matrix[k] = [];
	              }var matrixrow = matrix[k];for (var l = firstAvailCol; l < firstAvailCol + colSpan; l++) {
	                matrixrow[l] = "x";
	              }
	            }
	          }
	        }return lookup;
	      }function checkCellColSpan(table, rows, row) {
	        var arr = [],
	            r = table.tHead.rows,
	            c = r[row].cells;for (var i = 0; i < c.length; i++) {
	          var cell = c[i];if (cell.colSpan > 1) {
	            arr = arr.concat(checkCellColSpan(table, headerArr, row++));
	          } else {
	            if (table.tHead.length == 1 || cell.rowSpan > 1 || !r[row + 1]) {
	              arr.push(cell);
	            }
	          }
	        }return arr;
	      };function checkHeaderMetadata(cell) {
	        if ($.metadata && $(cell).metadata().sorter === false) {
	          return true;
	        };return false;
	      }function checkHeaderOptions(table, i) {
	        if (table.config.headers[i] && table.config.headers[i].sorter === false) {
	          return true;
	        };return false;
	      }function checkHeaderOptionsSortingLocked(table, i) {
	        if (table.config.headers[i] && table.config.headers[i].lockedOrder) return table.config.headers[i].lockedOrder;return false;
	      }function applyWidget(table) {
	        var c = table.config.widgets;var l = c.length;for (var i = 0; i < l; i++) {
	          getWidgetById(c[i]).format(table);
	        }
	      }function getWidgetById(name) {
	        var l = widgets.length;for (var i = 0; i < l; i++) {
	          if (widgets[i].id.toLowerCase() == name.toLowerCase()) {
	            return widgets[i];
	          }
	        }
	      };function formatSortingOrder(v) {
	        if (typeof v != "Number") {
	          return v.toLowerCase() == "desc" ? 1 : 0;
	        } else {
	          return v == 1 ? 1 : 0;
	        }
	      }function isValueInArray(v, a) {
	        var l = a.length;for (var i = 0; i < l; i++) {
	          if (a[i][0] == v) {
	            return true;
	          }
	        }return false;
	      }function setHeadersCss(table, $headers, list, css) {
	        $headers.removeClass(css[0]).removeClass(css[1]);var h = [];$headers.each(function (offset) {
	          if (!this.sortDisabled) {
	            h[this.column] = $(this);
	          }
	        });var l = list.length;for (var i = 0; i < l; i++) {
	          h[list[i][0]].addClass(css[list[i][1]]);
	        }
	      }function fixColumnWidth(table, $headers) {
	        var c = table.config;if (c.widthFixed) {
	          var colgroup = $('<colgroup>');$("tr:first td", table.tBodies[0]).each(function () {
	            colgroup.append($('<col>').css('width', $(this).width()));
	          });$(table).prepend(colgroup);
	        };
	      }function updateHeaderSortCount(table, sortList) {
	        var c = table.config,
	            l = sortList.length;for (var i = 0; i < l; i++) {
	          var s = sortList[i],
	              o = c.headerList[s[0]];o.count = s[1];o.count++;
	        }
	      }function multisort(table, sortList, cache) {
	        if (table.config.debug) {
	          var sortTime = new Date();
	        }var dynamicExp = "var sortWrapper = function(a,b) {",
	            l = sortList.length;for (var i = 0; i < l; i++) {
	          var c = sortList[i][0];var order = sortList[i][1];var s = table.config.parsers[c].type == "text" ? order == 0 ? makeSortFunction("text", "asc", c) : makeSortFunction("text", "desc", c) : order == 0 ? makeSortFunction("numeric", "asc", c) : makeSortFunction("numeric", "desc", c);var e = "e" + i;dynamicExp += "var " + e + " = " + s;dynamicExp += "if(" + e + ") { return " + e + "; } ";dynamicExp += "else { ";
	        }var orgOrderCol = cache.normalized[0].length - 1;dynamicExp += "return a[" + orgOrderCol + "]-b[" + orgOrderCol + "];";for (var i = 0; i < l; i++) {
	          dynamicExp += "}; ";
	        }dynamicExp += "return 0; ";dynamicExp += "}; ";if (table.config.debug) {
	          benchmark("Evaling expression:" + dynamicExp, new Date());
	        }eval(dynamicExp);cache.normalized.sort(sortWrapper);if (table.config.debug) {
	          benchmark("Sorting on " + sortList.toString() + " and dir " + order + " time:", sortTime);
	        }return cache;
	      };function makeSortFunction(type, direction, index) {
	        var a = "a[" + index + "]",
	            b = "b[" + index + "]";if (type == 'text' && direction == 'asc') {
	          return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + a + " < " + b + ") ? -1 : 1 )));";
	        } else if (type == 'text' && direction == 'desc') {
	          return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + b + " < " + a + ") ? -1 : 1 )));";
	        } else if (type == 'numeric' && direction == 'asc') {
	          return "(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + a + " - " + b + "));";
	        } else if (type == 'numeric' && direction == 'desc') {
	          return "(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + b + " - " + a + "));";
	        }
	      };function makeSortText(i) {
	        return "((a[" + i + "] < b[" + i + "]) ? -1 : ((a[" + i + "] > b[" + i + "]) ? 1 : 0));";
	      };function makeSortTextDesc(i) {
	        return "((b[" + i + "] < a[" + i + "]) ? -1 : ((b[" + i + "] > a[" + i + "]) ? 1 : 0));";
	      };function makeSortNumeric(i) {
	        return "a[" + i + "]-b[" + i + "];";
	      };function makeSortNumericDesc(i) {
	        return "b[" + i + "]-a[" + i + "];";
	      };function sortText(a, b) {
	        if (table.config.sortLocaleCompare) return a.localeCompare(b);return a < b ? -1 : a > b ? 1 : 0;
	      };function sortTextDesc(a, b) {
	        if (table.config.sortLocaleCompare) return b.localeCompare(a);return b < a ? -1 : b > a ? 1 : 0;
	      };function sortNumeric(a, b) {
	        return a - b;
	      };function sortNumericDesc(a, b) {
	        return b - a;
	      };function getCachedSortType(parsers, i) {
	        return parsers[i].type;
	      };this.construct = function (settings) {
	        return this.each(function () {
	          if (!this.tHead || !this.tBodies) return;var $this,
	              $document,
	              $headers,
	              cache,
	              config,
	              shiftDown = 0,
	              sortOrder;this.config = {};config = $.extend(this.config, $.tablesorter.defaults, settings);$this = $(this);$.data(this, "tablesorter", config);$headers = buildHeaders(this);this.config.parsers = buildParserCache(this, $headers);cache = buildCache(this);var sortCSS = [config.cssDesc, config.cssAsc];fixColumnWidth(this);$headers.click(function (e) {
	            var totalRows = $this[0].tBodies[0] && $this[0].tBodies[0].rows.length || 0;if (!this.sortDisabled && totalRows > 0) {
	              $this.trigger("sortStart");var $cell = $(this);var i = this.column;this.order = this.count++ % 2;if (this.lockedOrder) this.order = this.lockedOrder;if (!e[config.sortMultiSortKey]) {
	                config.sortList = [];if (config.sortForce != null) {
	                  var a = config.sortForce;for (var j = 0; j < a.length; j++) {
	                    if (a[j][0] != i) {
	                      config.sortList.push(a[j]);
	                    }
	                  }
	                }config.sortList.push([i, this.order]);
	              } else {
	                if (isValueInArray(i, config.sortList)) {
	                  for (var j = 0; j < config.sortList.length; j++) {
	                    var s = config.sortList[j],
	                        o = config.headerList[s[0]];if (s[0] == i) {
	                      o.count = s[1];o.count++;s[1] = o.count % 2;
	                    }
	                  }
	                } else {
	                  config.sortList.push([i, this.order]);
	                }
	              };setTimeout(function () {
	                setHeadersCss($this[0], $headers, config.sortList, sortCSS);appendToTable($this[0], multisort($this[0], config.sortList, cache));
	              }, 1);return false;
	            }
	          }).mousedown(function () {
	            if (config.cancelSelection) {
	              this.onselectstart = function () {
	                return false;
	              };return false;
	            }
	          });$this.bind("update", function () {
	            var me = this;setTimeout(function () {
	              me.config.parsers = buildParserCache(me, $headers);cache = buildCache(me);
	            }, 1);
	          }).bind("updateCell", function (e, cell) {
	            var config = this.config;var pos = [cell.parentNode.rowIndex - 1, cell.cellIndex];cache.normalized[pos[0]][pos[1]] = config.parsers[pos[1]].format(getElementText(config, cell), cell);
	          }).bind("sorton", function (e, list) {
	            $(this).trigger("sortStart");config.sortList = list;var sortList = config.sortList;updateHeaderSortCount(this, sortList);setHeadersCss(this, $headers, sortList, sortCSS);appendToTable(this, multisort(this, sortList, cache));
	          }).bind("appendCache", function () {
	            appendToTable(this, cache);
	          }).bind("applyWidgetId", function (e, id) {
	            getWidgetById(id).format(this);
	          }).bind("applyWidgets", function () {
	            applyWidget(this);
	          });if ($.metadata && $(this).metadata() && $(this).metadata().sortlist) {
	            config.sortList = $(this).metadata().sortlist;
	          }if (config.sortList.length > 0) {
	            $this.trigger("sorton", [config.sortList]);
	          }applyWidget(this);
	        });
	      };this.addParser = function (parser) {
	        var l = parsers.length,
	            a = true;for (var i = 0; i < l; i++) {
	          if (parsers[i].id.toLowerCase() == parser.id.toLowerCase()) {
	            a = false;
	          }
	        }if (a) {
	          parsers.push(parser);
	        };
	      };this.addWidget = function (widget) {
	        widgets.push(widget);
	      };this.formatFloat = function (s) {
	        var i = parseFloat(s);return isNaN(i) ? 0 : i;
	      };this.formatInt = function (s) {
	        var i = parseInt(s);return isNaN(i) ? 0 : i;
	      };this.isDigit = function (s, config) {
	        return (/^[-+]?\d*$/.test($.trim(s.replace(/[,.']/g, '')))
	        );
	      };this.clearTableBody = function (table) {
	        if ($.browser.msie) {
	          var empty = function empty() {
	            while (this.firstChild) {
	              this.removeChild(this.firstChild);
	            }
	          };
	
	          empty.apply(table.tBodies[0]);
	        } else {
	          table.tBodies[0].innerHTML = "";
	        }
	      };
	    }() });$.fn.extend({ tablesorter: $.tablesorter.construct });var ts = $.tablesorter;ts.addParser({ id: "text", is: function is(s) {
	      return true;
	    }, format: function format(s) {
	      return $.trim(s.toLocaleLowerCase());
	    }, type: "text" });ts.addParser({ id: "digit", is: function is(s, table) {
	      var c = table.config;return $.tablesorter.isDigit(s, c);
	    }, format: function format(s) {
	      return $.tablesorter.formatFloat(s);
	    }, type: "numeric" });ts.addParser({ id: "currency", is: function is(s) {
	      return (/^[£$€?.]/.test(s)
	      );
	    }, format: function format(s) {
	      return $.tablesorter.formatFloat(s.replace(new RegExp(/[£$€]/g), ""));
	    }, type: "numeric" });ts.addParser({ id: "ipAddress", is: function is(s) {
	      return (/^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(s)
	      );
	    }, format: function format(s) {
	      var a = s.split("."),
	          r = "",
	          l = a.length;for (var i = 0; i < l; i++) {
	        var item = a[i];if (item.length == 2) {
	          r += "0" + item;
	        } else {
	          r += item;
	        }
	      }return $.tablesorter.formatFloat(r);
	    }, type: "numeric" });ts.addParser({ id: "url", is: function is(s) {
	      return (/^(https?|ftp|file):\/\/$/.test(s)
	      );
	    }, format: function format(s) {
	      return jQuery.trim(s.replace(new RegExp(/(https?|ftp|file):\/\//), ''));
	    }, type: "text" });ts.addParser({ id: "isoDate", is: function is(s) {
	      return (/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(s)
	      );
	    }, format: function format(s) {
	      return $.tablesorter.formatFloat(s != "" ? new Date(s.replace(new RegExp(/-/g), "/")).getTime() : "0");
	    }, type: "numeric" });ts.addParser({ id: "percent", is: function is(s) {
	      return (/\%$/.test($.trim(s))
	      );
	    }, format: function format(s) {
	      return $.tablesorter.formatFloat(s.replace(new RegExp(/%/g), ""));
	    }, type: "numeric" });ts.addParser({ id: "usLongDate", is: function is(s) {
	      return s.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/));
	    }, format: function format(s) {
	      return $.tablesorter.formatFloat(new Date(s).getTime());
	    }, type: "numeric" });ts.addParser({ id: "shortDate", is: function is(s) {
	      return (/\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(s)
	      );
	    }, format: function format(s, table) {
	      var c = table.config;s = s.replace(/\-/g, "/");if (c.dateFormat == "us") {
	        s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$1/$2");
	      } else if (c.dateFormat == "uk") {
	        s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$2/$1");
	      } else if (c.dateFormat == "dd/mm/yy" || c.dateFormat == "dd-mm-yy") {
	        s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/, "$1/$2/$3");
	      }return $.tablesorter.formatFloat(new Date(s).getTime());
	    }, type: "numeric" });ts.addParser({ id: "time", is: function is(s) {
	      return (/^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(s)
	      );
	    }, format: function format(s) {
	      return $.tablesorter.formatFloat(new Date("2000/01/01 " + s).getTime());
	    }, type: "numeric" });ts.addParser({ id: "metadata", is: function is(s) {
	      return false;
	    }, format: function format(s, table, cell) {
	      var c = table.config,
	          p = !c.parserMetadataName ? 'sortValue' : c.parserMetadataName;return $(cell).metadata()[p];
	    }, type: "numeric" });ts.addWidget({ id: "zebra", format: function format(table) {
	      if (table.config.debug) {
	        var time = new Date();
	      }var $tr,
	          row = -1,
	          odd;$("tr:visible", table.tBodies[0]).each(function (i) {
	        $tr = $(this);if (!$tr.hasClass(table.config.cssChildRow)) row++;odd = row % 2 == 0;$tr.removeClass(table.config.widgetZebra.css[odd ? 0 : 1]).addClass(table.config.widgetZebra.css[odd ? 1 : 0]);
	      });if (table.config.debug) {
	        $.tablesorter.benchmark("Applying Zebra widget", time);
	      }
	    } });
	})(jQuery);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGZhOTdmNzI2ZDdjNmJlZmIzM2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2NvcHlyaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9wYXJhbGxheC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zbGlkZXNob3cuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9sYWJlbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZlbmRvcnMvY2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc3RhdHMtY2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdGFibGVzb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92ZW5kb3JzL2pxdWVyeS10YWJsZXNvcnRlci5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwid2luZG93IiwiaW5pdE1hcCIsImFyZW5hIiwibGF0IiwibG5nIiwicGlvbmlyIiwiY2VudGVyIiwibWFwIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ6b29tIiwic2Nyb2xsd2hlZWwiLCJzdHlsZXMiLCJkaXNhYmxlRGVmYXVsdFVJIiwiaW1hZ2UiLCJtYXJrZXIxIiwiTWFya2VyIiwicG9zaXRpb24iLCJpY29uIiwidGl0bGUiLCJtYXJrZXIyIiwiY29udGVudCIsImluZm93aW5kb3ciLCJJbmZvV2luZG93IiwiZXZlbnQiLCJhZGRMaXN0ZW5lciIsIm9wZW4iLCJjbG9zZSIsIml3T3V0ZXIiLCIkIiwiaXdDbG9zZUJ0biIsIm5leHQiLCJjc3MiLCJkaXNwbGF5IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRUaW1lb3V0Iiwic2V0QXR0cmlidXRlIiwiZWxlbWVudCIsInllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJpbm5lckhUTUwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicGFyYWxsYXhTY3JvbGwiLCJ3aW5kb3dPZmZzZXQiLCJzY3JvbGxUb3AiLCJsYXN0UG9zaXRpb24iLCJwYXJhbGxheEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJlbCIsInBhcmVudCIsInBhcmVudE5vZGUiLCJwYXJlbnRIZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJwYXJlbnRPZmZzZXQiLCJ0b3AiLCJmaW5hbE9mZnNldCIsImlubmVySGVpZ2h0IiwidHJhbnNsYXRlIiwiZ2V0QXR0cmlidXRlIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJ0b0ZpeGVkIiwic2xpY2siLCJpbmZpbml0ZSIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiZG90cyIsImFycm93cyIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImZhZGUiLCJjc3NFYXNlIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImZvY3Vzb3V0IiwidGV4dF92YWwiLCJ2YWwiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYSIsImIiLCJleHBvcnRzIiwibW9kdWxlIiwialF1ZXJ5IiwiYyIsImQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJHX3ZtbENhbnZhc01hbmFnZXIiLCJpbml0RWxlbWVudCIsImUiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJzaXplIiwiZiIsImRldmljZVBpeGVsUmF0aW8iLCJqb2luIiwic2NhbGUiLCJyb3RhdGUiLCJNYXRoIiwiUEkiLCJnIiwibGluZVdpZHRoIiwic2NhbGVDb2xvciIsInNjYWxlTGVuZ3RoIiwibm93IiwiaCIsIm1pbiIsIm1heCIsImJlZ2luUGF0aCIsImFyYyIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiZmlsbFN0eWxlIiwic2F2ZSIsImZpbGxSZWN0IiwicmVzdG9yZSIsImoiLCJrIiwidHJhY2tDb2xvciIsInRyYWNrV2lkdGgiLCJnZXRDYW52YXMiLCJnZXRDdHgiLCJjbGVhciIsImNsZWFyUmVjdCIsImRyYXciLCJnZXRJbWFnZURhdGEiLCJwdXRJbWFnZURhdGEiLCJsaW5lQ2FwIiwiYmFyQ29sb3IiLCJiaW5kIiwiYW5pbWF0ZSIsIm9uU3RhcnQiLCJkdXJhdGlvbiIsImVhc2luZyIsIm9uU3RlcCIsIm9uU3RvcCIsImVuYWJsZWQiLCJyZW5kZXJlciIsIlNWR1JlbmRlcmVyIiwiRXJyb3IiLCJvcHRpb25zIiwiaGFzT3duUHJvcGVydHkiLCJpc0Z1bmN0aW9uIiwiZGF0YXNldCIsInBlcmNlbnQiLCJ1cGRhdGUiLCJwYXJzZUZsb2F0IiwiZGlzYWJsZUFuaW1hdGlvbiIsImVuYWJsZUFuaW1hdGlvbiIsImZuIiwiZWFzeVBpZUNoYXJ0IiwiZWFjaCIsImRhdGEiLCJleHRlbmQiLCJmcm9tIiwidG8iLCJmaW5kIiwidGV4dCIsInJvdW5kIiwidGFibGVzb3J0ZXIiLCJzb3J0TGlzdCIsInBhcnNlcnMiLCJ3aWRnZXRzIiwiZGVmYXVsdHMiLCJjc3NIZWFkZXIiLCJjc3NBc2MiLCJjc3NEZXNjIiwiY3NzQ2hpbGRSb3ciLCJzb3J0SW5pdGlhbE9yZGVyIiwic29ydE11bHRpU29ydEtleSIsInNvcnRGb3JjZSIsInNvcnRBcHBlbmQiLCJzb3J0TG9jYWxlQ29tcGFyZSIsInRleHRFeHRyYWN0aW9uIiwid2lkZ2V0WmVicmEiLCJoZWFkZXJzIiwid2lkdGhGaXhlZCIsImNhbmNlbFNlbGVjdGlvbiIsImhlYWRlckxpc3QiLCJkYXRlRm9ybWF0IiwiZGVjaW1hbCIsIm9uUmVuZGVySGVhZGVyIiwic2VsZWN0b3JIZWFkZXJzIiwiZGVidWciLCJiZW5jaG1hcmsiLCJzIiwibG9nIiwiZ2V0VGltZSIsImNvbnNvbGUiLCJhbGVydCIsImJ1aWxkUGFyc2VyQ2FjaGUiLCJ0YWJsZSIsIiRoZWFkZXJzIiwiY29uZmlnIiwicGFyc2Vyc0RlYnVnIiwidEJvZGllcyIsInJvd3MiLCJsaXN0IiwiY2VsbHMiLCJsIiwicCIsIm1ldGFkYXRhIiwic29ydGVyIiwiZ2V0UGFyc2VyQnlJZCIsImRldGVjdFBhcnNlckZvckNvbHVtbiIsImlkIiwicHVzaCIsInJvd0luZGV4IiwiY2VsbEluZGV4Iiwibm9kZSIsIm5vZGVWYWx1ZSIsImtlZXBMb29raW5nIiwiZ2V0Tm9kZUZyb21Sb3dBbmRDZWxsSW5kZXgiLCJ0cmltQW5kR2V0Tm9kZVRleHQiLCJpcyIsInRyaW0iLCJnZXRFbGVtZW50VGV4dCIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImJ1aWxkQ2FjaGUiLCJjYWNoZVRpbWUiLCJ0b3RhbFJvd3MiLCJ0b3RhbENlbGxzIiwiY2FjaGUiLCJyb3ciLCJub3JtYWxpemVkIiwiY29scyIsImhhc0NsYXNzIiwiYWRkIiwiZm9ybWF0Iiwic3VwcG9ydHNUZXh0Q29udGVudCIsInRleHRDb250ZW50IiwiY2hpbGROb2RlcyIsImhhc0NoaWxkTm9kZXMiLCJhcHBlbmRUb1RhYmxlIiwiYXBwZW5kVGltZSIsInIiLCJuIiwiY2hlY2tDZWxsIiwidGFibGVCb2R5IiwicG9zIiwiYXBwZW5kZXIiLCJ0cmlnZ2VyIiwiYnVpbGRIZWFkZXJzIiwidGltZSIsIm1ldGEiLCJoZWFkZXJfaW5kZXgiLCJjb21wdXRlVGFibGVIZWFkZXJDZWxsSW5kZXhlcyIsIiR0YWJsZUhlYWRlcnMiLCJpbmRleCIsImNvbHVtbiIsIm9yZGVyIiwiZm9ybWF0U29ydGluZ09yZGVyIiwiY291bnQiLCJjaGVja0hlYWRlck1ldGFkYXRhIiwiY2hlY2tIZWFkZXJPcHRpb25zIiwic29ydERpc2FibGVkIiwiY2hlY2tIZWFkZXJPcHRpb25zU29ydGluZ0xvY2tlZCIsImxvY2tlZE9yZGVyIiwiJHRoIiwiYXBwbHkiLCJ0IiwibWF0cml4IiwibG9va3VwIiwidGhlYWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInRycyIsImNlbGxJZCIsInJvd1NwYW4iLCJjb2xTcGFuIiwiZmlyc3RBdmFpbENvbCIsIm1hdHJpeHJvdyIsImNoZWNrQ2VsbENvbFNwYW4iLCJhcnIiLCJ0SGVhZCIsImNlbGwiLCJjb25jYXQiLCJoZWFkZXJBcnIiLCJhcHBseVdpZGdldCIsImdldFdpZGdldEJ5SWQiLCJ2IiwiaXNWYWx1ZUluQXJyYXkiLCJzZXRIZWFkZXJzQ3NzIiwib2Zmc2V0IiwiZml4Q29sdW1uV2lkdGgiLCJjb2xncm91cCIsImFwcGVuZCIsInByZXBlbmQiLCJ1cGRhdGVIZWFkZXJTb3J0Q291bnQiLCJvIiwibXVsdGlzb3J0Iiwic29ydFRpbWUiLCJkeW5hbWljRXhwIiwidHlwZSIsIm1ha2VTb3J0RnVuY3Rpb24iLCJvcmdPcmRlckNvbCIsInNvcnQiLCJzb3J0V3JhcHBlciIsInRvU3RyaW5nIiwiZGlyZWN0aW9uIiwibWFrZVNvcnRUZXh0IiwibWFrZVNvcnRUZXh0RGVzYyIsIm1ha2VTb3J0TnVtZXJpYyIsIm1ha2VTb3J0TnVtZXJpY0Rlc2MiLCJzb3J0VGV4dCIsImxvY2FsZUNvbXBhcmUiLCJzb3J0VGV4dERlc2MiLCJzb3J0TnVtZXJpYyIsInNvcnROdW1lcmljRGVzYyIsImdldENhY2hlZFNvcnRUeXBlIiwiY29uc3RydWN0IiwiJHRoaXMiLCIkZG9jdW1lbnQiLCJzaGlmdERvd24iLCJzb3J0T3JkZXIiLCJzb3J0Q1NTIiwiY2xpY2siLCIkY2VsbCIsIm1vdXNlZG93biIsIm9uc2VsZWN0c3RhcnQiLCJtZSIsInNvcnRsaXN0IiwiYWRkUGFyc2VyIiwicGFyc2VyIiwiYWRkV2lkZ2V0Iiwid2lkZ2V0IiwiZm9ybWF0RmxvYXQiLCJpc05hTiIsImZvcm1hdEludCIsInBhcnNlSW50IiwiaXNEaWdpdCIsInRlc3QiLCJyZXBsYWNlIiwiY2xlYXJUYWJsZUJvZHkiLCJicm93c2VyIiwibXNpZSIsImVtcHR5IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwidHMiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsIlJlZ0V4cCIsInNwbGl0IiwiaXRlbSIsIm1hdGNoIiwicGFyc2VyTWV0YWRhdGFOYW1lIiwiJHRyIiwib2RkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBLG9CQUFBQSxDQUFRLENBQVI7QUFDQSxvQkFBQUEsQ0FBUSxFQUFSO0FBQ0Esb0JBQUFBLENBQVEsRUFBUjtBQUNBLG9CQUFBQSxDQUFRLEVBQVI7QUFDQSxvQkFBQUEsQ0FBUSxDQUFSO0FBQ0Esb0JBQUFBLENBQVEsQ0FBUjtBQUNBLG9CQUFBQSxDQUFRLENBQVI7QUFDQSxvQkFBQUEsQ0FBUSxDQUFSO0FBQ0Esb0JBQUFBLENBQVEsQ0FBUjtBQUNBLG9CQUFBQSxDQUFRLENBQVIsRTs7Ozs7Ozs7QUNUQUMsUUFBT0MsT0FBUCxHQUFpQixZQUFXOztBQUcxQixPQUFJQyxRQUFRLEVBQUNDLEtBQUksVUFBTCxFQUFpQkMsS0FBSyxVQUF0QixFQUFaO0FBQ0EsT0FBSUMsU0FBUyxFQUFDRixLQUFJLFVBQUwsRUFBaUJDLEtBQUssVUFBdEIsRUFBYjtBQUNBLE9BQUlFLFNBQVMsRUFBQ0gsS0FBSSxVQUFMLEVBQWlCQyxLQUFLLFVBQXRCLEVBQWI7O0FBRUEsT0FBSUcsR0FBSjs7QUFFQUEsU0FBTSxJQUFJQyxPQUFPQyxJQUFQLENBQVlDLEdB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QUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCOztBQUVqQjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGNBQWE7O0FBRWI7QUFDQTtBQUNBLGNBQWE7O0FBRWIsVUFBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrQkFBaUI7QUFDakI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7QUFFYixVQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7O0FBRWI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFhOztBQUViLFVBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7QUFFYjs7QUFFQTs7QUFFQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQixjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTOztBQUVUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztB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QWlCOztBQUVqQjs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxVQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBLGNBQWE7O0FBRWI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUEsdUNBQXNDO0FBQ3RDLHdDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjs7QUFFakI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckIsa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckIsa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxrQkFBaUI7O0FBRWpCLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixVQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxVQUFTOztBQUVUOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QXhCLEVBQWdENEQsSUFBaEQ7QUFBdUQ7QUFBQyxNQUF4WixFQUFiO0FBQXlhLEVBRnQyVixFQUV3MlZsSyxNQUZ4MlYsRSIsImZpbGUiOiJwdWJsaWMvanMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZGZhOTdmNzI2ZDdjNmJlZmIzM2YiLCJyZXF1aXJlKCcuL3ZlbmRvcnMvY2hhcnQuanMnKVxyXG5yZXF1aXJlKCcuL3ZlbmRvcnMvanF1ZXJ5LXRhYmxlc29ydGVyLmpzJylcclxucmVxdWlyZSgnLi9jb21wb25lbnRzL3N0YXRzLWNoYXJ0LmpzJylcclxucmVxdWlyZSgnLi9jb21wb25lbnRzL3RhYmxlc29ydC5qcycpXHJcbnJlcXVpcmUoJy4vY29tcG9uZW50cy9tYXAuanMnKVxyXG5yZXF1aXJlKCcuL2NvbXBvbmVudHMvbG9hZGVyLmpzJylcclxucmVxdWlyZSgnLi9jb21wb25lbnRzL2NvcHlyaWdodC5qcycpXHJcbnJlcXVpcmUoJy4vY29tcG9uZW50cy9wYXJhbGxheC5qcycpXHJcbnJlcXVpcmUoJy4vY29tcG9uZW50cy9zbGlkZXNob3cuanMnKVxyXG5yZXF1aXJlKCcuL2NvbXBvbmVudHMvbGFiZWxzLmpzJylcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2FwcC5qcyIsIndpbmRvdy5pbml0TWFwID0gZnVuY3Rpb24oKSB7XHJcbiAgXHJcblxyXG4gIHZhciBhcmVuYSA9IHtsYXQ6NDQuODE0MTM3MiwgbG5nOiAyMC40MTkyMDg5fVxyXG4gIHZhciBwaW9uaXIgPSB7bGF0OjQ0LjgxNDc2OTMsIGxuZzogMjAuNDgzMjYzMX1cclxuICB2YXIgY2VudGVyID0ge2xhdDo0NC44MDg5MTQ1LCBsbmc6IDIwLjQ3MjA3ODN9XHJcblxyXG4gIHZhciBtYXBcclxuXHJcbiAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgIGNlbnRlcjogY2VudGVyLFxyXG4gICAgem9vbTogMTMsXHJcbiAgICBzY3JvbGx3aGVlbDogZmFsc2UsXHJcbiAgICBzdHlsZXM6IHN0eWxlcyxcclxuICAgIGRpc2FibGVEZWZhdWx0VUk6IHRydWVcclxuICB9KVxyXG5cclxuICB2YXIgaW1hZ2UgPSAnYXNzZXRzL2xvZ29zL3Bpbi5wbmcnXHJcblxyXG4gIHZhciBtYXJrZXIxID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICBwb3NpdGlvbjogYXJlbmEsXHJcbiAgICBtYXA6IG1hcCxcclxuICAgIGljb246IGltYWdlLFxyXG4gICAgdGl0bGU6ICdCZW9ncmFkc2thIEtvbWJhbmsgQXJlbmEnXHJcbiAgfSlcclxuXHJcbiAgdmFyIG1hcmtlcjIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgIHBvc2l0aW9uOiBwaW9uaXIsXHJcbiAgICBtYXA6IG1hcCxcclxuICAgIGljb246IGltYWdlLFxyXG4gICAgdGl0bGU6ICdIYWxhIFBpb25pcidcclxuICB9KVxyXG5cclxuICB2YXIgY29udGVudCA9ICc8ZGl2IGlkPVwibWFwLWluZm8tYm94XCI+PHA+SGFsYTwvYnI+UGlvbmlyPC9wPjwvZGl2PidcclxuXHJcbiAgdmFyIGluZm93aW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XHJcbiAgICBjb250ZW50OiBjb250ZW50XHJcbiAgfSlcclxuXHJcblxyXG4gIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlcjEsICdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcclxuICAgIGluZm93aW5kb3cub3BlbihtYXAsIG1hcmtlcjEpO1xyXG4gIH0pOyBcclxuXHJcbiAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyMSwgJ21vdXNlb3V0JywgZnVuY3Rpb24oKSB7XHJcbiAgICBpbmZvd2luZG93LmNsb3NlKG1hcCwgbWFya2VyMSk7XHJcbiAgfSk7IFxyXG5cclxuXHJcbiAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyMiwgJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgaW5mb3dpbmRvdy5vcGVuKG1hcCwgbWFya2VyMik7XHJcbiAgfSk7IFxyXG5cclxuICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIyLCAnbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcclxuICAgIGluZm93aW5kb3cuY2xvc2UobWFwLCBtYXJrZXIyKTtcclxuICB9KTsgXHJcblxyXG5cclxuICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihpbmZvd2luZG93LCAnZG9tcmVhZHknLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvLyBSZWZlcmVuY2UgdG8gdGhlIERJViB3aGljaCByZWNlaXZlcyB0aGUgY29udGVudHMgb2YgdGhlIGluZm93aW5kb3cgdXNpbmcgalF1ZXJ5XHJcbiAgICB2YXIgaXdPdXRlciA9ICQoJy5nbS1zdHlsZS1pdycpO1xyXG5cclxuICAgIHZhciBpd0Nsb3NlQnRuID0gaXdPdXRlci5uZXh0KCk7XHJcblxyXG4gICAgLy8gQXBwbHkgdGhlIGRlc2lyZWQgZWZmZWN0IHRvIHRoZSBjbG9zZSBidXR0b25cclxuICAgIGl3Q2xvc2VCdG4uY3NzKHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcblxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSBbe1wiZmVhdHVyZVR5cGVcIjpcIndhdGVyXCIsXCJlbGVtZW50VHlwZVwiOlwiZ2VvbWV0cnlcIixcInN0eWxlcnNcIjpbe1wiY29sb3JcIjpcIiNlOWU5ZTlcIn0se1wibGlnaHRuZXNzXCI6MTd9XX0se1wiZmVhdHVyZVR5cGVcIjpcImxhbmRzY2FwZVwiLFwiZWxlbWVudFR5cGVcIjpcImdlb21ldHJ5XCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjZjVmNWY1XCJ9LHtcImxpZ2h0bmVzc1wiOjIwfV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmhpZ2h3YXlcIixcImVsZW1lbnRUeXBlXCI6XCJnZW9tZXRyeS5maWxsXCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjZmZmZmZmXCJ9LHtcImxpZ2h0bmVzc1wiOjE3fV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmhpZ2h3YXlcIixcImVsZW1lbnRUeXBlXCI6XCJnZW9tZXRyeS5zdHJva2VcIixcInN0eWxlcnNcIjpbe1wiY29sb3JcIjpcIiNmZmZmZmZcIn0se1wibGlnaHRuZXNzXCI6Mjl9LHtcIndlaWdodFwiOjAuMn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicm9hZC5hcnRlcmlhbFwiLFwiZWxlbWVudFR5cGVcIjpcImdlb21ldHJ5XCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjZmZmZmZmXCJ9LHtcImxpZ2h0bmVzc1wiOjE4fV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmxvY2FsXCIsXCJlbGVtZW50VHlwZVwiOlwiZ2VvbWV0cnlcIixcInN0eWxlcnNcIjpbe1wiY29sb3JcIjpcIiNmZmZmZmZcIn0se1wibGlnaHRuZXNzXCI6MTZ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInBvaVwiLFwiZWxlbWVudFR5cGVcIjpcImdlb21ldHJ5XCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjZjVmNWY1XCJ9LHtcImxpZ2h0bmVzc1wiOjIxfV19LHtcImZlYXR1cmVUeXBlXCI6XCJwb2kucGFya1wiLFwiZWxlbWVudFR5cGVcIjpcImdlb21ldHJ5XCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjZGVkZWRlXCJ9LHtcImxpZ2h0bmVzc1wiOjIxfV19LHtcImVsZW1lbnRUeXBlXCI6XCJsYWJlbHMudGV4dC5zdHJva2VcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib25cIn0se1wiY29sb3JcIjpcIiNmZmZmZmZcIn0se1wibGlnaHRuZXNzXCI6MTZ9XX0se1wiZWxlbWVudFR5cGVcIjpcImxhYmVscy50ZXh0LmZpbGxcIixcInN0eWxlcnNcIjpbe1wic2F0dXJhdGlvblwiOjM2fSx7XCJjb2xvclwiOlwiIzMzMzMzM1wifSx7XCJsaWdodG5lc3NcIjo0MH1dfSx7XCJlbGVtZW50VHlwZVwiOlwibGFiZWxzLmljb25cIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib2ZmXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInRyYW5zaXRcIixcImVsZW1lbnRUeXBlXCI6XCJnZW9tZXRyeVwiLFwic3R5bGVyc1wiOlt7XCJjb2xvclwiOlwiI2YyZjJmMlwifSx7XCJsaWdodG5lc3NcIjoxOX1dfSx7XCJmZWF0dXJlVHlwZVwiOlwiYWRtaW5pc3RyYXRpdmVcIixcImVsZW1lbnRUeXBlXCI6XCJnZW9tZXRyeS5maWxsXCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjZmVmZWZlXCJ9LHtcImxpZ2h0bmVzc1wiOjIwfV19LHtcImZlYXR1cmVUeXBlXCI6XCJhZG1pbmlzdHJhdGl2ZVwiLFwiZWxlbWVudFR5cGVcIjpcImdlb21ldHJ5LnN0cm9rZVwiLFwic3R5bGVyc1wiOlt7XCJjb2xvclwiOlwiI2ZlZmVmZVwifSx7XCJsaWdodG5lc3NcIjoxN30se1wid2VpZ2h0XCI6MS4yfV19XVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvbWFwLmpzIiwiLyoqXHJcbiAqIExvYWRlclxyXG4gKiAtLS0tLVxyXG4gKiBBZGRzICdkYXRhLXJlYWR5JyBhdHRyaWJ1dGUgdG8gYm9keVxyXG4gKi9cclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuXHJcbnNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xyXG4gIGJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLXJlYWR5JywgdHJ1ZSlcclxufSwgMTAwKVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9sb2FkZXIuanMiLCIvKipcclxuICogQ29weXJpZ2h0IFllYXJcclxuICovXHJcblxyXG5jb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnllYXInKSxcclxuICAgICAgeWVhciAgICA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxyXG5cclxuZWxlbWVudC5pbm5lckhUTUwgPSAnICcgKyB5ZWFyICsgJyAnXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvY29weXJpZ2h0LmpzIiwiLyoqXHJcbiAqIFBhcmFsbGF4IFNjcm9sbFxyXG4gKi9cclxuXHJcbmNvbnN0IHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICAgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xyXG5cclxuZnVuY3Rpb24gcGFyYWxsYXhTY3JvbGwoKSB7XHJcblxyXG4gIHZhciB3aW5kb3dPZmZzZXQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxyXG5cclxuICB2YXIgbGFzdFBvc2l0aW9uID0gLTFcclxuICBpZiAoIGxhc3RQb3NpdGlvbiA9PSB3aW5kb3dPZmZzZXQgKSB7XHJcblxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHBhcmFsbGF4U2Nyb2xsKVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcblxyXG4gIH0gZWxzZSBsYXN0UG9zaXRpb24gPSB3aW5kb3dPZmZzZXRcclxuXHJcbiAgY29uc3QgcGFyYWxsYXhFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBhcmFsbGF4XScpXHJcblxyXG4gIHZhciBpXHJcbiAgZm9yIChpID0gMDsgaSA8IHBhcmFsbGF4RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICB2YXIgZWwgICAgID0gcGFyYWxsYXhFbGVtZW50c1tpXVxyXG4gICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudE5vZGVcclxuXHJcbiAgICB2YXIgcGFyZW50SGVpZ2h0ICAgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XHJcbiAgICB2YXIgcGFyZW50T2Zmc2V0ICAgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgKHBhcmVudEhlaWdodC8yKVxyXG4gICAgdmFyIGZpbmFsT2Zmc2V0ICAgID0gKHdpbmRvdy5pbm5lckhlaWdodC8yKSAtIHBhcmVudE9mZnNldFxyXG4gICAgdmFyIHRyYW5zbGF0ZSAgICAgID0gZmluYWxPZmZzZXQgKiBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyYWxsYXgnKVxyXG5cclxuICAgIGVsLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwLCcgKyB0cmFuc2xhdGUudG9GaXhlZCgxKSArICAncHgsMCknXHJcblxyXG4gIH1cclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBwYXJhbGxheFNjcm9sbCApXHJcblxyXG59XHJcblxyXG5wYXJhbGxheFNjcm9sbCgpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvcGFyYWxsYXguanMiLCJyZXF1aXJlKCdzbGljay1jYXJvdXNlbCcpXHJcblxyXG4kKCcuc2xpZGVzaG93Jykuc2xpY2soKTtcclxuXHJcbiQoJy5tdWx0aXBsZUl0ZW1zJykuc2xpY2soe1xyXG4gIGluZmluaXRlOiB0cnVlLFxyXG4gIHNsaWRlc1RvU2hvdzogMyxcclxuICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICBkb3RzOiB0cnVlLFxyXG4gIGFycm93czogZmFsc2UsXHJcbiAgYXV0b3BsYXk6IHRydWUsXHJcbiAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICBmYWRlOiBmYWxzZSxcclxuICBjc3NFYXNlOiAnbGluZWFyJyxcclxuICByZXNwb25zaXZlOiBbXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXVxyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9zbGlkZXNob3cuanMiLCIvKlxuICAgICBfIF8gICAgICBfICAgICAgIF9cbiBfX198IChfKSBfX198IHwgX18gIChfKV9fX1xuLyBfX3wgfCB8LyBfX3wgfC8gLyAgfCAvIF9ffFxuXFxfXyBcXCB8IHwgKF9ffCAgIDwgXyB8IFxcX18gXFxcbnxfX18vX3xffFxcX19ffF98XFxfKF8pLyB8X19fL1xuICAgICAgICAgICAgICAgICAgIHxfXy9cblxuIFZlcnNpb246IDEuNi4wXG4gIEF1dGhvcjogS2VuIFdoZWVsZXJcbiBXZWJzaXRlOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW9cbiAgICBEb2NzOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW8vc2xpY2tcbiAgICBSZXBvOiBodHRwOi8vZ2l0aHViLmNvbS9rZW53aGVlbGVyL3NsaWNrXG4gIElzc3VlczogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGljay9pc3N1ZXNcblxuICovXG4vKiBnbG9iYWwgd2luZG93LCBkb2N1bWVudCwgZGVmaW5lLCBqUXVlcnksIHNldEludGVydmFsLCBjbGVhckludGVydmFsICovXG4oZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgICB9XG5cbn0oZnVuY3Rpb24oJCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgU2xpY2sgPSB3aW5kb3cuU2xpY2sgfHwge307XG5cbiAgICBTbGljayA9IChmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgaW5zdGFuY2VVaWQgPSAwO1xuXG4gICAgICAgIGZ1bmN0aW9uIFNsaWNrKGVsZW1lbnQsIHNldHRpbmdzKSB7XG5cbiAgICAgICAgICAgIHZhciBfID0gdGhpcywgZGF0YVNldHRpbmdzO1xuXG4gICAgICAgICAgICBfLmRlZmF1bHRzID0ge1xuICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHk6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFwcGVuZEFycm93czogJChlbGVtZW50KSxcbiAgICAgICAgICAgICAgICBhcHBlbmREb3RzOiAkKGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhc05hdkZvcjogbnVsbCxcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLXJvbGU9XCJub25lXCIgY2xhc3M9XCJzbGljay1wcmV2XCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCIgdGFiaW5kZXg9XCIwXCIgcm9sZT1cImJ1dHRvblwiPlByZXZpb3VzPC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLXJvbGU9XCJub25lXCIgY2xhc3M9XCJzbGljay1uZXh0XCIgYXJpYS1sYWJlbD1cIk5leHRcIiB0YWJpbmRleD1cIjBcIiByb2xlPVwiYnV0dG9uXCI+TmV4dDwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzUwcHgnLFxuICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlJyxcbiAgICAgICAgICAgICAgICBjdXN0b21QYWdpbmc6IGZ1bmN0aW9uKHNsaWRlciwgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1yb2xlPVwibm9uZVwiIHJvbGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIiAvPicpLnRleHQoaSArIDEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgZG90c0NsYXNzOiAnc2xpY2stZG90cycsXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVhc2luZzogJ2xpbmVhcicsXG4gICAgICAgICAgICAgICAgZWRnZUZyaWN0aW9uOiAwLjM1LFxuICAgICAgICAgICAgICAgIGZhZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogMCxcbiAgICAgICAgICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Gb2N1czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uRG90c0hvdmVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXNwb25kVG86ICd3aW5kb3cnLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IG51bGwsXG4gICAgICAgICAgICAgICAgcm93czogMSxcbiAgICAgICAgICAgICAgICBydGw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlOiAnJyxcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJSb3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIHNwZWVkOiA1MDAsXG4gICAgICAgICAgICAgICAgc3dpcGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc3dpcGVUb1NsaWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0b3VjaE1vdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgdG91Y2hUaHJlc2hvbGQ6IDUsXG4gICAgICAgICAgICAgICAgdXNlQ1NTOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVzZVRyYW5zZm9ybTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmVydGljYWxTd2lwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3YWl0Rm9yQW5pbWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDEwMDBcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIF8uaW5pdGlhbHMgPSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b1BsYXlUaW1lcjogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RGlyZWN0aW9uOiAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRMZWZ0OiBudWxsLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZTogMCxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IDEsXG4gICAgICAgICAgICAgICAgJGRvdHM6IG51bGwsXG4gICAgICAgICAgICAgICAgbGlzdFdpZHRoOiBudWxsLFxuICAgICAgICAgICAgICAgIGxpc3RIZWlnaHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgbG9hZEluZGV4OiAwLFxuICAgICAgICAgICAgICAgICRuZXh0QXJyb3c6IG51bGwsXG4gICAgICAgICAgICAgICAgJHByZXZBcnJvdzogbnVsbCxcbiAgICAgICAgICAgICAgICBzbGlkZUNvdW50OiBudWxsLFxuICAgICAgICAgICAgICAgIHNsaWRlV2lkdGg6IG51bGwsXG4gICAgICAgICAgICAgICAgJHNsaWRlVHJhY2s6IG51bGwsXG4gICAgICAgICAgICAgICAgJHNsaWRlczogbnVsbCxcbiAgICAgICAgICAgICAgICBzbGlkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICBzd2lwZUxlZnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgJGxpc3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgdG91Y2hPYmplY3Q6IHt9LFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybXNFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1bnNsaWNrZWQ6IGZhbHNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkLmV4dGVuZChfLCBfLmluaXRpYWxzKTtcblxuICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy5hbmltUHJvcCA9IG51bGw7XG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzID0gW107XG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5ncyA9IFtdO1xuICAgICAgICAgICAgXy5jc3NUcmFuc2l0aW9ucyA9IGZhbHNlO1xuICAgICAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5oaWRkZW4gPSAnaGlkZGVuJztcbiAgICAgICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIF8ucG9zaXRpb25Qcm9wID0gbnVsbDtcbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gbnVsbDtcbiAgICAgICAgICAgIF8ucm93Q291bnQgPSAxO1xuICAgICAgICAgICAgXy5zaG91bGRDbGljayA9IHRydWU7XG4gICAgICAgICAgICBfLiRzbGlkZXIgPSAkKGVsZW1lbnQpO1xuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBudWxsO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgXy53aW5kb3dXaWR0aCA9IDA7XG4gICAgICAgICAgICBfLndpbmRvd1RpbWVyID0gbnVsbDtcblxuICAgICAgICAgICAgZGF0YVNldHRpbmdzID0gJChlbGVtZW50KS5kYXRhKCdzbGljaycpIHx8IHt9O1xuXG4gICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5kZWZhdWx0cywgc2V0dGluZ3MsIGRhdGFTZXR0aW5ncyk7XG5cbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcblxuICAgICAgICAgICAgXy5vcmlnaW5hbFNldHRpbmdzID0gXy5vcHRpb25zO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50Lm1vekhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICdtb3pIaWRkZW4nO1xuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICdtb3p2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICd3ZWJraXRIaWRkZW4nO1xuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICd3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5hdXRvUGxheSA9ICQucHJveHkoXy5hdXRvUGxheSwgXyk7XG4gICAgICAgICAgICBfLmF1dG9QbGF5Q2xlYXIgPSAkLnByb3h5KF8uYXV0b1BsYXlDbGVhciwgXyk7XG4gICAgICAgICAgICBfLmF1dG9QbGF5SXRlcmF0b3IgPSAkLnByb3h5KF8uYXV0b1BsYXlJdGVyYXRvciwgXyk7XG4gICAgICAgICAgICBfLmNoYW5nZVNsaWRlID0gJC5wcm94eShfLmNoYW5nZVNsaWRlLCBfKTtcbiAgICAgICAgICAgIF8uY2xpY2tIYW5kbGVyID0gJC5wcm94eShfLmNsaWNrSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLnNlbGVjdEhhbmRsZXIgPSAkLnByb3h5KF8uc2VsZWN0SGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLnNldFBvc2l0aW9uID0gJC5wcm94eShfLnNldFBvc2l0aW9uLCBfKTtcbiAgICAgICAgICAgIF8uc3dpcGVIYW5kbGVyID0gJC5wcm94eShfLnN3aXBlSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLmRyYWdIYW5kbGVyID0gJC5wcm94eShfLmRyYWdIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8ua2V5SGFuZGxlciA9ICQucHJveHkoXy5rZXlIYW5kbGVyLCBfKTtcblxuICAgICAgICAgICAgXy5pbnN0YW5jZVVpZCA9IGluc3RhbmNlVWlkKys7XG5cbiAgICAgICAgICAgIC8vIEEgc2ltcGxlIHdheSB0byBjaGVjayBmb3IgSFRNTCBzdHJpbmdzXG4gICAgICAgICAgICAvLyBTdHJpY3QgSFRNTCByZWNvZ25pdGlvbiAobXVzdCBzdGFydCB3aXRoIDwpXG4gICAgICAgICAgICAvLyBFeHRyYWN0ZWQgZnJvbSBqUXVlcnkgdjEuMTEgc291cmNlXG4gICAgICAgICAgICBfLmh0bWxFeHByID0gL14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qKSQvO1xuXG5cbiAgICAgICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xuICAgICAgICAgICAgXy5pbml0KHRydWUpO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gU2xpY2s7XG5cbiAgICB9KCkpO1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFjdGl2YXRlQURBID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1hY3RpdmUnKS5hdHRyKHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICdmYWxzZSdcbiAgICAgICAgfSkuZmluZCgnYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0JykuYXR0cih7XG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnMCdcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFkZFNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrQWRkID0gZnVuY3Rpb24obWFya3VwLCBpbmRleCwgYWRkQmVmb3JlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGFkZEJlZm9yZSA9IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCB8fCAoaW5kZXggPj0gXy5zbGlkZUNvdW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCAmJiBfLiRzbGlkZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhZGRCZWZvcmUpIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QmVmb3JlKF8uJHNsaWRlcy5lcShpbmRleCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QWZ0ZXIoXy4kc2xpZGVzLmVxKGluZGV4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYWRkQmVmb3JlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFuaW1hdGVIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldEhlaWdodCA9IF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICBfLiRsaXN0LmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0XG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlU2xpZGUgPSBmdW5jdGlvbih0YXJnZXRMZWZ0LCBjYWxsYmFjaykge1xuXG4gICAgICAgIHZhciBhbmltUHJvcHMgPSB7fSxcbiAgICAgICAgICAgIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYW5pbWF0ZUhlaWdodCgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAtdGFyZ2V0TGVmdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICB0b3A6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gLShfLmN1cnJlbnRMZWZ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJCh7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1TdGFydDogXy5jdXJyZW50TGVmdFxuICAgICAgICAgICAgICAgIH0pLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBhbmltU3RhcnQ6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBfLm9wdGlvbnMuc3BlZWQsXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogXy5vcHRpb25zLmVhc2luZyxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogZnVuY3Rpb24obm93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3cgPSBNYXRoLmNlaWwobm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4LCAwcHgpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKDBweCwnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbigpO1xuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSBNYXRoLmNlaWwodGFyZ2V0TGVmdCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoJyArIHRhcmdldExlZnQgKyAncHgsIDBweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKDBweCwnICsgdGFyZ2V0TGVmdCArICdweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXy5kaXNhYmxlVHJhbnNpdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZUYXJnZXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBhc05hdkZvciA9IF8ub3B0aW9ucy5hc05hdkZvcjtcblxuICAgICAgICBpZiAoIGFzTmF2Rm9yICYmIGFzTmF2Rm9yICE9PSBudWxsICkge1xuICAgICAgICAgICAgYXNOYXZGb3IgPSAkKGFzTmF2Rm9yKS5ub3QoXy4kc2xpZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhc05hdkZvcjtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXNOYXZGb3IgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gXy5nZXROYXZUYXJnZXQoKTtcblxuICAgICAgICBpZiAoIGFzTmF2Rm9yICE9PSBudWxsICYmIHR5cGVvZiBhc05hdkZvciA9PT0gJ29iamVjdCcgKSB7XG4gICAgICAgICAgICBhc05hdkZvci5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMpLnNsaWNrKCdnZXRTbGljaycpO1xuICAgICAgICAgICAgICAgIGlmKCF0YXJnZXQudW5zbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zbGlkZUhhbmRsZXIoaW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFwcGx5VHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSBfLnRyYW5zZm9ybVR5cGUgKyAnICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9ICdvcGFjaXR5ICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcblxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICBfLmF1dG9QbGF5VGltZXIgPSBzZXRJbnRlcnZhbCggXy5hdXRvUGxheUl0ZXJhdG9yLCBfLm9wdGlvbnMuYXV0b3BsYXlTcGVlZCApO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5Q2xlYXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uYXV0b1BsYXlUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5SXRlcmF0b3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgaWYgKCAhXy5wYXVzZWQgJiYgIV8uaW50ZXJydXB0ZWQgJiYgIV8uZm9jdXNzZWQgKSB7XG5cbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSApIHtcblxuICAgICAgICAgICAgICAgIGlmICggXy5kaXJlY3Rpb24gPT09IDEgJiYgKCBfLmN1cnJlbnRTbGlkZSArIDEgKSA9PT0gKCBfLnNsaWRlQ291bnQgLSAxICkpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5kaXJlY3Rpb24gPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBfLmRpcmVjdGlvbiA9PT0gMCApIHtcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBfLmN1cnJlbnRTbGlkZSAtIDEgPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggc2xpZGVUbyApO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRBcnJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyA9ICQoXy5vcHRpb25zLnByZXZBcnJvdykuYWRkQ2xhc3MoJ3NsaWNrLWFycm93Jyk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cgPSAkKF8ub3B0aW9ucy5uZXh0QXJyb3cpLmFkZENsYXNzKCdzbGljay1hcnJvdycpO1xuXG4gICAgICAgICAgICBpZiggXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2staGlkZGVuJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXgnKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpZGRlbicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIHRhYmluZGV4Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5wcmVwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYXBwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGQoIF8uJG5leHRBcnJvdyApXG5cbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kaXNhYmxlZCc6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkRG90cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGksIGRvdDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWRvdHRlZCcpO1xuXG4gICAgICAgICAgICBkb3QgPSAkKCc8dWwgLz4nKS5hZGRDbGFzcyhfLm9wdGlvbnMuZG90c0NsYXNzKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8PSBfLmdldERvdENvdW50KCk7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGRvdC5hcHBlbmQoJCgnPGxpIC8+JykuYXBwZW5kKF8ub3B0aW9ucy5jdXN0b21QYWdpbmcuY2FsbCh0aGlzLCBfLCBpKSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRkb3RzID0gZG90LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmREb3RzKTtcblxuICAgICAgICAgICAgXy4kZG90cy5maW5kKCdsaScpLmZpcnN0KCkuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZE91dCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXMgPVxuICAgICAgICAgICAgXy4kc2xpZGVyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKCBfLm9wdGlvbnMuc2xpZGUgKyAnOm5vdCguc2xpY2stY2xvbmVkKScpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1zbGlkZScpO1xuXG4gICAgICAgIF8uc2xpZGVDb3VudCA9IF8uJHNsaWRlcy5sZW5ndGg7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICQoZWxlbWVudClcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIGluZGV4KVxuICAgICAgICAgICAgICAgIC5kYXRhKCdvcmlnaW5hbFN0eWxpbmcnLCAkKGVsZW1lbnQpLmF0dHIoJ3N0eWxlJykgfHwgJycpO1xuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlcicpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2sgPSAoXy5zbGlkZUNvdW50ID09PSAwKSA/XG4gICAgICAgICAgICAkKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykuYXBwZW5kVG8oXy4kc2xpZGVyKSA6XG4gICAgICAgICAgICBfLiRzbGlkZXMud3JhcEFsbCgnPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCIvPicpLnBhcmVudCgpO1xuXG4gICAgICAgIF8uJGxpc3QgPSBfLiRzbGlkZVRyYWNrLndyYXAoXG4gICAgICAgICAgICAnPGRpdiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBjbGFzcz1cInNsaWNrLWxpc3RcIi8+JykucGFyZW50KCk7XG4gICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKCdvcGFjaXR5JywgMCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlIHx8IF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlcikubm90KCdbc3JjXScpLmFkZENsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICAgICAgXy5zZXR1cEluZmluaXRlKCk7XG5cbiAgICAgICAgXy5idWlsZEFycm93cygpO1xuXG4gICAgICAgIF8uYnVpbGREb3RzKCk7XG5cbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG5cblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3Nlcyh0eXBlb2YgXy5jdXJyZW50U2xpZGUgPT09ICdudW1iZXInID8gXy5jdXJyZW50U2xpZGUgOiAwKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRyYWdnYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5hZGRDbGFzcygnZHJhZ2dhYmxlJyk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRSb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBhLCBiLCBjLCBuZXdTbGlkZXMsIG51bU9mU2xpZGVzLCBvcmlnaW5hbFNsaWRlcyxzbGlkZXNQZXJTZWN0aW9uO1xuXG4gICAgICAgIG5ld1NsaWRlcyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgb3JpZ2luYWxTbGlkZXMgPSBfLiRzbGlkZXIuY2hpbGRyZW4oKTtcblxuICAgICAgICBpZihfLm9wdGlvbnMucm93cyA+IDEpIHtcblxuICAgICAgICAgICAgc2xpZGVzUGVyU2VjdGlvbiA9IF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cgKiBfLm9wdGlvbnMucm93cztcbiAgICAgICAgICAgIG51bU9mU2xpZGVzID0gTWF0aC5jZWlsKFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzLmxlbmd0aCAvIHNsaWRlc1BlclNlY3Rpb25cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGZvcihhID0gMDsgYSA8IG51bU9mU2xpZGVzOyBhKyspe1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGZvcihiID0gMDsgYiA8IF8ub3B0aW9ucy5yb3dzOyBiKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBmb3IoYyA9IDA7IGMgPCBfLm9wdGlvbnMuc2xpZGVzUGVyUm93OyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAoYSAqIHNsaWRlc1BlclNlY3Rpb24gKyAoKGIgKiBfLm9wdGlvbnMuc2xpZGVzUGVyUm93KSArIGMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbFNsaWRlcy5nZXQodGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChvcmlnaW5hbFNsaWRlcy5nZXQodGFyZ2V0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2xpZGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3U2xpZGVzLmFwcGVuZENoaWxkKHNsaWRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKG5ld1NsaWRlcyk7XG4gICAgICAgICAgICBfLiRzbGlkZXIuY2hpbGRyZW4oKS5jaGlsZHJlbigpLmNoaWxkcmVuKClcbiAgICAgICAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzooMTAwIC8gXy5vcHRpb25zLnNsaWRlc1BlclJvdykgKyAnJScsXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ2lubGluZS1ibG9jaydcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoZWNrUmVzcG9uc2l2ZSA9IGZ1bmN0aW9uKGluaXRpYWwsIGZvcmNlVXBkYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYnJlYWtwb2ludCwgdGFyZ2V0QnJlYWtwb2ludCwgcmVzcG9uZFRvV2lkdGgsIHRyaWdnZXJCcmVha3BvaW50ID0gZmFsc2U7XG4gICAgICAgIHZhciBzbGlkZXJXaWR0aCA9IF8uJHNsaWRlci53aWR0aCgpO1xuICAgICAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgICAgICBpZiAoXy5yZXNwb25kVG8gPT09ICd3aW5kb3cnKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IHdpbmRvd1dpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ucmVzcG9uZFRvID09PSAnc2xpZGVyJykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSBzbGlkZXJXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLnJlc3BvbmRUbyA9PT0gJ21pbicpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gTWF0aC5taW4od2luZG93V2lkdGgsIHNsaWRlcldpZHRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLnJlc3BvbnNpdmUgJiZcbiAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aCAmJlxuICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IG51bGw7XG5cbiAgICAgICAgICAgIGZvciAoYnJlYWtwb2ludCBpbiBfLmJyZWFrcG9pbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludHMuaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3JpZ2luYWxTZXR0aW5ncy5tb2JpbGVGaXJzdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25kVG9XaWR0aCA8IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gXy5icmVha3BvaW50c1ticmVha3BvaW50XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25kVG9XaWR0aCA+IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gXy5icmVha3BvaW50c1ticmVha3BvaW50XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRhcmdldEJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5hY3RpdmVCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRCcmVha3BvaW50ICE9PSBfLmFjdGl2ZUJyZWFrcG9pbnQgfHwgZm9yY2VVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRTZXR0aW5nc1t0YXJnZXRCcmVha3BvaW50XSA9PT0gJ3Vuc2xpY2snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy51bnNsaWNrKHRhcmdldEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5vcmlnaW5hbFNldHRpbmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRTZXR0aW5nc1t0YXJnZXRCcmVha3BvaW50XSA9PT0gJ3Vuc2xpY2snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnVuc2xpY2sodGFyZ2V0QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5vcmlnaW5hbFNldHRpbmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5hY3RpdmVCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9IF8ub3JpZ2luYWxTZXR0aW5ncztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG9ubHkgdHJpZ2dlciBicmVha3BvaW50cyBkdXJpbmcgYW4gYWN0dWFsIGJyZWFrLiBub3Qgb24gaW5pdGlhbGl6ZS5cbiAgICAgICAgICAgIGlmKCAhaW5pdGlhbCAmJiB0cmlnZ2VyQnJlYWtwb2ludCAhPT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2JyZWFrcG9pbnQnLCBbXywgdHJpZ2dlckJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGFuZ2VTbGlkZSA9IGZ1bmN0aW9uKGV2ZW50LCBkb250QW5pbWF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLFxuICAgICAgICAgICAgaW5kZXhPZmZzZXQsIHNsaWRlT2Zmc2V0LCB1bmV2ZW5PZmZzZXQ7XG5cbiAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIGEgbGluaywgcHJldmVudCBkZWZhdWx0IGFjdGlvbi5cbiAgICAgICAgaWYoJHRhcmdldC5pcygnYScpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIG5vdCB0aGUgPGxpPiBlbGVtZW50IChpZTogYSBjaGlsZCksIGZpbmQgdGhlIDxsaT4uXG4gICAgICAgIGlmKCEkdGFyZ2V0LmlzKCdsaScpKSB7XG4gICAgICAgICAgICAkdGFyZ2V0ID0gJHRhcmdldC5jbG9zZXN0KCdsaScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdW5ldmVuT2Zmc2V0ID0gKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCk7XG4gICAgICAgIGluZGV4T2Zmc2V0ID0gdW5ldmVuT2Zmc2V0ID8gMCA6IChfLnNsaWRlQ291bnQgLSBfLmN1cnJlbnRTbGlkZSkgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgc3dpdGNoIChldmVudC5kYXRhLm1lc3NhZ2UpIHtcblxuICAgICAgICAgICAgY2FzZSAncHJldmlvdXMnOlxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0ID0gaW5kZXhPZmZzZXQgPT09IDAgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gaW5kZXhPZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jdXJyZW50U2xpZGUgLSBzbGlkZU9mZnNldCwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ25leHQnOlxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0ID0gaW5kZXhPZmZzZXQgPT09IDAgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBpbmRleE9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmN1cnJlbnRTbGlkZSArIHNsaWRlT2Zmc2V0LCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnaW5kZXgnOlxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGV2ZW50LmRhdGEuaW5kZXggPT09IDAgPyAwIDpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleCB8fCAkdGFyZ2V0LmluZGV4KCkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmNoZWNrTmF2aWdhYmxlKGluZGV4KSwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LmNoaWxkcmVuKCkudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hlY2tOYXZpZ2FibGUgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIG5hdmlnYWJsZXMsIHByZXZOYXZpZ2FibGU7XG5cbiAgICAgICAgbmF2aWdhYmxlcyA9IF8uZ2V0TmF2aWdhYmxlSW5kZXhlcygpO1xuICAgICAgICBwcmV2TmF2aWdhYmxlID0gMDtcbiAgICAgICAgaWYgKGluZGV4ID4gbmF2aWdhYmxlc1tuYXZpZ2FibGVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICBpbmRleCA9IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIG4gaW4gbmF2aWdhYmxlcykge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IG5hdmlnYWJsZXNbbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBwcmV2TmF2aWdhYmxlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJldk5hdmlnYWJsZSA9IG5hdmlnYWJsZXNbbl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyAmJiBfLiRkb3RzICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cylcbiAgICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKVxuICAgICAgICAgICAgICAgIC5vZmYoJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIub2ZmKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJyk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaGVuZC5zbGljayBtb3VzZXVwLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcblxuICAgICAgICBfLiRsaXN0Lm9mZignY2xpY2suc2xpY2snLCBfLmNsaWNrSGFuZGxlcik7XG5cbiAgICAgICAgJChkb2N1bWVudCkub2ZmKF8udmlzaWJpbGl0eUNoYW5nZSwgXy52aXNpYmlsaXR5KTtcblxuICAgICAgICBfLmNsZWFuVXBTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub2ZmKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5vcmllbnRhdGlvbkNoYW5nZSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZigncmVzaXplLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnJlc2l6ZSk7XG5cbiAgICAgICAgJCgnW2RyYWdnYWJsZSE9dHJ1ZV0nLCBfLiRzbGlkZVRyYWNrKS5vZmYoJ2RyYWdzdGFydCcsIF8ucHJldmVudERlZmF1bHQpO1xuXG4gICAgICAgICQod2luZG93KS5vZmYoJ2xvYWQuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ3JlYWR5LnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpO1xuICAgICAgICBfLiRsaXN0Lm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBSb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBvcmlnaW5hbFNsaWRlcztcblxuICAgICAgICBpZihfLm9wdGlvbnMucm93cyA+IDEpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVzLmNoaWxkcmVuKCkuY2hpbGRyZW4oKTtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICBfLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQob3JpZ2luYWxTbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLnNob3VsZENsaWNrID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKHJlZnJlc2gpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuXG4gICAgICAgIF8uY2xlYW5VcEV2ZW50cygpO1xuXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLmRldGFjaCgpO1xuXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXgnKVxuICAgICAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCcnKTtcblxuICAgICAgICAgICAgaWYgKCBfLmh0bWxFeHByLnRlc3QoIF8ub3B0aW9ucy5wcmV2QXJyb3cgKSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8uJG5leHRBcnJvd1xuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQgc2xpY2stYXJyb3cgc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleCcpXG4gICAgICAgICAgICAgICAgLmNzcygnZGlzcGxheScsJycpO1xuXG4gICAgICAgICAgICBpZiAoIF8uaHRtbEV4cHIudGVzdCggXy5vcHRpb25zLm5leHRBcnJvdyApKSB7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChfLiRzbGlkZXMpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1zbGljay1pbmRleCcpXG4gICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdzdHlsZScsICQodGhpcykuZGF0YSgnb3JpZ2luYWxTdHlsaW5nJykpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJGxpc3QuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5hcHBlbmQoXy4kc2xpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uY2xlYW5VcFJvd3MoKTtcblxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlcicpO1xuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stZG90dGVkJyk7XG5cbiAgICAgICAgXy51bnNsaWNrZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmKCFyZWZyZXNoKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignZGVzdHJveScsIFtfXSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZGlzYWJsZVRyYW5zaXRpb24gPSBmdW5jdGlvbihzbGlkZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7fTtcblxuICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gJyc7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5mYWRlU2xpZGUgPSBmdW5jdGlvbihzbGlkZUluZGV4LCBjYWxsYmFjaykge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5kaXNhYmxlVHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZU91dCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDJcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5maWx0ZXJTbGlkZXMgPSBTbGljay5wcm90b3R5cGUuc2xpY2tGaWx0ZXIgPSBmdW5jdGlvbihmaWx0ZXIpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGZpbHRlciAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZS5maWx0ZXIoZmlsdGVyKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcblxuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZvY3VzSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXJcbiAgICAgICAgICAgIC5vZmYoJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snKVxuICAgICAgICAgICAgLm9uKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJyxcbiAgICAgICAgICAgICAgICAnKjpub3QoLnNsaWNrLWFycm93KScsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdmFyICRzZiA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnBhdXNlT25Gb2N1cyApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5mb2N1c3NlZCA9ICRzZi5pcygnOmZvY3VzJyk7XG4gICAgICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sIDApO1xuXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0Q3VycmVudCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0N1cnJlbnRTbGlkZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgcmV0dXJuIF8uY3VycmVudFNsaWRlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXREb3RDb3VudCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICB2YXIgYnJlYWtQb2ludCA9IDA7XG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgdmFyIHBhZ2VyUXR5ID0gMDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XG4gICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBhZ2VyUXR5ID0gXy5zbGlkZUNvdW50O1xuICAgICAgICB9IGVsc2UgaWYoIV8ub3B0aW9ucy5hc05hdkZvcikge1xuICAgICAgICAgICAgcGFnZXJRdHkgPSAxICsgTWF0aC5jZWlsKChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYWdlclF0eSAtIDE7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldExlZnQgPSBmdW5jdGlvbihzbGlkZUluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgIHZlcnRpY2FsSGVpZ2h0LFxuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAwLFxuICAgICAgICAgICAgdGFyZ2V0U2xpZGU7XG5cbiAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgIHZlcnRpY2FsSGVpZ2h0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKF8uc2xpZGVXaWR0aCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogLTE7XG4gICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAodmVydGljYWxIZWlnaHQgKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAqIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsID4gXy5zbGlkZUNvdW50ICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggPiBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSAoc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudCkpICogXy5zbGlkZVdpZHRoKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSAoc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudCkpICogdmVydGljYWxIZWlnaHQpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpICogXy5zbGlkZVdpZHRoKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA+IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAtIF8uc2xpZGVDb3VudCkgKiBfLnNsaWRlV2lkdGg7XG4gICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAtIF8uc2xpZGVDb3VudCkgKiB2ZXJ0aWNhbEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ICs9IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpIC0gXy5zbGlkZVdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgKz0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIF8uc2xpZGVXaWR0aCkgKiAtMSkgKyBfLnNsaWRlT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xKSArIHZlcnRpY2FsT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy4kc2xpZGVUcmFjay53aWR0aCgpIC0gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAtIHRhcmdldFNsaWRlLndpZHRoKCkpICogLTE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IHx8IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uJHNsaWRlVHJhY2sud2lkdGgoKSAtIHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgLSB0YXJnZXRTbGlkZS53aWR0aCgpKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ICs9IChfLiRsaXN0LndpZHRoKCkgLSB0YXJnZXRTbGlkZS5vdXRlcldpZHRoKCkpIC8gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRMZWZ0O1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRPcHRpb24gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHZXRPcHRpb24gPSBmdW5jdGlvbihvcHRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIF8ub3B0aW9uc1tvcHRpb25dO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZpZ2FibGVJbmRleGVzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYnJlYWtQb2ludCA9IDAsXG4gICAgICAgICAgICBjb3VudGVyID0gMCxcbiAgICAgICAgICAgIGluZGV4ZXMgPSBbXSxcbiAgICAgICAgICAgIG1heDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xuICAgICAgICAgICAgY291bnRlciA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50ICogMjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgbWF4KSB7XG4gICAgICAgICAgICBpbmRleGVzLnB1c2goYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4ZXM7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWNrID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWRlQ291bnQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZXNUcmF2ZXJzZWQsIHN3aXBlZFNsaWRlLCBjZW50ZXJPZmZzZXQ7XG5cbiAgICAgICAgY2VudGVyT2Zmc2V0ID0gXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgPyBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKSA6IDA7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLXNsaWRlJykuZWFjaChmdW5jdGlvbihpbmRleCwgc2xpZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGUub2Zmc2V0TGVmdCAtIGNlbnRlck9mZnNldCArICgkKHNsaWRlKS5vdXRlcldpZHRoKCkgLyAyKSA+IChfLnN3aXBlTGVmdCAqIC0xKSkge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZWRTbGlkZSA9IHNsaWRlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNsaWRlc1RyYXZlcnNlZCA9IE1hdGguYWJzKCQoc3dpcGVkU2xpZGUpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSAtIF8uY3VycmVudFNsaWRlKSB8fCAxO1xuXG4gICAgICAgICAgICByZXR1cm4gc2xpZGVzVHJhdmVyc2VkO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdvVG8gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHb1RvID0gZnVuY3Rpb24oc2xpZGUsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCcsXG4gICAgICAgICAgICAgICAgaW5kZXg6IHBhcnNlSW50KHNsaWRlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBkb250QW5pbWF0ZSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihjcmVhdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoISQoXy4kc2xpZGVyKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuXG4gICAgICAgICAgICAkKF8uJHNsaWRlcikuYWRkQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XG5cbiAgICAgICAgICAgIF8uYnVpbGRSb3dzKCk7XG4gICAgICAgICAgICBfLmJ1aWxkT3V0KCk7XG4gICAgICAgICAgICBfLnNldFByb3BzKCk7XG4gICAgICAgICAgICBfLnN0YXJ0TG9hZCgpO1xuICAgICAgICAgICAgXy5sb2FkU2xpZGVyKCk7XG4gICAgICAgICAgICBfLmluaXRpYWxpemVFdmVudHMoKTtcbiAgICAgICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG4gICAgICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKHRydWUpO1xuICAgICAgICAgICAgXy5mb2N1c0hhbmRsZXIoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNyZWF0aW9uKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignaW5pdCcsIFtfXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uaW5pdEFEQSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG5cbiAgICAgICAgICAgIF8ucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QURBID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgXy4kc2xpZGVzLmFkZChfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1jbG9uZWQnKSkuYXR0cih7XG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgIH0pLmZpbmQoJ2EsIGlucHV0LCBidXR0b24sIHNlbGVjdCcpLmF0dHIoe1xuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmF0dHIoJ3JvbGUnLCAnbGlzdGJveCcpO1xuXG4gICAgICAgIF8uJHNsaWRlcy5ub3QoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAncm9sZSc6ICdvcHRpb24nLFxuICAgICAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogJ3NsaWNrLXNsaWRlJyArIF8uaW5zdGFuY2VVaWQgKyBpICsgJydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoXy4kZG90cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgXy4kZG90cy5hdHRyKCdyb2xlJywgJ3RhYmxpc3QnKS5maW5kKCdsaScpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3ByZXNlbnRhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogJ2ZhbHNlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtY29udHJvbHMnOiAnbmF2aWdhdGlvbicgKyBfLmluc3RhbmNlVWlkICsgaSArICcnLFxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2xpY2stc2xpZGUnICsgXy5pbnN0YW5jZVVpZCArIGkgKyAnJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZmlyc3QoKS5hdHRyKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKS5lbmQoKVxuICAgICAgICAgICAgICAgIC5maW5kKCdidXR0b24nKS5hdHRyKCdyb2xlJywgJ2J1dHRvbicpLmVuZCgpXG4gICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ2RpdicpLmF0dHIoJ3JvbGUnLCAndG9vbGJhcicpO1xuICAgICAgICB9XG4gICAgICAgIF8uYWN0aXZhdGVBREEoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdEFycm93RXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxuICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcbiAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJylcbiAgICAgICAgICAgICAgIC5vbignY2xpY2suc2xpY2snLCB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICduZXh0J1xuICAgICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdERvdEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKS5vbignY2xpY2suc2xpY2snLCB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4J1xuICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8ub3B0aW9ucy5wYXVzZU9uRG90c0hvdmVyID09PSB0cnVlICkge1xuXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRTbGlkZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5wYXVzZU9uSG92ZXIgKSB7XG5cbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSk7XG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRpYWxpemVFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcblxuICAgICAgICBfLmluaXREb3RFdmVudHMoKTtcbiAgICAgICAgXy5pbml0U2xpZGVFdmVudHMoKTtcblxuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ3N0YXJ0J1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdtb3ZlJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdlbmQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuXG4gICAgICAgIF8uJGxpc3Qub24oJ2NsaWNrLnNsaWNrJywgXy5jbGlja0hhbmRsZXIpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKF8udmlzaWJpbGl0eUNoYW5nZSwgJC5wcm94eShfLnZpc2liaWxpdHksIF8pKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub24oJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5vbignb3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5vcmllbnRhdGlvbkNoYW5nZSwgXykpO1xuXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCAkLnByb3h5KF8ucmVzaXplLCBfKSk7XG5cbiAgICAgICAgJCgnW2RyYWdnYWJsZSE9dHJ1ZV0nLCBfLiRzbGlkZVRyYWNrKS5vbignZHJhZ3N0YXJ0JywgXy5wcmV2ZW50RGVmYXVsdCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdsb2FkLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ3JlYWR5LnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFVJID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LnNob3coKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5zaG93KCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuc2hvdygpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUua2V5SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICAgLy9Eb250IHNsaWRlIGlmIHRoZSBjdXJzb3IgaXMgaW5zaWRlIHRoZSBmb3JtIGZpZWxkcyBhbmQgYXJyb3cga2V5cyBhcmUgcHJlc3NlZFxuICAgICAgICBpZighZXZlbnQudGFyZ2V0LnRhZ05hbWUubWF0Y2goJ1RFWFRBUkVBfElOUFVUfFNFTEVDVCcpKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICduZXh0JyA6ICAncHJldmlvdXMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICdwcmV2aW91cycgOiAnbmV4dCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmxhenlMb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgbG9hZFJhbmdlLCBjbG9uZVJhbmdlLCByYW5nZVN0YXJ0LCByYW5nZUVuZDtcblxuICAgICAgICBmdW5jdGlvbiBsb2FkSW1hZ2VzKGltYWdlc1Njb3BlKSB7XG5cbiAgICAgICAgICAgICQoJ2ltZ1tkYXRhLWxhenldJywgaW1hZ2VzU2NvcGUpLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2UgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNvdXJjZSA9ICQodGhpcykuYXR0cignZGF0YS1sYXp5JyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBvcGFjaXR5OiAwIH0sIDEwMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyYycsIGltYWdlU291cmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDEgfSwgMjAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtbGF6eScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgW18sIGltYWdlLCBpbWFnZVNvdXJjZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0ciggJ2RhdGEtbGF6eScgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnc2xpY2stbGF6eWxvYWQtZXJyb3InICk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5zcmMgPSBpbWFnZVNvdXJjZTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLmN1cnJlbnRTbGlkZSArIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpO1xuICAgICAgICAgICAgICAgIHJhbmdlRW5kID0gcmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0ID0gTWF0aC5tYXgoMCwgXy5jdXJyZW50U2xpZGUgLSAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSk7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSAyICsgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSkgKyBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgXy5jdXJyZW50U2xpZGUgOiBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgIHJhbmdlRW5kID0gTWF0aC5jZWlsKHJhbmdlU3RhcnQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZVN0YXJ0ID4gMCkgcmFuZ2VTdGFydC0tO1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZUVuZCA8PSBfLnNsaWRlQ291bnQpIHJhbmdlRW5kKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsb2FkUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJykuc2xpY2UocmFuZ2VTdGFydCwgcmFuZ2VFbmQpO1xuICAgICAgICBsb2FkSW1hZ2VzKGxvYWRSYW5nZSk7XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1jbG9uZWQnKS5zbGljZSgwLCBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPT09IDApIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNsb25lZCcpLnNsaWNlKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKiAtMSk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmxvYWRTbGlkZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICAgICAgXy5pbml0VUkoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAncHJvZ3Jlc3NpdmUnKSB7XG4gICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5uZXh0ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrTmV4dCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnbmV4dCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLm9yaWVudGF0aW9uQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucGF1c2UgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQYXVzZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcbiAgICAgICAgXy5wYXVzZWQgPSB0cnVlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wbGF5ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUGxheSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgIF8ub3B0aW9ucy5hdXRvcGxheSA9IHRydWU7XG4gICAgICAgIF8ucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIF8uZm9jdXNzZWQgPSBmYWxzZTtcbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wb3N0U2xpZGUgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiggIV8udW5zbGlja2VkICkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYWZ0ZXJDaGFuZ2UnLCBbXywgaW5kZXhdKTtcblxuICAgICAgICAgICAgXy5hbmltYXRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5pbml0QURBKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcmV2ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUHJldiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJldmlvdXMnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJvZ3Jlc3NpdmVMYXp5TG9hZCA9IGZ1bmN0aW9uKCB0cnlDb3VudCApIHtcblxuICAgICAgICB0cnlDb3VudCA9IHRyeUNvdW50IHx8IDE7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgJGltZ3NUb0xvYWQgPSAkKCAnaW1nW2RhdGEtbGF6eV0nLCBfLiRzbGlkZXIgKSxcbiAgICAgICAgICAgIGltYWdlLFxuICAgICAgICAgICAgaW1hZ2VTb3VyY2UsXG4gICAgICAgICAgICBpbWFnZVRvTG9hZDtcblxuICAgICAgICBpZiAoICRpbWdzVG9Mb2FkLmxlbmd0aCApIHtcblxuICAgICAgICAgICAgaW1hZ2UgPSAkaW1nc1RvTG9hZC5maXJzdCgpO1xuICAgICAgICAgICAgaW1hZ2VTb3VyY2UgPSBpbWFnZS5hdHRyKCdkYXRhLWxhenknKTtcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoICdzcmMnLCBpbWFnZVNvdXJjZSApXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWxhenknKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICkge1xuICAgICAgICAgICAgICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkZWQnLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcbiAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCB0cnlDb3VudCA8IDMgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIHRyeSB0byBsb2FkIHRoZSBpbWFnZSAzIHRpbWVzLFxuICAgICAgICAgICAgICAgICAgICAgKiBsZWF2ZSBhIHNsaWdodCBkZWxheSBzbyB3ZSBkb24ndCBnZXRcbiAgICAgICAgICAgICAgICAgICAgICogc2VydmVycyBibG9ja2luZyB0aGUgcmVxdWVzdC5cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCB0cnlDb3VudCArIDEgKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwICk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0ciggJ2RhdGEtbGF6eScgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnc2xpY2stbGF6eWxvYWQtZXJyb3InICk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcblxuICAgICAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQuc3JjID0gaW1hZ2VTb3VyY2U7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FsbEltYWdlc0xvYWRlZCcsIFsgXyBdKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiggaW5pdGlhbGl6aW5nICkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgY3VycmVudFNsaWRlLCBsYXN0VmlzaWJsZUluZGV4O1xuXG4gICAgICAgIGxhc3RWaXNpYmxlSW5kZXggPSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuXG4gICAgICAgIC8vIGluIG5vbi1pbmZpbml0ZSBzbGlkZXJzLCB3ZSBkb24ndCB3YW50IHRvIGdvIHBhc3QgdGhlXG4gICAgICAgIC8vIGxhc3QgdmlzaWJsZSBpbmRleC5cbiAgICAgICAgaWYoICFfLm9wdGlvbnMuaW5maW5pdGUgJiYgKCBfLmN1cnJlbnRTbGlkZSA+IGxhc3RWaXNpYmxlSW5kZXggKSkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBsYXN0VmlzaWJsZUluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbGVzcyBzbGlkZXMgdGhhbiB0byBzaG93LCBnbyB0byBzdGFydC5cbiAgICAgICAgaWYgKCBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcblxuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG5cbiAgICAgICAgXy5kZXN0cm95KHRydWUpO1xuXG4gICAgICAgICQuZXh0ZW5kKF8sIF8uaW5pdGlhbHMsIHsgY3VycmVudFNsaWRlOiBjdXJyZW50U2xpZGUgfSk7XG5cbiAgICAgICAgXy5pbml0KCk7XG5cbiAgICAgICAgaWYoICFpbml0aWFsaXppbmcgKSB7XG5cbiAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGN1cnJlbnRTbGlkZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZ2lzdGVyQnJlYWtwb2ludHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGJyZWFrcG9pbnQsIGN1cnJlbnRCcmVha3BvaW50LCBsLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZVNldHRpbmdzID0gXy5vcHRpb25zLnJlc3BvbnNpdmUgfHwgbnVsbDtcblxuICAgICAgICBpZiAoICQudHlwZShyZXNwb25zaXZlU2V0dGluZ3MpID09PSAnYXJyYXknICYmIHJlc3BvbnNpdmVTZXR0aW5ncy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gXy5vcHRpb25zLnJlc3BvbmRUbyB8fCAnd2luZG93JztcblxuICAgICAgICAgICAgZm9yICggYnJlYWtwb2ludCBpbiByZXNwb25zaXZlU2V0dGluZ3MgKSB7XG5cbiAgICAgICAgICAgICAgICBsID0gXy5icmVha3BvaW50cy5sZW5ndGgtMTtcbiAgICAgICAgICAgICAgICBjdXJyZW50QnJlYWtwb2ludCA9IHJlc3BvbnNpdmVTZXR0aW5nc1ticmVha3BvaW50XS5icmVha3BvaW50O1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNpdmVTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShicmVha3BvaW50KSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgYnJlYWtwb2ludHMgYW5kIGN1dCBvdXQgYW55IGV4aXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIG9uZXMgd2l0aCB0aGUgc2FtZSBicmVha3BvaW50IG51bWJlciwgd2UgZG9uJ3Qgd2FudCBkdXBlcy5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIGwgPj0gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBfLmJyZWFrcG9pbnRzW2xdICYmIF8uYnJlYWtwb2ludHNbbF0gPT09IGN1cnJlbnRCcmVha3BvaW50ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludHMuc3BsaWNlKGwsMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsLS07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnB1c2goY3VycmVudEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tjdXJyZW50QnJlYWtwb2ludF0gPSByZXNwb25zaXZlU2V0dGluZ3NbYnJlYWtwb2ludF0uc2V0dGluZ3M7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5icmVha3BvaW50cy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCBfLm9wdGlvbnMubW9iaWxlRmlyc3QgKSA/IGEtYiA6IGItYTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVpbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlcyA9XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKF8ub3B0aW9ucy5zbGlkZSlcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgXy5zbGlkZUNvdW50ID0gXy4kc2xpZGVzLmxlbmd0aDtcblxuICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50ICYmIF8uY3VycmVudFNsaWRlICE9PSAwKSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8uY3VycmVudFNsaWRlIC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBfLnJlZ2lzdGVyQnJlYWtwb2ludHMoKTtcblxuICAgICAgICBfLnNldFByb3BzKCk7XG4gICAgICAgIF8uc2V0dXBJbmZpbml0ZSgpO1xuICAgICAgICBfLmJ1aWxkQXJyb3dzKCk7XG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG4gICAgICAgIF8uaW5pdEFycm93RXZlbnRzKCk7XG4gICAgICAgIF8uYnVpbGREb3RzKCk7XG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICBfLmluaXREb3RFdmVudHMoKTtcbiAgICAgICAgXy5jbGVhblVwU2xpZGVFdmVudHMoKTtcbiAgICAgICAgXy5pbml0U2xpZGVFdmVudHMoKTtcblxuICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZShmYWxzZSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub24oJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKHR5cGVvZiBfLmN1cnJlbnRTbGlkZSA9PT0gJ251bWJlcicgPyBfLmN1cnJlbnRTbGlkZSA6IDApO1xuXG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcbiAgICAgICAgXy5mb2N1c0hhbmRsZXIoKTtcblxuICAgICAgICBfLnBhdXNlZCA9ICFfLm9wdGlvbnMuYXV0b3BsYXk7XG4gICAgICAgIF8uYXV0b1BsYXkoKTtcblxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcigncmVJbml0JywgW19dKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSAhPT0gXy53aW5kb3dXaWR0aCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF8ud2luZG93RGVsYXkpO1xuICAgICAgICAgICAgXy53aW5kb3dEZWxheSA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF8ud2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSgpO1xuICAgICAgICAgICAgICAgIGlmKCAhXy51bnNsaWNrZWQgKSB7IF8uc2V0UG9zaXRpb24oKTsgfVxuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZW1vdmVTbGlkZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1JlbW92ZSA9IGZ1bmN0aW9uKGluZGV4LCByZW1vdmVCZWZvcmUsIHJlbW92ZUFsbCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICByZW1vdmVCZWZvcmUgPSBpbmRleDtcbiAgICAgICAgICAgIGluZGV4ID0gcmVtb3ZlQmVmb3JlID09PSB0cnVlID8gMCA6IF8uc2xpZGVDb3VudCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IHJlbW92ZUJlZm9yZSA9PT0gdHJ1ZSA/IC0taW5kZXggOiBpbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPCAxIHx8IGluZGV4IDwgMCB8fCBpbmRleCA+IF8uc2xpZGVDb3VudCAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgaWYgKHJlbW92ZUFsbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbigpLnJlbW92ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmVxKGluZGV4KS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlcyA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5hcHBlbmQoXy4kc2xpZGVzKTtcblxuICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRDU1MgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHBvc2l0aW9uUHJvcHMgPSB7fSxcbiAgICAgICAgICAgIHgsIHk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gLXBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHggPSBfLnBvc2l0aW9uUHJvcCA9PSAnbGVmdCcgPyBNYXRoLmNlaWwocG9zaXRpb24pICsgJ3B4JyA6ICcwcHgnO1xuICAgICAgICB5ID0gXy5wb3NpdGlvblByb3AgPT0gJ3RvcCcgPyBNYXRoLmNlaWwocG9zaXRpb24pICsgJ3B4JyA6ICcwcHgnO1xuXG4gICAgICAgIHBvc2l0aW9uUHJvcHNbXy5wb3NpdGlvblByb3BdID0gcG9zaXRpb247XG5cbiAgICAgICAgaWYgKF8udHJhbnNmb3Jtc0VuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUHJvcHMgPSB7fTtcbiAgICAgICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKCcgKyB4ICsgJywgJyArIHkgKyAnKSc7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoJyArIHggKyAnLCAnICsgeSArICcsIDBweCknO1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldERpbWVuc2lvbnMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGxpc3QuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogKCcwcHggJyArIF8ub3B0aW9ucy5jZW50ZXJQYWRkaW5nKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kbGlzdC5oZWlnaHQoXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGxpc3QuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogKF8ub3B0aW9ucy5jZW50ZXJQYWRkaW5nICsgJyAwcHgnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy5saXN0V2lkdGggPSBfLiRsaXN0LndpZHRoKCk7XG4gICAgICAgIF8ubGlzdEhlaWdodCA9IF8uJGxpc3QuaGVpZ2h0KCk7XG5cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSAmJiBfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc2xpZGVXaWR0aCA9IE1hdGguY2VpbChfLmxpc3RXaWR0aCAvIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay53aWR0aChNYXRoLmNlaWwoKF8uc2xpZGVXaWR0aCAqIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmxlbmd0aCkpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLndpZHRoKDUwMDAgKiBfLnNsaWRlQ291bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zbGlkZVdpZHRoID0gTWF0aC5jZWlsKF8ubGlzdFdpZHRoKTtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suaGVpZ2h0KE1hdGguY2VpbCgoXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSkgKiBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5sZW5ndGgpKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2Zmc2V0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJXaWR0aCh0cnVlKSAtIF8uJHNsaWRlcy5maXJzdCgpLndpZHRoKCk7XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gZmFsc2UpIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLndpZHRoKF8uc2xpZGVXaWR0aCAtIG9mZnNldCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldEZhZGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0YXJnZXRMZWZ0O1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uc2xpZGVXaWR0aCAqIGluZGV4KSAqIC0xO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRhcmdldExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMixcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLmNzcyh7XG4gICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAxLFxuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxICYmIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0SGVpZ2h0ID0gXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgIF8uJGxpc3QuY3NzKCdoZWlnaHQnLCB0YXJnZXRIZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldE9wdGlvbiA9XG4gICAgU2xpY2sucHJvdG90eXBlLnNsaWNrU2V0T3B0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFjY2VwdHMgYXJndW1lbnRzIGluIGZvcm1hdCBvZjpcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIGNoYW5naW5nIGEgc2luZ2xlIG9wdGlvbidzIHZhbHVlOlxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsIG9wdGlvbiwgdmFsdWUsIHJlZnJlc2ggKVxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgY2hhbmdpbmcgYSBzZXQgb2YgcmVzcG9uc2l2ZSBvcHRpb25zOlxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsICdyZXNwb25zaXZlJywgW3t9LCAuLi5dLCByZWZyZXNoIClcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIHVwZGF0aW5nIG11bHRpcGxlIHZhbHVlcyBhdCBvbmNlIChub3QgcmVzcG9uc2l2ZSlcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCB7ICdvcHRpb24nOiB2YWx1ZSwgLi4uIH0sIHJlZnJlc2ggKVxuICAgICAgICAgKi9cblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGwsIGl0ZW0sIG9wdGlvbiwgdmFsdWUsIHJlZnJlc2ggPSBmYWxzZSwgdHlwZTtcblxuICAgICAgICBpZiggJC50eXBlKCBhcmd1bWVudHNbMF0gKSA9PT0gJ29iamVjdCcgKSB7XG5cbiAgICAgICAgICAgIG9wdGlvbiA9ICBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICByZWZyZXNoID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgdHlwZSA9ICdtdWx0aXBsZSc7XG5cbiAgICAgICAgfSBlbHNlIGlmICggJC50eXBlKCBhcmd1bWVudHNbMF0gKSA9PT0gJ3N0cmluZycgKSB7XG5cbiAgICAgICAgICAgIG9wdGlvbiA9ICBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICB2YWx1ZSA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIHJlZnJlc2ggPSBhcmd1bWVudHNbMl07XG5cbiAgICAgICAgICAgIGlmICggYXJndW1lbnRzWzBdID09PSAncmVzcG9uc2l2ZScgJiYgJC50eXBlKCBhcmd1bWVudHNbMV0gKSA9PT0gJ2FycmF5JyApIHtcblxuICAgICAgICAgICAgICAgIHR5cGUgPSAncmVzcG9uc2l2ZSc7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBhcmd1bWVudHNbMV0gIT09ICd1bmRlZmluZWQnICkge1xuXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdzaW5nbGUnO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdHlwZSA9PT0gJ3NpbmdsZScgKSB7XG5cbiAgICAgICAgICAgIF8ub3B0aW9uc1tvcHRpb25dID0gdmFsdWU7XG5cblxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSAnbXVsdGlwbGUnICkge1xuXG4gICAgICAgICAgICAkLmVhY2goIG9wdGlvbiAsIGZ1bmN0aW9uKCBvcHQsIHZhbCApIHtcblxuICAgICAgICAgICAgICAgIF8ub3B0aW9uc1tvcHRdID0gdmFsO1xuXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGUgPT09ICdyZXNwb25zaXZlJyApIHtcblxuICAgICAgICAgICAgZm9yICggaXRlbSBpbiB2YWx1ZSApIHtcblxuICAgICAgICAgICAgICAgIGlmKCAkLnR5cGUoIF8ub3B0aW9ucy5yZXNwb25zaXZlICkgIT09ICdhcnJheScgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUgPSBbIHZhbHVlW2l0ZW1dIF07XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGwgPSBfLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGgtMTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIHJlc3BvbnNpdmUgb2JqZWN0IGFuZCBzcGxpY2Ugb3V0IGR1cGxpY2F0ZXMuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKCBsID49IDAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMucmVzcG9uc2l2ZVtsXS5icmVha3BvaW50ID09PSB2YWx1ZVtpdGVtXS5icmVha3BvaW50ICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUuc3BsaWNlKGwsMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbC0tO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5wdXNoKCB2YWx1ZVtpdGVtXSApO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggcmVmcmVzaCApIHtcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcbiAgICAgICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLnNldERpbWVuc2lvbnMoKTtcblxuICAgICAgICBfLnNldEhlaWdodCgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc2V0Q1NTKF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zZXRGYWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignc2V0UG9zaXRpb24nLCBbX10pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRQcm9wcyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGU7XG5cbiAgICAgICAgXy5wb3NpdGlvblByb3AgPSBfLm9wdGlvbnMudmVydGljYWwgPT09IHRydWUgPyAndG9wJyA6ICdsZWZ0JztcblxuICAgICAgICBpZiAoXy5wb3NpdGlvblByb3AgPT09ICd0b3AnKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLXZlcnRpY2FsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLXZlcnRpY2FsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9keVN0eWxlLldlYmtpdFRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgYm9keVN0eWxlLk1velRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgYm9keVN0eWxlLm1zVHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnVzZUNTUyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY3NzVHJhbnNpdGlvbnMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuZmFkZSApIHtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIF8ub3B0aW9ucy56SW5kZXggPT09ICdudW1iZXInICkge1xuICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMuekluZGV4IDwgMyApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnpJbmRleCA9IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLm9wdGlvbnMuekluZGV4ID0gXy5kZWZhdWx0cy56SW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9keVN0eWxlLk9UcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdPVHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctby10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdPVHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUud2Via2l0UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUuTW96VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnTW96VHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctbW96LXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ01velRyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLk1velBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLndlYmtpdFRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ3dlYmtpdFRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLXdlYmtpdC10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICd3ZWJraXRUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS53ZWJraXRQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5tc1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ21zVHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctbXMtdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnbXNUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUubXNUcmFuc2Zvcm0gPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUudHJhbnNmb3JtICE9PSB1bmRlZmluZWQgJiYgXy5hbmltVHlwZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAndHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICd0cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICd0cmFuc2l0aW9uJztcbiAgICAgICAgfVxuICAgICAgICBfLnRyYW5zZm9ybXNFbmFibGVkID0gXy5vcHRpb25zLnVzZVRyYW5zZm9ybSAmJiAoXy5hbmltVHlwZSAhPT0gbnVsbCAmJiBfLmFuaW1UeXBlICE9PSBmYWxzZSk7XG4gICAgfTtcblxuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFNsaWRlQ2xhc3NlcyA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0LCBhbGxTbGlkZXMsIGluZGV4T2Zmc2V0LCByZW1haW5kZXI7XG5cbiAgICAgICAgYWxsU2xpZGVzID0gXy4kc2xpZGVyXG4gICAgICAgICAgICAuZmluZCgnLnNsaWNrLXNsaWRlJylcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stYWN0aXZlIHNsaWNrLWNlbnRlciBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAuZXEoaW5kZXgpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWN1cnJlbnQnKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0ID0gTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSBjZW50ZXJPZmZzZXQgJiYgaW5kZXggPD0gKF8uc2xpZGVDb3VudCAtIDEpIC0gY2VudGVyT2Zmc2V0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXggLSBjZW50ZXJPZmZzZXQsIGluZGV4ICsgY2VudGVyT2Zmc2V0ICsgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBpbmRleE9mZnNldCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQgLSBjZW50ZXJPZmZzZXQgKyAxLCBpbmRleE9mZnNldCArIGNlbnRlck9mZnNldCArIDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmVxKGFsbFNsaWRlcy5sZW5ndGggLSAxIC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBfLnNsaWRlQ291bnQgLSAxKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXEoXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgLmVxKGluZGV4KVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPD0gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4LCBpbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxsU2xpZGVzLmxlbmd0aCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHJlbWFpbmRlciA9IF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXggOiBpbmRleDtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAmJiAoXy5zbGlkZUNvdW50IC0gaW5kZXgpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0IC0gKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSByZW1haW5kZXIpLCBpbmRleE9mZnNldCArIHJlbWFpbmRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCwgaW5kZXhPZmZzZXQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ29uZGVtYW5kJykge1xuICAgICAgICAgICAgXy5sYXp5TG9hZCgpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldHVwSW5maW5pdGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBpLCBzbGlkZUluZGV4LCBpbmZpbml0ZUNvdW50O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5vcHRpb25zLmNlbnRlck1vZGUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIHNsaWRlSW5kZXggPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBfLnNsaWRlQ291bnQ7IGkgPiAoXy5zbGlkZUNvdW50IC1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQpOyBpIC09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IGkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4Jywgc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVwZW5kVG8oXy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoJ3NsaWNrLWNsb25lZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaW5maW5pdGVDb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4Jywgc2xpZGVJbmRleCArIF8uc2xpZGVDb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKS5hZGRDbGFzcygnc2xpY2stY2xvbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpLmZpbmQoJ1tpZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2lkJywgJycpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbnRlcnJ1cHQgPSBmdW5jdGlvbiggdG9nZ2xlICkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiggIXRvZ2dsZSApIHtcbiAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBfLmludGVycnVwdGVkID0gdG9nZ2xlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZWxlY3RIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHRhcmdldEVsZW1lbnQgPVxuICAgICAgICAgICAgJChldmVudC50YXJnZXQpLmlzKCcuc2xpY2stc2xpZGUnKSA/XG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpIDpcbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkucGFyZW50cygnLnNsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQodGFyZ2V0RWxlbWVudC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JykpO1xuXG4gICAgICAgIGlmICghaW5kZXgpIGluZGV4ID0gMDtcblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXMoaW5kZXgpO1xuICAgICAgICAgICAgXy5hc05hdkZvcihpbmRleCk7XG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8uc2xpZGVIYW5kbGVyKGluZGV4KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2xpZGVIYW5kbGVyID0gZnVuY3Rpb24oaW5kZXgsIHN5bmMsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIHRhcmdldFNsaWRlLCBhbmltU2xpZGUsIG9sZFNsaWRlLCBzbGlkZUxlZnQsIHRhcmdldExlZnQgPSBudWxsLFxuICAgICAgICAgICAgXyA9IHRoaXMsIG5hdlRhcmdldDtcblxuICAgICAgICBzeW5jID0gc3luYyB8fCBmYWxzZTtcblxuICAgICAgICBpZiAoXy5hbmltYXRpbmcgPT09IHRydWUgJiYgXy5vcHRpb25zLndhaXRGb3JBbmltYXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUgJiYgXy5jdXJyZW50U2xpZGUgPT09IGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5hc05hdkZvcihpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRTbGlkZSA9IGluZGV4O1xuICAgICAgICB0YXJnZXRMZWZ0ID0gXy5nZXRMZWZ0KHRhcmdldFNsaWRlKTtcbiAgICAgICAgc2xpZGVMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gXy5zd2lwZUxlZnQgPT09IG51bGwgPyBzbGlkZUxlZnQgOiBfLnN3aXBlTGVmdDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gZmFsc2UgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+IF8uZ2V0RG90Q291bnQoKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+IChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHNsaWRlTGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoXy5hdXRvUGxheVRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRTbGlkZSA8IDApIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSBfLnNsaWRlQ291bnQgLSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gXy5zbGlkZUNvdW50ICsgdGFyZ2V0U2xpZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0U2xpZGUgPj0gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gdGFyZ2V0U2xpZGUgLSBfLnNsaWRlQ291bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbmltU2xpZGUgPSB0YXJnZXRTbGlkZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uYW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYmVmb3JlQ2hhbmdlJywgW18sIF8uY3VycmVudFNsaWRlLCBhbmltU2xpZGVdKTtcblxuICAgICAgICBvbGRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IGFuaW1TbGlkZTtcblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3NlcyhfLmN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXNOYXZGb3IgKSB7XG5cbiAgICAgICAgICAgIG5hdlRhcmdldCA9IF8uZ2V0TmF2VGFyZ2V0KCk7XG4gICAgICAgICAgICBuYXZUYXJnZXQgPSBuYXZUYXJnZXQuc2xpY2soJ2dldFNsaWNrJyk7XG5cbiAgICAgICAgICAgIGlmICggbmF2VGFyZ2V0LnNsaWRlQ291bnQgPD0gbmF2VGFyZ2V0Lm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuICAgICAgICAgICAgICAgIG5hdlRhcmdldC5zZXRTbGlkZUNsYXNzZXMoXy5jdXJyZW50U2xpZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgXy5mYWRlU2xpZGVPdXQob2xkU2xpZGUpO1xuXG4gICAgICAgICAgICAgICAgXy5mYWRlU2xpZGUoYW5pbVNsaWRlLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXy5hbmltYXRlSGVpZ2h0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHRhcmdldExlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3RhcnRMb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LmhpZGUoKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5oaWRlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuaGlkZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVEaXJlY3Rpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgeERpc3QsIHlEaXN0LCByLCBzd2lwZUFuZ2xlLCBfID0gdGhpcztcblxuICAgICAgICB4RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRYIC0gXy50b3VjaE9iamVjdC5jdXJYO1xuICAgICAgICB5RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRZIC0gXy50b3VjaE9iamVjdC5jdXJZO1xuICAgICAgICByID0gTWF0aC5hdGFuMih5RGlzdCwgeERpc3QpO1xuXG4gICAgICAgIHN3aXBlQW5nbGUgPSBNYXRoLnJvdW5kKHIgKiAxODAgLyBNYXRoLlBJKTtcbiAgICAgICAgaWYgKHN3aXBlQW5nbGUgPCAwKSB7XG4gICAgICAgICAgICBzd2lwZUFuZ2xlID0gMzYwIC0gTWF0aC5hYnMoc3dpcGVBbmdsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPD0gNDUpICYmIChzd2lwZUFuZ2xlID49IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlIDw9IDM2MCkgJiYgKHN3aXBlQW5nbGUgPj0gMzE1KSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA+PSAxMzUpICYmIChzd2lwZUFuZ2xlIDw9IDIyNSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAncmlnaHQnIDogJ2xlZnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDM1KSAmJiAoc3dpcGVBbmdsZSA8PSAxMzUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdkb3duJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVFbmQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlQ291bnQsXG4gICAgICAgICAgICBkaXJlY3Rpb247XG5cbiAgICAgICAgXy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG4gICAgICAgIF8uc2hvdWxkQ2xpY2sgPSAoIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiAxMCApID8gZmFsc2UgOiB0cnVlO1xuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5jdXJYID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdlZGdlJywgW18sIF8uc3dpcGVEaXJlY3Rpb24oKSBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+PSBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlICkge1xuXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoIGRpcmVjdGlvbiApIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgKyBfLmdldFNsaWRlQ291bnQoKSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSArIF8uZ2V0U2xpZGVDb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgY2FzZSAndXAnOlxuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgLSBfLmdldFNsaWRlQ291bnQoKSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSAtIF8uZ2V0U2xpZGVDb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIGRpcmVjdGlvbiAhPSAndmVydGljYWwnICkge1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIHNsaWRlQ291bnQgKTtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3N3aXBlJywgW18sIGRpcmVjdGlvbiBdKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zdGFydFggIT09IF8udG91Y2hPYmplY3QuY3VyWCApIHtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBfLmN1cnJlbnRTbGlkZSApO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKChfLm9wdGlvbnMuc3dpcGUgPT09IGZhbHNlKSB8fCAoJ29udG91Y2hlbmQnIGluIGRvY3VtZW50ICYmIF8ub3B0aW9ucy5zd2lwZSA9PT0gZmFsc2UpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmRyYWdnYWJsZSA9PT0gZmFsc2UgJiYgZXZlbnQudHlwZS5pbmRleE9mKCdtb3VzZScpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5maW5nZXJDb3VudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aCA6IDE7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zXG4gICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QubWluU3dpcGUgPSBfLmxpc3RIZWlnaHQgLyBfLm9wdGlvbnNcbiAgICAgICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEuYWN0aW9uKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlU3RhcnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdtb3ZlJzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlTW92ZShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZUVuZChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZU1vdmUgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGVkZ2VXYXNIaXQgPSBmYWxzZSxcbiAgICAgICAgICAgIGN1ckxlZnQsIHN3aXBlRGlyZWN0aW9uLCBzd2lwZUxlbmd0aCwgcG9zaXRpb25PZmZzZXQsIHRvdWNoZXM7XG5cbiAgICAgICAgdG91Y2hlcyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCA/IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyA6IG51bGw7XG5cbiAgICAgICAgaWYgKCFfLmRyYWdnaW5nIHx8IHRvdWNoZXMgJiYgdG91Y2hlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1ckxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYO1xuICAgICAgICBfLnRvdWNoT2JqZWN0LmN1clkgPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clggLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCwgMikpKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KFxuICAgICAgICAgICAgICAgIE1hdGgucG93KF8udG91Y2hPYmplY3QuY3VyWSAtIF8udG91Y2hPYmplY3Quc3RhcnRZLCAyKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpcGVEaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgaWYgKHN3aXBlRGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkICYmIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiA0KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9zaXRpb25PZmZzZXQgPSAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAxIDogLTEpICogKF8udG91Y2hPYmplY3QuY3VyWCA+IF8udG91Y2hPYmplY3Quc3RhcnRYID8gMSA6IC0xKTtcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uT2Zmc2V0ID0gXy50b3VjaE9iamVjdC5jdXJZID4gXy50b3VjaE9iamVjdC5zdGFydFkgPyAxIDogLTE7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aDtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKChfLmN1cnJlbnRTbGlkZSA9PT0gMCAmJiBzd2lwZURpcmVjdGlvbiA9PT0gJ3JpZ2h0JykgfHwgKF8uY3VycmVudFNsaWRlID49IF8uZ2V0RG90Q291bnQoKSAmJiBzd2lwZURpcmVjdGlvbiA9PT0gJ2xlZnQnKSkge1xuICAgICAgICAgICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCAqIF8ub3B0aW9ucy5lZGdlRnJpY3Rpb247XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdC5lZGdlSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyBzd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgKHN3aXBlTGVuZ3RoICogKF8uJGxpc3QuaGVpZ2h0KCkgLyBfLmxpc3RXaWR0aCkpICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUgfHwgXy5vcHRpb25zLnRvdWNoTW92ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5zZXRDU1MoXy5zd2lwZUxlZnQpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZVN0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0b3VjaGVzO1xuXG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChfLnRvdWNoT2JqZWN0LmZpbmdlckNvdW50ICE9PSAxIHx8IF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5zdGFydFggPSBfLnRvdWNoT2JqZWN0LmN1clggPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzLnBhZ2VYIDogZXZlbnQuY2xpZW50WDtcbiAgICAgICAgXy50b3VjaE9iamVjdC5zdGFydFkgPSBfLnRvdWNoT2JqZWN0LmN1clkgPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzLnBhZ2VZIDogZXZlbnQuY2xpZW50WTtcblxuICAgICAgICBfLmRyYWdnaW5nID0gdHJ1ZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5maWx0ZXJTbGlkZXMgPSBTbGljay5wcm90b3R5cGUuc2xpY2tVbmZpbHRlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy4kc2xpZGVzQ2FjaGUgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcblxuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICAkKCcuc2xpY2stY2xvbmVkJywgXy4kc2xpZGVyKS5yZW1vdmUoKTtcblxuICAgICAgICBpZiAoXy4kZG90cykge1xuICAgICAgICAgICAgXy4kZG90cy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLiRwcmV2QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy4kbmV4dEFycm93ICYmIF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgICAgICAgICAgLmNzcygnd2lkdGgnLCAnJyk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVuc2xpY2sgPSBmdW5jdGlvbihmcm9tQnJlYWtwb2ludCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3Vuc2xpY2snLCBbXywgZnJvbUJyZWFrcG9pbnRdKTtcbiAgICAgICAgXy5kZXN0cm95KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVwZGF0ZUFycm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGNlbnRlck9mZnNldDtcblxuICAgICAgICBjZW50ZXJPZmZzZXQgPSBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiZcbiAgICAgICAgICAgIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiZcbiAgICAgICAgICAgICFfLm9wdGlvbnMuaW5maW5pdGUgKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPT09IDApIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSAxICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlRG90cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy4kZG90cyAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLiRkb3RzXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2xpJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgICAgICAgXy4kZG90c1xuICAgICAgICAgICAgICAgIC5maW5kKCdsaScpXG4gICAgICAgICAgICAgICAgLmVxKE1hdGguZmxvb3IoXy5jdXJyZW50U2xpZGUgLyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnZpc2liaWxpdHkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG5cbiAgICAgICAgICAgIGlmICggZG9jdW1lbnRbXy5oaWRkZW5dICkge1xuXG4gICAgICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgJC5mbi5zbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBvcHQgPSBhcmd1bWVudHNbMF0sXG4gICAgICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICAgICAgICAgIGwgPSBfLmxlbmd0aCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICByZXQ7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0ID09ICdvYmplY3QnIHx8IHR5cGVvZiBvcHQgPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgX1tpXS5zbGljayA9IG5ldyBTbGljayhfW2ldLCBvcHQpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldCA9IF9baV0uc2xpY2tbb3B0XS5hcHBseShfW2ldLnNsaWNrLCBhcmdzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmV0ICE9ICd1bmRlZmluZWQnKSByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfO1xuICAgIH07XG5cbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpRdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIiQoZnVuY3Rpb24oKXtcclxuICBcclxuICAkKCdmb3JtIC5pbnB1dC13cmFwIGlucHV0JykuZm9jdXNvdXQoZnVuY3Rpb24oKXtcclxuICAgIFxyXG4gICAgdmFyIHRleHRfdmFsID0gJCh0aGlzKS52YWwoKTtcclxuICAgIFxyXG4gICAgaWYodGV4dF92YWwgPT09IFwiXCIpIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaGFzLXZhbHVlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdoYXMtdmFsdWUnKTtcclxuICAgIH1cclxuICAgIFxyXG4gIH0pO1xyXG4gIFxyXG4gICQoJ2Zvcm0gLmlucHV0LXdyYXAgdGV4dGFyZWEnKS5mb2N1c291dChmdW5jdGlvbigpe1xyXG4gICAgXHJcbiAgICB2YXIgdGV4dF92YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgXHJcbiAgICBpZih0ZXh0X3ZhbCA9PT0gXCJcIikge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdoYXMtdmFsdWUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2hhcy12YWx1ZScpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfSk7XHJcbiAgXHJcbiAgXHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL2xhYmVscy5qcyIsIi8qKiFcclxuICogZWFzeS1waWUtY2hhcnRcclxuICogTGlnaHR3ZWlnaHQgcGx1Z2luIHRvIHJlbmRlciBzaW1wbGUsIGFuaW1hdGVkIGFuZCByZXRpbmEgb3B0aW1pemVkIHBpZSBjaGFydHNcclxuICpcclxuICogQGxpY2Vuc2VcclxuICogQGF1dGhvciBSb2JlcnQgRmxlaXNjaG1hbm4gPHJlbmRybzg3QGdtYWlsLmNvbT4gKGh0dHA6Ly9yb2JlcnQtZmxlaXNjaG1hbm4uZGUpXHJcbiAqIEB2ZXJzaW9uIDIuMS43XHJcbiAqKi9cclxuIWZ1bmN0aW9uKGEsYil7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sZnVuY3Rpb24oYSl7cmV0dXJuIGIoYSl9KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iKHJlcXVpcmUoXCJqcXVlcnlcIikpOmIoalF1ZXJ5KX0odGhpcyxmdW5jdGlvbihhKXt2YXIgYj1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTthLmFwcGVuZENoaWxkKGQpLFwib2JqZWN0XCI9PXR5cGVvZiBHX3ZtbENhbnZhc01hbmFnZXImJkdfdm1sQ2FudmFzTWFuYWdlci5pbml0RWxlbWVudChkKTt2YXIgZT1kLmdldENvbnRleHQoXCIyZFwiKTtkLndpZHRoPWQuaGVpZ2h0PWIuc2l6ZTt2YXIgZj0xO3dpbmRvdy5kZXZpY2VQaXhlbFJhdGlvPjEmJihmPXdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLGQuc3R5bGUud2lkdGg9ZC5zdHlsZS5oZWlnaHQ9W2Iuc2l6ZSxcInB4XCJdLmpvaW4oXCJcIiksZC53aWR0aD1kLmhlaWdodD1iLnNpemUqZixlLnNjYWxlKGYsZikpLGUudHJhbnNsYXRlKGIuc2l6ZS8yLGIuc2l6ZS8yKSxlLnJvdGF0ZSgoLTAuNStiLnJvdGF0ZS8xODApKk1hdGguUEkpO3ZhciBnPShiLnNpemUtYi5saW5lV2lkdGgpLzI7Yi5zY2FsZUNvbG9yJiZiLnNjYWxlTGVuZ3RoJiYoZy09Yi5zY2FsZUxlbmd0aCsyKSxEYXRlLm5vdz1EYXRlLm5vd3x8ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGV9O3ZhciBoPWZ1bmN0aW9uKGEsYixjKXtjPU1hdGgubWluKE1hdGgubWF4KC0xLGN8fDApLDEpO3ZhciBkPTA+PWM/ITA6ITE7ZS5iZWdpblBhdGgoKSxlLmFyYygwLDAsZywwLDIqTWF0aC5QSSpjLGQpLGUuc3Ryb2tlU3R5bGU9YSxlLmxpbmVXaWR0aD1iLGUuc3Ryb2tlKCl9LGk9ZnVuY3Rpb24oKXt2YXIgYSxjO2UubGluZVdpZHRoPTEsZS5maWxsU3R5bGU9Yi5zY2FsZUNvbG9yLGUuc2F2ZSgpO2Zvcih2YXIgZD0yNDtkPjA7LS1kKWQlNj09PTA/KGM9Yi5zY2FsZUxlbmd0aCxhPTApOihjPS42KmIuc2NhbGVMZW5ndGgsYT1iLnNjYWxlTGVuZ3RoLWMpLGUuZmlsbFJlY3QoLWIuc2l6ZS8yK2EsMCxjLDEpLGUucm90YXRlKE1hdGguUEkvMTIpO2UucmVzdG9yZSgpfSxqPWZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKGEpe3dpbmRvdy5zZXRUaW1lb3V0KGEsMWUzLzYwKX19KCksaz1mdW5jdGlvbigpe2Iuc2NhbGVDb2xvciYmaSgpLGIudHJhY2tDb2xvciYmaChiLnRyYWNrQ29sb3IsYi50cmFja1dpZHRofHxiLmxpbmVXaWR0aCwxKX07dGhpcy5nZXRDYW52YXM9ZnVuY3Rpb24oKXtyZXR1cm4gZH0sdGhpcy5nZXRDdHg9ZnVuY3Rpb24oKXtyZXR1cm4gZX0sdGhpcy5jbGVhcj1mdW5jdGlvbigpe2UuY2xlYXJSZWN0KGIuc2l6ZS8tMixiLnNpemUvLTIsYi5zaXplLGIuc2l6ZSl9LHRoaXMuZHJhdz1mdW5jdGlvbihhKXtiLnNjYWxlQ29sb3J8fGIudHJhY2tDb2xvcj9lLmdldEltYWdlRGF0YSYmZS5wdXRJbWFnZURhdGE/Yz9lLnB1dEltYWdlRGF0YShjLDAsMCk6KGsoKSxjPWUuZ2V0SW1hZ2VEYXRhKDAsMCxiLnNpemUqZixiLnNpemUqZikpOih0aGlzLmNsZWFyKCksaygpKTp0aGlzLmNsZWFyKCksZS5saW5lQ2FwPWIubGluZUNhcDt2YXIgZDtkPVwiZnVuY3Rpb25cIj09dHlwZW9mIGIuYmFyQ29sb3I/Yi5iYXJDb2xvcihhKTpiLmJhckNvbG9yLGgoZCxiLmxpbmVXaWR0aCxhLzEwMCl9LmJpbmQodGhpcyksdGhpcy5hbmltYXRlPWZ1bmN0aW9uKGEsYyl7dmFyIGQ9RGF0ZS5ub3coKTtiLm9uU3RhcnQoYSxjKTt2YXIgZT1mdW5jdGlvbigpe3ZhciBmPU1hdGgubWluKERhdGUubm93KCktZCxiLmFuaW1hdGUuZHVyYXRpb24pLGc9Yi5lYXNpbmcodGhpcyxmLGEsYy1hLGIuYW5pbWF0ZS5kdXJhdGlvbik7dGhpcy5kcmF3KGcpLGIub25TdGVwKGEsYyxnKSxmPj1iLmFuaW1hdGUuZHVyYXRpb24/Yi5vblN0b3AoYSxjKTpqKGUpfS5iaW5kKHRoaXMpO2ooZSl9LmJpbmQodGhpcyl9LGM9ZnVuY3Rpb24oYSxjKXt2YXIgZD17YmFyQ29sb3I6XCIjZWYxZTI1XCIsdHJhY2tDb2xvcjpcIiNmOWY5ZjlcIixzY2FsZUNvbG9yOlwiI2RmZTBlMFwiLHNjYWxlTGVuZ3RoOjUsbGluZUNhcDpcInJvdW5kXCIsbGluZVdpZHRoOjMsdHJhY2tXaWR0aDp2b2lkIDAsc2l6ZToxMTAscm90YXRlOjAsYW5pbWF0ZTp7ZHVyYXRpb246MWUzLGVuYWJsZWQ6ITB9LGVhc2luZzpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiBiLz1lLzIsMT5iP2QvMipiKmIrYzotZC8yKigtLWIqKGItMiktMSkrY30sb25TdGFydDpmdW5jdGlvbihhLGIpe30sb25TdGVwOmZ1bmN0aW9uKGEsYixjKXt9LG9uU3RvcDpmdW5jdGlvbihhLGIpe319O2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiKWQucmVuZGVyZXI9YjtlbHNle2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBTVkdSZW5kZXJlcil0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgbG9hZCBlaXRoZXIgdGhlIFNWRy0gb3IgdGhlIENhbnZhc1JlbmRlcmVyXCIpO2QucmVuZGVyZXI9U1ZHUmVuZGVyZXJ9dmFyIGU9e30sZj0wLGc9ZnVuY3Rpb24oKXt0aGlzLmVsPWEsdGhpcy5vcHRpb25zPWU7Zm9yKHZhciBiIGluIGQpZC5oYXNPd25Qcm9wZXJ0eShiKSYmKGVbYl09YyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGNbYl0/Y1tiXTpkW2JdLFwiZnVuY3Rpb25cIj09dHlwZW9mIGVbYl0mJihlW2JdPWVbYl0uYmluZCh0aGlzKSkpO1wic3RyaW5nXCI9PXR5cGVvZiBlLmVhc2luZyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGpRdWVyeSYmalF1ZXJ5LmlzRnVuY3Rpb24oalF1ZXJ5LmVhc2luZ1tlLmVhc2luZ10pP2UuZWFzaW5nPWpRdWVyeS5lYXNpbmdbZS5lYXNpbmddOmUuZWFzaW5nPWQuZWFzaW5nLFwibnVtYmVyXCI9PXR5cGVvZiBlLmFuaW1hdGUmJihlLmFuaW1hdGU9e2R1cmF0aW9uOmUuYW5pbWF0ZSxlbmFibGVkOiEwfSksXCJib29sZWFuXCIhPXR5cGVvZiBlLmFuaW1hdGV8fGUuYW5pbWF0ZXx8KGUuYW5pbWF0ZT17ZHVyYXRpb246MWUzLGVuYWJsZWQ6ZS5hbmltYXRlfSksdGhpcy5yZW5kZXJlcj1uZXcgZS5yZW5kZXJlcihhLGUpLHRoaXMucmVuZGVyZXIuZHJhdyhmKSxhLmRhdGFzZXQmJmEuZGF0YXNldC5wZXJjZW50P3RoaXMudXBkYXRlKHBhcnNlRmxvYXQoYS5kYXRhc2V0LnBlcmNlbnQpKTphLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBlcmNlbnRcIikmJnRoaXMudXBkYXRlKHBhcnNlRmxvYXQoYS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBlcmNlbnRcIikpKX0uYmluZCh0aGlzKTt0aGlzLnVwZGF0ZT1mdW5jdGlvbihhKXtyZXR1cm4gYT1wYXJzZUZsb2F0KGEpLGUuYW5pbWF0ZS5lbmFibGVkP3RoaXMucmVuZGVyZXIuYW5pbWF0ZShmLGEpOnRoaXMucmVuZGVyZXIuZHJhdyhhKSxmPWEsdGhpc30uYmluZCh0aGlzKSx0aGlzLmRpc2FibGVBbmltYXRpb249ZnVuY3Rpb24oKXtyZXR1cm4gZS5hbmltYXRlLmVuYWJsZWQ9ITEsdGhpc30sdGhpcy5lbmFibGVBbmltYXRpb249ZnVuY3Rpb24oKXtyZXR1cm4gZS5hbmltYXRlLmVuYWJsZWQ9ITAsdGhpc30sZygpfTthLmZuLmVhc3lQaWVDaGFydD1mdW5jdGlvbihiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ7YS5kYXRhKHRoaXMsXCJlYXN5UGllQ2hhcnRcIil8fChkPWEuZXh0ZW5kKHt9LGIsYSh0aGlzKS5kYXRhKCkpLGEuZGF0YSh0aGlzLFwiZWFzeVBpZUNoYXJ0XCIsbmV3IGModGhpcyxkKSkpfSl9fSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3ZlbmRvcnMvY2hhcnQuanMiLCIkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAkKCcuY2hhcnQnKS5lYXN5UGllQ2hhcnQoe1xyXG4gICAgYW5pbWF0ZTogMjAwMCxcclxuICAgIGVhc2luZzogJ2Vhc2VPdXRCb3VuY2UnLFxyXG4gICAgc2NhbGVDb2xvcjogZmFsc2UsXHJcbiAgICB0cmFja0NvbG9yOiAnI2VlZWVlZScsXHJcbiAgICBiYXJDb2xvcjogJyMzOWI1NGEnLFxyXG4gICAgbGluZVdpZHRoOiAxNSxcclxuICAgIGxpbmVDYXA6ICdzcXVhcmUnLFxyXG4gICAgc2l6ZTogMTQwLFxyXG4gICAgb25TdGVwOiBmdW5jdGlvbihmcm9tLCB0bywgcGVyY2VudCkge1xyXG4gICAgICAkKHRoaXMuZWwpLmZpbmQoJy5wZXJjZW50JykudGV4dChNYXRoLnJvdW5kKHBlcmNlbnQpKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL3N0YXRzLWNoYXJ0LmpzIiwiJChmdW5jdGlvbigpIHtcclxuXHJcbiAgJChcIiN0YWJsZS1zdGFuZGluZ3NcIikudGFibGVzb3J0ZXIoe1xyXG4gICAgc29ydExpc3Q6IFtbMCwgMF1dXHJcbiAgfSk7XHJcblxyXG5cclxufSlcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvdGFibGVzb3J0LmpzIiwiXG4oZnVuY3Rpb24oJCl7JC5leHRlbmQoe3RhYmxlc29ydGVyOm5ld1xuZnVuY3Rpb24oKXt2YXIgcGFyc2Vycz1bXSx3aWRnZXRzPVtdO3RoaXMuZGVmYXVsdHM9e2Nzc0hlYWRlcjpcImhlYWRlclwiLGNzc0FzYzpcImhlYWRlclNvcnRVcFwiLGNzc0Rlc2M6XCJoZWFkZXJTb3J0RG93blwiLGNzc0NoaWxkUm93OlwiZXhwYW5kLWNoaWxkXCIsc29ydEluaXRpYWxPcmRlcjpcImFzY1wiLHNvcnRNdWx0aVNvcnRLZXk6XCJzaGlmdEtleVwiLHNvcnRGb3JjZTpudWxsLHNvcnRBcHBlbmQ6bnVsbCxzb3J0TG9jYWxlQ29tcGFyZTp0cnVlLHRleHRFeHRyYWN0aW9uOlwic2ltcGxlXCIscGFyc2Vyczp7fSx3aWRnZXRzOltdLHdpZGdldFplYnJhOntjc3M6W1wiZXZlblwiLFwib2RkXCJdfSxoZWFkZXJzOnt9LHdpZHRoRml4ZWQ6ZmFsc2UsY2FuY2VsU2VsZWN0aW9uOnRydWUsc29ydExpc3Q6W10saGVhZGVyTGlzdDpbXSxkYXRlRm9ybWF0OlwidXNcIixkZWNpbWFsOicvXFwufFxcLC9nJyxvblJlbmRlckhlYWRlcjpudWxsLHNlbGVjdG9ySGVhZGVyczondGhlYWQgdGgnLGRlYnVnOmZhbHNlfTtmdW5jdGlvbiBiZW5jaG1hcmsocyxkKXtsb2cocytcIixcIisobmV3IERhdGUoKS5nZXRUaW1lKCktZC5nZXRUaW1lKCkpK1wibXNcIik7fXRoaXMuYmVuY2htYXJrPWJlbmNobWFyaztmdW5jdGlvbiBsb2cocyl7aWYodHlwZW9mIGNvbnNvbGUhPVwidW5kZWZpbmVkXCImJnR5cGVvZiBjb25zb2xlLmRlYnVnIT1cInVuZGVmaW5lZFwiKXtjb25zb2xlLmxvZyhzKTt9ZWxzZXthbGVydChzKTt9fWZ1bmN0aW9uIGJ1aWxkUGFyc2VyQ2FjaGUodGFibGUsJGhlYWRlcnMpe2lmKHRhYmxlLmNvbmZpZy5kZWJ1Zyl7dmFyIHBhcnNlcnNEZWJ1Zz1cIlwiO31pZih0YWJsZS50Qm9kaWVzLmxlbmd0aD09MClyZXR1cm47dmFyIHJvd3M9dGFibGUudEJvZGllc1swXS5yb3dzO2lmKHJvd3NbMF0pe3ZhciBsaXN0PVtdLGNlbGxzPXJvd3NbMF0uY2VsbHMsbD1jZWxscy5sZW5ndGg7Zm9yKHZhciBpPTA7aTxsO2krKyl7dmFyIHA9ZmFsc2U7aWYoJC5tZXRhZGF0YSYmKCQoJGhlYWRlcnNbaV0pLm1ldGFkYXRhKCkmJiQoJGhlYWRlcnNbaV0pLm1ldGFkYXRhKCkuc29ydGVyKSl7cD1nZXRQYXJzZXJCeUlkKCQoJGhlYWRlcnNbaV0pLm1ldGFkYXRhKCkuc29ydGVyKTt9ZWxzZSBpZigodGFibGUuY29uZmlnLmhlYWRlcnNbaV0mJnRhYmxlLmNvbmZpZy5oZWFkZXJzW2ldLnNvcnRlcikpe3A9Z2V0UGFyc2VyQnlJZCh0YWJsZS5jb25maWcuaGVhZGVyc1tpXS5zb3J0ZXIpO31pZighcCl7cD1kZXRlY3RQYXJzZXJGb3JDb2x1bW4odGFibGUscm93cywtMSxpKTt9aWYodGFibGUuY29uZmlnLmRlYnVnKXtwYXJzZXJzRGVidWcrPVwiY29sdW1uOlwiK2krXCIgcGFyc2VyOlwiK3AuaWQrXCJcXG5cIjt9bGlzdC5wdXNoKHApO319aWYodGFibGUuY29uZmlnLmRlYnVnKXtsb2cocGFyc2Vyc0RlYnVnKTt9cmV0dXJuIGxpc3Q7fTtmdW5jdGlvbiBkZXRlY3RQYXJzZXJGb3JDb2x1bW4odGFibGUscm93cyxyb3dJbmRleCxjZWxsSW5kZXgpe3ZhciBsPXBhcnNlcnMubGVuZ3RoLG5vZGU9ZmFsc2Usbm9kZVZhbHVlPWZhbHNlLGtlZXBMb29raW5nPXRydWU7d2hpbGUobm9kZVZhbHVlPT0nJyYma2VlcExvb2tpbmcpe3Jvd0luZGV4Kys7aWYocm93c1tyb3dJbmRleF0pe25vZGU9Z2V0Tm9kZUZyb21Sb3dBbmRDZWxsSW5kZXgocm93cyxyb3dJbmRleCxjZWxsSW5kZXgpO25vZGVWYWx1ZT10cmltQW5kR2V0Tm9kZVRleHQodGFibGUuY29uZmlnLG5vZGUpO2lmKHRhYmxlLmNvbmZpZy5kZWJ1Zyl7bG9nKCdDaGVja2luZyBpZiB2YWx1ZSB3YXMgZW1wdHkgb24gcm93Oicrcm93SW5kZXgpO319ZWxzZXtrZWVwTG9va2luZz1mYWxzZTt9fWZvcih2YXIgaT0xO2k8bDtpKyspe2lmKHBhcnNlcnNbaV0uaXMobm9kZVZhbHVlLHRhYmxlLG5vZGUpKXtyZXR1cm4gcGFyc2Vyc1tpXTt9fXJldHVybiBwYXJzZXJzWzBdO31mdW5jdGlvbiBnZXROb2RlRnJvbVJvd0FuZENlbGxJbmRleChyb3dzLHJvd0luZGV4LGNlbGxJbmRleCl7cmV0dXJuIHJvd3Nbcm93SW5kZXhdLmNlbGxzW2NlbGxJbmRleF07fWZ1bmN0aW9uIHRyaW1BbmRHZXROb2RlVGV4dChjb25maWcsbm9kZSl7cmV0dXJuICQudHJpbShnZXRFbGVtZW50VGV4dChjb25maWcsbm9kZSkpO31mdW5jdGlvbiBnZXRQYXJzZXJCeUlkKG5hbWUpe3ZhciBsPXBhcnNlcnMubGVuZ3RoO2Zvcih2YXIgaT0wO2k8bDtpKyspe2lmKHBhcnNlcnNbaV0uaWQudG9Mb3dlckNhc2UoKT09bmFtZS50b0xvd2VyQ2FzZSgpKXtyZXR1cm4gcGFyc2Vyc1tpXTt9fXJldHVybiBmYWxzZTt9ZnVuY3Rpb24gYnVpbGRDYWNoZSh0YWJsZSl7aWYodGFibGUuY29uZmlnLmRlYnVnKXt2YXIgY2FjaGVUaW1lPW5ldyBEYXRlKCk7fXZhciB0b3RhbFJvd3M9KHRhYmxlLnRCb2RpZXNbMF0mJnRhYmxlLnRCb2RpZXNbMF0ucm93cy5sZW5ndGgpfHwwLHRvdGFsQ2VsbHM9KHRhYmxlLnRCb2RpZXNbMF0ucm93c1swXSYmdGFibGUudEJvZGllc1swXS5yb3dzWzBdLmNlbGxzLmxlbmd0aCl8fDAscGFyc2Vycz10YWJsZS5jb25maWcucGFyc2VycyxjYWNoZT17cm93OltdLG5vcm1hbGl6ZWQ6W119O2Zvcih2YXIgaT0wO2k8dG90YWxSb3dzOysraSl7dmFyIGM9JCh0YWJsZS50Qm9kaWVzWzBdLnJvd3NbaV0pLGNvbHM9W107aWYoYy5oYXNDbGFzcyh0YWJsZS5jb25maWcuY3NzQ2hpbGRSb3cpKXtjYWNoZS5yb3dbY2FjaGUucm93Lmxlbmd0aC0xXT1jYWNoZS5yb3dbY2FjaGUucm93Lmxlbmd0aC0xXS5hZGQoYyk7Y29udGludWU7fWNhY2hlLnJvdy5wdXNoKGMpO2Zvcih2YXIgaj0wO2o8dG90YWxDZWxsczsrK2ope2NvbHMucHVzaChwYXJzZXJzW2pdLmZvcm1hdChnZXRFbGVtZW50VGV4dCh0YWJsZS5jb25maWcsY1swXS5jZWxsc1tqXSksdGFibGUsY1swXS5jZWxsc1tqXSkpO31jb2xzLnB1c2goY2FjaGUubm9ybWFsaXplZC5sZW5ndGgpO2NhY2hlLm5vcm1hbGl6ZWQucHVzaChjb2xzKTtjb2xzPW51bGw7fTtpZih0YWJsZS5jb25maWcuZGVidWcpe2JlbmNobWFyayhcIkJ1aWxkaW5nIGNhY2hlIGZvciBcIit0b3RhbFJvd3MrXCIgcm93czpcIixjYWNoZVRpbWUpO31yZXR1cm4gY2FjaGU7fTtmdW5jdGlvbiBnZXRFbGVtZW50VGV4dChjb25maWcsbm9kZSl7dmFyIHRleHQ9XCJcIjtpZighbm9kZSlyZXR1cm5cIlwiO2lmKCFjb25maWcuc3VwcG9ydHNUZXh0Q29udGVudCljb25maWcuc3VwcG9ydHNUZXh0Q29udGVudD1ub2RlLnRleHRDb250ZW50fHxmYWxzZTtpZihjb25maWcudGV4dEV4dHJhY3Rpb249PVwic2ltcGxlXCIpe2lmKGNvbmZpZy5zdXBwb3J0c1RleHRDb250ZW50KXt0ZXh0PW5vZGUudGV4dENvbnRlbnQ7fWVsc2V7aWYobm9kZS5jaGlsZE5vZGVzWzBdJiZub2RlLmNoaWxkTm9kZXNbMF0uaGFzQ2hpbGROb2RlcygpKXt0ZXh0PW5vZGUuY2hpbGROb2Rlc1swXS5pbm5lckhUTUw7fWVsc2V7dGV4dD1ub2RlLmlubmVySFRNTDt9fX1lbHNle2lmKHR5cGVvZihjb25maWcudGV4dEV4dHJhY3Rpb24pPT1cImZ1bmN0aW9uXCIpe3RleHQ9Y29uZmlnLnRleHRFeHRyYWN0aW9uKG5vZGUpO31lbHNle3RleHQ9JChub2RlKS50ZXh0KCk7fX1yZXR1cm4gdGV4dDt9ZnVuY3Rpb24gYXBwZW5kVG9UYWJsZSh0YWJsZSxjYWNoZSl7aWYodGFibGUuY29uZmlnLmRlYnVnKXt2YXIgYXBwZW5kVGltZT1uZXcgRGF0ZSgpfXZhciBjPWNhY2hlLHI9Yy5yb3csbj1jLm5vcm1hbGl6ZWQsdG90YWxSb3dzPW4ubGVuZ3RoLGNoZWNrQ2VsbD0oblswXS5sZW5ndGgtMSksdGFibGVCb2R5PSQodGFibGUudEJvZGllc1swXSkscm93cz1bXTtmb3IodmFyIGk9MDtpPHRvdGFsUm93cztpKyspe3ZhciBwb3M9bltpXVtjaGVja0NlbGxdO3Jvd3MucHVzaChyW3Bvc10pO2lmKCF0YWJsZS5jb25maWcuYXBwZW5kZXIpe3ZhciBsPXJbcG9zXS5sZW5ndGg7Zm9yKHZhciBqPTA7ajxsO2orKyl7dGFibGVCb2R5WzBdLmFwcGVuZENoaWxkKHJbcG9zXVtqXSk7fX19aWYodGFibGUuY29uZmlnLmFwcGVuZGVyKXt0YWJsZS5jb25maWcuYXBwZW5kZXIodGFibGUscm93cyk7fXJvd3M9bnVsbDtpZih0YWJsZS5jb25maWcuZGVidWcpe2JlbmNobWFyayhcIlJlYnVpbHQgdGFibGU6XCIsYXBwZW5kVGltZSk7fWFwcGx5V2lkZ2V0KHRhYmxlKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7JCh0YWJsZSkudHJpZ2dlcihcInNvcnRFbmRcIik7fSwwKTt9O2Z1bmN0aW9uIGJ1aWxkSGVhZGVycyh0YWJsZSl7aWYodGFibGUuY29uZmlnLmRlYnVnKXt2YXIgdGltZT1uZXcgRGF0ZSgpO312YXIgbWV0YT0oJC5tZXRhZGF0YSk/dHJ1ZTpmYWxzZTt2YXIgaGVhZGVyX2luZGV4PWNvbXB1dGVUYWJsZUhlYWRlckNlbGxJbmRleGVzKHRhYmxlKTskdGFibGVIZWFkZXJzPSQodGFibGUuY29uZmlnLnNlbGVjdG9ySGVhZGVycyx0YWJsZSkuZWFjaChmdW5jdGlvbihpbmRleCl7dGhpcy5jb2x1bW49aGVhZGVyX2luZGV4W3RoaXMucGFyZW50Tm9kZS5yb3dJbmRleCtcIi1cIit0aGlzLmNlbGxJbmRleF07dGhpcy5vcmRlcj1mb3JtYXRTb3J0aW5nT3JkZXIodGFibGUuY29uZmlnLnNvcnRJbml0aWFsT3JkZXIpO3RoaXMuY291bnQ9dGhpcy5vcmRlcjtpZihjaGVja0hlYWRlck1ldGFkYXRhKHRoaXMpfHxjaGVja0hlYWRlck9wdGlvbnModGFibGUsaW5kZXgpKXRoaXMuc29ydERpc2FibGVkPXRydWU7aWYoY2hlY2tIZWFkZXJPcHRpb25zU29ydGluZ0xvY2tlZCh0YWJsZSxpbmRleCkpdGhpcy5vcmRlcj10aGlzLmxvY2tlZE9yZGVyPWNoZWNrSGVhZGVyT3B0aW9uc1NvcnRpbmdMb2NrZWQodGFibGUsaW5kZXgpO2lmKCF0aGlzLnNvcnREaXNhYmxlZCl7dmFyICR0aD0kKHRoaXMpLmFkZENsYXNzKHRhYmxlLmNvbmZpZy5jc3NIZWFkZXIpO2lmKHRhYmxlLmNvbmZpZy5vblJlbmRlckhlYWRlcil0YWJsZS5jb25maWcub25SZW5kZXJIZWFkZXIuYXBwbHkoJHRoKTt9dGFibGUuY29uZmlnLmhlYWRlckxpc3RbaW5kZXhdPXRoaXM7fSk7aWYodGFibGUuY29uZmlnLmRlYnVnKXtiZW5jaG1hcmsoXCJCdWlsdCBoZWFkZXJzOlwiLHRpbWUpO2xvZygkdGFibGVIZWFkZXJzKTt9cmV0dXJuICR0YWJsZUhlYWRlcnM7fTtmdW5jdGlvbiBjb21wdXRlVGFibGVIZWFkZXJDZWxsSW5kZXhlcyh0KXt2YXIgbWF0cml4PVtdO3ZhciBsb29rdXA9e307dmFyIHRoZWFkPXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ1RIRUFEJylbMF07dmFyIHRycz10aGVhZC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnVFInKTtmb3IodmFyIGk9MDtpPHRycy5sZW5ndGg7aSsrKXt2YXIgY2VsbHM9dHJzW2ldLmNlbGxzO2Zvcih2YXIgaj0wO2o8Y2VsbHMubGVuZ3RoO2orKyl7dmFyIGM9Y2VsbHNbal07dmFyIHJvd0luZGV4PWMucGFyZW50Tm9kZS5yb3dJbmRleDt2YXIgY2VsbElkPXJvd0luZGV4K1wiLVwiK2MuY2VsbEluZGV4O3ZhciByb3dTcGFuPWMucm93U3Bhbnx8MTt2YXIgY29sU3Bhbj1jLmNvbFNwYW58fDFcbnZhciBmaXJzdEF2YWlsQ29sO2lmKHR5cGVvZihtYXRyaXhbcm93SW5kZXhdKT09XCJ1bmRlZmluZWRcIil7bWF0cml4W3Jvd0luZGV4XT1bXTt9Zm9yKHZhciBrPTA7azxtYXRyaXhbcm93SW5kZXhdLmxlbmd0aCsxO2srKyl7aWYodHlwZW9mKG1hdHJpeFtyb3dJbmRleF1ba10pPT1cInVuZGVmaW5lZFwiKXtmaXJzdEF2YWlsQ29sPWs7YnJlYWs7fX1sb29rdXBbY2VsbElkXT1maXJzdEF2YWlsQ29sO2Zvcih2YXIgaz1yb3dJbmRleDtrPHJvd0luZGV4K3Jvd1NwYW47aysrKXtpZih0eXBlb2YobWF0cml4W2tdKT09XCJ1bmRlZmluZWRcIil7bWF0cml4W2tdPVtdO312YXIgbWF0cml4cm93PW1hdHJpeFtrXTtmb3IodmFyIGw9Zmlyc3RBdmFpbENvbDtsPGZpcnN0QXZhaWxDb2wrY29sU3BhbjtsKyspe21hdHJpeHJvd1tsXT1cInhcIjt9fX19cmV0dXJuIGxvb2t1cDt9ZnVuY3Rpb24gY2hlY2tDZWxsQ29sU3Bhbih0YWJsZSxyb3dzLHJvdyl7dmFyIGFycj1bXSxyPXRhYmxlLnRIZWFkLnJvd3MsYz1yW3Jvd10uY2VsbHM7Zm9yKHZhciBpPTA7aTxjLmxlbmd0aDtpKyspe3ZhciBjZWxsPWNbaV07aWYoY2VsbC5jb2xTcGFuPjEpe2Fycj1hcnIuY29uY2F0KGNoZWNrQ2VsbENvbFNwYW4odGFibGUsaGVhZGVyQXJyLHJvdysrKSk7fWVsc2V7aWYodGFibGUudEhlYWQubGVuZ3RoPT0xfHwoY2VsbC5yb3dTcGFuPjF8fCFyW3JvdysxXSkpe2Fyci5wdXNoKGNlbGwpO319fXJldHVybiBhcnI7fTtmdW5jdGlvbiBjaGVja0hlYWRlck1ldGFkYXRhKGNlbGwpe2lmKCgkLm1ldGFkYXRhKSYmKCQoY2VsbCkubWV0YWRhdGEoKS5zb3J0ZXI9PT1mYWxzZSkpe3JldHVybiB0cnVlO307cmV0dXJuIGZhbHNlO31mdW5jdGlvbiBjaGVja0hlYWRlck9wdGlvbnModGFibGUsaSl7aWYoKHRhYmxlLmNvbmZpZy5oZWFkZXJzW2ldKSYmKHRhYmxlLmNvbmZpZy5oZWFkZXJzW2ldLnNvcnRlcj09PWZhbHNlKSl7cmV0dXJuIHRydWU7fTtyZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGNoZWNrSGVhZGVyT3B0aW9uc1NvcnRpbmdMb2NrZWQodGFibGUsaSl7aWYoKHRhYmxlLmNvbmZpZy5oZWFkZXJzW2ldKSYmKHRhYmxlLmNvbmZpZy5oZWFkZXJzW2ldLmxvY2tlZE9yZGVyKSlyZXR1cm4gdGFibGUuY29uZmlnLmhlYWRlcnNbaV0ubG9ja2VkT3JkZXI7cmV0dXJuIGZhbHNlO31mdW5jdGlvbiBhcHBseVdpZGdldCh0YWJsZSl7dmFyIGM9dGFibGUuY29uZmlnLndpZGdldHM7dmFyIGw9Yy5sZW5ndGg7Zm9yKHZhciBpPTA7aTxsO2krKyl7Z2V0V2lkZ2V0QnlJZChjW2ldKS5mb3JtYXQodGFibGUpO319ZnVuY3Rpb24gZ2V0V2lkZ2V0QnlJZChuYW1lKXt2YXIgbD13aWRnZXRzLmxlbmd0aDtmb3IodmFyIGk9MDtpPGw7aSsrKXtpZih3aWRnZXRzW2ldLmlkLnRvTG93ZXJDYXNlKCk9PW5hbWUudG9Mb3dlckNhc2UoKSl7cmV0dXJuIHdpZGdldHNbaV07fX19O2Z1bmN0aW9uIGZvcm1hdFNvcnRpbmdPcmRlcih2KXtpZih0eXBlb2YodikhPVwiTnVtYmVyXCIpe3JldHVybih2LnRvTG93ZXJDYXNlKCk9PVwiZGVzY1wiKT8xOjA7fWVsc2V7cmV0dXJuKHY9PTEpPzE6MDt9fWZ1bmN0aW9uIGlzVmFsdWVJbkFycmF5KHYsYSl7dmFyIGw9YS5sZW5ndGg7Zm9yKHZhciBpPTA7aTxsO2krKyl7aWYoYVtpXVswXT09dil7cmV0dXJuIHRydWU7fX1yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIHNldEhlYWRlcnNDc3ModGFibGUsJGhlYWRlcnMsbGlzdCxjc3MpeyRoZWFkZXJzLnJlbW92ZUNsYXNzKGNzc1swXSkucmVtb3ZlQ2xhc3MoY3NzWzFdKTt2YXIgaD1bXTskaGVhZGVycy5lYWNoKGZ1bmN0aW9uKG9mZnNldCl7aWYoIXRoaXMuc29ydERpc2FibGVkKXtoW3RoaXMuY29sdW1uXT0kKHRoaXMpO319KTt2YXIgbD1saXN0Lmxlbmd0aDtmb3IodmFyIGk9MDtpPGw7aSsrKXtoW2xpc3RbaV1bMF1dLmFkZENsYXNzKGNzc1tsaXN0W2ldWzFdXSk7fX1mdW5jdGlvbiBmaXhDb2x1bW5XaWR0aCh0YWJsZSwkaGVhZGVycyl7dmFyIGM9dGFibGUuY29uZmlnO2lmKGMud2lkdGhGaXhlZCl7dmFyIGNvbGdyb3VwPSQoJzxjb2xncm91cD4nKTskKFwidHI6Zmlyc3QgdGRcIix0YWJsZS50Qm9kaWVzWzBdKS5lYWNoKGZ1bmN0aW9uKCl7Y29sZ3JvdXAuYXBwZW5kKCQoJzxjb2w+JykuY3NzKCd3aWR0aCcsJCh0aGlzKS53aWR0aCgpKSk7fSk7JCh0YWJsZSkucHJlcGVuZChjb2xncm91cCk7fTt9ZnVuY3Rpb24gdXBkYXRlSGVhZGVyU29ydENvdW50KHRhYmxlLHNvcnRMaXN0KXt2YXIgYz10YWJsZS5jb25maWcsbD1zb3J0TGlzdC5sZW5ndGg7Zm9yKHZhciBpPTA7aTxsO2krKyl7dmFyIHM9c29ydExpc3RbaV0sbz1jLmhlYWRlckxpc3Rbc1swXV07by5jb3VudD1zWzFdO28uY291bnQrKzt9fWZ1bmN0aW9uIG11bHRpc29ydCh0YWJsZSxzb3J0TGlzdCxjYWNoZSl7aWYodGFibGUuY29uZmlnLmRlYnVnKXt2YXIgc29ydFRpbWU9bmV3IERhdGUoKTt9dmFyIGR5bmFtaWNFeHA9XCJ2YXIgc29ydFdyYXBwZXIgPSBmdW5jdGlvbihhLGIpIHtcIixsPXNvcnRMaXN0Lmxlbmd0aDtmb3IodmFyIGk9MDtpPGw7aSsrKXt2YXIgYz1zb3J0TGlzdFtpXVswXTt2YXIgb3JkZXI9c29ydExpc3RbaV1bMV07dmFyIHM9KHRhYmxlLmNvbmZpZy5wYXJzZXJzW2NdLnR5cGU9PVwidGV4dFwiKT8oKG9yZGVyPT0wKT9tYWtlU29ydEZ1bmN0aW9uKFwidGV4dFwiLFwiYXNjXCIsYyk6bWFrZVNvcnRGdW5jdGlvbihcInRleHRcIixcImRlc2NcIixjKSk6KChvcmRlcj09MCk/bWFrZVNvcnRGdW5jdGlvbihcIm51bWVyaWNcIixcImFzY1wiLGMpOm1ha2VTb3J0RnVuY3Rpb24oXCJudW1lcmljXCIsXCJkZXNjXCIsYykpO3ZhciBlPVwiZVwiK2k7ZHluYW1pY0V4cCs9XCJ2YXIgXCIrZStcIiA9IFwiK3M7ZHluYW1pY0V4cCs9XCJpZihcIitlK1wiKSB7IHJldHVybiBcIitlK1wiOyB9IFwiO2R5bmFtaWNFeHArPVwiZWxzZSB7IFwiO312YXIgb3JnT3JkZXJDb2w9Y2FjaGUubm9ybWFsaXplZFswXS5sZW5ndGgtMTtkeW5hbWljRXhwKz1cInJldHVybiBhW1wiK29yZ09yZGVyQ29sK1wiXS1iW1wiK29yZ09yZGVyQ29sK1wiXTtcIjtmb3IodmFyIGk9MDtpPGw7aSsrKXtkeW5hbWljRXhwKz1cIn07IFwiO31keW5hbWljRXhwKz1cInJldHVybiAwOyBcIjtkeW5hbWljRXhwKz1cIn07IFwiO2lmKHRhYmxlLmNvbmZpZy5kZWJ1Zyl7YmVuY2htYXJrKFwiRXZhbGluZyBleHByZXNzaW9uOlwiK2R5bmFtaWNFeHAsbmV3IERhdGUoKSk7fWV2YWwoZHluYW1pY0V4cCk7Y2FjaGUubm9ybWFsaXplZC5zb3J0KHNvcnRXcmFwcGVyKTtpZih0YWJsZS5jb25maWcuZGVidWcpe2JlbmNobWFyayhcIlNvcnRpbmcgb24gXCIrc29ydExpc3QudG9TdHJpbmcoKStcIiBhbmQgZGlyIFwiK29yZGVyK1wiIHRpbWU6XCIsc29ydFRpbWUpO31yZXR1cm4gY2FjaGU7fTtmdW5jdGlvbiBtYWtlU29ydEZ1bmN0aW9uKHR5cGUsZGlyZWN0aW9uLGluZGV4KXt2YXIgYT1cImFbXCIraW5kZXgrXCJdXCIsYj1cImJbXCIraW5kZXgrXCJdXCI7aWYodHlwZT09J3RleHQnJiZkaXJlY3Rpb249PSdhc2MnKXtyZXR1cm5cIihcIithK1wiID09IFwiK2IrXCIgPyAwIDogKFwiK2ErXCIgPT09IG51bGwgPyBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkgOiAoXCIrYitcIiA9PT0gbnVsbCA/IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSA6IChcIithK1wiIDwgXCIrYitcIikgPyAtMSA6IDEgKSkpO1wiO31lbHNlIGlmKHR5cGU9PSd0ZXh0JyYmZGlyZWN0aW9uPT0nZGVzYycpe3JldHVyblwiKFwiK2ErXCIgPT0gXCIrYitcIiA/IDAgOiAoXCIrYStcIiA9PT0gbnVsbCA/IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSA6IChcIitiK1wiID09PSBudWxsID8gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZIDogKFwiK2IrXCIgPCBcIithK1wiKSA/IC0xIDogMSApKSk7XCI7fWVsc2UgaWYodHlwZT09J251bWVyaWMnJiZkaXJlY3Rpb249PSdhc2MnKXtyZXR1cm5cIihcIithK1wiID09PSBudWxsICYmIFwiK2IrXCIgPT09IG51bGwpID8gMCA6KFwiK2ErXCIgPT09IG51bGwgPyBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkgOiAoXCIrYitcIiA9PT0gbnVsbCA/IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSA6IFwiK2ErXCIgLSBcIitiK1wiKSk7XCI7fWVsc2UgaWYodHlwZT09J251bWVyaWMnJiZkaXJlY3Rpb249PSdkZXNjJyl7cmV0dXJuXCIoXCIrYStcIiA9PT0gbnVsbCAmJiBcIitiK1wiID09PSBudWxsKSA/IDAgOihcIithK1wiID09PSBudWxsID8gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZIDogKFwiK2IrXCIgPT09IG51bGwgPyBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkgOiBcIitiK1wiIC0gXCIrYStcIikpO1wiO319O2Z1bmN0aW9uIG1ha2VTb3J0VGV4dChpKXtyZXR1cm5cIigoYVtcIitpK1wiXSA8IGJbXCIraStcIl0pID8gLTEgOiAoKGFbXCIraStcIl0gPiBiW1wiK2krXCJdKSA/IDEgOiAwKSk7XCI7fTtmdW5jdGlvbiBtYWtlU29ydFRleHREZXNjKGkpe3JldHVyblwiKChiW1wiK2krXCJdIDwgYVtcIitpK1wiXSkgPyAtMSA6ICgoYltcIitpK1wiXSA+IGFbXCIraStcIl0pID8gMSA6IDApKTtcIjt9O2Z1bmN0aW9uIG1ha2VTb3J0TnVtZXJpYyhpKXtyZXR1cm5cImFbXCIraStcIl0tYltcIitpK1wiXTtcIjt9O2Z1bmN0aW9uIG1ha2VTb3J0TnVtZXJpY0Rlc2MoaSl7cmV0dXJuXCJiW1wiK2krXCJdLWFbXCIraStcIl07XCI7fTtmdW5jdGlvbiBzb3J0VGV4dChhLGIpe2lmKHRhYmxlLmNvbmZpZy5zb3J0TG9jYWxlQ29tcGFyZSlyZXR1cm4gYS5sb2NhbGVDb21wYXJlKGIpO3JldHVybigoYTxiKT8tMTooKGE+Yik/MTowKSk7fTtmdW5jdGlvbiBzb3J0VGV4dERlc2MoYSxiKXtpZih0YWJsZS5jb25maWcuc29ydExvY2FsZUNvbXBhcmUpcmV0dXJuIGIubG9jYWxlQ29tcGFyZShhKTtyZXR1cm4oKGI8YSk/LTE6KChiPmEpPzE6MCkpO307ZnVuY3Rpb24gc29ydE51bWVyaWMoYSxiKXtyZXR1cm4gYS1iO307ZnVuY3Rpb24gc29ydE51bWVyaWNEZXNjKGEsYil7cmV0dXJuIGItYTt9O2Z1bmN0aW9uIGdldENhY2hlZFNvcnRUeXBlKHBhcnNlcnMsaSl7cmV0dXJuIHBhcnNlcnNbaV0udHlwZTt9O3RoaXMuY29uc3RydWN0PWZ1bmN0aW9uKHNldHRpbmdzKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7aWYoIXRoaXMudEhlYWR8fCF0aGlzLnRCb2RpZXMpcmV0dXJuO3ZhciAkdGhpcywkZG9jdW1lbnQsJGhlYWRlcnMsY2FjaGUsY29uZmlnLHNoaWZ0RG93bj0wLHNvcnRPcmRlcjt0aGlzLmNvbmZpZz17fTtjb25maWc9JC5leHRlbmQodGhpcy5jb25maWcsJC50YWJsZXNvcnRlci5kZWZhdWx0cyxzZXR0aW5ncyk7JHRoaXM9JCh0aGlzKTskLmRhdGEodGhpcyxcInRhYmxlc29ydGVyXCIsY29uZmlnKTskaGVhZGVycz1idWlsZEhlYWRlcnModGhpcyk7dGhpcy5jb25maWcucGFyc2Vycz1idWlsZFBhcnNlckNhY2hlKHRoaXMsJGhlYWRlcnMpO2NhY2hlPWJ1aWxkQ2FjaGUodGhpcyk7dmFyIHNvcnRDU1M9W2NvbmZpZy5jc3NEZXNjLGNvbmZpZy5jc3NBc2NdO2ZpeENvbHVtbldpZHRoKHRoaXMpOyRoZWFkZXJzLmNsaWNrKGZ1bmN0aW9uKGUpe3ZhciB0b3RhbFJvd3M9KCR0aGlzWzBdLnRCb2RpZXNbMF0mJiR0aGlzWzBdLnRCb2RpZXNbMF0ucm93cy5sZW5ndGgpfHwwO2lmKCF0aGlzLnNvcnREaXNhYmxlZCYmdG90YWxSb3dzPjApeyR0aGlzLnRyaWdnZXIoXCJzb3J0U3RhcnRcIik7dmFyICRjZWxsPSQodGhpcyk7dmFyIGk9dGhpcy5jb2x1bW47dGhpcy5vcmRlcj10aGlzLmNvdW50KyslMjtpZih0aGlzLmxvY2tlZE9yZGVyKXRoaXMub3JkZXI9dGhpcy5sb2NrZWRPcmRlcjtpZighZVtjb25maWcuc29ydE11bHRpU29ydEtleV0pe2NvbmZpZy5zb3J0TGlzdD1bXTtpZihjb25maWcuc29ydEZvcmNlIT1udWxsKXt2YXIgYT1jb25maWcuc29ydEZvcmNlO2Zvcih2YXIgaj0wO2o8YS5sZW5ndGg7aisrKXtpZihhW2pdWzBdIT1pKXtjb25maWcuc29ydExpc3QucHVzaChhW2pdKTt9fX1jb25maWcuc29ydExpc3QucHVzaChbaSx0aGlzLm9yZGVyXSk7fWVsc2V7aWYoaXNWYWx1ZUluQXJyYXkoaSxjb25maWcuc29ydExpc3QpKXtmb3IodmFyIGo9MDtqPGNvbmZpZy5zb3J0TGlzdC5sZW5ndGg7aisrKXt2YXIgcz1jb25maWcuc29ydExpc3Rbal0sbz1jb25maWcuaGVhZGVyTGlzdFtzWzBdXTtpZihzWzBdPT1pKXtvLmNvdW50PXNbMV07by5jb3VudCsrO3NbMV09by5jb3VudCUyO319fWVsc2V7Y29uZmlnLnNvcnRMaXN0LnB1c2goW2ksdGhpcy5vcmRlcl0pO319O3NldFRpbWVvdXQoZnVuY3Rpb24oKXtzZXRIZWFkZXJzQ3NzKCR0aGlzWzBdLCRoZWFkZXJzLGNvbmZpZy5zb3J0TGlzdCxzb3J0Q1NTKTthcHBlbmRUb1RhYmxlKCR0aGlzWzBdLG11bHRpc29ydCgkdGhpc1swXSxjb25maWcuc29ydExpc3QsY2FjaGUpKTt9LDEpO3JldHVybiBmYWxzZTt9fSkubW91c2Vkb3duKGZ1bmN0aW9uKCl7aWYoY29uZmlnLmNhbmNlbFNlbGVjdGlvbil7dGhpcy5vbnNlbGVjdHN0YXJ0PWZ1bmN0aW9uKCl7cmV0dXJuIGZhbHNlfTtyZXR1cm4gZmFsc2U7fX0pOyR0aGlzLmJpbmQoXCJ1cGRhdGVcIixmdW5jdGlvbigpe3ZhciBtZT10aGlzO3NldFRpbWVvdXQoZnVuY3Rpb24oKXttZS5jb25maWcucGFyc2Vycz1idWlsZFBhcnNlckNhY2hlKG1lLCRoZWFkZXJzKTtjYWNoZT1idWlsZENhY2hlKG1lKTt9LDEpO30pLmJpbmQoXCJ1cGRhdGVDZWxsXCIsZnVuY3Rpb24oZSxjZWxsKXt2YXIgY29uZmlnPXRoaXMuY29uZmlnO3ZhciBwb3M9WyhjZWxsLnBhcmVudE5vZGUucm93SW5kZXgtMSksY2VsbC5jZWxsSW5kZXhdO2NhY2hlLm5vcm1hbGl6ZWRbcG9zWzBdXVtwb3NbMV1dPWNvbmZpZy5wYXJzZXJzW3Bvc1sxXV0uZm9ybWF0KGdldEVsZW1lbnRUZXh0KGNvbmZpZyxjZWxsKSxjZWxsKTt9KS5iaW5kKFwic29ydG9uXCIsZnVuY3Rpb24oZSxsaXN0KXskKHRoaXMpLnRyaWdnZXIoXCJzb3J0U3RhcnRcIik7Y29uZmlnLnNvcnRMaXN0PWxpc3Q7dmFyIHNvcnRMaXN0PWNvbmZpZy5zb3J0TGlzdDt1cGRhdGVIZWFkZXJTb3J0Q291bnQodGhpcyxzb3J0TGlzdCk7c2V0SGVhZGVyc0Nzcyh0aGlzLCRoZWFkZXJzLHNvcnRMaXN0LHNvcnRDU1MpO2FwcGVuZFRvVGFibGUodGhpcyxtdWx0aXNvcnQodGhpcyxzb3J0TGlzdCxjYWNoZSkpO30pLmJpbmQoXCJhcHBlbmRDYWNoZVwiLGZ1bmN0aW9uKCl7YXBwZW5kVG9UYWJsZSh0aGlzLGNhY2hlKTt9KS5iaW5kKFwiYXBwbHlXaWRnZXRJZFwiLGZ1bmN0aW9uKGUsaWQpe2dldFdpZGdldEJ5SWQoaWQpLmZvcm1hdCh0aGlzKTt9KS5iaW5kKFwiYXBwbHlXaWRnZXRzXCIsZnVuY3Rpb24oKXthcHBseVdpZGdldCh0aGlzKTt9KTtpZigkLm1ldGFkYXRhJiYoJCh0aGlzKS5tZXRhZGF0YSgpJiYkKHRoaXMpLm1ldGFkYXRhKCkuc29ydGxpc3QpKXtjb25maWcuc29ydExpc3Q9JCh0aGlzKS5tZXRhZGF0YSgpLnNvcnRsaXN0O31pZihjb25maWcuc29ydExpc3QubGVuZ3RoPjApeyR0aGlzLnRyaWdnZXIoXCJzb3J0b25cIixbY29uZmlnLnNvcnRMaXN0XSk7fWFwcGx5V2lkZ2V0KHRoaXMpO30pO307dGhpcy5hZGRQYXJzZXI9ZnVuY3Rpb24ocGFyc2VyKXt2YXIgbD1wYXJzZXJzLmxlbmd0aCxhPXRydWU7Zm9yKHZhciBpPTA7aTxsO2krKyl7aWYocGFyc2Vyc1tpXS5pZC50b0xvd2VyQ2FzZSgpPT1wYXJzZXIuaWQudG9Mb3dlckNhc2UoKSl7YT1mYWxzZTt9fWlmKGEpe3BhcnNlcnMucHVzaChwYXJzZXIpO307fTt0aGlzLmFkZFdpZGdldD1mdW5jdGlvbih3aWRnZXQpe3dpZGdldHMucHVzaCh3aWRnZXQpO307dGhpcy5mb3JtYXRGbG9hdD1mdW5jdGlvbihzKXt2YXIgaT1wYXJzZUZsb2F0KHMpO3JldHVybihpc05hTihpKSk/MDppO307dGhpcy5mb3JtYXRJbnQ9ZnVuY3Rpb24ocyl7dmFyIGk9cGFyc2VJbnQocyk7cmV0dXJuKGlzTmFOKGkpKT8wOmk7fTt0aGlzLmlzRGlnaXQ9ZnVuY3Rpb24ocyxjb25maWcpe3JldHVybi9eWy0rXT9cXGQqJC8udGVzdCgkLnRyaW0ocy5yZXBsYWNlKC9bLC4nXS9nLCcnKSkpO307dGhpcy5jbGVhclRhYmxlQm9keT1mdW5jdGlvbih0YWJsZSl7aWYoJC5icm93c2VyLm1zaWUpe2Z1bmN0aW9uIGVtcHR5KCl7d2hpbGUodGhpcy5maXJzdENoaWxkKXRoaXMucmVtb3ZlQ2hpbGQodGhpcy5maXJzdENoaWxkKTt9ZW1wdHkuYXBwbHkodGFibGUudEJvZGllc1swXSk7fWVsc2V7dGFibGUudEJvZGllc1swXS5pbm5lckhUTUw9XCJcIjt9fTt9fSk7JC5mbi5leHRlbmQoe3RhYmxlc29ydGVyOiQudGFibGVzb3J0ZXIuY29uc3RydWN0fSk7dmFyIHRzPSQudGFibGVzb3J0ZXI7dHMuYWRkUGFyc2VyKHtpZDpcInRleHRcIixpczpmdW5jdGlvbihzKXtyZXR1cm4gdHJ1ZTt9LGZvcm1hdDpmdW5jdGlvbihzKXtyZXR1cm4gJC50cmltKHMudG9Mb2NhbGVMb3dlckNhc2UoKSk7fSx0eXBlOlwidGV4dFwifSk7dHMuYWRkUGFyc2VyKHtpZDpcImRpZ2l0XCIsaXM6ZnVuY3Rpb24ocyx0YWJsZSl7dmFyIGM9dGFibGUuY29uZmlnO3JldHVybiAkLnRhYmxlc29ydGVyLmlzRGlnaXQocyxjKTt9LGZvcm1hdDpmdW5jdGlvbihzKXtyZXR1cm4gJC50YWJsZXNvcnRlci5mb3JtYXRGbG9hdChzKTt9LHR5cGU6XCJudW1lcmljXCJ9KTt0cy5hZGRQYXJzZXIoe2lkOlwiY3VycmVuY3lcIixpczpmdW5jdGlvbihzKXtyZXR1cm4vXlvCoyTigqw/Ll0vLnRlc3Qocyk7fSxmb3JtYXQ6ZnVuY3Rpb24ocyl7cmV0dXJuICQudGFibGVzb3J0ZXIuZm9ybWF0RmxvYXQocy5yZXBsYWNlKG5ldyBSZWdFeHAoL1vCoyTigqxdL2cpLFwiXCIpKTt9LHR5cGU6XCJudW1lcmljXCJ9KTt0cy5hZGRQYXJzZXIoe2lkOlwiaXBBZGRyZXNzXCIsaXM6ZnVuY3Rpb24ocyl7cmV0dXJuL15cXGR7MiwzfVtcXC5dXFxkezIsM31bXFwuXVxcZHsyLDN9W1xcLl1cXGR7MiwzfSQvLnRlc3Qocyk7fSxmb3JtYXQ6ZnVuY3Rpb24ocyl7dmFyIGE9cy5zcGxpdChcIi5cIikscj1cIlwiLGw9YS5sZW5ndGg7Zm9yKHZhciBpPTA7aTxsO2krKyl7dmFyIGl0ZW09YVtpXTtpZihpdGVtLmxlbmd0aD09Mil7cis9XCIwXCIraXRlbTt9ZWxzZXtyKz1pdGVtO319cmV0dXJuICQudGFibGVzb3J0ZXIuZm9ybWF0RmxvYXQocik7fSx0eXBlOlwibnVtZXJpY1wifSk7dHMuYWRkUGFyc2VyKHtpZDpcInVybFwiLGlzOmZ1bmN0aW9uKHMpe3JldHVybi9eKGh0dHBzP3xmdHB8ZmlsZSk6XFwvXFwvJC8udGVzdChzKTt9LGZvcm1hdDpmdW5jdGlvbihzKXtyZXR1cm4galF1ZXJ5LnRyaW0ocy5yZXBsYWNlKG5ldyBSZWdFeHAoLyhodHRwcz98ZnRwfGZpbGUpOlxcL1xcLy8pLCcnKSk7fSx0eXBlOlwidGV4dFwifSk7dHMuYWRkUGFyc2VyKHtpZDpcImlzb0RhdGVcIixpczpmdW5jdGlvbihzKXtyZXR1cm4vXlxcZHs0fVtcXC8tXVxcZHsxLDJ9W1xcLy1dXFxkezEsMn0kLy50ZXN0KHMpO30sZm9ybWF0OmZ1bmN0aW9uKHMpe3JldHVybiAkLnRhYmxlc29ydGVyLmZvcm1hdEZsb2F0KChzIT1cIlwiKT9uZXcgRGF0ZShzLnJlcGxhY2UobmV3IFJlZ0V4cCgvLS9nKSxcIi9cIikpLmdldFRpbWUoKTpcIjBcIik7fSx0eXBlOlwibnVtZXJpY1wifSk7dHMuYWRkUGFyc2VyKHtpZDpcInBlcmNlbnRcIixpczpmdW5jdGlvbihzKXtyZXR1cm4vXFwlJC8udGVzdCgkLnRyaW0ocykpO30sZm9ybWF0OmZ1bmN0aW9uKHMpe3JldHVybiAkLnRhYmxlc29ydGVyLmZvcm1hdEZsb2F0KHMucmVwbGFjZShuZXcgUmVnRXhwKC8lL2cpLFwiXCIpKTt9LHR5cGU6XCJudW1lcmljXCJ9KTt0cy5hZGRQYXJzZXIoe2lkOlwidXNMb25nRGF0ZVwiLGlzOmZ1bmN0aW9uKHMpe3JldHVybiBzLm1hdGNoKG5ldyBSZWdFeHAoL15bQS1aYS16XXszLDEwfVxcLj8gWzAtOV17MSwyfSwgKFswLTldezR9fCc/WzAtOV17Mn0pICgoWzAtMl0/WzAtOV06WzAtNV1bMC05XSl8KFswLTFdP1swLTldOlswLTVdWzAtOV1cXHMoQU18UE0pKSkkLykpO30sZm9ybWF0OmZ1bmN0aW9uKHMpe3JldHVybiAkLnRhYmxlc29ydGVyLmZvcm1hdEZsb2F0KG5ldyBEYXRlKHMpLmdldFRpbWUoKSk7fSx0eXBlOlwibnVtZXJpY1wifSk7dHMuYWRkUGFyc2VyKHtpZDpcInNob3J0RGF0ZVwiLGlzOmZ1bmN0aW9uKHMpe3JldHVybi9cXGR7MSwyfVtcXC9cXC1dXFxkezEsMn1bXFwvXFwtXVxcZHsyLDR9Ly50ZXN0KHMpO30sZm9ybWF0OmZ1bmN0aW9uKHMsdGFibGUpe3ZhciBjPXRhYmxlLmNvbmZpZztzPXMucmVwbGFjZSgvXFwtL2csXCIvXCIpO2lmKGMuZGF0ZUZvcm1hdD09XCJ1c1wiKXtzPXMucmVwbGFjZSgvKFxcZHsxLDJ9KVtcXC9cXC1dKFxcZHsxLDJ9KVtcXC9cXC1dKFxcZHs0fSkvLFwiJDMvJDEvJDJcIik7fWVsc2UgaWYoYy5kYXRlRm9ybWF0PT1cInVrXCIpe3M9cy5yZXBsYWNlKC8oXFxkezEsMn0pW1xcL1xcLV0oXFxkezEsMn0pW1xcL1xcLV0oXFxkezR9KS8sXCIkMy8kMi8kMVwiKTt9ZWxzZSBpZihjLmRhdGVGb3JtYXQ9PVwiZGQvbW0veXlcInx8Yy5kYXRlRm9ybWF0PT1cImRkLW1tLXl5XCIpe3M9cy5yZXBsYWNlKC8oXFxkezEsMn0pW1xcL1xcLV0oXFxkezEsMn0pW1xcL1xcLV0oXFxkezJ9KS8sXCIkMS8kMi8kM1wiKTt9cmV0dXJuICQudGFibGVzb3J0ZXIuZm9ybWF0RmxvYXQobmV3IERhdGUocykuZ2V0VGltZSgpKTt9LHR5cGU6XCJudW1lcmljXCJ9KTt0cy5hZGRQYXJzZXIoe2lkOlwidGltZVwiLGlzOmZ1bmN0aW9uKHMpe3JldHVybi9eKChbMC0yXT9bMC05XTpbMC01XVswLTldKXwoWzAtMV0/WzAtOV06WzAtNV1bMC05XVxccyhhbXxwbSkpKSQvLnRlc3Qocyk7fSxmb3JtYXQ6ZnVuY3Rpb24ocyl7cmV0dXJuICQudGFibGVzb3J0ZXIuZm9ybWF0RmxvYXQobmV3IERhdGUoXCIyMDAwLzAxLzAxIFwiK3MpLmdldFRpbWUoKSk7fSx0eXBlOlwibnVtZXJpY1wifSk7dHMuYWRkUGFyc2VyKHtpZDpcIm1ldGFkYXRhXCIsaXM6ZnVuY3Rpb24ocyl7cmV0dXJuIGZhbHNlO30sZm9ybWF0OmZ1bmN0aW9uKHMsdGFibGUsY2VsbCl7dmFyIGM9dGFibGUuY29uZmlnLHA9KCFjLnBhcnNlck1ldGFkYXRhTmFtZSk/J3NvcnRWYWx1ZSc6Yy5wYXJzZXJNZXRhZGF0YU5hbWU7cmV0dXJuICQoY2VsbCkubWV0YWRhdGEoKVtwXTt9LHR5cGU6XCJudW1lcmljXCJ9KTt0cy5hZGRXaWRnZXQoe2lkOlwiemVicmFcIixmb3JtYXQ6ZnVuY3Rpb24odGFibGUpe2lmKHRhYmxlLmNvbmZpZy5kZWJ1Zyl7dmFyIHRpbWU9bmV3IERhdGUoKTt9dmFyICR0cixyb3c9LTEsb2RkOyQoXCJ0cjp2aXNpYmxlXCIsdGFibGUudEJvZGllc1swXSkuZWFjaChmdW5jdGlvbihpKXskdHI9JCh0aGlzKTtpZighJHRyLmhhc0NsYXNzKHRhYmxlLmNvbmZpZy5jc3NDaGlsZFJvdykpcm93Kys7b2RkPShyb3clMj09MCk7JHRyLnJlbW92ZUNsYXNzKHRhYmxlLmNvbmZpZy53aWRnZXRaZWJyYS5jc3Nbb2RkPzA6MV0pLmFkZENsYXNzKHRhYmxlLmNvbmZpZy53aWRnZXRaZWJyYS5jc3Nbb2RkPzE6MF0pfSk7aWYodGFibGUuY29uZmlnLmRlYnVnKXskLnRhYmxlc29ydGVyLmJlbmNobWFyayhcIkFwcGx5aW5nIFplYnJhIHdpZGdldFwiLHRpbWUpO319fSk7fSkoalF1ZXJ5KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdmVuZG9ycy9qcXVlcnktdGFibGVzb3J0ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9