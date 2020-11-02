import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

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
                <div>Review Your Feedback:</div>
                <div>Feelings:{this.props.reduxState.howWeDoingReducer.feeling}</div>
                <div>Understanding:{this.props.reduxState.howWeDoingReducer.understanding}</div>
                <div>Support:{this.props.reduxState.howWeDoingReducer.support}</div>
                <div>Comments:{this.props.reduxState.howWeDoingReducer.comments}</div>
                <button onClick={this.sendFeedback}>Submit</button>
                <button onClick={this.goBack}>Back</button>
                <button onClick={this.goBackToBeginning}>Whoops, I need to start over!</button>

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