/************* 전역변수 **************/
var sctop;

/************* 네비게이션 **************/
$("li.navi").mouseenter(onEnter);
$("li.navi").mouseleave(onLeave);

function onEnter() {
	$(this).find(".navi-lists").stop().slideDown();
}

function onLeave() {
	$(this).children(".navi-lists").stop().slideUp();
}


/* 
$("li.navi-list").mouseenter(onSubEnter);
$("li.navi-list").mouseleave(onSubLeave);

function onSubEnter() {
	$(this).find("ul.sub-navi-wrap").stop().fadeIn(200);
}

function onSubLeave() {
	$(this).children("ul.sub-navi-wrap").stop().fadeOut(200);
}
 */

/************* dark-mode **************/
$(".dark-mode").click(onDarkMode);

function onDarkMode() {
	$(this).find("a.dot").toggleClass("dark");
	$(this).find("img.sun-w").toggleClass("dark");

	if($("img.sun-w").hasClass("dark")) {
		$("img.sun-w").attr("src", "../img/sun_white.svg");
	}
	else {
		$("img.sun-w").attr("src", "../img/sun.svg");
	}
	
	$(this).find("img.moon-w").toggleClass("dark");
	if($("img.moon-w").hasClass("dark")) {
		$("img.moon-w").attr("src", "../img/moon_white.svg");
	}
	else {
		$("img.moon-w").attr("src", "../img/moon.svg");
	}

	$(".logo-wrap").find("img.logo").toggleClass("dark");
	if($("img.logo").hasClass("dark")) {
		$("img.logo").attr("src", "../img/logo-white.png");
	}
	else {
		$("img.logo").attr("src", "../img/logo.png");
	}
	$("body").toggleClass("dark");
	$(".header-bg").toggleClass("dark"); 
	$(".switch").toggleClass("dark"); 
	$(".bar").toggleClass("dark"); 
	$(".main-wrapper").toggleClass("dark"); 
	$(".underline").toggleClass("dark"); 
	$(".main-left").toggleClass("dark"); 
	$("ul.navi-lists").toggleClass("dark"); 
	$("ul.sub-navi-wrap").toggleClass("dark"); 
	$(".pager").toggleClass("dark"); 
	$(".phrase").find("p").toggleClass("dark"); 
	$(".title-wrap").toggleClass("dark"); 
	$(".pop-wrapper h2").toggleClass("dark"); 
	$("li.pop").toggleClass("dark"); 

	$("img.arrow").toggleClass("dark");
	if($("img.arrow").hasClass("dark")) {
		$("img.arrow").attr("src", "../img/arrow_white.svg");
	}
	else {
		$("img.arrow").attr("src", "../img/arrow.svg");
	}

	$(".banner-wrap").toggleClass("dark"); 
	$(".bann-left").toggleClass("dark"); 
	$(".bann-right").find(".dot").toggleClass("dark"); 
	$(".f-right").toggleClass("dark"); 
	$(".f-right").find("li.circle").toggleClass("dark"); 
	$(".back-top").toggleClass("dark"); 

	$(".f-left").find("img.f-logo").toggleClass("dark");
	if($("img.f-logo").hasClass("dark")) {
		$("img.f-logo").attr("src", "../img/footer_logo_white.png");
	}
	else {
		$("img.f-logo").attr("src", "../img/footer_logo.png");
	}
	$(".f-left").css("border-color","#fff");
	$(".f-right").css("border-color","#fff");
}



/************* .main-slide **************/
(function(){
	var slides = [
		{id: 0, src: '../img/right_slide01.jpg', title: 'Triple fox head Tshirts', categ:'Top', price:'$155.65'},
		{id: 1, src: '../img/right_slide02.jpg', title: 'Triple fox sweatshirt', categ:'Knitwear', price:'$303.48'},
		{id: 2, src: '../img/right_slide03.jpg', title: 'Triple fox badge', categ:'Accessories', price:'$36.52'},
		{id: 3, src: '../img/right_slide04.jpg', title: 'A kitsune cap', categ:'Headwear', price:'$120.87'}
	];
	
	
		var $slideStage = $(".main-right .stage");
		var $slideWrap = $(".stage .slide-wrap");
		var $pagerWrap = $(".stage .pager-wrap");
		var $pager;
		var $slides = []; 
		var idx = 0; 
		var lastIdx = slides.length - 1; 
		var interval; 
	
	
		function init() {
			var html,i;
			for (i in slides) {
				html = '<div class="slide">'
				html += '<img class="w-100" src="'+slides[i].src+'">';
				html += '<div class="txt-wrap">'
				html += '<div class="txt-l">'
				html += '<div class="txt-title">'+slides[i].title+'</div>';
				html += '<div class="txt-categ">'+slides[i].categ+'</div>';
				html += '</div>'; /* /.txt-l */
				html += '<div class="txt-price">'+slides[i].price+'</div>';
				html += '</div>';	/* /.txt-wrap */
				html += '</div>';  /* /.slide */
				$slides[i] = $(html);
	
				html = '<span class="pager"></span>'; 
				$pagerWrap.append(html); 
				}
	
			$pager = $pagerWrap.find(".pager");
			$pager.click(onPagerClick).eq(idx).addClass("active");
			slideInit();
			interval = setInterval(onInterval, 4000);
		}
	
		function slideInit() {
			$slideWrap.html($slides[idx].clone());
		}
	
		$slideStage.mouseover(onHover);
		$slideStage.mouseleave(onLeave);
	
		function onHover() {
			clearInterval(interval);
		}
		function onLeave() {
			interval = setInterval(onInterval, 4000);
		}
	
	
		function onPagerClick() {
			idx = $(this).index();
			ani();
		}
	
		function onInterval() {
			idx = (idx == lastIdx) ? 0 : idx + 1;
			ani();
		}
	
		function ani() {
			$pager.removeClass("active");
			$pager.eq(idx).addClass("active");
	
			$($slides[idx].clone()).appendTo($slideWrap).addClass("active").animate({"opacity":1},500, slideInit);
	/* 		$(".txt-wrap").removeClass("active")
			$(".txt-wrap").eq[idx].addClass("active") */
			/* .css({"position": "absolute", "top":0, "opacity": 0})) */
		}
		init();
	})(); 





/************* text 슬라이드 **************/

$(window).scroll(function () {
	var sctop = $(document).scrollTop();
	console.log(sctop);
	if(sctop > 100) {
		$(".wide").css("transform", "translateX(-"+sctop+"px)");
	}
});

/************* selection hover **************/

/*
$("li.list").mouseenter(listEnter);
$("li.list").mouseleave(listLeave);

function listEnter(){
	$(this).find(".add-cart").stop().fadeIn(500);
} 
function listLeave(){
	$(this).find(".add-cart").stop().fadeOut(500);
} 
*/

/************* play mouseAni **************/

$(".play-wrap .play").mousemove(function(e){
	var x = e.offsetX;
	var y = e.offsetY;
	var wid = $(this).outerWidth() / 2;
	var hei = $(this).outerHeight() / 2;
	var tarX = x - wid;
	var tarY = y - hei;
	if(tarX > -300 && tarX < 300 && tarY > -150 && tarY < 150) {
		$(this).css("transform", "translate("+tarX+"px,"+tarY+"px)");
	}
	else {
		$(this).css("transform", "translate(0, 0)");
	}
});



/************* pop-hoverAni **************/

$("li.pop").mouseenter(popEnter);
$("li.pop").mouseleave(popLeave);

function popEnter() {
	$(this).find(".img-hover").css("display", "block");
	$(this).find(".img-hover img").css("transform");
	$(this).find(".img-hover img").css("transform", "scaleX(1)");
}
function popLeave() {
	$(this).find(".img-hover img").css("transform", "scaleX(1.3)");
	$(this).find(".img-hover").css("display", "none");
}

/************* back-to-top **************/


$(window).scroll(function() {
	sctop = $(document).scrollTop();
	if(sctop<=500) {
		$(".back-top").stop().fadeOut(200);
	}
	else {
		$(".back-top").stop().fadeIn(200);
	}
});

$(".back-top").click(onTopClick);
function onTopClick() {
	$('html,body').animate({scrollTop:0},500);
}
