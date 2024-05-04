import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import UserList from "./UserList";
import ProductList from "./products/ProductList";

function MainApp() {
    return (<main className="flex flex-col justify-between min-h-screen"> {/*To keep the product and arrow buttons aligned at the top */}
        <div className="items-start">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/users" element={<UserList />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    </main>)
}

export default MainApp;