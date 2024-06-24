import React from 'react';
import {TriangleAlertIcon} from "lucide-react";

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends React.Component<any, ErrorBoundaryState> {
    constructor(props: any) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error: Error) {
        return {hasError: true, error: error};
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({hasError: true, error: error, errorInfo: errorInfo});
    }

    render() {
        if (this.state.hasError) {
            let pathname: string = "";

            if (this.state.errorInfo?.componentStack) {
                const matchResult = this.state.errorInfo.componentStack.match(/^\s*at\s+\S+\s+\(([^)]+)\)/m);
                if (matchResult && matchResult[1]) {
                    const url = new URL(matchResult[1]);
                    if (url) {
                        pathname = url.pathname;
                    }
                }
            }
            return (
                <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
                    <div className="bg-card p-8 rounded-lg w-full max-w-7xl border border-zinc-100">
                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-3xl font-bold">Oops! Something went wrong.</h1>
                            <TriangleAlertIcon className="h-8 w-8 text-destructive"/>
                        </div>
                        <div className="border-t border-muted pt-6 space-y-6">
                            <div>
                                <h2 className="text-xl font-semibold">Error Message</h2>
                                <p className="text-muted-foreground">{this.state.error?.message}</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">Location</h2>
                                <p className="text-muted-foreground">{pathname}</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">Stack Trace</h2>
                                <pre className="bg-muted p-4 rounded-md text-sm text-muted-foreground overflow-auto">
                                    {this.state.error && this.state.error.toString()}
                                    <br/>
                                    {this.state.errorInfo?.componentStack}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
