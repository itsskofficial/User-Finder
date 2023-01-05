import { Component } from "react/cjs/react.production.min";

class ErrorBoundary extends Component {

    constructor() {
        super()
        th
    }
    componentDidCatch(error) { 
        this.setState({hasError:true})
    }
    
    render() {
        return this.props.children
    }
        
}

export default ErrorBoundary