import React from 'react'
import {connect} from 'react-redux'
import {userAdd} from '../action/UserAction'
import 'bootstrap/dist/css/bootstrap.css'

class UserForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            age:'',
            errorMsg:'',
            error:false
        }
    }
handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
        
    })
   
}

handleSubmit=(e)=>{
    const {name,age}=this.state
    e.preventDefault()
    if(name!==''&&age!==''){
        const formData={
            id:Number(new Date()),
            name,
            age,
            fullStack:false
        }
        this.setState({name:'',age:'',error:false})
        
      
        this.props.dispatch(userAdd(formData))
    }else{
        this.setState({errorMsg:'invalid input',error:true})
    }
    
}
    render(){
        return(
            <div className='container'>
                <div className='row'>
                <div className='col-md-4 offset-md-4'>
                <h2 className='display-5 text-center'>Add User</h2>
                <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' className='form-control' id='name' name='name' value={this.state.name} onChange={this.handleChange}/>
                    {!this.state.name && this.state.error && <span className='text-danger'>{this.state.errorMsg}</span>}
                </div>
                <div className='form-group'>
                    <label htmlFor='age'>Age</label>
                    <input type='text'className='form-control'  id='age' name='age' value={this.state.age} onChange={this.handleChange}/>
                    {!this.state.age && this.state.error && <span className='text-danger'>{this.state.errorMsg}</span>}
                </div>
                    <input type='submit' className="btn btn-primary"/>
                </form>
                </div>
                </div>
            </div>
        )
    }
}


export default connect()(UserForm)