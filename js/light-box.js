function calcLightBox() {
    const form = document.querySelector('#secondCalculator');
    let width, height, type,  resultSecond, add, deduct, count;

    getValuesSec();
    counterSec();
    calcResultSec();
    showResultSec();

    form.onclick = () => {
        getValuesSec();
        counterSec();
        calcResultSec();
        showResultSec();
    };

    form.oninput = () => {
        getValuesSec();
        counterSec();
        calcResultSec();
        showResultSec();
    };

    function getValuesSec() {
        width = document.querySelector('#width-box').value;
        height = document.querySelector('#height-box').value;
        add = document.querySelector('#plusSec');
        deduct = document.querySelector('#minusSec');
        count = document.querySelector('#countSecond').value;
        type = document.querySelector('#variable').value;
    }

    function counterSec() {

        add.onclick = () => {
            count++;
            document.querySelector('#countSecond').value = count;
        };

        if (count == 1)
            document.querySelector('#countSecond').value = 1;
        else {
            deduct.onclick = () => {
                count--;
                document.querySelector('#countSecond').value = count;
            };
        }
    }

    function calcResultSec() {
        let price = [
            [7900,6500],
            [11800,6500],
            [13800,6900]
        ];

        if (width * height <= 1000000)
            resultSecond = price[type-1][1] * count;
        else
            resultSecond = (price[type-1][0] * width * height) / 1000000 * count;
    }

    function showResultSec() {
        const output = document.querySelector("#resultSecond");
        output.textContent = resultSecond;
    }
}

calcLightBox();