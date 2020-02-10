import React from 'react';
import * as GS from '~/components/GlobalStyle';

interface IcenterWrapOptions {
  width: string;
  height: string;
}

const centerWrapOptions: IcenterWrapOptions = {
  width: '90%',
  height: '90%',
};

export const HomePage: React.SFC = () => {
  return (
    <GS.FullScreenWrap>
      <GS.CenterWrap {...centerWrapOptions} />
      home page입니다..
    </GS.FullScreenWrap>
  );
};
