import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../util/Error";
import ShouldRender from "../util/ShouldRender";

function NewProduct() {

    const [product, setProduct] = useState({
        brand: '',
        model: '',
        price: '',
        discount: '',
        inStock: false
    })

    const [hasError, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const onInputChange = (evt) => {
        // Spreads the existing product state and updates the property specified by evt.target.name with the value evt.target.value.
        const newState = { ...product, [evt.target.name]: evt.target.value }
        setProduct(newState);
    }

    const navigate = useNavigate();

    const onSaveBtn = async () => {
        try {
            const url = `http://localhost:3000/products`
            await axios.post(url, product);
            setSuccess(true);
            //  Setting empty strings to all attributes of the product state resets the form fields after successful data submission in the onSave function.
            setProduct({
                brand: '',
                model: '',
                price: '',
                discount: '',
                inStock: false
            })
            // redirects the user to the '/products' route after the successful data submission
            navigate('/products/')
        } catch {
            setError(true);
        }
    }

    return (<div className="m-2 p-2">
        {/* New Product */}
        <h1 className="text-xl font-bold">New Product</h1>

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
        </div>

        {/* Model */}
        <div className="mb-4">
            <label className="block py-1 text-l font-semibold text-gray-700">Model</label>
            <input name="model" value={product.model} onChange={onInputChange} placeholder="model" className="border border-gray-500 p-1 rounded w-1/3" type="text" />
        </div>

        {/* Price */}
        <div className="mb-4">
            <label className="block py-1 font-semibold text-gray-700">Price</label>
            <input name="price" value={product.price} onChange={onInputChange} placeholder="price" className="border border-gray-500 p-1 rounded w-1/3" type="text" />
        </div>

        {/* Discount */}
        <div className="mb-4">
            <label className="block py-1 font-semibold text-gray-700">Discount</label>
            <input name="discount" value={product.discount} onChange={onInputChange} placeholder="discount" className="border border-gray-500 p-1 rounded w-1/3" type="text" />
        </div>

        {/* inStock */}
        <div className="mb-4">
            <label className="block py-1 font-semibold text-gray-700">InStock</label>

            <input name="inStock" value={true} onChange={onInputChange} type="radio" />
            <label className="py-1 m-2 font-semibold text-gray-700">Yes</label>

            <input name="inStock" value={false} onChange={onInputChange} type="radio" />
            <label className="py-1 m-2 font-semibold text-gray-700">No</label>
        </div>

        {/* Button (submit) */}
        <div>
            <button onClick={onSaveBtn} className="bg-orange-500 hover:bg-orange-600 px-4 rounded py-1 text-white">Save</button>
        </div>

        {/* Faliure (Error) */}
        <ShouldRender when={hasError}>
            <Error msg={'Failed to save data, please try again.'} />
        </ShouldRender>

        {/* Success */}
        <ShouldRender when={success}>
            <div className="p-2 my-4 w-1/2 bg-green-500 text-white rounded">Successfully saved data.</div>
        </ShouldRender>
    </div>);
}

export default NewProduct;