// Presentation Component
function ProductItem({item}){
    return <tr>
        <td>{item.id}</td>
        <td>{item.brand}</td>
        <td>{item.model}</td>
        <td>{item.price}</td>
        <td><img src={item.image} width="100" height="100"/></td>
    </tr>
}

// Container Component
function ProductList(){
    const items = [
        { id : 1, brand : 'Apple', model : 'Iphone 13', price : 1000, image : 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-2.jpg'},
        { id : 1, brand : 'Apple', model : 'Iphone 14', price : 1100, image : 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-2.jpg'},
        { id : 1, brand : 'Apple', model : 'Iphone 15', price : 1200, image : 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-2.jpg'},
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

        <table className="centered-table" border={1} width="100%">
            <thead>
                <tr>
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

export default ProductList;