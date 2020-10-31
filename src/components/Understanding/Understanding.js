import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class Understanding extends Component {
    state = {
        understanding: 0
    }
}

const mapStateToProps = (reduxState) => {
    return{
      reduxState
    }
  }
  export default connect(mapStateToProps)(Understanding);