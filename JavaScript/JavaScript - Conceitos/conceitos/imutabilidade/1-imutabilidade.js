const user = {
    name: 'Denis',
    lastName: 'Almeida Lima'
}

function getUserWithFulName(user) {
    return {
        ...user, //Spread operator para cada propriedade ele coloca dentro do objeto
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFulName(user);

console.log(userWithFullName);