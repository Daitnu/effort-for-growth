import React, { useState, useRef } from 'react';
import * as S from './styled';
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
        <label htmlFor="userId">아이디</label>
        <input
          type="text"
          id="id"
          placeholder="아이디"
          maxLength={20}
          autoComplete="off"
          onChange={handleInputChange}
        />
      </S.FormItem>
      <S.FormItem>
        <label htmlFor="userPw">비밀번호</label>
        <input
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
        <label htmlFor="autoLogin">자동로그인</label>
        <input type="checkbox" id="autoLogin" />
        <button type="submit" onClick={handleSubmitClick}>
          로그인
        </button>
      </S.FormItem>
    </div>
  );
};
