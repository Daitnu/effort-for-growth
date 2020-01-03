import React from 'react';
import * as GS from '../../components/GlobalStyle';

interface centerWrapOptions {
  width: string;
  height: string;
}

const centerWrapOptions: centerWrapOptions = {
  width: '90%',
  height: '90%',
};

export const HomePage: React.SFC = () => {
  return (
    <GS.FullScreenWrap>
      <GS.CenterWrap {...centerWrapOptions}></GS.CenterWrap>
    </GS.FullScreenWrap>
  );
};
