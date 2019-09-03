import React from 'react'
import _ from 'lodash'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import {connect} from 'react-redux'


import Registration from './components/users/registrationForm'
import Login from './components/users/loginForm'
import Logout from './components/users/logout'
import Profile from './components/users/Profile'
import Account from './components/users/Account'
import ListPost from './components/posts/List'
import ShowPost from './components/posts/Show'

function App(props){
 
    
        return(
            <BrowserRouter>
            <div>
                <ul>
                    {
                        !_.isEmpty(props.user) ? (
                            <div>
                            <li><Link to='/users/posts'>Posts</Link></li>
                            <li><Link to='/users/profile'>Profile</Link></li>
                            <li><Link to='/users/account'>Account</Link></li>
                            <li><Link to='/users/logout'>Logout</Link></li>  
                            </div>
                        ):(
                            <div>
                            <li><Link to='/users/register'>Register</Link></li>
                            <li><Link to='/users/login'>Login</Link></li>
                             </div>
                        )
                    }
                  
                </ul>

                <Route path='/users/register' component={Registration}/>
                <Route path='/users/login' component={Login}/>
                <Route path='/users/profile' component={Profile} />
                <Route path='/users/account' component={Account} />
                <Route path='/users/logout' component={Logout} />
                <Route path='/users/posts' component={ListPost}/>
                <Route path='/posts/:id' component={ShowPost}/>
                

            </div>
            </BrowserRouter>
            
        )
    
}
const mapStateToProps=(state) =>{
    return{
        user:state.user
    }
}
export default connect(mapStateToProps)(App)