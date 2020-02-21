import React, { useState } from 'react';
import * as S from './styled';
import * as LS from '../Login/styled';
import * as GS from '../../../GlobalStyle';
import { useMutation } from '@apollo/react-hooks';
import { gql, DocumentNode } from 'apollo-boost';

interface IError {
  id: string;
  name: string;
  pw: string;
  pwCheck: string;
}

const initError: IError = {
  id: '',
  name: '',
  pw: '',
  pwCheck: '',
};

export const RegisterForm: React.FC = () => {
  const [errorMsg, setErrorMsg] = useState<IError>(initError);

  return (
    <div>
      <LS.FormItemWithIcon>
        <LS.IconWrapper>
          <LS.UserIcon />
        </LS.IconWrapper>
        <LS.FormInput type="text" id="id" placeholder="아이디" maxLength={20} autoComplete="off" />
      </LS.FormItemWithIcon>
      {errorMsg.id}
      <LS.FormItemWithIcon>
        <LS.IconWrapper>
          <S.UserNameIcon />
        </LS.IconWrapper>
        <LS.FormInput type="text" id="name" placeholder="이름" maxLength={20} autoComplete="off" />
      </LS.FormItemWithIcon>
      {errorMsg.name}
      <LS.FormItemWithIcon>
        <LS.IconWrapper>
          <LS.PasswordIcon />
        </LS.IconWrapper>
        <LS.FormInput
          type="password"
          id="pw"
          placeholder="비밀번호"
          autoComplete="off"
          maxLength={20}
        />
      </LS.FormItemWithIcon>
      {errorMsg.pw}
      <LS.FormItemWithIcon>
        <LS.IconWrapper>
          <LS.PasswordIcon />
        </LS.IconWrapper>
        <LS.FormInput
          type="password"
          id="pw_confirm"
          placeholder="비밀번호 확인"
          autoComplete="off"
          maxLength={20}
        />
      </LS.FormItemWithIcon>
      {errorMsg.pwCheck}
      <S.RegisterButton>회원가입</S.RegisterButton>
    </div>
  );
};
