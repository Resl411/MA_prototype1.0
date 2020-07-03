jQuery(function($) {
    'use strict';
    (function() {
        $(window).on('load', function() {
            /*
            =========================================================================================
            1. Spinner 
            =========================================================================================
            */
            $(".spinner_hol").fadeOut("slow");

            /*
            =========================================================================================
            2.PARALLAX
            =========================================================================================
 
            parallaxInit();

            function parallaxInit() {
                
                $('.home-parallax').parallax("30%", 0.1);
                $('.testimonial-parallax').parallax("30%", 0.1);
                $('.twitter-parallax').parallax("30%", 0.1);
                /*add as necessary* /
            }
            */
       });
    }());

    (function() {
        $(window).on('scroll', function() {
            /*
            =========================================================================================
            3. NAVBAR 
            =========================================================================================
            */
			var wst = $(window).scrollTop();
            if (wst > 80) {
				$("div.opbg").css({'top':'60px'});
                $(".navbar-nav>li>a, .navbar-brand").css({
                    'padding-top': '5px',
                    'padding-bottom': '5px'	//'padding-bottom': '5px'
                });
                $(".navbar-default").css({
                    'background-color': '#ffffff',
 //                   'border-bottom': '1px solid #e4e3e3'
                    'border-bottom': '1px solid white'
                });
                $(".navbar-default").css({
                    'margin-top': '0px'
                });
            } else {
                $(".navbar-nav>li>a, .navbar-brand").css({
                    'padding-top': '15px',
                    'padding-bottom': '5px'	//'padding-bottom': '15px'
                });
                $(".navbar-default").css({
                    'background-color': 'rgba(59, 59, 59, 0)',
                    'border-bottom': '0px solid #ddd'
                });

				$("div.opbg").css({'top':'70px'});

				if (wst > 90) {
					//$("header").css({'top': wst});
					//$("#CONTENTTOP").css({'padding-top': wst+10});
					//$("header").css({'background-position-y': wst});
				} else {	
					//$("header").css({'top':(wst+10)+'px'});
					//$("#CONTENTTOP").css({'padding-top': wst+20});
					//$("header").css({'background-position-y':'0px'});
				}	
            }
            $(".page").each(function() {
                var bb = $(this).attr("id");
                var hei = $(this).outerHeight();
                var grttop = $(this).offset().top - 80;
                if ($(window).scrollTop() > grttop - 1 && $(window).scrollTop() < grttop + hei - 1) {
                    var uu = $(".navbar-nav>li>a[href='#" + bb + "']").parent().addClass("active");
                } else {
                    var uu = $(".navbar-nav>li>a[href='#" + bb + "']").parent().removeClass("active");
                }
            });

            /*
            =========================================================================================
            4. PROGRESS BAR
            =========================================================================================
            */
            $(".prog_cint .tab-pane.fade .progress_cont").each(function() {
                var base = $(this);
                var windowHeight = $(window).height();
                var itemPos = base.offset().top;
                var scrollpos = $(window).scrollTop() + windowHeight - 100;
                if (itemPos <= scrollpos) {
                    var auptcoun = base.find(".progress-bar").attr("aria-valuenow");
                    base.find(".progress-bar").css({
                        "width": auptcoun + "%"
                    });
                    var str = base.find(".skill>span").text();
                    var res = str.replace("%", "");
                    if (res == 0) {
                        $({
                            countNumber: 0
                        }).animate({
                            countNumber: auptcoun
                        }, {
                            duration: 1500,
                            easing: 'linear',
                            step: function() {
                                base.find(".skill>span").text(Math.ceil(this.countNumber) + "%");
                            }
                        });
                    }
                }
            });
        });
    }());


    (function() {

        /*
        =========================================================================================
        5.NAV MENU FIX  
        =========================================================================================
        */
        $(".navbar-nav>li>a,  .down_btn>a").click(function() {
            $(this).parent().addClass("active");
            $(".navbar-nav li a").not(this).parent().removeClass("active");
            var TargetId = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(TargetId).offset().top - 50
            }, 1000, 'swing');
			if($(".navbar-toggle").is(":visible") && !$(this).parent().hasClass("down_btn")) $(".navbar-toggle").click();
            return false;
        });

        /*
        =========================================================================================
        6. FIX HOME SCREEN HEIGHT  
        =========================================================================================
        */
     /*   setInterval(function() {
                var widnowHeight = $(window).height();
                var sliderHeight = $(".slider").height();
                var padTop = widnowHeight - sliderHeight; 
                var xpadTop = (widnowHeight - sliderHeight) * 0.6;
                $(".slider").css({
                    'padding-top': Math.round(padTop / 2) + 'px',  
                    'xpadding-top': '0px', 
                    'padding-bottom': Math.round(padTop / 2) + 'px' 
                 });
            }, 10);
*/
        /*
        =========================================================================================
        9. PORTFOLIO SECTION
        =========================================================================================
        */
        $("#second").bootFolio({
            bfLayout: "bflayhover",
            bfFullWidth: "full-width",
            bfHover: "bfhoverCrafty",
            bfAnimation: "scale",
            bfSpace: "nospace",
            bfAniDuration: 500,
            bfCaptioncolor: "rgba(0, 0, 0, 0.72)",
            bfTextcolor: "#ffffff",
            bfTextalign: "left",
            bfNavalign: "center"
        });
        $("a[data-rel^='prettyPhoto']").prettyPhoto();

        /*
        =========================================================================================
        16. COUNTER
        =========================================================================================
        */
        $('.number>span').counterUp({
            delay: 10,
            time: 2000
        });

    }());
});

