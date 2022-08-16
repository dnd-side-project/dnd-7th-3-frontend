import styled from '@emotion/styled';

import Button from '@/components/common/Button';
import MobileWebLayout from '@/components/common/MobileWebLayout';
import FoodCategories from '@/components/filter/FoodCategories';
import LocationInformation from '@/components/filter/LocationInformation';
import { body1Font, heading2Font } from '@/styles/fontStyles';

function FilterMenuPage() {
  return (
    <FilterMenuPageLayout>
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
      <div>
        <Button href="/filter/radius">
          다음
        </Button>
      </div>
    </FilterMenuPageLayout>
  );
}

export default FilterMenuPage;

const FilterMenuPageLayout = styled(MobileWebLayout)`
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > div:last-of-type {
      display: flex;
      justify-content: center;
      margin-top: 54px;
      margin-bottom: 12px;
    }
  }
`;

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
