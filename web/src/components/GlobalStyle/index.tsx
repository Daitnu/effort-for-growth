import styled from 'styled-components';
import { BREAK_POINT_MOBILE } from '../../constants';

export const FullScreenWrap = styled.div`
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  background: ${props => `center/cover no-repeat url(${props.bg})` || 'none'};
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
  background: white;
  z-index: 99;
  @media (max-width: ${BREAK_POINT_MOBILE}) {
    width: 100%;
    height: 100%;
    background: none;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FullWidth = styled.div`
  width: 100%;
`;

export const SpaceBetweenWithFullWidth = styled(FullWidth)`
  display: flex;
  justify-content: space-between;
`;

export const AlignCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const FlexJustifyAlignCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackgroundImageStyle = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const IconStyle = styled(BackgroundImageStyle)`
  width: 30px;
  height: 30px;
`;
