(() => {
  const t = {
    565: (t, e) => {
      Object.defineProperty(e, '__esModule', { value: !0 });
      class n extends Error {}
      class r extends n {
        constructor(t) {
          super(`Invalid DateTime: ${t.toMessage()}`);
        }
      }
      class s extends n {
        constructor(t) {
          super(`Invalid Interval: ${t.toMessage()}`);
        }
      }
      class i extends n {
        constructor(t) {
          super(`Invalid Duration: ${t.toMessage()}`);
        }
      }
      class a extends n {}
      class o extends n {
        constructor(t) {
          super(`Invalid unit ${t}`);
        }
      }
      class u extends n {}
      class l extends n {
        constructor() {
          super('Zone is an abstract class');
        }
      }
      const c = 'numeric';
      const h = 'short';
      const d = 'long';
      const m = { year: c, month: c, day: c };
      const f = { year: c, month: h, day: c };
      const y = {
        year: c, month: h, day: c, weekday: h,
      };
      const g = { year: c, month: d, day: c };
      const p = {
        year: c, month: d, day: c, weekday: d,
      };
      const w = { hour: c, minute: c };
      const v = { hour: c, minute: c, second: c };
      const S = {
        hour: c, minute: c, second: c, timeZoneName: h,
      };
      const T = {
        hour: c, minute: c, second: c, timeZoneName: d,
      };
      const b = { hour: c, minute: c, hourCycle: 'h23' };
      const k = {
        hour: c, minute: c, second: c, hourCycle: 'h23',
      };
      const O = {
        hour: c,
        minute: c,
        second: c,
        hourCycle: 'h23',
        timeZoneName: h,
      };
      const M = {
        hour: c,
        minute: c,
        second: c,
        hourCycle: 'h23',
        timeZoneName: d,
      };
      const N = {
        year: c, month: c, day: c, hour: c, minute: c,
      };
      const D = {
        year: c, month: c, day: c, hour: c, minute: c, second: c,
      };
      const E = {
        year: c, month: h, day: c, hour: c, minute: c,
      };
      const x = {
        year: c, month: h, day: c, hour: c, minute: c, second: c,
      };
      const I = {
        year: c, month: h, day: c, weekday: h, hour: c, minute: c,
      };
      const V = {
        year: c,
        month: d,
        day: c,
        hour: c,
        minute: c,
        timeZoneName: h,
      };
      const C = {
        year: c,
        month: d,
        day: c,
        hour: c,
        minute: c,
        second: c,
        timeZoneName: h,
      };
      const F = {
        year: c,
        month: d,
        day: c,
        weekday: d,
        hour: c,
        minute: c,
        timeZoneName: d,
      };
      const L = {
        year: c,
        month: d,
        day: c,
        weekday: d,
        hour: c,
        minute: c,
        second: c,
        timeZoneName: d,
      };
      class Z {
        get type() {
          throw new l();
        }

        get name() {
          throw new l();
        }

        get ianaName() {
          return this.name;
        }

        get isUniversal() {
          throw new l();
        }

        offsetName(t, e) {
          throw new l();
        }

        formatOffset(t, e) {
          throw new l();
        }

        offset(t) {
          throw new l();
        }

        equals(t) {
          throw new l();
        }

        get isValid() {
          throw new l();
        }
      }
      let $ = null;
      class A extends Z {
        static get instance() {
          return $ === null && ($ = new A()), $;
        }

        get type() {
          return 'system';
        }

        get name() {
          return new Intl.DateTimeFormat().resolvedOptions().timeZone;
        }

        get isUniversal() {
          return !1;
        }

        offsetName(t, { format: e, locale: n }) {
          return xt(t, e, n);
        }

        formatOffset(t, e) {
          return Ft(this.offset(t), e);
        }

        offset(t) {
          return -new Date(t).getTimezoneOffset();
        }

        equals(t) {
          return t.type === 'system';
        }

        get isValid() {
          return !0;
        }
      }
      let z = {};
      const q = {
        year: 0,
        month: 1,
        day: 2,
        era: 3,
        hour: 4,
        minute: 5,
        second: 6,
      };
      let j = {};
      class _ extends Z {
        static create(t) {
          return j[t] || (j[t] = new _(t)), j[t];
        }

        static resetCache() {
          (j = {}), (z = {});
        }

        static isValidSpecifier(t) {
          return this.isValidZone(t);
        }

        static isValidZone(t) {
          if (!t) return !1;
          try {
            return (
              new Intl.DateTimeFormat('en-US', { timeZone: t }).format(), !0
            );
          } catch (t) {
            return !1;
          }
        }

        constructor(t) {
          super(), (this.zoneName = t), (this.valid = _.isValidZone(t));
        }

        get type() {
          return 'iana';
        }

        get name() {
          return this.zoneName;
        }

        get isUniversal() {
          return !1;
        }

        offsetName(t, { format: e, locale: n }) {
          return xt(t, e, n, this.name);
        }

        formatOffset(t, e) {
          return Ft(this.offset(t), e);
        }

        offset(t) {
          const e = new Date(t);
          if (isNaN(e)) return NaN;
          const n = ((r = this.name),
          z[r]
                || (z[r] = new Intl.DateTimeFormat('en-US', {
                  hour12: !1,
                  timeZone: r,
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                  era: 'short',
                })),
          z[r]);
          let r;
          let [s, i, a, o, u, l, c] = n.formatToParts
            ? (function (t, e) {
              const n = t.formatToParts(e);
              const r = [];
              for (let t = 0; t < n.length; t++) {
                const { type: e, value: s } = n[t];
                const i = q[e];
                e === 'era'
                  ? (r[i] = s)
                  : ht(i) || (r[i] = parseInt(s, 10));
              }
              return r;
            }(n, e))
            : (function (t, e) {
              const n = t.format(e).replace(/\u200E/g, '');
              const r = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(
                n,
              );
              const [, s, i, a, o, u, l, c] = r;
              return [a, s, i, o, u, l, c];
            }(n, e));
          o === 'BC' && (s = 1 - Math.abs(s));
          let h = +e;
          const d = h % 1e3;
          return (
            (h -= d >= 0 ? d : 1e3 + d),
            (Nt({
              year: s,
              month: i,
              day: a,
              hour: u === 24 ? 0 : u,
              minute: l,
              second: c,
              millisecond: 0,
            })
                - h)
                / 6e4
          );
        }

        equals(t) {
          return t.type === 'iana' && t.name === this.name;
        }

        get isValid() {
          return this.valid;
        }
      }
      const U = {};
      let H = {};
      function W(t, e = {}) {
        const n = JSON.stringify([t, e]);
        let r = H[n];
        return r || ((r = new Intl.DateTimeFormat(t, e)), (H[n] = r)), r;
      }
      let R = {};
      let J = {};
      let Y = null;
      function P(t, e, n, r, s) {
        const i = t.listingMode(n);
        return i === 'error' ? null : i === 'en' ? r(e) : s(e);
      }
      class G {
        constructor(t, e, n) {
          (this.padTo = n.padTo || 0), (this.floor = n.floor || !1);
          const { padTo: r, floor: s, ...i } = n;
          if (!e || Object.keys(i).length > 0) {
            const e = { useGrouping: !1, ...n };
            n.padTo > 0 && (e.minimumIntegerDigits = n.padTo),
            (this.inf = (function (t, e = {}) {
              const n = JSON.stringify([t, e]);
              let r = R[n];
              return (
                r || ((r = new Intl.NumberFormat(t, e)), (R[n] = r)), r
              );
            }(t, e)));
          }
        }

        format(t) {
          if (this.inf) {
            const e = this.floor ? Math.floor(t) : t;
            return this.inf.format(e);
          }
          return wt(this.floor ? Math.floor(t) : bt(t, 3), this.padTo);
        }
      }
      class B {
        constructor(t, e, n) {
          let r;
          if (((this.opts = n), t.zone.isUniversal)) {
            const e = (t.offset / 60) * -1;
            const s = e >= 0 ? `Etc/GMT+${e}` : `Etc/GMT${e}`;
            t.offset !== 0 && _.create(s).valid
              ? ((r = s), (this.dt = t))
              : ((r = 'UTC'),
              n.timeZoneName
                ? (this.dt = t)
                : (this.dt = t.offset === 0
                  ? t
                  : Qn.fromMillis(t.ts + 60 * t.offset * 1e3)));
          } else {
            t.zone.type === 'system'
              ? (this.dt = t)
              : ((this.dt = t), (r = t.zone.name));
          }
          const s = { ...this.opts };
          (s.timeZone = s.timeZone || r), (this.dtf = W(e, s));
        }

        format() {
          return this.dtf.format(this.dt.toJSDate());
        }

        formatToParts() {
          return this.dtf.formatToParts(this.dt.toJSDate());
        }

        resolvedOptions() {
          return this.dtf.resolvedOptions();
        }
      }
      class Q {
        constructor(t, e, n) {
          (this.opts = { style: 'long', ...n }),
          !e
                && ft()
                && (this.rtf = (function (t, e = {}) {
                  const { base: n, ...r } = e;
                  const s = JSON.stringify([t, r]);
                  let i = J[s];
                  return (
                    i || ((i = new Intl.RelativeTimeFormat(t, e)), (J[s] = i)),
                    i
                  );
                }(t, n)));
        }

        format(t, e) {
          return this.rtf
            ? this.rtf.format(t, e)
            : (function (t, e, n = 'always', r = !1) {
              const s = {
                years: ['year', 'yr.'],
                quarters: ['quarter', 'qtr.'],
                months: ['month', 'mo.'],
                weeks: ['week', 'wk.'],
                days: ['day', 'day', 'days'],
                hours: ['hour', 'hr.'],
                minutes: ['minute', 'min.'],
                seconds: ['second', 'sec.'],
              };
              const i = ['hours', 'minutes', 'seconds'].indexOf(t) === -1;
              if (n === 'auto' && i) {
                const n = t === 'days';
                switch (e) {
                  case 1:
                    return n ? 'tomorrow' : `next ${s[t][0]}`;
                  case -1:
                    return n ? 'yesterday' : `last ${s[t][0]}`;
                  case 0:
                    return n ? 'today' : `this ${s[t][0]}`;
                }
              }
              const a = Object.is(e, -0) || e < 0;
              const o = Math.abs(e);
              const u = o === 1;
              const l = s[t];
              const c = r ? (u ? l[1] : l[2] || l[1]) : u ? s[t][0] : t;
              return a ? `${o} ${c} ago` : `in ${o} ${c}`;
            }(e, t, this.opts.numeric, this.opts.style !== 'long'));
        }

        formatToParts(t, e) {
          return this.rtf ? this.rtf.formatToParts(t, e) : [];
        }
      }
      class K {
        static fromOpts(t) {
          return K.create(
            t.locale,
            t.numberingSystem,
            t.outputCalendar,
            t.defaultToEN,
          );
        }

        static create(t, e, n, r = !1) {
          const s = t || ct.defaultLocale;
          const i = s
                || (r
                  ? 'en-US'
                  : Y
                    || ((Y = new Intl.DateTimeFormat().resolvedOptions().locale),
                    Y));
          const a = e || ct.defaultNumberingSystem;
          const o = n || ct.defaultOutputCalendar;
          return new K(i, a, o, s);
        }

        static resetCache() {
          (Y = null), (H = {}), (R = {}), (J = {});
        }

        static fromObject({
          locale: t,
          numberingSystem: e,
          outputCalendar: n,
        } = {}) {
          return K.create(t, e, n);
        }

        constructor(t, e, n, r) {
          const [s, i, a] = (function (t) {
            const e = t.indexOf('-x-');
            e !== -1 && (t = t.substring(0, e));
            const n = t.indexOf('-u-');
            if (n === -1) return [t];
            {
              let e; let
                r;
              try {
                (e = W(t).resolvedOptions()), (r = t);
              } catch (s) {
                const i = t.substring(0, n);
                (e = W(i).resolvedOptions()), (r = i);
              }
              const { numberingSystem: s, calendar: i } = e;
              return [r, s, i];
            }
          }(t));
          (this.locale = s),
          (this.numberingSystem = e || i || null),
          (this.outputCalendar = n || a || null),
          (this.intl = (function (t, e, n) {
            return n || e
              ? (t.includes('-u-') || (t += '-u'),
              n && (t += `-ca-${n}`),
              e && (t += `-nu-${e}`),
              t)
              : t;
          }(this.locale, this.numberingSystem, this.outputCalendar))),
          (this.weekdaysCache = { format: {}, standalone: {} }),
          (this.monthsCache = { format: {}, standalone: {} }),
          (this.meridiemCache = null),
          (this.eraCache = {}),
          (this.specifiedLocale = r),
          (this.fastNumbersCached = null);
        }

        get fastNumbers() {
          let t;
          return (
            this.fastNumbersCached == null
                && (this.fastNumbersCached = (!(t = this).numberingSystem
                    || t.numberingSystem === 'latn')
                  && (t.numberingSystem === 'latn'
                    || !t.locale
                    || t.locale.startsWith('en')
                    || new Intl.DateTimeFormat(t.intl).resolvedOptions()
                      .numberingSystem
                      === 'latn')),
            this.fastNumbersCached
          );
        }

        listingMode() {
          const t = this.isEnglish();
          const e = !(
            (this.numberingSystem !== null
                  && this.numberingSystem !== 'latn')
                || (this.outputCalendar !== null
                  && this.outputCalendar !== 'gregory')
          );
          return t && e ? 'en' : 'intl';
        }

        clone(t) {
          return t && Object.getOwnPropertyNames(t).length !== 0
            ? K.create(
              t.locale || this.specifiedLocale,
              t.numberingSystem || this.numberingSystem,
              t.outputCalendar || this.outputCalendar,
              t.defaultToEN || !1,
            )
            : this;
        }

        redefaultToEN(t = {}) {
          return this.clone({ ...t, defaultToEN: !0 });
        }

        redefaultToSystem(t = {}) {
          return this.clone({ ...t, defaultToEN: !1 });
        }

        months(t, e = !1, n = !0) {
          return P(this, t, n, zt, () => {
            const n = e ? { month: t, day: 'numeric' } : { month: t };
            const r = e ? 'format' : 'standalone';
            return (
              this.monthsCache[r][t]
                  || (this.monthsCache[r][t] = (function (t) {
                    const e = [];
                    for (let n = 1; n <= 12; n++) {
                      const r = Qn.utc(2016, n, 1);
                      e.push(t(r));
                    }
                    return e;
                  }((t) => this.extract(t, n, 'month')))),
              this.monthsCache[r][t]
            );
          });
        }

        weekdays(t, e = !1, n = !0) {
          return P(this, t, n, Ut, () => {
            const n = e
              ? {
                weekday: t,
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }
              : { weekday: t };
            const r = e ? 'format' : 'standalone';
            return (
              this.weekdaysCache[r][t]
                  || (this.weekdaysCache[r][t] = (function (t) {
                    const e = [];
                    for (let n = 1; n <= 7; n++) {
                      const r = Qn.utc(2016, 11, 13 + n);
                      e.push(t(r));
                    }
                    return e;
                  }((t) => this.extract(t, n, 'weekday')))),
              this.weekdaysCache[r][t]
            );
          });
        }

        meridiems(t = !0) {
          return P(
            this,
            void 0,
            t,
            () => Ht,
            () => {
              if (!this.meridiemCache) {
                const t = { hour: 'numeric', hourCycle: 'h12' };
                this.meridiemCache = [
                  Qn.utc(2016, 11, 13, 9),
                  Qn.utc(2016, 11, 13, 19),
                ].map((e) => this.extract(e, t, 'dayperiod'));
              }
              return this.meridiemCache;
            },
          );
        }

        eras(t, e = !0) {
          return P(this, t, e, Yt, () => {
            const e = { era: t };
            return (
              this.eraCache[t]
                  || (this.eraCache[t] = [
                    Qn.utc(-40, 1, 1),
                    Qn.utc(2017, 1, 1),
                  ].map((t) => this.extract(t, e, 'era'))),
              this.eraCache[t]
            );
          });
        }

        extract(t, e, n) {
          const r = this.dtFormatter(t, e)
            .formatToParts()
            .find((t) => t.type.toLowerCase() === n);
          return r ? r.value : null;
        }

        numberFormatter(t = {}) {
          return new G(this.intl, t.forceSimple || this.fastNumbers, t);
        }

        dtFormatter(t, e = {}) {
          return new B(t, this.intl, e);
        }

        relFormatter(t = {}) {
          return new Q(this.intl, this.isEnglish(), t);
        }

        listFormatter(t = {}) {
          return (function (t, e = {}) {
            const n = JSON.stringify([t, e]);
            let r = U[n];
            return r || ((r = new Intl.ListFormat(t, e)), (U[n] = r)), r;
          }(this.intl, t));
        }

        isEnglish() {
          return (
            this.locale === 'en'
              || this.locale.toLowerCase() === 'en-us'
              || new Intl.DateTimeFormat(this.intl)
                .resolvedOptions()
                .locale.startsWith('en-us')
          );
        }

        equals(t) {
          return (
            this.locale === t.locale
              && this.numberingSystem === t.numberingSystem
              && this.outputCalendar === t.outputCalendar
          );
        }
      }
      let X = null;
      class tt extends Z {
        static get utcInstance() {
          return X === null && (X = new tt(0)), X;
        }

        static instance(t) {
          return t === 0 ? tt.utcInstance : new tt(t);
        }

        static parseSpecifier(t) {
          if (t) {
            const e = t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
            if (e) return new tt(It(e[1], e[2]));
          }
          return null;
        }

        constructor(t) {
          super(), (this.fixed = t);
        }

        get type() {
          return 'fixed';
        }

        get name() {
          return this.fixed === 0 ? 'UTC' : `UTC${Ft(this.fixed, 'narrow')}`;
        }

        get ianaName() {
          return this.fixed === 0
            ? 'Etc/UTC'
            : `Etc/GMT${Ft(-this.fixed, 'narrow')}`;
        }

        offsetName() {
          return this.name;
        }

        formatOffset(t, e) {
          return Ft(this.fixed, e);
        }

        get isUniversal() {
          return !0;
        }

        offset() {
          return this.fixed;
        }

        equals(t) {
          return t.type === 'fixed' && t.fixed === this.fixed;
        }

        get isValid() {
          return !0;
        }
      }
      class et extends Z {
        constructor(t) {
          super(), (this.zoneName = t);
        }

        get type() {
          return 'invalid';
        }

        get name() {
          return this.zoneName;
        }

        get isUniversal() {
          return !1;
        }

        offsetName() {
          return null;
        }

        formatOffset() {
          return '';
        }

        offset() {
          return NaN;
        }

        equals() {
          return !1;
        }

        get isValid() {
          return !1;
        }
      }
      function nt(t, e) {
        if (ht(t) || t === null) return e;
        if (t instanceof Z) return t;
        if (typeof t === 'string') {
          const n = t.toLowerCase();
          return n === 'default'
            ? e
            : n === 'local' || n === 'system'
              ? A.instance
              : n === 'utc' || n === 'gmt'
                ? tt.utcInstance
                : tt.parseSpecifier(n) || _.create(t);
        }
        return dt(t)
          ? tt.instance(t)
          : typeof t === 'object' && t.offset && typeof t.offset === 'number'
            ? t
            : new et(t);
      }
      let rt;
      let st = () => Date.now();
      let it = 'system';
      let at = null;
      let ot = null;
      let ut = null;
      let lt = 60;
      class ct {
        static get now() {
          return st;
        }

        static set now(t) {
          st = t;
        }

        static set defaultZone(t) {
          it = t;
        }

        static get defaultZone() {
          return nt(it, A.instance);
        }

        static get defaultLocale() {
          return at;
        }

        static set defaultLocale(t) {
          at = t;
        }

        static get defaultNumberingSystem() {
          return ot;
        }

        static set defaultNumberingSystem(t) {
          ot = t;
        }

        static get defaultOutputCalendar() {
          return ut;
        }

        static set defaultOutputCalendar(t) {
          ut = t;
        }

        static get twoDigitCutoffYear() {
          return lt;
        }

        static set twoDigitCutoffYear(t) {
          lt = t % 100;
        }

        static get throwOnInvalid() {
          return rt;
        }

        static set throwOnInvalid(t) {
          rt = t;
        }

        static resetCaches() {
          K.resetCache(), _.resetCache();
        }
      }
      function ht(t) {
        return void 0 === t;
      }
      function dt(t) {
        return typeof t === 'number';
      }
      function mt(t) {
        return typeof t === 'number' && t % 1 == 0;
      }
      function ft() {
        try {
          return typeof Intl !== 'undefined' && !!Intl.RelativeTimeFormat;
        } catch (t) {
          return !1;
        }
      }
      function yt(t, e, n) {
        if (t.length !== 0) {
          return t.reduce((t, r) => {
            const s = [e(r), r];
            return t && n(t[0], s[0]) === t[0] ? t : s;
          }, null)[1];
        }
      }
      function gt(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      function pt(t, e, n) {
        return mt(t) && t >= e && t <= n;
      }
      function wt(t, e = 2) {
        let n;
        return (
          (n = t < 0
            ? `-${(`${-t}`).padStart(e, '0')}`
            : (`${t}`).padStart(e, '0')),
          n
        );
      }
      function vt(t) {
        return ht(t) || t === null || t === '' ? void 0 : parseInt(t, 10);
      }
      function St(t) {
        return ht(t) || t === null || t === '' ? void 0 : parseFloat(t);
      }
      function Tt(t) {
        if (!ht(t) && t !== null && t !== '') {
          const e = 1e3 * parseFloat(`0.${t}`);
          return Math.floor(e);
        }
      }
      function bt(t, e, n = !1) {
        const r = 10 ** e;
        return (n ? Math.trunc : Math.round)(t * r) / r;
      }
      function kt(t) {
        return t % 4 == 0 && (t % 100 != 0 || t % 400 == 0);
      }
      function Ot(t) {
        return kt(t) ? 366 : 365;
      }
      function Mt(t, e) {
        const n = (r = e - 1) - 12 * Math.floor(r / 12) + 1;
        let r;
        return n === 2
          ? kt(t + (e - n) / 12)
            ? 29
            : 28
          : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
      }
      function Nt(t) {
        let e = Date.UTC(
          t.year,
          t.month - 1,
          t.day,
          t.hour,
          t.minute,
          t.second,
          t.millisecond,
        );
        return (
          t.year < 100
              && t.year >= 0
              && ((e = new Date(e)), e.setUTCFullYear(e.getUTCFullYear() - 1900)),
          +e
        );
      }
      function Dt(t) {
        const e = (t
                + Math.floor(t / 4)
                - Math.floor(t / 100)
                + Math.floor(t / 400))
              % 7;
        const n = t - 1;
        const r = (n
                + Math.floor(n / 4)
                - Math.floor(n / 100)
                + Math.floor(n / 400))
              % 7;
        return e === 4 || r === 3 ? 53 : 52;
      }
      function Et(t) {
        return t > 99 ? t : t > ct.twoDigitCutoffYear ? 1900 + t : 2e3 + t;
      }
      function xt(t, e, n, r = null) {
        const s = new Date(t);
        const i = {
          hourCycle: 'h23',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        };
        r && (i.timeZone = r);
        const a = { timeZoneName: e, ...i };
        const o = new Intl.DateTimeFormat(n, a)
          .formatToParts(s)
          .find((t) => t.type.toLowerCase() === 'timezonename');
        return o ? o.value : null;
      }
      function It(t, e) {
        let n = parseInt(t, 10);
        Number.isNaN(n) && (n = 0);
        const r = parseInt(e, 10) || 0;
        return 60 * n + (n < 0 || Object.is(n, -0) ? -r : r);
      }
      function Vt(t) {
        const e = Number(t);
        if (typeof t === 'boolean' || t === '' || Number.isNaN(e)) { throw new u(`Invalid unit value ${t}`); }
        return e;
      }
      function Ct(t, e) {
        const n = {};
        for (const r in t) {
          if (gt(t, r)) {
            const s = t[r];
            if (s == null) continue;
            n[e(r)] = Vt(s);
          }
        }
        return n;
      }
      function Ft(t, e) {
        const n = Math.trunc(Math.abs(t / 60));
        const r = Math.trunc(Math.abs(t % 60));
        const s = t >= 0 ? '+' : '-';
        switch (e) {
          case 'short':
            return `${s}${wt(n, 2)}:${wt(r, 2)}`;
          case 'narrow':
            return `${s}${n}${r > 0 ? `:${r}` : ''}`;
          case 'techie':
            return `${s}${wt(n, 2)}${wt(r, 2)}`;
          default:
            throw new RangeError(
              `Value format ${e} is out of range for property format`,
            );
        }
      }
      function Lt(t) {
        return (function (t, e) {
          return ['hour', 'minute', 'second', 'millisecond'].reduce(
            (e, n) => ((e[n] = t[n]), e),
            {},
          );
        }(t));
      }
      const Zt = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      const $t = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      const At = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
      function zt(t) {
        switch (t) {
          case 'narrow':
            return [...At];
          case 'short':
            return [...$t];
          case 'long':
            return [...Zt];
          case 'numeric':
            return [
              '1',
              '2',
              '3',
              '4',
              '5',
              '6',
              '7',
              '8',
              '9',
              '10',
              '11',
              '12',
            ];
          case '2-digit':
            return [
              '01',
              '02',
              '03',
              '04',
              '05',
              '06',
              '07',
              '08',
              '09',
              '10',
              '11',
              '12',
            ];
          default:
            return null;
        }
      }
      const qt = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ];
      const jt = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      const _t = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
      function Ut(t) {
        switch (t) {
          case 'narrow':
            return [..._t];
          case 'short':
            return [...jt];
          case 'long':
            return [...qt];
          case 'numeric':
            return ['1', '2', '3', '4', '5', '6', '7'];
          default:
            return null;
        }
      }
      const Ht = ['AM', 'PM'];
      const Wt = ['Before Christ', 'Anno Domini'];
      const Rt = ['BC', 'AD'];
      const Jt = ['B', 'A'];
      function Yt(t) {
        switch (t) {
          case 'narrow':
            return [...Jt];
          case 'short':
            return [...Rt];
          case 'long':
            return [...Wt];
          default:
            return null;
        }
      }
      function Pt(t, e) {
        let n = '';
        for (const r of t) r.literal ? (n += r.val) : (n += e(r.val));
        return n;
      }
      const Gt = {
        D: m,
        DD: f,
        DDD: g,
        DDDD: p,
        t: w,
        tt: v,
        ttt: S,
        tttt: T,
        T: b,
        TT: k,
        TTT: O,
        TTTT: M,
        f: N,
        ff: E,
        fff: V,
        ffff: F,
        F: D,
        FF: x,
        FFF: C,
        FFFF: L,
      };
      class Bt {
        static create(t, e = {}) {
          return new Bt(t, e);
        }

        static parseFormat(t) {
          let e = null;
          let n = '';
          let r = !1;
          const s = [];
          for (let i = 0; i < t.length; i++) {
            const a = t.charAt(i);
            a === "'"
              ? (n.length > 0 && s.push({ literal: r, val: n }),
              (e = null),
              (n = ''),
              (r = !r))
              : r || a === e
                ? (n += a)
                : (n.length > 0 && s.push({ literal: !1, val: n }),
                (n = a),
                (e = a));
          }
          return n.length > 0 && s.push({ literal: r, val: n }), s;
        }

        static macroTokenToFormatOpts(t) {
          return Gt[t];
        }

        constructor(t, e) {
          (this.opts = e), (this.loc = t), (this.systemLoc = null);
        }

        formatWithSystemDefault(t, e) {
          return (
            this.systemLoc === null
                && (this.systemLoc = this.loc.redefaultToSystem()),
            this.systemLoc.dtFormatter(t, { ...this.opts, ...e }).format()
          );
        }

        formatDateTime(t, e = {}) {
          return this.loc.dtFormatter(t, { ...this.opts, ...e }).format();
        }

        formatDateTimeParts(t, e = {}) {
          return this.loc
            .dtFormatter(t, { ...this.opts, ...e })
            .formatToParts();
        }

        formatInterval(t, e = {}) {
          return this.loc
            .dtFormatter(t.start, { ...this.opts, ...e })
            .dtf.formatRange(t.start.toJSDate(), t.end.toJSDate());
        }

        resolvedOptions(t, e = {}) {
          return this.loc
            .dtFormatter(t, { ...this.opts, ...e })
            .resolvedOptions();
        }

        num(t, e = 0) {
          if (this.opts.forceSimple) return wt(t, e);
          const n = { ...this.opts };
          return (
            e > 0 && (n.padTo = e), this.loc.numberFormatter(n).format(t)
          );
        }

        formatDateTimeFromString(t, e) {
          const n = this.loc.listingMode() === 'en';
          const r = this.loc.outputCalendar
                && this.loc.outputCalendar !== 'gregory';
          const s = (e, n) => this.loc.extract(t, e, n);
          const i = (e) => (t.isOffsetFixed && t.offset === 0 && e.allowZ
            ? 'Z'
            : t.isValid
              ? t.zone.formatOffset(t.ts, e.format)
              : '');
          const a = (e, r) => (n
            ? (function (t, e) {
              return zt(e)[t.month - 1];
            }(t, e))
            : s(r ? { month: e } : { month: e, day: 'numeric' }, 'month'));
          const o = (e, r) => (n
            ? (function (t, e) {
              return Ut(e)[t.weekday - 1];
            }(t, e))
            : s(
              r
                ? { weekday: e }
                : { weekday: e, month: 'long', day: 'numeric' },
              'weekday',
            ));
          const u = (e) => {
            const n = Bt.macroTokenToFormatOpts(e);
            return n ? this.formatWithSystemDefault(t, n) : e;
          };
          const l = (e) => (n
            ? (function (t, e) {
              return Yt(e)[t.year < 0 ? 0 : 1];
            }(t, e))
            : s({ era: e }, 'era'));
          return Pt(Bt.parseFormat(e), (e) => {
            switch (e) {
              case 'S':
                return this.num(t.millisecond);
              case 'u':
              case 'SSS':
                return this.num(t.millisecond, 3);
              case 's':
                return this.num(t.second);
              case 'ss':
                return this.num(t.second, 2);
              case 'uu':
                return this.num(Math.floor(t.millisecond / 10), 2);
              case 'uuu':
                return this.num(Math.floor(t.millisecond / 100));
              case 'm':
                return this.num(t.minute);
              case 'mm':
                return this.num(t.minute, 2);
              case 'h':
                return this.num(t.hour % 12 == 0 ? 12 : t.hour % 12);
              case 'hh':
                return this.num(t.hour % 12 == 0 ? 12 : t.hour % 12, 2);
              case 'H':
                return this.num(t.hour);
              case 'HH':
                return this.num(t.hour, 2);
              case 'Z':
                return i({ format: 'narrow', allowZ: this.opts.allowZ });
              case 'ZZ':
                return i({ format: 'short', allowZ: this.opts.allowZ });
              case 'ZZZ':
                return i({ format: 'techie', allowZ: this.opts.allowZ });
              case 'ZZZZ':
                return t.zone.offsetName(t.ts, {
                  format: 'short',
                  locale: this.loc.locale,
                });
              case 'ZZZZZ':
                return t.zone.offsetName(t.ts, {
                  format: 'long',
                  locale: this.loc.locale,
                });
              case 'z':
                return t.zoneName;
              case 'a':
                return n
                  ? (function (t) {
                    return Ht[t.hour < 12 ? 0 : 1];
                  }(t))
                  : s({ hour: 'numeric', hourCycle: 'h12' }, 'dayperiod');
              case 'd':
                return r ? s({ day: 'numeric' }, 'day') : this.num(t.day);
              case 'dd':
                return r ? s({ day: '2-digit' }, 'day') : this.num(t.day, 2);
              case 'c':
              case 'E':
                return this.num(t.weekday);
              case 'ccc':
                return o('short', !0);
              case 'cccc':
                return o('long', !0);
              case 'ccccc':
                return o('narrow', !0);
              case 'EEE':
                return o('short', !1);
              case 'EEEE':
                return o('long', !1);
              case 'EEEEE':
                return o('narrow', !1);
              case 'L':
                return r
                  ? s({ month: 'numeric', day: 'numeric' }, 'month')
                  : this.num(t.month);
              case 'LL':
                return r
                  ? s({ month: '2-digit', day: 'numeric' }, 'month')
                  : this.num(t.month, 2);
              case 'LLL':
                return a('short', !0);
              case 'LLLL':
                return a('long', !0);
              case 'LLLLL':
                return a('narrow', !0);
              case 'M':
                return r
                  ? s({ month: 'numeric' }, 'month')
                  : this.num(t.month);
              case 'MM':
                return r
                  ? s({ month: '2-digit' }, 'month')
                  : this.num(t.month, 2);
              case 'MMM':
                return a('short', !1);
              case 'MMMM':
                return a('long', !1);
              case 'MMMMM':
                return a('narrow', !1);
              case 'y':
                return r ? s({ year: 'numeric' }, 'year') : this.num(t.year);
              case 'yy':
                return r
                  ? s({ year: '2-digit' }, 'year')
                  : this.num(t.year.toString().slice(-2), 2);
              case 'yyyy':
                return r
                  ? s({ year: 'numeric' }, 'year')
                  : this.num(t.year, 4);
              case 'yyyyyy':
                return r
                  ? s({ year: 'numeric' }, 'year')
                  : this.num(t.year, 6);
              case 'G':
                return l('short');
              case 'GG':
                return l('long');
              case 'GGGGG':
                return l('narrow');
              case 'kk':
                return this.num(t.weekYear.toString().slice(-2), 2);
              case 'kkkk':
                return this.num(t.weekYear, 4);
              case 'W':
                return this.num(t.weekNumber);
              case 'WW':
                return this.num(t.weekNumber, 2);
              case 'o':
                return this.num(t.ordinal);
              case 'ooo':
                return this.num(t.ordinal, 3);
              case 'q':
                return this.num(t.quarter);
              case 'qq':
                return this.num(t.quarter, 2);
              case 'X':
                return this.num(Math.floor(t.ts / 1e3));
              case 'x':
                return this.num(t.ts);
              default:
                return u(e);
            }
          });
        }

        formatDurationFromString(t, e) {
          const n = (t) => {
            switch (t[0]) {
              case 'S':
                return 'millisecond';
              case 's':
                return 'second';
              case 'm':
                return 'minute';
              case 'h':
                return 'hour';
              case 'd':
                return 'day';
              case 'w':
                return 'week';
              case 'M':
                return 'month';
              case 'y':
                return 'year';
              default:
                return null;
            }
          };
          const r = Bt.parseFormat(e);
          const s = r.reduce(
            (t, { literal: e, val: n }) => (e ? t : t.concat(n)),
            [],
          );
          return Pt(
            r,
            ((t) => (e) => {
              const r = n(e);
              return r ? this.num(t.get(r), e.length) : e;
            })(t.shiftTo(...s.map(n).filter((t) => t))),
          );
        }
      }
      class Qt {
        constructor(t, e) {
          (this.reason = t), (this.explanation = e);
        }

        toMessage() {
          return this.explanation
            ? `${this.reason}: ${this.explanation}`
            : this.reason;
        }
      }
      const Kt = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
      function Xt(...t) {
        const e = t.reduce((t, e) => t + e.source, '');
        return RegExp(`^${e}$`);
      }
      function te(...t) {
        return (e) => t
          .reduce(
            ([t, n, r], s) => {
              const [i, a, o] = s(e, r);
              return [{ ...t, ...i }, a || n, o];
            },
            [{}, null, 1],
          )
          .slice(0, 2);
      }
      function ee(t, ...e) {
        if (t == null) return [null, null];
        for (const [n, r] of e) {
          const e = n.exec(t);
          if (e) return r(e);
        }
        return [null, null];
      }
      function ne(...t) {
        return (e, n) => {
          const r = {};
          let s;
          for (s = 0; s < t.length; s++) r[t[s]] = vt(e[n + s]);
          return [r, null, n + s];
        };
      }
      const re = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
      const se = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
      const ie = RegExp(
        `${se.source}(?:${re.source}?(?:\\[(${Kt.source})\\])?)?`,
      );
      const ae = RegExp(`(?:T${ie.source})?`);
      const oe = ne('weekYear', 'weekNumber', 'weekDay');
      const ue = ne('year', 'ordinal');
      const le = RegExp(`${se.source} ?(?:${re.source}|(${Kt.source}))?`);
      const ce = RegExp(`(?: ${le.source})?`);
      function he(t, e, n) {
        const r = t[e];
        return ht(r) ? n : vt(r);
      }
      function de(t, e) {
        return [
          {
            hours: he(t, e, 0),
            minutes: he(t, e + 1, 0),
            seconds: he(t, e + 2, 0),
            milliseconds: Tt(t[e + 3]),
          },
          null,
          e + 4,
        ];
      }
      function me(t, e) {
        const n = !t[e] && !t[e + 1];
        const r = It(t[e + 1], t[e + 2]);
        return [{}, n ? null : tt.instance(r), e + 3];
      }
      function fe(t, e) {
        return [{}, t[e] ? _.create(t[e]) : null, e + 1];
      }
      const ye = RegExp(`^T?${se.source}$`);
      const ge = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
      function pe(t) {
        const [e, n, r, s, i, a, o, u, l] = t;
        const c = e[0] === '-';
        const h = u && u[0] === '-';
        const d = (t, e = !1) => (void 0 !== t && (e || (t && c)) ? -t : t);
        return [
          {
            years: d(St(n)),
            months: d(St(r)),
            weeks: d(St(s)),
            days: d(St(i)),
            hours: d(St(a)),
            minutes: d(St(o)),
            seconds: d(St(u), u === '-0'),
            milliseconds: d(Tt(l), h),
          },
        ];
      }
      const we = {
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480,
      };
      function ve(t, e, n, r, s, i, a) {
        const o = {
          year: e.length === 2 ? Et(vt(e)) : vt(e),
          month: $t.indexOf(n) + 1,
          day: vt(r),
          hour: vt(s),
          minute: vt(i),
        };
        return (
          a && (o.second = vt(a)),
          t
              && (o.weekday = t.length > 3 ? qt.indexOf(t) + 1 : jt.indexOf(t) + 1),
          o
        );
      }
      const Se = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
      function Te(t) {
        const [, e, n, r, s, i, a, o, u, l, c, h] = t;
        const d = ve(e, s, r, n, i, a, o);
        let m;
        return (m = u ? we[u] : l ? 0 : It(c, h)), [d, new tt(m)];
      }
      const be = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/;
      const ke = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/;
      const Oe = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
      function Me(t) {
        const [, e, n, r, s, i, a, o] = t;
        return [ve(e, s, r, n, i, a, o), tt.utcInstance];
      }
      function Ne(t) {
        const [, e, n, r, s, i, a, o] = t;
        return [ve(e, o, n, r, s, i, a), tt.utcInstance];
      }
      const De = Xt(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, ae);
      const Ee = Xt(/(\d{4})-?W(\d\d)(?:-?(\d))?/, ae);
      const xe = Xt(/(\d{4})-?(\d{3})/, ae);
      const Ie = Xt(ie);
      const Ve = te(
        (t, e) => [
          {
            year: he(t, e),
            month: he(t, e + 1, 1),
            day: he(t, e + 2, 1),
          },
          null,
          e + 3,
        ],
        de,
        me,
        fe,
      );
      const Ce = te(oe, de, me, fe);
      const Fe = te(ue, de, me, fe);
      const Le = te(de, me, fe);
      const Ze = te(de);
      const $e = Xt(/(\d{4})-(\d\d)-(\d\d)/, ce);
      const Ae = Xt(le);
      const ze = te(de, me, fe);
      const qe = {
        weeks: {
          days: 7,
          hours: 168,
          minutes: 10080,
          seconds: 604800,
          milliseconds: 6048e5,
        },
        days: {
          hours: 24,
          minutes: 1440,
          seconds: 86400,
          milliseconds: 864e5,
        },
        hours: { minutes: 60, seconds: 3600, milliseconds: 36e5 },
        minutes: { seconds: 60, milliseconds: 6e4 },
        seconds: { milliseconds: 1e3 },
      };
      const je = {
        years: {
          quarters: 4,
          months: 12,
          weeks: 52,
          days: 365,
          hours: 8760,
          minutes: 525600,
          seconds: 31536e3,
          milliseconds: 31536e6,
        },
        quarters: {
          months: 3,
          weeks: 13,
          days: 91,
          hours: 2184,
          minutes: 131040,
          seconds: 7862400,
          milliseconds: 78624e5,
        },
        months: {
          weeks: 4,
          days: 30,
          hours: 720,
          minutes: 43200,
          seconds: 2592e3,
          milliseconds: 2592e6,
        },
        ...qe,
      };
      const _e = {
        years: {
          quarters: 4,
          months: 12,
          weeks: 52.1775,
          days: 365.2425,
          hours: 8765.82,
          minutes: 525949.2,
          seconds: 525949.2 * 60,
          milliseconds: 525949.2 * 60 * 1e3,
        },
        quarters: {
          months: 3,
          weeks: 13.044375,
          days: 91.310625,
          hours: 2191.455,
          minutes: 131487.3,
          seconds: (525949.2 * 60) / 4,
          milliseconds: 7889237999.999999,
        },
        months: {
          weeks: 4.3481250000000005,
          days: 30.436875,
          hours: 730.485,
          minutes: 43829.1,
          seconds: 2629746,
          milliseconds: 2629746e3,
        },
        ...qe,
      };
      const Ue = [
        'years',
        'quarters',
        'months',
        'weeks',
        'days',
        'hours',
        'minutes',
        'seconds',
        'milliseconds',
      ];
      const He = Ue.slice(0).reverse();
      function We(t, e, n = !1) {
        const r = {
          values: n ? e.values : { ...t.values, ...(e.values || {}) },
          loc: t.loc.clone(e.loc),
          conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
          matrix: e.matrix || t.matrix,
        };
        return new Je(r);
      }
      function Re(t, e, n, r, s) {
        const i = t[s][n];
        const a = e[n] / i;
        const o = Math.sign(a) !== Math.sign(r[s]) && r[s] !== 0 && Math.abs(a) <= 1
          ? (function (t) {
            return t < 0 ? Math.floor(t) : Math.ceil(t);
          }(a))
          : Math.trunc(a);
        (r[s] += o), (e[n] -= o * i);
      }
      class Je {
        constructor(t) {
          const e = t.conversionAccuracy === 'longterm' || !1;
          let n = e ? _e : je;
          t.matrix && (n = t.matrix),
          (this.values = t.values),
          (this.loc = t.loc || K.create()),
          (this.conversionAccuracy = e ? 'longterm' : 'casual'),
          (this.invalid = t.invalid || null),
          (this.matrix = n),
          (this.isLuxonDuration = !0);
        }

        static fromMillis(t, e) {
          return Je.fromObject({ milliseconds: t }, e);
        }

        static fromObject(t, e = {}) {
          if (t == null || typeof t !== 'object') {
            throw new u(
              `Duration.fromObject: argument expected to be an object, got ${
                t === null ? 'null' : typeof t}`,
            );
          }
          return new Je({
            values: Ct(t, Je.normalizeUnit),
            loc: K.fromObject(e),
            conversionAccuracy: e.conversionAccuracy,
            matrix: e.matrix,
          });
        }

        static fromDurationLike(t) {
          if (dt(t)) return Je.fromMillis(t);
          if (Je.isDuration(t)) return t;
          if (typeof t === 'object') return Je.fromObject(t);
          throw new u(`Unknown duration argument ${t} of type ${typeof t}`);
        }

        static fromISO(t, e) {
          const [n] = (function (t) {
            return ee(t, [ge, pe]);
          }(t));
          return n
            ? Je.fromObject(n, e)
            : Je.invalid(
              'unparsable',
              `the input "${t}" can't be parsed as ISO 8601`,
            );
        }

        static fromISOTime(t, e) {
          const [n] = (function (t) {
            return ee(t, [ye, Ze]);
          }(t));
          return n
            ? Je.fromObject(n, e)
            : Je.invalid(
              'unparsable',
              `the input "${t}" can't be parsed as ISO 8601`,
            );
        }

        static invalid(t, e = null) {
          if (!t) { throw new u('need to specify a reason the Duration is invalid'); }
          const n = t instanceof Qt ? t : new Qt(t, e);
          if (ct.throwOnInvalid) throw new i(n);
          return new Je({ invalid: n });
        }

        static normalizeUnit(t) {
          const e = {
            year: 'years',
            years: 'years',
            quarter: 'quarters',
            quarters: 'quarters',
            month: 'months',
            months: 'months',
            week: 'weeks',
            weeks: 'weeks',
            day: 'days',
            days: 'days',
            hour: 'hours',
            hours: 'hours',
            minute: 'minutes',
            minutes: 'minutes',
            second: 'seconds',
            seconds: 'seconds',
            millisecond: 'milliseconds',
            milliseconds: 'milliseconds',
          }[t ? t.toLowerCase() : t];
          if (!e) throw new o(t);
          return e;
        }

        static isDuration(t) {
          return (t && t.isLuxonDuration) || !1;
        }

        get locale() {
          return this.isValid ? this.loc.locale : null;
        }

        get numberingSystem() {
          return this.isValid ? this.loc.numberingSystem : null;
        }

        toFormat(t, e = {}) {
          const n = { ...e, floor: !1 !== e.round && !1 !== e.floor };
          return this.isValid
            ? Bt.create(this.loc, n).formatDurationFromString(this, t)
            : 'Invalid Duration';
        }

        toHuman(t = {}) {
          const e = Ue.map((e) => {
            const n = this.values[e];
            return ht(n)
              ? null
              : this.loc
                .numberFormatter({
                  style: 'unit',
                  unitDisplay: 'long',
                  ...t,
                  unit: e.slice(0, -1),
                })
                .format(n);
          }).filter((t) => t);
          return this.loc
            .listFormatter({
              type: 'conjunction',
              style: t.listStyle || 'narrow',
              ...t,
            })
            .format(e);
        }

        toObject() {
          return this.isValid ? { ...this.values } : {};
        }

        toISO() {
          if (!this.isValid) return null;
          let t = 'P';
          return (
            this.years !== 0 && (t += `${this.years}Y`),
            (this.months === 0 && this.quarters === 0)
                || (t += `${this.months + 3 * this.quarters}M`),
            this.weeks !== 0 && (t += `${this.weeks}W`),
            this.days !== 0 && (t += `${this.days}D`),
            (this.hours === 0
                && this.minutes === 0
                && this.seconds === 0
                && this.milliseconds === 0)
                || (t += 'T'),
            this.hours !== 0 && (t += `${this.hours}H`),
            this.minutes !== 0 && (t += `${this.minutes}M`),
            (this.seconds === 0 && this.milliseconds === 0)
                || (t += `${bt(this.seconds + this.milliseconds / 1e3, 3)}S`),
            t === 'P' && (t += 'T0S'),
            t
          );
        }

        toISOTime(t = {}) {
          if (!this.isValid) return null;
          const e = this.toMillis();
          if (e < 0 || e >= 864e5) return null;
          t = {
            suppressMilliseconds: !1,
            suppressSeconds: !1,
            includePrefix: !1,
            format: 'extended',
            ...t,
          };
          const n = this.shiftTo(
            'hours',
            'minutes',
            'seconds',
            'milliseconds',
          );
          let r = t.format === 'basic' ? 'hhmm' : 'hh:mm';
          (t.suppressSeconds && n.seconds === 0 && n.milliseconds === 0)
              || ((r += t.format === 'basic' ? 'ss' : ':ss'),
              (t.suppressMilliseconds && n.milliseconds === 0)
                || (r += '.SSS'));
          let s = n.toFormat(r);
          return t.includePrefix && (s = `T${s}`), s;
        }

        toJSON() {
          return this.toISO();
        }

        toString() {
          return this.toISO();
        }

        toMillis() {
          return this.as('milliseconds');
        }

        valueOf() {
          return this.toMillis();
        }

        plus(t) {
          if (!this.isValid) return this;
          const e = Je.fromDurationLike(t);
          const n = {};
          for (const t of Ue) {
            (gt(e.values, t) || gt(this.values, t))
                && (n[t] = e.get(t) + this.get(t));
          }
          return We(this, { values: n }, !0);
        }

        minus(t) {
          if (!this.isValid) return this;
          const e = Je.fromDurationLike(t);
          return this.plus(e.negate());
        }

        mapUnits(t) {
          if (!this.isValid) return this;
          const e = {};
          for (const n of Object.keys(this.values)) { e[n] = Vt(t(this.values[n], n)); }
          return We(this, { values: e }, !0);
        }

        get(t) {
          return this[Je.normalizeUnit(t)];
        }

        set(t) {
          return this.isValid
            ? We(this, {
              values: { ...this.values, ...Ct(t, Je.normalizeUnit) },
            })
            : this;
        }

        reconfigure({
          locale: t,
          numberingSystem: e,
          conversionAccuracy: n,
          matrix: r,
        } = {}) {
          return We(this, {
            loc: this.loc.clone({ locale: t, numberingSystem: e }),
            matrix: r,
            conversionAccuracy: n,
          });
        }

        as(t) {
          return this.isValid ? this.shiftTo(t).get(t) : NaN;
        }

        normalize() {
          if (!this.isValid) return this;
          const t = this.toObject();
          return (
            (function (t, e) {
              He.reduce(
                (n, r) => (ht(e[r]) ? n : (n && Re(t, e, n, e, r), r)),
                null,
              );
            }(this.matrix, t)),
            We(this, { values: t }, !0)
          );
        }

        rescale() {
          return this.isValid
            ? We(
              this,
              {
                values: (function (t) {
                  const e = {};
                  for (const [n, r] of Object.entries(t)) r !== 0 && (e[n] = r);
                  return e;
                }(this.normalize().shiftToAll().toObject())),
              },
              !0,
            )
            : this;
        }

        shiftTo(...t) {
          if (!this.isValid) return this;
          if (t.length === 0) return this;
          t = t.map((t) => Je.normalizeUnit(t));
          const e = {};
          const n = {};
          const r = this.toObject();
          let s;
          for (const i of Ue) {
            if (t.indexOf(i) >= 0) {
              s = i;
              let t = 0;
              for (const e in n) (t += this.matrix[e][i] * n[e]), (n[e] = 0);
              dt(r[i]) && (t += r[i]);
              const a = Math.trunc(t);
              (e[i] = a), (n[i] = (1e3 * t - 1e3 * a) / 1e3);
              for (const t in r) { Ue.indexOf(t) > Ue.indexOf(i) && Re(this.matrix, r, t, e, i); }
            } else dt(r[i]) && (n[i] = r[i]);
          }
          for (const t in n) n[t] !== 0 && (e[s] += t === s ? n[t] : n[t] / this.matrix[s][t]);
          return We(this, { values: e }, !0).normalize();
        }

        shiftToAll() {
          return this.isValid
            ? this.shiftTo(
              'years',
              'months',
              'weeks',
              'days',
              'hours',
              'minutes',
              'seconds',
              'milliseconds',
            )
            : this;
        }

        negate() {
          if (!this.isValid) return this;
          const t = {};
          for (const e of Object.keys(this.values)) { t[e] = this.values[e] === 0 ? 0 : -this.values[e]; }
          return We(this, { values: t }, !0);
        }

        get years() {
          return this.isValid ? this.values.years || 0 : NaN;
        }

        get quarters() {
          return this.isValid ? this.values.quarters || 0 : NaN;
        }

        get months() {
          return this.isValid ? this.values.months || 0 : NaN;
        }

        get weeks() {
          return this.isValid ? this.values.weeks || 0 : NaN;
        }

        get days() {
          return this.isValid ? this.values.days || 0 : NaN;
        }

        get hours() {
          return this.isValid ? this.values.hours || 0 : NaN;
        }

        get minutes() {
          return this.isValid ? this.values.minutes || 0 : NaN;
        }

        get seconds() {
          return this.isValid ? this.values.seconds || 0 : NaN;
        }

        get milliseconds() {
          return this.isValid ? this.values.milliseconds || 0 : NaN;
        }

        get isValid() {
          return this.invalid === null;
        }

        get invalidReason() {
          return this.invalid ? this.invalid.reason : null;
        }

        get invalidExplanation() {
          return this.invalid ? this.invalid.explanation : null;
        }

        equals(t) {
          if (!this.isValid || !t.isValid) return !1;
          if (!this.loc.equals(t.loc)) return !1;
          for (const r of Ue) {
            if (
              ((e = this.values[r]),
              (n = t.values[r]),
              !(void 0 === e || e === 0 ? void 0 === n || n === 0 : e === n))
            ) { return !1; }
          }
          let e; let
            n;
          return !0;
        }
      }
      const Ye = 'Invalid Interval';
      class Pe {
        constructor(t) {
          (this.s = t.start),
          (this.e = t.end),
          (this.invalid = t.invalid || null),
          (this.isLuxonInterval = !0);
        }

        static invalid(t, e = null) {
          if (!t) { throw new u('need to specify a reason the Interval is invalid'); }
          const n = t instanceof Qt ? t : new Qt(t, e);
          if (ct.throwOnInvalid) throw new s(n);
          return new Pe({ invalid: n });
        }

        static fromDateTimes(t, e) {
          const n = Kn(t);
          const r = Kn(e);
          const s = (function (t, e) {
            return t && t.isValid
              ? e && e.isValid
                ? e < t
                  ? Pe.invalid(
                    'end before start',
                    `The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`,
                  )
                  : null
                : Pe.invalid('missing or invalid end')
              : Pe.invalid('missing or invalid start');
          }(n, r));
          return s == null ? new Pe({ start: n, end: r }) : s;
        }

        static after(t, e) {
          const n = Je.fromDurationLike(e);
          const r = Kn(t);
          return Pe.fromDateTimes(r, r.plus(n));
        }

        static before(t, e) {
          const n = Je.fromDurationLike(e);
          const r = Kn(t);
          return Pe.fromDateTimes(r.minus(n), r);
        }

        static fromISO(t, e) {
          const [n, r] = (t || '').split('/', 2);
          if (n && r) {
            let t; let s; let i; let
              a;
            try {
              (t = Qn.fromISO(n, e)), (s = t.isValid);
            } catch (r) {
              s = !1;
            }
            try {
              (i = Qn.fromISO(r, e)), (a = i.isValid);
            } catch (r) {
              a = !1;
            }
            if (s && a) return Pe.fromDateTimes(t, i);
            if (s) {
              const n = Je.fromISO(r, e);
              if (n.isValid) return Pe.after(t, n);
            } else if (a) {
              const t = Je.fromISO(n, e);
              if (t.isValid) return Pe.before(i, t);
            }
          }
          return Pe.invalid(
            'unparsable',
            `the input "${t}" can't be parsed as ISO 8601`,
          );
        }

        static isInterval(t) {
          return (t && t.isLuxonInterval) || !1;
        }

        get start() {
          return this.isValid ? this.s : null;
        }

        get end() {
          return this.isValid ? this.e : null;
        }

        get isValid() {
          return this.invalidReason === null;
        }

        get invalidReason() {
          return this.invalid ? this.invalid.reason : null;
        }

        get invalidExplanation() {
          return this.invalid ? this.invalid.explanation : null;
        }

        length(t = 'milliseconds') {
          return this.isValid ? this.toDuration(t).get(t) : NaN;
        }

        count(t = 'milliseconds') {
          if (!this.isValid) return NaN;
          const e = this.start.startOf(t);
          const n = this.end.startOf(t);
          return Math.floor(n.diff(e, t).get(t)) + 1;
        }

        hasSame(t) {
          return (
            !!this.isValid
              && (this.isEmpty() || this.e.minus(1).hasSame(this.s, t))
          );
        }

        isEmpty() {
          return this.s.valueOf() === this.e.valueOf();
        }

        isAfter(t) {
          return !!this.isValid && this.s > t;
        }

        isBefore(t) {
          return !!this.isValid && this.e <= t;
        }

        contains(t) {
          return !!this.isValid && this.s <= t && this.e > t;
        }

        set({ start: t, end: e } = {}) {
          return this.isValid
            ? Pe.fromDateTimes(t || this.s, e || this.e)
            : this;
        }

        splitAt(...t) {
          if (!this.isValid) return [];
          const e = t
            .map(Kn)
            .filter((t) => this.contains(t))
            .sort();
          const n = [];
          let { s: r } = this;
          let s = 0;
          for (; r < this.e;) {
            const t = e[s] || this.e;
            const i = +t > +this.e ? this.e : t;
            n.push(Pe.fromDateTimes(r, i)), (r = i), (s += 1);
          }
          return n;
        }

        splitBy(t) {
          const e = Je.fromDurationLike(t);
          if (!this.isValid || !e.isValid || e.as('milliseconds') === 0) { return []; }
          let n;
          let { s: r } = this;
          let s = 1;
          const i = [];
          for (; r < this.e;) {
            const t = this.start.plus(e.mapUnits((t) => t * s));
            (n = +t > +this.e ? this.e : t),
            i.push(Pe.fromDateTimes(r, n)),
            (r = n),
            (s += 1);
          }
          return i;
        }

        divideEqually(t) {
          return this.isValid
            ? this.splitBy(this.length() / t).slice(0, t)
            : [];
        }

        overlaps(t) {
          return this.e > t.s && this.s < t.e;
        }

        abutsStart(t) {
          return !!this.isValid && +this.e == +t.s;
        }

        abutsEnd(t) {
          return !!this.isValid && +t.e == +this.s;
        }

        engulfs(t) {
          return !!this.isValid && this.s <= t.s && this.e >= t.e;
        }

        equals(t) {
          return (
            !(!this.isValid || !t.isValid)
              && this.s.equals(t.s)
              && this.e.equals(t.e)
          );
        }

        intersection(t) {
          if (!this.isValid) return this;
          const e = this.s > t.s ? this.s : t.s;
          const n = this.e < t.e ? this.e : t.e;
          return e >= n ? null : Pe.fromDateTimes(e, n);
        }

        union(t) {
          if (!this.isValid) return this;
          const e = this.s < t.s ? this.s : t.s;
          const n = this.e > t.e ? this.e : t.e;
          return Pe.fromDateTimes(e, n);
        }

        static merge(t) {
          const [e, n] = t
            .sort((t, e) => t.s - e.s)
            .reduce(
              ([t, e], n) => (e
                ? e.overlaps(n) || e.abutsStart(n)
                  ? [t, e.union(n)]
                  : [t.concat([e]), n]
                : [t, n]),
              [[], null],
            );
          return n && e.push(n), e;
        }

        static xor(t) {
          let e = null;
          let n = 0;
          const r = [];
          const s = t.map((t) => [
            { time: t.s, type: 's' },
            { time: t.e, type: 'e' },
          ]);
          const i = Array.prototype.concat(...s).sort((t, e) => t.time - e.time);
          for (const t of i) {
            (n += t.type === 's' ? 1 : -1),
            n === 1
              ? (e = t.time)
              : (e && +e != +t.time && r.push(Pe.fromDateTimes(e, t.time)),
              (e = null));
          }
          return Pe.merge(r);
        }

        difference(...t) {
          return Pe.xor([this].concat(t))
            .map((t) => this.intersection(t))
            .filter((t) => t && !t.isEmpty());
        }

        toString() {
          return this.isValid
            ? `[${this.s.toISO()} – ${this.e.toISO()})`
            : Ye;
        }

        toLocaleString(t = m, e = {}) {
          return this.isValid
            ? Bt.create(this.s.loc.clone(e), t).formatInterval(this)
            : Ye;
        }

        toISO(t) {
          return this.isValid ? `${this.s.toISO(t)}/${this.e.toISO(t)}` : Ye;
        }

        toISODate() {
          return this.isValid
            ? `${this.s.toISODate()}/${this.e.toISODate()}`
            : Ye;
        }

        toISOTime(t) {
          return this.isValid
            ? `${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`
            : Ye;
        }

        toFormat(t, { separator: e = ' – ' } = {}) {
          return this.isValid
            ? `${this.s.toFormat(t)}${e}${this.e.toFormat(t)}`
            : Ye;
        }

        toDuration(t, e) {
          return this.isValid
            ? this.e.diff(this.s, t, e)
            : Je.invalid(this.invalidReason);
        }

        mapEndpoints(t) {
          return Pe.fromDateTimes(t(this.s), t(this.e));
        }
      }
      class Ge {
        static hasDST(t = ct.defaultZone) {
          const e = Qn.now().setZone(t).set({ month: 12 });
          return !t.isUniversal && e.offset !== e.set({ month: 6 }).offset;
        }

        static isValidIANAZone(t) {
          return _.isValidZone(t);
        }

        static normalizeZone(t) {
          return nt(t, ct.defaultZone);
        }

        static months(
          t = 'long',
          {
            locale: e = null,
            numberingSystem: n = null,
            locObj: r = null,
            outputCalendar: s = 'gregory',
          } = {},
        ) {
          return (r || K.create(e, n, s)).months(t);
        }

        static monthsFormat(
          t = 'long',
          {
            locale: e = null,
            numberingSystem: n = null,
            locObj: r = null,
            outputCalendar: s = 'gregory',
          } = {},
        ) {
          return (r || K.create(e, n, s)).months(t, !0);
        }

        static weekdays(
          t = 'long',
          {
            locale: e = null,
            numberingSystem: n = null,
            locObj: r = null,
          } = {},
        ) {
          return (r || K.create(e, n, null)).weekdays(t);
        }

        static weekdaysFormat(
          t = 'long',
          {
            locale: e = null,
            numberingSystem: n = null,
            locObj: r = null,
          } = {},
        ) {
          return (r || K.create(e, n, null)).weekdays(t, !0);
        }

        static meridiems({ locale: t = null } = {}) {
          return K.create(t).meridiems();
        }

        static eras(t = 'short', { locale: e = null } = {}) {
          return K.create(e, null, 'gregory').eras(t);
        }

        static features() {
          return { relative: ft() };
        }
      }
      function Be(t, e) {
        const n = (t) => t.toUTC(0, { keepLocalTime: !0 }).startOf('day').valueOf();
        const r = n(e) - n(t);
        return Math.floor(Je.fromMillis(r).as('days'));
      }
      const Qe = {
        arab: '[٠-٩]',
        arabext: '[۰-۹]',
        bali: '[᭐-᭙]',
        beng: '[০-৯]',
        deva: '[०-९]',
        fullwide: '[０-９]',
        gujr: '[૦-૯]',
        hanidec: '[〇|一|二|三|四|五|六|七|八|九]',
        khmr: '[០-៩]',
        knda: '[೦-೯]',
        laoo: '[໐-໙]',
        limb: '[᥆-᥏]',
        mlym: '[൦-൯]',
        mong: '[᠐-᠙]',
        mymr: '[၀-၉]',
        orya: '[୦-୯]',
        tamldec: '[௦-௯]',
        telu: '[౦-౯]',
        thai: '[๐-๙]',
        tibt: '[༠-༩]',
        latn: '\\d',
      };
      const Ke = {
        arab: [1632, 1641],
        arabext: [1776, 1785],
        bali: [6992, 7001],
        beng: [2534, 2543],
        deva: [2406, 2415],
        fullwide: [65296, 65303],
        gujr: [2790, 2799],
        khmr: [6112, 6121],
        knda: [3302, 3311],
        laoo: [3792, 3801],
        limb: [6470, 6479],
        mlym: [3430, 3439],
        mong: [6160, 6169],
        mymr: [4160, 4169],
        orya: [2918, 2927],
        tamldec: [3046, 3055],
        telu: [3174, 3183],
        thai: [3664, 3673],
        tibt: [3872, 3881],
      };
      const Xe = Qe.hanidec.replace(/[\[|\]]/g, '').split('');
      function tn({ numberingSystem: t }, e = '') {
        return new RegExp(`${Qe[t || 'latn']}${e}`);
      }
      const en = 'missing Intl.DateTimeFormat.formatToParts support';
      function nn(t, e = (t) => t) {
        return {
          regex: t,
          deser: ([t]) => e(
            (function (t) {
              let e = parseInt(t, 10);
              if (isNaN(e)) {
                e = '';
                for (let n = 0; n < t.length; n++) {
                  const r = t.charCodeAt(n);
                  if (t[n].search(Qe.hanidec) !== -1) e += Xe.indexOf(t[n]);
                  else {
                    for (const t in Ke) {
                      const [n, s] = Ke[t];
                      r >= n && r <= s && (e += r - n);
                    }
                  }
                }
                return parseInt(e, 10);
              }
              return e;
            }(t)),
          ),
        };
      }
      const rn = `[ ${String.fromCharCode(160)}]`;
      const sn = new RegExp(rn, 'g');
      function an(t) {
        return t.replace(/\./g, '\\.?').replace(sn, rn);
      }
      function on(t) {
        return t.replace(/\./g, '').replace(sn, ' ').toLowerCase();
      }
      function un(t, e) {
        return t === null
          ? null
          : {
            regex: RegExp(t.map(an).join('|')),
            deser: ([n]) => t.findIndex((t) => on(n) === on(t)) + e,
          };
      }
      function ln(t, e) {
        return { regex: t, deser: ([, t, e]) => It(t, e), groups: e };
      }
      function cn(t) {
        return { regex: t, deser: ([t]) => t };
      }
      const hn = {
        year: { '2-digit': 'yy', numeric: 'yyyyy' },
        month: {
          numeric: 'M', '2-digit': 'MM', short: 'MMM', long: 'MMMM',
        },
        day: { numeric: 'd', '2-digit': 'dd' },
        weekday: { short: 'EEE', long: 'EEEE' },
        dayperiod: 'a',
        dayPeriod: 'a',
        hour: { numeric: 'h', '2-digit': 'hh' },
        minute: { numeric: 'm', '2-digit': 'mm' },
        second: { numeric: 's', '2-digit': 'ss' },
        timeZoneName: { long: 'ZZZZZ', short: 'ZZZ' },
      };
      let dn = null;
      function mn(t, e) {
        return Array.prototype.concat(
          ...t.map((t) => (function (t, e) {
            if (t.literal) return t;
            const n = yn(Bt.macroTokenToFormatOpts(t.val), e);
            return n == null || n.includes(void 0) ? t : n;
          }(t, e))),
        );
      }
      function fn(t, e, n) {
        const r = mn(Bt.parseFormat(n), t);
        const s = r.map((e) => (function (t, e) {
          const n = tn(e);
          const r = tn(e, '{2}');
          const s = tn(e, '{3}');
          const i = tn(e, '{4}');
          const a = tn(e, '{6}');
          const o = tn(e, '{1,2}');
          const u = tn(e, '{1,3}');
          const l = tn(e, '{1,6}');
          const c = tn(e, '{1,9}');
          const h = tn(e, '{2,4}');
          const d = tn(e, '{4,6}');
          const m = (t) => {
            return {
              regex: RegExp(
                ((e = t.val),
                e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')),
              ),
              deser: ([t]) => t,
              literal: !0,
            };
            let e;
          };
          const f = ((f) => {
            if (t.literal) return m(f);
            switch (f.val) {
              case 'G':
                return un(e.eras('short', !1), 0);
              case 'GG':
                return un(e.eras('long', !1), 0);
              case 'y':
                return nn(l);
              case 'yy':
              case 'kk':
                return nn(h, Et);
              case 'yyyy':
              case 'kkkk':
                return nn(i);
              case 'yyyyy':
                return nn(d);
              case 'yyyyyy':
                return nn(a);
              case 'M':
              case 'L':
              case 'd':
              case 'H':
              case 'h':
              case 'm':
              case 'q':
              case 's':
              case 'W':
                return nn(o);
              case 'MM':
              case 'LL':
              case 'dd':
              case 'HH':
              case 'hh':
              case 'mm':
              case 'qq':
              case 'ss':
              case 'WW':
                return nn(r);
              case 'MMM':
                return un(e.months('short', !0, !1), 1);
              case 'MMMM':
                return un(e.months('long', !0, !1), 1);
              case 'LLL':
                return un(e.months('short', !1, !1), 1);
              case 'LLLL':
                return un(e.months('long', !1, !1), 1);
              case 'o':
              case 'S':
                return nn(u);
              case 'ooo':
              case 'SSS':
                return nn(s);
              case 'u':
                return cn(c);
              case 'uu':
                return cn(o);
              case 'uuu':
              case 'E':
              case 'c':
                return nn(n);
              case 'a':
                return un(e.meridiems(), 0);
              case 'EEE':
                return un(e.weekdays('short', !1, !1), 1);
              case 'EEEE':
                return un(e.weekdays('long', !1, !1), 1);
              case 'ccc':
                return un(e.weekdays('short', !0, !1), 1);
              case 'cccc':
                return un(e.weekdays('long', !0, !1), 1);
              case 'Z':
              case 'ZZ':
                return ln(
                  new RegExp(`([+-]${o.source})(?::(${r.source}))?`),
                  2,
                );
              case 'ZZZ':
                return ln(
                  new RegExp(`([+-]${o.source})(${r.source})?`),
                  2,
                );
              case 'z':
                return cn(/[a-z_+-/]{1,256}?/i);
              default:
                return m(f);
            }
          })(t) || { invalidReason: en };
          return (f.token = t), f;
        }(e, t)));
        const i = s.find((t) => t.invalidReason);
        if (i) return { input: e, tokens: r, invalidReason: i.invalidReason };
        {
          const [t, n] = (function (t) {
            return [
              `^${t
                .map((t) => t.regex)
                .reduce((t, e) => `${t}(${e.source})`, '')}$`,
              t,
            ];
          }(s));
          const i = RegExp(t, 'i');
          const [o, u] = (function (t, e, n) {
            const r = t.match(e);
            if (r) {
              const t = {};
              let e = 1;
              for (const s in n) {
                if (gt(n, s)) {
                  const i = n[s];
                  const a = i.groups ? i.groups + 1 : 1;
                  !i.literal
                        && i.token
                        && (t[i.token.val[0]] = i.deser(r.slice(e, e + a))),
                  (e += a);
                }
              }
              return [r, t];
            }
            return [r, {}];
          }(e, i, n));
          const [l, c, h] = u
            ? (function (t) {
              let e;
              let n = null;
              return (
                ht(t.z) || (n = _.create(t.z)),
                ht(t.Z) || (n || (n = new tt(t.Z)), (e = t.Z)),
                ht(t.q) || (t.M = 3 * (t.q - 1) + 1),
                ht(t.h)
                        || (t.h < 12 && t.a === 1
                          ? (t.h += 12)
                          : t.h === 12 && t.a === 0 && (t.h = 0)),
                t.G === 0 && t.y && (t.y = -t.y),
                ht(t.u) || (t.S = Tt(t.u)),
                [
                  Object.keys(t).reduce((e, n) => {
                    const r = ((t) => {
                      switch (t) {
                        case 'S':
                          return 'millisecond';
                        case 's':
                          return 'second';
                        case 'm':
                          return 'minute';
                        case 'h':
                        case 'H':
                          return 'hour';
                        case 'd':
                          return 'day';
                        case 'o':
                          return 'ordinal';
                        case 'L':
                        case 'M':
                          return 'month';
                        case 'y':
                          return 'year';
                        case 'E':
                        case 'c':
                          return 'weekday';
                        case 'W':
                          return 'weekNumber';
                        case 'k':
                          return 'weekYear';
                        case 'q':
                          return 'quarter';
                        default:
                          return null;
                      }
                    })(n);
                    return r && (e[r] = t[n]), e;
                  }, {}),
                  n,
                  e,
                ]
              );
            }(u))
            : [null, null, void 0];
          if (gt(u, 'a') && gt(u, 'H')) {
            throw new a(
              "Can't include meridiem when specifying 24-hour format",
            );
          }
          return {
            input: e,
            tokens: r,
            regex: i,
            rawMatches: o,
            matches: u,
            result: l,
            zone: c,
            specificOffset: h,
          };
        }
      }
      function yn(t, e) {
        return t
          ? Bt.create(e, t)
            .formatDateTimeParts(
              (dn || (dn = Qn.fromMillis(1555555555555)), dn),
            )
            .map((e) => (function (t, e) {
              const { type: n, value: r } = t;
              if (n === 'literal') return { literal: !0, val: r };
              const s = e[n];
              let i = hn[n];
              return (
                typeof i === 'object' && (i = i[s]),
                i ? { literal: !1, val: i } : void 0
              );
            }(e, t)))
          : null;
      }
      const gn = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
      const pn = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
      function wn(t, e) {
        return new Qt(
          'unit out of range',
          `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`,
        );
      }
      function vn(t, e, n) {
        const r = new Date(Date.UTC(t, e - 1, n));
        t < 100 && t >= 0 && r.setUTCFullYear(r.getUTCFullYear() - 1900);
        const s = r.getUTCDay();
        return s === 0 ? 7 : s;
      }
      function Sn(t, e, n) {
        return n + (kt(t) ? pn : gn)[e - 1];
      }
      function Tn(t, e) {
        const n = kt(t) ? pn : gn;
        const r = n.findIndex((t) => t < e);
        return { month: r + 1, day: e - n[r] };
      }
      function bn(t) {
        const { year: e, month: n, day: r } = t;
        const s = Sn(e, n, r);
        const i = vn(e, n, r);
        let a;
        let o = Math.floor((s - i + 10) / 7);
        return (
          o < 1
            ? ((a = e - 1), (o = Dt(a)))
            : o > Dt(e)
              ? ((a = e + 1), (o = 1))
              : (a = e),
          {
            weekYear: a, weekNumber: o, weekday: i, ...Lt(t),
          }
        );
      }
      function kn(t) {
        const { weekYear: e, weekNumber: n, weekday: r } = t;
        const s = vn(e, 1, 4);
        const i = Ot(e);
        let a;
        let o = 7 * n + r - s - 3;
        o < 1
          ? ((a = e - 1), (o += Ot(a)))
          : o > i
            ? ((a = e + 1), (o -= Ot(e)))
            : (a = e);
        const { month: u, day: l } = Tn(a, o);
        return {
          year: a, month: u, day: l, ...Lt(t),
        };
      }
      function On(t) {
        const { year: e, month: n, day: r } = t;
        return { year: e, ordinal: Sn(e, n, r), ...Lt(t) };
      }
      function Mn(t) {
        const { year: e, ordinal: n } = t;
        const { month: r, day: s } = Tn(e, n);
        return {
          year: e, month: r, day: s, ...Lt(t),
        };
      }
      function Nn(t) {
        const e = mt(t.year);
        const n = pt(t.month, 1, 12);
        const r = pt(t.day, 1, Mt(t.year, t.month));
        return e
          ? n
            ? !r && wn('day', t.day)
            : wn('month', t.month)
          : wn('year', t.year);
      }
      function Dn(t) {
        const {
          hour: e, minute: n, second: r, millisecond: s,
        } = t;
        const i = pt(e, 0, 23) || (e === 24 && n === 0 && r === 0 && s === 0);
        const a = pt(n, 0, 59);
        const o = pt(r, 0, 59);
        const u = pt(s, 0, 999);
        return i
          ? a
            ? o
              ? !u && wn('millisecond', s)
              : wn('second', r)
            : wn('minute', n)
          : wn('hour', e);
      }
      const En = 'Invalid DateTime';
      const xn = 864e13;
      function In(t) {
        return new Qt(
          'unsupported zone',
          `the zone "${t.name}" is not supported`,
        );
      }
      function Vn(t) {
        return t.weekData === null && (t.weekData = bn(t.c)), t.weekData;
      }
      function Cn(t, e) {
        const n = {
          ts: t.ts,
          zone: t.zone,
          c: t.c,
          o: t.o,
          loc: t.loc,
          invalid: t.invalid,
        };
        return new Qn({ ...n, ...e, old: n });
      }
      function Fn(t, e, n) {
        let r = t - 60 * e * 1e3;
        const s = n.offset(r);
        if (e === s) return [r, e];
        r -= 60 * (s - e) * 1e3;
        const i = n.offset(r);
        return s === i
          ? [r, s]
          : [t - 60 * Math.min(s, i) * 1e3, Math.max(s, i)];
      }
      function Ln(t, e) {
        const n = new Date((t += 60 * e * 1e3));
        return {
          year: n.getUTCFullYear(),
          month: n.getUTCMonth() + 1,
          day: n.getUTCDate(),
          hour: n.getUTCHours(),
          minute: n.getUTCMinutes(),
          second: n.getUTCSeconds(),
          millisecond: n.getUTCMilliseconds(),
        };
      }
      function Zn(t, e, n) {
        return Fn(Nt(t), e, n);
      }
      function $n(t, e) {
        const n = t.o;
        const r = t.c.year + Math.trunc(e.years);
        const s = t.c.month + Math.trunc(e.months) + 3 * Math.trunc(e.quarters);
        const i = {
          ...t.c,
          year: r,
          month: s,
          day:
                Math.min(t.c.day, Mt(r, s))
                + Math.trunc(e.days)
                + 7 * Math.trunc(e.weeks),
        };
        const a = Je.fromObject({
          years: e.years - Math.trunc(e.years),
          quarters: e.quarters - Math.trunc(e.quarters),
          months: e.months - Math.trunc(e.months),
          weeks: e.weeks - Math.trunc(e.weeks),
          days: e.days - Math.trunc(e.days),
          hours: e.hours,
          minutes: e.minutes,
          seconds: e.seconds,
          milliseconds: e.milliseconds,
        }).as('milliseconds');
        const o = Nt(i);
        let [u, l] = Fn(o, n, t.zone);
        return a !== 0 && ((u += a), (l = t.zone.offset(u))), { ts: u, o: l };
      }
      function An(t, e, n, r, s, i) {
        const { setZone: a, zone: o } = n;
        if (t && Object.keys(t).length !== 0) {
          const r = e || o;
          const s = Qn.fromObject(t, { ...n, zone: r, specificOffset: i });
          return a ? s : s.setZone(o);
        }
        return Qn.invalid(
          new Qt('unparsable', `the input "${s}" can't be parsed as ${r}`),
        );
      }
      function zn(t, e, n = !0) {
        return t.isValid
          ? Bt.create(K.create('en-US'), {
            allowZ: n,
            forceSimple: !0,
          }).formatDateTimeFromString(t, e)
          : null;
      }
      function qn(t, e) {
        const n = t.c.year > 9999 || t.c.year < 0;
        let r = '';
        return (
          n && t.c.year >= 0 && (r += '+'),
          (r += wt(t.c.year, n ? 6 : 4)),
          e
            ? ((r += '-'),
            (r += wt(t.c.month)),
            (r += '-'),
            (r += wt(t.c.day)))
            : ((r += wt(t.c.month)), (r += wt(t.c.day))),
          r
        );
      }
      function jn(t, e, n, r, s, i) {
        let a = wt(t.c.hour);
        return (
          e
            ? ((a += ':'),
            (a += wt(t.c.minute)),
            (t.c.second === 0 && n) || (a += ':'))
            : (a += wt(t.c.minute)),
          (t.c.second === 0 && n)
              || ((a += wt(t.c.second)),
              (t.c.millisecond === 0 && r)
                || ((a += '.'), (a += wt(t.c.millisecond, 3)))),
          s
              && (t.isOffsetFixed && t.offset === 0 && !i
                ? (a += 'Z')
                : t.o < 0
                  ? ((a += '-'),
                  (a += wt(Math.trunc(-t.o / 60))),
                  (a += ':'),
                  (a += wt(Math.trunc(-t.o % 60))))
                  : ((a += '+'),
                  (a += wt(Math.trunc(t.o / 60))),
                  (a += ':'),
                  (a += wt(Math.trunc(t.o % 60))))),
          i && (a += `[${t.zone.ianaName}]`),
          a
        );
      }
      const _n = {
        month: 1,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
      };
      const Un = {
        weekNumber: 1,
        weekday: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
      };
      const Hn = {
        ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0,
      };
      const Wn = [
        'year',
        'month',
        'day',
        'hour',
        'minute',
        'second',
        'millisecond',
      ];
      const Rn = [
        'weekYear',
        'weekNumber',
        'weekday',
        'hour',
        'minute',
        'second',
        'millisecond',
      ];
      const Jn = ['year', 'ordinal', 'hour', 'minute', 'second', 'millisecond'];
      function Yn(t) {
        const e = {
          year: 'year',
          years: 'year',
          month: 'month',
          months: 'month',
          day: 'day',
          days: 'day',
          hour: 'hour',
          hours: 'hour',
          minute: 'minute',
          minutes: 'minute',
          quarter: 'quarter',
          quarters: 'quarter',
          second: 'second',
          seconds: 'second',
          millisecond: 'millisecond',
          milliseconds: 'millisecond',
          weekday: 'weekday',
          weekdays: 'weekday',
          weeknumber: 'weekNumber',
          weeksnumber: 'weekNumber',
          weeknumbers: 'weekNumber',
          weekyear: 'weekYear',
          weekyears: 'weekYear',
          ordinal: 'ordinal',
        }[t.toLowerCase()];
        if (!e) throw new o(t);
        return e;
      }
      function Pn(t, e) {
        const n = nt(e.zone, ct.defaultZone);
        const r = K.fromObject(e);
        const s = ct.now();
        let i; let
          a;
        if (ht(t.year)) i = s;
        else {
          for (const e of Wn) ht(t[e]) && (t[e] = _n[e]);
          const e = Nn(t) || Dn(t);
          if (e) return Qn.invalid(e);
          const r = n.offset(s);
          [i, a] = Zn(t, r, n);
        }
        return new Qn({
          ts: i, zone: n, loc: r, o: a,
        });
      }
      function Gn(t, e, n) {
        const r = !!ht(n.round) || n.round;
        const s = (t, s) => (
          (t = bt(t, r || n.calendary ? 0 : 2, !0)),
          e.loc.clone(n).relFormatter(n).format(t, s)
        );
        const i = (r) => (n.calendary
          ? e.hasSame(t, r)
            ? 0
            : e.startOf(r).diff(t.startOf(r), r).get(r)
          : e.diff(t, r).get(r));
        if (n.unit) return s(i(n.unit), n.unit);
        for (const t of n.units) {
          const e = i(t);
          if (Math.abs(e) >= 1) return s(e, t);
        }
        return s(t > e ? -0 : 0, n.units[n.units.length - 1]);
      }
      function Bn(t) {
        let e;
        let n = {};
        return (
          t.length > 0 && typeof t[t.length - 1] === 'object'
            ? ((n = t[t.length - 1]),
            (e = Array.from(t).slice(0, t.length - 1)))
            : (e = Array.from(t)),
          [n, e]
        );
      }
      class Qn {
        constructor(t) {
          const e = t.zone || ct.defaultZone;
          let n = t.invalid
              || (Number.isNaN(t.ts) ? new Qt('invalid input') : null)
              || (e.isValid ? null : In(e));
          this.ts = ht(t.ts) ? ct.now() : t.ts;
          let r = null;
          let s = null;
          if (!n) {
            if (t.old && t.old.ts === this.ts && t.old.zone.equals(e)) { [r, s] = [t.old.c, t.old.o]; } else {
              const t = e.offset(this.ts);
              (r = Ln(this.ts, t)),
              (n = Number.isNaN(r.year) ? new Qt('invalid input') : null),
              (r = n ? null : r),
              (s = n ? null : t);
            }
          }
          (this._zone = e),
          (this.loc = t.loc || K.create()),
          (this.invalid = n),
          (this.weekData = null),
          (this.c = r),
          (this.o = s),
          (this.isLuxonDateTime = !0);
        }

        static now() {
          return new Qn({});
        }

        static local() {
          const [t, e] = Bn(arguments);
          const [n, r, s, i, a, o, u] = e;
          return Pn(
            {
              year: n,
              month: r,
              day: s,
              hour: i,
              minute: a,
              second: o,
              millisecond: u,
            },
            t,
          );
        }

        static utc() {
          const [t, e] = Bn(arguments);
          const [n, r, s, i, a, o, u] = e;
          return (
            (t.zone = tt.utcInstance),
            Pn(
              {
                year: n,
                month: r,
                day: s,
                hour: i,
                minute: a,
                second: o,
                millisecond: u,
              },
              t,
            )
          );
        }

        static fromJSDate(t, e = {}) {
          const n = ((r = t),
          Object.prototype.toString.call(r) === '[object Date]'
            ? t.valueOf()
            : NaN);
          let r;
          if (Number.isNaN(n)) return Qn.invalid('invalid input');
          const s = nt(e.zone, ct.defaultZone);
          return s.isValid
            ? new Qn({ ts: n, zone: s, loc: K.fromObject(e) })
            : Qn.invalid(In(s));
        }

        static fromMillis(t, e = {}) {
          if (dt(t)) {
            return t < -xn || t > xn
              ? Qn.invalid('Timestamp out of range')
              : new Qn({
                ts: t,
                zone: nt(e.zone, ct.defaultZone),
                loc: K.fromObject(e),
              });
          }
          throw new u(
            `fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`,
          );
        }

        static fromSeconds(t, e = {}) {
          if (dt(t)) {
            return new Qn({
              ts: 1e3 * t,
              zone: nt(e.zone, ct.defaultZone),
              loc: K.fromObject(e),
            });
          }
          throw new u('fromSeconds requires a numerical input');
        }

        static fromObject(t, e = {}) {
          t = t || {};
          const n = nt(e.zone, ct.defaultZone);
          if (!n.isValid) return Qn.invalid(In(n));
          const r = ct.now();
          const s = ht(e.specificOffset) ? n.offset(r) : e.specificOffset;
          const i = Ct(t, Yn);
          const o = !ht(i.ordinal);
          const u = !ht(i.year);
          const l = !ht(i.month) || !ht(i.day);
          const c = u || l;
          const h = i.weekYear || i.weekNumber;
          const d = K.fromObject(e);
          if ((c || o) && h) {
            throw new a(
              "Can't mix weekYear/weekNumber units with year/month/day or ordinals",
            );
          }
          if (l && o) throw new a("Can't mix ordinal dates with month/day");
          const m = h || (i.weekday && !c);
          let f;
          let y;
          let g = Ln(r, s);
          m
            ? ((f = Rn), (y = Un), (g = bn(g)))
            : o
              ? ((f = Jn), (y = Hn), (g = On(g)))
              : ((f = Wn), (y = _n));
          let p = !1;
          for (const t of f) ht(i[t]) ? (i[t] = p ? y[t] : g[t]) : (p = !0);
          const w = m
            ? (function (t) {
              const e = mt(t.weekYear);
              const n = pt(t.weekNumber, 1, Dt(t.weekYear));
              const r = pt(t.weekday, 1, 7);
              return e
                ? n
                  ? !r && wn('weekday', t.weekday)
                  : wn('week', t.week)
                : wn('weekYear', t.weekYear);
            }(i))
            : o
              ? (function (t) {
                const e = mt(t.year);
                const n = pt(t.ordinal, 1, Ot(t.year));
                return e
                  ? !n && wn('ordinal', t.ordinal)
                  : wn('year', t.year);
              }(i))
              : Nn(i);
          const v = w || Dn(i);
          if (v) return Qn.invalid(v);
          const S = m ? kn(i) : o ? Mn(i) : i;
          const [T, b] = Zn(S, s, n);
          const k = new Qn({
            ts: T, zone: n, o: b, loc: d,
          });
          return i.weekday && c && t.weekday !== k.weekday
            ? Qn.invalid(
              'mismatched weekday',
              `you can't specify both a weekday of ${
                i.weekday
              } and a date of ${k.toISO()}`,
            )
            : k;
        }

        static fromISO(t, e = {}) {
          const [n, r] = (function (t) {
            return ee(t, [De, Ve], [Ee, Ce], [xe, Fe], [Ie, Le]);
          }(t));
          return An(n, r, e, 'ISO 8601', t);
        }

        static fromRFC2822(t, e = {}) {
          const [n, r] = (function (t) {
            return ee(
              (function (t) {
                return t
                  .replace(/\([^()]*\)|[\n\t]/g, ' ')
                  .replace(/(\s\s+)/g, ' ')
                  .trim();
              }(t)),
              [Se, Te],
            );
          }(t));
          return An(n, r, e, 'RFC 2822', t);
        }

        static fromHTTP(t, e = {}) {
          const [n, r] = (function (t) {
            return ee(t, [be, Me], [ke, Me], [Oe, Ne]);
          }(t));
          return An(n, r, e, 'HTTP', e);
        }

        static fromFormat(t, e, n = {}) {
          if (ht(t) || ht(e)) { throw new u('fromFormat requires an input string and a format'); }
          const { locale: r = null, numberingSystem: s = null } = n;
          const i = K.fromOpts({
            locale: r,
            numberingSystem: s,
            defaultToEN: !0,
          });
          const [a, o, l, c] = (function (t, e, n) {
            const {
              result: r,
              zone: s,
              specificOffset: i,
              invalidReason: a,
            } = fn(t, e, n);
            return [r, s, i, a];
          }(i, t, e));
          return c ? Qn.invalid(c) : An(a, o, n, `format ${e}`, t, l);
        }

        static fromString(t, e, n = {}) {
          return Qn.fromFormat(t, e, n);
        }

        static fromSQL(t, e = {}) {
          const [n, r] = (function (t) {
            return ee(t, [$e, Ve], [Ae, ze]);
          }(t));
          return An(n, r, e, 'SQL', t);
        }

        static invalid(t, e = null) {
          if (!t) { throw new u('need to specify a reason the DateTime is invalid'); }
          const n = t instanceof Qt ? t : new Qt(t, e);
          if (ct.throwOnInvalid) throw new r(n);
          return new Qn({ invalid: n });
        }

        static isDateTime(t) {
          return (t && t.isLuxonDateTime) || !1;
        }

        static parseFormatForOpts(t, e = {}) {
          const n = yn(t, K.fromObject(e));
          return n ? n.map((t) => (t ? t.val : null)).join('') : null;
        }

        static expandFormat(t, e = {}) {
          return mn(Bt.parseFormat(t), K.fromObject(e))
            .map((t) => t.val)
            .join('');
        }

        get(t) {
          return this[t];
        }

        get isValid() {
          return this.invalid === null;
        }

        get invalidReason() {
          return this.invalid ? this.invalid.reason : null;
        }

        get invalidExplanation() {
          return this.invalid ? this.invalid.explanation : null;
        }

        get locale() {
          return this.isValid ? this.loc.locale : null;
        }

        get numberingSystem() {
          return this.isValid ? this.loc.numberingSystem : null;
        }

        get outputCalendar() {
          return this.isValid ? this.loc.outputCalendar : null;
        }

        get zone() {
          return this._zone;
        }

        get zoneName() {
          return this.isValid ? this.zone.name : null;
        }

        get year() {
          return this.isValid ? this.c.year : NaN;
        }

        get quarter() {
          return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
        }

        get month() {
          return this.isValid ? this.c.month : NaN;
        }

        get day() {
          return this.isValid ? this.c.day : NaN;
        }

        get hour() {
          return this.isValid ? this.c.hour : NaN;
        }

        get minute() {
          return this.isValid ? this.c.minute : NaN;
        }

        get second() {
          return this.isValid ? this.c.second : NaN;
        }

        get millisecond() {
          return this.isValid ? this.c.millisecond : NaN;
        }

        get weekYear() {
          return this.isValid ? Vn(this).weekYear : NaN;
        }

        get weekNumber() {
          return this.isValid ? Vn(this).weekNumber : NaN;
        }

        get weekday() {
          return this.isValid ? Vn(this).weekday : NaN;
        }

        get ordinal() {
          return this.isValid ? On(this.c).ordinal : NaN;
        }

        get monthShort() {
          return this.isValid
            ? Ge.months('short', { locObj: this.loc })[this.month - 1]
            : null;
        }

        get monthLong() {
          return this.isValid
            ? Ge.months('long', { locObj: this.loc })[this.month - 1]
            : null;
        }

        get weekdayShort() {
          return this.isValid
            ? Ge.weekdays('short', { locObj: this.loc })[this.weekday - 1]
            : null;
        }

        get weekdayLong() {
          return this.isValid
            ? Ge.weekdays('long', { locObj: this.loc })[this.weekday - 1]
            : null;
        }

        get offset() {
          return this.isValid ? +this.o : NaN;
        }

        get offsetNameShort() {
          return this.isValid
            ? this.zone.offsetName(this.ts, {
              format: 'short',
              locale: this.locale,
            })
            : null;
        }

        get offsetNameLong() {
          return this.isValid
            ? this.zone.offsetName(this.ts, {
              format: 'long',
              locale: this.locale,
            })
            : null;
        }

        get isOffsetFixed() {
          return this.isValid ? this.zone.isUniversal : null;
        }

        get isInDST() {
          return (
            !this.isOffsetFixed
              && (this.offset > this.set({ month: 1, day: 1 }).offset
                || this.offset > this.set({ month: 5 }).offset)
          );
        }

        get isInLeapYear() {
          return kt(this.year);
        }

        get daysInMonth() {
          return Mt(this.year, this.month);
        }

        get daysInYear() {
          return this.isValid ? Ot(this.year) : NaN;
        }

        get weeksInWeekYear() {
          return this.isValid ? Dt(this.weekYear) : NaN;
        }

        resolvedLocaleOptions(t = {}) {
          const {
            locale: e,
            numberingSystem: n,
            calendar: r,
          } = Bt.create(this.loc.clone(t), t).resolvedOptions(this);
          return { locale: e, numberingSystem: n, outputCalendar: r };
        }

        toUTC(t = 0, e = {}) {
          return this.setZone(tt.instance(t), e);
        }

        toLocal() {
          return this.setZone(ct.defaultZone);
        }

        setZone(t, { keepLocalTime: e = !1, keepCalendarTime: n = !1 } = {}) {
          if ((t = nt(t, ct.defaultZone)).equals(this.zone)) return this;
          if (t.isValid) {
            let r = this.ts;
            if (e || n) {
              const e = t.offset(this.ts);
              const n = this.toObject();
              [r] = Zn(n, e, t);
            }
            return Cn(this, { ts: r, zone: t });
          }
          return Qn.invalid(In(t));
        }

        reconfigure({
          locale: t,
          numberingSystem: e,
          outputCalendar: n,
        } = {}) {
          return Cn(this, {
            loc: this.loc.clone({
              locale: t,
              numberingSystem: e,
              outputCalendar: n,
            }),
          });
        }

        setLocale(t) {
          return this.reconfigure({ locale: t });
        }

        set(t) {
          if (!this.isValid) return this;
          const e = Ct(t, Yn);
          const n = !ht(e.weekYear) || !ht(e.weekNumber) || !ht(e.weekday);
          const r = !ht(e.ordinal);
          const s = !ht(e.year);
          const i = !ht(e.month) || !ht(e.day);
          const o = s || i;
          const u = e.weekYear || e.weekNumber;
          if ((o || r) && u) {
            throw new a(
              "Can't mix weekYear/weekNumber units with year/month/day or ordinals",
            );
          }
          if (i && r) throw new a("Can't mix ordinal dates with month/day");
          let l;
          n
            ? (l = kn({ ...bn(this.c), ...e }))
            : ht(e.ordinal)
              ? ((l = { ...this.toObject(), ...e }),
              ht(e.day) && (l.day = Math.min(Mt(l.year, l.month), l.day)))
              : (l = Mn({ ...On(this.c), ...e }));
          const [c, h] = Zn(l, this.o, this.zone);
          return Cn(this, { ts: c, o: h });
        }

        plus(t) {
          return this.isValid
            ? Cn(this, $n(this, Je.fromDurationLike(t)))
            : this;
        }

        minus(t) {
          return this.isValid
            ? Cn(this, $n(this, Je.fromDurationLike(t).negate()))
            : this;
        }

        startOf(t) {
          if (!this.isValid) return this;
          const e = {};
          const n = Je.normalizeUnit(t);
          switch (n) {
            case 'years':
              e.month = 1;
            case 'quarters':
            case 'months':
              e.day = 1;
            case 'weeks':
            case 'days':
              e.hour = 0;
            case 'hours':
              e.minute = 0;
            case 'minutes':
              e.second = 0;
            case 'seconds':
              e.millisecond = 0;
          }
          if ((n === 'weeks' && (e.weekday = 1), n === 'quarters')) {
            const t = Math.ceil(this.month / 3);
            e.month = 3 * (t - 1) + 1;
          }
          return this.set(e);
        }

        endOf(t) {
          return this.isValid
            ? this.plus({ [t]: 1 })
              .startOf(t)
              .minus(1)
            : this;
        }

        toFormat(t, e = {}) {
          return this.isValid
            ? Bt.create(this.loc.redefaultToEN(e)).formatDateTimeFromString(
              this,
              t,
            )
            : En;
        }

        toLocaleString(t = m, e = {}) {
          return this.isValid
            ? Bt.create(this.loc.clone(e), t).formatDateTime(this)
            : En;
        }

        toLocaleParts(t = {}) {
          return this.isValid
            ? Bt.create(this.loc.clone(t), t).formatDateTimeParts(this)
            : [];
        }

        toISO({
          format: t = 'extended',
          suppressSeconds: e = !1,
          suppressMilliseconds: n = !1,
          includeOffset: r = !0,
          extendedZone: s = !1,
        } = {}) {
          if (!this.isValid) return null;
          const i = t === 'extended';
          let a = qn(this, i);
          return (a += 'T'), (a += jn(this, i, e, n, r, s)), a;
        }

        toISODate({ format: t = 'extended' } = {}) {
          return this.isValid ? qn(this, t === 'extended') : null;
        }

        toISOWeekDate() {
          return zn(this, "kkkk-'W'WW-c");
        }

        toISOTime({
          suppressMilliseconds: t = !1,
          suppressSeconds: e = !1,
          includeOffset: n = !0,
          includePrefix: r = !1,
          extendedZone: s = !1,
          format: i = 'extended',
        } = {}) {
          return this.isValid
            ? (r ? 'T' : '') + jn(this, i === 'extended', e, t, n, s)
            : null;
        }

        toRFC2822() {
          return zn(this, 'EEE, dd LLL yyyy HH:mm:ss ZZZ', !1);
        }

        toHTTP() {
          return zn(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
        }

        toSQLDate() {
          return this.isValid ? qn(this, !0) : null;
        }

        toSQLTime({
          includeOffset: t = !0,
          includeZone: e = !1,
          includeOffsetSpace: n = !0,
        } = {}) {
          let r = 'HH:mm:ss.SSS';
          return (
            (e || t) && (n && (r += ' '), e ? (r += 'z') : t && (r += 'ZZ')),
            zn(this, r, !0)
          );
        }

        toSQL(t = {}) {
          return this.isValid
            ? `${this.toSQLDate()} ${this.toSQLTime(t)}`
            : null;
        }

        toString() {
          return this.isValid ? this.toISO() : En;
        }

        valueOf() {
          return this.toMillis();
        }

        toMillis() {
          return this.isValid ? this.ts : NaN;
        }

        toSeconds() {
          return this.isValid ? this.ts / 1e3 : NaN;
        }

        toUnixInteger() {
          return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
        }

        toJSON() {
          return this.toISO();
        }

        toBSON() {
          return this.toJSDate();
        }

        toObject(t = {}) {
          if (!this.isValid) return {};
          const e = { ...this.c };
          return (
            t.includeConfig
                && ((e.outputCalendar = this.outputCalendar),
                (e.numberingSystem = this.loc.numberingSystem),
                (e.locale = this.loc.locale)),
            e
          );
        }

        toJSDate() {
          return new Date(this.isValid ? this.ts : NaN);
        }

        diff(t, e = 'milliseconds', n = {}) {
          if (!this.isValid || !t.isValid) { return Je.invalid('created by diffing an invalid DateTime'); }
          const r = {
            locale: this.locale,
            numberingSystem: this.numberingSystem,
            ...n,
          };
          const s = ((o = e), Array.isArray(o) ? o : [o]).map(Je.normalizeUnit);
          const i = t.valueOf() > this.valueOf();
          const a = (function (t, e, n, r) {
            let [s, i, a, o] = (function (t, e, n) {
              const r = [
                ['years', (t, e) => e.year - t.year],
                [
                  'quarters',
                  (t, e) => e.quarter - t.quarter + 4 * (e.year - t.year),
                ],
                [
                  'months',
                  (t, e) => e.month - t.month + 12 * (e.year - t.year),
                ],
                [
                  'weeks',
                  (t, e) => {
                    const n = Be(t, e);
                    return (n - (n % 7)) / 7;
                  },
                ],
                ['days', Be],
              ];
              const s = {};
              const i = t;
              let a; let
                o;
              for (const [u, l] of r) {
                n.indexOf(u) >= 0
                      && ((a = u),
                      (s[u] = l(t, e)),
                      (o = i.plus(s)),
                      o > e ? (s[u]--, (t = i.plus(s))) : (t = o));
              }
              return [t, s, o, a];
            }(t, e, n));
            const u = e - s;
            const l = n.filter(
              (t) => ['hours', 'minutes', 'seconds', 'milliseconds'].indexOf(
                t,
              ) >= 0,
            );
            l.length === 0
                  && (a < e && (a = s.plus({ [o]: 1 })),
                  a !== s && (i[o] = (i[o] || 0) + u / (a - s)));
            const c = Je.fromObject(i, r);
            return l.length > 0
              ? Je.fromMillis(u, r)
                .shiftTo(...l)
                .plus(c)
              : c;
          }(i ? this : t, i ? t : this, s, r));
          let o;
          return i ? a.negate() : a;
        }

        diffNow(t = 'milliseconds', e = {}) {
          return this.diff(Qn.now(), t, e);
        }

        until(t) {
          return this.isValid ? Pe.fromDateTimes(this, t) : this;
        }

        hasSame(t, e) {
          if (!this.isValid) return !1;
          const n = t.valueOf();
          const r = this.setZone(t.zone, { keepLocalTime: !0 });
          return r.startOf(e) <= n && n <= r.endOf(e);
        }

        equals(t) {
          return (
            this.isValid
              && t.isValid
              && this.valueOf() === t.valueOf()
              && this.zone.equals(t.zone)
              && this.loc.equals(t.loc)
          );
        }

        toRelative(t = {}) {
          if (!this.isValid) return null;
          const e = t.base || Qn.fromObject({}, { zone: this.zone });
          const n = t.padding ? (this < e ? -t.padding : t.padding) : 0;
          let r = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];
          let s = t.unit;
          return (
            Array.isArray(t.unit) && ((r = t.unit), (s = void 0)),
            Gn(e, this.plus(n), {
              ...t,
              numeric: 'always',
              units: r,
              unit: s,
            })
          );
        }

        toRelativeCalendar(t = {}) {
          return this.isValid
            ? Gn(t.base || Qn.fromObject({}, { zone: this.zone }), this, {
              ...t,
              numeric: 'auto',
              units: ['years', 'months', 'days'],
              calendary: !0,
            })
            : null;
        }

        static min(...t) {
          if (!t.every(Qn.isDateTime)) { throw new u('min requires all arguments be DateTimes'); }
          return yt(t, (t) => t.valueOf(), Math.min);
        }

        static max(...t) {
          if (!t.every(Qn.isDateTime)) { throw new u('max requires all arguments be DateTimes'); }
          return yt(t, (t) => t.valueOf(), Math.max);
        }

        static fromFormatExplain(t, e, n = {}) {
          const { locale: r = null, numberingSystem: s = null } = n;
          return fn(
            K.fromOpts({ locale: r, numberingSystem: s, defaultToEN: !0 }),
            t,
            e,
          );
        }

        static fromStringExplain(t, e, n = {}) {
          return Qn.fromFormatExplain(t, e, n);
        }

        static get DATE_SHORT() {
          return m;
        }

        static get DATE_MED() {
          return f;
        }

        static get DATE_MED_WITH_WEEKDAY() {
          return y;
        }

        static get DATE_FULL() {
          return g;
        }

        static get DATE_HUGE() {
          return p;
        }

        static get TIME_SIMPLE() {
          return w;
        }

        static get TIME_WITH_SECONDS() {
          return v;
        }

        static get TIME_WITH_SHORT_OFFSET() {
          return S;
        }

        static get TIME_WITH_LONG_OFFSET() {
          return T;
        }

        static get TIME_24_SIMPLE() {
          return b;
        }

        static get TIME_24_WITH_SECONDS() {
          return k;
        }

        static get TIME_24_WITH_SHORT_OFFSET() {
          return O;
        }

        static get TIME_24_WITH_LONG_OFFSET() {
          return M;
        }

        static get DATETIME_SHORT() {
          return N;
        }

        static get DATETIME_SHORT_WITH_SECONDS() {
          return D;
        }

        static get DATETIME_MED() {
          return E;
        }

        static get DATETIME_MED_WITH_SECONDS() {
          return x;
        }

        static get DATETIME_MED_WITH_WEEKDAY() {
          return I;
        }

        static get DATETIME_FULL() {
          return V;
        }

        static get DATETIME_FULL_WITH_SECONDS() {
          return C;
        }

        static get DATETIME_HUGE() {
          return F;
        }

        static get DATETIME_HUGE_WITH_SECONDS() {
          return L;
        }
      }
      function Kn(t) {
        if (Qn.isDateTime(t)) return t;
        if (t && t.valueOf && dt(t.valueOf())) return Qn.fromJSDate(t);
        if (t && typeof t === 'object') return Qn.fromObject(t);
        throw new u(`Unknown datetime argument: ${t}, of type ${typeof t}`);
      }
      (e.DateTime = Qn),
      (e.Duration = Je),
      (e.FixedOffsetZone = tt),
      (e.IANAZone = _),
      (e.Info = Ge),
      (e.Interval = Pe),
      (e.InvalidZone = et),
      (e.Settings = ct),
      (e.SystemZone = A),
      (e.VERSION = '3.2.1'),
      (e.Zone = Z);
    },
  };
  const e = {};
  function n(r) {
    const s = e[r];
    if (void 0 !== s) return s.exports;
    const i = (e[r] = { exports: {} });
    return t[r](i, i.exports, n), i.exports;
  }
  (() => {
    const t = document.querySelector('.add-button');
    const e = document.querySelector('#title-input');
    const r = document.querySelector('#author-input');
    const s = document.querySelectorAll('.section');
    const i = document.querySelector('.nav-Bar');
    const a = document.querySelector('.books-container');
    const o = document.querySelector('.date-and-time');
    const { DateTime: u } = n(565);
    const l = new (class {
      constructor(t) {
        this.bookArray = t;
      }

      displayBooks() {
        const t = document.querySelector('.books-container');
        (t.innerHTML = ''),
        this.bookArray.forEach((e) => {
          t.insertAdjacentHTML(
            'beforeend',
            `\n        <div class="book-details" id="book-${e.id}">\n          <p>"${e.title}" by ${e.author}</p> \n          <button class="remove" type="button" id="remove-${e.id}">Remove</button>\n        </div>`,
          );
        }),
        this.bookArray.length !== 0
          ? (t.style.border = 'solid 3px #000000')
          : (t.style.border = 'none');
      }

      storeInLocalBrowser() {
        localStorage.setItem(
          'bookCollectionArray',
          JSON.stringify(this.bookArray),
        );
      }

      removeBook(t) {
        this.bookArray.splice(t, 1),
        this.storeInLocalBrowser(),
        this.bookArray.forEach((t, e) => {
          t.id = e;
        }),
        this.displayBooks();
      }

      addBook(t, e) {
        if (t.value && e.value) {
          const n = t.value;
          const r = e.value;
          this.bookArray.push({
            title: n,
            author: r,
            id: this.bookArray.length,
          }),
          (t.value = e.value = ''),
          this.storeInLocalBrowser(),
          this.displayBooks();
        }
      }
    })([]);
    t.addEventListener('click', l.addBook.bind(l, e, r)),
    i.addEventListener('click', (t) => {
      if (t.target.classList.contains('nav-link')) {
        const e = t.target.href.split('#')[1];
        document.querySelectorAll('.section').forEach((t) => {
          t.id === e
            ? (t.style.display = 'flex')
            : (t.style.display = 'none');
        });
      }
    }),
    s.forEach((t) => {
      t === s[1] ? (t.style.display = 'flex') : (t.style.display = 'none');
    }),
    a.addEventListener('click', (t) => {
      if (t.target.classList.contains('remove')) {
        const e = t.target;
        const n = l.bookArray.find((t) => t.id === e.id.split('-')[1]);
        l.removeBook(n);
      }
    }),
    setInterval(() => {
      const t = u.now().toLocaleString(u.DATETIME_FULL);
      o.textContent = t;
    }, 1e3);
  })();
})();
