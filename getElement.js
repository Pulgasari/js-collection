const getElement      = selector => document.querySelector(selector);
const getElements     = selector => document.querySelectorAll(selector);
// Single
const getElementById        = id => document.getElementById(id);
// Multiple
const getElementsByClass  = name => Array.from( document.getElementsByClassName(name) );
const getElementsByName   = name => Array.from( document.getElementsByName(name)      );
const getElementsByTag    = name => Array.from( document.getElementsByTagName(name)   );
// Special: by DataKey
const  getElementByDataKey = key => document.getElement ('[data-key="' + key + '"]');
const getElementsByDataKey = key => document.getElements('[data-key="' + key + '"]');
// Special Shorthand Constants
let $root = document.documentElement;
let $body = document.body;
let $head = document.head;
