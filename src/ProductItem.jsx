import ShouldRender from "./util/ShouldRender";

// function to display the buttons (Add to cart, buy now, notify me)
function Action({ product }) {
    return <>
        <ShouldRender when={product.inStock}> {/* If the stock is available show 'Add to cart and buy now' */}
            <div className="mt-2 flex">
                {/* This is the Add to cart button + icon */}
                <a href="#" className="mt-1 mb-2 flex text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center w-1/3">
                    Add to cart
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </a>
                {/* This is the Buy now button + icon */}
                <a href="#" className="h-11 mt-1 ml-2 flex text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center w-1/3">
                    Buy now
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </a>
            </div >
        </ShouldRender>
        <ShouldRender when={!product.inStock}> {/* If the stock is not available show 'notify me' */}
            {/* This is the Notify me button + icon */}
            <a href="#" className="mt-1 mb-2 flex text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center w-1/3">
                Notify me
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
            </a>
        </ShouldRender>
    </>
}

// function to display the price of the product
function Price({ product }) {
    // This is a function to calculate the price after the discount
    function calculatePrice() {
        const discountAmount = (product.price * product.discount) / 100
        return product.price - discountAmount;
    }
    return <>
        {/* If the discount is 0 or less than 0 it'll not execute this block, it'll execute the calculatePrice() only */}
        <ShouldRender when={product.discount > 0}> {/* If the discount is zero it'll display price two times so to restrict that we use ShouldRender */}
            <div className="flex items-center justify-between line-through"> {/* We are adding style to strike the price without discount */}
                {/* Actual Price */}
                <span className="text-red-700">${product.price}</span>
            </div>
        </ShouldRender>

        <div>
            {/* Price after discount */}
            <span className="text-xl font-bold text-gray-700">${calculatePrice()}</span>
        </div>
    </>
}

// Displays image, product name, Action, Price
function ProductItem({ product }) {
    return <div className="m-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">

        <a href="#">
            {/* Displaying Image of the Product */}
            <img src={product.image} alt="Product Image" className="p-8 rounded-t-lg" />
        </a>

        <div className="px-5 pb-5">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                    {/* Displaying the name of the product i.e brand and model */}
                    {product.brand} {product.model}
                </h5>
            </a>

            {/* Displaying the Price of the Product (with Discount) */}
            <Price product={product} />
            <Action product={product} />
        </div>

    </div>;
}

export default ProductItem;