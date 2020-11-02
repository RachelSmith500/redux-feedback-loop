import React, { Component } from 'react';
import { connect } from 'react-redux'; 


//import Material UI
import Button from '@material-ui/core/Button';


class Feeling extends Component{
    //defining state 
    state = {
        feeling: 0
    }
    
    addFeelings =(event) => {
         //if no data is submitted please send an alert, and don't allow the page to advance 
        //otherwise push the information to history and advance to the next page
        //this sends our data off to be stored in the reducer
        if(this.state.feeling!== 0){
        this.props.dispatch({type:'ADD_FEELINGS', payload: this.state.feeling})
        this.props.history.push('/understanding')
        }else{
            alert('Please select a number between 1 and 5')
        }
    }
    render(){
        return(
            <>
            <h2>How are you feeling today?</h2>
            <h4>feeling?</h4>
            {/* below is our input with an event function that grabs our data from the input and stores it in setState */}
            <input type="number" onChange={(event) => this.setState({feeling:event.target.value})}/>
            {/* this is our button that is triggered by click to run the function sendFeelings  */}
            <Button size="small" color="secondary" onClick={this.addFeelings}>Next</Button>
            </>
        )
        
    }
}

const mapStateToProps = (reduxState) => {
    return{
      reduxState
    }
  }
  
  export default connect(mapStateToProps)(Feeling);