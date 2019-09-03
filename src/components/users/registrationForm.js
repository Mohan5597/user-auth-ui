import React from 'react'
import axios from 'axios'

class Registration extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            password:'',
            errorMsg:'',
            successMsg:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(e){
        e.persist()
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const formData={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        axios.post('http://dct-user-auth.herokuapp.com/users/register',formData)
             .then(response =>{
                 if(response.data.hasOwnProperty('errors')){
                     this.setState({
                         errorMsg:response.data.message
                     })
                 }else{
                     this.setState({
                         successMsg:'successfully registered',
                         username:'',
                         email:'',
                         password:'',
                         errorMsg:''
                         

                     })
                 }
             })
             .catch(err =>{
                 console.log(err)
             })
    }
    render(){
        return(
            <div>
                <h2>Registration</h2>
                {this.state.errorMsg && <p>{this.state.errorMsg}</p>}
                {this.state.successMsg && <p>{this.state.successMsg}</p>}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        UserName
                        <input type='text' value={this.state.username} onChange={this.handleChange} name='username'/>
                    </label><br/>
                    <label>
                        Email
                        <input type='email' value={this.state.email} onChange={this.handleChange} name='email'/>
                    </label><br/>
                    <label>
                        Password
                        <input type='text' value={this.state.password} onChange={this.handleChange} name='password'/>
                    </label><br/>
                    <input type='submit' value='register' />
                </form>


            </div>
        )
    }
}
export default Registration