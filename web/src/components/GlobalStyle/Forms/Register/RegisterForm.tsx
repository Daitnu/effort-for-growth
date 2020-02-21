import React from 'react';
import * as S from './styled';
import * as LS from '../Login/styled';
import * as GS from '../../../GlobalStyle';
import { useMutation } from '@apollo/react-hooks';
import { gql, DocumentNode } from 'apollo-boost';

export const RegisterForm: React.FC = () => {
  return (
    <div>
      <LS.FormItemWithIcon>
        <LS.IconWrapper>
          <LS.UserIcon />
        </LS.IconWrapper>
        <LS.FormInput type="text" id="id" placeholder="아이디" maxLength={20} autoComplete="off" />
      </LS.FormItemWithIcon>
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
    </div>
  );
};
