/****************************************
https://github.com/Pulgasari/selectors.js
****************************************/

// Select Single Elements
const $       = (selector) => document.querySelector(selector);
const $CLASS  = (selector) => document.getElementsByClassName(selector)[0];
const $ID     = (selector) => document.getElementById(selector);
const $NAME   = (selector) => document.getElementsByName(selector)[0];
const $TAG    = (selector) => document.getElementsByTagName(selector)[0];

// Select Multiple Elements as Array
const $$      = (selector) => document.querySelectorAll(selector);
const $$CLASS = (selector) => document.getElementsByClassName(selector);
const $$NAME  = (selector) => document.getElementsByName(selector);
const $$TAG   = (selector) => document.getElementsByTagName(selector);
