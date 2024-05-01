import axios from "axios";
import React from "react";
import ProductItem from "./ProductItem";
import ShouldRender from "./util/ShouldRender";
import Error from "./util/Error";

class ProductList extends React.Component{

    state = {
        products : [],
        hasError : false,
    }

    constructor() {
        super();
        axios.get('http://localhost:3000/products')
            .then(res => this.setState({ products : res.data.data }))
            .catch(() => this.setState({ hasError : true }))
    }

    render() {
        return <div>
            <ShouldRender when={this.state.hasError}>
                <Error />
            </ShouldRender>
            <h1 className="text-xl font-semibold text-gray-600">Products</h1>
            <div className="grid md:grid-cols-3 sm:grid-cols-2"> {/*This keeps the products in cols and adjust size for small devices*/}
                {
                    this.state.products.map(prod => <ProductItem product={prod} />)  
                }
            </div>
        </div>
    }
}

export default ProductList;