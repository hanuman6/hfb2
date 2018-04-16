/**************************************************
 * ES5(jQuery)関数
 *************************************************/

// --- 動作テスト -----------------------------------
module.exports.es5CheckFunc = () => {

	let es5 = '[ES5 is working]';
	console.info(es5);
}

// --- アコーディオン処理 -----------------------------
module.exports.showAccordionFunc = ($accodionClassName) => {

	var $accodionClassName = $($accodionClassName);
	$accodionClassName.next('*').hide();
	$accodionClassName.on('click', function() {
		if($(this).hasClass('show-accordion')){
			$(this).removeClass('show-accordion').next('*').slideUp();
		} else {
			$(this).addClass('show-accordion').next('*').slideDown();
		}
	});

}

// --- アコーディオン処理2 ----------------------------
module.exports.showAllAccordionFunc = ($accodionAllClassName) => {

	var $accodionAllClassName = $($accodionAllClassName + ' dt');

	$accodionAllClassName.on('click', function() {
		if($(this).hasClass('show')){
			$(this).removeClass('show').parent('dl').children('dd').slideUp('fast');
		} else {
			// 常に一つだけの処理
			$(this).addClass('show').parent('dl').children('dd').slideUp('fast');
			$(this).next('dd').slideDown('fast');
			// 個別に処理する場合（デフォルトコメントアウト）
			// $(this).addClass('show').next('dd').slideDown('fast');
		}
	});

}

// --- TAB処理 ------------------------------------
module.exports.showTabFunc = ($tabChooseClassName,$tabContentsClassName) => {

	var $tabChooseClassName = $($tabChooseClassName + '> *');
	var $tabContentsClassName = $($tabContentsClassName + '> *');

	var tab = $tabChooseClassName,
			tabChild = $tabContentsClassName,
			url = location.href,
			hash = [];
			hash = new Array();
			hash = url.split('#');

	if(hash[1]){
		var indexId = tab.index($('.' + hash[1]));
		tab.eq(indexId).addClass('show-tab');
		tabChild.hide().eq(indexId).show().addClass('show-tab-child');
	} else {
		tab.eq(0).addClass('show-tab');
		tabChild.hide().eq(0).show().addClass('show-tab-child');
	}
	tab.click(function() {
		var index = tab.index(this);
		tab.removeClass('show-tab');
		$(this).addClass('show-tab');
		tabChild.hide().removeClass('show-tab-child').eq(index).show().addClass('show-tab-child');
	});

}

// --- ページトップ ----------------------------------
module.exports.goToPageTopFunc = ($pageTopId) => {

	var $pageTopId = $($pageTopId);
	$pageTopId.click(function() {
		$('html, body').animate({scrollTop:0}, 500, 'swing');
		return false;
	});

}

// --- スムーススクロール ------------------------------
module.exports.smoothScrollMoveFunc = ($goToClassName) => {

	var $goToClassName = $($goToClassName);
	$goToClassName.click(function(){
		var speed = 500;
		var href= $(this).attr('href');
		var target = $(href == '#' || href == '' ? 'html' : href);
		var position = target.offset().top;
		$('html, body').animate({scrollTop:position}, speed, 'swing');
		return false;
	});

}
