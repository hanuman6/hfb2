//外部モジュールの読み込み
import isMobile from 'ismobilejs';
import userAgentChecker from './js/lib/userAgentChecker.js';

// Sassの読み込み
import './sass/main.scss';

// 内製モジュールを読み込み
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

  // UA判定による発火切替
  if (isMobile) {
    console.info('[isMobile is SP]');
  }

  // PCとSPの発火切替
  var mql = window.matchMedia('screen and (max-width: 780px)');
  function checkBreakPoint(mql) {
    if (mql.matches) {
      // スマホ向け
      console.info('[matchMedia is SP]');
    } else {
      // PC向け
      console.info('[matchMedia is PC]');
    }
  }
  mql.addListener(checkBreakPoint);
  checkBreakPoint(mql);

});//end query
