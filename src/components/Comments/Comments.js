import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import ButtonGroup from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';

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
            <h2>Would you like to leave any comments?</h2>
            <h4>comments?</h4>
            <input type="text" onChange={(event) => this.setState({comments:event.target.value})}/>
            <ButtonGroup aria-label="small outlined button group" color="secondary" size="small">
                <Button onClick={this.addComments}>Next</Button>
                <Button onClick={this.goBack}>Back</Button>
            </ButtonGroup>
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