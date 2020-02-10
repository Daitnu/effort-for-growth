import styled, { css } from 'styled-components';
import * as GS from '../../../GlobalStyle';
import userIcon from '../../../../../assets/user.png';
import passwordIcon from '../../../../../assets/key.png';
import facebookIcon from '../../../../../assets/facebook.png';
import twitterIcon from '../../../../../assets/twitter.png';
import googleIcon from '../../../../../assets/google.png';

const borderRadius = '8px';
const borderColor = '#cfcdcb';
const loginButtonColor = '#4786ff';
const facebookFontColor = '#4267b2';
const twitterFontColor = '#03a9f4';
const googleFontColor = '#f44235';

export const FormItem = styled(GS.FlexRow)`
  margin: 10px 0 10px 0;
  width: 300px;
  & > label {
    display: ${props => props.isDisplay || 'none'};
  }
`;

export const FormItemWithIcon = styled(GS.FlexJustifyAlignCenter)`
  margin: 10px 0 10px 0;
  width: 300px;
  height: 50px;
  border: 1px solid ${borderColor};
  border-radius: ${borderRadius};
`;

export const FormInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: ${borderRadius};
  border: none;
  outline: none;
  padding: 0 10px 0 10px;
`;

export const LoginButton = styled.button`
  width: 30%;
  height: 40px;
  background-color: ${loginButtonColor};
  border: none;
  border-radius: 8px;
  color: white;
  outline: none;
  cursor: pointer;
`;

export const SNSButton = styled(GS.FullWidth.withComponent('button'))`
  border: none;
  height: 100%;
  border-radius: ${borderRadius};
  background-color: white;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
`;

export const IconWrapper = styled(GS.FlexJustifyAlignCenter)`
  width: 75px;
  height: 50px;
  border-right: 1px solid ${borderColor};
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

export const FacebookButton = styled(SNSButton)`
  color: ${facebookFontColor};
`;

export const TwitterButton = styled(SNSButton)`
  color: ${twitterFontColor};
`;

export const GoogleButton = styled(SNSButton)`
  color: ${googleFontColor};
`;
