// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import App from "./App";
import './index.css'

// ReactDOM.render(<App />, document.getElementById('root'));
const rootNode = document.getElementById('root');
const root = createRoot(rootNode);

root.render(<App />);