console.log('starting my second app.js');

const fs = require('fs');

//const require('lodash') 
const yargs = require('yargs');
const todo = require('./todo.js')
const argv = yargs.argv;

var command = process.argv[2];
console.log(argv);

if (command === 'add') {
    console.log('Adding new item...');
    todo.addNote(argv.title, argv.content)
} else if (command === 'get') {
    console.log('Get the items...');
    todo.getNote(argv.item)
} else if (command === 'findAll') {
    console.log('Finding item')
    
} else if (command === 'remove'){
	console.log('Remove item')
	todo.RemoveNote(argv.title)
} else {
	console.log('Unknown command')
}