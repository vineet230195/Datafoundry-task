import React from 'react'
import { connect } from 'react-redux'
import {userRemove,toggleFullStack} from '../action/UserAction'

function UserTable(props){
    
    const handleClick=(id)=>{
        props.dispatch(userRemove(id))
    }

    const handleChecked=(id)=>{
        props.dispatch(toggleFullStack(id))
    }

    return(
        <div>
             <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Full Stack Developer</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.users.map(user=>{
                                return(
                                    <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td><input type='checkbox' checked={user.fulllStack} onChange={()=>{handleChecked(user.id)}}/></td>
                                    <td><button className="btn btn-danger" onClick={()=>{handleClick(user.id)}}>Remove</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table> 
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        users:state.users
    }
}

export default connect(mapStateToProps)(UserTable)