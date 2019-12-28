import styled from 'styled-components';

export const ImageInputCard = styled.div`
  width: ${props => props.width};
  border: 1px solid grey;
  height: ${props => props.hegiht};
  display: flex;
  flex-direction: ${props => (props.imagePosition === 'left' ? 'row' : 'row-reverse')};
`;
