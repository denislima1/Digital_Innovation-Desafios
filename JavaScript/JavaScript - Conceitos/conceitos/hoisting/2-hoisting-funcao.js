function fn(){
    log('hoisting de função');

    function log(value) {
        console.log(value);
    }
}

fn();

/** 
function fn(){ //boa pratica
    function log(value) {
        console.log(value);
    }

    log('hoisting de função');
}
*/
