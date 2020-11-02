// import React, { Component } from 'react';
// import axios from 'axios';
// import { connect } from 'react-redux';
// import Feeling from '../Feeling/Feeling';

// class Admin extends Component {
//     state = {
//         feedBackList: [],
//       }
//       componentDidMount() {
//         this.getFeedback();
//       };
    
//       getFeedback = () => {
//         axios.get('/api/feedback')
//         .then(response => {
//           this.setState({
//             feedBackList: response.data
//           })
//         }).catch(error => {
//           console.log('error in GET:', error)
//         })
//       };
    
//     render(){
//         return (
//             <>
           
//             <table>
//                 <thead>
//                     <th>Feelings</th><th>Understanding</th><th>Support</th><th>Comments</th>
//                     <tr>
//                         <td>{}</td><td>{}</td><td>{}</td><td>{}</td>
//                         </tr>
//                 </thead>

//             </table>
//             </>
//         )

//     }

// }

// const mapStateToProps = (reduxState) => {
//     return {
//       reduxState
//     }
//   }
  
// export default connect(mapStateToProps)(Admin);