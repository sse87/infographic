
/*JS Lint helpers: */
/*global $ */
/*jslint unused:false */

var Key = {
	BACKSPACE: 8,
	TAB: 9,
	ENTER: 13,
	SHIFT: 16,
	CTRL: 17,
	ALT: 18,
	BREAK: 19,
	PAUSE: 19,
	CAPS_LOCK: 20,
	ESC: 27,
	SPACE: 32,
	PAGE_UP: 33,
	PAGE_DOWN: 34,
	END: 35,
	HOME: 36,
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40,
	INSERT: 45,
	DELETE: 46,
	n0: 48, n1: 49, n2: 50, n3: 51, n4: 52,
	n5: 53, n6: 54, n7: 55, n8: 56, n9: 57,
	A: 65, B: 66, C: 67, D: 68, E: 69, F: 70,
	G: 71, H: 72, I: 73, J: 74, K: 75, L: 76,
	M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82,
	S: 83, T: 84, U: 85, V: 86, W: 87, X: 88,
	Y: 89, Z: 90,
	MULTIPLY: 106,
	ADD: 107,
	SUBTRACT: 108,
	DECIMAL_POINT: 109,
	DIVIDE: 110,
	f1: 112, f2: 113, f3: 114, f4: 115,
	f5: 116, f6: 117, f7: 118, f8: 119,
	f9: 120, f10: 121, f11: 122, f12: 123,
	isArrow: function (k) {
		k = k.which ? k.which : k;
		switch (k) {
			case Key.LEFT:
			case Key.RIGHT:
			case Key.UP:
			case Key.DOWN:
				return true;
		}
		return false;
	},
	isControl: function (e) {
		var k = e.which;
		switch (k) {
			case Key.SHIFT:
			case Key.CTRL:
			case Key.ALT:
				return true;
		}
		if (e.metaKey) {
			return true;
		}
		return false;
	},
	isFunctionKey: function (k) {
		k = k.which ? k.which : k;
		return k >= 112 && k <= 123;
	}
};

// http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
