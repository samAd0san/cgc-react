import UserList from "./UserList";
import ProductList from "./products/ProductList";

function MainApp() {
    return (<main>
        <div className="items-start">
            <ProductList />
        </div>
    </main>)
}

export default MainApp;