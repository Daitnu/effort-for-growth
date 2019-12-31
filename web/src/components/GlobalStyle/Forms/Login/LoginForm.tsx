import React, { useState } from 'react';
import * as S from './styled';
import { KEY_CODE } from '../../../../constants';

const LoginForm = () => {
  const [user, setUser] = useState({ id: '', pw: '' });

  const handleInputBlur = ({ target }) => {
    const changeTarget: string = target.id;
    const changeValue: string = target.value;
    setUser({
      ...user,
      [changeTarget]: changeValue,
    });
  };

  const handlePasswordKeyDown = event => {
    if (event.keyCode !== KEY_CODE.ENTER) return;

    // TODO : validate & submit
  };

  return (
    <div>
      <S.FormItem>
        <label htmlFor='userId'>아이디</label>
        <input
          type='text'
          id='id'
          placeholder='아이디'
          maxLength={20}
          autoComplete='off'
          onBlur={handleInputBlur}
        />
      </S.FormItem>
      <S.FormItem>
        <label htmlFor='userPw'>비밀번호</label>
        <input
          type='password'
          id='pw'
          placeholder='비밀번호'
          autoComplete='off'
          maxLength={20}
          onBlur={handleInputBlur}
          onKeyDown={handlePasswordKeyDown}
        />
      </S.FormItem>
      <S.FormItem isDisplay='inline'>
        <label htmlFor='autoLogin'>자동로그인</label>
        <input type='checkbox' id='autoLogin' />
        <button type='submit'>로그인</button>
      </S.FormItem>
    </div>
  );
};

export default LoginForm;
