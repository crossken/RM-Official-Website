$(function() {

	// 通过事件委托阻止所有链接的默认点击事件
	$('body').on('click', 'a', function(event) {
		event.preventDefault();
	});

	// 下拉菜单
	$('.dropdown-menu').mouseover(function(){
		$(this).find('ul').stop().show('fast');
	}).mouseout(function(){
		$(this).find('ul').stop().hide('fast');
	});

	// 搜索框
	var $searchBar = $('#search-bar');
	$('#search-img').click(function() {
		$searchBar.animate({height:'show'}, 600,'easeInOutQuint').find('a').click(function(){
			$searchBar.animate({height:'hide'}, 600,'easeInOutQuint');
			return false;
		});
	});



	// 轮播头图

	$smallPic = $('.small-pic');
	$bigPic = $('.big-pic');

	var titles =[
	"西甲第4轮：皇家马德里7:1希洪竞技",
	"皇家马德里2:1击败巴塞罗那获得国王杯",
	"皇马抵达训练场备战热身赛，C罗、贝尔、J罗相继亮相。"
	];

	function movePic () {
		if (index == 2) {index = -1};
		index++;
		zIndex++;
		$smallPic.find('li').eq(index).addClass('nowpic').siblings().removeClass();
		$bigPic.find('li').eq(index).hide().css('zIndex', zIndex).show('slow');
		$('.text').html(titles[index]);
	}

	var index = 0;
	var zIndex = 1;
	var timer = setInterval(movePic,4000);
	$smallPic.find('ul').mouseover(function() {
		clearInterval(timer);
	}).mouseout(function() {
		timer = setInterval(movePic,4000)
	});
	$smallPic.find('li').click(function() {
		if (index == $(this).index()) return;
		index = $(this).index()-1;
		movePic();
	});



	// 固定导航栏
	$nav = $('#nav');
	$navLogo = $('.nav-logo');
	$navLogo.hide();
	var navState = false;
	$(window).scroll(function(event) {
		if (($(window).scrollTop() >= 117) && (!navState)) {
			$nav.addClass('scroll-nav');
			$navLogo.show('slow');
			navState = true;
		}
		if (($(window).scrollTop() < 117) && (navState)) {
			$nav.removeClass();
			$navLogo.hide();
			navState = false;
		}
	});

	//主内容区
	$('.col-main article').mouseover(function() {
		$(this).find('img').stop().animate({opacity: '0.5'}, '400');
	}).mouseout(function() {
		$(this).find('img').stop().animate({opacity: '1'}, '200');
	});

	//奖杯滚动
	var cupNo = 0;
	$gallery = $('#cups ul');
	$cups = $gallery.find('li');
	$gallery.css('width', $cups.length * ($cups.eq(1).width()+1) + 'px');
	$('#cups .next').click(function() {
		if (!$gallery.is(':animated')) {
			if (cupNo == 0) {
				$('#cups .prev').show();
			}
			$gallery.animate({left: '-=120px'}, 'fast');
			cupNo++;
			if (cupNo == $cups.length-8) {
				$(this).hide();
			}
		}
	});
	$('#cups .prev').click(function() {
		if (!$gallery.is(':animated')) {
			if (cupNo == $cups.length-8) {
				$('#cups .next').show();
			}
			$gallery.animate({left: '+=120px'}, 'fast');
			cupNo--;
			if (cupNo == 0) {
				$(this).hide();
			}
		}
	});

	//回到顶部按钮
	$toTOp = $('#totop');
	$(window).scroll(function() {
		$toTOp.stop().animate({top: $(this).scrollTop() + $(this).height() - 120 + 'px'}, 2000, 'easeOutQuint');
		if ($(window).scrollTop() > 300) {
			$toTOp.show();
		} else {
			$toTOp.hide();
		};
	});
	$toTOp.click(function() {
		$(window).scrollTop(0);
	});


});
