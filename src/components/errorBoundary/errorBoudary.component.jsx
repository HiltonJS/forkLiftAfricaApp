import React,{Component} from 'react'
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    // static getDerivedStateFromError(error) {
    //   // Update state so the next render will show the fallback UI.
    //   return { hasError: true };
    // }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
    return { hasError: true };
    }
    render() {
      if (this.state.hasError) {
    
        return (<Link to="/">Go Home .....opps</Link>)
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary