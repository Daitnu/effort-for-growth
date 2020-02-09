import styled, { css } from 'styled-components';
import * as GS from '../../../GlobalStyle';
import userIcon from '../../../../assets/user.png';
import passwordIcon from '../../../../assets/key.png';

const borderRadius = '8px';
const borderColor = '#cfcdcb';

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
