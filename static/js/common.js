$(document).ready(function(){
	$('.legs').addClass('js-animation_start');

	$(function () {

		/*--- animation menu ---*/
		/*---------------------------------------------------------------------*/
		Global_main.animationMenu({
			panel: '.header__list',
			toggle: '.toggler',
			wrapper: '.mob_wraper'
		});

	})
});