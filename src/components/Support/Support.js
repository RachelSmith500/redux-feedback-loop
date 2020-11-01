import React, { Component } from 'react';
import { connect } from 'react-redux'; 


class Support extends Component{

    state = {
        support: ''
    }

    addSupport = (event) => {
        this.props.dispatch({type:'ADD_SUPPORT', payload:this.state.support})
        this.props.history.push('/comments')
    }
    render(){
        return(
            <div>
                <p>How well are you being supported?</p>
                <p>Support?</p>
                <input type="number" onChange={(event) => this.setState({support:event.target.value})}/>
                <button onClick={this.addSupport}>Next</button>
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