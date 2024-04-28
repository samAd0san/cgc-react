# React 
- React is a JavaScript library for building user interfaces.
- React Component is small UI element.
- <u>Rendering</u> is the process of converting React components into the actual UI elements that are displayed on the screen.

# React SetUp
- ```npm create vite@latest```
- project-name
- React 
- JavaScript
- ```cd project-name ```
- ```npm install```
- ```npm run dev```

# React First Execution
1. Create index.html then specifying the main.jsx file in script element
2. Create App.jsx (It is a React Component) React Component will begin with UpperCase e.g src/App.jsx
3. In main.jsx import src/App.jsx and render

# React Interpolation and props
1. Added value and age in Name.jsx (Component)
- <u>props</u> (short for "properties") are used to pass data from a parent component to a child component in React.
2. In Skills.jsx (Component) displaying all the items by using map() function
3. Added Products using div and table.

# Components in React
1. Container component and Presentation component
- <u>Container</u> component manages data and state in a React application
- <u>Presentation</u> component focuses on rendering UI elements based on the <u>data</u> and <u>props</u> passed to it.
2. Class/Statefull component (Counter.jsx)
- A <u>stateful</u> component in React manages its own state data, allowing it to change and update its UI based on internal state changes.

# Tailwind Integration
1. ```npm install -D tailwindcss postcss autoprefixer```
2. ```npx tailwindcss init -p```
3. Add in tailwind.config.cjs
- ```"./index.html","./src/**/*.{js,ts,jsx,tsx}",```

# UserList
- We are adding UserLists throught APIs

1. Adding <b>MainApp.jsx</b> (new component) to the <b>App.jsx</b> component. 
2. Created <b>MainApp.jsx</b> and added another component in it i.e <b>UserList.jsx</b>
3. Created <b>UserList.jsx</b> and fetched the user data through api using axios (3rd party)
	- Also adding <b>Error.jsx</b> component for <b>conditional rendering</b>
4. Created <b>Error.jsx</b> component 
5. At last create the <b>Product.jsx</b> module (for next commit)

- STEPS - UserList, Products, ... -> MainApp -> App.jsx 