function calcLightLetters() {
    const form = document.querySelector('#firstCalculator');
    let letters, height, font, type, resultFirst, add, deduct, count;

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
        letters = document.querySelector('#text').value;
        height = document.querySelector('#letterHeight').value;
        font = document.querySelector('#font').value;
        type = document.querySelector('#type').value;
        add = document.querySelector('#plus');
        deduct = document.querySelector('#minus');
        count = document.querySelector('#countFirst').value;
    }


    function counter() {

        add.onclick = () => {
            count++;
            document.querySelector('#countFirst').value = count;
        };

        if (count == 1)
            document.querySelector('#countFirst').value = 1;
        else {
            deduct.onclick = () => {
                count--;
                document.querySelector('#countFirst').value = count;
            };
        }         
    }

    function calcResult() {

        let price = [
            [73, 92, 98],
            [120, 150, 160],
            [120, 150, 160],
            [45, 57, 60],
            [55, 69, 74]
        ];

        resultFirst = letters.replace(/ /g, "").length * height * price[type-1][font-1] * count;
    }

    function showResult() {
        const output = document.querySelector("#resultFirst");
        output.textContent = resultFirst;
    }
}


calcLightLetters();