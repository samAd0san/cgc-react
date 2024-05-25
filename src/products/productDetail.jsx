import React, { useEffect, useState } from "react";
import ShouldRender from "../util/ShouldRender";
import Error from "../util/Error";
import ProductItem from "./ProductItem";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../util/axios";

function ProductDetail() {

    const [product, setProduct] = useState(null);
    const [hasError, setError] = useState(false);
    const params = useParams();

    const navigate = useNavigate();

    const customRefresh = (id) => { // navigating to the /products page on deleting a product from productdetail
        console.log('Deleted id is', id);
        fetchData();
        navigate('/products');
    }

    const fetchData = () => {
        try {
            const id = params.id;
            const path = `/products/${id}`;
            axiosInstance().get(path)
                .then(res => setProduct(res.data))
                .catch(() => setError(true))
        } catch (err) {
            setError(true);
        }
    }

    useEffect(() => {
        fetchData();
    });

    return <div>
        {/* Error */}
        <ShouldRender when={hasError}>
            <Error />
        </ShouldRender>

        {/* Display the product */}
        <div className="w-h-screen flex items-center justify-center">
            <ShouldRender when={product}>
                <ProductItem product={product} onItemDelete={customRefresh} />
            </ShouldRender>
        </div>
    </div>
}

export default ProductDetail;