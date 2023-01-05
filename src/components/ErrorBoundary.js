import { Component } from "react/cjs/react.production.min";

class ErrorBoundary extends Component {

    constructor() {
        super()
        this.state={hasError:false}
    }

    componentDidCatch(error) { 
        this.setState({hasError:true})
    }
    
    render() {
        if (this.state.hasError === true) {
            return "Something went wrong"
        }
        return this.props.children
    }
        
}

export default ErrorBoundary