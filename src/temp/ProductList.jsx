
// Container Component
function ProductList(){
    const items = [
        { id : 1, brand : 'Apple', model : 'Iphone 13', price : 1000, image : 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-2.jpg'},
        { id : 2, brand : 'Apple', model : 'Iphone 14', price : 1100, image : 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-2.jpg'},
        { id : 3, brand : 'Apple', model : 'Iphone 15', price : 1200, image : 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-2.jpg'},
    ];
    
     return (<div>
        <h1>Products</h1>
        {/* {
            items.map(item => <div>
                <h3> {item.brand} {item.model}</h3>
                <img width = "200" height="200" src={item.image} alt="Not Found" />
                <div>$ {item.price}</div>
                </div>)
            } */}

        <table className="w-full text-sm text-left text-black-500 dark:text-black-400" border={1} width="100%">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-dark-400">
                <tr className="bg-white border-t border-b dark:border-gray-700">
                    <th>Id</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Price</th>
                    <th>Image</th>
                </tr>
            </thead>

            <tbody style={{ textAlign: 'center' }}>
                {items.map(it => <ProductItem item={it}/>)}
            </tbody>
        </table>
     </div>);
}

// Presentation Component
function ProductItem({item}){
    return <tr className="bg-white border-b dark:border-gray-700">
        <td>{item.id}</td>
        <td>{item.brand}</td>
        <td>{item.model}</td>
        <td>{item.price}</td>
        <td><img src={item.image} width="100" height="100"/></td>
    </tr>
}

export default ProductList;