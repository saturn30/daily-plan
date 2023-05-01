import styled from '@emotion/native';

import { CircleLoader } from '@/common/components';

import { useLoadingStore } from './useLoadingStore';

export const LoadingContainer = () => {
  const { isLoading } = useLoadingStore();

  return (
    isLoading && (
      <S.Wrap>
        <CircleLoader />
      </S.Wrap>
    )
  );
};

const S = {
  Wrap: styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
  `,
};
