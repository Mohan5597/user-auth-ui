import React from 'react'
import axios from 'axios'
import _ from 'lodash'
import {connect} from 'react-redux'
import {setUser} from '../../actions/user' 


class Profile extends React.Component{

     componentDidMount(){
       // if(Object.keys(this.props.user).length==0){
           if(_.isEmpty(this.props.user)){
        axios.get('http://dct-user-auth.herokuapp.com/users/account',{
            headers:{
                'x-auth':localStorage.getItem('userAuth')
            }
        })
        .then(response =>{
            //this.setState({
            //    user:response.data
            //})
            this.props.dispatch(setUser(response.data))
        })
        .catch(err =>{
            this.props.history.push('/users/login')
        })
    }
}
    render(){
        console.log(this.props.user)
        return(
            <div>
                name-{this.props.user.username}

                <h3>Total posts written -{this.props.posts.length}</h3>
            </div>
        )
    }
}
const mapStateToProps=(state) =>{
    return{
        user:state.user,
        posts:state.posts
    }
}
export default connect(mapStateToProps)(Profile)