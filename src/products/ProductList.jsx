import axios from "axios";
import React from "react";
import ProductItem from "./ProductItem";
import ShouldRender from "../util/ShouldRender";
import Error from "../util/Error";
import Loader from "../util/Loader";

class ProductList extends React.Component {

    constructor() {
        super();
        
        this.state = {
            products: [],
            hasError: false,
            loading: true,
            page: 1,
            metadata: {},
            search: '',
            sort: '',
            direction: ''
        }
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

    fetchData = () => {
        const url = `http://localhost:3000/products/page/${this.state.page}/size/6?search=${this.state.search}&sort=${this.state.sort}&direction=${this.state.direction}`;
        axios.get(url)
            .then(res => this.setState({ products: res.data.data, metadata: res.data.metadata }))
            .catch(() => this.setState({ hasError: true }))
            .finally(() => this.setState({ loading: false }))
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

                {/* Adding a Search bar via Tailwind */}
                <div>
                    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input onKeyUp={this.onKeyUp} onChange={this.onTextChange} type="search" id="default-search" className="h-11 mt-2 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Brand" required />
                        <button onClick={this.onSearch} type="submit" className="mt-2 text-white absolute end-2.5 bottom-2.5 bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:focus:ring-blue-800">Search</button>
                    </div>
                </div>
                {/* Sorting UI */}
                <div>
                    <select onClick={this.onSortChange} className="h-11 border border-orange-500 h-10 rounded m-2">
                        <option value="">Sort</option>
                        <option value="price:asc">Price Low to High</option>
                        <option value="price:desc">Price High to Low</option>
                        <option value="discount:asc">Discount Low to High</option>
                        <option value="discount:desc">Discount High to low</option>
                    </select>
                </div>

            </div>;


            {/* When the loading is true */}
            <ShouldRender when={this.state.loading}>
                <Loader />
            </ShouldRender>

            {/* When hasError is true execute this Component */}
            <ShouldRender when={this.state.hasError}>
                <Error />
            </ShouldRender>

            {/*This keeps the products in cols and adjust size for small devices*/}
            <div className="grid md:grid-cols-3 sm:grid-cols-2">
                {
                    this.state.products.map(prod => <ProductItem product={prod} />)
                }
            </div>

        </div>
    }

    // returns boolean
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentDidMount() {
        this.fetchData();
    }

    componentWillUpdate() {
        console.log('will update');
    }

    componentDidUpdate(nextProps, nextState) {
        if (nextState.page !== this.state.page || nextState.sort !== this.state.sort || nextState.direction !== this.state.direction)
            this.fetchData();
    }

    onTextChange = (evt) => { // Whenver the text is entered in the search bar
        this.setState({ search: evt.target.value });
    }

    onSearch = () => this.fetchData();

    onKeyUp = (evt) => {
        if (evt.keyCode === 13) this.fetchData();
    }

    onSortChange = (evt) => {
        const sortString = evt.target.value;
        const tokens = sortString.split(':');
        this.setState({ sort: tokens[0], direction: tokens[1] });
    }
}

export default ProductList;