import React from 'react'
import {connect} from 'react-redux'
import UserTable from './UserTable'
import UserForm from './UserForm'



function UserListing(props){
    return(
        <div className='container'>
            <h2 className='display-5 text-center'>User Listing- {props.users.length} </h2>
            <UserTable/>
            <br/>
            <UserForm/>
            
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        users:state.users
    }
}
export default connect(mapStateToProps)(UserListing)