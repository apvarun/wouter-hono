import { useLayoutEffect, useRef } from "hono/jsx";
export {
  isValidElement,
  createContext,
  cloneElement,
  createElement,
  Fragment,
} from "hono/jsx";
export {
  useRef,
  useLayoutEffect as useIsomorphicLayoutEffect,
  useLayoutEffect as useInsertionEffect,
  useState,
  useContext,
  useSyncExternalStore,
} from "hono/jsx";

// Copied from:
// https://github.com/facebook/react/blob/main/packages/shared/ExecutionEnvironment.js
const canUseDOM = !!(
  typeof window !== "undefined" &&
  typeof window.document !== "undefined" &&
  typeof window.document.createElement !== "undefined"
);

export function forwardRef(component) {
  return component;
}

// Userland polyfill while we wait for the forthcoming
// https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md
// Note: "A high-fidelty polyfill for useEvent is not possible because
// there is no lifecycle or Hook in React that we can use to switch
// .current at the right timing."
// So we will have to make do with this "close enough" approach for now.
export const useEvent = (fn) => {
  const ref = useRef([fn, (...args) => ref[0](...args)]).current;
  useLayoutEffect(() => {
    ref[0] = fn;
  });
  return ref[1];
};
