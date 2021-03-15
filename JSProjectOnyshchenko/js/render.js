let qNumFunc = (num) => {
    return questionNumber = num
}
qNumFunc(1)
let renderQuestion = elem => {
    let questionItem = document.createElement('div');
    questionItem.className = 'questionItem'
    questionItem.innerHTML =
        `<div class="questionCard">
            <div class="question">
                 <p class="questionText">Вопрос ${questionNumber++} <br>${elem.text}</p>
                 <label class="container">${elem.answers[0]}
                    <input type="radio" name='${elem.qNum}' value="0" onclick="engine(${elem.qNum},this.value)">
                    <span class="checkmark"></span>
                </label>
                <label class="container">${elem.answers[1]}
                    <input type="radio" name='${elem.qNum}' value="1" onclick="engine(${elem.qNum},this.value)">
                    <span class="checkmark"></span>
                </label>
                <label class="container">${elem.answers[2]}
                    <input type="radio" name='${elem.qNum}' value="2" onclick="engine(${elem.qNum},this.value)">
                    <span class="checkmark"></span>
                </label>
                <label class="container">${elem.answers[3]}
                    <input type="radio" name='${elem.qNum}' value="3" onclick="engine(${elem.qNum},this.value)">
                    <span class="checkmark"></span>
                </label>
            </div>
    </div>`;
    return questionItem
}

document.getElementById('start').onclick = function start() {
    startTimer()
    document.getElementById('style').innerText = '#end{display: block;} ' +
        '#start{display: none;}' +
        '#constructorButton{display: none;}' +
        '.container{display: block;}' +
        '.restart{display: block;}'
}

let renderQuestions = item => {
    document.getElementById('mainContent').innerHTML = '';
    item.forEach(item => {
        let question = renderQuestion(item);
        document.getElementById('mainContent').appendChild(question)
    })
}
renderQuestions(questions)