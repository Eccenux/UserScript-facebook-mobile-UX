// ==UserScript==
// @name         Facebook Mobile UX
// @namespace    pl.enux.facebook.mobile
// @version      0.0.3
// @description  [0.0.3] Poprawki UX dla Facebooka w wersji mobilnej.
// @author       Eccenux
// @match        https://m.facebook.com/*
// @grant        GM_addStyle
// @updateURL    https://github.com/Eccenux/UserScript-facebook-mobile-UX/raw/master/facebook-mobile-UX.meta.js
// @downloadURL  https://github.com/Eccenux/UserScript-facebook-mobile-UX/raw/master/facebook-mobile-UX.user.js
// ==/UserScript==

(function() {
	'use strict';
	
	// document.querySelectorAll('[data-sigil*=m-conversation-guide]').forEach((a)=>{a.style.display='none'})
	
	// <div class="_129_ _1gxz" id="header-notices"><div data-sigil="m-megaphone"><div class="_clh"><div data-sigil="m-promo"><div class="_55ws _4g33 _52we _cld"><div class="_5s61"><div class="_5s61 _5i2i _52we"><div class="_5xu4"><a class="close_icon" href="/qp/action/close/?..." tabindex="-1" data-ajaxify-href="/qp/action/close/?..." data-sigil="m-promo-close ajaxify"><i class="img sp_6AGZn8z_s44_3x sx_6674c5"></i></a></div></div></div><div class="_5s61 _clg"><i class="img img _2sxw" data-store="..." style="..."></i></div><div class="_4g34"><span class="_52jd _cle">Maciej, wypróbuj Facebook Lite – tylko 2 MB.</span></div><div class="_5s61 _clf"><a href="/qp/action/redirect/?..." role="button" class="_54k8 _56bs _26vk _QPStickyBannerTemplate__promo-button _56bu _52jg" tabindex="-1" data-ajaxify-href="/qp/action/redirect/?..." data-sigil="touchable m-promo-close ajaxify"><span class="_55sr">Zainstaluj</span></a></div></div></div></div><div class="_clj _cli _2qbw"><div data-sigil="m-promo"><div class="_55ws _4g33 _52we _cld"><div class="_5s61"><div class="_5s61 _5i2i _52we"><div class="_5xu4"><a class="close_icon" href="/qp/action/close/?..." tabindex="-1" data-ajaxify-href="/qp/action/close/?..." data-sigil="m-promo-close ajaxify"><i class="img sp_6AGZn8z_s44_3x sx_6674c5"></i></a></div></div></div><div class="_5s61 _clg"><i class="img img _2sxw" data-store="..." style="..."></i></div><div class="_4g34"><span class="_52jd _cle">Maciej, wypróbuj Facebook Lite – tylko 2 MB.</span></div><div class="_5s61 _clf"><a href="/qp/action/redirect/?..." role="button" class="_54k8 _56bs _26vk _QPStickyBannerTemplate__promo-button _56bu _52jg" tabindex="-1" data-ajaxify-href="/qp/action/close/?..." data-sigil="touchable m-promo-close ajaxify"><span class="_55sr">Zainstaluj</span></a></div></div></div></div></div></div>
	
	/**
		Add CSS.
	*/
	function addCss() {
		// m-conversation-guide = emoji stickers answers
		// #header-notices = install f.lite
		var cssText = `
			[data-sigil*=m-conversation-guide] {
				display:none !important;
			}
			#header-notices {
				display:none !important;
			}
			[data-sigil*=comment-body],
			.story_body_container {
				-moz-user-select: text;
				user-select: text;
			}
		`;
		GM_addStyle(cssText);
	}
	addCss();
})();