import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {
    sendFeedback = () => {
        axios.post('/api/feedback', this.props.reduxState.howWeDoingReducer)
            .then(response => {
                this.props.history.push('/completed');
            }).catch(error => {
                console.log('error in POST', error)
            })
    }
    render (){
        return(
            <>
                <div>Review Your Feedback:</div>
                <div>Feelings:{this.props.reduxState.howWeDoingReducer.feel}</div>
                <div>Understanding:{this.props.reduxState.howWeDoingReducer.understanding}</div>
                <div>Support:{this.props.reduxState.howWeDoingReducer.support}</div>
                <div>Comments:{this.props.reduxState.howWeDoingReducer.comments}</div>
                <button onClick={this.sendFeedback}>Submit</button>
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