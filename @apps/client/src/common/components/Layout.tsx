import styled from '@emotion/native';
import { StatusBar } from 'expo-status-bar';
import React, { type ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <Wrap>
      {children}
      <StatusBar style="auto" />
    </Wrap>
  );
};

const Wrap = styled.SafeAreaView`
  position: relative;
  flex: 1;
  background-color: ${({ theme }) => theme.color.background};
`;
