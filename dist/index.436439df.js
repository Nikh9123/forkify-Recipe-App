// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"drOo7":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "6632b38b436439df";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"jKMjS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _configJs = require("./config.js");
var _recipeViewJs = require("./views/recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _resultsViewJs = require("./views/resultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _bookmarkViewJs = require("./views/bookmarkView.js");
var _bookmarkViewJsDefault = parcelHelpers.interopDefault(_bookmarkViewJs);
var _addRecipeViewJs = require("./views/addRecipeView.js");
var _addRecipeViewJsDefault = parcelHelpers.interopDefault(_addRecipeViewJs);
var _stable = require("core-js/stable");
var _runtime = require("regenerator-runtime/runtime");
///////////////////////////////////////
// if(module.hot){
//   module.hot.accept();
// }
const controlRecipes = async function() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        _recipeViewJsDefault.default.renderSpinner();
        //0) Update results view to mark selected results
        _resultsViewJsDefault.default.update(_modelJs.getSearchResultspage());
        // resultsView.render(model.getSearchResultspage());
        //3) updating bookmarks view
        _bookmarkViewJsDefault.default.update(_modelJs.state.bookmarks);
        //1) loading recipe
        await _modelJs.loadRecipe(id);
        //2) rendering recipe
        _recipeViewJsDefault.default.render(_modelJs.state.recipe);
    } catch (err) {
        _recipeViewJsDefault.default.renderError();
        console.error(err);
    }
};
const controlSearchResults = async function() {
    try {
        _resultsViewJsDefault.default.renderSpinner();
        //1) get search query
        const query = _searchViewJsDefault.default.getQuery();
        if (!query) return;
        //2) get load search results
        await _modelJs.loadSearchResult(query);
        //3) render results
        // resultsView.render(model.state.search.results);
        _resultsViewJsDefault.default.render(_modelJs.getSearchResultspage());
        //4)render initial paginaton buttons
        _paginationViewJsDefault.default.render(_modelJs.state.search);
    } catch (err) {
        console.log(err);
    }
};
const controlPagination = function(goToPage) {
    //1) render new results
    _resultsViewJsDefault.default.render(_modelJs.getSearchResultspage(goToPage));
    //2)render new paginaton buttons
    _paginationViewJsDefault.default.render(_modelJs.state.search);
};
const controlServings = function(newServings) {
    //1) update the recipe serving  (in state)
    _modelJs.updateServings(newServings);
    //2) update the recipe view
    // recipeView.render(model.state.recipe);
    _recipeViewJsDefault.default.update(_modelJs.state.recipe);
};
const controlAddBookmark = function() {
    //1) ADD OR REMOVE BOOKMARKS
    if (!_modelJs.state.recipe.bookmarked) _modelJs.addBookmark(_modelJs.state.recipe);
    else _modelJs.deleteBookmark(_modelJs.state.recipe.id);
    //2) UPDATE RECIPE VIEW
    _recipeViewJsDefault.default.update(_modelJs.state.recipe);
    //3) RENDER BOOKMARKS
    _bookmarkViewJsDefault.default.render(_modelJs.state.bookmarks);
};
const controlBookmarks = function() {
    _bookmarkViewJsDefault.default.render(_modelJs.state.bookmarks);
};
const controlAddRecipe = async function(newRecipe) {
    try {
        //0) SHOW LOADING SPINNER
        _addRecipeViewJsDefault.default.renderSpinner();
        //1) UPLOAD THE NEW RECIPE
        await _modelJs.uploadRecipe(newRecipe);
        console.log(_modelJs.state.recipe);
        //2) RENDER RECIPE
        _recipeViewJsDefault.default.render(_modelJs.state.recipe);
        //3) SUCCESS MESAAGE FOR UPLOADING RECIPE
        _addRecipeViewJsDefault.default.renderMessage();
        //4) RENDER BOOKMARK
        _bookmarkViewJsDefault.default.render(_modelJs.state.bookmarks);
        //CHANGE ID IN URL
        window.history.pushState(null, '', `#{model.state.recipe.id}`);
        window.history.back();
        //5) CLOSE FORM WINDOW
        setTimeout(function() {
            _addRecipeViewJsDefault.default.toggleWindow();
        }, _configJs.MODEL_CLOSE_SEC * 1000);
    } catch (err) {
        console.log('❌❌', err);
        _addRecipeViewJsDefault.default.renderError(err.message);
    }
};
const init = function() {
    _bookmarkViewJsDefault.default.addHandlerRender(controlBookmarks);
    _recipeViewJsDefault.default.addHandlerRender(controlRecipes);
    _recipeViewJsDefault.default.addHandlerUpdateServings(controlServings);
    _recipeViewJsDefault.default.addHandlerAddBookmark(controlAddBookmark);
    _searchViewJsDefault.default.addHandlerSearch(controlSearchResults);
    _paginationViewJsDefault.default.addHandlerClick(controlPagination);
    _addRecipeViewJsDefault.default.addHandlerUpload(controlAddRecipe);
};
init();

},{"./model.js":"6Yfb5","./config.js":"beA2m","./views/recipeView.js":"9q0mt","./views/searchView.js":"51HTZ","./views/resultsView.js":"a6WEO","./views/paginationView.js":"c2v8w","./views/bookmarkView.js":"1r5Cz","./views/addRecipeView.js":"4NyJt","core-js/stable":"eIyVg","regenerator-runtime/runtime":"cH8Iq","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6Yfb5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe
);
parcelHelpers.export(exports, "loadSearchResult", ()=>loadSearchResult
);
parcelHelpers.export(exports, "getSearchResultspage", ()=>getSearchResultspage
);
parcelHelpers.export(exports, "updateServings", ()=>updateServings
);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark
);
parcelHelpers.export(exports, "deleteBookmark", ()=>deleteBookmark
);
parcelHelpers.export(exports, "uploadRecipe", ()=>uploadRecipe
);
var _regeneratorRuntime = require("regenerator-runtime");
var _configJs = require("./config.js");
// import { getJSON, sendJSON } from './helpers.js';
var _helpersJs = require("./helpers.js");
const state = {
    recipe: {
    },
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: _configJs.RES_PER_PAGE
    },
    bookmarks: []
};
const createRecipeObject = function(data) {
    const { recipe  } = data.data;
    return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
        ...recipe.key && {
            key: recipe.key
        }
    };
};
const loadRecipe = async function(id) {
    try {
        const data = await _helpersJs.AJAX(`${_configJs.API_URL}${id}?key=${_configJs.KEY}`);
        state.recipe = createRecipeObject(data);
        if (state.bookmarks.some((bookmark)=>bookmark.id === id
        )) state.recipe.bookmarked = true;
        else state.recipe.bookmarked = false;
    } catch (err) {
        //temp error handling
        // console.error(`${err} 😟☹️😓`);
        throw err;
    }
};
const loadSearchResult = async function(query) {
    try {
        state.search.query = query;
        const data = await _helpersJs.AJAX(`${_configJs.API_URL}?search=${query}&key=${_configJs.KEY}`);
        console.log(data);
        state.search.results = data.data.recipes.map((rec)=>{
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
                ...rec.key && {
                    key: rec.key
                }
            };
        });
        state.search.page = 1;
    } catch (err) {
        console.error(`${err} 😟☹️😓`);
        throw err;
    }
};
const getSearchResultspage = function(page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage; // 0
    const end = page * state.search.resultsPerPage; // 9
    return state.search.results.slice(start, end);
};
const updateServings = function(newServings) {
    state.recipe.ingredients.forEach((ing)=>{
        ing.quantity = ing.quantity * newServings / state.recipe.servings;
    //newQt = oldQt * newServings / oldServings // 2 * 8 / 4 = 4
    });
    state.recipe.servings = newServings;
};
const persistBookmarks = function() {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};
const addBookmark = function(recipe) {
    //ADD BOOKMARK
    state.bookmarks.push(recipe);
    //MARK CURRENT RECIPE AS BOOKMARKED
    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
    persistBookmarks();
};
const deleteBookmark = function(id) {
    //DELETE BOOKMARKED
    const index = state.bookmarks.findIndex((el)=>el.id === id
    );
    state.bookmarks.splice(index, 1);
    //MARK CURRENT RECIPE AS not BOOKMARKED
    if (id === state.recipe.id) state.recipe.bookmarked = false;
    persistBookmarks();
};
const init = function() {
    const storage = localStorage.getItem('bookmarks');
    if (storage) state.bookmarks = JSON.parse(storage);
};
init();
const clearBookmarks = function() {
    localStorage.clear('bookmarks');
};
const uploadRecipe = async function(newRecipe) {
    try {
        const ingredients = Object.entries(newRecipe).filter((entry)=>entry[0].startsWith('ingredient') && entry[1] !== ''
        ).map((ing)=>{
            // const ingArr = ing[1].replaceAll(' ', '').split(',');
            const ingArr = ing[1].split(',').map((el)=>el.trim()
            );
            if (ingArr.length !== 3) throw new Error('Wrong ingredient format! Please use the correct format 🙂');
            const [quantity, unit, description] = ingArr;
            return {
                quantity: quantity ? +quantity : null,
                unit,
                description
            };
        });
        const recipe = {
            title: newRecipe.title,
            source_url: newRecipe.sourceUrl,
            image_url: newRecipe.image,
            publisher: newRecipe.publisher,
            cooking_time: +newRecipe.cookingTime,
            servings: +newRecipe.servings,
            ingredients
        };
        const data = await _helpersJs.AJAX(`${_configJs.API_URL}?key=${_configJs.KEY}`, recipe);
        state.recipe = createRecipeObject(data);
        addBookmark(state.recipe);
    } catch (err) {
        throw err;
    }
};

},{"regenerator-runtime":"cH8Iq","./config.js":"beA2m","./helpers.js":"9l3Yy","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"cH8Iq":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {
    };
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({
        }, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {
    };
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {
    };
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value1) {
                    invoke("next", value1, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next mehtod, always terminate the
            // yield* loop.
            context.delegate = null;
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === "throw" && delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
            }
            if (methodName !== "return") {
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {
        };
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key1 = keys.pop();
                if (key1 in object) {
                    next.value = key1;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next1() {
                    while((++i) < iterable.length)if (hasOwn.call(iterable, i)) {
                        next1.value = iterable[i];
                        next1.done = false;
                        return next1;
                    }
                    next1.value = undefined;
                    next1.done = true;
                    return next1;
                };
                return next.next = next;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {
            };
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
typeof module === "object" ? module.exports : {
});
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"beA2m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL
);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC
);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE
);
parcelHelpers.export(exports, "KEY", ()=>KEY
);
parcelHelpers.export(exports, "MODEL_CLOSE_SEC", ()=>MODEL_CLOSE_SEC
);
const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/';
const TIMEOUT_SEC = 10;
const RES_PER_PAGE = 10;
const KEY = '388af28c-ef84-4865-b89b-f2c88aae1911';
const MODEL_CLOSE_SEC = 2.5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9l3Yy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AJAX", ()=>AJAX
);
var _regeneratorRuntime = require("regenerator-runtime");
var _configJs = require("./config.js");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const AJAX = async function(url, uploadData) {
    try {
        const fetchPro = uploadData ? fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(uploadData)
        }) : fetch(url);
        const res = await Promise.race([
            fetchPro,
            timeout(_configJs.TIMEOUT_SEC)
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} [${res.status}]`);
        return data;
    } catch (err) {
        throw err;
    }
}; /*
export const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} [${res.status}]`);
    return data;
  } catch (err) {
    throw err;
  }
};

//SEND DATA TO API
export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} [${res.status}]`);
    return data;
  } catch (err) {
    throw err;
  }
};
*/ 

},{"regenerator-runtime":"cH8Iq","./config.js":"beA2m","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"9q0mt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _fracty = require("fracty");
var _fractyDefault = parcelHelpers.interopDefault(_fracty);
// import { Fraction } from 'fractional';
class RecipeView extends _viewJsDefault.default {
    _parentElement = document.querySelector('.recipe');
    _errorMessage = `we couldn't find that recipe😓. Please try another one!🔃`;
    _message = '';
    addHandlerRender(handler) {
        [
            'hashchange',
            'load'
        ].forEach((ev)=>window.addEventListener(ev, handler)
        );
    }
    addHandlerUpdateServings(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--update-servings');
            if (!btn) return;
            const { updateTo  } = btn.dataset;
            if (+updateTo > 0) handler(+updateTo);
        });
    }
    addHandlerAddBookmark(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--bookmark');
            if (!btn) return;
            handler();
        });
    }
    _generateMarkup() {
        return `\n    <figure class="recipe__fig">\n          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" crossorigin/>\n          <h1 class="recipe__title">\n            <span>${this._data.title}</span>\n          </h1>\n        </figure>\n\n        <div class="recipe__details">\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${_iconsSvgDefault.default}#icon-clock"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n            <span class="recipe__info-text">minutes</span>\n          </div>\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${_iconsSvgDefault.default}#icon-users"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n            <span class="recipe__info-text">servings</span>\n\n            <div class="recipe__info-buttons">\n              <button class="btn--tiny btn--update-servings" data-update-to = ${this._data.servings - 1}>\n                <svg>\n                  <use href="${_iconsSvgDefault.default}#icon-minus-circle"></use>\n                </svg>\n              </button>\n              <button class="btn--tiny btn--update-servings" data-update-to = ${this._data.servings + 1}>\n                <svg>\n                  <use href="${_iconsSvgDefault.default}#icon-plus-circle"></use>\n                </svg>\n              </button>\n            </div>\n          </div>\n\n          <div class="recipe__user-generated ${this._data.key ? '' : 'hidden'}">\n          <svg>\n            <use href="${_iconsSvgDefault.default}#icon-user"></use>\n          </svg>\n        </div>\n          <button class="btn--round btn--bookmark">\n            <svg class="">\n              <use href="${_iconsSvgDefault.default}#icon-bookmark${this._data.bookmarked ? '-fill' : ''}"></use>\n            </svg>\n          </button>\n        </div>\n\n        <div class="recipe__ingredients">\n          <h2 class="heading--2">Recipe ingredients</h2>\n          <ul class="recipe__ingredient-list">\n\n            ${this._data.ingredients.map(this._generateMarkupIngredient).join('')}\n\n        </div>\n\n        <div class="recipe__directions">\n          <h2 class="heading--2">How to cook it</h2>\n          <p class="recipe__directions-text">\n            This recipe was carefully designed and tested by\n            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n            directions at their website.\n          </p>\n          <a\n            class="btn--small recipe__btn"\n            href="${this._data.sourceUrl}"\n            target="_blank"\n          >\n            <span>Directions</span>\n            <svg class="search__icon">\n              <use href="${_iconsSvgDefault.default}#icon-arrow-right"></use>\n            </svg>\n          </a>\n        </div>\n    `;
    }
    _generateMarkupIngredient(ing) {
        // console.log(fracty(ing.quantity).toString());
        return `\n  <li class="recipe__ingredient">\n  <svg class="recipe__icon">\n    <use href="${_iconsSvgDefault.default}#icon-check"></use>\n  </svg>\n  <div class="recipe__quantity">${ing.quantity ? _fractyDefault.default(ing.quantity).toString() : ''}</div>\n  <div class="recipe__description">\n    <span class="recipe__unit">${ing.unit}</span>\n    ${ing.description}\n  </div>\n</li>\n  `;
    }
}
exports.default = new RecipeView();

},{"./View.js":"8rtS4","url:../../img/icons.svg":"iwCpK","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","fracty":"cTuFN"}],"8rtS4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _data;
    _message = 'Uploaded successfully 🍽️';
    /**
   * Render the recived object on the DOM
   * @param {Object || Object[Array]} data the data to be rendered{e.g. data = recipe}
   * @param {boolean} [render = true] if false, create markup string instead of rendering to the dom 
   * @returns {undefined | string} A markup string is returned if render = false
   * @this {Object} View instant 
   * @author NIKHIL SATYAM
   * @todo finish implementation
   */ render(data, render = true) {
        if (!data || Array.isArray(data) && data.length == 0) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();
        if (!render) return markup;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();
        const newDom = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDom.querySelectorAll('*'));
        const curElements = Array.from(this._parentElement.querySelectorAll('*'));
        newElements.forEach((newEl, i)=>{
            const curEl = curElements[i];
            console.log(curEl, newEl.isEqualNode(curEl));
            //UPDATE CHANGED TEXT
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') // console.log(newEl.firstChild.nodeValue.trim(), '💬💬💬');
            curEl.textContent = newEl.textContent;
            //UPDATE CHANGE ATTRIBUTES
            if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((attr)=>curEl.setAttribute(attr.name, attr.value)
            );
        });
    }
    _clear() {
        this._parentElement.innerHTML = '';
    }
    renderSpinner() {
        const markup = `\n      <div class="spinner">\n              <svg>\n                <use href="${_iconsSvgDefault.default}#icon-loader"></use>\n              </svg>\n            </div>\n      `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderError(message = this._errorMessage) {
        const markup = `\n      <div class="error">\n              <div>\n                <svg>\n                  <use href="${_iconsSvgDefault.default}#icon-alert-triangle"></use>\n                </svg>\n              </div>\n              <p>${message}</p>\n            </div>\n      `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderMessage(message = this._message) {
        const markup = `\n      <div class="message">\n              <div>\n                <svg>\n                  <use href="${_iconsSvgDefault.default}#icon-smile"></use>\n                </svg>\n              </div>\n              <p>${message}</p>\n            </div>\n      `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}
exports.default = View;

},{"url:../../img/icons.svg":"iwCpK","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"iwCpK":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8LZRF') + "icons.c097e590.svg";

},{"./helpers/bundle-url":"8YnfL"}],"8YnfL":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"cTuFN":[function(require,module,exports) {
// FRACTY CONVERTS DECIMAL NUMBERS TO FRACTIONS BY ASSUMING THAT TRAILING PATTERNS FROM 10^-2 CONTINUE TO REPEAT
// The assumption is based on the most standard numbering conventions
// e.g. 3.51 will convert to 3 51/100 while 3.511 will convert to 3 23/45
// Throw any number up to 16 digits long at fracty and let fracy do the work.
// If number is beyond 16 digits fracty will truncate at 15 digits to compensate for roundoff errors created in IEEE 754 Floating Point conversion.
module.exports = function(number) {
    let type;
    if (number < 0) {
        number = Math.abs(number);
        type = '-';
    } else type = '';
    if (number === undefined) return `Your input was undefined.`;
    if (isNaN(number)) return `"${number}" is not a number.`;
    if (number == 10000000000000000) return `${type}9999999999999999`;
    if (number > 10000000000000000) return `Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.`;
    if (Number.isInteger(number)) return `${type}${number}`;
    if (number < 0.000001) return '0';
    const numberString = number.toString();
    const entry = numberString.split('.');
    let integer = entry[0];
    let decimal;
    if (decimal == '0' && integer !== '0') return integer;
    else if (decimal == '0' && integer == '0') return '0';
    else if (numberString.length >= 17) decimal = entry[1].slice(0, entry[1].length - 1);
    else decimal = entry[1];
    if (decimal == '99' && integer !== '0') return `${integer} 99/100`;
    else if (decimal == '99' && integer == '0') return `99/100`;
    else if (1 - parseFloat(`.${decimal}`) < 0.0011) decimal = '999';
    if (decimal == undefined) return integer;
    const decimalRev = decimal.split('').reverse().join(''); //Reverse the string to look for patterns.
    const patternSearch = /^(\d+)\1{1,2}/; //This greedy regex matches the biggest pattern that starts at the beginning of the string (at the end, in the case of the reversed string). A lazy regex doesn't work because it only identifies subpatterns in cases where subpatterns exist (e.g. '88' in '388388388388'), thus pattern capture must be greedy.
    let pattern = decimalRev.match(patternSearch); //If there's a pattern, it's full sequence is in [0] of this array and the single unit is in [1] but it may still need to be reduced further.
    if (pattern && decimal.length > 2) {
        let patternSequence = pattern[0].split('').reverse().join('');
        let endPattern = pattern[1].split('').reverse().join('');
        if (endPattern.length > 1) {
            let endPatternArray = endPattern.split('');
            let testSingleUnit = 1;
            for(let i = 0; i < endPatternArray.length; i++)testSingleUnit /= endPatternArray[0] / endPatternArray[i];
            if (testSingleUnit === 1) endPattern = endPatternArray[0];
        }
        if (endPattern.length > 1 && endPattern.length % 2 === 0) endPattern = parseInt(endPattern.slice(0, endPattern.length / 2), 10) - parseInt(endPattern.slice(endPattern.length / 2, endPattern.length), 10) === 0 ? endPattern.slice(0, endPattern.length / 2) : endPattern;
        return yesRepeat(decimal, endPattern, patternSequence, integer, type); //Begin calculating the numerator and denominator for decimals that have a pattern.
    } else return noRepeat(decimal, integer, type); //Begin calculating the numerator and denominator for decimals that don't have a pattern.
};
//IF THERE'S A TRAILING PATTERN FRACTY DIVIDES THE INPUT BY ONE SUBTRACTED FROM THE NEAREST BASE 10 NUMBER WITH NUMBER OF ZEROS EQUAL TO THE LENGTH OF THE REPEATED PATTERN (I.E. A SERIES OF 9'S) MULTIPLIED BY THE BASE 10 NUMBER GREATER THAN AND CLOSEST TO THE INPUT.
function yesRepeat(decimal, endPattern, patternSequence, integer, type) {
    const rep = true; //The numerator repeats.
    const nonPatternLength = decimal.length - patternSequence.length >= 1 ? decimal.length - patternSequence.length : 1; //Does the length of the non pattern segment of the input = 0? If it does, that's incorrect since we know it must equal at least 1, otherwise it's the length of the decimal input minus the length of the full pattern.
    const decimalMultiplier2 = Math.pow(10, nonPatternLength); //Second multiplier to use.
    const float = parseFloat(`0.${decimal}`); //Convert the decimal input to a floating point number.
    const decimalMultiplier1 = Math.pow(10, endPattern.length); //Find the right multiplier to use for both numerator and denominator, which will later have 1 subtracted from it in the case of the denominator.
    const numerator = Math.round((float * decimalMultiplier1 - float) * Math.pow(10, nonPatternLength)); //Find the numerator to be used in calculating the fraction that contains a repeating trailing sequence.
    const denominator = (decimalMultiplier1 - 1) * decimalMultiplier2; //Caluculate the denominator using the equation for repeating trailing sequences.
    return reduce(numerator, denominator, integer, type, rep); //Further reduce the numerator and denominator.
}
//IF THERE'S NO TRAILING PATTERN FRACTY DIVIDES THE INPUT BY THE NEAREST BASE 10 INTEGER GREATER THAN THE NUMERATOR.
function noRepeat(decimal, integer, type) {
    const rep = false; //The numerator doesn't repeat.
    const numerator = parseInt(decimal, 10); //Numerator begins as decimal input converted into an integer.
    const denominator = Math.pow(10, decimal.length); //Denominator begins as 10 to the power of the length of the numerator.
    return reduce(numerator, denominator, integer, type, rep); //Reduce the numerator and denominator.
}
//FRACTY REDUCES THE FRACTION.
function reduce(numerator, denominator, integer, type, rep) {
    const primeNumberArray = [
        2,
        3,
        5
    ]; //If the numerator isn't from a repeating decimal case, the initialized array of prime numbers will suffice to find the common denominators.
    if (rep === true) {
        for(let i = 3; i * i <= numerator; i += 2)if (numerator % i === 0) primeNumberArray.push(i);
    }
    let j = 0; //Initialize counter over the prime number array for the while loop.
    let comDenom = 1; //Initialize the common denominator.
    let num = numerator; //Initialize the numerator.
    let den = denominator; //Initialize the denominator.
    while(j <= primeNumberArray.length)if (num % primeNumberArray[j] === 0 && den % primeNumberArray[j] === 0) {
        comDenom = comDenom * primeNumberArray[j];
        num = num / primeNumberArray[j];
        den = den / primeNumberArray[j];
    } else j++;
    return returnStrings(den, num, integer, type);
}
//FRACTY RETURNS THE REDUCED FRACTION AS A STRING.
function returnStrings(den, num, integer, type) {
    if (den === 1 && num === 1) {
        integer = `${type}${(parseInt(integer) + 1).toString()}`; //Add 1 to the integer and return a string without a fraction.
        return `${integer}`;
    } else if (num === 0) return `${type}${integer}`;
    else if (integer == '0') return `${type}${num}/${den}`;
    else return `${type}${integer} ${num}/${den}`; //If there's an integer and a fraction return both.
}

},{}],"51HTZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    _parentEl = document.querySelector('.search');
    getQuery() {
        const query = this._parentEl.querySelector('.search__field').value;
        this.#clearInput();
        return query;
    }
     #clearInput() {
        this._parentEl.querySelector('.search__field').value = '';
    }
    addHandlerSearch(handler) {
        this._parentEl.addEventListener('submit', function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"a6WEO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _previewViewJs = require("./previewView.js");
var _previewViewJsDefault = parcelHelpers.interopDefault(_previewViewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class ResultsView extends _viewJsDefault.default {
    _parentElement = document.querySelector('.results');
    _errorMessage = `No recpies found for your query! Please try again🔃`;
    _message = '';
    _generateMarkup() {
        return this._data.map(this._generateMarkupPreview).join('');
    }
    _generateMarkup() {
        // console.log(this._data);
        return this._data.map((results)=>_previewViewJsDefault.default.render(results, false)
        ).join('');
    }
}
exports.default = new ResultsView();

},{"./View.js":"8rtS4","./previewView.js":"knRyY","url:../../img/icons.svg":"iwCpK","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"knRyY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PreviewView extends _viewJsDefault.default {
    _parentElement = '';
    _generateMarkup() {
        const id = window.location.hash.slice(1);
        return `\n    <li class="preview">\n    <a class="preview__link ${this._data.id === id ? 'preview__link--active' : ''}" href="#${this._data.id}">\n      <figure class="preview__fig">\n        <img src="${this._data.image}" alt="${this._data.title}"crossorigin />\n      </figure>\n      <div class="preview__data">\n        <h4 class="preview__title">${this._data.title}</h4>\n        <p class="preview__publisher">${this._data.publisher}</p>\n        <div class="preview__user-generated ${this._data.key ? '' : 'hidden'}">\n        <svg>\n        <use href="${_iconsSvgDefault.default}#icon-user"></use>\n        </svg>\n        </div>\n        </div>\n        </a>\n  </li>\n    `;
    }
}
exports.default = new PreviewView();

},{"./View.js":"8rtS4","url:../../img/icons.svg":"iwCpK","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"c2v8w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PaginationView extends _viewJsDefault.default {
    _parentElement = document.querySelector('.pagination');
    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--inline');
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        //page 1 , and there are other pages
        if (curPage === 1 && numPages > 1) return `\n        <button data-goto = "${curPage + 1}" class="btn--inline pagination__btn--next">\n        <span>Page ${curPage + 1}</span>\n        <svg class="search__icon">\n          <use href="${_iconsSvgDefault.default}#icon-arrow-right"></use>\n        </svg>\n      </button>\n      `;
        //last page
        if (curPage === numPages && numPages > 1) return `\n        <button data-goto = "${curPage - 1}"class="btn--inline pagination__btn--prev">\n        <svg class="search__icon">\n          <use href="${_iconsSvgDefault.default}#icon-arrow-left"></use>\n        </svg>\n        <span>${curPage - 1}</span>\n      </button>\n      `;
        //other page
        if (curPage < numPages) return `\n    <button data-goto = "${curPage - 1}" class="btn--inline pagination__btn--prev">\n    <svg class="search__icon">\n      <use href="${_iconsSvgDefault.default}#icon-arrow-left"></use>\n    </svg>\n    <span>${curPage - 1}</span>\n  </button>\n  <button data-goto = "${curPage + 1}" class="btn--inline pagination__btn--next">\n    <span>${curPage + 1}</span>\n    <svg class="search__icon">\n      <use href="${_iconsSvgDefault.default}#icon-arrow-right"></use>\n    </svg>\n  </button>\n   `;
        //page 1 , and there are  no more pages
        return '';
    }
}
exports.default = new PaginationView();

},{"./View.js":"8rtS4","url:../../img/icons.svg":"iwCpK","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"1r5Cz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _previewViewJs = require("./previewView.js");
var _previewViewJsDefault = parcelHelpers.interopDefault(_previewViewJs);
class BookmarskView extends _viewJsDefault.default {
    _parentElement = document.querySelector('.bookmarks__list');
    _errorMessage = `No bookmarks yet. Find a nice recipe and bookmark it;)`;
    _message = '';
    addHandlerRender(handler) {
        window.addEventListener('load', handler);
    }
    _generateMarkup() {
        return this._data.map((bookmark)=>_previewViewJsDefault.default.render(bookmark, false)
        ).join('');
    }
}
exports.default = new BookmarskView();

},{"./View.js":"8rtS4","url:../../img/icons.svg":"iwCpK","./previewView.js":"knRyY","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"4NyJt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class AddRecipeView extends _viewJsDefault.default {
    _parentElement = document.querySelector('.upload');
    _window = document.querySelector('.add-recipe-window');
    _overlay = document.querySelector('.overlay');
    _btnOpen = document.querySelector('.nav__btn--add-recipe');
    _btnClose = document.querySelector('.btn--close-modal');
    constructor(){
        super();
        this._addHandlerShowWindow();
        this._addHandlerHideWindow();
    }
    toggleWindow() {
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
    }
    _addHandlerShowWindow() {
        this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
    }
    _addHandlerHideWindow() {
        this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
        this._overlay.addEventListener('click', this.toggleWindow.bind(this));
    }
    addHandlerUpload(handler) {
        this._parentElement.addEventListener('submit', function(e) {
            e.preventDefault();
            const dataArr = [
                ...new FormData(this)
            ]; //browserAPI
            //   console.log(data);
            const data = Object.fromEntries(dataArr); // conversion on array to objects 
            handler(data);
        });
    }
    _generateMarkup() {
    }
}
exports.default = new AddRecipeView();

},{"./View.js":"8rtS4","url:../../img/icons.svg":"iwCpK","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"eIyVg":[function(require,module,exports) {
require('../modules/es.symbol');
require('../modules/es.symbol.description');
require('../modules/es.symbol.async-iterator');
require('../modules/es.symbol.has-instance');
require('../modules/es.symbol.is-concat-spreadable');
require('../modules/es.symbol.iterator');
require('../modules/es.symbol.match');
require('../modules/es.symbol.match-all');
require('../modules/es.symbol.replace');
require('../modules/es.symbol.search');
require('../modules/es.symbol.species');
require('../modules/es.symbol.split');
require('../modules/es.symbol.to-primitive');
require('../modules/es.symbol.to-string-tag');
require('../modules/es.symbol.unscopables');
require('../modules/es.error.cause');
require('../modules/es.error.to-string');
require('../modules/es.aggregate-error');
require('../modules/es.aggregate-error.cause');
require('../modules/es.array.at');
require('../modules/es.array.concat');
require('../modules/es.array.copy-within');
require('../modules/es.array.every');
require('../modules/es.array.fill');
require('../modules/es.array.filter');
require('../modules/es.array.find');
require('../modules/es.array.find-index');
require('../modules/es.array.find-last');
require('../modules/es.array.find-last-index');
require('../modules/es.array.flat');
require('../modules/es.array.flat-map');
require('../modules/es.array.for-each');
require('../modules/es.array.from');
require('../modules/es.array.includes');
require('../modules/es.array.index-of');
require('../modules/es.array.is-array');
require('../modules/es.array.iterator');
require('../modules/es.array.join');
require('../modules/es.array.last-index-of');
require('../modules/es.array.map');
require('../modules/es.array.of');
require('../modules/es.array.push');
require('../modules/es.array.reduce');
require('../modules/es.array.reduce-right');
require('../modules/es.array.reverse');
require('../modules/es.array.slice');
require('../modules/es.array.some');
require('../modules/es.array.sort');
require('../modules/es.array.species');
require('../modules/es.array.splice');
require('../modules/es.array.unscopables.flat');
require('../modules/es.array.unscopables.flat-map');
require('../modules/es.array.unshift');
require('../modules/es.array-buffer.constructor');
require('../modules/es.array-buffer.is-view');
require('../modules/es.array-buffer.slice');
require('../modules/es.data-view');
require('../modules/es.date.get-year');
require('../modules/es.date.now');
require('../modules/es.date.set-year');
require('../modules/es.date.to-gmt-string');
require('../modules/es.date.to-iso-string');
require('../modules/es.date.to-json');
require('../modules/es.date.to-primitive');
require('../modules/es.date.to-string');
require('../modules/es.escape');
require('../modules/es.function.bind');
require('../modules/es.function.has-instance');
require('../modules/es.function.name');
require('../modules/es.global-this');
require('../modules/es.json.stringify');
require('../modules/es.json.to-string-tag');
require('../modules/es.map');
require('../modules/es.math.acosh');
require('../modules/es.math.asinh');
require('../modules/es.math.atanh');
require('../modules/es.math.cbrt');
require('../modules/es.math.clz32');
require('../modules/es.math.cosh');
require('../modules/es.math.expm1');
require('../modules/es.math.fround');
require('../modules/es.math.hypot');
require('../modules/es.math.imul');
require('../modules/es.math.log10');
require('../modules/es.math.log1p');
require('../modules/es.math.log2');
require('../modules/es.math.sign');
require('../modules/es.math.sinh');
require('../modules/es.math.tanh');
require('../modules/es.math.to-string-tag');
require('../modules/es.math.trunc');
require('../modules/es.number.constructor');
require('../modules/es.number.epsilon');
require('../modules/es.number.is-finite');
require('../modules/es.number.is-integer');
require('../modules/es.number.is-nan');
require('../modules/es.number.is-safe-integer');
require('../modules/es.number.max-safe-integer');
require('../modules/es.number.min-safe-integer');
require('../modules/es.number.parse-float');
require('../modules/es.number.parse-int');
require('../modules/es.number.to-exponential');
require('../modules/es.number.to-fixed');
require('../modules/es.number.to-precision');
require('../modules/es.object.assign');
require('../modules/es.object.create');
require('../modules/es.object.define-getter');
require('../modules/es.object.define-properties');
require('../modules/es.object.define-property');
require('../modules/es.object.define-setter');
require('../modules/es.object.entries');
require('../modules/es.object.freeze');
require('../modules/es.object.from-entries');
require('../modules/es.object.get-own-property-descriptor');
require('../modules/es.object.get-own-property-descriptors');
require('../modules/es.object.get-own-property-names');
require('../modules/es.object.get-prototype-of');
require('../modules/es.object.has-own');
require('../modules/es.object.is');
require('../modules/es.object.is-extensible');
require('../modules/es.object.is-frozen');
require('../modules/es.object.is-sealed');
require('../modules/es.object.keys');
require('../modules/es.object.lookup-getter');
require('../modules/es.object.lookup-setter');
require('../modules/es.object.prevent-extensions');
require('../modules/es.object.proto');
require('../modules/es.object.seal');
require('../modules/es.object.set-prototype-of');
require('../modules/es.object.to-string');
require('../modules/es.object.values');
require('../modules/es.parse-float');
require('../modules/es.parse-int');
require('../modules/es.promise');
require('../modules/es.promise.all-settled');
require('../modules/es.promise.any');
require('../modules/es.promise.finally');
require('../modules/es.reflect.apply');
require('../modules/es.reflect.construct');
require('../modules/es.reflect.define-property');
require('../modules/es.reflect.delete-property');
require('../modules/es.reflect.get');
require('../modules/es.reflect.get-own-property-descriptor');
require('../modules/es.reflect.get-prototype-of');
require('../modules/es.reflect.has');
require('../modules/es.reflect.is-extensible');
require('../modules/es.reflect.own-keys');
require('../modules/es.reflect.prevent-extensions');
require('../modules/es.reflect.set');
require('../modules/es.reflect.set-prototype-of');
require('../modules/es.reflect.to-string-tag');
require('../modules/es.regexp.constructor');
require('../modules/es.regexp.dot-all');
require('../modules/es.regexp.exec');
require('../modules/es.regexp.flags');
require('../modules/es.regexp.sticky');
require('../modules/es.regexp.test');
require('../modules/es.regexp.to-string');
require('../modules/es.set');
require('../modules/es.string.at-alternative');
require('../modules/es.string.code-point-at');
require('../modules/es.string.ends-with');
require('../modules/es.string.from-code-point');
require('../modules/es.string.includes');
require('../modules/es.string.iterator');
require('../modules/es.string.match');
require('../modules/es.string.match-all');
require('../modules/es.string.pad-end');
require('../modules/es.string.pad-start');
require('../modules/es.string.raw');
require('../modules/es.string.repeat');
require('../modules/es.string.replace');
require('../modules/es.string.replace-all');
require('../modules/es.string.search');
require('../modules/es.string.split');
require('../modules/es.string.starts-with');
require('../modules/es.string.substr');
require('../modules/es.string.trim');
require('../modules/es.string.trim-end');
require('../modules/es.string.trim-start');
require('../modules/es.string.anchor');
require('../modules/es.string.big');
require('../modules/es.string.blink');
require('../modules/es.string.bold');
require('../modules/es.string.fixed');
require('../modules/es.string.fontcolor');
require('../modules/es.string.fontsize');
require('../modules/es.string.italics');
require('../modules/es.string.link');
require('../modules/es.string.small');
require('../modules/es.string.strike');
require('../modules/es.string.sub');
require('../modules/es.string.sup');
require('../modules/es.typed-array.float32-array');
require('../modules/es.typed-array.float64-array');
require('../modules/es.typed-array.int8-array');
require('../modules/es.typed-array.int16-array');
require('../modules/es.typed-array.int32-array');
require('../modules/es.typed-array.uint8-array');
require('../modules/es.typed-array.uint8-clamped-array');
require('../modules/es.typed-array.uint16-array');
require('../modules/es.typed-array.uint32-array');
require('../modules/es.typed-array.at');
require('../modules/es.typed-array.copy-within');
require('../modules/es.typed-array.every');
require('../modules/es.typed-array.fill');
require('../modules/es.typed-array.filter');
require('../modules/es.typed-array.find');
require('../modules/es.typed-array.find-index');
require('../modules/es.typed-array.find-last');
require('../modules/es.typed-array.find-last-index');
require('../modules/es.typed-array.for-each');
require('../modules/es.typed-array.from');
require('../modules/es.typed-array.includes');
require('../modules/es.typed-array.index-of');
require('../modules/es.typed-array.iterator');
require('../modules/es.typed-array.join');
require('../modules/es.typed-array.last-index-of');
require('../modules/es.typed-array.map');
require('../modules/es.typed-array.of');
require('../modules/es.typed-array.reduce');
require('../modules/es.typed-array.reduce-right');
require('../modules/es.typed-array.reverse');
require('../modules/es.typed-array.set');
require('../modules/es.typed-array.slice');
require('../modules/es.typed-array.some');
require('../modules/es.typed-array.sort');
require('../modules/es.typed-array.subarray');
require('../modules/es.typed-array.to-locale-string');
require('../modules/es.typed-array.to-string');
require('../modules/es.unescape');
require('../modules/es.weak-map');
require('../modules/es.weak-set');
require('../modules/web.atob');
require('../modules/web.btoa');
require('../modules/web.dom-collections.for-each');
require('../modules/web.dom-collections.iterator');
require('../modules/web.dom-exception.constructor');
require('../modules/web.dom-exception.stack');
require('../modules/web.dom-exception.to-string-tag');
require('../modules/web.immediate');
require('../modules/web.queue-microtask');
require('../modules/web.self');
require('../modules/web.structured-clone');
require('../modules/web.timers');
require('../modules/web.url');
require('../modules/web.url.to-json');
require('../modules/web.url-search-params');
module.exports = require('../internals/path');

},{"../modules/es.symbol":"h82Ta","../modules/es.symbol.description":"k6qTH","../modules/es.symbol.async-iterator":"4gQKh","../modules/es.symbol.has-instance":"6rypY","../modules/es.symbol.is-concat-spreadable":"8cPMJ","../modules/es.symbol.iterator":"54Wkt","../modules/es.symbol.match":"fci7y","../modules/es.symbol.match-all":"LEHqP","../modules/es.symbol.replace":"emMne","../modules/es.symbol.search":"1pJ8K","../modules/es.symbol.species":"aUPm6","../modules/es.symbol.split":"h3StJ","../modules/es.symbol.to-primitive":"jiMen","../modules/es.symbol.to-string-tag":"2Dw1B","../modules/es.symbol.unscopables":"dad1W","../modules/es.error.cause":"7zL7J","../modules/es.error.to-string":"lg5LZ","../modules/es.aggregate-error":"iQYvV","../modules/es.aggregate-error.cause":"dM4br","../modules/es.array.at":"a6ezL","../modules/es.array.concat":"12BiX","../modules/es.array.copy-within":"6Qlz9","../modules/es.array.every":"isBXe","../modules/es.array.fill":"48CiI","../modules/es.array.filter":"cKRrG","../modules/es.array.find":"eHU6M","../modules/es.array.find-index":"kfYJb","../modules/es.array.find-last":"30lYj","../modules/es.array.find-last-index":"k37k1","../modules/es.array.flat":"am9Da","../modules/es.array.flat-map":"cMHMc","../modules/es.array.for-each":"aTBjZ","../modules/es.array.from":"fUGae","../modules/es.array.includes":"X9Fp2","../modules/es.array.index-of":"gpPtE","../modules/es.array.is-array":"9vHDR","../modules/es.array.iterator":"8YPvt","../modules/es.array.join":"fcdvD","../modules/es.array.last-index-of":"bVRYF","../modules/es.array.map":"g11io","../modules/es.array.of":"hwsFe","../modules/es.array.push":"hCu3r","../modules/es.array.reduce":"iTsnC","../modules/es.array.reduce-right":"dTOyk","../modules/es.array.reverse":"4H4sw","../modules/es.array.slice":"1Qy0K","../modules/es.array.some":"3MKkN","../modules/es.array.sort":"6yoc0","../modules/es.array.species":"5m0CI","../modules/es.array.splice":"65ZuR","../modules/es.array.unscopables.flat":"hIgzb","../modules/es.array.unscopables.flat-map":"2lymx","../modules/es.array.unshift":"6BlSY","../modules/es.array-buffer.constructor":"4p0zL","../modules/es.array-buffer.is-view":"30MAW","../modules/es.array-buffer.slice":"ktSH3","../modules/es.data-view":"6n7Um","../modules/es.date.get-year":"e1hhS","../modules/es.date.now":"lGf1w","../modules/es.date.set-year":"4GJ8v","../modules/es.date.to-gmt-string":"dNoww","../modules/es.date.to-iso-string":"7mzsp","../modules/es.date.to-json":"ay4bx","../modules/es.date.to-primitive":"fObwG","../modules/es.date.to-string":"7pcaU","../modules/es.escape":"7stNY","../modules/es.function.bind":"jrjf4","../modules/es.function.has-instance":"9on83","../modules/es.function.name":"2tRvX","../modules/es.global-this":"JI3Gz","../modules/es.json.stringify":"2B2ps","../modules/es.json.to-string-tag":"6YcXi","../modules/es.map":"dgMLm","../modules/es.math.acosh":"6Q3zo","../modules/es.math.asinh":"d1XOI","../modules/es.math.atanh":"5D0SG","../modules/es.math.cbrt":"l5TVA","../modules/es.math.clz32":"bJrnh","../modules/es.math.cosh":"6w8zd","../modules/es.math.expm1":"9DJbl","../modules/es.math.fround":"6tufR","../modules/es.math.hypot":"aSB3F","../modules/es.math.imul":"5Tpna","../modules/es.math.log10":"bTcHD","../modules/es.math.log1p":"jNyU5","../modules/es.math.log2":"2m7Uz","../modules/es.math.sign":"7yRUV","../modules/es.math.sinh":"loaKI","../modules/es.math.tanh":"dwPS4","../modules/es.math.to-string-tag":"96Wzg","../modules/es.math.trunc":"31xhu","../modules/es.number.constructor":"5DN40","../modules/es.number.epsilon":"6N90G","../modules/es.number.is-finite":"hI7wQ","../modules/es.number.is-integer":"57kzb","../modules/es.number.is-nan":"aJ0lS","../modules/es.number.is-safe-integer":"2sa8K","../modules/es.number.max-safe-integer":"ceCFQ","../modules/es.number.min-safe-integer":"cfRrX","../modules/es.number.parse-float":"9MahJ","../modules/es.number.parse-int":"lJYd7","../modules/es.number.to-exponential":"hD9Ee","../modules/es.number.to-fixed":"THlev","../modules/es.number.to-precision":"kVGGb","../modules/es.object.assign":"6ZqF3","../modules/es.object.create":"2xLMD","../modules/es.object.define-getter":"606Pz","../modules/es.object.define-properties":"fJ9J2","../modules/es.object.define-property":"59EGR","../modules/es.object.define-setter":"cFhpw","../modules/es.object.entries":"e5Xxq","../modules/es.object.freeze":"312H3","../modules/es.object.from-entries":"e3o3h","../modules/es.object.get-own-property-descriptor":"ihm1S","../modules/es.object.get-own-property-descriptors":"9OScw","../modules/es.object.get-own-property-names":"iic1E","../modules/es.object.get-prototype-of":"e7kbe","../modules/es.object.has-own":"kYyCh","../modules/es.object.is":"5qpSm","../modules/es.object.is-extensible":"5Df9G","../modules/es.object.is-frozen":"jrP45","../modules/es.object.is-sealed":"9946V","../modules/es.object.keys":"boYMK","../modules/es.object.lookup-getter":"TD7HT","../modules/es.object.lookup-setter":"chseq","../modules/es.object.prevent-extensions":"YDDty","../modules/es.object.proto":"dBPmi","../modules/es.object.seal":"81CbY","../modules/es.object.set-prototype-of":"kDpCL","../modules/es.object.to-string":"bBRVN","../modules/es.object.values":"gTDYu","../modules/es.parse-float":"iXVt6","../modules/es.parse-int":"dHCty","../modules/es.promise":"kYha9","../modules/es.promise.all-settled":"iKqpp","../modules/es.promise.any":"8inPk","../modules/es.promise.finally":"bPigD","../modules/es.reflect.apply":"lncJ8","../modules/es.reflect.construct":"ff1SM","../modules/es.reflect.define-property":"dW0sW","../modules/es.reflect.delete-property":"7DsVb","../modules/es.reflect.get":"jaVFn","../modules/es.reflect.get-own-property-descriptor":"kVW26","../modules/es.reflect.get-prototype-of":"hBOtV","../modules/es.reflect.has":"gTbyP","../modules/es.reflect.is-extensible":"VG7RE","../modules/es.reflect.own-keys":"8moRG","../modules/es.reflect.prevent-extensions":"gMzOv","../modules/es.reflect.set":"9isA9","../modules/es.reflect.set-prototype-of":"6hNd3","../modules/es.reflect.to-string-tag":"99fpE","../modules/es.regexp.constructor":"dwe4v","../modules/es.regexp.dot-all":"1u6bJ","../modules/es.regexp.exec":"lySIs","../modules/es.regexp.flags":"ecNn9","../modules/es.regexp.sticky":"j9bjG","../modules/es.regexp.test":"iP2j2","../modules/es.regexp.to-string":"7sKSf","../modules/es.set":"5wbk0","../modules/es.string.at-alternative":"4aHj5","../modules/es.string.code-point-at":"fviUF","../modules/es.string.ends-with":"i8dBj","../modules/es.string.from-code-point":"kP5Lw","../modules/es.string.includes":"c28Iv","../modules/es.string.iterator":"79oCt","../modules/es.string.match":"3bQbi","../modules/es.string.match-all":"jEeAs","../modules/es.string.pad-end":"fEFFM","../modules/es.string.pad-start":"coZy7","../modules/es.string.raw":"d9wUa","../modules/es.string.repeat":"7f2Bv","../modules/es.string.replace":"2k8lL","../modules/es.string.replace-all":"8IJOq","../modules/es.string.search":"9LcVn","../modules/es.string.split":"5yIFY","../modules/es.string.starts-with":"5IlYf","../modules/es.string.substr":"ffj2Y","../modules/es.string.trim":"1UwM0","../modules/es.string.trim-end":"67bv8","../modules/es.string.trim-start":"cbyCh","../modules/es.string.anchor":"h582X","../modules/es.string.big":"gSDtA","../modules/es.string.blink":"lTrep","../modules/es.string.bold":"kk4wr","../modules/es.string.fixed":"kdH1X","../modules/es.string.fontcolor":"412V5","../modules/es.string.fontsize":"7TWRa","../modules/es.string.italics":"iOrbm","../modules/es.string.link":"3BgXC","../modules/es.string.small":"7usyq","../modules/es.string.strike":"6sGtc","../modules/es.string.sub":"k998D","../modules/es.string.sup":"a5Yf5","../modules/es.typed-array.float32-array":"f9m3z","../modules/es.typed-array.float64-array":"ky6XR","../modules/es.typed-array.int8-array":"lEs7k","../modules/es.typed-array.int16-array":"5EyRk","../modules/es.typed-array.int32-array":"cDL8j","../modules/es.typed-array.uint8-array":"2HsmO","../modules/es.typed-array.uint8-clamped-array":"dFa8q","../modules/es.typed-array.uint16-array":"aykHi","../modules/es.typed-array.uint32-array":"2oUhq","../modules/es.typed-array.at":"bgRol","../modules/es.typed-array.copy-within":"3ktIi","../modules/es.typed-array.every":"5DxE6","../modules/es.typed-array.fill":"fqjtk","../modules/es.typed-array.filter":"1uzjz","../modules/es.typed-array.find":"d7VSQ","../modules/es.typed-array.find-index":"llIwb","../modules/es.typed-array.find-last":"djJ0P","../modules/es.typed-array.find-last-index":"M3311","../modules/es.typed-array.for-each":"Wrhx0","../modules/es.typed-array.from":"fgrPV","../modules/es.typed-array.includes":"afXwJ","../modules/es.typed-array.index-of":"ffWJN","../modules/es.typed-array.iterator":"dWqIW","../modules/es.typed-array.join":"30Fjw","../modules/es.typed-array.last-index-of":"fUt12","../modules/es.typed-array.map":"abKo8","../modules/es.typed-array.of":"aASoo","../modules/es.typed-array.reduce":"cw3bd","../modules/es.typed-array.reduce-right":"fIIbY","../modules/es.typed-array.reverse":"aYS8V","../modules/es.typed-array.set":"4UlXb","../modules/es.typed-array.slice":"fmByv","../modules/es.typed-array.some":"adzA5","../modules/es.typed-array.sort":"7J6wI","../modules/es.typed-array.subarray":"ghLDl","../modules/es.typed-array.to-locale-string":"kaAyh","../modules/es.typed-array.to-string":"4lkfC","../modules/es.unescape":"gnnik","../modules/es.weak-map":"7VYon","../modules/es.weak-set":"kMVCu","../modules/web.atob":"80OaX","../modules/web.btoa":"9fZsv","../modules/web.dom-collections.for-each":"917na","../modules/web.dom-collections.iterator":"gC8gE","../modules/web.dom-exception.constructor":"igNny","../modules/web.dom-exception.stack":"g5teZ","../modules/web.dom-exception.to-string-tag":"eAdtV","../modules/web.immediate":"6VxKM","../modules/web.queue-microtask":"kIUUV","../modules/web.self":"2XA4X","../modules/web.structured-clone":"goekr","../modules/web.timers":"8IM6S","../modules/web.url":"c61iN","../modules/web.url.to-json":"fBskR","../modules/web.url-search-params":"dj0GL","../internals/path":"cV4BF"}],"h82Ta":[function(require,module,exports) {
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require('../modules/es.symbol.constructor');
require('../modules/es.symbol.for');
require('../modules/es.symbol.key-for');
require('../modules/es.json.stringify');
require('../modules/es.object.get-own-property-symbols');

},{"../modules/es.symbol.constructor":"56xsC","../modules/es.symbol.for":"idnIg","../modules/es.symbol.key-for":"d7e2i","../modules/es.json.stringify":"2B2ps","../modules/es.object.get-own-property-symbols":"89aLI"}],"56xsC":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var global = require('../internals/global');
var call = require('../internals/function-call');
var uncurryThis = require('../internals/function-uncurry-this');
var IS_PURE = require('../internals/is-pure');
var DESCRIPTORS = require('../internals/descriptors');
var NATIVE_SYMBOL = require('../internals/symbol-constructor-detection');
var fails = require('../internals/fails');
var hasOwn = require('../internals/has-own-property');
var isPrototypeOf = require('../internals/object-is-prototype-of');
var anObject = require('../internals/an-object');
var toIndexedObject = require('../internals/to-indexed-object');
var toPropertyKey = require('../internals/to-property-key');
var $toString = require('../internals/to-string');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var nativeObjectCreate = require('../internals/object-create');
var objectKeys = require('../internals/object-keys');
var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');
var getOwnPropertyNamesExternal = require('../internals/object-get-own-property-names-external');
var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var definePropertyModule = require('../internals/object-define-property');
var definePropertiesModule = require('../internals/object-define-properties');
var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
var defineBuiltIn = require('../internals/define-built-in');
var shared = require('../internals/shared');
var sharedKey = require('../internals/shared-key');
var hiddenKeys = require('../internals/hidden-keys');
var uid = require('../internals/uid');
var wellKnownSymbol = require('../internals/well-known-symbol');
var wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped');
var defineWellKnownSymbol = require('../internals/well-known-symbol-define');
var defineSymbolToPrimitive = require('../internals/symbol-define-to-primitive');
var setToStringTag = require('../internals/set-to-string-tag');
var InternalStateModule = require('../internals/internal-state');
var $forEach = require('../internals/array-iteration').forEach;
var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError1 = global.TypeError;
var QObject = global.QObject;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var WellKnownSymbolsStore = shared('wks');
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function() {
    return nativeObjectCreate(nativeDefineProperty({
    }, 'a', {
        get: function() {
            return nativeDefineProperty(this, 'a', {
                value: 7
            }).a;
        }
    })).a != 7;
}) ? function(O, P, Attributes) {
    var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
    if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
    nativeDefineProperty(O, P, Attributes);
    if (ObjectPrototypeDescriptor && O !== ObjectPrototype) nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
} : nativeDefineProperty;
var wrap = function(tag, description) {
    var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
    setInternalState(symbol, {
        type: SYMBOL,
        tag: tag,
        description: description
    });
    if (!DESCRIPTORS) symbol.description = description;
    return symbol;
};
var $defineProperty = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
    anObject(O);
    var key = toPropertyKey(P);
    anObject(Attributes);
    if (hasOwn(AllSymbols, key)) {
        if (!Attributes.enumerable) {
            if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {
            }));
            O[HIDDEN][key] = true;
        } else {
            if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
            Attributes = nativeObjectCreate(Attributes, {
                enumerable: createPropertyDescriptor(0, false)
            });
        }
        return setSymbolDescriptor(O, key, Attributes);
    }
    return nativeDefineProperty(O, key, Attributes);
};
var $defineProperties = function defineProperties(O, Properties) {
    anObject(O);
    var properties = toIndexedObject(Properties);
    var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
    $forEach(keys, function(key) {
        if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
    });
    return O;
};
var $create = function create(O, Properties) {
    return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};
var $propertyIsEnumerable = function propertyIsEnumerable(V) {
    var P = toPropertyKey(V);
    var enumerable = call(nativePropertyIsEnumerable, this, P);
    if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
    return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject(O);
    var key = toPropertyKey(P);
    if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
    var descriptor = nativeGetOwnPropertyDescriptor(it, key);
    if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) descriptor.enumerable = true;
    return descriptor;
};
var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames(toIndexedObject(O));
    var result = [];
    $forEach(names, function(key) {
        if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
    });
    return result;
};
var $getOwnPropertySymbols = function(O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
    var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
    var result = [];
    $forEach(names, function(key) {
        if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) push(result, AllSymbols[key]);
    });
    return result;
};
// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
    $Symbol = function Symbol1() {
        if (isPrototypeOf(SymbolPrototype, this)) throw TypeError1('Symbol is not a constructor');
        var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
        var tag = uid(description);
        var setter = function(value) {
            if (this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
            if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
            setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
        };
        if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {
            configurable: true,
            set: setter
        });
        return wrap(tag, description);
    };
    SymbolPrototype = $Symbol[PROTOTYPE];
    defineBuiltIn(SymbolPrototype, 'toString', function toString() {
        return getInternalState(this).tag;
    });
    defineBuiltIn($Symbol, 'withoutSetter', function(description) {
        return wrap(uid(description), description);
    });
    propertyIsEnumerableModule.f = $propertyIsEnumerable;
    definePropertyModule.f = $defineProperty;
    definePropertiesModule.f = $defineProperties;
    getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
    getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;
    wrappedWellKnownSymbolModule.f = function(name) {
        return wrap(wellKnownSymbol(name), name);
    };
    if (DESCRIPTORS) {
        // https://github.com/tc39/proposal-Symbol-description
        nativeDefineProperty(SymbolPrototype, 'description', {
            configurable: true,
            get: function description() {
                return getInternalState(this).description;
            }
        });
        if (!IS_PURE) defineBuiltIn(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {
            unsafe: true
        });
    }
}
$({
    global: true,
    constructor: true,
    wrap: true,
    forced: !NATIVE_SYMBOL,
    sham: !NATIVE_SYMBOL
}, {
    Symbol: $Symbol
});
$forEach(objectKeys(WellKnownSymbolsStore), function(name) {
    defineWellKnownSymbol(name);
});
$({
    target: SYMBOL,
    stat: true,
    forced: !NATIVE_SYMBOL
}, {
    useSetter: function() {
        USE_SETTER = true;
    },
    useSimple: function() {
        USE_SETTER = false;
    }
});
$({
    target: 'Object',
    stat: true,
    forced: !NATIVE_SYMBOL,
    sham: !DESCRIPTORS
}, {
    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    create: $create,
    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    defineProperty: $defineProperty,
    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    defineProperties: $defineProperties,
    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});
$({
    target: 'Object',
    stat: true,
    forced: !NATIVE_SYMBOL
}, {
    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    getOwnPropertyNames: $getOwnPropertyNames
});
// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);
hiddenKeys[HIDDEN] = true;

},{"../internals/export":"2mZbc","../internals/global":"a4GR8","../internals/function-call":"d0MId","../internals/function-uncurry-this":"gBsQL","../internals/is-pure":"dlbEd","../internals/descriptors":"kuDzl","../internals/symbol-constructor-detection":"kX1Pa","../internals/fails":"byxLb","../internals/has-own-property":"kL9Yw","../internals/object-is-prototype-of":"gFfbX","../internals/an-object":"9unxM","../internals/to-indexed-object":"9N8sJ","../internals/to-property-key":"99Lby","../internals/to-string":"k0ZQF","../internals/create-property-descriptor":"5fdHA","../internals/object-create":"eYZeq","../internals/object-keys":"7so9x","../internals/object-get-own-property-names":"38UqD","../internals/object-get-own-property-names-external":"ivjog","../internals/object-get-own-property-symbols":"3jR7g","../internals/object-get-own-property-descriptor":"hwpsT","../internals/object-define-property":"iKHmb","../internals/object-define-properties":"4aS77","../internals/object-property-is-enumerable":"6JYDE","../internals/define-built-in":"dTyng","../internals/shared":"ic92G","../internals/shared-key":"65Tv5","../internals/hidden-keys":"8TVAY","../internals/uid":"9DssZ","../internals/well-known-symbol":"6sZ59","../internals/well-known-symbol-wrapped":"6xsru","../internals/well-known-symbol-define":"gciZu","../internals/symbol-define-to-primitive":"5q03H","../internals/set-to-string-tag":"cFbSt","../internals/internal-state":"ceuiK","../internals/array-iteration":"ciNJ0"}],"2mZbc":[function(require,module,exports) {
var global = require('../internals/global');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var defineBuiltIn = require('../internals/define-built-in');
var defineGlobalProperty = require('../internals/define-global-property');
var copyConstructorProperties = require('../internals/copy-constructor-properties');
var isForced = require('../internals/is-forced');
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || defineGlobalProperty(TARGET, {
    });
    else target = (global[TARGET] || {
    }).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, 'sham', true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"../internals/global":"a4GR8","../internals/object-get-own-property-descriptor":"hwpsT","../internals/create-non-enumerable-property":"73EkF","../internals/define-built-in":"dTyng","../internals/define-global-property":"jo6Uf","../internals/copy-constructor-properties":"4qgKG","../internals/is-forced":"djqhI"}],"a4GR8":[function(require,module,exports) {
var global = arguments[3];
var check = function(it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof global == 'object' && global) || // eslint-disable-next-line no-new-func -- fallback
(function() {
    return this;
})() || Function('return this')();

},{}],"hwpsT":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var call = require('../internals/function-call');
var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var toIndexedObject = require('../internals/to-indexed-object');
var toPropertyKey = require('../internals/to-property-key');
var hasOwn = require('../internals/has-own-property');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {
    }
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"../internals/descriptors":"kuDzl","../internals/function-call":"d0MId","../internals/object-property-is-enumerable":"6JYDE","../internals/create-property-descriptor":"5fdHA","../internals/to-indexed-object":"9N8sJ","../internals/to-property-key":"99Lby","../internals/has-own-property":"kL9Yw","../internals/ie8-dom-define":"5FQkl"}],"kuDzl":[function(require,module,exports) {
var fails = require('../internals/fails');
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({
    }, 1, {
        get: function() {
            return 7;
        }
    })[1] != 7;
});

},{"../internals/fails":"byxLb"}],"byxLb":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"d0MId":[function(require,module,exports) {
var NATIVE_BIND = require('../internals/function-bind-native');
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"../internals/function-bind-native":"7nsE4"}],"7nsE4":[function(require,module,exports) {
var fails = require('../internals/fails');
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {
    }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
});

},{"../internals/fails":"byxLb"}],"6JYDE":[function(require,module,exports) {
'use strict';
var $propertyIsEnumerable = {
}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"5fdHA":[function(require,module,exports) {
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"9N8sJ":[function(require,module,exports) {
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require('../internals/indexed-object');
var requireObjectCoercible = require('../internals/require-object-coercible');
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"../internals/indexed-object":"1hg9G","../internals/require-object-coercible":"1XURO"}],"1hg9G":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var fails = require('../internals/fails');
var classof = require('../internals/classof-raw');
var $Object = Object;
var split = uncurryThis(''.split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object('z').propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;

},{"../internals/function-uncurry-this":"gBsQL","../internals/fails":"byxLb","../internals/classof-raw":"8F0bi"}],"gBsQL":[function(require,module,exports) {
var NATIVE_BIND = require('../internals/function-bind-native');
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
        return call.apply(fn, arguments);
    };
};

},{"../internals/function-bind-native":"7nsE4"}],"8F0bi":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var toString = uncurryThis({
}.toString);
var stringSlice = uncurryThis(''.slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"../internals/function-uncurry-this":"gBsQL"}],"1XURO":[function(require,module,exports) {
var isNullOrUndefined = require('../internals/is-null-or-undefined');
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
    return it;
};

},{"../internals/is-null-or-undefined":"kssQ6"}],"kssQ6":[function(require,module,exports) {
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"99Lby":[function(require,module,exports) {
var toPrimitive = require('../internals/to-primitive');
var isSymbol = require('../internals/is-symbol');
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
};

},{"../internals/to-primitive":"LSiNW","../internals/is-symbol":"hfIC8"}],"LSiNW":[function(require,module,exports) {
var call = require('../internals/function-call');
var isObject = require('../internals/is-object');
var isSymbol = require('../internals/is-symbol');
var getMethod = require('../internals/get-method');
var ordinaryToPrimitive = require('../internals/ordinary-to-primitive');
var wellKnownSymbol = require('../internals/well-known-symbol');
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = 'default';
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
};

},{"../internals/function-call":"d0MId","../internals/is-object":"d60Kc","../internals/is-symbol":"hfIC8","../internals/get-method":"8DyNd","../internals/ordinary-to-primitive":"1rrrl","../internals/well-known-symbol":"6sZ59"}],"d60Kc":[function(require,module,exports) {
var isCallable = require('../internals/is-callable');
var $documentAll = require('../internals/document-all');
var documentAll = $documentAll.all;
module.exports = $documentAll.IS_HTMLDDA ? function(it) {
    return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function(it) {
    return typeof it == 'object' ? it !== null : isCallable(it);
};

},{"../internals/is-callable":"41EnZ","../internals/document-all":"blYm2"}],"41EnZ":[function(require,module,exports) {
var $documentAll = require('../internals/document-all');
var documentAll = $documentAll.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function(argument) {
    return typeof argument == 'function' || argument === documentAll;
} : function(argument) {
    return typeof argument == 'function';
};

},{"../internals/document-all":"blYm2"}],"blYm2":[function(require,module,exports) {
var documentAll = typeof document == 'object' && document.all;
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;
module.exports = {
    all: documentAll,
    IS_HTMLDDA: IS_HTMLDDA
};

},{}],"hfIC8":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');
var isCallable = require('../internals/is-callable');
var isPrototypeOf = require('../internals/object-is-prototype-of');
var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == 'symbol';
} : function(it) {
    var $Symbol = getBuiltIn('Symbol');
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"../internals/get-built-in":"hqegu","../internals/is-callable":"41EnZ","../internals/object-is-prototype-of":"gFfbX","../internals/use-symbol-as-uid":"dancM"}],"hqegu":[function(require,module,exports) {
var global = require('../internals/global');
var isCallable = require('../internals/is-callable');
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

},{"../internals/global":"a4GR8","../internals/is-callable":"41EnZ"}],"gFfbX":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
module.exports = uncurryThis({
}.isPrototypeOf);

},{"../internals/function-uncurry-this":"gBsQL"}],"dancM":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require('../internals/symbol-constructor-detection');
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

},{"../internals/symbol-constructor-detection":"kX1Pa"}],"kX1Pa":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require('../internals/engine-v8-version');
var fails = require('../internals/fails');
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"../internals/engine-v8-version":"8Ofbb","../internals/fails":"byxLb"}],"8Ofbb":[function(require,module,exports) {
var global = require('../internals/global');
var userAgent = require('../internals/engine-user-agent');
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"../internals/global":"a4GR8","../internals/engine-user-agent":"ihes9"}],"ihes9":[function(require,module,exports) {
module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

},{}],"8DyNd":[function(require,module,exports) {
var aCallable = require('../internals/a-callable');
var isNullOrUndefined = require('../internals/is-null-or-undefined');
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"../internals/a-callable":"jnvBr","../internals/is-null-or-undefined":"kssQ6"}],"jnvBr":[function(require,module,exports) {
var isCallable = require('../internals/is-callable');
var tryToString = require('../internals/try-to-string');
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw $TypeError(tryToString(argument) + ' is not a function');
};

},{"../internals/is-callable":"41EnZ","../internals/try-to-string":"gQsq2"}],"gQsq2":[function(require,module,exports) {
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return 'Object';
    }
};

},{}],"1rrrl":[function(require,module,exports) {
var call = require('../internals/function-call');
var isCallable = require('../internals/is-callable');
var isObject = require('../internals/is-object');
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw $TypeError("Can't convert object to primitive value");
};

},{"../internals/function-call":"d0MId","../internals/is-callable":"41EnZ","../internals/is-object":"d60Kc"}],"6sZ59":[function(require,module,exports) {
var global = require('../internals/global');
var shared = require('../internals/shared');
var hasOwn = require('../internals/has-own-property');
var uid = require('../internals/uid');
var NATIVE_SYMBOL = require('../internals/symbol-constructor-detection');
var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');
var Symbol1 = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol1['for'] || Symbol1 : Symbol1 && Symbol1.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol1, name) ? Symbol1[name] : createWellKnownSymbol('Symbol.' + name);
    return WellKnownSymbolsStore[name];
};

},{"../internals/global":"a4GR8","../internals/shared":"ic92G","../internals/has-own-property":"kL9Yw","../internals/uid":"9DssZ","../internals/symbol-constructor-detection":"kX1Pa","../internals/use-symbol-as-uid":"dancM"}],"ic92G":[function(require,module,exports) {
var IS_PURE = require('../internals/is-pure');
var store = require('../internals/shared-store');
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {
    });
})('versions', []).push({
    version: '3.27.2',
    mode: IS_PURE ? 'pure' : 'global',
    copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.27.2/LICENSE',
    source: 'https://github.com/zloirock/core-js'
});

},{"../internals/is-pure":"dlbEd","../internals/shared-store":"4v8Nf"}],"dlbEd":[function(require,module,exports) {
module.exports = false;

},{}],"4v8Nf":[function(require,module,exports) {
var global = require('../internals/global');
var defineGlobalProperty = require('../internals/define-global-property');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {
});
module.exports = store;

},{"../internals/global":"a4GR8","../internals/define-global-property":"jo6Uf"}],"jo6Uf":[function(require,module,exports) {
var global = require('../internals/global');
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"../internals/global":"a4GR8"}],"kL9Yw":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var toObject = require('../internals/to-object');
var hasOwnProperty = uncurryThis({
}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"../internals/function-uncurry-this":"gBsQL","../internals/to-object":"ghTKi"}],"ghTKi":[function(require,module,exports) {
var requireObjectCoercible = require('../internals/require-object-coercible');
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"../internals/require-object-coercible":"1XURO"}],"9DssZ":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1..toString);
module.exports = function(key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString((++id) + postfix, 36);
};

},{"../internals/function-uncurry-this":"gBsQL"}],"5FQkl":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var fails = require('../internals/fails');
var createElement = require('../internals/document-create-element');
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"../internals/descriptors":"kuDzl","../internals/fails":"byxLb","../internals/document-create-element":"2WwO0"}],"2WwO0":[function(require,module,exports) {
var global = require('../internals/global');
var isObject = require('../internals/is-object');
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {
    };
};

},{"../internals/global":"a4GR8","../internals/is-object":"d60Kc"}],"73EkF":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var definePropertyModule = require('../internals/object-define-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"../internals/descriptors":"kuDzl","../internals/object-define-property":"iKHmb","../internals/create-property-descriptor":"5fdHA"}],"iKHmb":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');
var V8_PROTOTYPE_DEFINE_BUG = require('../internals/v8-prototype-define-bug');
var anObject = require('../internals/an-object');
var toPropertyKey = require('../internals/to-property-key');
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty1(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {
    }
    if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
};

},{"../internals/descriptors":"kuDzl","../internals/ie8-dom-define":"5FQkl","../internals/v8-prototype-define-bug":"hBwa1","../internals/an-object":"9unxM","../internals/to-property-key":"99Lby"}],"hBwa1":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var fails = require('../internals/fails');
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {
    }, 'prototype', {
        value: 42,
        writable: false
    }).prototype != 42;
});

},{"../internals/descriptors":"kuDzl","../internals/fails":"byxLb"}],"9unxM":[function(require,module,exports) {
var isObject = require('../internals/is-object');
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw $TypeError($String(argument) + ' is not an object');
};

},{"../internals/is-object":"d60Kc"}],"dTyng":[function(require,module,exports) {
var isCallable = require('../internals/is-callable');
var definePropertyModule = require('../internals/object-define-property');
var makeBuiltIn = require('../internals/make-built-in');
var defineGlobalProperty = require('../internals/define-global-property');
module.exports = function(O, key, value, options) {
    if (!options) options = {
    };
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {
        }
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"../internals/is-callable":"41EnZ","../internals/object-define-property":"iKHmb","../internals/make-built-in":"7xd2p","../internals/define-global-property":"jo6Uf"}],"7xd2p":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var fails = require('../internals/fails');
var isCallable = require('../internals/is-callable');
var hasOwn = require('../internals/has-own-property');
var DESCRIPTORS = require('../internals/descriptors');
var CONFIGURABLE_FUNCTION_NAME = require('../internals/function-name').CONFIGURABLE;
var inspectSource = require('../internals/inspect-source');
var InternalStateModule = require('../internals/internal-state');
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {
    }, 'length', {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split('String');
var makeBuiltIn = module.exports = function(value, name, options) {
    if (stringSlice($String(name), 0, 7) === 'Symbol(') name = '[' + replace($String(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, 'name', {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) defineProperty(value, 'length', {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, 'constructor') && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, 'prototype', {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {
    }
    var state = enforceInternalState(value);
    if (!hasOwn(state, 'source')) state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');

},{"../internals/function-uncurry-this":"gBsQL","../internals/fails":"byxLb","../internals/is-callable":"41EnZ","../internals/has-own-property":"kL9Yw","../internals/descriptors":"kuDzl","../internals/function-name":"fErEm","../internals/inspect-source":"yqC5G","../internals/internal-state":"ceuiK"}],"fErEm":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var hasOwn = require('../internals/has-own-property');
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {
}).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"../internals/descriptors":"kuDzl","../internals/has-own-property":"kL9Yw"}],"yqC5G":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var isCallable = require('../internals/is-callable');
var store = require('../internals/shared-store');
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"../internals/function-uncurry-this":"gBsQL","../internals/is-callable":"41EnZ","../internals/shared-store":"4v8Nf"}],"ceuiK":[function(require,module,exports) {
var NATIVE_WEAK_MAP = require('../internals/weak-map-basic-detection');
var global = require('../internals/global');
var isObject = require('../internals/is-object');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var hasOwn = require('../internals/has-own-property');
var shared = require('../internals/shared-store');
var sharedKey = require('../internals/shared-key');
var hiddenKeys = require('../internals/hidden-keys');
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError1 = global.TypeError;
var WeakMap1 = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {
    });
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError1('Incompatible receiver, ' + TYPE + ' required');
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap1());
    /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ set = function(it, metadata) {
        if (store.has(it)) throw TypeError1(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function(it) {
        return store.get(it) || {
        };
    };
    has = function(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw TypeError1(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {
        };
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"../internals/weak-map-basic-detection":"bm6n8","../internals/global":"a4GR8","../internals/is-object":"d60Kc","../internals/create-non-enumerable-property":"73EkF","../internals/has-own-property":"kL9Yw","../internals/shared-store":"4v8Nf","../internals/shared-key":"65Tv5","../internals/hidden-keys":"8TVAY"}],"bm6n8":[function(require,module,exports) {
var global = require('../internals/global');
var isCallable = require('../internals/is-callable');
var WeakMap1 = global.WeakMap;
module.exports = isCallable(WeakMap1) && /native code/.test(String(WeakMap1));

},{"../internals/global":"a4GR8","../internals/is-callable":"41EnZ"}],"65Tv5":[function(require,module,exports) {
var shared = require('../internals/shared');
var uid = require('../internals/uid');
var keys = shared('keys');
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"../internals/shared":"ic92G","../internals/uid":"9DssZ"}],"8TVAY":[function(require,module,exports) {
module.exports = {
};

},{}],"4qgKG":[function(require,module,exports) {
var hasOwn = require('../internals/has-own-property');
var ownKeys = require('../internals/own-keys');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var definePropertyModule = require('../internals/object-define-property');
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"../internals/has-own-property":"kL9Yw","../internals/own-keys":"dGiV1","../internals/object-get-own-property-descriptor":"hwpsT","../internals/object-define-property":"iKHmb"}],"dGiV1":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');
var uncurryThis = require('../internals/function-uncurry-this');
var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');
var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
var anObject = require('../internals/an-object');
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"../internals/get-built-in":"hqegu","../internals/function-uncurry-this":"gBsQL","../internals/object-get-own-property-names":"38UqD","../internals/object-get-own-property-symbols":"3jR7g","../internals/an-object":"9unxM"}],"38UqD":[function(require,module,exports) {
var internalObjectKeys = require('../internals/object-keys-internal');
var enumBugKeys = require('../internals/enum-bug-keys');
var hiddenKeys = enumBugKeys.concat('length', 'prototype');
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"../internals/object-keys-internal":"lhvNb","../internals/enum-bug-keys":"cEKLg"}],"lhvNb":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var hasOwn = require('../internals/has-own-property');
var toIndexedObject = require('../internals/to-indexed-object');
var indexOf = require('../internals/array-includes').indexOf;
var hiddenKeys = require('../internals/hidden-keys');
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"../internals/function-uncurry-this":"gBsQL","../internals/has-own-property":"kL9Yw","../internals/to-indexed-object":"9N8sJ","../internals/array-includes":"cmRkV","../internals/hidden-keys":"8TVAY"}],"cmRkV":[function(require,module,exports) {
var toIndexedObject = require('../internals/to-indexed-object');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var lengthOfArrayLike = require('../internals/length-of-array-like');
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el != el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"../internals/to-indexed-object":"9N8sJ","../internals/to-absolute-index":"bWCPe","../internals/length-of-array-like":"feyBo"}],"bWCPe":[function(require,module,exports) {
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"../internals/to-integer-or-infinity":"7H3g3"}],"7H3g3":[function(require,module,exports) {
var trunc = require('../internals/math-trunc');
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"../internals/math-trunc":"2ClGd"}],"2ClGd":[function(require,module,exports) {
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"feyBo":[function(require,module,exports) {
var toLength = require('../internals/to-length');
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"../internals/to-length":"coWuj"}],"coWuj":[function(require,module,exports) {
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"../internals/to-integer-or-infinity":"7H3g3"}],"cEKLg":[function(require,module,exports) {
// IE8- don't enum bug keys
module.exports = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
];

},{}],"3jR7g":[function(require,module,exports) {
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"djqhI":[function(require,module,exports) {
var fails = require('../internals/fails');
var isCallable = require('../internals/is-callable');
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced.data = {
};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

},{"../internals/fails":"byxLb","../internals/is-callable":"41EnZ"}],"k0ZQF":[function(require,module,exports) {
var classof = require('../internals/classof');
var $String = String;
module.exports = function(argument) {
    if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
    return $String(argument);
};

},{"../internals/classof":"gO6DW"}],"gO6DW":[function(require,module,exports) {
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var isCallable = require('../internals/is-callable');
var classofRaw = require('../internals/classof-raw');
var wellKnownSymbol = require('../internals/well-known-symbol');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function() {
    return arguments;
}()) == 'Arguments';
// fallback for IE11 Script Access Denied error
var tryGet = function(it, key) {
    try {
        return it[key];
    } catch (error) {
    }
};
// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};

},{"../internals/to-string-tag-support":"eaplU","../internals/is-callable":"41EnZ","../internals/classof-raw":"8F0bi","../internals/well-known-symbol":"6sZ59"}],"eaplU":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {
};
test[TO_STRING_TAG] = 'z';
module.exports = String(test) === '[object z]';

},{"../internals/well-known-symbol":"6sZ59"}],"eYZeq":[function(require,module,exports) {
/* global ActiveXObject -- old IE, WSH */ var anObject = require('../internals/an-object');
var definePropertiesModule = require('../internals/object-define-properties');
var enumBugKeys = require('../internals/enum-bug-keys');
var hiddenKeys = require('../internals/hidden-keys');
var html = require('../internals/html');
var documentCreateElement = require('../internals/document-create-element');
var sharedKey = require('../internals/shared-key');
var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');
var EmptyConstructor = function() {
};
var scriptTag = function(content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};
// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function(activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
};
// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
};
// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function() {
    try {
        activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) {
    }
    NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
     : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys.length;
    while(length--)delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
};
hiddenKeys[IE_PROTO] = true;
// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

},{"../internals/an-object":"9unxM","../internals/object-define-properties":"4aS77","../internals/enum-bug-keys":"cEKLg","../internals/hidden-keys":"8TVAY","../internals/html":"38cYd","../internals/document-create-element":"2WwO0","../internals/shared-key":"65Tv5"}],"4aS77":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var V8_PROTOTYPE_DEFINE_BUG = require('../internals/v8-prototype-define-bug');
var definePropertyModule = require('../internals/object-define-property');
var anObject = require('../internals/an-object');
var toIndexedObject = require('../internals/to-indexed-object');
var objectKeys = require('../internals/object-keys');
// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var props = toIndexedObject(Properties);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while(length > index)definePropertyModule.f(O, key = keys[index++], props[key]);
    return O;
};

},{"../internals/descriptors":"kuDzl","../internals/v8-prototype-define-bug":"hBwa1","../internals/object-define-property":"iKHmb","../internals/an-object":"9unxM","../internals/to-indexed-object":"9N8sJ","../internals/object-keys":"7so9x"}],"7so9x":[function(require,module,exports) {
var internalObjectKeys = require('../internals/object-keys-internal');
var enumBugKeys = require('../internals/enum-bug-keys');
// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys);
};

},{"../internals/object-keys-internal":"lhvNb","../internals/enum-bug-keys":"cEKLg"}],"38cYd":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');
module.exports = getBuiltIn('document', 'documentElement');

},{"../internals/get-built-in":"hqegu"}],"ivjog":[function(require,module,exports) {
/* eslint-disable es/no-object-getownpropertynames -- safe */ var classof = require('../internals/classof-raw');
var toIndexedObject = require('../internals/to-indexed-object');
var $getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
var arraySlice = require('../internals/array-slice-simple');
var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
var getWindowNames = function(it) {
    try {
        return $getOwnPropertyNames(it);
    } catch (error) {
        return arraySlice(windowNames);
    }
};
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
    return windowNames && classof(it) == 'Window' ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
};

},{"../internals/classof-raw":"8F0bi","../internals/to-indexed-object":"9N8sJ","../internals/object-get-own-property-names":"38UqD","../internals/array-slice-simple":"cgL4j"}],"cgL4j":[function(require,module,exports) {
var toAbsoluteIndex = require('../internals/to-absolute-index');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var createProperty = require('../internals/create-property');
var $Array = Array;
var max = Math.max;
module.exports = function(O, start, end) {
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    var result = $Array(max(fin - k, 0));
    for(var n = 0; k < fin; k++, n++)createProperty(result, n, O[k]);
    result.length = n;
    return result;
};

},{"../internals/to-absolute-index":"bWCPe","../internals/length-of-array-like":"feyBo","../internals/create-property":"9DQWQ"}],"9DQWQ":[function(require,module,exports) {
'use strict';
var toPropertyKey = require('../internals/to-property-key');
var definePropertyModule = require('../internals/object-define-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
module.exports = function(object, key, value) {
    var propertyKey = toPropertyKey(key);
    if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
    else object[propertyKey] = value;
};

},{"../internals/to-property-key":"99Lby","../internals/object-define-property":"iKHmb","../internals/create-property-descriptor":"5fdHA"}],"6xsru":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
exports.f = wellKnownSymbol;

},{"../internals/well-known-symbol":"6sZ59"}],"gciZu":[function(require,module,exports) {
var path = require('../internals/path');
var hasOwn = require('../internals/has-own-property');
var wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped');
var defineProperty = require('../internals/object-define-property').f;
module.exports = function(NAME) {
    var Symbol1 = path.Symbol || (path.Symbol = {
    });
    if (!hasOwn(Symbol1, NAME)) defineProperty(Symbol1, NAME, {
        value: wrappedWellKnownSymbolModule.f(NAME)
    });
};

},{"../internals/path":"cV4BF","../internals/has-own-property":"kL9Yw","../internals/well-known-symbol-wrapped":"6xsru","../internals/object-define-property":"iKHmb"}],"cV4BF":[function(require,module,exports) {
var global = require('../internals/global');
module.exports = global;

},{"../internals/global":"a4GR8"}],"5q03H":[function(require,module,exports) {
var call = require('../internals/function-call');
var getBuiltIn = require('../internals/get-built-in');
var wellKnownSymbol = require('../internals/well-known-symbol');
var defineBuiltIn = require('../internals/define-built-in');
module.exports = function() {
    var Symbol1 = getBuiltIn('Symbol');
    var SymbolPrototype = Symbol1 && Symbol1.prototype;
    var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
    var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
    if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    // eslint-disable-next-line no-unused-vars -- required for .length
    defineBuiltIn(SymbolPrototype, TO_PRIMITIVE, function(hint) {
        return call(valueOf, this);
    }, {
        arity: 1
    });
};

},{"../internals/function-call":"d0MId","../internals/get-built-in":"hqegu","../internals/well-known-symbol":"6sZ59","../internals/define-built-in":"dTyng"}],"cFbSt":[function(require,module,exports) {
var defineProperty = require('../internals/object-define-property').f;
var hasOwn = require('../internals/has-own-property');
var wellKnownSymbol = require('../internals/well-known-symbol');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
module.exports = function(target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !hasOwn(target, TO_STRING_TAG)) defineProperty(target, TO_STRING_TAG, {
        configurable: true,
        value: TAG
    });
};

},{"../internals/object-define-property":"iKHmb","../internals/has-own-property":"kL9Yw","../internals/well-known-symbol":"6sZ59"}],"ciNJ0":[function(require,module,exports) {
var bind = require('../internals/function-bind-context');
var uncurryThis = require('../internals/function-uncurry-this');
var IndexedObject = require('../internals/indexed-object');
var toObject = require('../internals/to-object');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var arraySpeciesCreate = require('../internals/array-species-create');
var push = uncurryThis([].push);
// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function(TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_REJECT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function($this, callbackfn, that, specificCreate) {
        var O = toObject($this);
        var self = IndexedObject(O);
        var boundFunction = bind(callbackfn, that);
        var length = lengthOfArrayLike(self);
        var index = 0;
        var create = specificCreate || arraySpeciesCreate;
        var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
        var value, result;
        for(; length > index; index++)if (NO_HOLES || index in self) {
            value = self[index];
            result = boundFunction(value, index, O);
            if (TYPE) {
                if (IS_MAP) target[index] = result; // map
                else if (result) switch(TYPE){
                    case 3:
                        return true; // some
                    case 5:
                        return value; // find
                    case 6:
                        return index; // findIndex
                    case 2:
                        push(target, value); // filter
                }
                else switch(TYPE){
                    case 4:
                        return false; // every
                    case 7:
                        push(target, value); // filterReject
                }
            }
        }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
};
module.exports = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod(6),
    // `Array.prototype.filterReject` method
    // https://github.com/tc39/proposal-array-filtering
    filterReject: createMethod(7)
};

},{"../internals/function-bind-context":"1epb9","../internals/function-uncurry-this":"gBsQL","../internals/indexed-object":"1hg9G","../internals/to-object":"ghTKi","../internals/length-of-array-like":"feyBo","../internals/array-species-create":"beybx"}],"1epb9":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this-clause');
var aCallable = require('../internals/a-callable');
var NATIVE_BIND = require('../internals/function-bind-native');
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"../internals/function-uncurry-this-clause":"7Ho5A","../internals/a-callable":"jnvBr","../internals/function-bind-native":"7nsE4"}],"7Ho5A":[function(require,module,exports) {
var classofRaw = require('../internals/classof-raw');
var uncurryThis = require('../internals/function-uncurry-this');
module.exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};

},{"../internals/classof-raw":"8F0bi","../internals/function-uncurry-this":"gBsQL"}],"beybx":[function(require,module,exports) {
var arraySpeciesConstructor = require('../internals/array-species-constructor');
// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function(originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

},{"../internals/array-species-constructor":"ipwOm"}],"ipwOm":[function(require,module,exports) {
var isArray = require('../internals/is-array');
var isConstructor = require('../internals/is-constructor');
var isObject = require('../internals/is-object');
var wellKnownSymbol = require('../internals/well-known-symbol');
var SPECIES = wellKnownSymbol('species');
var $Array = Array;
// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function(originalArray) {
    var C;
    if (isArray(originalArray)) {
        C = originalArray.constructor;
        // cross-realm fallback
        if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
        else if (isObject(C)) {
            C = C[SPECIES];
            if (C === null) C = undefined;
        }
    }
    return C === undefined ? $Array : C;
};

},{"../internals/is-array":"kiY2Q","../internals/is-constructor":"lmyue","../internals/is-object":"d60Kc","../internals/well-known-symbol":"6sZ59"}],"kiY2Q":[function(require,module,exports) {
var classof = require('../internals/classof-raw');
// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
    return classof(argument) == 'Array';
};

},{"../internals/classof-raw":"8F0bi"}],"lmyue":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var fails = require('../internals/fails');
var isCallable = require('../internals/is-callable');
var classof = require('../internals/classof');
var getBuiltIn = require('../internals/get-built-in');
var inspectSource = require('../internals/inspect-source');
var noop = function() {
};
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);
var isConstructorModern = function isConstructor(argument) {
    if (!isCallable(argument)) return false;
    try {
        construct(noop, empty, argument);
        return true;
    } catch (error) {
        return false;
    }
};
var isConstructorLegacy = function isConstructor1(argument) {
    if (!isCallable(argument)) return false;
    switch(classof(argument)){
        case 'AsyncFunction':
        case 'GeneratorFunction':
        case 'AsyncGeneratorFunction':
            return false;
    }
    try {
        // we can't check .prototype since constructors produced by .bind haven't it
        // `Function#toString` throws on some built-it function in some legacy engines
        // (for example, `DOMQuad` and similar in FF41-)
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
    } catch (error) {
        return true;
    }
};
isConstructorLegacy.sham = true;
// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function() {
    var called;
    return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
        called = true;
    }) || called;
}) ? isConstructorLegacy : isConstructorModern;

},{"../internals/function-uncurry-this":"gBsQL","../internals/fails":"byxLb","../internals/is-callable":"41EnZ","../internals/classof":"gO6DW","../internals/get-built-in":"hqegu","../internals/inspect-source":"yqC5G"}],"idnIg":[function(require,module,exports) {
var $ = require('../internals/export');
var getBuiltIn = require('../internals/get-built-in');
var hasOwn = require('../internals/has-own-property');
var toString = require('../internals/to-string');
var shared = require('../internals/shared');
var NATIVE_SYMBOL_REGISTRY = require('../internals/symbol-registry-detection');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
$({
    target: 'Symbol',
    stat: true,
    forced: !NATIVE_SYMBOL_REGISTRY
}, {
    'for': function(key) {
        var string = toString(key);
        if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
        var symbol = getBuiltIn('Symbol')(string);
        StringToSymbolRegistry[string] = symbol;
        SymbolToStringRegistry[symbol] = string;
        return symbol;
    }
});

},{"../internals/export":"2mZbc","../internals/get-built-in":"hqegu","../internals/has-own-property":"kL9Yw","../internals/to-string":"k0ZQF","../internals/shared":"ic92G","../internals/symbol-registry-detection":"gEOf1"}],"gEOf1":[function(require,module,exports) {
var NATIVE_SYMBOL = require('../internals/symbol-constructor-detection');
/* eslint-disable es/no-symbol -- safe */ module.exports = NATIVE_SYMBOL && !!Symbol['for'] && !!Symbol.keyFor;

},{"../internals/symbol-constructor-detection":"kX1Pa"}],"d7e2i":[function(require,module,exports) {
var $ = require('../internals/export');
var hasOwn = require('../internals/has-own-property');
var isSymbol = require('../internals/is-symbol');
var tryToString = require('../internals/try-to-string');
var shared = require('../internals/shared');
var NATIVE_SYMBOL_REGISTRY = require('../internals/symbol-registry-detection');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
$({
    target: 'Symbol',
    stat: true,
    forced: !NATIVE_SYMBOL_REGISTRY
}, {
    keyFor: function keyFor(sym) {
        if (!isSymbol(sym)) throw TypeError(tryToString(sym) + ' is not a symbol');
        if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
    }
});

},{"../internals/export":"2mZbc","../internals/has-own-property":"kL9Yw","../internals/is-symbol":"hfIC8","../internals/try-to-string":"gQsq2","../internals/shared":"ic92G","../internals/symbol-registry-detection":"gEOf1"}],"2B2ps":[function(require,module,exports) {
var $ = require('../internals/export');
var getBuiltIn = require('../internals/get-built-in');
var apply = require('../internals/function-apply');
var call = require('../internals/function-call');
var uncurryThis = require('../internals/function-uncurry-this');
var fails = require('../internals/fails');
var isArray = require('../internals/is-array');
var isCallable = require('../internals/is-callable');
var isObject = require('../internals/is-object');
var isSymbol = require('../internals/is-symbol');
var arraySlice = require('../internals/array-slice');
var NATIVE_SYMBOL = require('../internals/symbol-constructor-detection');
var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1..toString);
var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;
var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function() {
    var symbol = getBuiltIn('Symbol')();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([
        symbol
    ]) != '[null]' || $stringify({
        a: symbol
    }) != '{}' || $stringify(Object(symbol)) != '{}';
});
// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails(function() {
    return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"' || $stringify('\uDEAD') !== '"\\udead"';
});
var stringifyWithSymbolsFix = function(it, replacer) {
    var args = arraySlice(arguments);
    var $replacer = replacer;
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function(key, value) {
        if (isCallable($replacer)) value = call($replacer, this, key, value);
        if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return apply($stringify, null, args);
};
var fixIllFormed = function(match, offset, string) {
    var prev = charAt(string, offset - 1);
    var next = charAt(string, offset + 1);
    if (exec(low, match) && !exec(hi, next) || exec(hi, match) && !exec(low, prev)) return '\\u' + numberToString(charCodeAt(match, 0), 16);
    return match;
};
if ($stringify) // `JSON.stringify` method
// https://tc39.es/ecma262/#sec-json.stringify
$({
    target: 'JSON',
    stat: true,
    arity: 3,
    forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE
}, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
        var args = arraySlice(arguments);
        var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
        return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
    }
});

},{"../internals/export":"2mZbc","../internals/get-built-in":"hqegu","../internals/function-apply":"hikDN","../internals/function-call":"d0MId","../internals/function-uncurry-this":"gBsQL","../internals/fails":"byxLb","../internals/is-array":"kiY2Q","../internals/is-callable":"41EnZ","../internals/is-object":"d60Kc","../internals/is-symbol":"hfIC8","../internals/array-slice":"g46xA","../internals/symbol-constructor-detection":"kX1Pa"}],"hikDN":[function(require,module,exports) {
var NATIVE_BIND = require('../internals/function-bind-native');
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"../internals/function-bind-native":"7nsE4"}],"g46xA":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
module.exports = uncurryThis([].slice);

},{"../internals/function-uncurry-this":"gBsQL"}],"89aLI":[function(require,module,exports) {
var $ = require('../internals/export');
var NATIVE_SYMBOL = require('../internals/symbol-constructor-detection');
var fails = require('../internals/fails');
var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
var toObject = require('../internals/to-object');
// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FORCED = !NATIVE_SYMBOL || fails(function() {
    getOwnPropertySymbolsModule.f(1);
});
// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
$({
    target: 'Object',
    stat: true,
    forced: FORCED
}, {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
        var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
    }
});

},{"../internals/export":"2mZbc","../internals/symbol-constructor-detection":"kX1Pa","../internals/fails":"byxLb","../internals/object-get-own-property-symbols":"3jR7g","../internals/to-object":"ghTKi"}],"k6qTH":[function(require,module,exports) {
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description
'use strict';
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var global = require('../internals/global');
var uncurryThis = require('../internals/function-uncurry-this');
var hasOwn = require('../internals/has-own-property');
var isCallable = require('../internals/is-callable');
var isPrototypeOf = require('../internals/object-is-prototype-of');
var toString = require('../internals/to-string');
var defineProperty = require('../internals/object-define-property').f;
var copyConstructorProperties = require('../internals/copy-constructor-properties');
var NativeSymbol = global.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;
if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) || // Safari 12 bug
NativeSymbol().description !== undefined)) {
    var EmptyStringDescriptionStore = {
    };
    // wrap Symbol constructor for correct work with undefined description
    var SymbolWrapper = function Symbol1() {
        var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0]);
        var result = isPrototypeOf(SymbolPrototype, this) ? new NativeSymbol(description) : description === undefined ? NativeSymbol() : NativeSymbol(description);
        if (description === '') EmptyStringDescriptionStore[result] = true;
        return result;
    };
    copyConstructorProperties(SymbolWrapper, NativeSymbol);
    SymbolWrapper.prototype = SymbolPrototype;
    SymbolPrototype.constructor = SymbolWrapper;
    var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
    var thisSymbolValue = uncurryThis(SymbolPrototype.valueOf);
    var symbolDescriptiveString = uncurryThis(SymbolPrototype.toString);
    var regexp = /^Symbol\((.*)\)[^)]+$/;
    var replace = uncurryThis(''.replace);
    var stringSlice = uncurryThis(''.slice);
    defineProperty(SymbolPrototype, 'description', {
        configurable: true,
        get: function description() {
            var symbol = thisSymbolValue(this);
            if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
            var string = symbolDescriptiveString(symbol);
            var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');
            return desc === '' ? undefined : desc;
        }
    });
    $({
        global: true,
        constructor: true,
        forced: true
    }, {
        Symbol: SymbolWrapper
    });
}

},{"../internals/export":"2mZbc","../internals/descriptors":"kuDzl","../internals/global":"a4GR8","../internals/function-uncurry-this":"gBsQL","../internals/has-own-property":"kL9Yw","../internals/is-callable":"41EnZ","../internals/object-is-prototype-of":"gFfbX","../internals/to-string":"k0ZQF","../internals/object-define-property":"iKHmb","../internals/copy-constructor-properties":"4qgKG"}],"4gQKh":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/well-known-symbol-define');
// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');

},{"../internals/well-known-symbol-define":"gciZu"}],"6rypY":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/well-known-symbol-define');
// `Symbol.hasInstance` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.hasinstance
defineWellKnownSymbol('hasInstance');

},{"../internals/well-known-symbol-define":"gciZu"}],"8cPMJ":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/well-known-symbol-define');
// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
defineWellKnownSymbol('isConcatSpreadable');

},{"../internals/well-known-symbol-define":"gciZu"}],"54Wkt":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/well-known-symbol-define');
// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');

},{"../internals/well-known-symbol-define":"gciZu"}],"fci7y":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/well-known-symbol-define');
// `Symbol.match` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.match
defineWellKnownSymbol('match');

},{"../internals/well-known-symbol-define":"gciZu"}],"LEHqP":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/well-known-symbol-define');
// `Symbol.matchAll` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.matchall
defineWellKnownSymbol('matchAll');

},{"../internals/well-known-symbol-define":"gciZu"}],"emMne":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/well-known-symbol-define');
// `Symbol.replace` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.replace
defineWellKnownSymbol('replace');

},{"../internals/well-known-symbol-define":"gciZu"}],"1pJ8K":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/well-known-symbol-define');
// `Symbol.search` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.search
defineWellKnownSymbol('search');

},{"../internals/well-known-symbol-define":"gciZu"}],"aUPm6":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/well-known-symbol-define');
// `Symbol.species` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.species
defineWellKnownSymbol('species');

},{"../internals/well-known-symbol-define":"gciZu"}],"h3StJ":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/well-known-symbol-define');
// `Symbol.split` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.split
defineWellKnownSymbol('split');

},{"../internals/well-known-symbol-define":"gciZu"}],"jiMen":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/well-known-symbol-define');
var defineSymbolToPrimitive = require('../internals/symbol-define-to-primitive');
// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol('toPrimitive');
// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();

},{"../internals/well-known-symbol-define":"gciZu","../internals/symbol-define-to-primitive":"5q03H"}],"2Dw1B":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');
var defineWellKnownSymbol = require('../internals/well-known-symbol-define');
var setToStringTag = require('../internals/set-to-string-tag');
// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag(getBuiltIn('Symbol'), 'Symbol');

},{"../internals/get-built-in":"hqegu","../internals/well-known-symbol-define":"gciZu","../internals/set-to-string-tag":"cFbSt"}],"dad1W":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/well-known-symbol-define');
// `Symbol.unscopables` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.unscopables
defineWellKnownSymbol('unscopables');

},{"../internals/well-known-symbol-define":"gciZu"}],"7zL7J":[function(require,module,exports) {
/* eslint-disable no-unused-vars -- required for functions `.length` */ var $ = require('../internals/export');
var global = require('../internals/global');
var apply = require('../internals/function-apply');
var wrapErrorConstructorWithCause = require('../internals/wrap-error-constructor-with-cause');
var WEB_ASSEMBLY = 'WebAssembly';
var WebAssembly1 = global[WEB_ASSEMBLY];
var FORCED = Error('e', {
    cause: 7
}).cause !== 7;
var exportGlobalErrorCauseWrapper = function(ERROR_NAME, wrapper) {
    var O = {
    };
    O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);
    $({
        global: true,
        constructor: true,
        arity: 1,
        forced: FORCED
    }, O);
};
var exportWebAssemblyErrorCauseWrapper = function(ERROR_NAME, wrapper) {
    if (WebAssembly1 && WebAssembly1[ERROR_NAME]) {
        var O = {
        };
        O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED);
        $({
            target: WEB_ASSEMBLY,
            stat: true,
            constructor: true,
            arity: 1,
            forced: FORCED
        }, O);
    }
};
// https://tc39.es/ecma262/#sec-nativeerror
// https://github.com/tc39/proposal-error-cause
exportGlobalErrorCauseWrapper('Error', function(init) {
    return function Error1(message) {
        return apply(init, this, arguments);
    };
});
exportGlobalErrorCauseWrapper('EvalError', function(init) {
    return function EvalError1(message) {
        return apply(init, this, arguments);
    };
});
exportGlobalErrorCauseWrapper('RangeError', function(init) {
    return function RangeError1(message) {
        return apply(init, this, arguments);
    };
});
exportGlobalErrorCauseWrapper('ReferenceError', function(init) {
    return function ReferenceError1(message) {
        return apply(init, this, arguments);
    };
});
exportGlobalErrorCauseWrapper('SyntaxError', function(init) {
    return function SyntaxError1(message) {
        return apply(init, this, arguments);
    };
});
exportGlobalErrorCauseWrapper('TypeError', function(init) {
    return function TypeError1(message) {
        return apply(init, this, arguments);
    };
});
exportGlobalErrorCauseWrapper('URIError', function(init) {
    return function URIError1(message) {
        return apply(init, this, arguments);
    };
});
exportWebAssemblyErrorCauseWrapper('CompileError', function(init) {
    return function CompileError(message) {
        return apply(init, this, arguments);
    };
});
exportWebAssemblyErrorCauseWrapper('LinkError', function(init) {
    return function LinkError(message) {
        return apply(init, this, arguments);
    };
});
exportWebAssemblyErrorCauseWrapper('RuntimeError', function(init) {
    return function RuntimeError(message) {
        return apply(init, this, arguments);
    };
});

},{"../internals/export":"2mZbc","../internals/global":"a4GR8","../internals/function-apply":"hikDN","../internals/wrap-error-constructor-with-cause":"2nMny"}],"2nMny":[function(require,module,exports) {
'use strict';
var getBuiltIn = require('../internals/get-built-in');
var hasOwn = require('../internals/has-own-property');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var isPrototypeOf = require('../internals/object-is-prototype-of');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var copyConstructorProperties = require('../internals/copy-constructor-properties');
var proxyAccessor = require('../internals/proxy-accessor');
var inheritIfRequired = require('../internals/inherit-if-required');
var normalizeStringArgument = require('../internals/normalize-string-argument');
var installErrorCause = require('../internals/install-error-cause');
var installErrorStack = require('../internals/error-stack-install');
var DESCRIPTORS = require('../internals/descriptors');
var IS_PURE = require('../internals/is-pure');
module.exports = function(FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
    var STACK_TRACE_LIMIT = 'stackTraceLimit';
    var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
    var path = FULL_NAME.split('.');
    var ERROR_NAME = path[path.length - 1];
    var OriginalError = getBuiltIn.apply(null, path);
    if (!OriginalError) return;
    var OriginalErrorPrototype = OriginalError.prototype;
    // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006
    if (!IS_PURE && hasOwn(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;
    if (!FORCED) return OriginalError;
    var BaseError = getBuiltIn('Error');
    var WrappedError = wrapper(function(a, b) {
        var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, undefined);
        var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
        if (message !== undefined) createNonEnumerableProperty(result, 'message', message);
        installErrorStack(result, WrappedError, result.stack, 2);
        if (this && isPrototypeOf(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);
        if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
        return result;
    });
    WrappedError.prototype = OriginalErrorPrototype;
    if (ERROR_NAME !== 'Error') {
        if (setPrototypeOf) setPrototypeOf(WrappedError, BaseError);
        else copyConstructorProperties(WrappedError, BaseError, {
            name: true
        });
    } else if (DESCRIPTORS && STACK_TRACE_LIMIT in OriginalError) {
        proxyAccessor(WrappedError, OriginalError, STACK_TRACE_LIMIT);
        proxyAccessor(WrappedError, OriginalError, 'prepareStackTrace');
    }
    copyConstructorProperties(WrappedError, OriginalError);
    if (!IS_PURE) try {
        // Safari 13- bug: WebAssembly errors does not have a proper `.name`
        if (OriginalErrorPrototype.name !== ERROR_NAME) createNonEnumerableProperty(OriginalErrorPrototype, 'name', ERROR_NAME);
        OriginalErrorPrototype.constructor = WrappedError;
    } catch (error) {
    }
    return WrappedError;
};

},{"../internals/get-built-in":"hqegu","../internals/has-own-property":"kL9Yw","../internals/create-non-enumerable-property":"73EkF","../internals/object-is-prototype-of":"gFfbX","../internals/object-set-prototype-of":"k1Sl0","../internals/copy-constructor-properties":"4qgKG","../internals/proxy-accessor":"hywj4","../internals/inherit-if-required":"5Ef3J","../internals/normalize-string-argument":"kXsRX","../internals/install-error-cause":"co2cq","../internals/error-stack-install":"e8Qo2","../internals/descriptors":"kuDzl","../internals/is-pure":"dlbEd"}],"k1Sl0":[function(require,module,exports) {
/* eslint-disable no-proto -- safe */ var uncurryThis = require('../internals/function-uncurry-this');
var anObject = require('../internals/an-object');
var aPossiblePrototype = require('../internals/a-possible-prototype');
// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {
} ? (function() {
    var CORRECT_SETTER = false;
    var test = {
    };
    var setter;
    try {
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
        setter(test, []);
        CORRECT_SETTER = test instanceof Array;
    } catch (error) {
    }
    return function setPrototypeOf(O, proto) {
        anObject(O);
        aPossiblePrototype(proto);
        if (CORRECT_SETTER) setter(O, proto);
        else O.__proto__ = proto;
        return O;
    };
})() : undefined);

},{"../internals/function-uncurry-this":"gBsQL","../internals/an-object":"9unxM","../internals/a-possible-prototype":"4dKE2"}],"4dKE2":[function(require,module,exports) {
var isCallable = require('../internals/is-callable');
var $String = String;
var $TypeError = TypeError;
module.exports = function(argument) {
    if (typeof argument == 'object' || isCallable(argument)) return argument;
    throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
};

},{"../internals/is-callable":"41EnZ"}],"hywj4":[function(require,module,exports) {
var defineProperty = require('../internals/object-define-property').f;
module.exports = function(Target, Source, key) {
    key in Target || defineProperty(Target, key, {
        configurable: true,
        get: function() {
            return Source[key];
        },
        set: function(it) {
            Source[key] = it;
        }
    });
};

},{"../internals/object-define-property":"iKHmb"}],"5Ef3J":[function(require,module,exports) {
var isCallable = require('../internals/is-callable');
var isObject = require('../internals/is-object');
var setPrototypeOf = require('../internals/object-set-prototype-of');
// makes subclassing work correct for wrapped built-ins
module.exports = function($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (// it can work only with native `setPrototypeOf`
    setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
    return $this;
};

},{"../internals/is-callable":"41EnZ","../internals/is-object":"d60Kc","../internals/object-set-prototype-of":"k1Sl0"}],"kXsRX":[function(require,module,exports) {
var toString = require('../internals/to-string');
module.exports = function(argument, $default) {
    return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};

},{"../internals/to-string":"k0ZQF"}],"co2cq":[function(require,module,exports) {
var isObject = require('../internals/is-object');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
module.exports = function(O, options) {
    if (isObject(options) && 'cause' in options) createNonEnumerableProperty(O, 'cause', options.cause);
};

},{"../internals/is-object":"d60Kc","../internals/create-non-enumerable-property":"73EkF"}],"e8Qo2":[function(require,module,exports) {
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var clearErrorStack = require('../internals/error-stack-clear');
var ERROR_STACK_INSTALLABLE = require('../internals/error-stack-installable');
// non-standard V8
var captureStackTrace = Error.captureStackTrace;
module.exports = function(error, C, stack, dropEntries) {
    if (ERROR_STACK_INSTALLABLE) {
        if (captureStackTrace) captureStackTrace(error, C);
        else createNonEnumerableProperty(error, 'stack', clearErrorStack(stack, dropEntries));
    }
};

},{"../internals/create-non-enumerable-property":"73EkF","../internals/error-stack-clear":"3owVH","../internals/error-stack-installable":"eEcIf"}],"3owVH":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var $Error = Error;
var replace = uncurryThis(''.replace);
var TEST = function(arg) {
    return String($Error(arg).stack);
}('zxcasd');
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
module.exports = function(stack, dropEntries) {
    if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) while(dropEntries--)stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
    return stack;
};

},{"../internals/function-uncurry-this":"gBsQL"}],"eEcIf":[function(require,module,exports) {
var fails = require('../internals/fails');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
module.exports = !fails(function() {
    var error = Error('a');
    if (!('stack' in error)) return true;
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
    return error.stack !== 7;
});

},{"../internals/fails":"byxLb","../internals/create-property-descriptor":"5fdHA"}],"lg5LZ":[function(require,module,exports) {
var defineBuiltIn = require('../internals/define-built-in');
var errorToString = require('../internals/error-to-string');
var ErrorPrototype = Error.prototype;
// `Error.prototype.toString` method fix
// https://tc39.es/ecma262/#sec-error.prototype.tostring
if (ErrorPrototype.toString !== errorToString) defineBuiltIn(ErrorPrototype, 'toString', errorToString);

},{"../internals/define-built-in":"dTyng","../internals/error-to-string":"kybkH"}],"kybkH":[function(require,module,exports) {
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var fails = require('../internals/fails');
var anObject = require('../internals/an-object');
var create = require('../internals/object-create');
var normalizeStringArgument = require('../internals/normalize-string-argument');
var nativeErrorToString = Error.prototype.toString;
var INCORRECT_TO_STRING = fails(function() {
    if (DESCRIPTORS) {
        // Chrome 32- incorrectly call accessor
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        var object = create(Object.defineProperty({
        }, 'name', {
            get: function() {
                return this === object;
            }
        }));
        if (nativeErrorToString.call(object) !== 'true') return true;
    }
    // FF10- does not properly handle non-strings
    return nativeErrorToString.call({
        message: 1,
        name: 2
    }) !== '2: 1' || nativeErrorToString.call({
    }) !== 'Error';
});
module.exports = INCORRECT_TO_STRING ? function toString() {
    var O = anObject(this);
    var name = normalizeStringArgument(O.name, 'Error');
    var message = normalizeStringArgument(O.message);
    return !name ? message : !message ? name : name + ': ' + message;
} : nativeErrorToString;

},{"../internals/descriptors":"kuDzl","../internals/fails":"byxLb","../internals/an-object":"9unxM","../internals/object-create":"eYZeq","../internals/normalize-string-argument":"kXsRX"}],"iQYvV":[function(require,module,exports) {
// TODO: Remove this module from `core-js@4` since it's replaced to module below
require('../modules/es.aggregate-error.constructor');

},{"../modules/es.aggregate-error.constructor":"bdx4D"}],"bdx4D":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var isPrototypeOf = require('../internals/object-is-prototype-of');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var copyConstructorProperties = require('../internals/copy-constructor-properties');
var create = require('../internals/object-create');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var installErrorCause = require('../internals/install-error-cause');
var installErrorStack = require('../internals/error-stack-install');
var iterate = require('../internals/iterate');
var normalizeStringArgument = require('../internals/normalize-string-argument');
var wellKnownSymbol = require('../internals/well-known-symbol');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Error = Error;
var push = [].push;
var $AggregateError = function AggregateError(errors, message /* , options */ ) {
    var isInstance = isPrototypeOf(AggregateErrorPrototype, this);
    var that;
    if (setPrototypeOf) that = setPrototypeOf($Error(), isInstance ? getPrototypeOf(this) : AggregateErrorPrototype);
    else {
        that = isInstance ? this : create(AggregateErrorPrototype);
        createNonEnumerableProperty(that, TO_STRING_TAG, 'Error');
    }
    if (message !== undefined) createNonEnumerableProperty(that, 'message', normalizeStringArgument(message));
    installErrorStack(that, $AggregateError, that.stack, 1);
    if (arguments.length > 2) installErrorCause(that, arguments[2]);
    var errorsArray = [];
    iterate(errors, push, {
        that: errorsArray
    });
    createNonEnumerableProperty(that, 'errors', errorsArray);
    return that;
};
if (setPrototypeOf) setPrototypeOf($AggregateError, $Error);
else copyConstructorProperties($AggregateError, $Error, {
    name: true
});
var AggregateErrorPrototype = $AggregateError.prototype = create($Error.prototype, {
    constructor: createPropertyDescriptor(1, $AggregateError),
    message: createPropertyDescriptor(1, ''),
    name: createPropertyDescriptor(1, 'AggregateError')
});
// `AggregateError` constructor
// https://tc39.es/ecma262/#sec-aggregate-error-constructor
$({
    global: true,
    constructor: true,
    arity: 2
}, {
    AggregateError: $AggregateError
});

},{"../internals/export":"2mZbc","../internals/object-is-prototype-of":"gFfbX","../internals/object-get-prototype-of":"4Xd6L","../internals/object-set-prototype-of":"k1Sl0","../internals/copy-constructor-properties":"4qgKG","../internals/object-create":"eYZeq","../internals/create-non-enumerable-property":"73EkF","../internals/create-property-descriptor":"5fdHA","../internals/install-error-cause":"co2cq","../internals/error-stack-install":"e8Qo2","../internals/iterate":"a4R19","../internals/normalize-string-argument":"kXsRX","../internals/well-known-symbol":"6sZ59"}],"4Xd6L":[function(require,module,exports) {
var hasOwn = require('../internals/has-own-property');
var isCallable = require('../internals/is-callable');
var toObject = require('../internals/to-object');
var sharedKey = require('../internals/shared-key');
var CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter');
var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;
// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
    var object = toObject(O);
    if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable(constructor) && object instanceof constructor) return constructor.prototype;
    return object instanceof $Object ? ObjectPrototype : null;
};

},{"../internals/has-own-property":"kL9Yw","../internals/is-callable":"41EnZ","../internals/to-object":"ghTKi","../internals/shared-key":"65Tv5","../internals/correct-prototype-getter":"dMqx3"}],"dMqx3":[function(require,module,exports) {
var fails = require('../internals/fails');
module.exports = !fails(function() {
    function F() {
    }
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
});

},{"../internals/fails":"byxLb"}],"a4R19":[function(require,module,exports) {
var bind = require('../internals/function-bind-context');
var call = require('../internals/function-call');
var anObject = require('../internals/an-object');
var tryToString = require('../internals/try-to-string');
var isArrayIteratorMethod = require('../internals/is-array-iterator-method');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var isPrototypeOf = require('../internals/object-is-prototype-of');
var getIterator = require('../internals/get-iterator');
var getIteratorMethod = require('../internals/get-iterator-method');
var iteratorClose = require('../internals/iterator-close');
var $TypeError = TypeError;
var Result = function(stopped, result) {
    this.stopped = stopped;
    this.result = result;
};
var ResultPrototype = Result.prototype;
module.exports = function(iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_RECORD = !!(options && options.IS_RECORD);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;
    var stop = function(condition) {
        if (iterator) iteratorClose(iterator, 'normal', condition);
        return new Result(true, condition);
    };
    var callFn = function(value) {
        if (AS_ENTRIES) {
            anObject(value);
            return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        }
        return INTERRUPTED ? fn(value, stop) : fn(value);
    };
    if (IS_RECORD) iterator = iterable.iterator;
    else if (IS_ITERATOR) iterator = iterable;
    else {
        iterFn = getIteratorMethod(iterable);
        if (!iterFn) throw $TypeError(tryToString(iterable) + ' is not iterable');
        // optimisation for array iterators
        if (isArrayIteratorMethod(iterFn)) {
            for(index = 0, length = lengthOfArrayLike(iterable); length > index; index++){
                result = callFn(iterable[index]);
                if (result && isPrototypeOf(ResultPrototype, result)) return result;
            }
            return new Result(false);
        }
        iterator = getIterator(iterable, iterFn);
    }
    next = IS_RECORD ? iterable.next : iterator.next;
    while(!(step = call(next, iterator)).done){
        try {
            result = callFn(step.value);
        } catch (error) {
            iteratorClose(iterator, 'throw', error);
        }
        if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
    }
    return new Result(false);
};

},{"../internals/function-bind-context":"1epb9","../internals/function-call":"d0MId","../internals/an-object":"9unxM","../internals/try-to-string":"gQsq2","../internals/is-array-iterator-method":"fEVgY","../internals/length-of-array-like":"feyBo","../internals/object-is-prototype-of":"gFfbX","../internals/get-iterator":"erkff","../internals/get-iterator-method":"btrxT","../internals/iterator-close":"ljRDT"}],"fEVgY":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var Iterators = require('../internals/iterators');
var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;
// check on default Array iterator
module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

},{"../internals/well-known-symbol":"6sZ59","../internals/iterators":"gp9Ft"}],"gp9Ft":[function(require,module,exports) {
module.exports = {
};

},{}],"erkff":[function(require,module,exports) {
var call = require('../internals/function-call');
var aCallable = require('../internals/a-callable');
var anObject = require('../internals/an-object');
var tryToString = require('../internals/try-to-string');
var getIteratorMethod = require('../internals/get-iterator-method');
var $TypeError = TypeError;
module.exports = function(argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
    if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
    throw $TypeError(tryToString(argument) + ' is not iterable');
};

},{"../internals/function-call":"d0MId","../internals/a-callable":"jnvBr","../internals/an-object":"9unxM","../internals/try-to-string":"gQsq2","../internals/get-iterator-method":"btrxT"}],"btrxT":[function(require,module,exports) {
var classof = require('../internals/classof');
var getMethod = require('../internals/get-method');
var isNullOrUndefined = require('../internals/is-null-or-undefined');
var Iterators = require('../internals/iterators');
var wellKnownSymbol = require('../internals/well-known-symbol');
var ITERATOR = wellKnownSymbol('iterator');
module.exports = function(it) {
    if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, '@@iterator') || Iterators[classof(it)];
};

},{"../internals/classof":"gO6DW","../internals/get-method":"8DyNd","../internals/is-null-or-undefined":"kssQ6","../internals/iterators":"gp9Ft","../internals/well-known-symbol":"6sZ59"}],"ljRDT":[function(require,module,exports) {
var call = require('../internals/function-call');
var anObject = require('../internals/an-object');
var getMethod = require('../internals/get-method');
module.exports = function(iterator, kind, value) {
    var innerResult, innerError;
    anObject(iterator);
    try {
        innerResult = getMethod(iterator, 'return');
        if (!innerResult) {
            if (kind === 'throw') throw value;
            return value;
        }
        innerResult = call(innerResult, iterator);
    } catch (error) {
        innerError = true;
        innerResult = error;
    }
    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject(innerResult);
    return value;
};

},{"../internals/function-call":"d0MId","../internals/an-object":"9unxM","../internals/get-method":"8DyNd"}],"dM4br":[function(require,module,exports) {
var $ = require('../internals/export');
var getBuiltIn = require('../internals/get-built-in');
var apply = require('../internals/function-apply');
var fails = require('../internals/fails');
var wrapErrorConstructorWithCause = require('../internals/wrap-error-constructor-with-cause');
var AGGREGATE_ERROR = 'AggregateError';
var $AggregateError = getBuiltIn(AGGREGATE_ERROR);
var FORCED = !fails(function() {
    return $AggregateError([
        1
    ]).errors[0] !== 1;
}) && fails(function() {
    return $AggregateError([
        1
    ], AGGREGATE_ERROR, {
        cause: 7
    }).cause !== 7;
});
// https://github.com/tc39/proposal-error-cause
$({
    global: true,
    constructor: true,
    arity: 2,
    forced: FORCED
}, {
    AggregateError: wrapErrorConstructorWithCause(AGGREGATE_ERROR, function(init) {
        // eslint-disable-next-line no-unused-vars -- required for functions `.length`
        return function AggregateError(errors, message) {
            return apply(init, this, arguments);
        };
    }, FORCED, true)
});

},{"../internals/export":"2mZbc","../internals/get-built-in":"hqegu","../internals/function-apply":"hikDN","../internals/fails":"byxLb","../internals/wrap-error-constructor-with-cause":"2nMny"}],"a6ezL":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var toObject = require('../internals/to-object');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var addToUnscopables = require('../internals/add-to-unscopables');
// `Array.prototype.at` method
// https://github.com/tc39/proposal-relative-indexing-method
$({
    target: 'Array',
    proto: true
}, {
    at: function at(index) {
        var O = toObject(this);
        var len = lengthOfArrayLike(O);
        var relativeIndex = toIntegerOrInfinity(index);
        var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
        return k < 0 || k >= len ? undefined : O[k];
    }
});
addToUnscopables('at');

},{"../internals/export":"2mZbc","../internals/to-object":"ghTKi","../internals/length-of-array-like":"feyBo","../internals/to-integer-or-infinity":"7H3g3","../internals/add-to-unscopables":"d20N8"}],"d20N8":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var create = require('../internals/object-create');
var defineProperty = require('../internals/object-define-property').f;
var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;
// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
});
// add a key to Array.prototype[@@unscopables]
module.exports = function(key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
};

},{"../internals/well-known-symbol":"6sZ59","../internals/object-create":"eYZeq","../internals/object-define-property":"iKHmb"}],"12BiX":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var fails = require('../internals/fails');
var isArray = require('../internals/is-array');
var isObject = require('../internals/is-object');
var toObject = require('../internals/to-object');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var doesNotExceedSafeInteger = require('../internals/does-not-exceed-safe-integer');
var createProperty = require('../internals/create-property');
var arraySpeciesCreate = require('../internals/array-species-create');
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var wellKnownSymbol = require('../internals/well-known-symbol');
var V8_VERSION = require('../internals/engine-v8-version');
var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function() {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
});
var isConcatSpreadable = function(O) {
    if (!isObject(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
};
var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');
// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({
    target: 'Array',
    proto: true,
    arity: 1,
    forced: FORCED
}, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
        var O = toObject(this);
        var A = arraySpeciesCreate(O, 0);
        var n = 0;
        var i, k, length, len, E;
        for(i = -1, length = arguments.length; i < length; i++){
            E = i === -1 ? O : arguments[i];
            if (isConcatSpreadable(E)) {
                len = lengthOfArrayLike(E);
                doesNotExceedSafeInteger(n + len);
                for(k = 0; k < len; k++, n++)if (k in E) createProperty(A, n, E[k]);
            } else {
                doesNotExceedSafeInteger(n + 1);
                createProperty(A, n++, E);
            }
        }
        A.length = n;
        return A;
    }
});

},{"../internals/export":"2mZbc","../internals/fails":"byxLb","../internals/is-array":"kiY2Q","../internals/is-object":"d60Kc","../internals/to-object":"ghTKi","../internals/length-of-array-like":"feyBo","../internals/does-not-exceed-safe-integer":"b8Zlb","../internals/create-property":"9DQWQ","../internals/array-species-create":"beybx","../internals/array-method-has-species-support":"67F2b","../internals/well-known-symbol":"6sZ59","../internals/engine-v8-version":"8Ofbb"}],"b8Zlb":[function(require,module,exports) {
var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 9007199254740991; // 2 ** 53 - 1 == 9007199254740991
module.exports = function(it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
    return it;
};

},{}],"67F2b":[function(require,module,exports) {
var fails = require('../internals/fails');
var wellKnownSymbol = require('../internals/well-known-symbol');
var V8_VERSION = require('../internals/engine-v8-version');
var SPECIES = wellKnownSymbol('species');
module.exports = function(METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION >= 51 || !fails(function() {
        var array = [];
        var constructor = array.constructor = {
        };
        constructor[SPECIES] = function() {
            return {
                foo: 1
            };
        };
        return array[METHOD_NAME](Boolean).foo !== 1;
    });
};

},{"../internals/fails":"byxLb","../internals/well-known-symbol":"6sZ59","../internals/engine-v8-version":"8Ofbb"}],"6Qlz9":[function(require,module,exports) {
var $ = require('../internals/export');
var copyWithin = require('../internals/array-copy-within');
var addToUnscopables = require('../internals/add-to-unscopables');
// `Array.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
$({
    target: 'Array',
    proto: true
}, {
    copyWithin: copyWithin
});
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('copyWithin');

},{"../internals/export":"2mZbc","../internals/array-copy-within":"gaD2u","../internals/add-to-unscopables":"d20N8"}],"gaD2u":[function(require,module,exports) {
'use strict';
var toObject = require('../internals/to-object');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var deletePropertyOrThrow = require('../internals/delete-property-or-throw');
var min = Math.min;
// `Array.prototype.copyWithin` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
// eslint-disable-next-line es/no-array-prototype-copywithin -- safe
module.exports = [].copyWithin || function copyWithin(target /* = 0 */ , start /* = 0, end = @length */ ) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var to = toAbsoluteIndex(target, len);
    var from = toAbsoluteIndex(start, len);
    var end = arguments.length > 2 ? arguments[2] : undefined;
    var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
    var inc = 1;
    if (from < to && to < from + count) {
        inc = -1;
        from += count - 1;
        to += count - 1;
    }
    while((count--) > 0){
        if (from in O) O[to] = O[from];
        else deletePropertyOrThrow(O, to);
        to += inc;
        from += inc;
    }
    return O;
};

},{"../internals/to-object":"ghTKi","../internals/to-absolute-index":"bWCPe","../internals/length-of-array-like":"feyBo","../internals/delete-property-or-throw":"6xHXi"}],"6xHXi":[function(require,module,exports) {
'use strict';
var tryToString = require('../internals/try-to-string');
var $TypeError = TypeError;
module.exports = function(O, P) {
    if (!delete O[P]) throw $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};

},{"../internals/try-to-string":"gQsq2"}],"isBXe":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $every = require('../internals/array-iteration').every;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var STRICT_METHOD = arrayMethodIsStrict('every');
// `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every
$({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD
}, {
    every: function every(callbackfn /* , thisArg */ ) {
        return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"2mZbc","../internals/array-iteration":"ciNJ0","../internals/array-method-is-strict":"2hfFU"}],"2hfFU":[function(require,module,exports) {
'use strict';
var fails = require('../internals/fails');
module.exports = function(METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails(function() {
        // eslint-disable-next-line no-useless-call -- required for testing
        method.call(null, argument || function() {
            return 1;
        }, 1);
    });
};

},{"../internals/fails":"byxLb"}],"48CiI":[function(require,module,exports) {
var $ = require('../internals/export');
var fill = require('../internals/array-fill');
var addToUnscopables = require('../internals/add-to-unscopables');
// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
$({
    target: 'Array',
    proto: true
}, {
    fill: fill
});
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');

},{"../internals/export":"2mZbc","../internals/array-fill":"hYFo3","../internals/add-to-unscopables":"d20N8"}],"hYFo3":[function(require,module,exports) {
'use strict';
var toObject = require('../internals/to-object');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var lengthOfArrayLike = require('../internals/length-of-array-like');
// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */ ) {
    var O = toObject(this);
    var length = lengthOfArrayLike(O);
    var argumentsLength = arguments.length;
    var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
    var end = argumentsLength > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
    while(endPos > index)O[index++] = value;
    return O;
};

},{"../internals/to-object":"ghTKi","../internals/to-absolute-index":"bWCPe","../internals/length-of-array-like":"feyBo"}],"cKRrG":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $filter = require('../internals/array-iteration').filter;
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
}, {
    filter: function filter(callbackfn /* , thisArg */ ) {
        return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"2mZbc","../internals/array-iteration":"ciNJ0","../internals/array-method-has-species-support":"67F2b"}],"eHU6M":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $find = require('../internals/array-iteration').find;
var addToUnscopables = require('../internals/add-to-unscopables');
var FIND = 'find';
var SKIPS_HOLES = true;
// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function() {
    SKIPS_HOLES = false;
});
// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({
    target: 'Array',
    proto: true,
    forced: SKIPS_HOLES
}, {
    find: function find(callbackfn /* , that = undefined */ ) {
        return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);

},{"../internals/export":"2mZbc","../internals/array-iteration":"ciNJ0","../internals/add-to-unscopables":"d20N8"}],"kfYJb":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $findIndex = require('../internals/array-iteration').findIndex;
var addToUnscopables = require('../internals/add-to-unscopables');
var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;
// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function() {
    SKIPS_HOLES = false;
});
// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({
    target: 'Array',
    proto: true,
    forced: SKIPS_HOLES
}, {
    findIndex: function findIndex(callbackfn /* , that = undefined */ ) {
        return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);

},{"../internals/export":"2mZbc","../internals/array-iteration":"ciNJ0","../internals/add-to-unscopables":"d20N8"}],"30lYj":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $findLast = require('../internals/array-iteration-from-last').findLast;
var addToUnscopables = require('../internals/add-to-unscopables');
// `Array.prototype.findLast` method
// https://github.com/tc39/proposal-array-find-from-last
$({
    target: 'Array',
    proto: true
}, {
    findLast: function findLast(callbackfn /* , that = undefined */ ) {
        return $findLast(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});
addToUnscopables('findLast');

},{"../internals/export":"2mZbc","../internals/array-iteration-from-last":"ceqNG","../internals/add-to-unscopables":"d20N8"}],"ceqNG":[function(require,module,exports) {
var bind = require('../internals/function-bind-context');
var IndexedObject = require('../internals/indexed-object');
var toObject = require('../internals/to-object');
var lengthOfArrayLike = require('../internals/length-of-array-like');
// `Array.prototype.{ findLast, findLastIndex }` methods implementation
var createMethod = function(TYPE) {
    var IS_FIND_LAST_INDEX = TYPE == 1;
    return function($this, callbackfn, that) {
        var O = toObject($this);
        var self = IndexedObject(O);
        var boundFunction = bind(callbackfn, that);
        var index = lengthOfArrayLike(self);
        var value, result;
        while((index--) > 0){
            value = self[index];
            result = boundFunction(value, index, O);
            if (result) switch(TYPE){
                case 0:
                    return value; // findLast
                case 1:
                    return index; // findLastIndex
            }
        }
        return IS_FIND_LAST_INDEX ? -1 : undefined;
    };
};
module.exports = {
    // `Array.prototype.findLast` method
    // https://github.com/tc39/proposal-array-find-from-last
    findLast: createMethod(0),
    // `Array.prototype.findLastIndex` method
    // https://github.com/tc39/proposal-array-find-from-last
    findLastIndex: createMethod(1)
};

},{"../internals/function-bind-context":"1epb9","../internals/indexed-object":"1hg9G","../internals/to-object":"ghTKi","../internals/length-of-array-like":"feyBo"}],"k37k1":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $findLastIndex = require('../internals/array-iteration-from-last').findLastIndex;
var addToUnscopables = require('../internals/add-to-unscopables');
// `Array.prototype.findLastIndex` method
// https://github.com/tc39/proposal-array-find-from-last
$({
    target: 'Array',
    proto: true
}, {
    findLastIndex: function findLastIndex(callbackfn /* , that = undefined */ ) {
        return $findLastIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});
addToUnscopables('findLastIndex');

},{"../internals/export":"2mZbc","../internals/array-iteration-from-last":"ceqNG","../internals/add-to-unscopables":"d20N8"}],"am9Da":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var flattenIntoArray = require('../internals/flatten-into-array');
var toObject = require('../internals/to-object');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var arraySpeciesCreate = require('../internals/array-species-create');
// `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat
$({
    target: 'Array',
    proto: true
}, {
    flat: function flat() {
        var depthArg = arguments.length ? arguments[0] : undefined;
        var O = toObject(this);
        var sourceLen = lengthOfArrayLike(O);
        var A = arraySpeciesCreate(O, 0);
        A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toIntegerOrInfinity(depthArg));
        return A;
    }
});

},{"../internals/export":"2mZbc","../internals/flatten-into-array":"cH9ZO","../internals/to-object":"ghTKi","../internals/length-of-array-like":"feyBo","../internals/to-integer-or-infinity":"7H3g3","../internals/array-species-create":"beybx"}],"cH9ZO":[function(require,module,exports) {
'use strict';
var isArray = require('../internals/is-array');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var doesNotExceedSafeInteger = require('../internals/does-not-exceed-safe-integer');
var bind = require('../internals/function-bind-context');
// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function(target, original, source, sourceLen, start, depth, mapper, thisArg) {
    var targetIndex = start;
    var sourceIndex = 0;
    var mapFn = mapper ? bind(mapper, thisArg) : false;
    var element, elementLen;
    while(sourceIndex < sourceLen){
        if (sourceIndex in source) {
            element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
            if (depth > 0 && isArray(element)) {
                elementLen = lengthOfArrayLike(element);
                targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
            } else {
                doesNotExceedSafeInteger(targetIndex + 1);
                target[targetIndex] = element;
            }
            targetIndex++;
        }
        sourceIndex++;
    }
    return targetIndex;
};
module.exports = flattenIntoArray;

},{"../internals/is-array":"kiY2Q","../internals/length-of-array-like":"feyBo","../internals/does-not-exceed-safe-integer":"b8Zlb","../internals/function-bind-context":"1epb9"}],"cMHMc":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var flattenIntoArray = require('../internals/flatten-into-array');
var aCallable = require('../internals/a-callable');
var toObject = require('../internals/to-object');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var arraySpeciesCreate = require('../internals/array-species-create');
// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
$({
    target: 'Array',
    proto: true
}, {
    flatMap: function flatMap(callbackfn /* , thisArg */ ) {
        var O = toObject(this);
        var sourceLen = lengthOfArrayLike(O);
        var A;
        aCallable(callbackfn);
        A = arraySpeciesCreate(O, 0);
        A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        return A;
    }
});

},{"../internals/export":"2mZbc","../internals/flatten-into-array":"cH9ZO","../internals/a-callable":"jnvBr","../internals/to-object":"ghTKi","../internals/length-of-array-like":"feyBo","../internals/array-species-create":"beybx"}],"aTBjZ":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var forEach = require('../internals/array-for-each');
// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({
    target: 'Array',
    proto: true,
    forced: [].forEach != forEach
}, {
    forEach: forEach
});

},{"../internals/export":"2mZbc","../internals/array-for-each":"dwspA"}],"dwspA":[function(require,module,exports) {
'use strict';
var $forEach = require('../internals/array-iteration').forEach;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var STRICT_METHOD = arrayMethodIsStrict('forEach');
// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */ ) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;

},{"../internals/array-iteration":"ciNJ0","../internals/array-method-is-strict":"2hfFU"}],"fUGae":[function(require,module,exports) {
var $ = require('../internals/export');
var from = require('../internals/array-from');
var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');
var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
});
// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({
    target: 'Array',
    stat: true,
    forced: INCORRECT_ITERATION
}, {
    from: from
});

},{"../internals/export":"2mZbc","../internals/array-from":"hkJ4P","../internals/check-correctness-of-iteration":"lO6Bq"}],"hkJ4P":[function(require,module,exports) {
'use strict';
var bind = require('../internals/function-bind-context');
var call = require('../internals/function-call');
var toObject = require('../internals/to-object');
var callWithSafeIterationClosing = require('../internals/call-with-safe-iteration-closing');
var isArrayIteratorMethod = require('../internals/is-array-iterator-method');
var isConstructor = require('../internals/is-constructor');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var createProperty = require('../internals/create-property');
var getIterator = require('../internals/get-iterator');
var getIteratorMethod = require('../internals/get-iterator-method');
var $Array = Array;
// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */ ) {
    var O = toObject(arrayLike);
    var IS_CONSTRUCTOR = isConstructor(this);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
    var iteratorMethod = getIteratorMethod(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
        iterator = getIterator(O, iteratorMethod);
        next = iterator.next;
        result = IS_CONSTRUCTOR ? new this() : [];
        for(; !(step = call(next, iterator)).done; index++){
            value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [
                step.value,
                index
            ], true) : step.value;
            createProperty(result, index, value);
        }
    } else {
        length = lengthOfArrayLike(O);
        result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
        for(; length > index; index++){
            value = mapping ? mapfn(O[index], index) : O[index];
            createProperty(result, index, value);
        }
    }
    result.length = index;
    return result;
};

},{"../internals/function-bind-context":"1epb9","../internals/function-call":"d0MId","../internals/to-object":"ghTKi","../internals/call-with-safe-iteration-closing":"cNS8J","../internals/is-array-iterator-method":"fEVgY","../internals/is-constructor":"lmyue","../internals/length-of-array-like":"feyBo","../internals/create-property":"9DQWQ","../internals/get-iterator":"erkff","../internals/get-iterator-method":"btrxT"}],"cNS8J":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var iteratorClose = require('../internals/iterator-close');
// call something on iterator step with safe closing on error
module.exports = function(iterator, fn, value, ENTRIES) {
    try {
        return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (error) {
        iteratorClose(iterator, 'throw', error);
    }
};

},{"../internals/an-object":"9unxM","../internals/iterator-close":"ljRDT"}],"lO6Bq":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;
try {
    var called = 0;
    var iteratorWithReturn = {
        next: function() {
            return {
                done: !!called++
            };
        },
        'return': function() {
            SAFE_CLOSING = true;
        }
    };
    iteratorWithReturn[ITERATOR] = function() {
        return this;
    };
    // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
    Array.from(iteratorWithReturn, function() {
        throw 2;
    });
} catch (error) {
}
module.exports = function(exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
        var object = {
        };
        object[ITERATOR] = function() {
            return {
                next: function() {
                    return {
                        done: ITERATION_SUPPORT = true
                    };
                }
            };
        };
        exec(object);
    } catch (error) {
    }
    return ITERATION_SUPPORT;
};

},{"../internals/well-known-symbol":"6sZ59"}],"X9Fp2":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $includes = require('../internals/array-includes').includes;
var fails = require('../internals/fails');
var addToUnscopables = require('../internals/add-to-unscopables');
// FF99+ bug
var BROKEN_ON_SPARSE = fails(function() {
    return !Array(1).includes();
});
// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({
    target: 'Array',
    proto: true,
    forced: BROKEN_ON_SPARSE
}, {
    includes: function includes(el /* , fromIndex = 0 */ ) {
        return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
});
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

},{"../internals/export":"2mZbc","../internals/array-includes":"cmRkV","../internals/fails":"byxLb","../internals/add-to-unscopables":"d20N8"}],"gpPtE":[function(require,module,exports) {
'use strict';
/* eslint-disable es/no-array-prototype-indexof -- required for testing */ var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this-clause');
var $indexOf = require('../internals/array-includes').indexOf;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var nativeIndexOf = uncurryThis([].indexOf);
var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([
    1
], 1, -0) < 0;
var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');
// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({
    target: 'Array',
    proto: true,
    forced: FORCED
}, {
    indexOf: function indexOf(searchElement /* , fromIndex = 0 */ ) {
        var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
        return NEGATIVE_ZERO ? nativeIndexOf(this, searchElement, fromIndex) || 0 : $indexOf(this, searchElement, fromIndex);
    }
});

},{"../internals/export":"2mZbc","../internals/function-uncurry-this-clause":"7Ho5A","../internals/array-includes":"cmRkV","../internals/array-method-is-strict":"2hfFU"}],"9vHDR":[function(require,module,exports) {
var $ = require('../internals/export');
var isArray = require('../internals/is-array');
// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$({
    target: 'Array',
    stat: true
}, {
    isArray: isArray
});

},{"../internals/export":"2mZbc","../internals/is-array":"kiY2Q"}],"8YPvt":[function(require,module,exports) {
'use strict';
var toIndexedObject = require('../internals/to-indexed-object');
var addToUnscopables = require('../internals/add-to-unscopables');
var Iterators = require('../internals/iterators');
var InternalStateModule = require('../internals/internal-state');
var defineProperty = require('../internals/object-define-property').f;
var defineIterator = require('../internals/iterator-define');
var createIterResultObject = require('../internals/create-iter-result-object');
var IS_PURE = require('../internals/is-pure');
var DESCRIPTORS = require('../internals/descriptors');
var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function(iterated, kind) {
    setInternalState(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated),
        index: 0,
        kind: kind // kind
    });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function() {
    var state = getInternalState(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
        state.target = undefined;
        return createIterResultObject(undefined, true);
    }
    if (kind == 'keys') return createIterResultObject(index, false);
    if (kind == 'values') return createIterResultObject(target[index], false);
    return createIterResultObject([
        index,
        target[index]
    ], false);
}, 'values');
// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
    defineProperty(values, 'name', {
        value: 'values'
    });
} catch (error) {
}

},{"../internals/to-indexed-object":"9N8sJ","../internals/add-to-unscopables":"d20N8","../internals/iterators":"gp9Ft","../internals/internal-state":"ceuiK","../internals/object-define-property":"iKHmb","../internals/iterator-define":"18N5X","../internals/create-iter-result-object":"1dfgC","../internals/is-pure":"dlbEd","../internals/descriptors":"kuDzl"}],"18N5X":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var IS_PURE = require('../internals/is-pure');
var FunctionName = require('../internals/function-name');
var isCallable = require('../internals/is-callable');
var createIteratorConstructor = require('../internals/iterator-create-constructor');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var setToStringTag = require('../internals/set-to-string-tag');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var defineBuiltIn = require('../internals/define-built-in');
var wellKnownSymbol = require('../internals/well-known-symbol');
var Iterators = require('../internals/iterators');
var IteratorsCore = require('../internals/iterators-core');
var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';
var returnThis = function() {
    return this;
};
module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);
    var getIterationMethod = function(KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator;
        if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
        switch(KIND){
            case KEYS:
                return function keys() {
                    return new IteratorConstructor(this, KIND);
                };
            case VALUES:
                return function values() {
                    return new IteratorConstructor(this, KIND);
                };
            case ENTRIES:
                return function entries() {
                    return new IteratorConstructor(this, KIND);
                };
        }
        return function() {
            return new IteratorConstructor(this);
        };
    };
    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;
    // fix native
    if (anyNativeIterator) {
        CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
        if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
            if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                if (setPrototypeOf) setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
            }
            // Set @@toStringTag to native iterators
            setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
            if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
        }
    }
    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
        else {
            INCORRECT_VALUES_NAME = true;
            defaultIterator = function values() {
                return call(nativeIterator, this);
            };
        }
    }
    // export additional methods
    if (DEFAULT) {
        methods = {
            values: getIterationMethod(VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
            entries: getIterationMethod(ENTRIES)
        };
        if (FORCED) for(KEY in methods)if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
        else $({
            target: NAME,
            proto: true,
            forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
        }, methods);
    }
    // define iterator
    if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, {
        name: DEFAULT
    });
    Iterators[NAME] = defaultIterator;
    return methods;
};

},{"../internals/export":"2mZbc","../internals/function-call":"d0MId","../internals/is-pure":"dlbEd","../internals/function-name":"fErEm","../internals/is-callable":"41EnZ","../internals/iterator-create-constructor":"fBwcg","../internals/object-get-prototype-of":"4Xd6L","../internals/object-set-prototype-of":"k1Sl0","../internals/set-to-string-tag":"cFbSt","../internals/create-non-enumerable-property":"73EkF","../internals/define-built-in":"dTyng","../internals/well-known-symbol":"6sZ59","../internals/iterators":"gp9Ft","../internals/iterators-core":"eCtuD"}],"fBwcg":[function(require,module,exports) {
'use strict';
var IteratorPrototype = require('../internals/iterators-core').IteratorPrototype;
var create = require('../internals/object-create');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var setToStringTag = require('../internals/set-to-string-tag');
var Iterators = require('../internals/iterators');
var returnThis = function() {
    return this;
};
module.exports = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create(IteratorPrototype, {
        next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next)
    });
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
    Iterators[TO_STRING_TAG] = returnThis;
    return IteratorConstructor;
};

},{"../internals/iterators-core":"eCtuD","../internals/object-create":"eYZeq","../internals/create-property-descriptor":"5fdHA","../internals/set-to-string-tag":"cFbSt","../internals/iterators":"gp9Ft"}],"eCtuD":[function(require,module,exports) {
'use strict';
var fails = require('../internals/fails');
var isCallable = require('../internals/is-callable');
var isObject = require('../internals/is-object');
var create = require('../internals/object-create');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var defineBuiltIn = require('../internals/define-built-in');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_PURE = require('../internals/is-pure');
var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;
// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
/* eslint-disable es/no-array-prototype-keys -- safe */ if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
    else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
    }
}
var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function() {
    var test = {
    };
    // FF44- legacy iterators case
    return IteratorPrototype[ITERATOR].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {
};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);
// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) defineBuiltIn(IteratorPrototype, ITERATOR, function() {
    return this;
});
module.exports = {
    IteratorPrototype: IteratorPrototype,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

},{"../internals/fails":"byxLb","../internals/is-callable":"41EnZ","../internals/is-object":"d60Kc","../internals/object-create":"eYZeq","../internals/object-get-prototype-of":"4Xd6L","../internals/define-built-in":"dTyng","../internals/well-known-symbol":"6sZ59","../internals/is-pure":"dlbEd"}],"1dfgC":[function(require,module,exports) {
// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function(value, done) {
    return {
        value: value,
        done: done
    };
};

},{}],"fcdvD":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');
var IndexedObject = require('../internals/indexed-object');
var toIndexedObject = require('../internals/to-indexed-object');
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var nativeJoin = uncurryThis([].join);
var ES3_STRINGS = IndexedObject != Object;
var FORCED = ES3_STRINGS || !arrayMethodIsStrict('join', ',');
// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({
    target: 'Array',
    proto: true,
    forced: FORCED
}, {
    join: function join(separator) {
        return nativeJoin(toIndexedObject(this), separator === undefined ? ',' : separator);
    }
});

},{"../internals/export":"2mZbc","../internals/function-uncurry-this":"gBsQL","../internals/indexed-object":"1hg9G","../internals/to-indexed-object":"9N8sJ","../internals/array-method-is-strict":"2hfFU"}],"bVRYF":[function(require,module,exports) {
var $ = require('../internals/export');
var lastIndexOf = require('../internals/array-last-index-of');
// `Array.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
// eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
$({
    target: 'Array',
    proto: true,
    forced: lastIndexOf !== [].lastIndexOf
}, {
    lastIndexOf: lastIndexOf
});

},{"../internals/export":"2mZbc","../internals/array-last-index-of":"3G0we"}],"3G0we":[function(require,module,exports) {
'use strict';
/* eslint-disable es/no-array-prototype-lastindexof -- safe */ var apply = require('../internals/function-apply');
var toIndexedObject = require('../internals/to-indexed-object');
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var min = Math.min;
var $lastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [
    1
].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;
// `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */ ) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return apply($lastIndexOf, this, arguments) || 0;
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var index = length - 1;
    if (arguments.length > 1) index = min(index, toIntegerOrInfinity(arguments[1]));
    if (index < 0) index = length + index;
    for(; index >= 0; index--)if (index in O && O[index] === searchElement) return index || 0;
    return -1;
} : $lastIndexOf;

},{"../internals/function-apply":"hikDN","../internals/to-indexed-object":"9N8sJ","../internals/to-integer-or-infinity":"7H3g3","../internals/length-of-array-like":"feyBo","../internals/array-method-is-strict":"2hfFU"}],"g11io":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $map = require('../internals/array-iteration').map;
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
}, {
    map: function map(callbackfn /* , thisArg */ ) {
        return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"2mZbc","../internals/array-iteration":"ciNJ0","../internals/array-method-has-species-support":"67F2b"}],"hwsFe":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var fails = require('../internals/fails');
var isConstructor = require('../internals/is-constructor');
var createProperty = require('../internals/create-property');
var $Array = Array;
var ISNT_GENERIC = fails(function() {
    function F() {
    }
    // eslint-disable-next-line es/no-array-of -- safe
    return !($Array.of.call(F) instanceof F);
});
// `Array.of` method
// https://tc39.es/ecma262/#sec-array.of
// WebKit Array.of isn't generic
$({
    target: 'Array',
    stat: true,
    forced: ISNT_GENERIC
}, {
    of: function of() {
        var index = 0;
        var argumentsLength = arguments.length;
        var result = new (isConstructor(this) ? this : $Array)(argumentsLength);
        while(argumentsLength > index)createProperty(result, index, arguments[index++]);
        result.length = argumentsLength;
        return result;
    }
});

},{"../internals/export":"2mZbc","../internals/fails":"byxLb","../internals/is-constructor":"lmyue","../internals/create-property":"9DQWQ"}],"hCu3r":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var toObject = require('../internals/to-object');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var setArrayLength = require('../internals/array-set-length');
var doesNotExceedSafeInteger = require('../internals/does-not-exceed-safe-integer');
var fails = require('../internals/fails');
var INCORRECT_TO_LENGTH = fails(function() {
    return [].push.call({
        length: 4294967296
    }, 1) !== 4294967297;
});
// V8 and Safari <= 15.4, FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function() {
    try {
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        Object.defineProperty([], 'length', {
            writable: false
        }).push();
    } catch (error) {
        return error instanceof TypeError;
    }
};
var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();
// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({
    target: 'Array',
    proto: true,
    arity: 1,
    forced: FORCED
}, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    push: function push(item) {
        var O = toObject(this);
        var len = lengthOfArrayLike(O);
        var argCount = arguments.length;
        doesNotExceedSafeInteger(len + argCount);
        for(var i = 0; i < argCount; i++){
            O[len] = arguments[i];
            len++;
        }
        setArrayLength(O, len);
        return len;
    }
});

},{"../internals/export":"2mZbc","../internals/to-object":"ghTKi","../internals/length-of-array-like":"feyBo","../internals/array-set-length":"8ffcx","../internals/does-not-exceed-safe-integer":"b8Zlb","../internals/fails":"byxLb"}],"8ffcx":[function(require,module,exports) {
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var isArray = require('../internals/is-array');
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function() {
    // makes no sense without proper strict mode support
    if (this !== undefined) return true;
    try {
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        Object.defineProperty([], 'length', {
            writable: false
        }).length = 1;
    } catch (error) {
        return error instanceof TypeError;
    }
}();
module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function(O, length) {
    if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) throw $TypeError('Cannot set read only .length');
    return O.length = length;
} : function(O, length) {
    return O.length = length;
};

},{"../internals/descriptors":"kuDzl","../internals/is-array":"kiY2Q"}],"iTsnC":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $reduce = require('../internals/array-reduce').left;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var CHROME_VERSION = require('../internals/engine-v8-version');
var IS_NODE = require('../internals/engine-is-node');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');
// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({
    target: 'Array',
    proto: true,
    forced: FORCED
}, {
    reduce: function reduce(callbackfn /* , initialValue */ ) {
        var length = arguments.length;
        return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"2mZbc","../internals/array-reduce":"8zC1E","../internals/array-method-is-strict":"2hfFU","../internals/engine-v8-version":"8Ofbb","../internals/engine-is-node":"gpWpt"}],"8zC1E":[function(require,module,exports) {
var aCallable = require('../internals/a-callable');
var toObject = require('../internals/to-object');
var IndexedObject = require('../internals/indexed-object');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var $TypeError = TypeError;
// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function(IS_RIGHT) {
    return function(that, callbackfn, argumentsLength, memo) {
        aCallable(callbackfn);
        var O = toObject(that);
        var self = IndexedObject(O);
        var length = lengthOfArrayLike(O);
        var index = IS_RIGHT ? length - 1 : 0;
        var i = IS_RIGHT ? -1 : 1;
        if (argumentsLength < 2) while(true){
            if (index in self) {
                memo = self[index];
                index += i;
                break;
            }
            index += i;
            if (IS_RIGHT ? index < 0 : length <= index) throw $TypeError('Reduce of empty array with no initial value');
        }
        for(; IS_RIGHT ? index >= 0 : length > index; index += i)if (index in self) memo = callbackfn(memo, self[index], index, O);
        return memo;
    };
};
module.exports = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: createMethod(false),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: createMethod(true)
};

},{"../internals/a-callable":"jnvBr","../internals/to-object":"ghTKi","../internals/indexed-object":"1hg9G","../internals/length-of-array-like":"feyBo"}],"gpWpt":[function(require,module,exports) {
var process = require("process");
var classof = require('../internals/classof-raw');
module.exports = typeof process != 'undefined' && classof(process) == 'process';

},{"process":"6Upk8","../internals/classof-raw":"8F0bi"}],"6Upk8":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while((++queueIndex) < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {
};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {
};
function noop() {
}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"dTOyk":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $reduceRight = require('../internals/array-reduce').right;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var CHROME_VERSION = require('../internals/engine-v8-version');
var IS_NODE = require('../internals/engine-is-node');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduceRight');
// `Array.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-array.prototype.reduceright
$({
    target: 'Array',
    proto: true,
    forced: FORCED
}, {
    reduceRight: function reduceRight(callbackfn /* , initialValue */ ) {
        return $reduceRight(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"2mZbc","../internals/array-reduce":"8zC1E","../internals/array-method-is-strict":"2hfFU","../internals/engine-v8-version":"8Ofbb","../internals/engine-is-node":"gpWpt"}],"4H4sw":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');
var isArray = require('../internals/is-array');
var nativeReverse = uncurryThis([].reverse);
var test = [
    1,
    2
];
// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({
    target: 'Array',
    proto: true,
    forced: String(test) === String(test.reverse())
}, {
    reverse: function reverse() {
        // eslint-disable-next-line no-self-assign -- dirty hack
        if (isArray(this)) this.length = this.length;
        return nativeReverse(this);
    }
});

},{"../internals/export":"2mZbc","../internals/function-uncurry-this":"gBsQL","../internals/is-array":"kiY2Q"}],"1Qy0K":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var isArray = require('../internals/is-array');
var isConstructor = require('../internals/is-constructor');
var isObject = require('../internals/is-object');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var toIndexedObject = require('../internals/to-indexed-object');
var createProperty = require('../internals/create-property');
var wellKnownSymbol = require('../internals/well-known-symbol');
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var nativeSlice = require('../internals/array-slice');
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var SPECIES = wellKnownSymbol('species');
var $Array = Array;
var max = Math.max;
// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
}, {
    slice: function slice(start, end) {
        var O = toIndexedObject(this);
        var length = lengthOfArrayLike(O);
        var k = toAbsoluteIndex(start, length);
        var fin = toAbsoluteIndex(end === undefined ? length : end, length);
        // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
        var Constructor, result, n;
        if (isArray(O)) {
            Constructor = O.constructor;
            // cross-realm fallback
            if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) Constructor = undefined;
            else if (isObject(Constructor)) {
                Constructor = Constructor[SPECIES];
                if (Constructor === null) Constructor = undefined;
            }
            if (Constructor === $Array || Constructor === undefined) return nativeSlice(O, k, fin);
        }
        result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));
        for(n = 0; k < fin; k++, n++)if (k in O) createProperty(result, n, O[k]);
        result.length = n;
        return result;
    }
});

},{"../internals/export":"2mZbc","../internals/is-array":"kiY2Q","../internals/is-constructor":"lmyue","../internals/is-object":"d60Kc","../internals/to-absolute-index":"bWCPe","../internals/length-of-array-like":"feyBo","../internals/to-indexed-object":"9N8sJ","../internals/create-property":"9DQWQ","../internals/well-known-symbol":"6sZ59","../internals/array-method-has-species-support":"67F2b","../internals/array-slice":"g46xA"}],"3MKkN":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $some = require('../internals/array-iteration').some;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var STRICT_METHOD = arrayMethodIsStrict('some');
// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
$({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD
}, {
    some: function some(callbackfn /* , thisArg */ ) {
        return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"2mZbc","../internals/array-iteration":"ciNJ0","../internals/array-method-is-strict":"2hfFU"}],"6yoc0":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');
var aCallable = require('../internals/a-callable');
var toObject = require('../internals/to-object');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var deletePropertyOrThrow = require('../internals/delete-property-or-throw');
var toString = require('../internals/to-string');
var fails = require('../internals/fails');
var internalSort = require('../internals/array-sort');
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var FF = require('../internals/engine-ff-version');
var IE_OR_EDGE = require('../internals/engine-is-ie-or-edge');
var V8 = require('../internals/engine-v8-version');
var WEBKIT = require('../internals/engine-webkit-version');
var test = [];
var nativeSort = uncurryThis(test.sort);
var push = uncurryThis(test.push);
// IE8-
var FAILS_ON_UNDEFINED = fails(function() {
    test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function() {
    test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');
var STABLE_SORT = !fails(function() {
    // feature detection can be too slow, so check engines versions
    if (V8) return V8 < 70;
    if (FF && FF > 3) return;
    if (IE_OR_EDGE) return true;
    if (WEBKIT) return WEBKIT < 603;
    var result = '';
    var code, chr, value, index;
    // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
    for(code = 65; code < 76; code++){
        chr = String.fromCharCode(code);
        switch(code){
            case 66:
            case 69:
            case 70:
            case 72:
                value = 3;
                break;
            case 68:
            case 71:
                value = 4;
                break;
            default:
                value = 2;
        }
        for(index = 0; index < 47; index++)test.push({
            k: chr + index,
            v: value
        });
    }
    test.sort(function(a, b) {
        return b.v - a.v;
    });
    for(index = 0; index < test.length; index++){
        chr = test[index].k.charAt(0);
        if (result.charAt(result.length - 1) !== chr) result += chr;
    }
    return result !== 'DGBEFHACIJK';
});
var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;
var getSortCompare = function(comparefn) {
    return function(x, y) {
        if (y === undefined) return -1;
        if (x === undefined) return 1;
        if (comparefn !== undefined) return +comparefn(x, y) || 0;
        return toString(x) > toString(y) ? 1 : -1;
    };
};
// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({
    target: 'Array',
    proto: true,
    forced: FORCED
}, {
    sort: function sort(comparefn) {
        if (comparefn !== undefined) aCallable(comparefn);
        var array = toObject(this);
        if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);
        var items = [];
        var arrayLength = lengthOfArrayLike(array);
        var itemsLength, index;
        for(index = 0; index < arrayLength; index++)if (index in array) push(items, array[index]);
        internalSort(items, getSortCompare(comparefn));
        itemsLength = lengthOfArrayLike(items);
        index = 0;
        while(index < itemsLength)array[index] = items[index++];
        while(index < arrayLength)deletePropertyOrThrow(array, index++);
        return array;
    }
});

},{"../internals/export":"2mZbc","../internals/function-uncurry-this":"gBsQL","../internals/a-callable":"jnvBr","../internals/to-object":"ghTKi","../internals/length-of-array-like":"feyBo","../internals/delete-property-or-throw":"6xHXi","../internals/to-string":"k0ZQF","../internals/fails":"byxLb","../internals/array-sort":"aFml7","../internals/array-method-is-strict":"2hfFU","../internals/engine-ff-version":"ftzYY","../internals/engine-is-ie-or-edge":"5GiwV","../internals/engine-v8-version":"8Ofbb","../internals/engine-webkit-version":"6Jcx4"}],"aFml7":[function(require,module,exports) {
var arraySlice = require('../internals/array-slice-simple');
var floor = Math.floor;
var mergeSort = function(array, comparefn) {
    var length = array.length;
    var middle = floor(length / 2);
    return length < 8 ? insertionSort(array, comparefn) : merge(array, mergeSort(arraySlice(array, 0, middle), comparefn), mergeSort(arraySlice(array, middle), comparefn), comparefn);
};
var insertionSort = function(array, comparefn) {
    var length = array.length;
    var i = 1;
    var element, j;
    while(i < length){
        j = i;
        element = array[i];
        while(j && comparefn(array[j - 1], element) > 0)array[j] = array[--j];
        if (j !== i++) array[j] = element;
    }
    return array;
};
var merge = function(array, left, right, comparefn) {
    var llength = left.length;
    var rlength = right.length;
    var lindex = 0;
    var rindex = 0;
    while(lindex < llength || rindex < rlength)array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
    return array;
};
module.exports = mergeSort;

},{"../internals/array-slice-simple":"cgL4j"}],"ftzYY":[function(require,module,exports) {
var userAgent = require('../internals/engine-user-agent');
var firefox = userAgent.match(/firefox\/(\d+)/i);
module.exports = !!firefox && +firefox[1];

},{"../internals/engine-user-agent":"ihes9"}],"5GiwV":[function(require,module,exports) {
var UA = require('../internals/engine-user-agent');
module.exports = /MSIE|Trident/.test(UA);

},{"../internals/engine-user-agent":"ihes9"}],"6Jcx4":[function(require,module,exports) {
var userAgent = require('../internals/engine-user-agent');
var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);
module.exports = !!webkit && +webkit[1];

},{"../internals/engine-user-agent":"ihes9"}],"5m0CI":[function(require,module,exports) {
var setSpecies = require('../internals/set-species');
// `Array[@@species]` getter
// https://tc39.es/ecma262/#sec-get-array-@@species
setSpecies('Array');

},{"../internals/set-species":"99lPJ"}],"99lPJ":[function(require,module,exports) {
'use strict';
var getBuiltIn = require('../internals/get-built-in');
var definePropertyModule = require('../internals/object-define-property');
var wellKnownSymbol = require('../internals/well-known-symbol');
var DESCRIPTORS = require('../internals/descriptors');
var SPECIES = wellKnownSymbol('species');
module.exports = function(CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
    var defineProperty = definePropertyModule.f;
    if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) defineProperty(Constructor, SPECIES, {
        configurable: true,
        get: function() {
            return this;
        }
    });
};

},{"../internals/get-built-in":"hqegu","../internals/object-define-property":"iKHmb","../internals/well-known-symbol":"6sZ59","../internals/descriptors":"kuDzl"}],"65ZuR":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var toObject = require('../internals/to-object');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var setArrayLength = require('../internals/array-set-length');
var doesNotExceedSafeInteger = require('../internals/does-not-exceed-safe-integer');
var arraySpeciesCreate = require('../internals/array-species-create');
var createProperty = require('../internals/create-property');
var deletePropertyOrThrow = require('../internals/delete-property-or-throw');
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var max = Math.max;
var min = Math.min;
// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
}, {
    splice: function splice(start, deleteCount /* , ...items */ ) {
        var O = toObject(this);
        var len = lengthOfArrayLike(O);
        var actualStart = toAbsoluteIndex(start, len);
        var argumentsLength = arguments.length;
        var insertCount, actualDeleteCount, A, k, from, to;
        if (argumentsLength === 0) insertCount = actualDeleteCount = 0;
        else if (argumentsLength === 1) {
            insertCount = 0;
            actualDeleteCount = len - actualStart;
        } else {
            insertCount = argumentsLength - 2;
            actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
        }
        doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
        A = arraySpeciesCreate(O, actualDeleteCount);
        for(k = 0; k < actualDeleteCount; k++){
            from = actualStart + k;
            if (from in O) createProperty(A, k, O[from]);
        }
        A.length = actualDeleteCount;
        if (insertCount < actualDeleteCount) {
            for(k = actualStart; k < len - actualDeleteCount; k++){
                from = k + actualDeleteCount;
                to = k + insertCount;
                if (from in O) O[to] = O[from];
                else deletePropertyOrThrow(O, to);
            }
            for(k = len; k > len - actualDeleteCount + insertCount; k--)deletePropertyOrThrow(O, k - 1);
        } else if (insertCount > actualDeleteCount) for(k = len - actualDeleteCount; k > actualStart; k--){
            from = k + actualDeleteCount - 1;
            to = k + insertCount - 1;
            if (from in O) O[to] = O[from];
            else deletePropertyOrThrow(O, to);
        }
        for(k = 0; k < insertCount; k++)O[k + actualStart] = arguments[k + 2];
        setArrayLength(O, len - actualDeleteCount + insertCount);
        return A;
    }
});

},{"../internals/export":"2mZbc","../internals/to-object":"ghTKi","../internals/to-absolute-index":"bWCPe","../internals/to-integer-or-infinity":"7H3g3","../internals/length-of-array-like":"feyBo","../internals/array-set-length":"8ffcx","../internals/does-not-exceed-safe-integer":"b8Zlb","../internals/array-species-create":"beybx","../internals/create-property":"9DQWQ","../internals/delete-property-or-throw":"6xHXi","../internals/array-method-has-species-support":"67F2b"}],"hIgzb":[function(require,module,exports) {
// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = require('../internals/add-to-unscopables');
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flat');

},{"../internals/add-to-unscopables":"d20N8"}],"2lymx":[function(require,module,exports) {
// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = require('../internals/add-to-unscopables');
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flatMap');

},{"../internals/add-to-unscopables":"d20N8"}],"6BlSY":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var toObject = require('../internals/to-object');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var setArrayLength = require('../internals/array-set-length');
var deletePropertyOrThrow = require('../internals/delete-property-or-throw');
var doesNotExceedSafeInteger = require('../internals/does-not-exceed-safe-integer');
// IE8-
var INCORRECT_RESULT = [].unshift(0) !== 1;
// V8 ~ Chrome < 71 and Safari <= 15.4, FF < 23 throws InternalError
var properErrorOnNonWritableLength = function() {
    try {
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        Object.defineProperty([], 'length', {
            writable: false
        }).unshift();
    } catch (error) {
        return error instanceof TypeError;
    }
};
var FORCED = INCORRECT_RESULT || !properErrorOnNonWritableLength();
// `Array.prototype.unshift` method
// https://tc39.es/ecma262/#sec-array.prototype.unshift
$({
    target: 'Array',
    proto: true,
    arity: 1,
    forced: FORCED
}, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    unshift: function unshift(item) {
        var O = toObject(this);
        var len = lengthOfArrayLike(O);
        var argCount = arguments.length;
        if (argCount) {
            doesNotExceedSafeInteger(len + argCount);
            var k = len;
            while(k--){
                var to = k + argCount;
                if (k in O) O[to] = O[k];
                else deletePropertyOrThrow(O, to);
            }
            for(var j = 0; j < argCount; j++)O[j] = arguments[j];
        }
        return setArrayLength(O, len + argCount);
    }
});

},{"../internals/export":"2mZbc","../internals/to-object":"ghTKi","../internals/length-of-array-like":"feyBo","../internals/array-set-length":"8ffcx","../internals/delete-property-or-throw":"6xHXi","../internals/does-not-exceed-safe-integer":"b8Zlb"}],"4p0zL":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var global = require('../internals/global');
var arrayBufferModule = require('../internals/array-buffer');
var setSpecies = require('../internals/set-species');
var ARRAY_BUFFER = 'ArrayBuffer';
var ArrayBuffer1 = arrayBufferModule[ARRAY_BUFFER];
var NativeArrayBuffer = global[ARRAY_BUFFER];
// `ArrayBuffer` constructor
// https://tc39.es/ecma262/#sec-arraybuffer-constructor
$({
    global: true,
    constructor: true,
    forced: NativeArrayBuffer !== ArrayBuffer1
}, {
    ArrayBuffer: ArrayBuffer1
});
setSpecies(ARRAY_BUFFER);

},{"../internals/export":"2mZbc","../internals/global":"a4GR8","../internals/array-buffer":"hMeAx","../internals/set-species":"99lPJ"}],"hMeAx":[function(require,module,exports) {
'use strict';
var global = require('../internals/global');
var uncurryThis = require('../internals/function-uncurry-this');
var DESCRIPTORS = require('../internals/descriptors');
var NATIVE_ARRAY_BUFFER = require('../internals/array-buffer-basic-detection');
var FunctionName = require('../internals/function-name');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var defineBuiltIns = require('../internals/define-built-ins');
var fails = require('../internals/fails');
var anInstance = require('../internals/an-instance');
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var toLength = require('../internals/to-length');
var toIndex = require('../internals/to-index');
var IEEE754 = require('../internals/ieee754');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
var defineProperty = require('../internals/object-define-property').f;
var arrayFill = require('../internals/array-fill');
var arraySlice = require('../internals/array-slice-simple');
var setToStringTag = require('../internals/set-to-string-tag');
var InternalStateModule = require('../internals/internal-state');
var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var NativeArrayBuffer = global[ARRAY_BUFFER];
var $ArrayBuffer = NativeArrayBuffer;
var ArrayBufferPrototype = $ArrayBuffer && $ArrayBuffer[PROTOTYPE];
var $DataView = global[DATA_VIEW];
var DataViewPrototype = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype = Object.prototype;
var Array1 = global.Array;
var RangeError1 = global.RangeError;
var fill = uncurryThis(arrayFill);
var reverse = uncurryThis([].reverse);
var packIEEE754 = IEEE754.pack;
var unpackIEEE754 = IEEE754.unpack;
var packInt8 = function(number) {
    return [
        number & 255
    ];
};
var packInt16 = function(number) {
    return [
        number & 255,
        number >> 8 & 255
    ];
};
var packInt32 = function(number) {
    return [
        number & 255,
        number >> 8 & 255,
        number >> 16 & 255,
        number >> 24 & 255
    ];
};
var unpackInt32 = function(buffer) {
    return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};
var packFloat32 = function(number) {
    return packIEEE754(number, 23, 4);
};
var packFloat64 = function(number) {
    return packIEEE754(number, 52, 8);
};
var addGetter = function(Constructor, key) {
    defineProperty(Constructor[PROTOTYPE], key, {
        get: function() {
            return getInternalState(this)[key];
        }
    });
};
var get = function(view, count, index, isLittleEndian) {
    var intIndex = toIndex(index);
    var store = getInternalState(view);
    if (intIndex + count > store.byteLength) throw RangeError1(WRONG_INDEX);
    var bytes = getInternalState(store.buffer).bytes;
    var start = intIndex + store.byteOffset;
    var pack = arraySlice(bytes, start, start + count);
    return isLittleEndian ? pack : reverse(pack);
};
var set = function(view, count, index, conversion, value, isLittleEndian) {
    var intIndex = toIndex(index);
    var store = getInternalState(view);
    if (intIndex + count > store.byteLength) throw RangeError1(WRONG_INDEX);
    var bytes = getInternalState(store.buffer).bytes;
    var start = intIndex + store.byteOffset;
    var pack = conversion(+value);
    for(var i = 0; i < count; i++)bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
};
if (!NATIVE_ARRAY_BUFFER) {
    $ArrayBuffer = function ArrayBuffer1(length) {
        anInstance(this, ArrayBufferPrototype);
        var byteLength = toIndex(length);
        setInternalState(this, {
            bytes: fill(Array1(byteLength), 0),
            byteLength: byteLength
        });
        if (!DESCRIPTORS) this.byteLength = byteLength;
    };
    ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE];
    $DataView = function DataView1(buffer, byteOffset, byteLength) {
        anInstance(this, DataViewPrototype);
        anInstance(buffer, ArrayBufferPrototype);
        var bufferLength = getInternalState(buffer).byteLength;
        var offset = toIntegerOrInfinity(byteOffset);
        if (offset < 0 || offset > bufferLength) throw RangeError1('Wrong offset');
        byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
        if (offset + byteLength > bufferLength) throw RangeError1(WRONG_LENGTH);
        setInternalState(this, {
            buffer: buffer,
            byteLength: byteLength,
            byteOffset: offset
        });
        if (!DESCRIPTORS) {
            this.buffer = buffer;
            this.byteLength = byteLength;
            this.byteOffset = offset;
        }
    };
    DataViewPrototype = $DataView[PROTOTYPE];
    if (DESCRIPTORS) {
        addGetter($ArrayBuffer, 'byteLength');
        addGetter($DataView, 'buffer');
        addGetter($DataView, 'byteLength');
        addGetter($DataView, 'byteOffset');
    }
    defineBuiltIns(DataViewPrototype, {
        getInt8: function getInt8(byteOffset) {
            return get(this, 1, byteOffset)[0] << 24 >> 24;
        },
        getUint8: function getUint8(byteOffset) {
            return get(this, 1, byteOffset)[0];
        },
        getInt16: function getInt16(byteOffset /* , littleEndian */ ) {
            var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
            return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
        },
        getUint16: function getUint16(byteOffset /* , littleEndian */ ) {
            var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
            return bytes[1] << 8 | bytes[0];
        },
        getInt32: function getInt32(byteOffset /* , littleEndian */ ) {
            return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
        },
        getUint32: function getUint32(byteOffset /* , littleEndian */ ) {
            return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
        },
        getFloat32: function getFloat32(byteOffset /* , littleEndian */ ) {
            return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
        },
        getFloat64: function getFloat64(byteOffset /* , littleEndian */ ) {
            return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
        },
        setInt8: function setInt8(byteOffset, value) {
            set(this, 1, byteOffset, packInt8, value);
        },
        setUint8: function setUint8(byteOffset, value) {
            set(this, 1, byteOffset, packInt8, value);
        },
        setInt16: function setInt16(byteOffset, value /* , littleEndian */ ) {
            set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
        },
        setUint16: function setUint16(byteOffset, value /* , littleEndian */ ) {
            set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
        },
        setInt32: function setInt32(byteOffset, value /* , littleEndian */ ) {
            set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
        },
        setUint32: function setUint32(byteOffset, value /* , littleEndian */ ) {
            set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
        },
        setFloat32: function setFloat32(byteOffset, value /* , littleEndian */ ) {
            set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
        },
        setFloat64: function setFloat64(byteOffset, value /* , littleEndian */ ) {
            set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
        }
    });
} else {
    var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME && NativeArrayBuffer.name !== ARRAY_BUFFER;
    /* eslint-disable no-new -- required for testing */ if (!fails(function() {
        NativeArrayBuffer(1);
    }) || !fails(function() {
        new NativeArrayBuffer(-1);
    }) || fails(function() {
        new NativeArrayBuffer();
        new NativeArrayBuffer(1.5);
        new NativeArrayBuffer(NaN);
        return NativeArrayBuffer.length != 1 || INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;
    })) {
        /* eslint-enable no-new -- required for testing */ $ArrayBuffer = function ArrayBuffer1(length) {
            anInstance(this, ArrayBufferPrototype);
            return new NativeArrayBuffer(toIndex(length));
        };
        $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype;
        for(var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;)if (!((key = keys[j++]) in $ArrayBuffer)) createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
        ArrayBufferPrototype.constructor = $ArrayBuffer;
    } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) createNonEnumerableProperty(NativeArrayBuffer, 'name', ARRAY_BUFFER);
    // WebKit bug - the same parent prototype for typed arrays and data view
    if (setPrototypeOf && getPrototypeOf(DataViewPrototype) !== ObjectPrototype) setPrototypeOf(DataViewPrototype, ObjectPrototype);
    // iOS Safari 7.x bug
    var testView = new $DataView(new $ArrayBuffer(2));
    var $setInt8 = uncurryThis(DataViewPrototype.setInt8);
    testView.setInt8(0, 2147483648);
    testView.setInt8(1, 2147483649);
    if (testView.getInt8(0) || !testView.getInt8(1)) defineBuiltIns(DataViewPrototype, {
        setInt8: function setInt8(byteOffset, value) {
            $setInt8(this, byteOffset, value << 24 >> 24);
        },
        setUint8: function setUint8(byteOffset, value) {
            $setInt8(this, byteOffset, value << 24 >> 24);
        }
    }, {
        unsafe: true
    });
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
module.exports = {
    ArrayBuffer: $ArrayBuffer,
    DataView: $DataView
};

},{"../internals/global":"a4GR8","../internals/function-uncurry-this":"gBsQL","../internals/descriptors":"kuDzl","../internals/array-buffer-basic-detection":"2MpzH","../internals/function-name":"fErEm","../internals/create-non-enumerable-property":"73EkF","../internals/define-built-ins":"eEmje","../internals/fails":"byxLb","../internals/an-instance":"gTr5k","../internals/to-integer-or-infinity":"7H3g3","../internals/to-length":"coWuj","../internals/to-index":"iXt4Q","../internals/ieee754":"8cQVO","../internals/object-get-prototype-of":"4Xd6L","../internals/object-set-prototype-of":"k1Sl0","../internals/object-get-own-property-names":"38UqD","../internals/object-define-property":"iKHmb","../internals/array-fill":"hYFo3","../internals/array-slice-simple":"cgL4j","../internals/set-to-string-tag":"cFbSt","../internals/internal-state":"ceuiK"}],"2MpzH":[function(require,module,exports) {
// eslint-disable-next-line es/no-typed-arrays -- safe
module.exports = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';

},{}],"eEmje":[function(require,module,exports) {
var defineBuiltIn = require('../internals/define-built-in');
module.exports = function(target, src, options) {
    for(var key in src)defineBuiltIn(target, key, src[key], options);
    return target;
};

},{"../internals/define-built-in":"dTyng"}],"gTr5k":[function(require,module,exports) {
var isPrototypeOf = require('../internals/object-is-prototype-of');
var $TypeError = TypeError;
module.exports = function(it, Prototype) {
    if (isPrototypeOf(Prototype, it)) return it;
    throw $TypeError('Incorrect invocation');
};

},{"../internals/object-is-prototype-of":"gFfbX"}],"iXt4Q":[function(require,module,exports) {
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var toLength = require('../internals/to-length');
var $RangeError = RangeError;
// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
module.exports = function(it) {
    if (it === undefined) return 0;
    var number = toIntegerOrInfinity(it);
    var length = toLength(number);
    if (number !== length) throw $RangeError('Wrong length or index');
    return length;
};

},{"../internals/to-integer-or-infinity":"7H3g3","../internals/to-length":"coWuj"}],"8cQVO":[function(require,module,exports) {
// IEEE754 conversions based on https://github.com/feross/ieee754
var $Array = Array;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var pack = function(number, mantissaLength, bytes) {
    var buffer = $Array(bytes);
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
    var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
    var index = 0;
    var exponent, mantissa, c;
    number = abs(number);
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number || number === Infinity) {
        // eslint-disable-next-line no-self-compare -- NaN check
        mantissa = number != number ? 1 : 0;
        exponent = eMax;
    } else {
        exponent = floor(log(number) / LN2);
        c = pow(2, -exponent);
        if (number * c < 1) {
            exponent--;
            c *= 2;
        }
        if (exponent + eBias >= 1) number += rt / c;
        else number += rt * pow(2, 1 - eBias);
        if (number * c >= 2) {
            exponent++;
            c /= 2;
        }
        if (exponent + eBias >= eMax) {
            mantissa = 0;
            exponent = eMax;
        } else if (exponent + eBias >= 1) {
            mantissa = (number * c - 1) * pow(2, mantissaLength);
            exponent = exponent + eBias;
        } else {
            mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
            exponent = 0;
        }
    }
    while(mantissaLength >= 8){
        buffer[index++] = mantissa & 255;
        mantissa /= 256;
        mantissaLength -= 8;
    }
    exponent = exponent << mantissaLength | mantissa;
    exponentLength += mantissaLength;
    while(exponentLength > 0){
        buffer[index++] = exponent & 255;
        exponent /= 256;
        exponentLength -= 8;
    }
    buffer[--index] |= sign * 128;
    return buffer;
};
var unpack = function(buffer, mantissaLength) {
    var bytes = buffer.length;
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var nBits = exponentLength - 7;
    var index = bytes - 1;
    var sign = buffer[index--];
    var exponent = sign & 127;
    var mantissa;
    sign >>= 7;
    while(nBits > 0){
        exponent = exponent * 256 + buffer[index--];
        nBits -= 8;
    }
    mantissa = exponent & (1 << -nBits) - 1;
    exponent >>= -nBits;
    nBits += mantissaLength;
    while(nBits > 0){
        mantissa = mantissa * 256 + buffer[index--];
        nBits -= 8;
    }
    if (exponent === 0) exponent = 1 - eBias;
    else if (exponent === eMax) return mantissa ? NaN : sign ? -Infinity : Infinity;
    else {
        mantissa = mantissa + pow(2, mantissaLength);
        exponent = exponent - eBias;
    }
    return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
};
module.exports = {
    pack: pack,
    unpack: unpack
};

},{}],"30MAW":[function(require,module,exports) {
var $ = require('../internals/export');
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
// `ArrayBuffer.isView` method
// https://tc39.es/ecma262/#sec-arraybuffer.isview
$({
    target: 'ArrayBuffer',
    stat: true,
    forced: !NATIVE_ARRAY_BUFFER_VIEWS
}, {
    isView: ArrayBufferViewCore.isView
});

},{"../internals/export":"2mZbc","../internals/array-buffer-view-core":"zd7ve"}],"zd7ve":[function(require,module,exports) {
'use strict';
var NATIVE_ARRAY_BUFFER = require('../internals/array-buffer-basic-detection');
var DESCRIPTORS = require('../internals/descriptors');
var global = require('../internals/global');
var isCallable = require('../internals/is-callable');
var isObject = require('../internals/is-object');
var hasOwn = require('../internals/has-own-property');
var classof = require('../internals/classof');
var tryToString = require('../internals/try-to-string');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var defineBuiltIn = require('../internals/define-built-in');
var defineProperty = require('../internals/object-define-property').f;
var isPrototypeOf = require('../internals/object-is-prototype-of');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var wellKnownSymbol = require('../internals/well-known-symbol');
var uid = require('../internals/uid');
var InternalStateModule = require('../internals/internal-state');
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var Int8Array1 = global.Int8Array;
var Int8ArrayPrototype = Int8Array1 && Int8Array1.prototype;
var Uint8ClampedArray1 = global.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray1 && Uint8ClampedArray1.prototype;
var TypedArray = Int8Array1 && getPrototypeOf(Int8Array1);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var TypeError1 = global.TypeError;
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQUIRED = false;
var NAME, Constructor, Prototype;
var TypedArrayConstructorsList = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
};
var BigIntArrayConstructorsList = {
    BigInt64Array: 8,
    BigUint64Array: 8
};
var isView = function isView1(it) {
    if (!isObject(it)) return false;
    var klass = classof(it);
    return klass === 'DataView' || hasOwn(TypedArrayConstructorsList, klass) || hasOwn(BigIntArrayConstructorsList, klass);
};
var getTypedArrayConstructor = function(it) {
    var proto = getPrototypeOf(it);
    if (!isObject(proto)) return;
    var state = getInternalState(proto);
    return state && hasOwn(state, TYPED_ARRAY_CONSTRUCTOR) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);
};
var isTypedArray = function(it) {
    if (!isObject(it)) return false;
    var klass = classof(it);
    return hasOwn(TypedArrayConstructorsList, klass) || hasOwn(BigIntArrayConstructorsList, klass);
};
var aTypedArray = function(it) {
    if (isTypedArray(it)) return it;
    throw TypeError1('Target is not a typed array');
};
var aTypedArrayConstructor = function(C) {
    if (isCallable(C) && (!setPrototypeOf || isPrototypeOf(TypedArray, C))) return C;
    throw TypeError1(tryToString(C) + ' is not a typed array constructor');
};
var exportTypedArrayMethod = function(KEY, property, forced, options) {
    if (!DESCRIPTORS) return;
    if (forced) for(var ARRAY in TypedArrayConstructorsList){
        var TypedArrayConstructor = global[ARRAY];
        if (TypedArrayConstructor && hasOwn(TypedArrayConstructor.prototype, KEY)) try {
            delete TypedArrayConstructor.prototype[KEY];
        } catch (error) {
            // old WebKit bug - some methods are non-configurable
            try {
                TypedArrayConstructor.prototype[KEY] = property;
            } catch (error2) {
            }
        }
    }
    if (!TypedArrayPrototype[KEY] || forced) defineBuiltIn(TypedArrayPrototype, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property, options);
};
var exportTypedArrayStaticMethod = function(KEY, property, forced) {
    var ARRAY, TypedArrayConstructor;
    if (!DESCRIPTORS) return;
    if (setPrototypeOf) {
        if (forced) for(ARRAY in TypedArrayConstructorsList){
            TypedArrayConstructor = global[ARRAY];
            if (TypedArrayConstructor && hasOwn(TypedArrayConstructor, KEY)) try {
                delete TypedArrayConstructor[KEY];
            } catch (error) {
            }
        }
        if (!TypedArray[KEY] || forced) // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
        try {
            return defineBuiltIn(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
        } catch (error) {
        }
        else return;
    }
    for(ARRAY in TypedArrayConstructorsList){
        TypedArrayConstructor = global[ARRAY];
        if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) defineBuiltIn(TypedArrayConstructor, KEY, property);
    }
};
for(NAME in TypedArrayConstructorsList){
    Constructor = global[NAME];
    Prototype = Constructor && Constructor.prototype;
    if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
    else NATIVE_ARRAY_BUFFER_VIEWS = false;
}
for(NAME in BigIntArrayConstructorsList){
    Constructor = global[NAME];
    Prototype = Constructor && Constructor.prototype;
    if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
}
// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {
    // eslint-disable-next-line no-shadow -- safe
    TypedArray = function TypedArray1() {
        throw TypeError1('Incorrect invocation');
    };
    if (NATIVE_ARRAY_BUFFER_VIEWS) for(NAME in TypedArrayConstructorsList)if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
}
if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
    TypedArrayPrototype = TypedArray.prototype;
    if (NATIVE_ARRAY_BUFFER_VIEWS) for(NAME in TypedArrayConstructorsList)if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
}
// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
if (DESCRIPTORS && !hasOwn(TypedArrayPrototype, TO_STRING_TAG)) {
    TYPED_ARRAY_TAG_REQUIRED = true;
    defineProperty(TypedArrayPrototype, TO_STRING_TAG, {
        get: function() {
            return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
        }
    });
    for(NAME in TypedArrayConstructorsList)if (global[NAME]) createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
}
module.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
    TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,
    aTypedArray: aTypedArray,
    aTypedArrayConstructor: aTypedArrayConstructor,
    exportTypedArrayMethod: exportTypedArrayMethod,
    exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
    getTypedArrayConstructor: getTypedArrayConstructor,
    isView: isView,
    isTypedArray: isTypedArray,
    TypedArray: TypedArray,
    TypedArrayPrototype: TypedArrayPrototype
};

},{"../internals/array-buffer-basic-detection":"2MpzH","../internals/descriptors":"kuDzl","../internals/global":"a4GR8","../internals/is-callable":"41EnZ","../internals/is-object":"d60Kc","../internals/has-own-property":"kL9Yw","../internals/classof":"gO6DW","../internals/try-to-string":"gQsq2","../internals/create-non-enumerable-property":"73EkF","../internals/define-built-in":"dTyng","../internals/object-define-property":"iKHmb","../internals/object-is-prototype-of":"gFfbX","../internals/object-get-prototype-of":"4Xd6L","../internals/object-set-prototype-of":"k1Sl0","../internals/well-known-symbol":"6sZ59","../internals/uid":"9DssZ","../internals/internal-state":"ceuiK"}],"ktSH3":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this-clause');
var fails = require('../internals/fails');
var ArrayBufferModule = require('../internals/array-buffer');
var anObject = require('../internals/an-object');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var toLength = require('../internals/to-length');
var speciesConstructor = require('../internals/species-constructor');
var ArrayBuffer1 = ArrayBufferModule.ArrayBuffer;
var DataView1 = ArrayBufferModule.DataView;
var DataViewPrototype = DataView1.prototype;
var nativeArrayBufferSlice = uncurryThis(ArrayBuffer1.prototype.slice);
var getUint8 = uncurryThis(DataViewPrototype.getUint8);
var setUint8 = uncurryThis(DataViewPrototype.setUint8);
var INCORRECT_SLICE = fails(function() {
    return !new ArrayBuffer1(2).slice(1, undefined).byteLength;
});
// `ArrayBuffer.prototype.slice` method
// https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice
$({
    target: 'ArrayBuffer',
    proto: true,
    unsafe: true,
    forced: INCORRECT_SLICE
}, {
    slice: function slice(start, end) {
        if (nativeArrayBufferSlice && end === undefined) return nativeArrayBufferSlice(anObject(this), start); // FF fix
        var length = anObject(this).byteLength;
        var first = toAbsoluteIndex(start, length);
        var fin = toAbsoluteIndex(end === undefined ? length : end, length);
        var result = new (speciesConstructor(this, ArrayBuffer1))(toLength(fin - first));
        var viewSource = new DataView1(this);
        var viewTarget = new DataView1(result);
        var index = 0;
        while(first < fin)setUint8(viewTarget, index++, getUint8(viewSource, first++));
        return result;
    }
});

},{"../internals/export":"2mZbc","../internals/function-uncurry-this-clause":"7Ho5A","../internals/fails":"byxLb","../internals/array-buffer":"hMeAx","../internals/an-object":"9unxM","../internals/to-absolute-index":"bWCPe","../internals/to-length":"coWuj","../internals/species-constructor":"6tv7V"}],"6tv7V":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var aConstructor = require('../internals/a-constructor');
var isNullOrUndefined = require('../internals/is-null-or-undefined');
var wellKnownSymbol = require('../internals/well-known-symbol');
var SPECIES = wellKnownSymbol('species');
// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function(O, defaultConstructor) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
};

},{"../internals/an-object":"9unxM","../internals/a-constructor":"8n48a","../internals/is-null-or-undefined":"kssQ6","../internals/well-known-symbol":"6sZ59"}],"8n48a":[function(require,module,exports) {
var isConstructor = require('../internals/is-constructor');
var tryToString = require('../internals/try-to-string');
var $TypeError = TypeError;
// `Assert: IsConstructor(argument) is true`
module.exports = function(argument) {
    if (isConstructor(argument)) return argument;
    throw $TypeError(tryToString(argument) + ' is not a constructor');
};

},{"../internals/is-constructor":"lmyue","../internals/try-to-string":"gQsq2"}],"6n7Um":[function(require,module,exports) {
// TODO: Remove this module from `core-js@4` since it's replaced to module below
require('../modules/es.data-view.constructor');

},{"../modules/es.data-view.constructor":"5xTdh"}],"5xTdh":[function(require,module,exports) {
var $ = require('../internals/export');
var ArrayBufferModule = require('../internals/array-buffer');
var NATIVE_ARRAY_BUFFER = require('../internals/array-buffer-basic-detection');
// `DataView` constructor
// https://tc39.es/ecma262/#sec-dataview-constructor
$({
    global: true,
    constructor: true,
    forced: !NATIVE_ARRAY_BUFFER
}, {
    DataView: ArrayBufferModule.DataView
});

},{"../internals/export":"2mZbc","../internals/array-buffer":"hMeAx","../internals/array-buffer-basic-detection":"2MpzH"}],"e1hhS":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');
var fails = require('../internals/fails');
// IE8- non-standard case
var FORCED = fails(function() {
    return new Date(1600000000000).getYear() !== 120;
});
var getFullYear = uncurryThis(Date.prototype.getFullYear);
// `Date.prototype.getYear` method
// https://tc39.es/ecma262/#sec-date.prototype.getyear
$({
    target: 'Date',
    proto: true,
    forced: FORCED
}, {
    getYear: function getYear() {
        return getFullYear(this) - 1900;
    }
});

},{"../internals/export":"2mZbc","../internals/function-uncurry-this":"gBsQL","../internals/fails":"byxLb"}],"lGf1w":[function(require,module,exports) {
// TODO: Remove from `core-js@4`
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');
var $Date = Date;
var thisTimeValue = uncurryThis($Date.prototype.getTime);
// `Date.now` method
// https://tc39.es/ecma262/#sec-date.now
$({
    target: 'Date',
    stat: true
}, {
    now: function now() {
        return thisTimeValue(new $Date());
    }
});

},{"../internals/export":"2mZbc","../internals/function-uncurry-this":"gBsQL"}],"4GJ8v":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var DatePrototype = Date.prototype;
var thisTimeValue = uncurryThis(DatePrototype.getTime);
var setFullYear = uncurryThis(DatePrototype.setFullYear);
// `Date.prototype.setYear` method
// https://tc39.es/ecma262/#sec-date.prototype.setyear
$({
    target: 'Date',
    proto: true
}, {
    setYear: function setYear(year) {
        // validate
        thisTimeValue(this);
        var yi = toIntegerOrInfinity(year);
        var yyyy = 0 <= yi && yi <= 99 ? yi + 1900 : yi;
        return setFullYear(this, yyyy);
    }
});

},{"../internals/export":"2mZbc","../internals/function-uncurry-this":"gBsQL","../internals/to-integer-or-infinity":"7H3g3"}],"dNoww":[function(require,module,exports) {
var $ = require('../internals/export');
// `Date.prototype.toGMTString` method
// https://tc39.es/ecma262/#sec-date.prototype.togmtstring
$({
    target: 'Date',
    proto: true
}, {
    toGMTString: Date.prototype.toUTCString
});

},{"../internals/export":"2mZbc"}],"7mzsp":[function(require,module,exports) {
var $ = require('../internals/export');
var toISOString = require('../internals/date-to-iso-string');
// `Date.prototype.toISOString` method
// https://tc39.es/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit has a broken implementations
$({
    target: 'Date',
    proto: true,
    forced: Date.prototype.toISOString !== toISOString
}, {
    toISOString: toISOString
});

},{"../internals/export":"2mZbc","../internals/date-to-iso-string":"2rORF"}],"2rORF":[function(require,module,exports) {
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var fails = require('../internals/fails');
var padStart = require('../internals/string-pad').start;
var $RangeError = RangeError;
var $isFinite = isFinite;
var abs = Math.abs;
var DatePrototype = Date.prototype;
var nativeDateToISOString = DatePrototype.toISOString;
var thisTimeValue = uncurryThis(DatePrototype.getTime);
var getUTCDate = uncurryThis(DatePrototype.getUTCDate);
var getUTCFullYear = uncurryThis(DatePrototype.getUTCFullYear);
var getUTCHours = uncurryThis(DatePrototype.getUTCHours);
var getUTCMilliseconds = uncurryThis(DatePrototype.getUTCMilliseconds);
var getUTCMinutes = uncurryThis(DatePrototype.getUTCMinutes);
var getUTCMonth = uncurryThis(DatePrototype.getUTCMonth);
var getUTCSeconds = uncurryThis(DatePrototype.getUTCSeconds);
// `Date.prototype.toISOString` method implementation
// https://tc39.es/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit fails here:
module.exports = fails(function() {
    return nativeDateToISOString.call(new Date(-50000000000000 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function() {
    nativeDateToISOString.call(new Date(NaN));
}) ? function toISOString() {
    if (!$isFinite(thisTimeValue(this))) throw $RangeError('Invalid time value');
    var date = this;
    var year = getUTCFullYear(date);
    var milliseconds = getUTCMilliseconds(date);
    var sign = year < 0 ? '-' : year > 9999 ? '+' : '';
    return sign + padStart(abs(year), sign ? 6 : 4, 0) + '-' + padStart(getUTCMonth(date) + 1, 2, 0) + '-' + padStart(getUTCDate(date), 2, 0) + 'T' + padStart(getUTCHours(date), 2, 0) + ':' + padStart(getUTCMinutes(date), 2, 0) + ':' + padStart(getUTCSeconds(date), 2, 0) + '.' + padStart(milliseconds, 3, 0) + 'Z';
} : nativeDateToISOString;

},{"../internals/function-uncurry-this":"gBsQL","../internals/fails":"byxLb","../internals/string-pad":"lqvFq"}],"lqvFq":[function(require,module,exports) {
// https://github.com/tc39/proposal-string-pad-start-end
var uncurryThis = require('../internals/function-uncurry-this');
var toLength = require('../internals/to-length');
var toString = require('../internals/to-string');
var $repeat = require('../internals/string-repeat');
var requireObjectCoercible = require('../internals/require-object-coercible');
var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
var ceil = Math.ceil;
// `String.prototype.{ padStart, padEnd }` methods implementation
var createMethod = function(IS_END) {
    return function($this, maxLength, fillString) {
        var S = toString(requireObjectCoercible($this));
        var intMaxLength = toLength(maxLength);
        var stringLength = S.length;
        var fillStr = fillString === undefined ? ' ' : toString(fillString);
        var fillLen, stringFiller;
        if (intMaxLength <= stringLength || fillStr == '') return S;
        fillLen = intMaxLength - stringLength;
        stringFiller = repeat(fillStr, ceil(fillLen / fillStr.length));
        if (stringFiller.length > fillLen) stringFiller = stringSlice(stringFiller, 0, fillLen);
        return IS_END ? S + stringFiller : stringFiller + S;
    };
};
module.exports = {
    // `String.prototype.padStart` method
    // https://tc39.es/ecma262/#sec-string.prototype.padstart
    start: createMethod(false),
    // `String.prototype.padEnd` method
    // https://tc39.es/ecma262/#sec-string.prototype.padend
    end: createMethod(true)
};

},{"../internals/function-uncurry-this":"gBsQL","../internals/to-length":"coWuj","../internals/to-string":"k0ZQF","../internals/string-repeat":"8cSMA","../internals/require-object-coercible":"1XURO"}],"8cSMA":[function(require,module,exports) {
'use strict';
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var toString = require('../internals/to-string');
var requireObjectCoercible = require('../internals/require-object-coercible');
var $RangeError = RangeError;
// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
    var str = toString(requireObjectCoercible(this));
    var result = '';
    var n = toIntegerOrInfinity(count);
    if (n < 0 || n == Infinity) throw $RangeError('Wrong number of repetitions');
    for(; n > 0; n >>>= 1, str += str)if (n & 1) result += str;
    return result;
};

},{"../internals/to-integer-or-infinity":"7H3g3","../internals/to-string":"k0ZQF","../internals/require-object-coercible":"1XURO"}],"ay4bx":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var fails = require('../internals/fails');
var toObject = require('../internals/to-object');
var toPrimitive = require('../internals/to-primitive');
var FORCED = fails(function() {
    return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
        toISOString: function() {
            return 1;
        }
    }) !== 1;
});
// `Date.prototype.toJSON` method
// https://tc39.es/ecma262/#sec-date.prototype.tojson
$({
    target: 'Date',
    proto: true,
    arity: 1,
    forced: FORCED
}, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    toJSON: function toJSON(key) {
        var O = toObject(this);
        var pv = toPrimitive(O, 'number');
        return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
    }
});

},{"../internals/export":"2mZbc","../internals/fails":"byxLb","../internals/to-object":"ghTKi","../internals/to-primitive":"LSiNW"}],"fObwG":[function(require,module,exports) {
var hasOwn = require('../internals/has-own-property');
var defineBuiltIn = require('../internals/define-built-in');
var dateToPrimitive = require('../internals/date-to-primitive');
var wellKnownSymbol = require('../internals/well-known-symbol');
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var DatePrototype = Date.prototype;
// `Date.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
if (!hasOwn(DatePrototype, TO_PRIMITIVE)) defineBuiltIn(DatePrototype, TO_PRIMITIVE, dateToPrimitive);

},{"../internals/has-own-property":"kL9Yw","../internals/define-built-in":"dTyng","../internals/date-to-primitive":"gDvqe","../internals/well-known-symbol":"6sZ59"}],"gDvqe":[function(require,module,exports) {
'use strict';
var anObject = require('../internals/an-object');
var ordinaryToPrimitive = require('../internals/ordinary-to-primitive');
var $TypeError = TypeError;
// `Date.prototype[@@toPrimitive](hint)` method implementation
// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
module.exports = function(hint) {
    anObject(this);
    if (hint === 'string' || hint === 'default') hint = 'string';
    else if (hint !== 'number') throw $TypeError('Incorrect hint');
    return ordinaryToPrimitive(this, hint);
};

},{"../internals/an-object":"9unxM","../internals/ordinary-to-primitive":"1rrrl"}],"7pcaU":[function(require,module,exports) {
// TODO: Remove from `core-js@4`
var uncurryThis = require('../internals/function-uncurry-this');
var defineBuiltIn = require('../internals/define-built-in');
var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = uncurryThis(DatePrototype[TO_STRING]);
var thisTimeValue = uncurryThis(DatePrototype.getTime);
// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (String(new Date(NaN)) != INVALID_DATE) defineBuiltIn(DatePrototype, TO_STRING, function toString() {
    var value = thisTimeValue(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? nativeDateToString(this) : INVALID_DATE;
});

},{"../internals/function-uncurry-this":"gBsQL","../internals/define-built-in":"dTyng"}],"7stNY":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');
var toString = require('../internals/to-string');
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var exec = uncurryThis(/./.exec);
var numberToString = uncurryThis(1..toString);
var toUpperCase = uncurryThis(''.toUpperCase);
var raw = /[\w*+\-./@]/;
var hex = function(code, length) {
    var result = numberToString(code, 16);
    while(result.length < length)result = '0' + result;
    return result;
};
// `escape` method
// https://tc39.es/ecma262/#sec-escape-string
$({
    global: true
}, {
    escape: function escape(string) {
        var str = toString(string);
        var result = '';
        var length = str.length;
        var index = 0;
        var chr, code;
        while(index < length){
            chr = charAt(str, index++);
            if (exec(raw, chr)) result += chr;
            else {
                code = charCodeAt(chr, 0);
                if (code < 256) result += '%' + hex(code, 2);
                else result += '%u' + toUpperCase(hex(code, 4));
            }
        }
        return result;
    }
});

},{"../internals/export":"2mZbc","../internals/function-uncurry-this":"gBsQL","../internals/to-string":"k0ZQF"}],"jrjf4":[function(require,module,exports) {
// TODO: Remove from `core-js@4`
var $ = require('../internals/export');
var bind = require('../internals/function-bind');
// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$({
    target: 'Function',
    proto: true,
    forced: Function.bind !== bind
}, {
    bind: bind
});

},{"../internals/export":"2mZbc","../internals/function-bind":"5QaOT"}],"5QaOT":[function(require,module,exports) {
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var aCallable = require('../internals/a-callable');
var isObject = require('../internals/is-object');
var hasOwn = require('../internals/has-own-property');
var arraySlice = require('../internals/array-slice');
var NATIVE_BIND = require('../internals/function-bind-native');
var $Function = Function;
var concat = uncurryThis([].concat);
var join = uncurryThis([].join);
var factories = {
};
var construct = function(C, argsLength, args) {
    if (!hasOwn(factories, argsLength)) {
        for(var list = [], i = 0; i < argsLength; i++)list[i] = 'a[' + i + ']';
        factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
    }
    return factories[argsLength](C, args);
};
// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */ ) {
    var F = aCallable(this);
    var Prototype = F.prototype;
    var partArgs = arraySlice(arguments, 1);
    var boundFunction = function bound() {
        var args = concat(partArgs, arraySlice(arguments));
        return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
    };
    if (isObject(Prototype)) boundFunction.prototype = Prototype;
    return boundFunction;
};

},{"../internals/function-uncurry-this":"gBsQL","../internals/a-callable":"jnvBr","../internals/is-object":"d60Kc","../internals/has-own-property":"kL9Yw","../internals/array-slice":"g46xA","../internals/function-bind-native":"7nsE4"}],"9on83":[function(require,module,exports) {
'use strict';
var isCallable = require('../internals/is-callable');
var isObject = require('../internals/is-object');
var definePropertyModule = require('../internals/object-define-property');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var wellKnownSymbol = require('../internals/well-known-symbol');
var makeBuiltIn = require('../internals/make-built-in');
var HAS_INSTANCE = wellKnownSymbol('hasInstance');
var FunctionPrototype = Function.prototype;
// `Function.prototype[@@hasInstance]` method
// https://tc39.es/ecma262/#sec-function.prototype-@@hasinstance
if (!(HAS_INSTANCE in FunctionPrototype)) definePropertyModule.f(FunctionPrototype, HAS_INSTANCE, {
    value: makeBuiltIn(function(O) {
        if (!isCallable(this) || !isObject(O)) return false;
        var P = this.prototype;
        if (!isObject(P)) return O instanceof this;
        // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
        while(O = getPrototypeOf(O))if (P === O) return true;
        return false;
    }, HAS_INSTANCE)
});

},{"../internals/is-callable":"41EnZ","../internals/is-object":"d60Kc","../internals/object-define-property":"iKHmb","../internals/object-get-prototype-of":"4Xd6L","../internals/well-known-symbol":"6sZ59","../internals/make-built-in":"7xd2p"}],"2tRvX":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var FUNCTION_NAME_EXISTS = require('../internals/function-name').EXISTS;
var uncurryThis = require('../internals/function-uncurry-this');
var defineProperty = require('../internals/object-define-property').f;
var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';
// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function() {
        try {
            return regExpExec(nameRE, functionToString(this))[1];
        } catch (error) {
            return '';
        }
    }
});

},{"../internals/descriptors":"kuDzl","../internals/function-name":"fErEm","../internals/function-uncurry-this":"gBsQL","../internals/object-define-property":"iKHmb"}],"JI3Gz":[function(require,module,exports) {
var $ = require('../internals/export');
var global = require('../internals/global');
// `globalThis` object
// https://tc39.es/ecma262/#sec-globalthis
$({
    global: true,
    forced: global.globalThis !== global
}, {
    globalThis: global
});

},{"../internals/export":"2mZbc","../internals/global":"a4GR8"}],"6YcXi":[function(require,module,exports) {
var global = require('../internals/global');
var setToStringTag = require('../internals/set-to-string-tag');
// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);

},{"../internals/global":"a4GR8","../internals/set-to-string-tag":"cFbSt"}],"dgMLm":[function(require,module,exports) {
// TODO: Remove this module from `core-js@4` since it's replaced to module below
require('../modules/es.map.constructor');

},{"../modules/es.map.constructor":"cyVN3"}],"cyVN3":[function(require,module,exports) {
'use strict';
var collection = require('../internals/collection');
var collectionStrong = require('../internals/collection-strong');
// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
collection('Map', function(init) {
    return function Map1() {
        return init(this, arguments.length ? arguments[0] : undefined);
    };
}, collectionStrong);

},{"../internals/collection":"8qCpd","../internals/collection-strong":"hibUM"}],"8qCpd":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var global = require('../internals/global');
var uncurryThis = require('../internals/function-uncurry-this');
var isForced = require('../internals/is-forced');
var defineBuiltIn = require('../internals/define-built-in');
var InternalMetadataModule = require('../internals/internal-metadata');
var iterate = require('../internals/iterate');
var anInstance = require('../internals/an-instance');
var isCallable = require('../internals/is-callable');
var isNullOrUndefined = require('../internals/is-null-or-undefined');
var isObject = require('../internals/is-object');
var fails = require('../internals/fails');
var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');
var setToStringTag = require('../internals/set-to-string-tag');
var inheritIfRequired = require('../internals/inherit-if-required');
module.exports = function(CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = global[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var Constructor = NativeConstructor;
    var exported = {
    };
    var fixMethod = function(KEY) {
        var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
        defineBuiltIn(NativePrototype, KEY, KEY == 'add' ? function add(value) {
            uncurriedNativeMethod(this, value === 0 ? 0 : value);
            return this;
        } : KEY == 'delete' ? function(key) {
            return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : KEY == 'get' ? function get(key) {
            return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : KEY == 'has' ? function has(key) {
            return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : function set(key, value) {
            uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
            return this;
        });
    };
    var REPLACE = isForced(CONSTRUCTOR_NAME, !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function() {
        new NativeConstructor().entries().next();
    })));
    if (REPLACE) {
        // create collection constructor
        Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
        InternalMetadataModule.enable();
    } else if (isForced(CONSTRUCTOR_NAME, true)) {
        var instance = new Constructor();
        // early implementations not supports chaining
        var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {
        } : -0, 1) != instance;
        // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
        var THROWS_ON_PRIMITIVES = fails(function() {
            instance.has(1);
        });
        // most early implementations doesn't supports iterables, most modern - not close it correctly
        // eslint-disable-next-line no-new -- required for testing
        var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function(iterable) {
            new NativeConstructor(iterable);
        });
        // for early implementations -0 and +0 not the same
        var BUGGY_ZERO = !IS_WEAK && fails(function() {
            // V8 ~ Chromium 42- fails only with 5+ elements
            var $instance = new NativeConstructor();
            var index = 5;
            while(index--)$instance[ADDER](index, index);
            return !$instance.has(-0);
        });
        if (!ACCEPT_ITERABLES) {
            Constructor = wrapper(function(dummy, iterable) {
                anInstance(dummy, NativePrototype);
                var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
                if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], {
                    that: that,
                    AS_ENTRIES: IS_MAP
                });
                return that;
            });
            Constructor.prototype = NativePrototype;
            NativePrototype.constructor = Constructor;
        }
        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
            fixMethod('delete');
            fixMethod('has');
            IS_MAP && fixMethod('get');
        }
        if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
        // weak collections should not contains .clear method
        if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
    }
    exported[CONSTRUCTOR_NAME] = Constructor;
    $({
        global: true,
        constructor: true,
        forced: Constructor != NativeConstructor
    }, exported);
    setToStringTag(Constructor, CONSTRUCTOR_NAME);
    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
    return Constructor;
};

},{"../internals/export":"2mZbc","../internals/global":"a4GR8","../internals/function-uncurry-this":"gBsQL","../internals/is-forced":"djqhI","../internals/define-built-in":"dTyng","../internals/internal-metadata":"5OjLO","../internals/iterate":"a4R19","../internals/an-instance":"gTr5k","../internals/is-callable":"41EnZ","../internals/is-null-or-undefined":"kssQ6","../internals/is-object":"d60Kc","../internals/fails":"byxLb","../internals/check-correctness-of-iteration":"lO6Bq","../internals/set-to-string-tag":"cFbSt","../internals/inherit-if-required":"5Ef3J"}],"5OjLO":[function(require,module,exports) {
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');
var hiddenKeys = require('../internals/hidden-keys');
var isObject = require('../internals/is-object');
var hasOwn = require('../internals/has-own-property');
var defineProperty = require('../internals/object-define-property').f;
var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');
var getOwnPropertyNamesExternalModule = require('../internals/object-get-own-property-names-external');
var isExtensible = require('../internals/object-is-extensible');
var uid = require('../internals/uid');
var FREEZING = require('../internals/freezing');
var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;
var setMetadata = function(it) {
    defineProperty(it, METADATA, {
        value: {
            objectID: 'O' + id++,
            weakData: {
            } // weak collections IDs
        }
    });
};
var fastKey = function(it, create) {
    // return a primitive with prefix
    if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!hasOwn(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F';
        // not necessary to add metadata
        if (!create) return 'E';
        // add missing metadata
        setMetadata(it);
    // return object ID
    }
    return it[METADATA].objectID;
};
var getWeakData = function(it, create) {
    if (!hasOwn(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true;
        // not necessary to add metadata
        if (!create) return false;
        // add missing metadata
        setMetadata(it);
    // return the store of weak collections IDs
    }
    return it[METADATA].weakData;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it) {
    if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
    return it;
};
var enable = function() {
    meta.enable = function() {
    };
    REQUIRED = true;
    var getOwnPropertyNames = getOwnPropertyNamesModule.f;
    var splice = uncurryThis([].splice);
    var test = {
    };
    test[METADATA] = 1;
    // prevent exposing of metadata key
    if (getOwnPropertyNames(test).length) {
        getOwnPropertyNamesModule.f = function(it) {
            var result = getOwnPropertyNames(it);
            for(var i = 0, length = result.length; i < length; i++)if (result[i] === METADATA) {
                splice(result, i, 1);
                break;
            }
            return result;
        };
        $({
            target: 'Object',
            stat: true,
            forced: true
        }, {
            getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
        });
    }
};
var meta = module.exports = {
    enable: enable,
    fastKey: fastKey,
    getWeakData: getWeakData,
    onFreeze: onFreeze
};
hiddenKeys[METADATA] = true;

},{"../internals/export":"2mZbc","../internals/function-uncurry-this":"gBsQL","../internals/hidden-keys":"8TVAY","../internals/is-object":"d60Kc","../internals/has-own-property":"kL9Yw","../internals/object-define-property":"iKHmb","../internals/object-get-own-property-names":"38UqD","../internals/object-get-own-property-names-external":"ivjog","../internals/object-is-extensible":"d60is","../internals/uid":"9DssZ","../internals/freezing":"8zb2E"}],"d60is":[function(require,module,exports) {
var fails = require('../internals/fails');
var isObject = require('../internals/is-object');
var classof = require('../internals/classof-raw');
var ARRAY_BUFFER_NON_EXTENSIBLE = require('../internals/array-buffer-non-extensible');
// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function() {
    $isExtensible(1);
});
// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
module.exports = FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE ? function isExtensible(it) {
    if (!isObject(it)) return false;
    if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) == 'ArrayBuffer') return false;
    return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;

},{"../internals/fails":"byxLb","../internals/is-object":"d60Kc","../internals/classof-raw":"8F0bi","../internals/array-buffer-non-extensible":"iIDDr"}],"iIDDr":[function(require,module,exports) {
// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails = require('../internals/fails');
module.exports = fails(function() {
    if (typeof ArrayBuffer == 'function') {
        var buffer = new ArrayBuffer(8);
        // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
        if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', {
            value: 8
        });
    }
});

},{"../internals/fails":"byxLb"}],"8zb2E":[function(require,module,exports) {
var fails = require('../internals/fails');
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
    return Object.isExtensible(Object.preventExtensions({
    }));
});

},{"../internals/fails":"byxLb"}],"hibUM":[function(require,module,exports) {
'use strict';
var defineProperty = require('../internals/object-define-property').f;
var create = require('../internals/object-create');
var defineBuiltIns = require('../internals/define-built-ins');
var bind = require('../internals/function-bind-context');
var anInstance = require('../internals/an-instance');
var isNullOrUndefined = require('../internals/is-null-or-undefined');
var iterate = require('../internals/iterate');
var defineIterator = require('../internals/iterator-define');
var createIterResultObject = require('../internals/create-iter-result-object');
var setSpecies = require('../internals/set-species');
var DESCRIPTORS = require('../internals/descriptors');
var fastKey = require('../internals/internal-metadata').fastKey;
var InternalStateModule = require('../internals/internal-state');
var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
module.exports = {
    getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
        var Constructor = wrapper(function(that, iterable) {
            anInstance(that, Prototype);
            setInternalState(that, {
                type: CONSTRUCTOR_NAME,
                index: create(null),
                first: undefined,
                last: undefined,
                size: 0
            });
            if (!DESCRIPTORS) that.size = 0;
            if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], {
                that: that,
                AS_ENTRIES: IS_MAP
            });
        });
        var Prototype = Constructor.prototype;
        var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
        var define = function(that, key, value) {
            var state = getInternalState(that);
            var entry = getEntry(that, key);
            var previous, index;
            // change existing entry
            if (entry) entry.value = value;
            else {
                state.last = entry = {
                    index: index = fastKey(key, true),
                    key: key,
                    value: value,
                    previous: previous = state.last,
                    next: undefined,
                    removed: false
                };
                if (!state.first) state.first = entry;
                if (previous) previous.next = entry;
                if (DESCRIPTORS) state.size++;
                else that.size++;
                // add to index
                if (index !== 'F') state.index[index] = entry;
            }
            return that;
        };
        var getEntry = function(that, key) {
            var state = getInternalState(that);
            // fast case
            var index = fastKey(key);
            var entry;
            if (index !== 'F') return state.index[index];
            // frozen object case
            for(entry = state.first; entry; entry = entry.next){
                if (entry.key == key) return entry;
            }
        };
        defineBuiltIns(Prototype, {
            // `{ Map, Set }.prototype.clear()` methods
            // https://tc39.es/ecma262/#sec-map.prototype.clear
            // https://tc39.es/ecma262/#sec-set.prototype.clear
            clear: function clear() {
                var that = this;
                var state = getInternalState(that);
                var data = state.index;
                var entry = state.first;
                while(entry){
                    entry.removed = true;
                    if (entry.previous) entry.previous = entry.previous.next = undefined;
                    delete data[entry.index];
                    entry = entry.next;
                }
                state.first = state.last = undefined;
                if (DESCRIPTORS) state.size = 0;
                else that.size = 0;
            },
            // `{ Map, Set }.prototype.delete(key)` methods
            // https://tc39.es/ecma262/#sec-map.prototype.delete
            // https://tc39.es/ecma262/#sec-set.prototype.delete
            'delete': function(key) {
                var that = this;
                var state = getInternalState(that);
                var entry = getEntry(that, key);
                if (entry) {
                    var next = entry.next;
                    var prev = entry.previous;
                    delete state.index[entry.index];
                    entry.removed = true;
                    if (prev) prev.next = next;
                    if (next) next.previous = prev;
                    if (state.first == entry) state.first = next;
                    if (state.last == entry) state.last = prev;
                    if (DESCRIPTORS) state.size--;
                    else that.size--;
                }
                return !!entry;
            },
            // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
            // https://tc39.es/ecma262/#sec-map.prototype.foreach
            // https://tc39.es/ecma262/#sec-set.prototype.foreach
            forEach: function forEach(callbackfn /* , that = undefined */ ) {
                var state = getInternalState(this);
                var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                var entry;
                while(entry = entry ? entry.next : state.first){
                    boundFunction(entry.value, entry.key, this);
                    // revert to the last existing entry
                    while(entry && entry.removed)entry = entry.previous;
                }
            },
            // `{ Map, Set}.prototype.has(key)` methods
            // https://tc39.es/ecma262/#sec-map.prototype.has
            // https://tc39.es/ecma262/#sec-set.prototype.has
            has: function has(key) {
                return !!getEntry(this, key);
            }
        });
        defineBuiltIns(Prototype, IS_MAP ? {
            // `Map.prototype.get(key)` method
            // https://tc39.es/ecma262/#sec-map.prototype.get
            get: function get(key) {
                var entry = getEntry(this, key);
                return entry && entry.value;
            },
            // `Map.prototype.set(key, value)` method
            // https://tc39.es/ecma262/#sec-map.prototype.set
            set: function set(key, value) {
                return define(this, key === 0 ? 0 : key, value);
            }
        } : {
            // `Set.prototype.add(value)` method
            // https://tc39.es/ecma262/#sec-set.prototype.add
            add: function add(value) {
                return define(this, value = value === 0 ? 0 : value, value);
            }
        });
        if (DESCRIPTORS) defineProperty(Prototype, 'size', {
            get: function() {
                return getInternalState(this).size;
            }
        });
        return Constructor;
    },
    setStrong: function(Constructor, CONSTRUCTOR_NAME, IS_MAP) {
        var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
        var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
        var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
        // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
        // https://tc39.es/ecma262/#sec-map.prototype.entries
        // https://tc39.es/ecma262/#sec-map.prototype.keys
        // https://tc39.es/ecma262/#sec-map.prototype.values
        // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
        // https://tc39.es/ecma262/#sec-set.prototype.entries
        // https://tc39.es/ecma262/#sec-set.prototype.keys
        // https://tc39.es/ecma262/#sec-set.prototype.values
        // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
        defineIterator(Constructor, CONSTRUCTOR_NAME, function(iterated, kind) {
            setInternalState(this, {
                type: ITERATOR_NAME,
                target: iterated,
                state: getInternalCollectionState(iterated),
                kind: kind,
                last: undefined
            });
        }, function() {
            var state = getInternalIteratorState(this);
            var kind = state.kind;
            var entry = state.last;
            // revert to the last existing entry
            while(entry && entry.removed)entry = entry.previous;
            // get next entry
            if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
                // or finish the iteration
                state.target = undefined;
                return createIterResultObject(undefined, true);
            }
            // return step by kind
            if (kind == 'keys') return createIterResultObject(entry.key, false);
            if (kind == 'values') return createIterResultObject(entry.value, false);
            return createIterResultObject([
                entry.key,
                entry.value
            ], false);
        }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
        // `{ Map, Set }.prototype[@@species]` accessors
        // https://tc39.es/ecma262/#sec-get-map-@@species
        // https://tc39.es/ecma262/#sec-get-set-@@species
        setSpecies(CONSTRUCTOR_NAME);
    }
};

},{"../internals/object-define-property":"iKHmb","../internals/object-create":"eYZeq","../internals/define-built-ins":"eEmje","../internals/function-bind-context":"1epb9","../internals/an-instance":"gTr5k","../internals/is-null-or-undefined":"kssQ6","../internals/iterate":"a4R19","../internals/iterator-define":"18N5X","../internals/create-iter-result-object":"1dfgC","../internals/set-species":"99lPJ","../internals/descriptors":"kuDzl","../internals/internal-metadata":"5OjLO","../internals/internal-state":"ceuiK"}],"6Q3zo":[function(require,module,exports) {
var $ = require('../internals/export');
var log1p = require('../internals/math-log1p');
// eslint-disable-next-line es/no-math-acosh -- required for testing
var $acosh = Math.acosh;
var log = Math.log;
var sqrt = Math.sqrt;
var LN2 = Math.LN2;
var FORCED = !$acosh || Math.floor($acosh(Number.MAX_VALUE)) != 710 || $acosh(Infinity) != Infinity;
// `Math.acosh` method
// https://tc39.es/ecma262/#sec-math.acosh
$({
    target: 'Math',
    stat: true,
    forced: FORCED
}, {
    acosh: function acosh(x) {
        var n = +x;
        return n < 1 ? NaN : n > 94906265.62425156 ? log(n) + LN2 : log1p(n - 1 + sqrt(n - 1) * sqrt(n + 1));
    }
});

},{"../internals/export":"2mZbc","../internals/math-log1p":"isHMF"}],"isHMF":[function(require,module,exports) {
var log = Math.log;
// `Math.log1p` method implementation
// https://tc39.es/ecma262/#sec-math.log1p
// eslint-disable-next-line es/no-math-log1p -- safe
module.exports = Math.log1p || function log1p(x) {
    var n = +x;
    return n > -0.00000001 && n < 0.00000001 ? n - n * n / 2 : log(1 + n);
};

},{}],"d1XOI":[function(require,module,exports) {
var $ = require('../internals/export');
// eslint-disable-next-line es/no-math-asinh -- required for testing
var $asinh = Math.asinh;
var log = Math.log;
var sqrt = Math.sqrt;
function asinh(x) {
    var n = +x;
    return !isFinite(n) || n == 0 ? n : n < 0 ? -asinh(-n) : log(n + sqrt(n * n + 1));
}
var FORCED = !($asinh && 1 / $asinh(0) > 0);
// `Math.asinh` method
// https://tc39.es/ecma262/#sec-math.asinh
// Tor Browser bug: Math.asinh(0) -> -0
$({
    target: 'Math',
    stat: true,
    forced: FORCED
}, {
    asinh: asinh
});

},{"../internals/export":"2mZbc"}],"5D0SG":[function(require,module,exports) {
var $ = require('../internals/export');
// eslint-disable-next-line es/no-math-atanh -- required for testing
var $atanh = Math.atanh;
var log = Math.log;
var FORCED = !($atanh && 1 / $atanh(-0) < 0);
// `Math.atanh` method
// https://tc39.es/ecma262/#sec-math.atanh
// Tor Browser bug: Math.atanh(-0) -> 0
$({
    target: 'Math',
    stat: true,
    forced: FORCED
}, {
    atanh: function atanh(x) {
        var n = +x;
        return n == 0 ? n : log((1 + n) / (1 - n)) / 2;
    }
});

},{"../internals/export":"2mZbc"}],"l5TVA":[function(require,module,exports) {
var $ = require('../internals/export');
var sign = require('../internals/math-sign');
var abs = Math.abs;
var pow = Math.pow;
// `Math.cbrt` method
// https://tc39.es/ecma262/#sec-math.cbrt
$({
    target: 'Math',
    stat: true
}, {
    cbrt: function cbrt(x) {
        var n = +x;
        return sign(n) * pow(abs(n), 1 / 3);
    }
});

},{"../internals/export":"2mZbc","../internals/math-sign":"hGl9f"}],"hGl9f":[function(require,module,exports) {
// `Math.sign` method implementation
// https://tc39.es/ecma262/#sec-math.sign
// eslint-disable-next-line es/no-math-sign -- safe
module.exports = Math.sign || function sign(x) {
    var n = +x;
    // eslint-disable-next-line no-self-compare -- NaN check
    return n == 0 || n != n ? n : n < 0 ? -1 : 1;
};

},{}],"bJrnh":[function(require,module,exports) {
var $ = require('../internals/export');
var floor = Math.floor;
var log = Math.log;
var LOG2E = Math.LOG2E;
// `Math.clz32` method
// https://tc39.es/ecma262/#sec-math.clz32
$({
    target: 'Math',
    stat: true
}, {
    clz32: function clz32(x) {
        var n = x >>> 0;
        return n ? 31 - floor(log(n + 0.5) * LOG2E) : 32;
    }
});

},{"../internals/export":"2mZbc"}],"6w8zd":[function(require,module,exports) {
var $ = require('../internals/export');
var expm1 = require('../internals/math-expm1');
// eslint-disable-next-line es/no-math-cosh -- required for testing
var $cosh = Math.cosh;
var abs = Math.abs;
var E = Math.E;
var FORCED = !$cosh || $cosh(710) === Infinity;
// `Math.cosh` method
// https://tc39.es/ecma262/#sec-math.cosh
$({
    target: 'Math',
    stat: true,
    forced: FORCED
}, {
    cosh: function cosh(x) {
        var t = expm1(abs(x) - 1) + 1;
        return (t + 1 / (t * E * E)) * (E / 2);
    }
});

},{"../internals/export":"2mZbc","../internals/math-expm1":"iqG48"}],"iqG48":[function(require,module,exports) {
// eslint-disable-next-line es/no-math-expm1 -- safe
var $expm1 = Math.expm1;
var exp = Math.exp;
// `Math.expm1` method implementation
// https://tc39.es/ecma262/#sec-math.expm1
module.exports = !$expm1 || $expm1(10) > 22025.465794806718 || $expm1(10) < 22025.465794806718 || $expm1(-0.00000000000000002) != -0.00000000000000002 ? function expm1(x) {
    var n = +x;
    return n == 0 ? n : n > -0.000001 && n < 0.000001 ? n + n * n / 2 : exp(n) - 1;
} : $expm1;

},{}],"9DJbl":[function(require,module,exports) {
var $ = require('../internals/export');
var expm1 = require('../internals/math-expm1');
// `Math.expm1` method
// https://tc39.es/ecma262/#sec-math.expm1
// eslint-disable-next-line es/no-math-expm1 -- required for testing
$({
    target: 'Math',
    stat: true,
    forced: expm1 != Math.expm1
}, {
    expm1: expm1
});

},{"../internals/export":"2mZbc","../internals/math-expm1":"iqG48"}],"6tufR":[function(require,module,exports) {
var $ = require('../internals/export');
var fround = require('../internals/math-fround');
// `Math.fround` method
// https://tc39.es/ecma262/#sec-math.fround
$({
    target: 'Math',
    stat: true
}, {
    fround: fround
});

},{"../internals/export":"2mZbc","../internals/math-fround":"hI6TW"}],"hI6TW":[function(require,module,exports) {
var sign = require('../internals/math-sign');
var abs = Math.abs;
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);
var roundTiesToEven = function(n) {
    return n + 1 / EPSILON - 1 / EPSILON;
};
// `Math.fround` method implementation
// https://tc39.es/ecma262/#sec-math.fround
// eslint-disable-next-line es/no-math-fround -- safe
module.exports = Math.fround || function fround(x) {
    var n = +x;
    var $abs = abs(n);
    var $sign = sign(n);
    var a, result;
    if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs);
    // eslint-disable-next-line no-self-compare -- NaN check
    if (result > MAX32 || result != result) return $sign * Infinity;
    return $sign * result;
};

},{"../internals/math-sign":"hGl9f"}],"aSB3F":[function(require,module,exports) {
var $ = require('../internals/export');
// eslint-disable-next-line es/no-math-hypot -- required for testing
var $hypot = Math.hypot;
var abs = Math.abs;
var sqrt = Math.sqrt;
// Chrome 77 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=9546
var FORCED = !!$hypot && $hypot(Infinity, NaN) !== Infinity;
// `Math.hypot` method
// https://tc39.es/ecma262/#sec-math.hypot
$({
    target: 'Math',
    stat: true,
    arity: 2,
    forced: FORCED
}, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    hypot: function hypot(value1, value2) {
        var sum = 0;
        var i = 0;
        var aLen = arguments.length;
        var larg = 0;
        var arg, div;
        while(i < aLen){
            arg = abs(arguments[i++]);
            if (larg < arg) {
                div = larg / arg;
                sum = sum * div * div + 1;
                larg = arg;
            } else if (arg > 0) {
                div = arg / larg;
                sum += div * div;
            } else sum += arg;
        }
        return larg === Infinity ? Infinity : larg * sqrt(sum);
    }
});

},{"../internals/export":"2mZbc"}],"5Tpna":[function(require,module,exports) {
var $ = require('../internals/export');
var fails = require('../internals/fails');
// eslint-disable-next-line es/no-math-imul -- required for testing
var $imul = Math.imul;
var FORCED = fails(function() {
    return $imul(4294967295, 5) != -5 || $imul.length != 2;
});
// `Math.imul` method
// https://tc39.es/ecma262/#sec-math.imul
// some WebKit versions fails with big numbers, some has wrong arity
$({
    target: 'Math',
    stat: true,
    forced: FORCED
}, {
    imul: function imul(x, y) {
        var UINT16 = 65535;
        var xn = +x;
        var yn = +y;
        var xl = UINT16 & xn;
        var yl = UINT16 & yn;
        return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
    }
});

},{"../internals/export":"2mZbc","../internals/fails":"byxLb"}],"bTcHD":[function(require,module,exports) {
var $ = require('../internals/export');
var log10 = require('../internals/math-log10');
// `Math.log10` method
// https://tc39.es/ecma262/#sec-math.log10
$({
    target: 'Math',
    stat: true
}, {
    log10: log10
});

},{"../internals/export":"2mZbc","../internals/math-log10":"l4c4K"}],"l4c4K":[function(require,module,exports) {
var log = Math.log;
var LOG10E = Math.LOG10E;
// eslint-disable-next-line es/no-math-log10 -- safe
module.exports = Math.log10 || function log10(x) {
    return log(x) * LOG10E;
};

},{}],"jNyU5":[function(require,module,exports) {
var $ = require('../internals/export');
var log1p = require('../internals/math-log1p');
// `Math.log1p` method
// https://tc39.es/ecma262/#sec-math.log1p
$({
    target: 'Math',
    stat: true
}, {
    log1p: log1p
});

},{"../internals/export":"2mZbc","../internals/math-log1p":"isHMF"}],"2m7Uz":[function(require,module,exports) {
var $ = require('../internals/export');
var log = Math.log;
var LN2 = Math.LN2;
// `Math.log2` method
// https://tc39.es/ecma262/#sec-math.log2
$({
    target: 'Math',
    stat: true
}, {
    log2: function log2(x) {
        return log(x) / LN2;
    }
});

},{"../internals/export":"2mZbc"}],"7yRUV":[function(require,module,exports) {
var $ = require('../internals/export');
var sign = require('../internals/math-sign');
// `Math.sign` method
// https://tc39.es/ecma262/#sec-math.sign
$({
    target: 'Math',
    stat: true
}, {
    sign: sign
});

},{"../internals/export":"2mZbc","../internals/math-sign":"hGl9f"}],"loaKI":[function(require,module,exports) {
var $ = require('../internals/export');
var fails = require('../internals/fails');
var expm1 = require('../internals/math-expm1');
var abs = Math.abs;
var exp = Math.exp;
var E = Math.E;
var FORCED = fails(function() {
    // eslint-disable-next-line es/no-math-sinh -- required for testing
    return Math.sinh(-0.00000000000000002) != -0.00000000000000002;
});
// `Math.sinh` method
// https://tc39.es/ecma262/#sec-math.sinh
// V8 near Chromium 38 has a problem with very small numbers
$({
    target: 'Math',
    stat: true,
    forced: FORCED
}, {
    sinh: function sinh(x) {
        var n = +x;
        return abs(n) < 1 ? (expm1(n) - expm1(-n)) / 2 : (exp(n - 1) - exp(-n - 1)) * (E / 2);
    }
});

},{"../internals/export":"2mZbc","../internals/fails":"byxLb","../internals/math-expm1":"iqG48"}],"dwPS4":[function(require,module,exports) {
var $ = require('../internals/export');
var expm1 = require('../internals/math-expm1');
var exp = Math.exp;
// `Math.tanh` method
// https://tc39.es/ecma262/#sec-math.tanh
$({
    target: 'Math',
    stat: true
}, {
    tanh: function tanh(x) {
        var n = +x;
        var a = expm1(n);
        var b = expm1(-n);
        return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(n) + exp(-n));
    }
});

},{"../internals/export":"2mZbc","../internals/math-expm1":"iqG48"}],"96Wzg":[function(require,module,exports) {
var setToStringTag = require('../internals/set-to-string-tag');
// Math[@@toStringTag] property
// https://tc39.es/ecma262/#sec-math-@@tostringtag
setToStringTag(Math, 'Math', true);

},{"../internals/set-to-string-tag":"cFbSt"}],"31xhu":[function(require,module,exports) {
var $ = require('../internals/export');
var trunc = require('../internals/math-trunc');
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
$({
    target: 'Math',
    stat: true
}, {
    trunc: trunc
});

},{"../internals/export":"2mZbc","../internals/math-trunc":"2ClGd"}],"5DN40":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var DESCRIPTORS = require('../internals/descriptors');
var global = require('../internals/global');
var path = require('../internals/path');
var uncurryThis = require('../internals/function-uncurry-this');
var isForced = require('../internals/is-forced');
var hasOwn = require('../internals/has-own-property');
var inheritIfRequired = require('../internals/inherit-if-required');
var isPrototypeOf = require('../internals/object-is-prototype-of');
var isSymbol = require('../internals/is-symbol');
var toPrimitive = require('../internals/to-primitive');
var fails = require('../internals/fails');
var getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var defineProperty = require('../internals/object-define-property').f;
var thisNumberValue = require('../internals/this-number-value');
var trim = require('../internals/string-trim').trim;
var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var PureNumberNamespace = path[NUMBER];
var NumberPrototype = NativeNumber.prototype;
var TypeError1 = global.TypeError;
var stringSlice = uncurryThis(''.slice);
var charCodeAt = uncurryThis(''.charCodeAt);
// `ToNumeric` abstract operation
// https://tc39.es/ecma262/#sec-tonumeric
var toNumeric = function(value) {
    var primValue = toPrimitive(value, 'number');
    return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
};
// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function(argument) {
    var it = toPrimitive(argument, 'number');
    var first, third, radix, maxCode, digits, length, index, code;
    if (isSymbol(it)) throw TypeError1('Cannot convert a Symbol value to a number');
    if (typeof it == 'string' && it.length > 2) {
        it = trim(it);
        first = charCodeAt(it, 0);
        if (first === 43 || first === 45) {
            third = charCodeAt(it, 2);
            if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
        } else if (first === 48) {
            switch(charCodeAt(it, 1)){
                case 66:
                case 98:
                    radix = 2;
                    maxCode = 49;
                    break; // fast equal of /^0b[01]+$/i
                case 79:
                case 111:
                    radix = 8;
                    maxCode = 55;
                    break; // fast equal of /^0o[0-7]+$/i
                default:
                    return +it;
            }
            digits = stringSlice(it, 2);
            length = digits.length;
            for(index = 0; index < length; index++){
                code = charCodeAt(digits, index);
                // parseInt parses a string to a first unavailable symbol
                // but ToNumber should return NaN if a string contains unavailable symbols
                if (code < 48 || code > maxCode) return NaN;
            }
            return parseInt(digits, radix);
        }
    }
    return +it;
};
var FORCED = isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'));
var calledWithNew = function(dummy) {
    // includes check on 1..constructor(foo) case
    return isPrototypeOf(NumberPrototype, dummy) && fails(function() {
        thisNumberValue(dummy);
    });
};
// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
var NumberWrapper = function Number1(value) {
    var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
    return calledWithNew(this) ? inheritIfRequired(Object(n), this, NumberWrapper) : n;
};
NumberWrapper.prototype = NumberPrototype;
if (FORCED && !IS_PURE) NumberPrototype.constructor = NumberWrapper;
$({
    global: true,
    constructor: true,
    wrap: true,
    forced: FORCED
}, {
    Number: NumberWrapper
});
// Use `internal/copy-constructor-properties` helper in `core-js@4`
var copyConstructorProperties = function(target, source) {
    for(var keys = DESCRIPTORS ? getOwnPropertyNames(source) : // ES3:
    "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(','), j = 0, key; keys.length > j; j++)if (hasOwn(source, key = keys[j]) && !hasOwn(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
};
if (IS_PURE && PureNumberNamespace) copyConstructorProperties(path[NUMBER], PureNumberNamespace);
if (FORCED || IS_PURE) copyConstructorProperties(path[NUMBER], NativeNumber);

},{"../internals/export":"2mZbc","../internals/is-pure":"dlbEd","../internals/descriptors":"kuDzl","../internals/global":"a4GR8","../internals/path":"cV4BF","../internals/function-uncurry-this":"gBsQL","../internals/is-forced":"djqhI","../internals/has-own-property":"kL9Yw","../internals/inherit-if-required":"5Ef3J","../internals/object-is-prototype-of":"gFfbX","../internals/is-symbol":"hfIC8","../internals/to-primitive":"LSiNW","../internals/fails":"byxLb","../internals/object-get-own-property-names":"38UqD","../internals/object-get-own-property-descriptor":"hwpsT","../internals/object-define-property":"iKHmb","../internals/this-number-value":"94b57","../internals/string-trim":"crV5l"}],"94b57":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = uncurryThis(1..valueOf);

},{"../internals/function-uncurry-this":"gBsQL"}],"crV5l":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var requireObjectCoercible = require('../internals/require-object-coercible');
var toString = require('../internals/to-string');
var whitespaces = require('../internals/whitespaces');
var replace = uncurryThis(''.replace);
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');
// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function(TYPE) {
    return function($this) {
        var string = toString(requireObjectCoercible($this));
        if (TYPE & 1) string = replace(string, ltrim, '');
        if (TYPE & 2) string = replace(string, rtrim, '');
        return string;
    };
};
module.exports = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod(3)
};

},{"../internals/function-uncurry-this":"gBsQL","../internals/require-object-coercible":"1XURO","../internals/to-string":"k0ZQF","../internals/whitespaces":"l0FoE"}],"l0FoE":[function(require,module,exports) {
// a string of all valid unicode whitespaces
module.exports = "\t\n\v\f\r \xa0              　  ﻿";

},{}],"6N90G":[function(require,module,exports) {
var $ = require('../internals/export');
// `Number.EPSILON` constant
// https://tc39.es/ecma262/#sec-number.epsilon
$({
    target: 'Number',
    stat: true,
    nonConfigurable: true,
    nonWritable: true
}, {
    EPSILON: Math.pow(2, -52)
});

},{"../internals/export":"2mZbc"}],"hI7wQ":[function(require,module,exports) {
var $ = require('../internals/export');
var numberIsFinite = require('../internals/number-is-finite');
// `Number.isFinite` method
// https://tc39.es/ecma262/#sec-number.isfinite
$({
    target: 'Number',
    stat: true
}, {
    isFinite: numberIsFinite
});

},{"../internals/export":"2mZbc","../internals/number-is-finite":"19jl2"}],"19jl2":[function(require,module,exports) {
var global = require('../internals/global');
var globalIsFinite = global.isFinite;
// `Number.isFinite` method
// https://tc39.es/ecma262/#sec-number.isfinite
// eslint-disable-next-line es/no-number-isfinite -- safe
module.exports = Number.isFinite || function isFinite(it) {
    return typeof it == 'number' && globalIsFinite(it);
};

},{"../internals/global":"a4GR8"}],"57kzb":[function(require,module,exports) {
var $ = require('../internals/export');
var isIntegralNumber = require('../internals/is-integral-number');
// `Number.isInteger` method
// https://tc39.es/ecma262/#sec-number.isinteger
$({
    target: 'Number',
    stat: true
}, {
    isInteger: isIntegralNumber
});

},{"../internals/export":"2mZbc","../internals/is-integral-number":"fjOCz"}],"fjOCz":[function(require,module,exports) {
var isObject = require('../internals/is-object');
var floor = Math.floor;
// `IsIntegralNumber` abstract operation
// https://tc39.es/ecma262/#sec-isintegralnumber
// eslint-disable-next-line es/no-number-isinteger -- safe
module.exports = Number.isInteger || function isInteger(it) {
    return !isObject(it) && isFinite(it) && floor(it) === it;
};

},{"../internals/is-object":"d60Kc"}],"aJ0lS":[function(require,module,exports) {
var $ = require('../internals/export');
// `Number.isNaN` method
// https://tc39.es/ecma262/#sec-number.isnan
$({
    target: 'Number',
    stat: true
}, {
    isNaN: function isNaN(number) {
        // eslint-disable-next-line no-self-compare -- NaN check
        return number != number;
    }
});

},{"../internals/export":"2mZbc"}],"2sa8K":[function(require,module,exports) {
var $ = require('../internals/export');
var isIntegralNumber = require('../internals/is-integral-number');
var abs = Math.abs;
// `Number.isSafeInteger` method
// https://tc39.es/ecma262/#sec-number.issafeinteger
$({
    target: 'Number',
    stat: true
}, {
    isSafeInteger: function isSafeInteger(number) {
        return isIntegralNumber(number) && abs(number) <= 9007199254740991;
    }
});

},{"../internals/export":"2mZbc","../internals/is-integral-number":"fjOCz"}],"ceCFQ":[function(require,module,exports) {
var $ = require('../internals/export');
// `Number.MAX_SAFE_INTEGER` constant
// https://tc39.es/ecma262/#sec-number.max_safe_integer
$({
    target: 'Number',
    stat: true,
    nonConfigurable: true,
    nonWritable: true
}, {
    MAX_SAFE_INTEGER: 9007199254740991
});

},{"../internals/export":"2mZbc"}],"cfRrX":[function(require,module,exports) {
var $ = require('../internals/export');
// `Number.MIN_SAFE_INTEGER` constant
// https://tc39.es/ecma262/#sec-number.min_safe_integer
$({
    target: 'Number',
    stat: true,
    nonConfigurable: true,
    nonWritable: true
}, {
    MIN_SAFE_INTEGER: -9007199254740991
});

},{"../internals/export":"2mZbc"}],"9MahJ":[function(require,module,exports) {
var $ = require('../internals/export');
var parseFloat = require('../internals/number-parse-float');
// `Number.parseFloat` method
// https://tc39.es/ecma262/#sec-number.parseFloat
// eslint-disable-next-line es/no-number-parsefloat -- required for testing
$({
    target: 'Number',
    stat: true,
    forced: Number.parseFloat != parseFloat
}, {
    parseFloat: parseFloat
});

},{"../internals/export":"2mZbc","../internals/number-parse-float":"9D8Wd"}],"9D8Wd":[function(require,module,exports) {
var global = require('../internals/global');
var fails = require('../internals/fails');
var uncurryThis = require('../internals/function-uncurry-this');
var toString = require('../internals/to-string');
var trim = require('../internals/string-trim').trim;
var whitespaces = require('../internals/whitespaces');
var charAt = uncurryThis(''.charAt);
var $parseFloat = global.parseFloat;
var Symbol1 = global.Symbol;
var ITERATOR = Symbol1 && Symbol1.iterator;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity || ITERATOR && !fails(function() {
    $parseFloat(Object(ITERATOR));
});
// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
    var trimmedString = trim(toString(string));
    var result = $parseFloat(trimmedString);
    return result === 0 && charAt(trimmedString, 0) == '-' ? -0 : result;
} : $parseFloat;

},{"../internals/global":"a4GR8","../internals/fails":"byxLb","../internals/function-uncurry-this":"gBsQL","../internals/to-string":"k0ZQF","../internals/string-trim":"crV5l","../internals/whitespaces":"l0FoE"}],"lJYd7":[function(require,module,exports) {
var $ = require('../internals/export');
var parseInt = require('../internals/number-parse-int');
// `Number.parseInt` method
// https://tc39.es/ecma262/#sec-number.parseint
// eslint-disable-next-line es/no-number-parseint -- required for testing
$({
    target: 'Number',
    stat: true,
    forced: Number.parseInt != parseInt
}, {
    parseInt: parseInt
});

},{"../internals/export":"2mZbc","../internals/number-parse-int":"aSmbJ"}],"aSmbJ":[function(require,module,exports) {
var global = require('../internals/global');
var fails = require('../internals/fails');
var uncurryThis = require('../internals/function-uncurry-this');
var toString = require('../internals/to-string');
var trim = require('../internals/string-trim').trim;
var whitespaces = require('../internals/whitespaces');
var $parseInt = global.parseInt;
var Symbol1 = global.Symbol;
var ITERATOR = Symbol1 && Symbol1.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis(hex.exec);
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22 || ITERATOR && !fails(function() {
    $parseInt(Object(ITERATOR));
});
// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
    var S = trim(toString(string));
    return $parseInt(S, radix >>> 0 || (exec(hex, S) ? 16 : 10));
} : $parseInt;

},{"../internals/global":"a4GR8","../internals/fails":"byxLb","../internals/function-uncurry-this":"gBsQL","../internals/to-string":"k0ZQF","../internals/string-trim":"crV5l","../internals/whitespaces":"l0FoE"}],"hD9Ee":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var thisNumberValue = require('../internals/this-number-value');
var $repeat = require('../internals/string-repeat');
var log10 = require('../internals/math-log10');
var fails = require('../internals/fails');
var $RangeError = RangeError;
var $String = String;
var $isFinite = isFinite;
var abs = Math.abs;
var floor = Math.floor;
var pow = Math.pow;
var round = Math.round;
var nativeToExponential = uncurryThis(1..toExponential);
var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
// Edge 17-
var ROUNDS_PROPERLY = nativeToExponential(-0.000000000069, 4) === '-6.9000e-11' && nativeToExponential(1.255, 2) === '1.25e+0' && nativeToExponential(12345, 3) === '1.235e+4' && nativeToExponential(25, 0) === '3e+1';
// IE8-
var throwsOnInfinityFraction = function() {
    return fails(function() {
        nativeToExponential(1, Infinity);
    }) && fails(function() {
        nativeToExponential(1, -Infinity);
    });
};
// Safari <11 && FF <50
var properNonFiniteThisCheck = function() {
    return !fails(function() {
        nativeToExponential(Infinity, Infinity);
        nativeToExponential(NaN, Infinity);
    });
};
var FORCED = !ROUNDS_PROPERLY || !throwsOnInfinityFraction() || !properNonFiniteThisCheck();
// `Number.prototype.toExponential` method
// https://tc39.es/ecma262/#sec-number.prototype.toexponential
$({
    target: 'Number',
    proto: true,
    forced: FORCED
}, {
    toExponential: function toExponential(fractionDigits) {
        var x = thisNumberValue(this);
        if (fractionDigits === undefined) return nativeToExponential(x);
        var f = toIntegerOrInfinity(fractionDigits);
        if (!$isFinite(x)) return String(x);
        // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation
        if (f < 0 || f > 20) throw $RangeError('Incorrect fraction digits');
        if (ROUNDS_PROPERLY) return nativeToExponential(x, f);
        var s = '';
        var m = '';
        var e = 0;
        var c = '';
        var d = '';
        if (x < 0) {
            s = '-';
            x = -x;
        }
        if (x === 0) {
            e = 0;
            m = repeat('0', f + 1);
        } else {
            // this block is based on https://gist.github.com/SheetJSDev/1100ad56b9f856c95299ed0e068eea08
            // TODO: improve accuracy with big fraction digits
            var l = log10(x);
            e = floor(l);
            var n = 0;
            var w = pow(10, e - f);
            n = round(x / w);
            if (2 * x >= (2 * n + 1) * w) n += 1;
            if (n >= pow(10, f + 1)) {
                n /= 10;
                e += 1;
            }
            m = $String(n);
        }
        if (f !== 0) m = stringSlice(m, 0, 1) + '.' + stringSlice(m, 1);
        if (e === 0) {
            c = '+';
            d = '0';
        } else {
            c = e > 0 ? '+' : '-';
            d = $String(abs(e));
        }
        m += 'e' + c + d;
        return s + m;
    }
});

},{"../internals/export":"2mZbc","../internals/function-uncurry-this":"gBsQL","../internals/to-integer-or-infinity":"7H3g3","../internals/this-number-value":"94b57","../internals/string-repeat":"8cSMA","../internals/math-log10":"l4c4K","../internals/fails":"byxLb"}],"THlev":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var thisNumberValue = require('../internals/this-number-value');
var $repeat = require('../internals/string-repeat');
var fails = require('../internals/fails');
var $RangeError = RangeError;
var $String = String;
var floor = Math.floor;
var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
var nativeToFixed = uncurryThis(1..toFixed);
var pow = function(x, n, acc) {
    return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function(x) {
    var n = 0;
    var x2 = x;
    while(x2 >= 4096){
        n += 12;
        x2 /= 4096;
    }
    while(x2 >= 2){
        n += 1;
        x2 /= 2;
    }
    return n;
};
var multiply = function(data, n, c) {
    var index = -1;
    var c2 = c;
    while((++index) < 6){
        c2 += n * data[index];
        data[index] = c2 % 10000000;
        c2 = floor(c2 / 10000000);
    }
};
var divide = function(data, n) {
    var index = 6;
    var c = 0;
    while((--index) >= 0){
        c += data[index];
        data[index] = floor(c / n);
        c = c % n * 10000000;
    }
};
var dataToString = function(data) {
    var index = 6;
    var s = '';
    while((--index) >= 0)if (s !== '' || index === 0 || data[index] !== 0) {
        var t = $String(data[index]);
        s = s === '' ? t : s + repeat('0', 7 - t.length) + t;
    }
    return s;
};
var FORCED = fails(function() {
    return nativeToFixed(0.00008, 3) !== '0.000' || nativeToFixed(0.9, 0) !== '1' || nativeToFixed(1.255, 2) !== '1.25' || nativeToFixed(1000000000000000100, 0) !== '1000000000000000128';
}) || !fails(function() {
    // V8 ~ Android 4.3-
    nativeToFixed({
    });
});
// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$({
    target: 'Number',
    proto: true,
    forced: FORCED
}, {
    toFixed: function toFixed(fractionDigits) {
        var number = thisNumberValue(this);
        var fractDigits = toIntegerOrInfinity(fractionDigits);
        var data = [
            0,
            0,
            0,
            0,
            0,
            0
        ];
        var sign = '';
        var result = '0';
        var e, z, j, k;
        // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation
        if (fractDigits < 0 || fractDigits > 20) throw $RangeError('Incorrect fraction digits');
        // eslint-disable-next-line no-self-compare -- NaN check
        if (number != number) return 'NaN';
        if (number <= -1000000000000000000000 || number >= 1000000000000000000000) return $String(number);
        if (number < 0) {
            sign = '-';
            number = -number;
        }
        if (number > 0.000000000000000000001) {
            e = log(number * pow(2, 69, 1)) - 69;
            z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
            z *= 4503599627370496;
            e = 52 - e;
            if (e > 0) {
                multiply(data, 0, z);
                j = fractDigits;
                while(j >= 7){
                    multiply(data, 10000000, 0);
                    j -= 7;
                }
                multiply(data, pow(10, j, 1), 0);
                j = e - 1;
                while(j >= 23){
                    divide(data, 8388608);
                    j -= 23;
                }
                divide(data, 1 << j);
                multiply(data, 1, 1);
                divide(data, 2);
                result = dataToString(data);
            } else {
                multiply(data, 0, z);
                multiply(data, 1 << -e, 0);
                result = dataToString(data) + repeat('0', fractDigits);
            }
        }
        if (fractDigits > 0) {
            k = result.length;
            result = sign + (k <= fractDigits ? '0.' + repeat('0', fractDigits - k) + result : stringSlice(result, 0, k - fractDigits) + '.' + stringSlice(result, k - fractDigits));
        } else result = sign + result;
        return result;
    }
});

},{"../internals/export":"2mZbc","../internals/function-uncurry-this":"gBsQL","../internals/to-integer-or-infinity":"7H3g3","../internals/this-number-value":"94b57","../internals/string-repeat":"8cSMA","../internals/fails":"byxLb"}],"kVGGb":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');
var fails = require('../internals/fails');
var thisNumberValue = require('../internals/this-number-value');
var nativeToPrecision = uncurryThis(1..toPrecision);
var FORCED = fails(function() {
    // IE7-
    return nativeToPrecision(1, undefined) !== '1';
}) || !fails(function() {
    // V8 ~ Android 4.3-
    nativeToPrecision({
    });
});
// `Number.prototype.toPrecision` method
// https://tc39.es/ecma262/#sec-number.prototype.toprecision
$({
    target: 'Number',
    proto: true,
    forced: FORCED
}, {
    toPrecision: function toPrecision(precision) {
        return precision === undefined ? nativeToPrecision(thisNumberValue(this)) : nativeToPrecision(thisNumberValue(this), precision);
    }
});

},{"../internals/export":"2mZbc","../internals/function-uncurry-this":"gBsQL","../internals/fails":"byxLb","../internals/this-number-value":"94b57"}],"6ZqF3":[function(require,module,exports) {
var $ = require('../internals/export');
var assign = require('../internals/object-assign');
// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({
    target: 'Object',
    stat: true,
    arity: 2,
    forced: Object.assign !== assign
}, {
    assign: assign
});

},{"../internals/export":"2mZbc","../internals/object-assign":"5r2ci"}],"5r2ci":[function(require,module,exports) {
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var uncurryThis = require('../internals/function-uncurry-this');
var call = require('../internals/function-call');
var fails = require('../internals/fails');
var objectKeys = require('../internals/object-keys');
var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
var toObject = require('../internals/to-object');
var IndexedObject = require('../internals/indexed-object');
// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);
// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function() {
    // should have correct order of operations (Edge bug)
    if (DESCRIPTORS && $assign({
        b: 1
    }, $assign(defineProperty({
    }, 'a', {
        enumerable: true,
        get: function() {
            defineProperty(this, 'b', {
                value: 3,
                enumerable: false
            });
        }
    }), {
        b: 2
    })).b !== 1) return true;
    // should work with symbols and should have deterministic property order (V8 bug)
    var A = {
    };
    var B = {
    };
    // eslint-disable-next-line es/no-symbol -- safe
    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function(chr) {
        B[chr] = chr;
    });
    return $assign({
    }, A)[symbol] != 7 || objectKeys($assign({
    }, B)).join('') != alphabet;
}) ? function assign(target, source) {
    var T = toObject(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    var propertyIsEnumerable = propertyIsEnumerableModule.f;
    while(argumentsLength > index){
        var S = IndexedObject(arguments[index++]);
        var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
        var length = keys.length;
        var j = 0;
        var key;
        while(length > j){
            key = keys[j++];
            if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
        }
    }
    return T;
} : $assign;

},{"../internals/descriptors":"kuDzl","../internals/function-uncurry-this":"gBsQL","../internals/function-call":"d0MId","../internals/fails":"byxLb","../internals/object-keys":"7so9x","../internals/object-get-own-property-symbols":"3jR7g","../internals/object-property-is-enumerable":"6JYDE","../internals/to-object":"ghTKi","../internals/indexed-object":"1hg9G"}],"2xLMD":[function(require,module,exports) {
// TODO: Remove from `core-js@4`
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var create = require('../internals/object-create');
// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
$({
    target: 'Object',
    stat: true,
    sham: !DESCRIPTORS
}, {
    create: create
});

},{"../internals/export":"2mZbc","../internals/descriptors":"kuDzl","../internals/object-create":"eYZeq"}],"606Pz":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var FORCED = require('../internals/object-prototype-accessors-forced');
var aCallable = require('../internals/a-callable');
var toObject = require('../internals/to-object');
var definePropertyModule = require('../internals/object-define-property');
// `Object.prototype.__defineGetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__defineGetter__
if (DESCRIPTORS) $({
    target: 'Object',
    proto: true,
    forced: FORCED
}, {
    __defineGetter__: function __defineGetter__(P, getter) {
        definePropertyModule.f(toObject(this), P, {
            get: aCallable(getter),
            enumerable: true,
            configurable: true
        });
    }
});

},{"../internals/export":"2mZbc","../internals/descriptors":"kuDzl","../internals/object-prototype-accessors-forced":"k3GQq","../internals/a-callable":"jnvBr","../internals/to-object":"ghTKi","../internals/object-define-property":"iKHmb"}],"k3GQq":[function(require,module,exports) {
'use strict';
var IS_PURE = require('../internals/is-pure');
var global = require('../internals/global');
var fails = require('../internals/fails');
var WEBKIT = require('../internals/engine-webkit-version');
// Forced replacement object prototype accessors methods
module.exports = IS_PURE || !fails(function() {
    // This feature detection crashes old WebKit
    // https://github.com/zloirock/core-js/issues/232
    if (WEBKIT && WEBKIT < 535) return;
    var key = Math.random();
    // In FF throws only define methods
    // eslint-disable-next-line no-undef, no-useless-call, es/no-legacy-object-prototype-accessor-methods -- required for testing
    __defineSetter__.call(null, key, function() {
    });
    delete global[key];
});

},{"../internals/is-pure":"dlbEd","../internals/global":"a4GR8","../internals/fails":"byxLb","../internals/engine-webkit-version":"6Jcx4"}],"fJ9J2":[function(require,module,exports) {
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var defineProperties = require('../internals/object-define-properties').f;
// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
$({
    target: 'Object',
    stat: true,
    forced: Object.defineProperties !== defineProperties,
    sham: !DESCRIPTORS
}, {
    defineProperties: defineProperties
});

},{"../internals/export":"2mZbc","../internals/descriptors":"kuDzl","../internals/object-define-properties":"4aS77"}],"59EGR":[function(require,module,exports) {
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var defineProperty = require('../internals/object-define-property').f;
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es/no-object-defineproperty -- safe
$({
    target: 'Object',
    stat: true,
    forced: Object.defineProperty !== defineProperty,
    sham: !DESCRIPTORS
}, {
    defineProperty: defineProperty
});

},{"../internals/export":"2mZbc","../internals/descriptors":"kuDzl","../internals/object-define-property":"iKHmb"}],"cFhpw":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var FORCED = require('../internals/object-prototype-accessors-forced');
var aCallable = require('../internals/a-callable');
var toObject = require('../internals/to-object');
var definePropertyModule = require('../internals/object-define-property');
// `Object.prototype.__defineSetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__defineSetter__
if (DESCRIPTORS) $({
    target: 'Object',
    proto: true,
    forced: FORCED
}, {
    __defineSetter__: function __defineSetter__(P, setter) {
        definePropertyModule.f(toObject(this), P, {
            set: aCallable(setter),
            enumerable: true,
            configurable: true
        });
    }
});

},{"../internals/export":"2mZbc","../internals/descriptors":"kuDzl","../internals/object-prototype-accessors-forced":"k3GQq","../internals/a-callable":"jnvBr","../internals/to-object":"ghTKi","../internals/object-define-property":"iKHmb"}],"e5Xxq":[function(require,module,exports) {
var $ = require('../internals/export');
var $entries = require('../internals/object-to-array').entries;
// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
$({
    target: 'Object',
    stat: true
}, {
    entries: function entries(O) {
        return $entries(O);
    }
});

},{"../internals/export":"2mZbc","../internals/object-to-array":"awU7u"}],"awU7u":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var uncurryThis = require('../internals/function-uncurry-this');
var objectKeys = require('../internals/object-keys');
var toIndexedObject = require('../internals/to-indexed-object');
var $propertyIsEnumerable = require('../internals/object-property-is-enumerable').f;
var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
var push = uncurryThis([].push);
// `Object.{ entries, values }` methods implementation
var createMethod = function(TO_ENTRIES) {
    return function(it) {
        var O = toIndexedObject(it);
        var keys = objectKeys(O);
        var length = keys.length;
        var i = 0;
        var result = [];
        var key;
        while(length > i){
            key = keys[i++];
            if (!DESCRIPTORS || propertyIsEnumerable(O, key)) push(result, TO_ENTRIES ? [
                key,
                O[key]
            ] : O[key]);
        }
        return result;
    };
};
module.exports = {
    // `Object.entries` method
    // https://tc39.es/ecma262/#sec-object.entries
    entries: createMethod(true),
    // `Object.values` method
    // https://tc39.es/ecma262/#sec-object.values
    values: createMethod(false)
};

},{"../internals/descriptors":"kuDzl","../internals/function-uncurry-this":"gBsQL","../internals/object-keys":"7so9x","../internals/to-indexed-object":"9N8sJ","../internals/object-property-is-enumerable":"6JYDE"}],"312H3":[function(require,module,exports) {
var $ = require('../internals/export');
var FREEZING = require('../internals/freezing');
var fails = require('../internals/fails');
var isObject = require('../internals/is-object');
var onFreeze = require('../internals/internal-metadata').onFreeze;
// eslint-disable-next-line es/no-object-freeze -- safe
var $freeze = Object.freeze;
var FAILS_ON_PRIMITIVES = fails(function() {
    $freeze(1);
});
// `Object.freeze` method
// https://tc39.es/ecma262/#sec-object.freeze
$({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES,
    sham: !FREEZING
}, {
    freeze: function freeze(it) {
        return $freeze && isObject(it) ? $freeze(onFreeze(it)) : it;
    }
});

},{"../internals/export":"2mZbc","../internals/freezing":"8zb2E","../internals/fails":"byxLb","../internals/is-object":"d60Kc","../internals/internal-metadata":"5OjLO"}],"e3o3h":[function(require,module,exports) {
var $ = require('../internals/export');
var iterate = require('../internals/iterate');
var createProperty = require('../internals/create-property');
// `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries
$({
    target: 'Object',
    stat: true
}, {
    fromEntries: function fromEntries(iterable) {
        var obj = {
        };
        iterate(iterable, function(k, v) {
            createProperty(obj, k, v);
        }, {
            AS_ENTRIES: true
        });
        return obj;
    }
});

},{"../internals/export":"2mZbc","../internals/iterate":"a4R19","../internals/create-property":"9DQWQ"}],"ihm1S":[function(require,module,exports) {
var $ = require('../internals/export');
var fails = require('../internals/fails');
var toIndexedObject = require('../internals/to-indexed-object');
var nativeGetOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var DESCRIPTORS = require('../internals/descriptors');
var FORCED = !DESCRIPTORS || fails(function() {
    nativeGetOwnPropertyDescriptor(1);
});
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({
    target: 'Object',
    stat: true,
    forced: FORCED,
    sham: !DESCRIPTORS
}, {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
        return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
    }
});

},{"../internals/export":"2mZbc","../internals/fails":"byxLb","../internals/to-indexed-object":"9N8sJ","../internals/object-get-own-property-descriptor":"hwpsT","../internals/descriptors":"kuDzl"}],"9OScw":[function(require,module,exports) {
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var ownKeys = require('../internals/own-keys');
var toIndexedObject = require('../internals/to-indexed-object');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var createProperty = require('../internals/create-property');
// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({
    target: 'Object',
    stat: true,
    sham: !DESCRIPTORS
}, {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
        var O = toIndexedObject(object);
        var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        var keys = ownKeys(O);
        var result = {
        };
        var index = 0;
        var key, descriptor;
        while(keys.length > index){
            descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
            if (descriptor !== undefined) createProperty(result, key, descriptor);
        }
        return result;
    }
});

},{"../internals/export":"2mZbc","../internals/descriptors":"kuDzl","../internals/own-keys":"dGiV1","../internals/to-indexed-object":"9N8sJ","../internals/object-get-own-property-descriptor":"hwpsT","../internals/create-property":"9DQWQ"}],"iic1E":[function(require,module,exports) {
var $ = require('../internals/export');
var fails = require('../internals/fails');
var getOwnPropertyNames = require('../internals/object-get-own-property-names-external').f;
// eslint-disable-next-line es/no-object-getownpropertynames -- required for testing
var FAILS_ON_PRIMITIVES = fails(function() {
    return !Object.getOwnPropertyNames(1);
});
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
$({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES
}, {
    getOwnPropertyNames: getOwnPropertyNames
});

},{"../internals/export":"2mZbc","../internals/fails":"byxLb","../internals/object-get-own-property-names-external":"ivjog"}],"e7kbe":[function(require,module,exports) {
var $ = require('../internals/export');
var fails = require('../internals/fails');
var toObject = require('../internals/to-object');
var nativeGetPrototypeOf = require('../internals/object-get-prototype-of');
var CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter');
var FAILS_ON_PRIMITIVES = fails(function() {
    nativeGetPrototypeOf(1);
});
// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
$({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES,
    sham: !CORRECT_PROTOTYPE_GETTER
}, {
    getPrototypeOf: function getPrototypeOf(it) {
        return nativeGetPrototypeOf(toObject(it));
    }
});

},{"../internals/export":"2mZbc","../internals/fails":"byxLb","../internals/to-object":"ghTKi","../internals/object-get-prototype-of":"4Xd6L","../internals/correct-prototype-getter":"dMqx3"}],"kYyCh":[function(require,module,exports) {
var $ = require('../internals/export');
var hasOwn = require('../internals/has-own-property');
// `Object.hasOwn` method
// https://github.com/tc39/proposal-accessible-object-hasownproperty
$({
    target: 'Object',
    stat: true
}, {
    hasOwn: hasOwn
});

},{"../internals/export":"2mZbc","../internals/has-own-property":"kL9Yw"}],"5qpSm":[function(require,module,exports) {
var $ = require('../internals/export');
var is = require('../internals/same-value');
// `Object.is` method
// https://tc39.es/ecma262/#sec-object.is
$({
    target: 'Object',
    stat: true
}, {
    is: is
});

},{"../internals/export":"2mZbc","../internals/same-value":"4xcdM"}],"4xcdM":[function(require,module,exports) {
// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

},{}],"5Df9G":[function(require,module,exports) {
var $ = require('../internals/export');
var $isExtensible = require('../internals/object-is-extensible');
// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
// eslint-disable-next-line es/no-object-isextensible -- safe
$({
    target: 'Object',
    stat: true,
    forced: Object.isExtensible !== $isExtensible
}, {
    isExtensible: $isExtensible
});

},{"../internals/export":"2mZbc","../internals/object-is-extensible":"d60is"}],"jrP45":[function(require,module,exports) {
var $ = require('../internals/export');
var fails = require('../internals/fails');
var isObject = require('../internals/is-object');
var classof = require('../internals/classof-raw');
var ARRAY_BUFFER_NON_EXTENSIBLE = require('../internals/array-buffer-non-extensible');
// eslint-disable-next-line es/no-object-isfrozen -- safe
var $isFrozen = Object.isFrozen;
var FORCED = ARRAY_BUFFER_NON_EXTENSIBLE || fails(function() {
    $isFrozen(1);
});
// `Object.isFrozen` method
// https://tc39.es/ecma262/#sec-object.isfrozen
$({
    target: 'Object',
    stat: true,
    forced: FORCED
}, {
    isFrozen: function isFrozen(it) {
        if (!isObject(it)) return true;
        if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) == 'ArrayBuffer') return true;
        return $isFrozen ? $isFrozen(it) : false;
    }
});

},{"../internals/export":"2mZbc","../internals/fails":"byxLb","../internals/is-object":"d60Kc","../internals/classof-raw":"8F0bi","../internals/array-buffer-non-extensible":"iIDDr"}],"9946V":[function(require,module,exports) {
var $ = require('../internals/export');
var fails = require('../internals/fails');
var isObject = require('../internals/is-object');
var classof = require('../internals/classof-raw');
var ARRAY_BUFFER_NON_EXTENSIBLE = require('../internals/array-buffer-non-extensible');
// eslint-disable-next-line es/no-object-issealed -- safe
var $isSealed = Object.isSealed;
var FORCED = ARRAY_BUFFER_NON_EXTENSIBLE || fails(function() {
    $isSealed(1);
});
// `Object.isSealed` method
// https://tc39.es/ecma262/#sec-object.issealed
$({
    target: 'Object',
    stat: true,
    forced: FORCED
}, {
    isSealed: function isSealed(it) {
        if (!isObject(it)) return true;
        if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) == 'ArrayBuffer') return true;
        return $isSealed ? $isSealed(it) : false;
    }
});

},{"../internals/export":"2mZbc","../internals/fails":"byxLb","../internals/is-object":"d60Kc","../internals/classof-raw":"8F0bi","../internals/array-buffer-non-extensible":"iIDDr"}],"boYMK":[function(require,module,exports) {
var $ = require('../internals/export');
var toObject = require('../internals/to-object');
var nativeKeys = require('../internals/object-keys');
var fails = require('../internals/fails');
var FAILS_ON_PRIMITIVES = fails(function() {
    nativeKeys(1);
});
// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES
}, {
    keys: function keys(it) {
        return nativeKeys(toObject(it));
    }
});

},{"../internals/export":"2mZbc","../internals/to-object":"ghTKi","../internals/object-keys":"7so9x","../internals/fails":"byxLb"}],"TD7HT":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var FORCED = require('../internals/object-prototype-accessors-forced');
var toObject = require('../internals/to-object');
var toPropertyKey = require('../internals/to-property-key');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
// `Object.prototype.__lookupGetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__lookupGetter__
if (DESCRIPTORS) $({
    target: 'Object',
    proto: true,
    forced: FORCED
}, {
    __lookupGetter__: function __lookupGetter__(P) {
        var O = toObject(this);
        var key = toPropertyKey(P);
        var desc;
        do {
            if (desc = getOwnPropertyDescriptor(O, key)) return desc.get;
        }while (O = getPrototypeOf(O))
    }
});

},{"../internals/export":"2mZbc","../internals/descriptors":"kuDzl","../internals/object-prototype-accessors-forced":"k3GQq","../internals/to-object":"ghTKi","../internals/to-property-key":"99Lby","../internals/object-get-prototype-of":"4Xd6L","../internals/object-get-own-property-descriptor":"hwpsT"}],"chseq":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var FORCED = require('../internals/object-prototype-accessors-forced');
var toObject = require('../internals/to-object');
var toPropertyKey = require('../internals/to-property-key');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
// `Object.prototype.__lookupSetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__lookupSetter__
if (DESCRIPTORS) $({
    target: 'Object',
    proto: true,
    forced: FORCED
}, {
    __lookupSetter__: function __lookupSetter__(P) {
        var O = toObject(this);
        var key = toPropertyKey(P);
        var desc;
        do {
            if (desc = getOwnPropertyDescriptor(O, key)) return desc.set;
        }while (O = getPrototypeOf(O))
    }
});

},{"../internals/export":"2mZbc","../internals/descriptors":"kuDzl","../internals/object-prototype-accessors-forced":"k3GQq","../internals/to-object":"ghTKi","../internals/to-property-key":"99Lby","../internals/object-get-prototype-of":"4Xd6L","../internals/object-get-own-property-descriptor":"hwpsT"}],"YDDty":[function(require,module,exports) {
var $ = require('../internals/export');
var isObject = require('../internals/is-object');
var onFreeze = require('../internals/internal-metadata').onFreeze;
var FREEZING = require('../internals/freezing');
var fails = require('../internals/fails');
// eslint-disable-next-line es/no-object-preventextensions -- safe
var $preventExtensions = Object.preventExtensions;
var FAILS_ON_PRIMITIVES = fails(function() {
    $preventExtensions(1);
});
// `Object.preventExtensions` method
// https://tc39.es/ecma262/#sec-object.preventextensions
$({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES,
    sham: !FREEZING
}, {
    preventExtensions: function preventExtensions(it) {
        return $preventExtensions && isObject(it) ? $preventExtensions(onFreeze(it)) : it;
    }
});

},{"../internals/export":"2mZbc","../internals/is-object":"d60Kc","../internals/internal-metadata":"5OjLO","../internals/freezing":"8zb2E","../internals/fails":"byxLb"}],"dBPmi":[function(require,module,exports) {
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var defineBuiltInAccessor = require('../internals/define-built-in-accessor');
var isObject = require('../internals/is-object');
var toObject = require('../internals/to-object');
var requireObjectCoercible = require('../internals/require-object-coercible');
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var getPrototypeOf = Object.getPrototypeOf;
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var setPrototypeOf = Object.setPrototypeOf;
var ObjectPrototype = Object.prototype;
var PROTO = '__proto__';
// `Object.prototype.__proto__` accessor
// https://tc39.es/ecma262/#sec-object.prototype.__proto__
if (DESCRIPTORS && getPrototypeOf && setPrototypeOf && !(PROTO in ObjectPrototype)) try {
    defineBuiltInAccessor(ObjectPrototype, PROTO, {
        configurable: true,
        get: function __proto__() {
            return getPrototypeOf(toObject(this));
        },
        set: function __proto__1(proto) {
            var O = requireObjectCoercible(this);
            if (!isObject(proto) && proto !== null || !isObject(O)) return;
            setPrototypeOf(O, proto);
        }
    });
} catch (error) {
}

},{"../internals/descriptors":"kuDzl","../internals/define-built-in-accessor":"jJJHp","../internals/is-object":"d60Kc","../internals/to-object":"ghTKi","../internals/require-object-coercible":"1XURO"}],"jJJHp":[function(require,module,exports) {
var makeBuiltIn = require('../internals/make-built-in');
var defineProperty = require('../internals/object-define-property');
module.exports = function(target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, {
        getter: true
    });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, {
        setter: true
    });
    return defineProperty.f(target, name, descriptor);
};

},{"../internals/make-built-in":"7xd2p","../internals/object-define-property":"iKHmb"}],"81CbY":[function(require,module,exports) {
var $ = require('../internals/export');
var isObject = require('../internals/is-object');
var onFreeze = require('../internals/internal-metadata').onFreeze;
var FREEZING = require('../internals/freezing');
var fails = require('../internals/fails');
// eslint-disable-next-line es/no-object-seal -- safe
var $seal = Object.seal;
var FAILS_ON_PRIMITIVES = fails(function() {
    $seal(1);
});
// `Object.seal` method
// https://tc39.es/ecma262/#sec-object.seal
$({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES,
    sham: !FREEZING
}, {
    seal: function seal(it) {
        return $seal && isObject(it) ? $seal(onFreeze(it)) : it;
    }
});

},{"../internals/export":"2mZbc","../internals/is-object":"d60Kc","../internals/internal-metadata":"5OjLO","../internals/freezing":"8zb2E","../internals/fails":"byxLb"}],"kDpCL":[function(require,module,exports) {
var $ = require('../internals/export');
var setPrototypeOf = require('../internals/object-set-prototype-of');
// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
$({
    target: 'Object',
    stat: true
}, {
    setPrototypeOf: setPrototypeOf
});

},{"../internals/export":"2mZbc","../internals/object-set-prototype-of":"k1Sl0"}],"bBRVN":[function(require,module,exports) {
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var defineBuiltIn = require('../internals/define-built-in');
var toString = require('../internals/object-to-string');
// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) defineBuiltIn(Object.prototype, 'toString', toString, {
    unsafe: true
});

},{"../internals/to-string-tag-support":"eaplU","../internals/define-built-in":"dTyng","../internals/object-to-string":"eYll4"}],"eYll4":[function(require,module,exports) {
'use strict';
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var classof = require('../internals/classof');
// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? ({
}).toString : function toString() {
    return '[object ' + classof(this) + ']';
};

},{"../internals/to-string-tag-support":"eaplU","../internals/classof":"gO6DW"}],"gTDYu":[function(require,module,exports) {
var $ = require('../internals/export');
var $values = require('../internals/object-to-array').values;
// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$({
    target: 'Object',
    stat: true
}, {
    values: function values(O) {
        return $values(O);
    }
});

},{"../internals/export":"2mZbc","../internals/object-to-array":"awU7u"}],"iXVt6":[function(require,module,exports) {
var $ = require('../internals/export');
var $parseFloat = require('../internals/number-parse-float');
// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$({
    global: true,
    forced: parseFloat != $parseFloat
}, {
    parseFloat: $parseFloat
});

},{"../internals/export":"2mZbc","../internals/number-parse-float":"9D8Wd"}],"dHCty":[function(require,module,exports) {
var $ = require('../internals/export');
var $parseInt = require('../internals/number-parse-int');
// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({
    global: true,
    forced: parseInt != $parseInt
}, {
    parseInt: $parseInt
});

},{"../internals/export":"2mZbc","../internals/number-parse-int":"aSmbJ"}],"kYha9":[function(require,module,exports) {
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require('../modules/es.promise.constructor');
require('../modules/es.promise.all');
require('../modules/es.promise.catch');
require('../modules/es.promise.race');
require('../modules/es.promise.reject');
require('../modules/es.promise.resolve');

},{"../modules/es.promise.constructor":"gbdmG","../modules/es.promise.all":"iRKk3","../modules/es.promise.catch":"aRcEK","../modules/es.promise.race":"fflCH","../modules/es.promise.reject":"cpsYa","../modules/es.promise.resolve":"23slU"}],"gbdmG":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var IS_NODE = require('../internals/engine-is-node');
var global = require('../internals/global');
var call = require('../internals/function-call');
var defineBuiltIn = require('../internals/define-built-in');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var setToStringTag = require('../internals/set-to-string-tag');
var setSpecies = require('../internals/set-species');
var aCallable = require('../internals/a-callable');
var isCallable = require('../internals/is-callable');
var isObject = require('../internals/is-object');
var anInstance = require('../internals/an-instance');
var speciesConstructor = require('../internals/species-constructor');
var task = require('../internals/task').set;
var microtask = require('../internals/microtask');
var hostReportErrors = require('../internals/host-report-errors');
var perform = require('../internals/perform');
var Queue = require('../internals/queue');
var InternalStateModule = require('../internals/internal-state');
var NativePromiseConstructor = require('../internals/promise-native-constructor');
var PromiseConstructorDetection = require('../internals/promise-constructor-detection');
var newPromiseCapabilityModule = require('../internals/new-promise-capability');
var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var PromiseConstructor = NativePromiseConstructor;
var PromisePrototype = NativePromisePrototype;
var TypeError1 = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
// helpers
var isThenable = function(it) {
    var then;
    return isObject(it) && isCallable(then = it.then) ? then : false;
};
var callReaction = function(reaction, state) {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var handler = ok ? reaction.ok : reaction.fail;
    var resolve = reaction.resolve;
    var reject = reaction.reject;
    var domain = reaction.domain;
    var result, then, exited;
    try {
        if (handler) {
            if (!ok) {
                if (state.rejection === UNHANDLED) onHandleUnhandled(state);
                state.rejection = HANDLED;
            }
            if (handler === true) result = value;
            else {
                if (domain) domain.enter();
                result = handler(value); // can throw
                if (domain) {
                    domain.exit();
                    exited = true;
                }
            }
            if (result === reaction.promise) reject(TypeError1('Promise-chain cycle'));
            else if (then = isThenable(result)) call(then, result, resolve, reject);
            else resolve(result);
        } else reject(value);
    } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
    }
};
var notify = function(state, isReject) {
    if (state.notified) return;
    state.notified = true;
    microtask(function() {
        var reactions = state.reactions;
        var reaction;
        while(reaction = reactions.get())callReaction(reaction, state);
        state.notified = false;
        if (isReject && !state.rejection) onUnhandled(state);
    });
};
var dispatchEvent = function(name, promise, reason) {
    var event, handler;
    if (DISPATCH_EVENT) {
        event = document.createEvent('Event');
        event.promise = promise;
        event.reason = reason;
        event.initEvent(name, false, true);
        global.dispatchEvent(event);
    } else event = {
        promise: promise,
        reason: reason
    };
    if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
    else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};
var onUnhandled = function(state) {
    call(task, global, function() {
        var promise = state.facade;
        var value = state.value;
        var IS_UNHANDLED = isUnhandled(state);
        var result;
        if (IS_UNHANDLED) {
            result = perform(function() {
                if (IS_NODE) process.emit('unhandledRejection', value, promise);
                else dispatchEvent(UNHANDLED_REJECTION, promise, value);
            });
            // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
            state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
            if (result.error) throw result.value;
        }
    });
};
var isUnhandled = function(state) {
    return state.rejection !== HANDLED && !state.parent;
};
var onHandleUnhandled = function(state) {
    call(task, global, function() {
        var promise = state.facade;
        if (IS_NODE) process.emit('rejectionHandled', promise);
        else dispatchEvent(REJECTION_HANDLED, promise, state.value);
    });
};
var bind = function(fn, state, unwrap) {
    return function(value) {
        fn(state, value, unwrap);
    };
};
var internalReject = function(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = REJECTED;
    notify(state, true);
};
var internalResolve = function(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    try {
        if (state.facade === value) throw TypeError1("Promise can't be resolved itself");
        var then = isThenable(value);
        if (then) microtask(function() {
            var wrapper = {
                done: false
            };
            try {
                call(then, value, bind(internalResolve, wrapper, state), bind(internalReject, wrapper, state));
            } catch (error) {
                internalReject(wrapper, error, state);
            }
        });
        else {
            state.value = value;
            state.state = FULFILLED;
            notify(state, false);
        }
    } catch (error) {
        internalReject({
            done: false
        }, error, state);
    }
};
// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise1(executor) {
        anInstance(this, PromisePrototype);
        aCallable(executor);
        call(Internal, this);
        var state = getInternalPromiseState(this);
        try {
            executor(bind(internalResolve, state), bind(internalReject, state));
        } catch (error) {
            internalReject(state, error);
        }
    };
    PromisePrototype = PromiseConstructor.prototype;
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    Internal = function Promise2(executor) {
        setInternalState(this, {
            type: PROMISE,
            done: false,
            notified: false,
            parent: false,
            reactions: new Queue(),
            rejection: false,
            state: PENDING,
            value: undefined
        });
    };
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var state = getInternalPromiseState(this);
        var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
        state.parent = true;
        reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
        reaction.fail = isCallable(onRejected) && onRejected;
        reaction.domain = IS_NODE ? process.domain : undefined;
        if (state.state == PENDING) state.reactions.add(reaction);
        else microtask(function() {
            callReaction(reaction, state);
        });
        return reaction.promise;
    });
    OwnPromiseCapability = function() {
        var promise = new Internal();
        var state = getInternalPromiseState(promise);
        this.promise = promise;
        this.resolve = bind(internalResolve, state);
        this.reject = bind(internalReject, state);
    };
    newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
        return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };
    if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
        nativeThen = NativePromisePrototype.then;
        if (!NATIVE_PROMISE_SUBCLASSING) // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
        defineBuiltIn(NativePromisePrototype, 'then', function then1(onFulfilled, onRejected) {
            var that = this;
            return new PromiseConstructor(function(resolve, reject) {
                call(nativeThen, that, resolve, reject);
            }).then(onFulfilled, onRejected);
        // https://github.com/zloirock/core-js/issues/640
        }, {
            unsafe: true
        });
        // make `.constructor === Promise` work for native promise-based APIs
        try {
            delete NativePromisePrototype.constructor;
        } catch (error) {
        }
        // make `instanceof Promise` work for native promise-based APIs
        if (setPrototypeOf) setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
}
$({
    global: true,
    constructor: true,
    wrap: true,
    forced: FORCED_PROMISE_CONSTRUCTOR
}, {
    Promise: PromiseConstructor
});
setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

},{"../internals/export":"2mZbc","../internals/is-pure":"dlbEd","../internals/engine-is-node":"gpWpt","../internals/global":"a4GR8","../internals/function-call":"d0MId","../internals/define-built-in":"dTyng","../internals/object-set-prototype-of":"k1Sl0","../internals/set-to-string-tag":"cFbSt","../internals/set-species":"99lPJ","../internals/a-callable":"jnvBr","../internals/is-callable":"41EnZ","../internals/is-object":"d60Kc","../internals/an-instance":"gTr5k","../internals/species-constructor":"6tv7V","../internals/task":"iBmTD","../internals/microtask":"8Si7u","../internals/host-report-errors":"9DqXn","../internals/perform":"iovRC","../internals/queue":"bJT7i","../internals/internal-state":"ceuiK","../internals/promise-native-constructor":"bNyjD","../internals/promise-constructor-detection":"jwnm6","../internals/new-promise-capability":"cqmSH"}],"iBmTD":[function(require,module,exports) {
var global = require('../internals/global');
var apply = require('../internals/function-apply');
var bind = require('../internals/function-bind-context');
var isCallable = require('../internals/is-callable');
var hasOwn = require('../internals/has-own-property');
var fails = require('../internals/fails');
var html = require('../internals/html');
var arraySlice = require('../internals/array-slice');
var createElement = require('../internals/document-create-element');
var validateArgumentsLength = require('../internals/validate-arguments-length');
var IS_IOS = require('../internals/engine-is-ios');
var IS_NODE = require('../internals/engine-is-node');
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function1 = global.Function;
var MessageChannel1 = global.MessageChannel;
var String1 = global.String;
var counter = 0;
var queue = {
};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;
fails(function() {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global.location;
});
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var eventListener = function(event) {
    run(event.data);
};
var globalPostMessageDefer = function(id) {
    // old engines have not location.origin
    global.postMessage(String1(id), $location.protocol + '//' + $location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function1(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel1 && !IS_IOS) {
        channel = new MessageChannel1();
        port = channel.port2;
        channel.port1.onmessage = eventListener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && $location && $location.protocol !== 'file:' && !fails(globalPostMessageDefer)) {
        defer = globalPostMessageDefer;
        global.addEventListener('message', eventListener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement('script')) defer = function(id) {
        html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"../internals/global":"a4GR8","../internals/function-apply":"hikDN","../internals/function-bind-context":"1epb9","../internals/is-callable":"41EnZ","../internals/has-own-property":"kL9Yw","../internals/fails":"byxLb","../internals/html":"38cYd","../internals/array-slice":"g46xA","../internals/document-create-element":"2WwO0","../internals/validate-arguments-length":"6C3kL","../internals/engine-is-ios":"6qN38","../internals/engine-is-node":"gpWpt"}],"6C3kL":[function(require,module,exports) {
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw $TypeError('Not enough arguments');
    return passed;
};

},{}],"6qN38":[function(require,module,exports) {
var userAgent = require('../internals/engine-user-agent');
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"../internals/engine-user-agent":"ihes9"}],"8Si7u":[function(require,module,exports) {
var global = require('../internals/global');
var bind = require('../internals/function-bind-context');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var macrotask = require('../internals/task').set;
var Queue = require('../internals/queue');
var IS_IOS = require('../internals/engine-is-ios');
var IS_IOS_PEBBLE = require('../internals/engine-is-ios-pebble');
var IS_WEBOS_WEBKIT = require('../internals/engine-is-webos-webkit');
var IS_NODE = require('../internals/engine-is-node');
var MutationObserver1 = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise1 = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var microtask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var notify, toggle, node, promise, then;
// modern engines have queueMicrotask method
if (!microtask) {
    var queue = new Queue();
    var flush = function() {
        var parent, fn;
        if (IS_NODE && (parent = process.domain)) parent.exit();
        while(fn = queue.get())try {
            fn();
        } catch (error) {
            if (queue.head) notify();
            throw error;
        }
        if (parent) parent.enter();
    };
    // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
    if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver1 && document) {
        toggle = true;
        node = document.createTextNode('');
        new MutationObserver1(flush).observe(node, {
            characterData: true
        });
        notify = function() {
            node.data = toggle = !toggle;
        };
    // environments with maybe non-completely correct, but existent Promise
    } else if (!IS_IOS_PEBBLE && Promise1 && Promise1.resolve) {
        // Promise.resolve without an argument throws an error in LG WebOS 2
        promise = Promise1.resolve(undefined);
        // workaround of WebKit ~ iOS Safari 10.1 bug
        promise.constructor = Promise1;
        then = bind(promise.then, promise);
        notify = function() {
            then(flush);
        };
    // Node.js without promises
    } else if (IS_NODE) notify = function() {
        process.nextTick(flush);
    };
    else {
        // `webpack` dev server bug on IE global methods - use bind(fn, global)
        macrotask = bind(macrotask, global);
        notify = function() {
            macrotask(flush);
        };
    }
    microtask = function(fn) {
        if (!queue.head) notify();
        queue.add(fn);
    };
}
module.exports = microtask;

},{"../internals/global":"a4GR8","../internals/function-bind-context":"1epb9","../internals/object-get-own-property-descriptor":"hwpsT","../internals/task":"iBmTD","../internals/queue":"bJT7i","../internals/engine-is-ios":"6qN38","../internals/engine-is-ios-pebble":"dMp0t","../internals/engine-is-webos-webkit":"bbp6h","../internals/engine-is-node":"gpWpt"}],"bJT7i":[function(require,module,exports) {
var Queue = function() {
    this.head = null;
    this.tail = null;
};
Queue.prototype = {
    add: function(item) {
        var entry = {
            item: item,
            next: null
        };
        var tail = this.tail;
        if (tail) tail.next = entry;
        else this.head = entry;
        this.tail = entry;
    },
    get: function() {
        var entry = this.head;
        if (entry) {
            var next = this.head = entry.next;
            if (next === null) this.tail = null;
            return entry.item;
        }
    }
};
module.exports = Queue;

},{}],"dMp0t":[function(require,module,exports) {
var userAgent = require('../internals/engine-user-agent');
module.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != 'undefined';

},{"../internals/engine-user-agent":"ihes9"}],"bbp6h":[function(require,module,exports) {
var userAgent = require('../internals/engine-user-agent');
module.exports = /web0s(?!.*chrome)/i.test(userAgent);

},{"../internals/engine-user-agent":"ihes9"}],"9DqXn":[function(require,module,exports) {
module.exports = function(a, b) {
    try {
        // eslint-disable-next-line no-console -- safe
        arguments.length == 1 ? console.error(a) : console.error(a, b);
    } catch (error) {
    }
};

},{}],"iovRC":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return {
            error: false,
            value: exec()
        };
    } catch (error) {
        return {
            error: true,
            value: error
        };
    }
};

},{}],"bNyjD":[function(require,module,exports) {
var global = require('../internals/global');
module.exports = global.Promise;

},{"../internals/global":"a4GR8"}],"jwnm6":[function(require,module,exports) {
var global = require('../internals/global');
var NativePromiseConstructor = require('../internals/promise-native-constructor');
var isCallable = require('../internals/is-callable');
var isForced = require('../internals/is-forced');
var inspectSource = require('../internals/inspect-source');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_BROWSER = require('../internals/engine-is-browser');
var IS_DENO = require('../internals/engine-is-deno');
var IS_PURE = require('../internals/is-pure');
var V8_VERSION = require('../internals/engine-v8-version');
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var SPECIES = wellKnownSymbol('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);
var FORCED_PROMISE_CONSTRUCTOR = isForced('Promise', function() {
    var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
    var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
    // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
    if (IS_PURE && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally'])) return true;
    // We can't use @@species feature detection in V8 since it causes
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679
    if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
        // Detect correctness of subclassing with @@species support
        var promise = new NativePromiseConstructor(function(resolve) {
            resolve(1);
        });
        var FakePromise = function(exec) {
            exec(function() {
            }, function() {
            });
        };
        var constructor = promise.constructor = {
        };
        constructor[SPECIES] = FakePromise;
        SUBCLASSING = promise.then(function() {
        }) instanceof FakePromise;
        if (!SUBCLASSING) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    }
    return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT;
});
module.exports = {
    CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
    REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
    SUBCLASSING: SUBCLASSING
};

},{"../internals/global":"a4GR8","../internals/promise-native-constructor":"bNyjD","../internals/is-callable":"41EnZ","../internals/is-forced":"djqhI","../internals/inspect-source":"yqC5G","../internals/well-known-symbol":"6sZ59","../internals/engine-is-browser":"fHGoO","../internals/engine-is-deno":"71rax","../internals/is-pure":"dlbEd","../internals/engine-v8-version":"8Ofbb"}],"fHGoO":[function(require,module,exports) {
var IS_DENO = require('../internals/engine-is-deno');
var IS_NODE = require('../internals/engine-is-node');
module.exports = !IS_DENO && !IS_NODE && typeof window == 'object' && typeof document == 'object';

},{"../internals/engine-is-deno":"71rax","../internals/engine-is-node":"gpWpt"}],"71rax":[function(require,module,exports) {
/* global Deno -- Deno case */ module.exports = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

},{}],"cqmSH":[function(require,module,exports) {
'use strict';
var aCallable = require('../internals/a-callable');
var $TypeError = TypeError;
var PromiseCapability = function(C) {
    var resolve, reject;
    this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw $TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
    });
    this.resolve = aCallable(resolve);
    this.reject = aCallable(reject);
};
// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function(C) {
    return new PromiseCapability(C);
};

},{"../internals/a-callable":"jnvBr"}],"iRKk3":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var aCallable = require('../internals/a-callable');
var newPromiseCapabilityModule = require('../internals/new-promise-capability');
var perform = require('../internals/perform');
var iterate = require('../internals/iterate');
var PROMISE_STATICS_INCORRECT_ITERATION = require('../internals/promise-statics-incorrect-iteration');
// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$({
    target: 'Promise',
    stat: true,
    forced: PROMISE_STATICS_INCORRECT_ITERATION
}, {
    all: function all(iterable) {
        var C = this;
        var capability = newPromiseCapabilityModule.f(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function() {
            var $promiseResolve = aCallable(C.resolve);
            var values = [];
            var counter = 0;
            var remaining = 1;
            iterate(iterable, function(promise) {
                var index = counter++;
                var alreadyCalled = false;
                remaining++;
                call($promiseResolve, C, promise).then(function(value) {
                    if (alreadyCalled) return;
                    alreadyCalled = true;
                    values[index] = value;
                    (--remaining) || resolve(values);
                }, reject);
            });
            (--remaining) || resolve(values);
        });
        if (result.error) reject(result.value);
        return capability.promise;
    }
});

},{"../internals/export":"2mZbc","../internals/function-call":"d0MId","../internals/a-callable":"jnvBr","../internals/new-promise-capability":"cqmSH","../internals/perform":"iovRC","../internals/iterate":"a4R19","../internals/promise-statics-incorrect-iteration":"eKbnS"}],"eKbnS":[function(require,module,exports) {
var NativePromiseConstructor = require('../internals/promise-native-constructor');
var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');
var FORCED_PROMISE_CONSTRUCTOR = require('../internals/promise-constructor-detection').CONSTRUCTOR;
module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function(iterable) {
    NativePromiseConstructor.all(iterable).then(undefined, function() {
    });
});

},{"../internals/promise-native-constructor":"bNyjD","../internals/check-correctness-of-iteration":"lO6Bq","../internals/promise-constructor-detection":"jwnm6"}],"aRcEK":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var FORCED_PROMISE_CONSTRUCTOR = require('../internals/promise-constructor-detection').CONSTRUCTOR;
var NativePromiseConstructor = require('../internals/promise-native-constructor');
var getBuiltIn = require('../internals/get-built-in');
var isCallable = require('../internals/is-callable');
var defineBuiltIn = require('../internals/define-built-in');
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$({
    target: 'Promise',
    proto: true,
    forced: FORCED_PROMISE_CONSTRUCTOR,
    real: true
}, {
    'catch': function(onRejected) {
        return this.then(undefined, onRejected);
    }
});
// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
    var method = getBuiltIn('Promise').prototype['catch'];
    if (NativePromisePrototype['catch'] !== method) defineBuiltIn(NativePromisePrototype, 'catch', method, {
        unsafe: true
    });
}

},{"../internals/export":"2mZbc","../internals/is-pure":"dlbEd","../internals/promise-constructor-detection":"jwnm6","../internals/promise-native-constructor":"bNyjD","../internals/get-built-in":"hqegu","../internals/is-callable":"41EnZ","../internals/define-built-in":"dTyng"}],"fflCH":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var aCallable = require('../internals/a-callable');
var newPromiseCapabilityModule = require('../internals/new-promise-capability');
var perform = require('../internals/perform');
var iterate = require('../internals/iterate');
var PROMISE_STATICS_INCORRECT_ITERATION = require('../internals/promise-statics-incorrect-iteration');
// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$({
    target: 'Promise',
    stat: true,
    forced: PROMISE_STATICS_INCORRECT_ITERATION
}, {
    race: function race(iterable) {
        var C = this;
        var capability = newPromiseCapabilityModule.f(C);
        var reject = capability.reject;
        var result = perform(function() {
            var $promiseResolve = aCallable(C.resolve);
            iterate(iterable, function(promise) {
                call($promiseResolve, C, promise).then(capability.resolve, reject);
            });
        });
        if (result.error) reject(result.value);
        return capability.promise;
    }
});

},{"../internals/export":"2mZbc","../internals/function-call":"d0MId","../internals/a-callable":"jnvBr","../internals/new-promise-capability":"cqmSH","../internals/perform":"iovRC","../internals/iterate":"a4R19","../internals/promise-statics-incorrect-iteration":"eKbnS"}],"cpsYa":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var newPromiseCapabilityModule = require('../internals/new-promise-capability');
var FORCED_PROMISE_CONSTRUCTOR = require('../internals/promise-constructor-detection').CONSTRUCTOR;
// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$({
    target: 'Promise',
    stat: true,
    forced: FORCED_PROMISE_CONSTRUCTOR
}, {
    reject: function reject(r) {
        var capability = newPromiseCapabilityModule.f(this);
        call(capability.reject, undefined, r);
        return capability.promise;
    }
});

},{"../internals/export":"2mZbc","../internals/function-call":"d0MId","../internals/new-promise-capability":"cqmSH","../internals/promise-constructor-detection":"jwnm6"}],"23slU":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var getBuiltIn = require('../internals/get-built-in');
var IS_PURE = require('../internals/is-pure');
var NativePromiseConstructor = require('../internals/promise-native-constructor');
var FORCED_PROMISE_CONSTRUCTOR = require('../internals/promise-constructor-detection').CONSTRUCTOR;
var promiseResolve = require('../internals/promise-resolve');
var PromiseConstructorWrapper = getBuiltIn('Promise');
var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;
// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$({
    target: 'Promise',
    stat: true,
    forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR
}, {
    resolve: function resolve(x) {
        return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
    }
});

},{"../internals/export":"2mZbc","../internals/get-built-in":"hqegu","../internals/is-pure":"dlbEd","../internals/promise-native-constructor":"bNyjD","../internals/promise-constructor-detection":"jwnm6","../internals/promise-resolve":"iNQOY"}],"iNQOY":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var isObject = require('../internals/is-object');
var newPromiseCapability = require('../internals/new-promise-capability');
module.exports = function(C, x) {
    anObject(C);
    if (isObject(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
};

},{"../internals/an-object":"9unxM","../internals/is-object":"d60Kc","../internals/new-promise-capability":"cqmSH"}],"iKqpp":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var aCallable = require('../internals/a-callable');
var newPromiseCapabilityModule = require('../internals/new-promise-capability');
var perform = require('../internals/perform');
var iterate = require('../internals/iterate');
var PROMISE_STATICS_INCORRECT_ITERATION = require('../internals/promise-statics-incorrect-iteration');
// `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled
$({
    target: 'Promise',
    stat: true,
    forced: PROMISE_STATICS_INCORRECT_ITERATION
}, {
    allSettled: function allSettled(iterable) {
        var C = this;
        var capability = newPromiseCapabilityModule.f(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function() {
            var promiseResolve = aCallable(C.resolve);
            var values = [];
            var counter = 0;
            var remaining = 1;
            iterate(iterable, function(promise) {
                var index = counter++;
                var alreadyCalled = false;
                remaining++;
                call(promiseResolve, C, promise).then(function(value) {
                    if (alreadyCalled) return;
                    alreadyCalled = true;
                    values[index] = {
                        status: 'fulfilled',
                        value: value
                    };
                    (--remaining) || resolve(values);
                }, function(error) {
                    if (alreadyCalled) return;
                    alreadyCalled = true;
                    values[index] = {
                        status: 'rejected',
                        reason: error
                    };
                    (--remaining) || resolve(values);
                });
            });
            (--remaining) || resolve(values);
        });
        if (result.error) reject(result.value);
        return capability.promise;
    }
});

},{"../internals/export":"2mZbc","../internals/function-call":"d0MId","../internals/a-callable":"jnvBr","../internals/new-promise-capability":"cqmSH","../internals/perform":"iovRC","../internals/iterate":"a4R19","../internals/promise-statics-incorrect-iteration":"eKbnS"}],"8inPk":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var aCallable = require('../internals/a-callable');
var getBuiltIn = require('../internals/get-built-in');
var newPromiseCapabilityModule = require('../internals/new-promise-capability');
var perform = require('../internals/perform');
var iterate = require('../internals/iterate');
var PROMISE_STATICS_INCORRECT_ITERATION = require('../internals/promise-statics-incorrect-iteration');
var PROMISE_ANY_ERROR = 'No one promise resolved';
// `Promise.any` method
// https://tc39.es/ecma262/#sec-promise.any
$({
    target: 'Promise',
    stat: true,
    forced: PROMISE_STATICS_INCORRECT_ITERATION
}, {
    any: function any(iterable) {
        var C = this;
        var AggregateError = getBuiltIn('AggregateError');
        var capability = newPromiseCapabilityModule.f(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function() {
            var promiseResolve = aCallable(C.resolve);
            var errors = [];
            var counter = 0;
            var remaining = 1;
            var alreadyResolved = false;
            iterate(iterable, function(promise) {
                var index = counter++;
                var alreadyRejected = false;
                remaining++;
                call(promiseResolve, C, promise).then(function(value) {
                    if (alreadyRejected || alreadyResolved) return;
                    alreadyResolved = true;
                    resolve(value);
                }, function(error) {
                    if (alreadyRejected || alreadyResolved) return;
                    alreadyRejected = true;
                    errors[index] = error;
                    (--remaining) || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
                });
            });
            (--remaining) || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
        });
        if (result.error) reject(result.value);
        return capability.promise;
    }
});

},{"../internals/export":"2mZbc","../internals/function-call":"d0MId","../internals/a-callable":"jnvBr","../internals/get-built-in":"hqegu","../internals/new-promise-capability":"cqmSH","../internals/perform":"iovRC","../internals/iterate":"a4R19","../internals/promise-statics-incorrect-iteration":"eKbnS"}],"bPigD":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var NativePromiseConstructor = require('../internals/promise-native-constructor');
var fails = require('../internals/fails');
var getBuiltIn = require('../internals/get-built-in');
var isCallable = require('../internals/is-callable');
var speciesConstructor = require('../internals/species-constructor');
var promiseResolve = require('../internals/promise-resolve');
var defineBuiltIn = require('../internals/define-built-in');
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromiseConstructor && fails(function() {
    // eslint-disable-next-line unicorn/no-thenable -- required for testing
    NativePromisePrototype['finally'].call({
        then: function() {
        }
    }, function() {
    });
});
// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$({
    target: 'Promise',
    proto: true,
    real: true,
    forced: NON_GENERIC
}, {
    'finally': function(onFinally) {
        var C = speciesConstructor(this, getBuiltIn('Promise'));
        var isFunction = isCallable(onFinally);
        return this.then(isFunction ? function(x) {
            return promiseResolve(C, onFinally()).then(function() {
                return x;
            });
        } : onFinally, isFunction ? function(e) {
            return promiseResolve(C, onFinally()).then(function() {
                throw e;
            });
        } : onFinally);
    }
});
// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
    var method = getBuiltIn('Promise').prototype['finally'];
    if (NativePromisePrototype['finally'] !== method) defineBuiltIn(NativePromisePrototype, 'finally', method, {
        unsafe: true
    });
}

},{"../internals/export":"2mZbc","../internals/is-pure":"dlbEd","../internals/promise-native-constructor":"bNyjD","../internals/fails":"byxLb","../internals/get-built-in":"hqegu","../internals/is-callable":"41EnZ","../internals/species-constructor":"6tv7V","../internals/promise-resolve":"iNQOY","../internals/define-built-in":"dTyng"}],"lncJ8":[function(require,module,exports) {
var $ = require('../internals/export');
var functionApply = require('../internals/function-apply');
var aCallable = require('../internals/a-callable');
var anObject = require('../internals/an-object');
var fails = require('../internals/fails');
// MS Edge argumentsList argument is optional
var OPTIONAL_ARGUMENTS_LIST = !fails(function() {
    // eslint-disable-next-line es/no-reflect -- required for testing
    Reflect.apply(function() {
    });
});
// `Reflect.apply` method
// https://tc39.es/ecma262/#sec-reflect.apply
$({
    target: 'Reflect',
    stat: true,
    forced: OPTIONAL_ARGUMENTS_LIST
}, {
    apply: function apply(target, thisArgument, argumentsList) {
        return functionApply(aCallable(target), thisArgument, anObject(argumentsList));
    }
});

},{"../internals/export":"2mZbc","../internals/function-apply":"hikDN","../internals/a-callable":"jnvBr","../internals/an-object":"9unxM","../internals/fails":"byxLb"}],"ff1SM":[function(require,module,exports) {
var $ = require('../internals/export');
var getBuiltIn = require('../internals/get-built-in');
var apply = require('../internals/function-apply');
var bind = require('../internals/function-bind');
var aConstructor = require('../internals/a-constructor');
var anObject = require('../internals/an-object');
var isObject = require('../internals/is-object');
var create = require('../internals/object-create');
var fails = require('../internals/fails');
var nativeConstruct = getBuiltIn('Reflect', 'construct');
var ObjectPrototype = Object.prototype;
var push = [].push;
// `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function() {
    function F() {
    }
    return !(nativeConstruct(function() {
    }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function() {
    nativeConstruct(function() {
    });
});
var FORCED = NEW_TARGET_BUG || ARGS_BUG;
$({
    target: 'Reflect',
    stat: true,
    forced: FORCED,
    sham: FORCED
}, {
    construct: function construct(Target, args /* , newTarget */ ) {
        aConstructor(Target);
        anObject(args);
        var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
        if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
        if (Target == newTarget) {
            // w/o altered newTarget, optimization for 0-4 arguments
            switch(args.length){
                case 0:
                    return new Target();
                case 1:
                    return new Target(args[0]);
                case 2:
                    return new Target(args[0], args[1]);
                case 3:
                    return new Target(args[0], args[1], args[2]);
                case 4:
                    return new Target(args[0], args[1], args[2], args[3]);
            }
            // w/o altered newTarget, lot of arguments case
            var $args = [
                null
            ];
            apply(push, $args, args);
            return new (apply(bind, Target, $args))();
        }
        // with altered newTarget, not support built-in constructors
        var proto = newTarget.prototype;
        var instance = create(isObject(proto) ? proto : ObjectPrototype);
        var result = apply(Target, instance, args);
        return isObject(result) ? result : instance;
    }
});

},{"../internals/export":"2mZbc","../internals/get-built-in":"hqegu","../internals/function-apply":"hikDN","../internals/function-bind":"5QaOT","../internals/a-constructor":"8n48a","../internals/an-object":"9unxM","../internals/is-object":"d60Kc","../internals/object-create":"eYZeq","../internals/fails":"byxLb"}],"dW0sW":[function(require,module,exports) {
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var anObject = require('../internals/an-object');
var toPropertyKey = require('../internals/to-property-key');
var definePropertyModule = require('../internals/object-define-property');
var fails = require('../internals/fails');
// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
var ERROR_INSTEAD_OF_FALSE = fails(function() {
    // eslint-disable-next-line es/no-reflect -- required for testing
    Reflect.defineProperty(definePropertyModule.f({
    }, 1, {
        value: 1
    }), 1, {
        value: 2
    });
});
// `Reflect.defineProperty` method
// https://tc39.es/ecma262/#sec-reflect.defineproperty
$({
    target: 'Reflect',
    stat: true,
    forced: ERROR_INSTEAD_OF_FALSE,
    sham: !DESCRIPTORS
}, {
    defineProperty: function defineProperty(target, propertyKey, attributes) {
        anObject(target);
        var key = toPropertyKey(propertyKey);
        anObject(attributes);
        try {
            definePropertyModule.f(target, key, attributes);
            return true;
        } catch (error) {
            return false;
        }
    }
});

},{"../internals/export":"2mZbc","../internals/descriptors":"kuDzl","../internals/an-object":"9unxM","../internals/to-property-key":"99Lby","../internals/object-define-property":"iKHmb","../internals/fails":"byxLb"}],"7DsVb":[function(require,module,exports) {
var $ = require('../internals/export');
var anObject = require('../internals/an-object');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
// `Reflect.deleteProperty` method
// https://tc39.es/ecma262/#sec-reflect.deleteproperty
$({
    target: 'Reflect',
    stat: true
}, {
    deleteProperty: function deleteProperty(target, propertyKey) {
        var descriptor = getOwnPropertyDescriptor(anObject(target), propertyKey);
        return descriptor && !descriptor.configurable ? false : delete target[propertyKey];
    }
});

},{"../internals/export":"2mZbc","../internals/an-object":"9unxM","../internals/object-get-own-property-descriptor":"hwpsT"}],"jaVFn":[function(require,module,exports) {
var $ = require('../internals/export');
var call = require('../internals/function-call');
var isObject = require('../internals/is-object');
var anObject = require('../internals/an-object');
var isDataDescriptor = require('../internals/is-data-descriptor');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var getPrototypeOf = require('../internals/object-get-prototype-of');
// `Reflect.get` method
// https://tc39.es/ecma262/#sec-reflect.get
function get(target, propertyKey /* , receiver */ ) {
    var receiver = arguments.length < 3 ? target : arguments[2];
    var descriptor, prototype;
    if (anObject(target) === receiver) return target[propertyKey];
    descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey);
    if (descriptor) return isDataDescriptor(descriptor) ? descriptor.value : descriptor.get === undefined ? undefined : call(descriptor.get, receiver);
    if (isObject(prototype = getPrototypeOf(target))) return get(prototype, propertyKey, receiver);
}
$({
    target: 'Reflect',
    stat: true
}, {
    get: get
});

},{"../internals/export":"2mZbc","../internals/function-call":"d0MId","../internals/is-object":"d60Kc","../internals/an-object":"9unxM","../internals/is-data-descriptor":"fNUeo","../internals/object-get-own-property-descriptor":"hwpsT","../internals/object-get-prototype-of":"4Xd6L"}],"fNUeo":[function(require,module,exports) {
var hasOwn = require('../internals/has-own-property');
module.exports = function(descriptor) {
    return descriptor !== undefined && (hasOwn(descriptor, 'value') || hasOwn(descriptor, 'writable'));
};

},{"../internals/has-own-property":"kL9Yw"}],"kVW26":[function(require,module,exports) {
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var anObject = require('../internals/an-object');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
// `Reflect.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-reflect.getownpropertydescriptor
$({
    target: 'Reflect',
    stat: true,
    sham: !DESCRIPTORS
}, {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
        return getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
    }
});

},{"../internals/export":"2mZbc","../internals/descriptors":"kuDzl","../internals/an-object":"9unxM","../internals/object-get-own-property-descriptor":"hwpsT"}],"hBOtV":[function(require,module,exports) {
var $ = require('../internals/export');
var anObject = require('../internals/an-object');
var objectGetPrototypeOf = require('../internals/object-get-prototype-of');
var CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter');
// `Reflect.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-reflect.getprototypeof
$({
    target: 'Reflect',
    stat: true,
    sham: !CORRECT_PROTOTYPE_GETTER
}, {
    getPrototypeOf: function getPrototypeOf(target) {
        return objectGetPrototypeOf(anObject(target));
    }
});

},{"../internals/export":"2mZbc","../internals/an-object":"9unxM","../internals/object-get-prototype-of":"4Xd6L","../internals/correct-prototype-getter":"dMqx3"}],"gTbyP":[function(require,module,exports) {
var $ = require('../internals/export');
// `Reflect.has` method
// https://tc39.es/ecma262/#sec-reflect.has
$({
    target: 'Reflect',
    stat: true
}, {
    has: function has(target, propertyKey) {
        return propertyKey in target;
    }
});

},{"../internals/export":"2mZbc"}],"VG7RE":[function(require,module,exports) {
var $ = require('../internals/export');
var anObject = require('../internals/an-object');
var $isExtensible = require('../internals/object-is-extensible');
// `Reflect.isExtensible` method
// https://tc39.es/ecma262/#sec-reflect.isextensible
$({
    target: 'Reflect',
    stat: true
}, {
    isExtensible: function isExtensible(target) {
        anObject(target);
        return $isExtensible(target);
    }
});

},{"../internals/export":"2mZbc","../internals/an-object":"9unxM","../internals/object-is-extensible":"d60is"}],"8moRG":[function(require,module,exports) {
var $ = require('../internals/export');
var ownKeys = require('../internals/own-keys');
// `Reflect.ownKeys` method
// https://tc39.es/ecma262/#sec-reflect.ownkeys
$({
    target: 'Reflect',
    stat: true
}, {
    ownKeys: ownKeys
});

},{"../internals/export":"2mZbc","../internals/own-keys":"dGiV1"}],"gMzOv":[function(require,module,exports) {
var $ = require('../internals/export');
var getBuiltIn = require('../internals/get-built-in');
var anObject = require('../internals/an-object');
var FREEZING = require('../internals/freezing');
// `Reflect.preventExtensions` method
// https://tc39.es/ecma262/#sec-reflect.preventextensions
$({
    target: 'Reflect',
    stat: true,
    sham: !FREEZING
}, {
    preventExtensions: function preventExtensions(target) {
        anObject(target);
        try {
            var objectPreventExtensions = getBuiltIn('Object', 'preventExtensions');
            if (objectPreventExtensions) objectPreventExtensions(target);
            return true;
        } catch (error) {
            return false;
        }
    }
});

},{"../internals/export":"2mZbc","../internals/get-built-in":"hqegu","../internals/an-object":"9unxM","../internals/freezing":"8zb2E"}],"9isA9":[function(require,module,exports) {
var $ = require('../internals/export');
var call = require('../internals/function-call');
var anObject = require('../internals/an-object');
var isObject = require('../internals/is-object');
var isDataDescriptor = require('../internals/is-data-descriptor');
var fails = require('../internals/fails');
var definePropertyModule = require('../internals/object-define-property');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
// `Reflect.set` method
// https://tc39.es/ecma262/#sec-reflect.set
function set(target, propertyKey, V /* , receiver */ ) {
    var receiver = arguments.length < 4 ? target : arguments[3];
    var ownDescriptor = getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
    var existingDescriptor, prototype, setter;
    if (!ownDescriptor) {
        if (isObject(prototype = getPrototypeOf(target))) return set(prototype, propertyKey, V, receiver);
        ownDescriptor = createPropertyDescriptor(0);
    }
    if (isDataDescriptor(ownDescriptor)) {
        if (ownDescriptor.writable === false || !isObject(receiver)) return false;
        if (existingDescriptor = getOwnPropertyDescriptorModule.f(receiver, propertyKey)) {
            if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
            existingDescriptor.value = V;
            definePropertyModule.f(receiver, propertyKey, existingDescriptor);
        } else definePropertyModule.f(receiver, propertyKey, createPropertyDescriptor(0, V));
    } else {
        setter = ownDescriptor.set;
        if (setter === undefined) return false;
        call(setter, receiver, V);
    }
    return true;
}
// MS Edge 17-18 Reflect.set allows setting the property to object
// with non-writable property on the prototype
var MS_EDGE_BUG = fails(function() {
    var Constructor = function() {
    };
    var object = definePropertyModule.f(new Constructor(), 'a', {
        configurable: true
    });
    // eslint-disable-next-line es/no-reflect -- required for testing
    return Reflect.set(Constructor.prototype, 'a', 1, object) !== false;
});
$({
    target: 'Reflect',
    stat: true,
    forced: MS_EDGE_BUG
}, {
    set: set
});

},{"../internals/export":"2mZbc","../internals/function-call":"d0MId","../internals/an-object":"9unxM","../internals/is-object":"d60Kc","../internals/is-data-descriptor":"fNUeo","../internals/fails":"byxLb","../internals/object-define-property":"iKHmb","../internals/object-get-own-property-descriptor":"hwpsT","../internals/object-get-prototype-of":"4Xd6L","../internals/create-property-descriptor":"5fdHA"}],"6hNd3":[function(require,module,exports) {
var $ = require('../internals/export');
var anObject = require('../internals/an-object');
var aPossiblePrototype = require('../internals/a-possible-prototype');
var objectSetPrototypeOf = require('../internals/object-set-prototype-of');
// `Reflect.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-reflect.setprototypeof
if (objectSetPrototypeOf) $({
    target: 'Reflect',
    stat: true
}, {
    setPrototypeOf: function setPrototypeOf(target, proto) {
        anObject(target);
        aPossiblePrototype(proto);
        try {
            objectSetPrototypeOf(target, proto);
            return true;
        } catch (error) {
            return false;
        }
    }
});

},{"../internals/export":"2mZbc","../internals/an-object":"9unxM","../internals/a-possible-prototype":"4dKE2","../internals/object-set-prototype-of":"k1Sl0"}],"99fpE":[function(require,module,exports) {
var $ = require('../internals/export');
var global = require('../internals/global');
var setToStringTag = require('../internals/set-to-string-tag');
$({
    global: true
}, {
    Reflect: {
    }
});
// Reflect[@@toStringTag] property
// https://tc39.es/ecma262/#sec-reflect-@@tostringtag
setToStringTag(global.Reflect, 'Reflect', true);

},{"../internals/export":"2mZbc","../internals/global":"a4GR8","../internals/set-to-string-tag":"cFbSt"}],"dwe4v":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var global = require('../internals/global');
var uncurryThis = require('../internals/function-uncurry-this');
var isForced = require('../internals/is-forced');
var inheritIfRequired = require('../internals/inherit-if-required');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
var isPrototypeOf = require('../internals/object-is-prototype-of');
var isRegExp = require('../internals/is-regexp');
var toString = require('../internals/to-string');
var getRegExpFlags = require('../internals/regexp-get-flags');
var stickyHelpers = require('../internals/regexp-sticky-helpers');
var proxyAccessor = require('../internals/proxy-accessor');
var defineBuiltIn = require('../internals/define-built-in');
var fails = require('../internals/fails');
var hasOwn = require('../internals/has-own-property');
var enforceInternalState = require('../internals/internal-state').enforce;
var setSpecies = require('../internals/set-species');
var wellKnownSymbol = require('../internals/well-known-symbol');
var UNSUPPORTED_DOT_ALL = require('../internals/regexp-unsupported-dot-all');
var UNSUPPORTED_NCG = require('../internals/regexp-unsupported-ncg');
var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var SyntaxError1 = global.SyntaxError;
var exec = uncurryThis(RegExpPrototype.exec);
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);
// TODO: Use only proper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;
// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;
var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var BASE_FORCED = DESCRIPTORS && (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function() {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
}));
var handleDotAll = function(string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var brackets = false;
    var chr;
    for(; index <= length; index++){
        chr = charAt(string, index);
        if (chr === '\\') {
            result += chr + charAt(string, ++index);
            continue;
        }
        if (!brackets && chr === '.') result += '[\\s\\S]';
        else {
            if (chr === '[') brackets = true;
            else if (chr === ']') brackets = false;
            result += chr;
        }
    }
    return result;
};
var handleNCG = function(string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var named = [];
    var names = {
    };
    var brackets = false;
    var ncg = false;
    var groupid = 0;
    var groupname = '';
    var chr;
    for(; index <= length; index++){
        chr = charAt(string, index);
        if (chr === '\\') chr = chr + charAt(string, ++index);
        else if (chr === ']') brackets = false;
        else if (!brackets) switch(true){
            case chr === '[':
                brackets = true;
                break;
            case chr === '(':
                if (exec(IS_NCG, stringSlice(string, index + 1))) {
                    index += 2;
                    ncg = true;
                }
                result += chr;
                groupid++;
                continue;
            case chr === '>' && ncg:
                if (groupname === '' || hasOwn(names, groupname)) throw new SyntaxError1('Invalid capture group name');
                names[groupname] = true;
                named[named.length] = [
                    groupname,
                    groupid
                ];
                ncg = false;
                groupname = '';
                continue;
        }
        if (ncg) groupname += chr;
        else result += chr;
    }
    return [
        result,
        named
    ];
};
// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced('RegExp', BASE_FORCED)) {
    var RegExpWrapper = function RegExp1(pattern, flags) {
        var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);
        var patternIsRegExp = isRegExp(pattern);
        var flagsAreUndefined = flags === undefined;
        var groups = [];
        var rawPattern = pattern;
        var rawFlags, dotAll, sticky, handled, result, state;
        if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) return pattern;
        if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
            pattern = pattern.source;
            if (flagsAreUndefined) flags = getRegExpFlags(rawPattern);
        }
        pattern = pattern === undefined ? '' : toString(pattern);
        flags = flags === undefined ? '' : toString(flags);
        rawPattern = pattern;
        if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
            dotAll = !!flags && stringIndexOf(flags, 's') > -1;
            if (dotAll) flags = replace(flags, /s/g, '');
        }
        rawFlags = flags;
        if (MISSED_STICKY && 'sticky' in re1) {
            sticky = !!flags && stringIndexOf(flags, 'y') > -1;
            if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');
        }
        if (UNSUPPORTED_NCG) {
            handled = handleNCG(pattern);
            pattern = handled[0];
            groups = handled[1];
        }
        result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);
        if (dotAll || sticky || groups.length) {
            state = enforceInternalState(result);
            if (dotAll) {
                state.dotAll = true;
                state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
            }
            if (sticky) state.sticky = true;
            if (groups.length) state.groups = groups;
        }
        if (pattern !== rawPattern) try {
            // fails in old engines, but we have no alternatives for unsupported regex syntax
            createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
        } catch (error) {
        }
        return result;
    };
    for(var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;)proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
    RegExpPrototype.constructor = RegExpWrapper;
    RegExpWrapper.prototype = RegExpPrototype;
    defineBuiltIn(global, 'RegExp', RegExpWrapper, {
        constructor: true
    });
}
// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');

},{"../internals/descriptors":"kuDzl","../internals/global":"a4GR8","../internals/function-uncurry-this":"gBsQL","../internals/is-forced":"djqhI","../internals/inherit-if-required":"5Ef3J","../internals/create-non-enumerable-property":"73EkF","../internals/object-get-own-property-names":"38UqD","../internals/object-is-prototype-of":"gFfbX","../internals/is-regexp":"b7miO","../internals/to-string":"k0ZQF","../internals/regexp-get-flags":"7BOiC","../internals/regexp-sticky-helpers":"4mh9i","../internals/proxy-accessor":"hywj4","../internals/define-built-in":"dTyng","../internals/fails":"byxLb","../internals/has-own-property":"kL9Yw","../internals/internal-state":"ceuiK","../internals/set-species":"99lPJ","../internals/well-known-symbol":"6sZ59","../internals/regexp-unsupported-dot-all":"6Lx4t","../internals/regexp-unsupported-ncg":"3gScj"}],"b7miO":[function(require,module,exports) {
var isObject = require('../internals/is-object');
var classof = require('../internals/classof-raw');
var wellKnownSymbol = require('../internals/well-known-symbol');
var MATCH = wellKnownSymbol('match');
// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function(it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};

},{"../internals/is-object":"d60Kc","../internals/classof-raw":"8F0bi","../internals/well-known-symbol":"6sZ59"}],"7BOiC":[function(require,module,exports) {
var call = require('../internals/function-call');
var hasOwn = require('../internals/has-own-property');
var isPrototypeOf = require('../internals/object-is-prototype-of');
var regExpFlags = require('../internals/regexp-flags');
var RegExpPrototype = RegExp.prototype;
module.exports = function(R) {
    var flags = R.flags;
    return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R) ? call(regExpFlags, R) : flags;
};

},{"../internals/function-call":"d0MId","../internals/has-own-property":"kL9Yw","../internals/object-is-prototype-of":"gFfbX","../internals/regexp-flags":"bmq3u"}],"bmq3u":[function(require,module,exports) {
'use strict';
var anObject = require('../internals/an-object');
// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function() {
    var that = anObject(this);
    var result = '';
    if (that.hasIndices) result += 'd';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.unicodeSets) result += 'v';
    if (that.sticky) result += 'y';
    return result;
};

},{"../internals/an-object":"9unxM"}],"4mh9i":[function(require,module,exports) {
var fails = require('../internals/fails');
var global = require('../internals/global');
// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;
var UNSUPPORTED_Y = fails(function() {
    var re = $RegExp('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
});
// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function() {
    return !$RegExp('a', 'y').sticky;
});
var BROKEN_CARET = UNSUPPORTED_Y || fails(function() {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = $RegExp('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
});
module.exports = {
    BROKEN_CARET: BROKEN_CARET,
    MISSED_STICKY: MISSED_STICKY,
    UNSUPPORTED_Y: UNSUPPORTED_Y
};

},{"../internals/fails":"byxLb","../internals/global":"a4GR8"}],"6Lx4t":[function(require,module,exports) {
var fails = require('../internals/fails');
var global = require('../internals/global');
// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;
module.exports = fails(function() {
    var re = $RegExp('.', 's');
    return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

},{"../internals/fails":"byxLb","../internals/global":"a4GR8"}],"3gScj":[function(require,module,exports) {
var fails = require('../internals/fails');
var global = require('../internals/global');
// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;
module.exports = fails(function() {
    var re = $RegExp('(?<a>b)', 'g');
    return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
});

},{"../internals/fails":"byxLb","../internals/global":"a4GR8"}],"1u6bJ":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var UNSUPPORTED_DOT_ALL = require('../internals/regexp-unsupported-dot-all');
var classof = require('../internals/classof-raw');
var defineBuiltInAccessor = require('../internals/define-built-in-accessor');
var getInternalState = require('../internals/internal-state').get;
var RegExpPrototype = RegExp.prototype;
var $TypeError = TypeError;
// `RegExp.prototype.dotAll` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.dotall
if (DESCRIPTORS && UNSUPPORTED_DOT_ALL) defineBuiltInAccessor(RegExpPrototype, 'dotAll', {
    configurable: true,
    get: function dotAll() {
        if (this === RegExpPrototype) return undefined;
        // We can't use InternalStateModule.getterFor because
        // we don't add metadata for regexps created by a literal.
        if (classof(this) === 'RegExp') return !!getInternalState(this).dotAll;
        throw $TypeError('Incompatible receiver, RegExp required');
    }
});

},{"../internals/descriptors":"kuDzl","../internals/regexp-unsupported-dot-all":"6Lx4t","../internals/classof-raw":"8F0bi","../internals/define-built-in-accessor":"jJJHp","../internals/internal-state":"ceuiK"}],"lySIs":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var exec = require('../internals/regexp-exec');
// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({
    target: 'RegExp',
    proto: true,
    forced: /./.exec !== exec
}, {
    exec: exec
});

},{"../internals/export":"2mZbc","../internals/regexp-exec":"daEEr"}],"daEEr":[function(require,module,exports) {
'use strict';
/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */ /* eslint-disable regexp/no-useless-quantifier -- testing */ var call = require('../internals/function-call');
var uncurryThis = require('../internals/function-uncurry-this');
var toString = require('../internals/to-string');
var regexpFlags = require('../internals/regexp-flags');
var stickyHelpers = require('../internals/regexp-sticky-helpers');
var shared = require('../internals/shared');
var create = require('../internals/object-create');
var getInternalState = require('../internals/internal-state').get;
var UNSUPPORTED_DOT_ALL = require('../internals/regexp-unsupported-dot-all');
var UNSUPPORTED_NCG = require('../internals/regexp-unsupported-ncg');
var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var UPDATES_LAST_INDEX_WRONG = function() {
    var re1 = /a/;
    var re2 = /b*/g;
    call(nativeExec, re1, 'a');
    call(nativeExec, re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();
var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;
// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;
if (PATCH) patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;
    if (raw) {
        raw.lastIndex = re.lastIndex;
        result = call(patchedExec, raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
    }
    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;
    if (sticky) {
        flags = replace(flags, 'y', '');
        if (indexOf(flags, 'g') === -1) flags += 'g';
        strCopy = stringSlice(str, re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
            source = '(?: ' + source + ')';
            strCopy = ' ' + strCopy;
            charsAdded++;
        }
        // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.
        reCopy = new RegExp('^(?:' + source + ')', flags);
    }
    if (NPCG_INCLUDED) reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
    match = call(nativeExec, sticky ? reCopy : re, strCopy);
    if (sticky) {
        if (match) {
            match.input = stringSlice(match.input, charsAdded);
            match[0] = stringSlice(match[0], charsAdded);
            match.index = re.lastIndex;
            re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    if (NPCG_INCLUDED && match && match.length > 1) // Fix browsers whose `exec` methods don't consistently return `undefined`
    // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
    call(nativeReplace, match[0], reCopy, function() {
        for(i = 1; i < arguments.length - 2; i++)if (arguments[i] === undefined) match[i] = undefined;
    });
    if (match && groups) {
        match.groups = object = create(null);
        for(i = 0; i < groups.length; i++){
            group = groups[i];
            object[group[0]] = match[group[1]];
        }
    }
    return match;
};
module.exports = patchedExec;

},{"../internals/function-call":"d0MId","../internals/function-uncurry-this":"gBsQL","../internals/to-string":"k0ZQF","../internals/regexp-flags":"bmq3u","../internals/regexp-sticky-helpers":"4mh9i","../internals/shared":"ic92G","../internals/object-create":"eYZeq","../internals/internal-state":"ceuiK","../internals/regexp-unsupported-dot-all":"6Lx4t","../internals/regexp-unsupported-ncg":"3gScj"}],"ecNn9":[function(require,module,exports) {
var global = require('../internals/global');
var DESCRIPTORS = require('../internals/descriptors');
var defineBuiltInAccessor = require('../internals/define-built-in-accessor');
var regExpFlags = require('../internals/regexp-flags');
var fails = require('../internals/fails');
// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var RegExp1 = global.RegExp;
var RegExpPrototype = RegExp1.prototype;
var FORCED = DESCRIPTORS && fails(function() {
    var INDICES_SUPPORT = true;
    try {
        RegExp1('.', 'd');
    } catch (error) {
        INDICES_SUPPORT = false;
    }
    var O = {
    };
    // modern V8 bug
    var calls = '';
    var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';
    var addGetter = function(key, chr) {
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        Object.defineProperty(O, key, {
            get: function() {
                calls += chr;
                return true;
            }
        });
    };
    var pairs = {
        dotAll: 's',
        global: 'g',
        ignoreCase: 'i',
        multiline: 'm',
        sticky: 'y'
    };
    if (INDICES_SUPPORT) pairs.hasIndices = 'd';
    for(var key in pairs)addGetter(key, pairs[key]);
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var result = Object.getOwnPropertyDescriptor(RegExpPrototype, 'flags').get.call(O);
    return result !== expected || calls !== expected;
});
// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if (FORCED) defineBuiltInAccessor(RegExpPrototype, 'flags', {
    configurable: true,
    get: regExpFlags
});

},{"../internals/global":"a4GR8","../internals/descriptors":"kuDzl","../internals/define-built-in-accessor":"jJJHp","../internals/regexp-flags":"bmq3u","../internals/fails":"byxLb"}],"j9bjG":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var MISSED_STICKY = require('../internals/regexp-sticky-helpers').MISSED_STICKY;
var classof = require('../internals/classof-raw');
var defineBuiltInAccessor = require('../internals/define-built-in-accessor');
var getInternalState = require('../internals/internal-state').get;
var RegExpPrototype = RegExp.prototype;
var $TypeError = TypeError;
// `RegExp.prototype.sticky` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky
if (DESCRIPTORS && MISSED_STICKY) defineBuiltInAccessor(RegExpPrototype, 'sticky', {
    configurable: true,
    get: function sticky() {
        if (this === RegExpPrototype) return;
        // We can't use InternalStateModule.getterFor because
        // we don't add metadata for regexps created by a literal.
        if (classof(this) === 'RegExp') return !!getInternalState(this).sticky;
        throw $TypeError('Incompatible receiver, RegExp required');
    }
});

},{"../internals/descriptors":"kuDzl","../internals/regexp-sticky-helpers":"4mh9i","../internals/classof-raw":"8F0bi","../internals/define-built-in-accessor":"jJJHp","../internals/internal-state":"ceuiK"}],"iP2j2":[function(require,module,exports) {
'use strict';
// TODO: Remove from `core-js@4` since it's moved to entry points
require('../modules/es.regexp.exec');
var $ = require('../internals/export');
var call = require('../internals/function-call');
var isCallable = require('../internals/is-callable');
var anObject = require('../internals/an-object');
var toString = require('../internals/to-string');
var DELEGATES_TO_EXEC = function() {
    var execCalled = false;
    var re = /[ac]/;
    re.exec = function() {
        execCalled = true;
        return /./.exec.apply(this, arguments);
    };
    return re.test('abc') === true && execCalled;
}();
var nativeTest = /./.test;
// `RegExp.prototype.test` method
// https://tc39.es/ecma262/#sec-regexp.prototype.test
$({
    target: 'RegExp',
    proto: true,
    forced: !DELEGATES_TO_EXEC
}, {
    test: function(S) {
        var R = anObject(this);
        var string = toString(S);
        var exec = R.exec;
        if (!isCallable(exec)) return call(nativeTest, R, string);
        var result = call(exec, R, string);
        if (result === null) return false;
        anObject(result);
        return true;
    }
});

},{"../modules/es.regexp.exec":"lySIs","../internals/export":"2mZbc","../internals/function-call":"d0MId","../internals/is-callable":"41EnZ","../internals/an-object":"9unxM","../internals/to-string":"k0ZQF"}],"7sKSf":[function(require,module,exports) {
'use strict';
var PROPER_FUNCTION_NAME = require('../internals/function-name').PROPER;
var defineBuiltIn = require('../internals/define-built-in');
var anObject = require('../internals/an-object');
var $toString = require('../internals/to-string');
var fails = require('../internals/fails');
var getRegExpFlags = require('../internals/regexp-get-flags');
var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];
var NOT_GENERIC = fails(function() {
    return nativeToString.call({
        source: 'a',
        flags: 'b'
    }) != '/a/b';
});
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;
// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) defineBuiltIn(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
}, {
    unsafe: true
});

},{"../internals/function-name":"fErEm","../internals/define-built-in":"dTyng","../internals/an-object":"9unxM","../internals/to-string":"k0ZQF","../internals/fails":"byxLb","../internals/regexp-get-flags":"7BOiC"}],"5wbk0":[function(require,module,exports) {
// TODO: Remove this module from `core-js@4` since it's replaced to module below
require('../modules/es.set.constructor');

},{"../modules/es.set.constructor":"gspFj"}],"gspFj":[function(require,module,exports) {
'use strict';
var collection = require('../internals/collection');
var collectionStrong = require('../internals/collection-strong');
// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
collection('Set', function(init) {
    return function Set1() {
        return init(this, arguments.length ? arguments[0] : undefined);
    };
}, collectionStrong);

},{"../internals/collection":"8qCpd","../internals/collection-strong":"hibUM"}],"4aHj5":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');
var requireObjectCoercible = require('../internals/require-object-coercible');
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var toString = require('../internals/to-string');
var fails = require('../internals/fails');
var charAt = uncurryThis(''.charAt);
var FORCED = fails(function() {
    // eslint-disable-next-line es/no-array-string-prototype-at -- safe
    return '𠮷'.at(-2) !== '\uD842';
});
// `String.prototype.at` method
// https://github.com/tc39/proposal-relative-indexing-method
$({
    target: 'String',
    proto: true,
    forced: FORCED
}, {
    at: function at(index) {
        var S = toString(requireObjectCoercible(this));
        var len = S.length;
        var relativeIndex = toIntegerOrInfinity(index);
        var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
        return k < 0 || k >= len ? undefined : charAt(S, k);
    }
});

},{"../internals/export":"2mZbc","../internals/function-uncurry-this":"gBsQL","../internals/require-object-coercible":"1XURO","../internals/to-integer-or-infinity":"7H3g3","../internals/to-string":"k0ZQF","../internals/fails":"byxLb"}],"fviUF":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var codeAt = require('../internals/string-multibyte').codeAt;
// `String.prototype.codePointAt` method
// https://tc39.es/ecma262/#sec-string.prototype.codepointat
$({
    target: 'String',
    proto: true
}, {
    codePointAt: function codePointAt(pos) {
        return codeAt(this, pos);
    }
});

},{"../internals/export":"2mZbc","../internals/string-multibyte":"dPnMz"}],"dPnMz":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var toString = require('../internals/to-string');
var requireObjectCoercible = require('../internals/require-object-coercible');
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);
var createMethod = function(CONVERT_TO_STRING) {
    return function($this, pos) {
        var S = toString(requireObjectCoercible($this));
        var position = toIntegerOrInfinity(pos);
        var size = S.length;
        var first, second;
        if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
        first = charCodeAt(S, position);
        return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
    };
};
module.exports = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod(true)
};

},{"../internals/function-uncurry-this":"gBsQL","../internals/to-integer-or-infinity":"7H3g3","../internals/to-string":"k0ZQF","../internals/require-object-coercible":"1XURO"}],"i8dBj":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this-clause');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var toLength = require('../internals/to-length');
var toString = require('../internals/to-string');
var notARegExp = require('../internals/not-a-regexp');
var requireObjectCoercible = require('../internals/require-object-coercible');
var correctIsRegExpLogic = require('../internals/correct-is-regexp-logic');
var IS_PURE = require('../internals/is-pure');
// eslint-disable-next-line es/no-string-prototype-endswith -- safe
var nativeEndsWith = uncurryThis(''.endsWith);
var slice = uncurryThis(''.slice);
var min = Math.min;
var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function() {
    var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
    return descriptor && !descriptor.writable;
}();
// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
$({
    target: 'String',
    proto: true,
    forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
}, {
    endsWith: function endsWith(searchString /* , endPosition = @length */ ) {
        var that = toString(requireObjectCoercible(this));
        notARegExp(searchString);
        var endPosition = arguments.length > 1 ? arguments[1] : undefined;
        var len = that.length;
        var end = endPosition === undefined ? len : min(toLength(endPosition), len);
        var search = toString(searchString);
        return nativeEndsWith ? nativeEndsWith(that, search, end) : slice(that, end - search.length, end) === search;
    }
});

},{"../internals/export":"2mZbc","../internals/function-uncurry-this-clause":"7Ho5A","../internals/object-get-own-property-descriptor":"hwpsT","../internals/to-length":"coWuj","../internals/to-string":"k0ZQF","../internals/not-a-regexp":"bmUBS","../internals/require-object-coercible":"1XURO","../internals/correct-is-regexp-logic":"kDBvg","../internals/is-pure":"dlbEd"}],"bmUBS":[function(require,module,exports) {
var isRegExp = require('../internals/is-regexp');
var $TypeError = TypeError;
module.exports = function(it) {
    if (isRegExp(it)) throw $TypeError("The method doesn't accept regular expressions");
    return it;
};

},{"../internals/is-regexp":"b7miO"}],"kDBvg":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var MATCH = wellKnownSymbol('match');
module.exports = function(METHOD_NAME) {
    var regexp = /./;
    try {
        '/./'[METHOD_NAME](regexp);
    } catch (error1) {
        try {
            regexp[MATCH] = false;
            return '/./'[METHOD_NAME](regexp);
        } catch (error2) {
        }
    }
    return false;
};

},{"../internals/well-known-symbol":"6sZ59"}],"kP5Lw":[function(require,module,exports) {
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var $RangeError = RangeError;
var fromCharCode = String.fromCharCode;
// eslint-disable-next-line es/no-string-fromcodepoint -- required for testing
var $fromCodePoint = String.fromCodePoint;
var join = uncurryThis([].join);
// length should be 1, old FF problem
var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length != 1;
// `String.fromCodePoint` method
// https://tc39.es/ecma262/#sec-string.fromcodepoint
$({
    target: 'String',
    stat: true,
    arity: 1,
    forced: INCORRECT_LENGTH
}, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    fromCodePoint: function fromCodePoint(x) {
        var elements = [];
        var length = arguments.length;
        var i = 0;
        var code;
        while(length > i){
            code = +arguments[i++];
            if (toAbsoluteIndex(code, 1114111) !== code) throw $RangeError(code + ' is not a valid code point');
            elements[i] = code < 65536 ? fromCharCode(code) : fromCharCode(((code -= 65536) >> 10) + 55296, code % 1024 + 56320);
        }
        return join(elements, '');
    }
});

},{"../internals/export":"2mZbc","../internals/function-uncurry-this":"gBsQL","../internals/to-absolute-index":"bWCPe"}],"c28Iv":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');
var notARegExp = require('../internals/not-a-regexp');
var requireObjectCoercible = require('../internals/require-object-coercible');
var toString = require('../internals/to-string');
var correctIsRegExpLogic = require('../internals/correct-is-regexp-logic');
var stringIndexOf = uncurryThis(''.indexOf);
// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({
    target: 'String',
    proto: true,
    forced: !correctIsRegExpLogic('includes')
}, {
    includes: function includes(searchString /* , position = 0 */ ) {
        return !!~stringIndexOf(toString(requireObjectCoercible(this)), toString(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"2mZbc","../internals/function-uncurry-this":"gBsQL","../internals/not-a-regexp":"bmUBS","../internals/require-object-coercible":"1XURO","../internals/to-string":"k0ZQF","../internals/correct-is-regexp-logic":"kDBvg"}],"79oCt":[function(require,module,exports) {
'use strict';
var charAt = require('../internals/string-multibyte').charAt;
var toString = require('../internals/to-string');
var InternalStateModule = require('../internals/internal-state');
var defineIterator = require('../internals/iterator-define');
var createIterResultObject = require('../internals/create-iter-result-object');
var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function(iterated) {
    setInternalState(this, {
        type: STRING_ITERATOR,
        string: toString(iterated),
        index: 0
    });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
    var state = getInternalState(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return createIterResultObject(undefined, true);
    point = charAt(string, index);
    state.index += point.length;
    return createIterResultObject(point, false);
});

},{"../internals/string-multibyte":"dPnMz","../internals/to-string":"k0ZQF","../internals/internal-state":"ceuiK","../internals/iterator-define":"18N5X","../internals/create-iter-result-object":"1dfgC"}],"3bQbi":[function(require,module,exports) {
'use strict';
var call = require('../internals/function-call');
var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
var anObject = require('../internals/an-object');
var isNullOrUndefined = require('../internals/is-null-or-undefined');
var toLength = require('../internals/to-length');
var toString = require('../internals/to-string');
var requireObjectCoercible = require('../internals/require-object-coercible');
var getMethod = require('../internals/get-method');
var advanceStringIndex = require('../internals/advance-string-index');
var regExpExec = require('../internals/regexp-exec-abstract');
// @@match logic
fixRegExpWellKnownSymbolLogic('match', function(MATCH, nativeMatch, maybeCallNative) {
    return [
        // `String.prototype.match` method
        // https://tc39.es/ecma262/#sec-string.prototype.match
        function match(regexp) {
            var O = requireObjectCoercible(this);
            var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
            return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
        },
        // `RegExp.prototype[@@match]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
        function(string) {
            var rx = anObject(this);
            var S = toString(string);
            var res = maybeCallNative(nativeMatch, rx, S);
            if (res.done) return res.value;
            if (!rx.global) return regExpExec(rx, S);
            var fullUnicode = rx.unicode;
            rx.lastIndex = 0;
            var A = [];
            var n = 0;
            var result;
            while((result = regExpExec(rx, S)) !== null){
                var matchStr = toString(result[0]);
                A[n] = matchStr;
                if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                n++;
            }
            return n === 0 ? null : A;
        }
    ];
});

},{"../internals/function-call":"d0MId","../internals/fix-regexp-well-known-symbol-logic":"kKKB8","../internals/an-object":"9unxM","../internals/is-null-or-undefined":"kssQ6","../internals/to-length":"coWuj","../internals/to-string":"k0ZQF","../internals/require-object-coercible":"1XURO","../internals/get-method":"8DyNd","../internals/advance-string-index":"eZF6s","../internals/regexp-exec-abstract":"cID5l"}],"kKKB8":[function(require,module,exports) {
'use strict';
// TODO: Remove from `core-js@4` since it's moved to entry points
require('../modules/es.regexp.exec');
var uncurryThis = require('../internals/function-uncurry-this-clause');
var defineBuiltIn = require('../internals/define-built-in');
var regexpExec = require('../internals/regexp-exec');
var fails = require('../internals/fails');
var wellKnownSymbol = require('../internals/well-known-symbol');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;
module.exports = function(KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol(KEY);
    var DELEGATES_TO_SYMBOL = !fails(function() {
        // String methods call symbol-named RegEp methods
        var O = {
        };
        O[SYMBOL] = function() {
            return 7;
        };
        return ''[KEY](O) != 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function() {
        // Symbol-named RegExp methods call .exec
        var execCalled = false;
        var re = /a/;
        if (KEY === 'split') {
            // We can't use real regex here since it causes deoptimization
            // and serious performance degradation in V8
            // https://github.com/zloirock/core-js/issues/306
            re = {
            };
            // RegExp[@@split] doesn't call the regex's exec method, but first creates
            // a new one. We need to return the patched regex when creating the new one.
            re.constructor = {
            };
            re.constructor[SPECIES] = function() {
                return re;
            };
            re.flags = '';
            re[SYMBOL] = /./[SYMBOL];
        }
        re.exec = function() {
            execCalled = true;
            return null;
        };
        re[SYMBOL]('');
        return !execCalled;
    });
    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
        var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
        var methods = exec(SYMBOL, ''[KEY], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
            var uncurriedNativeMethod = uncurryThis(nativeMethod);
            var $exec = regexp.exec;
            if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
                if (DELEGATES_TO_SYMBOL && !forceStringMethod) // The native String method already delegates to @@method (this
                // polyfilled function), leasing to infinite recursion.
                // We avoid it by directly calling the native @@method method.
                return {
                    done: true,
                    value: uncurriedNativeRegExpMethod(regexp, str, arg2)
                };
                return {
                    done: true,
                    value: uncurriedNativeMethod(str, regexp, arg2)
                };
            }
            return {
                done: false
            };
        });
        defineBuiltIn(String.prototype, KEY, methods[0]);
        defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
    }
    if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};

},{"../modules/es.regexp.exec":"lySIs","../internals/function-uncurry-this-clause":"7Ho5A","../internals/define-built-in":"dTyng","../internals/regexp-exec":"daEEr","../internals/fails":"byxLb","../internals/well-known-symbol":"6sZ59","../internals/create-non-enumerable-property":"73EkF"}],"eZF6s":[function(require,module,exports) {
'use strict';
var charAt = require('../internals/string-multibyte').charAt;
// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function(S, index, unicode) {
    return index + (unicode ? charAt(S, index).length : 1);
};

},{"../internals/string-multibyte":"dPnMz"}],"cID5l":[function(require,module,exports) {
var call = require('../internals/function-call');
var anObject = require('../internals/an-object');
var isCallable = require('../internals/is-callable');
var classof = require('../internals/classof-raw');
var regexpExec = require('../internals/regexp-exec');
var $TypeError = TypeError;
// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function(R, S) {
    var exec = R.exec;
    if (isCallable(exec)) {
        var result = call(exec, R, S);
        if (result !== null) anObject(result);
        return result;
    }
    if (classof(R) === 'RegExp') return call(regexpExec, R, S);
    throw $TypeError('RegExp#exec called on incompatible receiver');
};

},{"../internals/function-call":"d0MId","../internals/an-object":"9unxM","../internals/is-callable":"41EnZ","../internals/classof-raw":"8F0bi","../internals/regexp-exec":"daEEr"}],"jEeAs":[function(require,module,exports) {
'use strict';
/* eslint-disable es/no-string-prototype-matchall -- safe */ var $ = require('../internals/export');
var call = require('../internals/function-call');
var uncurryThis = require('../internals/function-uncurry-this-clause');
var createIteratorConstructor = require('../internals/iterator-create-constructor');
var createIterResultObject = require('../internals/create-iter-result-object');
var requireObjectCoercible = require('../internals/require-object-coercible');
var toLength = require('../internals/to-length');
var toString = require('../internals/to-string');
var anObject = require('../internals/an-object');
var isNullOrUndefined = require('../internals/is-null-or-undefined');
var classof = require('../internals/classof-raw');
var isRegExp = require('../internals/is-regexp');
var getRegExpFlags = require('../internals/regexp-get-flags');
var getMethod = require('../internals/get-method');
var defineBuiltIn = require('../internals/define-built-in');
var fails = require('../internals/fails');
var wellKnownSymbol = require('../internals/well-known-symbol');
var speciesConstructor = require('../internals/species-constructor');
var advanceStringIndex = require('../internals/advance-string-index');
var regExpExec = require('../internals/regexp-exec-abstract');
var InternalStateModule = require('../internals/internal-state');
var IS_PURE = require('../internals/is-pure');
var MATCH_ALL = wellKnownSymbol('matchAll');
var REGEXP_STRING = 'RegExp String';
var REGEXP_STRING_ITERATOR = REGEXP_STRING + ' Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(REGEXP_STRING_ITERATOR);
var RegExpPrototype = RegExp.prototype;
var $TypeError = TypeError;
var stringIndexOf = uncurryThis(''.indexOf);
var nativeMatchAll = uncurryThis(''.matchAll);
var WORKS_WITH_NON_GLOBAL_REGEX = !!nativeMatchAll && !fails(function() {
    nativeMatchAll('a', /./);
});
var $RegExpStringIterator = createIteratorConstructor(function RegExpStringIterator(regexp, string, $global, fullUnicode) {
    setInternalState(this, {
        type: REGEXP_STRING_ITERATOR,
        regexp: regexp,
        string: string,
        global: $global,
        unicode: fullUnicode,
        done: false
    });
}, REGEXP_STRING, function next() {
    var state = getInternalState(this);
    if (state.done) return createIterResultObject(undefined, true);
    var R = state.regexp;
    var S = state.string;
    var match = regExpExec(R, S);
    if (match === null) {
        state.done = true;
        return createIterResultObject(undefined, true);
    }
    if (state.global) {
        if (toString(match[0]) === '') R.lastIndex = advanceStringIndex(S, toLength(R.lastIndex), state.unicode);
        return createIterResultObject(match, false);
    }
    state.done = true;
    return createIterResultObject(match, false);
});
var $matchAll = function(string) {
    var R = anObject(this);
    var S = toString(string);
    var C = speciesConstructor(R, RegExp);
    var flags = toString(getRegExpFlags(R));
    var matcher, $global, fullUnicode;
    matcher = new C(C === RegExp ? R.source : R, flags);
    $global = !!~stringIndexOf(flags, 'g');
    fullUnicode = !!~stringIndexOf(flags, 'u');
    matcher.lastIndex = toLength(R.lastIndex);
    return new $RegExpStringIterator(matcher, S, $global, fullUnicode);
};
// `String.prototype.matchAll` method
// https://tc39.es/ecma262/#sec-string.prototype.matchall
$({
    target: 'String',
    proto: true,
    forced: WORKS_WITH_NON_GLOBAL_REGEX
}, {
    matchAll: function matchAll(regexp) {
        var O = requireObjectCoercible(this);
        var flags, S, matcher, rx;
        if (!isNullOrUndefined(regexp)) {
            if (isRegExp(regexp)) {
                flags = toString(requireObjectCoercible(getRegExpFlags(regexp)));
                if (!~stringIndexOf(flags, 'g')) throw $TypeError('`.matchAll` does not allow non-global regexes');
            }
            if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll(O, regexp);
            matcher = getMethod(regexp, MATCH_ALL);
            if (matcher === undefined && IS_PURE && classof(regexp) == 'RegExp') matcher = $matchAll;
            if (matcher) return call(matcher, regexp, O);
        } else if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll(O, regexp);
        S = toString(O);
        rx = new RegExp(regexp, 'g');
        return IS_PURE ? call($matchAll, rx, S) : rx[MATCH_ALL](S);
    }
});
IS_PURE || MATCH_ALL in RegExpPrototype || defineBuiltIn(RegExpPrototype, MATCH_ALL, $matchAll);

},{"../internals/export":"2mZbc","../internals/function-call":"d0MId","../internals/function-uncurry-this-clause":"7Ho5A","../internals/iterator-create-constructor":"fBwcg","../internals/create-iter-result-object":"1dfgC","../internals/require-object-coercible":"1XURO","../internals/to-length":"coWuj","../internals/to-string":"k0ZQF","../internals/an-object":"9unxM","../internals/is-null-or-undefined":"kssQ6","../internals/classof-raw":"8F0bi","../internals/is-regexp":"b7miO","../internals/regexp-get-flags":"7BOiC","../internals/get-method":"8DyNd","../internals/define-built-in":"dTyng","../internals/fails":"byxLb","../internals/well-known-symbol":"6sZ59","../internals/species-constructor":"6tv7V","../internals/advance-string-index":"eZF6s","../internals/regexp-exec-abstract":"cID5l","../internals/internal-state":"ceuiK","../internals/is-pure":"dlbEd"}],"fEFFM":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $padEnd = require('../internals/string-pad').end;
var WEBKIT_BUG = require('../internals/string-pad-webkit-bug');
// `String.prototype.padEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.padend
$({
    target: 'String',
    proto: true,
    forced: WEBKIT_BUG
}, {
    padEnd: function padEnd(maxLength /* , fillString = ' ' */ ) {
        return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"2mZbc","../internals/string-pad":"lqvFq","../internals/string-pad-webkit-bug":"7uDk0"}],"7uDk0":[function(require,module,exports) {
// https://github.com/zloirock/core-js/issues/280
var userAgent = require('../internals/engine-user-agent');
module.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent);

},{"../internals/engine-user-agent":"ihes9"}],"coZy7":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $padStart = require('../internals/string-pad').start;
var WEBKIT_BUG = require('../internals/string-pad-webkit-bug');
// `String.prototype.padStart` method
// https://tc39.es/ecma262/#sec-string.prototype.padstart
$({
    target: 'String',
    proto: true,
    forced: WEBKIT_BUG
}, {
    padStart: function padStart(maxLength /* , fillString = ' ' */ ) {
        return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"../internals/export":"2mZbc","../internals/string-pad":"lqvFq","../internals/string-pad-webkit-bug":"7uDk0"}],"d9wUa":[function(require,module,exports) {
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');
var toIndexedObject = require('../internals/to-indexed-object');
var toObject = require('../internals/to-object');
var toString = require('../internals/to-string');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var push = uncurryThis([].push);
var join = uncurryThis([].join);
// `String.raw` method
// https://tc39.es/ecma262/#sec-string.raw
$({
    target: 'String',
    stat: true
}, {
    raw: function raw(template) {
        var rawTemplate = toIndexedObject(toObject(template).raw);
        var literalSegments = lengthOfArrayLike(rawTemplate);
        if (!literalSegments) return '';
        var argumentsLength = arguments.length;
        var elements = [];
        var i = 0;
        while(true){
            push(elements, toString(rawTemplate[i++]));
            if (i === literalSegments) return join(elements, '');
            if (i < argumentsLength) push(elements, toString(arguments[i]));
        }
    }
});

},{"../internals/export":"2mZbc","../internals/function-uncurry-this":"gBsQL","../internals/to-indexed-object":"9N8sJ","../internals/to-object":"ghTKi","../internals/to-string":"k0ZQF","../internals/length-of-array-like":"feyBo"}],"7f2Bv":[function(require,module,exports) {
var $ = require('../internals/export');
var repeat = require('../internals/string-repeat');
// `String.prototype.repeat` method
// https://tc39.es/ecma262/#sec-string.prototype.repeat
$({
    target: 'String',
    proto: true
}, {
    repeat: repeat
});

},{"../internals/export":"2mZbc","../internals/string-repeat":"8cSMA"}],"2k8lL":[function(require,module,exports) {
'use strict';
var apply = require('../internals/function-apply');
var call = require('../internals/function-call');
var uncurryThis = require('../internals/function-uncurry-this');
var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
var fails = require('../internals/fails');
var anObject = require('../internals/an-object');
var isCallable = require('../internals/is-callable');
var isNullOrUndefined = require('../internals/is-null-or-undefined');
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var toLength = require('../internals/to-length');
var toString = require('../internals/to-string');
var requireObjectCoercible = require('../internals/require-object-coercible');
var advanceStringIndex = require('../internals/advance-string-index');
var getMethod = require('../internals/get-method');
var getSubstitution = require('../internals/get-substitution');
var regExpExec = require('../internals/regexp-exec-abstract');
var wellKnownSymbol = require('../internals/well-known-symbol');
var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);
var maybeToString = function(it) {
    return it === undefined ? it : String(it);
};
// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = function() {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
}();
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function() {
    if (/./[REPLACE]) return /./[REPLACE]('a', '$0') === '';
    return false;
}();
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
    var re = /./;
    re.exec = function() {
        var result = [];
        result.groups = {
            a: '7'
        };
        return result;
    };
    // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
    return ''.replace(re, '$<a>') !== '7';
});
// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function(_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
    return [
        // `String.prototype.replace` method
        // https://tc39.es/ecma262/#sec-string.prototype.replace
        function replace(searchValue, replaceValue) {
            var O = requireObjectCoercible(this);
            var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
            return replacer ? call(replacer, searchValue, O, replaceValue) : call(nativeReplace, toString(O), searchValue, replaceValue);
        },
        // `RegExp.prototype[@@replace]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
        function(string, replaceValue) {
            var rx = anObject(this);
            var S = toString(string);
            if (typeof replaceValue == 'string' && stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 && stringIndexOf(replaceValue, '$<') === -1) {
                var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
                if (res.done) return res.value;
            }
            var functionalReplace = isCallable(replaceValue);
            if (!functionalReplace) replaceValue = toString(replaceValue);
            var global = rx.global;
            if (global) {
                var fullUnicode = rx.unicode;
                rx.lastIndex = 0;
            }
            var results = [];
            while(true){
                var result = regExpExec(rx, S);
                if (result === null) break;
                push(results, result);
                if (!global) break;
                var matchStr = toString(result[0]);
                if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
            }
            var accumulatedResult = '';
            var nextSourcePosition = 0;
            for(var i = 0; i < results.length; i++){
                result = results[i];
                var matched = toString(result[0]);
                var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
                var captures = [];
                // NOTE: This is equivalent to
                //   captures = result.slice(1).map(maybeToString)
                // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
                // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
                // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
                for(var j = 1; j < result.length; j++)push(captures, maybeToString(result[j]));
                var namedCaptures = result.groups;
                if (functionalReplace) {
                    var replacerArgs = concat([
                        matched
                    ], captures, position, S);
                    if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
                    var replacement = toString(apply(replaceValue, undefined, replacerArgs));
                } else replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                if (position >= nextSourcePosition) {
                    accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
                    nextSourcePosition = position + matched.length;
                }
            }
            return accumulatedResult + stringSlice(S, nextSourcePosition);
        }
    ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

},{"../internals/function-apply":"hikDN","../internals/function-call":"d0MId","../internals/function-uncurry-this":"gBsQL","../internals/fix-regexp-well-known-symbol-logic":"kKKB8","../internals/fails":"byxLb","../internals/an-object":"9unxM","../internals/is-callable":"41EnZ","../internals/is-null-or-undefined":"kssQ6","../internals/to-integer-or-infinity":"7H3g3","../internals/to-length":"coWuj","../internals/to-string":"k0ZQF","../internals/require-object-coercible":"1XURO","../internals/advance-string-index":"eZF6s","../internals/get-method":"8DyNd","../internals/get-substitution":"hs6aX","../internals/regexp-exec-abstract":"cID5l","../internals/well-known-symbol":"6sZ59"}],"hs6aX":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var toObject = require('../internals/to-object');
var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;
// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
        namedCaptures = toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace(replacement, symbols, function(match, ch) {
        var capture;
        switch(charAt(ch, 0)){
            case '$':
                return '$';
            case '&':
                return matched;
            case '`':
                return stringSlice(str, 0, position);
            case "'":
                return stringSlice(str, tailPos);
            case '<':
                capture = namedCaptures[stringSlice(ch, 1, -1)];
                break;
            default:
                var n = +ch;
                if (n === 0) return match;
                if (n > m) {
                    var f = floor(n / 10);
                    if (f === 0) return match;
                    if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
                    return match;
                }
                capture = captures[n - 1];
        }
        return capture === undefined ? '' : capture;
    });
};

},{"../internals/function-uncurry-this":"gBsQL","../internals/to-object":"ghTKi"}],"8IJOq":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var uncurryThis = require('../internals/function-uncurry-this');
var requireObjectCoercible = require('../internals/require-object-coercible');
var isCallable = require('../internals/is-callable');
var isNullOrUndefined = require('../internals/is-null-or-undefined');
var isRegExp = require('../internals/is-regexp');
var toString = require('../internals/to-string');
var getMethod = require('../internals/get-method');
var getRegExpFlags = require('../internals/regexp-get-flags');
var getSubstitution = require('../internals/get-substitution');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_PURE = require('../internals/is-pure');
var REPLACE = wellKnownSymbol('replace');
var $TypeError = TypeError;
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var max = Math.max;
var stringIndexOf = function(string, searchValue, fromIndex) {
    if (fromIndex > string.length) return -1;
    if (searchValue === '') return fromIndex;
    return indexOf(string, searchValue, fromIndex);
};
// `String.prototype.replaceAll` method
// https://tc39.es/ecma262/#sec-string.prototype.replaceall
$({
    target: 'String',
    proto: true
}, {
    replaceAll: function replaceAll(searchValue, replaceValue) {
        var O = requireObjectCoercible(this);
        var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, replacement;
        var position = 0;
        var endOfLastMatch = 0;
        var result = '';
        if (!isNullOrUndefined(searchValue)) {
            IS_REG_EXP = isRegExp(searchValue);
            if (IS_REG_EXP) {
                flags = toString(requireObjectCoercible(getRegExpFlags(searchValue)));
                if (!~indexOf(flags, 'g')) throw $TypeError('`.replaceAll` does not allow non-global regexes');
            }
            replacer = getMethod(searchValue, REPLACE);
            if (replacer) return call(replacer, searchValue, O, replaceValue);
            else if (IS_PURE && IS_REG_EXP) return replace(toString(O), searchValue, replaceValue);
        }
        string = toString(O);
        searchString = toString(searchValue);
        functionalReplace = isCallable(replaceValue);
        if (!functionalReplace) replaceValue = toString(replaceValue);
        searchLength = searchString.length;
        advanceBy = max(1, searchLength);
        position = stringIndexOf(string, searchString, 0);
        while(position !== -1){
            replacement = functionalReplace ? toString(replaceValue(searchString, position, string)) : getSubstitution(searchString, string, position, [], undefined, replaceValue);
            result += stringSlice(string, endOfLastMatch, position) + replacement;
            endOfLastMatch = position + searchLength;
            position = stringIndexOf(string, searchString, position + advanceBy);
        }
        if (endOfLastMatch < string.length) result += stringSlice(string, endOfLastMatch);
        return result;
    }
});

},{"../internals/export":"2mZbc","../internals/function-call":"d0MId","../internals/function-uncurry-this":"gBsQL","../internals/require-object-coercible":"1XURO","../internals/is-callable":"41EnZ","../internals/is-null-or-undefined":"kssQ6","../internals/is-regexp":"b7miO","../internals/to-string":"k0ZQF","../internals/get-method":"8DyNd","../internals/regexp-get-flags":"7BOiC","../internals/get-substitution":"hs6aX","../internals/well-known-symbol":"6sZ59","../internals/is-pure":"dlbEd"}],"9LcVn":[function(require,module,exports) {
'use strict';
var call = require('../internals/function-call');
var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
var anObject = require('../internals/an-object');
var isNullOrUndefined = require('../internals/is-null-or-undefined');
var requireObjectCoercible = require('../internals/require-object-coercible');
var sameValue = require('../internals/same-value');
var toString = require('../internals/to-string');
var getMethod = require('../internals/get-method');
var regExpExec = require('../internals/regexp-exec-abstract');
// @@search logic
fixRegExpWellKnownSymbolLogic('search', function(SEARCH, nativeSearch, maybeCallNative) {
    return [
        // `String.prototype.search` method
        // https://tc39.es/ecma262/#sec-string.prototype.search
        function search(regexp) {
            var O = requireObjectCoercible(this);
            var searcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, SEARCH);
            return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
        },
        // `RegExp.prototype[@@search]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
        function(string) {
            var rx = anObject(this);
            var S = toString(string);
            var res = maybeCallNative(nativeSearch, rx, S);
            if (res.done) return res.value;
            var previousLastIndex = rx.lastIndex;
            if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
            var result = regExpExec(rx, S);
            if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
            return result === null ? -1 : result.index;
        }
    ];
});

},{"../internals/function-call":"d0MId","../internals/fix-regexp-well-known-symbol-logic":"kKKB8","../internals/an-object":"9unxM","../internals/is-null-or-undefined":"kssQ6","../internals/require-object-coercible":"1XURO","../internals/same-value":"4xcdM","../internals/to-string":"k0ZQF","../internals/get-method":"8DyNd","../internals/regexp-exec-abstract":"cID5l"}],"5yIFY":[function(require,module,exports) {
'use strict';
var apply = require('../internals/function-apply');
var call = require('../internals/function-call');
var uncurryThis = require('../internals/function-uncurry-this');
var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
var anObject = require('../internals/an-object');
var isNullOrUndefined = require('../internals/is-null-or-undefined');
var isRegExp = require('../internals/is-regexp');
var requireObjectCoercible = require('../internals/require-object-coercible');
var speciesConstructor = require('../internals/species-constructor');
var advanceStringIndex = require('../internals/advance-string-index');
var toLength = require('../internals/to-length');
var toString = require('../internals/to-string');
var getMethod = require('../internals/get-method');
var arraySlice = require('../internals/array-slice-simple');
var callRegExpExec = require('../internals/regexp-exec-abstract');
var regexpExec = require('../internals/regexp-exec');
var stickyHelpers = require('../internals/regexp-sticky-helpers');
var fails = require('../internals/fails');
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 4294967295;
var min = Math.min;
var $push = [].push;
var exec = uncurryThis(/./.exec);
var push = uncurryThis($push);
var stringSlice = uncurryThis(''.slice);
// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function() {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function() {
        return originalExec.apply(this, arguments);
    };
    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});
// @@split logic
fixRegExpWellKnownSymbolLogic('split', function(SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;
    if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 || ''.split(/.?/).length) // based on es5-shim implementation, need to rework it
    internalSplit = function(separator, limit) {
        var string = toString(requireObjectCoercible(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [
            string
        ];
        // If `separator` is not a regex, use native split
        if (!isRegExp(separator)) return call(nativeSplit, string, separator, lim);
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;
        while(match = call(regexpExec, separatorCopy, string)){
            lastIndex = separatorCopy.lastIndex;
            if (lastIndex > lastLastIndex) {
                push(output, stringSlice(string, lastLastIndex, match.index));
                if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
                lastLength = match[0].length;
                lastLastIndex = lastIndex;
                if (output.length >= lim) break;
            }
            if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }
        if (lastLastIndex === string.length) {
            if (lastLength || !exec(separatorCopy, '')) push(output, '');
        } else push(output, stringSlice(string, lastLastIndex));
        return output.length > lim ? arraySlice(output, 0, lim) : output;
    };
    else if ('0'.split(undefined, 0).length) internalSplit = function(separator, limit) {
        return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    };
    else internalSplit = nativeSplit;
    return [
        // `String.prototype.split` method
        // https://tc39.es/ecma262/#sec-string.prototype.split
        function split(separator, limit) {
            var O = requireObjectCoercible(this);
            var splitter = isNullOrUndefined(separator) ? undefined : getMethod(separator, SPLIT);
            return splitter ? call(splitter, separator, O, limit) : call(internalSplit, toString(O), separator, limit);
        },
        // `RegExp.prototype[@@split]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
        //
        // NOTE: This cannot be properly polyfilled in engines that don't support
        // the 'y' flag.
        function(string, limit) {
            var rx = anObject(this);
            var S = toString(string);
            var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
            if (res.done) return res.value;
            var C = speciesConstructor(rx, RegExp);
            var unicodeMatching = rx.unicode;
            var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y ? 'g' : 'y');
            // ^(? + rx + ) is needed, in combination with some S slicing, to
            // simulate the 'y' flag.
            var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
            var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
            if (lim === 0) return [];
            if (S.length === 0) return callRegExpExec(splitter, S) === null ? [
                S
            ] : [];
            var p = 0;
            var q = 0;
            var A = [];
            while(q < S.length){
                splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
                var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
                var e;
                if (z === null || (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) q = advanceStringIndex(S, q, unicodeMatching);
                else {
                    push(A, stringSlice(S, p, q));
                    if (A.length === lim) return A;
                    for(var i = 1; i <= z.length - 1; i++){
                        push(A, z[i]);
                        if (A.length === lim) return A;
                    }
                    q = p = e;
                }
            }
            push(A, stringSlice(S, p));
            return A;
        }
    ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

},{"../internals/function-apply":"hikDN","../internals/function-call":"d0MId","../internals/function-uncurry-this":"gBsQL","../internals/fix-regexp-well-known-symbol-logic":"kKKB8","../internals/an-object":"9unxM","../internals/is-null-or-undefined":"kssQ6","../internals/is-regexp":"b7miO","../internals/require-object-coercible":"1XURO","../internals/species-constructor":"6tv7V","../internals/advance-string-index":"eZF6s","../internals/to-length":"coWuj","../internals/to-string":"k0ZQF","../internals/get-method":"8DyNd","../internals/array-slice-simple":"cgL4j","../internals/regexp-exec-abstract":"cID5l","../internals/regexp-exec":"daEEr","../internals/regexp-sticky-helpers":"4mh9i","../internals/fails":"byxLb"}],"5IlYf":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this-clause');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var toLength = require('../internals/to-length');
var toString = require('../internals/to-string');
var notARegExp = require('../internals/not-a-regexp');
var requireObjectCoercible = require('../internals/require-object-coercible');
var correctIsRegExpLogic = require('../internals/correct-is-regexp-logic');
var IS_PURE = require('../internals/is-pure');
// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var nativeStartsWith = uncurryThis(''.startsWith);
var stringSlice = uncurryThis(''.slice);
var min = Math.min;
var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function() {
    var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
    return descriptor && !descriptor.writable;
}();
// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({
    target: 'String',
    proto: true,
    forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
}, {
    startsWith: function startsWith(searchString /* , position = 0 */ ) {
        var that = toString(requireObjectCoercible(this));
        notARegExp(searchString);
        var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
        var search = toString(searchString);
        return nativeStartsWith ? nativeStartsWith(that, search, index) : stringSlice(that, index, index + search.length) === search;
    }
});

},{"../internals/export":"2mZbc","../internals/function-uncurry-this-clause":"7Ho5A","../internals/object-get-own-property-descriptor":"hwpsT","../internals/to-length":"coWuj","../internals/to-string":"k0ZQF","../internals/not-a-regexp":"bmUBS","../internals/require-object-coercible":"1XURO","../internals/correct-is-regexp-logic":"kDBvg","../internals/is-pure":"dlbEd"}],"ffj2Y":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');
var requireObjectCoercible = require('../internals/require-object-coercible');
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var toString = require('../internals/to-string');
var stringSlice = uncurryThis(''.slice);
var max = Math.max;
var min = Math.min;
// eslint-disable-next-line unicorn/prefer-string-slice -- required for testing
var FORCED = !''.substr || 'ab'.substr(-1) !== 'b';
// `String.prototype.substr` method
// https://tc39.es/ecma262/#sec-string.prototype.substr
$({
    target: 'String',
    proto: true,
    forced: FORCED
}, {
    substr: function substr(start, length) {
        var that = toString(requireObjectCoercible(this));
        var size = that.length;
        var intStart = toIntegerOrInfinity(start);
        var intLength, intEnd;
        if (intStart === Infinity) intStart = 0;
        if (intStart < 0) intStart = max(size + intStart, 0);
        intLength = length === undefined ? size : toIntegerOrInfinity(length);
        if (intLength <= 0 || intLength === Infinity) return '';
        intEnd = min(intStart + intLength, size);
        return intStart >= intEnd ? '' : stringSlice(that, intStart, intEnd);
    }
});

},{"../internals/export":"2mZbc","../internals/function-uncurry-this":"gBsQL","../internals/require-object-coercible":"1XURO","../internals/to-integer-or-infinity":"7H3g3","../internals/to-string":"k0ZQF"}],"1UwM0":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $trim = require('../internals/string-trim').trim;
var forcedStringTrimMethod = require('../internals/string-trim-forced');
// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({
    target: 'String',
    proto: true,
    forced: forcedStringTrimMethod('trim')
}, {
    trim: function trim() {
        return $trim(this);
    }
});

},{"../internals/export":"2mZbc","../internals/string-trim":"crV5l","../internals/string-trim-forced":"gdmgb"}],"gdmgb":[function(require,module,exports) {
var PROPER_FUNCTION_NAME = require('../internals/function-name').PROPER;
var fails = require('../internals/fails');
var whitespaces = require('../internals/whitespaces');
var non = '\u200B\u0085\u180E';
// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function(METHOD_NAME) {
    return fails(function() {
        return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME;
    });
};

},{"../internals/function-name":"fErEm","../internals/fails":"byxLb","../internals/whitespaces":"l0FoE"}],"67bv8":[function(require,module,exports) {
// TODO: Remove this line from `core-js@4`
require('../modules/es.string.trim-right');
var $ = require('../internals/export');
var trimEnd = require('../internals/string-trim-end');
// `String.prototype.trimEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
$({
    target: 'String',
    proto: true,
    name: 'trimEnd',
    forced: ''.trimEnd !== trimEnd
}, {
    trimEnd: trimEnd
});

},{"../modules/es.string.trim-right":"3Wkef","../internals/export":"2mZbc","../internals/string-trim-end":"kBy6U"}],"3Wkef":[function(require,module,exports) {
var $ = require('../internals/export');
var trimEnd = require('../internals/string-trim-end');
// `String.prototype.trimRight` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// eslint-disable-next-line es/no-string-prototype-trimleft-trimright -- safe
$({
    target: 'String',
    proto: true,
    name: 'trimEnd',
    forced: ''.trimRight !== trimEnd
}, {
    trimRight: trimEnd
});

},{"../internals/export":"2mZbc","../internals/string-trim-end":"kBy6U"}],"kBy6U":[function(require,module,exports) {
'use strict';
var $trimEnd = require('../internals/string-trim').end;
var forcedStringTrimMethod = require('../internals/string-trim-forced');
// `String.prototype.{ trimEnd, trimRight }` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// https://tc39.es/ecma262/#String.prototype.trimright
module.exports = forcedStringTrimMethod('trimEnd') ? function trimEnd() {
    return $trimEnd(this);
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
} : ''.trimEnd;

},{"../internals/string-trim":"crV5l","../internals/string-trim-forced":"gdmgb"}],"cbyCh":[function(require,module,exports) {
// TODO: Remove this line from `core-js@4`
require('../modules/es.string.trim-left');
var $ = require('../internals/export');
var trimStart = require('../internals/string-trim-start');
// `String.prototype.trimStart` method
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
$({
    target: 'String',
    proto: true,
    name: 'trimStart',
    forced: ''.trimStart !== trimStart
}, {
    trimStart: trimStart
});

},{"../modules/es.string.trim-left":"9z9Tw","../internals/export":"2mZbc","../internals/string-trim-start":"iN4QX"}],"9z9Tw":[function(require,module,exports) {
var $ = require('../internals/export');
var trimStart = require('../internals/string-trim-start');
// `String.prototype.trimLeft` method
// https://tc39.es/ecma262/#sec-string.prototype.trimleft
// eslint-disable-next-line es/no-string-prototype-trimleft-trimright -- safe
$({
    target: 'String',
    proto: true,
    name: 'trimStart',
    forced: ''.trimLeft !== trimStart
}, {
    trimLeft: trimStart
});

},{"../internals/export":"2mZbc","../internals/string-trim-start":"iN4QX"}],"iN4QX":[function(require,module,exports) {
'use strict';
var $trimStart = require('../internals/string-trim').start;
var forcedStringTrimMethod = require('../internals/string-trim-forced');
// `String.prototype.{ trimStart, trimLeft }` method
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// https://tc39.es/ecma262/#String.prototype.trimleft
module.exports = forcedStringTrimMethod('trimStart') ? function trimStart() {
    return $trimStart(this);
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
} : ''.trimStart;

},{"../internals/string-trim":"crV5l","../internals/string-trim-forced":"gdmgb"}],"h582X":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.anchor` method
// https://tc39.es/ecma262/#sec-string.prototype.anchor
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('anchor')
}, {
    anchor: function anchor(name) {
        return createHTML(this, 'a', 'name', name);
    }
});

},{"../internals/export":"2mZbc","../internals/create-html":"8vf9l","../internals/string-html-forced":"jaNbw"}],"8vf9l":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var requireObjectCoercible = require('../internals/require-object-coercible');
var toString = require('../internals/to-string');
var quot = /"/g;
var replace = uncurryThis(''.replace);
// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function(string, tag, attribute, value) {
    var S = toString(requireObjectCoercible(string));
    var p1 = '<' + tag;
    if (attribute !== '') p1 += ' ' + attribute + '="' + replace(toString(value), quot, '&quot;') + '"';
    return p1 + '>' + S + '</' + tag + '>';
};

},{"../internals/function-uncurry-this":"gBsQL","../internals/require-object-coercible":"1XURO","../internals/to-string":"k0ZQF"}],"jaNbw":[function(require,module,exports) {
var fails = require('../internals/fails');
// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function(METHOD_NAME) {
    return fails(function() {
        var test = ''[METHOD_NAME]('"');
        return test !== test.toLowerCase() || test.split('"').length > 3;
    });
};

},{"../internals/fails":"byxLb"}],"gSDtA":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.big` method
// https://tc39.es/ecma262/#sec-string.prototype.big
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('big')
}, {
    big: function big() {
        return createHTML(this, 'big', '', '');
    }
});

},{"../internals/export":"2mZbc","../internals/create-html":"8vf9l","../internals/string-html-forced":"jaNbw"}],"lTrep":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.blink` method
// https://tc39.es/ecma262/#sec-string.prototype.blink
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('blink')
}, {
    blink: function blink() {
        return createHTML(this, 'blink', '', '');
    }
});

},{"../internals/export":"2mZbc","../internals/create-html":"8vf9l","../internals/string-html-forced":"jaNbw"}],"kk4wr":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.bold` method
// https://tc39.es/ecma262/#sec-string.prototype.bold
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('bold')
}, {
    bold: function bold() {
        return createHTML(this, 'b', '', '');
    }
});

},{"../internals/export":"2mZbc","../internals/create-html":"8vf9l","../internals/string-html-forced":"jaNbw"}],"kdH1X":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.fixed` method
// https://tc39.es/ecma262/#sec-string.prototype.fixed
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('fixed')
}, {
    fixed: function fixed() {
        return createHTML(this, 'tt', '', '');
    }
});

},{"../internals/export":"2mZbc","../internals/create-html":"8vf9l","../internals/string-html-forced":"jaNbw"}],"412V5":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.fontcolor` method
// https://tc39.es/ecma262/#sec-string.prototype.fontcolor
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('fontcolor')
}, {
    fontcolor: function fontcolor(color) {
        return createHTML(this, 'font', 'color', color);
    }
});

},{"../internals/export":"2mZbc","../internals/create-html":"8vf9l","../internals/string-html-forced":"jaNbw"}],"7TWRa":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.fontsize` method
// https://tc39.es/ecma262/#sec-string.prototype.fontsize
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('fontsize')
}, {
    fontsize: function fontsize(size) {
        return createHTML(this, 'font', 'size', size);
    }
});

},{"../internals/export":"2mZbc","../internals/create-html":"8vf9l","../internals/string-html-forced":"jaNbw"}],"iOrbm":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.italics` method
// https://tc39.es/ecma262/#sec-string.prototype.italics
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('italics')
}, {
    italics: function italics() {
        return createHTML(this, 'i', '', '');
    }
});

},{"../internals/export":"2mZbc","../internals/create-html":"8vf9l","../internals/string-html-forced":"jaNbw"}],"3BgXC":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.link` method
// https://tc39.es/ecma262/#sec-string.prototype.link
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('link')
}, {
    link: function link(url) {
        return createHTML(this, 'a', 'href', url);
    }
});

},{"../internals/export":"2mZbc","../internals/create-html":"8vf9l","../internals/string-html-forced":"jaNbw"}],"7usyq":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.small` method
// https://tc39.es/ecma262/#sec-string.prototype.small
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('small')
}, {
    small: function small() {
        return createHTML(this, 'small', '', '');
    }
});

},{"../internals/export":"2mZbc","../internals/create-html":"8vf9l","../internals/string-html-forced":"jaNbw"}],"6sGtc":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.strike` method
// https://tc39.es/ecma262/#sec-string.prototype.strike
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('strike')
}, {
    strike: function strike() {
        return createHTML(this, 'strike', '', '');
    }
});

},{"../internals/export":"2mZbc","../internals/create-html":"8vf9l","../internals/string-html-forced":"jaNbw"}],"k998D":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.sub` method
// https://tc39.es/ecma262/#sec-string.prototype.sub
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('sub')
}, {
    sub: function sub() {
        return createHTML(this, 'sub', '', '');
    }
});

},{"../internals/export":"2mZbc","../internals/create-html":"8vf9l","../internals/string-html-forced":"jaNbw"}],"a5Yf5":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');
// `String.prototype.sup` method
// https://tc39.es/ecma262/#sec-string.prototype.sup
$({
    target: 'String',
    proto: true,
    forced: forcedStringHTMLMethod('sup')
}, {
    sup: function sup() {
        return createHTML(this, 'sup', '', '');
    }
});

},{"../internals/export":"2mZbc","../internals/create-html":"8vf9l","../internals/string-html-forced":"jaNbw"}],"f9m3z":[function(require,module,exports) {
var createTypedArrayConstructor = require('../internals/typed-array-constructor');
// `Float32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Float32', function(init) {
    return function Float32Array1(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"../internals/typed-array-constructor":"1GFmu"}],"1GFmu":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var global = require('../internals/global');
var call = require('../internals/function-call');
var DESCRIPTORS = require('../internals/descriptors');
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = require('../internals/typed-array-constructors-require-wrappers');
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var ArrayBufferModule = require('../internals/array-buffer');
var anInstance = require('../internals/an-instance');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var isIntegralNumber = require('../internals/is-integral-number');
var toLength = require('../internals/to-length');
var toIndex = require('../internals/to-index');
var toOffset = require('../internals/to-offset');
var toPropertyKey = require('../internals/to-property-key');
var hasOwn = require('../internals/has-own-property');
var classof = require('../internals/classof');
var isObject = require('../internals/is-object');
var isSymbol = require('../internals/is-symbol');
var create = require('../internals/object-create');
var isPrototypeOf = require('../internals/object-is-prototype-of');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
var typedArrayFrom = require('../internals/typed-array-from');
var forEach = require('../internals/array-iteration').forEach;
var setSpecies = require('../internals/set-species');
var definePropertyModule = require('../internals/object-define-property');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var InternalStateModule = require('../internals/internal-state');
var inheritIfRequired = require('../internals/inherit-if-required');
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var enforceInternalState = InternalStateModule.enforce;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var round = Math.round;
var RangeError1 = global.RangeError;
var ArrayBuffer1 = ArrayBufferModule.ArrayBuffer;
var ArrayBufferPrototype = ArrayBuffer1.prototype;
var DataView1 = ArrayBufferModule.DataView;
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
var TypedArray = ArrayBufferViewCore.TypedArray;
var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var isTypedArray = ArrayBufferViewCore.isTypedArray;
var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
var WRONG_LENGTH = 'Wrong length';
var fromList = function(C, list) {
    aTypedArrayConstructor(C);
    var index = 0;
    var length = list.length;
    var result = new C(length);
    while(length > index)result[index] = list[index++];
    return result;
};
var addGetter = function(it, key) {
    nativeDefineProperty(it, key, {
        get: function() {
            return getInternalState(this)[key];
        }
    });
};
var isArrayBuffer = function(it) {
    var klass;
    return isPrototypeOf(ArrayBufferPrototype, it) || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
};
var isTypedArrayIndex = function(target, key) {
    return isTypedArray(target) && !isSymbol(key) && key in target && isIntegralNumber(+key) && key >= 0;
};
var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
    key = toPropertyKey(key);
    return isTypedArrayIndex(target, key) ? createPropertyDescriptor(2, target[key]) : nativeGetOwnPropertyDescriptor(target, key);
};
var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
    key = toPropertyKey(key);
    if (isTypedArrayIndex(target, key) && isObject(descriptor) && hasOwn(descriptor, 'value') && !hasOwn(descriptor, 'get') && !hasOwn(descriptor, 'set') && !descriptor.configurable && (!hasOwn(descriptor, 'writable') || descriptor.writable) && (!hasOwn(descriptor, 'enumerable') || descriptor.enumerable)) {
        target[key] = descriptor.value;
        return target;
    }
    return nativeDefineProperty(target, key, descriptor);
};
if (DESCRIPTORS) {
    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
        getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
        definePropertyModule.f = wrappedDefineProperty;
        addGetter(TypedArrayPrototype, 'buffer');
        addGetter(TypedArrayPrototype, 'byteOffset');
        addGetter(TypedArrayPrototype, 'byteLength');
        addGetter(TypedArrayPrototype, 'length');
    }
    $({
        target: 'Object',
        stat: true,
        forced: !NATIVE_ARRAY_BUFFER_VIEWS
    }, {
        getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
        defineProperty: wrappedDefineProperty
    });
    module.exports = function(TYPE, wrapper, CLAMPED) {
        var BYTES = TYPE.match(/\d+$/)[0] / 8;
        var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
        var GETTER = 'get' + TYPE;
        var SETTER = 'set' + TYPE;
        var NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME];
        var TypedArrayConstructor = NativeTypedArrayConstructor;
        var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
        var exported = {
        };
        var getter = function(that, index) {
            var data = getInternalState(that);
            return data.view[GETTER](index * BYTES + data.byteOffset, true);
        };
        var setter = function(that, index, value) {
            var data = getInternalState(that);
            if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 255 ? 255 : value & 255;
            data.view[SETTER](index * BYTES + data.byteOffset, value, true);
        };
        var addElement = function(that, index) {
            nativeDefineProperty(that, index, {
                get: function() {
                    return getter(this, index);
                },
                set: function(value) {
                    return setter(this, index, value);
                },
                enumerable: true
            });
        };
        if (!NATIVE_ARRAY_BUFFER_VIEWS) {
            TypedArrayConstructor = wrapper(function(that, data, offset, $length) {
                anInstance(that, TypedArrayConstructorPrototype);
                var index = 0;
                var byteOffset = 0;
                var buffer, byteLength, length;
                if (!isObject(data)) {
                    length = toIndex(data);
                    byteLength = length * BYTES;
                    buffer = new ArrayBuffer1(byteLength);
                } else if (isArrayBuffer(data)) {
                    buffer = data;
                    byteOffset = toOffset(offset, BYTES);
                    var $len = data.byteLength;
                    if ($length === undefined) {
                        if ($len % BYTES) throw RangeError1(WRONG_LENGTH);
                        byteLength = $len - byteOffset;
                        if (byteLength < 0) throw RangeError1(WRONG_LENGTH);
                    } else {
                        byteLength = toLength($length) * BYTES;
                        if (byteLength + byteOffset > $len) throw RangeError1(WRONG_LENGTH);
                    }
                    length = byteLength / BYTES;
                } else if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
                else return call(typedArrayFrom, TypedArrayConstructor, data);
                setInternalState(that, {
                    buffer: buffer,
                    byteOffset: byteOffset,
                    byteLength: byteLength,
                    length: length,
                    view: new DataView1(buffer)
                });
                while(index < length)addElement(that, index++);
            });
            if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
            TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
        } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
            TypedArrayConstructor = wrapper(function(dummy, data, typedArrayOffset, $length) {
                anInstance(dummy, TypedArrayConstructorPrototype);
                return inheritIfRequired(function() {
                    if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
                    if (isArrayBuffer(data)) return $length !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length) : typedArrayOffset !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES)) : new NativeTypedArrayConstructor(data);
                    if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
                    return call(typedArrayFrom, TypedArrayConstructor, data);
                }(), dummy, TypedArrayConstructor);
            });
            if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
            forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function(key) {
                if (!(key in TypedArrayConstructor)) createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
            });
            TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
        }
        if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
        enforceInternalState(TypedArrayConstructorPrototype).TypedArrayConstructor = TypedArrayConstructor;
        if (TYPED_ARRAY_TAG) createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
        var FORCED = TypedArrayConstructor != NativeTypedArrayConstructor;
        exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;
        $({
            global: true,
            constructor: true,
            forced: FORCED,
            sham: !NATIVE_ARRAY_BUFFER_VIEWS
        }, exported);
        if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
        if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
        setSpecies(CONSTRUCTOR_NAME);
    };
} else module.exports = function() {
};

},{"../internals/export":"2mZbc","../internals/global":"a4GR8","../internals/function-call":"d0MId","../internals/descriptors":"kuDzl","../internals/typed-array-constructors-require-wrappers":"ke2up","../internals/array-buffer-view-core":"zd7ve","../internals/array-buffer":"hMeAx","../internals/an-instance":"gTr5k","../internals/create-property-descriptor":"5fdHA","../internals/create-non-enumerable-property":"73EkF","../internals/is-integral-number":"fjOCz","../internals/to-length":"coWuj","../internals/to-index":"iXt4Q","../internals/to-offset":"1WjsL","../internals/to-property-key":"99Lby","../internals/has-own-property":"kL9Yw","../internals/classof":"gO6DW","../internals/is-object":"d60Kc","../internals/is-symbol":"hfIC8","../internals/object-create":"eYZeq","../internals/object-is-prototype-of":"gFfbX","../internals/object-set-prototype-of":"k1Sl0","../internals/object-get-own-property-names":"38UqD","../internals/typed-array-from":"ceD5b","../internals/array-iteration":"ciNJ0","../internals/set-species":"99lPJ","../internals/object-define-property":"iKHmb","../internals/object-get-own-property-descriptor":"hwpsT","../internals/internal-state":"ceuiK","../internals/inherit-if-required":"5Ef3J"}],"ke2up":[function(require,module,exports) {
/* eslint-disable no-new -- required for testing */ var global = require('../internals/global');
var fails = require('../internals/fails');
var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');
var NATIVE_ARRAY_BUFFER_VIEWS = require('../internals/array-buffer-view-core').NATIVE_ARRAY_BUFFER_VIEWS;
var ArrayBuffer1 = global.ArrayBuffer;
var Int8Array1 = global.Int8Array;
module.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function() {
    Int8Array1(1);
}) || !fails(function() {
    new Int8Array1(-1);
}) || !checkCorrectnessOfIteration(function(iterable) {
    new Int8Array1();
    new Int8Array1(null);
    new Int8Array1(1.5);
    new Int8Array1(iterable);
}, true) || fails(function() {
    // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
    return new Int8Array1(new ArrayBuffer1(2), 1, undefined).length !== 1;
});

},{"../internals/global":"a4GR8","../internals/fails":"byxLb","../internals/check-correctness-of-iteration":"lO6Bq","../internals/array-buffer-view-core":"zd7ve"}],"1WjsL":[function(require,module,exports) {
var toPositiveInteger = require('../internals/to-positive-integer');
var $RangeError = RangeError;
module.exports = function(it, BYTES) {
    var offset = toPositiveInteger(it);
    if (offset % BYTES) throw $RangeError('Wrong offset');
    return offset;
};

},{"../internals/to-positive-integer":"59Bw6"}],"59Bw6":[function(require,module,exports) {
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var $RangeError = RangeError;
module.exports = function(it) {
    var result = toIntegerOrInfinity(it);
    if (result < 0) throw $RangeError("The argument can't be less than 0");
    return result;
};

},{"../internals/to-integer-or-infinity":"7H3g3"}],"ceD5b":[function(require,module,exports) {
var bind = require('../internals/function-bind-context');
var call = require('../internals/function-call');
var aConstructor = require('../internals/a-constructor');
var toObject = require('../internals/to-object');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var getIterator = require('../internals/get-iterator');
var getIteratorMethod = require('../internals/get-iterator-method');
var isArrayIteratorMethod = require('../internals/is-array-iterator-method');
var isBigIntArray = require('../internals/is-big-int-array');
var aTypedArrayConstructor = require('../internals/array-buffer-view-core').aTypedArrayConstructor;
var toBigInt = require('../internals/to-big-int');
module.exports = function from(source /* , mapfn, thisArg */ ) {
    var C = aConstructor(this);
    var O = toObject(source);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iteratorMethod = getIteratorMethod(O);
    var i, length, result, thisIsBigIntArray, value, step, iterator, next;
    if (iteratorMethod && !isArrayIteratorMethod(iteratorMethod)) {
        iterator = getIterator(O, iteratorMethod);
        next = iterator.next;
        O = [];
        while(!(step = call(next, iterator)).done)O.push(step.value);
    }
    if (mapping && argumentsLength > 2) mapfn = bind(mapfn, arguments[2]);
    length = lengthOfArrayLike(O);
    result = new (aTypedArrayConstructor(C))(length);
    thisIsBigIntArray = isBigIntArray(result);
    for(i = 0; length > i; i++){
        value = mapping ? mapfn(O[i], i) : O[i];
        // FF30- typed arrays doesn't properly convert objects to typed array values
        result[i] = thisIsBigIntArray ? toBigInt(value) : +value;
    }
    return result;
};

},{"../internals/function-bind-context":"1epb9","../internals/function-call":"d0MId","../internals/a-constructor":"8n48a","../internals/to-object":"ghTKi","../internals/length-of-array-like":"feyBo","../internals/get-iterator":"erkff","../internals/get-iterator-method":"btrxT","../internals/is-array-iterator-method":"fEVgY","../internals/is-big-int-array":"3U3Aq","../internals/array-buffer-view-core":"zd7ve","../internals/to-big-int":"7Ey1f"}],"3U3Aq":[function(require,module,exports) {
var classof = require('../internals/classof');
module.exports = function(it) {
    var klass = classof(it);
    return klass == 'BigInt64Array' || klass == 'BigUint64Array';
};

},{"../internals/classof":"gO6DW"}],"7Ey1f":[function(require,module,exports) {
var toPrimitive = require('../internals/to-primitive');
var $TypeError = TypeError;
// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
module.exports = function(argument) {
    var prim = toPrimitive(argument, 'number');
    if (typeof prim == 'number') throw $TypeError("Can't convert number to bigint");
    // eslint-disable-next-line es/no-bigint -- safe
    return BigInt(prim);
};

},{"../internals/to-primitive":"LSiNW"}],"ky6XR":[function(require,module,exports) {
var createTypedArrayConstructor = require('../internals/typed-array-constructor');
// `Float64Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Float64', function(init) {
    return function Float64Array1(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"../internals/typed-array-constructor":"1GFmu"}],"lEs7k":[function(require,module,exports) {
var createTypedArrayConstructor = require('../internals/typed-array-constructor');
// `Int8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Int8', function(init) {
    return function Int8Array1(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"../internals/typed-array-constructor":"1GFmu"}],"5EyRk":[function(require,module,exports) {
var createTypedArrayConstructor = require('../internals/typed-array-constructor');
// `Int16Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Int16', function(init) {
    return function Int16Array1(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"../internals/typed-array-constructor":"1GFmu"}],"cDL8j":[function(require,module,exports) {
var createTypedArrayConstructor = require('../internals/typed-array-constructor');
// `Int32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Int32', function(init) {
    return function Int32Array1(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"../internals/typed-array-constructor":"1GFmu"}],"2HsmO":[function(require,module,exports) {
var createTypedArrayConstructor = require('../internals/typed-array-constructor');
// `Uint8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function(init) {
    return function Uint8Array1(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"../internals/typed-array-constructor":"1GFmu"}],"dFa8q":[function(require,module,exports) {
var createTypedArrayConstructor = require('../internals/typed-array-constructor');
// `Uint8ClampedArray` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function(init) {
    return function Uint8ClampedArray1(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
}, true);

},{"../internals/typed-array-constructor":"1GFmu"}],"aykHi":[function(require,module,exports) {
var createTypedArrayConstructor = require('../internals/typed-array-constructor');
// `Uint16Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint16', function(init) {
    return function Uint16Array1(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"../internals/typed-array-constructor":"1GFmu"}],"2oUhq":[function(require,module,exports) {
var createTypedArrayConstructor = require('../internals/typed-array-constructor');
// `Uint32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint32', function(init) {
    return function Uint32Array1(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    };
});

},{"../internals/typed-array-constructor":"1GFmu"}],"bgRol":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.at` method
// https://github.com/tc39/proposal-relative-indexing-method
exportTypedArrayMethod('at', function at(index) {
    var O = aTypedArray(this);
    var len = lengthOfArrayLike(O);
    var relativeIndex = toIntegerOrInfinity(index);
    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
    return k < 0 || k >= len ? undefined : O[k];
});

},{"../internals/array-buffer-view-core":"zd7ve","../internals/length-of-array-like":"feyBo","../internals/to-integer-or-infinity":"7H3g3"}],"3ktIi":[function(require,module,exports) {
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $ArrayCopyWithin = require('../internals/array-copy-within');
var u$ArrayCopyWithin = uncurryThis($ArrayCopyWithin);
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
exportTypedArrayMethod('copyWithin', function copyWithin(target, start /* , end */ ) {
    return u$ArrayCopyWithin(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
});

},{"../internals/function-uncurry-this":"gBsQL","../internals/array-buffer-view-core":"zd7ve","../internals/array-copy-within":"gaD2u"}],"5DxE6":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $every = require('../internals/array-iteration').every;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.every` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
exportTypedArrayMethod('every', function every(callbackfn /* , thisArg */ ) {
    return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});

},{"../internals/array-buffer-view-core":"zd7ve","../internals/array-iteration":"ciNJ0"}],"fqjtk":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $fill = require('../internals/array-fill');
var toBigInt = require('../internals/to-big-int');
var classof = require('../internals/classof');
var call = require('../internals/function-call');
var uncurryThis = require('../internals/function-uncurry-this');
var fails = require('../internals/fails');
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var slice = uncurryThis(''.slice);
// V8 ~ Chrome < 59, Safari < 14.1, FF < 55, Edge <=18
var CONVERSION_BUG = fails(function() {
    var count = 0;
    // eslint-disable-next-line es/no-typed-arrays -- safe
    new Int8Array(2).fill({
        valueOf: function() {
            return count++;
        }
    });
    return count !== 1;
});
// `%TypedArray%.prototype.fill` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
exportTypedArrayMethod('fill', function fill(value /* , start, end */ ) {
    var length = arguments.length;
    aTypedArray(this);
    var actualValue = slice(classof(this), 0, 3) === 'Big' ? toBigInt(value) : +value;
    return call($fill, this, actualValue, length > 1 ? arguments[1] : undefined, length > 2 ? arguments[2] : undefined);
}, CONVERSION_BUG);

},{"../internals/array-buffer-view-core":"zd7ve","../internals/array-fill":"hYFo3","../internals/to-big-int":"7Ey1f","../internals/classof":"gO6DW","../internals/function-call":"d0MId","../internals/function-uncurry-this":"gBsQL","../internals/fails":"byxLb"}],"1uzjz":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $filter = require('../internals/array-iteration').filter;
var fromSpeciesAndList = require('../internals/typed-array-from-species-and-list');
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.filter` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
exportTypedArrayMethod('filter', function filter(callbackfn /* , thisArg */ ) {
    var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return fromSpeciesAndList(this, list);
});

},{"../internals/array-buffer-view-core":"zd7ve","../internals/array-iteration":"ciNJ0","../internals/typed-array-from-species-and-list":"7zmLU"}],"7zmLU":[function(require,module,exports) {
var arrayFromConstructorAndList = require('../internals/array-from-constructor-and-list');
var typedArraySpeciesConstructor = require('../internals/typed-array-species-constructor');
module.exports = function(instance, list) {
    return arrayFromConstructorAndList(typedArraySpeciesConstructor(instance), list);
};

},{"../internals/array-from-constructor-and-list":"eZkfw","../internals/typed-array-species-constructor":"9xT79"}],"eZkfw":[function(require,module,exports) {
var lengthOfArrayLike = require('../internals/length-of-array-like');
module.exports = function(Constructor, list) {
    var index = 0;
    var length = lengthOfArrayLike(list);
    var result = new Constructor(length);
    while(length > index)result[index] = list[index++];
    return result;
};

},{"../internals/length-of-array-like":"feyBo"}],"9xT79":[function(require,module,exports) {
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var speciesConstructor = require('../internals/species-constructor');
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
// a part of `TypedArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#typedarray-species-create
module.exports = function(originalArray) {
    return aTypedArrayConstructor(speciesConstructor(originalArray, getTypedArrayConstructor(originalArray)));
};

},{"../internals/array-buffer-view-core":"zd7ve","../internals/species-constructor":"6tv7V"}],"d7VSQ":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $find = require('../internals/array-iteration').find;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.find` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
exportTypedArrayMethod('find', function find(predicate /* , thisArg */ ) {
    return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});

},{"../internals/array-buffer-view-core":"zd7ve","../internals/array-iteration":"ciNJ0"}],"llIwb":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $findIndex = require('../internals/array-iteration').findIndex;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
exportTypedArrayMethod('findIndex', function findIndex(predicate /* , thisArg */ ) {
    return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});

},{"../internals/array-buffer-view-core":"zd7ve","../internals/array-iteration":"ciNJ0"}],"djJ0P":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $findLast = require('../internals/array-iteration-from-last').findLast;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.findLast` method
// https://github.com/tc39/proposal-array-find-from-last
exportTypedArrayMethod('findLast', function findLast(predicate /* , thisArg */ ) {
    return $findLast(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});

},{"../internals/array-buffer-view-core":"zd7ve","../internals/array-iteration-from-last":"ceqNG"}],"M3311":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $findLastIndex = require('../internals/array-iteration-from-last').findLastIndex;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.findLastIndex` method
// https://github.com/tc39/proposal-array-find-from-last
exportTypedArrayMethod('findLastIndex', function findLastIndex(predicate /* , thisArg */ ) {
    return $findLastIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});

},{"../internals/array-buffer-view-core":"zd7ve","../internals/array-iteration-from-last":"ceqNG"}],"Wrhx0":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $forEach = require('../internals/array-iteration').forEach;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.forEach` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
exportTypedArrayMethod('forEach', function forEach(callbackfn /* , thisArg */ ) {
    $forEach(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});

},{"../internals/array-buffer-view-core":"zd7ve","../internals/array-iteration":"ciNJ0"}],"fgrPV":[function(require,module,exports) {
'use strict';
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = require('../internals/typed-array-constructors-require-wrappers');
var exportTypedArrayStaticMethod = require('../internals/array-buffer-view-core').exportTypedArrayStaticMethod;
var typedArrayFrom = require('../internals/typed-array-from');
// `%TypedArray%.from` method
// https://tc39.es/ecma262/#sec-%typedarray%.from
exportTypedArrayStaticMethod('from', typedArrayFrom, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS);

},{"../internals/typed-array-constructors-require-wrappers":"ke2up","../internals/array-buffer-view-core":"zd7ve","../internals/typed-array-from":"ceD5b"}],"afXwJ":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $includes = require('../internals/array-includes').includes;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.includes` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
exportTypedArrayMethod('includes', function includes(searchElement /* , fromIndex */ ) {
    return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});

},{"../internals/array-buffer-view-core":"zd7ve","../internals/array-includes":"cmRkV"}],"ffWJN":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $indexOf = require('../internals/array-includes').indexOf;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
exportTypedArrayMethod('indexOf', function indexOf(searchElement /* , fromIndex */ ) {
    return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});

},{"../internals/array-buffer-view-core":"zd7ve","../internals/array-includes":"cmRkV"}],"dWqIW":[function(require,module,exports) {
'use strict';
var global = require('../internals/global');
var fails = require('../internals/fails');
var uncurryThis = require('../internals/function-uncurry-this');
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var ArrayIterators = require('../modules/es.array.iterator');
var wellKnownSymbol = require('../internals/well-known-symbol');
var ITERATOR = wellKnownSymbol('iterator');
var Uint8Array1 = global.Uint8Array;
var arrayValues = uncurryThis(ArrayIterators.values);
var arrayKeys = uncurryThis(ArrayIterators.keys);
var arrayEntries = uncurryThis(ArrayIterators.entries);
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var TypedArrayPrototype = Uint8Array1 && Uint8Array1.prototype;
var GENERIC = !fails(function() {
    TypedArrayPrototype[ITERATOR].call([
        1
    ]);
});
var ITERATOR_IS_VALUES = !!TypedArrayPrototype && TypedArrayPrototype.values && TypedArrayPrototype[ITERATOR] === TypedArrayPrototype.values && TypedArrayPrototype.values.name === 'values';
var typedArrayValues = function values() {
    return arrayValues(aTypedArray(this));
};
// `%TypedArray%.prototype.entries` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
exportTypedArrayMethod('entries', function entries() {
    return arrayEntries(aTypedArray(this));
}, GENERIC);
// `%TypedArray%.prototype.keys` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
exportTypedArrayMethod('keys', function keys() {
    return arrayKeys(aTypedArray(this));
}, GENERIC);
// `%TypedArray%.prototype.values` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
exportTypedArrayMethod('values', typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, {
    name: 'values'
});
// `%TypedArray%.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
exportTypedArrayMethod(ITERATOR, typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, {
    name: 'values'
});

},{"../internals/global":"a4GR8","../internals/fails":"byxLb","../internals/function-uncurry-this":"gBsQL","../internals/array-buffer-view-core":"zd7ve","../modules/es.array.iterator":"8YPvt","../internals/well-known-symbol":"6sZ59"}],"30Fjw":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var uncurryThis = require('../internals/function-uncurry-this');
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $join = uncurryThis([].join);
// `%TypedArray%.prototype.join` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
exportTypedArrayMethod('join', function join(separator) {
    return $join(aTypedArray(this), separator);
});

},{"../internals/array-buffer-view-core":"zd7ve","../internals/function-uncurry-this":"gBsQL"}],"fUt12":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var apply = require('../internals/function-apply');
var $lastIndexOf = require('../internals/array-last-index-of');
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
exportTypedArrayMethod('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */ ) {
    var length = arguments.length;
    return apply($lastIndexOf, aTypedArray(this), length > 1 ? [
        searchElement,
        arguments[1]
    ] : [
        searchElement
    ]);
});

},{"../internals/array-buffer-view-core":"zd7ve","../internals/function-apply":"hikDN","../internals/array-last-index-of":"3G0we"}],"abKo8":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $map = require('../internals/array-iteration').map;
var typedArraySpeciesConstructor = require('../internals/typed-array-species-constructor');
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.map` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
exportTypedArrayMethod('map', function map(mapfn /* , thisArg */ ) {
    return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function(O, length) {
        return new (typedArraySpeciesConstructor(O))(length);
    });
});

},{"../internals/array-buffer-view-core":"zd7ve","../internals/array-iteration":"ciNJ0","../internals/typed-array-species-constructor":"9xT79"}],"aASoo":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = require('../internals/typed-array-constructors-require-wrappers');
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayStaticMethod = ArrayBufferViewCore.exportTypedArrayStaticMethod;
// `%TypedArray%.of` method
// https://tc39.es/ecma262/#sec-%typedarray%.of
exportTypedArrayStaticMethod('of', function of() {
    var index = 0;
    var length = arguments.length;
    var result = new (aTypedArrayConstructor(this))(length);
    while(length > index)result[index] = arguments[index++];
    return result;
}, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS);

},{"../internals/array-buffer-view-core":"zd7ve","../internals/typed-array-constructors-require-wrappers":"ke2up"}],"cw3bd":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $reduce = require('../internals/array-reduce').left;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.reduce` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
exportTypedArrayMethod('reduce', function reduce(callbackfn /* , initialValue */ ) {
    var length = arguments.length;
    return $reduce(aTypedArray(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
});

},{"../internals/array-buffer-view-core":"zd7ve","../internals/array-reduce":"8zC1E"}],"fIIbY":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $reduceRight = require('../internals/array-reduce').right;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
exportTypedArrayMethod('reduceRight', function reduceRight(callbackfn /* , initialValue */ ) {
    var length = arguments.length;
    return $reduceRight(aTypedArray(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
});

},{"../internals/array-buffer-view-core":"zd7ve","../internals/array-reduce":"8zC1E"}],"aYS8V":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var floor = Math.floor;
// `%TypedArray%.prototype.reverse` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
exportTypedArrayMethod('reverse', function reverse() {
    var that = this;
    var length = aTypedArray(that).length;
    var middle = floor(length / 2);
    var index = 0;
    var value;
    while(index < middle){
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
    }
    return that;
});

},{"../internals/array-buffer-view-core":"zd7ve"}],"4UlXb":[function(require,module,exports) {
'use strict';
var global = require('../internals/global');
var call = require('../internals/function-call');
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var toOffset = require('../internals/to-offset');
var toIndexedObject = require('../internals/to-object');
var fails = require('../internals/fails');
var RangeError1 = global.RangeError;
var Int8Array1 = global.Int8Array;
var Int8ArrayPrototype = Int8Array1 && Int8Array1.prototype;
var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS = !fails(function() {
    // eslint-disable-next-line es/no-typed-arrays -- required for testing
    var array = new Uint8ClampedArray(2);
    call($set, array, {
        length: 1,
        0: 3
    }, 1);
    return array[1] !== 3;
});
// https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other
var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS && fails(function() {
    var array = new Int8Array1(2);
    array.set(1);
    array.set('2', 1);
    return array[0] !== 0 || array[1] !== 2;
});
// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
exportTypedArrayMethod('set', function set(arrayLike /* , offset */ ) {
    aTypedArray(this);
    var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
    var src = toIndexedObject(arrayLike);
    if (WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS) return call($set, this, src, offset);
    var length = this.length;
    var len = lengthOfArrayLike(src);
    var index = 0;
    if (len + offset > length) throw RangeError1('Wrong length');
    while(index < len)this[offset + index] = src[index++];
}, !WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);

},{"../internals/global":"a4GR8","../internals/function-call":"d0MId","../internals/array-buffer-view-core":"zd7ve","../internals/length-of-array-like":"feyBo","../internals/to-offset":"1WjsL","../internals/to-object":"ghTKi","../internals/fails":"byxLb"}],"fmByv":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var typedArraySpeciesConstructor = require('../internals/typed-array-species-constructor');
var fails = require('../internals/fails');
var arraySlice = require('../internals/array-slice');
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var FORCED = fails(function() {
    // eslint-disable-next-line es/no-typed-arrays -- required for testing
    new Int8Array(1).slice();
});
// `%TypedArray%.prototype.slice` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
exportTypedArrayMethod('slice', function slice(start, end) {
    var list = arraySlice(aTypedArray(this), start, end);
    var C = typedArraySpeciesConstructor(this);
    var index = 0;
    var length = list.length;
    var result = new C(length);
    while(length > index)result[index] = list[index++];
    return result;
}, FORCED);

},{"../internals/array-buffer-view-core":"zd7ve","../internals/typed-array-species-constructor":"9xT79","../internals/fails":"byxLb","../internals/array-slice":"g46xA"}],"adzA5":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var $some = require('../internals/array-iteration').some;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.some` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
exportTypedArrayMethod('some', function some(callbackfn /* , thisArg */ ) {
    return $some(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});

},{"../internals/array-buffer-view-core":"zd7ve","../internals/array-iteration":"ciNJ0"}],"7J6wI":[function(require,module,exports) {
'use strict';
var global = require('../internals/global');
var uncurryThis = require('../internals/function-uncurry-this-clause');
var fails = require('../internals/fails');
var aCallable = require('../internals/a-callable');
var internalSort = require('../internals/array-sort');
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var FF = require('../internals/engine-ff-version');
var IE_OR_EDGE = require('../internals/engine-is-ie-or-edge');
var V8 = require('../internals/engine-v8-version');
var WEBKIT = require('../internals/engine-webkit-version');
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var Uint16Array1 = global.Uint16Array;
var nativeSort = Uint16Array1 && uncurryThis(Uint16Array1.prototype.sort);
// WebKit
var ACCEPT_INCORRECT_ARGUMENTS = !!nativeSort && !(fails(function() {
    nativeSort(new Uint16Array1(2), null);
}) && fails(function() {
    nativeSort(new Uint16Array1(2), {
    });
}));
var STABLE_SORT = !!nativeSort && !fails(function() {
    // feature detection can be too slow, so check engines versions
    if (V8) return V8 < 74;
    if (FF) return FF < 67;
    if (IE_OR_EDGE) return true;
    if (WEBKIT) return WEBKIT < 602;
    var array = new Uint16Array1(516);
    var expected = Array(516);
    var index, mod;
    for(index = 0; index < 516; index++){
        mod = index % 4;
        array[index] = 515 - index;
        expected[index] = index - 2 * mod + 3;
    }
    nativeSort(array, function(a, b) {
        return (a / 4 | 0) - (b / 4 | 0);
    });
    for(index = 0; index < 516; index++){
        if (array[index] !== expected[index]) return true;
    }
});
var getSortCompare = function(comparefn) {
    return function(x, y) {
        if (comparefn !== undefined) return +comparefn(x, y) || 0;
        // eslint-disable-next-line no-self-compare -- NaN check
        if (y !== y) return -1;
        // eslint-disable-next-line no-self-compare -- NaN check
        if (x !== x) return 1;
        if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
        return x > y;
    };
};
// `%TypedArray%.prototype.sort` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
exportTypedArrayMethod('sort', function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);
    if (STABLE_SORT) return nativeSort(this, comparefn);
    return internalSort(aTypedArray(this), getSortCompare(comparefn));
}, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);

},{"../internals/global":"a4GR8","../internals/function-uncurry-this-clause":"7Ho5A","../internals/fails":"byxLb","../internals/a-callable":"jnvBr","../internals/array-sort":"aFml7","../internals/array-buffer-view-core":"zd7ve","../internals/engine-ff-version":"ftzYY","../internals/engine-is-ie-or-edge":"5GiwV","../internals/engine-v8-version":"8Ofbb","../internals/engine-webkit-version":"6Jcx4"}],"ghLDl":[function(require,module,exports) {
'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var toLength = require('../internals/to-length');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var typedArraySpeciesConstructor = require('../internals/typed-array-species-constructor');
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
// `%TypedArray%.prototype.subarray` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray
exportTypedArrayMethod('subarray', function subarray(begin, end) {
    var O = aTypedArray(this);
    var length = O.length;
    var beginIndex = toAbsoluteIndex(begin, length);
    var C = typedArraySpeciesConstructor(O);
    return new C(O.buffer, O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex));
});

},{"../internals/array-buffer-view-core":"zd7ve","../internals/to-length":"coWuj","../internals/to-absolute-index":"bWCPe","../internals/typed-array-species-constructor":"9xT79"}],"kaAyh":[function(require,module,exports) {
'use strict';
var global = require('../internals/global');
var apply = require('../internals/function-apply');
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var fails = require('../internals/fails');
var arraySlice = require('../internals/array-slice');
var Int8Array1 = global.Int8Array;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $toLocaleString = [].toLocaleString;
// iOS Safari 6.x fails here
var TO_LOCALE_STRING_BUG = !!Int8Array1 && fails(function() {
    $toLocaleString.call(new Int8Array1(1));
});
var FORCED = fails(function() {
    return [
        1,
        2
    ].toLocaleString() != new Int8Array1([
        1,
        2
    ]).toLocaleString();
}) || !fails(function() {
    Int8Array1.prototype.toLocaleString.call([
        1,
        2
    ]);
});
// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
exportTypedArrayMethod('toLocaleString', function toLocaleString() {
    return apply($toLocaleString, TO_LOCALE_STRING_BUG ? arraySlice(aTypedArray(this)) : aTypedArray(this), arraySlice(arguments));
}, FORCED);

},{"../internals/global":"a4GR8","../internals/function-apply":"hikDN","../internals/array-buffer-view-core":"zd7ve","../internals/fails":"byxLb","../internals/array-slice":"g46xA"}],"4lkfC":[function(require,module,exports) {
'use strict';
var exportTypedArrayMethod = require('../internals/array-buffer-view-core').exportTypedArrayMethod;
var fails = require('../internals/fails');
var global = require('../internals/global');
var uncurryThis = require('../internals/function-uncurry-this');
var Uint8Array1 = global.Uint8Array;
var Uint8ArrayPrototype = Uint8Array1 && Uint8Array1.prototype || {
};
var arrayToString = [].toString;
var join = uncurryThis([].join);
if (fails(function() {
    arrayToString.call({
    });
})) arrayToString = function toString() {
    return join(this);
};
var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;
// `%TypedArray%.prototype.toString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);

},{"../internals/array-buffer-view-core":"zd7ve","../internals/fails":"byxLb","../internals/global":"a4GR8","../internals/function-uncurry-this":"gBsQL"}],"gnnik":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');
var toString = require('../internals/to-string');
var fromCharCode = String.fromCharCode;
var charAt = uncurryThis(''.charAt);
var exec = uncurryThis(/./.exec);
var stringSlice = uncurryThis(''.slice);
var hex2 = /^[\da-f]{2}$/i;
var hex4 = /^[\da-f]{4}$/i;
// `unescape` method
// https://tc39.es/ecma262/#sec-unescape-string
$({
    global: true
}, {
    unescape: function unescape(string) {
        var str = toString(string);
        var result = '';
        var length = str.length;
        var index = 0;
        var chr, part;
        while(index < length){
            chr = charAt(str, index++);
            if (chr === '%') {
                if (charAt(str, index) === 'u') {
                    part = stringSlice(str, index + 1, index + 5);
                    if (exec(hex4, part)) {
                        result += fromCharCode(parseInt(part, 16));
                        index += 5;
                        continue;
                    }
                } else {
                    part = stringSlice(str, index, index + 2);
                    if (exec(hex2, part)) {
                        result += fromCharCode(parseInt(part, 16));
                        index += 2;
                        continue;
                    }
                }
            }
            result += chr;
        }
        return result;
    }
});

},{"../internals/export":"2mZbc","../internals/function-uncurry-this":"gBsQL","../internals/to-string":"k0ZQF"}],"7VYon":[function(require,module,exports) {
// TODO: Remove this module from `core-js@4` since it's replaced to module below
require('../modules/es.weak-map.constructor');

},{"../modules/es.weak-map.constructor":"3uxyx"}],"3uxyx":[function(require,module,exports) {
'use strict';
var FREEZING = require('../internals/freezing');
var global = require('../internals/global');
var uncurryThis = require('../internals/function-uncurry-this');
var defineBuiltIns = require('../internals/define-built-ins');
var InternalMetadataModule = require('../internals/internal-metadata');
var collection = require('../internals/collection');
var collectionWeak = require('../internals/collection-weak');
var isObject = require('../internals/is-object');
var enforceInternalState = require('../internals/internal-state').enforce;
var fails = require('../internals/fails');
var NATIVE_WEAK_MAP = require('../internals/weak-map-basic-detection');
var $Object = Object;
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray = Array.isArray;
// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = $Object.isExtensible;
// eslint-disable-next-line es/no-object-isfrozen -- safe
var isFrozen = $Object.isFrozen;
// eslint-disable-next-line es/no-object-issealed -- safe
var isSealed = $Object.isSealed;
// eslint-disable-next-line es/no-object-freeze -- safe
var freeze = $Object.freeze;
// eslint-disable-next-line es/no-object-seal -- safe
var seal = $Object.seal;
var FROZEN = {
};
var SEALED = {
};
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var InternalWeakMap;
var wrapper = function(init) {
    return function WeakMap1() {
        return init(this, arguments.length ? arguments[0] : undefined);
    };
};
// `WeakMap` constructor
// https://tc39.es/ecma262/#sec-weakmap-constructor
var $WeakMap = collection('WeakMap', wrapper, collectionWeak);
var WeakMapPrototype = $WeakMap.prototype;
var nativeSet = uncurryThis(WeakMapPrototype.set);
// Chakra Edge bug: adding frozen arrays to WeakMap unfreeze them
var hasMSEdgeFreezingBug = function() {
    return FREEZING && fails(function() {
        var frozenArray = freeze([]);
        nativeSet(new $WeakMap(), frozenArray, 1);
        return !isFrozen(frozenArray);
    });
};
// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (NATIVE_WEAK_MAP) {
    if (IS_IE11) {
        InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
        InternalMetadataModule.enable();
        var nativeDelete = uncurryThis(WeakMapPrototype['delete']);
        var nativeHas = uncurryThis(WeakMapPrototype.has);
        var nativeGet = uncurryThis(WeakMapPrototype.get);
        defineBuiltIns(WeakMapPrototype, {
            'delete': function(key) {
                if (isObject(key) && !isExtensible(key)) {
                    var state = enforceInternalState(this);
                    if (!state.frozen) state.frozen = new InternalWeakMap();
                    return nativeDelete(this, key) || state.frozen['delete'](key);
                }
                return nativeDelete(this, key);
            },
            has: function has(key) {
                if (isObject(key) && !isExtensible(key)) {
                    var state = enforceInternalState(this);
                    if (!state.frozen) state.frozen = new InternalWeakMap();
                    return nativeHas(this, key) || state.frozen.has(key);
                }
                return nativeHas(this, key);
            },
            get: function get(key) {
                if (isObject(key) && !isExtensible(key)) {
                    var state = enforceInternalState(this);
                    if (!state.frozen) state.frozen = new InternalWeakMap();
                    return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
                }
                return nativeGet(this, key);
            },
            set: function set(key, value) {
                if (isObject(key) && !isExtensible(key)) {
                    var state = enforceInternalState(this);
                    if (!state.frozen) state.frozen = new InternalWeakMap();
                    nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
                } else nativeSet(this, key, value);
                return this;
            }
        });
    // Chakra Edge frozen keys fix
    } else if (hasMSEdgeFreezingBug()) defineBuiltIns(WeakMapPrototype, {
        set: function set(key, value) {
            var arrayIntegrityLevel;
            if (isArray(key)) {
                if (isFrozen(key)) arrayIntegrityLevel = FROZEN;
                else if (isSealed(key)) arrayIntegrityLevel = SEALED;
            }
            nativeSet(this, key, value);
            if (arrayIntegrityLevel == FROZEN) freeze(key);
            if (arrayIntegrityLevel == SEALED) seal(key);
            return this;
        }
    });
}

},{"../internals/freezing":"8zb2E","../internals/global":"a4GR8","../internals/function-uncurry-this":"gBsQL","../internals/define-built-ins":"eEmje","../internals/internal-metadata":"5OjLO","../internals/collection":"8qCpd","../internals/collection-weak":"h7PPS","../internals/is-object":"d60Kc","../internals/internal-state":"ceuiK","../internals/fails":"byxLb","../internals/weak-map-basic-detection":"bm6n8"}],"h7PPS":[function(require,module,exports) {
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var defineBuiltIns = require('../internals/define-built-ins');
var getWeakData = require('../internals/internal-metadata').getWeakData;
var anInstance = require('../internals/an-instance');
var anObject = require('../internals/an-object');
var isNullOrUndefined = require('../internals/is-null-or-undefined');
var isObject = require('../internals/is-object');
var iterate = require('../internals/iterate');
var ArrayIterationModule = require('../internals/array-iteration');
var hasOwn = require('../internals/has-own-property');
var InternalStateModule = require('../internals/internal-state');
var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var splice = uncurryThis([].splice);
var id = 0;
// fallback for uncaught frozen keys
var uncaughtFrozenStore = function(state) {
    return state.frozen || (state.frozen = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function() {
    this.entries = [];
};
var findUncaughtFrozen = function(store, key) {
    return find(store.entries, function(it) {
        return it[0] === key;
    });
};
UncaughtFrozenStore.prototype = {
    get: function(key) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) return entry[1];
    },
    has: function(key) {
        return !!findUncaughtFrozen(this, key);
    },
    set: function(key, value) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) entry[1] = value;
        else this.entries.push([
            key,
            value
        ]);
    },
    'delete': function(key) {
        var index = findIndex(this.entries, function(it) {
            return it[0] === key;
        });
        if (~index) splice(this.entries, index, 1);
        return !!~index;
    }
};
module.exports = {
    getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
        var Constructor = wrapper(function(that, iterable) {
            anInstance(that, Prototype);
            setInternalState(that, {
                type: CONSTRUCTOR_NAME,
                id: id++,
                frozen: undefined
            });
            if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], {
                that: that,
                AS_ENTRIES: IS_MAP
            });
        });
        var Prototype = Constructor.prototype;
        var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
        var define = function(that, key, value) {
            var state = getInternalState(that);
            var data = getWeakData(anObject(key), true);
            if (data === true) uncaughtFrozenStore(state).set(key, value);
            else data[state.id] = value;
            return that;
        };
        defineBuiltIns(Prototype, {
            // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
            // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
            // https://tc39.es/ecma262/#sec-weakset.prototype.delete
            'delete': function(key) {
                var state = getInternalState(this);
                if (!isObject(key)) return false;
                var data = getWeakData(key);
                if (data === true) return uncaughtFrozenStore(state)['delete'](key);
                return data && hasOwn(data, state.id) && delete data[state.id];
            },
            // `{ WeakMap, WeakSet }.prototype.has(key)` methods
            // https://tc39.es/ecma262/#sec-weakmap.prototype.has
            // https://tc39.es/ecma262/#sec-weakset.prototype.has
            has: function has(key) {
                var state = getInternalState(this);
                if (!isObject(key)) return false;
                var data = getWeakData(key);
                if (data === true) return uncaughtFrozenStore(state).has(key);
                return data && hasOwn(data, state.id);
            }
        });
        defineBuiltIns(Prototype, IS_MAP ? {
            // `WeakMap.prototype.get(key)` method
            // https://tc39.es/ecma262/#sec-weakmap.prototype.get
            get: function get(key) {
                var state = getInternalState(this);
                if (isObject(key)) {
                    var data = getWeakData(key);
                    if (data === true) return uncaughtFrozenStore(state).get(key);
                    return data ? data[state.id] : undefined;
                }
            },
            // `WeakMap.prototype.set(key, value)` method
            // https://tc39.es/ecma262/#sec-weakmap.prototype.set
            set: function set(key, value) {
                return define(this, key, value);
            }
        } : {
            // `WeakSet.prototype.add(value)` method
            // https://tc39.es/ecma262/#sec-weakset.prototype.add
            add: function add(value) {
                return define(this, value, true);
            }
        });
        return Constructor;
    }
};

},{"../internals/function-uncurry-this":"gBsQL","../internals/define-built-ins":"eEmje","../internals/internal-metadata":"5OjLO","../internals/an-instance":"gTr5k","../internals/an-object":"9unxM","../internals/is-null-or-undefined":"kssQ6","../internals/is-object":"d60Kc","../internals/iterate":"a4R19","../internals/array-iteration":"ciNJ0","../internals/has-own-property":"kL9Yw","../internals/internal-state":"ceuiK"}],"kMVCu":[function(require,module,exports) {
// TODO: Remove this module from `core-js@4` since it's replaced to module below
require('../modules/es.weak-set.constructor');

},{"../modules/es.weak-set.constructor":"b0Spz"}],"b0Spz":[function(require,module,exports) {
'use strict';
var collection = require('../internals/collection');
var collectionWeak = require('../internals/collection-weak');
// `WeakSet` constructor
// https://tc39.es/ecma262/#sec-weakset-constructor
collection('WeakSet', function(init) {
    return function WeakSet1() {
        return init(this, arguments.length ? arguments[0] : undefined);
    };
}, collectionWeak);

},{"../internals/collection":"8qCpd","../internals/collection-weak":"h7PPS"}],"80OaX":[function(require,module,exports) {
var $ = require('../internals/export');
var global = require('../internals/global');
var getBuiltIn = require('../internals/get-built-in');
var uncurryThis = require('../internals/function-uncurry-this');
var call = require('../internals/function-call');
var fails = require('../internals/fails');
var toString = require('../internals/to-string');
var hasOwn = require('../internals/has-own-property');
var validateArgumentsLength = require('../internals/validate-arguments-length');
var ctoi = require('../internals/base64-map').ctoi;
var disallowed = /[^\d+/a-z]/i;
var whitespaces = /[\t\n\f\r ]+/g;
var finalEq = /[=]+$/;
var $atob = getBuiltIn('atob');
var fromCharCode = String.fromCharCode;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var exec = uncurryThis(disallowed.exec);
var NO_SPACES_IGNORE = fails(function() {
    return $atob(' ') !== '';
});
var NO_ENCODING_CHECK = !fails(function() {
    $atob('a');
});
var NO_ARG_RECEIVING_CHECK = !NO_SPACES_IGNORE && !NO_ENCODING_CHECK && !fails(function() {
    $atob();
});
var WRONG_ARITY = !NO_SPACES_IGNORE && !NO_ENCODING_CHECK && $atob.length !== 1;
// `atob` method
// https://html.spec.whatwg.org/multipage/webappapis.html#dom-atob
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: NO_SPACES_IGNORE || NO_ENCODING_CHECK || NO_ARG_RECEIVING_CHECK || WRONG_ARITY
}, {
    atob: function atob(data) {
        validateArgumentsLength(arguments.length, 1);
        // `webpack` dev server bug on IE global methods - use call(fn, global, ...)
        if (NO_ARG_RECEIVING_CHECK || WRONG_ARITY) return call($atob, global, data);
        var string = replace(toString(data), whitespaces, '');
        var output = '';
        var position = 0;
        var bc = 0;
        var chr, bs;
        if (string.length % 4 == 0) string = replace(string, finalEq, '');
        if (string.length % 4 == 1 || exec(disallowed, string)) throw new (getBuiltIn('DOMException'))('The string is not correctly encoded', 'InvalidCharacterError');
        while(chr = charAt(string, position++))if (hasOwn(ctoi, chr)) {
            bs = bc % 4 ? bs * 64 + ctoi[chr] : ctoi[chr];
            if ((bc++) % 4) output += fromCharCode(255 & bs >> (-2 * bc & 6));
        }
        return output;
    }
});

},{"../internals/export":"2mZbc","../internals/global":"a4GR8","../internals/get-built-in":"hqegu","../internals/function-uncurry-this":"gBsQL","../internals/function-call":"d0MId","../internals/fails":"byxLb","../internals/to-string":"k0ZQF","../internals/has-own-property":"kL9Yw","../internals/validate-arguments-length":"6C3kL","../internals/base64-map":"PKgjX"}],"PKgjX":[function(require,module,exports) {
var itoc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var ctoi = {
};
for(var index = 0; index < 66; index++)ctoi[itoc.charAt(index)] = index;
module.exports = {
    itoc: itoc,
    ctoi: ctoi
};

},{}],"9fZsv":[function(require,module,exports) {
var $ = require('../internals/export');
var global = require('../internals/global');
var getBuiltIn = require('../internals/get-built-in');
var uncurryThis = require('../internals/function-uncurry-this');
var call = require('../internals/function-call');
var fails = require('../internals/fails');
var toString = require('../internals/to-string');
var validateArgumentsLength = require('../internals/validate-arguments-length');
var itoc = require('../internals/base64-map').itoc;
var $btoa = getBuiltIn('btoa');
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var NO_ARG_RECEIVING_CHECK = !!$btoa && !fails(function() {
    $btoa();
});
var WRONG_ARG_CONVERSION = !!$btoa && fails(function() {
    return $btoa(null) !== 'bnVsbA==';
});
var WRONG_ARITY = !!$btoa && $btoa.length !== 1;
// `btoa` method
// https://html.spec.whatwg.org/multipage/webappapis.html#dom-btoa
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: NO_ARG_RECEIVING_CHECK || WRONG_ARG_CONVERSION || WRONG_ARITY
}, {
    btoa: function btoa(data) {
        validateArgumentsLength(arguments.length, 1);
        // `webpack` dev server bug on IE global methods - use call(fn, global, ...)
        if (NO_ARG_RECEIVING_CHECK || WRONG_ARG_CONVERSION || WRONG_ARITY) return call($btoa, global, toString(data));
        var string = toString(data);
        var output = '';
        var position = 0;
        var map = itoc;
        var block, charCode;
        while(charAt(string, position) || (map = '=', position % 1)){
            charCode = charCodeAt(string, position += 0.75);
            if (charCode > 255) throw new (getBuiltIn('DOMException'))('The string contains characters outside of the Latin1 range', 'InvalidCharacterError');
            block = block << 8 | charCode;
            output += charAt(map, 63 & block >> 8 - position % 1 * 8);
        }
        return output;
    }
});

},{"../internals/export":"2mZbc","../internals/global":"a4GR8","../internals/get-built-in":"hqegu","../internals/function-uncurry-this":"gBsQL","../internals/function-call":"d0MId","../internals/fails":"byxLb","../internals/to-string":"k0ZQF","../internals/validate-arguments-length":"6C3kL","../internals/base64-map":"PKgjX"}],"917na":[function(require,module,exports) {
var global = require('../internals/global');
var DOMIterables = require('../internals/dom-iterables');
var DOMTokenListPrototype = require('../internals/dom-token-list-prototype');
var forEach = require('../internals/array-for-each');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var handlePrototype = function(CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
        createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
    } catch (error) {
        CollectionPrototype.forEach = forEach;
    }
};
for(var COLLECTION_NAME in DOMIterables)if (DOMIterables[COLLECTION_NAME]) handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
handlePrototype(DOMTokenListPrototype);

},{"../internals/global":"a4GR8","../internals/dom-iterables":"2Umkc","../internals/dom-token-list-prototype":"gLY6L","../internals/array-for-each":"dwspA","../internals/create-non-enumerable-property":"73EkF"}],"2Umkc":[function(require,module,exports) {
// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
};

},{}],"gLY6L":[function(require,module,exports) {
// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = require('../internals/document-create-element');
var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;
module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;

},{"../internals/document-create-element":"2WwO0"}],"gC8gE":[function(require,module,exports) {
var global = require('../internals/global');
var DOMIterables = require('../internals/dom-iterables');
var DOMTokenListPrototype = require('../internals/dom-token-list-prototype');
var ArrayIteratorMethods = require('../modules/es.array.iterator');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var wellKnownSymbol = require('../internals/well-known-symbol');
var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;
var handlePrototype = function(CollectionPrototype, COLLECTION_NAME) {
    if (CollectionPrototype) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
            createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
        } catch (error) {
            CollectionPrototype[ITERATOR] = ArrayValues;
        }
        if (!CollectionPrototype[TO_STRING_TAG]) createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
        if (DOMIterables[COLLECTION_NAME]) for(var METHOD_NAME in ArrayIteratorMethods){
            // some Chrome versions have non-configurable methods on DOMTokenList
            if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
                createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
            } catch (error) {
                CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
            }
        }
    }
};
for(var COLLECTION_NAME in DOMIterables)handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

},{"../internals/global":"a4GR8","../internals/dom-iterables":"2Umkc","../internals/dom-token-list-prototype":"gLY6L","../modules/es.array.iterator":"8YPvt","../internals/create-non-enumerable-property":"73EkF","../internals/well-known-symbol":"6sZ59"}],"igNny":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var tryNodeRequire = require('../internals/try-node-require');
var getBuiltIn = require('../internals/get-built-in');
var fails = require('../internals/fails');
var create = require('../internals/object-create');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var defineProperty = require('../internals/object-define-property').f;
var defineBuiltIn = require('../internals/define-built-in');
var defineBuiltInAccessor = require('../internals/define-built-in-accessor');
var hasOwn = require('../internals/has-own-property');
var anInstance = require('../internals/an-instance');
var anObject = require('../internals/an-object');
var errorToString = require('../internals/error-to-string');
var normalizeStringArgument = require('../internals/normalize-string-argument');
var DOMExceptionConstants = require('../internals/dom-exception-constants');
var clearErrorStack = require('../internals/error-stack-clear');
var InternalStateModule = require('../internals/internal-state');
var DESCRIPTORS = require('../internals/descriptors');
var IS_PURE = require('../internals/is-pure');
var DOM_EXCEPTION = 'DOMException';
var DATA_CLONE_ERR = 'DATA_CLONE_ERR';
var Error1 = getBuiltIn('Error');
// NodeJS < 17.0 does not expose `DOMException` to global
var NativeDOMException = getBuiltIn(DOM_EXCEPTION) || function() {
    try {
        // NodeJS < 15.0 does not expose `MessageChannel` to global
        var MessageChannel1 = getBuiltIn('MessageChannel') || tryNodeRequire('worker_threads').MessageChannel;
        // eslint-disable-next-line es/no-weak-map, unicorn/require-post-message-target-origin -- safe
        new MessageChannel1().port1.postMessage(new WeakMap());
    } catch (error) {
        if (error.name == DATA_CLONE_ERR && error.code == 25) return error.constructor;
    }
}();
var NativeDOMExceptionPrototype = NativeDOMException && NativeDOMException.prototype;
var ErrorPrototype = Error1.prototype;
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(DOM_EXCEPTION);
var HAS_STACK = 'stack' in Error1(DOM_EXCEPTION);
var codeFor = function(name) {
    return hasOwn(DOMExceptionConstants, name) && DOMExceptionConstants[name].m ? DOMExceptionConstants[name].c : 0;
};
var $DOMException = function DOMException1() {
    anInstance(this, DOMExceptionPrototype);
    var argumentsLength = arguments.length;
    var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
    var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
    var code = codeFor(name);
    setInternalState(this, {
        type: DOM_EXCEPTION,
        name: name,
        message: message,
        code: code
    });
    if (!DESCRIPTORS) {
        this.name = name;
        this.message = message;
        this.code = code;
    }
    if (HAS_STACK) {
        var error = Error1(message);
        error.name = DOM_EXCEPTION;
        defineProperty(this, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
    }
};
var DOMExceptionPrototype = $DOMException.prototype = create(ErrorPrototype);
var createGetterDescriptor = function(get) {
    return {
        enumerable: true,
        configurable: true,
        get: get
    };
};
var getterFor = function(key) {
    return createGetterDescriptor(function() {
        return getInternalState(this)[key];
    });
};
if (DESCRIPTORS) {
    // `DOMException.prototype.code` getter
    defineBuiltInAccessor(DOMExceptionPrototype, 'code', getterFor('code'));
    // `DOMException.prototype.message` getter
    defineBuiltInAccessor(DOMExceptionPrototype, 'message', getterFor('message'));
    // `DOMException.prototype.name` getter
    defineBuiltInAccessor(DOMExceptionPrototype, 'name', getterFor('name'));
}
defineProperty(DOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, $DOMException));
// FF36- DOMException is a function, but can't be constructed
var INCORRECT_CONSTRUCTOR = fails(function() {
    return !(new NativeDOMException() instanceof Error1);
});
// Safari 10.1 / Chrome 32- / IE8- DOMException.prototype.toString bugs
var INCORRECT_TO_STRING = INCORRECT_CONSTRUCTOR || fails(function() {
    return ErrorPrototype.toString !== errorToString || String(new NativeDOMException(1, 2)) !== '2: 1';
});
// Deno 1.6.3- DOMException.prototype.code just missed
var INCORRECT_CODE = INCORRECT_CONSTRUCTOR || fails(function() {
    return new NativeDOMException(1, 'DataCloneError').code !== 25;
});
// Deno 1.6.3- DOMException constants just missed
var MISSED_CONSTANTS = INCORRECT_CONSTRUCTOR || NativeDOMException[DATA_CLONE_ERR] !== 25 || NativeDOMExceptionPrototype[DATA_CLONE_ERR] !== 25;
var FORCED_CONSTRUCTOR = IS_PURE ? INCORRECT_TO_STRING || INCORRECT_CODE || MISSED_CONSTANTS : INCORRECT_CONSTRUCTOR;
// `DOMException` constructor
// https://webidl.spec.whatwg.org/#idl-DOMException
$({
    global: true,
    constructor: true,
    forced: FORCED_CONSTRUCTOR
}, {
    DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
});
var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;
if (INCORRECT_TO_STRING && (IS_PURE || NativeDOMException === PolyfilledDOMException)) defineBuiltIn(PolyfilledDOMExceptionPrototype, 'toString', errorToString);
if (INCORRECT_CODE && DESCRIPTORS && NativeDOMException === PolyfilledDOMException) defineBuiltInAccessor(PolyfilledDOMExceptionPrototype, 'code', createGetterDescriptor(function() {
    return codeFor(anObject(this).name);
}));
// `DOMException` constants
for(var key in DOMExceptionConstants)if (hasOwn(DOMExceptionConstants, key)) {
    var constant = DOMExceptionConstants[key];
    var constantName = constant.s;
    var descriptor = createPropertyDescriptor(6, constant.c);
    if (!hasOwn(PolyfilledDOMException, constantName)) defineProperty(PolyfilledDOMException, constantName, descriptor);
    if (!hasOwn(PolyfilledDOMExceptionPrototype, constantName)) defineProperty(PolyfilledDOMExceptionPrototype, constantName, descriptor);
}

},{"../internals/export":"2mZbc","../internals/try-node-require":"l4bum","../internals/get-built-in":"hqegu","../internals/fails":"byxLb","../internals/object-create":"eYZeq","../internals/create-property-descriptor":"5fdHA","../internals/object-define-property":"iKHmb","../internals/define-built-in":"dTyng","../internals/define-built-in-accessor":"jJJHp","../internals/has-own-property":"kL9Yw","../internals/an-instance":"gTr5k","../internals/an-object":"9unxM","../internals/error-to-string":"kybkH","../internals/normalize-string-argument":"kXsRX","../internals/dom-exception-constants":"6nkIC","../internals/error-stack-clear":"3owVH","../internals/internal-state":"ceuiK","../internals/descriptors":"kuDzl","../internals/is-pure":"dlbEd"}],"l4bum":[function(require,module,exports) {
var IS_NODE = require('../internals/engine-is-node');
module.exports = function(name) {
    try {
        // eslint-disable-next-line no-new-func -- safe
        if (IS_NODE) return Function('return require("' + name + '")')();
    } catch (error) {
    }
};

},{"../internals/engine-is-node":"gpWpt"}],"6nkIC":[function(require,module,exports) {
module.exports = {
    IndexSizeError: {
        s: 'INDEX_SIZE_ERR',
        c: 1,
        m: 1
    },
    DOMStringSizeError: {
        s: 'DOMSTRING_SIZE_ERR',
        c: 2,
        m: 0
    },
    HierarchyRequestError: {
        s: 'HIERARCHY_REQUEST_ERR',
        c: 3,
        m: 1
    },
    WrongDocumentError: {
        s: 'WRONG_DOCUMENT_ERR',
        c: 4,
        m: 1
    },
    InvalidCharacterError: {
        s: 'INVALID_CHARACTER_ERR',
        c: 5,
        m: 1
    },
    NoDataAllowedError: {
        s: 'NO_DATA_ALLOWED_ERR',
        c: 6,
        m: 0
    },
    NoModificationAllowedError: {
        s: 'NO_MODIFICATION_ALLOWED_ERR',
        c: 7,
        m: 1
    },
    NotFoundError: {
        s: 'NOT_FOUND_ERR',
        c: 8,
        m: 1
    },
    NotSupportedError: {
        s: 'NOT_SUPPORTED_ERR',
        c: 9,
        m: 1
    },
    InUseAttributeError: {
        s: 'INUSE_ATTRIBUTE_ERR',
        c: 10,
        m: 1
    },
    InvalidStateError: {
        s: 'INVALID_STATE_ERR',
        c: 11,
        m: 1
    },
    SyntaxError: {
        s: 'SYNTAX_ERR',
        c: 12,
        m: 1
    },
    InvalidModificationError: {
        s: 'INVALID_MODIFICATION_ERR',
        c: 13,
        m: 1
    },
    NamespaceError: {
        s: 'NAMESPACE_ERR',
        c: 14,
        m: 1
    },
    InvalidAccessError: {
        s: 'INVALID_ACCESS_ERR',
        c: 15,
        m: 1
    },
    ValidationError: {
        s: 'VALIDATION_ERR',
        c: 16,
        m: 0
    },
    TypeMismatchError: {
        s: 'TYPE_MISMATCH_ERR',
        c: 17,
        m: 1
    },
    SecurityError: {
        s: 'SECURITY_ERR',
        c: 18,
        m: 1
    },
    NetworkError: {
        s: 'NETWORK_ERR',
        c: 19,
        m: 1
    },
    AbortError: {
        s: 'ABORT_ERR',
        c: 20,
        m: 1
    },
    URLMismatchError: {
        s: 'URL_MISMATCH_ERR',
        c: 21,
        m: 1
    },
    QuotaExceededError: {
        s: 'QUOTA_EXCEEDED_ERR',
        c: 22,
        m: 1
    },
    TimeoutError: {
        s: 'TIMEOUT_ERR',
        c: 23,
        m: 1
    },
    InvalidNodeTypeError: {
        s: 'INVALID_NODE_TYPE_ERR',
        c: 24,
        m: 1
    },
    DataCloneError: {
        s: 'DATA_CLONE_ERR',
        c: 25,
        m: 1
    }
};

},{}],"g5teZ":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var global = require('../internals/global');
var getBuiltIn = require('../internals/get-built-in');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var defineProperty = require('../internals/object-define-property').f;
var hasOwn = require('../internals/has-own-property');
var anInstance = require('../internals/an-instance');
var inheritIfRequired = require('../internals/inherit-if-required');
var normalizeStringArgument = require('../internals/normalize-string-argument');
var DOMExceptionConstants = require('../internals/dom-exception-constants');
var clearErrorStack = require('../internals/error-stack-clear');
var DESCRIPTORS = require('../internals/descriptors');
var IS_PURE = require('../internals/is-pure');
var DOM_EXCEPTION = 'DOMException';
var Error1 = getBuiltIn('Error');
var NativeDOMException = getBuiltIn(DOM_EXCEPTION);
var $DOMException = function DOMException1() {
    anInstance(this, DOMExceptionPrototype);
    var argumentsLength = arguments.length;
    var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
    var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
    var that = new NativeDOMException(message, name);
    var error = Error1(message);
    error.name = DOM_EXCEPTION;
    defineProperty(that, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
    inheritIfRequired(that, this, $DOMException);
    return that;
};
var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;
var ERROR_HAS_STACK = 'stack' in Error1(DOM_EXCEPTION);
var DOM_EXCEPTION_HAS_STACK = 'stack' in new NativeDOMException(1, 2);
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(global, DOM_EXCEPTION);
// Bun ~ 0.1.1 DOMException have incorrect descriptor and we can't redefine it
// https://github.com/Jarred-Sumner/bun/issues/399
var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);
var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;
// `DOMException` constructor patch for `.stack` where it's required
// https://webidl.spec.whatwg.org/#es-DOMException-specialness
$({
    global: true,
    constructor: true,
    forced: IS_PURE || FORCED_CONSTRUCTOR
}, {
    DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
});
var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;
if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
    if (!IS_PURE) defineProperty(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, PolyfilledDOMException));
    for(var key in DOMExceptionConstants)if (hasOwn(DOMExceptionConstants, key)) {
        var constant = DOMExceptionConstants[key];
        var constantName = constant.s;
        if (!hasOwn(PolyfilledDOMException, constantName)) defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));
    }
}

},{"../internals/export":"2mZbc","../internals/global":"a4GR8","../internals/get-built-in":"hqegu","../internals/create-property-descriptor":"5fdHA","../internals/object-define-property":"iKHmb","../internals/has-own-property":"kL9Yw","../internals/an-instance":"gTr5k","../internals/inherit-if-required":"5Ef3J","../internals/normalize-string-argument":"kXsRX","../internals/dom-exception-constants":"6nkIC","../internals/error-stack-clear":"3owVH","../internals/descriptors":"kuDzl","../internals/is-pure":"dlbEd"}],"eAdtV":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');
var setToStringTag = require('../internals/set-to-string-tag');
var DOM_EXCEPTION = 'DOMException';
// `DOMException.prototype[@@toStringTag]` property
setToStringTag(getBuiltIn(DOM_EXCEPTION), DOM_EXCEPTION);

},{"../internals/get-built-in":"hqegu","../internals/set-to-string-tag":"cFbSt"}],"6VxKM":[function(require,module,exports) {
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require('../modules/web.clear-immediate');
require('../modules/web.set-immediate');

},{"../modules/web.clear-immediate":"f5O63","../modules/web.set-immediate":"gIWcj"}],"f5O63":[function(require,module,exports) {
var $ = require('../internals/export');
var global = require('../internals/global');
var clearImmediate = require('../internals/task').clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.clearImmediate !== clearImmediate
}, {
    clearImmediate: clearImmediate
});

},{"../internals/export":"2mZbc","../internals/global":"a4GR8","../internals/task":"iBmTD"}],"gIWcj":[function(require,module,exports) {
var $ = require('../internals/export');
var global = require('../internals/global');
var setTask = require('../internals/task').set;
var schedulersFix = require('../internals/schedulers-fix');
// https://github.com/oven-sh/bun/issues/1633
var setImmediate = global.setImmediate ? schedulersFix(setTask, false) : setTask;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.setImmediate !== setImmediate
}, {
    setImmediate: setImmediate
});

},{"../internals/export":"2mZbc","../internals/global":"a4GR8","../internals/task":"iBmTD","../internals/schedulers-fix":"66M3m"}],"66M3m":[function(require,module,exports) {
'use strict';
var global = require('../internals/global');
var apply = require('../internals/function-apply');
var isCallable = require('../internals/is-callable');
var ENGINE_IS_BUN = require('../internals/engine-is-bun');
var USER_AGENT = require('../internals/engine-user-agent');
var arraySlice = require('../internals/array-slice');
var validateArgumentsLength = require('../internals/validate-arguments-length');
var Function1 = global.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && function() {
    var version = global.Bun.version.split('.');
    return version.length < 3 || version[0] == 0 && (version[1] < 3 || version[1] == 3 && version[2] == 0);
}();
// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function(scheduler, hasTimeArg) {
    var firstParamIndex = hasTimeArg ? 2 : 1;
    return WRAP ? function(handler, timeout /* , ...arguments */ ) {
        var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
        var fn = isCallable(handler) ? handler : Function1(handler);
        var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
        var callback = boundArgs ? function() {
            apply(fn, this, params);
        } : fn;
        return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
    } : scheduler;
};

},{"../internals/global":"a4GR8","../internals/function-apply":"hikDN","../internals/is-callable":"41EnZ","../internals/engine-is-bun":"ls3OU","../internals/engine-user-agent":"ihes9","../internals/array-slice":"g46xA","../internals/validate-arguments-length":"6C3kL"}],"ls3OU":[function(require,module,exports) {
/* global Bun -- Deno case */ module.exports = typeof Bun == 'function' && Bun && typeof Bun.version == 'string';

},{}],"kIUUV":[function(require,module,exports) {
var $ = require('../internals/export');
var global = require('../internals/global');
var microtask = require('../internals/microtask');
var aCallable = require('../internals/a-callable');
var validateArgumentsLength = require('../internals/validate-arguments-length');
var IS_NODE = require('../internals/engine-is-node');
var process = global.process;
// `queueMicrotask` method
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask
$({
    global: true,
    enumerable: true,
    dontCallGetSet: true
}, {
    queueMicrotask: function queueMicrotask(fn) {
        validateArgumentsLength(arguments.length, 1);
        aCallable(fn);
        var domain = IS_NODE && process.domain;
        microtask(domain ? domain.bind(fn) : fn);
    }
});

},{"../internals/export":"2mZbc","../internals/global":"a4GR8","../internals/microtask":"8Si7u","../internals/a-callable":"jnvBr","../internals/validate-arguments-length":"6C3kL","../internals/engine-is-node":"gpWpt"}],"2XA4X":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var global = require('../internals/global');
var defineBuiltInAccessor = require('../internals/define-built-in-accessor');
var DESCRIPTORS = require('../internals/descriptors');
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var INCORRECT_VALUE = global.self !== global;
// `self` getter
// https://html.spec.whatwg.org/multipage/window-object.html#dom-self
try {
    if (DESCRIPTORS) {
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        var descriptor = Object.getOwnPropertyDescriptor(global, 'self');
        // some engines have `self`, but with incorrect descriptor
        // https://github.com/denoland/deno/issues/15765
        if (INCORRECT_VALUE || !descriptor || !descriptor.get || !descriptor.enumerable) defineBuiltInAccessor(global, 'self', {
            get: function self() {
                return global;
            },
            set: function self1(value) {
                if (this !== global) throw $TypeError('Illegal invocation');
                defineProperty(global, 'self', {
                    value: value,
                    writable: true,
                    configurable: true,
                    enumerable: true
                });
            },
            configurable: true,
            enumerable: true
        });
    } else $({
        global: true,
        simple: true,
        forced: INCORRECT_VALUE
    }, {
        self: global
    });
} catch (error) {
}

},{"../internals/export":"2mZbc","../internals/global":"a4GR8","../internals/define-built-in-accessor":"jJJHp","../internals/descriptors":"kuDzl"}],"goekr":[function(require,module,exports) {
var IS_PURE = require('../internals/is-pure');
var $ = require('../internals/export');
var global = require('../internals/global');
var getBuiltin = require('../internals/get-built-in');
var uncurryThis = require('../internals/function-uncurry-this');
var fails = require('../internals/fails');
var uid = require('../internals/uid');
var isCallable = require('../internals/is-callable');
var isConstructor = require('../internals/is-constructor');
var isNullOrUndefined = require('../internals/is-null-or-undefined');
var isObject = require('../internals/is-object');
var isSymbol = require('../internals/is-symbol');
var iterate = require('../internals/iterate');
var anObject = require('../internals/an-object');
var classof = require('../internals/classof');
var hasOwn = require('../internals/has-own-property');
var createProperty = require('../internals/create-property');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var validateArgumentsLength = require('../internals/validate-arguments-length');
var getRegExpFlags = require('../internals/regexp-get-flags');
var MapHelpers = require('../internals/map-helpers');
var SetHelpers = require('../internals/set-helpers');
var ERROR_STACK_INSTALLABLE = require('../internals/error-stack-installable');
var V8 = require('../internals/engine-v8-version');
var IS_BROWSER = require('../internals/engine-is-browser');
var IS_DENO = require('../internals/engine-is-deno');
var IS_NODE = require('../internals/engine-is-node');
var Object1 = global.Object;
var Array1 = global.Array;
var Date1 = global.Date;
var Error1 = global.Error;
var EvalError1 = global.EvalError;
var RangeError1 = global.RangeError;
var ReferenceError1 = global.ReferenceError;
var SyntaxError1 = global.SyntaxError;
var TypeError1 = global.TypeError;
var URIError1 = global.URIError;
var PerformanceMark1 = global.PerformanceMark;
var WebAssembly1 = global.WebAssembly;
var CompileError = WebAssembly1 && WebAssembly1.CompileError || Error1;
var LinkError = WebAssembly1 && WebAssembly1.LinkError || Error1;
var RuntimeError = WebAssembly1 && WebAssembly1.RuntimeError || Error1;
var DOMException1 = getBuiltin('DOMException');
var Map1 = MapHelpers.Map;
var mapHas = MapHelpers.has;
var mapGet = MapHelpers.get;
var mapSet = MapHelpers.set;
var Set1 = SetHelpers.Set;
var setAdd = SetHelpers.add;
var objectKeys = getBuiltin('Object', 'keys');
var push = uncurryThis([].push);
var thisBooleanValue = uncurryThis(true.valueOf);
var thisNumberValue = uncurryThis(1..valueOf);
var thisStringValue = uncurryThis(''.valueOf);
var thisTimeValue = uncurryThis(Date1.prototype.getTime);
var PERFORMANCE_MARK = uid('structuredClone');
var DATA_CLONE_ERROR = 'DataCloneError';
var TRANSFERRING = 'Transferring';
var checkBasicSemantic = function(structuredCloneImplementation) {
    return !fails(function() {
        var set1 = new global.Set([
            7
        ]);
        var set2 = structuredCloneImplementation(set1);
        var number = structuredCloneImplementation(Object1(7));
        return set2 == set1 || !set2.has(7) || typeof number != 'object' || number != 7;
    }) && structuredCloneImplementation;
};
var checkErrorsCloning = function(structuredCloneImplementation, $Error) {
    return !fails(function() {
        var error = new $Error();
        var test = structuredCloneImplementation({
            a: error,
            b: error
        });
        return !(test && test.a === test.b && test.a instanceof $Error && test.a.stack === error.stack);
    });
};
// https://github.com/whatwg/html/pull/5749
var checkNewErrorsCloningSemantic = function(structuredCloneImplementation) {
    return !fails(function() {
        var test = structuredCloneImplementation(new global.AggregateError([
            1
        ], PERFORMANCE_MARK, {
            cause: 3
        }));
        return test.name != 'AggregateError' || test.errors[0] != 1 || test.message != PERFORMANCE_MARK || test.cause != 3;
    });
};
// FF94+, Safari 15.4+, Chrome 98+, NodeJS 17.0+, Deno 1.13+
// FF<103 and Safari implementations can't clone errors
// https://bugzilla.mozilla.org/show_bug.cgi?id=1556604
// FF103 can clone errors, but `.stack` of clone is an empty string
// https://bugzilla.mozilla.org/show_bug.cgi?id=1778762
// FF104+ fixed it on usual errors, but not on DOMExceptions
// https://bugzilla.mozilla.org/show_bug.cgi?id=1777321
// Chrome <102 returns `null` if cloned object contains multiple references to one error
// https://bugs.chromium.org/p/v8/issues/detail?id=12542
// NodeJS implementation can't clone DOMExceptions
// https://github.com/nodejs/node/issues/41038
// only FF103+ supports new (html/5749) error cloning semantic
var nativeStructuredClone = global.structuredClone;
var FORCED_REPLACEMENT = IS_PURE || !checkErrorsCloning(nativeStructuredClone, Error1) || !checkErrorsCloning(nativeStructuredClone, DOMException1) || !checkNewErrorsCloningSemantic(nativeStructuredClone);
// Chrome 82+, Safari 14.1+, Deno 1.11+
// Chrome 78-81 implementation swaps `.name` and `.message` of cloned `DOMException`
// Chrome returns `null` if cloned object contains multiple references to one error
// Safari 14.1 implementation doesn't clone some `RegExp` flags, so requires a workaround
// Safari implementation can't clone errors
// Deno 1.2-1.10 implementations too naive
// NodeJS 16.0+ does not have `PerformanceMark` constructor
// NodeJS <17.2 structured cloning implementation from `performance.mark` is too naive
// and can't clone, for example, `RegExp` or some boxed primitives
// https://github.com/nodejs/node/issues/40840
// no one of those implementations supports new (html/5749) error cloning semantic
var structuredCloneFromMark = !nativeStructuredClone && checkBasicSemantic(function(value) {
    return new PerformanceMark1(PERFORMANCE_MARK, {
        detail: value
    }).detail;
});
var nativeRestrictedStructuredClone = checkBasicSemantic(nativeStructuredClone) || structuredCloneFromMark;
var throwUncloneable = function(type) {
    throw new DOMException1('Uncloneable type: ' + type, DATA_CLONE_ERROR);
};
var throwUnpolyfillable = function(type, action) {
    throw new DOMException1((action || 'Cloning') + ' of ' + type + ' cannot be properly polyfilled in this engine', DATA_CLONE_ERROR);
};
var createDataTransfer = function() {
    var dataTransfer;
    try {
        dataTransfer = new global.DataTransfer();
    } catch (error) {
        try {
            dataTransfer = new global.ClipboardEvent('').clipboardData;
        } catch (error2) {
        }
    }
    return dataTransfer && dataTransfer.items && dataTransfer.files ? dataTransfer : null;
};
var structuredCloneInternal = function(value, map) {
    if (isSymbol(value)) throwUncloneable('Symbol');
    if (!isObject(value)) return value;
    // effectively preserves circular references
    if (map) {
        if (mapHas(map, value)) return mapGet(map, value);
    } else map = new Map1();
    var type = classof(value);
    var deep = false;
    var C, name, cloned, dataTransfer, i, length, keys, key, source, target;
    switch(type){
        case 'Array':
            cloned = Array1(lengthOfArrayLike(value));
            deep = true;
            break;
        case 'Object':
            cloned = {
            };
            deep = true;
            break;
        case 'Map':
            cloned = new Map1();
            deep = true;
            break;
        case 'Set':
            cloned = new Set1();
            deep = true;
            break;
        case 'RegExp':
            // in this block because of a Safari 14.1 bug
            // old FF does not clone regexes passed to the constructor, so get the source and flags directly
            cloned = new RegExp(value.source, getRegExpFlags(value));
            break;
        case 'Error':
            name = value.name;
            switch(name){
                case 'AggregateError':
                    cloned = getBuiltin('AggregateError')([]);
                    break;
                case 'EvalError':
                    cloned = EvalError1();
                    break;
                case 'RangeError':
                    cloned = RangeError1();
                    break;
                case 'ReferenceError':
                    cloned = ReferenceError1();
                    break;
                case 'SyntaxError':
                    cloned = SyntaxError1();
                    break;
                case 'TypeError':
                    cloned = TypeError1();
                    break;
                case 'URIError':
                    cloned = URIError1();
                    break;
                case 'CompileError':
                    cloned = CompileError();
                    break;
                case 'LinkError':
                    cloned = LinkError();
                    break;
                case 'RuntimeError':
                    cloned = RuntimeError();
                    break;
                default:
                    cloned = Error1();
            }
            deep = true;
            break;
        case 'DOMException':
            cloned = new DOMException1(value.message, value.name);
            deep = true;
            break;
        case 'DataView':
        case 'Int8Array':
        case 'Uint8Array':
        case 'Uint8ClampedArray':
        case 'Int16Array':
        case 'Uint16Array':
        case 'Int32Array':
        case 'Uint32Array':
        case 'Float32Array':
        case 'Float64Array':
        case 'BigInt64Array':
        case 'BigUint64Array':
            C = global[type];
            // in some old engines like Safari 9, typeof C is 'object'
            // on Uint8ClampedArray or some other constructors
            if (!isObject(C)) throwUnpolyfillable(type);
            cloned = new C(// this is safe, since arraybuffer cannot have circular references
            structuredCloneInternal(value.buffer, map), value.byteOffset, type === 'DataView' ? value.byteLength : value.length);
            break;
        case 'DOMQuad':
            try {
                cloned = new DOMQuad(structuredCloneInternal(value.p1, map), structuredCloneInternal(value.p2, map), structuredCloneInternal(value.p3, map), structuredCloneInternal(value.p4, map));
            } catch (error) {
                if (nativeRestrictedStructuredClone) cloned = nativeRestrictedStructuredClone(value);
                else throwUnpolyfillable(type);
            }
            break;
        case 'FileList':
            dataTransfer = createDataTransfer();
            if (dataTransfer) {
                for(i = 0, length = lengthOfArrayLike(value); i < length; i++)dataTransfer.items.add(structuredCloneInternal(value[i], map));
                cloned = dataTransfer.files;
            } else if (nativeRestrictedStructuredClone) cloned = nativeRestrictedStructuredClone(value);
            else throwUnpolyfillable(type);
            break;
        case 'ImageData':
            // Safari 9 ImageData is a constructor, but typeof ImageData is 'object'
            try {
                cloned = new ImageData(structuredCloneInternal(value.data, map), value.width, value.height, {
                    colorSpace: value.colorSpace
                });
            } catch (error) {
                if (nativeRestrictedStructuredClone) cloned = nativeRestrictedStructuredClone(value);
                else throwUnpolyfillable(type);
            }
            break;
        default:
            if (nativeRestrictedStructuredClone) cloned = nativeRestrictedStructuredClone(value);
            else switch(type){
                case 'BigInt':
                    // can be a 3rd party polyfill
                    cloned = Object1(value.valueOf());
                    break;
                case 'Boolean':
                    cloned = Object1(thisBooleanValue(value));
                    break;
                case 'Number':
                    cloned = Object1(thisNumberValue(value));
                    break;
                case 'String':
                    cloned = Object1(thisStringValue(value));
                    break;
                case 'Date':
                    cloned = new Date1(thisTimeValue(value));
                    break;
                case 'ArrayBuffer':
                    C = global.DataView;
                    // `ArrayBuffer#slice` is not available in IE10
                    // `ArrayBuffer#slice` and `DataView` are not available in old FF
                    if (!C && typeof value.slice != 'function') throwUnpolyfillable(type);
                    // detached buffers throws in `DataView` and `.slice`
                    try {
                        if (typeof value.slice == 'function') cloned = value.slice(0);
                        else {
                            length = value.byteLength;
                            cloned = new ArrayBuffer(length);
                            source = new C(value);
                            target = new C(cloned);
                            for(i = 0; i < length; i++)target.setUint8(i, source.getUint8(i));
                        }
                    } catch (error) {
                        throw new DOMException1('ArrayBuffer is detached', DATA_CLONE_ERROR);
                    }
                    break;
                case 'SharedArrayBuffer':
                    // SharedArrayBuffer should use shared memory, we can't polyfill it, so return the original
                    cloned = value;
                    break;
                case 'Blob':
                    try {
                        cloned = value.slice(0, value.size, value.type);
                    } catch (error) {
                        throwUnpolyfillable(type);
                    }
                    break;
                case 'DOMPoint':
                case 'DOMPointReadOnly':
                    C = global[type];
                    try {
                        cloned = C.fromPoint ? C.fromPoint(value) : new C(value.x, value.y, value.z, value.w);
                    } catch (error) {
                        throwUnpolyfillable(type);
                    }
                    break;
                case 'DOMRect':
                case 'DOMRectReadOnly':
                    C = global[type];
                    try {
                        cloned = C.fromRect ? C.fromRect(value) : new C(value.x, value.y, value.width, value.height);
                    } catch (error) {
                        throwUnpolyfillable(type);
                    }
                    break;
                case 'DOMMatrix':
                case 'DOMMatrixReadOnly':
                    C = global[type];
                    try {
                        cloned = C.fromMatrix ? C.fromMatrix(value) : new C(value);
                    } catch (error) {
                        throwUnpolyfillable(type);
                    }
                    break;
                case 'AudioData':
                case 'VideoFrame':
                    if (!isCallable(value.clone)) throwUnpolyfillable(type);
                    try {
                        cloned = value.clone();
                    } catch (error) {
                        throwUncloneable(type);
                    }
                    break;
                case 'File':
                    try {
                        cloned = new File([
                            value
                        ], value.name, value);
                    } catch (error) {
                        throwUnpolyfillable(type);
                    }
                    break;
                case 'CropTarget':
                case 'CryptoKey':
                case 'FileSystemDirectoryHandle':
                case 'FileSystemFileHandle':
                case 'FileSystemHandle':
                case 'GPUCompilationInfo':
                case 'GPUCompilationMessage':
                case 'ImageBitmap':
                case 'RTCCertificate':
                case 'WebAssembly.Module':
                    throwUnpolyfillable(type);
                // break omitted
                default:
                    throwUncloneable(type);
            }
    }
    mapSet(map, value, cloned);
    if (deep) switch(type){
        case 'Array':
        case 'Object':
            keys = objectKeys(value);
            for(i = 0, length = lengthOfArrayLike(keys); i < length; i++){
                key = keys[i];
                createProperty(cloned, key, structuredCloneInternal(value[key], map));
            }
            break;
        case 'Map':
            value.forEach(function(v, k) {
                mapSet(cloned, structuredCloneInternal(k, map), structuredCloneInternal(v, map));
            });
            break;
        case 'Set':
            value.forEach(function(v) {
                setAdd(cloned, structuredCloneInternal(v, map));
            });
            break;
        case 'Error':
            createNonEnumerableProperty(cloned, 'message', structuredCloneInternal(value.message, map));
            if (hasOwn(value, 'cause')) createNonEnumerableProperty(cloned, 'cause', structuredCloneInternal(value.cause, map));
            if (name == 'AggregateError') cloned.errors = structuredCloneInternal(value.errors, map);
             // break omitted
        case 'DOMException':
            if (ERROR_STACK_INSTALLABLE) createNonEnumerableProperty(cloned, 'stack', structuredCloneInternal(value.stack, map));
    }
    return cloned;
};
var PROPER_TRANSFER = nativeStructuredClone && !fails(function() {
    // prevent V8 ArrayBufferDetaching protector cell invalidation and performance degradation
    // https://github.com/zloirock/core-js/issues/679
    if (IS_DENO && V8 > 92 || IS_NODE && V8 > 94 || IS_BROWSER && V8 > 97) return false;
    var buffer = new ArrayBuffer(8);
    var clone = nativeStructuredClone(buffer, {
        transfer: [
            buffer
        ]
    });
    return buffer.byteLength != 0 || clone.byteLength != 8;
});
var tryToTransfer = function(rawTransfer, map) {
    if (!isObject(rawTransfer)) throw TypeError1('Transfer option cannot be converted to a sequence');
    var transfer = [];
    iterate(rawTransfer, function(value) {
        push(transfer, anObject(value));
    });
    var i = 0;
    var length = lengthOfArrayLike(transfer);
    var value, type, C, transferredArray, transferred, canvas, context;
    if (PROPER_TRANSFER) {
        transferredArray = nativeStructuredClone(transfer, {
            transfer: transfer
        });
        while(i < length)mapSet(map, transfer[i], transferredArray[i++]);
    } else while(i < length){
        value = transfer[i++];
        if (mapHas(map, value)) throw new DOMException1('Duplicate transferable', DATA_CLONE_ERROR);
        type = classof(value);
        switch(type){
            case 'ImageBitmap':
                C = global.OffscreenCanvas;
                if (!isConstructor(C)) throwUnpolyfillable(type, TRANSFERRING);
                try {
                    canvas = new C(value.width, value.height);
                    context = canvas.getContext('bitmaprenderer');
                    context.transferFromImageBitmap(value);
                    transferred = canvas.transferToImageBitmap();
                } catch (error) {
                }
                break;
            case 'AudioData':
            case 'VideoFrame':
                if (!isCallable(value.clone) || !isCallable(value.close)) throwUnpolyfillable(type, TRANSFERRING);
                try {
                    transferred = value.clone();
                    value.close();
                } catch (error) {
                }
                break;
            case 'ArrayBuffer':
            case 'MediaSourceHandle':
            case 'MessagePort':
            case 'OffscreenCanvas':
            case 'ReadableStream':
            case 'TransformStream':
            case 'WritableStream':
                throwUnpolyfillable(type, TRANSFERRING);
        }
        if (transferred === undefined) throw new DOMException1('This object cannot be transferred: ' + type, DATA_CLONE_ERROR);
        mapSet(map, value, transferred);
    }
};
// `structuredClone` method
// https://html.spec.whatwg.org/multipage/structured-data.html#dom-structuredclone
$({
    global: true,
    enumerable: true,
    sham: !PROPER_TRANSFER,
    forced: FORCED_REPLACEMENT
}, {
    structuredClone: function structuredClone(value /* , { transfer } */ ) {
        var options = validateArgumentsLength(arguments.length, 1) > 1 && !isNullOrUndefined(arguments[1]) ? anObject(arguments[1]) : undefined;
        var transfer = options ? options.transfer : undefined;
        var map;
        if (transfer !== undefined) {
            map = new Map1();
            tryToTransfer(transfer, map);
        }
        return structuredCloneInternal(value, map);
    }
});

},{"../internals/is-pure":"dlbEd","../internals/export":"2mZbc","../internals/global":"a4GR8","../internals/get-built-in":"hqegu","../internals/function-uncurry-this":"gBsQL","../internals/fails":"byxLb","../internals/uid":"9DssZ","../internals/is-callable":"41EnZ","../internals/is-constructor":"lmyue","../internals/is-null-or-undefined":"kssQ6","../internals/is-object":"d60Kc","../internals/is-symbol":"hfIC8","../internals/iterate":"a4R19","../internals/an-object":"9unxM","../internals/classof":"gO6DW","../internals/has-own-property":"kL9Yw","../internals/create-property":"9DQWQ","../internals/create-non-enumerable-property":"73EkF","../internals/length-of-array-like":"feyBo","../internals/validate-arguments-length":"6C3kL","../internals/regexp-get-flags":"7BOiC","../internals/map-helpers":"99G0D","../internals/set-helpers":"9jcmH","../internals/error-stack-installable":"eEcIf","../internals/engine-v8-version":"8Ofbb","../internals/engine-is-browser":"fHGoO","../internals/engine-is-deno":"71rax","../internals/engine-is-node":"gpWpt"}],"99G0D":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
// eslint-disable-next-line es/no-map -- safe
var MapPrototype = Map.prototype;
module.exports = {
    // eslint-disable-next-line es/no-map -- safe
    Map: Map,
    set: uncurryThis(MapPrototype.set),
    get: uncurryThis(MapPrototype.get),
    has: uncurryThis(MapPrototype.has),
    remove: uncurryThis(MapPrototype['delete']),
    proto: MapPrototype
};

},{"../internals/function-uncurry-this":"gBsQL"}],"9jcmH":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
// eslint-disable-next-line es/no-set -- safe
var SetPrototype = Set.prototype;
module.exports = {
    // eslint-disable-next-line es/no-set -- safe
    Set: Set,
    add: uncurryThis(SetPrototype.add),
    has: uncurryThis(SetPrototype.has),
    remove: uncurryThis(SetPrototype['delete']),
    proto: SetPrototype,
    $has: SetPrototype.has,
    $keys: SetPrototype.keys
};

},{"../internals/function-uncurry-this":"gBsQL"}],"8IM6S":[function(require,module,exports) {
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require('../modules/web.set-interval');
require('../modules/web.set-timeout');

},{"../modules/web.set-interval":"aLjQs","../modules/web.set-timeout":"3mtOx"}],"aLjQs":[function(require,module,exports) {
var $ = require('../internals/export');
var global = require('../internals/global');
var schedulersFix = require('../internals/schedulers-fix');
var setInterval = schedulersFix(global.setInterval, true);
// Bun / IE9- setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
$({
    global: true,
    bind: true,
    forced: global.setInterval !== setInterval
}, {
    setInterval: setInterval
});

},{"../internals/export":"2mZbc","../internals/global":"a4GR8","../internals/schedulers-fix":"66M3m"}],"3mtOx":[function(require,module,exports) {
var $ = require('../internals/export');
var global = require('../internals/global');
var schedulersFix = require('../internals/schedulers-fix');
var setTimeout = schedulersFix(global.setTimeout, true);
// Bun / IE9- setTimeout additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
$({
    global: true,
    bind: true,
    forced: global.setTimeout !== setTimeout
}, {
    setTimeout: setTimeout
});

},{"../internals/export":"2mZbc","../internals/global":"a4GR8","../internals/schedulers-fix":"66M3m"}],"c61iN":[function(require,module,exports) {
// TODO: Remove this module from `core-js@4` since it's replaced to module below
require('../modules/web.url.constructor');

},{"../modules/web.url.constructor":"iQIrB"}],"iQIrB":[function(require,module,exports) {
'use strict';
// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
require('../modules/es.string.iterator');
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var USE_NATIVE_URL = require('../internals/url-constructor-detection');
var global = require('../internals/global');
var bind = require('../internals/function-bind-context');
var uncurryThis = require('../internals/function-uncurry-this');
var defineBuiltIn = require('../internals/define-built-in');
var defineBuiltInAccessor = require('../internals/define-built-in-accessor');
var anInstance = require('../internals/an-instance');
var hasOwn = require('../internals/has-own-property');
var assign = require('../internals/object-assign');
var arrayFrom = require('../internals/array-from');
var arraySlice = require('../internals/array-slice-simple');
var codeAt = require('../internals/string-multibyte').codeAt;
var toASCII = require('../internals/string-punycode-to-ascii');
var $toString = require('../internals/to-string');
var setToStringTag = require('../internals/set-to-string-tag');
var validateArgumentsLength = require('../internals/validate-arguments-length');
var URLSearchParamsModule = require('../modules/web.url-search-params.constructor');
var InternalStateModule = require('../internals/internal-state');
var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var URLSearchParams1 = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;
var NativeURL = global.URL;
var TypeError1 = global.TypeError;
var parseInt = global.parseInt;
var floor = Math.floor;
var pow = Math.pow;
var charAt = uncurryThis(''.charAt);
var exec = uncurryThis(/./.exec);
var join = uncurryThis([].join);
var numberToString = uncurryThis(1..toString);
var pop = uncurryThis([].pop);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var shift = uncurryThis([].shift);
var split = uncurryThis(''.split);
var stringSlice = uncurryThis(''.slice);
var toLowerCase = uncurryThis(''.toLowerCase);
var unshift = uncurryThis([].unshift);
var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';
var ALPHA = /[a-z]/i;
// eslint-disable-next-line regexp/no-obscure-range -- safe
var ALPHANUMERIC = /[\d+-.a-z]/i;
var DIGIT = /\d/;
var HEX_START = /^0x/i;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\da-f]+$/i;
/* eslint-disable regexp/no-control-character -- safe */ var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g;
var TAB_AND_NEW_LINE = /[\t\n\r]/g;
/* eslint-enable regexp/no-control-character -- safe */ var EOF;
// https://url.spec.whatwg.org/#ipv4-number-parser
var parseIPv4 = function(input) {
    var parts = split(input, '.');
    var partsLength, numbers, index, part, radix, number, ipv4;
    if (parts.length && parts[parts.length - 1] == '') parts.length--;
    partsLength = parts.length;
    if (partsLength > 4) return input;
    numbers = [];
    for(index = 0; index < partsLength; index++){
        part = parts[index];
        if (part == '') return input;
        radix = 10;
        if (part.length > 1 && charAt(part, 0) == '0') {
            radix = exec(HEX_START, part) ? 16 : 8;
            part = stringSlice(part, radix == 8 ? 1 : 2);
        }
        if (part === '') number = 0;
        else {
            if (!exec(radix == 10 ? DEC : radix == 8 ? OCT : HEX, part)) return input;
            number = parseInt(part, radix);
        }
        push(numbers, number);
    }
    for(index = 0; index < partsLength; index++){
        number = numbers[index];
        if (index == partsLength - 1) {
            if (number >= pow(256, 5 - partsLength)) return null;
        } else if (number > 255) return null;
    }
    ipv4 = pop(numbers);
    for(index = 0; index < numbers.length; index++)ipv4 += numbers[index] * pow(256, 3 - index);
    return ipv4;
};
// https://url.spec.whatwg.org/#concept-ipv6-parser
// eslint-disable-next-line max-statements -- TODO
var parseIPv6 = function(input) {
    var address = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
    var pieceIndex = 0;
    var compress = null;
    var pointer = 0;
    var value, length, numbersSeen, ipv4Piece, number, swaps, swap;
    var chr = function() {
        return charAt(input, pointer);
    };
    if (chr() == ':') {
        if (charAt(input, 1) != ':') return;
        pointer += 2;
        pieceIndex++;
        compress = pieceIndex;
    }
    while(chr()){
        if (pieceIndex == 8) return;
        if (chr() == ':') {
            if (compress !== null) return;
            pointer++;
            pieceIndex++;
            compress = pieceIndex;
            continue;
        }
        value = length = 0;
        while(length < 4 && exec(HEX, chr())){
            value = value * 16 + parseInt(chr(), 16);
            pointer++;
            length++;
        }
        if (chr() == '.') {
            if (length == 0) return;
            pointer -= length;
            if (pieceIndex > 6) return;
            numbersSeen = 0;
            while(chr()){
                ipv4Piece = null;
                if (numbersSeen > 0) {
                    if (chr() == '.' && numbersSeen < 4) pointer++;
                    else return;
                }
                if (!exec(DIGIT, chr())) return;
                while(exec(DIGIT, chr())){
                    number = parseInt(chr(), 10);
                    if (ipv4Piece === null) ipv4Piece = number;
                    else if (ipv4Piece == 0) return;
                    else ipv4Piece = ipv4Piece * 10 + number;
                    if (ipv4Piece > 255) return;
                    pointer++;
                }
                address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
                numbersSeen++;
                if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
            }
            if (numbersSeen != 4) return;
            break;
        } else if (chr() == ':') {
            pointer++;
            if (!chr()) return;
        } else if (chr()) return;
        address[pieceIndex++] = value;
    }
    if (compress !== null) {
        swaps = pieceIndex - compress;
        pieceIndex = 7;
        while(pieceIndex != 0 && swaps > 0){
            swap = address[pieceIndex];
            address[pieceIndex--] = address[compress + swaps - 1];
            address[compress + --swaps] = swap;
        }
    } else if (pieceIndex != 8) return;
    return address;
};
var findLongestZeroSequence = function(ipv6) {
    var maxIndex = null;
    var maxLength = 1;
    var currStart = null;
    var currLength = 0;
    var index = 0;
    for(; index < 8; index++)if (ipv6[index] !== 0) {
        if (currLength > maxLength) {
            maxIndex = currStart;
            maxLength = currLength;
        }
        currStart = null;
        currLength = 0;
    } else {
        if (currStart === null) currStart = index;
        ++currLength;
    }
    if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
    }
    return maxIndex;
};
// https://url.spec.whatwg.org/#host-serializing
var serializeHost = function(host) {
    var result, index, compress, ignore0;
    // ipv4
    if (typeof host == 'number') {
        result = [];
        for(index = 0; index < 4; index++){
            unshift(result, host % 256);
            host = floor(host / 256);
        }
        return join(result, '.');
    // ipv6
    } else if (typeof host == 'object') {
        result = '';
        compress = findLongestZeroSequence(host);
        for(index = 0; index < 8; index++){
            if (ignore0 && host[index] === 0) continue;
            if (ignore0) ignore0 = false;
            if (compress === index) {
                result += index ? ':' : '::';
                ignore0 = true;
            } else {
                result += numberToString(host[index], 16);
                if (index < 7) result += ':';
            }
        }
        return '[' + result + ']';
    }
    return host;
};
var C0ControlPercentEncodeSet = {
};
var fragmentPercentEncodeSet = assign({
}, C0ControlPercentEncodeSet, {
    ' ': 1,
    '"': 1,
    '<': 1,
    '>': 1,
    '`': 1
});
var pathPercentEncodeSet = assign({
}, fragmentPercentEncodeSet, {
    '#': 1,
    '?': 1,
    '{': 1,
    '}': 1
});
var userinfoPercentEncodeSet = assign({
}, pathPercentEncodeSet, {
    '/': 1,
    ':': 1,
    ';': 1,
    '=': 1,
    '@': 1,
    '[': 1,
    '\\': 1,
    ']': 1,
    '^': 1,
    '|': 1
});
var percentEncode = function(chr, set) {
    var code = codeAt(chr, 0);
    return code > 32 && code < 127 && !hasOwn(set, chr) ? chr : encodeURIComponent(chr);
};
// https://url.spec.whatwg.org/#special-scheme
var specialSchemes = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
};
// https://url.spec.whatwg.org/#windows-drive-letter
var isWindowsDriveLetter = function(string, normalized) {
    var second;
    return string.length == 2 && exec(ALPHA, charAt(string, 0)) && ((second = charAt(string, 1)) == ':' || !normalized && second == '|');
};
// https://url.spec.whatwg.org/#start-with-a-windows-drive-letter
var startsWithWindowsDriveLetter = function(string) {
    var third;
    return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (string.length == 2 || (third = charAt(string, 2)) === '/' || third === '\\' || third === '?' || third === '#');
};
// https://url.spec.whatwg.org/#single-dot-path-segment
var isSingleDot = function(segment) {
    return segment === '.' || toLowerCase(segment) === '%2e';
};
// https://url.spec.whatwg.org/#double-dot-path-segment
var isDoubleDot = function(segment) {
    segment = toLowerCase(segment);
    return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};
// States:
var SCHEME_START = {
};
var SCHEME = {
};
var NO_SCHEME = {
};
var SPECIAL_RELATIVE_OR_AUTHORITY = {
};
var PATH_OR_AUTHORITY = {
};
var RELATIVE = {
};
var RELATIVE_SLASH = {
};
var SPECIAL_AUTHORITY_SLASHES = {
};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {
};
var AUTHORITY = {
};
var HOST = {
};
var HOSTNAME = {
};
var PORT = {
};
var FILE = {
};
var FILE_SLASH = {
};
var FILE_HOST = {
};
var PATH_START = {
};
var PATH = {
};
var CANNOT_BE_A_BASE_URL_PATH = {
};
var QUERY = {
};
var FRAGMENT = {
};
var URLState = function(url, isBase, base) {
    var urlString = $toString(url);
    var baseState, failure, searchParams;
    if (isBase) {
        failure = this.parse(urlString);
        if (failure) throw TypeError1(failure);
        this.searchParams = null;
    } else {
        if (base !== undefined) baseState = new URLState(base, true);
        failure = this.parse(urlString, null, baseState);
        if (failure) throw TypeError1(failure);
        searchParams = getInternalSearchParamsState(new URLSearchParams1());
        searchParams.bindURL(this);
        this.searchParams = searchParams;
    }
};
URLState.prototype = {
    type: 'URL',
    // https://url.spec.whatwg.org/#url-parsing
    // eslint-disable-next-line max-statements -- TODO
    parse: function(input, stateOverride, base) {
        var url = this;
        var state = stateOverride || SCHEME_START;
        var pointer = 0;
        var buffer = '';
        var seenAt = false;
        var seenBracket = false;
        var seenPasswordToken = false;
        var codePoints, chr, bufferCodePoints, failure;
        input = $toString(input);
        if (!stateOverride) {
            url.scheme = '';
            url.username = '';
            url.password = '';
            url.host = null;
            url.port = null;
            url.path = [];
            url.query = null;
            url.fragment = null;
            url.cannotBeABaseURL = false;
            input = replace(input, LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
        }
        input = replace(input, TAB_AND_NEW_LINE, '');
        codePoints = arrayFrom(input);
        while(pointer <= codePoints.length){
            chr = codePoints[pointer];
            switch(state){
                case SCHEME_START:
                    if (chr && exec(ALPHA, chr)) {
                        buffer += toLowerCase(chr);
                        state = SCHEME;
                    } else if (!stateOverride) {
                        state = NO_SCHEME;
                        continue;
                    } else return INVALID_SCHEME;
                    break;
                case SCHEME:
                    if (chr && (exec(ALPHANUMERIC, chr) || chr == '+' || chr == '-' || chr == '.')) buffer += toLowerCase(chr);
                    else if (chr == ':') {
                        if (stateOverride && (url.isSpecial() != hasOwn(specialSchemes, buffer) || buffer == 'file' && (url.includesCredentials() || url.port !== null) || url.scheme == 'file' && !url.host)) return;
                        url.scheme = buffer;
                        if (stateOverride) {
                            if (url.isSpecial() && specialSchemes[url.scheme] == url.port) url.port = null;
                            return;
                        }
                        buffer = '';
                        if (url.scheme == 'file') state = FILE;
                        else if (url.isSpecial() && base && base.scheme == url.scheme) state = SPECIAL_RELATIVE_OR_AUTHORITY;
                        else if (url.isSpecial()) state = SPECIAL_AUTHORITY_SLASHES;
                        else if (codePoints[pointer + 1] == '/') {
                            state = PATH_OR_AUTHORITY;
                            pointer++;
                        } else {
                            url.cannotBeABaseURL = true;
                            push(url.path, '');
                            state = CANNOT_BE_A_BASE_URL_PATH;
                        }
                    } else if (!stateOverride) {
                        buffer = '';
                        state = NO_SCHEME;
                        pointer = 0;
                        continue;
                    } else return INVALID_SCHEME;
                    break;
                case NO_SCHEME:
                    if (!base || base.cannotBeABaseURL && chr != '#') return INVALID_SCHEME;
                    if (base.cannotBeABaseURL && chr == '#') {
                        url.scheme = base.scheme;
                        url.path = arraySlice(base.path);
                        url.query = base.query;
                        url.fragment = '';
                        url.cannotBeABaseURL = true;
                        state = FRAGMENT;
                        break;
                    }
                    state = base.scheme == 'file' ? FILE : RELATIVE;
                    continue;
                case SPECIAL_RELATIVE_OR_AUTHORITY:
                    if (chr == '/' && codePoints[pointer + 1] == '/') {
                        state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                        pointer++;
                    } else {
                        state = RELATIVE;
                        continue;
                    }
                    break;
                case PATH_OR_AUTHORITY:
                    if (chr == '/') {
                        state = AUTHORITY;
                        break;
                    } else {
                        state = PATH;
                        continue;
                    }
                case RELATIVE:
                    url.scheme = base.scheme;
                    if (chr == EOF) {
                        url.username = base.username;
                        url.password = base.password;
                        url.host = base.host;
                        url.port = base.port;
                        url.path = arraySlice(base.path);
                        url.query = base.query;
                    } else if (chr == '/' || chr == '\\' && url.isSpecial()) state = RELATIVE_SLASH;
                    else if (chr == '?') {
                        url.username = base.username;
                        url.password = base.password;
                        url.host = base.host;
                        url.port = base.port;
                        url.path = arraySlice(base.path);
                        url.query = '';
                        state = QUERY;
                    } else if (chr == '#') {
                        url.username = base.username;
                        url.password = base.password;
                        url.host = base.host;
                        url.port = base.port;
                        url.path = arraySlice(base.path);
                        url.query = base.query;
                        url.fragment = '';
                        state = FRAGMENT;
                    } else {
                        url.username = base.username;
                        url.password = base.password;
                        url.host = base.host;
                        url.port = base.port;
                        url.path = arraySlice(base.path);
                        url.path.length--;
                        state = PATH;
                        continue;
                    }
                    break;
                case RELATIVE_SLASH:
                    if (url.isSpecial() && (chr == '/' || chr == '\\')) state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                    else if (chr == '/') state = AUTHORITY;
                    else {
                        url.username = base.username;
                        url.password = base.password;
                        url.host = base.host;
                        url.port = base.port;
                        state = PATH;
                        continue;
                    }
                    break;
                case SPECIAL_AUTHORITY_SLASHES:
                    state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                    if (chr != '/' || charAt(buffer, pointer + 1) != '/') continue;
                    pointer++;
                    break;
                case SPECIAL_AUTHORITY_IGNORE_SLASHES:
                    if (chr != '/' && chr != '\\') {
                        state = AUTHORITY;
                        continue;
                    }
                    break;
                case AUTHORITY:
                    if (chr == '@') {
                        if (seenAt) buffer = '%40' + buffer;
                        seenAt = true;
                        bufferCodePoints = arrayFrom(buffer);
                        for(var i = 0; i < bufferCodePoints.length; i++){
                            var codePoint = bufferCodePoints[i];
                            if (codePoint == ':' && !seenPasswordToken) {
                                seenPasswordToken = true;
                                continue;
                            }
                            var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
                            if (seenPasswordToken) url.password += encodedCodePoints;
                            else url.username += encodedCodePoints;
                        }
                        buffer = '';
                    } else if (chr == EOF || chr == '/' || chr == '?' || chr == '#' || chr == '\\' && url.isSpecial()) {
                        if (seenAt && buffer == '') return INVALID_AUTHORITY;
                        pointer -= arrayFrom(buffer).length + 1;
                        buffer = '';
                        state = HOST;
                    } else buffer += chr;
                    break;
                case HOST:
                case HOSTNAME:
                    if (stateOverride && url.scheme == 'file') {
                        state = FILE_HOST;
                        continue;
                    } else if (chr == ':' && !seenBracket) {
                        if (buffer == '') return INVALID_HOST;
                        failure = url.parseHost(buffer);
                        if (failure) return failure;
                        buffer = '';
                        state = PORT;
                        if (stateOverride == HOSTNAME) return;
                    } else if (chr == EOF || chr == '/' || chr == '?' || chr == '#' || chr == '\\' && url.isSpecial()) {
                        if (url.isSpecial() && buffer == '') return INVALID_HOST;
                        if (stateOverride && buffer == '' && (url.includesCredentials() || url.port !== null)) return;
                        failure = url.parseHost(buffer);
                        if (failure) return failure;
                        buffer = '';
                        state = PATH_START;
                        if (stateOverride) return;
                        continue;
                    } else {
                        if (chr == '[') seenBracket = true;
                        else if (chr == ']') seenBracket = false;
                        buffer += chr;
                    }
                    break;
                case PORT:
                    if (exec(DIGIT, chr)) buffer += chr;
                    else if (chr == EOF || chr == '/' || chr == '?' || chr == '#' || chr == '\\' && url.isSpecial() || stateOverride) {
                        if (buffer != '') {
                            var port = parseInt(buffer, 10);
                            if (port > 65535) return INVALID_PORT;
                            url.port = url.isSpecial() && port === specialSchemes[url.scheme] ? null : port;
                            buffer = '';
                        }
                        if (stateOverride) return;
                        state = PATH_START;
                        continue;
                    } else return INVALID_PORT;
                    break;
                case FILE:
                    url.scheme = 'file';
                    if (chr == '/' || chr == '\\') state = FILE_SLASH;
                    else if (base && base.scheme == 'file') {
                        if (chr == EOF) {
                            url.host = base.host;
                            url.path = arraySlice(base.path);
                            url.query = base.query;
                        } else if (chr == '?') {
                            url.host = base.host;
                            url.path = arraySlice(base.path);
                            url.query = '';
                            state = QUERY;
                        } else if (chr == '#') {
                            url.host = base.host;
                            url.path = arraySlice(base.path);
                            url.query = base.query;
                            url.fragment = '';
                            state = FRAGMENT;
                        } else {
                            if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
                                url.host = base.host;
                                url.path = arraySlice(base.path);
                                url.shortenPath();
                            }
                            state = PATH;
                            continue;
                        }
                    } else {
                        state = PATH;
                        continue;
                    }
                    break;
                case FILE_SLASH:
                    if (chr == '/' || chr == '\\') {
                        state = FILE_HOST;
                        break;
                    }
                    if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
                        if (isWindowsDriveLetter(base.path[0], true)) push(url.path, base.path[0]);
                        else url.host = base.host;
                    }
                    state = PATH;
                    continue;
                case FILE_HOST:
                    if (chr == EOF || chr == '/' || chr == '\\' || chr == '?' || chr == '#') {
                        if (!stateOverride && isWindowsDriveLetter(buffer)) state = PATH;
                        else if (buffer == '') {
                            url.host = '';
                            if (stateOverride) return;
                            state = PATH_START;
                        } else {
                            failure = url.parseHost(buffer);
                            if (failure) return failure;
                            if (url.host == 'localhost') url.host = '';
                            if (stateOverride) return;
                            buffer = '';
                            state = PATH_START;
                        }
                        continue;
                    } else buffer += chr;
                    break;
                case PATH_START:
                    if (url.isSpecial()) {
                        state = PATH;
                        if (chr != '/' && chr != '\\') continue;
                    } else if (!stateOverride && chr == '?') {
                        url.query = '';
                        state = QUERY;
                    } else if (!stateOverride && chr == '#') {
                        url.fragment = '';
                        state = FRAGMENT;
                    } else if (chr != EOF) {
                        state = PATH;
                        if (chr != '/') continue;
                    }
                    break;
                case PATH:
                    if (chr == EOF || chr == '/' || chr == '\\' && url.isSpecial() || !stateOverride && (chr == '?' || chr == '#')) {
                        if (isDoubleDot(buffer)) {
                            url.shortenPath();
                            if (chr != '/' && !(chr == '\\' && url.isSpecial())) push(url.path, '');
                        } else if (isSingleDot(buffer)) {
                            if (chr != '/' && !(chr == '\\' && url.isSpecial())) push(url.path, '');
                        } else {
                            if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                                if (url.host) url.host = '';
                                buffer = charAt(buffer, 0) + ':'; // normalize windows drive letter
                            }
                            push(url.path, buffer);
                        }
                        buffer = '';
                        if (url.scheme == 'file' && (chr == EOF || chr == '?' || chr == '#')) while(url.path.length > 1 && url.path[0] === '')shift(url.path);
                        if (chr == '?') {
                            url.query = '';
                            state = QUERY;
                        } else if (chr == '#') {
                            url.fragment = '';
                            state = FRAGMENT;
                        }
                    } else buffer += percentEncode(chr, pathPercentEncodeSet);
                    break;
                case CANNOT_BE_A_BASE_URL_PATH:
                    if (chr == '?') {
                        url.query = '';
                        state = QUERY;
                    } else if (chr == '#') {
                        url.fragment = '';
                        state = FRAGMENT;
                    } else if (chr != EOF) url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
                    break;
                case QUERY:
                    if (!stateOverride && chr == '#') {
                        url.fragment = '';
                        state = FRAGMENT;
                    } else if (chr != EOF) {
                        if (chr == "'" && url.isSpecial()) url.query += '%27';
                        else if (chr == '#') url.query += '%23';
                        else url.query += percentEncode(chr, C0ControlPercentEncodeSet);
                    }
                    break;
                case FRAGMENT:
                    if (chr != EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
                    break;
            }
            pointer++;
        }
    },
    // https://url.spec.whatwg.org/#host-parsing
    parseHost: function(input) {
        var result, codePoints, index;
        if (charAt(input, 0) == '[') {
            if (charAt(input, input.length - 1) != ']') return INVALID_HOST;
            result = parseIPv6(stringSlice(input, 1, -1));
            if (!result) return INVALID_HOST;
            this.host = result;
        // opaque host
        } else if (!this.isSpecial()) {
            if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;
            result = '';
            codePoints = arrayFrom(input);
            for(index = 0; index < codePoints.length; index++)result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
            this.host = result;
        } else {
            input = toASCII(input);
            if (exec(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
            result = parseIPv4(input);
            if (result === null) return INVALID_HOST;
            this.host = result;
        }
    },
    // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
    cannotHaveUsernamePasswordPort: function() {
        return !this.host || this.cannotBeABaseURL || this.scheme == 'file';
    },
    // https://url.spec.whatwg.org/#include-credentials
    includesCredentials: function() {
        return this.username != '' || this.password != '';
    },
    // https://url.spec.whatwg.org/#is-special
    isSpecial: function() {
        return hasOwn(specialSchemes, this.scheme);
    },
    // https://url.spec.whatwg.org/#shorten-a-urls-path
    shortenPath: function() {
        var path = this.path;
        var pathSize = path.length;
        if (pathSize && (this.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) path.length--;
    },
    // https://url.spec.whatwg.org/#concept-url-serializer
    serialize: function() {
        var url = this;
        var scheme = url.scheme;
        var username = url.username;
        var password = url.password;
        var host = url.host;
        var port = url.port;
        var path = url.path;
        var query = url.query;
        var fragment = url.fragment;
        var output = scheme + ':';
        if (host !== null) {
            output += '//';
            if (url.includesCredentials()) output += username + (password ? ':' + password : '') + '@';
            output += serializeHost(host);
            if (port !== null) output += ':' + port;
        } else if (scheme == 'file') output += '//';
        output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
        if (query !== null) output += '?' + query;
        if (fragment !== null) output += '#' + fragment;
        return output;
    },
    // https://url.spec.whatwg.org/#dom-url-href
    setHref: function(href) {
        var failure = this.parse(href);
        if (failure) throw TypeError1(failure);
        this.searchParams.update();
    },
    // https://url.spec.whatwg.org/#dom-url-origin
    getOrigin: function() {
        var scheme = this.scheme;
        var port = this.port;
        if (scheme == 'blob') try {
            return new URLConstructor(scheme.path[0]).origin;
        } catch (error) {
            return 'null';
        }
        if (scheme == 'file' || !this.isSpecial()) return 'null';
        return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');
    },
    // https://url.spec.whatwg.org/#dom-url-protocol
    getProtocol: function() {
        return this.scheme + ':';
    },
    setProtocol: function(protocol) {
        this.parse($toString(protocol) + ':', SCHEME_START);
    },
    // https://url.spec.whatwg.org/#dom-url-username
    getUsername: function() {
        return this.username;
    },
    setUsername: function(username) {
        var codePoints = arrayFrom($toString(username));
        if (this.cannotHaveUsernamePasswordPort()) return;
        this.username = '';
        for(var i = 0; i < codePoints.length; i++)this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    },
    // https://url.spec.whatwg.org/#dom-url-password
    getPassword: function() {
        return this.password;
    },
    setPassword: function(password) {
        var codePoints = arrayFrom($toString(password));
        if (this.cannotHaveUsernamePasswordPort()) return;
        this.password = '';
        for(var i = 0; i < codePoints.length; i++)this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    },
    // https://url.spec.whatwg.org/#dom-url-host
    getHost: function() {
        var host = this.host;
        var port = this.port;
        return host === null ? '' : port === null ? serializeHost(host) : serializeHost(host) + ':' + port;
    },
    setHost: function(host) {
        if (this.cannotBeABaseURL) return;
        this.parse(host, HOST);
    },
    // https://url.spec.whatwg.org/#dom-url-hostname
    getHostname: function() {
        var host = this.host;
        return host === null ? '' : serializeHost(host);
    },
    setHostname: function(hostname) {
        if (this.cannotBeABaseURL) return;
        this.parse(hostname, HOSTNAME);
    },
    // https://url.spec.whatwg.org/#dom-url-port
    getPort: function() {
        var port = this.port;
        return port === null ? '' : $toString(port);
    },
    setPort: function(port) {
        if (this.cannotHaveUsernamePasswordPort()) return;
        port = $toString(port);
        if (port == '') this.port = null;
        else this.parse(port, PORT);
    },
    // https://url.spec.whatwg.org/#dom-url-pathname
    getPathname: function() {
        var path = this.path;
        return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
    },
    setPathname: function(pathname) {
        if (this.cannotBeABaseURL) return;
        this.path = [];
        this.parse(pathname, PATH_START);
    },
    // https://url.spec.whatwg.org/#dom-url-search
    getSearch: function() {
        var query = this.query;
        return query ? '?' + query : '';
    },
    setSearch: function(search) {
        search = $toString(search);
        if (search == '') this.query = null;
        else {
            if ('?' == charAt(search, 0)) search = stringSlice(search, 1);
            this.query = '';
            this.parse(search, QUERY);
        }
        this.searchParams.update();
    },
    // https://url.spec.whatwg.org/#dom-url-searchparams
    getSearchParams: function() {
        return this.searchParams.facade;
    },
    // https://url.spec.whatwg.org/#dom-url-hash
    getHash: function() {
        var fragment = this.fragment;
        return fragment ? '#' + fragment : '';
    },
    setHash: function(hash) {
        hash = $toString(hash);
        if (hash == '') {
            this.fragment = null;
            return;
        }
        if ('#' == charAt(hash, 0)) hash = stringSlice(hash, 1);
        this.fragment = '';
        this.parse(hash, FRAGMENT);
    },
    update: function() {
        this.query = this.searchParams.serialize() || null;
    }
};
// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL1(url /* , base */ ) {
    var that = anInstance(this, URLPrototype);
    var base = validateArgumentsLength(arguments.length, 1) > 1 ? arguments[1] : undefined;
    var state = setInternalState(that, new URLState(url, false, base));
    if (!DESCRIPTORS) {
        that.href = state.serialize();
        that.origin = state.getOrigin();
        that.protocol = state.getProtocol();
        that.username = state.getUsername();
        that.password = state.getPassword();
        that.host = state.getHost();
        that.hostname = state.getHostname();
        that.port = state.getPort();
        that.pathname = state.getPathname();
        that.search = state.getSearch();
        that.searchParams = state.getSearchParams();
        that.hash = state.getHash();
    }
};
var URLPrototype = URLConstructor.prototype;
var accessorDescriptor = function(getter, setter) {
    return {
        get: function() {
            return getInternalURLState(this)[getter]();
        },
        set: setter && function(value) {
            return getInternalURLState(this)[setter](value);
        },
        configurable: true,
        enumerable: true
    };
};
if (DESCRIPTORS) {
    // `URL.prototype.href` accessors pair
    // https://url.spec.whatwg.org/#dom-url-href
    defineBuiltInAccessor(URLPrototype, 'href', accessorDescriptor('serialize', 'setHref'));
    // `URL.prototype.origin` getter
    // https://url.spec.whatwg.org/#dom-url-origin
    defineBuiltInAccessor(URLPrototype, 'origin', accessorDescriptor('getOrigin'));
    // `URL.prototype.protocol` accessors pair
    // https://url.spec.whatwg.org/#dom-url-protocol
    defineBuiltInAccessor(URLPrototype, 'protocol', accessorDescriptor('getProtocol', 'setProtocol'));
    // `URL.prototype.username` accessors pair
    // https://url.spec.whatwg.org/#dom-url-username
    defineBuiltInAccessor(URLPrototype, 'username', accessorDescriptor('getUsername', 'setUsername'));
    // `URL.prototype.password` accessors pair
    // https://url.spec.whatwg.org/#dom-url-password
    defineBuiltInAccessor(URLPrototype, 'password', accessorDescriptor('getPassword', 'setPassword'));
    // `URL.prototype.host` accessors pair
    // https://url.spec.whatwg.org/#dom-url-host
    defineBuiltInAccessor(URLPrototype, 'host', accessorDescriptor('getHost', 'setHost'));
    // `URL.prototype.hostname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hostname
    defineBuiltInAccessor(URLPrototype, 'hostname', accessorDescriptor('getHostname', 'setHostname'));
    // `URL.prototype.port` accessors pair
    // https://url.spec.whatwg.org/#dom-url-port
    defineBuiltInAccessor(URLPrototype, 'port', accessorDescriptor('getPort', 'setPort'));
    // `URL.prototype.pathname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-pathname
    defineBuiltInAccessor(URLPrototype, 'pathname', accessorDescriptor('getPathname', 'setPathname'));
    // `URL.prototype.search` accessors pair
    // https://url.spec.whatwg.org/#dom-url-search
    defineBuiltInAccessor(URLPrototype, 'search', accessorDescriptor('getSearch', 'setSearch'));
    // `URL.prototype.searchParams` getter
    // https://url.spec.whatwg.org/#dom-url-searchparams
    defineBuiltInAccessor(URLPrototype, 'searchParams', accessorDescriptor('getSearchParams'));
    // `URL.prototype.hash` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hash
    defineBuiltInAccessor(URLPrototype, 'hash', accessorDescriptor('getHash', 'setHash'));
}
// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
defineBuiltIn(URLPrototype, 'toJSON', function toJSON() {
    return getInternalURLState(this).serialize();
}, {
    enumerable: true
});
// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
defineBuiltIn(URLPrototype, 'toString', function toString() {
    return getInternalURLState(this).serialize();
}, {
    enumerable: true
});
if (NativeURL) {
    var nativeCreateObjectURL = NativeURL.createObjectURL;
    var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
    // `URL.createObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
    if (nativeCreateObjectURL) defineBuiltIn(URLConstructor, 'createObjectURL', bind(nativeCreateObjectURL, NativeURL));
    // `URL.revokeObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
    if (nativeRevokeObjectURL) defineBuiltIn(URLConstructor, 'revokeObjectURL', bind(nativeRevokeObjectURL, NativeURL));
}
setToStringTag(URLConstructor, 'URL');
$({
    global: true,
    constructor: true,
    forced: !USE_NATIVE_URL,
    sham: !DESCRIPTORS
}, {
    URL: URLConstructor
});

},{"../modules/es.string.iterator":"79oCt","../internals/export":"2mZbc","../internals/descriptors":"kuDzl","../internals/url-constructor-detection":"hQ4bl","../internals/global":"a4GR8","../internals/function-bind-context":"1epb9","../internals/function-uncurry-this":"gBsQL","../internals/define-built-in":"dTyng","../internals/define-built-in-accessor":"jJJHp","../internals/an-instance":"gTr5k","../internals/has-own-property":"kL9Yw","../internals/object-assign":"5r2ci","../internals/array-from":"hkJ4P","../internals/array-slice-simple":"cgL4j","../internals/string-multibyte":"dPnMz","../internals/string-punycode-to-ascii":"5mwWr","../internals/to-string":"k0ZQF","../internals/set-to-string-tag":"cFbSt","../internals/validate-arguments-length":"6C3kL","../modules/web.url-search-params.constructor":"gATha","../internals/internal-state":"ceuiK"}],"hQ4bl":[function(require,module,exports) {
var fails = require('../internals/fails');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_PURE = require('../internals/is-pure');
var ITERATOR = wellKnownSymbol('iterator');
module.exports = !fails(function() {
    // eslint-disable-next-line unicorn/relative-url-style -- required for testing
    var url = new URL('b?a=1&b=2&c=3', 'http://a');
    var searchParams = url.searchParams;
    var result = '';
    url.pathname = 'c%20d';
    searchParams.forEach(function(value, key) {
        searchParams['delete']('b');
        result += key + value;
    });
    return IS_PURE && !url.toJSON || !searchParams.sort || url.href !== 'http://a/c%20d?a=1&c=3' || searchParams.get('c') !== '3' || String(new URLSearchParams('?a=1')) !== 'a=1' || !searchParams[ITERATOR] || new URL('https://a@b').username !== 'a' || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b' || new URL('http://тест').host !== 'xn--e1aybc' || new URL('http://a#б').hash !== '#%D0%B1' || result !== 'a1c3' || new URL('http://x', undefined).host !== 'x';
});

},{"../internals/fails":"byxLb","../internals/well-known-symbol":"6sZ59","../internals/is-pure":"dlbEd"}],"5mwWr":[function(require,module,exports) {
// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var uncurryThis = require('../internals/function-uncurry-this');
var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;
var $RangeError = RangeError;
var exec = uncurryThis(regexSeparators.exec);
var floor = Math.floor;
var fromCharCode = String.fromCharCode;
var charCodeAt = uncurryThis(''.charCodeAt);
var join = uncurryThis([].join);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var split = uncurryThis(''.split);
var toLowerCase = uncurryThis(''.toLowerCase);
/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */ var ucs2decode = function(string) {
    var output = [];
    var counter = 0;
    var length = string.length;
    while(counter < length){
        var value = charCodeAt(string, counter++);
        if (value >= 55296 && value <= 56319 && counter < length) {
            // It's a high surrogate, and there is a next character.
            var extra = charCodeAt(string, counter++);
            if ((extra & 64512) == 56320) push(output, ((value & 1023) << 10) + (extra & 1023) + 65536);
            else {
                // It's an unmatched surrogate; only append this code unit, in case the
                // next code unit is the high surrogate of a surrogate pair.
                push(output, value);
                counter--;
            }
        } else push(output, value);
    }
    return output;
};
/**
 * Converts a digit/integer into a basic code point.
 */ var digitToBasic = function(digit) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26);
};
/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */ var adapt = function(delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor(delta / damp) : delta >> 1;
    delta += floor(delta / numPoints);
    while(delta > baseMinusTMin * tMax >> 1){
        delta = floor(delta / baseMinusTMin);
        k += base;
    }
    return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};
/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */ var encode = function(input) {
    var output = [];
    // Convert the input in UCS-2 to an array of Unicode code points.
    input = ucs2decode(input);
    // Cache the length.
    var inputLength = input.length;
    // Initialize the state.
    var n = initialN;
    var delta = 0;
    var bias = initialBias;
    var i, currentValue;
    // Handle the basic code points.
    for(i = 0; i < input.length; i++){
        currentValue = input[i];
        if (currentValue < 128) push(output, fromCharCode(currentValue));
    }
    var basicLength = output.length; // number of basic code points.
    var handledCPCount = basicLength; // number of code points that have been handled;
    // Finish the basic string with a delimiter unless it's empty.
    if (basicLength) push(output, delimiter);
    // Main encoding loop:
    while(handledCPCount < inputLength){
        // All non-basic code points < n have been handled already. Find the next larger one:
        var m = maxInt;
        for(i = 0; i < input.length; i++){
            currentValue = input[i];
            if (currentValue >= n && currentValue < m) m = currentValue;
        }
        // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
        var handledCPCountPlusOne = handledCPCount + 1;
        if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) throw $RangeError(OVERFLOW_ERROR);
        delta += (m - n) * handledCPCountPlusOne;
        n = m;
        for(i = 0; i < input.length; i++){
            currentValue = input[i];
            if (currentValue < n && (++delta) > maxInt) throw $RangeError(OVERFLOW_ERROR);
            if (currentValue == n) {
                // Represent delta as a generalized variable-length integer.
                var q = delta;
                var k = base;
                while(true){
                    var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                    if (q < t) break;
                    var qMinusT = q - t;
                    var baseMinusT = base - t;
                    push(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
                    q = floor(qMinusT / baseMinusT);
                    k += base;
                }
                push(output, fromCharCode(digitToBasic(q)));
                bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                delta = 0;
                handledCPCount++;
            }
        }
        delta++;
        n++;
    }
    return join(output, '');
};
module.exports = function(input) {
    var encoded = [];
    var labels = split(replace(toLowerCase(input), regexSeparators, '\u002E'), '.');
    var i, label;
    for(i = 0; i < labels.length; i++){
        label = labels[i];
        push(encoded, exec(regexNonASCII, label) ? 'xn--' + encode(label) : label);
    }
    return join(encoded, '.');
};

},{"../internals/function-uncurry-this":"gBsQL"}],"gATha":[function(require,module,exports) {
'use strict';
// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
require('../modules/es.array.iterator');
var $ = require('../internals/export');
var global = require('../internals/global');
var call = require('../internals/function-call');
var uncurryThis = require('../internals/function-uncurry-this');
var DESCRIPTORS = require('../internals/descriptors');
var USE_NATIVE_URL = require('../internals/url-constructor-detection');
var defineBuiltIn = require('../internals/define-built-in');
var defineBuiltIns = require('../internals/define-built-ins');
var setToStringTag = require('../internals/set-to-string-tag');
var createIteratorConstructor = require('../internals/iterator-create-constructor');
var InternalStateModule = require('../internals/internal-state');
var anInstance = require('../internals/an-instance');
var isCallable = require('../internals/is-callable');
var hasOwn = require('../internals/has-own-property');
var bind = require('../internals/function-bind-context');
var classof = require('../internals/classof');
var anObject = require('../internals/an-object');
var isObject = require('../internals/is-object');
var $toString = require('../internals/to-string');
var create = require('../internals/object-create');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var getIterator = require('../internals/get-iterator');
var getIteratorMethod = require('../internals/get-iterator-method');
var validateArgumentsLength = require('../internals/validate-arguments-length');
var wellKnownSymbol = require('../internals/well-known-symbol');
var arraySort = require('../internals/array-sort');
var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Avoid NodeJS experimental warning
var safeGetBuiltIn = function(name) {
    if (!DESCRIPTORS) return global[name];
    var descriptor = getOwnPropertyDescriptor(global, name);
    return descriptor && descriptor.value;
};
var nativeFetch = safeGetBuiltIn('fetch');
var NativeRequest = safeGetBuiltIn('Request');
var Headers1 = safeGetBuiltIn('Headers');
var RequestPrototype = NativeRequest && NativeRequest.prototype;
var HeadersPrototype = Headers1 && Headers1.prototype;
var RegExp1 = global.RegExp;
var TypeError1 = global.TypeError;
var decodeURIComponent = global.decodeURIComponent;
var encodeURIComponent = global.encodeURIComponent;
var charAt = uncurryThis(''.charAt);
var join = uncurryThis([].join);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var shift = uncurryThis([].shift);
var splice = uncurryThis([].splice);
var split = uncurryThis(''.split);
var stringSlice = uncurryThis(''.slice);
var plus = /\+/g;
var sequences = Array(4);
var percentSequence = function(bytes) {
    return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp1('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};
var percentDecode = function(sequence) {
    try {
        return decodeURIComponent(sequence);
    } catch (error) {
        return sequence;
    }
};
var deserialize = function(it) {
    var result = replace(it, plus, ' ');
    var bytes = 4;
    try {
        return decodeURIComponent(result);
    } catch (error) {
        while(bytes)result = replace(result, percentSequence(bytes--), percentDecode);
        return result;
    }
};
var find = /[!'()~]|%20/g;
var replacements = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+'
};
var replacer = function(match) {
    return replacements[match];
};
var serialize = function(it) {
    return replace(encodeURIComponent(it), find, replacer);
};
var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
    setInternalState(this, {
        type: URL_SEARCH_PARAMS_ITERATOR,
        iterator: getIterator(getInternalParamsState(params).entries),
        kind: kind
    });
}, 'Iterator', function next() {
    var state = getInternalIteratorState(this);
    var kind = state.kind;
    var step = state.iterator.next();
    var entry = step.value;
    if (!step.done) step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [
        entry.key,
        entry.value
    ];
    return step;
}, true);
var URLSearchParamsState = function(init) {
    this.entries = [];
    this.url = null;
    if (init !== undefined) {
        if (isObject(init)) this.parseObject(init);
        else this.parseQuery(typeof init == 'string' ? charAt(init, 0) === '?' ? stringSlice(init, 1) : init : $toString(init));
    }
};
URLSearchParamsState.prototype = {
    type: URL_SEARCH_PARAMS,
    bindURL: function(url) {
        this.url = url;
        this.update();
    },
    parseObject: function(object) {
        var iteratorMethod = getIteratorMethod(object);
        var iterator, next1, step, entryIterator, entryNext, first, second;
        if (iteratorMethod) {
            iterator = getIterator(object, iteratorMethod);
            next1 = iterator.next;
            while(!(step = call(next1, iterator)).done){
                entryIterator = getIterator(anObject(step.value));
                entryNext = entryIterator.next;
                if ((first = call(entryNext, entryIterator)).done || (second = call(entryNext, entryIterator)).done || !call(entryNext, entryIterator).done) throw TypeError1('Expected sequence with length 2');
                push(this.entries, {
                    key: $toString(first.value),
                    value: $toString(second.value)
                });
            }
        } else for(var key in object)if (hasOwn(object, key)) push(this.entries, {
            key: key,
            value: $toString(object[key])
        });
    },
    parseQuery: function(query) {
        if (query) {
            var attributes = split(query, '&');
            var index = 0;
            var attribute, entry;
            while(index < attributes.length){
                attribute = attributes[index++];
                if (attribute.length) {
                    entry = split(attribute, '=');
                    push(this.entries, {
                        key: deserialize(shift(entry)),
                        value: deserialize(join(entry, '='))
                    });
                }
            }
        }
    },
    serialize: function() {
        var entries = this.entries;
        var result = [];
        var index = 0;
        var entry;
        while(index < entries.length){
            entry = entries[index++];
            push(result, serialize(entry.key) + '=' + serialize(entry.value));
        }
        return join(result, '&');
    },
    update: function() {
        this.entries.length = 0;
        this.parseQuery(this.url.query);
    },
    updateURL: function() {
        if (this.url) this.url.update();
    }
};
// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams1() {
    anInstance(this, URLSearchParamsPrototype);
    var init = arguments.length > 0 ? arguments[0] : undefined;
    setInternalState(this, new URLSearchParamsState(init));
};
var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
defineBuiltIns(URLSearchParamsPrototype, {
    // `URLSearchParams.prototype.append` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-append
    append: function append(name, value) {
        validateArgumentsLength(arguments.length, 2);
        var state = getInternalParamsState(this);
        push(state.entries, {
            key: $toString(name),
            value: $toString(value)
        });
        state.updateURL();
    },
    // `URLSearchParams.prototype.delete` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
    'delete': function(name) {
        validateArgumentsLength(arguments.length, 1);
        var state = getInternalParamsState(this);
        var entries = state.entries;
        var key = $toString(name);
        var index = 0;
        while(index < entries.length)if (entries[index].key === key) splice(entries, index, 1);
        else index++;
        state.updateURL();
    },
    // `URLSearchParams.prototype.get` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-get
    get: function get(name) {
        validateArgumentsLength(arguments.length, 1);
        var entries = getInternalParamsState(this).entries;
        var key = $toString(name);
        var index = 0;
        for(; index < entries.length; index++){
            if (entries[index].key === key) return entries[index].value;
        }
        return null;
    },
    // `URLSearchParams.prototype.getAll` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
    getAll: function getAll(name) {
        validateArgumentsLength(arguments.length, 1);
        var entries = getInternalParamsState(this).entries;
        var key = $toString(name);
        var result = [];
        var index = 0;
        for(; index < entries.length; index++)if (entries[index].key === key) push(result, entries[index].value);
        return result;
    },
    // `URLSearchParams.prototype.has` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-has
    has: function has(name) {
        validateArgumentsLength(arguments.length, 1);
        var entries = getInternalParamsState(this).entries;
        var key = $toString(name);
        var index = 0;
        while(index < entries.length){
            if (entries[index++].key === key) return true;
        }
        return false;
    },
    // `URLSearchParams.prototype.set` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-set
    set: function set(name, value) {
        validateArgumentsLength(arguments.length, 1);
        var state = getInternalParamsState(this);
        var entries = state.entries;
        var found = false;
        var key = $toString(name);
        var val = $toString(value);
        var index = 0;
        var entry;
        for(; index < entries.length; index++){
            entry = entries[index];
            if (entry.key === key) {
                if (found) splice(entries, index--, 1);
                else {
                    found = true;
                    entry.value = val;
                }
            }
        }
        if (!found) push(entries, {
            key: key,
            value: val
        });
        state.updateURL();
    },
    // `URLSearchParams.prototype.sort` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
    sort: function sort() {
        var state = getInternalParamsState(this);
        arraySort(state.entries, function(a, b) {
            return a.key > b.key ? 1 : -1;
        });
        state.updateURL();
    },
    // `URLSearchParams.prototype.forEach` method
    forEach: function forEach(callback /* , thisArg */ ) {
        var entries = getInternalParamsState(this).entries;
        var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined);
        var index = 0;
        var entry;
        while(index < entries.length){
            entry = entries[index++];
            boundFunction(entry.value, entry.key, this);
        }
    },
    // `URLSearchParams.prototype.keys` method
    keys: function keys() {
        return new URLSearchParamsIterator(this, 'keys');
    },
    // `URLSearchParams.prototype.values` method
    values: function values() {
        return new URLSearchParamsIterator(this, 'values');
    },
    // `URLSearchParams.prototype.entries` method
    entries: function entries() {
        return new URLSearchParamsIterator(this, 'entries');
    }
}, {
    enumerable: true
});
// `URLSearchParams.prototype[@@iterator]` method
defineBuiltIn(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, {
    name: 'entries'
});
// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
defineBuiltIn(URLSearchParamsPrototype, 'toString', function toString() {
    return getInternalParamsState(this).serialize();
}, {
    enumerable: true
});
setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
$({
    global: true,
    constructor: true,
    forced: !USE_NATIVE_URL
}, {
    URLSearchParams: URLSearchParamsConstructor
});
// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if (!USE_NATIVE_URL && isCallable(Headers1)) {
    var headersHas = uncurryThis(HeadersPrototype.has);
    var headersSet = uncurryThis(HeadersPrototype.set);
    var wrapRequestOptions = function(init) {
        if (isObject(init)) {
            var body = init.body;
            var headers;
            if (classof(body) === URL_SEARCH_PARAMS) {
                headers = init.headers ? new Headers1(init.headers) : new Headers1();
                if (!headersHas(headers, 'content-type')) headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                return create(init, {
                    body: createPropertyDescriptor(0, $toString(body)),
                    headers: createPropertyDescriptor(0, headers)
                });
            }
        }
        return init;
    };
    if (isCallable(nativeFetch)) $({
        global: true,
        enumerable: true,
        dontCallGetSet: true,
        forced: true
    }, {
        fetch: function fetch(input /* , init */ ) {
            return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {
            });
        }
    });
    if (isCallable(NativeRequest)) {
        var RequestConstructor = function Request1(input /* , init */ ) {
            anInstance(this, RequestPrototype);
            return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {
            });
        };
        RequestPrototype.constructor = RequestConstructor;
        RequestConstructor.prototype = RequestPrototype;
        $({
            global: true,
            constructor: true,
            dontCallGetSet: true,
            forced: true
        }, {
            Request: RequestConstructor
        });
    }
}
module.exports = {
    URLSearchParams: URLSearchParamsConstructor,
    getState: getInternalParamsState
};

},{"../modules/es.array.iterator":"8YPvt","../internals/export":"2mZbc","../internals/global":"a4GR8","../internals/function-call":"d0MId","../internals/function-uncurry-this":"gBsQL","../internals/descriptors":"kuDzl","../internals/url-constructor-detection":"hQ4bl","../internals/define-built-in":"dTyng","../internals/define-built-ins":"eEmje","../internals/set-to-string-tag":"cFbSt","../internals/iterator-create-constructor":"fBwcg","../internals/internal-state":"ceuiK","../internals/an-instance":"gTr5k","../internals/is-callable":"41EnZ","../internals/has-own-property":"kL9Yw","../internals/function-bind-context":"1epb9","../internals/classof":"gO6DW","../internals/an-object":"9unxM","../internals/is-object":"d60Kc","../internals/to-string":"k0ZQF","../internals/object-create":"eYZeq","../internals/create-property-descriptor":"5fdHA","../internals/get-iterator":"erkff","../internals/get-iterator-method":"btrxT","../internals/validate-arguments-length":"6C3kL","../internals/well-known-symbol":"6sZ59","../internals/array-sort":"aFml7"}],"fBskR":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
$({
    target: 'URL',
    proto: true,
    enumerable: true
}, {
    toJSON: function toJSON() {
        return call(URL.prototype.toString, this);
    }
});

},{"../internals/export":"2mZbc","../internals/function-call":"d0MId"}],"dj0GL":[function(require,module,exports) {
// TODO: Remove this module from `core-js@4` since it's replaced to module below
require('../modules/web.url-search-params.constructor');

},{"../modules/web.url-search-params.constructor":"gATha"}]},["drOo7","jKMjS"], "jKMjS", "parcelRequire7e89")

//# sourceMappingURL=index.436439df.js.map
