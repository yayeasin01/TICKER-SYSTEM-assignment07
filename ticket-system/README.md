# Ticket System (React + Tailwind)

## Run locally
1. Install dependencies:
```
npm install
```
2. Start dev server:
```
npm run dev
```

## What is JSX, and why is it used?
JSX is a syntax extension for JavaScript that looks similar to HTML. It's used in React to describe UI components declaratively. It gets compiled to `React.createElement` calls.

## What is the difference between State and Props?
- State: local data managed inside a component (mutable via hooks).
- Props: data passed from parent to child (read-only inside child).

## What is the useState hook, and how does it work?
`useState` returns a state variable and a setter function. Calling the setter updates the state and triggers a re-render.

## How can you share state between components in React?
Lift the state up to a common parent and pass values + setters down via props, or use context/state libraries.

## How is event handling done in React?
Use camelCase props like `onClick` and pass handler functions. Example: `<button onClick={handleClick}>`.

## Notes
- This scaffold uses Tailwind for styling (you should run the Tailwind setup steps if you want to build production CSS).
- The project is ready to run with Vite. After `npm install`, `npm run dev` will start it.
