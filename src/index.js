// 外部モジュールを読み込み
const modernizr = require('./js/lib/modernizr-custom.js');
const userAgentChecker = require('./js/lib/userAgentChecker.js');
const flexibility = require('./js/lib/flexibility.js');

// Sassの読み込み
import './sass/main.scss';

// 内製モジュールを読み込み
//const es6 = require('./js/es6.js');
import es6 from './js/es6.js';
import es5 from './js/es5.js';

/**************************************************
 * ES6実行
 *************************************************/

es6.es6CheckFunc();

/**************************************************
 * ES5(jQuery)実行
 *************************************************/

es5.es5CheckFunc();

// --- ページの全データを読み込み後 ----------------------
$(window).on('load', function() {


});//end query

// --- リサイズが走った場合 ----------------------------
$(window).on('resize', function() {



});//end query

// --- リサイズとロード後 ------------------------------
$(window).on('load resize', function() {



});//end query

// --- DOM生成後 ------------------------------------
$(function(){

	// 共通実行
  es5.goToPageTopFunc('#pageTop');
  es5.smoothScrollMoveFunc('a.scroll');
  es5.showAccordionFunc('.js-accordion');
  es5.showAllAccordionFunc('.js-all-accordion');
  es5.showTabFunc('.js-tab','.js-tab-child');

  // トップページ
  if($('#topPage').length){

  }

	// PCのみ
	if(Modernizr.mq('only screen and (min-width: 768px)')) {

	}

	// SPのみ
	if(Modernizr.mq('only screen and (max-width: 767px)')) {

	}

});//end query
