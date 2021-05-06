// function fibonacciR(n) {
//     if(n <= 1){
//         return n
//     } else{
//         return fibonacciR(n - 1) + fibonacciR(n - 2);
//     }
// }
//
// (function (){
//     let i;
//
//     for(i = 2; i<20; i++){
//         let fibonacciPR = document.createElement('p');
//         document.getElementById('first').appendChild(fibonacciPR);
//         fibonacciPR.innerText = fibonacciR(i)}
// }());
//___________________________________________________________________________________________________\\
// function fibonacciC(n) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }
//
// (function (){
//     let i;
//
//     for(i = 2; i<20; i++){
//         let fibonacciPC = document.createElement('p');
//         document.getElementById('second').appendChild(fibonacciPC);
//         fibonacciPC.innerText = fibonacciC(i)}
// }());
//___________________________________________________________________________________________________\\
// function sumNC(n) {
//     let i;
//
//     let sum = 0;
//     for (i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }
//
// (function (){
//     let i;
//
//     for(i = 1; i<20; i++){
//         let sumPC = document.createElement('p');
//         document.getElementById('first').appendChild(sumPC);
//         sumPC.innerText = sumNC(i)}
// }());
//___________________________________________________________________________________________________\\
// function sumNR(n) {
//     if (n == 1) return 1;
//     return n + sumNR(n - 1);
// }
//
// (function (){
//     let i;
//
//     for(i = 1; i<20; i++){
//         let sumPR = document.createElement('p');
//         document.getElementById('second').appendChild(sumPR);
//         sumPR.innerText = sumNR(i)}
// }());
//___________________________________________________________________________________________________\\
// document.getElementById('sum').onclick = function Sum() {
//     let arr = [...document.getElementsByClassName('li')];
//     let finalArray = [];
//     let summ = 0;
//     arr.forEach((element, i) => {
//         let num = parseInt(arr[i].innerText, 10);
//         finalArray.push(num);
//         i++
//     });
//     finalArray = finalArray.filter((n) => {
//         return isNaN(n) === false
//     });
//     (function (finalArray) {
//         for (let i = 0; i < finalArray.length; i++) {
//             summ += finalArray[i];
//         }
//     }(finalArray));
//     (function (finalArray, summ) {
//         document.getElementById('inp').value = finalArray.join(' + ') + ' = ' + summ
//     }(finalArray, summ))
// };
//___________________________________________________________________________________________________\\
// let i = 1;
//
// let interval = setInterval(() => {
//     document.getElementById('first').innerText = "Прошло " + i + " сек"
//     i++;
//     if (i > 5) {
//         document.getElementById('second').innerText = "Время вышло"
//         clearInterval(interval);
//     }
// }, 1000);
//___________________________________________________________________________________________________\\
// let from = 1;
// let to = 10;
// let printNumbers = function (from, to) {
//     let i = from;
//     let intervalFromTo = setInterval(() => {
//         document.getElementById('first').innerText = i;
//         i++;
//         if (i > to) {
//             document.getElementById('second').innerText = "Конец цикла";
//             clearInterval(intervalFromTo);
//         }
//     }, 1000);
// };
// printNumbers(from, to);
//___________________________________________________________________________________________________\\
let from = 1;
let to = 10;
let printNumbers = function (from, to) {
    let i = from;
    setTimeout(() => {
        document.getElementById('first').innerText = i;
        i++;
        from = i;
        if (i <= to) {
            printNumbers(from, to)
        } else {
            document.getElementById('second').innerText = "Конец цикла";
            return undefined
        }
    }, 1000);
};
printNumbers(from, to);