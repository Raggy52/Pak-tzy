'use strict';

var _templateObject;
var _templateObject2;
var _templateObject3;
var _templateObject4;
var _templateObject5;
var _templateObject6;
function _typeof(_0x5d39ae) {
  '@babel/helpers - typeof';

  _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (_0x14825f) {
    return typeof _0x14825f;
  } : function (_0xd7fbd2) {
    if (_0xd7fbd2 && typeof Symbol == "function" && _0xd7fbd2.constructor === Symbol && _0xd7fbd2 !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof _0xd7fbd2;
    }
  };
  return _typeof(_0x5d39ae);
}
function _toConsumableArray(_0x4585e4) {
  return _arrayWithoutHoles(_0x4585e4) || _iterableToArray(_0x4585e4) || _unsupportedIterableToArray(_0x4585e4) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(_0x3b58eb) {
  if (typeof Symbol != "undefined" && _0x3b58eb[Symbol.iterator] != null || _0x3b58eb["@@iterator"] != null) {
    return Array.from(_0x3b58eb);
  }
}
function _arrayWithoutHoles(_0x4f21c1) {
  if (Array.isArray(_0x4f21c1)) {
    return _arrayLikeToArray(_0x4f21c1);
  }
}
function _taggedTemplateLiteral(_0x4f535a, _0x3cf64f) {
  _0x3cf64f ||= _0x4f535a.slice(0);
  return Object.freeze(Object.defineProperties(_0x4f535a, {
    raw: {
      value: Object.freeze(_0x3cf64f)
    }
  }));
}
function _createForOfIteratorHelper(_0x2456d4, _0x18cd45) {
  var _0x2a58a2 = typeof Symbol != "undefined" && _0x2456d4[Symbol.iterator] || _0x2456d4["@@iterator"];
  if (!_0x2a58a2) {
    if (Array.isArray(_0x2456d4) || (_0x2a58a2 = _unsupportedIterableToArray(_0x2456d4)) || _0x18cd45 && _0x2456d4 && typeof _0x2456d4.length == "number") {
      if (_0x2a58a2) {
        _0x2456d4 = _0x2a58a2;
      }
      var _0xb19942 = 0;
      var _0x225100 = function _0x5d8a5d() {};
      return {
        s: _0x225100,
        n: function _0x19e20c() {
          if (_0xb19942 >= _0x2456d4.length) {
            return {
              done: true
            };
          } else {
            return {
              done: false,
              value: _0x2456d4[_0xb19942++]
            };
          }
        },
        e: function _0x416580(_0x1bed50) {
          throw _0x1bed50;
        },
        f: _0x225100
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var _0x479ea7;
  var _0xab10c6 = true;
  var _0xbc51a8 = false;
  return {
    s: function _0x214fa3() {
      _0x2a58a2 = _0x2a58a2.call(_0x2456d4);
    },
    n: function _0x31583e() {
      var _0x47bc20 = _0x2a58a2.next();
      _0xab10c6 = _0x47bc20.done;
      return _0x47bc20;
    },
    e: function _0x8223d1(_0x79d8be) {
      _0xbc51a8 = true;
      _0x479ea7 = _0x79d8be;
    },
    f: function _0x5ec255() {
      try {
        if (!_0xab10c6 && _0x2a58a2.return != null) {
          _0x2a58a2.return();
        }
      } finally {
        if (_0xbc51a8) {
          throw _0x479ea7;
        }
      }
    }
  };
}
function _unsupportedIterableToArray(_0x4dc91d, _0x1f5800) {
  if (_0x4dc91d) {
    if (typeof _0x4dc91d == "string") {
      return _arrayLikeToArray(_0x4dc91d, _0x1f5800);
    }
    var _0x912801 = {}.toString.call(_0x4dc91d).slice(8, -1);
    if (_0x912801 === "Object" && _0x4dc91d.constructor) {
      _0x912801 = _0x4dc91d.constructor.name;
    }
    if (_0x912801 === "Map" || _0x912801 === "Set") {
      return Array.from(_0x4dc91d);
    } else if (_0x912801 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x912801)) {
      return _arrayLikeToArray(_0x4dc91d, _0x1f5800);
    } else {
      return undefined;
    }
  }
}
function _arrayLikeToArray(_0x7a9257, _0x3d62cb) {
  if (_0x3d62cb == null || _0x3d62cb > _0x7a9257.length) {
    _0x3d62cb = _0x7a9257.length;
  }
  for (var _0x207937 = 0, _0xe6f89d = Array(_0x3d62cb); _0x207937 < _0x3d62cb; _0x207937++) {
    _0xe6f89d[_0x207937] = _0x7a9257[_0x207937];
  }
  return _0xe6f89d;
}
function _regeneratorRuntime() {
  'use strict';

  _regeneratorRuntime = function _0x446185() {
    return _0x32b5e2;
  };
  var _0x50be72;
  var _0x32b5e2 = {};
  var _0x55f28f = Object.prototype;
  var _0x587254 = _0x55f28f.hasOwnProperty;
  var _0x35a84b = Object.defineProperty || function (_0x397d18, _0x2732ca, _0x3f34af) {
    _0x397d18[_0x2732ca] = _0x3f34af.value;
  };
  var _0x444aff = typeof Symbol == "function" ? Symbol : {};
  var _0x4443d5 = _0x444aff.iterator || "@@iterator";
  var _0x4551f7 = _0x444aff.asyncIterator || "@@asyncIterator";
  var _0x3d85a9 = _0x444aff.toStringTag || "@@toStringTag";
  function _0x2caeaf(_0x2267fc, _0x461258, _0x3335b5) {
    Object.defineProperty(_0x2267fc, _0x461258, {
      value: _0x3335b5,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return _0x2267fc[_0x461258];
  }
  try {
    _0x2caeaf({}, "");
  } catch (_0x46df15) {
    _0x2caeaf = function _0x2c4a83(_0x2fd4d9, _0x5a433f, _0x51c08c) {
      return _0x2fd4d9[_0x5a433f] = _0x51c08c;
    };
  }
  function _0x22c174(_0x4e03aa, _0x161fc9, _0x3abf71, _0x1f7aaf) {
    var _0x24de6a = _0x161fc9 && _0x161fc9.prototype instanceof _0x254a99 ? _0x161fc9 : _0x254a99;
    var _0x28496a = Object.create(_0x24de6a.prototype);
    var _0x5b01d0 = new _0x418e9b(_0x1f7aaf || []);
    _0x35a84b(_0x28496a, "_invoke", {
      value: _0x41a296(_0x4e03aa, _0x3abf71, _0x5b01d0)
    });
    return _0x28496a;
  }
  function _0x2514ea(_0xc39a48, _0x42f6c2, _0x12affc) {
    try {
      return {
        type: "normal",
        arg: _0xc39a48.call(_0x42f6c2, _0x12affc)
      };
    } catch (_0x19e950) {
      return {
        type: "throw",
        arg: _0x19e950
      };
    }
  }
  _0x32b5e2.wrap = _0x22c174;
  var _0xb7dc79 = "suspendedStart";
  var _0x1bab8e = "suspendedYield";
  var _0x5bb0b5 = "executing";
  var _0x562f30 = "completed";
  var _0x343709 = {};
  function _0x254a99() {}
  function _0x4d2998() {}
  function _0xcbb95c() {}
  var _0x4d5ab0 = {};
  _0x2caeaf(_0x4d5ab0, _0x4443d5, function () {
    return this;
  });
  var _0x2f5a87 = Object.getPrototypeOf;
  var _0x38369b = _0x2f5a87 && _0x2f5a87(_0x2f5a87(_0x488430([])));
  if (_0x38369b && _0x38369b !== _0x55f28f && _0x587254.call(_0x38369b, _0x4443d5)) {
    _0x4d5ab0 = _0x38369b;
  }
  var _0x13099f = _0xcbb95c.prototype = _0x254a99.prototype = Object.create(_0x4d5ab0);
  function _0x15194e(_0x23eb4e) {
    ["next", "throw", "return"].forEach(function (_0x2978ec) {
      _0x2caeaf(_0x23eb4e, _0x2978ec, function (_0x1452bd) {
        return this._invoke(_0x2978ec, _0x1452bd);
      });
    });
  }
  function _0x50c609(_0x387aad, _0x7ccba2) {
    function _0x2f6571(_0x5425ff, _0x4d5a7c, _0x108766, _0x2283a7) {
      var _0x2da5ab = _0x2514ea(_0x387aad[_0x5425ff], _0x387aad, _0x4d5a7c);
      if (_0x2da5ab.type !== "throw") {
        var _0x43bd9f = _0x2da5ab.arg;
        var _0x58e198 = _0x43bd9f.value;
        if (_0x58e198 && _typeof(_0x58e198) == "object" && _0x587254.call(_0x58e198, "__await")) {
          return _0x7ccba2.resolve(_0x58e198.__await).then(function (_0x563228) {
            _0x2f6571("next", _0x563228, _0x108766, _0x2283a7);
          }, function (_0x54194b) {
            _0x2f6571("throw", _0x54194b, _0x108766, _0x2283a7);
          });
        } else {
          return _0x7ccba2.resolve(_0x58e198).then(function (_0x28b0fc) {
            _0x43bd9f.value = _0x28b0fc;
            _0x108766(_0x43bd9f);
          }, function (_0xf2f611) {
            return _0x2f6571("throw", _0xf2f611, _0x108766, _0x2283a7);
          });
        }
      }
      _0x2283a7(_0x2da5ab.arg);
    }
    var _0x33f714;
    _0x35a84b(this, "_invoke", {
      value: function _0x3f6f4d(_0x3c5149, _0x58bd6b) {
        function _0x375bf8() {
          return new _0x7ccba2(function (_0x5266cc, _0x23e388) {
            _0x2f6571(_0x3c5149, _0x58bd6b, _0x5266cc, _0x23e388);
          });
        }
        return _0x33f714 = _0x33f714 ? _0x33f714.then(_0x375bf8, _0x375bf8) : _0x375bf8();
      }
    });
  }
  function _0x41a296(_0x5e6d8f, _0x529967, _0x414487) {
    var _0x486591 = _0xb7dc79;
    return function (_0x5bb9a4, _0x3fb967) {
      if (_0x486591 === _0x5bb0b5) {
        throw Error("Generator is already running");
      }
      if (_0x486591 === _0x562f30) {
        if (_0x5bb9a4 === "throw") {
          throw _0x3fb967;
        }
        return {
          value: _0x50be72,
          done: true
        };
      }
      _0x414487.method = _0x5bb9a4;
      _0x414487.arg = _0x3fb967;
      while (true) {
        var _0x55fc4d = _0x414487.delegate;
        if (_0x55fc4d) {
          var _0x5968a2 = _0xda0e4f(_0x55fc4d, _0x414487);
          if (_0x5968a2) {
            if (_0x5968a2 === _0x343709) {
              continue;
            }
            return _0x5968a2;
          }
        }
        if (_0x414487.method === "next") {
          _0x414487.sent = _0x414487._sent = _0x414487.arg;
        } else if (_0x414487.method === "throw") {
          if (_0x486591 === _0xb7dc79) {
            _0x486591 = _0x562f30;
            throw _0x414487.arg;
          }
          _0x414487.dispatchException(_0x414487.arg);
        } else if (_0x414487.method === "return") {
          _0x414487.abrupt("return", _0x414487.arg);
        }
        _0x486591 = _0x5bb0b5;
        var _0x56d925 = _0x2514ea(_0x5e6d8f, _0x529967, _0x414487);
        if (_0x56d925.type === "normal") {
          _0x486591 = _0x414487.done ? _0x562f30 : _0x1bab8e;
          if (_0x56d925.arg === _0x343709) {
            continue;
          }
          return {
            value: _0x56d925.arg,
            done: _0x414487.done
          };
        }
        if (_0x56d925.type === "throw") {
          _0x486591 = _0x562f30;
          _0x414487.method = "throw";
          _0x414487.arg = _0x56d925.arg;
        }
      }
    };
  }
  function _0xda0e4f(_0x3857c1, _0x3922aa) {
    var _0x342ae2 = _0x3922aa.method;
    var _0x3992a5 = _0x3857c1.iterator[_0x342ae2];
    if (_0x3992a5 === _0x50be72) {
      _0x3922aa.delegate = null;
      if (_0x342ae2 !== "throw" || !_0x3857c1.iterator.return || !(_0x3922aa.method = "return", _0x3922aa.arg = _0x50be72, _0xda0e4f(_0x3857c1, _0x3922aa), _0x3922aa.method === "throw")) {
        if (_0x342ae2 !== "return") {
          _0x3922aa.method = "throw";
          _0x3922aa.arg = new TypeError("The iterator does not provide a '" + _0x342ae2 + "' method");
        }
      }
      return _0x343709;
    }
    var _0x20abc3 = _0x2514ea(_0x3992a5, _0x3857c1.iterator, _0x3922aa.arg);
    if (_0x20abc3.type === "throw") {
      _0x3922aa.method = "throw";
      _0x3922aa.arg = _0x20abc3.arg;
      _0x3922aa.delegate = null;
      return _0x343709;
    }
    var _0x4c3e0b = _0x20abc3.arg;
    if (_0x4c3e0b) {
      if (_0x4c3e0b.done) {
        _0x3922aa[_0x3857c1.resultName] = _0x4c3e0b.value;
        _0x3922aa.next = _0x3857c1.nextLoc;
        if (_0x3922aa.method !== "return") {
          _0x3922aa.method = "next";
          _0x3922aa.arg = _0x50be72;
        }
        _0x3922aa.delegate = null;
        return _0x343709;
      } else {
        return _0x4c3e0b;
      }
    } else {
      _0x3922aa.method = "throw";
      _0x3922aa.arg = new TypeError("iterator result is not an object");
      _0x3922aa.delegate = null;
      return _0x343709;
    }
  }
  function _0xc4e1b1(_0x4883c7) {
    var _0x39864a = {
      tryLoc: _0x4883c7[0]
    };
    if (1 in _0x4883c7) {
      _0x39864a.catchLoc = _0x4883c7[1];
    }
    if (2 in _0x4883c7) {
      _0x39864a.finallyLoc = _0x4883c7[2];
      _0x39864a.afterLoc = _0x4883c7[3];
    }
    this.tryEntries.push(_0x39864a);
  }
  function _0x3a7d56(_0x2cca33) {
    var _0x5aa756 = _0x2cca33.completion || {};
    _0x5aa756.type = "normal";
    delete _0x5aa756.arg;
    _0x2cca33.completion = _0x5aa756;
  }
  function _0x418e9b(_0x49db5a) {
    this.tryEntries = [{
      tryLoc: "root"
    }];
    _0x49db5a.forEach(_0xc4e1b1, this);
    this.reset(true);
  }
  function _0x488430(_0x56e21e) {
    if (_0x56e21e || _0x56e21e === "") {
      var _0x53b5e9 = _0x56e21e[_0x4443d5];
      if (_0x53b5e9) {
        return _0x53b5e9.call(_0x56e21e);
      }
      if (typeof _0x56e21e.next == "function") {
        return _0x56e21e;
      }
      if (!isNaN(_0x56e21e.length)) {
        var _0x5a44f0 = -1;
        var _0xc4968d = function _0x185e86() {
          while (++_0x5a44f0 < _0x56e21e.length) {
            if (_0x587254.call(_0x56e21e, _0x5a44f0)) {
              _0x185e86.value = _0x56e21e[_0x5a44f0];
              _0x185e86.done = false;
              return _0x185e86;
            }
          }
          _0x185e86.value = _0x50be72;
          _0x185e86.done = true;
          return _0x185e86;
        };
        return _0xc4968d.next = _0xc4968d;
      }
    }
    throw new TypeError(_typeof(_0x56e21e) + " is not iterable");
  }
  _0x4d2998.prototype = _0xcbb95c;
  _0x35a84b(_0x13099f, "constructor", {
    value: _0xcbb95c,
    configurable: true
  });
  _0x35a84b(_0xcbb95c, "constructor", {
    value: _0x4d2998,
    configurable: true
  });
  _0x4d2998.displayName = _0x2caeaf(_0xcbb95c, _0x3d85a9, "GeneratorFunction");
  _0x32b5e2.isGeneratorFunction = function (_0x10f8f9) {
    var _0x519d76 = typeof _0x10f8f9 == "function" && _0x10f8f9.constructor;
    return !!_0x519d76 && (_0x519d76 === _0x4d2998 || (_0x519d76.displayName || _0x519d76.name) === "GeneratorFunction");
  };
  _0x32b5e2.mark = function (_0x50befe) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(_0x50befe, _0xcbb95c);
    } else {
      _0x50befe.__proto__ = _0xcbb95c;
      _0x2caeaf(_0x50befe, _0x3d85a9, "GeneratorFunction");
    }
    _0x50befe.prototype = Object.create(_0x13099f);
    return _0x50befe;
  };
  _0x32b5e2.awrap = function (_0x5da31c) {
    return {
      __await: _0x5da31c
    };
  };
  _0x15194e(_0x50c609.prototype);
  _0x2caeaf(_0x50c609.prototype, _0x4551f7, function () {
    return this;
  });
  _0x32b5e2.AsyncIterator = _0x50c609;
  _0x32b5e2.async = function (_0xf8586e, _0x24927c, _0x4fdd53, _0x58f44a, _0x97c80b = Promise) {
    var _0x4ae88f = new _0x50c609(_0x22c174(_0xf8586e, _0x24927c, _0x4fdd53, _0x58f44a), _0x97c80b);
    if (_0x32b5e2.isGeneratorFunction(_0x24927c)) {
      return _0x4ae88f;
    } else {
      return _0x4ae88f.next().then(function (_0x5bccdd) {
        if (_0x5bccdd.done) {
          return _0x5bccdd.value;
        } else {
          return _0x4ae88f.next();
        }
      });
    }
  };
  _0x15194e(_0x13099f);
  _0x2caeaf(_0x13099f, _0x3d85a9, "Generator");
  _0x2caeaf(_0x13099f, _0x4443d5, function () {
    return this;
  });
  _0x2caeaf(_0x13099f, "toString", function () {
    return "[object Generator]";
  });
  _0x32b5e2.keys = function (_0x5ad7dd) {
    var _0xbf87e4 = Object(_0x5ad7dd);
    var _0xba11b3 = [];
    for (var _0x108daf in _0xbf87e4) {
      _0xba11b3.push(_0x108daf);
    }
    _0xba11b3.reverse();
    return function _0x59e46c() {
      while (_0xba11b3.length) {
        var _0x1d01e7 = _0xba11b3.pop();
        if (_0x1d01e7 in _0xbf87e4) {
          _0x59e46c.value = _0x1d01e7;
          _0x59e46c.done = false;
          return _0x59e46c;
        }
      }
      _0x59e46c.done = true;
      return _0x59e46c;
    };
  };
  _0x32b5e2.values = _0x488430;
  _0x418e9b.prototype = {
    constructor: _0x418e9b,
    reset: function _0x40c348(_0xd1815a) {
      this.prev = 0;
      this.next = 0;
      this.sent = this._sent = _0x50be72;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = _0x50be72;
      this.tryEntries.forEach(_0x3a7d56);
      if (!_0xd1815a) {
        for (var _0x13855c in this) {
          if (_0x13855c.charAt(0) === "t" && _0x587254.call(this, _0x13855c) && !isNaN(+_0x13855c.slice(1))) {
            this[_0x13855c] = _0x50be72;
          }
        }
      }
    },
    stop: function _0x4ae108() {
      this.done = true;
      var _0x321fb7 = this.tryEntries[0].completion;
      if (_0x321fb7.type === "throw") {
        throw _0x321fb7.arg;
      }
      return this.rval;
    },
    dispatchException: function _0x4a3235(_0x318f3a) {
      if (this.done) {
        throw _0x318f3a;
      }
      var _0x140597 = this;
      function _0x1fdbcd(_0x1611b9, _0x5a1e4e) {
        _0x515777.type = "throw";
        _0x515777.arg = _0x318f3a;
        _0x140597.next = _0x1611b9;
        if (_0x5a1e4e) {
          _0x140597.method = "next";
          _0x140597.arg = _0x50be72;
        }
        return !!_0x5a1e4e;
      }
      for (var _0x29b3be = this.tryEntries.length - 1; _0x29b3be >= 0; --_0x29b3be) {
        var _0x31334b = this.tryEntries[_0x29b3be];
        var _0x515777 = _0x31334b.completion;
        if (_0x31334b.tryLoc === "root") {
          return _0x1fdbcd("end");
        }
        if (_0x31334b.tryLoc <= this.prev) {
          var _0x3fd518 = _0x587254.call(_0x31334b, "catchLoc");
          var _0x3ff8f5 = _0x587254.call(_0x31334b, "finallyLoc");
          if (_0x3fd518 && _0x3ff8f5) {
            if (this.prev < _0x31334b.catchLoc) {
              return _0x1fdbcd(_0x31334b.catchLoc, true);
            }
            if (this.prev < _0x31334b.finallyLoc) {
              return _0x1fdbcd(_0x31334b.finallyLoc);
            }
          } else if (_0x3fd518) {
            if (this.prev < _0x31334b.catchLoc) {
              return _0x1fdbcd(_0x31334b.catchLoc, true);
            }
          } else {
            if (!_0x3ff8f5) {
              throw Error("try statement without catch or finally");
            }
            if (this.prev < _0x31334b.finallyLoc) {
              return _0x1fdbcd(_0x31334b.finallyLoc);
            }
          }
        }
      }
    },
    abrupt: function _0x52b7a6(_0x2e9350, _0x1dc34e) {
      for (var _0x23f3f9 = this.tryEntries.length - 1; _0x23f3f9 >= 0; --_0x23f3f9) {
        var _0x2761dc = this.tryEntries[_0x23f3f9];
        if (_0x2761dc.tryLoc <= this.prev && _0x587254.call(_0x2761dc, "finallyLoc") && this.prev < _0x2761dc.finallyLoc) {
          var _0x599942 = _0x2761dc;
          break;
        }
      }
      if (_0x599942 && (_0x2e9350 === "break" || _0x2e9350 === "continue") && _0x599942.tryLoc <= _0x1dc34e && _0x1dc34e <= _0x599942.finallyLoc) {
        _0x599942 = null;
      }
      var _0x5a1114 = _0x599942 ? _0x599942.completion : {};
      _0x5a1114.type = _0x2e9350;
      _0x5a1114.arg = _0x1dc34e;
      if (_0x599942) {
        this.method = "next";
        this.next = _0x599942.finallyLoc;
        return _0x343709;
      } else {
        return this.complete(_0x5a1114);
      }
    },
    complete: function _0x2957e7(_0x55b3a2, _0x4fe359) {
      if (_0x55b3a2.type === "throw") {
        throw _0x55b3a2.arg;
      }
      if (_0x55b3a2.type === "break" || _0x55b3a2.type === "continue") {
        this.next = _0x55b3a2.arg;
      } else if (_0x55b3a2.type === "return") {
        this.rval = this.arg = _0x55b3a2.arg;
        this.method = "return";
        this.next = "end";
      } else if (_0x55b3a2.type === "normal" && _0x4fe359) {
        this.next = _0x4fe359;
      }
      return _0x343709;
    },
    finish: function _0x2adbf9(_0x5c7b2a) {
      for (var _0x4f7478 = this.tryEntries.length - 1; _0x4f7478 >= 0; --_0x4f7478) {
        var _0x35dbe9 = this.tryEntries[_0x4f7478];
        if (_0x35dbe9.finallyLoc === _0x5c7b2a) {
          this.complete(_0x35dbe9.completion, _0x35dbe9.afterLoc);
          _0x3a7d56(_0x35dbe9);
          return _0x343709;
        }
      }
    },
    catch: function _0x3a7df1(_0x412535) {
      for (var _0x59fba7 = this.tryEntries.length - 1; _0x59fba7 >= 0; --_0x59fba7) {
        var _0x2ffeb5 = this.tryEntries[_0x59fba7];
        if (_0x2ffeb5.tryLoc === _0x412535) {
          var _0x16c7c3 = _0x2ffeb5.completion;
          if (_0x16c7c3.type === "throw") {
            var _0x38661c = _0x16c7c3.arg;
            _0x3a7d56(_0x2ffeb5);
          }
          return _0x38661c;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function _0x13f5ad(_0x2657a3, _0x20cef4, _0x44e3de) {
      this.delegate = {
        iterator: _0x488430(_0x2657a3),
        resultName: _0x20cef4,
        nextLoc: _0x44e3de
      };
      if (this.method === "next") {
        this.arg = _0x50be72;
      }
      return _0x343709;
    }
  };
  return _0x32b5e2;
}
function ownKeys(_0x183a77, _0x44111e) {
  var _0x23ecc3 = Object.keys(_0x183a77);
  if (Object.getOwnPropertySymbols) {
    var _0x42d55c = Object.getOwnPropertySymbols(_0x183a77);
    if (_0x44111e) {
      _0x42d55c = _0x42d55c.filter(function (_0x1869e3) {
        return Object.getOwnPropertyDescriptor(_0x183a77, _0x1869e3).enumerable;
      });
    }
    _0x23ecc3.push.apply(_0x23ecc3, _0x42d55c);
  }
  return _0x23ecc3;
}
function _objectSpread(_0x3cbed3) {
  for (var _0x4370e8 = 1; _0x4370e8 < arguments.length; _0x4370e8++) {
    var _0x26c2da = arguments[_0x4370e8] ?? {};
    if (_0x4370e8 % 2) {
      ownKeys(Object(_0x26c2da), true).forEach(function (_0x431ce7) {
        _defineProperty(_0x3cbed3, _0x431ce7, _0x26c2da[_0x431ce7]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(_0x3cbed3, Object.getOwnPropertyDescriptors(_0x26c2da));
    } else {
      ownKeys(Object(_0x26c2da)).forEach(function (_0x1e786c) {
        Object.defineProperty(_0x3cbed3, _0x1e786c, Object.getOwnPropertyDescriptor(_0x26c2da, _0x1e786c));
      });
    }
  }
  return _0x3cbed3;
}
function _defineProperty(_0x52026, _0x85dd48, _0x5142c7) {
  if ((_0x85dd48 = _toPropertyKey(_0x85dd48)) in _0x52026) {
    Object.defineProperty(_0x52026, _0x85dd48, {
      value: _0x5142c7,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x52026[_0x85dd48] = _0x5142c7;
  }
  return _0x52026;
}
function _toPropertyKey(_0x2265c2) {
  var _0x35a16f = _toPrimitive(_0x2265c2, "string");
  if (_typeof(_0x35a16f) == "symbol") {
    return _0x35a16f;
  } else {
    return _0x35a16f + "";
  }
}
function _toPrimitive(_0x424fb7, _0x51966f) {
  if (_typeof(_0x424fb7) != "object" || !_0x424fb7) {
    return _0x424fb7;
  }
  var _0x949e4d = _0x424fb7[Symbol.toPrimitive];
  if (_0x949e4d !== undefined) {
    var _0x187b25 = _0x949e4d.call(_0x424fb7, _0x51966f || "default");
    if (_typeof(_0x187b25) != "object") {
      return _0x187b25;
    }
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x51966f === "string" ? String : Number)(_0x424fb7);
}
function asyncGeneratorStep(_0x51e38c, _0x29daf3, _0x3c6cf6, _0x4dcc7a, _0x1b6c7f, _0x51ba52, _0x3995a1) {
  try {
    var _0x2ed126 = _0x51e38c[_0x51ba52](_0x3995a1);
    var _0x5ebfd9 = _0x2ed126.value;
  } catch (_0x2be141) {
    _0x3c6cf6(_0x2be141);
    return;
  }
  if (_0x2ed126.done) {
    _0x29daf3(_0x5ebfd9);
  } else {
    Promise.resolve(_0x5ebfd9).then(_0x4dcc7a, _0x1b6c7f);
  }
}
function _asyncToGenerator(_0x28eef6) {
  return function () {
    var _0x4d9d0f = this;
    var _0x324a2e = arguments;
    return new Promise(function (_0x544172, _0x5ead09) {
      var _0x256966 = _0x28eef6.apply(_0x4d9d0f, _0x324a2e);
      function _0x283018(_0x22ac25) {
        asyncGeneratorStep(_0x256966, _0x544172, _0x5ead09, _0x283018, _0x236160, "next", _0x22ac25);
      }
      function _0x236160(_0x44b6b0) {
        asyncGeneratorStep(_0x256966, _0x544172, _0x5ead09, _0x283018, _0x236160, "throw", _0x44b6b0);
      }
      _0x283018(undefined);
    });
  };
}
function _asyncIterator(_0x4a120b) {
  var _0x4a6cc0;
  var _0x2db489;
  var _0x4e01d4;
  var _0x5959f0 = 2;
  for (typeof Symbol != "undefined" && (_0x2db489 = Symbol.asyncIterator, _0x4e01d4 = Symbol.iterator); _0x5959f0--;) {
    if (_0x2db489 && (_0x4a6cc0 = _0x4a120b[_0x2db489]) != null) {
      return _0x4a6cc0.call(_0x4a120b);
    }
    if (_0x4e01d4 && (_0x4a6cc0 = _0x4a120b[_0x4e01d4]) != null) {
      return new AsyncFromSyncIterator(_0x4a6cc0.call(_0x4a120b));
    }
    _0x2db489 = "@@asyncIterator";
    _0x4e01d4 = "@@iterator";
  }
  throw new TypeError("Object is not async iterable");
}
function AsyncFromSyncIterator(_0x5cac61) {
  function _0x3b5732(_0x532406) {
    if (Object(_0x532406) !== _0x532406) {
      return Promise.reject(new TypeError(_0x532406 + " is not an object."));
    }
    var _0x4d5786 = _0x532406.done;
    return Promise.resolve(_0x532406.value).then(function (_0x3313be) {
      return {
        value: _0x3313be,
        done: _0x4d5786
      };
    });
  }
  AsyncFromSyncIterator = function _0x24c114(_0x52881f) {
    this.s = _0x52881f;
    this.n = _0x52881f.next;
  };
  AsyncFromSyncIterator.prototype = {
    s: null,
    n: null,
    next: function _0x1faa31() {
      return _0x3b5732(this.n.apply(this.s, arguments));
    },
    return: function _0x1e311b(_0x15abee) {
      var _0x49e63f = this.s.return;
      if (_0x49e63f === undefined) {
        return Promise.resolve({
          value: _0x15abee,
          done: true
        });
      } else {
        return _0x3b5732(_0x49e63f.apply(this.s, arguments));
      }
    },
    throw: function _0x48d65d(_0x597ad0) {
      var _0x2d7025 = this.s.return;
      if (_0x2d7025 === undefined) {
        return Promise.reject(_0x597ad0);
      } else {
        return _0x3b5732(_0x2d7025.apply(this.s, arguments));
      }
    }
  };
  return new AsyncFromSyncIterator(_0x5cac61);
}
require("./config");
var _require = require("@whiskeysockets/baileys");
var fstM = _require.proto;
var MNiG = _require.jidDecode;
var FDJu = _require.DisconnectReason;
var SMRu = _require.makeInMemoryStore;
var cXUW = _require.useMultiFileAuthState;
var HQyo = _require.fetchLatestBaileysVersion;
var BwIY = _require.downloadContentFromMessage;
var SovW = _require.getAggregateVotesInPollMessage;
var UceC = _require.generateWAMessageFromContent;
var keUC = _require.generateForwardMessageContent;
var tNfO = _require.default;
var djKa = require("lodash");
var GGUw = require("fs");
var DZfS = require("util");
var axqZ = require("pino");
var KjXs = require("path");
var ysyp = require("axios");
var bbSm = require("chalk");
var YjaL = require("yargs/yargs");
var oYLb = require("file-type");
function LsbR() {
  return _LsbR.apply(this, arguments);
}
function _LsbR() {
  _LsbR = _asyncToGenerator(_regeneratorRuntime().mark(function _0x447112() {
    var _0x340df9;
    var _0x1f9ffc;
    var _0x23bf10;
    var _0x480034;
    var _0x522c15;
    var _0x477f21;
    var _0x193991;
    var _0x3f85b9;
    var _0x29294c;
    var _0x32ad77;
    var _0x3dbcc9;
    var _0x2478b9;
    var _0x375974;
    var _0x1149d5;
    var _0x4d33ea;
    var _0x5cc859;
    var _0x40269b;
    var _0x3e472b;
    var _0x43f710;
    var _0x6f249c;
    var _0xff0c35;
    var _0x5e9592;
    var _0x24a8df;
    var _0x326e4a;
    return _regeneratorRuntime().wrap(function _0x40e15c(_0x4e3498) {
      while (1) {
        switch (_0x4e3498.prev = _0x4e3498.next) {
          case 0:
            _0xff0c35 = function _0x39468a() {
              _0xff0c35 = _asyncToGenerator(_regeneratorRuntime().mark(function _0x10b27f(_0x3cc8cd) {
                var _0x231ab3;
                var _0x47a41b;
                return _regeneratorRuntime().wrap(function _0x32444f(_0x271f7c) {
                  while (1) {
                    switch (_0x271f7c.prev = _0x271f7c.next) {
                      case 0:
                        _0x47a41b = 24;
                      case 1:
                        if (!(_0x47a41b < 29)) {
                          _0x271f7c.next = 15;
                          break;
                        }
                        _0x271f7c.t0 = _0x47a41b;
                        _0x271f7c.next = _0x271f7c.t0 === 24 ? 5 : _0x271f7c.t0 === 28 ? 7 : 13;
                        break;
                      case 5:
                        _0x47a41b = _0x23bf10 ? 28 : 29;
                        return _0x271f7c.abrupt("break", 13);
                      case 7:
                        _0x47a41b = 29;
                        _0x271f7c.next = 10;
                        return _0x23bf10.loadMessage(_0x3cc8cd.remoteJid, _0x3cc8cd.id);
                      case 10:
                        _0x231ab3 = _0x271f7c.sent;
                        return _0x271f7c.abrupt("return", _0x231ab3?.message);
                      case 13:
                        _0x271f7c.next = 1;
                        break;
                      case 15:
                        return _0x271f7c.abrupt("return", _defineProperty({}, "conversation", "Hi, I`m RaditX7 :D"));
                      case 16:
                      case "end":
                        return _0x271f7c.stop();
                    }
                  }
                }, _0x10b27f);
              }));
              return _0xff0c35.apply(this, arguments);
            };
            _0x6f249c = function _0x565cb7(_0x3ff526) {
              return _0xff0c35.apply(this, arguments);
            };
            _0x340df9 = {};
            _0x340df9.status = true;
            _0x1f9ffc = _0x340df9;
            _0x23bf10 = SMRu(_defineProperty({}, "logger", axqZ().child(_defineProperty(_defineProperty({}, "level", "silent"), "stream", "store"))));
            _0x4e3498.next = 8;
            return cXUW("session");
          case 8:
            _0x480034 = _0x4e3498.sent;
            _0x522c15 = _0x480034.state;
            _0x477f21 = _0x480034.saveCreds;
            _0x4e3498.next = 13;
            return HQyo();
          case 13:
            _0x193991 = _0x4e3498.sent;
            _0x3f85b9 = _0x193991.version;
            _0x29294c = _0x193991.isLatest;
            _0x32ad77 = new YShhB();
            _0x3dbcc9 = tNfO(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "isLatest", null == undefined), "keepAliveIntervalMs", 50000), "printQRInTerminal", !usePairingCode), "logger", axqZ(_defineProperty({}, "level", "silent"))), "auth", _0x522c15), "browser", ["Linux", "Chrome", "20.0.04"]), "generateHighQualityLinkPreview", [null] == ""), "resolveMsgBuffer", null == undefined));
            _0x5e9592 = 29;
          case 19:
            if (!(_0x5e9592 < 39)) {
              _0x4e3498.next = 60;
              break;
            }
            _0x4e3498.t0 = _0x5e9592;
            _0x4e3498.next = _0x4e3498.t0 === 7 ? 23 : _0x4e3498.t0 === 29 ? 56 : 58;
            break;
          case 23:
            _0x5e9592 = 39;
            _0x2478b9 = "";
            _0x4e3498.next = 27;
            return ImMmL("[❗ ] Whatsappp Number\\n\\n ✅ EXAMPLE : 99999999999\\n ✅ EXAMPLE : 088227870410\\n ✅ EXAMPLE : \\n\\n 🈴 Number:");
          case 27:
            _0x375974 = _0x4e3498.sent;
            _0x1149d5 = DZfS.format(_0x375974).replace(new RegExp("[()+-/ +/]", "gi"), "").trim();
            _0x4d33ea = _0x1149d5.startsWith("08") ? _0x1149d5.replace("08", "628") : _0x1149d5;
            _0x4e3498.t1 = Array;
            _0x4e3498.next = 33;
            return _0x3dbcc9.requestPairingCode(_0x4d33ea);
          case 33:
            _0x4e3498.t2 = _0x4e3498.sent;
            _0x5cc859 = _0x4e3498.t1.from.call(_0x4e3498.t1, _0x4e3498.t2);
            _0x40269b = 0;
            _0x3e472b = _0x5cc859;
          case 36:
            if (!(_0x40269b < _0x3e472b.length)) {
              _0x4e3498.next = 54;
              break;
            }
            _0x43f710 = _0x3e472b[_0x40269b];
            _0x24a8df = 37;
          case 39:
            if (!(_0x24a8df < 38)) {
              _0x4e3498.next = 50;
              break;
            }
            _0x4e3498.t3 = _0x24a8df;
            _0x4e3498.next = _0x4e3498.t3 === 37 ? 43 : _0x4e3498.t3 === 18 ? 45 : 48;
            break;
          case 43:
            _0x24a8df = _0x2478b9.length == 4 ? 18 : 38;
            return _0x4e3498.abrupt("break", 48);
          case 45:
            _0x24a8df = 38;
            _0x2478b9 += "-";
            return _0x4e3498.abrupt("break", 48);
          case 48:
            _0x4e3498.next = 39;
            break;
          case 50:
            _0x2478b9 += _0x43f710;
          case 51:
            _0x40269b++;
            _0x4e3498.next = 36;
            break;
          case 54:
            console.log(bbSm.keyword("aqua")("[ CODE WHATSAPP ]"), _0x2478b9);
            return _0x4e3498.abrupt("break", 58);
          case 56:
            _0x5e9592 = usePairingCode && !_0x3dbcc9.authState.creds.registered ? 7 : 39;
            return _0x4e3498.abrupt("break", 58);
          case 58:
            _0x4e3498.next = 19;
            break;
          case 60:
            global.opts = new Object(YjaL(process.argv.slice(0 ? 13 : 2)).exitProcess([0] == "").parse());
            global.db = new izwEN(/https?:\/\//.test(opts.db || "") ? new cloudDBAdapter(opts.db) : /mongodb/.test(opts.db) ? new ATFkl(opts.db) : new piTGg("./database/db.json"));
            global.DATABASE = global.db;
            global.loadDatabase = function () {
              var _0x499ef9 = _asyncToGenerator(_regeneratorRuntime().mark(function _0x301a94() {
                var _0x53157c;
                var _0x11c105;
                return _regeneratorRuntime().wrap(function _0x335647(_0x1c65ce) {
                  while (1) {
                    switch (_0x1c65ce.prev = _0x1c65ce.next) {
                      case 0:
                        _0x53157c = 24;
                      case 1:
                        if (!(_0x53157c < 29)) {
                          _0x1c65ce.next = 11;
                          break;
                        }
                        _0x1c65ce.t0 = _0x53157c;
                        _0x1c65ce.next = _0x1c65ce.t0 === 24 ? 5 : _0x1c65ce.t0 === 28 ? 7 : 9;
                        break;
                      case 5:
                        _0x53157c = global.db.READ ? 28 : 29;
                        return _0x1c65ce.abrupt("break", 9);
                      case 7:
                        _0x53157c = 29;
                        return _0x1c65ce.abrupt("return", new Promise(function (_0x317d66) {
                          return setInterval(function () {
                            if (!global.db.READ) {
                              clearInterval(this);
                              _0x317d66(global.db.data == null ? global.loadDatabase() : global.db.data);
                            } else {
                              null;
                            }
                          }, 1000);
                        }));
                      case 9:
                        _0x1c65ce.next = 1;
                        break;
                      case 11:
                        _0x11c105 = 24;
                      case 12:
                        if (!(_0x11c105 < 29)) {
                          _0x1c65ce.next = 22;
                          break;
                        }
                        _0x1c65ce.t1 = _0x11c105;
                        _0x1c65ce.next = _0x1c65ce.t1 === 24 ? 16 : _0x1c65ce.t1 === 28 ? 18 : 20;
                        break;
                      case 16:
                        _0x11c105 = global.db.data !== null ? 28 : 29;
                        return _0x1c65ce.abrupt("break", 20);
                      case 18:
                        _0x11c105 = 29;
                        return _0x1c65ce.abrupt("return");
                      case 20:
                        _0x1c65ce.next = 12;
                        break;
                      case 22:
                        global.db.READ = 1 == "1";
                        _0x1c65ce.next = 25;
                        return global.db.read();
                      case 25:
                        global.db.READ = NaN === NaN;
                        global.db.data = _objectSpread(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "users", {}), "chats", {}), "game", {}), "database", {}), "settings", {}), "setting", {}), "others", {}), "sticker", {}), global.db.data || {});
                        global.db.chain = djKa.chain(global.db.data);
                      case 28:
                      case "end":
                        return _0x1c65ce.stop();
                    }
                  }
                }, _0x301a94);
              }));
              function _0x5cdcd7() {
                return _0x499ef9.apply(this, arguments);
              }
              return _0x5cdcd7;
            }();
            loadDatabase();
            _0x326e4a = 23;
          case 66:
            if (!(_0x326e4a < 30)) {
              _0x4e3498.next = 77;
              break;
            }
            _0x4e3498.t4 = _0x326e4a;
            _0x4e3498.next = _0x4e3498.t4 === 27 ? 70 : _0x4e3498.t4 === 23 ? 73 : 75;
            break;
          case 70:
            _0x326e4a = 30;
            setInterval(_asyncToGenerator(_regeneratorRuntime().mark(function _0x2812fa() {
              var _0x51a21d;
              return _regeneratorRuntime().wrap(function _0x4fe775(_0x243d34) {
                while (1) {
                  switch (_0x243d34.prev = _0x243d34.next) {
                    case 0:
                      _0x51a21d = 21;
                    case 1:
                      if (!(_0x51a21d < 38)) {
                        _0x243d34.next = 13;
                        break;
                      }
                      _0x243d34.t0 = _0x51a21d;
                      _0x243d34.next = _0x243d34.t0 === 21 ? 5 : _0x243d34.t0 === 20 ? 7 : 11;
                      break;
                    case 5:
                      _0x51a21d = global.db.data ? 20 : 38;
                      return _0x243d34.abrupt("break", 11);
                    case 7:
                      _0x51a21d = 38;
                      _0x243d34.next = 10;
                      return global.db.write();
                    case 10:
                      return _0x243d34.abrupt("break", 11);
                    case 11:
                      _0x243d34.next = 1;
                      break;
                    case 13:
                    case "end":
                      return _0x243d34.stop();
                  }
                }
              }, _0x2812fa);
            })), 30000);
            return _0x4e3498.abrupt("break", 75);
          case 73:
            _0x326e4a = global.db ? 27 : 30;
            return _0x4e3498.abrupt("break", 75);
          case 75:
            _0x4e3498.next = 66;
            break;
          case 77:
            _0x3dbcc9.decodeJid = function (_0x33d709) {
              _0x1b4c9f = 19;
              while (_0x1b4c9f < 29) {
                switch (_0x1b4c9f) {
                  case 19:
                    _0x1b4c9f = !_0x33d709 ? 26 : 29;
                    break;
                  case 26:
                    _0x1b4c9f = 29;
                    return _0x33d709;
                }
              }
              _0x4764b2 = 18;
              while (_0x4764b2 < 28) {
                switch (_0x4764b2) {
                  case 27:
                    _0x4764b2 = 28;
                    return _0x33d709;
                  case 23:
                    _0x4764b2 = 28;
                    {
                      var _0x382751 = MNiG(_0x33d709) || {};
                      return _0x382751.user && _0x382751.server && _0x382751.user + "@" + _0x382751.server || _0x33d709;
                    }
                    break;
                  case 18:
                    _0x4764b2 = /:\d+@/gi.test(_0x33d709) ? 23 : 27;
                    break;
                }
              }
              var _0x1b4c9f;
              var _0x4764b2;
            };
            _0x3dbcc9.ev.on("contacts.update", function (_0x5b48e3) {
              var _0x3b1750 = _createForOfIteratorHelper(_0x5b48e3);
              var _0x4e441a;
              try {
                for (_0x3b1750.s(); !(_0x4e441a = _0x3b1750.n()).done;) {
                  var _0x442e8e = _0x4e441a.value;
                  var _0x510a0b = _0x3dbcc9.decodeJid(_0x442e8e.id);
                  _0x31ab11 = 37;
                  while (_0x31ab11 < 38) {
                    switch (_0x31ab11) {
                      case 37:
                        _0x31ab11 = _0x23bf10 && _0x23bf10.contacts ? 18 : 38;
                        break;
                      case 18:
                        _0x31ab11 = 38;
                        _0x23bf10.contacts[_0x510a0b] = _defineProperty(_defineProperty({}, "id", _0x510a0b), "name", _0x442e8e.notify);
                        break;
                    }
                  }
                }
              } catch (_0x2e52df) {
                _0x3b1750.e(_0x2e52df);
              } finally {
                _0x3b1750.f();
              }
              var _0x31ab11;
            });
            _0x3dbcc9.getName = function (_0x55d37d, _0x4b51a0 = null === undefined) {
              id = _0x3dbcc9.decodeJid(_0x55d37d);
              _0x4b51a0 = _0x3dbcc9.withoutContact || _0x4b51a0;
              var _0x4b3794;
              _0x57db0b = 37;
              while (_0x57db0b < 38) {
                switch (_0x57db0b) {
                  case 23:
                    _0x57db0b = 38;
                    _0x5bb0bb = 7;
                    while (_0x5bb0bb < 39) {
                      switch (_0x5bb0bb) {
                        case 38:
                          _0x5bb0bb = 39;
                          {
                            if (id == _0x3dbcc9.decodeJid(_0x3dbcc9.user.id)) {
                              _0x3dbcc9.user;
                            } else if (!_0x23bf10.contacts[id]) {
                              ({});
                            }
                            return (_0x4b51a0 ? "" : _0x4b3794.name) || _0x4b3794.subject || _0x4b3794.verifiedName || NxsFV("+" + _0x55d37d.replace("@s.whatsapp.net", "")).getNumber("international");
                          }
                          break;
                        case 11:
                          _0x5bb0bb = 39;
                          {
                            return _defineProperty(_defineProperty({}, "id", id), "name", "WhatsApp");
                          }
                          break;
                        case 7:
                          _0x5bb0bb = id == "0@s.whatsapp.net" ? 11 : 38;
                          break;
                      }
                    }
                    break;
                  case 37:
                    _0x57db0b = id.endsWith("@g.us") ? 18 : 23;
                    break;
                  case 18:
                    _0x57db0b = 38;
                    {
                      return new Promise(function () {
                        var _0x2bf44e = _asyncToGenerator(_regeneratorRuntime().mark(function _0x285ac5(_0x3c578d) {
                          var _0x30cc68;
                          return _regeneratorRuntime().wrap(function _0x50932a(_0xd52a2b) {
                            while (1) {
                              switch (_0xd52a2b.prev = _0xd52a2b.next) {
                                case 0:
                                  _0x4b3794 = _0x23bf10.contacts[id] || {};
                                  _0x30cc68 = 27;
                                case 2:
                                  if (!(_0x30cc68 < 30)) {
                                    _0xd52a2b.next = 13;
                                    break;
                                  }
                                  _0xd52a2b.t0 = _0x30cc68;
                                  _0xd52a2b.next = _0xd52a2b.t0 === 27 ? 6 : _0xd52a2b.t0 === 16 ? 8 : 11;
                                  break;
                                case 6:
                                  _0x30cc68 = !_0x4b3794.name && !_0x4b3794.subject ? 16 : 30;
                                  return _0xd52a2b.abrupt("break", 11);
                                case 8:
                                  _0x30cc68 = 30;
                                  _0x4b3794 = _0x3dbcc9.groupMetadata(id) || {};
                                  return _0xd52a2b.abrupt("break", 11);
                                case 11:
                                  _0xd52a2b.next = 2;
                                  break;
                                case 13:
                                  _0x3c578d(_0x4b3794.name || _0x4b3794.subject || NxsFV("+" + id.replace("@s.whatsapp.net", "")).getNumber("international"));
                                case 14:
                                case "end":
                                  return _0xd52a2b.stop();
                              }
                            }
                          }, _0x285ac5);
                        }));
                        return function (_0x76147e) {
                          return _0x2bf44e.apply(this, arguments);
                        };
                      }());
                    }
                    break;
                }
              }
              var _0x57db0b;
              var _0x5bb0bb;
            };
            _0x3dbcc9.sendContact = function () {
              var _0x14762c = _asyncToGenerator(_regeneratorRuntime().mark(function _0x18092e(_0x2d5d0e, _0x4f1833) {
                var _0x4e3f1f;
                var _0x477303;
                var _0x1f750a;
                var _0x37241d;
                var _0x4b60af;
                var _0xd2f671;
                var _0x5d0378 = arguments;
                return _regeneratorRuntime().wrap(function _0x4cb7ec(_0x1b858a) {
                  while (1) {
                    switch (_0x1b858a.prev = _0x1b858a.next) {
                      case 0:
                        _0x4e3f1f = _0x5d0378.length > 2 && _0x5d0378[2] !== undefined ? _0x5d0378[2] : "";
                        _0x477303 = _0x5d0378.length > 3 && _0x5d0378[3] !== undefined ? _0x5d0378[3] : {};
                        _0x1f750a = [];
                        _0x37241d = _createForOfIteratorHelper(_0x4f1833);
                        _0x1b858a.prev = 4;
                        _0x37241d.s();
                      case 6:
                        if ((_0x4b60af = _0x37241d.n()).done) {
                          _0x1b858a.next = 29;
                          break;
                        }
                        _0xd2f671 = _0x4b60af.value;
                        _0x1b858a.t0 = _0x1f750a;
                        _0x1b858a.t1 = _defineProperty;
                        _0x1b858a.t2 = _defineProperty;
                        _0x1b858a.t3 = {};
                        _0x1b858a.next = 14;
                        return vision.getName(_0xd2f671);
                      case 14:
                        _0x1b858a.t4 = _0x1b858a.sent;
                        _0x1b858a.t5 = (0, _0x1b858a.t2)(_0x1b858a.t3, "displayName", _0x1b858a.t4);
                        _0x1b858a.t7 = "BEGIN:VCARD\\nVERSION:3.0\\nN:";
                        _0x1b858a.next = 19;
                        return _0x3dbcc9.getName(_0xd2f671);
                      case 19:
                        _0x1b858a.t8 = _0x1b858a.sent;
                        _0x1b858a.t6 = _0x1b858a.t7.concat.call(_0x1b858a.t7, _0x1b858a.t8, "\\nFN:");
                        _0x1b858a.next = 23;
                        return _0x3dbcc9.getName(_0xd2f671);
                      case 23:
                        _0x1b858a.t9 = _0x1b858a.sent;
                        _0x1b858a.t10 = _0x1b858a.t6.concat.call(_0x1b858a.t6, _0x1b858a.t9, "\\nitem1.TEL;waid=").concat(_0xd2f671.split("@")[0], ":").concat(_0xd2f671.split("@")[0], "\\nitem1.X-ABLabel:Ponsel\\nEND:VCARD");
                        _0x1b858a.t11 = (0, _0x1b858a.t1)(_0x1b858a.t5, "vcard", _0x1b858a.t10);
                        _0x1b858a.t0.push.call(_0x1b858a.t0, _0x1b858a.t11);
                      case 27:
                        _0x1b858a.next = 6;
                        break;
                      case 29:
                        _0x1b858a.next = 34;
                        break;
                      case 31:
                        _0x1b858a.prev = 31;
                        _0x1b858a.t12 = _0x1b858a.catch(4);
                        _0x37241d.e(_0x1b858a.t12);
                      case 34:
                        _0x1b858a.prev = 34;
                        _0x37241d.f();
                        return _0x1b858a.finish(34);
                      case 37:
                        _0x3dbcc9.sendMessage(_0x2d5d0e, _objectSpread(_defineProperty({}, "contacts", _defineProperty(_defineProperty({}, "displayName", `${_0x1f750a.length} Kontak`), "contacts", _0x1f750a)), _0x477303), _defineProperty({}, "quoted", _0x4e3f1f));
                      case 38:
                      case "end":
                        return _0x1b858a.stop();
                    }
                  }
                }, _0x18092e, null, [[4, 31, 34, 37]]);
              }));
              return function (_0x446876, _0x2f14b6) {
                return _0x14762c.apply(this, arguments);
              };
            }();
            _0x3dbcc9.ev.on("connection.update", function () {
              var _0x1d8b86 = _asyncToGenerator(_regeneratorRuntime().mark(function _0x362704(_0x2c324e) {
                var _0x1d3eaf;
                var _0x8cfc0;
                var _0x3d7874;
                var _0x2b930a;
                var _0x49cecb;
                var _0x10acb1;
                var _0x3deb21;
                var _0x229701;
                var _0x14151b;
                var _0x1b0bda;
                var _0x340777;
                var _0x162498;
                var _0x122aa8;
                var _0x2c9f73;
                var _0x3b8a10;
                var _0x426c84;
                var _0x49f68d;
                var _0x25fc52;
                var _0x5e8ec9;
                var _0x2ff1dc;
                var _0x4f48af;
                var _0x5a1c42;
                var _0x31c4cd;
                return _regeneratorRuntime().wrap(function _0x467c8e(_0x54560a) {
                  while (1) {
                    switch (_0x54560a.prev = _0x54560a.next) {
                      case 0:
                        _0x3d7874 = _0x2c324e.connection;
                        _0x2b930a = _0x2c324e.lastDisconnect;
                        _0x49cecb = _0x2c324e.receivedPendingNotifications;
                        _0x229701 = 28;
                      case 2:
                        if (!(_0x229701 < 29)) {
                          _0x54560a.next = 226;
                          break;
                        }
                        _0x54560a.t0 = _0x229701;
                        _0x54560a.next = _0x54560a.t0 === 13 ? 6 : _0x54560a.t0 === 14 ? 9 : _0x54560a.t0 === 28 ? 222 : 224;
                        break;
                      case 6:
                        _0x229701 = 29;
                        console.log("Connecting...");
                        return _0x54560a.abrupt("break", 224);
                      case 9:
                        _0x229701 = 29;
                        _0x14151b = 22;
                      case 11:
                        if (!(_0x14151b < 26)) {
                          _0x54560a.next = 221;
                          break;
                        }
                        _0x54560a.t1 = _0x14151b;
                        _0x54560a.next = _0x54560a.t1 === 25 ? 15 : _0x54560a.t1 === 22 ? 86 : _0x54560a.t1 === 17 ? 88 : 219;
                        break;
                      case 15:
                        _0x14151b = 26;
                        _0x1b0bda = 26;
                      case 17:
                        if (!(_0x1b0bda < 29)) {
                          _0x54560a.next = 73;
                          break;
                        }
                        _0x54560a.t2 = _0x1b0bda;
                        _0x54560a.next = _0x54560a.t2 === 24 ? 21 : _0x54560a.t2 === 26 ? 69 : 71;
                        break;
                      case 21:
                        _0x1b0bda = 29;
                        _0x340777 = 7;
                      case 23:
                        if (!(_0x340777 < 39)) {
                          _0x54560a.next = 68;
                          break;
                        }
                        _0x54560a.t3 = _0x340777;
                        _0x54560a.next = _0x54560a.t3 === 38 ? 27 : _0x54560a.t3 === 11 ? 45 : _0x54560a.t3 === 7 ? 64 : 66;
                        break;
                      case 27:
                        _0x340777 = 39;
                        _0x162498 = 37;
                      case 29:
                        if (!(_0x162498 < 38)) {
                          _0x54560a.next = 44;
                          break;
                        }
                        _0x54560a.t4 = _0x162498;
                        _0x54560a.next = _0x54560a.t4 === 23 ? 33 : _0x54560a.t4 === 18 ? 36 : _0x54560a.t4 === 37 ? 40 : 42;
                        break;
                      case 33:
                        _0x162498 = 38;
                        console.log(bbSm.whiteBright("├"), bbSm.keyword("aqua")("[ CONNECT ]"), "𝐂𝐨𝐧𝐧𝐜𝐞𝐭𝐢𝐧𝐠 𝐁𝐨𝐭 𝐁𝐲 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨〽️");
                        return _0x54560a.abrupt("break", 42);
                      case 36:
                        _0x162498 = 38;
                        _0x3dbcc9.sendMessage("99999999999@s.whatsapp.net", _defineProperty({}, "text", "*BOT CONNECT*\\n\\nBOT NUMBER : ❌\\nOWNER NUMBER : ✅"));
                        console.log(bbSm.whiteBright("├"), bbSm.keyword("aqua")("[ CONNECT ]"), "Nomer Bot Kamu Tidak Masuk Ke Dalam Database, Harap Hubungi Owner");
                        return _0x54560a.abrupt("break", 42);
                      case 40:
                        _0x162498 = !ZUfXw.includes(_0x3dbcc9.decodeJid(_0x3dbcc9 === null || _0x3dbcc9 === undefined || (_0x1d3eaf = _0x3dbcc9.user) === null || _0x1d3eaf === undefined ? undefined : _0x1d3eaf.id)) ? 18 : 23;
                        return _0x54560a.abrupt("break", 42);
                      case 42:
                        _0x54560a.next = 29;
                        break;
                      case 44:
                        return _0x54560a.abrupt("break", 66);
                      case 45:
                        _0x340777 = 39;
                        _0x122aa8 = 30;
                      case 47:
                        if (!(_0x122aa8 < 31)) {
                          _0x54560a.next = 63;
                          break;
                        }
                        _0x54560a.t5 = _0x122aa8;
                        _0x54560a.next = _0x54560a.t5 === 30 ? 51 : _0x54560a.t5 === 10 ? 53 : _0x54560a.t5 === 22 ? 57 : 61;
                        break;
                      case 51:
                        _0x122aa8 = !ZUfXw.includes(_0x3dbcc9.decodeJid(_0x3dbcc9 === null || _0x3dbcc9 === undefined || (_0x8cfc0 = _0x3dbcc9.user) === null || _0x8cfc0 === undefined ? undefined : _0x8cfc0.id)) ? 10 : 22;
                        return _0x54560a.abrupt("break", 61);
                      case 53:
                        _0x122aa8 = 31;
                        _0x3dbcc9.sendMessage("99999999999@s.whatsapp.net", _defineProperty({}, "text", "*BOT CONNECT*\\n\\nBOT NUMBER : ❌\\nOWNER NUMBER : ❌"));
                        console.log(bbSm.whiteBright("├"), bbSm.keyword("aqua")("[ CONNECT ]"), "Nomer Owner Kamu Dan Nomer Bot Kamu Tidak Masuk Ke Dalam Database");
                        return _0x54560a.abrupt("break", 61);
                      case 57:
                        _0x122aa8 = 31;
                        _0x3dbcc9.sendMessage("99999999999@s.whatsapp.net", _defineProperty({}, "text", "*BOT CONNECT*\\n\\nBOT NUMBER : ✅\\nOWNER NUMBER : ❌"));
                        console.log(bbSm.whiteBright("├"), bbSm.keyword("aqua")("[ CONNECT ]"), "Nomer Owner Kamu Tidak Masuk Ke Dalam Database, Harap Hubungi Owner");
                        return _0x54560a.abrupt("break", 61);
                      case 61:
                        _0x54560a.next = 47;
                        break;
                      case 63:
                        return _0x54560a.abrupt("break", 66);
                      case 64:
                        _0x340777 = global.owner.filter(function (_0x470522) {
                          return KwJvN.includes(_0x470522);
                        }).length < global.owner.length ? 11 : 38;
                        return _0x54560a.abrupt("break", 66);
                      case 66:
                        _0x54560a.next = 23;
                        break;
                      case 68:
                        return _0x54560a.abrupt("break", 71);
                      case 69:
                        _0x1b0bda = _0x1f9ffc !== null && _0x1f9ffc !== undefined && _0x1f9ffc.status ? 24 : 29;
                        return _0x54560a.abrupt("break", 71);
                      case 71:
                        _0x54560a.next = 17;
                        break;
                      case 73:
                        _0x2c9f73 = 20;
                      case 74:
                        if (!(_0x2c9f73 < 38)) {
                          _0x54560a.next = 85;
                          break;
                        }
                        _0x54560a.t6 = _0x2c9f73;
                        _0x54560a.next = _0x54560a.t6 === 20 ? 78 : _0x54560a.t6 === 37 ? 80 : 83;
                        break;
                      case 78:
                        _0x2c9f73 = _0x1f9ffc?.status == (null == undefined) ? 37 : 38;
                        return _0x54560a.abrupt("break", 83);
                      case 80:
                        _0x2c9f73 = 38;
                        _0x1f9ffc.status = 1 === "1";
                        return _0x54560a.abrupt("break", 83);
                      case 83:
                        _0x54560a.next = 74;
                        break;
                      case 85:
                        return _0x54560a.abrupt("break", 219);
                      case 86:
                        _0x14151b = _0x3d7874 == "open" || _0x49cecb == ([null] == "") ? 25 : 17;
                        return _0x54560a.abrupt("break", 219);
                      case 88:
                        _0x14151b = 26;
                        _0x3b8a10 = 12;
                      case 90:
                        if (!(_0x3b8a10 < 37)) {
                          _0x54560a.next = 218;
                          break;
                        }
                        _0x54560a.t7 = _0x3b8a10;
                        _0x54560a.next = _0x54560a.t7 === 9 ? 94 : _0x54560a.t7 === 12 ? 214 : 216;
                        break;
                      case 94:
                        _0x3b8a10 = 37;
                        _0x3deb21 = (_0x10acb1 = new ObneJ(_0x2b930a?.error)) === null || _0x10acb1 === undefined || (_0x10acb1 = _0x10acb1.output) === null || _0x10acb1 === undefined ? undefined : _0x10acb1.statusCode;
                        _0x426c84 = 7;
                      case 97:
                        if (!(_0x426c84 < 39)) {
                          _0x54560a.next = 213;
                          break;
                        }
                        _0x54560a.t8 = _0x426c84;
                        _0x54560a.next = _0x54560a.t8 === 11 ? 101 : _0x54560a.t8 === 38 ? 104 : _0x54560a.t8 === 7 ? 209 : 211;
                        break;
                      case 101:
                        _0x426c84 = 39;
                        LsbR();
                        return _0x54560a.abrupt("break", 211);
                      case 104:
                        _0x426c84 = 39;
                        _0x49f68d = 27;
                      case 106:
                        if (!(_0x49f68d < 30)) {
                          _0x54560a.next = 208;
                          break;
                        }
                        _0x54560a.t9 = _0x49f68d;
                        _0x54560a.next = _0x54560a.t9 === 27 ? 110 : _0x54560a.t9 === 16 ? 112 : _0x54560a.t9 === 29 ? 116 : 206;
                        break;
                      case 110:
                        _0x49f68d = _0x3deb21 == FDJu.badSession ? 16 : 29;
                        return _0x54560a.abrupt("break", 206);
                      case 112:
                        _0x49f68d = 30;
                        console.log(bbSm.whiteBright("├"), bbSm.keyword("red")("[ ERROR ]"), "Bad Session File, Please Delete Session and Scan Again");
                        LsbR();
                        return _0x54560a.abrupt("break", 206);
                      case 116:
                        _0x49f68d = 30;
                        _0x25fc52 = 16;
                      case 118:
                        if (!(_0x25fc52 < 30)) {
                          _0x54560a.next = 205;
                          break;
                        }
                        _0x54560a.t10 = _0x25fc52;
                        _0x54560a.next = _0x54560a.t10 === 7 ? 122 : _0x54560a.t10 === 29 ? 197 : _0x54560a.t10 === 16 ? 201 : 203;
                        break;
                      case 122:
                        _0x25fc52 = 30;
                        _0x5e8ec9 = 26;
                      case 124:
                        if (!(_0x5e8ec9 < 29)) {
                          _0x54560a.next = 196;
                          break;
                        }
                        _0x54560a.t11 = _0x5e8ec9;
                        _0x54560a.next = _0x54560a.t11 === 26 ? 128 : _0x54560a.t11 === 24 ? 130 : _0x54560a.t11 === 28 ? 134 : 194;
                        break;
                      case 128:
                        _0x5e8ec9 = _0x3deb21 == FDJu.connectionLost ? 24 : 28;
                        return _0x54560a.abrupt("break", 194);
                      case 130:
                        _0x5e8ec9 = 29;
                        console.log(bbSm.whiteBright("├"), bbSm.keyword("red")("[ ERROR ]"), "Connection Lost from Server, reconnecting....");
                        LsbR();
                        return _0x54560a.abrupt("break", 194);
                      case 134:
                        _0x5e8ec9 = 29;
                        _0x2ff1dc = 22;
                      case 136:
                        if (!(_0x2ff1dc < 26)) {
                          _0x54560a.next = 193;
                          break;
                        }
                        _0x54560a.t12 = _0x2ff1dc;
                        _0x54560a.next = _0x54560a.t12 === 17 ? 140 : _0x54560a.t12 === 25 ? 185 : _0x54560a.t12 === 22 ? 189 : 191;
                        break;
                      case 140:
                        _0x2ff1dc = 26;
                        _0x4f48af = 23;
                      case 142:
                        if (!(_0x4f48af < 30)) {
                          _0x54560a.next = 184;
                          break;
                        }
                        _0x54560a.t13 = _0x4f48af;
                        _0x54560a.next = _0x54560a.t13 === 27 ? 146 : _0x54560a.t13 === 23 ? 150 : _0x54560a.t13 === 16 ? 152 : 182;
                        break;
                      case 146:
                        _0x4f48af = 30;
                        console.log(bbSm.whiteBright("├"), bbSm.keyword("red")("[ ERROR ]"), "Device Logged Out, Please Scan Again And Run.");
                        _0x3dbcc9.logout();
                        return _0x54560a.abrupt("break", 182);
                      case 150:
                        _0x4f48af = _0x3deb21 == FDJu.loggedOut ? 27 : 16;
                        return _0x54560a.abrupt("break", 182);
                      case 152:
                        _0x4f48af = 30;
                        _0x5a1c42 = 10;
                      case 154:
                        if (!(_0x5a1c42 < 26)) {
                          _0x54560a.next = 181;
                          break;
                        }
                        _0x54560a.t14 = _0x5a1c42;
                        _0x54560a.next = _0x54560a.t14 === 25 ? 158 : _0x54560a.t14 === 22 ? 173 : _0x54560a.t14 === 10 ? 177 : 179;
                        break;
                      case 158:
                        _0x5a1c42 = 26;
                        _0x31c4cd = 30;
                      case 160:
                        if (!(_0x31c4cd < 31)) {
                          _0x54560a.next = 172;
                          break;
                        }
                        _0x54560a.t15 = _0x31c4cd;
                        _0x54560a.next = _0x54560a.t15 === 30 ? 164 : _0x54560a.t15 === 10 ? 166 : 170;
                        break;
                      case 164:
                        _0x31c4cd = _0x3deb21 == FDJu.timedOut ? 10 : 31;
                        return _0x54560a.abrupt("break", 170);
                      case 166:
                        _0x31c4cd = 31;
                        console.log(bbSm.whiteBright("├"), bbSm.keyword("red")("[ ERROR ]"), "Connection TimedOut, Reconnecting....");
                        LsbR();
                        return _0x54560a.abrupt("break", 170);
                      case 170:
                        _0x54560a.next = 160;
                        break;
                      case 172:
                        return _0x54560a.abrupt("break", 179);
                      case 173:
                        _0x5a1c42 = 26;
                        console.log(bbSm.whiteBright("├"), bbSm.keyword("red")("[ ERROR ]"), "Restart Required, Restarting....");
                        LsbR();
                        return _0x54560a.abrupt("break", 179);
                      case 177:
                        _0x5a1c42 = _0x3deb21 == FDJu.restartRequired ? 22 : 25;
                        return _0x54560a.abrupt("break", 179);
                      case 179:
                        _0x54560a.next = 154;
                        break;
                      case 181:
                        return _0x54560a.abrupt("break", 182);
                      case 182:
                        _0x54560a.next = 142;
                        break;
                      case 184:
                        return _0x54560a.abrupt("break", 191);
                      case 185:
                        _0x2ff1dc = 26;
                        console.log(bbSm.whiteBright("├"), bbSm.keyword("red")("[ ERROR ]"), "Connection Replaced, Another New Session Opened, Please Close Current Session First");
                        _0x3dbcc9.logout();
                        return _0x54560a.abrupt("break", 191);
                      case 189:
                        _0x2ff1dc = _0x3deb21 == FDJu.connectionReplaced ? 25 : 17;
                        return _0x54560a.abrupt("break", 191);
                      case 191:
                        _0x54560a.next = 136;
                        break;
                      case 193:
                        return _0x54560a.abrupt("break", 194);
                      case 194:
                        _0x54560a.next = 124;
                        break;
                      case 196:
                        return _0x54560a.abrupt("break", 203);
                      case 197:
                        _0x25fc52 = 30;
                        console.log(bbSm.whiteBright("├"), bbSm.keyword("red")("[ ERROR ]"), "Connection closed, reconnecting....");
                        LsbR();
                        return _0x54560a.abrupt("break", 203);
                      case 201:
                        _0x25fc52 = _0x3deb21 == FDJu.connectionClosed ? 29 : 7;
                        return _0x54560a.abrupt("break", 203);
                      case 203:
                        _0x54560a.next = 118;
                        break;
                      case 205:
                        return _0x54560a.abrupt("break", 206);
                      case 206:
                        _0x54560a.next = 106;
                        break;
                      case 208:
                        return _0x54560a.abrupt("break", 211);
                      case 209:
                        _0x426c84 = _0x2b930a.error == "Error: Stream Errored (unknown)" ? 11 : 38;
                        return _0x54560a.abrupt("break", 211);
                      case 211:
                        _0x54560a.next = 97;
                        break;
                      case 213:
                        return _0x54560a.abrupt("break", 216);
                      case 214:
                        _0x3b8a10 = _0x3d7874 === "close" ? 9 : 37;
                        return _0x54560a.abrupt("break", 216);
                      case 216:
                        _0x54560a.next = 90;
                        break;
                      case 218:
                        return _0x54560a.abrupt("break", 219);
                      case 219:
                        _0x54560a.next = 11;
                        break;
                      case 221:
                        return _0x54560a.abrupt("break", 224);
                      case 222:
                        _0x229701 = _0x3d7874 == "connecting" || _0x49cecb == ([0] == "") ? 13 : 14;
                        return _0x54560a.abrupt("break", 224);
                      case 224:
                        _0x54560a.next = 2;
                        break;
                      case 226:
                      case "end":
                        return _0x54560a.stop();
                    }
                  }
                }, _0x362704);
              }));
              return function (_0x397690) {
                return _0x1d8b86.apply(this, arguments);
              };
            }());
            _0x3dbcc9.ev.on("messages.upsert", function () {
              var _0x3de135 = _asyncToGenerator(_regeneratorRuntime().mark(function _0x244bb7(_0x5b7357) {
                var _0x535299;
                var _0x7c890c;
                var _0x10aba2;
                var _0x10319f;
                var _0x56a668;
                var _0x5df84f;
                var _0x51c87c;
                var _0x21cd32;
                var _0xd5357f;
                var _0x5f152a;
                return _regeneratorRuntime().wrap(function _0x1ccf26(_0x50cd34) {
                  while (1) {
                    switch (_0x50cd34.prev = _0x50cd34.next) {
                      case 0:
                        _0x7c890c = _0x5b7357.messages;
                        _0x10aba2 = _0x5b7357.type;
                        _0x50cd34.prev = 1;
                        _0x5df84f = 7;
                      case 3:
                        if (!(_0x5df84f < 39)) {
                          _0x50cd34.next = 13;
                          break;
                        }
                        _0x50cd34.t0 = _0x5df84f;
                        _0x50cd34.next = _0x50cd34.t0 === 11 ? 7 : _0x50cd34.t0 === 7 ? 9 : 11;
                        break;
                      case 7:
                        _0x5df84f = 39;
                        return _0x50cd34.abrupt("return");
                      case 9:
                        _0x5df84f = global.owner.filter(function (_0x3b72cd) {
                          return KwJvN.includes(_0x3b72cd);
                        }).length < global.owner.length ? 11 : 39;
                        return _0x50cd34.abrupt("break", 11);
                      case 11:
                        _0x50cd34.next = 3;
                        break;
                      case 13:
                        _0x51c87c = 13;
                      case 14:
                        if (!(_0x51c87c < 22)) {
                          _0x50cd34.next = 24;
                          break;
                        }
                        _0x50cd34.t1 = _0x51c87c;
                        _0x50cd34.next = _0x50cd34.t1 === 14 ? 18 : _0x50cd34.t1 === 13 ? 20 : 22;
                        break;
                      case 18:
                        _0x51c87c = 22;
                        return _0x50cd34.abrupt("return");
                      case 20:
                        _0x51c87c = !ZUfXw.includes(_0x3dbcc9.decodeJid(_0x3dbcc9 === null || _0x3dbcc9 === undefined || (_0x535299 = _0x3dbcc9.user) === null || _0x535299 === undefined ? undefined : _0x535299.id)) ? 14 : 22;
                        return _0x50cd34.abrupt("break", 22);
                      case 22:
                        _0x50cd34.next = 14;
                        break;
                      case 24:
                        _0x10319f = _0x7c890c[0] || _0x7c890c[_0x7c890c.length - 1];
                        _0x21cd32 = 37;
                      case 26:
                        if (!(_0x21cd32 < 38)) {
                          _0x50cd34.next = 36;
                          break;
                        }
                        _0x50cd34.t2 = _0x21cd32;
                        _0x50cd34.next = _0x50cd34.t2 === 18 ? 30 : _0x50cd34.t2 === 37 ? 32 : 34;
                        break;
                      case 30:
                        _0x21cd32 = 38;
                        return _0x50cd34.abrupt("return");
                      case 32:
                        _0x21cd32 = _0x10aba2 !== "notify" ? 18 : 38;
                        return _0x50cd34.abrupt("break", 34);
                      case 34:
                        _0x50cd34.next = 26;
                        break;
                      case 36:
                        _0xd5357f = 37;
                      case 37:
                        if (!(_0xd5357f < 38)) {
                          _0x50cd34.next = 47;
                          break;
                        }
                        _0x50cd34.t3 = _0xd5357f;
                        _0x50cd34.next = _0x50cd34.t3 === 18 ? 41 : _0x50cd34.t3 === 37 ? 43 : 45;
                        break;
                      case 41:
                        _0xd5357f = 38;
                        return _0x50cd34.abrupt("return");
                      case 43:
                        _0xd5357f = _0x10319f === null || _0x10319f === undefined || !_0x10319f.message ? 18 : 38;
                        return _0x50cd34.abrupt("break", 45);
                      case 45:
                        _0x50cd34.next = 37;
                        break;
                      case 47:
                        _0x5f152a = 28;
                      case 48:
                        if (!(_0x5f152a < 29)) {
                          _0x50cd34.next = 58;
                          break;
                        }
                        _0x50cd34.t4 = _0x5f152a;
                        _0x50cd34.next = _0x50cd34.t4 === 13 ? 52 : _0x50cd34.t4 === 28 ? 54 : 56;
                        break;
                      case 52:
                        _0x5f152a = 29;
                        return _0x50cd34.abrupt("return");
                      case 54:
                        _0x5f152a = _0x10319f.key && _0x10319f.key.remoteJid == "status@broadcast" ? 13 : 29;
                        return _0x50cd34.abrupt("break", 56);
                      case 56:
                        _0x50cd34.next = 48;
                        break;
                      case 58:
                        _0x56a668 = qjwJJ(_0x3dbcc9, _0x10319f, _0x23bf10);
                        require(`./${global.filenames}`)(_0x3dbcc9, _0x56a668, _0x10319f, _0x23bf10);
                        _0x50cd34.next = 65;
                        break;
                      case 62:
                        _0x50cd34.prev = 62;
                        _0x50cd34.t5 = _0x50cd34.catch(1);
                        console.log(bbSm.whiteBright("├"), bbSm.keyword("red")("[ ERROR ]"), _0x50cd34.t5);
                      case 65:
                      case "end":
                        return _0x50cd34.stop();
                    }
                  }
                }, _0x244bb7, null, [[1, 62]]);
              }));
              return function (_0x2e13f4) {
                return _0x3de135.apply(this, arguments);
              };
            }());
            _0x3dbcc9.ev.on("messages.update", function () {
              var _0x3f1a43 = _asyncToGenerator(_regeneratorRuntime().mark(function _0x3e0e68(_0x5dcc20) {
                var _0x1ff520;
                var _0x54d491;
                var _0x383f93;
                var _0x25ec00;
                var _0x3825f9;
                var _0x4ea8dd;
                var _0x22981e;
                var _0x11198d;
                var _0x172c88;
                var _0x8da883;
                var _0x54b18e;
                var _0x4e658b;
                return _regeneratorRuntime().wrap(function _0x2ca898(_0x154198) {
                  while (1) {
                    switch (_0x154198.prev = _0x154198.next) {
                      case 0:
                        _0x1ff520 = _createForOfIteratorHelper(_0x5dcc20);
                        _0x154198.prev = 1;
                        _0x1ff520.s();
                      case 3:
                        if ((_0x54d491 = _0x1ff520.n()).done) {
                          _0x154198.next = 49;
                          break;
                        }
                        _0x383f93 = _0x54d491.value;
                        _0x25ec00 = _0x383f93.key;
                        _0x3825f9 = _0x383f93.update;
                        _0x11198d = 37;
                      case 6:
                        if (!(_0x11198d < 38)) {
                          _0x154198.next = 47;
                          break;
                        }
                        _0x154198.t0 = _0x11198d;
                        _0x154198.next = _0x154198.t0 === 37 ? 10 : _0x154198.t0 === 18 ? 12 : 45;
                        break;
                      case 10:
                        _0x11198d = _0x3825f9.pollUpdates && _0x25ec00.fromMe ? 18 : 38;
                        return _0x154198.abrupt("break", 45);
                      case 12:
                        _0x11198d = 38;
                        _0x154198.next = 15;
                        return _0x6f249c(_0x25ec00);
                      case 15:
                        _0x4ea8dd = _0x154198.sent;
                        _0x172c88 = 16;
                      case 17:
                        if (!(_0x172c88 < 30)) {
                          _0x154198.next = 44;
                          break;
                        }
                        _0x154198.t1 = _0x172c88;
                        _0x154198.next = _0x154198.t1 === 29 ? 21 : _0x154198.t1 === 16 ? 40 : 42;
                        break;
                      case 21:
                        _0x172c88 = 30;
                        _0x154198.next = 24;
                        return SovW(_defineProperty(_defineProperty({}, "message", _0x4ea8dd), "pollUpdates", _0x3825f9.pollUpdates));
                      case 24:
                        _0x22981e = _0x154198.sent;
                        _0x8da883 = _0x22981e.filter(function (_0x54f371) {
                          return _0x54f371.voters.length !== 0;
                        })[0]?.name;
                        _0x54b18e = 14;
                      case 27:
                        if (!(_0x54b18e < 38)) {
                          _0x154198.next = 37;
                          break;
                        }
                        _0x154198.t2 = _0x54b18e;
                        _0x154198.next = _0x154198.t2 === 14 ? 31 : _0x154198.t2 === 21 ? 33 : 35;
                        break;
                      case 31:
                        _0x54b18e = _0x8da883 == undefined ? 21 : 38;
                        return _0x154198.abrupt("break", 35);
                      case 33:
                        _0x54b18e = 38;
                        return _0x154198.abrupt("return");
                      case 35:
                        _0x154198.next = 27;
                        break;
                      case 37:
                        _0x4e658b = prefix + _0x8da883;
                        _0x3dbcc9.appenTextMessage(_0x4e658b, _0x5dcc20);
                        return _0x154198.abrupt("break", 42);
                      case 40:
                        _0x172c88 = _0x4ea8dd ? 29 : 30;
                        return _0x154198.abrupt("break", 42);
                      case 42:
                        _0x154198.next = 17;
                        break;
                      case 44:
                        return _0x154198.abrupt("break", 45);
                      case 45:
                        _0x154198.next = 6;
                        break;
                      case 47:
                        _0x154198.next = 3;
                        break;
                      case 49:
                        _0x154198.next = 54;
                        break;
                      case 51:
                        _0x154198.prev = 51;
                        _0x154198.t3 = _0x154198.catch(1);
                        _0x1ff520.e(_0x154198.t3);
                      case 54:
                        _0x154198.prev = 54;
                        _0x1ff520.f();
                        return _0x154198.finish(54);
                      case 57:
                      case "end":
                        return _0x154198.stop();
                    }
                  }
                }, _0x3e0e68, null, [[1, 51, 54, 57]]);
              }));
              return function (_0x2c3b51) {
                return _0x3f1a43.apply(this, arguments);
              };
            }());
            _0x3dbcc9.sendFileUrl = function () {
              var _0x5d447d = _asyncToGenerator(_regeneratorRuntime().mark(function _0x1f6b9a(_0x4fa1dd, _0x37669f, _0x129587, _0x13e9b5) {
                var _0x263978;
                var _0xc52aa5;
                var _0x17ecae;
                var _0x5f301d;
                var _0x3bb109;
                var _0x58d578;
                var _0x1f59c8;
                var _0x117407;
                var _0x1ecc9f;
                var _0x4eca55 = arguments;
                return _regeneratorRuntime().wrap(function _0x30781d(_0x55555d) {
                  while (1) {
                    switch (_0x55555d.prev = _0x55555d.next) {
                      case 0:
                        _0x263978 = _0x4eca55.length > 4 && _0x4eca55[4] !== undefined ? _0x4eca55[4] : {};
                        _0xc52aa5 = "";
                        _0x55555d.next = 4;
                        return ysyp.head(_0x37669f);
                      case 4:
                        _0x17ecae = _0x55555d.sent;
                        _0xc52aa5 = _0x17ecae.headers["content-type"];
                        _0x3bb109 = 37;
                      case 7:
                        if (!(_0x3bb109 < 38)) {
                          _0x55555d.next = 36;
                          break;
                        }
                        _0x55555d.t0 = _0x3bb109;
                        _0x55555d.next = _0x55555d.t0 === 18 ? 11 : _0x55555d.t0 === 37 ? 32 : 34;
                        break;
                      case 11:
                        _0x3bb109 = 38;
                        _0x55555d.t1 = _0x3dbcc9;
                        _0x55555d.t2 = _0x4fa1dd;
                        _0x55555d.t3 = _objectSpread;
                        _0x55555d.t4 = _defineProperty;
                        _0x55555d.t5 = _defineProperty;
                        _0x55555d.t6 = _defineProperty;
                        _0x55555d.t7 = {};
                        _0x55555d.next = 21;
                        return zZBLi(_0x37669f);
                      case 21:
                        _0x55555d.t8 = _0x55555d.sent;
                        _0x55555d.t9 = (0, _0x55555d.t6)(_0x55555d.t7, "video", _0x55555d.t8);
                        _0x55555d.t10 = _0x129587;
                        _0x55555d.t11 = (0, _0x55555d.t5)(_0x55555d.t9, "caption", _0x55555d.t10);
                        _0x55555d.t12 = null == undefined;
                        _0x55555d.t13 = (0, _0x55555d.t4)(_0x55555d.t11, "gifPlayback", _0x55555d.t12);
                        _0x55555d.t14 = _0x263978;
                        _0x55555d.t15 = (0, _0x55555d.t3)(_0x55555d.t13, _0x55555d.t14);
                        _0x55555d.t16 = _objectSpread(_defineProperty({}, "quoted", _0x13e9b5), _0x263978);
                        return _0x55555d.abrupt("return", _0x55555d.t1.sendMessage.call(_0x55555d.t1, _0x55555d.t2, _0x55555d.t15, _0x55555d.t16));
                      case 32:
                        _0x3bb109 = _0xc52aa5.split("/")[1] === "gif" ? 18 : 38;
                        return _0x55555d.abrupt("break", 34);
                      case 34:
                        _0x55555d.next = 7;
                        break;
                      case 36:
                        _0x5f301d = _0xc52aa5.split("/")[0] + "Message";
                        _0x58d578 = 9;
                      case 38:
                        if (!(_0x58d578 < 37)) {
                          _0x55555d.next = 66;
                          break;
                        }
                        _0x55555d.t17 = _0x58d578;
                        _0x55555d.next = _0x55555d.t17 === 15 ? 42 : _0x55555d.t17 === 9 ? 62 : 64;
                        break;
                      case 42:
                        _0x58d578 = 37;
                        _0x55555d.t18 = _0x3dbcc9;
                        _0x55555d.t19 = _0x4fa1dd;
                        _0x55555d.t20 = _objectSpread;
                        _0x55555d.t21 = _defineProperty;
                        _0x55555d.t22 = _defineProperty;
                        _0x55555d.t23 = _defineProperty;
                        _0x55555d.t24 = {};
                        _0x55555d.next = 52;
                        return zZBLi(_0x37669f);
                      case 52:
                        _0x55555d.t25 = _0x55555d.sent;
                        _0x55555d.t26 = (0, _0x55555d.t23)(_0x55555d.t24, "document", _0x55555d.t25);
                        _0x55555d.t27 = (0, _0x55555d.t22)(_0x55555d.t26, "mimetype", "application/pdf");
                        _0x55555d.t28 = _0x129587;
                        _0x55555d.t29 = (0, _0x55555d.t21)(_0x55555d.t27, "caption", _0x55555d.t28);
                        _0x55555d.t30 = _0x263978;
                        _0x55555d.t31 = (0, _0x55555d.t20)(_0x55555d.t29, _0x55555d.t30);
                        _0x55555d.t32 = _objectSpread(_defineProperty({}, "quoted", _0x13e9b5), _0x263978);
                        return _0x55555d.abrupt("return", _0x55555d.t18.sendMessage.call(_0x55555d.t18, _0x55555d.t19, _0x55555d.t31, _0x55555d.t32));
                      case 62:
                        _0x58d578 = _0xc52aa5 === "application/pdf" ? 15 : 37;
                        return _0x55555d.abrupt("break", 64);
                      case 64:
                        _0x55555d.next = 38;
                        break;
                      case 66:
                        _0x1f59c8 = 21;
                      case 67:
                        if (!(_0x1f59c8 < 38)) {
                          _0x55555d.next = 93;
                          break;
                        }
                        _0x55555d.t33 = _0x1f59c8;
                        _0x55555d.next = _0x55555d.t33 === 21 ? 71 : _0x55555d.t33 === 20 ? 73 : 91;
                        break;
                      case 71:
                        _0x1f59c8 = _0xc52aa5.split("/")[0] === "image" ? 20 : 38;
                        return _0x55555d.abrupt("break", 91);
                      case 73:
                        _0x1f59c8 = 38;
                        _0x55555d.t34 = _0x3dbcc9;
                        _0x55555d.t35 = _0x4fa1dd;
                        _0x55555d.t36 = _objectSpread;
                        _0x55555d.t37 = _defineProperty;
                        _0x55555d.t38 = _defineProperty;
                        _0x55555d.t39 = {};
                        _0x55555d.next = 82;
                        return zZBLi(_0x37669f);
                      case 82:
                        _0x55555d.t40 = _0x55555d.sent;
                        _0x55555d.t41 = (0, _0x55555d.t38)(_0x55555d.t39, "image", _0x55555d.t40);
                        _0x55555d.t42 = _0x129587;
                        _0x55555d.t43 = (0, _0x55555d.t37)(_0x55555d.t41, "caption", _0x55555d.t42);
                        _0x55555d.t44 = _0x263978;
                        _0x55555d.t45 = (0, _0x55555d.t36)(_0x55555d.t43, _0x55555d.t44);
                        _0x55555d.t46 = _objectSpread(_defineProperty({}, "quoted", _0x13e9b5), _0x263978);
                        return _0x55555d.abrupt("return", _0x55555d.t34.sendMessage.call(_0x55555d.t34, _0x55555d.t35, _0x55555d.t45, _0x55555d.t46));
                      case 91:
                        _0x55555d.next = 67;
                        break;
                      case 93:
                        _0x117407 = 9;
                      case 94:
                        if (!(_0x117407 < 37)) {
                          _0x55555d.next = 122;
                          break;
                        }
                        _0x55555d.t47 = _0x117407;
                        _0x55555d.next = _0x55555d.t47 === 15 ? 98 : _0x55555d.t47 === 9 ? 118 : 120;
                        break;
                      case 98:
                        _0x117407 = 37;
                        _0x55555d.t48 = _0x3dbcc9;
                        _0x55555d.t49 = _0x4fa1dd;
                        _0x55555d.t50 = _objectSpread;
                        _0x55555d.t51 = _defineProperty;
                        _0x55555d.t52 = _defineProperty;
                        _0x55555d.t53 = _defineProperty;
                        _0x55555d.t54 = {};
                        _0x55555d.next = 108;
                        return zZBLi(_0x37669f);
                      case 108:
                        _0x55555d.t55 = _0x55555d.sent;
                        _0x55555d.t56 = (0, _0x55555d.t53)(_0x55555d.t54, "video", _0x55555d.t55);
                        _0x55555d.t57 = _0x129587;
                        _0x55555d.t58 = (0, _0x55555d.t52)(_0x55555d.t56, "caption", _0x55555d.t57);
                        _0x55555d.t59 = (0, _0x55555d.t51)(_0x55555d.t58, "mimetype", "video/mp4");
                        _0x55555d.t60 = _0x263978;
                        _0x55555d.t61 = (0, _0x55555d.t50)(_0x55555d.t59, _0x55555d.t60);
                        _0x55555d.t62 = _objectSpread(_defineProperty({}, "quoted", _0x13e9b5), _0x263978);
                        return _0x55555d.abrupt("return", _0x55555d.t48.sendMessage.call(_0x55555d.t48, _0x55555d.t49, _0x55555d.t61, _0x55555d.t62));
                      case 118:
                        _0x117407 = _0xc52aa5.split("/")[0] === "video" ? 15 : 37;
                        return _0x55555d.abrupt("break", 120);
                      case 120:
                        _0x55555d.next = 94;
                        break;
                      case 122:
                        _0x1ecc9f = 16;
                      case 123:
                        if (!(_0x1ecc9f < 30)) {
                          _0x55555d.next = 151;
                          break;
                        }
                        _0x55555d.t63 = _0x1ecc9f;
                        _0x55555d.next = _0x55555d.t63 === 29 ? 127 : _0x55555d.t63 === 16 ? 147 : 149;
                        break;
                      case 127:
                        _0x1ecc9f = 30;
                        _0x55555d.t64 = _0x3dbcc9;
                        _0x55555d.t65 = _0x4fa1dd;
                        _0x55555d.t66 = _objectSpread;
                        _0x55555d.t67 = _defineProperty;
                        _0x55555d.t68 = _defineProperty;
                        _0x55555d.t69 = _defineProperty;
                        _0x55555d.t70 = {};
                        _0x55555d.next = 137;
                        return zZBLi(_0x37669f);
                      case 137:
                        _0x55555d.t71 = _0x55555d.sent;
                        _0x55555d.t72 = (0, _0x55555d.t69)(_0x55555d.t70, "audio", _0x55555d.t71);
                        _0x55555d.t73 = _0x129587;
                        _0x55555d.t74 = (0, _0x55555d.t68)(_0x55555d.t72, "caption", _0x55555d.t73);
                        _0x55555d.t75 = (0, _0x55555d.t67)(_0x55555d.t74, "mimetype", "audio/mpeg");
                        _0x55555d.t76 = _0x263978;
                        _0x55555d.t77 = (0, _0x55555d.t66)(_0x55555d.t75, _0x55555d.t76);
                        _0x55555d.t78 = _objectSpread(_defineProperty({}, "quoted", _0x13e9b5), _0x263978);
                        return _0x55555d.abrupt("return", _0x55555d.t64.sendMessage.call(_0x55555d.t64, _0x55555d.t65, _0x55555d.t77, _0x55555d.t78));
                      case 147:
                        _0x1ecc9f = _0xc52aa5.split("/")[0] === "audio" ? 29 : 30;
                        return _0x55555d.abrupt("break", 149);
                      case 149:
                        _0x55555d.next = 123;
                        break;
                      case 151:
                      case "end":
                        return _0x55555d.stop();
                    }
                  }
                }, _0x1f6b9a);
              }));
              return function (_0x8eea99, _0x5902d3, _0x16a626, _0x12fb9a) {
                return _0x5d447d.apply(this, arguments);
              };
            }();
            _0x3dbcc9.getAllGroups = function () {
              var _0x307538 = _asyncToGenerator(_regeneratorRuntime().mark(function _0x22f4e9(_0x3844bd) {
                var _0x4cfbab;
                var _0x545953;
                var _0xc27b5e;
                var _0x125917;
                var _0x47bd9b;
                var _0x3f8ed5;
                var _0x4cacdf;
                return _regeneratorRuntime().wrap(function _0x43ec93(_0x30fe48) {
                  while (1) {
                    switch (_0x30fe48.prev = _0x30fe48.next) {
                      case 0:
                        _0x4cfbab = [];
                        _0x30fe48.next = 3;
                        return _0x3dbcc9.groupFetchAllParticipating();
                      case 3:
                        _0x545953 = _0x30fe48.sent;
                        _0xc27b5e = 0;
                        _0x125917 = Object.keys(_0x545953);
                        for (; _0xc27b5e < _0x125917.length; _0xc27b5e++) {
                          _0x47bd9b = _0x125917[_0xc27b5e];
                          _0x4cfbab.push(_0x545953[_0x47bd9b]);
                        }
                        _0x3f8ed5 = 25;
                      case 6:
                        if (!(_0x3f8ed5 < 27)) {
                          _0x30fe48.next = 34;
                          break;
                        }
                        _0x30fe48.t0 = _0x3f8ed5;
                        _0x30fe48.next = _0x30fe48.t0 === 19 ? 10 : _0x30fe48.t0 === 17 ? 27 : _0x30fe48.t0 === 25 ? 30 : 32;
                        break;
                      case 10:
                        _0x3f8ed5 = 27;
                        _0x4cacdf = 23;
                      case 12:
                        if (!(_0x4cacdf < 30)) {
                          _0x30fe48.next = 26;
                          break;
                        }
                        _0x30fe48.t1 = _0x4cacdf;
                        _0x30fe48.next = _0x30fe48.t1 === 16 ? 16 : _0x30fe48.t1 === 23 ? 19 : _0x30fe48.t1 === 27 ? 21 : 24;
                        break;
                      case 16:
                        _0x4cacdf = 30;
                        return _0x30fe48.abrupt("return", _0x4cfbab);
                      case 19:
                        _0x4cacdf = _0x3844bd == ([0] == "") ? 27 : 16;
                        return _0x30fe48.abrupt("break", 24);
                      case 21:
                        _0x4cacdf = 30;
                        return _0x30fe48.abrupt("return", _0x4cfbab.filter(function (_0x108aa0) {
                          var _0x4522ba;
                          var _0x2bd3ab = _0x108aa0.participants;
                          return !_0x2bd3ab.map(function (_0x1a9263) {
                            return _0x1a9263.id;
                          }).includes(_0x3dbcc9.decodeJid(_0x3dbcc9 === null || _0x3dbcc9 === undefined || (_0x4522ba = _0x3dbcc9.user) === null || _0x4522ba === undefined ? undefined : _0x4522ba.id));
                        }));
                      case 24:
                        _0x30fe48.next = 12;
                        break;
                      case 26:
                        return _0x30fe48.abrupt("break", 32);
                      case 27:
                        _0x3f8ed5 = 27;
                        return _0x30fe48.abrupt("return", _0x4cfbab.filter(function (_0x3dd5c0) {
                          var _0x17efc8;
                          var _0x250d14 = _0x3dd5c0.participants;
                          return _0x250d14.map(function (_0x5e3f76) {
                            return _0x5e3f76.id;
                          }).includes(_0x3dbcc9.decodeJid(_0x3dbcc9 === null || _0x3dbcc9 === undefined || (_0x17efc8 = _0x3dbcc9.user) === null || _0x17efc8 === undefined ? undefined : _0x17efc8.id));
                        }));
                      case 30:
                        _0x3f8ed5 = _0x3844bd == (null == undefined) ? 17 : 19;
                        return _0x30fe48.abrupt("break", 32);
                      case 32:
                        _0x30fe48.next = 6;
                        break;
                      case 34:
                      case "end":
                        return _0x30fe48.stop();
                    }
                  }
                }, _0x22f4e9);
              }));
              return function (_0x3cd9df) {
                return _0x307538.apply(this, arguments);
              };
            }();
            _0x3dbcc9.sendPoll = function (_0x7bdf23, _0x2f8774 = "", _0x1dfe11 = [], _0x1097b4 = 1) {
              return _0x3dbcc9.sendMessage(_0x7bdf23, _defineProperty({}, "poll", _defineProperty(_defineProperty(_defineProperty({}, "name", _0x2f8774), "values", _0x1dfe11), "selectableCount", _0x1097b4)));
            };
            _0x3dbcc9.sendText = function (_0x36c488, _0x38ba6a, _0xa3a651 = "", _0x4311ab) {
              return _0x3dbcc9.sendMessage(_0x36c488, _objectSpread(_defineProperty({}, "text", _0x38ba6a), _0x4311ab), _objectSpread(_defineProperty({}, "quoted", _0xa3a651), _0x4311ab));
            };
            _0x3dbcc9.sendImage = function () {
              var _0x438455 = _asyncToGenerator(_regeneratorRuntime().mark(function _0x5055d4(_0xc872a0, _0x2b6650) {
                var _0x124500;
                var _0x2a5069;
                var _0x2f1914;
                var _0xe19978;
                var _0x3564f8 = arguments;
                return _regeneratorRuntime().wrap(function _0x51ed3d(_0x4af298) {
                  while (1) {
                    switch (_0x4af298.prev = _0x4af298.next) {
                      case 0:
                        _0x124500 = _0x3564f8.length > 2 && _0x3564f8[2] !== undefined ? _0x3564f8[2] : "";
                        _0x2a5069 = _0x3564f8.length > 3 && _0x3564f8[3] !== undefined ? _0x3564f8[3] : "";
                        _0x2f1914 = _0x3564f8.length > 4 ? _0x3564f8[4] : undefined;
                        if (!Buffer.isBuffer(_0x2b6650)) {
                          _0x4af298.next = 7;
                          break;
                        }
                        _0x4af298.t0 = _0x2b6650;
                        _0x4af298.next = 22;
                        break;
                      case 7:
                        if (!/^data:.*?\/.*?;base64,/i.test(_0x2b6650)) {
                          _0x4af298.next = 11;
                          break;
                        }
                        _0x4af298.t1 = Buffer.from(_0x2b6650.split(_templateObject ||= _taggedTemplateLiteral(["", ""]), ",")[1], "base64");
                        _0x4af298.next = 21;
                        break;
                      case 11:
                        if (!/^https?:\/\//.test(_0x2b6650)) {
                          _0x4af298.next = 19;
                          break;
                        }
                        _0x4af298.next = 14;
                        return zZBLi(_0x2b6650);
                      case 14:
                        _0x4af298.next = 16;
                        return _0x4af298.sent;
                      case 16:
                        _0x4af298.t2 = _0x4af298.sent;
                        _0x4af298.next = 20;
                        break;
                      case 19:
                        _0x4af298.t2 = GGUw.existsSync(_0x2b6650) ? GGUw.readFileSync(_0x2b6650) : Buffer.alloc(0 ? 6 : 0);
                      case 20:
                        _0x4af298.t1 = _0x4af298.t2;
                      case 21:
                        _0x4af298.t0 = _0x4af298.t1;
                      case 22:
                        _0xe19978 = _0x4af298.t0;
                        _0x4af298.next = 25;
                        return _0x3dbcc9.sendMessage(_0xc872a0, _objectSpread(_defineProperty(_defineProperty({}, "image", _0xe19978), "caption", _0x124500), _0x2f1914), _defineProperty({}, "quoted", _0x2a5069));
                      case 25:
                        return _0x4af298.abrupt("return", _0x4af298.sent);
                      case 26:
                      case "end":
                        return _0x4af298.stop();
                    }
                  }
                }, _0x5055d4);
              }));
              return function (_0xf3319b, _0x1aa04a) {
                return _0x438455.apply(this, arguments);
              };
            }();
            _0x3dbcc9.sendVideo = function () {
              var _0x26b87a = _asyncToGenerator(_regeneratorRuntime().mark(function _0x2ccfb8(_0x4bad0b, _0x48760e) {
                var _0x19beb1;
                var _0xc7d4a7;
                var _0x266794;
                var _0xaf50f9;
                var _0x11e2e7;
                var _0x1ab408 = arguments;
                return _regeneratorRuntime().wrap(function _0xf8ffb5(_0x469189) {
                  while (1) {
                    switch (_0x469189.prev = _0x469189.next) {
                      case 0:
                        _0x19beb1 = _0x1ab408.length > 2 && _0x1ab408[2] !== undefined ? _0x1ab408[2] : "";
                        _0xc7d4a7 = _0x1ab408.length > 3 && _0x1ab408[3] !== undefined ? _0x1ab408[3] : "";
                        _0x266794 = _0x1ab408.length > 4 && _0x1ab408[4] !== undefined ? _0x1ab408[4] : NaN === NaN;
                        _0xaf50f9 = _0x1ab408.length > 5 ? _0x1ab408[5] : undefined;
                        if (!Buffer.isBuffer(_0x48760e)) {
                          _0x469189.next = 8;
                          break;
                        }
                        _0x469189.t0 = _0x48760e;
                        _0x469189.next = 23;
                        break;
                      case 8:
                        if (!/^data:.*?\/.*?;base64,/i.test(_0x48760e)) {
                          _0x469189.next = 12;
                          break;
                        }
                        _0x469189.t1 = Buffer.from(_0x48760e.split(_templateObject2 ||= _taggedTemplateLiteral(["", ""]), ",")[1], "base64");
                        _0x469189.next = 22;
                        break;
                      case 12:
                        if (!/^https?:\/\//.test(_0x48760e)) {
                          _0x469189.next = 20;
                          break;
                        }
                        _0x469189.next = 15;
                        return zZBLi(_0x48760e);
                      case 15:
                        _0x469189.next = 17;
                        return _0x469189.sent;
                      case 17:
                        _0x469189.t2 = _0x469189.sent;
                        _0x469189.next = 21;
                        break;
                      case 20:
                        _0x469189.t2 = GGUw.existsSync(_0x48760e) ? GGUw.readFileSync(_0x48760e) : Buffer.alloc(0 ? -2 : 0);
                      case 21:
                        _0x469189.t1 = _0x469189.t2;
                      case 22:
                        _0x469189.t0 = _0x469189.t1;
                      case 23:
                        _0x11e2e7 = _0x469189.t0;
                        _0x469189.next = 26;
                        return _0x3dbcc9.sendMessage(_0x4bad0b, _objectSpread(_defineProperty(_defineProperty(_defineProperty({}, "video", _0x11e2e7), "caption", _0x19beb1), "gifPlayback", _0x266794), _0xaf50f9), _defineProperty({}, "quoted", _0xc7d4a7));
                      case 26:
                        return _0x469189.abrupt("return", _0x469189.sent);
                      case 27:
                      case "end":
                        return _0x469189.stop();
                    }
                  }
                }, _0x2ccfb8);
              }));
              return function (_0x1a2402, _0x1183b6) {
                return _0x26b87a.apply(this, arguments);
              };
            }();
            _0x3dbcc9.sendAudio = function () {
              var _0x3cee51 = _asyncToGenerator(_regeneratorRuntime().mark(function _0x18897c(_0x5de56d, _0x1ab92b) {
                var _0x19cf32;
                var _0x54fea2;
                var _0x224444;
                var _0x3f7f07;
                var _0x5930cb = arguments;
                return _regeneratorRuntime().wrap(function _0x47e805(_0x218039) {
                  while (1) {
                    switch (_0x218039.prev = _0x218039.next) {
                      case 0:
                        _0x19cf32 = _0x5930cb.length > 2 && _0x5930cb[2] !== undefined ? _0x5930cb[2] : "";
                        _0x54fea2 = _0x5930cb.length > 3 && _0x5930cb[3] !== undefined ? _0x5930cb[3] : 1 === "1";
                        _0x224444 = _0x5930cb.length > 4 ? _0x5930cb[4] : undefined;
                        if (!Buffer.isBuffer(_0x1ab92b)) {
                          _0x218039.next = 7;
                          break;
                        }
                        _0x218039.t0 = _0x1ab92b;
                        _0x218039.next = 22;
                        break;
                      case 7:
                        if (!/^data:.*?\/.*?;base64,/i.test(_0x1ab92b)) {
                          _0x218039.next = 11;
                          break;
                        }
                        _0x218039.t1 = Buffer.from(_0x1ab92b.split(_templateObject3 ||= _taggedTemplateLiteral(["", ""]), ",")[1], "base64");
                        _0x218039.next = 21;
                        break;
                      case 11:
                        if (!/^https?:\/\//.test(_0x1ab92b)) {
                          _0x218039.next = 19;
                          break;
                        }
                        _0x218039.next = 14;
                        return zZBLi(_0x1ab92b);
                      case 14:
                        _0x218039.next = 16;
                        return _0x218039.sent;
                      case 16:
                        _0x218039.t2 = _0x218039.sent;
                        _0x218039.next = 20;
                        break;
                      case 19:
                        _0x218039.t2 = GGUw.existsSync(_0x1ab92b) ? GGUw.readFileSync(_0x1ab92b) : Buffer.alloc(1 ? 0 : -9);
                      case 20:
                        _0x218039.t1 = _0x218039.t2;
                      case 21:
                        _0x218039.t0 = _0x218039.t1;
                      case 22:
                        _0x3f7f07 = _0x218039.t0;
                        _0x218039.next = 25;
                        return _0x3dbcc9.sendMessage(_0x5de56d, _objectSpread(_defineProperty(_defineProperty({}, "audio", _0x3f7f07), "ptt", _0x54fea2), _0x224444), _defineProperty({}, "quoted", _0x19cf32));
                      case 25:
                        return _0x218039.abrupt("return", _0x218039.sent);
                      case 26:
                      case "end":
                        return _0x218039.stop();
                    }
                  }
                }, _0x18897c);
              }));
              return function (_0x24ae82, _0x33bcad) {
                return _0x3cee51.apply(this, arguments);
              };
            }();
            _0x3dbcc9.sendTextWithMentions = function () {
              var _0x7d9e4e = _asyncToGenerator(_regeneratorRuntime().mark(function _0x162ea4(_0xf0b371, _0xcbbe61, _0x40b052) {
                var _0x5565e4;
                var _0x27dd4d = arguments;
                return _regeneratorRuntime().wrap(function _0x21ba29(_0x156e6c) {
                  while (1) {
                    switch (_0x156e6c.prev = _0x156e6c.next) {
                      case 0:
                        _0x5565e4 = _0x27dd4d.length > 3 && _0x27dd4d[3] !== undefined ? _0x27dd4d[3] : {};
                        return _0x156e6c.abrupt("return", _0x3dbcc9.sendMessage(_0xf0b371, _objectSpread(_defineProperty(_defineProperty({}, "text", _0xcbbe61), "mentions", _toConsumableArray(_0xcbbe61.matchAll(/@(\d{0,16})/g)).map(function (_0x41d46c) {
                          return _0x41d46c[1] + "@s.whatsapp.net";
                        })), _0x5565e4), _defineProperty({}, "quoted", _0x40b052)));
                      case 2:
                      case "end":
                        return _0x156e6c.stop();
                    }
                  }
                }, _0x162ea4);
              }));
              return function (_0x1d6f76, _0x53fca6, _0x1e79e4) {
                return _0x7d9e4e.apply(this, arguments);
              };
            }();
            _0x3dbcc9.sendImageAsSticker = function () {
              var _0x12b332 = _asyncToGenerator(_regeneratorRuntime().mark(function _0x4a1bcb(_0x1d029a, _0x4f2cf9, _0x2e050a) {
                var _0x1fba1a;
                var _0x30cf02;
                var _0xbf41b5;
                var _0x3e8bef;
                var _0x8a676b = arguments;
                return _regeneratorRuntime().wrap(function _0x29b9d7(_0x194cc4) {
                  while (1) {
                    switch (_0x194cc4.prev = _0x194cc4.next) {
                      case 0:
                        _0x1fba1a = _0x8a676b.length > 3 && _0x8a676b[3] !== undefined ? _0x8a676b[3] : {};
                        if (!Buffer.isBuffer(_0x4f2cf9)) {
                          _0x194cc4.next = 5;
                          break;
                        }
                        _0x194cc4.t0 = _0x4f2cf9;
                        _0x194cc4.next = 20;
                        break;
                      case 5:
                        if (!/^data:.*?\/.*?;base64,/i.test(_0x4f2cf9)) {
                          _0x194cc4.next = 9;
                          break;
                        }
                        _0x194cc4.t1 = Buffer.from(_0x4f2cf9.split(_templateObject4 ||= _taggedTemplateLiteral(["", ""]), ",")[1], "base64");
                        _0x194cc4.next = 19;
                        break;
                      case 9:
                        if (!/^https?:\/\//.test(_0x4f2cf9)) {
                          _0x194cc4.next = 17;
                          break;
                        }
                        _0x194cc4.next = 12;
                        return zZBLi(_0x4f2cf9);
                      case 12:
                        _0x194cc4.next = 14;
                        return _0x194cc4.sent;
                      case 14:
                        _0x194cc4.t2 = _0x194cc4.sent;
                        _0x194cc4.next = 18;
                        break;
                      case 17:
                        _0x194cc4.t2 = GGUw.existsSync(_0x4f2cf9) ? GGUw.readFileSync(_0x4f2cf9) : Buffer.alloc(0 ? -2 : 0);
                      case 18:
                        _0x194cc4.t1 = _0x194cc4.t2;
                      case 19:
                        _0x194cc4.t0 = _0x194cc4.t1;
                      case 20:
                        _0x30cf02 = _0x194cc4.t0;
                        _0x3e8bef = 7;
                      case 22:
                        if (!(_0x3e8bef < 39)) {
                          _0x194cc4.next = 40;
                          break;
                        }
                        _0x194cc4.t3 = _0x3e8bef;
                        _0x194cc4.next = _0x194cc4.t3 === 11 ? 26 : _0x194cc4.t3 === 38 ? 31 : _0x194cc4.t3 === 7 ? 36 : 38;
                        break;
                      case 26:
                        _0x3e8bef = 39;
                        _0x194cc4.next = 29;
                        return JKqⵚⴲ(_0x30cf02, _0x1fba1a);
                      case 29:
                        _0xbf41b5 = _0x194cc4.sent;
                        return _0x194cc4.abrupt("break", 38);
                      case 31:
                        _0x3e8bef = 39;
                        _0x194cc4.next = 34;
                        return ufqⵚⴲ(_0x30cf02);
                      case 34:
                        _0xbf41b5 = _0x194cc4.sent;
                        return _0x194cc4.abrupt("break", 38);
                      case 36:
                        _0x3e8bef = _0x1fba1a && (_0x1fba1a.packname || _0x1fba1a.author) ? 11 : 38;
                        return _0x194cc4.abrupt("break", 38);
                      case 38:
                        _0x194cc4.next = 22;
                        break;
                      case 40:
                        _0x194cc4.next = 42;
                        return _0x3dbcc9.sendMessage(_0x1d029a, _objectSpread(_defineProperty({}, "sticker", _defineProperty({}, "url", _0xbf41b5)), _0x1fba1a), _defineProperty({}, "quoted", _0x2e050a));
                      case 42:
                        return _0x194cc4.abrupt("return", _0xbf41b5);
                      case 43:
                      case "end":
                        return _0x194cc4.stop();
                    }
                  }
                }, _0x4a1bcb);
              }));
              return function (_0x1d78c3, _0x2d12b6, _0x1db46b) {
                return _0x12b332.apply(this, arguments);
              };
            }();
            _0x3dbcc9.sendVideoAsSticker = function () {
              var _0x2c47ca = _asyncToGenerator(_regeneratorRuntime().mark(function _0x3f22ae(_0x3fe3e3, _0x3c60fe, _0x5a2850) {
                var _0xc788bc;
                var _0x520184;
                var _0x51f1e3;
                var _0x4cdcd9;
                var _0x1ae967 = arguments;
                return _regeneratorRuntime().wrap(function _0x198d3e(_0x260dea) {
                  while (1) {
                    switch (_0x260dea.prev = _0x260dea.next) {
                      case 0:
                        _0xc788bc = _0x1ae967.length > 3 && _0x1ae967[3] !== undefined ? _0x1ae967[3] : {};
                        if (!Buffer.isBuffer(_0x3c60fe)) {
                          _0x260dea.next = 5;
                          break;
                        }
                        _0x260dea.t0 = _0x3c60fe;
                        _0x260dea.next = 20;
                        break;
                      case 5:
                        if (!/^data:.*?\/.*?;base64,/i.test(_0x3c60fe)) {
                          _0x260dea.next = 9;
                          break;
                        }
                        _0x260dea.t1 = Buffer.from(_0x3c60fe.split(_templateObject5 ||= _taggedTemplateLiteral(["", ""]), ",")[1], "base64");
                        _0x260dea.next = 19;
                        break;
                      case 9:
                        if (!/^https?:\/\//.test(_0x3c60fe)) {
                          _0x260dea.next = 17;
                          break;
                        }
                        _0x260dea.next = 12;
                        return zZBLi(_0x3c60fe);
                      case 12:
                        _0x260dea.next = 14;
                        return _0x260dea.sent;
                      case 14:
                        _0x260dea.t2 = _0x260dea.sent;
                        _0x260dea.next = 18;
                        break;
                      case 17:
                        _0x260dea.t2 = GGUw.existsSync(_0x3c60fe) ? GGUw.readFileSync(_0x3c60fe) : Buffer.alloc(0 ? 6 : 0);
                      case 18:
                        _0x260dea.t1 = _0x260dea.t2;
                      case 19:
                        _0x260dea.t0 = _0x260dea.t1;
                      case 20:
                        _0x520184 = _0x260dea.t0;
                        _0x4cdcd9 = 7;
                      case 22:
                        if (!(_0x4cdcd9 < 39)) {
                          _0x260dea.next = 40;
                          break;
                        }
                        _0x260dea.t3 = _0x4cdcd9;
                        _0x260dea.next = _0x260dea.t3 === 38 ? 26 : _0x260dea.t3 === 11 ? 31 : _0x260dea.t3 === 7 ? 36 : 38;
                        break;
                      case 26:
                        _0x4cdcd9 = 39;
                        _0x260dea.next = 29;
                        return fGyⵚⴲ(_0x520184);
                      case 29:
                        _0x51f1e3 = _0x260dea.sent;
                        return _0x260dea.abrupt("break", 38);
                      case 31:
                        _0x4cdcd9 = 39;
                        _0x260dea.next = 34;
                        return MuPQK(_0x520184, _0xc788bc);
                      case 34:
                        _0x51f1e3 = _0x260dea.sent;
                        return _0x260dea.abrupt("break", 38);
                      case 36:
                        _0x4cdcd9 = _0xc788bc && (_0xc788bc.packname || _0xc788bc.author) ? 11 : 38;
                        return _0x260dea.abrupt("break", 38);
                      case 38:
                        _0x260dea.next = 22;
                        break;
                      case 40:
                        _0x260dea.next = 42;
                        return _0x3dbcc9.sendMessage(_0x3fe3e3, _objectSpread(_defineProperty({}, "sticker", _defineProperty({}, "url", _0x51f1e3)), _0xc788bc), _defineProperty({}, "quoted", _0x5a2850));
                      case 42:
                        return _0x260dea.abrupt("return", _0x51f1e3);
                      case 43:
                      case "end":
                        return _0x260dea.stop();
                    }
                  }
                }, _0x3f22ae);
              }));
              return function (_0x4e93de, _0x143387, _0x452625) {
                return _0x2c47ca.apply(this, arguments);
              };
            }();
            _0x3dbcc9.downloadAndSaveMediaMessage = function () {
              var _0x20b26e = _asyncToGenerator(_regeneratorRuntime().mark(function _0x306251(_0x1cf4b9, _0xaaf8c3) {
                var _0x24492f;
                var _0x5aa3ef;
                var _0x3cc83;
                var _0x55d72a;
                var _0x1972da;
                var _0x46b54d;
                var _0x1d2076;
                var _0x56b6c2;
                var _0x310e77;
                var _0x391405;
                var _0x3e53cb;
                var _0x336094;
                var _0x2d4584;
                var _0x547fef = arguments;
                return _regeneratorRuntime().wrap(function _0x5d0886(_0x3de7ec) {
                  while (1) {
                    switch (_0x3de7ec.prev = _0x3de7ec.next) {
                      case 0:
                        _0x24492f = _0x547fef.length > 2 && _0x547fef[2] !== undefined ? _0x547fef[2] : null == undefined;
                        _0x5aa3ef = _0x1cf4b9.msg ? _0x1cf4b9.msg : _0x1cf4b9;
                        _0x3cc83 = (_0x1cf4b9.msg || _0x1cf4b9).mimetype || "";
                        _0x55d72a = _0x1cf4b9.mtype ? _0x1cf4b9.mtype.replace(/Message/gi, "") : _0x3cc83.split("/")[0];
                        _0x3de7ec.next = 6;
                        return BwIY(_0x5aa3ef, _0x55d72a);
                      case 6:
                        _0x1972da = _0x3de7ec.sent;
                        _0x46b54d = Buffer.from([]);
                        _0x1d2076 = false;
                        _0x56b6c2 = false;
                        _0x3de7ec.prev = 10;
                        _0x391405 = _asyncIterator(_0x1972da);
                      case 12:
                        _0x3de7ec.next = 14;
                        return _0x391405.next();
                      case 14:
                        if (!(_0x1d2076 = !(_0x3e53cb = _0x3de7ec.sent).done)) {
                          _0x3de7ec.next = 20;
                          break;
                        }
                        _0x336094 = _0x3e53cb.value;
                        _0x46b54d = Buffer.concat([_0x46b54d, _0x336094]);
                      case 17:
                        _0x1d2076 = false;
                        _0x3de7ec.next = 12;
                        break;
                      case 20:
                        _0x3de7ec.next = 26;
                        break;
                      case 22:
                        _0x3de7ec.prev = 22;
                        _0x3de7ec.t0 = _0x3de7ec.catch(10);
                        _0x56b6c2 = true;
                        _0x310e77 = _0x3de7ec.t0;
                      case 26:
                        _0x3de7ec.prev = 26;
                        _0x3de7ec.prev = 27;
                        if (!_0x1d2076 || _0x391405.return == null) {
                          _0x3de7ec.next = 31;
                          break;
                        }
                        _0x3de7ec.next = 31;
                        return _0x391405.return();
                      case 31:
                        _0x3de7ec.prev = 31;
                        if (!_0x56b6c2) {
                          _0x3de7ec.next = 34;
                          break;
                        }
                        throw _0x310e77;
                      case 34:
                        return _0x3de7ec.finish(31);
                      case 35:
                        return _0x3de7ec.finish(26);
                      case 36:
                        _0x3de7ec.next = 38;
                        return oYLb.fromBuffer(_0x46b54d);
                      case 38:
                        _0x2d4584 = _0x3de7ec.sent;
                        trueFileName = _0x24492f ? _0xaaf8c3 + "." + _0x2d4584.ext : _0xaaf8c3;
                        _0x3de7ec.next = 42;
                        return GGUw.writeFileSync(trueFileName, _0x46b54d);
                      case 42:
                        return _0x3de7ec.abrupt("return", trueFileName);
                      case 43:
                      case "end":
                        return _0x3de7ec.stop();
                    }
                  }
                }, _0x306251, null, [[10, 22, 26, 36], [27,, 31, 35]]);
              }));
              return function (_0x3825a8, _0x43227b) {
                return _0x20b26e.apply(this, arguments);
              };
            }();
            _0x3dbcc9.downloadMediaMessage = function () {
              var _0x3ce4ec = _asyncToGenerator(_regeneratorRuntime().mark(function _0x2d0534(_0x597c6f) {
                var _0x1878e9;
                var _0x2d48ef;
                var _0x51b28d;
                var _0x304546;
                var _0x8f6dde;
                var _0x355f38;
                var _0x286878;
                var _0x589e76;
                var _0x394e8c;
                var _0x3c9c14;
                return _regeneratorRuntime().wrap(function _0x58d17c(_0xe71108) {
                  while (1) {
                    switch (_0xe71108.prev = _0xe71108.next) {
                      case 0:
                        _0x1878e9 = (_0x597c6f.msg || _0x597c6f).mimetype || "";
                        _0x2d48ef = _0x597c6f.mtype ? _0x597c6f.mtype.replace(/Message/gi, "") : _0x1878e9.split("/")[0];
                        _0xe71108.next = 4;
                        return BwIY(_0x597c6f, _0x2d48ef);
                      case 4:
                        _0x51b28d = _0xe71108.sent;
                        _0x304546 = Buffer.from([]);
                        _0x8f6dde = false;
                        _0x355f38 = false;
                        _0xe71108.prev = 8;
                        _0x589e76 = _asyncIterator(_0x51b28d);
                      case 10:
                        _0xe71108.next = 12;
                        return _0x589e76.next();
                      case 12:
                        if (!(_0x8f6dde = !(_0x394e8c = _0xe71108.sent).done)) {
                          _0xe71108.next = 18;
                          break;
                        }
                        _0x3c9c14 = _0x394e8c.value;
                        _0x304546 = Buffer.concat([_0x304546, _0x3c9c14]);
                      case 15:
                        _0x8f6dde = false;
                        _0xe71108.next = 10;
                        break;
                      case 18:
                        _0xe71108.next = 24;
                        break;
                      case 20:
                        _0xe71108.prev = 20;
                        _0xe71108.t0 = _0xe71108.catch(8);
                        _0x355f38 = true;
                        _0x286878 = _0xe71108.t0;
                      case 24:
                        _0xe71108.prev = 24;
                        _0xe71108.prev = 25;
                        if (!_0x8f6dde || _0x589e76.return == null) {
                          _0xe71108.next = 29;
                          break;
                        }
                        _0xe71108.next = 29;
                        return _0x589e76.return();
                      case 29:
                        _0xe71108.prev = 29;
                        if (!_0x355f38) {
                          _0xe71108.next = 32;
                          break;
                        }
                        throw _0x286878;
                      case 32:
                        return _0xe71108.finish(29);
                      case 33:
                        return _0xe71108.finish(24);
                      case 34:
                        return _0xe71108.abrupt("return", _0x304546);
                      case 35:
                      case "end":
                        return _0xe71108.stop();
                    }
                  }
                }, _0x2d0534, null, [[8, 20, 24, 34], [25,, 29, 33]]);
              }));
              return function (_0x36646b) {
                return _0x3ce4ec.apply(this, arguments);
              };
            }();
            _0x3dbcc9.sendButtons = function () {
              var _0x46bfab = _asyncToGenerator(_regeneratorRuntime().mark(function _0x1e6348(_0x31d48d) {
                var _0x280e18;
                var _0x3138b9;
                var _0x1b4242;
                var _0x47aa5d;
                var _0x501ad1;
                var _0x413c55;
                var _0x455333;
                var _0x315043;
                var _0x23d1ca;
                var _0x2a1437;
                var _0x29b1eb;
                var _0x20984b;
                var _0x5790e7;
                var _0x47346f;
                var _0x2a7e94;
                var _0x4a1d28;
                var _0x55467c;
                var _0x39a950;
                var _0x5568b4;
                var _0x5502b0;
                var _0x570c4d;
                var _0xb33b73;
                var _0x437e91;
                var _0x120ef9;
                var _0x51f29d;
                var _0x5777c0;
                var _0x2250e6 = arguments;
                return _regeneratorRuntime().wrap(function _0x249eb7(_0x248ffe) {
                  while (1) {
                    switch (_0x248ffe.prev = _0x248ffe.next) {
                      case 0:
                        _0x1b4242 = _0x2250e6.length > 1 && _0x2250e6[1] !== undefined ? _0x2250e6[1] : _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "body", ""), "footer", ""), "title", ""), "buttons", []), "sections", []);
                        _0x47aa5d = _0x2250e6.length > 2 && _0x2250e6[2] !== undefined ? _0x2250e6[2] : {};
                        _0x501ad1 = [];
                        _0x47346f = 37;
                      case 4:
                        if (!(_0x47346f < 38)) {
                          _0x248ffe.next = 55;
                          break;
                        }
                        _0x248ffe.t0 = _0x47346f;
                        _0x248ffe.next = _0x248ffe.t0 === 18 ? 8 : _0x248ffe.t0 === 37 ? 51 : 53;
                        break;
                      case 8:
                        _0x47346f = 38;
                        _0x413c55 = _createForOfIteratorHelper(_0x1b4242?.buttons);
                        _0x248ffe.prev = 10;
                        _0x413c55.s();
                      case 12:
                        if ((_0x455333 = _0x413c55.n()).done) {
                          _0x248ffe.next = 42;
                          break;
                        }
                        _0x315043 = _0x455333.value;
                        _0x2a7e94 = 19;
                      case 15:
                        if (!(_0x2a7e94 < 29)) {
                          _0x248ffe.next = 40;
                          break;
                        }
                        _0x248ffe.t1 = _0x2a7e94;
                        _0x248ffe.next = _0x248ffe.t1 === 19 ? 19 : _0x248ffe.t1 === 26 ? 21 : _0x248ffe.t1 === 24 ? 24 : 38;
                        break;
                      case 19:
                        _0x2a7e94 = _0x315043 !== null && _0x315043 !== undefined && _0x315043.displayText && _0x315043 !== null && _0x315043 !== undefined && _0x315043.url ? 26 : 24;
                        return _0x248ffe.abrupt("break", 38);
                      case 21:
                        _0x2a7e94 = 29;
                        _0x501ad1.push(_defineProperty(_defineProperty({}, "name", "cta_url"), "buttonParamsJson", `{ "display_text": "${_0x315043?.displayText}", "url": "${_0x315043?.url}" }`));
                        return _0x248ffe.abrupt("break", 38);
                      case 24:
                        _0x2a7e94 = 29;
                        _0x4a1d28 = 19;
                      case 26:
                        if (!(_0x4a1d28 < 29)) {
                          _0x248ffe.next = 37;
                          break;
                        }
                        _0x248ffe.t2 = _0x4a1d28;
                        _0x248ffe.next = _0x248ffe.t2 === 19 ? 30 : _0x248ffe.t2 === 26 ? 32 : 35;
                        break;
                      case 30:
                        _0x4a1d28 = _0x315043 !== null && _0x315043 !== undefined && _0x315043.displayText && _0x315043 !== null && _0x315043 !== undefined && _0x315043.id ? 26 : 29;
                        return _0x248ffe.abrupt("break", 35);
                      case 32:
                        _0x4a1d28 = 29;
                        _0x501ad1.push(_defineProperty(_defineProperty({}, "name", "quick_reply"), "buttonParamsJson", `{ "display_text": "${_0x315043?.displayText}", "id": "${_0x315043?.id}" }`));
                        return _0x248ffe.abrupt("break", 35);
                      case 35:
                        _0x248ffe.next = 26;
                        break;
                      case 37:
                        return _0x248ffe.abrupt("break", 38);
                      case 38:
                        _0x248ffe.next = 15;
                        break;
                      case 40:
                        _0x248ffe.next = 12;
                        break;
                      case 42:
                        _0x248ffe.next = 47;
                        break;
                      case 44:
                        _0x248ffe.prev = 44;
                        _0x248ffe.t3 = _0x248ffe.catch(10);
                        _0x413c55.e(_0x248ffe.t3);
                      case 47:
                        _0x248ffe.prev = 47;
                        _0x413c55.f();
                        return _0x248ffe.finish(47);
                      case 50:
                        return _0x248ffe.abrupt("break", 53);
                      case 51:
                        _0x47346f = _0x1b4242 !== null && _0x1b4242 !== undefined && _0x1b4242.buttons && _0x1b4242 !== null && _0x1b4242 !== undefined && (_0x280e18 = _0x1b4242.buttons) !== null && _0x280e18 !== undefined && _0x280e18.length ? 18 : 38;
                        return _0x248ffe.abrupt("break", 53);
                      case 53:
                        _0x248ffe.next = 4;
                        break;
                      case 55:
                        _0x55467c = 19;
                      case 56:
                        if (!(_0x55467c < 29)) {
                          _0x248ffe.next = 206;
                          break;
                        }
                        _0x248ffe.t4 = _0x55467c;
                        _0x248ffe.next = _0x248ffe.t4 === 19 ? 60 : _0x248ffe.t4 === 26 ? 62 : 204;
                        break;
                      case 60:
                        _0x55467c = _0x1b4242 !== null && _0x1b4242 !== undefined && _0x1b4242.sections && _0x1b4242 !== null && _0x1b4242 !== undefined && (_0x3138b9 = _0x1b4242.sections) !== null && _0x3138b9 !== undefined && _0x3138b9.length ? 26 : 29;
                        return _0x248ffe.abrupt("break", 204);
                      case 62:
                        _0x55467c = 29;
                        _0x23d1ca = "";
                        _0x39a950 = 14;
                      case 65:
                        if (!(_0x39a950 < 38)) {
                          _0x248ffe.next = 76;
                          break;
                        }
                        _0x248ffe.t5 = _0x39a950;
                        _0x248ffe.next = _0x248ffe.t5 === 14 ? 69 : _0x248ffe.t5 === 21 ? 71 : 74;
                        break;
                      case 69:
                        _0x39a950 = _0x23d1ca == "" ? 21 : 38;
                        return _0x248ffe.abrupt("break", 74);
                      case 71:
                        _0x39a950 = 38;
                        _0x23d1ca += "[";
                        return _0x248ffe.abrupt("break", 74);
                      case 74:
                        _0x248ffe.next = 65;
                        break;
                      case 76:
                        _0x2a1437 = _createForOfIteratorHelper(_0x1b4242?.sections);
                        _0x248ffe.prev = 77;
                        _0x2a1437.s();
                      case 79:
                        if ((_0x29b1eb = _0x2a1437.n()).done) {
                          _0x248ffe.next = 193;
                          break;
                        }
                        _0x20984b = _0x29b1eb.value;
                        _0x5568b4 = 9;
                      case 82:
                        if (!(_0x5568b4 < 37)) {
                          _0x248ffe.next = 191;
                          break;
                        }
                        _0x248ffe.t6 = _0x5568b4;
                        _0x248ffe.next = _0x248ffe.t6 === 9 ? 86 : _0x248ffe.t6 === 15 ? 88 : _0x248ffe.t6 === 36 ? 91 : 189;
                        break;
                      case 86:
                        _0x5568b4 = !_0x23d1ca.includes("[{") && _0x20984b !== null && _0x20984b !== undefined && _0x20984b.header && _0x20984b !== null && _0x20984b !== undefined && _0x20984b.title && _0x20984b !== null && _0x20984b !== undefined && _0x20984b.description && _0x20984b !== null && _0x20984b !== undefined && _0x20984b.id ? 15 : 36;
                        return _0x248ffe.abrupt("break", 189);
                      case 88:
                        _0x5568b4 = 37;
                        _0x23d1ca += `{ "header": "${_0x20984b?.header}", "title": "${_0x20984b?.title}", "description": "${_0x20984b?.description}", "id": "${_0x20984b?.id}" }`;
                        return _0x248ffe.abrupt("break", 189);
                      case 91:
                        _0x5568b4 = 37;
                        _0x5502b0 = 18;
                      case 93:
                        if (!(_0x5502b0 < 28)) {
                          _0x248ffe.next = 188;
                          break;
                        }
                        _0x248ffe.t7 = _0x5502b0;
                        _0x248ffe.next = _0x248ffe.t7 === 23 ? 97 : _0x248ffe.t7 === 27 ? 100 : _0x248ffe.t7 === 18 ? 184 : 186;
                        break;
                      case 97:
                        _0x5502b0 = 28;
                        _0x23d1ca += `{ "title": "${_0x20984b?.title}", "description": "${_0x20984b?.description}", "id": "${_0x20984b?.id}" }`;
                        return _0x248ffe.abrupt("break", 186);
                      case 100:
                        _0x5502b0 = 28;
                        _0x570c4d = 17;
                      case 102:
                        if (!(_0x570c4d < 27)) {
                          _0x248ffe.next = 183;
                          break;
                        }
                        _0x248ffe.t8 = _0x570c4d;
                        _0x248ffe.next = _0x248ffe.t8 === 17 ? 106 : _0x248ffe.t8 === 26 ? 108 : _0x248ffe.t8 === 19 ? 178 : 181;
                        break;
                      case 106:
                        _0x570c4d = !_0x23d1ca.includes("[{") && _0x20984b !== null && _0x20984b !== undefined && _0x20984b.header && _0x20984b !== null && _0x20984b !== undefined && _0x20984b.title && (_0x20984b === null || _0x20984b === undefined || !_0x20984b.description) && _0x20984b !== null && _0x20984b !== undefined && _0x20984b.id ? 19 : 26;
                        return _0x248ffe.abrupt("break", 181);
                      case 108:
                        _0x570c4d = 27;
                        _0xb33b73 = 20;
                      case 110:
                        if (!(_0xb33b73 < 38)) {
                          _0x248ffe.next = 177;
                          break;
                        }
                        _0x248ffe.t9 = _0xb33b73;
                        _0x248ffe.next = _0x248ffe.t9 === 20 ? 114 : _0x248ffe.t9 === 37 ? 116 : _0x248ffe.t9 === 18 ? 119 : 175;
                        break;
                      case 114:
                        _0xb33b73 = !_0x23d1ca.includes("[{") && (_0x20984b === null || _0x20984b === undefined || !_0x20984b.header) && _0x20984b !== null && _0x20984b !== undefined && _0x20984b.title && (_0x20984b === null || _0x20984b === undefined || !_0x20984b.description) && _0x20984b !== null && _0x20984b !== undefined && _0x20984b.id ? 37 : 18;
                        return _0x248ffe.abrupt("break", 175);
                      case 116:
                        _0xb33b73 = 38;
                        _0x23d1ca += `{ "title": "${_0x20984b?.title}", "id": "${_0x20984b?.id}" }`;
                        return _0x248ffe.abrupt("break", 175);
                      case 119:
                        _0xb33b73 = 38;
                        _0x437e91 = 15;
                      case 121:
                        if (!(_0x437e91 < 37)) {
                          _0x248ffe.next = 174;
                          break;
                        }
                        _0x248ffe.t10 = _0x437e91;
                        _0x248ffe.next = _0x248ffe.t10 === 30 ? 125 : _0x248ffe.t10 === 15 ? 167 : _0x248ffe.t10 === 36 ? 169 : 172;
                        break;
                      case 125:
                        _0x437e91 = 37;
                        _0x120ef9 = 28;
                      case 127:
                        if (!(_0x120ef9 < 29)) {
                          _0x248ffe.next = 166;
                          break;
                        }
                        _0x248ffe.t11 = _0x120ef9;
                        _0x248ffe.next = _0x248ffe.t11 === 13 ? 131 : _0x248ffe.t11 === 28 ? 134 : _0x248ffe.t11 === 14 ? 136 : 164;
                        break;
                      case 131:
                        _0x120ef9 = 29;
                        _0x23d1ca += `,{ "title": "${_0x20984b?.title}", "description": "${_0x20984b?.description}", "id": "${_0x20984b?.id}" }`;
                        return _0x248ffe.abrupt("break", 164);
                      case 134:
                        _0x120ef9 = _0x23d1ca.includes("{") && (_0x20984b === null || _0x20984b === undefined || !_0x20984b.header) && _0x20984b !== null && _0x20984b !== undefined && _0x20984b.title && _0x20984b !== null && _0x20984b !== undefined && _0x20984b.description && _0x20984b !== null && _0x20984b !== undefined && _0x20984b.id ? 13 : 14;
                        return _0x248ffe.abrupt("break", 164);
                      case 136:
                        _0x120ef9 = 29;
                        _0x51f29d = 21;
                      case 138:
                        if (!(_0x51f29d < 38)) {
                          _0x248ffe.next = 163;
                          break;
                        }
                        _0x248ffe.t12 = _0x51f29d;
                        _0x248ffe.next = _0x248ffe.t12 === 20 ? 142 : _0x248ffe.t12 === 37 ? 145 : _0x248ffe.t12 === 21 ? 159 : 161;
                        break;
                      case 142:
                        _0x51f29d = 38;
                        _0x23d1ca += `,{ "header": "${_0x20984b?.header}", "title": "${_0x20984b?.title}", "id": "${_0x20984b?.id}" }`;
                        return _0x248ffe.abrupt("break", 161);
                      case 145:
                        _0x51f29d = 38;
                        _0x5777c0 = 18;
                      case 147:
                        if (!(_0x5777c0 < 28)) {
                          _0x248ffe.next = 158;
                          break;
                        }
                        _0x248ffe.t13 = _0x5777c0;
                        _0x248ffe.next = _0x248ffe.t13 === 18 ? 151 : _0x248ffe.t13 === 23 ? 153 : 156;
                        break;
                      case 151:
                        _0x5777c0 = _0x23d1ca.includes("{") && (_0x20984b === null || _0x20984b === undefined || !_0x20984b.header) && _0x20984b !== null && _0x20984b !== undefined && _0x20984b.title && (_0x20984b === null || _0x20984b === undefined || !_0x20984b.description) && _0x20984b !== null && _0x20984b !== undefined && _0x20984b.id ? 23 : 28;
                        return _0x248ffe.abrupt("break", 156);
                      case 153:
                        _0x5777c0 = 28;
                        _0x23d1ca += `,{ "title": "${_0x20984b?.title}", "id": "${_0x20984b?.id}" }`;
                        return _0x248ffe.abrupt("break", 156);
                      case 156:
                        _0x248ffe.next = 147;
                        break;
                      case 158:
                        return _0x248ffe.abrupt("break", 161);
                      case 159:
                        _0x51f29d = _0x23d1ca.includes("{") && _0x20984b !== null && _0x20984b !== undefined && _0x20984b.header && _0x20984b !== null && _0x20984b !== undefined && _0x20984b.title && (_0x20984b === null || _0x20984b === undefined || !_0x20984b.description) && _0x20984b !== null && _0x20984b !== undefined && _0x20984b.id ? 20 : 37;
                        return _0x248ffe.abrupt("break", 161);
                      case 161:
                        _0x248ffe.next = 138;
                        break;
                      case 163:
                        return _0x248ffe.abrupt("break", 164);
                      case 164:
                        _0x248ffe.next = 127;
                        break;
                      case 166:
                        return _0x248ffe.abrupt("break", 172);
                      case 167:
                        _0x437e91 = _0x23d1ca.includes("{") && _0x20984b !== null && _0x20984b !== undefined && _0x20984b.header && _0x20984b !== null && _0x20984b !== undefined && _0x20984b.title && _0x20984b !== null && _0x20984b !== undefined && _0x20984b.description && _0x20984b !== null && _0x20984b !== undefined && _0x20984b.id ? 36 : 30;
                        return _0x248ffe.abrupt("break", 172);
                      case 169:
                        _0x437e91 = 37;
                        _0x23d1ca += `,{ "header": "${_0x20984b?.header}", "title": "${_0x20984b?.title}", "description": "${_0x20984b?.description}", "id": "${_0x20984b?.id}" }`;
                        return _0x248ffe.abrupt("break", 172);
                      case 172:
                        _0x248ffe.next = 121;
                        break;
                      case 174:
                        return _0x248ffe.abrupt("break", 175);
                      case 175:
                        _0x248ffe.next = 110;
                        break;
                      case 177:
                        return _0x248ffe.abrupt("break", 181);
                      case 178:
                        _0x570c4d = 27;
                        _0x23d1ca += `{ "header": "${_0x20984b?.header}", "title": "${_0x20984b?.title}", "id": "${_0x20984b?.id}" }`;
                        return _0x248ffe.abrupt("break", 181);
                      case 181:
                        _0x248ffe.next = 102;
                        break;
                      case 183:
                        return _0x248ffe.abrupt("break", 186);
                      case 184:
                        _0x5502b0 = !_0x23d1ca.includes("[{") && (_0x20984b === null || _0x20984b === undefined || !_0x20984b.header) && _0x20984b !== null && _0x20984b !== undefined && _0x20984b.title && _0x20984b !== null && _0x20984b !== undefined && _0x20984b.description && _0x20984b !== null && _0x20984b !== undefined && _0x20984b.id ? 23 : 27;
                        return _0x248ffe.abrupt("break", 186);
                      case 186:
                        _0x248ffe.next = 93;
                        break;
                      case 188:
                        return _0x248ffe.abrupt("break", 189);
                      case 189:
                        _0x248ffe.next = 82;
                        break;
                      case 191:
                        _0x248ffe.next = 79;
                        break;
                      case 193:
                        _0x248ffe.next = 198;
                        break;
                      case 195:
                        _0x248ffe.prev = 195;
                        _0x248ffe.t14 = _0x248ffe.catch(77);
                        _0x2a1437.e(_0x248ffe.t14);
                      case 198:
                        _0x248ffe.prev = 198;
                        _0x2a1437.f();
                        return _0x248ffe.finish(198);
                      case 201:
                        _0x23d1ca += "]";
                        _0x501ad1.push(_defineProperty(_defineProperty({}, "name", "single_select"), "buttonParamsJson", `{\\n                    "title": "${_0x1b4242?.title}",\\n                    "sections": [{\\n                        "rows": ${_0x23d1ca}\\n                    }]\\n                }`));
                        return _0x248ffe.abrupt("break", 204);
                      case 204:
                        _0x248ffe.next = 56;
                        break;
                      case 206:
                        _0x5790e7 = UceC(_0x31d48d, _defineProperty({}, "viewOnceMessage", _defineProperty({}, "message", _defineProperty({}, "interactiveMessage", fstM.Message.InteractiveMessage.create(_defineProperty(_defineProperty(_defineProperty({}, "body", fstM.Message.InteractiveMessage.Body.create(_defineProperty({}, "text", _0x1b4242?.body))), "footer", fstM.Message.InteractiveMessage.Footer.create(_defineProperty({}, "text", _0x1b4242?.footer))), "nativeFlowMessage", fstM.Message.InteractiveMessage.NativeFlowMessage.create(_defineProperty({}, "buttons", _0x501ad1))))))), _0x47aa5d);
                        _0x248ffe.next = 209;
                        return _0x3dbcc9.relayMessage(_0x5790e7.key.remoteJid, _0x5790e7.message, _defineProperty({}, "messageId", _0x5790e7.key.id));
                      case 209:
                        return _0x248ffe.abrupt("return", _0x248ffe.sent);
                      case 210:
                      case "end":
                        return _0x248ffe.stop();
                    }
                  }
                }, _0x1e6348, null, [[10, 44, 47, 50], [77, 195, 198, 201]]);
              }));
              return function (_0x294084) {
                return _0x46bfab.apply(this, arguments);
              };
            }();
            _0x3dbcc9.sendMedia = function () {
              var _0x121f57 = _asyncToGenerator(_regeneratorRuntime().mark(function _0x21950b(_0x218c08, _0x5db5cb) {
                var _0x1b3f1a;
                var _0x8bda1d;
                var _0x28fb56;
                var _0x4a12fb;
                var _0x56fb3e;
                var _0x513c08;
                var _0x1d9f84;
                var _0x46035a;
                var _0x592db3;
                var _0xc68de0;
                var _0x2d8f9c;
                var _0x3a3db8;
                var _0x54ce25;
                var _0x27b868;
                var _0x806470;
                var _0x25e7ca;
                var _0x1a0ba0;
                var _0x5526fc;
                var _0x34f2e0;
                var _0x4cb3c5;
                var _0x2a8e8d;
                var _0x473244;
                var _0x2430ea;
                var _0x11e89a;
                var _0x45d543 = arguments;
                return _regeneratorRuntime().wrap(function _0x214256(_0x121836) {
                  while (1) {
                    switch (_0x121836.prev = _0x121836.next) {
                      case 0:
                        _0x1b3f1a = _0x45d543.length > 2 && _0x45d543[2] !== undefined ? _0x45d543[2] : "";
                        _0x8bda1d = _0x45d543.length > 3 && _0x45d543[3] !== undefined ? _0x45d543[3] : "";
                        _0x28fb56 = _0x45d543.length > 4 && _0x45d543[4] !== undefined ? _0x45d543[4] : "";
                        _0x4a12fb = _0x45d543.length > 5 && _0x45d543[5] !== undefined ? _0x45d543[5] : {};
                        _0x121836.next = 6;
                        return _0x3dbcc9.getFile(_0x5db5cb, NaN !== NaN);
                      case 6:
                        _0x56fb3e = _0x121836.sent;
                        _0x513c08 = _0x56fb3e.mime;
                        _0x1d9f84 = _0x56fb3e.ext;
                        _0x46035a = _0x56fb3e.res;
                        _0x592db3 = _0x56fb3e.data;
                        _0xc68de0 = _0x56fb3e.filename;
                        _0x5526fc = 16;
                      case 9:
                        if (!(_0x5526fc < 30)) {
                          _0x121836.next = 36;
                          break;
                        }
                        _0x121836.t0 = _0x5526fc;
                        _0x121836.next = _0x121836.t0 === 16 ? 13 : _0x121836.t0 === 29 ? 15 : 34;
                        break;
                      case 13:
                        _0x5526fc = _0x46035a && _0x46035a.status !== 200 || cFqmH.length <= 65536 ? 29 : 30;
                        return _0x121836.abrupt("break", 34);
                      case 15:
                        _0x5526fc = 30;
                        _0x121836.prev = 16;
                        throw _defineProperty({}, "json", JSON.parse(cFqmH.toString()));
                      case 20:
                        _0x121836.prev = 20;
                        _0x121836.t1 = _0x121836.catch(16);
                        _0x34f2e0 = 10;
                      case 23:
                        if (!(_0x34f2e0 < 26)) {
                          _0x121836.next = 33;
                          break;
                        }
                        _0x121836.t2 = _0x34f2e0;
                        _0x121836.next = _0x121836.t2 === 22 ? 27 : _0x121836.t2 === 10 ? 29 : 31;
                        break;
                      case 27:
                        _0x34f2e0 = 26;
                        throw _0x121836.t1.json;
                      case 29:
                        _0x34f2e0 = _0x121836.t1.json ? 22 : 26;
                        return _0x121836.abrupt("break", 31);
                      case 31:
                        _0x121836.next = 23;
                        break;
                      case 33:
                        return _0x121836.abrupt("break", 34);
                      case 34:
                        _0x121836.next = 9;
                        break;
                      case 36:
                        _0x2d8f9c = "";
                        _0x3a3db8 = _0x513c08;
                        _0x54ce25 = _0xc68de0;
                        _0x4cb3c5 = 21;
                      case 38:
                        if (!(_0x4cb3c5 < 38)) {
                          _0x121836.next = 49;
                          break;
                        }
                        _0x121836.t3 = _0x4cb3c5;
                        _0x121836.next = _0x121836.t3 === 21 ? 42 : _0x121836.t3 === 20 ? 44 : 47;
                        break;
                      case 42:
                        _0x4cb3c5 = _0x4a12fb.asDocument ? 20 : 38;
                        return _0x121836.abrupt("break", 47);
                      case 44:
                        _0x4cb3c5 = 38;
                        _0x2d8f9c = "document";
                        return _0x121836.abrupt("break", 47);
                      case 47:
                        _0x121836.next = 38;
                        break;
                      case 49:
                        _0x2a8e8d = 10;
                      case 50:
                        if (!(_0x2a8e8d < 26)) {
                          _0x121836.next = 117;
                          break;
                        }
                        _0x121836.t4 = _0x2a8e8d;
                        _0x121836.next = _0x121836.t4 === 25 ? 54 : _0x121836.t4 === 22 ? 99 : _0x121836.t4 === 10 ? 113 : 115;
                        break;
                      case 54:
                        _0x2a8e8d = 26;
                        _0x473244 = 17;
                      case 56:
                        if (!(_0x473244 < 27)) {
                          _0x121836.next = 98;
                          break;
                        }
                        _0x121836.t5 = _0x473244;
                        _0x121836.next = _0x121836.t5 === 17 ? 60 : _0x121836.t5 === 26 ? 62 : _0x121836.t5 === 19 ? 93 : 96;
                        break;
                      case 60:
                        _0x473244 = /image/.test(_0x513c08) ? 19 : 26;
                        return _0x121836.abrupt("break", 96);
                      case 62:
                        _0x473244 = 27;
                        _0x2430ea = 26;
                      case 64:
                        if (!(_0x2430ea < 29)) {
                          _0x121836.next = 92;
                          break;
                        }
                        _0x121836.t6 = _0x2430ea;
                        _0x121836.next = _0x121836.t6 === 28 ? 68 : _0x121836.t6 === 24 ? 85 : _0x121836.t6 === 26 ? 88 : 90;
                        break;
                      case 68:
                        _0x2430ea = 29;
                        _0x11e89a = 28;
                      case 70:
                        if (!(_0x11e89a < 29)) {
                          _0x121836.next = 84;
                          break;
                        }
                        _0x121836.t7 = _0x11e89a;
                        _0x121836.next = _0x121836.t7 === 14 ? 74 : _0x121836.t7 === 28 ? 77 : _0x121836.t7 === 13 ? 79 : 82;
                        break;
                      case 74:
                        _0x11e89a = 29;
                        _0x2d8f9c = "document";
                        return _0x121836.abrupt("break", 82);
                      case 77:
                        _0x11e89a = /audio/.test(_0x513c08) ? 13 : 14;
                        return _0x121836.abrupt("break", 82);
                      case 79:
                        _0x11e89a = 29;
                        _0x2d8f9c = "audio";
                        return _0x121836.abrupt("break", 82);
                      case 82:
                        _0x121836.next = 70;
                        break;
                      case 84:
                        return _0x121836.abrupt("break", 90);
                      case 85:
                        _0x2430ea = 29;
                        _0x2d8f9c = "video";
                        return _0x121836.abrupt("break", 90);
                      case 88:
                        _0x2430ea = /video/.test(_0x513c08) ? 24 : 28;
                        return _0x121836.abrupt("break", 90);
                      case 90:
                        _0x121836.next = 64;
                        break;
                      case 92:
                        return _0x121836.abrupt("break", 96);
                      case 93:
                        _0x473244 = 27;
                        _0x2d8f9c = "image";
                        return _0x121836.abrupt("break", 96);
                      case 96:
                        _0x121836.next = 56;
                        break;
                      case 98:
                        return _0x121836.abrupt("break", 115);
                      case 99:
                        _0x2a8e8d = 26;
                        _0x27b868 = require("./system/lib/exif");
                        _0x806470 = _0x27b868.writeExif;
                        _0x25e7ca = {};
                        _0x25e7ca.mimetype = _0x513c08;
                        _0x25e7ca.data = _0x592db3;
                        _0x1a0ba0 = _0x25e7ca;
                        _0x121836.next = 107;
                        return _0x806470(_0x1a0ba0, _defineProperty(_defineProperty(_defineProperty({}, "packname", _0x4a12fb.packname ? _0x4a12fb.packname : global.packname), "author", _0x4a12fb.author ? _0x4a12fb.author : global.author), "categories", _0x4a12fb.categories ? _0x4a12fb.categories : []));
                      case 107:
                        _0x54ce25 = _0x121836.sent;
                        _0x121836.next = 110;
                        return GGUw.promises.unlink(_0xc68de0);
                      case 110:
                        _0x2d8f9c = "sticker";
                        _0x3a3db8 = "image/webp";
                        return _0x121836.abrupt("break", 115);
                      case 113:
                        _0x2a8e8d = _0x4a12fb.asSticker || /webp/.test(_0x513c08) ? 22 : 25;
                        return _0x121836.abrupt("break", 115);
                      case 115:
                        _0x121836.next = 50;
                        break;
                      case 117:
                        _0x121836.next = 119;
                        return _0x3dbcc9.sendMessage(_0x218c08, _objectSpread(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, _0x2d8f9c, _defineProperty({}, "url", _0x54ce25)), "caption", _0x8bda1d), "mimetype", _0x3a3db8), "fileName", _0x1b3f1a), _0x4a12fb), _objectSpread(_defineProperty({}, "quoted", _0x28fb56), _0x4a12fb));
                      case 119:
                        return _0x121836.abrupt("return", GGUw.promises.unlink(_0x54ce25));
                      case 120:
                      case "end":
                        return _0x121836.stop();
                    }
                  }
                }, _0x21950b, null, [[16, 20]]);
              }));
              return function (_0x3d5019, _0xa4de6d) {
                return _0x121f57.apply(this, arguments);
              };
            }();
            _0x3dbcc9.copyNForward = function () {
              var _0x1c3d51 = _asyncToGenerator(_regeneratorRuntime().mark(function _0x2f1ebe(_0x473dc7, _0x3973e5) {
                var _0x587da5;
                var _0x46684d;
                var _0x36dfc3;
                var _0x6e5354;
                var _0x1e164e;
                var _0x302e89;
                var _0x260bf6;
                var _0x274097;
                var _0x3c2ab7;
                var _0x43d52e;
                var _0x22dc7f = arguments;
                return _regeneratorRuntime().wrap(function _0x2184a2(_0x301df1) {
                  while (1) {
                    switch (_0x301df1.prev = _0x301df1.next) {
                      case 0:
                        _0x587da5 = _0x22dc7f.length > 2 && _0x22dc7f[2] !== undefined ? _0x22dc7f[2] : false;
                        _0x46684d = _0x22dc7f.length > 3 && _0x22dc7f[3] !== undefined ? _0x22dc7f[3] : {};
                        _0x3c2ab7 = 21;
                      case 3:
                        if (!(_0x3c2ab7 < 38)) {
                          _0x301df1.next = 18;
                          break;
                        }
                        _0x301df1.t0 = _0x3c2ab7;
                        _0x301df1.next = _0x301df1.t0 === 21 ? 7 : _0x301df1.t0 === 20 ? 9 : 16;
                        break;
                      case 7:
                        _0x3c2ab7 = _0x46684d.readViewOnce ? 20 : 38;
                        return _0x301df1.abrupt("break", 16);
                      case 9:
                        _0x3c2ab7 = 38;
                        _0x3973e5.message = _0x3973e5.message && _0x3973e5.message.ephemeralMessage && _0x3973e5.message.ephemeralMessage.message ? _0x3973e5.message.ephemeralMessage.message : _0x3973e5.message || undefined;
                        _0x36dfc3 = Object.keys(_0x3973e5.message.viewOnceMessage.message)[0];
                        delete (_0x3973e5.message && _0x3973e5.message.ignore ? _0x3973e5.message.ignore : _0x3973e5.message || undefined);
                        delete _0x3973e5.message.viewOnceMessage.message[_0x36dfc3].viewOnce;
                        _0x3973e5.message = _objectSpread({}, _0x3973e5.message.viewOnceMessage.message);
                        return _0x301df1.abrupt("break", 16);
                      case 16:
                        _0x301df1.next = 3;
                        break;
                      case 18:
                        _0x6e5354 = Object.keys(_0x3973e5.message)[0];
                        _0x301df1.next = 21;
                        return keUC(_0x3973e5, _0x587da5);
                      case 21:
                        _0x1e164e = _0x301df1.sent;
                        _0x302e89 = Object.keys(_0x1e164e)[0];
                        _0x260bf6 = {};
                        _0x43d52e = 18;
                      case 25:
                        if (!(_0x43d52e < 28)) {
                          _0x301df1.next = 36;
                          break;
                        }
                        _0x301df1.t1 = _0x43d52e;
                        _0x301df1.next = _0x301df1.t1 === 18 ? 29 : _0x301df1.t1 === 23 ? 31 : 34;
                        break;
                      case 29:
                        _0x43d52e = _0x6e5354 != "conversation" ? 23 : 28;
                        return _0x301df1.abrupt("break", 34);
                      case 31:
                        _0x43d52e = 28;
                        _0x260bf6 = _0x3973e5.message[_0x6e5354].contextInfo;
                        return _0x301df1.abrupt("break", 34);
                      case 34:
                        _0x301df1.next = 25;
                        break;
                      case 36:
                        _0x1e164e[_0x302e89].contextInfo = _objectSpread(_objectSpread({}, _0x260bf6), _0x1e164e[_0x302e89].contextInfo);
                        _0x301df1.next = 39;
                        return UceC(_0x473dc7, _0x1e164e, _0x46684d ? _objectSpread(_objectSpread(_objectSpread({}, _0x1e164e[_0x302e89]), _0x46684d), _0x46684d.contextInfo ? _defineProperty({}, "contextInfo", _objectSpread(_objectSpread({}, _0x1e164e[_0x302e89].contextInfo), _0x46684d.contextInfo)) : {}) : {});
                      case 39:
                        _0x274097 = _0x301df1.sent;
                        _0x301df1.next = 42;
                        return _0x3dbcc9.relayMessage(_0x473dc7, _0x274097.message, _defineProperty({}, "messageId", _0x274097.key.id));
                      case 42:
                        return _0x301df1.abrupt("return", _0x274097);
                      case 43:
                      case "end":
                        return _0x301df1.stop();
                    }
                  }
                }, _0x2f1ebe);
              }));
              return function (_0x1e47fd, _0x11443c) {
                return _0x1c3d51.apply(this, arguments);
              };
            }();
            _0x3dbcc9.cMod = function (_0x1d184a, _0x1b3d34, _0x2cbf55 = "", _0x5f292f = _0x3dbcc9.user.id, _0x54feb7 = {}) {
              var _0x533ad9 = Object.keys(_0x1b3d34.message)[0];
              var _0x242f98 = _0x533ad9 === "ephemeralMessage";
              _0x4b2ede = 20;
              while (_0x4b2ede < 38) {
                switch (_0x4b2ede) {
                  case 20:
                    _0x4b2ede = _0x242f98 ? 37 : 38;
                    break;
                  case 37:
                    _0x4b2ede = 38;
                    {
                      _0x533ad9 = Object.keys(_0x1b3d34.message.ephemeralMessage.message)[0];
                    }
                    break;
                }
              }
              var _0x522005 = _0x242f98 ? _0x1b3d34.message.ephemeralMessage.message : _0x1b3d34.message;
              var _0x1c5ee1 = _0x522005[_0x533ad9];
              _0x537da5 = 20;
              while (_0x537da5 < 38) {
                switch (_0x537da5) {
                  case 37:
                    _0x537da5 = 38;
                    _0x522005[_0x533ad9] = _0x2cbf55 || _0x1c5ee1;
                    break;
                  case 18:
                    _0x537da5 = 38;
                    _0x53ddd1 = 10;
                    while (_0x53ddd1 < 26) {
                      switch (_0x53ddd1) {
                        case 22:
                          _0x53ddd1 = 26;
                          _0x1c5ee1.caption = _0x2cbf55 || _0x1c5ee1.caption;
                          break;
                        case 25:
                          _0x53ddd1 = 26;
                          _0x2312fd = 19;
                          while (_0x2312fd < 29) {
                            switch (_0x2312fd) {
                              case 26:
                                _0x2312fd = 29;
                                _0x1c5ee1.text = _0x2cbf55 || _0x1c5ee1.text;
                                break;
                              case 19:
                                _0x2312fd = _0x1c5ee1.text ? 26 : 29;
                                break;
                            }
                          }
                          break;
                        case 10:
                          _0x53ddd1 = _0x1c5ee1.caption ? 22 : 25;
                          break;
                      }
                    }
                    break;
                  case 20:
                    _0x537da5 = typeof _0x1c5ee1 === "string" ? 37 : 18;
                    break;
                }
              }
              _0x212aae = 7;
              while (_0x212aae < 39) {
                switch (_0x212aae) {
                  case 7:
                    _0x212aae = typeof _0x1c5ee1 !== "string" ? 11 : 39;
                    break;
                  case 11:
                    _0x212aae = 39;
                    _0x522005[_0x533ad9] = _objectSpread(_objectSpread({}, _0x1c5ee1), _0x54feb7);
                    break;
                }
              }
              _0x2004d1 = 20;
              while (_0x2004d1 < 38) {
                switch (_0x2004d1) {
                  case 20:
                    _0x2004d1 = _0x1b3d34.key.participant ? 37 : 18;
                    break;
                  case 18:
                    _0x2004d1 = 38;
                    _0xe6a094 = 7;
                    while (_0xe6a094 < 39) {
                      switch (_0xe6a094) {
                        case 7:
                          _0xe6a094 = _0x1b3d34.key.participant ? 11 : 39;
                          break;
                        case 11:
                          _0xe6a094 = 39;
                          _0x5f292f = _0x1b3d34.key.participant = _0x5f292f || _0x1b3d34.key.participant;
                          break;
                      }
                    }
                    break;
                  case 37:
                    _0x2004d1 = 38;
                    _0x5f292f = _0x1b3d34.key.participant = _0x5f292f || _0x1b3d34.key.participant;
                    break;
                }
              }
              _0x15d1d0 = 15;
              while (_0x15d1d0 < 37) {
                switch (_0x15d1d0) {
                  case 36:
                    _0x15d1d0 = 37;
                    _0x5f292f = _0x5f292f || _0x1b3d34.key.remoteJid;
                    break;
                  case 15:
                    _0x15d1d0 = _0x1b3d34.key.remoteJid.includes("@s.whatsapp.net") ? 36 : 30;
                    break;
                  case 30:
                    _0x15d1d0 = 37;
                    _0x3d7566 = 26;
                    while (_0x3d7566 < 29) {
                      switch (_0x3d7566) {
                        case 24:
                          _0x3d7566 = 29;
                          _0x5f292f = _0x5f292f || _0x1b3d34.key.remoteJid;
                          break;
                        case 26:
                          _0x3d7566 = _0x1b3d34.key.remoteJid.includes("@broadcast") ? 24 : 29;
                          break;
                      }
                    }
                    break;
                }
              }
              _0x1b3d34.key.remoteJid = _0x1d184a;
              _0x1b3d34.key.fromMe = _0x5f292f === _0x3dbcc9.user.id;
              return fstM.WebMessageInfo.fromObject(_0x1b3d34);
              var _0x4b2ede;
              var _0x537da5;
              var _0x53ddd1;
              var _0x2312fd;
              var _0x212aae;
              var _0x2004d1;
              var _0xe6a094;
              var _0x15d1d0;
              var _0x3d7566;
            };
            _0x3dbcc9.sendFile = function () {
              var _0x29070c = _asyncToGenerator(_regeneratorRuntime().mark(function _0x207952(_0x30b3c0, _0x84183e) {
                var _0x22d698;
                var _0x178f89;
                var _0x108b60;
                var _0x42c1db;
                var _0xc0d847;
                var _0x24467b;
                var _0x360f87;
                var _0x3802dd;
                var _0x4cd36c;
                var _0x5562f4;
                var _0x13ccf4;
                var _0x98c9d1;
                var _0x182aa7;
                var _0x1f85d3;
                var _0x1ebdfb;
                var _0x46514f;
                var _0x365cfe;
                var _0xb6ca36;
                var _0x3fb378;
                var _0x4df875;
                var _0x52120e;
                var _0x3020b4;
                var _0x1b8c82;
                var _0x5e4574;
                var _0x37daa0;
                var _0xd0bec1;
                var _0x25d884 = arguments;
                return _regeneratorRuntime().wrap(function _0x1690b4(_0x4010f1) {
                  while (1) {
                    switch (_0x4010f1.prev = _0x4010f1.next) {
                      case 0:
                        _0x22d698 = _0x25d884.length > 2 && _0x25d884[2] !== undefined ? _0x25d884[2] : "";
                        _0x178f89 = _0x25d884.length > 3 && _0x25d884[3] !== undefined ? _0x25d884[3] : "";
                        _0x108b60 = _0x25d884.length > 4 ? _0x25d884[4] : undefined;
                        _0x42c1db = _0x25d884.length > 5 && _0x25d884[5] !== undefined ? _0x25d884[5] : false;
                        _0xc0d847 = _0x25d884.length > 6 && _0x25d884[6] !== undefined ? _0x25d884[6] : {};
                        _0x4010f1.next = 7;
                        return _0x3dbcc9.getFile(_0x84183e, [null] == "");
                      case 7:
                        _0x24467b = _0x4010f1.sent;
                        _0x360f87 = _0x24467b.res;
                        _0x3802dd = _0x24467b.data;
                        _0x4cd36c = _0x24467b.filename;
                        _0x365cfe = 18;
                      case 10:
                        if (!(_0x365cfe < 28)) {
                          _0x4010f1.next = 37;
                          break;
                        }
                        _0x4010f1.t0 = _0x365cfe;
                        _0x4010f1.next = _0x4010f1.t0 === 18 ? 14 : _0x4010f1.t0 === 23 ? 16 : 35;
                        break;
                      case 14:
                        _0x365cfe = _0x360f87 && _0x360f87.status !== 200 || _0x3802dd.length <= 65536 ? 23 : 28;
                        return _0x4010f1.abrupt("break", 35);
                      case 16:
                        _0x365cfe = 28;
                        _0x4010f1.prev = 17;
                        throw _defineProperty({}, "json", JSON.parse(_0x3802dd.toString()));
                      case 21:
                        _0x4010f1.prev = 21;
                        _0x4010f1.t1 = _0x4010f1.catch(17);
                        _0xb6ca36 = 25;
                      case 24:
                        if (!(_0xb6ca36 < 27)) {
                          _0x4010f1.next = 34;
                          break;
                        }
                        _0x4010f1.t2 = _0xb6ca36;
                        _0x4010f1.next = _0x4010f1.t2 === 17 ? 28 : _0x4010f1.t2 === 25 ? 30 : 32;
                        break;
                      case 28:
                        _0xb6ca36 = 27;
                        throw _0x4010f1.t1.json;
                      case 30:
                        _0xb6ca36 = _0x4010f1.t1.json ? 17 : 27;
                        return _0x4010f1.abrupt("break", 32);
                      case 32:
                        _0x4010f1.next = 24;
                        break;
                      case 34:
                        return _0x4010f1.abrupt("break", 35);
                      case 35:
                        _0x4010f1.next = 10;
                        break;
                      case 37:
                        _0x5562f4 = {};
                        _0x5562f4.filename = _0x22d698;
                        _0x13ccf4 = _0x5562f4;
                        _0x3fb378 = 24;
                      case 41:
                        if (!(_0x3fb378 < 29)) {
                          _0x4010f1.next = 52;
                          break;
                        }
                        _0x4010f1.t3 = _0x3fb378;
                        _0x4010f1.next = _0x4010f1.t3 === 28 ? 45 : _0x4010f1.t3 === 24 ? 48 : 50;
                        break;
                      case 45:
                        _0x3fb378 = 29;
                        _0x13ccf4.quoted = _0x108b60;
                        return _0x4010f1.abrupt("break", 50);
                      case 48:
                        _0x3fb378 = _0x108b60 ? 28 : 29;
                        return _0x4010f1.abrupt("break", 50);
                      case 50:
                        _0x4010f1.next = 41;
                        break;
                      case 52:
                        _0x4df875 = 30;
                      case 53:
                        if (!(_0x4df875 < 31)) {
                          _0x4010f1.next = 64;
                          break;
                        }
                        _0x4010f1.t4 = _0x4df875;
                        _0x4010f1.next = _0x4010f1.t4 === 10 ? 57 : _0x4010f1.t4 === 30 ? 60 : 62;
                        break;
                      case 57:
                        _0x4df875 = 31;
                        _0xc0d847.asDocument = true;
                        return _0x4010f1.abrupt("break", 62);
                      case 60:
                        _0x4df875 = !_0x24467b ? 10 : 31;
                        return _0x4010f1.abrupt("break", 62);
                      case 62:
                        _0x4010f1.next = 53;
                        break;
                      case 64:
                        _0x98c9d1 = "";
                        _0x182aa7 = _0x24467b.mime;
                        _0x52120e = 19;
                      case 66:
                        if (!(_0x52120e < 29)) {
                          _0x4010f1.next = 128;
                          break;
                        }
                        _0x4010f1.t5 = _0x52120e;
                        _0x4010f1.next = _0x4010f1.t5 === 26 ? 70 : _0x4010f1.t5 === 19 ? 73 : _0x4010f1.t5 === 24 ? 75 : 126;
                        break;
                      case 70:
                        _0x52120e = 29;
                        _0x98c9d1 = "sticker";
                        return _0x4010f1.abrupt("break", 126);
                      case 73:
                        _0x52120e = /webp/.test(_0x24467b.mime) || /image/.test(_0x24467b.mime) && _0xc0d847.asSticker ? 26 : 24;
                        return _0x4010f1.abrupt("break", 126);
                      case 75:
                        _0x52120e = 29;
                        _0x3020b4 = 36;
                      case 77:
                        if (!(_0x3020b4 < 37)) {
                          _0x4010f1.next = 125;
                          break;
                        }
                        _0x4010f1.t6 = _0x3020b4;
                        _0x4010f1.next = _0x4010f1.t6 === 36 ? 81 : _0x4010f1.t6 === 10 ? 83 : _0x4010f1.t6 === 30 ? 120 : 123;
                        break;
                      case 81:
                        _0x3020b4 = /image/.test(_0x24467b.mime) || /webp/.test(_0x24467b.mime) && _0xc0d847.asImage ? 30 : 10;
                        return _0x4010f1.abrupt("break", 123);
                      case 83:
                        _0x3020b4 = 37;
                        _0x1b8c82 = 23;
                      case 85:
                        if (!(_0x1b8c82 < 30)) {
                          _0x4010f1.next = 119;
                          break;
                        }
                        _0x4010f1.t7 = _0x1b8c82;
                        _0x4010f1.next = _0x4010f1.t7 === 23 ? 89 : _0x4010f1.t7 === 16 ? 91 : _0x4010f1.t7 === 27 ? 114 : 117;
                        break;
                      case 89:
                        _0x1b8c82 = /video/.test(_0x24467b.mime) ? 27 : 16;
                        return _0x4010f1.abrupt("break", 117);
                      case 91:
                        _0x1b8c82 = 30;
                        _0x5e4574 = 17;
                      case 93:
                        if (!(_0x5e4574 < 27)) {
                          _0x4010f1.next = 113;
                          break;
                        }
                        _0x4010f1.t8 = _0x5e4574;
                        _0x4010f1.next = _0x4010f1.t8 === 19 ? 97 : _0x4010f1.t8 === 17 ? 106 : _0x4010f1.t8 === 26 ? 108 : 111;
                        break;
                      case 97:
                        _0x5e4574 = 27;
                        _0x4010f1.next = 100;
                        return (_0x42c1db ? toPTT : toAudio)(_0x3802dd, _0x24467b.ext);
                      case 100:
                        _0x1f85d3 = _0x4010f1.sent;
                        _0x3802dd = _0x1f85d3.data;
                        _0x4cd36c = _0x1f85d3.filename;
                        _0x98c9d1 = "audio";
                        _0x182aa7 = "audio/ogg; codecs=opus";
                        return _0x4010f1.abrupt("break", 111);
                      case 106:
                        _0x5e4574 = /audio/.test(_0x24467b.mime) ? 19 : 26;
                        return _0x4010f1.abrupt("break", 111);
                      case 108:
                        _0x5e4574 = 27;
                        _0x98c9d1 = "document";
                        return _0x4010f1.abrupt("break", 111);
                      case 111:
                        _0x4010f1.next = 93;
                        break;
                      case 113:
                        return _0x4010f1.abrupt("break", 117);
                      case 114:
                        _0x1b8c82 = 30;
                        _0x98c9d1 = "video";
                        return _0x4010f1.abrupt("break", 117);
                      case 117:
                        _0x4010f1.next = 85;
                        break;
                      case 119:
                        return _0x4010f1.abrupt("break", 123);
                      case 120:
                        _0x3020b4 = 37;
                        _0x98c9d1 = "image";
                        return _0x4010f1.abrupt("break", 123);
                      case 123:
                        _0x4010f1.next = 77;
                        break;
                      case 125:
                        return _0x4010f1.abrupt("break", 126);
                      case 126:
                        _0x4010f1.next = 66;
                        break;
                      case 128:
                        _0x37daa0 = 10;
                      case 129:
                        if (!(_0x37daa0 < 26)) {
                          _0x4010f1.next = 140;
                          break;
                        }
                        _0x4010f1.t9 = _0x37daa0;
                        _0x4010f1.next = _0x4010f1.t9 === 22 ? 133 : _0x4010f1.t9 === 10 ? 136 : 138;
                        break;
                      case 133:
                        _0x37daa0 = 26;
                        _0x98c9d1 = "document";
                        return _0x4010f1.abrupt("break", 138);
                      case 136:
                        _0x37daa0 = _0xc0d847.asDocument ? 22 : 26;
                        return _0x4010f1.abrupt("break", 138);
                      case 138:
                        _0x4010f1.next = 129;
                        break;
                      case 140:
                        delete _0xc0d847.asSticker;
                        delete _0xc0d847.asLocation;
                        delete _0xc0d847.asVideo;
                        delete _0xc0d847.asDocument;
                        delete _0xc0d847.asImage;
                        _0x1ebdfb = _objectSpread(_objectSpread({}, _0xc0d847), {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "caption", _0x178f89), "ptt", _0x42c1db), _0x98c9d1, _defineProperty({}, "url", _0x4cd36c)), "mimetype", _0x182aa7));
                        _0x4010f1.prev = 146;
                        _0x4010f1.next = 149;
                        return _0x3dbcc9.sendMessage(_0x30b3c0, _0x1ebdfb, _objectSpread(_objectSpread({}, _0x13ccf4), _0xc0d847));
                      case 149:
                        _0x46514f = _0x4010f1.sent;
                        _0x4010f1.next = 155;
                        break;
                      case 152:
                        _0x4010f1.prev = 152;
                        _0x4010f1.t10 = _0x4010f1.catch(146);
                        _0x46514f = null;
                      case 155:
                        _0x4010f1.prev = 155;
                        _0xd0bec1 = 29;
                      case 157:
                        if (!(_0xd0bec1 < 39)) {
                          _0x4010f1.next = 170;
                          break;
                        }
                        _0x4010f1.t11 = _0xd0bec1;
                        _0x4010f1.next = _0x4010f1.t11 === 29 ? 161 : _0x4010f1.t11 === 7 ? 163 : 168;
                        break;
                      case 161:
                        _0xd0bec1 = !_0x46514f ? 7 : 39;
                        return _0x4010f1.abrupt("break", 168);
                      case 163:
                        _0xd0bec1 = 39;
                        _0x4010f1.next = 166;
                        return _0x3dbcc9.sendMessage(_0x30b3c0, _objectSpread(_objectSpread({}, _0x1ebdfb), {}, _defineProperty({}, _0x98c9d1, _0x3802dd)), _objectSpread(_objectSpread({}, _0x13ccf4), _0xc0d847));
                      case 166:
                        _0x46514f = _0x4010f1.sent;
                        return _0x4010f1.abrupt("break", 168);
                      case 168:
                        _0x4010f1.next = 157;
                        break;
                      case 170:
                        _0x3802dd = null;
                        return _0x4010f1.abrupt("return", _0x46514f);
                      case 173:
                      case "end":
                        return _0x4010f1.stop();
                    }
                  }
                }, _0x207952, null, [[17, 21], [146, 152, 155, 173]]);
              }));
              return function (_0x59eb72, _0x3ffb69) {
                return _0x29070c.apply(this, arguments);
              };
            }();
            _0x3dbcc9.getFile = function () {
              var _0x47d688 = _asyncToGenerator(_regeneratorRuntime().mark(function _0x10e02e(_0x347f14, _0x2be666) {
                var _0x434f70;
                var _0x375965;
                var _0xa50789;
                var _0x1684a5;
                return _regeneratorRuntime().wrap(function _0x3c0d66(_0x3cdea8) {
                  while (1) {
                    switch (_0x3cdea8.prev = _0x3cdea8.next) {
                      case 0:
                        if (!Buffer.isBuffer(_0x347f14)) {
                          _0x3cdea8.next = 4;
                          break;
                        }
                        _0x3cdea8.t0 = _0x347f14;
                        _0x3cdea8.next = 19;
                        break;
                      case 4:
                        if (!/^data:.*?\/.*?;base64,/i.test(_0x347f14)) {
                          _0x3cdea8.next = 8;
                          break;
                        }
                        _0x3cdea8.t1 = Buffer.from(_0x347f14.split(_templateObject6 ||= _taggedTemplateLiteral(["", ""]), ",")[1], "base64");
                        _0x3cdea8.next = 18;
                        break;
                      case 8:
                        if (!/^https?:\/\//.test(_0x347f14)) {
                          _0x3cdea8.next = 16;
                          break;
                        }
                        _0x3cdea8.next = 11;
                        return zZBLi(_0x347f14);
                      case 11:
                        _0x3cdea8.next = 13;
                        return _0x434f70 = _0x3cdea8.sent;
                      case 13:
                        _0x3cdea8.t2 = _0x3cdea8.sent;
                        _0x3cdea8.next = 17;
                        break;
                      case 16:
                        _0x3cdea8.t2 = GGUw.existsSync(_0x347f14) ? (filename = _0x347f14, GGUw.readFileSync(_0x347f14)) : typeof _0x347f14 === "string" ? _0x347f14 : Buffer.alloc(0 ? -7 : 0);
                      case 17:
                        _0x3cdea8.t1 = _0x3cdea8.t2;
                      case 18:
                        _0x3cdea8.t0 = _0x3cdea8.t1;
                      case 19:
                        _0x375965 = _0x3cdea8.t0;
                        _0x3cdea8.next = 22;
                        return oYLb.fromBuffer(_0x375965);
                      case 22:
                        _0x3cdea8.t3 = _0x3cdea8.sent;
                        if (_0x3cdea8.t3) {
                          _0x3cdea8.next = 25;
                          break;
                        }
                        _0x3cdea8.t3 = _defineProperty(_defineProperty({}, "mime", "application/octet-stream"), "ext", ".bin");
                      case 25:
                        _0xa50789 = _0x3cdea8.t3;
                        filename = KjXs.join(__filename, "../src/" + new Date() * 1 + "." + _0xa50789.ext);
                        _0x1684a5 = 10;
                      case 28:
                        if (!(_0x1684a5 < 26)) {
                          _0x3cdea8.next = 39;
                          break;
                        }
                        _0x3cdea8.t4 = _0x1684a5;
                        _0x3cdea8.next = _0x3cdea8.t4 === 10 ? 32 : _0x3cdea8.t4 === 22 ? 34 : 37;
                        break;
                      case 32:
                        _0x1684a5 = _0x375965 && _0x2be666 ? 22 : 26;
                        return _0x3cdea8.abrupt("break", 37);
                      case 34:
                        _0x1684a5 = 26;
                        GGUw.promises.writeFile(filename, _0x375965);
                        return _0x3cdea8.abrupt("break", 37);
                      case 37:
                        _0x3cdea8.next = 28;
                        break;
                      case 39:
                        _0x3cdea8.t5 = _objectSpread;
                        _0x3cdea8.t6 = _objectSpread;
                        _0x3cdea8.t7 = _defineProperty;
                        _0x3cdea8.t8 = _defineProperty(_defineProperty({}, "res", _0x434f70), "filename", filename);
                        _0x3cdea8.next = 45;
                        return oOYDf(_0x375965);
                      case 45:
                        _0x3cdea8.t9 = _0x3cdea8.sent;
                        _0x3cdea8.t10 = (0, _0x3cdea8.t7)(_0x3cdea8.t8, "size", _0x3cdea8.t9);
                        _0x3cdea8.t11 = _0xa50789;
                        _0x3cdea8.t12 = (0, _0x3cdea8.t6)(_0x3cdea8.t10, _0x3cdea8.t11);
                        _0x3cdea8.t13 = {};
                        _0x3cdea8.t14 = _defineProperty({}, "data", _0x375965);
                        return _0x3cdea8.abrupt("return", (0, _0x3cdea8.t5)(_0x3cdea8.t12, _0x3cdea8.t13, _0x3cdea8.t14));
                      case 52:
                      case "end":
                        return _0x3cdea8.stop();
                    }
                  }
                }, _0x10e02e);
              }));
              return function (_0x11c8aa, _0x2d17b3) {
                return _0x47d688.apply(this, arguments);
              };
            }();
            _0x3dbcc9.ev.on("messages.update", function () {
              var _0x4020a0 = _asyncToGenerator(_regeneratorRuntime().mark(function _0x131dd9(_0x4e1df5) {
                var _0xd8ad20;
                var _0x486a1a;
                var _0x44db88;
                var _0x5a2261;
                var _0x213f62;
                var _0xfea5a5;
                var _0x3fa83a;
                var _0x6981f5;
                var _0x5ca3cb;
                var _0x29d1c4;
                var _0x261696;
                var _0x11995a;
                return _regeneratorRuntime().wrap(function _0xa1fd91(_0xbc5fba) {
                  while (1) {
                    switch (_0xbc5fba.prev = _0xbc5fba.next) {
                      case 0:
                        _0xd8ad20 = _createForOfIteratorHelper(_0x4e1df5);
                        _0xbc5fba.prev = 1;
                        _0xd8ad20.s();
                      case 3:
                        if ((_0x486a1a = _0xd8ad20.n()).done) {
                          _0xbc5fba.next = 49;
                          break;
                        }
                        _0x44db88 = _0x486a1a.value;
                        _0x5a2261 = _0x44db88.key;
                        _0x213f62 = _0x44db88.update;
                        _0x6981f5 = 22;
                      case 6:
                        if (!(_0x6981f5 < 26)) {
                          _0xbc5fba.next = 47;
                          break;
                        }
                        _0xbc5fba.t0 = _0x6981f5;
                        _0xbc5fba.next = _0xbc5fba.t0 === 25 ? 10 : _0xbc5fba.t0 === 22 ? 43 : 45;
                        break;
                      case 10:
                        _0x6981f5 = 26;
                        _0xbc5fba.next = 13;
                        return _0x6f249c(_0x5a2261);
                      case 13:
                        _0xfea5a5 = _0xbc5fba.sent;
                        _0x5ca3cb = 36;
                      case 15:
                        if (!(_0x5ca3cb < 37)) {
                          _0xbc5fba.next = 42;
                          break;
                        }
                        _0xbc5fba.t1 = _0x5ca3cb;
                        _0xbc5fba.next = _0xbc5fba.t1 === 30 ? 19 : _0xbc5fba.t1 === 36 ? 38 : 40;
                        break;
                      case 19:
                        _0x5ca3cb = 37;
                        _0xbc5fba.next = 22;
                        return SovW(_defineProperty(_defineProperty({}, "message", _0xfea5a5), "pollUpdates", _0x213f62.pollUpdates));
                      case 22:
                        _0x3fa83a = _0xbc5fba.sent;
                        _0x29d1c4 = _0x3fa83a.filter(function (_0x1b9121) {
                          return _0x1b9121.voters.length !== 0;
                        })[0]?.name;
                        _0x261696 = 27;
                      case 25:
                        if (!(_0x261696 < 30)) {
                          _0xbc5fba.next = 35;
                          break;
                        }
                        _0xbc5fba.t2 = _0x261696;
                        _0xbc5fba.next = _0xbc5fba.t2 === 16 ? 29 : _0xbc5fba.t2 === 27 ? 31 : 33;
                        break;
                      case 29:
                        _0x261696 = 30;
                        return _0xbc5fba.abrupt("return");
                      case 31:
                        _0x261696 = _0x29d1c4 == undefined ? 16 : 30;
                        return _0xbc5fba.abrupt("break", 33);
                      case 33:
                        _0xbc5fba.next = 25;
                        break;
                      case 35:
                        _0x11995a = prefix + _0x29d1c4;
                        _0x3dbcc9.appenTextMessage(_0x11995a, _0x4e1df5);
                        return _0xbc5fba.abrupt("break", 40);
                      case 38:
                        _0x5ca3cb = _0xfea5a5 ? 30 : 37;
                        return _0xbc5fba.abrupt("break", 40);
                      case 40:
                        _0xbc5fba.next = 15;
                        break;
                      case 42:
                        return _0xbc5fba.abrupt("break", 45);
                      case 43:
                        _0x6981f5 = _0x213f62.pollUpdates && _0x5a2261.fromMe ? 25 : 26;
                        return _0xbc5fba.abrupt("break", 45);
                      case 45:
                        _0xbc5fba.next = 6;
                        break;
                      case 47:
                        _0xbc5fba.next = 3;
                        break;
                      case 49:
                        _0xbc5fba.next = 54;
                        break;
                      case 51:
                        _0xbc5fba.prev = 51;
                        _0xbc5fba.t3 = _0xbc5fba.catch(1);
                        _0xd8ad20.e(_0xbc5fba.t3);
                      case 54:
                        _0xbc5fba.prev = 54;
                        _0xd8ad20.f();
                        return _0xbc5fba.finish(54);
                      case 57:
                      case "end":
                        return _0xbc5fba.stop();
                    }
                  }
                }, _0x131dd9, null, [[1, 51, 54, 57]]);
              }));
              return function (_0x11e259) {
                return _0x4020a0.apply(this, arguments);
              };
            }());
            _0x3dbcc9.ev.process(function () {
              var _0x2714e7 = _asyncToGenerator(_regeneratorRuntime().mark(function _0x2090c6(_0x43d4cf) {
                var _0x5738fb;
                var _0x1a8862;
                return _regeneratorRuntime().wrap(function _0x32d504(_0x181458) {
                  while (1) {
                    switch (_0x181458.prev = _0x181458.next) {
                      case 0:
                        _0x5738fb = 28;
                      case 1:
                        if (!(_0x5738fb < 29)) {
                          _0x181458.next = 13;
                          break;
                        }
                        _0x181458.t0 = _0x5738fb;
                        _0x181458.next = _0x181458.t0 === 28 ? 5 : _0x181458.t0 === 13 ? 7 : 11;
                        break;
                      case 5:
                        _0x5738fb = _0x43d4cf["presence.update"] ? 13 : 29;
                        return _0x181458.abrupt("break", 11);
                      case 7:
                        _0x5738fb = 29;
                        _0x181458.next = 10;
                        return _0x3dbcc9.sendPresenceUpdate("available");
                      case 10:
                        return _0x181458.abrupt("break", 11);
                      case 11:
                        _0x181458.next = 1;
                        break;
                      case 13:
                        _0x1a8862 = 24;
                      case 14:
                        if (!(_0x1a8862 < 29)) {
                          _0x181458.next = 26;
                          break;
                        }
                        _0x181458.t1 = _0x1a8862;
                        _0x181458.next = _0x181458.t1 === 24 ? 18 : _0x181458.t1 === 28 ? 20 : 24;
                        break;
                      case 18:
                        _0x1a8862 = _0x43d4cf["creds.update"] ? 28 : 29;
                        return _0x181458.abrupt("break", 24);
                      case 20:
                        _0x1a8862 = 29;
                        _0x181458.next = 23;
                        return _0x477f21();
                      case 23:
                        return _0x181458.abrupt("break", 24);
                      case 24:
                        _0x181458.next = 14;
                        break;
                      case 26:
                      case "end":
                        return _0x181458.stop();
                    }
                  }
                }, _0x2090c6);
              }));
              return function (_0x130a14) {
                return _0x2714e7.apply(this, arguments);
              };
            }());
            return _0x4e3498.abrupt("return", _0x3dbcc9);
          case 105:
          case "end":
            return _0x4e3498.stop();
        }
      }
    }, _0x447112);
  }));
  return _LsbR.apply(this, arguments);
}
var ATFkl = require("./system/lib/mongoDB");
var YShhB = require("node-cache");
var NxsFV = require("awesome-phonenumber");
var _require2 = require("@hapi/boom");
var ObneJ = _require2.Boom;
var _require3 = require("./system/lib/controller");
var xheIl = _require3.creator;
var KwJvN = _require3.access;
var ZUfXw = _require3.access_bot;
var _require4 = require("./system/lib/exif");
var ufqⵚⴲ = _require4.imageToWebp;
var fGyⵚⴲ = _require4.videoToWebp;
var JKqⵚⴲ = _require4.writeExifImg;
var MuPQK = _require4.writeExifVid;
var _require5 = require("./system/lib/myfunction");
var qjwJJ = _require5.smsg;
var kwYby = _require5.isUrl;
var DqgdF = _require5.generateMessageTag;
var zZBLi = _require5.getBuffer;
var oOYDf = _require5.getSizeMedia;
var ugKxe = _require5.fetchJson;
var ktzYg = _require5.sleep;
var ImMmL = _require5.question;
try {
  var _require6 = require("lowdb");
  var izwEN = _require6.Low;
  var piTGg = _require6.JSONFile;
} catch (_0xcd1841) {
  var _require7 = require("./system/lib/lowdb");
  var izwEN = _require7.Low;
  var piTGg = _require7.JSONFile;
}
LsbR();
var cFqmH = require.resolve(__filename);
GGUw.watchFile(cFqmH, function () {
  GGUw.unwatchFile(cFqmH);
  console.log(bbSm.whiteBright("├"), bbSm.keyword("red")("[ UPDATE ]"), __filename);
  delete require.cache[cFqmH];
  require(cFqmH);
});