export const userAdd=(user)=>{
    return{
        type:'USER_ADD',
        payload:user
    }
}

export const userRemove=(id)=>{
    return{
        type:'USER_REMOVE',
        payload:id
    }
}

export const toggleFullStack=(id)=>{
  return{
        type:'TOGGLE_FULLSTACK',
        payload:id
    }
}

