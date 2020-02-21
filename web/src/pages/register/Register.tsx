import React from 'react';
import * as LS from '../login/styled';
import * as GS from '../../components/GlobalStyle';
import { RegisterForm } from '../../components/GlobalStyle/Forms/Register';
import backgoundImage from 'Assets/back.jpg';

export const RegisterPage: React.FC = () => {
  return (
    <GS.FullScreenWrap bg={backgoundImage}>
      <LS.CenterWrap>
        <LS.LoginFormArea>
          <RegisterForm />
        </LS.LoginFormArea>
        <LS.BackgoundImage />
      </LS.CenterWrap>
    </GS.FullScreenWrap>
  );
};
