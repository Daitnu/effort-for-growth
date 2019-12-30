import React, { useState } from 'react';
import * as S from './styled';

const LoginForm = () => {
  const [user, setUser] = useState({ id: '', pw: '' });

  const handleInputChange = ({ target }) => {
    const changeTarget: string = target.id;
    const changeValue: string = target.value;
    setUser({
      ...user,
      [changeTarget]: changeValue,
    });
  };

  return (
    <div>
      <S.FlexRow>
        <label htmlFor='userId'>아이디</label>
        <input
          type='text'
          onChange={handleInputChange}
          value={user.id}
          id='id'
          placeholder='아이디'
          maxLength={20}
        />
      </S.FlexRow>
      <S.FlexRow>
        <label htmlFor='userPw'>비밀번호</label>
        <input
          type='text'
          onChange={handleInputChange}
          value={user.pw}
          id='pw'
          placeholder='비밀번호'
          maxLength={20}
        />
      </S.FlexRow>
      <S.FlexRow display='inline'>
        <label htmlFor='autoLogin'>자동로그인</label>
        <input type='checkbox' id='autoLogin' />
        <button>로그인</button>
      </S.FlexRow>
    </div>
  );
};

export default LoginForm;
