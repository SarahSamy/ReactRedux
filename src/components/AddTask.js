import React from 'react';
import {connect} from 'react-redux';
import uuidv4 from 'uuid/v4';
import {addtask} from '../actions/Tasks';


export class AddTask extends React.Component {
    state = {
        text: '',
      }

    handleChange =(e)=> {
        const value= e.target.value;
        this.setState({text:value});
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.text) return;
        const todo = {
            text: this.state.text, completed: false, deleted: false, id: uuidv4()
          };
        this.props.addtask(todo);
        this.setState({ text: '' });
    }
   
    handleDelete =(e)=>{

    }
    render()
    {
        return (
            <>
            <form onSubmit={this.handleSubmit} className="header">
                <h2>My ToDo List :)</h2>
                <input type="text" onChange={this.handleChange} value={this.state.text}></input>
                <button type="submit" className="addBtn">Add</button>
                
            </form>

        </>
        )
    }      
    
}

// mapStateToProps=(state)=> ({
//     //bta5od state wtrga3 props
// //hna msh m7tag 7aga mn el store f msh hst5dm mapStateToProps f h7otha b null
// })
const mapDispatchToProps=(dispatch)=>({ 
    addtask : data => dispatch (addtask(data)),
   
})
export default connect (null,mapDispatchToProps)(AddTask);