(() => { //if de arrowfunction
    let test = 'valor função';
    console.log(`valor dentro da função "${test}"`)

    if (true) {
        let test = 'example';
        console.log(`Valor dentro do if "${test}"`)
    }
    console.log(`valor após a execução do if "${test}"`)
})();