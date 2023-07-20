//JS -> SIngle threaded

function myFunction(power) {
    return num => Math.pow(num, power)
}
// const sq = myFunction(3)
// console.log(sq(5))


function myFunc() {
    let value = 0;
    return () => {
        if (value >= 1) console.log("Already called")
        else {
            console.log("First called")
            ++value;
        }
    }
}

const my = myFunc()
my()
my()
my()