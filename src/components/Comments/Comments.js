import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class Feeling extends Component{

    state = {
        comments: ""
    }
    
    addComments =(event) => {
        this.state.dispatch({type:'ADD_COMMENTS', payload: this.state.comments})
        this.props.history.push('/comments')
    }
    render(){
        return(
            <>
            <p>Would you like to leave any comments?</p>
            <h4>comments?</h4>
            <input onChange={(event) => this.setState({comments:event.target.value})} type="text" placeholder="enter a number"/>
            <button onClick={this.addComments}>Next</button>
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