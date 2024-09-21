import {Component, ErrorInfo, ReactNode} from "react";
import {ErrorPage} from "widgets/ErrorPage";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(_error: Error, _errorInfo: ErrorInfo) {
    }

    render() {
        if (this.state.hasError) {
            return <ErrorPage/>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary
