'use strict';

const $counter = document.getElementById("js-counter");

// カウンター基本操作
(() => {
    const ClickHandler = (e) => {
        const $targetButton = e.currentTarget;
        let currentCount = parseInt($counter.textContent);
        if($targetButton.textContent === "+"){
            $counter.textContent = currentCount + 1;
        } else if ($targetButton.textContent === "+10"){
            $counter.textContent = currentCount + 10;
        } else if ($targetButton.textContent === "-10"){
            $counter.textContent = currentCount - 10;
        } else {
            $counter.textContent = currentCount - 1;
        }
    }

    for (let index = 0; index < document.getElementsByClassName("js-button").length; index++) {
        document.getElementsByClassName("js-button")[index].addEventListener("click", (e) => ClickHandler(e))
    }
})();

// 任意の値でカウントする操作
(() => {
    const ClickHandler = (e) => {
        const $anyNumber = parseFloat(document.getElementById("js-any-number").value);
        if(isNaN($anyNumber)) {
            errorMsg.textContent = "エラー: 必要な入力値を正しく入力してください。";
            return;
        }

        document.getElementById("errorMsg").textContent = "";
        const $targetButton = e.currentTarget;
        let currentCount = parseInt($counter.textContent);
        if($targetButton.textContent === "+"){
            $counter.textContent = currentCount + $anyNumber;
        } else {
            $counter.textContent = currentCount - $anyNumber;
        }
    }

    for (let index = 0; index < document.getElementsByClassName("js-any-button").length; index++) {
        document.getElementsByClassName("js-any-button")[index].addEventListener("click", (e) => ClickHandler(e))
    }
})();
