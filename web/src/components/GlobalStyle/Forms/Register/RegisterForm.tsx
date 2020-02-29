import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { gql, DocumentNode } from 'apollo-boost';
import * as S from './styled';
import * as LS from '../Login/styled';
import { REGISTER_FIELDS } from '~/@types/validator-field-names';
import { inputValidation, ICheckParams } from '~/utils/validator';
import { ERROR } from '~/utils/error/constant';
import { ErrorField } from '~/utils/error/error-field';

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

const initialState: IRegisterForm = {
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

const checkPwCondition = ({ pw, pwConfirm }): boolean => {
  if (pw === '' || pwConfirm === '') return false;
  return pw === pwConfirm;
};

const registerValidate = ({ id, pw, pwConfirm, name }: IRegisterForm, setErrorMsg) => {
  const vals: ICheckParams[] = [];
  const { ID, PW, NAME, PW_CONFIRM } = REGISTER_FIELDS;
  vals.push({ fieldName: ID, val: id });
  vals.push({ fieldName: PW, val: pw });
  vals.push({ fieldName: NAME, val: name });
  const validationResult = inputValidation(vals).filter(({ error }) => error !== null);
  // error가 null일 경우 제외하라는 코드를 inputValidation함수 내에 쓰면 배열에 undefined가 들어가게됨
  // TODO: 원인 찾기

  if (!checkPwCondition({ pw, pwConfirm })) {
    validationResult.push({
      error: new ErrorField(PW_CONFIRM, pwConfirm, ERROR.REGISTER.EQUAL[PW_CONFIRM]),
    });
  }
  if (validationResult.length) {
    const resultObj = {};
    validationResult.forEach(({ error }) => (resultObj[error.field] = error.reason));
    setErrorMsg({ ...resultObj });
    return false;
  }
  setErrorMsg({ ...initialState });
  return true;
};

export const RegisterForm: React.FC = () => {
  const [userValues, setUserValues] = useState<IRegisterForm>(initialState);
  const [errorMsg, setErrorMsg] = useState<IRegisterForm>(initialState);
  const [signUp] = useMutation<IUser>(SIGN_UP);

  const handleInputChange = ({ target: { id, value } }): void => {
    setUserValues({
      ...userValues,
      [id]: value,
    });
  };

  const handleSubmit = async (): Promise<void> => {
    const { id, name, pw, pwConfirm }: IRegisterForm = userValues;
    if (!registerValidate({ id, pw, pwConfirm, name }, setErrorMsg)) return;
    try {
      const res = await signUp({ variables: { id, pw, name } });
      console.log(res);
    } catch (err) {
      console.log(err.graphQLErrors);
    }
  };

  return (
    <div>
      <LS.FormItemWithIcon isError={errorMsg.id}>
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
      <S.ErrorMsg>{errorMsg.id}</S.ErrorMsg>
      <LS.FormItemWithIcon isError={errorMsg.name}>
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
      <S.ErrorMsg>{errorMsg.name}</S.ErrorMsg>
      <LS.FormItemWithIcon isError={errorMsg.pw}>
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
      <S.ErrorMsg>{errorMsg.pw}</S.ErrorMsg>
      <LS.FormItemWithIcon isError={errorMsg.pwConfirm}>
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
      <S.ErrorMsg>{errorMsg.pwConfirm}</S.ErrorMsg>
      <S.RegisterButton onClick={handleSubmit}>회원가입</S.RegisterButton>
      <Link to="login">
        <S.RegisterButton>로그인하러 가기</S.RegisterButton>
      </Link>
    </div>
  );
};
