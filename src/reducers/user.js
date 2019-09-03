const userReducer=(state={},action) =>{
    switch(action.type){
        case 'SET_USER':
            return {...action.payload}
        case 'REMOVE_USER':
            return {}
        default:
            //return Object.assign({},state)
            return {...state}
    }

}
export default userReducer