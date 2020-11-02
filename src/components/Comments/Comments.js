import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class Comments extends Component{

    state = {
        comments: ""
    }
    
    addComments =(event) => {
        this.props.dispatch({type:'ADD_COMMENTS', payload: this.state.comments})
        this.props.history.push('/review')
    }

    goBack = (event) => {
        this.props.history.push('/support')
    }
    render(){
        return(
            <>
            <p>Would you like to leave any comments?</p>
            <h4>comments?</h4>
            <input type="text" onChange={(event) => this.setState({comments:event.target.value})}/>
            <button onClick={this.addComments}>Next</button>
            <button onClick={this.goBack}>Back</button>
            </>
        )
        
    }
}

const mapStateToProps = (reduxState) => {
    return{
      reduxState
    }
  }
  
  export default connect(mapStateToProps)(Comments);