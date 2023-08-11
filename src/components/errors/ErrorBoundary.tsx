/* eslint-disable react/destructuring-assignment */
import React, { ReactNode } from 'react';
import ErrorPage from './ErrorPage';

type P = { children: ReactNode };
type S = { hasError: boolean };

class ErrorBoundary extends React.Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage message="Error" />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
