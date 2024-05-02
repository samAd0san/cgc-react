import axios from "axios";
import React from "react";
import ProductItem from "./ProductItem";
import ShouldRender from "../util/ShouldRender";
import Error from "../util/Error";
import Loader from "../util/Loader";

class ProductList extends React.Component {

    state = {
        products: [],
        hasError: false,
        loading: true,
        page: 1,
        metadata: {},
    }

    onPrev = () => {
        if (this.state.page > 1) {
            this.setState({
                page: this.state.page - 1
            })
        }
        console.log('onPrev');
    }

    onNext = () => {
        if (this.state.page < this.state.metadata.pages)
        this.setState({
            page: this.state.page + 1
        })
        console.log('onNext');
    }


    constructor() {
        super();
        // axios.get(`http://localhost:3000/products/page/${this.state.page}/size/10`)
        //     .then(res => this.setState({ products: res.data.data, loading: false }))
        //     .catch(() => this.setState({ hasError: true }))
    }

    fetchData() {
        const url = `http://localhost:3000/products/page/${this.state.page}/size/6`
        axios.get(url)
            .then(res => this.setState({ products: res.data.data, metadata: res.data.metadata }))
            .catch(() => this.setState({ hasError: true }))
            .finally(() => this.setState({ loading: false }))
    }

    componentDidMount() { // triggers data fetching when the component is mounted onto the DOM. 
        // (or) fetches data as soon as the component is ready.
        this.fetchData();
    }

/*
    componentDidUpdate is a lifecycle method in React that is invoked after the component updates. In this specific 
    case, it compares the previous state (b.page) with the current state (this.state.page). If there's a difference, 
    it triggers a data fetch (this.fetchData()) to update the component with new data based on the current page state.
*/
    componentDidUpdate(a, b) { // the parameters a and b represent the previous props and previous state
        if (b.page != this.state.page) {
            this.fetchData();
        }
        // console.log(a);
        // console.log(b);
    }

    render() {
        return <div>

            {/* This displays the left and right button for pagination */}
            <div className="flex m-2">
                <h1 className="mt-1 text-xl font-semibold text-gray-600">Products</h1>

                <div className="ml-2 flex">
                    {/* Left Button */}
                    <button onClick={this.onPrev} style={{ backgroundColor: this.state.page === 1 ? 'gray' : '' }} className="bg-orange-500 p-1 text-white m-1 hover:bg-orange-600 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    {/* Displays the metadata */}
                    <h1 className="flex ml-1 mt-2 mr-1 text-grey-400 font-semibold ">{this.state.page} of {this.state.metadata.pages} (Total: {this.state.metadata.rows})</h1>

                    {/* Right Button */}
                    <button onClick={this.onNext} style={{ backgroundColor: this.state.page === this.state.metadata.pages ? 'gray' : '' }} className="bg-orange-500 p-1 text-white m-1 hover:bg-orange-600 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

            </div>;

            <ShouldRender when={this.state.loading}> {/* When the loading is true */}
                <Loader />
            </ShouldRender>

            <ShouldRender when={this.state.hasError}> {/* When hasError is true execute this Component */}
                <Error />
            </ShouldRender>

            <div className="grid md:grid-cols-3 sm:grid-cols-2"> {/*This keeps the products in cols and adjust size for small devices*/}
                {
                    this.state.products.map(prod => <ProductItem product={prod} />)
                }
            </div>
        </div>
    }
}

export default ProductList;