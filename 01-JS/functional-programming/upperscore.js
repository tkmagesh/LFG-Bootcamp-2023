//ES5 Version
function before(count, fn){
    var result;
    return function(){ //wf
        if (--count > 0) {
            result = fn.apply(this, arguments)
        }
        return result
    }
}

function after(count, fn){
    return function(){ //wf
        if (--count > 0) return
        return fn.apply(this, arguments)
    }
}

function once(fn){
    return before(2, fn)
}

//ES6 Version
function before(count, fn){
    var result;
    return function(...args){ //wf
        if (--count > 0) {
            result = fn(...args)
        }
        return result
    }
}

function after(count, fn){
    return function(...args){ //wf
        if (--count > 0) return
        return fn(...args)
    }
}

function once(fn){
    return before(2, fn)
}