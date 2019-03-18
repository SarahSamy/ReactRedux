import React from 'react';
import {connect} from 'react-redux';
import {deltask} from '../actions/Tasks';
import {comtask} from '../actions/Tasks';

 class taskCard  extends React.Component {

    deleteTask =()=>{
        this.props.deltask(this.props.id)
    }
    
    completeTask=()=>{
        this.props.comptask(this.props.id)
    }
    render(){
        return(
            <>
            {
                
                    <>
                    
                     <p >
                         {this.props.text}
                     </p>
                     <button onClick={this.completeTask} >Completed</button>
                    <button onClick={this.deleteTask} >X</button>
                     </>
                     
            }
            </>
        )
    }
   

}


const mapDispatchToProps=(dispatch)=>({ 
    deltask : id => dispatch (deltask(id)),
    comptask:id => dispatch(comtask(id))
})
 export default connect (null,mapDispatchToProps)(taskCard);