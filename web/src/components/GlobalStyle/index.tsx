import styled from 'styled-components';

export const FullScreenWrap = styled.div`
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  background: white;
`;

export const CenterWrap = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${props => props.width || '99%'};
  height: ${props => props.height || '99%'};
  border: 3px solid blue;
`;
