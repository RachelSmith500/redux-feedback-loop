import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThankYou extends Component {

    sendThankYou = (event) => {
        this.props.dispatch({ type:'ADD_THANKYOU'})
        this.props.history.push('/feeling')
    }
    
    render() {
        return(
            <div>
                <h2>Feedback has been successfully submitted!</h2>
                <h4>Thank You!</h4>
                <button onClick={this.sendThankYou}>Leave New Feedback</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => { 
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(ThankYou);