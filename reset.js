'use strict';

// リセット操作
(() => {
    const $counter = document.getElementById("js-counter");

    document.getElementById("js-reset-button").addEventListener("click", () => {
        let check = window.confirm('リセットしますか？');
        if(check === true){
            $counter.textContent = 0;
            document.getElementById("js-any-number").value = "";
        }
    });
})();