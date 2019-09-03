import React from 'react'
import _ from 'lodash'
import {removeUser} from '../../actions/user'
import {connect} from 'react-redux'

function Logout(props){
    if(!_.isEmpty(props.user)){
        localStorage.removeItem('userAuth')
        //  props.history.push('/users/login')
         props.dispatch(removeUser())

    }
    console.log(props)
    
    return(
        <div>
            <p>you have been logged out</p>
        </div>
    )
}
const mapStateToProps=(state) =>{
    return{
        user:state.user
    }
}

export default connect(mapStateToProps)(Logout)