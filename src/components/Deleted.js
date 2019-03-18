import React from 'react';
import {connect} from 'react-redux';
import {deltask} from '../actions/Tasks';


export class DeleteTask extends React.Component {

undo =(e)=>{
this.props.undoDeleTask(e.target.dataset.id);
}
    render(){
        return(
            <>
            
                 
                     {this.props.data.filter(t=> (t.deleted===true)).map(i=>
                        
                        <div key = {i.id}> 
                            
                         <p  >{i.text}</p>
                           <button onClick={this.undo} data-id={i.id}>undo</button>
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
    undoDeleTask : id => dispatch (deltask(id)),
    
})
export default connect (mapStateToProps,mapDispatchToProps)(DeleteTask);

















// state={
//     newData = []
// }

// handleChange =(e)=> {
//    const value= e.target.value;
//    this.setState({newData:value});
// }

// handleSubmit=(e)=>{
//    e.preventDefault();
//    if(!this.state.text) return;
//    const del = {
//        text: this.state.text, completed: true, deleted: true, id: uuidv4()
//      };
//    this.props.deltask(del);
//    this.setState({ text: '' });
// }

// handleDelete=(e)=>{

// }

// render()
// {
//    return(
//        <form onSubmit={this.handleSubmit} className="header">
       
      
      
//    </form>
//    )
// }
// }