function calcTable() {
    const form = document.querySelector('#fourthCalculator');
    let width, height, type, resultFourth, add, deduct, count;

    getValuesFourth();
    counterFourth();
    calcResultFourth();
    showResultFourth();

    form.onclick = () => {
        getValuesFourth();
        counterFourth();
        calcResultFourth();
        showResultFourth();
    };

    form.oninput = () => {
        getValuesFourth();
        counterFourth();
        calcResultFourth();
        showResultFourth();
    };

    function getValuesFourth() {
        width = document.querySelector('#width-table').value;
        height = document.querySelector('#height-table').value;
        add = document.querySelector('#plusFourth');
        deduct = document.querySelector('#minusFourth');
        count = document.querySelector('#countFourth').value;
        type = document.querySelector('#variableFourth').value;
    }

    function counterFourth() {

        add.onclick = () => {
            count++;
            document.querySelector('#countFourth').value = count;
        };
        if (count == 1)
            document.querySelector('#countFourth').value = 1;
        else {
            deduct.onclick = () => {
                count--;
                document.querySelector('#countFourth').value = count;
            };
        }         
     
    }

    function calcResultFourth() {
        let price = [
            [10,10],
            [10,10],
            [10,10],
            [10,10]
        ];

        if (width * height <= 1000000)
            resultFourth = price[type-1][1] * count;
        else
            resultFourth = (price[type-1][0] * width * height) / 1000000 * count;
    }

    function showResultFourth() {
        const output = document.querySelector("#resultFourth");
        output.textContent = resultFourth;
    }
}

calcTable();