function redruser(state = 
    {
        modalWindow : false,
       
    },
    action){

    switch(action.type){
        case 'modalWindow' :
            return {...state, modalWindow : action.modalWindow}

        default : 
        return state
    }

}

export default redruser