import styled from 'styled-components';
import * as LS from '../Login/styled';
import * as GS from '../../../GlobalStyle';
import nameIcon from 'Assets/name.png';

export const RegisterButton = styled(LS.LoginButton)`
  width: 100%;
`;

export const UserNameIcon = styled(GS.IconStyle)`
  background-image: url(${nameIcon});
`;
