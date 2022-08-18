import styled from '@emotion/styled';

import GameItem from '@/components/home/GameItem';
import { heading3Font, subHead2Font } from '@/styles/fontStyles';

function IndexPage() {
  return (
    <IndexPageLayout>
      <TitleSection>
        <div>반가워요!</div>
        <h1>
          원하는
          <br />
          게임을 선택해주세요 👋🏻
        </h1>
      </TitleSection>

      <GameItem
        url="/filter/menu"
        imageUrl="/images/game-item-1.png"
        alt="2차장소 월드컵 이미지"
        title="2차장소 월드컵"
        description="2차장소를 정하고싶은데 어디를 가야할지 모를때!"
      />

      <GameItem
        url="/"
        imageUrl="/images/game-item-2.png"
        alt="랜덤 게임 이미지"
        title="랜덤 게임"
        description="룰렛부터 술값내기까지 술자리 랜덤게임 시작!"
      />
    </IndexPageLayout>
  );
}

export default IndexPage;

const IndexPageLayout = styled.div`
  & > a:first-of-type {
    margin-bottom: 20px;
  }
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 13px;
  margin-bottom: 44px;

  & > div {
    ${subHead2Font};
    color: ${({ theme }) => theme.main400};
    margin-bottom: 4px;
  }

  & > h1 {
    ${heading3Font};
    color: ${({ theme }) => theme.white};
    margin: 0;
  }
`;
