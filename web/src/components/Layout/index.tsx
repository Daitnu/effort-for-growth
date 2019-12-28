import React from 'react';
import * as S from './styled';

const LoginLayout = () => {
  const imageInputCardOptions = {
    width: '200px',
    hegiht: '100px',
    imagePosition: 'left',
  };
  return <S.ImageInputCard {...imageInputCardOptions}></S.ImageInputCard>;
};

export default LoginLayout;
