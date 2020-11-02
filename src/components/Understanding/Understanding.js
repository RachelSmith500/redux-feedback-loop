import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import ButtonGroup from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';

class Understanding extends Component {
    state = {
        understanding: 0
    }
    
    addUnderstanding = (event) =>{
        if(this.state.understanding !== 0) {
        this.props.dispatch({type:'ADD_UNDERSTANDING', payload:this.state.understanding})
        this.props.history.push('/support')
        }else {
            alert('Please select a number between 1 and 5')
        }
    }
// below is my back button it allows the user to go back and change their answers 
    goBack = (event) => {
        this.props.history.push('/feeling')
    }

    render(){
        return(
            <div>
                <h2>How well are you understanding the content?</h2>
                <h4>Understanding?</h4>
                <input type="number" onChange={(event) => this.setState({understanding:event.target.value})}/>
                <ButtonGroup aria-label="small outlined button group" color="secondary" size="small">
                    <Button onClick={this.addUnderstanding}>Next</Button>
                    <Button onClick={this.goBack}>Back</Button>
                </ButtonGroup>
            </div>

        )
    }
}
const mapStateToProps = (reduxState) => {
    return{
      reduxState
    }
  }
  export default connect(mapStateToProps)(Understanding);