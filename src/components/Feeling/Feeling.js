import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class Feeling extends Component{

    state = {
        feel: 0
    }
    
    addFeelings =(event) => {
        this.state.dispatch({type:'ADD_FEELINGS', payload: this.state.feel})
        this.props.history.push('/understanding')
    }
    render(){
        return(
            <>
            <p>How are you feeling today</p>
            <h4>feeling?</h4>
            <input onChange={(event) => this.setState({feel:event.target.value})} type="number" placeholder="enter a number"/>
            <button onClick={this.sendFeelings}>Next</button>
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