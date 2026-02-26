## Error Type
Console Error

## Error Message
The final argument passed to useEffect changed size between renders. The order and size of this array must remain constant.

Previous: [true]
Incoming: [true, _r_0_]


    at createConsoleError (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_f3530cac._.js:2199:71)
    at handleConsoleError (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_f3530cac._.js:2980:54)
    at console.error (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_f3530cac._.js:3124:57)
    at areHookInputsEqual (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:4635:56)
    at updateEffectImpl (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:5331:50)
    at Object.useEffect (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:15358:13)
    at exports.useEffect (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:1722:36)
    at CountUpNumber (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/app_components_7d51bc8d._.js?id=%255Bproject%255D%252Fapp%252Fcomponents%252FCountUpNumber.tsx+%255Bapp-client%255D+%2528ecmascript%2529:29:180)
    at Object.react_stack_bottom_frame (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:14826:24)
    at renderWithHooksAgain (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:4706:24)
    at renderWithHooks (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:4657:28)
    at updateFunctionComponent (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:6112:21)
    at beginWork (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:6708:24)
    at runWithFiberInDEV (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:965:74)
    at performUnitOfWork (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:9562:97)
    at workLoopSync (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:9456:40)
    at renderRootSync (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:9440:13)
    at performWorkOnRoot (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:9068:186)
    at performSyncWorkOnRoot (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10238:9)
    at flushSyncWorkAcrossRoots_impl (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10154:316)
    at flushSyncWork$1 (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:9237:86)
    at Object.scheduleRefresh (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:299:13)
    at <unknown> (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:391:33)
    at Set.forEach (<anonymous>:null:null)
    at Object.performReactRefresh (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:384:38)
    at applyUpdate (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:878:31)
    at <unknown> (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:886:13)
    at Home (app\page.tsx:96:62)

## Code Frame
  94 |             <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-xl shadow-xl p-6 text-center text-white">
  95 |               <h3 className="text-xl font-semibold mb-2">Championships</h3>
> 96 |               <p className="text-5xl font-bold text-red-300"><CountUpNumber target={6} duration={2} resetOnScrollDown={true} /></p>
     |                                                              ^
  97 |               <p className="mt-2 text-sm opacity-90">NBA Titles</p>
  98 |             </div>
  99 |             

Next.js version: 16.1.6 (Turbopack)


## Error Type
Console Error

## Error Message
The final argument passed to useEffect changed size between renders. The order and size of this array must remain constant.

Previous: [true]
Incoming: [true, _r_1_]


    at createConsoleError (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_f3530cac._.js:2199:71)
    at handleConsoleError (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_f3530cac._.js:2980:54)
    at console.error (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_f3530cac._.js:3124:57)
    at areHookInputsEqual (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:4635:56)
    at updateEffectImpl (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:5331:50)
    at Object.useEffect (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:15358:13)
    at exports.useEffect (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:1722:36)
    at CountUpNumber (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/app_components_7d51bc8d._.js?id=%255Bproject%255D%252Fapp%252Fcomponents%252FCountUpNumber.tsx+%255Bapp-client%255D+%2528ecmascript%2529:29:180)
    at Object.react_stack_bottom_frame (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:14826:24)
    at renderWithHooksAgain (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:4706:24)
    at renderWithHooks (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:4657:28)
    at updateFunctionComponent (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:6112:21)
    at beginWork (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:6708:24)
    at runWithFiberInDEV (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:965:74)
    at performUnitOfWork (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:9562:97)
    at workLoopSync (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:9456:40)
    at renderRootSync (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:9440:13)
    at performWorkOnRoot (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:9068:186)
    at performSyncWorkOnRoot (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10238:9)
    at flushSyncWorkAcrossRoots_impl (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10154:316)
    at flushSyncWork$1 (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:9237:86)
    at Object.scheduleRefresh (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:299:13)
    at <unknown> (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:391:33)
    at Set.forEach (<anonymous>:null:null)
    at Object.performReactRefresh (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:384:38)
    at applyUpdate (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:878:31)
    at <unknown> (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:886:13)
    at Home (app\page.tsx:103:62)

## Code Frame
  101 |             <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-xl shadow-xl p-6 text-center text-white">
  102 |               <h3 className="text-xl font-semibold mb-2">Playoff Wins</h3>
> 103 |               <p className="text-5xl font-bold text-red-300"><CountUpNumber target={187} duration={3} resetOnScrollDown={true} /></p>
      |                                                              ^
  104 |               <p className="mt-2 text-sm opacity-90">Total Playoff Victories</p>
  105 |             </div>
  106 |             

Next.js version: 16.1.6 (Turbopack)


## Error Type
Console Error

## Error Message
The final argument passed to useEffect changed size between renders. The order and size of this array must remain constant.

Previous: [true]
Incoming: [true, _r_2_]


    at createConsoleError (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_f3530cac._.js:2199:71)
    at handleConsoleError (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_f3530cac._.js:2980:54)
    at console.error (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_f3530cac._.js:3124:57)
    at areHookInputsEqual (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:4635:56)
    at updateEffectImpl (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:5331:50)
    at Object.useEffect (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:15358:13)
    at exports.useEffect (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:1722:36)
    at CountUpNumber (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/app_components_7d51bc8d._.js?id=%255Bproject%255D%252Fapp%252Fcomponents%252FCountUpNumber.tsx+%255Bapp-client%255D+%2528ecmascript%2529:29:180)
    at Object.react_stack_bottom_frame (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:14826:24)
    at renderWithHooksAgain (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:4706:24)
    at renderWithHooks (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:4657:28)
    at updateFunctionComponent (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:6112:21)
    at beginWork (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:6708:24)
    at runWithFiberInDEV (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:965:74)
    at performUnitOfWork (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:9562:97)
    at workLoopSync (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:9456:40)
    at renderRootSync (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:9440:13)
    at performWorkOnRoot (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:9068:186)
    at performSyncWorkOnRoot (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10238:9)
    at flushSyncWorkAcrossRoots_impl (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10154:316)
    at flushSyncWork$1 (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:9237:86)
    at Object.scheduleRefresh (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:299:13)
    at <unknown> (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:391:33)
    at Set.forEach (<anonymous>:null:null)
    at Object.performReactRefresh (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:384:38)
    at applyUpdate (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:878:31)
    at <unknown> (file://C:/Pribadi/Projek/testing react bits/my-app/.next/dev/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:886:13)
    at Home (app\page.tsx:110:62)

## Code Frame
  108 |             <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-xl shadow-xl p-6 text-center text-white">
  109 |               <h3 className="text-xl font-semibold mb-2">Single Season Wins</h3>
> 110 |               <p className="text-5xl font-bold text-red-300"><CountUpNumber target={72} duration={2.5} resetOnScrollDown={true} /></p>
      |                                                              ^
  111 |               <p className="mt-2 text-sm opacity-90">1995-96 Season Record</p>
  112 |             </div>
  113 |           </div>

Next.js version: 16.1.6 (Turbopack)
