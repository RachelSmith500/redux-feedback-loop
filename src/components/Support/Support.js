import React, { Component } from 'react';
import { connect } from 'react-redux'; 


class Support extends Component{

    state = {
        support: ''
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
                <p>How well are you being supported?</p>
                <p>Support?</p>
                <input type="number" onChange={(event) => this.setState({support:event.target.value})}/>
                <button onClick={this.addSupport}>Next</button>
                <button onClick={this.goBack}>Back</button>
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