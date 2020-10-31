import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class Understanding extends Component {
    state = {
        understanding: 0
    }

    addUnderstanding = (event) =>{
        this.props.dispatch({type:'ADD_UNDERSTANDING', payload:this.state.understanding})
        this.props.history.push('/support')
    }

    render(){
        return(
            <div>
                <p>How well are you understanding the content?</p>
                <p>Understanding?</p>
                <input type="number" onChange={(event) => this.setState({understanding:event.target.value})}/>
                <button onClick={this.addUnderstanding}>Next</button>
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