// let typeMessage = ( function ( message,velocity ) {
//     let container = document.getElementById ( "demo" ) ?
//         document.getElementById ( "demo" ):
//         document.body.appendChild (document.createElement ( "h3" ))
//     container.style = `color: magenta`;
//     let index = 0
//     let array = message.split('')
//     if (index<message.length) {
//         array.forEach((item, index) => {
//             setTimeout(() => {
//                 container.append(document.createTextNode(item))
//             }, 1000 * index)
//         })
//     }
// })
// typeMessage ( `Welcome to the hell`,1 )
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let users = (
//     function ( list ) {
//         let users = []
//         for ( let user of list )
//             users.push ({
//                 name: user,
//                 present: false
//             })
//         return {
//             setUserPresent ( userName, present ) {
//                 for(i=0;i<users.length;i++) {
//                     if (users[i].name === userName) {
//                         users[i].present = present
//                         console.log(users[i].name)
//                     }
//                 }
//             },
//             showPresent () {
//                 for(i=0;i<users.length;i++) {
//                     if(users[i].present !== false){
//                         console.log(users[i].name)
//                     }
//                 }
//             },
//             showAbsent () {
//                 for(i=0;i<users.length;i++) {
//                     if (users[i].present === false)
//                         console.log(users[i].name)
//                 }
//             }
//         }
//     }
// )( [ "Иван", "Дмитрий", "Степан", "Михаил" ] )
//
// users.showAbsent()
// users.setUserPresent( "Иван", "+" )
// users.setUserPresent( "Михаил", "присутствовал" )
// users.setUserPresent( "Степан", true )
// users.showPresent()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let changeClass = (classname, styleString) => (
    window.onload = () => {
        const arrayOfSecondLevelMenus = document.getElementsByClassName(classname);
        for(let i = 0; i < arrayOfSecondLevelMenus.length; i++) {
            console.log('here');
            arrayOfSecondLevelMenus[i].style.backgroundColor = styleString;
        }
    }
).length > 0 ? console.log("found") :
    document.head.appendChild(
        document.createElement("style")
    ).textContent = `.${classname} {${styleString}}`

changeClass("second-level-menu", "background-color: red!important;")