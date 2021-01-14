(() => { //if de arrowfunction
    const test = 'valor função';
    console.log(`valor dentro da função "${test}"`)

    if (true) {
        const test = 'example';
        console.log(`Valor dentro do if "${test}"`)
    }
    console.log(`valor após a execução do if "${test}"`)
})();