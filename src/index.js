const substract = require("./operation.js")

const compBtn = document.getElementById("computeBtn");

compBtn.addEventListener("click", function(){
    const result = document.getElementById('result');
    const first = document.getElementById('first');
    const second = document.getElementById('second');

    result.innerHTML = substract(first.value, second.value);
});