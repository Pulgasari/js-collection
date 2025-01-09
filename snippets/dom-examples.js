//---------- SELECT HTMLELEMENTS ----------
// Select HTMLElement by ID
const el = document.getElementById('id');
// Select HTMLElement by TagName
const el = document.getElementByTag('div');

//---------- CUSTOM CSS VARIABLES / PROPERTIES ----------
// Set Custom Variable
el.style.setProperty( '--myColor', '#000000' );
// Get Value of Custom Variable
const val = window.getComputedStyle(el).getPropertyValue('--name');

// Get
const val = el.style.backgroundColor;
const val = el.style['background-color'];
// Set
el.style.backgroundColor = 'black';
el.style['background-color'] = 'black';

// Get
const val = el.getAttribute('name');
// Set
el.setAttribute( 'name', 'heiko' );
// Remove
el.removeAttribute('name');

// Get
const val = el.dataset.myDataset;
const val = el.dataset['my-dataset'];
// Set
el.dataset.myDataset = '12345';
el.dataset['my-dataset'] = '12345';
// Remove
el.removeAttribute('data-my-dataset');