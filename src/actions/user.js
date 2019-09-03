export const setUser=(user) =>{
    return{
        type:'SET_USER',
        payload:user
    }
}
export const removeUser=(id) =>{
    return{
        type:'REMOVE_USER',
        payload:id
        
    
    }
}