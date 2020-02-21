import React, { useState } from 'react';
import * as S from './styled';
import * as LS from '../Login/styled';
import * as GS from '../../../GlobalStyle';
import { useMutation } from '@apollo/react-hooks';
import { gql, DocumentNode } from 'apollo-boost';

interface IUser {
  id: string;
  name: string;
  pw: string;
  pwConfirm: string;
}

const init: IUser = {
  id: '',
  name: '',
  pw: '',
  pwConfirm: '',
};

export const RegisterForm: React.FC = () => {
  const [info, setInfo] = useState<IUser>(init);
  const [errorMsg, setErrorMsg] = useState<IUser>(init);

  const handleInputChange = ({ target: { id, value } }): void => setInfo({ ...info, [id]: value });

  return (
    <div>
      <LS.FormItemWithIcon>
        <LS.IconWrapper>
          <LS.UserIcon />
        </LS.IconWrapper>
        <LS.FormInput
          type="text"
          id="id"
          placeholder="아이디"
          maxLength={20}
          autoComplete="off"
          onChange={handleInputChange}
        />
      </LS.FormItemWithIcon>
      {errorMsg.id}
      <LS.FormItemWithIcon>
        <LS.IconWrapper>
          <S.UserNameIcon />
        </LS.IconWrapper>
        <LS.FormInput
          type="text"
          id="name"
          placeholder="이름"
          maxLength={20}
          autoComplete="off"
          onChange={handleInputChange}
        />
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
          onChange={handleInputChange}
        />
      </LS.FormItemWithIcon>
      {errorMsg.pw}
      <LS.FormItemWithIcon>
        <LS.IconWrapper>
          <LS.PasswordIcon />
        </LS.IconWrapper>
        <LS.FormInput
          type="password"
          id="pwConfirm"
          placeholder="비밀번호 확인"
          autoComplete="off"
          maxLength={20}
          onChange={handleInputChange}
        />
      </LS.FormItemWithIcon>
      {errorMsg.pwConfirm}
      <S.RegisterButton>회원가입</S.RegisterButton>
    </div>
  );
};
