// ==UserScript==
// @name         Facebook Mobile UX
// @namespace    pl.enux.facebook.mobile
// @version      0.0.1
// @description  [0.0.1] Poprawki UX dla Facebooka w wersji mobilnej.
// @author       Eccenux
// @match        https://m.facebook.com/*
// @grant        GM_addStyle
// @updateURL    https://github.com/Eccenux/UserScript-facebook-mobile-UX/raw/master/facebook-mobile-UX.meta.js
// @downloadURL  https://github.com/Eccenux/UserScript-facebook-mobile-UX/raw/master/facebook-mobile-UX.user.js
// ==/UserScript==

(function() {
	'use strict';
	
	// document.querySelectorAll('[data-sigil*=m-conversation-guide]').forEach((a)=>{a.style.display='none'})

	/**
		Add CSS.
	*/
	function addCss() {
		var cssText = `
			[data-sigil*=m-conversation-guide] {
				display:none !important;
			}
		`;
		GM_addStyle(cssText);
	}
	addCss();
})();