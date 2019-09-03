import React from 'react'
import axios from '../../config/axios';
import {startAddPost} from '../../actions/post'
import {connect} from 'react-redux'

class PostForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:''

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
            title:this.state.title
        }
        // axios.post('/posts',formData,{
        //     headers:{'x-auth':localStorage.getItem('userAuth')}
        // })
        // .then(response =>{
        //     console.log(response.data)
        //     this.props.dispatch(addPost(response.data))
        // })
        this.props.dispatch(startAddPost(formData))
        console.log(formData)
        this.setState({title:''})
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text'
                    placeholder='enter the title'
                    value={this.state.title}
                    name={'title'}
                    onChange={this.handleChange}/>

                    <input type='submit' />
                </form>
            </div>
        )
    }
}
export default connect()(PostForm)