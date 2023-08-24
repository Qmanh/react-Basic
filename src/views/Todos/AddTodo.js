import React from "react";

import { toast } from 'react-toastify';

class AddTodo extends React.Component{

    state={
        title:''
    }

    handleOnchangeTitle=(event)=>{
        this.setState({
            title:event.target.value
        })
    }
    handeAddTodo =()=>{
        if(!this.state.title){
            toast.error('missing title')
            return;
        }
        let todo = {
            id: Math.floor(Math.random()*10000),
            title: this.state.title
        }
        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }
    render(){
        let { title } = this.state;
        return(
            <div className='add-todo'>
                <input type="text" onChange={(event)=>this.handleOnchangeTitle(event)} value = {title}/>
                <button type="button" className='add'
                onClick={()=> this.handeAddTodo()}>Add</button>
            </div>
        )
    }
}

export default AddTodo;