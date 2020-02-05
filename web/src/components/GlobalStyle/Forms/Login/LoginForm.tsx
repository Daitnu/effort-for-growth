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
      <S.FormItem>
        <label htmlFor="id">아이디</label>
        <S.FormInput
          type="text"
          id="id"
          placeholder="아이디"
          maxLength={20}
          autoComplete="off"
          onChange={handleInputChange}
        />
      </S.FormItem>
      <S.FormItem>
        <label htmlFor="pw">비밀번호</label>
        <S.FormInput
          type="password"
          id="pw"
          placeholder="비밀번호"
          autoComplete="off"
          maxLength={20}
          onChange={handleInputChange}
          onKeyDown={handlePasswordKeyDown}
        />
      </S.FormItem>
      <S.FormItem isDisplay="inline">
        <GS.SpaceBetweenWithFullWidth>
          <GS.AlignCenter>
            <label htmlFor="autoLogin">자동로그인</label>
            <input type="checkbox" id="autoLogin" />
          </GS.AlignCenter>
          <button type="submit" onClick={handleSubmitClick}>
            로그인
          </button>
        </GS.SpaceBetweenWithFullWidth>
      </S.FormItem>
      <S.FormItem>
        <GS.SpaceBetweenWithFullWidth>
          <div>Register now</div>
          <div>Forgot password?</div>
        </GS.SpaceBetweenWithFullWidth>
      </S.FormItem>
    </div>
  );
};
