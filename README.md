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

# ShouldRender
- <b>ShouldRender</b> is a custom component used for conditional rendering in React. Its main use is to conditionally render its children based on a specified condition.
- We use ShouldRender to improve the code quality and reusability.
- In <b>when ? children : null;</b>, It checks the condition when. If <b>when</b> is true, it returns children, which are the elements passed as children to the ShouldRender component. If <b>when</b> is false, it returns null, indicating that nothing should be rendered. This allows for conditional rendering based on the when prop.
- If the children is present it'll execute the children i.e 'Error' component in this case, if there is not any children it'll give null.
- <b>children </b>is a predefined prop in React.

# Adding products 
1. Creating ProductList.jsx component which will iterate through the data and display all the products.
2. Where ProductItem.jsx include styling that how a product should look like.

# Loading
- To implement Loading initially we keep it true, i.e it'll keep showing the loading icon (true) but when the data is fetched 
to stop the loading we make it to (false).
- In state the loading is true.
- In response the loading will be false.

1. /util/Loader.jsx
2. In state add loading : true
3. In constructor loading : false and render()
4. /util/Loader.css

# Pagination
1. Added two arrows left and right
2. displayed the metadata
3. fixed the limit of pages i.e pagination should stop at the first and last page

# Searching
1. Added a search bar using Tailwind
2. custom methods for events
- onTextChange
- onSearch
- onKeyUp (To search when pressed the Enter key)

# Sorting
1. Create an select/option tag for sorting (UI)
2. declared sort and direction in state
3. Added onSortChange event
4. specified componentDidUpdate for sort and direction

# Routing
- <b>React Router DOM</b> is a library for handling routing in React applications, allowing for dynamic navigation and rendering of different components based on the URL, enhancing single-page application (SPA) functionality.

- Steps to implemets 
1. Create all the Pages you want to route eg. Home, About, Contact etc...
2. npm install react-router-dom
3. (In App.jsx) import BrowserRouter and wrap the Header, Footer and the main body in it.
4. (In MainApp.jsx) specify i all the end points in it by importing Routes and Route
5. Then go to Header and in XML wrap the element in Link tag and specify the endpoint which we did in the MainApp.jsx

# moment.js
- Moment.js is a JavaScript library for parsing, validating, manipulating, and formatting dates and times.
```npm install moment```

# ProductDetail
- On Clicking to the image of a particular product it should show the details of the product.