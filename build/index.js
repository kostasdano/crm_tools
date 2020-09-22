parcelRequire = (function (e, r, t, n) {
  var i,
    o = 'function' == typeof parcelRequire && parcelRequire,
    u = 'function' == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = 'function' == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && 'string' == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = 'MODULE_NOT_FOUND'), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = l)
      : 'function' == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    FKmJ: [
      function (require, module, exports) {
        'use strict';
        function e() {
          document.getElementsByClassName('view-empty message')[0].innerHTML =
            '<div class="no-results"><div><h1>No Results</h1><p>Sorry, there are no records to display</p></div></div>';
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.addNoResultsMessage = e);
      },
      {},
    ],
    gxT7: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          Object.defineProperty(exports, 'addNoResultsMessage', {
            enumerable: !0,
            get: function () {
              return e.addNoResultsMessage;
            },
          });
        var e = require('./EntityLists');
      },
      { './EntityLists': 'FKmJ' },
    ],
    V8c9: [
      function (require, module, exports) {
        'use strict';
        function e() {
          window.location.href.split('/').length <= 5 &&
            ((document.getElementsByTagName('html')[0].style.display = 'none'),
            (window.location.href = window.location.origin + '/music-users'));
        }
        function n() {
          'profile' == window.location.pathname.split('/')[2] &&
            ((document.getElementsByClassName('menu-open')[0].style.display = 'none'),
            (document.getElementsByClassName('open-menu-container')[0].style.cursor = 'auto'),
            $('.open-menu-container').hover(function () {
              $(this).css('background-color', 'inherit');
            }));
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.homepageRedirect = e),
          (exports.hideToggleButton = n);
      },
      {},
    ],
    PGsE: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          Object.defineProperty(exports, 'homepageRedirect', {
            enumerable: !0,
            get: function () {
              return e.homepageRedirect;
            },
          }),
          Object.defineProperty(exports, 'hideToggleButton', {
            enumerable: !0,
            get: function () {
              return e.hideToggleButton;
            },
          });
        var e = require('./Generic');
      },
      { './Generic': 'V8c9' },
    ],
    MrQr: [
      function (require, module, exports) {
        'use strict';
        function e() {
          var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          document.getElementById('wrapper').classList.toggle('wrapper-hidden'),
            document.getElementById('sidebar-wrapper').classList.toggle('sidebar-wrapper-hidden'),
            document.getElementById('sidebar').classList.toggle('sidebar-hidden');
          for (var s = document.getElementsByClassName('sidebar-link'), t = 0; t < s.length; t++)
            s[t].classList.toggle('li-a-hidden');
          var o = document.getElementsByClassName('sidebar-col-icon');
          for (t = 0; t < o.length; t++) o[t].classList.toggle('sidebar-col-icon-hidden');
          var a = document.getElementsByClassName('sidebar-col-label');
          for (t = 0; t < a.length; t++) a[t].classList.toggle('hidden-element');
          var d = document.getElementsByClassName('sidebar-arrow');
          for (t = 0; t < d.length; t++) d[t].classList.toggle('hidden-element');
          var l = document.getElementsByClassName('dropdown-sidebar');
          for (t = 0; t < l.length; t++) l[t].classList.toggle('sidebar-hidden');
          var n = document.getElementsByClassName('sidebar-icon');
          for (t = 0; t < n.length; t++) n[t].classList.toggle('sidebar-icon-hidden');
          var i = document.getElementsByClassName('sidebar-sub-icon');
          for (t = 0; t < i.length; t++) i[t].classList.toggle('sidebar-icon-hidden');
          var r = document.getElementsByClassName('dropdown-row');
          for (t = 0; t < r.length; t++) r[t].classList.toggle('dropdown-row-hidden');
          var g = document.getElementsByClassName('sidebar-link');
          for (t = 0; t < g.length; t++) g[t].classList.toggle('dropdown-row-hidden');
          e &&
            ('open' === window.sessionStorage.getItem('sidebar')
              ? (window.sessionStorage.removeItem('sidebar'),
                window.sessionStorage.setItem('sidebar', 'closed'),
                $('[data-toggle="tooltip"]').tooltip('enable'))
              : (window.sessionStorage.removeItem('sidebar'),
                window.sessionStorage.setItem('sidebar', 'open'),
                $('[data-toggle="tooltip"]').tooltip('disable')));
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.toggleSidebar = e);
      },
      {},
    ],
    or6k: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.genericSidebar = t),
          (exports.toggleDropdown = o);
        var e = require('./ToggleSidebar');
        function t() {
          null === window.sessionStorage.getItem('sidebar')
            ? (console.log('initializing sidebar token'),
              window.sessionStorage.setItem('sidebar', 'open'))
            : 'closed' === window.sessionStorage.getItem('sidebar') &&
              ($('[data-toggle="tooltip"]').tooltip('enable'), (0, e.toggleSidebar)(!1));
          for (
            var t = window.location.pathname,
              o = document.getElementsByClassName('sidebar-link'),
              s =
                '' === t.split('/')[2]
                  ? '/' + t.split('/')[1] + '/'
                  : '/' +
                    window.location.pathname.split('/')[1] +
                    '/' +
                    window.location.pathname.split('/')[2] +
                    '/',
              a = 0;
            a < o.length;
            a++
          )
            o[a].getAttribute('href') === s && (o[a].className += ' sidebar-nav-active');
        }
        function o(e) {
          e.preventDefault();
          var t = e.target.classList,
            o = t[t.length - 1],
            s = document.getElementById(o),
            a = document.getElementById(o + '-arrow'),
            i = a.classList;
          if (
            ('none' === s.style.display ? (s.style.display = 'block') : (s.style.display = 'none'),
            i.contains('sidebar-arrow-up'))
          )
            i.remove('sidebar-arrow-up');
          else {
            var n = 'sidebar-arrow-up ' + i;
            a.setAttribute('class', n);
          }
        }
      },
      { './ToggleSidebar': 'MrQr' },
    ],
    ptY9: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          Object.defineProperty(exports, 'genericSidebar', {
            enumerable: !0,
            get: function () {
              return e.genericSidebar;
            },
          }),
          Object.defineProperty(exports, 'toggleDropdown', {
            enumerable: !0,
            get: function () {
              return e.toggleDropdown;
            },
          }),
          Object.defineProperty(exports, 'toggleSidebar', {
            enumerable: !0,
            get: function () {
              return r.toggleSidebar;
            },
          });
        var e = require('./GenericSidebar'),
          r = require('./ToggleSidebar');
      },
      { './GenericSidebar': 'or6k', './ToggleSidebar': 'MrQr' },
    ],
    Fb9D: [function (require, module, exports) {}, {}],
    O0GW: [
      function (require, module, exports) {},
      { './media\\arrow_down.svg': [['arrow_down.0628fcbd.svg', 'vXn2'], 'vXn2'] },
    ],
    qc9L: [
      function (require, module, exports) {},
      { './media\\search_icon.png': [['search_icon.74ab8311.png', 'oSL6'], 'oSL6'] },
    ],
    XqQB: [
      function (require, module, exports) {},
      {
        './custom-navbar.css': 'Fb9D',
        './entity-form.css': 'O0GW',
        './entity-list.css': 'qc9L',
        './generic.css': 'Fb9D',
        './grid.css': 'Fb9D',
        './sidebar.css': 'Fb9D',
      },
    ],
    Focm: [
      function (require, module, exports) {
        'use strict';
        var e = require('./EntityLists'),
          r = require('./Generic'),
          n = require('./Sidebar');
        function t(e, r) {
          if (!(e instanceof r)) throw new TypeError('Cannot call a class as a function');
        }
        function o(e, r) {
          for (var n = 0; n < r.length; n++) {
            var t = r[n];
            (t.enumerable = t.enumerable || !1),
              (t.configurable = !0),
              'value' in t && (t.writable = !0),
              Object.defineProperty(e, t.key, t);
          }
        }
        function i(e, r, n) {
          return r && o(e.prototype, r), n && o(e, n), e;
        }
        require('./css/index.css');
        var u = {
            addNoResultsMessage: function () {
              return (0, e.addNoResultsMessage)();
            },
            homepageRedirect: function () {
              return (0, r.homepageRedirect)();
            },
            hideToggleButton: function () {
              return (0, r.hideToggleButton)();
            },
            genericSidebar: function () {
              return (0, n.genericSidebar)();
            },
            toggleDropdown: function (e) {
              return (0, n.toggleDropdown)(e);
            },
            toggleSidebar: function () {
              var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              return (0, n.toggleSidebar)(e);
            },
          },
          a = (function () {
            function e() {
              t(this, e);
            }
            return (
              i(e, null, [
                {
                  key: 'logAvailableTools',
                  value: function () {
                    console.log(Object.keys(u));
                  },
                },
                {
                  key: 'applyTool',
                  value: function (e) {
                    var r = Object.keys(u).some(function (r) {
                        return r === e;
                      }),
                      n = u[e];
                    if (!r) throw new Error('No tool exists with name: ' + e);
                    return n;
                  },
                },
              ]),
              e
            );
          })();
        Object.defineProperty(window, 'OrfiumSupportCRM', { value: a, writable: !1 });
      },
      {
        './EntityLists': 'gxT7',
        './Generic': 'PGsE',
        './Sidebar': 'ptY9',
        './css/index.css': 'XqQB',
      },
    ],
  },
  {},
  ['Focm'],
  null
);
//# sourceMappingURL=index.js.map
