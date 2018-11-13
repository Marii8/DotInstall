(function() {
    'use strict';



    let price = document.getElementById('price');
    let num = document.getElementById('num');
    let unit = document.getElementById('unit');
    let btn = document.getElementById('btn');
    let result = document.getElementById('result');
    let reset = document.getElementById('reset');
    let str;

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

        // #resetのhiddenクラスが外れるのは、#btnをクリックした時なので、function内に記述
        reset.classList.remove('hidden');


        //resetをクリックした時の処理
        reset.addEventListener('click', function(){
            result.textContent = 'ここに結果を表示します';
            price.value = '';
            num.value = '';
            unit.value = 100;
            this.classList.add('hidden'); //また消す
            price.focus(); //すぐに入力できるようにする
        })
    })
        price.focus();

}) ();