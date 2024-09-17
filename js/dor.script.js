var DORSCRIPT = {
	checkLoad:0,
	init:function(){
		window.addEventListener('load', function (){
		    $(".dor-page-loading").remove();
		});
		DORSCRIPT.LineBreadCrumb();
		DORSCRIPT.HeadTitle();
		DORSCRIPT.EventData();
		DORSCRIPT.BlogHome();
		DORSCRIPT.HomeFeatured();
		DORSCRIPT.ScrollFixedMenu();
		DORSCRIPT.ScrollTop();
		DORSCRIPT.ShowPopupScre();
		DORSCRIPT.SearchBox();
		DORSCRIPT.SubListCategory();
		DORSCRIPT.ToolTipBootstrap();
		DORSCRIPT.AboutUsBrands();
		DORSCRIPT.AboutUsFarmers();
		DORSCRIPT.ToggleShareSocialDetail();
		DORSCRIPT.Testimonials();
		DORSCRIPT.ToggleSearch();
		DORSCRIPT.ToggleAddressCart();
		DORSCRIPT.MenuShow();
		DORSCRIPT.BlockTopbar();
		DORSCRIPT.DealBanner();
		DORSCRIPT.BrandsLists();
		if(parseInt($( window ).width()) <= 991){
			DORSCRIPT.checkLoad = 1;
			DORSCRIPT.MobileEventHeader();
		}
		$( window ).resize(function() {
			if(parseInt($( window ).width()) <= 991 && DORSCRIPT.checkLoad == 0){
				DORSCRIPT.MobileEventHeader();
			}
		});
	},
	BrandsLists:function(){
		$('.brands-lists ul').owlCarousel({
	        items: 5,
	        loop: true,
	        navigation: true,
	        nav: true,
	        autoplay: true,
	        lazyLoad:true,
	        responsive: {
	            0: {items: 1},
	            1198: {items: 5},
	            1165: {items: 5},
	            990: {items: 4},
	            700: {items: 3},
	            600: {items: 3},
	            370: {items: 2},
	            320: {items: 1}
	        },
	        onInitialize: function (event) {
		        if ($('.brands-lists ul').find('li').length <= 1) {
		           this.settings.loop = false;
		        }
		    },
	        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	    });
	},
	DealBanner:function(){
		$('.dor-banner-deal-item-wrapper').owlCarousel({
	        items: 1,
	        loop: true,
	        nav: false,
	        autoplay: true,
	        autoplayTimeout: 3000,
	        margin:0,
	        lazyLoad: true,
	        responsive: {
	            0: {items: 1},
	            1200: {items: 1},
	            992: {items: 1},
	            650: {items: 1},
	            370: {items: 1},
	            300: {items: 1}
	        },
	        onInitialize: function (event) {
		        if ($('.dor-banner-deal-item-wrapper').find('.item-deal-banner').length <= 1) {
		           this.settings.loop = false;
		        }
		    },
	        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	    });
	},
	MobileEventHeader:function(){
		jQuery(".nav-setting-button").click(function(){
			var checkOpen1 = $(this).closest(".dor-block-selection").hasClass("open");
			if(!checkOpen1){
				$(this).closest(".dor-block-selection").addClass("open");
			}else{
				$(this).closest(".dor-block-selection").removeClass("open");
			}
		});


		jQuery(document).click(function (event) {
            if (!jQuery(event.target).is(".nav-setting-button, .dor-block-selection *")) {
                jQuery(".dor-block-selection").removeClass("open");
            }
        });


        jQuery(".user-info.selection-options-wrapper > .line-selected").click(function(){
			var checkOpen2 = $(this).closest(".user-info.selection-options-wrapper").hasClass("open");
			if(!checkOpen2){
				$(this).closest(".user-info.selection-options-wrapper").addClass("open");
			}else{
				$(this).closest(".user-info.selection-options-wrapper").removeClass("open");
			}
		});


		jQuery(document).click(function (event) {
            if (!jQuery(event.target).is(".user-info.selection-options-wrapper.open *")) {
                jQuery(".user-info.selection-options-wrapper").removeClass("open");
            }
        });
	},
	BlockTopbar:function(){
		jQuery(".dorLanguagesBlock > h3").click(function(){
			var check = jQuery("#languages-block-top").hasClass("openBlockTop");
			if(check){
				jQuery("#languages-block-top").removeClass("openBlockTop");
			}else{
				jQuery("#languages-block-top").addClass("openBlockTop");
			}
		});
		jQuery(document).click(function (event) {
            if (!jQuery(event.target).is(".dorLanguagesBlock > h3, .dorLanguagesBlock > h3 *, #languages-block-top, #languages-block-top *")) {
                jQuery("#languages-block-top").removeClass("openBlockTop");
            }
        });
		jQuery(".dorCurrenciesBlock > h3").click(function(){
			var check = jQuery("#currencies-block-top").hasClass("openBlockTop");
			if(check){
				jQuery("#currencies-block-top").removeClass("openBlockTop");
			}else{
				jQuery("#currencies-block-top").addClass("openBlockTop");
			}
		});
		jQuery(document).click(function (event) {
            if (!jQuery(event.target).is(".dorCurrenciesBlock > h3, .dorCurrenciesBlock > h3 *, #currencies-block-top, #currencies-block-top *")) {
                jQuery("#currencies-block-top").removeClass("openBlockTop");
            }
        });
	},
	MenuShow:function(){
		jQuery(".user-menu-links .close-menu-link").click(function(){
			jQuery( ".user-menu-links" ).animate({
			    right: -365,
			}, 500);
		});
		jQuery(".header-menu-item-bars .bars-icon").click(function(){
			jQuery( ".user-menu-links" ).animate({
			    right: 0,
			}, 500);
		});
	},
	ToggleAddressCart:function(){
		jQuery(".order_delivery ul.address > li > h3.page-subheading").click(function(){
			var checkClass = jQuery(this).closest(".order_delivery ul.address").hasClass("openAddress");
			if(!checkClass)
				jQuery(this).closest(".order_delivery ul.address").addClass("openAddress");
			else
				jQuery(this).closest(".order_delivery ul.address").removeClass("openAddress");
		});
	},
	ToggleSearch:function(){
		jQuery(".header-menu-item-icon .icon-search, .header-menu-item-search .icon-search").click(function(){
			jQuery(".dorHeaderSearch-Wapper").slideToggle(300,function(){
				if(jQuery(this).is(":hidden")){
					jQuery(".dorHeaderSearch-Wapper").removeClass("openSearch")
				}else{
					jQuery(".dorHeaderSearch-Wapper").addClass("openSearch")
				}
			});
		});
		jQuery(document).click(function (event) {
            if (!jQuery(event.target).is(".dorHeaderSearch-Wapper, .dorHeaderSearch-Wapper *, .header-menu-item-icon, .header-menu-item-icon *, .header-menu-item-search, .header-menu-item-search *")) {
                if(!jQuery(".dorHeaderSearch-Wapper").is(":hidden")){
                	jQuery(".dorHeaderSearch-Wapper").slideToggle(300,function(){});
                }
            }
        });
	},
	ToggleShareSocialDetail:function(){
		jQuery(".dor-social").click(function(){
			jQuery(".dorSharingSocialButton").slideToggle(100,function(){
				if(jQuery(this).is(":hidden")){
					jQuery(".dorSharingSocial").removeClass("openShare")
				}else{
					jQuery(".dorSharingSocial").addClass("openShare")
				}
			});
		});
	},
	ToolTipBootstrap:function(){
		$('[data-toggle="tooltip"]').tooltip();
	},
	LineBreadCrumb:function(){
		jQuery(".navigation-pipe").html("").addClass("bshow");
	},
	EventData:function(){
		if (jQuery(".scroll-div").length) {
            jQuery(".scroll-div").mCustomScrollbar({
                theme: "dark-2",
                scrollButtons: {
                    enable: false
                }
            });
        }

        if (jQuery("#layered_form div div ul#ul_layered_category_0").length) {
            jQuery("#layered_form div div ul#ul_layered_category_0").mCustomScrollbar({
                theme: "dark-2",
                scrollButtons: {
                    enable: false
                }
            });
        }
        if (jQuery("#ul_layered_manufacturer_0").length) {
            jQuery("#ul_layered_manufacturer_0").mCustomScrollbar({
                theme: "dark-2",
                scrollButtons: {
                    enable: false
                }
            });
        }
		if (jQuery(".list-category-fil > ul").length) {
            jQuery(".list-category-fil > ul").mCustomScrollbar({
                theme: "dark-2",
                scrollButtons: {
                    enable: false
                }
            });
        }
		if (jQuery("#categories_block_left div.block_content > ul").length) {
            jQuery("#categories_block_left div.block_content > ul").mCustomScrollbar({
                theme: "dark-2",
                scrollButtons: {
                    enable: false
                }
            });
        }


        $(".choose-category-lists").click(function(){
        	var checkOpen = $(this).closest(".pos_search").hasClass("open");
        	if(!checkOpen){
        		$(this).closest(".pos_search").addClass("open");
        	}else{
        		$(this).closest(".pos_search").removeClass("open");
        	}
        });
        jQuery(document).click(function (event) {
            if (!jQuery(event.target).is(".pos_search *")) {
                $(".pos_search").removeClass("open");
            }
        });
        
        jQuery("#layer_cart .layer_cart_cart .button-container").detach().insertAfter('#layer_cart .layer_cart_product .layer_cart_product_info');
		var idObjPage = jQuery("body").attr("id");
		if(idObjPage == "category"){
			if(parseInt($( window ).width()) <= 991){
			  	jQuery("#left_column").detach().insertAfter('#center_column');
			}
			DORSCRIPT.ResizeCategoryWindow();
		}
		if(idObjPage == "product"){
			if(parseInt($( window ).width()) <= 991){
			  	jQuery("#dor_left_column").detach().insertAfter('#center_column');
			}
			DORSCRIPT.DorResizeCategoryWindow();
		}
		if(parseInt($( window ).width()) <= 767){
			jQuery(".block .title_block").click(function(){
				var checkStatus = jQuery(this).closest(".block").hasClass("block-close");
				if(!checkStatus)
					jQuery(this).closest(".block").addClass("block-close");
				else
					jQuery(this).closest(".block").removeClass("block-close");
			});
			jQuery(".layered_subtitle").click(function(){
				var checkStatus = jQuery(this).closest(".layered_filter").hasClass("block-close");
				if(!checkStatus)
					jQuery(this).closest(".layered_filter").addClass("block-close");
				else
					jQuery(this).closest(".layered_filter").removeClass("block-close");

				var checkPrice = jQuery(this).closest(".layered_price").html();
				if(checkPrice.length != null){
					var checkStatusPrice = jQuery(this).closest(".layered_price").hasClass("block-close");
					if(!checkStatusPrice)
						jQuery(this).closest(".layered_price").addClass("block-close");
					else
						jQuery(this).closest(".layered_price").removeClass("block-close");
				}
			});
		}else{
			jQuery(".block-close").removeClass("block-close");
		}
		if(parseInt($( window ).width()) <= 991){
			jQuery(".shopping_cart > a").click(function(){
				var checkShow = jQuery("#header .cart_block").hasClass("show-mobile-cart");
				if(!checkShow)
					jQuery("#header .cart_block").addClass("show-mobile-cart");
				else
					jQuery("#header .cart_block").removeClass("show-mobile-cart");
				return false;
			});
			jQuery(document).click(function (event) {
	            if (!jQuery(event.target).is(".shopping_cart > a, .shopping_cart > a *, #header .cart_block, #header .cart_block *")) {
	                jQuery("#header .cart_block").removeClass("show-mobile-cart");
	            }
	        });
			jQuery(".header-menu-item-icon .user-icon").click(function(){
				var checkShowUser = jQuery(".user-menu-area").hasClass("openUser");
				if(!checkShowUser)
					jQuery(".user-menu-area").addClass("openUser");
				else
					jQuery(".user-menu-area").removeClass("openUser");
				return false;
			});
			jQuery(document).click(function (event) {
	            if (!jQuery(event.target).is(".header-menu-item-icon .user-icon, .header-menu-item-icon .user-icon *, .user-menu, .user-menu *")) {
	                jQuery(".user-menu-area").removeClass("openUser");
	            }
	        });
		}
	},
	HeadTitle:function(){
		var checkTitle = jQuery("#center_column h1.page-heading").text();
		var checkPage = jQuery("body").attr("id");
		if(checkPage == "dorSmartBlogs"){
			checkTitle = jQuery(".info-title-blog > h1").text();
		}
		if(typeof checkTitle == "undefined" || checkTitle == null || checkTitle.length == 0){
			checkTitle = jQuery("#center_column h1.page-subheading").text();
		}
		if(typeof checkPage != "undefined" && checkPage != "category" && checkPage != "product" && typeof checkTitle != "undefined" && checkTitle != null && checkTitle.length > 0){

			jQuery("h1.category-name").text(checkTitle);
		}
	},
	
	Testimonials:function(){
		$('.testimonials-slide').owlCarousel({
            items: 1,
            loop: true,
            navigation: false,
            nav: true,
            autoplay: true,
            margin:0,
            responsive: {
                0: {items: 1},
                1200: {items: 1},
                1165: {items: 1},
                992: {items: 1},
                768: {items: 1},
                600: {items: 1},
                480: {items: 1},
                320: {items: 1}
            },
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
	},
	SubListCategory:function(){
		$('.dor-two-cols #subcategories > ul').owlCarousel({
            items: 3,
            loop: true,
            navigation: true,
            nav: false,
            autoplay: true,
            margin:30,
            responsive: {
                0: {items: 3},
                1200: {items: 3},
                1165: {items: 3},
                992: {items: 3},
                768: {items: 2},
                600: {items: 2},
                480: {items: 1},
                320: {items: 1}
            },
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
		$('.dor-normal-cols #subcategories > ul').owlCarousel({
            items: 4,
            loop: true,
            navigation: true,
            nav: false,
            autoplay: true,
            margin:30,
            responsive: {
                0: {items: 1},
                1200: {items: 4},
                1165: {items: 3},
                992: {items: 3},
                768: {items: 2},
                600: {items: 2},
                480: {items: 1},
                320: {items: 1}
            },
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
	},
	BlogHome:function(){
		$('.blog-carosul').owlCarousel({
            items: 3,
            loop: true,
            navigation: true,
            nav: true,
            autoplay: false,
            margin:30,
            responsive: {
                0: {items: 3},
                1200: {items: 3},
                1165: {items: 3},
                992: {items: 3},
                768: {items: 2},
                600: {items: 2},
                480: {items: 1},
                320: {items: 1}
            },
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
	},
	HomeFeatured:function(){
		$('.dorHomeFeaturedLists').owlCarousel({
            items: 3,
	        loop: true,
	        navigation: true,
	        nav: true,
	        autoplay: true,
	        margin:30,
	        responsive: {
	            0: {items: 1},
	            1200: {items: 4},
	            992: {items: 4},
	            768: {items: 3},
	            400: {items: 2},
	            300: {items: 1}
	        },
	        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
	},
	AboutUsBrands:function(){
		$('.aboutPartners').owlCarousel({
            items: 5,
	        loop: true,
	        navigation: true,
	        nav: false,
	        autoplay: true,
	        margin:0,
	        responsive: {
	            0: {items: 1},
	            1200: {items: 5},
	            992: {items: 4},
	            500: {items: 3},
	            380: {items: 2},
	            300: {items: 1}
	        },
	        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
	},
	AboutUsFarmers:function(){
		$('.aboutus-ourfarmers').owlCarousel({
            items: 4,
	        loop: true,
	        navigation: true,
	        nav: false,
	        autoplay: true,
	        margin:30,
	        responsive: {
	            0: {items: 1},
	            1200: {items: 4},
	            992: {items: 4},
	            768: {items: 3},
	            400: {items: 2},
	            300: {items: 1}
	        },
	        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
	},
	ScrollFixedMenu:function(){
		n = 100;
		var checkPage = jQuery("body").attr("id");
		$(window).bind('scroll', function() {
	     var navHeight = n;
	       if ($(window).scrollTop() > navHeight) {
	         $('#header').addClass('fixed fixed-tran');
	         var checkLogoFix = jQuery(".logoFixed").html();
	         if(jQuery.trim(checkLogoFix).length == 0){
	          var logo = jQuery(".logo.img-responsive").attr("src");
	          var linkHomePage = jQuery("#header_logo > a").attr("href");
	        }
	       }
	       else {
	         $('#header').removeClass('fixed');
	         $('#header').removeClass('fixed-tran');
	         jQuery(".logoFixed").remove();
	       }
	    });
	},
	ScrollTop:function(){
		jQuery('.to-top').click(function () {
            jQuery('html, body').animate({scrollTop: 0}, 800);
            return false;
        });
        jQuery(window).scroll(function () {
		    if (jQuery(this).scrollTop() > 100) {
		        jQuery('.to-top').css({bottom: '20px'});
		    }
		    else {
		        jQuery('.to-top').css({bottom: '-50px'});
		    }

		});
	},
	ShowPopupScre:function(){
        var localStorPopup = localStorage.getItem("popupScrAgain");
        if(localStorPopup == null && parseInt(localStorPopup) != 1 && typeof sessionStorage['popupScr'] == "undefined" && sessionStorage['popupScr'] != 1){
        	DORSCRIPT.ShowSrc();
        }
        if(typeof sessionStorage['popupScr'] == "undefined" && sessionStorage['popupScr'] != 1){
        	sessionStorage['popupScr'] = 1;
        }
        jQuery("input[name='notShowSubs']").change(function(){
        	if($(this).is(':checked')){
        		localStorage.setItem("popupScrAgain",1);
        	}else{
        		localStorage.removeItem("popupScrAgain");
        	}
        });
        jQuery(".news-letter-button a").click(function(){
        	DORSCRIPT.ShowSrc();
        });
	},
	ShowSrc:function(){
		$('.subscribe-me').bPopup({
	    	easing: 'easeOutBack',
            speed: 800,
            transition: 'slideDown'
        });
	},
	SearchBox:function(){
		jQuery(".close-popsearch").click(function(e){
			e.preventDefault();
			jQuery("#dor_search_top").removeClass("active");
		});
		jQuery(".icon-search").click(function(e){
			e.preventDefault();
			jQuery("#dor_search_top").addClass("active");
		});
	},
	ResizeCategoryWindow:function(){
		$( window ).resize(function() {
		  var widthW = $( window ).width();
		  if(parseInt(widthW) <= 991){
		  	jQuery("#left_column").detach().insertAfter('#center_column');
		  }else{
		  	jQuery("#left_column").detach().insertBefore('#center_column');
		  }
		});
	},
	DorResizeCategoryWindow:function(){
		$( window ).resize(function() {
		  var widthW = $( window ).width();
		  if(parseInt(widthW) <= 991){
		  	jQuery("#dor_left_column").detach().insertAfter('#center_column');
		  }else{
		  	jQuery("#dor_left_column").detach().insertBefore('#center_column');
		  }
		});
	},
	GetInfoProductCart:function(){
		var OrderCart = new Object;
		var shipping = jQuery(".cart-prices .ajax_cart_shipping_cost").text();
		var total = jQuery(".cart-prices .ajax_block_cart_total").text();
		var htmlBillingOrder = "";
		jQuery(".cart_block_list .cart-info").each(function(key,item){
			var productName = jQuery(this).find(".cart_block_product_name").text();
			var productPrice = jQuery(this).find(".price").text();
			var productQuantity = jQuery(this).find(".quantity").text();
			htmlBillingOrder += "<div class='yourOrderBilling'>";
				htmlBillingOrder += "<div class='leftorder pull-left'><span>"+productName+"</span><span>x"+productQuantity+"</span></div><div class='rightorder pull-right'>"+productPrice+"</div>";
			htmlBillingOrder += "</div>";
		});
		jQuery(".listProductDorCart").html(htmlBillingOrder);
		jQuery(".shipProductDorCart").html(shipping);
		jQuery(".totalProductDorCart").html(total);
	},
	ValidateFormReview:function(){
		jQuery("#submitNewMessage").click(function(){
			var name,email,title,comment,validate = true;
			name = jQuery("#commentCustomerName").val();
			email = jQuery("#commentCustomerEmail").val();
			title = jQuery("#comment_title").val();
			comment = jQuery("#content").val();
			var checkEmailValidate = DORSCRIPT.isEmailValidate(email);

			if(jQuery.trim(name).length <= 1){
				jQuery("#commentCustomerName").addClass("hight-light");
				validate = false;
			}else{
				jQuery("#commentCustomerName").removeClass("hight-light");
			}
			if(jQuery.trim(email).length <= 1 || !checkEmailValidate){
				jQuery("#commentCustomerEmail").addClass("hight-light");
				validate = false;
			}else{
				jQuery("#commentCustomerEmail").removeClass("hight-light");
			}
			if(jQuery.trim(title).length <= 1){
				jQuery("#comment_title").addClass("hight-light");
				validate = false;
			}else{
				jQuery("#comment_title").removeClass("hight-light");
			}
			if(jQuery.trim(comment).length <= 3){
				jQuery("#content").addClass("hight-light");
				validate = false;
			}else{
				jQuery("#content").removeClass("hight-light");
			}
			if(!validate) return false;
		});
	},
	isEmailValidate:function (email) {
	  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  return regex.test(email);
	}
}
jQuery(document).ready(function(){
	DORSCRIPT.init();
	DORSCRIPT.GetInfoProductCart();
	DORSCRIPT.ValidateFormReview();
});