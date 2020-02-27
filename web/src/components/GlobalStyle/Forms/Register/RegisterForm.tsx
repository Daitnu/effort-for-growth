import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { gql, DocumentNode } from 'apollo-boost';
import * as S from './styled';
import * as LS from '../Login/styled';
import { REGISTER_FIELDS } from '../../../../@types/validator-field-names';
import { inputValidation, ICheckParams } from '../../../../utils/validator';
import { ERROR } from '../../../../utils/error/constant';
import { ErrorField } from '../../../../utils/error/error-field';

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

const registerValidate = ({ id, pw, pwConfirm, name }: IRegisterForm, setErrorMsg) => {
  const vals: ICheckParams[] = [];
  vals.push({ type: REGISTER_FIELDS.ID, val: id });
  vals.push({ type: REGISTER_FIELDS.PW, val: pw });
  vals.push({ type: REGISTER_FIELDS.NAME, val: name });
  const validationResult = inputValidation(vals).filter(({ error }) => error !== null);
  // error가 null일 경우 제외하라는 코드를 inputValidation함수 내에 쓰면 배열에 undefined가 들어가게됨
  // TODO: 원인 찾기

  if (!pwCondition({ pw, pwConfirm })) {
    validationResult.push({
      error: new ErrorField('pwConfirm', pwConfirm, ERROR.REGISTER.EQUAL['pwConfirm']),
    });
  }
  if (validationResult.length) {
    const resultObj = {};
    validationResult.forEach(({ error }) => (resultObj[error.field] = error.reason));
    setErrorMsg({ ...resultObj });
    return false;
  }
  setErrorMsg({ ...init });
  return true;
};

export const RegisterForm: React.FC = () => {
  const [info, setInfo] = useState<IRegisterForm>(init);
  const [errorMsg, setErrorMsg] = useState<IRegisterForm>(init);
  const [signUp] = useMutation<IUser>(SIGN_UP);

  const handleInputChange = ({ target: { id, value } }): void => setInfo({ ...info, [id]: value });
  const handleSubmit = (): void => {
    const { id, name, pw, pwConfirm }: IRegisterForm = info;
    if (registerValidate({ id, pw, pwConfirm, name }, setErrorMsg)) {
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
        <S.RegisterButton>로그인하러 가기</S.RegisterButton>
      </Link>
    </div>
  );
};
