import { FC, LazyExoticComponent, Suspense } from 'react';
import PageLoadingIndicator from './PageLoadingIndicator';

interface Props {
  Component: LazyExoticComponent<FC<{}>>;
}

const LazyLoad: FC<Props> = ({ Component }) => {
  return (
    <Suspense fallback={<PageLoadingIndicator />}>
      <Component />
    </Suspense>
  );
};

export default LazyLoad;
