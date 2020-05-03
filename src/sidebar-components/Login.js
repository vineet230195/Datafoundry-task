import React from 'react'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // const formData = {
        //     email: this.state.email,
        //     password: this.state.password
        // }
        //   this.props.history.push('/task2/sidebar')
    
    
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
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" className='form-control' id="password" name="password" value={this.state.password} onChange={this.handleChange} />
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