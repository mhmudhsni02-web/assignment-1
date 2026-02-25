
var createCounter = function(init) {
   let obj = {
        increment : () => {
            return init + 1
        },
        decrement : () => {
            return init - 1
        },
        reset :  () => {
            return init
        }
    }
    return obj   
};


const counter = createCounter(5)
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())