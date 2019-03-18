import React from 'react';
import {connect} from 'react-redux';
import {comtask} from '../actions/Tasks';
import {deltask} from '../actions/Tasks';

export class CompleteTask extends React.Component {

    undo =(e)=>{
        this.props.undoComplTask(e.target.dataset.id);
        }


    deleteTask =(e)=>{
            this.props.deletask(e.target.dataset.id)
        }
    render(){
        return(
            <>
            
                 
                     {this.props.data.filter(t=> (t.completed===true)&& (t.deleted===false)).map(i=>
                        
                        <div  key = {i.id}>
                            
                         <p  text={i.text}>{i.text}</p>
                         <button  onClick={this.undo} data-id={i.id} >undo</button>
                         <button  onClick={this.deleteTask} data-id={i.id} >Delete</button>
                        </div>
                           
                           )}
                     
               
                  
              
            </>
        )
    }

}

const mapStateToProps=(state)=>({ 
    data : state.data
    
 })

 const mapDispatchToProps=(dispatch)=>({ 
    undoComplTask : id => dispatch (comtask(id)),
    deletask : id => dispatch (deltask(id))
})
 
 export default connect (mapStateToProps,mapDispatchToProps)(CompleteTask);