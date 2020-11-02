import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import ButtonGroup from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';

class Review extends Component {
    sendFeedback = () => {
        console.log('post worked, info entered')
        axios.post('/api/feedback', this.props.reduxState.howWeDoingReducer)
            .then(response => {
                this.props.history.push('/thankyou');
            }).catch(error => {
                console.log('error in POST', error);
            })
    }
    goBack = (event) => {
        this.props.history.push('/comments')
    }
    goBackToBeginning = (event) => {
        this.props.history.push('/feeling')
    }
    render (){
        return(
            <>
                <h2>Review Your Feedback:</h2>
                <h2>Feelings:{this.props.reduxState.howWeDoingReducer.feeling}</h2>
                <h2>Understanding:{this.props.reduxState.howWeDoingReducer.understanding}</h2>
                <h2>Support:{this.props.reduxState.howWeDoingReducer.support}</h2>
                <h2>Comments:{this.props.reduxState.howWeDoingReducer.comments}</h2>
                <ButtonGroup aria-label="small outlined button group" color="secondary" size="small">
                    <Button onClick={this.sendFeedback}>Submit</Button>
                    <Button onClick={this.goBack}>Back</Button>
                    <Button onClick={this.goBackToBeginning}>Whoops, I need to start over!</Button>
                </ButtonGroup>
            </>
        )
    }
}

const mapStateToProps = (reduxState) => { 
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Review);