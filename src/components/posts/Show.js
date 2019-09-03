import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

 function ShowPost(props){
     return(
         <div>
            <h2>{props.post.title}</h2>
            <Link to='/users/posts'>back</Link>
         </div>
     )

 }
 const mapStateToProps=(state,props) =>{
     return{
        post:state.posts.find(post => post._id ===props.match.params.id)
     }
      
 }
 export default connect(mapStateToProps)(ShowPost)