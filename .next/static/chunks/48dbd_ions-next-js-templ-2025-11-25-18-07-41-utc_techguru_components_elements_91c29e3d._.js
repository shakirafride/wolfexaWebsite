(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/BackToTop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function BackToTop(param) {
    let { scroll } = param;
    _s();
    const [scrollProgress, setScrollProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleClick = (e)=>{
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BackToTop.useEffect": ()=>{
            const handleScroll = {
                "BackToTop.useEffect.handleScroll": ()=>{
                    const scrollTop = window.scrollY;
                    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const scrolled = scrollTop / docHeight * 100;
                    setScrollProgress(scrolled);
                }
            }["BackToTop.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "BackToTop.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["BackToTop.useEffect"];
        }
    }["BackToTop.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: scroll && scrollProgress > 10 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#top",
            "data-target": "html",
            className: "scroll-to-target scroll-to-top scroll-top scroll-to-target",
            onClick: handleClick,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "scroll-to-top__wrapper",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "scroll-to-top__inner",
                        style: {
                            width: "".concat(scrollProgress, "%")
                        }
                    }, void 0, false, {
                        fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/BackToTop.tsx",
                        lineNumber: 43,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/BackToTop.tsx",
                    lineNumber: 42,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "scroll-to-top__text",
                    children: "Go Back Top"
                }, void 0, false, {
                    fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/BackToTop.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/BackToTop.tsx",
            lineNumber: 36,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
_s(BackToTop, "mI/zHsdmTwVZEMJ2l0wkvaaiYnI=");
_c = BackToTop;
var _c;
__turbopack_context__.k.register(_c, "BackToTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/DataBg.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DataBg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function DataBg() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DataBg.useEffect": ()=>{
            const elements = document.querySelectorAll("[data-bg]");
            elements.forEach({
                "DataBg.useEffect": (el)=>{
                    const bg = el.getAttribute("data-bg");
                    if (bg) {
                        el.style.backgroundImage = "url(".concat(bg, ")");
                    }
                }
            }["DataBg.useEffect"]);
        }
    }["DataBg.useEffect"], []);
    return null; // no DOM needed
}
_s(DataBg, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = DataBg;
var _c;
__turbopack_context__.k.register(_c, "DataBg");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/Logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
function Logo(param) {
    let { className = "", width = 186, height = 36 } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: width,
            height: height,
            viewBox: "0 0 186 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "logoGradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "100%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "#00D4FF"
                                }, void 0, false, {
                                    fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/Logo.tsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "#8338EC"
                                }, void 0, false, {
                                    fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/Logo.tsx",
                                    lineNumber: 23,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/Logo.tsx",
                            lineNumber: 21,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "textGradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "#00D4FF"
                                }, void 0, false, {
                                    fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/Logo.tsx",
                                    lineNumber: 26,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "50%",
                                    stopColor: "#ffffff"
                                }, void 0, false, {
                                    fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/Logo.tsx",
                                    lineNumber: 27,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "#FF006E"
                                }, void 0, false, {
                                    fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/Logo.tsx",
                                    lineNumber: 28,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/Logo.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/Logo.tsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "18",
                            cy: "18",
                            r: "16",
                            fill: "url(#logoGradient)",
                            opacity: "0.2"
                        }, void 0, false, {
                            fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/Logo.tsx",
                            lineNumber: 35,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "18",
                            cy: "18",
                            r: "12",
                            fill: "none",
                            stroke: "url(#logoGradient)",
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/Logo.tsx",
                            lineNumber: 38,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 18 10 L 22 14 L 18 18 L 14 14 Z",
                            fill: "url(#logoGradient)"
                        }, void 0, false, {
                            fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/Logo.tsx",
                            lineNumber: 41,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 18 18 L 22 22 L 18 26 L 14 22 Z",
                            fill: "url(#logoGradient)",
                            opacity: "0.7"
                        }, void 0, false, {
                            fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/Logo.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "10",
                            cy: "18",
                            r: "1.5",
                            fill: "#00D4FF"
                        }, void 0, false, {
                            fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/Logo.tsx",
                            lineNumber: 52,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "26",
                            cy: "18",
                            r: "1.5",
                            fill: "#FF006E"
                        }, void 0, false, {
                            fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/Logo.tsx",
                            lineNumber: 53,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/Logo.tsx",
                    lineNumber: 33,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "42",
                    y: "24",
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "20",
                    fontWeight: "700",
                    fill: "url(#textGradient)",
                    letterSpacing: "0.5",
                    children: "Nexus"
                }, void 0, false, {
                    fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/Logo.tsx",
                    lineNumber: 57,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/Logo.tsx",
            lineNumber: 12,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/Logo.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
_c = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/AnimatedTitle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/node_modules/gsap/SplitText.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AnimatedTitle(param) {
    let { children, animationStyle = "style2" } = param;
    _s();
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedTitle.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            if (!titleRef.current) return;
            const quote = titleRef.current;
            // Create split
            const split = new __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"](quote, {
                type: "lines,words,chars",
                linesClass: "split-line"
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(quote, {
                perspective: 400
            });
            switch(animationStyle){
                case "style1":
                    __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(split.chars, {
                        opacity: 0,
                        y: "90%",
                        rotateX: "-40deg"
                    });
                    break;
                case "style2":
                    __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(split.chars, {
                        opacity: 0,
                        x: 50
                    });
                    break;
                case "style3":
                    __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(split.chars, {
                        opacity: 0
                    });
                    break;
            }
            // Animate on scroll
            const animation = __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(split.chars, {
                scrollTrigger: {
                    trigger: quote,
                    start: "top 90%"
                },
                x: 0,
                y: 0,
                rotateX: 0,
                opacity: 1,
                duration: 1,
                ease: "back.out(1.7)",
                stagger: 0.02
            });
            return ({
                "AnimatedTitle.useEffect": ()=>{
                    animation.kill();
                    split.revert();
                    __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach({
                        "AnimatedTitle.useEffect": (st)=>st.kill()
                    }["AnimatedTitle.useEffect"]);
                }
            })["AnimatedTitle.useEffect"];
        }
    }["AnimatedTitle.useEffect"], [
        animationStyle
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: titleRef,
        children: children
    }, void 0, false, {
        fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/AnimatedTitle.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(AnimatedTitle, "5158MNnKrLHubdR68HBro4P03NI=");
_c = AnimatedTitle;
var _c;
__turbopack_context__.k.register(_c, "AnimatedTitle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ContactForm() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setStatus("loading");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: ""
                });
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "contact-form-validated contact-one__form",
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-xl-6 col-lg-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "contact-one__input-title",
                                children: "Full Name"
                            }, void 0, false, {
                                fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "contact-one__input-box",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-one__input-icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "icon-user-1"
                                        }, void 0, false, {
                                            fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                                            lineNumber: 52,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "name",
                                        required: true,
                                        value: formData.name,
                                        onChange: handleChange,
                                        placeholder: "Thomas Alison"
                                    }, void 0, false, {
                                        fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-xl-6 col-lg-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "contact-one__input-title",
                                children: "Email Address"
                            }, void 0, false, {
                                fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "contact-one__input-box",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-one__input-icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "icon-email"
                                        }, void 0, false, {
                                            fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                                            lineNumber: 68,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        name: "email",
                                        required: true,
                                        value: formData.email,
                                        onChange: handleChange,
                                        placeholder: "thomas@domain.com"
                                    }, void 0, false, {
                                        fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-xl-6 col-lg-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "contact-one__input-title",
                                children: "Phone Number"
                            }, void 0, false, {
                                fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "contact-one__input-box",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-one__input-icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "icon-phone-call"
                                        }, void 0, false, {
                                            fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                                            lineNumber: 84,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "phone",
                                        required: true,
                                        value: formData.phone,
                                        onChange: handleChange,
                                        placeholder: "+12 (00) 123 4567 890"
                                    }, void 0, false, {
                                        fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-xl-6 col-lg-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "contact-one__input-title",
                                children: "Subject"
                            }, void 0, false, {
                                fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "contact-one__input-box",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-one__input-icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "icon-edit"
                                        }, void 0, false, {
                                            fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                                            lineNumber: 100,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "subject",
                                        required: true,
                                        value: formData.subject,
                                        onChange: handleChange,
                                        placeholder: "Subject"
                                    }, void 0, false, {
                                        fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                                        lineNumber: 102,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                lineNumber: 47,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-xl-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "contact-one__input-title",
                        children: "Inquiry about "
                    }, void 0, false, {
                        fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "contact-one__input-box text-message-box",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "contact-one__input-icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "icon-edit"
                                }, void 0, false, {
                                    fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                                    lineNumber: 117,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                name: "message",
                                required: true,
                                rows: 4,
                                value: formData.message,
                                onChange: handleChange,
                                placeholder: "Write your message"
                            }, void 0, false, {
                                fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "contact-one__btn-box",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "thm-btn",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Submit Now"
                                }, void 0, false, {
                                    fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                                    lineNumber: 129,
                                    columnNumber: 55
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "icon-right-arrow"
                                }, void 0, false, {
                                    fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                                    lineNumber: 130,
                                    columnNumber: 31
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                lineNumber: 113,
                columnNumber: 5
            }, this),
            status === "loading" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Sending..."
            }, void 0, false, {
                fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                lineNumber: 134,
                columnNumber: 30
            }, this),
            status === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Message sent successfully ✅"
            }, void 0, false, {
                fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                lineNumber: 135,
                columnNumber: 30
            }, this),
            status === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Something went wrong ❌"
            }, void 0, false, {
                fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
                lineNumber: 136,
                columnNumber: 28
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/ContactForm.tsx",
        lineNumber: 46,
        columnNumber: 3
    }, this);
}
_s(ContactForm, "dFC8sV+aJSdnvtiBUODIVpZZjgI=");
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/VideoPopup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function VideoModal() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Wait until the component is mounted to use portal
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoModal.useEffect": ()=>{
            setMounted(true);
        }
    }["VideoModal.useEffect"], []);
    // Disable background scroll
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoModal.useEffect": ()=>{
            document.body.style.overflow = isOpen ? "hidden" : "";
        }
    }["VideoModal.useEffect"], [
        isOpen
    ]);
    // Popup content (renders outside normal layout)
    const popupContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "video-popup-section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "video-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                    src: "https://www.youtube.com/embed/gW22hVe5_fI",
                    title: "my video",
                    allow: "autoplay; encrypted-media",
                    allowFullScreen: true
                }, void 0, false, {
                    fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/VideoPopup.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setIsOpen(false),
                    className: "close-btn",
                    "aria-label": "Close Video",
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/VideoPopup.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/VideoPopup.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/VideoPopup.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setIsOpen(true),
                className: "play-btn",
                "aria-label": "Play Video",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "fa fa-play"
                    }, void 0, false, {
                        fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/VideoPopup.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "ripple"
                    }, void 0, false, {
                        fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/VideoPopup.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/VideoPopup.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            mounted && isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(popupContent, document.body)
        ]
    }, void 0, true);
}
_s(VideoModal, "TbdLAm8ZuM5pV/wwYOCzse9RTyg=");
_c = VideoModal;
var _c;
__turbopack_context__.k.register(_c, "VideoModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=48dbd_ions-next-js-templ-2025-11-25-18-07-41-utc_techguru_components_elements_91c29e3d._.js.map