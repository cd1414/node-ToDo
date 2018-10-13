const argv = require('./config/yargs').argv;
const toDo = require('./ToDo/todo')
const colors = require('colors');

let comando = argv._[0]
let message = '';

switch (comando) {
    case 'crear':
        let newToDo = toDo.createToDo(argv.description);
        console.log(newToDo);
        break;

    case 'actualizar':
        message = 'Actualizar ToDo';
        let updated = toDo.updateToDo(argv.description, argv.completado);
        console.log(updated);
        break;

    case 'listar':
        let toDoList = [];
        console.log(argv);

        if (argv.completado) {
            toDoList = toDo.getToDoListFilter(argv.completado);
        } else {
            toDoList = toDo.getToDoList();
        }

        for (let todo of toDoList) {
            console.log('========== TODO ==========='.green);
            console.log(`Name: ${todo.description}`);
            console.log(`Compleated: ${todo.completed}`)
            console.log('==========================='.green);
        }
        break;

    case 'borrar':
        message = 'Borrar ToDo';
        let deleted = toDo.deleteToDo(argv.description);
        console.log(deleted);
        break;

    default:
        message = 'Comando no reconocido.';
        break;
}

console.log(message);
//CREAR
// crear -d "Pasear al perro"

//ACTUALIZAR
// actualizar -d "Pasear al perro" -c true

//LISTAR
// listar 

//BORRAR
// borrar -d "Pasear al perro"