import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component{


    //key:value
    state = {
       arrJobs: [
           {id: 'abcJob1', title:'Developers',salary:'500'},
           {id: 'abcJob2', title:'Tester',salary:'400'},
           {id: 'abcJob3', title:'Project Manager',salary:'1000'}
       ]
    }

    addNewJob = (job) =>{
        this.setState({
            arrJobs: [...this.state.arrJobs,job]
        })
        console.log('check job from parent: ',job)
    }


    deleteAJob = (job)=>{
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }
    /* 
        JSX => return block
        fragment
    */
    
    
    
    render(){
        console.log('>>> call render: ', this.state)
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />
                <ChildComponent 
                arrJobs = {this.state.arrJobs}
                deleteAJob={this.deleteAJob}
                />
            </>
        )
    }
}

export default MyComponent;