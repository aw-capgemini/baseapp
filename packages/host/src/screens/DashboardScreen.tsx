import {Federated} from '@callstack/repack/client';
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Placeholder from '../components/Placeholder';

const Meralco = React.lazy(() =>
  Federated.importModule('meralco', './App'),
);

const DashboardScreen = () => {
  return (
    <ErrorBoundary name="DashboardScreen">
      <React.Suspense
        fallback={<Placeholder label="Dashboard" icon="view-dashboard" />}>
        <Meralco />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default DashboardScreen;
