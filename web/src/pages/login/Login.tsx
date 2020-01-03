import React from 'react';
import * as S from './styled';
import * as GS from '../../components/GlobalStyle';
import { LoginForm } from '../../components/GlobalStyle/Forms/Login';

export const LoginPage: React.SFC = () => {
  return (
    <GS.FullScreenWrap>
      <S.CenterWrap>
        <S.LoginFormArea>
          <LoginForm></LoginForm>
        </S.LoginFormArea>
        <S.BackgoundImage>오른쪽</S.BackgoundImage>
      </S.CenterWrap>
    </GS.FullScreenWrap>
  );
};
