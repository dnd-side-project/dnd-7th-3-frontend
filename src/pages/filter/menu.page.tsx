import styled from '@emotion/styled';

import Button from '@/components/common/Button';
import getNavigationHeaderLayout from '@/components/common/NavigationHeaderGetLayout';
import FoodCategories from '@/components/filter/FoodCategories';
import LocationInformation from '@/components/filter/LocationInformation';
import { body1Font, heading2Font } from '@/styles/fontStyles';

function FilterMenuPage() {
  return (
    <>
      <div>
        <FilterMenuTitleSection>
          <LocationInformation />
          <Title>
            2차에서 먹고싶은
            <br />
            메뉴를 선택해주세요
          </Title>
          <CategoryDescription>
            여러 메뉴가 먹고싶다면 중복선택도 가능!
          </CategoryDescription>
          <FoodCategories />
        </FilterMenuTitleSection>
      </div>
      <Button href="/filter/radius">
        다음
      </Button>
    </>
  );
}

export default FilterMenuPage;

FilterMenuPage.getLayout = getNavigationHeaderLayout({
  activeDot: 'menu',
  goBackHref: '/',
  nextHref: '/filter/radius',
});

const FilterMenuTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  ${heading2Font};
  color: ${({ theme }) => theme.white};
  margin: 0px;
`;

const CategoryDescription = styled.div`
  ${body1Font};
  color: ${({ theme }) => theme.gray500};
  margin-top: 12px;
  margin-bottom: 56px;
`;
