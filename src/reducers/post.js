const postsReducer=(state=[],action) =>{
    switch(action.type){
        case 'ADD_POST':
            return [...state,action.payload]
        case 'REMOVE_POST':
            return state.filter(post => post._id!==action.payload)
        case 'SET_POSTS':
            return [...action.payload]
        default:
             return [...state] 
    }
   
}
export default postsReducer