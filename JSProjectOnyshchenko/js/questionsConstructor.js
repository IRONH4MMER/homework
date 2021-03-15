let i;
let counter = 0;
const constructorQuest = (i) => {
    document.getElementById('mainContent').innerHTML = '';
    let constructorMain = document.createElement('div');
    constructorMain.id = 'constructorMain';
    let constructorCard = document.createElement('div');
    constructorCard.className = 'constructorCard';
    let questDiv = document.createElement('div');
    questDiv.className = 'questDiv';
    let answerDiv1 = document.createElement('div');
    answerDiv1.className = 'answerDiv';
    let answerDiv2 = document.createElement('div');
    answerDiv2.className = 'answerDiv';
    let answerDiv3 = document.createElement('div');
    answerDiv3.className = 'answerDiv';
    let answerDiv4 = document.createElement('div');
    answerDiv4.className = 'answerDiv';
    document.getElementById('mainContent').appendChild(constructorMain);
    constructorMain.appendChild(constructorCard);
    constructorCard.appendChild(questDiv);
    constructorCard.appendChild(answerDiv1);
    constructorCard.appendChild(answerDiv2);
    constructorCard.appendChild(answerDiv3);
    constructorCard.appendChild(answerDiv4);
    questDiv.innerHTML = `<input type="text" id="questInput" placeholder="Вопрос №${++counter}">`;
    answerDiv1.innerHTML = `<label class="container"> <input type="radio" class="radioAnsw" name=cButton value="0"'> <span class="checkmark"></span> </label> <input type="text" class="answInput" id="answInput1" name="1" placeholder="Ответ"> `;
    answerDiv2.innerHTML = `<label class="container"> <input type="radio" class="radioAnsw" name=cButton value="1"'> <span class="checkmark"></span> </label> <input type="text" class="answInput" id="answInput2" name="2" placeholder="Ответ"> `;
    answerDiv3.innerHTML = `<label class="container"> <input type="radio" class="radioAnsw" name=cButton value="2"'> <span class="checkmark"></span> </label> <input type="text" class="answInput" id="answInput3" name="3" placeholder="Ответ"> `;
    answerDiv4.innerHTML = `<label class="container"> <input type="radio" class="radioAnsw" name=cButton value="3"'> <span class="checkmark"></span> </label> <input type="text" class="answInput" id="answInput4" name="4" placeholder="Ответ"> `;

    function check() {
        let radioArr = document.getElementsByClassName('radioAnsw');
        for (let n = 0; n < radioArr.length; n++) {
            if (radioArr[n].type === "radio" && radioArr[n].checked) {
                return radioArr[n].value
            }
        }
    }

    class QuestionConstructor {
        constructor(rightAnsw) {
            this.text = document.getElementById('questInput').value;
            this.answers = [document.getElementById('answInput1').value, document.getElementById('answInput2').value,
                document.getElementById('answInput3').value, document.getElementById('answInput4').value];
            this.rightAnswer = check(rightAnsw);
            this.qNum = i++
        }
    }

    let isFilled;
    const isFilledChecker = () => {
        if (document.getElementById('questInput').value !== '' && document.getElementById('answInput1').value !== ''
            && document.getElementById('answInput2').value !== ''
            && document.getElementById('answInput3').value !== ''
            && document.getElementById('answInput4').value !== '' && check() !== undefined) {
            let questionsConstruct = new QuestionConstructor;
            constructedQuest.push(questionsConstruct);
            qNumFunc(1);
            renderQuestions(constructedQuest);
            arr = constructedQuest;
            document.getElementById('style').innerText = '#constructorButton{display: none;}';
            return isFilled = true
        } else {
            --counter;
            if (counter < 1) {
                counter = 0
            }
            if (document.getElementById('questInput').value === '') {
                alert('Вы не ввели вопрос');
                document.getElementById('questInput').placeholder = 'Введите сюда'
            }
            if (document.getElementById('answInput1').value === ''
                || document.getElementById('answInput2').value === ''
                || document.getElementById('answInput3').value === ''
                || document.getElementById('answInput4').value === '') {
                alert(`Вы не ввели ответ`);
                document.getElementById('answInput1').placeholder = 'Введите сюда';
                document.getElementById('answInput2').placeholder = 'Введите сюда';
                document.getElementById('answInput3').placeholder = 'Введите сюда';
                document.getElementById('answInput4').placeholder = 'Введите сюда'
            }
            if (check() === undefined) {
                alert('Вы не выбрали правильный вариант')
            }
        }

    };

    document.getElementById('sendCButtons').onclick = function sendingCButtons() {
        isFilledChecker();
        if (isFilled === true) {
            document.getElementById('style').innerText = '.container{display:none}' +
                '#constructorButton{display: none}'
        }
    };
    document.getElementById('nextButton').onclick = () => {
        isFilledChecker();
        constructorQuest(i++);
        if (isFilled !== true) {
            document.getElementById('questInput').placeholder = 'Введите сюда';
            document.getElementById('answInput1').placeholder = 'Введите сюда';
            document.getElementById('answInput2').placeholder = 'Введите сюда';
            document.getElementById('answInput3').placeholder = 'Введите сюда';
            document.getElementById('answInput4').placeholder = 'Введите сюда'
        }
        document.getElementById('style').innerText = '#start{display: none;}' +
            '#sendCButtons{display: block;}' +
            '.base-timer{display: none;}' +
            '#constructorButton{display: none}' +
            '#nextButton{display: block;}' +
            '.container{display:block}'
    }

};

document.getElementById('constructorButton').onclick = () => {
    constructorQuest(0);
    document.getElementById('style').innerText = '#start{display: none;}' +
        '#sendCButtons{display: block;}' +
        '.base-timer{display: none;}' +
        '#constructorButton{display: none}' +
        '#nextButton{display: block;}' +
        '.container{display:block}'
};