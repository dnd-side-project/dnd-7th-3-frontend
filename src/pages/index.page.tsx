import styled from '@emotion/styled';

import Button from '@/components/common/Button';
import MobileWebLayout from '@/components/common/MobileWebLayout';
import FoodCategories from '@/components/home/FoodCategories';
import { captionFont, heading2Font } from '@/styles/fontStyles';

import LocationIcon from '../assets/icons/location.svg';

function IndexPage() {
  return (
    <IndexPageLayout>
      <div>
        <LocationWrapper>
          <LocationIcon />
          <div>
            위치정보없음
          </div>
        </LocationWrapper>
        <Title>
          2차에서 먹고싶은
          <br />
          메뉴를 선택해주세요
        </Title>
        <FoodCategories />
      </div>
      <div>
        <Button>
          다음
        </Button>
      </div>
    </IndexPageLayout>
  );
}

export default IndexPage;

const IndexPageLayout = styled(MobileWebLayout)`
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

const LocationWrapper = styled.div`
  ${captionFont};
  color: ${({ theme }) => theme.gray100};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 38px;
  margin-bottom: 50px;

  & > svg {
    margin-right: 4px;
  }
`;

const Title = styled.h1`
  ${heading2Font};
  color: ${({ theme }) => theme.white};
  margin: 0px;
`;
