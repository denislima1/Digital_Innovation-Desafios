function init() {
    const exemplo = 'Essa Variável';

    return function () {
        console.log(`1 - 0 valor da variável exemplo é: ${exemplo}.`);
        
        return function () {
            console.log(`2 - 0 valor da variável exemplo é: ${exemplo}.`);
        
            return function () {
                console.log(`3 - 0 valor da variável exemplo é: ${exemplo}.`);
            }
        }
    }
}

init()()()(); //executa todo codigo em uma linha só..

// const initFn1 = init();
// const initFn2 = initFn1();
// const initFn3 = initFn2();

// initFn3();