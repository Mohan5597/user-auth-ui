import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/user'
import postsReducer from '../reducers/post'

const configureStore=() =>{
    const store=createStore(combineReducers({
        user:userReducer,
        posts:postsReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore
