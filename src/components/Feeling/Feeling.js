import React, { Component } from 'react';
import { connect } from 'react-redux'; 


//import Material UI
import Button from '@material-ui/core/Button';


class Feeling extends Component{

    state = {
        feeling: 0
    }
    
    addFeelings =(event) => {
        if(this.state.feeling!== 0){
        this.props.dispatch({type:'ADD_FEELINGS', payload: this.state.feeling})
        this.props.history.push('/understanding')
        }else{
            alert('Please select a number between 1 and 5')
        }
    }
    render(){
        return(
            <>
            <h2>How are you feeling today?</h2>
            <h4>feeling?</h4>
            <input type="number" onChange={(event) => this.setState({feeling:event.target.value})}/>
            <Button size="small" color="secondary" onClick={this.addFeelings}>Next</Button>
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