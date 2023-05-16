import React, { Component } from 'react';
import homeImg from '../../assets/images/blockchain.jpg'; 
import ScriptTag from 'react-script-tag';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }


    render() {
      
        return (
          
          <div className='align-center' >
            {/* <img className='responsive' src={homeImg} /> */}
            <div className='responsivetexta' >
              
            <b>Know Your Student</b> 
            <br/>
            <h2>A Blockchain Solution</h2>
            
            </div>
            {/* <div className='responsivetextb'>By Group </div> */}
          </div>

        );
    }
}

