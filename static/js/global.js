var Global_main = new GlobalMainClass();

function GlobalMainClass() {
	var globalScope = this;

	/*--- animation menu ---*/
	/*---------------------------------------------------------------------*/
	this.animationMenu = function(opt) {
		var $panel = $(opt.panel);
		var $toggle = $(opt.toggle);
		var $wrapper = $(opt.wrapper);

		$toggle.click(function() {
			if(!$panel.hasClass('opened')) {
				$panel.addClass('opened');

				$toggle.addClass('active');
			}
			else {
				$panel.removeClass('opened');

				$toggle.removeClass('active');
			}

			if($wrapper != undefined) {
				if(!$wrapper.hasClass('opened')) {
					$wrapper.addClass('opened');

					$toggle.addClass('active');
				}
				else {
					$wrapper.removeClass('opened');

					$toggle.removeClass('active');
				}
			}
		});
	}
}