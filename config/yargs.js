// required
const description = {
    alias: 'd',
    demand: true
};

const completado = {
    alias: 'c',
    default: true
};

const argv = require('yargs')
    .command('crear', 'Crear un ToDo', {
        description
    })
    .command('actualizar', 'Actualiza el estado de un ToDo', {
        description,
        completado
    })
    .command('borrar', 'Borrar un ToDo de la lista', {
        description
    })
    .command('listar', 'Muestra el listado completo de ToDos)', {
        completado
    })
    .help()
    .argv;

//export
module.exports = {
    argv
}