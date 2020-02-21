import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import * as LS from '../Login/styled';
import * as GS from '../../../GlobalStyle';
import { useMutation } from '@apollo/react-hooks';
import { gql, DocumentNode } from 'apollo-boost';
import { checkLength, CHECK_TYPE } from '~/utils/validator';

interface IRegisterForm {
  id: string;
  name: string;
  pw: string;
  pwConfirm: string;
}

interface IUser {
  id: string;
  name: string;
}

const init: IRegisterForm = {
  id: '',
  name: '',
  pw: '',
  pwConfirm: '',
};

const SIGN_UP: DocumentNode = gql`
  mutation SignUp($id: String!, $pw: String!, $name: String!) {
    signUp(id: $id, pw: $pw, name: $name) {
      id
      name
    }
  }
`;

const pwCondition = ({ pw, pwConfirm }): boolean =>
  pw === pwConfirm && pw !== '' && pwConfirm !== '';

const registerValidate = ({ id, pw, pwConfirm, name }: IRegisterForm): boolean => {
  return (
    pwCondition({ pw, pwConfirm }) &&
    checkLength(CHECK_TYPE.ID, id) &&
    checkLength(CHECK_TYPE.PW, pw) &&
    checkLength(CHECK_TYPE.NAME, name)
  );
};

export const RegisterForm: React.FC = () => {
  const [info, setInfo] = useState<IRegisterForm>(init);
  const [errorMsg, setErrorMsg] = useState<IRegisterForm>(init);
  const [signUp] = useMutation<IUser>(SIGN_UP);

  const handleInputChange = ({ target: { id, value } }): void => setInfo({ ...info, [id]: value });
  const handleSubmit = (): void => {
    const { id, name, pw, pwConfirm }: IRegisterForm = info;
    if (registerValidate({ id, pw, pwConfirm, name })) {
      console.log('validation 통과');
      signUp({ variables: { id, pw, name } })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err.graphQLErrors);
        });
    }
  };
  const moveToLoginPage = (): void => {};

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
      <S.RegisterButton onClick={handleSubmit}>회원가입</S.RegisterButton>
      <Link to="login">
        <S.RegisterButton onClick={handleSubmit}>로그인하러 가기</S.RegisterButton>
      </Link>
    </div>
  );
};
