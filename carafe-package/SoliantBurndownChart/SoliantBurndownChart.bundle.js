!function (t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {i: i, l: !1, exports: {}};
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }

    n.m = t, n.c = e, n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {configurable: !1, enumerable: !0, get: i})
    }, n.r = function (t) {
        Object.defineProperty(t, "__esModule", {value: !0})
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "/", n(n.s = 21)
}([function (t, e) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function (t, e, n) {
    (function (e) {
        t.exports = e.jQuery = n(5)
    }).call(this, n(0))
}, function (t, e, n) {
    /*!
  * Bootstrap v4.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
    !function (t, e, n) {
        "use strict";

        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function r(t, e, n) {
            return e && i(t.prototype, e), n && i(t, n), t
        }

        function o(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function a(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {}, i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                }))), i.forEach(function (e) {
                    o(t, e, n[e])
                })
            }
            return t
        }

        e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;
        var s = function (t) {
            var e = "transitionend";

            function n(e) {
                var n = this, r = !1;
                return t(this).one(i.TRANSITION_END, function () {
                    r = !0
                }), setTimeout(function () {
                    r || i.triggerTransitionEnd(n)
                }, e), this
            }

            var i = {
                TRANSITION_END: "bsTransitionEnd", getUID: function (t) {
                    do {
                        t += ~~(1e6 * Math.random())
                    } while (document.getElementById(t));
                    return t
                }, getSelectorFromElement: function (e) {
                    var n = e.getAttribute("data-target");
                    n && "#" !== n || (n = e.getAttribute("href") || "");
                    try {
                        var i = t(document).find(n);
                        return i.length > 0 ? n : null
                    } catch (t) {
                        return null
                    }
                }, getTransitionDurationFromElement: function (e) {
                    if (!e) return 0;
                    var n = t(e).css("transition-duration"), i = parseFloat(n);
                    return i ? (n = n.split(",")[0], 1e3 * parseFloat(n)) : 0
                }, reflow: function (t) {
                    return t.offsetHeight
                }, triggerTransitionEnd: function (n) {
                    t(n).trigger(e)
                }, supportsTransitionEnd: function () {
                    return Boolean(e)
                }, isElement: function (t) {
                    return (t[0] || t).nodeType
                }, typeCheckConfig: function (t, e, n) {
                    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
                        var o = n[r], a = e[r],
                            s = a && i.isElement(a) ? "element" : (c = a, {}.toString.call(c).match(/\s([a-z]+)/i)[1].toLowerCase());
                        if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + s + '" but expected type "' + o + '".')
                    }
                    var c
                }
            };
            return t.fn.emulateTransitionEnd = n, t.event.special[i.TRANSITION_END] = {
                bindType: e,
                delegateType: e,
                handle: function (e) {
                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            }, i
        }(e), c = function (t) {
            var e = t.fn.alert,
                n = {CLOSE: "close.bs.alert", CLOSED: "closed.bs.alert", CLICK_DATA_API: "click.bs.alert.data-api"},
                i = {ALERT: "alert", FADE: "fade", SHOW: "show"}, o = function () {
                    function e(t) {
                        this._element = t
                    }

                    var o = e.prototype;
                    return o.close = function (t) {
                        var e = this._element;
                        t && (e = this._getRootElement(t));
                        var n = this._triggerCloseEvent(e);
                        n.isDefaultPrevented() || this._removeElement(e)
                    }, o.dispose = function () {
                        t.removeData(this._element, "bs.alert"), this._element = null
                    }, o._getRootElement = function (e) {
                        var n = s.getSelectorFromElement(e), r = !1;
                        return n && (r = t(n)[0]), r || (r = t(e).closest("." + i.ALERT)[0]), r
                    }, o._triggerCloseEvent = function (e) {
                        var i = t.Event(n.CLOSE);
                        return t(e).trigger(i), i
                    }, o._removeElement = function (e) {
                        var n = this;
                        if (t(e).removeClass(i.SHOW), t(e).hasClass(i.FADE)) {
                            var r = s.getTransitionDurationFromElement(e);
                            t(e).one(s.TRANSITION_END, function (t) {
                                return n._destroyElement(e, t)
                            }).emulateTransitionEnd(r)
                        } else this._destroyElement(e)
                    }, o._destroyElement = function (e) {
                        t(e).detach().trigger(n.CLOSED).remove()
                    }, e._jQueryInterface = function (n) {
                        return this.each(function () {
                            var i = t(this), r = i.data("bs.alert");
                            r || (r = new e(this), i.data("bs.alert", r)), "close" === n && r[n](this)
                        })
                    }, e._handleDismiss = function (t) {
                        return function (e) {
                            e && e.preventDefault(), t.close(this)
                        }
                    }, r(e, null, [{
                        key: "VERSION", get: function () {
                            return "4.1.1"
                        }
                    }]), e
                }();
            return t(document).on(n.CLICK_DATA_API, '[data-dismiss="alert"]', o._handleDismiss(new o)), t.fn.alert = o._jQueryInterface, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function () {
                return t.fn.alert = e, o._jQueryInterface
            }, o
        }(e), f = function (t) {
            var e = "button", n = t.fn[e], i = {ACTIVE: "active", BUTTON: "btn", FOCUS: "focus"}, o = {
                DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                DATA_TOGGLE: '[data-toggle="buttons"]',
                INPUT: "input",
                ACTIVE: ".active",
                BUTTON: ".btn"
            }, a = {
                CLICK_DATA_API: "click.bs.button.data-api",
                FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
            }, s = function () {
                function e(t) {
                    this._element = t
                }

                var n = e.prototype;
                return n.toggle = function () {
                    var e = !0, n = !0, r = t(this._element).closest(o.DATA_TOGGLE)[0];
                    if (r) {
                        var a = t(this._element).find(o.INPUT)[0];
                        if (a) {
                            if ("radio" === a.type) if (a.checked && t(this._element).hasClass(i.ACTIVE)) e = !1; else {
                                var s = t(r).find(o.ACTIVE)[0];
                                s && t(s).removeClass(i.ACTIVE)
                            }
                            if (e) {
                                if (a.hasAttribute("disabled") || r.hasAttribute("disabled") || a.classList.contains("disabled") || r.classList.contains("disabled")) return;
                                a.checked = !t(this._element).hasClass(i.ACTIVE), t(a).trigger("change")
                            }
                            a.focus(), n = !1
                        }
                    }
                    n && this._element.setAttribute("aria-pressed", !t(this._element).hasClass(i.ACTIVE)), e && t(this._element).toggleClass(i.ACTIVE)
                }, n.dispose = function () {
                    t.removeData(this._element, "bs.button"), this._element = null
                }, e._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = t(this).data("bs.button");
                        i || (i = new e(this), t(this).data("bs.button", i)), "toggle" === n && i[n]()
                    })
                }, r(e, null, [{
                    key: "VERSION", get: function () {
                        return "4.1.1"
                    }
                }]), e
            }();
            return t(document).on(a.CLICK_DATA_API, o.DATA_TOGGLE_CARROT, function (e) {
                e.preventDefault();
                var n = e.target;
                t(n).hasClass(i.BUTTON) || (n = t(n).closest(o.BUTTON)), s._jQueryInterface.call(t(n), "toggle")
            }).on(a.FOCUS_BLUR_DATA_API, o.DATA_TOGGLE_CARROT, function (e) {
                var n = t(e.target).closest(o.BUTTON)[0];
                t(n).toggleClass(i.FOCUS, /^focus(in)?$/.test(e.type))
            }), t.fn[e] = s._jQueryInterface, t.fn[e].Constructor = s, t.fn[e].noConflict = function () {
                return t.fn[e] = n, s._jQueryInterface
            }, s
        }(e), l = function (t) {
            var e = "carousel", n = "bs.carousel", i = "." + n, o = t.fn[e],
                c = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0}, f = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                }, l = {NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right"}, u = {
                    SLIDE: "slide" + i,
                    SLID: "slid" + i,
                    KEYDOWN: "keydown" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i,
                    TOUCHEND: "touchend" + i,
                    LOAD_DATA_API: "load.bs.carousel.data-api",
                    CLICK_DATA_API: "click.bs.carousel.data-api"
                }, h = {
                    CAROUSEL: "carousel",
                    ACTIVE: "active",
                    SLIDE: "slide",
                    RIGHT: "carousel-item-right",
                    LEFT: "carousel-item-left",
                    NEXT: "carousel-item-next",
                    PREV: "carousel-item-prev",
                    ITEM: "carousel-item"
                }, d = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                }, p = function () {
                    function o(e, n) {
                        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(d.INDICATORS)[0], this._addEventListeners()
                    }

                    var p = o.prototype;
                    return p.next = function () {
                        this._isSliding || this._slide(l.NEXT)
                    }, p.nextWhenVisible = function () {
                        !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
                    }, p.prev = function () {
                        this._isSliding || this._slide(l.PREV)
                    }, p.pause = function (e) {
                        e || (this._isPaused = !0), t(this._element).find(d.NEXT_PREV)[0] && (s.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }, p.cycle = function (t) {
                        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }, p.to = function (e) {
                        var n = this;
                        this._activeElement = t(this._element).find(d.ACTIVE_ITEM)[0];
                        var i = this._getItemIndex(this._activeElement);
                        if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) t(this._element).one(u.SLID, function () {
                            return n.to(e)
                        }); else {
                            if (i === e) return this.pause(), void this.cycle();
                            var r = e > i ? l.NEXT : l.PREV;
                            this._slide(r, this._items[e])
                        }
                    }, p.dispose = function () {
                        t(this._element).off(i), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                    }, p._getConfig = function (t) {
                        return t = a({}, c, t), s.typeCheckConfig(e, t, f), t
                    }, p._addEventListeners = function () {
                        var e = this;
                        this._config.keyboard && t(this._element).on(u.KEYDOWN, function (t) {
                            return e._keydown(t)
                        }), "hover" === this._config.pause && (t(this._element).on(u.MOUSEENTER, function (t) {
                            return e.pause(t)
                        }).on(u.MOUSELEAVE, function (t) {
                            return e.cycle(t)
                        }), "ontouchstart" in document.documentElement && t(this._element).on(u.TOUCHEND, function () {
                            e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                                return e.cycle(t)
                            }, 500 + e._config.interval)
                        }))
                    }, p._keydown = function (t) {
                        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                            case 37:
                                t.preventDefault(), this.prev();
                                break;
                            case 39:
                                t.preventDefault(), this.next()
                        }
                    }, p._getItemIndex = function (e) {
                        return this._items = t.makeArray(t(e).parent().find(d.ITEM)), this._items.indexOf(e)
                    }, p._getItemByDirection = function (t, e) {
                        var n = t === l.NEXT, i = t === l.PREV, r = this._getItemIndex(e), o = this._items.length - 1,
                            a = i && 0 === r || n && r === o;
                        if (a && !this._config.wrap) return e;
                        var s = t === l.PREV ? -1 : 1, c = (r + s) % this._items.length;
                        return -1 === c ? this._items[this._items.length - 1] : this._items[c]
                    }, p._triggerSlideEvent = function (e, n) {
                        var i = this._getItemIndex(e), r = this._getItemIndex(t(this._element).find(d.ACTIVE_ITEM)[0]),
                            o = t.Event(u.SLIDE, {relatedTarget: e, direction: n, from: r, to: i});
                        return t(this._element).trigger(o), o
                    }, p._setActiveIndicatorElement = function (e) {
                        if (this._indicatorsElement) {
                            t(this._indicatorsElement).find(d.ACTIVE).removeClass(h.ACTIVE);
                            var n = this._indicatorsElement.children[this._getItemIndex(e)];
                            n && t(n).addClass(h.ACTIVE)
                        }
                    }, p._slide = function (e, n) {
                        var i, r, o, a = this, c = t(this._element).find(d.ACTIVE_ITEM)[0], f = this._getItemIndex(c),
                            p = n || c && this._getItemByDirection(e, c), m = this._getItemIndex(p),
                            g = Boolean(this._interval);
                        if (e === l.NEXT ? (i = h.LEFT, r = h.NEXT, o = l.LEFT) : (i = h.RIGHT, r = h.PREV, o = l.RIGHT), p && t(p).hasClass(h.ACTIVE)) this._isSliding = !1; else {
                            var y = this._triggerSlideEvent(p, o);
                            if (!y.isDefaultPrevented() && c && p) {
                                this._isSliding = !0, g && this.pause(), this._setActiveIndicatorElement(p);
                                var v = t.Event(u.SLID, {relatedTarget: p, direction: o, from: f, to: m});
                                if (t(this._element).hasClass(h.SLIDE)) {
                                    t(p).addClass(r), s.reflow(p), t(c).addClass(i), t(p).addClass(i);
                                    var _ = s.getTransitionDurationFromElement(c);
                                    t(c).one(s.TRANSITION_END, function () {
                                        t(p).removeClass(i + " " + r).addClass(h.ACTIVE), t(c).removeClass(h.ACTIVE + " " + r + " " + i), a._isSliding = !1, setTimeout(function () {
                                            return t(a._element).trigger(v)
                                        }, 0)
                                    }).emulateTransitionEnd(_)
                                } else t(c).removeClass(h.ACTIVE), t(p).addClass(h.ACTIVE), this._isSliding = !1, t(this._element).trigger(v);
                                g && this.cycle()
                            }
                        }
                    }, o._jQueryInterface = function (e) {
                        return this.each(function () {
                            var i = t(this).data(n), r = a({}, c, t(this).data());
                            "object" == typeof e && (r = a({}, r, e));
                            var s = "string" == typeof e ? e : r.slide;
                            if (i || (i = new o(this, r), t(this).data(n, i)), "number" == typeof e) i.to(e); else if ("string" == typeof s) {
                                if (void 0 === i[s]) throw new TypeError('No method named "' + s + '"');
                                i[s]()
                            } else r.interval && (i.pause(), i.cycle())
                        })
                    }, o._dataApiClickHandler = function (e) {
                        var i = s.getSelectorFromElement(this);
                        if (i) {
                            var r = t(i)[0];
                            if (r && t(r).hasClass(h.CAROUSEL)) {
                                var c = a({}, t(r).data(), t(this).data()), f = this.getAttribute("data-slide-to");
                                f && (c.interval = !1), o._jQueryInterface.call(t(r), c), f && t(r).data(n).to(f), e.preventDefault()
                            }
                        }
                    }, r(o, null, [{
                        key: "VERSION", get: function () {
                            return "4.1.1"
                        }
                    }, {
                        key: "Default", get: function () {
                            return c
                        }
                    }]), o
                }();
            return t(document).on(u.CLICK_DATA_API, d.DATA_SLIDE, p._dataApiClickHandler), t(window).on(u.LOAD_DATA_API, function () {
                t(d.DATA_RIDE).each(function () {
                    var e = t(this);
                    p._jQueryInterface.call(e, e.data())
                })
            }), t.fn[e] = p._jQueryInterface, t.fn[e].Constructor = p, t.fn[e].noConflict = function () {
                return t.fn[e] = o, p._jQueryInterface
            }, p
        }(e), u = function (t) {
            var e = "collapse", n = "bs.collapse", i = t.fn[e], o = {toggle: !0, parent: ""},
                c = {toggle: "boolean", parent: "(string|element)"}, f = {
                    SHOW: "show.bs.collapse",
                    SHOWN: "shown.bs.collapse",
                    HIDE: "hide.bs.collapse",
                    HIDDEN: "hidden.bs.collapse",
                    CLICK_DATA_API: "click.bs.collapse.data-api"
                }, l = {SHOW: "show", COLLAPSE: "collapse", COLLAPSING: "collapsing", COLLAPSED: "collapsed"},
                u = {WIDTH: "width", HEIGHT: "height"},
                h = {ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]'}, d = function () {
                    function i(e, n) {
                        this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                        for (var i = t(h.DATA_TOGGLE), r = 0; r < i.length; r++) {
                            var o = i[r], a = s.getSelectorFromElement(o);
                            null !== a && t(a).filter(e).length > 0 && (this._selector = a, this._triggerArray.push(o))
                        }
                        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }

                    var d = i.prototype;
                    return d.toggle = function () {
                        t(this._element).hasClass(l.SHOW) ? this.hide() : this.show()
                    }, d.show = function () {
                        var e, r, o = this;
                        if (!(this._isTransitioning || t(this._element).hasClass(l.SHOW) || (this._parent && 0 === (e = t.makeArray(t(this._parent).find(h.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), e && (r = t(e).not(this._selector).data(n)) && r._isTransitioning))) {
                            var a = t.Event(f.SHOW);
                            if (t(this._element).trigger(a), !a.isDefaultPrevented()) {
                                e && (i._jQueryInterface.call(t(e).not(this._selector), "hide"), r || t(e).data(n, null));
                                var c = this._getDimension();
                                t(this._element).removeClass(l.COLLAPSE).addClass(l.COLLAPSING), this._element.style[c] = 0, this._triggerArray.length > 0 && t(this._triggerArray).removeClass(l.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                var u = c[0].toUpperCase() + c.slice(1), d = "scroll" + u,
                                    p = s.getTransitionDurationFromElement(this._element);
                                t(this._element).one(s.TRANSITION_END, function () {
                                    t(o._element).removeClass(l.COLLAPSING).addClass(l.COLLAPSE).addClass(l.SHOW), o._element.style[c] = "", o.setTransitioning(!1), t(o._element).trigger(f.SHOWN)
                                }).emulateTransitionEnd(p), this._element.style[c] = this._element[d] + "px"
                            }
                        }
                    }, d.hide = function () {
                        var e = this;
                        if (!this._isTransitioning && t(this._element).hasClass(l.SHOW)) {
                            var n = t.Event(f.HIDE);
                            if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                                var i = this._getDimension();
                                if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", s.reflow(this._element), t(this._element).addClass(l.COLLAPSING).removeClass(l.COLLAPSE).removeClass(l.SHOW), this._triggerArray.length > 0) for (var r = 0; r < this._triggerArray.length; r++) {
                                    var o = this._triggerArray[r], a = s.getSelectorFromElement(o);
                                    if (null !== a) {
                                        var c = t(a);
                                        c.hasClass(l.SHOW) || t(o).addClass(l.COLLAPSED).attr("aria-expanded", !1)
                                    }
                                }
                                this.setTransitioning(!0), this._element.style[i] = "";
                                var u = s.getTransitionDurationFromElement(this._element);
                                t(this._element).one(s.TRANSITION_END, function () {
                                    e.setTransitioning(!1), t(e._element).removeClass(l.COLLAPSING).addClass(l.COLLAPSE).trigger(f.HIDDEN)
                                }).emulateTransitionEnd(u)
                            }
                        }
                    }, d.setTransitioning = function (t) {
                        this._isTransitioning = t
                    }, d.dispose = function () {
                        t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                    }, d._getConfig = function (t) {
                        return (t = a({}, o, t)).toggle = Boolean(t.toggle), s.typeCheckConfig(e, t, c), t
                    }, d._getDimension = function () {
                        var e = t(this._element).hasClass(u.WIDTH);
                        return e ? u.WIDTH : u.HEIGHT
                    }, d._getParent = function () {
                        var e = this, n = null;
                        s.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
                        var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        return t(n).find(r).each(function (t, n) {
                            e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                        }), n
                    }, d._addAriaAndCollapsedClass = function (e, n) {
                        if (e) {
                            var i = t(e).hasClass(l.SHOW);
                            n.length > 0 && t(n).toggleClass(l.COLLAPSED, !i).attr("aria-expanded", i)
                        }
                    }, i._getTargetFromElement = function (e) {
                        var n = s.getSelectorFromElement(e);
                        return n ? t(n)[0] : null
                    }, i._jQueryInterface = function (e) {
                        return this.each(function () {
                            var r = t(this), s = r.data(n), c = a({}, o, r.data(), "object" == typeof e && e ? e : {});
                            if (!s && c.toggle && /show|hide/.test(e) && (c.toggle = !1), s || (s = new i(this, c), r.data(n, s)), "string" == typeof e) {
                                if (void 0 === s[e]) throw new TypeError('No method named "' + e + '"');
                                s[e]()
                            }
                        })
                    }, r(i, null, [{
                        key: "VERSION", get: function () {
                            return "4.1.1"
                        }
                    }, {
                        key: "Default", get: function () {
                            return o
                        }
                    }]), i
                }();
            return t(document).on(f.CLICK_DATA_API, h.DATA_TOGGLE, function (e) {
                "A" === e.currentTarget.tagName && e.preventDefault();
                var i = t(this), r = s.getSelectorFromElement(this);
                t(r).each(function () {
                    var e = t(this), r = e.data(n), o = r ? "toggle" : i.data();
                    d._jQueryInterface.call(e, o)
                })
            }), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function () {
                return t.fn[e] = i, d._jQueryInterface
            }, d
        }(e), h = function (t) {
            var e = "dropdown", i = "bs.dropdown", o = "." + i, c = t.fn[e], f = new RegExp("38|40|27"), l = {
                HIDE: "hide" + o,
                HIDDEN: "hidden" + o,
                SHOW: "show" + o,
                SHOWN: "shown" + o,
                CLICK: "click" + o,
                CLICK_DATA_API: "click.bs.dropdown.data-api",
                KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
                KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
            }, u = {
                DISABLED: "disabled",
                SHOW: "show",
                DROPUP: "dropup",
                DROPRIGHT: "dropright",
                DROPLEFT: "dropleft",
                MENURIGHT: "dropdown-menu-right",
                MENULEFT: "dropdown-menu-left",
                POSITION_STATIC: "position-static"
            }, h = {
                DATA_TOGGLE: '[data-toggle="dropdown"]',
                FORM_CHILD: ".dropdown form",
                MENU: ".dropdown-menu",
                NAVBAR_NAV: ".navbar-nav",
                VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
            }, d = {
                TOP: "top-start",
                TOPEND: "top-end",
                BOTTOM: "bottom-start",
                BOTTOMEND: "bottom-end",
                RIGHT: "right-start",
                RIGHTEND: "right-end",
                LEFT: "left-start",
                LEFTEND: "left-end"
            }, p = {offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic"}, m = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string"
            }, g = function () {
                function c(t, e) {
                    this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                }

                var g = c.prototype;
                return g.toggle = function () {
                    if (!this._element.disabled && !t(this._element).hasClass(u.DISABLED)) {
                        var e = c._getParentFromElement(this._element), i = t(this._menu).hasClass(u.SHOW);
                        if (c._clearMenus(), !i) {
                            var r = {relatedTarget: this._element}, o = t.Event(l.SHOW, r);
                            if (t(e).trigger(o), !o.isDefaultPrevented()) {
                                if (!this._inNavbar) {
                                    if (void 0 === n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                    var a = this._element;
                                    "parent" === this._config.reference ? a = e : s.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(e).addClass(u.POSITION_STATIC), this._popper = new n(a, this._menu, this._getPopperConfig())
                                }
                                "ontouchstart" in document.documentElement && 0 === t(e).closest(h.NAVBAR_NAV).length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(u.SHOW), t(e).toggleClass(u.SHOW).trigger(t.Event(l.SHOWN, r))
                            }
                        }
                    }
                }, g.dispose = function () {
                    t.removeData(this._element, i), t(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                }, g.update = function () {
                    this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                }, g._addEventListeners = function () {
                    var e = this;
                    t(this._element).on(l.CLICK, function (t) {
                        t.preventDefault(), t.stopPropagation(), e.toggle()
                    })
                }, g._getConfig = function (n) {
                    return n = a({}, this.constructor.Default, t(this._element).data(), n), s.typeCheckConfig(e, n, this.constructor.DefaultType), n
                }, g._getMenuElement = function () {
                    if (!this._menu) {
                        var e = c._getParentFromElement(this._element);
                        this._menu = t(e).find(h.MENU)[0]
                    }
                    return this._menu
                }, g._getPlacement = function () {
                    var e = t(this._element).parent(), n = d.BOTTOM;
                    return e.hasClass(u.DROPUP) ? (n = d.TOP, t(this._menu).hasClass(u.MENURIGHT) && (n = d.TOPEND)) : e.hasClass(u.DROPRIGHT) ? n = d.RIGHT : e.hasClass(u.DROPLEFT) ? n = d.LEFT : t(this._menu).hasClass(u.MENURIGHT) && (n = d.BOTTOMEND), n
                }, g._detectNavbar = function () {
                    return t(this._element).closest(".navbar").length > 0
                }, g._getPopperConfig = function () {
                    var t = this, e = {};
                    "function" == typeof this._config.offset ? e.fn = function (e) {
                        return e.offsets = a({}, e.offsets, t._config.offset(e.offsets) || {}), e
                    } : e.offset = this._config.offset;
                    var n = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: e,
                            flip: {enabled: this._config.flip},
                            preventOverflow: {boundariesElement: this._config.boundary}
                        }
                    };
                    return "static" === this._config.display && (n.modifiers.applyStyle = {enabled: !1}), n
                }, c._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = t(this).data(i), r = "object" == typeof e ? e : null;
                        if (n || (n = new c(this, r), t(this).data(i, n)), "string" == typeof e) {
                            if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                            n[e]()
                        }
                    })
                }, c._clearMenus = function (e) {
                    if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var n = t.makeArray(t(h.DATA_TOGGLE)), r = 0; r < n.length; r++) {
                        var o = c._getParentFromElement(n[r]), a = t(n[r]).data(i), s = {relatedTarget: n[r]};
                        if (a) {
                            var f = a._menu;
                            if (t(o).hasClass(u.SHOW) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(o, e.target))) {
                                var d = t.Event(l.HIDE, s);
                                t(o).trigger(d), d.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), n[r].setAttribute("aria-expanded", "false"), t(f).removeClass(u.SHOW), t(o).removeClass(u.SHOW).trigger(t.Event(l.HIDDEN, s)))
                            }
                        }
                    }
                }, c._getParentFromElement = function (e) {
                    var n, i = s.getSelectorFromElement(e);
                    return i && (n = t(i)[0]), n || e.parentNode
                }, c._dataApiKeydownHandler = function (e) {
                    if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(h.MENU).length)) : f.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(u.DISABLED))) {
                        var n = c._getParentFromElement(this), i = t(n).hasClass(u.SHOW);
                        if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
                            var r = t(n).find(h.VISIBLE_ITEMS).get();
                            if (0 !== r.length) {
                                var o = r.indexOf(e.target);
                                38 === e.which && o > 0 && o--, 40 === e.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus()
                            }
                        } else {
                            if (27 === e.which) {
                                var a = t(n).find(h.DATA_TOGGLE)[0];
                                t(a).trigger("focus")
                            }
                            t(this).trigger("click")
                        }
                    }
                }, r(c, null, [{
                    key: "VERSION", get: function () {
                        return "4.1.1"
                    }
                }, {
                    key: "Default", get: function () {
                        return p
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return m
                    }
                }]), c
            }();
            return t(document).on(l.KEYDOWN_DATA_API, h.DATA_TOGGLE, g._dataApiKeydownHandler).on(l.KEYDOWN_DATA_API, h.MENU, g._dataApiKeydownHandler).on(l.CLICK_DATA_API + " " + l.KEYUP_DATA_API, g._clearMenus).on(l.CLICK_DATA_API, h.DATA_TOGGLE, function (e) {
                e.preventDefault(), e.stopPropagation(), g._jQueryInterface.call(t(this), "toggle")
            }).on(l.CLICK_DATA_API, h.FORM_CHILD, function (t) {
                t.stopPropagation()
            }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
                return t.fn[e] = c, g._jQueryInterface
            }, g
        }(e), d = function (t) {
            var e = "modal", n = ".bs.modal", i = t.fn.modal, o = {backdrop: !0, keyboard: !0, focus: !0, show: !0},
                c = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"}, f = {
                    HIDE: "hide.bs.modal",
                    HIDDEN: "hidden.bs.modal",
                    SHOW: "show.bs.modal",
                    SHOWN: "shown.bs.modal",
                    FOCUSIN: "focusin.bs.modal",
                    RESIZE: "resize.bs.modal",
                    CLICK_DISMISS: "click.dismiss.bs.modal",
                    KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
                    MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
                    MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
                    CLICK_DATA_API: "click.bs.modal.data-api"
                }, l = {
                    SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                    BACKDROP: "modal-backdrop",
                    OPEN: "modal-open",
                    FADE: "fade",
                    SHOW: "show"
                }, u = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    STICKY_CONTENT: ".sticky-top",
                    NAVBAR_TOGGLER: ".navbar-toggler"
                }, h = function () {
                    function i(e, n) {
                        this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(u.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
                    }

                    var h = i.prototype;
                    return h.toggle = function (t) {
                        return this._isShown ? this.hide() : this.show(t)
                    }, h.show = function (e) {
                        var n = this;
                        if (!this._isTransitioning && !this._isShown) {
                            t(this._element).hasClass(l.FADE) && (this._isTransitioning = !0);
                            var i = t.Event(f.SHOW, {relatedTarget: e});
                            t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(l.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(f.CLICK_DISMISS, u.DATA_DISMISS, function (t) {
                                return n.hide(t)
                            }), t(this._dialog).on(f.MOUSEDOWN_DISMISS, function () {
                                t(n._element).one(f.MOUSEUP_DISMISS, function (e) {
                                    t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                })
                            }), this._showBackdrop(function () {
                                return n._showElement(e)
                            }))
                        }
                    }, h.hide = function (e) {
                        var n = this;
                        if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                            var i = t.Event(f.HIDE);
                            if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                                this._isShown = !1;
                                var r = t(this._element).hasClass(l.FADE);
                                if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(f.FOCUSIN), t(this._element).removeClass(l.SHOW), t(this._element).off(f.CLICK_DISMISS), t(this._dialog).off(f.MOUSEDOWN_DISMISS), r) {
                                    var o = s.getTransitionDurationFromElement(this._element);
                                    t(this._element).one(s.TRANSITION_END, function (t) {
                                        return n._hideModal(t)
                                    }).emulateTransitionEnd(o)
                                } else this._hideModal()
                            }
                        }
                    }, h.dispose = function () {
                        t.removeData(this._element, "bs.modal"), t(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                    }, h.handleUpdate = function () {
                        this._adjustDialog()
                    }, h._getConfig = function (t) {
                        return t = a({}, o, t), s.typeCheckConfig(e, t, c), t
                    }, h._showElement = function (e) {
                        var n = this, i = t(this._element).hasClass(l.FADE);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && s.reflow(this._element), t(this._element).addClass(l.SHOW), this._config.focus && this._enforceFocus();
                        var r = t.Event(f.SHOWN, {relatedTarget: e}), o = function () {
                            n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(r)
                        };
                        if (i) {
                            var a = s.getTransitionDurationFromElement(this._element);
                            t(this._dialog).one(s.TRANSITION_END, o).emulateTransitionEnd(a)
                        } else o()
                    }, h._enforceFocus = function () {
                        var e = this;
                        t(document).off(f.FOCUSIN).on(f.FOCUSIN, function (n) {
                            document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                        })
                    }, h._setEscapeEvent = function () {
                        var e = this;
                        this._isShown && this._config.keyboard ? t(this._element).on(f.KEYDOWN_DISMISS, function (t) {
                            27 === t.which && (t.preventDefault(), e.hide())
                        }) : this._isShown || t(this._element).off(f.KEYDOWN_DISMISS)
                    }, h._setResizeEvent = function () {
                        var e = this;
                        this._isShown ? t(window).on(f.RESIZE, function (t) {
                            return e.handleUpdate(t)
                        }) : t(window).off(f.RESIZE)
                    }, h._hideModal = function () {
                        var e = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                            t(document.body).removeClass(l.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(f.HIDDEN)
                        })
                    }, h._removeBackdrop = function () {
                        this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                    }, h._showBackdrop = function (e) {
                        var n = this, i = t(this._element).hasClass(l.FADE) ? l.FADE : "";
                        if (this._isShown && this._config.backdrop) {
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = l.BACKDROP, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(f.CLICK_DISMISS, function (t) {
                                n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                            }), i && s.reflow(this._backdrop), t(this._backdrop).addClass(l.SHOW), !e) return;
                            if (!i) return void e();
                            var r = s.getTransitionDurationFromElement(this._backdrop);
                            t(this._backdrop).one(s.TRANSITION_END, e).emulateTransitionEnd(r)
                        } else if (!this._isShown && this._backdrop) {
                            t(this._backdrop).removeClass(l.SHOW);
                            var o = function () {
                                n._removeBackdrop(), e && e()
                            };
                            if (t(this._element).hasClass(l.FADE)) {
                                var a = s.getTransitionDurationFromElement(this._backdrop);
                                t(this._backdrop).one(s.TRANSITION_END, o).emulateTransitionEnd(a)
                            } else o()
                        } else e && e()
                    }, h._adjustDialog = function () {
                        var t = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, h._resetAdjustments = function () {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }, h._checkScrollbar = function () {
                        var t = document.body.getBoundingClientRect();
                        this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, h._setScrollbar = function () {
                        var e = this;
                        if (this._isBodyOverflowing) {
                            t(u.FIXED_CONTENT).each(function (n, i) {
                                var r = t(i)[0].style.paddingRight, o = t(i).css("padding-right");
                                t(i).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                            }), t(u.STICKY_CONTENT).each(function (n, i) {
                                var r = t(i)[0].style.marginRight, o = t(i).css("margin-right");
                                t(i).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                            }), t(u.NAVBAR_TOGGLER).each(function (n, i) {
                                var r = t(i)[0].style.marginRight, o = t(i).css("margin-right");
                                t(i).data("margin-right", r).css("margin-right", parseFloat(o) + e._scrollbarWidth + "px")
                            });
                            var n = document.body.style.paddingRight, i = t(document.body).css("padding-right");
                            t(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                        }
                    }, h._resetScrollbar = function () {
                        t(u.FIXED_CONTENT).each(function (e, n) {
                            var i = t(n).data("padding-right");
                            void 0 !== i && t(n).css("padding-right", i).removeData("padding-right")
                        }), t(u.STICKY_CONTENT + ", " + u.NAVBAR_TOGGLER).each(function (e, n) {
                            var i = t(n).data("margin-right");
                            void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
                        });
                        var e = t(document.body).data("padding-right");
                        void 0 !== e && t(document.body).css("padding-right", e).removeData("padding-right")
                    }, h._getScrollbarWidth = function () {
                        var t = document.createElement("div");
                        t.className = l.SCROLLBAR_MEASURER, document.body.appendChild(t);
                        var e = t.getBoundingClientRect().width - t.clientWidth;
                        return document.body.removeChild(t), e
                    }, i._jQueryInterface = function (e, n) {
                        return this.each(function () {
                            var r = t(this).data("bs.modal"),
                                s = a({}, o, t(this).data(), "object" == typeof e && e ? e : {});
                            if (r || (r = new i(this, s), t(this).data("bs.modal", r)), "string" == typeof e) {
                                if (void 0 === r[e]) throw new TypeError('No method named "' + e + '"');
                                r[e](n)
                            } else s.show && r.show(n)
                        })
                    }, r(i, null, [{
                        key: "VERSION", get: function () {
                            return "4.1.1"
                        }
                    }, {
                        key: "Default", get: function () {
                            return o
                        }
                    }]), i
                }();
            return t(document).on(f.CLICK_DATA_API, u.DATA_TOGGLE, function (e) {
                var n, i = this, r = s.getSelectorFromElement(this);
                r && (n = t(r)[0]);
                var o = t(n).data("bs.modal") ? "toggle" : a({}, t(n).data(), t(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
                var c = t(n).one(f.SHOW, function (e) {
                    e.isDefaultPrevented() || c.one(f.HIDDEN, function () {
                        t(i).is(":visible") && i.focus()
                    })
                });
                h._jQueryInterface.call(t(n), o, this)
            }), t.fn.modal = h._jQueryInterface, t.fn.modal.Constructor = h, t.fn.modal.noConflict = function () {
                return t.fn.modal = i, h._jQueryInterface
            }, h
        }(e), p = function (t) {
            var e = "tooltip", i = ".bs.tooltip", o = t.fn[e], c = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), f = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)"
                }, l = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, u = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip",
                    boundary: "scrollParent"
                }, h = {SHOW: "show", OUT: "out"}, d = {
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    INSERTED: "inserted" + i,
                    CLICK: "click" + i,
                    FOCUSIN: "focusin" + i,
                    FOCUSOUT: "focusout" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i
                }, p = {FADE: "fade", SHOW: "show"},
                m = {TOOLTIP: ".tooltip", TOOLTIP_INNER: ".tooltip-inner", ARROW: ".arrow"},
                g = {HOVER: "hover", FOCUS: "focus", CLICK: "click", MANUAL: "manual"}, y = function () {
                    function o(t, e) {
                        if (void 0 === n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                    }

                    var y = o.prototype;
                    return y.enable = function () {
                        this._isEnabled = !0
                    }, y.disable = function () {
                        this._isEnabled = !1
                    }, y.toggleEnabled = function () {
                        this._isEnabled = !this._isEnabled
                    }, y.toggle = function (e) {
                        if (this._isEnabled) if (e) {
                            var n = this.constructor.DATA_KEY, i = t(e.currentTarget).data(n);
                            i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                        } else {
                            if (t(this.getTipElement()).hasClass(p.SHOW)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                    }, y.dispose = function () {
                        clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                    }, y.show = function () {
                        var e = this;
                        if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var i = t.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            t(this.element).trigger(i);
                            var r = t.contains(this.element.ownerDocument.documentElement, this.element);
                            if (i.isDefaultPrevented() || !r) return;
                            var o = this.getTipElement(), a = s.getUID(this.constructor.NAME);
                            o.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && t(o).addClass(p.FADE);
                            var c = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                                f = this._getAttachment(c);
                            this.addAttachmentClass(f);
                            var l = !1 === this.config.container ? document.body : t(this.config.container);
                            t(o).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(o).appendTo(l), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, o, {
                                placement: f,
                                modifiers: {
                                    offset: {offset: this.config.offset},
                                    flip: {behavior: this.config.fallbackPlacement},
                                    arrow: {element: m.ARROW},
                                    preventOverflow: {boundariesElement: this.config.boundary}
                                },
                                onCreate: function (t) {
                                    t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                                },
                                onUpdate: function (t) {
                                    e._handlePopperPlacementChange(t)
                                }
                            }), t(o).addClass(p.SHOW), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                            var u = function () {
                                e.config.animation && e._fixTransition();
                                var n = e._hoverState;
                                e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === h.OUT && e._leave(null, e)
                            };
                            if (t(this.tip).hasClass(p.FADE)) {
                                var d = s.getTransitionDurationFromElement(this.tip);
                                t(this.tip).one(s.TRANSITION_END, u).emulateTransitionEnd(d)
                            } else u()
                        }
                    }, y.hide = function (e) {
                        var n = this, i = this.getTipElement(), r = t.Event(this.constructor.Event.HIDE), o = function () {
                            n._hoverState !== h.SHOW && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                        };
                        if (t(this.element).trigger(r), !r.isDefaultPrevented()) {
                            if (t(i).removeClass(p.SHOW), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger[g.CLICK] = !1, this._activeTrigger[g.FOCUS] = !1, this._activeTrigger[g.HOVER] = !1, t(this.tip).hasClass(p.FADE)) {
                                var a = s.getTransitionDurationFromElement(i);
                                t(i).one(s.TRANSITION_END, o).emulateTransitionEnd(a)
                            } else o();
                            this._hoverState = ""
                        }
                    }, y.update = function () {
                        null !== this._popper && this._popper.scheduleUpdate()
                    }, y.isWithContent = function () {
                        return Boolean(this.getTitle())
                    }, y.addAttachmentClass = function (e) {
                        t(this.getTipElement()).addClass("bs-tooltip-" + e)
                    }, y.getTipElement = function () {
                        return this.tip = this.tip || t(this.config.template)[0], this.tip
                    }, y.setContent = function () {
                        var e = t(this.getTipElement());
                        this.setElementContent(e.find(m.TOOLTIP_INNER), this.getTitle()), e.removeClass(p.FADE + " " + p.SHOW)
                    }, y.setElementContent = function (e, n) {
                        var i = this.config.html;
                        "object" == typeof n && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n)
                    }, y.getTitle = function () {
                        var t = this.element.getAttribute("data-original-title");
                        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                    }, y._getAttachment = function (t) {
                        return l[t.toUpperCase()]
                    }, y._setListeners = function () {
                        var e = this, n = this.config.trigger.split(" ");
                        n.forEach(function (n) {
                            if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                                return e.toggle(t)
                            }); else if (n !== g.MANUAL) {
                                var i = n === g.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                    r = n === g.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                t(e.element).on(i, e.config.selector, function (t) {
                                    return e._enter(t)
                                }).on(r, e.config.selector, function (t) {
                                    return e._leave(t)
                                })
                            }
                            t(e.element).closest(".modal").on("hide.bs.modal", function () {
                                return e.hide()
                            })
                        }), this.config.selector ? this.config = a({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }, y._fixTitle = function () {
                        var t = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, y._enter = function (e, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? g.FOCUS : g.HOVER] = !0), t(n.getTipElement()).hasClass(p.SHOW) || n._hoverState === h.SHOW ? n._hoverState = h.SHOW : (clearTimeout(n._timeout), n._hoverState = h.SHOW, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
                            n._hoverState === h.SHOW && n.show()
                        }, n.config.delay.show) : n.show())
                    }, y._leave = function (e, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? g.FOCUS : g.HOVER] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = h.OUT, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
                            n._hoverState === h.OUT && n.hide()
                        }, n.config.delay.hide) : n.hide())
                    }, y._isWithActiveTrigger = function () {
                        for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                        return !1
                    }, y._getConfig = function (n) {
                        return "number" == typeof(n = a({}, this.constructor.Default, t(this.element).data(), "object" == typeof n && n ? n : {})).delay && (n.delay = {
                            show: n.delay,
                            hide: n.delay
                        }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), s.typeCheckConfig(e, n, this.constructor.DefaultType), n
                    }, y._getDelegateConfig = function () {
                        var t = {};
                        if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                        return t
                    }, y._cleanTipClass = function () {
                        var e = t(this.getTipElement()), n = e.attr("class").match(c);
                        null !== n && n.length > 0 && e.removeClass(n.join(""))
                    }, y._handlePopperPlacementChange = function (t) {
                        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
                    }, y._fixTransition = function () {
                        var e = this.getTipElement(), n = this.config.animation;
                        null === e.getAttribute("x-placement") && (t(e).removeClass(p.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                    }, o._jQueryInterface = function (e) {
                        return this.each(function () {
                            var n = t(this).data("bs.tooltip"), i = "object" == typeof e && e;
                            if ((n || !/dispose|hide/.test(e)) && (n || (n = new o(this, i), t(this).data("bs.tooltip", n)), "string" == typeof e)) {
                                if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                                n[e]()
                            }
                        })
                    }, r(o, null, [{
                        key: "VERSION", get: function () {
                            return "4.1.1"
                        }
                    }, {
                        key: "Default", get: function () {
                            return u
                        }
                    }, {
                        key: "NAME", get: function () {
                            return e
                        }
                    }, {
                        key: "DATA_KEY", get: function () {
                            return "bs.tooltip"
                        }
                    }, {
                        key: "Event", get: function () {
                            return d
                        }
                    }, {
                        key: "EVENT_KEY", get: function () {
                            return i
                        }
                    }, {
                        key: "DefaultType", get: function () {
                            return f
                        }
                    }]), o
                }();
            return t.fn[e] = y._jQueryInterface, t.fn[e].Constructor = y, t.fn[e].noConflict = function () {
                return t.fn[e] = o, y._jQueryInterface
            }, y
        }(e), m = function (t) {
            var e = "popover", n = ".bs.popover", i = t.fn[e], o = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                s = a({}, p.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                }), c = a({}, p.DefaultType, {content: "(string|element|function)"}), f = {FADE: "fade", SHOW: "show"},
                l = {TITLE: ".popover-header", CONTENT: ".popover-body"}, u = {
                    HIDE: "hide" + n,
                    HIDDEN: "hidden" + n,
                    SHOW: "show" + n,
                    SHOWN: "shown" + n,
                    INSERTED: "inserted" + n,
                    CLICK: "click" + n,
                    FOCUSIN: "focusin" + n,
                    FOCUSOUT: "focusout" + n,
                    MOUSEENTER: "mouseenter" + n,
                    MOUSELEAVE: "mouseleave" + n
                }, h = function (i) {
                    var a, h;

                    function d() {
                        return i.apply(this, arguments) || this
                    }

                    h = i, (a = d).prototype = Object.create(h.prototype), a.prototype.constructor = a, a.__proto__ = h;
                    var p = d.prototype;
                    return p.isWithContent = function () {
                        return this.getTitle() || this._getContent()
                    }, p.addAttachmentClass = function (e) {
                        t(this.getTipElement()).addClass("bs-popover-" + e)
                    }, p.getTipElement = function () {
                        return this.tip = this.tip || t(this.config.template)[0], this.tip
                    }, p.setContent = function () {
                        var e = t(this.getTipElement());
                        this.setElementContent(e.find(l.TITLE), this.getTitle());
                        var n = this._getContent();
                        "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(l.CONTENT), n), e.removeClass(f.FADE + " " + f.SHOW)
                    }, p._getContent = function () {
                        return this.element.getAttribute("data-content") || this.config.content
                    }, p._cleanTipClass = function () {
                        var e = t(this.getTipElement()), n = e.attr("class").match(o);
                        null !== n && n.length > 0 && e.removeClass(n.join(""))
                    }, d._jQueryInterface = function (e) {
                        return this.each(function () {
                            var n = t(this).data("bs.popover"), i = "object" == typeof e ? e : null;
                            if ((n || !/destroy|hide/.test(e)) && (n || (n = new d(this, i), t(this).data("bs.popover", n)), "string" == typeof e)) {
                                if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                                n[e]()
                            }
                        })
                    }, r(d, null, [{
                        key: "VERSION", get: function () {
                            return "4.1.1"
                        }
                    }, {
                        key: "Default", get: function () {
                            return s
                        }
                    }, {
                        key: "NAME", get: function () {
                            return e
                        }
                    }, {
                        key: "DATA_KEY", get: function () {
                            return "bs.popover"
                        }
                    }, {
                        key: "Event", get: function () {
                            return u
                        }
                    }, {
                        key: "EVENT_KEY", get: function () {
                            return n
                        }
                    }, {
                        key: "DefaultType", get: function () {
                            return c
                        }
                    }]), d
                }(p);
            return t.fn[e] = h._jQueryInterface, t.fn[e].Constructor = h, t.fn[e].noConflict = function () {
                return t.fn[e] = i, h._jQueryInterface
            }, h
        }(e), g = function (t) {
            var e = "scrollspy", n = t.fn[e], i = {offset: 10, method: "auto", target: ""},
                o = {offset: "number", method: "string", target: "(string|element)"}, c = {
                    ACTIVATE: "activate.bs.scrollspy",
                    SCROLL: "scroll.bs.scrollspy",
                    LOAD_DATA_API: "load.bs.scrollspy.data-api"
                }, f = {DROPDOWN_ITEM: "dropdown-item", DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active"}, l = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    NAV_LINKS: ".nav-link",
                    NAV_ITEMS: ".nav-item",
                    LIST_ITEMS: ".list-group-item",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                }, u = {OFFSET: "offset", POSITION: "position"}, h = function () {
                    function n(e, n) {
                        var i = this;
                        this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + l.NAV_LINKS + "," + this._config.target + " " + l.LIST_ITEMS + "," + this._config.target + " " + l.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(c.SCROLL, function (t) {
                            return i._process(t)
                        }), this.refresh(), this._process()
                    }

                    var h = n.prototype;
                    return h.refresh = function () {
                        var e = this, n = this._scrollElement === this._scrollElement.window ? u.OFFSET : u.POSITION,
                            i = "auto" === this._config.method ? n : this._config.method,
                            r = i === u.POSITION ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                        var o = t.makeArray(t(this._selector));
                        o.map(function (e) {
                            var n, o = s.getSelectorFromElement(e);
                            if (o && (n = t(o)[0]), n) {
                                var a = n.getBoundingClientRect();
                                if (a.width || a.height) return [t(n)[i]().top + r, o]
                            }
                            return null
                        }).filter(function (t) {
                            return t
                        }).sort(function (t, e) {
                            return t[0] - e[0]
                        }).forEach(function (t) {
                            e._offsets.push(t[0]), e._targets.push(t[1])
                        })
                    }, h.dispose = function () {
                        t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                    }, h._getConfig = function (n) {
                        if ("string" != typeof(n = a({}, i, "object" == typeof n && n ? n : {})).target) {
                            var r = t(n.target).attr("id");
                            r || (r = s.getUID(e), t(n.target).attr("id", r)), n.target = "#" + r
                        }
                        return s.typeCheckConfig(e, n, o), n
                    }, h._getScrollTop = function () {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }, h._getScrollHeight = function () {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }, h._getOffsetHeight = function () {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                    }, h._process = function () {
                        var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(),
                            n = this._config.offset + e - this._getOffsetHeight();
                        if (this._scrollHeight !== e && this.refresh(), t >= n) {
                            var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i)
                        } else {
                            if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                            for (var r = this._offsets.length; r--;) {
                                var o = this._activeTarget !== this._targets[r] && t >= this._offsets[r] && (void 0 === this._offsets[r + 1] || t < this._offsets[r + 1]);
                                o && this._activate(this._targets[r])
                            }
                        }
                    }, h._activate = function (e) {
                        this._activeTarget = e, this._clear();
                        var n = this._selector.split(",");
                        n = n.map(function (t) {
                            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                        });
                        var i = t(n.join(","));
                        i.hasClass(f.DROPDOWN_ITEM) ? (i.closest(l.DROPDOWN).find(l.DROPDOWN_TOGGLE).addClass(f.ACTIVE), i.addClass(f.ACTIVE)) : (i.addClass(f.ACTIVE), i.parents(l.NAV_LIST_GROUP).prev(l.NAV_LINKS + ", " + l.LIST_ITEMS).addClass(f.ACTIVE), i.parents(l.NAV_LIST_GROUP).prev(l.NAV_ITEMS).children(l.NAV_LINKS).addClass(f.ACTIVE)), t(this._scrollElement).trigger(c.ACTIVATE, {relatedTarget: e})
                    }, h._clear = function () {
                        t(this._selector).filter(l.ACTIVE).removeClass(f.ACTIVE)
                    }, n._jQueryInterface = function (e) {
                        return this.each(function () {
                            var i = t(this).data("bs.scrollspy"), r = "object" == typeof e && e;
                            if (i || (i = new n(this, r), t(this).data("bs.scrollspy", i)), "string" == typeof e) {
                                if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                                i[e]()
                            }
                        })
                    }, r(n, null, [{
                        key: "VERSION", get: function () {
                            return "4.1.1"
                        }
                    }, {
                        key: "Default", get: function () {
                            return i
                        }
                    }]), n
                }();
            return t(window).on(c.LOAD_DATA_API, function () {
                for (var e = t.makeArray(t(l.DATA_SPY)), n = e.length; n--;) {
                    var i = t(e[n]);
                    h._jQueryInterface.call(i, i.data())
                }
            }), t.fn[e] = h._jQueryInterface, t.fn[e].Constructor = h, t.fn[e].noConflict = function () {
                return t.fn[e] = n, h._jQueryInterface
            }, h
        }(e), y = function (t) {
            var e = t.fn.tab, n = {
                    HIDE: "hide.bs.tab",
                    HIDDEN: "hidden.bs.tab",
                    SHOW: "show.bs.tab",
                    SHOWN: "shown.bs.tab",
                    CLICK_DATA_API: "click.bs.tab.data-api"
                }, i = {DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active", DISABLED: "disabled", FADE: "fade", SHOW: "show"},
                o = {
                    DROPDOWN: ".dropdown",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    ACTIVE: ".active",
                    ACTIVE_UL: "> li > .active",
                    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                    DROPDOWN_TOGGLE: ".dropdown-toggle",
                    DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
                }, a = function () {
                    function e(t) {
                        this._element = t
                    }

                    var a = e.prototype;
                    return a.show = function () {
                        var e = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(i.ACTIVE) || t(this._element).hasClass(i.DISABLED))) {
                            var r, a, c = t(this._element).closest(o.NAV_LIST_GROUP)[0],
                                f = s.getSelectorFromElement(this._element);
                            if (c) {
                                var l = "UL" === c.nodeName ? o.ACTIVE_UL : o.ACTIVE;
                                a = (a = t.makeArray(t(c).find(l)))[a.length - 1]
                            }
                            var u = t.Event(n.HIDE, {relatedTarget: this._element}),
                                h = t.Event(n.SHOW, {relatedTarget: a});
                            if (a && t(a).trigger(u), t(this._element).trigger(h), !h.isDefaultPrevented() && !u.isDefaultPrevented()) {
                                f && (r = t(f)[0]), this._activate(this._element, c);
                                var d = function () {
                                    var i = t.Event(n.HIDDEN, {relatedTarget: e._element}),
                                        r = t.Event(n.SHOWN, {relatedTarget: a});
                                    t(a).trigger(i), t(e._element).trigger(r)
                                };
                                r ? this._activate(r, r.parentNode, d) : d()
                            }
                        }
                    }, a.dispose = function () {
                        t.removeData(this._element, "bs.tab"), this._element = null
                    }, a._activate = function (e, n, r) {
                        var a = this, c = ("UL" === n.nodeName ? t(n).find(o.ACTIVE_UL) : t(n).children(o.ACTIVE))[0],
                            f = r && c && t(c).hasClass(i.FADE), l = function () {
                                return a._transitionComplete(e, c, r)
                            };
                        if (c && f) {
                            var u = s.getTransitionDurationFromElement(c);
                            t(c).one(s.TRANSITION_END, l).emulateTransitionEnd(u)
                        } else l()
                    }, a._transitionComplete = function (e, n, r) {
                        if (n) {
                            t(n).removeClass(i.SHOW + " " + i.ACTIVE);
                            var a = t(n.parentNode).find(o.DROPDOWN_ACTIVE_CHILD)[0];
                            a && t(a).removeClass(i.ACTIVE), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                        }
                        if (t(e).addClass(i.ACTIVE), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), s.reflow(e), t(e).addClass(i.SHOW), e.parentNode && t(e.parentNode).hasClass(i.DROPDOWN_MENU)) {
                            var c = t(e).closest(o.DROPDOWN)[0];
                            c && t(c).find(o.DROPDOWN_TOGGLE).addClass(i.ACTIVE), e.setAttribute("aria-expanded", !0)
                        }
                        r && r()
                    }, e._jQueryInterface = function (n) {
                        return this.each(function () {
                            var i = t(this), r = i.data("bs.tab");
                            if (r || (r = new e(this), i.data("bs.tab", r)), "string" == typeof n) {
                                if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                                r[n]()
                            }
                        })
                    }, r(e, null, [{
                        key: "VERSION", get: function () {
                            return "4.1.1"
                        }
                    }]), e
                }();
            return t(document).on(n.CLICK_DATA_API, o.DATA_TOGGLE, function (e) {
                e.preventDefault(), a._jQueryInterface.call(t(this), "show")
            }), t.fn.tab = a._jQueryInterface, t.fn.tab.Constructor = a, t.fn.tab.noConflict = function () {
                return t.fn.tab = e, a._jQueryInterface
            }, a
        }(e);
        (function (t) {
            if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = t.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        })(e), t.Util = s, t.Alert = c, t.Button = f, t.Carousel = l, t.Collapse = u, t.Dropdown = h, t.Modal = d, t.Popover = m, t.Scrollspy = g, t.Tab = y, t.Tooltip = p, Object.defineProperty(t, "__esModule", {value: !0})
    }(e, n(1), n(3))
}, function (t, e, n) {
    "use strict";
    n.r(e), function (t) {
        for (
            /**!
             * @fileOverview Kickass library to create and place poppers near their reference elements.
             * @version 1.14.3
             * @license
             * Copyright (c) 2016 Federico Zivolo and contributors
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in all
             * copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
             * SOFTWARE.
             */
            var n = "undefined" != typeof window && "undefined" != typeof document, i = ["Edge", "Trident", "Firefox"], r = 0, o = 0; o < i.length; o += 1) if (n && navigator.userAgent.indexOf(i[o]) >= 0) {
            r = 1;
            break
        }
        var a = n && window.Promise ? function (t) {
            var e = !1;
            return function () {
                e || (e = !0, window.Promise.resolve().then(function () {
                    e = !1, t()
                }))
            }
        } : function (t) {
            var e = !1;
            return function () {
                e || (e = !0, setTimeout(function () {
                    e = !1, t()
                }, r))
            }
        };

        function s(t) {
            return t && "[object Function]" === {}.toString.call(t)
        }

        function c(t, e) {
            if (1 !== t.nodeType) return [];
            var n = getComputedStyle(t, null);
            return e ? n[e] : n
        }

        function f(t) {
            return "HTML" === t.nodeName ? t : t.parentNode || t.host
        }

        function l(t) {
            if (!t) return document.body;
            switch (t.nodeName) {
                case"HTML":
                case"BODY":
                    return t.ownerDocument.body;
                case"#document":
                    return t.body
            }
            var e = c(t), n = e.overflow, i = e.overflowX, r = e.overflowY;
            return /(auto|scroll|overlay)/.test(n + r + i) ? t : l(f(t))
        }

        var u = n && !(!window.MSInputMethodContext || !document.documentMode),
            h = n && /MSIE 10/.test(navigator.userAgent);

        function d(t) {
            return 11 === t ? u : 10 === t ? h : u || h
        }

        function p(t) {
            if (!t) return document.documentElement;
            for (var e = d(10) ? document.body : null, n = t.offsetParent; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent;
            var i = n && n.nodeName;
            return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === c(n, "position") ? p(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
        }

        function m(t) {
            return null !== t.parentNode ? m(t.parentNode) : t
        }

        function g(t, e) {
            if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
            var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING, i = n ? t : e, r = n ? e : t,
                o = document.createRange();
            o.setStart(i, 0), o.setEnd(r, 0);
            var a, s, c = o.commonAncestorContainer;
            if (t !== c && e !== c || i.contains(r)) return "BODY" === (s = (a = c).nodeName) || "HTML" !== s && p(a.firstElementChild) !== a ? p(c) : c;
            var f = m(t);
            return f.host ? g(f.host, e) : g(t, m(e).host)
        }

        function y(t) {
            var e = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                n = t.nodeName;
            if ("BODY" === n || "HTML" === n) {
                var i = t.ownerDocument.documentElement;
                return (t.ownerDocument.scrollingElement || i)[e]
            }
            return t[e]
        }

        function v(t, e) {
            var n = "x" === e ? "Left" : "Top", i = "Left" === n ? "Right" : "Bottom";
            return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10)
        }

        function _(t, e, n, i) {
            return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], d(10) ? n["offset" + t] + i["margin" + ("Height" === t ? "Top" : "Left")] + i["margin" + ("Height" === t ? "Bottom" : "Right")] : 0)
        }

        function b() {
            var t = document.body, e = document.documentElement, n = d(10) && getComputedStyle(e);
            return {height: _("Height", t, e, n), width: _("Width", t, e, n)}
        }

        var x = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }, w = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(), T = function (t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }, E = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        };

        function D(t) {
            return E({}, t, {right: t.left + t.width, bottom: t.top + t.height})
        }

        function C(t) {
            var e = {};
            try {
                if (d(10)) {
                    e = t.getBoundingClientRect();
                    var n = y(t, "top"), i = y(t, "left");
                    e.top += n, e.left += i, e.bottom += n, e.right += i
                } else e = t.getBoundingClientRect()
            } catch (t) {
            }
            var r = {left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top},
                o = "HTML" === t.nodeName ? b() : {}, a = o.width || t.clientWidth || r.right - r.left,
                s = o.height || t.clientHeight || r.bottom - r.top, f = t.offsetWidth - a, l = t.offsetHeight - s;
            if (f || l) {
                var u = c(t);
                f -= v(u, "x"), l -= v(u, "y"), r.width -= f, r.height -= l
            }
            return D(r)
        }

        function S(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = d(10),
                r = "HTML" === e.nodeName, o = C(t), a = C(e), s = l(t), f = c(e), u = parseFloat(f.borderTopWidth, 10),
                h = parseFloat(f.borderLeftWidth, 10);
            n && "HTML" === e.nodeName && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
            var p = D({top: o.top - a.top - u, left: o.left - a.left - h, width: o.width, height: o.height});
            if (p.marginTop = 0, p.marginLeft = 0, !i && r) {
                var m = parseFloat(f.marginTop, 10), g = parseFloat(f.marginLeft, 10);
                p.top -= u - m, p.bottom -= u - m, p.left -= h - g, p.right -= h - g, p.marginTop = m, p.marginLeft = g
            }
            return (i && !n ? e.contains(s) : e === s && "BODY" !== s.nodeName) && (p = function (t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = y(e, "top"),
                    r = y(e, "left"), o = n ? -1 : 1;
                return t.top += i * o, t.bottom += i * o, t.left += r * o, t.right += r * o, t
            }(p, e)), p
        }

        function A(t) {
            if (!t || !t.parentElement || d()) return document.documentElement;
            for (var e = t.parentElement; e && "none" === c(e, "transform");) e = e.parentElement;
            return e || document.documentElement
        }

        function N(t, e, n, i) {
            var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o = {top: 0, left: 0},
                a = r ? A(t) : g(t, e);
            if ("viewport" === i) o = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = t.ownerDocument.documentElement, i = S(t, n),
                    r = Math.max(n.clientWidth, window.innerWidth || 0),
                    o = Math.max(n.clientHeight, window.innerHeight || 0), a = e ? 0 : y(n), s = e ? 0 : y(n, "left");
                return D({top: a - i.top + i.marginTop, left: s - i.left + i.marginLeft, width: r, height: o})
            }(a, r); else {
                var s = void 0;
                "scrollParent" === i ? "BODY" === (s = l(f(e))).nodeName && (s = t.ownerDocument.documentElement) : s = "window" === i ? t.ownerDocument.documentElement : i;
                var u = S(s, a, r);
                if ("HTML" !== s.nodeName || function t(e) {
                    var n = e.nodeName;
                    return "BODY" !== n && "HTML" !== n && ("fixed" === c(e, "position") || t(f(e)))
                }(a)) o = u; else {
                    var h = b(), d = h.height, p = h.width;
                    o.top += u.top - u.marginTop, o.bottom = d + u.top, o.left += u.left - u.marginLeft, o.right = p + u.left
                }
            }
            return o.left += n, o.top += n, o.right -= n, o.bottom -= n, o
        }

        function P(t, e, n, i, r) {
            var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === t.indexOf("auto")) return t;
            var a = N(n, i, o, r), s = {
                top: {width: a.width, height: e.top - a.top},
                right: {width: a.right - e.right, height: a.height},
                bottom: {width: a.width, height: a.bottom - e.bottom},
                left: {width: e.left - a.left, height: a.height}
            }, c = Object.keys(s).map(function (t) {
                return E({key: t}, s[t], {area: (e = s[t], e.width * e.height)});
                var e
            }).sort(function (t, e) {
                return e.area - t.area
            }), f = c.filter(function (t) {
                var e = t.width, i = t.height;
                return e >= n.clientWidth && i >= n.clientHeight
            }), l = f.length > 0 ? f[0].key : c[0].key, u = t.split("-")[1];
            return l + (u ? "-" + u : "")
        }

        function M(t, e, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return S(n, i ? A(e) : g(e, n), i)
        }

        function k(t) {
            var e = getComputedStyle(t), n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
                i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
            return {width: t.offsetWidth + i, height: t.offsetHeight + n}
        }

        function I(t) {
            var e = {left: "right", right: "left", bottom: "top", top: "bottom"};
            return t.replace(/left|right|bottom|top/g, function (t) {
                return e[t]
            })
        }

        function O(t, e, n) {
            n = n.split("-")[0];
            var i = k(t), r = {width: i.width, height: i.height}, o = -1 !== ["right", "left"].indexOf(n),
                a = o ? "top" : "left", s = o ? "left" : "top", c = o ? "height" : "width", f = o ? "width" : "height";
            return r[a] = e[a] + e[c] / 2 - i[c] / 2, r[s] = n === s ? e[s] - i[f] : e[I(s)], r
        }

        function L(t, e) {
            return Array.prototype.find ? t.find(e) : t.filter(e)[0]
        }

        function W(t, e, n) {
            return (void 0 === n ? t : t.slice(0, function (t, e, n) {
                if (Array.prototype.findIndex) return t.findIndex(function (t) {
                    return t[e] === n
                });
                var i = L(t, function (t) {
                    return t[e] === n
                });
                return t.indexOf(i)
            }(t, "name", n))).forEach(function (t) {
                t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var n = t.function || t.fn;
                t.enabled && s(n) && (e.offsets.popper = D(e.offsets.popper), e.offsets.reference = D(e.offsets.reference), e = n(e, t))
            }), e
        }

        function R(t, e) {
            return t.some(function (t) {
                var n = t.name;
                return t.enabled && n === e
            })
        }

        function F(t) {
            for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
                var r = e[i], o = r ? "" + r + n : t;
                if (void 0 !== document.body.style[o]) return o
            }
            return null
        }

        function H(t) {
            var e = t.ownerDocument;
            return e ? e.defaultView : window
        }

        function j(t, e, n, i) {
            n.updateBound = i, H(t).addEventListener("resize", n.updateBound, {passive: !0});
            var r = l(t);
            return function t(e, n, i, r) {
                var o = "BODY" === e.nodeName, a = o ? e.ownerDocument.defaultView : e;
                a.addEventListener(n, i, {passive: !0}), o || t(l(a.parentNode), n, i, r), r.push(a)
            }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
        }

        function U() {
            var t, e;
            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, H(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
                t.removeEventListener("scroll", e.updateBound)
            }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
        }

        function B(t) {
            return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
        }

        function V(t, e) {
            Object.keys(e).forEach(function (n) {
                var i = "";
                -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && B(e[n]) && (i = "px"), t.style[n] = e[n] + i
            })
        }

        function q(t, e, n) {
            var i = L(t, function (t) {
                return t.name === e
            }), r = !!i && t.some(function (t) {
                return t.name === n && t.enabled && t.order < i.order
            });
            if (!r) {
                var o = "`" + e + "`", a = "`" + n + "`";
                console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
            }
            return r
        }

        var Y = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            z = Y.slice(3);

        function G(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = z.indexOf(t),
                i = z.slice(n + 1).concat(z.slice(0, n));
            return e ? i.reverse() : i
        }

        var $ = {FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise"};

        function X(t, e, n, i) {
            var r = [0, 0], o = -1 !== ["right", "left"].indexOf(i), a = t.split(/(\+|\-)/).map(function (t) {
                return t.trim()
            }), s = a.indexOf(L(a, function (t) {
                return -1 !== t.search(/,|\s/)
            }));
            a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var c = /\s*,\s*|\s+/,
                f = -1 !== s ? [a.slice(0, s).concat([a[s].split(c)[0]]), [a[s].split(c)[1]].concat(a.slice(s + 1))] : [a];
            return (f = f.map(function (t, i) {
                var r = (1 === i ? !o : o) ? "height" : "width", a = !1;
                return t.reduce(function (t, e) {
                    return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, a = !0, t) : a ? (t[t.length - 1] += e, a = !1, t) : t.concat(e)
                }, []).map(function (t) {
                    return function (t, e, n, i) {
                        var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), o = +r[1], a = r[2];
                        if (!o) return t;
                        if (0 === a.indexOf("%")) {
                            var s = void 0;
                            switch (a) {
                                case"%p":
                                    s = n;
                                    break;
                                case"%":
                                case"%r":
                                default:
                                    s = i
                            }
                            return D(s)[e] / 100 * o
                        }
                        if ("vh" === a || "vw" === a) return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                        return o
                    }(t, r, e, n)
                })
            })).forEach(function (t, e) {
                t.forEach(function (n, i) {
                    B(n) && (r[e] += n * ("-" === t[i - 1] ? -1 : 1))
                })
            }), r
        }

        var K = {
            placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
            }, onUpdate: function () {
            }, modifiers: {
                shift: {
                    order: 100, enabled: !0, fn: function (t) {
                        var e = t.placement, n = e.split("-")[0], i = e.split("-")[1];
                        if (i) {
                            var r = t.offsets, o = r.reference, a = r.popper, s = -1 !== ["bottom", "top"].indexOf(n),
                                c = s ? "left" : "top", f = s ? "width" : "height",
                                l = {start: T({}, c, o[c]), end: T({}, c, o[c] + o[f] - a[f])};
                            t.offsets.popper = E({}, a, l[i])
                        }
                        return t
                    }
                }, offset: {
                    order: 200, enabled: !0, fn: function (t, e) {
                        var n = e.offset, i = t.placement, r = t.offsets, o = r.popper, a = r.reference,
                            s = i.split("-")[0], c = void 0;
                        return c = B(+n) ? [+n, 0] : X(n, o, a, s), "left" === s ? (o.top += c[0], o.left -= c[1]) : "right" === s ? (o.top += c[0], o.left += c[1]) : "top" === s ? (o.left += c[0], o.top -= c[1]) : "bottom" === s && (o.left += c[0], o.top += c[1]), t.popper = o, t
                    }, offset: 0
                }, preventOverflow: {
                    order: 300, enabled: !0, fn: function (t, e) {
                        var n = e.boundariesElement || p(t.instance.popper);
                        t.instance.reference === n && (n = p(n));
                        var i = F("transform"), r = t.instance.popper.style, o = r.top, a = r.left, s = r[i];
                        r.top = "", r.left = "", r[i] = "";
                        var c = N(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                        r.top = o, r.left = a, r[i] = s, e.boundaries = c;
                        var f = e.priority, l = t.offsets.popper, u = {
                            primary: function (t) {
                                var n = l[t];
                                return l[t] < c[t] && !e.escapeWithReference && (n = Math.max(l[t], c[t])), T({}, t, n)
                            }, secondary: function (t) {
                                var n = "right" === t ? "left" : "top", i = l[n];
                                return l[t] > c[t] && !e.escapeWithReference && (i = Math.min(l[n], c[t] - ("right" === t ? l.width : l.height))), T({}, n, i)
                            }
                        };
                        return f.forEach(function (t) {
                            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                            l = E({}, l, u[e](t))
                        }), t.offsets.popper = l, t
                    }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
                }, keepTogether: {
                    order: 400, enabled: !0, fn: function (t) {
                        var e = t.offsets, n = e.popper, i = e.reference, r = t.placement.split("-")[0], o = Math.floor,
                            a = -1 !== ["top", "bottom"].indexOf(r), s = a ? "right" : "bottom", c = a ? "left" : "top",
                            f = a ? "width" : "height";
                        return n[s] < o(i[c]) && (t.offsets.popper[c] = o(i[c]) - n[f]), n[c] > o(i[s]) && (t.offsets.popper[c] = o(i[s])), t
                    }
                }, arrow: {
                    order: 500, enabled: !0, fn: function (t, e) {
                        var n;
                        if (!q(t.instance.modifiers, "arrow", "keepTogether")) return t;
                        var i = e.element;
                        if ("string" == typeof i) {
                            if (!(i = t.instance.popper.querySelector(i))) return t
                        } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                        var r = t.placement.split("-")[0], o = t.offsets, a = o.popper, s = o.reference,
                            f = -1 !== ["left", "right"].indexOf(r), l = f ? "height" : "width", u = f ? "Top" : "Left",
                            h = u.toLowerCase(), d = f ? "left" : "top", p = f ? "bottom" : "right", m = k(i)[l];
                        s[p] - m < a[h] && (t.offsets.popper[h] -= a[h] - (s[p] - m)), s[h] + m > a[p] && (t.offsets.popper[h] += s[h] + m - a[p]), t.offsets.popper = D(t.offsets.popper);
                        var g = s[h] + s[l] / 2 - m / 2, y = c(t.instance.popper), v = parseFloat(y["margin" + u], 10),
                            _ = parseFloat(y["border" + u + "Width"], 10), b = g - t.offsets.popper[h] - v - _;
                        return b = Math.max(Math.min(a[l] - m, b), 0), t.arrowElement = i, t.offsets.arrow = (T(n = {}, h, Math.round(b)), T(n, d, ""), n), t
                    }, element: "[x-arrow]"
                }, flip: {
                    order: 600, enabled: !0, fn: function (t, e) {
                        if (R(t.instance.modifiers, "inner")) return t;
                        if (t.flipped && t.placement === t.originalPlacement) return t;
                        var n = N(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                            i = t.placement.split("-")[0], r = I(i), o = t.placement.split("-")[1] || "", a = [];
                        switch (e.behavior) {
                            case $.FLIP:
                                a = [i, r];
                                break;
                            case $.CLOCKWISE:
                                a = G(i);
                                break;
                            case $.COUNTERCLOCKWISE:
                                a = G(i, !0);
                                break;
                            default:
                                a = e.behavior
                        }
                        return a.forEach(function (s, c) {
                            if (i !== s || a.length === c + 1) return t;
                            i = t.placement.split("-")[0], r = I(i);
                            var f = t.offsets.popper, l = t.offsets.reference, u = Math.floor,
                                h = "left" === i && u(f.right) > u(l.left) || "right" === i && u(f.left) < u(l.right) || "top" === i && u(f.bottom) > u(l.top) || "bottom" === i && u(f.top) < u(l.bottom),
                                d = u(f.left) < u(n.left), p = u(f.right) > u(n.right), m = u(f.top) < u(n.top),
                                g = u(f.bottom) > u(n.bottom),
                                y = "left" === i && d || "right" === i && p || "top" === i && m || "bottom" === i && g,
                                v = -1 !== ["top", "bottom"].indexOf(i),
                                _ = !!e.flipVariations && (v && "start" === o && d || v && "end" === o && p || !v && "start" === o && m || !v && "end" === o && g);
                            (h || y || _) && (t.flipped = !0, (h || y) && (i = a[c + 1]), _ && (o = function (t) {
                                return "end" === t ? "start" : "start" === t ? "end" : t
                            }(o)), t.placement = i + (o ? "-" + o : ""), t.offsets.popper = E({}, t.offsets.popper, O(t.instance.popper, t.offsets.reference, t.placement)), t = W(t.instance.modifiers, t, "flip"))
                        }), t
                    }, behavior: "flip", padding: 5, boundariesElement: "viewport"
                }, inner: {
                    order: 700, enabled: !1, fn: function (t) {
                        var e = t.placement, n = e.split("-")[0], i = t.offsets, r = i.popper, o = i.reference,
                            a = -1 !== ["left", "right"].indexOf(n), s = -1 === ["top", "left"].indexOf(n);
                        return r[a ? "left" : "top"] = o[n] - (s ? r[a ? "width" : "height"] : 0), t.placement = I(e), t.offsets.popper = D(r), t
                    }
                }, hide: {
                    order: 800, enabled: !0, fn: function (t) {
                        if (!q(t.instance.modifiers, "hide", "preventOverflow")) return t;
                        var e = t.offsets.reference, n = L(t.instance.modifiers, function (t) {
                            return "preventOverflow" === t.name
                        }).boundaries;
                        if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                            if (!0 === t.hide) return t;
                            t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === t.hide) return t;
                            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                        }
                        return t
                    }
                }, computeStyle: {
                    order: 850, enabled: !0, fn: function (t, e) {
                        var n = e.x, i = e.y, r = t.offsets.popper, o = L(t.instance.modifiers, function (t) {
                            return "applyStyle" === t.name
                        }).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var a = void 0 !== o ? o : e.gpuAcceleration, s = C(p(t.instance.popper)),
                            c = {position: r.position}, f = {
                                left: Math.floor(r.left),
                                top: Math.round(r.top),
                                bottom: Math.round(r.bottom),
                                right: Math.floor(r.right)
                            }, l = "bottom" === n ? "top" : "bottom", u = "right" === i ? "left" : "right",
                            h = F("transform"), d = void 0, m = void 0;
                        if (m = "bottom" === l ? -s.height + f.bottom : f.top, d = "right" === u ? -s.width + f.right : f.left, a && h) c[h] = "translate3d(" + d + "px, " + m + "px, 0)", c[l] = 0, c[u] = 0, c.willChange = "transform"; else {
                            var g = "bottom" === l ? -1 : 1, y = "right" === u ? -1 : 1;
                            c[l] = m * g, c[u] = d * y, c.willChange = l + ", " + u
                        }
                        var v = {"x-placement": t.placement};
                        return t.attributes = E({}, v, t.attributes), t.styles = E({}, c, t.styles), t.arrowStyles = E({}, t.offsets.arrow, t.arrowStyles), t
                    }, gpuAcceleration: !0, x: "bottom", y: "right"
                }, applyStyle: {
                    order: 900, enabled: !0, fn: function (t) {
                        var e, n;
                        return V(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function (t) {
                            !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                        }), t.arrowElement && Object.keys(t.arrowStyles).length && V(t.arrowElement, t.arrowStyles), t
                    }, onLoad: function (t, e, n, i, r) {
                        var o = M(r, e, t, n.positionFixed),
                            a = P(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return e.setAttribute("x-placement", a), V(e, {position: n.positionFixed ? "fixed" : "absolute"}), n
                    }, gpuAcceleration: void 0
                }
            }
        }, Q = function () {
            function t(e, n) {
                var i = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                x(this, t), this.scheduleUpdate = function () {
                    return requestAnimationFrame(i.update)
                }, this.update = a(this.update.bind(this)), this.options = E({}, t.Defaults, r), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(E({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
                    i.options.modifiers[e] = E({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
                    return E({name: t}, i.options.modifiers[t])
                }).sort(function (t, e) {
                    return t.order - e.order
                }), this.modifiers.forEach(function (t) {
                    t.enabled && s(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
                }), this.update();
                var o = this.options.eventsEnabled;
                o && this.enableEventListeners(), this.state.eventsEnabled = o
            }

            return w(t, [{
                key: "update", value: function () {
                    return function () {
                        if (!this.state.isDestroyed) {
                            var t = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            t.offsets.reference = M(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = P(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = O(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = W(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy", value: function () {
                    return function () {
                        return this.state.isDestroyed = !0, R(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[F("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners", value: function () {
                    return function () {
                        this.state.eventsEnabled || (this.state = j(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners", value: function () {
                    return U.call(this)
                }
            }]), t
        }();
        Q.Utils = ("undefined" != typeof window ? window : t).PopperUtils, Q.placements = Y, Q.Defaults = K, e.default = Q
    }.call(this, n(0))
}, function (t, e, n) {
    var i;
    /*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
    /*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
    !function (e, n) {
        "use strict";
        "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function (t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return n(t)
        } : n(e)
    }("undefined" != typeof window ? window : this, function (n, r) {
        "use strict";
        var o = [], a = n.document, s = Object.getPrototypeOf, c = o.slice, f = o.concat, l = o.push, u = o.indexOf,
            h = {}, d = h.toString, p = h.hasOwnProperty, m = p.toString, g = m.call(Object), y = {}, v = function (t) {
                return "function" == typeof t && "number" != typeof t.nodeType
            }, _ = function (t) {
                return null != t && t === t.window
            }, b = {type: !0, src: !0, noModule: !0};

        function x(t, e, n) {
            var i, r = (e = e || a).createElement("script");
            if (r.text = t, n) for (i in b) n[i] && (r[i] = n[i]);
            e.head.appendChild(r).parentNode.removeChild(r)
        }

        function w(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? h[d.call(t)] || "object" : typeof t
        }

        var T = function (t, e) {
            return new T.fn.init(t, e)
        }, E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function D(t) {
            var e = !!t && "length" in t && t.length, n = w(t);
            return !v(t) && !_(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        T.fn = T.prototype = {
            jquery: "3.3.1", constructor: T, length: 0, toArray: function () {
                return c.call(this)
            }, get: function (t) {
                return null == t ? c.call(this) : t < 0 ? this[t + this.length] : this[t]
            }, pushStack: function (t) {
                var e = T.merge(this.constructor(), t);
                return e.prevObject = this, e
            }, each: function (t) {
                return T.each(this, t)
            }, map: function (t) {
                return this.pushStack(T.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
            }, slice: function () {
                return this.pushStack(c.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (t) {
                var e = this.length, n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: l, sort: o.sort, splice: o.splice
        }, T.extend = T.fn.extend = function () {
            var t, e, n, i, r, o, a = arguments[0] || {}, s = 1, c = arguments.length, f = !1;
            for ("boolean" == typeof a && (f = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), s === c && (a = this, s--); s < c; s++) if (null != (t = arguments[s])) for (e in t) n = a[e], a !== (i = t[e]) && (f && i && (T.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && T.isPlainObject(n) ? n : {}, a[e] = T.extend(f, o, i)) : void 0 !== i && (a[e] = i));
            return a
        }, T.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
                throw new Error(t)
            },
            noop: function () {
            },
            isPlainObject: function (t) {
                var e, n;
                return !(!t || "[object Object]" !== d.call(t)) && (!(e = s(t)) || "function" == typeof(n = p.call(e, "constructor") && e.constructor) && m.call(n) === g)
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            globalEval: function (t) {
                x(t)
            },
            each: function (t, e) {
                var n, i = 0;
                if (D(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++) ; else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
                return t
            },
            trim: function (t) {
                return null == t ? "" : (t + "").replace(E, "")
            },
            makeArray: function (t, e) {
                var n = e || [];
                return null != t && (D(Object(t)) ? T.merge(n, "string" == typeof t ? [t] : t) : l.call(n, t)), n
            },
            inArray: function (t, e, n) {
                return null == e ? -1 : u.call(e, t, n)
            },
            merge: function (t, e) {
                for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
                return t.length = r, t
            },
            grep: function (t, e, n) {
                for (var i = [], r = 0, o = t.length, a = !n; r < o; r++) !e(t[r], r) !== a && i.push(t[r]);
                return i
            },
            map: function (t, e, n) {
                var i, r, o = 0, a = [];
                if (D(t)) for (i = t.length; o < i; o++) null != (r = e(t[o], o, n)) && a.push(r); else for (o in t) null != (r = e(t[o], o, n)) && a.push(r);
                return f.apply([], a)
            },
            guid: 1,
            support: y
        }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = o[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            h["[object " + e + "]"] = e.toLowerCase()
        });
        var C =
            /*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
            function (t) {
                var e, n, i, r, o, a, s, c, f, l, u, h, d, p, m, g, y, v, _, b = "sizzle" + 1 * new Date,
                    x = t.document, w = 0, T = 0, E = at(), D = at(), C = at(), S = function (t, e) {
                        return t === e && (u = !0), 0
                    }, A = {}.hasOwnProperty, N = [], P = N.pop, M = N.push, k = N.push, I = N.slice, O = function (t, e) {
                        for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
                        return -1
                    },
                    L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    W = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    F = "\\[" + W + "*(" + R + ")(?:" + W + "*([*^$|!~]?=)" + W + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + W + "*\\]",
                    H = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
                    j = new RegExp(W + "+", "g"),
                    U = new RegExp("^" + W + "+|((?:^|[^\\\\])(?:\\\\.)*)" + W + "+$", "g"),
                    B = new RegExp("^" + W + "*," + W + "*"), V = new RegExp("^" + W + "*([>+~]|" + W + ")" + W + "*"),
                    q = new RegExp("=" + W + "*([^\\]'\"]*?)" + W + "*\\]", "g"), Y = new RegExp(H),
                    z = new RegExp("^" + R + "$"), G = {
                        ID: new RegExp("^#(" + R + ")"),
                        CLASS: new RegExp("^\\.(" + R + ")"),
                        TAG: new RegExp("^(" + R + "|[*])"),
                        ATTR: new RegExp("^" + F),
                        PSEUDO: new RegExp("^" + H),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + W + "*(even|odd|(([+-]|)(\\d*)n|)" + W + "*(?:([+-]|)" + W + "*(\\d+)|))" + W + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + L + ")$", "i"),
                        needsContext: new RegExp("^" + W + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + W + "*((?:-\\d)?\\d*)" + W + "*\\)|)(?=[^-]|$)", "i")
                    }, $ = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/,
                    Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /[+~]/,
                    J = new RegExp("\\\\([\\da-f]{1,6}" + W + "?|(" + W + ")|.)", "ig"), tt = function (t, e, n) {
                        var i = "0x" + e - 65536;
                        return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    }, et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, nt = function (t, e) {
                        return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                    }, it = function () {
                        h()
                    }, rt = vt(function (t) {
                        return !0 === t.disabled && ("form" in t || "label" in t)
                    }, {dir: "parentNode", next: "legend"});
                try {
                    k.apply(N = I.call(x.childNodes), x.childNodes), N[x.childNodes.length].nodeType
                } catch (t) {
                    k = {
                        apply: N.length ? function (t, e) {
                            M.apply(t, I.call(e))
                        } : function (t, e) {
                            for (var n = t.length, i = 0; t[n++] = e[i++];) ;
                            t.length = n - 1
                        }
                    }
                }

                function ot(t, e, i, r) {
                    var o, s, f, l, u, p, y, v = e && e.ownerDocument, w = e ? e.nodeType : 9;
                    if (i = i || [], "string" != typeof t || !t || 1 !== w && 9 !== w && 11 !== w) return i;
                    if (!r && ((e ? e.ownerDocument || e : x) !== d && h(e), e = e || d, m)) {
                        if (11 !== w && (u = Q.exec(t))) if (o = u[1]) {
                            if (9 === w) {
                                if (!(f = e.getElementById(o))) return i;
                                if (f.id === o) return i.push(f), i
                            } else if (v && (f = v.getElementById(o)) && _(e, f) && f.id === o) return i.push(f), i
                        } else {
                            if (u[2]) return k.apply(i, e.getElementsByTagName(t)), i;
                            if ((o = u[3]) && n.getElementsByClassName && e.getElementsByClassName) return k.apply(i, e.getElementsByClassName(o)), i
                        }
                        if (n.qsa && !C[t + " "] && (!g || !g.test(t))) {
                            if (1 !== w) v = e, y = t; else if ("object" !== e.nodeName.toLowerCase()) {
                                for ((l = e.getAttribute("id")) ? l = l.replace(et, nt) : e.setAttribute("id", l = b), s = (p = a(t)).length; s--;) p[s] = "#" + l + " " + yt(p[s]);
                                y = p.join(","), v = Z.test(t) && mt(e.parentNode) || e
                            }
                            if (y) try {
                                return k.apply(i, v.querySelectorAll(y)), i
                            } catch (t) {
                            } finally {
                                l === b && e.removeAttribute("id")
                            }
                        }
                    }
                    return c(t.replace(U, "$1"), e, i, r)
                }

                function at() {
                    var t = [];
                    return function e(n, r) {
                        return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }
                }

                function st(t) {
                    return t[b] = !0, t
                }

                function ct(t) {
                    var e = d.createElement("fieldset");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function ft(t, e) {
                    for (var n = t.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = e
                }

                function lt(t, e) {
                    var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                    if (i) return i;
                    if (n) for (; n = n.nextSibling;) if (n === e) return -1;
                    return t ? 1 : -1
                }

                function ut(t) {
                    return function (e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }

                function ht(t) {
                    return function (e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }

                function dt(t) {
                    return function (e) {
                        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && rt(e) === t : e.disabled === t : "label" in e && e.disabled === t
                    }
                }

                function pt(t) {
                    return st(function (e) {
                        return e = +e, st(function (n, i) {
                            for (var r, o = t([], n.length, e), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }

                function mt(t) {
                    return t && void 0 !== t.getElementsByTagName && t
                }

                for (e in n = ot.support = {}, o = ot.isXML = function (t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, h = ot.setDocument = function (t) {
                    var e, r, a = t ? t.ownerDocument || t : x;
                    return a !== d && 9 === a.nodeType && a.documentElement ? (p = (d = a).documentElement, m = !o(d), x !== d && (r = d.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", it, !1) : r.attachEvent && r.attachEvent("onunload", it)), n.attributes = ct(function (t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), n.getElementsByTagName = ct(function (t) {
                        return t.appendChild(d.createComment("")), !t.getElementsByTagName("*").length
                    }), n.getElementsByClassName = K.test(d.getElementsByClassName), n.getById = ct(function (t) {
                        return p.appendChild(t).id = b, !d.getElementsByName || !d.getElementsByName(b).length
                    }), n.getById ? (i.filter.ID = function (t) {
                        var e = t.replace(J, tt);
                        return function (t) {
                            return t.getAttribute("id") === e
                        }
                    }, i.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && m) {
                            var n = e.getElementById(t);
                            return n ? [n] : []
                        }
                    }) : (i.filter.ID = function (t) {
                        var e = t.replace(J, tt);
                        return function (t) {
                            var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }, i.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && m) {
                            var n, i, r, o = e.getElementById(t);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                                for (r = e.getElementsByName(t), i = 0; o = r[i++];) if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
                            }
                            return []
                        }
                    }), i.find.TAG = n.getElementsByTagName ? function (t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                    } : function (t, e) {
                        var n, i = [], r = 0, o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }, i.find.CLASS = n.getElementsByClassName && function (t, e) {
                        if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t)
                    }, y = [], g = [], (n.qsa = K.test(d.querySelectorAll)) && (ct(function (t) {
                        p.appendChild(t).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + W + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + W + "*(?:value|" + L + ")"), t.querySelectorAll("[id~=" + b + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]")
                    }), ct(function (t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = d.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + W + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                    })), (n.matchesSelector = K.test(v = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ct(function (t) {
                        n.disconnectedMatch = v.call(t, "*"), v.call(t, "[s!='']:x"), y.push("!=", H)
                    }), g = g.length && new RegExp(g.join("|")), y = y.length && new RegExp(y.join("|")), e = K.test(p.compareDocumentPosition), _ = e || K.test(p.contains) ? function (t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    } : function (t, e) {
                        if (e) for (; e = e.parentNode;) if (e === t) return !0;
                        return !1
                    }, S = e ? function (t, e) {
                        if (t === e) return u = !0, 0;
                        var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === d || t.ownerDocument === x && _(x, t) ? -1 : e === d || e.ownerDocument === x && _(x, e) ? 1 : l ? O(l, t) - O(l, e) : 0 : 4 & i ? -1 : 1)
                    } : function (t, e) {
                        if (t === e) return u = !0, 0;
                        var n, i = 0, r = t.parentNode, o = e.parentNode, a = [t], s = [e];
                        if (!r || !o) return t === d ? -1 : e === d ? 1 : r ? -1 : o ? 1 : l ? O(l, t) - O(l, e) : 0;
                        if (r === o) return lt(t, e);
                        for (n = t; n = n.parentNode;) a.unshift(n);
                        for (n = e; n = n.parentNode;) s.unshift(n);
                        for (; a[i] === s[i];) i++;
                        return i ? lt(a[i], s[i]) : a[i] === x ? -1 : s[i] === x ? 1 : 0
                    }, d) : d
                }, ot.matches = function (t, e) {
                    return ot(t, null, null, e)
                }, ot.matchesSelector = function (t, e) {
                    if ((t.ownerDocument || t) !== d && h(t), e = e.replace(q, "='$1']"), n.matchesSelector && m && !C[e + " "] && (!y || !y.test(e)) && (!g || !g.test(e))) try {
                        var i = v.call(t, e);
                        if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (t) {
                    }
                    return ot(e, d, null, [t]).length > 0
                }, ot.contains = function (t, e) {
                    return (t.ownerDocument || t) !== d && h(t), _(t, e)
                }, ot.attr = function (t, e) {
                    (t.ownerDocument || t) !== d && h(t);
                    var r = i.attrHandle[e.toLowerCase()],
                        o = r && A.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !m) : void 0;
                    return void 0 !== o ? o : n.attributes || !m ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
                }, ot.escape = function (t) {
                    return (t + "").replace(et, nt)
                }, ot.error = function (t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, ot.uniqueSort = function (t) {
                    var e, i = [], r = 0, o = 0;
                    if (u = !n.detectDuplicates, l = !n.sortStable && t.slice(0), t.sort(S), u) {
                        for (; e = t[o++];) e === t[o] && (r = i.push(o));
                        for (; r--;) t.splice(i[r], 1)
                    }
                    return l = null, t
                }, r = ot.getText = function (t) {
                    var e, n = "", i = 0, o = t.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += r(t)
                        } else if (3 === o || 4 === o) return t.nodeValue
                    } else for (; e = t[i++];) n += r(e);
                    return n
                }, (i = ot.selectors = {
                    cacheLength: 50,
                    createPseudo: st,
                    match: G,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (t) {
                            return t[1] = t[1].replace(J, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        }, CHILD: function (t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
                        }, PSEUDO: function (t) {
                            var e, n = !t[6] && t[2];
                            return G.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && Y.test(n) && (e = a(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (t) {
                            var e = t.replace(J, tt).toLowerCase();
                            return "*" === t ? function () {
                                return !0
                            } : function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        }, CLASS: function (t) {
                            var e = E[t + " "];
                            return e || (e = new RegExp("(^|" + W + ")" + t + "(" + W + "|$)")) && E(t, function (t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                        }, ATTR: function (t, e, n) {
                            return function (i) {
                                var r = ot.attr(i, t);
                                return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && r.indexOf(n) > -1 : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? (" " + r.replace(j, " ") + " ").indexOf(n) > -1 : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"))
                            }
                        }, CHILD: function (t, e, n, i, r) {
                            var o = "nth" !== t.slice(0, 3), a = "last" !== t.slice(-4), s = "of-type" === e;
                            return 1 === i && 0 === r ? function (t) {
                                return !!t.parentNode
                            } : function (e, n, c) {
                                var f, l, u, h, d, p, m = o !== a ? "nextSibling" : "previousSibling", g = e.parentNode,
                                    y = s && e.nodeName.toLowerCase(), v = !c && !s, _ = !1;
                                if (g) {
                                    if (o) {
                                        for (; m;) {
                                            for (h = e; h = h[m];) if (s ? h.nodeName.toLowerCase() === y : 1 === h.nodeType) return !1;
                                            p = m = "only" === t && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [a ? g.firstChild : g.lastChild], a && v) {
                                        for (_ = (d = (f = (l = (u = (h = g)[b] || (h[b] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[t] || [])[0] === w && f[1]) && f[2], h = d && g.childNodes[d]; h = ++d && h && h[m] || (_ = d = 0) || p.pop();) if (1 === h.nodeType && ++_ && h === e) {
                                            l[t] = [w, d, _];
                                            break
                                        }
                                    } else if (v && (_ = d = (f = (l = (u = (h = e)[b] || (h[b] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[t] || [])[0] === w && f[1]), !1 === _) for (; (h = ++d && h && h[m] || (_ = d = 0) || p.pop()) && ((s ? h.nodeName.toLowerCase() !== y : 1 !== h.nodeType) || !++_ || (v && ((l = (u = h[b] || (h[b] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[t] = [w, _]), h !== e));) ;
                                    return (_ -= r) === i || _ % i == 0 && _ / i >= 0
                                }
                            }
                        }, PSEUDO: function (t, e) {
                            var n,
                                r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                            return r[b] ? r(e) : r.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? st(function (t, n) {
                                for (var i, o = r(t, e), a = o.length; a--;) t[i = O(t, o[a])] = !(n[i] = o[a])
                            }) : function (t) {
                                return r(t, 0, n)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: st(function (t) {
                            var e = [], n = [], i = s(t.replace(U, "$1"));
                            return i[b] ? st(function (t, e, n, r) {
                                for (var o, a = i(t, null, r, []), s = t.length; s--;) (o = a[s]) && (t[s] = !(e[s] = o))
                            }) : function (t, r, o) {
                                return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
                            }
                        }), has: st(function (t) {
                            return function (e) {
                                return ot(t, e).length > 0
                            }
                        }), contains: st(function (t) {
                            return t = t.replace(J, tt), function (e) {
                                return (e.textContent || e.innerText || r(e)).indexOf(t) > -1
                            }
                        }), lang: st(function (t) {
                            return z.test(t || "") || ot.error("unsupported lang: " + t), t = t.replace(J, tt).toLowerCase(), function (e) {
                                var n;
                                do {
                                    if (n = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                        }), target: function (e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        }, root: function (t) {
                            return t === p
                        }, focus: function (t) {
                            return t === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        }, enabled: dt(!1), disabled: dt(!0), checked: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        }, selected: function (t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        }, empty: function (t) {
                            for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                            return !0
                        }, parent: function (t) {
                            return !i.pseudos.empty(t)
                        }, header: function (t) {
                            return X.test(t.nodeName)
                        }, input: function (t) {
                            return $.test(t.nodeName)
                        }, button: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        }, text: function (t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        }, first: pt(function () {
                            return [0]
                        }), last: pt(function (t, e) {
                            return [e - 1]
                        }), eq: pt(function (t, e, n) {
                            return [n < 0 ? n + e : n]
                        }), even: pt(function (t, e) {
                            for (var n = 0; n < e; n += 2) t.push(n);
                            return t
                        }), odd: pt(function (t, e) {
                            for (var n = 1; n < e; n += 2) t.push(n);
                            return t
                        }), lt: pt(function (t, e, n) {
                            for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                            return t
                        }), gt: pt(function (t, e, n) {
                            for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                            return t
                        })
                    }
                }).pseudos.nth = i.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) i.pseudos[e] = ut(e);
                for (e in{submit: !0, reset: !0}) i.pseudos[e] = ht(e);

                function gt() {
                }

                function yt(t) {
                    for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                    return i
                }

                function vt(t, e, n) {
                    var i = e.dir, r = e.next, o = r || i, a = n && "parentNode" === o, s = T++;
                    return e.first ? function (e, n, r) {
                        for (; e = e[i];) if (1 === e.nodeType || a) return t(e, n, r);
                        return !1
                    } : function (e, n, c) {
                        var f, l, u, h = [w, s];
                        if (c) {
                            for (; e = e[i];) if ((1 === e.nodeType || a) && t(e, n, c)) return !0
                        } else for (; e = e[i];) if (1 === e.nodeType || a) if (l = (u = e[b] || (e[b] = {}))[e.uniqueID] || (u[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e; else {
                            if ((f = l[o]) && f[0] === w && f[1] === s) return h[2] = f[2];
                            if (l[o] = h, h[2] = t(e, n, c)) return !0
                        }
                        return !1
                    }
                }

                function _t(t) {
                    return t.length > 1 ? function (e, n, i) {
                        for (var r = t.length; r--;) if (!t[r](e, n, i)) return !1;
                        return !0
                    } : t[0]
                }

                function bt(t, e, n, i, r) {
                    for (var o, a = [], s = 0, c = t.length, f = null != e; s < c; s++) (o = t[s]) && (n && !n(o, i, r) || (a.push(o), f && e.push(s)));
                    return a
                }

                function xt(t, e, n, i, r, o) {
                    return i && !i[b] && (i = xt(i)), r && !r[b] && (r = xt(r, o)), st(function (o, a, s, c) {
                        var f, l, u, h = [], d = [], p = a.length, m = o || function (t, e, n) {
                                for (var i = 0, r = e.length; i < r; i++) ot(t, e[i], n);
                                return n
                            }(e || "*", s.nodeType ? [s] : s, []), g = !t || !o && e ? m : bt(m, h, t, s, c),
                            y = n ? r || (o ? t : p || i) ? [] : a : g;
                        if (n && n(g, y, s, c), i) for (f = bt(y, d), i(f, [], s, c), l = f.length; l--;) (u = f[l]) && (y[d[l]] = !(g[d[l]] = u));
                        if (o) {
                            if (r || t) {
                                if (r) {
                                    for (f = [], l = y.length; l--;) (u = y[l]) && f.push(g[l] = u);
                                    r(null, y = [], f, c)
                                }
                                for (l = y.length; l--;) (u = y[l]) && (f = r ? O(o, u) : h[l]) > -1 && (o[f] = !(a[f] = u))
                            }
                        } else y = bt(y === a ? y.splice(p, y.length) : y), r ? r(null, a, y, c) : k.apply(a, y)
                    })
                }

                function wt(t) {
                    for (var e, n, r, o = t.length, a = i.relative[t[0].type], s = a || i.relative[" "], c = a ? 1 : 0, l = vt(function (t) {
                        return t === e
                    }, s, !0), u = vt(function (t) {
                        return O(e, t) > -1
                    }, s, !0), h = [function (t, n, i) {
                        var r = !a && (i || n !== f) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                        return e = null, r
                    }]; c < o; c++) if (n = i.relative[t[c].type]) h = [vt(_t(h), n)]; else {
                        if ((n = i.filter[t[c].type].apply(null, t[c].matches))[b]) {
                            for (r = ++c; r < o && !i.relative[t[r].type]; r++) ;
                            return xt(c > 1 && _t(h), c > 1 && yt(t.slice(0, c - 1).concat({value: " " === t[c - 2].type ? "*" : ""})).replace(U, "$1"), n, c < r && wt(t.slice(c, r)), r < o && wt(t = t.slice(r)), r < o && yt(t))
                        }
                        h.push(n)
                    }
                    return _t(h)
                }

                return gt.prototype = i.filters = i.pseudos, i.setFilters = new gt, a = ot.tokenize = function (t, e) {
                    var n, r, o, a, s, c, f, l = D[t + " "];
                    if (l) return e ? 0 : l.slice(0);
                    for (s = t, c = [], f = i.preFilter; s;) {
                        for (a in n && !(r = B.exec(s)) || (r && (s = s.slice(r[0].length) || s), c.push(o = [])), n = !1, (r = V.exec(s)) && (n = r.shift(), o.push({
                            value: n,
                            type: r[0].replace(U, " ")
                        }), s = s.slice(n.length)), i.filter) !(r = G[a].exec(s)) || f[a] && !(r = f[a](r)) || (n = r.shift(), o.push({
                            value: n,
                            type: a,
                            matches: r
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return e ? s.length : s ? ot.error(t) : D(t, c).slice(0)
                }, s = ot.compile = function (t, e) {
                    var n, r = [], o = [], s = C[t + " "];
                    if (!s) {
                        for (e || (e = a(t)), n = e.length; n--;) (s = wt(e[n]))[b] ? r.push(s) : o.push(s);
                        (s = C(t, function (t, e) {
                            var n = e.length > 0, r = t.length > 0, o = function (o, a, s, c, l) {
                                var u, p, g, y = 0, v = "0", _ = o && [], b = [], x = f,
                                    T = o || r && i.find.TAG("*", l), E = w += null == x ? 1 : Math.random() || .1,
                                    D = T.length;
                                for (l && (f = a === d || a || l); v !== D && null != (u = T[v]); v++) {
                                    if (r && u) {
                                        for (p = 0, a || u.ownerDocument === d || (h(u), s = !m); g = t[p++];) if (g(u, a || d, s)) {
                                            c.push(u);
                                            break
                                        }
                                        l && (w = E)
                                    }
                                    n && ((u = !g && u) && y--, o && _.push(u))
                                }
                                if (y += v, n && v !== y) {
                                    for (p = 0; g = e[p++];) g(_, b, a, s);
                                    if (o) {
                                        if (y > 0) for (; v--;) _[v] || b[v] || (b[v] = P.call(c));
                                        b = bt(b)
                                    }
                                    k.apply(c, b), l && !o && b.length > 0 && y + e.length > 1 && ot.uniqueSort(c)
                                }
                                return l && (w = E, f = x), _
                            };
                            return n ? st(o) : o
                        }(o, r))).selector = t
                    }
                    return s
                }, c = ot.select = function (t, e, n, r) {
                    var o, c, f, l, u, h = "function" == typeof t && t, d = !r && a(t = h.selector || t);
                    if (n = n || [], 1 === d.length) {
                        if ((c = d[0] = d[0].slice(0)).length > 2 && "ID" === (f = c[0]).type && 9 === e.nodeType && m && i.relative[c[1].type]) {
                            if (!(e = (i.find.ID(f.matches[0].replace(J, tt), e) || [])[0])) return n;
                            h && (e = e.parentNode), t = t.slice(c.shift().value.length)
                        }
                        for (o = G.needsContext.test(t) ? 0 : c.length; o-- && (f = c[o], !i.relative[l = f.type]);) if ((u = i.find[l]) && (r = u(f.matches[0].replace(J, tt), Z.test(c[0].type) && mt(e.parentNode) || e))) {
                            if (c.splice(o, 1), !(t = r.length && yt(c))) return k.apply(n, r), n;
                            break
                        }
                    }
                    return (h || s(t, d))(r, e, !m, n, !e || Z.test(t) && mt(e.parentNode) || e), n
                }, n.sortStable = b.split("").sort(S).join("") === b, n.detectDuplicates = !!u, h(), n.sortDetached = ct(function (t) {
                    return 1 & t.compareDocumentPosition(d.createElement("fieldset"))
                }), ct(function (t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || ft("type|href|height|width", function (t, e, n) {
                    if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), n.attributes && ct(function (t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || ft("value", function (t, e, n) {
                    if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                }), ct(function (t) {
                    return null == t.getAttribute("disabled")
                }) || ft(L, function (t, e, n) {
                    var i;
                    if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }), ot
            }(n);
        T.find = C, T.expr = C.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = C.uniqueSort, T.text = C.getText, T.isXMLDoc = C.isXML, T.contains = C.contains, T.escapeSelector = C.escape;
        var S = function (t, e, n) {
            for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
                if (r && T(t).is(n)) break;
                i.push(t)
            }
            return i
        }, A = function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }, N = T.expr.match.needsContext;

        function P(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }

        var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function k(t, e, n) {
            return v(e) ? T.grep(t, function (t, i) {
                return !!e.call(t, i, t) !== n
            }) : e.nodeType ? T.grep(t, function (t) {
                return t === e !== n
            }) : "string" != typeof e ? T.grep(t, function (t) {
                return u.call(e, t) > -1 !== n
            }) : T.filter(e, t, n)
        }

        T.filter = function (t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? T.find.matchesSelector(i, t) ? [i] : [] : T.find.matches(t, T.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, T.fn.extend({
            find: function (t) {
                var e, n, i = this.length, r = this;
                if ("string" != typeof t) return this.pushStack(T(t).filter(function () {
                    for (e = 0; e < i; e++) if (T.contains(r[e], this)) return !0
                }));
                for (n = this.pushStack([]), e = 0; e < i; e++) T.find(t, r[e], n);
                return i > 1 ? T.uniqueSort(n) : n
            }, filter: function (t) {
                return this.pushStack(k(this, t || [], !1))
            }, not: function (t) {
                return this.pushStack(k(this, t || [], !0))
            }, is: function (t) {
                return !!k(this, "string" == typeof t && N.test(t) ? T(t) : t || [], !1).length
            }
        });
        var I, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (T.fn.init = function (t, e, n) {
            var i, r;
            if (!t) return this;
            if (n = n || I, "string" == typeof t) {
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : O.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof T ? e[0] : e, T.merge(this, T.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : a, !0)), M.test(i[1]) && T.isPlainObject(e)) for (i in e) v(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return (r = a.getElementById(i[2])) && (this[0] = r, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : v(t) ? void 0 !== n.ready ? n.ready(t) : t(T) : T.makeArray(t, this)
        }).prototype = T.fn, I = T(a);
        var L = /^(?:parents|prev(?:Until|All))/, W = {children: !0, contents: !0, next: !0, prev: !0};

        function R(t, e) {
            for (; (t = t[e]) && 1 !== t.nodeType;) ;
            return t
        }

        T.fn.extend({
            has: function (t) {
                var e = T(t, this), n = e.length;
                return this.filter(function () {
                    for (var t = 0; t < n; t++) if (T.contains(this, e[t])) return !0
                })
            }, closest: function (t, e) {
                var n, i = 0, r = this.length, o = [], a = "string" != typeof t && T(t);
                if (!N.test(t)) for (; i < r; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, t))) {
                    o.push(n);
                    break
                }
                return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o)
            }, index: function (t) {
                return t ? "string" == typeof t ? u.call(T(t), this[0]) : u.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (t, e) {
                return this.pushStack(T.uniqueSort(T.merge(this.get(), T(t, e))))
            }, addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), T.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            }, parents: function (t) {
                return S(t, "parentNode")
            }, parentsUntil: function (t, e, n) {
                return S(t, "parentNode", n)
            }, next: function (t) {
                return R(t, "nextSibling")
            }, prev: function (t) {
                return R(t, "previousSibling")
            }, nextAll: function (t) {
                return S(t, "nextSibling")
            }, prevAll: function (t) {
                return S(t, "previousSibling")
            }, nextUntil: function (t, e, n) {
                return S(t, "nextSibling", n)
            }, prevUntil: function (t, e, n) {
                return S(t, "previousSibling", n)
            }, siblings: function (t) {
                return A((t.parentNode || {}).firstChild, t)
            }, children: function (t) {
                return A(t.firstChild)
            }, contents: function (t) {
                return P(t, "iframe") ? t.contentDocument : (P(t, "template") && (t = t.content || t), T.merge([], t.childNodes))
            }
        }, function (t, e) {
            T.fn[t] = function (n, i) {
                var r = T.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = T.filter(i, r)), this.length > 1 && (W[t] || T.uniqueSort(r), L.test(t) && r.reverse()), this.pushStack(r)
            }
        });
        var F = /[^\x20\t\r\n\f]+/g;

        function H(t) {
            return t
        }

        function j(t) {
            throw t
        }

        function U(t, e, n, i) {
            var r;
            try {
                t && v(r = t.promise) ? r.call(t).done(e).fail(n) : t && v(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
            } catch (t) {
                n.apply(void 0, [t])
            }
        }

        T.Callbacks = function (t) {
            t = "string" == typeof t ? function (t) {
                var e = {};
                return T.each(t.match(F) || [], function (t, n) {
                    e[n] = !0
                }), e
            }(t) : T.extend({}, t);
            var e, n, i, r, o = [], a = [], s = -1, c = function () {
                for (r = r || t.once, i = e = !0; a.length; s = -1) for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && t.stopOnFalse && (s = o.length, n = !1);
                t.memory || (n = !1), e = !1, r && (o = n ? [] : "")
            }, f = {
                add: function () {
                    return o && (n && !e && (s = o.length - 1, a.push(n)), function e(n) {
                        T.each(n, function (n, i) {
                            v(i) ? t.unique && f.has(i) || o.push(i) : i && i.length && "string" !== w(i) && e(i)
                        })
                    }(arguments), n && !e && c()), this
                }, remove: function () {
                    return T.each(arguments, function (t, e) {
                        for (var n; (n = T.inArray(e, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                    }), this
                }, has: function (t) {
                    return t ? T.inArray(t, o) > -1 : o.length > 0
                }, empty: function () {
                    return o && (o = []), this
                }, disable: function () {
                    return r = a = [], o = n = "", this
                }, disabled: function () {
                    return !o
                }, lock: function () {
                    return r = a = [], n || e || (o = n = ""), this
                }, locked: function () {
                    return !!r
                }, fireWith: function (t, n) {
                    return r || (n = [t, (n = n || []).slice ? n.slice() : n], a.push(n), e || c()), this
                }, fire: function () {
                    return f.fireWith(this, arguments), this
                }, fired: function () {
                    return !!i
                }
            };
            return f
        }, T.extend({
            Deferred: function (t) {
                var e = [["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2], ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]],
                    i = "pending", r = {
                        state: function () {
                            return i
                        }, always: function () {
                            return o.done(arguments).fail(arguments), this
                        }, catch: function (t) {
                            return r.then(null, t)
                        }, pipe: function () {
                            var t = arguments;
                            return T.Deferred(function (n) {
                                T.each(e, function (e, i) {
                                    var r = v(t[i[4]]) && t[i[4]];
                                    o[i[1]](function () {
                                        var t = r && r.apply(this, arguments);
                                        t && v(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        }, then: function (t, i, r) {
                            var o = 0;

                            function a(t, e, i, r) {
                                return function () {
                                    var s = this, c = arguments, f = function () {
                                        var n, f;
                                        if (!(t < o)) {
                                            if ((n = i.apply(s, c)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                            f = n && ("object" == typeof n || "function" == typeof n) && n.then, v(f) ? r ? f.call(n, a(o, e, H, r), a(o, e, j, r)) : (o++, f.call(n, a(o, e, H, r), a(o, e, j, r), a(o, e, H, e.notifyWith))) : (i !== H && (s = void 0, c = [n]), (r || e.resolveWith)(s, c))
                                        }
                                    }, l = r ? f : function () {
                                        try {
                                            f()
                                        } catch (n) {
                                            T.Deferred.exceptionHook && T.Deferred.exceptionHook(n, l.stackTrace), t + 1 >= o && (i !== j && (s = void 0, c = [n]), e.rejectWith(s, c))
                                        }
                                    };
                                    t ? l() : (T.Deferred.getStackHook && (l.stackTrace = T.Deferred.getStackHook()), n.setTimeout(l))
                                }
                            }

                            return T.Deferred(function (n) {
                                e[0][3].add(a(0, n, v(r) ? r : H, n.notifyWith)), e[1][3].add(a(0, n, v(t) ? t : H)), e[2][3].add(a(0, n, v(i) ? i : j))
                            }).promise()
                        }, promise: function (t) {
                            return null != t ? T.extend(t, r) : r
                        }
                    }, o = {};
                return T.each(e, function (t, n) {
                    var a = n[2], s = n[5];
                    r[n[1]] = a.add, s && a.add(function () {
                        i = s
                    }, e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), a.add(n[3].fire), o[n[0]] = function () {
                        return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
                    }, o[n[0] + "With"] = a.fireWith
                }), r.promise(o), t && t.call(o, o), o
            }, when: function (t) {
                var e = arguments.length, n = e, i = Array(n), r = c.call(arguments), o = T.Deferred(),
                    a = function (t) {
                        return function (n) {
                            i[t] = this, r[t] = arguments.length > 1 ? c.call(arguments) : n, --e || o.resolveWith(i, r)
                        }
                    };
                if (e <= 1 && (U(t, o.done(a(n)).resolve, o.reject, !e), "pending" === o.state() || v(r[n] && r[n].then))) return o.then();
                for (; n--;) U(r[n], a(n), o.reject);
                return o.promise()
            }
        });
        var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        T.Deferred.exceptionHook = function (t, e) {
            n.console && n.console.warn && t && B.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }, T.readyException = function (t) {
            n.setTimeout(function () {
                throw t
            })
        };
        var V = T.Deferred();

        function q() {
            a.removeEventListener("DOMContentLoaded", q), n.removeEventListener("load", q), T.ready()
        }

        T.fn.ready = function (t) {
            return V.then(t).catch(function (t) {
                T.readyException(t)
            }), this
        }, T.extend({
            isReady: !1, readyWait: 1, ready: function (t) {
                (!0 === t ? --T.readyWait : T.isReady) || (T.isReady = !0, !0 !== t && --T.readyWait > 0 || V.resolveWith(a, [T]))
            }
        }), T.ready.then = V.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? n.setTimeout(T.ready) : (a.addEventListener("DOMContentLoaded", q), n.addEventListener("load", q));
        var Y = function (t, e, n, i, r, o, a) {
            var s = 0, c = t.length, f = null == n;
            if ("object" === w(n)) for (s in r = !0, n) Y(t, e, s, n[s], !0, o, a); else if (void 0 !== i && (r = !0, v(i) || (a = !0), f && (a ? (e.call(t, i), e = null) : (f = e, e = function (t, e, n) {
                return f.call(T(t), n)
            })), e)) for (; s < c; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
            return r ? t : f ? e.call(t) : c ? e(t[0], n) : o
        }, z = /^-ms-/, G = /-([a-z])/g;

        function $(t, e) {
            return e.toUpperCase()
        }

        function X(t) {
            return t.replace(z, "ms-").replace(G, $)
        }

        var K = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };

        function Q() {
            this.expando = T.expando + Q.uid++
        }

        Q.uid = 1, Q.prototype = {
            cache: function (t) {
                var e = t[this.expando];
                return e || (e = {}, K(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            }, set: function (t, e, n) {
                var i, r = this.cache(t);
                if ("string" == typeof e) r[X(e)] = n; else for (i in e) r[X(i)] = e[i];
                return r
            }, get: function (t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][X(e)]
            }, access: function (t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
            }, remove: function (t, e) {
                var n, i = t[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== e) {
                        n = (e = Array.isArray(e) ? e.map(X) : (e = X(e)) in i ? [e] : e.match(F) || []).length;
                        for (; n--;) delete i[e[n]]
                    }
                    (void 0 === e || T.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            }, hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !T.isEmptyObject(e)
            }
        };
        var Z = new Q, J = new Q, tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, et = /[A-Z]/g;

        function nt(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType) if (i = "data-" + e.replace(et, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                try {
                    n = function (t) {
                        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t)
                    }(n)
                } catch (t) {
                }
                J.set(t, e, n)
            } else n = void 0;
            return n
        }

        T.extend({
            hasData: function (t) {
                return J.hasData(t) || Z.hasData(t)
            }, data: function (t, e, n) {
                return J.access(t, e, n)
            }, removeData: function (t, e) {
                J.remove(t, e)
            }, _data: function (t, e, n) {
                return Z.access(t, e, n)
            }, _removeData: function (t, e) {
                Z.remove(t, e)
            }
        }), T.fn.extend({
            data: function (t, e) {
                var n, i, r, o = this[0], a = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = J.get(o), 1 === o.nodeType && !Z.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = X(i.slice(5)), nt(o, i, r[i]));
                        Z.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function () {
                    J.set(this, t)
                }) : Y(this, function (e) {
                    var n;
                    if (o && void 0 === e) return void 0 !== (n = J.get(o, t)) ? n : void 0 !== (n = nt(o, t)) ? n : void 0;
                    this.each(function () {
                        J.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            }, removeData: function (t) {
                return this.each(function () {
                    J.remove(this, t)
                })
            }
        }), T.extend({
            queue: function (t, e, n) {
                var i;
                if (t) return e = (e || "fx") + "queue", i = Z.get(t, e), n && (!i || Array.isArray(n) ? i = Z.access(t, e, T.makeArray(n)) : i.push(n)), i || []
            }, dequeue: function (t, e) {
                e = e || "fx";
                var n = T.queue(t, e), i = n.length, r = n.shift(), o = T._queueHooks(t, e);
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, function () {
                    T.dequeue(t, e)
                }, o)), !i && o && o.empty.fire()
            }, _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return Z.get(t, n) || Z.access(t, n, {
                    empty: T.Callbacks("once memory").add(function () {
                        Z.remove(t, [e + "queue", n])
                    })
                })
            }
        }), T.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? T.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var n = T.queue(this, t, e);
                    T._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && T.dequeue(this, t)
                })
            }, dequeue: function (t) {
                return this.each(function () {
                    T.dequeue(this, t)
                })
            }, clearQueue: function (t) {
                return this.queue(t || "fx", [])
            }, promise: function (t, e) {
                var n, i = 1, r = T.Deferred(), o = this, a = this.length, s = function () {
                    --i || r.resolveWith(o, [o])
                };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) (n = Z.get(o[a], t + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(e)
            }
        });
        var it = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            rt = new RegExp("^(?:([+-])=|)(" + it + ")([a-z%]*)$", "i"), ot = ["Top", "Right", "Bottom", "Left"],
            at = function (t, e) {
                return "none" === (t = e || t).style.display || "" === t.style.display && T.contains(t.ownerDocument, t) && "none" === T.css(t, "display")
            }, st = function (t, e, n, i) {
                var r, o, a = {};
                for (o in e) a[o] = t.style[o], t.style[o] = e[o];
                for (o in r = n.apply(t, i || []), e) t.style[o] = a[o];
                return r
            };

        function ct(t, e, n, i) {
            var r, o, a = 20, s = i ? function () {
                    return i.cur()
                } : function () {
                    return T.css(t, e, "")
                }, c = s(), f = n && n[3] || (T.cssNumber[e] ? "" : "px"),
                l = (T.cssNumber[e] || "px" !== f && +c) && rt.exec(T.css(t, e));
            if (l && l[3] !== f) {
                for (c /= 2, f = f || l[3], l = +c || 1; a--;) T.style(t, e, l + f), (1 - o) * (1 - (o = s() / c || .5)) <= 0 && (a = 0), l /= o;
                l *= 2, T.style(t, e, l + f), n = n || []
            }
            return n && (l = +l || +c || 0, r = n[1] ? l + (n[1] + 1) * n[2] : +n[2], i && (i.unit = f, i.start = l, i.end = r)), r
        }

        var ft = {};

        function lt(t) {
            var e, n = t.ownerDocument, i = t.nodeName, r = ft[i];
            return r || (e = n.body.appendChild(n.createElement(i)), r = T.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), ft[i] = r, r)
        }

        function ut(t, e) {
            for (var n, i, r = [], o = 0, a = t.length; o < a; o++) (i = t[o]).style && (n = i.style.display, e ? ("none" === n && (r[o] = Z.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && at(i) && (r[o] = lt(i))) : "none" !== n && (r[o] = "none", Z.set(i, "display", n)));
            for (o = 0; o < a; o++) null != r[o] && (t[o].style.display = r[o]);
            return t
        }

        T.fn.extend({
            show: function () {
                return ut(this, !0)
            }, hide: function () {
                return ut(this)
            }, toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    at(this) ? T(this).show() : T(this).hide()
                })
            }
        });
        var ht = /^(?:checkbox|radio)$/i, dt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            pt = /^$|^module$|\/(?:java|ecma)script/i, mt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function gt(t, e) {
            var n;
            return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && P(t, e) ? T.merge([t], n) : n
        }

        function yt(t, e) {
            for (var n = 0, i = t.length; n < i; n++) Z.set(t[n], "globalEval", !e || Z.get(e[n], "globalEval"))
        }

        mt.optgroup = mt.option, mt.tbody = mt.tfoot = mt.colgroup = mt.caption = mt.thead, mt.th = mt.td;
        var vt, _t, bt = /<|&#?\w+;/;

        function xt(t, e, n, i, r) {
            for (var o, a, s, c, f, l, u = e.createDocumentFragment(), h = [], d = 0, p = t.length; d < p; d++) if ((o = t[d]) || 0 === o) if ("object" === w(o)) T.merge(h, o.nodeType ? [o] : o); else if (bt.test(o)) {
                for (a = a || u.appendChild(e.createElement("div")), s = (dt.exec(o) || ["", ""])[1].toLowerCase(), c = mt[s] || mt._default, a.innerHTML = c[1] + T.htmlPrefilter(o) + c[2], l = c[0]; l--;) a = a.lastChild;
                T.merge(h, a.childNodes), (a = u.firstChild).textContent = ""
            } else h.push(e.createTextNode(o));
            for (u.textContent = "", d = 0; o = h[d++];) if (i && T.inArray(o, i) > -1) r && r.push(o); else if (f = T.contains(o.ownerDocument, o), a = gt(u.appendChild(o), "script"), f && yt(a), n) for (l = 0; o = a[l++];) pt.test(o.type || "") && n.push(o);
            return u
        }

        vt = a.createDocumentFragment().appendChild(a.createElement("div")), (_t = a.createElement("input")).setAttribute("type", "radio"), _t.setAttribute("checked", "checked"), _t.setAttribute("name", "t"), vt.appendChild(_t), y.checkClone = vt.cloneNode(!0).cloneNode(!0).lastChild.checked, vt.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!vt.cloneNode(!0).lastChild.defaultValue;
        var wt = a.documentElement, Tt = /^key/, Et = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Dt = /^([^.]*)(?:\.(.+)|)/;

        function Ct() {
            return !0
        }

        function St() {
            return !1
        }

        function At() {
            try {
                return a.activeElement
            } catch (t) {
            }
        }

        function Nt(t, e, n, i, r, o) {
            var a, s;
            if ("object" == typeof e) {
                for (s in"string" != typeof n && (i = i || n, n = void 0), e) Nt(t, s, n, i, e[s], o);
                return t
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = St; else if (!r) return t;
            return 1 === o && (a = r, (r = function (t) {
                return T().off(t), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = T.guid++)), t.each(function () {
                T.event.add(this, e, r, i, n)
            })
        }

        T.event = {
            global: {}, add: function (t, e, n, i, r) {
                var o, a, s, c, f, l, u, h, d, p, m, g = Z.get(t);
                if (g) for (n.handler && (n = (o = n).handler, r = o.selector), r && T.find.matchesSelector(wt, r), n.guid || (n.guid = T.guid++), (c = g.events) || (c = g.events = {}), (a = g.handle) || (a = g.handle = function (e) {
                    return void 0 !== T && T.event.triggered !== e.type ? T.event.dispatch.apply(t, arguments) : void 0
                }), f = (e = (e || "").match(F) || [""]).length; f--;) d = m = (s = Dt.exec(e[f]) || [])[1], p = (s[2] || "").split(".").sort(), d && (u = T.event.special[d] || {}, d = (r ? u.delegateType : u.bindType) || d, u = T.event.special[d] || {}, l = T.extend({
                    type: d,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && T.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (h = c[d]) || ((h = c[d] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, i, p, a) || t.addEventListener && t.addEventListener(d, a)), u.add && (u.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, l) : h.push(l), T.event.global[d] = !0)
            }, remove: function (t, e, n, i, r) {
                var o, a, s, c, f, l, u, h, d, p, m, g = Z.hasData(t) && Z.get(t);
                if (g && (c = g.events)) {
                    for (f = (e = (e || "").match(F) || [""]).length; f--;) if (d = m = (s = Dt.exec(e[f]) || [])[1], p = (s[2] || "").split(".").sort(), d) {
                        for (u = T.event.special[d] || {}, h = c[d = (i ? u.delegateType : u.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = h.length; o--;) l = h[o], !r && m !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || i && i !== l.selector && ("**" !== i || !l.selector) || (h.splice(o, 1), l.selector && h.delegateCount--, u.remove && u.remove.call(t, l));
                        a && !h.length && (u.teardown && !1 !== u.teardown.call(t, p, g.handle) || T.removeEvent(t, d, g.handle), delete c[d])
                    } else for (d in c) T.event.remove(t, d + e[f], n, i, !0);
                    T.isEmptyObject(c) && Z.remove(t, "handle events")
                }
            }, dispatch: function (t) {
                var e, n, i, r, o, a, s = T.event.fix(t), c = new Array(arguments.length),
                    f = (Z.get(this, "events") || {})[s.type] || [], l = T.event.special[s.type] || {};
                for (c[0] = s, e = 1; e < arguments.length; e++) c[e] = arguments[e];
                if (s.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, s)) {
                    for (a = T.event.handlers.call(this, s, f), e = 0; (r = a[e++]) && !s.isPropagationStopped();) for (s.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (i = ((T.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, c)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, s), s.result
                }
            }, handlers: function (t, e) {
                var n, i, r, o, a, s = [], c = e.delegateCount, f = t.target;
                if (c && f.nodeType && !("click" === t.type && t.button >= 1)) for (; f !== this; f = f.parentNode || this) if (1 === f.nodeType && ("click" !== t.type || !0 !== f.disabled)) {
                    for (o = [], a = {}, n = 0; n < c; n++) void 0 === a[r = (i = e[n]).selector + " "] && (a[r] = i.needsContext ? T(r, this).index(f) > -1 : T.find(r, this, null, [f]).length), a[r] && o.push(i);
                    o.length && s.push({elem: f, handlers: o})
                }
                return f = this, c < e.length && s.push({elem: f, handlers: e.slice(c)}), s
            }, addProp: function (t, e) {
                Object.defineProperty(T.Event.prototype, t, {
                    enumerable: !0, configurable: !0, get: v(e) ? function () {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[t]
                    }, set: function (e) {
                        Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                    }
                })
            }, fix: function (t) {
                return t[T.expando] ? t : new T.Event(t)
            }, special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== At() && this.focus) return this.focus(), !1
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        if (this === At() && this.blur) return this.blur(), !1
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && P(this, "input")) return this.click(), !1
                    }, _default: function (t) {
                        return P(t.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, T.removeEvent = function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, T.Event = function (t, e) {
            if (!(this instanceof T.Event)) return new T.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Ct : St, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && T.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[T.expando] = !0
        }, T.Event.prototype = {
            constructor: T.Event,
            isDefaultPrevented: St,
            isPropagationStopped: St,
            isImmediatePropagationStopped: St,
            isSimulated: !1,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = Ct, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = Ct, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = Ct, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, T.each({
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
            which: function (t) {
                var e = t.button;
                return null == t.which && Tt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Et.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, T.event.addProp), T.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            T.event.special[t] = {
                delegateType: e, bindType: e, handle: function (t) {
                    var n, i = t.relatedTarget, r = t.handleObj;
                    return i && (i === this || T.contains(this, i)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), T.fn.extend({
            on: function (t, e, n, i) {
                return Nt(this, t, e, n, i)
            }, one: function (t, e, n, i) {
                return Nt(this, t, e, n, i, 1)
            }, off: function (t, e, n) {
                var i, r;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, T(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = St), this.each(function () {
                    T.event.remove(this, t, n, e)
                })
            }
        });
        var Pt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Mt = /<script|<style|<link/i, kt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Ot(t, e) {
            return P(t, "table") && P(11 !== e.nodeType ? e : e.firstChild, "tr") && T(t).children("tbody")[0] || t
        }

        function Lt(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function Wt(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
        }

        function Rt(t, e) {
            var n, i, r, o, a, s, c, f;
            if (1 === e.nodeType) {
                if (Z.hasData(t) && (o = Z.access(t), a = Z.set(e, o), f = o.events)) for (r in delete a.handle, a.events = {}, f) for (n = 0, i = f[r].length; n < i; n++) T.event.add(e, r, f[r][n]);
                J.hasData(t) && (s = J.access(t), c = T.extend({}, s), J.set(e, c))
            }
        }

        function Ft(t, e, n, i) {
            e = f.apply([], e);
            var r, o, a, s, c, l, u = 0, h = t.length, d = h - 1, p = e[0], m = v(p);
            if (m || h > 1 && "string" == typeof p && !y.checkClone && kt.test(p)) return t.each(function (r) {
                var o = t.eq(r);
                m && (e[0] = p.call(this, r, o.html())), Ft(o, e, n, i)
            });
            if (h && (o = (r = xt(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
                for (s = (a = T.map(gt(r, "script"), Lt)).length; u < h; u++) c = r, u !== d && (c = T.clone(c, !0, !0), s && T.merge(a, gt(c, "script"))), n.call(t[u], c, u);
                if (s) for (l = a[a.length - 1].ownerDocument, T.map(a, Wt), u = 0; u < s; u++) c = a[u], pt.test(c.type || "") && !Z.access(c, "globalEval") && T.contains(l, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? T._evalUrl && T._evalUrl(c.src) : x(c.textContent.replace(It, ""), l, c))
            }
            return t
        }

        function Ht(t, e, n) {
            for (var i, r = e ? T.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || T.cleanData(gt(i)), i.parentNode && (n && T.contains(i.ownerDocument, i) && yt(gt(i, "script")), i.parentNode.removeChild(i));
            return t
        }

        T.extend({
            htmlPrefilter: function (t) {
                return t.replace(Pt, "<$1></$2>")
            }, clone: function (t, e, n) {
                var i, r, o, a, s, c, f, l = t.cloneNode(!0), u = T.contains(t.ownerDocument, t);
                if (!(y.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || T.isXMLDoc(t))) for (a = gt(l), i = 0, r = (o = gt(t)).length; i < r; i++) s = o[i], c = a[i], void 0, "input" === (f = c.nodeName.toLowerCase()) && ht.test(s.type) ? c.checked = s.checked : "input" !== f && "textarea" !== f || (c.defaultValue = s.defaultValue);
                if (e) if (n) for (o = o || gt(t), a = a || gt(l), i = 0, r = o.length; i < r; i++) Rt(o[i], a[i]); else Rt(t, l);
                return (a = gt(l, "script")).length > 0 && yt(a, !u && gt(t, "script")), l
            }, cleanData: function (t) {
                for (var e, n, i, r = T.event.special, o = 0; void 0 !== (n = t[o]); o++) if (K(n)) {
                    if (e = n[Z.expando]) {
                        if (e.events) for (i in e.events) r[i] ? T.event.remove(n, i) : T.removeEvent(n, i, e.handle);
                        n[Z.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
            }
        }), T.fn.extend({
            detach: function (t) {
                return Ht(this, t, !0)
            }, remove: function (t) {
                return Ht(this, t)
            }, text: function (t) {
                return Y(this, function (t) {
                    return void 0 === t ? T.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            }, append: function () {
                return Ft(this, arguments, function (t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ot(this, t).appendChild(t)
                })
            }, prepend: function () {
                return Ft(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = Ot(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            }, before: function () {
                return Ft(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            }, after: function () {
                return Ft(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            }, empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (T.cleanData(gt(t, !1)), t.textContent = "");
                return this
            }, clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function () {
                    return T.clone(this, t, e)
                })
            }, html: function (t) {
                return Y(this, function (t) {
                    var e = this[0] || {}, n = 0, i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Mt.test(t) && !mt[(dt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = T.htmlPrefilter(t);
                        try {
                            for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (T.cleanData(gt(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {
                        }
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            }, replaceWith: function () {
                var t = [];
                return Ft(this, arguments, function (e) {
                    var n = this.parentNode;
                    T.inArray(this, t) < 0 && (T.cleanData(gt(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), T.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            T.fn[t] = function (t) {
                for (var n, i = [], r = T(t), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), T(r[a])[e](n), l.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var jt = new RegExp("^(" + it + ")(?!px)[a-z%]+$", "i"), Ut = function (t) {
            var e = t.ownerDocument.defaultView;
            return e && e.opener || (e = n), e.getComputedStyle(t)
        }, Bt = new RegExp(ot.join("|"), "i");

        function Vt(t, e, n) {
            var i, r, o, a, s = t.style;
            return (n = n || Ut(t)) && ("" !== (a = n.getPropertyValue(e) || n[e]) || T.contains(t.ownerDocument, t) || (a = T.style(t, e)), !y.pixelBoxStyles() && jt.test(a) && Bt.test(e) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
        }

        function qt(t, e) {
            return {
                get: function () {
                    if (!t()) return (this.get = e).apply(this, arguments);
                    delete this.get
                }
            }
        }

        !function () {
            function t() {
                if (l) {
                    f.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", wt.appendChild(f).appendChild(l);
                    var t = n.getComputedStyle(l);
                    i = "1%" !== t.top, c = 12 === e(t.marginLeft), l.style.right = "60%", s = 36 === e(t.right), r = 36 === e(t.width), l.style.position = "absolute", o = 36 === l.offsetWidth || "absolute", wt.removeChild(f), l = null
                }
            }

            function e(t) {
                return Math.round(parseFloat(t))
            }

            var i, r, o, s, c, f = a.createElement("div"), l = a.createElement("div");
            l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, T.extend(y, {
                boxSizingReliable: function () {
                    return t(), r
                }, pixelBoxStyles: function () {
                    return t(), s
                }, pixelPosition: function () {
                    return t(), i
                }, reliableMarginLeft: function () {
                    return t(), c
                }, scrollboxSize: function () {
                    return t(), o
                }
            }))
        }();
        var Yt = /^(none|table(?!-c[ea]).+)/, zt = /^--/,
            Gt = {position: "absolute", visibility: "hidden", display: "block"},
            $t = {letterSpacing: "0", fontWeight: "400"}, Xt = ["Webkit", "Moz", "ms"],
            Kt = a.createElement("div").style;

        function Qt(t) {
            var e = T.cssProps[t];
            return e || (e = T.cssProps[t] = function (t) {
                if (t in Kt) return t;
                for (var e = t[0].toUpperCase() + t.slice(1), n = Xt.length; n--;) if ((t = Xt[n] + e) in Kt) return t
            }(t) || t), e
        }

        function Zt(t, e, n) {
            var i = rt.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }

        function Jt(t, e, n, i, r, o) {
            var a = "width" === e ? 1 : 0, s = 0, c = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; a < 4; a += 2) "margin" === n && (c += T.css(t, n + ot[a], !0, r)), i ? ("content" === n && (c -= T.css(t, "padding" + ot[a], !0, r)), "margin" !== n && (c -= T.css(t, "border" + ot[a] + "Width", !0, r))) : (c += T.css(t, "padding" + ot[a], !0, r), "padding" !== n ? c += T.css(t, "border" + ot[a] + "Width", !0, r) : s += T.css(t, "border" + ot[a] + "Width", !0, r));
            return !i && o >= 0 && (c += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - c - s - .5))), c
        }

        function te(t, e, n) {
            var i = Ut(t), r = Vt(t, e, i), o = "border-box" === T.css(t, "boxSizing", !1, i), a = o;
            if (jt.test(r)) {
                if (!n) return r;
                r = "auto"
            }
            return a = a && (y.boxSizingReliable() || r === t.style[e]), ("auto" === r || !parseFloat(r) && "inline" === T.css(t, "display", !1, i)) && (r = t["offset" + e[0].toUpperCase() + e.slice(1)], a = !0), (r = parseFloat(r) || 0) + Jt(t, e, n || (o ? "border" : "content"), a, i, r) + "px"
        }

        function ee(t, e, n, i, r) {
            return new ee.prototype.init(t, e, n, i, r)
        }

        T.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = Vt(t, "opacity");
                            return "" === n ? "1" : n
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
            style: function (t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, o, a, s = X(e), c = zt.test(e), f = t.style;
                    if (c || (e = Qt(s)), a = T.cssHooks[e] || T.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(t, !1, i)) ? r : f[e];
                    "string" === (o = typeof n) && (r = rt.exec(n)) && r[1] && (n = ct(t, e, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (T.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (f[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, i)) || (c ? f.setProperty(e, n) : f[e] = n))
                }
            },
            css: function (t, e, n, i) {
                var r, o, a, s = X(e);
                return zt.test(e) || (e = Qt(s)), (a = T.cssHooks[e] || T.cssHooks[s]) && "get" in a && (r = a.get(t, !0, n)), void 0 === r && (r = Vt(t, e, i)), "normal" === r && e in $t && (r = $t[e]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
            }
        }), T.each(["height", "width"], function (t, e) {
            T.cssHooks[e] = {
                get: function (t, n, i) {
                    if (n) return !Yt.test(T.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? te(t, e, i) : st(t, Gt, function () {
                        return te(t, e, i)
                    })
                }, set: function (t, n, i) {
                    var r, o = Ut(t), a = "border-box" === T.css(t, "boxSizing", !1, o), s = i && Jt(t, e, i, a, o);
                    return a && y.scrollboxSize() === o.position && (s -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - Jt(t, e, "border", !1, o) - .5)), s && (r = rt.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = T.css(t, e)), Zt(0, n, s)
                }
            }
        }), T.cssHooks.marginLeft = qt(y.reliableMarginLeft, function (t, e) {
            if (e) return (parseFloat(Vt(t, "marginLeft")) || t.getBoundingClientRect().left - st(t, {marginLeft: 0}, function () {
                return t.getBoundingClientRect().left
            })) + "px"
        }), T.each({margin: "", padding: "", border: "Width"}, function (t, e) {
            T.cssHooks[t + e] = {
                expand: function (n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + ot[i] + e] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, "margin" !== t && (T.cssHooks[t + e].set = Zt)
        }), T.fn.extend({
            css: function (t, e) {
                return Y(this, function (t, e, n) {
                    var i, r, o = {}, a = 0;
                    if (Array.isArray(e)) {
                        for (i = Ut(t), r = e.length; a < r; a++) o[e[a]] = T.css(t, e[a], !1, i);
                        return o
                    }
                    return void 0 !== n ? T.style(t, e, n) : T.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }), T.Tween = ee, ee.prototype = {
            constructor: ee, init: function (t, e, n, i, r, o) {
                this.elem = t, this.prop = n, this.easing = r || T.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (T.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var t = ee.propHooks[this.prop];
                return t && t.get ? t.get(this) : ee.propHooks._default.get(this)
            }, run: function (t) {
                var e, n = ee.propHooks[this.prop];
                return this.options.duration ? this.pos = e = T.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ee.propHooks._default.set(this), this
            }
        }, ee.prototype.init.prototype = ee.prototype, ee.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = T.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                }, set: function (t) {
                    T.fx.step[t.prop] ? T.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[T.cssProps[t.prop]] && !T.cssHooks[t.prop] ? t.elem[t.prop] = t.now : T.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, ee.propHooks.scrollTop = ee.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, T.easing = {
            linear: function (t) {
                return t
            }, swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }, _default: "swing"
        }, T.fx = ee.prototype.init, T.fx.step = {};
        var ne, ie, re = /^(?:toggle|show|hide)$/, oe = /queueHooks$/;

        function ae() {
            ie && (!1 === a.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ae) : n.setTimeout(ae, T.fx.interval), T.fx.tick())
        }

        function se() {
            return n.setTimeout(function () {
                ne = void 0
            }), ne = Date.now()
        }

        function ce(t, e) {
            var n, i = 0, r = {height: t};
            for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = ot[i])] = r["padding" + n] = t;
            return e && (r.opacity = r.width = t), r
        }

        function fe(t, e, n) {
            for (var i, r = (le.tweeners[e] || []).concat(le.tweeners["*"]), o = 0, a = r.length; o < a; o++) if (i = r[o].call(n, e, t)) return i
        }

        function le(t, e, n) {
            var i, r, o = 0, a = le.prefilters.length, s = T.Deferred().always(function () {
                delete c.elem
            }), c = function () {
                if (r) return !1;
                for (var e = ne || se(), n = Math.max(0, f.startTime + f.duration - e), i = 1 - (n / f.duration || 0), o = 0, a = f.tweens.length; o < a; o++) f.tweens[o].run(i);
                return s.notifyWith(t, [f, i, n]), i < 1 && a ? n : (a || s.notifyWith(t, [f, 1, 0]), s.resolveWith(t, [f]), !1)
            }, f = s.promise({
                elem: t,
                props: T.extend({}, e),
                opts: T.extend(!0, {specialEasing: {}, easing: T.easing._default}, n),
                originalProperties: e,
                originalOptions: n,
                startTime: ne || se(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = T.Tween(t, f.opts, e, n, f.opts.specialEasing[e] || f.opts.easing);
                    return f.tweens.push(i), i
                },
                stop: function (e) {
                    var n = 0, i = e ? f.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) f.tweens[n].run(1);
                    return e ? (s.notifyWith(t, [f, 1, 0]), s.resolveWith(t, [f, e])) : s.rejectWith(t, [f, e]), this
                }
            }), l = f.props;
            for (!function (t, e) {
                var n, i, r, o, a;
                for (n in t) if (r = e[i = X(n)], o = t[n], Array.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (a = T.cssHooks[i]) && "expand" in a) for (n in o = a.expand(o), delete t[i], o) n in t || (t[n] = o[n], e[n] = r); else e[i] = r
            }(l, f.opts.specialEasing); o < a; o++) if (i = le.prefilters[o].call(f, t, l, f.opts)) return v(i.stop) && (T._queueHooks(f.elem, f.opts.queue).stop = i.stop.bind(i)), i;
            return T.map(l, fe, f), v(f.opts.start) && f.opts.start.call(t, f), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always), T.fx.timer(T.extend(c, {
                elem: t,
                anim: f,
                queue: f.opts.queue
            })), f
        }

        T.Animation = T.extend(le, {
            tweeners: {
                "*": [function (t, e) {
                    var n = this.createTween(t, e);
                    return ct(n.elem, t, rt.exec(e), n), n
                }]
            }, tweener: function (t, e) {
                v(t) ? (e = t, t = ["*"]) : t = t.match(F);
                for (var n, i = 0, r = t.length; i < r; i++) n = t[i], le.tweeners[n] = le.tweeners[n] || [], le.tweeners[n].unshift(e)
            }, prefilters: [function (t, e, n) {
                var i, r, o, a, s, c, f, l, u = "width" in e || "height" in e, h = this, d = {}, p = t.style,
                    m = t.nodeType && at(t), g = Z.get(t, "fxshow");
                for (i in n.queue || (null == (a = T._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                    a.unqueued || s()
                }), a.unqueued++, h.always(function () {
                    h.always(function () {
                        a.unqueued--, T.queue(t, "fx").length || a.empty.fire()
                    })
                })), e) if (r = e[i], re.test(r)) {
                    if (delete e[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[i]) continue;
                        m = !0
                    }
                    d[i] = g && g[i] || T.style(t, i)
                }
                if ((c = !T.isEmptyObject(e)) || !T.isEmptyObject(d)) for (i in u && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (f = g && g.display) && (f = Z.get(t, "display")), "none" === (l = T.css(t, "display")) && (f ? l = f : (ut([t], !0), f = t.style.display || f, l = T.css(t, "display"), ut([t]))), ("inline" === l || "inline-block" === l && null != f) && "none" === T.css(t, "float") && (c || (h.done(function () {
                    p.display = f
                }), null == f && (l = p.display, f = "none" === l ? "" : l)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                })), c = !1, d) c || (g ? "hidden" in g && (m = g.hidden) : g = Z.access(t, "fxshow", {display: f}), o && (g.hidden = !m), m && ut([t], !0), h.done(function () {
                    for (i in m || ut([t]), Z.remove(t, "fxshow"), d) T.style(t, i, d[i])
                })), c = fe(m ? g[i] : 0, i, h), i in g || (g[i] = c.start, m && (c.end = c.start, c.start = 0))
            }], prefilter: function (t, e) {
                e ? le.prefilters.unshift(t) : le.prefilters.push(t)
            }
        }), T.speed = function (t, e, n) {
            var i = t && "object" == typeof t ? T.extend({}, t) : {
                complete: n || !n && e || v(t) && t,
                duration: t,
                easing: n && e || e && !v(e) && e
            };
            return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                v(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue)
            }, i
        }, T.fn.extend({
            fadeTo: function (t, e, n, i) {
                return this.filter(at).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
            }, animate: function (t, e, n, i) {
                var r = T.isEmptyObject(t), o = T.speed(e, n, i), a = function () {
                    var e = le(this, T.extend({}, t), o);
                    (r || Z.get(this, "finish")) && e.stop(!0)
                };
                return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            }, stop: function (t, e, n) {
                var i = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
                    var e = !0, r = null != t && t + "queueHooks", o = T.timers, a = Z.get(this);
                    if (r) a[r] && a[r].stop && i(a[r]); else for (r in a) a[r] && a[r].stop && oe.test(r) && i(a[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                    !e && n || T.dequeue(this, t)
                })
            }, finish: function (t) {
                return !1 !== t && (t = t || "fx"), this.each(function () {
                    var e, n = Z.get(this), i = n[t + "queue"], r = n[t + "queueHooks"], o = T.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, T.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < a; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), T.each(["toggle", "show", "hide"], function (t, e) {
            var n = T.fn[e];
            T.fn[e] = function (t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ce(e, !0), t, i, r)
            }
        }), T.each({
            slideDown: ce("show"),
            slideUp: ce("hide"),
            slideToggle: ce("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (t, e) {
            T.fn[t] = function (t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), T.timers = [], T.fx.tick = function () {
            var t, e = 0, n = T.timers;
            for (ne = Date.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || T.fx.stop(), ne = void 0
        }, T.fx.timer = function (t) {
            T.timers.push(t), T.fx.start()
        }, T.fx.interval = 13, T.fx.start = function () {
            ie || (ie = !0, ae())
        }, T.fx.stop = function () {
            ie = null
        }, T.fx.speeds = {slow: 600, fast: 200, _default: 400}, T.fn.delay = function (t, e) {
            return t = T.fx && T.fx.speeds[t] || t, e = e || "fx", this.queue(e, function (e, i) {
                var r = n.setTimeout(e, t);
                i.stop = function () {
                    n.clearTimeout(r)
                }
            })
        }, function () {
            var t = a.createElement("input"), e = a.createElement("select").appendChild(a.createElement("option"));
            t.type = "checkbox", y.checkOn = "" !== t.value, y.optSelected = e.selected, (t = a.createElement("input")).value = "t", t.type = "radio", y.radioValue = "t" === t.value
        }();
        var ue, he = T.expr.attrHandle;
        T.fn.extend({
            attr: function (t, e) {
                return Y(this, T.attr, t, e, arguments.length > 1)
            }, removeAttr: function (t) {
                return this.each(function () {
                    T.removeAttr(this, t)
                })
            }
        }), T.extend({
            attr: function (t, e, n) {
                var i, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? T.prop(t, e, n) : (1 === o && T.isXMLDoc(t) || (r = T.attrHooks[e.toLowerCase()] || (T.expr.match.bool.test(e) ? ue : void 0)), void 0 !== n ? null === n ? void T.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = T.find.attr(t, e)) ? void 0 : i)
            }, attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!y.radioValue && "radio" === e && P(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }, removeAttr: function (t, e) {
                var n, i = 0, r = e && e.match(F);
                if (r && 1 === t.nodeType) for (; n = r[i++];) t.removeAttribute(n)
            }
        }), ue = {
            set: function (t, e, n) {
                return !1 === e ? T.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, T.each(T.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = he[e] || T.find.attr;
            he[e] = function (t, e, i) {
                var r, o, a = e.toLowerCase();
                return i || (o = he[a], he[a] = r, r = null != n(t, e, i) ? a : null, he[a] = o), r
            }
        });
        var de = /^(?:input|select|textarea|button)$/i, pe = /^(?:a|area)$/i;

        function me(t) {
            return (t.match(F) || []).join(" ")
        }

        function ge(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function ye(t) {
            return Array.isArray(t) ? t : "string" == typeof t && t.match(F) || []
        }

        T.fn.extend({
            prop: function (t, e) {
                return Y(this, T.prop, t, e, arguments.length > 1)
            }, removeProp: function (t) {
                return this.each(function () {
                    delete this[T.propFix[t] || t]
                })
            }
        }), T.extend({
            prop: function (t, e, n) {
                var i, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && T.isXMLDoc(t) || (e = T.propFix[e] || e, r = T.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
            }, propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = T.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : de.test(t.nodeName) || pe.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }, propFix: {for: "htmlFor", class: "className"}
        }), y.optSelected || (T.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            }, set: function (t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            T.propFix[this.toLowerCase()] = this
        }), T.fn.extend({
            addClass: function (t) {
                var e, n, i, r, o, a, s, c = 0;
                if (v(t)) return this.each(function (e) {
                    T(this).addClass(t.call(this, e, ge(this)))
                });
                if ((e = ye(t)).length) for (; n = this[c++];) if (r = ge(n), i = 1 === n.nodeType && " " + me(r) + " ") {
                    for (a = 0; o = e[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                    r !== (s = me(i)) && n.setAttribute("class", s)
                }
                return this
            }, removeClass: function (t) {
                var e, n, i, r, o, a, s, c = 0;
                if (v(t)) return this.each(function (e) {
                    T(this).removeClass(t.call(this, e, ge(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((e = ye(t)).length) for (; n = this[c++];) if (r = ge(n), i = 1 === n.nodeType && " " + me(r) + " ") {
                    for (a = 0; o = e[a++];) for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                    r !== (s = me(i)) && n.setAttribute("class", s)
                }
                return this
            }, toggleClass: function (t, e) {
                var n = typeof t, i = "string" === n || Array.isArray(t);
                return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : v(t) ? this.each(function (n) {
                    T(this).toggleClass(t.call(this, n, ge(this), e), e)
                }) : this.each(function () {
                    var e, r, o, a;
                    if (i) for (r = 0, o = T(this), a = ye(t); e = a[r++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else void 0 !== t && "boolean" !== n || ((e = ge(this)) && Z.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Z.get(this, "__className__") || ""))
                })
            }, hasClass: function (t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];) if (1 === n.nodeType && (" " + me(ge(n)) + " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var ve = /\r/g;
        T.fn.extend({
            val: function (t) {
                var e, n, i, r = this[0];
                return arguments.length ? (i = v(t), this.each(function (n) {
                    var r;
                    1 === this.nodeType && (null == (r = i ? t.call(this, n, T(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = T.map(r, function (t) {
                        return null == t ? "" : t + ""
                    })), (e = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                })) : r ? (e = T.valHooks[r.type] || T.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(ve, "") : null == n ? "" : n : void 0
            }
        }), T.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = T.find.attr(t, "value");
                        return null != e ? e : me(T.text(t))
                    }
                }, select: {
                    get: function (t) {
                        var e, n, i, r = t.options, o = t.selectedIndex, a = "select-one" === t.type, s = a ? null : [],
                            c = a ? o + 1 : r.length;
                        for (i = o < 0 ? c : a ? o : 0; i < c; i++) if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !P(n.parentNode, "optgroup"))) {
                            if (e = T(n).val(), a) return e;
                            s.push(e)
                        }
                        return s
                    }, set: function (t, e) {
                        for (var n, i, r = t.options, o = T.makeArray(e), a = r.length; a--;) ((i = r[a]).selected = T.inArray(T.valHooks.option.get(i), o) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), T.each(["radio", "checkbox"], function () {
            T.valHooks[this] = {
                set: function (t, e) {
                    if (Array.isArray(e)) return t.checked = T.inArray(T(t).val(), e) > -1
                }
            }, y.checkOn || (T.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }), y.focusin = "onfocusin" in n;
        var _e = /^(?:focusinfocus|focusoutblur)$/, be = function (t) {
            t.stopPropagation()
        };
        T.extend(T.event, {
            trigger: function (t, e, i, r) {
                var o, s, c, f, l, u, h, d, m = [i || a], g = p.call(t, "type") ? t.type : t,
                    y = p.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = d = c = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !_e.test(g + T.event.triggered) && (g.indexOf(".") > -1 && (g = (y = g.split(".")).shift(), y.sort()), l = g.indexOf(":") < 0 && "on" + g, (t = t[T.expando] ? t : new T.Event(g, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = y.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : T.makeArray(e, [t]), h = T.event.special[g] || {}, r || !h.trigger || !1 !== h.trigger.apply(i, e))) {
                    if (!r && !h.noBubble && !_(i)) {
                        for (f = h.delegateType || g, _e.test(f + g) || (s = s.parentNode); s; s = s.parentNode) m.push(s), c = s;
                        c === (i.ownerDocument || a) && m.push(c.defaultView || c.parentWindow || n)
                    }
                    for (o = 0; (s = m[o++]) && !t.isPropagationStopped();) d = s, t.type = o > 1 ? f : h.bindType || g, (u = (Z.get(s, "events") || {})[t.type] && Z.get(s, "handle")) && u.apply(s, e), (u = l && s[l]) && u.apply && K(s) && (t.result = u.apply(s, e), !1 === t.result && t.preventDefault());
                    return t.type = g, r || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(m.pop(), e) || !K(i) || l && v(i[g]) && !_(i) && ((c = i[l]) && (i[l] = null), T.event.triggered = g, t.isPropagationStopped() && d.addEventListener(g, be), i[g](), t.isPropagationStopped() && d.removeEventListener(g, be), T.event.triggered = void 0, c && (i[l] = c)), t.result
                }
            }, simulate: function (t, e, n) {
                var i = T.extend(new T.Event, n, {type: t, isSimulated: !0});
                T.event.trigger(i, null, e)
            }
        }), T.fn.extend({
            trigger: function (t, e) {
                return this.each(function () {
                    T.event.trigger(t, e, this)
                })
            }, triggerHandler: function (t, e) {
                var n = this[0];
                if (n) return T.event.trigger(t, e, n, !0)
            }
        }), y.focusin || T.each({focus: "focusin", blur: "focusout"}, function (t, e) {
            var n = function (t) {
                T.event.simulate(e, t.target, T.event.fix(t))
            };
            T.event.special[e] = {
                setup: function () {
                    var i = this.ownerDocument || this, r = Z.access(i, e);
                    r || i.addEventListener(t, n, !0), Z.access(i, e, (r || 0) + 1)
                }, teardown: function () {
                    var i = this.ownerDocument || this, r = Z.access(i, e) - 1;
                    r ? Z.access(i, e, r) : (i.removeEventListener(t, n, !0), Z.remove(i, e))
                }
            }
        });
        var xe = n.location, we = Date.now(), Te = /\?/;
        T.parseXML = function (t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new n.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + t), e
        };
        var Ee = /\[\]$/, De = /\r?\n/g, Ce = /^(?:submit|button|image|reset|file)$/i,
            Se = /^(?:input|select|textarea|keygen)/i;

        function Ae(t, e, n, i) {
            var r;
            if (Array.isArray(e)) T.each(e, function (e, r) {
                n || Ee.test(t) ? i(t, r) : Ae(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
            }); else if (n || "object" !== w(e)) i(t, e); else for (r in e) Ae(t + "[" + r + "]", e[r], n, i)
        }

        T.param = function (t, e) {
            var n, i = [], r = function (t, e) {
                var n = v(e) ? e() : e;
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (Array.isArray(t) || t.jquery && !T.isPlainObject(t)) T.each(t, function () {
                r(this.name, this.value)
            }); else for (n in t) Ae(n, t[n], e, r);
            return i.join("&")
        }, T.fn.extend({
            serialize: function () {
                return T.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var t = T.prop(this, "elements");
                    return t ? T.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !T(this).is(":disabled") && Se.test(this.nodeName) && !Ce.test(t) && (this.checked || !ht.test(t))
                }).map(function (t, e) {
                    var n = T(this).val();
                    return null == n ? null : Array.isArray(n) ? T.map(n, function (t) {
                        return {name: e.name, value: t.replace(De, "\r\n")}
                    }) : {name: e.name, value: n.replace(De, "\r\n")}
                }).get()
            }
        });
        var Ne = /%20/g, Pe = /#.*$/, Me = /([?&])_=[^&]*/, ke = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ie = /^(?:GET|HEAD)$/,
            Oe = /^\/\//, Le = {}, We = {}, Re = "*/".concat("*"), Fe = a.createElement("a");

        function He(t) {
            return function (e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, r = 0, o = e.toLowerCase().match(F) || [];
                if (v(n)) for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function je(t, e, n, i) {
            var r = {}, o = t === We;

            function a(s) {
                var c;
                return r[s] = !0, T.each(t[s] || [], function (t, s) {
                    var f = s(e, n, i);
                    return "string" != typeof f || o || r[f] ? o ? !(c = f) : void 0 : (e.dataTypes.unshift(f), a(f), !1)
                }), c
            }

            return a(e.dataTypes[0]) || !r["*"] && a("*")
        }

        function Ue(t, e) {
            var n, i, r = T.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
            return i && T.extend(!0, t, i), t
        }

        Fe.href = xe.href, T.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xe.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xe.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Re,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": T.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (t, e) {
                return e ? Ue(Ue(t, T.ajaxSettings), e) : Ue(T.ajaxSettings, t)
            },
            ajaxPrefilter: He(Le),
            ajaxTransport: He(We),
            ajax: function (t, e) {
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, r, o, s, c, f, l, u, h, d, p = T.ajaxSetup({}, e), m = p.context || p,
                    g = p.context && (m.nodeType || m.jquery) ? T(m) : T.event, y = T.Deferred(),
                    v = T.Callbacks("once memory"), _ = p.statusCode || {}, b = {}, x = {}, w = "canceled", E = {
                        readyState: 0, getResponseHeader: function (t) {
                            var e;
                            if (l) {
                                if (!s) for (s = {}; e = ke.exec(o);) s[e[1].toLowerCase()] = e[2];
                                e = s[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        }, getAllResponseHeaders: function () {
                            return l ? o : null
                        }, setRequestHeader: function (t, e) {
                            return null == l && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, b[t] = e), this
                        }, overrideMimeType: function (t) {
                            return null == l && (p.mimeType = t), this
                        }, statusCode: function (t) {
                            var e;
                            if (t) if (l) E.always(t[E.status]); else for (e in t) _[e] = [_[e], t[e]];
                            return this
                        }, abort: function (t) {
                            var e = t || w;
                            return i && i.abort(e), D(0, e), this
                        }
                    };
                if (y.promise(E), p.url = ((t || p.url || xe.href) + "").replace(Oe, xe.protocol + "//"), p.type = e.method || e.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(F) || [""], null == p.crossDomain) {
                    f = a.createElement("a");
                    try {
                        f.href = p.url, f.href = f.href, p.crossDomain = Fe.protocol + "//" + Fe.host != f.protocol + "//" + f.host
                    } catch (t) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = T.param(p.data, p.traditional)), je(Le, p, e, E), l) return E;
                for (h in(u = T.event && p.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ie.test(p.type), r = p.url.replace(Pe, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ne, "+")) : (d = p.url.slice(r.length), p.data && (p.processData || "string" == typeof p.data) && (r += (Te.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (r = r.replace(Me, "$1"), d = (Te.test(r) ? "&" : "?") + "_=" + we++ + d), p.url = r + d), p.ifModified && (T.lastModified[r] && E.setRequestHeader("If-Modified-Since", T.lastModified[r]), T.etag[r] && E.setRequestHeader("If-None-Match", T.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || e.contentType) && E.setRequestHeader("Content-Type", p.contentType), E.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Re + "; q=0.01" : "") : p.accepts["*"]), p.headers) E.setRequestHeader(h, p.headers[h]);
                if (p.beforeSend && (!1 === p.beforeSend.call(m, E, p) || l)) return E.abort();
                if (w = "abort", v.add(p.complete), E.done(p.success), E.fail(p.error), i = je(We, p, e, E)) {
                    if (E.readyState = 1, u && g.trigger("ajaxSend", [E, p]), l) return E;
                    p.async && p.timeout > 0 && (c = n.setTimeout(function () {
                        E.abort("timeout")
                    }, p.timeout));
                    try {
                        l = !1, i.send(b, D)
                    } catch (t) {
                        if (l) throw t;
                        D(-1, t)
                    }
                } else D(-1, "No Transport");

                function D(t, e, a, s) {
                    var f, h, d, b, x, w = e;
                    l || (l = !0, c && n.clearTimeout(c), i = void 0, o = s || "", E.readyState = t > 0 ? 4 : 0, f = t >= 200 && t < 300 || 304 === t, a && (b = function (t, e, n) {
                        for (var i, r, o, a, s = t.contents, c = t.dataTypes; "*" === c[0];) c.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (i) for (r in s) if (s[r] && s[r].test(i)) {
                            c.unshift(r);
                            break
                        }
                        if (c[0] in n) o = c[0]; else {
                            for (r in n) {
                                if (!c[0] || t.converters[r + " " + c[0]]) {
                                    o = r;
                                    break
                                }
                                a || (a = r)
                            }
                            o = o || a
                        }
                        if (o) return o !== c[0] && c.unshift(o), n[o]
                    }(p, E, a)), b = function (t, e, n, i) {
                        var r, o, a, s, c, f = {}, l = t.dataTypes.slice();
                        if (l[1]) for (a in t.converters) f[a.toLowerCase()] = t.converters[a];
                        for (o = l.shift(); o;) if (t.responseFields[o] && (n[t.responseFields[o]] = e), !c && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), c = o, o = l.shift()) if ("*" === o) o = c; else if ("*" !== c && c !== o) {
                            if (!(a = f[c + " " + o] || f["* " + o])) for (r in f) if ((s = r.split(" "))[1] === o && (a = f[c + " " + s[0]] || f["* " + s[0]])) {
                                !0 === a ? a = f[r] : !0 !== f[r] && (o = s[0], l.unshift(s[1]));
                                break
                            }
                            if (!0 !== a) if (a && t.throws) e = a(e); else try {
                                e = a(e)
                            } catch (t) {
                                return {state: "parsererror", error: a ? t : "No conversion from " + c + " to " + o}
                            }
                        }
                        return {state: "success", data: e}
                    }(p, b, E, f), f ? (p.ifModified && ((x = E.getResponseHeader("Last-Modified")) && (T.lastModified[r] = x), (x = E.getResponseHeader("etag")) && (T.etag[r] = x)), 204 === t || "HEAD" === p.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = b.state, h = b.data, f = !(d = b.error))) : (d = w, !t && w || (w = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (e || w) + "", f ? y.resolveWith(m, [h, w, E]) : y.rejectWith(m, [E, w, d]), E.statusCode(_), _ = void 0, u && g.trigger(f ? "ajaxSuccess" : "ajaxError", [E, p, f ? h : d]), v.fireWith(m, [E, w]), u && (g.trigger("ajaxComplete", [E, p]), --T.active || T.event.trigger("ajaxStop")))
                }

                return E
            },
            getJSON: function (t, e, n) {
                return T.get(t, e, n, "json")
            },
            getScript: function (t, e) {
                return T.get(t, void 0, e, "script")
            }
        }), T.each(["get", "post"], function (t, e) {
            T[e] = function (t, n, i, r) {
                return v(n) && (r = r || i, i = n, n = void 0), T.ajax(T.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: n,
                    success: i
                }, T.isPlainObject(t) && t))
            }
        }), T._evalUrl = function (t) {
            return T.ajax({url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
        }, T.fn.extend({
            wrapAll: function (t) {
                var e;
                return this[0] && (v(t) && (t = t.call(this[0])), e = T(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this
            }, wrapInner: function (t) {
                return v(t) ? this.each(function (e) {
                    T(this).wrapInner(t.call(this, e))
                }) : this.each(function () {
                    var e = T(this), n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            }, wrap: function (t) {
                var e = v(t);
                return this.each(function (n) {
                    T(this).wrapAll(e ? t.call(this, n) : t)
                })
            }, unwrap: function (t) {
                return this.parent(t).not("body").each(function () {
                    T(this).replaceWith(this.childNodes)
                }), this
            }
        }), T.expr.pseudos.hidden = function (t) {
            return !T.expr.pseudos.visible(t)
        }, T.expr.pseudos.visible = function (t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, T.ajaxSettings.xhr = function () {
            try {
                return new n.XMLHttpRequest
            } catch (t) {
            }
        };
        var Be = {0: 200, 1223: 204}, Ve = T.ajaxSettings.xhr();
        y.cors = !!Ve && "withCredentials" in Ve, y.ajax = Ve = !!Ve, T.ajaxTransport(function (t) {
            var e, i;
            if (y.cors || Ve && !t.crossDomain) return {
                send: function (r, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                    for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) s.setRequestHeader(a, r[a]);
                    e = function (t) {
                        return function () {
                            e && (e = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Be[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
                        }
                    }, s.onload = e(), i = s.onerror = s.ontimeout = e("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
                        4 === s.readyState && n.setTimeout(function () {
                            e && i()
                        })
                    }, e = e("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (t) {
                        if (e) throw t
                    }
                }, abort: function () {
                    e && e()
                }
            }
        }), T.ajaxPrefilter(function (t) {
            t.crossDomain && (t.contents.script = !1)
        }), T.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (t) {
                    return T.globalEval(t), t
                }
            }
        }), T.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), T.ajaxTransport("script", function (t) {
            var e, n;
            if (t.crossDomain) return {
                send: function (i, r) {
                    e = T("<script>").prop({charset: t.scriptCharset, src: t.url}).on("load error", n = function (t) {
                        e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), a.head.appendChild(e[0])
                }, abort: function () {
                    n && n()
                }
            }
        });
        var qe, Ye = [], ze = /(=)\?(?=&|$)|\?\?/;
        T.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var t = Ye.pop() || T.expando + "_" + we++;
                return this[t] = !0, t
            }
        }), T.ajaxPrefilter("json jsonp", function (t, e, i) {
            var r, o, a,
                s = !1 !== t.jsonp && (ze.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && ze.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ze, "$1" + r) : !1 !== t.jsonp && (t.url += (Te.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
                return a || T.error(r + " was not called"), a[0]
            }, t.dataTypes[0] = "json", o = n[r], n[r] = function () {
                a = arguments
            }, i.always(function () {
                void 0 === o ? T(n).removeProp(r) : n[r] = o, t[r] && (t.jsonpCallback = e.jsonpCallback, Ye.push(r)), a && v(o) && o(a[0]), a = o = void 0
            }), "script"
        }), y.createHTMLDocument = ((qe = a.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === qe.childNodes.length), T.parseHTML = function (t, e, n) {
            return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (y.createHTMLDocument ? ((i = (e = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href, e.head.appendChild(i)) : e = a), r = M.exec(t), o = !n && [], r ? [e.createElement(r[1])] : (r = xt([t], e, o), o && o.length && T(o).remove(), T.merge([], r.childNodes)));
            var i, r, o
        }, T.fn.load = function (t, e, n) {
            var i, r, o, a = this, s = t.indexOf(" ");
            return s > -1 && (i = me(t.slice(s)), t = t.slice(0, s)), v(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), a.length > 0 && T.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done(function (t) {
                o = arguments, a.html(i ? T("<div>").append(T.parseHTML(t)).find(i) : t)
            }).always(n && function (t, e) {
                a.each(function () {
                    n.apply(this, o || [t.responseText, e, t])
                })
            }), this
        }, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            T.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), T.expr.pseudos.animated = function (t) {
            return T.grep(T.timers, function (e) {
                return t === e.elem
            }).length
        }, T.offset = {
            setOffset: function (t, e, n) {
                var i, r, o, a, s, c, f = T.css(t, "position"), l = T(t), u = {};
                "static" === f && (t.style.position = "relative"), s = l.offset(), o = T.css(t, "top"), c = T.css(t, "left"), ("absolute" === f || "fixed" === f) && (o + c).indexOf("auto") > -1 ? (a = (i = l.position()).top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(c) || 0), v(e) && (e = e.call(t, n, T.extend({}, s))), null != e.top && (u.top = e.top - s.top + a), null != e.left && (u.left = e.left - s.left + r), "using" in e ? e.using.call(t, u) : l.css(u)
            }
        }, T.fn.extend({
            offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                    T.offset.setOffset(this, t, e)
                });
                var e, n, i = this[0];
                return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {top: 0, left: 0} : void 0
            }, position: function () {
                if (this[0]) {
                    var t, e, n, i = this[0], r = {top: 0, left: 0};
                    if ("fixed" === T.css(i, "position")) e = i.getBoundingClientRect(); else {
                        for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === T.css(t, "position");) t = t.parentNode;
                        t && t !== i && 1 === t.nodeType && ((r = T(t).offset()).top += T.css(t, "borderTopWidth", !0), r.left += T.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - r.top - T.css(i, "marginTop", !0),
                        left: e.left - r.left - T.css(i, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && "static" === T.css(t, "position");) t = t.offsetParent;
                    return t || wt
                })
            }
        }), T.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
            var n = "pageYOffset" === e;
            T.fn[t] = function (i) {
                return Y(this, function (t, i, r) {
                    var o;
                    if (_(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === r) return o ? o[e] : t[i];
                    o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r
                }, t, i, arguments.length)
            }
        }), T.each(["top", "left"], function (t, e) {
            T.cssHooks[e] = qt(y.pixelPosition, function (t, n) {
                if (n) return n = Vt(t, e), jt.test(n) ? T(t).position()[e] + "px" : n
            })
        }), T.each({Height: "height", Width: "width"}, function (t, e) {
            T.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, i) {
                T.fn[i] = function (r, o) {
                    var a = arguments.length && (n || "boolean" != typeof r),
                        s = n || (!0 === r || !0 === o ? "margin" : "border");
                    return Y(this, function (e, n, r) {
                        var o;
                        return _(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === r ? T.css(e, n, s) : T.style(e, n, r, s)
                    }, e, a ? r : void 0, a)
                }
            })
        }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
            T.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), T.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), T.fn.extend({
            bind: function (t, e, n) {
                return this.on(t, null, e, n)
            }, unbind: function (t, e) {
                return this.off(t, null, e)
            }, delegate: function (t, e, n, i) {
                return this.on(e, t, n, i)
            }, undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        }), T.proxy = function (t, e) {
            var n, i, r;
            if ("string" == typeof e && (n = t[e], e = t, t = n), v(t)) return i = c.call(arguments, 2), (r = function () {
                return t.apply(e || this, i.concat(c.call(arguments)))
            }).guid = t.guid = t.guid || T.guid++, r
        }, T.holdReady = function (t) {
            t ? T.readyWait++ : T.ready(!0)
        }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = P, T.isFunction = v, T.isWindow = _, T.camelCase = X, T.type = w, T.now = Date.now, T.isNumeric = function (t) {
            var e = T.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, void 0 === (i = function () {
            return T
        }.apply(e, [])) || (t.exports = i);
        var Ge = n.jQuery, $e = n.$;
        return T.noConflict = function (t) {
            return n.$ === T && (n.$ = $e), t && n.jQuery === T && (n.jQuery = Ge), T
        }, r || (n.jQuery = n.$ = T), T
    })
}, function (t, e, n) {
    (function (e) {
        t.exports = e.$ = n(4)
    }).call(this, n(0))
}, function (t, e, n) {
}, , , , , , function (t, e, n) {
    var i, r, o, a;
    /*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
    /*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
    a = function (t) {
        var e = Object.prototype.toString, n = Array.isArray || function (t) {
            return "[object Array]" === e.call(t)
        };

        function i(t) {
            return "function" == typeof t
        }

        function r(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }

        function o(t, e) {
            return null != t && "object" == typeof t && e in t
        }

        var a = RegExp.prototype.test;
        var s = /\S/;

        function c(t) {
            return !function (t, e) {
                return a.call(t, e)
            }(s, t)
        }

        var f = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        };
        var l = /\s*/, u = /\s+/, h = /\s*=/, d = /\s*\}/, p = /#|\^|\/|>|\{|&|=|!/;

        function m(t) {
            this.string = t, this.tail = t, this.pos = 0
        }

        function g(t, e) {
            this.view = t, this.cache = {".": this.view}, this.parent = e
        }

        function y() {
            this.cache = {}
        }

        m.prototype.eos = function () {
            return "" === this.tail
        }, m.prototype.scan = function (t) {
            var e = this.tail.match(t);
            if (!e || 0 !== e.index) return "";
            var n = e[0];
            return this.tail = this.tail.substring(n.length), this.pos += n.length, n
        }, m.prototype.scanUntil = function (t) {
            var e, n = this.tail.search(t);
            switch (n) {
                case-1:
                    e = this.tail, this.tail = "";
                    break;
                case 0:
                    e = "";
                    break;
                default:
                    e = this.tail.substring(0, n), this.tail = this.tail.substring(n)
            }
            return this.pos += e.length, e
        }, g.prototype.push = function (t) {
            return new g(t, this)
        }, g.prototype.lookup = function (t) {
            var e, n = this.cache;
            if (n.hasOwnProperty(t)) e = n[t]; else {
                for (var r, a, s = this, c = !1; s;) {
                    if (t.indexOf(".") > 0) for (e = s.view, r = t.split("."), a = 0; null != e && a < r.length;) a === r.length - 1 && (c = o(e, r[a])), e = e[r[a++]]; else e = s.view[t], c = o(s.view, t);
                    if (c) break;
                    s = s.parent
                }
                n[t] = e
            }
            return i(e) && (e = e.call(this.view)), e
        }, y.prototype.clearCache = function () {
            this.cache = {}
        }, y.prototype.parse = function (e, i) {
            var o = this.cache, a = o[e];
            return null == a && (a = o[e] = function (e, i) {
                if (!e) return [];
                var o, a, s, f = [], g = [], y = [], v = !1, _ = !1;

                function b() {
                    if (v && !_) for (; y.length;) delete g[y.pop()]; else y = [];
                    v = !1, _ = !1
                }

                function x(t) {
                    if ("string" == typeof t && (t = t.split(u, 2)), !n(t) || 2 !== t.length) throw new Error("Invalid tags: " + t);
                    o = new RegExp(r(t[0]) + "\\s*"), a = new RegExp("\\s*" + r(t[1])), s = new RegExp("\\s*" + r("}" + t[1]))
                }

                x(i || t.tags);
                for (var w, T, E, D, C, S, A = new m(e); !A.eos();) {
                    if (w = A.pos, E = A.scanUntil(o)) for (var N = 0, P = E.length; N < P; ++N) c(D = E.charAt(N)) ? y.push(g.length) : _ = !0, g.push(["text", D, w, w + 1]), w += 1, "\n" === D && b();
                    if (!A.scan(o)) break;
                    if (v = !0, T = A.scan(p) || "name", A.scan(l), "=" === T ? (E = A.scanUntil(h), A.scan(h), A.scanUntil(a)) : "{" === T ? (E = A.scanUntil(s), A.scan(d), A.scanUntil(a), T = "&") : E = A.scanUntil(a), !A.scan(a)) throw new Error("Unclosed tag at " + A.pos);
                    if (C = [T, E, w, A.pos], g.push(C), "#" === T || "^" === T) f.push(C); else if ("/" === T) {
                        if (!(S = f.pop())) throw new Error('Unopened section "' + E + '" at ' + w);
                        if (S[1] !== E) throw new Error('Unclosed section "' + S[1] + '" at ' + w)
                    } else "name" === T || "{" === T || "&" === T ? _ = !0 : "=" === T && x(E)
                }
                if (S = f.pop()) throw new Error('Unclosed section "' + S[1] + '" at ' + A.pos);
                return function (t) {
                    for (var e, n = [], i = n, r = [], o = 0, a = t.length; o < a; ++o) switch ((e = t[o])[0]) {
                        case"#":
                        case"^":
                            i.push(e), r.push(e), i = e[4] = [];
                            break;
                        case"/":
                            r.pop()[5] = e[2], i = r.length > 0 ? r[r.length - 1][4] : n;
                            break;
                        default:
                            i.push(e)
                    }
                    return n
                }(function (t) {
                    for (var e, n, i = [], r = 0, o = t.length; r < o; ++r) (e = t[r]) && ("text" === e[0] && n && "text" === n[0] ? (n[1] += e[1], n[3] = e[3]) : (i.push(e), n = e));
                    return i
                }(g))
            }(e, i)), a
        }, y.prototype.render = function (t, e, n) {
            var i = this.parse(t), r = e instanceof g ? e : new g(e);
            return this.renderTokens(i, r, n, t)
        }, y.prototype.renderTokens = function (t, e, n, i) {
            for (var r, o, a, s = "", c = 0, f = t.length; c < f; ++c) a = void 0, "#" === (o = (r = t[c])[0]) ? a = this.renderSection(r, e, n, i) : "^" === o ? a = this.renderInverted(r, e, n, i) : ">" === o ? a = this.renderPartial(r, e, n, i) : "&" === o ? a = this.unescapedValue(r, e) : "name" === o ? a = this.escapedValue(r, e) : "text" === o && (a = this.rawValue(r)), void 0 !== a && (s += a);
            return s
        }, y.prototype.renderSection = function (t, e, r, o) {
            var a = this, s = "", c = e.lookup(t[1]);
            if (c) {
                if (n(c)) for (var f = 0, l = c.length; f < l; ++f) s += this.renderTokens(t[4], e.push(c[f]), r, o); else if ("object" == typeof c || "string" == typeof c || "number" == typeof c) s += this.renderTokens(t[4], e.push(c), r, o); else if (i(c)) {
                    if ("string" != typeof o) throw new Error("Cannot use higher-order sections without the original template");
                    null != (c = c.call(e.view, o.slice(t[3], t[5]), function (t) {
                        return a.render(t, e, r)
                    })) && (s += c)
                } else s += this.renderTokens(t[4], e, r, o);
                return s
            }
        }, y.prototype.renderInverted = function (t, e, i, r) {
            var o = e.lookup(t[1]);
            if (!o || n(o) && 0 === o.length) return this.renderTokens(t[4], e, i, r)
        }, y.prototype.renderPartial = function (t, e, n) {
            if (n) {
                var r = i(n) ? n(t[1]) : n[t[1]];
                return null != r ? this.renderTokens(this.parse(r), e, n, r) : void 0
            }
        }, y.prototype.unescapedValue = function (t, e) {
            var n = e.lookup(t[1]);
            if (null != n) return n
        }, y.prototype.escapedValue = function (e, n) {
            var i = n.lookup(e[1]);
            if (null != i) return t.escape(i)
        }, y.prototype.rawValue = function (t) {
            return t[1]
        }, t.name = "mustache.js", t.version = "2.3.0", t.tags = ["{{", "}}"];
        var v = new y;
        return t.clearCache = function () {
            return v.clearCache()
        }, t.parse = function (t, e) {
            return v.parse(t, e)
        }, t.render = function (t, e, i) {
            if ("string" != typeof t) throw new TypeError('Invalid template! Template should be a "string" but "' + (n(r = t) ? "array" : typeof r) + '" was given as the first argument for mustache#render(template, view, partials)');
            var r;
            return v.render(t, e, i)
        }, t.to_html = function (e, n, r, o) {
            var a = t.render(e, n, r);
            if (!i(o)) return a;
            o(a)
        }, t.escape = function (t) {
            return String(t).replace(/[&<>"'`=\/]/g, function (t) {
                return f[t]
            })
        }, t.Scanner = m, t.Context = g, t.Writer = y, t
    }, "object" == typeof e && e && "string" != typeof e.nodeName ? a(e) : (r = [e], void 0 === (o = "function" == typeof(i = a) ? i.apply(e, r) : i) || (t.exports = o))
}, function (t) {
    t.exports = {
        options: {
            width: "800",
            height: "600",
            title: "",
            yAxisTitle: "",
            xAxisTitle: "Sprint",
            medFontSize: 9,
            rectWidth: 21,
            xAxisDisplayInterval: "weekly",
            showActuals: ""
        },
        startDate: "4/26/2017",
        data: [{
            estimateDate: "4/27/2017",
            verifyEstimatedTotalDevDays: "0",
            completedEstimatedTotalDevDays: "0",
            verifyEstimatedTotalDevDaysWithCreep: "0",
            completedEstimatedTotalDevDaysWithCreep: "0",
            verifyStoryPoints: "0",
            completedStoryPoints: "0",
            completedFinalSPWithCreep: "792",
            verifyFinalSPWithCreep: "792",
            storyPoints: "792",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "4/27/2017",
            verifyEstimatedTotalDevDays: "15.2307692307692064",
            completedEstimatedTotalDevDays: "44.0000000000000352",
            verifyEstimatedTotalDevDaysWithCreep: "15.2307692307692064",
            completedEstimatedTotalDevDaysWithCreep: "44.0000000000000352",
            verifyStoryPoints: "52",
            completedStoryPoints: "18",
            completedFinalSPWithCreep: "792",
            verifyFinalSPWithCreep: "792",
            storyPoints: "792",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "4/27/2017",
            verifyEstimatedTotalDevDays: "15.2307692307692064",
            completedEstimatedTotalDevDays: "15.2307692307692064",
            verifyEstimatedTotalDevDaysWithCreep: "15.2307692307692064",
            completedEstimatedTotalDevDaysWithCreep: "15.2307692307692064",
            verifyStoryPoints: "52",
            completedStoryPoints: "52",
            completedFinalSPWithCreep: "792",
            verifyFinalSPWithCreep: "792",
            storyPoints: "792",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "5/8/2017",
            verifyEstimatedTotalDevDays: "137.5000000000000275",
            completedEstimatedTotalDevDays: "190.38461538461541",
            verifyEstimatedTotalDevDaysWithCreep: "243.6923076923077823",
            completedEstimatedTotalDevDaysWithCreep: "500.2105263157896422",
            verifyStoryPoints: "72",
            completedStoryPoints: "52",
            completedFinalSPWithCreep: "2167.5789473684215161",
            verifyFinalSPWithCreep: "1462.1538461538464013",
            storyPoints: "825",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "5/8/2017",
            verifyEstimatedTotalDevDays: "49.74874371859293",
            completedEstimatedTotalDevDays: "190.38461538461541",
            verifyEstimatedTotalDevDaysWithCreep: "57.2530120481927232",
            completedEstimatedTotalDevDaysWithCreep: "500.2105263157896422",
            verifyStoryPoints: "199",
            completedStoryPoints: "52",
            completedFinalSPWithCreep: "2167.5789473684215161",
            verifyFinalSPWithCreep: "949.4457831325299888",
            storyPoints: "825",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "5/10/2017",
            verifyEstimatedTotalDevDays: "134.302325581395345",
            completedEstimatedTotalDevDays: "222.11538461538459",
            verifyEstimatedTotalDevDaysWithCreep: "209.2075471698113105",
            completedEstimatedTotalDevDaysWithCreep: "583.5789473684208561",
            verifyStoryPoints: "86",
            completedStoryPoints: "52",
            completedFinalSPWithCreep: "2167.5789473684205644",
            verifyFinalSPWithCreep: "1285.1320754716980801",
            storyPoints: "825",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "5/10/2017",
            verifyEstimatedTotalDevDays: "134.302325581395345",
            completedEstimatedTotalDevDays: "222.11538461538459",
            verifyEstimatedTotalDevDaysWithCreep: "209.2075471698113105",
            completedEstimatedTotalDevDaysWithCreep: "583.5789473684208561",
            verifyStoryPoints: "86",
            completedStoryPoints: "52",
            completedFinalSPWithCreep: "2167.5789473684205644",
            verifyFinalSPWithCreep: "1285.1320754716980801",
            storyPoints: "825",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "5/23/2017",
            verifyEstimatedTotalDevDays: "132.9107142857142739",
            completedEstimatedTotalDevDays: "318.9857142857142739",
            verifyEstimatedTotalDevDaysWithCreep: "160.7819548872180264",
            completedEstimatedTotalDevDaysWithCreep: "610.9714285714285226",
            verifyStoryPoints: "168",
            completedStoryPoints: "70",
            completedFinalSPWithCreep: "1583.999999999999939",
            verifyFinalSPWithCreep: "1000.4210526315789237",
            storyPoints: "827",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "6/6/2017",
            verifyEstimatedTotalDevDays: "125.2693726937269776",
            completedEstimatedTotalDevDays: "314.3333333333333088",
            verifyEstimatedTotalDevDaysWithCreep: "138.1787234042553705",
            completedEstimatedTotalDevDaysWithCreep: "450.999999999999963",
            verifyStoryPoints: "271",
            completedStoryPoints: "108",
            completedFinalSPWithCreep: "1187.9999999999999774",
            verifyFinalSPWithCreep: "913.3276595744681332",
            storyPoints: "828",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "6/14/2017",
            verifyEstimatedTotalDevDays: "100.4378109452736384",
            completedEstimatedTotalDevDays: "367.054545454545492",
            verifyEstimatedTotalDevDaysWithCreep: "104.8864864864864935",
            completedEstimatedTotalDevDaysWithCreep: "497.5384615384616169",
            verifyStoryPoints: "402",
            completedStoryPoints: "110",
            completedFinalSPWithCreep: "1116.9230769230769652",
            verifyFinalSPWithCreep: "860.4972972972973",
            storyPoints: "824",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "6/20/2017",
            verifyEstimatedTotalDevDays: "116.5038560411310696",
            completedEstimatedTotalDevDays: "241.0638297872340408",
            verifyEstimatedTotalDevDaysWithCreep: "122.0168067226890344",
            completedEstimatedTotalDevDaysWithCreep: "279.2307692307692272",
            verifyStoryPoints: "389",
            completedStoryPoints: "188",
            completedFinalSPWithCreep: "954.4615384615384544",
            verifyFinalSPWithCreep: "862.991596638655436",
            storyPoints: "824",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "7/7/2017",
            verifyEstimatedTotalDevDays: "128.5263157894737142",
            completedEstimatedTotalDevDays: "293.04",
            verifyEstimatedTotalDevDaysWithCreep: "131.3917050691244562",
            completedEstimatedTotalDevDaysWithCreep: "320.3595505617977557",
            verifyStoryPoints: "456",
            completedStoryPoints: "200",
            completedFinalSPWithCreep: "889.8876404494382174",
            verifyFinalSPWithCreep: "832.1474654377880341",
            storyPoints: "814",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "7/12/2017",
            verifyEstimatedTotalDevDays: "141.3658536585366096",
            completedEstimatedTotalDevDays: "211.8139534883720988",
            verifyEstimatedTotalDevDaysWithCreep: "146.9493975903614733",
            completedEstimatedTotalDevDaysWithCreep: "230.1283018867924567",
            verifyStoryPoints: "451",
            completedStoryPoints: "301",
            completedFinalSPWithCreep: "899.5924528301886736",
            verifyFinalSPWithCreep: "860.7036144578313334",
            storyPoints: "828",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "7/21/2017",
            verifyEstimatedTotalDevDays: "147.7344398340248784",
            completedEstimatedTotalDevDays: "213.1976047904191944",
            verifyEstimatedTotalDevDaysWithCreep: "152.7174887892376469",
            completedEstimatedTotalDevDaysWithCreep: "228.5637583892617873",
            verifyStoryPoints: "482",
            completedStoryPoints: "334",
            completedFinalSPWithCreep: "887.6778523489933068",
            verifyFinalSPWithCreep: "855.9282511210762246",
            storyPoints: "828",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "8/2/2017",
            verifyEstimatedTotalDevDays: "165.1886409736307922",
            completedEstimatedTotalDevDays: "243.8263473053892126",
            verifyEstimatedTotalDevDaysWithCreep: "170.9603524229074446",
            completedEstimatedTotalDevDaysWithCreep: "263.1050847457626997",
            verifyStoryPoints: "493",
            completedStoryPoints: "334",
            completedFinalSPWithCreep: "896.7050847457627102",
            verifyFinalSPWithCreep: "860.0352422907488831",
            storyPoints: "831",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "8/4/2017",
            verifyEstimatedTotalDevDays: "132.3293172690762904",
            completedEstimatedTotalDevDays: "163.5235732009925748",
            verifyEstimatedTotalDevDaysWithCreep: "125.515055467511874",
            completedEstimatedTotalDevDaysWithCreep: "147.7611940298507601",
            verifyStoryPoints: "498",
            completedStoryPoints: "403",
            completedFinalSPWithCreep: "595.4776119402984891",
            verifyFinalSPWithCreep: "625.0649762282092076",
            storyPoints: "659",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "8/16/2017",
            verifyEstimatedTotalDevDays: "147.0278884462151145",
            completedEstimatedTotalDevDays: "176.5741626794258266",
            verifyEstimatedTotalDevDaysWithCreep: "139.6913385826771467",
            completedEstimatedTotalDevDaysWithCreep: "160.9872958257713164",
            verifyStoryPoints: "502",
            completedStoryPoints: "418",
            completedFinalSPWithCreep: "600.8275862068965618",
            verifyFinalSPWithCreep: "626.1165354330708883",
            storyPoints: "659",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "8/30/2017",
            verifyEstimatedTotalDevDays: "139.3187919463087496",
            completedEstimatedTotalDevDays: "174.8084210526315512",
            verifyEstimatedTotalDevDaysWithCreep: "136.8888888888889082",
            completedEstimatedTotalDevDaysWithCreep: "164.1315789473684005",
            verifyStoryPoints: "596",
            completedStoryPoints: "475",
            completedFinalSPWithCreep: "618.7500000000000144",
            verifyFinalSPWithCreep: "647.5061728395061464",
            storyPoints: "659",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "9/13/2017",
            verifyEstimatedTotalDevDays: "147.310126582278513",
            completedEstimatedTotalDevDays: "171.454880294659297",
            verifyEstimatedTotalDevDaysWithCreep: "146.0869565217391582",
            completedEstimatedTotalDevDaysWithCreep: "165.4925373134328363",
            verifyStoryPoints: "632",
            completedStoryPoints: "543",
            completedFinalSPWithCreep: "641.8746268656716485",
            verifyFinalSPWithCreep: "659.4782608695651985",
            storyPoints: "665",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "9/20/2017",
            verifyEstimatedTotalDevDays: "160.254098360655705",
            completedEstimatedTotalDevDays: "160.254098360655705",
            verifyEstimatedTotalDevDaysWithCreep: "157.9701492537313164",
            completedEstimatedTotalDevDaysWithCreep: "157.9701492537313164",
            verifyStoryPoints: "610",
            completedStoryPoints: "610",
            completedFinalSPWithCreep: "655.5223880597015185",
            verifyFinalSPWithCreep: "655.5223880597015185",
            storyPoints: "665",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "9/26/2017",
            verifyEstimatedTotalDevDays: "161.756756756756728",
            completedEstimatedTotalDevDays: "168.1735537190082815",
            verifyEstimatedTotalDevDaysWithCreep: "160.2857142857142628",
            completedEstimatedTotalDevDaysWithCreep: "165.5409836065573901",
            verifyStoryPoints: "629",
            completedStoryPoints: "605",
            completedFinalSPWithCreep: "654.5901639344262159",
            verifyFinalSPWithCreep: "658.9523809523809687",
            storyPoints: "665",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "10/23/2017",
            verifyEstimatedTotalDevDays: "186.9627507163324125",
            completedEstimatedTotalDevDays: "202.01238390092878",
            verifyEstimatedTotalDevDaysWithCreep: "186.3529411764706189",
            completedEstimatedTotalDevDaysWithCreep: "199.9438990182328095",
            verifyStoryPoints: "698",
            completedStoryPoints: "646",
            completedFinalSPWithCreep: "717.576437587657792",
            verifyFinalSPWithCreep: "722.6352941176470516",
            storyPoints: "725",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "10/24/2017",
            verifyEstimatedTotalDevDays: "190.73401162790697",
            completedEstimatedTotalDevDays: "191.569343065693455",
            verifyEstimatedTotalDevDaysWithCreep: "189.8701986754966841",
            completedEstimatedTotalDevDaysWithCreep: "190.6276595744681073",
            verifyStoryPoints: "688",
            completedStoryPoints: "685",
            completedFinalSPWithCreep: "721.4361702127659475",
            verifyFinalSPWithCreep: "721.7165562913907285",
            storyPoints: "725",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "10/31/2017",
            verifyEstimatedTotalDevDays: "192.7864214992927775",
            completedEstimatedTotalDevDays: "193.883357041251775",
            verifyEstimatedTotalDevDaysWithCreep: "192.3720930232558037",
            completedEstimatedTotalDevDaysWithCreep: "193.3714285714285681",
            verifyStoryPoints: "707",
            completedStoryPoints: "703",
            completedFinalSPWithCreep: "723.0857142857142783",
            verifyFinalSPWithCreep: "723.4418604651162741",
            storyPoints: "725",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "1/15/2018",
            verifyEstimatedTotalDevDays: "305.2722371967654672",
            completedEstimatedTotalDevDays: "310.7160493827160914",
            verifyEstimatedTotalDevDaysWithCreep: "309.3017751479289586",
            completedEstimatedTotalDevDaysWithCreep: "315.3665158371041181",
            verifyStoryPoints: "742",
            completedStoryPoints: "729",
            completedFinalSPWithCreep: "870.8416289592760295",
            verifyFinalSPWithCreep: "869.3254437869822397",
            storyPoints: "858",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "2/26/2018",
            verifyEstimatedTotalDevDays: "339.0385604113110172",
            completedEstimatedTotalDevDays: "342.5610389610389588",
            verifyEstimatedTotalDevDaysWithCreep: "342.3050847457626721",
            completedEstimatedTotalDevDaysWithCreep: "346.2171428571428464",
            verifyStoryPoints: "778",
            completedStoryPoints: "770",
            completedFinalSPWithCreep: "871.1999999999999896",
            verifyFinalSPWithCreep: "870.3050847457626949",
            storyPoints: "862",
            dateDevStart: "4/26/2017"
        }, {
            estimateDate: "3/27/2018",
            verifyEstimatedTotalDevDays: "365.0695322376737906",
            completedEstimatedTotalDevDays: "365.0695322376737906",
            verifyEstimatedTotalDevDaysWithCreep: "367.9889042995838691",
            completedEstimatedTotalDevDaysWithCreep: "367.9889042995838691",
            verifyStoryPoints: "791",
            completedStoryPoints: "791",
            completedFinalSPWithCreep: "868.8932038834951313",
            verifyFinalSPWithCreep: "868.8932038834951313",
            storyPoints: "862",
            dateDevStart: "4/26/2017"
        }]
    }
}, , , , , , , , function (t, e, n) {
    "use strict";
    n.r(e);
    n(1), n(2), n(6), n(12);
    var i = function (t, e) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
    }, r = function (t) {
        var e;
        return 1 === t.length && (e = t, t = function (t, n) {
            return i(e(t), n)
        }), {
            left: function (e, n, i, r) {
                for (null == i && (i = 0), null == r && (r = e.length); i < r;) {
                    var o = i + r >>> 1;
                    t(e[o], n) < 0 ? i = o + 1 : r = o
                }
                return i
            }, right: function (e, n, i, r) {
                for (null == i && (i = 0), null == r && (r = e.length); i < r;) {
                    var o = i + r >>> 1;
                    t(e[o], n) > 0 ? r = o : i = o + 1
                }
                return i
            }
        }
    };
    var o = r(i), a = o.right, s = (o.left, a);
    var c = Array.prototype, f = (c.slice, c.map, Math.sqrt(50)), l = Math.sqrt(10), u = Math.sqrt(2),
        h = function (t, e, n) {
            var i, r, o, a, s = -1;
            if (n = +n, (t = +t) === (e = +e) && n > 0) return [t];
            if ((i = e < t) && (r = t, t = e, e = r), 0 === (a = d(t, e, n)) || !isFinite(a)) return [];
            if (a > 0) for (t = Math.ceil(t / a), e = Math.floor(e / a), o = new Array(r = Math.ceil(e - t + 1)); ++s < r;) o[s] = (t + s) * a; else for (t = Math.floor(t * a), e = Math.ceil(e * a), o = new Array(r = Math.ceil(t - e + 1)); ++s < r;) o[s] = (t - s) / a;
            return i && o.reverse(), o
        };

    function d(t, e, n) {
        var i = (e - t) / Math.max(0, n), r = Math.floor(Math.log(i) / Math.LN10), o = i / Math.pow(10, r);
        return r >= 0 ? (o >= f ? 10 : o >= l ? 5 : o >= u ? 2 : 1) * Math.pow(10, r) : -Math.pow(10, -r) / (o >= f ? 10 : o >= l ? 5 : o >= u ? 2 : 1)
    }

    function p(t, e, n) {
        var i = Math.abs(e - t) / Math.max(0, n), r = Math.pow(10, Math.floor(Math.log(i) / Math.LN10)), o = i / r;
        return o >= f ? r *= 10 : o >= l ? r *= 5 : o >= u && (r *= 2), e < t ? -r : r
    }

    var m = function (t, e) {
        var n, i, r = t.length, o = -1;
        if (null == e) {
            for (; ++o < r;) if (null != (n = t[o]) && n >= n) for (i = n; ++o < r;) null != (n = t[o]) && n > i && (i = n)
        } else for (; ++o < r;) if (null != (n = e(t[o], o, t)) && n >= n) for (i = n; ++o < r;) null != (n = e(t[o], o, t)) && n > i && (i = n);
        return i
    }, g = function (t) {
        for (var e, n, i, r = t.length, o = -1, a = 0; ++o < r;) a += t[o].length;
        for (n = new Array(a); --r >= 0;) for (e = (i = t[r]).length; --e >= 0;) n[--a] = i[e];
        return n
    };
    var y = Array.prototype.slice, v = function (t) {
        return t
    }, _ = 1, b = 2, x = 3, w = 4, T = 1e-6;

    function E(t) {
        return "translate(" + (t + .5) + ",0)"
    }

    function D(t) {
        return "translate(0," + (t + .5) + ")"
    }

    function C() {
        return !this.__axis
    }

    function S(t, e) {
        var n = [], i = null, r = null, o = 6, a = 6, s = 3, c = t === _ || t === w ? -1 : 1,
            f = t === w || t === b ? "x" : "y", l = t === _ || t === x ? E : D;

        function u(u) {
            var h = null == i ? e.ticks ? e.ticks.apply(e, n) : e.domain() : i,
                d = null == r ? e.tickFormat ? e.tickFormat.apply(e, n) : v : r, p = Math.max(o, 0) + s, m = e.range(),
                g = +m[0] + .5, y = +m[m.length - 1] + .5, E = (e.bandwidth ? function (t) {
                    var e = Math.max(0, t.bandwidth() - 1) / 2;
                    return t.round() && (e = Math.round(e)), function (n) {
                        return +t(n) + e
                    }
                } : function (t) {
                    return function (e) {
                        return +t(e)
                    }
                })(e.copy()), D = u.selection ? u.selection() : u, S = D.selectAll(".domain").data([null]),
                A = D.selectAll(".tick").data(h, e).order(), N = A.exit(),
                P = A.enter().append("g").attr("class", "tick"), M = A.select("line"), k = A.select("text");
            S = S.merge(S.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")), A = A.merge(P), M = M.merge(P.append("line").attr("stroke", "#000").attr(f + "2", c * o)), k = k.merge(P.append("text").attr("fill", "#000").attr(f, c * p).attr("dy", t === _ ? "0em" : t === x ? "0.71em" : "0.32em")), u !== D && (S = S.transition(u), A = A.transition(u), M = M.transition(u), k = k.transition(u), N = N.transition(u).attr("opacity", T).attr("transform", function (t) {
                return isFinite(t = E(t)) ? l(t) : this.getAttribute("transform")
            }), P.attr("opacity", T).attr("transform", function (t) {
                var e = this.parentNode.__axis;
                return l(e && isFinite(e = e(t)) ? e : E(t))
            })), N.remove(), S.attr("d", t === w || t == b ? "M" + c * a + "," + g + "H0.5V" + y + "H" + c * a : "M" + g + "," + c * a + "V0.5H" + y + "V" + c * a), A.attr("opacity", 1).attr("transform", function (t) {
                return l(E(t))
            }), M.attr(f + "2", c * o), k.attr(f, c * p).text(d), D.filter(C).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === b ? "start" : t === w ? "end" : "middle"), D.each(function () {
                this.__axis = E
            })
        }

        return u.scale = function (t) {
            return arguments.length ? (e = t, u) : e
        }, u.ticks = function () {
            return n = y.call(arguments), u
        }, u.tickArguments = function (t) {
            return arguments.length ? (n = null == t ? [] : y.call(t), u) : n.slice()
        }, u.tickValues = function (t) {
            return arguments.length ? (i = null == t ? null : y.call(t), u) : i && i.slice()
        }, u.tickFormat = function (t) {
            return arguments.length ? (r = t, u) : r
        }, u.tickSize = function (t) {
            return arguments.length ? (o = a = +t, u) : o
        }, u.tickSizeInner = function (t) {
            return arguments.length ? (o = +t, u) : o
        }, u.tickSizeOuter = function (t) {
            return arguments.length ? (a = +t, u) : a
        }, u.tickPadding = function (t) {
            return arguments.length ? (s = +t, u) : s
        }, u
    }

    var A = {
        value: function () {
        }
    };

    function N() {
        for (var t, e = 0, n = arguments.length, i = {}; e < n; ++e) {
            if (!(t = arguments[e] + "") || t in i) throw new Error("illegal type: " + t);
            i[t] = []
        }
        return new P(i)
    }

    function P(t) {
        this._ = t
    }

    function M(t, e) {
        for (var n, i = 0, r = t.length; i < r; ++i) if ((n = t[i]).name === e) return n.value
    }

    function k(t, e, n) {
        for (var i = 0, r = t.length; i < r; ++i) if (t[i].name === e) {
            t[i] = A, t = t.slice(0, i).concat(t.slice(i + 1));
            break
        }
        return null != n && t.push({name: e, value: n}), t
    }

    P.prototype = N.prototype = {
        constructor: P, on: function (t, e) {
            var n, i, r = this._, o = (i = r, (t + "").trim().split(/^|\s+/).map(function (t) {
                var e = "", n = t.indexOf(".");
                if (n >= 0 && (e = t.slice(n + 1), t = t.slice(0, n)), t && !i.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                return {type: t, name: e}
            })), a = -1, s = o.length;
            if (!(arguments.length < 2)) {
                if (null != e && "function" != typeof e) throw new Error("invalid callback: " + e);
                for (; ++a < s;) if (n = (t = o[a]).type) r[n] = k(r[n], t.name, e); else if (null == e) for (n in r) r[n] = k(r[n], t.name, null);
                return this
            }
            for (; ++a < s;) if ((n = (t = o[a]).type) && (n = M(r[n], t.name))) return n
        }, copy: function () {
            var t = {}, e = this._;
            for (var n in e) t[n] = e[n].slice();
            return new P(t)
        }, call: function (t, e) {
            if ((n = arguments.length - 2) > 0) for (var n, i, r = new Array(n), o = 0; o < n; ++o) r[o] = arguments[o + 2];
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (o = 0, n = (i = this._[t]).length; o < n; ++o) i[o].value.apply(e, r)
        }, apply: function (t, e, n) {
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (var i = this._[t], r = 0, o = i.length; r < o; ++r) i[r].value.apply(e, n)
        }
    };
    var I = N, O = "http://www.w3.org/1999/xhtml", L = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: O,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    }, W = function (t) {
        var e = t += "", n = e.indexOf(":");
        return n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)), L.hasOwnProperty(e) ? {
            space: L[e],
            local: t
        } : t
    };
    var R = function (t) {
        var e = W(t);
        return (e.local ? function (t) {
            return function () {
                return this.ownerDocument.createElementNS(t.space, t.local)
            }
        } : function (t) {
            return function () {
                var e = this.ownerDocument, n = this.namespaceURI;
                return n === O && e.documentElement.namespaceURI === O ? e.createElement(t) : e.createElementNS(n, t)
            }
        })(e)
    };

    function F() {
    }

    var H = function (t) {
        return null == t ? F : function () {
            return this.querySelector(t)
        }
    };

    function j() {
        return []
    }

    var U = function (t) {
        return null == t ? j : function () {
            return this.querySelectorAll(t)
        }
    }, B = function (t) {
        return function () {
            return this.matches(t)
        }
    };
    if ("undefined" != typeof document) {
        var V = document.documentElement;
        if (!V.matches) {
            var q = V.webkitMatchesSelector || V.msMatchesSelector || V.mozMatchesSelector || V.oMatchesSelector;
            B = function (t) {
                return function () {
                    return q.call(this, t)
                }
            }
        }
    }
    var Y = B, z = function (t) {
        return new Array(t.length)
    };

    function G(t, e) {
        this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e
    }

    G.prototype = {
        constructor: G, appendChild: function (t) {
            return this._parent.insertBefore(t, this._next)
        }, insertBefore: function (t, e) {
            return this._parent.insertBefore(t, e)
        }, querySelector: function (t) {
            return this._parent.querySelector(t)
        }, querySelectorAll: function (t) {
            return this._parent.querySelectorAll(t)
        }
    };
    var X = "$";

    function K(t, e, n, i, r, o) {
        for (var a, s = 0, c = e.length, f = o.length; s < f; ++s) (a = e[s]) ? (a.__data__ = o[s], i[s] = a) : n[s] = new G(t, o[s]);
        for (; s < c; ++s) (a = e[s]) && (r[s] = a)
    }

    function Q(t, e, n, i, r, o, a) {
        var s, c, f, l = {}, u = e.length, h = o.length, d = new Array(u);
        for (s = 0; s < u; ++s) (c = e[s]) && (d[s] = f = X + a.call(c, c.__data__, s, e), f in l ? r[s] = c : l[f] = c);
        for (s = 0; s < h; ++s) (c = l[f = X + a.call(t, o[s], s, o)]) ? (i[s] = c, c.__data__ = o[s], l[f] = null) : n[s] = new G(t, o[s]);
        for (s = 0; s < u; ++s) (c = e[s]) && l[d[s]] === c && (r[s] = c)
    }

    function Z(t, e) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
    }

    var J = function (t) {
        return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
    };

    function tt(t, e) {
        return t.style.getPropertyValue(e) || J(t).getComputedStyle(t, null).getPropertyValue(e)
    }

    function et(t) {
        return t.trim().split(/^|\s+/)
    }

    function nt(t) {
        return t.classList || new it(t)
    }

    function it(t) {
        this._node = t, this._names = et(t.getAttribute("class") || "")
    }

    function rt(t, e) {
        for (var n = nt(t), i = -1, r = e.length; ++i < r;) n.add(e[i])
    }

    function ot(t, e) {
        for (var n = nt(t), i = -1, r = e.length; ++i < r;) n.remove(e[i])
    }

    it.prototype = {
        add: function (t) {
            this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
        }, remove: function (t) {
            var e = this._names.indexOf(t);
            e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")))
        }, contains: function (t) {
            return this._names.indexOf(t) >= 0
        }
    };

    function at() {
        this.textContent = ""
    }

    function st() {
        this.innerHTML = ""
    }

    function ct() {
        this.nextSibling && this.parentNode.appendChild(this)
    }

    function ft() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }

    function lt() {
        return null
    }

    function ut() {
        var t = this.parentNode;
        t && t.removeChild(this)
    }

    function ht() {
        return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
    }

    function dt() {
        return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
    }

    var pt = {}, mt = null;
    "undefined" != typeof document && ("onmouseenter" in document.documentElement || (pt = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }));

    function gt(t, e, n) {
        return t = yt(t, e, n), function (e) {
            var n = e.relatedTarget;
            n && (n === this || 8 & n.compareDocumentPosition(this)) || t.call(this, e)
        }
    }

    function yt(t, e, n) {
        return function (i) {
            var r = mt;
            mt = i;
            try {
                t.call(this, this.__data__, e, n)
            } finally {
                mt = r
            }
        }
    }

    function vt(t) {
        return function () {
            var e = this.__on;
            if (e) {
                for (var n, i = 0, r = -1, o = e.length; i < o; ++i) n = e[i], t.type && n.type !== t.type || n.name !== t.name ? e[++r] = n : this.removeEventListener(n.type, n.listener, n.capture);
                ++r ? e.length = r : delete this.__on
            }
        }
    }

    function _t(t, e, n) {
        var i = pt.hasOwnProperty(t.type) ? gt : yt;
        return function (r, o, a) {
            var s, c = this.__on, f = i(e, o, a);
            if (c) for (var l = 0, u = c.length; l < u; ++l) if ((s = c[l]).type === t.type && s.name === t.name) return this.removeEventListener(s.type, s.listener, s.capture), this.addEventListener(s.type, s.listener = f, s.capture = n), void(s.value = e);
            this.addEventListener(t.type, f, n), s = {
                type: t.type,
                name: t.name,
                value: e,
                listener: f,
                capture: n
            }, c ? c.push(s) : this.__on = [s]
        }
    }

    function bt(t, e, n) {
        var i = J(t), r = i.CustomEvent;
        "function" == typeof r ? r = new r(e, n) : (r = i.document.createEvent("Event"), n ? (r.initEvent(e, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(e, !1, !1)), t.dispatchEvent(r)
    }

    var xt = [null];

    function wt(t, e) {
        this._groups = t, this._parents = e
    }

    function Tt() {
        return new wt([[document.documentElement]], xt)
    }

    wt.prototype = Tt.prototype = {
        constructor: wt, select: function (t) {
            "function" != typeof t && (t = H(t));
            for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r) for (var o, a, s = e[r], c = s.length, f = i[r] = new Array(c), l = 0; l < c; ++l) (o = s[l]) && (a = t.call(o, o.__data__, l, s)) && ("__data__" in o && (a.__data__ = o.__data__), f[l] = a);
            return new wt(i, this._parents)
        }, selectAll: function (t) {
            "function" != typeof t && (t = U(t));
            for (var e = this._groups, n = e.length, i = [], r = [], o = 0; o < n; ++o) for (var a, s = e[o], c = s.length, f = 0; f < c; ++f) (a = s[f]) && (i.push(t.call(a, a.__data__, f, s)), r.push(a));
            return new wt(i, r)
        }, filter: function (t) {
            "function" != typeof t && (t = Y(t));
            for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r) for (var o, a = e[r], s = a.length, c = i[r] = [], f = 0; f < s; ++f) (o = a[f]) && t.call(o, o.__data__, f, a) && c.push(o);
            return new wt(i, this._parents)
        }, data: function (t, e) {
            if (!t) return p = new Array(this.size()), l = -1, this.each(function (t) {
                p[++l] = t
            }), p;
            var n, i = e ? Q : K, r = this._parents, o = this._groups;
            "function" != typeof t && (n = t, t = function () {
                return n
            });
            for (var a = o.length, s = new Array(a), c = new Array(a), f = new Array(a), l = 0; l < a; ++l) {
                var u = r[l], h = o[l], d = h.length, p = t.call(u, u && u.__data__, l, r), m = p.length,
                    g = c[l] = new Array(m), y = s[l] = new Array(m);
                i(u, h, g, y, f[l] = new Array(d), p, e);
                for (var v, _, b = 0, x = 0; b < m; ++b) if (v = g[b]) {
                    for (b >= x && (x = b + 1); !(_ = y[x]) && ++x < m;) ;
                    v._next = _ || null
                }
            }
            return (s = new wt(s, r))._enter = c, s._exit = f, s
        }, enter: function () {
            return new wt(this._enter || this._groups.map(z), this._parents)
        }, exit: function () {
            return new wt(this._exit || this._groups.map(z), this._parents)
        }, merge: function (t) {
            for (var e = this._groups, n = t._groups, i = e.length, r = n.length, o = Math.min(i, r), a = new Array(i), s = 0; s < o; ++s) for (var c, f = e[s], l = n[s], u = f.length, h = a[s] = new Array(u), d = 0; d < u; ++d) (c = f[d] || l[d]) && (h[d] = c);
            for (; s < i; ++s) a[s] = e[s];
            return new wt(a, this._parents)
        }, order: function () {
            for (var t = this._groups, e = -1, n = t.length; ++e < n;) for (var i, r = t[e], o = r.length - 1, a = r[o]; --o >= 0;) (i = r[o]) && (a && a !== i.nextSibling && a.parentNode.insertBefore(i, a), a = i);
            return this
        }, sort: function (t) {
            function e(e, n) {
                return e && n ? t(e.__data__, n.__data__) : !e - !n
            }

            t || (t = Z);
            for (var n = this._groups, i = n.length, r = new Array(i), o = 0; o < i; ++o) {
                for (var a, s = n[o], c = s.length, f = r[o] = new Array(c), l = 0; l < c; ++l) (a = s[l]) && (f[l] = a);
                f.sort(e)
            }
            return new wt(r, this._parents).order()
        }, call: function () {
            var t = arguments[0];
            return arguments[0] = this, t.apply(null, arguments), this
        }, nodes: function () {
            var t = new Array(this.size()), e = -1;
            return this.each(function () {
                t[++e] = this
            }), t
        }, node: function () {
            for (var t = this._groups, e = 0, n = t.length; e < n; ++e) for (var i = t[e], r = 0, o = i.length; r < o; ++r) {
                var a = i[r];
                if (a) return a
            }
            return null
        }, size: function () {
            var t = 0;
            return this.each(function () {
                ++t
            }), t
        }, empty: function () {
            return !this.node()
        }, each: function (t) {
            for (var e = this._groups, n = 0, i = e.length; n < i; ++n) for (var r, o = e[n], a = 0, s = o.length; a < s; ++a) (r = o[a]) && t.call(r, r.__data__, a, o);
            return this
        }, attr: function (t, e) {
            var n = W(t);
            if (arguments.length < 2) {
                var i = this.node();
                return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n)
            }
            return this.each((null == e ? n.local ? function (t) {
                return function () {
                    this.removeAttributeNS(t.space, t.local)
                }
            } : function (t) {
                return function () {
                    this.removeAttribute(t)
                }
            } : "function" == typeof e ? n.local ? function (t, e) {
                return function () {
                    var n = e.apply(this, arguments);
                    null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n)
                }
            } : function (t, e) {
                return function () {
                    var n = e.apply(this, arguments);
                    null == n ? this.removeAttribute(t) : this.setAttribute(t, n)
                }
            } : n.local ? function (t, e) {
                return function () {
                    this.setAttributeNS(t.space, t.local, e)
                }
            } : function (t, e) {
                return function () {
                    this.setAttribute(t, e)
                }
            })(n, e))
        }, style: function (t, e, n) {
            return arguments.length > 1 ? this.each((null == e ? function (t) {
                return function () {
                    this.style.removeProperty(t)
                }
            } : "function" == typeof e ? function (t, e, n) {
                return function () {
                    var i = e.apply(this, arguments);
                    null == i ? this.style.removeProperty(t) : this.style.setProperty(t, i, n)
                }
            } : function (t, e, n) {
                return function () {
                    this.style.setProperty(t, e, n)
                }
            })(t, e, null == n ? "" : n)) : tt(this.node(), t)
        }, property: function (t, e) {
            return arguments.length > 1 ? this.each((null == e ? function (t) {
                return function () {
                    delete this[t]
                }
            } : "function" == typeof e ? function (t, e) {
                return function () {
                    var n = e.apply(this, arguments);
                    null == n ? delete this[t] : this[t] = n
                }
            } : function (t, e) {
                return function () {
                    this[t] = e
                }
            })(t, e)) : this.node()[t]
        }, classed: function (t, e) {
            var n = et(t + "");
            if (arguments.length < 2) {
                for (var i = nt(this.node()), r = -1, o = n.length; ++r < o;) if (!i.contains(n[r])) return !1;
                return !0
            }
            return this.each(("function" == typeof e ? function (t, e) {
                return function () {
                    (e.apply(this, arguments) ? rt : ot)(this, t)
                }
            } : e ? function (t) {
                return function () {
                    rt(this, t)
                }
            } : function (t) {
                return function () {
                    ot(this, t)
                }
            })(n, e))
        }, text: function (t) {
            return arguments.length ? this.each(null == t ? at : ("function" == typeof t ? function (t) {
                return function () {
                    var e = t.apply(this, arguments);
                    this.textContent = null == e ? "" : e
                }
            } : function (t) {
                return function () {
                    this.textContent = t
                }
            })(t)) : this.node().textContent
        }, html: function (t) {
            return arguments.length ? this.each(null == t ? st : ("function" == typeof t ? function (t) {
                return function () {
                    var e = t.apply(this, arguments);
                    this.innerHTML = null == e ? "" : e
                }
            } : function (t) {
                return function () {
                    this.innerHTML = t
                }
            })(t)) : this.node().innerHTML
        }, raise: function () {
            return this.each(ct)
        }, lower: function () {
            return this.each(ft)
        }, append: function (t) {
            var e = "function" == typeof t ? t : R(t);
            return this.select(function () {
                return this.appendChild(e.apply(this, arguments))
            })
        }, insert: function (t, e) {
            var n = "function" == typeof t ? t : R(t), i = null == e ? lt : "function" == typeof e ? e : H(e);
            return this.select(function () {
                return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null)
            })
        }, remove: function () {
            return this.each(ut)
        }, clone: function (t) {
            return this.select(t ? dt : ht)
        }, datum: function (t) {
            return arguments.length ? this.property("__data__", t) : this.node().__data__
        }, on: function (t, e, n) {
            var i, r, o = function (t) {
                return t.trim().split(/^|\s+/).map(function (t) {
                    var e = "", n = t.indexOf(".");
                    return n >= 0 && (e = t.slice(n + 1), t = t.slice(0, n)), {type: t, name: e}
                })
            }(t + ""), a = o.length;
            if (!(arguments.length < 2)) {
                for (s = e ? _t : vt, null == n && (n = !1), i = 0; i < a; ++i) this.each(s(o[i], e, n));
                return this
            }
            var s = this.node().__on;
            if (s) for (var c, f = 0, l = s.length; f < l; ++f) for (i = 0, c = s[f]; i < a; ++i) if ((r = o[i]).type === c.type && r.name === c.name) return c.value
        }, dispatch: function (t, e) {
            return this.each(("function" == typeof e ? function (t, e) {
                return function () {
                    return bt(this, t, e.apply(this, arguments))
                }
            } : function (t, e) {
                return function () {
                    return bt(this, t, e)
                }
            })(t, e))
        }
    };
    var Et = Tt, Dt = function (t) {
        return "string" == typeof t ? new wt([[document.querySelector(t)]], [document.documentElement]) : new wt([[t]], xt)
    }, Ct = 0;

    function St() {
        this._ = "@" + (++Ct).toString(36)
    }

    St.prototype = function () {
        return new St
    }.prototype = {
        constructor: St, get: function (t) {
            for (var e = this._; !(e in t);) if (!(t = t.parentNode)) return;
            return t[e]
        }, set: function (t, e) {
            return t[this._] = e
        }, remove: function (t) {
            return this._ in t && delete t[this._]
        }, toString: function () {
            return this._
        }
    };

    function At(t, e, n, i, r, o, a, s, c, f) {
        this.target = t, this.type = e, this.subject = n, this.identifier = i, this.active = r, this.x = o, this.y = a, this.dx = s, this.dy = c, this._ = f
    }

    At.prototype.on = function () {
        var t = this._.on.apply(this._, arguments);
        return t === this._ ? this : t
    };
    var Nt = function (t, e, n) {
        t.prototype = e.prototype = n, n.constructor = t
    };

    function Pt(t, e) {
        var n = Object.create(t.prototype);
        for (var i in e) n[i] = e[i];
        return n
    }

    function Mt() {
    }

    var kt = "\\s*([+-]?\\d+)\\s*", It = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        Ot = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Lt = /^#([0-9a-f]{3})$/, Wt = /^#([0-9a-f]{6})$/,
        Rt = new RegExp("^rgb\\(" + [kt, kt, kt] + "\\)$"), Ft = new RegExp("^rgb\\(" + [Ot, Ot, Ot] + "\\)$"),
        Ht = new RegExp("^rgba\\(" + [kt, kt, kt, It] + "\\)$"),
        jt = new RegExp("^rgba\\(" + [Ot, Ot, Ot, It] + "\\)$"), Ut = new RegExp("^hsl\\(" + [It, Ot, Ot] + "\\)$"),
        Bt = new RegExp("^hsla\\(" + [It, Ot, Ot, It] + "\\)$"), Vt = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        };

    function qt(t) {
        var e;
        return t = (t + "").trim().toLowerCase(), (e = Lt.exec(t)) ? new Xt((e = parseInt(e[1], 16)) >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : (e = Wt.exec(t)) ? Yt(parseInt(e[1], 16)) : (e = Rt.exec(t)) ? new Xt(e[1], e[2], e[3], 1) : (e = Ft.exec(t)) ? new Xt(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = Ht.exec(t)) ? zt(e[1], e[2], e[3], e[4]) : (e = jt.exec(t)) ? zt(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = Ut.exec(t)) ? Qt(e[1], e[2] / 100, e[3] / 100, 1) : (e = Bt.exec(t)) ? Qt(e[1], e[2] / 100, e[3] / 100, e[4]) : Vt.hasOwnProperty(t) ? Yt(Vt[t]) : "transparent" === t ? new Xt(NaN, NaN, NaN, 0) : null
    }

    function Yt(t) {
        return new Xt(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
    }

    function zt(t, e, n, i) {
        return i <= 0 && (t = e = n = NaN), new Xt(t, e, n, i)
    }

    function Gt(t) {
        return t instanceof Mt || (t = qt(t)), t ? new Xt((t = t.rgb()).r, t.g, t.b, t.opacity) : new Xt
    }

    function $t(t, e, n, i) {
        return 1 === arguments.length ? Gt(t) : new Xt(t, e, n, null == i ? 1 : i)
    }

    function Xt(t, e, n, i) {
        this.r = +t, this.g = +e, this.b = +n, this.opacity = +i
    }

    function Kt(t) {
        return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
    }

    function Qt(t, e, n, i) {
        return i <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Jt(t, e, n, i)
    }

    function Zt(t, e, n, i) {
        return 1 === arguments.length ? function (t) {
            if (t instanceof Jt) return new Jt(t.h, t.s, t.l, t.opacity);
            if (t instanceof Mt || (t = qt(t)), !t) return new Jt;
            if (t instanceof Jt) return t;
            var e = (t = t.rgb()).r / 255, n = t.g / 255, i = t.b / 255, r = Math.min(e, n, i), o = Math.max(e, n, i),
                a = NaN, s = o - r, c = (o + r) / 2;
            return s ? (a = e === o ? (n - i) / s + 6 * (n < i) : n === o ? (i - e) / s + 2 : (e - n) / s + 4, s /= c < .5 ? o + r : 2 - o - r, a *= 60) : s = c > 0 && c < 1 ? 0 : a, new Jt(a, s, c, t.opacity)
        }(t) : new Jt(t, e, n, null == i ? 1 : i)
    }

    function Jt(t, e, n, i) {
        this.h = +t, this.s = +e, this.l = +n, this.opacity = +i
    }

    function te(t, e, n) {
        return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e)
    }

    Nt(Mt, qt, {
        displayable: function () {
            return this.rgb().displayable()
        }, hex: function () {
            return this.rgb().hex()
        }, toString: function () {
            return this.rgb() + ""
        }
    }), Nt(Xt, $t, Pt(Mt, {
        brighter: function (t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Xt(this.r * t, this.g * t, this.b * t, this.opacity)
        }, darker: function (t) {
            return t = null == t ? .7 : Math.pow(.7, t), new Xt(this.r * t, this.g * t, this.b * t, this.opacity)
        }, rgb: function () {
            return this
        }, displayable: function () {
            return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
        }, hex: function () {
            return "#" + Kt(this.r) + Kt(this.g) + Kt(this.b)
        }, toString: function () {
            var t = this.opacity;
            return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
        }
    })), Nt(Jt, Zt, Pt(Mt, {
        brighter: function (t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Jt(this.h, this.s, this.l * t, this.opacity)
        }, darker: function (t) {
            return t = null == t ? .7 : Math.pow(.7, t), new Jt(this.h, this.s, this.l * t, this.opacity)
        }, rgb: function () {
            var t = this.h % 360 + 360 * (this.h < 0), e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l,
                i = n + (n < .5 ? n : 1 - n) * e, r = 2 * n - i;
            return new Xt(te(t >= 240 ? t - 240 : t + 120, r, i), te(t, r, i), te(t < 120 ? t + 240 : t - 120, r, i), this.opacity)
        }, displayable: function () {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
        }
    }));
    var ee = Math.PI / 180, ne = 180 / Math.PI, ie = .96422, re = 1, oe = .82521, ae = 4 / 29, se = 6 / 29,
        ce = 3 * se * se, fe = se * se * se;

    function le(t) {
        if (t instanceof he) return new he(t.l, t.a, t.b, t.opacity);
        if (t instanceof _e) {
            if (isNaN(t.h)) return new he(t.l, 0, 0, t.opacity);
            var e = t.h * ee;
            return new he(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity)
        }
        t instanceof Xt || (t = Gt(t));
        var n, i, r = ge(t.r), o = ge(t.g), a = ge(t.b), s = de((.2225045 * r + .7168786 * o + .0606169 * a) / re);
        return r === o && o === a ? n = i = s : (n = de((.4360747 * r + .3850649 * o + .1430804 * a) / ie), i = de((.0139322 * r + .0971045 * o + .7141733 * a) / oe)), new he(116 * s - 16, 500 * (n - s), 200 * (s - i), t.opacity)
    }

    function ue(t, e, n, i) {
        return 1 === arguments.length ? le(t) : new he(t, e, n, null == i ? 1 : i)
    }

    function he(t, e, n, i) {
        this.l = +t, this.a = +e, this.b = +n, this.opacity = +i
    }

    function de(t) {
        return t > fe ? Math.pow(t, 1 / 3) : t / ce + ae
    }

    function pe(t) {
        return t > se ? t * t * t : ce * (t - ae)
    }

    function me(t) {
        return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
    }

    function ge(t) {
        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
    }

    function ye(t) {
        if (t instanceof _e) return new _e(t.h, t.c, t.l, t.opacity);
        if (t instanceof he || (t = le(t)), 0 === t.a && 0 === t.b) return new _e(NaN, 0, t.l, t.opacity);
        var e = Math.atan2(t.b, t.a) * ne;
        return new _e(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
    }

    function ve(t, e, n, i) {
        return 1 === arguments.length ? ye(t) : new _e(t, e, n, null == i ? 1 : i)
    }

    function _e(t, e, n, i) {
        this.h = +t, this.c = +e, this.l = +n, this.opacity = +i
    }

    Nt(he, ue, Pt(Mt, {
        brighter: function (t) {
            return new he(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        }, darker: function (t) {
            return new he(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        }, rgb: function () {
            var t = (this.l + 16) / 116, e = isNaN(this.a) ? t : t + this.a / 500,
                n = isNaN(this.b) ? t : t - this.b / 200;
            return new Xt(me(3.1338561 * (e = ie * pe(e)) - 1.6168667 * (t = re * pe(t)) - .4906146 * (n = oe * pe(n))), me(-.9787684 * e + 1.9161415 * t + .033454 * n), me(.0719453 * e - .2289914 * t + 1.4052427 * n), this.opacity)
        }
    })), Nt(_e, ve, Pt(Mt, {
        brighter: function (t) {
            return new _e(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
        }, darker: function (t) {
            return new _e(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
        }, rgb: function () {
            return le(this).rgb()
        }
    }));
    var be = -.29227, xe = -.90649, we = 1.97294, Te = we * xe, Ee = 1.78277 * we, De = 1.78277 * be - -.14861 * xe;

    function Ce(t, e, n, i) {
        return 1 === arguments.length ? function (t) {
            if (t instanceof Se) return new Se(t.h, t.s, t.l, t.opacity);
            t instanceof Xt || (t = Gt(t));
            var e = t.r / 255, n = t.g / 255, i = t.b / 255, r = (De * i + Te * e - Ee * n) / (De + Te - Ee), o = i - r,
                a = (we * (n - r) - be * o) / xe, s = Math.sqrt(a * a + o * o) / (we * r * (1 - r)),
                c = s ? Math.atan2(a, o) * ne - 120 : NaN;
            return new Se(c < 0 ? c + 360 : c, s, r, t.opacity)
        }(t) : new Se(t, e, n, null == i ? 1 : i)
    }

    function Se(t, e, n, i) {
        this.h = +t, this.s = +e, this.l = +n, this.opacity = +i
    }

    function Ae(t, e, n, i, r) {
        var o = t * t, a = o * t;
        return ((1 - 3 * t + 3 * o - a) * e + (4 - 6 * o + 3 * a) * n + (1 + 3 * t + 3 * o - 3 * a) * i + a * r) / 6
    }

    Nt(Se, Ce, Pt(Mt, {
        brighter: function (t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Se(this.h, this.s, this.l * t, this.opacity)
        }, darker: function (t) {
            return t = null == t ? .7 : Math.pow(.7, t), new Se(this.h, this.s, this.l * t, this.opacity)
        }, rgb: function () {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * ee, e = +this.l, n = isNaN(this.s) ? 0 : this.s * e * (1 - e),
                i = Math.cos(t), r = Math.sin(t);
            return new Xt(255 * (e + n * (-.14861 * i + 1.78277 * r)), 255 * (e + n * (be * i + xe * r)), 255 * (e + n * (we * i)), this.opacity)
        }
    }));
    var Ne = function (t) {
        return function () {
            return t
        }
    };

    function Pe(t, e) {
        return function (n) {
            return t + n * e
        }
    }

    function Me(t, e) {
        var n = e - t;
        return n ? Pe(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : Ne(isNaN(t) ? e : t)
    }

    function ke(t) {
        return 1 == (t = +t) ? Ie : function (e, n) {
            return n - e ? function (t, e, n) {
                return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function (i) {
                    return Math.pow(t + i * e, n)
                }
            }(e, n, t) : Ne(isNaN(e) ? n : e)
        }
    }

    function Ie(t, e) {
        var n = e - t;
        return n ? Pe(t, n) : Ne(isNaN(t) ? e : t)
    }

    var Oe = function t(e) {
        var n = ke(e);

        function i(t, e) {
            var i = n((t = $t(t)).r, (e = $t(e)).r), r = n(t.g, e.g), o = n(t.b, e.b), a = Ie(t.opacity, e.opacity);
            return function (e) {
                return t.r = i(e), t.g = r(e), t.b = o(e), t.opacity = a(e), t + ""
            }
        }

        return i.gamma = t, i
    }(1);

    function Le(t) {
        return function (e) {
            var n, i, r = e.length, o = new Array(r), a = new Array(r), s = new Array(r);
            for (n = 0; n < r; ++n) i = $t(e[n]), o[n] = i.r || 0, a[n] = i.g || 0, s[n] = i.b || 0;
            return o = t(o), a = t(a), s = t(s), i.opacity = 1, function (t) {
                return i.r = o(t), i.g = a(t), i.b = s(t), i + ""
            }
        }
    }

    var We = Le(function (t) {
        var e = t.length - 1;
        return function (n) {
            var i = n <= 0 ? n = 0 : n >= 1 ? (n = 1, e - 1) : Math.floor(n * e), r = t[i], o = t[i + 1],
                a = i > 0 ? t[i - 1] : 2 * r - o, s = i < e - 1 ? t[i + 2] : 2 * o - r;
            return Ae((n - i / e) * e, a, r, o, s)
        }
    }), Re = (Le(function (t) {
        var e = t.length;
        return function (n) {
            var i = Math.floor(((n %= 1) < 0 ? ++n : n) * e), r = t[(i + e - 1) % e], o = t[i % e], a = t[(i + 1) % e],
                s = t[(i + 2) % e];
            return Ae((n - i / e) * e, r, o, a, s)
        }
    }), function (t, e) {
        return e -= t = +t, function (n) {
            return t + e * n
        }
    }), Fe = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, He = new RegExp(Fe.source, "g");
    var je, Ue, Be, Ve, qe = function (t, e) {
            var n, i, r, o = Fe.lastIndex = He.lastIndex = 0, a = -1, s = [], c = [];
            for (t += "", e += ""; (n = Fe.exec(t)) && (i = He.exec(e));) (r = i.index) > o && (r = e.slice(o, r), s[a] ? s[a] += r : s[++a] = r), (n = n[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, c.push({
                i: a,
                x: Re(n, i)
            })), o = He.lastIndex;
            return o < e.length && (r = e.slice(o), s[a] ? s[a] += r : s[++a] = r), s.length < 2 ? c[0] ? function (t) {
                return function (e) {
                    return t(e) + ""
                }
            }(c[0].x) : function (t) {
                return function () {
                    return t
                }
            }(e) : (e = c.length, function (t) {
                for (var n, i = 0; i < e; ++i) s[(n = c[i]).i] = n.x(t);
                return s.join("")
            })
        }, Ye = function (t, e) {
            var n, i = typeof e;
            return null == e || "boolean" === i ? Ne(e) : ("number" === i ? Re : "string" === i ? (n = qt(e)) ? (e = n, Oe) : qe : e instanceof qt ? Oe : e instanceof Date ? function (t, e) {
                var n = new Date;
                return e -= t = +t, function (i) {
                    return n.setTime(t + e * i), n
                }
            } : Array.isArray(e) ? function (t, e) {
                var n, i = e ? e.length : 0, r = t ? Math.min(i, t.length) : 0, o = new Array(r), a = new Array(i);
                for (n = 0; n < r; ++n) o[n] = Ye(t[n], e[n]);
                for (; n < i; ++n) a[n] = e[n];
                return function (t) {
                    for (n = 0; n < r; ++n) a[n] = o[n](t);
                    return a
                }
            } : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? function (t, e) {
                var n, i = {}, r = {};
                for (n in null !== t && "object" == typeof t || (t = {}), null !== e && "object" == typeof e || (e = {}), e) n in t ? i[n] = Ye(t[n], e[n]) : r[n] = e[n];
                return function (t) {
                    for (n in i) r[n] = i[n](t);
                    return r
                }
            } : Re)(t, e)
        }, ze = function (t, e) {
            return e -= t = +t, function (n) {
                return Math.round(t + e * n)
            }
        }, Ge = 180 / Math.PI, $e = {translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1},
        Xe = function (t, e, n, i, r, o) {
            var a, s, c;
            return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (c = t * n + e * i) && (n -= t * c, i -= e * c), (s = Math.sqrt(n * n + i * i)) && (n /= s, i /= s, c /= s), t * i < e * n && (t = -t, e = -e, c = -c, a = -a), {
                translateX: r,
                translateY: o,
                rotate: Math.atan2(e, t) * Ge,
                skewX: Math.atan(c) * Ge,
                scaleX: a,
                scaleY: s
            }
        };

    function Ke(t, e, n, i) {
        function r(t) {
            return t.length ? t.pop() + " " : ""
        }

        return function (o, a) {
            var s = [], c = [];
            return o = t(o), a = t(a), function (t, i, r, o, a, s) {
                if (t !== r || i !== o) {
                    var c = a.push("translate(", null, e, null, n);
                    s.push({i: c - 4, x: Re(t, r)}, {i: c - 2, x: Re(i, o)})
                } else (r || o) && a.push("translate(" + r + e + o + n)
            }(o.translateX, o.translateY, a.translateX, a.translateY, s, c), function (t, e, n, o) {
                t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360), o.push({
                    i: n.push(r(n) + "rotate(", null, i) - 2,
                    x: Re(t, e)
                })) : e && n.push(r(n) + "rotate(" + e + i)
            }(o.rotate, a.rotate, s, c), function (t, e, n, o) {
                t !== e ? o.push({
                    i: n.push(r(n) + "skewX(", null, i) - 2,
                    x: Re(t, e)
                }) : e && n.push(r(n) + "skewX(" + e + i)
            }(o.skewX, a.skewX, s, c), function (t, e, n, i, o, a) {
                if (t !== n || e !== i) {
                    var s = o.push(r(o) + "scale(", null, ",", null, ")");
                    a.push({i: s - 4, x: Re(t, n)}, {i: s - 2, x: Re(e, i)})
                } else 1 === n && 1 === i || o.push(r(o) + "scale(" + n + "," + i + ")")
            }(o.scaleX, o.scaleY, a.scaleX, a.scaleY, s, c), o = a = null, function (t) {
                for (var e, n = -1, i = c.length; ++n < i;) s[(e = c[n]).i] = e.x(t);
                return s.join("")
            }
        }
    }

    var Qe = Ke(function (t) {
        return "none" === t ? $e : (je || (je = document.createElement("DIV"), Ue = document.documentElement, Be = document.defaultView), je.style.transform = t, t = Be.getComputedStyle(Ue.appendChild(je), null).getPropertyValue("transform"), Ue.removeChild(je), t = t.slice(7, -1).split(","), Xe(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
    }, "px, ", "px)", "deg)"), Ze = Ke(function (t) {
        return null == t ? $e : (Ve || (Ve = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ve.setAttribute("transform", t), (t = Ve.transform.baseVal.consolidate()) ? (t = t.matrix, Xe(t.a, t.b, t.c, t.d, t.e, t.f)) : $e)
    }, ", ", ")", ")");
    Math.SQRT2;

    function Je(t) {
        return function (e, n) {
            var i = t((e = Zt(e)).h, (n = Zt(n)).h), r = Ie(e.s, n.s), o = Ie(e.l, n.l), a = Ie(e.opacity, n.opacity);
            return function (t) {
                return e.h = i(t), e.s = r(t), e.l = o(t), e.opacity = a(t), e + ""
            }
        }
    }

    Je(Me), Je(Ie);

    function tn(t) {
        return function (e, n) {
            var i = t((e = ve(e)).h, (n = ve(n)).h), r = Ie(e.c, n.c), o = Ie(e.l, n.l), a = Ie(e.opacity, n.opacity);
            return function (t) {
                return e.h = i(t), e.c = r(t), e.l = o(t), e.opacity = a(t), e + ""
            }
        }
    }

    tn(Me), tn(Ie);

    function en(t) {
        return function e(n) {
            function i(e, i) {
                var r = t((e = Ce(e)).h, (i = Ce(i)).h), o = Ie(e.s, i.s), a = Ie(e.l, i.l),
                    s = Ie(e.opacity, i.opacity);
                return function (t) {
                    return e.h = r(t), e.s = o(t), e.l = a(Math.pow(t, n)), e.opacity = s(t), e + ""
                }
            }

            return n = +n, i.gamma = e, i
        }(1)
    }

    en(Me);
    var nn = en(Ie);
    var rn, on, an = 0, sn = 0, cn = 0, fn = 1e3, ln = 0, un = 0, hn = 0,
        dn = "object" == typeof performance && performance.now ? performance : Date,
        pn = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
            setTimeout(t, 17)
        };

    function mn() {
        return un || (pn(gn), un = dn.now() + hn)
    }

    function gn() {
        un = 0
    }

    function yn() {
        this._call = this._time = this._next = null
    }

    function vn(t, e, n) {
        var i = new yn;
        return i.restart(t, e, n), i
    }

    function _n() {
        un = (ln = dn.now()) + hn, an = sn = 0;
        try {
            !function () {
                mn(), ++an;
                for (var t, e = rn; e;) (t = un - e._time) >= 0 && e._call.call(null, t), e = e._next;
                --an
            }()
        } finally {
            an = 0, function () {
                var t, e, n = rn, i = 1 / 0;
                for (; n;) n._call ? (i > n._time && (i = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : rn = e);
                on = t, xn(i)
            }(), un = 0
        }
    }

    function bn() {
        var t = dn.now(), e = t - ln;
        e > fn && (hn -= e, ln = t)
    }

    function xn(t) {
        an || (sn && (sn = clearTimeout(sn)), t - un > 24 ? (t < 1 / 0 && (sn = setTimeout(_n, t - dn.now() - hn)), cn && (cn = clearInterval(cn))) : (cn || (ln = dn.now(), cn = setInterval(bn, fn)), an = 1, pn(_n)))
    }

    yn.prototype = vn.prototype = {
        constructor: yn, restart: function (t, e, n) {
            if ("function" != typeof t) throw new TypeError("callback is not a function");
            n = (null == n ? mn() : +n) + (null == e ? 0 : +e), this._next || on === this || (on ? on._next = this : rn = this, on = this), this._call = t, this._time = n, xn()
        }, stop: function () {
            this._call && (this._call = null, this._time = 1 / 0, xn())
        }
    };
    var wn = function (t, e, n) {
            var i = new yn;
            return e = null == e ? 0 : +e, i.restart(function (n) {
                i.stop(), t(n + e)
            }, e, n), i
        }, Tn = I("start", "end", "interrupt"), En = [], Dn = 0, Cn = 1, Sn = 2, An = 3, Nn = 4, Pn = 5, Mn = 6,
        kn = function (t, e, n, i, r, o) {
            var a = t.__transition;
            if (a) {
                if (n in a) return
            } else t.__transition = {};
            !function (t, e, n) {
                var i, r = t.__transition;

                function o(c) {
                    var f, l, u, h;
                    if (n.state !== Cn) return s();
                    for (f in r) if ((h = r[f]).name === n.name) {
                        if (h.state === An) return wn(o);
                        h.state === Nn ? (h.state = Mn, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete r[f]) : +f < e && (h.state = Mn, h.timer.stop(), delete r[f])
                    }
                    if (wn(function () {
                        n.state === An && (n.state = Nn, n.timer.restart(a, n.delay, n.time), a(c))
                    }), n.state = Sn, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Sn) {
                        for (n.state = An, i = new Array(u = n.tween.length), f = 0, l = -1; f < u; ++f) (h = n.tween[f].value.call(t, t.__data__, n.index, n.group)) && (i[++l] = h);
                        i.length = l + 1
                    }
                }

                function a(e) {
                    for (var r = e < n.duration ? n.ease.call(null, e / n.duration) : (n.timer.restart(s), n.state = Pn, 1), o = -1, a = i.length; ++o < a;) i[o].call(null, r);
                    n.state === Pn && (n.on.call("end", t, t.__data__, n.index, n.group), s())
                }

                function s() {
                    for (var i in n.state = Mn, n.timer.stop(), delete r[e], r) return;
                    delete t.__transition
                }

                r[e] = n, n.timer = vn(function (t) {
                    n.state = Cn, n.timer.restart(o, n.delay, n.time), n.delay <= t && o(t - n.delay)
                }, 0, n.time)
            }(t, n, {
                name: e,
                index: i,
                group: r,
                on: Tn,
                tween: En,
                time: o.time,
                delay: o.delay,
                duration: o.duration,
                ease: o.ease,
                timer: null,
                state: Dn
            })
        };

    function In(t, e) {
        var n = Ln(t, e);
        if (n.state > Dn) throw new Error("too late; already scheduled");
        return n
    }

    function On(t, e) {
        var n = Ln(t, e);
        if (n.state > Sn) throw new Error("too late; already started");
        return n
    }

    function Ln(t, e) {
        var n = t.__transition;
        if (!n || !(n = n[e])) throw new Error("transition not found");
        return n
    }

    var Wn = function (t, e) {
        var n, i, r, o = t.__transition, a = !0;
        if (o) {
            for (r in e = null == e ? null : e + "", o) (n = o[r]).name === e ? (i = n.state > Sn && n.state < Pn, n.state = Mn, n.timer.stop(), i && n.on.call("interrupt", t, t.__data__, n.index, n.group), delete o[r]) : a = !1;
            a && delete t.__transition
        }
    };

    function Rn(t, e, n) {
        var i = t._id;
        return t.each(function () {
            var t = On(this, i);
            (t.value || (t.value = {}))[e] = n.apply(this, arguments)
        }), function (t) {
            return Ln(t, i).value[e]
        }
    }

    var Fn = function (t, e) {
        var n;
        return ("number" == typeof e ? Re : e instanceof qt ? Oe : (n = qt(e)) ? (e = n, Oe) : qe)(t, e)
    };
    var Hn = Et.prototype.constructor;
    var jn = 0;

    function Un(t, e, n, i) {
        this._groups = t, this._parents = e, this._name = n, this._id = i
    }

    function Bn() {
        return ++jn
    }

    var Vn = Et.prototype;
    Un.prototype = function (t) {
        return Et().transition(t)
    }.prototype = {
        constructor: Un,
        select: function (t) {
            var e = this._name, n = this._id;
            "function" != typeof t && (t = H(t));
            for (var i = this._groups, r = i.length, o = new Array(r), a = 0; a < r; ++a) for (var s, c, f = i[a], l = f.length, u = o[a] = new Array(l), h = 0; h < l; ++h) (s = f[h]) && (c = t.call(s, s.__data__, h, f)) && ("__data__" in s && (c.__data__ = s.__data__), u[h] = c, kn(u[h], e, n, h, u, Ln(s, n)));
            return new Un(o, this._parents, e, n)
        },
        selectAll: function (t) {
            var e = this._name, n = this._id;
            "function" != typeof t && (t = U(t));
            for (var i = this._groups, r = i.length, o = [], a = [], s = 0; s < r; ++s) for (var c, f = i[s], l = f.length, u = 0; u < l; ++u) if (c = f[u]) {
                for (var h, d = t.call(c, c.__data__, u, f), p = Ln(c, n), m = 0, g = d.length; m < g; ++m) (h = d[m]) && kn(h, e, n, m, d, p);
                o.push(d), a.push(c)
            }
            return new Un(o, a, e, n)
        },
        filter: function (t) {
            "function" != typeof t && (t = Y(t));
            for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r) for (var o, a = e[r], s = a.length, c = i[r] = [], f = 0; f < s; ++f) (o = a[f]) && t.call(o, o.__data__, f, a) && c.push(o);
            return new Un(i, this._parents, this._name, this._id)
        },
        merge: function (t) {
            if (t._id !== this._id) throw new Error;
            for (var e = this._groups, n = t._groups, i = e.length, r = n.length, o = Math.min(i, r), a = new Array(i), s = 0; s < o; ++s) for (var c, f = e[s], l = n[s], u = f.length, h = a[s] = new Array(u), d = 0; d < u; ++d) (c = f[d] || l[d]) && (h[d] = c);
            for (; s < i; ++s) a[s] = e[s];
            return new Un(a, this._parents, this._name, this._id)
        },
        selection: function () {
            return new Hn(this._groups, this._parents)
        },
        transition: function () {
            for (var t = this._name, e = this._id, n = Bn(), i = this._groups, r = i.length, o = 0; o < r; ++o) for (var a, s = i[o], c = s.length, f = 0; f < c; ++f) if (a = s[f]) {
                var l = Ln(a, e);
                kn(a, t, n, f, s, {time: l.time + l.delay + l.duration, delay: 0, duration: l.duration, ease: l.ease})
            }
            return new Un(i, this._parents, t, n)
        },
        call: Vn.call,
        nodes: Vn.nodes,
        node: Vn.node,
        size: Vn.size,
        empty: Vn.empty,
        each: Vn.each,
        on: function (t, e) {
            var n = this._id;
            return arguments.length < 2 ? Ln(this.node(), n).on.on(t) : this.each(function (t, e, n) {
                var i, r, o = function (t) {
                    return (t + "").trim().split(/^|\s+/).every(function (t) {
                        var e = t.indexOf(".");
                        return e >= 0 && (t = t.slice(0, e)), !t || "start" === t
                    })
                }(e) ? In : On;
                return function () {
                    var a = o(this, t), s = a.on;
                    s !== i && (r = (i = s).copy()).on(e, n), a.on = r
                }
            }(n, t, e))
        },
        attr: function (t, e) {
            var n = W(t), i = "transform" === n ? Ze : Fn;
            return this.attrTween(t, "function" == typeof e ? (n.local ? function (t, e, n) {
                var i, r, o;
                return function () {
                    var a, s = n(this);
                    if (null != s) return (a = this.getAttributeNS(t.space, t.local)) === s ? null : a === i && s === r ? o : o = e(i = a, r = s);
                    this.removeAttributeNS(t.space, t.local)
                }
            } : function (t, e, n) {
                var i, r, o;
                return function () {
                    var a, s = n(this);
                    if (null != s) return (a = this.getAttribute(t)) === s ? null : a === i && s === r ? o : o = e(i = a, r = s);
                    this.removeAttribute(t)
                }
            })(n, i, Rn(this, "attr." + t, e)) : null == e ? (n.local ? function (t) {
                return function () {
                    this.removeAttributeNS(t.space, t.local)
                }
            } : function (t) {
                return function () {
                    this.removeAttribute(t)
                }
            })(n) : (n.local ? function (t, e, n) {
                var i, r;
                return function () {
                    var o = this.getAttributeNS(t.space, t.local);
                    return o === n ? null : o === i ? r : r = e(i = o, n)
                }
            } : function (t, e, n) {
                var i, r;
                return function () {
                    var o = this.getAttribute(t);
                    return o === n ? null : o === i ? r : r = e(i = o, n)
                }
            })(n, i, e + ""))
        },
        attrTween: function (t, e) {
            var n = "attr." + t;
            if (arguments.length < 2) return (n = this.tween(n)) && n._value;
            if (null == e) return this.tween(n, null);
            if ("function" != typeof e) throw new Error;
            var i = W(t);
            return this.tween(n, (i.local ? function (t, e) {
                function n() {
                    var n = this, i = e.apply(n, arguments);
                    return i && function (e) {
                        n.setAttributeNS(t.space, t.local, i(e))
                    }
                }

                return n._value = e, n
            } : function (t, e) {
                function n() {
                    var n = this, i = e.apply(n, arguments);
                    return i && function (e) {
                        n.setAttribute(t, i(e))
                    }
                }

                return n._value = e, n
            })(i, e))
        },
        style: function (t, e, n) {
            var i = "transform" == (t += "") ? Qe : Fn;
            return null == e ? this.styleTween(t, function (t, e) {
                var n, i, r;
                return function () {
                    var o = tt(this, t), a = (this.style.removeProperty(t), tt(this, t));
                    return o === a ? null : o === n && a === i ? r : r = e(n = o, i = a)
                }
            }(t, i)).on("end.style." + t, function (t) {
                return function () {
                    this.style.removeProperty(t)
                }
            }(t)) : this.styleTween(t, "function" == typeof e ? function (t, e, n) {
                var i, r, o;
                return function () {
                    var a = tt(this, t), s = n(this);
                    return null == s && (this.style.removeProperty(t), s = tt(this, t)), a === s ? null : a === i && s === r ? o : o = e(i = a, r = s)
                }
            }(t, i, Rn(this, "style." + t, e)) : function (t, e, n) {
                var i, r;
                return function () {
                    var o = tt(this, t);
                    return o === n ? null : o === i ? r : r = e(i = o, n)
                }
            }(t, i, e + ""), n)
        },
        styleTween: function (t, e, n) {
            var i = "style." + (t += "");
            if (arguments.length < 2) return (i = this.tween(i)) && i._value;
            if (null == e) return this.tween(i, null);
            if ("function" != typeof e) throw new Error;
            return this.tween(i, function (t, e, n) {
                function i() {
                    var i = this, r = e.apply(i, arguments);
                    return r && function (e) {
                        i.style.setProperty(t, r(e), n)
                    }
                }

                return i._value = e, i
            }(t, e, null == n ? "" : n))
        },
        text: function (t) {
            return this.tween("text", "function" == typeof t ? function (t) {
                return function () {
                    var e = t(this);
                    this.textContent = null == e ? "" : e
                }
            }(Rn(this, "text", t)) : function (t) {
                return function () {
                    this.textContent = t
                }
            }(null == t ? "" : t + ""))
        },
        remove: function () {
            return this.on("end.remove", (t = this._id, function () {
                var e = this.parentNode;
                for (var n in this.__transition) if (+n !== t) return;
                e && e.removeChild(this)
            }));
            var t
        },
        tween: function (t, e) {
            var n = this._id;
            if (t += "", arguments.length < 2) {
                for (var i, r = Ln(this.node(), n).tween, o = 0, a = r.length; o < a; ++o) if ((i = r[o]).name === t) return i.value;
                return null
            }
            return this.each((null == e ? function (t, e) {
                var n, i;
                return function () {
                    var r = On(this, t), o = r.tween;
                    if (o !== n) for (var a = 0, s = (i = n = o).length; a < s; ++a) if (i[a].name === e) {
                        (i = i.slice()).splice(a, 1);
                        break
                    }
                    r.tween = i
                }
            } : function (t, e, n) {
                var i, r;
                if ("function" != typeof n) throw new Error;
                return function () {
                    var o = On(this, t), a = o.tween;
                    if (a !== i) {
                        r = (i = a).slice();
                        for (var s = {name: e, value: n}, c = 0, f = r.length; c < f; ++c) if (r[c].name === e) {
                            r[c] = s;
                            break
                        }
                        c === f && r.push(s)
                    }
                    o.tween = r
                }
            })(n, t, e))
        },
        delay: function (t) {
            var e = this._id;
            return arguments.length ? this.each(("function" == typeof t ? function (t, e) {
                return function () {
                    In(this, t).delay = +e.apply(this, arguments)
                }
            } : function (t, e) {
                return e = +e, function () {
                    In(this, t).delay = e
                }
            })(e, t)) : Ln(this.node(), e).delay
        },
        duration: function (t) {
            var e = this._id;
            return arguments.length ? this.each(("function" == typeof t ? function (t, e) {
                return function () {
                    On(this, t).duration = +e.apply(this, arguments)
                }
            } : function (t, e) {
                return e = +e, function () {
                    On(this, t).duration = e
                }
            })(e, t)) : Ln(this.node(), e).duration
        },
        ease: function (t) {
            var e = this._id;
            return arguments.length ? this.each(function (t, e) {
                if ("function" != typeof e) throw new Error;
                return function () {
                    On(this, t).ease = e
                }
            }(e, t)) : Ln(this.node(), e).ease
        }
    };
    (function t(e) {
        function n(t) {
            return Math.pow(t, e)
        }

        return e = +e, n.exponent = t, n
    })(3), function t(e) {
        function n(t) {
            return 1 - Math.pow(1 - t, e)
        }

        return e = +e, n.exponent = t, n
    }(3), function t(e) {
        function n(t) {
            return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2
        }

        return e = +e, n.exponent = t, n
    }(3), Math.PI;
    (function t(e) {
        function n(t) {
            return t * t * ((e + 1) * t - e)
        }

        return e = +e, n.overshoot = t, n
    })(1.70158), function t(e) {
        function n(t) {
            return --t * t * ((e + 1) * t + e) + 1
        }

        return e = +e, n.overshoot = t, n
    }(1.70158), function t(e) {
        function n(t) {
            return ((t *= 2) < 1 ? t * t * ((e + 1) * t - e) : (t -= 2) * t * ((e + 1) * t + e) + 2) / 2
        }

        return e = +e, n.overshoot = t, n
    }(1.70158);
    var qn = 2 * Math.PI, Yn = (function t(e, n) {
        var i = Math.asin(1 / (e = Math.max(1, e))) * (n /= qn);

        function r(t) {
            return e * Math.pow(2, 10 * --t) * Math.sin((i - t) / n)
        }

        return r.amplitude = function (e) {
            return t(e, n * qn)
        }, r.period = function (n) {
            return t(e, n)
        }, r
    }(1, .3), function t(e, n) {
        var i = Math.asin(1 / (e = Math.max(1, e))) * (n /= qn);

        function r(t) {
            return 1 - e * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / n)
        }

        return r.amplitude = function (e) {
            return t(e, n * qn)
        }, r.period = function (n) {
            return t(e, n)
        }, r
    }(1, .3), function t(e, n) {
        var i = Math.asin(1 / (e = Math.max(1, e))) * (n /= qn);

        function r(t) {
            return ((t = 2 * t - 1) < 0 ? e * Math.pow(2, 10 * t) * Math.sin((i - t) / n) : 2 - e * Math.pow(2, -10 * t) * Math.sin((i + t) / n)) / 2
        }

        return r.amplitude = function (e) {
            return t(e, n * qn)
        }, r.period = function (n) {
            return t(e, n)
        }, r
    }(1, .3), {
        time: null, delay: 0, duration: 250, ease: function (t) {
            return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
        }
    });

    function zn(t, e) {
        for (var n; !(n = t.__transition) || !(n = n[e]);) if (!(t = t.parentNode)) return Yn.time = mn(), Yn;
        return n
    }

    Et.prototype.interrupt = function (t) {
        return this.each(function () {
            Wn(this, t)
        })
    }, Et.prototype.transition = function (t) {
        var e, n;
        t instanceof Un ? (e = t._id, t = t._name) : (e = Bn(), (n = Yn).time = mn(), t = null == t ? null : t + "");
        for (var i = this._groups, r = i.length, o = 0; o < r; ++o) for (var a, s = i[o], c = s.length, f = 0; f < c; ++f) (a = s[f]) && kn(a, t, e, f, s, n || zn(a, e));
        return new Un(i, this._parents, t, e)
    };
    ["e", "w"].map(Gn), ["n", "s"].map(Gn), ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(Gn);

    function Gn(t) {
        return {type: t}
    }

    Math.cos, Math.sin, Math.PI, Math.max;
    Array.prototype.slice;
    var $n = Math.PI, Xn = 2 * $n, Kn = Xn - 1e-6;

    function Qn() {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
    }

    function Zn() {
        return new Qn
    }

    Qn.prototype = Zn.prototype = {
        constructor: Qn, moveTo: function (t, e) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e)
        }, closePath: function () {
            null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
        }, lineTo: function (t, e) {
            this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e)
        }, quadraticCurveTo: function (t, e, n, i) {
            this._ += "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +i)
        }, bezierCurveTo: function (t, e, n, i, r, o) {
            this._ += "C" + +t + "," + +e + "," + +n + "," + +i + "," + (this._x1 = +r) + "," + (this._y1 = +o)
        }, arcTo: function (t, e, n, i, r) {
            t = +t, e = +e, n = +n, i = +i, r = +r;
            var o = this._x1, a = this._y1, s = n - t, c = i - e, f = o - t, l = a - e, u = f * f + l * l;
            if (r < 0) throw new Error("negative radius: " + r);
            if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = e); else if (u > 1e-6) if (Math.abs(l * s - c * f) > 1e-6 && r) {
                var h = n - o, d = i - a, p = s * s + c * c, m = h * h + d * d, g = Math.sqrt(p), y = Math.sqrt(u),
                    v = r * Math.tan(($n - Math.acos((p + u - m) / (2 * g * y))) / 2), _ = v / y, b = v / g;
                Math.abs(_ - 1) > 1e-6 && (this._ += "L" + (t + _ * f) + "," + (e + _ * l)), this._ += "A" + r + "," + r + ",0,0," + +(l * h > f * d) + "," + (this._x1 = t + b * s) + "," + (this._y1 = e + b * c)
            } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = e); else ;
        }, arc: function (t, e, n, i, r, o) {
            t = +t, e = +e;
            var a = (n = +n) * Math.cos(i), s = n * Math.sin(i), c = t + a, f = e + s, l = 1 ^ o, u = o ? i - r : r - i;
            if (n < 0) throw new Error("negative radius: " + n);
            null === this._x1 ? this._ += "M" + c + "," + f : (Math.abs(this._x1 - c) > 1e-6 || Math.abs(this._y1 - f) > 1e-6) && (this._ += "L" + c + "," + f), n && (u < 0 && (u = u % Xn + Xn), u > Kn ? this._ += "A" + n + "," + n + ",0,1," + l + "," + (t - a) + "," + (e - s) + "A" + n + "," + n + ",0,1," + l + "," + (this._x1 = c) + "," + (this._y1 = f) : u > 1e-6 && (this._ += "A" + n + "," + n + ",0," + +(u >= $n) + "," + l + "," + (this._x1 = t + n * Math.cos(r)) + "," + (this._y1 = e + n * Math.sin(r))))
        }, rect: function (t, e, n, i) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +n + "v" + +i + "h" + -n + "Z"
        }, toString: function () {
            return this._
        }
    };

    function Jn() {
    }

    function ti(t, e) {
        var n = new Jn;
        if (t instanceof Jn) t.each(function (t, e) {
            n.set(e, t)
        }); else if (Array.isArray(t)) {
            var i, r = -1, o = t.length;
            if (null == e) for (; ++r < o;) n.set(r, t[r]); else for (; ++r < o;) n.set(e(i = t[r], r, t), i)
        } else if (t) for (var a in t) n.set(a, t[a]);
        return n
    }

    Jn.prototype = ti.prototype = {
        constructor: Jn, has: function (t) {
            return "$" + t in this
        }, get: function (t) {
            return this["$" + t]
        }, set: function (t, e) {
            return this["$" + t] = e, this
        }, remove: function (t) {
            var e = "$" + t;
            return e in this && delete this[e]
        }, clear: function () {
            for (var t in this) "$" === t[0] && delete this[t]
        }, keys: function () {
            var t = [];
            for (var e in this) "$" === e[0] && t.push(e.slice(1));
            return t
        }, values: function () {
            var t = [];
            for (var e in this) "$" === e[0] && t.push(this[e]);
            return t
        }, entries: function () {
            var t = [];
            for (var e in this) "$" === e[0] && t.push({key: e.slice(1), value: this[e]});
            return t
        }, size: function () {
            var t = 0;
            for (var e in this) "$" === e[0] && ++t;
            return t
        }, empty: function () {
            for (var t in this) if ("$" === t[0]) return !1;
            return !0
        }, each: function (t) {
            for (var e in this) "$" === e[0] && t(this[e], e.slice(1), this)
        }
    };
    var ei = ti;

    function ni() {
    }

    var ii = ei.prototype;

    function ri(t, e) {
        var n = new ni;
        if (t instanceof ni) t.each(function (t) {
            n.add(t)
        }); else if (t) {
            var i = -1, r = t.length;
            if (null == e) for (; ++i < r;) n.add(t[i]); else for (; ++i < r;) n.add(e(t[i], i, t))
        }
        return n
    }

    ni.prototype = ri.prototype = {
        constructor: ni, has: ii.has, add: function (t) {
            return this["$" + (t += "")] = t, this
        }, remove: ii.remove, clear: ii.clear, values: ii.keys, size: ii.size, empty: ii.empty, each: ii.each
    };
    Array.prototype.slice;
    var oi = {}, ai = {}, si = 34, ci = 10, fi = 13;

    function li(t) {
        return new Function("d", "return {" + t.map(function (t, e) {
            return JSON.stringify(t) + ": d[" + e + "]"
        }).join(",") + "}")
    }

    var ui = function (t) {
        var e = new RegExp('["' + t + "\n\r]"), n = t.charCodeAt(0);

        function i(t, e) {
            var i, r = [], o = t.length, a = 0, s = 0, c = o <= 0, f = !1;

            function l() {
                if (c) return ai;
                if (f) return f = !1, oi;
                var e, i, r = a;
                if (t.charCodeAt(r) === si) {
                    for (; a++ < o && t.charCodeAt(a) !== si || t.charCodeAt(++a) === si;) ;
                    return (e = a) >= o ? c = !0 : (i = t.charCodeAt(a++)) === ci ? f = !0 : i === fi && (f = !0, t.charCodeAt(a) === ci && ++a), t.slice(r + 1, e - 1).replace(/""/g, '"')
                }
                for (; a < o;) {
                    if ((i = t.charCodeAt(e = a++)) === ci) f = !0; else if (i === fi) f = !0, t.charCodeAt(a) === ci && ++a; else if (i !== n) continue;
                    return t.slice(r, e)
                }
                return c = !0, t.slice(r, o)
            }

            for (t.charCodeAt(o - 1) === ci && --o, t.charCodeAt(o - 1) === fi && --o; (i = l()) !== ai;) {
                for (var u = []; i !== oi && i !== ai;) u.push(i), i = l();
                e && null == (u = e(u, s++)) || r.push(u)
            }
            return r
        }

        function r(e) {
            return e.map(o).join(t)
        }

        function o(t) {
            return null == t ? "" : e.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t
        }

        return {
            parse: function (t, e) {
                var n, r, o = i(t, function (t, i) {
                    if (n) return n(t, i - 1);
                    r = t, n = e ? function (t, e) {
                        var n = li(t);
                        return function (i, r) {
                            return e(n(i), r, t)
                        }
                    }(t, e) : li(t)
                });
                return o.columns = r || [], o
            }, parseRows: i, format: function (e, n) {
                return null == n && (n = function (t) {
                    var e = Object.create(null), n = [];
                    return t.forEach(function (t) {
                        for (var i in t) i in e || n.push(e[i] = i)
                    }), n
                }(e)), [n.map(o).join(t)].concat(e.map(function (e) {
                    return n.map(function (t) {
                        return o(e[t])
                    }).join(t)
                })).join("\n")
            }, formatRows: function (t) {
                return t.map(r).join("\n")
            }
        }
    }, hi = ui(","), di = hi.parse, pi = (hi.parseRows, hi.format, hi.formatRows, ui("\t")), mi = pi.parse;
    pi.parseRows, pi.format, pi.formatRows;

    function gi(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.text()
    }

    var yi = function (t, e) {
        return fetch(t, e).then(gi)
    };

    function vi(t) {
        return function (e, n, i) {
            return 2 === arguments.length && "function" == typeof n && (i = n, n = void 0), yi(e, n).then(function (e) {
                return t(e, i)
            })
        }
    }

    vi(di), vi(mi);

    function _i(t) {
        return function (e, n) {
            return yi(e, n).then(function (e) {
                return (new DOMParser).parseFromString(e, t)
            })
        }
    }

    _i("application/xml"), _i("text/html"), _i("image/svg+xml");

    function bi(t, e, n, i) {
        if (isNaN(e) || isNaN(n)) return t;
        var r, o, a, s, c, f, l, u, h, d = t._root, p = {data: i}, m = t._x0, g = t._y0, y = t._x1, v = t._y1;
        if (!d) return t._root = p, t;
        for (; d.length;) if ((f = e >= (o = (m + y) / 2)) ? m = o : y = o, (l = n >= (a = (g + v) / 2)) ? g = a : v = a, r = d, !(d = d[u = l << 1 | f])) return r[u] = p, t;
        if (s = +t._x.call(null, d.data), c = +t._y.call(null, d.data), e === s && n === c) return p.next = d, r ? r[u] = p : t._root = p, t;
        do {
            r = r ? r[u] = new Array(4) : t._root = new Array(4), (f = e >= (o = (m + y) / 2)) ? m = o : y = o, (l = n >= (a = (g + v) / 2)) ? g = a : v = a
        } while ((u = l << 1 | f) == (h = (c >= a) << 1 | s >= o));
        return r[h] = d, r[u] = p, t
    }

    var xi = function (t, e, n, i, r) {
        this.node = t, this.x0 = e, this.y0 = n, this.x1 = i, this.y1 = r
    };

    function wi(t) {
        return t[0]
    }

    function Ti(t) {
        return t[1]
    }

    function Ei(t, e, n) {
        var i = new Di(null == e ? wi : e, null == n ? Ti : n, NaN, NaN, NaN, NaN);
        return null == t ? i : i.addAll(t)
    }

    function Di(t, e, n, i, r, o) {
        this._x = t, this._y = e, this._x0 = n, this._y0 = i, this._x1 = r, this._y1 = o, this._root = void 0
    }

    function Ci(t) {
        for (var e = {data: t.data}, n = e; t = t.next;) n = n.next = {data: t.data};
        return e
    }

    var Si = Ei.prototype = Di.prototype;
    Si.copy = function () {
        var t, e, n = new Di(this._x, this._y, this._x0, this._y0, this._x1, this._y1), i = this._root;
        if (!i) return n;
        if (!i.length) return n._root = Ci(i), n;
        for (t = [{
            source: i,
            target: n._root = new Array(4)
        }]; i = t.pop();) for (var r = 0; r < 4; ++r) (e = i.source[r]) && (e.length ? t.push({
            source: e,
            target: i.target[r] = new Array(4)
        }) : i.target[r] = Ci(e));
        return n
    }, Si.add = function (t) {
        var e = +this._x.call(null, t), n = +this._y.call(null, t);
        return bi(this.cover(e, n), e, n, t)
    }, Si.addAll = function (t) {
        var e, n, i, r, o = t.length, a = new Array(o), s = new Array(o), c = 1 / 0, f = 1 / 0, l = -1 / 0, u = -1 / 0;
        for (n = 0; n < o; ++n) isNaN(i = +this._x.call(null, e = t[n])) || isNaN(r = +this._y.call(null, e)) || (a[n] = i, s[n] = r, i < c && (c = i), i > l && (l = i), r < f && (f = r), r > u && (u = r));
        for (l < c && (c = this._x0, l = this._x1), u < f && (f = this._y0, u = this._y1), this.cover(c, f).cover(l, u), n = 0; n < o; ++n) bi(this, a[n], s[n], t[n]);
        return this
    }, Si.cover = function (t, e) {
        if (isNaN(t = +t) || isNaN(e = +e)) return this;
        var n = this._x0, i = this._y0, r = this._x1, o = this._y1;
        if (isNaN(n)) r = (n = Math.floor(t)) + 1, o = (i = Math.floor(e)) + 1; else {
            if (!(n > t || t > r || i > e || e > o)) return this;
            var a, s, c = r - n, f = this._root;
            switch (s = (e < (i + o) / 2) << 1 | t < (n + r) / 2) {
                case 0:
                    do {
                        (a = new Array(4))[s] = f, f = a
                    } while (o = i + (c *= 2), t > (r = n + c) || e > o);
                    break;
                case 1:
                    do {
                        (a = new Array(4))[s] = f, f = a
                    } while (o = i + (c *= 2), (n = r - c) > t || e > o);
                    break;
                case 2:
                    do {
                        (a = new Array(4))[s] = f, f = a
                    } while (i = o - (c *= 2), t > (r = n + c) || i > e);
                    break;
                case 3:
                    do {
                        (a = new Array(4))[s] = f, f = a
                    } while (i = o - (c *= 2), (n = r - c) > t || i > e)
            }
            this._root && this._root.length && (this._root = f)
        }
        return this._x0 = n, this._y0 = i, this._x1 = r, this._y1 = o, this
    }, Si.data = function () {
        var t = [];
        return this.visit(function (e) {
            if (!e.length) do {
                t.push(e.data)
            } while (e = e.next)
        }), t
    }, Si.extent = function (t) {
        return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]]
    }, Si.find = function (t, e, n) {
        var i, r, o, a, s, c, f, l = this._x0, u = this._y0, h = this._x1, d = this._y1, p = [], m = this._root;
        for (m && p.push(new xi(m, l, u, h, d)), null == n ? n = 1 / 0 : (l = t - n, u = e - n, h = t + n, d = e + n, n *= n); c = p.pop();) if (!(!(m = c.node) || (r = c.x0) > h || (o = c.y0) > d || (a = c.x1) < l || (s = c.y1) < u)) if (m.length) {
            var g = (r + a) / 2, y = (o + s) / 2;
            p.push(new xi(m[3], g, y, a, s), new xi(m[2], r, y, g, s), new xi(m[1], g, o, a, y), new xi(m[0], r, o, g, y)), (f = (e >= y) << 1 | t >= g) && (c = p[p.length - 1], p[p.length - 1] = p[p.length - 1 - f], p[p.length - 1 - f] = c)
        } else {
            var v = t - +this._x.call(null, m.data), _ = e - +this._y.call(null, m.data), b = v * v + _ * _;
            if (b < n) {
                var x = Math.sqrt(n = b);
                l = t - x, u = e - x, h = t + x, d = e + x, i = m.data
            }
        }
        return i
    }, Si.remove = function (t) {
        if (isNaN(o = +this._x.call(null, t)) || isNaN(a = +this._y.call(null, t))) return this;
        var e, n, i, r, o, a, s, c, f, l, u, h, d = this._root, p = this._x0, m = this._y0, g = this._x1, y = this._y1;
        if (!d) return this;
        if (d.length) for (; ;) {
            if ((f = o >= (s = (p + g) / 2)) ? p = s : g = s, (l = a >= (c = (m + y) / 2)) ? m = c : y = c, e = d, !(d = d[u = l << 1 | f])) return this;
            if (!d.length) break;
            (e[u + 1 & 3] || e[u + 2 & 3] || e[u + 3 & 3]) && (n = e, h = u)
        }
        for (; d.data !== t;) if (i = d, !(d = d.next)) return this;
        return (r = d.next) && delete d.next, i ? (r ? i.next = r : delete i.next, this) : e ? (r ? e[u] = r : delete e[u], (d = e[0] || e[1] || e[2] || e[3]) && d === (e[3] || e[2] || e[1] || e[0]) && !d.length && (n ? n[h] = d : this._root = d), this) : (this._root = r, this)
    }, Si.removeAll = function (t) {
        for (var e = 0, n = t.length; e < n; ++e) this.remove(t[e]);
        return this
    }, Si.root = function () {
        return this._root
    }, Si.size = function () {
        var t = 0;
        return this.visit(function (e) {
            if (!e.length) do {
                ++t
            } while (e = e.next)
        }), t
    }, Si.visit = function (t) {
        var e, n, i, r, o, a, s = [], c = this._root;
        for (c && s.push(new xi(c, this._x0, this._y0, this._x1, this._y1)); e = s.pop();) if (!t(c = e.node, i = e.x0, r = e.y0, o = e.x1, a = e.y1) && c.length) {
            var f = (i + o) / 2, l = (r + a) / 2;
            (n = c[3]) && s.push(new xi(n, f, l, o, a)), (n = c[2]) && s.push(new xi(n, i, l, f, a)), (n = c[1]) && s.push(new xi(n, f, r, o, l)), (n = c[0]) && s.push(new xi(n, i, r, f, l))
        }
        return this
    }, Si.visitAfter = function (t) {
        var e, n = [], i = [];
        for (this._root && n.push(new xi(this._root, this._x0, this._y0, this._x1, this._y1)); e = n.pop();) {
            var r = e.node;
            if (r.length) {
                var o, a = e.x0, s = e.y0, c = e.x1, f = e.y1, l = (a + c) / 2, u = (s + f) / 2;
                (o = r[0]) && n.push(new xi(o, a, s, l, u)), (o = r[1]) && n.push(new xi(o, l, s, c, u)), (o = r[2]) && n.push(new xi(o, a, u, l, f)), (o = r[3]) && n.push(new xi(o, l, u, c, f))
            }
            i.push(e)
        }
        for (; e = i.pop();) t(e.node, e.x0, e.y0, e.x1, e.y1);
        return this
    }, Si.x = function (t) {
        return arguments.length ? (this._x = t, this) : this._x
    }, Si.y = function (t) {
        return arguments.length ? (this._y = t, this) : this._y
    };
    Math.PI, Math.sqrt(5);
    var Ai = function (t, e) {
        if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
        var n, i = t.slice(0, n);
        return [i.length > 1 ? i[0] + i.slice(2) : i, +t.slice(n + 1)]
    }, Ni = function (t) {
        return (t = Ai(Math.abs(t))) ? t[1] : NaN
    }, Pi = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function Mi(t) {
        return new ki(t)
    }

    function ki(t) {
        if (!(e = Pi.exec(t))) throw new Error("invalid format: " + t);
        var e;
        this.fill = e[1] || " ", this.align = e[2] || ">", this.sign = e[3] || "-", this.symbol = e[4] || "", this.zero = !!e[5], this.width = e[6] && +e[6], this.comma = !!e[7], this.precision = e[8] && +e[8].slice(1), this.trim = !!e[9], this.type = e[10] || ""
    }

    Mi.prototype = ki.prototype, ki.prototype.toString = function () {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    var Ii, Oi, Li, Wi, Ri = function (t) {
        t:for (var e, n = t.length, i = 1, r = -1; i < n; ++i) switch (t[i]) {
            case".":
                r = e = i;
                break;
            case"0":
                0 === r && (r = i), e = i;
                break;
            default:
                if (r > 0) {
                    if (!+t[i]) break t;
                    r = 0
                }
        }
        return r > 0 ? t.slice(0, r) + t.slice(e + 1) : t
    }, Fi = function (t, e) {
        var n = Ai(t, e);
        if (!n) return t + "";
        var i = n[0], r = n[1];
        return r < 0 ? "0." + new Array(-r).join("0") + i : i.length > r + 1 ? i.slice(0, r + 1) + "." + i.slice(r + 1) : i + new Array(r - i.length + 2).join("0")
    }, Hi = {
        "%": function (t, e) {
            return (100 * t).toFixed(e)
        }, b: function (t) {
            return Math.round(t).toString(2)
        }, c: function (t) {
            return t + ""
        }, d: function (t) {
            return Math.round(t).toString(10)
        }, e: function (t, e) {
            return t.toExponential(e)
        }, f: function (t, e) {
            return t.toFixed(e)
        }, g: function (t, e) {
            return t.toPrecision(e)
        }, o: function (t) {
            return Math.round(t).toString(8)
        }, p: function (t, e) {
            return Fi(100 * t, e)
        }, r: Fi, s: function (t, e) {
            var n = Ai(t, e);
            if (!n) return t + "";
            var i = n[0], r = n[1], o = r - (Ii = 3 * Math.max(-8, Math.min(8, Math.floor(r / 3)))) + 1, a = i.length;
            return o === a ? i : o > a ? i + new Array(o - a + 1).join("0") : o > 0 ? i.slice(0, o) + "." + i.slice(o) : "0." + new Array(1 - o).join("0") + Ai(t, Math.max(0, e + o - 1))[0]
        }, X: function (t) {
            return Math.round(t).toString(16).toUpperCase()
        }, x: function (t) {
            return Math.round(t).toString(16)
        }
    }, ji = function (t) {
        return t
    }, Ui = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
    Oi = function (t) {
        var e, n, i = t.grouping && t.thousands ? (e = t.grouping, n = t.thousands, function (t, i) {
            for (var r = t.length, o = [], a = 0, s = e[0], c = 0; r > 0 && s > 0 && (c + s + 1 > i && (s = Math.max(1, i - c)), o.push(t.substring(r -= s, r + s)), !((c += s + 1) > i));) s = e[a = (a + 1) % e.length];
            return o.reverse().join(n)
        }) : ji, r = t.currency, o = t.decimal, a = t.numerals ? function (t) {
            return function (e) {
                return e.replace(/[0-9]/g, function (e) {
                    return t[+e]
                })
            }
        }(t.numerals) : ji, s = t.percent || "%";

        function c(t) {
            var e = (t = Mi(t)).fill, n = t.align, c = t.sign, f = t.symbol, l = t.zero, u = t.width, h = t.comma,
                d = t.precision, p = t.trim, m = t.type;
            "n" === m ? (h = !0, m = "g") : Hi[m] || (null == d && (d = 12), p = !0, m = "g"), (l || "0" === e && "=" === n) && (l = !0, e = "0", n = "=");
            var g = "$" === f ? r[0] : "#" === f && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "",
                y = "$" === f ? r[1] : /[%p]/.test(m) ? s : "", v = Hi[m], _ = /[defgprs%]/.test(m);

            function b(t) {
                var r, s, f, b = g, x = y;
                if ("c" === m) x = v(t) + x, t = ""; else {
                    var w = (t = +t) < 0;
                    if (t = v(Math.abs(t), d), p && (t = Ri(t)), w && 0 == +t && (w = !1), b = (w ? "(" === c ? c : "-" : "-" === c || "(" === c ? "" : c) + b, x = ("s" === m ? Ui[8 + Ii / 3] : "") + x + (w && "(" === c ? ")" : ""), _) for (r = -1, s = t.length; ++r < s;) if (48 > (f = t.charCodeAt(r)) || f > 57) {
                        x = (46 === f ? o + t.slice(r + 1) : t.slice(r)) + x, t = t.slice(0, r);
                        break
                    }
                }
                h && !l && (t = i(t, 1 / 0));
                var T = b.length + t.length + x.length, E = T < u ? new Array(u - T + 1).join(e) : "";
                switch (h && l && (t = i(E + t, E.length ? u - x.length : 1 / 0), E = ""), n) {
                    case"<":
                        t = b + t + x + E;
                        break;
                    case"=":
                        t = b + E + t + x;
                        break;
                    case"^":
                        t = E.slice(0, T = E.length >> 1) + b + t + x + E.slice(T);
                        break;
                    default:
                        t = E + b + t + x
                }
                return a(t)
            }

            return d = null == d ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, d)) : Math.max(0, Math.min(20, d)), b.toString = function () {
                return t + ""
            }, b
        }

        return {
            format: c, formatPrefix: function (t, e) {
                var n = c(((t = Mi(t)).type = "f", t)), i = 3 * Math.max(-8, Math.min(8, Math.floor(Ni(e) / 3))),
                    r = Math.pow(10, -i), o = Ui[8 + i / 3];
                return function (t) {
                    return n(r * t) + o
                }
            }
        }
    }({decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""]}), Li = Oi.format, Wi = Oi.formatPrefix;
    var Bi = function () {
        return new Vi
    };

    function Vi() {
        this.reset()
    }

    Vi.prototype = {
        constructor: Vi, reset: function () {
            this.s = this.t = 0
        }, add: function (t) {
            Yi(qi, t, this.t), Yi(this, qi.s, this.s), this.s ? this.t += qi.t : this.s = qi.t
        }, valueOf: function () {
            return this.s
        }
    };
    var qi = new Vi;

    function Yi(t, e, n) {
        var i = t.s = e + n, r = i - e, o = i - r;
        t.t = e - o + (n - r)
    }

    var zi = 1e-6, Gi = Math.PI, $i = Gi / 2, Xi = Gi / 4, Ki = 2 * Gi, Qi = Gi / 180, Zi = Math.abs, Ji = Math.atan,
        tr = Math.atan2, er = Math.cos, nr = (Math.ceil, Math.exp), ir = (Math.floor, Math.log),
        rr = (Math.pow, Math.sin), or = (Math.sign, Math.sqrt), ar = Math.tan;

    function sr(t) {
        return t > 1 ? 0 : t < -1 ? Gi : Math.acos(t)
    }

    function cr(t) {
        return t > 1 ? $i : t < -1 ? -$i : Math.asin(t)
    }

    function fr() {
    }

    Bi(), Bi();

    function lr(t) {
        var e = t[0], n = t[1], i = er(n);
        return [i * er(e), i * rr(e), rr(n)]
    }

    function ur(t, e) {
        return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
    }

    function hr(t) {
        var e = or(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        t[0] /= e, t[1] /= e, t[2] /= e
    }

    Bi();

    function dr(t, e) {
        return [t > Gi ? t - Ki : t < -Gi ? t + Ki : t, e]
    }

    dr.invert = dr;
    var pr = function () {
        var t, e = [];
        return {
            point: function (e, n) {
                t.push([e, n])
            }, lineStart: function () {
                e.push(t = [])
            }, lineEnd: fr, rejoin: function () {
                e.length > 1 && e.push(e.pop().concat(e.shift()))
            }, result: function () {
                var n = e;
                return e = [], t = null, n
            }
        }
    }, mr = function (t, e) {
        return Zi(t[0] - e[0]) < zi && Zi(t[1] - e[1]) < zi
    };

    function gr(t, e, n, i) {
        this.x = t, this.z = e, this.o = n, this.e = i, this.v = !1, this.n = this.p = null
    }

    var yr = function (t, e, n, i, r) {
        var o, a, s = [], c = [];
        if (t.forEach(function (t) {
            if (!((e = t.length - 1) <= 0)) {
                var e, n, i = t[0], a = t[e];
                if (mr(i, a)) {
                    for (r.lineStart(), o = 0; o < e; ++o) r.point((i = t[o])[0], i[1]);
                    r.lineEnd()
                } else s.push(n = new gr(i, t, null, !0)), c.push(n.o = new gr(i, null, n, !1)), s.push(n = new gr(a, t, null, !1)), c.push(n.o = new gr(a, null, n, !0))
            }
        }), s.length) {
            for (c.sort(e), vr(s), vr(c), o = 0, a = c.length; o < a; ++o) c[o].e = n = !n;
            for (var f, l, u = s[0]; ;) {
                for (var h = u, d = !0; h.v;) if ((h = h.n) === u) return;
                f = h.z, r.lineStart();
                do {
                    if (h.v = h.o.v = !0, h.e) {
                        if (d) for (o = 0, a = f.length; o < a; ++o) r.point((l = f[o])[0], l[1]); else i(h.x, h.n.x, 1, r);
                        h = h.n
                    } else {
                        if (d) for (f = h.p.z, o = f.length - 1; o >= 0; --o) r.point((l = f[o])[0], l[1]); else i(h.x, h.p.x, -1, r);
                        h = h.p
                    }
                    f = (h = h.o).z, d = !d
                } while (!h.v);
                r.lineEnd()
            }
        }
    };

    function vr(t) {
        if (e = t.length) {
            for (var e, n, i = 0, r = t[0]; ++i < e;) r.n = n = t[i], n.p = r, r = n;
            r.n = n = t[0], n.p = r
        }
    }

    var _r = Bi(), br = function (t, e) {
        var n = e[0], i = e[1], r = rr(i), o = [rr(n), -er(n), 0], a = 0, s = 0;
        _r.reset(), 1 === r ? i = $i + zi : -1 === r && (i = -$i - zi);
        for (var c = 0, f = t.length; c < f; ++c) if (u = (l = t[c]).length) for (var l, u, h = l[u - 1], d = h[0], p = h[1] / 2 + Xi, m = rr(p), g = er(p), y = 0; y < u; ++y, d = _, m = x, g = w, h = v) {
            var v = l[y], _ = v[0], b = v[1] / 2 + Xi, x = rr(b), w = er(b), T = _ - d, E = T >= 0 ? 1 : -1, D = E * T,
                C = D > Gi, S = m * x;
            if (_r.add(tr(S * E * rr(D), g * w + S * er(D))), a += C ? T + E * Ki : T, C ^ d >= n ^ _ >= n) {
                var A = ur(lr(h), lr(v));
                hr(A);
                var N = ur(o, A);
                hr(N);
                var P = (C ^ T >= 0 ? -1 : 1) * cr(N[2]);
                (i > P || i === P && (A[0] || A[1])) && (s += C ^ T >= 0 ? 1 : -1)
            }
        }
        return (a < -zi || a < zi && _r < -zi) ^ 1 & s
    }, xr = function (t, e, n, i) {
        return function (r) {
            var o, a, s, c = e(r), f = pr(), l = e(f), u = !1, h = {
                point: d, lineStart: m, lineEnd: y, polygonStart: function () {
                    h.point = v, h.lineStart = _, h.lineEnd = b, a = [], o = []
                }, polygonEnd: function () {
                    h.point = d, h.lineStart = m, h.lineEnd = y, a = g(a);
                    var t = br(o, i);
                    a.length ? (u || (r.polygonStart(), u = !0), yr(a, Tr, t, n, r)) : t && (u || (r.polygonStart(), u = !0), r.lineStart(), n(null, null, 1, r), r.lineEnd()), u && (r.polygonEnd(), u = !1), a = o = null
                }, sphere: function () {
                    r.polygonStart(), r.lineStart(), n(null, null, 1, r), r.lineEnd(), r.polygonEnd()
                }
            };

            function d(e, n) {
                t(e, n) && r.point(e, n)
            }

            function p(t, e) {
                c.point(t, e)
            }

            function m() {
                h.point = p, c.lineStart()
            }

            function y() {
                h.point = d, c.lineEnd()
            }

            function v(t, e) {
                s.push([t, e]), l.point(t, e)
            }

            function _() {
                l.lineStart(), s = []
            }

            function b() {
                v(s[0][0], s[0][1]), l.lineEnd();
                var t, e, n, i, c = l.clean(), h = f.result(), d = h.length;
                if (s.pop(), o.push(s), s = null, d) if (1 & c) {
                    if ((e = (n = h[0]).length - 1) > 0) {
                        for (u || (r.polygonStart(), u = !0), r.lineStart(), t = 0; t < e; ++t) r.point((i = n[t])[0], i[1]);
                        r.lineEnd()
                    }
                } else d > 1 && 2 & c && h.push(h.pop().concat(h.shift())), a.push(h.filter(wr))
            }

            return h
        }
    };

    function wr(t) {
        return t.length > 1
    }

    function Tr(t, e) {
        return ((t = t.x)[0] < 0 ? t[1] - $i - zi : $i - t[1]) - ((e = e.x)[0] < 0 ? e[1] - $i - zi : $i - e[1])
    }

    xr(function () {
        return !0
    }, function (t) {
        var e, n = NaN, i = NaN, r = NaN;
        return {
            lineStart: function () {
                t.lineStart(), e = 1
            }, point: function (o, a) {
                var s = o > 0 ? Gi : -Gi, c = Zi(o - n);
                Zi(c - Gi) < zi ? (t.point(n, i = (i + a) / 2 > 0 ? $i : -$i), t.point(r, i), t.lineEnd(), t.lineStart(), t.point(s, i), t.point(o, i), e = 0) : r !== s && c >= Gi && (Zi(n - r) < zi && (n -= r * zi), Zi(o - s) < zi && (o -= s * zi), i = function (t, e, n, i) {
                    var r, o, a = rr(t - n);
                    return Zi(a) > zi ? Ji((rr(e) * (o = er(i)) * rr(n) - rr(i) * (r = er(e)) * rr(t)) / (r * o * a)) : (e + i) / 2
                }(n, i, o, a), t.point(r, i), t.lineEnd(), t.lineStart(), t.point(s, i), e = 0), t.point(n = o, i = a), r = s
            }, lineEnd: function () {
                t.lineEnd(), n = i = NaN
            }, clean: function () {
                return 2 - e
            }
        }
    }, function (t, e, n, i) {
        var r;
        if (null == t) r = n * $i, i.point(-Gi, r), i.point(0, r), i.point(Gi, r), i.point(Gi, 0), i.point(Gi, -r), i.point(0, -r), i.point(-Gi, -r), i.point(-Gi, 0), i.point(-Gi, r); else if (Zi(t[0] - e[0]) > zi) {
            var o = t[0] < e[0] ? Gi : -Gi;
            r = n * o / 2, i.point(-o, r), i.point(0, r), i.point(o, r)
        } else i.point(e[0], e[1])
    }, [-Gi, -$i]);
    Bi();
    Bi(), Bi();

    function Er(t) {
        this._context = t
    }

    Er.prototype = {
        _radius: 4.5, pointRadius: function (t) {
            return this._radius = t, this
        }, polygonStart: function () {
            this._line = 0
        }, polygonEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._point = 0
        }, lineEnd: function () {
            0 === this._line && this._context.closePath(), this._point = NaN
        }, point: function (t, e) {
            switch (this._point) {
                case 0:
                    this._context.moveTo(t, e), this._point = 1;
                    break;
                case 1:
                    this._context.lineTo(t, e);
                    break;
                default:
                    this._context.moveTo(t + this._radius, e), this._context.arc(t, e, this._radius, 0, Ki)
            }
        }, result: fr
    };
    Bi();

    function Dr() {
        this._string = []
    }

    function Cr(t) {
        return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
    }

    Dr.prototype = {
        _radius: 4.5, _circle: Cr(4.5), pointRadius: function (t) {
            return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this
        }, polygonStart: function () {
            this._line = 0
        }, polygonEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._point = 0
        }, lineEnd: function () {
            0 === this._line && this._string.push("Z"), this._point = NaN
        }, point: function (t, e) {
            switch (this._point) {
                case 0:
                    this._string.push("M", t, ",", e), this._point = 1;
                    break;
                case 1:
                    this._string.push("L", t, ",", e);
                    break;
                default:
                    null == this._circle && (this._circle = Cr(this._radius)), this._string.push("M", t, ",", e, this._circle)
            }
        }, result: function () {
            if (this._string.length) {
                var t = this._string.join("");
                return this._string = [], t
            }
            return null
        }
    };

    function Sr(t) {
        return function (e) {
            var n = new Ar;
            for (var i in t) n[i] = t[i];
            return n.stream = e, n
        }
    }

    function Ar() {
    }

    Ar.prototype = {
        constructor: Ar, point: function (t, e) {
            this.stream.point(t, e)
        }, sphere: function () {
            this.stream.sphere()
        }, lineStart: function () {
            this.stream.lineStart()
        }, lineEnd: function () {
            this.stream.lineEnd()
        }, polygonStart: function () {
            this.stream.polygonStart()
        }, polygonEnd: function () {
            this.stream.polygonEnd()
        }
    };
    er(30 * Qi);
    Sr({
        point: function (t, e) {
            this.stream.point(t * Qi, e * Qi)
        }
    });

    function Nr(t) {
        return function (e, n) {
            var i = er(e), r = er(n), o = t(i * r);
            return [o * r * rr(e), o * rr(n)]
        }
    }

    function Pr(t) {
        return function (e, n) {
            var i = or(e * e + n * n), r = t(i), o = rr(r), a = er(r);
            return [tr(e * o, i * a), cr(i && n * o / i)]
        }
    }

    var Mr = Nr(function (t) {
        return or(2 / (1 + t))
    });
    Mr.invert = Pr(function (t) {
        return 2 * cr(t / 2)
    });
    var kr = Nr(function (t) {
        return (t = sr(t)) && t / rr(t)
    });
    kr.invert = Pr(function (t) {
        return t
    });

    function Ir(t, e) {
        return [t, ir(ar(($i + e) / 2))]
    }

    Ir.invert = function (t, e) {
        return [t, 2 * Ji(nr(e)) - $i]
    };

    function Or(t, e) {
        return [t, e]
    }

    Or.invert = Or;

    function Lr(t, e) {
        var n = er(e), i = er(t) * n;
        return [n * rr(t) / i, rr(e) / i]
    }

    Lr.invert = Pr(Ji);

    function Wr(t, e) {
        var n = e * e, i = n * n;
        return [t * (.8707 - .131979 * n + i * (i * (.003971 * n - .001529 * i) - .013791)), e * (1.007226 + n * (.015085 + i * (.028874 * n - .044475 - .005916 * i)))]
    }

    Wr.invert = function (t, e) {
        var n, i = e, r = 25;
        do {
            var o = i * i, a = o * o;
            i -= n = (i * (1.007226 + o * (.015085 + a * (.028874 * o - .044475 - .005916 * a))) - e) / (1.007226 + o * (.045255 + a * (.259866 * o - .311325 - .005916 * 11 * a)))
        } while (Zi(n) > zi && --r > 0);
        return [t / (.8707 + (o = i * i) * (o * (o * o * o * (.003971 - .001529 * o) - .013791) - .131979)), i]
    };

    function Rr(t, e) {
        return [er(e) * rr(t), rr(e)]
    }

    Rr.invert = Pr(cr);

    function Fr(t, e) {
        var n = er(e), i = 1 + er(t) * n;
        return [n * rr(t) / i, rr(e) / i]
    }

    Fr.invert = Pr(function (t) {
        return 2 * Ji(t)
    });

    function Hr(t, e) {
        return [ir(ar(($i + e) / 2)), -t]
    }

    Hr.invert = function (t, e) {
        return [-e, 2 * Ji(nr(t)) - $i]
    };

    function jr(t) {
        var e = 0, n = t.children, i = n && n.length;
        if (i) for (; --i >= 0;) e += n[i].value; else e = 1;
        t.value = e
    }

    function Ur(t, e) {
        var n, i, r, o, a, s = new Yr(t), c = +t.value && (s.value = t.value), f = [s];
        for (null == e && (e = Br); n = f.pop();) if (c && (n.value = +n.data.value), (r = e(n.data)) && (a = r.length)) for (n.children = new Array(a), o = a - 1; o >= 0; --o) f.push(i = n.children[o] = new Yr(r[o])), i.parent = n, i.depth = n.depth + 1;
        return s.eachBefore(qr)
    }

    function Br(t) {
        return t.children
    }

    function Vr(t) {
        t.data = t.data.data
    }

    function qr(t) {
        var e = 0;
        do {
            t.height = e
        } while ((t = t.parent) && t.height < ++e)
    }

    function Yr(t) {
        this.data = t, this.depth = this.height = 0, this.parent = null
    }

    Yr.prototype = Ur.prototype = {
        constructor: Yr, count: function () {
            return this.eachAfter(jr)
        }, each: function (t) {
            var e, n, i, r, o = this, a = [o];
            do {
                for (e = a.reverse(), a = []; o = e.pop();) if (t(o), n = o.children) for (i = 0, r = n.length; i < r; ++i) a.push(n[i])
            } while (a.length);
            return this
        }, eachAfter: function (t) {
            for (var e, n, i, r = this, o = [r], a = []; r = o.pop();) if (a.push(r), e = r.children) for (n = 0, i = e.length; n < i; ++n) o.push(e[n]);
            for (; r = a.pop();) t(r);
            return this
        }, eachBefore: function (t) {
            for (var e, n, i = this, r = [i]; i = r.pop();) if (t(i), e = i.children) for (n = e.length - 1; n >= 0; --n) r.push(e[n]);
            return this
        }, sum: function (t) {
            return this.eachAfter(function (e) {
                for (var n = +t(e.data) || 0, i = e.children, r = i && i.length; --r >= 0;) n += i[r].value;
                e.value = n
            })
        }, sort: function (t) {
            return this.eachBefore(function (e) {
                e.children && e.children.sort(t)
            })
        }, path: function (t) {
            for (var e = this, n = function (t, e) {
                if (t === e) return t;
                var n = t.ancestors(), i = e.ancestors(), r = null;
                for (t = n.pop(), e = i.pop(); t === e;) r = t, t = n.pop(), e = i.pop();
                return r
            }(e, t), i = [e]; e !== n;) e = e.parent, i.push(e);
            for (var r = i.length; t !== n;) i.splice(r, 0, t), t = t.parent;
            return i
        }, ancestors: function () {
            for (var t = this, e = [t]; t = t.parent;) e.push(t);
            return e
        }, descendants: function () {
            var t = [];
            return this.each(function (e) {
                t.push(e)
            }), t
        }, leaves: function () {
            var t = [];
            return this.eachBefore(function (e) {
                e.children || t.push(e)
            }), t
        }, links: function () {
            var t = this, e = [];
            return t.each(function (n) {
                n !== t && e.push({source: n.parent, target: n})
            }), e
        }, copy: function () {
            return Ur(this).eachBefore(Vr)
        }
    };
    Array.prototype.slice;
    var zr = function (t, e, n, i, r) {
        for (var o, a = t.children, s = -1, c = a.length, f = t.value && (i - e) / t.value; ++s < c;) (o = a[s]).y0 = n, o.y1 = r, o.x0 = e, o.x1 = e += o.value * f
    };

    function Gr(t, e) {
        this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = e
    }

    Gr.prototype = Object.create(Yr.prototype);
    var $r = function (t, e, n, i, r) {
        for (var o, a = t.children, s = -1, c = a.length, f = t.value && (r - n) / t.value; ++s < c;) (o = a[s]).x0 = e, o.x1 = i, o.y0 = n, o.y1 = n += o.value * f
    }, Xr = (1 + Math.sqrt(5)) / 2;

    function Kr(t, e, n, i, r, o) {
        for (var a, s, c, f, l, u, h, d, p, m, g, y = [], v = e.children, _ = 0, b = 0, x = v.length, w = e.value; _ < x;) {
            c = r - n, f = o - i;
            do {
                l = v[b++].value
            } while (!l && b < x);
            for (u = h = l, g = l * l * (m = Math.max(f / c, c / f) / (w * t)), p = Math.max(h / g, g / u); b < x; ++b) {
                if (l += s = v[b].value, s < u && (u = s), s > h && (h = s), g = l * l * m, (d = Math.max(h / g, g / u)) > p) {
                    l -= s;
                    break
                }
                p = d
            }
            y.push(a = {
                value: l,
                dice: c < f,
                children: v.slice(_, b)
            }), a.dice ? zr(a, n, i, r, w ? i += f * l / w : o) : $r(a, n, i, w ? n += c * l / w : r, o), w -= l, _ = b
        }
        return y
    }

    (function t(e) {
        function n(t, n, i, r, o) {
            Kr(e, t, n, i, r, o)
        }

        return n.ratio = function (e) {
            return t((e = +e) > 1 ? e : 1)
        }, n
    })(Xr), function t(e) {
        function n(t, n, i, r, o) {
            if ((a = t._squarify) && a.ratio === e) for (var a, s, c, f, l, u = -1, h = a.length, d = t.value; ++u < h;) {
                for (c = (s = a[u]).children, f = s.value = 0, l = c.length; f < l; ++f) s.value += c[f].value;
                s.dice ? zr(s, n, i, r, i += (o - i) * s.value / d) : $r(s, n, i, n += (r - n) * s.value / d, o), d -= s.value
            } else t._squarify = a = Kr(e, t, n, i, r, o), a.ratio = e
        }

        return n.ratio = function (e) {
            return t((e = +e) > 1 ? e : 1)
        }, n
    }(Xr);
    var Qr = function () {
        return Math.random()
    }, Zr = (function t(e) {
        function n(t, n) {
            return t = null == t ? 0 : +t, n = null == n ? 1 : +n, 1 === arguments.length ? (n = t, t = 0) : n -= t, function () {
                return e() * n + t
            }
        }

        return n.source = t, n
    }(Qr), function t(e) {
        function n(t, n) {
            var i, r;
            return t = null == t ? 0 : +t, n = null == n ? 1 : +n, function () {
                var o;
                if (null != i) o = i, i = null; else do {
                    i = 2 * e() - 1, o = 2 * e() - 1, r = i * i + o * o
                } while (!r || r > 1);
                return t + n * o * Math.sqrt(-2 * Math.log(r) / r)
            }
        }

        return n.source = t, n
    }(Qr)), Jr = (function t(e) {
        function n() {
            var t = Zr.source(e).apply(this, arguments);
            return function () {
                return Math.exp(t())
            }
        }

        return n.source = t, n
    }(Qr), function t(e) {
        function n(t) {
            return function () {
                for (var n = 0, i = 0; i < t; ++i) n += e();
                return n
            }
        }

        return n.source = t, n
    }(Qr)), to = (function t(e) {
        function n(t) {
            var n = Jr.source(e)(t);
            return function () {
                return n() / t
            }
        }

        return n.source = t, n
    }(Qr), function t(e) {
        function n(t) {
            return function () {
                return -Math.log(1 - e()) / t
            }
        }

        return n.source = t, n
    }(Qr), Array.prototype), eo = to.map, no = to.slice;
    var io = function (t) {
        return function () {
            return t
        }
    }, ro = function (t) {
        return +t
    }, oo = [0, 1];

    function ao(t, e) {
        return (e -= t = +t) ? function (n) {
            return (n - t) / e
        } : io(e)
    }

    function so(t, e, n, i) {
        var r = t[0], o = t[1], a = e[0], s = e[1];
        return o < r ? (r = n(o, r), a = i(s, a)) : (r = n(r, o), a = i(a, s)), function (t) {
            return a(r(t))
        }
    }

    function co(t, e, n, i) {
        var r = Math.min(t.length, e.length) - 1, o = new Array(r), a = new Array(r), c = -1;
        for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++c < r;) o[c] = n(t[c], t[c + 1]), a[c] = i(e[c], e[c + 1]);
        return function (e) {
            var n = s(t, e, 1, r) - 1;
            return a[n](o[n](e))
        }
    }

    function fo(t, e) {
        return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
    }

    function lo(t, e) {
        var n, i, r, o = oo, a = oo, s = Ye, c = !1;

        function f() {
            return n = Math.min(o.length, a.length) > 2 ? co : so, i = r = null, l
        }

        function l(e) {
            return (i || (i = n(o, a, c ? function (t) {
                return function (e, n) {
                    var i = t(e = +e, n = +n);
                    return function (t) {
                        return t <= e ? 0 : t >= n ? 1 : i(t)
                    }
                }
            }(t) : t, s)))(+e)
        }

        return l.invert = function (t) {
            return (r || (r = n(a, o, ao, c ? function (t) {
                return function (e, n) {
                    var i = t(e = +e, n = +n);
                    return function (t) {
                        return t <= 0 ? e : t >= 1 ? n : i(t)
                    }
                }
            }(e) : e)))(+t)
        }, l.domain = function (t) {
            return arguments.length ? (o = eo.call(t, ro), f()) : o.slice()
        }, l.range = function (t) {
            return arguments.length ? (a = no.call(t), f()) : a.slice()
        }, l.rangeRound = function (t) {
            return a = no.call(t), s = ze, f()
        }, l.clamp = function (t) {
            return arguments.length ? (c = !!t, f()) : c
        }, l.interpolate = function (t) {
            return arguments.length ? (s = t, f()) : s
        }, f()
    }

    var uo = function (t, e, n) {
        var i, r = t[0], o = t[t.length - 1], a = p(r, o, null == e ? 10 : e);
        switch ((n = Mi(null == n ? ",f" : n)).type) {
            case"s":
                var s = Math.max(Math.abs(r), Math.abs(o));
                return null != n.precision || isNaN(i = function (t, e) {
                    return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Ni(e) / 3))) - Ni(Math.abs(t)))
                }(a, s)) || (n.precision = i), Wi(n, s);
            case"":
            case"e":
            case"g":
            case"p":
            case"r":
                null != n.precision || isNaN(i = function (t, e) {
                    return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Ni(e) - Ni(t)) + 1
                }(a, Math.max(Math.abs(r), Math.abs(o)))) || (n.precision = i - ("e" === n.type));
                break;
            case"f":
            case"%":
                null != n.precision || isNaN(i = function (t) {
                    return Math.max(0, -Ni(Math.abs(t)))
                }(a)) || (n.precision = i - 2 * ("%" === n.type))
        }
        return Li(n)
    };

    function ho(t) {
        var e = t.domain;
        return t.ticks = function (t) {
            var n = e();
            return h(n[0], n[n.length - 1], null == t ? 10 : t)
        }, t.tickFormat = function (t, n) {
            return uo(e(), t, n)
        }, t.nice = function (n) {
            null == n && (n = 10);
            var i, r = e(), o = 0, a = r.length - 1, s = r[o], c = r[a];
            return c < s && (i = s, s = c, c = i, i = o, o = a, a = i), (i = d(s, c, n)) > 0 ? i = d(s = Math.floor(s / i) * i, c = Math.ceil(c / i) * i, n) : i < 0 && (i = d(s = Math.ceil(s * i) / i, c = Math.floor(c * i) / i, n)), i > 0 ? (r[o] = Math.floor(s / i) * i, r[a] = Math.ceil(c / i) * i, e(r)) : i < 0 && (r[o] = Math.ceil(s * i) / i, r[a] = Math.floor(c * i) / i, e(r)), t
        }, t
    }

    var po = function (t, e) {
        var n, i = 0, r = (t = t.slice()).length - 1, o = t[i], a = t[r];
        return a < o && (n = i, i = r, r = n, n = o, o = a, a = n), t[i] = e.floor(o), t[r] = e.ceil(a), t
    };
    var mo = new Date, go = new Date;

    function yo(t, e, n, i) {
        function r(e) {
            return t(e = new Date(+e)), e
        }

        return r.floor = r, r.ceil = function (n) {
            return t(n = new Date(n - 1)), e(n, 1), t(n), n
        }, r.round = function (t) {
            var e = r(t), n = r.ceil(t);
            return t - e < n - t ? e : n
        }, r.offset = function (t, n) {
            return e(t = new Date(+t), null == n ? 1 : Math.floor(n)), t
        }, r.range = function (n, i, o) {
            var a, s = [];
            if (n = r.ceil(n), o = null == o ? 1 : Math.floor(o), !(n < i && o > 0)) return s;
            do {
                s.push(a = new Date(+n)), e(n, o), t(n)
            } while (a < n && n < i);
            return s
        }, r.filter = function (n) {
            return yo(function (e) {
                if (e >= e) for (; t(e), !n(e);) e.setTime(e - 1)
            }, function (t, i) {
                if (t >= t) if (i < 0) for (; ++i <= 0;) for (; e(t, -1), !n(t);) ; else for (; --i >= 0;) for (; e(t, 1), !n(t);) ;
            })
        }, n && (r.count = function (e, i) {
            return mo.setTime(+e), go.setTime(+i), t(mo), t(go), Math.floor(n(mo, go))
        }, r.every = function (t) {
            return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? r.filter(i ? function (e) {
                return i(e) % t == 0
            } : function (e) {
                return r.count(0, e) % t == 0
            }) : r : null
        }), r
    }

    var vo = yo(function () {
    }, function (t, e) {
        t.setTime(+t + e)
    }, function (t, e) {
        return e - t
    });
    vo.every = function (t) {
        return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? yo(function (e) {
            e.setTime(Math.floor(e / t) * t)
        }, function (e, n) {
            e.setTime(+e + n * t)
        }, function (e, n) {
            return (n - e) / t
        }) : vo : null
    };
    var _o = vo, bo = (vo.range, 6e4), xo = 6048e5, wo = yo(function (t) {
        t.setTime(1e3 * Math.floor(t / 1e3))
    }, function (t, e) {
        t.setTime(+t + 1e3 * e)
    }, function (t, e) {
        return (e - t) / 1e3
    }, function (t) {
        return t.getUTCSeconds()
    }), To = wo, Eo = (wo.range, yo(function (t) {
        t.setTime(Math.floor(t / bo) * bo)
    }, function (t, e) {
        t.setTime(+t + e * bo)
    }, function (t, e) {
        return (e - t) / bo
    }, function (t) {
        return t.getMinutes()
    })), Do = Eo, Co = (Eo.range, yo(function (t) {
        var e = t.getTimezoneOffset() * bo % 36e5;
        e < 0 && (e += 36e5), t.setTime(36e5 * Math.floor((+t - e) / 36e5) + e)
    }, function (t, e) {
        t.setTime(+t + 36e5 * e)
    }, function (t, e) {
        return (e - t) / 36e5
    }, function (t) {
        return t.getHours()
    })), So = Co, Ao = (Co.range, yo(function (t) {
        t.setHours(0, 0, 0, 0)
    }, function (t, e) {
        t.setDate(t.getDate() + e)
    }, function (t, e) {
        return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * bo) / 864e5
    }, function (t) {
        return t.getDate() - 1
    })), No = Ao;
    Ao.range;

    function Po(t) {
        return yo(function (e) {
            e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0)
        }, function (t, e) {
            t.setDate(t.getDate() + 7 * e)
        }, function (t, e) {
            return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * bo) / xo
        })
    }

    var Mo = Po(0), ko = Po(1), Io = Po(2), Oo = Po(3), Lo = Po(4), Wo = Po(5), Ro = Po(6),
        Fo = (Mo.range, ko.range, Io.range, Oo.range, Lo.range, Wo.range, Ro.range, yo(function (t) {
            t.setDate(1), t.setHours(0, 0, 0, 0)
        }, function (t, e) {
            t.setMonth(t.getMonth() + e)
        }, function (t, e) {
            return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear())
        }, function (t) {
            return t.getMonth()
        })), Ho = Fo, jo = Fo.range, Uo = yo(function (t) {
            t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
        }, function (t, e) {
            t.setFullYear(t.getFullYear() + e)
        }, function (t, e) {
            return e.getFullYear() - t.getFullYear()
        }, function (t) {
            return t.getFullYear()
        });
    Uo.every = function (t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? yo(function (e) {
            e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0)
        }, function (e, n) {
            e.setFullYear(e.getFullYear() + n * t)
        }) : null
    };
    var Bo = Uo, Vo = (Uo.range, yo(function (t) {
        t.setUTCSeconds(0, 0)
    }, function (t, e) {
        t.setTime(+t + e * bo)
    }, function (t, e) {
        return (e - t) / bo
    }, function (t) {
        return t.getUTCMinutes()
    })), qo = (Vo.range, yo(function (t) {
        t.setUTCMinutes(0, 0, 0)
    }, function (t, e) {
        t.setTime(+t + 36e5 * e)
    }, function (t, e) {
        return (e - t) / 36e5
    }, function (t) {
        return t.getUTCHours()
    })), Yo = (qo.range, yo(function (t) {
        t.setUTCHours(0, 0, 0, 0)
    }, function (t, e) {
        t.setUTCDate(t.getUTCDate() + e)
    }, function (t, e) {
        return (e - t) / 864e5
    }, function (t) {
        return t.getUTCDate() - 1
    })), zo = Yo;
    Yo.range;

    function Go(t) {
        return yo(function (e) {
            e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0)
        }, function (t, e) {
            t.setUTCDate(t.getUTCDate() + 7 * e)
        }, function (t, e) {
            return (e - t) / xo
        })
    }

    var $o = Go(0), Xo = Go(1), Ko = Go(2), Qo = Go(3), Zo = Go(4), Jo = Go(5), ta = Go(6),
        ea = ($o.range, Xo.range, Ko.range, Qo.range, Zo.range, Jo.range, ta.range, yo(function (t) {
            t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
        }, function (t, e) {
            t.setUTCMonth(t.getUTCMonth() + e)
        }, function (t, e) {
            return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear())
        }, function (t) {
            return t.getUTCMonth()
        })), na = (ea.range, yo(function (t) {
            t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
        }, function (t, e) {
            t.setUTCFullYear(t.getUTCFullYear() + e)
        }, function (t, e) {
            return e.getUTCFullYear() - t.getUTCFullYear()
        }, function (t) {
            return t.getUTCFullYear()
        }));
    na.every = function (t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? yo(function (e) {
            e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
        }, function (e, n) {
            e.setUTCFullYear(e.getUTCFullYear() + n * t)
        }) : null
    };
    var ia = na;
    na.range;

    function ra(t) {
        if (0 <= t.y && t.y < 100) {
            var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
            return e.setFullYear(t.y), e
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
    }

    function oa(t) {
        if (0 <= t.y && t.y < 100) {
            var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
            return e.setUTCFullYear(t.y), e
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
    }

    function aa(t) {
        return {y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0}
    }

    var sa, ca, fa, la, ua = {"-": "", _: " ", 0: "0"}, ha = /^\s*\d+/, da = /^%/, pa = /[\\^$*+?|[\]().{}]/g;

    function ma(t, e, n) {
        var i = t < 0 ? "-" : "", r = (i ? -t : t) + "", o = r.length;
        return i + (o < n ? new Array(n - o + 1).join(e) + r : r)
    }

    function ga(t) {
        return t.replace(pa, "\\$&")
    }

    function ya(t) {
        return new RegExp("^(?:" + t.map(ga).join("|") + ")", "i")
    }

    function va(t) {
        for (var e = {}, n = -1, i = t.length; ++n < i;) e[t[n].toLowerCase()] = n;
        return e
    }

    function _a(t, e, n) {
        var i = ha.exec(e.slice(n, n + 1));
        return i ? (t.w = +i[0], n + i[0].length) : -1
    }

    function ba(t, e, n) {
        var i = ha.exec(e.slice(n, n + 1));
        return i ? (t.u = +i[0], n + i[0].length) : -1
    }

    function xa(t, e, n) {
        var i = ha.exec(e.slice(n, n + 2));
        return i ? (t.U = +i[0], n + i[0].length) : -1
    }

    function wa(t, e, n) {
        var i = ha.exec(e.slice(n, n + 2));
        return i ? (t.V = +i[0], n + i[0].length) : -1
    }

    function Ta(t, e, n) {
        var i = ha.exec(e.slice(n, n + 2));
        return i ? (t.W = +i[0], n + i[0].length) : -1
    }

    function Ea(t, e, n) {
        var i = ha.exec(e.slice(n, n + 4));
        return i ? (t.y = +i[0], n + i[0].length) : -1
    }

    function Da(t, e, n) {
        var i = ha.exec(e.slice(n, n + 2));
        return i ? (t.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3), n + i[0].length) : -1
    }

    function Ca(t, e, n) {
        var i = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
        return i ? (t.Z = i[1] ? 0 : -(i[2] + (i[3] || "00")), n + i[0].length) : -1
    }

    function Sa(t, e, n) {
        var i = ha.exec(e.slice(n, n + 2));
        return i ? (t.m = i[0] - 1, n + i[0].length) : -1
    }

    function Aa(t, e, n) {
        var i = ha.exec(e.slice(n, n + 2));
        return i ? (t.d = +i[0], n + i[0].length) : -1
    }

    function Na(t, e, n) {
        var i = ha.exec(e.slice(n, n + 3));
        return i ? (t.m = 0, t.d = +i[0], n + i[0].length) : -1
    }

    function Pa(t, e, n) {
        var i = ha.exec(e.slice(n, n + 2));
        return i ? (t.H = +i[0], n + i[0].length) : -1
    }

    function Ma(t, e, n) {
        var i = ha.exec(e.slice(n, n + 2));
        return i ? (t.M = +i[0], n + i[0].length) : -1
    }

    function ka(t, e, n) {
        var i = ha.exec(e.slice(n, n + 2));
        return i ? (t.S = +i[0], n + i[0].length) : -1
    }

    function Ia(t, e, n) {
        var i = ha.exec(e.slice(n, n + 3));
        return i ? (t.L = +i[0], n + i[0].length) : -1
    }

    function Oa(t, e, n) {
        var i = ha.exec(e.slice(n, n + 6));
        return i ? (t.L = Math.floor(i[0] / 1e3), n + i[0].length) : -1
    }

    function La(t, e, n) {
        var i = da.exec(e.slice(n, n + 1));
        return i ? n + i[0].length : -1
    }

    function Wa(t, e, n) {
        var i = ha.exec(e.slice(n));
        return i ? (t.Q = +i[0], n + i[0].length) : -1
    }

    function Ra(t, e, n) {
        var i = ha.exec(e.slice(n));
        return i ? (t.Q = 1e3 * +i[0], n + i[0].length) : -1
    }

    function Fa(t, e) {
        return ma(t.getDate(), e, 2)
    }

    function Ha(t, e) {
        return ma(t.getHours(), e, 2)
    }

    function ja(t, e) {
        return ma(t.getHours() % 12 || 12, e, 2)
    }

    function Ua(t, e) {
        return ma(1 + No.count(Bo(t), t), e, 3)
    }

    function Ba(t, e) {
        return ma(t.getMilliseconds(), e, 3)
    }

    function Va(t, e) {
        return Ba(t, e) + "000"
    }

    function qa(t, e) {
        return ma(t.getMonth() + 1, e, 2)
    }

    function Ya(t, e) {
        return ma(t.getMinutes(), e, 2)
    }

    function za(t, e) {
        return ma(t.getSeconds(), e, 2)
    }

    function Ga(t) {
        var e = t.getDay();
        return 0 === e ? 7 : e
    }

    function $a(t, e) {
        return ma(Mo.count(Bo(t), t), e, 2)
    }

    function Xa(t, e) {
        var n = t.getDay();
        return t = n >= 4 || 0 === n ? Lo(t) : Lo.ceil(t), ma(Lo.count(Bo(t), t) + (4 === Bo(t).getDay()), e, 2)
    }

    function Ka(t) {
        return t.getDay()
    }

    function Qa(t, e) {
        return ma(ko.count(Bo(t), t), e, 2)
    }

    function Za(t, e) {
        return ma(t.getFullYear() % 100, e, 2)
    }

    function Ja(t, e) {
        return ma(t.getFullYear() % 1e4, e, 4)
    }

    function ts(t) {
        var e = t.getTimezoneOffset();
        return (e > 0 ? "-" : (e *= -1, "+")) + ma(e / 60 | 0, "0", 2) + ma(e % 60, "0", 2)
    }

    function es(t, e) {
        return ma(t.getUTCDate(), e, 2)
    }

    function ns(t, e) {
        return ma(t.getUTCHours(), e, 2)
    }

    function is(t, e) {
        return ma(t.getUTCHours() % 12 || 12, e, 2)
    }

    function rs(t, e) {
        return ma(1 + zo.count(ia(t), t), e, 3)
    }

    function os(t, e) {
        return ma(t.getUTCMilliseconds(), e, 3)
    }

    function as(t, e) {
        return os(t, e) + "000"
    }

    function ss(t, e) {
        return ma(t.getUTCMonth() + 1, e, 2)
    }

    function cs(t, e) {
        return ma(t.getUTCMinutes(), e, 2)
    }

    function fs(t, e) {
        return ma(t.getUTCSeconds(), e, 2)
    }

    function ls(t) {
        var e = t.getUTCDay();
        return 0 === e ? 7 : e
    }

    function us(t, e) {
        return ma($o.count(ia(t), t), e, 2)
    }

    function hs(t, e) {
        var n = t.getUTCDay();
        return t = n >= 4 || 0 === n ? Zo(t) : Zo.ceil(t), ma(Zo.count(ia(t), t) + (4 === ia(t).getUTCDay()), e, 2)
    }

    function ds(t) {
        return t.getUTCDay()
    }

    function ps(t, e) {
        return ma(Xo.count(ia(t), t), e, 2)
    }

    function ms(t, e) {
        return ma(t.getUTCFullYear() % 100, e, 2)
    }

    function gs(t, e) {
        return ma(t.getUTCFullYear() % 1e4, e, 4)
    }

    function ys() {
        return "+0000"
    }

    function vs() {
        return "%"
    }

    function _s(t) {
        return +t
    }

    function bs(t) {
        return Math.floor(+t / 1e3)
    }

    !function (t) {
        sa = function (t) {
            var e = t.dateTime, n = t.date, i = t.time, r = t.periods, o = t.days, a = t.shortDays, s = t.months,
                c = t.shortMonths, f = ya(r), l = va(r), u = ya(o), h = va(o), d = ya(a), p = va(a), m = ya(s),
                g = va(s), y = ya(c), v = va(c), _ = {
                    a: function (t) {
                        return a[t.getDay()]
                    },
                    A: function (t) {
                        return o[t.getDay()]
                    },
                    b: function (t) {
                        return c[t.getMonth()]
                    },
                    B: function (t) {
                        return s[t.getMonth()]
                    },
                    c: null,
                    d: Fa,
                    e: Fa,
                    f: Va,
                    H: Ha,
                    I: ja,
                    j: Ua,
                    L: Ba,
                    m: qa,
                    M: Ya,
                    p: function (t) {
                        return r[+(t.getHours() >= 12)]
                    },
                    Q: _s,
                    s: bs,
                    S: za,
                    u: Ga,
                    U: $a,
                    V: Xa,
                    w: Ka,
                    W: Qa,
                    x: null,
                    X: null,
                    y: Za,
                    Y: Ja,
                    Z: ts,
                    "%": vs
                }, b = {
                    a: function (t) {
                        return a[t.getUTCDay()]
                    },
                    A: function (t) {
                        return o[t.getUTCDay()]
                    },
                    b: function (t) {
                        return c[t.getUTCMonth()]
                    },
                    B: function (t) {
                        return s[t.getUTCMonth()]
                    },
                    c: null,
                    d: es,
                    e: es,
                    f: as,
                    H: ns,
                    I: is,
                    j: rs,
                    L: os,
                    m: ss,
                    M: cs,
                    p: function (t) {
                        return r[+(t.getUTCHours() >= 12)]
                    },
                    Q: _s,
                    s: bs,
                    S: fs,
                    u: ls,
                    U: us,
                    V: hs,
                    w: ds,
                    W: ps,
                    x: null,
                    X: null,
                    y: ms,
                    Y: gs,
                    Z: ys,
                    "%": vs
                }, x = {
                    a: function (t, e, n) {
                        var i = d.exec(e.slice(n));
                        return i ? (t.w = p[i[0].toLowerCase()], n + i[0].length) : -1
                    }, A: function (t, e, n) {
                        var i = u.exec(e.slice(n));
                        return i ? (t.w = h[i[0].toLowerCase()], n + i[0].length) : -1
                    }, b: function (t, e, n) {
                        var i = y.exec(e.slice(n));
                        return i ? (t.m = v[i[0].toLowerCase()], n + i[0].length) : -1
                    }, B: function (t, e, n) {
                        var i = m.exec(e.slice(n));
                        return i ? (t.m = g[i[0].toLowerCase()], n + i[0].length) : -1
                    }, c: function (t, n, i) {
                        return E(t, e, n, i)
                    }, d: Aa, e: Aa, f: Oa, H: Pa, I: Pa, j: Na, L: Ia, m: Sa, M: Ma, p: function (t, e, n) {
                        var i = f.exec(e.slice(n));
                        return i ? (t.p = l[i[0].toLowerCase()], n + i[0].length) : -1
                    }, Q: Wa, s: Ra, S: ka, u: ba, U: xa, V: wa, w: _a, W: Ta, x: function (t, e, i) {
                        return E(t, n, e, i)
                    }, X: function (t, e, n) {
                        return E(t, i, e, n)
                    }, y: Da, Y: Ea, Z: Ca, "%": La
                };

            function w(t, e) {
                return function (n) {
                    var i, r, o, a = [], s = -1, c = 0, f = t.length;
                    for (n instanceof Date || (n = new Date(+n)); ++s < f;) 37 === t.charCodeAt(s) && (a.push(t.slice(c, s)), null != (r = ua[i = t.charAt(++s)]) ? i = t.charAt(++s) : r = "e" === i ? " " : "0", (o = e[i]) && (i = o(n, r)), a.push(i), c = s + 1);
                    return a.push(t.slice(c, s)), a.join("")
                }
            }

            function T(t, e) {
                return function (n) {
                    var i, r, o = aa(1900);
                    if (E(o, t, n += "", 0) != n.length) return null;
                    if ("Q" in o) return new Date(o.Q);
                    if ("p" in o && (o.H = o.H % 12 + 12 * o.p), "V" in o) {
                        if (o.V < 1 || o.V > 53) return null;
                        "w" in o || (o.w = 1), "Z" in o ? (i = (r = (i = oa(aa(o.y))).getUTCDay()) > 4 || 0 === r ? Xo.ceil(i) : Xo(i), i = zo.offset(i, 7 * (o.V - 1)), o.y = i.getUTCFullYear(), o.m = i.getUTCMonth(), o.d = i.getUTCDate() + (o.w + 6) % 7) : (i = (r = (i = e(aa(o.y))).getDay()) > 4 || 0 === r ? ko.ceil(i) : ko(i), i = No.offset(i, 7 * (o.V - 1)), o.y = i.getFullYear(), o.m = i.getMonth(), o.d = i.getDate() + (o.w + 6) % 7)
                    } else ("W" in o || "U" in o) && ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0), r = "Z" in o ? oa(aa(o.y)).getUTCDay() : e(aa(o.y)).getDay(), o.m = 0, o.d = "W" in o ? (o.w + 6) % 7 + 7 * o.W - (r + 5) % 7 : o.w + 7 * o.U - (r + 6) % 7);
                    return "Z" in o ? (o.H += o.Z / 100 | 0, o.M += o.Z % 100, oa(o)) : e(o)
                }
            }

            function E(t, e, n, i) {
                for (var r, o, a = 0, s = e.length, c = n.length; a < s;) {
                    if (i >= c) return -1;
                    if (37 === (r = e.charCodeAt(a++))) {
                        if (r = e.charAt(a++), !(o = x[r in ua ? e.charAt(a++) : r]) || (i = o(t, n, i)) < 0) return -1
                    } else if (r != n.charCodeAt(i++)) return -1
                }
                return i
            }

            return _.x = w(n, _), _.X = w(i, _), _.c = w(e, _), b.x = w(n, b), b.X = w(i, b), b.c = w(e, b), {
                format: function (t) {
                    var e = w(t += "", _);
                    return e.toString = function () {
                        return t
                    }, e
                }, parse: function (t) {
                    var e = T(t += "", ra);
                    return e.toString = function () {
                        return t
                    }, e
                }, utcFormat: function (t) {
                    var e = w(t += "", b);
                    return e.toString = function () {
                        return t
                    }, e
                }, utcParse: function (t) {
                    var e = T(t, oa);
                    return e.toString = function () {
                        return t
                    }, e
                }
            }
        }(t), ca = sa.format, sa.parse, fa = sa.utcFormat, la = sa.utcParse
    }({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    Date.prototype.toISOString || fa("%Y-%m-%dT%H:%M:%S.%LZ");
    +new Date("2000-01-01T00:00:00.000Z") || la("%Y-%m-%dT%H:%M:%S.%LZ");
    var xs = 1e3, ws = 60 * xs, Ts = 60 * ws, Es = 24 * Ts, Ds = 7 * Es, Cs = 30 * Es, Ss = 365 * Es;

    function As(t) {
        return new Date(t)
    }

    function Ns(t) {
        return t instanceof Date ? +t : +new Date(+t)
    }

    function Ps(t, e, n, i, o, a, s, c, f) {
        var l = lo(ao, Re), u = l.invert, h = l.domain, d = f(".%L"), m = f(":%S"), g = f("%I:%M"), y = f("%I %p"),
            v = f("%a %d"), _ = f("%b %d"), b = f("%B"), x = f("%Y"),
            w = [[s, 1, xs], [s, 5, 5 * xs], [s, 15, 15 * xs], [s, 30, 30 * xs], [a, 1, ws], [a, 5, 5 * ws], [a, 15, 15 * ws], [a, 30, 30 * ws], [o, 1, Ts], [o, 3, 3 * Ts], [o, 6, 6 * Ts], [o, 12, 12 * Ts], [i, 1, Es], [i, 2, 2 * Es], [n, 1, Ds], [e, 1, Cs], [e, 3, 3 * Cs], [t, 1, Ss]];

        function T(r) {
            return (s(r) < r ? d : a(r) < r ? m : o(r) < r ? g : i(r) < r ? y : e(r) < r ? n(r) < r ? v : _ : t(r) < r ? b : x)(r)
        }

        function E(e, n, i, o) {
            if (null == e && (e = 10), "number" == typeof e) {
                var a = Math.abs(i - n) / e, s = r(function (t) {
                    return t[2]
                }).right(w, a);
                s === w.length ? (o = p(n / Ss, i / Ss, e), e = t) : s ? (o = (s = w[a / w[s - 1][2] < w[s][2] / a ? s - 1 : s])[1], e = s[0]) : (o = Math.max(p(n, i, e), 1), e = c)
            }
            return null == o ? e : e.every(o)
        }

        return l.invert = function (t) {
            return new Date(u(t))
        }, l.domain = function (t) {
            return arguments.length ? h(eo.call(t, Ns)) : h().map(As)
        }, l.ticks = function (t, e) {
            var n, i = h(), r = i[0], o = i[i.length - 1], a = o < r;
            return a && (n = r, r = o, o = n), n = (n = E(t, r, o, e)) ? n.range(r, o + 1) : [], a ? n.reverse() : n
        }, l.tickFormat = function (t, e) {
            return null == e ? T : f(e)
        }, l.nice = function (t, e) {
            var n = h();
            return (t = E(t, n[0], n[n.length - 1], e)) ? h(po(n, t)) : l
        }, l.copy = function () {
            return fo(l, Ps(t, e, n, i, o, a, s, c, f))
        }, l
    }

    var Ms = function () {
        return Ps(Bo, Ho, Mo, No, So, Do, To, _o, ca).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)])
    };
    var ks = function (t) {
            for (var e = t.length / 6 | 0, n = new Array(e), i = 0; i < e;) n[i] = "#" + t.slice(6 * i, 6 * ++i);
            return n
        },
        Is = (ks("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), ks("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), ks("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), ks("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), ks("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), ks("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), ks("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), ks("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), ks("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), function (t) {
            return We(t[t.length - 1])
        });
    Is(new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(ks)), Is(new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(ks)), Is(new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(ks)), Is(new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(ks)), Is(new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(ks)), Is(new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(ks)), Is(new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(ks)), Is(new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(ks)), Is(new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(ks)), Is(new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(ks)), Is(new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(ks)), Is(new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(ks)), Is(new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(ks)), Is(new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(ks)), Is(new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(ks)), Is(new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(ks)), Is(new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(ks)), Is(new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(ks)), Is(new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(ks)), Is(new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(ks)), Is(new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(ks)), Is(new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(ks)), Is(new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(ks)), Is(new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(ks)), Is(new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(ks)), Is(new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(ks)), Is(new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(ks)), nn(Ce(300, .5, 0), Ce(-240, .5, 1)), nn(Ce(-100, .75, .35), Ce(80, 1.5, .8)), nn(Ce(260, .75, .35), Ce(80, 1.5, .8)), Ce(), $t(), Math.PI, Math.PI;

    function Os(t) {
        var e = t.length;
        return function (n) {
            return t[Math.max(0, Math.min(e - 1, Math.floor(n * e)))]
        }
    }

    Os(ks("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")), Os(ks("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), Os(ks("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), Os(ks("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")), Math.abs, Math.atan2, Math.cos, Math.max, Math.min, Math.sin, Math.sqrt;
    var Ls = 1e-12, Ws = Math.PI, Rs = 2 * Ws;

    function Fs(t) {
        this._context = t
    }

    Fs.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._point = 0
        }, lineEnd: function () {
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, e) {
            switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2;
                default:
                    this._context.lineTo(t, e)
            }
        }
    };
    var Hs = function (t) {
        return new Fs(t)
    };
    Us(Hs);

    function js(t) {
        this._curve = t
    }

    function Us(t) {
        function e(e) {
            return new js(t(e))
        }

        return e._curve = t, e
    }

    js.prototype = {
        areaStart: function () {
            this._curve.areaStart()
        }, areaEnd: function () {
            this._curve.areaEnd()
        }, lineStart: function () {
            this._curve.lineStart()
        }, lineEnd: function () {
            this._curve.lineEnd()
        }, point: function (t, e) {
            this._curve.point(e * Math.sin(t), e * -Math.cos(t))
        }
    };
    Array.prototype.slice;
    Math.sqrt(1 / 3);
    var Bs = Math.sin(Ws / 10) / Math.sin(7 * Ws / 10),
        Vs = (Math.sin(Rs / 10), Math.cos(Rs / 10), Math.sqrt(3), Math.sqrt(3), Math.sqrt(12), function () {
        });

    function qs(t, e, n) {
        t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + e) / 6, (t._y0 + 4 * t._y1 + n) / 6)
    }

    function Ys(t) {
        this._context = t
    }

    Ys.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 3:
                    qs(this, this._x1, this._y1);
                case 2:
                    this._context.lineTo(this._x1, this._y1)
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, e) {
            switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                default:
                    qs(this, t, e)
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e
        }
    };

    function zs(t) {
        this._context = t
    }

    zs.prototype = {
        areaStart: Vs, areaEnd: Vs, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 1:
                    this._context.moveTo(this._x2, this._y2), this._context.closePath();
                    break;
                case 2:
                    this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                    break;
                case 3:
                    this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
            }
        }, point: function (t, e) {
            switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._x2 = t, this._y2 = e;
                    break;
                case 1:
                    this._point = 2, this._x3 = t, this._y3 = e;
                    break;
                case 2:
                    this._point = 3, this._x4 = t, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + e) / 6);
                    break;
                default:
                    qs(this, t, e)
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e
        }
    };

    function Gs(t) {
        this._context = t
    }

    Gs.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
        }, lineEnd: function () {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, e) {
            switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                    var n = (this._x0 + 4 * this._x1 + t) / 6, i = (this._y0 + 4 * this._y1 + e) / 6;
                    this._line ? this._context.lineTo(n, i) : this._context.moveTo(n, i);
                    break;
                case 3:
                    this._point = 4;
                default:
                    qs(this, t, e)
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e
        }
    };

    function $s(t, e) {
        this._basis = new Ys(t), this._beta = e
    }

    $s.prototype = {
        lineStart: function () {
            this._x = [], this._y = [], this._basis.lineStart()
        }, lineEnd: function () {
            var t = this._x, e = this._y, n = t.length - 1;
            if (n > 0) for (var i, r = t[0], o = e[0], a = t[n] - r, s = e[n] - o, c = -1; ++c <= n;) i = c / n, this._basis.point(this._beta * t[c] + (1 - this._beta) * (r + i * a), this._beta * e[c] + (1 - this._beta) * (o + i * s));
            this._x = this._y = null, this._basis.lineEnd()
        }, point: function (t, e) {
            this._x.push(+t), this._y.push(+e)
        }
    };
    (function t(e) {
        function n(t) {
            return 1 === e ? new Ys(t) : new $s(t, e)
        }

        return n.beta = function (e) {
            return t(+e)
        }, n
    })(.85);

    function Xs(t, e, n) {
        t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - e), t._y2 + t._k * (t._y1 - n), t._x2, t._y2)
    }

    function Ks(t, e) {
        this._context = t, this._k = (1 - e) / 6
    }

    Ks.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;
                case 3:
                    Xs(this, this._x1, this._y1)
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, e) {
            switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2, this._x1 = t, this._y1 = e;
                    break;
                case 2:
                    this._point = 3;
                default:
                    Xs(this, t, e)
            }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
        }
    };
    (function t(e) {
        function n(t) {
            return new Ks(t, e)
        }

        return n.tension = function (e) {
            return t(+e)
        }, n
    })(0);

    function Qs(t, e) {
        this._context = t, this._k = (1 - e) / 6
    }

    Qs.prototype = {
        areaStart: Vs, areaEnd: Vs, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 2:
                    this._context.lineTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 3:
                    this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
            }
        }, point: function (t, e) {
            switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._x3 = t, this._y3 = e;
                    break;
                case 1:
                    this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = e);
                    break;
                case 2:
                    this._point = 3, this._x5 = t, this._y5 = e;
                    break;
                default:
                    Xs(this, t, e)
            }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
        }
    };
    (function t(e) {
        function n(t) {
            return new Qs(t, e)
        }

        return n.tension = function (e) {
            return t(+e)
        }, n
    })(0);

    function Zs(t, e) {
        this._context = t, this._k = (1 - e) / 6
    }

    Zs.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
        }, lineEnd: function () {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, e) {
            switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;
                case 3:
                    this._point = 4;
                default:
                    Xs(this, t, e)
            }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
        }
    };
    (function t(e) {
        function n(t) {
            return new Zs(t, e)
        }

        return n.tension = function (e) {
            return t(+e)
        }, n
    })(0);

    function Js(t, e, n) {
        var i = t._x1, r = t._y1, o = t._x2, a = t._y2;
        if (t._l01_a > Ls) {
            var s = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a, c = 3 * t._l01_a * (t._l01_a + t._l12_a);
            i = (i * s - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c, r = (r * s - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c
        }
        if (t._l23_a > Ls) {
            var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a, l = 3 * t._l23_a * (t._l23_a + t._l12_a);
            o = (o * f + t._x1 * t._l23_2a - e * t._l12_2a) / l, a = (a * f + t._y1 * t._l23_2a - n * t._l12_2a) / l
        }
        t._context.bezierCurveTo(i, r, o, a, t._x2, t._y2)
    }

    function tc(t, e) {
        this._context = t, this._alpha = e
    }

    tc.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;
                case 3:
                    this.point(this._x2, this._y2)
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, e) {
            if (t = +t, e = +e, this._point) {
                var n = this._x2 - t, i = this._y2 - e;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + i * i, this._alpha))
            }
            switch (this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                default:
                    Js(this, t, e)
            }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
        }
    };
    (function t(e) {
        function n(t) {
            return e ? new tc(t, e) : new Ks(t, 0)
        }

        return n.alpha = function (e) {
            return t(+e)
        }, n
    })(.5);

    function ec(t, e) {
        this._context = t, this._alpha = e
    }

    ec.prototype = {
        areaStart: Vs, areaEnd: Vs, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 2:
                    this._context.lineTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 3:
                    this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
            }
        }, point: function (t, e) {
            if (t = +t, e = +e, this._point) {
                var n = this._x2 - t, i = this._y2 - e;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + i * i, this._alpha))
            }
            switch (this._point) {
                case 0:
                    this._point = 1, this._x3 = t, this._y3 = e;
                    break;
                case 1:
                    this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = e);
                    break;
                case 2:
                    this._point = 3, this._x5 = t, this._y5 = e;
                    break;
                default:
                    Js(this, t, e)
            }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
        }
    };
    (function t(e) {
        function n(t) {
            return e ? new ec(t, e) : new Qs(t, 0)
        }

        return n.alpha = function (e) {
            return t(+e)
        }, n
    })(.5);

    function nc(t, e) {
        this._context = t, this._alpha = e
    }

    nc.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        }, lineEnd: function () {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, e) {
            if (t = +t, e = +e, this._point) {
                var n = this._x2 - t, i = this._y2 - e;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + i * i, this._alpha))
            }
            switch (this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;
                case 3:
                    this._point = 4;
                default:
                    Js(this, t, e)
            }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
        }
    };
    (function t(e) {
        function n(t) {
            return e ? new nc(t, e) : new Zs(t, 0)
        }

        return n.alpha = function (e) {
            return t(+e)
        }, n
    })(.5);

    function ic(t) {
        this._context = t
    }

    ic.prototype = {
        areaStart: Vs, areaEnd: Vs, lineStart: function () {
            this._point = 0
        }, lineEnd: function () {
            this._point && this._context.closePath()
        }, point: function (t, e) {
            t = +t, e = +e, this._point ? this._context.lineTo(t, e) : (this._point = 1, this._context.moveTo(t, e))
        }
    };

    function rc(t) {
        return t < 0 ? -1 : 1
    }

    function oc(t, e, n) {
        var i = t._x1 - t._x0, r = e - t._x1, o = (t._y1 - t._y0) / (i || r < 0 && -0),
            a = (n - t._y1) / (r || i < 0 && -0), s = (o * r + a * i) / (i + r);
        return (rc(o) + rc(a)) * Math.min(Math.abs(o), Math.abs(a), .5 * Math.abs(s)) || 0
    }

    function ac(t, e) {
        var n = t._x1 - t._x0;
        return n ? (3 * (t._y1 - t._y0) / n - e) / 2 : e
    }

    function sc(t, e, n) {
        var i = t._x0, r = t._y0, o = t._x1, a = t._y1, s = (o - i) / 3;
        t._context.bezierCurveTo(i + s, r + s * e, o - s, a - s * n, o, a)
    }

    function cc(t) {
        this._context = t
    }

    function fc(t) {
        this._context = new lc(t)
    }

    function lc(t) {
        this._context = t
    }

    function uc(t) {
        this._context = t
    }

    function hc(t) {
        var e, n, i = t.length - 1, r = new Array(i), o = new Array(i), a = new Array(i);
        for (r[0] = 0, o[0] = 2, a[0] = t[0] + 2 * t[1], e = 1; e < i - 1; ++e) r[e] = 1, o[e] = 4, a[e] = 4 * t[e] + 2 * t[e + 1];
        for (r[i - 1] = 2, o[i - 1] = 7, a[i - 1] = 8 * t[i - 1] + t[i], e = 1; e < i; ++e) n = r[e] / o[e - 1], o[e] -= n, a[e] -= n * a[e - 1];
        for (r[i - 1] = a[i - 1] / o[i - 1], e = i - 2; e >= 0; --e) r[e] = (a[e] - r[e + 1]) / o[e];
        for (o[i - 1] = (t[i] + r[i - 1]) / 2, e = 0; e < i - 1; ++e) o[e] = 2 * t[e + 1] - r[e + 1];
        return [r, o]
    }

    cc.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x1, this._y1);
                    break;
                case 3:
                    sc(this, this._t0, ac(this, this._t0))
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, e) {
            var n = NaN;
            if (e = +e, (t = +t) !== this._x1 || e !== this._y1) {
                switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, sc(this, ac(this, n = oc(this, t, e)), n);
                        break;
                    default:
                        sc(this, this._t0, n = oc(this, t, e))
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = n
            }
        }
    }, (fc.prototype = Object.create(cc.prototype)).point = function (t, e) {
        cc.prototype.point.call(this, e, t)
    }, lc.prototype = {
        moveTo: function (t, e) {
            this._context.moveTo(e, t)
        }, closePath: function () {
            this._context.closePath()
        }, lineTo: function (t, e) {
            this._context.lineTo(e, t)
        }, bezierCurveTo: function (t, e, n, i, r, o) {
            this._context.bezierCurveTo(e, t, i, n, o, r)
        }
    }, uc.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x = [], this._y = []
        }, lineEnd: function () {
            var t = this._x, e = this._y, n = t.length;
            if (n) if (this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]), 2 === n) this._context.lineTo(t[1], e[1]); else for (var i = hc(t), r = hc(e), o = 0, a = 1; a < n; ++o, ++a) this._context.bezierCurveTo(i[0][o], r[0][o], i[1][o], r[1][o], t[a], e[a]);
            (this._line || 0 !== this._line && 1 === n) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
        }, point: function (t, e) {
            this._x.push(+t), this._y.push(+e)
        }
    };

    function dc(t, e) {
        this._context = t, this._t = e
    }

    dc.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x = this._y = NaN, this._point = 0
        }, lineEnd: function () {
            0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
        }, point: function (t, e) {
            switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2;
                default:
                    if (this._t <= 0) this._context.lineTo(this._x, e), this._context.lineTo(t, e); else {
                        var n = this._x * (1 - this._t) + t * this._t;
                        this._context.lineTo(n, this._y), this._context.lineTo(n, e)
                    }
            }
            this._x = t, this._y = e
        }
    };

    function pc() {
        this._ = null
    }

    function mc(t) {
        t.U = t.C = t.L = t.R = t.P = t.N = null
    }

    function gc(t, e) {
        var n = e, i = e.R, r = n.U;
        r ? r.L === n ? r.L = i : r.R = i : t._ = i, i.U = r, n.U = i, n.R = i.L, n.R && (n.R.U = n), i.L = n
    }

    function yc(t, e) {
        var n = e, i = e.L, r = n.U;
        r ? r.L === n ? r.L = i : r.R = i : t._ = i, i.U = r, n.U = i, n.L = i.R, n.L && (n.L.U = n), i.R = n
    }

    function vc(t) {
        for (; t.L;) t = t.L;
        return t
    }

    pc.prototype = {
        constructor: pc, insert: function (t, e) {
            var n, i, r;
            if (t) {
                if (e.P = t, e.N = t.N, t.N && (t.N.P = e), t.N = e, t.R) {
                    for (t = t.R; t.L;) t = t.L;
                    t.L = e
                } else t.R = e;
                n = t
            } else this._ ? (t = vc(this._), e.P = null, e.N = t, t.P = t.L = e, n = t) : (e.P = e.N = null, this._ = e, n = null);
            for (e.L = e.R = null, e.U = n, e.C = !0, t = e; n && n.C;) n === (i = n.U).L ? (r = i.R) && r.C ? (n.C = r.C = !1, i.C = !0, t = i) : (t === n.R && (gc(this, n), n = (t = n).U), n.C = !1, i.C = !0, yc(this, i)) : (r = i.L) && r.C ? (n.C = r.C = !1, i.C = !0, t = i) : (t === n.L && (yc(this, n), n = (t = n).U), n.C = !1, i.C = !0, gc(this, i)), n = t.U;
            this._.C = !1
        }, remove: function (t) {
            t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
            var e, n, i, r = t.U, o = t.L, a = t.R;
            if (n = o ? a ? vc(a) : o : a, r ? r.L === t ? r.L = n : r.R = n : this._ = n, o && a ? (i = n.C, n.C = t.C, n.L = o, o.U = n, n !== a ? (r = n.U, n.U = t.U, t = n.R, r.L = t, n.R = a, a.U = n) : (n.U = r, r = n, t = n.R)) : (i = t.C, t = n), t && (t.U = r), !i) if (t && t.C) t.C = !1; else {
                do {
                    if (t === this._) break;
                    if (t === r.L) {
                        if ((e = r.R).C && (e.C = !1, r.C = !0, gc(this, r), e = r.R), e.L && e.L.C || e.R && e.R.C) {
                            e.R && e.R.C || (e.L.C = !1, e.C = !0, yc(this, e), e = r.R), e.C = r.C, r.C = e.R.C = !1, gc(this, r), t = this._;
                            break
                        }
                    } else if ((e = r.L).C && (e.C = !1, r.C = !0, yc(this, r), e = r.L), e.L && e.L.C || e.R && e.R.C) {
                        e.L && e.L.C || (e.R.C = !1, e.C = !0, gc(this, e), e = r.L), e.C = r.C, r.C = e.L.C = !1, yc(this, r), t = this._;
                        break
                    }
                    e.C = !0, t = r, r = r.U
                } while (!t.C);
                t && (t.C = !1)
            }
        }
    };
    var _c = pc;

    function bc(t, e, n, i) {
        var r = [null, null], o = Bc.push(r) - 1;
        return r.left = t, r.right = e, n && wc(r, t, e, n), i && wc(r, e, t, i), jc[t.index].halfedges.push(o), jc[e.index].halfedges.push(o), r
    }

    function xc(t, e, n) {
        var i = [e, n];
        return i.left = t, i
    }

    function wc(t, e, n, i) {
        t[0] || t[1] ? t.left === n ? t[1] = i : t[0] = i : (t[0] = i, t.left = e, t.right = n)
    }

    function Tc(t, e, n, i, r) {
        var o, a = t[0], s = t[1], c = a[0], f = a[1], l = 0, u = 1, h = s[0] - c, d = s[1] - f;
        if (o = e - c, h || !(o > 0)) {
            if (o /= h, h < 0) {
                if (o < l) return;
                o < u && (u = o)
            } else if (h > 0) {
                if (o > u) return;
                o > l && (l = o)
            }
            if (o = i - c, h || !(o < 0)) {
                if (o /= h, h < 0) {
                    if (o > u) return;
                    o > l && (l = o)
                } else if (h > 0) {
                    if (o < l) return;
                    o < u && (u = o)
                }
                if (o = n - f, d || !(o > 0)) {
                    if (o /= d, d < 0) {
                        if (o < l) return;
                        o < u && (u = o)
                    } else if (d > 0) {
                        if (o > u) return;
                        o > l && (l = o)
                    }
                    if (o = r - f, d || !(o < 0)) {
                        if (o /= d, d < 0) {
                            if (o > u) return;
                            o > l && (l = o)
                        } else if (d > 0) {
                            if (o < l) return;
                            o < u && (u = o)
                        }
                        return !(l > 0 || u < 1) || (l > 0 && (t[0] = [c + l * h, f + l * d]), u < 1 && (t[1] = [c + u * h, f + u * d]), !0)
                    }
                }
            }
        }
    }

    function Ec(t, e, n, i, r) {
        var o = t[1];
        if (o) return !0;
        var a, s, c = t[0], f = t.left, l = t.right, u = f[0], h = f[1], d = l[0], p = l[1], m = (u + d) / 2,
            g = (h + p) / 2;
        if (p === h) {
            if (m < e || m >= i) return;
            if (u > d) {
                if (c) {
                    if (c[1] >= r) return
                } else c = [m, n];
                o = [m, r]
            } else {
                if (c) {
                    if (c[1] < n) return
                } else c = [m, r];
                o = [m, n]
            }
        } else if (s = g - (a = (u - d) / (p - h)) * m, a < -1 || a > 1) if (u > d) {
            if (c) {
                if (c[1] >= r) return
            } else c = [(n - s) / a, n];
            o = [(r - s) / a, r]
        } else {
            if (c) {
                if (c[1] < n) return
            } else c = [(r - s) / a, r];
            o = [(n - s) / a, n]
        } else if (h < p) {
            if (c) {
                if (c[0] >= i) return
            } else c = [e, a * e + s];
            o = [i, a * i + s]
        } else {
            if (c) {
                if (c[0] < e) return
            } else c = [i, a * i + s];
            o = [e, a * e + s]
        }
        return t[0] = c, t[1] = o, !0
    }

    function Dc(t, e) {
        var n = t.site, i = e.left, r = e.right;
        return n === r && (r = i, i = n), r ? Math.atan2(r[1] - i[1], r[0] - i[0]) : (n === i ? (i = e[1], r = e[0]) : (i = e[0], r = e[1]), Math.atan2(i[0] - r[0], r[1] - i[1]))
    }

    function Cc(t, e) {
        return e[+(e.left !== t.site)]
    }

    function Sc(t, e) {
        return e[+(e.left === t.site)]
    }

    var Ac, Nc = [];

    function Pc(t) {
        var e = t.P, n = t.N;
        if (e && n) {
            var i = e.site, r = t.site, o = n.site;
            if (i !== o) {
                var a = r[0], s = r[1], c = i[0] - a, f = i[1] - s, l = o[0] - a, u = o[1] - s, h = 2 * (c * u - f * l);
                if (!(h >= -qc)) {
                    var d = c * c + f * f, p = l * l + u * u, m = (u * d - f * p) / h, g = (c * p - l * d) / h,
                        y = Nc.pop() || new function () {
                            mc(this), this.x = this.y = this.arc = this.site = this.cy = null
                        };
                    y.arc = t, y.site = r, y.x = m + a, y.y = (y.cy = g + s) + Math.sqrt(m * m + g * g), t.circle = y;
                    for (var v = null, _ = Uc._; _;) if (y.y < _.y || y.y === _.y && y.x <= _.x) {
                        if (!_.L) {
                            v = _.P;
                            break
                        }
                        _ = _.L
                    } else {
                        if (!_.R) {
                            v = _;
                            break
                        }
                        _ = _.R
                    }
                    Uc.insert(v, y), v || (Ac = y)
                }
            }
        }
    }

    function Mc(t) {
        var e = t.circle;
        e && (e.P || (Ac = e.N), Uc.remove(e), Nc.push(e), mc(e), t.circle = null)
    }

    var kc = [];

    function Ic(t) {
        var e = kc.pop() || new function () {
            mc(this), this.edge = this.site = this.circle = null
        };
        return e.site = t, e
    }

    function Oc(t) {
        Mc(t), Hc.remove(t), kc.push(t), mc(t)
    }

    function Lc(t) {
        var e = t.circle, n = e.x, i = e.cy, r = [n, i], o = t.P, a = t.N, s = [t];
        Oc(t);
        for (var c = o; c.circle && Math.abs(n - c.circle.x) < Vc && Math.abs(i - c.circle.cy) < Vc;) o = c.P, s.unshift(c), Oc(c), c = o;
        s.unshift(c), Mc(c);
        for (var f = a; f.circle && Math.abs(n - f.circle.x) < Vc && Math.abs(i - f.circle.cy) < Vc;) a = f.N, s.push(f), Oc(f), f = a;
        s.push(f), Mc(f);
        var l, u = s.length;
        for (l = 1; l < u; ++l) f = s[l], c = s[l - 1], wc(f.edge, c.site, f.site, r);
        c = s[0], (f = s[u - 1]).edge = bc(c.site, f.site, null, r), Pc(c), Pc(f)
    }

    function Wc(t) {
        for (var e, n, i, r, o = t[0], a = t[1], s = Hc._; s;) if ((i = Rc(s, a) - o) > Vc) s = s.L; else {
            if (!((r = o - Fc(s, a)) > Vc)) {
                i > -Vc ? (e = s.P, n = s) : r > -Vc ? (e = s, n = s.N) : e = n = s;
                break
            }
            if (!s.R) {
                e = s;
                break
            }
            s = s.R
        }
        !function (t) {
            jc[t.index] = {site: t, halfedges: []}
        }(t);
        var c = Ic(t);
        if (Hc.insert(e, c), e || n) {
            if (e === n) return Mc(e), n = Ic(e.site), Hc.insert(c, n), c.edge = n.edge = bc(e.site, c.site), Pc(e), void Pc(n);
            if (n) {
                Mc(e), Mc(n);
                var f = e.site, l = f[0], u = f[1], h = t[0] - l, d = t[1] - u, p = n.site, m = p[0] - l, g = p[1] - u,
                    y = 2 * (h * g - d * m), v = h * h + d * d, _ = m * m + g * g,
                    b = [(g * v - d * _) / y + l, (h * _ - m * v) / y + u];
                wc(n.edge, f, p, b), c.edge = bc(f, t, null, b), n.edge = bc(t, p, null, b), Pc(e), Pc(n)
            } else c.edge = bc(e.site, c.site)
        }
    }

    function Rc(t, e) {
        var n = t.site, i = n[0], r = n[1], o = r - e;
        if (!o) return i;
        var a = t.P;
        if (!a) return -1 / 0;
        var s = (n = a.site)[0], c = n[1], f = c - e;
        if (!f) return s;
        var l = s - i, u = 1 / o - 1 / f, h = l / f;
        return u ? (-h + Math.sqrt(h * h - 2 * u * (l * l / (-2 * f) - c + f / 2 + r - o / 2))) / u + i : (i + s) / 2
    }

    function Fc(t, e) {
        var n = t.N;
        if (n) return Rc(n, e);
        var i = t.site;
        return i[1] === e ? i[0] : 1 / 0
    }

    var Hc, jc, Uc, Bc, Vc = 1e-6, qc = 1e-12;

    function Yc(t, e) {
        return e[1] - t[1] || e[0] - t[0]
    }

    function zc(t, e) {
        var n, i, r, o = t.sort(Yc).pop();
        for (Bc = [], jc = new Array(t.length), Hc = new _c, Uc = new _c; ;) if (r = Ac, o && (!r || o[1] < r.y || o[1] === r.y && o[0] < r.x)) o[0] === n && o[1] === i || (Wc(o), n = o[0], i = o[1]), o = t.pop(); else {
            if (!r) break;
            Lc(r.arc)
        }
        if (function () {
            for (var t, e, n, i, r = 0, o = jc.length; r < o; ++r) if ((t = jc[r]) && (i = (e = t.halfedges).length)) {
                var a = new Array(i), s = new Array(i);
                for (n = 0; n < i; ++n) a[n] = n, s[n] = Dc(t, Bc[e[n]]);
                for (a.sort(function (t, e) {
                    return s[e] - s[t]
                }), n = 0; n < i; ++n) s[n] = e[a[n]];
                for (n = 0; n < i; ++n) e[n] = s[n]
            }
        }(), e) {
            var a = +e[0][0], s = +e[0][1], c = +e[1][0], f = +e[1][1];
            !function (t, e, n, i) {
                for (var r, o = Bc.length; o--;) Ec(r = Bc[o], t, e, n, i) && Tc(r, t, e, n, i) && (Math.abs(r[0][0] - r[1][0]) > Vc || Math.abs(r[0][1] - r[1][1]) > Vc) || delete Bc[o]
            }(a, s, c, f), function (t, e, n, i) {
                var r, o, a, s, c, f, l, u, h, d, p, m, g = jc.length, y = !0;
                for (r = 0; r < g; ++r) if (o = jc[r]) {
                    for (a = o.site, s = (c = o.halfedges).length; s--;) Bc[c[s]] || c.splice(s, 1);
                    for (s = 0, f = c.length; s < f;) p = (d = Sc(o, Bc[c[s]]))[0], m = d[1], u = (l = Cc(o, Bc[c[++s % f]]))[0], h = l[1], (Math.abs(p - u) > Vc || Math.abs(m - h) > Vc) && (c.splice(s, 0, Bc.push(xc(a, d, Math.abs(p - t) < Vc && i - m > Vc ? [t, Math.abs(u - t) < Vc ? h : i] : Math.abs(m - i) < Vc && n - p > Vc ? [Math.abs(h - i) < Vc ? u : n, i] : Math.abs(p - n) < Vc && m - e > Vc ? [n, Math.abs(u - n) < Vc ? h : e] : Math.abs(m - e) < Vc && p - t > Vc ? [Math.abs(h - e) < Vc ? u : t, e] : null)) - 1), ++f);
                    f && (y = !1)
                }
                if (y) {
                    var v, _, b, x = 1 / 0;
                    for (r = 0, y = null; r < g; ++r) (o = jc[r]) && (b = (v = (a = o.site)[0] - t) * v + (_ = a[1] - e) * _) < x && (x = b, y = o);
                    if (y) {
                        var w = [t, e], T = [t, i], E = [n, i], D = [n, e];
                        y.halfedges.push(Bc.push(xc(a = y.site, w, T)) - 1, Bc.push(xc(a, T, E)) - 1, Bc.push(xc(a, E, D)) - 1, Bc.push(xc(a, D, w)) - 1)
                    }
                }
                for (r = 0; r < g; ++r) (o = jc[r]) && (o.halfedges.length || delete jc[r])
            }(a, s, c, f)
        }
        this.edges = Bc, this.cells = jc, Hc = Uc = Bc = jc = null
    }

    zc.prototype = {
        constructor: zc, polygons: function () {
            var t = this.edges;
            return this.cells.map(function (e) {
                var n = e.halfedges.map(function (n) {
                    return Cc(e, t[n])
                });
                return n.data = e.site.data, n
            })
        }, triangles: function () {
            var t = [], e = this.edges;
            return this.cells.forEach(function (n, i) {
                if (o = (r = n.halfedges).length) for (var r, o, a, s, c, f, l = n.site, u = -1, h = e[r[o - 1]], d = h.left === l ? h.right : h.left; ++u < o;) a = d, d = (h = e[r[u]]).left === l ? h.right : h.left, a && d && i < a.index && i < d.index && (c = a, f = d, ((s = l)[0] - f[0]) * (c[1] - s[1]) - (s[0] - c[0]) * (f[1] - s[1]) < 0) && t.push([l.data, a.data, d.data])
            }), t
        }, links: function () {
            return this.edges.filter(function (t) {
                return t.right
            }).map(function (t) {
                return {source: t.left.data, target: t.right.data}
            })
        }, find: function (t, e, n) {
            for (var i, r, o = this, a = o._found || 0, s = o.cells.length; !(r = o.cells[a]);) if (++a >= s) return null;
            var c = t - r.site[0], f = e - r.site[1], l = c * c + f * f;
            do {
                r = o.cells[i = a], a = null, r.halfedges.forEach(function (n) {
                    var i = o.edges[n], s = i.left;
                    if (s !== r.site && s || (s = i.right)) {
                        var c = t - s[0], f = e - s[1], u = c * c + f * f;
                        u < l && (l = u, a = s.index)
                    }
                })
            } while (null !== a);
            return o._found = i, null == n || l <= n * n ? r.site : null
        }
    };

    function Gc(t, e, n) {
        this.k = t, this.x = e, this.y = n
    }

    Gc.prototype = {
        constructor: Gc, scale: function (t) {
            return 1 === t ? this : new Gc(this.k * t, this.x, this.y)
        }, translate: function (t, e) {
            return 0 === t & 0 === e ? this : new Gc(this.k, this.x + this.k * t, this.y + this.k * e)
        }, apply: function (t) {
            return [t[0] * this.k + this.x, t[1] * this.k + this.y]
        }, applyX: function (t) {
            return t * this.k + this.x
        }, applyY: function (t) {
            return t * this.k + this.y
        }, invert: function (t) {
            return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
        }, invertX: function (t) {
            return (t - this.x) / this.k
        }, invertY: function (t) {
            return (t - this.y) / this.k
        }, rescaleX: function (t) {
            return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
        }, rescaleY: function (t) {
            return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
        }, toString: function () {
            return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
        }
    };
    new Gc(1, 0, 0);
    Gc.prototype;
    n(23);
    var $c = n(13);
    window.CarafeData = $c, window.D3BurndownChart = class {
        constructor(t, e) {
            this.selector = t, this.maxY = 0;
            let n = {
                width: 800,
                height: 600,
                margin: {top: 30, right: 10, bottom: 80, left: 55},
                title: "Title",
                xAxisDisplayInterval: 50,
                yAxisTitle: "Y Axis Title",
                xAxisTitle: "X Axis Title",
                yAxisAdditionalRangeStoryPoints: 20,
                xAxisAdditionalRangeDays: 14,
                axisFontSize: 13,
                rectWidth: null,
                bigFontSize: null,
                medFontSize: null,
                buildProjections: !0,
                showActuals: !1
            };
            e = "object" == typeof e ? function (t, e) {
                for (let n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                return t
            }(n, e) : n, this.options = e, this.sprintRowPrototype = function (t) {
                this.estimateDate = t.estimateDate, this.completedFinalSPWithCreep = t.completedFinalSPWithCreep, this.verifyFinalSPWithCreep = t.verifyFinalSPWithCreep, this.storyPoints = t.storyPoints, this.verifyStoryPoints = t.verifyStoryPoints, this.completedStoryPoints = t.completedStoryPoints, this.verifyEstimatedTotalDevDays = t.verifyEstimatedTotalDevDays, this.completedEstimatedTotalDevDays = t.completedEstimatedTotalDevDays, this.verifyEstimatedTotalDevDaysWithCreep = t.verifyEstimatedTotalDevDaysWithCreep, this.completedEstimatedTotalDevDaysWithCreep = t.completedEstimatedTotalDevDaysWithCreep, this.storyPoints = t.storyPoints, this.lowestY = function () {
                    return -this.xCurrentTotalAddedScope
                }, this.doneY = function () {
                    return this.verifyStoryPointsY() + +this.xDone
                }, this.verifyStoryPointsY = function () {
                    return this.storyPointsY() + +this.xAlmostDone
                }, this.storyPointsY = function () {
                    return this.addedScopeY() + +this.xStoryPoints
                }, this.addedScopeY = function () {
                    return this.lowestY() + +this.xAddedScope
                }, this.treatAsUTC = function (t) {
                    let e = new Date(t);
                    return e.setMinutes(e.getMinutes() - e.getTimezoneOffset()), e
                }, this.daysBetween = function (t, e) {
                    return (this.treatAsUTC(e) - this.treatAsUTC(t)) / 864e5
                }, this.addDays = function (t, e) {
                    let n = new Date(t);
                    return n.setTime(n.getTime() + 864e5 * e), n
                }, this.tooltip = function () {
                    let t = "<B>Date:</B> " + this.estimateDate + "<BR>";
                    return t += "<B>Done:</B> " + parseInt(this.xDone) + "<BR>", t += "<B>Almost Done:</B> " + parseInt(this.xAlmostDone) + "<BR>", t += "<B>Story Points:</B> " + parseInt(this.xStoryPoints) + "<BR>", t += "<B>Added Scope:</B> " + parseInt(this.xAddedScope) + "<BR>"
                }, this.parseInt = function () {
                    return parseInt(this)
                }
            }, this.graphWidth = e.width - e.margin.left - e.margin.right, this.graphHeight = e.height - e.margin.top - e.margin.bottom
        }

        render(t, e) {
            this.clearDebugLinesAndCircles(), e = this.convertToObjects(e, this.sprintRowPrototype);
            let n = ca("%m-%d"), i = e.map(function (t) {
                return new Date(t.estimateDate)
            }), r = 0 - this.buildTotalAddedScope(t, e), o = e[0], a = e.slice(-1).pop(), s = new Date(t);
            s.setTime(s.getTime() - this.options.xAxisAdditionalRangeDays / 2 * 864e5), this.setDataBasedDefaults(e);
            let c = m(e, t => t.xCurrentTotalAddedScope), f = {};
            this.options.buildProjections && (f = {
                endingScopeValue: r,
                firstBar: {date: new Date(o.estimateDate), endingScopeValue: o.storyPoints},
                verifyEstimated: {date: o.addDays(o.estimateDate, a.verifyEstimatedTotalDevDays), endingScopeValue: r},
                verifyComplete: {
                    date: o.addDays(o.estimateDate, a.completedEstimatedTotalDevDays),
                    endingScopeValue: r
                },
                lastBar: {date: new Date(a.estimateDate), endingScopeValue: a.storyPoints},
                verifyEstimatedWithCreep: {
                    date: o.addDays(o.estimateDate, a.verifyEstimatedTotalDevDaysWithCreep),
                    endingScopeValue: o.storyPoints - a.verifyFinalSPWithCreep
                },
                verifyCompleteWithCreep: {
                    date: o.addDays(o.estimateDate, a.completedEstimatedTotalDevDaysWithCreep),
                    endingScopeValue: o.storyPoints - a.completedFinalSPWithCreep
                }
            });
            let l = new Date(Math.max.apply(null, i));
            l.setDate(l.getDate() + this.options.xAxisAdditionalRangeDays / 2), this.options.buildProjections && (f.verifyCompleteWithCreep.date > l || f.verifyComplete.date > l) && (f.verifyCompleteWithCreep.date >= f.verifyComplete.date ? (l = new Date(f.verifyCompleteWithCreep.date)).setDate(l.getDate() + this.options.xAxisAdditionalRangeDays / 2) : (l = new Date(f.verifyComplete.date)).setDate(l.getDate() + this.options.xAxisAdditionalRangeDays / 2));
            let u = Dt(this.selector).append("svg").attr("class", "chart").attr("width", this.options.width).attr("height", this.options.height).append("g").attr("transform", "translate(" + this.options.margin.left + ", " + this.options.margin.top + ")"),
                h = Ms().domain([s, l]).range([0, this.graphWidth]),
                d = -c - this.options.yAxisAdditionalRangeStoryPoints;
            this.options.buildProjections && (d = f.verifyCompleteWithCreep.endingScopeValue < 0 ? -(-f.verifyCompleteWithCreep.endingScopeValue + +this.options.yAxisAdditionalRangeStoryPoints) : -(f.verifyCompleteWithCreep.endingScopeValue + +this.options.yAxisAdditionalRangeStoryPoints));
            let p = function t() {
                var e = lo(ao, Re);
                return e.copy = function () {
                    return fo(e, t())
                }, ho(e)
            }().domain([d, this.getMaxY() + +this.options.yAxisAdditionalRangeStoryPoints / 2]).range([this.graphHeight, 0]);
            this.options.buildProjections && (f.firstBar.x = h(f.firstBar.date), f.firstBar.y = p(f.firstBar.endingScopeValue), f.verifyEstimated.dot = {
                x: h(f.verifyEstimated.date),
                y: p(f.verifyEstimated.endingScopeValue)
            }, f.verifyComplete.dot = {
                x: h(f.verifyComplete.date),
                y: p(f.verifyComplete.endingScopeValue)
            }, f.verifyEstimatedWithCreep.dot = {
                x: h(f.verifyEstimatedWithCreep.date),
                y: p(f.verifyEstimatedWithCreep.endingScopeValue)
            }, f.verifyCompleteWithCreep.dot = {
                x: h(f.verifyCompleteWithCreep.date),
                y: p(f.verifyCompleteWithCreep.endingScopeValue)
            }, f.lastBar.x = h(f.lastBar.date), f.lastBar.y = p(f.lastBar.endingScopeValue));
            let g = {};
            g.firstDayZero = {
                color: "red",
                x: h(new Date(o.estimateDate)),
                y: p(0)
            }, g.dayLastScopeValue = {color: "yellow", x: h(new Date(a.estimateDate)), y: p(r)};
            let y = Dt("body").append("div").attr("class", "tooltip").style("opacity", 0);
            this.mouseoverRectTransition = (t => {
                y.transition().duration(200).style("opacity", .9), y.html(t.tooltip()).style("left", mt.pageX + 15 + "px").style("top", mt.pageY - 28 + "px")
            }), this.mouseoutRectTransition = function () {
                y.transition().duration(500).style("opacity", 0)
            }, "weekly" === this.options.xAxisDisplayInterval ? this.options.xAxisDisplayInterval = Mo : "monthly" === this.options.xAxisDisplayInterval && (this.options.xAxisDisplayInterval = jo);
            let v = S(x, _).scale(h).ticks(this.options.xAxisDisplayInterval).tickFormat(ca("%m-%d"));
            var _;
            let b = function (t) {
                return S(w, t)
            }().scale(p);
            this.buildGridLines.call(this, u, p, h, this.options.xAxisDisplayInterval), u.append("line").style("stroke", "grey").attr("x1", 0).attr("y1", p(0)).attr("x2", this.graphWidth).attr("y2", p(0));
            let T = r + (+a.xStoryPoints + a.xAddedScope + a.xAlmostDone),
                E = -o.xCurrentTotalAddedScope + o.xStoryPoints >= -a.xCurrentTotalAddedScope + a.xStoryPoints + a.xAddedScope,
                D = o.storyPoints > T;
            E && this.buildOrangeLine(u, h, o, p, a), D && this.buildGreenSolidLine(u, h, p, o, a, r, T), this.options.buildProjections && (0 !== r && u.append("line").style("stroke", "red").style("stroke-dasharray", "3, 3").attr("x1", g.dayLastScopeValue.x).attr("y1", g.dayLastScopeValue.y).attr("x2", f.verifyCompleteWithCreep.dot.x).attr("y2", f.verifyCompleteWithCreep.dot.y), E && (u.append("line").style("stroke", "orange").style("stroke-dasharray", "3, 3").attr("x1", h(new Date(a.estimateDate))).attr("y1", p(-a.xCurrentTotalAddedScope + a.xStoryPoints + a.xAddedScope)).attr("x2", f.verifyEstimated.dot.x).attr("y2", f.verifyEstimated.dot.y), u.append("line").style("stroke", "orange").style("stroke-dasharray", "3, 3").attr("x1", f.verifyEstimated.dot.x).attr("y1", f.verifyEstimated.dot.y).attr("x2", f.verifyEstimatedWithCreep.dot.x).attr("y2", f.verifyEstimatedWithCreep.dot.y), u.append("circle").style("fill", "orange").attr("cx", f.verifyEstimated.dot.x).attr("cy", f.verifyEstimated.dot.y).attr("r", 5).on("mouseover", function () {
                y.transition().duration(200).style("opacity", .9), y.html("Verify Estimated:<BR>Date: " + n(f.verifyEstimated.date) + "<BR>Scope: " + parseInt(f.verifyEstimated.endingScopeValue)).style("left", mt.pageX + 15 + "px").style("top", mt.pageY - 28 + "px")
            }).on("mouseout", this.mouseoutRectTransition), this.createDebugDot("Verifiy Estimated", n(f.verifyEstimated.date), parseInt(f.verifyEstimated.endingScopeValue)), u.append("circle").style("fill", "orange").attr("cx", f.verifyEstimatedWithCreep.dot.x).attr("cy", f.verifyEstimatedWithCreep.dot.y).attr("r", 5).on("mouseover", function () {
                y.transition().duration(200).style("opacity", .9), y.html("Verify Estimated With Creep:<BR>Date: " + n(f.verifyEstimatedWithCreep.date) + "<BR>Scope: " + parseInt(f.verifyEstimatedWithCreep.endingScopeValue)).style("left", mt.pageX + 15 + "px").style("top", mt.pageY - 28 + "px")
            }).on("mouseout", this.mouseoutRectTransition), this.createDebugDot("Verifiy Estimated With Creep", n(f.verifyEstimatedWithCreep.date), parseInt(f.verifyEstimatedWithCreep.endingScopeValue))), D && (this.buildGreenDashedLine(u, h, p, a, f, r, T), u.append("circle").style("fill", "green").attr("cx", f.verifyComplete.dot.x).attr("cy", f.verifyComplete.dot.y).attr("r", 5).on("mouseover", function () {
                y.transition().duration(200).style("opacity", .9), y.html("Verify Complete:<BR>Date: " + n(f.verifyComplete.date) + "<BR>Scope: " + parseInt(f.verifyComplete.endingScopeValue)).style("left", mt.pageX + 15 + "px").style("top", mt.pageY - 28 + "px")
            }).on("mouseout", this.mouseoutRectTransition), this.createDebugDot("Verifiy Complete", n(f.verifyComplete.date), parseInt(f.verifyComplete.endingScopeValue)), u.append("circle").style("fill", "green").attr("cx", f.verifyCompleteWithCreep.dot.x).attr("cy", f.verifyCompleteWithCreep.dot.y).attr("r", 5).on("mouseover", function () {
                y.transition().duration(200).style("opacity", .9), y.html("Verify Complete With Creep:<BR>Date: " + n(f.verifyCompleteWithCreep.date) + "<BR>Scope: " + parseInt(f.verifyCompleteWithCreep.endingScopeValue)).style("left", mt.pageX + 15 + "px").style("top", mt.pageY - 28 + "px")
            }).on("mouseout", this.mouseoutRectTransition), this.createDebugDot("Verifiy Complete With Creep", n(f.verifyCompleteWithCreep.date), parseInt(f.verifyCompleteWithCreep.endingScopeValue))), 0 !== r && u.append("line").style("stroke", "blue").attr("x1", h(new Date(a.estimateDate))).attr("y1", p(r)).attr("x2", h(l)).attr("y2", p(r)));
            let C = u.selectAll(".chart").data(e).enter();
            this.buildGreenRectangles.call(this, C, h, p), this.buildOrangeRectangles.call(this, C, h, p), this.buildBlueRectangles.call(this, C, h, p, y), this.buildRedRectangles.call(this, u, e, h, p);
            let A = u.selectAll("text").data(e).enter();
            this.options.showActuals ? this.buildActuals(u, h, p, e) : (this.buildCompletedScopeLabels(A, h, p), this.buildAlmostCompleteLabels(A, h, p), this.buildStoryPointLabels(A, h, p), this.buildAddedScopeLabels(A, h, p)), u.append("g").attr("class", "x axis").attr("transform", "translate(0, " + this.graphHeight + ")").call(v).selectAll("text").style("text-anchor", "end").attr("transform", function () {
                return "rotate(-65)"
            }), u.append("g").attr("class", "y axis").call(b), u.append("text").attr("x", (this.options.width - this.options.margin.left - this.options.margin.right) / 2).attr("y", this.options.height - 45).style("text-anchor", "middle").style("font-size", this.options.axisFontSize + "px").text(this.options.xAxisTitle), u.append("text").attr("x", -this.options.height / 2).attr("y", -45).style("text-anchor", "start").text(this.options.yAxisTitle).style("font-size", this.options.axisFontSize + "px").attr("transform", function () {
                return "rotate(-90)"
            }), this.options.showHeaderText && this.buildChartHeader(u), this.buildRedLine(u, g, r)
        }

        buildDatesAboveBars(t, e, n, i, r) {
            t.selectAll("gText").data(e).enter().append("svg:g").attr("transform", t => {
                let e = +t.xAddedScope + +t.xStoryPoints + +t.xAlmostDone + +t.xDone, r = n(0) - n(e);
                return "translate(" + (i(new Date(t.estimateDate)) - this.options.rectWidth / 2 + this.options.medFontSize / 2) + "," + (n(t.lowestY()) - r) + ")"
            }).append("text").text(t => r(new Date(t.estimateDate))).attr("text-anchor", "start").style("font-size", this.options.medFontSize + "px").attr("transform", function () {
                return "translate(" + this.options.rectWidth / 2 + ",-10) rotate(-90,0,0)"
            })
        }

        buildAddedScopeLabels(t, e, n) {
            t.append("text").text(t => +t.xAddedScope > 0 && +t.xAddedScope < 25 ? "" : +t.xAddedScope > 0 ? "+" + parseInt(t.xAddedScope) : t.xAddedScope < 0 && t.xAddedScope > -25 ? "" : +t.xAddedScope < 0 ? -parseInt(t.xAddedScope) : void 0).attr("text-anchor", "middle").attr("x", t => e(new Date(t.estimateDate))).attr("y", t => n(t.lowestY() + t.xAddedScope) + this.options.medFontSize).attr("class", "soliantD3Label").attr("font-size", this.options.medFontSize + "px").attr("fill", "black")
        }

        buildStoryPointLabels(t, e, n) {
            t.append("text").text(t => +t.xStoryPoints > 0 && +t.xStoryPoints < 25 ? "" : +t.xStoryPoints > 0 ? parseInt(t.xStoryPoints) : void 0).attr("text-anchor", "middle").attr("x", t => e(new Date(t.estimateDate))).attr("y", t => n(t.storyPointsY()) + this.options.medFontSize).attr("class", "soliantD3Label").attr("font-size", this.options.medFontSize + "px").attr("fill", "black")
        }

        buildAlmostCompleteLabels(t, e, n) {
            t.append("text").text(t => +t.xAlmostDone > 0 && +t.xAlmostDone < 25 ? "" : +t.xAlmostDone > 0 ? -parseInt(t.xAlmostDone) : void 0).attr("text-anchor", "middle").attr("x", t => e(new Date(t.estimateDate))).attr("y", t => n(t.verifyStoryPointsY()) + this.options.medFontSize).attr("class", "soliantD3Label").attr("font-size", this.options.medFontSize + "px").attr("fill", "black")
        }

        buildCompletedScopeLabels(t, e, n) {
            t.append("text").text(t => +t.xDone > 0 && +t.xDone < 25 ? "" : +t.xDone > 0 ? -parseInt(t.xDone) : void 0).attr("text-anchor", "middle").attr("x", t => e(new Date(t.estimateDate))).attr("y", t => n(t.doneY()) + this.options.medFontSize).attr("class", "soliantD3Label").attr("font-size", this.options.medFontSize + "px").attr("fill", "black")
        }

        buildGreenRectangles(t, e, n) {
            t.append("rect").attr("class", "completedScopeBar").attr("x", t => e(new Date(t.estimateDate)) - this.options.rectWidth / 2).attr("y", t => n(t.doneY())).attr("width", this.options.rectWidth).attr("height", t => n(0) - n(+t.xDone)).on("mouseover", this.mouseoverRectTransition).on("mouseout", this.mouseoutRectTransition)
        }

        buildOrangeRectangles(t, e, n) {
            t.append("rect").attr("class", "verifyStoryPointsBar").attr("x", t => e(new Date(t.estimateDate)) - this.options.rectWidth / 2).attr("y", t => n(t.verifyStoryPointsY())).attr("width", this.options.rectWidth).attr("height", t => n(0) - n(+t.xAlmostDone)).on("mouseover", this.mouseoverRectTransition).on("mouseout", this.mouseoutRectTransition)
        }

        buildBlueRectangles(t, e, n, i) {
            t.append("rect").attr("class", "storyPointsBar").attr("x", t => e(new Date(t.estimateDate)) - this.options.rectWidth / 2).attr("y", t => n(t.storyPointsY())).attr("width", this.options.rectWidth).attr("height", t => n(0) - n(+t.xStoryPoints)).on("mouseover", t => {
                i.transition().duration(200).style("opacity", .9), i.html(t.tooltip()).style("left", mt.pageX + 15 + "px").style("top", mt.pageY - 28 + "px")
            }).on("mouseout", () => {
                i.transition().duration(500).style("opacity", 0)
            }).on("mouseover", this.mouseoverRectTransition).on("mouseout", this.mouseoutRectTransition)
        }

        buildRedRectangles(t, e, n, i) {
            t.selectAll(".chart").data(e).enter().append("rect").attr("class", "addedScopeBar").attr("x", t => n(new Date(t.estimateDate)) - this.options.rectWidth / 2).attr("y", t => i(t.lowestY() + t.xAddedScope)).attr("width", this.options.rectWidth).attr("height", t => {
                if (void 0 !== t.xAddedScope) return i(0) - i(+t.xAddedScope)
            }).on("mouseover", this.mouseoverRectTransition).on("mouseout", this.mouseoutRectTransition)
        }

        buildChartHeader(t) {
            t.append("text").attr("x", (this.options.width - this.options.margin.left - this.options.margin.right) / 2).attr("y", 0).style("text-anchor", "middle").style("font-size", this.options.bigFontSize + "px").text(this.options.title)
        }

        buildRedLine(t, e, n) {
            0 !== n && t.append("line").style("stroke", "red").attr("x1", e.firstDayZero.x).attr("y1", e.firstDayZero.y).attr("x2", e.dayLastScopeValue.x).attr("y2", e.dayLastScopeValue.y)
        }

        buildOrangeLine(t, e, n, i, r) {
            t.append("line").style("stroke", "orange").attr("x1", e(new Date(n.estimateDate))).attr("y1", i(-n.xCurrentTotalAddedScope + n.xStoryPoints)).attr("x2", e(new Date(r.estimateDate))).attr("y2", i(-r.xCurrentTotalAddedScope + r.xStoryPoints + r.xAddedScope))
        }

        buildGridLines(t, e, n, i) {
            t.selectAll("line.horizontalGrid").data(e.ticks(16)).enter().append("line").style("stroke-dasharray", "3, 3").attr({
                class: "horizontalGrid",
                x1: 0,
                x2: this.graphWidth,
                y1: t => e(t),
                y2: t => e(t),
                fill: "none",
                "shape-rendering": "crispEdges",
                stroke: "LightGrey",
                "stroke-width": "1px"
            }), t.selectAll("line.verticalGrid").data(n.ticks(i)).enter().append("line").style("stroke-dasharray", "3, 3").attr({
                class: "verticalGrid",
                y1: 0,
                y2: this.graphHeight,
                x1: t => n(t),
                x2: t => n(t),
                fill: "none",
                "shape-rendering": "crispEdges",
                stroke: "LightGrey",
                "stroke-width": "1px"
            })
        }

        setMaxY(t) {
            t > this.maxY && (this.maxY = t)
        }

        getMaxY() {
            return this.maxY + this.options.margin.top
        }

        buildGreenSolidLine(t, e, n, i, r, o, a) {
            t.append("line").style("stroke", "green").attr("x1", e(new Date(i.estimateDate))).attr("y1", n(i.storyPoints)).attr("x2", e(new Date(r.estimateDate))).attr("y2", n(a))
        }

        buildActuals(t, e, n, i) {
            let r = null, o = null, a = null, s = null, c = null;
            $.each(i, (i, f) => {
                null !== c ? (t.append("line").style("stroke", "orange").style("stroke-width", "2").attr("x1", e(new Date(c.estimateDate))).attr("y1", n(r)).attr("x2", e(new Date(f.estimateDate))).attr("y2", n(-f.xCurrentTotalAddedScope + f.xStoryPoints + f.xAddedScope)), r = -f.xCurrentTotalAddedScope + f.xStoryPoints + f.xAddedScope, t.append("line").style("stroke", "green").style("stroke-width", "2").attr("x1", e(new Date(c.estimateDate))).attr("y1", n(o)).attr("x2", e(new Date(f.estimateDate))).attr("y2", n(-f.xCurrentTotalAddedScope + f.xStoryPoints + f.xAlmostDone + f.xAddedScope)), o = -f.xCurrentTotalAddedScope + f.xStoryPoints + f.xAlmostDone + f.xAddedScope, t.append("line").style("stroke", "red").style("stroke-width", "2").attr("x1", e(new Date(c.estimateDate))).attr("y1", n(s)).attr("x2", e(new Date(f.estimateDate))).attr("y2", n(-f.xCurrentTotalAddedScope)), s = -f.xCurrentTotalAddedScope) : (s = -f.xCurrentTotalAddedScope, r = o = a = -f.xCurrentTotalAddedScope + f.xStoryPoints + f.xAddedScope), c = f
            })
        }

        buildGreenDashedLine(t, e, n, i, r, o, a) {
            t.append("line").style("stroke", "green").style("stroke-dasharray", "3, 3").attr("x1", e(new Date(i.estimateDate))).attr("y1", n(a)).attr("x2", r.verifyComplete.dot.x).attr("y2", r.verifyComplete.dot.y), t.append("line").style("stroke", "green").style("stroke-dasharray", "3, 3").attr("x1", r.verifyComplete.dot.x).attr("y1", r.verifyComplete.dot.y).attr("x2", r.verifyCompleteWithCreep.dot.x).attr("y2", r.verifyCompleteWithCreep.dot.y)
        }

        clearDebugLinesAndCircles() {
            document.getElementById("debugBars") && $(".debugLine").each(function (t, e) {
                e.remove()
            })
        }

        createDebugLine(t) {
            if (document.getElementById("debugBars")) {
                let e = "<tr class='debugLine'>";
                e += "<td style='text-align: right'>{{estimateDate}}</td>", e += "<td style='text-align: right'>{{#xDone}}{{parseInt}}{{/xDone}}</td>", e += "<td style='text-align: right'>{{#xAlmostDone}}{{parseInt}}{{/xAlmostDone}}</td>", e += "<td style='text-align: right'>{{#xStoryPoints}}{{parseInt}}{{/xStoryPoints}}</td>", e += "<td style='text-align: right'>{{#xAddedScope}}{{parseInt}}{{/xAddedScope}}</td>", e += "</tr>";
                let n = Mustache.to_html(e, t);
                $("#debugBars").append(n)
            }
        }

        createDebugDot(t, e, n) {
            let i = {name: t, date: e, scope: n};
            if (document.getElementById("debugDots")) {
                let t = "<tr class='debugLine'>";
                t += "<td style='text-align: right'>{{name}}</td>", t += "<td style='text-align: right'>{{date}}</td>", t += "<td style='text-align: right'>{{scope}}</td>", t += "</tr>";
                let e = Mustache.to_html(t, i);
                $("#debugDots").append(e)
            }
        }

        buildTotalAddedScope(t, e) {
            let n = null, i = null, r = 0, o = null;
            return $.each(e, (e, a) => {
                if (null == n && (n = a.storyPoints), n !== a.storyPoints ? (a.xAddedScope = a.storyPoints - n, n = a.storyPoints, r += +a.xAddedScope) : a.xAddedScope = 0, a.xAlmostDone = a.verifyStoryPoints - a.completedStoryPoints, a.xStoryPoints = a.storyPoints - +a.verifyStoryPoints - +a.xAddedScope, a.xCurrentTotalAddedScope = r, null == i) a.xDone = a.completedStoryPoints; else {
                    let t = i - a.xStoryPoints;
                    a.xAlmostDone > 0 && (t -= a.xAlmostDone), a.xDone = t
                }
                i = a.xStoryPoints, a.xAlmostDone > 0 && (i += a.xAlmostDone), a.xAddedScope > 0 && (i += a.xAddedScope), null == o && ((o = jQuery.extend({}, a)).xStoryPoints = a.storyPoints - +a.verifyStoryPoints - +a.xAddedScope, o.xStoryPoints += +a.verifyStoryPoints, o.estimateDate = t, o.xAlmostDone = 0, o.xDone = 0, this.createDebugLine(o), this.setMaxY(o.xStoryPoints - r)), this.setMaxY(+a.xStoryPoints + +a.xDone + +a.xAlmostDone - r), this.createDebugLine(a)
            }), e.unshift(o), r
        }

        setDataBasedDefaults(t) {
            null == this.options.rectWidth && (this.options.rectWidth = Math.min(Math.max(parseInt(.8 * this.graphWidth / t.length), 10), 200)), null == this.options.bigFontSize && (this.options.bigFontSize = Math.min(Math.max(parseInt(.8 * this.graphWidth / t.length), 6), 48)), null == this.options.medFontSize && (this.options.medFontSize = Math.min(Math.max(parseInt(.4 * this.graphWidth / t.length), 6), 48))
        }

        convertToObjects(t, e) {
            let n = [];
            return t.forEach(function (t) {
                n.push(new e(t))
            }), n
        }
    }
}, , function (t, e, n) {
}]);
//# sourceMappingURL=SoliantBurndownChart.bundle.js.map