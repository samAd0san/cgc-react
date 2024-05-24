import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import ShouldRender from "../util/ShouldRender";
import Error from "../util/Error";
import Loader from "../util/Loader";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../util/axios";

function ProductList() {

    const [products, setProducts] = useState([]);
    const [hasError, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [metadata, setMetadata] = useState({});
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [direction, setDirection] = useState('');

    const navigate = useNavigate();

    const onPrev = () => {
        if (page > 1) setPage(page - 1);
    }

    const onNext = () => {
        if (page < metadata.pages) setPage(page + 1);
    }

    const fetchData = async () => {
        const path = `/products/page/${page}/size/10?search=${search}&sort=${sort}&direction=${direction}`;
        try { // Refactor
            const res = await axiosInstance().get(path);
            setProducts(res.data.data);
            setMetadata(res.data.metadata);
        } catch (err) {
            if(err.response && err.response.status === 401){
                navigate('/login');
            }
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [page, search, sort, direction]);

    const onTextChange = (evt) => { // Whenver the text is entered in the search bar
        setSearch(evt.target.value);
    }

    const onSearch = () => fetchData();

    const onKeyUp = (evt) => {
        if (evt.keyCode === 13) fetchData();
    }

    const onSortChange = (evt) => {
        const sortString = evt.target.value;
        const tokens = sortString.split(':');
        setSort(tokens[0]);
        setDirection(tokens[1]);
    }

    const customRefresh = (id) => {
        console.log('product deleted with id', id);
        fetchData();
    }

    return <div>

        {/* This displays the left and right button for pagination */}
        <div className="flex m-2">
            <h1 className="mt-1 text-xl font-semibold text-gray-600">Products</h1>

            <div className="ml-2 flex">
                {/* Left Button */}
                <button onClick={onPrev} style={{ backgroundColor: page === 1 ? 'gray' : '' }} className="bg-orange-500 p-1 text-white m-1 hover:bg-orange-600 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>

                {/* Displays the metadata */}
                <h1 className="flex ml-1 mt-2 mr-1 text-grey-400 font-semibold ">{page} of {metadata.pages} (Total: {metadata.rows})</h1>

                {/* Right Button */}
                <button onClick={onNext} style={{ backgroundColor: page === metadata.pages ? 'gray' : '' }} className="bg-orange-500 p-1 text-white m-1 hover:bg-orange-600 rounded">
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
                    <input onKeyUp={onKeyUp} onChange={onTextChange} type="search" id="default-search" className="h-11 mt-2 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Brand" required />
                    <button onClick={onSearch} type="submit" className="mt-2 text-white absolute end-2.5 bottom-2.5 bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:focus:ring-blue-800">Search</button>
                </div>
            </div>
            {/* Sorting UI */}
            <div>
                <select onClick={onSortChange} className="h-11 border border-orange-500 h-10 rounded m-2">
                    <option value="">Sort</option>
                    <option value="price:asc">Price Low to High</option>
                    <option value="price:desc">Price High to Low</option>
                    <option value="discount:asc">Discount Low to High</option>
                    <option value="discount:desc">Discount High to low</option>
                </select>
            </div>

            {/* Icon for Adding a New Product */}
            <Link to="/products/new" className="mx-4 rounded my-2 p-2 bg-orange-500 text-white hover:bg-orange-600">Add Product</Link>
        </div>;


        {/* When the loading is true */}
        <ShouldRender when={loading}>
            <Loader />
        </ShouldRender>

        {/* When hasError is true execute this Component */}
        <ShouldRender when={hasError}>
            <Error />
        </ShouldRender>

        {/*This keeps the products in cols and adjust size for small devices*/}
        <div className="grid md:grid-cols-3 sm:grid-cols-2">
            {
                products.map(prod => <ProductItem product={prod} onItemDelete={customRefresh}/>)
            }
        </div>

    </div>
}

export default ProductList;