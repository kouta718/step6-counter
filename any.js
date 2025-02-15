'use strict';

(() => {
    const $counter = document.getElementById("js-counter");

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
