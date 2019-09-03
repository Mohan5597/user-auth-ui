import axios from '../config/axios'

export const setPosts =(posts) =>{
    return{
        type:"SET_POSTS",
        payload:posts
    }
}

export const startSetPost=() =>{
    return (dispatch) =>{
        axios.get('/posts',{
            headers:{'x-auth':localStorage.getItem('userAuth')
         }
        })
        .then(response =>{
             dispatch(setPosts(response.data))
        })
    }
}

export const addPost =(post) =>{
    return {
        type:'ADD_POST',
        payload:post
    }
}

export const startAddPost =(formData) =>{
    return (dispatch) =>{
        axios.post('/posts',formData,{
            headers:{'x-auth':localStorage.getItem('userAuth')}
        })
        .then(response =>{
           dispatch(addPost(formData))
        })
    }
}



export const removePost =(id) =>{
    return{
        type:'REMOVE_POST',
        payload:id
    }
}

export const startRemovePost=(id) =>{
    return (dispatch) =>{
        axios.delete(`/posts/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('userAuth')
            }
        })
        .then(response =>{
           dispatch(removePost(id))
        })
    } 
}