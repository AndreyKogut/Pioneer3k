
function themeAdd(url1,url2,firstImgBgColor,secondImgBgColor,bagColor) {
			this.url1 = url1;
			this.url2 = url2;	
			this.firstImgBgColor = firstImgBgColor;
			this.secondImgBgColor = secondImgBgColor;
			this.bagColor = bagColor;
		};

		var styles = {
			"orange" :  new themeAdd("images/img_red_1.png","images/img_red_2.png"
									,"#00ffae", "#fff600", "#d14c2b"),
			"dark-blue" : new themeAdd("images/img_blue_1.png","images/img_blue_2.png"
									,"#fff600", "#fff", "#186ba4")
		};

$(window).on('load', function() {
	$('#preload').delay(2000).fadeOut('slow');
});



$(document).ready(function(){		

		function calc(g, theme, img1Top, img2Top, img1Color, img2Color, bg, imgPad){
				
					$("#bg").css('background','linear-gradient(' + styles[theme].bagColor + ' 0%, ' + styles[theme].bagColor + ' ' + g + '%,' + bg + ' 0%,' + bg +' 100%)'); 
					$znach = g*parseInt($(window).height())/100;
					var $firstImageHoverPosition = $znach - img1Top - parseInt(imgPad);
					var $secondImageHoverPosition = $znach - img2Top - parseInt(imgPad);
					$('head style').remove();		    		
					$('head').append(
						'<style>'+
					 '#img1:before { \n' +
					 'background: linear-gradient('+ styles[theme].firstImgBgColor + ' 0, ' + styles[theme].firstImgBgColor+ ' ' + $firstImageHoverPosition 
					 	+ 'px,' +  img1Color +  ' 0%,' + img1Color + ' 100%) \n } \n' +
					'#img2:before { \n' +
					 'background: linear-gradient('+ styles[theme].secondImgBgColor + ' 0, ' + styles[theme].secondImgBgColor+ ' ' + $secondImageHoverPosition
					 	+ 'px,' +  img2Color +  ' 0%,' + img2Color + ' 100%) \n } \n' +
					 '</style>'
						 );

					if(((img1Top + $img1Url.height()/2) <= $znach) && check1 === true) {
							$img1Url.fadeOut(300);
							setTimeout(function(){$img1Url.attr("src",styles[theme].url1)},300);
							$img1Url.fadeIn(300);
							check1 = false;
						};

					if(((img2Top+ $img2Url.height()/2) <= $znach) && check2 === true){
							$img2Url.fadeOut(300);
        					setTimeout(function(){$img2Url.attr("src",styles[theme].url2)},300);
        					$img2Url.fadeIn(300);
        					check2 = false;
        				};


				};

		var myCurrentImgTop = window.getComputedStyle(document.querySelector('#img1'), ':before').getPropertyValue('top');
		var myCurrentFirstImgColor = window.getComputedStyle(document.querySelector('#img1'), ':before').getPropertyValue('background-color');
		var myCurrentSecondImgColor = window.getComputedStyle(document.querySelector('#img2'), ':before').getPropertyValue('background-color');
		var myCurrentBgColor = window.getComputedStyle(document.querySelector('#bg'), '').getPropertyValue('background-color');
		var $img1 = $("#img1");
		var $img1Url = $("#img1 img");
		var $img2 = $("#img2");
		var $img2Url = $("#img2 img");
		var $bgColor = $("#bg");
		var $langList = $("#languige-list li a");
		var $colorList = $("#color-list li");
		var $navList = $("#nav-list li a");
		var $mainWrapperPosition =  0;
		var timers = new Array();
		var check1 = true;
		var check2 = true;
		var themeHoverTime = 10; // *100 msec

		$langList.click(function(){
			$("#languige-list li a").removeClass("active-type-3");
	        $(this).addClass("active-type-3");
		});

		$navList.click(function(){
			$("#nav-list li a").removeClass("active");
	        $(this).addClass("active");
		});

		$('#bg').css('padding-top', ($(window).height()/2-$('.main-wrapper').height()/2) ); 
		
		$colorList.click(function(){

			if( !$(this).hasClass("active-type-2")) {
			for (var i = 0; i < timers.length; i++)
				{
				    clearInterval(timers[i]);
				}

			var $img1ChangingPoint = $('#img1 img').offset().top;
			var $img2ChangingPoint = $('#img2 img').offset().top;
			var $currentColor = this.id;
			var k = 0;
         	var timer = setInterval(function(){
         			calc(k,$currentColor, $img1ChangingPoint, $img2ChangingPoint, myCurrentFirstImgColor, myCurrentSecondImgColor,
         				myCurrentBgColor, myCurrentImgTop);
         			k++;

         			if(k===101) {
					    $img1.css('background-color',styles[$currentColor].firstImgBgColor);
		        		$img2.css('background-color',styles[$currentColor].secondImgBgColor);
		        		$bgColor.css('background-color',styles[$currentColor].bagColor);
 						myCurrentBgColor = styles[$currentColor].bagColor;
						myCurrentSecondImgColor = styles[$currentColor].secondImgBgColor;
						myCurrentFirstImgColor = styles[$currentColor].firstImgBgColor;};	
         			if (k>100) clearInterval(timer);
         		},themeHoverTime);

   			timers.push(timer);
   			check1 = true; check2=true;
			$("#color-list li").removeClass("active-type-2");
			$(this).addClass("active-type-2");
		}
	});

		/* end */

		
		
});