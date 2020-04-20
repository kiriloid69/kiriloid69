
// calculator

/* Калькулятор для света*/

function calcLightLetters() {
    const form = document.querySelector('#firstCalculator');
    let letters, height, font, type, resultFirst, add, deduct, count, picture;

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
        picture = document.getElementById('img-calc-first').src;
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

        let photo = [
            "../../img/1-1.png", "../../img/1-2.png", "../../img/1-3.png", "../../img/1-4.png", "../../img/1-5.png"
        ]

        resultFirst = letters.replace(/ /g, "").length * height * price[type-1][font-1] * count;

        picture = photo[type-1];

    }

    function showResult() {
        const output = document.querySelector("#resultFirst");
        output.textContent = resultFirst;
        document.getElementById('img-calc-first').src = picture;
    }
}

function calcLightBox() {
    const form = document.querySelector('#secondCalculator');
    let width, height, type,  resultSecond, add, deduct, count, picture;

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

        let photo = [
            "../../img/2-1.png", "../../img/2-2.png", "../../img/2-3.png"
        ]

        picture = photo[type-1];

        if (width * height <= 1000000)
            resultSecond = price[type-1][1] * count;
        else
            resultSecond = (price[type-1][0] * width * height) / 1000000 * count;
    }

    function showResultSec() {
        const output = document.querySelector("#resultSecond");
        output.textContent = resultSecond;
        document.getElementById('img-calc-second').src = picture;
    }
}

function calcLightConsole() {
    const form = document.querySelector('#thirdCalculator');
    let width, height, type,  resultThird, add, deduct, count, picture;

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

        let photo = [
            "../../img/3-1.png", "../../img/3-2.png", "../../img/3-3.png", "../../img/3-4.png"
        ]

        picture = photo[type-1];

        if (width * height < 1000000)
            resultThird = price[type-1][1] * count;
        else
            resultThird = (price[type-1][0] * width * height) / 1000000 * count;
    }

    function showResultThird() {
        const output = document.querySelector("#resultThird");
        output.textContent = resultThird;
        document.getElementById('img-calc-third').src = picture;
    }
}

function calcTable() {
    const form = document.querySelector('#fourthCalculator');
    let width, height, type, resultFourth, add, deduct, count, picture;

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

        let photo = [
            "../../img/4-1.png", "../../img/4-2.png", "../../img/4-3.png", "../../img/4-4.png"
        ]

        picture = photo[type-1];

        if (width * height <= 1000000)
            resultFourth = price[type-1][1] * count;
        else
            resultFourth = (price[type-1][0] * width * height) / 1000000 * count;
    }

    function showResultFourth() {
        const output = document.querySelector("#resultFourth");
        output.textContent = resultFourth;
        document.getElementById('img-calc-four').src = picture;
    }
}


function calcLedTape() {
    const form = document.querySelector('#ledTape');
    let width, height, color, result, add, deduct, count, picture;

    getValuesFive();
    counterFive();
    calcResultFive();
    showResultFive();

    form.onclick = () => {
        getValuesFive();
        counterFive();
        calcResultFive();
        showResultFive();
    };

    form.oninput = () => {
        getValuesFive();
        counterFive();
        calcResultFive();
        showResultFive();
    };

    function getValuesFive() {
        numWidth = document.querySelector('#width-led').value;
        numHeight = document.querySelector('#height-led').value;
        typeColor = document.querySelector('#color').value;
        add = document.querySelector('#plusFive');
        deduct = document.querySelector('#minusFive');
        count = document.querySelector('#countFive').value;
    }

    function counterFive() {

        add.onclick = () => {
            count++;
            document.querySelector('#countFive').value = count;
        };

        if (count == 1)
            document.querySelector('#countFive').value = 1;
        else {
            deduct.onclick = () => {
                count--;
                document.querySelector('#countFive').value = count;
            };
        }
    }

    function calcResultFive() {


        width = [3, 4, 5, 6, 7, 8, 9];
        height = [1, 2, 3, 4];
        color = [750, 1000, 1000, 1000, 1000, 1100, 1200, 1600];

        result =  width[numWidth-1] * height[numHeight-1] * color[typeColor-1]; //коэф.ширины*коэф.высоты*коэф.цвета
        result += Math.ceil((width[numWidth-1] * height[numHeight-1]) / 9) * 1200;  //округлить в большую сторону((коэф.шир*коэф.выс)/9)*1200
        result += width[numWidth-1] * height[numHeight-1] * 64; //коэф.ширины*коэф.высоты*64              
        result += width[numWidth-1] * 144 + height[numHeight-1] * 144;  //коэф.шир*144+коэф.выс*144
        result += 600; //Постоянное число

        if ( typeColor == 7)
            result += 5000;
        else {
            switch (numHeight-1) {
                case 1:
                    result += 600;
                    break;
                case 2: 
                    result += 800;
                    break;
                case 3: 
                    result += 1200;
                    break;
                case 4:
                    result += 1400;
                    break;
            }
        }   

        result *= count; 
        
        let photo = [
            "../../img/5-1.png", "../../img/5-2.png", "../../img/5-3.png", "../../img/5-4.png", "../../img/5-5.png", "../../img/5-6.png", "../../img/5-7.png"
        ]

        picture = photo[typeColor - 1];
        console.log(picture);

    }

    function showResultFive() {
        const output = document.querySelector("#result");
        output.textContent = result;
        document.getElementById('img-calc-five').src = picture;
    }
}


calcLightLetters();
calcLightBox();
calcLightConsole();
calcTable();
calcLedTape();




/* Калькулятор для света*/