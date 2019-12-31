import styled, { css } from 'styled-components';
import * as GS from '../../../GlobalStyle';

export const FormItem = styled(GS.FlexRow)`
  & > label {
    display: ${props => props.isDisplay || 'none'};
  }
`;

export const FormInput = styled.input``;
