import styled, { css } from 'styled-components';
import * as GS from '~/components/GlobalStyle';
import { BREAK_POINT_MOBILE } from '~/constants';
import backgroundImg from 'Assets/space.jpg';

const width: Number = 760;
const height: Number = 600;

const UNIT = {
  REM: 'rem',
  EM: 'em',
  PX: 'px',
};

export const ImageInputCard = styled.div`
  width: ${props => props.width};
  border: 1px solid grey;
  height: ${props => props.hegiht};
  display: flex;
  flex-direction: ${props => (props.imagePosition === 'left' ? 'row' : 'row-reverse')};
`;

const sharedFlexItemStyle = css`
  width: ${width / 2 + UNIT.PX};
  height: ${height + UNIT.PX};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginFormArea = styled.div`
  ${sharedFlexItemStyle}
  background-color: white;
`;

export const BackgoundImage = styled(GS.BackgroundImageStyle)`
  ${sharedFlexItemStyle}
  background-image: url(${backgroundImg});
`;

export const CenterWrap = styled(GS.CenterWrap)`
  width: ${width + UNIT.PX};
  height: ${height + UNIT.PX};
  flex-direction: row;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.15);

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
