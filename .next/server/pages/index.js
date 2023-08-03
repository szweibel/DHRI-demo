"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_config),
  "default": () => (/* binding */ next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/index.js
var pages_namespaceObject = {};
__webpack_require__.r(pages_namespaceObject);
__webpack_require__.d(pages_namespaceObject, {
  "default": () => (Home),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: ./config.yml
var config = __webpack_require__(4888);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "markdown-to-jsx"
var external_markdown_to_jsx_ = __webpack_require__(1904);
var external_markdown_to_jsx_default = /*#__PURE__*/__webpack_require__.n(external_markdown_to_jsx_);
;// CONCATENATED MODULE: ./public/images/logos/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.201eb92c.png","height":1126,"width":1126,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAwklEQVR42j2Ly2rDMBRE9Tnp//9A3E03XbWLPqDQ+CFbte+9liM5lsCaSobkwMAwD1UA8DTP8jwRxzGLRaqSPcqh75lkRrCEdeohzBjHkY8RM1dt2+JGHAYSOJrgJxsG84fF2kqllOJ2WyFdi2HsMEiDpjbYtoB936NKQAQS1mXBT32B/f7E1jQolLMiooqZkQlvH6/4enk//DUfjDFnFUI4aa3JOYda/8JcNK7eQXcdee9PKnMfnUUkznYOxefsKP8BVwXbFquLJEkAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/icons-material/ExpandMore"
var ExpandMore_ = __webpack_require__(8148);
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);
;// CONCATENATED MODULE: external "@mui/icons-material/Launch"
const Launch_namespaceObject = require("@mui/icons-material/Launch");
var Launch_default = /*#__PURE__*/__webpack_require__.n(Launch_namespaceObject);
;// CONCATENATED MODULE: ./components/Schedule.js





function Schedule({ schedule , workshops  }) {
    const [activeAccordion, setActiveAccordion] = (0,external_react_.useState)(schedule[0].date);
    const formattedDate = (date)=>{
        const dateObj = new Date(date);
        const modifiedDate = new Date(dateObj.getTime() - dateObj.getTimezoneOffset() * -60000);
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        };
        return modifiedDate.toLocaleDateString("en-US", options);
    };
    // group events by date
    const eventsByDate = schedule.reduce((acc, event)=>{
        const date = formattedDate(event.date);
        if (event.workshop !== undefined) {
            // search for the workshop in the workshops array by slug 
            event.slug = workshops.find((workshop)=>workshop.slug === event.workshop).slug;
        }
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(event);
        return acc;
    }, {});
    // if a tab is equal to the current day, it is the default open tab, otherwise the first tab is default open
    (0,external_react_.useEffect)(()=>{
        const today = formattedDate(new Date());
        if (eventsByDate[today]) {
            setActiveAccordion(today);
        } else {
            setActiveAccordion(Object.keys(eventsByDate)[0]);
        }
    }, []);
    const handleAccordionChange = (event, date)=>{
        setActiveAccordion(date);
        // close accordion if it's already open
        if (activeAccordion === date) {
            setActiveAccordion(null);
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "schedule",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "sectionTitle",
                    children: "Schedule"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "accordion",
                    children: Object.keys(eventsByDate).map((date)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Accordion, {
                            expanded: date === activeAccordion,
                            onChange: (event)=>handleAccordionChange(event, date),
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(material_.AccordionSummary, {
                                    expandIcon: /*#__PURE__*/ jsx_runtime.jsx((ExpandMore_default()), {}),
                                    children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        className: "accordion-summary",
                                        children: date
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(material_.AccordionDetails, {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "accordion-details",
                                        children: eventsByDate[date].map((event, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                                        children: [
                                                            event.title,
                                                            event.slug && /*#__PURE__*/ jsx_runtime.jsx((Launch_default()), {
                                                                className: "launch-icon",
                                                                onClick: ()=>window.open(`/workshops/${event.slug}`),
                                                                style: {
                                                                    cursor: "pointer",
                                                                    paddingTop: "5px"
                                                                }
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: event.time
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: event.description
                                                    })
                                                ]
                                            }, index))
                                    })
                                })
                            ]
                        }, date))
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: external "@mui/icons-material/Build"
const Build_namespaceObject = require("@mui/icons-material/Build");
var Build_default = /*#__PURE__*/__webpack_require__.n(Build_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: external "@mui/icons-material/LocationOn"
const LocationOn_namespaceObject = require("@mui/icons-material/LocationOn");
var LocationOn_default = /*#__PURE__*/__webpack_require__.n(LocationOn_namespaceObject);
;// CONCATENATED MODULE: ./pages/index.js













const Workshop = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(29), __webpack_require__.e(664), __webpack_require__.e(322)]).then(__webpack_require__.bind(__webpack_require__, 322)), {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../components/MenuItem"
        ]
    },
    loading: function loading() {
        return /*#__PURE__*/ jsx_runtime.jsx("p", {
            children: "..."
        });
    }
});
function Home({ workshops  }) {
    const formattedDate = (date)=>{
        const dateObj = new Date(date);
        const modifiedDate = new Date(dateObj.getTime() - dateObj.getTimezoneOffset() * -60000);
        const options = {
            weekday: "long",
            month: "long",
            day: "numeric"
        };
        return modifiedDate.toLocaleDateString("en-US", options);
    };
    let date = null;
    if ((config_default()).date) {
        if ((config_default()).date === (config_default()).end_date) {
            date = formattedDate((config_default()).date);
        } else {
            date = formattedDate((config_default()).date) + " - " + formattedDate((config_default()).end_date);
        }
    }
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "frontpage",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "frontpage-top",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "titleContainer",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            style: {
                                                fontFamily: "Titillium Web"
                                            },
                                            className: "title",
                                            children: (config_default()).event
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            style: {
                                                fontFamily: "Titillium Web",
                                                fontWeight: "400"
                                            },
                                            className: "lineUp",
                                            children: date
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: (config_default()).organization
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                            children: [
                                                (config_default()).location,
                                                (config_default()).google_maps && /*#__PURE__*/ jsx_runtime.jsx((LocationOn_default()), {
                                                    onClick: ()=>window.open((config_default()).google_maps, "_blank"),
                                                    style: {
                                                        cursor: "pointer",
                                                        paddingTop: "5px"
                                                    }
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: logo,
                                    alt: (config_default()).organization + " logo",
                                    className: "frontpage-logo"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "registration",
                            children: (config_default()).register?.required && /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                children: [
                                    (config_default()).register.text,
                                    (config_default()).register.show_button && /*#__PURE__*/ jsx_runtime.jsx((Button_default()), {
                                        style: {
                                            color: "var(--foreground)",
                                            fontFamily: "Titillium Web",
                                            fontWeight: "400",
                                            fontSize: "1.2rem",
                                            padding: "0.5rem 1rem",
                                            borderRadius: "0rem",
                                            marginLeft: "1rem",
                                            border: "2px solid #ef3b3a",
                                            boxShadow: "#ef3b3a 8px 8px 0px"
                                        },
                                        href: (config_default()).register.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "registerButton",
                                        children: "Register"
                                    })
                                ]
                            })
                        }),
                        (config_default()).intro && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "intro",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "sectionTitle",
                                    children: "Description"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "intro-text",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((external_markdown_to_jsx_default()), {
                                        children: (config_default()).intro
                                    })
                                })
                            ]
                        })
                    ]
                }),
                (config_default()).schedule && /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "schedule-container",
                    children: /*#__PURE__*/ jsx_runtime.jsx(Schedule, {
                        schedule: (config_default()).schedule,
                        workshops: workshops
                    })
                }),
                (config_default()).show_workshops && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "workshops-container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "sectionTitle",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((Build_default()), {}),
                                " Workshops"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "workshops",
                            children: workshops.map((workshop, index)=>/*#__PURE__*/ jsx_runtime.jsx(Workshop, {
                                    workshop: workshop,
                                    index: index
                                }, index))
                        })
                    ]
                })
            ]
        })
    });
}
async function getStaticProps() {
    // Get files from the workshops dir
    const getFilesandProcess = (dir)=>{
        const dirents = external_fs_default().readdirSync(external_path_default().join(dir), {
            withFileTypes: true
        });
        const dirFiles = dirents.filter((file)=>file.isFile()).map((file)=>file.name);
        // Get slug and frontmatter from workshop
        const markdownFiles = dirFiles.map((filename)=>{
            // Create slug
            const slug = filename.replace(".md", "");
            // Get frontmatter
            const markdownWithMeta = external_fs_default().readFileSync(external_path_default().join(dir, filename), "utf-8");
            const matterResult = external_gray_matter_default()(markdownWithMeta);
            const content = matterResult.content;
            return {
                slug,
                content: content,
                ...matterResult.data
            };
        });
        return markdownFiles;
    };
    const workshopFiles = getFilesandProcess("workshops");
    const installFiles = getFilesandProcess("guides");
    const insightsFiles = getFilesandProcess("insights");
    return {
        props: {
            workshops: workshopFiles.sort(),
            guides: installFiles.sort(),
            insights: insightsFiles.sort()
        }
    };
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F&absolutePagePath=private-next-pages%2Findex.js&preferredRegion=!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_ = ((0,helpers/* hoist */.l)(pages_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getServerSideProps")
        const next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_config = (0,helpers/* hoist */.l)(pages_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(pages_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/index","pathname":"/","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: pages_namespaceObject })
        
        
    

/***/ }),

/***/ 8148:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ExpandMore");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8167:
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ 8455:
/***/ ((module) => {

module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 1904:
/***/ ((module) => {

module.exports = require("markdown-to-jsx");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [812,172,636,152,675,353], () => (__webpack_exec__(5645)));
module.exports = __webpack_exports__;

})();