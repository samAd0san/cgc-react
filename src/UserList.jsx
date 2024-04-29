import { Component } from "react";
import axios from "axios";
import Error from "./util/Error";
import ShouldRender from "./util/ShouldRender";

function UserItem({ user }){ // We are displaying the info of the user
    return <div className="flex items-center mb-4" key={user.login.uuid}>
        {/* Displaying The image of the user */}
        <img width={200} height={200} className="rounded-full" src={user.picture.large}/> 
        <h3 className="ml-4 font-semibold text-white bg-gray-500">{user.name.first} {user.name.last}</h3> {/* Displaying The name of the user */}
    </div>  
}
class UserList extends Component{

    state = { // 2nd
        users : [],
        hasError : false
    }

    render() { // 1st
        return <div>
            <ShouldRender when={this.state.hasError}> {/* On giving the 'when' it'll execute the children component */}
                <Error msg="Customized" /> {/* This is the children of the ShouldRender */}
                <Error /> {/* This is the children of the ShouldRender */}
            </ShouldRender>
            <h1 className="mb-2 text-xl font-semibold text-black">Users</h1>
            {
                // Success scenario
                this.state.users.map(usr => <UserItem user={usr} />) // fetching the info of the user
            }
        </div>
    }

    constructor() { // 3rd
        super();
        axios.get('https://randomuser1.me/api/?results=5')
            // CONDITIONAL RENDERING
            .then(res => { this.setState( { users: res.data.results })}) // result is the field specified in the user
            .catch(() => { this.setState( {hasError : true })})
    }
    
}

export default UserList;