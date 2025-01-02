const x = selector => {
  
  let el = document.querySelector( selector );
  let obj = { el };

  // Class
  obj.addClass    = function(name) { this.el.classList.add(name);    return this; };
  obj.removeClass = function(name) { this.el.classList.remove(name); return this; };
  obj.toggleClass = function(name) { this.el.classList.toggle(name); return this; };

  // Log
  obj.log = function() { console.log(this.el); return this; };

  return obj;
};

// Usage
const myString = MyLibrary('hello world');
myString.toUpperCase().replace('WORLD', 'Universe').addPrefix('Greeting: ').log();

x('#colorsettings').toggleClass('hidden')