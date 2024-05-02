import UserList from "./UserList";
import ProductList from "./products/ProductList";

function MainApp() {
    return (<main className="flex flex-col justify-between min-h-screen"> {/*To keep the product and arrow buttons aligned at the top */}
        <div className="items-start">
            <ProductList />
        </div>
    </main>)
}

export default MainApp;