(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ next_route_loaderpage_2F_app_absolutePagePath_private_next_pages_2F_app_js_preferredRegion_config),
  "default": () => (/* binding */ next_route_loaderpage_2F_app_absolutePagePath_private_next_pages_2F_app_js_preferredRegion_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/_app.js
var _app_namespaceObject = {};
__webpack_require__.r(_app_namespaceObject);
__webpack_require__.d(_app_namespaceObject, {
  "default": () => (_app)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./config.yml
var config = __webpack_require__(4888);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
// EXTERNAL MODULE: external "@mui/material/AppBar"
var AppBar_ = __webpack_require__(3882);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Toolbar"
var Toolbar_ = __webpack_require__(1431);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: external "@mui/material/Menu"
const Menu_namespaceObject = require("@mui/material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const icons_material_Menu_namespaceObject = require("@mui/icons-material/Menu");
var icons_material_Menu_default = /*#__PURE__*/__webpack_require__.n(icons_material_Menu_namespaceObject);
;// CONCATENATED MODULE: ./components/ButtonAppBarCollapse.js





class ButtonAppBarCollapse extends (external_react_default()).Component {
    constructor(props){
        super(props);
        this.handleMenu = (event)=>{
            this.setState({
                anchorEl: event.currentTarget
            });
        };
        this.handleClose = ()=>{
            this.setState({
                anchorEl: null
            });
        };
        this.state = {
            anchorEl: null
        };
        this.handleMenu = this.handleMenu.bind(this);
    }
    render() {
        const { classes  } = this.props;
        const { anchorEl  } = this.state;
        const open = Boolean(anchorEl);
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "buttonCollapse topBar-container",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                    onClick: this.handleMenu,
                    style: {
                        display: {
                            xs: "block",
                            md: "none",
                            lg: "none",
                            xl: "none",
                            xxl: "none"
                        }
                    },
                    children: /*#__PURE__*/ jsx_runtime.jsx((icons_material_Menu_default()), {})
                }),
                /*#__PURE__*/ jsx_runtime.jsx((Menu_default()), {
                    sx: {
                        display: {
                            xs: "block",
                            md: "none",
                            lg: "none",
                            xl: "none",
                            xxl: "none"
                        }
                    },
                    id: "menu-appbar",
                    anchorEl: anchorEl,
                    anchorOrigin: {
                        vertical: "top",
                        horizontal: "right"
                    },
                    transformOrigin: {
                        vertical: "top",
                        horizontal: "right"
                    },
                    open: open,
                    onClose: this.handleClose,
                    children: this.props.children
                })
            ]
        });
    }
}
/* harmony default export */ const components_ButtonAppBarCollapse = (ButtonAppBarCollapse);

;// CONCATENATED MODULE: external "next-themes"
const external_next_themes_namespaceObject = require("next-themes");
;// CONCATENATED MODULE: external "@mui/icons-material/Brightness7"
const Brightness7_namespaceObject = require("@mui/icons-material/Brightness7");
var Brightness7_default = /*#__PURE__*/__webpack_require__.n(Brightness7_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/DarkMode"
const DarkMode_namespaceObject = require("@mui/icons-material/DarkMode");
var DarkMode_default = /*#__PURE__*/__webpack_require__.n(DarkMode_namespaceObject);
;// CONCATENATED MODULE: ./components/Header.js











// import logo from '../public/images/logos/logo.png';





const Drawer = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(322), __webpack_require__.e(403)]).then(__webpack_require__.bind(__webpack_require__, 2403)), {
    loadableGenerated: {
        modules: [
            "../components/Header.js -> " + "../components/Drawer"
        ]
    },
    loading: function loading() {
        return /*#__PURE__*/ jsx_runtime.jsx("p", {
            children: "..."
        });
    }
});
function Header({ props  }) {
    const [propsAvailable, setPropsAvailable] = (0,external_react_.useState)(false);
    const [allWorkshops, setAllWorkshops] = (0,external_react_.useState)([]);
    const [allGuides, setAllGuides] = (0,external_react_.useState)([]);
    const [allInsights, setAllInsights] = (0,external_react_.useState)([]);
    const { theme , setTheme  } = (0,external_next_themes_namespaceObject.useTheme)();
    const [darkMode, setDarkMode] = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        if (props && props.workshops) {
            setPropsAvailable(true);
            setAllWorkshops(props.workshops);
            setAllGuides(props.guides);
            setAllInsights(props.insights);
        }
    }, [
        props.workshops
    ]);
    (0,external_react_.useEffect)(()=>{
        if (theme === "dark") {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }, [
        theme
    ]);
    const themeToggle = (e)=>{
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Box_default()), {
        className: "",
        id: "back-to-top-anchor",
        sx: {
            display: "flex"
        },
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((CssBaseline_default()), {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_ButtonAppBarCollapse, {
                className: "topBar-container",
                sx: {
                    display: {
                        xs: "block",
                        md: "none",
                        lg: "none",
                        xl: "none",
                        xxl: "none"
                    }
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        className: "links",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: propsAvailable ? /*#__PURE__*/ jsx_runtime.jsx(Drawer, {
                                    files: allWorkshops,
                                    category: "workshops"
                                }) : null
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: propsAvailable ? /*#__PURE__*/ jsx_runtime.jsx(Drawer, {
                                    files: allGuides,
                                    category: "guides"
                                }) : null
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: propsAvailable ? /*#__PURE__*/ jsx_runtime.jsx(Drawer, {
                                        files: allInsights,
                                        category: "insights"
                                    }) : null
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/Glossary",
                                    passHref: true,
                                    children: "Glossary"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                        sx: {
                            ml: 1
                        },
                        id: "dark-mode-toggle",
                        onClick: (e)=>themeToggle(e),
                        color: "inherit",
                        children: darkMode === true ? /*#__PURE__*/ jsx_runtime.jsx((Brightness7_default()), {}) : /*#__PURE__*/ jsx_runtime.jsx((DarkMode_default()), {})
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx((AppBar_default()), {
                position: "static",
                sx: {
                    display: {
                        xs: "none",
                        md: "block"
                    },
                    Zindex: 10000
                },
                className: "topBar-container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Toolbar_default()), {
                    className: "topBar",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: "/images/logos/logo.png",
                                alt: (config_default()).organization + " logo",
                                width: 100,
                                height: 100,
                                className: "logo"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            id: "nav-container",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                    variant: "h6",
                                    component: "div",
                                    sx: {
                                        flexGrow: 1,
                                        flexShrink: 0
                                    },
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/",
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "headerLink",
                                            children: (config_default()).event.length > 80 ? config_default().event.substring(0, 80) + "..." : (config_default()).event
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "links",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/workshops/all",
                                                passHref: true,
                                                children: "Workshops"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/Glossary",
                                                passHref: true,
                                                children: "Glossary"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((IconButton_default()), {
                                    sx: {
                                        ml: 1
                                    },
                                    id: "dark-mode-toggle",
                                    onClick: (e)=>themeToggle(e),
                                    color: "inherit",
                                    children: darkMode === true ? /*#__PURE__*/ jsx_runtime.jsx((Brightness7_default()), {}) : /*#__PURE__*/ jsx_runtime.jsx((DarkMode_default()), {})
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/highlight.js/styles/obsidian.css
var obsidian = __webpack_require__(7678);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/useScrollTrigger"
const useScrollTrigger_namespaceObject = require("@mui/material/useScrollTrigger");
var useScrollTrigger_default = /*#__PURE__*/__webpack_require__.n(useScrollTrigger_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
;// CONCATENATED MODULE: external "@mui/material/Fab"
const Fab_namespaceObject = require("@mui/material/Fab");
;// CONCATENATED MODULE: external "@mui/icons-material/KeyboardArrowUp"
const KeyboardArrowUp_namespaceObject = require("@mui/icons-material/KeyboardArrowUp");
;// CONCATENATED MODULE: external "@mui/material/Zoom"
const Zoom_namespaceObject = require("@mui/material/Zoom");
var Zoom_default = /*#__PURE__*/__webpack_require__.n(Zoom_namespaceObject);
;// CONCATENATED MODULE: ./components/ScrollTop.js













function ScrollTop(props) {
    const { children , window  } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger_default()({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100
    });
    const handleClick = (event)=>{
        const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");
        if (anchor) {
            anchor.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx((Zoom_default()), {
        in: trigger,
        children: /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
            onClick: handleClick,
            role: "presentation",
            sx: {
                position: "fixed",
                bottom: 16,
                right: 16
            },
            children: children
        })
    });
}
ScrollTop.propTypes = {
    children: (external_prop_types_default()).element.isRequired,
    /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */ window: (external_prop_types_default()).func
};
function BackToTop(props) {
    return /*#__PURE__*/ _jsx(React.Fragment, {
        children: /*#__PURE__*/ _jsx(ScrollTop, {
            ...props,
            children: /*#__PURE__*/ _jsx(Fab, {
                color: "secondary",
                size: "small",
                "aria-label": "scroll back to top",
                children: /*#__PURE__*/ _jsx(KeyboardArrowUpIcon, {})
            })
        })
    });
}

// EXTERNAL MODULE: ./components/PyodideProvider.js
var PyodideProvider = __webpack_require__(307);
;// CONCATENATED MODULE: ./pages/_app.js


// import '../styles/reset.css'
// import '../styles/imports.css'









const Footer = dynamic_default()(()=>__webpack_require__.e(/* import() */ 765).then(__webpack_require__.bind(__webpack_require__, 765)), {
    loadableGenerated: {
        modules: [
            "_app.js -> " + "../components/Footer"
        ]
    }
});


function MyApp({ Component , pageProps  }) {
    const base = "/" + "dhrift";
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: (config_default()).event
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css",
                        integrity: "sha512-HqxHUkJM0SYcbvxUw5P60SzdOTy/QVwA1JJrvaXJv4q7lmbDZCmZaqz01UPOaQveoxfYRv1tHozWGPMcuTBuvQ==",
                        crossOrigin: "anonymous",
                        referrerPolicy: "no-referrer"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "https://fonts.googleapis.com/css?family=Roboto"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "https://fonts.googleapis.com/css?family=Lato"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "https://fonts.googleapis.com/css?family=Titillium+Web"
                    }),
                     false || /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("link", {
                                rel: "icon",
                                href: "favicon.ico",
                                sizes: "32x32"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("link", {
                                rel: "icon",
                                href: "favicon.ico",
                                sizes: "192x192"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("link", {
                                rel: "apple-touch-icon",
                                href: "favicon.ico"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx((CssBaseline_default()), {}),
            /*#__PURE__*/ jsx_runtime.jsx(external_next_themes_namespaceObject.ThemeProvider, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(styles_.StyledEngineProvider, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(Header, {
                            props: pageProps
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("main", {
                            children: /*#__PURE__*/ jsx_runtime.jsx(PyodideProvider/* default */.Z, {
                                children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                                    ...pageProps
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js&preferredRegion=!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_app_absolutePagePath_private_next_pages_2F_app_js_preferredRegion_ = ((0,helpers/* hoist */.l)(_app_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(_app_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "getServerSideProps")
        const next_route_loaderpage_2F_app_absolutePagePath_private_next_pages_2F_app_js_preferredRegion_config = (0,helpers/* hoist */.l)(_app_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_app_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/_app","pathname":"/_app","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: _app_namespaceObject })
        
        
    

/***/ }),

/***/ 7678:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3882:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 19:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ 8167:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Card");

/***/ }),

/***/ 8455:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ 4475:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Container");

/***/ }),

/***/ 7898:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Drawer");

/***/ }),

/***/ 7934:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 1431:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ 7163:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [812,172,636,152,29,664,675,307,353], () => (__webpack_exec__(4297)));
module.exports = __webpack_exports__;

})();