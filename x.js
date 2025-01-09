(function(){ "use strict";

  this.x = selector => {
  
  let el = document.querySelector( selector );
  let obj = { el };
  
  // CSS
  obj.css = function( str, value ){
    if( value ){ // SET
      if( property.startsWith('--') ){ // Set Custom Variable
        this.el.style.setProperty( property, value );
        return this;
      } else { // Set Style
        this.el.style[property] = value;
        return this;
      }
    } else { // GET
      if( property.startsWith('--') ){ // Get Value of Custom Variable
        return window.getComputedStyle(this.el).getPropertyValue(property);
      } else { // Get Value of Style
        return this.el.style[property];
      }
    }
  };

  // Class
  obj.class = function(name){
    if( str.startsWith('?!') ){ // toggle
      name = name.substring(2);
      this.el.classList.toggle(name); 
      return this;
    } else if( str.startsWith('!') ){ // remove
      name = name.substring(1);
      this.el.classList.remove(name); 
      return this;
    } else  if( str.startsWith('?') ){ // has? -> true or false
      name = name.substring(1);
      return this.el.classList.contains(name);
    } else { // add
      this.el.classList.add(name); 
      return this;
    }
  };
  
  // Attribute
  obj.attr = function( property, value ) { 
    if( typeof value !== 'undefined' ){ // set value of attribute
      this.el.setAttribute( property, value );
      return this;
    } else if( property.startsWith('!') ){ // remove attribute
      property = property.substring(1);
      this.el.removeAttribute(property);
      return this;
    } else { // get value of attribute
      return this.el.getAttribute(property);
    }
  };

  // Data
  obj.data = function( property, value ) { 
    if( typeof value !== 'undefined' ){ // add
      this.el.dataset[property] = value;
      return this;
    } else if( property.startsWith('!') ){ // remove
      property = property.substring(1);
      this.el.removeAttribute( 'data-' + property );
      return this;
    } else { // get
      return this.el.dataset[property];
    }
  };
  
    // Value
  obj.value = function( value ) { 
    if( typeof value !== 'undefined' ){ // set
      this.el.value = value;
      return this;
    } else { // get
      return this.el.value;
    }
  };
  
  obj.append = function( html ){
    this.el.insertAdjacentHTML( 'beforeend', html );
    return this;
  }
  obj.prepend = function( html ){
    this.el.insertAdjacentHTML( 'afterbegin', html );
    return this;
  }
  obj.before = function( html ){
    this.el.insertAdjacentHTML( 'beforebegin', html );
    return this;
  }
  obj.after = function( html ){
    this.el.insertAdjacentHTML( 'afterend', html );
    return this;
  }
  
  obj.html    = function( html ){ this.el.innerHTML = html; return this; };
  obj.replace = function( html ){ this.el.outerHTML = html; return this; };
  
  // Log
  obj.log = function() { console.log(this.el); return this; };

  return obj;
  
  }

}).call(this);
