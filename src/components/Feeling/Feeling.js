import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class Feeling extends Component{

    state = {
        feeling: 0
    }
    
    addFeelings =(event) => {
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
            <p>How are you feeling today</p>
            <h4>feeling?</h4>
            <input type="number" onChange={(event) => this.setState({feeling:event.target.value})}/>
            <button onClick={this.addFeelings}>Next</button>
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