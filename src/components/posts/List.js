import React from 'react'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'
import _ from 'lodash'
import PostForm from './Form'
import { startRemovePost, startSetPost} from '../../actions/post'
import {connect} from 'react-redux'

class ListPost extends React.Component{
   
    componentDidMount(){
        if(_.isEmpty(this.props.posts)){
            // axios.get('/posts',{
            //     headers:{'x-auth':localStorage.getItem('userAuth')
            //  }
            // })
            // .then(response =>{
            //     this.props.dispatch(setPosts(response.data))
            //     console.log(response.data)
            // })
            this.props.dispatch(startSetPost())
        }

      
    }
    
    handleRemove=(id) =>{
       this.props.dispatch(startRemovePost(id))
    }
    render(){
        return(
            <div>
                <h2>Listing posts {this.props.posts.length} by {this.props.user.username}</h2>
                <ul>
                    {this.props.posts.map(post =>{
                        return <li key={post._id}><Link to={`/posts/${post._id}`}>{post.title}</Link><button onClick={() =>{
                            const confirmRemove=window.confirm('Are you sure?')
                            if(confirmRemove){
                                this.handleRemove(post._id)
                            }
                        }}>remove</button></li>
                    })}
                </ul>
                <p>{this.props.ownData}</p>
                <PostForm/>
            </div>
        )
    }
}
const mapStateToProps=(state) =>{
    return{ 
        user:state.user,
        posts:state.posts,
        ownData:'some data'
    }
}
export default connect(mapStateToProps)(ListPost) 