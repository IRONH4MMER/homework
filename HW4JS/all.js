// let ladysBag = {
//     mirror: 2,
//     makeUp: 'bag',
//     uselessSht: 100500
// }
//
// ladysBag.remover = function () {
//     let usersChoice = prompt('Choose smth to remove')
//     for (let smthId in ladysBag) {
//         if (usersChoice === smthId) {
//             delete ladysBag[usersChoice]
//         }
//     }
// }
//
// ladysBag.remover()
//
// let userChoiceKey = prompt('Choose the thing (key)')
// let userChoice = prompt('Amount or type')
// ladysBag.adder = function (item, number) {
//     return ladysBag[number] = userChoice;
// }
// ladysBag.adder(userChoice, userChoiceKey)
// console.log(ladysBag)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let LibraryBook = function (_title = "Без названия", _year = "нет данных", _author = "нет данных") {
//     let title = _title
//     let year = _year
//     let author = _author
//     let readerName = null
//     let readerData = null
//
//     function giveTheBook(client, data = new Date()) {
//         readerName = client
//         readerData = data
//     }
//
//     this.getBookInfo = function () {
//         let text = readerName ? "выдана на руки" : "есть в наличии"
//         console.info(`${author}, ${title} (${year}): ${text}`)
//     }
//     this.getTheBook = function (client) {
//         if (readerName != null) {
//             this.getBookInfo()
//             return null
//         } else {
//             giveTheBook(client)
//             return {
//                 title: title,
//             }
//         }
//     }
//     this.returnBook = function () {
//         readerName = null
//         readerData = null
//     }
// }
//
// let books = []
// books [0] = new LibraryBook("Война и мир", "1995", "Лев Толстой")
// books [1] = new LibraryBook("Отцы и дети", "1998", "Тургенев")
// books [3] = new LibraryBook("Кобзарь", "2005", "Тарас Шевченко")
//
// console.log(books)
//
// books [0].getBookInfo()
// books [0].getTheBook("Иван Сидоренко", new Date(2018, 6, 25))
// books [0].getBookInfo()
// books [0].returnBook()
// books [0].getBookInfo()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Propertys(){
    Propertys.prototype.addProperty = function (key, value) {
        this[key] = value
    }
}

let obj = new Propertys()
obj.addProperty ( "lastName", "Onyshchenko" )
console.log(obj)
