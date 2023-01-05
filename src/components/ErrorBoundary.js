import { Component } from "react/cjs/react.production.min";

class ErrorBoundary extends Component {
    componentDidCatch() { }
    
    render(
        {this.props.children}
    )
}