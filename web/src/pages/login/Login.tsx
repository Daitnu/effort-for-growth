import React from 'react';
import * as S from './styled';
import * as GS from '../../components/GlobalStyle';
import { LoginForm } from '../../components/GlobalStyle/Forms/Login';
import backgoundImage from 'Assets/back.jpg';

export const LoginPage: React.FC = () => {
  return (
    <GS.FullScreenWrap bg={backgoundImage}>
      <S.CenterWrap>
        <S.LoginFormArea>
          <LoginForm />
        </S.LoginFormArea>
        <S.BackgoundImage />
      </S.CenterWrap>
    </GS.FullScreenWrap>
  );
};
