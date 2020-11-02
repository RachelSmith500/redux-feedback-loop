import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import ButtonGroup from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';

class Support extends Component{

    state = {
        support: 0
    }

    addSupport = (event) => {
        if(this.state.support !== 0){
        this.props.dispatch({type:'ADD_SUPPORT', payload:this.state.support})
        this.props.history.push('/comments')
        }else {
            alert('Please select a number between 1 and 5')
        }
    }

    goBack = (event) => {
        this.props.history.push('/understanding')
    }

    render(){
        return(
            <div>
                <h2>How well are you being supported?</h2>
                <h4>Support?</h4>
                <input type="number" onChange={(event) => this.setState({support:event.target.value})}/>
                <ButtonGroup aria-label="small outlined button group" color="secondary" size="small">
                    <Button onClick={this.addSupport}>Next</Button>
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
  
export default connect(mapStateToProps)(Support);