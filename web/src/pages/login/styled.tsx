import styled, { css } from 'styled-components';
import * as GS from '../../components/GlobalStyle';
import { BREAK_POINT_MOBILE } from '../../constants';

export const ImageInputCard = styled.div`
  width: ${props => props.width};
  border: 1px solid grey;
  height: ${props => props.hegiht};
  display: flex;
  flex-direction: ${props => (props.imagePosition === 'left' ? 'row' : 'row-reverse')};
`;

const sharedFlexItemStyle = css`
  flex: 1 1 auto;
  display: flex;
`;

export const LoginFormArea = styled.div`
  ${sharedFlexItemStyle}
`;

export const BackgoundImage = styled.div`
  ${sharedFlexItemStyle}
`;

export const CenterWrap = styled(GS.CenterWrap)`
  max-width: 1080px;
  max-height: 700px;
  flex-direction: row;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.15);
  border: 3px solid violet;

  @media (max-width: ${BREAK_POINT_MOBILE}) {
    box-shadow: none;
    padding: 20px 10px;
    max-height: 100vh;
    max-width: 100%;
    & > *:nth-child(2) {
      display: none;
    }
  }
`;
