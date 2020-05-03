const initialState=[]


const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'USER_ADD':{
            return [...state,action.payload]
        }

        case 'USER_REMOVE':{
            return state.filter(user=> user.id!==action.payload)
        }

        case 'TOGGLE_FULLSTACK':{
            return state.map(user=>{
                if(user.id===action.payload){
                    return {...user,fullStack:!user.fullStack}
                }else{
                    return{...user}
                }
            })
        }
        
        default:{
            return [...state]
        }
    }
}

export default userReducer