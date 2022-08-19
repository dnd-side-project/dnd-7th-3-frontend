import React from 'react';

import getNavigationHeaderLayout from '@/components/common/NavigationHeaderGetLayout';
import RoundSet from '@/components/roundSet/RoundSet';

function RoundSetPage() {
  return (
    <RoundSet />
  );
}

RoundSetPage.getLayout = getNavigationHeaderLayout({
  activeDot: 'roundSet',
  goBackHref: '/filter/radius',
});

export default RoundSetPage;
