'use strict';

(() => {
    const $counter = document.getElementById("js-counter");

    document.getElementById("js-reset-button").addEventListener("click", () => {
        $counter.textContent = 0;
        document.getElementById("js-any-number").value = "";
    });
})();