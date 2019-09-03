import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import axios from './config/axios'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {setUser} from './actions/user'
import {setPosts} from './actions/post'

const store=configureStore()

store.subscribe(() =>{
    console.log(store.getState())
})

//write code to handle page reload
if(localStorage.getItem('userAuth')){
    axios.get('/users/account',{
    headers:{
        'x-auth':localStorage.getItem('userAuth')
    }
})
.then(response =>{
    //this.setState({
    //    user:response.data
    //})
    store.dispatch(setUser(response.data))
})

axios.get('/posts',{
    headers:{'x-auth':localStorage.getItem('userAuth')
 }
})
.then(response =>{
    store.dispatch(setPosts(response.data))
    console.log(response.data)
})

}

const jsx=(
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))