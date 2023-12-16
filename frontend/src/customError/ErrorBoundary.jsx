// ErrorBoundary.js
import { Component } from 'react';
import CustomError from './customError';


class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // You can log the error or send it to a logging service
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <CustomError error={this.state.error} />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;


const YourComponent = () => {
    // Your component logic here

    // This will be caught by the ErrorBoundary if an error occurs
    // For example, if a function throws an error
    // throw new Error('This is a simulated error');

    return (
        <ErrorBoundary>
            {/* Your component JSX */}
        </ErrorBoundary>
    );
};