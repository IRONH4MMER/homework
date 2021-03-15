let yourAns = [];
let totalScore = 0;
let answerText = [];
let arr;
let questArr = function () {
    if (arr === undefined){
        arr = questions
    }
    return arr
}

function engine(question, answer) {
    yourAns[question] = answer;
}

function score() {
    document.getElementById('mainContent').innerHTML = ''
    let resBody = document.createElement('div')
    resBody.id = 'resBody'
    let ansDiv = document.createElement('div')
    ansDiv.id = 'ansDiv'
    let youRes = document.createElement('p')
    youRes.className='youRes'
    document.body.appendChild(resBody)
    resBody.appendChild(ansDiv)
    ansDiv.innerHTML = `<p class="result">РЕЗУЛЬТАТЫ</p>`
    for (let i = 0; i < questArr().length; ++i) {
        let num = i + 1;
        if (yourAns[i] !== questArr()[i].rightAnswer ||answerText.length<0) {
            answerText.push("Вопрос №" + num +' '+questArr()[i].text)
            answerText.push("Правильный ответ: " + questArr()[i].answers[questArr()[i].rightAnswer] )
            answerText.push("Ваш ответ: " + insertText())
            function insertText() {
                if (questArr()[i].answers[yourAns[i]] !== undefined) {
                    return questArr()[i].answers[yourAns[i]]
                } else {
                    return 'Вы не дали ответ'
                }
            }
        } else {
            answerText.push("Вопрос №" + num +' '+questArr()[i].text)
            answerText.push("Верно! " +
                questArr()[i].answers[questArr()[i].rightAnswer])
            ++totalScore;
        }
    }
    for (let j = 0; j < answerText.length; j++){
        let p = document.createElement("div")
        p.innerText = answerText[j]
        ansDiv.appendChild(p)
        if (answerText[j].includes('Верно')||answerText[j].includes('Правильный ответ:')){
            p.className='green'
        }else {
            p.className='red'
        }
        if(answerText[j].includes('Вопрос')){
            p.className='white'
        }
    }
    let rightAnswersCount = (--questionNumber)*0.8
    if(totalScore>=rightAnswersCount){
        youRes.innerHTML=`Правильных ответов: ${totalScore} <br><br>Вы прошли тест <br><br>Затрачено времени: ${formatTime(TIME_LIMIT - timeLeft)}`
    }  else{
        youRes.innerHTML=`Правильных ответов: ${totalScore} <br><br>Вы не прошли тест <br><br>Затрачено времени: ${formatTime(TIME_LIMIT - timeLeft)}`
    }
    ansDiv.appendChild(youRes)
    yourAns = [];
    totalScore = 0;
    onTimesUp()
}

document.getElementById('end').onclick = function end(){
    score()
    document.getElementById('style').innerText = '#end{display: none;}' +
        '#restart{display: block;}' +
        '#start{display: none;}' +
        '#constructorButton{display: none;}' +
        '.base-timer{display: none;}'
}

document.getElementById('restart').onclick = function restart(){
    location.reload()
}