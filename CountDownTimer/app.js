(function(){
    'use trict';

    let timer = $('#timer');
    let min = $('#min');
    let sec = $('#sec');
    let reset = $('#reset');
    let start = $('#start');

    let startTime;
    let timeLeft;
    let timeToCountDown = 4 * 1000; //単位を合わせておく

function updateTimer(t) {
    let d = new Date(t);
    let m = d.getMinutes();
    let s = d.getSeconds();
    let ms = d.getMilliseconds();

    //桁が足りない時は0で埋めるようにする、桁をsliceで取り出す
    m = ('0' + m).slice(-2);
    s = ('0' + s).slice(-2);
    ms = ('00' + ms).slice(-3);

    timer.textContent = m +':'+ s +'.' + ms;
}




//setTimeoutを使って、一定時間後に()内の処理を行う。10ミリ秒後に繰り返す
function countDown(){
    setTimeout(function(){
        timeLeft = timeToCountDown - (Date.now() - startTime);
        // console.log(timeLeft);
        updateTimer(timeLeft);
        countDown(); //countDownを再帰的に呼び出す

    }, 10);
    //指定したミリ秒後に、カウントダウンする時間からstartTimeから10ミリ秒ごとの差を出していく
}



    start.on('click', function(){
        startTime = Date.now();
        countDown(); //残り時間を表示させる
    })
}) ();