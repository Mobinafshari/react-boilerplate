import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.scss';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@lib/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then((registration) => {
      console.log('Service Worker registered:', registration);
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ErrorBoundary fallback={<h1>Something went wrong.</h1>}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <React.StrictMode>
          <App />
        </React.StrictMode>
        <Toaster />
      </QueryClientProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
