/****************************************
https://github.com/Pulgasari/selectors.js
****************************************/

const $       = (selector) => document.querySelector(selector);
const $CLASS  = (selector) => document.getElementsByClassName(selector)[0];
const $ID     = (selector) => document.getElementById(selector);
const $NAME   = (selector) => document.getElementsByName(selector)[0];
const $TAG    = (selector) => document.getElementsByTagName(selector)[0];
const $$      = (selector) => document.querySelectorAll(selector);
const $$CLASS = (selector) => document.getElementsByClassName(selector);
const $$NAME  = (selector) => document.getElementsByName(selector);
const $$TAG   = (selector) => document.getElementsByTagName(selector);
