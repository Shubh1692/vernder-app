import React, { Component } from 'react';
import NoTaskAdded from '../Components/NoTaskAdded';
import TaskList from '../Components/TaskList';
import { connect } from 'react-redux';
import {get} from 'lodash'
import { constants } from '../Helper/Constant';


class ListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[]
         }
    }
    
    componentDidMount() {

      this.getUserDetails();
      // dispatch the list task action for getting task list
     
      this.props.dispatch({type:constants.LIST_TASK,payload:{message:'task list get succesfully'}})
    }
    getUserDetails = async() => {
     this.setState({list: []});
    }
   
    render() { 
      
        const {list} = this.state;
        return ( 
            <div className="listCard">
                {list.length === 0 ? <NoTaskAdded/> :  <TaskList list={list}/>}
               
            </div>
         );
    }
}
// get reducer state
const mapStateToProps = (state) => {
    return {
       taskList:state
    }
  }
export default connect(mapStateToProps)(ListContainer);