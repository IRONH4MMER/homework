// const pictures = [
//     "http://pngimg.com/uploads/nuclear_explosion/nuclear_explosion_PNG42.png"
// ]
//
// pictures.forEach (
//     picture => {
//         let p = document.body.appendChild (
//             document.createElement ( 'p' )
//         );
//         p.innerText = "DON'T CLICK"
//         p.style  = `
//             font-size:80px;
//             border: 2px solid black;
//             width: 500px;
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//         `
//         p.onclick = function (event){
//             p.innerText = 'OMG BRUV'
//             let img = event.target.appendChild (
//                 document.createElement ('img')
//             )
//             img.id = 'image'
//             img.src = picture
//             img.width = 150
//             img.height = 150
//             img.style.borderRadius='50%'
//             img.style.marginLeft='20px'
//             img.onmouseover =function (event){
//                 let imgEv = document.getElementById('image')
//                 imgEv.width = 500
//                 imgEv.height = 500
//                 imgEv.style.transition='1.5s'
//             }
//             img.onmouseout = function (event){
//                 let imgEv = document.getElementById('image')
//                 imgEv.width = 150
//                 imgEv.height = 150
//                 imgEv.style.transition='1.5s'
//             }
//             img.onclick =function (event){
//                 let imgEv = document.getElementById('image')
//                 imgEv.remove()
//             }
//         }
//     })
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let collection = [`<div><div><div><div></div></div></div></div>`]
// document.body.innerHTML = collection
// collection = document.querySelectorAll('div')
// function over ( event ) {
//     event.stopPropagation()
//     this.style.backgroundColor='#ffff0050'
// }
// function  out(event){
//     event.currentTarget.style.background='#ff00ff50'
//     event.stopPropagation()
// }
// function clickHandler ( event ) {
//     event.currentTarget.remove()
//     event.stopPropagation()
// }
// [ "first", "second", "third", "fourth"].forEach (
//     function ( key, index ) {
//         let element = collection[index]
//         element.setAttribute('title', key)
//         element.style.padding = '50px'
//         element.style.borderRadius = '50px'
//         element.style.background = '#ff00ff50'
//         element.style.border = 'dotted 1px yellow'
//         element.addEventListener('mouseover', over)
//         element.addEventListener('mouseout', out)
//         element.addEventListener('click', clickHandler)
//     })
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let collection = [`<div><div><div><div><div><div><div></div></div></div></div></div></div></div>`]
document.body.innerHTML = collection
collection = document.querySelectorAll('div')
function enter ( event ) {
    event.stopPropagation()
    this.style.backgroundColor='#ffff0050'
}
function leave (event){
    event.currentTarget.style.background='#ff00ff50'
    event.stopPropagation()
}
function clickHandler ( event ) {
    event.stopPropagation()
    event.currentTarget.remove()
}
[1, 2, 3, 4, 5, 6, 7].forEach (
    function ( key, index ) {
        let element = collection[index]
        element.setAttribute('title', key)
        element.style.padding = '50px'
        element.style.borderRadius = '50px'
        element.style.background = '#ff00ff50'
        element.style.border = 'dotted 1px yellow'
        element.addEventListener('mouseenter', enter)
        element.addEventListener('mouseleave', leave)
        element.addEventListener('click', clickHandler)
    })