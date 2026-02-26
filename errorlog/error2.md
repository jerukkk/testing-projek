## Error Type
Console Error

## Error Message
Functions are not valid as a React child. This may happen if you return children instead of <children /> from render. Or maybe you meant to call this function rather than return it.
  <span>{children}</span>


    at createConsoleError (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_f3530cac._.js:2199:71)
    at handleConsoleError (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_f3530cac._.js:2980:54)
    at console.error (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_f3530cac._.js:3124:57)
    at warnOnFunctionTypeImpl (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:3959:458)
    at warnOnFunctionType (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:3963:108)
    at reconcileChildFibersImpl (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:4283:47)
    at <unknown> (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:4292:39)
    at reconcileChildren (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:5929:51)
    at beginWork (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:6775:1573)
    at runWithFiberInDEV (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:965:74)
    at performUnitOfWork (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:9562:97)
    at workLoopConcurrentByScheduler (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:9558:58)
    at renderRootConcurrent (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:9541:71)
    at performWorkOnRoot (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:9068:150)
    at performWorkOnRootViaSchedulerTask (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10230:9)
    at MessagePort.performWorkUntilDeadline (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:2647:64)
    at span (<anonymous>:null:null)
    at useRender (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_framer-motion_dist_es_0b5e47f9._.js:516:191)
    at MotionDOMComponent (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_framer-motion_dist_es_0b5e47f9._.js:1180:215)
    at CountUpNumber (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/app_components_7d51bc8d._.js:380:214)
    at Home (app\page.tsx:96:62)

## Code Frame
  94 |             <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-xl shadow-xl p-6 text-center text-white">
  95 |               <h3 className="text-xl font-semibold mb-2">Championships</h3>
> 96 |               <p className="text-5xl font-bold text-red-300"><CountUpNumber target={6} duration={2} /></p>
     |                                                              ^
  97 |               <p className="mt-2 text-sm opacity-90">NBA Titles</p>
  98 |             </div>
  99 |             

Next.js version: 16.1.6 (Turbopack)