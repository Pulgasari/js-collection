//  $ = select single element
// $$ = select multiple elements

const       $ = ( selector, context ) => ( context || document ).querySelector(selector);
const      $$ = ( selector, context ) => ( context || document ).querySelectorAll(selector);
const  $CLASS = ( selector, context ) => ( context || document ).getElementsByClassName(selector)[0];
const $$CLASS = ( selector, context ) => ( context || document ).getElementsByClassName(selector);
const     $ID = ( selector, context ) => ( context || document ).getElementById(selector);
const   $NAME = ( selector, context ) => ( context || document ).getElementsByName(selector)[0];
const  $$NAME = ( selector, context ) => ( context || document ).getElementsByName(selector);
const    $TAG = ( selector, context ) => ( context || document ).getElementsByTagName(selector)[0];
const   $$TAG = ( selector, context ) => ( context || document ).getElementsByTagName(selector);

const   $ATTR = ( selector, value ) =>  $('['      + selector + ( value ? '="' + value + '"]' : ']' ) )[0];
const  $$ATTR = ( selector, value ) => $$('['      + selector + ( value ? '="' + value + '"]' : ']' ) );
const   $DATA = ( selector, value ) =>  $('[data-' + selector + ( value ? '="' + value + '"]' : ']' ) )[0];
const  $$DATA = ( selector, value ) => $$('[data-' + selector + ( value ? '="' + value + '"]' : ']' ) );
