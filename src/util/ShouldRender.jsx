function ShouldRender({ children,when }){
    // If when is true it'll return 'children', if it is false it will return null
    return when ? children : null;
}

export default ShouldRender;