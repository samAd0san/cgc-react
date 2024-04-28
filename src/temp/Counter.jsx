import React from "react";

// stateful component
class Counter extends React.Component {

    state = {
        count : 0
    }

    onInc = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    onDec = () => {
        this.setState({
            count : this.state.count - 1
        })
    }

    render(){
        return <div>
            <h1>Counter : {this.state.count} </h1>
            <button className="bg-orange-500 text-white m-1 px-2 py-1 hover:bg-orange-600 rounded" onClick={this.onInc}>+</button>
            <button className="bg-orange-500 text-white m-1 px-2 py-1 hover:bg-orange-600 rounded" onClick={this.onDec}>-</button>
        </div>
    }
}

export default Counter;