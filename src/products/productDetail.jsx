import React from "react";
import ShouldRender from "../util/ShouldRender";
import Error from "../util/Error";
import ProductItem from "./ProductItem";
import axios from "axios";

class ProductDetail extends React.Component{

    state = { product : null, hasError : false}

    componentDidMount() {

        const id = '66320a25d241a76d97198c09'; // To make it dynamic we will have to do function migration
        const url = `http://localhost:3000/products/${id}`;
        axios.get(url)
            .then(res => this.setState({ product : res.data}))
            .catch(() => this.setState({ hasError : true}))
    }

    render() {
        return <div>
            <ShouldRender when={this.state.hasError}>
                <Error />
            </ShouldRender>

            <div className="w-h-screen flex items-center justify-center"> 
            <ShouldRender when={this.state.product}>
                <ProductItem product={this.state.product} />
            </ShouldRender>
            </div>
        </div>
    }
}

export default ProductDetail;