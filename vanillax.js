// This Library is made for lovers Vanilla JS
// It only extends JS slightly and in a way it is still 
// as readable as plain JS
// All Methods are chainable except the Getters of course.

function Element  (selector) { return document.   querySelector('selector'); }
function Elements (selector) { return document.querySelectorAll('selector'); }

// Dataset Handling // getDataset() setDataset() removeDataset()
HTMLElement.prototype.getDataset = function( property ) {
  return this.dataset[property];
};
HTMLElement.prototype.setDataset = function( property, value ) {
  this.dataset[property] = value;
  return this;
};
HTMLElement.prototype.removeDataset = function( property ) {
  this.removeAttribute( 'data-' + property );
  return this;
};

// before: document.getElementById('sidebar').dataset['position'] = 'right';
//  after: Element('#sidebar').setDataset( 'position', 'right' );