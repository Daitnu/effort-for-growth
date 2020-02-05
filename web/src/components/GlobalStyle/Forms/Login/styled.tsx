import styled, { css } from 'styled-components';
import * as GS from '../../../GlobalStyle';

export const FormItem = styled(GS.FlexRow)`
  width: 300px;
  & > label {
    display: ${props => props.isDisplay || 'none'};
  }
`;

export const FormInput = GS.FullWidth.withComponent('input');
