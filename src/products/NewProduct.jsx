import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../util/Error";
import ShouldRender from "../util/ShouldRender";
import axiosInstance from "../util/axios";

function NewProduct() {

    const [product, setProduct] = useState({
        brand: '',
        model: '',
        price: '',
        discount: '',
        inStock: false,
        image: null
    })

    const [hasError, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const onInputChange = (evt) => {
        // Spreads the existing product state and updates the property specified by evt.target.name with the value evt.target.value.
        const newState = { ...product, [evt.target.name]: evt.target.value }
        setProduct(newState);
    }

    const navigate = useNavigate();

    const onFileChange = (evt) => {
        const newState = {...product, image: evt.target.files[0]};
        setProduct(newState);
    }

    const onSaveBtn = async () => {
        try {

            const fd = new FormData();

            for(let key in product) {
                fd.append(key, product[key]);
            }

            const path = `products`
            await axiosInstance().post(path, fd);
            setSuccess(true);
            //  Setting empty strings to all attributes of the product state resets the form fields after successful data submission in the onSave function.
            setProduct({
                brand: '',
                model: '',
                price: '',
                discount: '',
                inStock: false,
                image: null
            })
            // redirects the user to the '/products' route after the successful data submission
            setTimeout(()=>{
                navigate('/products/');
            },1000);
        } catch {
            setError(true);
        }
    }

    return (<div className="m-2 p-2">
        {/* New Product */}
        <h1 className="text-xl font-bold">New Product</h1>

        {/* Faliure (Error) */}
        <ShouldRender when={hasError}>
            <Error msg={'Failed to save data, please try again.'} />
        </ShouldRender>

        {/* Success */}
        <ShouldRender when={success}>
            <div className="p-2 my-4 w-1/2 bg-green-500 text-white rounded">Successfully saved data.</div>
        </ShouldRender>

        {/* Brand */}
        <div className="mb-4">
            <label className="block ml-1 py-1 font-semibold text-gray-700">Brand</label>
            {/* The name attribute specifies the identifier for the input element, while the value attribute specifies the value that is submitted with the form data. */}
            <select name="brand" value={product.brand} onChange={onInputChange} className="border border-gray-500 p-1 rounded w-1/3">
                <option value="" className="text-gray">Select</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Google">Google</option>
                <option value="Realme">Realme</option>
            </select>
            {/* If Not Entered value */}
            <ShouldRender when={!product.brand}>
            <div className="text-red-500 m-1 text-sm">Brand is required</div>
            </ShouldRender>
        </div>

        {/* Model */}
        <div className="mb-4">
            <label className="block py-1 text-l font-semibold text-gray-700">Model</label>
            <input name="model" value={product.model} onChange={onInputChange} placeholder="model" className="border border-gray-500 p-1 rounded w-1/3" type="text" />
            {/* If Not Entered value */}
            <ShouldRender when={!product.model}>
            <div className="text-red-500 m-1 text-sm">Model is required</div>
            </ShouldRender>
            {/* Validations */}
            <ShouldRender when={product.model && product.model.length < 3}>
                <div className="text-red-500 m-1 text-sm">Min 3 chars</div>
            </ShouldRender>
            <ShouldRender when={product.model && product.model.length > 20}>
                <div className="text-red-500 m-1 text-sm">Max 20 chars</div>
            </ShouldRender>
        </div>

        {/* Price */}
        <div className="mb-4">
            <label className="block py-1 font-semibold text-gray-700">Price</label>
            <input name="price" value={product.price} onChange={onInputChange} placeholder="price" className="border border-gray-500 p-1 rounded w-1/3" type="text" />
             {/* If Not Entered value */}
             <ShouldRender when={!product.price}>
            <div className="text-red-500 m-1 text-sm">Price is required</div>
            </ShouldRender>
            {/* Validations */}
            <ShouldRender when={product.price && product.price.length < 3}>
                <div className="text-red-500 m-1 text-sm">Min 3 chars</div>
            </ShouldRender>
            <ShouldRender when={product.price && product.price.length > 20}>
                <div className="text-red-500 m-1 text-sm">Max 20 chars</div>
            </ShouldRender>
        </div>

        {/* Discount */}
        <div className="mb-4">
            <label className="block py-1 font-semibold text-gray-700">Discount</label>
            <input name="discount" value={product.discount} onChange={onInputChange} placeholder="discount" className="border border-gray-500 p-1 rounded w-1/3" type="text" />
             {/* If Not Entered value */}
             <ShouldRender when={!product.discount}>
            <div className="text-red-500 m-1 text-sm">Discount is required</div>
            </ShouldRender>
        </div>

        {/* inStock */}
        <div className="mb-4">
            <label className="block py-1 font-semibold text-gray-700">InStock</label>

            <input name="inStock" value={true} onChange={onInputChange} type="radio" />
            <label className="py-1 m-2 font-semibold text-gray-700">Yes</label>

            <input name="inStock" value={false} onChange={onInputChange} type="radio" />
            <label className="py-1 m-2 font-semibold text-gray-700">No</label>

             {/* If Not Entered value */}
             <ShouldRender when={!product.inStock}>
            <div className="text-red-500 m-1 text-sm">Field input is required</div>
            </ShouldRender>
        </div>

        {/* File Upload */}
        <div className="mb-4">
            <label className="block py-1 font-semibold text-gray-700">File</label>
            <input type="file" onChange={onFileChange}/>
        </div>

        {/* Button (submit) */}
        <div>
            <button disabled={!product.brand || !product.model || !product.price} onClick={onSaveBtn} className="bg-orange-500 hover:bg-orange-600 px-4 rounded py-1 text-white">Save</button>
        </div>
    </div>);
}

export default NewProduct;