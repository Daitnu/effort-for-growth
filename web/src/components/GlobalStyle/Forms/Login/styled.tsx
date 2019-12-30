import styled, { css } from 'styled-components';
import * as GS from '../../../GlobalStyle';

export const FlexRow = styled(GS.FlexRow)`
  & > label {
    display: ${props => props.display || 'none'};
  }
`;
