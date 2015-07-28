var main = function(){
	tlProductContainer = new TimelineLite({paused:true});
	tlFavorite = new TimelineLite({paused:true});
	tlProductBuy = new TimelineLite({paused:true});
	tlProductWish = new TimelineLite({paused:true});


	tlProductContainer.add([TweenLite.to($('.product-price'), 1, {left:0, top:600, ease:Power2.easeInOut}),
	TweenLite.to($('.product-favorite'), 1, {left:250, top:300, ease:Power2.easeInOut})]);

	tlFavorite.add(TweenLite.to($('.product-favorite'), 0.5, {borderRadius:0}));

	tlProductBuy.add(TweenLite.to($('.product-buy'), 0.5, {borderRadius:0}));
	tlProductWish.add(TweenLite.to($('.product-wishlist'), 0.5, {borderRadius:0}));

	$('.product-container').hover(function(){
		tlProductContainer.play();
	},function(){
		tlProductContainer.reverse();
	});


	$('.product-favorite').hover(function(){
		tlFavorite.play();
	},function(){
		tlFavorite.reverse();
	});

	$('.product-buy').hover(function(){
		tlProductBuy.play();
	},function(){
		tlProductBuy.reverse();
	});

	$('.product-wishlist').hover(function(){
		tlProductWish.play();
	},function(){
		tlProductWish.reverse();
	});

	//get today
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	function createCal(year, month) {
		var numOfDays = getNumberOfDays(year,month-1);
		var day = new Date(year,month-1,1).getDay();//0 is Sunday
	}
	function getNumberOfDays(year, month) {
	    var isLeap = ((year % 4) == 0 && ((year % 100) != 0 || (year % 400) == 0));
	    return [31, (isLeap ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
	}
};

$(document).ready(main);