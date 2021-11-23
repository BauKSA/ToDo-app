import React from "react";
import './todos.css';

class Todo extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            todos: []
        }

        this.create = ()=>{
            let input = document.getElementById('input-create');
            let value = input.value;
            input.value = "";
            if(value !== ""){
                let newArray = this.state.todos;
                newArray.push(value);
                this.setState({
                    todos: newArray
                })
            }
        }

        this.delete = (e)=>{
            let index = e.target.id;
            let newArray = this.state.todos;
            newArray.splice(index, 1);
            this.setState({
                todos: newArray
            })
        }
    }

    render(){
        return(
            <div className="main-container">
                <div className="container">
                    <div className="bar-container">
                        <span className="title">To Do APP</span>
                        <span className="input-container">
                            <input id="input-create" className="input-class" type="text" required={true} placeholder="New To Do" />
                            <button onClick={this.create} className="create-button">CREATE</button>
                        </span>
                    </div>
                    <div className="todo-container">
                        {
                            this.state.todos.map((todo)=>{
                                return(
                                    <div className="state-container" key={todo}>
                                        <button onClick={this.delete} className="delete-button" id={this.state.todos.indexOf(todo)}>Delete</button>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <div className="todo">
                                            {todo}
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Todo;