"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NavBar: function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Popover_headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Popover!=!@headlessui/react */ \"(app-pages-browser)/./node_modules/@headlessui/react/dist/components/popover/popover.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* __next_internal_client_entry_do_not_use__ NavBar auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst sections = [\n    {\n        id: \"kim-jestesmy\",\n        title: \"Czym jest TASK?\"\n    },\n    {\n        id: \"cel\",\n        title: \"Dla kogo?\"\n    },\n    {\n        id: \"cel\",\n        title: \"Jak to zrealizujemy?\"\n    },\n    {\n        id: \"table-of-contents\",\n        title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"hidden lg:inline\",\n                    children: \"Table of contents\"\n                }, void 0, false, {\n                    fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"lg:hidden\",\n                    children: \"Contents\"\n                }, void 0, false, {\n                    fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true)\n    },\n    // { id: 'screencasts', title: 'Screencasts' },\n    // { id: 'resources', title: 'Resources' },\n    {\n        id: \"pricing\",\n        title: \"Pricing\"\n    },\n    {\n        id: \"author\",\n        title: \"Author\"\n    }\n];\nfunction MenuIcon(param) {\n    let { open, ...props } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        \"aria-hidden\": \"true\",\n        fill: \"none\",\n        strokeWidth: \"2\",\n        strokeLinecap: \"round\",\n        strokeLinejoin: \"round\",\n        viewBox: \"0 0 24 24\",\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n            d: open ? \"M17 7 7 17M7 7l10 10\" : \"m15 16-3 3-3-3M15 8l-3-3-3 3\"\n        }, void 0, false, {\n            fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_c = MenuIcon;\nfunction NavBar() {\n    _s();\n    let navBarRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    let [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    let mobileActiveIndex = activeIndex === null ? 0 : activeIndex;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function updateActiveIndex() {\n            if (!navBarRef.current) {\n                return;\n            }\n            let newActiveIndex = null;\n            let elements = sections.map((param)=>{\n                let { id } = param;\n                return document.getElementById(id);\n            }).filter((el)=>el !== null);\n            let bodyRect = document.body.getBoundingClientRect();\n            let offset = bodyRect.top + navBarRef.current.offsetHeight + 1;\n            if (window.scrollY >= Math.floor(bodyRect.height) - window.innerHeight) {\n                setActiveIndex(sections.length - 1);\n                return;\n            }\n            for(let index = 0; index < elements.length; index++){\n                if (window.scrollY >= elements[index].getBoundingClientRect().top - offset) {\n                    newActiveIndex = index;\n                } else {\n                    break;\n                }\n            }\n            setActiveIndex(newActiveIndex);\n        }\n        updateActiveIndex();\n        window.addEventListener(\"resize\", updateActiveIndex);\n        window.addEventListener(\"scroll\", updateActiveIndex, {\n            passive: true\n        });\n        return ()=>{\n            window.removeEventListener(\"resize\", updateActiveIndex);\n            window.removeEventListener(\"scroll\", updateActiveIndex);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: navBarRef,\n        className: \"sticky top-0 z-50\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Popover_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover, {\n                className: \"sm:hidden\",\n                children: (param)=>{\n                    let { open } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"relative flex items-center px-4 py-3\", !open && \"bg-white/95 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur\"),\n                                children: [\n                                    !open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                \"aria-hidden\": \"true\",\n                                                className: \"font-mono text-sm text-blue-600\",\n                                                children: (mobileActiveIndex + 1).toString().padStart(2, \"0\")\n                                            }, void 0, false, {\n                                                fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                                                lineNumber: 120,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"ml-4 text-base font-medium text-slate-900\",\n                                                children: sections[mobileActiveIndex].title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                                                lineNumber: 126,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Popover_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Button, {\n                                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"-mr-1 ml-auto flex h-8 w-8 items-center justify-center\", open && \"relative z-10\"),\n                                        \"aria-label\": \"Toggle navigation menu\",\n                                        children: [\n                                            !open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"absolute inset-0\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                                                    lineNumber: 141,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuIcon, {\n                                                open: open,\n                                                className: \"h-6 w-6 stroke-slate-700\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                                                lineNumber: 144,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                                        lineNumber: 131,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Popover_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Panel, {\n                                className: \"absolute inset-x-0 top-0 bg-white/95 py-3.5 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur\",\n                                children: sections.map((section, sectionIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Popover_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Button, {\n                                        as: \"a\",\n                                        href: `#${section.id}`,\n                                        className: \"flex items-center px-4 py-1.5\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                \"aria-hidden\": \"true\",\n                                                className: \"font-mono text-sm text-blue-600\",\n                                                children: (sectionIndex + 1).toString().padStart(2, \"0\")\n                                            }, void 0, false, {\n                                                fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                                                lineNumber: 155,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"ml-4 text-base font-medium text-slate-900\",\n                                                children: section.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                                                lineNumber: 161,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, section.id, true, {\n                                        fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                                        lineNumber: 149,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                                lineNumber: 147,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute inset-x-0 bottom-full z-10 h-4 bg-white\"\n                            }, void 0, false, {\n                                fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                                lineNumber: 167,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden sm:flex sm:h-32 sm:justify-center sm:border-b sm:border-slate-200 sm:bg-white/95 sm:[@supports(backdrop-filter:blur(0))]:bg-white/80 sm:[@supports(backdrop-filter:blur(0))]:backdrop-blur\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                    role: \"list\",\n                    className: \"mb-[-2px] grid auto-cols-[minmax(0,15rem)] grid-flow-col text-base font-medium text-slate-900 [counter-reset:section]\",\n                    children: sections.map((section, sectionIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex [counter-increment:section]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: `#${section.id}`,\n                                className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"flex w-full flex-col items-center justify-center border-b-2 before:mb-2 before:font-mono before:text-sm before:content-[counter(section,decimal-leading-zero)]\", sectionIndex === activeIndex ? \"border-blue-600 bg-blue-50 text-blue-600 before:text-blue-600\" : \"border-transparent before:text-slate-500 hover:bg-blue-50/40 hover:before:text-slate-900\"),\n                                children: section.title\n                            }, void 0, false, {\n                                fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                                lineNumber: 178,\n                                columnNumber: 15\n                            }, this)\n                        }, section.id, false, {\n                            fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                            lineNumber: 177,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                    lineNumber: 172,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                lineNumber: 171,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, this);\n}\n_s(NavBar, \"LxQEDBAFeMkqTfTcvhz7hHNoDws=\");\n_c1 = NavBar;\nvar _c, _c1;\n$RefreshReg$(_c, \"MenuIcon\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdkJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDUjtBQUNwQjtBQUV2QixNQUFNSyxXQUFXO0lBQ2Y7UUFDRUMsSUFBSTtRQUNKQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRCxJQUFJO1FBQ0pDLE9BQU87SUFDVDtJQUNBO1FBQ0VELElBQUk7UUFDSkMsT0FBTztJQUNUO0lBQ0E7UUFDRUQsSUFBSTtRQUNKQyxxQkFDRTs7OEJBQ0UsOERBQUNDO29CQUFLQyxXQUFVOzhCQUFtQjs7Ozs7OzhCQUNuQyw4REFBQ0Q7b0JBQUtDLFdBQVU7OEJBQVk7Ozs7Ozs7O0lBR2xDO0lBQ0EsK0NBQStDO0lBQy9DLDJDQUEyQztJQUMzQztRQUFFSCxJQUFJO1FBQVdDLE9BQU87SUFBVTtJQUNsQztRQUFFRCxJQUFJO1FBQVVDLE9BQU87SUFBUztDQUNqQztBQUVELFNBQVNHLFNBQVMsS0FLakI7UUFMaUIsRUFDaEJDLElBQUksRUFDSixHQUFHQyxPQUdKLEdBTGlCO0lBTWhCLHFCQUNFLDhEQUFDQztRQUNDQyxlQUFZO1FBQ1pDLE1BQUs7UUFDTEMsYUFBWTtRQUNaQyxlQUFjO1FBQ2RDLGdCQUFlO1FBQ2ZDLFNBQVE7UUFDUCxHQUFHUCxLQUFLO2tCQUVULDRFQUFDUTtZQUNDQyxHQUFHVixPQUFPLHlCQUF5Qjs7Ozs7Ozs7Ozs7QUFJM0M7S0FyQlNEO0FBdUJGLFNBQVNZOztJQUNkLElBQUlDLFlBQVl0Qiw2Q0FBTUEsQ0FBMEI7SUFDaEQsSUFBSSxDQUFDdUIsYUFBYUMsZUFBZSxHQUFHdkIsK0NBQVFBLENBQWdCO0lBQzVELElBQUl3QixvQkFBb0JGLGdCQUFnQixPQUFPLElBQUlBO0lBRW5EeEIsZ0RBQVNBLENBQUM7UUFDUixTQUFTMkI7WUFDUCxJQUFJLENBQUNKLFVBQVVLLE9BQU8sRUFBRTtnQkFDdEI7WUFDRjtZQUVBLElBQUlDLGlCQUFpQjtZQUNyQixJQUFJQyxXQUFXekIsU0FDWjBCLEdBQUcsQ0FBQztvQkFBQyxFQUFFekIsRUFBRSxFQUFFO3VCQUFLMEIsU0FBU0MsY0FBYyxDQUFDM0I7ZUFDeEM0QixNQUFNLENBQUMsQ0FBQ0MsS0FBMEJBLE9BQU87WUFDNUMsSUFBSUMsV0FBV0osU0FBU0ssSUFBSSxDQUFDQyxxQkFBcUI7WUFDbEQsSUFBSUMsU0FBU0gsU0FBU0ksR0FBRyxHQUFHakIsVUFBVUssT0FBTyxDQUFDYSxZQUFZLEdBQUc7WUFFN0QsSUFBSUMsT0FBT0MsT0FBTyxJQUFJQyxLQUFLQyxLQUFLLENBQUNULFNBQVNVLE1BQU0sSUFBSUosT0FBT0ssV0FBVyxFQUFFO2dCQUN0RXRCLGVBQWVwQixTQUFTMkMsTUFBTSxHQUFHO2dCQUNqQztZQUNGO1lBRUEsSUFBSyxJQUFJQyxRQUFRLEdBQUdBLFFBQVFuQixTQUFTa0IsTUFBTSxFQUFFQyxRQUFTO2dCQUNwRCxJQUNFUCxPQUFPQyxPQUFPLElBQ2RiLFFBQVEsQ0FBQ21CLE1BQU0sQ0FBQ1gscUJBQXFCLEdBQUdFLEdBQUcsR0FBR0QsUUFDOUM7b0JBQ0FWLGlCQUFpQm9CO2dCQUNuQixPQUFPO29CQUNMO2dCQUNGO1lBQ0Y7WUFFQXhCLGVBQWVJO1FBQ2pCO1FBRUFGO1FBRUFlLE9BQU9RLGdCQUFnQixDQUFDLFVBQVV2QjtRQUNsQ2UsT0FBT1EsZ0JBQWdCLENBQUMsVUFBVXZCLG1CQUFtQjtZQUFFd0IsU0FBUztRQUFLO1FBRXJFLE9BQU87WUFDTFQsT0FBT1UsbUJBQW1CLENBQUMsVUFBVXpCO1lBQ3JDZSxPQUFPVSxtQkFBbUIsQ0FBQyxVQUFVekI7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQzBCO1FBQUlDLEtBQUsvQjtRQUFXZCxXQUFVOzswQkFDN0IsOERBQUNOLG9GQUFPQTtnQkFBQ00sV0FBVTswQkFDaEI7d0JBQUMsRUFBRUUsSUFBSSxFQUFFO3lDQUNSOzswQ0FDRSw4REFBQzBDO2dDQUNDNUMsV0FBV0wsZ0RBQUlBLENBQ2Isd0NBQ0EsQ0FBQ08sUUFDQzs7b0NBR0gsQ0FBQ0Esc0JBQ0E7OzBEQUNFLDhEQUFDSDtnREFDQ00sZUFBWTtnREFDWkwsV0FBVTswREFFVCxDQUFDaUIsb0JBQW9CLEdBQUc2QixRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHOzs7Ozs7MERBRWxELDhEQUFDaEQ7Z0RBQUtDLFdBQVU7MERBQ2JKLFFBQVEsQ0FBQ3FCLGtCQUFrQixDQUFDbkIsS0FBSzs7Ozs7Ozs7a0RBSXhDLDhEQUFDSixvRkFBT0EsQ0FBQ3NELE1BQU07d0NBQ2JoRCxXQUFXTCxnREFBSUEsQ0FDYiwwREFDQU8sUUFBUTt3Q0FFVitDLGNBQVc7OzRDQUVWLENBQUMvQyxzQkFDQTswREFFRSw0RUFBQ0g7b0RBQUtDLFdBQVU7Ozs7Ozs7MERBR3BCLDhEQUFDQztnREFBU0MsTUFBTUE7Z0RBQU1GLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHcEMsOERBQUNOLG9GQUFPQSxDQUFDd0QsS0FBSztnQ0FBQ2xELFdBQVU7MENBQ3RCSixTQUFTMEIsR0FBRyxDQUFDLENBQUM2QixTQUFTQyw2QkFDdEIsOERBQUMxRCxvRkFBT0EsQ0FBQ3NELE1BQU07d0NBQ2JLLElBQUc7d0NBRUhDLE1BQU0sQ0FBQyxDQUFDLEVBQUVILFFBQVF0RCxFQUFFLENBQUMsQ0FBQzt3Q0FDdEJHLFdBQVU7OzBEQUVWLDhEQUFDRDtnREFDQ00sZUFBWTtnREFDWkwsV0FBVTswREFFVCxDQUFDb0QsZUFBZSxHQUFHTixRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHOzs7Ozs7MERBRTdDLDhEQUFDaEQ7Z0RBQUtDLFdBQVU7MERBQ2JtRCxRQUFRckQsS0FBSzs7Ozs7Ozt1Q0FYWHFELFFBQVF0RCxFQUFFOzs7Ozs7Ozs7OzBDQWdCckIsOERBQUMrQztnQ0FBSTVDLFdBQVU7Ozs7Ozs7Ozs7Ozs7OzBCQUlyQiw4REFBQzRDO2dCQUFJNUMsV0FBVTswQkFDYiw0RUFBQ3VEO29CQUNDQyxNQUFLO29CQUNMeEQsV0FBVTs4QkFFVEosU0FBUzBCLEdBQUcsQ0FBQyxDQUFDNkIsU0FBU0MsNkJBQ3RCLDhEQUFDSzs0QkFBb0J6RCxXQUFVO3NDQUM3Qiw0RUFBQzBEO2dDQUNDSixNQUFNLENBQUMsQ0FBQyxFQUFFSCxRQUFRdEQsRUFBRSxDQUFDLENBQUM7Z0NBQ3RCRyxXQUFXTCxnREFBSUEsQ0FDYixrS0FDQXlELGlCQUFpQnJDLGNBQ2Isa0VBQ0E7MENBR0xvQyxRQUFRckQsS0FBSzs7Ozs7OzJCQVZUcUQsUUFBUXRELEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCL0I7R0F6SWdCZ0I7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeD9kOWVhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBvcG92ZXIgfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5cbmNvbnN0IHNlY3Rpb25zID0gW1xuICB7XG4gICAgaWQ6ICdraW0tamVzdGVzbXknLFxuICAgIHRpdGxlOiAnQ3p5bSBqZXN0IFRBU0s/JyBcbiAgfSxcbiAge1xuICAgIGlkOiAnY2VsJyxcbiAgICB0aXRsZTogJ0RsYSBrb2dvPycgXG4gIH0sXG4gIHtcbiAgICBpZDogJ2NlbCcsXG4gICAgdGl0bGU6ICdKYWsgdG8genJlYWxpenVqZW15PycgXG4gIH0sXG4gIHtcbiAgICBpZDogJ3RhYmxlLW9mLWNvbnRlbnRzJyxcbiAgICB0aXRsZTogKFxuICAgICAgPD5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmlubGluZVwiPlRhYmxlIG9mIGNvbnRlbnRzPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZzpoaWRkZW5cIj5Db250ZW50czwvc3Bhbj5cbiAgICAgIDwvPlxuICAgICksXG4gIH0sXG4gIC8vIHsgaWQ6ICdzY3JlZW5jYXN0cycsIHRpdGxlOiAnU2NyZWVuY2FzdHMnIH0sXG4gIC8vIHsgaWQ6ICdyZXNvdXJjZXMnLCB0aXRsZTogJ1Jlc291cmNlcycgfSxcbiAgeyBpZDogJ3ByaWNpbmcnLCB0aXRsZTogJ1ByaWNpbmcnIH0sXG4gIHsgaWQ6ICdhdXRob3InLCB0aXRsZTogJ0F1dGhvcicgfSxcbl1cblxuZnVuY3Rpb24gTWVudUljb24oe1xuICBvcGVuLFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPCdzdmcnPiAmIHtcbiAgb3BlbjogYm9vbGVhblxufSkge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD17b3BlbiA/ICdNMTcgNyA3IDE3TTcgN2wxMCAxMCcgOiAnbTE1IDE2LTMgMy0zLTNNMTUgOGwtMy0zLTMgMyd9XG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOYXZCYXIoKSB7XG4gIGxldCBuYXZCYXJSZWYgPSB1c2VSZWY8UmVhY3QuRWxlbWVudFJlZjwnZGl2Jz4+KG51bGwpXG4gIGxldCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpXG4gIGxldCBtb2JpbGVBY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4ID09PSBudWxsID8gMCA6IGFjdGl2ZUluZGV4XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiB1cGRhdGVBY3RpdmVJbmRleCgpIHtcbiAgICAgIGlmICghbmF2QmFyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBuZXdBY3RpdmVJbmRleCA9IG51bGxcbiAgICAgIGxldCBlbGVtZW50cyA9IHNlY3Rpb25zXG4gICAgICAgIC5tYXAoKHsgaWQgfSkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKVxuICAgICAgICAuZmlsdGVyKChlbCk6IGVsIGlzIEhUTUxFbGVtZW50ID0+IGVsICE9PSBudWxsKVxuICAgICAgbGV0IGJvZHlSZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgbGV0IG9mZnNldCA9IGJvZHlSZWN0LnRvcCArIG5hdkJhclJlZi5jdXJyZW50Lm9mZnNldEhlaWdodCArIDFcblxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID49IE1hdGguZmxvb3IoYm9keVJlY3QuaGVpZ2h0KSAtIHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgICBzZXRBY3RpdmVJbmRleChzZWN0aW9ucy5sZW5ndGggLSAxKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgd2luZG93LnNjcm9sbFkgPj1cbiAgICAgICAgICBlbGVtZW50c1tpbmRleF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gb2Zmc2V0XG4gICAgICAgICkge1xuICAgICAgICAgIG5ld0FjdGl2ZUluZGV4ID0gaW5kZXhcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNldEFjdGl2ZUluZGV4KG5ld0FjdGl2ZUluZGV4KVxuICAgIH1cblxuICAgIHVwZGF0ZUFjdGl2ZUluZGV4KClcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVBY3RpdmVJbmRleClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlQWN0aXZlSW5kZXgsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVBY3RpdmVJbmRleClcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGVBY3RpdmVJbmRleClcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiByZWY9e25hdkJhclJlZn0gY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIHotNTBcIj5cbiAgICAgIDxQb3BvdmVyIGNsYXNzTmFtZT1cInNtOmhpZGRlblwiPlxuICAgICAgICB7KHsgb3BlbiB9KSA9PiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAgICdyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTMnLFxuICAgICAgICAgICAgICAgICFvcGVuICYmXG4gICAgICAgICAgICAgICAgICAnYmctd2hpdGUvOTUgc2hhZG93LXNtIFtAc3VwcG9ydHMoYmFja2Ryb3AtZmlsdGVyOmJsdXIoMCkpXTpiZy13aGl0ZS84MCBbQHN1cHBvcnRzKGJhY2tkcm9wLWZpbHRlcjpibHVyKDApKV06YmFja2Ryb3AtYmx1cicsXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHshb3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXNtIHRleHQtYmx1ZS02MDBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7KG1vYmlsZUFjdGl2ZUluZGV4ICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtNCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge3NlY3Rpb25zW21vYmlsZUFjdGl2ZUluZGV4XS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPFBvcG92ZXIuQnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAgICAgJy1tci0xIG1sLWF1dG8gZmxleCBoLTggdy04IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcicsXG4gICAgICAgICAgICAgICAgICBvcGVuICYmICdyZWxhdGl2ZSB6LTEwJyxcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvbiBtZW51XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHshb3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICB7LyogSW5jcmVhc2UgaGl0IGFyZWEgKi99XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTBcIiAvPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8TWVudUljb24gb3Blbj17b3Blbn0gY2xhc3NOYW1lPVwiaC02IHctNiBzdHJva2Utc2xhdGUtNzAwXCIgLz5cbiAgICAgICAgICAgICAgPC9Qb3BvdmVyLkJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFBvcG92ZXIuUGFuZWwgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteC0wIHRvcC0wIGJnLXdoaXRlLzk1IHB5LTMuNSBzaGFkb3ctc20gW0BzdXBwb3J0cyhiYWNrZHJvcC1maWx0ZXI6Ymx1cigwKSldOmJnLXdoaXRlLzgwIFtAc3VwcG9ydHMoYmFja2Ryb3AtZmlsdGVyOmJsdXIoMCkpXTpiYWNrZHJvcC1ibHVyXCI+XG4gICAgICAgICAgICAgIHtzZWN0aW9ucy5tYXAoKHNlY3Rpb24sIHNlY3Rpb25JbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxQb3BvdmVyLkJ1dHRvblxuICAgICAgICAgICAgICAgICAgYXM9XCJhXCJcbiAgICAgICAgICAgICAgICAgIGtleT17c2VjdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AjJHtzZWN0aW9uLmlkfWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTEuNVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtc20gdGV4dC1ibHVlLTYwMFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsoc2VjdGlvbkluZGV4ICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtNCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge3NlY3Rpb24udGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyLkJ1dHRvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1BvcG92ZXIuUGFuZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXgtMCBib3R0b20tZnVsbCB6LTEwIGgtNCBiZy13aGl0ZVwiIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L1BvcG92ZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBzbTpmbGV4IHNtOmgtMzIgc206anVzdGlmeS1jZW50ZXIgc206Ym9yZGVyLWIgc206Ym9yZGVyLXNsYXRlLTIwMCBzbTpiZy13aGl0ZS85NSBzbTpbQHN1cHBvcnRzKGJhY2tkcm9wLWZpbHRlcjpibHVyKDApKV06Ymctd2hpdGUvODAgc206W0BzdXBwb3J0cyhiYWNrZHJvcC1maWx0ZXI6Ymx1cigwKSldOmJhY2tkcm9wLWJsdXJcIj5cbiAgICAgICAgPG9sXG4gICAgICAgICAgcm9sZT1cImxpc3RcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLVstMnB4XSBncmlkIGF1dG8tY29scy1bbWlubWF4KDAsMTVyZW0pXSBncmlkLWZsb3ctY29sIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTkwMCBbY291bnRlci1yZXNldDpzZWN0aW9uXVwiXG4gICAgICAgID5cbiAgICAgICAgICB7c2VjdGlvbnMubWFwKChzZWN0aW9uLCBzZWN0aW9uSW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3NlY3Rpb24uaWR9IGNsYXNzTmFtZT1cImZsZXggW2NvdW50ZXItaW5jcmVtZW50OnNlY3Rpb25dXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17YCMke3NlY3Rpb24uaWR9YH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICAgICAnZmxleCB3LWZ1bGwgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJvcmRlci1iLTIgYmVmb3JlOm1iLTIgYmVmb3JlOmZvbnQtbW9ubyBiZWZvcmU6dGV4dC1zbSBiZWZvcmU6Y29udGVudC1bY291bnRlcihzZWN0aW9uLGRlY2ltYWwtbGVhZGluZy16ZXJvKV0nLFxuICAgICAgICAgICAgICAgICAgc2VjdGlvbkluZGV4ID09PSBhY3RpdmVJbmRleFxuICAgICAgICAgICAgICAgICAgICA/ICdib3JkZXItYmx1ZS02MDAgYmctYmx1ZS01MCB0ZXh0LWJsdWUtNjAwIGJlZm9yZTp0ZXh0LWJsdWUtNjAwJ1xuICAgICAgICAgICAgICAgICAgICA6ICdib3JkZXItdHJhbnNwYXJlbnQgYmVmb3JlOnRleHQtc2xhdGUtNTAwIGhvdmVyOmJnLWJsdWUtNTAvNDAgaG92ZXI6YmVmb3JlOnRleHQtc2xhdGUtOTAwJyxcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3NlY3Rpb24udGl0bGV9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvb2w+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiUG9wb3ZlciIsImNsc3giLCJzZWN0aW9ucyIsImlkIiwidGl0bGUiLCJzcGFuIiwiY2xhc3NOYW1lIiwiTWVudUljb24iLCJvcGVuIiwicHJvcHMiLCJzdmciLCJhcmlhLWhpZGRlbiIsImZpbGwiLCJzdHJva2VXaWR0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInZpZXdCb3giLCJwYXRoIiwiZCIsIk5hdkJhciIsIm5hdkJhclJlZiIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJtb2JpbGVBY3RpdmVJbmRleCIsInVwZGF0ZUFjdGl2ZUluZGV4IiwiY3VycmVudCIsIm5ld0FjdGl2ZUluZGV4IiwiZWxlbWVudHMiLCJtYXAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZmlsdGVyIiwiZWwiLCJib2R5UmVjdCIsImJvZHkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJvZmZzZXQiLCJ0b3AiLCJvZmZzZXRIZWlnaHQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiTWF0aCIsImZsb29yIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJsZW5ndGgiLCJpbmRleCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsInJlZiIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJCdXR0b24iLCJhcmlhLWxhYmVsIiwiUGFuZWwiLCJzZWN0aW9uIiwic2VjdGlvbkluZGV4IiwiYXMiLCJocmVmIiwib2wiLCJyb2xlIiwibGkiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/NavBar.tsx\n"));

/***/ })

});