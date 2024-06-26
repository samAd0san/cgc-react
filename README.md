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

# Function Migration
- <b>Hooks</b> in React are functions that enable functional components to use state, lifecycle methods, and other React features without writing a class.
- Hooks => useState(), useEffect(), useParam().

# Auth Token 
- We are implementing the user authentication, when the use signin the token is generated, the generated token is required to be passed in the header to access the <b>Product page</b>.

- Now to give the token to the browser we use the local storage of the browser to store the token, navigate by inspect -> applications -> Local Storage
that is where you can view the token which is stored in the local storage

1. In login.jsx we are saving the token which is generated when user signs in, we save it in the local storage with the method, 
<b>setItem(tokenName, tokenValue)</b> It is the method of the Storage interface, when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists.

2. In Product.jsx we are passing the token in the headers in order to access the <b>Product Page</b>, by
<b>getItem(tokenName)</b>, tokenName - which was set in setItem.

3. If the token is expired we will redirect the page to the <b>Login page</b>.

# Custom axios
- we have created a custom axios to refactor the code and avoid repeating the same code i.e to setItem('token') whenver any request is initiated;

- In axios.js <br>

1. It creates and returns an Axios instance configured with a base URL and headers, including an authorization token if available.

2. The token is included in the <b>headers</b> object. If a token is found in <b>localStorage</b>, it is retrieved and added to the <b>authorization</b> header as <b>Bearer ${token}</b>, which is then passed to the Axios instance configuration.

3. The <b>baseURL</b> is the root URL for all relative URLs in the requests made by the Axios instance. It's typically the base address of the API server.
<br>
The <b>headers</b> object contains key-value pairs of HTTP headers to be included in every request sent by the Axios instance. In this case, it includes the authorization header, which may contain a token for authentication purposes if one is found in the localStorage.

# Context API (Login/Logout)
- when we Login the <b>Logout button</b> should appear, similarly when we Logut the <b>Login button</b> should appear.To Implement this we use Context API 

- Managing state is an essential part of developing applications in React. A common way to manage state is by passing props. Passing props means sending data from one component to another. It's a good way to make sure that data gets to the right place in a React application. <br><br>But it can be annoying to pass props when you have to send the same data to lots of components or when components are far away from each other. This can make an application slower and harder to work with. <br><br>Fortunately, React provides a built-in feature known as the <b>Context API</b> that helps “teleport” data to the components that need it without passing props. <br>

- If we pass props to a parent component, any of its child or grandchild components can access and utilize those props through prop drilling.

- ### Implementation
1. userContext.js ->  creates a React context called UserContext with an initial value of an empty object.
2. App.jsx -> initializing the variables and passing it to children
3. Header.jsx -> setting the user to logged out if the user triggers the logged out button
4. Login.jsx -> settting the user to logged in if the user enter the creds and logs in