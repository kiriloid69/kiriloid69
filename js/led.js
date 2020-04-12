function calcLedTape() {
    const form = document.querySelector('#ledTape');
    let width, height, color, result, add, deduct, count;

    getValues();
    counter();
    calcResult();
    showResult();

    form.onclick = () => {
        getValues();
        counter();
        calcResult();
        showResult();
    };

    form.oninput = () => {
        getValues();
        counter();
        calcResult();
        showResult();
    };

    function getValues() {
        numWidth = document.querySelector('#width-led').value;
        numHeight = document.querySelector('#height-led').value;
        typeColor = document.querySelector('#color').value;
        add = document.querySelector('#plus');
        deduct = document.querySelector('#minus');
        count = document.querySelector('#count').value;
    }

    function counter() {

        add.onclick = () => {
            count++;
            document.querySelector('#count').value = count;
        };

        if (count == 1)
            document.querySelector('#count').value = 1;
        else {
            deduct.onclick = () => {
                count--;
                document.querySelector('#count').value = count;
            };
        }
    }

    function calcResult() {
        let width = [3, 4, 5, 6, 7, 8, 9];
        let height = [1, 2, 3, 4];
        let color = [750, 1000, 1000, 1000, 1000, 1100, 1200, 1600];

        result =  width[numWidth-1] * height[numHeight-1] * color[typeColor-1] * count;
    }

    function showResult() {
        const output = document.querySelector("#result");
        output.textContent = result;
    }
}

calcLedTape();