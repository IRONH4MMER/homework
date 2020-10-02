// function sampleFunc () {
//     console.log ( `${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}` )
// }
// function modificator ( func ) {
//     return function sampleTest() {
//         func('test', 'sample')
//     }
// }
//
// testFunc = modificator( sampleFunc )
//
// testFunc()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function sampleFunc () {
//     console.info ( `Symbols in my code: ${arguments.callee + 0}` )
// }
//
// function modificator ( func ) {
//     let counter = func.toString().length
//     func.valueOf = function () {
//         return counter
//     }
// }
//
// modificator(sampleFunc)
//
// sampleFunc()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function testArguments() {
    function generateError(numArgs) {
        let err = new Error()
            err.name = 'Application'
            err.message = 'Invalid arguments'
            err.stack = `Function needs 3 arguments, but only ${testArguments.arguments.length} present`
        throw err
    }

    try {
        arguments.length >= 3 ? null : generateError(arguments.length)
    } catch (err) {
        console.log(`${err.name}: ${err.message}\n${err.stack}`)
    }
}

testArguments("Google", 500)