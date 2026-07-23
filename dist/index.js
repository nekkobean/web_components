import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
import r, { useState as i } from "react";
//#region src/component/spinner/Loader.tsx
var a = () => /* @__PURE__ */ t("span", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white" }), o = ({ variant: e = "primary", label: r, isLoading: i = !1, disabled: o = !1, onClick: s, style: c, type: l = "button" }) => {
	let u = {
		primary: "bg-primary-button text-primary",
		secondary: "bg-secondary-button text-primary",
		restore: "bg-restore-button text-primary",
		delete: "bg-delete-button text-primary",
		disabled: "bg-disabled-button text-primary"
	}, d = i ? /* @__PURE__ */ t(a, {}) : null, f = o || i;
	return /* @__PURE__ */ t("div", {
		className: "w-full md:w-auto",
		children: /* @__PURE__ */ n("button", {
			type: l,
			className: `${u[e]} ${c || ""} flex items-center gap-3 px-5 py-2.5 rounded-2xl text-lg md:text-lg lg:text-xl font-medium w-full md:w-auto md:max-w-full justify-center whitespace-nowrap
         ${f ? "cursor-not-allowed opacity-50" : "hover:cursor-pointer"}`,
			disabled: f,
			onClick: s,
			children: [d, r]
		})
	});
}, s = ({ children: e, style: n }) => /* @__PURE__ */ t("div", {
	className: `
        rounded-lg shadow-md overflow-hidden
        ${n || "w-full bg-primary"}
      `,
	children: e
}), c = ({ title: e, description: r, titleClassName: i, descriptionClassName: a }) => /* @__PURE__ */ n("div", {
	className: "p-6",
	children: [/* @__PURE__ */ t("h2", {
		className: `font-bold mb-2 text-black whitespace-pre-line ${i || "text-lg"}`,
		children: e
	}), /* @__PURE__ */ t("p", {
		className: `text-gray font-normal whitespace-pre-line ${a || "text-sm"}`,
		children: r
	})]
}), l = ({ children: e }) => /* @__PURE__ */ t("div", {
	className: "flex justify-end gap-4 w-full p-4",
	children: e
}), u = ({ alt: e, image: r, children: i }) => /* @__PURE__ */ n("div", {
	className: "relative w-full h-48",
	children: [/* @__PURE__ */ t("img", {
		src: r,
		alt: e,
		className: "w-full h-full object-cover"
	}), i]
}), d = ({ children: e, className: n }) => /* @__PURE__ */ t("footer", {
	className: `
        w-full
        text-white
        ${n || "bg-gray"}
      `,
	children: /* @__PURE__ */ t("div", {
		className: "\r\n          mx-auto\r\n          max-w-7xl\r\n          grid\r\n          grid-cols-1\r\n          gap-8\r\n          px-6\r\n          py-10\r\n          md:grid-cols-3\r\n        ",
		children: e
	})
}), f = ({ copyright: e, footerBottomClassName: n = "" }) => /* @__PURE__ */ t("div", {
	className: `
        border-t
        
        py-4

        text-center
       
        ${n || "text-light-gray bg-gray border-gray text-sm"}
      `,
	children: e
}), p = ({ email: e, phone: r, socials: i }) => /* @__PURE__ */ n("div", {
	className: "text-white",
	children: [
		/* @__PURE__ */ t("h3", {
			className: "\r\n          mb-3\r\n          text-lg\r\n          font-semibold\r\n        ",
			children: "Contact"
		}),
		/* @__PURE__ */ n("div", {
			className: "flex flex-col gap-2",
			children: [/* @__PURE__ */ t("p", { children: e }), /* @__PURE__ */ t("p", { children: r })]
		}),
		/* @__PURE__ */ t("h4", {
			className: "\r\n          mt-5\r\n          mb-2\r\n          font-medium\r\n        ",
			children: "Follow Us"
		}),
		/* @__PURE__ */ t("div", {
			className: "flex flex-wrap gap-3",
			children: i.map((e) => /* @__PURE__ */ t("a", {
				href: e.href,
				className: "hover:underline",
				children: e.label
			}, e.id))
		})
	]
}), m = ({ children: e, description: r }) => /* @__PURE__ */ n("div", {
	className: "flex flex-col gap-4",
	children: [e, /* @__PURE__ */ t("p", {
		className: "\r\n          max-w-sm\r\n          text-sm\r\n          text-white\r\n        ",
		children: r
	})]
}), h = ({ title: e, links: r, onItemClick: i }) => /* @__PURE__ */ n("div", {
	className: "text-white",
	children: [/* @__PURE__ */ t("h3", {
		className: "\r\n          mb-3\r\n          text-lg\r\n          font-semibold\r\n        ",
		children: e
	}), /* @__PURE__ */ t("div", {
		className: "flex flex-col gap-2",
		children: r.map((e) => /* @__PURE__ */ t("a", {
			href: e.href,
			onClick: () => i?.(e.label),
			className: "hover:underline",
			children: e.label
		}, e.id))
	})]
}), g = ({ children: e, onSubmit: n, className: r = "", ...i }) => /* @__PURE__ */ t("form", {
	onSubmit: n,
	className: `w-full max-w-sm ${r}`,
	...i,
	children: /* @__PURE__ */ t("div", {
		className: "flex flex-col gap-1",
		children: e
	})
}), _ = ({ children: e, style: n, contentClassName: r }) => /* @__PURE__ */ t("header", {
	className: `w-full border-b border-light-gray shadow-sm ${n || "bg-white"}`,
	children: /* @__PURE__ */ t("div", {
		className: r || "relative flex items-center justify-between gap-3 px-4 sm:px-9 py-3 sm:py-4 min-w-0",
		children: e
	})
}), v = ({ navDrawer: r = [], style: a, onItemClick: o }) => {
	let [s, c] = i(!1);
	return /* @__PURE__ */ n(e, { children: [
		/* @__PURE__ */ t("button", {
			onClick: () => c(!0),
			className: "\r\n          shrink-0\r\n          flex\r\n          md:hidden\r\n          items-center\r\n          justify-center\r\n          h-10\r\n          w-10\r\n          rounded-md\r\n          hover:bg-light-gray\r\n        ",
			children: /* @__PURE__ */ t("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24",
				fill: "currentColor",
				className: "\r\n            h-6\r\n            w-6\r\n            text-light-black\r\n          ",
				children: /* @__PURE__ */ t("path", {
					fillRule: "evenodd",
					d: "M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z",
					clipRule: "evenodd"
				})
			})
		}),
		s && /* @__PURE__ */ t("div", {
			onClick: () => c(!1),
			className: "fixed inset-0 z-40 bg-black/40 md:hidden"
		}),
		/* @__PURE__ */ n("aside", {
			className: `
          fixed top-0
          left-0 z-50
          h-screen w-65
          bg-white
          shadow-lg
          transition-transform duration-300
          ${s ? "translate-x-0" : "-translate-x-full"}
          md:hidden
          ${a || ""}
        `,
			children: [/* @__PURE__ */ n("div", {
				className: "\r\n            flex\r\n            items-center\r\n            justify-between\r\n            border-b\r\n            border-light-gray\r\n            px-5\r\n            py-4\r\n          ",
				children: [/* @__PURE__ */ t("h2", {
					className: "text-lg font-semibold text-light-black",
					children: "Menu"
				}), /* @__PURE__ */ t("button", {
					onClick: () => c(!1),
					className: "\r\n              flex\r\n              items-center\r\n              justify-center\r\n              h-10\r\n              w-10\r\n              rounded-md\r\n              hover:bg-light-gray\r\n            ",
					children: /* @__PURE__ */ t("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 24 24",
						fill: "currentColor",
						className: "\r\n                h-6\r\n                w-6\r\n                text-light-black\r\n              ",
						children: /* @__PURE__ */ t("path", {
							fillRule: "evenodd",
							d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 01-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06Z",
							clipRule: "evenodd"
						})
					})
				})]
			}), /* @__PURE__ */ t("div", {
				className: "flex flex-col p-4",
				children: r.map((e) => /* @__PURE__ */ t("a", {
					href: e.href || "#",
					onClick: () => {
						o?.(e.label), c(!1);
					},
					className: "\r\n                rounded-md\r\n                px-4\r\n                py-3\r\n                hover:bg-light-gray\r\n                text-black\r\n              ",
					children: e.label
				}, e.id))
			})]
		})
	] });
}, y = ({ logo: e = "/logo.svg", title: r = "my Company", style: i, alt: a = "", titleClassName: o = "" }) => /* @__PURE__ */ n("div", {
	className: `
        flex
        items-center
        gap-2
        sm:gap-3
        shrink-0
        min-w-0
        max-w-28
        sm:max-w-40
        md:max-w-56
        ${i || ""}
      `,
	children: [/* @__PURE__ */ t("img", {
		src: e,
		alt: a,
		className: "\r\n          h-8\r\n          w-8\r\n          sm:h-10\r\n          sm:w-10\r\n         object-cover\r\n          rounded-full\r\n          shrink-0\r\n        "
	}), /* @__PURE__ */ t("h1", {
		className: `
          text-sm
          sm:text-lg
          font-bold
          truncate
          ${o || "text-white"}
        `,
		title: r,
		children: r
	})]
}), b = ({ navBar: e = [], style: n, onItemClick: r, navLabelClassName: i = "text-black" }) => /* @__PURE__ */ t("nav", {
	className: `
        hidden
        md:flex
        flex-1
        gap-6
        lg:gap-12
        justify-center
        items-center
       
        absolute
        left-1/2
        -translate-x-1/2
        
        min-w-0
        overflow-x-auto
        whitespace-nowrap
        ${n || ""}
      `,
	children: e.map((e) => /* @__PURE__ */ t("a", {
		href: e.href || "#",
		onClick: () => r?.(e.label),
		className: `
            text-base
            lg:text-lg
            cursor-pointer
            font-bold
            
            ${i || "text-black hover:text-green"}`,
		children: e.label
	}, e.id))
}), x = ({ isOpen: r, onClose: i, title: a, children: o, style: s, bodyClassName: c }) => r ? /* @__PURE__ */ n(e, { children: [/* @__PURE__ */ t("div", {
	className: "fixed inset-0 z-40 bg-black/40",
	onClick: i
}), /* @__PURE__ */ t("div", {
	className: "fixed inset-0 z-50 flex items-center justify-center p-4",
	children: /* @__PURE__ */ n("div", {
		className: `flex flex-col w-full max-w-md max-h-[85vh] rounded-lg bg-white shadow-lg ${s || ""}`,
		role: "dialog",
		"aria-modal": "true",
		children: [/* @__PURE__ */ n("div", {
			className: "flex shrink-0 items-center justify-between border-b border-gray-200 px-5 py-4",
			children: [/* @__PURE__ */ t("h2", {
				className: "text-lg font-semibold",
				children: a
			}), /* @__PURE__ */ t("button", {
				onClick: i,
				className: "flex h-10 w-10 items-center justify-center hover:bg-gray-100 rounded-md",
				"aria-label": "Close modal",
				children: /* @__PURE__ */ t("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					fill: "none",
					viewBox: "0 0 24 24",
					strokeWidth: 2,
					stroke: "currentColor",
					className: "h-5 w-5",
					children: /* @__PURE__ */ t("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						d: "M6 18L18 6M6 6l12 12"
					})
				})
			})]
		}), /* @__PURE__ */ t("div", {
			className: `overflow-y-auto p-5 ${c || ""}`,
			children: o
		})]
	})
})] }) : null, S = ({ placeholder: e = "Search...", style: r, children: a }) => {
	let [o, s] = i(!1);
	return /* @__PURE__ */ n("div", {
		className: `relative shrink-0 ${r || ""}`,
		children: [
			/* @__PURE__ */ n("div", {
				className: "hidden md:block relative",
				children: [/* @__PURE__ */ t("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					strokeWidth: 2,
					className: "\r\n            absolute\r\n            left-3\r\n            top-1/2\r\n            h-4\r\n            w-4\r\n            -translate-y-1/2\r\n            text-light-gray\r\n          ",
					children: /* @__PURE__ */ t("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						d: "M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
					})
				}), /* @__PURE__ */ t("input", {
					type: "text",
					placeholder: e,
					className: "\r\n            w-27.5\r\n            sm:w-40\r\n            md:w-50\r\n            lg:w-60\r\n            rounded-md\r\n            border\r\n            border-light-gray\r\n            bg-white\r\n            px-3\r\n            py-2\r\n            pl-9\r\n            text-xs\r\n            sm:text-sm\r\n            text-gray\r\n            focus:outline-none\r\n            focus:ring-2\r\n            focus:ring-blue\r\n          "
				})]
			}),
			/* @__PURE__ */ t("button", {
				onClick: () => s(!0),
				className: "\r\n          shrink-0\r\n          flex\r\n          md:hidden\r\n          items-center\r\n          justify-center\r\n          h-10\r\n          w-10\r\n          rounded-md\r\n          hover:bg-light-gray\r\n        ",
				children: /* @__PURE__ */ t("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					strokeWidth: 2,
					className: "\r\n            h-6\r\n            w-6\r\n            text-gray\r\n          ",
					children: /* @__PURE__ */ t("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						d: "M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
					})
				})
			}),
			/* @__PURE__ */ t(x, {
				isOpen: o,
				title: "Search",
				onClose: () => s(!1),
				children: a || /* @__PURE__ */ n("div", {
					className: "relative",
					children: [/* @__PURE__ */ t("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						strokeWidth: 2,
						className: "\r\n                absolute\r\n                left-3\r\n                top-1/2\r\n                h-4\r\n                w-4\r\n                -translate-y-1/2\r\n                text-gray\r\n              ",
						children: /* @__PURE__ */ t("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							d: "M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
						})
					}), /* @__PURE__ */ t("input", {
						autoFocus: !0,
						type: "text",
						placeholder: e,
						className: "\r\n                w-full\r\n                rounded-md\r\n                border\r\n                border-light-gray\r\n                bg-white\r\n                px-3\r\n                py-2\r\n                pl-9\r\n                text-sm\r\n                text-gray\r\n                focus:outline-none\r\n                focus:ring-2\r\n                focus:ring-blue\r\n              "
					})]
				})
			})
		]
	});
}, C = ({ id: e, label: r, required: a, disabled: o, defaultChecked: s, error: c, helperText: l, onChange: u }) => {
	let [d, f] = i(s || !1);
	return /* @__PURE__ */ n("div", {
		className: "flex flex-col gap-1",
		children: [/* @__PURE__ */ n("div", {
			className: "flex items-start gap-2",
			children: [/* @__PURE__ */ t("input", {
				id: e,
				type: "checkbox",
				checked: d,
				onChange: (e) => {
					let t = e.target.checked;
					f(t), u?.(t);
				},
				disabled: o,
				className: `w-5 h-5 mt-1 shrink-0 border rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft ${o ? "border-light cursor-not-allowed" : "border-default-medium hover:cursor-pointer"}`
			}), /* @__PURE__ */ n("label", {
				htmlFor: e,
				className: `select-none text-lg md:text-lg lg:text-xl font-medium ${o ? "text-light-gray" : "text-heading"}`,
				children: [
					r,
					" ",
					a && /* @__PURE__ */ t("span", {
						className: "text-red",
						children: "*"
					})
				]
			})]
		}), l && /* @__PURE__ */ t("div", {
			className: `text-sm md:text-base font-medium ${c ? "text-red" : "text-gray"}`,
			children: l
		})]
	});
}, w = ({ label: e, options: r, required: i, disabled: a, helperText: o, error: s, value: c, onChange: l }) => /* @__PURE__ */ n("div", {
	className: "w-full flex flex-col gap-1",
	children: [
		/* @__PURE__ */ n("label", {
			className: "text-lg md:text-lg lg:text-xl font-medium text-gray",
			children: [
				e,
				" ",
				i && "*"
			]
		}),
		/* @__PURE__ */ t("select", {
			className: `h-12 px-4 w-full bg-neutral-secondary-medium border border-default-medium text-heading text-lg md:text-lg lg:text-xl rounded-base shadow-xs focus:ring-brand focus:border-brand ${a ? "cursor-not-allowed" : "hover:cursor-pointer"}`,
			disabled: a,
			value: c,
			onChange: (e) => l?.(e.target.value),
			children: r.map((e) => /* @__PURE__ */ t("option", {
				value: e.name,
				children: e.value
			}, e.key))
		}),
		o && s && /* @__PURE__ */ t("div", {
			className: "text-red text-sm md:text-base font-normal",
			children: o
		})
	]
}), T = "border-red", E = "text-red", D = "border-gray", O = ({ id: e, labelText: r, placeholder: i, type: a, error: o, helperText: s, name: c, value: l, onChange: u }) => /* @__PURE__ */ n("div", {
	className: "flex flex-col gap-1",
	children: [
		/* @__PURE__ */ t("label", {
			htmlFor: e,
			className: "text-lg md:text-lg lg:text-xl font-medium text-gray",
			children: r
		}),
		/* @__PURE__ */ t("input", {
			id: e,
			name: c ?? e,
			placeholder: i,
			type: a,
			value: l,
			onChange: u,
			className: `block w-full px-3 py-3 bg-neutral-secondary-medium border ${o ? T : D} text-heading text-lg md:text-lg lg:text-xl rounded-base shadow-xs placeholder:text-body focus:ring-brand focus:border-brand`
		}),
		s && /* @__PURE__ */ t("p", {
			className: `${o ? E : "text-light-gray"} text-sm md:text-base`,
			children: s
		})
	]
}), k = ({ id: e, title: r, children: i, style: a = "", sectionTitleClassName: o, fullHeight: s = !1 }) => /* @__PURE__ */ t("section", {
	id: e,
	className: `
        w-full
        px-4
        py-6
        scroll-mt-[80px]
        sm:px-6
        sm:py-8
        md:px-10
        md:py-10
        lg:px-16
        lg:py-12
        ${s ? "md:min-h-screen" : ""}
        ${a || ""}
      `,
	children: /* @__PURE__ */ n("div", {
		className: "mx-auto flex w-full max-w-7xl flex-col gap-6 sm:gap-8 md:gap-10",
		children: [r && /* @__PURE__ */ t("h2", {
			className: `font-bold ${o || "text-black text-2xl sm:text-3xl md:text-4xl"}`,
			children: r
		}), i]
	})
}), A = ({ items: e, breadcrumbTextClassName: r }) => /* @__PURE__ */ t("nav", {
	"aria-label": "Breadcrumb",
	children: /* @__PURE__ */ t("ol", {
		className: `
          flex
          flex-wrap
          items-center
          gap-2
          text-sm
          ${r || "text-light-black"}
        `,
		children: e.map((r, i) => {
			let a = i === e.length - 1;
			return /* @__PURE__ */ n("li", {
				className: "\r\n                flex\r\n                items-center\r\n                gap-2\r\n              ",
				children: [a ? /* @__PURE__ */ t("span", {
					className: "\r\n                    font-semibold\r\n                    text-gray-900\r\n                  ",
					children: r.label
				}) : /* @__PURE__ */ t("a", {
					href: r.href,
					className: "\r\n                    text-light-black\r\n                    transition-colors\r\n                    hover:text-blue-600\r\n                    hover:underline\r\n                  ",
					children: r.label
				}), !a && /* @__PURE__ */ t("span", {
					className: "text-light-black",
					children: ">"
				})]
			}, r.id);
		})
	})
}), j = ({ children: e, navItems: i, logo: a, companyTitle: o, description: s = "", email: c = "", phone: l = "", socials: u = [], copyright: g = "", headerClassName: x = "bg-white", companyTitleClassName: C = "", breadcrumbClassName: w = "bg-light-gray", footerClassName: T = "", footerBottomClassName: E = "", breadcrumbTextClassName: D = "", navLabelClassName: O = "" }) => {
	let [k, j] = r.useState(i[0]?.label || "Home");
	return /* @__PURE__ */ n("div", {
		className: "w-full scroll-smooth",
		children: [
			/* @__PURE__ */ t("div", {
				className: "sticky top-0 z-50",
				children: /* @__PURE__ */ n(_, {
					style: x,
					children: [/* @__PURE__ */ n("div", {
						className: "flex items-center gap-4 lg:gap-10",
						children: [/* @__PURE__ */ t(y, {
							logo: a || "",
							title: o || "Company Name",
							titleClassName: C
						}), /* @__PURE__ */ t(b, {
							navBar: i,
							onItemClick: j,
							navLabelClassName: O
						})]
					}), /* @__PURE__ */ n("div", {
						className: "flex shrink-0 items-center gap-2 sm:gap-3",
						children: [/* @__PURE__ */ t(S, {}), /* @__PURE__ */ t(v, {
							navDrawer: i,
							onItemClick: j
						})]
					})]
				})
			}),
			/* @__PURE__ */ t("div", {
				className: `mx-auto max-w-full px-6 py-4 sticky z-40 top-16 ${w || "bg-light-gray"}`,
				children: /* @__PURE__ */ t(A, {
					items: [{
						id: 1,
						label: k,
						href: "#"
					}],
					breadcrumbTextClassName: D
				})
			}),
			e,
			/* @__PURE__ */ n(d, {
				className: T,
				children: [
					/* @__PURE__ */ t(m, {
						description: s,
						children: /* @__PURE__ */ t("div", {
							className: "scale-150 origin-left",
							children: /* @__PURE__ */ t(y, {
								logo: a || "",
								title: o || "Company Name",
								titleClassName: C
							})
						})
					}),
					/* @__PURE__ */ t(h, {
						title: "Quick Links",
						links: i,
						onItemClick: j
					}),
					/* @__PURE__ */ t(p, {
						email: c,
						phone: l,
						socials: u
					}),
					/* @__PURE__ */ t(f, {
						copyright: g || " ",
						footerBottomClassName: E
					})
				]
			})
		]
	});
}, M = ({ children: e, style: n, maxRows: r = 5 }) => /* @__PURE__ */ t("div", {
	className: `
        w-full
        overflow-hidden
        rounded-md
        bg-white
       shadow-lg
        ${n || ""}
      `,
	children: /* @__PURE__ */ t("div", {
		className: "overflow-auto",
		style: { maxHeight: `${r * 56}px` },
		children: /* @__PURE__ */ t("table", {
			className: "w-full border-separate border-spacing-0",
			children: e
		})
	})
}), N = ({ children: e, style: n }) => /* @__PURE__ */ t("tbody", {
	className: n,
	children: e
}), P = ({ children: e, align: n = "left", style: r }) => /* @__PURE__ */ t("td", {
	className: `
        px-4 
        py-3
        text-sm
        ${n === "center" ? "text-center" : ""}
        ${n === "right" ? "text-right" : ""}
        ${n === "left" ? "text-left" : ""}
        ${r || ""}
      `,
	children: e
}), F = {
	left: "text-left",
	center: "text-center",
	right: "text-right"
}, I = ({ rowData: e }) => /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ t("tr", {
	className: "\r\n          sticky\r\n          top-0\r\n          z-10\r\n          bg-white\r\n        ",
	children: e.map((e) => /* @__PURE__ */ t("th", {
		className: `
              px-3 sm:px-4 md:px-6
              py-2 md:py-4
              text-xs sm:text-sm
              text-gray
              font-semibold

              border-b
              border-light-gray
              ${F[e.align || "left"]}
              ${e.style || ""}
            `,
		children: e.value
	}, e.key))
}) }), L = ({ rowData: e, style: n }) => /* @__PURE__ */ t("tr", {
	className: `

        transition-colors
        hover:bg-gray-50
          [&:last-child_td]:border-b-0

       
        ${n || ""}
      `,
	children: e.map((e) => /* @__PURE__ */ t("td", {
		className: `
            px-3 sm:px-4 md:px-6
            py-2 md:py-4
            text-xs sm:text-sm
            text-gray
            whitespace-nowrap

            border-b
            border-light-gray
          
        
            
            ${F[e.align || "left"]}
            ${e.style || ""}
          `,
		children: e.value
	}, e.key))
});
//#endregion
export { A as Breadcrumbs, o as Button, s as Card, c as CardContent, l as CardFooter, u as CardImage, d as Cfooter, g as Cform, _ as Cheader, C as CheckBox, M as Ctable, v as Drawer, f as FooterBottom, p as FooterContact, m as FooterIcon, y as Icon, j as LandingLayout, a as Loader, x as Modal, b as NavBar, h as QuickLink, S as SearchBar, k as Section, w as Select, N as TableBody, P as TableCell, I as TableHead, L as TableRow, O as TextField };
