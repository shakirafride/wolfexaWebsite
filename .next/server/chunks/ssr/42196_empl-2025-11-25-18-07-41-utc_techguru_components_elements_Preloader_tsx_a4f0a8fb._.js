module.exports = [
"[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/Preloader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Preloader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Preloader() {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleLoad = ()=>setLoading(false);
        // Hide preloader when window is fully loaded
        if (document.readyState === "complete") {
            setLoading(false);
        } else {
            window.addEventListener("load", handleLoad);
            return ()=>window.removeEventListener("load", handleLoad);
        }
    }, []);
    if (!loading) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "loader js-preloader",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/Preloader.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/Preloader.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Wolfexa$2f$Wolfexa_Themes$2f$Envto$2f$NEXT__JS$2f$techguru$2d$technology$2d$it$2d$solutions$2d$next$2d$js$2d$templ$2d$2025$2d$11$2d$25$2d$18$2d$07$2d$41$2d$utc$2f$techguru$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/Preloader.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Wolfexa/Wolfexa_Themes/Envto/NEXT JS/techguru-technology-it-solutions-next-js-templ-2025-11-25-18-07-41-utc/techguru/components/elements/Preloader.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=42196_empl-2025-11-25-18-07-41-utc_techguru_components_elements_Preloader_tsx_a4f0a8fb._.js.map