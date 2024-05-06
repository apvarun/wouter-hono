# wouter-hono

<div align="center">
  <a href="https://npmjs.org/package/wouter-hono"><img alt="npm" src="https://img.shields.io/npm/v/wouter-hono.svg?color=black&labelColor=888" /></a>
</div>

This library provides a wrapper around the popular routing library "wouter" for use with Hono, the ultrafast web framework. It allows you to leverage the clean and declarative routing approach of wouter within your Hono client components.

## Getting Started

First, add wouter-hono to your project.

```bash
npm install wouter-hono
```

Then, import the `Switch` component from `wouter-hono` and use it in your Hono app. This component will render the first child component that matches the current URL.

```js
import { Switch, Route, Link } from "wouter-hono";

function App() {
  return (
    <>
      <Link href="">Home</Link>
      <Link href="/about">About</Link>

      <Switch>
        <Route path="/about">
          <p>About page</p>
        </Route>
        <Route path="/">
          <p>Home page</p>
        </Route>
      </Switch>
    </>
  );
}
```

## Using the `useBrowserLocation` Hook

If you want to access the current URL and other location-related information in your Hono components, you can use the `useBrowserLocation` hook from `wouter-hono`. This hook returns an array with two elements: the first element is the current URL, and the second element is the navigate function.

```js
import { useBrowserLocation } from "wouter-hono";

function MyComponent() {
  const [location] = useBrowserLocation();

  if (location.pathname === "/about") {
    return <p>About page</p>;
  }

  return <p>Home page</p>;
}
```

## Acknowledgements

This library is based on `wouter` package by [Alexey Taktarov](https://github.com/molefrog), which is a great routing solution for React and Preact.
