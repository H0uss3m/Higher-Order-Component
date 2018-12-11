import React, {Component} from 'react';
import './LoaderHOC.css';
function LoaderHOC(WrappedComponent) {
  return class LoaderHOC extends Component{
  
    render(){
    
        return this.props.movie.length===0 ? <div><p className="pidesgin" > Movie not Found ... </p><div className="loader"></div></div> : <WrappedComponent {...this.props}/>;
    
      }
  }

}
export default LoaderHOC;