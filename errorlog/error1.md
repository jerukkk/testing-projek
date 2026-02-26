./app/components/BlurText.tsx:2:29
Ecmascript file had an error
  1 | import { motion, Transition, Easing } from 'motion/react';
> 2 | import { useEffect, useRef, useState, useMemo } from 'react';
    |                             ^^^^^^^^
  3 |
  4 | type BlurTextProps = {
  5 |   text?: string;

You're importing a component that needs `useState`. This React Hook only works in a Client Component. To fix, mark the file (or its parent) with the `"use client"` directive.

 Learn more: https://nextjs.org/docs/app/api-reference/directives/use-client



Import trace:
  Server Component:
    ./app/components/BlurText.tsx
    ./app/page.tsx

