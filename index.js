! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ClipboardJS = t() : e.ClipboardJS = t()
}(this, function() {
    return o = {}, i.m = n = [function(e, t, n) {
        var i;
        i = [e, n(7)], void 0 !== (n = "function" == typeof(n = function(e, t) {
            "use strict";

            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var i = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(t),
                o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                r = function() {
                    function i(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(e, t, n) {
                        return t && i(e.prototype, t), n && i(e, n), e
                    }
                }(),
                s = function() {
                    function t(e) {
                        n(this, t), this.resolveOptions(e), this.initSelection()
                    }
                    return r(t, [{
                        key: "resolveOptions",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                        }
                    }, {
                        key: "initSelection",
                        value: function() {
                            this.text ? this.selectFake() : this.target && this.selectTarget()
                        }
                    }, {
                        key: "selectFake",
                        value: function() {
                            var e = this,
                                t = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(), this.fakeHandlerCallback = function() {
                                return e.removeFake()
                            }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                            var n = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, i.default)(this.fakeElem), this.copyText()
                        }
                    }, {
                        key: "removeFake",
                        value: function() {
                            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                        }
                    }, {
                        key: "selectTarget",
                        value: function() {
                            this.selectedText = (0, i.default)(this.target), this.copyText()
                        }
                    }, {
                        key: "copyText",
                        value: function() {
                            var t = void 0;
                            try {
                                t = document.execCommand(this.action)
                            } catch (e) {
                                t = !1
                            }
                            this.handleResult(t)
                        }
                    }, {
                        key: "handleResult",
                        value: function(e) {
                            this.emitter.emit(e ? "success" : "error", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            })
                        }
                    }, {
                        key: "clearSelection",
                        value: function() {
                            this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.removeFake()
                        }
                    }, {
                        key: "action",
                        set: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                            if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                        },
                        get: function() {
                            return this._action
                        }
                    }, {
                        key: "target",
                        set: function(e) {
                            if (void 0 !== e) {
                                if (!e || "object" !== (void 0 === e ? "undefined" : o(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target = e
                            }
                        },
                        get: function() {
                            return this._target
                        }
                    }]), t
                }();
            e.exports = s
        }) ? n.apply(t, i) : n) && (e.exports = n)
    }, function(e, t, n) {
        var u = n(6),
            c = n(5);
        e.exports = function(e, t, n) {
            if (!e && !t && !n) throw new Error("Missing required arguments");
            if (!u.string(t)) throw new TypeError("Second argument must be a String");
            if (!u.fn(n)) throw new TypeError("Third argument must be a Function");
            if (u.node(e)) return o = t, r = n, (i = e).addEventListener(o, r), {
                destroy: function() {
                    i.removeEventListener(o, r)
                }
            };
            var i, o, r, s, a, l;
            if (u.nodeList(e)) return s = e, a = t, l = n, Array.prototype.forEach.call(s, function(e) {
                e.addEventListener(a, l)
            }), {
                destroy: function() {
                    Array.prototype.forEach.call(s, function(e) {
                        e.removeEventListener(a, l)
                    })
                }
            };
            if (u.string(e)) return e = e, t = t, n = n, c(document.body, e, t, n);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
        }
    }, function(e, t) {
        function n() {}
        n.prototype = {
            on: function(e, t, n) {
                var i = this.e || (this.e = {});
                return (i[e] || (i[e] = [])).push({
                    fn: t,
                    ctx: n
                }), this
            },
            once: function(e, t, n) {
                function i() {
                    o.off(e, i), t.apply(n, arguments)
                }
                var o = this;
                return i._ = t, this.on(e, i, n)
            },
            emit: function(e) {
                for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, o = n.length; i < o; i++) n[i].fn.apply(n[i].ctx, t);
                return this
            },
            off: function(e, t) {
                var n = this.e || (this.e = {}),
                    i = n[e],
                    o = [];
                if (i && t)
                    for (var r = 0, s = i.length; r < s; r++) i[r].fn !== t && i[r].fn._ !== t && o.push(i[r]);
                return o.length ? n[e] = o : delete n[e], this
            }
        }, e.exports = n
    }, function(e, t, n) {
        var i;
        i = [e, n(0), n(2), n(1)], void 0 !== (n = "function" == typeof(n = function(e, t, n, i) {
            "use strict";

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            function l(e, t) {
                var n = "data-clipboard-" + e;
                if (t.hasAttribute(n)) return t.getAttribute(n)
            }
            var u = o(t),
                c = o(n),
                d = o(i),
                p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                h = function() {
                    function i(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(e, t, n) {
                        return t && i(e.prototype, t), n && i(e, n), e
                    }
                }(),
                f = function(e) {
                    function i(e, t) {
                        r(this, i);
                        var n = s(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                        return n.resolveOptions(t), n.listenClick(e), n
                    }
                    return a(i, e), h(i, [{
                        key: "resolveOptions",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === p(e.container) ? e.container : document.body
                        }
                    }, {
                        key: "listenClick",
                        value: function(e) {
                            var t = this;
                            this.listener = (0, d.default)(e, "click", function(e) {
                                return t.onClick(e)
                            })
                        }
                    }, {
                        key: "onClick",
                        value: function(e) {
                            var t = e.delegateTarget || e.currentTarget;
                            this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new u.default({
                                action: this.action(t),
                                target: this.target(t),
                                text: this.text(t),
                                container: this.container,
                                trigger: t,
                                emitter: this
                            })
                        }
                    }, {
                        key: "defaultAction",
                        value: function(e) {
                            return l("action", e)
                        }
                    }, {
                        key: "defaultTarget",
                        value: function(e) {
                            var t = l("target", e);
                            if (t) return document.querySelector(t)
                        }
                    }, {
                        key: "defaultText",
                        value: function(e) {
                            return l("text", e)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                        }
                    }], [{
                        key: "isSupported",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                t = "string" == typeof e ? [e] : e,
                                n = !!document.queryCommandSupported;
                            return t.forEach(function(e) {
                                n = n && !!document.queryCommandSupported(e)
                            }), n
                        }
                    }]), i
                }(c.default);
            e.exports = f
        }) ? n.apply(t, i) : n) && (e.exports = n)
    }, function(e, t) {
        var n;
        "undefined" == typeof Element || Element.prototype.matches || ((n = Element.prototype).matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector), e.exports = function(e, t) {
            for (; e && 9 !== e.nodeType;) {
                if ("function" == typeof e.matches && e.matches(t)) return e;
                e = e.parentNode
            }
        }
    }, function(e, t, n) {
        function r(e, t, n, i, o) {
            var r = function(t, n, e, i) {
                return function(e) {
                    e.delegateTarget = s(e.target, n), e.delegateTarget && i.call(t, e)
                }
            }.apply(this, arguments);
            return e.addEventListener(n, r, o), {
                destroy: function() {
                    e.removeEventListener(n, r, o)
                }
            }
        }
        var s = n(4);
        e.exports = function(e, t, n, i, o) {
            return "function" == typeof e.addEventListener ? r.apply(null, arguments) : "function" == typeof n ? r.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, function(e) {
                return r(e, t, n, i, o)
            }))
        }
    }, function(e, n) {
        n.node = function(e) {
            return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
        }, n.nodeList = function(e) {
            var t = Object.prototype.toString.call(e);
            return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || n.node(e[0]))
        }, n.string = function(e) {
            return "string" == typeof e || e instanceof String
        }, n.fn = function(e) {
            return "[object Function]" === Object.prototype.toString.call(e)
        }
    }, function(e, t) {
        e.exports = function(e) {
            var t, n = "SELECT" === e.nodeName ? (e.focus(), e.value) : "INPUT" === e.nodeName || "TEXTAREA" === e.nodeName ? ((t = e.hasAttribute("readonly")) || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), t || e.removeAttribute("readonly"), e.value) : (e.hasAttribute("contenteditable") && e.focus(), n = window.getSelection(), (t = document.createRange()).selectNodeContents(e), n.removeAllRanges(), n.addRange(t), n.toString());
            return n
        }
    }], i.c = o, i.i = function(e) {
        return e
    }, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 3);

    function i(e) {
        if (o[e]) return o[e].exports;
        var t = o[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
    }
    var n, o
}),
function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(x, e) {
    "use strict";

    function m(e) {
        return null != e && e === e.window
    }
    var t = [],
        C = x.document,
        n = Object.getPrototypeOf,
        a = t.slice,
        v = t.concat,
        l = t.push,
        o = t.indexOf,
        i = {},
        r = i.toString,
        g = i.hasOwnProperty,
        s = g.toString,
        u = s.call(Object),
        y = {},
        b = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        c = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function k(e, t, n) {
        var i, o = (t = t || C).createElement("script");
        if (o.text = e, n)
            for (i in c) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function f(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[r.call(e)] || "object" : typeof e
    }
    var S = function(e, t) {
            return new S.fn.init(e, t)
        },
        d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = f(e);
        return !b(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: "3.3.1",
        constructor: S,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            e = S.merge(this.constructor(), e);
            return e.prevObject = this, e
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function() {
        var e, t, n, i, o, r = arguments[0] || {},
            s = 1,
            a = arguments.length,
            l = !1;
        for ("boolean" == typeof r && (l = r, r = arguments[s] || {}, s++), "object" == typeof r || b(r) || (r = {}), s === a && (r = this, s--); s < a; s++)
            if (null != (e = arguments[s]))
                for (t in e) o = r[t], r !== (n = e[t]) && (l && n && (S.isPlainObject(n) || (i = Array.isArray(n))) ? (o = i ? (i = !1, o && Array.isArray(o) ? o : []) : o && S.isPlainObject(o) ? o : {}, r[t] = S.extend(l, o, n)) : void 0 !== n && (r[t] = n));
        return r
    }, S.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            return !(!e || "[object Object]" !== r.call(e) || (e = n(e)) && ("function" != typeof(e = g.call(e, "constructor") && e.constructor) || s.call(e) !== u))
        },
        isEmptyObject: function(e) {
            for (var t in e) return !1;
            return !0
        },
        globalEval: function(e) {
            k(e)
        },
        each: function(e, t) {
            var n, i = 0;
            if (p(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(d, "")
        },
        makeArray: function(e, t) {
            t = t || [];
            return null != e && (p(Object(e)) ? S.merge(t, "string" == typeof e ? [e] : e) : l.call(t, e)), t
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : o.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) != s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o, r = 0,
                s = [];
            if (p(e))
                for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o);
            else
                for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
            return v.apply([], s)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        i["[object " + t + "]"] = t.toLowerCase()
    });
    var h = function(n) {
        function d(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }

        function i() {
            x()
        }
        var e, h, k, r, o, f, p, m, w, l, u, x, C, s, S, v, a, c, g, T = "sizzle" + +new Date,
            y = n.document,
            A = 0,
            b = 0,
            E = se(),
            _ = se(),
            D = se(),
            $ = function(e, t) {
                return e === t && (u = !0), 0
            },
            F = {}.hasOwnProperty,
            t = [],
            j = t.pop,
            M = t.push,
            O = t.push,
            P = t.slice,
            I = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            B = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            N = "\\[" + B + "*(" + R + ")(?:" + B + "*([*^$|!~]?=)" + B + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + B + "*\\]",
            H = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            z = new RegExp(B + "+", "g"),
            q = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
            W = new RegExp("^" + B + "*," + B + "*"),
            U = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
            V = new RegExp("=" + B + "*([^\\]'\"]*?)" + B + "*\\]", "g"),
            Y = new RegExp(H),
            Z = new RegExp("^" + R + "$"),
            X = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + H),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + L + ")$", "i"),
                needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
            },
            K = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"),
            ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = ve(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            O.apply(t = P.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
        } catch (n) {
            O = {
                apply: t.length ? function(e, t) {
                    M.apply(e, P.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function re(e, t, n, i) {
            var o, r, s, a, l, u, c, d = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!i && ((t ? t.ownerDocument || t : y) !== C && x(t), t = t || C, S)) {
                if (11 !== p && (l = Q.exec(e)))
                    if (o = l[1]) {
                        if (9 === p) {
                            if (!(s = t.getElementById(o))) return n;
                            if (s.id === o) return n.push(s), n
                        } else if (d && (s = d.getElementById(o)) && g(t, s) && s.id === o) return n.push(s), n
                    } else {
                        if (l[2]) return O.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = l[3]) && h.getElementsByClassName && t.getElementsByClassName) return O.apply(n, t.getElementsByClassName(o)), n
                    } if (h.qsa && !D[e + " "] && (!v || !v.test(e))) {
                    if (1 !== p) d = t, c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(ne, ie) : t.setAttribute("id", a = T), r = (u = f(e)).length; r--;) u[r] = "#" + a + " " + me(u[r]);
                        c = u.join(","), d = ee.test(e) && he(t.parentNode) || t
                    }
                    if (c) try {
                        return O.apply(n, d.querySelectorAll(c)), n
                    } catch (e) {} finally {
                        a === T && t.removeAttribute("id")
                    }
                }
            }
            return m(e.replace(q, "$1"), t, n, i)
        }

        function se() {
            var n = [];

            function i(e, t) {
                return n.push(e + " ") > k.cacheLength && delete i[n.shift()], i[e + " "] = t
            }
            return i
        }

        function ae(e) {
            return e[T] = !0, e
        }

        function le(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ue(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) k.attrHandle[n[i]] = t
        }

        function ce(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && oe(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function pe(s) {
            return ae(function(r) {
                return r = +r, ae(function(e, t) {
                    for (var n, i = s([], e.length, r), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function he(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in h = re.support = {}, o = re.isXML = function(e) {
                e = e && (e.ownerDocument || e).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, x = re.setDocument = function(e) {
                var t, e = e ? e.ownerDocument || e : y;
                return e !== C && 9 === e.nodeType && e.documentElement && (s = (C = e).documentElement, S = !o(C), y !== C && (t = C.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", i, !1) : t.attachEvent && t.attachEvent("onunload", i)), h.attributes = le(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), h.getElementsByTagName = le(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), h.getElementsByClassName = J.test(C.getElementsByClassName), h.getById = le(function(e) {
                    return s.appendChild(e).id = T, !C.getElementsByName || !C.getElementsByName(T).length
                }), h.getById ? (k.filter.ID = function(e) {
                    var t = e.replace(te, d);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, k.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && S) {
                        e = t.getElementById(e);
                        return e ? [e] : []
                    }
                }) : (k.filter.ID = function(e) {
                    var t = e.replace(te, d);
                    return function(e) {
                        e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return e && e.value === t
                    }
                }, k.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && S) {
                        var n, i, o, r = t.getElementById(e);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                            for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                                if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                        }
                        return []
                    }
                }), k.find.TAG = h.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" !== e) return r;
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }, k.find.CLASS = h.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && S) return t.getElementsByClassName(e)
                }, a = [], v = [], (h.qsa = J.test(C.querySelectorAll)) && (le(function(e) {
                    s.appendChild(e).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + B + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + B + "*(?:value|" + L + ")"), e.querySelectorAll("[id~=" + T + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + T + "+*").length || v.push(".#.+[+~]")
                }), le(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + B + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (h.matchesSelector = J.test(c = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && le(function(e) {
                    h.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), a.push("!=", H)
                }), v = v.length && new RegExp(v.join("|")), a = a.length && new RegExp(a.join("|")), t = J.test(s.compareDocumentPosition), g = t || J.test(s.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        t = t && t.parentNode;
                    return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, $ = t ? function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === y && g(y, e) ? -1 : t === C || t.ownerDocument === y && g(y, t) ? 1 : l ? I(l, e) - I(l, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!o || !r) return e === C ? -1 : t === C ? 1 : o ? -1 : r ? 1 : l ? I(l, e) - I(l, t) : 0;
                    if (o === r) return ce(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? ce(s[i], a[i]) : s[i] === y ? -1 : a[i] === y ? 1 : 0
                }), C
            }, re.matches = function(e, t) {
                return re(e, null, null, t)
            }, re.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && x(e), t = t.replace(V, "='$1']"), h.matchesSelector && S && !D[t + " "] && (!a || !a.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < re(t, C, null, [e]).length
            }, re.contains = function(e, t) {
                return (e.ownerDocument || e) !== C && x(e), g(e, t)
            }, re.attr = function(e, t) {
                (e.ownerDocument || e) !== C && x(e);
                var n = k.attrHandle[t.toLowerCase()],
                    n = n && F.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !S) : void 0;
                return void 0 !== n ? n : h.attributes || !S ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }, re.escape = function(e) {
                return (e + "").replace(ne, ie)
            }, re.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, re.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (u = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort($), u) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return l = null, e
            }, r = re.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += r(t);
                return n
            }, (k = re.selectors = {
                cacheLength: 50,
                createPseudo: ae,
                match: X,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, d), e[3] = (e[3] || e[4] || e[5] || "").replace(te, d), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Y.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, d).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = E[e + " "];
                        return t || (t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) && E(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, i) {
                        return function(e) {
                            e = re.attr(e, t);
                            return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === i : "!=" === n ? e !== i : "^=" === n ? i && 0 === e.indexOf(i) : "*=" === n ? i && -1 < e.indexOf(i) : "$=" === n ? i && e.slice(-i.length) === i : "~=" === n ? -1 < (" " + e.replace(z, " ") + " ").indexOf(i) : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(f, e, t, m, v) {
                        var g = "nth" !== f.slice(0, 3),
                            y = "last" !== f.slice(-4),
                            b = "of-type" === e;
                        return 1 === m && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var i, o, r, s, a, l, u = g != y ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                d = b && e.nodeName.toLowerCase(),
                                p = !n && !b,
                                h = !1;
                            if (c) {
                                if (g) {
                                    for (; u;) {
                                        for (s = e; s = s[u];)
                                            if (b ? s.nodeName.toLowerCase() === d : 1 === s.nodeType) return !1;
                                        l = u = "only" === f && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? c.firstChild : c.lastChild], y && p) {
                                    for (h = (a = (i = (o = (r = (s = c)[T] || (s[T] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[f] || [])[0] === A && i[1]) && i[2], s = a && c.childNodes[a]; s = ++a && s && s[u] || (h = a = 0) || l.pop();)
                                        if (1 === s.nodeType && ++h && s === e) {
                                            o[f] = [A, a, h];
                                            break
                                        }
                                } else if (!1 === (h = p ? a = (i = (o = (r = (s = e)[T] || (s[T] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[f] || [])[0] === A && i[1] : h))
                                    for (;
                                        (s = ++a && s && s[u] || (h = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++h || (p && ((o = (r = s[T] || (s[T] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[f] = [A, h]), s !== e)););
                                return (h -= v) === m || h % m == 0 && 0 <= h / m
                            }
                        }
                    },
                    PSEUDO: function(e, r) {
                        var t, s = k.pseudos[e] || k.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                        return s[T] ? s(r) : 1 < s.length ? (t = [e, e, "", r], k.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, t) {
                            for (var n, i = s(e, r), o = i.length; o--;) e[n = I(e, i[o])] = !(t[n] = i[o])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: ae(function(e) {
                        var i = [],
                            o = [],
                            a = p(e.replace(q, "$1"));
                        return a[T] ? ae(function(e, t, n, i) {
                            for (var o, r = a(e, null, i, []), s = e.length; s--;)(o = r[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, t, n) {
                            return i[0] = e, a(i, null, n, o), i[0] = null, !o.pop()
                        }
                    }),
                    has: ae(function(t) {
                        return function(e) {
                            return 0 < re(t, e).length
                        }
                    }),
                    contains: ae(function(t) {
                        return t = t.replace(te, d),
                            function(e) {
                                return -1 < (e.textContent || e.innerText || r(e)).indexOf(t)
                            }
                    }),
                    lang: ae(function(n) {
                        return Z.test(n || "") || re.error("unsupported lang: " + n), n = n.replace(te, d).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === s
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: de(!1),
                    disabled: de(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !k.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return K.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: pe(function() {
                        return [0]
                    }),
                    last: pe(function(e, t) {
                        return [t - 1]
                    }),
                    eq: pe(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: pe(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: pe(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: pe(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: pe(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = k.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) k.pseudos[e] = function(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }(e);
        for (e in {
                submit: !0,
                reset: !0
            }) k.pseudos[e] = function(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }(e);

        function fe() {}

        function me(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function ve(s, e, t) {
            var a = e.dir,
                l = e.next,
                u = l || a,
                c = t && "parentNode" === u,
                d = b++;
            return e.first ? function(e, t, n) {
                for (; e = e[a];)
                    if (1 === e.nodeType || c) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var i, o, r = [A, d];
                if (n) {
                    for (; e = e[a];)
                        if ((1 === e.nodeType || c) && s(e, t, n)) return !0
                } else
                    for (; e = e[a];)
                        if (1 === e.nodeType || c)
                            if (i = (o = e[T] || (e[T] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[a] || e;
                            else {
                                if ((o = i[u]) && o[0] === A && o[1] === d) return r[2] = o[2];
                                if ((i[u] = r)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function ge(o) {
            return 1 < o.length ? function(e, t, n) {
                for (var i = o.length; i--;)
                    if (!o[i](e, t, n)) return !1;
                return !0
            } : o[0]
        }

        function ye(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), u && t.push(a)));
            return s
        }

        function be(h, f, m, v, g, e) {
            return v && !v[T] && (v = be(v)), g && !g[T] && (g = be(g, e)), ae(function(e, t, n, i) {
                var o, r, s, a = [],
                    l = [],
                    u = t.length,
                    c = e || function(e, t, n) {
                        for (var i = 0, o = t.length; i < o; i++) re(e, t[i], n);
                        return n
                    }(f || "*", n.nodeType ? [n] : n, []),
                    d = !h || !e && f ? c : ye(c, a, h, n, i),
                    p = m ? g || (e ? h : u || v) ? [] : t : d;
                if (m && m(d, p, n, i), v)
                    for (o = ye(p, l), v(o, [], n, i), r = o.length; r--;)(s = o[r]) && (p[l[r]] = !(d[l[r]] = s));
                if (e) {
                    if (g || h) {
                        if (g) {
                            for (o = [], r = p.length; r--;)(s = p[r]) && o.push(d[r] = s);
                            g(null, p = [], o, i)
                        }
                        for (r = p.length; r--;)(s = p[r]) && -1 < (o = g ? I(e, s) : a[r]) && (e[o] = !(t[o] = s))
                    }
                } else p = ye(p === t ? p.splice(u, p.length) : p), g ? g(null, t, p, i) : O.apply(t, p)
            })
        }

        function ke(v, g) {
            function e(e, t, n, i, o) {
                var r, s, a, l = 0,
                    u = "0",
                    c = e && [],
                    d = [],
                    p = w,
                    h = e || b && k.find.TAG("*", o),
                    f = A += null == p ? 1 : Math.random() || .1,
                    m = h.length;
                for (o && (w = t === C || t || o); u !== m && null != (r = h[u]); u++) {
                    if (b && r) {
                        for (s = 0, t || r.ownerDocument === C || (x(r), n = !S); a = v[s++];)
                            if (a(r, t || C, n)) {
                                i.push(r);
                                break
                            } o && (A = f)
                    }
                    y && ((r = !a && r) && l--, e && c.push(r))
                }
                if (l += u, y && u !== l) {
                    for (s = 0; a = g[s++];) a(c, d, t, n);
                    if (e) {
                        if (0 < l)
                            for (; u--;) c[u] || d[u] || (d[u] = j.call(i));
                        d = ye(d)
                    }
                    O.apply(i, d), o && !e && 0 < d.length && 1 < l + g.length && re.uniqueSort(i)
                }
                return o && (A = f, w = p), c
            }
            var y = 0 < g.length,
                b = 0 < v.length;
            return y ? ae(e) : e
        }
        return fe.prototype = k.filters = k.pseudos, k.setFilters = new fe, f = re.tokenize = function(e, t) {
            var n, i, o, r, s, a, l, u = _[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (s = e, a = [], l = k.preFilter; s;) {
                for (r in n && !(i = W.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(o = [])), n = !1, (i = U.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(q, " ")
                    }), s = s.slice(n.length)), k.filter) !(i = X[r].exec(s)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: r,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? re.error(e) : _(e, a).slice(0)
        }, p = re.compile = function(e, t) {
            var n, i = [],
                o = [],
                r = D[e + " "];
            if (!r) {
                for (n = (t = t || f(e)).length; n--;)((r = function e(t) {
                    for (var i, n, o, r = t.length, s = k.relative[t[0].type], a = s || k.relative[" "], l = s ? 1 : 0, u = ve(function(e) {
                            return e === i
                        }, a, !0), c = ve(function(e) {
                            return -1 < I(i, e)
                        }, a, !0), d = [function(e, t, n) {
                            return n = !s && (n || t !== w) || ((i = t).nodeType ? u : c)(e, t, n), i = null, n
                        }]; l < r; l++)
                        if (n = k.relative[t[l].type]) d = [ve(ge(d), n)];
                        else {
                            if ((n = k.filter[t[l].type].apply(null, t[l].matches))[T]) {
                                for (o = ++l; o < r && !k.relative[t[o].type]; o++);
                                return be(1 < l && ge(d), 1 < l && me(t.slice(0, l - 1).concat({
                                    value: " " === t[l - 2].type ? "*" : ""
                                })).replace(q, "$1"), n, l < o && e(t.slice(l, o)), o < r && e(t = t.slice(o)), o < r && me(t))
                            }
                            d.push(n)
                        } return ge(d)
                }(t[n]))[T] ? i : o).push(r);
                (r = D(e, ke(o, i))).selector = e
            }
            return r
        }, m = re.select = function(e, t, n, i) {
            var o, r, s, a, l, u = "function" == typeof e && e,
                c = !i && f(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (r = c[0] = c[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === t.nodeType && S && k.relative[r[1].type]) {
                    if (!(t = (k.find.ID(s.matches[0].replace(te, d), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = X.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !k.relative[a = s.type]);)
                    if ((l = k.find[a]) && (i = l(s.matches[0].replace(te, d), ee.test(r[0].type) && he(t.parentNode) || t))) {
                        if (r.splice(o, 1), !(e = i.length && me(r))) return O.apply(n, i), n;
                        break
                    }
            }
            return (u || p(e, c))(i, t, !S, n, !t || ee.test(e) && he(t.parentNode) || t), n
        }, h.sortStable = T.split("").sort($).join("") === T, h.detectDuplicates = !!u, x(), h.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), le(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ue("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), h.attributes && le(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ue("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ue(L, function(e, t, n) {
            if (!n) return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null
        }), re
    }(x);
    S.find = h, S.expr = h.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = h.uniqueSort, S.text = h.getText, S.isXMLDoc = h.isXML, S.contains = h.contains, S.escapeSelector = h.escape;

    function w(e, t, n) {
        for (var i = [], o = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (o && S(e).is(n)) break;
                i.push(e)
            } return i
    }

    function T(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var A = S.expr.match.needsContext;

    function E(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var _ = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, n, i) {
        return b(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== i
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < o.call(n, e) !== i
        }) : S.filter(n, e, i)
    }
    S.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? S.find.matchesSelector(i, e) ? [i] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (S.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) S.find(e, o[t], n);
            return 1 < i ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && A.test(e) ? S(e) : e || [], !1).length
        }
    });
    var $, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        if (!e) return this;
        if (n = n || $, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : F.exec(e)) || !i[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
        if (i[1]) {
            if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), _.test(i[1]) && S.isPlainObject(t))
                for (var i in t) b(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        return (e = C.getElementById(i[2])) && (this[0] = e, this.length = 1), this
    }).prototype = S.fn, $ = S(C);
    var j = /^(?:parents|prev(?:Until|All))/,
        M = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                o = this.length,
                r = [],
                s = "string" != typeof e && S(e);
            if (!A.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        } return this.pushStack(1 < r.length ? S.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? o.call(S(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function(e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return w(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return w(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return w(e, "nextSibling")
        },
        prevAll: function(e) {
            return w(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return w(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return w(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return E(e, "iframe") ? e.contentDocument : (E(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
        }
    }, function(i, o) {
        S.fn[i] = function(e, t) {
            var n = S.map(this, o, e);
            return (t = "Until" !== i.slice(-5) ? e : t) && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (M[i] || S.uniqueSort(n), j.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function I(e) {
        return e
    }

    function L(e) {
        throw e
    }

    function B(e, t, n, i) {
        var o;
        try {
            e && b(o = e.promise) ? o.call(e).done(t).fail(n) : e && b(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(i) {
        var e, n;
        i = "string" == typeof i ? (e = i, n = {}, S.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }), n) : S.extend({}, i);

        function o() {
            for (a = a || i.once, s = r = !0; u.length; c = -1)
                for (t = u.shift(); ++c < l.length;) !1 === l[c].apply(t[0], t[1]) && i.stopOnFalse && (c = l.length, t = !1);
            i.memory || (t = !1), r = !1, a && (l = t ? [] : "")
        }
        var r, t, s, a, l = [],
            u = [],
            c = -1,
            d = {
                add: function() {
                    return l && (t && !r && (c = l.length - 1, u.push(t)), function n(e) {
                        S.each(e, function(e, t) {
                            b(t) ? i.unique && d.has(t) || l.push(t) : t && t.length && "string" !== f(t) && n(t)
                        })
                    }(arguments), t && !r && o()), this
                },
                remove: function() {
                    return S.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = S.inArray(t, l, n));) l.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < S.inArray(e, l) : 0 < l.length
                },
                empty: function() {
                    return l = l && [], this
                },
                disable: function() {
                    return a = u = [], l = t = "", this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return a = u = [], t || r || (l = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), r || o()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!s
                }
            };
        return d
    }, S.extend({
        Deferred: function(e) {
            var r = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                o = "pending",
                s = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return s.then(null, e)
                    },
                    pipe: function() {
                        var o = arguments;
                        return S.Deferred(function(i) {
                            S.each(r, function(e, t) {
                                var n = b(o[t[4]]) && o[t[4]];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && b(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    },
                    then: function(t, n, i) {
                        var l = 0;

                        function u(o, r, s, a) {
                            return function() {
                                function e() {
                                    var e, t;
                                    if (!(o < l)) {
                                        if ((e = s.apply(n, i)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, b(t) ? a ? t.call(e, u(l, r, I, a), u(l, r, L, a)) : (l++, t.call(e, u(l, r, I, a), u(l, r, L, a), u(l, r, I, r.notifyWith))) : (s !== I && (n = void 0, i = [e]), (a || r.resolveWith)(n, i))
                                    }
                                }
                                var n = this,
                                    i = arguments,
                                    t = a ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), l <= o + 1 && (s !== L && (n = void 0, i = [e]), r.rejectWith(n, i))
                                        }
                                    };
                                o ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), x.setTimeout(t))
                            }
                        }
                        return S.Deferred(function(e) {
                            r[0][3].add(u(0, e, b(i) ? i : I, e.notifyWith)), r[1][3].add(u(0, e, b(t) ? t : I)), r[2][3].add(u(0, e, b(n) ? n : L))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? S.extend(e, s) : s
                    }
                },
                a = {};
            return S.each(r, function(e, t) {
                var n = t[2],
                    i = t[5];
                s[t[1]] = n.add, i && n.add(function() {
                    o = i
                }, r[3 - e][2].disable, r[3 - e][3].disable, r[0][2].lock, r[0][3].lock), n.add(t[3].fire), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    o[t] = this, r[t] = 1 < arguments.length ? a.call(arguments) : e, --n || s.resolveWith(o, r)
                }
            }
            var n = arguments.length,
                i = n,
                o = Array(i),
                r = a.call(arguments),
                s = S.Deferred();
            if (n <= 1 && (B(e, s.done(t(i)).resolve, s.reject, !n), "pending" === s.state() || b(r[i] && r[i].then))) return s.then();
            for (; i--;) B(r[i], t(i), s.reject);
            return s.promise()
        }
    });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        x.console && x.console.warn && e && R.test(e.name) && x.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, S.readyException = function(e) {
        x.setTimeout(function() {
            throw e
        })
    };
    var N = S.Deferred();

    function H() {
        C.removeEventListener("DOMContentLoaded", H), x.removeEventListener("load", H), S.ready()
    }
    S.fn.ready = function(e) {
        return N.then(e).catch(function(e) {
            S.readyException(e)
        }), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || ((S.isReady = !0) !== e && 0 < --S.readyWait || N.resolveWith(C, [S]))
        }
    }), S.ready.then = N.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? x.setTimeout(S.ready) : (C.addEventListener("DOMContentLoaded", H), x.addEventListener("load", H));
    var z = function(e, t, n, i, o, r, s) {
            var a = 0,
                l = e.length,
                u = null == n;
            if ("object" === f(n))
                for (a in o = !0, n) z(e, t, a, n[a], !0, r, s);
            else if (void 0 !== i && (o = !0, b(i) || (s = !0), t = u ? s ? (t.call(e, i), null) : (u = t, function(e, t, n) {
                    return u.call(S(e), n)
                }) : t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : u ? t.call(e) : l ? t(e[0], n) : r
        },
        q = /^-ms-/,
        W = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function V(e) {
        return e.replace(q, "ms-").replace(W, U)
    }

    function Y(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }

    function Z() {
        this.expando = S.expando + Z.uid++
    }
    Z.uid = 1, Z.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[V(t)] = n;
            else
                for (i in t) o[V(i)] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in i ? [t] : t.match(P) || []).length;
                    for (; n--;) delete i[t[n]]
                }
                void 0 !== t && !S.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            e = e[this.expando];
            return void 0 !== e && !S.isEmptyObject(e)
        }
    };
    var X = new Z,
        K = new Z,
        G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function Q(e, t, n) {
        var i, o;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : G.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                K.set(e, t, n)
            } else n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return K.hasData(e) || X.hasData(e)
        },
        data: function(e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function(e, t) {
            K.remove(e, t)
        },
        _data: function(e, t, n) {
            return X.access(e, t, n)
        },
        _removeData: function(e, t) {
            X.remove(e, t)
        }
    }), S.fn.extend({
        data: function(n, e) {
            var t, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                K.set(this, n)
            }) : z(this, function(e) {
                var t;
                return r && void 0 === e ? void 0 !== (t = K.get(r, n)) || void 0 !== (t = Q(r, n)) ? t : void 0 : void this.each(function() {
                    K.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (o = K.get(r), 1 === r.nodeType && !X.get(r, "hasDataAttrs"))) {
                for (t = s.length; t--;) s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = V(i.slice(5)), Q(r, i, o[i]));
                X.set(r, "hasDataAttrs", !0)
            }
            return o
        },
        removeData: function(e) {
            return this.each(function() {
                K.remove(this, e)
            })
        }
    }), S.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = X.get(e, t), n && (!i || Array.isArray(n) ? i = X.access(e, t, S.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = S._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function() {
                S.dequeue(e, t)
            }, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return X.get(e, n) || X.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    X.remove(e, [t + "queue", n])
                })
            })
        }
    }), S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --o || r.resolveWith(s, [s])
            }
            var i, o = 1,
                r = S.Deferred(),
                s = this,
                a = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = X.get(s[a], e + "queueHooks")) && i.empty && (o++, i.empty.add(n));
            return n(), r.promise(t)
        }
    });

    function ee(e, t, n, i) {
        var o, r = {};
        for (o in t) r[o] = e.style[o], e.style[o] = t[o];
        for (o in i = n.apply(e, i || []), t) e.style[o] = r[o];
        return i
    }
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        oe = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && S.contains(e.ownerDocument, e) && "none" === S.css(e, "display")
        };

    function re(e, t, n, i) {
        var o, r, s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return S.css(e, t, "")
            },
            l = a(),
            u = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = (S.cssNumber[t] || "px" !== u && +l) && ne.exec(S.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; s--;) S.style(e, t, c + u), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), c /= r;
            c *= 2, S.style(e, t, c + u), n = n || []
        }
        return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o
    }
    var se = {};

    function ae(e, t) {
        for (var n, i, o, r, s, a = [], l = 0, u = e.length; l < u; l++)(i = e[l]).style && (n = i.style.display, t ? ("none" === n && (a[l] = X.get(i, "display") || null, a[l] || (i.style.display = "")), "" === i.style.display && oe(i) && (a[l] = (s = r = void 0, r = (o = i).ownerDocument, s = o.nodeName, (o = se[s]) || (r = r.body.appendChild(r.createElement(s)), o = S.css(r, "display"), r.parentNode.removeChild(r), "none" === o && (o = "block"), se[s] = o)))) : "none" !== n && (a[l] = "none", X.set(i, "display", n)));
        for (l = 0; l < u; l++) null != a[l] && (e[l].style.display = a[l]);
        return e
    }
    S.fn.extend({
        show: function() {
            return ae(this, !0)
        },
        hide: function() {
            return ae(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                oe(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var le = /^(?:checkbox|radio)$/i,
        ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ce = /^$|^module$|\/(?:java|ecma)script/i,
        de = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function pe(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && E(e, t) ? S.merge([e], n) : n
    }

    function he(e, t) {
        for (var n = 0, i = e.length; n < i; n++) X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"))
    }
    de.optgroup = de.option, de.tbody = de.tfoot = de.colgroup = de.caption = de.thead, de.th = de.td;
    var fe = /<|&#?\w+;/;

    function me(e, t, n, i, o) {
        for (var r, s, a, l, u, c = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((r = e[p]) || 0 === r)
                if ("object" === f(r)) S.merge(d, r.nodeType ? [r] : r);
                else if (fe.test(r)) {
            for (s = s || c.appendChild(t.createElement("div")), a = (ue.exec(r) || ["", ""])[1].toLowerCase(), a = de[a] || de._default, s.innerHTML = a[1] + S.htmlPrefilter(r) + a[2], u = a[0]; u--;) s = s.lastChild;
            S.merge(d, s.childNodes), (s = c.firstChild).textContent = ""
        } else d.push(t.createTextNode(r));
        for (c.textContent = "", p = 0; r = d[p++];)
            if (i && -1 < S.inArray(r, i)) o && o.push(r);
            else if (l = S.contains(r.ownerDocument, r), s = pe(c.appendChild(r), "script"), l && he(s), n)
            for (u = 0; r = s[u++];) ce.test(r.type || "") && n.push(r);
        return c
    }
    t = C.createDocumentFragment().appendChild(C.createElement("div")), (h = C.createElement("input")).setAttribute("type", "radio"), h.setAttribute("checked", "checked"), h.setAttribute("name", "t"), t.appendChild(h), y.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
    var ve = C.documentElement,
        ge = /^key/,
        ye = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        be = /^([^.]*)(?:\.(.+)|)/;

    function ke() {
        return !0
    }

    function we() {
        return !1
    }

    function xe() {
        try {
            return C.activeElement
        } catch (e) {}
    }

    function Ce(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) Ce(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = we;
        else if (!o) return e;
        return 1 === r && (s = o, (o = function(e) {
            return S().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = S.guid++)), e.each(function() {
            S.event.add(this, t, o, i, n)
        })
    }
    S.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r, s, a, l, u, c, d, p, h, f = X.get(t);
            if (f)
                for (n.handler && (n = (r = n).handler, o = r.selector), o && S.find.matchesSelector(ve, o), n.guid || (n.guid = S.guid++), (a = f.events) || (a = f.events = {}), (s = f.handle) || (s = f.handle = function(e) {
                        return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                    }), l = (e = (e || "").match(P) || [""]).length; l--;) d = h = (u = be.exec(e[l]) || [])[1], p = (u[2] || "").split(".").sort(), d && (c = S.event.special[d] || {}, d = (o ? c.delegateType : c.bindType) || d, c = S.event.special[d] || {}, u = S.extend({
                    type: d,
                    origType: h,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && S.expr.match.needsContext.test(o),
                    namespace: p.join(".")
                }, r), (h = a[d]) || ((h = a[d] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(d, s)), c.add && (c.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), S.event.global[d] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, u, c, d, p, h, f, m, v = X.hasData(e) && X.get(e);
            if (v && (l = v.events)) {
                for (u = (t = (t || "").match(P) || [""]).length; u--;)
                    if (h = m = (a = be.exec(t[u]) || [])[1], f = (a[2] || "").split(".").sort(), h) {
                        for (d = S.event.special[h] || {}, p = l[h = (i ? d.delegateType : d.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) c = p[r], !o && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(r, 1), c.selector && p.delegateCount--, d.remove && d.remove.call(e, c));
                        s && !p.length && (d.teardown && !1 !== d.teardown.call(e, f, v.handle) || S.removeEvent(e, h, v.handle), delete l[h])
                    } else
                        for (h in l) S.event.remove(e, h + t[u], n, i, !0);
                S.isEmptyObject(l) && X.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, o, r, s = S.event.fix(e),
                a = new Array(arguments.length),
                l = (X.get(this, "events") || {})[s.type] || [],
                e = S.event.special[s.type] || {};
            for (a[0] = s, t = 1; t < arguments.length; t++) a[t] = arguments[t];
            if (s.delegateTarget = this, !e.preDispatch || !1 !== e.preDispatch.call(this, s)) {
                for (r = S.event.handlers.call(this, s, l), t = 0;
                    (i = r[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (o = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (s.result = o) && (s.preventDefault(), s.stopPropagation()));
                return e.postDispatch && e.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s, a = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? -1 < S(o, this).index(u) : S.find(o, this, null, [u]).length), s[o] && r.push(i);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    } return u = this, l < t.length && a.push({
                elem: u,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: b(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== xe() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === xe() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && E(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return E(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, S.Event = function(e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : we, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: we,
        isPropagationStopped: we,
        isImmediatePropagationStopped: we,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && ge.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ye.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, S.event.addProp), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        S.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    i = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), S.fn.extend({
        on: function(e, t, n, i) {
            return Ce(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Ce(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, S(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = we), this.each(function() {
                S.event.remove(this, e, n, t)
            });
            for (o in e) this.off(o, t, e[o]);
            return this
        }
    });
    var Se = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Te = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function _e(e, t) {
        return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function $e(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Fe(e, t) {
        var n, i, o, r, s, a;
        if (1 === t.nodeType) {
            if (X.hasData(e) && (r = X.access(e), s = X.set(t, r), a = r.events))
                for (o in delete s.handle, s.events = {}, a)
                    for (n = 0, i = a[o].length; n < i; n++) S.event.add(t, o, a[o][n]);
            K.hasData(e) && (e = K.access(e), e = S.extend({}, e), K.set(t, e))
        }
    }

    function je(n, i, o, r) {
        i = v.apply([], i);
        var e, t, s, a, l, u, c = 0,
            d = n.length,
            p = d - 1,
            h = i[0],
            f = b(h);
        if (f || 1 < d && "string" == typeof h && !y.checkClone && Ae.test(h)) return n.each(function(e) {
            var t = n.eq(e);
            f && (i[0] = h.call(this, e, t.html())), je(t, i, o, r)
        });
        if (d && (t = (e = me(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === e.childNodes.length && (e = t), t || r)) {
            for (a = (s = S.map(pe(e, "script"), De)).length; c < d; c++) l = e, c !== p && (l = S.clone(l, !0, !0), a && S.merge(s, pe(l, "script"))), o.call(n[c], l, c);
            if (a)
                for (u = s[s.length - 1].ownerDocument, S.map(s, $e), c = 0; c < a; c++) l = s[c], ce.test(l.type || "") && !X.access(l, "globalEval") && S.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? S._evalUrl && S._evalUrl(l.src) : k(l.textContent.replace(Ee, ""), u, l))
        }
        return n
    }

    function Me(e, t, n) {
        for (var i, o = t ? S.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || S.cleanData(pe(i)), i.parentNode && (n && S.contains(i.ownerDocument, i) && he(pe(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e.replace(Se, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, o, r, s, a, l, u, c = e.cloneNode(!0),
                d = S.contains(e.ownerDocument, e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (s = pe(c), i = 0, o = (r = pe(e)).length; i < o; i++) a = r[i], l = s[i], u = void 0, "input" === (u = l.nodeName.toLowerCase()) && le.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (r = r || pe(e), s = s || pe(c), i = 0, o = r.length; i < o; i++) Fe(r[i], s[i]);
                else Fe(e, c);
            return 0 < (s = pe(c, "script")).length && he(s, !d && pe(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, i, o = S.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (Y(n)) {
                    if (t = n[X.expando]) {
                        if (t.events)
                            for (i in t.events) o[i] ? S.event.remove(n, i) : S.removeEvent(n, i, t.handle);
                        n[X.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function(e) {
            return Me(this, e, !0)
        },
        remove: function(e) {
            return Me(this, e)
        },
        text: function(e) {
            return z(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return je(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || _e(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return je(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = _e(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return je(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return je(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(pe(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return z(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Te.test(e) && !de[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(pe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return je(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(pe(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        S.fn[e] = function(e) {
            for (var t, n = [], i = S(e), o = i.length - 1, r = 0; r <= o; r++) t = r === o ? this : this.clone(!0), S(i[r])[s](t), l.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Oe, Pe, Ie, Le, Be, Re, Ne, He = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        ze = function(e) {
            var t = e.ownerDocument.defaultView;
            return (t = !t || !t.opener ? x : t).getComputedStyle(e)
        },
        qe = new RegExp(ie.join("|"), "i");

    function We() {
        var e;
        Ne && (Re.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Ne.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ve.appendChild(Re).appendChild(Ne), e = x.getComputedStyle(Ne), Oe = "1%" !== e.top, Be = 12 === Ue(e.marginLeft), Ne.style.right = "60%", Le = 36 === Ue(e.right), Pe = 36 === Ue(e.width), Ne.style.position = "absolute", Ie = 36 === Ne.offsetWidth || "absolute", ve.removeChild(Re), Ne = null)
    }

    function Ue(e) {
        return Math.round(parseFloat(e))
    }

    function Ve(e, t, n) {
        var i, o, r = e.style;
        return (n = n || ze(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || S.contains(e.ownerDocument, e) || (o = S.style(e, t)), !y.pixelBoxStyles() && He.test(o) && qe.test(t) && (i = r.width, e = r.minWidth, t = r.maxWidth, r.minWidth = r.maxWidth = r.width = o, o = n.width, r.width = i, r.minWidth = e, r.maxWidth = t)), void 0 !== o ? o + "" : o
    }

    function Ye(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    Re = C.createElement("div"), (Ne = C.createElement("div")).style && (Ne.style.backgroundClip = "content-box", Ne.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === Ne.style.backgroundClip, S.extend(y, {
        boxSizingReliable: function() {
            return We(), Pe
        },
        pixelBoxStyles: function() {
            return We(), Le
        },
        pixelPosition: function() {
            return We(), Oe
        },
        reliableMarginLeft: function() {
            return We(), Be
        },
        scrollboxSize: function() {
            return We(), Ie
        }
    }));
    var Ze = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ke = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ge = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Je = ["Webkit", "Moz", "ms"],
        Qe = C.createElement("div").style;

    function et(e) {
        return S.cssProps[e] || (S.cssProps[e] = function(e) {
            if (e in Qe) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Je.length; n--;)
                if ((e = Je[n] + t) in Qe) return e
        }(e) || e)
    }

    function tt(e, t, n) {
        var i = ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function nt(e, t, n, i, o, r) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += S.css(e, n + ie[s], !0, o)), i ? ("content" === n && (l -= S.css(e, "padding" + ie[s], !0, o)), "margin" !== n && (l -= S.css(e, "border" + ie[s] + "Width", !0, o))) : (l += S.css(e, "padding" + ie[s], !0, o), "padding" !== n ? l += S.css(e, "border" + ie[s] + "Width", !0, o) : a += S.css(e, "border" + ie[s] + "Width", !0, o));
        return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5))), l
    }

    function it(e, t, n) {
        var i = ze(e),
            o = Ve(e, t, i),
            r = "border-box" === S.css(e, "boxSizing", !1, i),
            s = r;
        if (He.test(o)) {
            if (!n) return o;
            o = "auto"
        }
        return s = s && (y.boxSizingReliable() || o === e.style[t]), "auto" !== o && (parseFloat(o) || "inline" !== S.css(e, "display", !1, i)) || (o = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (o = parseFloat(o) || 0) + nt(e, t, n || (r ? "border" : "content"), s, i, o) + "px"
    }

    function ot(e, t, n, i, o) {
        return new ot.prototype.init(e, t, n, i, o)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        e = Ve(e, "opacity");
                        return "" === e ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = V(t),
                    l = Xe.test(t),
                    u = e.style;
                if (l || (t = et(a)), s = S.cssHooks[t] || S.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : u[t];
                "string" == (r = typeof n) && (o = ne.exec(n)) && o[1] && (n = re(e, t, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (S.cssNumber[a] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var o, r = V(t);
            return Xe.test(t) || (t = et(r)), "normal" === (o = void 0 === (o = (r = S.cssHooks[t] || S.cssHooks[r]) && "get" in r ? r.get(e, !0, n) : o) ? Ve(e, t, i) : o) && t in Ge && (o = Ge[t]), "" === n || n ? (t = parseFloat(o), !0 === n || isFinite(t) ? t || 0 : o) : o
        }
    }), S.each(["height", "width"], function(e, s) {
        S.cssHooks[s] = {
            get: function(e, t, n) {
                if (t) return !Ze.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, s, n) : ee(e, Ke, function() {
                    return it(e, s, n)
                })
            },
            set: function(e, t, n) {
                var i, o = ze(e),
                    r = "border-box" === S.css(e, "boxSizing", !1, o),
                    n = n && nt(e, s, n, r, o);
                return r && y.scrollboxSize() === o.position && (n -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(o[s]) - nt(e, s, "border", !1, o) - .5)), n && (i = ne.exec(t)) && "px" !== (i[3] || "px") && (e.style[s] = t, t = S.css(e, s)), tt(0, t, n)
            }
        }
    }), S.cssHooks.marginLeft = Ye(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Ve(e, "marginLeft")) || e.getBoundingClientRect().left - ee(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(o, r) {
        S.cssHooks[o + r] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + ie[t] + r] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, "margin" !== o && (S.cssHooks[o + r].set = tt)
    }), S.fn.extend({
        css: function(e, t) {
            return z(this, function(e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = ze(e), o = t.length; s < o; s++) r[t[s]] = S.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), (S.Tween = ot).prototype = {
        constructor: ot,
        init: function(e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = ot.propHooks[this.prop];
            return (e && e.get ? e : ot.propHooks._default).get(this)
        },
        run: function(e) {
            var t, n = ot.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : ot.propHooks._default).set(this), this
        }
    }, ot.prototype.init.prototype = ot.prototype, ot.propHooks = {
        _default: {
            get: function(e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = S.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[S.cssProps[e.prop]] && !S.cssHooks[e.prop] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = ot.prototype.init, S.fx.step = {};
    var rt, st, at = /^(?:toggle|show|hide)$/,
        lt = /queueHooks$/;

    function ut() {
        st && (!1 === C.hidden && x.requestAnimationFrame ? x.requestAnimationFrame(ut) : x.setTimeout(ut, S.fx.interval), S.fx.tick())
    }

    function ct() {
        return x.setTimeout(function() {
            rt = void 0
        }), rt = Date.now()
    }

    function dt(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = ie[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function pt(e, t, n) {
        for (var i, o = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function ht(o, e, t) {
        var n, r, i = 0,
            s = ht.prefilters.length,
            a = S.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var e = rt || ct(), e = Math.max(0, u.startTime + u.duration - e), t = 1 - (e / u.duration || 0), n = 0, i = u.tweens.length; n < i; n++) u.tweens[n].run(t);
                return a.notifyWith(o, [u, t, e]), t < 1 && i ? e : (i || a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u]), !1)
            },
            u = a.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: rt || ct(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    e = S.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(e), e
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; t < n; t++) u.tweens[t].run(1);
                    return e ? (a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u, e])) : a.rejectWith(o, [u, e]), this
                }
            }),
            c = u.props;
        for (function(e, t) {
                var n, i, o, r, s;
                for (n in e)
                    if (i = V(n), o = t[i], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = S.cssHooks[i]) && "expand" in s)
                        for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
                    else t[i] = o
            }(c, u.opts.specialEasing); i < s; i++)
            if (n = ht.prefilters[i].call(u, o, c, u.opts)) return b(n.stop) && (S._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, pt, u), b(u.opts.start) && u.opts.start.call(o, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), S.fx.timer(S.extend(l, {
            elem: o,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    S.Animation = S.extend(ht, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return re(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            for (var n, i = 0, o = (e = b(e) ? (t = e, ["*"]) : e.match(P)).length; i < o; i++) n = e[i], ht.tweeners[n] = ht.tweeners[n] || [], ht.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, o, r, s, a, l, u, c = "width" in t || "height" in t,
                d = this,
                p = {},
                h = e.style,
                f = e.nodeType && oe(e),
                m = X.get(e, "fxshow");
            for (i in n.queue || (null == (s = S._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || a()
                }), s.unqueued++, d.always(function() {
                    d.always(function() {
                        s.unqueued--, S.queue(e, "fx").length || s.empty.fire()
                    })
                })), t)
                if (o = t[i], at.test(o)) {
                    if (delete t[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i]) continue;
                        f = !0
                    }
                    p[i] = m && m[i] || S.style(e, i)
                } if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(p))
                for (i in c && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (u = m && m.display) && (u = X.get(e, "display")), "none" === (c = S.css(e, "display")) && (u ? c = u : (ae([e], !0), u = e.style.display || u, c = S.css(e, "display"), ae([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === S.css(e, "float") && (l || (d.done(function() {
                        h.display = u
                    }), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), l = !1, p) l || (m ? "hidden" in m && (f = m.hidden) : m = X.access(e, "fxshow", {
                    display: u
                }), r && (m.hidden = !f), f && ae([e], !0), d.done(function() {
                    for (i in f || ae([e]), X.remove(e, "fxshow"), p) S.style(e, i, p[i])
                })), l = pt(f ? m[i] : 0, i, d), i in m || (m[i] = l.start, f && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ht.prefilters.unshift(e) : ht.prefilters.push(e)
        }
    }), S.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || b(e) && e,
            duration: e,
            easing: n && t || t && !b(t) && t
        };
        return S.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in S.fx.speeds ? i.duration = S.fx.speeds[i.duration] : i.duration = S.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            b(i.old) && i.old.call(this), i.queue && S.dequeue(this, i.queue)
        }, i
    }, S.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(oe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            var o = S.isEmptyObject(t),
                r = S.speed(e, n, i),
                i = function() {
                    var e = ht(this, S.extend({}, t), r);
                    (o || X.get(this, "finish")) && e.stop(!0)
                };
            return i.finish = i, o || !1 === r.queue ? this.each(i) : this.queue(r.queue, i)
        },
        stop: function(o, e, r) {
            function s(e) {
                var t = e.stop;
                delete e.stop, t(r)
            }
            return "string" != typeof o && (r = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function() {
                var e = !0,
                    t = null != o && o + "queueHooks",
                    n = S.timers,
                    i = X.get(this);
                if (t) i[t] && i[t].stop && s(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && lt.test(t) && s(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
                !e && r || S.dequeue(this, o)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = X.get(this),
                    n = t[s + "queue"],
                    i = t[s + "queueHooks"],
                    o = S.timers,
                    r = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function(e, i) {
        var o = S.fn[i];
        S.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(dt(i, !0), e, t, n)
        }
    }), S.each({
        slideDown: dt("show"),
        slideUp: dt("hide"),
        slideToggle: dt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        S.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), S.timers = [], S.fx.tick = function() {
        var e, t = 0,
            n = S.timers;
        for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), rt = void 0
    }, S.fx.timer = function(e) {
        S.timers.push(e), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function() {
        st || (st = !0, ut())
    }, S.fx.stop = function() {
        st = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function(i, e) {
        return i = S.fx && S.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = x.setTimeout(e, i);
            t.stop = function() {
                x.clearTimeout(n)
            }
        })
    }, t = C.createElement("input"), te = C.createElement("select").appendChild(C.createElement("option")), t.type = "checkbox", y.checkOn = "" !== t.value, y.optSelected = te.selected, (t = C.createElement("input")).value = "t", t.type = "radio", y.radioValue = "t" === t.value;
    var ft, mt = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return z(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? S.prop(e, t, n) : (1 === r && S.isXMLDoc(e) || (o = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ft : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : !(o && "get" in o && null !== (i = o.get(e, t))) && null == (i = S.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && E(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                o = t && t.match(P);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) e.removeAttribute(n)
        }
    }), ft = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = mt[t] || S.find.attr;
        mt[t] = function(e, t, n) {
            var i, o, r = t.toLowerCase();
            return n || (o = mt[r], mt[r] = i, i = null != s(e, t, n) ? r : null, mt[r] = o), i
        }
    });
    var vt = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function yt(e) {
        return (e.match(P) || []).join(" ")
    }

    function bt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function kt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return z(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && S.isXMLDoc(e) || (t = S.propFix[t] || t, o = S.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), y.optSelected || (S.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(e) {
            e = e.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, s, a = 0;
            if (b(t)) return this.each(function(e) {
                S(this).addClass(t.call(this, e, bt(this)))
            });
            if ((e = kt(t)).length)
                for (; n = this[a++];)
                    if (s = bt(n), i = 1 === n.nodeType && " " + yt(s) + " ") {
                        for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s !== (s = yt(i)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, s, a = 0;
            if (b(t)) return this.each(function(e) {
                S(this).removeClass(t.call(this, e, bt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = kt(t)).length)
                for (; n = this[a++];)
                    if (s = bt(n), i = 1 === n.nodeType && " " + yt(s) + " ") {
                        for (r = 0; o = e[r++];)
                            for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        s !== (s = yt(i)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function(o, t) {
            var r = typeof o,
                s = "string" == r || Array.isArray(o);
            return "boolean" == typeof t && s ? t ? this.addClass(o) : this.removeClass(o) : b(o) ? this.each(function(e) {
                S(this).toggleClass(o.call(this, e, bt(this), t), t)
            }) : this.each(function() {
                var e, t, n, i;
                if (s)
                    for (t = 0, n = S(this), i = kt(o); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== o && "boolean" != r || ((e = bt(this)) && X.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== o && X.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            for (var t, n = 0, i = " " + e + " "; t = this[n++];)
                if (1 === t.nodeType && -1 < (" " + yt(bt(t)) + " ").indexOf(i)) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    S.fn.extend({
        val: function(t) {
            var n, e, i, o = this[0];
            return arguments.length ? (i = b(t), this.each(function(e) {
                1 === this.nodeType && (null == (e = i ? t.call(this, e, S(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = S.map(e, function(e) {
                    return null == e ? "" : e + ""
                })), (n = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : o ? (n = S.valHooks[o.type] || S.valHooks[o.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(o, "value")) ? e : "string" == typeof(e = o.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : yt(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n = e.options, i = e.selectedIndex, o = "select-one" === e.type, r = o ? null : [], s = o ? i + 1 : n.length, a = i < 0 ? s : o ? i : 0; a < s; a++)
                        if (((t = n[a]).selected || a === i) && !t.disabled && (!t.parentNode.disabled || !E(t.parentNode, "optgroup"))) {
                            if (t = S(t).val(), o) return t;
                            r.push(t)
                        } return r
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = S.makeArray(t), s = o.length; s--;)((i = o[s]).selected = -1 < S.inArray(S.valHooks.option.get(i), r)) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, y.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in x;

    function xt(e) {
        e.stopPropagation()
    }
    var Ct = /^(?:focusinfocus|focusoutblur)$/;
    S.extend(S.event, {
        trigger: function(e, t, n, i) {
            var o, r, s, a, l, u, c, d = [n || C],
                p = g.call(e, "type") ? e.type : e,
                h = g.call(e, "namespace") ? e.namespace.split(".") : [],
                f = c = r = n = n || C;
            if (3 !== n.nodeType && 8 !== n.nodeType && !Ct.test(p + S.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, (e = e[S.expando] ? e : new S.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), u = S.event.special[p] || {}, i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!i && !u.noBubble && !m(n)) {
                    for (s = u.delegateType || p, Ct.test(s + p) || (f = f.parentNode); f; f = f.parentNode) d.push(f), r = f;
                    r === (n.ownerDocument || C) && d.push(r.defaultView || r.parentWindow || x)
                }
                for (o = 0;
                    (f = d[o++]) && !e.isPropagationStopped();) c = f, e.type = 1 < o ? s : u.bindType || p, (l = (X.get(f, "events") || {})[e.type] && X.get(f, "handle")) && l.apply(f, t), (l = a && f[a]) && l.apply && Y(f) && (e.result = l.apply(f, t), !1 === e.result && e.preventDefault());
                return e.type = p, i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), t) || !Y(n) || a && b(n[p]) && !m(n) && ((r = n[a]) && (n[a] = null), S.event.triggered = p, e.isPropagationStopped() && c.addEventListener(p, xt), n[p](), e.isPropagationStopped() && c.removeEventListener(p, xt), S.event.triggered = void 0, r && (n[a] = r)), e.result
            }
        },
        simulate: function(e, t, n) {
            e = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(e, null, t)
        }
    }), S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0)
        }
    }), y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        function o(e) {
            S.event.simulate(i, e.target, S.event.fix(e))
        }
        S.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = X.access(e, i);
                t || e.addEventListener(n, o, !0), X.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = X.access(e, i) - 1;
                t ? X.access(e, i, t) : (e.removeEventListener(n, o, !0), X.remove(e, i))
            }
        }
    });
    var St = x.location,
        Tt = Date.now(),
        At = /\?/;
    S.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new x.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
    };
    var Et = /\[\]$/,
        _t = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        $t = /^(?:input|select|textarea|keygen)/i;
    S.param = function(e, t) {
        function n(e, t) {
            t = b(t) ? t() : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
        }
        var i, o = [];
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
            n(this.name, this.value)
        });
        else
            for (i in e) ! function n(i, e, o, r) {
                if (Array.isArray(e)) S.each(e, function(e, t) {
                    o || Et.test(i) ? r(i, t) : n(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, o, r)
                });
                else if (o || "object" !== f(e)) r(i, e);
                else
                    for (var t in e) n(i + "[" + t + "]", e[t], o, r)
            }(i, e[i], t, n);
        return o.join("&")
    }, S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && $t.test(this.nodeName) && !Dt.test(e) && (this.checked || !le.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(_t, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(_t, "\r\n")
                }
            }).get()
        }
    });
    var Ft = /%20/g,
        jt = /#.*$/,
        Mt = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:GET|HEAD)$/,
        It = /^\/\//,
        Lt = {},
        Bt = {},
        Rt = "*/".concat("*"),
        Nt = C.createElement("a");

    function Ht(r) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                o = e.toLowerCase().match(P) || [];
            if (b(t))
                for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
        }
    }

    function zt(t, i, o, r) {
        var s = {},
            a = t === Bt;

        function l(e) {
            var n;
            return s[e] = !0, S.each(t[e] || [], function(e, t) {
                t = t(i, o, r);
                return "string" != typeof t || a || s[t] ? a ? !(n = t) : void 0 : (i.dataTypes.unshift(t), l(t), !1)
            }), n
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function qt(e, t) {
        var n, i, o = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i = i || {})[n] = t[n]);
        return i && S.extend(!0, e, i), e
    }
    Nt.href = St.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: St.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? qt(qt(e, S.ajaxSettings), t) : qt(S.ajaxSettings, e)
        },
        ajaxPrefilter: Ht(Lt),
        ajaxTransport: Ht(Bt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var l, u, c, n, d, i, p, h, o, f = S.ajaxSetup({}, t),
                m = f.context || f,
                v = f.context && (m.nodeType || m.jquery) ? S(m) : S.event,
                g = S.Deferred(),
                y = S.Callbacks("once memory"),
                b = f.statusCode || {},
                r = {},
                s = {},
                a = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (p) {
                            if (!n)
                                for (n = {}; t = Ot.exec(c);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return p ? c : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == p && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, r[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == p && (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        if (e)
                            if (p) k.always(e[k.status]);
                            else
                                for (var t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        e = e || a;
                        return l && l.abort(e), w(0, e), this
                    }
                };
            if (g.promise(k), f.url = ((e || f.url || St.href) + "").replace(It, St.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(P) || [""], null == f.crossDomain) {
                i = C.createElement("a");
                try {
                    i.href = f.url, i.href = i.href, f.crossDomain = Nt.protocol + "//" + Nt.host != i.protocol + "//" + i.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = S.param(f.data, f.traditional)), zt(Lt, f, t, k), p) return k;
            for (o in (h = S.event && f.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Pt.test(f.type), u = f.url.replace(jt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ft, "+")) : (e = f.url.slice(u.length), f.data && (f.processData || "string" == typeof f.data) && (u += (At.test(u) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (u = u.replace(Mt, "$1"), e = (At.test(u) ? "&" : "?") + "_=" + Tt++ + e), f.url = u + e), f.ifModified && (S.lastModified[u] && k.setRequestHeader("If-Modified-Since", S.lastModified[u]), S.etag[u] && k.setRequestHeader("If-None-Match", S.etag[u])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && k.setRequestHeader("Content-Type", f.contentType), k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : f.accepts["*"]), f.headers) k.setRequestHeader(o, f.headers[o]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, k, f) || p)) return k.abort();
            if (a = "abort", y.add(f.complete), k.done(f.success), k.fail(f.error), l = zt(Bt, f, t, k)) {
                if (k.readyState = 1, h && v.trigger("ajaxSend", [k, f]), p) return k;
                f.async && 0 < f.timeout && (d = x.setTimeout(function() {
                    k.abort("timeout")
                }, f.timeout));
                try {
                    p = !1, l.send(r, w)
                } catch (e) {
                    if (p) throw e;
                    w(-1, e)
                }
            } else w(-1, "No Transport");

            function w(e, t, n, i) {
                var o, r, s, a = t;
                p || (p = !0, d && x.clearTimeout(d), l = void 0, c = i || "", k.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    for (var i, o, r, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in a)
                            if (a[o] && a[o].test(i)) {
                                l.unshift(o);
                                break
                            } if (l[0] in n) r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            s = s || o
                        }
                        r = r || s
                    }
                    if (r) return r !== l[0] && l.unshift(r), n[r]
                }(f, k, n)), s = function(e, t, n, i) {
                    var o, r, s, a, l, u = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                    for (r = c.shift(); r;)
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(s = u[l + " " + r] || u["* " + r]))
                            for (o in u)
                                if ((a = o.split(" "))[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                    !0 === s ? s = u[o] : !0 !== u[o] && (r = a[0], c.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(f, s, k, i), i ? (f.ifModified && ((n = k.getResponseHeader("Last-Modified")) && (S.lastModified[u] = n), (n = k.getResponseHeader("etag")) && (S.etag[u] = n)), 204 === e || "HEAD" === f.type ? a = "nocontent" : 304 === e ? a = "notmodified" : (a = s.state, o = s.data, i = !(r = s.error))) : (r = a, !e && a || (a = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || a) + "", i ? g.resolveWith(m, [o, a, k]) : g.rejectWith(m, [k, a, r]), k.statusCode(b), b = void 0, h && v.trigger(i ? "ajaxSuccess" : "ajaxError", [k, f, i ? o : r]), y.fireWith(m, [k, a]), h && (v.trigger("ajaxComplete", [k, f]), --S.active || S.event.trigger("ajaxStop")))
            }
            return k
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function(e, o) {
        S[o] = function(e, t, n, i) {
            return b(t) && (i = i || n, n = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: o,
                dataType: i,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }), S._evalUrl = function(e) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, S.fn.extend({
        wrapAll: function(e) {
            return this[0] && (b(e) && (e = e.call(this[0])), e = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return b(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = b(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }, S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, S.ajaxSettings.xhr = function() {
        try {
            return new x.XMLHttpRequest
        } catch (e) {}
    };
    var Wt = {
            0: 200,
            1223: 204
        },
        Ut = S.ajaxSettings.xhr();
    y.cors = !!Ut && "withCredentials" in Ut, y.ajax = Ut = !!Ut, S.ajaxTransport(function(o) {
        var r, s;
        if (y.cors || Ut && !o.crossDomain) return {
            send: function(e, t) {
                var n, i = o.xhr();
                if (i.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                    for (n in o.xhrFields) i[n] = o.xhrFields[n];
                for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                r = function(e) {
                    return function() {
                        r && (r = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Wt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                            binary: i.response
                        } : {
                            text: i.responseText
                        }, i.getAllResponseHeaders()))
                    }
                }, i.onload = r(), s = i.onerror = i.ontimeout = r("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
                    4 === i.readyState && x.setTimeout(function() {
                        r && s()
                    })
                }, r = r("abort");
                try {
                    i.send(o.hasContent && o.data || null)
                } catch (e) {
                    if (r) throw e
                }
            },
            abort: function() {
                r && r()
            }
        }
    }), S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function(n) {
        var i, o;
        if (n.crossDomain) return {
            send: function(e, t) {
                i = S("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", o = function(e) {
                    i.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), C.head.appendChild(i[0])
            },
            abort: function() {
                o && o()
            }
        }
    });
    var Vt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Vt.pop() || S.expando + "_" + Tt++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, o, r, s = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Yt, "$1" + i) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return r || S.error(i + " was not called"), r[0]
        }, e.dataTypes[0] = "json", o = x[i], x[i] = function() {
            r = arguments
        }, n.always(function() {
            void 0 === o ? S(x).removeProp(i) : x[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Vt.push(i)), r && b(o) && o(r[0]), r = o = void 0
        }), "script"
    }), y.createHTMLDocument = ((t = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === t.childNodes.length), S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((i = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(i)) : t = C), i = !n && [], (n = _.exec(e)) ? [t.createElement(n[1])] : (n = me([e], t, i), i && i.length && S(i).remove(), S.merge([], n.childNodes)));
        var i
    }, S.fn.load = function(e, t, n) {
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return -1 < a && (i = yt(e.slice(a)), e = e.slice(0, a)), b(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < s.length && S.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, s.html(i ? S("<div>").append(S.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a = S.css(e, "position"),
                l = S(e),
                u = {};
            "static" === a && (e.style.position = "relative"), r = l.offset(), i = S.css(e, "top"), s = S.css(e, "left"), s = ("absolute" === a || "fixed" === a) && -1 < (i + s).indexOf("auto") ? (o = (a = l.position()).top, a.left) : (o = parseFloat(i) || 0, parseFloat(s) || 0), null != (t = b(t) ? t.call(e, n, S.extend({}, r)) : t).top && (u.top = t.top - r.top + o), null != t.left && (u.left = t.left - r.left + s), "using" in t ? t.using.call(e, u) : l.css(u)
        }
    }, S.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                S.offset.setOffset(this, t, e)
            });
            var e, n = this[0];
            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), n = n.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === S.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((o = S(e).offset()).top += S.css(e, "borderTopWidth", !0), o.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - S.css(i, "marginTop", !0),
                    left: t.left - o.left - S.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === S.css(e, "position");) e = e.offsetParent;
                return e || ve
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, o) {
        var r = "pageYOffset" === o;
        S.fn[t] = function(e) {
            return z(this, function(e, t, n) {
                var i;
                return m(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n ? i ? i[o] : e[t] : void(i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = Ye(y.pixelPosition, function(e, t) {
            if (t) return t = Ve(e, n), He.test(t) ? S(e).position()[n] + "px" : t
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        S.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(i, r) {
            S.fn[r] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    o = i || (!0 === e || !0 === t ? "margin" : "border");
                return z(this, function(e, t, n) {
                    var i;
                    return m(e) ? 0 === r.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? S.css(e, t, o) : S.style(e, t, n, o)
                }, a, n ? e : void 0, n)
            }
        })
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), S.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), S.proxy = function(e, t) {
        var n, i;
        if ("string" == typeof t && (i = e[t], t = e, e = i), b(e)) return n = a.call(arguments, 2), (i = function() {
            return e.apply(t || this, n.concat(a.call(arguments)))
        }).guid = e.guid = e.guid || S.guid++, i
    }, S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = E, S.isFunction = b, S.isWindow = m, S.camelCase = V, S.type = f, S.now = Date.now, S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Zt = x.jQuery,
        Xt = x.$;
    return S.noConflict = function(e) {
        return x.$ === S && (x.$ = Xt), e && x.jQuery === S && (x.jQuery = Zt), S
    }, e || (x.jQuery = x.$ = S), S
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).IMask = {})
}(this, function(e) {
    "use strict";
    var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        n = function(e) {
            return e && e.Math == Math && e
        },
        i = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || function() {
            return this
        }() || Function("return this")(),
        o = {},
        r = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        },
        s = !r(function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        }),
        a = {},
        l = {}.propertyIsEnumerable,
        u = Object.getOwnPropertyDescriptor,
        c = u && !l.call({
            1: 2
        }, 1);
    a.f = c ? function(e) {
        e = u(this, e);
        return !!e && e.enumerable
    } : l;

    function d(e) {
        return Object(S(e))
    }
    var p = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        },
        h = {}.toString,
        f = function(e) {
            return h.call(e).slice(8, -1)
        },
        m = "".split,
        v = r(function() {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return "String" == f(e) ? m.call(e, "") : Object(e)
        } : Object,
        g = function(e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e
        },
        y = v,
        b = g,
        k = function(e) {
            return y(b(e))
        },
        w = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        },
        x = w,
        C = function(e, t) {
            if (!x(e)) return e;
            var n, i;
            if (t && "function" == typeof(n = e.toString) && !x(i = n.call(e))) return i;
            if ("function" == typeof(n = e.valueOf) && !x(i = n.call(e))) return i;
            if (!t && "function" == typeof(n = e.toString) && !x(i = n.call(e))) return i;
            throw TypeError("Can't convert object to primitive value")
        },
        S = g,
        T = d,
        A = {}.hasOwnProperty,
        E = Object.hasOwn || function(e, t) {
            return A.call(T(e), t)
        },
        _ = w,
        D = i.document,
        $ = _(D) && _(D.createElement),
        F = function(e) {
            return $ ? D.createElement(e) : {}
        },
        j = !s && !r(function() {
            return 7 != Object.defineProperty(F("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }),
        M = a,
        O = p,
        P = k,
        I = C,
        L = E,
        B = j,
        R = Object.getOwnPropertyDescriptor;
    o.f = s ? R : function(e, t) {
        if (e = P(e), t = I(t, !0), B) try {
            return R(e, t)
        } catch (e) {}
        if (L(e, t)) return O(!M.f.call(e, t), e[t])
    };
    var N = {},
        H = w,
        z = function(e) {
            if (!H(e)) throw TypeError(String(e) + " is not an object");
            return e
        },
        q = j,
        W = z,
        U = C,
        V = Object.defineProperty;
    N.f = s ? V : function(e, t, n) {
        if (W(e), t = U(t, !0), W(n), q) try {
            return V(e, t, n)
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
        return "value" in n && (e[t] = n.value), e
    };
    var Y = N,
        Z = p,
        X = s ? function(e, t, n) {
            return Y.f(e, t, Z(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        },
        n = {
            exports: {}
        },
        K = i,
        G = X,
        t = function(t, n) {
            try {
                G(K, t, n)
            } catch (e) {
                K[t] = n
            }
            return n
        },
        c = "__core-js_shared__",
        l = i[c] || t(c, {}),
        _ = l,
        J = Function.toString;
    "function" != typeof _.inspectSource && (_.inspectSource = function(e) {
        return J.call(e)
    });
    var j = _.inspectSource,
        C = i.WeakMap,
        p = "function" == typeof C && /native code/.test(j(C)),
        c = {
            exports: {}
        },
        Q = l;
    (c.exports = function(e, t) {
        return Q[e] || (Q[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: "3.15.2",
        mode: "global",
        copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
    });
    var ee, te, ne, ie, oe, re, se, ae, le = 0,
        ue = Math.random(),
        _ = c.exports,
        ce = function(e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++le + ue).toString(36)
        },
        de = _("keys"),
        C = {},
        pe = w,
        he = X,
        fe = E,
        c = function(e) {
            return de[e] || (de[e] = ce(e))
        },
        _ = C,
        me = "Object already initialized",
        w = i.WeakMap;
    se = p || l.state ? (ee = l.state || (l.state = new w), te = ee.get, ne = ee.has, ie = ee.set, oe = function(e, t) {
        if (ne.call(ee, e)) throw new TypeError(me);
        return t.facade = e, ie.call(ee, e, t), t
    }, re = function(e) {
        return te.call(ee, e) || {}
    }, function(e) {
        return ne.call(ee, e)
    }) : (_[ae = c("state")] = !0, oe = function(e, t) {
        if (fe(e, ae)) throw new TypeError(me);
        return t.facade = e, he(e, ae, t), t
    }, re = function(e) {
        return fe(e, ae) ? e[ae] : {}
    }, function(e) {
        return fe(e, ae)
    });
    var l = {
            set: oe,
            get: re,
            has: se,
            enforce: function(e) {
                return se(e) ? re(e) : oe(e, {})
            },
            getterFor: function(n) {
                return function(e) {
                    var t;
                    if (!pe(e) || (t = re(e)).type !== n) throw TypeError("Incompatible receiver, " + n + " required");
                    return t
                }
            }
        },
        ve = i,
        ge = X,
        ye = E,
        be = t,
        ke = j,
        we = l.get,
        xe = l.enforce,
        Ce = String(String).split("String");
    (n.exports = function(e, t, n, i) {
        var o = !!i && !!i.unsafe,
            r = !!i && !!i.enumerable,
            s = !!i && !!i.noTargetGet;
        "function" == typeof n && ("string" != typeof t || ye(n, "name") || ge(n, "name", t), (i = xe(n)).source || (i.source = Ce.join("string" == typeof t ? t : ""))), e !== ve ? (o ? !s && e[t] && (r = !0) : delete e[t], r ? e[t] = n : ge(e, t, n)) : r ? e[t] = n : be(t, n)
    })(Function.prototype, "toString", function() {
        return "function" == typeof this && we(this).source || ke(this)
    });

    function Se(e) {
        return "function" == typeof e ? e : void 0
    }
    var Te = i,
        Ae = i,
        w = function(e, t) {
            return arguments.length < 2 ? Se(Te[e]) || Se(Ae[e]) : Te[e] && Te[e][t] || Ae[e] && Ae[e][t]
        },
        _ = {},
        Ee = Math.ceil,
        _e = Math.floor,
        c = function(e) {
            return isNaN(e = +e) ? 0 : (0 < e ? _e : Ee)(e)
        },
        De = c,
        $e = Math.min,
        j = function(e) {
            return 0 < e ? $e(De(e), 9007199254740991) : 0
        },
        Fe = c,
        je = Math.max,
        Me = Math.min,
        Oe = k,
        Pe = j,
        Ie = function(e, t) {
            e = Fe(e);
            return e < 0 ? je(e + t, 0) : Me(e, t)
        },
        l = function(a) {
            return function(e, t, n) {
                var i, o = Oe(e),
                    r = Pe(o.length),
                    s = Ie(n, r);
                if (a && t != t) {
                    for (; s < r;)
                        if ((i = o[s++]) != i) return !0
                } else
                    for (; s < r; s++)
                        if ((a || s in o) && o[s] === t) return a || s || 0;
                return !a && -1
            }
        },
        l = {
            includes: l(!0),
            indexOf: l(!1)
        },
        Le = E,
        Be = k,
        Re = l.indexOf,
        Ne = C,
        k = function(e, t) {
            var n, i = Be(e),
                o = 0,
                r = [];
            for (n in i) !Le(Ne, n) && Le(i, n) && r.push(n);
            for (; t.length > o;) Le(i, n = t[o++]) && (~Re(r, n) || r.push(n));
            return r
        },
        l = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        He = k,
        ze = l.concat("length", "prototype");
    _.f = Object.getOwnPropertyNames || function(e) {
        return He(e, ze)
    };
    C = {};
    C.f = Object.getOwnPropertySymbols;
    var qe = _,
        We = C,
        Ue = z,
        z = w("Reflect", "ownKeys") || function(e) {
            var t = qe.f(Ue(e)),
                n = We.f;
            return n ? t.concat(n(e)) : t
        },
        Ve = E,
        Ye = z,
        Ze = o,
        Xe = N,
        Ke = r,
        Ge = /#|\.prototype\./,
        N = function(e, t) {
            e = Qe[Je(e)];
            return e == tt || e != et && ("function" == typeof t ? Ke(t) : !!t)
        },
        Je = N.normalize = function(e) {
            return String(e).replace(Ge, ".").toLowerCase()
        },
        Qe = N.data = {},
        et = N.NATIVE = "N",
        tt = N.POLYFILL = "P",
        nt = i,
        it = o.f,
        ot = X,
        rt = n.exports,
        st = t,
        at = function(e, t) {
            for (var n = Ye(t), i = Xe.f, o = Ze.f, r = 0; r < n.length; r++) {
                var s = n[r];
                Ve(e, s) || i(e, s, o(t, s))
            }
        },
        lt = N,
        N = function(e, t) {
            var n, i, o, r = e.target,
                s = e.global,
                a = e.stat,
                l = s ? nt : a ? nt[r] || st(r, {}) : (nt[r] || {}).prototype;
            if (l)
                for (n in t) {
                    if (i = t[n], o = e.noTargetGet ? (o = it(l, n)) && o.value : l[n], !lt(s ? n : r + (a ? "." : "#") + n, e.forced) && void 0 !== o) {
                        if (typeof i == typeof o) continue;
                        at(i, o)
                    }(e.sham || o && o.sham) && ot(i, "sham", !0), rt(l, n, i, e)
                }
        },
        ut = k,
        ct = l,
        l = Object.keys || function(e) {
            return ut(e, ct)
        },
        dt = s,
        pt = l,
        ht = C,
        ft = a,
        mt = d,
        vt = v,
        gt = Object.assign,
        yt = Object.defineProperty,
        r = !gt || r(function() {
            if (dt && 1 !== gt({
                    b: 1
                }, gt(yt({}, "a", {
                    enumerable: !0,
                    get: function() {
                        yt(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return !0;
            var e = {},
                t = {},
                n = Symbol(),
                i = "abcdefghijklmnopqrst";
            return e[n] = 7, i.split("").forEach(function(e) {
                t[e] = e
            }), 7 != gt({}, e)[n] || pt(gt({}, t)).join("") != i
        }) ? function(e, t) {
            for (var n = mt(e), i = arguments.length, o = 1, r = ht.f, s = ft.f; o < i;)
                for (var a, l = vt(arguments[o++]), u = r ? pt(l).concat(r(l)) : pt(l), c = u.length, d = 0; d < c;) a = u[d++], dt && !s.call(l, a) || (n[a] = l[a]);
            return n
        } : gt;
    N({
        target: "Object",
        stat: !0,
        forced: Object.assign !== r
    }, {
        assign: r
    });
    var bt = c,
        kt = g,
        c = function(e) {
            var t = String(kt(this)),
                n = "",
                i = bt(e);
            if (i < 0 || i == 1 / 0) throw RangeError("Wrong number of repetitions");
            for (; 0 < i;
                (i >>>= 1) && (t += t)) 1 & i && (n += t);
            return n
        };
    N({
        target: "String",
        proto: !0
    }, {
        repeat: c
    });
    var wt = j,
        xt = c,
        Ct = g,
        St = Math.ceil,
        j = function(o) {
            return function(e, t, n) {
                var i = String(Ct(e)),
                    e = i.length,
                    n = void 0 === n ? " " : String(n),
                    t = wt(t);
                return t <= e || "" == n ? i : (e = t - e, (n = xt.call(n, St(e / n.length))).length > e && (n = n.slice(0, e)), o ? i + n : n + i)
            }
        },
        c = {
            start: j(!1),
            end: j(!0)
        },
        g = w("navigator", "userAgent") || "",
        j = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(g),
        Tt = c.start;
    N({
        target: "String",
        proto: !0,
        forced: j
    }, {
        padStart: function(e) {
            return Tt(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var At = c.end;

    function Et(e) {
        return (Et = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _t(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function Dt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function $t(e, t, n) {
        return t && Dt(e.prototype, t), n && Dt(e, n), e
    }

    function Ft(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && Mt(e, t)
    }

    function jt(e) {
        return (jt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Mt(e, t) {
        return (Mt = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Ot(e, t) {
        if (null == e) return {};
        var n, i = function(e, t) {
            if (null == e) return {};
            for (var n, i = {}, o = Object.keys(e), r = 0; r < o.length; r++) n = o[r], 0 <= t.indexOf(n) || (i[n] = e[n]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols)
            for (var o = Object.getOwnPropertySymbols(e), r = 0; r < o.length; r++) n = o[r], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
    }

    function Pt(e, t) {
        return !t || "object" != typeof t && "function" != typeof t ? function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function It(n) {
        var i = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var e, t = jt(n);
            return Pt(this, i ? (e = jt(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }

    function Lt(e, t) {
        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = jt(e)););
        return e
    }

    function Bt(e, t, n) {
        return (Bt = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
            e = Lt(e, t);
            if (e) {
                t = Object.getOwnPropertyDescriptor(e, t);
                return t.get ? t.get.call(n) : t.value
            }
        })(e, t, n || e)
    }

    function Rt(e, t, n, i) {
        return (Rt = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function(e, t, n, i) {
            var o, e = Lt(e, t);
            if (e) {
                if ((o = Object.getOwnPropertyDescriptor(e, t)).set) return o.set.call(i, n), !0;
                if (!o.writable) return !1
            }
            if (o = Object.getOwnPropertyDescriptor(i, t)) {
                if (!o.writable) return !1;
                o.value = n, Object.defineProperty(i, t, o)
            } else n = n, (t = t) in (i = i) ? Object.defineProperty(i, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : i[t] = n;
            return !0
        })(e, t, n, i)
    }

    function Nt(e, t, n, i, o) {
        if (!Rt(e, t, n, i || e) && o) throw new Error("failed to set property");
        return n
    }

    function Ht(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var i, o, r = [],
                s = !0,
                a = !1;
            try {
                for (n = n.call(e); !(s = (i = n.next()).done) && (r.push(i.value), !t || r.length !== t); s = !0);
            } catch (e) {
                a = !0, o = e
            } finally {
                try {
                    s || null == n.return || n.return()
                } finally {
                    if (a) throw o
                }
            }
            return r
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return zt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return zt(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function zt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }

    function qt(e) {
        return "string" == typeof e || e instanceof String
    }
    N({
        target: "String",
        proto: !0,
        forced: j
    }, {
        padEnd: function(e) {
            return At(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    }), N({
        global: !0
    }, {
        globalThis: i
    });
    var Wt = "NONE",
        Ut = "LEFT",
        Vt = "FORCE_LEFT",
        Yt = "RIGHT",
        Zt = "FORCE_RIGHT";

    function Xt(e) {
        return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
    }
    var Kt = function() {
            function o(e, t, n, i) {
                for (_t(this, o), this.value = e, this.cursorPos = t, this.oldValue = n, this.oldSelection = i; this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos);) --this.oldSelection.start
            }
            return $t(o, [{
                key: "startChangePos",
                get: function() {
                    return Math.min(this.cursorPos, this.oldSelection.start)
                }
            }, {
                key: "insertedCount",
                get: function() {
                    return this.cursorPos - this.startChangePos
                }
            }, {
                key: "inserted",
                get: function() {
                    return this.value.substr(this.startChangePos, this.insertedCount)
                }
            }, {
                key: "removedCount",
                get: function() {
                    return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0)
                }
            }, {
                key: "removed",
                get: function() {
                    return this.oldValue.substr(this.startChangePos, this.removedCount)
                }
            }, {
                key: "head",
                get: function() {
                    return this.value.substring(0, this.startChangePos)
                }
            }, {
                key: "tail",
                get: function() {
                    return this.value.substring(this.startChangePos + this.insertedCount)
                }
            }, {
                key: "removeDirection",
                get: function() {
                    return !this.removedCount || this.insertedCount ? Wt : this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? Yt : Ut
                }
            }]), o
        }(),
        Gt = function() {
            function t(e) {
                _t(this, t), Object.assign(this, {
                    inserted: "",
                    rawInserted: "",
                    skip: !1,
                    tailShift: 0
                }, e)
            }
            return $t(t, [{
                key: "aggregate",
                value: function(e) {
                    return this.rawInserted += e.rawInserted, this.skip = this.skip || e.skip, this.inserted += e.inserted, this.tailShift += e.tailShift, this
                }
            }, {
                key: "offset",
                get: function() {
                    return this.tailShift + this.inserted.length
                }
            }]), t
        }(),
        Jt = function() {
            function i() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = 2 < arguments.length ? arguments[2] : void 0;
                _t(this, i), this.value = e, this.from = t, this.stop = n
            }
            return $t(i, [{
                key: "toString",
                value: function() {
                    return this.value
                }
            }, {
                key: "extend",
                value: function(e) {
                    this.value += String(e)
                }
            }, {
                key: "appendTo",
                value: function(e) {
                    return e.append(this.toString(), {
                        tail: !0
                    }).aggregate(e._appendPlaceholder())
                }
            }, {
                key: "state",
                get: function() {
                    return {
                        value: this.value,
                        from: this.from,
                        stop: this.stop
                    }
                },
                set: function(e) {
                    Object.assign(this, e)
                }
            }, {
                key: "shiftBefore",
                value: function(e) {
                    if (this.from >= e || !this.value.length) return "";
                    e = this.value[0];
                    return this.value = this.value.slice(1), e
                }
            }]), i
        }();

    function Qt(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        return new Qt.InputMask(e, t)
    }
    var en = function() {
        function t(e) {
            _t(this, t), this._value = "", this._update(Object.assign({}, t.DEFAULTS, e)), this.isInitialized = !0
        }
        return $t(t, [{
            key: "updateOptions",
            value: function(e) {
                Object.keys(e).length && this.withValueRefresh(this._update.bind(this, e))
            }
        }, {
            key: "_update",
            value: function(e) {
                Object.assign(this, e)
            }
        }, {
            key: "state",
            get: function() {
                return {
                    _value: this.value
                }
            },
            set: function(e) {
                this._value = e._value
            }
        }, {
            key: "reset",
            value: function() {
                this._value = ""
            }
        }, {
            key: "value",
            get: function() {
                return this._value
            },
            set: function(e) {
                this.resolve(e)
            }
        }, {
            key: "resolve",
            value: function(e) {
                return this.reset(), this.append(e, {
                    input: !0
                }, ""), this.doCommit(), this.value
            }
        }, {
            key: "unmaskedValue",
            get: function() {
                return this.value
            },
            set: function(e) {
                this.reset(), this.append(e, {}, ""), this.doCommit()
            }
        }, {
            key: "typedValue",
            get: function() {
                return this.doParse(this.value)
            },
            set: function(e) {
                this.value = this.doFormat(e)
            }
        }, {
            key: "rawInputValue",
            get: function() {
                return this.extractInput(0, this.value.length, {
                    raw: !0
                })
            },
            set: function(e) {
                this.reset(), this.append(e, {
                    raw: !0
                }, ""), this.doCommit()
            }
        }, {
            key: "isComplete",
            get: function() {
                return !0
            }
        }, {
            key: "nearestInputPos",
            value: function(e, t) {
                return e
            }
        }, {
            key: "extractInput",
            value: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                return this.value.slice(e, t)
            }
        }, {
            key: "extractTail",
            value: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                return new Jt(this.extractInput(e, t), e)
            }
        }, {
            key: "appendTail",
            value: function(e) {
                return (e = qt(e) ? new Jt(String(e)) : e).appendTo(this)
            }
        }, {
            key: "_appendCharRaw",
            value: function(e) {
                return e ? (this._value += e, new Gt({
                    inserted: e,
                    rawInserted: e
                })) : new Gt
            }
        }, {
            key: "_appendChar",
            value: function(e) {
                var t, n, i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    o = 2 < arguments.length ? arguments[2] : void 0,
                    r = this.state,
                    s = this._appendCharRaw(this.doPrepare(e, i), i);
                return s.inserted && ((n = !1 !== this.doValidate(i)) && null != o && (e = this.state, this.overwrite && (t = o.state, o.shiftBefore(this.value.length)), (n = (i = this.appendTail(o)).rawInserted === o.toString()) && i.inserted && (this.state = e)), n || (s = new Gt, this.state = r, o && t && (o.state = t))), s
            }
        }, {
            key: "_appendPlaceholder",
            value: function() {
                return new Gt
            }
        }, {
            key: "append",
            value: function(e, t, n) {
                if (!qt(e)) throw new Error("value should be string");
                var i = new Gt,
                    o = qt(n) ? new Jt(String(n)) : n;
                t && t.tail && (t._beforeTailState = this.state);
                for (var r = 0; r < e.length; ++r) i.aggregate(this._appendChar(e[r], t, o));
                return null != o && (i.tailShift += this.appendTail(o).tailShift), i
            }
        }, {
            key: "remove",
            value: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                return this._value = this.value.slice(0, e) + this.value.slice(t), new Gt
            }
        }, {
            key: "withValueRefresh",
            value: function(e) {
                if (this._refreshing || !this.isInitialized) return e();
                this._refreshing = !0;
                var t = this.rawInputValue,
                    n = this.value,
                    e = e();
                return this.rawInputValue = t, this.value && this.value !== n && 0 === n.indexOf(this.value) && this.append(n.slice(this.value.length), {}, ""), delete this._refreshing, e
            }
        }, {
            key: "runIsolated",
            value: function(e) {
                if (this._isolated || !this.isInitialized) return e(this);
                this._isolated = !0;
                var t = this.state,
                    e = e(this);
                return this.state = t, delete this._isolated, e
            }
        }, {
            key: "doPrepare",
            value: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                return this.prepare ? this.prepare(e, this, t) : e
            }
        }, {
            key: "doValidate",
            value: function(e) {
                return (!this.validate || this.validate(this.value, this, e)) && (!this.parent || this.parent.doValidate(e))
            }
        }, {
            key: "doCommit",
            value: function() {
                this.commit && this.commit(this.value, this)
            }
        }, {
            key: "doFormat",
            value: function(e) {
                return this.format ? this.format(e, this) : e
            }
        }, {
            key: "doParse",
            value: function(e) {
                return this.parse ? this.parse(e, this) : e
            }
        }, {
            key: "splice",
            value: function(e, t, n, i) {
                t = e + t, t = this.extractTail(t), i = this.nearestInputPos(e, i);
                return new Gt({
                    tailShift: i - e
                }).aggregate(this.remove(i)).aggregate(this.append(n, {
                    input: !0
                }, t))
            }
        }]), t
    }();

    function tn(e) {
        if (null == e) throw new Error("mask property should be defined");
        return e instanceof RegExp ? Qt.MaskedRegExp : qt(e) ? Qt.MaskedPattern : e instanceof Date || e === Date ? Qt.MaskedDate : e instanceof Number || "number" == typeof e || e === Number ? Qt.MaskedNumber : Array.isArray(e) || e === Array ? Qt.MaskedDynamic : Qt.Masked && e.prototype instanceof Qt.Masked ? e : e instanceof Function ? Qt.MaskedFunction : e instanceof Qt.Masked ? e.constructor : (console.warn("Mask not found for mask", e), Qt.Masked)
    }

    function nn(e) {
        if (Qt.Masked && e instanceof Qt.Masked) return e;
        var t = (e = Object.assign({}, e)).mask;
        if (Qt.Masked && t instanceof Qt.Masked) return t;
        t = tn(t);
        if (!t) throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");
        return new t(e)
    }
    en.DEFAULTS = {
        format: function(e) {
            return e
        },
        parse: function(e) {
            return e
        }
    }, Qt.Masked = en, Qt.createMask = nn;
    var on = ["mask"],
        rn = {
            0: /\d/,
            a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
            "*": /./
        },
        sn = function() {
            function n(e) {
                _t(this, n);
                var t = e.mask,
                    e = Ot(e, on);
                this.masked = nn({
                    mask: t
                }), Object.assign(this, e)
            }
            return $t(n, [{
                key: "reset",
                value: function() {
                    this._isFilled = !1, this.masked.reset()
                }
            }, {
                key: "remove",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                    return 0 === e && 1 <= t ? (this._isFilled = !1, this.masked.remove(e, t)) : new Gt
                }
            }, {
                key: "value",
                get: function() {
                    return this.masked.value || (this._isFilled && !this.isOptional ? this.placeholderChar : "")
                }
            }, {
                key: "unmaskedValue",
                get: function() {
                    return this.masked.unmaskedValue
                }
            }, {
                key: "isComplete",
                get: function() {
                    return Boolean(this.masked.value) || this.isOptional
                }
            }, {
                key: "_appendChar",
                value: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this._isFilled) return new Gt;
                    var n = this.masked.state,
                        e = this.masked._appendChar(e, t);
                    return e.inserted && !1 === this.doValidate(t) && (e.inserted = e.rawInserted = "", this.masked.state = n), e.inserted || this.isOptional || this.lazy || t.input || (e.inserted = this.placeholderChar), e.skip = !e.inserted && !this.isOptional, this._isFilled = Boolean(e.inserted), e
                }
            }, {
                key: "append",
                value: function() {
                    var e;
                    return (e = this.masked).append.apply(e, arguments)
                }
            }, {
                key: "_appendPlaceholder",
                value: function() {
                    var e = new Gt;
                    return this._isFilled || this.isOptional || (this._isFilled = !0, e.inserted = this.placeholderChar), e
                }
            }, {
                key: "extractTail",
                value: function() {
                    var e;
                    return (e = this.masked).extractTail.apply(e, arguments)
                }
            }, {
                key: "appendTail",
                value: function() {
                    var e;
                    return (e = this.masked).appendTail.apply(e, arguments)
                }
            }, {
                key: "extractInput",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                        n = 2 < arguments.length ? arguments[2] : void 0;
                    return this.masked.extractInput(e, t, n)
                }
            }, {
                key: "nearestInputPos",
                value: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Wt,
                        n = this.value.length,
                        i = Math.min(Math.max(e, 0), n);
                    switch (t) {
                        case Ut:
                        case Vt:
                            return this.isComplete ? i : 0;
                        case Yt:
                        case Zt:
                            return this.isComplete ? i : n;
                        case Wt:
                        default:
                            return i
                    }
                }
            }, {
                key: "doValidate",
                value: function() {
                    var e;
                    return (e = this.masked).doValidate.apply(e, arguments) && (!this.parent || (e = this.parent).doValidate.apply(e, arguments))
                }
            }, {
                key: "doCommit",
                value: function() {
                    this.masked.doCommit()
                }
            }, {
                key: "state",
                get: function() {
                    return {
                        masked: this.masked.state,
                        _isFilled: this._isFilled
                    }
                },
                set: function(e) {
                    this.masked.state = e.masked, this._isFilled = e._isFilled
                }
            }]), n
        }(),
        an = function() {
            function t(e) {
                _t(this, t), Object.assign(this, e), this._value = ""
            }
            return $t(t, [{
                key: "value",
                get: function() {
                    return this._value
                }
            }, {
                key: "unmaskedValue",
                get: function() {
                    return this.isUnmasking ? this.value : ""
                }
            }, {
                key: "reset",
                value: function() {
                    this._isRawInput = !1, this._value = ""
                }
            }, {
                key: "remove",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this._value.length;
                    return this._value = this._value.slice(0, e) + this._value.slice(t), this._value || (this._isRawInput = !1), new Gt
                }
            }, {
                key: "nearestInputPos",
                value: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Wt,
                        n = this._value.length;
                    switch (t) {
                        case Ut:
                        case Vt:
                            return 0;
                        case Wt:
                        case Yt:
                        case Zt:
                        default:
                            return n
                    }
                }
            }, {
                key: "extractInput",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this._value.length;
                    return (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).raw && this._isRawInput && this._value.slice(e, t) || ""
                }
            }, {
                key: "isComplete",
                get: function() {
                    return !0
                }
            }, {
                key: "_appendChar",
                value: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        n = new Gt;
                    if (this._value) return n;
                    e = this.char === e[0] && (this.isUnmasking || t.input || t.raw) && !t.tail;
                    return e && (n.rawInserted = this.char), this._value = n.inserted = this.char, this._isRawInput = e && (t.raw || t.input), n
                }
            }, {
                key: "_appendPlaceholder",
                value: function() {
                    var e = new Gt;
                    return this._value || (this._value = e.inserted = this.char), e
                }
            }, {
                key: "extractTail",
                value: function() {
                    return 1 < arguments.length && void 0 !== arguments[1] || this.value.length, new Jt("")
                }
            }, {
                key: "appendTail",
                value: function(e) {
                    return (e = qt(e) ? new Jt(String(e)) : e).appendTo(this)
                }
            }, {
                key: "append",
                value: function(e, t, n) {
                    t = this._appendChar(e, t);
                    return null != n && (t.tailShift += this.appendTail(n).tailShift), t
                }
            }, {
                key: "doCommit",
                value: function() {}
            }, {
                key: "state",
                get: function() {
                    return {
                        _value: this._value,
                        _isRawInput: this._isRawInput
                    }
                },
                set: function(e) {
                    Object.assign(this, e)
                }
            }]), t
        }(),
        ln = ["chunks"],
        un = function() {
            function a() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                _t(this, a), this.chunks = e, this.from = t
            }
            return $t(a, [{
                key: "toString",
                value: function() {
                    return this.chunks.map(String).join("")
                }
            }, {
                key: "extend",
                value: function(e) {
                    if (String(e)) {
                        qt(e) && (e = new Jt(String(e)));
                        var t, n = this.chunks[this.chunks.length - 1],
                            i = n && (n.stop === e.stop || null == e.stop) && e.from === n.from + n.toString().length;
                        if (e instanceof Jt) i ? n.extend(e.toString()) : this.chunks.push(e);
                        else if (e instanceof a) {
                            if (null == e.stop)
                                for (; e.chunks.length && null == e.chunks[0].stop;)(t = e.chunks.shift()).from += e.from, this.extend(t);
                            e.toString() && (e.stop = e.blockIndex, this.chunks.push(e))
                        }
                    }
                }
            }, {
                key: "appendTo",
                value: function(e) {
                    if (!(e instanceof Qt.MaskedPattern)) return new Jt(this.toString()).appendTo(e);
                    for (var t = new Gt, n = 0; n < this.chunks.length && !t.skip; ++n) {
                        var i = this.chunks[n],
                            o = e._mapPosToBlock(e.value.length),
                            r = i.stop,
                            s = void 0;
                        null != r && (!o || o.index <= r) && ((i instanceof a || 0 <= e._stops.indexOf(r)) && t.aggregate(e._appendPlaceholder(r)), s = i instanceof a && e._blocks[r]), s ? ((s = s.appendTail(i)).skip = !1, t.aggregate(s), e._value += s.inserted, (s = i.toString().slice(s.rawInserted.length)) && t.aggregate(e.append(s, {
                            tail: !0
                        }))) : t.aggregate(e.append(i.toString(), {
                            tail: !0
                        }))
                    }
                    return t
                }
            }, {
                key: "state",
                get: function() {
                    return {
                        chunks: this.chunks.map(function(e) {
                            return e.state
                        }),
                        from: this.from,
                        stop: this.stop,
                        blockIndex: this.blockIndex
                    }
                },
                set: function(e) {
                    var t = e.chunks,
                        e = Ot(e, ln);
                    Object.assign(this, e), this.chunks = t.map(function(e) {
                        var t = new("chunks" in e ? a : Jt);
                        return t.state = e, t
                    })
                }
            }, {
                key: "shiftBefore",
                value: function(e) {
                    if (this.from >= e || !this.chunks.length) return "";
                    for (var t = e - this.from, n = 0; n < this.chunks.length;) {
                        var i = this.chunks[n],
                            o = i.shiftBefore(t);
                        if (i.toString()) {
                            if (!o) break;
                            ++n
                        } else this.chunks.splice(n, 1);
                        if (o) return o
                    }
                    return ""
                }
            }]), a
        }(),
        w = function() {
            Ft(n, en);
            var e = It(n);

            function n() {
                return _t(this, n), e.apply(this, arguments)
            }
            return $t(n, [{
                key: "_update",
                value: function(t) {
                    t.mask && (t.validate = function(e) {
                        return 0 <= e.search(t.mask)
                    }), Bt(jt(n.prototype), "_update", this).call(this, t)
                }
            }]), n
        }();
    Qt.MaskedRegExp = w;
    var cn = ["_blocks"],
        dn = function() {
            Ft(l, en);
            var t = It(l);

            function l() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                return _t(this, l), e.definitions = Object.assign({}, rn, e.definitions), t.call(this, Object.assign({}, l.DEFAULTS, e))
            }
            return $t(l, [{
                key: "_update",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    e.definitions = Object.assign({}, this.definitions, e.definitions), Bt(jt(l.prototype), "_update", this).call(this, e), this._rebuildMask()
                }
            }, {
                key: "_rebuildMask",
                value: function() {
                    var i = this,
                        e = this.definitions;
                    this._blocks = [], this._stops = [], this._maskedBlocks = {};
                    var o = this.mask;
                    if (o && e)
                        for (var t = !1, n = !1, r = 0; r < o.length; ++r) {
                            if (this.blocks)
                                if ("continue" === function() {
                                        var t = o.slice(r),
                                            e = Object.keys(i.blocks).filter(function(e) {
                                                return 0 === t.indexOf(e)
                                            });
                                        e.sort(function(e, t) {
                                            return t.length - e.length
                                        });
                                        var n = e[0];
                                        if (n) {
                                            e = nn(Object.assign({
                                                parent: i,
                                                lazy: i.lazy,
                                                placeholderChar: i.placeholderChar,
                                                overwrite: i.overwrite
                                            }, i.blocks[n]));
                                            return e && (i._blocks.push(e), i._maskedBlocks[n] || (i._maskedBlocks[n] = []), i._maskedBlocks[n].push(i._blocks.length - 1)), r += n.length - 1, "continue"
                                        }
                                    }()) continue;
                            var s = o[r],
                                a = s in e;
                            if (s !== l.STOP_CHAR)
                                if ("{" !== s && "}" !== s)
                                    if ("[" !== s && "]" !== s) {
                                        if (s === l.ESCAPE_CHAR) {
                                            if (!(s = o[++r])) break;
                                            a = !1
                                        }
                                        s = a ? new sn({
                                            parent: this,
                                            lazy: this.lazy,
                                            placeholderChar: this.placeholderChar,
                                            mask: e[s],
                                            isOptional: n
                                        }) : new an({
                                            char: s,
                                            isUnmasking: t
                                        });
                                        this._blocks.push(s)
                                    } else n = !n;
                            else t = !t;
                            else this._stops.push(this._blocks.length)
                        }
                }
            }, {
                key: "state",
                get: function() {
                    return Object.assign({}, Bt(jt(l.prototype), "state", this), {
                        _blocks: this._blocks.map(function(e) {
                            return e.state
                        })
                    })
                },
                set: function(e) {
                    var n = e._blocks,
                        e = Ot(e, cn);
                    this._blocks.forEach(function(e, t) {
                        return e.state = n[t]
                    }), Nt(jt(l.prototype), "state", e, this, !0)
                }
            }, {
                key: "reset",
                value: function() {
                    Bt(jt(l.prototype), "reset", this).call(this), this._blocks.forEach(function(e) {
                        return e.reset()
                    })
                }
            }, {
                key: "isComplete",
                get: function() {
                    return this._blocks.every(function(e) {
                        return e.isComplete
                    })
                }
            }, {
                key: "doCommit",
                value: function() {
                    this._blocks.forEach(function(e) {
                        return e.doCommit()
                    }), Bt(jt(l.prototype), "doCommit", this).call(this)
                }
            }, {
                key: "unmaskedValue",
                get: function() {
                    return this._blocks.reduce(function(e, t) {
                        return e + t.unmaskedValue
                    }, "")
                },
                set: function(e) {
                    Nt(jt(l.prototype), "unmaskedValue", e, this, !0)
                }
            }, {
                key: "value",
                get: function() {
                    return this._blocks.reduce(function(e, t) {
                        return e + t.value
                    }, "")
                },
                set: function(e) {
                    Nt(jt(l.prototype), "value", e, this, !0)
                }
            }, {
                key: "appendTail",
                value: function(e) {
                    return Bt(jt(l.prototype), "appendTail", this).call(this, e).aggregate(this._appendPlaceholder())
                }
            }, {
                key: "_appendCharRaw",
                value: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        n = this._mapPosToBlock(this.value.length),
                        i = new Gt;
                    if (!n) return i;
                    for (var o = n.index;; ++o) {
                        var r = this._blocks[o];
                        if (!r) break;
                        var s = r._appendChar(e, t),
                            r = s.skip;
                        if (i.aggregate(s), r || s.rawInserted) break
                    }
                    return i
                }
            }, {
                key: "extractTail",
                value: function() {
                    var o = this,
                        e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                        r = new un;
                    return e === t || this._forEachBlocksInRange(e, t, function(e, t, n, i) {
                        i = e.extractTail(n, i);
                        i.stop = o._findStopBefore(t), i.from = o._blockStartPos(t), i instanceof un && (i.blockIndex = t), r.extend(i)
                    }), r
                }
            }, {
                key: "extractInput",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                        o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                    if (e === t) return "";
                    var r = "";
                    return this._forEachBlocksInRange(e, t, function(e, t, n, i) {
                        r += e.extractInput(n, i, o)
                    }), r
                }
            }, {
                key: "_findStopBefore",
                value: function(e) {
                    for (var t, n = 0; n < this._stops.length; ++n) {
                        var i = this._stops[n];
                        if (!(i <= e)) break;
                        t = i
                    }
                    return t
                }
            }, {
                key: "_appendPlaceholder",
                value: function(n) {
                    var i = this,
                        o = new Gt;
                    if (this.lazy && null == n) return o;
                    var e = this._mapPosToBlock(this.value.length);
                    if (!e) return o;
                    var t = e.index,
                        e = null != n ? n : this._blocks.length;
                    return this._blocks.slice(t, e).forEach(function(e) {
                        var t;
                        e.lazy && null == n || (t = null != e._blocks ? [e._blocks.length] : [], t = e._appendPlaceholder.apply(e, t), i._value += t.inserted, o.aggregate(t))
                    }), o
                }
            }, {
                key: "_mapPosToBlock",
                value: function(e) {
                    for (var t = "", n = 0; n < this._blocks.length; ++n) {
                        var i = this._blocks[n],
                            o = t.length;
                        if (e <= (t += i.value).length) return {
                            index: n,
                            offset: e - o
                        }
                    }
                }
            }, {
                key: "_blockStartPos",
                value: function(e) {
                    return this._blocks.slice(0, e).reduce(function(e, t) {
                        return e + t.value.length
                    }, 0)
                }
            }, {
                key: "_forEachBlocksInRange",
                value: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                        n = 2 < arguments.length ? arguments[2] : void 0,
                        i = this._mapPosToBlock(e);
                    if (i) {
                        var o = this._mapPosToBlock(t),
                            r = o && i.index === o.index,
                            e = i.offset,
                            t = o && r ? o.offset : this._blocks[i.index].value.length;
                        if (n(this._blocks[i.index], i.index, e, t), o && !r) {
                            for (var s = i.index + 1; s < o.index; ++s) n(this._blocks[s], s, 0, this._blocks[s].value.length);
                            n(this._blocks[o.index], o.index, 0, o.offset)
                        }
                    }
                }
            }, {
                key: "remove",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                        o = Bt(jt(l.prototype), "remove", this).call(this, e, t);
                    return this._forEachBlocksInRange(e, t, function(e, t, n, i) {
                        o.aggregate(e.remove(n, i))
                    }), o
                }
            }, {
                key: "nearestInputPos",
                value: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Wt,
                        n = this._mapPosToBlock(e) || {
                            index: 0,
                            offset: 0
                        },
                        i = n.offset,
                        o = n.index,
                        r = this._blocks[o];
                    if (!r) return e;
                    n = i, r = (n = 0 !== n && n < r.value.length ? r.nearestInputPos(i, function(e) {
                        switch (e) {
                            case Ut:
                                return Vt;
                            case Yt:
                                return Zt;
                            default:
                                return e
                        }
                    }(t)) : n) === r.value.length;
                    if (!(0 === n) && !r) return this._blockStartPos(o) + n;
                    var s = r ? o + 1 : o;
                    if (t === Wt) {
                        if (0 < s) {
                            var a = s - 1,
                                l = this._blocks[a],
                                a = l.nearestInputPos(0, Wt);
                            if (!l.value.length || a !== l.value.length) return this._blockStartPos(s)
                        }
                        for (var u = s; u < this._blocks.length; ++u) {
                            var c = this._blocks[u],
                                d = c.nearestInputPos(0, Wt);
                            if (!c.value.length || d !== c.value.length) return this._blockStartPos(u) + d
                        }
                        for (var p = s - 1; 0 <= p; --p) {
                            var h = this._blocks[p],
                                f = h.nearestInputPos(0, Wt);
                            if (!h.value.length || f !== h.value.length) return this._blockStartPos(p) + h.value.length
                        }
                        return e
                    }
                    if (t === Ut || t === Vt) {
                        for (var m, v = s; v < this._blocks.length; ++v)
                            if (this._blocks[v].value) {
                                m = v;
                                break
                            } if (null != m) {
                            a = this._blocks[m], l = a.nearestInputPos(0, Yt);
                            if (0 === l && a.unmaskedValue.length) return this._blockStartPos(m) + l
                        }
                        for (var g, y = -1, b = s - 1; 0 <= b; --b) {
                            var k = this._blocks[b],
                                w = k.nearestInputPos(k.value.length, Vt);
                            if (k.value && 0 === w || (g = b), 0 !== w) {
                                if (w !== k.value.length) return this._blockStartPos(b) + w;
                                y = b;
                                break
                            }
                        }
                        if (t === Ut)
                            for (var x = y + 1; x <= Math.min(s, this._blocks.length - 1); ++x) {
                                var C = this._blocks[x],
                                    S = C.nearestInputPos(0, Wt),
                                    T = this._blockStartPos(x) + S;
                                if (e < T) break;
                                if (S !== C.value.length) return T
                            }
                        if (0 <= y) return this._blockStartPos(y) + this._blocks[y].value.length;
                        if (t === Vt || this.lazy && !this.extractInput() && ! function(e) {
                                if (!e) return !1;
                                var t = e.value;
                                return !t || e.nearestInputPos(0, Wt) !== t.length
                            }(this._blocks[s])) return 0;
                        if (null != g) return this._blockStartPos(g);
                        for (var A = s; A < this._blocks.length; ++A) {
                            var E = this._blocks[A],
                                _ = E.nearestInputPos(0, Wt);
                            if (!E.value.length || _ !== E.value.length) return this._blockStartPos(A) + _
                        }
                        return 0
                    }
                    if (t === Yt || t === Zt) {
                        for (var D, $, F = s; F < this._blocks.length; ++F) {
                            var j = this._blocks[F],
                                M = j.nearestInputPos(0, Wt);
                            if (M !== j.value.length) {
                                $ = this._blockStartPos(F) + M, D = F;
                                break
                            }
                        }
                        if (null != D && null != $) {
                            for (var O = D; O < this._blocks.length; ++O) {
                                var P = this._blocks[O],
                                    I = P.nearestInputPos(0, Zt);
                                if (I !== P.value.length) return this._blockStartPos(O) + I
                            }
                            return t === Zt ? this.value.length : $
                        }
                        for (var L = Math.min(s, this._blocks.length - 1); 0 <= L; --L) {
                            var B = this._blocks[L],
                                B = B.nearestInputPos(B.value.length, Ut);
                            if (0 !== B) {
                                B = this._blockStartPos(L) + B;
                                if (e <= B) return B;
                                break
                            }
                        }
                    }
                    return e
                }
            }, {
                key: "maskedBlock",
                value: function(e) {
                    return this.maskedBlocks(e)[0]
                }
            }, {
                key: "maskedBlocks",
                value: function(e) {
                    var t = this,
                        e = this._maskedBlocks[e];
                    return e ? e.map(function(e) {
                        return t._blocks[e]
                    }) : []
                }
            }]), l
        }();
    dn.DEFAULTS = {
        lazy: !0,
        placeholderChar: "_"
    }, dn.STOP_CHAR = "`", dn.ESCAPE_CHAR = "\\", dn.InputDefinition = sn, dn.FixedDefinition = an, Qt.MaskedPattern = dn;
    var pn = function() {
        Ft(c, dn);
        var e = It(c);

        function c() {
            return _t(this, c), e.apply(this, arguments)
        }
        return $t(c, [{
            key: "_matchFrom",
            get: function() {
                return this.maxLength - String(this.from).length
            }
        }, {
            key: "_update",
            value: function(e) {
                e = Object.assign({
                    to: this.to || 0,
                    from: this.from || 0
                }, e);
                var t = String(e.to).length;
                null != e.maxLength && (t = Math.max(t, e.maxLength)), e.maxLength = t;
                for (var n = String(e.from).padStart(t, "0"), i = String(e.to).padStart(t, "0"), o = 0; o < i.length && i[o] === n[o];) ++o;
                e.mask = i.slice(0, o).replace(/0/g, "\\0") + "0".repeat(t - o), Bt(jt(c.prototype), "_update", this).call(this, e)
            }
        }, {
            key: "isComplete",
            get: function() {
                return Bt(jt(c.prototype), "isComplete", this) && Boolean(this.value)
            }
        }, {
            key: "boundaries",
            value: function(e) {
                var t = "",
                    n = "",
                    i = Ht(e.match(/^(\D*)(\d*)(\D*)/) || [], 3),
                    e = i[1],
                    i = i[2];
                return i && (t = "0".repeat(e.length) + i, n = "9".repeat(e.length) + i), [t = t.padEnd(this.maxLength, "0"), n = n.padEnd(this.maxLength, "9")]
            }
        }, {
            key: "doPrepare",
            value: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                if (e = Bt(jt(c.prototype), "doPrepare", this).call(this, e, t).replace(/\D/g, ""), !this.autofix) return e;
                for (var n = String(this.from).padStart(this.maxLength, "0"), i = String(this.to).padStart(this.maxLength, "0"), o = this.value, r = "", s = 0; s < e.length; ++s) {
                    var a = o + r + e[s],
                        l = Ht(this.boundaries(a), 2),
                        u = l[0],
                        l = l[1];
                    Number(l) < this.from ? r += n[a.length - 1] : Number(u) > this.to ? r += i[a.length - 1] : r += e[s]
                }
                return r
            }
        }, {
            key: "doValidate",
            value: function() {
                var e = this.value;
                if (-1 === e.search(/[^0]/) && e.length <= this._matchFrom) return !0;
                for (var t = Ht(this.boundaries(e), 2), e = t[0], t = t[1], n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                return this.from <= Number(t) && Number(e) <= this.to && (e = Bt(jt(c.prototype), "doValidate", this)).call.apply(e, [this].concat(i))
            }
        }]), c
    }();
    Qt.MaskedRange = pn;
    var hn = function() {
        Ft(r, dn);
        var t = It(r);

        function r(e) {
            return _t(this, r), t.call(this, Object.assign({}, r.DEFAULTS, e))
        }
        return $t(r, [{
            key: "_update",
            value: function(t) {
                t.mask === Date && delete t.mask, t.pattern && (t.mask = t.pattern);
                var e = t.blocks;
                t.blocks = Object.assign({}, r.GET_DEFAULT_BLOCKS()), t.min && (t.blocks.Y.from = t.min.getFullYear()), t.max && (t.blocks.Y.to = t.max.getFullYear()), t.min && t.max && t.blocks.Y.from === t.blocks.Y.to && (t.blocks.m.from = t.min.getMonth() + 1, t.blocks.m.to = t.max.getMonth() + 1, t.blocks.m.from === t.blocks.m.to && (t.blocks.d.from = t.min.getDate(), t.blocks.d.to = t.max.getDate())), Object.assign(t.blocks, e), Object.keys(t.blocks).forEach(function(e) {
                    e = t.blocks[e];
                    "autofix" in e || (e.autofix = t.autofix)
                }), Bt(jt(r.prototype), "_update", this).call(this, t)
            }
        }, {
            key: "doValidate",
            value: function() {
                for (var e, t = this.date, n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                return (e = Bt(jt(r.prototype), "doValidate", this)).call.apply(e, [this].concat(i)) && (!this.isComplete || this.isDateExist(this.value) && null != t && (null == this.min || this.min <= t) && (null == this.max || t <= this.max))
            }
        }, {
            key: "isDateExist",
            value: function(e) {
                return 0 <= this.format(this.parse(e, this), this).indexOf(e)
            }
        }, {
            key: "date",
            get: function() {
                return this.typedValue
            },
            set: function(e) {
                this.typedValue = e
            }
        }, {
            key: "typedValue",
            get: function() {
                return this.isComplete ? Bt(jt(r.prototype), "typedValue", this) : null
            },
            set: function(e) {
                Nt(jt(r.prototype), "typedValue", e, this, !0)
            }
        }]), r
    }();
    hn.DEFAULTS = {
        pattern: "d{.}`m{.}`Y",
        format: function(e) {
            return [String(e.getDate()).padStart(2, "0"), String(e.getMonth() + 1).padStart(2, "0"), e.getFullYear()].join(".")
        },
        parse: function(e) {
            var t = Ht(e.split("."), 3),
                n = t[0],
                e = t[1],
                t = t[2];
            return new Date(t, e - 1, n)
        }
    }, hn.GET_DEFAULT_BLOCKS = function() {
        return {
            d: {
                mask: pn,
                from: 1,
                to: 31,
                maxLength: 2
            },
            m: {
                mask: pn,
                from: 1,
                to: 12,
                maxLength: 2
            },
            Y: {
                mask: pn,
                from: 1900,
                to: 9999
            }
        }
    }, Qt.MaskedDate = hn;
    var fn = function() {
        function e() {
            _t(this, e)
        }
        return $t(e, [{
            key: "selectionStart",
            get: function() {
                var e;
                try {
                    e = this._unsafeSelectionStart
                } catch (e) {}
                return null != e ? e : this.value.length
            }
        }, {
            key: "selectionEnd",
            get: function() {
                var e;
                try {
                    e = this._unsafeSelectionEnd
                } catch (e) {}
                return null != e ? e : this.value.length
            }
        }, {
            key: "select",
            value: function(e, t) {
                if (null != e && null != t && (e !== this.selectionStart || t !== this.selectionEnd)) try {
                    this._unsafeSelect(e, t)
                } catch (e) {}
            }
        }, {
            key: "_unsafeSelect",
            value: function(e, t) {}
        }, {
            key: "isActive",
            get: function() {
                return !1
            }
        }, {
            key: "bindEvents",
            value: function(e) {}
        }, {
            key: "unbindEvents",
            value: function() {}
        }]), e
    }();
    Qt.MaskElement = fn;
    var mn = function() {
        Ft(i, fn);
        var n = It(i);

        function i(e) {
            var t;
            return _t(this, i), (t = n.call(this)).input = e, t._handlers = {}, t
        }
        return $t(i, [{
            key: "rootElement",
            get: function() {
                return this.input.getRootNode ? this.input.getRootNode() : document
            }
        }, {
            key: "isActive",
            get: function() {
                return this.input === this.rootElement.activeElement
            }
        }, {
            key: "_unsafeSelectionStart",
            get: function() {
                return this.input.selectionStart
            }
        }, {
            key: "_unsafeSelectionEnd",
            get: function() {
                return this.input.selectionEnd
            }
        }, {
            key: "_unsafeSelect",
            value: function(e, t) {
                this.input.setSelectionRange(e, t)
            }
        }, {
            key: "value",
            get: function() {
                return this.input.value
            },
            set: function(e) {
                this.input.value = e
            }
        }, {
            key: "bindEvents",
            value: function(t) {
                var n = this;
                Object.keys(t).forEach(function(e) {
                    return n._toggleEventHandler(i.EVENTS_MAP[e], t[e])
                })
            }
        }, {
            key: "unbindEvents",
            value: function() {
                var t = this;
                Object.keys(this._handlers).forEach(function(e) {
                    return t._toggleEventHandler(e)
                })
            }
        }, {
            key: "_toggleEventHandler",
            value: function(e, t) {
                this._handlers[e] && (this.input.removeEventListener(e, this._handlers[e]), delete this._handlers[e]), t && (this.input.addEventListener(e, t), this._handlers[e] = t)
            }
        }]), i
    }();
    mn.EVENTS_MAP = {
        selectionChange: "keydown",
        input: "input",
        drop: "drop",
        click: "click",
        focus: "focus",
        commit: "blur"
    }, Qt.HTMLMaskElement = mn;
    var vn = function() {
        Ft(t, mn);
        var e = It(t);

        function t() {
            return _t(this, t), e.apply(this, arguments)
        }
        return $t(t, [{
            key: "_unsafeSelectionStart",
            get: function() {
                var e = this.rootElement,
                    e = e.getSelection && e.getSelection();
                return e && e.anchorOffset
            }
        }, {
            key: "_unsafeSelectionEnd",
            get: function() {
                var e = this.rootElement,
                    e = e.getSelection && e.getSelection();
                return e && this._unsafeSelectionStart + String(e).length
            }
        }, {
            key: "_unsafeSelect",
            value: function(e, t) {
                var n;
                this.rootElement.createRange && ((n = this.rootElement.createRange()).setStart(this.input.firstChild || this.input, e), n.setEnd(this.input.lastChild || this.input, t), (t = (t = this.rootElement).getSelection && t.getSelection()) && (t.removeAllRanges(), t.addRange(n)))
            }
        }, {
            key: "value",
            get: function() {
                return this.input.textContent
            },
            set: function(e) {
                this.input.textContent = e
            }
        }]), t
    }();
    Qt.HTMLContenteditableMaskElement = vn;
    var gn = ["mask"],
        g = function() {
            function n(e, t) {
                _t(this, n), this.el = e instanceof fn ? e : new(e.isContentEditable && "INPUT" !== e.tagName && "TEXTAREA" !== e.tagName ? vn : mn)(e), this.masked = nn(t), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange()
            }
            return $t(n, [{
                key: "mask",
                get: function() {
                    return this.masked.mask
                },
                set: function(e) {
                    var t;
                    this.maskEquals(e) || (e instanceof Qt.Masked || this.masked.constructor !== tn(e) ? ((t = nn({
                        mask: e
                    })).unmaskedValue = this.masked.unmaskedValue, this.masked = t) : this.masked.updateOptions({
                        mask: e
                    }))
                }
            }, {
                key: "maskEquals",
                value: function(e) {
                    return null == e || e === this.masked.mask || e === Date && this.masked instanceof hn
                }
            }, {
                key: "value",
                get: function() {
                    return this._value
                },
                set: function(e) {
                    this.masked.value = e, this.updateControl(), this.alignCursor()
                }
            }, {
                key: "unmaskedValue",
                get: function() {
                    return this._unmaskedValue
                },
                set: function(e) {
                    this.masked.unmaskedValue = e, this.updateControl(), this.alignCursor()
                }
            }, {
                key: "typedValue",
                get: function() {
                    return this.masked.typedValue
                },
                set: function(e) {
                    this.masked.typedValue = e, this.updateControl(), this.alignCursor()
                }
            }, {
                key: "_bindEvents",
                value: function() {
                    this.el.bindEvents({
                        selectionChange: this._saveSelection,
                        input: this._onInput,
                        drop: this._onDrop,
                        click: this._onClick,
                        focus: this._onFocus,
                        commit: this._onChange
                    })
                }
            }, {
                key: "_unbindEvents",
                value: function() {
                    this.el && this.el.unbindEvents()
                }
            }, {
                key: "_fireEvent",
                value: function(e) {
                    for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                    e = this._listeners[e];
                    e && e.forEach(function(e) {
                        return e.apply(void 0, n)
                    })
                }
            }, {
                key: "selectionStart",
                get: function() {
                    return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart
                }
            }, {
                key: "cursorPos",
                get: function() {
                    return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd
                },
                set: function(e) {
                    this.el && this.el.isActive && (this.el.select(e, e), this._saveSelection())
                }
            }, {
                key: "_saveSelection",
                value: function() {
                    this.value !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."), this._selection = {
                        start: this.selectionStart,
                        end: this.cursorPos
                    }
                }
            }, {
                key: "updateValue",
                value: function() {
                    this.masked.value = this.el.value, this._value = this.masked.value
                }
            }, {
                key: "updateControl",
                value: function() {
                    var e = this.masked.unmaskedValue,
                        t = this.masked.value,
                        n = this.unmaskedValue !== e || this.value !== t;
                    this._unmaskedValue = e, this._value = t, this.el.value !== t && (this.el.value = t), n && this._fireChangeEvents()
                }
            }, {
                key: "updateOptions",
                value: function(e) {
                    var t = e.mask,
                        n = Ot(e, gn),
                        i = !this.maskEquals(t),
                        e = ! function e(t, n) {
                            if (n === t) return 1;
                            var i = Array.isArray(n),
                                o = Array.isArray(t);
                            if (i && o) {
                                if (n.length != t.length) return;
                                for (s = 0; s < n.length; s++)
                                    if (!e(n[s], t[s])) return;
                                return 1
                            }
                            if (i == o) {
                                if (n && t && "object" === Et(n) && "object" === Et(t)) {
                                    if (i = n instanceof Date, o = t instanceof Date, i && o) return n.getTime() == t.getTime();
                                    if (i != o) return;
                                    if (i = n instanceof RegExp, o = t instanceof RegExp, i && o) return n.toString() == t.toString();
                                    if (i != o) return;
                                    for (var r = Object.keys(n), s = 0; s < r.length; s++)
                                        if (!Object.prototype.hasOwnProperty.call(t, r[s])) return;
                                    for (s = 0; s < r.length; s++)
                                        if (!e(t[r[s]], n[r[s]])) return;
                                    return 1
                                }
                                return n && t && "function" == typeof n && "function" == typeof t && n.toString() === t.toString()
                            }
                        }(this.masked, n);
                    i && (this.mask = t), e && this.masked.updateOptions(n), (i || e) && this.updateControl()
                }
            }, {
                key: "updateCursor",
                value: function(e) {
                    null != e && (this.cursorPos = e, this._delayUpdateCursor(e))
                }
            }, {
                key: "_delayUpdateCursor",
                value: function(e) {
                    var t = this;
                    this._abortUpdateCursor(), this._changingCursorPos = e, this._cursorChanging = setTimeout(function() {
                        t.el && (t.cursorPos = t._changingCursorPos, t._abortUpdateCursor())
                    }, 10)
                }
            }, {
                key: "_fireChangeEvents",
                value: function() {
                    this._fireEvent("accept", this._inputEvent), this.masked.isComplete && this._fireEvent("complete", this._inputEvent)
                }
            }, {
                key: "_abortUpdateCursor",
                value: function() {
                    this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging)
                }
            }, {
                key: "alignCursor",
                value: function() {
                    this.cursorPos = this.masked.nearestInputPos(this.cursorPos, Ut)
                }
            }, {
                key: "alignCursorFriendly",
                value: function() {
                    this.selectionStart === this.cursorPos && this.alignCursor()
                }
            }, {
                key: "on",
                value: function(e, t) {
                    return this._listeners[e] || (this._listeners[e] = []), this._listeners[e].push(t), this
                }
            }, {
                key: "off",
                value: function(e, t) {
                    if (!this._listeners[e]) return this;
                    if (!t) return delete this._listeners[e], this;
                    t = this._listeners[e].indexOf(t);
                    return 0 <= t && this._listeners[e].splice(t, 1), this
                }
            }, {
                key: "_onInput",
                value: function(e) {
                    if (this._inputEvent = e, this._abortUpdateCursor(), !this._selection) return this.updateValue();
                    var t = new Kt(this.el.value, this.cursorPos, this.value, this._selection),
                        n = this.masked.rawInputValue,
                        e = this.masked.splice(t.startChangePos, t.removed.length, t.inserted, t.removeDirection).offset,
                        n = n === this.masked.rawInputValue ? t.removeDirection : Wt,
                        n = this.masked.nearestInputPos(t.startChangePos + e, n);
                    this.updateControl(), this.updateCursor(n), delete this._inputEvent
                }
            }, {
                key: "_onChange",
                value: function() {
                    this.value !== this.el.value && this.updateValue(), this.masked.doCommit(), this.updateControl(), this._saveSelection()
                }
            }, {
                key: "_onDrop",
                value: function(e) {
                    e.preventDefault(), e.stopPropagation()
                }
            }, {
                key: "_onFocus",
                value: function(e) {
                    this.alignCursorFriendly()
                }
            }, {
                key: "_onClick",
                value: function(e) {
                    this.alignCursorFriendly()
                }
            }, {
                key: "destroy",
                value: function() {
                    this._unbindEvents(), this._listeners.length = 0, delete this.el
                }
            }]), n
        }();
    Qt.InputMask = g;
    c = function() {
        Ft(r, dn);
        var e = It(r);

        function r() {
            return _t(this, r), e.apply(this, arguments)
        }
        return $t(r, [{
            key: "_update",
            value: function(e) {
                e.enum && (e.mask = "*".repeat(e.enum[0].length)), Bt(jt(r.prototype), "_update", this).call(this, e)
            }
        }, {
            key: "doValidate",
            value: function() {
                for (var e, t = this, n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                return this.enum.some(function(e) {
                    return 0 <= e.indexOf(t.unmaskedValue)
                }) && (e = Bt(jt(r.prototype), "doValidate", this)).call.apply(e, [this].concat(i))
            }
        }]), r
    }();
    Qt.MaskedEnum = c;
    j = function() {
        Ft(r, en);
        var t = It(r);

        function r(e) {
            return _t(this, r), t.call(this, Object.assign({}, r.DEFAULTS, e))
        }
        return $t(r, [{
            key: "_update",
            value: function(e) {
                Bt(jt(r.prototype), "_update", this).call(this, e), this._updateRegExps()
            }
        }, {
            key: "_updateRegExps",
            value: function() {
                var e = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
                    t = (this.scale ? "(" + Xt(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
                this._numberRegExpInput = new RegExp(e + "(0|([1-9]+\\d*))?" + t), this._numberRegExp = new RegExp(e + "\\d*" + t), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(Xt).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(Xt(this.thousandsSeparator), "g")
            }
        }, {
            key: "_removeThousandsSeparators",
            value: function(e) {
                return e.replace(this._thousandsSeparatorRegExp, "")
            }
        }, {
            key: "_insertThousandsSeparators",
            value: function(e) {
                e = e.split(this.radix);
                return e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator), e.join(this.radix)
            }
        }, {
            key: "doPrepare",
            value: function(e) {
                for (var t, n = arguments.length, i = new Array(1 < n ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                return (t = Bt(jt(r.prototype), "doPrepare", this)).call.apply(t, [this, this._removeThousandsSeparators(e.replace(this._mapToRadixRegExp, this.radix))].concat(i))
            }
        }, {
            key: "_separatorsCount",
            value: function(e) {
                for (var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = 0, i = 0; i < e; ++i) this._value.indexOf(this.thousandsSeparator, i) === i && (++n, t && (e += this.thousandsSeparator.length));
                return n
            }
        }, {
            key: "_separatorsCountFromSlice",
            value: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this._value;
                return this._separatorsCount(this._removeThousandsSeparators(e).length, !0)
            }
        }, {
            key: "extractInput",
            value: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                    n = 2 < arguments.length ? arguments[2] : void 0,
                    i = Ht(this._adjustRangeWithSeparators(e, t), 2),
                    e = i[0],
                    t = i[1];
                return this._removeThousandsSeparators(Bt(jt(r.prototype), "extractInput", this).call(this, e, t, n))
            }
        }, {
            key: "_appendCharRaw",
            value: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                if (!this.thousandsSeparator) return Bt(jt(r.prototype), "_appendCharRaw", this).call(this, e, t);
                var n = (t.tail && t._beforeTailState ? t._beforeTailState : this)._value,
                    i = this._separatorsCountFromSlice(n);
                this._value = this._removeThousandsSeparators(this.value);
                n = Bt(jt(r.prototype), "_appendCharRaw", this).call(this, e, t);
                this._value = this._insertThousandsSeparators(this._value);
                t = (t.tail && t._beforeTailState ? t._beforeTailState : this)._value, t = this._separatorsCountFromSlice(t);
                return n.tailShift += (t - i) * this.thousandsSeparator.length, n.skip = !n.rawInserted && e === this.thousandsSeparator, n
            }
        }, {
            key: "_findSeparatorAround",
            value: function(e) {
                if (this.thousandsSeparator) {
                    var t = e - this.thousandsSeparator.length + 1,
                        t = this.value.indexOf(this.thousandsSeparator, t);
                    if (t <= e) return t
                }
                return -1
            }
        }, {
            key: "_adjustRangeWithSeparators",
            value: function(e, t) {
                var n = this._findSeparatorAround(e);
                0 <= n && (e = n);
                n = this._findSeparatorAround(t);
                return [e, t = 0 <= n ? n + this.thousandsSeparator.length : t]
            }
        }, {
            key: "remove",
            value: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                    n = Ht(this._adjustRangeWithSeparators(e, t), 2),
                    e = n[0],
                    t = n[1],
                    n = this.value.slice(0, e),
                    e = this.value.slice(t),
                    t = this._separatorsCount(n.length);
                this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(n + e));
                n = this._separatorsCountFromSlice(n);
                return new Gt({
                    tailShift: (n - t) * this.thousandsSeparator.length
                })
            }
        }, {
            key: "nearestInputPos",
            value: function(e, t) {
                if (!this.thousandsSeparator) return e;
                switch (t) {
                    case Wt:
                    case Ut:
                    case Vt:
                        var n = this._findSeparatorAround(e - 1);
                        if (0 <= n) {
                            var i = n + this.thousandsSeparator.length;
                            if (e < i || this.value.length <= i || t === Vt) return n
                        }
                        break;
                    case Yt:
                    case Zt:
                        n = this._findSeparatorAround(e);
                        if (0 <= n) return n + this.thousandsSeparator.length
                }
                return e
            }
        }, {
            key: "doValidate",
            value: function(e) {
                var t, n = (e.input ? this._numberRegExpInput : this._numberRegExp).test(this._removeThousandsSeparators(this.value));
                return n && (t = this.number, n = n && !isNaN(t) && (null == this.min || 0 <= this.min || this.min <= this.number) && (null == this.max || this.max <= 0 || this.number <= this.max)), n && Bt(jt(r.prototype), "doValidate", this).call(this, e)
            }
        }, {
            key: "doCommit",
            value: function() {
                var e, t;
                this.value && (t = e = this.number, null != this.min && (t = Math.max(t, this.min)), (t = null != this.max ? Math.min(t, this.max) : t) !== e && (this.unmaskedValue = String(t)), t = this.value, this.normalizeZeros && (t = this._normalizeZeros(t)), this.padFractionalZeros && (t = this._padFractionalZeros(t)), this._value = t), Bt(jt(r.prototype), "doCommit", this).call(this)
            }
        }, {
            key: "_normalizeZeros",
            value: function(e) {
                var t = this._removeThousandsSeparators(e).split(this.radix);
                return t[0] = t[0].replace(/^(\D*)(0*)(\d*)/, function(e, t, n, i) {
                    return t + i
                }), e.length && !/\d$/.test(t[0]) && (t[0] = t[0] + "0"), 1 < t.length && (t[1] = t[1].replace(/0*$/, ""), t[1].length || (t.length = 1)), this._insertThousandsSeparators(t.join(this.radix))
            }
        }, {
            key: "_padFractionalZeros",
            value: function(e) {
                if (!e) return e;
                e = e.split(this.radix);
                return e.length < 2 && e.push(""), e[1] = e[1].padEnd(this.scale, "0"), e.join(this.radix)
            }
        }, {
            key: "unmaskedValue",
            get: function() {
                return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, ".")
            },
            set: function(e) {
                Nt(jt(r.prototype), "unmaskedValue", e.replace(".", this.radix), this, !0)
            }
        }, {
            key: "typedValue",
            get: function() {
                return Number(this.unmaskedValue)
            },
            set: function(e) {
                Nt(jt(r.prototype), "unmaskedValue", String(e), this, !0)
            }
        }, {
            key: "number",
            get: function() {
                return this.typedValue
            },
            set: function(e) {
                this.typedValue = e
            }
        }, {
            key: "allowNegative",
            get: function() {
                return this.signed || null != this.min && this.min < 0 || null != this.max && this.max < 0
            }
        }]), r
    }();
    j.DEFAULTS = {
        radix: ",",
        thousandsSeparator: "",
        mapToRadix: ["."],
        scale: 2,
        signed: !1,
        normalizeZeros: !0,
        padFractionalZeros: !1
    }, Qt.MaskedNumber = j;
    N = function() {
        Ft(t, en);
        var e = It(t);

        function t() {
            return _t(this, t), e.apply(this, arguments)
        }
        return $t(t, [{
            key: "_update",
            value: function(e) {
                e.mask && (e.validate = e.mask), Bt(jt(t.prototype), "_update", this).call(this, e)
            }
        }]), t
    }();
    Qt.MaskedFunction = N;
    var yn = ["compiledMasks", "currentMaskRef", "currentMask"],
        i = function() {
            Ft(o, en);
            var t = It(o);

            function o(e) {
                return _t(this, o), (e = t.call(this, Object.assign({}, o.DEFAULTS, e))).currentMask = null, e
            }
            return $t(o, [{
                key: "_update",
                value: function(e) {
                    Bt(jt(o.prototype), "_update", this).call(this, e), "mask" in e && (this.compiledMasks = Array.isArray(e.mask) ? e.mask.map(nn) : [])
                }
            }, {
                key: "_appendCharRaw",
                value: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        n = this._applyDispatch(e, t);
                    return this.currentMask && n.aggregate(this.currentMask._appendChar(e, t)), n
                }
            }, {
                key: "_applyDispatch",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.tail && null != t._beforeTailState ? t._beforeTailState._value : this.value,
                        i = this.rawInputValue,
                        o = t.tail && null != t._beforeTailState ? t._beforeTailState._rawInputValue : i,
                        r = i.slice(o.length),
                        s = this.currentMask,
                        a = new Gt,
                        i = s && s.state;
                    return this.currentMask = this.doDispatch(e, Object.assign({}, t)), this.currentMask && (this.currentMask !== s ? (this.currentMask.reset(), o && (o = this.currentMask.append(o, {
                        raw: !0
                    }), a.tailShift = o.inserted.length - n.length), r && (a.tailShift += this.currentMask.append(r, {
                        raw: !0,
                        tail: !0
                    }).tailShift)) : this.currentMask.state = i), a
                }
            }, {
                key: "_appendPlaceholder",
                value: function() {
                    var e = this._applyDispatch.apply(this, arguments);
                    return this.currentMask && e.aggregate(this.currentMask._appendPlaceholder()), e
                }
            }, {
                key: "doDispatch",
                value: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.dispatch(e, this, t)
                }
            }, {
                key: "doValidate",
                value: function() {
                    for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    return (e = Bt(jt(o.prototype), "doValidate", this)).call.apply(e, [this].concat(n)) && (!this.currentMask || (e = this.currentMask).doValidate.apply(e, n))
                }
            }, {
                key: "reset",
                value: function() {
                    this.currentMask && this.currentMask.reset(), this.compiledMasks.forEach(function(e) {
                        return e.reset()
                    })
                }
            }, {
                key: "value",
                get: function() {
                    return this.currentMask ? this.currentMask.value : ""
                },
                set: function(e) {
                    Nt(jt(o.prototype), "value", e, this, !0)
                }
            }, {
                key: "unmaskedValue",
                get: function() {
                    return this.currentMask ? this.currentMask.unmaskedValue : ""
                },
                set: function(e) {
                    Nt(jt(o.prototype), "unmaskedValue", e, this, !0)
                }
            }, {
                key: "typedValue",
                get: function() {
                    return this.currentMask ? this.currentMask.typedValue : ""
                },
                set: function(e) {
                    var t = String(e);
                    this.currentMask && (this.currentMask.typedValue = e, t = this.currentMask.unmaskedValue), this.unmaskedValue = t
                }
            }, {
                key: "isComplete",
                get: function() {
                    return !!this.currentMask && this.currentMask.isComplete
                }
            }, {
                key: "remove",
                value: function() {
                    var e, t = new Gt;
                    return this.currentMask && t.aggregate((e = this.currentMask).remove.apply(e, arguments)).aggregate(this._applyDispatch()), t
                }
            }, {
                key: "state",
                get: function() {
                    return Object.assign({}, Bt(jt(o.prototype), "state", this), {
                        _rawInputValue: this.rawInputValue,
                        compiledMasks: this.compiledMasks.map(function(e) {
                            return e.state
                        }),
                        currentMaskRef: this.currentMask,
                        currentMask: this.currentMask && this.currentMask.state
                    })
                },
                set: function(e) {
                    var n = e.compiledMasks,
                        t = e.currentMaskRef,
                        i = e.currentMask,
                        e = Ot(e, yn);
                    this.compiledMasks.forEach(function(e, t) {
                        return e.state = n[t]
                    }), null != t && (this.currentMask = t, this.currentMask.state = i), Nt(jt(o.prototype), "state", e, this, !0)
                }
            }, {
                key: "extractInput",
                value: function() {
                    var e;
                    return this.currentMask ? (e = this.currentMask).extractInput.apply(e, arguments) : ""
                }
            }, {
                key: "extractTail",
                value: function() {
                    for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    return this.currentMask ? (e = this.currentMask).extractTail.apply(e, n) : (e = Bt(jt(o.prototype), "extractTail", this)).call.apply(e, [this].concat(n))
                }
            }, {
                key: "doCommit",
                value: function() {
                    this.currentMask && this.currentMask.doCommit(), Bt(jt(o.prototype), "doCommit", this).call(this)
                }
            }, {
                key: "nearestInputPos",
                value: function() {
                    for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    return this.currentMask ? (e = this.currentMask).nearestInputPos.apply(e, n) : (e = Bt(jt(o.prototype), "nearestInputPos", this)).call.apply(e, [this].concat(n))
                }
            }, {
                key: "overwrite",
                get: function() {
                    return this.currentMask ? this.currentMask.overwrite : Bt(jt(o.prototype), "overwrite", this)
                },
                set: function(e) {
                    console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings')
                }
            }]), o
        }();
    i.DEFAULTS = {
        dispatch: function(n, e, i) {
            if (e.compiledMasks.length) {
                var o = e.rawInputValue,
                    t = e.compiledMasks.map(function(e, t) {
                        return e.reset(), e.append(o, {
                            raw: !0
                        }), e.append(n, i), {
                            weight: e.rawInputValue.length,
                            index: t
                        }
                    });
                return t.sort(function(e, t) {
                    return t.weight - e.weight
                }), e.compiledMasks[t[0].index]
            }
        }
    }, Qt.MaskedDynamic = i;
    var bn = {
        MASKED: "value",
        UNMASKED: "unmaskedValue",
        TYPED: "typedValue"
    };

    function kn(e) {
        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : bn.MASKED,
            i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : bn.MASKED,
            o = nn(e);
        return function(t) {
            return o.runIsolated(function(e) {
                return e[n] = t, e[i]
            })
        }
    }

    function wn(e) {
        for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        return kn.apply(void 0, n)(e)
    }
    Qt.PIPE_TYPE = bn, Qt.createPipe = kn, Qt.pipe = wn;
    try {
        globalThis.IMask = Qt
    } catch (e) {}
    e.HTMLContenteditableMaskElement = vn, e.HTMLMaskElement = mn, e.InputMask = g, e.MaskElement = fn, e.Masked = en, e.MaskedDate = hn, e.MaskedDynamic = i, e.MaskedEnum = c, e.MaskedFunction = N, e.MaskedNumber = j, e.MaskedPattern = dn, e.MaskedRange = pn, e.MaskedRegExp = w, e.PIPE_TYPE = bn, e.createMask = nn, e.createPipe = kn, e.default = Qt, e.pipe = wn, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(u) {
    "use strict";
    var i, r = window.Slick || {};
    i = 0, (r = function(e, t) {
        var n = this;
        n.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: u(e),
            appendDots: u(e),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(e, t) {
                return u('<button type="button" />').text(t + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        }, n.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        }, u.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = u(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, e = u(e).data("slick") || {}, n.options = u.extend({}, n.defaults, t, e), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = u.proxy(n.autoPlay, n), n.autoPlayClear = u.proxy(n.autoPlayClear, n), n.autoPlayIterator = u.proxy(n.autoPlayIterator, n), n.changeSlide = u.proxy(n.changeSlide, n), n.clickHandler = u.proxy(n.clickHandler, n), n.selectHandler = u.proxy(n.selectHandler, n), n.setPosition = u.proxy(n.setPosition, n), n.swipeHandler = u.proxy(n.swipeHandler, n), n.dragHandler = u.proxy(n.dragHandler, n), n.keyHandler = u.proxy(n.keyHandler, n), n.instanceUid = i++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
    }).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, r.prototype.addSlide = r.prototype.slickAdd = function(e, t, n) {
        var i = this;
        if ("boolean" == typeof t) n = t, t = null;
        else if (t < 0 || t >= i.slideCount) return !1;
        i.unload(), "number" == typeof t ? 0 === t && 0 === i.$slides.length ? u(e).appendTo(i.$slideTrack) : n ? u(e).insertBefore(i.$slides.eq(t)) : u(e).insertAfter(i.$slides.eq(t)) : !0 === n ? u(e).prependTo(i.$slideTrack) : u(e).appendTo(i.$slideTrack), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slides.each(function(e, t) {
            u(t).attr("data-slick-index", e)
        }), i.$slidesCache = i.$slides, i.reinit()
    }, r.prototype.animateHeight = function() {
        var e, t = this;
        1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical && (e = t.$slides.eq(t.currentSlide).outerHeight(!0), t.$list.animate({
            height: e
        }, t.options.speed))
    }, r.prototype.animateSlide = function(e, t) {
        var n = {},
            i = this;
        i.animateHeight(), !0 === i.options.rtl && !1 === i.options.vertical && (e = -e), !1 === i.transformsEnabled ? !1 === i.options.vertical ? i.$slideTrack.animate({
            left: e
        }, i.options.speed, i.options.easing, t) : i.$slideTrack.animate({
            top: e
        }, i.options.speed, i.options.easing, t) : !1 === i.cssTransitions ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft), u({
            animStart: i.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: i.options.speed,
            easing: i.options.easing,
            step: function(e) {
                e = Math.ceil(e), !1 === i.options.vertical ? n[i.animType] = "translate(" + e + "px, 0px)" : n[i.animType] = "translate(0px," + e + "px)", i.$slideTrack.css(n)
            },
            complete: function() {
                t && t.call()
            }
        })) : (i.applyTransition(), e = Math.ceil(e), !1 === i.options.vertical ? n[i.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[i.animType] = "translate3d(0px," + e + "px, 0px)", i.$slideTrack.css(n), t && setTimeout(function() {
            i.disableTransition(), t.call()
        }, i.options.speed))
    }, r.prototype.getNavTarget = function() {
        var e = this.options.asNavFor;
        return e = e && null !== e ? u(e).not(this.$slider) : e
    }, r.prototype.asNavFor = function(t) {
        var e = this.getNavTarget();
        null !== e && "object" == typeof e && e.each(function() {
            var e = u(this).slick("getSlick");
            e.unslicked || e.slideHandler(t, !0)
        })
    }, r.prototype.applyTransition = function(e) {
        var t = this,
            n = {};
        !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, (!1 === t.options.fade ? t.$slideTrack : t.$slides.eq(e)).css(n)
    }, r.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, r.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, r.prototype.autoPlayIterator = function() {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, r.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = u(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = u(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, r.prototype.buildDots = function() {
        var e, t, n = this;
        if (!0 === n.options.dots) {
            for (n.$slider.addClass("slick-dotted"), t = u("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) t.append(u("<li />").append(n.options.customPaging.call(this, n, e)));
            n.$dots = t.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
        }
    }, r.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
            u(t).attr("data-slick-index", e).data("originalStyling", u(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? u('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), u("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, r.prototype.buildRows = function() {
        var e, t, n, i = this,
            o = document.createDocumentFragment(),
            r = i.$slider.children();
        if (1 < i.options.rows) {
            for (n = i.options.slidesPerRow * i.options.rows, t = Math.ceil(r.length / n), e = 0; e < t; e++) {
                for (var s = document.createElement("div"), a = 0; a < i.options.rows; a++) {
                    for (var l = document.createElement("div"), u = 0; u < i.options.slidesPerRow; u++) {
                        var c = e * n + (a * i.options.slidesPerRow + u);
                        r.get(c) && l.appendChild(r.get(c))
                    }
                    s.appendChild(l)
                }
                o.appendChild(s)
            }
            i.$slider.empty().append(o), i.$slider.children().children().children().css({
                width: 100 / i.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, r.prototype.checkResponsive = function(e, t) {
        var n, i, o, r = this,
            s = !1,
            a = r.$slider.width(),
            l = window.innerWidth || u(window).width();
        if ("window" === r.respondTo ? o = l : "slider" === r.respondTo ? o = a : "min" === r.respondTo && (o = Math.min(l, a)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            for (n in i = null, r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[n] && (i = r.breakpoints[n]) : o > r.breakpoints[n] && (i = r.breakpoints[n]));
            null !== i ? null !== r.activeBreakpoint && i === r.activeBreakpoint && !t || (r.activeBreakpoint = i, "unslick" === r.breakpointSettings[i] ? r.unslick(i) : (r.options = u.extend({}, r.originalSettings, r.breakpointSettings[i]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), s = i) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), s = i), e || !1 === s || r.$slider.trigger("breakpoint", [r, s])
        }
    }, r.prototype.changeSlide = function(e, t) {
        var n, i = this,
            o = u(e.currentTarget);
        switch (o.is("a") && e.preventDefault(), o.is("li") || (o = o.closest("li")), n = i.slideCount % i.options.slidesToScroll != 0 ? 0 : (i.slideCount - i.currentSlide) % i.options.slidesToScroll, e.data.message) {
            case "previous":
                r = 0 == n ? i.options.slidesToScroll : i.options.slidesToShow - n, i.slideCount > i.options.slidesToShow && i.slideHandler(i.currentSlide - r, !1, t);
                break;
            case "next":
                r = 0 == n ? i.options.slidesToScroll : n, i.slideCount > i.options.slidesToShow && i.slideHandler(i.currentSlide + r, !1, t);
                break;
            case "index":
                var r = 0 === e.data.index ? 0 : e.data.index || o.index() * i.options.slidesToScroll;
                i.slideHandler(i.checkNavigable(r), !1, t), o.children().trigger("focus");
                break;
            default:
                return
        }
    }, r.prototype.checkNavigable = function(e) {
        var t = this.getNavigableIndexes(),
            n = 0;
        if (e > t[t.length - 1]) e = t[t.length - 1];
        else
            for (var i in t) {
                if (e < t[i]) {
                    e = n;
                    break
                }
                n = t[i]
            }
        return e
    }, r.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (u("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", u.proxy(e.interrupt, e, !0)).off("mouseleave.slick", u.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), u(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && u(e.$slideTrack).children().off("click.slick", e.selectHandler), u(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), u(window).off("resize.slick.slick-" + e.instanceUid, e.resize), u("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), u(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, r.prototype.cleanUpSlideEvents = function() {
        this.$list.off("mouseenter.slick", u.proxy(this.interrupt, this, !0)), this.$list.off("mouseleave.slick", u.proxy(this.interrupt, this, !1))
    }, r.prototype.cleanUpRows = function() {
        var e;
        1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
    }, r.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, r.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), u(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            u(this).attr("style", u(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, r.prototype.disableTransition = function(e) {
        var t = {};
        t[this.transitionType] = "", (!1 === this.options.fade ? this.$slideTrack : this.$slides.eq(e)).css(t)
    }, r.prototype.fadeSlide = function(e, t) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(e).css({
            zIndex: n.options.zIndex
        }), n.$slides.eq(e).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }), t && setTimeout(function() {
            n.disableTransition(e), t.call()
        }, n.options.speed))
    }, r.prototype.fadeSlideOut = function(e) {
        !1 === this.cssTransitions ? this.$slides.eq(e).animate({
            opacity: 0,
            zIndex: this.options.zIndex - 2
        }, this.options.speed, this.options.easing) : (this.applyTransition(e), this.$slides.eq(e).css({
            opacity: 0,
            zIndex: this.options.zIndex - 2
        }))
    }, r.prototype.filterSlides = r.prototype.slickFilter = function(e) {
        null !== e && (this.$slidesCache = this.$slides, this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.filter(e).appendTo(this.$slideTrack), this.reinit())
    }, r.prototype.focusHandler = function() {
        var n = this;
        n.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(e) {
            e.stopImmediatePropagation();
            var t = u(this);
            setTimeout(function() {
                n.options.pauseOnFocus && (n.focussed = t.is(":focus"), n.autoPlay())
            }, 0)
        })
    }, r.prototype.getCurrent = r.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, r.prototype.getDotCount = function() {
        var e = this,
            t = 0,
            n = 0,
            i = 0;
        if (!0 === e.options.infinite)
            if (e.slideCount <= e.options.slidesToShow) ++i;
            else
                for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode) i = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1
    }, r.prototype.getLeft = function(e) {
        var t, n, i = this,
            o = 0;
        return i.slideOffset = 0, t = i.$slides.first().outerHeight(!0), !0 === i.options.infinite ? (i.slideCount > i.options.slidesToShow && (i.slideOffset = i.slideWidth * i.options.slidesToShow * -1, n = -1, !0 === i.options.vertical && !0 === i.options.centerMode && (2 === i.options.slidesToShow ? n = -1.5 : 1 === i.options.slidesToShow && (n = -2)), o = t * i.options.slidesToShow * n), i.slideCount % i.options.slidesToScroll != 0 && e + i.options.slidesToScroll > i.slideCount && i.slideCount > i.options.slidesToShow && (o = e > i.slideCount ? (i.slideOffset = (i.options.slidesToShow - (e - i.slideCount)) * i.slideWidth * -1, (i.options.slidesToShow - (e - i.slideCount)) * t * -1) : (i.slideOffset = i.slideCount % i.options.slidesToScroll * i.slideWidth * -1, i.slideCount % i.options.slidesToScroll * t * -1))) : e + i.options.slidesToShow > i.slideCount && (i.slideOffset = (e + i.options.slidesToShow - i.slideCount) * i.slideWidth, o = (e + i.options.slidesToShow - i.slideCount) * t), i.slideCount <= i.options.slidesToShow && (o = i.slideOffset = 0), !0 === i.options.centerMode && i.slideCount <= i.options.slidesToShow ? i.slideOffset = i.slideWidth * Math.floor(i.options.slidesToShow) / 2 - i.slideWidth * i.slideCount / 2 : !0 === i.options.centerMode && !0 === i.options.infinite ? i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2) - i.slideWidth : !0 === i.options.centerMode && (i.slideOffset = 0, i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2)), t = !1 === i.options.vertical ? e * i.slideWidth * -1 + i.slideOffset : e * t * -1 + o, !0 === i.options.variableWidth && (o = i.slideCount <= i.options.slidesToShow || !1 === i.options.infinite ? i.$slideTrack.children(".slick-slide").eq(e) : i.$slideTrack.children(".slick-slide").eq(e + i.options.slidesToShow), t = !0 === i.options.rtl ? o[0] ? -1 * (i.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === i.options.centerMode && (o = i.slideCount <= i.options.slidesToShow || !1 === i.options.infinite ? i.$slideTrack.children(".slick-slide").eq(e) : i.$slideTrack.children(".slick-slide").eq(e + i.options.slidesToShow + 1), t = !0 === i.options.rtl ? o[0] ? -1 * (i.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, t += (i.$list.width() - o.outerWidth()) / 2)), t
    }, r.prototype.getOption = r.prototype.slickGetOption = function(e) {
        return this.options[e]
    }, r.prototype.getNavigableIndexes = function() {
        for (var e = this, t = 0, n = 0, i = [], o = !1 === e.options.infinite ? e.slideCount : (t = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, 2 * e.slideCount); t < o;) i.push(t), t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return i
    }, r.prototype.getSlick = function() {
        return this
    }, r.prototype.getSlideCount = function() {
        var n, i = this,
            o = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0;
        return !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function(e, t) {
            if (t.offsetLeft - o + u(t).outerWidth() / 2 > -1 * i.swipeLeft) return n = t, !1
        }), Math.abs(u(n).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
    }, r.prototype.goTo = r.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, r.prototype.init = function(e) {
        var t = this;
        u(t.$slider).hasClass("slick-initialized") || (u(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, r.prototype.initADA = function() {
        var n = this,
            i = Math.ceil(n.slideCount / n.options.slidesToShow),
            o = n.getNavigableIndexes().filter(function(e) {
                return 0 <= e && e < n.slideCount
            });
        n.$slides.add(n.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== n.$dots && (n.$slides.not(n.$slideTrack.find(".slick-cloned")).each(function(e) {
            var t = o.indexOf(e);
            u(this).attr({
                role: "tabpanel",
                id: "slick-slide" + n.instanceUid + e,
                tabindex: -1
            }), -1 !== t && u(this).attr({
                "aria-describedby": "slick-slide-control" + n.instanceUid + t
            })
        }), n.$dots.attr("role", "tablist").find("li").each(function(e) {
            var t = o[e];
            u(this).attr({
                role: "presentation"
            }), u(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + n.instanceUid + e,
                "aria-controls": "slick-slide" + n.instanceUid + t,
                "aria-label": e + 1 + " of " + i,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(n.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var e = n.currentSlide, t = e + n.options.slidesToShow; e < t; e++) n.$slides.eq(e).attr("tabindex", 0);
        n.activateADA()
    }, r.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
    }, r.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (u("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && u("li", e.$dots).on("mouseenter.slick", u.proxy(e.interrupt, e, !0)).on("mouseleave.slick", u.proxy(e.interrupt, e, !1))
    }, r.prototype.initSlideEvents = function() {
        this.options.pauseOnHover && (this.$list.on("mouseenter.slick", u.proxy(this.interrupt, this, !0)), this.$list.on("mouseleave.slick", u.proxy(this.interrupt, this, !1)))
    }, r.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), u(document).on(e.visibilityChange, u.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && u(e.$slideTrack).children().on("click.slick", e.selectHandler), u(window).on("orientationchange.slick.slick-" + e.instanceUid, u.proxy(e.orientationChange, e)), u(window).on("resize.slick.slick-" + e.instanceUid, u.proxy(e.resize, e)), u("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), u(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), u(e.setPosition)
    }, r.prototype.initUI = function() {
        !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.show(), this.$nextArrow.show()), !0 === this.options.dots && this.slideCount > this.options.slidesToShow && this.$dots.show()
    }, r.prototype.keyHandler = function(e) {
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === this.options.accessibility ? this.changeSlide({
            data: {
                message: !0 === this.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === this.options.accessibility && this.changeSlide({
            data: {
                message: !0 === this.options.rtl ? "previous" : "next"
            }
        }))
    }, r.prototype.lazyLoad = function() {
        function e(e) {
            u("img[data-lazy]", e).each(function() {
                var e = u(this),
                    t = u(this).attr("data-lazy"),
                    n = u(this).attr("data-srcset"),
                    i = u(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                    o = document.createElement("img");
                o.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        n && (e.attr("srcset", n), i && e.attr("sizes", i)), e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), r.$slider.trigger("lazyLoaded", [r, e, t])
                    })
                }, o.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, t])
                }, o.src = t
            })
        }
        var t, n, i, r = this;
        if (!0 === r.options.centerMode ? i = !0 === r.options.infinite ? (n = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (n = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (n = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, i = Math.ceil(n + r.options.slidesToShow), !0 === r.options.fade && (0 < n && n--, i <= r.slideCount && i++)), t = r.$slider.find(".slick-slide").slice(n, i), "anticipated" === r.options.lazyLoad)
            for (var o = n - 1, s = i, a = r.$slider.find(".slick-slide"), l = 0; l < r.options.slidesToScroll; l++) o < 0 && (o = r.slideCount - 1), t = (t = t.add(a.eq(o))).add(a.eq(s)), o--, s++;
        e(t), r.slideCount <= r.options.slidesToShow ? e(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? e(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && e(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
    }, r.prototype.loadSlider = function() {
        this.setPosition(), this.$slideTrack.css({
            opacity: 1
        }), this.$slider.removeClass("slick-loading"), this.initUI(), "progressive" === this.options.lazyLoad && this.progressiveLazyLoad()
    }, r.prototype.next = r.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, r.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition()
    }, r.prototype.pause = r.prototype.slickPause = function() {
        this.autoPlayClear(), this.paused = !0
    }, r.prototype.play = r.prototype.slickPlay = function() {
        this.autoPlay(), this.options.autoplay = !0, this.paused = !1, this.focussed = !1, this.interrupted = !1
    }, r.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && u(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }, r.prototype.prev = r.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, r.prototype.preventDefault = function(e) {
        e.preventDefault()
    }, r.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, n, i, o, r = this,
            s = u("img[data-lazy]", r.$slider);
        s.length ? (t = s.first(), n = t.attr("data-lazy"), i = t.attr("data-srcset"), o = t.attr("data-sizes") || r.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function() {
            i && (t.attr("srcset", i), o && t.attr("sizes", o)), t.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, t, n]), r.progressiveLazyLoad()
        }, s.onerror = function() {
            e < 3 ? setTimeout(function() {
                r.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, n]), r.progressiveLazyLoad())
        }, s.src = n) : r.$slider.trigger("allImagesLoaded", [r])
    }, r.prototype.refresh = function(e) {
        var t = this,
            n = t.slideCount - t.options.slidesToShow;
        !t.options.infinite && t.currentSlide > n && (t.currentSlide = n), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), n = t.currentSlide, t.destroy(!0), u.extend(t, t.initials, {
            currentSlide: n
        }), t.init(), e || t.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    }, r.prototype.registerBreakpoints = function() {
        var e, t, n, i = this,
            o = i.options.responsive || null;
        if ("array" === u.type(o) && o.length) {
            for (e in i.respondTo = i.options.respondTo || "window", o)
                if (n = i.breakpoints.length - 1, o.hasOwnProperty(e)) {
                    for (t = o[e].breakpoint; 0 <= n;) i.breakpoints[n] && i.breakpoints[n] === t && i.breakpoints.splice(n, 1), n--;
                    i.breakpoints.push(t), i.breakpointSettings[t] = o[e].settings
                } i.breakpoints.sort(function(e, t) {
                return i.options.mobileFirst ? e - t : t - e
            })
        }
    }, r.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && u(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, r.prototype.resize = function() {
        var e = this;
        u(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = u(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, r.prototype.removeSlide = r.prototype.slickRemove = function(e, t, n) {
        var i = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
        i.unload(), (!0 === n ? i.$slideTrack.children() : i.$slideTrack.children(this.options.slide).eq(e)).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
    }, r.prototype.setCSS = function(e) {
        var t, n, i = this,
            o = {};
        !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled || (!(o = {}) === i.cssTransitions ? o[i.animType] = "translate(" + t + ", " + n + ")" : o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"), i.$slideTrack.css(o)
    }, r.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, r.prototype.setFade = function() {
        var n, i = this;
        i.$slides.each(function(e, t) {
            n = i.slideWidth * e * -1, !0 === i.options.rtl ? u(t).css({
                position: "relative",
                right: n,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : u(t).css({
                position: "relative",
                left: n,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }), i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }, r.prototype.setHeight = function() {
        var e;
        1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical && (e = this.$slides.eq(this.currentSlide).outerHeight(!0), this.$list.css("height", e))
    }, r.prototype.setOption = r.prototype.slickSetOption = function() {
        var e, t, n, i, o, r = this,
            s = !1;
        if ("object" === u.type(arguments[0]) ? (n = arguments[0], s = arguments[1], o = "multiple") : "string" === u.type(arguments[0]) && (n = arguments[0], i = arguments[1], s = arguments[2], "responsive" === arguments[0] && "array" === u.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) r.options[n] = i;
        else if ("multiple" === o) u.each(n, function(e, t) {
            r.options[e] = t
        });
        else if ("responsive" === o)
            for (t in i)
                if ("array" !== u.type(r.options.responsive)) r.options.responsive = [i[t]];
                else {
                    for (e = r.options.responsive.length - 1; 0 <= e;) r.options.responsive[e].breakpoint === i[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                    r.options.responsive.push(i[t])
                } s && (r.unload(), r.reinit())
    }, r.prototype.setPosition = function() {
        this.setDimensions(), this.setHeight(), !1 === this.options.fade ? this.setCSS(this.getLeft(this.currentSlide)) : this.setFade(), this.$slider.trigger("setPosition", [this])
    }, r.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, r.prototype.setSlideClasses = function(e) {
        var t, n, i, o = this,
            r = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
        o.$slides.eq(e).addClass("slick-current"), !0 === o.options.centerMode ? (n = o.options.slidesToShow % 2 == 0 ? 1 : 0, i = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (i <= e && e <= o.slideCount - 1 - i ? o.$slides.slice(e - i + n, e + i + 1).addClass("slick-active").attr("aria-hidden", "false") : (t = o.options.slidesToShow + e, r.slice(t - i + 1 + n, t + i + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? r.eq(r.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && r.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(e).addClass("slick-center")) : 0 <= e && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : r.length <= o.options.slidesToShow ? r.addClass("slick-active").attr("aria-hidden", "false") : (i = o.slideCount % o.options.slidesToShow, t = !0 === o.options.infinite ? o.options.slidesToShow + e : e, (o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? r.slice(t - (o.options.slidesToShow - i), t + i) : r.slice(t, t + o.options.slidesToShow)).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
    }, r.prototype.setupInfinite = function() {
        var e, t, n, i = this;
        if (!0 === i.options.fade && (i.options.centerMode = !1), !0 === i.options.infinite && !1 === i.options.fade && (t = null, i.slideCount > i.options.slidesToShow)) {
            for (n = !0 === i.options.centerMode ? i.options.slidesToShow + 1 : i.options.slidesToShow, e = i.slideCount; e > i.slideCount - n; --e) t = e - 1, u(i.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < n + i.slideCount; e += 1) t = e, u(i.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
            i.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                u(this).attr("id", "")
            })
        }
    }, r.prototype.interrupt = function(e) {
        e || this.autoPlay(), this.interrupted = e
    }, r.prototype.selectHandler = function(e) {
        e = u(e.target).is(".slick-slide") ? u(e.target) : u(e.target).parents(".slick-slide"), e = (e = parseInt(e.attr("data-slick-index"))) || 0;
        this.slideCount <= this.options.slidesToShow ? this.slideHandler(e, !1, !0) : this.slideHandler(e)
    }, r.prototype.slideHandler = function(e, t, n) {
        var i, o, r, s, a = this;
        if (t = t || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === e))
            if (!1 === t && a.asNavFor(e), i = e, s = a.getLeft(i), t = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? t : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (e < 0 || e > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (i = a.currentSlide, !0 !== n ? a.animateSlide(t, function() {
                a.postSlide(i)
            }) : a.postSlide(i));
            else if (!1 === a.options.infinite && !0 === a.options.centerMode && (e < 0 || e > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (i = a.currentSlide, !0 !== n ? a.animateSlide(t, function() {
            a.postSlide(i)
        }) : a.postSlide(i));
        else {
            if (a.options.autoplay && clearInterval(a.autoPlayTimer), o = i < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + i : i >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : i - a.slideCount : i, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, o]), t = a.currentSlide, a.currentSlide = o, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (r = (r = a.getNavTarget()).slick("getSlick")).slideCount <= r.options.slidesToShow && r.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== n ? (a.fadeSlideOut(t), a.fadeSlide(o, function() {
                a.postSlide(o)
            })) : a.postSlide(o), void a.animateHeight();
            !0 !== n ? a.animateSlide(s, function() {
                a.postSlide(o)
            }) : a.postSlide(o)
        }
    }, r.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, r.prototype.swipeDirection = function() {
        var e = this.touchObject.startX - this.touchObject.curX,
            t = this.touchObject.startY - this.touchObject.curY,
            e = Math.atan2(t, e);
        return (e = (e = Math.round(180 * e / Math.PI)) < 0 ? 360 - Math.abs(e) : e) <= 45 && 0 <= e || e <= 360 && 315 <= e ? !1 === this.options.rtl ? "left" : "right" : 135 <= e && e <= 225 ? !1 === this.options.rtl ? "right" : "left" : !0 === this.options.verticalSwiping ? 35 <= e && e <= 135 ? "down" : "up" : "vertical"
    }, r.prototype.swipeEnd = function(e) {
        var t, n, i = this;
        if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1;
        if (i.interrupted = !1, i.shouldClick = !(10 < i.touchObject.swipeLength), void 0 === i.touchObject.curX) return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (n = i.swipeDirection()) {
                case "left":
                case "down":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
            }
            "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
    }, r.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, r.prototype.swipeMove = function(e) {
        var t, n, i = this,
            o = void 0 !== e.originalEvent ? e.originalEvent.touches : null;
        return !(!i.dragging || i.scrolling || o && 1 !== o.length) && (t = i.getLeft(i.currentSlide), i.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX, i.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY, i.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(i.touchObject.curX - i.touchObject.startX, 2))), n = Math.round(Math.sqrt(Math.pow(i.touchObject.curY - i.touchObject.startY, 2))), !i.options.verticalSwiping && !i.swiping && 4 < n ? !(i.scrolling = !0) : (!0 === i.options.verticalSwiping && (i.touchObject.swipeLength = n), o = i.swipeDirection(), void 0 !== e.originalEvent && 4 < i.touchObject.swipeLength && (i.swiping = !0, e.preventDefault()), n = (!1 === i.options.rtl ? 1 : -1) * (i.touchObject.curX > i.touchObject.startX ? 1 : -1), !0 === i.options.verticalSwiping && (n = i.touchObject.curY > i.touchObject.startY ? 1 : -1), e = i.touchObject.swipeLength, (i.touchObject.edgeHit = !1) === i.options.infinite && (0 === i.currentSlide && "right" === o || i.currentSlide >= i.getDotCount() && "left" === o) && (e = i.touchObject.swipeLength * i.options.edgeFriction, i.touchObject.edgeHit = !0), !1 === i.options.vertical ? i.swipeLeft = t + e * n : i.swipeLeft = t + e * (i.$list.height() / i.listWidth) * n, !0 === i.options.verticalSwiping && (i.swipeLeft = t + e * n), !0 !== i.options.fade && !1 !== i.options.touchMove && (!0 === i.animating ? (i.swipeLeft = null, !1) : void i.setCSS(i.swipeLeft))))
    }, r.prototype.swipeStart = function(e) {
        var t, n = this;
        if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return !(n.touchObject = {});
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
    }, r.prototype.unfilterSlides = r.prototype.slickUnfilter = function() {
        null !== this.$slidesCache && (this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.appendTo(this.$slideTrack), this.reinit())
    }, r.prototype.unload = function() {
        var e = this;
        u(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, r.prototype.unslick = function(e) {
        this.$slider.trigger("unslick", [this, e]), this.destroy()
    }, r.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, r.prototype.updateDots = function() {
        null !== this.$dots && (this.$dots.find("li").removeClass("slick-active").end(), this.$dots.find("li").eq(Math.floor(this.currentSlide / this.options.slidesToScroll)).addClass("slick-active"))
    }, r.prototype.visibility = function() {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }, u.fn.slick = function() {
        for (var e, t = arguments[0], n = Array.prototype.slice.call(arguments, 1), i = this.length, o = 0; o < i; o++)
            if ("object" == typeof t || void 0 === t ? this[o].slick = new r(this[o], t) : e = this[o].slick[t].apply(this[o].slick, n), void 0 !== e) return e;
        return this
    }
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t()
}(this, function() {
    "use strict";
    return function(h, n, e, t) {
        var f = {
            features: null,
            bind: function(e, t, n, i) {
                var o = (i ? "remove" : "add") + "EventListener";
                t = t.split(" ");
                for (var r = 0; r < t.length; r++) t[r] && e[o](t[r], n, !1)
            },
            isArray: function(e) {
                return e instanceof Array
            },
            createEl: function(e, t) {
                t = document.createElement(t || "div");
                return e && (t.className = e), t
            },
            getScrollY: function() {
                var e = window.pageYOffset;
                return void 0 !== e ? e : document.documentElement.scrollTop
            },
            unbind: function(e, t, n) {
                f.bind(e, t, n, !0)
            },
            removeClass: function(e, t) {
                t = new RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className.replace(t, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            },
            addClass: function(e, t) {
                f.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
            },
            hasClass: function(e, t) {
                return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
            },
            getChildByClass: function(e, t) {
                for (var n = e.firstChild; n;) {
                    if (f.hasClass(n, t)) return n;
                    n = n.nextSibling
                }
            },
            arraySearch: function(e, t, n) {
                for (var i = e.length; i--;)
                    if (e[i][n] === t) return i;
                return -1
            },
            extend: function(e, t, n) {
                for (var i in t)
                    if (t.hasOwnProperty(i)) {
                        if (n && e.hasOwnProperty(i)) continue;
                        e[i] = t[i]
                    }
            },
            easing: {
                sine: {
                    out: function(e) {
                        return Math.sin(e * (Math.PI / 2))
                    },
                    inOut: function(e) {
                        return -(Math.cos(Math.PI * e) - 1) / 2
                    }
                },
                cubic: {
                    out: function(e) {
                        return --e * e * e + 1
                    }
                }
            },
            detectFeatures: function() {
                if (f.features) return f.features;
                var e, t, n = f.createEl().style,
                    i = "",
                    o = {};
                o.oldIE = document.all && !document.addEventListener, o.touch = "ontouchstart" in window, window.requestAnimationFrame && (o.raf = window.requestAnimationFrame, o.caf = window.cancelAnimationFrame), o.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, o.pointerEvent || (e = navigator.userAgent, !/iP(hone|od)/.test(navigator.platform) || (t = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)) && 0 < t.length && (1 <= (t = parseInt(t[1], 10)) && t < 8 && (o.isOldIOSPhone = !0)), t = (t = e.match(/Android\s([0-9\.]*)/)) ? t[1] : 0, 1 <= (t = parseFloat(t)) && (t < 4.4 && (o.isOldAndroid = !0), o.androidVersion = t), o.isMobileOpera = /opera mini|opera mobi/i.test(e));
                for (var r, s, a, l = ["transform", "perspective", "animationName"], u = ["", "webkit", "Moz", "ms", "O"], c = 0; c < 4; c++) {
                    i = u[c];
                    for (var d = 0; d < 3; d++) r = l[d], s = i + (i ? r.charAt(0).toUpperCase() + r.slice(1) : r), !o[r] && s in n && (o[r] = s);
                    i && !o.raf && (i = i.toLowerCase(), o.raf = window[i + "RequestAnimationFrame"], o.raf && (o.caf = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]))
                }
                return o.raf || (a = 0, o.raf = function(e) {
                    var t = (new Date).getTime(),
                        n = Math.max(0, 16 - (t - a)),
                        i = window.setTimeout(function() {
                            e(t + n)
                        }, n);
                    return a = t + n, i
                }, o.caf = function(e) {
                    clearTimeout(e)
                }), o.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, f.features = o
            }
        };
        f.detectFeatures(), f.features.oldIE && (f.bind = function(e, t, n, i) {
            t = t.split(" ");
            for (var o, r = (i ? "detach" : "attach") + "Event", s = function() {
                    n.handleEvent.call(n)
                }, a = 0; a < t.length; a++)
                if (o = t[a])
                    if ("object" == typeof n && n.handleEvent) {
                        if (i) {
                            if (!n["oldIE" + o]) return !1
                        } else n["oldIE" + o] = s;
                        e[r]("on" + o, n["oldIE" + o])
                    } else e[r]("on" + o, n)
        });
        var m = this,
            v = {
                allowPanToNext: !0,
                spacing: .12,
                bgOpacity: 1,
                mouseUsed: !1,
                loop: !0,
                pinchToClose: !0,
                closeOnScroll: !0,
                closeOnVerticalDrag: !0,
                verticalDragRange: .75,
                hideAnimationDuration: 333,
                showAnimationDuration: 333,
                showHideOpacity: !1,
                focus: !0,
                escKey: !0,
                arrowKeys: !0,
                mainScrollEndFriction: .35,
                panEndFriction: .35,
                isClickableElement: function(e) {
                    return "A" === e.tagName
                },
                getDoubleTapZoom: function(e, t) {
                    return e || t.initialZoomLevel < .7 ? 1 : 1.33
                },
                maxSpreadZoom: 1.33,
                modal: !0,
                scaleMode: "fit"
            };
        f.extend(v, t);

        function i() {
            return {
                x: 0,
                y: 0
            }
        }

        function o(e, t) {
            f.extend(m, t.publicMethods), Ge.push(e)
        }

        function s(e) {
            var t = Vt();
            return t - 1 < e ? e - t : e < 0 ? t + e : e
        }

        function r(e, t) {
            return et[e] || (et[e] = []), et[e].push(t)
        }

        function g(e) {
            var t = et[e];
            if (t) {
                var n = Array.prototype.slice.call(arguments);
                n.shift();
                for (var i = 0; i < t.length; i++) t[i].apply(m, n)
            }
        }

        function c() {
            return (new Date).getTime()
        }

        function y(e) {
            Re = e, m.bg.style.opacity = e * v.bgOpacity
        }

        function a(e, t, n, i, o) {
            (!Qe || o && o !== m.currItem) && (i /= (o || m.currItem).fitRatio), e[ae] = G + t + "px, " + n + "px" + J + " scale(" + i + ")"
        }

        function d(e, t) {
            var n;
            !v.loop && t && (n = q + (Ze.x * Ve - e) / Ze.x, t = Math.round(e - kt.x), (n < 0 && 0 < t || n >= Vt() - 1 && t < 0) && (e = kt.x + t * v.mainScrollEndFriction)), kt.x = e, it(e, W)
        }

        function l(e, t) {
            var n = wt[e] - Ye[e];
            return qe[e] + ze[e] + n - t / K * n
        }

        function b(e, t) {
            e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
        }

        function u(e) {
            e.x = Math.round(e.x), e.y = Math.round(e.y)
        }

        function p(e, t) {
            return e = Gt(m.currItem, Ue, e), t && (Me = e), e
        }

        function k(e) {
            return (e = e || m.currItem).initialZoomLevel
        }

        function w(e) {
            return 0 < (e = e || m.currItem).w ? v.maxSpreadZoom : 1
        }

        function x(e, t, n, i) {
            return i === m.currItem.initialZoomLevel ? (n[e] = m.currItem.initialPosition[e], !0) : (n[e] = l(e, i), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] && (n[e] = t.max[e], !0))
        }

        function C(e) {
            var t = "";
            v.escKey && 27 === e.keyCode ? t = "close" : v.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, m[t]()))
        }

        function S(e) {
            e && (Ee || Ae || Pe || xe) && (e.preventDefault(), e.stopPropagation())
        }

        function T() {
            m.setScrollOffset(0, f.getScrollY())
        }

        function A(e) {
            st[e] && (st[e].raf && de(st[e].raf), at--, delete st[e])
        }

        function E(e) {
            st[e] && A(e), st[e] || (at++, st[e] = {})
        }

        function _() {
            for (var e in st) st.hasOwnProperty(e) && A(e)
        }

        function D(e, t, n, i, o, r, s) {
            var a, l = c();
            E(e);
            var u = function() {
                if (st[e]) {
                    if (a = c() - l, i <= a) return A(e), r(n), void(s && s());
                    r((n - t) * o(a / i) + t), st[e].raf = ce(u)
                }
            };
            u()
        }

        function $(e, t) {
            return vt.x = Math.abs(e.x - t.x), vt.y = Math.abs(e.y - t.y), Math.sqrt(vt.x * vt.x + vt.y * vt.y)
        }

        function F(e, t) {
            return At.prevent = !Tt(e.target, v.isClickableElement), g("preventDragEvent", e, t, At), At.prevent
        }

        function j(e, t) {
            return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
        }

        function M(e, t, n) {
            n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y)
        }

        function O() {
            var e = We.y - m.currItem.initialPosition.y;
            return 1 - Math.abs(e / (Ue.y / 2))
        }

        function P(e) {
            for (; 0 < Dt.length;) Dt.pop();
            return le ? (He = 0, ht.forEach(function(e) {
                0 === He ? Dt[0] = e : 1 === He && (Dt[1] = e), He++
            })) : -1 < e.type.indexOf("touch") ? e.touches && 0 < e.touches.length && (Dt[0] = j(e.touches[0], Et), 1 < e.touches.length && (Dt[1] = j(e.touches[1], _t))) : (Et.x = e.pageX, Et.y = e.pageY, Et.id = "", Dt[0] = Et), Dt
        }

        function I(e, t) {
            var n, i, o, r = We[e] + t[e],
                s = 0 < t[e],
                a = kt.x + t.x,
                l = kt.x - ft.x,
                u = r > Me.min[e] || r < Me.max[e] ? v.panEndFriction : 1,
                r = We[e] + t[e] * u;
            return !v.allowPanToNext && X !== m.currItem.initialZoomLevel || (Oe ? "h" !== Ie || "x" !== e || Ae || (s ? (r > Me.min[e] && (u = v.panEndFriction, Me.min[e], n = Me.min[e] - qe[e]), (n <= 0 || l < 0) && 1 < Vt() ? (o = a, l < 0 && a > ft.x && (o = ft.x)) : Me.min.x !== Me.max.x && (i = r)) : (r < Me.max[e] && (u = v.panEndFriction, Me.max[e], n = qe[e] - Me.max[e]), (n <= 0 || 0 < l) && 1 < Vt() ? (o = a, 0 < l && a < ft.x && (o = ft.x)) : Me.min.x !== Me.max.x && (i = r))) : o = a, "x" !== e) ? void(Pe || De || X > m.currItem.fitRatio && (We[e] += t[e] * u)) : (void 0 !== o && (d(o, !0), De = o !== ft.x), Me.min.x !== Me.max.x && (void 0 !== i ? We.x = i : De || (We.x += t.x * u)), void 0 !== o)
        }

        function L(e) {
            var t;
            "mousedown" === e.type && 0 < e.button || (Wt ? e.preventDefault() : Ce && "mousedown" === e.type || (F(e, !0) && e.preventDefault(), g("pointerDown"), le && ((t = f.arraySearch(ht, e.pointerId, "id")) < 0 && (t = ht.length), ht[t] = {
                x: e.pageX,
                y: e.pageY,
                id: e.pointerId
            }), e = (t = P(e)).length, $e = null, _(), Se && 1 !== e || (Se = Le = !0, f.bind(window, V, m), we = Ne = Be = xe = De = Ee = Te = Ae = !1, Ie = null, g("firstTouchStart", t), b(qe, We), ze.x = ze.y = 0, b(dt, t[0]), b(pt, dt), ft.x = Ze.x * Ve, mt = [{
                x: dt.x,
                y: dt.y
            }], be = ye = c(), p(X, !0), Ct(), St()), !Fe && 1 < e && !Pe && !De && (K = X, Fe = Te = !(Ae = !1), ze.y = ze.x = 0, b(qe, We), b(lt, t[0]), b(ut, t[1]), M(lt, ut, xt), wt.x = Math.abs(xt.x) - We.x, wt.y = Math.abs(xt.y) - We.y, je = $(lt, ut))))
        }

        function B(e) {
            var t, n;
            e.preventDefault(), le && -1 < (t = f.arraySearch(ht, e.pointerId, "id")) && ((n = ht[t]).x = e.pageX, n.y = e.pageY), Se && (n = P(e), Ie || Ee || Fe ? $e = n : kt.x !== Ze.x * Ve ? Ie = "h" : (e = Math.abs(n[0].x - dt.x) - Math.abs(n[0].y - dt.y), 10 <= Math.abs(e) && (Ie = 0 < e ? "h" : "v", $e = n)))
        }

        function R(e) {
            if (ve.isOldAndroid) {
                if (Ce && "mouseup" === e.type) return; - 1 < e.type.indexOf("touch") && (clearTimeout(Ce), Ce = setTimeout(function() {
                    Ce = 0
                }, 600))
            }
            g("pointerUp"), F(e, !1) && e.preventDefault(), !le || -1 < (n = f.arraySearch(ht, e.pointerId, "id")) && (r = ht.splice(n, 1)[0], navigator.pointerEnabled ? r.type = e.pointerType || "mouse" : (r.type = {
                4: "mouse",
                2: "touch",
                3: "pen"
            } [e.pointerType], r.type || (r.type = e.pointerType || "mouse")));
            var t = P(e),
                n = t.length;
            if (2 === (n = "mouseup" === e.type ? 0 : n)) return !($e = null);
            1 === n && b(pt, t[0]), 0 !== n || Ie || Pe || (r || ("mouseup" === e.type ? r = {
                x: e.pageX,
                y: e.pageY,
                type: "mouse"
            } : e.changedTouches && e.changedTouches[0] && (r = {
                x: e.changedTouches[0].pageX,
                y: e.changedTouches[0].pageY,
                type: "touch"
            })), g("touchRelease", e, r));
            var i, o, r = -1;
            if (0 === n && (Se = !1, f.unbind(window, V, m), Ct(), Fe ? r = 0 : -1 !== bt && (r = c() - bt)), bt = 1 === n ? c() : -1, r = -1 !== r && r < 150 ? "zoom" : "swipe", Fe && n < 2 && (Fe = !1, 1 === n && (r = "zoomPointerUp"), g("zoomGestureEnded")), $e = null, Ee || Ae || Pe || xe)
                if (_(), (ke = ke || Ft()).calculateSwipeSpeed("x"), xe) O() < v.verticalDragRange ? m.close() : (i = We.y, o = Re, D("verticalDrag", 0, 1, 300, f.easing.cubic.out, function(e) {
                    We.y = (m.currItem.initialPosition.y - i) * e + i, y((1 - o) * e + o), tt()
                }), g("onVerticalDrag", 1));
                else {
                    if ((De || Pe) && 0 === n) {
                        if (Mt(r, ke)) return;
                        r = "zoomPointerUp"
                    }
                    if (!Pe) return "swipe" !== r ? void Pt() : void(!De && X > m.currItem.fitRatio && jt(ke))
                }
        }
        var N, H, z, q, W, U, V, Y, Z, X, K, G, J, Q, ee, te, ne, ie, oe, re, se, ae, le, ue, ce, de, pe, he, fe, me, ve, ge, ye, be, ke, we, xe, Ce, Se, Te, Ae, Ee, _e, De, $e, Fe, je, Me, Oe, Pe, Ie, Le, Be, Re, Ne, He, ze = i(),
            qe = i(),
            We = i(),
            Ue = {},
            Ve = 0,
            Ye = {},
            Ze = i(),
            Xe = 0,
            Ke = !0,
            Ge = [],
            Je = {},
            Qe = !1,
            et = {},
            tt = function(e) {
                Oe && (e && (X > m.currItem.fitRatio ? Qe || (Jt(m.currItem, !1, !0), Qe = !0) : Qe && (Jt(m.currItem), Qe = !1)), a(Oe, We.x, We.y, X))
            },
            nt = function(e) {
                e.container && a(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
            },
            it = function(e, t) {
                t[ae] = G + e + "px, 0px" + J
            },
            ot = null,
            rt = function() {
                ot && (f.unbind(document, "mousemove", rt), f.addClass(h, "pswp--has_mouse"), v.mouseUsed = !0, g("mouseUsed")), ot = setTimeout(function() {
                    ot = null
                }, 100)
            },
            st = {},
            at = 0,
            t = {
                shout: g,
                listen: r,
                viewportSize: Ue,
                options: v,
                isMainScrollAnimating: function() {
                    return Pe
                },
                getZoomLevel: function() {
                    return X
                },
                getCurrentIndex: function() {
                    return q
                },
                isDragging: function() {
                    return Se
                },
                isZooming: function() {
                    return Fe
                },
                setScrollOffset: function(e, t) {
                    Ye.x = e, me = Ye.y = t, g("updateScrollOffset", Ye)
                },
                applyZoomPan: function(e, t, n, i) {
                    We.x = t, We.y = n, X = e, tt(i)
                },
                init: function() {
                    if (!N && !H) {
                        var e;
                        m.framework = f, m.template = h, m.bg = f.getChildByClass(h, "pswp__bg"), pe = h.className, N = !0, ve = f.detectFeatures(), ce = ve.raf, de = ve.caf, ae = ve.transform, fe = ve.oldIE, m.scrollWrap = f.getChildByClass(h, "pswp__scroll-wrap"), m.container = f.getChildByClass(m.scrollWrap, "pswp__container"), W = m.container.style, m.itemHolders = te = [{
                                el: m.container.children[0],
                                wrap: 0,
                                index: -1
                            }, {
                                el: m.container.children[1],
                                wrap: 0,
                                index: -1
                            }, {
                                el: m.container.children[2],
                                wrap: 0,
                                index: -1
                            }], te[0].el.style.display = te[2].el.style.display = "none",
                            function() {
                                if (ae) {
                                    var e = ve.perspective && !ue;
                                    return G = "translate" + (e ? "3d(" : "("), J = ve.perspective ? ", 0px)" : ")"
                                }
                                ae = "left", f.addClass(h, "pswp--ie"), it = function(e, t) {
                                    t.left = e + "px"
                                }, nt = function(e) {
                                    var t = 1 < e.fitRatio ? 1 : e.fitRatio,
                                        n = e.container.style,
                                        i = t * e.w,
                                        t = t * e.h;
                                    n.width = i + "px", n.height = t + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px"
                                }, tt = function() {
                                    var e, t, n, i;
                                    Oe && (e = Oe, n = (t = 1 < (i = m.currItem).fitRatio ? 1 : i.fitRatio) * i.w, i = t * i.h, e.width = n + "px", e.height = i + "px", e.left = We.x + "px", e.top = We.y + "px")
                                }
                            }(), Z = {
                                resize: m.updateSize,
                                orientationchange: function() {
                                    clearTimeout(ge), ge = setTimeout(function() {
                                        Ue.x !== m.scrollWrap.clientWidth && m.updateSize()
                                    }, 500)
                                },
                                scroll: T,
                                keydown: C,
                                click: S
                            };
                        var t = ve.isOldIOSPhone || ve.isOldAndroid || ve.isMobileOpera;
                        for (ve.animationName && ve.transform && !t || (v.showAnimationDuration = v.hideAnimationDuration = 0), e = 0; e < Ge.length; e++) m["init" + Ge[e]]();
                        n && (m.ui = new n(m, f)).init(), g("firstUpdate"), q = q || v.index || 0, (isNaN(q) || q < 0 || q >= Vt()) && (q = 0), m.currItem = Ut(q), (ve.isOldIOSPhone || ve.isOldAndroid) && (Ke = !1), h.setAttribute("aria-hidden", "false"), v.modal && (Ke ? h.style.position = "fixed" : (h.style.position = "absolute", h.style.top = f.getScrollY() + "px")), void 0 === me && (g("initialLayout"), me = he = f.getScrollY());
                        t = "pswp--open ";
                        for (v.mainClass && (t += v.mainClass + " "), v.showHideOpacity && (t += "pswp--animate_opacity "), t += ue ? "pswp--touch" : "pswp--notouch", t += ve.animationName ? " pswp--css_animation" : "", t += ve.svg ? " pswp--svg" : "", f.addClass(h, t), m.updateSize(), U = -1, Xe = null, e = 0; e < 3; e++) it((e + U) * Ze.x, te[e].el.style);
                        fe || f.bind(m.scrollWrap, Y, m), r("initialZoomInEnd", function() {
                            m.setContent(te[0], q - 1), m.setContent(te[2], q + 1), te[0].el.style.display = te[2].el.style.display = "block", v.focus && h.focus(), f.bind(document, "keydown", m), ve.transform && f.bind(m.scrollWrap, "click", m), v.mouseUsed || f.bind(document, "mousemove", rt), f.bind(window, "resize scroll orientationchange", m), g("bindEvents")
                        }), m.setContent(te[1], q), m.updateCurrItem(), g("afterInit"), Ke || (Q = setInterval(function() {
                            at || Se || Fe || X !== m.currItem.initialZoomLevel || m.updateSize()
                        }, 1e3)), f.addClass(h, "pswp--visible")
                    }
                },
                close: function() {
                    N && (H = !(N = !1), g("close"), f.unbind(window, "resize scroll orientationchange", m), f.unbind(window, "scroll", Z.scroll), f.unbind(document, "keydown", m), f.unbind(document, "mousemove", rt), ve.transform && f.unbind(m.scrollWrap, "click", m), Se && f.unbind(window, V, m), clearTimeout(ge), g("unbindEvents"), Yt(m.currItem, null, !0, m.destroy))
                },
                destroy: function() {
                    g("destroy"), Ht && clearTimeout(Ht), h.setAttribute("aria-hidden", "true"), h.className = pe, Q && clearInterval(Q), f.unbind(m.scrollWrap, Y, m), f.unbind(window, "scroll", m), Ct(), _(), et = null
                },
                panTo: function(e, t, n) {
                    n || (e > Me.min.x ? e = Me.min.x : e < Me.max.x && (e = Me.max.x), t > Me.min.y ? t = Me.min.y : t < Me.max.y && (t = Me.max.y)), We.x = e, We.y = t, tt()
                },
                handleEvent: function(e) {
                    e = e || window.event, Z[e.type] && Z[e.type](e)
                },
                goTo: function(e) {
                    var t = (e = s(e)) - q;
                    Xe = t, q = e, m.currItem = Ut(q), Ve -= t, d(Ze.x * Ve), _(), Pe = !1, m.updateCurrItem()
                },
                next: function() {
                    m.goTo(q + 1)
                },
                prev: function() {
                    m.goTo(q - 1)
                },
                updateCurrZoomItem: function(e) {
                    var t;
                    e && g("beforeChange", 0), Oe = te[1].el.children.length ? (t = te[1].el.children[0], f.hasClass(t, "pswp__zoom-wrap") ? t.style : null) : null, Me = m.currItem.bounds, K = X = m.currItem.initialZoomLevel, We.x = Me.center.x, We.y = Me.center.y, e && g("afterChange")
                },
                invalidateCurrItems: function() {
                    ee = !0;
                    for (var e = 0; e < 3; e++) te[e].item && (te[e].item.needsUpdate = !0)
                },
                updateCurrItem: function(e) {
                    if (0 !== Xe) {
                        var t, n = Math.abs(Xe);
                        if (!(e && n < 2)) {
                            m.currItem = Ut(q), Qe = !1, g("beforeChange", Xe), 3 <= n && (U += Xe + (0 < Xe ? -3 : 3), n = 3);
                            for (var i = 0; i < n; i++) 0 < Xe ? (t = te.shift(), te[2] = t, it((++U + 2) * Ze.x, t.el.style), m.setContent(t, q - n + i + 1 + 1)) : (t = te.pop(), te.unshift(t), it(--U * Ze.x, t.el.style), m.setContent(t, q + n - i - 1 - 1));
                            !Oe || 1 !== Math.abs(Xe) || (e = Ut(ne)).initialZoomLevel !== X && (Gt(e, Ue), Jt(e), nt(e)), Xe = 0, m.updateCurrZoomItem(), ne = q, g("afterChange")
                        }
                    }
                },
                updateSize: function(e) {
                    if (!Ke && v.modal) {
                        var t = f.getScrollY();
                        if (me !== t && (h.style.top = t + "px", me = t), !e && Je.x === window.innerWidth && Je.y === window.innerHeight) return;
                        Je.x = window.innerWidth, Je.y = window.innerHeight, h.style.height = Je.y + "px"
                    }
                    if (Ue.x = m.scrollWrap.clientWidth, Ue.y = m.scrollWrap.clientHeight, T(), Ze.x = Ue.x + Math.round(Ue.x * v.spacing), Ze.y = Ue.y, d(Ze.x * Ve), g("beforeResize"), void 0 !== U) {
                        for (var n, i, o, r = 0; r < 3; r++) n = te[r], it((r + U) * Ze.x, n.el.style), o = q + r - 1, v.loop && 2 < Vt() && (o = s(o)), (i = Ut(o)) && (ee || i.needsUpdate || !i.bounds) ? (m.cleanSlide(i), m.setContent(n, o), 1 === r && (m.currItem = i, m.updateCurrZoomItem(!0)), i.needsUpdate = !1) : -1 === n.index && 0 <= o && m.setContent(n, o), i && i.container && (Gt(i, Ue), Jt(i), nt(i));
                        ee = !1
                    }
                    K = X = m.currItem.initialZoomLevel, (Me = m.currItem.bounds) && (We.x = Me.center.x, We.y = Me.center.y, tt(!0)), g("resize")
                },
                zoomTo: function(t, e, n, i, o) {
                    e && (K = X, wt.x = Math.abs(e.x) - We.x, wt.y = Math.abs(e.y) - We.y, b(qe, We));
                    var e = p(t, !1),
                        r = {};
                    x("x", e, r, t), x("y", e, r, t);
                    var s = X,
                        a = We.x,
                        l = We.y;
                    u(r);
                    e = function(e) {
                        1 === e ? (X = t, We.x = r.x, We.y = r.y) : (X = (t - s) * e + s, We.x = (r.x - a) * e + a, We.y = (r.y - l) * e + l), o && o(e), tt(1 === e)
                    };
                    n ? D("customZoomTo", 0, 1, n, i || f.easing.sine.inOut, e) : e(1)
                }
            },
            lt = {},
            ut = {},
            ct = {},
            dt = {},
            pt = {},
            ht = [],
            ft = {},
            mt = [],
            vt = {},
            gt = 0,
            yt = i(),
            bt = 0,
            kt = i(),
            wt = i(),
            xt = i(),
            Ct = function() {
                _e && (de(_e), _e = null)
            },
            St = function() {
                Se && (_e = ce(St), $t())
            },
            Tt = function(e, t) {
                return !(!e || e === document) && !(e.getAttribute("class") && -1 < e.getAttribute("class").indexOf("pswp__scroll-wrap")) && (t(e) ? e : Tt(e.parentNode, t))
            },
            At = {},
            Et = {},
            _t = {},
            Dt = [],
            $t = function() {
                if ($e) {
                    var e = $e.length;
                    if (0 !== e)
                        if (b(lt, $e[0]), ct.x = lt.x - dt.x, ct.y = lt.y - dt.y, Fe && 1 < e) dt.x = lt.x, dt.y = lt.y, (ct.x || ct.y || (r = $e[1], s = ut, r.x !== s.x || r.y !== s.y)) && (b(ut, $e[1]), Ae || (Ae = !0, g("zoomGestureStarted")), i = $(lt, ut), (o = Ot(i)) > m.currItem.initialZoomLevel + m.currItem.initialZoomLevel / 15 && (Ne = !0), n = 1, e = k(), r = w(), o < e ? v.pinchToClose && !Ne && K <= m.currItem.initialZoomLevel ? (y(s = 1 - (e - o) / (e / 1.2)), g("onPinchClose", s), Be = !0) : o = e - (n = 1 < (n = (e - o) / e) ? 1 : n) * (e / 3) : r < o && (o = r + (n = 1 < (n = (o - r) / (6 * e)) ? 1 : n) * e), n < 0 && (n = 0), M(lt, ut, yt), ze.x += yt.x - xt.x, ze.y += yt.y - xt.y, b(xt, yt), We.x = l("x", o), We.y = l("y", o), we = X < o, X = o, tt());
                        else if (Ie && (Le && (Le = !1, 10 <= Math.abs(ct.x) && (ct.x -= $e[0].x - pt.x), 10 <= Math.abs(ct.y) && (ct.y -= $e[0].y - pt.y)), dt.x = lt.x, dt.y = lt.y, 0 !== ct.x || 0 !== ct.y)) {
                        if ("v" === Ie && v.closeOnVerticalDrag && "fit" === v.scaleMode && X === m.currItem.initialZoomLevel) {
                            ze.y += ct.y, We.y += ct.y;
                            var t = O();
                            return xe = !0, g("onVerticalDrag", t), y(t), void tt()
                        }
                        n = c(), i = lt.x, o = lt.y, 50 < n - be && ((t = 2 < mt.length ? mt.shift() : {}).x = i, t.y = o, mt.push(t), be = n), Ee = !0, Me = m.currItem.bounds, I("x", ct) || (I("y", ct), u(We), tt())
                    }
                }
                var n, i, o, r, s
            },
            Ft = function() {
                var t, n, i = {
                    lastFlickOffset: {},
                    lastFlickDist: {},
                    lastFlickSpeed: {},
                    slowDownRatio: {},
                    slowDownRatioReverse: {},
                    speedDecelerationRatio: {},
                    speedDecelerationRatioAbs: {},
                    distanceOffset: {},
                    backAnimDestination: {},
                    backAnimStarted: {},
                    calculateSwipeSpeed: function(e) {
                        n = 1 < mt.length ? (t = c() - be + 50, mt[mt.length - 2][e]) : (t = c() - ye, pt[e]), i.lastFlickOffset[e] = dt[e] - n, i.lastFlickDist[e] = Math.abs(i.lastFlickOffset[e]), 20 < i.lastFlickDist[e] ? i.lastFlickSpeed[e] = i.lastFlickOffset[e] / t : i.lastFlickSpeed[e] = 0, Math.abs(i.lastFlickSpeed[e]) < .1 && (i.lastFlickSpeed[e] = 0), i.slowDownRatio[e] = .95, i.slowDownRatioReverse[e] = 1 - i.slowDownRatio[e], i.speedDecelerationRatio[e] = 1
                    },
                    calculateOverBoundsAnimOffset: function(t, e) {
                        i.backAnimStarted[t] || (We[t] > Me.min[t] ? i.backAnimDestination[t] = Me.min[t] : We[t] < Me.max[t] && (i.backAnimDestination[t] = Me.max[t]), void 0 !== i.backAnimDestination[t] && (i.slowDownRatio[t] = .7, i.slowDownRatioReverse[t] = 1 - i.slowDownRatio[t], i.speedDecelerationRatioAbs[t] < .05 && (i.lastFlickSpeed[t] = 0, i.backAnimStarted[t] = !0, D("bounceZoomPan" + t, We[t], i.backAnimDestination[t], e || 300, f.easing.sine.out, function(e) {
                            We[t] = e, tt()
                        }))))
                    },
                    calculateAnimOffset: function(e) {
                        i.backAnimStarted[e] || (i.speedDecelerationRatio[e] = i.speedDecelerationRatio[e] * (i.slowDownRatio[e] + i.slowDownRatioReverse[e] - i.slowDownRatioReverse[e] * i.timeDiff / 10), i.speedDecelerationRatioAbs[e] = Math.abs(i.lastFlickSpeed[e] * i.speedDecelerationRatio[e]), i.distanceOffset[e] = i.lastFlickSpeed[e] * i.speedDecelerationRatio[e] * i.timeDiff, We[e] += i.distanceOffset[e])
                    },
                    panAnimLoop: function() {
                        if (st.zoomPan && (st.zoomPan.raf = ce(i.panAnimLoop), i.now = c(), i.timeDiff = i.now - i.lastNow, i.lastNow = i.now, i.calculateAnimOffset("x"), i.calculateAnimOffset("y"), tt(), i.calculateOverBoundsAnimOffset("x"), i.calculateOverBoundsAnimOffset("y"), i.speedDecelerationRatioAbs.x < .05 && i.speedDecelerationRatioAbs.y < .05)) return We.x = Math.round(We.x), We.y = Math.round(We.y), tt(), void A("zoomPan")
                    }
                };
                return i
            },
            jt = function(e) {
                return e.calculateSwipeSpeed("y"), Me = m.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (E("zoomPan"), e.lastNow = c(), void e.panAnimLoop())
            },
            Mt = function(e, t) {
                var n, i;
                Pe || (gt = q), "swipe" === e && (i = dt.x - pt.x, e = t.lastFlickDist.x < 10, 30 < i && (e || 20 < t.lastFlickOffset.x) ? r = -1 : i < -30 && (e || t.lastFlickOffset.x < -20) && (r = 1)), r && ((q += r) < 0 ? (q = v.loop ? Vt() - 1 : 0, o = !0) : q >= Vt() && (q = v.loop ? 0 : Vt() - 1, o = !0), o && !v.loop || (Xe += r, Ve -= r, n = !0));
                var o = Ze.x * Ve,
                    r = Math.abs(o - kt.x),
                    s = n || o > kt.x == 0 < t.lastFlickSpeed.x ? (s = 0 < Math.abs(t.lastFlickSpeed.x) ? r / Math.abs(t.lastFlickSpeed.x) : 333, s = Math.min(s, 400), Math.max(s, 250)) : 333;
                return gt === q && (n = !1), Pe = !0, g("mainScrollAnimStart"), D("mainScroll", kt.x, o, s, f.easing.cubic.out, d, function() {
                    _(), Pe = !1, gt = -1, !n && gt === q || m.updateCurrItem(), g("mainScrollAnimComplete")
                }), n && m.updateCurrItem(!0), n
            },
            Ot = function(e) {
                return 1 / je * e * K
            },
            Pt = function() {
                var e = X,
                    t = k(),
                    n = w();
                X < t ? e = t : n < X && (e = n);
                var i, o = Re;
                return Be && !we && !Ne && X < t ? m.close() : (Be && (i = function(e) {
                    y((1 - o) * e + o)
                }), m.zoomTo(e, 0, 200, f.easing.cubic.out, i)), !0
            };
        o("Gestures", {
            publicMethods: {
                initGestures: function() {
                    function e(e, t, n, i, o) {
                        ie = e + t, oe = e + n, re = e + i, se = o ? e + o : ""
                    }(le = ve.pointerEvent) && ve.touch && (ve.touch = !1), le ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : ve.touch ? (e("touch", "start", "move", "end", "cancel"), ue = !0) : e("mouse", "down", "move", "up"), V = oe + " " + re + " " + se, Y = ie, le && !ue && (ue = 1 < navigator.maxTouchPoints || 1 < navigator.msMaxTouchPoints), m.likelyTouchDevice = ue, Z[ie] = L, Z[oe] = B, Z[re] = R, se && (Z[se] = Z[re]), ve.touch && (Y += " mousedown", V += " mousemove mouseup", Z.mousedown = Z[ie], Z.mousemove = Z[oe], Z.mouseup = Z[re]), ue || (v.allowPanToNext = !1)
                }
            }
        });

        function It() {
            return {
                center: {
                    x: 0,
                    y: 0
                },
                max: {
                    x: 0,
                    y: 0
                },
                min: {
                    x: 0,
                    y: 0
                }
            }
        }

        function Lt(e, t, n, i, o, r) {
            t.loadError || i && (t.imageAppended = !0, Jt(t, i, t === m.currItem && Qe), n.appendChild(i), r && setTimeout(function() {
                t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
            }, 500))
        }

        function Bt(e) {
            function t() {
                e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, n.onload = n.onerror = null, n = null
            }
            e.loading = !0, e.loaded = !1;
            var n = e.img = f.createEl("pswp__img", "img");
            return n.onload = t, n.onerror = function() {
                e.loadError = !0, t()
            }, n.src = e.src, n
        }

        function Rt(e, t) {
            return e.src && e.loadError && e.container && (t && (e.container.innerHTML = ""), e.container.innerHTML = v.errorMsg.replace("%url%", e.src), 1)
        }

        function Nt() {
            if (Xt.length) {
                for (var e, t = 0; t < Xt.length; t++)(e = Xt[t]).holder.index === e.index && Lt(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
                Xt = []
            }
        }
        var Ht, zt, qt, Wt, Ut, Vt, Yt = function(s, e, a, t) {
                var l;
                Ht && clearTimeout(Ht), qt = Wt = !0, s.initialLayout ? (l = s.initialLayout, s.initialLayout = null) : l = v.getThumbBoundsFn && v.getThumbBoundsFn(q);

                function u() {
                    A("initialZoom"), a ? (m.template.removeAttribute("style"), m.bg.removeAttribute("style")) : (y(1), e && (e.style.display = "block"), f.addClass(h, "pswp--animated-in"), g("initialZoom" + (a ? "OutEnd" : "InEnd"))), t && t(), Wt = !1
                }
                var c = a ? v.hideAnimationDuration : v.showAnimationDuration;
                if (!c || !l || void 0 === l.x) return g("initialZoom" + (a ? "Out" : "In")), X = s.initialZoomLevel, b(We, s.initialPosition), tt(), h.style.opacity = a ? 0 : 1, y(1), void(c ? setTimeout(function() {
                    u()
                }, c) : u());
                var d, p;
                d = z, p = !m.currItem.src || m.currItem.loadError || v.showHideOpacity, s.miniImg && (s.miniImg.style.webkitBackfaceVisibility = "hidden"), a || (X = l.w / s.w, We.x = l.x, We.y = l.y - he, m[p ? "template" : "bg"].style.opacity = .001, tt()), E("initialZoom"), a && !d && f.removeClass(h, "pswp--animated-in"), p && (a ? f[(d ? "remove" : "add") + "Class"](h, "pswp--animate_opacity") : setTimeout(function() {
                    f.addClass(h, "pswp--animate_opacity")
                }, 30)), Ht = setTimeout(function() {
                    var t, n, i, o, r, e;
                    g("initialZoom" + (a ? "Out" : "In")), a ? (t = l.w / s.w, n = We.x, i = We.y, o = X, r = Re, e = function(e) {
                        1 === e ? (X = t, We.x = l.x, We.y = l.y - me) : (X = (t - o) * e + o, We.x = (l.x - n) * e + n, We.y = (l.y - me - i) * e + i), tt(), p ? h.style.opacity = 1 - e : y(r - e * r)
                    }, d ? D("initialZoom", 0, 1, c, f.easing.cubic.out, e, u) : (e(1), Ht = setTimeout(u, c + 20))) : (X = s.initialZoomLevel, b(We, s.initialPosition), tt(), y(1), p ? h.style.opacity = 1 : y(1), Ht = setTimeout(u, c + 20))
                }, a ? 25 : 90)
            },
            Zt = {},
            Xt = [],
            Kt = {
                index: 0,
                errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                forceProgressiveLoading: !1,
                preload: [1, 1],
                getNumItemsFn: function() {
                    return zt.length
                }
            },
            Gt = function(e, t, n) {
                if (!e.src || e.loadError) return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = It(), e.initialPosition = e.bounds.center, e.bounds;
                var i, o, r, s = !n;
                return s && (e.vGap || (e.vGap = {
                    top: 0,
                    bottom: 0
                }), g("parseVerticalMargin", e)), Zt.x = t.x, Zt.y = t.y - e.vGap.top - e.vGap.bottom, s && (i = Zt.x / e.w, o = Zt.y / e.h, e.fitRatio = i < o ? i : o, "orig" === (r = v.scaleMode) ? n = 1 : "fit" === r && (n = e.fitRatio), 1 < n && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = It())), n ? (i = (t = e).w * n, o = e.h * n, (r = t.bounds).center.x = Math.round((Zt.x - i) / 2), r.center.y = Math.round((Zt.y - o) / 2) + t.vGap.top, r.max.x = i > Zt.x ? Math.round(Zt.x - i) : r.center.x, r.max.y = o > Zt.y ? Math.round(Zt.y - o) + t.vGap.top : r.center.y, r.min.x = i > Zt.x ? 0 : r.center.x, r.min.y = o > Zt.y ? t.vGap.top : r.center.y, s && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds) : void 0
            },
            Jt = function(e, t, n) {
                var i;
                e.src && (t = t || e.container.lastChild, i = n ? e.w : Math.round(e.w * e.fitRatio), n = n ? e.h : Math.round(e.h * e.fitRatio), e.placeholder && !e.loaded && (e.placeholder.style.width = i + "px", e.placeholder.style.height = n + "px"), t.style.width = i + "px", t.style.height = n + "px")
            };
        o("Controller", {
            publicMethods: {
                lazyLoadItem: function(e) {
                    e = s(e);
                    var t = Ut(e);
                    t && (!t.loaded && !t.loading || ee) && (g("gettingData", e, t), t.src && Bt(t))
                },
                initController: function() {
                    f.extend(v, Kt, !0), m.items = zt = e, Ut = m.getItemAt, Vt = v.getNumItemsFn, v.loop, Vt() < 3 && (v.loop = !1), r("beforeChange", function(e) {
                        for (var t = v.preload, n = null === e || 0 <= e, i = Math.min(t[0], Vt()), o = Math.min(t[1], Vt()), r = 1; r <= (n ? o : i); r++) m.lazyLoadItem(q + r);
                        for (r = 1; r <= (n ? i : o); r++) m.lazyLoadItem(q - r)
                    }), r("initialLayout", function() {
                        m.currItem.initialLayout = v.getThumbBoundsFn && v.getThumbBoundsFn(q)
                    }), r("mainScrollAnimComplete", Nt), r("initialZoomInEnd", Nt), r("destroy", function() {
                        for (var e, t = 0; t < zt.length; t++)(e = zt[t]).container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                        Xt = null
                    })
                },
                getItemAt: function(e) {
                    return 0 <= e && void 0 !== zt[e] && zt[e]
                },
                allowProgressiveImg: function() {
                    return v.forceProgressiveLoading || !ue || v.mouseUsed || 1200 < screen.width
                },
                setContent: function(t, n) {
                    v.loop && (n = s(n));
                    var e = m.getItemAt(t.index);
                    e && (e.container = null);
                    var i, o, r = m.getItemAt(n);
                    r ? (g("gettingData", n, r), t.index = n, o = (t.item = r).container = f.createEl("pswp__zoom-wrap"), !r.src && r.html && (r.html.tagName ? o.appendChild(r.html) : o.innerHTML = r.html), Rt(r), Gt(r, Ue), !r.src || r.loadError || r.loaded ? r.src && !r.loadError && ((i = f.createEl("pswp__img", "img")).style.opacity = 1, i.src = r.src, Jt(r, i), Lt(0, r, o, i)) : (r.loadComplete = function(e) {
                        if (N) {
                            if (t && t.index === n) {
                                if (Rt(e, !0)) return e.loadComplete = e.img = null, Gt(e, Ue), nt(e), void(t.index === q && m.updateCurrZoomItem());
                                e.imageAppended ? !Wt && e.placeholder && (e.placeholder.style.display = "none", e.placeholder = null) : ve.transform && (Pe || Wt) ? Xt.push({
                                    item: e,
                                    baseDiv: o,
                                    img: e.img,
                                    index: n,
                                    holder: t,
                                    clearPlaceholder: !0
                                }) : Lt(0, e, o, e.img, 0, !0)
                            }
                            e.loadComplete = null, e.img = null, g("imageLoadComplete", n, e)
                        }
                    }, f.features.transform && (e = "pswp__img pswp__img--placeholder", e += r.msrc ? "" : " pswp__img--placeholder--blank", e = f.createEl(e, r.msrc ? "img" : ""), r.msrc && (e.src = r.msrc), Jt(r, e), o.appendChild(e), r.placeholder = e), r.loading || Bt(r), m.allowProgressiveImg() && (!qt && ve.transform ? Xt.push({
                        item: r,
                        baseDiv: o,
                        img: r.img,
                        index: n,
                        holder: t
                    }) : Lt(0, r, o, r.img, 0, !0))), qt || n !== q ? nt(r) : (Oe = o.style, Yt(r, i || r.img)), t.el.innerHTML = "", t.el.appendChild(o)) : t.el.innerHTML = ""
                },
                cleanSlide: function(e) {
                    e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
                }
            }
        });

        function Qt(e, t, n) {
            var i = document.createEvent("CustomEvent"),
                n = {
                    origEvent: e,
                    target: e.target,
                    releasePoint: t,
                    pointerType: n || "touch"
                };
            i.initCustomEvent("pswpTap", !0, !0, n), e.target.dispatchEvent(i)
        }
        var en, tn, nn = {};
        o("Tap", {
            publicMethods: {
                initTap: function() {
                    r("firstTouchStart", m.onTapStart), r("touchRelease", m.onTapRelease), r("destroy", function() {
                        nn = {}, en = null
                    })
                },
                onTapStart: function(e) {
                    1 < e.length && (clearTimeout(en), en = null)
                },
                onTapRelease: function(e, t) {
                    var n, i, o;
                    !t || Ee || Te || at || (n = t, en && (clearTimeout(en), en = null, i = n, o = nn, Math.abs(i.x - o.x) < 25 && Math.abs(i.y - o.y) < 25) ? g("doubleTap", n) : "mouse" !== t.type ? "BUTTON" === e.target.tagName.toUpperCase() || f.hasClass(e.target, "pswp__single-tap") ? Qt(e, t) : (b(nn, n), en = setTimeout(function() {
                        Qt(e, t), en = null
                    }, 300)) : Qt(e, t, "mouse"))
                }
            }
        }), o("DesktopZoom", {
            publicMethods: {
                initDesktopZoom: function() {
                    fe || (ue ? r("mouseUsed", function() {
                        m.setupDesktopZoom()
                    }) : m.setupDesktopZoom(!0))
                },
                setupDesktopZoom: function(e) {
                    tn = {};
                    var t = "wheel mousewheel DOMMouseScroll";
                    r("bindEvents", function() {
                        f.bind(h, t, m.handleMouseWheel)
                    }), r("unbindEvents", function() {
                        tn && f.unbind(h, t, m.handleMouseWheel)
                    }), m.mouseZoomedIn = !1;

                    function n() {
                        m.mouseZoomedIn && (f.removeClass(h, "pswp--zoomed-in"), m.mouseZoomedIn = !1), X < 1 ? f.addClass(h, "pswp--zoom-allowed") : f.removeClass(h, "pswp--zoom-allowed"), o()
                    }
                    var i, o = function() {
                        i && (f.removeClass(h, "pswp--dragging"), i = !1)
                    };
                    r("resize", n), r("afterChange", n), r("pointerDown", function() {
                        m.mouseZoomedIn && (i = !0, f.addClass(h, "pswp--dragging"))
                    }), r("pointerUp", o), e || n()
                },
                handleMouseWheel: function(e) {
                    if (X <= m.currItem.fitRatio) return v.modal && (!v.closeOnScroll || at || Se ? e.preventDefault() : ae && 2 < Math.abs(e.deltaY) && (z = !0, m.close())), !0;
                    if (e.stopPropagation(), tn.x = 0, "deltaX" in e) 1 === e.deltaMode ? (tn.x = 18 * e.deltaX, tn.y = 18 * e.deltaY) : (tn.x = e.deltaX, tn.y = e.deltaY);
                    else if ("wheelDelta" in e) e.wheelDeltaX && (tn.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? tn.y = -.16 * e.wheelDeltaY : tn.y = -.16 * e.wheelDelta;
                    else {
                        if (!("detail" in e)) return;
                        tn.y = e.detail
                    }
                    p(X, !0);
                    var t = We.x - tn.x,
                        n = We.y - tn.y;
                    (v.modal || t <= Me.min.x && t >= Me.max.x && n <= Me.min.y && n >= Me.max.y) && e.preventDefault(), m.panTo(t, n)
                },
                toggleDesktopZoom: function(e) {
                    e = e || {
                        x: Ue.x / 2 + Ye.x,
                        y: Ue.y / 2 + Ye.y
                    };
                    var t = v.getDoubleTapZoom(!0, m.currItem),
                        n = X === t;
                    m.mouseZoomedIn = !n, m.zoomTo(n ? m.currItem.initialZoomLevel : t, e, 333), f[(n ? "remove" : "add") + "Class"](h, "pswp--zoomed-in")
                }
            }
        });

        function on() {
            return gn.hash.substring(1)
        }

        function rn() {
            an && clearTimeout(an), un && clearTimeout(un)
        }

        function sn() {
            var e = on(),
                t = {};
            if (e.length < 5) return t;
            var n, i = e.split("&");
            for (r = 0; r < i.length; r++) i[r] && ((n = i[r].split("=")).length < 2 || (t[n[0]] = n[1]));
            if (v.galleryPIDs) {
                for (var o = t.pid, r = t.pid = 0; r < zt.length; r++)
                    if (zt[r].pid === o) {
                        t.pid = r;
                        break
                    }
            } else t.pid = parseInt(t.pid, 10) - 1;
            return t.pid < 0 && (t.pid = 0), t
        }
        var an, ln, un, cn, dn, pn, hn, fn, mn, vn, gn, yn, bn = {
                history: !0,
                galleryUID: 1
            },
            kn = function() {
                var e, t;
                un && clearTimeout(un), at || Se ? un = setTimeout(kn, 500) : (cn ? clearTimeout(ln) : cn = !0, t = q + 1, (e = Ut(q)).hasOwnProperty("pid") && (t = e.pid), e = hn + "&gid=" + v.galleryUID + "&pid=" + t, fn || -1 === gn.hash.indexOf(e) && (vn = !0), t = gn.href.split("#")[0] + "#" + e, yn ? "#" + e !== window.location.hash && history[fn ? "replaceState" : "pushState"]("", document.title, t) : fn ? gn.replace(t) : gn.hash = e, fn = !0, ln = setTimeout(function() {
                    cn = !1
                }, 60))
            };
        o("History", {
            publicMethods: {
                initHistory: function() {
                    var e, t;
                    f.extend(v, bn, !0), v.history && (gn = window.location, fn = mn = vn = !1, hn = on(), yn = "pushState" in history, -1 < hn.indexOf("gid=") && (hn = (hn = hn.split("&gid=")[0]).split("?gid=")[0]), r("afterChange", m.updateURL), r("unbindEvents", function() {
                        f.unbind(window, "hashchange", m.onHashChange)
                    }), e = function() {
                        pn = !0, mn || (vn ? history.back() : hn ? gn.hash = hn : yn ? history.pushState("", document.title, gn.pathname + gn.search) : gn.hash = ""), rn()
                    }, r("unbindEvents", function() {
                        z && e()
                    }), r("destroy", function() {
                        pn || e()
                    }), r("firstUpdate", function() {
                        q = sn().pid
                    }), -1 < (t = hn.indexOf("pid=")) && ("&" === (hn = hn.substring(0, t)).slice(-1) && (hn = hn.slice(0, -1))), setTimeout(function() {
                        N && f.bind(window, "hashchange", m.onHashChange)
                    }, 40))
                },
                onHashChange: function() {
                    return on() === hn ? (mn = !0, void m.close()) : void(cn || (dn = !0, m.goTo(sn().pid), dn = !1))
                },
                updateURL: function() {
                    rn(), dn || (fn ? an = setTimeout(kn, 800) : kn())
                }
            }
        }), f.extend(m, t)
    }
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t()
}(this, function() {
    "use strict";
    return function(i, a) {
        function e(e) {
            if (E) return !0;
            e = e || window.event, A.timeToIdle && A.mouseUsed && !k && L();
            for (var t, n, i = (e.target || e.srcElement).getAttribute("class") || "", o = 0; o < R.length; o++)(t = R[o]).onTap && -1 < i.indexOf("pswp__" + t.name) && (t.onTap(), n = !0);
            n && (e.stopPropagation && e.stopPropagation(), E = !0, e = a.features.isOldAndroid ? 600 : 30, setTimeout(function() {
                E = !1
            }, e))
        }

        function t(e, t, n) {
            a[(n ? "add" : "remove") + "Class"](e, "pswp__" + t)
        }

        function n() {
            var e = 1 === A.getNumItemsFn();
            e !== T && (t(h, "ui--one-slide", e), T = e)
        }

        function o() {
            t(y, "share-modal--hidden", M)
        }

        function r() {
            return (M = !M) ? (a.removeClass(y, "pswp__share-modal--fade-in"), setTimeout(function() {
                M && o()
            }, 300)) : (o(), setTimeout(function() {
                M || a.addClass(y, "pswp__share-modal--fade-in")
            }, 30)), M || P(), 0
        }

        function s(e) {
            var t = (e = e || window.event).target || e.srcElement;
            return i.shout("shareLinkClick", e, t), !(!t.href || !t.hasAttribute("download") && (window.open(t.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), M || r(), 1))
        }

        function l(e) {
            for (var t = 0; t < A.closeElClasses.length; t++)
                if (a.hasClass(e, "pswp__" + A.closeElClasses[t])) return !0
        }

        function u(e) {
            (e = (e = e || window.event).relatedTarget || e.toElement) && "HTML" !== e.nodeName || (clearTimeout(D), D = setTimeout(function() {
                $.setIdle(!0)
            }, A.timeToIdleOutside))
        }

        function c(e) {
            var t, n = e.vGap;
            !i.likelyTouchDevice || A.mouseUsed || screen.width > A.fitControlsWidth ? (t = A.barsSize, A.captionEl && "auto" === t.bottom ? (m || ((m = a.createEl("pswp__caption pswp__caption--fake")).appendChild(a.createEl("pswp__caption__center")), h.insertBefore(m, f), a.addClass(h, "pswp__ui--fit")), A.addCaptionHTMLFn(e, m, !0) ? (e = m.clientHeight, n.bottom = parseInt(e, 10) || 44) : n.bottom = t.top) : n.bottom = "auto" === t.bottom ? 0 : t.bottom, n.top = t.top) : n.top = n.bottom = 0
        }

        function d() {
            function e(e) {
                if (e)
                    for (var t = e.length, n = 0; n < t; n++) {
                        o = e[n], r = o.className;
                        for (var i = 0; i < R.length; i++) s = R[i], -1 < r.indexOf("pswp__" + s.name) && (A[s.option] ? (a.removeClass(o, "pswp__element--disabled"), s.onInit && s.onInit(o)) : a.addClass(o, "pswp__element--disabled"))
                    }
            }
            var o, r, s;
            e(h.children);
            var t = a.getChildByClass(h, "pswp__top-bar");
            t && e(t.children)
        }
        var p, h, f, m, v, g, y, b, k, w, x, C, S, T, A, E, _, D, $ = this,
            F = !1,
            j = !0,
            M = !0,
            O = {
                barsSize: {
                    top: 44,
                    bottom: "auto"
                },
                closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                timeToIdle: 4e3,
                timeToIdleOutside: 1e3,
                loadingIndicatorDelay: 1e3,
                addCaptionHTMLFn: function(e, t) {
                    return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
                },
                closeEl: !0,
                captionEl: !0,
                fullscreenEl: !0,
                zoomEl: !0,
                shareEl: !0,
                counterEl: !0,
                arrowEl: !0,
                preloaderEl: !0,
                tapToClose: !1,
                tapToToggleControls: !0,
                clickToCloseNonZoomable: !0,
                shareButtons: [{
                    id: "facebook",
                    label: "Share on Facebook",
                    url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                }, {
                    id: "twitter",
                    label: "Tweet",
                    url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                }, {
                    id: "pinterest",
                    label: "Pin it",
                    url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                }, {
                    id: "download",
                    label: "Download image",
                    url: "{{raw_image_url}}",
                    download: !0
                }],
                getImageURLForShare: function() {
                    return i.currItem.src || ""
                },
                getPageURLForShare: function() {
                    return window.location.href
                },
                getTextForShare: function() {
                    return i.currItem.title || ""
                },
                indexIndicatorSep: " / ",
                fitControlsWidth: 1200
            },
            P = function() {
                for (var e, t, n, i, o = "", r = 0; r < A.shareButtons.length; r++) e = A.shareButtons[r], t = A.getImageURLForShare(e), n = A.getPageURLForShare(e), i = A.getTextForShare(e), o += '<a href="' + e.url.replace("{{url}}", encodeURIComponent(n)).replace("{{image_url}}", encodeURIComponent(t)).replace("{{raw_image_url}}", t).replace("{{text}}", encodeURIComponent(i)) + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", A.parseShareButtonOut && (o = A.parseShareButtonOut(e, o));
                y.children[0].innerHTML = o, y.children[0].onclick = s
            },
            I = 0,
            L = function() {
                clearTimeout(D), I = 0, k && $.setIdle(!1)
            },
            B = function(e) {
                C !== e && (t(x, "preloader--active", !e), C = e)
            },
            R = [{
                name: "caption",
                option: "captionEl",
                onInit: function(e) {
                    f = e
                }
            }, {
                name: "share-modal",
                option: "shareEl",
                onInit: function(e) {
                    y = e
                },
                onTap: function() {
                    r()
                }
            }, {
                name: "button--share",
                option: "shareEl",
                onInit: function(e) {
                    g = e
                },
                onTap: function() {
                    r()
                }
            }, {
                name: "button--zoom",
                option: "zoomEl",
                onTap: i.toggleDesktopZoom
            }, {
                name: "counter",
                option: "counterEl",
                onInit: function(e) {
                    v = e
                }
            }, {
                name: "button--close",
                option: "closeEl",
                onTap: i.close
            }, {
                name: "button--arrow--left",
                option: "arrowEl",
                onTap: i.prev
            }, {
                name: "button--arrow--right",
                option: "arrowEl",
                onTap: i.next
            }, {
                name: "button--fs",
                option: "fullscreenEl",
                onTap: function() {
                    p.isFullscreen() ? p.exit() : p.enter()
                }
            }, {
                name: "preloader",
                option: "preloaderEl",
                onInit: function(e) {
                    x = e
                }
            }];
        $.init = function() {
            var t;
            a.extend(i.options, O, !0), A = i.options, h = a.getChildByClass(i.scrollWrap, "pswp__ui"), (w = i.listen)("onVerticalDrag", function(e) {
                j && e < .95 ? $.hideControls() : !j && .95 <= e && $.showControls()
            }), w("onPinchClose", function(e) {
                j && e < .9 ? ($.hideControls(), t = !0) : t && !j && .9 < e && $.showControls()
            }), w("zoomGestureEnded", function() {
                (t = !1) && !j && $.showControls()
            }), w("beforeChange", $.update), w("doubleTap", function(e) {
                var t = i.currItem.initialZoomLevel;
                i.getZoomLevel() !== t ? i.zoomTo(t, e, 333) : i.zoomTo(A.getDoubleTapZoom(!1, i.currItem), e, 333)
            }), w("preventDragEvent", function(e, t, n) {
                var i = e.target || e.srcElement;
                i && i.getAttribute("class") && -1 < e.type.indexOf("mouse") && (0 < i.getAttribute("class").indexOf("__caption") || /(SMALL|STRONG|EM)/i.test(i.tagName)) && (n.prevent = !1)
            }), w("bindEvents", function() {
                a.bind(h, "pswpTap click", e), a.bind(i.scrollWrap, "pswpTap", $.onGlobalTap), i.likelyTouchDevice || a.bind(i.scrollWrap, "mouseover", $.onMouseOver)
            }), w("unbindEvents", function() {
                M || r(), _ && clearInterval(_), a.unbind(document, "mouseout", u), a.unbind(document, "mousemove", L), a.unbind(h, "pswpTap click", e), a.unbind(i.scrollWrap, "pswpTap", $.onGlobalTap), a.unbind(i.scrollWrap, "mouseover", $.onMouseOver), p && (a.unbind(document, p.eventK, $.updateFullscreen), p.isFullscreen() && (A.hideAnimationDuration = 0, p.exit()), p = null)
            }), w("destroy", function() {
                A.captionEl && (m && h.removeChild(m), a.removeClass(f, "pswp__caption--empty")), y && (y.children[0].onclick = null), a.removeClass(h, "pswp__ui--over-close"), a.addClass(h, "pswp__ui--hidden"), $.setIdle(!1)
            }), A.showAnimationDuration || a.removeClass(h, "pswp__ui--hidden"), w("initialZoomIn", function() {
                A.showAnimationDuration && a.removeClass(h, "pswp__ui--hidden")
            }), w("initialZoomOut", function() {
                a.addClass(h, "pswp__ui--hidden")
            }), w("parseVerticalMargin", c), d(), A.shareEl && g && y && (M = !0), n(), A.timeToIdle && w("mouseUsed", function() {
                a.bind(document, "mousemove", L), a.bind(document, "mouseout", u), _ = setInterval(function() {
                    2 === ++I && $.setIdle(!0)
                }, A.timeToIdle / 2)
            }), A.fullscreenEl && !a.features.isOldAndroid && ((p = p || $.getFullscreenAPI()) ? (a.bind(document, p.eventK, $.updateFullscreen), $.updateFullscreen(), a.addClass(i.template, "pswp--supports-fs")) : a.removeClass(i.template, "pswp--supports-fs")), A.preloaderEl && (B(!0), w("beforeChange", function() {
                clearTimeout(S), S = setTimeout(function() {
                    i.currItem && i.currItem.loading ? i.allowProgressiveImg() && (!i.currItem.img || i.currItem.img.naturalWidth) || B(!1) : B(!0)
                }, A.loadingIndicatorDelay)
            }), w("imageLoadComplete", function(e, t) {
                i.currItem === t && B(!0)
            }))
        }, $.setIdle = function(e) {
            t(h, "ui--idle", k = e)
        }, $.update = function() {
            F = !(!j || !i.currItem) && ($.updateIndexIndicator(), A.captionEl && (A.addCaptionHTMLFn(i.currItem, f), t(f, "caption--empty", !i.currItem.title)), !0), M || r(), n()
        }, $.updateFullscreen = function(e) {
            e && setTimeout(function() {
                i.setScrollOffset(0, a.getScrollY())
            }, 50), a[(p.isFullscreen() ? "add" : "remove") + "Class"](i.template, "pswp--fs")
        }, $.updateIndexIndicator = function() {
            A.counterEl && (v.innerHTML = i.getCurrentIndex() + 1 + A.indexIndicatorSep + A.getNumItemsFn())
        }, $.onGlobalTap = function(e) {
            var t = (e = e || window.event).target || e.srcElement;
            if (!E)
                if (e.detail && "mouse" === e.detail.pointerType) l(t) ? i.close() : a.hasClass(t, "pswp__img") && (1 === i.getZoomLevel() && i.getZoomLevel() <= i.currItem.fitRatio ? A.clickToCloseNonZoomable && i.close() : i.toggleDesktopZoom(e.detail.releasePoint));
                else if (A.tapToToggleControls && (j ? $.hideControls() : $.showControls()), A.tapToClose && (a.hasClass(t, "pswp__img") || l(t))) return void i.close()
        }, $.onMouseOver = function(e) {
            e = (e = e || window.event).target || e.srcElement;
            t(h, "ui--over-close", l(e))
        }, $.hideControls = function() {
            a.addClass(h, "pswp__ui--hidden"), j = !1
        }, $.showControls = function() {
            j = !0, F || $.update(), a.removeClass(h, "pswp__ui--hidden")
        }, $.supportsFullscreen = function() {
            var e = document;
            return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
        }, $.getFullscreenAPI = function() {
            var e, t = document.documentElement,
                n = "fullscreenchange";
            return t.requestFullscreen ? e = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: n
            } : t.mozRequestFullScreen ? e = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "moz" + n
            } : t.webkitRequestFullscreen ? e = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkit" + n
            } : t.msRequestFullscreen && (e = {
                enterK: "msRequestFullscreen",
                exitK: "msExitFullscreen",
                elementK: "msFullscreenElement",
                eventK: "MSFullscreenChange"
            }), e && (e.enter = function() {
                return b = A.closeOnScroll, A.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? i.template[this.enterK]() : void i.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
            }, e.exit = function() {
                return A.closeOnScroll = b, document[this.exitK]()
            }, e.isFullscreen = function() {
                return document[this.elementK]
            }), e
        }
    }
}),
function(s) {
    "use strict";
    var e = "kinetic-active";

    function n() {
        return !1
    }

    function r(e, t) {
        return this.settings = t, this.el = e, this.$el = s(e), this._initElements(), this
    }
    window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1e3 / 60)
    }), s.support = s.support || {}, s.extend(s.support, {
        touch: "ontouchend" in document
    }), r.DATA_KEY = "kinetic", r.DEFAULTS = {
        cursor: "move",
        decelerate: !0,
        triggerHardware: !1,
        threshold: 0,
        y: !0,
        x: !0,
        slowdown: .9,
        maxvelocity: 40,
        throttleFPS: 60,
        movingClass: {
            up: "kinetic-moving-up",
            down: "kinetic-moving-down",
            left: "kinetic-moving-left",
            right: "kinetic-moving-right"
        },
        deceleratingClass: {
            up: "kinetic-decelerating-up",
            down: "kinetic-decelerating-down",
            left: "kinetic-decelerating-left",
            right: "kinetic-decelerating-right"
        }
    }, r.prototype.start = function(e) {
        this.settings = s.extend(this.settings, e), this.velocity = e.velocity || this.velocity, this.velocityY = e.velocityY || this.velocityY, this.settings.decelerate = !1, this._move()
    }, r.prototype.end = function() {
        this.settings.decelerate = !0
    }, r.prototype.stop = function() {
        this.velocity = 0, this.velocityY = 0, this.settings.decelerate = !0, s.isFunction(this.settings.stopped) && this.settings.stopped.call(this)
    }, r.prototype.detach = function() {
        this._detachListeners(), this.$el.removeClass(e).css("cursor", "")
    }, r.prototype.attach = function() {
        this.$el.hasClass(e) || (this._attachListeners(this.$el), this.$el.addClass(e).css("cursor", this.settings.cursor))
    }, r.prototype._initElements = function() {
        this.$el.addClass(e), s.extend(this, {
            xpos: null,
            prevXPos: !1,
            ypos: null,
            prevYPos: !1,
            mouseDown: !1,
            throttleTimeout: 1e3 / this.settings.throttleFPS,
            lastMove: null,
            elementFocused: null
        }), this.velocity = 0, this.velocityY = 0, s(document).mouseup(s.proxy(this._resetMouse, this)).click(s.proxy(this._resetMouse, this)), this._initEvents(), this.$el.css("cursor", this.settings.cursor), this.settings.triggerHardware && this.$el.css({
            "-webkit-transform": "translate3d(0,0,0)",
            "-webkit-perspective": "1000",
            "-webkit-backface-visibility": "hidden"
        })
    }, r.prototype._initEvents = function() {
        var n = this;
        this.settings.events = {
            touchStart: function(e) {
                var t;
                n._useTarget(e.target, e) && (t = e.originalEvent.touches[0], n.threshold = n._threshold(e.target, e), n._start(t.clientX, t.clientY), e.stopPropagation())
            },
            touchMove: function(e) {
                var t;
                n.mouseDown && (t = e.originalEvent.touches[0], n._inputmove(t.clientX, t.clientY), e.preventDefault && e.preventDefault())
            },
            inputDown: function(e) {
                n._useTarget(e.target, e) && (n.threshold = n._threshold(e.target, e), n._start(e.clientX, e.clientY), n.elementFocused = e.target, "IMG" === e.target.nodeName && e.preventDefault(), e.stopPropagation())
            },
            inputEnd: function(e) {
                n._useTarget(e.target, e) && (n._end(), n.elementFocused = null, e.preventDefault && e.preventDefault())
            },
            inputMove: function(e) {
                n.mouseDown && (n._inputmove(e.clientX, e.clientY), e.preventDefault && e.preventDefault())
            },
            scroll: function(e) {
                s.isFunction(n.settings.moved) && n.settings.moved.call(n, n.settings), e.preventDefault && e.preventDefault()
            },
            inputClick: function(e) {
                return 0 < Math.abs(n.velocity) ? (e.preventDefault(), !1) : void 0
            },
            dragStart: function(e) {
                return (!n._useTarget(e.target, e) || !n.elementFocused) && void 0
            }
        }, this._attachListeners(this.$el, this.settings)
    }, r.prototype._inputmove = function(e, t) {
        var n = this.$el;
        if (this.el, (!this.lastMove || new Date > new Date(this.lastMove.getTime() + this.throttleTimeout)) && (this.lastMove = new Date, this.mouseDown && (this.xpos || this.ypos))) {
            var i = e - this.xpos,
                o = t - this.ypos;
            if (0 < this.threshold) {
                var r = Math.sqrt(i * i + o * o);
                if (this.threshold > r) return;
                this.threshold = 0
            }
            this.elementFocused && (s(this.elementFocused).blur(), this.elementFocused = null, n.focus()), this.settings.decelerate = !1, this.velocity = this.velocityY = 0;
            r = this.scrollLeft(), n = this.scrollTop();
            this.scrollLeft(this.settings.x ? r - i : r), this.scrollTop(this.settings.y ? n - o : n), this.prevXPos = this.xpos, this.prevYPos = this.ypos, this.xpos = e, this.ypos = t, this._calculateVelocities(), this._setMoveClasses(this.settings.movingClass), s.isFunction(this.settings.moved) && this.settings.moved.call(this, this.settings)
        }
    }, r.prototype._calculateVelocities = function() {
        this.velocity = this._capVelocity(this.prevXPos - this.xpos, this.settings.maxvelocity), this.velocityY = this._capVelocity(this.prevYPos - this.ypos, this.settings.maxvelocity)
    }, r.prototype._end = function() {
        this.xpos && this.prevXPos && !1 === this.settings.decelerate && (this.settings.decelerate = !0, this._calculateVelocities(), this.xpos = this.prevXPos = this.mouseDown = !1, this._move())
    }, r.prototype._useTarget = function(e, t) {
        return !s.isFunction(this.settings.filterTarget) || !1 !== this.settings.filterTarget.call(this, e, t)
    }, r.prototype._threshold = function(e, t) {
        return s.isFunction(this.settings.threshold) ? this.settings.threshold.call(this, e, t) : this.settings.threshold
    }, r.prototype._start = function(e, t) {
        this.mouseDown = !0, this.velocity = this.prevXPos = 0, this.velocityY = this.prevYPos = 0, this.xpos = e, this.ypos = t
    }, r.prototype._resetMouse = function() {
        this.xpos = !1, this.ypos = !1, this.mouseDown = !1
    }, r.prototype._decelerateVelocity = function(e, t) {
        return 0 === Math.floor(Math.abs(e)) ? 0 : e * t
    }, r.prototype._capVelocity = function(e, t) {
        var n = e;
        return 0 < e ? t < e && (n = t) : e < 0 - t && (n = 0 - t), n
    }, r.prototype._setMoveClasses = function(e) {
        var t = this.settings,
            n = this.$el;
        n.removeClass(t.movingClass.up).removeClass(t.movingClass.down).removeClass(t.movingClass.left).removeClass(t.movingClass.right).removeClass(t.deceleratingClass.up).removeClass(t.deceleratingClass.down).removeClass(t.deceleratingClass.left).removeClass(t.deceleratingClass.right), 0 < this.velocity && n.addClass(e.right), this.velocity < 0 && n.addClass(e.left), 0 < this.velocityY && n.addClass(e.down), this.velocityY < 0 && n.addClass(e.up)
    }, r.prototype._move = function() {
        var e = (this.$el, this.el),
            t = this,
            n = t.settings;
        n.x && 0 < e.scrollWidth ? (this.scrollLeft(this.scrollLeft() + this.velocity), 0 < Math.abs(this.velocity) && (this.velocity = n.decelerate ? t._decelerateVelocity(this.velocity, n.slowdown) : this.velocity)) : this.velocity = 0, n.y && 0 < e.scrollHeight ? (this.scrollTop(this.scrollTop() + this.velocityY), 0 < Math.abs(this.velocityY) && (this.velocityY = n.decelerate ? t._decelerateVelocity(this.velocityY, n.slowdown) : this.velocityY)) : this.velocityY = 0, t._setMoveClasses(n.deceleratingClass), s.isFunction(n.moved) && n.moved.call(this, n), 0 < Math.abs(this.velocity) || 0 < Math.abs(this.velocityY) ? this.moving || (this.moving = !0, window.requestAnimationFrame(function() {
            t.moving = !1, t._move()
        })) : t.stop()
    }, r.prototype._getScroller = function() {
        var e = this.$el;
        return e = this.$el.is("body") || this.$el.is("html") ? s(window) : e
    }, r.prototype.scrollLeft = function(e) {
        var t = this._getScroller();
        return "number" != typeof e ? t.scrollLeft() : (t.scrollLeft(e), void(this.settings.scrollLeft = e))
    }, r.prototype.scrollTop = function(e) {
        var t = this._getScroller();
        return "number" != typeof e ? t.scrollTop() : (t.scrollTop(e), void(this.settings.scrollTop = e))
    }, r.prototype._attachListeners = function() {
        var e = this.$el,
            t = this.settings;
        s.support.touch && e.bind("touchstart", t.events.touchStart).bind("touchend", t.events.inputEnd).bind("touchmove", t.events.touchMove), e.mousedown(t.events.inputDown).mouseup(t.events.inputEnd).mousemove(t.events.inputMove), e.click(t.events.inputClick).scroll(t.events.scroll).bind("selectstart", n).bind("dragstart", t.events.dragStart)
    }, r.prototype._detachListeners = function() {
        var e = this.$el,
            t = this.settings;
        s.support.touch && e.unbind("touchstart", t.events.touchStart).unbind("touchend", t.events.inputEnd).unbind("touchmove", t.events.touchMove), e.unbind("mousedown", t.events.inputDown).unbind("mouseup", t.events.inputEnd).unbind("mousemove", t.events.inputMove), e.unbind("click", t.events.inputClick).unbind("scroll", t.events.scroll).unbind("selectstart", n).unbind("dragstart", t.events.dragStart)
    }, s.Kinetic = r, s.fn.kinetic = function(i, o) {
        return this.each(function() {
            var e = s(this),
                t = e.data(r.DATA_KEY),
                n = s.extend({}, r.DEFAULTS, e.data(), "object" == typeof i && i);
            t || e.data(r.DATA_KEY, t = new r(this, n)), "string" == typeof i && t[i](o)
        })
    }
}(window.jQuery || window.Zepto),
function(c) {
    "use strict";

    function i(e, t) {
        if (!(this instanceof i)) {
            var n = new i(e, t);
            return n.open(), n
        }
        this.id = i.id++, this.setup(e, t), this.chainCallbacks(i._callbackChain)
    }
    if (void 0 === c) return "console" in window && window.console.info("Too much lightness, Featherlight needs jQuery.");
    if (c.fn.jquery.match(/-ajax/)) return "console" in window && window.console.info("Featherlight needs regular jQuery, not the slim version.");

    function o(t) {
        return s = c.grep(s, function(e) {
            return e !== t && 0 < e.$instance.closest("body").length
        })
    }

    function n(e) {
        c.each(i.opened().reverse(), function() {
            return e.isDefaultPrevented() || !1 !== this[l[e.type]](e) ? void 0 : (e.preventDefault(), e.stopPropagation(), !1)
        })
    }

    function r(e) {
        var t;
        e !== i._globalHandlerInstalled && (i._globalHandlerInstalled = e, t = c.map(l, function(e, t) {
            return t + "." + i.prototype.namespace
        }).join(" "), c(window)[e ? "on" : "off"](t, n))
    }
    var s = [],
        a = {
            allow: 1,
            allowfullscreen: 1,
            frameborder: 1,
            height: 1,
            longdesc: 1,
            marginheight: 1,
            marginwidth: 1,
            mozallowfullscreen: 1,
            name: 1,
            referrerpolicy: 1,
            sandbox: 1,
            scrolling: 1,
            src: 1,
            srcdoc: 1,
            style: 1,
            webkitallowfullscreen: 1,
            width: 1
        },
        l = {
            keyup: "onKeyUp",
            resize: "onResize"
        };
    i.prototype = {
        constructor: i,
        namespace: "featherlight",
        targetAttr: "data-featherlight",
        variant: null,
        resetCss: !1,
        background: null,
        openTrigger: "click",
        closeTrigger: "click",
        filter: null,
        root: "body",
        openSpeed: 250,
        closeSpeed: 250,
        closeOnClick: "background",
        closeOnEsc: !0,
        closeIcon: "&#10005;",
        loading: "",
        persist: !1,
        otherClose: null,
        beforeOpen: c.noop,
        beforeContent: c.noop,
        beforeClose: c.noop,
        afterOpen: c.noop,
        afterContent: c.noop,
        afterClose: c.noop,
        onKeyUp: c.noop,
        onResize: c.noop,
        type: null,
        contentFilters: ["jquery", "image", "html", "ajax", "iframe", "text"],
        setup: function(e, t) {
            "object" != typeof e || e instanceof c != 0 || t || (t = e, e = void 0);
            var n = c.extend(this, t, {
                    target: e
                }),
                e = n.resetCss ? n.namespace + "-reset" : n.namespace,
                e = c(n.background || ['<div class="' + e + "-loading " + e + '">', '<div class="' + e + '-content">', '<button class="' + e + "-close-icon " + n.namespace + '-close" aria-label="Close">', n.closeIcon, "</button>", '<div class="' + n.namespace + '-inner">' + n.loading + "</div>", "</div>", "</div>"].join("")),
                i = "." + n.namespace + "-close" + (n.otherClose ? "," + n.otherClose : "");
            return n.$instance = e.clone().addClass(n.variant), n.$instance.on(n.closeTrigger + "." + n.namespace, function(e) {
                var t;
                e.isDefaultPrevented() || (t = c(e.target), ("background" === n.closeOnClick && t.is("." + n.namespace) || "anywhere" === n.closeOnClick || t.closest(i).length) && (n.close(e), e.preventDefault()))
            }), this
        },
        getContent: function() {
            if (!1 !== this.persist && this.$content) return this.$content;

            function e(e) {
                return t.$currentTarget && t.$currentTarget.attr(e)
            }
            var t = this,
                n = this.constructor.contentFilters,
                i = e(t.targetAttr),
                o = t.target || i || "",
                r = n[t.type];
            if (!r && o in n && (r = n[o], o = t.target && i), o = o || e("href") || "", !r)
                for (var s in n) t[s] && (r = n[s], o = t[s]);
            if (!r) {
                var a = o,
                    o = null;
                if (c.each(t.contentFilters, function() {
                        return r = n[this], !(o = !(o = r.test ? r.test(a) : o) && r.regex && a.match && a.match(r.regex) ? a : o)
                    }), !o) return "console" in window && window.console.error("Featherlight: no content filter found " + (a ? ' for "' + a + '"' : " (no target specified)")), !1
            }
            return r.process.call(t, o)
        },
        setContent: function(e) {
            return this.$instance.removeClass(this.namespace + "-loading"), this.$instance.toggleClass(this.namespace + "-iframe", e.is("iframe")), this.$instance.find("." + this.namespace + "-inner").not(e).slice(1).remove().end().replaceWith(c.contains(this.$instance[0], e[0]) ? "" : e), this.$content = e.addClass(this.namespace + "-inner"), this
        },
        open: function(t) {
            var n = this;
            if (n.$instance.hide().appendTo(n.root), !(t && t.isDefaultPrevented() || !1 === n.beforeOpen(t))) {
                t && t.preventDefault();
                var e = n.getContent();
                if (e) return s.push(n), r(!0), n.$instance.fadeIn(n.openSpeed), n.beforeContent(t), c.when(e).always(function(e) {
                    n.setContent(e), n.afterContent(t)
                }).then(n.$instance.promise()).done(function() {
                    n.afterOpen(t)
                })
            }
            return n.$instance.detach(), c.Deferred().reject().promise()
        },
        close: function(e) {
            var t = this,
                n = c.Deferred();
            return !1 === t.beforeClose(e) ? n.reject() : (0 === o(t).length && r(!1), t.$instance.fadeOut(t.closeSpeed, function() {
                t.$instance.detach(), t.afterClose(e), n.resolve()
            })), n.promise()
        },
        resize: function(e, t) {
            var n;
            e && t && (this.$content.css("width", "").css("height", ""), 1 < (n = Math.max(e / (this.$content.parent().width() - 1), t / (this.$content.parent().height() - 1))) && (n = t / Math.floor(t / n), this.$content.css("width", e / n + "px").css("height", t / n + "px")))
        },
        chainCallbacks: function(e) {
            for (var t in e) this[t] = c.proxy(e[t], this, c.proxy(this[t], this))
        }
    }, c.extend(i, {
        id: 0,
        autoBind: "[data-featherlight]",
        defaults: i.prototype,
        contentFilters: {
            jquery: {
                regex: /^[#.]\w/,
                test: function(e) {
                    return e instanceof c && e
                },
                process: function(e) {
                    return !1 !== this.persist ? c(e) : c(e).clone(!0)
                }
            },
            image: {
                regex: /\.(png|jpg|jpeg|gif|tiff?|bmp|svg)(\?\S*)?$/i,
                process: function(e) {
                    var t = c.Deferred(),
                        n = new Image,
                        i = c('<img src="' + e + '" alt="" class="' + this.namespace + '-image" />');
                    return n.onload = function() {
                        i.naturalWidth = n.width, i.naturalHeight = n.height, t.resolve(i)
                    }, n.onerror = function() {
                        t.reject(i)
                    }, n.src = e, t.promise()
                }
            },
            html: {
                regex: /^\s*<[\w!][^<]*>/,
                process: function(e) {
                    return c(e)
                }
            },
            ajax: {
                regex: /./,
                process: function(e) {
                    var n = c.Deferred(),
                        i = c("<div></div>").load(e, function(e, t) {
                            "error" !== t && n.resolve(i.contents()), n.fail()
                        });
                    return n.promise()
                }
            },
            iframe: {
                process: function(e) {
                    var t = new c.Deferred,
                        n = c("<iframe/>"),
                        i = function(e, t) {
                            var n, i = {},
                                o = new RegExp("^" + t + "([A-Z])(.*)");
                            for (n in e) {
                                var r = n.match(o);
                                r && (i[(r[1] + r[2].replace(/([A-Z])/g, "-$1")).toLowerCase()] = e[n])
                            }
                            return i
                        }(this, "iframe"),
                        o = function(e, t) {
                            var n, i = {};
                            for (n in e) n in t && (i[n] = e[n], delete e[n]);
                            return i
                        }(i, a);
                    return n.hide().attr("src", e).attr(o).css(i).on("load", function() {
                        t.resolve(n.show())
                    }).appendTo(this.$instance.find("." + this.namespace + "-content")), t.promise()
                }
            },
            text: {
                process: function(e) {
                    return c("<div>", {
                        text: e
                    })
                }
            }
        },
        functionAttributes: ["beforeOpen", "afterOpen", "beforeContent", "afterContent", "beforeClose", "afterClose"],
        readElementConfig: function(e, t) {
            var n = this,
                i = new RegExp("^data-" + t + "-(.*)"),
                o = {};
            return e && e.attributes && c.each(e.attributes, function() {
                var e = this.name.match(i);
                if (e) {
                    var t = this.value,
                        e = c.camelCase(e[1]);
                    if (0 <= c.inArray(e, n.functionAttributes)) t = new Function(t);
                    else try {
                        t = JSON.parse(t)
                    } catch (e) {}
                    o[e] = t
                }
            }), o
        },
        extend: function(e, t) {
            function n() {
                this.constructor = e
            }
            return n.prototype = this.prototype, e.prototype = new n, e.__super__ = this.prototype, c.extend(e, this, t), e.defaults = e.prototype, e
        },
        attach: function(o, r, s) {
            var a = this;
            "object" != typeof r || r instanceof c != 0 || s || (s = r, r = void 0);
            var l, e = (s = c.extend({}, s)).namespace || a.defaults.namespace,
                u = c.extend({}, a.defaults, a.readElementConfig(o[0], e), s),
                e = function(e) {
                    var t = c(e.currentTarget),
                        n = c.extend({
                            $source: o,
                            $currentTarget: t
                        }, a.readElementConfig(o[0], u.namespace), a.readElementConfig(e.currentTarget, u.namespace), s),
                        i = l || t.data("featherlight-persisted") || new a(r, n);
                    "shared" === i.persist ? l = i : !1 !== i.persist && t.data("featherlight-persisted", i), n.$currentTarget.blur && n.$currentTarget.blur(), i.open(e)
                };
            return o.on(u.openTrigger + "." + u.namespace, u.filter, e), {
                filter: u.filter,
                handler: e
            }
        },
        current: function() {
            var e = this.opened();
            return e[e.length - 1] || null
        },
        opened: function() {
            var t = this;
            return o(), c.grep(s, function(e) {
                return e instanceof t
            })
        },
        close: function(e) {
            var t = this.current();
            return t ? t.close(e) : void 0
        },
        _onReady: function() {
            var i, o = this;
            o.autoBind && ((i = c(o.autoBind)).each(function() {
                o.attach(c(this))
            }), c(document).on("click", o.autoBind, function(e) {
                var t, n;
                e.isDefaultPrevented() || (t = c(e.currentTarget), i.length !== (i = i.add(t)).length && (!(n = o.attach(t)).filter || 0 < c(e.target).parentsUntil(t, n.filter).length) && n.handler(e))
            }))
        },
        _callbackChain: {
            onKeyUp: function(e, t) {
                return 27 === t.keyCode ? (this.closeOnEsc && c.featherlight.close(t), !1) : e(t)
            },
            beforeOpen: function(e, t) {
                return c(document.documentElement).addClass("with-featherlight"), this._previouslyActive = document.activeElement, this._$previouslyTabbable = c("a, input, select, textarea, iframe, button, iframe, [contentEditable=true]").not("[tabindex]").not(this.$instance.find("button")), this._$previouslyWithTabIndex = c("[tabindex]").not('[tabindex="-1"]'), this._previousWithTabIndices = this._$previouslyWithTabIndex.map(function(e, t) {
                    return c(t).attr("tabindex")
                }), this._$previouslyWithTabIndex.add(this._$previouslyTabbable).attr("tabindex", -1), document.activeElement.blur && document.activeElement.blur(), e(t)
            },
            afterClose: function(e, t) {
                var t = e(t),
                    n = this;
                return this._$previouslyTabbable.removeAttr("tabindex"), this._$previouslyWithTabIndex.each(function(e, t) {
                    c(t).attr("tabindex", n._previousWithTabIndices[e])
                }), this._previouslyActive.focus(), 0 === i.opened().length && c(document.documentElement).removeClass("with-featherlight"), t
            },
            onResize: function(e, t) {
                return this.resize(this.$content.naturalWidth, this.$content.naturalHeight), e(t)
            },
            afterContent: function(e, t) {
                e = e(t);
                return this.$instance.find("[autofocus]:not([disabled])").focus(), this.onResize(t), e
            }
        }
    }), c.featherlight = i, c.fn.featherlight = function(e, t) {
        return i.attach(this, e, t), this
    }, c(document).ready(function() {
        i._onReady()
    })
}(jQuery), window.addEventListener("DOMContentLoaded", function() {
    "use strict";

    function getUrlParameter(e) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        e = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
        return null === e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "))
    }
    window.unicornplatform = {};
    let elementsWithMask = document.querySelectorAll("[data-mask]");
    if (0 < elementsWithMask.length && void 0 !== window.IMask)
        for (let index = 0; index < elementsWithMask.length; index++) {
            const element = elementsWithMask[index],
                elementMask = element.getAttribute("data-mask");
            let mask = IMask(element, {
                mask: elementMask
            })
        }

    function removeParam(e) {
        var t = window.location.href,
            n = t.split("?")[0],
            i = [],
            t = -1 !== t.indexOf("?") ? t.split("?")[1] : "";
        if ("" !== t) {
            for (var o = (i = t.split("&")).length - 1; 0 <= o; --o) i[o].split("=")[0] === e && i.splice(o, 1);
            n = n + "?" + i.join("&")
        }
        return n
    }

    function isMobile() {
        return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || window.opera)
    }

    function isTablet() {
        return /(ipad|iPad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(navigator.userAgent)
    }

    function isPhone() {
        return Math.min(window.screen.width, window.screen.height) < 500
    }! function() {
        let e = $("body");
        isMobile() ? e.addClass("body--mobile") : e.addClass("body--desktop"), isTablet() && e.addClass("body--tablet"), isPhone() && e.addClass("body--phone"), e.addClass("body--loaded")
    }();
    var message = {
        show: rua,
        hide: sua,
        init: function() {
            $(document).on("click", ".js-open-engaging-message", function(e) {
                e.preventDefault();
                e = $(this).attr("data-index");
                rua($('.js-engaging-message[data-index="' + e + '"]'))
            }), wua(), $(document).on("click", ".js-close-message", function(e) {
                e.preventDefault(), sua([$(this).parents(".js-message")])
            })
        }
    };

    function rua(e, t) {
        t && e.find(".js-error-message-text").text(t), e.addClass("state-visible")
    }

    function sua(e) {
        for (var t, n = e.length, i = 0; i < n; i++) e[i].removeClass("state-visible"), (t = e[i]).removeClass("state-reacted"), t.find(".js-react-on-message").removeAttr("disabled")
    }

    function wua() {
        $(document).on("click", ".js-react-on-message", function(e) {
            var t, n;
            e.preventDefault(), t = $(this), n = t.parents(".js-message"), (e = n).addClass("state-reacted"), e.find(".js-react-on-message").attr("disabled", "disabled"), t = t.text(), n.find(".js-reaction-text").text(t)
        })
    }
    message.init();
    var button = {
            showSuccessTick: function(e) {
                e.addClass("state-show-success-tick")
            },
            removeSuccessTick: function(e) {
                e.removeClass("state-show-success-tick")
            },
            disableSubmit: function(e) {
                e.attr("disabled", "disabled")
            },
            enableSubmit: function(e) {
                e.removeAttr("disabled")
            },
            showSpinner: function(e) {
                e.addClass("state-show-spinner")
            },
            stopSpinner: function(e) {
                e.removeClass("state-show-spinner")
            }
        },
        submitNoIntegrationForm = {
            init: function() {
                for (var e = $(".js-no-integration-form"), t = e.length, n = 0; n < t; n++) ! function(e) {
                    var t = e.find(".js-engaging-message"),
                        n = e.find(".js-success-message"),
                        i = e.find(".js-error-message"),
                        o = e.find(".js-submit-button"),
                        r = e.find(".js-form-input"),
                        s = r.not("textarea");
                    e.attr("success-redirect"), e.on("submit", function(e) {
                        e.preventDefault(), $(this), message.show(i, "The form is not connected to any integration.")
                    }), s.on("keypress", "", function(e) {
                        if (13 === e.which) return o.trigger("click"), !1
                    }), r.on("focus", "", function(e) {
                        e.preventDefault(), message.hide([n, t, i])
                    }).on("blur", "", function(e) {
                        e.preventDefault()
                    })
                }(e.eq(n))
            }
        },
        kya, lya;

    function evaluateCodeAfterFormSubmission(codeString, $emailFormObject) {
        if (codeString && 0 !== codeString.length) try {
            var formDataSerialize = $emailFormObject.serialize(),
                formDataSerializeArray = $emailFormObject.serializeArray(),
                formDataKeyValue = $emailFormObject.serializeArray().reduce(function(e, t) {
                    return e[t.name] = t.value, e
                }, {});
            eval(codeString)
        } catch (e) {
            console.error('⚠️ Your "after form submission" JS code has failed to execute.'), console.error("The code: "), console.info(codeString), console.error("The error message: "), console.info(e)
        }
    }

    function redirectAfterFormSubmission(e, t, n, i) {
        void 0 !== e && 0 < e.length && (-1 !== (e = e).indexOf(".") && -1 === e.indexOf("http://") && -1 === e.indexOf("https://") && (e = "http://" + e), "True" === n && (e = -1 !== e.indexOf("?") ? e + "&" + i : e + "?" + i), window.open(e, "True" === t ? "_blank" : "_self"))
    }

    function mya(e) {
        for (var t, n = e.find(".js-tab-content-item"), i = 0, o = n.length, r = 0; r < o; r++) i < (t = n.eq(r).outerHeight()) && (i = t);
        20 < i && e.css({
            height: i
        })
    }

    function nya() {
        for (var e = 0; e < lya; e++) mya(kya.eq(e))
    }

    function oya() {
        var e, u;
        nya(), e = !1, window.addEventListener("resize", function() {
            clearTimeout(e), e = setTimeout(nya, 350)
        }), u = setInterval(function() {
            if ($(".js-tabs-item-list.state-loaded").length === lya) clearInterval(u);
            else
                for (var e = $(".js-tabs-item-list:not(.state-loaded)"), t = e.length, n = 0; n < t; n++) {
                    for (var i = e.eq(n), o = i.find(".js-tab-content-item"), r = o.length, s = 0; s < r; s++) {
                        var a = o.eq(s),
                            l = a.find("img");
                        (0 === l.length || !1 === a.hasClass("state-loaded") && l[0].complete) && a.addClass("state-loaded")
                    }
                    r === i.find(".js-tab-content-item.state-loaded").length && (i.addClass("state-loaded"), mya(i))
                }
        }, 500)
    }
    submitNoIntegrationForm.init(), window.unicornplatform.subscribeMailchimpForm = {
        init: function() {
            for (var e = $(".js-subscribe-mailchimp-form"), t = e.length, n = 0; n < t; n++) ! function(n) {
                var i = n.find(".js-engaging-message"),
                    o = n.find(".js-success-message"),
                    r = n.find(".js-error-message"),
                    s = n.find(".js-submit-button"),
                    e = n.find(".js-form-input"),
                    t = e.not("textarea"),
                    a = n.attr("data-redirect-url"),
                    l = n.attr("data-redirect-target-blank"),
                    u = n.attr("data-pass-values-redirect"),
                    c = n.attr("data-success-code");
                n.on("submit", function(e) {
                    var t;
                    e.preventDefault(), $(this), button.showSpinner(s), button.disableSubmit(s), $.ajax({
                        type: n.attr("method"),
                        url: (t = n.attr("action"), e = "", e = t.replace(/post\?u=/i, "post-json?u="), e += "&c=?"),
                        data: n.serialize(),
                        cache: !1,
                        dataType: "json",
                        contentType: "application/json; charset=utf-8"
                    }).done(function(e) {
                        "success" != e.result ? (message.hide([o, i, r]), message.show(r, e.msg), button.stopSpinner(s), button.enableSubmit(s)) : (message.hide([o, i, r]), button.showSuccessTick(s), setTimeout(function() {
                            button.stopSpinner(s)
                        }, 200), setTimeout(function() {
                            button.removeSuccessTick(s), button.enableSubmit(s)
                        }, 3e3), evaluateCodeAfterFormSubmission(c, n), redirectAfterFormSubmission(a, l, u, n.serialize()))
                    }).fail(function(e) {
                        button.stopSpinner(s), button.enableSubmit(s), message.hide([o, i, r]), message.show(r, "Uh. We could not connect to the server. Please try again later."), console.log(e)
                    }).always(function(e) {})
                }), t.on("keypress", "", function(e) {
                    if (13 === e.which) return s.trigger("click"), !1
                }), e.on("focus", "", function(e) {
                    e.preventDefault(), message.hide([o, i, r])
                }).on("blur", "", function(e) {
                    e.preventDefault()
                })
            }(e.eq(n))
        }
    }, window.unicornplatform.subscribeMailchimpForm.init(), window.unicornplatform.subscribeZapierForm = {
        init: function() {
            for (var e = $(".js-subscribe-zapier-form"), t = e.length, n = 0; n < t; n++) ! function(t) {
                var n = t.find(".js-engaging-message"),
                    i = t.find(".js-success-message"),
                    o = t.find(".js-error-message"),
                    r = t.find(".js-submit-button"),
                    e = t.find(".js-form-input"),
                    s = e.not("textarea"),
                    a = t.attr("data-redirect-url"),
                    l = t.attr("data-redirect-target-blank"),
                    u = t.attr("data-pass-values-redirect"),
                    c = t.attr("data-success-code");
                t.on("submit", function(e) {
                    e.preventDefault(), $(this), button.showSpinner(r), button.disableSubmit(r), $.ajax({
                        type: t.attr("method"),
                        url: t.attr("action"),
                        data: t.serialize(),
                        cache: !1,
                        dataType: "json"
                    }).done(function(e) {
                        "success" !== e.status ? (message.hide([i, n, o]), message.show(o, "There is an unknown error. We are so sorry!"), button.stopSpinner(r), button.enableSubmit(r)) : (message.hide([i, n, o]), button.showSuccessTick(r), setTimeout(function() {
                            button.stopSpinner(r)
                        }, 200), setTimeout(function() {
                            button.removeSuccessTick(r), button.enableSubmit(r)
                        }, 3e3), evaluateCodeAfterFormSubmission(c, t), redirectAfterFormSubmission(a, l, u, t.serialize()))
                    }).fail(function(e) {
                        button.stopSpinner(r), button.enableSubmit(r), message.hide([i, n, o]), message.show(o, "Uh. We could not connect to the server. Please try again later."), console.log(e)
                    }).always(function(e) {})
                }), s.on("keypress", "", function(e) {
                    if (13 === e.which) return r.trigger("click"), !1
                }), e.on("focus", "", function(e) {
                    e.preventDefault(), message.hide([i, n, o])
                }).on("blur", "", function(e) {
                    e.preventDefault()
                })
            }(e.eq(n))
        }
    }, window.unicornplatform.subscribeZapierForm.init(), window.unicornplatform.subscribeGoogleSheetForm = {
        init: function() {
            for (var e = $(".js-subscribe-google-sheet-form"), t = e.length, n = 0; n < t; n++) ! function(t) {
                var n = t.find(".js-engaging-message"),
                    i = t.find(".js-success-message"),
                    o = t.find(".js-error-message"),
                    r = t.find(".js-submit-button"),
                    e = t.find(".js-form-input"),
                    s = e.not("textarea"),
                    a = t.attr("data-redirect-url"),
                    l = t.attr("data-redirect-target-blank"),
                    u = t.attr("data-sheet-id"),
                    c = t.attr("data-pass-values-redirect"),
                    d = t.attr("data-success-code");
                t.on("submit", function(e) {
                    e.preventDefault(), $(this), button.showSpinner(r), button.disableSubmit(r), $.ajax({
                        type: t.attr("method"),
                        url: t.attr("action"),
                        data: t.serialize() + "&SHEET_ID=" + u,
                        cache: !1,
                        dataType: "json"
                    }).done(function(e) {
                        "success" !== e.status ? (message.hide([i, n, o]), message.show(o, 'There was an error. Perhaps you deleted the "ID" column or revoked access to the sheet? Re-adding the integration usually helps.'), button.stopSpinner(r), button.enableSubmit(r)) : (message.hide([i, n, o]), button.showSuccessTick(r), setTimeout(function() {
                            button.stopSpinner(r)
                        }, 200), setTimeout(function() {
                            button.removeSuccessTick(r), button.enableSubmit(r)
                        }, 3e3), evaluateCodeAfterFormSubmission(d, t), redirectAfterFormSubmission(a, l, c, t.serialize()))
                    }).fail(function(e) {
                        button.stopSpinner(r), button.enableSubmit(r), message.hide([i, n, o]), message.show(o, 'Uh. We could not connect to the server. Please try again later. Perhaps you deleted the "ID" column or revoked access to the sheet? Re-adding the integration usually helps.'), console.log(e)
                    }).always(function(e) {})
                }), s.on("keypress", "", function(e) {
                    if (13 === e.which) return r.trigger("click"), !1
                }), e.on("focus", "", function(e) {
                    e.preventDefault(), message.hide([i, n, o])
                }).on("blur", "", function(e) {
                    e.preventDefault()
                })
            }(e.eq(n))
        }
    }, window.unicornplatform.subscribeGoogleSheetForm.init(), window.unicornplatform.subscribeWebhookForm = {
        init: function() {
            for (var e = $(".js-subscribe-webhook-form"), t = e.length, n = 0; n < t; n++) ! function(t) {
                var n = t.find(".js-engaging-message"),
                    i = t.find(".js-success-message"),
                    o = t.find(".js-error-message"),
                    r = t.find(".js-submit-button"),
                    e = t.find(".js-form-input"),
                    s = e.not("textarea"),
                    a = t.attr("data-redirect-url"),
                    l = t.attr("data-redirect-target-blank"),
                    u = t.attr("data-pass-values-redirect"),
                    c = t.attr("data-success-code");
                t.on("submit", function(e) {
                    e.preventDefault(), $(this), button.showSpinner(r), button.disableSubmit(r), $.ajax({
                        type: t.attr("method"),
                        url: t.attr("action"),
                        data: t.serialize(),
                        cache: !1
                    }).done(function(e) {
                        message.hide([i, n, o]), button.showSuccessTick(r), setTimeout(function() {
                            button.stopSpinner(r)
                        }, 200), setTimeout(function() {
                            button.removeSuccessTick(r), button.enableSubmit(r)
                        }, 3e3), evaluateCodeAfterFormSubmission(c, t), redirectAfterFormSubmission(a, l, u, t.serialize())
                    }).fail(function(e) {
                        button.stopSpinner(r), button.enableSubmit(r);
                        var t = "Uh. We could not connect to the server. Please try again later.";
                        void 0 !== e.responseJSON && void 0 !== e.responseJSON.error && (t = e.responseJSON.error), message.hide([i, n, o]), message.show(o, t)
                    }).always(function(e) {})
                }), s.on("keypress", "", function(e) {
                    if (13 === e.which) return r.trigger("click"), !1
                }), e.on("focus", "", function(e) {
                    e.preventDefault(), message.hide([i, n, o])
                }).on("blur", "", function(e) {
                    e.preventDefault()
                })
            }(e.eq(n))
        }
    }, window.unicornplatform.subscribeWebhookForm.init(), window.unicornplatform.subscribeSendToEmailForm = {
        init: function() {
            for (var e = $(".js-subscribe-email-form"), t = e.length, n = 0; n < t; n++) ! function(t) {
                var n = t.find(".js-engaging-message"),
                    i = t.find(".js-success-message"),
                    o = t.find(".js-error-message"),
                    r = t.find(".js-submit-button"),
                    e = t.find(".js-form-input"),
                    s = e.not("textarea"),
                    a = t.attr("data-redirect-url"),
                    l = t.attr("data-redirect-target-blank"),
                    u = t.attr("data-pass-values-redirect"),
                    c = t.attr("data-success-code");
                t.on("submit", function(e) {
                    e.preventDefault(), $(this), button.showSpinner(r), button.disableSubmit(r), $.ajax({
                        type: t.attr("method"),
                        url: t.attr("action"),
                        data: t.serialize(),
                        cache: !1
                    }).done(function(e) {
                        message.hide([i, n, o]), button.showSuccessTick(r), setTimeout(function() {
                            button.stopSpinner(r)
                        }, 200), setTimeout(function() {
                            button.removeSuccessTick(r), button.enableSubmit(r)
                        }, 3e3), evaluateCodeAfterFormSubmission(c, t), redirectAfterFormSubmission(a, l, u, t.serialize())
                    }).fail(function(e) {
                        button.stopSpinner(r), button.enableSubmit(r);
                        var t = "Uh. We could not connect to the server. Please try again later.";
                        void 0 !== e.responseJSON && void 0 !== e.responseJSON.error && (t = e.responseJSON.error), message.hide([i, n, o]), message.show(o, t)
                    }).always(function(e) {})
                }), s.on("keypress", "", function(e) {
                    if (13 === e.which) return r.trigger("click"), !1
                }), e.on("focus", "", function(e) {
                    e.preventDefault(), message.hide([i, n, o])
                }).on("blur", "", function(e) {
                    e.preventDefault()
                })
            }(e.eq(n))
        }
    }, window.unicornplatform.subscribeSendToEmailForm.init(), window.unicornplatform.roadmapScroll = {
        init: function() {
            var e = $("#js-roadmap-wrapper");
            0 < e.length && (function() {
                var e = 700;
                isMobile() && (e = 150);
                var t = $(".js-roadmap-item"),
                    e = t.length * (t.eq(0).width() + 60) + e;
                $(".js-roadmap-box").css("width", e)
            }(), isMobile() || e.kinetic({
                maxvelocity: 30
            }))
        }
    }, window.unicornplatform.roadmapScroll.init(), window.unicornplatform.slider = {
        init: function() {
            for (var e = $(".js-slider"), t = e.length, n = "", i = 0; i < t; i++) {
                n = e.eq(i);
                var o = JSON.parse(n.attr("data-slider-config")),
                    r = n.parent().find(".js-prev-arrow"),
                    s = n.parent().find(".js-next-arrow");
                0 < r.length && 0 < s.length ? (o.prevArrow = r, o.nextArrow = s) : o.arrows = !1, n.hasClass("slick-initialized") || n.slick(o)
            }
        }
    }, window.unicornplatform.slider.init(), window.unicornplatform.tabs = {
        init: function() {
            kya = $(".js-tabs-item-list"), 0 < (lya = kya.length) && oya(), $(document).on("click", ".js-open-tab", function(e) {
                if (e.preventDefault(), $(this).hasClass("state-active-tab")) return !1;
                var t = $(this).attr("data-index"),
                    e = $(this).attr("data-group");
                $('.js-open-tab[data-group="' + e + '"]').removeClass("state-active-tab"), $(this).addClass("state-active-tab"), $('.js-tab-content[data-group="' + e + '"]').removeClass("state-active-tab"), $('.js-tab-content[data-group="' + e + '"][data-index="' + t + '"]').addClass("state-active-tab")
            })
        },
        setAll: nya
    }, window.unicornplatform.tabs.init();
    var showContentOnClick = {
        bind: function() {
            $(document).on("mouseenter", ".js-hover-to-show-sibling", function(e) {
                e.preventDefault(), $(this).siblings(".js-content-to-show").addClass("state-visible")
            }), $(document).on("mouseleave", ".js-hover-to-show-sibling", function(e) {
                e.preventDefault(), $(this).siblings(".js-content-to-show").removeClass("state-visible")
            })
        }
    };
    showContentOnClick.bind();
    var clipboard = new ClipboardJS(".js-copy-text");
    clipboard.on("success", function(e) {
        var t = $(e.trigger);
        button.showSuccessTick(t), button.disableSubmit(t), setTimeout(function() {
            button.removeSuccessTick(t), button.enableSubmit(t)
        }, 3e3)
    }), clipboard.on("error", function(e) {
        console.error("Copy action error: ", e.action), console.error("Trigger:", e.trigger)
    });
    var faqToggle = {
        init: function() {
            $(document).on("click", ".js-open-faq", function(e) {
                e.preventDefault(), $(this).find(".js-faq-item").slideToggle(200), $(this).toggleClass("state-active")
            }), $(document).on("click", ".js-open-faq a", function(e) {
                e.stopPropagation()
            })
        }
    };
    faqToggle.init();
    var openMenu = (hza = $("body"), {
            bind: function() {
                $(document).on("click", ".js-open-menu", function(e) {
                    e.preventDefault();
                    var t = $(this).parents(".js-menu");
                    $(this).hasClass("state-active-burger") ? jza(t, $(this)) : (e = t, t = $(this), e.addClass("state-opened-menu"), t.addClass("state-active-burger"), hza.addClass("state-fixed-body"))
                })
            },
            close: jza
        }),
        hza;

    function jza(e, t) {
        e.removeClass("state-opened-menu"), t.removeClass("state-active-burger"), hza.removeClass("state-fixed-body")
    }
    openMenu.bind();
    var toggleDropdown = {
        bind: function() {
            var n = $(".js-toggle-dropdown");
            $(document).on("click", ".js-toggle-dropdown", function(e) {
                var t = $(this);
                $(this).hasClass("state-opened-dropdown") ? sza(t) : (sza(n), t.addClass("state-opened-dropdown"))
            }), $(document).on("click", function(e) {
                !0 === $(e.target).hasClass("js-toggle-dropdown") || 1 === $(e.target).parents(".js-toggle-dropdown").length || sza(n)
            })
        },
        close: sza
    };

    function sza(e) {
        e.removeClass("state-opened-dropdown")
    }
    toggleDropdown.bind();
    var scrollDown = {
        bind: function() {
            $(document).on("click", ".js-scroll-down", function(e) {
                e.preventDefault();
                e = $(this).parents(".js-scroll-this-box"), e = e.outerHeight() + e.position().top;
                $("html, body").animate({
                    scrollTop: e
                }, 450)
            })
        }
    };
    scrollDown.bind();
    var highlightHeadingWord = {
        init: function() {
            $(".js-scroll-down").addClass("state-active")
        }
    };
    highlightHeadingWord.init();
    var interactions = {
        bind: function() {
            $(document).on("click", ".js-toggle-animation", function(e) {
                e.preventDefault(), $(this).toggleClass("state-active-animation")
            })
        }
    };
    interactions.bind();
    var lightbox = {
        bind: function() {
            $(document).on("click", ".js-lightbox-single-image", function(e) {
                e.preventDefault();
                var t = document.querySelectorAll(".pswp")[0],
                    n = $(this).attr("src"),
                    i = $(this).attr("data-height"),
                    e = $(this).attr("data-width");
                new PhotoSwipe(t, PhotoSwipeUI_Default, [{
                    src: n,
                    w: e,
                    h: i
                }], {
                    index: 0,
                    closeEl: !0,
                    captionEl: !0,
                    fullscreenEl: !1,
                    zoomEl: !1,
                    shareEl: !1,
                    counterEl: !1,
                    arrowEl: !0,
                    preloaderEl: !0
                }).init()
            })
        }
    };
    lightbox.bind();
    var scrollTo = {
        init: function() {
            $(document).on("click", 'a[href^="#"]:not([href="#"]), a[href^="/#"]:not([href="/#"]), .js-scroll-to-id', function(e) {
                var t = $(this).attr("href");
                "/" !== window.location.pathname && -1 !== t.indexOf("/#") || (e.preventDefault(), e = "", e = "#" + t.split("#")[1], t = $(e).offset().top, $("html, body").animate({
                    scrollTop: t
                }, 400), e = $(".js-menu.state-opened-menu"), t = $(".js-open-menu.state-active-burger"), 0 < e.length && 0 < t.length && openMenu.close(e, t))
            })
        }
    };
    scrollTo.init();
    var showError = {
        showManually: function(e) {
            void 0 !== e && $(".js-form-error-message").text(e), $(".js-form-error-box").addClass("state-visible")
        },
        showAutomatically: function() {
            var e = getUrlParameter("error_message");
            0 < e.length && ($(".js-form-error-box").addClass("state-visible"), $(".js-form-error-message").text(e))
        }
    };
    showError.showAutomatically(), window.unicornplatform.stripeCheckout = {
        bind: function() {
            $(document).on("click", "[data-stripe-product-id]", function(e) {
                var t, n, i, o, r, s;
                void 0 !== window.Stripe && void 0 !== window.stripe_public_api_key && "" !== window.stripe_public_api_key && (t = (s = $(this)).attr("data-stripe-product-id"), n = s.attr("data-successful-payment-url"), i = s.attr("data-cancel-payment-url"), "" !== n && void 0 !== n || (n = window.location.href + "?popup_id=successful_payment"), "" !== i && void 0 !== i || (i = window.location.href + "?popup_id=cancelled_payment"), t && "" !== t && (e.preventDefault(), o = Stripe(window.stripe_public_api_key), r = [{
                    quantity: 1
                }], "plan" === (e = t.split("_")[0]) ? r[0].plan = t : "sku" === e ? r[0].sku = t : "price" === e ? r[0].price = t : (alert("Stripe integration error: wrong product ID was used. Please take a careful look at our guide and copy proper product ID: https://help.unicornplatform.com/en/article/stripe-checkout-integration-1ji5u1/"), console.error("A message for the website owner: there has been a mistake in setting up your Stripe integration. Please contact the Unicorn Platform support crew.")), "price" === e ? (s = s.attr("data-stripe-mode"), o.redirectToCheckout({
                    lineItems: r,
                    mode: s,
                    successUrl: n,
                    cancelUrl: i
                }).then(function(e) {
                    e.error && alert('The purchase ended up with an error: "' + e.error.message + '" We are sorry.')
                })) : o.redirectToCheckout({
                    items: r,
                    successUrl: n,
                    cancelUrl: i
                }).then(function(e) {
                    e.error && alert('The purchase ended up with an error: "' + e.error.message + '" We are sorry.')
                })))
            })
        }
    }, window.unicornplatform.stripeCheckout.bind();
    var popup = (pAa = {
            openSpeed: 150,
            closeSpeed: 50,
            loading: "",
            afterClose: function() {
                var e = {
                    Title: document.title,
                    Url: removeParam("popup_id")
                };
                history.pushState(e, e.Title, e.Url)
            }
        }, {
            openOnPageLoad: function() {
                var e = getUrlParameter("popup_id");
                e && "" !== e && $.featherlight(qAa(e), pAa)
            },
            bind: function() {
                $(document).on("click", ".js-open-popup", function(e) {
                    e.preventDefault();
                    e = $(this).attr("data-popup-id");
                    $(this).featherlight(qAa(e), pAa)
                })
            }
        }),
        pAa, loadMore, AAa, BAa, CAa, EAa;

    function qAa(e) {
        var t = $("#" + e),
            e = t;
        return e = 0 === t.length ? $("#no_such_popup") : e
    }
    popup.openOnPageLoad(), popup.bind(), null !== localStorage.getItem("allBlogPosts") && (AAa = $(".js-post-item"), BAa = $(".js-posts-list"), CAa = AAa.length, EAa = JSON.parse(localStorage.getItem("allBlogPosts")), loadMore = {
        bind: function() {
            var i = (EAa.length - CAa) / 5;
            $(document).on("click", "#js-load-more", function(e) {
                if (e.preventDefault(), 0 < i) {
                    for (var t = CAa; t < CAa + 5 && t < EAa.length; t++) {
                        var n = AAa.clone().eq(0);
                        n.attr("href", EAa[t].url), "" !== EAa[t].og_image_url ? n.find(".js-post-item__img").attr("src", EAa[t].og_image_url) : "" !== EAa[t].first_image_url && n.find(".js-post-item__img").attr("src", EAa[t].first_image_url), n.find(".js-post-item__title").text(EAa[t].title), BAa.append(n)
                    }
                    CAa += 5, i <= 1 && $(".js-load-more-wrapper").hide(), i -= 1
                }
            })
        }
    }, loadMore.bind());
    var $overlayList = $("#js-overlay-list");
    setTimeout(function() {
        var n, i, o, r;
        $overlayList.hasClass("read-more-zoom") && (n = $("#js-read-more"), i = $(".js-nav"), o = $(window).height(), r = $overlayList.height(), i.css({
            transition: "0.6s cubic-bezier(0.33, 1, 0.68, 1)"
        }), $(window).on("scroll", function() {
            var e = n.offset().top,
                t = $(this).scrollTop();
            o < r ? e - o < t ? ($overlayList.css("transform", "scale(0.92) translateY(-60px)"), i.css({
                opacity: "0",
                visibility: "hidden"
            })) : ($overlayList.css("transform", "scale(1)"), i.css({
                opacity: "1",
                visibility: "visible"
            })) : r < o && (0 < t ? ($overlayList.css("transform", "scale(0.92) translateY(-60px)"), i.css({
                opacity: "0",
                visibility: "hidden"
            })) : ($overlayList.css("transform", "scale(1)"), i.css({
                opacity: "1",
                visibility: "visible"
            })))
        }))
    }, 500)
});
var widgets = {
    bindClose: function() {
        $(document).on("click", ".js-close-widget", function(e) {
            e.preventDefault();
            e = $(this).attr("data-widget-id");
            $("#" + e).toggleClass("state-visible"), localStorage["unicorn-widget-" + e] = "hidden"
        })
    },
    bindInit: function() {
        var e, t = $(".js-widget");
        0 < t.length && (e = t.attr("id"), "hidden" !== localStorage["unicorn-widget-" + e] && setTimeout(function() {
            t.toggleClass("state-visible")
        }, 2e3))
    }
};
widgets.bindClose(), widgets.bindInit();
var languageSwitchHreflangs = {
    bind: function() {
        ! function() {
            if (0 < $(".js-lang-widget").length) {
                let n = $(".js-language-link");
                if (0 < n.length) {
                    let t = $('link[rel="alternate"]');
                    if (0 < t.length)
                        for (let e = 0; e < t.length; e++) {
                            var i = t.eq(e).attr("hreflang"),
                                o = t.eq(e).attr("href");
                            if (i && "" !== i && o && "" !== o)
                                for (let t = 0; t < n.length; t++) {
                                    let e = n.eq(t);
                                    e.attr("data-lang-code") === i && e.attr("href", o)
                                }
                        }
                }
            }
        }()
    }
};
languageSwitchHreflangs.bind();