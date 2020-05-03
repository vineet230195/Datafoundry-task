import React from 'react'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            errorMsg:'',
            error:false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        const {email,password}=this.state
        e.preventDefault()
        if(email!==''&&password!==''){
          this.props.history.push('/task2/sidebar')
      }else{
        this.setState({errorMsg:'invalid input',error:true})
      }
    
    }

    render() {
        return (
            <div className='container'>
                
                <div className='row'>
                <div className='col-md-4 offset-md-4'>
                <h2 className='display-5 text-center'>Login</h2>
                <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type="text" className='form-control' id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    {!this.state.email && this.state.error && <span className='text-danger text-center'>{this.state.errorMsg}</span>}
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" className='form-control' id="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    {!this.state.password && this.state.error && <span className='text-danger text-center'>{this.state.errorMsg}</span>}
                </div>
                    <input type="submit" className='btn btn-primary btn-sm' value="Login" />
                </form>
            </div>
          </div>
        </div>
        )
    }
}

export default Login