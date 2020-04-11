function calcLightConsole() {
    const form = document.querySelector('#thirdCalculator');
    let width, height, type,  resultThird, add, deduct, count;

    getValuesThird();
    counterThird();
    calcResultThird();
    showResultThird();

    form.onclick = () => {
        getValuesThird();
        counterThird();
        calcResultThird();
        showResultThird();
    };

    form.oninput = () => {
        getValuesThird();
        counterThird();
        calcResultThird();
        showResultThird();
    };

    function getValuesThird() {
        width = document.querySelector('#width-consoles').value;
        height = document.querySelector('#height-consoles').value;
        add = document.querySelector('#plusThird');
        deduct = document.querySelector('#minusThird');
        count = document.querySelector('#countThird').value;
        type = document.querySelector('#variableThird').value;
    }

    function counterThird() {
        
        add.onclick = () => {
            count++;
            document.querySelector('#countThird').value = count;
        };
        if (count == 1)
            document.querySelector('#countThird').value = 1;
        else {
            deduct.onclick = () => {
                count--;
                document.querySelector('#countThird').value = count;
            };
        }   
    }

    function calcResultThird() {
        let price = [
            [12000, 8000],
            [18000, 10000],
            [19000, 12000],
            [18000, 10000]
        ];

        if (width * height <= 1000000)
            resultThird = price[type-1][1] * count;
        else
            resultThird = (price[type-1][0] * width * height) / 1000000 * count;
    }

    function showResultThird() {
        const output = document.querySelector("#resultThird");
        output.textContent = resultThird;
    }
}

calcLightConsole();