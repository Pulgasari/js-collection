// some examples for the <evilmagic.js> in the main directory,
// so first you have to include it to your website

// LOAD ALL INTERNAL LINKS IN AJAX STYLE
document.addEventListener( "click", event => {
  // checking if the clicked element is a link
  if( event.target.tagName === "A" ){
    const currentDomain = window.location.origin;
    const linkHref = event.target.href;
    // check if the link belongs to the same domain
    if( linkHref.startsWith(currentDomain) ){
      event.preventDefault(); // prevent the default link behavior
      evilmagic( linkHref, 'main' ); // or use 'html', 'body' or any other selector
    }
  }
});
