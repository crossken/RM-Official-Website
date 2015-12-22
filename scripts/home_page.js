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
	$('#search-img').click(function() {
		var $searchBar = $('#search-bar');
		$searchBar.animate({height:'show'}, 600,'easeInOutQuint').find('a').click(function(){
			$searchBar.animate({height:'hide'}, 600,'easeInOutQuint');
			return false;
		});
	});
	// $('#search-img :text').focus(function() {
	// 	$(this).css('outline', 'none');
	// });



	// 轮播头图
	var titles =[
	"西甲第4轮：皇家马德里7:1希洪竞技",
	"皇家马德里2:1击败巴塞罗那获得国王杯",
	"皇马抵达训练场备战热身赛，C罗、贝尔、J罗相继亮相。"
	];

	function movePic () {
		index++;
		zIndex++;
		$('.small-pic').find('li').eq(index).addClass('nowpic').siblings().removeClass();
		var $nowLi = $('.big-pic>ul').find('li').eq(index);
		$nowLi.hide().css('zIndex', zIndex).show('slow');
		$('.text').html(titles[index]);
		if (index == 2) {index = -1};

	}

	var index = 0;
	var zIndex = 1;
	var timer = setInterval(movePic,4000);
	$('.small-pic>ul').mouseover(function() {
		clearInterval(timer);
	}).mouseout(function() {
		timer = setInterval(movePic,4000)
	});
	$('.small-pic li').click(function() {
		index = parseInt($(this).index())-1;
		movePic();
	});


	// 固定顶栏
	$navLogo = $('.nav-logo');
	$navLogo.hide();
	var navState = false;
	window.onscroll = function () {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		// console.log(navState);
		if ((scrollTop >= 117)&&(!navState)) {
			// alert(navState);
			$('.nav').css({
				position: 'fixed',
				top: 0,
				left:0,
				zIndex:9999,
				borderBottom:'1px solid #ccc'
			});

			$navLogo.show('slow');

			navState = true;
		}

		if (scrollTop < 117) {

			$('.nav').css({
				position: 'static',
			});
			navState = false;
			$navLogo.hide();
		}

	}

});
