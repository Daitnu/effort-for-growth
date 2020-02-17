import styled from 'styled-components';
import * as GS from '../../../GlobalStyle';
import userIcon from 'Assets/user.png';
import passwordIcon from 'Assets/key.png';
import facebookIcon from 'Assets/facebook.png';
import twitterIcon from 'Assets/twitter.png';
import googleIcon from 'Assets/google.png';

const border = {
  radius: {
    common: '8px',
  },
};

const color = {
  font: {
    facebook: '#4267b2',
    twitter: '#03a9f4',
    google: '#f44235',
  },
  border: {
    common: '#cfcdcb',
  },
  button: {
    login: '#4786ff',
  },
};

interface IFormItem {
  isDisplay: Boolean;
}

export const FormItem = styled(GS.FlexRow)`
  margin: 10px 0 10px 0;
  width: 300px;
  & > label {
    display: ${(props: IFormItem) => props.isDisplay || 'none'};
  }
`;

export const FormItemWithIcon = styled(GS.FlexJustifyAlignCenter)`
  margin: 10px 0 10px 0;
  width: 300px;
  height: 50px;
  border: 1px solid ${color.border.common};
  border-radius: ${border.radius.common};
  background-color: white;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: ${border.radius.common};
  border: none;
  outline: none;
  padding: 0 10px 0 10px;
`;

export const LoginButton = styled.button`
  width: 30%;
  height: 40px;
  background-color: ${color.button.login};
  border: none;
  border-radius: 8px;
  color: white;
  outline: none;
  cursor: pointer;
`;

export const SNSLoginButton = styled(GS.FullWidth.withComponent('button'))`
  border: none;
  height: 100%;
  border-radius: ${border.radius.common};
  background-color: white;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
`;

export const IconWrapper = styled(GS.FlexJustifyAlignCenter)`
  width: 75px;
  height: 50px;
  border-right: 1px solid ${color.border.common};
`;

const IconStyle = styled(GS.BackgroundImageStyle)`
  width: 30px;
  height: 30px;
`;

export const UserIcon = styled(IconStyle)`
  background-image: url(${userIcon});
`;

export const PasswordIcon = styled(IconStyle)`
  background-image: url(${passwordIcon});
`;

export const FacebookIcon = styled(IconStyle)`
  background-image: url(${facebookIcon});
`;

export const TwitterIcon = styled(IconStyle)`
  background-image: url(${twitterIcon});
`;

export const GoogleIcon = styled(IconStyle)`
  background-image: url(${googleIcon});
`;

export const FacebookButton = styled(SNSLoginButton)`
  color: ${color.font.facebook};
`;

export const TwitterButton = styled(SNSLoginButton)`
  color: ${color.font.twitter};
`;

export const GoogleButton = styled(SNSLoginButton)`
  color: ${color.font.google};
`;
