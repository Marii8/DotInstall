(function() {
    'use strict';

    let start = document.getElementById('start');
    let stop = document.getElementById('stop');
    let result = document.getElementById('result');
    let startTime;
    let isStarted = false;

    result.classList.add('standby');




    start.addEventListener('click', function(){
        if (isStarted === true) {
            return;
        }
        isStarted = true;
        startTime = Date.now();
        this.classList.add('pushed');
        stop.className = "";
        result.className = "standby";
        result.textContent = '0.000';
    })

    stop.addEventListener('click', function(){
        if (isStarted === false) {
            return;
        }

        isStarted = false;
        let elapsedTime;
        let diff;
        elapsedTime = (Date.now() - startTime ) / 1000;
        result.textContent = elapsedTime.toFixed(3);
        this.classList.add('pushed');
        start.className = "";
        result.className = '';

        diff = elapsedTime - 5.0;
        if (Math.abs(diff) < 1.0 ) {
            result.classList.add('perfect');
        }

    })




}) ();