(() => {
  "use strict";
  var r = {
      426: (r, n, t) => {
        var o = t(645);
        t.n(o)()(function (r) {
          return r[1];
        }).push([r.id, "body {\n  background-color: darkgray;\n}\n", ""]);
      },
      645: (r) => {
        r.exports = function (r) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = r(n);
                return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t;
              }).join("");
            }),
            (n.i = function (r, t, o) {
              "string" == typeof r && (r = [[null, r, ""]]);
              var e = {};
              if (o)
                for (var a = 0; a < this.length; a++) {
                  var c = this[a][0];
                  null != c && (e[c] = !0);
                }
              for (var i = 0; i < r.length; i++) {
                var u = [].concat(r[i]);
                (o && e[u[0]]) ||
                  (t &&
                    (u[2]
                      ? (u[2] = "".concat(t, " and ").concat(u[2]))
                      : (u[2] = t)),
                  n.push(u));
              }
            }),
            n
          );
        };
      },
    },
    n = {};
  function t(o) {
    var e = n[o];
    if (void 0 !== e) return e.exports;
    var a = (n[o] = { id: o, exports: {} });
    return r[o](a, a.exports, t), a.exports;
  }
  (t.n = (r) => {
    var n = r && r.__esModule ? () => r.default : () => r;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (r, n) => {
      for (var o in n)
        t.o(n, o) &&
          !t.o(r, o) &&
          Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    }),
    (t.o = (r, n) => Object.prototype.hasOwnProperty.call(r, n)),
    t(426),
    document.body.appendChild(
      (function () {
        const r = document.createElement("div");
        return (r.innerHTML = "hello world"), r;
      })()
    );
})();
