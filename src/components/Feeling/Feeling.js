import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class Feeling extends Component{
    render(){
        return(
            <>
            <p>How are you feeling today</p>
            <button onClick={()=>this.props.history.push('/feelings')}>Next</button>
            </>
        )
        
    }
}

const mapStateToProps = (reduxState) => {
    return{
      reduxState
    }
  }
  
  export default connect(mapStateToProps)(Feeling);