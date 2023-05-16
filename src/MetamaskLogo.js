import React, { Component } from 'react';
import ModelViewer from 'metamask-logo';


class MetamaskLogo extends Component
 {
   componentDidMount(){
     this.viewer= ModelViewer(
       {
         pxNotRatio:true,
         height:150,
         width:150,
         followMouse:true


       }
     );
     this.el.appendChild(this.viewer.container);
      
   }
   componentWillUnmount(){
     this.viewer.startAnimation();
   }

   render(){
     return[
      <div
      style={{position:"absolute" , tops:"50%", left:"5%"}}
      ref={el=>(this.el=el)}
     />

     ]
   }
 }
 
 export default MetamaskLogo;

