/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let newStyle = document.createElement("style");
newStyle.innerHTML = ".cards{color: green;}" +
    ".link{color: red;}" +
    ".menu_item{color: pink;}" +
    ".main_text{color: grey;}";
document.head.appendChild(newStyle)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let tags = [
//     'div',
//     'a',
//     'li',
//     'h1'
// ]
// let classes = [
//     'cards',
//     'link',
//     'menu_item',
//     'main_text'
// ]
// let newStyle = document.createElement("style");
// newStyle.innerHTML = ".cards{color: green;}" +
//     ".link{color: red;}" +
//     ".menu_item{color: pink;}" +
//     ".main_text{color: grey;}";
// document.head.appendChild(newStyle)
//
// tags.forEach(function (item, i) {
//     let func = function () {
//         let createdItem = document.createElement(item);
//         createdItem.innerText = 'hello world';
//         document.body.append(createdItem);
//         createdItem.className = classes[i]
//     }
//     func()
// });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let tags = [
    {
        tagName: 'div',
        className: 'cards',
        id: 'card',

        },
    {
        tagName: 'a',
        className: 'link',
        'id': 'id_link'
    }
]
for (let tagSpecs of tags){
    console.log(tagSpecs);
    function appender (){
        let createTags = document.createElement(tagSpecs.tagName)
        document.body.append(createTags)
        createTags.className = tagSpecs.className
        createTags.innerText = 'lol'
        createTags.id = tagSpecs.id
    }
    appender()
}
document.getElementById('card').addEventListener('click', () => {
    alert('I`m gonna be red bruv')
    document.getElementById('card').className = 'hovered'
})
document.getElementById('id_link').addEventListener('click', () => {
    document.getElementById('id_link').innerText = 'what else do u want?'
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.body.lastElementChild.className = 'redBack'
/////////////////////////////|ne znay kak, chestno govorya|/////////////////////////////////////////////////////////////////