

$(document).ready(function(){

		function themeAdd(url1,url2,firstImgBgClass,secondImgBgClass,bgClass) {
			this.url1 = url1;
			this.url2 = url2;	
			this.firstImgBgClass = firstImgBgClass;
			this.secondImgBgClass = secondImgBgClass;
			this.bgClass = bgClass;
		}

		var images = {
			"orange" :  new themeAdd("images/img_red_1.png","images/img_red_2.png"),
			"dark-blue" : new themeAdd("images/img_blue_1.png","images/img_blue_2.png"
									,"dark-blue-icon-1", "dark-blue-icon-2", "bg-color-dark-blue")
		}

		var $img1 = $("#img1");
		var $img1Url = $("#img1 img");
		var $img2 = $("#img2");
		var $img2Url = $("#img2 img");
		var $bgColor = $("#bg");
		var $langList = $("#languige-list li a");
		var $colorList = $("#color-list li");
		var $navList = $("#nav-list li a");

		$langList.click(function(){
			$("#languige-list li a").removeClass("active-type-3");
	        $(this).addClass("active-type-3");
		});

		$colorList.click(function(){
			if(!$(this).hasClass("active-type-2")) {
				$bgColor.removeClass();
				$colorList.removeClass();
				$img1.removeClass();
				$img2.removeClass();
			    $img1.addClass(images[this.id].firstImgBgClass);
        		$img2.addClass(images[this.id].secondImgBgClass);
        		$bgColor.addClass(images[this.id].bgClass);
         		$img1Url.attr("src",images[this.id].url1);
        		$img2Url.attr("src",images[this.id].url2);	
			$("#color-list li").removeClass("active-type-2");
        	$(this).addClass("active-type-2");
        	}
		});

		$navList.click(function(){
			$("#nav-list li a").removeClass("active");
	        $(this).addClass("active");
		});

});