import React, { useEffect, useState } from "react";
import ShouldRender from "../util/ShouldRender";
import Error from "../util/Error";
import ProductItem from "./ProductItem";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetail() {

    const [product, setProduct] = useState(null);
    const [hasError, setError] = useState(false);
    const params = useParams();

    useEffect(() => {
        const id = params.id;
        const url = `http://localhost:3000/products/${id}`;
        axios.get(url)
            .then(res => setProduct(res.data))
            .catch(() => setError(true))
    });

    return <div>
        <ShouldRender when={hasError}>
            <Error />
        </ShouldRender>

        <div className="w-h-screen flex items-center justify-center">
            <ShouldRender when={product}>
                <ProductItem product={product} />
            </ShouldRender>
        </div>
    </div>
}

export default ProductDetail;