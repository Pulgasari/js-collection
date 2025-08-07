const getElement      = selector => document.querySelector(selector);
const getElements     = selector => document.querySelectorAll(selector);
// Single
const getElementById        = id => document.getElementById(id);
// Multiple
const getElementsByClass  = name => document.getElementsByClassName(name);
const getElementsByName   = name => document.getElementsByName(name);
const getElementsByTag    = name => document.getElementsByTagName(name);
// Special: by DataKey
const  getElementByDataKey = key => document.getElement ('[data-key="' + key + '"]');
const getElementsByDataKey = key => document.getElements('[data-key="' + key + '"]');
// Special Shorthand Constants
let $root = document.documentElement;
let $body = document.body;
let $head = document.head;
