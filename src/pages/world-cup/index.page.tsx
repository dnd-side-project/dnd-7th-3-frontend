import React from 'react';

import styled from '@emotion/styled';

function WorldCupPage() {
  // TODO
  // const worldCupItems = useRecoilValue(worldCupState);
  // const foodWorldCupForm = useRecoilValue(foodWorldCupFormState);

  return (
    <>
      <WorldCupHeader>
        <div>
          16강
        </div>
        <div>
          8강
        </div>
        <div>
          4강
        </div>
        <div>
          FINAL
        </div>
      </WorldCupHeader>
      <WorldCupItem />
    </>
  );
}

export default WorldCupPage;

const WorldCupHeader = styled.div`
  color: ${({ theme }) => theme.white};
`;

const WorldCupItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vw;
  max-height: 300px;
  min-height: 217px;
  width: 100%;
  min-width: 300px;
  background-color: ${({ theme }) => theme.gray900};
  border-radius: 25px;
`;
