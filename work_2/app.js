// First Section
let x = 'Anam Mahmud';
let y = 'Anam Mahmud';
let z = 'Anam Mahmud';
let a = 'Anam Mahmud';
let b = 'Anam Mahmud';


document.getElementById('one').innerHTML = x.length;
document.getElementById('two').innerHTML = y.toUpperCase();
document.getElementById('three').innerHTML = z.toLowerCase();
document.getElementById('four').innerHTML = a.substring(0,8);
document.getElementById('five').innerHTML = b.split('');


// Second Section
/*
let firstName = 'Anam';
let lastName = prompt('What is your last name?');


document.getElementById('name').innerHTML = firstName + ' ' + lastName;
*/

let firstName = 'Anam';
let lastName = prompt('What is your last name?');
let age = prompt('What is your age?');


document.getElementById('age').innerHTML = firstName + ' ' + lastName + '.' + ' ' + 'I am' + ' ' + age + ' ' + ' years old.';
