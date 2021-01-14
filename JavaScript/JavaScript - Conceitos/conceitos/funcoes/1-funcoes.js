function getName(){
    return 'Denis Almeida Lima';
}

function logFn(fn){
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);