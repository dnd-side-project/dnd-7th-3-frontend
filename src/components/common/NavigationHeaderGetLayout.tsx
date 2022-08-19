import { ComponentProps, ReactElement } from 'react';

import NavigationHeader from './NavigationHeader';

const getNavigationHeaderLayout = ({
  activeDot, goBackHref, nextHref,
}: ComponentProps<typeof NavigationHeader>) => function NavigationHeaderGetLayout(
  page: ReactElement,
) {
  return (
    <>
      <NavigationHeader
        activeDot={activeDot}
        goBackHref={goBackHref}
        nextHref={nextHref}
      />
      {page}
    </>
  );
};

export default getNavigationHeaderLayout;
