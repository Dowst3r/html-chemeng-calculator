var _1_1 = document.getElementById('1-1');
var _1_2 = document.getElementById('1-2');
var _1_3 = document.getElementById('1-3');
var _1_4 = document.getElementById('1-4');
var _1_5 = document.getElementById('1-5');
var _1_6 = document.getElementById('1-6');
var _1_7 = document.getElementById('1-7');
var _1_8 = document.getElementById('1-8');
var _1_9 = document.getElementById('1-9');
var _2_1 = document.getElementById('2-1');
var _2_2 = document.getElementById('2-2');
var _2_3 = document.getElementById('2-3');
var _2_4 = document.getElementById('2-4');
var _2_5 = document.getElementById('2-5');
var _2_6 = document.getElementById('2-6');
var _2_7 = document.getElementById('2-7');
var _2_8 = document.getElementById('2-8');
var _2_9 = document.getElementById('2-9');
var _3_1 = document.getElementById('3-1');
var _3_2 = document.getElementById('3-2');
var _3_3 = document.getElementById('3-3');
var _3_4 = document.getElementById('3-4');
var _3_5 = document.getElementById('3-5');
var _3_6 = document.getElementById('3-6');
var _3_7 = document.getElementById('3-7');
var _3_8 = document.getElementById('3-8');
var _3_9 = document.getElementById('3-9');
var _4_1 = document.getElementById('4-1');
var _4_2 = document.getElementById('4-2');
var _4_3 = document.getElementById('4-3');
var _4_4 = document.getElementById('4-4');
var _4_5 = document.getElementById('4-5');
var _4_6 = document.getElementById('4-6');
var _4_7 = document.getElementById('4-7');
var _4_8 = document.getElementById('4-8');
var _4_9 = document.getElementById('4-9');
var _5_1 = document.getElementById('5-1');
var _5_2 = document.getElementById('5-2');
var _5_3 = document.getElementById('5-3');
var _5_4 = document.getElementById('5-4');
var _5_5 = document.getElementById('5-5');
var _5_6 = document.getElementById('5-6');
var _5_7 = document.getElementById('5-7');
var _5_8 = document.getElementById('5-8');
var _5_9 = document.getElementById('5-9');
var _6_1 = document.getElementById('6-1');
var _6_2 = document.getElementById('6-2');
var _6_3 = document.getElementById('6-3');
var _6_4 = document.getElementById('6-4');
var _6_5 = document.getElementById('6-5');
var _6_6 = document.getElementById('6-6');
var _6_7 = document.getElementById('6-7');
var _6_8 = document.getElementById('6-8');
var _6_9 = document.getElementById('6-9');
var _7_1 = document.getElementById('7-1');
var _7_2 = document.getElementById('7-2');
var _7_3 = document.getElementById('7-3');
var _7_4 = document.getElementById('7-4');
var _7_5 = document.getElementById('7-5');
var _7_6 = document.getElementById('7-6');
var _7_7 = document.getElementById('7-7');
var _7_8 = document.getElementById('7-8');
var _7_9 = document.getElementById('7-9');
var _8_1 = document.getElementById('8-1');
var _8_2 = document.getElementById('8-2');
var _8_3 = document.getElementById('8-3');
var _8_4 = document.getElementById('8-4');
var _8_5 = document.getElementById('8-5');
var _8_6 = document.getElementById('8-6');
var _8_7 = document.getElementById('8-7');
var _8_8 = document.getElementById('8-8');
var _8_9 = document.getElementById('8-9');
var _9_1 = document.getElementById('9-1');
var _9_2 = document.getElementById('9-2');
var _9_3 = document.getElementById('9-3');
var _9_4 = document.getElementById('9-4');
var _9_5 = document.getElementById('9-5');
var _9_6 = document.getElementById('9-6');
var _9_7 = document.getElementById('9-7');
var _9_8 = document.getElementById('9-8');
var _9_9 = document.getElementById('9-9');

var winner_banner = document.getElementById('winner-banner');

let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')

function win(player) {
    if (player) {
        winner_banner.innerHTML = player + ' won!';
        isXTurn = true;
        winner_banner.style.left = '0';
        filledSquares = 0;

        setTimeout(function () {
            _1_1.innerHTML = _1_2.innerHTML = _1_3.innerHTML =
                _1_4.innerHTML = _1_5.innerHTML = _1_6.innerHTML =
                _1_7.innerHTML = _1_8.innerHTML = _1_9.innerHTML = _2_1.innerHTML =
                _2_2.innerHTML = _2_3.innerHTML = _2_4.innerHTML = _2_5.innerHTML =
                _2_6.innerHTML = _2_7.innerHTML = _2_8.innerHTML = _2_9.innerHTML =
                _3_1.innerHTML = _3_2.innerHTML = _3_3.innerHTML = _3_4.innerHTML =
                _3_5.innerHTML = _3_6.innerHTML = _3_7.innerHTML = _3_8.innerHTML =
                _3_9.innerHTML = _4_1.innerHTML = _4_2.innerHTML = _4_3.innerHTML =
                _4_4.innerHTML = _4_5.innerHTML = _4_6.innerHTML = _4_7.innerHTML =
                _4_8.innerHTML = _4_9.innerHTML = _5_1.innerHTML = _5_2.innerHTML =
                _5_3.innerHTML = _5_4.innerHTML = _5_5.innerHTML = _5_6.innerHTML =
                _5_7.innerHTML = _5_8.innerHTML = _5_9.innerHTML = _6_1.innerHTML =
                _6_2.innerHTML = _6_3.innerHTML = _6_4.innerHTML = _6_5.innerHTML =
                _6_6.innerHTML = _6_7.innerHTML = _6_8.innerHTML = _6_9.innerHTML =
                _7_1.innerHTML = _7_2.innerHTML = _7_3.innerHTML = _7_4.innerHTML =
                _7_5.innerHTML = _7_6.innerHTML = _7_7.innerHTML = _7_8.innerHTML =
                _7_9.innerHTML = _8_1.innerHTML = _8_2.innerHTML = _8_3.innerHTML =
                _8_4.innerHTML = _8_5.innerHTML = _8_6.innerHTML = _8_7.innerHTML =
                _8_8.innerHTML = _8_9.innerHTML = _9_1.innerHTML = _9_2.innerHTML =
                _9_3.innerHTML = _9_4.innerHTML = _9_5.innerHTML = _9_6.innerHTML =
                _9_7.innerHTML = _9_8.innerHTML = _9_9.innerHTML = ''; winner_banner.style.left = '-100vw';
        }, 2000);
    }
}