import styled from 'styled-components';
import { BREAK_POINT_MOBILE } from '../../constants';

export const FullScreenWrap = styled.div`
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  background: ${props => `url(${props.bg})` || 'red'};
`;

export const CenterWrap = styled.div`
  position: absolute;
  box-sizing: border-box;
  overflow: hidden;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${BREAK_POINT_MOBILE}) {
    width: 100%;
    height: 100%;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;