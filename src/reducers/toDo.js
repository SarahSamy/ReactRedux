const TaskReducer =(state,action)=>{
    switch(action.type){
        case 'Add_Task':
        return {...state, data:[...state.data,action.data,]};
           
         case 'Delete_Task':
        let delTask= state.data.find(item=>
          ( item.id=== action.id)) ;
           delTask.deleted=!(delTask.deleted);
         return {...state, data:[...state.data]};

            case 'Complete_Task':
            let comTask= state.data.find(item=>
                ( item.id=== action.id)) ;
                comTask.completed=!( comTask.completed);
               return {...state, data:[...state.data]};


        default:
        return state;

    }

   
    
}
export default TaskReducer;