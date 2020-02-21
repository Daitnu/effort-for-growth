import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql, DocumentNode } from 'apollo-boost';
import * as S from './styled';
import * as GS from '../../../GlobalStyle';
import { KEY_CODE } from '~/constants';

interface IUser {
  id: string;
  pw: string;
}

interface IError {
  message: string;
}

const LOGIN: DocumentNode = gql`
  mutation Login($id: String!, $pw: String!) {
    login(id: $id, pw: $pw) {
      id
      pw
    }
  }
`;

export const LoginForm: React.FC = () => {
  const [user, setUser] = useState<IUser>({ id: '', pw: '' });
  const [errorMessage, setErrorMessage] = useState<IError>({ message: '' });
  const [login] = useMutation<IUser>(LOGIN);

  const handleInputChange = ({ target: { id, value } }): void => {
    const changedField: string = id;
    const changedValue: string = value;
    setUser({
      ...user,
      [changedField]: changedValue,
    });
  };

  const handlePasswordKeyDown = ({ keyCode }): void => {
    if (keyCode !== KEY_CODE.ENTER) return;
    handleSubmitClick();
  };

  const handleSubmitClick = (): void => {
    const { id, pw } = user;
    console.log(user);
    console.log('submit click');
    login({ variables: { id, pw } })
      .then(res => {
        console.log(res);
        setErrorMessage({ message: '' });
      })
      .catch(err => {
        console.log(err.graphQLErrors);
        setErrorMessage({ message: err.graphQLErrors[0].message });
      });
  };

  return (
    <div>
      <S.FormItemWithIcon>
        <S.IconWrapper>
          <S.UserIcon />
        </S.IconWrapper>
        <S.FormInput
          type="text"
          id="id"
          placeholder="아이디"
          maxLength={20}
          autoComplete="off"
          onChange={handleInputChange}
        />
      </S.FormItemWithIcon>
      <S.FormItemWithIcon>
        <S.IconWrapper>
          <S.PasswordIcon />
        </S.IconWrapper>
        <S.FormInput
          type="password"
          id="pw"
          placeholder="비밀번호"
          autoComplete="off"
          maxLength={20}
          onChange={handleInputChange}
          onKeyDown={handlePasswordKeyDown}
        />
      </S.FormItemWithIcon>
      <S.FormItem isDisplay="inline">
        <GS.SpaceBetweenWithFullWidth>
          <GS.AlignCenter>
            <input type="checkbox" id="autoLogin" />
            <label htmlFor="autoLogin">자동 로그인</label>
          </GS.AlignCenter>
          <S.LoginButton type="submit" onClick={handleSubmitClick}>
            로그인
          </S.LoginButton>
        </GS.SpaceBetweenWithFullWidth>
      </S.FormItem>
      <S.FormItem>{errorMessage.message}</S.FormItem>
      <S.FormItem>
        <GS.SpaceBetweenWithFullWidth>
          <div>Register now</div>
          <div>Forgot password?</div>
        </GS.SpaceBetweenWithFullWidth>
      </S.FormItem>
      <S.DivideLineContainer>
        <S.DivideLine />
        <S.DivideLineContent>OR</S.DivideLineContent>
      </S.DivideLineContainer>
      <S.FormItemWithIcon>
        <S.IconWrapper>
          <S.FacebookIcon />
        </S.IconWrapper>
        <S.FacebookButton>페이스북으로 로그인하기</S.FacebookButton>
      </S.FormItemWithIcon>
      <S.FormItemWithIcon>
        <S.IconWrapper>
          <S.TwitterIcon />
        </S.IconWrapper>
        <S.TwitterButton>트위터로 로그인하기</S.TwitterButton>
      </S.FormItemWithIcon>
      <S.FormItemWithIcon>
        <S.IconWrapper>
          <S.GoogleIcon />
        </S.IconWrapper>
        <S.GoogleButton>구글로 로그인하기</S.GoogleButton>
      </S.FormItemWithIcon>
    </div>
  );
};
