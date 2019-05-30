// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"pQ6M":[function(require,module,exports) {
var define;
/*! choices.js v7.0.0 | (c) 2019 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Choices=t():e.Choices=t()}(window,function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/public/assets/scripts/",i(i.s=9)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.diff=t.cloneObject=t.existsInArray=t.isIE11=t.fetchFromObject=t.getWindowHeight=t.dispatchEvent=t.sortByScore=t.sortByAlpha=t.calcWidthOfInput=t.strToEl=t.sanitise=t.isScrolledIntoView=t.getAdjacentEl=t.findAncestorByAttrName=t.wrap=t.isElement=t.isType=t.getType=t.generateId=t.generateChars=t.getRandomNumber=void 0;var n=function(e,t){return Math.floor(Math.random()*(t-e)+e)};t.getRandomNumber=n;var o=function(e){for(var t="",i=0;i<e;i++){t+=n(0,36).toString(36)}return t};t.generateChars=o;t.generateId=function(e,t){var i=e.id||e.name&&"".concat(e.name,"-").concat(o(2))||o(4);return i=i.replace(/(:|\.|\[|\]|,)/g,""),i="".concat(t,"-").concat(i)};var r=function(e){return Object.prototype.toString.call(e).slice(8,-1)};t.getType=r;var s=function(e,t){return null!=t&&r(t)===e};t.isType=s;t.isElement=function(e){return e instanceof Element};t.wrap=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.createElement("div");return e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t),t.appendChild(e)};t.findAncestorByAttrName=function(e,t){for(var i=e;i;){if(i.hasAttribute(t))return i;i=i.parentElement}return null};t.getAdjacentEl=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(e&&t){var n=e.parentNode.parentNode,o=Array.from(n.querySelectorAll(t)),r=o.indexOf(e);return o[r+(i>0?1:-1)]}};t.isScrolledIntoView=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(e)return i>0?t.scrollTop+t.offsetHeight>=e.offsetTop+e.offsetHeight:e.offsetTop>=t.scrollTop};var a=function(e){return s("String",e)?e.replace(/&/g,"&amp;").replace(/>/g,"&rt;").replace(/</g,"&lt;").replace(/"/g,"&quot;"):e};t.sanitise=a;var c,l=(c=document.createElement("div"),function(e){var t=e.trim();c.innerHTML=t;for(var i=c.children[0];c.firstChild;)c.removeChild(c.firstChild);return i});t.strToEl=l;t.calcWidthOfInput=function(e,t){var i=e.value||e.placeholder,n=e.offsetWidth;if(i){var o=l("<span>".concat(a(i),"</span>"));if(o.style.position="absolute",o.style.padding="0",o.style.top="-9999px",o.style.left="-9999px",o.style.width="auto",o.style.whiteSpace="pre",document.body.contains(e)&&window.getComputedStyle){var r=window.getComputedStyle(e);r&&(o.style.fontSize=r.fontSize,o.style.fontFamily=r.fontFamily,o.style.fontWeight=r.fontWeight,o.style.fontStyle=r.fontStyle,o.style.letterSpacing=r.letterSpacing,o.style.textTransform=r.textTransform,o.style.padding=r.padding)}document.body.appendChild(o),requestAnimationFrame(function(){i&&o.offsetWidth!==e.offsetWidth&&(n=o.offsetWidth+4),document.body.removeChild(o),t.call(void 0,"".concat(n,"px"))})}else t.call(void 0,"".concat(n,"px"))};t.sortByAlpha=function(e,t){var i="".concat(e.label||e.value).toLowerCase(),n="".concat(t.label||t.value).toLowerCase();return i<n?-1:i>n?1:0};t.sortByScore=function(e,t){return e.score-t.score};t.dispatchEvent=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=new CustomEvent(t,{detail:i,bubbles:!0,cancelable:!0});return e.dispatchEvent(n)};t.getWindowHeight=function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)};t.fetchFromObject=function e(t,i){var n=i.indexOf(".");return n>-1?e(t[i.substring(0,n)],i.substr(n+1)):t[i]};t.isIE11=function(){return!(!navigator.userAgent.match(/Trident/)||!navigator.userAgent.match(/rv[ :]11/))};t.existsInArray=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"value";return e.some(function(e){return s("String",t)?e[i]===t.trim():e[i]===t})};t.cloneObject=function(e){return JSON.parse(JSON.stringify(e))};t.diff=function(e,t){var i=Object.keys(e).sort(),n=Object.keys(t).sort();return i.filter(function(e){return n.indexOf(e)<0})}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SCROLLING_SPEED=t.KEY_CODES=t.ACTION_TYPES=t.EVENTS=t.DEFAULT_CONFIG=t.DEFAULT_CLASSNAMES=void 0;var n=i(0),o={containerOuter:"choices",containerInner:"choices__inner",input:"choices__input",inputCloned:"choices__input--cloned",list:"choices__list",listItems:"choices__list--multiple",listSingle:"choices__list--single",listDropdown:"choices__list--dropdown",item:"choices__item",itemSelectable:"choices__item--selectable",itemDisabled:"choices__item--disabled",itemChoice:"choices__item--choice",placeholder:"choices__placeholder",group:"choices__group",groupHeading:"choices__heading",button:"choices__button",activeState:"is-active",focusState:"is-focused",openState:"is-open",disabledState:"is-disabled",highlightedState:"is-highlighted",hiddenState:"is-hidden",flippedState:"is-flipped",loadingState:"is-loading",noResults:"has-no-results",noChoices:"has-no-choices"};t.DEFAULT_CLASSNAMES=o;var r={items:[],choices:[],silent:!1,renderChoiceLimit:-1,maxItemCount:-1,addItems:!0,addItemFilterFn:null,removeItems:!0,removeItemButton:!1,editItems:!1,duplicateItemsAllowed:!0,delimiter:",",paste:!0,searchEnabled:!0,searchChoices:!0,searchFloor:1,searchResultLimit:4,searchFields:["label","value"],position:"auto",resetScrollPosition:!0,shouldSort:!0,shouldSortItems:!1,sortFn:n.sortByAlpha,placeholder:!0,placeholderValue:null,searchPlaceholderValue:null,prependValue:null,appendValue:null,renderSelectedChoices:"auto",loadingText:"Loading...",noResultsText:"No results found",noChoicesText:"No choices to choose from",itemSelectText:"Press to select",uniqueItemText:"Only unique values can be added",customAddItemText:"Only values matching specific conditions can be added",addItemText:function(e){return'Press Enter to add <b>"'.concat((0,n.sanitise)(e),'"</b>')},maxItemText:function(e){return"Only ".concat(e," values can be added")},itemComparer:function(e,t){return e===t},fuseOptions:{includeScore:!0},callbackOnInit:null,callbackOnCreateTemplates:null,classNames:o};t.DEFAULT_CONFIG=r;t.EVENTS={showDropdown:"showDropdown",hideDropdown:"hideDropdown",change:"change",choice:"choice",search:"search",addItem:"addItem",removeItem:"removeItem",highlightItem:"highlightItem",highlightChoice:"highlightChoice"};t.ACTION_TYPES={ADD_CHOICE:"ADD_CHOICE",FILTER_CHOICES:"FILTER_CHOICES",ACTIVATE_CHOICES:"ACTIVATE_CHOICES",CLEAR_CHOICES:"CLEAR_CHOICES",ADD_GROUP:"ADD_GROUP",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",HIGHLIGHT_ITEM:"HIGHLIGHT_ITEM",CLEAR_ALL:"CLEAR_ALL"};t.KEY_CODES={BACK_KEY:46,DELETE_KEY:8,ENTER_KEY:13,A_KEY:65,ESC_KEY:27,UP_KEY:38,DOWN_KEY:40,PAGE_UP_KEY:33,PAGE_DOWN_KEY:34};t.SCROLLING_SPEED=4},function(e,t,i){"use strict";(function(e,n){var o,r=i(7);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:n;var s=Object(r.a)(o);t.a=s}).call(this,i(3),i(14)(e))},function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(0);function o(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=function(){function e(t){var i=t.element,o=t.classNames;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.assign(this,{element:i,classNames:o}),!(0,n.isElement)(i))throw new TypeError("Invalid element passed");this.isDisabled=!1}var t,i,r;return t=e,(i=[{key:"conceal",value:function(){this.element.classList.add(this.classNames.input),this.element.classList.add(this.classNames.hiddenState),this.element.tabIndex="-1";var e=this.element.getAttribute("style");e&&this.element.setAttribute("data-choice-orig-style",e),this.element.setAttribute("aria-hidden","true"),this.element.setAttribute("data-choice","active")}},{key:"reveal",value:function(){this.element.classList.remove(this.classNames.input),this.element.classList.remove(this.classNames.hiddenState),this.element.removeAttribute("tabindex");var e=this.element.getAttribute("data-choice-orig-style");e?(this.element.removeAttribute("data-choice-orig-style"),this.element.setAttribute("style",e)):this.element.removeAttribute("style"),this.element.removeAttribute("aria-hidden"),this.element.removeAttribute("data-choice"),this.element.value=this.element.value}},{key:"enable",value:function(){this.element.removeAttribute("disabled"),this.element.disabled=!1,this.isDisabled=!1}},{key:"disable",value:function(){this.element.setAttribute("disabled",""),this.element.disabled=!0,this.isDisabled=!0}},{key:"triggerEvent",value:function(e,t){(0,n.dispatchEvent)(this.element,e,t)}},{key:"value",get:function(){return this.element.value}}])&&o(t.prototype,i),r&&o(t,r),e}();t.default=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TEMPLATES=void 0;var n,o=(n=i(27))&&n.__esModule?n:{default:n},r=i(0);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var a={containerOuter:function(e,t,i,n,o,s){var a=n?'tabindex="0"':"",c=i?'role="listbox"':"",l="";return i&&o&&(c='role="combobox"',l='aria-autocomplete="list"'),(0,r.strToEl)('\n      <div\n        class="'.concat(e.containerOuter,'"\n        data-type="').concat(s,'"\n        ').concat(c,"\n        ").concat(a,"\n        ").concat(l,'\n        aria-haspopup="true"\n        aria-expanded="false"\n        dir="').concat(t,'"\n        >\n      </div>\n    '))},containerInner:function(e){return(0,r.strToEl)('\n      <div class="'.concat(e.containerInner,'"></div>\n    '))},itemList:function(e,t){var i,n=(0,o.default)(e.list,(s(i={},e.listSingle,t),s(i,e.listItems,!t),i));return(0,r.strToEl)('\n      <div class="'.concat(n,'"></div>\n    '))},placeholder:function(e,t){return(0,r.strToEl)('\n      <div class="'.concat(e.placeholder,'">\n        ').concat(t,"\n      </div>\n    "))},item:function(e,t,i){var n,a,c=t.active?'aria-selected="true"':"",l=t.disabled?'aria-disabled="true"':"",u=(0,o.default)(e.item,(s(n={},e.highlightedState,t.highlighted),s(n,e.itemSelectable,!t.highlighted),s(n,e.placeholder,t.placeholder),n));return i?(u=(0,o.default)(e.item,(s(a={},e.highlightedState,t.highlighted),s(a,e.itemSelectable,!t.disabled),s(a,e.placeholder,t.placeholder),a)),(0,r.strToEl)('\n        <div\n          class="'.concat(u,'"\n          data-item\n          data-id="').concat(t.id,'"\n          data-value="').concat(t.value,"\"\n          data-custom-properties='").concat(t.customProperties,"'\n          data-deletable\n          ").concat(c,"\n          ").concat(l,"\n          >\n          ").concat(t.label,'\x3c!--\n       --\x3e<button\n            type="button"\n            class="').concat(e.button,'"\n            data-button\n            aria-label="Remove item: \'').concat(t.value,"'\"\n            >\n            Remove item\n          </button>\n        </div>\n      "))):(0,r.strToEl)('\n      <div\n        class="'.concat(u,'"\n        data-item\n        data-id="').concat(t.id,'"\n        data-value="').concat(t.value,'"\n        ').concat(c,"\n        ").concat(l,"\n        >\n        ").concat(t.label,"\n      </div>\n    "))},choiceList:function(e,t){var i=t?"":'aria-multiselectable="true"';return(0,r.strToEl)('\n      <div\n        class="'.concat(e.list,'"\n        dir="ltr"\n        role="listbox"\n        ').concat(i,"\n        >\n      </div>\n    "))},choiceGroup:function(e,t){var i=t.disabled?'aria-disabled="true"':"",n=(0,o.default)(e.group,s({},e.itemDisabled,t.disabled));return(0,r.strToEl)('\n      <div\n        class="'.concat(n,'"\n        data-group\n        data-id="').concat(t.id,'"\n        data-value="').concat(t.value,'"\n        role="group"\n        ').concat(i,'\n        >\n        <div class="').concat(e.groupHeading,'">').concat(t.value,"</div>\n      </div>\n    "))},choice:function(e,t,i){var n,a=t.groupId>0?'role="treeitem"':'role="option"',c=(0,o.default)(e.item,e.itemChoice,(s(n={},e.itemDisabled,t.disabled),s(n,e.itemSelectable,!t.disabled),s(n,e.placeholder,t.placeholder),n));return(0,r.strToEl)('\n      <div\n        class="'.concat(c,'"\n        data-select-text="').concat(i,'"\n        data-choice\n        data-id="').concat(t.id,'"\n        data-value="').concat(t.value,'"\n        ').concat(t.disabled?'data-choice-disabled aria-disabled="true"':"data-choice-selectable",'\n        id="').concat(t.elementId,'"\n        ').concat(a,"\n        >\n        ").concat(t.label,"\n      </div>\n    "))},input:function(e){var t=(0,o.default)(e.input,e.inputCloned);return(0,r.strToEl)('\n      <input\n        type="text"\n        class="'.concat(t,'"\n        autocomplete="off"\n        autocapitalize="off"\n        spellcheck="false"\n        role="textbox"\n        aria-autocomplete="list"\n        >\n    '))},dropdown:function(e){var t=(0,o.default)(e.list,e.listDropdown);return(0,r.strToEl)('\n      <div\n        class="'.concat(t,'"\n        aria-expanded="false"\n        >\n      </div>\n    '))},notice:function(e,t){var i,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=(0,o.default)(e.item,e.itemChoice,(s(i={},e.noResults,"no-results"===n),s(i,e.noChoices,"no-choices"===n),i));return(0,r.strToEl)('\n      <div class="'.concat(a,'">\n        ').concat(t,"\n      </div>\n    "))},option:function(e){return(0,r.strToEl)('\n      <option value="'.concat(e.value,'" ').concat(e.active?"selected":""," ").concat(e.disabled?"disabled":""," ").concat(e.customProperties?"data-custom-properties=".concat(e.customProperties):"",">").concat(e.label,"</option>\n    "))}};t.TEMPLATES=a;var c=a;t.default=c},function(e,t,i){"use strict";i.r(t);var n=i(8),o="object"==typeof self&&self&&self.Object===Object&&self,r=(n.a||o||Function("return this")()).Symbol,s=Object.prototype,a=s.hasOwnProperty,c=s.toString,l=r?r.toStringTag:void 0;var u=function(e){var t=a.call(e,l),i=e[l];try{e[l]=void 0;var n=!0}catch(e){}var o=c.call(e);return n&&(t?e[l]=i:delete e[l]),o},h=Object.prototype.toString;var d=function(e){return h.call(e)},f="[object Null]",p="[object Undefined]",v=r?r.toStringTag:void 0;var m=function(e){return null==e?void 0===e?p:f:v&&v in Object(e)?u(e):d(e)};var g=function(e,t){return function(i){return e(t(i))}}(Object.getPrototypeOf,Object);var _=function(e){return null!=e&&"object"==typeof e},y="[object Object]",b=Function.prototype,E=Object.prototype,S=b.toString,I=E.hasOwnProperty,O=S.call(Object);var C=function(e){if(!_(e)||m(e)!=y)return!1;var t=g(e);if(null===t)return!0;var i=I.call(t,"constructor")&&t.constructor;return"function"==typeof i&&i instanceof i&&S.call(i)==O},T=i(2),w={INIT:"@@redux/INIT"};function k(e,t,i){var n;if("function"==typeof t&&void 0===i&&(i=t,t=void 0),void 0!==i){if("function"!=typeof i)throw new Error("Expected the enhancer to be a function.");return i(k)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var o=e,r=t,s=[],a=s,c=!1;function l(){a===s&&(a=s.slice())}function u(){return r}function h(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return l(),a.push(e),function(){if(t){t=!1,l();var i=a.indexOf(e);a.splice(i,1)}}}function d(e){if(!C(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(c)throw new Error("Reducers may not dispatch actions.");try{c=!0,r=o(r,e)}finally{c=!1}for(var t=s=a,i=0;i<t.length;i++){(0,t[i])()}return e}return d({type:w.INIT}),(n={dispatch:d,subscribe:h,getState:u,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");o=e,d({type:w.INIT})}})[T.a]=function(){var e,t=h;return(e={subscribe:function(e){if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");function i(){e.next&&e.next(u())}return i(),{unsubscribe:t(i)}}})[T.a]=function(){return this},e},n}function A(e,t){var i=t&&t.type;return"Given action "+(i&&'"'+i.toString()+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function L(e){for(var t=Object.keys(e),i={},n=0;n<t.length;n++){var o=t[n];0,"function"==typeof e[o]&&(i[o]=e[o])}var r=Object.keys(i);var s=void 0;try{!function(e){Object.keys(e).forEach(function(t){var i=e[t];if(void 0===i(void 0,{type:w.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===i(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+w.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(i)}catch(e){s=e}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(s)throw s;for(var n=!1,o={},a=0;a<r.length;a++){var c=r[a],l=i[c],u=e[c],h=l(u,t);if(void 0===h){var d=A(c,t);throw new Error(d)}o[c]=h,n=n||h!==u}return n?o:e}}function x(e,t){return function(){return t(e.apply(void 0,arguments))}}function P(e,t){if("function"==typeof e)return x(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var i=Object.keys(e),n={},o=0;o<i.length;o++){var r=i[o],s=e[r];"function"==typeof s&&(n[r]=x(s,t))}return n}function D(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}var j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};function M(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return function(i,n,o){var r,s=e(i,n,o),a=s.dispatch,c={getState:s.getState,dispatch:function(e){return a(e)}};return r=t.map(function(e){return e(c)}),a=D.apply(void 0,r)(s.dispatch),j({},s,{dispatch:a})}}}i.d(t,"createStore",function(){return k}),i.d(t,"combineReducers",function(){return L}),i.d(t,"bindActionCreators",function(){return P}),i.d(t,"applyMiddleware",function(){return M}),i.d(t,"compose",function(){return D})},function(e,t,i){"use strict";function n(e){var t,i=e.Symbol;return"function"==typeof i?i.observable?t=i.observable:(t=i("observable"),i.observable=t):t="@@observable",t}i.d(t,"a",function(){return n})},function(e,t,i){"use strict";(function(e){var i="object"==typeof e&&e&&e.Object===Object&&e;t.a=i}).call(this,i(3))},function(e,t,i){e.exports=i(10)},function(e,t,i){"use strict";var n=v(i(11)),o=v(i(12)),r=v(i(13)),s=i(20),a=i(1),c=i(5),l=i(28),u=i(29),h=i(30),d=i(31),f=i(32),p=i(0);function v(e){return e&&e.__esModule?e:{default:e}}function m(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function g(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var _=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"[data-choice]",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),(0,p.isType)("String",t)){var n=Array.from(document.querySelectorAll(t));if(n.length>1)return this._generateInstances(n,i)}this.config=o.default.all([a.DEFAULT_CONFIG,e.userDefaults,i],{arrayMerge:function(e,t){return[].concat(t)}});var c=(0,p.diff)(this.config,a.DEFAULT_CONFIG);c.length&&console.warn("Unknown config option(s) passed",c.join(", ")),["auto","always"].includes(this.config.renderSelectedChoices)||(this.config.renderSelectedChoices="auto");var l=(0,p.isType)("String",t)?document.querySelector(t):t;return l?(this._isTextElement="text"===l.type,this._isSelectOneElement="select-one"===l.type,this._isSelectMultipleElement="select-multiple"===l.type,this._isSelectElement=this._isSelectOneElement||this._isSelectMultipleElement,this._isTextElement?this.passedElement=new s.WrappedInput({element:l,classNames:this.config.classNames,delimiter:this.config.delimiter}):this._isSelectElement&&(this.passedElement=new s.WrappedSelect({element:l,classNames:this.config.classNames})),this.passedElement?(!0===this.config.shouldSortItems&&this._isSelectOneElement&&!this.config.silent&&console.warn("shouldSortElements: Type of passed element is 'select-one', falling back to false."),this.initialised=!1,this._store=new r.default(this.render),this._initialState={},this._currentState={},this._prevState={},this._currentValue="",this._canSearch=this.config.searchEnabled,this._isScrollingOnIe=!1,this._highlightPosition=0,this._wasTap=!0,this._placeholderValue=this._generatePlaceholderValue(),this._baseId=(0,p.generateId)(this.passedElement.element,"choices-"),this._direction=this.passedElement.element.getAttribute("dir")||"ltr",this._idNames={itemChoice:"item-choice"},this._presetChoices=this.config.choices,this._presetItems=this.config.items,this.passedElement.value&&(this._presetItems=this._presetItems.concat(this.passedElement.value.split(this.config.delimiter))),this._render=this._render.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this._onClick=this._onClick.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this._onMouseDown=this._onMouseDown.bind(this),this._onMouseOver=this._onMouseOver.bind(this),this._onFormReset=this._onFormReset.bind(this),this._onAKey=this._onAKey.bind(this),this._onEnterKey=this._onEnterKey.bind(this),this._onEscapeKey=this._onEscapeKey.bind(this),this._onDirectionKey=this._onDirectionKey.bind(this),this._onDeleteKey=this._onDeleteKey.bind(this),"active"===this.passedElement.element.getAttribute("data-choice")&&console.warn("Trying to initialise Choices on element already initialised"),void this.init()):console.error("Passed element was of an invalid type")):console.error("Could not find passed element or passed element was of an invalid type")}var t,i,v;return t=e,(i=[{key:"init",value:function(){if(!this.initialised){this._createTemplates(),this._createElements(),this._createStructure(),this._initialState=(0,p.cloneObject)(this._store.state),this._store.subscribe(this._render),this._render(),this._addEventListeners(),(!this.config.addItems||this.passedElement.element.hasAttribute("disabled"))&&this.disable(),this.initialised=!0;var e=this.config.callbackOnInit;e&&(0,p.isType)("Function",e)&&e.call(this)}}},{key:"destroy",value:function(){this.initialised&&(this._removeEventListeners(),this.passedElement.reveal(),this.containerOuter.unwrap(this.passedElement.element),this._isSelectElement&&(this.passedElement.options=this._presetChoices),this.clearStore(),this.config.templates=null,this.initialised=!1)}},{key:"enable",value:function(){return this.passedElement.isDisabled&&this.passedElement.enable(),this.containerOuter.isDisabled&&(this._addEventListeners(),this.input.enable(),this.containerOuter.enable()),this}},{key:"disable",value:function(){return this.passedElement.isDisabled||this.passedElement.disable(),this.containerOuter.isDisabled||(this._removeEventListeners(),this.input.disable(),this.containerOuter.disable()),this}},{key:"highlightItem",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e)return this;var i=e.id,n=e.groupId,o=void 0===n?-1:n,r=e.value,s=void 0===r?"":r,c=e.label,l=void 0===c?"":c,h=o>=0?this._store.getGroupById(o):null;return this._store.dispatch((0,u.highlightItem)(i,!0)),t&&this.passedElement.triggerEvent(a.EVENTS.highlightItem,{id:i,value:s,label:l,groupValue:h&&h.value?h.value:null}),this}},{key:"unhighlightItem",value:function(e){if(!e)return this;var t=e.id,i=e.groupId,n=void 0===i?-1:i,o=e.value,r=void 0===o?"":o,s=e.label,c=void 0===s?"":s,l=n>=0?this._store.getGroupById(n):null;return this._store.dispatch((0,u.highlightItem)(t,!1)),this.passedElement.triggerEvent(a.EVENTS.highlightItem,{id:t,value:r,label:c,groupValue:l&&l.value?l.value:null}),this}},{key:"highlightAll",value:function(){var e=this;return this._store.items.forEach(function(t){return e.highlightItem(t)}),this}},{key:"unhighlightAll",value:function(){var e=this;return this._store.items.forEach(function(t){return e.unhighlightItem(t)}),this}},{key:"removeActiveItemsByValue",value:function(e){var t=this;return this._store.activeItems.filter(function(t){return t.value===e}).forEach(function(e){return t._removeItem(e)}),this}},{key:"removeActiveItems",value:function(e){var t=this;return this._store.activeItems.filter(function(t){return t.id!==e}).forEach(function(e){return t._removeItem(e)}),this}},{key:"removeHighlightedItems",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this._store.highlightedActiveItems.forEach(function(i){e._removeItem(i),t&&e._triggerChange(i.value)}),this}},{key:"showDropdown",value:function(e){var t=this;return this.dropdown.isActive?this:(requestAnimationFrame(function(){t.dropdown.show(),t.containerOuter.open(t.dropdown.distanceFromTopWindow()),!e&&t._canSearch&&t.input.focus(),t.passedElement.triggerEvent(a.EVENTS.showDropdown,{})}),this)}},{key:"hideDropdown",value:function(e){var t=this;return this.dropdown.isActive?(requestAnimationFrame(function(){t.dropdown.hide(),t.containerOuter.close(),!e&&t._canSearch&&(t.input.removeActiveDescendant(),t.input.blur()),t.passedElement.triggerEvent(a.EVENTS.hideDropdown,{})}),this):this}},{key:"getValue",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this._store.activeItems.reduce(function(t,i){var n=e?i.value:i;return t.push(n),t},[]);return this._isSelectOneElement?t[0]:t}},{key:"setValue",value:function(e){var t=this;return this.initialised?([].concat(e).forEach(function(e){return t._setChoiceOrItem(e)}),this):this}},{key:"setChoiceByValue",value:function(e){var t=this;return!this.initialised||this._isTextElement?this:(((0,p.isType)("Array",e)?e:[e]).forEach(function(e){return t._findAndSelectChoiceByValue(e)}),this)}},{key:"setChoices",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!this._isSelectElement||!i)return this;o&&this.clearChoices(),this.containerOuter.removeLoadingState();return this._setLoading(!0),t.forEach(function(t){t.choices?e._addGroup({group:t,id:t.id||null,valueKey:i,labelKey:n}):e._addChoice({value:t[i],label:t[n],isSelected:t.selected,isDisabled:t.disabled,customProperties:t.customProperties,placeholder:t.placeholder})}),this._setLoading(!1),this}},{key:"clearChoices",value:function(){this._store.dispatch((0,l.clearChoices)())}},{key:"clearStore",value:function(){return this._store.dispatch((0,d.clearAll)()),this}},{key:"clearInput",value:function(){var e=!this._isSelectOneElement;return this.input.clear(e),!this._isTextElement&&this._canSearch&&(this._isSearching=!1,this._store.dispatch((0,l.activateChoices)(!0))),this}},{key:"ajax",value:function(e){var t=this;return this.initialised&&this._isSelectElement&&e?(requestAnimationFrame(function(){return t._handleLoadingState(!0)}),e(this._ajaxCallback()),this):this}},{key:"_render",value:function(){if(!this._store.isLoading()){this._currentState=this._store.state;var e=this._currentState.choices!==this._prevState.choices||this._currentState.groups!==this._prevState.groups||this._currentState.items!==this._prevState.items,t=this._isSelectElement,i=this._currentState.items!==this._prevState.items;e&&(t&&this._renderChoices(),i&&this._renderItems(),this._prevState=this._currentState)}}},{key:"_renderChoices",value:function(){var e=this,t=this._store,i=t.activeGroups,n=t.activeChoices,o=document.createDocumentFragment();if(this.choiceList.clear(),this.config.resetScrollPosition&&requestAnimationFrame(function(){return e.choiceList.scrollToTop()}),i.length>=1&&!this._isSearching){var r=n.filter(function(e){return!0===e.placeholder&&-1===e.groupId});r.length>=1&&(o=this._createChoicesFragment(r,o)),o=this._createGroupsFragment(i,n,o)}else n.length>=1&&(o=this._createChoicesFragment(n,o));if(o.childNodes&&o.childNodes.length>0){var s=this._store.activeItems,a=this._canAddItem(s,this.input.value);a.response?(this.choiceList.append(o),this._highlightChoice()):this.choiceList.append(this._getTemplate("notice",a.notice))}else{var c,l;this._isSearching?(l=(0,p.isType)("Function",this.config.noResultsText)?this.config.noResultsText():this.config.noResultsText,c=this._getTemplate("notice",l,"no-results")):(l=(0,p.isType)("Function",this.config.noChoicesText)?this.config.noChoicesText():this.config.noChoicesText,c=this._getTemplate("notice",l,"no-choices")),this.choiceList.append(c)}}},{key:"_renderItems",value:function(){var e=this._store.activeItems||[];this.itemList.clear();var t=this._createItemsFragment(e);t.childNodes&&this.itemList.append(t)}},{key:"_createGroupsFragment",value:function(e,t,i){var n=this,o=i||document.createDocumentFragment();return this.config.shouldSort&&e.sort(this.config.sortFn),e.forEach(function(e){var i=function(e){return t.filter(function(t){return n._isSelectOneElement?t.groupId===e.id:t.groupId===e.id&&("always"===n.config.renderSelectedChoices||!t.selected)})}(e);if(i.length>=1){var r=n._getTemplate("choiceGroup",e);o.appendChild(r),n._createChoicesFragment(i,o,!0)}}),o}},{key:"_createChoicesFragment",value:function(e,t){var i=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=t||document.createDocumentFragment(),r=this.config,s=r.renderSelectedChoices,a=r.searchResultLimit,c=r.renderChoiceLimit,l=this._isSearching?p.sortByScore:this.config.sortFn,u=function(e){if("auto"!==s||(i._isSelectOneElement||!e.selected)){var t=i._getTemplate("choice",e,i.config.itemSelectText);o.appendChild(t)}},h=e;"auto"!==s||this._isSelectOneElement||(h=e.filter(function(e){return!e.selected}));var d=h.reduce(function(e,t){return t.placeholder?e.placeholderChoices.push(t):e.normalChoices.push(t),e},{placeholderChoices:[],normalChoices:[]}),f=d.placeholderChoices,v=d.normalChoices;(this.config.shouldSort||this._isSearching)&&v.sort(l);var m=h.length,g=[].concat(f,v);this._isSearching?m=a:c>0&&!n&&(m=c);for(var _=0;_<m;_+=1)g[_]&&u(g[_]);return o}},{key:"_createItemsFragment",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=this.config,o=n.shouldSortItems,r=n.sortFn,s=n.removeItemButton,a=i||document.createDocumentFragment();o&&!this._isSelectOneElement&&e.sort(r),this._isTextElement?this.passedElement.value=e:this.passedElement.options=e;return e.forEach(function(e){return function(e){var i=t._getTemplate("item",e,s);a.appendChild(i)}(e)}),a}},{key:"_triggerChange",value:function(e){null!=e&&this.passedElement.triggerEvent(a.EVENTS.change,{value:e})}},{key:"_selectPlaceholderChoice",value:function(){var e=this._store.placeholderChoice;e&&(this._addItem({value:e.value,label:e.label,choiceId:e.id,groupId:e.groupId,placeholder:e.placeholder}),this._triggerChange(e.value))}},{key:"_handleButtonAction",value:function(e,t){if(e&&t&&this.config.removeItems&&this.config.removeItemButton){var i=t.parentNode.getAttribute("data-id"),n=e.find(function(e){return e.id===parseInt(i,10)});this._removeItem(n),this._triggerChange(n.value),this._isSelectOneElement&&this._selectPlaceholderChoice()}}},{key:"_handleItemAction",value:function(e,t){var i=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e&&t&&this.config.removeItems&&!this._isSelectOneElement){var o=t.getAttribute("data-id");e.forEach(function(e){e.id!==parseInt(o,10)||e.highlighted?!n&&e.highlighted&&i.unhighlightItem(e):i.highlightItem(e)}),this.input.focus()}}},{key:"_handleChoiceAction",value:function(e,t){if(e&&t){var i=t.getAttribute("data-id"),n=this._store.getChoiceById(i),o=e[0]&&e[0].keyCode?e[0].keyCode:null,r=this.dropdown.isActive;if(n.keyCode=o,this.passedElement.triggerEvent(a.EVENTS.choice,{choice:n}),n&&!n.selected&&!n.disabled)this._canAddItem(e,n.value).response&&(this._addItem({value:n.value,label:n.label,choiceId:n.id,groupId:n.groupId,customProperties:n.customProperties,placeholder:n.placeholder,keyCode:n.keyCode}),this._triggerChange(n.value));this.clearInput(),r&&this._isSelectOneElement&&(this.hideDropdown(!0),this.containerOuter.focus())}}},{key:"_handleBackspace",value:function(e){if(this.config.removeItems&&e){var t=e[e.length-1],i=e.some(function(e){return e.highlighted});this.config.editItems&&!i&&t?(this.input.value=t.value,this.input.setWidth(),this._removeItem(t),this._triggerChange(t.value)):(i||this.highlightItem(t,!1),this.removeHighlightedItems(!0))}}},{key:"_setLoading",value:function(e){this._store.dispatch((0,f.setIsLoading)(e))}},{key:"_handleLoadingState",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.itemList.getChild(".".concat(this.config.classNames.placeholder));e?(this.disable(),this.containerOuter.addLoadingState(),this._isSelectOneElement?t?t.innerHTML=this.config.loadingText:(t=this._getTemplate("placeholder",this.config.loadingText),this.itemList.append(t)):this.input.placeholder=this.config.loadingText):(this.enable(),this.containerOuter.removeLoadingState(),this._isSelectOneElement?t.innerHTML=this._placeholderValue||"":this.input.placeholder=this._placeholderValue||"")}},{key:"_handleSearch",value:function(e){if(e&&this.input.isFocussed){var t=this._store.choices,i=this.config,n=i.searchFloor,o=i.searchChoices,r=t.some(function(e){return!e.active});if(e&&e.length>=n){var s=o?this._searchChoices(e):0;this.passedElement.triggerEvent(a.EVENTS.search,{value:e,resultCount:s})}else r&&(this._isSearching=!1,this._store.dispatch((0,l.activateChoices)(!0)))}}},{key:"_canAddItem",value:function(e,t){var i=!0,n=(0,p.isType)("Function",this.config.addItemText)?this.config.addItemText(t):this.config.addItemText;if(!this._isSelectOneElement){var o=(0,p.existsInArray)(e,t);this.config.maxItemCount>0&&this.config.maxItemCount<=e.length&&(i=!1,n=(0,p.isType)("Function",this.config.maxItemText)?this.config.maxItemText(this.config.maxItemCount):this.config.maxItemText),!this.config.duplicateItemsAllowed&&o&&i&&(i=!1,n=(0,p.isType)("Function",this.config.uniqueItemText)?this.config.uniqueItemText(t):this.config.uniqueItemText),this._isTextElement&&this.config.addItems&&i&&(0,p.isType)("Function",this.config.addItemFilterFn)&&!this.config.addItemFilterFn(t)&&(i=!1,n=(0,p.isType)("Function",this.config.customAddItemText)?this.config.customAddItemText(t):this.config.customAddItemText)}return{response:i,notice:n}}},{key:"_ajaxCallback",value:function(){var e=this;return function(t,i,n){if(t&&i){var o=(0,p.isType)("Object",t)?[t]:t;o&&(0,p.isType)("Array",o)&&o.length?(e._handleLoadingState(!1),e._setLoading(!0),o.forEach(function(t){t.choices?e._addGroup({group:t,id:t.id||null,valueKey:i,labelKey:n}):e._addChoice({value:(0,p.fetchFromObject)(t,i),label:(0,p.fetchFromObject)(t,n),isSelected:t.selected,isDisabled:t.disabled,customProperties:t.customProperties,placeholder:t.placeholder})}),e._setLoading(!1),e._isSelectOneElement&&e._selectPlaceholderChoice()):e._handleLoadingState(!1)}}}},{key:"_searchChoices",value:function(e){var t=(0,p.isType)("String",e)?e.trim():e,i=(0,p.isType)("String",this._currentValue)?this._currentValue.trim():this._currentValue;if(t.length<1&&t==="".concat(i," "))return 0;var o=this._store.searchableChoices,r=t,s=[].concat(this.config.searchFields),a=Object.assign(this.config.fuseOptions,{keys:s}),c=new n.default(o,a).search(r);return this._currentValue=t,this._highlightPosition=0,this._isSearching=!0,this._store.dispatch((0,l.filterChoices)(c)),c.length}},{key:"_addEventListeners",value:function(){document.addEventListener("keyup",this._onKeyUp),document.addEventListener("keydown",this._onKeyDown),document.addEventListener("click",this._onClick),document.addEventListener("touchmove",this._onTouchMove),document.addEventListener("touchend",this._onTouchEnd),document.addEventListener("mousedown",this._onMouseDown),document.addEventListener("mouseover",this._onMouseOver),this._isSelectOneElement&&(this.containerOuter.element.addEventListener("focus",this._onFocus),this.containerOuter.element.addEventListener("blur",this._onBlur)),this.input.element.addEventListener("focus",this._onFocus),this.input.element.addEventListener("blur",this._onBlur),this.input.element.form&&this.input.element.form.addEventListener("reset",this._onFormReset),this.input.addEventListeners()}},{key:"_removeEventListeners",value:function(){document.removeEventListener("keyup",this._onKeyUp),document.removeEventListener("keydown",this._onKeyDown),document.removeEventListener("click",this._onClick),document.removeEventListener("touchmove",this._onTouchMove),document.removeEventListener("touchend",this._onTouchEnd),document.removeEventListener("mousedown",this._onMouseDown),document.removeEventListener("mouseover",this._onMouseOver),this._isSelectOneElement&&(this.containerOuter.element.removeEventListener("focus",this._onFocus),this.containerOuter.element.removeEventListener("blur",this._onBlur)),this.input.element.removeEventListener("focus",this._onFocus),this.input.element.removeEventListener("blur",this._onBlur),this.input.element.form&&this.input.element.form.removeEventListener("reset",this._onFormReset),this.input.removeEventListeners()}},{key:"_onKeyDown",value:function(e){var t,i=e.target,n=e.keyCode,o=e.ctrlKey,r=e.metaKey;if(i===this.input.element||this.containerOuter.element.contains(i)){var s=this._store.activeItems,c=this.input.isFocussed,l=this.dropdown.isActive,u=this.itemList.hasChildren,h=String.fromCharCode(n),d=a.KEY_CODES.BACK_KEY,f=a.KEY_CODES.DELETE_KEY,p=a.KEY_CODES.ENTER_KEY,v=a.KEY_CODES.A_KEY,g=a.KEY_CODES.ESC_KEY,_=a.KEY_CODES.UP_KEY,y=a.KEY_CODES.DOWN_KEY,b=a.KEY_CODES.PAGE_UP_KEY,E=a.KEY_CODES.PAGE_DOWN_KEY,S=o||r;!this._isTextElement&&/[a-zA-Z0-9-_ ]/.test(h)&&this.showDropdown();var I=(m(t={},v,this._onAKey),m(t,p,this._onEnterKey),m(t,g,this._onEscapeKey),m(t,_,this._onDirectionKey),m(t,b,this._onDirectionKey),m(t,y,this._onDirectionKey),m(t,E,this._onDirectionKey),m(t,f,this._onDeleteKey),m(t,d,this._onDeleteKey),t);I[n]&&I[n]({event:e,target:i,keyCode:n,metaKey:r,activeItems:s,hasFocusedInput:c,hasActiveDropdown:l,hasItems:u,hasCtrlDownKeyPressed:S})}}},{key:"_onKeyUp",value:function(e){var t=e.target,i=e.keyCode;if(t===this.input.element){var n=this.input.value,o=this._store.activeItems,r=this._canAddItem(o,n),s=a.KEY_CODES.BACK_KEY,c=a.KEY_CODES.DELETE_KEY;if(this._isTextElement){if(r.notice&&n){var u=this._getTemplate("notice",r.notice);this.dropdown.element.innerHTML=u.outerHTML,this.showDropdown(!0)}else this.hideDropdown(!0)}else{var h=(i===s||i===c)&&!t.value,d=!this._isTextElement&&this._isSearching,f=this._canSearch&&r.response;h&&d?(this._isSearching=!1,this._store.dispatch((0,l.activateChoices)(!0))):f&&this._handleSearch(this.input.value)}this._canSearch=this.config.searchEnabled}}},{key:"_onAKey",value:function(e){var t=e.hasItems;e.hasCtrlDownKeyPressed&&t&&(this._canSearch=!1,this.config.removeItems&&!this.input.value&&this.input.element===document.activeElement&&this.highlightAll())}},{key:"_onEnterKey",value:function(e){var t=e.event,i=e.target,n=e.activeItems,o=e.hasActiveDropdown,r=a.KEY_CODES.ENTER_KEY,s=i.hasAttribute("data-button");if(this._isTextElement&&i.value){var c=this.input.value;this._canAddItem(n,c).response&&(this.hideDropdown(!0),this._addItem({value:c}),this._triggerChange(c),this.clearInput())}if(s&&(this._handleButtonAction(n,i),t.preventDefault()),o){var l=this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));l&&(n[0]&&(n[0].keyCode=r),this._handleChoiceAction(n,l)),t.preventDefault()}else this._isSelectOneElement&&(this.showDropdown(),t.preventDefault())}},{key:"_onEscapeKey",value:function(e){e.hasActiveDropdown&&(this.hideDropdown(!0),this.containerOuter.focus())}},{key:"_onDirectionKey",value:function(e){var t=e.event,i=e.hasActiveDropdown,n=e.keyCode,o=e.metaKey,r=a.KEY_CODES.DOWN_KEY,s=a.KEY_CODES.PAGE_UP_KEY,c=a.KEY_CODES.PAGE_DOWN_KEY;if(i||this._isSelectOneElement){this.showDropdown(),this._canSearch=!1;var l,u=n===r||n===c?1:-1;if(o||n===c||n===s)l=u>0?Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]")).pop():this.dropdown.element.querySelector("[data-choice-selectable]");else{var h=this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));l=h?(0,p.getAdjacentEl)(h,"[data-choice-selectable]",u):this.dropdown.element.querySelector("[data-choice-selectable]")}l&&((0,p.isScrolledIntoView)(l,this.choiceList.element,u)||this.choiceList.scrollToChoice(l,u),this._highlightChoice(l)),t.preventDefault()}}},{key:"_onDeleteKey",value:function(e){var t=e.event,i=e.target,n=e.hasFocusedInput,o=e.activeItems;!n||i.value||this._isSelectOneElement||(this._handleBackspace(o),t.preventDefault())}},{key:"_onTouchMove",value:function(){this._wasTap&&(this._wasTap=!1)}},{key:"_onTouchEnd",value:function(e){var t=(e||e.touches[0]).target;this._wasTap&&this.containerOuter.element.contains(t)&&((t===this.containerOuter.element||t===this.containerInner.element)&&(this._isTextElement?this.input.focus():this._isSelectMultipleElement&&this.showDropdown()),e.stopPropagation());this._wasTap=!0}},{key:"_onMouseDown",value:function(e){var t=e.target,i=e.shiftKey;if(this.choiceList.element.contains(t)&&(0,p.isIE11)()&&(this._isScrollingOnIe=!0),this.containerOuter.element.contains(t)&&t!==this.input.element){var n=this._store.activeItems,o=i,r=(0,p.findAncestorByAttrName)(t,"data-button"),s=(0,p.findAncestorByAttrName)(t,"data-item"),a=(0,p.findAncestorByAttrName)(t,"data-choice");r?this._handleButtonAction(n,r):s?this._handleItemAction(n,s,o):a&&this._handleChoiceAction(n,a),e.preventDefault()}}},{key:"_onMouseOver",value:function(e){var t=e.target;(t===this.dropdown||this.dropdown.element.contains(t))&&t.hasAttribute("data-choice")&&this._highlightChoice(t)}},{key:"_onClick",value:function(e){var t=e.target;this.containerOuter.element.contains(t)?this.dropdown.isActive||this.containerOuter.isDisabled?this._isSelectOneElement&&t!==this.input.element&&!this.dropdown.element.contains(t)&&this.hideDropdown():this._isTextElement?document.activeElement!==this.input.element&&this.input.focus():(this.showDropdown(),this.containerOuter.focus()):(this._store.highlightedActiveItems&&this.unhighlightAll(),this.containerOuter.removeFocusState(),this.hideDropdown(!0))}},{key:"_onFocus",value:function(e){var t=this,i=e.target;this.containerOuter.element.contains(i)&&{text:function(){i===t.input.element&&t.containerOuter.addFocusState()},"select-one":function(){t.containerOuter.addFocusState(),i===t.input.element&&t.showDropdown(!0)},"select-multiple":function(){i===t.input.element&&(t.showDropdown(!0),t.containerOuter.addFocusState())}}[this.passedElement.element.type]()}},{key:"_onBlur",value:function(e){var t=this,i=e.target;if(this.containerOuter.element.contains(i)&&!this._isScrollingOnIe){var n=this._store.activeItems.some(function(e){return e.highlighted});({text:function(){i===t.input.element&&(t.containerOuter.removeFocusState(),n&&t.unhighlightAll(),t.hideDropdown(!0))},"select-one":function(){t.containerOuter.removeFocusState(),(i===t.input.element||i===t.containerOuter.element&&!t._canSearch)&&t.hideDropdown(!0)},"select-multiple":function(){i===t.input.element&&(t.containerOuter.removeFocusState(),t.hideDropdown(!0),n&&t.unhighlightAll())}})[this.passedElement.element.type]()}else this._isScrollingOnIe=!1,this.input.element.focus()}},{key:"_onFormReset",value:function(){this._store.dispatch((0,d.resetTo)(this._initialState))}},{key:"_highlightChoice",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));if(i.length){var n=t;Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState))).forEach(function(t){t.classList.remove(e.config.classNames.highlightedState),t.setAttribute("aria-selected","false")}),n?this._highlightPosition=i.indexOf(n):(n=i.length>this._highlightPosition?i[this._highlightPosition]:i[i.length-1])||(n=i[0]),n.classList.add(this.config.classNames.highlightedState),n.setAttribute("aria-selected","true"),this.passedElement.triggerEvent(a.EVENTS.highlightChoice,{el:n}),this.dropdown.isActive&&(this.input.setActiveDescendant(n.id),this.containerOuter.setActiveDescendant(n.id))}}},{key:"_addItem",value:function(e){var t=e.value,i=e.label,n=void 0===i?null:i,o=e.choiceId,r=void 0===o?-1:o,s=e.groupId,c=void 0===s?-1:s,l=e.customProperties,h=void 0===l?null:l,d=e.placeholder,f=void 0!==d&&d,v=e.keyCode,m=void 0===v?null:v,g=(0,p.isType)("String",t)?t.trim():t,_=m,y=h,b=this._store.items,E=n||g,S=parseInt(r,10)||-1,I=c>=0?this._store.getGroupById(c):null,O=b?b.length+1:1;return this.config.prependValue&&(g=this.config.prependValue+g.toString()),this.config.appendValue&&(g+=this.config.appendValue.toString()),this._store.dispatch((0,u.addItem)({value:g,label:E,id:O,choiceId:S,groupId:c,customProperties:h,placeholder:f,keyCode:_})),this._isSelectOneElement&&this.removeActiveItems(O),this.passedElement.triggerEvent(a.EVENTS.addItem,{id:O,value:g,label:E,customProperties:y,groupValue:I&&I.value?I.value:void 0,keyCode:_}),this}},{key:"_removeItem",value:function(e){if(!e||!(0,p.isType)("Object",e))return this;var t=e.id,i=e.value,n=e.label,o=e.choiceId,r=e.groupId,s=r>=0?this._store.getGroupById(r):null;return this._store.dispatch((0,u.removeItem)(t,o)),s&&s.value?this.passedElement.triggerEvent(a.EVENTS.removeItem,{id:t,value:i,label:n,groupValue:s.value}):this.passedElement.triggerEvent(a.EVENTS.removeItem,{id:t,value:i,label:n}),this}},{key:"_addChoice",value:function(e){var t=e.value,i=e.label,n=void 0===i?null:i,o=e.isSelected,r=void 0!==o&&o,s=e.isDisabled,a=void 0!==s&&s,c=e.groupId,u=void 0===c?-1:c,h=e.customProperties,d=void 0===h?null:h,f=e.placeholder,p=void 0!==f&&f,v=e.keyCode,m=void 0===v?null:v;if(null!=t){var g=this._store.choices,_=n||t,y=g?g.length+1:1,b="".concat(this._baseId,"-").concat(this._idNames.itemChoice,"-").concat(y);this._store.dispatch((0,l.addChoice)({value:t,label:_,id:y,groupId:u,disabled:a,elementId:b,customProperties:d,placeholder:p,keyCode:m})),r&&this._addItem({value:t,label:_,choiceId:y,customProperties:d,placeholder:p,keyCode:m})}}},{key:"_addGroup",value:function(e){var t=this,i=e.group,n=e.id,o=e.valueKey,r=void 0===o?"value":o,s=e.labelKey,a=void 0===s?"label":s,c=(0,p.isType)("Object",i)?i.choices:Array.from(i.getElementsByTagName("OPTION")),l=n||Math.floor((new Date).valueOf()*Math.random()),u=!!i.disabled&&i.disabled;if(c){this._store.dispatch((0,h.addGroup)(i.label,l,!0,u));c.forEach(function(e){var i=e.disabled||e.parentNode&&e.parentNode.disabled;t._addChoice({value:e[r],label:(0,p.isType)("Object",e)?e[a]:e.innerHTML,isSelected:e.selected,isDisabled:i,groupId:l,customProperties:e.customProperties,placeholder:e.placeholder})})}else this._store.dispatch((0,h.addGroup)(i.label,i.id,!1,i.disabled))}},{key:"_getTemplate",value:function(e){var t;if(!e)return null;for(var i=this.config,n=i.templates,o=i.classNames,r=arguments.length,s=new Array(r>1?r-1:0),a=1;a<r;a++)s[a-1]=arguments[a];return(t=n[e]).call.apply(t,[this,o].concat(s))}},{key:"_createTemplates",value:function(){var e=this.config.callbackOnCreateTemplates,t={};e&&(0,p.isType)("Function",e)&&(t=e.call(this,p.strToEl)),this.config.templates=(0,o.default)(c.TEMPLATES,t)}},{key:"_createElements",value:function(){this.containerOuter=new s.Container({element:this._getTemplate("containerOuter",this._direction,this._isSelectElement,this._isSelectOneElement,this.config.searchEnabled,this.passedElement.element.type),classNames:this.config.classNames,type:this.passedElement.element.type,position:this.config.position}),this.containerInner=new s.Container({element:this._getTemplate("containerInner"),classNames:this.config.classNames,type:this.passedElement.element.type,position:this.config.position}),this.input=new s.Input({element:this._getTemplate("input"),classNames:this.config.classNames,type:this.passedElement.element.type}),this.choiceList=new s.List({element:this._getTemplate("choiceList",this._isSelectOneElement)}),this.itemList=new s.List({element:this._getTemplate("itemList",this._isSelectOneElement)}),this.dropdown=new s.Dropdown({element:this._getTemplate("dropdown"),classNames:this.config.classNames,type:this.passedElement.element.type})}},{key:"_createStructure",value:function(){this.passedElement.conceal(),this.containerInner.wrap(this.passedElement.element),this.containerOuter.wrap(this.containerInner.element),this._isSelectOneElement?this.input.placeholder=this.config.searchPlaceholderValue||"":this._placeholderValue&&(this.input.placeholder=this._placeholderValue,this.input.setWidth(!0)),this.containerOuter.element.appendChild(this.containerInner.element),this.containerOuter.element.appendChild(this.dropdown.element),this.containerInner.element.appendChild(this.itemList.element),this._isTextElement||this.dropdown.element.appendChild(this.choiceList.element),this._isSelectOneElement?this.config.searchEnabled&&this.dropdown.element.insertBefore(this.input.element,this.dropdown.element.firstChild):this.containerInner.element.appendChild(this.input.element),this._isSelectElement?this._addPredefinedChoices():this._isTextElement&&this._addPredefinedItems()}},{key:"_addPredefinedChoices",value:function(){var e=this,t=this.passedElement.optionGroups;if(this._highlightPosition=0,this._isSearching=!1,this._setLoading(!0),t&&t.length){var i=this.passedElement.placeholderOption;i&&"SELECT"===i.parentNode.tagName&&this._addChoice({value:i.value,label:i.innerHTML,isSelected:i.selected,isDisabled:i.disabled,placeholder:!0}),t.forEach(function(t){return e._addGroup({group:t,id:t.id||null})})}else{var n=this.passedElement.options,o=this.config.sortFn,r=this._presetChoices;n.forEach(function(e){r.push({value:e.value,label:e.innerHTML,selected:e.selected,disabled:e.disabled||e.parentNode.disabled,placeholder:e.hasAttribute("placeholder"),customProperties:e.getAttribute("data-custom-properties")})}),this.config.shouldSort&&r.sort(o);var s=r.some(function(e){return e.selected});r.forEach(function(t,i){return function(t,i){var n=t.value,o=t.label,r=t.customProperties,a=t.placeholder;if(e._isSelectElement)if(t.choices)e._addGroup({group:t,id:t.id||null});else{var c=e._isSelectOneElement&&!s&&0===i,l=!!c||t.selected,u=!c&&t.disabled;e._addChoice({value:n,label:o,isSelected:l,isDisabled:u,customProperties:r,placeholder:a})}else e._addChoice({value:n,label:o,isSelected:t.selected,isDisabled:t.disabled,customProperties:r,placeholder:a})}(t,i)})}this._setLoading(!1)}},{key:"_addPredefinedItems",value:function(){var e=this;this._presetItems.forEach(function(t){return function(t){var i=(0,p.getType)(t);"Object"===i&&t.value?e._addItem({value:t.value,label:t.label,choiceId:t.id,customProperties:t.customProperties,placeholder:t.placeholder}):"String"===i&&e._addItem({value:t})}(t)})}},{key:"_setChoiceOrItem",value:function(e){var t=this;({object:function(){e.value&&(t._isTextElement?t._addItem({value:e.value,label:e.label,choiceId:e.id,customProperties:e.customProperties,placeholder:e.placeholder}):t._addChoice({value:e.value,label:e.label,isSelected:!0,isDisabled:!1,customProperties:e.customProperties,placeholder:e.placeholder}))},string:function(){t._isTextElement?t._addItem({value:e}):t._addChoice({value:e,label:e,isSelected:!0,isDisabled:!1})}})[(0,p.getType)(e).toLowerCase()]()}},{key:"_findAndSelectChoiceByValue",value:function(e){var t=this,i=this._store.choices.find(function(i){return t.config.itemComparer(i.value,e)});i&&!i.selected&&this._addItem({value:i.value,label:i.label,choiceId:i.id,groupId:i.groupId,customProperties:i.customProperties,placeholder:i.placeholder,keyCode:i.keyCode})}},{key:"_generateInstances",value:function(t,i){return t.reduce(function(t,n){return t.push(new e(n,i)),t},[this])}},{key:"_generatePlaceholderValue",value:function(){return!this._isSelectOneElement&&(!!this.config.placeholder&&(this.config.placeholderValue||this.passedElement.element.getAttribute("placeholder")))}}])&&g(t.prototype,i),v&&g(t,v),e}();_.userDefaults={},e.exports=_},function(e,t,i){
/*!
 * Fuse.js v3.4.2 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
var n;n=function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s="./src/index.js")}({"./src/bitap/bitap_matched_indices.js":
/*!********************************************!*\
  !*** ./src/bitap/bitap_matched_indices.js ***!
  \********************************************/
/*! no static exports found */function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=[],n=-1,o=-1,r=0,s=e.length;r<s;r+=1){var a=e[r];a&&-1===n?n=r:a||-1===n||((o=r-1)-n+1>=t&&i.push([n,o]),n=-1)}return e[r-1]&&r-n>=t&&i.push([n,r-1]),i}},"./src/bitap/bitap_pattern_alphabet.js":
/*!*********************************************!*\
  !*** ./src/bitap/bitap_pattern_alphabet.js ***!
  \*********************************************/
/*! no static exports found */function(e,t){e.exports=function(e){for(var t={},i=e.length,n=0;n<i;n+=1)t[e.charAt(n)]=0;for(var o=0;o<i;o+=1)t[e.charAt(o)]|=1<<i-o-1;return t}},"./src/bitap/bitap_regex_search.js":
/*!*****************************************!*\
  !*** ./src/bitap/bitap_regex_search.js ***!
  \*****************************************/
/*! no static exports found */function(e,t){var i=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(i,"\\$&").replace(n,"|")),r=e.match(o),s=!!r,a=[];if(s)for(var c=0,l=r.length;c<l;c+=1){var u=r[c];a.push([e.indexOf(u),u.length-1])}return{score:s?.5:1,isMatch:s,matchedIndices:a}}},"./src/bitap/bitap_score.js":
/*!**********************************!*\
  !*** ./src/bitap/bitap_score.js ***!
  \**********************************/
/*! no static exports found */function(e,t){e.exports=function(e,t){var i=t.errors,n=void 0===i?0:i,o=t.currentLocation,r=void 0===o?0:o,s=t.expectedLocation,a=void 0===s?0:s,c=t.distance,l=void 0===c?100:c,u=n/e.length,h=Math.abs(a-r);return l?u+h/l:h?1:u}},"./src/bitap/bitap_search.js":
/*!***********************************!*\
  !*** ./src/bitap/bitap_search.js ***!
  \***********************************/
/*! no static exports found */function(e,t,i){var n=i(/*! ./bitap_score */"./src/bitap/bitap_score.js"),o=i(/*! ./bitap_matched_indices */"./src/bitap/bitap_matched_indices.js");e.exports=function(e,t,i,r){for(var s=r.location,a=void 0===s?0:s,c=r.distance,l=void 0===c?100:c,u=r.threshold,h=void 0===u?.6:u,d=r.findAllMatches,f=void 0!==d&&d,p=r.minMatchCharLength,v=void 0===p?1:p,m=a,g=e.length,_=h,y=e.indexOf(t,m),b=t.length,E=[],S=0;S<g;S+=1)E[S]=0;if(-1!==y){var I=n(t,{errors:0,currentLocation:y,expectedLocation:m,distance:l});if(_=Math.min(I,_),-1!==(y=e.lastIndexOf(t,m+b))){var O=n(t,{errors:0,currentLocation:y,expectedLocation:m,distance:l});_=Math.min(O,_)}}y=-1;for(var C=[],T=1,w=b+g,k=1<<b-1,A=0;A<b;A+=1){for(var L=0,x=w;L<x;){n(t,{errors:A,currentLocation:m+x,expectedLocation:m,distance:l})<=_?L=x:w=x,x=Math.floor((w-L)/2+L)}w=x;var P=Math.max(1,m-x+1),D=f?g:Math.min(m+x,g)+b,j=Array(D+2);j[D+1]=(1<<A)-1;for(var M=D;M>=P;M-=1){var N=M-1,F=i[e.charAt(N)];if(F&&(E[N]=1),j[M]=(j[M+1]<<1|1)&F,0!==A&&(j[M]|=(C[M+1]|C[M])<<1|1|C[M+1]),j[M]&k&&(T=n(t,{errors:A,currentLocation:N,expectedLocation:m,distance:l}))<=_){if(_=T,(y=N)<=m)break;P=Math.max(1,2*m-y)}}if(n(t,{errors:A+1,currentLocation:m,expectedLocation:m,distance:l})>_)break;C=j}return{isMatch:y>=0,score:0===T?.001:T,matchedIndices:o(E,v)}}},"./src/bitap/index.js":
/*!****************************!*\
  !*** ./src/bitap/index.js ***!
  \****************************/
/*! no static exports found */function(e,t,i){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=i(/*! ./bitap_regex_search */"./src/bitap/bitap_regex_search.js"),r=i(/*! ./bitap_search */"./src/bitap/bitap_search.js"),s=i(/*! ./bitap_pattern_alphabet */"./src/bitap/bitap_pattern_alphabet.js"),a=function(){function e(t,i){var n=i.location,o=void 0===n?0:n,r=i.distance,a=void 0===r?100:r,c=i.threshold,l=void 0===c?.6:c,u=i.maxPatternLength,h=void 0===u?32:u,d=i.isCaseSensitive,f=void 0!==d&&d,p=i.tokenSeparator,v=void 0===p?/ +/g:p,m=i.findAllMatches,g=void 0!==m&&m,_=i.minMatchCharLength,y=void 0===_?1:_;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:a,threshold:l,maxPatternLength:h,isCaseSensitive:f,tokenSeparator:v,findAllMatches:g,minMatchCharLength:y},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=h&&(this.patternAlphabet=s(this.pattern))}var t,i,a;return t=e,(i=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,i=t.maxPatternLength,n=t.tokenSeparator;if(this.pattern.length>i)return o(e,this.pattern,n);var s=this.options,a=s.location,c=s.distance,l=s.threshold,u=s.findAllMatches,h=s.minMatchCharLength;return r(e,this.pattern,this.patternAlphabet,{location:a,distance:c,threshold:l,findAllMatches:u,minMatchCharLength:h})}}])&&n(t.prototype,i),a&&n(t,a),e}();e.exports=a},"./src/helpers/deep_value.js":
/*!***********************************!*\
  !*** ./src/helpers/deep_value.js ***!
  \***********************************/
/*! no static exports found */function(e,t,i){var n=i(/*! ./is_array */"./src/helpers/is_array.js");e.exports=function(e,t){return function e(t,i,o){if(i){var r=i.indexOf("."),s=i,a=null;-1!==r&&(s=i.slice(0,r),a=i.slice(r+1));var c=t[s];if(null!=c)if(a||"string"!=typeof c&&"number"!=typeof c)if(n(c))for(var l=0,u=c.length;l<u;l+=1)e(c[l],a,o);else a&&e(c,a,o);else o.push(c.toString())}else o.push(t);return o}(e,t,[])}},"./src/helpers/is_array.js":
/*!*********************************!*\
  !*** ./src/helpers/is_array.js ***!
  \*********************************/
/*! no static exports found */function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */function(e,t,i){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=i(/*! ./bitap */"./src/bitap/index.js"),s=i(/*! ./helpers/deep_value */"./src/helpers/deep_value.js"),a=i(/*! ./helpers/is_array */"./src/helpers/is_array.js"),c=function(){function e(t,i){var n=i.location,o=void 0===n?0:n,r=i.distance,a=void 0===r?100:r,c=i.threshold,l=void 0===c?.6:c,u=i.maxPatternLength,h=void 0===u?32:u,d=i.caseSensitive,f=void 0!==d&&d,p=i.tokenSeparator,v=void 0===p?/ +/g:p,m=i.findAllMatches,g=void 0!==m&&m,_=i.minMatchCharLength,y=void 0===_?1:_,b=i.id,E=void 0===b?null:b,S=i.keys,I=void 0===S?[]:S,O=i.shouldSort,C=void 0===O||O,T=i.getFn,w=void 0===T?s:T,k=i.sortFn,A=void 0===k?function(e,t){return e.score-t.score}:k,L=i.tokenize,x=void 0!==L&&L,P=i.matchAllTokens,D=void 0!==P&&P,j=i.includeMatches,M=void 0!==j&&j,N=i.includeScore,F=void 0!==N&&N,K=i.verbose,R=void 0!==K&&K;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:a,threshold:l,maxPatternLength:h,isCaseSensitive:f,tokenSeparator:v,findAllMatches:g,minMatchCharLength:y,id:E,keys:I,includeMatches:M,includeScore:F,shouldSort:C,getFn:w,sortFn:A,verbose:R,tokenize:x,matchAllTokens:D},this.setCollection(t)}var t,i,c;return t=e,(i=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var i=this._prepareSearchers(e),n=i.tokenSearchers,o=i.fullSearcher,r=this._search(n,o),s=r.weights,a=r.results;return this._computeScore(s,a),this.options.shouldSort&&this._sort(a),t.limit&&"number"==typeof t.limit&&(a=a.slice(0,t.limit)),this._format(a)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var i=e.split(this.options.tokenSeparator),n=0,o=i.length;n<o;n+=1)t.push(new r(i[n],this.options));return{tokenSearchers:t,fullSearcher:new r(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,i=this.list,n={},o=[];if("string"==typeof i[0]){for(var r=0,s=i.length;r<s;r+=1)this._analyze({key:"",value:i[r],record:r,index:r},{resultMap:n,results:o,tokenSearchers:e,fullSearcher:t});return{weights:null,results:o}}for(var a={},c=0,l=i.length;c<l;c+=1)for(var u=i[c],h=0,d=this.options.keys.length;h<d;h+=1){var f=this.options.keys[h];if("string"!=typeof f){if(a[f.name]={weight:1-f.weight||1},f.weight<=0||f.weight>1)throw new Error("Key weight has to be > 0 and <= 1");f=f.name}else a[f]={weight:1};this._analyze({key:f,value:this.options.getFn(u,f),record:u,index:c},{resultMap:n,results:o,tokenSearchers:e,fullSearcher:t})}return{weights:a,results:o}}},{key:"_analyze",value:function(e,t){var i=e.key,n=e.arrayIndex,o=void 0===n?-1:n,r=e.value,s=e.record,c=e.index,l=t.tokenSearchers,u=void 0===l?[]:l,h=t.fullSearcher,d=void 0===h?[]:h,f=t.resultMap,p=void 0===f?{}:f,v=t.results,m=void 0===v?[]:v;if(null!=r){var g=!1,_=-1,y=0;if("string"==typeof r){this._log("\nKey: ".concat(""===i?"-":i));var b=d.search(r);if(this._log('Full text: "'.concat(r,'", score: ').concat(b.score)),this.options.tokenize){for(var E=r.split(this.options.tokenSeparator),S=[],I=0;I<u.length;I+=1){var O=u[I];this._log('\nPattern: "'.concat(O.pattern,'"'));for(var C=!1,T=0;T<E.length;T+=1){var w=E[T],k=O.search(w),A={};k.isMatch?(A[w]=k.score,g=!0,C=!0,S.push(k.score)):(A[w]=1,this.options.matchAllTokens||S.push(1)),this._log('Token: "'.concat(w,'", score: ').concat(A[w]))}C&&(y+=1)}_=S[0];for(var L=S.length,x=1;x<L;x+=1)_+=S[x];_/=L,this._log("Token score average:",_)}var P=b.score;_>-1&&(P=(P+_)/2),this._log("Score average:",P);var D=!this.options.tokenize||!this.options.matchAllTokens||y>=u.length;if(this._log("\nCheck Matches: ".concat(D)),(g||b.isMatch)&&D){var j=p[c];j?j.output.push({key:i,arrayIndex:o,value:r,score:P,matchedIndices:b.matchedIndices}):(p[c]={item:s,output:[{key:i,arrayIndex:o,value:r,score:P,matchedIndices:b.matchedIndices}]},m.push(p[c]))}}else if(a(r))for(var M=0,N=r.length;M<N;M+=1)this._analyze({key:i,arrayIndex:M,value:r[M],record:s,index:c},{resultMap:p,results:m,tokenSearchers:u,fullSearcher:d})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var i=0,n=t.length;i<n;i+=1){for(var o=t[i].output,r=o.length,s=1,a=1,c=0;c<r;c+=1){var l=e?e[o[c].key].weight:1,u=(1===l?o[c].score:o[c].score||.001)*l;1!==l?a=Math.min(a,u):(o[c].nScore=u,s*=u)}t[i].score=1===a?s:a,this._log(t[i])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var i=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,function(e,t){if("object"===n(t)&&null!==t){if(-1!==i.indexOf(t))return;i.push(t)}return t})),i=null}var o=[];this.options.includeMatches&&o.push(function(e,t){var i=e.output;t.matches=[];for(var n=0,o=i.length;n<o;n+=1){var r=i[n];if(0!==r.matchedIndices.length){var s={indices:r.matchedIndices,value:r.value};r.key&&(s.key=r.key),r.hasOwnProperty("arrayIndex")&&r.arrayIndex>-1&&(s.arrayIndex=r.arrayIndex),t.matches.push(s)}}}),this.options.includeScore&&o.push(function(e,t){t.score=e.score});for(var r=0,s=e.length;r<s;r+=1){var a=e[r];if(this.options.id&&(a.item=this.options.getFn(a.item,this.options.id)[0]),o.length){for(var c={item:a.item},l=0,u=o.length;l<u;l+=1)o[l](a,c);t.push(c)}else t.push(a.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&o(t.prototype,i),c&&o(t,c),e}();e.exports=c}})},e.exports=n()},function(e,t,i){"use strict";i.r(t);var n=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===o}(e)}(e)};var o="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function r(e,t){return!1!==t.clone&&t.isMergeableObject(e)?a((i=e,Array.isArray(i)?[]:{}),e,t):e;var i}function s(e,t,i){return e.concat(t).map(function(e){return r(e,i)})}function a(e,t,i){(i=i||{}).arrayMerge=i.arrayMerge||s,i.isMergeableObject=i.isMergeableObject||n;var o=Array.isArray(t);return o===Array.isArray(e)?o?i.arrayMerge(e,t,i):function(e,t,i){var n={};return i.isMergeableObject(e)&&Object.keys(e).forEach(function(t){n[t]=r(e[t],i)}),Object.keys(t).forEach(function(o){i.isMergeableObject(t[o])&&e[o]?n[o]=a(e[o],t[o],i):n[o]=r(t[o],i)}),n}(e,t,i):r(t,i)}a.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,i){return a(e,i,t)},{})};var c=a;t.default=c},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=i(6),r=(n=i(15))&&n.__esModule?n:{default:n};function s(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._store=(0,o.createStore)(r.default,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())}var t,i,n;return t=e,(i=[{key:"subscribe",value:function(e){this._store.subscribe(e)}},{key:"dispatch",value:function(e){this._store.dispatch(e)}},{key:"isLoading",value:function(){return this.state.general.loading}},{key:"getChoiceById",value:function(e){return!!e&&this.activeChoices.find(function(t){return t.id===parseInt(e,10)})}},{key:"getGroupById",value:function(e){return this.groups.find(function(t){return t.id===parseInt(e,10)})}},{key:"state",get:function(){return this._store.getState()}},{key:"items",get:function(){return this.state.items}},{key:"activeItems",get:function(){return this.items.filter(function(e){return!0===e.active})}},{key:"highlightedActiveItems",get:function(){return this.items.filter(function(e){return e.active&&e.highlighted})}},{key:"choices",get:function(){return this.state.choices}},{key:"activeChoices",get:function(){return this.choices.filter(function(e){return!0===e.active})}},{key:"selectableChoices",get:function(){return this.choices.filter(function(e){return!0!==e.disabled})}},{key:"searchableChoices",get:function(){return this.selectableChoices.filter(function(e){return!0!==e.placeholder})}},{key:"placeholderChoice",get:function(){return[].concat(this.choices).reverse().find(function(e){return!0===e.placeholder})}},{key:"groups",get:function(){return this.state.groups}},{key:"activeGroups",get:function(){var e=this.groups,t=this.choices;return e.filter(function(e){var i=!0===e.active&&!1===e.disabled,n=t.some(function(e){return!0===e.active&&!1===e.disabled});return i&&n},[])}}])&&s(t.prototype,i),n&&s(t,n),e}();t.default=a},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(6),o=l(i(16)),r=l(i(17)),s=l(i(18)),a=l(i(19)),c=i(0);function l(e){return e&&e.__esModule?e:{default:e}}var u=(0,n.combineReducers)({items:o.default,groups:r.default,choices:s.default,general:a.default}),h=function(e,t){var i=e;if("CLEAR_ALL"===t.type)i=void 0;else if("RESET_TO"===t.type)return(0,c.cloneObject)(t.state);return u(i,t)};t.default=h},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":var i=[].concat(e,[{id:t.id,choiceId:t.choiceId,groupId:t.groupId,value:t.value,label:t.label,active:!0,highlighted:!1,customProperties:t.customProperties,placeholder:t.placeholder||!1,keyCode:null}]);return i.map(function(e){var t=e;return t.highlighted=!1,t});case"REMOVE_ITEM":return e.map(function(e){var i=e;return i.id===t.id&&(i.active=!1),i});case"HIGHLIGHT_ITEM":return e.map(function(e){var i=e;return i.id===t.id&&(i.highlighted=t.highlighted),i});default:return e}},t.defaultState=void 0;var n=[];t.defaultState=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_GROUP":return[].concat(e,[{id:t.id,value:t.value,active:t.active,disabled:t.disabled}]);case"CLEAR_CHOICES":return[];default:return e}},t.defaultState=void 0;var n=[];t.defaultState=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CHOICE":return[].concat(e,[{id:t.id,elementId:t.elementId,groupId:t.groupId,value:t.value,label:t.label||t.value,disabled:t.disabled||!1,selected:!1,active:!0,score:9999,customProperties:t.customProperties,placeholder:t.placeholder||!1,keyCode:null}]);case"ADD_ITEM":return t.activateOptions?e.map(function(e){var i=e;return i.active=t.active,i}):t.choiceId>-1?e.map(function(e){var i=e;return i.id===parseInt(t.choiceId,10)&&(i.selected=!0),i}):e;case"REMOVE_ITEM":return t.choiceId>-1?e.map(function(e){var i=e;return i.id===parseInt(t.choiceId,10)&&(i.selected=!1),i}):e;case"FILTER_CHOICES":return e.map(function(e){var i=e;return i.active=t.results.some(function(e){var t=e.item,n=e.score;return t.id===i.id&&(i.score=n,!0)}),i});case"ACTIVATE_CHOICES":return e.map(function(e){var i=e;return i.active=t.active,i});case"CLEAR_CHOICES":return n;default:return e}},t.defaultState=void 0;var n=[];t.defaultState=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.defaultState=void 0;var n={loading:!1};t.defaultState=n;var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IS_LOADING":return{loading:t.isLoading};default:return e}};t.default=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Dropdown",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Container",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Input",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"List",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"WrappedInput",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"WrappedSelect",{enumerable:!0,get:function(){return c.default}});var n=l(i(21)),o=l(i(22)),r=l(i(23)),s=l(i(24)),a=l(i(25)),c=l(i(26));function l(e){return e&&e.__esModule?e:{default:e}}},function(e,t,i){"use strict";function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){function e(t){var i=t.element,n=t.type,o=t.classNames;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.assign(this,{element:i,type:n,classNames:o}),this.isActive=!1}var t,i,o;return t=e,(i=[{key:"distanceFromTopWindow",value:function(){return this.dimensions=this.element.getBoundingClientRect(),this.position=Math.ceil(this.dimensions.top+window.pageYOffset+this.element.offsetHeight),this.position}},{key:"getChild",value:function(e){return this.element.querySelector(e)}},{key:"show",value:function(){return this.element.classList.add(this.classNames.activeState),this.element.setAttribute("aria-expanded","true"),this.isActive=!0,this}},{key:"hide",value:function(){return this.element.classList.remove(this.classNames.activeState),this.element.setAttribute("aria-expanded","false"),this.isActive=!1,this}}])&&n(t.prototype,i),o&&n(t,o),e}();t.default=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(0);function o(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=function(){function e(t){var i=t.element,n=t.type,o=t.classNames,r=t.position;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.assign(this,{element:i,classNames:o,type:n,position:r}),this.isOpen=!1,this.isFlipped=!1,this.isFocussed=!1,this.isDisabled=!1,this.isLoading=!1,this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this)}var t,i,r;return t=e,(i=[{key:"addEventListeners",value:function(){this.element.addEventListener("focus",this._onFocus),this.element.addEventListener("blur",this._onBlur)}},{key:"removeEventListeners",value:function(){this.element.removeEventListener("focus",this._onFocus),this.element.removeEventListener("blur",this._onBlur)}},{key:"shouldFlip",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,n.getWindowHeight)();if(void 0===e)return!1;var i=!1;return"auto"===this.position?i=e>=t:"top"===this.position&&(i=!0),i}},{key:"setActiveDescendant",value:function(e){this.element.setAttribute("aria-activedescendant",e)}},{key:"removeActiveDescendant",value:function(){this.element.removeAttribute("aria-activedescendant")}},{key:"open",value:function(e){this.element.classList.add(this.classNames.openState),this.element.setAttribute("aria-expanded","true"),this.isOpen=!0,this.shouldFlip(e)&&(this.element.classList.add(this.classNames.flippedState),this.isFlipped=!0)}},{key:"close",value:function(){this.element.classList.remove(this.classNames.openState),this.element.setAttribute("aria-expanded","false"),this.removeActiveDescendant(),this.isOpen=!1,this.isFlipped&&(this.element.classList.remove(this.classNames.flippedState),this.isFlipped=!1)}},{key:"focus",value:function(){this.isFocussed||this.element.focus()}},{key:"addFocusState",value:function(){this.element.classList.add(this.classNames.focusState)}},{key:"removeFocusState",value:function(){this.element.classList.remove(this.classNames.focusState)}},{key:"enable",value:function(){this.element.classList.remove(this.classNames.disabledState),this.element.removeAttribute("aria-disabled"),"select-one"===this.type&&this.element.setAttribute("tabindex","0"),this.isDisabled=!1}},{key:"disable",value:function(){this.element.classList.add(this.classNames.disabledState),this.element.setAttribute("aria-disabled","true"),"select-one"===this.type&&this.element.setAttribute("tabindex","-1"),this.isDisabled=!0}},{key:"wrap",value:function(e){(0,n.wrap)(e,this.element)}},{key:"unwrap",value:function(e){this.element.parentNode.insertBefore(e,this.element),this.element.parentNode.removeChild(this.element)}},{key:"addLoadingState",value:function(){this.element.classList.add(this.classNames.loadingState),this.element.setAttribute("aria-busy","true"),this.isLoading=!0}},{key:"removeLoadingState",value:function(){this.element.classList.remove(this.classNames.loadingState),this.element.removeAttribute("aria-busy"),this.isLoading=!1}},{key:"_onFocus",value:function(){this.isFocussed=!0}},{key:"_onBlur",value:function(){this.isFocussed=!1}}])&&o(t.prototype,i),r&&o(t,r),e}();t.default=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(0);function o(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=function(){function e(t){var i=t.element,n=t.type,o=t.classNames,r=t.placeholderValue;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.assign(this,{element:i,type:n,classNames:o,placeholderValue:r}),this.element=i,this.classNames=o,this.isFocussed=this.element===document.activeElement,this.isDisabled=!1,this._onPaste=this._onPaste.bind(this),this._onInput=this._onInput.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this)}var t,i,r;return t=e,(i=[{key:"addEventListeners",value:function(){this.element.addEventListener("input",this._onInput),this.element.addEventListener("paste",this._onPaste),this.element.addEventListener("focus",this._onFocus),this.element.addEventListener("blur",this._onBlur),this.element.form&&this.element.form.addEventListener("reset",this._onFormReset)}},{key:"removeEventListeners",value:function(){this.element.removeEventListener("input",this._onInput),this.element.removeEventListener("paste",this._onPaste),this.element.removeEventListener("focus",this._onFocus),this.element.removeEventListener("blur",this._onBlur),this.element.form&&this.element.form.removeEventListener("reset",this._onFormReset)}},{key:"enable",value:function(){this.element.removeAttribute("disabled"),this.isDisabled=!1}},{key:"disable",value:function(){this.element.setAttribute("disabled",""),this.isDisabled=!0}},{key:"focus",value:function(){this.isFocussed||this.element.focus()}},{key:"blur",value:function(){this.isFocussed&&this.element.blur()}},{key:"clear",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.element.value&&(this.element.value=""),e&&this.setWidth(),this}},{key:"setWidth",value:function(e){var t=this,i=function(e){t.element.style.width=e};if(this._placeholderValue){var n=this.element.value.length>=this._placeholderValue.length/1.25;(this.element.value&&n||e)&&this.calcWidth(i)}else this.calcWidth(i)}},{key:"calcWidth",value:function(e){return(0,n.calcWidthOfInput)(this.element,e)}},{key:"setActiveDescendant",value:function(e){this.element.setAttribute("aria-activedescendant",e)}},{key:"removeActiveDescendant",value:function(){this.element.removeAttribute("aria-activedescendant")}},{key:"_onInput",value:function(){"select-one"!==this.type&&this.setWidth()}},{key:"_onPaste",value:function(e){e.target===this.element&&this.preventPaste&&e.preventDefault()}},{key:"_onFocus",value:function(){this.isFocussed=!0}},{key:"_onBlur",value:function(){this.isFocussed=!1}},{key:"placeholder",set:function(e){this.element.placeholder=e}},{key:"value",set:function(e){this.element.value=e},get:function(){return(0,n.sanitise)(this.element.value)}}])&&o(t.prototype,i),r&&o(t,r),e}();t.default=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(1);function o(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=function(){function e(t){var i=t.element;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.assign(this,{element:i}),this.scrollPos=this.element.scrollTop,this.height=this.element.offsetHeight,this.hasChildren=!!this.element.children}var t,i,r;return t=e,(i=[{key:"clear",value:function(){this.element.innerHTML=""}},{key:"append",value:function(e){this.element.appendChild(e)}},{key:"getChild",value:function(e){return this.element.querySelector(e)}},{key:"scrollToTop",value:function(){this.element.scrollTop=0}},{key:"scrollToChoice",value:function(e,t){var i=this;if(e){var n=this.element.offsetHeight,o=e.offsetHeight,r=e.offsetTop+o,s=this.element.scrollTop+n,a=t>0?this.element.scrollTop+r-s:e.offsetTop;requestAnimationFrame(function(e){i._animateScroll(e,a,t)})}}},{key:"_scrollDown",value:function(e,t,i){var n=(i-e)/t,o=n>1?n:1;this.element.scrollTop=e+o}},{key:"_scrollUp",value:function(e,t,i){var n=(e-i)/t,o=n>1?n:1;this.element.scrollTop=e-o}},{key:"_animateScroll",value:function(e,t,i){var o=this,r=n.SCROLLING_SPEED,s=this.element.scrollTop,a=!1;i>0?(this._scrollDown(s,r,t),s<t&&(a=!0)):(this._scrollUp(s,r,t),s>t&&(a=!0)),a&&requestAnimationFrame(function(){o._animateScroll(e,t,i)})}}])&&o(t.prototype,i),r&&o(t,r),e}();t.default=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=i(4))&&n.__esModule?n:{default:n};function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e,t,i){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(i):o.value}})(e,t,i||e)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(e){var i,n=e.element,o=e.classNames,r=e.delimiter;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(i=a(this,l(t).call(this,{element:n,classNames:o}))).delimiter=r,i}var i,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,o.default),i=t,(n=[{key:"value",set:function(e){var t=e.map(function(e){return e.value}).join(this.delimiter);this.element.setAttribute("value",t),this.element.value=t},get:function(){return c(l(t.prototype),"value",this)}}])&&s(i.prototype,n),r&&s(i,r),t}();t.default=h},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i(4)),o=r(i(5));function r(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(e){var i=e.element,n=e.classNames;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,l(t).call(this,{element:i,classNames:n}))}var i,r,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,n.default),i=t,(r=[{key:"appendDocFragment",value:function(e){this.element.innerHTML="",this.element.appendChild(e)}},{key:"placeholderOption",get:function(){return this.element.querySelector("option[placeholder]")}},{key:"optionGroups",get:function(){return Array.from(this.element.getElementsByTagName("OPTGROUP"))}},{key:"options",get:function(){return Array.from(this.element.options)},set:function(e){var t=document.createDocumentFragment();e.forEach(function(e){return i=e,n=o.default.option(i),void t.appendChild(n);var i,n}),this.appendDocFragment(t)}}])&&a(i.prototype,r),s&&a(i,s),t}();t.default=h},function(e,t,i){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var i={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var s=o.apply(null,n);s&&e.push(s)}else if("object"===r)for(var a in n)i.call(n,a)&&n[a]&&e.push(a)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearChoices=t.activateChoices=t.filterChoices=t.addChoice=void 0;var n=i(1);t.addChoice=function(e){var t=e.value,i=e.label,o=e.id,r=e.groupId,s=e.disabled,a=e.elementId,c=e.customProperties,l=e.placeholder,u=e.keyCode;return{type:n.ACTION_TYPES.ADD_CHOICE,value:t,label:i,id:o,groupId:r,disabled:s,elementId:a,customProperties:c,placeholder:l,keyCode:u}};t.filterChoices=function(e){return{type:n.ACTION_TYPES.FILTER_CHOICES,results:e}};t.activateChoices=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{type:n.ACTION_TYPES.ACTIVATE_CHOICES,active:e}};t.clearChoices=function(){return{type:n.ACTION_TYPES.CLEAR_CHOICES}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.highlightItem=t.removeItem=t.addItem=void 0;var n=i(1);t.addItem=function(e){var t=e.value,i=e.label,o=e.id,r=e.choiceId,s=e.groupId,a=e.customProperties,c=e.placeholder,l=e.keyCode;return{type:n.ACTION_TYPES.ADD_ITEM,value:t,label:i,id:o,choiceId:r,groupId:s,customProperties:a,placeholder:c,keyCode:l}};t.removeItem=function(e,t){return{type:n.ACTION_TYPES.REMOVE_ITEM,id:e,choiceId:t}};t.highlightItem=function(e,t){return{type:n.ACTION_TYPES.HIGHLIGHT_ITEM,id:e,highlighted:t}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addGroup=void 0;var n=i(1);t.addGroup=function(e,t,i,o){return{type:n.ACTION_TYPES.ADD_GROUP,value:e,id:t,active:i,disabled:o}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetTo=t.clearAll=void 0;t.clearAll=function(){return{type:"CLEAR_ALL"}};t.resetTo=function(e){return{type:"RESET_TO",state:e}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setIsLoading=void 0;t.setIsLoading=function(e){return{type:"SET_IS_LOADING",isLoading:e}}}])});
},{}],"B9WR":[function(require,module,exports) {
var define;
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && (typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define("rangeSlider", [], factory);else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') exports["rangeSlider"] = factory();else root["rangeSlider"] = factory();
})(window, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = "./src/range-slider.js");
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "./src/range-slider.css":
      /*!******************************!*\
        !*** ./src/range-slider.css ***!
        \******************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "./src/range-slider.js":
      /*!*****************************!*\
        !*** ./src/range-slider.js ***!
        \*****************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();

        var _dom = __webpack_require__(
        /*! ./utils/dom */
        "./src/utils/dom.js");

        var dom = _interopRequireWildcard(_dom);

        var _functions = __webpack_require__(
        /*! ./utils/functions */
        "./src/utils/functions.js");

        var func = _interopRequireWildcard(_functions);

        __webpack_require__(
        /*! ./range-slider.css */
        "./src/range-slider.css");

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          } else {
            var newObj = {};

            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
              }
            }

            newObj.default = obj;
            return newObj;
          }
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        var newLineAndTabRegexp = new RegExp('/[\\n\\t]/', 'g');
        var MAX_SET_BY_DEFAULT = 100;
        var HANDLE_RESIZE_DELAY = 300;
        var HANDLE_RESIZE_DEBOUNCE = 50;
        var pluginName = 'rangeSlider';
        var inputrange = dom.supportsRange();
        var defaults = {
          polyfill: true,
          root: document,
          rangeClass: 'rangeSlider',
          disabledClass: 'rangeSlider--disabled',
          fillClass: 'rangeSlider__fill',
          bufferClass: 'rangeSlider__buffer',
          handleClass: 'rangeSlider__handle',
          startEvent: ['mousedown', 'touchstart', 'pointerdown'],
          moveEvent: ['mousemove', 'touchmove', 'pointermove'],
          endEvent: ['mouseup', 'touchend', 'pointerup'],
          min: null,
          max: null,
          step: null,
          value: null,
          buffer: null,
          stick: null,
          borderRadius: 10,
          vertical: false
        };
        /**
         * Plugin
         * @param {HTMLElement} element
         * @param {this} options
         */

        var RangeSlider = function () {
          function RangeSlider(element, options) {
            _classCallCheck(this, RangeSlider);

            var minSetByDefault = void 0;
            var maxSetByDefault = void 0;
            var stepSetByDefault = void 0;
            var stickAttribute = void 0;
            var stickValues = void 0;
            this.element = element;
            this.options = func.simpleExtend(defaults, options);
            this.polyfill = this.options.polyfill;
            this.vertical = this.options.vertical;
            this.onInit = this.options.onInit;
            this.onSlide = this.options.onSlide;
            this.onSlideStart = this.options.onSlideStart;
            this.onSlideEnd = this.options.onSlideEnd;
            this.onSlideEventsCount = -1;
            this.isInteractsNow = false;
            this.needTriggerEvents = false; // Plugin should only be used as a polyfill

            if (!this.polyfill) {
              // Input range support?
              if (inputrange) {
                return;
              }
            }

            this.options.buffer = this.options.buffer || parseFloat(this.element.getAttribute('data-buffer'));
            this.identifier = 'js-' + pluginName + '-' + func.uuid();
            this.min = func.getFirsNumberLike(this.options.min, parseFloat(this.element.getAttribute('min')), minSetByDefault = 0);
            this.max = func.getFirsNumberLike(this.options.max, parseFloat(this.element.getAttribute('max')), maxSetByDefault = MAX_SET_BY_DEFAULT);
            this.value = func.getFirsNumberLike(this.options.value, this.element.value, parseFloat(this.element.value || this.min + (this.max - this.min) / 2));
            this.step = func.getFirsNumberLike(this.options.step, parseFloat(this.element.getAttribute('step')) || (stepSetByDefault = 1));
            this.percent = null;

            if (func.isArray(this.options.stick) && this.options.stick.length >= 1) {
              this.stick = this.options.stick;
            } else if (stickAttribute = this.element.getAttribute('stick')) {
              stickValues = stickAttribute.split(' ');

              if (stickValues.length >= 1) {
                this.stick = stickValues.map(parseFloat);
              }
            }

            if (this.stick && this.stick.length === 1) {
              this.stick.push(this.step * 1.5);
            }

            this._updatePercentFromValue();

            this.toFixed = this._toFixed(this.step);
            var directionClass = void 0;
            this.container = document.createElement('div');
            dom.addClass(this.container, this.options.fillClass);
            directionClass = this.vertical ? this.options.fillClass + '__vertical' : this.options.fillClass + '__horizontal';
            dom.addClass(this.container, directionClass);
            this.handle = document.createElement('div');
            dom.addClass(this.handle, this.options.handleClass);
            directionClass = this.vertical ? this.options.handleClass + '__vertical' : this.options.handleClass + '__horizontal';
            dom.addClass(this.handle, directionClass);
            this.range = document.createElement('div');
            dom.addClass(this.range, this.options.rangeClass);
            this.range.id = this.identifier;

            if (this.options.bufferClass) {
              this.buffer = document.createElement('div');
              dom.addClass(this.buffer, this.options.bufferClass);
              this.range.appendChild(this.buffer);
              directionClass = this.vertical ? this.options.bufferClass + '__vertical' : this.options.bufferClass + '__horizontal';
              dom.addClass(this.buffer, directionClass);
            }

            this.range.appendChild(this.container);
            this.range.appendChild(this.handle);
            directionClass = this.vertical ? this.options.rangeClass + '__vertical' : this.options.rangeClass + '__horizontal';
            dom.addClass(this.range, directionClass);

            if (func.isNumberLike(this.options.value)) {
              this._setValue(this.options.value, true);

              this.element.value = this.options.value;
            }

            if (func.isNumberLike(this.options.buffer)) {
              this.element.setAttribute('data-buffer', this.options.buffer);
            }

            if (func.isNumberLike(this.options.min) || minSetByDefault) {
              this.element.setAttribute('min', '' + this.min);
            }

            if (func.isNumberLike(this.options.max) || maxSetByDefault) {
              this.element.setAttribute('max', '' + this.max);
            }

            if (func.isNumberLike(this.options.step) || stepSetByDefault) {
              this.element.setAttribute('step', '' + this.step);
            }

            dom.insertAfter(this.element, this.range); // hide the input visually

            dom.setCss(this.element, {
              'position': 'absolute',
              'width': '1px',
              'height': '1px',
              'overflow': 'hidden',
              'opacity': '0'
            }); // Store context

            this._handleDown = this._handleDown.bind(this);
            this._handleMove = this._handleMove.bind(this);
            this._handleEnd = this._handleEnd.bind(this);
            this._startEventListener = this._startEventListener.bind(this);
            this._changeEventListener = this._changeEventListener.bind(this);
            this._handleResize = this._handleResize.bind(this);

            this._init(); // Attach Events


            window.addEventListener('resize', this._handleResize, false);
            dom.addEventListeners(this.options.root, this.options.startEvent, this._startEventListener); // Listen to programmatic value changes

            this.element.addEventListener('change', this._changeEventListener, false);
          }
          /* public methods */

          /**
           * @param {Object} obj like {min : Number, max : Number, value : Number, step : Number, buffer : [String|Number]}
           * @param {Boolean} triggerEvents
           * @returns {RangeSlider}
           */


          _createClass(RangeSlider, [{
            key: 'update',
            value: function update(obj, triggerEvents) {
              if (triggerEvents) {
                this.needTriggerEvents = true;
              }

              if (func.isObject(obj)) {
                if (func.isNumberLike(obj.min)) {
                  this.element.setAttribute('min', '' + obj.min);
                  this.min = obj.min;
                }

                if (func.isNumberLike(obj.max)) {
                  this.element.setAttribute('max', '' + obj.max);
                  this.max = obj.max;
                }

                if (func.isNumberLike(obj.step)) {
                  this.element.setAttribute('step', '' + obj.step);
                  this.step = obj.step;
                  this.toFixed = this._toFixed(obj.step);
                }

                if (func.isNumberLike(obj.buffer)) {
                  this._setBufferPosition(obj.buffer);
                }

                if (func.isNumberLike(obj.value)) {
                  this._setValue(obj.value);
                }
              }

              this._update();

              this.onSlideEventsCount = 0;
              this.needTriggerEvents = false;
              return this;
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              dom.removeAllListenersFromEl(this, this.options.root);
              window.removeEventListener('resize', this._handleResize, false);
              this.element.removeEventListener('change', this._changeEventListener, false);
              this.element.style.cssText = '';
              delete this.element[pluginName]; // Remove the generated markup

              if (this.range) {
                this.range.parentNode.removeChild(this.range);
              }
            }
            /**
             * A lightweight plugin wrapper around the constructor,preventing against multiple instantiations
             * @param {Element} el
             * @param {Object} options
             */

          }, {
            key: '_toFixed',

            /* private methods */
            value: function _toFixed(step) {
              return (step + '').replace('.', '').length - 1;
            }
          }, {
            key: '_init',
            value: function _init() {
              if (this.onInit && typeof this.onInit === 'function') {
                this.onInit();
              }

              this._update(false);
            }
          }, {
            key: '_updatePercentFromValue',
            value: function _updatePercentFromValue() {
              this.percent = (this.value - this.min) / (this.max - this.min);
            }
            /**
             * This method check if this.identifier exists in ev.target's ancestors
             * @param ev
             * @param data
             */

          }, {
            key: '_startEventListener',
            value: function _startEventListener(ev, data) {
              var _this = this;

              var el = ev.target;
              var isEventOnSlider = false;

              if (ev.which !== 1 && !('touches' in ev)) {
                return;
              }

              dom.forEachAncestors(el, function (el) {
                return isEventOnSlider = el.id === _this.identifier && !dom.hasClass(el, _this.options.disabledClass);
              }, true);

              if (isEventOnSlider) {
                this._handleDown(ev, data);
              }
            }
          }, {
            key: '_changeEventListener',
            value: function _changeEventListener(ev, data) {
              if (data && data.origin === this.identifier) {
                return;
              }

              var value = ev.target.value;

              var pos = this._getPositionFromValue(value);

              this._setPosition(pos);
            }
          }, {
            key: '_update',
            value: function _update(triggerEvent) {
              var sizeProperty = this.vertical ? 'offsetHeight' : 'offsetWidth';
              this.handleSize = dom.getDimension(this.handle, sizeProperty);
              this.rangeSize = dom.getDimension(this.range, sizeProperty);
              this.maxHandleX = this.rangeSize - this.handleSize;
              this.grabX = this.handleSize / 2;
              this.position = this._getPositionFromValue(this.value); // Consider disabled state

              if (this.element.disabled) {
                dom.addClass(this.range, this.options.disabledClass);
              } else {
                dom.removeClass(this.range, this.options.disabledClass);
              }

              this._setPosition(this.position);

              if (this.options.bufferClass && this.options.buffer) {
                this._setBufferPosition(this.options.buffer);
              }

              this._updatePercentFromValue();

              if (triggerEvent !== false) {
                dom.triggerEvent(this.element, 'change', {
                  origin: this.identifier
                });
              }
            }
          }, {
            key: '_handleResize',
            value: function _handleResize() {
              var _this2 = this;

              return func.debounce(function () {
                // Simulate resizeEnd event.
                func.delay(function () {
                  _this2._update();
                }, HANDLE_RESIZE_DELAY);
              }, HANDLE_RESIZE_DEBOUNCE)();
            }
          }, {
            key: '_handleDown',
            value: function _handleDown(e) {
              this.isInteractsNow = true;
              e.preventDefault();
              dom.addEventListeners(this.options.root, this.options.moveEvent, this._handleMove);
              dom.addEventListeners(this.options.root, this.options.endEvent, this._handleEnd); // If we click on the handle don't set the new position

              if ((' ' + e.target.className + ' ').replace(newLineAndTabRegexp, ' ').indexOf(this.options.handleClass) > -1) {
                return;
              }

              var boundingClientRect = this.range.getBoundingClientRect();

              var posX = this._getRelativePosition(e);

              var rangeX = this.vertical ? boundingClientRect.bottom : boundingClientRect.left;
              var handleX = this._getPositionFromNode(this.handle) - rangeX;
              var position = posX - this.grabX;

              this._setPosition(position);

              if (posX >= handleX && posX < handleX + this.options.borderRadius * 2) {
                this.grabX = posX - handleX;
              }

              this._updatePercentFromValue();
            }
          }, {
            key: '_handleMove',
            value: function _handleMove(e) {
              var posX = this._getRelativePosition(e);

              this.isInteractsNow = true;
              e.preventDefault();

              this._setPosition(posX - this.grabX);
            }
          }, {
            key: '_handleEnd',
            value: function _handleEnd(e) {
              e.preventDefault();
              dom.removeEventListeners(this.options.root, this.options.moveEvent, this._handleMove);
              dom.removeEventListeners(this.options.root, this.options.endEvent, this._handleEnd); // Ok we're done fire the change event

              dom.triggerEvent(this.element, 'change', {
                origin: this.identifier
              });

              if (this.isInteractsNow || this.needTriggerEvents) {
                if (this.onSlideEnd && typeof this.onSlideEnd === 'function') {
                  this.onSlideEnd(this.value, this.percent, this.position);
                }
              }

              this.onSlideEventsCount = 0;
              this.isInteractsNow = false;
            }
          }, {
            key: '_setPosition',
            value: function _setPosition(pos) {
              var position = void 0;
              var stickRadius = void 0;
              var restFromValue = void 0;
              var stickTo = void 0; // Snapping steps

              var value = this._getValueFromPosition(func.between(pos, 0, this.maxHandleX)); // Stick to stick[0] in radius stick[1]


              if (this.stick) {
                stickTo = this.stick[0];
                stickRadius = this.stick[1] || 0.1;
                restFromValue = value % stickTo;

                if (restFromValue < stickRadius) {
                  value = value - restFromValue;
                } else if (Math.abs(stickTo - restFromValue) < stickRadius) {
                  value = value - restFromValue + stickTo;
                }
              }

              position = this._getPositionFromValue(value); // Update ui

              if (this.vertical) {
                this.container.style.height = position + this.grabX + 'px';
                this.handle.style['webkitTransform'] = 'translateY(-' + position + 'px)';
                this.handle.style['msTransform'] = 'translateY(-' + position + 'px)';
                this.handle.style.transform = 'translateY(-' + position + 'px)';
              } else {
                this.container.style.width = position + this.grabX + 'px';
                this.handle.style['webkitTransform'] = 'translateX(' + position + 'px)';
                this.handle.style['msTransform'] = 'translateX(' + position + 'px)';
                this.handle.style.transform = 'translateX(' + position + 'px)';
              }

              this._setValue(value); // Update globals


              this.position = position;
              this.value = value;

              this._updatePercentFromValue();

              if (this.isInteractsNow || this.needTriggerEvents) {
                if (this.onSlideStart && typeof this.onSlideStart === 'function' && this.onSlideEventsCount === 0) {
                  this.onSlideStart(this.value, this.percent, this.position);
                }

                if (this.onSlide && typeof this.onSlide === 'function') {
                  this.onSlide(this.value, this.percent, this.position);
                }
              }

              this.onSlideEventsCount++;
            }
          }, {
            key: '_setBufferPosition',
            value: function _setBufferPosition(pos) {
              var isPercent = true;

              if (isFinite(pos)) {
                pos = parseFloat(pos);
              } else if (func.isString(pos)) {
                if (pos.indexOf('px') > 0) {
                  isPercent = false;
                }

                pos = parseFloat(pos);
              } else {
                console.warn('New position must be XXpx or XX%');
                return;
              }

              if (isNaN(pos)) {
                console.warn('New position is NaN');
                return;
              }

              if (!this.options.bufferClass) {
                console.warn('You disabled buffer, it\'s className is empty');
                return;
              }

              var bufferSize = isPercent ? pos : pos / this.rangeSize * 100;

              if (bufferSize < 0) {
                bufferSize = 0;
              }

              if (bufferSize > 100) {
                bufferSize = 100;
              }

              this.options.buffer = bufferSize;
              var paddingSize = this.options.borderRadius / this.rangeSize * 100;
              var bufferSizeWithPadding = bufferSize - paddingSize;

              if (bufferSizeWithPadding < 0) {
                bufferSizeWithPadding = 0;
              }

              if (this.vertical) {
                this.buffer.style.height = bufferSizeWithPadding + '%';
                this.buffer.style.bottom = paddingSize * 0.5 + '%';
              } else {
                this.buffer.style.width = bufferSizeWithPadding + '%';
                this.buffer.style.left = paddingSize * 0.5 + '%';
              }

              this.element.setAttribute('data-buffer', bufferSize);
            }
            /**
             *
             * @param {Element} node
             * @returns {*} Returns element position relative to the parent
             * @private
             */

          }, {
            key: '_getPositionFromNode',
            value: function _getPositionFromNode(node) {
              var i = this.vertical ? this.maxHandleX : 0;

              while (node !== null) {
                i += this.vertical ? node.offsetTop : node.offsetLeft;
                node = node.offsetParent;
              }

              return i;
            }
            /**
             *
             * @param {(MouseEvent|TouchEvent)}e
             * @returns {number}
             */

          }, {
            key: '_getRelativePosition',
            value: function _getRelativePosition(e) {
              var boundingClientRect = this.range.getBoundingClientRect(); // Get the offset relative to the viewport

              var rangeSize = this.vertical ? boundingClientRect.bottom : boundingClientRect.left;
              var pageOffset = 0;
              var pagePositionProperty = this.vertical ? 'pageY' : 'pageX';

              if (typeof e[pagePositionProperty] !== 'undefined') {
                pageOffset = e.touches && e.touches.length ? e.touches[0][pagePositionProperty] : e[pagePositionProperty];
              } else if (typeof e.originalEvent !== 'undefined') {
                if (typeof e.originalEvent[pagePositionProperty] !== 'undefined') {
                  pageOffset = e.originalEvent[pagePositionProperty];
                } else if (e.originalEvent.touches && e.originalEvent.touches[0] && typeof e.originalEvent.touches[0][pagePositionProperty] !== 'undefined') {
                  pageOffset = e.originalEvent.touches[0][pagePositionProperty];
                }
              } else if (e.touches && e.touches[0] && typeof e.touches[0][pagePositionProperty] !== 'undefined') {
                pageOffset = e.touches[0][pagePositionProperty];
              } else if (e.currentPoint && (typeof e.currentPoint.x !== 'undefined' || typeof e.currentPoint.y !== 'undefined')) {
                pageOffset = this.vertical ? e.currentPoint.y : e.currentPoint.x;
              }

              if (this.vertical) {
                pageOffset -= window.pageYOffset;
              }

              return this.vertical ? rangeSize - pageOffset : pageOffset - rangeSize;
            }
          }, {
            key: '_getPositionFromValue',
            value: function _getPositionFromValue(value) {
              var percentage = (value - this.min) / (this.max - this.min);
              var pos = percentage * this.maxHandleX;
              return isNaN(pos) ? 0 : pos;
            }
          }, {
            key: '_getValueFromPosition',
            value: function _getValueFromPosition(pos) {
              var percentage = pos / (this.maxHandleX || 1);
              var value = this.step * Math.round(percentage * (this.max - this.min) / this.step) + this.min;
              return Number(value.toFixed(this.toFixed));
            }
          }, {
            key: '_setValue',
            value: function _setValue(value, force) {
              if (value === this.value && !force) {
                return;
              } // Set the new value and fire the `input` event


              this.element.value = value;
              this.value = value;
              dom.triggerEvent(this.element, 'input', {
                origin: this.identifier
              });
            }
          }], [{
            key: 'create',
            value: function create(el, options) {
              var createInstance = function createInstance(el) {
                var data = el[pluginName]; // Create a new instance.

                if (!data) {
                  data = new RangeSlider(el, options);
                  el[pluginName] = data;
                }
              };

              if (el.length) {
                Array.prototype.slice.call(el).forEach(function (el) {
                  createInstance(el);
                });
              } else {
                createInstance(el);
              }
            }
          }]);

          return RangeSlider;
        }();

        exports.default = RangeSlider;
        RangeSlider.version = "0.4.9";
        RangeSlider.dom = dom;
        RangeSlider.functions = func;
        module.exports = exports['default'];
        /***/
      },

      /***/
      "./src/utils/dom.js":
      /*!**************************!*\
        !*** ./src/utils/dom.js ***!
        \**************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.supportsRange = exports.removeAllListenersFromEl = exports.removeEventListeners = exports.addEventListeners = exports.insertAfter = exports.triggerEvent = exports.forEachAncestors = exports.removeClass = exports.addClass = exports.hasClass = exports.setCss = exports.getDimension = exports.getHiddenParentNodes = exports.isHidden = exports.detectIE = undefined;

        var _functions = __webpack_require__(
        /*! ./functions */
        "./src/utils/functions.js");

        var func = _interopRequireWildcard(_functions);

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          } else {
            var newObj = {};

            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
              }
            }

            newObj.default = obj;
            return newObj;
          }
        }

        var EVENT_LISTENER_LIST = 'eventListenerList';

        var detectIE = exports.detectIE = function detectIE() {
          var ua = window.navigator.userAgent;
          var msie = ua.indexOf('MSIE ');

          if (msie > 0) {
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
          }

          var trident = ua.indexOf('Trident/');

          if (trident > 0) {
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
          }

          var edge = ua.indexOf('Edge/');

          if (edge > 0) {
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
          }

          return false;
        };

        var ieVersion = detectIE();
        var eventCaptureParams = window.PointerEvent && !ieVersion ? {
          passive: false
        } : false;
        /**
         * Check if a `element` is visible in the DOM
         *
         * @param  {Element}  element
         * @return {Boolean}
         */

        var isHidden = exports.isHidden = function isHidden(element) {
          return element.offsetWidth === 0 || element.offsetHeight === 0 || element.open === false;
        };
        /**
         * Get hidden parentNodes of an `element`
         *
         * @param {Element} element
         * @return {Element[]}
         */


        var getHiddenParentNodes = exports.getHiddenParentNodes = function getHiddenParentNodes(element) {
          var parents = [];
          var node = element.parentNode;

          while (node && isHidden(node)) {
            parents.push(node);
            node = node.parentNode;
          }

          return parents;
        };
        /**
         * Returns dimensions for an element even if it is not visible in the DOM.
         *
         * @param  {Element} element
         * @param  {string}  key     (e.g. offsetWidth …)
         * @return {Number}
         */


        var getDimension = exports.getDimension = function getDimension(element, key) {
          var hiddenParentNodes = getHiddenParentNodes(element);
          var hiddenParentNodesLength = hiddenParentNodes.length;
          var hiddenParentNodesStyle = [];
          var dimension = element[key]; // Used for native `<details>` elements

          var toggleOpenProperty = function toggleOpenProperty(element) {
            if (typeof element.open !== 'undefined') {
              element.open = !element.open;
            }
          };

          if (hiddenParentNodesLength) {
            for (var i = 0; i < hiddenParentNodesLength; i++) {
              // Cache the styles to restore then later.
              hiddenParentNodesStyle.push({
                display: hiddenParentNodes[i].style.display,
                height: hiddenParentNodes[i].style.height,
                overflow: hiddenParentNodes[i].style.overflow,
                visibility: hiddenParentNodes[i].style.visibility
              });
              hiddenParentNodes[i].style.display = 'block';
              hiddenParentNodes[i].style.height = '0';
              hiddenParentNodes[i].style.overflow = 'hidden';
              hiddenParentNodes[i].style.visibility = 'hidden';
              toggleOpenProperty(hiddenParentNodes[i]);
            }

            dimension = element[key];

            for (var j = 0; j < hiddenParentNodesLength; j++) {
              toggleOpenProperty(hiddenParentNodes[j]);
              hiddenParentNodes[j].style.display = hiddenParentNodesStyle[j].display;
              hiddenParentNodes[j].style.height = hiddenParentNodesStyle[j].height;
              hiddenParentNodes[j].style.overflow = hiddenParentNodesStyle[j].overflow;
              hiddenParentNodes[j].style.visibility = hiddenParentNodesStyle[j].visibility;
            }
          }

          return dimension;
        };
        /**
         *
         * @param {HTMLElement} el
         * @param {Object} cssObj
         * @returns {*}
         */


        var setCss = exports.setCss = function setCss(el, cssObj) {
          for (var key in cssObj) {
            el.style[key] = cssObj[key];
          }

          return el.style;
        };
        /**
         *
         * @param {HTMLElement} elem
         * @param {string} className
         */


        var hasClass = exports.hasClass = function hasClass(elem, className) {
          return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
        };
        /**
         *
         * @param {HTMLElement} elem
         * @param {string} className
         */


        var addClass = exports.addClass = function addClass(elem, className) {
          if (!hasClass(elem, className)) {
            elem.className += ' ' + className;
          }
        };
        /**
         *
         * @param {HTMLElement} elem
         * @param {string} className
         */


        var removeClass = exports.removeClass = function removeClass(elem, className) {
          var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';

          if (hasClass(elem, className)) {
            while (newClass.indexOf(' ' + className + ' ') >= 0) {
              newClass = newClass.replace(' ' + className + ' ', ' ');
            }

            elem.className = newClass.replace(/^\s+|\s+$/g, '');
          }
        };
        /**
         *
         * @param {HTMLElement} el
         * @param {Function} callback
         * @param {boolean} andForElement - apply callback for el
         * @returns {HTMLElement}
         */


        var forEachAncestors = exports.forEachAncestors = function forEachAncestors(el, callback, andForElement) {
          if (andForElement) {
            callback(el);
          }

          while (el.parentNode && !callback(el)) {
            el = el.parentNode;
          }

          return el;
        };
        /**
         *
         * @param {HTMLElement} el
         * @param {string} name event name
         * @param {Object} data
         */


        var triggerEvent = exports.triggerEvent = function triggerEvent(el, name, data) {
          if (!func.isString(name)) {
            throw new TypeError('event name must be String');
          }

          if (!(el instanceof HTMLElement)) {
            throw new TypeError('element must be HTMLElement');
          }

          name = name.trim();
          var event = document.createEvent('CustomEvent');
          event.initCustomEvent(name, false, false, data);
          el.dispatchEvent(event);
        };
        /**
         * @param {Object} referenceNode after this
         * @param {Object} newNode insert this
         */


        var insertAfter = exports.insertAfter = function insertAfter(referenceNode, newNode) {
          return referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        };
        /**
         * Add event listeners and push them to el[EVENT_LISTENER_LIST]
         * @param {HTMLElement|Node|Document} el DOM element
         * @param {Array} events
         * @param {Function} listener
         */


        var addEventListeners = exports.addEventListeners = function addEventListeners(el, events, listener) {
          events.forEach(function (eventName) {
            if (!el[EVENT_LISTENER_LIST]) {
              el[EVENT_LISTENER_LIST] = {};
            }

            if (!el[EVENT_LISTENER_LIST][eventName]) {
              el[EVENT_LISTENER_LIST][eventName] = [];
            }

            el.addEventListener(eventName, listener, eventCaptureParams);

            if (el[EVENT_LISTENER_LIST][eventName].indexOf(listener) < 0) {
              el[EVENT_LISTENER_LIST][eventName].push(listener);
            }
          });
        };
        /**
         * Remove event listeners and remove them from el[EVENT_LISTENER_LIST]
         * @param {HTMLElement} el DOM element
         * @param {Array} events
         * @param {Function} listener
         */


        var removeEventListeners = exports.removeEventListeners = function removeEventListeners(el, events, listener) {
          events.forEach(function (eventName) {
            var index = void 0;
            el.removeEventListener(eventName, listener, false);

            if (el[EVENT_LISTENER_LIST] && el[EVENT_LISTENER_LIST][eventName] && (index = el[EVENT_LISTENER_LIST][eventName].indexOf(listener)) > -1) {
              el[EVENT_LISTENER_LIST][eventName].splice(index, 1);
            }
          });
        };
        /**
         * Remove ALL event listeners which exists in el[EVENT_LISTENER_LIST]
         * @param {RangeSlider} instance
         * @param {HTMLElement} el DOM element
         */


        var removeAllListenersFromEl = exports.removeAllListenersFromEl = function removeAllListenersFromEl(instance, el) {
          if (!el[EVENT_LISTENER_LIST]) {
            return;
          }
          /* jshint ignore:start */

          /**
           *
           * @callback listener
           * @this {Object} event name
           */


          function rm(listener) {
            if (listener === instance._startEventListener) {
              this.el.removeEventListener(this.eventName, listener, false);
            }
          }

          for (var eventName in el[EVENT_LISTENER_LIST]) {
            el[EVENT_LISTENER_LIST][eventName].forEach(rm, {
              eventName: eventName,
              el: el
            });
          }

          el[EVENT_LISTENER_LIST] = {};
          /* jshint ignore:end */
        };
        /**
         * Range feature detection
         * @return {Boolean}
         */


        var supportsRange = exports.supportsRange = function supportsRange() {
          var input = document.createElement('input');
          input.setAttribute('type', 'range');
          return input.type !== 'text';
        };
        /***/

      },

      /***/
      "./src/utils/functions.js":
      /*!********************************!*\
        !*** ./src/utils/functions.js ***!
        \********************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        /**
         * Create a random uuid
         */

        var uuid = exports.uuid = function uuid() {
          var s4 = function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
          };

          return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        };
        /**
         * Delays a function for the given number of milliseconds, and then calls
         * it with the arguments supplied.
         *
         * @param  {Function} fn   function
         * @param  {Number}   wait delay
         * @param  {Number}   args arguments
         * @return {Function}
         */


        var delay = exports.delay = function delay(fn, wait) {
          for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
          }

          return setTimeout(function () {
            return fn.apply(null, args);
          }, wait);
        };
        /**
         * Returns a debounced function that will make sure the given
         * function is not triggered too much.
         *
         * @param  {Function} fn Function to debounce.
         * @param  {Number}   debounceDuration OPTIONAL. The amount of time in milliseconds for which we will debounce the
         *         function. (defaults to 100ms)
         * @return {Function}
         */


        var debounce = exports.debounce = function debounce(fn) {
          var debounceDuration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
          return function () {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            if (!fn.debouncing) {
              fn.lastReturnVal = fn.apply(window, args);
              fn.debouncing = true;
            }

            clearTimeout(fn.debounceTimeout);
            fn.debounceTimeout = setTimeout(function () {
              fn.debouncing = false;
            }, debounceDuration);
            return fn.lastReturnVal;
          };
        };

        var isString = exports.isString = function isString(obj) {
          return obj === '' + obj;
        };

        var isArray = exports.isArray = function isArray(obj) {
          return Object.prototype.toString.call(obj) === '[object Array]';
        };

        var isNumberLike = exports.isNumberLike = function isNumberLike(obj) {
          return obj !== null && obj !== undefined && (isString(obj) && isFinite(parseFloat(obj)) || isFinite(obj));
        };

        var getFirsNumberLike = exports.getFirsNumberLike = function getFirsNumberLike() {
          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          if (!args.length) {
            return null;
          }

          for (var i = 0, len = args.length; i < len; i++) {
            if (isNumberLike(args[i])) {
              return args[i];
            }
          }

          return null;
        };

        var isObject = exports.isObject = function isObject(obj) {
          return Object.prototype.toString.call(obj) === '[object Object]';
        };

        var simpleExtend = exports.simpleExtend = function simpleExtend(defaultOpt, options) {
          var opt = {};

          for (var key in defaultOpt) {
            opt[key] = defaultOpt[key];
          }

          for (var _key4 in options) {
            opt[_key4] = options[_key4];
          }

          return opt;
        };

        var between = exports.between = function between(pos, min, max) {
          if (pos < min) {
            return min;
          }

          if (pos > max) {
            return max;
          }

          return pos;
        };
        /***/

      }
      /******/

    })
  );
});
},{}],"CzWl":[function(require,module,exports) {
var define;
/*!
 * validate.js 0.12.0
 *
 * (c) 2013-2017 Nicklas Ansman, 2013 Wrapp
 * Validate.js may be freely distributed under the MIT license.
 * For all details and documentation:
 * http://validatejs.org/
 */

(function(exports, module, define) {
  "use strict";

  // The main function that calls the validators specified by the constraints.
  // The options are the following:
  //   - format (string) - An option that controls how the returned value is formatted
  //     * flat - Returns a flat array of just the error messages
  //     * grouped - Returns the messages grouped by attribute (default)
  //     * detailed - Returns an array of the raw validation data
  //   - fullMessages (boolean) - If `true` (default) the attribute name is prepended to the error.
  //
  // Please note that the options are also passed to each validator.
  var validate = function(attributes, constraints, options) {
    options = v.extend({}, v.options, options);

    var results = v.runValidations(attributes, constraints, options)
      , attr
      , validator;

    if (results.some(function(r) { return v.isPromise(r.error); })) {
      throw new Error("Use validate.async if you want support for promises");
    }
    return validate.processValidationResults(results, options);
  };

  var v = validate;

  // Copies over attributes from one or more sources to a single destination.
  // Very much similar to underscore's extend.
  // The first argument is the target object and the remaining arguments will be
  // used as sources.
  v.extend = function(obj) {
    [].slice.call(arguments, 1).forEach(function(source) {
      for (var attr in source) {
        obj[attr] = source[attr];
      }
    });
    return obj;
  };

  v.extend(validate, {
    // This is the version of the library as a semver.
    // The toString function will allow it to be coerced into a string
    version: {
      major: 0,
      minor: 12,
      patch: 0,
      metadata: null,
      toString: function() {
        var version = v.format("%{major}.%{minor}.%{patch}", v.version);
        if (!v.isEmpty(v.version.metadata)) {
          version += "+" + v.version.metadata;
        }
        return version;
      }
    },

    // Below is the dependencies that are used in validate.js

    // The constructor of the Promise implementation.
    // If you are using Q.js, RSVP or any other A+ compatible implementation
    // override this attribute to be the constructor of that promise.
    // Since jQuery promises aren't A+ compatible they won't work.
    Promise: typeof Promise !== "undefined" ? Promise : /* istanbul ignore next */ null,

    EMPTY_STRING_REGEXP: /^\s*$/,

    // Runs the validators specified by the constraints object.
    // Will return an array of the format:
    //     [{attribute: "<attribute name>", error: "<validation result>"}, ...]
    runValidations: function(attributes, constraints, options) {
      var results = []
        , attr
        , validatorName
        , value
        , validators
        , validator
        , validatorOptions
        , error;

      if (v.isDomElement(attributes) || v.isJqueryElement(attributes)) {
        attributes = v.collectFormValues(attributes);
      }

      // Loops through each constraints, finds the correct validator and run it.
      for (attr in constraints) {
        value = v.getDeepObjectValue(attributes, attr);
        // This allows the constraints for an attribute to be a function.
        // The function will be called with the value, attribute name, the complete dict of
        // attributes as well as the options and constraints passed in.
        // This is useful when you want to have different
        // validations depending on the attribute value.
        validators = v.result(constraints[attr], value, attributes, attr, options, constraints);

        for (validatorName in validators) {
          validator = v.validators[validatorName];

          if (!validator) {
            error = v.format("Unknown validator %{name}", {name: validatorName});
            throw new Error(error);
          }

          validatorOptions = validators[validatorName];
          // This allows the options to be a function. The function will be
          // called with the value, attribute name, the complete dict of
          // attributes as well as the options and constraints passed in.
          // This is useful when you want to have different
          // validations depending on the attribute value.
          validatorOptions = v.result(validatorOptions, value, attributes, attr, options, constraints);
          if (!validatorOptions) {
            continue;
          }
          results.push({
            attribute: attr,
            value: value,
            validator: validatorName,
            globalOptions: options,
            attributes: attributes,
            options: validatorOptions,
            error: validator.call(validator,
                value,
                validatorOptions,
                attr,
                attributes,
                options)
          });
        }
      }

      return results;
    },

    // Takes the output from runValidations and converts it to the correct
    // output format.
    processValidationResults: function(errors, options) {
      errors = v.pruneEmptyErrors(errors, options);
      errors = v.expandMultipleErrors(errors, options);
      errors = v.convertErrorMessages(errors, options);

      var format = options.format || "grouped";

      if (typeof v.formatters[format] === 'function') {
        errors = v.formatters[format](errors);
      } else {
        throw new Error(v.format("Unknown format %{format}", options));
      }

      return v.isEmpty(errors) ? undefined : errors;
    },

    // Runs the validations with support for promises.
    // This function will return a promise that is settled when all the
    // validation promises have been completed.
    // It can be called even if no validations returned a promise.
    async: function(attributes, constraints, options) {
      options = v.extend({}, v.async.options, options);

      var WrapErrors = options.wrapErrors || function(errors) {
        return errors;
      };

      // Removes unknown attributes
      if (options.cleanAttributes !== false) {
        attributes = v.cleanAttributes(attributes, constraints);
      }

      var results = v.runValidations(attributes, constraints, options);

      return new v.Promise(function(resolve, reject) {
        v.waitForResults(results).then(function() {
          var errors = v.processValidationResults(results, options);
          if (errors) {
            reject(new WrapErrors(errors, options, attributes, constraints));
          } else {
            resolve(attributes);
          }
        }, function(err) {
          reject(err);
        });
      });
    },

    single: function(value, constraints, options) {
      options = v.extend({}, v.single.options, options, {
        format: "flat",
        fullMessages: false
      });
      return v({single: value}, {single: constraints}, options);
    },

    // Returns a promise that is resolved when all promises in the results array
    // are settled. The promise returned from this function is always resolved,
    // never rejected.
    // This function modifies the input argument, it replaces the promises
    // with the value returned from the promise.
    waitForResults: function(results) {
      // Create a sequence of all the results starting with a resolved promise.
      return results.reduce(function(memo, result) {
        // If this result isn't a promise skip it in the sequence.
        if (!v.isPromise(result.error)) {
          return memo;
        }

        return memo.then(function() {
          return result.error.then(function(error) {
            result.error = error || null;
          });
        });
      }, new v.Promise(function(r) { r(); })); // A resolved promise
    },

    // If the given argument is a call: function the and: function return the value
    // otherwise just return the value. Additional arguments will be passed as
    // arguments to the function.
    // Example:
    // ```
    // result('foo') // 'foo'
    // result(Math.max, 1, 2) // 2
    // ```
    result: function(value) {
      var args = [].slice.call(arguments, 1);
      if (typeof value === 'function') {
        value = value.apply(null, args);
      }
      return value;
    },

    // Checks if the value is a number. This function does not consider NaN a
    // number like many other `isNumber` functions do.
    isNumber: function(value) {
      return typeof value === 'number' && !isNaN(value);
    },

    // Returns false if the object is not a function
    isFunction: function(value) {
      return typeof value === 'function';
    },

    // A simple check to verify that the value is an integer. Uses `isNumber`
    // and a simple modulo check.
    isInteger: function(value) {
      return v.isNumber(value) && value % 1 === 0;
    },

    // Checks if the value is a boolean
    isBoolean: function(value) {
      return typeof value === 'boolean';
    },

    // Uses the `Object` function to check if the given argument is an object.
    isObject: function(obj) {
      return obj === Object(obj);
    },

    // Simply checks if the object is an instance of a date
    isDate: function(obj) {
      return obj instanceof Date;
    },

    // Returns false if the object is `null` of `undefined`
    isDefined: function(obj) {
      return obj !== null && obj !== undefined;
    },

    // Checks if the given argument is a promise. Anything with a `then`
    // function is considered a promise.
    isPromise: function(p) {
      return !!p && v.isFunction(p.then);
    },

    isJqueryElement: function(o) {
      return o && v.isString(o.jquery);
    },

    isDomElement: function(o) {
      if (!o) {
        return false;
      }

      if (!o.querySelectorAll || !o.querySelector) {
        return false;
      }

      if (v.isObject(document) && o === document) {
        return true;
      }

      // http://stackoverflow.com/a/384380/699304
      /* istanbul ignore else */
      if (typeof HTMLElement === "object") {
        return o instanceof HTMLElement;
      } else {
        return o &&
          typeof o === "object" &&
          o !== null &&
          o.nodeType === 1 &&
          typeof o.nodeName === "string";
      }
    },

    isEmpty: function(value) {
      var attr;

      // Null and undefined are empty
      if (!v.isDefined(value)) {
        return true;
      }

      // functions are non empty
      if (v.isFunction(value)) {
        return false;
      }

      // Whitespace only strings are empty
      if (v.isString(value)) {
        return v.EMPTY_STRING_REGEXP.test(value);
      }

      // For arrays we use the length property
      if (v.isArray(value)) {
        return value.length === 0;
      }

      // Dates have no attributes but aren't empty
      if (v.isDate(value)) {
        return false;
      }

      // If we find at least one property we consider it non empty
      if (v.isObject(value)) {
        for (attr in value) {
          return false;
        }
        return true;
      }

      return false;
    },

    // Formats the specified strings with the given values like so:
    // ```
    // format("Foo: %{foo}", {foo: "bar"}) // "Foo bar"
    // ```
    // If you want to write %{...} without having it replaced simply
    // prefix it with % like this `Foo: %%{foo}` and it will be returned
    // as `"Foo: %{foo}"`
    format: v.extend(function(str, vals) {
      if (!v.isString(str)) {
        return str;
      }
      return str.replace(v.format.FORMAT_REGEXP, function(m0, m1, m2) {
        if (m1 === '%') {
          return "%{" + m2 + "}";
        } else {
          return String(vals[m2]);
        }
      });
    }, {
      // Finds %{key} style patterns in the given string
      FORMAT_REGEXP: /(%?)%\{([^\}]+)\}/g
    }),

    // "Prettifies" the given string.
    // Prettifying means replacing [.\_-] with spaces as well as splitting
    // camel case words.
    prettify: function(str) {
      if (v.isNumber(str)) {
        // If there are more than 2 decimals round it to two
        if ((str * 100) % 1 === 0) {
          return "" + str;
        } else {
          return parseFloat(Math.round(str * 100) / 100).toFixed(2);
        }
      }

      if (v.isArray(str)) {
        return str.map(function(s) { return v.prettify(s); }).join(", ");
      }

      if (v.isObject(str)) {
        return str.toString();
      }

      // Ensure the string is actually a string
      str = "" + str;

      return str
        // Splits keys separated by periods
        .replace(/([^\s])\.([^\s])/g, '$1 $2')
        // Removes backslashes
        .replace(/\\+/g, '')
        // Replaces - and - with space
        .replace(/[_-]/g, ' ')
        // Splits camel cased words
        .replace(/([a-z])([A-Z])/g, function(m0, m1, m2) {
          return "" + m1 + " " + m2.toLowerCase();
        })
        .toLowerCase();
    },

    stringifyValue: function(value, options) {
      var prettify = options && options.prettify || v.prettify;
      return prettify(value);
    },

    isString: function(value) {
      return typeof value === 'string';
    },

    isArray: function(value) {
      return {}.toString.call(value) === '[object Array]';
    },

    // Checks if the object is a hash, which is equivalent to an object that
    // is neither an array nor a function.
    isHash: function(value) {
      return v.isObject(value) && !v.isArray(value) && !v.isFunction(value);
    },

    contains: function(obj, value) {
      if (!v.isDefined(obj)) {
        return false;
      }
      if (v.isArray(obj)) {
        return obj.indexOf(value) !== -1;
      }
      return value in obj;
    },

    unique: function(array) {
      if (!v.isArray(array)) {
        return array;
      }
      return array.filter(function(el, index, array) {
        return array.indexOf(el) == index;
      });
    },

    forEachKeyInKeypath: function(object, keypath, callback) {
      if (!v.isString(keypath)) {
        return undefined;
      }

      var key = ""
        , i
        , escape = false;

      for (i = 0; i < keypath.length; ++i) {
        switch (keypath[i]) {
          case '.':
            if (escape) {
              escape = false;
              key += '.';
            } else {
              object = callback(object, key, false);
              key = "";
            }
            break;

          case '\\':
            if (escape) {
              escape = false;
              key += '\\';
            } else {
              escape = true;
            }
            break;

          default:
            escape = false;
            key += keypath[i];
            break;
        }
      }

      return callback(object, key, true);
    },

    getDeepObjectValue: function(obj, keypath) {
      if (!v.isObject(obj)) {
        return undefined;
      }

      return v.forEachKeyInKeypath(obj, keypath, function(obj, key) {
        if (v.isObject(obj)) {
          return obj[key];
        }
      });
    },

    // This returns an object with all the values of the form.
    // It uses the input name as key and the value as value
    // So for example this:
    // <input type="text" name="email" value="foo@bar.com" />
    // would return:
    // {email: "foo@bar.com"}
    collectFormValues: function(form, options) {
      var values = {}
        , i
        , j
        , input
        , inputs
        , option
        , value;

      if (v.isJqueryElement(form)) {
        form = form[0];
      }

      if (!form) {
        return values;
      }

      options = options || {};

      inputs = form.querySelectorAll("input[name], textarea[name]");
      for (i = 0; i < inputs.length; ++i) {
        input = inputs.item(i);

        if (v.isDefined(input.getAttribute("data-ignored"))) {
          continue;
        }

        name = input.name.replace(/\./g, "\\\\.");
        value = v.sanitizeFormValue(input.value, options);
        if (input.type === "number") {
          value = value ? +value : null;
        } else if (input.type === "checkbox") {
          if (input.attributes.value) {
            if (!input.checked) {
              value = values[name] || null;
            }
          } else {
            value = input.checked;
          }
        } else if (input.type === "radio") {
          if (!input.checked) {
            value = values[name] || null;
          }
        }
        values[name] = value;
      }

      inputs = form.querySelectorAll("select[name]");
      for (i = 0; i < inputs.length; ++i) {
        input = inputs.item(i);
        if (v.isDefined(input.getAttribute("data-ignored"))) {
          continue;
        }

        if (input.multiple) {
          value = [];
          for (j in input.options) {
            option = input.options[j];
             if (option && option.selected) {
              value.push(v.sanitizeFormValue(option.value, options));
            }
          }
        } else {
          var _val = typeof input.options[input.selectedIndex] !== 'undefined' ? input.options[input.selectedIndex].value : '';
          value = v.sanitizeFormValue(_val, options);
        }
        values[input.name] = value;
      }

      return values;
    },

    sanitizeFormValue: function(value, options) {
      if (options.trim && v.isString(value)) {
        value = value.trim();
      }

      if (options.nullify !== false && value === "") {
        return null;
      }
      return value;
    },

    capitalize: function(str) {
      if (!v.isString(str)) {
        return str;
      }
      return str[0].toUpperCase() + str.slice(1);
    },

    // Remove all errors who's error attribute is empty (null or undefined)
    pruneEmptyErrors: function(errors) {
      return errors.filter(function(error) {
        return !v.isEmpty(error.error);
      });
    },

    // In
    // [{error: ["err1", "err2"], ...}]
    // Out
    // [{error: "err1", ...}, {error: "err2", ...}]
    //
    // All attributes in an error with multiple messages are duplicated
    // when expanding the errors.
    expandMultipleErrors: function(errors) {
      var ret = [];
      errors.forEach(function(error) {
        // Removes errors without a message
        if (v.isArray(error.error)) {
          error.error.forEach(function(msg) {
            ret.push(v.extend({}, error, {error: msg}));
          });
        } else {
          ret.push(error);
        }
      });
      return ret;
    },

    // Converts the error mesages by prepending the attribute name unless the
    // message is prefixed by ^
    convertErrorMessages: function(errors, options) {
      options = options || {};

      var ret = []
        , prettify = options.prettify || v.prettify;
      errors.forEach(function(errorInfo) {
        var error = v.result(errorInfo.error,
            errorInfo.value,
            errorInfo.attribute,
            errorInfo.options,
            errorInfo.attributes,
            errorInfo.globalOptions);

        if (!v.isString(error)) {
          ret.push(errorInfo);
          return;
        }

        if (error[0] === '^') {
          error = error.slice(1);
        } else if (options.fullMessages !== false) {
          error = v.capitalize(prettify(errorInfo.attribute)) + " " + error;
        }
        error = error.replace(/\\\^/g, "^");
        error = v.format(error, {
          value: v.stringifyValue(errorInfo.value, options)
        });
        ret.push(v.extend({}, errorInfo, {error: error}));
      });
      return ret;
    },

    // In:
    // [{attribute: "<attributeName>", ...}]
    // Out:
    // {"<attributeName>": [{attribute: "<attributeName>", ...}]}
    groupErrorsByAttribute: function(errors) {
      var ret = {};
      errors.forEach(function(error) {
        var list = ret[error.attribute];
        if (list) {
          list.push(error);
        } else {
          ret[error.attribute] = [error];
        }
      });
      return ret;
    },

    // In:
    // [{error: "<message 1>", ...}, {error: "<message 2>", ...}]
    // Out:
    // ["<message 1>", "<message 2>"]
    flattenErrorsToArray: function(errors) {
      return errors
        .map(function(error) { return error.error; })
        .filter(function(value, index, self) {
          return self.indexOf(value) === index;
        });
    },

    cleanAttributes: function(attributes, whitelist) {
      function whitelistCreator(obj, key, last) {
        if (v.isObject(obj[key])) {
          return obj[key];
        }
        return (obj[key] = last ? true : {});
      }

      function buildObjectWhitelist(whitelist) {
        var ow = {}
          , lastObject
          , attr;
        for (attr in whitelist) {
          if (!whitelist[attr]) {
            continue;
          }
          v.forEachKeyInKeypath(ow, attr, whitelistCreator);
        }
        return ow;
      }

      function cleanRecursive(attributes, whitelist) {
        if (!v.isObject(attributes)) {
          return attributes;
        }

        var ret = v.extend({}, attributes)
          , w
          , attribute;

        for (attribute in attributes) {
          w = whitelist[attribute];

          if (v.isObject(w)) {
            ret[attribute] = cleanRecursive(ret[attribute], w);
          } else if (!w) {
            delete ret[attribute];
          }
        }
        return ret;
      }

      if (!v.isObject(whitelist) || !v.isObject(attributes)) {
        return {};
      }

      whitelist = buildObjectWhitelist(whitelist);
      return cleanRecursive(attributes, whitelist);
    },

    exposeModule: function(validate, root, exports, module, define) {
      if (exports) {
        if (module && module.exports) {
          exports = module.exports = validate;
        }
        exports.validate = validate;
      } else {
        root.validate = validate;
        if (validate.isFunction(define) && define.amd) {
          define([], function () { return validate; });
        }
      }
    },

    warn: function(msg) {
      if (typeof console !== "undefined" && console.warn) {
        console.warn("[validate.js] " + msg);
      }
    },

    error: function(msg) {
      if (typeof console !== "undefined" && console.error) {
        console.error("[validate.js] " + msg);
      }
    }
  });

  validate.validators = {
    // Presence validates that the value isn't empty
    presence: function(value, options) {
      options = v.extend({}, this.options, options);
      if (options.allowEmpty !== false ? !v.isDefined(value) : v.isEmpty(value)) {
        return options.message || this.message || "can't be blank";
      }
    },
    length: function(value, options, attribute) {
      // Empty values are allowed
      if (!v.isDefined(value)) {
        return;
      }

      options = v.extend({}, this.options, options);

      var is = options.is
        , maximum = options.maximum
        , minimum = options.minimum
        , tokenizer = options.tokenizer || function(val) { return val; }
        , err
        , errors = [];

      value = tokenizer(value);
      var length = value.length;
      if(!v.isNumber(length)) {
        v.error(v.format("Attribute %{attr} has a non numeric value for `length`", {attr: attribute}));
        return options.message || this.notValid || "has an incorrect length";
      }

      // Is checks
      if (v.isNumber(is) && length !== is) {
        err = options.wrongLength ||
          this.wrongLength ||
          "is the wrong length (should be %{count} characters)";
        errors.push(v.format(err, {count: is}));
      }

      if (v.isNumber(minimum) && length < minimum) {
        err = options.tooShort ||
          this.tooShort ||
          "is too short (minimum is %{count} characters)";
        errors.push(v.format(err, {count: minimum}));
      }

      if (v.isNumber(maximum) && length > maximum) {
        err = options.tooLong ||
          this.tooLong ||
          "is too long (maximum is %{count} characters)";
        errors.push(v.format(err, {count: maximum}));
      }

      if (errors.length > 0) {
        return options.message || errors;
      }
    },
    numericality: function(value, options, attribute, attributes, globalOptions) {
      // Empty values are fine
      if (!v.isDefined(value)) {
        return;
      }

      options = v.extend({}, this.options, options);

      var errors = []
        , name
        , count
        , checks = {
            greaterThan:          function(v, c) { return v > c; },
            greaterThanOrEqualTo: function(v, c) { return v >= c; },
            equalTo:              function(v, c) { return v === c; },
            lessThan:             function(v, c) { return v < c; },
            lessThanOrEqualTo:    function(v, c) { return v <= c; },
            divisibleBy:          function(v, c) { return v % c === 0; }
          }
        , prettify = options.prettify ||
          (globalOptions && globalOptions.prettify) ||
          v.prettify;

      // Strict will check that it is a valid looking number
      if (v.isString(value) && options.strict) {
        var pattern = "^-?(0|[1-9]\\d*)";
        if (!options.onlyInteger) {
          pattern += "(\\.\\d+)?";
        }
        pattern += "$";

        if (!(new RegExp(pattern).test(value))) {
          return options.message ||
            options.notValid ||
            this.notValid ||
            this.message ||
            "must be a valid number";
        }
      }

      // Coerce the value to a number unless we're being strict.
      if (options.noStrings !== true && v.isString(value) && !v.isEmpty(value)) {
        value = +value;
      }

      // If it's not a number we shouldn't continue since it will compare it.
      if (!v.isNumber(value)) {
        return options.message ||
          options.notValid ||
          this.notValid ||
          this.message ||
          "is not a number";
      }

      // Same logic as above, sort of. Don't bother with comparisons if this
      // doesn't pass.
      if (options.onlyInteger && !v.isInteger(value)) {
        return options.message ||
          options.notInteger ||
          this.notInteger ||
          this.message ||
          "must be an integer";
      }

      for (name in checks) {
        count = options[name];
        if (v.isNumber(count) && !checks[name](value, count)) {
          // This picks the default message if specified
          // For example the greaterThan check uses the message from
          // this.notGreaterThan so we capitalize the name and prepend "not"
          var key = "not" + v.capitalize(name);
          var msg = options[key] ||
            this[key] ||
            this.message ||
            "must be %{type} %{count}";

          errors.push(v.format(msg, {
            count: count,
            type: prettify(name)
          }));
        }
      }

      if (options.odd && value % 2 !== 1) {
        errors.push(options.notOdd ||
            this.notOdd ||
            this.message ||
            "must be odd");
      }
      if (options.even && value % 2 !== 0) {
        errors.push(options.notEven ||
            this.notEven ||
            this.message ||
            "must be even");
      }

      if (errors.length) {
        return options.message || errors;
      }
    },
    datetime: v.extend(function(value, options) {
      if (!v.isFunction(this.parse) || !v.isFunction(this.format)) {
        throw new Error("Both the parse and format functions needs to be set to use the datetime/date validator");
      }

      // Empty values are fine
      if (!v.isDefined(value)) {
        return;
      }

      options = v.extend({}, this.options, options);

      var err
        , errors = []
        , earliest = options.earliest ? this.parse(options.earliest, options) : NaN
        , latest = options.latest ? this.parse(options.latest, options) : NaN;

      value = this.parse(value, options);

      // 86400000 is the number of milliseconds in a day, this is used to remove
      // the time from the date
      if (isNaN(value) || options.dateOnly && value % 86400000 !== 0) {
        err = options.notValid ||
          options.message ||
          this.notValid ||
          "must be a valid date";
        return v.format(err, {value: arguments[0]});
      }

      if (!isNaN(earliest) && value < earliest) {
        err = options.tooEarly ||
          options.message ||
          this.tooEarly ||
          "must be no earlier than %{date}";
        err = v.format(err, {
          value: this.format(value, options),
          date: this.format(earliest, options)
        });
        errors.push(err);
      }

      if (!isNaN(latest) && value > latest) {
        err = options.tooLate ||
          options.message ||
          this.tooLate ||
          "must be no later than %{date}";
        err = v.format(err, {
          date: this.format(latest, options),
          value: this.format(value, options)
        });
        errors.push(err);
      }

      if (errors.length) {
        return v.unique(errors);
      }
    }, {
      parse: null,
      format: null
    }),
    date: function(value, options) {
      options = v.extend({}, options, {dateOnly: true});
      return v.validators.datetime.call(v.validators.datetime, value, options);
    },
    format: function(value, options) {
      if (v.isString(options) || (options instanceof RegExp)) {
        options = {pattern: options};
      }

      options = v.extend({}, this.options, options);

      var message = options.message || this.message || "is invalid"
        , pattern = options.pattern
        , match;

      // Empty values are allowed
      if (!v.isDefined(value)) {
        return;
      }
      if (!v.isString(value)) {
        return message;
      }

      if (v.isString(pattern)) {
        pattern = new RegExp(options.pattern, options.flags);
      }
      match = pattern.exec(value);
      if (!match || match[0].length != value.length) {
        return message;
      }
    },
    inclusion: function(value, options) {
      // Empty values are fine
      if (!v.isDefined(value)) {
        return;
      }
      if (v.isArray(options)) {
        options = {within: options};
      }
      options = v.extend({}, this.options, options);
      if (v.contains(options.within, value)) {
        return;
      }
      var message = options.message ||
        this.message ||
        "^%{value} is not included in the list";
      return v.format(message, {value: value});
    },
    exclusion: function(value, options) {
      // Empty values are fine
      if (!v.isDefined(value)) {
        return;
      }
      if (v.isArray(options)) {
        options = {within: options};
      }
      options = v.extend({}, this.options, options);
      if (!v.contains(options.within, value)) {
        return;
      }
      var message = options.message || this.message || "^%{value} is restricted";
      return v.format(message, {value: value});
    },
    email: v.extend(function(value, options) {
      options = v.extend({}, this.options, options);
      var message = options.message || this.message || "is not a valid email";
      // Empty values are fine
      if (!v.isDefined(value)) {
        return;
      }
      if (!v.isString(value)) {
        return message;
      }
      if (!this.PATTERN.exec(value)) {
        return message;
      }
    }, {
      PATTERN: /^[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i
    }),
    equality: function(value, options, attribute, attributes, globalOptions) {
      if (!v.isDefined(value)) {
        return;
      }

      if (v.isString(options)) {
        options = {attribute: options};
      }
      options = v.extend({}, this.options, options);
      var message = options.message ||
        this.message ||
        "is not equal to %{attribute}";

      if (v.isEmpty(options.attribute) || !v.isString(options.attribute)) {
        throw new Error("The attribute must be a non empty string");
      }

      var otherValue = v.getDeepObjectValue(attributes, options.attribute)
        , comparator = options.comparator || function(v1, v2) {
          return v1 === v2;
        }
        , prettify = options.prettify ||
          (globalOptions && globalOptions.prettify) ||
          v.prettify;

      if (!comparator(value, otherValue, options, attribute, attributes)) {
        return v.format(message, {attribute: prettify(options.attribute)});
      }
    },

    // A URL validator that is used to validate URLs with the ability to
    // restrict schemes and some domains.
    url: function(value, options) {
      if (!v.isDefined(value)) {
        return;
      }

      options = v.extend({}, this.options, options);

      var message = options.message || this.message || "is not a valid url"
        , schemes = options.schemes || this.schemes || ['http', 'https']
        , allowLocal = options.allowLocal || this.allowLocal || false;

      if (!v.isString(value)) {
        return message;
      }

      // https://gist.github.com/dperini/729294
      var regex =
        "^" +
        // protocol identifier
        "(?:(?:" + schemes.join("|") + ")://)" +
        // user:pass authentication
        "(?:\\S+(?::\\S*)?@)?" +
        "(?:";

      var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";

      if (allowLocal) {
        tld += "?";
      } else {
        regex +=
          // IP address exclusion
          // private & local networks
          "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
          "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
          "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})";
      }

      regex +=
          // IP address dotted notation octets
          // excludes loopback network 0.0.0.0
          // excludes reserved space >= 224.0.0.0
          // excludes network & broacast addresses
          // (first & last IP address of each class)
          "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
          "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
          "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
        "|" +
          // host name
          "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
          // domain name
          "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
          tld +
        ")" +
        // port number
        "(?::\\d{2,5})?" +
        // resource path
        "(?:[/?#]\\S*)?" +
      "$";

      var PATTERN = new RegExp(regex, 'i');
      if (!PATTERN.exec(value)) {
        return message;
      }
    }
  };

  validate.formatters = {
    detailed: function(errors) {return errors;},
    flat: v.flattenErrorsToArray,
    grouped: function(errors) {
      var attr;

      errors = v.groupErrorsByAttribute(errors);
      for (attr in errors) {
        errors[attr] = v.flattenErrorsToArray(errors[attr]);
      }
      return errors;
    },
    constraint: function(errors) {
      var attr;
      errors = v.groupErrorsByAttribute(errors);
      for (attr in errors) {
        errors[attr] = errors[attr].map(function(result) {
          return result.validator;
        }).sort();
      }
      return errors;
    }
  };

  validate.exposeModule(validate, this, exports, module, define);
}).call(this,
        typeof exports !== 'undefined' ? /* istanbul ignore next */ exports : null,
        typeof module !== 'undefined' ? /* istanbul ignore next */ module : null,
        typeof define !== 'undefined' ? /* istanbul ignore next */ define : null);

},{}],"mahc":[function(require,module,exports) {
'use strict';

var _choices = _interopRequireDefault(require("choices.js"));

var _rangesliderPure = _interopRequireDefault(require("rangeslider-pure"));

var _validate = _interopRequireDefault(require("validate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var searchOpenBtn = document.querySelector('.controls__search');

if (searchOpenBtn) {
  var searchForm = document.querySelector('.search-form');
  searchOpenBtn.addEventListener('click', function () {
    searchForm.classList.toggle('open');
  });
}

var selectedOption = function selectedOption(select, value) {
  Array.from(select.options).forEach(function (option) {
    return option.removeAttribute('selected');
  });
  document.querySelector("[value=".concat(value, "]")).setAttribute('selected', '');
}; // toggle New/In Progress


var toggle = document.querySelector('.toggle');
var toggleSelect = document.querySelector('.toggle__select');

if (toggle) {
  toggleSelect.value = 'new';
  var toggleValue;
  toggle.addEventListener('click', function () {
    toggle.classList.toggle('active');

    if (toggle.classList.contains('active')) {
      toggleValue = 'in-progres';
    } else {
      toggleValue = 'new';
    }

    selectedOption(toggleSelect, toggleValue);
    toggleSelect.value = toggleValue;
  });
} // day switcer


var switcher = document.querySelector('.switcher');

if (switcher) {
  var switcherRightArrow = document.querySelector('.switcher__right');
  var switcherLeftArrow = document.querySelector('.switcher__left');
  var switcherType = document.querySelector('.switcher__type');
  var switcherSelect = document.querySelector('.switcher__select');
  switcherSelect.value = 'today';

  var switchDay = function switchDay(dir) {
    switch (true) {
      case switcherType.textContent === 'Today':
        switcherType.textContent = dir === 'next' ? 'Tomorrow' : 'Yesterday';
        switcherSelect.value = dir === 'next' ? 'tomorrow' : 'yesterday';
        break;

      case switcherType.textContent === 'Tomorrow':
        switcherType.textContent = dir === 'next' ? 'Yesterday' : 'Today';
        switcherSelect.value = dir === 'next' ? 'yesterday' : 'today';
        break;

      case switcherType.textContent === 'Yesterday':
        switcherType.textContent = dir === 'next' ? 'Today' : 'Tomorrow';
        switcherSelect.value = dir === 'next' ? 'today' : 'tomorrow';
        break;

      default:
        break;
    }

    selectedOption(switcherSelect, switcherSelect.value);
  };

  if (switcherRightArrow || switcherLeftArrow) {
    switcherRightArrow.addEventListener('click', function () {
      switchDay('next');
    });
    switcherLeftArrow.addEventListener('click', function () {
      switchDay('prev');
    });
  }
} // menu


var burger = document.querySelector('.header__burger');
var header = document.querySelector('.header');

if (burger) {
  burger.addEventListener('click', function () {
    header.classList.toggle('menu-open');
  });
} // step1 truck selects


var truckOptions = Array.from(document.querySelectorAll('.truck-options__select'));

if (truckOptions.length) {
  var checkSelected = function checkSelected(event) {
    var key = event.target.dataset.name;
    truckValues[key] = event.detail.choice.value;
    var isSelected = Object.values(truckValues).indexOf('') === -1;
    var stepButton = document.querySelector('.step1-button');

    if (isSelected) {
      stepButton.classList.remove('disabled');
      stepButton.classList.add('btn__blue');
    } else {
      stepButton.classList.add('disabled');
      stepButton.classList.remove('btn__blue');
    }
  };

  new _choices.default('.truck-options__select', {
    searchEnabled: false
  });
  var truckValues = {};
  truckOptions.forEach(function (option) {
    var key = option.dataset.name;
    truckValues[key] = option.value;
    option.addEventListener('choice', checkSelected);
  });
} //conditions and temperature


var conditions = document.querySelector('.conditions');

if (conditions) {
  var select = document.querySelector('.conditions__select');
  var customSelectDropdown = document.querySelector('.multiple-select__dropdown');
  var selectPlaceholder = document.querySelector('.multiple-select__placeholder');
  var checkedItems = [];
  var temperature = '';
  var goodFrozen = 35;
  var accept = document.querySelector('.btn__accept');
  var reject = document.querySelector('.btn__reject');
  var conditionsValue = [];

  var checkStatusPage = function checkStatusPage(temperature) {
    if (conditionsValue.length === 0 || temperature === '') {
      reject.classList.add('disabled');
      accept.classList.remove('btn__blue');
      accept.classList.remove('btn__red');
      accept.classList.add('disabled');
      return;
    }

    if (conditionsValue.length !== 0 && goodFrozen >= temperature) {
      reject.classList.remove('disabled');
      accept.classList.remove('disabled');
      accept.classList.remove('btn__red');
      accept.classList.add('btn__blue');
    } else if (goodFrozen < temperature && conditionsValue.length !== 0) {
      reject.classList.remove('disabled');
      accept.classList.remove('disabled');
      accept.classList.remove('btn__blue');
      accept.classList.add('btn__red');
    }
  };

  var changeConditionsValue = function changeConditionsValue(val) {
    conditionsValue = val;
  };

  var removeOptionFromSelect = function removeOptionFromSelect(item) {
    item.classList.remove('checked');
    checkedItems.splice(checkedItems.indexOf(item.textContent), 1);
    document.querySelector(".multiple__option-".concat(item.dataset.value)).remove();
    changeConditionsValue(select.options);
    checkStatusPage(temperature);
  };

  var addOptionToSelect = function addOptionToSelect(item) {
    item.classList.add('checked');
    var isPresent = checkedItems.indexOf(item.textContent) !== -1;
    checkedItems = isPresent ? checkedItems : [].concat(_toConsumableArray(checkedItems), [item.textContent]);
    var optionEl = document.createElement('option');
    optionEl.value = item.dataset.value;
    optionEl.classList.add("multiple__option-".concat(item.dataset.value));
    optionEl.setAttribute('selected', '');
    optionEl.textContent = item.textContent;
    select.appendChild(optionEl);
    changeConditionsValue(select.options);
    checkStatusPage(temperature);
  };

  var createItem = function createItem(option) {
    var item = document.createElement('div');
    item.dataset.value = option.value;
    item.textContent = option.textContent;
    item.className = "multiple-select__dropdown-item";
    return item;
  };

  var changeMutipleSelectText = function changeMutipleSelectText() {
    selectPlaceholder.textContent = checkedItems.join(', ');

    if (checkedItems.length === 0) {
      selectPlaceholder.textContent = 'Select Conditions';
      selectPlaceholder.classList.remove('active');
    } else {
      selectPlaceholder.classList.add('active');
    }
  };

  var createDropdownItem = function createDropdownItem(option) {
    var item = createItem(option);
    customSelectDropdown.appendChild(item);

    function itemHandler() {
      if (item.classList.contains('checked')) {
        removeOptionFromSelect(item);
      } else {
        addOptionToSelect(item);
      }

      changeMutipleSelectText();
    }

    item.addEventListener('click', itemHandler);
  };

  Array.from(select.options).forEach(function (option) {
    createDropdownItem(option);
    option.remove();
  });
  var closeSelect = document.querySelector('.multiple-select__arrow');
  closeSelect.addEventListener('click', function () {
    customSelectDropdown.classList.toggle('open');
  });
  var multipleSelect = document.querySelector('.multiple-select');
  multipleSelect.addEventListener('click', function () {
    customSelectDropdown.classList.toggle('open');
  });
  var slider = document.querySelector('.temperature__range');
  var celsios = document.querySelector('.temperature__celsius-digits');

  _rangesliderPure.default.create(slider, {
    onSlide: function onSlide(position, value) {
      celsios.value = position;
      temperature = position;
      checkStatusPage(temperature);
    }
  });

  celsios.addEventListener('input', function (event) {
    accept.classList.remove('disabled');
    _rangesliderPure.default.value = celsios.value;
    temperature = celsios.value;

    if (celsios.value === '') {
      return checkStatusPage(temperature);
    }

    slider.rangeSlider.update({
      value: celsios.value
    }, true);
  });
} // login 


var login = document.querySelector('.login');

if (login) {
  console.log(_validate.default);
  var loginSelect = document.querySelector('.login-select');
  new _choices.default(loginSelect, {
    searchEnabled: false
  });
}
},{"choices.js":"pQ6M","rangeslider-pure":"B9WR","validate.js":"CzWl"}]},{},["mahc"], null)
//# sourceMappingURL=js.0db0fed2.js.map