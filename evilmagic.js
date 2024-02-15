(function(){ "use strict";

  this.evilmagic = ( url, selector ) => {
  
    url = url || document.URL;
    selector = selector || 'html';
  
    fetch(url)
    .then( response => { // The API call was successful!
      return response.text();
    })
    .then( html => { // This is the HTML from our response as a text string
  
      let dom        = new DOMParser().parseFromString( html, 'text/html' );
      let newElement = dom.querySelector(selector);
      let oldElement = document.querySelector(selector);
  
      // Apply
       oldElement.replaceWith( newElement );
  
    })
    .catch( err => { // There was an error
      console.warn('Something went wrong.', err);
    });
  
  }

}).call(this);
