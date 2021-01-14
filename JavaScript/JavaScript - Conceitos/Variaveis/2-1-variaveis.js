var test = 'example';

(() => { //if de arrowfunction
    console.log(`valor dentro da função "${test}"`)

    if (true) {
        var test = 'example';
        console.log(`Valor dentro do if "${test}"`)
    }

    console.log(`valor após a execução do if "${test}"`)
})();