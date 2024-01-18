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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NavBar: function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Popover_headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Popover!=!@headlessui/react */ \"(app-pages-browser)/./node_modules/@headlessui/react/dist/components/popover/popover.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* __next_internal_client_entry_do_not_use__ NavBar auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst sections = [\n    {\n        id: \"introduction\",\n        title: \"Po co?\"\n    },\n    {\n        id: \"dla-kogo\",\n        title: \"Dla kogo?\"\n    },\n    {\n        id: \"jak\",\n        title: \"Jak?\"\n    },\n    {\n        id: \"kto\",\n        title: \"Kim jesteśmy?\"\n    },\n    {\n        id: \"inne\",\n        title: \"Dokąd zmierzamy?\"\n    }\n];\nfunction MenuIcon(param) {\n    let { open, ...props } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        \"aria-hidden\": \"true\",\n        fill: \"none\",\n        strokeWidth: \"2\",\n        strokeLinecap: \"round\",\n        strokeLinejoin: \"round\",\n        viewBox: \"0 0 24 24\",\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n            d: open ? \"M17 7 7 17M7 7l10 10\" : \"m15 16-3 3-3-3M15 8l-3-3-3 3\"\n        }, void 0, false, {\n            fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_c = MenuIcon;\nfunction NavBar() {\n    _s();\n    let navBarRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    let [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    let mobileActiveIndex = activeIndex === null ? 0 : activeIndex;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function updateActiveIndex() {\n            if (!navBarRef.current) {\n                return;\n            }\n            let newActiveIndex = null;\n            let elements = sections.map((param)=>{\n                let { id } = param;\n                return document.getElementById(id);\n            }).filter((el)=>el !== null);\n            let bodyRect = document.body.getBoundingClientRect();\n            let offset = bodyRect.top + navBarRef.current.offsetHeight + 1;\n            if (window.scrollY >= Math.floor(bodyRect.height) - window.innerHeight) {\n                setActiveIndex(sections.length - 1);\n                return;\n            }\n            for(let index = 0; index < elements.length; index++){\n                if (window.scrollY >= elements[index].getBoundingClientRect().top - offset) {\n                    newActiveIndex = index;\n                } else {\n                    break;\n                }\n            }\n            setActiveIndex(newActiveIndex);\n        }\n        updateActiveIndex();\n        window.addEventListener(\"resize\", updateActiveIndex);\n        window.addEventListener(\"scroll\", updateActiveIndex, {\n            passive: true\n        });\n        return ()=>{\n            window.removeEventListener(\"resize\", updateActiveIndex);\n            window.removeEventListener(\"scroll\", updateActiveIndex);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: navBarRef,\n        className: \"sticky top-0 z-50\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Popover_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover, {\n                className: \"sm:hidden\",\n                children: (param)=>{\n                    let { open } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"relative flex items-center px-4 py-3\", !open && \"bg-white/95 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur\"),\n                                children: [\n                                    !open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                \"aria-hidden\": \"true\",\n                                                className: \"font-mono text-sm text-puder\",\n                                                children: (mobileActiveIndex + 1).toString().padStart(2, \"0\")\n                                            }, void 0, false, {\n                                                fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                                                lineNumber: 115,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"ml-4 text-base font-medium text-slate-900\",\n                                                children: sections[mobileActiveIndex].title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                                                lineNumber: 121,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Popover_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Button, {\n                                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"-mr-1 ml-auto flex h-8 w-8 items-center justify-center\", open && \"relative z-10\"),\n                                        \"aria-label\": \"Toggle navigation menu\",\n                                        children: [\n                                            !open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"absolute inset-0\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                                                    lineNumber: 136,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuIcon, {\n                                                open: open,\n                                                className: \"h-6 w-6 stroke-puder\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                                                lineNumber: 139,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Popover_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Panel, {\n                                className: \"absolute inset-x-0 top-0 bg-white/95 py-3.5 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur\",\n                                children: sections.map((section, sectionIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Popover_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Button, {\n                                        as: \"a\",\n                                        href: `#${section.id}`,\n                                        className: \"flex items-center px-4 py-1.5\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                \"aria-hidden\": \"true\",\n                                                className: \"font-mono text-sm text-puder\",\n                                                children: (sectionIndex + 1).toString().padStart(2, \"0\")\n                                            }, void 0, false, {\n                                                fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                                                lineNumber: 150,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"ml-4 text-base font-medium text-slate-900\",\n                                                children: section.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                                                lineNumber: 156,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, section.id, true, {\n                                        fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                                        lineNumber: 144,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                                lineNumber: 142,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute inset-x-0 bottom-full z-10 h-4 bg-white\"\n                            }, void 0, false, {\n                                fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                                lineNumber: 162,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden sm:flex sm:h-32 sm:justify-center sm:border-b sm:border-slate-200 sm:bg-white/95 sm:[@supports(backdrop-filter:blur(0))]:bg-white/80 sm:[@supports(backdrop-filter:blur(0))]:backdrop-blur\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                    role: \"list\",\n                    className: \"mb-[-2px] grid auto-cols-[minmax(0,15rem)] grid-flow-col text-base font-medium text-slate-900 [counter-reset:section]\",\n                    children: sections.map((section, sectionIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex [counter-increment:section]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: `#${section.id}`,\n                                className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"flex w-full flex-col items-center justify-center border-b-2 before:mb-2 before:font-mono before:text-sm before:content-[counter(section,decimal-leading-zero)]\", sectionIndex === activeIndex ? \"border-puder bg-puder-light text-puder before:text-puder\" : \"border-transparent before:text-slate-500 hover:bg-puder-light hover:before:text-slate-900\"),\n                                children: section.title\n                            }, void 0, false, {\n                                fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                                lineNumber: 173,\n                                columnNumber: 15\n                            }, this)\n                        }, section.id, false, {\n                            fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                            lineNumber: 172,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                    lineNumber: 167,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n                lineNumber: 166,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/xehivs/dev/task.pwr.edu.pl/src/components/NavBar.tsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, this);\n}\n_s(NavBar, \"LxQEDBAFeMkqTfTcvhz7hHNoDws=\");\n_c1 = NavBar;\nvar _c, _c1;\n$RefreshReg$(_c, \"MenuIcon\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdkJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDUjtBQUNwQjtBQUV2QixNQUFNSyxXQUFXO0lBQ2Y7UUFDRUMsSUFBSTtRQUNKQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRCxJQUFJO1FBQ0pDLE9BQU87SUFDVDtJQUNBO1FBQ0VELElBQUk7UUFDSkMsT0FBTztJQUNUO0lBQ0E7UUFDRUQsSUFBSTtRQUNKQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRCxJQUFJO1FBQ0pDLE9BQU87SUFDVDtDQUNEO0FBRUQsU0FBU0MsU0FBUyxLQUtqQjtRQUxpQixFQUNoQkMsSUFBSSxFQUNKLEdBQUdDLE9BR0osR0FMaUI7SUFNaEIscUJBQ0UsOERBQUNDO1FBQ0NDLGVBQVk7UUFDWkMsTUFBSztRQUNMQyxhQUFZO1FBQ1pDLGVBQWM7UUFDZEMsZ0JBQWU7UUFDZkMsU0FBUTtRQUNQLEdBQUdQLEtBQUs7a0JBRVQsNEVBQUNRO1lBQ0NDLEdBQUdWLE9BQU8seUJBQXlCOzs7Ozs7Ozs7OztBQUkzQztLQXJCU0Q7QUF1QkYsU0FBU1k7O0lBQ2QsSUFBSUMsWUFBWXBCLDZDQUFNQSxDQUEwQjtJQUNoRCxJQUFJLENBQUNxQixhQUFhQyxlQUFlLEdBQUdyQiwrQ0FBUUEsQ0FBZ0I7SUFDNUQsSUFBSXNCLG9CQUFvQkYsZ0JBQWdCLE9BQU8sSUFBSUE7SUFFbkR0QixnREFBU0EsQ0FBQztRQUNSLFNBQVN5QjtZQUNQLElBQUksQ0FBQ0osVUFBVUssT0FBTyxFQUFFO2dCQUN0QjtZQUNGO1lBRUEsSUFBSUMsaUJBQWlCO1lBQ3JCLElBQUlDLFdBQVd2QixTQUNad0IsR0FBRyxDQUFDO29CQUFDLEVBQUV2QixFQUFFLEVBQUU7dUJBQUt3QixTQUFTQyxjQUFjLENBQUN6QjtlQUN4QzBCLE1BQU0sQ0FBQyxDQUFDQyxLQUEwQkEsT0FBTztZQUM1QyxJQUFJQyxXQUFXSixTQUFTSyxJQUFJLENBQUNDLHFC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MENBR0xzQyxRQUFRckQsS0FBSzs7Ozs7OzJCQVZUcUQsUUFBUXRELEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCL0I7R0F6SWdCYztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZCYXIudHN4P2Q5ZWEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUG9wb3ZlciB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcblxuY29uc3Qgc2VjdGlvbnMgPSBbXG4gIHtcbiAgICBpZDogJ2ludHJvZHVjdGlvbicsXG4gICAgdGl0bGU6ICdQbyBjbz8nIFxuICB9LFxuICB7XG4gICAgaWQ6ICdkbGEta29nbycsXG4gICAgdGl0bGU6ICdEbGEga29nbz8nIFxuICB9LFxuICB7XG4gICAgaWQ6ICdqYWsnLFxuICAgIHRpdGxlOiAnSmFrPycgXG4gIH0sXG4gIHtcbiAgICBpZDogJ2t0bycsXG4gICAgdGl0bGU6ICdLaW0gamVzdGXFm215PycgXG4gIH0sXG4gIHtcbiAgICBpZDogJ2lubmUnLFxuICAgIHRpdGxlOiAnRG9rxIVkIHptaWVyemFteT8nIFxuICB9LFxuXVxuXG5mdW5jdGlvbiBNZW51SWNvbih7XG4gIG9wZW4sXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8J3N2Zyc+ICYge1xuICBvcGVuOiBib29sZWFuXG59KSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPXtvcGVuID8gJ00xNyA3IDcgMTdNNyA3bDEwIDEwJyA6ICdtMTUgMTYtMyAzLTMtM00xNSA4bC0zLTMtMyAzJ31cbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE5hdkJhcigpIHtcbiAgbGV0IG5hdkJhclJlZiA9IHVzZVJlZjxSZWFjdC5FbGVtZW50UmVmPCdkaXYnPj4obnVsbClcbiAgbGV0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbClcbiAgbGV0IG1vYmlsZUFjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXggPT09IG51bGwgPyAwIDogYWN0aXZlSW5kZXhcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZUluZGV4KCkge1xuICAgICAgaWYgKCFuYXZCYXJSZWYuY3VycmVudCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IG5ld0FjdGl2ZUluZGV4ID0gbnVsbFxuICAgICAgbGV0IGVsZW1lbnRzID0gc2VjdGlvbnNcbiAgICAgICAgLm1hcCgoeyBpZCB9KSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpXG4gICAgICAgIC5maWx0ZXIoKGVsKTogZWwgaXMgSFRNTEVsZW1lbnQgPT4gZWwgIT09IG51bGwpXG4gICAgICBsZXQgYm9keVJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBsZXQgb2Zmc2V0ID0gYm9keVJlY3QudG9wICsgbmF2QmFyUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0ICsgMVxuXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPj0gTWF0aC5mbG9vcihib2R5UmVjdC5oZWlnaHQpIC0gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgIHNldEFjdGl2ZUluZGV4KHNlY3Rpb25zLmxlbmd0aCAtIDEpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsWSA+PVxuICAgICAgICAgIGVsZW1lbnRzW2luZGV4XS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBvZmZzZXRcbiAgICAgICAgKSB7XG4gICAgICAgICAgbmV3QWN0aXZlSW5kZXggPSBpbmRleFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc2V0QWN0aXZlSW5kZXgobmV3QWN0aXZlSW5kZXgpXG4gICAgfVxuXG4gICAgdXBkYXRlQWN0aXZlSW5kZXgoKVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZUFjdGl2ZUluZGV4KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGVBY3RpdmVJbmRleCwgeyBwYXNzaXZlOiB0cnVlIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZUFjdGl2ZUluZGV4KVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZUFjdGl2ZUluZGV4KVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17bmF2QmFyUmVmfSBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgei01MFwiPlxuICAgICAgPFBvcG92ZXIgY2xhc3NOYW1lPVwic206aGlkZGVuXCI+XG4gICAgICAgIHsoeyBvcGVuIH0pID0+IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICAgJ3JlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIHB4LTQgcHktMycsXG4gICAgICAgICAgICAgICAgIW9wZW4gJiZcbiAgICAgICAgICAgICAgICAgICdiZy13aGl0ZS85NSBzaGFkb3ctc20gW0BzdXBwb3J0cyhiYWNrZHJvcC1maWx0ZXI6Ymx1cigwKSldOmJnLXdoaXRlLzgwIFtAc3VwcG9ydHMoYmFja2Ryb3AtZmlsdGVyOmJsdXIoMCkpXTpiYWNrZHJvcC1ibHVyJyxcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgeyFvcGVuICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtc20gdGV4dC1wdWRlclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsobW9iaWxlQWN0aXZlSW5kZXggKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC00IHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7c2VjdGlvbnNbbW9iaWxlQWN0aXZlSW5kZXhdLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8UG9wb3Zlci5CdXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICAgICAnLW1yLTEgbWwtYXV0byBmbGV4IGgtOCB3LTggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgIG9wZW4gJiYgJ3JlbGF0aXZlIHotMTAnLFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uIG1lbnVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyFvcGVuICYmIChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBJbmNyZWFzZSBoaXQgYXJlYSAqL31cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxNZW51SWNvbiBvcGVuPXtvcGVufSBjbGFzc05hbWU9XCJoLTYgdy02IHN0cm9rZS1wdWRlclwiIC8+XG4gICAgICAgICAgICAgIDwvUG9wb3Zlci5CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxQb3BvdmVyLlBhbmVsIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXgtMCB0b3AtMCBiZy13aGl0ZS85NSBweS0zLjUgc2hhZG93LXNtIFtAc3VwcG9ydHMoYmFja2Ryb3AtZmlsdGVyOmJsdXIoMCkpXTpiZy13aGl0ZS84MCBbQHN1cHBvcnRzKGJhY2tkcm9wLWZpbHRlcjpibHVyKDApKV06YmFja2Ryb3AtYmx1clwiPlxuICAgICAgICAgICAgICB7c2VjdGlvbnMubWFwKChzZWN0aW9uLCBzZWN0aW9uSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8UG9wb3Zlci5CdXR0b25cbiAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXG4gICAgICAgICAgICAgICAgICBrZXk9e3NlY3Rpb24uaWR9XG4gICAgICAgICAgICAgICAgICBocmVmPXtgIyR7c2VjdGlvbi5pZH1gfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBweS0xLjVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXNtIHRleHQtcHVkZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7KHNlY3Rpb25JbmRleCArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtzZWN0aW9uLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlci5CdXR0b24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Qb3BvdmVyLlBhbmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC14LTAgYm90dG9tLWZ1bGwgei0xMCBoLTQgYmctd2hpdGVcIiAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9Qb3BvdmVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gc206ZmxleCBzbTpoLTMyIHNtOmp1c3RpZnktY2VudGVyIHNtOmJvcmRlci1iIHNtOmJvcmRlci1zbGF0ZS0yMDAgc206Ymctd2hpdGUvOTUgc206W0BzdXBwb3J0cyhiYWNrZHJvcC1maWx0ZXI6Ymx1cigwKSldOmJnLXdoaXRlLzgwIHNtOltAc3VwcG9ydHMoYmFja2Ryb3AtZmlsdGVyOmJsdXIoMCkpXTpiYWNrZHJvcC1ibHVyXCI+XG4gICAgICAgIDxvbFxuICAgICAgICAgIHJvbGU9XCJsaXN0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi1bLTJweF0gZ3JpZCBhdXRvLWNvbHMtW21pbm1heCgwLDE1cmVtKV0gZ3JpZC1mbG93LWNvbCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS05MDAgW2NvdW50ZXItcmVzZXQ6c2VjdGlvbl1cIlxuICAgICAgICA+XG4gICAgICAgICAge3NlY3Rpb25zLm1hcCgoc2VjdGlvbiwgc2VjdGlvbkluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtzZWN0aW9uLmlkfSBjbGFzc05hbWU9XCJmbGV4IFtjb3VudGVyLWluY3JlbWVudDpzZWN0aW9uXVwiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2AjJHtzZWN0aW9uLmlkfWB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAgICAgJ2ZsZXggdy1mdWxsIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXItYi0yIGJlZm9yZTptYi0yIGJlZm9yZTpmb250LW1vbm8gYmVmb3JlOnRleHQtc20gYmVmb3JlOmNvbnRlbnQtW2NvdW50ZXIoc2VjdGlvbixkZWNpbWFsLWxlYWRpbmctemVybyldJyxcbiAgICAgICAgICAgICAgICAgIHNlY3Rpb25JbmRleCA9PT0gYWN0aXZlSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgPyAnYm9yZGVyLXB1ZGVyIGJnLXB1ZGVyLWxpZ2h0IHRleHQtcHVkZXIgYmVmb3JlOnRleHQtcHVkZXInXG4gICAgICAgICAgICAgICAgICAgIDogJ2JvcmRlci10cmFuc3BhcmVudCBiZWZvcmU6dGV4dC1zbGF0ZS01MDAgaG92ZXI6YmctcHVkZXItbGlnaHQgaG92ZXI6YmVmb3JlOnRleHQtc2xhdGUtOTAwJyxcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3NlY3Rpb24udGl0bGV9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvb2w+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiUG9wb3ZlciIsImNsc3giLCJzZWN0aW9ucyIsImlkIiwidGl0bGUiLCJNZW51SWNvbiIsIm9wZW4iLCJwcm9wcyIsInN2ZyIsImFyaWEtaGlkZGVuIiwiZmlsbCIsInN0cm9rZVdpZHRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwidmlld0JveCIsInBhdGgiLCJkIiwiTmF2QmFyIiwibmF2QmFyUmVmIiwiYWN0aXZlSW5kZXgiLCJzZXRBY3RpdmVJbmRleCIsIm1vYmlsZUFjdGl2ZUluZGV4IiwidXBkYXRlQWN0aXZlSW5kZXgiLCJjdXJyZW50IiwibmV3QWN0aXZlSW5kZXgiLCJlbGVtZW50cyIsIm1hcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmaWx0ZXIiLCJlbCIsImJvZHlSZWN0IiwiYm9keSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm9mZnNldCIsInRvcCIsIm9mZnNldEhlaWdodCIsIndpbmRvdyIsInNjcm9sbFkiLCJNYXRoIiwiZmxvb3IiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImxlbmd0aCIsImluZGV4IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwicmVmIiwiY2xhc3NOYW1lIiwic3BhbiIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJCdXR0b24iLCJhcmlhLWxhYmVsIiwiUGFuZWwiLCJzZWN0aW9uIiwic2VjdGlvbkluZGV4IiwiYXMiLCJocmVmIiwib2wiLCJyb2xlIiwibGkiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/NavBar.tsx\n"));

/***/ })

});