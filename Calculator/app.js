(function() {
    'use strict';



    let price = document.getElementById('price');
    let num = document.getElementById('num');
    let unit = document.getElementById('unit');
    let btn = document.getElementById('btn');
    let result = document.getElementById('result');
    let reset = document.getElementById('reset');
    let str;

// // input要素のに数値が入っているか確認して、その場合に計算ボタンを有効化する処理
// // 一桁目には1から9のどれか、
// // 二桁目以降があるなら、0から9のどれかが入っているか、、というパターンでチェックする。

// // 入力された数値の先頭から末尾までの値を見たい場合、
// // ^と$で囲う。
// // /^[1-9][0-9]*$/

    function checkInput(){
        if (
            price.value.match(/^[1-9][0-9]*$/) !== null &&
            num.value.match(/^[1-9][0-9]*$/) !== null
        ){
            btn.classList.remove('disabled');
    } else {
        btn.classList.add('disabled');
    }
}

    price.addEventListener('keyup', checkInput);
    num.addEventListener('keyup', checkInput);

    btn.addEventListener('click', function(){
        if (this.classList.contains('disabled')=== true){
            return;
        }
        let payLess;
        let short;
        let payMore;
        let over;
        payLess = Math.floor(price.value / num.value / unit.value) * unit.value;
        short = price.value - (payLess * num.value);
        payMore = Math.ceil(price.value / num.value / unit.value) *  unit.value;
        over = Math.abs(price.value - (payMore * num.value));

        if (over === 0 && short === 0) {
            str = '一人' + (price.value/num.value) + '円ちょうどです！';
        } else {
            str =
                '一人' + payLess + '円だと' + short + '円足りません。' +
                '一人' + payMore + '円だと' + over + '円余ります。';
        }
            result.textContent = str;
    })

}) ();