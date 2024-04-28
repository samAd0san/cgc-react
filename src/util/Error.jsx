function Error({ msg }){
    const errMsg = msg || 'Failed to Load data, please try again';

    return <div>
        <h1 className="bg-red-500 text-white rounded m-4 p-2">{errMsg}</h1> {/* Printing the default or custom message (if specified) */}
    </div>
}

export default Error;