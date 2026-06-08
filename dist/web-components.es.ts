import e, { useState as t } from "react";
//#region \0rolldown/runtime.js
var n = Object.create, r = Object.defineProperty, i = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, o = Object.getPrototypeOf, s = Object.prototype.hasOwnProperty, c = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), l = (e, t, n, o) => {
	if (t && typeof t == "object" || typeof t == "function") for (var c = a(t), l = 0, u = c.length, d; l < u; l++) d = c[l], !s.call(e, d) && d !== n && r(e, d, {
		get: ((e) => t[e]).bind(null, d),
		enumerable: !(o = i(t, d)) || o.enumerable
	});
	return e;
}, u = (e, t, i) => (i = e == null ? {} : n(o(e)), l(t || !e || !e.__esModule ? r(i, "default", {
	value: e,
	enumerable: !0
}) : i, e)), d = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), f = /* @__PURE__ */ c(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), p = /* @__PURE__ */ c(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === k ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case v: return "Fragment";
				case b: return "Profiler";
				case y: return "StrictMode";
				case w: return "Suspense";
				case T: return "SuspenseList";
				case O: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case _: return "Portal";
				case S: return e.displayName || "Context";
				case x: return (e._context.displayName || "Context") + ".Consumer";
				case C:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case E: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case D:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function n(e) {
			return "" + e;
		}
		function r(e) {
			try {
				n(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var r = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return r.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), n(e);
			}
		}
		function i(e) {
			if (e === v) return "<>";
			if (typeof e == "object" && e && e.$$typeof === D) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function a() {
			var e = A.A;
			return e === null ? null : e.getOwner();
		}
		function o() {
			return Error("react-stack-top-frame");
		}
		function s(e) {
			if (j.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function c(e, t) {
			function n() {
				P || (P = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function l() {
			var e = t(this.type);
			return F[e] || (F[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function u(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: g,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: l
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function f(e, n, i, o, l, d) {
			var f = n.children;
			if (f !== void 0) if (o) if (M(f)) {
				for (o = 0; o < f.length; o++) p(f[o]);
				Object.freeze && Object.freeze(f);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else p(f);
			if (j.call(n, "key")) {
				f = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				o = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", R[f + o] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", o, f, m, f), R[f + o] = !0);
			}
			if (f = null, i !== void 0 && (r(i), f = "" + i), s(n) && (r(n.key), f = "" + n.key), "key" in n) for (var h in i = {}, n) h !== "key" && (i[h] = n[h]);
			else i = n;
			return f && c(i, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), u(e, f, i, a(), l, d);
		}
		function p(e) {
			m(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === D && (e._payload.status === "fulfilled" ? m(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function m(e) {
			return typeof e == "object" && !!e && e.$$typeof === g;
		}
		var h = d("react"), g = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), A = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, M = Array.isArray, N = console.createTask ? console.createTask : function() {
			return null;
		};
		h = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var P, F = {}, I = h.react_stack_bottom_frame.bind(h, o)(), L = N(i(o)), R = {};
		e.Fragment = v, e.jsx = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !1, r ? Error("react-stack-top-frame") : I, r ? N(i(e)) : L);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !0, r ? Error("react-stack-top-frame") : I, r ? N(i(e)) : L);
		};
	})();
})), m = /* @__PURE__ */ c(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = f() : t.exports = p();
})), h = m(), g = () => /* @__PURE__ */ (0, h.jsx)("span", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white" }), _ = ({ variant: e = "primary", label: t, isLoading: n = !1, disabled: r = !1, onClick: i }) => {
	let a = {
		primary: "bg-primary-button text-primary",
		secondary: "bg-secondary-button text-primary",
		restore: "bg-restore-button text-primary",
		delete: "bg-delete-button text-primary",
		disabled: "bg-disabled-button text-primary"
	}, o = n ? /* @__PURE__ */ (0, h.jsx)(g, {}) : null, s = r || n;
	return /* @__PURE__ */ (0, h.jsx)("div", { children: /* @__PURE__ */ (0, h.jsxs)("button", {
		className: `${a[e]} flex items-center gap-3 px-4 py-2 rounded-2xl text-sm font-medium w-full justify-center md:w-70 lg:w-25
       ${s ? "cursor-not-allowed opacity-50" : "hover:cursor-pointer"}`,
		disabled: s,
		onClick: i,
		children: [o, t]
	}) });
}, v = ({ children: e }) => /* @__PURE__ */ (0, h.jsx)("div", {
	className: "bg-primary w-full max-w-sm rounded-lg shadow-md overflow-hidden",
	children: e
}), y = /* @__PURE__ */ c(((e) => {
	function t(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e._ = t;
})), b = /* @__PURE__ */ c(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "warnOnce", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = (e) => {};
	if (process.env.NODE_ENV !== "production") {
		let e = /* @__PURE__ */ new Set();
		t = (t) => {
			e.has(t) || console.warn(t), e.add(t);
		};
	}
})), x = /* @__PURE__ */ c(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		getAssetToken: function() {
			return a;
		},
		getAssetTokenQuery: function() {
			return o;
		},
		getDeploymentId: function() {
			return r;
		},
		getDeploymentIdQuery: function() {
			return i;
		}
	});
	var n;
	typeof window < "u" ? (n = document.documentElement.dataset.dplId, delete document.documentElement.dataset.dplId) : n = process.env.NEXT_DEPLOYMENT_ID || void 0;
	function r() {
		return n;
	}
	function i(e = !1) {
		let t = r();
		return t ? `${e ? "&" : "?"}dpl=${t}` : "";
	}
	function a() {
		return process.env.NEXT_IMMUTABLE_ASSET_TOKEN || process.env.NEXT_DEPLOYMENT_ID;
	}
	function o(e = !1) {
		let t = a();
		return t ? `${e ? "&" : "?"}dpl=${t}` : "";
	}
})), S = /* @__PURE__ */ c(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "getImageBlurSvg", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	function t({ widthInt: e, heightInt: t, blurWidth: n, blurHeight: r, blurDataURL: i, objectFit: a }) {
		let o = n ? n * 40 : e, s = r ? r * 40 : t, c = o && s ? `viewBox='0 0 ${o} ${s}'` : "";
		return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c ? "none" : a === "contain" ? "xMidYMid" : a === "cover" ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${i}'/%3E%3C/svg%3E`;
	}
})), C = /* @__PURE__ */ c(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		VALID_LOADERS: function() {
			return n;
		},
		imageConfigDefault: function() {
			return r;
		}
	});
	var n = [
		"default",
		"imgix",
		"cloudinary",
		"akamai",
		"custom"
	], r = {
		deviceSizes: [
			640,
			750,
			828,
			1080,
			1200,
			1920,
			2048,
			3840
		],
		imageSizes: [
			32,
			48,
			64,
			96,
			128,
			256,
			384
		],
		path: "/_next/image",
		loader: "default",
		loaderFile: "",
		domains: [],
		disableStaticImages: !1,
		minimumCacheTTL: 14400,
		formats: ["image/webp"],
		maximumDiskCacheSize: void 0,
		maximumRedirects: 3,
		maximumResponseBody: 5e7,
		dangerouslyAllowLocalIP: !1,
		dangerouslyAllowSVG: !1,
		contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
		contentDispositionType: "attachment",
		localPatterns: void 0,
		remotePatterns: [],
		qualities: [75],
		unoptimized: !1,
		customCacheHandler: !1
	};
})), w = /* @__PURE__ */ c(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "getImgProps", {
		enumerable: !0,
		get: function() {
			return h;
		}
	});
	var t = b(), n = x(), r = S(), i = C(), a = [
		"lazy",
		"eager",
		void 0
	], o = [
		"-moz-initial",
		"fill",
		"none",
		"scale-down",
		void 0
	];
	function s(e) {
		return e.default !== void 0;
	}
	function c(e) {
		return e.src !== void 0;
	}
	function l(e) {
		return !!e && typeof e == "object" && (s(e) || c(e));
	}
	var u = /* @__PURE__ */ new Map(), d;
	function f(e) {
		return e === void 0 ? e : typeof e == "number" ? Number.isFinite(e) ? e : NaN : typeof e == "string" && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN;
	}
	function p({ deviceSizes: e, allSizes: t }, n, r) {
		if (r) {
			let n = /(^|\s)(1?\d?\d)vw/g, i = [];
			for (let e; e = n.exec(r);) i.push(parseInt(e[2]));
			if (i.length) {
				let n = Math.min(...i) * .01;
				return {
					widths: t.filter((t) => t >= e[0] * n),
					kind: "w"
				};
			}
			return {
				widths: t,
				kind: "w"
			};
		}
		return typeof n == "number" ? {
			widths: [...new Set([n, n * 2].map((e) => t.find((t) => t >= e) || t[t.length - 1]))],
			kind: "x"
		} : {
			widths: e,
			kind: "w"
		};
	}
	function m({ config: e, src: t, unoptimized: r, width: i, quality: a, sizes: o, loader: s }) {
		if (r) {
			if (t.startsWith("/") && !t.startsWith("//")) {
				let e = (0, n.getDeploymentId)();
				if (e) {
					let n = t.indexOf("?");
					if (n !== -1) {
						let r = new URLSearchParams(t.slice(n + 1));
						r.get("dpl") || (r.append("dpl", e), t = t.slice(0, n) + "?" + r.toString());
					} else t += `?dpl=${e}`;
				}
			}
			return {
				src: t,
				srcSet: void 0,
				sizes: void 0
			};
		}
		let { widths: c, kind: l } = p(e, i, o), u = c.length - 1;
		return {
			sizes: !o && l === "w" ? "100vw" : o,
			srcSet: c.map((n, r) => `${s({
				config: e,
				src: t,
				quality: a,
				width: n
			})} ${l === "w" ? n : r + 1}${l}`).join(", "),
			src: s({
				config: e,
				src: t,
				quality: a,
				width: c[u]
			})
		};
	}
	function h({ src: e, sizes: n, unoptimized: c = !1, priority: p = !1, preload: h = !1, loading: g, className: _, quality: v, width: y, height: b, fill: x = !1, style: S, overrideSrc: C, onLoad: w, onLoadingComplete: T, placeholder: E = "empty", blurDataURL: D, fetchPriority: O, decoding: k = "async", layout: A, objectFit: j, objectPosition: M, lazyBoundary: N, lazyRoot: P, ...F }, I) {
		let { imgConf: L, showAltText: R, blurComplete: z, defaultLoader: B } = I, V, H = L || i.imageConfigDefault;
		if ("allSizes" in H) V = H;
		else {
			let e = [...H.deviceSizes, ...H.imageSizes].sort((e, t) => e - t), t = H.deviceSizes.sort((e, t) => e - t), n = H.qualities?.sort((e, t) => e - t);
			V = {
				...H,
				allSizes: e,
				deviceSizes: t,
				qualities: n
			};
		}
		if (B === void 0) throw Object.defineProperty(/* @__PURE__ */ Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
			value: "E163",
			enumerable: !1,
			configurable: !0
		});
		let U = F.loader || B;
		delete F.loader, delete F.srcSet;
		let W = "__next_img_default" in U;
		if (W) {
			if (V.loader === "custom") throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
				value: "E252",
				enumerable: !1,
				configurable: !0
			});
		} else {
			let e = U;
			U = (t) => {
				let { config: n, ...r } = t;
				return e(r);
			};
		}
		if (A) {
			A === "fill" && (x = !0);
			let e = {
				intrinsic: {
					maxWidth: "100%",
					height: "auto"
				},
				responsive: {
					width: "100%",
					height: "auto"
				}
			}, t = {
				responsive: "100vw",
				fill: "100vw"
			}, r = e[A];
			r && (S = {
				...S,
				...r
			});
			let i = t[A];
			i && !n && (n = i);
		}
		let G = "", K = f(y), q = f(b), J, Y;
		if (l(e)) {
			let t = s(e) ? e.default : e;
			if (!t.src) throw Object.defineProperty(/* @__PURE__ */ Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
				value: "E460",
				enumerable: !1,
				configurable: !0
			});
			if (!t.height || !t.width) throw Object.defineProperty(/* @__PURE__ */ Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
				value: "E48",
				enumerable: !1,
				configurable: !0
			});
			if (J = t.blurWidth, Y = t.blurHeight, D ||= t.blurDataURL, G = t.src, !x) {
				if (!K && !q) K = t.width, q = t.height;
				else if (K && !q) {
					let e = K / t.width;
					q = Math.round(t.height * e);
				} else if (!K && q) {
					let e = q / t.height;
					K = Math.round(t.width * e);
				}
			}
		}
		e = typeof e == "string" ? e : G;
		let X = !p && !h && (g === "lazy" || g === void 0);
		(!e || e.startsWith("data:") || e.startsWith("blob:")) && (c = !0, X = !1), V.unoptimized && (c = !0), W && !V.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (c = !0);
		let Z = f(v);
		if (process.env.NODE_ENV !== "production") {
			if (V.output === "export" && W && !c) throw Object.defineProperty(/* @__PURE__ */ Error("Image Optimization using the default loader is not compatible with `{ output: 'export' }`.\n  Possible solutions:\n    - Remove `{ output: 'export' }` and run \"next start\" to run server mode including the Image Optimization API.\n    - Configure `{ images: { unoptimized: true } }` in `next.config.js` to disable the Image Optimization API.\n  Read more: https://nextjs.org/docs/messages/export-image-api"), "__NEXT_ERROR_CODE", {
				value: "E500",
				enumerable: !1,
				configurable: !0
			});
			if (!e) c = !0;
			else if (x) {
				if (y) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has both "width" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
					value: "E96",
					enumerable: !1,
					configurable: !0
				});
				if (b) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has both "height" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
					value: "E115",
					enumerable: !1,
					configurable: !0
				});
				if (S?.position && S.position !== "absolute") throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has both "fill" and "style.position" properties. Images with "fill" always use position absolute - it cannot be modified.`), "__NEXT_ERROR_CODE", {
					value: "E216",
					enumerable: !1,
					configurable: !0
				});
				if (S?.width && S.width !== "100%") throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has both "fill" and "style.width" properties. Images with "fill" always use width 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
					value: "E73",
					enumerable: !1,
					configurable: !0
				});
				if (S?.height && S.height !== "100%") throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has both "fill" and "style.height" properties. Images with "fill" always use height 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
					value: "E404",
					enumerable: !1,
					configurable: !0
				});
			} else {
				if (K === void 0) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" is missing required "width" property.`), "__NEXT_ERROR_CODE", {
					value: "E451",
					enumerable: !1,
					configurable: !0
				});
				if (isNaN(K)) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has invalid "width" property. Expected a numeric value in pixels but received "${y}".`), "__NEXT_ERROR_CODE", {
					value: "E66",
					enumerable: !1,
					configurable: !0
				});
				if (q === void 0) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" is missing required "height" property.`), "__NEXT_ERROR_CODE", {
					value: "E397",
					enumerable: !1,
					configurable: !0
				});
				if (isNaN(q)) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has invalid "height" property. Expected a numeric value in pixels but received "${b}".`), "__NEXT_ERROR_CODE", {
					value: "E444",
					enumerable: !1,
					configurable: !0
				});
				if (/^[\x00-\x20]/.test(e)) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" cannot start with a space or control character. Use src.trimStart() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
					value: "E176",
					enumerable: !1,
					configurable: !0
				});
				if (/[\x00-\x20]$/.test(e)) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" cannot end with a space or control character. Use src.trimEnd() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
					value: "E21",
					enumerable: !1,
					configurable: !0
				});
			}
			if (!a.includes(g)) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has invalid "loading" property. Provided "${g}" should be one of ${a.map(String).join(",")}.`), "__NEXT_ERROR_CODE", {
				value: "E357",
				enumerable: !1,
				configurable: !0
			});
			if (p && g === "lazy") throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has both "priority" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
				value: "E218",
				enumerable: !1,
				configurable: !0
			});
			if (h && g === "lazy") throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has both "preload" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
				value: "E803",
				enumerable: !1,
				configurable: !0
			});
			if (h && p) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has both "preload" and "priority" properties. Only "preload" should be used.`), "__NEXT_ERROR_CODE", {
				value: "E802",
				enumerable: !1,
				configurable: !0
			});
			if (E !== "empty" && E !== "blur" && !E.startsWith("data:image/")) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has invalid "placeholder" property "${E}".`), "__NEXT_ERROR_CODE", {
				value: "E431",
				enumerable: !1,
				configurable: !0
			});
			if (E !== "empty" && K && q && K * q < 1600 && (0, t.warnOnce)(`Image with src "${e}" is smaller than 40x40. Consider removing the "placeholder" property to improve performance.`), Z && V.qualities && !V.qualities.includes(Z) && (0, t.warnOnce)(`Image with src "${e}" is using quality "${Z}" which is not configured in images.qualities [${V.qualities.join(", ")}]. Please update your config to [${[...V.qualities, Z].sort().join(", ")}].\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-qualities`), E === "blur" && !D) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
        Possible solutions:
          - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
          - Change the "src" property to a static import with one of the supported file types: ${[
				"jpeg",
				"png",
				"webp",
				"avif"
			].join(",")} (animated images not supported)
          - Remove the "placeholder" property, effectively no blur effect
        Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`), "__NEXT_ERROR_CODE", {
				value: "E371",
				enumerable: !1,
				configurable: !0
			});
			if ("ref" in F && (0, t.warnOnce)(`Image with src "${e}" is using unsupported "ref" property. Consider using the "onLoad" property instead.`), !c && !W) {
				let n = U({
					config: V,
					src: e,
					width: K || 400,
					quality: Z || 75
				}), r;
				try {
					r = new URL(n);
				} catch {}
				(n === e || r && r.pathname === e && !r.search) && (0, t.warnOnce)(`Image with src "${e}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
			}
			T && (0, t.warnOnce)(`Image with src "${e}" is using deprecated "onLoadingComplete" property. Please use the "onLoad" property instead.`);
			for (let [n, r] of Object.entries({
				layout: A,
				objectFit: j,
				objectPosition: M,
				lazyBoundary: N,
				lazyRoot: P
			})) r && (0, t.warnOnce)(`Image with src "${e}" has legacy prop "${n}". Did you forget to run the codemod?\nRead more: https://nextjs.org/docs/messages/next-image-upgrade-to-13`);
			if (typeof window < "u" && !d && window.PerformanceObserver) {
				d = new PerformanceObserver((e) => {
					for (let n of e.getEntries()) {
						let e = n?.element?.src || "", r = u.get(e);
						r && r.loading === "lazy" && r.placeholder === "empty" && !r.src.startsWith("data:") && !r.src.startsWith("blob:") && (0, t.warnOnce)(`Image with src "${r.src}" was detected as the Largest Contentful Paint (LCP). Please add the \`loading="eager"\` property if this image is above the fold.\nRead more: https://nextjs.org/docs/app/api-reference/components/image#loading`);
					}
				});
				try {
					d.observe({
						type: "largest-contentful-paint",
						buffered: !0
					});
				} catch (e) {
					console.error(e);
				}
			}
		}
		let Q = Object.assign(x ? {
			position: "absolute",
			height: "100%",
			width: "100%",
			left: 0,
			top: 0,
			right: 0,
			bottom: 0,
			objectFit: j,
			objectPosition: M
		} : {}, R ? {} : { color: "transparent" }, S), ee = !z && E !== "empty" ? E === "blur" ? `url("data:image/svg+xml;charset=utf-8,${(0, r.getImageBlurSvg)({
			widthInt: K,
			heightInt: q,
			blurWidth: J,
			blurHeight: Y,
			blurDataURL: D || "",
			objectFit: Q.objectFit
		})}")` : `url("${E}")` : null, te = o.includes(Q.objectFit) ? Q.objectFit === "fill" ? "100% 100%" : "cover" : Q.objectFit, ne = ee ? {
			backgroundSize: te,
			backgroundPosition: Q.objectPosition || "50% 50%",
			backgroundRepeat: "no-repeat",
			backgroundImage: ee
		} : {};
		process.env.NODE_ENV === "development" && ne.backgroundImage && E === "blur" && D?.startsWith("/") && (ne.backgroundImage = `url("${D}")`);
		let $ = m({
			config: V,
			src: e,
			unoptimized: c,
			width: K,
			quality: Z,
			sizes: n,
			loader: U
		}), re = X ? "lazy" : g;
		if (process.env.NODE_ENV !== "production" && typeof window < "u") {
			let t;
			try {
				t = new URL($.src);
			} catch {
				t = new URL($.src, window.location.href);
			}
			u.set(t.href, {
				src: e,
				loading: re,
				placeholder: E
			});
		}
		return {
			props: {
				...F,
				loading: re,
				fetchPriority: O,
				width: K,
				height: q,
				decoding: k,
				className: _,
				style: {
					...Q,
					...ne
				},
				sizes: $.sizes,
				srcSet: $.srcSet,
				src: C || $.src
			},
			meta: {
				unoptimized: c,
				preload: h || p,
				placeholder: E,
				fill: x
			}
		};
	}
})), T = /* @__PURE__ */ c(((e) => {
	function t(e) {
		if (typeof WeakMap != "function") return null;
		var n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
		return (t = function(e) {
			return e ? r : n;
		})(e);
	}
	function n(e, n) {
		if (!n && e && e.__esModule) return e;
		if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
		var r = t(n);
		if (r && r.has(e)) return r.get(e);
		var i = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
		for (var o in e) if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
			var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
			s && (s.get || s.set) ? Object.defineProperty(i, o, s) : i[o] = e[o];
		}
		return i.default = e, r && r.set(e, i), i;
	}
	e._ = n;
})), E = /* @__PURE__ */ c(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "default", {
		enumerable: !0,
		get: function() {
			return a;
		}
	});
	var t = d("react"), n = typeof window > "u", r = n ? () => {} : t.useLayoutEffect, i = n ? () => {} : t.useEffect;
	function a(e) {
		let { headManager: a, reduceComponentsToState: o } = e;
		function s() {
			if (a && a.mountedInstances) {
				let e = t.Children.toArray(Array.from(a.mountedInstances).filter(Boolean));
				a.updateHead(o(e));
			}
		}
		return n && (a?.mountedInstances?.add(e.children), s()), r(() => (a?.mountedInstances?.add(e.children), () => {
			a?.mountedInstances?.delete(e.children);
		})), r(() => (a && (a._pendingUpdate = s), () => {
			a && (a._pendingUpdate = s);
		})), i(() => (a && a._pendingUpdate && (a._pendingUpdate(), a._pendingUpdate = null), () => {
			a && a._pendingUpdate && (a._pendingUpdate(), a._pendingUpdate = null);
		})), null;
	}
})), D = /* @__PURE__ */ c(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "HeadManagerContext", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = (/* @__PURE__ */ y()._(d("react"))).default.createContext({});
	process.env.NODE_ENV !== "production" && (t.displayName = "HeadManagerContext");
})), O = /* @__PURE__ */ c(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function n(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	n(e, {
		default: function() {
			return v;
		},
		defaultHead: function() {
			return u;
		}
	});
	var r = y(), i = T(), a = m(), o = /* @__PURE__ */ i._(d("react")), s = /* @__PURE__ */ r._(E()), c = D(), l = b();
	function u() {
		return [/* @__PURE__ */ (0, a.jsx)("meta", { charSet: "utf-8" }, "charset"), /* @__PURE__ */ (0, a.jsx)("meta", {
			name: "viewport",
			content: "width=device-width"
		}, "viewport")];
	}
	function f(e, t) {
		return typeof t == "string" || typeof t == "number" ? e : t.type === o.default.Fragment ? e.concat(o.default.Children.toArray(t.props.children).reduce((e, t) => typeof t == "string" || typeof t == "number" ? e : e.concat(t), [])) : e.concat(t);
	}
	var p = [
		"name",
		"httpEquiv",
		"charSet",
		"itemProp"
	];
	function h() {
		let e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = {};
		return (i) => {
			let a = !0, o = !1;
			if (i.key && typeof i.key != "number" && i.key.indexOf("$") > 0) {
				o = !0;
				let t = i.key.slice(i.key.indexOf("$") + 1);
				e.has(t) ? a = !1 : e.add(t);
			}
			switch (i.type) {
				case "title":
				case "base":
					t.has(i.type) ? a = !1 : t.add(i.type);
					break;
				case "meta":
					for (let e = 0, t = p.length; e < t; e++) {
						let t = p[e];
						if (i.props.hasOwnProperty(t)) if (t === "charSet") n.has(t) ? a = !1 : n.add(t);
						else {
							let e = i.props[t], n = r[t] || /* @__PURE__ */ new Set();
							(t !== "name" || !o) && n.has(e) ? a = !1 : (n.add(e), r[t] = n);
						}
					}
					break;
			}
			return a;
		};
	}
	function g(e) {
		return e.reduce(f, []).reverse().concat(u().reverse()).filter(h()).reverse().map((e, t) => {
			let n = e.key || t;
			if (process.env.NODE_ENV === "development") if (e.type === "script" && e.props.type !== "application/ld+json") {
				let t = e.props.src ? `<script> tag with src="${e.props.src}"` : "inline <script>";
				(0, l.warnOnce)(`Do not add <script> tags using next/head (see ${t}). Use next/script instead. \nSee more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component`);
			} else e.type === "link" && e.props.rel === "stylesheet" && (0, l.warnOnce)(`Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="${e.props.href}"). Use Document instead. \nSee more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component`);
			return /* @__PURE__ */ o.default.cloneElement(e, { key: n });
		});
	}
	function _({ children: e }) {
		let t = (0, o.useContext)(c.HeadManagerContext);
		return /* @__PURE__ */ (0, a.jsx)(s.default, {
			reduceComponentsToState: g,
			headManager: t,
			children: e
		});
	}
	var v = _;
	(typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && e.default.__esModule === void 0 && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
})), k = /* @__PURE__ */ c(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "ImageConfigContext", {
		enumerable: !0,
		get: function() {
			return r;
		}
	});
	var t = /* @__PURE__ */ y()._(d("react")), n = C(), r = t.default.createContext(n.imageConfigDefault);
	process.env.NODE_ENV !== "production" && (r.displayName = "ImageConfigContext");
})), A = /* @__PURE__ */ c(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "RouterContext", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = (/* @__PURE__ */ y()._(d("react"))).default.createContext(null);
	process.env.NODE_ENV !== "production" && (t.displayName = "RouterContext");
})), j = /* @__PURE__ */ c(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "findClosestQuality", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	function t(e, t) {
		let n = e || 75;
		return t?.qualities?.length ? t.qualities.reduce((e, t) => Math.abs(t - n) < Math.abs(e - n) ? t : e, t.qualities[0]) : n;
	}
})), M = /* @__PURE__ */ c(((e, t) => {
	(() => {
		var e = {
			170: (e, t, n) => {
				let r = n(510), i = () => {
					if (typeof navigator < "u" && navigator.platform) {
						let e = navigator.platform.toLowerCase();
						return e === "win32" || e === "windows";
					}
					return typeof process < "u" && process.platform ? process.platform === "win32" : !1;
				};
				function a(e, t, n = !1) {
					return t && (t.windows === null || t.windows === void 0) && (t = {
						...t,
						windows: i()
					}), r(e, t, n);
				}
				Object.assign(a, r), e.exports = a;
			},
			154: (e) => {
				let t = "[^\\\\/]", n = "[^/]", r = "(?:\\/|$)", i = "(?:^|\\/)", a = `\\.{1,2}${r}`, o = {
					DOT_LITERAL: "\\.",
					PLUS_LITERAL: "\\+",
					QMARK_LITERAL: "\\?",
					SLASH_LITERAL: "\\/",
					ONE_CHAR: "(?=.)",
					QMARK: n,
					END_ANCHOR: r,
					DOTS_SLASH: a,
					NO_DOT: "(?!\\.)",
					NO_DOTS: `(?!${i}${a})`,
					NO_DOT_SLASH: `(?!\\.{0,1}${r})`,
					NO_DOTS_SLASH: `(?!${a})`,
					QMARK_NO_DOT: "[^.\\/]",
					STAR: `${n}*?`,
					START_ANCHOR: i,
					SEP: "/"
				}, s = {
					...o,
					SLASH_LITERAL: "[\\\\/]",
					QMARK: t,
					STAR: `${t}*?`,
					DOTS_SLASH: "\\.{1,2}(?:[\\\\/]|$)",
					NO_DOT: "(?!\\.)",
					NO_DOTS: "(?!(?:^|[\\\\/])\\.{1,2}(?:[\\\\/]|$))",
					NO_DOT_SLASH: "(?!\\.{0,1}(?:[\\\\/]|$))",
					NO_DOTS_SLASH: "(?!\\.{1,2}(?:[\\\\/]|$))",
					QMARK_NO_DOT: "[^.\\\\/]",
					START_ANCHOR: "(?:^|[\\\\/])",
					END_ANCHOR: "(?:[\\\\/]|$)",
					SEP: "\\"
				};
				e.exports = {
					MAX_LENGTH: 1024 * 64,
					POSIX_REGEX_SOURCE: {
						alnum: "a-zA-Z0-9",
						alpha: "a-zA-Z",
						ascii: "\\x00-\\x7F",
						blank: " \\t",
						cntrl: "\\x00-\\x1F\\x7F",
						digit: "0-9",
						graph: "\\x21-\\x7E",
						lower: "a-z",
						print: "\\x20-\\x7E ",
						punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
						space: " \\t\\r\\n\\v\\f",
						upper: "A-Z",
						word: "A-Za-z0-9_",
						xdigit: "A-Fa-f0-9"
					},
					REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
					REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
					REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
					REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
					REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
					REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
					REPLACEMENTS: {
						"***": "*",
						"**/**": "**",
						"**/**/**": "**"
					},
					CHAR_0: 48,
					CHAR_9: 57,
					CHAR_UPPERCASE_A: 65,
					CHAR_LOWERCASE_A: 97,
					CHAR_UPPERCASE_Z: 90,
					CHAR_LOWERCASE_Z: 122,
					CHAR_LEFT_PARENTHESES: 40,
					CHAR_RIGHT_PARENTHESES: 41,
					CHAR_ASTERISK: 42,
					CHAR_AMPERSAND: 38,
					CHAR_AT: 64,
					CHAR_BACKWARD_SLASH: 92,
					CHAR_CARRIAGE_RETURN: 13,
					CHAR_CIRCUMFLEX_ACCENT: 94,
					CHAR_COLON: 58,
					CHAR_COMMA: 44,
					CHAR_DOT: 46,
					CHAR_DOUBLE_QUOTE: 34,
					CHAR_EQUAL: 61,
					CHAR_EXCLAMATION_MARK: 33,
					CHAR_FORM_FEED: 12,
					CHAR_FORWARD_SLASH: 47,
					CHAR_GRAVE_ACCENT: 96,
					CHAR_HASH: 35,
					CHAR_HYPHEN_MINUS: 45,
					CHAR_LEFT_ANGLE_BRACKET: 60,
					CHAR_LEFT_CURLY_BRACE: 123,
					CHAR_LEFT_SQUARE_BRACKET: 91,
					CHAR_LINE_FEED: 10,
					CHAR_NO_BREAK_SPACE: 160,
					CHAR_PERCENT: 37,
					CHAR_PLUS: 43,
					CHAR_QUESTION_MARK: 63,
					CHAR_RIGHT_ANGLE_BRACKET: 62,
					CHAR_RIGHT_CURLY_BRACE: 125,
					CHAR_RIGHT_SQUARE_BRACKET: 93,
					CHAR_SEMICOLON: 59,
					CHAR_SINGLE_QUOTE: 39,
					CHAR_SPACE: 32,
					CHAR_TAB: 9,
					CHAR_UNDERSCORE: 95,
					CHAR_VERTICAL_LINE: 124,
					CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
					extglobChars(e) {
						return {
							"!": {
								type: "negate",
								open: "(?:(?!(?:",
								close: `))${e.STAR})`
							},
							"?": {
								type: "qmark",
								open: "(?:",
								close: ")?"
							},
							"+": {
								type: "plus",
								open: "(?:",
								close: ")+"
							},
							"*": {
								type: "star",
								open: "(?:",
								close: ")*"
							},
							"@": {
								type: "at",
								open: "(?:",
								close: ")"
							}
						};
					},
					globChars(e) {
						return e === !0 ? s : o;
					}
				};
			},
			697: (e, t, n) => {
				let r = n(154), i = n(96), { MAX_LENGTH: a, POSIX_REGEX_SOURCE: o, REGEX_NON_SPECIAL_CHARS: s, REGEX_SPECIAL_CHARS_BACKREF: c, REPLACEMENTS: l } = r, u = (e, t) => {
					if (typeof t.expandRange == "function") return t.expandRange(...e, t);
					e.sort();
					let n = `[${e.join("-")}]`;
					try {
						new RegExp(n);
					} catch {
						return e.map(((e) => i.escapeRegex(e))).join("..");
					}
					return n;
				}, d = (e, t) => `Missing ${e}: "${t}" - use "\\\\${t}" to match literal characters`, f = (e, t) => {
					if (typeof e != "string") throw TypeError("Expected a string");
					e = l[e] || e;
					let n = { ...t }, p = typeof n.maxLength == "number" ? Math.min(a, n.maxLength) : a, m = e.length;
					if (m > p) throw SyntaxError(`Input length: ${m}, exceeds maximum allowed length: ${p}`);
					let h = {
						type: "bos",
						value: "",
						output: n.prepend || ""
					}, g = [h], _ = n.capture ? "" : "?:", v = r.globChars(n.windows), y = r.extglobChars(v), { DOT_LITERAL: b, PLUS_LITERAL: x, SLASH_LITERAL: S, ONE_CHAR: C, DOTS_SLASH: w, NO_DOT: T, NO_DOT_SLASH: E, NO_DOTS_SLASH: D, QMARK: O, QMARK_NO_DOT: k, STAR: A, START_ANCHOR: j } = v, M = (e) => `(${_}(?:(?!${j}${e.dot ? w : b}).)*?)`, N = n.dot ? "" : T, P = n.dot ? O : k, F = n.bash === !0 ? M(n) : A;
					n.capture && (F = `(${F})`), typeof n.noext == "boolean" && (n.noextglob = n.noext);
					let I = {
						input: e,
						index: -1,
						start: 0,
						dot: n.dot === !0,
						consumed: "",
						output: "",
						prefix: "",
						backtrack: !1,
						negated: !1,
						brackets: 0,
						braces: 0,
						parens: 0,
						quotes: 0,
						globstar: !1,
						tokens: g
					};
					e = i.removePrefix(e, I), m = e.length;
					let L = [], R = [], z = [], B = h, V, H = () => I.index === m - 1, U = I.peek = (t = 1) => e[I.index + t], W = I.advance = () => e[++I.index] || "", G = () => e.slice(I.index + 1), K = (e = "", t = 0) => {
						I.consumed += e, I.index += t;
					}, q = (e) => {
						I.output += e.output == null ? e.value : e.output, K(e.value);
					}, J = () => {
						let e = 1;
						for (; U() === "!" && (U(2) !== "(" || U(3) === "?");) W(), I.start++, e++;
						return e % 2 == 0 ? !1 : (I.negated = !0, I.start++, !0);
					}, Y = (e) => {
						I[e]++, z.push(e);
					}, X = (e) => {
						I[e]--, z.pop();
					}, Z = (e) => {
						if (B.type === "globstar") {
							let t = I.braces > 0 && (e.type === "comma" || e.type === "brace"), n = e.extglob === !0 || L.length && (e.type === "pipe" || e.type === "paren");
							e.type !== "slash" && e.type !== "paren" && !t && !n && (I.output = I.output.slice(0, -B.output.length), B.type = "star", B.value = "*", B.output = F, I.output += B.output);
						}
						if (L.length && e.type !== "paren" && (L[L.length - 1].inner += e.value), (e.value || e.output) && q(e), B && B.type === "text" && e.type === "text") {
							B.output = (B.output || B.value) + e.value, B.value += e.value;
							return;
						}
						e.prev = B, g.push(e), B = e;
					}, Q = (e, t) => {
						let r = {
							...y[t],
							conditions: 1,
							inner: ""
						};
						r.prev = B, r.parens = I.parens, r.output = I.output;
						let i = (n.capture ? "(" : "") + r.open;
						Y("parens"), Z({
							type: e,
							value: t,
							output: I.output ? "" : C
						}), Z({
							type: "paren",
							extglob: !0,
							value: W(),
							output: i
						}), L.push(r);
					}, ee = (e) => {
						let r = e.close + (n.capture ? ")" : ""), i;
						if (e.type === "negate") {
							let a = F;
							e.inner && e.inner.length > 1 && e.inner.includes("/") && (a = M(n)), (a !== F || H() || /^\)+$/.test(G())) && (r = e.close = `)$))${a}`), e.inner.includes("*") && (i = G()) && /^\.[^\\/.]+$/.test(i) && (r = e.close = `)${f(i, {
								...t,
								fastpaths: !1
							}).output})${a})`), e.prev.type === "bos" && (I.negatedExtglob = !0);
						}
						Z({
							type: "paren",
							extglob: !0,
							value: V,
							output: r
						}), X("parens");
					};
					if (n.fastpaths !== !1 && !/(^[*!]|[/()[\]{}"])/.test(e)) {
						let r = !1, a = e.replace(c, ((e, t, n, i, a, o) => i === "\\" ? (r = !0, e) : i === "?" ? t ? t + i + (a ? O.repeat(a.length) : "") : o === 0 ? P + (a ? O.repeat(a.length) : "") : O.repeat(n.length) : i === "." ? b.repeat(n.length) : i === "*" ? t ? t + i + (a ? F : "") : F : t ? e : `\\${e}`));
						return r === !0 && (a = n.unescape === !0 ? a.replace(/\\/g, "") : a.replace(/\\+/g, ((e) => e.length % 2 == 0 ? "\\\\" : e ? "\\" : ""))), a === e && n.contains === !0 ? (I.output = e, I) : (I.output = i.wrapOutput(a, I, t), I);
					}
					for (; !H();) {
						if (V = W(), V === "\0") continue;
						if (V === "\\") {
							let e = U();
							if (e === "/" && n.bash !== !0 || e === "." || e === ";") continue;
							if (!e) {
								V += "\\", Z({
									type: "text",
									value: V
								});
								continue;
							}
							let t = /^\\+/.exec(G()), r = 0;
							if (t && t[0].length > 2 && (r = t[0].length, I.index += r, r % 2 != 0 && (V += "\\")), n.unescape === !0 ? V = W() : V += W(), I.brackets === 0) {
								Z({
									type: "text",
									value: V
								});
								continue;
							}
						}
						if (I.brackets > 0 && (V !== "]" || B.value === "[" || B.value === "[^")) {
							if (n.posix !== !1 && V === ":") {
								let e = B.value.slice(1);
								if (e.includes("[") && (B.posix = !0, e.includes(":"))) {
									let e = B.value.lastIndexOf("["), t = B.value.slice(0, e), n = o[B.value.slice(e + 2)];
									if (n) {
										B.value = t + n, I.backtrack = !0, W(), !h.output && g.indexOf(B) === 1 && (h.output = C);
										continue;
									}
								}
							}
							(V === "[" && U() !== ":" || V === "-" && U() === "]") && (V = `\\${V}`), V === "]" && (B.value === "[" || B.value === "[^") && (V = `\\${V}`), n.posix === !0 && V === "!" && B.value === "[" && (V = "^"), B.value += V, q({ value: V });
							continue;
						}
						if (I.quotes === 1 && V !== "\"") {
							V = i.escapeRegex(V), B.value += V, q({ value: V });
							continue;
						}
						if (V === "\"") {
							I.quotes = I.quotes === 1 ? 0 : 1, n.keepQuotes === !0 && Z({
								type: "text",
								value: V
							});
							continue;
						}
						if (V === "(") {
							Y("parens"), Z({
								type: "paren",
								value: V
							});
							continue;
						}
						if (V === ")") {
							if (I.parens === 0 && n.strictBrackets === !0) throw SyntaxError(d("opening", "("));
							let e = L[L.length - 1];
							if (e && I.parens === e.parens + 1) {
								ee(L.pop());
								continue;
							}
							Z({
								type: "paren",
								value: V,
								output: I.parens ? ")" : "\\)"
							}), X("parens");
							continue;
						}
						if (V === "[") {
							if (n.nobracket === !0 || !G().includes("]")) {
								if (n.nobracket !== !0 && n.strictBrackets === !0) throw SyntaxError(d("closing", "]"));
								V = `\\${V}`;
							} else Y("brackets");
							Z({
								type: "bracket",
								value: V
							});
							continue;
						}
						if (V === "]") {
							if (n.nobracket === !0 || B && B.type === "bracket" && B.value.length === 1) {
								Z({
									type: "text",
									value: V,
									output: `\\${V}`
								});
								continue;
							}
							if (I.brackets === 0) {
								if (n.strictBrackets === !0) throw SyntaxError(d("opening", "["));
								Z({
									type: "text",
									value: V,
									output: `\\${V}`
								});
								continue;
							}
							X("brackets");
							let e = B.value.slice(1);
							if (B.posix !== !0 && e[0] === "^" && !e.includes("/") && (V = `/${V}`), B.value += V, q({ value: V }), n.literalBrackets === !1 || i.hasRegexChars(e)) continue;
							let t = i.escapeRegex(B.value);
							if (I.output = I.output.slice(0, -B.value.length), n.literalBrackets === !0) {
								I.output += t, B.value = t;
								continue;
							}
							B.value = `(${_}${t}|${B.value})`, I.output += B.value;
							continue;
						}
						if (V === "{" && n.nobrace !== !0) {
							Y("braces");
							let e = {
								type: "brace",
								value: V,
								output: "(",
								outputIndex: I.output.length,
								tokensIndex: I.tokens.length
							};
							R.push(e), Z(e);
							continue;
						}
						if (V === "}") {
							let e = R[R.length - 1];
							if (n.nobrace === !0 || !e) {
								Z({
									type: "text",
									value: V,
									output: V
								});
								continue;
							}
							let t = ")";
							if (e.dots === !0) {
								let e = g.slice(), r = [];
								for (let t = e.length - 1; t >= 0 && (g.pop(), e[t].type !== "brace"); t--) e[t].type !== "dots" && r.unshift(e[t].value);
								t = u(r, n), I.backtrack = !0;
							}
							if (e.comma !== !0 && e.dots !== !0) {
								let n = I.output.slice(0, e.outputIndex), r = I.tokens.slice(e.tokensIndex);
								e.value = e.output = "\\{", V = t = "\\}", I.output = n;
								for (let e of r) I.output += e.output || e.value;
							}
							Z({
								type: "brace",
								value: V,
								output: t
							}), X("braces"), R.pop();
							continue;
						}
						if (V === "|") {
							L.length > 0 && L[L.length - 1].conditions++, Z({
								type: "text",
								value: V
							});
							continue;
						}
						if (V === ",") {
							let e = V, t = R[R.length - 1];
							t && z[z.length - 1] === "braces" && (t.comma = !0, e = "|"), Z({
								type: "comma",
								value: V,
								output: e
							});
							continue;
						}
						if (V === "/") {
							if (B.type === "dot" && I.index === I.start + 1) {
								I.start = I.index + 1, I.consumed = "", I.output = "", g.pop(), B = h;
								continue;
							}
							Z({
								type: "slash",
								value: V,
								output: S
							});
							continue;
						}
						if (V === ".") {
							if (I.braces > 0 && B.type === "dot") {
								B.value === "." && (B.output = b);
								let e = R[R.length - 1];
								B.type = "dots", B.output += V, B.value += V, e.dots = !0;
								continue;
							}
							if (I.braces + I.parens === 0 && B.type !== "bos" && B.type !== "slash") {
								Z({
									type: "text",
									value: V,
									output: b
								});
								continue;
							}
							Z({
								type: "dot",
								value: V,
								output: b
							});
							continue;
						}
						if (V === "?") {
							if (!(B && B.value === "(") && n.noextglob !== !0 && U() === "(" && U(2) !== "?") {
								Q("qmark", V);
								continue;
							}
							if (B && B.type === "paren") {
								let e = U(), t = V;
								(B.value === "(" && !/[!=<:]/.test(e) || e === "<" && !/<([!=]|\w+>)/.test(G())) && (t = `\\${V}`), Z({
									type: "text",
									value: V,
									output: t
								});
								continue;
							}
							if (n.dot !== !0 && (B.type === "slash" || B.type === "bos")) {
								Z({
									type: "qmark",
									value: V,
									output: k
								});
								continue;
							}
							Z({
								type: "qmark",
								value: V,
								output: O
							});
							continue;
						}
						if (V === "!") {
							if (n.noextglob !== !0 && U() === "(" && (U(2) !== "?" || !/[!=<:]/.test(U(3)))) {
								Q("negate", V);
								continue;
							}
							if (n.nonegate !== !0 && I.index === 0) {
								J();
								continue;
							}
						}
						if (V === "+") {
							if (n.noextglob !== !0 && U() === "(" && U(2) !== "?") {
								Q("plus", V);
								continue;
							}
							if (B && B.value === "(" || n.regex === !1) {
								Z({
									type: "plus",
									value: V,
									output: x
								});
								continue;
							}
							if (B && (B.type === "bracket" || B.type === "paren" || B.type === "brace") || I.parens > 0) {
								Z({
									type: "plus",
									value: V
								});
								continue;
							}
							Z({
								type: "plus",
								value: x
							});
							continue;
						}
						if (V === "@") {
							if (n.noextglob !== !0 && U() === "(" && U(2) !== "?") {
								Z({
									type: "at",
									extglob: !0,
									value: V,
									output: ""
								});
								continue;
							}
							Z({
								type: "text",
								value: V
							});
							continue;
						}
						if (V !== "*") {
							(V === "$" || V === "^") && (V = `\\${V}`);
							let e = s.exec(G());
							e && (V += e[0], I.index += e[0].length), Z({
								type: "text",
								value: V
							});
							continue;
						}
						if (B && (B.type === "globstar" || B.star === !0)) {
							B.type = "star", B.star = !0, B.value += V, B.output = F, I.backtrack = !0, I.globstar = !0, K(V);
							continue;
						}
						let t = G();
						if (n.noextglob !== !0 && /^\([^?]/.test(t)) {
							Q("star", V);
							continue;
						}
						if (B.type === "star") {
							if (n.noglobstar === !0) {
								K(V);
								continue;
							}
							let r = B.prev, i = r.prev, a = r.type === "slash" || r.type === "bos", o = i && (i.type === "star" || i.type === "globstar");
							if (n.bash === !0 && (!a || t[0] && t[0] !== "/")) {
								Z({
									type: "star",
									value: V,
									output: ""
								});
								continue;
							}
							let s = I.braces > 0 && (r.type === "comma" || r.type === "brace"), c = L.length && (r.type === "pipe" || r.type === "paren");
							if (!a && r.type !== "paren" && !s && !c) {
								Z({
									type: "star",
									value: V,
									output: ""
								});
								continue;
							}
							for (; t.slice(0, 3) === "/**";) {
								let n = e[I.index + 4];
								if (n && n !== "/") break;
								t = t.slice(3), K("/**", 3);
							}
							if (r.type === "bos" && H()) {
								B.type = "globstar", B.value += V, B.output = M(n), I.output = B.output, I.globstar = !0, K(V);
								continue;
							}
							if (r.type === "slash" && r.prev.type !== "bos" && !o && H()) {
								I.output = I.output.slice(0, -(r.output + B.output).length), r.output = `(?:${r.output}`, B.type = "globstar", B.output = M(n) + (n.strictSlashes ? ")" : "|$)"), B.value += V, I.globstar = !0, I.output += r.output + B.output, K(V);
								continue;
							}
							if (r.type === "slash" && r.prev.type !== "bos" && t[0] === "/") {
								let e = t[1] === void 0 ? "" : "|$";
								I.output = I.output.slice(0, -(r.output + B.output).length), r.output = `(?:${r.output}`, B.type = "globstar", B.output = `${M(n)}${S}|${S}${e})`, B.value += V, I.output += r.output + B.output, I.globstar = !0, K(V + W()), Z({
									type: "slash",
									value: "/",
									output: ""
								});
								continue;
							}
							if (r.type === "bos" && t[0] === "/") {
								B.type = "globstar", B.value += V, B.output = `(?:^|${S}|${M(n)}${S})`, I.output = B.output, I.globstar = !0, K(V + W()), Z({
									type: "slash",
									value: "/",
									output: ""
								});
								continue;
							}
							I.output = I.output.slice(0, -B.output.length), B.type = "globstar", B.output = M(n), B.value += V, I.output += B.output, I.globstar = !0, K(V);
							continue;
						}
						let r = {
							type: "star",
							value: V,
							output: F
						};
						if (n.bash === !0) {
							r.output = ".*?", (B.type === "bos" || B.type === "slash") && (r.output = N + r.output), Z(r);
							continue;
						}
						if (B && (B.type === "bracket" || B.type === "paren") && n.regex === !0) {
							r.output = V, Z(r);
							continue;
						}
						(I.index === I.start || B.type === "slash" || B.type === "dot") && (B.type === "dot" ? (I.output += E, B.output += E) : n.dot === !0 ? (I.output += D, B.output += D) : (I.output += N, B.output += N), U() !== "*" && (I.output += C, B.output += C)), Z(r);
					}
					for (; I.brackets > 0;) {
						if (n.strictBrackets === !0) throw SyntaxError(d("closing", "]"));
						I.output = i.escapeLast(I.output, "["), X("brackets");
					}
					for (; I.parens > 0;) {
						if (n.strictBrackets === !0) throw SyntaxError(d("closing", ")"));
						I.output = i.escapeLast(I.output, "("), X("parens");
					}
					for (; I.braces > 0;) {
						if (n.strictBrackets === !0) throw SyntaxError(d("closing", "}"));
						I.output = i.escapeLast(I.output, "{"), X("braces");
					}
					if (n.strictSlashes !== !0 && (B.type === "star" || B.type === "bracket") && Z({
						type: "maybe_slash",
						value: "",
						output: `${S}?`
					}), I.backtrack === !0) {
						I.output = "";
						for (let e of I.tokens) I.output += e.output == null ? e.value : e.output, e.suffix && (I.output += e.suffix);
					}
					return I;
				};
				f.fastpaths = (e, t) => {
					let n = { ...t }, o = typeof n.maxLength == "number" ? Math.min(a, n.maxLength) : a, s = e.length;
					if (s > o) throw SyntaxError(`Input length: ${s}, exceeds maximum allowed length: ${o}`);
					e = l[e] || e;
					let { DOT_LITERAL: c, SLASH_LITERAL: u, ONE_CHAR: d, DOTS_SLASH: f, NO_DOT: p, NO_DOTS: m, NO_DOTS_SLASH: h, STAR: g, START_ANCHOR: _ } = r.globChars(n.windows), v = n.dot ? m : p, y = n.dot ? h : p, b = n.capture ? "" : "?:", x = {
						negated: !1,
						prefix: ""
					}, S = n.bash === !0 ? ".*?" : g;
					n.capture && (S = `(${S})`);
					let C = (e) => e.noglobstar === !0 ? S : `(${b}(?:(?!${_}${e.dot ? f : c}).)*?)`, w = (e) => {
						switch (e) {
							case "*": return `${v}${d}${S}`;
							case ".*": return `${c}${d}${S}`;
							case "*.*": return `${v}${S}${c}${d}${S}`;
							case "*/*": return `${v}${S}${u}${d}${y}${S}`;
							case "**": return v + C(n);
							case "**/*": return `(?:${v}${C(n)}${u})?${y}${d}${S}`;
							case "**/*.*": return `(?:${v}${C(n)}${u})?${y}${S}${c}${d}${S}`;
							case "**/.*": return `(?:${v}${C(n)}${u})?${c}${d}${S}`;
							default: {
								let t = /^(.*?)\.(\w+)$/.exec(e);
								if (!t) return;
								let n = w(t[1]);
								return n ? n + c + t[2] : void 0;
							}
						}
					}, T = w(i.removePrefix(e, x));
					return T && n.strictSlashes !== !0 && (T += `${u}?`), T;
				}, e.exports = f;
			},
			510: (e, t, n) => {
				let r = n(716), i = n(697), a = n(96), o = n(154), s = (e) => e && typeof e == "object" && !Array.isArray(e), c = (e, t, n = !1) => {
					if (Array.isArray(e)) {
						let r = e.map(((e) => c(e, t, n)));
						return (e) => {
							for (let t of r) {
								let n = t(e);
								if (n) return n;
							}
							return !1;
						};
					}
					let r = s(e) && e.tokens && e.input;
					if (e === "" || typeof e != "string" && !r) throw TypeError("Expected pattern to be a non-empty string");
					let i = t || {}, a = i.windows, o = r ? c.compileRe(e, t) : c.makeRe(e, t, !1, !0), l = o.state;
					delete o.state;
					let u = () => !1;
					if (i.ignore) {
						let e = {
							...t,
							ignore: null,
							onMatch: null,
							onResult: null
						};
						u = c(i.ignore, e, n);
					}
					let d = (n, r = !1) => {
						let { isMatch: s, match: d, output: f } = c.test(n, o, t, {
							glob: e,
							posix: a
						}), p = {
							glob: e,
							state: l,
							regex: o,
							posix: a,
							input: n,
							output: f,
							match: d,
							isMatch: s
						};
						return typeof i.onResult == "function" && i.onResult(p), s === !1 ? (p.isMatch = !1, r ? p : !1) : u(n) ? (typeof i.onIgnore == "function" && i.onIgnore(p), p.isMatch = !1, r ? p : !1) : (typeof i.onMatch == "function" && i.onMatch(p), r ? p : !0);
					};
					return n && (d.state = l), d;
				};
				c.test = (e, t, n, { glob: r, posix: i } = {}) => {
					if (typeof e != "string") throw TypeError("Expected input to be a string");
					if (e === "") return {
						isMatch: !1,
						output: ""
					};
					let o = n || {}, s = o.format || (i ? a.toPosixSlashes : null), l = e === r, u = l && s ? s(e) : e;
					return l === !1 && (u = s ? s(e) : e, l = u === r), (l === !1 || o.capture === !0) && (l = o.matchBase === !0 || o.basename === !0 ? c.matchBase(e, t, n, i) : t.exec(u)), {
						isMatch: !!l,
						match: l,
						output: u
					};
				}, c.matchBase = (e, t, n) => (t instanceof RegExp ? t : c.makeRe(t, n)).test(a.basename(e)), c.isMatch = (e, t, n) => c(t, n)(e), c.parse = (e, t) => Array.isArray(e) ? e.map(((e) => c.parse(e, t))) : i(e, {
					...t,
					fastpaths: !1
				}), c.scan = (e, t) => r(e, t), c.compileRe = (e, t, n = !1, r = !1) => {
					if (n === !0) return e.output;
					let i = t || {}, a = i.contains ? "" : "^", o = i.contains ? "" : "$", s = `${a}(?:${e.output})${o}`;
					e && e.negated === !0 && (s = `^(?!${s}).*$`);
					let l = c.toRegex(s, t);
					return r === !0 && (l.state = e), l;
				}, c.makeRe = (e, t = {}, n = !1, r = !1) => {
					if (!e || typeof e != "string") throw TypeError("Expected a non-empty string");
					let a = {
						negated: !1,
						fastpaths: !0
					};
					return t.fastpaths !== !1 && (e[0] === "." || e[0] === "*") && (a.output = i.fastpaths(e, t)), a.output || (a = i(e, t)), c.compileRe(a, t, n, r);
				}, c.toRegex = (e, t) => {
					try {
						let n = t || {};
						return new RegExp(e, n.flags || (n.nocase ? "i" : ""));
					} catch (e) {
						if (t && t.debug === !0) throw e;
						return /$^/;
					}
				}, c.constants = o, e.exports = c;
			},
			716: (e, t, n) => {
				let r = n(96), { CHAR_ASTERISK: i, CHAR_AT: a, CHAR_BACKWARD_SLASH: o, CHAR_COMMA: s, CHAR_DOT: c, CHAR_EXCLAMATION_MARK: l, CHAR_FORWARD_SLASH: u, CHAR_LEFT_CURLY_BRACE: d, CHAR_LEFT_PARENTHESES: f, CHAR_LEFT_SQUARE_BRACKET: p, CHAR_PLUS: m, CHAR_QUESTION_MARK: h, CHAR_RIGHT_CURLY_BRACE: g, CHAR_RIGHT_PARENTHESES: _, CHAR_RIGHT_SQUARE_BRACKET: v } = n(154), y = (e) => e === u || e === o, b = (e) => {
					e.isPrefix !== !0 && (e.depth = e.isGlobstar ? Infinity : 1);
				};
				e.exports = (e, t) => {
					let n = t || {}, x = e.length - 1, S = n.parts === !0 || n.scanToEnd === !0, C = [], w = [], T = [], E = e, D = -1, O = 0, k = 0, A = !1, j = !1, M = !1, N = !1, P = !1, F = !1, I = !1, L = !1, R = !1, z = !1, B = 0, V, H, U = {
						value: "",
						depth: 0,
						isGlob: !1
					}, W = () => D >= x, G = () => E.charCodeAt(D + 1), K = () => (V = H, E.charCodeAt(++D));
					for (; D < x;) {
						H = K();
						let e;
						if (H === o) {
							I = U.backslashes = !0, H = K(), H === d && (F = !0);
							continue;
						}
						if (F === !0 || H === d) {
							for (B++; W() !== !0 && (H = K());) {
								if (H === o) {
									I = U.backslashes = !0, K();
									continue;
								}
								if (H === d) {
									B++;
									continue;
								}
								if (F !== !0 && H === c && (H = K()) === c) {
									if (A = U.isBrace = !0, M = U.isGlob = !0, z = !0, S === !0) continue;
									break;
								}
								if (F !== !0 && H === s) {
									if (A = U.isBrace = !0, M = U.isGlob = !0, z = !0, S === !0) continue;
									break;
								}
								if (H === g && (B--, B === 0)) {
									F = !1, A = U.isBrace = !0, z = !0;
									break;
								}
							}
							if (S === !0) continue;
							break;
						}
						if (H === u) {
							if (C.push(D), w.push(U), U = {
								value: "",
								depth: 0,
								isGlob: !1
							}, z === !0) continue;
							if (V === c && D === O + 1) {
								O += 2;
								continue;
							}
							k = D + 1;
							continue;
						}
						if (n.noext !== !0 && (H === m || H === a || H === i || H === h || H === l) && G() === f) {
							if (M = U.isGlob = !0, N = U.isExtglob = !0, z = !0, H === l && D === O && (R = !0), S === !0) {
								for (; W() !== !0 && (H = K());) {
									if (H === o) {
										I = U.backslashes = !0, H = K();
										continue;
									}
									if (H === _) {
										M = U.isGlob = !0, z = !0;
										break;
									}
								}
								continue;
							}
							break;
						}
						if (H === i) {
							if (V === i && (P = U.isGlobstar = !0), M = U.isGlob = !0, z = !0, S === !0) continue;
							break;
						}
						if (H === h) {
							if (M = U.isGlob = !0, z = !0, S === !0) continue;
							break;
						}
						if (H === p) {
							for (; W() !== !0 && (e = K());) {
								if (e === o) {
									I = U.backslashes = !0, K();
									continue;
								}
								if (e === v) {
									j = U.isBracket = !0, M = U.isGlob = !0, z = !0;
									break;
								}
							}
							if (S === !0) continue;
							break;
						}
						if (n.nonegate !== !0 && H === l && D === O) {
							L = U.negated = !0, O++;
							continue;
						}
						if (n.noparen !== !0 && H === f) {
							if (M = U.isGlob = !0, S === !0) {
								for (; W() !== !0 && (H = K());) {
									if (H === f) {
										I = U.backslashes = !0, H = K();
										continue;
									}
									if (H === _) {
										z = !0;
										break;
									}
								}
								continue;
							}
							break;
						}
						if (M === !0) {
							if (z = !0, S === !0) continue;
							break;
						}
					}
					n.noext === !0 && (N = !1, M = !1);
					let q = E, J = "", Y = "";
					O > 0 && (J = E.slice(0, O), E = E.slice(O), k -= O), q && M === !0 && k > 0 ? (q = E.slice(0, k), Y = E.slice(k)) : M === !0 ? (q = "", Y = E) : q = E, q && q !== "" && q !== "/" && q !== E && y(q.charCodeAt(q.length - 1)) && (q = q.slice(0, -1)), n.unescape === !0 && (Y &&= r.removeBackslashes(Y), q && I === !0 && (q = r.removeBackslashes(q)));
					let X = {
						prefix: J,
						input: e,
						start: O,
						base: q,
						glob: Y,
						isBrace: A,
						isBracket: j,
						isGlob: M,
						isExtglob: N,
						isGlobstar: P,
						negated: L,
						negatedExtglob: R
					};
					if (n.tokens === !0 && (X.maxDepth = 0, y(H) || w.push(U), X.tokens = w), n.parts === !0 || n.tokens === !0) {
						let t;
						for (let r = 0; r < C.length; r++) {
							let i = t ? t + 1 : O, a = C[r], o = e.slice(i, a);
							n.tokens && (r === 0 && O !== 0 ? (w[r].isPrefix = !0, w[r].value = J) : w[r].value = o, b(w[r]), X.maxDepth += w[r].depth), (r !== 0 || o !== "") && T.push(o), t = a;
						}
						if (t && t + 1 < e.length) {
							let r = e.slice(t + 1);
							T.push(r), n.tokens && (w[w.length - 1].value = r, b(w[w.length - 1]), X.maxDepth += w[w.length - 1].depth);
						}
						X.slashes = C, X.parts = T;
					}
					return X;
				};
			},
			96: (e, t, n) => {
				let { REGEX_BACKSLASH: r, REGEX_REMOVE_BACKSLASH: i, REGEX_SPECIAL_CHARS: a, REGEX_SPECIAL_CHARS_GLOBAL: o } = n(154);
				t.isObject = (e) => typeof e == "object" && !!e && !Array.isArray(e), t.hasRegexChars = (e) => a.test(e), t.isRegexChar = (e) => e.length === 1 && t.hasRegexChars(e), t.escapeRegex = (e) => e.replace(o, "\\$1"), t.toPosixSlashes = (e) => e.replace(r, "/"), t.removeBackslashes = (e) => e.replace(i, ((e) => e === "\\" ? "" : e)), t.escapeLast = (e, n, r) => {
					let i = e.lastIndexOf(n, r);
					return i === -1 ? e : e[i - 1] === "\\" ? t.escapeLast(e, n, i - 1) : `${e.slice(0, i)}\\${e.slice(i)}`;
				}, t.removePrefix = (e, t = {}) => {
					let n = e;
					return n.startsWith("./") && (n = n.slice(2), t.prefix = "./"), n;
				}, t.wrapOutput = (e, t = {}, n = {}) => {
					let r = `${n.contains ? "" : "^"}(?:${e})${n.contains ? "" : "$"}`;
					return t.negated === !0 && (r = `(?:^(?!${r}).*$)`), r;
				}, t.basename = (e, { windows: t } = {}) => {
					let n = e.split(t ? /[\\/]/ : "/"), r = n[n.length - 1];
					return r === "" ? n[n.length - 2] : r;
				};
			}
		}, n = {};
		function r(t) {
			var i = n[t];
			if (i !== void 0) return i.exports;
			var a = n[t] = { exports: {} }, o = !0;
			try {
				e[t](a, a.exports, r), o = !1;
			} finally {
				o && delete n[t];
			}
			return a.exports;
		}
		r !== void 0 && (r.ab = __dirname + "/"), t.exports = r(170);
	})();
})), N = /* @__PURE__ */ c(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		hasLocalMatch: function() {
			return i;
		},
		matchLocalPattern: function() {
			return r;
		}
	});
	var n = M();
	function r(e, t) {
		return !(e.search !== void 0 && e.search !== t.search || !(0, n.makeRe)(e.pathname ?? "**", { dot: !0 }).test(t.pathname));
	}
	function i(e, t) {
		if (!e) return !0;
		let n = new URL(t, "http://n");
		return e.some((e) => r(e, n));
	}
})), P = /* @__PURE__ */ c(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		hasRemoteMatch: function() {
			return i;
		},
		matchRemotePattern: function() {
			return r;
		}
	});
	var n = M();
	function r(e, t) {
		if (e.protocol !== void 0 && e.protocol.replace(/:$/, "") !== t.protocol.replace(/:$/, "") || e.port !== void 0 && e.port !== t.port) return !1;
		if (e.hostname === void 0) throw Object.defineProperty(/* @__PURE__ */ Error(`Pattern should define hostname but found\n${JSON.stringify(e)}`), "__NEXT_ERROR_CODE", {
			value: "E410",
			enumerable: !1,
			configurable: !0
		});
		return !(!(0, n.makeRe)(e.hostname).test(t.hostname) || e.search !== void 0 && e.search !== t.search || !(0, n.makeRe)(e.pathname ?? "**", { dot: !0 }).test(t.pathname));
	}
	function i(e, t, n) {
		return e.some((e) => n.hostname === e) || t.some((e) => r(e, n));
	}
})), F = /* @__PURE__ */ c(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "default", {
		enumerable: !0,
		get: function() {
			return i;
		}
	});
	var t = j(), n = x();
	function r({ config: e, src: r, width: i, quality: a }) {
		if (process.env.NODE_ENV !== "production") {
			let e = [];
			if (r || e.push("src"), i || e.push("width"), e.length > 0) throw Object.defineProperty(/* @__PURE__ */ Error(`Next Image Optimization requires ${e.join(", ")} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
				src: r,
				width: i,
				quality: a
			})}`), "__NEXT_ERROR_CODE", {
				value: "E188",
				enumerable: !1,
				configurable: !0
			});
		}
		let o = (0, n.getDeploymentId)();
		if (r.startsWith("/") && !r.startsWith("//")) {
			let e = r.indexOf("?");
			if (e !== -1) {
				let t = new URLSearchParams(r.slice(e + 1)), n = t.get("dpl");
				if (n) {
					o = n, t.delete("dpl");
					let i = t.toString();
					r = r.slice(0, e) + (i ? "?" + i : "");
				}
			}
		}
		if (r.startsWith("/") && r.includes("?") && e.localPatterns?.length === 1 && e.localPatterns[0].pathname === "**" && e.localPatterns[0].search === "") throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${r}" is using a query string which is not configured in images.localPatterns.\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
			value: "E871",
			enumerable: !1,
			configurable: !0
		});
		if (process.env.NODE_ENV !== "production") {
			if (r.startsWith("//")) throw Object.defineProperty(/* @__PURE__ */ Error(`Failed to parse src "${r}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`), "__NEXT_ERROR_CODE", {
				value: "E360",
				enumerable: !1,
				configurable: !0
			});
			if (r.startsWith("/") && e.localPatterns && process.env.NODE_ENV !== "test" && process.env.NEXT_RUNTIME !== "edge") {
				let { hasLocalMatch: t } = N();
				if (!t(e.localPatterns, r)) throw Object.defineProperty(/* @__PURE__ */ Error(`Invalid src prop (${r}) on \`next/image\` does not match \`images.localPatterns\` configured in your \`next.config.js\`\nSee more info: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
					value: "E426",
					enumerable: !1,
					configurable: !0
				});
			}
			if (!r.startsWith("/") && (e.domains || e.remotePatterns)) {
				let t;
				try {
					t = new URL(r);
				} catch (e) {
					throw console.error(e), Object.defineProperty(/* @__PURE__ */ Error(`Failed to parse src "${r}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`), "__NEXT_ERROR_CODE", {
						value: "E63",
						enumerable: !1,
						configurable: !0
					});
				}
				if (process.env.NODE_ENV !== "test" && process.env.NEXT_RUNTIME !== "edge") {
					let { hasRemoteMatch: n } = P();
					if (!n(e.domains, e.remotePatterns, t)) throw Object.defineProperty(/* @__PURE__ */ Error(`Invalid src prop (${r}) on \`next/image\`, hostname "${t.hostname}" is not configured under images in your \`next.config.js\`\nSee more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`), "__NEXT_ERROR_CODE", {
						value: "E231",
						enumerable: !1,
						configurable: !0
					});
				}
			}
		}
		let s = (0, t.findClosestQuality)(a, e);
		return `${e.path}?url=${encodeURIComponent(r)}&w=${i}&q=${s}${r.startsWith("/") && o ? `&dpl=${o}` : ""}`;
	}
	r.__next_img_default = !0;
	var i = r;
})), I = /* @__PURE__ */ c(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "useMergedRef", {
		enumerable: !0,
		get: function() {
			return r;
		}
	});
	var n = d("react");
	function r(e, t) {
		let r = (0, n.useRef)(null), a = (0, n.useRef)(null);
		return (0, n.useCallback)((n) => {
			if (n === null) {
				let e = r.current;
				e && (r.current = null, e());
				let t = a.current;
				t && (a.current = null, t());
			} else e && (r.current = i(e, n)), t && (a.current = i(t, n));
		}, [e, t]);
	}
	function i(e, t) {
		if (typeof e == "function") {
			let n = e(t);
			return typeof n == "function" ? n : () => e(null);
		} else return e.current = t, () => {
			e.current = null;
		};
	}
	(typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && e.default.__esModule === void 0 && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
})), L = /* @__PURE__ */ c(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "Image", {
		enumerable: !0,
		get: function() {
			return D;
		}
	});
	var n = y(), r = T(), i = m(), a = /* @__PURE__ */ r._(d("react")), o = /* @__PURE__ */ n._(d("react-dom")), s = /* @__PURE__ */ n._(O()), c = w(), l = C(), u = k(), f = b(), p = A(), h = /* @__PURE__ */ n._(F()), g = I(), _ = process.env.__NEXT_IMAGE_OPTS;
	typeof window > "u" && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
	function v(e, t, n, r, i, a, o) {
		let s = e?.src;
		!e || e["data-loaded-src"] === s || (e["data-loaded-src"] = s, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
			if (!(!e.parentElement || !e.isConnected)) {
				if (t !== "empty" && i(!0), n?.current) {
					let t = new Event("load");
					Object.defineProperty(t, "target", {
						writable: !1,
						value: e
					});
					let r = !1, i = !1;
					n.current({
						...t,
						nativeEvent: t,
						currentTarget: e,
						target: e,
						isDefaultPrevented: () => r,
						isPropagationStopped: () => i,
						persist: () => {},
						preventDefault: () => {
							r = !0, t.preventDefault();
						},
						stopPropagation: () => {
							i = !0, t.stopPropagation();
						}
					});
				}
				if (r?.current && r.current(e), process.env.NODE_ENV !== "production") {
					let t = new URL(s, "http://n").searchParams.get("url") || s;
					if (e.getAttribute("data-nimg") === "fill") {
						if (!a && (!o || o === "100vw") && e.getBoundingClientRect().width / window.innerWidth < .6 && (o === "100vw" ? (0, f.warnOnce)(`Image with src "${t}" has "fill" prop and "sizes" prop of "100vw", but image is not rendered at full viewport width. Please adjust "sizes" to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes`) : (0, f.warnOnce)(`Image with src "${t}" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes`)), e.parentElement) {
							let { position: n } = window.getComputedStyle(e.parentElement), r = [
								"absolute",
								"fixed",
								"relative"
							];
							r.includes(n) || (0, f.warnOnce)(`Image with src "${t}" has "fill" and parent element with invalid "position". Provided "${n}" should be one of ${r.map(String).join(",")}.`);
						}
						e.height === 0 && (0, f.warnOnce)(`Image with src "${t}" has "fill" and a height value of 0. This is likely because the parent element of the image has not been styled to have a set height.`);
					}
					let n = e.height.toString() !== e.getAttribute("height"), r = e.width.toString() !== e.getAttribute("width");
					(n && !r || !n && r) && (0, f.warnOnce)(`Image with src "${t}" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles 'width: "auto"' or 'height: "auto"' to maintain the aspect ratio.`);
				}
			}
		}));
	}
	function x(e) {
		return a.use ? { fetchPriority: e } : { fetchpriority: e };
	}
	var S = /* @__PURE__ */ (0, a.forwardRef)(({ src: e, srcSet: t, sizes: n, height: r, width: o, decoding: s, className: c, style: l, fetchPriority: u, placeholder: d, loading: f, unoptimized: p, fill: m, onLoadRef: h, onLoadingCompleteRef: _, setBlurComplete: y, setShowAltText: b, sizesInput: S, onLoad: C, onError: w, ...T }, E) => {
		let D = (0, a.useCallback)((t) => {
			t && (w && (t.src = t.src), process.env.NODE_ENV !== "production" && (e || console.error("Image is missing required \"src\" property:", t), t.getAttribute("alt") === null && console.error("Image is missing required \"alt\" property. Please add Alternative Text to describe the image for screen readers and search engines.")), t.complete && v(t, d, h, _, y, p, S));
		}, [
			e,
			d,
			h,
			_,
			y,
			w,
			p,
			S
		]), O = (0, g.useMergedRef)(E, D);
		return /* @__PURE__ */ (0, i.jsx)("img", {
			...T,
			...x(u),
			loading: f,
			width: o,
			height: r,
			decoding: s,
			"data-nimg": m ? "fill" : "1",
			className: c,
			style: l,
			sizes: n,
			srcSet: t,
			src: e,
			ref: O,
			onLoad: (e) => {
				let t = e.currentTarget;
				v(t, d, h, _, y, p, S);
			},
			onError: (e) => {
				b(!0), d !== "empty" && y(!0), w && w(e);
			}
		});
	});
	function E({ isAppRouter: e, imgAttributes: t }) {
		let n = {
			as: "image",
			imageSrcSet: t.srcSet,
			imageSizes: t.sizes,
			crossOrigin: t.crossOrigin,
			referrerPolicy: t.referrerPolicy,
			...x(t.fetchPriority)
		};
		return e && o.default.preload ? (o.default.preload(t.src, n), null) : /* @__PURE__ */ (0, i.jsx)(s.default, { children: /* @__PURE__ */ (0, i.jsx)("link", {
			rel: "preload",
			href: t.srcSet ? void 0 : t.src,
			...n
		}, "__nimg-" + t.src + t.srcSet + t.sizes) });
	}
	var D = /* @__PURE__ */ (0, a.forwardRef)((e, t) => {
		let n = !(0, a.useContext)(p.RouterContext), r = (0, a.useContext)(u.ImageConfigContext), o = (0, a.useMemo)(() => {
			let e = _ || r || l.imageConfigDefault, t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t), n = e.deviceSizes.sort((e, t) => e - t), i = e.qualities?.sort((e, t) => e - t);
			return {
				...e,
				allSizes: t,
				deviceSizes: n,
				qualities: i,
				localPatterns: typeof window > "u" ? r?.localPatterns : e.localPatterns
			};
		}, [r]), { onLoad: s, onLoadingComplete: d } = e, f = (0, a.useRef)(s);
		(0, a.useEffect)(() => {
			f.current = s;
		}, [s]);
		let m = (0, a.useRef)(d);
		(0, a.useEffect)(() => {
			m.current = d;
		}, [d]);
		let [g, v] = (0, a.useState)(!1), [y, b] = (0, a.useState)(!1), { props: x, meta: C } = (0, c.getImgProps)(e, {
			defaultLoader: h.default,
			imgConf: o,
			blurComplete: g,
			showAltText: y
		});
		return /* @__PURE__ */ (0, i.jsxs)(i.Fragment, { children: [/* @__PURE__ */ (0, i.jsx)(S, {
			...x,
			unoptimized: C.unoptimized,
			placeholder: C.placeholder,
			fill: C.fill,
			onLoadRef: f,
			onLoadingCompleteRef: m,
			setBlurComplete: v,
			setShowAltText: b,
			sizesInput: e.sizes,
			ref: t
		}), C.preload ? /* @__PURE__ */ (0, i.jsx)(E, {
			isAppRouter: n,
			imgAttributes: x
		}) : null] });
	});
	(typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && e.default.__esModule === void 0 && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
})), R = /* @__PURE__ */ c(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		default: function() {
			return s;
		},
		getImageProps: function() {
			return o;
		}
	});
	var n = y(), r = w(), i = L(), a = /* @__PURE__ */ n._(F());
	function o(e) {
		let { props: t } = (0, r.getImgProps)(e, {
			defaultLoader: a.default,
			imgConf: process.env.__NEXT_IMAGE_OPTS
		});
		for (let [e, n] of Object.entries(t)) n === void 0 && delete t[e];
		return { props: t };
	}
	var s = i.Image;
})), z = /* @__PURE__ */ u((/* @__PURE__ */ c(((e, t) => {
	t.exports = R();
})))()), B = ({ children: e }) => /* @__PURE__ */ (0, h.jsx)("footer", {
	className: "\r\n        w-full\r\n        bg-gray\r\n        text-white\r\n      ",
	children: /* @__PURE__ */ (0, h.jsx)("div", {
		className: "\r\n          mx-auto\r\n          max-w-7xl\r\n          grid\r\n          grid-cols-1\r\n          gap-8\r\n          px-6\r\n          py-10\r\n          md:grid-cols-3\r\n        ",
		children: e
	})
}), V = ({ children: e, description: t }) => /* @__PURE__ */ (0, h.jsxs)("div", {
	className: "flex flex-col gap-4",
	children: [e, /* @__PURE__ */ (0, h.jsx)("p", {
		className: "\r\n          max-w-sm\r\n          text-sm\r\n          text-white\r\n        ",
		children: t
	})]
}), H = ({ copyright: e }) => /* @__PURE__ */ (0, h.jsx)("div", {
	className: "\r\n        bg-gray\r\n        text-light-gray\r\n\r\n        border-t\r\n        border-gray\r\n\r\n        py-4\r\n\r\n        text-center\r\n        text-sm\r\n      ",
	children: e
}), U = ({ email: e, phone: t, socials: n }) => /* @__PURE__ */ (0, h.jsxs)("div", {
	className: "text-white",
	children: [
		/* @__PURE__ */ (0, h.jsx)("h3", {
			className: "\r\n          mb-3\r\n          text-lg\r\n          font-semibold\r\n        ",
			children: "Contact"
		}),
		/* @__PURE__ */ (0, h.jsxs)("div", {
			className: "flex flex-col gap-2",
			children: [/* @__PURE__ */ (0, h.jsx)("p", { children: e }), /* @__PURE__ */ (0, h.jsx)("p", { children: t })]
		}),
		/* @__PURE__ */ (0, h.jsx)("h4", {
			className: "\r\n          mt-5\r\n          mb-2\r\n          font-medium\r\n        ",
			children: "Follow Us"
		}),
		/* @__PURE__ */ (0, h.jsx)("div", {
			className: "flex flex-wrap gap-3",
			children: n.map((e) => /* @__PURE__ */ (0, h.jsx)("a", {
				href: e.href,
				className: "hover:underline",
				children: e.label
			}, e.id))
		})
	]
}), W = ({ title: e, links: t, onItemClick: n }) => /* @__PURE__ */ (0, h.jsxs)("div", {
	className: "text-white",
	children: [/* @__PURE__ */ (0, h.jsx)("h3", {
		className: "\r\n          mb-3\r\n          text-lg\r\n          font-semibold\r\n        ",
		children: e
	}), /* @__PURE__ */ (0, h.jsx)("div", {
		className: "flex flex-col gap-2",
		children: t.map((e) => /* @__PURE__ */ (0, h.jsx)("a", {
			href: e.href,
			onClick: () => n?.(e.label),
			className: "hover:underline",
			children: e.label
		}, e.id))
	})]
}), G = ({ children: e }) => /* @__PURE__ */ (0, h.jsx)("form", {
	className: "w-full max-w-sm",
	children: /* @__PURE__ */ (0, h.jsx)("div", {
		className: "flex flex-col gap-1 ",
		children: e
	})
}), K = ({ children: e, style: t }) => /* @__PURE__ */ (0, h.jsx)("header", {
	className: `w-full bg-white border-b border-light-gray shadow-sm ${t}`,
	children: /* @__PURE__ */ (0, h.jsx)("div", {
		className: "flex items-center justify-between px-6 py-4",
		children: e
	})
}), q = ({ logo: e = "/logo.svg", title: t = "my Company", style: n, alt: r = "" }) => /* @__PURE__ */ (0, h.jsxs)("div", {
	className: `
        flex
        items-center

        gap-2
        sm:gap-3

        shrink-0

        ${n || ""}
      `,
	children: [/* @__PURE__ */ (0, h.jsx)(z.default, {
		src: e,
		alt: r,
		width: 40,
		height: 40,
		className: "\r\n          h-8\r\n          w-8\r\n\r\n          sm:h-10\r\n          sm:w-10\r\n\r\n          object-contain\r\n        "
	}), /* @__PURE__ */ (0, h.jsx)("h1", {
		className: "\r\n          text-sm\r\n          sm:text-lg\r\n\r\n          font-bold\r\n          text-blue\r\n        ",
		children: t
	})]
}), J = ({ navDrawer: e = [], style: n, onItemClick: r }) => {
	let [i, a] = t(!1);
	return /* @__PURE__ */ (0, h.jsxs)(h.Fragment, { children: [
		/* @__PURE__ */ (0, h.jsx)("button", {
			onClick: () => a(!0),
			className: " flex md:hidden items-center justify-center h-10 w-10 rounded-md hover:bg-gray-100",
			children: /* @__PURE__ */ (0, h.jsx)("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24",
				fill: "currentColor",
				className: "\r\n            h-6\r\n            w-6\r\n            text-gray-700\r\n          ",
				children: /* @__PURE__ */ (0, h.jsx)("path", {
					fillRule: "evenodd",
					d: "M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z",
					clipRule: "evenodd"
				})
			})
		}),
		i && /* @__PURE__ */ (0, h.jsx)("div", {
			onClick: () => a(!1),
			className: "fixed inset-0 z-40 bg-black/40 md:hidden"
		}),
		/* @__PURE__ */ (0, h.jsxs)("aside", {
			className: `
          fixed top-0 
          left-0 z-50 
          h-screen w-65
           bg-white 
           shadow-lg 
          transition-transform duration-300

          ${i ? "translate-x-0" : "-translate-x-full"}

          md:hidden

          ${n || ""}
        `,
			children: [/* @__PURE__ */ (0, h.jsxs)("div", {
				className: "\r\n            flex\r\n            items-center\r\n            justify-between\r\n\r\n            border-b\r\n            border-light-gray\r\n\r\n            px-5\r\n            py-4\r\n          ",
				children: [/* @__PURE__ */ (0, h.jsx)("h2", {
					className: "text-lg font-semibold",
					children: "Menu"
				}), /* @__PURE__ */ (0, h.jsx)("button", {
					onClick: () => a(!1),
					className: "\r\n              flex\r\n              items-center\r\n              justify-center\r\n\r\n              h-10\r\n              w-10\r\n\r\n              rounded-md\r\n\r\n              hover:bg-gray-100\r\n            ",
					children: /* @__PURE__ */ (0, h.jsx)("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 24 24",
						fill: "currentColor",
						className: "\r\n                h-6\r\n                w-6\r\n\r\n                text-gray-700\r\n              ",
						children: /* @__PURE__ */ (0, h.jsx)("path", {
							fillRule: "evenodd",
							d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 01-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06Z",
							clipRule: "evenodd"
						})
					})
				})]
			}), /* @__PURE__ */ (0, h.jsx)("div", {
				className: "flex flex-col p-4",
				children: e.map((e) => /* @__PURE__ */ (0, h.jsx)("a", {
					href: e.href || "#",
					onClick: () => {
						r?.(e.label), a(!1);
					},
					className: "\r\n                rounded-md\r\n                px-4\r\n                py-3\r\n                hover:bg-gray-100\r\n              ",
					children: e.label
				}, e.id))
			})]
		})
	] });
}, Y = ({ isOpen: e, onClose: t, title: n, children: r }) => e ? /* @__PURE__ */ (0, h.jsxs)(h.Fragment, { children: [/* @__PURE__ */ (0, h.jsx)("div", {
	className: "fixed inset-0 z-40 bg-black/40",
	onClick: t
}), /* @__PURE__ */ (0, h.jsx)("div", {
	className: "fixed inset-0 z-50 flex items-center justify-center p-4",
	children: /* @__PURE__ */ (0, h.jsxs)("div", {
		className: "w-full max-w-md bg-white shadow-lg",
		role: "dialog",
		"aria-modal": "true",
		children: [/* @__PURE__ */ (0, h.jsxs)("div", {
			className: "flex items-center justify-between border-b border-gray-200 px-5 py-4",
			children: [/* @__PURE__ */ (0, h.jsx)("h2", {
				className: "text-lg font-semibold",
				children: n
			}), /* @__PURE__ */ (0, h.jsx)("button", {
				onClick: t,
				className: "flex h-10 w-10 items-center justify-center hover:bg-gray-100 rounded-md",
				"aria-label": "Close modal",
				children: /* @__PURE__ */ (0, h.jsx)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					fill: "none",
					viewBox: "0 0 24 24",
					strokeWidth: 2,
					stroke: "currentColor",
					className: "h-5 w-5",
					children: /* @__PURE__ */ (0, h.jsx)("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						d: "M6 18L18 6M6 6l12 12"
					})
				})
			})]
		}), /* @__PURE__ */ (0, h.jsx)("div", {
			className: "p-5",
			children: r
		})]
	})
})] }) : null, X = ({ placeholder: e = "Search...", style: n, children: r }) => {
	let [i, a] = t(!1);
	return /* @__PURE__ */ (0, h.jsxs)("div", {
		className: `relative ${n || ""}`,
		children: [
			/* @__PURE__ */ (0, h.jsxs)("div", {
				className: "hidden md:block relative",
				children: [/* @__PURE__ */ (0, h.jsx)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					strokeWidth: 2,
					className: "\r\n            absolute\r\n            left-3\r\n            top-1/2\r\n            h-4\r\n            w-4\r\n            -translate-y-1/2\r\n            text-gray-400\r\n          ",
					children: /* @__PURE__ */ (0, h.jsx)("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						d: "M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
					})
				}), /* @__PURE__ */ (0, h.jsx)("input", {
					type: "text",
					placeholder: e,
					className: "\r\n            w-27.5\r\n            sm:w-40\r\n            md:w-50\r\n            lg:w-60\r\n            rounded-md\r\n            border\r\n            border-light-gray\r\n            bg-white\r\n            px-3\r\n            py-2\r\n            pl-9\r\n            text-xs\r\n            sm:text-sm\r\n            focus:outline-none\r\n            focus:ring-2\r\n            focus:ring-blue\r\n          "
				})]
			}),
			/* @__PURE__ */ (0, h.jsx)("button", {
				onClick: () => a(!0),
				className: "\r\n          flex\r\n          md:hidden\r\n          items-center\r\n          justify-center\r\n          h-10\r\n          w-10\r\n          rounded-md\r\n          hover:bg-gray-100\r\n        ",
				children: /* @__PURE__ */ (0, h.jsx)("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					strokeWidth: 2,
					className: "\r\n            h-6\r\n            w-6\r\n            text-gray-700\r\n          ",
					children: /* @__PURE__ */ (0, h.jsx)("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						d: "M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
					})
				})
			}),
			/* @__PURE__ */ (0, h.jsx)(Y, {
				isOpen: i,
				title: "Search",
				onClose: () => a(!1),
				children: r || /* @__PURE__ */ (0, h.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, h.jsx)("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						strokeWidth: 2,
						className: "\r\n                absolute\r\n                left-3\r\n                top-1/2\r\n                h-4\r\n                w-4\r\n                -translate-y-1/2\r\n                text-gray-400\r\n              ",
						children: /* @__PURE__ */ (0, h.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							d: "M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
						})
					}), /* @__PURE__ */ (0, h.jsx)("input", {
						autoFocus: !0,
						type: "text",
						placeholder: e,
						className: "\r\n                w-full\r\n                rounded-md\r\n                border\r\n                border-light-gray\r\n                bg-white\r\n                px-3\r\n                py-2\r\n                pl-9\r\n                text-sm\r\n                focus:outline-none\r\n                focus:ring-2\r\n                focus:ring-blue\r\n              "
					})]
				})
			})
		]
	});
}, Z = ({ navBar: e = [], style: t, onItemClick: n }) => /* @__PURE__ */ (0, h.jsx)("nav", {
	className: `
        hidden
        md:flex
        gap-12
        justify-center
        items-center
        absolute
        left-1/2
        -translate-x-1/2
        ${t || ""}
      `,
	children: e.map((e) => /* @__PURE__ */ (0, h.jsx)("a", {
		href: e.href || "#",
		onClick: () => n?.(e.label),
		className: "\r\n            text-lg\r\n            font-bold\r\n            text-black\r\n            hover:text-green\r\n            cursor-pointer\r\n          ",
		children: e.label
	}, e.id))
}), Q = "border-red", ee = "text-red", te = "border-gray", ne = ({ id: e, labelText: t, placeholder: n, type: r, error: i, helperText: a }) => /* @__PURE__ */ (0, h.jsxs)("div", {
	className: "flex flex-col gap-1",
	children: [
		/* @__PURE__ */ (0, h.jsx)("label", {
			htmlFor: e,
			className: "text-sm font-medium text-gray",
			children: t
		}),
		/* @__PURE__ */ (0, h.jsx)("input", {
			id: e,
			placeholder: n,
			type: r,
			className: `block w-full px-3 py-2.5 bg-neutral-secondary-medium border ${i ? Q : te} text-heading text-sm rounded-base shadow-xs placeholder:text-body focus:ring-brand focus:border-brand`
		}),
		a && /* @__PURE__ */ (0, h.jsx)("p", {
			className: `${i ? ee : "text-light-gray"} text-xs`,
			children: a
		})
	]
}), $ = ({ id: e, label: n, required: r, disabled: i, defaultChecked: a, error: o, helperText: s }) => {
	let [c, l] = t(a || !1);
	return /* @__PURE__ */ (0, h.jsxs)("div", {
		className: "flex flex-col gap-1",
		children: [/* @__PURE__ */ (0, h.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, h.jsx)("input", {
				id: e,
				type: "checkbox",
				checked: c,
				onChange: (e) => {
					let t = e.target.checked;
					l(t);
				},
				disabled: i,
				className: `
            w-4 h-4 border rounded-xs
            bg-neutral-secondary-medium
            focus:ring-2 focus:ring-brand-soft
            ${i ? "border-light cursor-not-allowed" : "border-default-medium hover:cursor-pointer"}
          `
			}), /* @__PURE__ */ (0, h.jsxs)("label", {
				htmlFor: e,
				className: `
            select-none ms-2 text-sm font-medium
            ${i ? "text-fg-disabled text-light-gray" : "text-heading"}
          `,
				children: [
					n,
					" ",
					r && /* @__PURE__ */ (0, h.jsx)("span", {
						className: "text-red",
						children: "*"
					})
				]
			})]
		}), /* @__PURE__ */ (0, h.jsx)("div", {
			className: o ? "text-red text-sm font-medium" : "text-gray text-sm font-medium",
			children: s
		})]
	});
}, re = ({ label: e, options: t, required: n, disabled: r, helperText: i, error: a, value: o, onChange: s }) => /* @__PURE__ */ (0, h.jsxs)("div", {
	className: "w-full flex flex-col gap-1",
	children: [
		/* @__PURE__ */ (0, h.jsxs)("label", {
			className: "text-sm font-medium text-gray",
			children: [
				e,
				" ",
				n && "*"
			]
		}),
		/* @__PURE__ */ (0, h.jsx)("select", {
			className: `h-10 border-r-8 border-transparent px-4 outline outline-neutral-700 block w-full p-2 bg-neutral-secondary-medium
         border border-default-medium text-heading text-sm font-normal rounded-base focus:ring-brand focus:border-brand shadow-xs 
         placeholder:text-body
         ${r ? "cursor-not-allowed" : "hover:cursor-pointer"}`,
			disabled: r,
			onChange: (e) => {
				s && s(e.target.value);
			},
			value: o,
			children: t.map((e) => /* @__PURE__ */ (0, h.jsx)("option", {
				value: e.name,
				children: e.value
			}, e.key))
		}),
		i && a && /* @__PURE__ */ (0, h.jsx)("div", {
			className: "text-red text-sm font-normal",
			children: i
		})
	]
}), ie = ({ id: e, title: t, children: n, style: r }) => /* @__PURE__ */ (0, h.jsx)("section", {
	id: e,
	className: `
        min-h-screen
        w-full
        px-6
        py-6
        scroll-mt-32
        md:px-10
        lg:px-16

        ${r || ""}
      `,
	children: /* @__PURE__ */ (0, h.jsxs)("div", {
		className: "mx-auto flex w-full max-w-7xl flex-col gap-10",
		children: [t && /* @__PURE__ */ (0, h.jsx)("h2", {
			className: "\r\n              text-3xl\r\n              font-bold\r\n              md:text-4xl\r\n            ",
			children: t
		}), n]
	})
}), ae = ({ items: e }) => /* @__PURE__ */ (0, h.jsx)("nav", {
	"aria-label": "Breadcrumb",
	children: /* @__PURE__ */ (0, h.jsx)("ol", {
		className: "\r\n          flex\r\n          flex-wrap\r\n          items-center\r\n          gap-2\r\n          text-sm\r\n        ",
		children: e.map((t, n) => {
			let r = n === e.length - 1;
			return /* @__PURE__ */ (0, h.jsxs)("li", {
				className: "\r\n                flex\r\n                items-center\r\n                gap-2\r\n              ",
				children: [r ? /* @__PURE__ */ (0, h.jsx)("span", {
					className: "\r\n                    font-semibold\r\n                    text-gray-900\r\n                  ",
					children: t.label
				}) : /* @__PURE__ */ (0, h.jsx)("a", {
					href: t.href,
					className: "\r\n                    text-gray-600\r\n                    transition-colors\r\n                    hover:text-blue-600\r\n                    hover:underline\r\n                  ",
					children: t.label
				}), !r && /* @__PURE__ */ (0, h.jsx)("span", {
					className: "text-gray-400",
					children: ">"
				})]
			}, t.id);
		})
	})
}), oe = ({ children: t }) => {
	let [n, r] = e.useState("Home"), i = [
		{
			id: 1,
			href: "#home",
			label: "Home"
		},
		{
			id: 2,
			href: "#about",
			label: "About"
		},
		{
			id: 3,
			href: "#services",
			label: "Services"
		},
		{
			id: 4,
			href: "#contact",
			label: "Contact"
		}
	];
	return /* @__PURE__ */ (0, h.jsxs)("div", {
		className: "w-full scroll-smooth",
		children: [
			/* @__PURE__ */ (0, h.jsx)("div", {
				className: "sticky top-0 z-50 bg-white",
				children: /* @__PURE__ */ (0, h.jsxs)(K, { children: [/* @__PURE__ */ (0, h.jsxs)("div", {
					className: "flex items-center gap-4 lg:gap-10",
					children: [/* @__PURE__ */ (0, h.jsx)(q, {
						logo: "/icon.svg",
						title: "QTEK"
					}), /* @__PURE__ */ (0, h.jsx)(Z, {
						navBar: i,
						onItemClick: r
					})]
				}), /* @__PURE__ */ (0, h.jsxs)("div", {
					className: "flex shrink-0 items-center gap-2 sm:gap-3",
					children: [/* @__PURE__ */ (0, h.jsx)(X, {}), /* @__PURE__ */ (0, h.jsx)(J, {
						navDrawer: i,
						onItemClick: r
					})]
				})] })
			}),
			/* @__PURE__ */ (0, h.jsx)("div", {
				className: " \r\n            mx-auto\r\n            max-w-full\r\n            px-6\r\n            py-4\r\n            sticky\r\n            z-40\r\n            top-16\r\n            bg-light-gray",
				children: /* @__PURE__ */ (0, h.jsx)(ae, { items: [{
					id: 1,
					label: n,
					href: "#"
				}] })
			}),
			t,
			/* @__PURE__ */ (0, h.jsxs)(B, { children: [
				/* @__PURE__ */ (0, h.jsx)(V, {
					description: "Building modern and scalable digital solutions.",
					children: /* @__PURE__ */ (0, h.jsx)("div", {
						className: "scale-150 origin-left",
						children: /* @__PURE__ */ (0, h.jsx)(q, {
							logo: "/icon.svg",
							title: "QTEK"
						})
					})
				}),
				/* @__PURE__ */ (0, h.jsx)(W, {
					title: "Quick Links",
					links: i,
					onItemClick: r
				}),
				/* @__PURE__ */ (0, h.jsx)(U, {
					email: "hello@qtek.com",
					phone: "+63 900 000 0000",
					socials: [
						{
							id: 1,
							label: "Facebook",
							href: "#"
						},
						{
							id: 2,
							label: "LinkedIn",
							href: "#"
						},
						{
							id: 3,
							label: "GitHub",
							href: "#"
						}
					]
				}),
				/* @__PURE__ */ (0, h.jsx)(H, { copyright: "© 2026 QTEK. All rights reserved." })
			] })
		]
	});
}, se = ({ children: e, style: t, maxRows: n = 5 }) => /* @__PURE__ */ (0, h.jsx)("div", {
	className: `
        w-full
        overflow-hidden
        rounded-md
        bg-white
       shadow-lg
        ${t || ""}
      `,
	children: /* @__PURE__ */ (0, h.jsx)("div", {
		className: "overflow-auto",
		style: { maxHeight: `${n * 56}px` },
		children: /* @__PURE__ */ (0, h.jsx)("table", {
			className: "w-full border-separate border-spacing-0",
			children: e
		})
	})
}), ce = {
	left: "text-left",
	center: "text-center",
	right: "text-right"
}, le = ({ rowData: e }) => /* @__PURE__ */ (0, h.jsx)("thead", { children: /* @__PURE__ */ (0, h.jsx)("tr", {
	className: "\r\n          sticky\r\n          top-0\r\n          z-10\r\n          bg-white\r\n        ",
	children: e.map((e) => /* @__PURE__ */ (0, h.jsx)("th", {
		className: `
              px-3 sm:px-4 md:px-6
              py-2 md:py-4
              text-xs sm:text-sm
              text-gray
              font-semibold

              border-b
              border-light-gray
              ${ce[e.align || "left"]}
              ${e.style || ""}
            `,
		children: e.value
	}, e.key))
}) }), ue = ({ children: e, style: t }) => /* @__PURE__ */ (0, h.jsx)("tbody", {
	className: t,
	children: e
}), de = ({ rowData: e, style: t }) => /* @__PURE__ */ (0, h.jsx)("tr", {
	className: `

        transition-colors
        hover:bg-gray-50
          [&:last-child_td]:border-b-0

       
        ${t || ""}
      `,
	children: e.map((e) => /* @__PURE__ */ (0, h.jsx)("td", {
		className: `
            px-3 sm:px-4 md:px-6
            py-2 md:py-4
            text-xs sm:text-sm
            text-gray
            whitespace-nowrap

            border-b
            border-light-gray
          
        
            
            ${ce[e.align || "left"]}
            ${e.style || ""}
          `,
		children: e.value
	}, e.key))
}), fe = ({ children: e, align: t = "left", style: n }) => /* @__PURE__ */ (0, h.jsx)("td", {
	className: `
        px-4 
        py-3
        text-sm
        ${t === "center" ? "text-center" : ""}
        ${t === "right" ? "text-right" : ""}
        ${t === "left" ? "text-left" : ""}
        ${n || ""}
      `,
	children: e
});
//#endregion
export { ae as Breadcrumbs, _ as Button, v as Card, B as Cfooter, G as Cform, K as Cheader, $ as CheckBox, se as Ctable, J as Drawer, H as FooterBottom, U as FooterContact, V as FooterIcon, q as Icon, oe as LandingLayout, g as Loader, Y as Modal, Z as NavBar, W as QuickLink, X as SearchBar, ie as Section, re as Select, ue as TableBody, fe as TableCell, le as TableHead, de as TableRow, ne as TextField };
