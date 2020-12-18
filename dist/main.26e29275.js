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
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n  body {\n    background-image: linear-gradient(\n      to right,\n      #eea2a2 0%,\n      #bbc1bf 19%,\n      #57c6e1 42%,\n      #b49fda 79%,\n      #7ac5d8 100%\n    );\n  }\n  .head {\n    border: 2px solid black;\n    width: 500px;\n    height: 500px;\n    border-radius: 50%;\n    background: #0dacd7;\n    position: relative;\n    left: 40%;\n  }\n  .nose {\n    border: 2px solid black;\n    position: relative;\n    width: 50px;\n    height: 50px;\n    background: red;\n    border-radius: 50%;\n    top: 175px;\n    left: 219px;\n    z-index: 1;\n  }\n  .nose:hover {\n    animation: wave 1s infinite linear;\n  }\n  .nose > div {\n    position: relative;\n    width: 13px;\n    height: 13px;\n    background: white;\n    border-radius: 50%;\n    top: 12px;\n    left: 14px;\n  }\n  @keyframes wave {\n    0% {\n      transform: rotate(0deg);\n    }\n    33% {\n      transform: rotate(55deg);\n    }\n    66% {\n      transform: rotate(-55deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n  \n  .eye {\n    border: 2px solid black;\n    position: absolute;\n    width: 140px;\n    height: 135px;\n    background: white;\n    border-radius: 53%/48%;\n    top: 70px;\n    left: 170px;\n    z-index: 1;\n  }\n  \n  .eye.left {\n    transform: translateX(-65px);\n  }\n  .eye.left > div {\n    width: 40px;\n    height: 60px;\n    background: black;\n    border-radius: 50%/48%;\n    position: relative;\n    top: 50px;\n    left: 80px;\n  }\n  .eye.left > div > div {\n    width: 20px;\n    height: 30px;\n    background: white;\n    border-radius: 50%/48%;\n    position: relative;\n    top: 24px;\n    left: 14px;\n  }\n  .eye.right {\n    transform: translateX(75px);\n  }\n  .eye.right > div {\n    width: 40px;\n    height: 60px;\n    background: black;\n    border-radius: 50%/48%;\n    position: relative;\n    top: 50px;\n    left: 20px;\n  }\n  .eye.right > div > div {\n    width: 20px;\n    height: 30px;\n    background: white;\n    border-radius: 50%/48%;\n    position: relative;\n    top: 24px;\n    left: 7px;\n  }\n  .face {\n    border: 2px solid black;\n    width: 450px;\n    height: 400px;\n    background-color: white;\n    border-radius: 50%;\n    position: absolute;\n    top: 94px;\n    left: 24px;\n  }\n  .face > div {\n    position: absolute;\n    border: 2px solid black;\n    transform: rotate(90deg);\n    width: 214px;\n    top: 234px;\n    left: 112px;\n    z-index: 1;\n  }\n  .mouse {\n    position: relative;\n    border: 2px solid black;\n    width: 316px;\n    height: 152px;\n    border-radius: 0 0 155px 147px;\n    top: 238px;\n    left: 90px;\n  }\n  .mouse > div {\n    position: relative;\n    border: 3px solid white;\n    top: -3px;\n  }\n  .huzi > .hz1 {\n    border: 2px solid black;\n    position: absolute;\n    width: 150px;\n    top: 215px;\n    left: 20px;\n    transform: rotate(15deg);\n  }\n  .huzi > .hz2 {\n    border: 2px solid black;\n    position: absolute;\n    width: 150px;\n    top: 260px;\n    left: 18px;\n  }\n  .huzi > .hz3 {\n    border: 2px solid black;\n    position: absolute;\n    width: 150px;\n    top: 305px;\n    left: 20px;\n    transform: rotate(-15deg);\n  }\n  .huzi > .hz4 {\n    border: 2px solid black;\n    position: absolute;\n    width: 150px;\n    top: 215px;\n    left: 320px;\n    transform: rotate(165deg);\n  }\n  .huzi > .hz5 {\n    border: 2px solid black;\n    position: absolute;\n    width: 150px;\n    top: 260px;\n    left: 322px;\n  }\n  .huzi > .hz6 {\n    border: 2px solid black;\n    position: absolute;\n    width: 150px;\n    top: 305px;\n    left: 320px;\n    transform: rotate(-165deg);\n  }\n  ";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2")
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.26e29275.js.map