import React, { useState, useRef } from 'react';
import * as S from './styled';
import * as GS from '../../../GlobalStyle';
import { KEY_CODE } from '../../../../constants';

interface IUser {
  id: string;
  pw: string;
}

export const LoginForm = () => {
  const [user, setUser] = useState<IUser>({ id: '', pw: '' });

  const handleInputChange = ({ target }) => {
    const changedField: string = target.id;
    const changedValue: string = target.value;
    setUser({
      ...user,
      [changedField]: changedValue,
    });
  };

  const handlePasswordKeyDown = ({ keyCode }) => {
    if (keyCode !== KEY_CODE.ENTER) return;
    handleSubmitClick();
  };

  const handleSubmitClick = () => {
    console.log(user);
    console.log('submit click');
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
      <S.FormItem>
        <GS.SpaceBetweenWithFullWidth>
          <div>Register now</div>
          <div>Forgot password?</div>
        </GS.SpaceBetweenWithFullWidth>
      </S.FormItem>
      <S.FormItemWithIcon>
        <S.IconWrapper>
          <S.FacebookIcon />
        </S.IconWrapper>
        <S.FacebookButton />
      </S.FormItemWithIcon>
      <S.FormItemWithIcon>
        <S.IconWrapper>
          <S.TwitterIcon />
        </S.IconWrapper>
        <S.TwitterButton />
      </S.FormItemWithIcon>
      <S.FormItemWithIcon>
        <S.IconWrapper>
          <S.GoogleIcon />
        </S.IconWrapper>
        <S.GoogleButton />
      </S.FormItemWithIcon>
    </div>
  );
};
