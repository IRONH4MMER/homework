let letters = [];
let ExampleString = 'BackEnd as service';
let PushToLetters = ExampleString.split(" ");
let MapPushToLetters = PushToLetters.map(function (item) {
    let FirstLetters = item[0]
    return letters.push(FirstLetters);
})
console.log(letters);

function DateValidator() {
    let SomeText = prompt('Type some text')
    let date = Date()
    if (isNaN(SomeText)) {
        alert('invalid type')
    }else {
        alert(date)
    }
}
console.log(DateValidator())