//require
const fs = require('fs');

let toDoList = [];

const createFile = async(fileName, data) => {
    fs.writeFile(`./db/${fileName}`, data, (err) => {
        if (err) {
            throw new Error('No se pudo grabar', err);
        } else {
            return ('File created success!!')
        }

    })
};

const loadData = () => {
    try {
        toDoList = require('../db/data.json');
    } catch (error) {
        toDoList = [];
    }
}

const save = () => {
    let data = JSON.stringify(toDoList);
    if (data) {
        createFile('data.json', data);
    }
};


const createToDo = (description) => {
    loadData();

    let toDo = {
        description,
        completed: false
    }
    toDoList.push(toDo);
    save();

    return toDo;
}

const getToDoList = () => {
    loadData();
    return toDoList;
}

const getToDoListFilter = (completed) => {
    loadData();
    return toDoList.filter(toDo => toDo.completed === completed);
}

const updateToDo = (description, completed = true) => {
    loadData();
    let index = toDoList.findIndex(toDo => toDo.description === description);

    if (index >= 0) {
        toDoList[index].completed = completed;
        save();
        return toDoList[index];
    }
    return false;
}

const deleteToDo = (description) => {
    loadData();
    let updatedList = toDoList.filter(el => el.description !== description);
    if (updatedList !== toDoList) {
        toDoList = updatedList;
        save();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    createToDo,
    getToDoList,
    updateToDo,
    deleteToDo,
    getToDoListFilter
}